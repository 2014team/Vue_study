<template>
    <div>
        <h2>学生名称：{{name}}</h2>
        <h2>学生年龄：{{age}}</h2>
    </div>
</template>

<script>
    export default {
        name:'TestStudent',
        data() {
            return {
                name: '深圳大学',
                age: 19
            }
        }
    }

</script>
