<template>
  <div class="signup">
    <div class="sign-container">
      <div class="names">
        <input type="text" name="firstName" id="firstName" placeholder="First Name" />
        <input type="text" name="lastName" id="lastName" placeholder="Last Name" />
      </div>
      <input type="email" name="email" id="email" placeholder="email" />
      <input type="text" name="Username" id="Username" placeholder="Username" />
      <input type="password" name="create" id="createP" placeholder="Create Password" />
      <input type="password" name="comfirm" id="comfirmP" placeholder="Comfirm Password" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" >
.sign-container {
  width: 90vw;
  margin: auto;
  padding: 15px;
  text-align: center;
  ::placeholder {
    padding: 2px 12px;
    font-size: 2.2rem;
  }
  .names {
    margin: auto;
    input {
      width: 19%;
      display: inline-block;
      min-width: 150px;
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
}
</style>