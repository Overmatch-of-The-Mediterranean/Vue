<template>
    <div>
        <ul>
            <li>
                <input type="text">
            </li>
            <li>
                <input type="text">
            </li>
            <li>
                <input type="text">
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:'MessageView'
}

</script>

<style lang='scss' scoped>
a {
    display: inline;
    border: none;
}
li {
    height: 30px;
    list-style: none;
}
input {
    outline: none;
}
</style>