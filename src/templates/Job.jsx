import * as React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';

export const JobPostTemplate = ({
  content,
  contentComponent,
  title,
  helmet,
}) => {
  const PostContent = contentComponent || Content;

  return (
    <section>
      { helmet || '' }
      <div>
        <h1>{title}</h1>
        <PostContent content={content} />
      </div>
    </section>
  );
};

JobPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  title: PropTypes.string,
  helmet: PropTypes.object,
};

const JobPost = ({ data }) => {
  const { markdownRemark: job } = data;

  return (
    <Layout>
      <JobPostTemplate
        content={job.html}
        contentComponent={HTMLContent}
        title={job.frontmatter.title}
        helmet={
          <Helmet titleTemplate="%s | Careers | Natural Essentials Inc">
            <title>{`${job.frontmatter.title}`}</title>
          </Helmet>
        }
      />
    </Layout>
  );
};

JobPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

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
