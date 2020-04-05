import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';

import Slideshow from './components/slideshow/Slideshow.vue';
import SlideshowItem from './components/slideshow/SlideshowItem.vue';

Vue.config.productionTip = false;

new Vue({
    render: h => h(App)
}).$mount('#app');

export { Slideshow };
export { SlideshowItem };
