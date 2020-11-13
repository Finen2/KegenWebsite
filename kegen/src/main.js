import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Vue from 'vue';
import PrismicVue from '@prismicio/vue'
import linkResolver from './link-resolver.js';

// Add this before the new Vue instance
Vue.use(PrismicVue, {
  endpoint: "https://your-repo-name.cdn.prismic.io/api/v2",
  linkResolver
});

createApp(App).use(router).mount('#app')
