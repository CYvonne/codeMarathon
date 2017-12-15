<template>
	<div class="container">
		3333
		<div id='chart1'></div>
	</div>
</template>

<script>
	export default {
		name: 'mainTab3',
		data() {
			return {
				pandectData: {},
			}
		},
		mounted() {
			this.getData();
			this.getChart();
			
		},
		methods:{
			getData(){
				this.$axios.post('/demo/list/aaa', {
					
				})
				.then((response) =>{
					if(response.data.success && response.data.datas){
						let datakey = response.data.data;
						
//						this.pandectData = datakey[0];
//						this.$emit('updateDate',datakey[0].REFRESH_DATE);
					}
				});
			},
			getChart(){
//				this.$axios.post('/srpt/app/appController.pub', {
//					
//				})
//				.then((response) =>{
//					if(response.data.success && response.data.datas){
//						
//						this.$chart.bar1('chart1',chartData)
//							
//					}
//				});
			},
		}
	}
</script>

<style scoped lang="less">
	/*#chart1 {
		height: 250px;	
	}*/
				
</style>