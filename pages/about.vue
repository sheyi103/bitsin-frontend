<template>
  <div>
    <div>
      <Aboutinfo />
    </div>
    <!-- power of the platform -->
    <div>
      <Power />
    </div>
  </div>
</template>

<script>
import Aboutinfo from '@/components/about/aboutinfo.vue'
import Power from '@/components/about/poweroftheplatform.vue'
export default {
  components: {
    Aboutinfo,
    Power,
  },
}
</script>

<style></style>
