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
  }
}