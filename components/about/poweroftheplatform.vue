<template>
  <div>
    <div class="font">
      <div class="bggreen2 amazinspace">
        <div class="container">
          <div class="text-center pt-5">
            <h2 class="fontbold">The Power of Our Platform</h2>
            <span>Value trough reaching the global world at one time</span>
          </div>

          <!-- rating in different areas -->
          <div class="d-flex justify-content-center">
            <div class="row mob-disable py-5">
              <div class="col-lg-4 bgwhite text-center py-2">
                <h2 class="fontbold blue">20 +</h2>

                <span class="fs-200">countries</span>
              </div>
              <div class="col-lg-4 bgwhite text-center py-2">
                <h2 class="fontbold blue">35 +</h2>

                <span class="fs-200">Travel sites</span>
              </div>
              <div class="col-lg-4 bgwhite text-center py-2">
                <h2 class="fontbold blue">60 +</h2>

                <span class="fs-200">Visa Processed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- the amazin story grid -->
      <div class="container">
        <div class="text-center amazinspace">
          <h2 class="fontbold">The amazing story</h2>
          <p class="w-60 m-auto">
            We're a passionate bunch working from all over the world to build the future
            of product research together.
          </p>
        </div>
        <Hooper
          :settings="hooperSettings"
          class="row amazinspace amazinplacessliderheight"
        >
          <Slide
            v-for="(bitsinpower, index) in power"
            :key="index"
            class="col-lg-3 col-md-3 col-xl-3 col-xxl-3"
          >
            <img :src="require(`@/assets/images/${bitsinpower}`)" alt="" class="w-100" />
          </Slide>
        </Hooper>
        <!-- our partner -->
        <!-- <div class="amazinspace">
          <div class="text-center">
            <h2 class="fontbold">Our Partners</h2>
            <p class="w-60 m-auto">
              We’re lucky to be part of the amazing portfolios of some of the
              world’s best investors.
            </p>
          </div> -->
        <!-- partners -->
        <!-- <div
            class="d-flex amazinspace justify-content-center text-center fw-bold"
          >
            <div class="w-13">
              <img src="@/assets/icon/blueFlight.svg" alt="" />
              <br /><span class="fs-170">Nigerian airways</span>
            </div>
            <div class="w-13">
              <img src="@/assets/icon/blueFlight.svg" alt="" />
              <br /><span class="fs-170">Nigerian airways</span>
            </div>
            <div class="w-13">
              <img src="@/assets/icon/blueFlight.svg" alt="" />
              <br /><span class="fs-170">Nigerian airways</span>
            </div>
            <div class="w-13">
              <img src="@/assets/icon/blueFlight.svg" alt="" />
              <br /><span class="fs-170">Nigerian airways</span>
            </div>
            <div class="w-13">
              <img src="@/assets/icon/blueFlight.svg" alt="" />
              <br /><span class="fs-170">Nigerian airways</span>
            </div>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import powerplatform from "@/json/places.json";
import { Hooper, Slide } from "hooper";
import "hooper/dist/hooper.css";
export default {
  components: {
    Hooper,
    Slide,
  },
  data() {
    return {
      power: powerplatform,
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
      num: 1000,
      count: 0,
      is_comma: true,
    };
  },
  watch: {
    num(val) {
      this.setCount(val);
    },
  },
  methods: {
    setCount(val) {
      const obj = { n: this.count };
      // anime({
      //   targets: obj,
      //   n: val,
      //   round: 1,
      //   duration: 500,
      //   easing: 'linear',
      //   update: () => {
      //     this.count = obj.n
      //   }
      // })
    },
  },
  filters: {
    addComma(val) {
      return val.toLocaleString();
    },
  },
  mounted() {
    this.setCount(this.num);
  },
};
</script>

<style scoped>
/* amazing space title */
.amazinspace {
  margin: 2rem 0rem !important;
}
.amazinplacessliderheight {
  height: 50vh;
}
@media (max-width: 576px) {
  .mob-disable {
    display: block !important;
  }
}
</style>
