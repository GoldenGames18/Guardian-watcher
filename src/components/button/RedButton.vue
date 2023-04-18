<template>
    <button  class="btn">{{ buttonText }}</button>
</template>

<script>
export default {
    name: "RedButton",
    props:["buttonText"]
}
</script>

<style scoped>

button{

    color: white;
    cursor: pointer;
    font-weight: bold;
    height: 3rem;
    width: 100%;
    text-transform: uppercase;
}

.btn{
    position: relative;
    display: inline-flex;
    -webkit-user-select: none;
    user-select: none;
    transition: .25s;
    align-items: center;
    justify-content: center;
    color: white;
    background-color: rgba(250, 80, 80, 0.3);
    font-size: 1rem;
    font-weight: 700;
    line-height: 1.5rem;
}

.btn:after{
    position: absolute;
    content: "";
    display: block;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: solid #fa5050 1px;
    transition: .25s;
}

.btn:hover:after{
    top: -5px;
    left: -5px;
    right: -5px;
    bottom: -5px;
}

.btn:hover{
    background: #fa5050;
}
</style>