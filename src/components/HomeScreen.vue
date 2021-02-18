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
        :minTemp="17"
      />
      <!-- Temperature slider ends -->
    </div>
    <!-- Screen title and slider wrapper ends -->

    <!-- Details wrapper starts -->
    <div class="w-full px-4 mt-10">
      <span class="block mb-2 text-sm font-bold font-ubuntu text-gray">Details</span>
      <div class="w-full pb-4 overflow-x-auto details-wrapper">
        <details-box
          box-title="pm 2.5"
          :box-data="16.1"
          box-data-percentage="11%"
        />

        <details-box
          box-title="humidity"
          :box-data="74"
          box-data-percentage="65%"
        />

        <details-box
          box-title="weather"
          :box-data="12"
          box-data-percentage="°C"
        />
      </div>
    </div>
    <!-- Details wrapper ends -->
  </div>
  <!-- Template main wrapper ends -->
</template>

<script>
// Importing components
import TempSlider from './TempSlider.vue'
import DetailsBox from './DetailsBox.vue'

export default {
  name: 'HomeScreen',

  components: {
    TempSlider,
    DetailsBox
  },

  data() {
    return {
      'houseTitle': 'My Big House'
    }
  }
}
</script>

<style>
  .details-wrapper {
    display: grid;
    grid-gap: 15px;
    grid-template-columns: repeat(6, calc(50% - 40px));
    grid-template-rows: minmax(80px, 1fr);
  }
</style>
