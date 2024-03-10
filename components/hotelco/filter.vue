<template>
  <div>
    <!-- filter -->
    <div class="font">
      <div class="d-flex py-4 container">
        <!-- going to -->
        <div class="mx-2 w-100">
          <div class="bgwhite rounded-2 py-3 px-3 shadow-sm">
            <!-- label -->
            <div>
              <span for="" class="fs-190">Going to?</span>
            </div>
            <!-- input -->
            <div>
              <input
                type="text"
                placeholder="Enter City or Hotel Name"
                class="w-100 fw-bold border-0"
              />
            </div>
          </div>
        </div>

        <!-- guest and room -->
        <div class="mx-2 w-100">
          <div class="bgwhite rounded-2 py-3 px-3 shadow-sm">
            <!-- label -->
            <div>
              <span for="" class="fs-190">Guest and Room</span>
            </div>
            <!-- input -->
            <div>
              <input
                type="text"
                placeholder="1 Guest    1 Room"
                class="w-100 fw-bold border-0"
              />
            </div>
          </div>
        </div>
        <!-- check in -->
        <div class="mx-2 w-100">
          <div class="bgwhite rounded-2 py-3 px-3 shadow-sm">
            <!-- label -->
            <div>
              <span for="" class="fs-190">Check In</span>
            </div>
            <!-- input -->
            <div>
              <input
                type="text"
                placeholder="Sun 28 Aug 22"
                class="w-100 fw-bold border-0"
              />
            </div>
          </div>
        </div>
        <!-- check out -->
        <div class="mx-2 w-100">
          <div class="bgwhite rounded-2 py-3 px-3 shadow-sm">
            <!-- label -->
            <div>
              <span for="" class="fs-190">Check Out</span>
            </div>
            <!-- input -->
            <div>
              <input
                type="text"
                placeholder="Sun 28 Aug 22"
                class="w-100 fw-bold border-0"
              />
            </div>
          </div>
        </div>
        <!-- search hotel button-->
        <div class="mx-2 w-100">
          <div class="rounded-2  white fw-bold text-center srchbtn px-5 bggreen shadow-sm">
            <span class="">Search Hotel</span>
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
/* filter */
/* placeholder in filter */
::placeholder {
  /* width */
}
input:focus {
  outline: none;
  width: 100% !important;
}
/* search button */
.srchbtn{
  padding: 1.8rem 0rem;
}
</style>
