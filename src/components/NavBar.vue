<template>
  <!-- Navbar main template wrapper starts -->
  <nav class="absolute bottom-0 left-0 right-0 px-8 py-3 bg-white">
    <ul class="flex items-center justify-between">
      <!-- Home link -->
      <li class="relative inline-block" :class="{'active': this.$route.name === 'home'}">
        <router-link to="/home" class="block w-5 h-5 icon bg-dark-gray home"></router-link>
      </li>
      <!-- Messages link -->
      <li class="inline-block">
        <router-link to="/messages" class="block w-5 h-5 icon bg-dark-gray msg"></router-link>
      </li>
      <!-- Files link -->
      <li class="inline-block">
        <router-link to="/files" class="block w-5 h-5 icon bg-dark-gray files"></router-link>
      </li>
      <!-- Settings link -->
      <li class="inline-block">
        <router-link to="/settings" class="block w-5 h-5 icon bg-dark-gray settings"></router-link>
      </li>
      <!-- User link -->
      <li class="relative inline-block" :class="{'active': this.$route.name === 'user'}">
        <router-link to="/user" class="block w-5 h-5 icon bg-dark-gray user"></router-link>
      </li>
    </ul>
  </nav>
  <!-- Navbar main template wrapper ends -->
</template>

<script>
export default {
  name: 'NavBar',
}
</script>

<style scoped>
  /* Style for the icons of the navbar starts */
  .home {
    -webkit-mask-image: url(../assets/icon-home.svg);
    mask-image: url(../assets/icon-home.svg);
    mask-repeat: no-repeat;
  }
  .msg {
    -webkit-mask-image: url(../assets/icon-msg.svg);
    mask-image: url(../assets/icon-msg.svg);
    mask-repeat: no-repeat;
  }
  .files {
    -webkit-mask-image: url(../assets/icon-files.svg);
    mask-image: url(../assets/icon-files.svg);
    mask-repeat: no-repeat;
  }
  .settings {
    -webkit-mask-image: url(../assets/icon-settings.svg);
    mask-image: url(../assets/icon-settings.svg);
    mask-repeat: no-repeat;
  }
  .user {
    -webkit-mask-image: url(../assets/icon-tools.svg);
    mask-image: url(../assets/icon-tools.svg);
    mask-repeat: no-repeat;
  }
  .active a {
    background-color: #FF244C;
    position: relative;
  }
  .active::after {
    content: '';
    width: 45px;
    height: 4px;
    border-radius: 2px;
    background-color: #FF244C;
    position: absolute;
    bottom: -11px;
    left: -13px;
    right: 0;
  }
  /* Style for the icons of the navbar ends */
</style>