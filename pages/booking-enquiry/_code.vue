<template>
  <div>
    <div class="">
      <div class="row">
        <div
          class="col-lg-6 offset-md-3 col-md-6 col-xl-6 col-xxl-6 rounded-2 shadow-lg bgwhite"
        >
          <div class="p-5 mob-contact-space">
            <!-- form intro -->
            <div>
              <!-- {{ this.$route.params.code }} -->
              <h2 class="fontbold blue py-3">Flight Booking</h2>
              <div class="py-2">
                <span>Fill the Form and we will get in touch.</span>
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
              <!-- full name -->
              <div class="py-2">
                <label for="" class="fs-200 py-2">Full Name</label>
                <br />
                <input
                  v-model="form.name"
                  type="text"
                  class="rounded-1 p-2 w-100"
                  placeholder="enter your Name"
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
              <!--Inbound and Outbound -->
              <div class="row">
                <div class="py-2 col-md-6">
                  <label for="" class="fs-200 py-2">Inbound</label>
                  <br />
                  <input
                    v-model="form.inbound"
                    type="text"
                    class="rounded-1 p-2 w-100"
                    placeholder="enter your phone Number"
                  />
                </div>

                <div class="py-2 col-md-6">
                  <label for="" class="fs-200 py-2">Outbound</label>
                  <br />
                  <input
                    v-model="form.outbound"
                    type="text"
                    class="rounded-1 p-2 w-100"
                    placeholder="enter your phone Number"
                  />
                </div>
              </div>

              <!--Arrival and destination-->
              <div class="row">
                <div class="py-2 col-md-6">
                  <label for="" class="fs-200 py-2">Arrival</label>
                  <br />
                  <input
                    v-model="form.arrival"
                    type="date"
                    class="rounded-1 p-2 w-100"
                    placeholder="enter your phone Number"
                  />
                </div>

                <div class="py-2 col-md-6">
                  <label for="" class="fs-200 py-2">Destination</label>
                  <br />
                  <input
                    v-model="form.destination"
                    type="date"
                    class="rounded-1 p-2 w-100"
                    placeholder="enter your phone Number"
                  />
                </div>
              </div>

              <!--Passengers-->
              <div class="row">
                <div class="py-2 col-md-4">
                  <label for="" class="fs-200 py-2">No. of Adult</label>
                  <br />
                  <input
                    v-model="form.adult"
                    type="number"
                    class="rounded-1 p-2 w-100"
                    placeholder="enter number of Adults"
                  />
                </div>

                <div class="py-2 col-md-4">
                  <label for="" class="fs-200 py-2">No. of Children(optional)</label>
                  <br />
                  <input
                    v-model="form.child"
                    type="number"
                    class="rounded-1 p-2 w-100"
                    placeholder="enter number children"
                  />
                </div>
                <div class="py-2 col-md-4">
                  <label for="" class="fs-200 py-2">No. of Infants(optional)</label>
                  <br />
                  <input
                    v-model="form.infant"
                    type="number"
                    class="rounded-1 p-2 w-100"
                    placeholder="enter number of infants"
                  />
                </div>
              </div>
              <!--Message -->
              <div class="py-2">
                <label for="" class="fs-200 py-2">Additional Comments (optional)</label>
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
                @click="sendRequest"
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
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {},
      isLoading: false,
    };
  },
  mounted() {
    if (this.$route.params.code) {
      this.clicks(this.$route.params.code);
    }
  },
  methods: {
    async clicks(code) {
      try {
        const response = await this.$axios.get(`clicks/${code}`);
      } catch (e) {
        console.log(e);
      }
    },
    async sendRequest() {
      this.form.code = this.$route.params.code;
      this.isLoading = true;
      try {
        const response = await this.$axios.post(`booking-enquiry`, this.form);
        this.$toast.success(response.data.message, {
          position: "top-center",
          duration: 2000,
        });
        this.isLoading = false;
      } catch (e) {
        this.isLoading = false;
        console.log(e);
        this.$toast.error("something went wrong, please check all required fields", {
          position: "top-center",
          duration: 2000,
        });
      }
    },
    increamentClick() {},
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
