import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router/router'
import store from './store/'
import {routerMode} from './config/env'
import './config/rem'
import FastClick from 'fastclick'
import 'src/style/fontsr.css'

if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);
}

Vue.use(VueRouter)
const router = new VueRouter({
	routes,
	mode: routerMode,
	strict: process.env.NODE_ENV !== 'production',
	scrollBehavior (to, from, savedPosition) {
	    if (savedPosition) {
		    return savedPosition
		} else {
			if (from.meta.keepAlive) {
				from.meta.savedPosition = document.body.scrollTop;
			}
		    return { x: 0, y: to.meta.savedPosition ||0}
		}
	}
});
function IsPC() {
	var userAgentInfo = navigator.userAgent;
	var Agents = ["Android", "iPhone",
		"SymbianOS", "Windows Phone",
		"iPad", "iPod"
	];
	var flag = true;
	for (var v = 0; v < Agents.length; v++) {
		if (userAgentInfo.indexOf(Agents[v]) > 0) {
			flag = false;
			break;
		}
	}
	return flag;
};
var IsPCs = IsPC();
router.beforeEach((to, from, next) => {
	/*if (to.path == '/') {
		// 用户使用后退返回到授权页，则默认回到首页
		// next({
		// 	path: '/results',
  //           query: {q : to.fullPath}
		// })
		// return false
		// next({
		// 	path: '/results',
  //           query: {q : 'd'}
		// })
		// return false
	}*/
	// if (IsPCs) {
	// 	window.location.replace("http://samured.com/#"+to.fullPath)
	// 	 //window.location.replace("http://192.168.50.101:8088/#"+to.fullPath)
		
	// 	return false
	// }
	next();
})



// 时间转换
Vue.prototype.timeCycle = function(time) {
	var result = '';
	var second = 1000;
	var minute = 1000 * 60;
	var hour = minute * 60;
	var day = hour * 24;
	var halfamonth = day * 15;
	var month = day * 30;
	var now = new Date().getTime();
	var diffValue = now - (time * 1000);
	if (diffValue < 0) {
		return;
	}
	var monthC = diffValue / month;
	var weekC = diffValue / (7 * day);
	var dayC = diffValue / day;
	var hourC = diffValue / hour;
	var minC = diffValue / minute;
	var secondC = diffValue / second;
	if (monthC >= 1) {
		result = "" + parseInt(monthC) + "个月前";
	} else if (weekC >= 1) {
		result = "" + parseInt(weekC) + "周前";
	} else if (dayC >= 1) {
		result = "" + parseInt(dayC) + "天前";
	} else if (hourC >= 1) {
		result = "" + parseInt(hourC) + "小时前";
	} else if (minC >= 1) {
		result = "" + parseInt(minC) + "分钟前";
	} else
		result = "" + parseInt(secondC) + "秒前";
	return result;
}

//分享地址拼接
Vue.prototype.share = function(op) {
	var url = '';
	var hash = window.location.hash;
	hash = hash.replace(/:/g, '%3A');
	hash = hash.replace(/\//g, '%2F');
	hash = hash.replace(/#/g, '%23');
	hash = hash.replace(/=/g, '%3D');
	hash = hash.replace(/&/g, '%26')
		// hash = hash.replace(/?/g,'%3F');
	url = 'http%3A%2F%2Fm.samured.com%2F' + hash;
	if (op == 'qq') {
		window.open('http://connect.qq.com/widget/shareqq/index.html?url=' + url + '&title=Video%20Detail%20-%20Samured&source=Video%20Detail%20-%20Samured&desc=&pics=http%3A%2F%2Fsamured.com%2Fstatic%2Fimage%2Flogo.png')
	} else if (op == 'weibo') {
		window.open('http://service.weibo.com/share/share.php?url=' + url + '&title=Video%20Detail%20-%20Samured&pic=http%3A%2F%2Fsamured.com%2Fstatic%2Fimage%2Flogo.png&appkey=')
	} else if (op == 'douban') {
		window.open('https://www.douban.com/share/service?href=' + url + '&name=Video%20Detail%20-%20Samured&text=&image=http%3A%2F%2Fsamured.com%2Fstatic%2Fimage%2Flogo.png&starid=0&aid=0&style=11')
	} else if (op == 'qzone') {
		window.open('https://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=' + url + '&title=Video%20Detail%20-%20Samured&desc=&summary=&site=Video%20Detail%20-%20Samured')
	}
};

new Vue({
	router,
	store,
}).$mount('#app')

