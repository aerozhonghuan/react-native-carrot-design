/**
 * @Description:
 * @Author: lp1
 * @LastEditors: lp1
 * @Date: 2019/4/22 10:27 AM
 * @LastEditTime: 2019/4/22 10:27 AM
 */
import React, { Component } from 'react';
import {
    StyleSheet, View,
    Image, TouchableOpacity, PanResponder, Dimensions, Platform,
} from 'react-native';
import PropTypes from 'prop-types';

// 布局
let styles;
// 每一次开始的缩放记录
let initDistend;
const { width, height } = Dimensions.get('window');
const topHeight = 60;

export default class PhotoZoomView extends Component {
    constructor(props) {
    // 构造函数
        super(props);
        this.state = {
            // 缩放相关
            scaleNumber: 0,
        };
    }

    componentWillMount() {
        this.pinchResponder = PanResponder.create({
            onStartShouldSetPanResponder: this.handleStartShouldSetPanResponder,
            onStartShouldSetPanResponderCapture: this.handleStartShouldSetPanResponderCapture,
            onMoveShouldSetPanResponder: this.handleMoveShouldSetPanResponder,
            onMoveShouldSetPanResponderCapture: this.handleMoveShouldSetPanResponderCapture,
            onPanResponderMove: this.handlePanResponderMove,
            onPanResponderGrant: this.handlePanResponderGrant,
            onPanResponderRelease: this.handlePanResponderEnd,
            onPanResponderTerminate: this.handlePanResponderEnd,
            onPanResponderStart: this.handlePanResponderStart,
        });
    }

  handleStartShouldSetPanResponder = (event, gestureState) => {
      // 两点手势则处理
      if (gestureState.numberActiveTouches === 2) {
          return true;
      }
      return false;
  };

  handleStartShouldSetPanResponderCapture = (event, gestureState) => {
      // 两点手势则处理
      if (gestureState.numberActiveTouches === 2) {
          return true;
      }
      return false;
  };

  handleMoveShouldSetPanResponder = (event, gestureState) => {
      if (gestureState.numberActiveTouches === 2) {
          return true;
      }
      return false;
  };

  handleMoveShouldSetPanResponderCapture = (event, gestureState) => {
      if (gestureState.numberActiveTouches === 2) {
          return true;
      }
      return false;
  };

  handlePanResponderGrant = () => {

  };

  handlePanResponderEnd = () => {

  };

  handlePanResponderStart = (event, gestureState) => {
      if (gestureState.numberActiveTouches === 2) {
          const distend = Math.sqrt(
              Math.pow(event.nativeEvent.touches[0].pageX - event.nativeEvent.touches[1].pageX, 2)
          + Math.pow(event.nativeEvent.touches[0].pageY - event.nativeEvent.touches[1].pageY, 2),
          );
          initDistend = distend;
      }
  }

  handlePanResponderMove = (event, gestureState) => {
      if (gestureState.numberActiveTouches === 2) {
          const distend = Math.sqrt(
              Math.pow(event.nativeEvent.touches[0].pageX - event.nativeEvent.touches[1].pageX, 2)
          + Math.pow(event.nativeEvent.touches[0].pageY - event.nativeEvent.touches[1].pageY, 2),
          );
          let scaleNumber = (distend - initDistend) / 100;
          if (scaleNumber > 5) {
              scaleNumber = 5;
          } else if (scaleNumber < -0.5) {
              scaleNumber = -0.5;
          }
          this.setState({
              scaleNumber,
          });
      }
  };

  countImageSize = (imgName) => {
      let imgHeight = 0;
      if (typeof imgName === 'string') {
          if (imgName.indexOf('http://') !== -1 || imgName.indexOf('https://') !== -1) {
              /**
         * Image.getSize在安卓平台会报
         * Exception in native call
         * java.lang.ClassCastException: com.facebook.react.bridge.ReadableNativeMap cannot be cast to java.lang.String
         * 所以暂时在iOS平台上用
         */
              if (Platform.OS === 'ios') {
                  Image.getSize({ uri: imgName }, (realWidth, realHeight) => {
                      console.log(`realWidth${realWidth}  realHeight${realHeight}`);
                      imgHeight = width * realHeight / realWidth;
                  });
              }
          }
      } else {
          const imgInfo = Image.resolveAssetSource(imgName);
          imgHeight = width * imgInfo.height / imgInfo.width;
      }

      return imgHeight;
  };

  render() {
      const {
          photoZoomStyle, sourceImg, photoDefaultImg, onPressCallback, onLongPressCallBack,
      } = this.props;
      const { scaleNumber } = this.state;
      const imgHeight = this.countImageSize(sourceImg);
      const realHeight = imgHeight > 0 ? imgHeight : height - 2 * topHeight;

      return (
          <View
              style={[styles.container, photoZoomStyle, { height: realHeight }]}
              {...this.pinchResponder.panHandlers}
          >
              <TouchableOpacity
                  style={photoZoomStyle}
                  onPress={() => onPressCallback()}
                  onLongPress={() => onLongPressCallBack()}
                  activeOpacity={1}
              >
                  <Image
                      source={sourceImg}
                      defaultSource={photoDefaultImg}
                      style={[styles.imageStyle, { height: realHeight * (1 + scaleNumber), width: width * (1 + scaleNumber) }]}
                  />
              </TouchableOpacity>
          </View>
      );
  }
}

// 属性
PhotoZoomView.defaultProps = {
    photoZoomStyle: {},
    photoDefaultImg: require('../../assets/images/img_bannerDefualt.png'),
    onPressCallback: undefined,
    onLongPressCallBack: undefined,
};

PhotoZoomView.propTypes = {
    // 布局
    photoZoomStyle: PropTypes.oneOfType([PropTypes.object]),
    // 图片资源
    sourceImg: PropTypes.oneOfType([PropTypes.any]).isRequired,
    // 默认图片
    photoDefaultImg: PropTypes.oneOfType([PropTypes.any]),
    // 点击事件
    onPressCallback: PropTypes.func,
    // 长按事件
    onLongPressCallBack: PropTypes.func,
};

styles = StyleSheet.create({
    container: {
        width,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageStyle: {
        width,
        overflow: 'hidden',
        resizeMode: 'contain',
    },
    titleStyle: {
        fontSize: 16,
        color: '#E8E8E8',
    },
    textViewStyle: {
        width,
        height: 30,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'tomato',
    },
});
