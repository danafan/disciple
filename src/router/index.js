import Vue from 'vue'
import Router from 'vue-router'

const login = resolve=>System.import('@/pages/login')
const navigation = resolve=>System.import('@/pages/navigation')
const index = resolve=>System.import('@/pages/index')
const mine = resolve=>System.import('@/pages/mine')
const money_record = resolve=>System.import('@/pages/money_record')
const cash = resolve=>System.import('@/pages/cash')
// const disciple = resolve=>System.import('@/pages/disciple')
// const disciple_order = resolve=>System.import('@/pages/disciple_order')


Vue.use(Router);

const router = new Router({
	routes: [
	{
		path: '/login',
		name:"登录",
		component: login
	},
	{
		path: '/navigation',
		name:"导航",
		component: navigation,
		children:[
		{path: '/index',name:"首页",component: index},
		{path: '/mine',name:"我的",component: mine}
		]
	},
	{
		path: '/money_record',
		name:"资金记录",
		component: money_record
	},
	{
		path: '/cash',
		name:"提现",
		component: cash
	},
	// {
	// 	path: '/create_problem',
	// 	name:"新增问题",
	// 	component: create_problem
	// },
	// {
	// 	path: '/order_detail',
	// 	name:"任务详情",
	// 	component: order_detail
	// },
	// {
	// 	path: '/disciple',
	// 	name:"徒弟列表",
	// 	component: disciple
	// },
	// {
	// 	path: '/disciple_order',
	// 	name:"徒弟订单",
	// 	component: disciple_order
	// },
	]
})
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}

export default router;
