const webpack = require('webpack');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const ESLintPlugin = require('eslint-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development'

const babelOptions = preset => {
    const opts = {
      presets: [
        '@babel/preset-env'
      ],
      plugins: [
        '@babel/plugin-proposal-class-properties'
      ]
    }

    if (preset) {
      opts.presets.push(preset)
    }

    return opts
  }

  const jsLoaders = () => {
    const loaders = [{
      loader: 'babel-loader',
      options: babelOptions()
    }]

    if (isDev) {
      loaders.push('eslint-loader')
    }

    return loaders
  }

module.exports = (env, options) => {
    const isProd = options.mode === 'production';

    const config = {
        mode: isProd ? 'production' : 'development',
        devtool: isProd ? 'nosources-source-map' : 'source-map', 
        watch:!isProd,
        entry: ['./src/index.js', './src/style.scss'],
        output:{
            path: path.join(__dirname,'/dist'),
            filename: 'script.js'
        },

        module:{
            rules:[

                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: jsLoaders()
                  },

                {
                    test: /\.scss$/,
                    use: [
                        {
                            loader: MiniCssExtractPlugin.loader,
                            options: {
                                publicPath: ''
                            }
                        },
                        {
                            loader: "css-loader"
                        },{
                            loader: "sass-loader"
                        }
                    ]
                },
                {
                  rules: [
                    {
                      test: /\.css$/,
                      use: [ MiniCssExtractPlugin.loader, 'css-loader']
                    }
                  ]
                },
                {
                    test: /\.(png|svg|mp3|jpg|gif)$/,
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
                template:'./index.html'
            }),
            new MiniCssExtractPlugin({
                filename:'style.css'
            }),
            new CopyPlugin({
              patterns: [
                { from: "./src/img", to: "./img" },
                { from: "./src/audio", to: "./audio" },
              ],
            }),
            new ESLintPlugin()
        ],
    }

    return config;
}