const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
    devtool: isProd ? false : '#cheap-module-source-map',
    output: {
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/',
        filename: '[name].[chunkhash].js'
        // chunkFilename: '[name].[chunkhash:8].chunk.js'
    },
    resolve: {
        alias: {
            'public': path.resolve(__dirname, '../public'),
            '~assets': path.resolve(__dirname, '../src/assets'),
            '~common': path.resolve(__dirname, '../src/common'),
            '~components': path.resolve(__dirname, '../src/components'),
            '~store': path.resolve(__dirname, '../src/store'),
            '~pages': path.resolve(__dirname, '../src/pages'),
            '~directives': path.resolve(__dirname, '../src/directives')
        }
    },
    module: {
        noParse: /es6-promise\.js$/, // avoid webpack shimming process
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    extractCSS: process.env.NODE_ENV === 'production',
                    preserveWhitespace: false,
                    postcss: [
                        require('autoprefixer')({
                            browsers: ['last 3 versions']
                        })
                    ]
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: '[name].[ext]?[hash]'
                }
            },
            {
                test: /\.css$/,
                use: isProd
                    ? ExtractTextPlugin.extract({
                        use: 'css-loader?minimize',
                        fallback: 'vue-style-loader'
                    })
                    : ['vue-style-loader', 'css-loader']
            }
        ]
    },
    performance: {
        maxEntrypointSize: 300000,
        hints: isProd ? 'warning' : false
    },
    plugins: isProd
        ? [
            new webpack.optimize.UglifyJsPlugin({
                compress: {warnings: false}
            }),
            process.env.VUE_ENV === 'app' ? new ExtractTextPlugin({
                filename: 'style.css'
            }) : new ExtractTextPlugin({
                filename: 'style.[chunkhash].css'
            })
        ]
        : [
            new FriendlyErrorsPlugin()
        ]
}
