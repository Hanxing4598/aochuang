<template>
	<div class="action-wrapper">
		<v-header type="1" column="2" :content="content"></v-header>
		<div class="content">
			<div class="wrap">
				<i class="iconfont icon-zuo fl" :class="{'disabled': currentPageIndex<=0}" @click="prev"></i>
				<cube-slide slot="dots" :initial-index="currentPageIndex" :auto-play="false" :loop="false" @change="change">
					<cube-slide-item v-for="url in imgUrl">
						<div class="img-wrap swiper-slide img-hook">
							<img :src="url" class="img" />
						</div>
					</cube-slide-item>
				</cube-slide>
				<i class="iconfont icon-you fr" :class="{'disabled': currentPageIndex>=5}" @click="next"></i>
			</div>
			<div class="num">{{currentPageIndex+1}}/6</div>
		</div>
	</div>
	</div>
</template>

<script type="text/ecmascript-6">
	import header from '../header/header'
	import BScroll from 'better-scroll'
	export default {
		data() {
			return {
				currentPageIndex: parseInt(this.$route.params.index)
			};
		},
		created() {
			this.imgUrl = this.$route.params.url
			this.index = this.$route.params.index
			this.content = this.$route.params.content
		},
		mounted() {
		},
		components: {
			'v-header': header
		},
		methods: {
			prev() {
				this.currentPageIndex > 0 && this.currentPageIndex--;
			},
			next() {
				this.currentPageIndex < 5 && this.currentPageIndex++;
			},
			change(index) {
				this.currentPageIndex = index;
			}
		}
	}
</script>

<style lang="less">
	@import 'swiper/dist/css/swiper.css';
	.action-wrapper {
		height: 100%;
		background-color: #fff;
		.content {
			position: absolute;
			top: 126px;
			bottom: 0;
			left: 0;
			right: 0;
			.wrap {
				width: 100%;
				position: absolute;
				top: 50%;
				transform: translateY(-50%);
			}
			.iconfont {
				position: absolute;
				display: block;
				top: 50%;
				transform: translate3d(0, -50%, 0);
				/*color: #535353;*/
				color: #cacaca;
				font-size: 65px;
				font-weight: 700;
				z-index: 100;
				&.disabled {
					display: none;
				}
				&.fl {
					left: 0;
				}
				&.fr {
					right: 0;
				}
			}
			.img {
				width: 100%;
			}
			.cube-slide {
				flex: 1;
				overflow: hidden;
			}
			.num {
				position: absolute;
				width: 100%;
				bottom: 20px;
				line-height: 30px;
				text-align: center;
				font-size: 14px;
				color: #333;
			}
		}
	}
</style>