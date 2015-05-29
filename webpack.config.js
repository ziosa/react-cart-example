var path = require('path');


module.exports = {
    entry: [
      'webpack/hot/dev-server', path.resolve(__dirname, 'app/index.js')],
    module: {
      loaders: [{
        loader: 'babel'
      }]
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    }
};
