<template>
  <div class="positionstick">
    <!-- container -->
    <div class="bgblue font">
      <div class="container">
        <div class="d-flex py-2 white align-items-center justify-content-between">
          <!-- logo -->
          <div class="">
            <nuxt-link to="/">
              <img
                src="@/assets/icon/logo-removebg-preview.png"
                alt="website logo"
                class=""
                style="width: 130px"
              />
            </nuxt-link>
          </div>
          <!-- buttons -->
          <div class="not-on-mobile d-flex white align-items-center">
            <!-- {{$auth.user}} -->
            <div v-for="list in navbar" :key="list" class="mx-3">
              <nuxt-link class="text-reset text-decoration-none" :to="list.to">
                <span class="navtext">{{ list.nav }}</span>
              </nuxt-link>
            </div>
          </div>
          <!-- login/register -->
          <div class="not-on-mobile postion-relative d-flex align-items-center">
            <div
              v-if="$auth.loggedIn"
              @click="opendrop"
              role="button"
              class="d-flex align-items-center"
            >
              <div class="pe-2">
                <span>Welcome,</span>
              </div>
              <div>
                <span> {{ $auth.user.first_name }}</span>
              </div>
              <div class="px-2">
                <svg
                  width="14"
                  height="8"
                  viewBox="0 0 14 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.00072 5.17205L11.9507 0.222046L13.3647 1.63605L7.00072 8.00005L0.636719 1.63605L2.05072 0.222046L7.00072 5.17205Z"
                    fill="white"
                  />
                </svg>
              </div>
              <!--user dropdown -->
              <div
                v-if="itsopendrop"
                role="button"
                class="userdropdwonpo fs-200 bgblue rounded-2 p-2 w-20"
              >
                <div>
                  <!-- go to dashboard -->
                  <nuxt-link to="dashboard/home" class="text-reset text-decoration-none">
                    <div class="p-2 d-flex align-items-center">
                      <div>
                        <svg
                          width="14"
                          height="16"
                          viewBox="0 0 14 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.00138 11.75C9.74788 11.75 12.1501 12.9312 13.4566 14.6937L12.0751 15.347C11.0116 14.087 9.13663 13.25 7.00138 13.25C4.86613 13.25 2.99113 14.087 1.92763 15.347L0.546875 14.693C1.85337 12.9305 4.25487 11.75 7.00138 11.75ZM7.00138 0.5C7.99594 0.5 8.94976 0.895088 9.65303 1.59835C10.3563 2.30161 10.7514 3.25544 10.7514 4.25V6.5C10.7513 7.46635 10.3782 8.39537 9.70988 9.09333C9.04154 9.7913 8.12956 10.2043 7.16412 10.2463L7.00138 10.25C6.00681 10.25 5.05299 9.85491 4.34972 9.15165C3.64646 8.44839 3.25137 7.49456 3.25137 6.5V4.25C3.25143 3.28365 3.62453 2.35463 4.29287 1.65667C4.96121 0.958705 5.87319 0.54569 6.83862 0.50375L7.00138 0.5ZM7.00138 2C6.42747 1.99997 5.87524 2.21924 5.45768 2.61296C5.04012 3.00668 4.78879 3.54508 4.75513 4.118L4.75138 4.25V6.5C4.75081 7.08568 4.97864 7.6485 5.38645 8.06886C5.79427 8.48923 6.34992 8.73401 6.93535 8.7512C7.52077 8.76839 8.08983 8.55662 8.5216 8.1609C8.95337 7.76519 9.21383 7.2167 9.24763 6.632L9.25138 6.5V4.25C9.25138 3.65326 9.01432 3.08097 8.59237 2.65901C8.17041 2.23705 7.59811 2 7.00138 2Z"
                            fill="white"
                          />
                        </svg>
                      </div>
                      <div class="px-2">
                        <span>Profile</span>
                      </div>
                    </div>
                  </nuxt-link>
                  <!-- signout -->
                  <div
                    @click="$auth.logout()"
                    class="bggreen d-flex align-items-center rounded-2 p-2"
                  >
                    <div>
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_734_6857)">
                          <path
                            d="M3 13.5H4.5V15H13.5V3H4.5V4.5H3V2.25C3 2.05109 3.07902 1.86032 3.21967 1.71967C3.36032 1.57902 3.55109 1.5 3.75 1.5H14.25C14.4489 1.5 14.6397 1.57902 14.7803 1.71967C14.921 1.86032 15 2.05109 15 2.25V15.75C15 15.9489 14.921 16.1397 14.7803 16.2803C14.6397 16.421 14.4489 16.5 14.25 16.5H3.75C3.55109 16.5 3.36032 16.421 3.21967 16.2803C3.07902 16.1397 3 15.9489 3 15.75V13.5ZM4.5 8.25H9.75V9.75H4.5V12L0.75 9L4.5 6V8.25Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_734_6857">
                            <rect width="18" height="18" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <div class="px-2"><span>Log out</span></div>
                  </div>
                </div>
              </div>
            </div>
            <div v-else class="d-flex align-items-center">
              <!-- Login -->
              <div>
                <nuxt-link to="/auth/login" class="text-decoration-none text-reset">
                  <div class="mx-2">
                    <span>Login</span>
                  </div>
                </nuxt-link>
              </div>
              <div>
                <!-- Register -->
                <nuxt-link to="/auth/register" class="text-decoration-none text-reset">
                  <div class="mx-2 bggreen white rounded-2 fs-200 px-3 py-1">
                    <span>Register</span>
                  </div>
                </nuxt-link>
              </div>
            </div>
          </div>
          <!-- mobile side menu display -->
          <div
            class="notindesktop onmobile cancel"
            :style="{ transform: `rotate(${deg}deg)` }"
            v-if="menuicon"
            @click="menu"
          >
            <svg
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 30 30"
              width="30px"
              height="30px"
            >
              <path
                d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z"
              />
            </svg>
          </div>
          <div
            v-if="mobmenu"
            :style="{ transform: `rotate(${deg2}deg)` }"
            @click="cancel"
            class="notindesktop cancel2 onmobile"
          >
            <svg
              width="20"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.49931 5.90934L13.0681 0.340576L14.6588 1.93133L9.09006 7.50009L14.6588 13.0688L13.0681 14.6596L7.49931 9.09084L1.93059 14.6596L0.339844 13.0688L5.90856 7.50009L0.339844 1.93133L1.93059 0.340576L7.49931 5.90934Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </div>
      <!-- mobile side menu -->
      <div class="position-relative notindesktop">
        <div v-if="mobmenu" class="bgblue w-100 px-3 displaymenu">
          <div @click="cancel">
            <ul class="white p-0">
              <div v-for="list in navbar" :key="list" class="py-3">
                <nuxt-link class="text-reset menutxt text-decoration-none" :to="list.to">
                  <li class="navtext">{{ list.nav }}</li>
                </nuxt-link>
              </div>
              <div v-if="$auth.loggedIn" class="">
                <div class="d-flex fs-200 py-3 align-items-center">
                  <div class="pe-2 fs-200">
                    <span>Welcome,</span>
                  </div>
                  <div>
                    <span> {{ $auth.user.first_name.split(" ")[0] }}</span>
                  </div>
                </div>
                <!-- go to dashboard -->
                <div class="py-2">
                  <nuxt-link
                    class="text-decoration-none text-reset"
                    to="@/pages/dashboard/userDashboard.vue"
                  >
                    <span>Profile</span>
                  </nuxt-link>
                </div>
                <!-- signout -->
                <div @click="$auth.logout()" class="bggreen w-50 rounded-2 p-2">
                  <span>sign out</span>
                </div>
              </div>
              <div class="" v-else>
                <nuxt-link
                  to="/auth/login"
                  class="text-decoration-none navtextt text-reset"
                  ><li class="py-3 navtextt">Login</li></nuxt-link
                >
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import nav from "@/json/nav";
export default {
  data() {
    return {
      navbar: nav,
      itsopendrop: false,
      mobmenu: false,
      menuicon: true,
      deg: 0,
      deg2: 180,
    };
  },

  methods: {
    opendrop() {
      if (!this.itsopendrop) {
        this.itsopendrop = true;
      } else {
        this.itsopendrop = false;
      }

      // this.itsopen=false
    },
    menu() {
      this.deg2 = 180;
      this.mobmenu = true;

      // this.deg = 360

      this.menuicon = false;
    },
    cancel() {
      this.deg = 360;
      this.mobmenu = false;
      this.menuicon = true;
      // this.deg2 = 360
    },
  },
};
</script>

<style scoped>
/* user dropdown */
.userdropdwonpo {
  position: absolute;
  z-index: 1000;
  animation: fadeInRight; /* referring directly to the animation's @keyframe declaration */
  animation-duration: 1s;
  top: 4rem;
  right: 0rem;
}
.positionstick {
  position: sticky !important;
  top: 0rem !important;
  z-index: 1000 !important;
}
ul {
  list-style-type: none;
}

/* max-width */
.header-width {
  max-width: 90% !important;
  margin: auto !important;
}
@media (min-width: 1410px) {
  .header-width {
    max-width: 90% !important;
    margin: auto !important;
  }
}
/* navigation bar text when you either operate or hover*/

.navtext:hover {
  color: var(--clr-green) !important;
  border-bottom: 3px solid var(--clr-green) !important;
  font-weight: bold;
}
/* things to not show on mobile */
@media (max-width: 992px) {
  /* .positionstick {
    position: unset !important;
  } */
  .not-on-mobile {
    display: none !important;
  }
  .onmobile {
    display: unset !important;
  }
  /* cancel style */
  .cancel {
    transition: transform 1s ease-in-out !important;
  }
  .cancel2 {
    transition: transform 1s ease-in-out !important;
  }
  .displaymenu {
    animation: fadeInRight; /* referring directly to the animation's @keyframe declaration */
    animation-duration: 1s;
    z-index: 1000 !important;
    position: absolute;
    position: fixed;
    height: 100vh !important;
    /* bottom: 0rem; */
    margin: unset !important;
  }
  /* hover on menu text */
  .navtextt:hover {
    color: var(--clr-green) !important;
    border-bottom: 3px solid var(--clr-green) !important;
    font-weight: bold;
  }
}
@media (min-width: 992px) {
  .notindesktop {
    display: none !important;
  }
}
</style>
