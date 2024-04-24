import { type App } from "vue"
import PageBuilder from "./PageBuilder.vue"

type PluginOptions = Partial<any>

export default {
    install: (app: App, options: PluginOptions) => {
        options = options
        app.component("PageBuilder", PageBuilder)
    }
}