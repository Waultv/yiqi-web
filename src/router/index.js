import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'
import {AppMain} from "../views/layout/components";

/**
 * hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
 *                                if not set alwaysShow, only more than one route under the children
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noredirect           if `redirect:noredirect` will no redirct in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
 title: 'title'               the name show in submenu and breadcrumb (recommend set)
 icon: 'svg-name'             the icon show in the sidebar,
 }
 **/
export const constantRouterMap = [
  {path: '/login', component: () => import('@/views/login/index'), hidden: true},
  {path: '/404', component: () => import('@/views/404'), hidden: true},
  {
    path: '',
    component: Layout,
    redirect: '/home',
    meta: {title: '首页', icon: 'home'},
    children: [{
      path: 'home',
      name: 'home',
      component: () => import('@/views/home/index'),
      meta: {title: '主页', icon: 'dashboard'}
    }]
  }
]

export const asyncRouterMap = [
  {
    path: '/sm',
    component: Layout,
    redirect: '/sm/ums',
    name: 'sm',
    meta: {title: '系统管理', icon: 'product'},
    children: [
      {
        path: 'ums',
        name: 'ums',
        component: () => import('@/views/sm/ums/index'),
        meta: {title: '用户管理', icon: 'product-list'}
      },
      {
        path: 'role',
        name: 'role',
        component: () => import('@/views/sm/role/index'),
        meta: {title: '角色管理', icon: 'product-add'}
      },
      {
        path: 'dataCateM',
        name: 'dataCateM',
        component: () => import('@/views/sm/dataCateM/index'),
        meta: {title: '数据类别管理', icon: 'product-add'},
        // hidden: true
      },
      {
        path: 'dataEntry',
        name: 'dataEntry',
        component: () => import('@/views/sm/dataEntry/index'),
        meta: {title: '录入数据', icon: 'product-cate'}
      }
    ]
  },
  {
    path: '/dp',
    component: Layout,
    redirect: '/dp/ultrasoundEnhance',
    name: 'dp',
    meta: {title: '数据预处理', icon: 'product'},
    children: [
      {
        path: 'ultrasoundEnhance',
        name: 'ultrasoundEnhance',
        component: () => import('@/views/dp/ultrasoundEnhance/index'),
        meta: {title: '超声图像增强', icon: 'product-list'}
      },
      {
        path: 'ultrasoundEnhance-selectData',
        name: 'ultrasoundEnhance-selectData',
        component: () => import('@/views/dp/ultrasoundEnhance/selectData'),
        meta: {title: '选择数据', icon: 'product-list'},
        hidden: true
      },
      {
        path: 'heartsoundsToMusic',
        name: 'heartsoundsToMusic',
        component: () => import('@/views/dp/heartsoundsToMusic/index'),
        meta: {title: '心音转音乐', icon: 'product-add'}
      },
      {
        path: 'heartsoundsPre',
        name: 'heartsoundsPre',
        component: () => import('@/views/dp/heartsoundsPre/index'),
        meta: {title: '心音预处理', icon: 'product-add'},
        // hidden: true
      },
      {
        path: 'ecgPre',
        name: 'ecgPre',
        component: () => import('@/views/dp/ecgPre/index'),
        meta: {title: '心电预处理', icon: 'product-cate'}
      },
      {
        path: 'heartsoundsEcgMcPre',
        name: 'heartsoundsEcgMcPre',
        component: () => import('@/views/dp/heartsoundsEcgMcPre/index'),
        meta: {title: '心音心电模态转换预处理', icon: 'product-cate'}
      },
      {
        path: 'mrToCtMigrate',
        name: 'mrToCtMigrate',
        component: () => import('@/views/dp/mrToCtMigrate/index'),
        meta: {title: 'MR转CT域迁移', icon: 'product-cate'}
      }
    ]
  },
  {
    path: '/mr',
    component: Layout,
    redirect: '/mr/multidimensionalRe',
    name: 'mr',
    meta: {title: '多维重建', icon: 'product'},
    children: [
      {
        path: 'multidimensionalRe',
        name: 'multidimensionalRe',
        component: () => import('@/views/mr/multidimensionalRe/index'),
        meta: {title: '多维重建', icon: 'product-list'}
      },
      {
        path: '/mr/registrationFusionPre',
        component: AppMain,
        // redirect: '/mr/registrationFusionPre/iToiRegistration',
        name: 'registrationFusionPre',
        meta: {title: '配准融合预处理', icon: 'product-add'},
        children: [
          {
            path: 'iToiRegistration',
            name: 'iToiRegistration',
            component: () => import('@/views/mr/registrationFusionPre/iToiRegistration/index'),
            meta: {title: '图像与图像的配准', icon: 'product-list'},
          },
          {
            path: 'iToiFusion',
            name: 'iToiFusion',
            component: () => import('@/views/mr/registrationFusionPre/iToiFusion/index'),
            meta: {title: '图像与图像的融合', icon: 'product-add'},
            // hidden: true
          },
          {
            path: 'iToiFusion/selectP',
            name: 'selectP',
            component: () => import('@/views/mr/registrationFusionPre/iToiFusion/selectP'),
            meta: {title: '图像融合选择病人', icon: 'product-list'},
            hidden: true
          },
          // {
          //   path: 'iToiFusion/patientsDataEntry',
          //   name: 'patientsDataEntry',
          //   component: () => import('@/views/mr/registrationFusionPre/iToiFusion/patientsDataEntry'),
          //   meta: {title: '图像融合患者数据录入', icon: 'product-list'},
          //   hidden: true
          // },
          {
            path: 'iToiFusion/selectData',
            name: 'selectData',
            component: () => import('@/views/mr/registrationFusionPre/iToiFusion/selectData'),
            meta: {title: '图像融合选择数据', icon: 'product-list'},
            hidden: true
          },
          {
            path: 'tfdHsEcgCmRegistration',
            name: 'tfdHsEcgCmRegistration',
            component: () => import('@/views/mr/registrationFusionPre/tfdHsEcgCmRegistration/index'),
            meta: {title: '时频域心音心电的跨模态配准', icon: 'product-cate'}
          }
        ]
      }
    ]
  },
  {
    path: '/ad',
    component: Layout,
    redirect: '/ad/chdAidsPr',
    name: 'ad',
    meta: {title: '辅助诊断', icon: 'product'},
    children: [
      {
        path: '/ad/chdAidsPr',
        component: AppMain,
        redirect: '/ad/chdAidsPr/baseHsChdPr',
        name: 'chdAidsPr',
        meta: {title: '先心病辅助预测', icon: 'product-add'},
        children: [
          {
            path: 'baseHsChdPr',
            name: 'baseHsChdPr',
            component: () => import('@/views/ad/chdAidsPr/baseHsChdPr/index'),
            meta: {title: '基于心音的先心病预测', icon: 'product-list'},
          },
          {
            path: 'baseEcgChdPr',
            name: 'baseEcgChdPr',
            component: () => import('@/views/ad/chdAidsPr/baseEcgChdPr/index'),
            meta: {title: '基于心电的先心病预测', icon: 'product-add'},
            // hidden: true
          },
          {
            path: 'multimodalCoPre',
            name: 'multimodalCoPre',
            component: () => import('@/views/ad/chdAidsPr/multimodalCoPre/index'),
            meta: {title: '多模态协同预测', icon: 'product-cate'}
          },
          {
            path: 'multimodalCoPre_selectP',
            name: 'multimodalCoPre_selectP',
            component: () => import('@/views/ad/chdAidsPr/multimodalCoPre/selectP'),
            meta: {title: '多模态协同预测选择病人', icon: 'product-list'},
            hidden: true
          },
          // {
          //   path: 'multimodalCoPre_patientsDataEntry',
          //   name: 'multimodalCoPre_patientsDataEntry',
          //   component: () => import('@/views/ad/chdAidsPr/multimodalCoPre/patientsDataEntry'),
          //   meta: {title: '多模态协同预测患者数据录入', icon: 'product-list'},
          //   hidden: true
          // },
          {
            path: 'multimodalCoPre_selectData',
            name: 'multimodalCoPre_selectData',
            component: () => import('@/views/ad/chdAidsPr/multimodalCoPre/selectData'),
            meta: {title: '多模态协同预测选择数据', icon: 'product-list'},
            hidden: true
          },
        ]
      },
      {
        path: '/ad/cardiacSegmentation',
        component: AppMain,
        redirect: '/ad/cardiacSegmentation/totalHS',
        name: 'cardiacSegmentation',
        meta: {title: '心脏分割', icon: 'product-add'},
        children: [{
          path: 'totalCS',
          name: 'totalCS',
          component: () => import('@/views/ad/cardiacSegmentation/totalCS/index'),
          meta: {title: '全心脏分割（MR、CT）', icon: 'product-list'},
        },
          {
            path: 'ultrasoundSemiSupervisedCS',
            name: 'ultrasoundSemiSupervisedCS',
            component: () => import('@/views/ad/cardiacSegmentation/ultrasoundSemiSupervisedCS/index'),
            meta: {title: '半监督心脏分割（超声）', icon: 'product-add'},
            // hidden: true
          },
          {
            path: 'cardiacSegmentationCAMUS',
            name: 'cardiacSegmentationCAMUS',
            component: () => import('@/views/ad/cardiacSegmentation/cardiacSegmentationCAMUS/index'),
            meta: {title: '心脏分割（CAMUS）', icon: 'product-cate'}
          },
          {
            path: 'echocardiofractionation',
            name: 'echocardiofractionation',
            component: () => import('@/views/ad/cardiacSegmentation/echocardiofractionation/index'),
            meta: {title: '超声心动分割（视频）', icon: 'product-cate'}
          }
        ]
      },
      {
        path: '/ad/others',
        component: AppMain,
        redirect: '/ad/others/brachialPlexusSegTD',
        name: 'others',
        meta: {title: '其他', icon: 'product-add'},
        children: [
          {
            path: 'brachialPlexusSegTD',
            name: 'brachialPlexusSegTD',
            component: () => import('@/views/ad/others/brachialPlexusSegTD/index'),
            meta: {title: '臂丛神经分割和目标检测', icon: 'product-list'},
          },
          {
            path: 'brachialPlexusSegTD/selectP',
            name: 'selectP',
            component: () => import('@/views/ad/others/brachialPlexusSegTD/selectP'),
            meta: {title: '臂丛神经分割选择病人', icon: 'product-list'},
            hidden: true
          },
          // {
          //   path: 'brachialPlexusSegTD/patientsDataEntry',
          //   name: 'patientsDataEntry',
          //   component: () => import('@/views/ad/others/brachialPlexusSegTD/patientsDataEntry'),
          //   meta: {title: '臂丛神经分割患者数据录入', icon: 'product-list'},
          //   hidden: true
          // },
          {
            path: 'brachialPlexusSegTD/selectData',
            name: 'selectData',
            component: () => import('@/views/ad/others/brachialPlexusSegTD/selectData'),
            meta: {title: '臂丛神经分割选择数据', icon: 'product-list'},
            hidden: true
          },
          {
            path: 'gastrointestinalId',
            name: 'gastrointestinalId',
            component: () => import('@/views/ad/others/gastrointestinalId/index'),
            meta: {title: '胃肠镜识别', icon: 'product-add'},
            // hidden: true
          },
          {
            path: 'covidForecast',
            name: 'covidForecast',
            component: () => import('@/views/ad/others/covidForecast/index'),
            meta: {title: '新冠预测', icon: 'product-cate'}
          },
          {
            path: 'modelCompression',
            name: 'modelCompression',
            component: () => import('@/views/ad/others/modelCompression/index'),
            meta: {title: '模型压缩', icon: 'product-cate'},
          },
          {
            path: 'modelCompression/selectData',
            name: 'modelCompression-selectData',
            component: () => import('@/views/ad/others/modelCompression/selectData'),
            meta: {title: '模型压缩选择数据', icon: 'product-list'},
            hidden: true
          },
          {
            path: 'brainVolumeCalc',
            name: 'brainVolumeCalc',
            component: () => import('@/views/ad/others/brainVolumeCalc/index'),
            meta: {title: '脑容积计算', icon: 'product-cate'}
          }
        ]
      }
    ]
  },
  //————————————————————————————————————————————————————————————————
  {
    path: '/ums',
    component: Layout,
    redirect: '/ums/admin',
    name: 'ums',
    meta: {title: '权限', icon: 'ums'},
    children: [
      {
        path: 'admin',
        name: 'admin',
        component: () => import('@/views/ums/admin/index'),
        meta: {title: '用户列表', icon: 'ums-admin'}
      },
      {
        path: 'role',
        name: 'role',
        component: () => import('@/views/ums/role/index'),
        meta: {title: '角色列表', icon: 'ums-role'}
      },
      {
        path: 'allocMenu',
        name: 'allocMenu',
        component: () => import('@/views/ums/role/allocMenu'),
        meta: {title: '分配菜单'},
        hidden: true
      },
      {
        path: 'allocResource',
        name: 'allocResource',
        component: () => import('@/views/ums/role/allocResource'),
        meta: {title: '分配资源'},
        hidden: true
      },
      {
        path: 'menu',
        name: 'menu',
        component: () => import('@/views/ums/menu/index'),
        meta: {title: '菜单列表', icon: 'ums-menu'}
      },
      {
        path: 'addMenu',
        name: 'addMenu',
        component: () => import('@/views/ums/menu/add'),
        meta: {title: '添加菜单'},
        hidden: true
      },
      {
        path: 'updateMenu',
        name: 'updateMenu',
        component: () => import('@/views/ums/menu/update'),
        meta: {title: '修改菜单'},
        hidden: true
      },
      {
        path: 'resource',
        name: 'resource',
        component: () => import('@/views/ums/resource/index'),
        meta: {title: '资源列表', icon: 'ums-resource'}
      },
      {
        path: 'resourceCategory',
        name: 'resourceCategory',
        component: () => import('@/views/ums/resource/categoryList'),
        meta: {title: '资源分类'},
        hidden: true
      }
    ]
  },
  {
    path: '/common',
    // redirect: '/common/selectPatient',
    name:'common',
    component: Layout,
    hidden: true,
    children: [
      {
        path: 'selectPatient',
        name: 'selectPatient',
        component: () => import('@/views/common/selectPatient'),
        meta: {title: '选择病人', icon: 'product-list'},
        hidden: true
      }
    ]
  },
  {path: '*', redirect: '/404', hidden: true},

]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({y: 0}),
  routes: constantRouterMap
})

