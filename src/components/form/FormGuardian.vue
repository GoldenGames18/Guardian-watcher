<template>
    <form @submit.prevent="formValidation" >
        <div class="mb-6">
            <label for="text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Bungie Name</label>
            <input @input="() => this.errorMessage=''" :disabled="disabled" v-model="bungieName" type="text" id="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="BungieName#1234">
            <div v-for="error of v$.$errors.slice(0,1)" :key="error.$uid">
              <error-alert :error-message="error.$message"/>
            </div>
            <div v-if="errorMessage && v$.$errors.length ===0">
                <error-alert :error-message="errorMessage"/>
            </div>
        </div>
        <red-button button-text="Submit" button-type="submit" :disabled-button="disabled || this.v$.$error" />
    </form>

</template>

<script>
import useVuelidate from "@vuelidate/core";
import {helpers, required} from "@vuelidate/validators";
import RedButton from "../button/RedButton.vue";
import ErrorAlert from "../alert/ErrorAlert.vue";
import ValidationAlert from "../alert/ValidationAlert.vue";
import router from "../../router/router.js";

const matchBungieName = (value) => value.match(".*#[0-9]{4}");
export default {
    name: "FormGuardian",
    components: {ValidationAlert, ErrorAlert, RedButton},
    data() {
        return {
            bungieName: '',
            disabled:false,
            v$: useVuelidate(),
            errorMessage: "",
            validMessage: ""
        }
    },
    validations() {
        return {
            bungieName: {
                required: helpers.withMessage('Bungie name is required', required),
                matchBungieName: helpers.withMessage('Bungie name is not valid ', matchBungieName)
            }
        }
    },
    methods: {
        async formValidation() {
            this.disabled = true;
            this.v$.$validate()
            let result = undefined;
            if (!this.v$.$error) {
                result = await this.fetchConnexion()
              if (result !== null){
                console.log(result);
                await router.push({name: "Loading"})
              }
            }
            this.disabled = false;
        },
        async fetchConnexion(){
        return await this.axios.get(`/Destiny2/SearchDestinyPlayer/-1/${encodeURIComponent(this.bungieName)}/`).then(r => {
          if (r.status === 200) {
            return r.data.Response;
          } else if (r.status === 500) {
            throw new Error("Internal server error");
          } else {
            throw new Error("An error occurred");
          }
        }).then(r => {
          if (r.length === 0) {
            throw new Error("Unknown bungie name");
          } else {
            return r[0].membershipId;
          }
        }).catch(r => {
          this.errorMessage = r.message;
          return null;
        });
      },

    }
}
</script>
<style scoped>
::placeholder {
    color: #b7b7b7;
}
</style>
