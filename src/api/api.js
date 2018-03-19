import axios from 'axios'
import { baseurl, ERR_OK } from 'common/js/config'
import { parseUrl, createToast } from 'common/js/utils'

axios.defaults.baseURL = baseurl;

var toast = null

//登录api
export function login (opts) {
	opts.showloading && (toast = createToast(opts.vm))
	return _request('post', 'api/coachinfo', opts.params, opts.showloading)
}
//搜索学员
export function getSearchResult(opts) {
	opts.showloading && (toast = createToast(opts.vm))
	return _request('get', 'api/CoachMemberRelated', opts.params, opts.showloading)
}

//换组功能
export function change(opts) {
	opts.showloading && (toast = createToast(opts.vm))
	return _request('put', `api/coachmemberrelated?${parseUrl(opts.params)}`, opts.params, opts.showloading)
}

//常用和不常用学员组
export function getStudent(opts) {
	opts.showloading && (toast = createToast(opts.vm))
	return _request('get', 'api/CoachMemberRelated', opts.params, opts.showloading)
}

//获取某个学员信息
export function getStudentInfo(opts) {
	opts.showloading && (toast = createToast(opts.vm))
	return _request('get', 'api/coachmemberrelated', opts.params, opts.showloading)
}

//获取某个学员姿势评估详细信息
export function getStudentAssessment(opts) {
	opts.showloading && (toast = createToast(opts.vm))
	return _request('get', 'api/AttitudeAssessmentInfo', opts.params, opts.showloading)
}

//获取某个学员某个动作详细信息
export function getStudentAction(opts) {
	opts.showloading && (toast = createToast(opts.vm))
	return _request('get', 'api/TrainingActionAnalysis', opts.params, opts.showloading)
}
function _request(type, url, params, showloading) {
	return new Promise((resolve, reject) => {
		showloading && toast.show()
		params = type == 'get' ? { params } : params
		axios[type](url, params).then((res) => {
			showloading && toast.hide()
			resolve(res.data)
		})
	})

}