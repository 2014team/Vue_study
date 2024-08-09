<template>
    <div class="demo">
        <h1 v-text="msg"></h1>
        <h2>学生姓名：{{name}}</h2>
        <h2>学生性别：{{sex}}</h2>
        <h2>学生年龄：{{myAge}}</h2>

        <button @click="updateAge">尝试修改接收到的年龄</button>
    </div>

</template>

<script>
    export default {
        name:'TestStudent',
        data() {
            return {
                msg: '我是一个学生',
                myAge:this.age,
            }
        },
        methods:{
            updateAge(){
                this.myAge ++
            }
        },
        // props:['name','sex','age'] // 简单声明接收

        // 接受同时对数据类型限制
        // props:{
        //     name:String,
        //     sex:String,
        //     age:Number
        // }

        //接收的同时对数据:进行类型限制+默认值的指定+必要性的限制

        props:{
            name:{
                type:String, // 字符串类型
                required:true, // 必须字段
            },
            age:{
                type:Number, // 数字类型
                default:99, // 默认值
            }
            ,
            sex:{
                type:String, // 字符串类型
                required:true, // 必须字段
            }
        }

    }

</script>

<style>
    .demo{
        background-color: antiquewhite;
    }

</style>