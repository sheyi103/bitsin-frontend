<template>
  <div class="bgwhite">
    <div class="font container">
      <div class="">
        <!-- best value for you text -->
        <div class="text-center benefitstxt py-5">
          <h2 class="blue fontbold best-head-text">Best Value for You</h2>
          <span class="fs-200">Try varieties of benefits when using our services</span>
        </div>
        <!-- what we offer container-->
        <div class="row my-3 removeFromWork">
          <div
            v-for="(value, index) in offers"
            :key="index"
            class="col-lg-3 col-md-3 col-xl-3 col-xxl-3"
          >
            <div style="height: 240px" class="rounded-2 shadow-sm">
              <!-- image of card -->
              <div class="d-flex py-4 justify-content-center">
                <img :src="require(`@/assets/icon/${value.image}`)" alt="" width="30" />
              </div>
              <!-- what this offers -->
              <div class="text-center m-auto w-70 py-3">
                <h6 class="fontbold">{{ value.head1 }}</h6>
                <span class="fs-250">{{ value.content }}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="notindesktop">
          <hooper :settings="hooperSettings" class="row hooperheight">
            <slide
              v-for="(value, index) in offers"
              :key="index"
              class="col-lg-3 col-md-3 col-xl-3 mx-1 col-xxl-3"
            >
              <div style="height: 220px" class="rounded-2 shadow-sm">
                <!-- image of card -->
                <div class="d-flex py-4 justify-content-center">
                  <img :src="require(`@/assets/icon/${value.image}`)" alt="" width="30" />
                </div>
                <!-- what this offers -->
                <div class="text-center m-auto w-70 py-3">
                  <h6 class="fontbold">{{ value.head1 }}</h6>
                  <span class="fs-250">{{ value.content }}</span>
                </div>
              </div>
            </slide>
            <!-- <slide class="bgblack"> slide 2 </slide>
            ... -->
          </hooper>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import best from "@/json/offer.json";
import { Hooper, Slide } from "hooper";
import "hooper/dist/hooper.css";
export default {
  components: {
    Hooper,
    Slide,
  },
  data() {
    return {
      offers: best,
      hooperSettings: {
        // itemsToShow: 2,
        infiniteScroll: true,
        centerMode: false,
        breakpoints: {
          800: {
            centerMode: false,
            itemsToShow: 3,
          },
          576: {
            itemsToShow: 1,
            // pagination: 'fraction'
          },
          0: {
            itemsToShow: 1.3,
          },
        },
      },
    };
  },
  methods: {},
};
</script>

<style scoped>
/* best value for you text */
.best-head-text {
  word-spacing: 0.3rem !important;
}
@media (max-width: 992px) {
  /* slider height */
  .hooperheight {
    height: 28vh !important;
  }
  .best-head-text {
    font-size: 1.3rem !important;
  }
  .benefitstxt {
    width: 90% !important;
    margin: auto !important;
  }
  /* remove desktop div from mobile */
  .removeFromWork {
    display: none !important;
  }
}
@media (min-width: 992px) {
  .notindesktop {
    display: none !important;
  }
}
</style>
