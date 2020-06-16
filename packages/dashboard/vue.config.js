module.exports = {
  lintOnSave: process.env.NODE_ENV === 'production',
  // publicPath: "./",
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://localhost:3000'
      },
      '^/admin-api': {
        target: 'http://localhost:3000'
      }
    }
  }
}
