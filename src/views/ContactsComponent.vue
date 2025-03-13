/* eslint-disable */
<template>
  <main>
    <div class="banner contactspage-banner">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <NavbarComponent></NavbarComponent>
          </div>
        </div>
        <h1 class="title-big">Contact us</h1>
      </div>
    </div>
    <section class="contacts">
      <div class="container">
        <div class="row">
          <div class="col col-12 col-lg-6 offset-0 offset-lg-3">
            <div class="title mt-5">Tell us about your tastes</div>
            <img
              class="beanslogo mt-5"
              src="../assets/logo/Beans_logo_dark.svg"
              alt="Beans logo"
            />

            <form @submit.prevent="submit($event)" action="#" class="mt-5">
              <div class="form-group row">
                <div class="col col-12 col-sm-3 d-flex align-items-start">
                  <label for="name-input" class="mb-0">
                    Name
                    <span style="color: red">*</span>
                  </label>
                </div>
                <div class="col col-12 col-sm-9">
                  <input
                    v-model="v$.inputValue.$model"
                    type="text"
                    class="form-control"
                    id="name-input"
                  />
                  <span
                    v-for="error in v$.inputValue.$errors"
                    :key="error.$uid"
                  >
                    {{ error.$message }}
                  </span>
                </div>
              </div>

              <div class="form-group row">
                <div class="col col-12 col-sm-3 d-flex align-items-start">
                  <label for="email-input" class="mb-0">
                    E-mail
                    <span style="color: red">*</span>
                  </label>
                </div>
                <div class="col col-12 col-sm-9">
                  <input
                    v-model="v$.emailValue.$model"
                    type="email"
                    class="form-control"
                    id="email-input"
                  />
                  <span
                    v-for="error in v$.emailValue.$errors"
                    :key="error.$uid"
                  >
                    {{ error.$message }}
                  </span>
                </div>
              </div>

              <div class="form-group row">
                <div class="col col-12 col-sm-3 d-flex align-items-start">
                  <label for="phone-input" class="mb-0"> Phone </label>
                </div>
                <div class="col col-12 col-sm-9">
                  <input
                    v-model="v$.phoneValue.$model"
                    type="tel"
                    class="form-control"
                    id="phone-input"
                  />
                  <span
                    v-for="error in v$.phoneValue.$errors"
                    :key="error.$uid"
                  >
                    {{ error.$message }}
                  </span>
                </div>
              </div>

              <div class="form-group row textarea">
                <div class="col col-12 d-flex justify-content-center">
                  <label for="message" class="mb-3 mt-3 text-center">
                    Your message
                    <span style="color: red">*</span>
                  </label>
                </div>
                <div class="col col-12">
                  <textarea
                    v-model="v$.messageValue.$model"
                    class="form-control"
                    name="message"
                    id="message"
                    rows="5"
                    placeholder="Leave your comments here"
                  ></textarea>
                  <span
                    v-for="error in v$.messageValue.$errors"
                    :key="error.$uid"
                  >
                    {{ error.$message }}
                  </span>
                </div>
              </div>

              <div class="row">
                <div class="col">
                  <button
                    :disabled="v$.$invalid"
                    type="submit"
                    class="btn btn-outline-dark send-btn"
                  >
                    Send us
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import { useVuelidate } from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";
import NavbarComponent from "../components/NavbarComponent.vue";

export default {
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      inputValue: "",
      emailValue: "",
      phoneValue: null,
      messageValue: "",
    };
  },
  methods: {
    async submit() {
      const isFormCorrect = await this.v$.$validate();
      if (isFormCorrect) {
        this.inputValue = "";
        this.emailValue = "";
        this.phoneValue = null;
        this.messageValue = "";
        this.v$.$reset();
        alert("Форма успешно отправлена");
      }
    },
  },
  components: { NavbarComponent },
  validations() {
    return {
      inputValue: { required },
      emailValue: { required, email },
      phoneValue: {},
      messageValue: { required },
    };
  },
};
</script>
