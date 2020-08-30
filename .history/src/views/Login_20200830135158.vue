<template>
  <div class="login">
    <div class="log-container">
      <h1>Welcome !</h1>
      <input type="text" name="Username" id="username" placeholder="Username" />
      <input type="text" name="Password" id="password" placeholder="password" />

      <p>
        Forgot your password ?
        <router-link to="/logger/retrieve">Click here</router-link>
      </p>
      <button type="submit">Sign in</button>

      <p>
        Click
        <router-link to="/logger/signup">here</router-link>to sign up
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.log-container {
  width: 90vw;
  margin: auto;
  padding: 15px;
  text-align: center;
  ::placeholder {
    padding: 2px 12px;
    font-size: 2.2rem;
  }
  h1 {
    font-size: 5rem;
    margin: 15px auto;
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
    margin: 10px 0 30px;
  }
}
</style>