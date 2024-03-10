<template>
  <div>
    <!-- intro text -->
    <div>
      <Intro />
    </div>
    <!-- form -->
    <div>
      <Form />
    </div>
  </div>
</template>

<script>
import Intro from '@/components/visa-processing/intro-text.vue'
import Form from '@/components/visa-processing/visa-form.vue'
export default {
  components: {
    Intro,
    Form,
  },
}
</script>

<style scoped></style>
