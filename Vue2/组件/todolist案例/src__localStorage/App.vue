<template>
  <div id="app">
    <HeaderView :recieveTodo="recieveTodo" />
    <ListView 
    :TodoList="TodoList" 
    :changeCheck="changeCheck"
    :changeTodoList="changeTodoList"/>
    <FooterView :TodoList="TodoList" :checkAll="checkAll" :clearChecked="clearChecked"/>
  </div>
</template>

<script>
import HeaderView from './components/HeaderView'
import FooterView from './components/FooterView'
import ListView from './components/ListView'

export default {
  name: 'App',
  data(){
     return {
         TodoList: JSON.parse(localStorage.getItem('TodoList')) || [] // null进行JSON.parse后还是null
     }
  },
  components: {
      HeaderView, FooterView, ListView
  },
  methods:{
    // 接收Header组件传回来的数据
    recieveTodo(obj){
        this.TodoList.unshift(obj);
    },
    // 每项任务是否勾选
    changeCheck(id){
        this.TodoList.forEach(item => {
            if(item.id === id){
                item.done = !item.done
            }
        })
    },
    // 删除某项任务
    changeTodoList(id){
        this.TodoList = this.TodoList.filter(item=>{
            return item.id !== id
        })
    },
    // 点击全部勾选，所有的都被勾选上
    checkAll(value) {
          this.TodoList.forEach(item => {
                item.done = value
          })
      },
      // 清除已完成的任务
    clearChecked(){
        this.TodoList = this.TodoList.filter(item=>{
            return item.done !== true
        })
      }
  },
  watch:{
    TodoList:{
        deep:true,
        handler(value){
            localStorage.setItem('TodoList',JSON.stringify(value))
        }
    }
  }
}
</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 600px;
  margin-top: 60px;
  margin-left: 200px;
  border: 1px solid #000;
  
}
</style>
