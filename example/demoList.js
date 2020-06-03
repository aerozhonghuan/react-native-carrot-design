/*
 * @Description: config of all screens
 * @Author: wanglh
 * @LastEditors: wanglh
 * @Date: 2019-04-18 17:28:56
 * @LastEditTime: 2020-06-03 15:25:45
 */

// 一级页面  demo列表
export const MAINSCREENS = [
    {
        name: 'ButtonView',
        title: 'ButtonView',
        description: '按钮',
        module: require('./src/screens/ButtonView'),
    },
    {
        name: 'TextInputView',
        title: 'TextInputView',
        description: '输入框',
        module: require('./src/screens/TextInputView'),
    },
    {
        name: 'CollectionView',
        title: 'CollectionView',
        description: '九宫格',
        module: require('./src/screens/collectionView/CollectionView'),
    },
    {
        name: 'BannerView',
        title: 'BannerView',
        description: 'banner展示',
        module: require('./src/screens/BannerView'),
    },
    // {
    //     name: 'PictureBrowserView',
    //     title: 'PictureBrowserView',
    //     description: 'PictureBrowserView展示',
    //     module: require('./src/screens/PictureBrowserView'),
    // },
    {
        name: 'CornerTextView',
        title: 'CornerTextView',
        description: '圆角文本',
        module: require('./src/screens/CornerTextView'),
    },
    {
        name: 'LoadingView',
        title: 'LoadingView',
        description: 'loading加载',
        module: require('./src/screens/LoadingView'),
    },
    {
        name: 'AlertView',
        title: 'AlertView',
        description: '自定义AlertView',
        module: require('./src/screens/AlertView'),
    },
    {
        name: 'TabSelectView',
        title: 'TabSelectView',
        description: '自定义TabSelectView',
        module: require('./src/screens/TabSelectView'),
    },
];

// 二级页面
// CollectionView
export const COLLECTIONS = [
    {
        name: 'CollectionViewF',
        title: '九宫格',
        description: '经典九宫格',
        module: require('./src/screens/collectionView/CollectionViewF'),
    },
    {
        name: 'CollectionViewS',
        title: '九宫格',
        description: '更多属性',
        module: require('./src/screens/collectionView/CollectionViewS'),
    },
    {
        name: 'CollectionViewT',
        title: '普通列表',
        description: '实现SectionList分组列表效果',
        module: require('./src/screens/collectionView/CollectionViewT'),
    },
];
