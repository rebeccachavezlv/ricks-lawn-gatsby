module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Ricks Lawn",
  },
  plugins: ["gatsby-plugin-sass",
    "gatsby-plugin-gatsby-cloud",
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-smoothscroll`, 
    {
      resolve: `gatsby-source-datocms`,
      options: {
        // You can find your read-only API token under the Settings > API tokens
        // section of your administrative area. Make sure to grant both CDA and CMA permissions.
        apiToken: `181744c546d8856f2d172e850cda04`,

        // The project environment to read from. Defaults to the primary environment:
        environment: `main`,

        // If you are working on development/staging environment, you might want to
        // preview the latest version of records instead of the published one:
        previewMode: false,

        // Disable automatic reloading of content when some change occurs on DatoCMS:
        disableLiveReload: false,

        // Custom API base URL (most don't need this)
        // apiUrl: 'https://site-api.datocms.com',

        // Setup locale fallbacks
        // In this example, if some field value is missing in Italian, fall back to English
        localeFallbacks: {
          it: ['en'],
        },
      },
    }
  ],
};
