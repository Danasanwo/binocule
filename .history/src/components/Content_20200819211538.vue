<template>
  <div class="Content">
    <Details />
    <AddNew />
  </div>
</template>

<script>
import AddNew from "@/components/AddNew.vue";
import Details from "@/components/Details.vue";
export default {
  name: "Content",
  components: {
    AddNew,
    Details
  }
};
</script>

<style>
.Content {
  background: #ffffff;

  width: 55%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 45%;
  z-index: 2;
}
</style>