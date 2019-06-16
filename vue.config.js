module.exports = {
  devServer: {
    disableHostCheck: true,
    compress: true,
    watchOptions: {
      ignored: /node_modules/,
      aggregateTimeout: 300,
      poll: 1000,
    },
  }
}