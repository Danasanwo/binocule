<template>
  <div class="actCateg">
    <div class="container">
      <div class="header">
        <img src="../../public/images/logo/back.svg" alt />
        <p>Select Activity Category</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.actCateg {
  width: 100%;
  .container {
    width: 90%;
    margin: 5vh auto;
    font-size: 2.2rem;
    .header {
      display: flex;
      img {
        width: 15px;
        height: 15px;
      }
      p {
        padding: 0 0 0 30px;
      }
    }
  }
}
</style>