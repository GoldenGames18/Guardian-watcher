<template>
    <form @submit="formValidation">
        <div class="mb-6">
            <label for="text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Bungie Name</label>
            <input v-model="bungieName" type="text" id="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" :class="[test ? 'bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-red-100 dark:border-red-400':'']" placeholder="bungie#2548">
            <div v-for="error of v$.$errors.slice(0,1)" :key="error.$uid">
                <error-alert :error-message="error.$message"/>
            </div>

        </div>
        <red-button button-text="Submit" button-type="submit"/>
    </form>

</template>

<script>
import useVuelidate from "@vuelidate/core";
import {helpers, required} from "@vuelidate/validators";
import RedButton from "../button/RedButton.vue";
import ErrorAlert from "../alert/ErrorAlert.vue";
const matchBungieName = (value) => value.match(".*#[0-9]{4}")
export default {
    name: "FormGuardian",
    components: {ErrorAlert, RedButton},
    data() {
        return {
            bungieName: '',
            v$: useVuelidate()
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
            this.v$.$validate()
            if (this.v$.$error) {
                console.log('error')
            } else {
                console.log('ok')
            }
        }
    }
}
</script>
<style scoped>
::placeholder {
    color: white;
}
</style>