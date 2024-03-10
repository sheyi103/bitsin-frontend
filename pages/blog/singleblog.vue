<template>
  <div>
    <div class="container font">
      <!-- page intro -->
      <div class="w-60 m-auto text-center py-5">
        <!-- title -->
        <div>
          <h2 class="fontbold blue">
            Find the best places to visit this month on your vacation
          </h2>
        </div>
        <!-- author -->
        <div>
          <span class="fs-200 fw-bold">Luke Matthews l November 8, 2021</span>
        </div>
      </div>
      <!-- hero image -->
      <div>
        <div class="w-80 m-auto">
          <img src="@/assets/images/blogimage.png" class="w-100" alt="" />
        </div>
      </div>
      <!-- blog information -->
      <div class="py-5">
        <!-- title -->
        <div class="text-center pb-3">
          <h3 class="fw-bold">Get the best of the world you live in</h3>
        </div>
        <!-- info -->
        <div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores
            dolorum magnam natus sed hic eveniet accusantium explicabo maxime
            molestias temporibus, eum ea deserunt rem? Sed obcaecati, unde
            aspernatur aliquam distinctio dignissimos, nisi velit, voluptatem
            facere nam qui et laboriosam ea. Cupiditate dolorum ipsum laborum
            quod sapiente soluta consectetur aspernatur. Odio?
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In quod
            dolorem delectus nesciunt laudantium architecto distinctio ratione
            eveniet fuga esse at sit reprehenderit error temporibus nostrum
            corporis, quaerat, pariatur hic laboriosam omnis modi earum qui
            sapiente. Eum odit nobis quidem illo illum excepturi facilis, fuga
            minus molestias quasi? Eius, error.
          </p>
        </div>
      </div>
      <!-- read more post -->
      <div>
        <!-- title -->
        <div>
          <h3 class="fw-bold text-center">Read more posts</h3>
        </div>
      </div>
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

<style></style>
