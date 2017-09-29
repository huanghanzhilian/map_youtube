<template>
	<div>
        <head-top signin-up='msite'></head-top>
		<transition name="router-fade" mode="out-in">
			<keep-alive>
			    <router-view v-if="$route.meta.keepAlive"></router-view>
			</keep-alive>
    	</transition>
    	<transition name="router-fade" mode="out-in">
			<router-view v-if="!$route.meta.keepAlive"></router-view>
		</transition>
		<svg-icon></svg-icon>
    </div>
</template>

<script>
	import svgIcon from './components/common/svg';
    import headTop from 'src/components/header/head'
  	export default {
        //数据
        data() {
            return {
            }
        },
    	components:{
            svgIcon,
            headTop
        },
        beforeCreate(){
            /*function IsPC() {
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
            var IsPCs=IsPC();
            if(IsPCs){
                window.location.replace("http://samured.com/#"+this.$route.fullPath)
            }*/
        },
        created() {
            // var IsPCs=this.IsPC();
            // if(IsPCs){
            //     window.location.replace("http://samured.com/#"+this.$route.fullPath)
            // }
            // window.location.replace("http://samured.com/#")
            //console.log("http://samured.com/#"+this.$route.fullPath)
        },
        //开始创建  vue后自动执行
        mounted() {

        },
        //方法
        methods: {
            IsPC() {
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
            }
        }
  	}

</script>

<style lang="scss">
  	@import './style/common';
	.router-fade-enter-active, .router-fade-leave-active {
	  	transition: opacity .3s;
	}
	.router-fade-enter, .router-fade-leave-active {
	  	opacity: 0;
	}
</style>
