import { build, defineConfig } from "vite";
import vue from "@vitejs/plugin-vue"
import dts from 'vite-plugin-dts'

export default defineConfig(
    {
        build: {
            target: 'modules',
            //打包文件目录
            outDir: "es",
            //压缩
            minify: false,
            rollupOptions: {
                //忽略打包vue和.less文件
                external: ['vue'],
                input: ['src/index.ts'],
                output:
                    [
                        {
                            format: 'es',
                            //不用打包成.es.js,这里我们想把它打包成.js
                            entryFileNames: (...ar) => {
                                return '[name].js'
                            },
                            //让打包目录和我们目录对应
                            preserveModules: true,
                            //配置打包根目录
                            dir: 'es',
                            preserveModulesRoot: 'src'
                        },
                        {
                            globals: {
                                vue: 'Vue'
                            },
                            name: 'v3_ui',
                            format: 'umd',
                            //不用打包成.mjs
                            entryFileNames: '[name].js',
                            //配置打包根目录
                            dir: 'lib',
                        }
                    ]
            },
            lib: {
                entry: './src/index.ts',
            }
        },

        plugins: [
            vue(),
            dts({
                outputDir: ['lib', 'es'],
                tsConfigFilePath: '../../tsconfig.json'
            }),
            {
                name: 'style',
                generateBundle(_, bundle) {
                    //这里可以获取打包后的文件目录以及代码code
                    const keys = Object.keys(bundle)
                    for (const key of keys) {
                        const bundler: any = bundle[key as any]
                        //rollup内置方法,将所有输出文件code中的.less换成.css,因为我们当时没有打包less文件

                        this.emitFile({
                            type: 'asset',
                            fileName: key,//文件名名不变
                            source: bundler.code?.replace(/.scss.js/g, '.css')
                        })
                    }
                }
            }
        ]
    }
)
