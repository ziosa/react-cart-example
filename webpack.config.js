var path = require('path');
var webpack = require('webpack');

var isDev = process.env.NODE_ENV !== 'production';

module.exports = {

  devtool: isDev ? 'eval' : 'source-map',

  entry: [
    path.join(__dirname, 'src/main.js')
  ].concat(isDev ? [
    'webpack-dev-server/client?http://localhost:8000',
    'webpack/hot/only-dev-server'
  ] : []),

  output: {
    path: 'src/build/',
    filename: '[name].js',
    publicPath: 'build/'
  },

  target: 'web',

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: isDev ? ['react-hot', 'babel'] : ['babel']
      }
    ]
  },

  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ]
};

if (process.env.NODE_ENV === 'production') {
  module.exports.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
  );
}
