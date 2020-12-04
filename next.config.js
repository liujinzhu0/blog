// 设置next项目能够通过路径的形式引入css文件
const withCss = require("@zeit/next-css");
const withScss = require("@zeit/next-sass")
if(typeof require !== 'undefined'){
  require.extensions['.css']= file=>{}
}
module.exports =withCss({})