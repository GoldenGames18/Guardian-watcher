<template>
    <div class="flex h-screen w-full back">
        <div class="m-auto">
            <GuardianTitle text-title="Guardian Watcher"/>
            <form>
                <div class="mb-6">
                    <label for="text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Bungie Name</label>
                    <input type="text" id="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="bungie#2548">
                </div>
                <red-button button-text="Submit" button-type="submit"/>
            </form>
        </div>
    </div>
</template>

<script>


import GuardianTitle from "../components/Title/GuardianTitle.vue";
import RedButton from "../components/button/RedButton.vue";

export default {
    name: "RegisterView",
    components: {RedButton, GuardianTitle},
}
</script>

<style scoped>

.back{
    background: url("src/assets/background-register.webp") no-repeat center center fixed;
    overflow: hidden;
    background-size: cover;
}
</style>