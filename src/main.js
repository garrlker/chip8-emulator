import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import buefy from "buefy";

Vue.config.productionTip = false;

Vue.use(buefy);

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
