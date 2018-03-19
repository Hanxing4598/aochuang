<template>
	<div class="footer-wrapper">
		<div class="item" :class="{'active': selected==1}" @click="goToPage('share', 1)" >
			<!--选中 icon-icon-test6  -->
			<i class="iconfont" :class="selected==1?'icon-icon-test6':'icon-icon-test7'"></i>
			<p class="text">分享报告</p>
		</div>
		<div class="item" :class="{'active': selected==2}" @click="goToPage('assess', 2)">
			<!--选中 icon-icon-test3  -->
			<i class="iconfont" :class="selected==2?'icon-icon-test3':'icon-icon-test1'"></i>
			<p class="text">评估图像</p>
		</div>
		<div class="item" :class="{'active': selected==3}" @click="goToPage('weight', 3)">
			<!--选中 icon-icon-test2  -->
			<i class="iconfont icon-icon-test" :class="selected==3?'icon-icon-test2':'icon-icon-test'"></i>
			<p class="text">体态判定</p>
		</div>
		<div class="item" :class="{'active': selected==4}" @click="goToPage('analysis', 4)">
			<!--选中 icon-icon-test4  -->
			<i class="iconfont" :class="selected==4?'icon-icon-test4':'icon-icon-test5'"></i>
			<p class="text">体态分析</p>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
	import router from '../../router/index.js'
	export default {
		props: {
			selectedIndex: {
				type: Number,
				default () {
					return parseInt(localStorage.getItem('selected')) || 1
				}
			}
		},
		data () {
			return {
				selected: this.selectedIndex
			};
		},
		components: {
		},
		methods: {
			goToPage (page, index) {
				router.replace({
					name: page
				}, ()=>{
					this.selected = index
					localStorage.setItem('selected', index)
				})
			}
		}
	}
</script>

<style lang="less">
	@import '../../common/less/var.less';
	.footer-wrapper {
		display: flex;
		position: fixed;
		bottom: 0;
		left: 0;
		background-color: #fff;
		width: 100%;
		font-size: 12px;
		color: #666;
		.item {
			width: 25%;
			padding: 8px 0;
			text-align: center;
			.text {
				margin-top: 6px;
			}
			.iconfont {
				font-size: 22px;
			}
			&.active {
				color: @color;
			}
		}
	}
</style>