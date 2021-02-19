<template>
  <!-- Main box wrapper starts -->
  <div class="flex flex-col items-center justify-center w-1/3 px-1 py-6 bg-white action-box"
    :class="{ 'active-box': this.activeBox }"
  >
    <!-- Box icon wrapper starts -->
    <span 
      class="w-8 h-8 mb-4 bg-center bg-no-repeat rounded-full bg-1 bg-action-icon-gray action-icon" 
      :style="{'backgroundImage': `url('${this.publicPath}${this.iconName}')`}"
    >
    </span>
    <!-- Box icon wrapper ends -->

    <!-- Box title starts -->
    <span class="block text-sm capitalize action-label font-ubuntu text-dark-gray"> {{ actionLabel }}</span>
    <!-- Box title ends -->
  </div>
  <!-- Main box wrapper ends -->
</template>

<script>
export default {
  name: 'ActionBox',

  props: {
    // Handles the title of the action
    actionLabel: {
      type: String,
      required: true
    },
    // Handles the icons displayed
    iconName: {
      type: String,
      required: true
    },
    // Handles the style for the active box
    activeBox: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      publicPath: process.env.BASE_URL
    }
  }
}
</script>

<style scoped>
  /* Style for the active box starts */
  .active-box {
    background-color: #FDE2E6;
  }
  .active-box .action-label {
    color: #FF244C;
  }
  .active-box .action-icon {
    background-color: #FF244C;
  }
  /* Style for the active box ends */
</style>
