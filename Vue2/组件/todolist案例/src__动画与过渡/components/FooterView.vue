<template>
  <div class="wrapper" v-show="TodoList.length">
    <!-- 第一种写法 -->
    <!-- <input type="checkbox" :checked="isAll" @click="handleCheckAll"> 已完成{{DoneTotal}}/全部{{TodoTotal}} -->

    <!-- 第二种写法 -->
    <input type="checkbox" v-model="isAll"> 已完成{{DoneTotal}}/全部{{TodoTotal}}
    <button @click="handleClearDone">清除已完成任务</button>
  </div>
</template>

<script>
export default {
    name:'FooterView',
    data(){
        return {
            checked:false
        }
    },
    props: ['TodoList', 'checkAll','clearChecked'],
    computed:{
        // 计算属性统计已完成数量
        // DoneTotal(){
        //     let i = 0
        //     this.TodoList.forEach(item=>{
        //         if(item.done) i++
        //     })
        //     return i
        // },

        DoneTotal(){
            return this.TodoList.reduce((pre,cur)=>{
                return pre + (cur.done? 1:0)
            },0)
        },
        TodoTotal(){
            return this.TodoList.length
        },
        // isAll(){
        //     return this.DoneTotal === this.TodoTotal
        // },
        isAll:{
            get(){
                return this.DoneTotal === this.TodoTotal
            },
            set(value){
                this.checkAll(value)
            }
        },

    },
    methods:{
        // 是否勾选所有，第一种才需要
        // handleCheckAll(e){
        //     this.checkAll(e.target.checked)
        // },
        // 删除已完成
        handleClearDone(){
            this.clearChecked()
        }
    }
}

</script>

<style lang='scss' scoped>
.wrapper{
    position: relative;
    margin: 0 18px;
    input {
        margin-bottom: 30px;
        margin-left: 10px;
    }
    button {
        position: absolute;
        right: 0;
        height: 30px;
        background-color: rgb(215, 75, 70);
        border: none;
        color: #fff;
        cursor: pointer;
    }
}
</style>
