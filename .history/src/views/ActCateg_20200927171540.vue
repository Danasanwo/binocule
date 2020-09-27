<template>
  <div class="actCateg">
    <div class="container">
      <div class="header">
        <img src="../../public/images/logo/back.svg" alt />
        <p>Select Activity Category</p>
      </div>

      <div class="options" v-for="option in options" :key="option.id">
        <h5>{{ option.opt }}</h5>
        <h3>{{ option.eg }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: [
        { id: 1, opt: "Educational", eg: "Training, Lecture, Classes" },
        { id: 2, opt: "Gathering", eg: "Meeting, Conference" },
        { id: 3, opt: "Sport", eg: "Football, Tennis" },
        { id: 4, opt: "Religion", eg: "Prayer, services, Religious Services" },
        { id: 5, opt: "Business", eg: "Trade Fair, Open Market" }
      ]
    };
  }
};
</script>

<style lang="scss">
.actCateg {
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
        padding: 0 0 0 30px;
        font-weight: 700;
      }
    }
  }
}

.options {
  background: #ffffff;
  margin: 10px 0;
  padding: 15px 80px;
  border-radius: 12px;
}
</style>