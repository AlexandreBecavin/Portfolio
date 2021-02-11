const path = require('path')
const PrerenderSPAPlugin = require('prerender-spa-plugin')

module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  chainWebpack: config => {
    config.module.rule('downloads')
    // bundle common document files
    .test(/\.(pdf|zip|docx?|xlsx?|csv|pptx?)(\?.*)?$/)
    .use('file-loader')
    // use the file-loader
    .loader('file-loader')
    // bundle into the "downloads" directory
    .options({ name: 'downloads/[name].[hash:8].[ext]' })


    /* 
     Configure preload to load all chunks
     NOTE: use `allChunks` instead of `all` (deprecated)
    */
    config.plugins.delete('prefetch')
    config.plugin('preload').tap((options) => {
      options[0].include = 'allChunks'
      return options
    })

    /*
    pre-render for seo
    */
    config.plugin('html').tap(args => {
      args[0].filename = process.env.WEBPACK_DEV_SERVER ? 'index.html' : 'i.html';
      return args
    })

  },

  /*
    pre-render for seo
  */

  configureWebpack: {
    plugins: [
      new PrerenderSPAPlugin({
        indexPath: path.resolve('dist/i.html'),
        staticDir: path.resolve('dist'),
        routes: [ '/', '/projet/portfolio', '/projet/briquestore', '/projet/la_rencontre', '/projet/student_lab', '/projet/qg_amboise'],
      }),
    ]
  },



  pwa: {
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      swSrc: '/src/registerServiceWorker.js',
      exclude: [
          /\.map$/, 
          /manifest\.json$/ 
      ],
    },
    themeColor: '#1da025'
  },

}
