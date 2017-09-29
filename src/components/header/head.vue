<template>
    <header id='head_top'>
        <router-link :to="{path: '/'}" tag='div' class="head_login">
            <span class="head_login_img"></span>
        </router-link>
        <div class="link_search">
            <button class="return" @click="search">
                <span class="search_img"></span>
            </button>
        </div>
        <h1 class="page_title">{{title}}</h1>

        <div class="searchzd" v-if="isSearchShow">
            <div class="slspwo">
                <form class="search_form">
                    <input type="search" name="search" placeholder="搜索SAMURED" class="search_input" v-model="searchValue" @input="checkInput">
                    <input type="submit" value="" name="submit" class="search_submit" @click.prevent="searchTarget('')">
                </form>
            </div>
        </div>
        <transition name="fade">
            <div class="screen_cover" v-show="isSearchShow" @click="toggleDialogue" @DOMMouseScroll="removeRoll($event)" @mousewheel="removeRoll($event)" @touchmove="removeRoll($event)"></div>
        </transition>
        <!-- 分享对话end -->
    </header>
</template>

<script>
    import {mapState, mapActions} from 'vuex'
    import {imgBaseUrl} from '../../config/env'
    export default {
    	data(){
            return{
                searchValue: '', // 搜索内容
                imgBaseUrl, // 图片域名地址
                emptyResult: false, // 搜索结果为空时显示
                isSearchShow:false,//是否显示搜索
            }
        },
        mounted(){
            //获取用户信息
            //this.getUserInfo();

        },
        props: ['signinUp', 'headTitle', 'goBack'],
        computed: {
            ...mapState([
                'title'
            ]),
        },
        methods: {
            ...mapActions([
                'SET_TITLE'
            ]),
            searchTarget(historyValue){
                if (historyValue) {
                    this.searchValue = historyValue;
                }else if (!this.searchValue) {
                    return
                }
                this.toggleDialogue();
                this.$router.push('/results?q='+this.searchValue)
            },
            //搜索结束后，删除搜索内容直到为空时清空搜索结果，并显示历史记录
            checkInput(){
                if (this.searchValue === '') {
                    //this.showHistory = true; //显示历史记录
                    //this.restaurantList = []; //清空搜索结果
                    //this.emptyResult = false; //隐藏搜索为空提示
                } 
            },
            //搜索
            search(){
                this.isSearchShow=true;
            },
            //去除滚动事件
            removeRoll(event){
              event.preventDefault()
            },
            //对话框是否显示
            toggleDialogue(){
                this.isSearchShow = !this.isSearchShow;
            },
        },
        //监听
        watch: {
            '$route' (to, from) {
                // this.video_id = this.$route.query.id;
                // console.log(this.video_id)
                // this.initData();
                //location.reload();
                this.searchValue='';
            }
        }
    }

</script>

<style lang="scss" scoped>
@import '../../style/mixin';

//蒙版
.screen_cover {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, .6);
    z-index: 1111;
}

.fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
}

.fade-enter, .fade-leave-active {
    opacity: 0;
}
.slspwo{
    padding-left: 1.4rem;
    padding-right: .2rem;
    height: 100%;
    .search_form{
        padding: 0;
        margin: 0;
        height: 100%;
        display:block;
        display:flex;
        box-align: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        .search_input{
            -webkit-box-flex: 1;
            -ms-flex-positive: 1;
            flex-grow: 1;
            height: .5rem;
            outline: none;
            font-size: 15px;
            line-height: .5rem;
            margin: 0;
            outline-width: 0;
            border: 0;
            padding: 2px 0 0 5px;
        }
        .search_submit{
             background: url(../../images/search.png) center center no-repeat;
            background-size: .37rem;
            @include wh(1rem, .5rem);
            display: block;
        }
    }
}

.searchzd{
    position: absolute;
    left: 0;
    top: 0;
    z-index: 11110;
    width: 100%;
    height: 100%;
    background: #212121;
}

.page_title{
    font-size: .26rem;
    display: table-cell;
    height: .95rem;
    vertical-align: middle;
}

#head_top {
    background-color: $blue;
    position: fixed;
    z-index: 101110;
    left: 0;
    top: 0;
    @include wh(100%, .95rem);
}

.return {
    @include wh(.95rem, .95rem);
    //@include ct;
    float: right;
    background: transparent;

    .search_img {
        background: url(../../images/search.png) center center no-repeat;
        background-size: 100%;
        @include wh(.37rem, .5rem);
        display: block;
        margin: auto;
    }

}

.head_login {
    float: left;
    margin-right: 8px;
    padding-left: .2rem;
    height: 100%;
    position: relative;
    z-index: 11111;
    .head_login_img {
        @include wh(1rem, 100%);
        background: url(../../images/ytb_logo.png) center center no-repeat;
        background-size: 100%;
        display: block;
        margin: auto;
    }

}

.head_goback {
    left: 0.4rem;
    @include wh(0.6rem, 1rem);
    line-height: 2.2rem;
    margin-left: .4rem;
}

/* .head_login{
    right: 0.55rem;
    @include sc(0.32rem, #fff);
    @include ct;
    .login_span{
        color: #fff;
    }
    .user_avatar{
        fill: #fff;
        @include wh(.8rem, .8rem);
    }
} */
.title_head {
    @include center;
    width: 50%;
    color: #fff;
    text-align: center;

    .title_text {
        @include sc(0.32rem, #000);
        text-align: center;
        font-weight: bold;
    }

}
</style>
