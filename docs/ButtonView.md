## Getting started

`$ npm install react-native-carrot-design --save`

## Usage
`javascript`
All you need is to import { ButtonView } from the react-native-carrot-design module and then use the tag.
`Example import`
```
import { ButtonView } from 'react-native-carrot-design';
```
```
...
<ButtonView activeOpacity={0.6} btnTitleStyle={{color:'blue',fontSize:19}} 
     btnViewStyle={{backgroundColor:'red'}} title='自定义按钮' onPressCallback={()=>{
          alert('pressBtn!');
     }}>
</ButtonView>
...
```

## Properties

| Prop   | Default  | Type | Description | Required|
| :------------ |:---------------:| :---------------:|  :---------------:|:-----|
| activeOpacity | 0.8 | `number` | Determines what the opacity of the wrapped view should be when touch is active|  `false `|
| title | - | `string` | title for the button |  `true `|
| disabled | false | `boolean` | If true, disable all interactions for this component|  `false `|
| onPressCallback | - | `function` | This is called when clicking the component |  `false `|
| btnTitleStyle | ... | `object` | The customize title style, eg. width, color,fontSize...  |  `false `|
| btnViewStyle | ... | `object` | The customize ButtonView style, eg. width, height...  |  `false `|