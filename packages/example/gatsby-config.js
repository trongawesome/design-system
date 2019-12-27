module.exports = {
  siteMetadata: {
    title: 'Donut',
    description: 'Donut Carousell Design System',
    keywords: 'gatsby,theme,carbon',
  },
  pathPrefix: `/gtc`,
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Donut Design System',
        short_name: 'Donut',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#0062ff',
        display: 'browser',
      },
    },
    {
      resolve: 'gatsby-theme-carbon',
      options: {
        isSearchEnabled: true,
        repository: {
          baseUrl:
            'https://github.com/tantrongtt/design-system',
          subDirectory: '/packages/example',
        },
      },
    },
  ],
};
