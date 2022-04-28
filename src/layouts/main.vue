<template>
  <div class="app-wrapper">
    <div class="main-layout">
      <main class="main" :style="{'background-image': 'url(' + require('@/assets/img/hero-background.jpg') + ')'}">
        <Header/>
        <router-view/>
      </main>
      <Footer/>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default defineComponent({
  name: 'Main',
  components: { Header, Footer }
})
</script>

<style lang="scss">

</style>
