module.exports = {
  siteMetadata: {
    author: 'Ian Goodnight',
    description: 'Get your career started with Bulk Apothecary.',
    siteUrl: 'https://bulk-careers.netlify.app',
    title: 'Bulk Apothecary / Natural Essentials, Inc. -  Careers',
  },
  plugins: [
    'gatsby-plugin-netlify-cms',
    'gatsby-plugin-sass',
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'jobs',
        path: `${__dirname}/jobs`,
      },
      __key: 'jobs',
    },
    'gatsby-transformer-remark',
  ],
};
