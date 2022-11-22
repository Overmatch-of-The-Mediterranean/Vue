<template>
  <div>
    我是About
  </div>
</template>

<script>
export default {
    name:'AboutView',
    beforeRouteEnter(to,from,next){
        if(to.meta.isAuth) {
            if(localStorage.getItem('school')==='hpu') {
                next()
            } else {
                alert('没有权限访问')
            }
        }
    },
    beforeRouteLeave(to,from,next){
        console.log('beforeRouteLeave')
        next()
    }
}

</script>

<style lang='scss' scoped>
.active {
    color: #fff;
    background-color: #0d6efd;
}
</style>
