<template>
  <div>
    <div class="margin">
        <router-link to="/about" active-class="active">About</router-link>
        <router-link to="/home" active-class="active">Home</router-link>
        <div class="content">
            <keep-alive include="HomeView">
                <router-view></router-view>
            </keep-alive>
        </div>
    </div>
  </div>
  
</template>

<script>
export default {
    name:'App'
}

</script>

<style lang='scss'>
a {
    display: block;
    width: 150px;
    height: 70px;
    color: #000;
    text-decoration: none !important;
    text-align: center;
    line-height: 70px;
    border: 1px solid rgb(221, 221, 221);
}
.margin {
    position: relative;
    margin: 100px 0 0 300px;
}
.content {
    position: absolute;
    left: 200px;
    top: 0px;
}
.active {
    color: #fff;
    background-color: #0d6efd;
}
</style>


