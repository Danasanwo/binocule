<template>
  <div id="mapContainer" class="basemap map">
    <!-- <div class="search">
        <input type="text" name="search" id="searchBar" placeholder="find any information" />
    </div>-->
  </div>
</template>

<script>
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
import mapboxgl from "mapbox-gl";

export default {
  name: "MapContainer",
  mounted() {
    mapboxgl.accessToken =
      "pk.eyJ1IjoiYmlub2N1bGUiLCJhIjoiY2thcGt0YTN0MDAzdjJ4bnFrNml2dGY1aSJ9.n_HssgqEySGw6X0A7-OvLQ";

    let map = new mapboxgl.Map({
      container: "mapContainer",
      style: "mapbox://styles/binocule/ckb15bubn1en51iliqpwtmabm",
      center: [3.3792, 6.5244],
      zoom: 12,
      // maxBounds: [
      //   [103.6, 1.1704753],
      //   [104.1, 1.4754753]
      // ],
      // hash: true,
      scrollZoom: false
    });

    map.addControl(
      new MapboxGeocoder({
        // container: "searchBar",
        accessToken: mapboxgl.accessToken,
        zoom: 14,
        placeholder: "Find information...",
        mapboxgl: mapboxgl
      })
    );

    map.on("click", function(e) {
      console.log("A click event has occurred at " + e.lngLat);
    });

    map.addControl(new mapboxgl.NavigationControl(), "bottom-right");
  }
};
</script>

<style lang="scss">
@media only screen and (orientation: portrait) {
  .basemap {
    width: 100%;
    height: 100vh;
  }
}

.basemap {
  width: 100%;
  height: 100vh;
  flex: 2;
}
.search {
  width: 40%;
  margin: 5vh auto;
  position: absolute;
  z-index: 2;
  top: 0;
  left: 50%;
  margin-left: -20%;
  #searchBar {
    width: 85%;
    height: 40px;
    border-radius: 13px;
    box-shadow: 0px 1px 8px #00000015;
    background-image: url("../../public/images/logo/logo.svg"),
      url("../../public/images/logo/search.svg");
    background-repeat: no-repeat;
    background-position: 10px, 95%;
    background-size: 30px 40px, 15px;
    padding: 0 0 0 15%;
    transition: border 0.8s;
    border: 1px #ffffff solid;
  }
  #searchBar::placeholder {
    visibility: hidden;
  }
  #searchBar:focus {
    background-image: url("../../public/images/logo/search.svg");
    background-repeat: no-repeat;
    background-position: 95%;
    background-size: 15px;
    border: 1px #eeeeee solid;
  }
  #searchBar:focus::placeholder {
    visibility: visible;
    opacity: 0.3;
  }
}

.mapboxgl-ctrl-top-right {
  width: 50%;
  margin: 5vh auto;
  position: absolute;
  // z-index: 2;
  top: 0;
  left: 50%;
  margin-left: -15%;

  .mapboxgl-ctrl-geocoder {
    width: 100%;
    height: 40px;
    border-radius: 13px;
    box-shadow: 0px 1px 8px #00000015;
    background-image: url("../../public/images/logo/logo.svg");

    background-repeat: no-repeat;
    background-position: 90%;
    background-size: 30px 40px;
    // padding: 0 0 0 15%;
    transition: border 0.8s;
    border: 1px #ffffff solid;
  }

  .mapboxgl-ctrl-geocoder:focus {
    outline: none;
    appearance: none;
  }
}

.mapboxgl-ctrl-top-right .mapboxgl-ctrl {
  // margin: 0 auto
  float: none;

  // display: none;
}

.mapboxgl-ctrl-geocoder--input {
  width: inherit;
}
</style>