<template>
  <img :src="imagePath" :width="imageWidth">
</template>

<script>
export default {
  name: "Image",
  props: ["imagePath", "imageWidth","imageHeight"],
}
</script>

<style scoped>
</style>