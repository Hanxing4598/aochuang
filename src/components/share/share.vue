<template>
	<div class="share">
		<router-view :content="content"></router-view>
		<!--<v-footer></v-footer>-->
	</div>
</template>

<script type="text/ecmascript-6">
	import footer from '../../components/footer/footer'
	import router from 'router/index'
	import { getStudentAssessment, getStudentInfo } from 'api/api'
	import { createToast } from 'common/js/utils'
	import { ERR_OK, IMG_BASE_URL, lazyloadBaseParams1 } from 'common/js/config'
	export default {
		data () {
			return {
				content: {},
				selectedIndex: 1
			}
		},
		created () {
			this.baseParams = {
				vm: this,
				showloading: true
			}
			
			this.routeData = this.$route.params
			this.coachid = localStorage.getItem('coachid')
			this._getData()
		},
		components: {
			'v-footer': footer
		},
		methods: {
			_getData () {
				const assessParams = Object.assign({}, this.baseParams, {
					params: {
						assessmentId: this.routeData.assessmentId
					}
				})
				
				getStudentAssessment(assessParams).then((res) => {
					if (res.errcode == ERR_OK) {
						this.content = res.assessment
						this.content.back_imgurl = IMG_BASE_URL+this.content.back_imgurl
						this.content.front_imgurl = IMG_BASE_URL+this.content.front_imgurl
						this.content.left_imgurl = IMG_BASE_URL+this.content.left_imgurl
						this.content.right_imgurl = IMG_BASE_URL+this.content.right_imgurl
						for (let i=0; i<this.content.attitude_bases.length; i++) {
							this.content.attitude_bases[i].url = IMG_BASE_URL+this.content.attitude_bases[i].url
						}
					} else {
						this.showTips(res.errcode);
					}
				})
			},
			showTips (code) {
				let txt = '';
				if (code == 0) {
					txt = '操作失败'
				} else if (code == 1005) {
					txt = '参数错误'
				} else {
					txt = '请求失败！'
				}
				
				const toast = this.$createToast({
					txt,
					type: 'error',
					time: 1500
				})
				toast.show()
			},
			toPage (index) {
				this.selectedIndex = index
			}
		}
	}
</script>

<style lang="less">
	.share {
		height: 100%;
	}
</style>