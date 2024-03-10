<template>
  <div>
    <div class="font">
      <!-- filter title -->
      <div class="d-flex justify-content-between">
        <div>
          <h6>Filter by</h6>
        </div>
        <div>
          <small class="blue">Clear All</small>
        </div>
      </div>
      <!-- enter hotel name -->
      <div>
        <!-- label -->
        <div class="py-1">
          <span class="fs-170">Enter Hotel Name</span>
        </div>
        <!-- input -->
        <div>
          <input
            type="text"
            placeholder="Search hotel here"
            class="w-100 px-2 rounded-1"
          />
        </div>
      </div>
      <!-- budget per  night -->
      <div>
        <!-- label -->
        <div><label for="">Budget per night</label></div>
        <div>
          
          <input type="range" class="w-100">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            value: '10000'
        }
    },
}
</script>

<style scoped></style>
