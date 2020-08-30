<template>
  <div class="login">
    <div>
      <img src="../../public/images/logo/logo.svg" alt />
    </div>
    <div class="log-container">
      <h1>Welcome</h1>
      <input type="text" name="Username" id="username" />
      <input type="text" name="Password" id="password" />

      <p>
        Forgot your password ?
        <router-link to="/logger/retrieve">Click here</router-link>
      </p>
      <Button:submit>Sign in</Button:submit>

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
</style>