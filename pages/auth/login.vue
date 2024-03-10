<template>
  <div>
    <div class="font container">
      <div class="w-45 mob-width text-center m-auto">
        <!-- title -->
        <div class="py-4">
          <h2 class="fontbold">Hi there!</h2>
          <span class="fs-250">Have we met before? Login</span>
        </div>
        <!-- form -->
        <div>
          <!-- sign in with google -->
          <!-- <div
            class="d-flex align-items-center position-relative bgblue2 p-1 rounded-1"
          >
            <div class="bgwhite rounded-1 p-1" style="width: 35px">
              <img
                src="@/assets/icon/google-icon-svgrepo-com 1.svg"
                alt=""
                style="width: 25px"
              />
            </div>
            <div class="white googleposition fs-200 fw-bold">
              <span class="">Sign in with Google</span>
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
                  @input="validatelogin"
                  @blur="validatelogin"
                  v-model="login.email"
                  type="email"
                  class="rounded-1 p-2 w-100"
                  placeholder="Email address"
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

              <!--Password -->
              <div class="py-2">
                <input
                  @input="validatelogin"
                  @blur="validatelogin"
                  v-model="login.password"
                  autocomplete="false"
                  type="password"
                  class="rounded-1 p-2 w-100"
                  placeholder="Password"
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

              <div
                :disabled="disabled"
                :class="{
                  'button-disabled': disabled,
                  'button-enabled': !disabled,
                }"
                @click="clicktologin"
                class="bggreen rounded-1 d-flex align-items-center justify-content-center w-100 p-2 my-2 white text-center"
              >
                <div class="px-5">
                  <span role="button" class="fw-bold fs-200">Login</span>
                </div>
                <div class="">
                  <b-spinner small v-show="loader" type="grow"></b-spinner>
                </div>
              </div>
              <!-- forgot password  -->
              <div class="py-2">
                <span class="fs-170">Forgot my password?</span>
                <br />
                <span class="fs-170"
                  >Don’t have an account?
                  <nuxt-link
                    to="/auth/register"
                    class="text-decoration-none text-reset blue2"
                    >Register here</nuxt-link
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
      loader: false,
      disabled: true,
      error: null,
      login: {
        email: "",
        password: "",
      },
      validation: {
        valid: {
          email: "",
          password: "",
        },
        invalid: {
          email: "",
          password: "",
        },
      },
    };
  },
  methods: {
    validEmail(email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    validatelogin() {
      if (!this.login.email) {
        this.validation.invalid.email = "Please enter email or phone Number!";
      } else if (!this.validEmail(this.login.email)) {
        this.validation.invalid.email = "Please enter a valid email!";
        this.validation.valid.email = "";
        // alert(this.validation.invalid.email);
      } else {
        this.validation.invalid.email = "";
        this.validation.valid.email = "Email is valid.";
      }

      if (!this.login.password) {
        this.validation.invalid.password = "Please enter password!";
        this.validation.valid.password = "";
      } else if (this.login.password.length < 8) {
        this.validation.invalid.password = "Please enter min. of 8 characters!";
        this.validation.valid.password = "";
        // alert(this.validation.invalid.password);
      } else {
        this.validation.invalid.password = "";
        this.validation.valid.password = "Password is OK.";
      }
      if (this.validation.valid.email && this.validation.valid.password) {
        this.disabled = false;
      }
      console.log(this.validation.invalid.password);
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
    async clicktologin() {
      this.loader = true;

      try {
         const response = await this.$axios.$get("/user", this.login);
        this.$toast.info('Logging in...', {
          position: 'top-center',
          duration: 3000,
        })
        await this.$auth.loginWith("local", {
          data: {
            email: this.login.email,
            password: this.login.password,
          },
        });
        alert("success");
        // this.$toast.success('Login Successful', {
        //   position: 'top-center',
        //   duration: 2000,
        // })
        this.loader = false;
        this.$router.push("/");
      } catch (e) {
        // this.error = e.response.data.message
        console.log(e);
        this.loader = false;
        // this.$toast.error(
        //   'Authentication Failed! email or password incorrect',
        //   {
        //     position: 'top-center',
        //     duration: 2000,
        //   }
        // )
        alert("failed");
      }
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
  font-size: 0.9rem !important;
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
