<template>
  <div className="flex h-screen w-full color">
    <div className="m-auto">
      <h1 className="text-center text-6xl  text-white font mb-4">
        Guardian Watcher
      </h1>
      <Image image-path="../../src/assets/logo.png" image-width="80" image-height="0" class="m-auto"/>
      <form class="mt-4 flex items-center justify-center">
        <input type="text" placeholder="Bungie Name" class="outline-none w-auto bg-transparent">
        <button type="submit">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="white" d="M4.4 19.425q-.5.2-.95-.088T3 18.5v-3.725q0-.35.2-.625t.55-.35L11 12l-7.25-1.8q-.35-.075-.55-.35T3 9.225V5.5q0-.55.45-.838t.95-.087l15.4 6.5q.625.275.625.925t-.625.925l-15.4 6.5Z"/></svg>
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import Image from "../components/Image.vue";
import axios from "axios";
import Loading from "../components/Loading.vue";

export default {
  name: "HomePage",
  components: {Loading, Image},
}
</script>

<style scoped>
@import url('https://fonts.cdnfonts.com/css/cyberthrone');

.font {
  font-family: 'Cyberthrone', sans-serif;
}

.color {
  background: url("src/assets/background.png");
  background-size: cover;
  background-position: center;
  overflow: hidden;
}

::placeholder{
  color: white;
}

input[type="text"]{
  border: none;
  color: white;
  border-bottom: solid 2px var(--yellow);
  width: auto;
  font-size: 1.2rem;
}

button[type="submit"]{
  padding-left: 0.5rem;
}

</style>