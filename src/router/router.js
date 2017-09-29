import App from '../App'

const msite = r => require.ensure([], () => r(require('../page/msite/msite')), 'msite')
//播放页
const watch = r => require.ensure([], () => r(require('../page/watch/watch')), 'watch')

const results = r => require.ensure([], () => r(require('../page/results/results')), 'results')

export default [{
    path: '/',
    component: App, //顶层路由，对应index.html
    children: [ //二级路由。对应App.vue
        {
            path: '/',
            component: msite,
        },
        //播放页
        {
            path: '/watch',
            component: watch
        },
        {
            path: '/results',
            component: results
        },
        // {
        //     path: '*',
        //     component: msite,
        //     redirect: '/'
        // }
    ]
}]