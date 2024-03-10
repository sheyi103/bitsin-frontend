<template>
  <div class="row">
    <div class="col-md-12">
      <div class="table-wrap">
        <table class="table table-responsive-xl">
          <thead>
            <tr>
              <!-- <th>&nbsp;</th> -->
              <th>Product/Service</th>
              <th>Email</th>

              <th>Commission</th>
              <th>&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in referred" :key="index" class="alert" role="alert">
              <!-- <td>
                <label class="checkbox-wrap checkbox-primary">
                  <input type="checkbox" checked />
                  <span class="checkmark"></span>
                </label>
              </td> -->
              <td class="d-flex align-items-center">
                <div class="img" style="background-image: url(images/person_1.jpg)"></div>
                <div class="pl-3 email">
                  <span>Booking Enquiry</span>
                  <span>Added: {{ $moment(item.created_at).format("ll") }}</span>
                </div>
              </td>
              <td>{{ item.email }}</td>
              <td class="status"><span class="active">Null</span></td>
              <td>
                <button
                  type="button"
                  class="close"
                  data-dismiss="alert"
                  aria-label="Close"
                >
                  <span aria-hidden="true"><i class="fa fa-close"></i></span>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<style scoped src="assets/css/table-styles.css"></style>
<script>
export default {
  data() {
    return {};
  },
  props: {
    referred: {
      type: Array,
      default: () => {},
    },
  },
};
</script>
