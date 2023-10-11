import router from './router'
import store from './store'
import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css'// Progress 进度条样式
import { Message } from 'element-ui'
import { getToken } from '@/utils/auth' // 验权
const unloginJson = {
  "code": 200,
    "message": "操作成功",
    "data": {
    "roles": [
      "超级管理员"
    ],
      "icon": "http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/images/20180607/timg.jpg",
      "menus": [
      {
        "id": 21,
        "parentId": 0,
        "createTime": "2020-02-07T08:29:13.000+00:00",
        "title": "权限",
        "level": 0,
        "sort": 0,
        "name": "ums",
        "icon": "ums",
        "hidden": 0
      },
      {
        "id": 22,
        "parentId": 21,
        "createTime": "2020-02-07T08:29:51.000+00:00",
        "title": "用户列表",
        "level": 1,
        "sort": 0,
        "name": "admin",
        "icon": "ums-admin",
        "hidden": 0
      },
      {
        "id": 23,
        "parentId": 21,
        "createTime": "2020-02-07T08:30:13.000+00:00",
        "title": "角色列表",
        "level": 1,
        "sort": 0,
        "name": "role",
        "icon": "ums-role",
        "hidden": 0
      },
      {
        "id": 24,
        "parentId": 21,
        "createTime": "2020-02-07T08:30:53.000+00:00",
        "title": "菜单列表",
        "level": 1,
        "sort": 0,
        "name": "menu",
        "icon": "ums-menu",
        "hidden": 0
      },
      {
        "id": 25,
        "parentId": 21,
        "createTime": "2020-02-07T08:31:13.000+00:00",
        "title": "资源列表",
        "level": 1,
        "sort": 0,
        "name": "resource",
        "icon": "ums-resource",
        "hidden": 0
      },
      {
        "id": 29,
        "parentId": 0,
        "createTime": "2023-09-22T08:36:18.000+00:00",
        "title": "系统管理",
        "level": 0,
        "sort": 0,
        "name": "sm",
        "icon": "product",
        "hidden": 0
      },
      {
        "id": 30,
        "parentId": 29,
        "createTime": "2023-09-22T08:37:10.000+00:00",
        "title": "用户管理",
        "level": 1,
        "sort": 0,
        "name": "ums",
        "icon": "product",
        "hidden": 0
      },
      {
        "id": 31,
        "parentId": 29,
        "createTime": "2023-09-22T08:37:30.000+00:00",
        "title": "角色管理",
        "level": 1,
        "sort": 0,
        "name": "role",
        "icon": "product",
        "hidden": 0
      },
      {
        "id": 33,
        "parentId": 29,
        "createTime": "2023-09-22T08:39:09.000+00:00",
        "title": "数据类别管理",
        "level": 1,
        "sort": 0,
        "name": "dataCateM",
        "icon": "product",
        "hidden": 0
      },
      {
        "id": 34,
        "parentId": 29,
        "createTime": "2023-09-22T08:39:31.000+00:00",
        "title": "录入数据",
        "level": 1,
        "sort": 0,
        "name": "dataEntry",
        "icon": "product",
        "hidden": 0
      },
      {
        "id": 35,
        "parentId": 0,
        "createTime": "2023-09-22T11:25:39.000+00:00",
        "title": "数据预处理",
        "level": 0,
        "sort": 0,
        "name": "dp",
        "icon": "product",
        "hidden": 0
      },
      {
        "id": 36,
        "parentId": 35,
        "createTime": "2023-09-22T11:26:28.000+00:00",
        "title": "超声图像增强",
        "level": 1,
        "sort": 0,
        "name": "ultrasoundEnhance",
        "icon": "product",
        "hidden": 0
      },
      {
        "id": 37,
        "parentId": 35,
        "createTime": "2023-09-22T11:28:23.000+00:00",
        "title": "心音转音乐",
        "level": 1,
        "sort": 0,
        "name": "heartsoundsToMusic",
        "icon": "product",
        "hidden": 0
      },
      {
        "id": 38,
        "parentId": 35,
        "createTime": "2023-09-22T11:28:48.000+00:00",
        "title": "心音预处理",
        "level": 1,
        "sort": 0,
        "name": "heartsoundsPre",
        "icon": "product",
        "hidden": 0
      },
      {
        "id": 39,
        "parentId": 35,
        "createTime": "2023-09-22T11:33:21.000+00:00",
        "title": "心电预处理",
        "level": 1,
        "sort": 0,
        "name": "ecgPre",
        "icon": "product",
        "hidden": 0
      },
      {
        "id": 40,
        "parentId": 35,
        "createTime": "2023-09-22T11:34:01.000+00:00",
        "title": "心音心电模态转换预处理",
        "level": 1,
        "sort": 0,
        "name": "heartsoundsEcgMcPre",
        "icon": "product",
        "hidden": 0
      },
      {
        "id": 41,
        "parentId": 35,
        "createTime": "2023-09-22T11:35:01.000+00:00",
        "title": "MR转CT域迁移",
        "level": 1,
        "sort": 0,
        "name": "mrToCtMigrate",
        "icon": "product",
        "hidden": 0
      },
      {
        "id": 42,
        "parentId": 0,
        "createTime": "2023-09-22T11:35:35.000+00:00",
        "title": "多维重建",
        "level": 0,
        "sort": 0,
        "name": "mr",
        "icon": "product",
        "hidden": 0
      },
      {
        "id": 43,
        "parentId": 42,
        "createTime": "2023-09-22T11:36:09.000+00:00",
        "title": "多维重建",
        "level": 1,
        "sort": 0,
        "name": "multidimensionalRe",
        "icon": "product",
        "hidden": 0
      },
      {
        "id": 44,
        "parentId": 42,
        "createTime": "2023-09-22T11:36:41.000+00:00",
        "title": "配准融合预处理",
        "level": 1,
        "sort": 0,
        "name": "registrationFusionPre",
        "icon": "product",
        "hidden": 0
      },
      {
        "id": 45,
        "parentId": 44,
        "createTime": "2023-09-22T11:44:36.000+00:00",
        "title": "图像与图像的配准",
        "level": 2,
        "sort": 0,
        "name": "iToiRegistration",
        "icon": "product",
        "hidden": 0
      },
      {
        "id": 46,
        "parentId": 44,
        "createTime": "2023-09-22T11:46:07.000+00:00",
        "title": "图像与图像的融合",
        "level": 2,
        "sort": 0,
        "name": "iToiFusion",
        "icon": "product",
        "hidden": 0
      },
      {
        "id": 47,
        "parentId": 44,
        "createTime": "2023-09-22T11:46:55.000+00:00",
        "title": "时频域心音心电的跨模态配准",
        "level": 2,
        "sort": 0,
        "name": "tfdHsEcgCmRegistration",
        "icon": "product",
        "hidden": 0
      },
      {
        "id": 48,
        "parentId": 0,
        "createTime": "2023-09-22T11:47:42.000+00:00",
        "title": "辅助诊断",
        "level": 0,
        "sort": 0,
        "name": "ad",
        "icon": "product",
        "hidden": 0
      },
      {
        "id": 49,
        "parentId": 48,
        "createTime": "2023-09-22T11:48:09.000+00:00",
        "title": "先心病辅助预测",
        "level": 1,
        "sort": 0,
        "name": "chdAidsPr",
        "icon": "product",
        "hidden": 0
      },
      {
        "id": 50,
        "parentId": 49,
        "createTime": "2023-09-22T11:48:09.000+00:00",
        "title": "基于心音的先心病预测",
        "level": 2,
        "sort": 0,
        "name": "baseHsChdPr",
        "icon": "product",
        "hidden": 0
      },
      {
        "id": 51,
        "parentId": 49,
        "createTime": "2023-09-22T11:48:09.000+00:00",
        "title": "基于心电的先心病预测",
        "level": 2,
        "sort": 0,
        "name": "baseEcgChdPr",
        "icon": "product",
        "hidden": 0
      },
      {
        "id": 52,
        "parentId": 49,
        "createTime": "2023-09-22T11:48:09.000+00:00",
        "title": "多模态协同预测",
        "level": 2,
        "sort": 0,
        "name": "multimodalCoPre",
        "icon": "product",
        "hidden": 0
      },
      {
        "id": 53,
        "parentId": 48,
        "createTime": "2023-09-22T11:48:09.000+00:00",
        "title": "心脏分割",
        "level": 1,
        "sort": 0,
        "name": "cardiacSegmentation",
        "icon": "product",
        "hidden": 0
      },
      {
        "id": 54,
        "parentId": 53,
        "createTime": "2023-09-22T11:48:09.000+00:00",
        "title": "全心脏分割（MR、CT）",
        "level": 2,
        "sort": 0,
        "name": "totalCS",
        "icon": "product",
        "hidden": 0
      },
      {
        "id": 55,
        "parentId": 53,
        "createTime": "2023-09-22T11:48:09.000+00:00",
        "title": "半监督心脏分割（超声）",
        "level": 2,
        "sort": 0,
        "name": "ultrasoundSemiSupervisedCS",
        "icon": "product",
        "hidden": 0
      },
      {
        "id": 56,
        "parentId": 53,
        "createTime": "2023-09-22T11:48:09.000+00:00",
        "title": "心脏分割（CAMUS）",
        "level": 2,
        "sort": 0,
        "name": "cardiacSegmentationCAMUS",
        "icon": "product",
        "hidden": 0
      },
      {
        "id": 57,
        "parentId": 53,
        "createTime": "2023-09-22T11:48:09.000+00:00",
        "title": "超声心动分割（视频）",
        "level": 2,
        "sort": 0,
        "name": "echocardiofractionation",
        "icon": "product",
        "hidden": 0
      },
      {
        "id": 58,
        "parentId": 48,
        "createTime": "2023-09-22T11:48:09.000+00:00",
        "title": "其他",
        "level": 1,
        "sort": 0,
        "name": "others",
        "icon": "product",
        "hidden": 0
      },
      {
        "id": 59,
        "parentId": 58,
        "createTime": "2023-09-22T11:48:09.000+00:00",
        "title": "臂丛神经分割和目标检测",
        "level": 2,
        "sort": 0,
        "name": "brachialPlexusSegTD",
        "icon": "product",
        "hidden": 0
      },
      {
        "id": 60,
        "parentId": 58,
        "createTime": "2023-09-22T11:48:09.000+00:00",
        "title": "胃肠镜识别",
        "level": 2,
        "sort": 0,
        "name": "gastrointestinalId",
        "icon": "product",
        "hidden": 0
      },
      {
        "id": 61,
        "parentId": 58,
        "createTime": "2023-09-22T11:48:09.000+00:00",
        "title": "新冠预测",
        "level": 2,
        "sort": 0,
        "name": "covidForecast",
        "icon": "product",
        "hidden": 0
      },
      {
        "id": 62,
        "parentId": 58,
        "createTime": "2023-09-22T11:48:09.000+00:00",
        "title": "模型压缩",
        "level": 2,
        "sort": 0,
        "name": "modelCompression",
        "icon": "product",
        "hidden": 0
      },
      {
        "id": 63,
        "parentId": 58,
        "createTime": "2023-09-22T11:48:09.000+00:00",
        "title": "脑容积计算",
        "level": 2,
        "sort": 0,
        "name": "brainVolumeCalc",
        "icon": "product",
        "hidden": 0
      }
    ],
      "username": "test"
  }
}

// 拉取用户信息
//跳过登录
//           let menus=unloginJson.data.menus;
//           let username=unloginJson.data.username;
//           store.dispatch('GenerateRoutes', { menus,username }).then(() => { // 生成可访问的路由表
//             router.addRoutes(store.getters.addRouters); // 动态添加可访问路由表
//             next({ ...to, replace: true })})

const whiteList = ['/login'] // 不重定向白名单
router.beforeEach((to, from, next) => {
  NProgress.start()
  if (getToken()) {
    if (to.path === '/login') {
      next({ path: '/' })
      NProgress.done() // if current page is dashboard will not trigger	afterEach hook, so manually handle it
    } else {
      if (store.getters.roles.length === 0) {
        store.dispatch('GetInfo').then(res => { // 拉取用户信息
          console.log("用户信息"+res)
          let menus=res.data.menus;
          let username=res.data.username;
          store.dispatch('GenerateRoutes', { menus,username }).then(() => { // 生成可访问的路由表
            router.addRoutes(store.getters.addRouters); // 动态添加可访问路由表
            next({ ...to, replace: true })
          })
        }).catch((err) => {
          store.dispatch('FedLogOut').then(() => {
            Message.error(err || 'Verification failed, please login again')
            next({ path: '/' })
          })
        })
      } else {
        next()
      }
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next('/login')
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  NProgress.done() // 结束Progress
})
