// dev多页面
/**
 * 1、
 */
"use strict";
const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");


module.exports = {
  mode: "development",
  // entry: glob.sync(path.join(__dirname, './src/*/index.js'))
  entry: {
    home: path.resolve(__dirname, "Home/Home.jsx"),
    detail: path.resolve(__dirname, "Detail/Detail.jsx")
  },
  output: {
    path: path.resolve(__dirname, "../lilin/dist"),
    filename: "main[chunkhash:8].js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: "babel-loader",
      },
      {
        test: /\.css$/, // css解析
        use: [ "style-loader", "css-loader" ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
  ],
  devServer: {
    contentBase: "./dist",
    hot: true
  },
};
