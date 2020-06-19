const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  css: {
		loaderOptions: {
			postcss: {
				plugins: [
					//假如设计图给的宽度是750，我们通常就会把remUnit设置为75，这样我们写样式时，可以直接按照设计图标注的宽高来1:1还原开发。
					require('postcss-px2rem')({
						remUnit: 75
					})
				]
			}
		},
	},
	chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@assets',resolve('src/assets'))
      // 这里只写了两个个，你可以自己再加，按这种格式.set('', resolve(''))
	},
	devServer: {
    proxy: {
        '/api': {     //这里最好有一个 /
            target: 'http://localhost:3001',  // 后台接口域名
            ws: true,        //如果要代理 websockets，配置这个参数
						changeOrigin: true,  //是否跨域
						pathRewrite:{
							'^/api':''
						}
				},
				'/abc':{
						target: 'https://m.you.163.com',  // 后台接口域名
            ws: true,        //如果要代理 websockets，配置这个参数
						changeOrigin: true,  //是否跨域
						pathRewrite:{
							'^/abc':''
						}
				}
    }
  }
}