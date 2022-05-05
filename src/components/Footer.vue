<template>
  <el-footer class="footer">
    <el-container class="container">
      <el-row class="items-center w-full" :gutter="20">
        <el-col :sm="6" :lg="4" :xl="6" class="mb-4 md:mb-0">
          <div class="logo mx-auto md:mx-2 xl:mx-4">
            <router-link to="/">
              <img src="@/assets/img/logo.png" alt="" class="mx-auto md:mx-0">
            </router-link>
          </div>
        </el-col>
        <el-col :sm="18" :lg="12">
          <ul class="nav-list flex flex-nowrap items-center">
            <li class="mx-4 xl:mx-8">
              <a href="#">Email Marketing</a>
            </li>
            <li class="mx-4 xl:mx-8">
              <a href="#">Campaigns</a>
            </li>
            <li class="mx-4 xl:mx-8">
              <a href="#">Branding</a>
            </li>
            <li class="mx-4 xl:mx-8">
              <a href="#">Offline</a>
            </li>
          </ul>
        </el-col>
        <el-col :sm="24" :lg="8" :xl="6" class="mt-4 xl:mt-0">
          <p class="copyright-text m-0 text-center xl:text-left">Copyright © 2020. ALFA TOUR. All rights reserved.</p>
        </el-col>
      </el-row>
    </el-container>
  </el-footer>
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

  @media screen and (max-width: $lgDesktopWidth) {
    height: 200px;
  }
  @media screen and (max-width: $smDesktopWidth) {
    height: 180px;
  }
  @media screen and (max-width: $phoneWidth) {
    height: 270px;
  }

  .logo {
    img {
      width: 175px;
      height: 55px;
      object-fit: contain;

      @media screen and (max-width: $lgDesktopWidth) {
        width: 150px;
        height: 50px;
      }
      @media screen and (max-width: $smTableWidth) {
        width: 140px;
        height: 40px;
      }
    }
  }

  .nav-list {
    @media screen and (max-width: $phoneWidth) {
      flex-direction: column;
    }

    > li {
      @media screen and (max-width: $phoneWidth) {
        margin-bottom: 8px;
      }
    }

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

    @media screen and (max-width: $smTableWidth) {
      font-size: 13px;
    }
  }
}

</style>
