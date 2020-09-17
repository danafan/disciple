<template>
	<div class="container">
		<div class="login_title">手机号登录</div>
		<input class="input_element" type="text" placeholder="请输入手机号" v-model="phone">
		<div class="code_box">
			<input class="code" type="number" placeholder="短信验证码" v-model="code">
			<div class="but_text" :class="{'but_text_active':!notBut}" @click="getCode">{{but_text}}</div>
		</div>
		<div class="login_but" @click="login">登录</div>
	</div>
</template>
<style lang="less" scoped>
.container{
	padding-left: .44rem;
	padding-right: .44rem;
	.login_title{
		margin-top: 1.34rem;
		margin-bottom: .84rem;
		font-size: .44rem;
		color: #000;
		font-weight: 500;
	}
	.input_element{
		border-radius: .08rem;
		background: #F7FFFD;
		width: 6.58rem;
		height: .92rem;
		padding-left: .6rem;
		display: flex;
		align-items: center;
		border: none;
		outline: none;
		font-size: .32rem;
		box-sizing: border-box;
	}
	.code_box{
		margin-top: .26rem;
		border-radius: .08rem;
		background: #F7FFFD;
		width: 6.58rem;
		height: .92rem;
		padding-left: .6rem;
		padding-right: .42rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
		.code{
			border: none;
			outline: none;
			font-size: .32rem;
		}
		.but_text{
			font-size: .32rem;
			color:#00C693;
		}
		.but_text_active{
			color:#666666;
		}
	}
	input::-webkit-input-placeholder {
		color: #B9C0D4;
	}
	input:-moz-placeholder {
		color: #B9C0D4;
	}
	input:-ms-input-placeholder {
		color: #B9C0D4;
	}
	.password{
		margin-top: .26rem;
	}
	.login_but{
		margin-top: .8rem;
		background: #00C693;
		border-radius:.46rem;
		width: 100%;
		height: .9rem;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: .32rem;
		color:#fff;
	}
}
</style>
<script>
	// import resource from '../api/resource.js'
	export default{
		data(){
			return{
				phone:"",
				code:"",
				but_text:"发送验证码",
				notBut: true,                   	//默认获取验证码按钮可点击
      			time:60,                        	//默认倒数60秒
			}
		},
		methods:{
			//获取验证码
      		getCode(){
      			if(!this.judgmentPhone.test(this.phone)){
      				this.$toast("请输入正确的账号");
      			}else{
        			if(this.notBut == true){//如果按钮可以点击
        				let obj = {
        					phone: this.phone,
        				}
        				this.$toast("发送成功...");
        				this.timeDown();
        				// resource.getCaptcha(obj).then(res => {
            // 				if(res.data.code == 1){ //发送成功
            // 					this.$message.success("发送成功...");
            // 					this.time = res.data.data;
            // 					this.timeDown();
            // 				}else{
            // 					this.$message.warning(res.data.msg);
            // 				}
            // 			});
        			}else{
        				this.$toast("操作频繁");
        			}
        		}
        	},
			// 倒计时
			timeDown () {
				var _this = this;
				if (_this.time > 0) {
        			_this.notBut = false;   //按钮不可点击
        			_this.time --;
        			_this.but_text = "重新发送" + _this.time + "秒";
        			setTimeout(_this.timeDown, 1000);
        		} else {
        			_this.notBut = true;    //按钮可以点击
        			_this.time = 60;
        			_this.but_text = "获取验证码";
        		}
        	},
			// 登录
			login(){
				// if(this.wangwang == ''){
				// 	this.$toast("请输入旺旺号");
				// }else if(this.password == ''){
				// 	this.$toast("请输入密码");
				// }else{
				// 	let req = {
				// 		ww:this.wangwang,
				// 		pwd:this.password
				// 	}
				// 	resource.login(req).then(res => {
				// 		if(res.data.code == 1){
				// 			this.$toast(res.data.msg);
				// 			this.$router.replace('/index');
				// 		}else{
				// 			this.$toast(res.data.msg);
				// 		}
				// 	})
				// }

			}
		}
	}
</script>










