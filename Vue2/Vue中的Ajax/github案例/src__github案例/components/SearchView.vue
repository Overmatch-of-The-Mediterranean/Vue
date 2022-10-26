<template>
  <div class="wrapper">
    Search Github Users<br>
    <input type="text" v-model="keyword">
    <button @click="searchUsers">Search</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    name:'SearchView',
    data(){
        return{
            keyword:''
        }
    },
    methods:{
        searchUsers(){
            this.$bus.$emit('searchList', { isFirst:false,isLoading: true, userList: [], errmsg: '' })
            axios.get(`https://api.github.com/search/users?q=${this.keyword}`)
            .then(
                response=>{
                    console.log(response.data.items);
                    this.$bus.$emit('searchList', { isLoading: false, userList: response.data.items,errmsg:''})
                },
                error=>{
                    console.log(error);
                    this.$bus.$emit('searchList', { isLoading: false, userList:[], errmsg: error.message})
                }
            )
        }
    }
}

</script>

<style lang='scss' scoped>
.wrapper {
    background-color: rgb(221, 221, 221);
    margin: 20px 32px 40px 32px;
    height: 240px;
    padding-top: 100px;
}
input {
    outline: none;
    padding-left: 15px;
    margin-right: 15px;
    margin-top: 20px;
}
</style>
