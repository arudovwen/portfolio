<template>
  <v-container fluid>
    <v-row>
      <v-col class="text-right">
        <span class="font-weight-bold page_title">{{ $route.name }}</span>
      </v-col>
    </v-row>
    <v-row class="about">
      <v-col cols="12">
        <h2 class="text-center primary--text">
          Let’s build something amazing together
        </h2>
        <p class="text-center primary--text">
          I’m seeking out opportunities to collaborate with individuals,
          companies, agencies.
        </p></v-col
      >

      <v-col cols="12" sm="12" md="6" class="d-none d-md-block">
        <div class="w-100 bg-amber-darken-2">
          <v-img
            class="profile_img"
            alt="contact_image"
            contain
            :src="require('@/assets/images/contact.png')"
          ></v-img></div
      ></v-col>
      <v-col cols="12" sm="12" md="6" class="secondary">
        <div class="px-5 px-md-10 pt-md-10">
          <h1>Send me a message</h1>
          <p>I’d love to hear from you.</p>
          <v-form ref="form" @submit.prevent="" v-model="valid" lazy-validation>
            <v-text-field
              v-model="name"
              :counter="25"
              :rules="nameRules"
              label="Name"
              required
            ></v-text-field>

            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              required
            ></v-text-field>

            <v-textarea
              v-model="message"
              :rules="messageRules"
              label="Message"
              required
            >
            </v-textarea>
            <v-btn color="primary" class="mr-4" type="submit" @click="validate">
              Send Request
            </v-btn>
          </v-form>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    valid: true,
    name: "",
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => (v && v.length <= 25) || "Name must be less than 25 characters",
    ],
    message: "",
    messageRules: [
      (v) => !!v || "Message is required",
      (v) =>
        (v && v.length > 1) || "Message not must be less than 10 characters",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
  }),

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
  },
};
</script>
<style scoped>
.about {
  width: 70%;
  margin: 0 auto;
}
.profile_img {
  height: 70vh;
  object-fit: contain;
}
.profile_img {
  height: 70vh;
  object-fit: contain;
}
@media (max-width: 768px) {
  .about {
    width: 100%;
  }
  .profile_img {
    height: 30vh;
  }
}
</style>