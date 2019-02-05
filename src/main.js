import Vue from 'vue'
import VueRouter from 'vue-router';
import Lightbox from 'vue-my-photos';
import App from './App.vue'
import Articles from './components/Articles.vue';
import About from './components/About.vue';
import Contact from './components/Contact.vue';
import Gallery from './components/Gallery.vue';
import Terms from './components/Terms.vue';
import Privacy from './components/Privacy.vue';

Vue.use(VueRouter);
Vue.use(Lightbox);
Vue.component('lightbox', Lightbox);
Vue.config.productionTip = false

const routes = [
  { path: '/', component: About},
  { path: '/articles', component: Articles},
  { path: '/gallery', component: Gallery},
  { path: '/contact', component: Contact},
  { path: '/terms', component: Terms},
  { path: '/privacy', component: Privacy},
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
