<template>
	<div class="cash_container">
		<div class="cash_content">
			<div class="top">
				<div class="label">提现金额</div>
				<div class="can_cash">可提现100.00</div>
			</div>
			<div class="input_content">
				<div class="input_left">
					<div class="icon">¥</div>
					<input class="input_box" type="number" placeholder="请输入提现金额" v-model="money">
				</div>
				<div class="all_cash">全部提现</div>
			</div>
		</div>
		<div class="cash_but">提现</div>
	</div>
</template>
<style lang="less" scoped>
.cash_container{
	padding:.2rem;
}
.cash_content{
	border-radius: .16rem;
	padding:.2rem;
	background: #fff;
	width: 100%;
	height: 2.26rem;
	.top{
		display: flex;
		align-items: center;
		.label{
			margin-right: .36rem;
			font-size: .28rem;
			color: #333;
		}
		.can_cash{
			font-size: .28rem;
			color: #666;
		}
	}
	.input_content{
		margin-top: .4rem;
		border-bottom: 2px solid #EBEBEB;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding-top: .12rem;
		padding-bottom: .12rem;
		.input_left{
			display: flex;
			align-items: center;
			.icon{
				margin-right: .1rem;
				font-size: .4rem;
				color:#333333;
				font-weight: 600;
			}
			.input_box{
				display: block;
				border: none;
				outline: none;
				font-size: .28rem;
				box-sizing: border-box;
			}
			input::-webkit-input-placeholder {
				color: #999999;
			}
			input:-moz-placeholder {
				color: #999999;
			}
			input:-ms-input-placeholder {
				color: #999999;
			}
		}
		.all_cash{
			font-size: .28rem;
			color:#00C693;
		}
	}
}
.cash_but{
	border-radius:.1rem;
	position: absolute;
	left: 50%;
	bottom: .52rem;
	transform: translate(-50%);
	background: #00C693;
	width: 6.86rem;
	text-align: center;
	height: .9rem;
	line-height: .9rem;
	font-size: .3rem;
	color:#FFFFFF;
}
</style>
<script>
	export default{
		data(){
			return{
				money:""
			}
		}
	}
</script>















