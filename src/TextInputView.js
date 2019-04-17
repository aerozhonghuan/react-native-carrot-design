/*
 * @Description: TextInputView, which can customize styles
 * @Author: wanglh
 * @LastEditors: wanglh
 * @Date: 2019-04-03 19:32:20
 * @LastEditTime: 2019-04-17 17:47:42
 */

import React, { PureComponent } from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    Dimensions,
} from 'react-native';
import PropTypes from 'prop-types';

const { width } = Dimensions.get('window');
const inputHeight = 45;
const styles = StyleSheet.create({
    inputRow: {
        width: width - 30,
        height: inputHeight,
        lineHeight: inputHeight,
        backgroundColor: 'white',
        borderColor: '#e5e5e5',
        borderBottomWidth: 0.5,

        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },

    inputTitle: {
        height: inputHeight,
        lineHeight: inputHeight,
        fontSize: 14,
        color: '#333333',
        textAlign: 'left',
    },
    input: {
        flex: 3,
        marginLeft: 3,
        marginRight: 3,
        height: inputHeight,
        lineHeight: inputHeight,
        fontSize: 14,
        color: '#666666',
        backgroundColor: 'orange',
    },
});
export default class TextInputView extends PureComponent {
    static propTypes = {
        hasTitle: PropTypes.bool.isRequired,
        leftTitle: PropTypes.string,
        activeOpacity: PropTypes.number,
        inputBgStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
        inputStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
        titleStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
        allowFontScaling: PropTypes.bool,
        autoCorrect: PropTypes.bool,
        autoFocus: PropTypes.bool,
        blurOnSubmit: PropTypes.bool,
        caretHidden: PropTypes.bool,
        contextMenuHidden: PropTypes.bool,
        defaultValue: PropTypes.string,
        editable: PropTypes.bool,
        keyboardType: PropTypes.string,
        maxLength: PropTypes.number,
        onEndEditing: PropTypes.func,
        placeholder: PropTypes.string,
        placeholderTextColor: PropTypes.string,
        returnKeyType: PropTypes.string,
        clearTextOnFocus: PropTypes.bool,
        secureTextEntry: PropTypes.bool,
        onSubmitEditing: PropTypes.func,
        onChangeText: PropTypes.func,
    };

    static defaultProps = {
        leftTitle: undefined,
        activeOpacity: 1,
        inputBgStyle: styles.inputRow,
        inputStyle: styles.input,
        titleStyle: styles.inputRow,
        allowFontScaling: true,
        autoCorrect: true,
        autoFocus: false,
        blurOnSubmit: true,
        caretHidden: false,
        contextMenuHidden: false,
        defaultValue: undefined,
        editable: true,
        keyboardType: 'default',
        maxLength: 1000,
        onEndEditing: undefined,
        placeholder: undefined,
        placeholderTextColor: '#666666',
        returnKeyType: 'default',
        clearTextOnFocus: false,
        secureTextEntry: false,
        onSubmitEditing: undefined,
        onChangeText: undefined,
    };

    render() {
        const {
            hasTitle, leftTitle, activeOpacity, inputBgStyle,
            titleStyle, allowFontScaling, autoCorrect, autoFocus,
            blurOnSubmit, caretHidden, contextMenuHidden, defaultValue,
            editable, keyboardType, maxLength, onEndEditing,
            placeholder, placeholderTextColor, returnKeyType, clearTextOnFocus,
            secureTextEntry, onSubmitEditing, onChangeText, inputStyle,
        } = this.props;
        return (
            <TouchableOpacity style={[inputBgStyle]} activeOpacity={activeOpacity}>
                {hasTitle ? (
                    <Text style={[titleStyle]}>{leftTitle}</Text>
                ) : (null)}
                <TextInput
                    allowFontScaling={allowFontScaling || true}
                    autoCorrect={autoCorrect || true}
                    autoFocus={autoFocus || false}
                    blurOnSubmit={blurOnSubmit || true}
                    caretHidden={caretHidden || false}
                    contextMenuHidden={contextMenuHidden || false}
                    defaultValue={defaultValue}
                    editable={editable || true}
                    keyboardType={keyboardType}
                    maxLength={maxLength}
                    placeholder={placeholder}
                    placeholderTextColor={placeholderTextColor}
                    returnKeyType={returnKeyType}

                    clearTextOnFocus={clearTextOnFocus}// only in ios
                    clearButtonMode="while-editing"// only in ios
                    underlineColorAndroid="transparent"// 来去掉安卓上边框（默认有一个底边框，同时会有一些padding）
                    style={[inputStyle]}
                    secureTextEntry={secureTextEntry || false}
                    onEndEditing={onEndEditing}
                    onSubmitEditing={onSubmitEditing}
                    onChangeText={(text) => {
                        onChangeText(text);
                    }}
                />
            </TouchableOpacity>
        );
    }
}
