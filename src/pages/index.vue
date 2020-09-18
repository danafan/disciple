<template>
	<div class="index_container">
		<div class="title_box">
			<div class="title_text">徒弟列表</div>
			<div class="route_title" @click="openAdd">添加徒弟</div>
		</div>
		<div class="disciple" v-infinite-scroll="loadMore"
		infinite-scroll-disabled="loading"
		infinite-scroll-distance="10">
		<div class="disciple_item" v-for="item in prentice_list">
			<div class="disciple_info">
				<div class="ww">{{item.ww}}</div>
				<div class="desc">完成任务数：{{item.order_total}}</div>
				<div class="desc">累计带来佣金(元)：{{item.award_total}}</div>
			</div>
			<div class="status">{{item.status_desc}}</div>
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
		overflow-y: scroll;
		-webkit-overflow-scrolling: touch;
		.disciple_item{
			margin-top: .1rem;
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
	import resource from '../api/resource.js'
	export default{
		data(){
			return{
				add_box:false,		
				wang_code:"",		//旺旺号
				page:1,
				pagesize:10,
				loading:true,
				prentice_list:[]
			}
		},
		created(){
			//获取徒弟列表
			this.getPrenticeList();
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
			//获取徒弟列表
			getPrenticeList(){
				let req = {
					page:this.page,
					pagesize:this.pagesize
				}
				resource.getPrenticeList(req).then(res => {
					if(res.data.code == 1){
						let data = res.data.data;
						this.loading = this.page === data.last_page?true:false;
						let list = data.data;
						this.prentice_list = this.prentice_list.concat(Array.from(list));
					}else{
						this.$toast(res.data.msg);
					}
				})
			},
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
					resource.addPrentice({ww:this.wang_code}).then(res => {
						if(res.data.code == 1){
							//获取徒弟列表
							this.prentice_list = [];
							this.page == 1;
							this.getPrenticeList();
							this.add_box = false;
							this.$toast(res.data.msg);
        				}else{
        					this.$toast(res.data.msg);
        				}
        			})
				}
			},
		}
	}
</script>