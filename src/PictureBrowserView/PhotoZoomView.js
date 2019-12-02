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
// 图片总数
let allImgCount = 0;
// 图片数组
let allImage = [];
const { width, height } = Dimensions.get('window');
const topHeight = 60;

export default class PictureBrowserView extends Component {
  constructor(props) {
    // 构造函数
    super(props);

    this.state = {
      currentPage: 1,
      // 展示保存图片的弹窗
      showAlter: false,
    };
  }

  componentWillReceiveProps(nextProps) {
    const { currentTapIndex, isHideSavePhotoView } = this.props;
    if (!isHideSavePhotoView) {
      this.alterSaveViewClose();
    }
    if (nextProps.currentTapIndex > currentTapIndex || nextProps.currentTapIndex === 0) {
      this.setState({
        currentPage: nextProps.currentTapIndex + 1,

      });
    }
  }

  /**
   * 加载图片
   * @returns {Array}
   */
  loadImages = () => {
    // 移除旧数据
    allImgCount = 0;
    allImage = [];

    const {
      onPressCallback, browserDefaultImg,
      browserData, browserKey, browserCache,
    } = this.props;
    const imageArrs = browserData.data;
    const imageCount = browserData.data.length;

    if (allImgCount <= 0) {
      for (let i = 0; i < imageCount; i += 1) {
        const imageItem = imageArrs[i];
        const sourceImg = this.isURLImg(imageItem[browserKey], browserCache);
        imageItem.index = i;
        // 创建组件放入数组
        allImage.push(
            <View>
              <ScrollView
                  contentContainerStyle={styles.scrollImageStyle}
                  // 子组件(图片)放大倍数 iOS平台适用
                  maximumZoomScale={5}
                  // 子组件(图片)缩小倍数 iOS平台适用
                  minimumZoomScale={0.5}
                  // 居于scrollView中心 iOS平台适用
                  centerContent
                  showsHorizontalScrollIndicator={false}
                  // 只允许横向或纵向移动
                  directionalLockEnabled
                  scrollEventThrottle={16}
              >
                <PhotoZoomView
                    photoZoomStyle={styles.imageTouchStyle}
                    sourceImg={sourceImg}
                    photoDefaultImg={browserDefaultImg === undefined ? undefined: browserDefaultImg}
                    onPressCallback={() => onPressCallback(imageItem.index)}
                    onLongPressCallBack={() => this.alterSaveViewShow()}
                />
              </ScrollView>
            </View>,
        );
      }
    }

    allImgCount = allImage.length;
    // 返回数组
    return allImage;
  };

  /**
   * 判断是网络图片还是本地图片
   */
  isURLImg = (imgName, cacheStr) => {
    if (typeof imgName === 'string') {
      if (imgName.indexOf('http://') !== -1 || imgName.indexOf('https://') !== -1) {
        return { uri: imgName, cache: cacheStr };
      }
    }
    return imgName;
  };

  /**
   * 滑动停止 (ios 自动滚动也会调用 andriod自动滚动不调用，手动拖拽，滑动停止会调用)
   * @param e
   */
  onAnimationEnd = (e) => {
    const offsetX = e.nativeEvent.contentOffset.x;
    // 对应页面指示器的索引
    const currentIndex = Math.floor(offsetX / width) + 1;
    console.log(`数据--currentIndex=${currentIndex}`);
    this.setState({
      currentPage: currentIndex,
    });
  };

  pageScrollEnd = (e) => {
    const { position } = e.nativeEvent;
    console.log(`数据--position=${position}`);
    this.setState({
      currentPage: position + 1,
    });
  };

  /**
   * 保存图片的的弹框展示
   */
  alterSaveViewShow = () => {
    const { drawSaveButton } = this.props;

    if (drawSaveButton) {
      this.setState({
        showAlter: true,
      });
    }

  };

  alterSaveView = () => {
    const { browserKey, browserData, onSaveCallback, drawSaveButton } = this.props;
    if (drawSaveButton) {
      const { showAlter, currentPage } = this.state;
      const URI = browserData.data[currentPage - 1][browserKey];
      if (showAlter) {
        return (
            <PictureBrowserSaveView
                modalVisible={showAlter}
                currentURI={URI}
                onPressCallback={() => this.alterSaveViewClose()}
                saveCallBack={() => onSaveCallback(currentPage - 1)}
            />
        );
      }
      return null;
    }
    return null
  };

  alterSaveViewClose = () => {
    this.setState({
      showAlter: false,
    });
  };

  render() {
    const {
      browserStyle, modalVisible, currentTapIndex, browserData, browserNameKey,
    } = this.props;

    const imageArrs = browserData.data;
    const { currentPage } = this.state;

    let titleStr;
    if (browserNameKey === ''){
      titleStr = '';
    } else {
      titleStr = `${imageArrs[currentPage - 1][browserNameKey] === undefined ? '' : imageArrs[currentPage - 1][browserNameKey]}`
    }

    if (Platform.OS === 'ios') {
      return (
          <Modal
              animationType="none"
              transparent
              visible={modalVisible}
              onRequestClose={() => {
                console.log('关闭图片浏览器');
              }}
          >
            <View
                style={[styles.container, browserStyle]}
            >
              <View style={styles.textViewStyle}>
                <Text style={styles.titleStyle}>{titleStr}</Text>
              </View>
              <ScrollView
                  style={[styles.scrollViewStyle, browserStyle]}
                  horizontal
                  pagingEnabled
                  showsHorizontalScrollIndicator={false}
                  scrollEventThrottle={16}
                  // 该属性只在iOS上有用
                  contentOffset={{ x: width * currentTapIndex, y: 0 }}
                  // 滚动动画结束时调用此函数
                  onMomentumScrollEnd={e => this.onAnimationEnd(e)}
              >
                { this.loadImages() }
              </ScrollView>
              <View style={styles.textViewStyle}>
                <Text style={styles.pageIndexStyle}>{`${currentPage}/${imageArrs.length}`}</Text>
              </View>
              {this.alterSaveView()}
            </View>
          </Modal>
      );
    }
    return (
        <Modal
            animationType="none"
            transparent
            visible={modalVisible}
            onRequestClose={() => {
              console.log('关闭图片浏览器');
            }}
        >
          <View
              style={[styles.container, browserStyle]}
          >
            <View style={styles.textViewStyle}>
              <Text style={styles.titleStyle}>
                {titleStr}
              </Text>
            </View>
            <ViewPagerAndroid
                style={[styles.pageViewAndriodStyle, browserStyle]}
                initialPage={currentTapIndex}
                onPageSelected={e => this.pageScrollEnd(e)}
            >
              { this.loadImages() }
            </ViewPagerAndroid>
            <View style={styles.textViewStyle}>
              <Text style={styles.pageIndexStyle}>{`${currentPage}/${imageArrs.length}`}</Text>
            </View>
            {this.alterSaveView()}
          </View>
        </Modal>
    );
  }
}

// 属性
PictureBrowserView.defaultProps = {
  browserCache: 'default',
  onPressCallback: undefined,
  onSaveCallback: undefined,
  browserData: undefined,
  browserDefaultImg: undefined,
  browserNameKey: '',
  browserStyle: {},
  drawSaveButton: false,
};
PictureBrowserView.propTypes = {
  // 当前索引
  currentTapIndex: PropTypes.number.isRequired,
  // 是否展示
  modalVisible: PropTypes.bool.isRequired,
  // 点击事件退出图片浏览事件
  onPressCallback: PropTypes.func,
  // 保存的图的信息事件
  onSaveCallback: PropTypes.func,
  // 是否隐藏保存弹窗
  isHideSavePhotoView: PropTypes.bool.isRequired,
  // 默认图片
  browserDefaultImg: PropTypes.oneOfType([PropTypes.any]),
  // 图片浏览器的数据源
  browserData: PropTypes.shape({
    data: PropTypes.array.isRequired,
  }),
  // 图片的key
  browserKey: PropTypes.string.isRequired,
  // 图片name的key
  browserNameKey: PropTypes.string,
  // cache策略
  browserCache: PropTypes.string,
  // 容器的布局
  browserStyle: PropTypes.oneOfType([PropTypes.object]),
  // 是否绘制保存选择按钮
  drawSaveButton: PropTypes.bool,
};

styles = StyleSheet.create({
  container: {
    height,
    width,
    backgroundColor: 'rgba(0, 0, 0, 1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageTouchStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    width,
  },
  scrollImageStyle: {
    alignItems: 'center',
  },
  scrollViewStyle: {
    flex: 1,
  },
  pageViewAndriodStyle: {
    height: height - 2 * topHeight,
    width,
  },
  textViewStyle: {
    width,
    height: topHeight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleStyle: {
    fontSize: 16,
    color: '#E8E8E8',
    marginTop: 25,
  },
  pageIndexStyle: {
    fontSize: 16,
    color: '#E8E8E8',
    marginBottom: 10,
  },
});

