<!--
 * @Description: TabSelectView
 * @Author: wanglh
 * @Date: 2020-06-03 16:20:49
 * @LastEditors: wanglh
 * @LastEditTime: 2020-06-03 16:53:24
--> 
## Getting started

`$ npm install react-native-carrot-design --save`

## Usage
`javascript`
All you need is to import { TabSelectView } from the react-native-carrot-design module and then use the tag.
`Example import`

```
import { TabSelectView } from 'react-native-carrot-design';

```

```
...
constructor(props) {
        super(props);
        this.tapArr = [{ title: '外观' }, { title: '驾驶室' }, { title: '底盘' }, { title: '上装' }, { title: 'VR' }];
        this.state = {
            tapDataSource: this.tapArr,
            selectIndex: 0, // 默认选中第一个按钮
        };
    }
    /**
     * @description: tab选择
     * @param {item} 所选类型
     * @param {selIndex} 所选类型的索引
     */
    selectTab = (item, selIndex) => {
        const { selectIndex } = this.state;
        if (selIndex === selectIndex) {
            return;
        }
        this.setState({
            selectIndex: selIndex,
        }, () => {
            console.log(this.state.selectIndex);
        });
    }

    render() {
        const { tapDataSource, selectIndex } = this.state;
        return (
            <View style={styles.container}>
                <TabSelectView
                    jsonKey="title"
                    bgViewStyle={styles.listHeader}
                    itemTitleNormalStyle={styles.headerItemTitleNormalStyle}
                    itemTitleSelectStyle={styles.headerItemTitleNormalStyle}
                    itemLineStyle={styles.headerCellBottomLine}
                    dataSource={tapDataSource}
                    selectIndex={selectIndex}
                    selectCallback={this.selectTab}
                />
            </View>
        );
    }
  ...
  
```

详细代码见demo
## Properties

| Prop   | Default  | Type | Description | Required|
| :------------ |:---------------:| :---------------:|  :---------------:|:-----|
| selectCallback | none | `func` | Click event (item:object, index: number)|  `false `|
| dataSource | none | `array ` | 需要展示的tab项数据源数组，比如[{title:'视频介绍'},{title:'车型介绍'}]|  `true `|
| jsonKey | none | `string ` | 需要展示的tab项文本对应的json数据源的key，比如title |  `true `|
| selectIndex | `0` | `number` | 默认选中的tab项的索引 |  `false `|
| showBtnBottomLine | true | `boolean` |是否显示按钮下划线，默认显示 |  `false `|
| bgViewStyle | none | `ViewStyle` | 整个tabView的布局，默认高为44，宽为屏幕宽 |  `false `|
| itemStyle | none | `ViewStyle` | 单个按钮的布局，默认高为44，宽为屏幕宽/按钮个数 |  `false `|
| itemTitleNormalStyle | none | `ViewStyle` | 按钮标题的默认样式，默认fontSize: 15,color: '#666666' |  `false `|
| itemTitleSelectStyle | none | `ViewStyle` | 按钮标题的选中样式，默认fontSize: 15,color: '#666666' |  `false `|
| itemLineStyle | none | `ViewStyle` |按钮下划线的样式，默认高4，宽30,backgroundColor:'#EC192E' |  `false `|
| renderItem | ... | `function:(item:object)=>React.ReactElement` | Renderer for every item in every section |  `false `|
| activeOpacity | `1` | `number` |按钮点击时的透明效果(0~1)，默认1 |  `false `|