const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    productionSourceMap: false,
    outputDir: 'docs',
    pages: {
        index: {
            // page 的入口
            entry: 'src/index/main.js',
            // 模板来源
            template: 'public/index.html',
            // 在 dist/index.html 的输出
            filename: 'index.html',
            // 当使用 title 选项时，
            // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
            title: 'Index Page',
            // 在这个页面中包含的块，默认情况下会包含
            // 提取出来的通用 chunk 和 vendor chunk。
            chunks: ['chunk-vendors', 'chunk-common', 'index']
        },
        // 可以添加更多页面入口
        page1: {
            entry: 'src/page1/main.js',
            template: 'public/page1.html',
            filename: 'page1.html',
            title: 'Sub Page',
            chunks: ['chunk-vendors', 'chunk-common', 'subpage']
        }
    }
})
