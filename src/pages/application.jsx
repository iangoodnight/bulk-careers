import * as React from 'react';
import { graphql } from 'gatsby';
import Application from '../components/Application';
import Layout from '../components/Layout';

const ApplicationPage = ({ data, location }) => {
  const { allMarkdownRemark: { edges = [] } = {} } = data;

  const { search } = location;

  const openJobs = [
    ['default', 'Any open position'],
    ...edges
      .map((edge) => [edge.node.id, edge.node.frontmatter.title])
      .sort(([, titleA], [, titleB]) => {
        if (titleA > titleB) return 1;
        if (titleB > titleA) return -1;
        return 0;
      }),
  ];

  const jobs = openJobs.map(([, job]) => {
    return job
      .split(' ')
      .map((string) => string.toLowerCase())
      .join('-');
  });

  const positionRe = /\?position=(?<position>[-a-z]+)/;

  const match = positionRe.exec(search);

  const searched = match?.groups?.position;

  return (
    <Layout>
      <Application
        openJobs={openJobs}
        position={jobs.includes(searched) && searched}
      />
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
