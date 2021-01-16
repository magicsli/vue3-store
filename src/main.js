import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

import Vant from 'vant';
import '/@modules/vant/lib/index.css';
import VueRouter from '/@/route'
import store from '/@/store'

const app = createApp(App);
app.use(Vant);
app.use(VueRouter);
app.use(store);

app.mount('#app')
