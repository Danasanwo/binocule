<template>
  <div class="logger">
    <div>
      <router-link to="/logger/login">login</router-link>|
      <router-link to="/logger/signup">signup</router-link>|
      <router-link to>retrieve</router-link>|
    </div>
    <router-view />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.logger {
  font-size: 10px;
  font-family: "Open Sans", sans-serif;
}
</style>