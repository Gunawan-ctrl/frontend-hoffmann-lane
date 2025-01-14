import vuetify from './plugins/vuetify'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VueApexCharts from "vue3-apexcharts";
import format from "@/boot/utils.js"



import App from './App.vue'
import router from './router'

const app = createApp(App)

app.config.globalProperties.$formatCurrency = format.formatCurrency;

app.use(createPinia())
app.use(router)
app.use(vuetify)
app.use(VueApexCharts)

app.mount('#app')
