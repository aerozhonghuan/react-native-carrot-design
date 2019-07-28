/* eslint-disable no-use-before-define */
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';

import { CornerTextView } from 'react-native-carrot-design';
import { Color } from '../style/CommonStyles';

export default class CornerTextViewDemo extends Component {
    pressBtn = () => {
        alert('press btn');
    }

    render() {
        return (
            <View style={styles.container}>
                <CornerTextView
                    cornorStyle={styles.cornor}
                    title="圆角文本"
                />
                <CornerTextView
                    cornorStyle={styles.cornorS}
                    textStyle={styles.titleStyle}
                    title="自定义样式"
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: Color.screenBgColor,
    },
    cornor: {
        marginTop: 60,
        width: 100,
        height: 40,
        borderRadius: 6,
        backgroundColor: Color.mainColor,
    },
    cornorS: {
        marginTop: 60,
        width: 100,
        height: 40,
        borderRadius: 3,
        borderWidth: 1,
        backgroundColor: 'white',
    },
    titleStyle: {
        color: Color.mainColor,
    },
});
