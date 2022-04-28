<template>
  <footer class="footer">
    <el-container class="container">
      <el-row class="items-center w-full" :gutter="20">
        <el-col :sm="6">
          <div class="logo mx-4">
            <router-link to="/">
              <img src="@/assets/img/logo.png" alt="">
            </router-link>
          </div>
        </el-col>
        <el-col :sm="12">
          <ul class="nav-list flex flex-nowrap items-center">
            <li class="mx-8">
              <a href="#">Email Marketing</a>
            </li>
            <li class="mx-8">
              <a href="#">Campaigns</a>
            </li>
            <li class="mx-8">
              <a href="#">Branding</a>
            </li>
            <li class="mx-8">
             <a href="#">Offline</a>
            </li>
          </ul>
        </el-col>
        <el-col :sm="6">
          <p class="copyright-text m-0">Copyright © 2020. ALFA TOUR. All rights reserved.</p>
        </el-col>
     </el-row>
    </el-container>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Footer'
})
</script>

<style lang="scss" scoped>
@import 'src/assets/scss/utils/vars.scss';

.footer {
  background-color: $main-color-blue;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 240px;

  .logo {
    img {
      width: 175px;
      height: 55px;
      object-fit: contain;
    }
  }

  .nav-list {
    a {
      display: inline-block;
      font-size: 15px;
      line-height: 1.6;
      letter-spacing: -0.204545px;
      color: #fff;
      transition: .3s;

      &:hover {
        transform: translateY(1px);
      }
    }
  }

  .copyright-text {
    font-size: 15px;
    line-height: 1.6;
    letter-spacing: -0.204545px;
    color: #fff;
    mix-blend-mode: normal;
    opacity: .5;
  }
}

</style>