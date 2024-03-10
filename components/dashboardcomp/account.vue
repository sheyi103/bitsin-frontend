<template>
  <div>
    <div class="container font">
      <div>
        <div>
          <!-- title -->
          <div>
            <h6 class="blue fw-bold py-2">Account</h6>
          </div>
          <div class="py-1 fs-200 grey">
            <span>Update your Bistin account settings</span>
          </div>
        </div>
        <!-- profile and security session -->
        <div>
          <div class="shadow-sm py-2 px-4 rounded-2">
            <!-- buttons -->
            <div
              class="d-flex p-2 blue2 border-bottom fs-200 fw-bold align-items-center"
            >
              <div class="px-2">
                <span>Profile</span>
              </div>
              <div class="px-2">
                <span>Security</span>
              </div>
            </div>
            <!-- general information -->
            <div>
              <div>
                <!-- title -->
                <div class="blue py-4">
                  <h6 class="fw-bold fs-200">General information</h6>
                </div>
                <!-- change profile picture -->
                <div class="py-2">
                  <div class="d-flex ">
                    <!-- profile -->
                    <div>
                      <div>
                        <img src="@/assets/images/Ellipse 454.png" alt="" style="width:100px" />
                      </div>
                    </div>
                    <div>
                      <div class="py-3">
                        <span class="fw-bold fs-200">Profile photo</span>
                      </div>
                      <div class="d-flex align-items-center">
                        <div>
                          <span class="bggrey fs-170 white p-2 rounded-2"
                            >Upload new image</span
                          >
                        </div>
                        <div class="px-2">
                          <div class="border rounded-2 fs-170 p-1">
                            <span>Remove</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- form -->
                <div>
                  <form
                    class="w-50 pt-2"
                    action="
                    "
                  >
                    <!-- first name -->
                    <div
                      class="d-flex p-2 align-items-center justify-content-between"
                    >
                      <div>
                        <label for="" class="fs-170">First name</label>
                      </div>
                      <div class="px-2 w-80">
                        <input
                          type="text"
                          class="py-1 w-100 px-2 shadow-sm rounded-2"
                          placeholder="Enter your firstname"
                        />
                      </div>
                    </div>
                    <!-- Last name -->
                    <div
                      class="d-flex p-2 align-items-center justify-content-between"
                    >
                      <div>
                        <label for="" class="fs-170">Last name</label>
                      </div>
                      <div class="px-2 w-80">
                        <input
                          type="text"
                          class="py-1 w-100 px-2 shadow-sm rounded-2"
                          placeholder="Enter your last name"
                        />
                      </div>
                    </div>
                    <!-- Email -->
                    <div
                      class="d-flex p-2 align-items-center justify-content-between"
                    >
                      <div>
                        <label for="" class="fs-170">Email</label>
                      </div>
                      <div class="px-2 w-80">
                        <input
                          type="email"
                          class="py-1 w-100 px-2 shadow-sm rounded-2"
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>
                    <!-- Phone -->
                    <div
                      class="d-flex p-2 align-items-center justify-content-between"
                    >
                      <div>
                        <label for="" class="fs-170">Phone</label>
                      </div>
                      <div class="px-2 w-80">
                        <input
                          type="phone"
                          class="py-1 w-100 px-2 shadow-sm rounded-2"
                          placeholder="Enter your phone number"
                        />
                      </div>
                    </div>
                    <!-- save -->
                    <div class="py-2 d-flex justify-content-center">
                      <div
                        class="bggrey w-40 text-center white fw-bold py-2 px-3 fs-200 rounded-2"
                      >
                        <span>save</span>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div>
              <!-- change password -->
              <div
                class="py-3 d-flex align-items-center justify-content-between"
              >
                <div>
                  <div class="py-2">
                    <h6 class="fs-200 blue2 fw-bold">Password</h6>
                  </div>
                  <div class="grey fs-170">
                    <span>Last changed 19 March, 2022</span>
                  </div>
                </div>
                <!-- change button -->
                <div>
                  <div class="rounded-2 bgblue4 fs-200 py-1 px-3 white">
                    <span>Change</span>
                  </div>
                </div>
              </div>
              <!-- change password -->
              <div
                class="py-3 d-flex align-items-center justify-content-between"
              >
                <div>
                  <div class="py-2">
                    <h6 class="fs-200 blue2 fw-bold">Two-step Verification</h6>
                  </div>
                  <div class="grey fs-170">
                    <span>Last changed 19 March, 2022</span>
                  </div>
                </div>
                <!-- change button -->
                <div>
                  <div class="rounded-2 d-flex bgblue4 fs-200 py-1 px-3 white">
                    <div class="">
                      <span>on</span>
                    </div>
                    <div class="form-check form-switch">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckChecked"
                        checked
                      />
                    </div>
                  </div>
                </div>
              </div>
              <!-- change card form -->
              <div class="rounded-2 w-50 shadow-sm">
                <div class="p-3">
                  <div class="py-3">
                    <span class="fs-200 blue fw-bold">Change Password</span>
                  </div>
                  <!-- Old password-->
                  <div class="py-2">
                    <input
                      type="password"
                      placeholder="Old password"
                      class="rounded-2 px-2 py-1 w-100"
                    />
                  </div>
                  <!-- New passwordr -->
                  <div class="py-2">
                    <input
                      type="password"
                      placeholder="New password"
                      class="rounded-2 px-2 py-1 w-100"
                    />
                  </div>
                  <!-- Confirm new password -->
                  <div class="py-2">
                    <input
                      type="password"
                      placeholder="Confirm new password"
                      class="rounded-2 px-2 py-1 w-100"
                    />
                  </div>

                  <!-- cancel and save -->
                  <div class="d-flex align-items-center justify-content-center">
                    <div class="fs-200 px-2">
                      <span>cancel</span>
                    </div>
                    <!-- cvv -->
                    <div class="">
                      <div
                        class="bggrey w-100 text-center white fw-bold py-1 px-3 fs-200 rounded-2"
                      >
                        <span>save</span>
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
  </div>
</template>

<script>
export default {}
</script>

<style></style>
