<template>
<div class="wraper">
    <li>
        <label>
            <input type="checkbox" :checked="item.done" @click="changeCheck(item.id)"> {{item.title}}
        </label>
        <button @click="handleDelete(item.id)">删除</button>
    </li>
</div>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
    name: 'ItemView',
    props: ['item','changeCheck'],
    methods:{
        // 是否勾选任务
        handleCheck(id) {
            this.changeCheck(id)
        },
        // 是否删除某项任务
        handleDelete(id){
            pubsub.publish('changeTodoList',id)
        }
    }
}

</script>

<style lang='scss' scoped>
.wraper {
    box-sizing: border-box;
    padding: 0 18px;
}

li {
    list-style: none;
    border: 1px solid #000;
    height: 40px;
    text-align: left;
    line-height: 40px;
    margin-bottom: -1px;
    input {
        margin-left: 10px;
    }
    button {
        height: 30px;
        display: none;
        float: right;
        width: 60px;
        margin-right: 20px;
        margin-top: 5px;
        background-color: rgb(215, 75, 70);
        border: none;
        color: #fff;
        cursor: pointer;
        z-index: 999;
    }
}
li:hover{
    background-color: rgb(221, 221, 221);
}
li:hover button{
    display: block;
}
</style>
