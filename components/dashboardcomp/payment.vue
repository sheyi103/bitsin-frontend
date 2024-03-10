<template>
  <div>
    <!-- payment -->
    <div class="container pt-3 font">
      <div>
        <!-- title -->
        <div class="py-2 blue">
          <h6 class="fs-200 fw-bold">Payment</h6>
        </div>
        <!-- payment card -->
        <div class="pt-3">
          <div class="rounded-2 p-3 bgwhite shadow-sm">
            <div class="row">
              <div class="col-lg-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <div class="fs-200">
                  <!-- text -->
                  <div class="py-2">
                    <span class="blue fw-bold">Payment Card</span>
                  </div>
                  <div>
                    <span class="grey"
                      >Choose your preferred payment card for making future
                      payments</span
                    >
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <div>
                  <!-- visa card -->
                  <div>
                    <div
                      class="rounded-2 px-2 py-3 shadow-sm d-flex justify-content-between"
                    >
                      <div class="d-flex">
                        <!-- visa icon -->
                        <div class="px-2">
                          <svg
                            width="33"
                            height="33"
                            viewBox="0 0 33 33"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M14.5735 21.3448H12.2344L13.6974 12.5347H16.0364L14.5735 21.3448Z"
                              fill="#283673"
                            />
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M23.0557 12.7501C22.5944 12.5718 21.8626 12.375 20.9577 12.375C18.6478 12.375 17.0212 13.5746 17.0112 15.2897C16.992 16.5551 18.1758 17.2579 19.0612 17.6798C19.9662 18.111 20.2738 18.3924 20.2738 18.7767C20.2646 19.3669 19.5425 19.639 18.8691 19.639C17.9352 19.639 17.4348 19.4987 16.6744 19.1703L16.3664 19.0296L16.0391 21.0073C16.5877 21.2507 17.5984 21.4667 18.6478 21.4761C21.1022 21.4761 22.7 20.2951 22.719 18.4674C22.7283 17.4645 22.1032 16.696 20.7555 16.068C19.9374 15.6649 19.4364 15.3931 19.4364 14.9806C19.446 14.6057 19.8601 14.2216 20.7837 14.2216C21.5441 14.2028 22.1028 14.3808 22.5261 14.559L22.7376 14.6525L23.0557 12.7501V12.7501V12.7501Z"
                              fill="#283673"
                            />
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M27.24 12.5347H29.0493L30.9363 21.3447H28.7706C28.7706 21.3447 28.5586 20.3324 28.4915 20.0231H25.4882C25.4014 20.2573 24.9973 21.3447 24.9973 21.3447H22.543L26.0174 13.2656C26.2581 12.6939 26.682 12.5347 27.24 12.5347ZM27.0963 15.7587C27.0963 15.7587 26.355 17.7176 26.1624 18.2237H28.1067C28.0105 17.7832 27.5675 15.6744 27.5675 15.6744L27.404 14.9152C27.3352 15.1107 27.2357 15.3794 27.1685 15.5607C27.123 15.6836 27.0924 15.7663 27.0963 15.7587Z"
                              fill="#283673"
                            />
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M10.2829 12.5347L7.9921 18.5423L7.74178 17.3239C7.31827 15.918 5.99004 14.3905 4.50781 13.631L6.60606 21.3355H9.0796L12.7563 12.5347H10.2829V12.5347V12.5347Z"
                              fill="#283673"
                            />
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M5.86439 12.5347H2.101L2.0625 12.7127C4.99818 13.4438 6.94243 15.2061 7.74123 17.3243L6.92311 13.2752C6.78842 12.7126 6.3745 12.5532 5.86439 12.5347V12.5347Z"
                              fill="#283673"
                            />
                          </svg>
                        </div>
                        <!-- card details -->
                        <div class="px-1">
                          <div class="fw-bold blue fs-200">
                            <span>Visa ending 4331</span>
                          </div>
                          <div class="d-flex grey py-1 fs-170">
                            <span>Expiry </span><span>09/</span
                            ><span>2024</span>
                          </div>
                          <!-- edit card -->
                          <div class="d-flex fs-170">
                            <div>
                              <span class="grey">Primary Card</span>
                            </div>
                            <div role="button" class="px-2 blue2">
                              <span>Edit</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- radio button -->
                      <div role="button">
                        <div>
                          <input type="radio" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- add more card -->
                  <div>
                    <b-button v-b-modal.modal-1>
                      <div class="p-2">
                        <span class="grey fs-170">+ Add new payment card</span>
                      </div></b-button
                    >
                  </div>
                  <!-- change card form -->
                  <b-modal modal-footer="No" id="modal-1" title="BootstrapVue">
                    <div class="rounded-2 shadow-sm">
                      <div class="p-3">
                        <div class="py-3">
                          <span class="fs-200 blue fw-bold">Add New Card</span>
                        </div>
                        <!-- name on card -->
                        <div class="py-2">
                          <input
                            type="text"
                            placeholder="name on card"
                            class="rounded-2 px-2 py-1 w-100"
                          />
                        </div>
                        <!-- card number -->
                        <div class="py-2">
                          <input
                            type="text"
                            placeholder="card number"
                            class="rounded-2 px-2 py-1 w-100"
                          />
                        </div>
                        <!-- date on card and cvv -->
                        <div
                          class="d-flex py-2 justify-content-between align-items-center"
                        >
                          <div role="button">
                            <input
                              type="text"
                              placeholder="Date on card"
                              class="rounded-2 px-2 py-1 w-95"
                            />
                          </div>
                          <!-- cvv -->
                          <div role="button">
                            <input
                              type="text"
                              placeholder="cvv"
                              class="rounded-2 px-2 py-1 w-100"
                            />
                          </div>
                        </div>
                        <!-- cancel and save -->
                        <div
                          class="d-flex align-items-center pt-3 justify-content-center"
                        >
                          <div
                            role="button"
                            @click="removeeditPaymentForm"
                            class="fs-200 px-2"
                          >
                            <span>cancel</span>
                          </div>
                          <!-- cvv -->
                          <div role="button" class="">
                            <div
                              class="bggrey w-100 text-center white fw-bold py-1 px-3 fs-200 rounded-2"
                            >
                              <span>save</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </b-modal>
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
export default {
  data() {
    return {
      editPaymentCardForm: false,
    }
  },
  methods: {
    showpaymentcard() {
      this.editPaymentCardForm = true
    },
    removeeditPaymentForm() {
      this.editPaymentCardForm = false
    },
  },
}
</script>

<style></style>
