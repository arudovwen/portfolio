
<template>
  <v-container fluid class="pb-15">
    <v-row class="about mb-5 mb-md-10 h-100">
      <v-col cols="12" class="h-100 d-flex justify-center align-center">
        <div class="main">
          <div class="logincontainer a-container" id="a-container">
            <v-form
              v-model="valid"
              lazy-validation
              ref="signupForm"
              class="form"
              id="a-form"
              @submit.stop.prevent="register"
            >
              <h2 class="form_title title primary--text">Create Account</h2>
              <div class="form__icons">
                <v-btn
                  @click="socialLogin('facebook')"
                  class="form_icon mr-3"
                  fab
                  dark
                  small
                  color="indigo"
                >
                  <v-icon>mdi-facebook</v-icon>
                </v-btn>
                <v-btn
                  @click="socialLogin('google')"
                  class="form_icon mr-3"
                  fab
                  dark
                  small
                  color="red"
                >
                  <v-icon>mdi-google</v-icon>
                </v-btn>
                <v-btn
                  @click="socialLogin('twitter')"
                  fab
                  light
                  small
                  color="blue"
                >
                  <v-icon color="white">mdi-twitter</v-icon>
                </v-btn>
              </div>
              <span class="form__span primary--text"
                >or use email for registration</span
              ><v-text-field
                class="form__input mb-7"
                type="text"
                v-model="name"
                :rules="nameRules"
                required
                placeholder="Username"
              ></v-text-field>
              <v-text-field
                class="form__input mb-7"
                v-model="email"
                :rules="emailRules"
                required
                type="email"
                placeholder="Email"
              ></v-text-field>
              <v-text-field
                class="form__input"
                v-model="password"
                :rules="passwordRules"
                required
                type="password"
                placeholder="Password"
              ></v-text-field>

              <v-btn
                class="mt-5 d-sm-none switch__button button switch-btn"
                :loading="loading"
                :disabled="loading"
                elevation="10"
                rounded
                color="primary"
                type="submit"
              >
                SIGN UP
                <template v-slot:loader>
                  <span class="custom-loader">
                    <v-icon light>mdi-cached</v-icon>
                  </span>
                </template>
              </v-btn>
              <v-btn
                class="mt-5 d-none d-sm-block switch__button button switch-btn"
                :loading="loading"
                :disabled="loading"
                elevation="10"
                rounded
                color="primary"
                type="submit"
              >
                SIGN UP
                <template v-slot:loader>
                  <span class="custom-loader">
                    <v-icon light>mdi-cached</v-icon>
                  </span>
                </template>
              </v-btn>

              <div class="d-flex d-sm-none align-center mt-5">
                Already have an account?
                <v-btn
                  plain
                  color="secondary"
                  style="width: 40px"
                  dark
                  @click="toggleAuth"
                >
                  SIGN IN
                </v-btn>
              </div>
            </v-form>
          </div>
          <div class="logincontainer b-container" id="b-container">
            <v-form
              ref="form"
              v-model="valid"
              lazy-validation
              class="form"
              id="b-form"
              @submit.stop.prevent="userlogin"
            >
              <h2 class="form_title title primary--text">Sign in to Website</h2>
              <div class="form__icons">
                <v-btn
                  @click="socialLogin('facebook')"
                  class="form_icon mr-3"
                  fab
                  dark
                  small
                  color="indigo"
                >
                  <v-icon>mdi-facebook</v-icon>
                </v-btn>
                <v-btn
                  @click="socialLogin('google')"
                  class="form_icon mr-3"
                  fab
                  dark
                  small
                  color="red"
                >
                  <v-icon>mdi-google</v-icon>
                </v-btn>
                <v-btn
                  @click="socialLogin('twitter')"
                  fab
                  light
                  small
                  color="blue"
                >
                  <v-icon color="white">mdi-twitter</v-icon>
                </v-btn>
              </div>
              <span class="form__span primary--text"
                >or use your email account</span
              >
              <v-text-field
                class="form__input mb-7"
                v-model="user.email"
                :rules="emailRules"
                required
                type="email"
                placeholder="Email"
              ></v-text-field>
              <v-text-field
                class="form__input"
                v-model="user.password"
                :rules="passwordRules"
                required
                type="password"
                placeholder="Password"
              ></v-text-field>

              <v-btn
                plain
                to="/forgot-password"
                class="form__link primary--text"
                >Forgot your password?</v-btn
              >

              <v-btn
                class="mt-5 d-sm-none switch__button button switch-btn"
                :loading="loading"
                :disabled="loading"
                elevation="10"
                rounded
                color="primary"
                type="submit"
              >
                SIGN IN
                <template v-slot:loader>
                  <span class="custom-loader">
                    <v-icon light>mdi-cached</v-icon>
                  </span>
                </template>
              </v-btn>

              <v-btn
                class="mt-5 d-none d-sm-block switch__button button switch-btn"
                :loading="loading"
                :disabled="loading"
                elevation="10"
                rounded
                type="submit"
                color="primary"
              >
                SIGN IN
                <template v-slot:loader>
                  <span class="custom-loader">
                    <v-icon light>mdi-cached</v-icon>
                  </span>
                </template>
              </v-btn>

              <div class="d-flex d-sm-none align-center mt-5">
                Don't have an account?
                <v-btn
                  plain
                  color="secondary"
                  style="width: 40px"
                  dark
                  @click="toggleAuth"
                >
                  SIGN UP
                </v-btn>
              </div>
            </v-form>
          </div>

          <div class="switch d-none d-sm-flex" id="switch-cnt">
            <div class="switch__circle"></div>
            <div class="switch__circle switch__circle--t"></div>
            <div class="switch__container" id="switch-c1">
              <h2 class="switch__title title primary--text">Welcome Back !</h2>
              <p class="switch__description description primary--text">
                To keep connected with us please login with your personal info
              </p>
              <v-btn
                rounded
                color="secondary"
                elevation="10"
                dark
                class="switch__button button switch-btn"
                @click="toggleAuth"
              >
                SIGN IN
              </v-btn>
            </div>
            <div class="switch__container is-hidden" id="switch-c2">
              <h2 class="switch__title title primary--text">Hello Friend !</h2>
              <p class="switch__description description primary--text">
                Enter your personal details and start journey with us
              </p>
              <v-btn
                rounded
                elevation="10"
                color="secondary"
                dark
                class="switch__button button switch-btn"
                @click="toggleAuth"
              >
                SIGN UP
              </v-btn>
            </div>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";
export default {
  data() {
    return {
      loader: null,
      loading: false,
      authDetails: {},
      user: {
        email: "",
        password: "",
      },
      login: true,
      valid: true,
      name: "",
      nameRules: [
        (v) => !!v || "Name is required",
        (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
      ],
      email: "",
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
      password: "",
      passwordRules: [
        (v) => !!v || "Password is required",
        (v) => (v && v.length >= 6) || "Password must be more than 6 ",
      ],
      provider: null,
    };
  },
  watch: {},
  mounted() {},
  methods: {
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
    toggleAuth() {
      this.login = !this.login;
      let switchCtn = document.querySelector("#switch-cnt");
      let switchC1 = document.querySelector("#switch-c1");
      let switchC2 = document.querySelector("#switch-c2");
      let switchCircle = document.querySelectorAll(".switch__circle");
      let aContainer = document.querySelector("#a-container");
      let bContainer = document.querySelector("#b-container");

      switchCtn.classList.add("is-gx");
      setTimeout(function () {
        switchCtn.classList.remove("is-gx");
      }, 1500);

      switchCtn.classList.toggle("is-txr");
      switchCircle[0].classList.toggle("is-txr");
      switchCircle[1].classList.toggle("is-txr");

      switchC1.classList.toggle("is-hidden");
      switchC2.classList.toggle("is-hidden");
      aContainer.classList.toggle("is-txl");
      bContainer.classList.toggle("is-txl");
      bContainer.classList.toggle("is-z200");
    },
    userlogin() {
      this.loading = true;
      firebase
        .auth()
        .signInWithEmailAndPassword(this.user.email, this.user.password)
        .then((res) => {
          this.authDetails = res.user;

          this.$toast.success("Successfully logged in!");
          this.$router.push("/dashboard");
          this.loading = null;
        })
        .catch((error) => {
          this.$toast.error(error.message);
          this.loading = null;
        });
    },
    register() {
      this.loading = true;

      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then((data) => {
          data.user
            .updateProfile({
              displayName: this.name,
            })
            .then(() => {});
          this.$toast.success("Successfully registered! Please login.");
          this.toggleAuth();
          this.loading = false;
        })
        .catch((error) => {
          this.$toast.error(error.message);
          this.loading = false;
        });
    },

    socialLogin(social) {
      var provider;
      if (social == "google") {
        provider = new firebase.auth.GoogleAuthProvider();
      }
      if (social == "facebook") {
        provider = new firebase.auth.FacebookAuthProvider();
      }
      if (social == "twitter") {
        provider = new firebase.auth.TwitterAuthProvider();
      }
      firebase
        .auth()
        .signInWithPopup(provider)
        .then((result) => {
          // /** @type {firebase.auth.OAuthCredential} */
          var credential = result.credential;
          console.log(
            "🚀 ~ file: login.vue ~ line 423 ~ .then ~ credential",
            credential
          );

          // // This gives you a Google Access Token. You can use it to access the Google API.
          var token = credential.accessToken;
          console.log("🚀 ~ file: login.vue ~ line 427 ~ .then ~ token", token);
          // // The signed-in user info.
          var user = result.user;
          console.log("🚀 ~ file: login.vue ~ line 430 ~ .then ~ user", user);
        })
        .catch((error) => {
          // Handle Errors here.
          if (error.code) {
            this.$toast.error(error.code);
          }
          if (error.message) {
            this.$toast.error(error.message);
          }
          if (error.email) {
            this.$toast.error(error.email);
          }
          if (error.credential) {
            this.$toast.error(error.credential);
          }
        });
    },
  },
};
</script>
<style scoped lang="scss">
$bg: #edf2f0;

$neu-1: #ecf0f3;
$neu-2: #d1d9e6;

$white: #f9f9f9;
$gray: #a0a5a8;
$black: #181818;

$purple: #4b70e2;

$transition: 1.2s;

/**/
.main {
  position: relative;
  width: 1000px;
  min-width: 1000px;
  min-height: 600px;
  height: 600px;
  padding: 25px;
  background-color: $neu-1;
  box-shadow: 10px 10px 10px $neu-2, -10px -10px 10px $white;
  border-radius: 12px;
  overflow: hidden;
  @media (max-width: 1200px) {
    transform: scale(0.7);
  }
  @media (max-width: 1000px) {
    transform: scale(0.6);
  }
  @media (max-width: 800px) {
    transform: scale(0.9);
  }
}
.logincontainer {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;

  top: 0;
  width: 600px;
  height: 100%;
  padding: 25px;

  background-color: $neu-1;
  transition: $transition;

  @media (max-width: 800px) {
    width: 100%;
  }
}

.form {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;

  &__icon {
    object-fit: contain;
    width: 30px;
    margin: 0 5px;
    opacity: 0.5;
    transition: 0.15s;

    &:hover {
      opacity: 1;
      transition: 0.15s;
      cursor: pointer;
    }
  }
  &__input {
    width: 350px;
    height: 40px;
    margin: 4px 0;

    padding-left: 25px;
    font-size: 14px;
    letter-spacing: 0.15px;
    border: none;
    outline: none;

    font-family: "Montserrat", sans-serif;
    background-color: $neu-1;
    transition: 0.25s ease;
    border-radius: 8px;

    box-shadow: inset 2px 2px 4px $neu-2, inset -2px -2px 4px $white;

    &:focus {
      box-shadow: inset 4px 4px 4px $neu-2, inset -4px -4px 4px $white;
    }
  }
  &__span {
    margin-top: 30px;
    margin-bottom: 12px;
  }
  &__link {
    color: $black;
    font-size: 15px;
    margin-top: 25px;
    border-bottom: 1px solid $gray;
    line-height: 2;
  }
}
.v-input {
  width: 350px;
  height: 40px;
  margin: 4px 0;
  padding-left: 25px;
  font-size: 13px;
  letter-spacing: 0.15px;
  border: none;
  outline: none;
  font-family: "Montserrat", sans-serif;
  background-color: #ecf0f3;
  transition: 0.25s ease;
  border-radius: 8px;
  box-shadow: inset 2px 2px 4px #d1d9e6, inset -2px -2px 4px #f9f9f9;
}
.v-input {
  display: unset;
  flex: none;
}

.title {
  font-size: 34px;
  font-weight: 700;
  line-height: 3;
  color: $black;
}
.description {
  font-size: 15px;
  letter-spacing: 0.25px;
  text-align: center;
  line-height: 1.6;
}
.button {
  width: 180px;
  height: 50px;
  border-radius: 25px;
  margin-top: 50px;
  font-weight: 700;
  font-size: 15px;
  letter-spacing: 1.15px;

  background-color: $purple;
  color: $white;
  box-shadow: 8px 8px 16px $neu-2, -8px -8px 16px $white;

  border: none;
  outline: none;
}
/**/

.a-container {
  z-index: 100;
  left: calc(100% - 600px);
  @media (max-width: 800px) {
    left: 0;
  }
}
.b-container {
  left: calc(100% - 600px);
  z-index: 0;
  @media (max-width: 800px) {
    left: 0;
  }
}
.v-btn:not(.v-btn--round).v-size--default {
  height: 44px;
  @media (max-width: 800px) {
    width: 100%;
  }
}
.switch {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 400px;

  padding: 50px;
  z-index: 200;
  transition: $transition;

  background-color: $neu-1;
  overflow: hidden;

  box-shadow: 4px 4px 10px $neu-2, -4px -4px 10px $white;

  &__circle {
    position: absolute;
    width: 500px;
    height: 500px;
    border-radius: 50%;
    background-color: $neu-1;
    box-shadow: inset 8px 8px 12px $neu-2, inset -8px -8px 12px $white;

    bottom: -60%;
    left: -60%;
    transition: $transition;

    &--t {
      top: -30%;
      left: 60%;
      width: 300px;
      height: 300px;
    }
  }

  &__container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: absolute;
    width: 400px;
    padding: 50px 55px;

    transition: $transition;
  }

  &__button {
    cursor: pointer;
    &:hover {
      box-shadow: 6px 6px 10px $neu-2, -6px -6px 10px $white;
      transform: scale(0.985);
      transition: 0.25s;
    }
    &:active,
    &:focus {
      box-shadow: 2px 2px 6px $neu-2, -2px -2px 6px $white;
      transform: scale(0.97);
      transition: 0.25s;
    }
  }
}
/**/
.is-txr {
  left: calc(100% - 400px);
  transition: $transition;
  transform-origin: left;
}
.is-txl {
  left: 0;
  transition: $transition;
  transform-origin: right;
}
.is-z200 {
  z-index: 200;
  transition: $transition;
}
.is-hidden {
  visibility: hidden;
  opacity: 0;
  position: absolute;
  transition: $transition;
}
.is-gx {
  animation: is-gx $transition;
}
@keyframes is-gx {
  0%,
  10%,
  100% {
    width: 400px;
  }
  30%,
  50% {
    width: 500px;
  }
}
@media (max-width: 600px) {
  .main {
    width: 100%;
    min-width: 100%;
  }
}
</style>