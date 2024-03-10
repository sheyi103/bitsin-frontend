<template>
  <div class="">
    <div class="font">
      <div class="container">
        <!-- the perfect place -->
        <div class="row space">
          <div class="col-lg-3 col-md-3 col-xl-3 col-xxl-3">
            <!-- title -->
            <h2 class="fontbold blue mob-center perfect-head-text">
              Find the Perfect Place
            </h2>
            <div class="fs-250 mob-center py-3">
              <span
                >Our list of destinations will provide the perfect place for you and your
                loved ones to have great adventures and fun stories to share
              </span>
            </div>
            <!-- learn more button -->
            <!-- <div
              class="bggreen w-80 white fw-bold rounded-2 my-4 text-center p-2"
            >
              <span>Learn More</span>
            </div> -->
          </div>
          <div
            v-for="(place, index) in myplace"
            :key="index"
            class="col-lg-3 centerplacecard col-md-3 col-xl-3 col-xxl-3"
          >
            <div class="position-relative">
              <div class="">
                <img
                  :src="require(`@/assets/images/${place.image}`)"
                  alt=""
                  class="w-100"
                />
              </div>
              <!-- price,place, -->
              <div class="priceposition white">
                <!-- country -->
                <div>
                  <small>{{ place.country }}</small>
                </div>
                <!-- city -->
                <div>
                  <span class="fw-bold fs-450 ">{{ place.city }}</span>
                </div>
                <!-- currency and price -->
                <div class="d-flex py-2 align-items-center">
                  <!-- currency -->
                  <div>
                    <small>from</small>
                    <br />
                    <small>usd</small>
                  </div>
                  <!-- price -->
                  <div>
                    <span class="fw-bold px-2 fs-450">300</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- visa processing -->
        <div class="row my-5">
          <div class="col-lg-6 col-md-6 col-xl-6 col-xxl-6 removeFrommobile">
            <div class="d-flex justify-content-center">
              <img src="@/assets/images/holdvisa.png" alt="" class="w-75" />
            </div>
          </div>
          <div class="col-lg-6 col-md-6 col-xl-6 col-xxl-6 position-relative">
            <div class="w-50 visap">
              <div class="fontbold blue">
                <h2 class="perfect-head-text">Visa Processing and Travel Guide</h2>
              </div>
              <div class="my-4">
                <small
                  >Every journey begins with visa processing, we provide a fast and
                  professional way to process various visas, like student visa, work visa
                  and tourist visa. Check your destination and apply online for the visa
                  of your choice.
                </small>
              </div>
              <div
                class="bggreen requestbtn w-80 white fw-bold rounded-2 my-4 text-center p-2"
              >
                <span>Make Request</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import perfect from "@/json/perfect.json";
export default {
  data() {
    return {
      myplace: perfect,
    };
  },
};
</script>

<style scoped>
/* price position on cards*/
.priceposition {
  position: absolute;
  top: 1rem;
  left: 2rem;
  right: 0rem;
}
/* margin around row */
.space {
  margin: 6rem 0rem;
}
/* position of visa processing text */
.visap {
  position: absolute;
  top: 6rem !important;
}
@media (max-width: 992px) {
  /* request button in */
  .requestbtn {
    display: flex;
    justify-content: center;
    width: 80%;
    margin: auto;
    font-size: 0.9rem !important;
  }
  .visap {
    position: unset;
    top: 6rem !important;
    text-align: center;
    width: 100% !important;
  }
  .perfect-head-text {
    font-size: 1.3rem !important;
  }
  .mob-center {
    text-align: center;
  }
  .space {
    margin: 3rem 0rem;
  }
  /* center cards */
  .centerplacecard {
    width: 90% !important;
    margin: 0.5rem auto;
  }
  /* remove desktop div from mobile */
  .removeFrommobile {
    display: none !important;
  }
}
</style>
