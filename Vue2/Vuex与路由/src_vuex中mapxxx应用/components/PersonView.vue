<template>
  <div>
    <h1>添加人员</h1>
    <input type="text" v-model="person" >
    <button @click="addPerson">添加</button>
    <ul>
        <li v-for="item in personList" :key="item.id">{{item.name}}</li>
    </ul>
    <h1>列表中第一个人的名字是：{{ firstName }}</h1>
    <h1>人员总数为：{{ personSum }}</h1>
  </div>
</template>

<script>
import { nanoid } from 'nanoid'
import { mapState } from 'vuex'
export default {
    name:'PersonView',
    data(){
        return {
            person:''
        }
    },
    computed:{
        // personList(){
        //     return this.$store.state.personList
        // },

        // mapState 数组写法
        ...mapState('PersonAbout',['personList']),
        firstName(){
            return this.$store.getters['PersonAbout/firstName']
        },
        personSum(){
            return this.$store.getters['PersonAbout/personSum']
        }
        // mapState 对象写法
        // ...mapState({ personList:'personList'})
    },
    methods:{
        addPerson(){
            if (this.person.trim()!=='')
                this.person = {id:nanoid(),name:this.person}
            else {
                alert('名字不能为空')
                return
            }
            this.$store.commit('PersonAbout/addPerson',this.person)
            this.person = ''
        }
    }

}

</script>

<style lang='scss' scoped>
div {
    padding-left: 50px;
}
h1 {
    margin-top: 20px;
}
ul {
    margin-top: 20px;
}
button {
    margin-left: 10px;
}
</style>
