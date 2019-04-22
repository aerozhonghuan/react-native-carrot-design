/**
 * @Description:
 * @Author: lp1
 * @LastEditors: lp1
 * @Date: 2019/4/19 3:46 PM
 * @LastEditTime: 2019/4/19 3:46 PM
 */
import React, { PureComponent } from 'react';
import {
    StyleSheet, View,
    Text, TouchableOpacity,
    Dimensions, Modal, Platform,
} from 'react-native';
import PropTypes from 'prop-types';
// 布局
let styles;
const { width, height } = Dimensions.get('window');
const bottomHeight = Platform.OS === 'ios' && height < 812 ? 0 : 25;

export default class PictureBrowserSaveView extends PureComponent {
    render() {
        const { modalVisible, onPressCallback, saveCallBack } = this.props;
        return (
            <Modal
                animationType="fade"
                transparent
                visible={modalVisible}
                onRequestClose={() => {
                    console.log('关闭保存相册弹窗');
                }}
            >
                <View style={styles.container}>
                    <View style={styles.saveViewStyle}>
                        <TouchableOpacity
                            style={styles.itemStyle}
                            onPress={() => saveCallBack()}
                            activeOpacity={1}
                        >
                            <View>
                                <Text style={styles.cancelStyle}>保存到相册</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.otherStyle}
                            onPress={() => onPressCallback()}
                            activeOpacity={1}
                        >
                            <View>
                                <Text style={styles.cancelStyle}>取消</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                </View>
            </Modal>
        );
    }
}
// 属性
PictureBrowserSaveView.defaultProps = {
    modalVisible: false,
    onPressCallback: undefined,
    saveCallBack: undefined,
};
PictureBrowserSaveView.propTypes = {
    // 是否展示
    modalVisible: PropTypes.bool,
    // 点击事件
    onPressCallback: PropTypes.func,
    // 保存到相册
    saveCallBack: PropTypes.func,
};
styles = StyleSheet.create({
    container: {
        height,
        width,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        justifyContent: 'center',
        alignItems: 'flex-end',
        flexDirection: 'row',
    },
    titleStyle: {
        fontSize: 16,
        color: 'black',
    },
    cancelStyle: {
        fontSize: 16,
        color: 'black',
    },
    // 保存相册的布局
    itemStyle: {
        height: 50,
        width,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
    },
    // 取消按钮的布局
    otherStyle: {
        height: 40,
        width,
        justifyContent: 'center',
        alignItems: 'center',
    },
    // 保存图片的弹框的布局
    saveViewStyle: {
        backgroundColor: 'white',
        width,
        height: 90,
        alignItems: 'center',
        marginBottom: bottomHeight,
    },
});
