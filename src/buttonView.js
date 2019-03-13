import React, { PureComponent } from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    Dimensions
} from 'react-native';
import PropTypes from 'prop-types';

let styles;
export default class ButtonView extends PureComponent {
    static propTypes = {
        title: PropTypes.string.isRequired,
        disabled: PropTypes.bool,
        onPressCallback: PropTypes.func.isRequired,
        btnTitleStyle: PropTypes.shape({ height: PropTypes.number }),
        btnViewStyle: PropTypes.shape({ height: PropTypes.number }),
    };

    static defaultProps = {
        disabled: false,
        btnTitleStyle: PropTypes.oneOfType([
            PropTypes.object,
            PropTypes.number,
          ]),
        btnViewStyle: PropTypes.oneOfType([
            PropTypes.object,
            PropTypes.number,
          ]),
    };

    render() {
        const {
            disabled,activeOpacity, onPressCallback, title, btnTitleStyle, btnViewStyle,
        } = this.props;
        return (
            <TouchableOpacity
                activeOpacity={activeOpacity||0.8}
                disabled={disabled}
                style={[styles.btnView, { backgroundColor: disabled ? '#999999' : '#3296fa' }, btnViewStyle]}
                onPress={onPressCallback}>
                <Text style={[styles.btnTitle, btnTitleStyle]}>
                    {title}
                </Text>
            </TouchableOpacity>
        );
    }
}

styles = StyleSheet.create({
    btnView: {
        width:Dimensions.get('window').width-2*15,
        height: 45,
        lineHeight: 45,
        backgroundColor: '#3296fa',
        borderRadius: 45/2.0,
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
