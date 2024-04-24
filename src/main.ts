import { createApp } from 'vue'
// import '../dist/style.css'
import App from './App.vue'
// @ts-ignore
// import pageBuilder from '../dist/page-builder.js'
import pageBuilder from '../lib'
const app = createApp(App)

app.use(pageBuilder, {})
app.mount('#app')
