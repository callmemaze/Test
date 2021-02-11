module.exports = {
    siteMetadata: {
        title: `Porfolio`,
        description: `This is a portfolio`,
        author: `Dipesh Shrestha`,
      },
    plugins: [
        {
        resolve: `gatsby-plugin-manifest`,
        options: {
          name: 'React go',
          short_name: 'Reactgo',
          start_url: '/',
          background_color: '#f7f0eb',
          theme_color: '#a2466c',
          display: 'standalone',
          icon: 'src/images/DSlogo.png',
        },
      }
  
     // other plugins goes here
    ],
  }