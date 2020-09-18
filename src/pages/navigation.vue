<template>
	<div class="box">
		<div class="tabContent">
			<router-view></router-view>
		</div>
		<div class="tab">
			<div class="tabItem" @click="checkTab('index')">
				<img src="../assets/index_active.png" v-if="activeIndex == '/index'">
				<img src="../assets/index.png" v-else>
				<div class="tabTxt" :class="{'tabTxtSel':activeIndex == '/index'}">徒弟列表</div>
			</div>
			<div class="tabItem" @click="checkTab('mine')">
				<img src="../assets/mine_active.png" v-if="activeIndex == '/mine'">
				<img src="../assets/mine.png" v-else>
				<div class="tabTxt" :class="{'tabTxtSel':activeIndex == '/mine'}">我的</div>
			</div>
		</div>		
	</div>
</template>
<style lang="less" scoped>
.box{
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display:flex;
	flex-direction: column;
	.tabContent{
		flex:1;
		overflow-y: scroll;
		-webkit-overflow-scrolling: touch;
	}
	.tab{
		border-top:.04rem solid #E6E6E6; 
		background: #fff;
		width: 100%;
		height: .98rem;
		display: flex;
		align-items: center;
		justify-content: space-around;
		.tabItem{
			display:flex;
			flex-direction: column;
			align-items: center;
			img{
				margin-bottom: .03rem;
				width: .44rem;
				height: .44rem;
			}
			.tabTxt{
				font-size: .22rem;
				color: #a0a0a0;
			}
			.tabTxtSel{
				font-size: .22rem;
				color: #000;
			}
		}

	}
}
</style>
<script>
	export default{
		data(){
			return{
				activeIndex:"/index"
			}
		},
		created(){
			this.activeIndex = this.$route.path;
		},
		watch:{
			$route:function(n){
				this.activeIndex = n.path;
				this.$router.push(n.path);
			}
		},
		methods:{
			//切换导航
			checkTab(tab){
				this.activeIndex = `/${tab}`;
				this.$router.push(`/${tab}`)
			}
		}
	}
</script>










