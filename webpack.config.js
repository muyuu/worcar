const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const env = process.env.NODE_ENV;

const assetsPath = path.resolve(__dirname, 'dist/assets');

module.exports = {
    entry: './src/js/index.js',
    output: {
        path: assetsPath,
        filename: 'js/index.js'
    },
    plugins: [
        new ExtractTextPlugin('css/bundle.css'),
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.p?css$/,
                loader: ExtractTextPlugin.extract({
                    loader: 'css-loader?importLoaders=1!postcss-loader'
                }),
            },

        ]
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000
    }
};
