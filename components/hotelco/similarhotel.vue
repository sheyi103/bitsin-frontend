<template>
  <div>
    <div class="font ">
      <div class="my-3">
        <!-- title -->
        <div class="py-3">
            <span class="fw-bold fontbold fs-400">Similar Hotel</span>
        </div>
        <div class="row">
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
                  <div class="d-flex  align-items-center">
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
                <div
                  class="d-flex  justify-content-between align-items-center"
                >
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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import trend from '@/json/trendingflighthotel.json'
export default {
  data() {
    return {
      mytrend: trend,
    }
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
</style>
