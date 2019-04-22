/* eslint-disable no-use-before-define */
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';

import { TextInputView } from 'react-native-carrot-design';

export default class TextInputViewDemo extends Component {
    onChangeText = (text) => {
        alert(text);
    }

    onSubmitEditing = (text) => {
        alert(text);
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInputView
                    hasTitle={false}
                    leftTitle="用户名"
                    titleStyle={{ color: 'blue', fontSize: 19 }}
                    placeholder="请输入"
                    placeholderTextColor="red"
                    onChangeText={this.onChangeText}
                    onSubmitEditing={this.onSubmitEditing}
                />
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
