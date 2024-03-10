<template>
  <div>
    <div class="row w-100 font my-4">
      <!-- filter -->
      <div class="col-lg-3 col-md-3 col-xl-3 col-xxl-3">
        <div class="font rounded-2 shadow-sm p-2">
          <!-- filter title -->
          <div class="d-flex justify-content-between">
            <div>
              <h6 class="fw-bold">Filter by</h6>
            </div>
            <div>
              <small class="blue fs-170 fw-bold">Clear All</small>
            </div>
          </div>
          <!-- enter hotel name -->
          <div class="pt-2">
            <!-- label -->
            <div class="py-1">
              <span class="fs-190 blue1 fw-bold">Enter Hotel Name</span>
            </div>
            <!-- input -->
            <div>
              <input
                type="text"
                placeholder="Search hotels here"
                class="w-100 p-2 rounded-1"
              />
            </div>
          </div>
          <!-- budget per  night -->
          <div class="pt-3">
            <!-- label -->
            <div><label for="" class="fs-190">Budget per night</label></div>
            <div>
              <input type="range" class="w-100" />
            </div>
          </div>
          <!-- star rating -->
          <div class="mt-3">
            <Star />
          </div>
          <!-- facilities -->
          <div class="mt-3">
            <!-- title -->
            <div class="my-2">
              <span class="fs-190 fw-bold">Facilities</span>
            </div>
            <div class="row">
              <div class="col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <div class="border position-relative w-100 p-1 rounded-2">
                  <div class="d-flex justify-content-around align-items-center">
                    <div class="checkpo m-1">
                      <input type="checkbox" />
                    </div>
                    <div>
                      <div class="d-flex justify-content-center">
                        <svg
                          width="20"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_458_882)">
                            <path
                              d="M12 18C10.4087 18 8.88258 17.3679 7.75736 16.2426C6.63214 15.1174 6 13.5913 6 12C6 10.4087 6.63214 8.88258 7.75736 7.75736C8.88258 6.63214 10.4087 6 12 6C13.5913 6 15.1174 6.63214 16.2426 7.75736C17.3679 8.88258 18 10.4087 18 12C18 13.5913 17.3679 15.1174 16.2426 16.2426C15.1174 17.3679 13.5913 18 12 18ZM12 16C13.0609 16 14.0783 15.5786 14.8284 14.8284C15.5786 14.0783 16 13.0609 16 12C16 10.9391 15.5786 9.92172 14.8284 9.17157C14.0783 8.42143 13.0609 8 12 8C10.9391 8 9.92172 8.42143 9.17157 9.17157C8.42143 9.92172 8 10.9391 8 12C8 13.0609 8.42143 14.0783 9.17157 14.8284C9.92172 15.5786 10.9391 16 12 16ZM11 1H13V4H11V1ZM11 20H13V23H11V20ZM3.515 4.929L4.929 3.515L7.05 5.636L5.636 7.05L3.515 4.93V4.929ZM16.95 18.364L18.364 16.95L20.485 19.071L19.071 20.485L16.95 18.364ZM19.071 3.514L20.485 4.929L18.364 7.05L16.95 5.636L19.071 3.515V3.514ZM5.636 16.95L7.05 18.364L4.929 20.485L3.515 19.071L5.636 16.95ZM23 11V13H20V11H23ZM4 11V13H1V11H4Z"
                              fill="#283673"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_458_882">
                              <rect width="24" height="24" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <div>
                        <!-- facility name -->
                        <span class="fs-150 fw-bold">Wifi &#38; Cable TV</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <div class="border w-100 position-relative p-1 rounded-2">
                  <div class="d-flex justify-content-around align-items-center">
                    <div class="checkpo m-1">
                      <input type="checkbox" />
                    </div>
                    <div>
                      <div class="d-flex justify-content-center">
                        <svg
                          width="20"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_458_882)">
                            <path
                              d="M12 18C10.4087 18 8.88258 17.3679 7.75736 16.2426C6.63214 15.1174 6 13.5913 6 12C6 10.4087 6.63214 8.88258 7.75736 7.75736C8.88258 6.63214 10.4087 6 12 6C13.5913 6 15.1174 6.63214 16.2426 7.75736C17.3679 8.88258 18 10.4087 18 12C18 13.5913 17.3679 15.1174 16.2426 16.2426C15.1174 17.3679 13.5913 18 12 18ZM12 16C13.0609 16 14.0783 15.5786 14.8284 14.8284C15.5786 14.0783 16 13.0609 16 12C16 10.9391 15.5786 9.92172 14.8284 9.17157C14.0783 8.42143 13.0609 8 12 8C10.9391 8 9.92172 8.42143 9.17157 9.17157C8.42143 9.92172 8 10.9391 8 12C8 13.0609 8.42143 14.0783 9.17157 14.8284C9.92172 15.5786 10.9391 16 12 16ZM11 1H13V4H11V1ZM11 20H13V23H11V20ZM3.515 4.929L4.929 3.515L7.05 5.636L5.636 7.05L3.515 4.93V4.929ZM16.95 18.364L18.364 16.95L20.485 19.071L19.071 20.485L16.95 18.364ZM19.071 3.514L20.485 4.929L18.364 7.05L16.95 5.636L19.071 3.515V3.514ZM5.636 16.95L7.05 18.364L4.929 20.485L3.515 19.071L5.636 16.95ZM23 11V13H20V11H23ZM4 11V13H1V11H4Z"
                              fill="#283673"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_458_882">
                              <rect width="24" height="24" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <div>
                        <!-- facility name -->
                        <span class="fs-150 fw-bold">Wifi &#38; Cable TV</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- available rooms -->
      <div class="col-lg-9 shadow-sm rounded-2 col-md-9 col-xl-9 col-xxl-9">
        <div class="">
          <!-- title and dropdown -->
          <div class="py-2">
            <h6 class="fw-bold">Available Rooms</h6>
          </div>
          <div class="align-items-center d-flex justify-content-center">
            <div >
              <div class="w-70">
                <span class="fs-200"
                  >Prices displayed include taxes and may change based on
                  availability. You can review any additional fees before
                  checkout. Prices are not final until you complete your
                  purchase.</span
                >
              </div>
            </div>
            <div class="bgwhite w-30 border rounded-2 shadow-sm ">
              <div>
                <label for="" class="fs-150 px-2">Sort by</label>
              </div>
              <div>
                <select name="" id="" class="border-0 px-2">
                  <option value="">Price (Lowest)</option>
                </select>
              </div>

            </div>
            <div class=""></div>
          </div>
          <!-- available rooms -->
          <div class="rounded-2 bgwhite my-2 shadow-sm w-100 m-auto row">
            <div class="col-lg-3 py-2 col-md-3 col-xl-3 col-xxl-3">
              <div class="list-height">
                <hooper group="group1 " style="height: 150px">
                  <slide class=""
                    ><img
                      src="@/assets/images/Rectangle 300.png"
                      class="rounded-2 sliderDispalyHeight"
                      alt=""
                  /></slide>
                  <slide class="">
                    <img
                      src="@/assets/images/Rectangle 302.png"
                      alt=""
                      class="rounded-2 sliderDispalyHeight"
                    />
                  </slide>
                  <slide class="">
                    <img
                      src="@/assets/images/Rectangle 301.png"
                      alt=""
                      class="rounded-2 sliderDispalyHeight"
                  /></slide>
                </hooper>

                <hooper
                  group="group1"
                  style="height: 50px"
                  :itemsToShow="3"
                  :centerMode="true"
                >
                  <slide style="width: 50px; height: 50px" class="m-1">
                    <img
                      src="@/assets/images/Rectangle 300.png"
                      alt=""
                      class="rounded-2"
                    />
                  </slide>
                  <slide style="width: 50px; height: 50px" class="m-1">
                    <img
                      src="@/assets/images/Rectangle 302.png"
                      alt=""
                      class="rounded-2"
                    />
                  </slide>
                  <slide style="width: 50px; height: 50px" class="m-1">
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
            <div
              class="col-lg-5 position-relative py-2 col-md-5 col-xl-5 col-xxl-5"
            >
              <!-- border -->
              <div class="border-end border-po h-75">
                <p></p>
              </div>
              <div>
                <!-- title -->
                <div>
                  <h5 class="fw-bold blue">Sumed Suites</h5>
                </div>
                <!-- star -->
                <div class="d-flex py-2 align-items-center">
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
                <div class="d-flex py-2 align-items-center">
                  <!-- icon -->
                  <div>
                    <svg
                      width="20"
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
                <!-- state -->
                <div class="pocountry py-2">
                  <span class="fw-bold fs-190">Abuja</span>
                </div>
              </div>
            </div>
            <div
              class="col-lg-4 position-relative py-2 col-md-4 col-xl-4 col-xxl-4"
            >
              <div>
                <!-- price -->
                <div>
                  <h5 class="blue fw-bold">₦ 230,230</h5>
                </div>
                <!-- description -->
                <div class="py-2 d-flex align-items-center">
                  <div>
                    <span class="fs-200 px-2">per night/</span>
                  </div>
                  <div>
                    <span class="fs-200">per room</span>
                  </div>
                </div>
                <!-- book now button -->
                <div class="d-flex pocountry align-items-center">
                  <div>
                    <div
                      class="bggreen white fw-bold fs-200 py-2 px-3 rounded-2"
                    >
                      <span>Book Now</span>
                    </div>
                  </div>
                  <div class="mx-2">
                    <div
                      class="bord-outline green fs-200 fw-bold py-2 px-3 rounded-2"
                    >
                      <span>View Details</span>
                    </div>
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
import { Hooper, Slide } from 'hooper'
import 'hooper/dist/hooper.css'
import Star from '@/components/starRating/star.vue'
export default {
  components: {
    Hooper,
    Slide,
    Star,
  },
}
</script>

<style scoped>
/* height of slider */
.list-height {
  height: 200px !important;
}
.sliderDispalyHeight {
  height: 150px !important;
}
/* country position */
.pocountry {
  position: absolute;
  bottom: 2rem;
}
/* border dermacation */
.border-po {
  position: absolute;
  right: 0;
  /* top: 0rem; */
  bottom: 2rem;
}
/* view details border */
.bord-outline {
  border: 1px solid var(--clr-green);
}
/* checkbox position */
.checkpo {
  position: absolute;
  top: 0;
  left: 0;
}
input[type='range'] {
  height: 5px;
  /* -webkit-appearance: none; */
  outline: var(--clr-green);
}
</style>
