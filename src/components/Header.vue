<template>
  <el-header class="header">
    <el-container class="container">
      <el-row class="items-center w-full" :gutter="20">
        <el-col :sm="6" class="mb-6 md:mb-0">
          <div class="logo mx-auto md:mx-2 xl:mx-4">
            <router-link to="/">
              <img src="@/assets/img/logo.png" alt="" class="mx-auto md:mx-0">
            </router-link>
          </div>
        </el-col>
        <el-col :sm="12" class="mb-6 md:mb-0">
          <ul class="nav-list flex flex-nowrap items-center justify-center md:justify-start">
            <li class="mx-4">
              <router-link to="/" active-class="active">Главная</router-link>
            </li>
            <li class="mx-4">
              <router-link to="/info">Информация</router-link>
            </li>
          </ul>
        </el-col>
        <el-col :sm="6">
          <ul class="social-list flex flex-nowrap items-center justify-center md:justify-end">
            <li class="mx-2 xl:mx-3">
              <router-link to="/user">
                <svg width="37" height="36" viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                      d="M18.5 5.625C14.0427 5.625 10.4062 9.16312 10.4062 13.5C10.4062 16.2113 11.8284 18.6187 13.9837 20.0396C9.85934 21.7609 6.9375 25.7434 6.9375 30.375H9.25C9.25 25.3913 13.3778 21.375 18.5 21.375C23.6222 21.375 27.75 25.3913 27.75 30.375H30.0625C30.0625 25.7434 27.1407 21.762 23.0163 20.0385C24.1163 19.316 25.0176 18.3422 25.6412 17.2024C26.2649 16.0625 26.5919 14.7913 26.5938 13.5C26.5938 9.16312 22.9573 5.625 18.5 5.625ZM18.5 7.875C21.7063 7.875 24.2812 10.3804 24.2812 13.5C24.2812 16.6196 21.7063 19.125 18.5 19.125C15.2937 19.125 12.7188 16.6196 12.7188 13.5C12.7188 10.3804 15.2937 7.875 18.5 7.875Z"
                      fill="white"/>
                </svg>
              </router-link>
            </li>
            <li class="mx-2 xl:mx-3">
              <router-link to="/network">
                <svg width="37" height="36" viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                      d="M33.5312 18C33.5312 9.9232 26.8012 3.375 18.5 3.375C10.1988 3.375 3.46875 9.9232 3.46875 18C3.46875 26.0768 10.1988 32.625 18.5 32.625C26.8012 32.625 33.5312 26.0768 33.5312 18Z"
                      stroke="white" stroke-width="2.25" stroke-miterlimit="10"/>
                  <path
                      d="M32.1995 12.1036C31.0389 12.1106 31.1531 14.194 29.707 13.211C29.1701 12.8468 28.8398 12.3174 28.1656 12.1563C27.5766 12.0157 26.9732 12.162 26.3915 12.2597C25.7303 12.3708 24.9462 12.4207 24.4447 12.908C23.9598 13.377 23.7032 14.0063 23.1872 14.4781C22.1892 15.3921 21.7679 16.3899 22.414 17.6822C23.0355 18.9246 24.3355 19.5989 25.7382 19.5103C27.1163 19.421 28.5479 18.6434 28.5082 20.5917C28.4937 21.2808 28.6418 21.7589 28.8594 22.3995C29.061 22.9901 29.0473 23.5624 29.0935 24.172C29.1788 25.3111 29.3941 26.588 29.9751 27.5942L31.0591 26.1063C31.1928 25.9221 31.4725 25.6641 31.539 25.4468C31.6568 25.0622 31.4248 24.4013 31.3981 23.9702C31.3713 23.5392 31.3843 23.1026 31.3164 22.6716C31.221 22.0676 30.8539 21.5016 30.8033 20.9046C30.7101 19.793 30.9189 18.9056 30.0387 17.9761C29.1889 17.0796 27.943 16.8645 26.7528 17.0466C26.153 17.138 23.7386 17.5135 24.7077 16.1796C24.8992 15.9174 25.2338 15.7022 25.4491 15.4526C25.6363 15.2353 25.7989 14.836 26.0186 14.6665C26.2383 14.497 27.2471 14.3023 27.5362 14.3888C27.8252 14.4752 28.1266 14.881 28.3773 15.061C28.8407 15.4005 29.3813 15.6263 29.9535 15.7191C30.9406 15.8597 33.0045 15.3014 32.9886 14.0695C32.9857 13.4789 32.4221 12.6563 32.1995 12.1036ZM20.7728 22.2399C20.3877 20.662 18.1843 20.1347 16.9962 19.279C16.3133 18.7868 15.7056 18.0267 14.8088 17.9649C14.3954 17.936 14.0492 18.0232 13.6395 17.9199C13.2637 17.8256 12.9689 17.6288 12.5685 17.6801C11.8206 17.7757 11.3487 18.5534 10.5451 18.4479C9.78268 18.3481 8.99715 17.4804 8.82372 16.7738C8.60114 15.8653 9.33969 15.5707 10.131 15.4899C10.4613 15.4561 10.832 15.4195 11.1492 15.537C11.5669 15.6881 11.7642 16.0861 12.1393 16.2872C12.8424 16.662 12.9848 16.0629 12.8771 15.4554C12.7159 14.5456 12.5281 14.1743 13.362 13.5485C13.9401 13.1168 14.4344 12.8046 14.3419 12.0291C14.287 11.5735 14.0305 11.3674 14.2697 10.9139C14.451 10.5687 14.949 10.2572 15.2734 10.0512C16.111 9.51962 18.8614 9.559 17.7377 8.07119C17.4074 7.63454 16.7982 6.85408 16.2201 6.7472C15.4974 6.61431 15.1766 7.399 14.6729 7.74494C14.1526 8.10283 13.1394 8.50923 12.6184 7.95587C11.9174 7.21126 13.0831 6.96658 13.341 6.44697C13.599 5.92736 12.7434 4.94509 12.2852 4.69619L10.131 7.04673C10.0691 7.44038 10.0907 7.84219 10.1943 8.22744C10.298 8.61269 10.4815 8.97323 10.7337 9.28689C11.1622 9.82337 11.8444 9.99564 11.8755 10.7283C11.9058 11.4314 11.7931 11.7914 11.3205 12.2857C11.116 12.4967 10.9715 12.7962 10.7633 12.9938C10.5082 13.2349 10.6029 13.1611 10.2047 13.2272C9.45604 13.3502 8.81866 13.5401 8.09528 13.7342C6.88989 14.0583 6.7786 12.1423 6.22938 11.3906L4.42274 12.8102C4.40323 13.043 4.71903 13.4712 4.80503 13.7243C5.2986 15.1706 6.29442 16.2893 6.93758 17.6731C7.61471 19.1384 9.43292 18.732 10.2358 20.0159C10.9483 21.1549 10.1874 22.597 10.7207 23.7895C11.108 24.6551 12.0215 24.8442 12.6516 25.477C13.2955 26.1162 13.2818 26.9909 13.3801 27.8227C13.4909 28.801 13.6708 29.7708 13.9184 30.7252C14.0059 31.0549 14.0861 31.4909 14.3181 31.763C14.4771 31.95 15.0227 32.111 14.8023 32.1729C15.1101 32.2221 15.6586 32.502 15.9151 32.2967C16.2533 32.0267 16.163 31.1956 16.2215 30.8201C16.3972 29.7021 16.9724 28.6088 17.7485 27.772C18.5153 26.9466 19.566 26.3876 20.2135 25.4517C20.8444 24.5391 21.0344 23.3079 20.7728 22.2399ZM18.3599 24.0905C17.9263 24.8435 16.9608 25.3477 16.3401 25.946C16.1717 26.1084 15.8132 26.6709 15.6022 26.5493C15.4512 26.4621 15.3999 25.7323 15.3442 25.5649C15.0572 24.7223 14.5092 23.9867 13.7754 23.4591C13.5492 23.2924 12.9884 23.0759 12.859 22.8474C12.7145 22.5992 12.8446 22.0134 12.8496 21.7434C12.8576 21.3497 12.6733 20.6951 12.773 20.3372C12.8887 19.9245 12.6661 20.1734 13.0455 20.0918C13.2457 20.0482 14.0724 20.1895 14.3217 20.2402C14.7177 20.3203 14.9359 20.5601 15.2481 20.8027C16.0691 21.4432 16.9731 21.9389 17.8931 22.4297C18.6056 22.8136 18.8152 23.2995 18.3599 24.0905ZM13.3302 4.71728C13.6727 5.04283 13.995 5.42814 14.506 5.46048C14.9894 5.49212 15.4454 5.23759 15.8674 5.55751C16.3357 5.90908 16.6732 6.35415 17.2947 6.46384C17.8959 6.57001 18.5326 6.22829 18.6815 5.62994C18.826 5.0597 18.5145 4.43954 18.4957 3.8672C18.4957 3.78775 18.5398 3.43478 18.4835 3.37501C18.4415 3.33001 18.0918 3.38064 18.0383 3.38204C17.6466 3.39329 17.2559 3.41954 16.8662 3.46079C15.4453 3.61043 14.0538 3.95731 12.734 4.49087C12.9096 4.609 13.13 4.65611 13.3302 4.71728ZM25.7556 8.66743C26.3691 8.66743 26.992 8.40025 26.794 7.70978C26.6278 7.13111 26.3445 6.50322 25.6551 6.8154C25.2165 7.01369 24.595 7.51853 24.5437 8.01915C24.4851 8.58728 25.3465 8.66743 25.7556 8.66743ZM25.2656 11.6888C25.8921 12.0537 26.8215 11.8821 27.2941 11.3611C27.6634 10.9533 27.8809 10.2452 28.545 10.246C28.8374 10.2454 29.1183 10.3567 29.3269 10.556C29.6015 10.8324 29.5473 11.0918 29.6059 11.4377C29.7367 12.2147 30.593 11.482 30.8163 11.1811C30.9608 10.9849 31.1567 10.6938 31.0909 10.4386C31.0302 10.2002 30.7441 9.94642 30.6169 9.72775C30.2454 9.09494 29.9397 8.35876 29.3833 7.84759C28.8478 7.3554 28.1895 7.41236 27.6814 7.92353C27.2652 8.3454 26.7817 8.67939 26.497 9.19267C26.2961 9.55337 26.0699 9.72564 25.6631 9.81915C25.439 9.87048 25.1832 9.88947 24.9953 10.0357C24.4721 10.4365 24.7698 11.3991 25.2656 11.6888Z"
                      fill="white"/>
                </svg>
              </router-link>
            </li>
            <li class="mx-2 xl:mx-3">
              <router-link to="/contacts">
                <svg width="38" height="36" viewBox="0 0 38 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                      d="M13.8415 13.023C12.1426 14.391 11.5203 16.8855 12.9865 18.8865C14.3643 20.7633 16.0843 22.3923 18.0658 23.697C20.178 25.086 22.8111 24.4965 24.2551 22.887L24.2709 22.8945C26.115 23.7043 28.0726 24.2585 30.0833 24.54V28.5H30.077C17.4515 28.5165 7.90243 19.3665 7.91668 7.506V7.5H12.0967V7.5015C12.3944 9.4065 12.9802 11.2605 13.8336 13.0065L13.8415 13.0215V13.023ZM30.0833 31.5H31.6667C32.0866 31.5 32.4893 31.342 32.7863 31.0607C33.0832 30.7794 33.25 30.3978 33.25 30V23.247C33.2503 22.8872 33.1141 22.5392 32.8662 22.2666C32.6183 21.994 32.2751 21.8149 31.8994 21.762L30.5473 21.573C28.8368 21.3325 27.1715 20.8607 25.6025 20.172L24.4103 19.6485C24.0755 19.5016 23.697 19.47 23.3403 19.5593C22.9836 19.6486 22.6709 19.8531 22.4564 20.1375L21.9165 20.853C21.4431 21.4815 20.539 21.672 19.8724 21.2325C18.2012 20.1319 16.7503 18.7579 15.5879 17.175C15.124 16.542 15.3267 15.6855 15.9885 15.2385L16.7438 14.7285C17.0443 14.5252 17.2605 14.2288 17.3547 13.8905C17.449 13.5522 17.4155 13.1933 17.2599 12.876L16.7058 11.745C15.9795 10.2584 15.4821 8.68086 15.2285 7.0605L15.0274 5.7795C14.9716 5.42357 14.7826 5.09851 14.4948 4.86363C14.2071 4.62875 13.8398 4.49969 13.4599 4.5H6.33335C5.91342 4.5 5.5107 4.65804 5.21376 4.93934C4.91683 5.22064 4.75002 5.60218 4.75002 6V7.5015C4.73418 21.012 15.6909 31.5195 30.0818 31.5H30.0833Z"
                      fill="white"/>
                </svg>
              </router-link>
            </li>
          </ul>
        </el-col>
      </el-row>
    </el-container>
  </el-header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Header'
})
</script>

<style lang="scss" scoped>
@import 'src/assets/scss/utils/vars.scss';

.header {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 180px;

  .logo {
    img {
      width: 239px;
      height: 75px;
      object-fit: contain;

      @media screen and (max-width: $lgDesktopWidth) {
        width: 189px;
        height: 60px;
      }
      @media screen and (max-width: $smTableWidth) {
        width: 159px;
        height: 47px;
      }
      @media screen and (max-width: $smPhoneWidth) {
        width: 149px;
        height: 40px;
      }
    }
  }

  .nav-list {
    a {
      display: inline-block;
      font-size: 18px;
      font-weight: 500;
      color: #fff;
      transition: .3s;

      &.active {
        position: relative;

        &::before {
          content: '';
          position: absolute;
          background-color: #fff;
          border-radius: 50%;
          width: 8px;
          height: 8px;
          left: 50%;
          bottom: -12px;
          transform: translateX(-50%);
          transition: .3s;

          @media screen and (max-width: $smDesktopWidth) {
            width: 6px;
            height: 6px;
            bottom: -10px;
          }
          @media screen and (max-width: $smTableWidth) {
            display: none;
          }
        }
      }

      &:hover {
        transform: translateY(1px);

        &::before {
          transform: translateX(-50%) translateY(-3px);
          opacity: 0;
        }
      }

      @media screen and (max-width: $lgDesktopWidth) {
        font-size: 16px;
      }
      @media screen and (max-width: $tableWidth) {
        font-size: 15px;
      }
      @media screen and (max-width: $smTableWidth) {
        font-size: 16px;
      }
    }
  }

  .social-list {
    a {
      width: 40px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 4px;
      transition: .3s;

      &:hover {
        opacity: .7;
      }

      svg {
        width: 32px;
        height: 32px;

        @media screen and (max-width: $lgDesktopWidth) {
          width: 28px;
          height: 28px;
        }
        @media screen and (max-width: $smDesktopWidth) {
          width: 26px;
          height: 26px;
        }
        @media screen and (max-width: $tableWidth) {
          width: 24px;
          height: 24px;
        }
        @media screen and (max-width: $smTableWidth) {
          width: 26px;
          height: 26px;
        }
      }

      @media screen and (max-width: $smDesktopWidth) {
        width: 34px;
        height: 34px;
      }
      @media screen and (max-width: $tableWidth) {
        width: 32px;
        height: 32px;
      }
      @media screen and (max-width: $smTableWidth) {
        width: 36px;
        height: 36px;
      }
    }
  }

  @media screen and (max-width: $lgDesktopWidth) {
    height: 150px;
  }
  @media screen and (max-width: $tableWidth) {
    height: 140px;
  }
  @media screen and (max-width: $smTableWidth) {
    height: 190px;
  }
}

</style>
