<template>
	<div class="share-wrapper">
		<v-header :type="2" :content="content" ></v-header>
		<assesscontent :only="false" :content="content" ></assesscontent>
		<!--<vote :content="content" ></vote>-->
		<score :content="content" v-if="content.torso_score" ></score>
		<result :content="content.attitude_bases" ></result>
	</div>
</template>

<script>
	import VHeader from 'components/header/header'
	import Assesscontent from 'components/share/assess/assess_content/assesscontent'
	import Vote from 'components/share/analysis/vote/vote'
	import Score from 'components/share/analysis/score/score'
	import Result from 'components/share/result/result'
	import { getStudentAssessment, getStudentInfo } from 'api/api'
	import { createToast } from 'common/js/utils'
	import { ERR_OK, IMG_BASE_URL } from 'common/js/config'
	
	export default {
		props: {
			content: {}
		},
		data () {
			return {}
		},
		created () {
		},
		components: {
			VHeader,
			Assesscontent,
			Vote,
			Score,
			Result
		},
		methods: {
		}
	}
</script>

<style>
	.share-wrapper {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		bottom: 0;
		padding-bottom: 14px;
		box-sizing: border-box;
		overflow-y: auto;
		-webkit-overflow-scrolling: touch;
	}
</style>