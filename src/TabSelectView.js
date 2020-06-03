/*
 * @Description: TabSelectView
 * @Author: wanglh
 * @Date: 2019-08-03 15:00:03
 * @LastEditors: wanglh
 * @LastEditTime: 2020-06-03 15:36:20
 */
import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    Dimensions,
} from 'react-native';
import PropTypes from 'prop-types';

const { width } = Dimensions.get('window');
let cellW = 100;
const styles = StyleSheet.create({
    container: {
        flex: 0,
        width: width,
        // height: 44,
        flexDirection: 'row',
    },
    cellView: {
        height: 44,
        flexDirection: 'column',
        alignItems: 'center',
    },
    cellTitle: {
        height: 40,
        lineHeight: 40,
        textAlign: 'center',
        fontSize: 15,
        color: '#666666',
    },
    cellTitleSelect: {
        height: 40,
        lineHeight: 40,
        textAlign: 'center',
        fontSize: 15,
        color: '#EC192E',
    },
    cellBottomLine: {
        marginBottom: 4,
        height: 4,
        width: 30,
        backgroundColor: '#EC192E',
    },
});

export default class TabSelectView extends Component {

    static propTypes = {
        /** 需要展示的选项值的key
         * 比如：[{title:'视频介绍'},{title:'车型介绍'}].就传'title'
         */
        jsonKey: PropTypes.string.isRequired,
        /** 按钮数据源
        * 单个元素必须包含jsonKey键值对,比如：[{title:'视频介绍'},{title:'车型介绍'}].
        */
        dataSource: PropTypes.oneOfType([PropTypes.array]).isRequired,
        /** 默认选中按钮的索引
        * 默认选中第一个按钮，即0
        */
        selectIndex: PropTypes.number,
        /** 是否显示按钮下划线
        * 默认显示
        */
        showBtnBottomLine: PropTypes.bool,
        /** 整个tabView的布局
         * 默认高为44，宽为屏幕宽
         */
        bgViewStyle: PropTypes.oneOfType([PropTypes.object]),
        /** 单个按钮的布局
         * 默认高为44，宽为屏幕宽/按钮个数
         */
        itemStyle: PropTypes.oneOfType([PropTypes.object]),
        /** 按钮标题的默认样式
         * fontSize: 15,color: '#666666',
         */
        itemTitleNormalStyle: PropTypes.oneOfType([PropTypes.object]),
        /** 按钮标题的选中样式
         * fontSize: 15,color: '#EC192E',
         */
        itemTitleSelectStyle: PropTypes.oneOfType([PropTypes.object]),
        /** 按钮下划线的样式
         * 默认高4，宽30,backgroundColor:'#EC192E',
         */
        itemLineStyle: PropTypes.oneOfType([PropTypes.object]),
        /** 自定义单个按钮
        * 当自定义renderItem时,itemStyle,itemTitleNormalStyle,itemTitleSelectStyle,itemLineStyle,selectCallback均无效
        */
        renderItem: PropTypes.func,
        
        /**
        * 按钮点击时的透明效果(0~1)
        * Defaults to 1
        */
        activeOpacity: PropTypes.number,
        
        /** 选中item的回调,回调内容(item:当前按钮的数据源, selectIndex:当前选中的按钮索引)
        * 当自定义renderItem时失效
        *
        */
        selectCallback: PropTypes.func,
    };

    static defaultProps = {
        selectIndex: 0,
        showBtnBottomLine: true,
        bgViewStyle: styles.container,
        itemStyle: styles.cellView,
        itemTitleNormalStyle: styles.cellTitle,
        itemTitleSelectStyle: styles.cellTitleSelect,
        itemLineStyle: styles.itemLineStyle,
        renderItem: undefined,
        activeOpacity: 1,
        selectCallback: undefined,
    }

    constructor(props) {
        super(props);
        const {
            dataSource,
            selectIndex,
            jsonKey,
        } = props;
        if (dataSource.length > 0) {
            cellW = width / dataSource.length;
        }
        const newsDatas = JSON.parse(JSON.stringify(dataSource));
        this.state = {
            title: jsonKey,
            currentIndex: selectIndex,
            dataS: newsDatas,
        };
    }

    render() {
        const {
            bgViewStyle,
        } = this.props;
        return (
            <View style={[styles.container, bgViewStyle]}>
                {
                    this.state.dataS.map(element => this.renderItem(element))
                }
            </View>
        );
    }

    renderItem = (item) => {
        const {
            itemStyle,
            itemTitleNormalStyle,
            itemTitleSelectStyle,
            itemLineStyle,
            renderItem,
            showBtnBottomLine,
            activeOpacity,
        } = this.props;
        let itemShowBottomLine = false;
        const { dataS } = this.state;
        if (dataS.length > 0) {
            itemShowBottomLine = this.getItemShowBottomLineStatus(item, showBtnBottomLine);
        }
        return (
            <View>
                {
                    typeof (renderItem) !== 'undefined' ? renderItem(item) :
                        (
                            <TouchableOpacity style={[styles.cellView, { width: cellW }, itemStyle]}
                            activeOpacity={activeOpacity}    
                            onPress={() =>
                                    this.selectItem(item)
                                }>
                                {itemShowBottomLine === true ? (
                                    <Text style={[styles.cellTitleSelect, itemTitleSelectStyle]}>
                                        {item[this.state.title]}
                                    </Text>) : (<Text style={[styles.cellTitle, itemTitleNormalStyle]}>
                                        {item[this.state.title]}
                                    </Text>
                                    )}
                                {itemShowBottomLine === true ? (<View style={[styles.cellBottomLine, itemLineStyle]}></View>) : (null)}
                            </TouchableOpacity>
                        )
                }
            </View>
        );
    }

    /**
     * @description: 当前按钮是否显示下划线
     * @param {item} 当前按钮
     * @param {showBtnBottomLine} 是否显示下划线
     * @return: true 是
     */
    getItemShowBottomLineStatus = (item, showBtnBottomLine) => {
        let i = 0;
        var temIndex = 0;
        for (i; i < this.state.dataS.length; i++) {
            let temItem = this.state.dataS[i];
            if (temItem.title === item.title) {
                temIndex = i;
                break;
            }
        }
        if (showBtnBottomLine === true) {
            if (i === this.state.currentIndex) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }

    /**
     * @description: 选中一个按钮
     * @param {item} 当前按钮
     */
    selectItem = (item) => {
        const { selectCallback } = this.props;
        let selectCallBackIndex = this.state.currentIndex;
        if (this.state.dataS.length > 0) {
            let i = 0;
            for (i; i < this.state.dataS.length; i++) {
                let temItem = this.state.dataS[i];
                if (temItem.title == item.title) {
                    selectCallBackIndex = i;
                    this.setState(
                        {
                            currentIndex: selectCallBackIndex,
                        },
                        () => {
                            selectCallback(item, selectCallBackIndex);
                        });
                    return;
                }
            }
        }
    }
}