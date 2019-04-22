import React, { Component } from 'react';
import {
    StyleSheet, View, TouchableOpacity, Image,
} from 'react-native';
import { PictureBrowserView } from 'react-native-carrot-design';

let styles;

const ImageData = {
    data:
      [
          {
              img: 'http://www.hangge.com/blog/images/logo.png',
              title: '网站Logo',
          },
          {
              img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555781177969&di=39d933897f4326e9d89e9c681a6ca9ad&imgtype=0&src=http%3A%2F%2Fwx1.sinaimg.cn%2Forj360%2Fdd2e61f7gy1g0xr9gxtzuj20rs3ak7kv.jpg',
              title: '一排大卡车',
          },
          {
              img: 'https://gss0.baidu.com/9fo3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/3812b31bb051f819dc048662dbb44aed2e73e7f1.jpg',
              title: '国宝大熊猫',
          },
          {
              img: require('../assets/imags/Banner_browser.png'),
              title: '健身记录',
          },
      ],
};

export default class App extends Component {
    constructor(props) {
    // 构造函数
        super(props);
        this.state = {
            // 控制图片浏览组件的展示与隐藏
            showPic: false,
            // 控制保存到本地的弹窗的展示与隐藏
            showSaveAlter: false,
            // 当前选择的图片
            currentIndex: 0,
        };
    }

  // 展示图片浏览组件
  touchBanner = (index) => {
      console.log(`数据-打印banner：${index}`);
      this.setState({
          showPic: true,
          currentIndex: index,
      });
  };

  // 隐藏图片浏览组件
  touchPic = (index) => {
      console.log(`数据-打印Pic：${index}`);
      this.setState({
          showPic: false,
          currentIndex: 0,
      });
  };

  // 返回需要保存图片的索引
  savePic = (index) => {
      console.log(`数据-打印Pic：${index}`);
      this.setState({
          showSaveAlter: false,
      });
  };

  render() {
      const { showPic, currentIndex, showSaveAlter } = this.state;

      return (
          <View style={styles.container}>
              <TouchableOpacity
                  style={styles.imageTouchStyle}
                  onPress={() => this.touchBanner(0)}
                  activeOpacity={1}
              >
                  <Image
                      source={{ uri: 'http://www.hangge.com/blog/images/logo.png' }}
                      style={styles.imageTouchStyle}
                  />
              </TouchableOpacity>
              <TouchableOpacity
                  style={styles.imageTouchStyle}
                  onPress={() => this.touchBanner(1)}
                  activeOpacity={1}
              >
                  <Image
                      source={{ uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555781177969&di=39d933897f4326e9d89e9c681a6ca9ad&imgtype=0&src=http%3A%2F%2Fwx1.sinaimg.cn%2Forj360%2Fdd2e61f7gy1g0xr9gxtzuj20rs3ak7kv.jpg' }}
                      style={styles.imageTouchStyle}
                  />
              </TouchableOpacity>
              <TouchableOpacity
                  style={styles.imageTouchStyle}
                  onPress={() => this.touchBanner(2)}
                  activeOpacity={1}
              >
                  <Image
                      source={{ uri: 'https://gss0.baidu.com/9fo3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/3812b31bb051f819dc048662dbb44aed2e73e7f1.jpg' }}
                      style={styles.imageTouchStyle}
                  />
              </TouchableOpacity>
              <TouchableOpacity
                  style={styles.imageTouchStyle}
                  onPress={() => this.touchBanner(3)}
                  activeOpacity={1}
              >
                  <Image
                      source={require('../Demo/images/test.png')}
                      style={styles.imageTouchStyle}
                  />
              </TouchableOpacity>
              <PictureBrowserView
                  modalVisible={showPic}
                  browserData={ImageData}
                  browserKey="img"
                  browserNameKey="title1"
                  isHideSavePhotoView={showSaveAlter}
                  currentTapIndex={currentIndex}
                  onSaveCallback={item => this.savePic(item)}
                  onPressCallback={item => this.touchPic(item)}
              />
          </View>
      );
  }
}

styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageTouchStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 300,
        height: 100,
    },
});
