<template>
  <div>
    <input type="text" class="header" placeholder="请输入任务名称，按回车确认" @keyup.enter="add">
  </div>
</template>

<script>
import { nanoid } from 'nanoid'
export default {
    name: 'HeaderView',
    methods:{
        // 添加任务
        add(e){
            this.recieveTodo({ id: nanoid(), title: e.target.value, done:false})
            e.target.value = ''
        }
    },
    props: ['recieveTodo']
}

</script>

<style lang='scss' scoped>
.header{
    width: 564px;
    height: 40px;
    box-sizing: border-box;
    margin: 10px 18px 0 18px;
    outline: none;
    padding-left: 16px;
}
</style>
