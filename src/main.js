import Vue from "vue";
import Oklg from "./Oklg.vue";
import router from "./router";
import store from "./vuex/store";

import { BootstrapVue } from "bootstrap-vue";
import VueYoutube from "vue-youtube";

import Scrollspy from "vue2-scrollspy";
var VueScrollTo = require("vue-scrollto");

import hljs from "highlightjs";
import hljsDefineSolidity from "highlightjs-solidity";

hljsDefineSolidity(hljs);
hljs.initHighlightingOnLoad();

Vue.config.productionTip = false;

import "@/assets/scss/style.scss";
import "@/assets/css/materialdesignicons.min.css";

Vue.use(VueYoutube);

Vue.use(Scrollspy);
Vue.use(VueScrollTo);

// Install BootstrapVue
Vue.use(BootstrapVue);

new Vue({
  router,
  store,
  render: (h) => h(Oklg),
}).$mount("#oklg");
