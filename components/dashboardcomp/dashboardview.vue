<template>
  <div>
    <div class="font pt-5 px-1">
      <!-- welcome text -->
      <div>
        <div class="d-flex py-2 align-items-center">
          <div>
            <span class="fw-bold">HI ,</span>
          </div>
          <div>
            <svg
              width="28"
              height="24"
              viewBox="0 0 28 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.34281 21.117C6.22814 21.117 3.08077 18.4506 3.08077 15.8119C3.08077 15.4471 2.76541 15.1522 2.33481 15.1522C1.90421 15.1522 1.52344 15.4471 1.52344 15.8119C1.52344 19.7699 4.67081 22.4363 9.34281 22.4363C9.77341 22.4363 10.1215 22.1137 10.1215 21.7489C10.1215 21.3841 9.77341 21.117 9.34281 21.117Z"
                fill="#5DADEC"
              />
              <path
                d="M5.45067 22.4086C3.11467 22.4086 1.55733 21.0892 1.55733 19.1102C1.55733 18.7454 1.20927 18.4505 0.778667 18.4505C0.348064 18.4505 0 18.7454 0 19.1102C0 21.7489 2.336 23.7279 5.45067 23.7279C5.88127 23.7279 6.22934 23.433 6.22934 23.0682C6.22934 22.7034 5.88127 22.4086 5.45067 22.4086ZM18.688 1.29907C18.2582 1.29907 17.9093 1.59461 17.9093 1.95874C17.9093 2.32288 18.2582 2.61842 18.688 2.61842C21.8027 2.61842 24.9173 4.98598 24.9173 7.89579C24.9173 8.25993 25.2662 8.55546 25.696 8.55546C26.1258 8.55546 26.4747 8.25993 26.4747 7.89579C26.4747 4.25836 23.36 1.29907 18.688 1.29907Z"
                fill="#5DADEC"
              />
              <path
                d="M22.5834 0.00744629C22.1535 0.00744629 21.8047 0.275273 21.8047 0.639412C21.8047 1.00355 22.1535 1.32679 22.5834 1.32679C24.9194 1.32679 26.444 2.79456 26.444 4.59744C26.444 4.96158 26.8248 5.25712 27.2554 5.25712C27.686 5.25712 28.0013 4.96158 28.0013 4.59744C28.0013 2.06628 25.698 0.00744629 22.5834 0.00744629Z"
                fill="#5DADEC"
              />
            </svg>
          </div>
        </div>
        <!-- user name -->
        <div>
          <div class="py-2">
            <h4>
              <span class="blue">Welcome,</span>
              <span class="fontbold blue">{{ $auth.user.first_name }}!</span>
            </h4>
          </div>
        </div>
      </div>
      <!-- view flights booked , hotels booked -->
      <div class="w-100">
        <div class="row pt-4">
          <!-- flight booked -->
          <div class="col-lg-4 col-md-4 col-xxl-4 col-xl-4">
            <div class="rounded-2 p-2 shadow-sm bgcard">
              <!-- number of flight booked -->
              <div class="py-2">
                <span class="fontbold fs-550 text-start white">0</span>
              </div>
              <!-- view flight -->
              <div>
                <div class="d-flex white align-items-center justify-content-between">
                  <div>
                    <span>Flight Booked</span>
                  </div>
                  <!-- button -->
                  <div class="rounded-3 p-2 bgview">
                    <span class="fs-200">View Flight</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- flight booked -->
          <div class="col-lg-4 col-md-4 col-xxl-4 col-xl-4">
            <div class="rounded-2 p-2 shadow-sm bgcard">
              <!-- number of flight booked -->
              <div class="py-2">
                <span class="fontbold fs-550 text-start white">0</span>
              </div>
              <!-- view flight -->
              <div>
                <div class="d-flex white align-items-center justify-content-between">
                  <div>
                    <span>Hotel Booking</span>
                  </div>
                  <!-- button -->
                  <div class="rounded-3 p-2 bgview">
                    <span class="fs-200">View Booking</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- flight booked -->
          <div class="col-lg-4 col-md-4 col-xxl-4 col-xl-4">
            <div class="rounded-2 p-2 shadow-sm bgcard">
              <!-- number of flight booked -->
              <div class="py-2">
                <span class="fontbold fs-550 text-start white">0</span>
              </div>
              <!-- view flight -->
              <div>
                <div class="d-flex white align-items-center justify-content-between">
                  <div>
                    <span>Visa Application</span>
                  </div>
                  <!-- button -->
                  <div class="rounded-3 p-2 bgview">
                    <span class="fs-200">View</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- book flight and hotel from here too -->
      <div>
        <div class="rounded-3 mt-5 shadow-sm">
          <div class="bggrey4 rounded-3">
            <div class="d-flex py-2 justify-content-between">
              <!-- flight and hotels buttons -->
              <div class="d-flex align-items-center p-2">
                <!-- flight -->
                <div @click="switchBtwFLightAndHotel('flight')">
                  <div class="circle-icon mx-4">
                    <svg
                      class="plane-svg"
                      width="22"
                      height="30"
                      viewBox="0 0 29 30"
                      fill="red"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        class="fly"
                        d="M17 10.4205L29 18V21L17 17.211V25.251L21.5 27.75V30L14.75 28.5L8 30V27.75L12.5 25.2495V17.2095L0.5 21V18L12.5 10.4205V2.25C12.5 1.65326 12.7371 1.08097 13.159 0.65901C13.581 0.237053 14.1533 0 14.75 0C15.3467 0 15.919 0.237053 16.341 0.65901C16.7629 1.08097 17 1.65326 17 2.25V10.4205Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <div class="text-center fw-bold fs-170 pt-2">
                    <span>Flight</span>
                  </div>
                </div>
                <!-- hotels -->
                <div @click="switchBtwFLightAndHotel('hotel')">
                  <div class="circle-icon mx-2">
                    <svg
                      class="planeandHotel-svg"
                      width="22"
                      height="28"
                      viewBox="0 0 30 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M30 27.5H0V24.5H1.5V2C1.5 1.60218 1.65804 1.22064 1.93934 0.93934C2.22064 0.658035 2.60218 0.5 3 0.5H24C24.3978 0.5 24.7794 0.658035 25.0607 0.93934C25.342 1.22064 25.5 1.60218 25.5 2V9.5H28.5V24.5H30V27.5ZM22.5 24.5H25.5V12.5H16.5V24.5H19.5V15.5H22.5V24.5ZM22.5 9.5V3.5H4.5V24.5H13.5V9.5H22.5ZM7.5 12.5H10.5V15.5H7.5V12.5ZM7.5 18.5H10.5V21.5H7.5V18.5ZM7.5 6.5H10.5V9.5H7.5V6.5Z"
                        fill="#283673"
                      />
                    </svg>
                  </div>
                  <div class="text-center fw-bold fs-170 pt-2">
                    <span>Hotels</span>
                  </div>
                </div>
              </div>
              <!-- passenger, trip, economy or business class input space -->
              <div class="d-flex align-items-center w-65 m-2">
                <!-- passenger -->
                <div
                  class="aselect mx-1 w-100"
                  :data-value="Travelers"
                  :data-list="list"
                  role="button"
                >
                  <div
                    class="selector rounded-2 p-2 d-flex align-items-center justify-content-between"
                    @click="travelersdrop()"
                  >
                    <!-- user icon -->
                    <div>
                      <svg
                        class="mob-user-icon"
                        width="14"
                        height="19"
                        viewBox="0 0 14 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.333252 18.3334C0.333252 16.5653 1.03563 14.8696 2.28587 13.6193C3.53612 12.3691 5.23181 11.6667 6.99992 11.6667C8.76803 11.6667 10.4637 12.3691 11.714 13.6193C12.9642 14.8696 13.6666 16.5653 13.6666 18.3334H11.9999C11.9999 17.0073 11.4731 15.7355 10.5355 14.7978C9.59777 13.8602 8.326 13.3334 6.99992 13.3334C5.67384 13.3334 4.40207 13.8602 3.46438 14.7978C2.5267 15.7355 1.99992 17.0073 1.99992 18.3334H0.333252ZM6.99992 10.8334C4.23742 10.8334 1.99992 8.59587 1.99992 5.83337C1.99992 3.07087 4.23742 0.833374 6.99992 0.833374C9.76242 0.833374 11.9999 3.07087 11.9999 5.83337C11.9999 8.59587 9.76242 10.8334 6.99992 10.8334ZM6.99992 9.16671C8.84159 9.16671 10.3333 7.67504 10.3333 5.83337C10.3333 3.99171 8.84159 2.50004 6.99992 2.50004C5.15825 2.50004 3.66659 3.99171 3.66659 5.83337C3.66659 7.67504 5.15825 9.16671 6.99992 9.16671Z"
                          fill="#949292"
                        />
                      </svg>
                    </div>
                    <div class="label fs-200">
                      <span>{{ Travelers }}</span>
                    </div>
                    <div class="arrow" :class="{ expanded: travelers }"></div>
                    <div class="zed-dropdown" :class="{ hidden: !travelers, travelers }">
                      <ul class="uno rounded-2 border-0 shadow-sm px-3">
                        <h5 class="fs-250 py-3 blue fw-bold">Passengers</h5>

                        <li class="py-1" @click="selectraveler(item)">
                          <div class="d-flex justify-content-between align-items-center">
                            <!-- type of age group -->
                            <div>
                              <h5 class="fs-200 fw-bold">Adults</h5>
                              <span class="fs-150">below 2 yrs</span>
                            </div>
                            <!-- decrement -->
                            <div
                              class="incredecrebtn d-flex align-items-center justify-content-center"
                            >
                              <svg
                                width="16"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g clip-path="url(#clip0_188_46)">
                                  <path
                                    d="M4.1665 9.16663H15.8332V10.8333H4.1665V9.16663Z"
                                    fill="#33334C"
                                  />
                                </g>
                                <defs>
                                  <clipPath id="clip0_188_46">
                                    <rect width="20" height="20" fill="white" />
                                  </clipPath>
                                </defs>
                              </svg>
                            </div>
                            <!-- result -->
                            <div>
                              <span class="fw-bold">0</span>
                            </div>
                            <!-- increment -->
                            <div
                              class="incredecrebtn d-flex align-items-center justify-content-center"
                            >
                              <svg
                                width="16"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g clip-path="url(#clip0_188_50)">
                                  <path
                                    d="M9.1665 9.16663V4.16663H10.8332V9.16663H15.8332V10.8333H10.8332V15.8333H9.1665V10.8333H4.1665V9.16663H9.1665Z"
                                    fill="#33334C"
                                  />
                                </g>
                                <defs>
                                  <clipPath id="clip0_188_50">
                                    <rect width="20" height="20" fill="white" />
                                  </clipPath>
                                </defs>
                              </svg>
                            </div>
                          </div>
                        </li>
                        <li class="py-1" @click="selectraveler(item)">
                          <div class="d-flex justify-content-between align-items-center">
                            <!-- type of age group -->
                            <div>
                              <h5 class="fs-200 fw-bold">Children</h5>
                              <span class="fs-150">below 2 yrs</span>
                            </div>
                            <!-- decrement -->
                            <div
                              class="incredecrebtn d-flex align-items-center justify-content-center"
                            >
                              <svg
                                width="16"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g clip-path="url(#clip0_188_46)">
                                  <path
                                    d="M4.1665 9.16663H15.8332V10.8333H4.1665V9.16663Z"
                                    fill="#33334C"
                                  />
                                </g>
                                <defs>
                                  <clipPath id="clip0_188_46">
                                    <rect width="20" height="20" fill="white" />
                                  </clipPath>
                                </defs>
                              </svg>
                            </div>
                            <!-- result -->
                            <div>
                              <span class="fw-bold">0</span>
                            </div>
                            <!-- increment -->
                            <div
                              class="incredecrebtn d-flex align-items-center justify-content-center"
                            >
                              <svg
                                width="16"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g clip-path="url(#clip0_188_50)">
                                  <path
                                    d="M9.1665 9.16663V4.16663H10.8332V9.16663H15.8332V10.8333H10.8332V15.8333H9.1665V10.8333H4.1665V9.16663H9.1665Z"
                                    fill="#33334C"
                                  />
                                </g>
                                <defs>
                                  <clipPath id="clip0_188_50">
                                    <rect width="20" height="20" fill="white" />
                                  </clipPath>
                                </defs>
                              </svg>
                            </div>
                          </div>
                        </li>
                        <li class="py-1" @click="selectraveler(item)">
                          <div class="d-flex justify-content-between align-items-center">
                            <!-- type of age group -->
                            <div>
                              <h5 class="fs-200 fw-bold">Infants</h5>
                              <span class="fs-150">below 2 yrs</span>
                            </div>
                            <!-- decrement -->
                            <div
                              class="incredecrebtn d-flex align-items-center justify-content-center"
                            >
                              <svg
                                width="16"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g clip-path="url(#clip0_188_46)">
                                  <path
                                    d="M4.1665 9.16663H15.8332V10.8333H4.1665V9.16663Z"
                                    fill="#33334C"
                                  />
                                </g>
                                <defs>
                                  <clipPath id="clip0_188_46">
                                    <rect width="20" height="20" fill="white" />
                                  </clipPath>
                                </defs>
                              </svg>
                            </div>
                            <!-- result -->
                            <div>
                              <span class="fw-bold">0</span>
                            </div>
                            <!-- increment -->
                            <div
                              class="incredecrebtn d-flex align-items-center justify-content-center"
                            >
                              <svg
                                width="16"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g clip-path="url(#clip0_188_50)">
                                  <path
                                    d="M9.1665 9.16663V4.16663H10.8332V9.16663H15.8332V10.8333H10.8332V15.8333H9.1665V10.8333H4.1665V9.16663H9.1665Z"
                                    fill="#33334C"
                                  />
                                </g>
                                <defs>
                                  <clipPath id="clip0_188_50">
                                    <rect width="20" height="20" fill="white" />
                                  </clipPath>
                                </defs>
                              </svg>
                            </div>
                          </div>
                        </li>
                        <li
                          class="my-2 text-center bggreen w-100 fs-200 rounded-2 p-2 white"
                        >
                          done
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <!-- trip -->
                <div
                  class="aselect mx-1"
                  :data-value="value"
                  :data-list="list"
                  role="button"
                >
                  <div
                    class="selector rounded-2 p-2 position-relative d-flex align-items-center justify-content-between"
                    @click="trip()"
                  >
                    <!-- user icon -->
                    <div>
                      <svg
                        width="16"
                        height="18"
                        viewBox="0 0 16 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.3333 12.3333V8.99996L15.5 13.1666L11.3333 17.3333V14H1.33333V12.3333H11.3333ZM4.66667 0.666626V3.99913L14.6667 3.99996V5.66663H4.66667V8.99996L0.5 4.83329L4.66667 0.666626Z"
                          fill="#949292"
                        />
                      </svg>
                    </div>
                    <div class="label fs-200">
                      <span>{{ value }}</span>
                    </div>
                    <div class="arrow" :class="{ expanded: visible }"></div>
                    <div class="bgblack" :class="{ hidden: !visible, visible }">
                      <ul class="uno trippo rounded-2 border-0 shadow-sm">
                        <li class="list fs-200" @click="select(item)">One Way</li>
                        <li class="list fs-200" @click="select(item)">Round Trip</li>
                        <li class="list fs-200" @click="select(item)">Multi-city</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <!-- type of flight -->
                <div
                  class="aselect mx-1"
                  :data-value="value"
                  :data-list="list"
                  role="button"
                >
                  <div
                    class="selector rounded-2 p-2 position-relative d-flex align-items-center justify-content-between"
                    @click="flightT()"
                  >
                    <div class="px-2">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 19 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.25398 8.47001L7.88398 0.0880127L9.81699 0.606013L12.627 9.64101L17.888 11.051C18.0783 11.102 18.2567 11.1899 18.413 11.3098C18.5693 11.4297 18.7004 11.5792 18.7989 11.7498C18.8975 11.9204 18.9614 12.1087 18.9872 12.304C19.0129 12.4993 18.9999 12.6977 18.949 12.888C18.898 13.0783 18.8101 13.2567 18.6902 13.413C18.5703 13.5693 18.4208 13.7004 18.2502 13.799C18.0796 13.8975 17.8913 13.9615 17.696 13.9872C17.5007 14.0129 17.3023 14 17.112 13.949L2.13998 9.93701L2.91598 7.03901L3.15798 7.10401L4.07198 10.454L1.44498 9.75101C1.22972 9.69309 1.03998 9.56489 0.905908 9.38679C0.771836 9.20869 0.701117 8.9909 0.704985 8.76801L0.794985 3.36501L2.24398 3.75301L3.15798 7.10401L8.25398 8.47001ZM1.99998 17H18V19H1.99998V17Z"
                          fill="#949292"
                        />
                      </svg>
                    </div>
                    <div class="label fs-200">
                      <span>{{ value }}</span>
                    </div>
                    <div class="arrow" :class="{ expanded: visibletype }"></div>
                    <div :class="{ hidden: !visibletype, visibletype }">
                      <ul class="uno trippo rounded-2 fs-200 border-0 shadow-sm">
                        <li class="list" @click="select(item)">Economy</li>
                        <li class="list" @click="select(item)">Premium</li>
                        <li class="list" @click="select(item)">Business</li>
                        <li class="list" @click="select(item)">First Class</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="d-flex align-items-center my-2 py-2 justify-content-between">
              <!-- trip from -->
              <div
                class="bgwhite m-2 w-90 border d-flex align-items-center spacemargForTo p-1 rounded-2"
              >
                <div class="px-2">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 21 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.47806 7.63199L4.96806 0.559992L6.89906 0.0419922L13.8501 6.46199L19.1121 5.05199C19.4964 4.94909 19.9058 5.00306 20.2503 5.20204C20.5948 5.40101 20.8462 5.72869 20.9491 6.11299C21.052 6.49729 20.998 6.90673 20.799 7.25123C20.6 7.59574 20.2724 7.84709 19.8881 7.94999L4.91606 11.96L4.14006 9.06199L4.38106 8.99699L6.84806 11.442L4.22206 12.146C4.00673 12.2037 3.77828 12.1879 3.573 12.1009C3.36772 12.0139 3.19739 11.8608 3.08906 11.666L0.466064 6.93999L1.91506 6.55199L4.38106 8.99699L9.47806 7.63099V7.63199ZM3.00006 15H19.0001V17H3.00006V15Z"
                      fill="#949292"
                    />
                  </svg>
                </div>
                <div class="w-100">
                  <label class="fs-170" for="">From</label>
                  <br />
                  <input
                    type="text"
                    class="border-0 fs-200 fw-bold w-100"
                    placeholder="Enter city"
                    v-model="from"
                  />
                </div>
              </div>
              <!-- return from -->
              <div
                class="bgwhite m-2 d-flex border w-90 spacemargForTo align-items-center p-1 rounded-2"
              >
                <div class="px-2">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 19 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.25398 8.47001L7.88398 0.0880127L9.81699 0.606013L12.627 9.64101L17.888 11.051C18.0783 11.102 18.2567 11.1899 18.413 11.3098C18.5693 11.4297 18.7004 11.5792 18.7989 11.7498C18.8975 11.9204 18.9614 12.1087 18.9872 12.304C19.0129 12.4993 18.9999 12.6977 18.949 12.888C18.898 13.0783 18.8101 13.2567 18.6902 13.413C18.5703 13.5693 18.4208 13.7004 18.2502 13.799C18.0796 13.8975 17.8913 13.9615 17.696 13.9872C17.5007 14.0129 17.3023 14 17.112 13.949L2.13998 9.93701L2.91598 7.03901L3.15798 7.10401L4.07198 10.454L1.44498 9.75101C1.22972 9.69309 1.03998 9.56489 0.905908 9.38679C0.771836 9.20869 0.701117 8.9909 0.704985 8.76801L0.794985 3.36501L2.24398 3.75301L3.15798 7.10401L8.25398 8.47001ZM1.99998 17H18V19H1.99998V17Z"
                      fill="#949292"
                    />
                  </svg>
                </div>
                <div class="w-100">
                  <label class="fs-170" for="">To</label>
                  <br />
                  <input
                    v-model="to"
                    type="text"
                    class="border-0 fs-200 w-100 fw-bold"
                    placeholder="Enter Destination"
                  />
                </div>
              </div>
              <!-- return and depature date -->
              <div class="bgwhite border rounded-2 w-90 m-2 py-1 px-2">
                <!-- depature date -->
                <div class="d-flex align-items-center">
                  <!-- depature date -->
                  <div>
                    <small class="fs-170">Departure</small>
                    <date-picker
                      input-class="my-picker-class fw-bold fs-200"
                      placeholder="MM/DD/YYYY"
                      format="dsu,MMM,yyyy"
                      v-model="date_depature"
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
              <div class="bgwhite border rounded-2 w-90 m-2 py-1 px-2">
                <!-- return date -->
                <div class="d-flex align-items-center">
                  <!-- return date -->
                  <div>
                    <small class="fs-170">Return</small>
                    <date-picker
                      input-class="my-picker-class fw-bold fs-200"
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
              <!-- search flight button -->
              <div
                class="bggreen w-90 text-center searchmargForTo m-2 p-3 white fw-bold rounded-2"
              >
                <div class="">
                  <span class="fs-200">Search Flight</span>
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
export default {
  data() {
    return {
      Travelers: "Passengers",
      from: "",
      to: "",
      flight: true,
      hotel: false,
      value: "trip",
      list: ["Orange", "Apple", "Kiwi", "Lemon", "Pineapple"],
      travelers: false,
      visible: false,
      visibletype: false,
      triptype: false,
      flighTrip: false,
      date_today: new Date(),
      date_depature: new Date(),
    };
  },
  methods: {
    // switch to flight and hotel
    switchBtwFLightAndHotel(data) {
      if (data === "flight") {
        this.flight = true;
        this.hotel = false;
      } else {
        this.flight = false;
        this.hotel = true;
      }
    },
    // dropdown
    travelersdrop() {
      this.travelers = !this.travelers;
    },
    trip() {
      this.visible = !this.visible;
    },
    flightT() {
      this.visibletype = !this.visibletype;
    },
    select(option) {
      this.value = option;
    },
    selectraveler(option) {
      this.Travelers = option;
    },
  },
};
</script>

<style scoped>
/* card color */
.bgview {
  background: rgba(255, 255, 255, 0.3);
  border-radius: 36px;
}
.bgcard {
  background: linear-gradient(360deg, rgb(52, 52, 119), rgb(77, 77, 177)) !important;
}
/* flight svg */
.fly {
  fill: rgba(40, 54, 115, 1);
}
.circle-icon:hover {
  background-color: var(--clr-blue) !important;
}
.circle-icon {
  /* border: 0.7px solid rgb(161, 170, 204); */
  border-radius: 50%;
  height: 45%;
  padding: 0.7rem 1rem;
  /* width: 50%; */
  background-color: rgba(255, 255, 255, 1);
}
.planeandHotel-svg:hover {
  background-color: white !important;
}
/* form dropdown */
.zed-dropdown {
  z-index: 2000;
}
/* trip dropdown */
.trippo {
  /* position: absolute; */
  width: 120% !important;
  z-index: 2000 !important;
}
/* increment and decrement style */
.incredecrebtn {
  border: 1px solid black;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  /* height: 2rem; */
}

/* input style */
input {
  cursor: pointer !important;
}
input:focus {
  outline: none;
  font-size: 0.9rem !important;
}

::placeholder {
  font-size: 0.8rem !important;
}
/* reverse styling */
.reverseStyle {
  border-radius: 50%;
  width: 50px;
  height: 50px;
}
.reversepo {
  position: absolute;
  top: 13.4rem;
  bottom: 0rem;
  z-index: 100;
}
/* input space for destination */
.spacemargForTo {
  margin: 1.5rem 0rem 0rem 0rem;
}
/* center form */
.center-form {
  width: 90%;
  margin: auto !important;
}
/* hero background */
.bghero {
  background-image: url(@/assets/images/heroImage.png);
  /* height: 90vh !important; */
  background-size: cover !important;
  /* width: 200% !important; */
}
/* request visa processing button,"search and flights"text */
.space-processing {
  padding: 3rem 0rem !important;
}
.search-spacing {
  margin: 0rem 0rem 2rem 0rem !important;
}
/* hotels and flight icon  *****************/
/* flight svg */
.fly {
  fill: rgba(40, 54, 115, 1);
}
.circle-icon:hover {
  background-color: var(--clr-blue) !important;
}
.circle-icon {
  /* border: 0.7px solid rgb(161, 170, 204); */
  border-radius: 50%;
  height: 30%;
  padding: 0.7rem 1rem;
  /* width: 50%; */
  background-color: rgba(255, 255, 255, 1);
}
.planeandHotel-svg:hover {
  background-color: white !important;
}
/* max-width */
.header-width {
  max-width: 90% !important;
  margin: auto !important;
}
/* explore the world grid position */
.hero-intro-position {
  margin: 7.7rem 5.6rem;
  /* top: 7.8rem;
  bottom: 0rem;
  left: 20%;
  right: 0rem; */
}
/* bookflightform */
.bookflightformbg {
  background-image: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.423) 0%,
    rgba(255, 255, 255, 0.9) 100%
  );
  /* height: 90%; */
  margin: 1.72rem 0rem;
  /* margin: 1.72rem 0rem; */
  width: 85%;

  border-radius: 1.6rem !important;
}

@media (min-width: 1410px) {
  .header-width {
    max-width: 90% !important;
    margin: auto !important;
  }
}
.selector {
  width: 100%;
  background: #f8f8f8;
  /* z-index: 1; */
}
.arrow {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 4px solid #888;
  transform: rotateZ(0deg) translateY(0px);
  transition-duration: 0.3s;
  transition-timing-function: cubic-bezier(0.59, 1.39, 0.37, 1.01);
}
.expanded {
  transform: rotateZ(180deg) translateY(2px);
}
.label {
  display: block;
  /* padding: 12px; */
  font-size: 16px;
  color: #888;
}
.uno {
  width: 60%;
  list-style-type: none;
  padding: 0;
  margin: 0;
  font-size: 16px;
  border: 1px solid gainsboro;
  /* border-radius: 2rem; */
  position: absolute;
  left: 0rem;
  z-index: 1;
  background: #fff;
}
/* &:hover {
  color: white;
  background: seagreen;
} */
.aselect {
  width: 100%;
}

.list {
  padding: 12px;
  color: #666;
}
.current {
  background: #eaeaea;
}
.hidden {
  visibility: hidden;
}
.travelers {
  visibility: visible;
}
</style>
<style>
.my-picker-class {
  border: none !important;
  width: 100% !important;
  cursor: pointer !important;
}
.my-picker-class:focus {
  outline: none;
}
</style>
