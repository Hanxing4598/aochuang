<template>
	<div class="info-wrapper">
		<v-header :info="data"></v-header>
		<div class="content" v-if="!isloading">
			<info-item @linkTo="linkTo" :data="data" :title="textMap[0]" :type="0" ></info-item>
			<info-item @linkTo="linkTo" :data="data" :title="textMap[1]" :type="1" ></info-item>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
	import header from '../header/header'
	import infoItem from './infoItem'
	import router from 'router/index'
	import { getStudentInfo } from 'api/api'
	import { createToast } from 'common/js/utils'
	import { ERR_OK } from 'common/js/config'
	export default {
		data () {
			return {
				textMap: ['静态姿势评估', '训练动作分析'],
				data: {},
				isloading: true
			};
		},
		created () {
			this.baseParams = {
				vm: this,
				showloading: true
			}
			this.coachid = localStorage.getItem('coachid')
			this._getList()
		},
		components: {
			'v-header': header,
			'info-item': infoItem
		},
		methods: {
			_getList () {
				const params = {
					coachid: this.coachid,
					memberid: this.$route.params.id
				}
				getStudentInfo(Object.assign(this.baseParams, { params })).then((res) => {
					this.isloading = false
					if (res.errcode == ERR_OK) {
						this.data = res.member
					} else {
						this.showTips(res.errcode)
					}
				})
			},
			linkTo(type, id) {
				const path = type===0 ? `/info/share/${this.$route.params.id}/${id}` : `detail/${id}`
/*				type === 0 && (setId('memberId', this.$route.params.id), setId('assessmentId', id))
				type === 1 && setId('actionId', id)*/
				localStorage.setItem('selected', 1)
				router.push({
					path
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
			}
		}
	}
</script>

<style lang="less">
	.info-wrapper {
		height: 100%;
		overflow: auto;
		-webkit-overflow-scrolling: touch;
		.info-item-wrap {
			margin: 20px 0;
		}
	}
</style>