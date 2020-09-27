<template>
  <div class="active">
    <div class="container">
      <div class="header">
        <div class="back">
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
  width: 100%;
  .container {
    width: 90%;
    height: 90vh;
    margin: 4vh auto;
    .header {
      display: flex;
      justify-content: space-between;
      font-size: 2.2rem;
      font-weight: bold;
      margin: 10vh 0;
      .back {
        background: #f0f0f0;
        border-radius: 15px;
        padding: 10px;
      }
      div {
        // min-width: 10%;
        display: flex;
        align-items: center;
        justify-content: space-between;

        img {
          padding: 0 20px 0 0;
          width: 15px;
          height: 15px;
        }
      }
    }
    .content {
      font-size: 2.5rem;
      label {
        font-weight: bold;
      }

      input {
        display: block;
        width: 95%;
        margin: 8vh auto;
      }
      ::placeholder {
        font-size: 2.2rem;
      }
    }
  }
}

button {
  outline: none;
  appearance: none;
  border: none;
  background: none;
  color: #0069fe;
}

span {
  color: red;
}
</style>