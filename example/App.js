/*
 * @Description: root component
 * @Author: wanglh
 * @LastEditors: wanglh
 * @Date: 2019-04-18 16:08:45
 * @LastEditTime: 2019-04-22 13:45:48
 */

import React from 'react';
import {
    createAppContainer,
    createStackNavigator,
} from 'react-navigation';
import { StackViewStyleInterpolator } from
    'react-navigation-stack';

import HomeScreen from './src/screens/HomeScreen';
import { MAINSCREENS, COLLECTIONS } from './demoList';
import { Color, FontSize } from './src/style/CommonStyles';

export default function App() {
    return <AppContainer />;
}

const getOptions = title => ({
    title,
    headerStyle: {
        backgroundColor: Color.navBgColor,
    },
    gestureResponseDistance: {
        horizontal: 300,
    },
    headerTitleStyle: {
        color: Color.navTintColor,
        // 设置标题的大小
        fontSize: FontSize.navTitleSize,
        // 居中显示
        alignSelf: 'center',
    },
    headerTintColor: 'white', // 导航栏标题颜色以及返回按钮颜色
});

const scenes = {
    Home: {
        screen: HomeScreen,
        navigationOptions: getOptions('Welcome to Carrot Design'),
    },
};

/**
 * 页面过度 动画
 * @returns {{screenInterpolator: function(*=)}}
 * @constructor
 */
const TransitionConfiguration = () => ({
    screenInterpolator: (sceneProps) => {
        const { scene } = sceneProps;
        const { route } = scene;
        const params = route.params || {};
        const transition = params.transition || 'forHorizontal';
        return StackViewStyleInterpolator[transition](sceneProps);
    },
});

// eslint-disable-next-line array-callback-return
[...MAINSCREENS, ...COLLECTIONS].map((component) => {
    const Module = component.module.default;
    scenes[component.name] = {
        screen: Module,
        navigationOptions: getOptions(component.name),
    };
});

const RootNavigator = createStackNavigator(scenes, { transitionConfig: TransitionConfiguration });
const AppContainer = createAppContainer(RootNavigator);
