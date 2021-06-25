import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import PrimeVue from 'primevue/config'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import Toast from 'primevue/toast'
import ToastService from 'primevue/toastservice'
import ProgressBar from "primevue/progressbar";

import 'primeicons/primeicons.css'
import 'primevue/resources/primevue.min.css'
import 'primevue/resources/themes/luna-pink/theme.css'
import 'primeflex/primeflex.css';

const app = createApp(App)
app.use(PrimeVue, { ripple: true })
app.use(store)
app.use(router)
app.use(ToastService)
app.component('InputText', InputText)
app.component('Button', Button)
app.component('Toast', Toast)
app.component('ProgressBar', ProgressBar)
app.mount('#app')

