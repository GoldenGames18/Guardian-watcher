<script>

import Loading from "../components/Loading.vue";
import {defineComponent} from "vue";
import InformationAlert from "../components/alert/InformationAlert.vue";

export default defineComponent({
  components: {InformationAlert, Loading}
})

</script>

<template>
  <div class="flex h-screen w-full back">
    <div class="m-auto">
        <loading></loading>
        <div class="pt-5">
          <information-alert information-message="Thanks for using guardian report to avoid a shitty moment. Please wait loading data"/>
        </div>
    </div>
  </div>
</template>

<style scoped>
.back{
  background-size: cover;
  background: url("src/assets/background.webp") center;
  overflow: hidden;

}
</style>