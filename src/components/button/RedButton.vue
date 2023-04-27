<template>
    <button :disabled="disabledButton" class="btn" :type="buttonType">{{ buttonText }}</button>
</template>

<script>
export default {
    name: "RedButton",
    props:["buttonText","buttonType", "disabledButton"]
}
</script>

<style scoped>

button{
    color: white;
    font-weight: bold;
    height: 3rem;
    width: 100%;
    text-transform: uppercase;
}

button{
    position: relative;
    display: inline-flex;
    transition: .25s;
    align-items: center;
    justify-content: center;
    color: white;
    background-color: rgba(250, 80, 80, 0.3);
    font-size: 1rem;
    font-weight: 700;
    line-height: 1.5rem;
}

button:after{
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

button:not([disabled]):hover:after{
    top: -5px;
    left: -5px;
    right: -5px;
    bottom: -5px;
}

button:not([disabled]):hover{
    background: #fa5050;
}
button:disabled{
    cursor: not-allowed! important;
}
</style>