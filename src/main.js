import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

import Vant from 'vant';
import '/@modules/vant/lib/index.css';
import VueRouter from '/@/route'


const app = createApp(App);
app.use(Vant);
app.use(VueRouter);

app.mount('#app')
