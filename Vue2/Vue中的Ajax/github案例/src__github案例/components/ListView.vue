<template>
  <div class="wrapper">
    <div class="wrapper__user" v-for="item in info.userList" :key="item.login">
        <a :href="item.html_url" target="_blank">
            <img :src="item.avatar_url" alt=""><br>
        </a>
        <span>{{item.login}}</span>
    </div>
    <!-- 加载 -->
    <h2 v-show="info.isFirst">Welcome!!!</h2>
    <h2 v-show="info.isLoading">Loading</h2>
    <!-- 错误 -->
    <h2 v-show="info.errmsg">{{info.errmsg}}</h2>
  </div>
</template>

<script>
export default {
    name:'ListView',
    data(){
        return{
            info:{
                isFirst:true,
                isLoading:false,
                userList:[],
                errmsg:''
            }
        }
    },
    mounted(){
        this.$bus.$on('searchList', (data)=>{
            this.info = {...this.info,...data}
        })
    },
    beforeDestroy() {
        this.$bus.$off('searchList')
    },
    
}

</script>

<style lang='scss' scoped>
.wrapper {
    display: flex;
    flex-wrap: wrap;
    margin: 20px 32px 40px 32px;
    &__user{
        width: 33%;
        border: 1px solid rgb(221, 221, 221);
        text-align: center;
        margin-left: -1px;
        
    }
}
img {
    width: 50%;
}
</style>
