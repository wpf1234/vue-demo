const webpack = require('webpack');

module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  // 选项...
  devServer: {
    port: 8080,
    // proxy:{
    //   '/': {
    //     target: 'http://192.168.0.125:3000/',
    //     changeOrigin: true,
    //     pathRewrite: {}
    //   },
    // }
  },
  configureWebpack: {//引入jquery
    plugins: [
      new webpack.ProvidePlugin({
        $:"jquery",
        jQuery:"jquery",
        "windows.jQuery":"jquery"
      })
    ]
  },
}