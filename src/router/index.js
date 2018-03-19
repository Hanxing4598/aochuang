import Vue from 'vue'
import Router from 'vue-router'
import login from '../components/login/login'
import student from '../components/student/student'
import info from '../components/info/info'
import detail from '../components/detail/detail'
import actionDetail from '../components/action_detail/detail'
import share from '../components/share/share'
import sharecontent from '../components/share/share/share'
import assess from '../components/share/assess/assess'
import analysis from '../components/share/analysis/analysis'
import weight from '../components/share/weight/weight'
import desc from '../components/desc/desc'

Vue.use(Router)

const routes = [{
	path: '/',
	redirect: 'login'
},{
	path: '/login',
	component: login,
	meta: {
		title: '教练微信绑定'
	}
},{
	path: '/student',
	component: student,
	meta: {
		title: '奥创体育'
	}
},{
	path: '/info/:id',
	component: info
},{
	name: 'detail',
	path: '/info/detail/:anaysisid',
    component: detail
},{
	name: 'action_detail',
	path: '/info/detail/actiondetail/:index',
    component: actionDetail
},{
	name: "sharereport",
	path: '/info/share/:memberId/:assessmentId',
    component: share,
    redirect: '/info/share/:memberId/:assessmentId/share',
    children: [{
    	name: 'share',
		path: 'share',
	    component: sharecontent
	},{
		name: 'assess',
		path: 'assess',
	    component: assess
	},{
		name: 'analysis',
		path: 'analysis',
	    component: analysis
	},{
		name: 'weight',
		path: 'weight',
	    component: weight
	}]
},{
	name: 'desc',
	path: '/info/share/weight/desc',
	component: desc
}]
export default new Router({
  routes
})
