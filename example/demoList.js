/*
 * @Description: config of all screens
 * @Author: wanglh
 * @LastEditors: wanglh
 * @Date: 2019-04-18 17:28:56
 * @LastEditTime: 2019-04-23 11:40:23
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
