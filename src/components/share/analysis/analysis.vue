<template>
	<div class="analysis-wrapper">
		<v-header :type="3" :content="content"></v-header>
		<vote :content="content"></vote>
		<score :content="content"></score>
	</div>
</template>

<script type="text/ecmascript-6">
	import axios from 'axios'
	import header from 'components/header/header'
	import vote from './vote/vote'
	import score from './score/score'
	export default {
		props: {
			content: {}
		},
		data () {
			return {}
		},
		components: {
			vote,
			score,
			'v-header': header
		},
		beforeCreate () {
		},
		created () {
		},
		methods: {}
	};
</script>

<style>
	.analysis-wrapper {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		bottom: 56px;
		padding-bottom: 14px;
		box-sizing: border-box;
		overflow-y: auto;
	}
</style>