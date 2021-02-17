<template>
  <div>
    <!-- Slider template main wrapper starts -->
    <div class="relative flex flex-col items-center justify-center w-full">
      <!-- Slider line starts -->
      <round-slider 
        v-model="sliderValue"
        circleShape="pie"
        start-angle="315"
        end-angle="+270"
        line-cap="round"
        radius="120"
        min="15"
        max="25"
        pathColor="#818589"
        rangeColor="#FF244C"
        handleSize="24"
        width="3"
        showTooltip="false"
      />
      <!-- Slider line ends -->

      <div class="absolute m-auto text-3xl font-normal text-center font-ubuntu text-dark-gray"> 
        <span class="inline-block temp-icon"></span>
        <span> {{ this.sliderValue }} &deg;C </span>
        <!-- <span> current {{ currentTemp }} &deg;C </span> -->
      </div>
    </div>
    <button @click="increase" class=""> Increase </button>
    <button @click="decrease"> Decrease </button>
    <!-- Slider template main wrapper ends -->
  </div>
</template>

<script>
import RoundSlider from 'vue-round-slider'

export default {
  name: 'TempSlider',

  components: {
    RoundSlider
  },

    data () {
      return {
        sliderValue: 25,
        currentTemp: 22.5
      }
  },

  methods: {
    decrease () {
      this.sliderValue--
    },

    increase () {
      if (this.sliderValue === 25) {
        alert('you cannot increase the temperature more than 25℃')
      } else {
        this.sliderValue++
      }
    }
  }
}
</script>

<style>
  /* Additional style for the slider starts */
  .rs-handle {
    border: 2px solid red;
    box-shadow: none !important;
  }
  .rs-tooltip {
    color: #535353;
  }
  /* Additional style for the slider ends */

  /* Icons for the templerature starts */
  .temp-icon {
    width: 25px;
    height: 25px;
    background-image: url('../assets/icon-temp-moon.svg');
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
  }
  /* Icons for the templerature ends */
</style>
