module.exports = {
  plugins: [
    require("autoprefixer")({
      // autoprefixer指定需要兼容的浏览器版本
      // 兼容到最近的两个版本，版本使用的人数所占的比例，ios7以上
      // browsers: ["last 2 version", ">1%", "IOS 7"],
    }),
  ],
};
