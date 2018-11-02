<template>
  <div>
    <div class="ui-menu">
      <!-- <select v-model="zoom">
      <option value=12>Big</option>
      <option value=6>Small</option>
    </select> -->
    </div>
    <div class="ui-child">
      <canvas id="myCanvas" style="border:1px solid #000000;">
      </canvas>
    </div>
  </div>
</template>

<script>
export default {
  name: "Display",
  props: {
    msg: String
  },
  data: function() {
    return {
      dispWidth: 64,
      dispHeight: 32,
      dispBuff: null,
      zoom: 12
    };
  },
  computed: {
    zoomWidth: function() {
      return this.dispWidth * this.zoom;
    },
    zoomHeight: function() {
      return this.dispHeight * this.zoom;
    }
  },
  mounted: function() {
    // Set the array length and fill it with 0s
    this.dispBuff = Array(this.dispWidth * this.dispHeight).fill(1);
  }
};
</script>

<style scoped>
canvas {
  width: 100%;
  height: 100%;
}
</style>
