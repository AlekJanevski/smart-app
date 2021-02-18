<template>
  <div class="w-2/5 px-2 py-3 bg-white rounded-lg shadow-lg min-w-det-box">
    <span class="block mb-3 text-sm font-medium uppercase font-ubuntu text-gray"> {{ boxTitle }}</span>
    <div class="w-full">
      <span class="inline-block mr-2 text-2xl font-bold font-ubuntu text-dark-gray"> {{ boxData }}</span>
      <span class="inline-block font-normal font-ubuntu text-lighter-gray"> {{ boxDataPercentage }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailsBox',

  props: {
    boxTitle: {
      type: String,
      required: true
    },
    boxData: {
      type: Number,
      required: true
    },
    boxDataPercentage: {
      type: String,
      required: true
    }
  }
}
</script>
