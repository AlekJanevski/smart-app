<template>
  <div>
    <nav class="absolute bottom-0 left-0 right-0 navbar navbar-toggleable-md navbar-light bg-faded">
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav flex items-center justify-between">
          <li class="nav-item inline-block">
            <router-link to="/" class="nav-link">Sign In</router-link>
          </li>
          <li class="nav-item inline-block">
            <router-link to="/home" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item inline-block">
            <router-link to="/user" class="nav-link">User</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
}
</script>