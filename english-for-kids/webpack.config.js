const webpack = require('webpack');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, options) => {
    const isProd = options.mode === 'production';

    const config = {
        mode: isProd ? 'production' : 'development',
        devtool: isProd ? 'nosources-source-map' : 'source-map', 
        watch:!isProd,
        entry: ['./src/index.js', './src/style.css'],
        output:{
            path: path.join(__dirname,'/dist'),
            filename: 'script.js'
        },

        module:{
            rules:[
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                           presets: ['@babel/preset-env']
                        }
                    }
                },

                {
                    test: /\.css$/,
                    use: [MiniCssExtractPlugin.loader, "css-loader"],
                  },

                {
                    test: /\.(png|svg|jpe?g|gif)$/,
                    use: [
                      {
                        loader: 'file-loader',
                      },
                    ] 
                },

                {
                    test: /\.html$/,
                    loader: 'html-loader',
                 },

            ]
        },

        plugins: [
            new CleanWebpackPlugin(),
            new HtmlWebpackPlugin({
                template:'index.html'
            }),
            new MiniCssExtractPlugin({
                filename:'style.css'
            })            
        ]
    }

    return config;
}