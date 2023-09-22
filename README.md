# YIQI-web

## 前言

仪器项目为前后端分离，这是仪器项目的前端部分

## 项目介绍

仪器项目前端

推代码请不要更改package.json文件中的依赖版本

### 技术选型

| 技术              | 说明                  | 官网                                                         |
| ----------------- | --------------------- | ------------------------------------------------------------ |
| Vue               | 前端框架              | [https://vuejs.org/](https://vuejs.org/)                     |
| Vue-router        | 路由框架              | [https://router.vuejs.org/](https://router.vuejs.org/)       |
| Vuex              | 全局状态管理框架      | [https://vuex.vuejs.org/](https://vuex.vuejs.org/)           |
| Element           | 前端UI框架            | [https://element.eleme.io/](https://element.eleme.io/)       |
| Axios             | 前端HTTP框架          | [https://github.com/axios/axios](https://github.com/axios/axios) |
| v-charts          | 基于Echarts的图表框架 | [https://v-charts.js.org/](https://v-charts.js.org/)         |
| Js-cookie         | cookie管理工具        | [https://github.com/js-cookie/js-cookie](https://github.com/js-cookie/js-cookie) |
| nprogress         | 进度条控件            | [https://github.com/rstacruz/nprogress](https://github.com/rstacruz/nprogress) |
| vue-element-admin | 项目脚手架参考        | [https://github.com/PanJiaChen/vue-element-admin](https://github.com/PanJiaChen/vue-element-admin) |

### 项目布局

``` lua
src -- 源码目录
├── api -- axios网络请求定义
├── assets -- 静态图片资源文件
├── components -- 通用组件封装
├── icons -- svg矢量图片文件
├── router -- vue-router路由配置
├── store -- vuex的状态管理
├── styles -- 全局css样式
├── utils -- 工具类
└── views -- 前端页面
    ├── home -- 首页
    ├── layout -- 通用页面加载框架
    ├── login -- 登录页
    ├── sm -- 系统管理模块页面
    ├── dp -- 数据预处理模块页面
	├── mr -- 多为重建模块页面
    └── ad -- 辅助诊断模块页面
```

## 搭建步骤
- 下载node并安装：[https://nodejs.org/dist/v12.14.0/node-v12.14.0-x64.msi](https://nodejs.org/dist/v12.14.0/node-v12.14.0-x64.msi);
- 该项目为前后端分离项目，后端请咨询卢三强
- 访问接口需将`config/dev.env.js`文件中的`BASE_API`改为`对应的后端地址`即可;
- 克隆源代码到本地，使用IDEA打开，并完成编译;
- 在IDEA命令行中运行命令：`npm install`,下载相关依赖;
- 在IDEA命令行中运行命令：`npm run dev`,运行项目;
- 访问地址：[http://localhost:8090](http://localhost:8090) 即可打开;
