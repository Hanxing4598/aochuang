<template>
	<div class="student-wrapper">
		<div class="scroller">
			<search @search="search"></search>
			<div class="content">
				<div class="tab">
					<a href="javascript:;" class="item" :class="{'active': type==1}" @click="_getList(1)">常用学员组</a>
					<a href="javascript:;" class="item" :class="{'active': type==0}" @click="_getList(0)">不常用学员组</a>
				</div>
				<list @change="change" :listdata="listdata" v-if="listdata.length>0"></list>
				<empty text="暂无学员" v-else ></empty>
			</div>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
	import search from '../../components/search/search'
	import list from '../../components/student/list'
	import empty from '../../components/empty/empty'
	import { getStudent, getSearchResult, change } from 'api/api'
	import { ERR_OK } from 'common/js/config'
	
	export default {
		data () {
			return {
				type: 1,
				listdata: []
			};
		},
		created () {
			this.baseParams = {
				vm: this,
				showloading: true
			}
			this.coachid = localStorage.getItem('coachid')
			this.getList(this.type)
		},
		components: {
			search,
			list,
			empty
		},
		methods: {
			search(text) {
				//根据关键词请求数据
				const searchCoachId = this.coachid,
					searchName = text,
					relatedStatus = this.type,
					params = {
						searchCoachId,
						searchName,
						relatedStatus
					}
				getSearchResult(Object.assign(this.baseParams, { params })).then((res) => {
					if (res.errcode === ERR_OK) {
						this.listdata = res.members
					} else {
						showTips(res.errcode)
					}
				})
			},
			//换组
			change (id) {
				const params = {
					coachId: this.coachid,
					memberId: id,
					relatedStatus: this.type === 1 ? 0 : 1
				}
				change(Object.assign(this.baseParams, { params })).then((res) => {
					if (res.errcode === ERR_OK) {
						this.getList(this.type)
					} else {
						showTips(res.errcode)
					}
				})
			},
			_getList(type) {
				if (type === this.type) return
				this.getList(type)
			},
			getList(type) {
				this.type = type;
				const coachid = this.coachid
				const params = {
					coachid,
					relatedstatus: this.type
				}
				getStudent(Object.assign(this.baseParams, { params })).then((res) => {
					if (res.errcode === ERR_OK) {
						this.listdata = res.members
					} else {
						showTips(res.errcode)
					}
				});
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
	@import '../../common/less/var.less';
	.student-wrapper {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		.content {
			padding-top: 18px;
		}
		.tab {
			font-size: 0;
			text-align: center;
			.item {
				display: inline-block;
				vertical-align: top;
				width: 50%;
				line-height: 40px;
				font-size: 16px;
				color: #999999;
				background-color: #fff;
				&.active {
					color: @color;
					border-bottom: 1px solid;
				}
			}
		}
	}
</style>