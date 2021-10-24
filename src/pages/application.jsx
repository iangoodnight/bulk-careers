import * as React from 'react';
import { graphql } from 'gatsby';
import Application from '../components/Application';
import Layout from '../components/Layout';
import Metadata from '../components/Metadata';

const ApplicationPage = ({ data, location }) => {
  const { allMarkdownRemark: { edges = [] } = {} } = data;

  const { search = '' } = location;

  const positionRe = /\?position=(?<position>[-a-z]+)/;

  const match = positionRe.exec(search);

  const searched = match?.groups?.position;

  const toSafeKebab = (str) => {
    return str
      .split('')
      .filter((char) => char.match(/[ _a-z0-9]/i))
      .join('')
      .split(' ')
      .map((word) => word.toLowerCase())
      .filter((word) => word !== '')
      .join('-');
  };

  const openJobs = [
    ['default', 'Any open position'],
    ...edges.map((edge) => [edge.node.id, edge.node.frontmatter.title]),
  ].sort(([, titleA], [, titleB]) => {
    if (titleA > titleB) return 1;
    if (titleB > titleA) return -1;
    return 0;
  });

  if (searched) {
    const job = openJobs.filter(([, title]) => {
      return searched === toSafeKebab(title);
    });
    if (job.length) {
      return (
        <Layout>
          <Metadata title="Apply Now" />
          <Application openJobs={job} />
        </Layout>
      );
    }
  }
  return (
    <Layout>
      <Metadata title="Apply Now" />
      <Application openJobs={openJobs} />
    </Layout>
  );
};

export const query = graphql`
  query OpenJobsQuery {
    allMarkdownRemark(filter: { frontmatter: { active: { eq: true } } }) {
      edges {
        node {
          frontmatter {
            title
          }
          id
        }
      }
    }
  }
`;

export default ApplicationPage;
