<template>
  <div class="signup">
    <div class="sign-container">
      <div class="names">
        <input type="text" name="firstName" id="firstName" placeholder="First Name" />
        <input type="text" name="lastName" id="lastName" placeholder="Last Name" />
      </div>
      <input type="email" name="email" id="email" placeholder="email" />
      <input type="text" name="Username" id="Username" placeholder="Username" />
      <input type="password" name="password" id="password" placeholder="Create Password" />
      <input type="password" name="comfirm" id="comfirmPassword" placeholder="Comfirm Password" />
      <button type="submit" @submit="submitSignup">Sign up</button>

      <p>
        Click here to
        <router-link to="/logger/">Sign in</router-link>
      </p>
    </div>
  </div>
</template>

<script>
import { required } from "vuelidate/lib/validators";

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
    submitSignup() {}
  },
  validations: {
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