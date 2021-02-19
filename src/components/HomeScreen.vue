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
      <!-- Section title -->
      <span class="block mb-2 text-sm font-bold font-ubuntu text-gray">Details</span>
      <!-- Details scrollable wrapper starts -->
      <div class="w-full pb-4 overflow-x-auto details-wrapper">
        <!-- Details box component imported -->
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
      <!-- Section title -->
      <span class="block mb-2 text-sm font-bold font-ubuntu text-gray">Favorites</span>
      <!-- Favorites boxes wrapper starts -->
      <div class="flex flex-wrap w-full overflow-hidden rounded-lg shadow-lg">
        <!-- Action box component imported -->
        <action-box
          v-for="box in actionBox"
          :key="box.id"
          :icon-name="box.icon"
          :action-label="box.label"
          :active-box="box.active"
        />
      </div>
      <!-- Favorites boxes wrapper ends -->
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
          active: false
        },
        { 
          id: 2,
          icon: 'housekeeper.svg',
          label: 'housekeeper',
          active: false
        },
        { 
          id: 3,
          icon: 'lights.svg',
          label: 'all lights',
          active: false
        },
        { 
          id: 4,
          icon: 'reading-lights.svg',
          label: 'reading light',
          active: false
        },
        { 
          id: 5,
          icon: 'bathroom-heat.svg',
          label: 'bathroom heat',
          active: false
        },
        { 
          id: 6,
          icon: 'party-on.svg',
          label: 'party on!',
          active: true
        }
      ]
    }
  }
}
</script>

<style>
  /* Grid style for the favorites section starts */
  .details-wrapper {
    display: grid;
    grid-gap: 15px;
    grid-template-columns: repeat(6, calc(50% - 40px));
    grid-template-rows: minmax(80px, 1fr);
  }
  /* Grid style for the favorites section ends */

  /* Style for the borders between favorites box starts */
  .action-box:nth-child(1),
  .action-box:nth-child(3) {
    border-bottom: 0.5px solid #E5E5E5;
  }
  .action-box:nth-child(2),
  .action-box:nth-child(5) {
    border-left: 0.5px solid #E5E5E5;
    border-right: 0.5px solid #E5E5E5;
  }
  .action-box:nth-child(2) {
    border-bottom: 0.5px solid #E5E5E5;
  }
  /* Style for the borders between favorites box ends */
</style>
