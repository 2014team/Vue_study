const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  //关掉默认的语法检查
  lintOnSave: false
})
