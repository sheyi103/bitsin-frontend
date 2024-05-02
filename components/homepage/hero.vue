<template>
  <div>
    <!-- hero section -->
    <div class="bghero font">
      <div class="container">
        <div class="row">
          <!-- explore the world text -->
          <div class="position-relative col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <div class="hero-intro-position mob-hero-text">
              <h1 class="white fs-725 mob-expl-text fontbold fw-bold search-spacing">
                Explore <br />
                the World
              </h1>
              <div class="">
                <span class="fs-350 white"
                  >Search and find flights, hotels and <br />
                  discover the beautiful world around you
                </span>
              </div>
              <!-- request via processing -->
              <div class="space-processing not-on-mobile">
                <span class="bggreen rounded-2 px-4 white py-3"
                  >Request Visa Processing</span
                >
              </div>
            </div>
          </div>
          <!-- booking flight -->
          <div class="col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <!-- book flight -->
            <div class="border-3 py-3 bookflightformbg booking-flight-form-mobile">
              <div class="text-center mobile-fontsize pb-3 fs-400 fw-bold">
                <span>Discover your experience today</span>
              </div>
              <form  @submit.prevent="searchFlightAvailability" class="center-form position-relative">
                <!-- flight and hotels buttons -->
                <div class="d-flex align-items-center">
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
                <!-- flight form -->
                <div v-if="flight">
                  <!-- passenger, trip, economy or business class input space -->
                  <div class="d-flex align-items-center spacemargForTo">
                    <!-- passenger -->
                    <div
                      class="aselect mx-1"
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
                          <span>{{ totalTravelers }} Travelers</span>
                        </div>
                        <div class="arrow" :class="{ expanded: travelers }"></div>
                        <div
                          class="zed-dropdown"
                          :class="{ hidden: !travelers, travelers }"
                        >
                          <ul class="uno rounded-2 border-0 shadow-sm px-3">
                            <h5 class="fs-250 py-3 blue fw-bold">Passengers</h5>

                            <li class="py-1" @click="selectraveler(Travelers)">
                              <div
                                class="d-flex justify-content-between align-items-center"
                              >
                                <!-- type of age group -->
                                <div>
                                  <h5 class="fs-200 fw-bold">Adults</h5>
                                  <span class="fs-150">above 12 yrs</span>
                                </div>
                                <!-- decrement -->
                                <div
                                  class="incredecrebtn d-flex align-items-center justify-content-center" @click="decrementAdult"
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
                                  <span class="fw-bold">{{ adult }}</span>
                                </div>
                                <!-- increment -->
                                <div
                                  class="incredecrebtn d-flex align-items-center justify-content-center"
                                  @click="incrementAdult"
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
                              <div
                                class="d-flex justify-content-between align-items-center"
                              >
                                <!-- type of age group -->
                                <div>
                                  <h5 class="fs-200 fw-bold">Children</h5>
                                  <span class="fs-150">below 11 yrs</span>
                                </div>
                                <!-- decrement -->
                                <div
                                  class="incredecrebtn d-flex align-items-center justify-content-center" @click="decrementChildren"
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
                                  <span class="fw-bold">{{ children }}</span>
                                </div>
                                <!-- increment -->
                                <div
                                  class="incredecrebtn d-flex align-items-center justify-content-center" @click="incrementChildren"
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
                              <div
                                class="d-flex justify-content-between align-items-center"
                              >
                                <!-- type of age group -->
                                <div>
                                  <h5 class="fs-200 fw-bold">Infants</h5>
                                  <span class="fs-150">below 1 yrs</span>
                                </div>
                                <!-- decrement -->
                                <div
                                  class="incredecrebtn d-flex align-items-center justify-content-center" @click="decrementInfant"
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
                                  <span class="fw-bold">{{  infant }}</span>
                                </div>
                                <!-- increment -->
                                <div
                                  class="incredecrebtn d-flex align-items-center justify-content-center" @click="incrementInfant"
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
                            <li class="list fs-200" @click="select('One Way')">One Way</li>
                            <li class="list fs-200" @click="select('Round Trip')">Round Trip</li>
                            <li class="list fs-200" @click="select('Multi-city')">Multi-city</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <!-- type of flight -->
                    <div
                      class="aselect mx-1"
                      :data-value="typeOfFlight"
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
                          <span>{{ typeOfFlight }}</span>
                        </div>
                        <div class="arrow" :class="{ expanded: visibletype }"></div>
                        <div :class="{ hidden: !visibletype, visibletype }">
                          <ul class="uno trippo rounded-2 fs-200 border-0 shadow-sm">
                            <li class="list" @click="selectFlight('Economy')">Economy</li>
                            <li class="list" @click="selectFlight('Premium')">Premium</li>
                            <li class="list" @click="selectFlight('Business')">Business</li>
                            <li class="list" @click="selectFlight('First Class')">First Class</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- trip from -->
                  <div
                    class="bgwhite d-flex align-items-center spacemargForTo p-2 rounded-2"
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
                        placeholder="Search by name or city"
                        v-model="from"
                        @input="filterAirportsFrom"
                      />

                       <!-- Display filtered airports -->
                        <ul v-show="isSearchActiveFrom" class="airport-list">
      <li v-for="(airport, code) in filteredAirportsFrom" :key="code" @click="selectAirportFrom(airport)" class="airport-item">
        <div class="airport-name">{{ airport.name }}</div>
        <div class="location">{{ airport.state }}, {{ airport.country }}</div>
      </li>
    </ul>

                    </div>
                  </div>
                  <!-- reverse trip -->
                  <div class="d-flex justify-content-center">
                    <div
                      @click="reverse"
                      role="button"
                      class="reverseStyle reversepo bgwhite shadow-lg d-flex justify-content-center align-items-center"
                    >
                      <svg
                        width="16"
                        height="18"
                        viewBox="0 0 16 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.3333 12.3333V8.99996L15.5 13.1666L11.3333 17.3333V14H1.33333V12.3333H11.3333ZM4.66667 0.666626V3.99913L14.6667 3.99996V5.66663H4.66667V8.99996L0.5 4.83329L4.66667 0.666626Z"
                          fill=" #33334C"
                        />
                      </svg>
                    </div>
                  </div>
                  <!-- return from -->
                  <div
                    class="bgwhite d-flex spacemargForTo align-items-center p-2 rounded-2"
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
                        @input="filterAirportsTo"
                      />
                        <!-- Display filtered airports -->
                        <ul v-show="isSearchActiveTo" class="airport-list">
      <li v-for="(airport, code) in filteredAirportsTo" :key="code" @click="selectAirportTo(airport)" class="airport-item">
        <div class="airport-name">{{ airport.name }}</div>
        <div class="location">{{ airport.state }}, {{ airport.country }}</div>
      </li>
    </ul>
                    </div>
                  </div>
                  <div
                    class="d-flex position-relative justify-content-between spacemargForTo align-items-center"
                  >
                    <!-- return and depature date -->
                    <div class="bgwhite rounded-2 w-80 py-3 px-3">
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
                    <div class="bgwhite rounded-2 w-80 ms-2 p-3">
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
                  </div>
                  <!-- search flight button -->
                  <div
                    class="bggreen searchmargForTo searchdflightbuttonmobile py-3 white fw-bold rounded-2" @click="searchFlightAvailability"
                  >
                    <div class="d-flex align-items-center justify-content-center">
                      <div class="px-4">
                        <span v-show="!isLoading">Search Flight</span>
                        <span
                v-show="isLoading"
                class="spinner-grow spinner-grow-sm text-white"
                role="status"
              >
              </span>
                      </div>
                      <div class="px-1">
                        <svg
                          class="forward-mobile-icon"
                          width="18"
                          height="18"
                          viewBox="0 0 20 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.5 1.5L19 9M19 9L11.5 16.5M19 9L1 9"
                            stroke="white"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- hotel form-->
                <div v-if="hotel">
                  <!-- trip from -->
                  <div
                    class="bgwhite d-flex align-items-center spacemargForTo p-2 rounded-2"
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
                      <label class="fs-170" for="">Going to?</label>
                      <br />
                      <input
                        type="text"
                        class="border-0 fs-200 fw-bold w-100"
                        placeholder="City or Hotel Name"
                        v-model="from"
                      />
                    </div>
                  </div>

                  <!-- return from -->
                  <div
                    class="bgwhite d-flex spacemargForTo align-items-center p-2 rounded-2"
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
                      <label class="fs-170" for="">Guests and Rooms</label>
                      <br />
                      <input
                        v-model="hotelname"
                        type="text"
                        class="border-0 fs-200 w-100 fw-bold"
                        placeholder=""
                      />
                    </div>
                  </div>
                  <!-- calender -->
                  <div
                    class="d-flex position-relative justify-content-between spacemargForTo align-items-center"
                  >
                    <!-- return and depature date -->
                    <div class="bgwhite rounded-2 w-80 py-3 px-3">
                      <!-- depature date -->
                      <div class="d-flex align-items-center">
                        <!-- depature date -->
                        <div>
                          <small class="fs-170">Departure {{ data_depature }}</small>
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
                    <div class="bgwhite rounded-2 w-80 ms-2 p-3">
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
                  </div>
                  <!-- search flight button -->
                  <div
                    class="bggreen searchmargForTo searchdflightbuttonmobile py-3 white fw-bold rounded-2"
                  >
                    <div class="d-flex align-items-center justify-content-center">
                      <div class="px-4">
                        <span>Search Hotels</span>
                      </div>
                      <div class="px-1">
                        <svg
                          class="forward-mobile-icon"
                          width="18"
                          height="18"
                          viewBox="0 0 20 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.5 1.5L19 9M19 9L11.5 16.5M19 9L1 9"
                            stroke="white"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import airportData from "@/json/airport.json";
import apiResponse from "@/json/flightresponse.json";
export default {

  data() {
    return {
      Travelers: 0,
      adult:0,
      children:0,
      infant:0,
      airports: [],
      from: "",
      to: "",
      departurePort:"",
      arrivalPort:"",
      isSearchActiveFrom: true ,// Initially set to true
      isSearchActiveTo: true ,// Initially set to true
        filteredAirportsFrom: [],
      filteredAirportsTo: [],
      flight: true,
      hotel: false,
      value: "trip",
      typeOfFlight: "flight",
      list: ["Orange", "Apple", "Kiwi", "Lemon", "Pineapple"],
      travelers: false,
      visible: false,
      visibletype: false,
      triptype: false,
      flighTrip: false,
      date_today: null,
      date_depature: null,
      isLoading: false,
      apiResponse: [],
    };
  },
  created() {
    this.airports = airportData;
    // this.filteredAirports = { ...this.airports };

  },
  methods: {
     resetForm() {
      // Reset form data after successful submission
      this.formData = {
          Travelers: 0,
      adult:0,
      children:0,
      infant:0,
      airports: [],
      from: "",
      to: "",
      departurePort:"",
      arrivalPort:"",
      isSearchActiveFrom: true ,// Initially set to true
      isSearchActiveTo: true ,// Initially set to true
        filteredAirportsFrom: [],
      filteredAirportsTo: [],
      flight: true,
      hotel: false,
      value: "trip",
      typeOfFlight: "flight",
      list: ["Orange", "Apple", "Kiwi", "Lemon", "Pineapple"],
      travelers: false,
      visible: false,
      visibletype: false,
      triptype: false,
      flighTrip: false,
      date_today: null,
      date_depature: null,
      };
    },
     searchFlightAvailability() {
      // Set loading to true to show loader
     this.isLoading = true;
      // Access form data from data properties

      const formData = {


        departure_port: this.departurePort,
        arrival_port: this.arrivalPort,
        departure_date: this.formatDate(this.date_depature),
        return_date: this.date_today ? this.formatDate(this.date_today) : null,
        adult: this.adult,
        children: this.children,
        infants: this.infant,
        // Travelers: this.Travelers,
        // from: this.from,
        // to: this.to,
        // isSearchActiveFrom: this.isSearchActiveFrom,
        // isSearchActiveTo: this.isSearchActiveTo,
        // flight: this.flight,
        // hotel: this.hotel,
        // value: this.value,
        // typeOfFlight: this.typeOfFlight,
        // list: this.list,
        // travelers: this.travelers,
        // visible: this.visible,
        // visibletype: this.visibletype,
        // triptype: this.triptype,
        // flighTrip: this.flighTrip,

      };

      // Perform further logic, such as sending the form data to an API
      console.log('Form Data:', formData);

      // Example: Call a function to send form data to API
      this.sendFormDataToAPI(formData);
    },
 async sendFormDataToAPI(formData) {

      try {
        const response = await this.$axios.$post("/flight/availability",formData);
        console.log("flight search: " ,response)

        // const response = apiResponse;
        // console.log("Hero flight search: " ,response)




        if (response.flights.SOAPBody.airLowFareSearchRsp){

        //  console.log("Hero Component Successful response:", response);
         this.$router.push({ name: 'flight-searchflight',params: { response: response } });
        // this.$router.push('/flight-searchflight');
          // Do something with the successful response
        this.isLoading = false;

        }else if(response.flights.SOAPBody.SOAPFault){
          // message = response.SOAPBody.SOAPFault.faultstring;
          // console.log("hello world");
          // console.log("flight search failed: ",response.flights.SOAPBody.SOAPFault.faultstring );
           alert(response.flights.SOAPBody.SOAPFault.faultstring);
           this.isLoading = false;
        }else if(response.code == 500){
        alert("server unavailble!!", response.message);
        }else{
          alert("failed request");
        }
      } catch (e) {
       console.error("Error:", e);
       this.isLoading = false;
        // Handle error
      }finally {
        // Set loading back to false after the request completes
        this.isLoading = false;
      }
    },
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
  //  airport listing
 filterAirportsFrom() {
  const searchTerm = this.from.toLowerCase();
      this.filteredAirportsFrom = {};
      let count = 0; // Counter to track the number of matching airports

      for (const code in this.airports) {
          if (count >= 3) break; // Stop iterating if 5 airports are fou
        const airport = this.airports[code];
        const airportName = airport.name.toLowerCase();
        const airportCity = airport.city.toLowerCase();
        if (airportName.includes(searchTerm) || airportCity.includes(searchTerm)) {
          this.filteredAirportsFrom[code] = airport;
           count++; // Increment the counter for each matching airport
        }
}},
 selectAirportFrom(airport) {
      // Handle selection of the airport
      this.from = airport.name
      this.departurePort =airport.iata
       this.isSearchActiveFrom = false;;
      // You can perform any further actions here, such as updating state or navigating
    }
  ,
  selectAirportTo(airport) {
      // Handle selection of the airport
      this.to = airport.name
      this.arrivalPort = airport.iata
       this.isSearchActiveTo = false;;
      // You can perform any further actions here, such as updating state or navigating
    }
  ,
filterAirportsTo() {
   const searchTerm = this.to.toLowerCase();

      this.filteredAirportsTo = {};
      let count = 0; // Counter to track the number of matching airports

      for (const code in this.airports) {
         if (count >= 5) break; // Stop iterating if 5 airports are found
        const airport = this.airports[code];
        const airportName = airport.name.toLowerCase();
        const airportCity = airport.city.toLowerCase();
        if (airportName.includes(searchTerm) || airportCity.includes(searchTerm)) {
          this.filteredAirportsTo[code] = airport;
            count++; // Increment the counter for each matching airport
        }}
},
//ddate format

formatDate(date) {
      // Ensure that date is a Date object
      if (!(date instanceof Date)) {
        date = new Date(date);
      }
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      const hours = String(date.getHours()).padStart(2, '0');
      const minutes = String(date.getMinutes()).padStart(2, '0');
      const seconds = String(date.getSeconds()).padStart(2, '0');
      return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
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
    reverse() {
      const temp = this.from;
      this.from = this.to;
      this.to = temp;
    },

    select(option) {
      this.value = option;
      this.visibletype = false; // Hide dropdown after selection
    },
    selectFlight(option) {
      this.typeOfFlight = option;// Hide dropdown after selection
    },
    selectraveler(option) {
      this.Travelers = option;
    },
     incrementAdult: function() {
      this.adult+= 1;
    },
    decrementAdult: function() {
      this.adult -= 1;
  },
   incrementChildren: function() {
      this.children+= 1;
    },
    decrementChildren: function() {
      this.children -= 1;
  },
     incrementInfant: function() {
      this.infant+= 1;
    },
    decrementInfant: function() {
      this.infant -= 1;
  },
  },
   computed: {
    totalTravelers() {
      return this.adult + this.children + this.infant;
    }
  },
  //  created() {
  //   // Log airports here to ensure it's being accessed after initialization
  //   console.log(this.airports);
  // },
};
</script>

<style scoped>

/* airport list  */
.airport-list {
  list-style-type: none;
  padding: 0;
}

.airport-item {
  padding: 10px;
  border-bottom: 1px solid #ddd;
  cursor: pointer;
}

.airport-item:hover {
  background-color: #f0f0f0;
}

.airport-name {
  font-weight: bold;
}

.location {
  color: #666;
}


.filtered-airports {
  list-style: none;
  padding: 0;
  margin-top: 5px;
  max-height: 150px;
  overflow-y: auto;
  position: absolute;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}
.filtered-airports li {
  padding: 5px;
  cursor: pointer;
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
  background-image: url(@/assets/images/HeroImage.png);
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
  height: 45%;
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
/* search flight button space */
.searchmargForTo {
  margin: 1.5rem 0rem 0rem 0rem;
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
/* things to not show on mobile */
@media (max-width: 992px) {
  /* mobile explore text */
  .mob-expl-text {
    font-size: 3rem !important;
    padding: 2.3rem 0rem 0rem 0rem;
  }
  .mob-hero-text {
    width: 100%;
    padding: unset;
    margin: unset;
  }
  .not-on-mobile {
    display: none !important;
  }
  /* booking flight and hotel form */
  .booking-flight-form-mobile {
    width: 100%;
  }
  .mobile-fontsize {
    font-size: 0.9rem !important;
  }
  /* hotels and flight icon  *****************/
  /* flight svg */
  .planeandHotel-svg {
    width: 19px;
  }
  .circle-icon {
    /* border: 0.7px solid rgb(161, 170, 204); */
    border-radius: 50%;
    height: 30% !important;
    padding: 0.5rem 0.8rem;
    /* width: 50%; */
    background-color: rgba(255, 255, 255, 1);
  }
  /* mobile user iocon in form */
  .mob-user-icon {
    width: 12px;
    display: none !important;
  }
  /* input space for destination */
  .spacemargForTo {
    margin: 1.3rem 0rem 0rem 0rem;
  }
  .reversepo {
    position: absolute;
    top: 12.4rem;
    bottom: 0rem;
    z-index: 100;
  }
  /* search flight button */
  .searchdflightbuttonmobile {
    font-size: 0.85rem !important;
  }
  /* forward icon in search flight */
  .forward-mobile-icon {
    width: 15px;
  }
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
