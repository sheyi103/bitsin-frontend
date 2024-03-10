<template>
  <div class="">
    <!-- container -->
    <div class="font bgblue white py-5">
      <div class="container">
        <div class="row mob-width">
          <!-- logo and intro -->
          <div class="col-md-4 col-xl-4 col-xxl-4 col-lg-4">
            <!-- logo -->
            <div>
              <h2 class="fw-bold">TravelNice</h2>
            </div>
            <div>
              <span class="fs-200"
                >A list of top 75 best tourist places to visit and see in the
                world for your birthday and wedding vacations
              </span>
            </div>
          </div>
          <!-- services -->
          <div class="col-md-3 padding col-xl-3 col-xxl-3 col-lg-3">
            <ul class="off-list-deco">
              <li class="fw-bold pb-3">Services</li>
              <nuxt-link
                class="text-decoration-none text-reset"
                v-for="(serve, index) in myservices"
                :key="index"
                :to="serve.to"
              >
                <li class="fs-200 py-1">{{ serve.list1 }}</li></nuxt-link
              >
            </ul>
          </div>
          <!-- account -->
          <div class="col-md-3 paddin2g col-xl-3 col-xxl-3 col-lg-3">
            <ul class="off-list-deco">
              <li class="fw-bold pb-3">Account</li>
              <nuxt-link
                v-for="(actt, index) in myaccount"
                :key="index"
                class="text-decoration-none text-reset"
                :to="actt.to"
              >
                <li class="fs-200 py-1">
                  {{ actt.list3 }}
                </li></nuxt-link
              >
            </ul>
          </div>
          <!-- About -->
          <div class="col-md-2 paddin2g col-xl-2 col-xxl-2 col-lg-2">
            <ul class="off-list-deco">
              <li class="fw-bold pb-3">About</li>
              <nuxt-link
                v-for="(abt, index) in myabout"
                :key="index"
                class="text-decoration-none text-reset"
                :to="abt.to"
              >
                <li class="fs-200 py-1">{{ abt.list2 }}</li></nuxt-link
              >
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import clickserve from '@/json/services.json'
import clickaccount from '@/json/account.json'
import clickabout from '@/json/about.json'
export default {
  data() {
    return {
      myservices: clickserve,
      myaccount: clickaccount,
      myabout: clickabout,
    }
  },
}
</script>

<style scoped>
/* unordered list reset */
.off-list-deco {
  list-style-type: none !important;
}
@media (max-width: 576px) {
  /* 100% width */
  .mob-width {
    width: 100% !important;
  }
  .padding {
    padding: 1rem 1rem;
  }
  .paddin2g {
    padding: 0rem 1rem !important;
  }
}
</style>
