<template>
  <div class="flex flex-col items-center justify-center w-1/3 px-2 py-6 bg-white">
    <span 
      class="w-8 h-8 mb-4 bg-center bg-no-repeat rounded-full bg-1 bg-action-icon-gray action-icon" 
      :style="{'backgroundImage': `url('${this.publicPath}${this.iconName}')`}"
    >
    </span>
    <span class="block text-sm capitalize font-ubuntu text-dark-gray"> {{ actionLabel }}</span>
  </div>
</template>

<script>
export default {
  name: 'ActionBox',

  props: {
    actionLabel: {
      type: String,
      required: true
    },
    iconName: {
      type: String,
      required: true
    }
  },

  data() {
    return {
      publicPath: process.env.BASE_URL
    }
  }
}
</script>
