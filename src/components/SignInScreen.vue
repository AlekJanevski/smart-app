<template>
  <!-- Template main wrapper starts -->
  <div class="w-full h-full">
    <!-- Content wrapper starts -->
    <div class="flex flex-col items-start justify-between w-full h-full px-12 py-9">
      <!-- Logo wrapper starts -->
      <div class="w-full pt-20">
        <h1 class="text-xl text-4xl font-bold text-center font-ubuntu text-red"> SmartApp </h1>
      </div>
      <!-- Logo wrapper ends -->

      <!-- Bottom buttons section starts -->
      <div class="flex flex-col items-center justify-center w-full">
        <!-- Create an account button -->
        <router-link to="" tag="button" class="w-full px-4 py-3 font-bold text-white transition-all border-2 border-transparent rounded-lg bg-red font-ubuntu hover:border-red hover:bg-transparent hover:text-red max-w-btn focus:outline-none"> Create an account! </router-link>
        <!-- OR separator -->
        <span class="relative block my-4 text-xs font-normal text-center separator text-dark-gray font-ubuntu max-w-btn"> OR </span>
        <!-- Sign in button -->
        <router-link to="/home" tag="button" class="w-full px-4 py-3 font-bold text-white transition-all border-2 border-transparent rounded-lg max-w-btn bg-dark-gray font-ubuntu hover:border-dark-gray hover:bg-transparent hover:text-dark-gray focus:outline-none"> Sign In </router-link>
        <!-- Label -->
        <span class="block text-xs font-normal text-center mt-11 font-ubuntu text-medium-gray">
          Far far away, behind the word mountains, far from
          the countries Vokalia and Consonantia
        </span>
      </div>
      <!-- Bottom buttons section ends -->
    </div>
    <!-- Content wrapper ends -->
  </div>
  <!-- Template main wrapper ends -->
</template>

<script>
export default {
  name: 'SignInScreen',
}
</script>

<style scoped>
  /* Style for pseudo elements of the separator starts */
  .separator::before,
  .separator::after {
    content: '';
    width: 40%;
    height: 0.5px;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto 0;
    background-color: #535353;
    opacity: 0.2;
  }
  .separator::before {
    left: 0;
  }
  .separator::after {
    right: 0;
  }
  /* Style for pseudo elements of the separator ends */
</style>
