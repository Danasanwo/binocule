<template>
  <div class="time">
    <div class="container">
      <div class="header">
        <img src="../../public/images/logo/back.svg" alt />
        <p>Select Activity Time</p>
      </div>
      <div class="chooseDate">
        <h5>Date</h5>
        <h3>{{ date }}</h3>
        <input type="date" name="date" id="date" v-model="date" />
      </div>

      <div class="freq">
        <p>Once</p>
        <p>Repeated</p>
      </div>

      <div class="chooseTime">
        <div class="startTime">
          <h5>Starting Time</h5>
          <h3>{{ startTime }}</h3>
          <input type="time" name="startTime" id="start " />
        </div>

        <div class="endTime">
          <h5>Ending Time</h5>
          <h3>{{ endTime }}</h3>
          <input type="time" name="endTime" id="end" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: "Today",
      endTime: "No Idea",
      startTime: "Live"
    };
  }
};
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
.freq {
  padding: 10px 80px;
  display: flex;
  //   justify-content: space-around;
  align-items: center;

  p {
    padding: 10px 10px;
    border: 2px #aaaaaa solid;
    border-radius: 12px;
    min-width: 80px;
  }
}

.chooseDate {
  background: #ffffff;
  margin: 10px 0;
  padding: 15px 0 15px 80px;
  border-radius: 12px;
  h3 {
    color: #bababa;
  }
}

.endTime,
.startTime {
  background: #ffffff;
  margin: 10px 0;
  padding: 15px 0 15px 80px;
  border-radius: 12px;
  h3 {
    color: #bababa;
  }
}
</style>