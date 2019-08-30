/* eslint-disable no-use-before-define */
import React from 'react';
import {
    TouchableOpacity,
    Text,
    StyleSheet,
    SafeAreaView,
    FlatList,
    View,
} from 'react-native';
import { Color, ConstWH, Padding } from '../style/CommonStyles';
import { MAINSCREENS } from '../../demoList';

export default class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            actionsSource: MAINSCREENS,
        };
    }

    renderRow = ({ item, separators }) => (
        <TouchableOpacity
            onShowUnderlay={separators.highlight}
            onHideUnderlay={separators.unhighlight}
            activeOpacity={0.8}
            onPress={() => { this.goDemo(item); }}
            style={styles.actionsInfo}
        >
            <Text style={[styles.rowText]}>{item.name}</Text>
        </TouchableOpacity>
    );

    goDemo = (item) => {
        const { navigation } = this.props;
        navigation.navigate(item.name, {
            title: item.title,
        });
    }

    emptyComponent = () => (
        <View style={styles.listEmptyComponent}>
            <Text>开发者偷懒了，还没有添加demo哦~</Text>
        </View>
    )

    render() {
        const { actionsSource } = this.state;
        return (
            <SafeAreaView style={styles.safeAreaStyle}>
                <FlatList
                    horizontal={false}
                    data={actionsSource}
                    extraData={this.state}
                    keyExtractor={item => item.name}
                    renderItem={this.renderRow}
                    ListEmptyComponent={this.emptyComponent}
                    onEndReachedThreshold={1}
                />
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.bgColor,
    },
    safeAreaStyle: {
        flex: 1,
        backgroundColor: Color.bgColor,
    },
    actionsInfo: {
        height: ConstWH.cellHeight,
        paddingLeft: Padding.containerPadding,
        paddingRight: Padding.containerPadding,
        backgroundColor: Color.containerBg,
        borderColor: Color.lineColor,
        borderBottomWidth: 0.5,
    },
    rowText: {
        height: ConstWH.cellHeight,
        lineHeight: ConstWH.cellHeight,
        color: Color.mainTextColor,
    },
    listEmptyComponent: {
        flex: 1,
        marginTop: 99,
        alignItems: 'center',
        justifyContent: 'center',
        color: Color.placehoderColor,
        flexDirection: 'column',
        backgroundColor: Color.grayContainerBg,
    },
});
