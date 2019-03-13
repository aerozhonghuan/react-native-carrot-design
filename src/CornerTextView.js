/*
 * @Description: CornerTextView, which can customize styles
 * @Author: wanglh
 * @LastEditors: Please set LastEditors
 * @Date: 2019-03-13 16:04:39
 * @LastEditTime: 2019-03-13 17:53:56
 */

import React, { PureComponent } from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
    box: {
        padding:5,
        borderRadius: 6,
        backgroundColor: '#3296fa',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: 'white',
        fontSize: 14,
        textAlign: 'center',
    },
});
export default class CornerTextView extends PureComponent {
    static propTypes = {
        title: PropTypes.string.isRequired,
        cornorStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
        textStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
    };

    static defaultProps = {
        cornorStyle: null,
        textStyle: null,
    };

    render() {
        const {
            cornorStyle, title, textStyle,
        } = this.props;
        return (
            <View style={[styles.box, cornorStyle]}>
                <Text style={[styles.text, textStyle]}>
                    {title}
                </Text>
            </View>
        );
    }
}
