<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">

    <h1 v-text="msg" ref="title"></h1>
    <button ref="btn" @click="showDOM">点我输出DOM元素</button>
    <TestSchool ref="sch" />
  </div>
</template>

<script>

import TestSchool from './components/TestSchool.vue'

export default {
  name: 'App',
  components: {
    TestSchool,
  },
  data(){
    return {
      msg:'欢迎学习Vue'
    }
  },
  methods:{
    showDOM(){
      console.log(this.$refs.title); // 真实DOM元素
      console.log(this.$refs.btn);// 真实DOM元素
      console.log(this.$refs.sch);//School组件的实例对象（vc）
    }
  }
}
</script>


