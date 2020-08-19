<template>
  <div class="details" v-show="show" :class="{ active: isActive }">
    <div class="detailcontainer">
      <div class="cominfo">
        <div class="com-name">
          <img @click="goBack" src="../../public/images/logo/back.svg" alt srcset />
          <p style="margin: 0; font-weight:bold">Emeka Foodstuff Store</p>
          <img src="../../public/images/logo/share.svg" alt />
          <img @click="open" src="../../public/images/logo/menu.svg" class="menu-btn" alt />
        </div>
        <div class="dropdown">
          <div class="createNew">Create New</div>
        </div>

        <p style="color:#A5A5A5">What we sell</p>
        <p class="goods">Rice, beans, garri, corn, wheat, yam, egusi, panla, egg, ingredients</p>
        <div class="category">
          <span class="foodstuff">foodstuff</span>
        </div>
        <div class="product-images">
          <img src="../../public/images/950602.jpg" alt />
          <img src="../../public/images/950602.jpg" alt />
          <img src="../../public/images/950602.jpg" alt />
        </div>

        <p class="more-info">We sell at affordable prices that is not too expensive</p>
        <p>
          9k
          <i class="fa fa-eye" style="color: #A5A5A5" aria-hidden="true"></i>
        </p>

        <div class="location">
          <p style="color:#A5A5A5">Location</p>
          <p class="address">3, isolo road, solo, Lagos.</p>
        </div>
      </div>
      <div class="contact">
        <p>Who to contact</p>
        <div class="contact-details">
          <div class="contact-img">
            <img src="../../public/images/950602.jpg" alt />
          </div>
          <div class="role-name">
            <p style="color:black">Emeka</p>
            <p class="role">Owner</p>
          </div>
          <div class="role-number">
            <p style="color:#0069FE">08567998887</p>
            <p style="font-size:1.6rem">call</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Details",
  data() {
    return {
      show: true,
      isActive: true,
      unshow: false
    };
  },
  methods: {
    goBack() {
      this.show = false;

      // this.$forceUpdate();
    },
    open() {
      this.isActive = false;
      this.unshow = true;
    }
  }
};
</script>

<style lang="scss">
.details {
  flex: 3;
  // width: 60vw;
  font-size: 10px;
  border-top-left-radius: 10px;
  // font-weight: bold;

  // display: none;
}
.detailcontainer {
  width: inherit;
  display: flex;
  height: 80vh;
  align-items: flex-start;
  margin: 10vh auto 0;
  /* background: black; */
}

.dropdown {
  position: relative;
  display: none;
  top: -30px;
  left: 80%;
  width: 70px;
  text-align: center;
  margin-bottom: 10vh;

  .createNew {
    // display: none;
    position: absolute;
    width: inherit;
    height: 12px;
    border: 1px solid #a5a5a5;
    padding: 8px;
    z-index: 1;
  }
}

.menu-btn:hover .dropdown {
  display: block;
}

.cominfo {
  flex: 7;
  padding: 0 5vh;
  border-right: 1px solid #cccccc;
  div {
    margin: 2vh auto;
  }
  .com-name {
    display: flex;
    justify-content: space-between;
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
      // margin: 0 px;
    }
  }
  p {
    font-size: 2.2rem;
    margin: 3vh auto;
  }
  .goods {
    font-size: 3.2rem;
    font-weight: bold;
  }
  .more-info {
    font-size: 2.2rem;
    font-weight: bold;
  }
  .category {
    span {
      border: 1px solid black;
      border-radius: 6px;
      padding: 3px;
    }
  }
  .product-images {
    display: flex;
    justify-content: space-around;
    img {
      width: 50px;
      height: 50px;
      border-radius: 5px;
    }
  }
  .location {
    font-size: 2.4rem;
    border-top: 1px #cccccc solid;
    .address {
      font-weight: bold;
    }
  }
}

.contact {
  flex: 8;
  padding: 0 5vh;
  margin: 20vh 0;
  p {
    font-size: 2.2rem;
    font-weight: bold;
    color: #a5a5a5;
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
  .details {
    width: 100vw;
  }
  .detailcontainer {
    width: inherit;
    display: block;
  }
}
</style>
