const path = require('path'),
    optimize = require('webpack').optimize,
    htmlWebpackPlugin = require('html-webpack-plugin'),
    visualizer = require('webpack-visualizer-plugin'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    context: __dirname + '/app',
    entry: {
        app: '../main.js',
        vendor: ['angular']
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        //hash helps with cache busting
        //Everytime if there are file changes, webpack changes hash - 16 digit postfix to bundled file
        filename: '[name].[hash].bundle.js'
    },
    //Loaders are more like preprocessors - transforms modules before webpack creates bundle
    module: {
        rules: [{
                test: /\.js$/,
                use: 'babel-loader'
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract({
                    use: [{
                        loader: 'css-loader'
                    }, {
                        loader: 'sass-loader'
                    }],
                    fallback: 'style-loader'
                })
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                loaders: [
                    // To copy a file from your context directory into the output directory retaining the full directory structure
                    'file-loader?name=[path][name].[hash:6].[ext]',
                    {
                        loader: 'image-webpack-loader',
                        query: {
                            mozjpeg: {
                                progressive: true,
                            },
                            gifsicle: {
                                interlaced: false,
                            },
                            optipng: {
                                optimizationLevel: 4,
                            },
                            pngquant: {
                                quality: '75-90',
                                speed: 3,
                            },
                        }
                    }
                ]
            }
        ]
    },
    //Plugins are post-processors, run on created bundle
    plugins: [
        new optimize.UglifyJsPlugin(),
        //Common vendor code chunk is moved to vendor.js file
        //Without this plugin we will have vendor code both in bundle.js and vendor.js
        new optimize.CommonsChunkPlugin({
            name: 'vendor'
        }),
        new ExtractTextPlugin({
            filename: "./assets/css/[name].[hash:6].bundle.css",
            disable: false,
            allChunks: true
        }),
        new htmlWebpackPlugin({
            template: '../index.html',
            //Cache bursting- disbling this since each file name itself ll handle cache busting
            hash: false
        }),
        new visualizer()
    ],
    devServer: {
        contentBase: __dirname + '/build',
        //gzip compression
        compress: true,
        port: 3000
    }
}