<template>
  <div class="addNew" :class="{ active: !isActive, unShow: !unshow }">
    <div class="detailContainer">
      <div class="new-business">
        <div class="com-name">
          <img src="../../public/images/logo/back.svg" alt srcset />
          <p style="margin: 0; font-weight:bold">New Business</p>
        </div>
        <p class="caption">What does this business offer?</p>
        <div class="offer">
          <button class="service">Service</button>
          <button class="product">Product</button>
        </div>

        <div class="deliverable">
          <p class="caption">
            What do you sell?
            <span>*</span>
          </p>
          <p class="comma">Use comma to,</p>

          <input
            type="text"
            name="Selling"
            id="selling"
            class="input-style"
            placeholder="E.g rice,"
          />
          <button>Add Category+</button>
        </div>

        <div class="add-info">
          <p class="caption">Additional Info</p>
          <input
            type="text"
            name="Addinfo"
            id="Des-info"
            class="input-style"
            placeholder="E.g our products are fresh and affordable"
          />
        </div>

        <div class="prod-pic">
          <p class="caption">Product pictures</p>
          <input type="file" name="ProductPictures" id="pix" placeholder />
        </div>

        <div class="input-address">
          <p class="caption">Physical Address</p>
          <input
            type="text"
            name="PhyAddress"
            id="PhyAddress"
            placeholder="E.g 6, presidential villa, aso rock"
            class="input-style"
          />
        </div>
      </div>
      <div class="who-to">
        <p>Who to contact?</p>
        <input
          type="text"
          name="Cus-name"
          id="cus-name"
          class="input-style marg"
          placeholder="Name"
        />
        <input
          type="text"
          name="Cus-number"
          id="cus-number"
          class="input-style marg"
          placeholder="Phone Number"
        />
        <input
          type="text"
          name="Cus-role"
          id="cus-role"
          class="input-style marg"
          placeholder="Role"
        />

        <button type="submit">Submit</button>
      </div>
    </div>
    {{ }}
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "AddNew",
  data() {
    return {
      isActive: true,
      unshow: false
    };
  },
  methods: {
    changeView() {
      this.isActive = this.allCurrent[0];
      this.unshow = this.allCurrent[1];
    }
  },
  computed: mapGetters(["allCurrent"]),
  beforeUpdate() {
    console.log(this.allCurrent);
    this.changeView();
  }
};
</script>

<style lang="scss">
.addNew {
  flex: 3;
  // width: 60vw;
  font-size: 10px;
  border-top-left-radius: 10px;
  /* font-weight: bold */

  // display: block;
}

.detailContainer {
  width: inherit;
  display: flex;
  height: 80vh;
  align-items: flex-start;
  margin: 10vh auto 0;
  // background: black;
  // div {
  // margin: 0;
  // }
}

.new-business {
  flex: 7;
  padding: 0 5vh;
  border-right: 1px solid #cccccc;
  div {
    margin: 0 auto;
  }

  .prod-pic {
    input {
      border: 1px solid #0069fe;
      color: #0069fe;
      background: white;
      padding: 4px 12px;
      border-radius: 5px;
      margin: 12px 0;
    }
  }
  .deliverable {
    button {
      border: 1px solid #0069fe;
      color: #0069fe;
      background: white;
      padding: 4px 12px;
      border-radius: 5px;
      margin: 12px 0;
    }
  }
  .com-name {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 10vh;
    p {
      font-size: 2.4rem;
      margin: 3vh auto;
    }
    img {
      width: 15px;
      height: 15px;
      display: inline-block;
      margin: 0 20px 0 0;
    }
  }
  .caption {
    font-size: 2.2rem;
    font-weight: bold;
  }
  p {
    font-size: 2.2rem;
    margin: 1.5vh auto;
  }
  .offer button {
    border-radius: 10px;
    font-size: 1.6rem;
    padding: 4px 10px;
    outline: none;
    appearance: none;
    border: 1px #bababa solid;
    display: inline-block;
    margin: 0 0.2vw;
    background: white;
  }
}

.marg {
  margin: 2vh 0;
}

.input-style {
  border-bottom: 1px solid #bababa;
  width: 85%;
}

::placeholder {
  color: #bababa;
  font-size: 1.6rem;
}
.who-to {
  flex: 8;
  padding: 0 5vh;
  margin: 20vh 0;

  button {
    width: 40%;
    height: 40px;
    display: block;
    margin: 2vh 0;
    background: #0069fe;
    border: none;
    border-radius: 10px;
    color: white;
    box-shadow: 0px 3px 6px #bababa;
  }
  p {
    font-size: 2.2rem;
    font-weight: bold;
  }
  .contact-details {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 5vh 0;
    .contact-img img {
      width: 40px;
      height: 40px;
      border-radius: 20px;
    }
    .role-name {
      .role {
        font-size: 1.6rem;
      }
    }
  }
}

@media only screen and (orientation: portrait) {
  .addNew {
    width: 100vw;
  }
  .detailContainer {
    display: block;
    width: inherit;
  }
  .who-to {
    margin: 10vh 0;
  }
}
</style>
