import * as React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import favicon from '../../images/icon.png';
import ogImage from '../../images/og.png';

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

  const ogTitle = 'Join the Bulk Apothecary/Natural Essentials team today!';

  const ogDescription =
    'We are looking for naturals like you to join our ' +
    'team.  Apply today and get your career started with us right away!';

  return (
    <Helmet>
      <html lang="en" />
      <title>{`${metaTitle} | ${data.site.siteMetadata.title}`}</title>
      <meta name="description" content={metaDescription} />
      <meta name="author" content={data.site.siteMetadata.author} />
      <meta name="og:title" content={ogTitle} />
      <meta name="og:desciption" content={ogDescription} />
      <meta name="og:image" content={ogImage} />
      <link rel="icon" href={favicon} />
    </Helmet>
  );
};

export default Metadata;
