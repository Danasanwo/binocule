<template>
  <div class="home">
    <div class="homepage">
      <MapContainer />
      <Content />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Details from "@/components/Details.vue";
import Content from "@/components/Content.vue";

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
    Content
  }
};
</script>

<style lang="scss">
.homepage {
  width: 100vw;
  display: flex;
  font-family: "Open Sans", sans-serif;
}

.unShow {
  display: none;
}

.active {
  display: block;
}

@media only screen and (orientation: portrait) {
  .homepage {
    width: 100vw;
    display: block;
  }
}
</style>
