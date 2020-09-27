<template>
  <div class="active">
    <div class="container">
      <div class="header">
        <div>
          <div>
            <img src="../../public/images/logo/back.svg" alt />
          </div>
          <p>Activity</p>
        </div>
        <div>
          <p>Public</p>
        </div>
        <div>
          <button>PUBLISH</button>
        </div>
      </div>
      <div class="content">
        <label for="title">
          Activity Title
          <span>*</span>
        </label>
        <input type="text" name="title" id="title" placeholder="E.g sanitation holding here" />
        <input type="text" name="description" id="description" placeholder="Description" />
        <div class="addCat">
          <p>{{ category }}</p>
          <button>
            +add category
            <span>*</span>
          </button>
        </div>
        <div class="addTime">
          <p>{{StartTime}} - {{ EndTime }}</p>
          <button>
            +add Time
            <span>*</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.active {
  .container {
    width: 90%;
    height: 90vh;
    margin: 4vh auto;
    .header {
      display: flex;
      justify-content: space-between;
      font-size: 2.2rem;
      font-weight: bold;
      div {
        min-width: 10%;
        display: flex;
        justify-content: space-between;
        img {
          width: 15px;
          height: 15px;
        }
      }
    }
  }
}

button {
  outline: none;
  appearance: none;
  border: none;
  background: none;
}
</style>