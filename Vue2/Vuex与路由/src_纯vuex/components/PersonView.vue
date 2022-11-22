<template>
  <div>
    <h1>添加人员</h1>
    <input type="text" v-model="person" >
    <button @click="addPerson">添加</button>
    <ul>
        <li v-for="item in personList" :key="item.id">{{item.name}}</li>
    </ul>
    <h1>人员总数为：{{personList.length}}</h1>
  </div>
</template>

<script>
import { nanoid } from 'nanoid'
export default {
    name:'PersonView',
    data(){
        return {
            person:''
        }
    },
    computed:{
        personList(){
            return this.$store.state.personList
        }
    },
    methods:{
        addPerson(){
            this.person = {id:nanoid(),name:this.person}
            this.$store.commit('addPerson',this.person)
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
</style>
