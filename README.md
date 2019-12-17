
# react-native-carrot-design
This is the React Native custom UI components library, It's components for android and iOS.

## Getting started

`$ npm install react-native-carrot-design --save`

## Usage
`javascript`
**Example import**
We provide multiple UI components that you can import on demand, such as:

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
                    bannerCanScroll={true}
                    onPressCallback={item => this.touchBanner(item)}
                />
            </View>
            
        touchBanner = (item) => {
             console.log(`数据-打印：${item.index}`);
        }
```

**CollectionView**
```
const headerSource = [{ title: '第一组头部标题' }, { title: '第二组头部标题' }];
const dataSource = [
 [
    {key: '第一组--第一个item' }, {key: '第一组--第二个item', {key: '第一组--第三个item'}
], 
[
   // It is empty section
], [
   {key: '第三组--第一个item' }, {key: '第三组--第二个item'}]
]
...
render() {
    return (
      <View style={styles.container}>
        ...
        <CollectionView ref={r => { this.CollectionView = r }}
          headerSource={headerSource}
          dataSource={dataSource}
          renderItem={this.renderItem} 
          sectionStyle={styles.sectionViewStyle} 
          itemStyle={styles.itemViewStyle}
          renderHeaderComponent={this.rendHeaderComponent}
          renderFooterComponent={this.rendFooterComponent}
          renderEmptyComponent={this.rendEmptyComponent}
          renderSectionHeader={this.renderSectionHeader}
          renderSectionFooter={this.renderSectionFooter} 
          renderSectionSeparator={this.renderSectionSeparator} 
          renderSectionEmptyComponent={this.renderSectionEmptyComponent}
          renderItemSeparator={this.renderItemSeparator}
          stickySectionHeadersEnabled={true}
          initialNumToRender={20}
          onEndReached={this.onEndReached}
          onEndReachedThreshold={0.5}
          inverted={false}
        >
        </CollectionView>
        ...
      </View>
    );
 }
  ...
  ```
```

/**
   * @description: Renderer for every item in every section.
   * @param {item}: The dataSource of the item.
   * @param {sectionIndex}: The index of the section of the current item.
   * @param {itemIndex}: The index of the current item.
   * @return: React.ReactElement | null
   */
  renderItem = (item, sectionIndex, itemIndex) => (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => {
        alert(`I'm ${item.key}`);
      }}
    >
      <Text style={styles.rowText}>{item.key}</Text>
    </TouchableOpacity>
  )

  /**
   * @description: Rendered at the top of each section. Sticky headers are not yet supported.
   * @param {headerItem}: The dataSource of the header.
   * @param {sectionIndex}: The index of the section
   * @return: React.ReactElement | null
   */
  renderSectionHeader = (headerItem, sectionIndex) => {
    return (
      <Text style={styles.sectionHeader}>第{sectionIndex}组:sectionHeaderComponent</Text>
    )
  }

  /**
   * @description: Rendered at the bottom of each section.
   * @return: React.ReactElement | null
   */
  renderSectionFooter = (sectionIndex) => {
    return (
      <Text style={styles.sectionFooter}>第{sectionIndex}组:sectionFooterComponent</Text>
    )
  }

  /**
   * @description: Rendered when the section is empty.
   * @return: React.ReactElement | null
   */
  renderSectionEmptyComponent = () => {
    return (<Text style={styles.listEmpty}>sectionEmptyComponent</Text>)
  }
  ```
**PictureBrowserView**
```
render() {
        return (
            <View style={styles.container}>
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
```

## More detailed subcomponent documentation
[ButtonView doc](https://github.com/rocket-developer/react-native-carrot-design/blob/master/docs/ButtonView.md)

[CornerTextView doc](https://github.com/rocket-developer/react-native-carrot-design/blob/master/docs/CornerTextView.md)

[LoadingView doc](https://github.com/rocket-developer/react-native-carrot-design/blob/master/docs/LoadingView.md)

[AlertView doc](https://github.com/rocket-developer/react-native-carrot-design/blob/master/docs/AlertView.md)

[BannerView doc](https://github.com/aerozhonghuan/react-native-carrot-design/blob/develop/docs/BannerView.md)

[CollectionView doc](https://github.com/rocket-developer/react-native-carrot-design/blob/master/docs/CollectionView.md)

[PictureBrowserView doc](https://github.com/aerozhonghuan/react-native-carrot-design/blob/master/docs/PictureBrowserView.md)
 
