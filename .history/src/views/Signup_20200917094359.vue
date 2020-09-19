<template>
  <div class="signup">
    <form @submit.prevent="submitSignup">
      <div class="sign-container form-group">
        <div class="names">
          <input
            class="form__input"
            type="text"
            name="firstName"
            id="firstName"
            placeholder="First Name"
            v-model="firstName"
          />
          <input
            class="form__input"
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Last Name"
            v-model="lastName"
          />
        </div>
        <input
          class="form__input"
          type="email"
          name="email"
          id="email"
          placeholder="email"
          v-model="email"
        />
        <input
          class="form__input"
          type="text"
          name="Username"
          id="Username"
          placeholder="Username"
          v-model="Username"
        />
        <input
          class="form__input"
          type="password"
          name="password"
          id="password"
          placeholder="Create Password"
          v-model="password"
        />
        <input
          class="form__input"
          type="password"
          name="confirm"
          id="confirmPassword"
          placeholder="Confirm Password"
          v-model="confirmPassword"
        />
        <button class="form__submit" type="submit">Sign up</button>

        <p>
          Click here to
          <router-link to="/logger/">Sign in</router-link>
        </p>
      </div>
    </form>
  </div>
</template>

<script>
import { required } from "vuelidate/lib/validators";
// import { mapActions } from "vuex";
import axios from "axios";

export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      Username: "",
      password: "",
      confirmPassword: ""
    };
  },
  methods: {
    // ...mapActions(["signingUp"]),
    submitSignup() {
      let details = {
        username: this.Username,
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        password: this.password,
        passwordConfirm: this.confirmPassword
      };

      console.log(details);
      this.signingUp(details);
    },
    async signingUp(details) {
      try {
        let jsondetails = JSON.stringify(details);
        console.log(jsondetails);

        const headers = {
          "Content-type": "application/json",
          Accept: "*/*"
        };

        const response = await axios.post(
          "https://binocule.azurewebsites.net/signup",
          details,
          { headers }
        );

        console.log(response);
        if (response.data.status == "success") this.$router.push("");
      } catch (err) {
        console.log(err);
      }
    }
  },
  validations: {
    firstName: {
      required
    },
    lastName: {
      required
    },
    email: {
      required
    },
    username: {
      required
    },
    password: {
      required
    },
    confirmPassword: {
      required
    }
  }
};
</script>

<style lang="scss" >
.sign-container {
  width: 90vw;
  margin: -50px auto 0;
  padding: 15px;
  text-align: center;
  ::placeholder {
    padding: 2px 12px;
    font-size: 2.2rem;
  }
  p {
    font-size: 1.8rem;
    font-weight: 500;
    margin: 10px auto;
    a {
      text-decoration: none;
      color: #007fff;
    }
  }
  .names {
    margin: auto;
    display: flex;
    width: 40%;
    min-width: 330px;
    justify-content: space-between;
    input {
      //   width: 45%;
      min-width: 130px;
    }
  }
  input {
    display: block;
    width: 40%;
    min-width: 300px;
    height: 35px;
    margin: 10px auto;
    border: 0.5px solid #a9b2c7;
    box-shadow: 0px 0px 4px #a9b2c7;
    padding: 5px 12px;
    border-radius: 7px;
  }
  button {
    outline: none;
    border: none;
    appearance: none;
    width: 120px;
    height: 35px;
    background: #007fff;
    color: white;
    box-shadow: #999999 0px 0px 2px;
    border-radius: 10px;
    margin: 10px 0;
  }
}
</style>