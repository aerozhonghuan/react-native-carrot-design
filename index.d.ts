/*
 * @Description: In User Settings Edit
 * @Author: wanglh
 * @LastEditors: Please set LastEditors
 * @Date: 2019-03-11 18:02:58
 * @LastEditTime: 2019-03-13 17:52:13
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
    export class ButtonView extends Component<ButtonViewProps, any> {
    }
    export class CornerTextView extends Component<CornerTextViewProps, any> {
    }
    export default ButtonView
}