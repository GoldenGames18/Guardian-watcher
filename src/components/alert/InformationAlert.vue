<script>
export default {
  name: "InformationAlert",
  props: ["informationMessage"]
}
</script>
<template>
  <div class="flex" >
      <p>
        <span v-for="letter in informationMessage.split('.')">
            {{letter}}.
          <br>
        </span>
      </p>
  </div>
</template>
<style scoped>
  div{
    background-color: rgba(250, 210, 80, 0.3);
    padding: 0.3rem;
    margin-top:1rem;
    color: white;
    border: solid #fad250 1px;
  }
  div svg{
    margin-top: 0.2rem;
    margin-right: 0.2rem;
    color: rgb(250, 222, 80);
  }
</style>