<template>
  <div class="retrieve">
    <div class="retrieve-container">
      <h1>Account password recovery</h1>
      <input type="text" name="emailUser" id="emailUser" placeholder="email or Username" />
    </div>

    <div class="retrieveMessage">
      <h2>Activate Account</h2>
      <p>An email has been sent you email address, click the link to recover your account.</p>
    </div>
  </div>
</template>

<script>
export default {};
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
}
</style>