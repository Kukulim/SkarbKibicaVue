import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import router from './router'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

import VuejsDialog from "vuejs-dialog"
import 'vuejs-dialog/dist/vuejs-dialog.min.css';
Vue.use(VuejsDialog);

import Vuelidate from 'vuelidate'
Vue.use(Vuelidate);

import VCalendar from 'v-calendar';
Vue.use(VCalendar, {
  componentPrefix: 'vc'
});

import VueNumberInput from '@chenfengyuan/vue-number-input';
Vue.use(VueNumberInput);

Vue.use(require('vue-moment'));

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { dom } from "@fortawesome/fontawesome-svg-core";
dom.watch();

import { faGithub } from "@fortawesome/free-brands-svg-icons";
library.add(faGithub);

library.add(fas);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
