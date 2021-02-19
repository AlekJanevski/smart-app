<template>
  <div class="w-full h-full">
    <!-- Screen wrapper starts -->
    <div class="w-full px-8 pt-8">
      <!-- Screen title and back link starts -->
      <div class="relative w-full">
        <h2 class="mb-5 text-lg font-bold text-center capitalize font-ubuntu text-red"> {{ profileName }}'s Profile</h2>
        <router-link to="/home" class="absolute top-0 bottom-0 left-0 inline-block w-4 h-4 m-auto bg-center bg-no-repeat bg-contain link-back"></router-link>
      </div>
      <!-- Screen title and back link ends -->

      <!-- Avatar wrapper starts -->
      <div class="flex flex-col items-center justify-center w-full">
        <!-- Avatar placeholder starts -->
        <div class="w-24 h-24 mb-4 overflow-hidden bg-white border-2 rounded-full border-brown">
          <!-- Avatar placeholder -->
          <img :src="`${this.publicPath}${this.avatarName}.svg`" alt="">
        </div>
        <!-- Avatar placeholder ends -->

        <!-- Under avatar profile name -->
        <span class="block text-base font-bold font-ubuntu text-dark-gray"> {{ profileName }} </span>
        <!-- Under avatar profile email -->
        <span class="block text-sm font-normal font-ubuntu text-lighter-gray"> {{ profileEmail }} </span>

        <!-- Type of role wrapper starts -->
        <div class="w-full mt-9">
          <span class="block mb-2 text-xs font-bold uppercase font-ubuntu text-red">type of role</span>
          <select name="role" id="role-type" class="w-full py-4 text-base font-normal bg-transparent border-t-2 border-b-2 border-light-gray-border font-ubuntu text-dark-gray">
            <option value="user">User</option>
          </select>
        </div>
        <!-- Type of role wrapper ends -->

        <!-- List of categories wrapper starts -->
        <div class="w-full my-9">
          <!-- Title -->
          <div class="relative w-full">
            <span class="inline-block mb-2 text-xs font-bold uppercase font-ubuntu text-red">list of categories</span>
            <span class="absolute right-0 inline-block m-auto text-sm font-normal capitalize top-1 font-ubuntu text-gray">edit</span>
          </div>
          <!-- Lights option -->
          <select name="category" id="category-type" class="w-full py-4 text-base font-normal bg-transparent border-t-2 border-light-gray-border font-ubuntu text-dark-gray">
            <option value="user">All lights</option>
          </select>
          <!-- Doors option -->
          <select name="category1" id="category1-type" class="w-full py-4 text-base font-normal bg-transparent border-t-2 border-light-gray-border font-ubuntu text-dark-gray">
            <option value="user">Front doors</option>
          </select>
          <!-- Add new category -->
          <div class="flex items-center justify-start w-full py-4 text-base font-normal bg-transparent border-t-2 border-b-2 border-light-gray-border font-ubuntu text-dark-gray">
            <span class="inline-block w-5 h-5 mr-3 add-cat-icon"></span>
            <span>Add new category</span>
          </div>
        </div>
        <!-- List of categories wrapper ends -->

        <!-- Delete user button starts -->
        <router-link to="/home" tag="button" class="w-full px-4 py-3 font-bold text-white transition-all border-2 border-transparent rounded-lg bg-red font-ubuntu hover:border-red hover:bg-transparent hover:text-red max-w-btn focus:outline-none"> Delete user </router-link>
        <!-- Delete user button starts -->
      </div>
      <!-- Avatar wrapper ends -->
    </div>
    <!-- Screen wrapper ends -->
  </div>
</template>

<script>
export default {
  name: 'UserScreen',

  data() {
    return {
      profileName: 'barbara',
      profileEmail: 'barbara.smith@gmail.com',
      avatarName: 'avatar',
      publicPath: process.env.BASE_URL
    }
  }
}
</script>

<style scoped>
  /* Style for the back link starts */
  .link-back {
    background-image: url('../assets/icon-arrow-back.svg');
  }
  /* Style for the back link ends */

  /* Style for the add new category icon starts */
  .add-cat-icon {
    background-image: url('../assets/icon-plus-sign.svg');
  }
  /* Style for the add new category icon ends */
</style>