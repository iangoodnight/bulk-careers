import * as React from 'react';
import { graphql } from 'gatsby';
import Application from '../components/Application';
import Layout from '../components/Layout';

const ApplicationPage = ({ data }) => {
  const { allMarkdownRemark: { edges = [] } = {} } = data;

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

  return (
    <Layout>
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
