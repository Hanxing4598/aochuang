<template>
	<div class="empty-wrap">
		<div class="empty-icon">
			<img class="icon" src="./no_student.png"/>
		</div>
		<p class="text">{{text}}</p>
	</div>
</template>

<script type="text/ecmascript-6">
	import BScroll from 'better-scroll'
	export default {
		props: {
			text: {
				type: String,
				default: ''
			}
		},
		created () {
		},
		components: {
		},
		methods: {
		}
	}
</script>

<style lang="less">
</style>