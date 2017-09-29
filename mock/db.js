// db.js
var Mock = require('mockjs');

module.exports = {
      getComment: Mock.mock({
            "error": 0,
            "message": "success",
            "result|40": [{
                  "author": "@name",
                  "comment": "@cparagraph",
                  "date": "@datetime"
            }]
      }),
      addComment: Mock.mock({
            "error": 0,
            "message": "success",
            "result": []
      }),
      //移动端播放接口
      videos: Mock.mock({
            "videos": [{
                  "mtime": 1497698491,
                  "watch_num": 415,
                  "duration": "8:36",
                  "cover": "/assets/images/video/cover/xHht8480cEo.jpg",
                  "game": {
                        "head": "/assets/images/game/head/21bb64bde53561538244aeee6bb9ae6c.png",
                        "zgName": "德军总部2：新巨人"
                  },
                  "objectId": 6744,
                  "name": "德军总部2：新巨人 - E3 2017 完整宣传片"
            }, {
                  "mtime": 1497698491,
                  "watch_num": 560,
                  "duration": "2:50",
                  "cover": "/assets/images/video/cover/ysrr5tO6cYA.jpg",
                  "game": {
                        "zgName": "其他"
                  },
                  "objectId": 6652,
                  "name": "Xbox E3 2017 发布会 3分钟集锦"
            }, {
                  "mtime": 1497698491,
                  "watch_num": 1104,
                  "duration": "10:00",
                  "cover": "/assets/images/video/cover/3XfhyF1p1qw.jpg",
                  "game": {
                        "head": "/assets/images/game/head/4dd10083d27470f1e4e696c10fb3af8d.png",
                        "zgName": "飙酷车神2"
                  },
                  "objectId": 6558,
                  "name": "飙酷车神2 - E3 2017 现场采访"
            }, {
                  "mtime": 1497698491,
                  "watch_num": 487,
                  "duration": "1:19",
                  "cover": "/assets/images/video/cover/dB_kErFsox8.jpg",
                  "game": {
                        "zgName": "刀客对决"
                  },
                  "objectId": 6303,
                  "name": "刀客对决 - E3 2016 实际游戏演示 宣传片"
            }, {
                  "mtime": 1497698491,
                  "watch_num": 1165,
                  "duration": "10:36",
                  "cover": "/assets/images/video/cover/rhPj1Tviv1s.jpg",
                  "game": {
                        "zgName": "其他"
                  },
                  "objectId": 6221,
                  "name": "首席登陆舱 - E3 2016 宣传片"
            }, {
                  "mtime": 1497698491,
                  "watch_num": 126,
                  "duration": "2:05",
                  "cover": "/assets/images/video/cover/dJ-YzmeigJE.jpg",
                  "game": {
                        "head": "/assets/images/game/head/4985c436e6c685106e20ea9385811299.jpg",
                        "zgName": "拳皇14"
                  },
                  "objectId": 6186,
                  "name": "拳皇14 - 官方邀请队 宣传片"
            }, {
                  "mtime": 1497698491,
                  "watch_num": 984,
                  "duration": "0:31",
                  "cover": "/assets/images/video/cover/4KBv2agfM64.jpg",
                  "game": {
                        "zgName": "乐高星球大战：原力觉醒"
                  },
                  "objectId": 6169,
                  "name": "乐高星球大战：原力觉醒 - Galaxy of Bricks TV Spot"
            }, {
                  "mtime": 1497698491,
                  "watch_num": 404,
                  "duration": "2:04",
                  "cover": "/assets/images/video/cover/pMsZQ0CWNuU.jpg",
                  "game": {
                        "zgName": "其他"
                  },
                  "objectId": 6118,
                  "name": "PlayStation Music and Spotify介绍：Pell"
            }]
      }),
      get_video: Mock.mock({
            "video": {
                  "cover": "/assets/images/video/cover/xHht8480cEo.jpg",
                  "duration": "8:36",
                  "url_1080": "http://v1080.samured.com/xHht8480cEo.webm",
                  "objectId": 6744,
                  "name": "德军总部2：新巨人 - E3 2017 完整宣传片",
                  "mtime": 1497698491,
                  "watch_num": 415,
                  "game": {
                        "zgName": "德军总部2：新巨人",
                        "riName": "",
                        "head": "/assets/images/game/head/21bb64bde53561538244aeee6bb9ae6c.png",
                        "yingName": "Wolfenstein II: The New Colossus",
                        "fzName": ""
                  },
                  "contentType": "1",
                  "url_720": "http://v720.samured.com/xHht8480cEo.webm",
                  "vriTitle": "Wolfenstein II: The New Colossus – E3 2017 Full Reveal Trailer"
            }
      }),
      recommends: Mock.mock({
            "videos": [{
                  "cover": "/assets/images/video/cover/TMwZ48_26fA.jpg",
                  "duration": "1:44",
                  "objectId": 92,
                  "name": "最终幻想15 - “古拉迪欧拉斯章” 宣传片",
                  "mtime": 1499167291,
                  "watch_num": 1086,
                  "game": {
                        "zgName": "最终幻想15",
                        "riName": "ファイナルファンタジーXV",
                        "head": "/assets/images/game/head/9b0ac8d7581d5c0e6a686974bcf44315.png",
                        "yingName": "Final Fantasy XV",
                        "fzName": ""
                  },
                  "contentType": "1",
                  "vriTitle": "FINAL FANTASY XV - Episode Gladiolus Trailer PS4"
            }, {
                  "cover": "/assets/images/video/cover/kNHaheqB1-w.jpg",
                  "duration": "1:20",
                  "objectId": 93,
                  "name": "命运2 - 宣传片“Last Call”",
                  "mtime": 1497957691,
                  "watch_num": 104,
                  "game": {
                        "zgName": "命运2",
                        "riName": "",
                        "head": "/assets/images/game/head/db1d25d5bef98d212a56566979c6d251.png",
                        "yingName": "Destiny 2",
                        "fzName": "天命2"
                  },
                  "contentType": "1",
                  "vriTitle": "Destiny 2 - Last Call Teaser Trailer PS4"
            }, {
                  "cover": "/assets/images/video/cover/KUHOqpkTfzc.jpg",
                  "duration": "1:09",
                  "objectId": 94,
                  "name": "怀旧曲棍球 - 实际游戏演示 宣传片",
                  "mtime": 1501586491,
                  "watch_num": 24,
                  "game": {
                        "zgName": "其他",
                        "fzName": "",
                        "yingName": "",
                        "riName": ""
                  },
                  "contentType": "1",
                  "vriTitle": "Old Time Hockey - Gameplay Trailer PS4"
            }, {
                  "cover": "/assets/images/video/cover/vDmL4EhuDN4.jpg",
                  "duration": "1:18",
                  "objectId": 95,
                  "name": "致命闪电战VR - PSVR宣传片",
                  "mtime": 1502709691,
                  "watch_num": 1188,
                  "game": {
                        "zgName": "其他",
                        "fzName": "",
                        "yingName": "",
                        "riName": ""
                  },
                  "contentType": "1",
                  "vriTitle": "Mortal Blitz - Launch Trailer PS VR"
            }, {
                  "cover": "/assets/images/video/cover/tj4pkF8y_jY.jpg",
                  "duration": "1:10",
                  "objectId": 96,
                  "name": "天铸 - 抢先体验宣传片",
                  "mtime": 1503919291,
                  "watch_num": 309,
                  "game": {
                        "zgName": "天铸",
                        "fzName": "",
                        "yingName": "Skyforge",
                        "riName": ""
                  },
                  "contentType": "1",
                  "vriTitle": "Skyforge - Early Access Trailer PS4"
            }, {
                  "cover": "/assets/images/video/cover/GDDLtSBX4ZU.jpg",
                  "duration": "1:35",
                  "objectId": 97,
                  "name": "黑手党3 - 免费试玩版 宣传片",
                  "mtime": 1500117691,
                  "watch_num": 748,
                  "game": {
                        "zgName": "黑手党3",
                        "riName": "",
                        "head": "/assets/images/game/head/3c97369656e697a8d54a1f3cc74a486f.png",
                        "yingName": "Mafia 3",
                        "fzName": "四海兄弟3"
                  },
                  "contentType": "1",
                  "vriTitle": "Mafia III - Free Demo Trailer PS4"
            }, {
                  "cover": "/assets/images/video/cover/AumCdRAzTAQ.jpg",
                  "duration": "1:15",
                  "objectId": 98,
                  "name": "黑手党3 - DLC“快点，宝贝！”宣传片",
                  "mtime": 1498303291,
                  "watch_num": 1410,
                  "game": {
                        "zgName": "黑手党3",
                        "riName": "",
                        "head": "/assets/images/game/head/3c97369656e697a8d54a1f3cc74a486f.png",
                        "yingName": "Mafia 3",
                        "fzName": "四海兄弟3"
                  },
                  "contentType": "1",
                  "vriTitle": "Mafia III - Faster, Baby! DLC Launch Trailer PS4"
            }, {
                  "cover": "/assets/images/video/cover/A0uzU-KqeVY.jpg",
                  "duration": "1:17",
                  "objectId": 99,
                  "name": "缺氧血症 - PS4宣传片",
                  "mtime": 1500117691,
                  "watch_num": 574,
                  "game": {
                        "zgName": "其他",
                        "fzName": "",
                        "yingName": "",
                        "riName": ""
                  },
                  "contentType": "1",
                  "vriTitle": "Anoxemia - Launch Trailer PS4"
            }]
      }),
      search: Mock.mock({
            "videos": [{
                  "cover": "/assets/images/video/cover/RA6s0nbslTI.jpg",
                  "duration": "3:05",
                  "url_1080": "http://v1080.samured.com/RA6s0nbslTI.mp4",
                  "objectId": 2968,
                  "name": "FIFA 15 - demo PS4 VS XBOX ONE 画质对比",
                  "mtime": 1497698491,
                  "watch_num": 600,
                  "game": {
                        "zgName": "FIFA 15",
                        "fzName": "",
                        "yingName": "FIFA 15",
                        "riName": ""
                  },
                  "contentType": "5",
                  "url_720": "http://v720.samured.com/RA6s0nbslTI.mp4",
                  "vriTitle": "FIFA_15_Demo:PS4_vs_Xbox_One_Graphics_Comparison"
            }, {
                  "cover": "/assets/images/video/cover/lc6DCrODHnM.jpg",
                  "duration": "26:17",
                  "objectId": 6017,
                  "name": "原始之海 - PlayStation Underground 实际游戏演示",
                  "mtime": 1497784891,
                  "watch_num": 1145,
                  "game": {
                        "zgName": "原始之海",
                        "riName": "",
                        "head": "/assets/images/game/head/a370972627534335c335e5d8eaba5dbf.png",
                        "yingName": "ABZÛ",
                        "fzName": ""
                  },
                  "contentType": "1",
                  "url_720": "http://v720.samured.com/lc6DCrODHnM.mp4",
                  "vriTitle": "Abzu - PlayStation Underground Gameplay Video | PS4"
            }, {
                  "cover": "/assets/images/video/cover/sYD7era8u0k.jpg",
                  "duration": "60",
                  "url_1080": "http://v1080.samured.com/sYD7era8u0k.mp4",
                  "objectId": 271,
                  "name": "地平线：零之曙光 - 宣传片“Earth is Ours No More Extended”",
                  "mtime": 1497784891,
                  "watch_num": 1103,
                  "game": {
                        "zgName": "地平线：零之曙光",
                        "riName": "",
                        "head": "/assets/images/game/head/6822ced61b8471df9543ad4322f7b901.png",
                        "yingName": "Horizon: Zero Dawn",
                        "fzName": "地平線：期待黎明"
                  },
                  "contentType": "1",
                  "url_720": "http://v720.samured.com/sYD7era8u0k.mp4",
                  "vriTitle": "Horizon: Zero Dawn - Earth is Ours No More Extended Trailer PS4"
            }, {
                  "cover": "/assets/images/video/cover/4OBEXixKpLk.jpg",
                  "duration": "1:55",
                  "url_1080": "http://v1080.samured.com/4OBEXixKpLk.mp4",
                  "objectId": 6422,
                  "name": "无畏战舰 - “Founder's”扩展版宣传片",
                  "mtime": 1497871291,
                  "watch_num": 872,
                  "game": {
                        "zgName": "无畏战舰",
                        "riName": "",
                        "head": "/assets/images/game/head/894aeed341605936361ad28f069682b4.jpg",
                        "yingName": "Dreadnought",
                        "fzName": ""
                  },
                  "contentType": "1",
                  "url_720": "http://v720.samured.com/4OBEXixKpLk.mp4",
                  "vriTitle": "Dreadnought - Founder's Pack Trailer PS4"
            }, {
                  "cover": "/assets/images/video/cover/IVHDFQ_TQ7s.jpg",
                  "duration": "1:56",
                  "objectId": 5621,
                  "name": "黑暗之魂3 - 发售宣传片“Ashes of Ariandel”",
                  "mtime": 1497871291,
                  "watch_num": 594,
                  "game": {
                        "zgName": "黑暗之魂3",
                        "riName": "ダークソウルⅢ",
                        "head": "/assets/images/game/head/ab56f098dbf2f2265a7cd51ebd67ef1c.png",
                        "yingName": "Dark Souls 3",
                        "fzName": "黑暗靈魂3"
                  },
                  "contentType": "1",
                  "url_720": "http://v720.samured.com/IVHDFQ_TQ7s.webm",
                  "vriTitle": "Dark Souls III - Ashes of Ariandel Launch Trailer PS4"
            }, {
                  "cover": "/assets/images/video/cover/Yn49hJI3Xfg.jpg",
                  "duration": "1:38",
                  "url_1080": "http://v1080.samured.com/Yn49hJI3Xfg.webm",
                  "objectId": 109,
                  "name": "美国职业棒球大联盟17 - The Show Show on Franchise Mode",
                  "mtime": 1497871291,
                  "watch_num": 495,
                  "game": {
                        "zgName": "美国职业棒球大联盟17",
                        "riName": "",
                        "head": "/assets/images/game/head/367a3492547b9d0e05779bcd769df2c9.png",
                        "yingName": "MLB The Show 17",
                        "fzName": "美國職棒大聯盟17"
                  },
                  "contentType": "1",
                  "url_720": "http://v720.samured.com/Yn49hJI3Xfg.webm",
                  "vriTitle": "MLB The Show 17 - The Show Show on Franchise Mode PS4"
            }, {
                  "url_1080": "http://v1080.samured.com/CVSEa2W4bsw.mp4",
                  "mtime": 1497871291,
                  "game": {
                        "zgName": "泰坦陨落2",
                        "riName": "",
                        "head": "/assets/images/game/head/8e3b2e31931c48607508364e8050b6de.png",
                        "yingName": "Titanfall 2",
                        "fzName": "泰坦降臨2"
                  },
                  "contentType": "8",
                  "url_720": "http://v720.samured.com/CVSEa2W4bsw.mp4",
                  "duration": "18:13",
                  "cover": "/assets/images/video/cover/CVSEa2W4bsw.jpg",
                  "objectId": 76,
                  "name": "泰坦陨落2 - 流程攻略19“Defeat Slone The Final Boss THE END”",
                  "watch_num": 183,
                  "vriTitle": "Titanfall 2 - Gameplay Walkthrough Part 19 Defeat Slone The Final Boss THE END",
                  "url_4k": "http://v2160.samured.com/CVSEa2W4bsw.webm",
                  "url_2k": "http://v1440.samured.com/CVSEa2W4bsw.webm"
            }, {
                  "cover": "/assets/images/video/cover/eFZnqMOvv0w.jpg",
                  "duration": "1:08",
                  "url_1080": "http://v1080.samured.com/eFZnqMOvv0w.webm",
                  "objectId": 5863,
                  "name": "地平线：零之曙光 - 宣传片“The Watchers Descend on PAX West”",
                  "mtime": 1497957691,
                  "watch_num": 1033,
                  "game": {
                        "zgName": "地平线：零之曙光",
                        "riName": "",
                        "head": "/assets/images/game/head/6822ced61b8471df9543ad4322f7b901.png",
                        "yingName": "Horizon: Zero Dawn",
                        "fzName": "地平線：期待黎明"
                  },
                  "contentType": "1",
                  "url_720": "http://v720.samured.com/eFZnqMOvv0w.webm",
                  "vriTitle": "Horizon Zero Dawn - The Watchers Descend on PAX West Video PS4"
            }]
      }),
};