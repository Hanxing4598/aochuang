<template>
	<div class="login-wrapper">
		<div class="content">
			<div class="logo">
				<img src="./logo.png" />
			</div>
			<div class="form">
				<div class="input-wrap">
					<i class="iconfont icon-mima-"></i>
					<input class="input" v-model.trim="mobile" type="number" placeholder="请输入您的账号" />
				</div>
				<div class="input-wrap">
					<i class="iconfont icon-zhanghao-"></i>
					<input class="input" v-model.trim="password" type="password" placeholder="请输入密码" />
				</div>
			</div>
			<a href="javascript:;" class="btn btn-primary" @click="bind" >绑定此微信</a>
		</div>
		<p class="tips-text">奥创体育科技有限公司</p>
	</div>
</template>

<script type="text/ecmascript-6">
	import router from '../../router/index.js'
	import { login } from 'api/api'
	import { createToast } from 'common/js/utils'
	import { ERR_OK } from 'common/js/config'
	
	//const phoneRegular = /^1[34578]\d{9}$/
	const pwdRegular = /^[\w]{6,16}$/
	
	export default {
		data() {
			return {
				mobile: '',
				password: ''
			}
		},
		created () {
		},
		methods: {
			bind() {
				if (this.mobile == '') {
					this.showAlert('请输入手机号');
					return;
				}
				/*if (!phoneRegular.test(this.mobile)) {
					this.showAlert('请输入正确的手机号码格式');
					return;
				}*/
				if (this.password == '') {
					this.showAlert('请输入密码');
					return;
				}
				if (!pwdRegular.test()) {
					this.showAlert('请输入正确的密码格式');
					return;
				}
				//请求接口、请求完成后跳转
				const params = {
					login_no: this.mobile,
					password: this.password,
					open_id: '123456789'
				}
				login({
					vm: this,
					showloading: true,
					params
				}).then((res) => {
					if (res.errcode === ERR_OK) {
						const toast = this.$createToast({
							txt: '登录成功！',
							type: 'correct'
						})
						toast.show()
						this.setId(res.coach_id)
						setTimeout(() => {
							router.push('/student');
						}, 1500)
					} else {
						this.showTips(res.errcode)
						//暂时写死
						//this.setId('69B64469452E8804411370B9F0F9639B')
						//到时删除
						//router.push('/student');
					}
				})
			},
			setId (id) {
				localStorage.setItem('coachid', id)
			},
			showAlert(content) {
				this.$createDialog({
					type: 'alert', 
					title: '提示',
					content,
					icon: 'cubeic-alert' 
				}).show(); 
			},
			showTips (code) {
				let txt = '';
				if (code == 0) {
					txt = '操作失败'
				} else if (code == 1001) {
					txt = '账号不存在'
				} else if (code == 1003) {
					txt = '密码输入不正确'
				} else if (code == 1005) {
					txt = '参数错误'
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
	.login-wrapper {
		height: 100%;
		padding: 0 25px;
		font-size: 14px;
		.content {
			min-height: 100%;
		}
		.logo {
			padding: 44px 0;
			text-align: center;
			img {
				width: 41%;
			}
		}
		.form {
			margin-top: 41px;
			.input-wrap {
				display: flex;
				margin: 18px 0;
				padding: 12px 20px;
				border-radius: 30px;
				background: url(input_bg.png) no-repeat;
				background-size: 100% 100%;
				.iconfont {
					font-size: 24px;
					color: #333333;
				}
				.input {
					flex: 1;
					margin-left: 12px;
				}
			}
		}
		.btn {
			border-radius: 50px;
			margin-top: 55px;
		}
		.tips-text {
			height: 35px;
			margin-top: -35px;
			text-align: center;
			font-size: 12px;
			color: #999999;
		}
	}
</style>