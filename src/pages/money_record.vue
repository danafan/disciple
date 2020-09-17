<template>
	<div>
		<div class="record_item">
			<div class="item_left">
				<div class="row">
					<div class="time">2020-09-20 12:23:23</div>
					<div class="status">失败退回</div>
				</div>
				<div class="row">
					<div class="desc">分佣提成</div>
					<div class="content">8974686928345</div>
				</div>
			</div>
			<div class="check_money">+6</div>
		</div>
	</div>
</template>
<style lang="less" scoped>
.record_item{
	border-bottom: 1px solid #E8E8E8;
	background: #fff;
	width: 100%;
	height: 1.46rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding-left: .4rem;
	padding-right: .4rem;
	.item_left{
		height: 70%;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		.row{
			display: flex;
			align-items: center;
			.time{
				margin-right: .16rem;
				font-size: .28rem;
				color: #666666;
			}
			.status{
				font-size: .24rem;
				color:#00C693;
			}
			.desc{
				margin-right: .16rem;
				font-size: .28rem;
				color:#333333;
			}
			.content{
				font-size: .28rem;
				color:#333333;
			}
		}
	}
	.check_money{
		font-size: .32rem;
		color:#333333;
		font-weight: 500;
	}
	.check_money_add{
		color:#00C693;
	}
}
</style>
<script>
	export default{

	}
</script>