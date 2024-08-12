<template>
    <div>
        <h2>学生名称：{{name}}</h2>
        <h2>学生性别：{{sex}}</h2>
    </div>

</template>

<script>


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
    }

</script>

