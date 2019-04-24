/* eslint-disable no-use-before-define */
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';

import { ButtonView } from 'react-native-carrot-design';
import { Color } from '../style/CommonStyles';

export default class ButtonViewDemo extends Component {
    pressBtn = () => {
        alert('press btn');
    }

    render() {
        return (
            <View style={styles.container}>
                <ButtonView
                    activeOpacity={0.6}
                    title="default style"
                    onPressCallback={this.pressBtn}
                />
                <ButtonView
                    activeOpacity={0.6}
                    btnTitleStyle={{ color: 'white', fontSize: 19 }}
                    btnViewStyle={styles.button}
                    title="button"
                    onPressCallback={this.pressBtn}
                />
                <ButtonView
                    activeOpacity={0.6}
                    disabled
                    btnViewStyle={styles.disabledBtn}
                    title="disabled button"
                    onPressCallback={this.pressBtn}
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
    button: {
        backgroundColor: Color.mainColor,
        marginVertical: 30,
        fontSize: 15,
        borderRadius: 3,
        borderWidth: 2,
        borderColor: 'blue',
    },
    disabledBtn: {
        marginVertical: 30,
        width: 200,
        borderRadius: 45 / 2.0,
        fontSize: 15,
    },
});
