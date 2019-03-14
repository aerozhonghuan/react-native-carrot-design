/*
 * @Description: Type definitions for react-native-carrot-design
 * @Author: wanglh
 * @LastEditors: wanglh
 * @Date: 2019-03-11 18:02:58
 * @LastEditTime: 2019-03-14 15:39:23
 */

declare module 'react-native-carrot-design' {
    import { ViewStyle } from 'react-native'
    import { Component } from 'react'

    /** ButtonViewProps */
    export interface ButtonViewProps {
        /** Value: float from 0 to 1.0 */
        activeOpacity?: number,
        title: string,
        disabled?: boolean,
        btnTitleStyle?: ViewStyle
        btnViewStyle?: ViewStyle
        onPressCallback?: () => void,
    }
    /** CornerTextViewProps */
    export interface CornerTextViewProps {
        title: string,
        cornerStyle?: ViewStyle
        textStyle?: ViewStyle
    }

    export interface LoadingViewProps {
        hide?:boolean,
    }

    // exports class
    export class ButtonView extends Component<ButtonViewProps, any> {
    }

    export class CornerTextView extends Component<CornerTextViewProps, any> {
    }

    export class LoadingView extends Component<LoadingViewProps> {
        show():void;
        close():void;
    }
}