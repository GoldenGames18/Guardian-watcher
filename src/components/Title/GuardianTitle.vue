<template>
    <h1 class="text-center text-6xl  text-white font mb-4">
        {{ textTitle }}
    </h1>
</template>

<script>
export default {
    name: "GuardianTitle",
    props:["textTitle"]
}
</script>

<style scoped>

@import url('https://fonts.cdnfonts.com/css/cyberthrone');

.font {
    font-family: 'Cyberthrone', sans-serif;
}
</style>