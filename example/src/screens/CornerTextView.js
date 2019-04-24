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
                <CornerTextView>圆角文本</CornerTextView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});
