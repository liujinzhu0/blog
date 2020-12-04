"use strict";

// 设置next项目能够通过路径的形式引入css文件
var withCss = require("@zeit/next-css");

var withScss = require("@zeit/next-sass");

if (typeof require !== 'undefined') {
  require.extensions['.css'] = function (file) {};
}

module.exports = withCss({});