<template>
  <div class="flex h-screen w-full back">
    <div class="m-auto">
      <GuardianTitle text-title="Guardian Watcher"/>
      <Image image-path="../../src/assets/logo.png" image-width="80" image-height="0" class="m-auto"/>
       <div class="pt-5">
         <RedButton button-text="Register Now" @click="redirection()"/>
       </div>
    </div>
  </div>
</template>

<script>
import Image from "../components/Image.vue";
import axios from "axios";
import Loading from "../components/Loading.vue";
import FormGuardian from "../components/form/FormGuardian.vue";
import Button from "../components/button/RedButton.vue";
import PinkButton from "../components/button/RedButton.vue";
import RedButton from "../components/button/RedButton.vue";
import router from "../router/router.js";
import GuardianTitle from "../components/Title/GuardianTitle.vue";

export default {
  name: "HomePage",
  components: {GuardianTitle, RedButton, FormGuardian, Image},
  methods:{
      redirection(){
          router.push({name: "Register"})
      }
  }
}
</script>

<style scoped>
.back {
    background-size: cover;
    background: url("src/assets/background.webp") center;
    overflow: hidden;

}
</style>