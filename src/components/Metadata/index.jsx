import * as React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
// import favicon from '../images/...';

const Metadata = ({ title, description }) => {
  const data = useStaticQuery(
    graphql`
      query metaQuery {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  );

  const metaTitle = title || data.site.siteMetadata.title;

  const metaDescription = description || data.site.siteMetadata.description;

  return (
    <Helmet>
      <html lang="en" />
      <title>{`${metaTitle} | ${data.site.siteMetadata.title}`}</title>
      <meta name="description" content={metaDescription} />
      <meta name="author" content={data.site.siteMetadata.author} />
    </Helmet>
  );
};

export default Metadata;
