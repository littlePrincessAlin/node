// dev多页面
/**
 * 1、
 */
"use strict";
const glob = require("glob");
const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const setMPA = () => {
  const entry = {};
  const htmlWebpackPlugin = [];
  const entryFiles = glob.sync(path.join(__dirname, "./src/*/Index.jsx"));
  Object.keys(entryFiles).forEach((index) => {
    const entryFile = entryFiles[index];
    console.log('entryFile', entryFile);
    const match = entryFile.match(/src\/(.*)\/Index\.jsx/);
    const pageName = match && match[1];
    entry[pageName] = entryFile;
    htmlWebpackPlugin.push(
      new HtmlWebpackPlugin({
        template: path.join(__dirname, `${pageName}.html`),
        filename: `${pageName}.html`,
        chunks: [pageName], // 如果有分包，需要注入到html 举例：chunks: ['common', 'defaultVendors']
        minify: {}, // 压缩相关
      })
    );
  });
  return {
    entry,
    htmlWebpackPlugin,
  };
};
const { entry, htmlWebpackPlugin } = setMPA();
// entry: glob.sync(path.join(__dirname, './src/*/Index.jsx'))
// entry: {
//   home: path.resolve(__dirname, "Home/Index.jsx"),
//   detail: path.resolve(__dirname, "Detail/Index.jsx")
// },
module.exports = {
  mode: "development",
  entry,
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name][chunkhash:8].js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: "babel-loader",
      },
      {
        test: /\.css$/, // css解析
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [new CleanWebpackPlugin(), ...htmlWebpackPlugin],
  devServer: {
    contentBase: "./dist",
    hot: true,
  },
};
