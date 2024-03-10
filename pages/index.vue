<template>
  <div class="">
    <div>
      <!-- hero section -->
      <div><Hero /></div>
      <!-- what we offer -->
      <div>
        <Value />
      </div>
      <!-- trening flight and hotel deals -->
      <div>
        <Trending />
      </div>
      <!-- the perfect place -->
      <div>
        <Perfect />
      </div>
      <!-- newsletter -->
      <div>
        <News />
      </div>
    </div>
  </div>
</template>

<script>
import Hero from '@/components/homepage/hero.vue'
import Value from '@/components/homepage/bestvalue.vue'
import Trending from '@/components/homepage/trendingflight.vue'
import Perfect from '@/components/homepage/perfectplace.vue'
import News from '@/components/homepage/newsletter.vue'
export default {
  components: {
    Hero,
    Value,
    Trending,
    Perfect,
    News,
  },
}
</script>

<style scoped>

</style>