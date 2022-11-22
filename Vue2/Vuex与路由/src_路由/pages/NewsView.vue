<template>
  <div>
    <ul>
        <li v-for="item in List" :key="item.id">
            <router-link :to="`/home/news/details?id=${item.id}&title=${item.title}`">{{item.title}}</router-link>
        </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
    name:'NewView',
    data() {
        return {
            List: [
                { id: '001', title: 'new1' },
                { id: '002', title: 'new2' },
                { id: '003', title: 'new3' }
            ]
        }
    }
}

</script>

<style lang='scss' scoped>
a {
    height: 30px;
    width: 55px;
    border: none;
    line-height: 30px;
}

li {
    height: 30px;
}
</style>
