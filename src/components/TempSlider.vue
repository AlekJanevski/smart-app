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

    <!-- Buttons wrapper starts -->
    <div class="flex items-center justify-between w-full m-auto max-w-inc-dec-btns">
      <button 
        @click="decrease"
        :class="{'opacity-50 pointer-events-none' : this.disabledDecBtn }"
        class="relative w-5 h-5 appearance-none btn-decrease focus:outline-none"
      ></button>
      <button 
        @click="increase"
        :class="{'opacity-50 pointer-events-none' : this.disabledIncBtn }"
        class="relative w-5 h-5 apperance-none btn-increase focus:outline-none"
      ></button>
    </div>
    <!-- Buttons wrapper ends -->
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
        currentTemp: 22,
        disabledDecBtn: false,
        disabledIncBtn: false,
      }
  },

  methods: {
    decrease () {
      if (this.sliderValue === 15) {
        this.disabledDecBtn = true
        } else {
        this.disabledDecBtn = false
        this.disabledIncBtn = false
        this.sliderValue--
      }
    },

    increase () {
      if (this.sliderValue === 25) {
        this.disabledIncBtn = true
      } else {
        this.disabledDecBtn = false
        this.disabledIncBtn = false
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
  .rs-control {
    height: 220px !important;
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

  /* Style for the increase/decrease buttons starts */
  .btn-decrease {
    background-image: url('../assets/icon-decrease.svg');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
  }
  .btn-increase {
    background-image: url('../assets/icon-increase.svg');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
  }
  /* Style for the increase/decrease buttons ends */
</style>
