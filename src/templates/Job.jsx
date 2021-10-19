import * as React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout';
import Content from '../components/Content';
import { posting } from './job.module.scss';

const JobPost = ({ data, location }) => {
  const { markdownRemark: job } = data;

  const { title } = job.frontmatter;

  const re = /\/(?<position>[-a-z]+)\/?/;

  const match = re.exec(location.pathname);

  const position = match?.groups?.position;

  console.log(position);
  return (
    <Layout>
      <div className={posting}>
        <h1>{title}</h1>
        <Content content={job.html} />
        <button>
          <Link to={`/application?position=${position ? position : ''}`}>
            Apply now
          </Link>
        </button>
      </div>
    </Layout>
  );
};

JobPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default JobPost;

export const pageQuery = graphql`
  query JobPostById($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
      }
    }
  }
`;
