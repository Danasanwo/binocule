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
        <div class="new">
          <input type="text" name="title" id="title" placeholder="E.g sanitation holding here" />
          <input type="text" name="description" id="description" placeholder="Description" />
        </div>

        <div class="addCat">
          <p>{{ category }}</p>

          <router-link to="/activity/categories">
            <button>
              +add category
              <span>*</span>
            </button>
          </router-link>
        </div>
        <div class="addTime">
          <p>{{ StartTime }} - {{ EndTime }}</p>
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
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      category: "no category",
      StartTime: "live",
      EndTime: "no idea"
    };
  },
  computed: mapGetters(["allCateg"]),
  mounted() {
    // this.category = this.allCateg.opt;
  },
  beforeUpdate() {
    this.category = this.allCateg.opt;
  },
  updated() {
    // this.category = this.allCateg.opt;

    console.log(this.category);
  }
};
</script>

<style lang="scss">
.active {
  width: 100%;
  .container {
    width: 90%;
    // height: 90vh;
    margin: 4vh auto;
    .header {
      display: flex;
      justify-content: space-between;
      font-size: 2.2rem;
      font-weight: 600;
      margin: 10vh 0 5vh;
      .back {
        background: #f0f0f0;
        border-radius: 15px;
        padding: 8px 15px;
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
      padding: 15px 0;

      .new {
        font-size: 2.5rem;
        border-bottom: 2px #f3f3f3 solid;
        margin: 2vh 0;

        label {
          font-weight: bold;
        }

        input {
          display: block;
          width: 95%;
          margin: 2vh 0;
          border-left: 2px #0069fe solid;
          padding: 0 0 0 10px;
        }

        #title {
          margin: 1vh 0 25vh;
        }
        #description {
          margin: 1vh 0 8vh;
        }
        ::placeholder {
          font-size: 2.2rem;
        }
      }
      .addCat,
      .addTime {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 3vh 0;
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
  font-weight: bold;
}

span {
  color: red;
}
</style>