<template>
	<div class="search-wrapper">
		<div class="input-wrap">
			<i class="iconfont icon-sousuo"></i>
			<input class="input" type="text" value="" v-model="text" placeholder="请输入学员名称" />
			<i class="iconfont icon-guanbi close" @click="close" v-show="text!=''"></i>
		</div>
		<div class="btn-primary btn" @click="search">搜索</div>
	</div>
</template>

<script type="text/ecmascript-6">
	import BScroll from 'better-scroll'
	import { trim } from '../../common/js/utils.js'
	export default {
		data() {
			return {
				text: ''
			}
		},
		created () {
		},
		components: {
		},
		methods: {
			close () {
				this.text = '';
			},
			search () {
				if (!trim(this.text)) {
					this.showAlert('请输入搜索内容');
					return;
				}
				this.$emit('search', this.text);
			},
			showAlert(content) {
				this.$createDialog({
					type: 'alert', 
					title: '提示',
					content,
					icon: 'cubeic-alert' 
				}).show(); 
			}
		}
	}
</script>

<style lang="less">
	@radius: 40px;
	.search-wrapper {
		display: flex;
		padding: 10px 15px;
		font-size: 14px;
		background-color: #fff;
		.input-wrap {
			display: flex;
			flex: 1;
			line-height: 42px;
			padding: 0 12px;
			border: 1px solid #e2e2e2;
			border-radius: @radius;
			margin-right: 15px;
			.icon-sousuo {
				font-size: 16px;
			}
			.input {
				flex: 1;
				margin-left: 12px;
			}
			.close {
				color: #999999;
			}
		}
		.btn {
			width: 85px;
			border-radius: @radius;
		}
	}
</style>