
# react-native-carrot-design
This is the React Native custom UI components library, It's components for android and iOS.

## Getting started

`$ npm install react-native-carrot-design --save`

## Usage
`javascript`
**Example import**
```
import { ButtonView, CornerTextView, LoadingView } from 'react-native-carrot-design';
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
  
//TODO:Call show() when you want to show loading
this.Loading.show();
  
//TODO:Call close() when you want to close loading
this.Loading.close();
  ...
  
  
```

## More detailed subcomponent documentation
[ButtonView doc](https://github.com/rocket-developer/react-native-carrot-design/blob/master/docs/ButtonView.md)

[CornerTextView doc](https://github.com/rocket-developer/react-native-carrot-design/blob/master/docs/CornerTextView.md)

[LoadingView doc](https://github.com/rocket-developer/react-native-carrot-design/blob/master/docs/CornerTextView.md)

  
