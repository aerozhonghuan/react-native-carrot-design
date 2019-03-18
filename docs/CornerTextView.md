## Getting started

`$ npm install react-native-carrot-design --save`

## Usage
`javascript`
All you need is to import { CornerTextView } from the react-native-carrot-design module and then use the tag.
`Example import`
```
import { CornerTextView } from 'react-native-carrot-design';
```
```
...
<CornerTextView cornerStyle={{backgroundColor:'orange',width:89}} title="title" textStyle={{color:'red'}}></CornerTextView>
...
```
## Properties

| Prop   | Default  | Type | Description | Required|
| :------------ |:---------------:| :---------------:|  :---------------:|:-----|
| title | - | `string` | title for the CornerTextView |  `true `|
| textStyle | ... | `object` | The customize title style, eg. width, color,fontSize...  |  `false `|
| cornorStyle | ... | `object` | The customize CornerTextView style, eg. width,borderRadius, height...  |  `false `|