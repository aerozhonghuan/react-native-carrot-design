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
                    btnTitleStyle={{ color: 'white', fontSize: 19 }}
                    btnViewStyle={{ backgroundColor: Color.mainColor }}
                    title="button"
                    onPressCallback={this.pressBtn}
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
