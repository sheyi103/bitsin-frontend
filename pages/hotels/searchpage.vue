<template>
  <div>
    <div>
      <!-- filter -->
      <div class="bggrey4">
        <div class="container">
          <Filterr />
        </div>
      </div>
      <div class="container">
        <div>
          <Available />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Filterr from '@/components/hotelco/filter.vue'

import Available from '@/components/hotelco/availablerooms.vue'
export default {
  components: {
    Filterr,

    Available,
  },
}
</script>

<style></style>
