<template>
  <div>
    我是Home
    <router-link to="/home/news" active-class="active">news</router-link>
    <router-link to="/home/message" active-class="active">message</router-link>
    <div>
        <keep-alive :include="['MessageView']">
            <router-view></router-view>
        </keep-alive>
    </div>
  </div>
  
</template>

<script>

export default {
    name: 'HomeView'

}

</script>

<style lang='scss' scoped>
.active {
    color: #fff;
    background-color: #0d6efd;
}

</style>
