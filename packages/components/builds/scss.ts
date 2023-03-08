import { execSync } from 'child_process'
import { resolve, dirname } from 'path'
import { promises as fs } from "fs"
import scss from "sass"
import glob from "fast-glob"

// const sourceDir = resolve(__dirname, '../src')
//lib文件目录
const targetLib = resolve(__dirname, '../lib')
//es文件目录
const targetEs = resolve(__dirname, '../es')

//src目录

const srcDir = resolve(__dirname, '../src')

const buildScss = async () => {
    //直接将scss文件复制到打包后目录
    // await cpy(`${sourceDir}/**/*.scss`, targetLib)
    // await cpy(`${sourceDir}/**/*.scss`, targetEs)

    //获取打包后.scss文件目录(lib和es一样)
    const scssFils = await glob("**/*.scss", { cwd: srcDir, onlyFiles: true })

    //遍历含有scss的目录
    for (let path in scssFils) {

        const filePath = `${srcDir}/${scssFils[path]}`
        //将scss解析成css
        const code = await scss.renderSync({ file: filePath })

        //拿到.css后缀path
        const cssPath = scssFils[path].replace('.scss', '.css')

        //将css写入对应目录
        await fs.writeFile(resolve(targetLib, cssPath), code.css)
        const ccsPathOfEs = resolve(targetEs, cssPath);
        await fs.writeFile(ccsPathOfEs, code.css)
        execSync(`sed -i "1i\import './index.css'"  ${resolve(dirname(ccsPathOfEs), 'index.vue.js')}`)
    }
}
buildScss()



