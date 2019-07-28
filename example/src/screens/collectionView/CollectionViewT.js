/* eslint-disable no-use-before-define */
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    Dimensions,
    TouchableOpacity,
} from 'react-native';

import { CollectionView } from 'react-native-carrot-design';

const headerArrT = [{ title: '第一组的header' }, { title: '第二组的header' }];
const dataArrT = [[
    {
        key: '第一个item',
        enable: false,
        icon: require('../../assets/imags/collectionView_icon.png'),
    },
    {
        key: '第二个item',
        enable: false,
        icon: require('../../assets/imags/collectionView_icon.png'),
    },
    {
        key: '第三个item',
        enable: false,
        icon: require('../../assets/imags/collectionView_icon.png'),
    },
    {
        key: '第四个item',
        enable: false,
        icon: require('../../assets/imags/collectionView_icon.png'),
    }, {
        key: '第五个item',
        enable: false,
        icon: require('../../assets/imags/collectionView_icon.png'),
    }, {
        key: '第六个item',
        enable: false,
        icon: require('../../assets/imags/collectionView_icon.png'),
    },
    {
        key: '第七个item',
        enable: false,
        icon: require('../../assets/imags/collectionView_icon.png'),
    }, {
        key: '第八个item',
        enable: false,
        icon: require('../../assets/imags/collectionView_icon.png'),
    },
], [
    {
        key: '第二组--第一个item',
        enable: false,
        icon: require('../../assets/imags/collectionView_icon.png'),
    },
    {
        key: '第二组--第二个item',
        enable: false,
        icon: require('../../assets/imags/collectionView_icon.png'),
    },
    {
        key: '第二组--第三个item',
        enable: false,
        icon: require('../../assets/imags/collectionView_icon.png'),
    },
    {
        key: '第二组--第四个item',
        enable: false,
        icon: require('../../assets/imags/collectionView_icon.png'),
    },
    {
        key: '第二组--第五个item',
        enable: false,
        icon: require('../../assets/imags/collectionView_icon.png'),
    },
    {
        key: '第二组--第六个item',
        enable: false,
        icon: require('../../assets/imags/collectionView_icon.png'),
    },
],
];
export default class CollectionViewT extends Component {
    constructor(props) {
        super(props);
        this.state = {
            headerSource: headerArrT,
            dataSource: dataArrT,
        };
    }

    /**
     * @description: Renderer for every item in every section.
     * @param {item}: The dataSource of the item.
     * @param {sectionIndex}: The index of the section of the current item.
     * @param {itemIndex}: The index of the current item.
     * @return: React.ReactElement | null
     */
    renderItem = (item, sectionIndex, itemIndex) => (
        <TouchableOpacity
            style={styles.itemView}
            activeOpacity={0.8}
            onPress={() => {
                alert(`I'm ${item.key}(sectionIndex:${sectionIndex}--itemIndex:${itemIndex})`);
            }}
        >
            <Image style={styles.iconStyle} source={item.icon} />
            <Text style={styles.rowText} numberOfLines={0}>{item.key}</Text>
        </TouchableOpacity>
    )

    /**
     * @description: Rendered at the top of each section. Sticky headers are not yet supported.
     * @param {headerItem}: The dataSource of the header.
     * @param {sectionIndex}: The index of the section
     * @return: React.ReactElement | null
     */
    renderSectionHeader = (headerItem, sectionIndex) => (
        <Text style={styles.sectionHeader}>
            第
            {sectionIndex}
            组:sectionHeaderComponent
        </Text>
    )

    /**
     * @description: Rendered at the top of the collectionView.
     * @return: React.ReactElement | null
     */
    rendHeaderComponent = () => (
        <Text style={styles.listHeader}>headerComponent</Text>
    )

    /**
     * @description: Rendered at the bottom of the collectionView.
     * @return: React.ReactElement | null
     */
    rendFooterComponent = () => (
        <Text style={styles.listFooter}>footerComponent</Text>
    )

    render() {
        const { headerSource, dataSource } = this.state;
        return (
            <View style={styles.container}>
                <CollectionView
                    sectionStyle={styles.sectionViewStyle}
                    itemStyle={styles.itemViewStyle}
                    headerSource={headerSource}
                    dataSource={dataSource}
                    renderItem={this.renderItem} // 渲染每个item
                    renderHeaderComponent={this.rendHeaderComponent}
                    renderFooterComponent={this.rendFooterComponent}
                    renderSectionHeader={this.renderSectionHeader} // 每个section的头部渲染
                    stickySectionHeadersEnabled // 是否吸顶,ios默认为true;Android默认为false
                    initialNumToRender={10}
                    onEndReachedThreshold={0.5} // 0.5表示距离内容最底部的距离为当前列表可见长度的一半时触发
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: Dimensions.width,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },

    listHeader: {
        fontSize: 18,
        textAlign: 'center',
        color: '#333333',
        height: 60,
        lineHeight: 60,
        width: Dimensions.width,
        backgroundColor: '#D1EEEE',
    },
    listFooter: {
        fontSize: 18,
        textAlign: 'center',
        color: '#333333',
        height: 60,
        lineHeight: 60,
        width: Dimensions.width,
        backgroundColor: '#DAA520',
    },
    sectionHeader: {
        paddingLeft: 15,
        fontSize: 18,
        textAlign: 'left',
        color: '#333333',
        height: 40,
        lineHeight: 40,
        backgroundColor: '#e5e5e5',
    },
    iconStyle: {
        marginHorizontal: 10,
        width: 60,
        height: 60,
    },
    rowText: {
        marginTop: 10,
        color: '#333333',
        height: 33,
        fontSize: 13,
        textAlign: 'center',
    },
    sectionViewStyle: {
        flexDirection: 'column',
        flexWrap: 'nowrap',
    },
    itemViewStyle: {
        flexDirection: 'row',
        margin: 8,
    },
    itemView: {
        flex: 3,
        width: Dimensions.width,
        flexDirection: 'row',
        height: 80,
        alignItems: 'center',
        backgroundColor: 'gray',
    },
});
