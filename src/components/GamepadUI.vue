<template>
  <div class="gamepad">
    <h3>Input</h3>
    <svg width="32" height="32" v-for="key in gamepadKeys" :key="key">
      <rect width="32" height="32" />>
      <text x="16" y="16">{{ key }}</text>
    </svg>
  </div>
</template>

<script>
export default {
  name: "GamepadUI",
  props: {
    msg: String
  },
  data: function() {
    return {
      gamepadKeys: [
        "1",
        "2",
        "3",
        "C",
        "4",
        "5",
        "6",
        "D",
        "7",
        "8",
        "9",
        "E",
        "A",
        "0",
        "B",
        "F"
      ]
    };
  }
};
</script>

<style scoped>
.gamepad {
  display: flex;
  min-height: 10em;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}

.gamepad > h3 {
  min-width: 100%;
  text-align: center;
}

svg {
  border: none;
  align-self: center;
  margin: 1em;
}
svg > rect {
  fill: rgb(207, 191, 191);
}
svg > text {
  fill: white;
  text-anchor: middle;
}
</style>
