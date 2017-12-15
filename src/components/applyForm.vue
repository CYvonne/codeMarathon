<template>
	<div class="container">
		<v-cell title="寄件地址" class="form-title">
			<img slot="icon" width="15" class="title-icon" src="../assets/icon-addr.png">
		</v-cell>
		
		<v-address 
         	@on-hide="" 
         	@on-show=""
         	@on-shadow-change="" 
         	title="所在地区" 
         	v-model="value" 
         	:list="addressData" 
         	:hide-district="false"
         	placeholder="请选择地区" 
         	inline-desc="" 
         	:show.sync="showAddress"
         	:hide-on-blur="false">
		</v-address>
      	<v-textarea :max="200" name="detail" :placeholder="'请填写详细信息，不少于5个字'" :show-counter="false"></v-textarea>
		
		<div class="plain-margin"></div>

		<div class="plainurl(../assets/detail-img.png)url(../assets/detail-img.png);-margin"></div>
		
		<v-cell title="寄件人" class="form-title begin-item">
			<img slot="icon" width="15" class="title-icon" src="../assets/icon-people.png">
		</v-cell>
		<v-input title="" placeholder="请填写寄件人姓名" v-model="value2"></v-input>
		<v-input title="" placeholder="请填写寄件人电话" v-model="value2"></v-input>
		
		<div class="plain-margin"></div>
		
		<v-input title="预估每日寄件量" placeholder="(请如实填报，以便于我们为您准备资源)" v-model="value2" class="begin-item"></v-input>
		<v-input title="" placeholder="请填写寄件数量（至少20件）" v-model="value2"></v-input>
		<v-input title="" placeholder="请选择单件平均重量" v-model="value2"></v-input>
		
		<div class="btn" @click="handleClick">
			报名集货
		</div>
	</div>
</template>

<script>
	export default {
		name: 'applyForm',
		data() {
			return {
				inlineDescText:"必填项（限定200个字符）",
				title: '默认为空',
				value: [],
				value2:'',
				addressData: [],
				showAddress: false
			}
		},
		mounted() {
			this.getData();
		},
		methods: {
			getData(){
				this.$axios.post('/address/getProvinces', {
				
				})
				.then((response) =>{
					if(response.data.success && response.data.data){
						let datakey = response.data.data;
						
						this.addressData = datakey;
					}
				});
			},
			handleClick() {
				//验证详细信息
				if(true) {
					this.$toast.show({
						text: '详细信息，不少于5个字！',
						type:'text',
						time: 1000,
						width:"auto"
					});
				}
				
				//验证手机号
		       	let mobilenumber = '13188886666'
				var myreg = /^[1][3,4,5,7,8][0-9]{9}$/; 
				
				if(!myreg.test(mobilenumber)) {
					this.$toast.show({
						text: '手机号格式不正确！',
						type:'text',
						time: 1000,
						width:"auto"
					});
				}
				
				//验证寄件数量
				if(true) {
					this.$toast.show({
						text: '寄件数量至少20件！',
						type:'text',
						time: 1000,
						width:"auto"
					});
				}
			}
		},
	}
</script>

<style scoped lang="less">
	@main-color: #FF6532;
	.form-title {
		color: @main-color;
		font-size: 16px;
		
		/*&.address {
			background-image: url(../assets/icon-addr.png);
		    background-repeat: no-repeat;
			background-size: contain;
		}*/
	}
	.plain-margin {
		background: #F8F8F8;
		height: 6px;
	}
	.last-item {
		margin-bottom: 10px;
	}
	.begin-item::before {
		display: none;
	}
	.title-icon {
		margin: 5px 10px 0 0;
	}
</style>