<template>
  <div>
    <div class="font">
      <!-- hero page -->
      <div class="contactbg">
        <!-- input space -->
        <div class="container mob-center-width">
          <div class="form-po">
            <div class="row">
              <div
                class="col-lg-6 col-md-6 col-xl-6 col-xxl-6 rounded-2 shadow-lg bgwhite"
              >
                <div class="p-5 mob-contact-space">
                  <!-- form intro -->
                  <div>
                    <h2 class="fontbold blue py-3">Contact Us</h2>
                    <div class="py-2">
                      <h5 class="fw-bold">How can we help?</h5>
                      <span>We are here to answer any questions you may have.</span>
                    </div>
                  </div>
                  <form action="">
                    <!-- email -->
                    <div class="py-2">
                      <label for="" class="fs-200 py-2">Email Address</label>
                      <br />
                      <input
                        v-model="form.email"
                        type="email"
                        class="rounded-1 p-2 w-100"
                        placeholder="enter your email address"
                      />
                    </div>
                    <!-- first name -->
                    <div class="py-2">
                      <label for="" class="fs-200 py-2">First Name</label>
                      <br />
                      <input
                        v-model="form.firstName"
                        type="text"
                        class="rounded-1 p-2 w-100"
                        placeholder="enter your first Name"
                      />
                    </div>
                    <!-- Last Name -->
                    <div class="py-2">
                      <label for="" class="fs-200 py-2">Last Name</label>
                      <br />
                      <input
                        v-model="form.lastName"
                        type="text"
                        class="rounded-1 p-2 w-100"
                        placeholder="enter your last Name"
                      />
                    </div>
                    <!--Phone Number -->
                    <div class="py-2">
                      <label for="" class="fs-200 py-2">Phone Number</label>
                      <br />
                      <input
                        v-model="form.phone"
                        type="text"
                        class="rounded-1 p-2 w-100"
                        placeholder="enter your phone Number"
                      />
                    </div>
                    <!--Message -->
                    <div class="py-2">
                      <label for="" class="fs-200 py-2">Message</label>
                      <br />
                      <textarea
                        v-model="form.message"
                        name=""
                        id=""
                        cols="20"
                        rows="5"
                        class="w-100"
                        placeholder="type your message"
                      ></textarea>
                    </div>
                    <div
                      role="button"
                      @click="sendMail"
                      class="bggreen rounded-1 w-100 p-2 my-2 white text-center"
                    >
                      <span v-show="!isLoading" class="fw-bold fs-200">Send Request</span>
                      <span
                        v-show="isLoading"
                        class="spinner-border spinner-border-sm text-white"
                        role="status"
                      >
                      </span>
                    </div>
                  </form>
                </div>
              </div>
              <div
                class="col-lg-6 col-md-6 col-xl-6 col-xxl-6 rounded-2 position-relative"
              >
                <div class="cont-po">
                  <!-- title -->

                  <div>
                    <h4 class="fontbold blue">General Information</h4>
                  </div>
                  <!-- email -->
                  <div class="d-flex fw-bold py-2 blue1 align-items-center">
                    <div>
                      <svg
                        width="28"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_131_10)">
                          <path
                            d="M4.00033 4H28.0003C28.3539 4 28.6931 4.14048 28.9431 4.39052C29.1932 4.64057 29.3337 4.97971 29.3337 5.33333V26.6667C29.3337 27.0203 29.1932 27.3594 28.9431 27.6095C28.6931 27.8595 28.3539 28 28.0003 28H4.00033C3.6467 28 3.30756 27.8595 3.05752 27.6095C2.80747 27.3594 2.66699 27.0203 2.66699 26.6667V5.33333C2.66699 4.97971 2.80747 4.64057 3.05752 4.39052C3.30756 4.14048 3.6467 4 4.00033 4V4ZM26.667 9.65067L16.0963 19.1173L5.33366 9.62133V25.3333H26.667V9.65067ZM6.01499 6.66667L16.0817 15.5493L26.003 6.66667H6.01499Z"
                            fill="#283673"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_131_10">
                            <rect width="32" height="32" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <div class="px-3">
                      <a class="text-reset" href="mailto:info@bistintravelsandtours.com">
                        <span>info@bistintravelsandtours.com</span></a
                      >
                    </div>
                  </div>
                  <!-- number -->
                  <div class="d-flex blue1 py-2 fw-bold align-items-center">
                    <div>
                      <svg
                        width="28"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_131_7)">
                          <path
                            d="M12.488 14.2427C13.7391 16.4406 15.5594 18.2609 17.7573 19.512L18.936 17.8613C19.1255 17.5959 19.4058 17.4092 19.7237 17.3364C20.0417 17.2637 20.3752 17.31 20.6613 17.4667C22.5471 18.4972 24.6296 19.117 26.772 19.2853C27.1064 19.3118 27.4185 19.4634 27.6461 19.7098C27.8737 19.9561 28 20.2793 28 20.6147V26.564C28.0001 26.8941 27.8777 27.2125 27.6565 27.4576C27.4353 27.7027 27.1311 27.857 26.8027 27.8907C26.096 27.964 25.384 28 24.6667 28C13.2533 28 4 18.7467 4 7.33333C4 6.616 4.036 5.904 4.10933 5.19733C4.14301 4.86893 4.29731 4.56469 4.54239 4.34351C4.78746 4.12233 5.10587 3.99993 5.436 4H11.3853C11.7207 3.99996 12.0439 4.12634 12.2902 4.35393C12.5366 4.58153 12.6882 4.89363 12.7147 5.228C12.883 7.37039 13.5028 9.45291 14.5333 11.3387C14.69 11.6248 14.7363 11.9583 14.6636 12.2763C14.5908 12.5942 14.4041 12.8745 14.1387 13.064L12.488 14.2427ZM9.12533 13.3667L11.6587 11.5573C10.9397 10.0055 10.4471 8.35845 10.196 6.66667H6.68C6.672 6.888 6.668 7.11067 6.668 7.33333C6.66667 17.2747 14.7253 25.3333 24.6667 25.3333C24.8893 25.3333 25.112 25.3293 25.3333 25.32V21.804C23.6415 21.5529 21.9945 21.0603 20.4427 20.3413L18.6333 22.8747C17.9049 22.5916 17.1973 22.2575 16.516 21.8747L16.4387 21.8307C13.8234 20.3423 11.6577 18.1766 10.1693 15.5613L10.1253 15.484C9.74254 14.8027 9.40838 14.0951 9.12533 13.3667Z"
                            fill="#283673"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_131_7">
                            <rect width="32" height="32" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <div class="px-3">
                      <a href="tel:09132235632" class="text-reset">
                        <span>09132235632</span></a
                      >
                    </div>

                    <div class="px-3">
                      <a href="tel:+14372433190" class="text-reset">
                        <span>+1 (437) 243-3190</span></a
                      >
                    </div>

                    <div class="px-3">
                      <a href="tel:01-3438351" class="text-reset">
                        <span>01-3438351</span></a
                      >
                    </div>
                  </div>
                  <!--building -->
                  <div class="d-flex blue1 py-2 fw-bold align-items-center">
                    <div>
                      <svg
                        width="28"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_131_4)">
                          <path
                            d="M27.9997 26.6667H30.6663V29.3334H1.33301V26.6667H3.99967V4.00002C3.99967 3.6464 4.14015 3.30726 4.3902 3.05721C4.64025 2.80716 4.97939 2.66669 5.33301 2.66669H26.6663C27.02 2.66669 27.3591 2.80716 27.6092 3.05721C27.8592 3.30726 27.9997 3.6464 27.9997 4.00002V26.6667ZM25.333 26.6667V5.33335H6.66634V26.6667H25.333ZM10.6663 14.6667H14.6663V17.3334H10.6663V14.6667ZM10.6663 9.33335H14.6663V12H10.6663V9.33335ZM10.6663 20H14.6663V22.6667H10.6663V20ZM17.333 20H21.333V22.6667H17.333V20ZM17.333 14.6667H21.333V17.3334H17.333V14.6667ZM17.333 9.33335H21.333V12H17.333V9.33335Z"
                            fill="#283673"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_131_4">
                            <rect width="32" height="32" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <div class="px-3">
                      <span class="fs-250 fw-bold"
                        >7, Ade Adetoba St off Abiodun Bero St, Magodo Isheri, Lagos.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- newsletter -->
        </div>
      </div>
    </div>
    <div class="newsletpo">
      <News />
    </div>
  </div>
</template>

<script>
import News from "@/components/homepage/newsletter.vue";
export default {
  components: {
    News,
  },
  data() {
    return {
      form: {},
      isLoading: false,
    };
  },
  methods: {
    async sendMail() {
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
          const response = await this.$axios.$post(`/request`, this.form);

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
.contactbg {
  background-image: url(@/assets/images/contact.jpg);
  height: 500px !important;
  background-size: cover !important;
}
/* input spaces */
input,
textarea {
  border: 0.5px solid rgb(199, 199, 199);
}
input:focus {
  outline: none;
  font-size: 0.8rem !important;
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
/* form position on hero section */
.form-po {
  padding: 18rem 2rem;
  /* position: absolute; */
  /* top: 18rem; */
  /* left: 7rem; */
  /* right: 0rem; */
}
/* news letter positioning */
.newsletpo {
  margin: 45rem 0rem 0rem 0rem;
}
.cont-po {
  padding: 20rem 0rem 0rem 2rem;
  /* position: absolute;
  top: 20rem;
  left: 4rem; */
}
@media (max-width: 768px) {
  .mob-contact-space {
    padding: unset !important;
  }
  /* width of contact form on mobile */
  .mob-center-width {
    max-width: unset !important;
    /* width: 100% !important; */
    /* margin: unset !important; */
  }
  .form-po {
    padding: 10rem 0.5rem;
  }
  .cont-po {
    padding: 2rem 0rem 0rem 0rem;
    /* position: absolute;
  top: 20rem;
  left: 4rem; */
  }
}
</style>
