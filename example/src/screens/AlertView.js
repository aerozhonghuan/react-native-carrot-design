import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';

import { AlertView } from 'react-native-carrot-design';
import { Color } from '../style/CommonStyles';
import DemoEmpty from '../components/DemoEmpty';

export default class AlertViewDemo extends Component {

    render() {
        return (
            <View style={styles.container}>
             <DemoEmpty></DemoEmpty>
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
