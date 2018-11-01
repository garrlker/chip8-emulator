<template>
  <div id="app">
    <layout>

    </layout>
    <display>

    </display>
  </div>
</template>

<script>
import Layout from "./components/Layout.vue";
import Display from "./components/Display.vue";

export default {
  name: "app",
  components: {
    Layout,
    Display
  }
};
</script>

<style lang="scss">
@import "~bulma/bulma.sass";
</style>

<style>
</style>
