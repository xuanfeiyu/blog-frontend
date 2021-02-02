// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'BlogPost',
        path: './content/blog/**/*.md',
      }
    },
    {
      use: '@gridsome/source-strapi',
      options: {
        // apiURL: process.env.GRIDSOME_API_URL,
        apiURL: 'http://117.50.93.175:1337/',
        queryLimit: 1000, // Defaults to 100
        contentTypes: ['post'],
        // typeName: 'Strapi',
        singleTypes: ['general'],
        // Possibility to login with a Strapi user,
        // when content types are not publicly available (optional).
        // loginData: {
        //   identifier: 'xuanfeiyu',
        //   password: '1q2w3e4r'
        // }
      }
    }
  ],
  templates:{
    StrapiPost:[
      {
        path: '/post/:id',
        component: './src/templates/Post.vue'
      }
    ]
  }
}
