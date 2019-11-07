const { readFile, writeFile } = require('fs').promises
const path = require('path')
const resolve = (...filePath) => path.resolve(__dirname, ...filePath)

const comReg = /\/\*[\s\S]+?\*\//g
const funcReg = /function[\s\S]+?\}/g


(async () => {
    const target = resolve(__dirname, './code/index.js')

    readFile(target, 'utf-8').then(res => {
        console.log(res);
    })
})()