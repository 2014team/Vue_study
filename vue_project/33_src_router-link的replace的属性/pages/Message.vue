<template>
    <div>
        <ul>
            <li v-for="m in messageList" :key="m.id">
                <!---跳转路由并携带params参数，to的字符串写法-->
                <!--        <router-link :to="`/home/message/detail/${m.id}/${m.title}`">{{ m.title }}</router-link>&nbsp;&nbsp;-->
                <!--        -跳转路由并携带params参数，to的对象写法-->
                <router-link
                        :to="{
              // path:'/home/message/detail',
              name: 'particulars', //利用路由名字直接跳转路由简化多级路由的path配置
              //注意如果你这里使用params传递参数,不能配置path，只能配置name,一定要注意
              query: {
                id: m.id,
                title: m.title
              }
        }">
                    {{ m.title }}
                </router-link>&nbsp;&nbsp;
            </li>
        </ul>
        <hr/>
        <router-view/>
    </div>
</template>

<script>
    export default {
        name: "Message",
        data(){
            return {
                messageList:[
                    {id: '001', title: '消息001'},
                    {id: '002', title: '消息002'},
                    {id: '003', title: '消息003'},
                ]
            }
        }
    }
</script>

<style scoped>

</style>