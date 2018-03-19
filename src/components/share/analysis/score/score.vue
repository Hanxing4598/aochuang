<template>
	<div class="score-content">
		<div class="title">体态评分</div>
		<div id="chats" class="chats"></div>
		<div class="footer">
			<p class="score">本次综合得分：{{content.total_score}}分</p>
			<p class="text">你击败了 <span class="precent">{{content.rank_percent}}</span>的测试者<span class="top"><i style="font-size: 14px;color: #333;font-style: normal;">排名</i>{{content.rank}}</span></p>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
	import echats from 'echarts'
	export default {
		props: {
			content: {
				type: Object
			}
		},
		created () {
			const c = this.content
			this.scoreData = [c.head_score, c.shoulder_score, c.torso_score, c.waist_score, c.legs_score]
		},
		mounted () {
			const options = {
			    tooltip: {
			        trigger: 'axis'
			    },
			    radar: [
			        {
			            indicator: [
			                { text: '头部', max: 100, color: '#333333' },
			                { text: '肩部', max: 100, color: '#333333' },
			                { text: '躯干', max: 100, color: '#333333' },
			                { text: '腰部', max: 100, color: '#333333' },
			                { text: '腿部', max: 100, color: '#333333' }
			            ],
			            center: ['50%','50%'],
			            radius: 80
			        }
			    ],
			    series: [
			        {
			            type: 'radar',
			            itemStyle: {
			            	normal: {
			            		areaStyle: {
			            			type: 'default',
			            			opacity: 0.85
			            		},
			            		color: '#ee6e41'
			            	}
			            },
			            lineStyle: {
							normal: {
								width: 0
							},
						},
			            data: [
			                {
			                    value: this.scoreData,
			                    name: ''
			                }
			            ]
			        }
			    ]
			}
			const chart = echats.init(document.getElementById('chats'));
			chart.setOption(options);
		},
		components: {
		},
		methods: {
		}
	}
</script>

<style lang="less">
	@import '../../../../common/less/var.less';
	.score-content {
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
		.chats {
			height: 250px;
		}
		.footer {
			text-align: center;
			.score {
				margin-bottom: 22px;
				font-size: 18px;
				color: #e6242a;
				font-weight: bold;
			}
			.text {
				margin-bottom: 10px;
				font-size: 14px;
				span {
					color: #e6242a;
					font-size: 18px;
				}
				.top {
					margin-left: 30px;
				}
			}
		}
	}
</style>