<template>
  <div>
    <div class="ui-container">
      <div class="header">
        <slot name="header">

        </slot>
      </div>
      <div class="sidebar-left">
        <slot name="sidebar-left">

        </slot>
      </div>

      <div class="toolbar">
        Toolbar
      </div>

      <div class="sidebar-right">
        <slot name="sidebar-right">

        </slot>
      </div>

      <div class="emuDisplay">
        <slot name="display">

        </slot>
      </div>

      <div class="footer">
        Footer
      </div>
      <!-- <div>10</div> -->
      <!-- <div>11</div> -->
      <!-- <div>12</div> -->
    </div>

  </div>
</template>

<script>
export default {
  name: "Layout",
  props: {
    msg: String
  }
};
</script>

<style>
h1 {
  text-align: center;
}

.ui-container {
  display: grid;
  /* flex-direction: row; */
  grid-template-columns: 1fr 3fr 1fr;
  grid-template-rows: 1fr 32px 4fr auto;
  /* border-style: solid; DEBUG*/
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  /* justify-content: center; */
  /* align-content: center; */
  width: 100%;
  height: 100%;
  grid-row-gap: 1px;
  grid-column-gap: 1px;
}

.ui-container > div {
  /* border-style: dotted; DEBUG*/
  width: 100%;
  height: 100%;
  color: #ccc;
  background-color: #555;
}

.ui-child {
  align-self: center;
}

.ui-menu {
  width: 100%;
}

.ui-menu > select {
  border-radius: 1em;
}

.ui-menu > select:focus {
  outline: 0;
}

.header {
  grid-area: 1 / 1 / 2 / 4;
}

.sidebar-left {
  grid-area: 2 / 1 / 4 / 2;
  /* border-right: solid; */
  /* border-bottom: solid; */
}

.sidebar-right {
  grid-area: 2 / 3 / 4 / 4;
  /* border-left: solid; */
  /* border-bottom: solid; */
}

.toolbar {
  grid-column: 2;
  grid-row: 2;
  /* border-bottom: solid; */
}

.emuDisplay {
  grid-column: 2;
  grid-row: 3;
}

.footer {
  grid-area: 4 / 1 / 4 / 4;
}
</style>
