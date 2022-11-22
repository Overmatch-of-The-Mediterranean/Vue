<template>
    <div>
        <CountView />
        <PersonView />
    </div>
</template>

<script>
import CountView from './components/CountView.vue'
import PersonView from './components/PersonView.vue';
export default {
    name: 'App',
    components: { CountView, PersonView },
    mounted() {
        console.log('App', this);
    }
}

</script>

<style lang='scss' scoped>

</style>

