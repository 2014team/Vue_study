<template>
    <div class="demo">
        <h2>学校名称：{{name}}</h2>
        <h2>学校地址：{{address}}</h2>
    </div>

</template>

<script>
    export default {
        name:'TestSchool',
        data() {
            return {
                name: '深圳大学',
                address: '广东省深圳市'
            }
        }
    }

</script>

<style>
    .demo{
        background-color: antiquewhite;
    }

</style>