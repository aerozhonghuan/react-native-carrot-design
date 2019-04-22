/*
 * @Description: config of all screens
 * @Author: wanglh
 * @LastEditors: wanglh
 * @Date: 2019-04-18 17:28:56
 * @LastEditTime: 2019-04-22 13:47:44
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
        name: 'CollectionView_f',
        title: '九宫格',
        description: '经典九宫格',
        module: require('./src/screens/collectionView/CollectionView_f'),
    },
    {
        name: 'CollectionView_s',
        title: '九宫格',
        description: '自定义item排列方式',
        module: require('./src/screens/collectionView/CollectionView_f'),
    },
    {
        name: 'CollectionView_t',
        title: '九宫格',
        description: '某个section数据为空或其header为空',
        module: require('./src/screens/collectionView/CollectionView_f'),
    },
];
