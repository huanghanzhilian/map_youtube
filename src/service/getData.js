import fetch from '../config/fetch'
import {getStore} from '../config/mUtils'

/**
 * 首页推荐列表接口
 */

export const videoList = (pageNum,querySize) => fetch('/api/mobile/videos',{
    pageNum,
    querySize
});


/**
 * 移动端播放接口
 */
export const get_video = (video_id) => fetch('/api/watching/get_video',{
    video_id
});

/**
 * 播放推荐列表接口
 */

export const recommendList = (pageNum,querySize,contentType,video_id) => fetch('/api/watching/recommends',{
    pageNum,
    querySize,
    contentType,
    video_id
});


/**
 * 搜索列表接口
 */

export const searchList = (keyword,pageNum,querySize) => fetch('/api/search/search',{
    keyword,
    pageNum,
    querySize
});