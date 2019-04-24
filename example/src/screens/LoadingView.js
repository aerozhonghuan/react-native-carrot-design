/* eslint-disable no-use-before-define */
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';

import { LoadingView, ButtonView } from 'react-native-carrot-design';
import { Color } from '../style/CommonStyles';

export default class LoadingViewDemo extends Component {
    pressBtn = () => {
        this.Loading.show();
        this.Timer = setTimeout(() => {
            this.Loading.close();
        }, 2000);
    }

    render() {
        return (
            <View style={styles.container}>
                <ButtonView
                    activeOpacity={0.6}
                    btnTitleStyle={{ color: 'white', fontSize: 19 }}
                    btnViewStyle={{ backgroundColor: Color.mainColor }}
                    title="模拟请求"
                    onPressCallback={() => this.pressBtn()}
                />
                <LoadingView
                    ref={(r) => { this.Loading = r; }}
                    hide
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
