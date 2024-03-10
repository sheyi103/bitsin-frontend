<template>
  <div>
    <div class="font container">
      <div class="w-45 mob-width text-center m-auto">
        <!-- title -->
        <div class="py-4">
          <h2 class="fontbold">Create an account</h2>
          <span class="fs-250"
            >Save an average of 15% on thousands of flight booking as a member—it’s always
            free.</span
          >
        </div>
        <!-- form -->
        <div>
          <!-- sign up with google -->
          <!-- <div class="d-flex align-items-center position-relative bgblue2 p-1 rounded-1">
            <div class="bgwhite rounded-1 p-1" style="width: 35px">
              <img
                src="@/assets/icon/google-icon-svgrepo-com 1.svg"
                alt=""
                style="width: 25px"
              />
            </div>
            <div class="white googleposition fs-200 fw-bold">
              <span class="">Sign up with Google</span>
            </div>
          </div>
          <div class="py-3">
            <span>or</span>
          </div> -->
          <!-- forms -->
          <div>
            <form action="">
              <!-- email -->
              <div class="py-2">
                <input
                  autocomplete="false"
                  type="email"
                  class="rounded-1 p-2 w-100"
                  placeholder="Email address"
                  v-model="registerform.email"
                  @input="validateinput('email')"
                  @blur="validateinput('email')"
                  :class="{
                    'is-valid': validation.valid.email,
                    'is-invalid': validation.invalid.email,
                  }"
                />
                <div class="text-success text-start fs-200" v-if="validation.valid.email">
                  {{ validation.valid.email }}
                </div>

                <div
                  class="text-danger text-start fs-200"
                  v-if="validation.invalid.email"
                >
                  {{ validation.invalid.email }}
                </div>
              </div>
              <!-- first name -->
              <div class="py-2">
                <input
                  autocomplete="false"
                  type="text"
                  class="rounded-1 p-2 w-100"
                  placeholder="First Name"
                  v-model="registerform.firstname"
                  @input="validateinput('firstname')"
                  @blur="validateinput('firstname')"
                  :class="{
                    'is-valid': validation.valid.firstname,
                    'is-invalid': validation.invalid.firstname,
                  }"
                />
                <div
                  class="text-success text-start fs-200"
                  v-if="validation.valid.firstname"
                >
                  {{ validation.valid.firstname }}
                </div>

                <div
                  class="text-danger text-start fs-200"
                  v-if="validation.invalid.firstname"
                >
                  {{ validation.invalid.firstname }}
                </div>
              </div>
              <!-- Last Name -->
              <div class="py-2">
                <input
                  autocomplete="false"
                  type="text"
                  class="rounded-1 p-2 w-100"
                  placeholder="Last Name"
                  v-model="registerform.lastname"
                  @input="validateinput('lastname')"
                  @blur="validateinput('lastname')"
                  :class="{
                    'is-valid': validation.valid.lastname,
                    'is-invalid': validation.invalid.lastname,
                  }"
                />
                <div
                  class="text-success text-start fs-200"
                  v-if="validation.valid.lastname"
                >
                  {{ validation.valid.lastname }}
                </div>

                <div
                  class="text-danger text-start fs-200"
                  v-if="validation.invalid.lastname"
                >
                  {{ validation.invalid.lastname }}
                </div>
              </div>
              <!--Password -->
              <div class="py-2">
                <input
                  autocomplete="false"
                  type="password"
                  class="rounded-1 p-2 w-100"
                  placeholder="Password"
                  v-model="registerform.password"
                  @input="validateinput('password')"
                  @blur="validateinput('password')"
                  :class="{
                    'is-valid': validation.valid.password,
                    'is-invalid': validation.invalid.password,
                  }"
                />
                <div
                  class="text-success text-start fs-200"
                  v-if="validation.valid.password"
                >
                  {{ validation.valid.password }}
                </div>

                <div
                  class="text-danger text-start fs-200"
                  v-if="validation.invalid.password"
                >
                  {{ validation.invalid.password }}
                </div>
              </div>
              <!--confirm Password -->
              <div class="py-2">
                <input
                  autocomplete="false"
                  type="password"
                  class="rounded-1 p-2 w-100"
                  placeholder="Confirm password"
                  v-model="registerform.confirmpassword"
                  @input="validateinput('confirmpassword')"
                  @blur="validateinput('  confirmpassword')"
                  :class="{
                    'is-valid': validation.valid.confirmpassword,
                    'is-invalid': validation.invalid.confirmpassword,
                  }"
                />
                <div
                  class="text-success text-start fs-200"
                  v-if="validation.valid.confirmpassword"
                >
                  {{ validation.valid.confirmpassword }}
                </div>

                <div
                  class="text-danger text-start fs-200"
                  v-if="validation.invalid.confirmpassword"
                >
                  {{ validation.invalid.confirmpassword }}
                </div>
              </div>
              <!-- instruction  -->
              <div class="py-2">
                <span class="fs-170"
                  >By creating an account, I agree to the Bitsin Terms and Conditions,
                  Privacy Statement.</span
                >
              </div>

              <div
                role="button"
                :disabled="disabled"
                :class="{
                  'button-disabled': disabled,
                  'button-enabled': !disabled,
                }"
                @click="resgister"
                class="bggreen d-flex align-items-center justify-content-center rounded-1 w-100 p-2 my-2 white text-center"
              >
                <div class="px-5">
                  <span class="fw-bold fs-200">Register</span>
                </div>
                <div class="">
                  <b-spinner small v-show="loader" type="grow"></b-spinner>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <!-- registeration succesful alert -->
      <!-- <div class="w-45 text-center m-auto"> -->
      <!-- check icon -->
      <!-- <div class="py-2">
          <img
            src="@/assets/icon/success-svgrepo-com 1.svg"
            alt=""
            class=""
            style="width: 30px"
          />
        </div> -->
      <!-- registeration successful text -->
      <!-- <div>
          <div>
            <h6 class="fw-bold">Registration Successful</h6>
          </div>
          <div class="fs-200 py-2">
            <span
              >We are happy to let you know that your account has been created
              successfully.</span
            >
          </div>
          <div class="fs-200 py-2">
            <span>
              Kindly check your email and open the link we sent to verify your
              email.</span
            >
          </div>
        </div> -->
      <!-- </div> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loader: false,
      disabled: true,
      registerform: {
        email: "",
        firstname: "",
        lastname: "",
        password: "",
        confirmpassword: "",
        name: "",
      },
      validation: {
        valid: {
          email: "",
          firstname: "",
          lastname: "",
          password: "",
          confirmpassword: "",
        },
        invalid: {
          email: "",
          firstname: "",
          lastname: "",
          password: "",
          confirmpassword: "",
        },
      },
    };
  },
  methods: {
    validEmail(email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    // validate() {
    //   // email
    //   if (!this.register.email) {
    //     this.validation.invalid.email = 'Please fill out this field'
    //     this.validation.valid.email = ''
    //   } else if (!this.validEmail(this.register.email)) {
    //     this.validation.invalid.email = 'Please enter a valid email address'
    //     this.validation.valid.email = ''
    //   } else {
    //     this.validation.valid.email = 'Email is Valid'
    //     this.validation.invalid.email = ''
    //   }
    //   // firstname
    //   if (!this.register.firstname) {
    //     this.validation.invalid.firstname = 'Please fill out this field'
    //     this.validation.valid.firstname = ''
    //   } else {
    //     this.validation.valid.firstname = 'firstname is Valid'
    //     this.validation.invalid.firstname = ''
    //   }
    //   // lastname
    //   if (!this.register.lastname) {
    //     this.validation.invalid.lastname = 'Please fill out this field'
    //     this.validation.valid.lastname = ''
    //   } else {
    //     this.validation.valid.lastname = 'lastname is Valid'
    //     this.validation.invalid.lastname = ''
    //   }
    //   // password
    //   if (!this.register.password) {
    //     this.validation.invalid.password = 'Please enter password!'
    //     this.validation.valid.password = ''
    //   } else if (this.register.password.length < 8) {
    //     this.validation.invalid.password = 'Please enter min. of 8 characters!'
    //     this.validation.valid.password = ''
    //   } else if (this.register.password.length > 8) {
    //     this.validation.valid.password = 'Your password is correct'
    //     this.validation.invalid.password = ''
    //   } else if (this.register.password != this.register.confirmpassword) {
    //     this.validation.invalid.confirmpassword = 'Your password doesnt match  '
    //     this.validation.valid.confirmpassword = ''
    //   } else {
    //     this.validation.valid.password = 'Password is valid'
    //     this.validation.valid.confirmpassword = 'Password is valid'
    //     this.validation.invalid.password = ''
    //     this.validation.invalid.confirmpassword = ''
    //   }
    //   const stepCompleted =
    //     this.validation.valid.email &&
    //     this.validation.valid.firstname &&
    //     this.validation.valid.lastname &&
    //     this.validation.valid.password &&
    //     this.validation.valid.confirmpassword
    //   if (stepCompleted) {
    //     this.resgister()
    //   }
    // },
    validateinput() {
      // email
      if (!this.registerform.email) {
        this.validation.invalid.email = "Please fill out this field";
        this.validation.valid.email = "";
      } else if (!this.validEmail(this.registerform.email)) {
        this.validation.invalid.email = "Please enter a valid email address";
        this.validation.valid.email = "";
      } else {
        this.validation.valid.email = "Email is Valid";
        this.validation.invalid.email = "";
      }
      // firstname
      if (!this.registerform.firstname) {
        this.validation.invalid.firstname = "Please fill out this field";
        this.validation.valid.firstname = "";
      } else {
        this.validation.valid.firstname = "firstname is Valid";
        this.validation.invalid.firstname = "";
      }
      // lastname
      if (!this.registerform.lastname) {
        this.validation.invalid.lastname = "Please fill out this field";
        this.validation.valid.lastname = "";
      } else {
        this.validation.valid.lastname = "lastname is Valid";
        this.validation.invalid.lastname = "";
      }
      // password
      if (!this.registerform.password) {
        this.validation.invalid.password = "Please enter password!";
        this.validation.valid.password = "";
      } else if (this.registerform.password.length < 8) {
        this.validation.invalid.password = "Please enter min. of 8 characters!";
        this.validation.valid.password = "";
      } else if (this.registerform.password.length >= 8) {
        this.validation.valid.password = "Your password is correct";
        this.validation.invalid.password = "";
      } else if (this.registerform.password != this.registerform.confirmpassword) {
        this.validation.invalid.confirmpassword = "Your password doesnt match  ";
        this.validation.valid.confirmpassword = "";
      } else {
        this.validation.valid.password = "Password is valid";
        this.validation.valid.confirmpassword = "Password is valid";
        this.validation.invalid.password = "";
        this.validation.invalid.confirmpassword = "";
      }
      if (
        this.validation.valid.email &&
        this.validation.valid.firstname &&
        this.validation.valid.lastname &&
        this.validation.valid.password &&
        this.validation.valid.confirmpassword
      ) {
        this.disabled = false;
      } else {
        this.disabled = true;
      }
    },
    async resgister() {
      this.loader = true;
      this.registerform.name =
        this.registerform.firstname + " " + this.registerform.lastname;
      const Data = {
        title: "Error while Validating this form",
        message: "",
        type: "error",
      };
      try {
        const response = await this.$axios.$post("/register", this.registerform);
        if (response.status == 422) {
          Data.message = response.errors[0];
          this.testnotification(Data);
          this.loader = false;
        }
        if (response.code == 200) {
          try {
            this.$auth.loginWith("local", {
              data: this.registerform,
            });
            this.$router.push("/");
          } catch (e) {
            this.loader = false;
          }
        }
      } catch (e) {
        this.loader = false;
      }
    },
    testnotification(data) {
      this.$notify({
        group: "error",
        title: data.title,
        text: data.message,
        position: "top left",
        duration: 2000,
        ignoreDuplicates: true,
        type: data.type,
      });
    },
    clearValidation() {
      this.validation.valid.email = "";
      this.validation.valid.firstname = "";
      this.validation.valid.lastname = "";
      this.validation.valid.password = "";
      this.validation.valid.confirmpassword = "";
      this.validation.invalid.email = "";
      this.validation.invalid.firstname = "";
      this.validation.invalid.lastname = "";
      this.validation.invalid.password = "";
      this.validation.invalid.confirmpassword = "";
      this.$forceUpdate();
    },
  },
};
</script>

<style scoped>
/* input spaces */
input,
textarea {
  border: 0.5px solid rgb(199, 199, 199);
}
input:focus {
  outline: 0.5px solid var(--clr-blue2);
  font-size: 1rem !important;
}
textarea:focus {
  outline: none;
  font-size: 0.8rem !important;
}
::placeholder {
  font-size: 0.8rem !important;
}
/* sign up with google text */
.googleposition {
  position: absolute;
  left: 0rem;
  right: 0rem;
}
@media (max-width: 576px) {
  .mob-width {
    width: 100% !important;
  }
}
</style>
