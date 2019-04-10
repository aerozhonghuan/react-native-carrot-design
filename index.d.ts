/*
 * @Description: Type definitions for react-native-carrot-design
 * @Author: wanglh
 * @LastEditors: wanglh
 * @Date: 2019-03-11 18:02:58
 * @LastEditTime: 2019-03-22 18:09:14
 */

import {BannerViewProps, TextInputViewProps} from "react-native-carrot-design";

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

    /****** AlertViewProps ******/
    export interface AlertViewProps {
        /**
         * 可选(默认距离屏幕左右30)
         * 设置弹窗宽度
         */
        alertWidth?: number,
        /**
         * 可选(默认#FE2842)
         * 设置确认按钮颜色
         */
        mainColor?: string,
        /**
         * 可选,不填写则不显示标题
         * 设置标题文案
         */
        title?: string,
        /**
         * 可选,不填写则不显示文本内容区域
         * 设置内容区域文案
         */
        content?: string,
        /**
         * 可选,不填写则不显示确认按钮
         * 设置确认按钮文案
         */
        okText?: string,
        /**
         * 可选,不填写则不显示取消按钮
         * 设置取消按钮文案
         */
        cancelText?: string,
        /**
         * 可选,默认为文本类型
         * 设置内容区域类型,暂分为输入框和文本类型,AlertView.DialogType.INPUT(输入框) AlertView.DialogType.TEXT(文本)
         */
        contentType?: string,
        /**
         * 可选
         * 如果为输入类型,可控制输入最大长度
         */
        alertInputMaxLength?: number,
        /**
         * 可选
         * 如果为输入类型,可获取input回调的文案
         */
        alertCallback?: () => void,
        /**
         * 可选
         * 确认按钮点击事件
         */
        onOk?: () => void,
        /**
         * 可选
         * 取消按钮点击事件
         */
        onCancel?: () => void,
        /**
         * 可选
         * 自定义view
         */
        customContentView?: () => void,
        /**
         * 可选
         * 点击空白区域是否可以隐藏alert
         */
        isHideOnTouchOutside?: boolean,
        /**
         * 可选(Android可用)
         * 点击back键是否隐藏alert
         */
        isHideOnBackkey?: boolean,
    }

    export class AlertView extends Component<AlertViewProps> {
        /**
         * 控制alert显示隐藏
         * @param visible
         */
        setAlertVisible(visible:boolean): void;
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

    /****** BannerViewProps ******/
    export interface BannerViewProps {
        /**
         * 点击banner 返回当前banner索引
         * @param {number} index
         */
        onPressCallback?: (index: number) => void,
        /**
         * 0 表示用 • 1表示用图片替代
         */
        pageIndexType: number,
        /**
         * 未选中时 页面指示器的颜色
         */
        pageIndexNormalColor?: string,
        /**
         * 选中时 页面指示器的颜色
         */
        pageIndexSelectColor?: string,
        /**
         * 未选中时 页面指示器的图片
         */
        pageIndexNormalImg?: any,
        /**
         * 选中时 页面指示器的图片
         */
        pageIndexSelectImg?: any,
        /**
         * 每隔多少秒执行一次（单位是毫秒）
         */
        duration?: number,
        /**
         * 默认图片
         */
        bannerDefaultImg?: any,
        /**
         * banner的数据源
         */
        bannerData: object,
        /**
         * 取banner图片的key
         */
        bannerKey:string,
        /**
         * banner cache策略
         */
        bannerCache?: string,
        /**
         * 容器的布局
         */
        bannerStyle?:ViewStyle,
        /**
         * banner图片布局
         */
        bannerImageStyle?:ViewStyle,
        /**
         * 页面指示器的布局
         */
        pageIndexViewMoreStyle?:ViewStyle,
        /**
         * 页面指示器图标的布局
         */
        pageIndexMoreStyle?:ViewStyle,
    }
    export class BannerView extends Component<BannerViewProps, any> {
    }
}
