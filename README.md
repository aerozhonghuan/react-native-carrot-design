
# react-native-carrot-design
This is the React Native custom UI components library, It's components for android and iOS.

## Getting started

`$ npm install react-native-carrot-design --save`

## Usage
`javascript`
**Example import**
```
import { ButtonView, CornerTextView, LoadingView, AlertView } from 'react-native-carrot-design';
```

**ButtonView:**
All you need is to import { ButtonView } from the react-native-carrot-design module and then use the <ButtonView/> tag.
```
import React, { Component } from 'react';
import { ButtonView } from 'react-native-carrot-design';
...
<ButtonView activeOpacity={0.6} btnTitleStyle={{color:'blue',fontSize:19}} 
     btnViewStyle={{backgroundColor:'red'}} title='自定义按钮' onPressCallback={()=>{
          alert('pressBtn!');
     }}>
</ButtonView>
...
```

**CornerTextView:**
```
<CornerTextView cornerStyle={{backgroundColor:'orange',width:89}} title="title" textStyle={{color:'red'}}></CornerTextView>
```

**LoadingView**

*note:*
**The LoadingView tag must be the last child of the outermost layout.**

```
...
render() {
    return (
      <View style={styles.container}>
        ...
        ...
        <LoadingView ref={r=>{this.Loading = r}} hide = {true} />
      </View>
    );
 }
  ...
  
```
```
  
//TODO:Call show() when you want to show loading
this.Loading.show();
  
//TODO:Call close() when you want to close loading
this.Loading.close();
  ...
  
  
```

**AlertView**

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
**BannerView**

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

## More detailed subcomponent documentation
[ButtonView doc](https://github.com/rocket-developer/react-native-carrot-design/blob/master/docs/ButtonView.md)

[CornerTextView doc](https://github.com/rocket-developer/react-native-carrot-design/blob/master/docs/CornerTextView.md)

[LoadingView doc](https://github.com/rocket-developer/react-native-carrot-design/blob/master/docs/LoadingView.md)

[AlertView doc](https://github.com/rocket-developer/react-native-carrot-design/blob/master/docs/AlertView.md)

[BannerView doc](https://github.com/aerozhonghuan/react-native-carrot-design/blob/develop/docs/BannerView.md)

  
