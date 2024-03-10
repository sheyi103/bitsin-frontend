<template>
  <div class="main-content">
    <div class="header bg-gradient-primary pb-8 pt-5 pt-md-8">
      <div class="container-fluid">
        <h2 class="mb-5 text-white">Stats Card</h2>
        <div class="header-body">
          <div class="row">
            <div class="col-xl-4 col-lg-6">
              <div class="card card-stats mb-4 mb-xl-0">
                <div class="card-body">
                  <div class="row">
                    <div class="col">
                      <h5 class="card-title text-uppercase title-text mb-0">
                        Clicks/Visits
                      </h5>
                      <span class="h2 font-weight-bold mb-0">{{
                        stats?.clicks || 0
                      }}</span>
                    </div>
                    <div class="col-auto">
                      <div
                        class="icon icon-shape bg-danger text-white rounded-circle shadow"
                      >
                        <i class="fas fa-chart-bar px-2 py-2"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-lg-6">
              <div class="card card-stats mb-4 mb-xl-0">
                <div class="card-body">
                  <div class="row">
                    <div class="col">
                      <h5 class="card-title text-uppercase text-muted mb-0 title-text">
                        Signups
                      </h5>
                      <span class="h2 font-weight-bold mb-0">{{
                        stats?.signups || 0
                      }}</span>
                    </div>
                    <div class="col-auto">
                      <div
                        class="icon icon-shape bg-warning text-white rounded-circle shadow"
                      >
                        <i class="fas fa-chart-pie px-2 py-2"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-xl-4 col-lg-6">
              <div class="card card-stats mb-4 mb-xl-0">
                <div class="card-body">
                  <div class="row">
                    <div class="col">
                      <h5 class="card-title text-uppercase text-muted mb-0 title-text">
                        conversions
                      </h5>
                      <span class="h2 font-weight-bold mb-0"
                        >{{
                          (
                            (Number(stats?.signups) / Number(stats?.clicks)) *
                            100
                          ).toFixed(2) || 0
                        }}
                      </span>
                    </div>
                    <div class="col-auto">
                      <div
                        class="icon icon-shape bg-info text-white rounded-circle shadow"
                      >
                        <i class="fas fa-percent px-2 py-2"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Page content -->
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: {
    stats: {
      type: Object,
      default: () => {},
    },
  },
};
</script>
<style scoped>
.title-text {
  color: #273773 !important;
  font-weight: bold;
}
</style>
