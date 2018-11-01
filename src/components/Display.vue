<template>
  <div>
    <input type="number" v-model="zoom" min="1" max="12" value="1">
    <canvas id="myCanvas" :width="zoomWidth" :height="zoomHeight" style="border:1px solid #000000;">
    </canvas>
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
      zoom: 1
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
    this.dispBuff = Array(this.dispWidth * this.dispHeight).fill(0);
  }
};
</script>
