<template>
  <div class="">
    <div class="font container">
      <div class="">
        <!-- head text -->
        <div class="text-center py-5">
          <h2 class="fontbold blue trend-head-text">
            Trending Flight and Hotel Deals
          </h2>
          <span class="fs-200"
            >Explore the latest vacation destinations and get the best flight
            deals, airline <br />
            specials and promotions.</span
          >


        </div>
        <!-- hotel ,flight, view more button -->
        <div class="d-flex align-items-center justify-content-between my-2">
          <!-- hotel and flight button -->
          <div
            class="d-flex fw-bold justify-content-between align-items-center rounded-2 px-1 py-1 bgwhite1 select-button w-30"
          >
            <!-- flight -->
            <div
              @click="clickbutton('flight')"
              class="fs-200 hffocus black py-2 text-center rounded-1 w-50 white"
            >
              <span class="">Flight</span>
            </div>
            <!-- Hotels -->
            <div
              @click="clickbutton('hotel')"
              class="black hffocus text-center py-2 rounded-1 w-50 white fs-200"
            >
              <span>Hotels</span>
            </div>
          </div>
          <!-- view more -->
          <div class="fs-170 fw-bold">
            <span>View More</span>
          </div>
        </div>
        <!-- available flight and hotel grid -->
        <div v-if="flight" class="row my-4">



          <div
            v-for="(flight, index) in responseData" :key="index"
            class="col-lg-3 col-md-3 col-xl-3 col-xxl-3"
          >
            <!-- card -->
            <div class="position-relative notinmobile">
              <div class="">
                <img
                  :src="require(`@/assets/images/Rectangle18.png`)"
                  alt=""
                  class="w-100"
                />
              </div>
              <!-- price and date -->
              <div
                class="w-95 black my-2 p-2 priceDatePosition white rounded-3"
              >
                <div class="py-2">
                  <h4 style="height: 3vh" class="fw-bold">
                    ₦ {{flight.totalPrice }}
                  </h4>
                  <div class="d-flex py-2 fw-bold fs-150 align-items-center">
                    <div>
                      {{ flight.origin }}
                      <!-- <span>{{ flight.departureTime}}</span> -->

                    </div>

                    <div class="px-3">
                      <span> - </span>
                    </div>
                    <div>
                      {{ flight.destination }}
                      <!-- <span>{{ flight.arrivalTime }}</span> -->

                    </div>

                  </div>
                   <div class="d-flex  fw-bold fs-150 align-items-center">
                    <div>
                      {{ flight.departureTime }}
                      <span>{{ flight.departureDate}}</span>

                    </div>

                    <div class="px-2">
                      <span> - </span>
                    </div>
                    <div>
                      {{ flight.arrivalTime }}
                      <span>{{ flight.arrivalDate }}</span>

                    </div>

                  </div>
                 
                </div>
                <!-- book now button -->
                <div
                  class="d-flex py-2 justify-content-between align-items-center"
                >
                  <!-- flight icon -->
                  <div>
                    <svg
                      width="20"
                      height="29"
                      viewBox="0 0 35 29"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.4634 13.3867L7.94669 1.60003L11.165 0.736694L22.75 11.4367L31.52 9.08669C32.1605 8.91519 32.8429 9.00514 33.4171 9.33677C33.9913 9.6684 34.4102 10.2145 34.5817 10.855C34.7532 11.4955 34.6632 12.1779 34.3316 12.7521C34 13.3263 33.4539 13.7452 32.8134 13.9167L7.86003 20.6L6.56669 15.77L6.96836 15.6617L11.08 19.7367L6.70336 20.91C6.34447 21.0063 5.96371 20.9798 5.62158 20.8348C5.27945 20.6899 4.99556 20.4348 4.81503 20.11L0.443359 12.2334L2.85836 11.5867L6.96836 15.6617L15.4634 13.385V13.3867ZM4.66669 25.6667H31.3334V29H4.66669V25.6667Z"
                        fill="url(#paint0_linear_217_44)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_217_44"
                          x1="17.5551"
                          y1="0.736694"
                          x2="17.5551"
                          y2="29"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#6363FE" />
                          <stop offset="1" stop-color="#050526" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <!-- book now -->
                  <div class="bggreen white fw-bold fs-170 rounded-2 py-2 px-2" @click="booking">
                    <span v-show="!isLoading">BOOK NOW</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- mobile slider -->
          <hooper :settings="trendSettings" class="hooperheight notindesktop">
            <slide
              v-for="(clicktrend, index) in mytrend"
              :key="index"
              class="col-lg-3 m-2 col-md-3 col-xl-3 col-xxl-3"
            >
              <!-- card -->
              <div class="position-relative h">
                <div class="">
                  <img
                    :src="require(`@/assets/images/${clicktrend.image}`)"
                    alt=""
                    class="w-100"
                  />
                </div>
                <!-- price and date -->
                <div
                  class="w-95 black my-2 p-2 priceDatePosition white rounded-3"
                >
                  <div class="py-2">
                    <h4 style="height: 3vh" class="fw-bold">
                      ₦{{ clicktrend.price }}
                    </h4>
                    <div class="d-flex fw-bold fs-150 align-items-center">
                      <div>
                        <span>{{ clicktrend.start }}</span>
                      </div>
                      <div class="px-1">
                        <span>-</span>
                      </div>
                      <div>
                        <span>{{ clicktrend.end }}</span>
                      </div>
                    </div>
                  </div>
                  <!-- book now button -->
                  <div
                    class="d-flex py-2 justify-content-between align-items-center"
                  >
                    <!-- flight icon -->
                    <div>
                      <svg
                        width="20"
                        height="29"
                        viewBox="0 0 35 29"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15.4634 13.3867L7.94669 1.60003L11.165 0.736694L22.75 11.4367L31.52 9.08669C32.1605 8.91519 32.8429 9.00514 33.4171 9.33677C33.9913 9.6684 34.4102 10.2145 34.5817 10.855C34.7532 11.4955 34.6632 12.1779 34.3316 12.7521C34 13.3263 33.4539 13.7452 32.8134 13.9167L7.86003 20.6L6.56669 15.77L6.96836 15.6617L11.08 19.7367L6.70336 20.91C6.34447 21.0063 5.96371 20.9798 5.62158 20.8348C5.27945 20.6899 4.99556 20.4348 4.81503 20.11L0.443359 12.2334L2.85836 11.5867L6.96836 15.6617L15.4634 13.385V13.3867ZM4.66669 25.6667H31.3334V29H4.66669V25.6667Z"
                          fill="url(#paint0_linear_217_44)"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_217_44"
                            x1="17.5551"
                            y1="0.736694"
                            x2="17.5551"
                            y2="29"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#6363FE" />
                            <stop offset="1" stop-color="#050526" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <!-- book now -->
                    <div
                      class="bggreen white fw-bold fs-170 rounded-2 py-2 px-2"
                    >
                      <span>BOOK NOW</span>
                    </div>
                  </div>
                </div>
              </div>
            </slide>
          </hooper>
        </div>
        <!-- hotel -->
        <div v-if="hotel" class="row my-4">
          <div
            v-for="(clicktrend, index) in mytrend"
            :key="index"
            class="col-lg-3 col-md-3 col-xl-3 col-xxl-3"
          >
            <!-- card -->
            <div class="position-relative notinmobile">
              <div class="">
                <img
                  :src="require(`@/assets/images/${clicktrend.image}`)"
                  alt=""
                  class="w-100"
                />
              </div>
              <!-- price and date -->
              <div
                class="w-95 black my-2 p-2 priceDatePosition white rounded-3"
              >
                <div class="py-1">
                  <span style="height: 3vh" class="fw-bold">
                    Sheraton Hotel
                  </span>
                  <!-- star -->
                  <div class="d-flex align-items-center">
                    <div class="px-1">
                      <svg
                        width="15"
                        height="17"
                        viewBox="0 0 18 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.00018 13.695L3.71043 16.656L4.89168 10.71L0.44043 6.594L6.46068 5.88L9.00018 0.375L11.5397 5.88L17.5599 6.594L13.1087 10.71L14.2899 16.656L9.00018 13.695Z"
                          fill="#86a680"
                        />
                      </svg>
                    </div>
                    <div class="px-1">
                      <svg
                        width="15"
                        height="17"
                        viewBox="0 0 18 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.00018 13.695L3.71043 16.656L4.89168 10.71L0.44043 6.594L6.46068 5.88L9.00018 0.375L11.5397 5.88L17.5599 6.594L13.1087 10.71L14.2899 16.656L9.00018 13.695Z"
                          fill="#86a680"
                        />
                      </svg>
                    </div>
                    <div class="px-1">
                      <svg
                        width="15"
                        height="17"
                        viewBox="0 0 18 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.00018 13.695L3.71043 16.656L4.89168 10.71L0.44043 6.594L6.46068 5.88L9.00018 0.375L11.5397 5.88L17.5599 6.594L13.1087 10.71L14.2899 16.656L9.00018 13.695Z"
                          fill="#86a680"
                        />
                      </svg>
                    </div>
                    <div class="px-1">
                      <svg
                        width="15"
                        height="17"
                        viewBox="0 0 18 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.00018 13.695L3.71043 16.656L4.89168 10.71L0.44043 6.594L6.46068 5.88L9.00018 0.375L11.5397 5.88L17.5599 6.594L13.1087 10.71L14.2899 16.656L9.00018 13.695Z"
                          fill="#86a680"
                        />
                      </svg>
                    </div>
                    <div class="px-1">
                      <svg
                        width="15"
                        height="17"
                        viewBox="0 0 18 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.00018 13.695L3.71043 16.656L4.89168 10.71L0.44043 6.594L6.46068 5.88L9.00018 0.375L11.5397 5.88L17.5599 6.594L13.1087 10.71L14.2899 16.656L9.00018 13.695Z"
                          fill="#86a680"
                        />
                      </svg>
                    </div>
                  </div>
                  <div class="d-flex py-2 fw-bold fs-150 align-items-center">
                    <div>
                      <svg
                        width="18"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_462_1047)">
                          <path
                            d="M16.8337 15.9166L11 21.7503L5.16634 15.9166C4.01256 14.7628 3.22684 13.2928 2.90852 11.6925C2.5902 10.0921 2.75358 8.43333 3.37801 6.92585C4.00243 5.41836 5.05986 4.12989 6.41656 3.22338C7.77326 2.31686 9.36831 1.83301 11 1.83301C12.6317 1.83301 14.2267 2.31686 15.5834 3.22338C16.9402 4.12989 17.9976 5.41836 18.622 6.92585C19.2464 8.43333 19.4098 10.0921 19.0915 11.6925C18.7732 13.2928 17.9874 14.7628 16.8337 15.9166ZM11 11.9163C11.4862 11.9163 11.9525 11.7231 12.2964 11.3793C12.6402 11.0355 12.8333 10.5692 12.8333 10.0829C12.8333 9.59671 12.6402 9.13039 12.2964 8.78657C11.9525 8.44276 11.4862 8.2496 11 8.2496C10.5138 8.2496 10.0475 8.44276 9.70364 8.78657C9.35982 9.13039 9.16667 9.59671 9.16667 10.0829C9.16667 10.5692 9.35982 11.0355 9.70364 11.3793C10.0475 11.7231 10.5138 11.9163 11 11.9163Z"
                            fill="#949292"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_462_1047">
                            <rect width="22" height="22" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <div class="px-1">
                      <span>Opposite National Defence College CBD, Abuja</span>
                    </div>
                  </div>
                </div>
                <!-- book now button -->
                <div class="d-flex justify-content-between align-items-center">
                  <!-- hotel price -->
                  <div class="d-flex align-items-center">
                    <div>
                      <span class="fw-bold">₦34,000</span>
                    </div>
                    <div><span class="fs-150">/per night</span></div>
                  </div>
                  <div class="bggreen white fw-bold fs-170 rounded-2 py-2 px-2">
                    <span>BOOK NOW</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- mobile -->
          <hooper :settings="trendSettings" class="hooperheight notindesktop">
            <slide
              v-for="(clicktrend, index) in mytrend"
              :key="index"
              class="col-lg-3 m-2 col-md-3 col-xl-3 col-xxl-3"
            >
              <!-- card -->
              <div class="position-relative notinmobile">
                <div class="">
                  <img
                    :src="require(`@/assets/images/${clicktrend.image}`)"
                    alt=""
                    class="w-100"
                  />
                </div>
                <!-- price and date -->
                <div
                  class="w-95 black my-2 p-2 priceDatePosition white rounded-3"
                >
                  <div class="py-1">
                    <span style="height: 3vh" class="fw-bold">
                      Sheraton Hotel
                    </span>
                    <!-- star -->
                    <div class="d-flex align-items-center">
                      <div class="px-1">
                        <svg
                          width="15"
                          height="17"
                          viewBox="0 0 18 17"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.00018 13.695L3.71043 16.656L4.89168 10.71L0.44043 6.594L6.46068 5.88L9.00018 0.375L11.5397 5.88L17.5599 6.594L13.1087 10.71L14.2899 16.656L9.00018 13.695Z"
                            fill="#86a680"
                          />
                        </svg>
                      </div>
                      <div class="px-1">
                        <svg
                          width="15"
                          height="17"
                          viewBox="0 0 18 17"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.00018 13.695L3.71043 16.656L4.89168 10.71L0.44043 6.594L6.46068 5.88L9.00018 0.375L11.5397 5.88L17.5599 6.594L13.1087 10.71L14.2899 16.656L9.00018 13.695Z"
                            fill="#86a680"
                          />
                        </svg>
                      </div>
                      <div class="px-1">
                        <svg
                          width="15"
                          height="17"
                          viewBox="0 0 18 17"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.00018 13.695L3.71043 16.656L4.89168 10.71L0.44043 6.594L6.46068 5.88L9.00018 0.375L11.5397 5.88L17.5599 6.594L13.1087 10.71L14.2899 16.656L9.00018 13.695Z"
                            fill="#86a680"
                          />
                        </svg>
                      </div>
                      <div class="px-1">
                        <svg
                          width="15"
                          height="17"
                          viewBox="0 0 18 17"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.00018 13.695L3.71043 16.656L4.89168 10.71L0.44043 6.594L6.46068 5.88L9.00018 0.375L11.5397 5.88L17.5599 6.594L13.1087 10.71L14.2899 16.656L9.00018 13.695Z"
                            fill="#86a680"
                          />
                        </svg>
                      </div>
                      <div class="px-1">
                        <svg
                          width="15"
                          height="17"
                          viewBox="0 0 18 17"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.00018 13.695L3.71043 16.656L4.89168 10.71L0.44043 6.594L6.46068 5.88L9.00018 0.375L11.5397 5.88L17.5599 6.594L13.1087 10.71L14.2899 16.656L9.00018 13.695Z"
                            fill="#86a680"
                          />
                        </svg>
                      </div>
                    </div>
                    <div class="d-flex py-2 fw-bold fs-150 align-items-center">
                      <div>
                        <svg
                          width="18"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_462_1047)">
                            <path
                              d="M16.8337 15.9166L11 21.7503L5.16634 15.9166C4.01256 14.7628 3.22684 13.2928 2.90852 11.6925C2.5902 10.0921 2.75358 8.43333 3.37801 6.92585C4.00243 5.41836 5.05986 4.12989 6.41656 3.22338C7.77326 2.31686 9.36831 1.83301 11 1.83301C12.6317 1.83301 14.2267 2.31686 15.5834 3.22338C16.9402 4.12989 17.9976 5.41836 18.622 6.92585C19.2464 8.43333 19.4098 10.0921 19.0915 11.6925C18.7732 13.2928 17.9874 14.7628 16.8337 15.9166ZM11 11.9163C11.4862 11.9163 11.9525 11.7231 12.2964 11.3793C12.6402 11.0355 12.8333 10.5692 12.8333 10.0829C12.8333 9.59671 12.6402 9.13039 12.2964 8.78657C11.9525 8.44276 11.4862 8.2496 11 8.2496C10.5138 8.2496 10.0475 8.44276 9.70364 8.78657C9.35982 9.13039 9.16667 9.59671 9.16667 10.0829C9.16667 10.5692 9.35982 11.0355 9.70364 11.3793C10.0475 11.7231 10.5138 11.9163 11 11.9163Z"
                              fill="#949292"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_462_1047">
                              <rect width="22" height="22" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <div class="px-1">
                        <span
                          >Opposite National Defence College CBD, Abuja</span
                        >
                      </div>
                    </div>
                  </div>
                  <!-- book now button -->
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <!-- hotel price -->
                    <div class="d-flex align-items-center">
                      <div>
                        <span class="fw-bold">₦34,000</span>
                      </div>
                      <div><span class="fs-150">/per night</span></div>
                    </div>
                    <div
                      class="bggreen white fw-bold fs-170 rounded-2 py-2 px-2"
                    >
                      <span>BOOK NOW</span>
                    </div>
                  </div>
                </div>
              </div>
            </slide>
          </hooper>
        </div>
        <!-- the perfect place -->
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
import trend from '@/json/trendingflighthotel.json'
import { Hooper, Slide } from 'hooper'
import 'hooper/dist/hooper.css'
export default {
  components: {
    Hooper,
    Slide,
  },
  props: {
    responseData: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      mytrend: trend,
      flight: true,
      hotel: false,
      trendSettings: {
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
            itemsToShow: 1.5,
          },
        },
      },
    }
  },
  methods: {
    clickbutton(data) {
      if (data === 'flight') {
        this.flight = true
        this.hotel = false
      } else {
        this.flight = false
        this.hotel = true
      }
    },
      booking() {
      // Set loading to true to show loader
     this.isLoading = true;
      // Access form data from data properties

    try {


        //  console.log("Hero Component Successful response:", response);
         this.$router.push({ name: 'booking-enquiry' });
        // this.$router.push('/flight-searchflight');
          // Do something with the successful response
        this.isLoading = false;

      } catch (e) {
       console.error("Error:", e);
       this.isLoading = false;
        // Handle error
      }finally {
        // Set loading back to false after the request completes
        this.isLoading = false;
      }

    },
  },
}
</script>

<style scoped>
/* price of flight or hotel */
.priceDatePosition {
  position: absolute;
  /* top: 0rem; */
  bottom: 0rem;
  left: 0.4rem;
  right: 0rem;
  background-image: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.781) 0%,
    rgba(255, 255, 255, 0.9) 100%
  );
}
.hffocus:visited {
  background-color: red;
}
/* focus on hotels and flight button */
.hffocus:active,
:hover {
  background-color: rgba(255, 255, 255, 1);
}

/* max-width */
.header-width {
  max-width: 90% !important;
  margin: auto !important;
}
@media (max-width: 992px) {
  /* slider height */
  .hooperheight {
    height: 38vh !important;
  }
  .trend-head-text {
    font-size: 1.3rem !important;
  }
  /* select buttons */
  .select-button {
    width: 55% !important;
  }
  .notinmobile {
    display: none;
  }
}
@media (min-width: 992px) {
  .notindesktop {
    display: none !important;
  }
}
</style>
