<template>
    <div class="demo">
        <h2 @click="showName">学校名称：{{name}}</h2>
        <h2>学校地址：{{address}}</h2>
    </div>

</template>

<script>

    // import {hunhe,hunhe2} from '../mixin'

    export default {
        name:'TestSchool',
        data() {
            return {
                name:'湖南大学',
                address:'广东深圳市',
                x:999
            }
        },
        // methods:{
        //     showName(){
        //         alert(this.name)
        //     }
        // },
        // mixins:[hunhe,hunhe2],
        mounted(){
            console.log('你好啊!!!!!!!!!!!！')
        },
    }

</script>

<style>
    .demo{
        background-color: antiquewhite;
    }

</style>