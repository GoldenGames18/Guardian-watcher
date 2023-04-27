<template>
    <div class="flex h-screen w-full back">
        <div class="m-auto">
            <GuardianTitle text-title="Guardian Watcher"/>
            <Form-guardian/>
        </div>
    </div>
</template>

<script>


import GuardianTitle from "../components/Title/GuardianTitle.vue";
import RedButton from "../components/button/RedButton.vue";
import ErrorAlert from "../components/alert/ErrorAlert.vue";
import FormGuardian from "../components/form/FormGuardian.vue";

export default {
    name: "RegisterView",
    components: {FormGuardian, ErrorAlert, RedButton, GuardianTitle},
    data(){
        return {
            test:false
        }
    },
    methods:{
        submitForm(){
            this.test = true
        }
    }
}
</script>

<style scoped>

.back{
    background: url("src/assets/background-register.webp") no-repeat center center fixed;
    overflow: hidden;
    background-size: cover;
}
</style>