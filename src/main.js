// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//smui框架
import 'smui/dist/css/smui.min.css'
import {Navbar, Toast, Cell, Group, Modal, Slider, Icon, Textarea, Input, Address } from 'smui'
Vue.use(Navbar)
Vue.use(Toast)
Vue.use(Cell)
Vue.use(Group)
Vue.use(Modal)
Vue.use(Slider)
Vue.use(Icon)
Vue.use(Textarea)
Vue.use(Input)
Vue.use(Address)

// 请求
import axios from 'axios' 
import qs from 'qs'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
//axios.defaults.withcredentials = true

/** 统一设置后台请求地址 */
//本地开发地址
axios.defaults.baseURL = 'http://localhost:8080/api'
//上线地址
//axios.defaults.baseURL = ''

Vue.prototype.$axios = axios

//POST传参序列化(添加请求拦截器)
axios.interceptors.request.use((config) => {
	//在发送请求之前如果为post序列化请求参数
    if(config.method  === 'post'){
        config.data = qs.stringify(config.data);
    }
    return config;
},(error) =>{
	sfopenVM.$toast.show({
		text: '传参错误，请检查！',
		type:'text',
		time: 1000,
		width:"auto"
	});
    return Promise.reject(error);
});

//返回状态判断(添加响应拦截器)
axios.interceptors.response.use((res) => {
	//对响应数据做判断，与后台协议统一接口返回格式
    if(!res.data.success){//这个判断可根据实际情况修改
        sfopenVM.$toast.show({
			text: res.data.message ? res.data.message : '服务器请求失败，请重试！',
			type:'text',
			time: 1500,
			width:"auto"
		});
        return Promise.reject(res);
    }
    return res;
}, (error) => {
    sfopenVM.$toast.show({
		text: '网络异常，请稍后再试！',
		type:'text',
		time: 1500,
		width:"auto"
	});
    return Promise.reject(error);
}); 

//自己写的样式和js
import './comm/css/global.less'

//适配
import './comm/js/flexible.js'

//调试工具
//import './comm/js/vconsole.min.js'

Vue.config.productionTip = false

/* eslint-disable no-new */

var sfopenVM;
sfopenVM = new Vue({
	router,
	el: '#app',
	template: '<App/>',
	components: { App }
})
