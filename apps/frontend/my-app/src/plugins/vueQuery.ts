// src/plugins/vueQuery.ts
import { VueQueryPlugin, QueryClient, type VueQueryPluginOptions } from '@tanstack/vue-query'
import type { App } from 'vue'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1, // default 3
      staleTime: 1000 * 60 * 5, // 5 minutes
    },
  },
})

export { queryClient }

export default {
  install(app: App) {
    const options: VueQueryPluginOptions = {
      queryClient
    }
    app.use(VueQueryPlugin, options)
  }
}