// Copyright (c) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.
var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
var path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle-dev.js",
    path: path.resolve(__dirname, "..", "public"),
    publicPath: "/"
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".json", ".html"],
    modules: ["node_modules", path.resolve(__dirname, "..", "src")],
    plugins: [new TsconfigPathsPlugin()]
  },
  resolveLoader: {
    modules: ["node_modules"]
  },
  devServer: {
    inline: true,
    contentBase: "public/",
    port: 3001,
    proxy: [
      {
        path: "/api/*",
        target: "http://localhost:3001/"
      }
    ],
    historyApiFallback: true
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /.js(x?)$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        query: {
          presets: ["es2015", "react"]
        }
      },
      {
        test: /\.ts(x?)$/,
        loader: "ts-loader",
        exclude: /node_modules/
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      },
      {
        test: /\.css$/,
        exclude: /\.useable\.css$/,
        loader: "style-loader!css-loader"
      },
      {
        test: /\.useable\.css$/,
        loader: "style-loader/useable!css"
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          },
          {
            loader: "sass-loader",
            options: {
              includePaths: [path.resolve(__dirname, "../src/styles")]
            }
          }
        ]
      },
      {
        test: /bootstrap\/js\//,
        loader: "imports-loader?jQuery=jquery"
      },
      {
        test: /bootstrap-sass[\/\\]assets[\/\\]javascripts[\/\\]/,
        loader: "imports-loader?jQuery=jquery"
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        loader: "html-loader"
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url-loader?limit=10000&mimetype=application/font-woff"
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "file-loader"
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
      hash: true
    }),
    new webpack.ProvidePlugin({
      React: "react"
    })
  ]
};
