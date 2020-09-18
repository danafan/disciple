<template>
	<div class="list" v-infinite-scroll="loadMore"
	infinite-scroll-disabled="loading"
	infinite-scroll-distance="10">
	<div class="record_item" v-for="item in record_list">
		<div class="item_left">
			<div class="row">
				<div class="time">{{item.update_time}}</div>
				<div class="status">{{item.status_desc}}</div>
			</div>
			<div class="row">
				<div class="desc">{{item.type_desc}}</div>
				<div class="content">{{item.type == 1?item.p_ww:item.serial_id}}</div>
			</div>
		</div>
		<div class="check_money">{{item.money}}</div>
	</div>
</div>
</template>
<style lang="less" scoped>
.list{
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	overflow-y: scroll;
	-webkit-overflow-scrolling: touch;
}
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
	import resource from '../api/resource.js'
	export default{
		data(){
			return{
				page:1,
				pagesize:10,
				loading:true,
				record_list:[]
			}
		},
		created(){
			//获取列表
			this.getMyserial();
		},
		methods:{
			//上拉加载
			loadMore(){
				if(!this.loading){
					this.page += 1;
					//获取徒弟列表
					this.getPrenticeList();
				}
			},
			//获取列表
			getMyserial(){
				let req = {
					page:this.page,
					pagesize:this.pagesize,
				}
				resource.getMyserial(req).then(res => {
					if(res.data.code == 1){
						let data = res.data.data;
						this.loading = this.page === data.last_page?true:false;
						let list = data.data;
						this.record_list = this.record_list.concat(Array.from(list));
					}else{
						this.$toast(res.data.msg);
					}
				})
			}
		}
	}
</script>