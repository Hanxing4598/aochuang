<template>
	<div class="result-content">
		<div class="title">结果分析</div>
		<div class="content">
			<div class="item" v-for="item in content" >
				<div class="item-title">{{item.name}}</div>
				<p class="text">{{item.definition}}</p>
				<div class="sub-title">易发人群</div>
				<p class="text">{{item.easy_people}}</p>
				<div class="sub-title">危害</div>
				<p class="text">{{item.harm}}</p>
			</div>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
	export default {
		props: {
			content: {
				type:Array
			}
		},
		created () {
		},
		components: {
		},
		methods: {
		}
	}
</script>

<style lang="less">
	@import '../../../common/less/var.less';
	.result-content {
		margin: 15px 0;
		padding: 15px;
		background-color: #fff;
		font-size: 14px;
		color: #333;
		.title {
			position: relative;
			height: 22px;
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
		.content {
			.item {
				padding: 10px 15px;
				margin: 15px 0;
				background-color: #fcf0db;
				font-size: 14px;
				border-radius: 5px;
				.item-title {
					margin: 10px;
					text-align: center;
					font-size: 18px;
				}
				.text {
					line-height: 24px;
				}
				.sub-title {
					margin-top: 18px;
					margin-bottom: 10px;
					color: #e6242a;
					font-size: 16px;
				}
			}
		}
	}
</style>