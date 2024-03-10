<template>
  <div>
    <div class="font container">
      <!-- intro title-->
      <div class="w-50 m-auto text-center py-5">
        <!-- title -->
        <div>
          <h2 class="fontbold blue">Read our latest blogs</h2>
        </div>
        <div>
          <span class="fs-200"
            >Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Suspendisse varius enim in eros elementum tristique. Duis cursus, mi
            quis viverra ornare, eros dolor.</span
          >
        </div>
      </div>
      <!-- blog hero -->
      <div class="d-flex justify-content-center">
        <div class="rounded-3 w-80 herostyle">
          <div class="row px-4 py-3">
            <div class="col-md-6 py-4 col-lg-6 col-xl-6 xol-xxl-6">
              <div>
                <!-- tile -->
                <div class="pb-4">
                  <span class="fs-190 fw-bold">Trending Post</span>
                </div>
                <div>
                  <h5 class="fontbold">
                    The best places to visit this Month for your vacation
                  </h5>
                </div>
                <!-- intro text -->
                <div class="py-4">
                  <span
                    >Over the past few months, we’ve added several new features
                    to SaaS Invoicing to help any business get paid faster and
                    streamline their collection workflows.</span
                  >
                </div>
                <!-- who uplaoded it -->
                <div class="">
                  <small class="fs-170 fw-bold"
                    >Luke Matthews l November 8, 2021</small
                  >
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-6 col-xl-6 xol-xxl-6">
              <!-- image -->
              <div>
                <img
                  src="@/assets/images/people-working-in-front-of-the-computer-3184357.svg"
                  class="rounded-3 w-100"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- all post -->
      <div>
        <!-- title -->
        <div class="text-center">
          <h2 class="fontbold pt-5 pb-2 blue">All posts</h2>
        </div>
        <!-- blog post -->
        <div class="">
          <div class="row">
            <div
              v-for="(siglbog, index) in blogp"
              :key="index"
              class="col-lg-4 col-md-4 col-xl-4 col-xxl-4"
            >
              <div>
                <!-- blog image -->
                <div>
                  <img
                    :src="require(`@/assets/images/${siglbog.image}`)"
                    alt=""
                    class="w-100"
                  />
                </div>
                <div class="p-2">
                  <!-- blog title -->
                  <div>
                    <h5 class="fw-bold fontbold py-2">
                      {{ siglbog.blogtitle }}
                    </h5>
                  </div>
                  <!-- blog description -->
                  <div>
                    <span class="fs-200">{{ siglbog.shorts }}</span>
                  </div>
                  <!-- author/date -->
                  <div class="fs-190 fw-bold py-2">
                    <div class="d-flex align-items-center">
                      <!-- author -->
                      <div class="">
                        <span> {{ siglbog.author }}</span>
                      </div>
                      <!-- date -->
                      <div>
                        <span> {{ siglbog.date }}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- join us -->
      <div class="w-40 text-center m-auto">
        <!-- title -->
        <div class="py-3">
          <span class="fs-190 fw-bold">JOIN TODAY</span>
        </div>
        <div>
          <h4 class="fw-bold blue">Travel with us and also Get visa tips today</h4>
        </div>
        <!-- signup button -->
        <div class="py-2">
          <nuxt-link to="/auth/register" class="text-decoration-none text-reset ">
            <div class="bggreen px-3 py-2 w-30 m-auto rounded-1">
              <span class=" white fw-bold fs-200">Sign Up</span>
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import post from '@/json/bloglist.json'
export default {
  data() {
    return {
      blogp: post,
    }
  },
}
</script>

<style scoped>
.herostyle {
  border: 1px solid var(--clr-blue3) !important;
}
</style>
