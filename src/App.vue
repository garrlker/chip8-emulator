<template>
  <div id="app">
    <layout>
      <template slot="header">
        <section class="hero is-dark">
          <div class="hero-body">
            <div class="container">
              <h1 class="title">
                Vue8
              </h1>
            </div>
          </div>
        </section>
      </template>

      <template slot="display">
        <display>

        </display>
      </template>

      <template slot="sidebar-left">
        <RomBrowser></RomBrowser>
      </template>
      
      <template slot="sidebar-right">
        <GamepadUI></GamepadUI>
      </template>
      
    </layout>
  </div>
</template>

<script>
import Layout from "./components/Layout.vue";
import Display from "./components/Display.vue";
import RomBrowser from "./components/RomBrowser.vue";
import GamepadUI from "./components/GamepadUI.vue";

export default {
  name: "app",
  components: {
    Layout,
    Display,
    RomBrowser,
    GamepadUI
  }
};
</script>

<style lang="scss">
@import "~bulma/bulma.sass";
</style>

<style>
html {
  height: 100%;
}

body {
  min-height: 100%;
}
</style>
