<template>
  <div>
    <div class="font">
      <!-- title head -->
      <div class="gradient-header text-end px-4 w-70 m-auto my-5 py-3">
        <h5 class="blue fw-bold">FAQ to help you know more about Bitsin</h5>
        <!-- <fa icon="lock" /> -->
      </div>
      <!-- form container-->

      <div class="shadow-lg w-70 m-auto rounded-2 p-4">
        <div class="accordion accordion-flush" id="accordionFlushExample">
          <div class="accordion-item" v-for="(faq, index) in faqs" :key="index">
            <h2 class="accordion-header" id="flush-headingOne">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                :data-bs-target="`#faq${index}`"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                {{ faq.question }}
              </button>
            </h2>
            <div
              :id="`faq${index}`"
              class="accordion-collapse collapse"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                {{ faq.answer }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      faqs: [],
    };
  },
  created() {
    this.getFAQ();
  },
  methods: {
    async getFAQ() {
      try {
        const response = await this.$axios.$get(`/general/faq`);
        console.log(response);
        this.faqs = response.data;
      } catch (error) {}
    },
  },
};
</script>

<style scoped>
/* gradient header */
.gradient-header {
  background-image: linear-gradient(
    270.12deg,
    #8dd1b9 0.11%,
    rgba(141, 209, 185, 0) 99.92%
  );
} /* input spaces */
input,
textarea {
  border: 0.5px solid rgb(199, 199, 199);
}
input:focus {
  outline: none;
  font-size: 0.8rem !important;
  /* padding: 2rem 0rem ; */
}
textarea:focus {
  outline: none;
  font-size: 0.8rem !important;
}
::placeholder {
  font-size: 0.8rem !important;
}
label {
  font-weight: bold;
}
.fw-bold {
  font-weight: bolder !important;
}
</style>
