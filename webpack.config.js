const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: {
    main: './public',
  },
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|jpeg|jpg|ico|svg)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(otf|eot|woff|woff2|ttf)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(js)$/,
        use: {
          loader: 'babel-loader',
          exclude: /node_modules/,
          options: {
            presets: ['env']
          }
        }
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    })
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  }
}
