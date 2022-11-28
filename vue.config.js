const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // lintOnSave:false
})
module.exports = defineConfig({
  configureWebpack:{
    plugins: [new NodePolyfillPlugin()]
  }
})
