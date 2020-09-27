<template>
  <div class="actCateg">
    <div class="container">
      <div class="header">
        <img src="../../public/images/logo/back.svg" alt />
        <p>Select Activity Category</p>
      </div>

      <div class="options" v-for="option in options" :key="option.id">
        <h4>{{ option.opt }}</h4>
        <h2>{{ option.eg }}</h2>
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
  min-height: 90vh;
  width: 100%;
  .container {
    width: 90%;
    margin: auto;
    padding: 5vh 0;
    font-size: 2.2rem;
    .header {
      display: flex;
      align-items: center;
      margin: 0 0 30vh;
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
}
</style>