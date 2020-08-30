<template>
  <div class="login">
    <div class="log-container">
      <h1>Welcome</h1>
      <input type="text" name="Username" id="username" />
      <input type="text" name="Password" id="password" />

      <p>
        Forgot your password ?
        <router-link to="/logger/retrieve">Click here</router-link>
      </p>
      <button type="submit">Sign in</button>

      <p>
        Click
        <router-link to="/logger/signup>">here</router-link>to sign up
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
  button {
    outline: none;
    border: none;
    appearance: none;
    width: 120px;
    background: #007fff;
    color: white;
    box-shadow: #000029 1px 1px 6px;
  }
}
</style>