<template>
  <div>
    <div class="container">
      <div><Singlehotel /></div>
      <div><Similarhotel/></div>
    </div>
  </div>
</template>

<script>
import Singlehotel from '@/components/hotelco/singlehotelGrid.vue'
import Similarhotel from '@/components/hotelco/similarhotel.vue'
export default {
  components: {
    Singlehotel,
    Similarhotel
  },
}
</script>

<style scoped></style>
