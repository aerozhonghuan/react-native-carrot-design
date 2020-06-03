/* eslint-disable no-self-compare */
/*
 * @Description: TabSelectViewDemo
 * @Author: wanglh
 * @Date: 2019-12-17 18:06:24
 * @LastEditors: wanglh
 * @LastEditTime: 2020-06-03 15:52:57
 */
/* eslint-disable no-use-before-define */
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';

import { TabSelectView } from 'react-native-carrot-design';
import { Color, AppDimensions } from '../style/CommonStyles';

export default class TabSelectViewDemo extends Component {
    constructor(props) {
        super(props);
        this.tapArr = [{ title: '外观' }, { title: '驾驶室' }, { title: '底盘' }, { title: '上装' }, { title: 'VR' }];
        this.state = {
            tapDataSource: this.tapArr,
            selectIndex: 0, // 默认选中第一个按钮
        };
    }
    /**
     * @description: tab选择
     * @param {item} 所选类型
     * @param {selectIndex} 所选类型的索引
     */
    selectTab = (item, selIndex) => {
        const { selectIndex } = this.state;
        if (selIndex === selectIndex) {
            return;
        }
        this.setState({
            selectIndex: selIndex,
            selectType: item.type,
        }, () => {
            console.log(this.state.selectIndex);
        });
    }

    render() {
        const { tapDataSource, selectIndex } = this.state;
        return (
            <View style={styles.container}>
                <TabSelectView
                    jsonKey="title"
                    bgViewStyle={styles.listHeader}
                    itemTitleNormalStyle={styles.headerItemTitleNormalStyle}
                    itemTitleSelectStyle={styles.headerItemTitleNormalStyle}
                    itemLineStyle={styles.headerCellBottomLine}
                    dataSource={tapDataSource}
                    selectIndex={selectIndex}
                    selectCallback={this.selectTab}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 30 / 2,
        backgroundColor: '#F5FCFF',
    },
    listHeader: {
        flex: 0,
        width: AppDimensions.width,
        height: 44,
    },
    headerItemTitleNormalStyle: {
        height: 36,
        lineHeight: 36,
    },
    headerCellBottomLine: {
        marginBottom: 3,
        height: 5,
        width: 12,
        backgroundColor: Color.mainColor,
        borderRadius: 3,
    },
});
