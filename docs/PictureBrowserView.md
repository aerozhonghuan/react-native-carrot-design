## Getting started

`$ npm install react-native-carrot-design --save`

## Usage
`javascript`
All you need is to import { PictureBrowserView } from the react-native-carrot-design module and then use the tag.
`Example import`

```
import { PictureBrowserView } from 'react-native-carrot-design';

```
### Datasource
```
`数据源只是用于测试`
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
```
```
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
                            source={require('../assets/imags/Banner_browser.png')}
                            style={styles.imageTouchStyle}
                      />
                </TouchableOpacity>
                <PictureBrowserView
                    modalVisible={showPic}
                    browserData={ImageData}
                    browserKey="img"
                    browserNameKey="title"
                    isHideSavePhotoView={showSaveAlter}
                    currentTapIndex={currentIndex}
                    onSaveCallback={item => this.savePic(item)}
                    onPressCallback={item => this.touchPic(item)}
                 />
            </View>
            
        touchBanner = (item) => {
             console.log(`数据-打印：${item.index}`);
        }
```

## Properties
| Prop   | Default  | Type | Description | Required|
| :------------ |:---------------:| :---------------:|  :---------------:|:-----|
| onPressCallback | none | `func` | Click event to exit image browsing event |  `false `|
| currentTapIndex | none | `func` | Currently displayed image index |  `true `|
| modalVisible | `false` | `bool` | Whether to show the image browser |  `false `|
| onSaveCallback | none | `string` | Saved image to local long press event |  `false `|
| isHideSavePhotoView | none | `bool` | Whether to hide the saved image to the local popup window |  `false `|
| browserDefaultImg | `require('../assets/images/img_bannerDefualt.png')` | `any` | Default image|  `false `|
| browserNameKey | none | `string` | Key of picture viewer image title |  `false `|
| browserData | none | `object` | Image browser data source |  `true `|
| browserKey | none | `string` | Key of picture browser image resource |  `true `|
| browserCache | `default` | `string` | Cache strategy |  `false `|
| browserStyle | none | `object` | Container layout |  `false `|
