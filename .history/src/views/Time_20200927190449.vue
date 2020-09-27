<template>
  <div class="time">
    <div class="container">
      <div class="header">
        <img src="../../public/images/logo/back.svg" alt />
        <p>Select Activity Time</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.time {
  background: #fafafa;
  height: 100vh;
  width: 100%;
  .container {
    width: 90%;
    margin: auto;
    padding: 5vh 0 2vh;
    font-size: 2.2rem;
    .header {
      display: flex;
      align-items: center;
      margin: 0 0 25vh;
      img {
        width: 15px;
        height: 15px;
      }
      p {
        padding: 0 0 0 80px;
        font-weight: 700;
      }
    }
  }
}
</style>