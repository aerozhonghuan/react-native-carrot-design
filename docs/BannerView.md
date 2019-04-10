## Getting started

`$ npm install react-native-carrot-design --save`

## Usage
`javascript`
All you need is to import { BannerView } from the react-native-carrot-design module and then use the tag.
`Example import`

```
import { BannerView } from 'react-native-carrot-design';
```
### Datasource
```
const ImageData = {
    data:
    [
        {
            img: 'http://itg.sih.cq.cn/fs/group1/M00/00/BA/CoV6D1t-JKuAbFsBAATntu4O6OE001.jpg',
        },
        {
            img: require('../Demo/images/ic_banner1.png'),
        },
        {
            img: 'https://gss0.baidu.com/9fo3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/3812b31bb051f819dc048662dbb44aed2e73e7f1.jpg',
        },
        {
            img: require('../Demo/images/ic_banner3.png'),
        },
    ],
};
```
```
render() {
        return (
            <View style={styles.container}>
                {/* <BannerView */}
                {/* duration={2000} */}
                {/* pageIndexType={1} */}
                {/* pageIndexNormalImg={normalIcon} */}
                {/* pageIndexSelectImg={selectIcon} */}
                {/* bannerDefaultImg={defaultIcon} */}
                {/* bannerCache="force-cache" */}
                {/* bannerData={ImageData} */}
                {/* bannerKey="img" */}
                {/* onPressCallback={item => this.touchBanner(item)} */}
                {/* /> */}
                <BannerView
                    pageIndexType={0}
                    pageIndexNormalColor="#E8E8E8"
                    pageIndexSelectColor="tomato"
                    bannerDefaultImg={defaultIcon}
                    bannerStyle={{ width, height: 100 }}
                    bannerImageStyle={{ width, height: 100 }}
                    pageIndexViewMoreStyle={{ width, height: 25 }}
                    bannerData={ImageData}
                    bannerKey="img"
                    onPressCallback={item => this.touchBanner(item)}
                />
            </View>
            
        touchBanner = (item) => {
             console.log(`数据-打印：${item.index}`);
        }
```

## Properties
| Prop   | Default  | Type | Description | Required|
| :------------ |:---------------:| :---------------:|  :---------------:|:-----|
| onPressCallback | none | `func` | Click event |  `false `|
| pageIndexType | none | `func` | 0 means use `•`; 1 to replace the picture |  `true `|
| pageIndexNormalColor | `#E8E8E8` | `string` | Default when pageIndexType == 0 |  `false `|
| pageIndexSelectColor | `orange` | `string` | When pageIndexType == 0, the selected color |  `false `|
| pageIndexNormalImg | none | `any` | pageIndexType == 1 when the default image |  `false `|
| pageIndexSelectImg | none | `any` | pageIndexType == 1 when the selected image|  `false `|
| duration | `2000` | `number` | Executed every few milliseconds |  `false `|
| bannerDefaultImg | `img_bannerDefualt` | `any` | Default picture |  `false `|
| bannerData | none | `object` | Banner data source |  `true `|
| bannerKey | none | `string` | Banner image key |  `true `|
| bannerCache | `default` | `string` | Banner cache strategy |  `false `|
| bannerStyle | none | `object` | Container layout |  `false `|
| bannerImageStyle | none | `object` | Banner image layout |  `false `|
| pageIndexViewMoreStyle | none | `object` | Page indicator layout |  `false `|
| pageIndexMoreStyle | none | `object` | Page indicator icon layout |  `false `|
