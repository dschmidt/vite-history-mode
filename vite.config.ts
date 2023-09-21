import { defineConfig, searchForWorkspaceRoot } from 'vite'
import vue from '@vitejs/plugin-vue'

// workaround:
import history from 'connect-history-api-fallback'
import { existsSync } from 'fs'
import { join } from 'path'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),
    // ***********************************
    // COMMENT IN TO ENABLE WORKAROUND
    // ***********************************
    // {
    //   name: 'fallback-to-index-html',
    //   configureServer(server) {
    //     return () => {
    //       const handler = history({
    //         disableDotRule: true,
    //         rewrites: [
    //           {
    //             from: /$/,
    //             to({ parsedUrl, request }) {
    //               const root = "."
    //               const decodedPath = decodeURIComponent(parsedUrl.pathname)
    //               const rewritten = decodedPath + 'index.html'
    //               console.log('decodedPath', decodedPath, 'rewritten', rewritten)
    //               if (decodedPath !== '/' && existsSync(join(root, decodedPath))) {
    //                 return decodedPath
    //               }
    //               if (existsSync(join(root, rewritten))) {
    //                 return rewritten
    //               }
    //               return `/index.html`
    //             }
    //           }
    //         ]
    //       })

    //       server.middlewares.use(handler)
    //     }
    //   }
    // }
  ],
})
