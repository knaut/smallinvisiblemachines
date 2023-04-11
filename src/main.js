import './global.css'
import App from './App.svelte'

const app = ( function() {
    return new App({
        target: document.body
    })
})()
export default app
