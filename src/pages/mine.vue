<template>
	<div>
		<div class="top_back">
			<div class="phone">13067882143</div>
			<div class="assets_box">
				<div class="assets_item">
					<div class="val">7000.00</div>
					<div class="label">总收益</div>
				</div>
				<div class="assets_item">
					<div class="val">7000.00</div>
					<div class="label">总收益</div>
				</div>
				<div class="assets_item">
					<div class="val">7000.00</div>
					<div class="label">总收益</div>
				</div>
				<div class="assets_item">
					<div class="val">7000.00</div>
					<div class="label">总收益</div>
				</div>
			</div>
			<div class="cash_but" @click="$router.push('/cash')">提现</div>
		</div>
		<div class="setting_box" @click="$router.push('/money_record')">
			<div class="set_left">
				<img class="set_icon" src="../assets/money_record.png">
				<div class="label">资金记录</div>
			</div>
			<img class="right_icon" src="../assets/right.png">
		</div>
	</div>
</template>
<style lang="less" scoped>
.top_back{
	background: linear-gradient(136deg, #40E5BB 0%, #00C693 100%);
	width: 100%;
	padding: .9rem .44rem .64rem;
	.phone{
		margin-bottom: .58rem;
		font-size: .32rem;
		color: #FFFFFF;
	}
	.assets_box{
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		.assets_item{
			display: flex;
			flex-direction: column;
			align-items: center;
			.val{
				font-size: .32rem;
				color:#FFFFFF;
				font-weight: 500;
			}
			.label{
				font-size: .28rem;
				color:#FFFFFF;
			}
		}
	}
	.cash_but{
		border-radius: .46rem;
		background: #fff;
		margin: .42rem auto 0;
		width: 2.2rem;
		text-align: center;
		height: .6rem;
		line-height: .6rem;
		font-size: .3rem;
		color:#00C693;
	}
}
.setting_box{
	background: #fff;
	width: 100%;
	height: 1.1rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding-left: .3rem;
	padding-right: .3rem;
	.set_left{
		display: flex;
		align-items: center;
		.set_icon{
			margin-right: .32rem;
			width: .44rem;
			height: .44rem;
		}
		.label{
			font-size: .28rem;
			color:#000000;
		}
	}
	.right_icon{
		width: .28rem;
		height: .28rem;
	}
}
</style>
<script>
	export default{

	}
</script>