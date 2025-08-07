import vituum from 'vituum'
import nunjucks from '@vituum/vite-plugin-nunjucks'
import tailwindcss from '@vituum/vite-plugin-tailwindcss'

export default {
    build: {
        manifest: true,
        modulePreload: false,
            rollupOptions: { 
                output: {
                    entryFileNames: "static/cos/[name]-[hash].js",
                    assetFileNames: (assetInfo) => {
                        console.log('assetInfo', assetInfo)
                        if (assetInfo.originalFileName) {
                            let path = assetInfo.originalFileName.replace("src/assets/", "static/cos/").replace("src/styles", "static/cos/styles").replace(assetInfo.name, "[name]-[hash].[ext]");
                            return path
                        }
                        
                        return "static/cos/[name]-[hash].[ext]"
                    }
                }
            }
        },
    plugins: [vituum(), nunjucks({
        root: './src'
    }),
    tailwindcss()]
}
