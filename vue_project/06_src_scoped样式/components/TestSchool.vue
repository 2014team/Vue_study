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
                name:'xxxxxxxxxxxxxx',
                address:'yyyyyyyyyyyyy',
            }
        },
        methods:{
            test(){
                this.hello();
            }
        },

    }

</script>

<style scoped>
    /*scoped代表局部的*/
    .demo{
        background: skyblue;
    }
</style>