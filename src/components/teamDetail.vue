<template>
	<div class="container">
		<div class="main-title">{{detail.teamName}}</div>
		
		<!--重量和最低需寄-->
		<div class="weight-and-minimun">
			<div>{{detail.weightMin}}kg-{{detail.weightMax}}kg</div>
			<div>每日最低需寄<span class="em-text">{{detail.dailyMinPackages}}</span>件</div>
		</div>
		
		<!--图片展示-->
		<div class="img-show">
			<div class="detail-img"></div>
			<div class="detail-tag">
				<p class="price">低至￥<span>{{detail.basePrice}}</span></p>
				<p class="weight">{{detail.baseWeight}}kg</p>
			</div>
		</div>
		
		<!--进度条-->
		<div class="percent">
			<div class="percent-bar">
				<v-slider
				  	:value="sliderValue"
				  	:min="0"
				  	:max="100"
				  	minHTML="<span></span>"
				  	maxHTML="<span></span>"
				  	:slider-bar-height="20"
				  	:disabled="true">
				</v-slider>
			</div>
			<div class="percent-dsc">还差<span class="em-text">{{detail.groupLimit - detail.ctNum}}</span>人即可成团</div>
		</div>
		
		<!--截止日期-->
		<div class="end-day">
			截止日期：{{detail.endTime}}
		</div>
		<div class="outer-margin"></div>
		
		<!--使用要求-->
		<div class="use-requirement">
			<div class="block-title"><v-icon type="error"></v-icon>使用要求</div>
			<div class="use-detail" v-html="detail.useRequire"></div>
		</div>
		<div class="outer-margin"></div>
		
		<!--最近参与-->
		<div class="lately-join">
			<div class="block-title"><span class="title-icon"></span>最近参与</div>
		</div>
		
		<div class="btn" @click="handleClick">
			{{['','立即参加','已成团','已结束'][detail.status]}}
		</div>
	</div>
</template>

<script>
	export default {
		name: 'teamDetail',
		data() {
			return {
				detail: {},
			}
		},
		mounted() {
			this.getData();
		},
		computed: {
			mktId() {
				return this.$route.query.id;
			},
			sliderValue() {
				if(this.detail.groupLimit && this.detail.ctNum) {
					return parseFloat((this.detail.ctNum/this.detail.groupLimit).toFixed(1));
				}
				return 0;
			}
		},
		watch: {
			//设置进度条中的百分比文字
			sliderValue(newVal) {
				document.querySelectorAll('.range-quantity')[0].innerText = newVal+ '%'
			}
		},
		methods:{
			getData(){
				this.$axios.post('/teamInfo/'+this.mktId, {
				
				})
				.then((response) =>{
					if(response.data.success && response.data.data){
						let datakey = response.data.data;
						
						this.detail = datakey;
					}
				});
			},
			handleClick() {
				this.$router.push('/applyForm') 
			}

		}
	}
</script>

<style scoped lang="less">
	@main-color: #FF6532;
	/*重量和最低需寄*/
	.weight-and-minimun {
		color: #353535;
		font-size: 14px; 
	    height: 34px;
		line-height: 27px;
		padding-left: 13px;
		
		div {
			display: inline;
			padding-left: 11px;
		}
	}
	/*图片展示*/
	.img-show {
		position: relative;
		width: 100%;
		.detail-img {
			width: 100%;
    		height: 100px;
		}
		.detail-tag {
			position: absolute;
			top: -50%;
			right: 20px;
			width: 82px;
			height: 103px;
			background-image: url(../assets/detail-tag.png);
		    background-size: contain;
		    color: #fff;
	    	font-size: 12px;
	    	text-align: center;
		    
		    span {
		    	font-size: 18px;
		    }
		    .price {
		    	height: 47px;
    			line-height: 69px;
		    }
		    .weight {
		    	
		    }
		}
	}
	/*进度条*/
	.percent {
		padding: 10px 0 10px 0;
	    height: 40px;
    	box-sizing: border-box;
		
		.percent-bar {
			display: inline-block;
			width: 65%;
			margin-bottom: -6px;
		}
		.percent-dsc {
			display: inline-block;
			width: 34%;
			text-align: left;
		}
	}
	/*截止日期*/
	.end-day {
		font-size: 15px;
	    height: 20px;
	    line-height: 20px;
	    margin: 0 16px;
	    padding: 12px 0;
	    border-top: 1px solid #e6e6e6;
	}
	/*使用要求*/
	.use-requirement {
		.use-detail {
		    /*word-break: break-all;*/
    		overflow: hidden;
    		padding: 0 10px 16px 10px;
    		color: #B2B2B2;
    		box-sizing: border-box;
		    /*min-height: calc(~'100vh - 474px');*/
		    line-height: 1.5em;
		}
	}
	/*最近参与*/
	.lately-join {
		.title-icon {
			display: inline-block;
			background-image: url(../assets/icon-join.png);
			background-size: cover;
			width: 17px;
			height: 17px;
			margin: 0 7px 0 12px;
		}
	}
	
	
</style>