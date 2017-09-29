<template>
    <div class="msite_container">
    	<!-- <head-top signin-up='msite'></head-top> -->
    	<div class="video_list_container">
	    	<video-list></video-list>
    	</div>
    </div>
</template>

<script>
import {mapMutations,mapState} from 'vuex'
// import {imgBaseUrl} from 'src/config/env'
import headTop from 'src/components/header/head'
import videoList from 'src/components/common/videolist'
import {msiteAdress, msiteFoodTypes, cityGuess} from 'src/service/getData'

export default {
	data(){
        return {
        }
    },
    async beforeMount(){

    },
    mounted(){
        this.initData();
    },
    components: {
    	headTop,
    	videoList,
    },
    //计算值 这里可以实时监听某个数据的变化
    computed: {
        ...mapState([
            'title'
        ]),
    },
    //方法
    methods: {
    	...mapMutations([
            'SET_TITLE'
        ]),
        async initData() {
            this.SET_TITLE('首页');
        },
    },
    watch: {

    }
}

</script>

<style lang="scss" scoped>
    @import 'src/style/mixin';
    //msite_container主包裹
    .msite_container{
        padding-top: .95rem;
        //padding-bottom:2.4rem;
    }


	.link_search{
		left: .8rem;
		@include wh(.9rem, .9rem);
		@include ct;
	}
	.msite_title{
		@include center;
        width: 50%;
        color: #fff;
        text-align: center;
        margin-left: -0.5rem;
        .title_text{
            @include sc(0.32rem, #fff);
            text-align: center;
            display: block;
        }
	}
    //列表包裹
	.video_list_container{
		background-color: #fff;
	}

</style>
