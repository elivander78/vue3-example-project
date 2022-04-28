<template>
  <component :is="layout">
    <router-view/>
  </component>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MainLayout from '@/layouts/main.vue'
import ErrorLayout from '@/layouts/error.vue'

export default defineComponent({
  name: 'App',
  components: { MainLayout, ErrorLayout },
  computed: {
    layout(): string {
      return (this.$route.meta.layout || 'error') + '-layout'
    }
  }
})
</script>

<style lang="scss">

</style>
