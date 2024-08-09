<template>
    <div class="demo">
        <h2 >学校名称：{{name}}</h2>
        <h2>学校地址：{{address}}</h2>
    </div>

</template>

<script>


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

    }

</script>

<style>
    .demo{
        background-color: antiquewhite;
    }

</style>