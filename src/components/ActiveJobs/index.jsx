import * as React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import { activeJob, apply } from './activeJobs.module.scss';

const JobList = ({ data }) => {
  const { allMarkdownRemark: foundJobs } = data;

  const { edges: jobs } = foundJobs;

  return (
    <>
      {jobs.map((job) => (
        <div className={activeJob} key={job.node.id}>
          <h3>{job.node.frontmatter.title}</h3>
          <p>
            {job.node.excerpt}
            <Link to={job.node.fields.slug}>learn more!</Link>
          </p>
          <Link
            className={apply}
            to={`/application?position=${job.node.fields.slug.substring(1)}`}
          >
            Apply now
          </Link>
        </div>
      ))}
      <div className={activeJob}>
        <h3>Any open entry-level position</h3>
        <p>
          Not sure where to start? Fill out an application for any open
          entry-level position and find out where you fit in on our team today!
        </p>
        <Link className={apply} to="/application">
          Apply now
        </Link>
      </div>
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
                excerpt(pruneLength: 280)
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
