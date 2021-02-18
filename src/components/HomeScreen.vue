<template>
  <!-- Template main wrapper starts -->
  <div class="w-full h-full">
    <!-- Screen title and slider wrapper starts -->
    <div class="w-full p-8">
      <!-- Screen title starts -->
      <h2 class="mb-5 text-lg font-bold text-center font-ubuntu text-red"> {{ houseTitle }} </h2>
      <!-- Screen title ends -->

      <!-- Temperature slider starts -->
      <temp-slider 
        :tempValue="25"
        :currentTemp="22"
      />
      <!-- Temperature slider ends -->

      <!-- Details wrapper starts -->
      
      <!-- Details wrapper ends -->
    </div>
    <!-- Screen title and slider wrapper ends -->
  </div>
  <!-- Template main wrapper ends -->
</template>

<script>
// Importing components
import TempSlider from './TempSlider.vue'

export default {
  name: 'HomeScreen',

  components: {
    TempSlider
  },

  data() {
    return {
      'houseTitle': 'My Big House'
    }
  }
}
</script>
