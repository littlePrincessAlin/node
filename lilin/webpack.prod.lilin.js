// 生产环境
/**
 * 1、不需要热更新
 * 2、
 */
"use strict";
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "../lilin/commonJs/app.jsx"), // 不能直接用'../lilin/commonJs/index.js', 因为找不到路径，需要用绝对路径
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
        // use: [ MiniCssExtractPlugin.loader, "css-loader" ],
        use: [ "style-loader", "css-loader" ],
      },
      {
        test: /\.less$/, // less解析
        use: [ "style-loader", "css-loader", "less-loader" ],
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
    new MiniCssExtractPlugin({
      filename: "main[contenthash:8].css",
    }),
  ],
};
