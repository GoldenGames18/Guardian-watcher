<template>
  <div class="flex h-screen w-full color">
    <div class="m-auto">
      <h1 class="text-center text-6xl  text-white font mb-4">
        Guardian Watcher
      </h1>
      <Image image-path="../../src/assets/logo.png" image-width="80" image-height="0" class="m-auto"/>
       <div class="pt-5">
         <RedButton button-text="Register Now" />
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

export default {
  name: "HomePage",
  components: {RedButton, FormGuardian, Image},
}
</script>

<style scoped>
@import url('https://fonts.cdnfonts.com/css/cyberthrone');

.font {
  font-family: 'Cyberthrone', sans-serif;
}

.color {
    background-size: cover;
    background: url("src/assets/background.png") center;
    overflow: hidden;
}

</style>