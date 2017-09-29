<template>
    <!-- 组件盒子 -->
    <div class="results_container">
        <div class="recommend_container_wrap">
            <!-- <div class="recommend_title">为你推荐</div> -->
            <recoMmend :keyword="qId"></recoMmend>
        </div>
    </div>
</template>
<script>
//引入存储
//import { setStore, getStore } from '@/config/mUtils'
import {mapMutations,mapState} from 'vuex'
import recoMmend from 'src/components/common/searchlist'

export default {
    //数据
    data() {
        return {
            qId: null, //
        }
    },
    created() {
        this.qId = this.$route.query.q;
    },
    //开始创建  vue后自动执行
    mounted() {
        this.initData();
    },
    //需要使用的模块
    components: {
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
    },
    updated() {
        // console.log(this.supportIds, this.sortByType)
    },
    //方法
    methods: {
        ...mapMutations([
            'SET_TITLE'
        ]),
        async initData() {
            this.SET_TITLE(this.qId);
            //获取数据
        },
    },

    //监听
    watch: {
        '$route' (to, from) {
            this.qId = this.$route.query.q;
            this.initData();
            //location.reload();
        }
    }
}
</script>
<style lang="scss" scoped>
@import 'src/style/mixin'; //初始化页面背景动画
.results_container{
    padding-top: .95rem;
    font-size:.28rem;
}
.recommend_container_wrap{
    padding:.07rem;
}
</style>