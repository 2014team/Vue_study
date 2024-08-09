<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <TestSchool/>
    <TestStudent/>
  </div>
</template>

<script>

import TestSchool from './components/TestSchool.vue'
import TestStudent from './components/TestStudent.vue'

export default {
  name: 'App',
  components: {
    TestSchool,
    TestStudent
  }
}
</script>


