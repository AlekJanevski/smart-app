<template>
  <!-- Template main wrapper starts -->
  <div class="w-full h-full">
    <!-- Screen title and slider wrapper starts -->
    <div class="w-full px-8 pt-8">
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
    <div class="w-full px-4 mt-4">
      <!-- Details title -->
      <span class="block mb-2 text-sm font-bold font-ubuntu text-gray">Details</span>
      <!-- Details scrollable wrapper starts -->
      <div class="w-full pb-4 overflow-x-auto details-wrapper">
        <details-box v-for="box in detailsBox"
          :key="box.id"
          :box-title="box.title"
          :box-data="box.data"
          :box-data-percentage="box.percentage"
        />
      </div>
      <!-- Details scrollable wrapper ends -->
    </div>
    <!-- Details wrapper ends -->

    <!-- Favorites wrapper starts -->
    <div class="w-full px-4 mt-3">
      <span class="block mb-2 text-sm font-bold font-ubuntu text-gray">Favorites</span>
      <div class="flex flex-wrap w-full overflow-hidden rounded-lg">
        <action-box
          v-for="box in actionBox"
          :key="box.id"
          :icon-name="box.icon"
          :action-label="box.label"
        />
      </div>
    </div>
    <!-- Favorites wrapper ends -->
  </div>
  <!-- Template main wrapper ends -->
</template>

<script>
// Importing components
import TempSlider from './TempSlider.vue'
import DetailsBox from './DetailsBox.vue'
import ActionBox from './ActionBox.vue'

export default {
  name: 'HomeScreen',

  components: {
    TempSlider,
    DetailsBox,
    ActionBox
  },

  data() {
    return {
      houseTitle: 'My Big House',
      detailsBox: [
        { 
          id: 1,
          title: 'pm 2.5',
          data: 16.1,
          percentage: '11%'
        },
        { 
          id: 2,
          title: 'humidity',
          data: 74,
          percentage: '65%'
        },
        { 
          id: 3,
          title: 'weather',
          data: 16.1,
          percentage: '°C'
        }
      ],
      actionBox: [
        { 
          id: 1,
          icon: 'cloud.svg',
          label: 'cloud',
        },
        { 
          id: 2,
          icon: 'cloud.svg',
          label: 'housekeeper',
        },
        { 
          id: 3,
          icon: 'cloud.svg',
          label: 'all lights',
        },
        { 
          id: 4,
          icon: 'cloud.svg',
          label: 'reading light',
        },
        { 
          id: 5,
          icon: 'cloud.svg',
          label: 'bathroom heat',
        },
        { 
          id: 6,
          icon: 'cloud.svg',
          label: 'party on!',
        },
      ]
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
