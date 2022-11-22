<template>
    <div>
        <h1>当前求和的值为：{{$store.state.sum}}</h1>
        <h1>当前求和10倍值为：{{$store.getters.bigSum}}</h1>
        <select v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button class="add" @click="add">+</button>
        <button class="minus" @click="minus">-</button>
        <button @click="oddAdd">当前求和值为奇数再加</button>
        <button @click="waitAdd">等一等再加</button>
    </div>
</template>

<script>
export default {
    name:'CountView',
    data(){
        return {
            n:1
        }
    },
    methods:{
        add(){
            this.$store.dispatch('jia',this.n);
        },
        minus() {
            this.$store.dispatch('minus', this.n);
        },
        oddAdd() {
            this.$store.commit('ODDADD', this.n)
        },
        waitAdd(){
            this.$store.dispatch('waitAdd',this.n)
        }
    }
}

</script>

<style lang='scss' scoped>
.add {
    width: 50px;
}
.minus {
    width: 50px;
}
button {
    margin: 100px 20px;
}
</style>
