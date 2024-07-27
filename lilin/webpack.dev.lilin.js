// dev单页面
/**
 * 1、
 */
"use strict";
const path = require("path");
// const webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
console.log("resolve", path.resolve(__dirname, "App.jsx"));
console.log("join", path.join(__dirname, "App.jsx"));

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "App.jsx"), // 不能直接用'../lilin/index.js', 因为找不到路径，需要用绝对路径
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "main[chunkhash:8].js",
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: "babel-loader",
      },
      {
        test: /\.css$/, // css解析
        // use: [ MiniCssExtractPlugin.loader, "css-loader" ],
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              plugins: () => [
                require("autoprefixer")({
                  // autoprefixer指定需要兼容的浏览器版本
                  // 兼容到最近的两个版本，版本使用的人数所占的比例，ios7以上
                  browsers: ["last 2 version", ">1%", "ios7"],
                }),
              ],
            },
          },
        ],
      },
      {
        test: /\.less$/, // less解析
        use: ["style-loader", "css-loader", "less-loader"],
      },
      {
        test: /\.(png|svg|jpg|gif|jpeg)$/, // 图片解析
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 10240,
            },
          },
        ],
      },
      {
        test: /\.(woff|otf|woff2|ttf|eot)$/, // 字体解析
        use: [
          {
            loader: "file-loader",
            options: {
              name: "font/[name][hash:8].[ext]",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    // new webpack.HotModuleReplacementPlugin(), // hot: true,重复功能报警
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "index.html"),
      filename: "index.html",
    }),
  ],
  // watch: true, // 监听文件变化
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    host: "0.0.0.0",
    compress: true, // gzip压缩，默认开启
    hot: true,
    open: true,
  },
};
