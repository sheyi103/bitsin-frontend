<template>
  <div>
    <div class="font bgnews">
      <div class="container py-5">
        <div class="w-50 m-auto mob-width">
          <div class="fontbold blue text-center py-3">
            <h2>Want to get the latest travel news and deals?</h2>
          </div>
          <div class="py-3 text-center">
            <small
              >Subscribe now for exclusive holiday deals, inspiration and the latest
              travel tips, and get them straight into your email.
            </small>
          </div>
          <!-- input space to type email-->
          <div class="d-flex py-3 justify-content-center">
            <div class="w-100">
              <input
                v-model="form.email"
                class="border-0 w-100 px-2 py-3"
                type="email"
                placeholder="Enter your email to suscribe"
              />
            </div>
            <!-- suscribe button-->
            <div
              role="button"
              @click="subscribe"
              class="bggreen w-30 subbtn mob-text px-2 py-3 text-center"
            >
              <span v-show="!isLoading" class="fs-200 white fw-bold">Suscribe</span>

              <span
                v-show="isLoading"
                class="spinner-grow spinner-grow-sm text-white"
                role="status"
              >
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoading: false,
      form: {},
    };
  },
  methods: {
    async subscribe() {
      this.isLoading = true;
      if (!this.form.email) {
        this.$toast.error("Please Provide a valid email", {
          position: "top-right",
          duration: 2000,
        });
        this.isLoading = false;
      } else if (!this.validEmail(this.form.email)) {
        this.$toast.error("Please Provide a valid email", {
          position: "top-right",
          duration: 2000,
        });
        this.isLoading = false;
      } else {
        try {
          console.log(this.form);
          const response = await this.$axios.$post(`/news-letter`, this.form);

          this.$toast.success(response.message, {
            position: "top-right",
            duration: 2000,
          });
          this.isLoading = false;
        } catch (e) {
          this.$toast.error(e, {
            position: "top-right",
            duration: 2000,
          });
          this.isLoading = false;
        }
      }
    },
    validEmail(email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    makeToast(append = false, variant = null) {
      this.$bvToast.toast("Toast body content", {
        title: `Variant ${variant || "default"}`,
        variant: variant,
        solid: true,
        appendToast: append,
        autoHideDelay: 1000, // default is 5000,
        noAutoHide: true, // in order to stay it open forever
      });
    },
  },
};
</script>

<style scoped>
/* background of newsletter */
.bgnews {
  background-image: url(@/assets/images/nes.png);
  background-size: cover;
  height: 400px !important;
}
/* focus on  input */
input:focus {
  outline: none;
}
input {
  border-radius: 12px 0px 0px 12px;
}
::placeholder {
  font-size: 0.9rem;
}
/* suscribtion button */
.subbtn {
  border-radius: 0px 12px 12px 0px;
}
@media (max-width: 576px) {
  /* 100% width */
  .mob-width {
    width: 100% !important;
  }
  /* suscribe button */
  .mob-text {
    font-size: 0.7rem !important;
  }
}
</style>
