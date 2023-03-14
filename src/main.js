
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import userMethods from "./services/userMethods.js";
window.axios = require('axios');

import BalmUI from 'balm-ui'; // Official Google Material Components
import BalmUIPlus from 'balm-ui-plus'; // BalmJS Team Material Components
import 'balm-ui-css';


const app = createApp( App );

app.use( router )
app.use( BalmUI )
app.use( BalmUIPlus)


app.mount( '#app' )

// createApp(App).use(router, BalmUI, BalmUIPlus ).mount('#app');
