<template>

  <form class="mt-4 flex items-center justify-center" @submit.prevent="formValidation" autocomplete="off">
    <input v-model="bungieName" type="text" placeholder="Bungie Name#0000" class="outline-none w-auto bg-transparent">
    <button type="submit" >
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="white" d="M4.4 19.425q-.5.2-.95-.088T3 18.5v-3.725q0-.35.2-.625t.55-.35L11 12l-7.25-1.8q-.35-.075-.55-.35T3 9.225V5.5q0-.55.45-.838t.95-.087l15.4 6.5q.625.275.625.925t-.625.925l-15.4 6.5Z"/></svg>
    </button>
  </form>
    <div class=" error mt-1" v-if="v$.$error">
        <p v-for="error of v$.$errors" :key="error.$uid" class=" text-white pl-1 font-medium">
            {{ error.$message }}
        </p>
    </div>

</template>

<script>
import useVuelidate from "@vuelidate/core";
import {helpers, required} from "@vuelidate/validators";
const matchBungieName = (value) => value.match(".*#[0-9]{4}")
export default {
  name: "FormGuardian",
  data(){
    return{
      bungieName:'',
      v$: useVuelidate()
    }
  },
  validations(){
    return{
      bungieName:{
        required : helpers.withMessage('Bungie name is required', required),
        matchBungieName : helpers.withMessage('Bungie name is not valid ', matchBungieName)
      }
    }
  },
  methods:{
    async formValidation(){
      this.v$.$validate()
      if (this.v$.$error){
      
        console.log('error')
      }else {
        console.log('ok')
      }
    }
  }
}
</script>

<style scoped>

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

.error{
    background: rgba(254, 0, 0, 0.70);
    border: solid 1px #f03539;
}

</style>