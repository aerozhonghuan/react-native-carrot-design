/*
 * @Description: Type definitions for react-native-carrot-design
 * @Author: wanglh
 * @LastEditors: wanglh
 * @Date: 2019-03-11 18:02:58
 * @LastEditTime: 2019-03-22 18:09:14
 */

declare module 'react-native-carrot-design' {
    import { ViewStyle } from 'react-native'
    import { Component } from 'react'

    /****** ButtonViewProps ******/
    export interface ButtonViewProps {
        /** Value: float from 0 to 1.0 */
        activeOpacity?: number,
        title: string,
        disabled?: boolean,
        btnTitleStyle?: ViewStyle
        btnViewStyle?: ViewStyle
        onPressCallback?: () => void,
    }
    export class ButtonView extends Component<ButtonViewProps, any> {
    }

    /****** CornerTextViewProps ******/
    export interface CornerTextViewProps {
        title: string,
        cornerStyle?: ViewStyle
        textStyle?: ViewStyle
    }
    export class CornerTextView extends Component<CornerTextViewProps, any> {
    }

    /****** LoadingViewProps ******/
    export interface LoadingViewProps {
        hide?: boolean,
    }
    export class LoadingView extends Component<LoadingViewProps> {
        show(): void;
        close(): void;
    }

     /****** TextInputViewProps ******/
     export interface TextInputViewProps {
        /** Value: float from 0 to 1.0 */
        activeOpacity?: number,
        hasTitle: boolean,
        leftTitle?: string,
        inputBgStyle?: ViewStyle,
        inputStyle?: ViewStyle,
        titleStyle?: ViewStyle,
        allowFontScaling?: boolean,
        autoCorrect?: boolean,
        autoFocus?: boolean,
        blurOnSubmit?: boolean,
        caretHidden?: boolean,
        contextMenuHidden?: boolean,
        defaultValue?: string,
        editable?: boolean,
        keyboardType?: string,
        maxLength?: number,
        onEndEditing?: () => void,
        placeholder?: string,
        placeholderTextColor?: string,
        returnKeyType?: string,
        clearTextOnFocus?: boolean,
        secureTextEntry?: boolean,
        onSubmitEditing?: () => void,
        onChangeText?: (text: string) => void,
    }
    export class TextInputView extends Component<TextInputViewProps, any> {
    }
}