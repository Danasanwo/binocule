<template>
  <div class="retrieve">
    <div class="retrieve-container">
      <h1>Account password recovery</h1>
      <input type="text" name="emailUser" id="emailUser" placeholder="email or Username" />
      <button type="submit">Submit</button>
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
  width: 20vw;
  height: 20vw;
  border-radius: 7px;
  box-shadow: 1px 1px 4px #999999, -1px -1px 4px #999999;
  h1 {
    font-size: 3rem;
  }
}
</style>