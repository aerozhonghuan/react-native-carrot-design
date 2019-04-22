import React, { PureComponent } from 'react';
import {
    Dimensions,
    StyleSheet, View,
} from 'react-native';
import { BannerView } from 'react-native-carrot-design';

let styles;
const { width } = Dimensions.get('window');

const ImageData = {
    data:
      [
          {
              img: 'http://www.hangge.com/blog/images/logo.png',
              title: '网站Logo',
          },
          {
              img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555781177969&di=39d933897f4326e9d89e9c681a6ca9ad&imgtype=0&src=http%3A%2F%2Fwx1.sinaimg.cn%2Forj360%2Fdd2e61f7gy1g0xr9gxtzuj20rs3ak7kv.jpg',
              title: '网络图片',
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

export default class BannerViewDemo extends PureComponent {
    touchBanner = (index) => {
        console.log(`数据-打印：${index}`);
    };

    render() {
        return (
            <View style={styles.container}>
                <BannerView
                    pageIndexType={0}
                    pageIndexNormalColor="#E8E8E8"
                    pageIndexSelectColor="tomato"
                    bannerStyle={{ width, height: 100 }}
                    bannerImageStyle={{ width, height: 100 }}
                    pageIndexViewMoreStyle={{ width, height: 25 }}
                    bannerData={ImageData}
                    bannerKey="img"
                    onPressCallback={item => this.touchBanner(item)}
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
});
