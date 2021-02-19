<template>
  <div>
    <!-- Slider template main wrapper starts -->
    <div class="relative flex flex-col items-center justify-center w-full">
      <!-- Slider circle starts -->
      <round-slider 
        v-model="temperatureValue"
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
        startValue="0"
      />
      <!-- Slider circle ends -->
    
      <!-- Outer circle wrapper starts -->
      <div class="absolute w-48 h-48 bg-white rounded-full shadow-lg"></div>
      <!-- Outer circle wrapper ends -->

      <!-- Inner circle wrapper starts -->
      <div class="absolute flex flex-col items-center justify-center w-40 h-40 m-auto text-3xl font-normal text-center rounded-full shadow-lg inner-circle font-ubuntu text-dark-gray"> 

        <div class="flex items-center justify-center"> 
          <!-- Warm/cold icon for the temperature setup ends-->
          <span class="inline-block temp-icon mr-2.5 w-6 h-6 bg-contain bg-no-repeat bg-contain bg-center" :style="{'backgroundImage': `url('${this.publicPath}${this.tempIconName}.svg')`}"></span>
          <!-- Warm/cold icon for the temperature setup ends -->

          <!-- Temperature setup label starts -->
          <span> {{ this.temperatureValue }} &deg;C  </span>
          <!-- Temperature setup label ends -->
        </div>
        <!-- Current temperature info / below the temperature setup label starts -->
        <span class="relative text-sm font-normal uppercase top-1 font-ubuntu text-medium-gray">
          current {{ currentTemp }} &deg;C 
        </span>
        <!-- Current temperature info / below the temperature setup label starts -->
      </div>
      <!-- Inner circle wrapper ends -->

      <!-- Buttons wrapper starts -->
      <div class="absolute flex items-center justify-between w-full m-auto -bottom-1 max-w-inc-dec-btns">
        <!-- Decrease button starts -->
        <button 
          @click="decreaseTemp"
          :class="{'opacity-50 pointer-events-none' : this.disabledDecBtn }"
          class="relative w-5 h-5 bg-center bg-no-repeat bg-contain appearance-none btn-decrease focus:outline-none"
        ></button>
        <!-- Decrease button ends -->
        
        <!-- Increase button starts -->
        <button 
          @click="increaseTemp"
          :class="{'opacity-50 pointer-events-none' : this.disabledIncBtn }"
          class="relative w-5 h-5 bg-center bg-no-repeat bg-contain apperance-none btn-increase focus:outline-none"
        ></button>
        <!-- Increase button ends -->
      </div>
      <!-- Buttons wrapper ends -->
    </div>
    <!-- Slider template main wrapper ends -->
  </div>
</template>

<script>
// Importing components
import RoundSlider from 'vue-round-slider'

export default {
  name: 'TempSlider',

  components: {
    RoundSlider
  },

  props: {
    // Handles the templerature value of the slider
    tempValue: {
      type: Number,
      default: 20
    },
    // Handles the current temperature label
    currentTemp: { 
      type: Number,
      default: 20
    },
    // Handles the minimal temperature setup for the warm/cold icon
    minTemp: {
      type: Number,
      default: 18
    }
  },

  data () {
    return {
      temperatureValue: this.tempValue,
      disabledDecBtn: false,
      disabledIncBtn: false,
      publicPath: process.env.BASE_URL
    }
  },

  computed: {
    // Handles the icon based min minimal temperature prop
    tempIconName() {
      if (this.temperatureValue <= this.minTemp) {
        return 'cold'
      } else {
        return 'warm'
      }
    }
  },

  methods: {
    // Handles decreasing the temperature
    decreaseTemp () {
      if (this.temperatureValue === 15) {
        this.disabledDecBtn = true
        } else {
        this.disabledDecBtn = false
        this.disabledIncBtn = false
        this.temperatureValue--
      }
    },
    
    // Handles increasing the temperature
    increaseTemp () {
      if (this.temperatureValue === 25) {
        this.disabledIncBtn = true
      } else {
        this.disabledDecBtn = false
        this.disabledIncBtn = false
        this.temperatureValue++
      }
    }
  }
}
</script>

<style>
  /* Additional style for the slider starts */
  .rs-handle {
    background-color: #ffffff !important;
    border: 2px solid red;
    box-shadow: none !important;
  }
  .rs-tooltip {
    color: #535353;
  }
  /* Additional style for the slider ends */

  /* Style for the inner circle of the slider starts */
  .inner-circle {
    background: linear-gradient(148.24deg, #F7F7F7 27.8%, #FBFBFB 82.39%);
  }
  /* Style for the inner circle of the slider ends */

  /* Style for the increase/decrease buttons starts */
  .btn-decrease {
    background-image: url('../assets/icon-minus-sign.svg');
  }
  .btn-increase {
    background-image: url('../assets/icon-plus-sign.svg');
  }
  /* Style for the increase/decrease buttons ends */
</style>
