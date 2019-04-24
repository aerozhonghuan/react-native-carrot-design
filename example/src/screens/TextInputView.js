/* eslint-disable no-use-before-define */
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';

import { TextInputView } from 'react-native-carrot-design';
import { ConstWH, Color, AppDimensions } from '../style/CommonStyles';

export default class TextInputViewDemo extends Component {
    onChangeText = (text) => {
        // alert(text);
    }

    onSubmitEditing = (text) => {
        // alert(text);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>左侧无标题:</Text>
                <TextInputView
                    hasTitle={false}
                    placeholder="请输入"
                    placeholderTextColor="red"
                    onChangeText={this.onChangeText}
                    onSubmitEditing={this.onSubmitEditing}
                />
                <Text style={styles.text}>左侧有标题:</Text>
                <TextInputView
                    inputBgStyle={styles.inputRow}
                    titleStyle={styles.titleStyle}
                    inputStyle={styles.input}
                    hasTitle
                    leftTitle="用户名:"
                    placeholder="请输入用户名"
                    placeholderTextColor={Color.placehoderColor}
                    onChangeText={this.onChangeText}
                    onSubmitEditing={this.onSubmitEditing}
                />
                <Text style={styles.text}>最多输入8位的密码:</Text>
                <TextInputView
                    inputBgStyle={styles.inputRow}
                    titleStyle={styles.titleStyle}
                    inputStyle={styles.input}
                    hasTitle
                    leftTitle="密码:"
                    maxLength={8}
                    placeholder="请输入密码"
                    placeholderTextColor={Color.placehoderColor}
                    secureTextEntry
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
        paddingTop: 60,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    text: {
        width: AppDimensions.width,
        marginTop: 60,
        marginBottom: 30,
        marginLeft: 20,
        textAlign: 'left',
    },
    titleStyle: {
        color: 'blue',
        fontSize: 15,
    },
    inputTitle: {
        // height: ConstWH.inputHeight,
        // lineHeight: ConstWH.inputHeight,
        fontSize: 14,
        color: '#333333',
        textAlign: 'left',
    },
    inputRow: {
        width: AppDimensions.width - 30,
        borderColor: Color.mainColor,
        borderBottomWidth: 0.5,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: ConstWH.inputHeight,
        lineHeight: ConstWH.inputHeight,
    },
    input: {
        flex: 3,
        marginLeft: 3,
        marginRight: 3,
        // height: ConstWH.inputHeight,
        // lineHeight: ConstWH.inputHeight,
        fontSize: 14,
        color: '#666666',
    },
});
