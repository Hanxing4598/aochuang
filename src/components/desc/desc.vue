<template>
	<div class="desc-wrapper">
		<div class="head tc">{{content.name}}</div>
		<img class="img" v-lazy="content.url"/>
		<div class="content">
			<div class="title">定义</div>
			<div class="text">{{content.definition}}</div>
			<div class="title">易发人群</div>
			<div class="text">{{content.easy_people}}</div>
			<div class="title">危害</div>
			<div class="text">{{content.harm}}</div>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
	export default {
		created () {
			this.content = this.$route.params.content
		},
		components: {
		},
		methods: {
		}
	}
</script>

<style lang="less">
	.desc-wrapper {
		height: 100%;
		padding: 0 15px;
		background-color: #fff;
		overflow: auto;
		-webkit-overflow-scrolling: touch;
		.img {
			display: block;
			width: 100%;
			margin-bottom: 20px;
		}
		.head {
			line-height: 45px;
			font-size: 18px;
		}
		.title {
			margin-bottom: 10px;
			font-size: 16px;
			font-weight: 700;
		}
		.text {
			margin-bottom: 20px;
			line-height: 24px;
			font-size: 14px;
		}
	}
</style>