var path = require('path');

module.exports = {
  devtool: 'eval',
  entry: [ './src/index.js' ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/build/'
  },
  devServer: {
    port: 3000
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        loaders: ['babel-loader'],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]']
      },
      {
        test: /\.(png|jpg|svg)$/,
        loaders: ['file-loader']
      }
    ]
  }
}
