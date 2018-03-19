<template>
	<div class="vote-content">
		<div class="title">体态判定</div>
		<div class="content">
			<div class="item" >
				<div class="head">头颈部</div>
				<div class="body">
					<div class="desc" >
						<div class="text">头部前倾</div>
						<div class="right" v-if="content.head_forward==='Y'"><i class="iconfont icon-dagou-"></i></div>
						<div class="right" v-else ><div class="status">头部前倾</div></div>
					</div>
					<div class="desc" >
						<div class="text">头部侧歪</div>
						<div class="right" v-if="content.head_side==='Y'"><i class="iconfont icon-dagou-"></i></div>
						<div class="right" v-else ><div class="status">头部侧歪</div></div>
					</div>
				</div>
			</div>
			<div class="item" >
				<div class="head">肩部</div>
				<div class="body">
					<div class="desc" >
						<div class="text">圆肩</div>
						<div class="right" v-if="content.shoulder_round==='Y'"><i class="iconfont icon-dagou-"></i></div>
						<div class="right" v-else ><div class="status">圆肩</div></div>
					</div>
					<div class="desc" >
						<div class="text">高低肩</div>
						<div class="right" v-if="content.shoulder_hal==='Y'"><i class="iconfont icon-dagou-"></i></div>
						<div class="right" v-else ><div class="status">高低肩</div></div>
					</div>
				</div>
			</div>
			<div class="item" >
				<div class="head">躯干</div>
				<div class="body">
					<div class="desc" >
						<div class="text">驼背</div>
						<div class="right" v-if="content.torso_hmpback==='Y'"><i class="iconfont icon-dagou-"></i></div>
						<div class="right" v-else ><div class="status">驼背</div></div>
					</div>
					<div class="desc" >
						<div class="text">重心偏移</div>
						<div class="right" v-if="content.torso_offset==='Y'"><i class="iconfont icon-dagou-"></i></div>
						<div class="right" v-else ><div class="status">重心偏移</div></div>
					</div>
				</div>
			</div>
			<div class="item" >
				<div class="head">腰部</div>
				<div class="body">
					<div class="desc" >
						<div class="text">骨盆前倾</div>
						<div class="right" v-if="content.wasit_forward==='Y'"><i class="iconfont icon-dagou-"></i></div>
						<div class="right" v-else ><div class="status">骨盆前倾</div></div>
					</div>
					<div class="desc" >
						<div class="text">骨盆后倾</div>
						<div class="right" v-if="content.wasit_backward==='Y'"><i class="iconfont icon-dagou-"></i></div>
						<div class="right" v-else ><div class="status">骨盆后倾</div></div>
					</div>
					<div class="desc" >
						<div class="text">骨盆侧倾</div>
						<div class="right" v-if="content.wasit_side==='Y'"><i class="iconfont icon-dagou-"></i></div>
						<div class="right" v-else ><div class="status">骨盆侧倾</div></div>
					</div>
				</div>
			</div>
			<div class="item" >
				<div class="head">腿部</div>
				<div class="body">
					<div class="desc" >
						<div class="text">X型腿</div>
						<div class="right" v-if="content.legs_x==='Y'"><i class="iconfont icon-dagou-"></i></div>
						<div class="right" v-else ><div class="status">X型腿</div></div>
					</div>
					<div class="desc" >
						<div class="text">O型腿</div>
						<div class="right" v-if="content.legs_y==='Y'"><i class="iconfont icon-dagou-"></i></div>
						<div class="right" v-else ><div class="status">O型腿</div></div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
	export default {
		props: {
			content: {
				type: Object
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
	@import '../../../../common/less/var.less';
	.vote-content {
		margin: 15px 0;
		padding: 15px;
		background-color: #fff;
		font-size: 14px;
		color: #333;
		.title {
			position: relative;
			padding-bottom: 15px;
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
				display: flex;
				align-items: center;
				margin: 1px 0;
				background-color: #fdefee;
				.head {
					width: 26%;
					font-weight: bold;
					text-align: center;
				}
				.body {
					flex: 1;
					.desc {
						padding: 18px 0;
						overflow: hidden;
						.text {
							float: left;
						}
						.right {
							width: 50%;
							text-align: center;
							float: right;
							.iconfont {
								color: #60b81e;
								font-size: 20px;
							}
							.status {
								color: #e72928;
							}
						}
					}
				}
			}
		}
	}
</style>