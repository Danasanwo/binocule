<template>
  <div class="home">
    <div class="homepage">
      <MapContainer />
      <Details />
      <AddNew />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Details from "@/components/Details.vue";
import AddNew from "@/components/AddNew.vue";
import MapContainer from "@/components/MapContainer.vue";

export default {
  name: "Home",
  data() {
    return {
      accessToken: process.env.MAPBOX_ACCESS_TOKEN,
      runner: process.env.WHAT
    };
  },
  components: {
    Details,
    AddNew,
    MapContainer
  }
};
</script>

<style lang="scss">
.homepage {
  width: 100vw;
  display: flex;
  font-family: "Open Sans", sans-serif;
}
</style>
