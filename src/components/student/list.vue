<template>
	<div class="student-list" ref="wrapper">
		<ul class="list">
			<router-link :to="'/info/'+item.member_id" tag="li" class="item border-top-1px" v-for="(item, index) in listdata" :key="index" >
				<div class="info">
					<div class="name">{{item.member_name}}</div>
					<div class="number">
						<span class="num">评估数据：{{item.assessment_count}}</span>
						<span class="num">数据分析：{{item.ayalysis_count}}</span>
					</div>
				</div>
				<div class="button" @click.stop="change(item.member_id)">
					<i class="iconfont icon-huanzu"></i>换组
				</div>
			</router-link>
		</ul>
	</div>
</template>

<script type="text/ecmascript-6">
	import BScroll from 'better-scroll'
	export default {
		props: {
			listdata: {
				type: Array
			}
		},
		data () {
			return {
				bs: null
			};
		},
		created () {
		},
		mounted () {
			this.$nextTick(()=>{
				if (!this.bs) {
					this.bs = new BScroll(this.$refs.wrapper, {
						click: true,
						probeType: 3
					});
				}else {
					this.bs.refresh();
				}
				this.bs.on('scroll', (e)=>{
				});
			});
		},
		components: {
		},
		methods: {
			change (id) {
				this.$emit('change', id)
			}
		}
	}
</script>

<style lang="less">
	.student-list {
		position: absolute;
		top: 123px;
		bottom: 0;
		left: 0;
		width: 100%;
		overflow: hidden;
		.list {
			padding-bottom: 15px;
			font-size: 14px;
			.item {
				position: relative;
				background-color: #fff;
				padding: 15px;
				.info {
					height: 40px;
					.name {
						margin-bottom: 10px;
						font-size: 18px;
					}
					.number {
						color: #666666;
						.num {
							&:first-child {
								margin-right: 45px;
							}
						}
					}
				}
				.button {
					position: absolute;
					right: 15px;
					top: 15px;
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
			}
		}
	}
</style>