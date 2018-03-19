<template>
	<div class="detail-wrapper">
		<v-header :type="1" column="3" :content="content" ></v-header>
		<div class="content">
			<div class="title">本次动作得分：<span class="num">{{content.score}}</span></div>
			<div class="video-wrap" ref="videowrap" v-if="!loading">
				<div class="video">
					<video id="video" poster="../../common/imgs/default_img3.png" :src="content.video_url" type="video/mp4">
					</video>
				</div>
				<div id="control" class="control">
					<div class="nav" :class="{'disabled': speed>=1}" @click="prev" >
						<i class="iconfont icon-shang"></i>
					</div>
					<div class="text">
						<p class="state">X{{speed}}</p>
						<p class="t">播放速度</p>
					</div>
					<div class="nav" :class="{'disabled': speed<=0.25}" @click="next">
						<i class="iconfont icon-xia"></i>
					</div>
				</div>
				<div class="button" v-show="paused" @click="play">
					<i class="iconfont icon-shipin"></i>
				</div>
			</div>
			<div class="action">
				<div class="item-wrap" v-for="(img, index) in imgUrls" @click="actiondetail(index)" :key="index" >
					<div class="item">
						<img class="img" v-lazy="img+'-s'" />
						<div class="icon"></div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
	import Vue from 'vue'
	import VueLazyload from 'vue-lazyload'
	import header from '../header/header'
	import router from '../../router/index.js'
	import { getStudentAction } from 'api/api'
	import { createToast } from 'common/js/utils'
	import { ERR_OK, IMG_BASE_URL, VIDEO_BASE_URL, lazyloadBaseParams3, lazyloadBaseParams2 } from 'common/js/config'
	
	export default {
		name: 'detail',
		data () {
			return {
				player: null,
				paused: true,
				speed: 1,
				index: 0,
				info: {},
				content: {},
				imgUrls: [],
				loading: true
			}
		},
		created () {
			this.anaysisid = this.$route.params.anaysisid
			this.baseParams = {
				vm: this,
				showloading: true
			}
			this._getData()
		},
		components: {
			'v-header': header
		},
		mounted () {
			Vue.use(VueLazyload, lazyloadBaseParams2)
		},
		methods: {
			_initPlayer () {
				const _this = this,
				  offset = 30,
				  winw = window.innerWidth;
				this.player = document.getElementById('video');
				this.player.width = winw-offset;
				this.player.height = (winw-offset)/2;

				this.$refs.videowrap.style.height = (winw-offset)/2 + 'px';
				
				this.player.addEventListener("play", () => {
			    	this.paused = false;
				});

			    this.player.addEventListener("pause", () => {
			    	this.paused = true;
				});
			},
			play () {
				this.player.playbackRate = this.speed;
				this.player.play()
			},
			prev () {
				this.speed<1 && (this.speed += 0.25, this.player.playbackRate = this.speed);
			},
			next () {
				this.speed>0.25 && (this.speed -= 0.25, this.player.playbackRate = this.speed);
			},
			_getData () {
				const params = {
					anaysisid: this.anaysisid
				}
				getStudentAction(Object.assign({}, this.baseParams, { params }))
				.then((res) => {
					this.loading = false
					if (res.errcode == ERR_OK) {
						this.content = res.anaysis
						this.content.video_url = VIDEO_BASE_URL+this.content.video_url
						//this.content.video_url = 'http://www.runoob.com/try/demo_source/movie.mp4'
						for (let i=1; i<=6; i++) {
							this.imgUrls.push(IMG_BASE_URL+this.content['img_url'+i])
						}
						this.$nextTick(() => {
							this._initPlayer()
						})
					}
				})
			},
			actiondetail (index) {
				router.push({
					name: 'action_detail',
					params: {
						index,
						url: this.imgUrls,
						content: this.content
					}
				})
			}
		}
	}
</script>

<style lang="less">
	@import '../../common/less/video-js.less';
	.detail-wrapper {
		height: 100%;
		background-color: #fff;
		overflow: auto;
		-webkit-overflow-scrolling: touch;
		.content {
			padding: 0 15px;
			.title {
				line-height: 55px;
				text-align: center;
				font-size: 16px;
				.num {
					color: #f22b2b;
					font-size: 20px;
				}
			}
			.video-wrap {
				display: flex;
				margin-right: 70px;
				position: relative;
				.video {
					width: 100%
				}
				video {
					position: absolute;
					left: 0;
					top: 0;
					width: 100%;
					height: 100%;
					object-fit: fill;
				}
				.button {
					position: absolute;
					left: 0;
					top: 0;
					left: 50%;
					top: 50%;
					color: #fff;
					transform: translate(-50%, -50%);
					z-index: 10;
					.iconfont {
						display: block;
						font-size: 50px;
					}
				}
				.control {
					display: flex;
					flex-direction: column;
					width: 70px;
					margin-right: -70px;
					height: 100%;
					font-size: 14px;
					text-align: center;
					.text {
						display: flex;
						justify-content: center;
						flex-direction: column;
						height: 40%;
						border-bottom: 1px solid #c1c1c1;
						border-right: 1px solid #c1c1c1;
					}
					.nav {
						flex: 1;
						background-color: #4596e6;
						&.disabled {
							background-color: #abcef1;
						}
						.iconfont {
							font-size: 44px;
							color: #fff;
						}
					}
					.t {
						margin-top: 10px;
						font-size: 12px;
					}
				}
			}
			.action {
				display: flex;
				flex-wrap: wrap;
				margin: 15px -5px;
				.item-wrap {
					width: 33.3333%;
					padding: 5px;
					box-sizing: border-box;
					&:nth-child(1) {
						.icon {
							background-image: url(action_icon1.png);
						}
					}
					&:nth-child(2) {
						.icon {
							background-image: url(action_icon2.png);
						}
					}
					&:nth-child(3) {
						.icon {
							background-image: url(action_icon3.png);
						}
					}
					&:nth-child(4) {
						.icon {
							background-image: url(action_icon4.png);
						}
					}
					&:nth-child(5) {
						.icon {
							background-image: url(action_icon5.png);
						}
					}
					&:nth-child(6) {
						.icon {
							background-image: url(action_icon6.png);
						}
					}
				}
				.item {
					position: relative;
					height: 0;
					padding-bottom: 100%;
					border: 1px solid #ddd;
					.img {
						display: block;
						position: absolute;
						width: 100%;
						height: 100%;
						box-sizing: border-box;
					}
					.icon {
						position: absolute;
						left: 0;
						top: 0;
						width: 27px;
						height: 27px;
						background-repeat: no-repeat;
						background-size: 27px 27px;
					}
				}
			}
		}
	}
</style>