const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
    mode: 'development',
    devServer: {
        historyApiFallback: true,
        static: __dirname,
        open: true,
        compress: true,
        hot: true,
        port: 3000,
    },
    entry: './index.tsx',
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    resolve:
    {
        extensions: ['.tsx', '.ts', '.js'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'My Journey',
            template: 'template.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'styles/[name].[contenthash].css',
            chunkFilename: '[id].css',
        }),
        // fix "process is not defined" error:
        // (do "npm install process" before running the build)
        new webpack.ProvidePlugin({
            process: 'process/browser',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    },
                },
            },
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loader: 'ts-loader'
            },
            {
                test: /\.css$/,
                use: [
                    // https://stackoverflow.com/questions/64316510/uncaught-typeerror-webpack-imported-module-1-default-is-undefined-react-sas
                    // { loader: 'style-loader' },
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            modules: {
                                localIdentName: '[name]_[local]_[hash:base64:5]'
                            }
                        }
                    },
                ]
            },
        ],
    },

}