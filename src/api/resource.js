import http from './request.js'
let path = {	
	getSmsCode:'login/getsmscode',					//获取短信验证码
	login:'login/login',							//登录
	getPrenticeList:'user/getprenticelist',			//获取徒弟列表
	addPrentice:'user/addprentice',					//添加徒弟
	getMyInfo:'user/getmyinfo',						//获取我的信息
	getMyserial:'user/getmyserial',					//资金流水
}
export default{
	//获取短信验证码
	getSmsCode(params){
		return http.get(path.getSmsCode, params)
	},
	//登录
	login(params){
		return http.post(path.login, params)
	},
	//获取徒弟列表
	getPrenticeList(params){
		return http.get(path.getPrenticeList, params)
	},
	//添加徒弟
	addPrentice(params){
		return http.post(path.addPrentice, params)
	},
	//获取我的信息
	getMyInfo(params){
		return http.get(path.getMyInfo, params)
	},
	//资金流水
	getMyserial(params){
		return http.get(path.getMyserial, params)
	},
	

}