import * as React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

const JobList = ({ data }) => {
  const { allMarkdownRemark: foundJobs } = data;

  const { edges: jobs } = foundJobs;

  return (
    <section>
      <ul>
        { jobs.map((job) => (
          <li key={job.node.id}>{job.node.frontmatter.title}</li>
        ))}
      </ul>
    </section>
  );
};

JobList.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.object,
  }),
}

const ActiveJobs = (props) => {
  return (
    <StaticQuery
      query={graphql`
        query {
          allMarkdownRemark(filter: {frontmatter: {active: {eq: true}}}) {
            edges {
              node {
                id
                fields {
                  slug
                }
                excerpt
                frontmatter {
                  title
                }
              }
            }
          }
        }
      `}
      render={data => <ActiveJobs data={data} {...props} />}
    />
  );
}

export default ActiveJobs;
