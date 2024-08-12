<template>
  <div id="app">
    <TestStudent/>
    <TestSchool/>
  </div>
</template>
<script>

import TestStudent from './components/TestStudent.vue'
import TestSchool from './components/TestSchool.vue'

export default {
  name: 'App',
  components: {
    TestStudent,
    TestSchool,
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


<style>
  /*
  全局的样式是不需要加scoped
  全局共享
  */
  .title{
    color: red;
  }
</style>


