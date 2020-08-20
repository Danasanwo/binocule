<template>
  <div class="Content" v-show="show">
    <Details @goBack="goBack" />
    <AddNew />
  </div>
</template>

<script>
import AddNew from "@/components/AddNew.vue";
import Details from "@/components/Details.vue";

import { mapGetters } from "vuex";
export default {
  name: "Content",
  data() {
    return {
      show: true
    };
  },
  components: {
    AddNew,
    Details
  },
  computed: {
    ...mapGetters(["allBack"])
  },
  methods: {
    goBack() {
      this.show = false;

      // this.$forceUpdate();
    }
  },
  updated() {
    console.log(this.allBack);
  }
};
</script>

<style>
.Content {
  background: #ffffff;

  width: 60%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 40%;
  z-index: 2;
}

@media only screen and (orientation: portrait) {
  .Content {
    position: static;
  }
}
</style>