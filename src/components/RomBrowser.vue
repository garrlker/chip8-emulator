<template>
  <div class="browser">
    <h3>Rom Browser</h3>
    <select>
      <option v-for="(data, romName) in romList" :key="romName"> {{ romName }}</option>
    </select>
  </div>
</template>

<script>
import roms from "../chip8/roms.js";

export default {
  name: "RomBrowser",
  props: {
    msg: String
  },
  data: function() {
    return {
      romList: roms
    };
  }
};
</script>

<style scoped>
.browser {
  display: flex;
  flex-direction: column;
  align-items: center;
}

select {
  width: 15em;
  border: none;
  border-radius: 2em;
  outline: 0;
  justify-self: center;
}

select:focus {
  outline: none;
}

select > option {
  text-align: center;
  min-width: 50%;
  border-radius: 2em;
}
</style>
