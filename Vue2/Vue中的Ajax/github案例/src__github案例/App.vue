<template>
    <div id="app">
        <SearchView/>
        <ListView/>
    </div>
</template>

<script>
import ListView from './components/ListView.vue'
import SearchView from './components/SearchView.vue'

export default {
    name: 'App',
    data() {
        return {
            
        }
    },
    components: {
        SearchView,ListView
    },
    methods: {
        
    }
}
</script>

<style>
/* #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    width: 600px;
    margin-top: 60px;
    margin-left: 200px;
    border: 1px solid #000;
} */
</style>
