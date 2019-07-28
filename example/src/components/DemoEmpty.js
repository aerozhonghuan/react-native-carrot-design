import React from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';
import { Color } from '../style/CommonStyles';
import GlobalString from '../config/GlobalConst';

const styles = StyleSheet.create({
    emptyComponent: {
        alignItems: 'center',
        justifyContent: 'center',
        color: Color.placehoderColor,
        flexDirection: 'column',
        backgroundColor: Color.grayContainerBg,
    },
});

export default function DemoEmpty() {
    return (
        <View style={styles.emptyComponent}>
            <Text>{GlobalString.DemoEmptyString}</Text>
        </View>
    );
}
