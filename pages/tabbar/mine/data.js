const orderMenus = [
	{
		id: 1,
		img: '/static/img/common/bank-card.svg',
		name: '待付款'
	},
	{
		id: 2,
		img: '/static/img/common/bank-card.svg',
		name: '待发货'
	},
	{
		id: 3,
		img: '/static/img/common/bank-card.svg',
		name: '待收货'
	},
	{
		id: 5,
		img: '/static/img/common/bank-card.svg',
		name: '待评价'
	},
	{
		id: 4,
		img: '/static/img/common/bank-card.svg',
		name: '售后'
	}
]

const menuList = [
	{
		id: 1,
		name: 'page.我的优惠券',
		page: '/pages-next/mine/my-coupon/index'
	},
	{
		id: 2,
		name: 'page.我的积分',
		page: '/pages-next/mine/my-points/index'
	},
	{
		id: 3,
		name: 'page.我的收藏',
		page: '/pages-next/mine/my-collect/index'
	},
	{
		id: 4,
		name: 'page.我的足迹',
		page: '/pages-next/mine/my-footmark/index'
	},
	{
		id: 5,
		name: 'page.APP下载',
		page: '/pages-next/mine/download-app/index'
	},
	{
		id: 6,
		name: 'page.当前版本',
		page: ''
	},
	{
		id: 7,
		name: 'page.官方客服',
		page: '/pages-next/mine/official-service/index'
	}
]

const assets = [
	{
		value: 880,
		name: 'page.宫悦币',
		page: '/pages-next/mine/gongyue-coin/index'
	},
	{
		value: 1080,
		name: 'page.幸运豆',
		page: '/pages-next/mine/lucky-bean/index'
	},
	{
		value: 560,
		name: 'page.视投金',
		page: '/pages-next/mine/video-deposit/index'
	}
]

module.exports = {
	orderMenus,
	menuList,
	assets
}