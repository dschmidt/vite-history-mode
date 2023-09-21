import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Editor from './components/Editor.vue'

const app = createApp(App)

const router = createRouter({
    history: createWebHistory('/'),
    routes: [
        {
            path: '/open/:path(.*)?',
            component: Editor,
            children: []
        }
    ]
})
app.use(router)

app.mount('#app')
