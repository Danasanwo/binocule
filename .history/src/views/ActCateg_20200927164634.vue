<template>
  <div class="actCateg">
    <div class="container">
      <div class="header">
        <img src="../../public/images/logo/back.svg" alt />
        <p>Select Activity Category</p>
      </div>
      <div class="options">
        <h4>{{option }}</h4>
        <h2>{{ examples }}</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: [{ opt: "Educational", eg: "Training, Lecture, Classes" },]{ opt: "Educational", eg: "Training, Lecture, Classes" ,{ opt: "Educational", eg: "Training, Lecture, Classes" },{ opt: "Educational", eg: "Training, Lecture, Classes" },{ opt: "Educational", eg: "Training, Lecture, Classes" }}
    };
  }
};
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
      align-items: center;
      margin: 0 0 0 30vh;
      img {
        width: 15px;
        height: 15px;
      }
      p {
        padding: 0 0 0 30px;
        font-weight: 700;
      }
    }
  }
}
</style>