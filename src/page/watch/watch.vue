<template>
    <!-- 组件盒子 -->
    <div class="watch_container">
        <!-- <head-top signin-up='msite'></head-top> -->
        <div class="player_wrap">
            <video preload="load" class="player_video" controls="controls" autoplay="true" webkit-playsinline :src="playerData.url_720"></video>
        </div>
        <div class="watch_info">
            <div class="video_info_title">
                <span class="dusnlo_title ellipsis">{{playerData.name}}</span>
                <span class="watch_ci">{{playerData.watch_num}}次观看</span>
            </div>
            <h5 class="video_detail_title_wrap">
                <p class="video_detail_title ellipsis">{{playerData.vriTitle}}</p>
            </h5>
            <ul class="share_box">
                <!-- <li>
                    <i class="iconfont icon-zan"></i>
                    <span class="icon_text">123</span>
                </li> -->
                <li @click="share('qq')">
                    <i class="iconfont icon-qq"></i>
                    <span class="icon_text">QQ</span>
                </li>
                <li @click="share('weibo')">
                    <i class="iconfont icon-weibo"></i>
                    <span class="icon_text">微博</span>
                </li>
                <li @click="share('douban')">
                    <i class="iconfont icon-4"></i>
                    <span class="icon_text">豆瓣</span>
                </li>
                <li @click="share('qzone')">
                    <i class="iconfont icon-qqkongjian"></i>
                    <span class="icon_text">QQ空间</span>
                </li>
                <!-- <li>
                    <i class="iconfont icon-qq"></i>
                    <span class="icon_text">保存</span>
                </li> -->
            </ul>
        </div>

        <div class="videolist_info_wrap">
            <section>
                <img src="http://static.samured.com/assets/images/video/cover/KLfCv3e0Y5Y.jpg" class="videolist_img">
            </section>
            <hgroup class="videolist_right">
                <h5 class="video_detail_title_wrap">
                    <p class="video_detail_title ellipsis">{{playerData.game.zgName}}</p>
                </h5>
                <header class="video_detail_header">
                    <h4 class="video_title ellipsis">{{isfzName}}</h4>
                </header>
            </hgroup>
        </div>

        <div class="recommend_container_wrap">
            <div class="recommend_title">为你推荐</div>
            <recoMmend :video_id="video_id" :contentType="contentType"></recoMmend>
        </div>


        <!-- 分享对话 -->
        <transition name="toggle-cart">
            <section class="cart_food_list " v-show="showDialogue">
                <ul class="item_wrap">
                    <li class="icon_list">
                        <i class="icon_list_item icon_item_wb"></i>
                        <p>新浪微博</p>
                    </li>
                    <li class="icon_list">
                        <i class="icon_list_item icon_item_kj"></i>
                        <p>QQ空间</p>
                    </li>
                    <li class="icon_list">
                        <i class="icon_list_item icon_item_tb"></i>
                        <p>百度贴吧</p>
                    </li>
                    <li class="icon_list">
                        <i class="icon_list_item icon_item_hy"></i>
                        <p>QQ好友</p>
                    </li>
                </ul>
            </section>
        </transition>
        <transition name="fade">
            <div class="screen_cover" v-show="showDialogue" @click="toggleDialogue" @DOMMouseScroll="removeRoll($event)" @mousewheel="removeRoll($event)" @touchmove="removeRoll($event)"></div>
        </transition>
        <!-- 分享对话end -->



    </div>
</template>
<script>
import {mapMutations,mapState} from 'vuex'
//引入存储
//import { setStore, getStore } from '@/config/mUtils'
import headTop from 'src/components/header/head'
import recoMmend from 'src/components/common/recommend'
import {get_video} from 'src/service/getData'
//import 'src/plugins/flv.min.js'
export default {
    //数据
    data() {
        return {
            playerData:{
                game:{}
            },//播放信息
            videoId: null, //播放id
            contentType:'',
            showDialogue:false,//分享对话
            isplay:'',
        }
    },
    created() {
        this.video_id = this.$route.query.videoId;
    },
    //开始创建  vue后自动执行
    mounted() {
        this.initData();
    },
    //需要使用的模块
    components: {
        headTop,
        recoMmend
    },

    //父组件的参数书
    props: [],

    //需要引用的外部js方法
    mixins: [],

    //计算值 这里可以实时监听某个数据的变化
    computed: {
        ...mapState([
            'title'
        ]),
        isfzName(){
            if(this.playerData.game.fzName){
                return this.playerData.game.fzName;
            }else if(this.playerData.game.riName){
                return this.playerData.game.riName;
            }else if(this.playerData.game.yingName){
                return this.playerData.game.yingName;
            }else{
                return '';
            }
        }
    },
    updated() {
        // console.log(this.supportIds, this.sortByType)
    },
    //方法
    methods: {
        ...mapMutations([
            'SET_TITLE'
        ]),

        flv_load() {
            console.log('isSupported: ' + flvjs.isSupported());
            var urlinput = document.getElementsByName('urlinput')[0];
            var xhr = new XMLHttpRequest();
            xhr.open('GET', urlinput.value, true);
            xhr.onload = function(e) {
                var player;
                var element = document.getElementsByName('videoElement')[0];
                if (typeof player !== "undefined") {
                    if (player != null) {
                        player.unload();
                        player.detachMediaElement();
                        player.destroy();
                        player = null;
                    }
                }

                player = flvjs.createPlayer({
                    type: 'mp4',
                    url: urlinput.value
                });
                player.attachMediaElement(element);
                player.load();
            }
            xhr.send();
        },



        async initData() {
            this.SET_TITLE('SAMURED');
            //获取数据
            let res = await get_video(this.video_id);
            this.playerData=res.video;
            this.contentType=res.video.contentType;
        },
        //弹出分享对话框
        slaoak(){
            //this.followListArr.baoremove(index)
            event.preventDefault();
            this.toggleDialogue();
            //this.wyexnumber=index;
            //this.wyexId=id;
        },
        //对话框是否显示
        toggleDialogue(){
            this.showDialogue = !this.showDialogue;
        },
        //去除滚动事件
        removeRoll(event){
          event.preventDefault()
        }
    },

    //监听
    watch: {
        '$route' (to, from) {
            this.video_id = this.$route.query.videoId;
            this.initData();
            //location.reload();
        },
        isplay(){
            alert(1)
        }
    }
}
</script>
<style lang="scss" scoped>
@import 'src/style/mixin'; //初始化页面背景动画

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

//对话
.cart_food_list {
    position: fixed;
    width: 100%;
    //padding-bottom: 2rem;
    z-index: 1112;
    bottom: 0;
    left: 0;
    background-color: #fff;
    //height: 4rem;

    .item_wrap {
        padding: .4rem;
        display: flex;
        li{
            flex: 1;
            display: flex;
            text-align: center;
            flex-direction: column;
            align-items: center;
            i{
                @include wh(1.2rem,1.2rem);
                background-image: url(../../images/ui_2.png);
                background-repeat: no-repeat;
                background-size: 7.2rem;
                &.icon_item_wb{
                    background-position: 0 0;
                }
                &.icon_item_kj{
                    background-position: 0 -4.8rem;
                }
                &.icon_item_tb{
                    background-position: 0 -6rem;
                }
                &.icon_item_hy{
                    background-position: 0 -3.6rem;
                }
            }
        }
    }
}

.toggle-cart-enter-active, .toggle-cart-leave-active {
    transition: all .3s ease-out;
}

.toggle-cart-enter, .toggle-cart-leave-active {
    transform: translateY(100%);
}

.fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
}

.fade-enter, .fade-leave-active {
    opacity: 0;
}


.recommend_title{
    padding-left: .17rem;
    margin-top: .1rem;
}
.watch_container{
    padding-top: 5.15rem;
    font-size:.28rem;
}
.recommend_container_wrap{
    padding:.07rem;
}
.player_wrap{
    @include wh(100%,4.2rem);
    position: fixed;
    top: .95rem;
    z-index: 254;
    background-color: #252525;
    .player_video{
        @include wh(100%,100%);
    }
}
.watch_info{
    padding: .18rem;
    background-color: #252525;
    .video_info_title{
        display:flex;
        justify-content:space-between;
        width:100%;
        line-height: .52rem;
        /* span{
            display: block;
        } */
        .dusnlo_title{
            font-size: .3rem;
            color: #848484;
            width: 4.8rem;
        }
        .watch_ci{
            font-size: .22rem;
            color: #525252;
        }
    }
    .video_detail_title{
        font-size: .22rem;
        color: #525252;
        line-height: .34rem;
        width: 3.3rem;
    }
}
.share_box{
    display: flex;
    margin-top: .1rem;
    li{
        flex: 1;
        display: flex;
        text-align: center;
        flex-direction: column;
        align-items: center;
        i{
            font-size: 0.34rem;
        }
        span{
            font-size: .24rem;
            margin-top: .1rem;
        }
    }
}

.videolist_info_wrap {
    padding: .20rem .10rem .15rem .10rem;
    display:block;
    display:flex;
    box-align: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    border-bottom: 0.025rem solid #393939;
    border-top: 0.025rem solid #393939;
    padding: 0.12rem 0.17rem;
    .video_detail_header{
        margin-top: .1rem;
    }
    .videolist_img {
        border: 0.025rem solid #424242;
        @include wh(.8rem, .8rem);
        display: block;
        margin-right: 0.2rem;
        border-radius: 50%;
    }

    .videolist_right {
        flex: auto;
    }

    .video_title {
        line-height: .3rem;
        font-size: .24rem;
        color: #868486;
        width: 4.7rem;
    }

    .video_detail_title_wrap {
        .video_detail_title {
            line-height: .3rem;
            font-size: .28rem;
            width: 3.3rem;
        }

    }

    .video_describe_wrap {
        margin-top: .05rem;
        color: #555456;

        .video_describe {
            color: #555456;
            line-height: .3rem;
            font-size: .24rem;

            span {
                color: #555456;
            }

        }

    }

}
 video::-internal-media-controls-download-button {
    display:none;
}

video::-webkit-media-controls-enclosure {
    overflow:hidden;
}

/*video::-webkit-media-controls-panel {
    width: calc(100% + 30px); 
}*/
</style>