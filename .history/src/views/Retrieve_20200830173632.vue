<template>
  <div class="retrieve">
    <div class="retrieve-container" v-show="!sent">
      <h1>Account password recovery</h1>
      <input type="text" name="emailUser" id="emailUser" placeholder="email or Username" />
      <button @click="send" type="submit">Submit</button>
    </div>

    <div class="retrieveMessage" v-show="sent">
      <i class="fa fa-envelope-o fa-3x" aria-hidden="true"></i>
      <h1>Activate Account</h1>
      <p>An email has been sent you email address, click the link to recover your account.</p>
      <p>
        Click here to
        <router-link to="/logger/">Sign in</router-link>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sent: false
    };
  },
  methods: {
    send() {
      this.sent = true;
    }
  }
};
</script>

<style lang="scss" >
.retrieve-container,
.retrieveMessage {
  width: 90vw;
  margin: 10px auto 0;
  padding: 15px;
  text-align: center;
}
.retrieve-container {
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
.retrieveMessage {
  min-width: 280px;
  width: 18vw;
  height: 18vw;
  padding: 20px 0px;
  box-sizing: content-box;
  border-radius: 7px;
  box-shadow: 1px 1px 4px #999999, -1px -1px 4px #999999;
  h1 {
    font-size: 3rem;
  }
  p {
    font-size: 2.2rem;
    font-weight: 500;
  }
}
</style>