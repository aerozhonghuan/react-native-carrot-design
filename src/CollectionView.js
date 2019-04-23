/*
 * @Description: A performant interface for rendering Waterfall flow list, which provide some
 * convenient features:https://github.com/rocket-developer/react-native-carrot-design/blob/master/docs/CollectionView.md
 * @Author: wanglh
 * @LastEditors: wanglh
 * @Date: 2019-04-17 10:38:22
 * @LastEditTime: 2019-04-23 14:18:51
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Dimensions,
    SectionList,
} from 'react-native';
import PropTypes from 'prop-types';

const columnSpacing = 8; // 默认子item列间距
// const cols = 3; // 默认子item列数
// const rowSpacing = columnSpacing; // 默认子item行间距
// const cellW = (width - columnSpacing * (cols + 1)) / cols; // 默认子item宽
// const cellH = cellW; // 默认子item高
let collectionDataArr = [];// 数据源
let styles;
export default class CollectionView extends Component {
    static propTypes = {
        headerSource: PropTypes.oneOfType([PropTypes.array]),
        dataSource: PropTypes.oneOfType([PropTypes.array]).isRequired,
        sectionStyle: PropTypes.oneOfType([PropTypes.object]),
        itemStyle: PropTypes.oneOfType([PropTypes.object]),
        renderItem: PropTypes.func.isRequired, // 单个每组中item的渲染
        renderSectionHeader: PropTypes.func, // 每section的头部渲染
        renderSectionFooter: PropTypes.func, // 每section的底部渲染
        renderSectionSeparator: PropTypes.func, // 在每个`section`的顶部和底部渲染
        renderSectionEmptyComponent: PropTypes.func,
        renderHeaderComponent: PropTypes.func,
        renderFooterComponent: PropTypes.func,
        renderEmptyComponent: PropTypes.func,
        stickySectionHeadersEnabled: PropTypes.bool, // 分组头部是否吸顶,ios默认为true;Android默认为false
        initialNumToRender: PropTypes.number, // 指定一开始渲染的元素数量，最好刚刚够填满一个屏幕
        onEndReached: PropTypes.func,
        onEndReachedThreshold: PropTypes.number, // 0.5表示距离内容最底部的距离为当前列表可见长度的一半时触发
        inverted: PropTypes.bool,
    };

    static defaultProps = {
        headerSource: undefined,
        sectionStyle: undefined,
        itemStyle: undefined,
        renderSectionHeader: undefined,
        renderSectionFooter: undefined,
        renderSectionSeparator: undefined,
        renderSectionEmptyComponent: undefined,
        renderHeaderComponent: undefined,
        renderFooterComponent: undefined,
        renderEmptyComponent: undefined,
        stickySectionHeadersEnabled: true,
        initialNumToRender: undefined,
        onEndReached: undefined,
        onEndReachedThreshold: 0.3,
        inverted: false,
    };

    /**
     * @description: 数据源处理
     * @param {headerArr} section头部数据源
     * @param {dataArr} section内容区域数据源
     * @return: void
     */
    static handleDataSource = (headerArr, dataArr) => {
        let headerSource = headerArr;
        let dataSource = dataArr;
        if (typeof (headerSource) === 'undefined') {
            headerSource = [];
        }
        if (typeof (dataSource) === 'undefined') {
            dataSource = [];
        }
        if (dataSource.length > 0 && dataSource.length >= headerSource.length) {
            let i;
            for (i = 0; i < dataSource.length; i += 1) {
                const section = {};
                if (i <= headerSource.length - 1) {
                    section.headerItem = headerSource[i];
                }
                const item = dataSource[i];
                section.data = [item];
                collectionDataArr.push(section);
            }
        } else if (headerSource.length > 0 && headerSource.length > dataSource.length) {
            let n;
            for (n = 0; n < headerSource.length; n += 1) {
                const section = {};
                section.headerItem = headerSource[n];
                if (n <= dataSource.length - 1) {
                    const item = dataSource[n];
                    section.data = [item];
                } else {
                    section.data = [[]];
                }
                collectionDataArr.push(section);
            }
        }
    }

    constructor(props) {
        super(props);
        const { headerSource, dataSource } = props;
        CollectionView.handleDataSource(headerSource, dataSource);
        this.state = {
            dataSource: collectionDataArr,
        };
    }

    componentWillUnmount() {
        collectionDataArr = [];
    }

    /**
     * @description: 为每个section生成一个不重复的key
     * @param {item} section项数据
     * @param {index} section项索引
     * @return: key
     */
    cusKeyExtractor = (item, index) => (`${index}${item}`)

    /**
     * @description: 渲染每个section的头部组件
     * @param {item} section数据源
     * @return: React.ReactElement | null
     */
    renderSectionHeader = (item) => {
        const { renderSectionHeader } = this.props;
        const { dataSource } = this.state;
        let index = 0;
        if (dataSource.length > 0) {
            let i;
            for (i = 0; i < dataSource.length; i += 1) {
                const sectionItem = dataSource[i];
                if (item.section === sectionItem) {
                    index = i;
                    break;
                }
            }
        }
        if (renderSectionHeader === undefined) {
            return (null);
        }
        return (
            typeof (item.section.headerItem) === 'undefined' ? (null) : renderSectionHeader(item.section.headerItem, index)
        );
    }

    /**
     * @description: 渲染每个section的底部组件
     * @param {item} section数据源
     * @return: React.ReactElement | null
     */
    renderSectionFooter = (item) => {
        const { renderSectionFooter } = this.props;
        const { dataSource } = this.state;
        let index = 0;
        if (dataSource.length > 0) {
            let i;
            for (i = 0; i < dataSource.length; i += 1) {
                const sectionItem = dataSource[i];
                if (item.section === sectionItem) {
                    index = i;
                    break;
                }
            }
        }
        if (renderSectionFooter === undefined) {
            return (null);
        }
        return (
            typeof (renderSectionFooter) !== 'undefined' ? renderSectionFooter(index) : (null)
        );
    }

    /**
     * @description: 绘制每一个item（为实现九宫格将每个section看做一个大的item）
     * @param {item} section数据源
     * @return: React.ReactElement | null
     */
    renderSection = ({ item }) => {
        const { sectionStyle } = this.props;
        if (item.length > 0) {
            return (
                <View style={[styles.sectionViewStyle, sectionStyle]}>
                    {
                        item.map(element => this.renderSubItem(element))
                    }
                </View>
            );
        }
        // 渲染空的组
        const { renderSectionEmptyComponent } = this.props;
        return typeof (renderSectionEmptyComponent) !== 'undefined' ? renderSectionEmptyComponent() : (null);
    }

    /**
     * @description: 绘制每个子item（section中的单个子item)
     * @param {item} 子item数据源
     * @return: React.ReactElement | null
     */
    renderSubItem = (item) => {
        const { renderItem, itemStyle } = this.props;
        const { dataSource } = this.state;
        let sectionIndex = 0;
        let itemIndex = 0;
        if (dataSource.length > 0) {
            let i;
            for (i = 0; i < dataSource.length; i += 1) {
                const sectionItem = dataSource[i];
                const sectionData = sectionItem.data;
                if (sectionData) {
                    const dataArr = sectionData[0];
                    let j;
                    for (j = 0; j < dataArr.length; j += 1) {
                        if (item === dataArr[j]) {
                            sectionIndex = i;
                            itemIndex = j;
                            break;
                        }
                    }
                }
            }
        }
        return (
            <View style={[styles.itemViewStyle, itemStyle]} key={`${sectionIndex}${itemIndex}`}>
                {
                    typeof (renderItem) !== 'undefined' ? renderItem(item, sectionIndex, itemIndex) : (null)
                }
            </View>
        );
    }

    /**
     * @description: 将可视区内位于特定sectionIndex 或 itemIndex (section内)位置的列表项，滚动到可视区的制定位置
     * @param {params} object
     * @return: void
     */
    scrollToLocation(params) {
        this.SectionList.scrollToLocation(params);
    }

    /**
     * @description: 主动通知列表发生了一个事件，以使列表重新计算可视区域
     * @return: void
     */
    recordInteraction() {
        this.SectionList.recordInteraction();
    }

    /**
     * @description: 短暂地显示滚动指示器
     * @return: void
     */
    flashScrollIndicators() {
        this.SectionList.flashScrollIndicators();
    }

    render() {
        const {
            stickySectionHeadersEnabled,
            initialNumToRender,
            onEndReachedThreshold,
            onEndReached,
            renderEmptyComponent,
            renderHeaderComponent,
            renderFooterComponent,
            renderSectionSeparator,
            inverted,
        } = this.props;
        const { dataSource } = this.state;
        return (
            <View style={styles.container}>
                <SectionList
                    ref={(r) => { this.SectionList = r; }}
                    sections={dataSource} // 所有组的数据源,类似于<FlatList>中的data属性
                    renderItem={this.renderSection} // 渲染每个section项
                    keyExtractor={this.cusKeyExtractor} // 为每个section生成一个不重复的key
                    ListEmptyComponent={renderEmptyComponent} // 整个列表为空时的组件
                    ListHeaderComponent={renderHeaderComponent} // 整个列表的头部组件
                    ListFooterComponent={renderFooterComponent} // 整个列表的底部组件
                    renderSectionHeader={this.renderSectionHeader} // 每个section的头部渲染
                    renderSectionFooter={this.renderSectionFooter} // 每个section为空时的组件
                    SectionSeparatorComponent={renderSectionSeparator} // section间隔组件，在每个section的顶部和底部渲染
                    stickySectionHeadersEnabled={stickySectionHeadersEnabled} // section头部组件是否吸顶,ios默认为true;Android默认为false
                    initialNumToRender={initialNumToRender} // 指定一开始渲染的元素数量，最好刚刚够填满一个屏幕
                    onEndReached={onEndReached} // 当列表被滚动到距离内容最底部不足onEndReachedThreshold的距离时调用。
                    onEndReachedThreshold={onEndReachedThreshold} // 决定当距离内容最底部还有多远时触发onEndReached回调
                    inverted={inverted} // 翻转滚动方向。实质是将scale变换设置为-1
                />
            </View>
        );
    }
}

styles = StyleSheet.create({
    container: {
        flex: 1,
        width: Dimensions.get('window').width,
    },
    sectionViewStyle: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    itemViewStyle: {
        margin: columnSpacing,
        flexDirection: 'column',
    },
});
