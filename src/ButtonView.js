/*
 * @Description: ButtonView, which can customize styles
 * @Author: wanglh
 * @LastEditors: wanglh
 * @Date: 2019-03-11 17:45:01
 * @LastEditTime: 2019-04-17 16:41:43
 */
import React, { PureComponent } from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    Dimensions,
} from 'react-native';
import PropTypes from 'prop-types';

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
    btnView: {
        width: width - 30,
        height: 45,
        lineHeight: 45,
        backgroundColor: '#3296fa',
        borderRadius: 45 / 2.0,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnTitle: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
    },
});
export default class ButtonView extends PureComponent {
    static propTypes = {
        activeOpacity: PropTypes.number,
        title: PropTypes.string.isRequired,
        disabled: PropTypes.bool,
        onPressCallback: PropTypes.func,
        btnTitleStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
        btnViewStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
    };

    static defaultProps = {
        activeOpacity: 0.2,
        disabled: false,
        btnTitleStyle: null,
        btnViewStyle: null,
        onPressCallback: undefined,
    };

    render() {
        const {
            disabled, activeOpacity, onPressCallback, title, btnTitleStyle, btnViewStyle,
        } = this.props;
        return (
            <TouchableOpacity
                activeOpacity={activeOpacity}
                disabled={disabled}
                style={[styles.btnView, { backgroundColor: disabled ? '#999999' : '#3296fa' }, btnViewStyle]}
                onPress={onPressCallback}
            >
                <Text style={[styles.btnTitle, btnTitleStyle]}>
                    {title}
                </Text>
            </TouchableOpacity>
        );
    }
}
