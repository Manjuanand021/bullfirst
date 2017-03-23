var webpack = require('webpack');

module.exports = {
    context: __dirname + '/js',
    entry: {
        app: './app.js',
        vendor: ['angular']
    },
    output: {
        path: __dirname + '/output',
        filename: 'app.bundle.js'
    },
    // watch: true,
    plugins: [        
        new webpack.optimize.CommonsChunkPlugin({
            name: "vendor",
            filename: "vendor.bundle.js",
        })
    ]
};