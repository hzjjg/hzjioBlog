module.exports = {
    production: {
        devtool: false,
        NODE_ENV: 'production',
        // API_DOMAIN: 'https://node.api.meitu.com',
        jsSourceMap: false,
        cssSourceMap: false,
        // staticPath: '//js.node.meitudata.com/',                 // JS资源cdn路径
        // cssPath: '//css.node.meitudata.com/',                   // CSS资源cdn路径
        // imgPath: '//img.node.meitudata.com/',                   // 图片资源cdn路径
        filenameHash: true,                                        // 生成带hash文件名
    },
    test: {
        devtool: false,
        NODE_ENV: 'test',
        API_DOMAIN: 'http://localnode.api.meitu.com',
        jsSourceMap: false,
        cssSourceMap: false,
        staticPath: '//testjs.node.meitudata.com/',                 // JS资源cdn路径
        cssPath: '//testcss.node.meitudata.com/',                   // CSS资源cdn路径
        imgPath: '//testimg.node.meitudata.com/',                   // 图片资源cdn路径
        filenameHash: true,                                        // 生成带hash文件名
    },
    development: {
        // 开发 devServer 端口
        port: 8081,
        devtool: 'source-map',
        NODE_ENV: 'development',
        API_DOMAIN: 'http://localhost:3000',
        jsSourceMap: false,
        cssSourceMap: false,
        staticPath: '',
        cssPath: '',
        imgPath: '/',
        filenameHash: false,
    }
};
