<template>
  <div>
    <!-- intro text -->
    <div>
      <FAQIntro />
    </div>
    <!-- form -->
    <div>
      <FAQBody />
    </div>
  </div>
</template>

<script>
import FAQIntro from "@/components/faq/FAQIntro.vue";
import FAQBody from "@/components/faq/FAQBody.vue";
export default {
  components: {
    FAQIntro,
    FAQBody,
  },
};
</script>

<style scoped></style>
