import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import Articles from './components/Articles.vue';
import About from './components/About.vue';
import Contact from './components/Contact.vue';
import Gallery from './components/Gallery.vue';

Vue.use(VueRouter);

Vue.config.productionTip = false

const routes = [
  { path: '/', component: About},
  { path: '/articles', component: Articles},
  { path: '/gallery', component: Gallery},
  { path: '/contact', component: Contact},
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
