/*
 * @Description: config of all screens
 * @Author: wanglh
 * @LastEditors: wanglh
 * @Date: 2019-04-18 17:28:56
 * @LastEditTime: 2019-04-22 17:42:38
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
        name: 'CollectionViewDemo',
        title: 'CollectionViewDemo',
        description: '九宫格',
        module: require('./src/screens/collectionView/CollectionViewDemo'),
    },
    {
        name: 'BannerView',
        title: 'BannerView',
        description: 'banner展示',
        module: require('./src/screens/BannerView'),
    },
    {
        name: 'PictureBrowserView',
        title: 'PictureBrowserView',
        description: 'PictureBrowserView展示',
        module: require('./src/screens/PictureBrowserView'),
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
        title: '九宫格',
        description: '某个section数据为空或其header为空',
        module: require('./src/screens/collectionView/CollectionViewT'),
    },
];
