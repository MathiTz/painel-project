import "font-awesome/css/font-awesome.css";
import Vue from "vue";

import App from "./App";

import "./config/bootstrap";
import "./config/msgs";
import store from "./config/store";
import router from "./config/router";

Vue.config.productionTip = false;

// TEMPORÁRIO !
require("axios").defaults.headers.common["Authorization"] =
  "bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6Ik1hdGhldXMgQWx2ZXMiLCJlbWFpbCI6Im1hdGhldXMuc2FudG9zQGFsdS51ZmMuYnIiLCJhZG1pbiI6dHJ1ZSwiaWF0IjoxNTYwNzE0OTkxLCJleHAiOjE1NjA5NzQxOTF9.y3Eo10IqTRoxWphJZ8LNzqVmQWWPez0TWe3OmB2XPMI";

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
