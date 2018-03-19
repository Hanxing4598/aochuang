<template>
  <div id="app">
  	<transition name="slide">
  		<keep-alive include="sharereport">
  			<router-view></router-view>
  		</keep-alive>
  	</transition>
  </div>
</template>

<script>
	import router from './router/index.js'
	router.beforeEach((to, from, next) => {
	  if (to.meta.title) {
	    document.title = to.meta.title
	  }
	  next()
	})
	export default {
	  name: 'app',
	  components: {
	  }
	}
</script>

<style lang="less">
	@import './common/less/var.less';
	@import './common/less/public.less';
	@import './common/less/icon.less';
	#app {
		background-color: #eeede9;
		color: #333;
/*		.slide-enter-active, .slide-leave-active {
			transition: transform .5s;
		}
		.slide-leave, .slide-enter-to {
			transform: translate3d(0, 0, 0)
		}
		.slide-enter{
			transform: translate3d(100%, 0, 0)
		}
		.slide-leave-to {
			transform: translate3d(-100%, 0, 0)
		}*/
	}
</style>
