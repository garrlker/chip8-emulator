<template>
  <div>
    <div class="ui-child">
      <canvas id="emuCanvas" :width="dispWidth" :height="dispHeight" style="border:1px solid #000000;">
      </canvas>
      <div>
        <button @click="updateDisplay">Update</button>
        <input v-model="tempX" type="number">
        <input v-model="tempY" type="number">
        <input v-model="tempVal" type="number">
        <button @click="putPixel">Draw</button>
      </div>
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
      canvas: null,
      ctx: null,
      dispWidth: 64,
      dispHeight: 32,
      dispBuff: null,
      canvasLen: 8192,
      zoom: 12,
      tempX: 0,
      tempY: 0,
      tempVal: 0
    };
  },
  computed: {
    canvasWidth: function() {
      return this.canvas.width;
    },
    canvasHeight: function() {
      return this.canvas.height;
    }
  },
  methods: {
    putPixel: function() {
      // This is for debug purposes only
      // Eventually tempX,Y,and Val will be erased
      // The UI will be too
      this.dispBuff[
        64 * parseInt(this.tempY) + parseInt(this.tempX)
      ] = parseInt(this.tempVal);
      console.log("Pixel: ", 64 * this.tempY + this.tempX);
      console.log("Disp Buff: ", this.dispBuff);
      this.updateDisplay();
    },
    updateDisplay: function() {
      // Grab the current canvas data object
      var imageData = this.ctx.getImageData(
        0,
        0,
        this.canvas.width,
        this.canvas.height
      );

      // Grab the buffer
      var data = imageData.data;

      // Copy chip8 buffer into canvas buffer
      for (var i = 0; i < this.canvasLen; i += 4) {
        if (this.dispBuff[i / 4]) {
          data[i] = 255;
          data[i + 1] = 255;
          data[i + 2] = 255;
          data[i + 3] = 255;
        } else {
          data[i] = 0;
          data[i + 1] = 0;
          data[i + 2] = 0;
          data[i + 3] = 255;
        }
      }

      // Put it back ┬─┬ ノ( ゜-゜ノ)
      this.ctx.putImageData(imageData, 0, 0);
    }
  },
  mounted: function() {
    // Grab reference to HTML Canvas
    this.canvas = document.getElementById("emuCanvas");
    this.ctx = this.canvas.getContext("2d");

    // Set the array length and fill it with 0s
    this.dispBuff = Array(this.dispWidth * this.dispHeight).fill(0);

    // Update the display
    this.updateDisplay();
  }
};
</script>

<style scoped>
canvas {
  min-width: 640px;
  min-height: 320px;
  /* justify-self: center; */
}

.ui-child {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

input {
  border-radius: 0.5em;
  max-height: 2em;
  border: none;
  padding: 0.5em;
}

button {
  border-radius: 0.5em;
  height: auto;
  width: auto;
  border: none;
  outline: 0;
}
</style>
