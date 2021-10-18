import * as React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

const JobList = ({ data }) => {
  const { allMarkdownRemark: foundJobs } = data;

  const { edges: jobs } = foundJobs;

  return (
    <>
      {jobs.map((job) => (
        <div key={job.node.id}>
          <h3>{job.node.frontmatter.title}</h3>
          <p>
            {job.node.excerpt}
            <Link to={job.node.fields.slug}>learn more!</Link>
          </p>
        </div>
      ))}
    </>
  );
};

JobList.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.object,
  }),
};

const ActiveJobs = (props) => {
  return (
    <StaticQuery
      query={graphql`
        query {
          allMarkdownRemark(filter: { frontmatter: { active: { eq: true } } }) {
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
      render={(data) => <JobList data={data} {...props} />}
    />
  );
};

export default ActiveJobs;
