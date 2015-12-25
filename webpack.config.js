var path = require('path');
var config = {
    entry: path.resolve(__dirname, 'app/assets/react/main'),
    output: {
        path: path.resolve(__dirname, 'app/assets/javascripts'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loader: 'babel',
            query:
            {
                presets:['es2015', 'react']
            }
        }]
    },
    resolve: {
      extensions: ['', '.js', '.jsx', '.js.jsx']
    }
};

module.exports = config;
