<template>
	<div class="info-item-wrap">
		<div class="title" @click="toggle">{{title}}<i class="iconfont" :class="show?'icon-pingguxiangshang':'icon-pinggu'" ></i></div>
		<div class="content" v-if="type==0" v-show="show" ref="wrapper" >
			<div class="scroller">
				<div class="list-item border-bottom-1px" v-for="(item, index) in data.assessment_list" @click="detail(0, item.assessment_id)" >
					<div class="number">{{assessIndexArr[index]+1}}</div>
					<div class="wrap">
						<div class="left">
							<div class="item">
								<div class="k">评估编号：{{item.assessment_no}}</div>
							</div>
							<div class="item">
								<div class="k">评估日期：{{item.assessment_date}}</div>
							</div>
						</div>
						<div class="button" >
							<i class="iconfont icon-xiangqing"></i>详情
						</div>
					</div>
				</div>
				<!--<div class="load-more">显示更多内容<i class="iconfont icon-cf-c87"></i></div>-->
			</div>
		</div>
		<div class="content" v-if="type==1" v-show="show" ref="wrapper">
			<div class="scroller">
				<div class="list-item border-bottom-1px" v-for="(item, index) in data.analysis_list" @click="detail(1, item.analysis_id)">
					<div class="number">{{analysisIndexArr[index]+1}}</div>
					<div class="wrap">
						<div class="left">
							<div class="item">
								<div class="k">动作名称：{{item.action_name}}</div>
							</div>
							<div class="item">
								<div class="k">分析日期：{{item.analysis_date}}</div>
							</div>
						</div>
						<div class="button" >
							<i class="iconfont icon-xiangqing"></i>详情
						</div>
					</div>
				</div>
				<!--<div class="load-more">显示更多内容<i class="iconfont icon-cf-c87"></i></div>-->
			</div>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
	export default {
		props: {
			title: {
				type: String
			},
			type: {
				default: 0
			},
			data: {
				type: Object
			}
		},
		data () {
			return {
				show: true,
				assessIndexArr: [],
				analysisIndexArr: []
			};
		},
		created () {
			for (let i=this.data.assessment_list.length-1; i>=0; i--) {
				this.assessIndexArr.push(i)
			}
			for (let i=this.data.analysis_list.length-1; i>=0; i--) {
				this.analysisIndexArr.push(i)
			}
		},
		mounted () {
		},
		components: {
		},
		methods: {
			detail (type, id, index) {
				this.$emit('linkTo', type, id, index)
			},
			toggle () {
				this.show = !this.show;
			}
		}
	}
</script>

<style lang="less">
	@import '../../common/less/var.less';
	.info-item-wrap {
		font-size: 14px;
		.load-more {
			line-height: 72px;
			text-align: center;
			background-color: #fff;
			color: #5087f8;
			.iconfont {
				margin-left: 8px;
			}
		}
		.title,.list-item {
			background-color: #fff;
		}
		.title {
			margin-bottom: 2px;
			line-height: 50px;
			text-align: center;
			.iconfont {
				margin-left: 15px;
				color: @color;
				font-size: 18px;
			}
		}
		.content {
			max-height: 432px;
			overflow: auto;
			-webkit-overflow-scrolling: touch;
			.list-item {
				display: flex;
				align-items: center;
				padding: 16px 14px;
			}
			.number {
				margin-right: 20px;
				font-weight: 700;
				font-size: 20px;
			}
			.wrap {
				display: flex;
				flex: 1;
				.left {
					flex: 1;
					.item:first-child {
						margin-bottom: 14px;
					}
				}
				.button {
					height: 40px;
					line-height: 43px;
					color: #fff;
					background-color: #5087f8;
					width: 88px;
					text-align: center;
					box-shadow: 0 3px 0 #2b65da;
					border-radius: 50px;
					.iconfont {
						display: inline-block;
						margin-right: 6px;
						font-size: 24px;
						vertical-align: top;
					}
				}
				.item {
					flex: 1;
					.k {
						color: #666;
					}
					.v {
						margin-top: 10px;
						font-size: 16px;
					}
				}
			}
		}
	}
</style>