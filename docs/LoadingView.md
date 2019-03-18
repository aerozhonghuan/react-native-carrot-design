## Getting started

`$ npm install react-native-carrot-design --save`

## Usage
`javascript`
All you need is to import { LoadingView } from the react-native-carrot-design module and then use the tag.
`Example import`
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
## Properties

| Prop   | Default  | Type | Description | Required|
| :------------ |:---------------:| :---------------:|  :---------------:|:-----|
| hide | - | `boolean` | Whether to display loading by default |  `false `|

## Instance Methods

| Method  | Params  | Description |
| :------------ |:---------------:| :---------------:|
| show | - |Call show() when you want to show loading |
| close | - | Call close() when you want to close loading |