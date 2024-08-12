<template>
    <div class="demo">
        <h2 >学校名称：{{name}}</h2>
        <h2>学校地址：{{address | mySlice}}</h2>
        <button @click="test">点我测试一下hello</button>
    </div>

</template>

<script>


    export default {
        name:'TestSchool',
        data() {
            return {
                name:'湖南工程学院',
                address:'湖南省湘潭市',
                x:999
            }
        },
        methods:{
            test(){
                this.hello();
            }
        },

    }

</script>

<style>
    .demo{
        background-color: antiquewhite;
    }

</style>