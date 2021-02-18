<template>
  <div>
    <!-- Slider template main wrapper starts -->
    <div class="relative flex flex-col items-center justify-center w-full">
      <!-- Slider circle starts -->
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
      <!-- Slider circle ends -->
    
      <!-- Outer circle wrapper starts -->
      <div class="absolute w-48 h-48 bg-white rounded-full shadow-lg"></div>
      <!-- Outer circle wrapper ends -->

      <!-- Inner circle wrapper starts -->
      <div class="absolute flex flex-col items-center justify-center w-40 h-40 m-auto text-3xl font-normal text-center rounded-full shadow-lg inner-circle font-ubuntu text-dark-gray"> 
        <div class="flex items-center justify-center"> 
          <span class="inline-block temp-icon mr-2.5"></span>
          <span> {{ this.sliderValue }} &deg;C  </span>
        </div>
        <span class="relative text-sm font-normal uppercase top-1 font-ubuntu text-medium-gray"> current {{ currentTemp }} &deg;C </span>
      </div>
      <!-- Inner circle wrapper ends -->
    </div>
    <!-- Slider template main wrapper ends -->
    <button @click="increase" class=""> Increase </button>
    <button @click="decrease"> Decrease </button>
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
        currentTemp: 22
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

  /* Style for the inner circle of the slider starts */
  .inner-circle {
    background: linear-gradient(148.24deg, #F7F7F7 27.8%, #FBFBFB 82.39%);
  }
  /* Style for the inner circle of the slider ends */
</style>
