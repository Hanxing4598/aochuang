<template>
	<div class="assess-content">
		<div class="title clearfix">
			<p class="fl left">身体姿态评估</p>
			<p class="fr" v-if="only" @click="side=!side">侧面图像<i class="iconfont icon-cemiantuxiang"></i></p>
		</div>
		<section v-if="only">
			<div class="content" v-show="!side">
				<div class="item">
					<div class="panel">正面</div>
					<div class="img-wrap"><img class="img" v-lazy="content.front_imgurl+'-s'" @click="selectImg(0)"/></div>
				</div>
				<div class="item">
					<div class="panel">反面</div>
					<div class="img-wrap"><img class="img" v-lazy="content.back_imgurl+'-s'" @click="selectImg(1)"/></div>
				</div>
			</div>
			<div class="content" v-show="side" >
				<div class="item">
					<div class="panel">左侧面</div>
					<div class="img-wrap"><img class="img" v-lazy="content.left_imgurl+'-s'" @click="selectImg(0)"/></div>
				</div>
				<div class="item">
					<div class="panel">右侧面</div>
					<div class="img-wrap"><img class="img" v-lazy="content.right_imgurl+'-s'" @click="selectImg(1)"/></div>
				</div>
			</div>
		</section>
		<div class="content" v-else>
			<div class="item">
				<div class="panel">正面</div>
				<div class="img-wrap"><img class="img" v-lazy="content.front_imgurl+'-s'" @click="selectImg(0)"/></div>
			</div>
			<div class="item">
				<div class="panel">反面</div>
				<div class="img-wrap"><img class="img" v-lazy="content.back_imgurl+'-s'" @click="selectImg(1)"/></div>
			</div>
			<div class="item">
				<div class="panel">左侧面</div>
				<div class="img-wrap"><img class="img" v-lazy="content.left_imgurl+'-s'" @click="selectImg(2)"/></div>
			</div>
			<div class="item">
				<div class="panel">右侧面</div>
				<div class="img-wrap"><img class="img" v-lazy="content.right_imgurl+'-s'" @click="selectImg(3)" /></div>
			</div>
		</div>
		<weight :content="content"></weight>
		<transition name="slide-fade" class="fadeView">
			<div v-if="show" class="image-view" @click="hideImageview">
				<div class="mask"></div>
				<cube-slide :loop="true" :autoPlay="false" :initialIndex="imageIndex">
					<cube-slide-item>
						<img v-lazy="content.front_imgurl">
					</cube-slide-item>
					<cube-slide-item>
						<img v-lazy="content.back_imgurl">
					</cube-slide-item>
					<cube-slide-item>
						<img v-lazy="content.left_imgurl">
					</cube-slide-item>
					<cube-slide-item>
						<img v-lazy="content.right_imgurl">
					</cube-slide-item>
				</cube-slide>
			</div>
		</transition>
	</div>
</template>

<script type="text/ecmascript-6">
	import Vue from 'vue'
	import VueLazyload from 'vue-lazyload'
	import imageView from 'vue-imageview'
	import header from '../../../header/header'
	import footer from '../../../footer/footer'
	import weight from 'components/share/weight/weight'
	import { lazyloadBaseParams1 } from 'common/js/config'
	export default {
		props: {
			only: {
				type: Boolean,
				default: true
			},
			content: {}
		},
		data () {
			return {
				side: false,
				imgArr: [],
		        show: false,
		        imageIndex: 0,
		        currentPageIndex: 0
			};
		},
		beforeCreate () {
			Vue.use(VueLazyload, lazyloadBaseParams1)
		},
		created () {
			this.imgArr.push(this.content.front_imgurl)
			this.imgArr.push(this.content.back_imgurl)
			this.imgArr.push(this.content.left_imgurl)
			this.imgArr.push(this.content.right_imgurl)
		},
		mounted () {
		},
		components: {
			'v-header': header,
			'v-footer': footer,
			'image-view': imageView,
			weight
		},
		methods: {
			showImgView () {
				this.show = true
			},
			hideImageview () {
				this.show = false
			},
			selectImg (index) {
				this.show = true
				this.imageIndex = index
			},
			change(index) {
				console.log(this.imageIndex)
				//this.currentPageIndex = index;
			}
		}
	}
</script>

<style lang="less">
	@import '../../../../common/less/var.less';
	.assess-content {
		padding: 22px 15px;
		margin-top: 15px;
		font-size: 16px;
		background-color: #fff;
		.title {
			margin-bottom: 10px;
			line-height: 22px;
			font-size: 18px;
			.left {
				position: relative;
				padding-left: 15px;
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
			.fr {
				font-size: 14px;
				.iconfont {
					display: inline-block;
					vertical-align: top;
					margin-left: 6px;
					color: @color;
					font-size: 22px;
				}
			}
		}
		.content {
			display: flex;
			flex-wrap: wrap;
			margin: 0 -7.5px;
			.item {
				width: 50%;
				padding: 7.5px;
				box-sizing: border-box;
				.img-wrap {
				}
				.img {
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
		.slide-fade-enter-active {
			transition: opacity .5s ease;
		}
	
		.slide-fade-leave-active {
			transition: none;
		}
	
		.slide-fade-enter, .slide-fade-leave-active {
			opacity: 0;
		}
		.image-view {
			display: flex;
			align-items: center;
			position: fixed;
			width: 100%;
			height: 100%;
			left: 0;
			top: 0;
			z-index: 100;
			.mask {
				background-color: rgba(0, 0, 0, 1);
			}
		}
		.cube-slide {
			position: relative;
			width: 100%;
			z-index: 101;
			img {
				width: 100%;
			}
		}
	}
</style>