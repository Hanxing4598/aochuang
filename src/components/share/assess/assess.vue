<template>
	<div class="assess-wrapper">
		<v-header :type="1" :column="5" :content="content"></v-header>
		<assesscontent :content="content"></assesscontent>
	</div>
</template>

<script type="text/ecmascript-6">
	import header from '../../header/header'
	import assesscontent from './assess_content/assesscontent'
	export default {
		data () {
			return {}
		},
		props: {
			content: {}
		},
		created () {
		},
		components: {
			'v-header': header,
			assesscontent
		},
		methods: {
		}
	}
</script>

<style lang="less">
	.assess-wrapper {
		position: absolute;
		top: 0;
		width: 100%;
		bottom: 56px;
		padding-bottom: 14px;
		overflow: auto;
		-webkit-overflow-scrolling: touch;
		box-sizing: border-box;
	}
</style>