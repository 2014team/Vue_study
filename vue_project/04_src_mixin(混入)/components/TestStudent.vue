<template>
    <div class="demo">
        <h2 @click="showName">学生姓名：{{name}}</h2>
        <h2>学生性别：{{sex}}</h2>
    </div>

</template>

<script>

    // 引入一个hunhe
    // import {hunhe,hunhe2} from '../mixin'

    export default {
        name:'TestStudent',
        data() {
            return {
                name:'张三',
                sex:20
            }
        },
        // methods:{
        //     showName(){
        //         alert(this.name)
        //     }
        // },
        // mixins:[hunhe,hunhe2]
    }

</script>

<style>
    .demo{
        background-color: antiquewhite;
    }

</style>