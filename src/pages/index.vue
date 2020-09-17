<template>
	<div class="index_container">
		<div class="title_box">
			<div class="title_text">徒弟列表</div>
			<div class="route_title" @click="openAdd">添加徒弟</div>
		</div>
		<div class="disciple">
			<div class="disciple_item">
				<div class="disciple_info">
					<div class="ww">徒弟旺旺号</div>
					<div class="desc">完成任务数：0</div>
					<div class="desc">累计带来佣金(元)：0.00</div>
				</div>
				<div class="status">待审核</div>
			</div>
		</div>
		<div class="check_order" v-if="add_box">
			<div class="order_content">
				<div class="content_info">
					<input class="input_box" type="text" placeholder="输入徒弟旺旺号" v-model="wang_code">
				</div>
				<div class="buts">
					<div class="but" @click="noConfirmTask">取消</div>
					<div class="line"></div>
					<div class="but" @click="confirmTask">确认</div>
				</div>
			</div>
		</div>
	</div>
</template>
<style lang="less" scoped>
.index_container{
	height: 100%;
	display: flex;
	flex-direction: column;
	.title_box{
		background: #fff;
		width: 100%;
		height: .88rem;
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
		padding-left: .2rem;
		.title_text{
			font-size: .32rem;
			color: #38393A;
			font-weight:500;
		}
		.route_title{
			position: absolute;
			right: .2rem;
			font-size: .28rem;
			color: #000000;
		}
	}
	.disciple{
		flex:1;
		padding:.24rem;
		.disciple_item{
			background: #fff;
			padding-left: .3rem;
			padding-right: .3rem;
			width: 100%;
			height: 1.56rem;
			display: flex;
			align-items: center;
			justify-content: space-between;
			.disciple_info{
				.ww{
					font-size: .28rem;
					color:#333333;
				}
				.desc{
					font-size: .24rem;
					color:#666666;
				}
			}
			.status{
				background: #00C693;
				width: 1.16rem;
				text-align: center;
				height: .46rem;
				line-height: .46rem;
				border-radius: .24rem;
				font-size: .24rem;
				color:#FFFFFF;
			}
			.status_active{
				background: #00B183;
			}
		}
	}
	.check_order{
		background: rgba(0,0,0,.5);
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		.order_content{
			border-radius: .12rem;
			background: #fff;
			width: 5.8rem;
			.content_info{
				padding: .56rem .24rem;
				.input_box{
					display: block;
					border:1px solid #F1F1F1;
					border-radius: .08rem;
					background: #f8f8f8;
					width: 100%;
					height: .8rem;
					padding-left: .26rem;
					border: none;
					outline: none;
					font-size: .28rem;
					box-sizing: border-box;
				}
				input::-webkit-input-placeholder {
					color: #666666;
				}
				input:-moz-placeholder {
					color: #666666;
				}
				input:-ms-input-placeholder {
					color: #666666;
				}
			}
			.buts{
				border-top: .02rem solid #F2F2F2;
				height: .86rem;
				width: 100%;
				display: flex;
				align-items: center;
				justify-content: space-between;
				font-size: .3rem;
				color:#333333;
				font-weight: 600;
				.line{
					border-left: .02rem solid #F2F2F2;
					height: .84rem;
				}
				.but{
					width: 100%;
					display: flex;
					align-items: center;
					justify-content: center;
				}
			}
		}
	}
}
</style>
<script>
	export default{
		data(){
			return{
				add_box:true,		
				wang_code:"",		//旺旺号
			}
		},
		methods:{
			//点击添加徒弟
			openAdd(){
				this.wang_code = "";
				this.add_box = true;
			},
			//取消
			noConfirmTask(){
				this.wang_code = "";
				this.add_box = false;
			},
			//确定
			confirmTask(){
				if(this.wang_code == ""){
					this.$toast("请输入徒弟旺旺号")
				}else{
					console.log(this.wang_code)
				}
				// resource.confirmTask({ww:this.userInfo.ww}).then(res => {
				// 	if(res.data.code == 1){
				// 		clearInterval(this.setinterval);
				// 		this.checkOrder = false;
				// 		//获取用户信息
				// 		this.getUserInfo();
    //     				//获取用户任务
    //     				this.getUserTask();
    //     			}else{
    //     				this.$toast(res.data.msg);
    //     			}
    //     		})
			},
		}
	}
</script>