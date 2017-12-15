<template>
	<div class="container">
		<v-group title="全部集货团">
			<v-cell title="前往Grid页面" :link="{path:'/teamDetail',query:{id:'123wqwesafd123'}}" inline-desc='描述信息'></v-cell>
		</v-group>
	</div>
</template>

<script>
	export default {
		name: 'teamList',
		data() {
			return {
				pandectData: {},
			}
		},
		mounted() {
			this.getData();
			
		},
		methods:{
			getData(){
//				this.$axios.post('/demo/list/aaa', {
//					
//				})
//				.then((response) =>{
//					if(response.data.success && response.data.datas){
//						let datakey = response.data.data;
//						
////						this.pandectData = datakey[0];
////						this.$emit('updateDate',datakey[0].REFRESH_DATE);
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