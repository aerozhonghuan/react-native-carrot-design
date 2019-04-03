## Getting started

`$ npm install react-native-carrot-design --save`

## Usage
`javascript`
All you need is to import { AlertView } from the react-native-carrot-design module and then use the tag.
`Example import`

```
...
render() {
    return (
      <View style={styles.container}>
        ...
        <AlertView
            title="修改姓名"
            contentType={AlertView.DialogType.INPUT}
            content="请输入姓名"
            mainColor="red"
            alertCallback={(text) => {
                newUserName = text;
            }}
            okText="确定啦"
            cancelText="取消"
            onOk={() => {
                this.alertView.setAlertVisible(false);
            }}
            onCancel={() => {
                this.alertView.setAlertVisible(false);
                newUserName = '';
            }}
            isHideOnTouchOutside={true}
            isHideOnBackkey={true}
            ref={(alertView) => {
                this.alertView = alertView;
            }}
        />
      </View>
    );
 }
...
```
```
//TODO:Call setAlertVisible() when you want to set the display of the alert
this.alertView.setAlertVisible(visible:boolean);
```

## Properties

| Prop   | Default  | Type | Description | Required|
| :------------ |:---------------:| :---------------:|  :---------------:|:-----|
| alertWidth | - | `number` | 设置弹窗宽度 |  `false` |
| mainColor | `#FE2842` | `string` | 设置确认按钮颜色 |  `false` |
| title | - | `string` | 设置标题文案 |  `false `|
| content | - | `string` | 设置内容区域文案 |  `false `|
| okText | - | `string` | 设置确认按钮文案 |  `false `|
| cancelText | - | `string` | 设置取消按钮文案 |  `false `|
| contentType | `AlertView.DialogType.TEXT` | `AlertView.DialogType` | 设置内容区域类型,暂分为输入框和文本类型 |  `false `|
| alertInputMaxLength | - | `number` | 如果为输入类型,可控制输入最大长度 |  `false` |
| alertCallback | - | `function` | 如果为输入类型,可获取input回调的文案 |  `false `|
| onOk | - | `function` | 确认按钮点击事件 |  `false `|
| onCancel | - | `function` | 取消按钮点击事件 |  `false `|
| customContentView | - | `(Component)function` | 自定义view |  `false `|
| isHideOnTouchOutside | `false` | `boolean` | 点击空白区域是否可以隐藏alert  |  `false `|
| isHideOnBackkey | `false` | `boolean` | 点击back键是否隐藏alert  |  `false `|

## Instance Methods

| Method  | Params  | Description |
| :------------ |:---------------:| :---------------:|
| setAlertVisible | `visible:boolean` |Call setAlertVisible() when you want to set the display of the alert |
