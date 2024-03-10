<template>
  <div>
    <div class="font">
      <div class="row py-2">
        <div class="col-lg-6 col-md-6 col-xl-6 col-xxl-6">
          <div>
            <hooper group="group1 "  style="height:320px">
              <slide class=""
                ><img
                  src="@/assets/images/Rectangle 300.png"
                  class="rounded-2 w-100 "
                  alt=""
              /></slide>
              <slide class="">
                <img
                  src="@/assets/images/Rectangle 302.png"
                  alt=""
                  class="rounded-2 w-100 "
                />
              </slide>
              <slide class="">
                <img
                  src="@/assets/images/Rectangle 301.png"
                  alt=""
                  class="rounded-2 w-100 "
              /></slide>
            </hooper>
            <hooper group="group1" :itemsToShow="3" >
              <slide class="m-1">
                <img
                  src="@/assets/images/Rectangle 300.png"
                  alt=""
                  class="rounded-2"
                 
                />
              </slide>
              <slide class="m-1">
                <img
                  src="@/assets/images/Rectangle 302.png"
                  alt=""
                  class="rounded-2"
                 
                />
              </slide>
              <slide class="m-1">
                <img
                  src="@/assets/images/Rectangle 301.png"
                  alt=""
                  class="rounded-2"
                 
                />
              </slide>
              <hooper-navigation slot="hooper-addons"></hooper-navigation>
              <hooper-pagination slot="hooper-addons"></hooper-pagination>
            </hooper>
          </div>
        </div>
        <div class="col-lg-6 col-md-6 col-xl-6 col-xxl-6">
          <div class="pt-2">
            <!-- hotel name -->
            <div>
              <span class="text-start fw-bold blue fontbold fs-400"
                >Sumed Suites</span
              >
            </div>
            <!-- rating and location -->
            <div class="d-flex align-items-center justify-content-between">
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
                <!-- rating number -->
                <div><span class="fs-190 px-1 fw-bold">5</span></div>
              </div>
              <!-- location of hotel -->
              <div class="d-flex px-3 align-items-center">
                <!-- icon -->
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
                <!-- address -->
                <div class="w-100 px-2">
                  <span class="w-100 fs-200"
                    >Comercial Layout by Fidelity bank Plc, off 1st Avenue,
                    Gwarinpa</span
                  >
                </div>
              </div>
            </div>
          </div>
          <!-- about the hotel -->
          <div class="pt-3">
            <!-- about -->
            <div>
              <span class="fw-bold">About the Hotel</span>
            </div>
            <div>
              <span
                >Comercial Layout by Fidelity bank Plc, off 1st Avenue,
                Gwarinpa</span
              >
            </div>
          </div>
          <!-- room details -->
          <div class="pt-3">
            <div class="py-2">
              <span class="fw-bold">Room Details</span>
            </div>
            <div class="d-flex align-items-center flex-wrap">
              <!-- details-->
              <div class="d-flex align-items-center">
                <div>
                  <svg
                    width="18"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_500_37)">
                      <path
                        d="M9.99984 18.3337C5.39734 18.3337 1.6665 14.6028 1.6665 10.0003C1.6665 5.39783 5.39734 1.66699 9.99984 1.66699C14.6023 1.66699 18.3332 5.39783 18.3332 10.0003C18.3332 14.6028 14.6023 18.3337 9.99984 18.3337ZM9.169 13.3337L15.0607 7.44116L13.8823 6.26283L9.169 10.977L6.8115 8.61949L5.63317 9.79782L9.169 13.3337Z"
                        fill="#B67C1C"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_500_37">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div>
                  <span class="fs-200 px-2">Flat with Kitchen </span>
                </div>
              </div>
              <div class="d-flex align-items-center">
                <div>
                  <svg
                    width="18"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_500_37)">
                      <path
                        d="M9.99984 18.3337C5.39734 18.3337 1.6665 14.6028 1.6665 10.0003C1.6665 5.39783 5.39734 1.66699 9.99984 1.66699C14.6023 1.66699 18.3332 5.39783 18.3332 10.0003C18.3332 14.6028 14.6023 18.3337 9.99984 18.3337ZM9.169 13.3337L15.0607 7.44116L13.8823 6.26283L9.169 10.977L6.8115 8.61949L5.63317 9.79782L9.169 13.3337Z"
                        fill="#B67C1C"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_500_37">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div>
                  <span class="fs-200 px-2">Flat with Kitchen </span>
                </div>
              </div>
              <div class="d-flex align-items-center">
                <div>
                  <svg
                    width="18"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_500_37)">
                      <path
                        d="M9.99984 18.3337C5.39734 18.3337 1.6665 14.6028 1.6665 10.0003C1.6665 5.39783 5.39734 1.66699 9.99984 1.66699C14.6023 1.66699 18.3332 5.39783 18.3332 10.0003C18.3332 14.6028 14.6023 18.3337 9.99984 18.3337ZM9.169 13.3337L15.0607 7.44116L13.8823 6.26283L9.169 10.977L6.8115 8.61949L5.63317 9.79782L9.169 13.3337Z"
                        fill="#B67C1C"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_500_37">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div>
                  <span class="fs-200 px-2">Flat with Kitchen </span>
                </div>
              </div>
            </div>
          </div>
          <!-- price of  hotel -->
          <div class="mt-4">
            <div class="rounded-3 p-2 border">
              <!-- price slash and discount -->
              <div class="d-flex align-items-center py-2">
                <div>
                  <del>₦80,000</del>
                </div>
                <div class="px-2">
                  <span class="fw-bold fontbold"
                    >₦245,000 <span class="fs-200">/ per night</span></span
                  >
                </div>
              </div>
              <!-- check in and checkout calender -->
              <div class="bggreen4 rounded-2">
                <div class="d-flex align-items-center justify-content-around">
                  <div class="rounded-2 ms-2 w-70 p-1">
                    <!-- return date -->
                    <div class="d-flex align-items-center">
                      <!-- return date -->
                      <div>
                        <small class="fs-170">Return</small>
                        <date-picker
                          input-class="my-picker-class bggreen4 fw-bold fs-200"
                          placeholder="MM/DD/YYYY"
                          format="dsu,MMM,yyyy"
                          v-model="date_today"
                          calendar-class="border-0 calenderpo  rounded-2 shadow-lg fs-170 fw-bold"
                        />
                      </div>
                      <!-- calender icon -->
                      <div>
                        <svg
                          width="20"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6.75 3V5.25M17.25 3V5.25M3 18.75V7.5C3 6.90326 3.23705 6.33097 3.65901 5.90901C4.08097 5.48705 4.65326 5.25 5.25 5.25H18.75C19.3467 5.25 19.919 5.48705 20.341 5.90901C20.7629 6.33097 21 6.90326 21 7.5V18.75M3 18.75C3 19.3467 3.23705 19.919 3.65901 20.341C4.08097 20.7629 4.65326 21 5.25 21H18.75C19.3467 21 19.919 20.7629 20.341 20.341C20.7629 19.919 21 19.3467 21 18.75M3 18.75V11.25C3 10.6533 3.23705 10.081 3.65901 9.65901C4.08097 9.23705 4.65326 9 5.25 9H18.75C19.3467 9 19.919 9.23705 20.341 9.65901C20.7629 10.081 21 10.6533 21 11.25V18.75M12 12.75H12.008V12.758H12V12.75ZM12 15H12.008V15.008H12V15ZM12 17.25H12.008V17.258H12V17.25ZM9.75 15H9.758V15.008H9.75V15ZM9.75 17.25H9.758V17.258H9.75V17.25ZM7.5 15H7.508V15.008H7.5V15ZM7.5 17.25H7.508V17.258H7.5V17.25ZM14.25 12.75H14.258V12.758H14.25V12.75ZM14.25 15H14.258V15.008H14.25V15ZM14.25 17.25H14.258V17.258H14.25V17.25ZM16.5 12.75H16.508V12.758H16.5V12.75ZM16.5 15H16.508V15.008H16.5V15Z"
                            stroke="#283673"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div class="rounded-2 w-70 ms-2 p-1">
                    <!-- return date -->
                    <div class="d-flex align-items-center">
                      <!-- return date -->
                      <div>
                        <small class="fs-170">Return</small>
                        <date-picker
                          input-class="my-picker-class bggreen4 fw-bold fs-200"
                          placeholder="MM/DD/YYYY"
                          format="dsu,MMM,yyyy"
                          v-model="date_today"
                          calendar-class="border-0 calenderpo rounded-2 shadow-lg fs-170 fw-bold"
                        />
                      </div>
                      <!-- calender icon -->
                      <div>
                        <svg
                          width="20"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6.75 3V5.25M17.25 3V5.25M3 18.75V7.5C3 6.90326 3.23705 6.33097 3.65901 5.90901C4.08097 5.48705 4.65326 5.25 5.25 5.25H18.75C19.3467 5.25 19.919 5.48705 20.341 5.90901C20.7629 6.33097 21 6.90326 21 7.5V18.75M3 18.75C3 19.3467 3.23705 19.919 3.65901 20.341C4.08097 20.7629 4.65326 21 5.25 21H18.75C19.3467 21 19.919 20.7629 20.341 20.341C20.7629 19.919 21 19.3467 21 18.75M3 18.75V11.25C3 10.6533 3.23705 10.081 3.65901 9.65901C4.08097 9.23705 4.65326 9 5.25 9H18.75C19.3467 9 19.919 9.23705 20.341 9.65901C20.7629 10.081 21 10.6533 21 11.25V18.75M12 12.75H12.008V12.758H12V12.75ZM12 15H12.008V15.008H12V15ZM12 17.25H12.008V17.258H12V17.25ZM9.75 15H9.758V15.008H9.75V15ZM9.75 17.25H9.758V17.258H9.75V17.25ZM7.5 15H7.508V15.008H7.5V15ZM7.5 17.25H7.508V17.258H7.5V17.25ZM14.25 12.75H14.258V12.758H14.25V12.75ZM14.25 15H14.258V15.008H14.25V15ZM14.25 17.25H14.258V17.258H14.25V17.25ZM16.5 12.75H16.508V12.758H16.5V12.75ZM16.5 15H16.508V15.008H16.5V15Z"
                            stroke="#283673"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- book now button -->
              <div class="mt-2">
                <div class="rounded-2 p-2 w-20 text-center bggreen white">
                  <span>Book Now</span>
                </div>
              </div>
            </div>
          </div>
          <!-- rate hotel -->
          <div>
            <div class="rounded-3 border mt-4 p-3">
              <div class="d-flex align-items-center justify-content-between">
                <!-- rate number -->
                <div>
                  <div class="d-flex align-items-center">
                    <div>
                      <h5 class="fw-bold fontbold blue">4.8</h5>
                    </div>
                    <div>
                      <small class="">Reviews</small>
                    </div>
                  </div>
                </div>
                <div class="green border rounded-pill fs-200 fw-bold px-3 py-1">
                  <span>Rate now</span>
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
import { Hooper, Slide } from 'hooper'
import 'hooper/dist/hooper.css'
export default {
  components: {
    Hooper,
    Slide,
  },
}
</script>

<style scoped>
.sliderDispalyHeight {
  height: 300px !important;
}</style>
