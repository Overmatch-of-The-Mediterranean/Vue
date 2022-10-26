<template>
<div class="wraper">
    <li>
        <label v-show="!item.isEdit">
            <input 
            type="checkbox" 
            :checked="item.done" 
            @click="handleCheck(item.id)"> {{item.title}}
        </label>
        <input 
        v-show="item.isEdit" 
        type="text" 
        :value="item.title" 
        @blur="handleBlur(item,$event)"
        ref="inputFocus">
        <button @click="handleDelete(item.id)">删除</button>
        <button 
        v-show="!item.isEdit" 
        class="edit" 
        @click="handleEdit(item)">编辑</button>
    </li>
</div>
</template>

<script>
export default {
    name: 'ItemView',
    props: ['item'],
    methods:{
        // 是否勾选任务
        handleCheck(id) {
            // this.changeCheck(id)
            this.$bus.$emit('changeCheck',id)
        },
        // 是否删除某项任务
        handleDelete(id){
            console.log(this);
            // this.changeTodoList(id)
            this.$bus.$emit('changeTodoList', id)
        },
        // 点击编辑时，处理isEdit
        handleEdit(todo){
            if (!Object.prototype.hasOwnProperty.call(todo,'isEdit')){
                this.$set(todo, 'isEdit', true)
            }
            else {
                todo.isEdit = true
            }

            // 自动聚焦
            this.$nextTick(function(){
                this.$refs.inputFocus.focus()
            })
        },
        // 失去焦点时，修改数据
        handleBlur(todo,e){
            todo.isEdit = false
            if (e.target.value.trim()==='') return alert('内容不能为空')

            // 传回去的值要是输入后的值
            this.$bus.$emit('editTodo',todo.id,e.target.value)
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
