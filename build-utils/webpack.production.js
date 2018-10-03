const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = () => ({
  devtool: 'source-map',
  output: {
    filename: '[chunkhash].js'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
          'postcss-loader'
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[chunkhash].css'
    })
  ]
})
