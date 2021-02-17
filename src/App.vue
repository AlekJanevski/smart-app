<template>
  <div id="app" class="w-full h-full bg-light-gray">
    <!-- Bottom navigation bar starts -->
    <nav-bar v-if="this.$route.name !== 'sign-in'"/>
    <!-- Bottom navigation bar ends -->

    <!-- Router view section starts -->
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
    <!-- Router view section ends -->
  </div>
</template>

<script>
// Importing components
import NavBar from './components/NavBar.vue'

export default {
  name: 'App',

  components: {
    NavBar
  }
}
</script>

<style>
  /* Global style */
  html,
  body {
    height: 100%;
  }

  /* Transition style for routing through the components */
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>
