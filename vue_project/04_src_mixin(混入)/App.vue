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


