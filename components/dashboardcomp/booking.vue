<template>
  <div>
    <div class="font container">
      <div>
        <!-- title -->
        <div class="py-2"><h6 class="blue fw-bold">My Bookings</h6></div>
        <!-- switch  -->
        <!-- hotel ,flight, view more New booking -->
        <div class="d-flex align-items-center justify-content-between my-2">
          <!-- hotel and flight button -->
          <div
            class="d-flex fw-bold justify-content-between align-items-center rounded-2 px-1 py-1 bgwhite1 select-button w-30"
          >
            <!-- flight -->
            <div
              @click="clickbutton('flight')"
              class="fs-170 hffocus black py-2 text-center rounded-1 w-50 white"
            >
              <span class="">Flight booking</span>
            </div>
            <!-- Hotels -->
            <div
              @click="clickbutton('hotel')"
              class="black hffocus text-center py-2 rounded-1 w-50 white fs-170"
            >
              <span>Hotel booking</span>
            </div>
          </div>
          <!-- view more -->
          <div class="">
            <div class="bggrey white fs-170 fw-bold p-2 rounded-2">
              <span>New Booking</span>
            </div>
          </div>
        </div>
        <!-- upcoming , cancelled, completed trip -->
        <div>
          <div>
            <!-- hotel and flight button -->
            <div
              class="d-flex fw-bold justify-content-between align-items-center rounded-2 px-1  bgwhite1 select-button w-30"
            >
              <!-- flight -->
              <div
                @click="clickbutton('flight')"
                class="fs-170 hffocus black py-1 text-center rounded-1 w-50 white"
              >
                <span class="">Flight booking</span>
              </div>
              <!-- Hotels -->
              <div
                @click="clickbutton('hotel')"
                class="black hffocus text-center py-1 rounded-1 w-50 white fs-170"
              >
                <span>Hotel booking</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.hffocus:visited {
  background-color: red;
}
/* focus on hotels and flight button */
.hffocus:active,
:hover {
  background-color: rgba(255, 255, 255, 1);
}
</style>
