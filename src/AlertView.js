/**
 * @Description: customize
 * @Author: zhangyonghui
 * @LastEditors: zhangyonghui
 * @Date: 2019-03-29 13:21
 * @LastEditTime: 2019-03-29 13:21
 */

import React, { Component } from 'react';
import {
    Modal,
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    Dimensions,
    TextInput,
} from 'react-native';
import PropTypes from 'prop-types';

const { width } = Dimensions.get('window');
let styles;

/**
 * 自定义弹窗
 * 功能:
 * 自定义标题: title
 * 自定义按钮: okText 对应事件onOk, cancelButton 对应事件onCancel
 * 内容区域: 默认提供文本和输入框两种类型选择
 * 内容暂时只提供文本,输入框两种类型
 */
export default class AlertView extends Component {
    static DialogType = {
        INPUT: 'input',
        TEXT: 'text',
    };

    static propTypes = {
        alertWidth: PropTypes.number,
        mainColor: PropTypes.string,
        title: PropTypes.string,
        content: PropTypes.string,
        okText: PropTypes.string,
        cancelText: PropTypes.string,
        contentType: PropTypes.string,
        alertInputMaxLength: PropTypes.number,
        alertCallback: PropTypes.func,
        onOk: PropTypes.func,
        onCancel: PropTypes.func,
        customContentView: PropTypes.func,
        isHideOnTouchOutside: PropTypes.bool,
        isHideOnBackkey: PropTypes.bool,
    };

    static defaultProps = {
        alertWidth: width - 60,
        mainColor: '#FE2842',
        title: null,
        content: null,
        contentType: null,
        alertInputMaxLength: null,
        customContentView: undefined,
        alertCallback: null,
        okText: null,
        onOk: null,
        cancelText: null,
        onCancel: null,
        isHideOnTouchOutside: false,
        isHideOnBackkey: false,
    };

    constructor(props) {
        super(props);
        this.state = { modalVisible: false };
    }

    // 控制显示隐藏
    setAlertVisible = (visible) => {
        this.setState({ modalVisible: visible });
    };

    isEmpty = text => typeof text === 'undefined' || text == null || text === '';

    // 控制按钮区域
    buttonContainer = (okText, cancelText, onOk, onCancel) => {
        let cancelButton;
        let okButton;
        const { mainColor, alertWidth } = this.props;
        if (!this.isEmpty(cancelText)) {
            const borderRightWidth = this.isEmpty(okText) ? 0 : 0.5;
            cancelButton = (
                <TouchableOpacity
                    style={[styles.cancelButtonContainer, { borderRightWidth }]}
                    onPress={() => {
                        if (onCancel) {
                            onCancel();
                        } else {
                            this.setAlertVisible(false);
                        }
                    }}
                >
                    <Text style={styles.cancelButton}>{cancelText}</Text>
                </TouchableOpacity>
            );
        }
        if (!this.isEmpty(okText)) {
            okButton = (
                <TouchableOpacity
                    style={styles.okButtonContainer}
                    onPress={() => {
                        if (onOk) {
                            onOk();
                        } else {
                            this.setAlertVisible(false);
                        }
                    }}
                >
                    <Text style={[styles.okButton, { color: mainColor }]}>{okText}</Text>
                </TouchableOpacity>
            );
        }
        if (this.isEmpty(okText) && this.isEmpty(cancelText)) {
            return null;
        }
        return (
            <View style={[styles.buttonContainer, { width: alertWidth }]}>
                {cancelButton}
                {okButton}
            </View>
        );
    };

    // 控制title
    dialogTitle = (title) => {
        if (title == null || title === '') {
            return null;
        }
        return (
            <Text style={styles.title}>
                {title}
            </Text>
        );
    };

    // 控制内容区域
    content = (contentType, content, alertCallback, customContentView) => {
        if (customContentView) {
            return customContentView();
        }
        if (this.isEmpty(contentType)
            || contentType === AlertView.DialogType.TEXT) {
            return (
                <Text style={styles.content}>
                    {content}
                </Text>
            );
        }
        if (contentType === AlertView.DialogType.INPUT) {
            const { alertInputMaxLength } = this.props;
            return (
                <TextInput
                    style={styles.dialogInputContent}
                    placeholderTextColor="#999999"
                    clearTextOnFocus={false}
                    keyboardType="default"
                    returnKeyType="done"
                    placeholder={content}
                    maxLength={alertInputMaxLength}
                    onChangeText={alertCallback}
                />
            );
        }
        return null;
    };

    render() {
        const {
            alertWidth,
            title,
            content,
            alertCallback,
            okText,
            cancelText,
            onOk,
            onCancel,
            contentType,
            customContentView,
            isHideOnTouchOutside,
            isHideOnBackkey,
        } = this.props;
        const { modalVisible } = this.state;
        return (
            <Modal
                animationType="fade"
                transparent
                visible={modalVisible}
                onRequestClose={() => {
                    if (isHideOnBackkey) {
                        this.setAlertVisible(false);
                    }
                }}
            >
                <TouchableOpacity
                    style={styles.container}
                    activeOpacity={1}
                    onPress={() => {
                        if (isHideOnTouchOutside) {
                            this.setAlertVisible(false);
                        }
                    }}
                >
                    <TouchableOpacity
                        style={[styles.innerContainer, { width: alertWidth }]}
                        activeOpacity={1}
                    >
                        {this.dialogTitle(title)}
                        <View style={{ width: alertWidth }}>
                            {this.content(contentType, content, alertCallback, customContentView)}
                        </View>
                        {this.buttonContainer(okText,
                            cancelText,
                            onOk,
                            onCancel)}
                    </TouchableOpacity>
                </TouchableOpacity>
            </Modal>
        );
    }
}

styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        alignItems: 'center',
    },
    innerContainer: {
        borderRadius: 6,
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    title: {
        paddingTop: 18,
        fontSize: 16,
        color: '#333',
    },
    content: {
        fontSize: 14,
        color: '#666',
        marginLeft: 30,
        marginRight: 30,
        marginTop: 20,
        marginBottom: 30,
    },
    dialogInputContent: {
        height: 40,
        margin: 28,
        paddingLeft: 10,
        fontSize: 14,
        color: '#666',
        backgroundColor: '#F6F6F6',
        borderRadius: 10,
        padding: 0,
    },
    buttonContainer: {
        flexDirection: 'row',
        borderTopWidth: 0.5,
        borderColor: '#E5E5E5',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    okButtonContainer: {
        flex: 1,
    },
    cancelButtonContainer: {
        flex: 1,
        borderRightWidth: 0.5,
        borderRightColor: '#E5E5E5',
    },
    okButton: {
        fontSize: 16,
        color: '#FE2842',
        textAlign: 'center',
        paddingTop: 14,
        paddingBottom: 14,
    },
    cancelButton: {
        fontSize: 16,
        color: '#333',
        textAlign: 'center',
        paddingTop: 14,
        paddingBottom: 14,
    },
});
