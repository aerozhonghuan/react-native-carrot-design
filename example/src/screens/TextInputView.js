/*
 * @Description: TextInputViewDemo
 * @Author: wanglh
 * @LastEditors: wanglh
 * @Date: 2019-04-19 17:33:42
 * @LastEditTime: 2019-04-25 11:35:17
 */

/* eslint-disable no-use-before-define */
import React, { Component } from 'react';
import {
    StyleSheet,
    ScrollView,
    Text,
    View,
} from 'react-native';

import { TextInputView } from 'react-native-carrot-design';
import { ConstWH, Color, AppDimensions } from '../style/CommonStyles';

export default class TextInputViewDemo extends Component {
    onChangeText = (text) => {
        console.log(text);
    }

    onSubmitEditing = (text) => {
        console.log(text);
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView keyboardShouldPersistTaps="always">
                    <Text style={styles.text}>一、左侧无标题/图片:</Text>
                    <TextInputView
                        placeholder="请输入"
                        placeholderTextColor="red"
                        onChangeText={this.onChangeText}
                        onSubmitEditing={this.onSubmitEditing}
                    />
                    <Text style={styles.text}>二、左侧有标题:</Text>
                    <TextInputView
                        inputBgStyle={styles.inputRow}
                        titleStyle={styles.titleStyle}
                        inputStyle={styles.input}
                        leftType="text"
                        leftTitle="用户名:"
                        placeholder="请输入用户名"
                        placeholderTextColor={Color.placehoderColor}
                        onChangeText={this.onChangeText}
                        onSubmitEditing={this.onSubmitEditing}
                    />
                    <Text style={styles.text}>三、左侧有图片:</Text>
                    <TextInputView
                        inputBgStyle={styles.inputRow}
                        imageStyle={styles.imageStyle}
                        inputStyle={styles.input}
                        leftType="image"
                        leftImageSource={require('../assets/imags/collectionView_icon.png')}
                        placeholder="请输入用户名"
                        placeholderTextColor={Color.placehoderColor}
                        onChangeText={this.onChangeText}
                        onSubmitEditing={this.onSubmitEditing}
                    />
                    <Text style={styles.text}>四、最多输入8位的密码:</Text>
                    <TextInputView
                        inputBgStyle={styles.inputRow}
                        titleStyle={styles.titleStyle}
                        inputStyle={styles.input}
                        leftType="text"
                        leftTitle="密码:"
                        maxLength={8}
                        placeholder="请输入密码"
                        placeholderTextColor={Color.placehoderColor}
                        secureTextEntry
                        onChangeText={this.onChangeText}
                        onSubmitEditing={this.onSubmitEditing}
                    />
                    <Text style={styles.text}>五、设置输入框边框:</Text>
                    <TextInputView
                        inputBgStyle={styles.inputRowNoBorder}
                        titleStyle={styles.titleStyle}
                        inputStyle={styles.inputBorder}
                        leftType="text"
                        leftTitle="邮箱:"
                        maxLength={8}
                        placeholder="请输入邮箱"
                        placeholderTextColor={Color.placehoderColor}
                        onChangeText={this.onChangeText}
                        onSubmitEditing={this.onSubmitEditing}
                    />
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 30 / 2,
        backgroundColor: '#F5FCFF',
    },
    text: {
        marginTop: 60,
        marginBottom: 10,
        textAlign: 'left',
    },
    titleStyle: {
        color: Color.mainTextColor,
        fontSize: 15,
    },
    imageStyle: {
        height: 32,
        width: 32,
    },
    inputTitle: {
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
        fontSize: 14,
        color: '#666666',
    },
    inputRowNoBorder: {
        width: AppDimensions.width - 30,
        borderBottomWidth: 0,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: ConstWH.inputHeight,
        lineHeight: ConstWH.inputHeight,
    },
    inputBorder: {
        flex: 3,
        borderColor: Color.mainColor,
        borderWidth: 0.5,
        marginLeft: 3,
        marginRight: 3,
        paddingHorizontal: 10,
        fontSize: 14,
        color: '#666666',
        height: ConstWH.inputHeight - 10,
        lineHeight: ConstWH.inputHeight - 10,
    },
});
