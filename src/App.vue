<template>
	<div>
		<v-navbar :title="title" :left-options="leftOptions" @on-click-back="back">
			<a slot="left" @click="close">
				<span class="icon-back"></span>
			</a>
		</v-navbar>

		<router-view></router-view>
		
	</div>
</template>

<script>
	export default {
		data() {
			return {
			}
		},
		computed: {
			title() {
				let currentTitle = '';
				switch(this.$route.path) {
					case '/':
					case '/teamList': 
						currentTitle = '顺丰集货助手';
						break;
					case '/teamDetail': 
						currentTitle = '集货详情';
						break;
					case '/applyForm': 
						currentTitle = '填写寄件信息';
						break;
					case '/QRCode': 
						currentTitle = '顺丰集货助手';
						break;
					default: 
						currentTitle = '顺丰集货助手';
				}
				
				return currentTitle;
			},
			leftOptions() {
				return {
					backText: '',
					showBack: true,//this.$route.path == '/mainTab1' || this.$route.path == '/mainTab2' || this.$route.path == '/mainTab3' || this.$route.path == '/mainTab4'? false : true,
					preventGoBack: true,
				}
			},
		},
		methods: {
			back() {
				this.$router.go(-1);
			},
			close() {
				this.$Modal.confirm.show({
					title: '即将退出',
					content: '确定退出顺丰集货助手吗？',
				})
			}
		}
	}
</script>

<style scoped lang="less">
	.icon-back {
		display: inline-block;
		background-image: url(./assets/icon-back.png);
	    width: 14px;
    	height: 14px;
    	background-size: contain;
    	background-repeat: no-repeat;
    	margin-left: 15px;
	}
	
</style>