<template>
  <div id="app">
    <!-- Bottom navigation bar -->
    <nav-bar />
    <!-- / Bottom navigation bar -->

    <!-- Router view section -->
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
    <!-- / Router view section -->
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
  /* Transition style for routing through the components */
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>
