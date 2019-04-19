// module.exports = {
//     MAINSCREENS: [
//         {
//             name: 'ButtonView',
//             title: 'ButtonView',
//             description: '按钮',
//             module: require('./demo/screens/ButtonView'),
//         },
//         {
//             name: 'TextInputView',
//             title: 'TextInputView',
//             description: '输入框',
//             module: require('./demo/screens/TextInputView'),
//         },
//         {
//             name: 'CollectionViewDemo',
//             title: 'CollectionViewDemo',
//             description: '九宫格',
//             module: require('./demo/screens/collectionView/CollectionViewDemo'),
//         },
//     ],
//     COLLECTIONS: [
//         {
//             name: 'CollectionView_f',
//             title: '九宫格',
//             description: '经典九宫格',
//             module: require('./demo/screens/collectionView/CollectionView_f'),
//         },
//         {
//             name: 'CollectionView_s',
//             title: '九宫格',
//             description: '自定义item排列方式',
//             module: require('./demo/screens/collectionView/CollectionView_f'),
//         },
//         {
//             name: 'CollectionView_t',
//             title: '九宫格',
//             description: '某个section数据为空或其header为空',
//             module: require('./demo/screens/collectionView/CollectionView_f'),
//         },
//     ],
// };

export const MAINSCREENS = [
    {
        name: 'ButtonView',
        title: 'ButtonView',
        description: '按钮',
        module: require('./demo/screens/ButtonView'),
    },
    {
        name: 'TextInputView',
        title: 'TextInputView',
        description: '输入框',
        module: require('./demo/screens/TextInputView'),
    },
    {
        name: 'CollectionViewDemo',
        title: 'CollectionViewDemo',
        description: '九宫格',
        module: require('./demo/screens/collectionView/CollectionViewDemo'),
    },
];
export const COLLECTIONS = [
    {
        name: 'CollectionView_f',
        title: '九宫格',
        description: '经典九宫格',
        module: require('./demo/screens/collectionView/CollectionView_f'),
    },
    {
        name: 'CollectionView_s',
        title: '九宫格',
        description: '自定义item排列方式',
        module: require('./demo/screens/collectionView/CollectionView_f'),
    },
    {
        name: 'CollectionView_t',
        title: '九宫格',
        description: '某个section数据为空或其header为空',
        module: require('./demo/screens/collectionView/CollectionView_f'),
    },
];
