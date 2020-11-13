import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrismicVue from '@prismicio/vue'
import linkResolver from './link-resolver.js';

createApp(App)
  .use(router)
  .mount('#app')
  .use(PrismicVue, {
  endpoint: "https://kegenPortfolio.cdn.prismic.io/api/v2",
  linkResolver
});
