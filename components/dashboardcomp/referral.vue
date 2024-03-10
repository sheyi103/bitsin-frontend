<template>
  <div>
    <div class="row mx-3">
      <button class="btn btn-primary col-md-4" @click="activateReferral">
        Activate your referral link

        <span><b-spinner small v-show="loader" type="grow"></b-spinner></span>
      </button>
    </div>
    <div v-if="isAffiliate">
      <stat-card :stats="referral"></stat-card>
      <div class="referral-link-container mx-3 my-3">
        <div role="button" title="click to copy link" class="referral-link">
          <label for="x" class="ds">Referral Link</label>
          <input
            role="button"
            @click="copyLink(Link + referral?.code)"
            type="text"
            :value="Link + referral?.code"
            readonly
          />
        </div>
      </div>
      <table-data :referred="referral?.referred"></table-data>
    </div>
  </div>
</template>
<script>
import statCard from "../referral-components/stat-card.vue";
import TableData from "../referral-components/table-data.vue";

export default {
  components: { statCard, TableData },
  data() {
    return {
      Link: "https://bitsintravelsandtours.com/booking-enquiry/",
      referral: {},
      isAffiliate: false,
      loader: false,
    };
  },
  created() {
    this.getReferredData();
  },
  methods: {
    async getReferredData() {
      try {
        const [referralData] = await Promise.all([this.$axios.$get(`/users/referrals`)]);
        console.log(referralData);
        this.referral = referralData.data;
        if (referralData.data) {
          this.isAffiliate = true;
        }
      } catch (e) {
        console.log(e);
      }
    },
    async activateReferral() {
      try {
        this.loader = true;
        const response = await this.$axios.post(`referral`);
        // console.log(response.data);
        if (response.data.success) {
          this.loader = false;
          this.getReferredData();

          this.$toast.success(response.data.message, {
            position: "top-center",
            duration: 2000,
          });
        }
      } catch (e) {
        loader = false;
        console.log(e);
      }
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
    async copyLink(text) {
      try {
        await this.$copyText(text);
        this.$toast.success("link copied to clipboard", {
          position: "top-center",
          duration: 2000,
        });
      } catch (e) {
        console.error(e);
      }
    },
  },
};
</script>
<style>
.referral-link-container {
  background-color: #273773 !important;
  padding: 40px 35px;
  border-radius: 10px;
}

.ds {
  position: absolute;

  margin-left: 0;
  margin-top: 0.6em;
  font-size: 0.8em;
  line-height: 2.5em;
  border-right: 1px solid gray;
  background-color: gray;
  padding-right: 5px;
  padding-left: 5px;
  opacity: 0.7;
  color: beige;
}

/* .ds + input {
  padding-left: 2em;
} */

.referral-link input[type="text"] {
  width: 100%;
  padding: 0 0 0 8em;
  margin: 8px 0;
  box-sizing: border-box;
  border-radius: 5px;
  line-height: 2.2em;
}
</style>
