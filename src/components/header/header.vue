<template>
	<div class="header-wrapper">
		<div class="info tc" v-if="type==0">
			<div class="name">{{info.member_name}}<span class="sex">{{info.sex}}</span></div>
			<div class="text-wrap">
				<div class="item">身高：{{info.height || '--'}}</div>
				<div class="item">体重：{{info.weight || '--'}}</div>
				<div class="item">年龄：{{info.age || '--'}}</div>
			</div>
		</div>
		<section class="col-wrap" v-else-if="type==1">
			<div class="title">{{content.member_name || '--'}}</div>
			<div class="col col-2" v-if="column==2">
				<div class="item">
					<p class="text">分析时间</p>
					<p class="text">{{content.date || '--'}}</p>
				</div>
				<div class="item">
					<p class="text">动作名称</p>
					<p class="text">{{content.action_name || '--'}}</p>
				</div>
			</div>
			<div class="col col-3" v-else-if="column==3">
				<div class="item">
					<p class="text">分析编号</p>
					<p class="text">{{content.analysis_no || '--'}}</p>
				</div>
				<div class="item">
					<p class="text">分析时间</p>
					<p class="text">{{content.date || '--'}}</p>
				</div>
				<div class="item">
					<p class="text">动作名称</p>
					<p class="text">{{content.action_name || '--'}}</p>
				</div>
			</div>
			<div class="col col-5" v-else-if="column==5">
				<div class="item">
					<p class="text">评估编号</p>
					<p class="text">{{content.assessment_no || '--'}}</p>
				</div>
				<div class="item">
					<p class="text">评估时间</p>
					<p class="text">{{content.date || '--'}}</p>
				</div>
				<div class="item">
					<p class="text">身高</p>
					<p class="text">{{content.member_hight || '--'}}</p>
				</div>
				<div class="item">
					<p class="text">体重</p>
					<p class="text">{{content.member_weight || '--'}}</p>
				</div>
				<div class="item">
					<p class="text">年龄</p>
					<p class="text">{{content.member_age || '--'}}</p>
				</div>
			</div>
		</section>
		<div class="share col-wrap" v-else-if="type==2">
			<img class="logo" src="./header_logo.png" />
			<i class="iconfont icon-feiji" @click="showShare=true"></i>
			<div class="title">{{content.member_name || '--'}}</div>
			<div class="col col-5">
				<div class="item">
					<p class="text">评估编号</p>
					<p class="text">{{content.assessment_no || '--'}}</p>
				</div>
				<div class="item">
					<p class="text">评估时间</p>
					<p class="text">{{content.date || '--'}}</p>
				</div>
				<div class="item">
					<p class="text">身高</p>
					<p class="text">{{content.member_hight || '--'}}</p>
				</div>
				<div class="item">
					<p class="text">体重</p>
					<p class="text">{{content.member_weight || '--'}}</p>
				</div>
				<div class="item">
					<p class="text">年龄</p>
					<p class="text">{{content.member_age || '--'}}</p>
				</div>
			</div>
			<div class="name">评估教练：{{content.coach_name || '--'}}</div>
		</div>
		<div class="col-wrap onlyname" v-else-if="type==3">
			<div class="title">{{content.member_name || '--'}}</div>
		</div>
		<img class="share-img" @click="showShare=false" v-show="showShare" src="./share.png"/>
	</div>
</template>

<script type="text/ecmascript-6">
	//type: 0 => 学员详情
	//type: 1 => 列表
	//type: 2 => 分享
	//type: 3 => 直接显示姓名
	export default {
		props: {
			type: {
				default: 0
			},
			column: {
				default: 3
			},
			info: {
				type: Object
			},
			content: {
				type: Object
			}
		},
		data () {
			return {
				showShare: false
			};
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
	@import '../../common/less/var.less';
	.header-wrapper {
		font-size: 14px;
		color: #fff;
		.info {
			padding-bottom: 26px;
			background: @color url(./detail_bg.png) no-repeat;
			background-size: cover;
			.name {
				padding: 25px 0;
				font-size: 25px;
				.sex {
					margin-left: 12px;
					font-size: 14px;
				}
			}
			.text-wrap {
				display: flex;
				.item {
					flex: 1;
				}
			}
		}
		.col-wrap {
			padding-bottom: 15px;
			background: @color url(./share_bg.png) no-repeat;
			background-size: 100%;
			.title {
				line-height: 48px;
				text-align: center;
				font-size: 20px;
			}
			&.onlyname {
				padding-bottom: 0;
				.title {
					line-height: 58px;
				}
			}
			&.share {
				position: relative;
				.icon-feiji {
					position: absolute;
					right: 15px;
					top: 15px;
					font-size: 36px;
				}
				.title {
					line-height: 75px;
				}
				.logo {
					position: absolute;
					left: 15px;
					top: 15px;
					width: 48px;
				}
				.name {
					margin-top: 15px;
					padding: 0 15px;
					text-align: right;
				}
			}
		}
		.col {
			display: flex;
			margin: 0 15px;
			line-height: 30px;
			background-size: cover;
			text-align: center;
			border-right: 1px solid #fff;
			border-bottom: 1px solid #fff;
			.item {
				.text {
					border-top: 1px solid #fff;
					border-left: 1px solid #fff;
				}
			}
			&.col-2 {
				.item {
					width: 50%;
				}
			}
			&.col-5 {
				& .item:nth-child(1) {
					width: 44%;
				}
				& .item:nth-child(2) {
					width: 26%;
				}
				& .item:nth-child(3) {
					width: 17%;
				}
				& .item:nth-child(4) {
					width: 13%;
				}
				& .item:nth-child(5) {
					width: 13%;
				}
			}
			&.col-3 {
				& .item:nth-child(1) {
					width: 44%;
				}
				& .item:nth-child(2) {
					width: 30%;
				}
				& .item:nth-child(3) {
					width: 40%;
				}
			}
		}
		.share-img {
			position: fixed;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			z-index: 999;
		}
	}
</style>