module.exports = {	
	devServer: {
		proxy: {
			'/api': {
				target: 'http://csvip.gxk8090.com/',
				// target: 'http://qwe.qqmmdog.com',
				ws: true,
				changOlrigin: true,		//是否跨域
			}
		}
	}
}