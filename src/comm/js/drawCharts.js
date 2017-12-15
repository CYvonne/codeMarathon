/**
 * 成本罗盘  图表设置
 */

import echarts from 'echarts'
import china from 'echarts/map/json/china.json'
(function() {
	var chart = {};
	chart.install = function(vue) {
		vue.prototype.$chart = {
			bar1: function(id, data) {
				this.chart = echarts.init(document.getElementById(id));
				const optionData = {
					tooltip : {
						trigger:'axis',
//						position:function (point, params, dom, rect, size) {
//					      	// 固定在顶部
//					      	return [point[0], '10%'];
//					  	},
				        axisPointer : {
				            type:'line',
				            lineStyle:{
				                opacity:0
				            }
				        },
				        backgroundColor:'#798697',
				        triggerOn:'click',
				        hideDelay:0,
				        transitionDuration:0
				    },
				    legend: {
				        data:[{
				            name:data.legend[0],
				            icon:'rect'
				        },{
				            name:data.legend[1],
				            icon:'rect'
				        }],
				        left:'5%',
				        itemWidth:21,
				        itemHeight:10,
				        itemGap:28,
				    },
				    grid: {
				        left: '5%',
				        right: '1%',
				        bottom: '6%',
				        containLabel: true
				    },
				    xAxis : [
				        {
				            type : 'category',
				            data : data.xData,
				            axisLine: {
				            	lineStyle: {
				            		color:'#D9D9D9'
				            	}
				            },
				            axisLabel:{
				            	color:data.xAxisLabelColor
				            },
				            axisTick: {
				            	show:false
				            }
				        }
				    ],
				    yAxis : [
				        {
				            type : 'value',
				            name:data.yAxisName,
				            splitLine: {
				            	lineStyle: {
				            		color:'#DDD'
				            	}
				            },
				            axisLine: {
				            	lineStyle: {
				            		color:'#DDD'
				            	}
				            },
				            axisLabel:{
				            	color:'#343A41',
				            	formatter: '{value}%',
				            },
				            nameTextStyle: {
				            	color:'#343A41'
				            },
				            axisTick: {
				            	show:false
				            }
				        },
				        {
				            type : 'value',
				            axisLine: {
				            	lineStyle: {
				            		color:'#D9D9D9'
				            	}
				            },
				        }
				    ],
				    dataZoom: [{
			            startValue: data.xData.length-4,
			            endValue: data.xData.length-1,
			            show:false,
			            filterMode:'empty'//当前数据窗口外的数据，被 设置为空。即 不会 影响其他轴的数据范围。
			        }, {
			            type: 'inside',
			            zoomLock:true
			        }],
			        animationDurationUpdate:0,
				    series : [
				        {
				            name:data.legend[0],
				            type:'bar',
				            barWidth : 20,
				            stack: '当月',
				            data:data.series[0],
				            itemStyle:{
				                normal:{
				                    color:'#4879DF'
				                }    
				            }
				        },
				        {
				            name:data.legend[1],
				            type:'bar',
				            stack: '当月',
				            data:data.series[1],
				            itemStyle:{
				                normal:{
				                    color:'#21C393'
				                }    
				            }
				        },
				    ]
				};
				this.chart.setOption(optionData);
			},
		}

	}
	if(typeof exports == 'object') {
		module.exports = chart
	}
})()