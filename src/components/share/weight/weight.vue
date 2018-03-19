<template>
	<div class="weight-wrapper">
		<!--<v-header :type="3" :content="content"></v-header>-->
		<div class="title">体态判定</div>
		<div class="content">
			<div class="item" v-for="(item, index) in content.attitude_bases" @click="desc(index)">
				<div class="panel">{{item.name}}</div>
				<div class="img-wrap"><img class="img" v-lazy="item.url" /></div>
			</div>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
	import Vue from 'vue'
	import VueLazyload from 'vue-lazyload'
	import header from '../../header/header'
	import router from 'router/index'
	import { getStudentAssessment, getStudentInfo } from 'api/api'
	import { createToast } from 'common/js/utils'
	import { ERR_OK, lazyloadBaseParams2 } from 'common/js/config'
	export default {
		data () {
			return {
				data: []
			}
		},
		props: {
			content: {}
		},
		beforeCreate () {
			Vue.use(VueLazyload, lazyloadBaseParams2)
		},
		created () {
			
		},
		components: {
			'v-header': header
		},
		methods: {
			desc (index) {
				router.push({
					name: 'desc',
					params: {
						content: this.content.attitude_bases[index]
					}
				})
			}
		}
	}
</script>

<style lang="less">
	@import '../../../common/less/var.less';
	.weight-wrapper {
		overflow-y: auto;
		background-color: #fff;
		.title {
			position: relative;
			padding-bottom: 15px;
			height: 22px;
			margin-bottom: 0;
			padding-left: 10px;
			line-height: 22px;
			font-size: 18px;
			&::after {
				content: '';
				position: absolute;
				left: 0;
				top: 0;
				height: 22px;
				width: 4px;
				border-radius: 10px;
				background-color: @color;
				}
		}
		.header-wrapper {
			margin: 0 -15px;
		}
		.content {
			display: flex;
			flex-wrap: wrap;
			margin: 0 -7.5px;
			.item {
				width: 33.3333%;
				margin: 15px 0;
				padding: 0 7.5px;
				box-sizing: border-box;
				.img-wrap {
					position: relative;
					height: 0;
					padding-bottom: 100%;
					overflow: hidden;
					border-radius: 0 0 8px 8px;
				}
				.img {
					position: absolute;
					left: 0;
					top: 0;
					width: 100%;
					border-radius: 0 0 8px 8px;
				}
			}
			.panel {
				line-height: 33px;
				color: #fff;
				font-size: 14px;
				text-align: center;
				border-radius: 8px 8px 0 0;
				background-color: @color;
			}
		}
	}
</style>