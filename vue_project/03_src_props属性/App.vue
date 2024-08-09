<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">

    <h1 v-text="msg" ref="title"></h1>

    <!--age="20"：age的值字符串   :age="20"  age的值是数字类型-->
   <!-- <TestStudent name="张三" sex="男" age="20"/>-->
    <TestStudent name="张三" sex="男" :age="20"/>
    <TestStudent name="张三" sex="男" />

    <!--
    如果name属性没有的话，前端报如下错误
    vue.runtime.esm.js?c320:4625 [Vue warn]: Missing required prop: "name"

    found in

    -&ndash;&gt; <TestStudent> at src/components/TestStudent.vue
    <App> at src/App.vue
      <Root>-->
    <!--<TestStudent  sex="男" :age="20"/>-->
  </div>
</template>
<script>

import TestStudent from './components/TestStudent.vue'

export default {
  name: 'App',
  components: {
    TestStudent,
  },
  data(){
    return {
      msg:'欢迎学习Vue'
    }
  },
  methods:{

  }
}
</script>


