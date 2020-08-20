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
  width: 55%;
  position: absolute;
  top: 0;
  left: 45%;
}
</style>