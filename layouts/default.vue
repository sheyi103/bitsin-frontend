<template>
  <div>
    <TopNav />
    <Nuxt />
    <Footer />
  </div>
</template>
<script>
import TopNav from '../components/navbar/header.vue';
import Footer from '../components/navbar/footer.vue';
export default {
  name: 'IndexPage',
  components: {
    TopNav,
    Footer,
  },
}
</script>
