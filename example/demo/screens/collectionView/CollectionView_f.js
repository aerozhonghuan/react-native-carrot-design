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

const { width } = Dimensions.get('window');
const cols = 3; // 子item默认列数
const columnSpacing = 15; // 子item列间距
const rowSpacing = 10; // 子item行间距
const cellW = (width - columnSpacing * (cols + 1)) / cols; // 子item宽
const cellH = cellW; // 子item高

const headerSource = [{ title: '生产调试' }, { title: '运输扫描' }];
const dataSource = [[
    {
        key: '第一组--第一个item',
        enable: false,
    // icon: require('../../../images/home/firstInspection.png'),
    },
    {
        key: '第一组--第二个item',
        enable: false,
    // icon: require('../../../images/home/secondInspection.png'),
    }, {
        key: '第一组--第三个item',
        enable: false,
    // icon: require('../../../images/home/secondInspection.png'),
    },
    {
        key: '第一组--第四个item',
        enable: false,
    // icon: require('../../../images/home/secondInspection.png'),
    }, {
        key: '第一组--第五个item',
        enable: false,
    // icon: require('../../../images/home/secondInspection.png'),
    },
], [
    // {
    //     key: '第二组--第一个item',
    //     enable: false,
    //     // icon: require('../../../images/home/singleScan.png'),
    // },
    // {
    //     key: '第二组--第二个item',
    //     enable: false,
    //     // icon: require('../../../images/home/batchScan.png'),
    // },
], [
    {
        key: '第三组--第一个item',
        enable: false,
    // icon: require('../../../images/home/firstInspection.png'),
    },
    {
        key: '第三组--第二个item',
        enable: false,
    // icon: require('../../../images/home/secondInspection.png'),
    },
    {
        key: '第三组--第三个item',
        enable: false,
    // icon: require('../../../images/home/secondInspection.png'),
    },
], [
    {
        key: '第四组--第一个item',
        enable: false,
    // icon: require('../../../images/home/singleScan.png'),
    },
    {
        key: '第四组--第二个item',
        enable: false,
    // icon: require('../../../images/home/batchScan.png'),
    },
], [
    {
        key: '第五组--第一个item',
        enable: false,
    // icon: require('../../../images/home/firstInspection.png'),
    },
    {
        key: '第五组--第二个item',
        enable: false,
    // icon: require('../../../images/home/secondInspection.png'),
    },
], [
    {
        key: '第六组--第一个item',
        enable: false,
    // icon: require('../../../images/home/singleScan.png'),
    },
    {
        key: '第六组--第二个item',
        enable: false,
    // icon: require('../../../images/home/batchScan.png'),
    },
], [
    {
        key: '第七组--第一个item',
        enable: false,
    // icon: require('../../../images/home/firstInspection.png'),
    },
    {
        key: '第七组--第二个item',
        enable: false,
    // icon: require('../../../images/home/secondInspection.png'),
    },
], [
    {
        key: '第八组--第一个item',
        enable: false,
    // icon: require('../../../images/home/singleScan.png'),
    },
    {
        key: '第八组--第二个item',
        enable: false,
    // icon: require('../../../images/home/batchScan.png'),
    },
], [
    {
        key: '第九组--第一个item',
        enable: false,
    // icon: require('../../../images/home/firstInspection.png'),
    },
    {
        key: '第九组--第二个item',
        enable: false,
    // icon: require('../../../images/home/secondInspection.png'),
    },
], [
    {
        key: '第十组--第一个item',
        enable: false,
    // icon: require('../../../images/home/singleScan.png'),
    },
    {
        key: '第十组--第二个item',
        enable: false,
    // icon: require('../../../images/home/batchScan.png'),
    },
], [
    {
        key: '第十一组--第一个item',
        enable: false,
    // icon: require('../../../images/home/firstInspection.png'),
    },
    {
        key: '第十一组--第二个item',
        enable: false,
    // icon: require('../../../images/home/secondInspection.png'),
    },
], [
    {
        key: '第十二组--第一个item',
        enable: false,
    // icon: require('../../../images/home/singleScan.png'),
    },
    {
        key: '第十一组--第二个item',
        enable: false,
    // icon: require('../../../images/home/batchScan.png'),
    },
], [
    {
        key: '第十三组--第一个item',
        enable: false,
    // icon: require('../../../images/home/firstInspection.png'),
    },
    {
        key: '第十三组--第二个item',
        enable: false,
    // icon: require('../../../images/home/secondInspection.png'),
    },
], [
    {
        key: '第十四组--第一个item',
        enable: false,
    // icon: require('../../../images/home/singleScan.png'),
    },
    {
        key: '第十四组--第二个item',
        enable: false,
    // icon: require('../../../images/home/batchScan.png'),
    },
]
];
export default class CollectionView_f extends Component {

    constructor(props) {
        super(props)
        // this.state = {

    // }
    }

    render() {
        return (
            <View style={styles.container}>
                <CollectionView ref={r => { this.CollectionView = r; }}
                    headerSource={headerSource}
                    dataSource={dataSource}
                    renderItem={this.renderItem} // 渲染每个item
                    sectionStyle={styles.sectionViewStyle} // section布局样式
                    itemStyle={styles.itemViewStyle} // item布局样式
                    renderHeaderComponent={this.rendHeaderComponent}
                    renderFooterComponent={this.rendFooterComponent}
                    renderEmptyComponent={this.rendEmptyComponent}

                    renderSectionHeader={this.renderSectionHeader} // 每个section的头部渲染
                    renderSectionFooter={this.renderSectionFooter} // 每个section的底部渲染
                    renderSectionSeparator={this.renderSectionSeparator} // 在每个`section`的顶部和底部渲染
                    renderSectionEmptyComponent={this.renderSectionEmptyComponent}
                    renderItemSeparator={this.renderItemSeparator}

                    stickySectionHeadersEnabled={true} // 是否吸顶,ios默认为true;Android默认为false
                    initialNumToRender={2}
                    onEndReached={this.onEndReached}
                    onEndReachedThreshold={0.5}// 0.5表示距离内容最底部的距离为当前列表可见长度的一半时触发
                    inverted={false}
                 />
            </View>
        );
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
          activeOpacity={0.8}
          onPress={() => {
              alert(`I'm ${item.key}`);
          }}
      >
          <Text style={styles.rowText}>{item.key}</Text>
      </TouchableOpacity>
  )

  /**
   * @description: Rendered at the top of each section. Sticky headers are not yet supported.
   * @param {headerItem}: The dataSource of the header.
   * @param {sectionIndex}: The index of the section
   * @return: React.ReactElement | null
   */
  renderSectionHeader = (headerItem, sectionIndex) => {
      return (
          <Text style={styles.sectionHeader}>第{sectionIndex}组:sectionHeaderComponent</Text>
      )
  }

  /**
   * @description: Rendered at the bottom of each section.
   * @return: React.ReactElement | null
   */
  renderSectionFooter = (sectionIndex) => {
      return (
          <Text style={styles.sectionFooter}>第{sectionIndex}组:sectionFooterComponent</Text>
      )
  }

  /**
   * @description: Rendered when the section is empty.
   * @return: React.ReactElement | null
   */
  renderSectionEmptyComponent = () => {
      return (<Text style={styles.listEmpty}>sectionEmptyComponent</Text>)
  }

  /**
   * @description: Rendered at the top of the collectionView.
   * @return: React.ReactElement | null
   */
  rendHeaderComponent = () => {
      return (<Text style={styles.listHeader}>headerComponent</Text>)
  }

  /**
   * @description: Rendered at the bottom of the collectionView.
   * @return: React.ReactElement | null
   */
  rendFooterComponent = () => {
      return (
          <Text style={styles.listFooter}>footerComponent</Text>
      )
  }

  /**
   * @description: Rendered in between each section. Render at the top and bottom of each section
   * @return: React.ReactElement | null
   */
  renderSectionSeparator = () => (
      <View style={styles.sectionSeparator} />
  )

  /**
   * @description: Rendered when the collectionView is empty.
   * @return: React.ReactElement | null
   */
  rendEmptyComponent = () => {
      return (<Text style={styles.listEmpty}>emptyComponent</Text>)
  }

  /**
   * @description: Called once when the scroll position gets within onEndReachedThreshold of the rendered content.
   * @param {info:{distanceFromEnd: number}}  
   * @return: void
   */
  onEndReached = (info) => {
      alert(`he scroll position:info==>${JSON.stringify(info)}`);
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },

    listHeader: {
        paddingLeft: 10,
        fontSize: 18,
        textAlign: 'left',
        color: "#333333",
        height: 40,
        lineHeight: 40,
        width: width,
        backgroundColor: '#D1EEEE'
    },
    listFooter: {
        paddingLeft: 10,
        fontSize: 18,
        textAlign: 'left',
        color: "#333333",
        height: 40,
        width: width,
        lineHeight: 40,
        backgroundColor: '#DAA520'
    },

    listEmpty: {
        fontSize: 18,
        textAlign: 'center',
        color: "#333333",
        height: 100,
        width: width,
        lineHeight: 100,
        backgroundColor: 'white'
    },

    sectionSeparator:{
        height: 1, 
        backgroundColor: 'red'
    },
    itemSeparator:{
        height: cellW, 
        width:2,
        backgroundColor: '#98FB98'
    },

    sectionHeader: {
        paddingLeft: 15,
        fontSize: 18,
        textAlign: 'left',
        color: "#333333",
        height: 40,
        lineHeight: 40,
        backgroundColor: '#e5e5e5'
    },
    sectionFooter: {
        paddingLeft: 15,
        fontSize: 18,
        textAlign: 'left',
        color: "#333333",
        height: 40,
        lineHeight: 40,
        backgroundColor: '#CDCD00'
    },

    sectionViewStyle: {
        flexDirection: 'row',
        // justifyContent: 'space-around',
        // alignContent:'flex-start',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
    },
    iconStyle: {
        width: 60,
        height: 40,
    },
    rowText: {
        flex: 3,
        marginTop: columnSpacing,
        color: "#333333",
    },
    itemViewStyle: {
        width: cellW,
        height: cellH,
        marginLeft: columnSpacing,
        marginTop: rowSpacing,
        marginBottom: rowSpacing,
        alignItems: 'center',
        backgroundColor: 'gray',
    },
});
