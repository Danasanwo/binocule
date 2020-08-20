<template>
  <div class="Content" v-show="show">
    <Details />
    <AddNew />
  </div>
</template>

<script>
import AddNew from "@/components/AddNew.vue";
import Details from "@/components/Details.vue";
export default {
  name: "Content",
  data() {
    return {
      show: false
    };
  },
  components: {
    AddNew,
    Details
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