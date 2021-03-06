/**
 * @Description:Banner图
 * @Author: lp1
 * @LastEditors: lp1
 * @Date: 2019/4/1 10:59 AM
 * @LastEditTime: 2019/4/1 10:59 AM
 */
import React, { Component } from 'react';
import {
  ScrollView, StyleSheet, View, Image, Text, TouchableOpacity, Platform, Dimensions, ViewPagerAndroid,
} from 'react-native';
import PropTypes from 'prop-types';
// 布局
let styles;
// 当前banner需要偏移的（width的整数倍）量
let currentBanner = 1;
// 是否滚动了
let isScroll = false;
// banner图片总数
let allImgCount = 0;
// 是否替换首部banner
let isChange = false;
// 图片数组
let allImage = [];
const { width } = Dimensions.get('window');

export default class BannerView extends Component {
  constructor(props) {
    // 构造函数
    super(props);
    this.state = {
      currentPage: 0,
    };
  }

  componentDidMount() {
    // 开启定时器
    const { bannerCanScroll } = this.props;
    if (bannerCanScroll) {
      this.startTime();
    }
  }

  componentWillUnmount() {
    if (this.timer) {
      clearTimeout(this.timer);
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
      bannerImageStyle, onPressCallback, bannerDefaultImg, bannerData, bannerKey, bannerCache,
    } = this.props;
    const imageArrs = bannerData.data;
    const imageCount = bannerData.data.length;

    if (allImgCount !== imageCount + 2) {
      for (let i = 0; i < imageCount; i += 1) {
        const imageItem = imageArrs[i];
        const sourceImg = this.isURLImg(imageItem[bannerKey], bannerCache);
        imageItem.index = i;
        // 创建组件放入数组
        allImage.push(
            <TouchableOpacity onPress={() => onPressCallback(imageItem.index)} activeOpacity={1}>
              <Image
                  key={i}
                  source={sourceImg}
                  defaultSource={bannerDefaultImg}
                  style={[styles.imageStyle, bannerImageStyle]}
              />
            </TouchableOpacity>,
        );
      }
      // 拼接尾部
      const firstImg = this.isURLImg(imageArrs[0][bannerKey], bannerCache);
      imageArrs[0].index = 0;
      allImage.push(
          <TouchableOpacity onPress={() => onPressCallback(0)} activeOpacity={1}>

            <Image
                key={imageCount}
                source={firstImg}
                defaultSource={bannerDefaultImg}
                style={[styles.imageStyle, bannerImageStyle]}
            />
          </TouchableOpacity>,
      );
      // 插入首部
      const lastImg = this.isURLImg(imageArrs[imageCount - 1][bannerKey], bannerCache);
      imageArrs[imageCount - 1].index = imageCount - 1;
      allImage.unshift(
          <TouchableOpacity onPress={() => onPressCallback(imageCount - 1)} activeOpacity={1}>

            <Image
                key={-1}
                source={lastImg}
                defaultSource={bannerDefaultImg}
                style={[styles.imageStyle, bannerImageStyle]}
            />
          </TouchableOpacity>,
      );

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
   * 加载页数指示器
   * @returns {Array}
   */
  renderPageIndex = () => {
    // 数组
    const indicatorArr = [];
    // state
    const { currentPage } = this.state;
    const {
      pageIndexType, pageIndexNormalColor,
      pageIndexSelectColor, pageIndexNormalImg, pageIndexSelectImg, pageIndexMoreStyle, bannerData,
    } = this.props;
    const imageCount = bannerData.data.length;

    // 样式
    if (pageIndexType === 0) {
      let style;
      for (let i = 0; i < imageCount; i += 1) {
        style = (i === currentPage) ? { color: pageIndexSelectColor } : { color: pageIndexNormalColor };
        indicatorArr.push(
            <Text key={i} style={[styles.pageIndexStyle, style, pageIndexMoreStyle]}>•</Text>,
        );
      }
    } else {
      let source;
      for (let i = 0; i < imageCount; i += 1) {
        source = (i === currentPage) ? pageIndexSelectImg : pageIndexNormalImg;
        indicatorArr.push(
            <Image
                key={i}
                source={source}
                style={[styles.pageIndexImgStyle, pageIndexMoreStyle]}
            />,
        );
      }
    }

    return indicatorArr;
  };

  /**
   * 滑动停止 (ios 自动滚动也会调用 andriod自动滚动不调用，手动拖拽，滑动停止会调用)
   * @param e
   */
  onAnimationEnd = (e) => {
    if (Platform.OS !== 'android') {
      this.scrollDeal(e);
    }
  };

  /**
   * 开始拖拽
   */
  onScrollerBeginDrag = () => {
    const { bannerCanScroll } = this.props;
    if (bannerCanScroll) {
      clearInterval(this.timer);
    }
  };

  /**
   * 停止拖拽
   */
  onScrollEndDrag = () => {
    const { bannerCanScroll } = this.props;
    if (bannerCanScroll) {
      clearInterval(this.timer);
      this.startTime();
    }
  };

  /**
   * 开启定时器
   * @param pageOffSet
   */
  startTime = () => {
    const { duration, bannerStyle, bannerData } = this.props;
    const imageCount = bannerData.data.length;
    let activePage = currentBanner;

    this.timer = setInterval(() => {

      if (Platform.OS === 'android') {
        if (activePage === imageCount + 1) {
          activePage = 2
        } else {
          activePage += 1;
        }

        this.pageView.setPage(activePage);
      } else {
        let offSetX = 0;

        if (typeof bannerStyle.width === 'undefined') {
          bannerStyle.width = styles.imageStyle.width;
        }

        if (activePage === currentBanner + 1) {
          activePage = currentBanner - 1;
        }
        if (currentBanner === imageCount) {
          offSetX = (imageCount + 1) * bannerStyle.width;
          activePage = 1;
        } else {
          activePage += 1;
          if (activePage === imageCount + 1) {
            activePage = currentBanner;
          }
          offSetX = activePage * bannerStyle.width;
        }
        this.scrollerView.scrollTo({ x: offSetX, y: 0, animated: true });
      }
    }, duration);
  };
  /**
   * 页面的处理
   * @param e
   */
  scrollDeal = (e) => {

    const { bannerStyle, bannerData } = this.props;
    const imageCount = bannerData.data.length;

    if (Platform.OS === 'ios') {
      if (typeof bannerStyle.width === 'undefined') {
        bannerStyle.width = styles.imageStyle.width;
      }
      const offsetX = e.nativeEvent.contentOffset.x;
      const offsetXStr = `${offsetX / bannerStyle.width}`;
      // 对应页面指示器的索引
      let currentPage = Math.floor(offsetX / bannerStyle.width);

      if (offsetXStr.indexOf('.') === -1) {
        currentBanner = currentPage;
        if (currentPage === imageCount + 1) {
          this.scrollerView.scrollTo({ x: bannerStyle.width, y: 0, animated: false });
          currentPage = 0;
          currentBanner = 1;
        } else if (currentPage === 0 && allImgCount === imageCount + 2) {
          this.scrollerView.scrollTo({ x: imageCount * bannerStyle.width, y: 0, animated: false });
          currentPage = imageCount - 1;
          currentBanner = imageCount;
        } else if (currentPage > 0) {
          currentPage -= 1;
        }
        this.setState({
          currentPage,
        });
      }
    } else {
      if (e.nativeEvent.position === imageCount + 1) {
        this.pageView.setPageWithoutAnimation(1)
        currentPage = 0;
        currentBanner = 1;
      } else if (e.nativeEvent.position === 0) {
        this.pageView.setPageWithoutAnimation(imageCount)
        currentPage = imageCount - 1;
        currentBanner = imageCount;
      } else {
        currentPage = e.nativeEvent.position - 1;
        currentBanner = e.nativeEvent.position
      }
      this.setState({
        currentPage,
      });
    }

  };
  /**
   * 安卓 ViewPagerAndroid
   * 手动切换 页面切换完成后 调用
   */
  pageScrollEnd = (e) => {
    const { bannerCanScroll } = this.props;
    this.scrollDeal(e);
    if (bannerCanScroll) {
      clearInterval(this.timer);
      this.startTime();
    }
  }
  /**
   * 页间切换时 执行
   *
   */
  pageScroll = (e) => {
    if (e.nativeEvent.offset === 0) {
      this.scrollDeal(e);
    }
  }

  /**
   * 页面滑动状态变化时调用此回调函数
   *
   * */
  pageChange = (e) => {
    const { bannerCanScroll } = this.props;
    if (e.nativeEvent.pageScrollState === 'dragging') {
      if (bannerCanScroll) {
        clearInterval(this.timer);
      }
    }
  }

  render() {
    const {
      bannerStyle, pageIndexViewMoreStyle,
    } = this.props;
    if (typeof bannerStyle.width === 'undefined') {
      bannerStyle.width = styles.imageStyle.width;
    }
    if (Platform.OS === 'ios') {
      return (
          <View style={[styles.container, bannerStyle]}>
            <ScrollView
                ref={(scrollerView) => { this.scrollerView = scrollerView; }}
                style={[styles.scrollViewStyle, bannerStyle]}
                horizontal
                pagingEnabled
                // 该属性只在iOS上有用
                contentOffset={{ x: bannerStyle.width, y: 0 }}
                showsHorizontalScrollIndicator={false}
                // 滚动动画结束时调用此函数
                onMomentumScrollEnd={e => this.onAnimationEnd(e)}
                // 开始拖拽
                onScrollBeginDrag={() => this.onScrollerBeginDrag()}
                // 停止拖拽
                onScrollEndDrag={() => this.onScrollEndDrag()}
                scrollEventThrottle={0}
            >
              { this.loadImages() }
            </ScrollView>
            <View style={[styles.pageViewStyle, pageIndexViewMoreStyle]}>
              { this.renderPageIndex() }
            </View>
          </View>
      );
    }
    return (
        <View style={[styles.container, bannerStyle]}>
          <ViewPagerAndroid
              ref={(pageView) => { this.pageView = pageView; }}
              style={[styles.scrollViewStyle, bannerStyle]}
              initialPage={1}
              onPageScroll={e => this.pageScroll(e)}
              onPageSelected={e => this.pageScrollEnd(e)}
              onPageScrollStateChanged = {e => this.pageChange(e)}
          >
            { this.loadImages() }
          </ViewPagerAndroid>
          <View style={[styles.pageViewStyle, pageIndexViewMoreStyle]}>
            { this.renderPageIndex() }
          </View>
        </View>
    );
  }
}
// 属性
BannerView.defaultProps = {
  pageIndexNormalColor: '#E8E8E8',
  pageIndexSelectColor: 'orange',
  bannerCache: 'default',
  duration: 2000,
  bannerData: undefined,
  onPressCallback: undefined,
  pageIndexSelectImg: undefined,
  pageIndexNormalImg: undefined,
  bannerDefaultImg: require('../assets/images/img_bannerDefualt.png'),
  pageIndexMoreStyle: {},
  bannerStyle: {},
  bannerImageStyle: {},
  pageIndexViewMoreStyle: {},
  bannerCanScroll: false,
};
BannerView.propTypes = {
  // 点击事件
  onPressCallback: PropTypes.func,
  // 0 表示用 • 1表示用图片替代
  pageIndexType: PropTypes.number.isRequired,
  // pageIndexType == 0时 默认颜色
  pageIndexNormalColor: PropTypes.string,
  // 选中的颜色
  pageIndexSelectColor: PropTypes.string,
  // pageIndexType == 0时 默认图
  pageIndexNormalImg: PropTypes.oneOfType([PropTypes.any]),
  // 选中的图
  pageIndexSelectImg: PropTypes.oneOfType([PropTypes.any]),
  // 每隔多少秒执行一次
  duration: PropTypes.number,
  // 默认图片
  bannerDefaultImg: PropTypes.oneOfType([PropTypes.any]),
  // banner的数据源
  bannerData: PropTypes.shape({
    data: PropTypes.array.isRequired,
  }),
  // banner图片的key
  bannerKey: PropTypes.string.isRequired,
  // banner cache策略
  bannerCache: PropTypes.string,
  // 容器的布局
  bannerStyle: PropTypes.oneOfType([PropTypes.object]),
  // banner布局
  bannerImageStyle: PropTypes.oneOfType([PropTypes.object]),
  // 页面指示器的布局
  pageIndexViewMoreStyle: PropTypes.oneOfType([PropTypes.object]),
  // 页面指示器图标的布局
  pageIndexMoreStyle: PropTypes.oneOfType([PropTypes.object]),
  // 是否允许banner自动滚动
  bannerCanScroll: PropTypes.bool,

};

styles = StyleSheet.create({
  container: {
    height: width * 0.5,
    width,
  },
  imageStyle: {
    height: width * 0.5,
    width,
    overflow: 'hidden',
  },
  scrollViewStyle: {

  },
  pageViewStyle: {
    width,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
  },
  pageIndexStyle: {
    fontSize: 25,
  },
  pageIndexImgStyle: {
    width: 20,
    height: 20,
  },
});
