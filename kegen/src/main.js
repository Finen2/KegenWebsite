import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrismicVue from '@prismicio/vue'
import linkResolver from './link-resolver.js';

//Add this before the new Vue instance
// app.use(PrismicVue, {
//   endpoint: "https://kegenPortfolio.cdn.prismic.io/api/v2",
//   linkResolver
// });

createApp(App)
  .use(PrismicVue, {
    endpoint: "https://kegenportfolio.cdn.prismic.io/api/v2",
    linkResolver
  })
  .use(router)
  .mount('#app')
