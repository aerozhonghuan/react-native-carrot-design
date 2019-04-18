## Note
This is a convenience wrapper around [`<SectionList>`](https://facebook.github.io/react-native/docs/sectionlist.html), and thus inherits  most of its properties and methods,the following caveats:

In addition, we have added some properties based on SectionList:
1.`headerSource`, so you don't have to add the header data of the section to the dataSource.
2.`sectionStyle`
3.`itemStyle`
4.`renderSectionEmptyComponent`

There is no need to provide a non-repeating key attribute for each line like SectionList, because we implemented it internally.


## Getting started

`$ npm install react-native-carrot-design --save`

## Usage
`javascript`
All you need is to import { CollectionView } from the react-native-carrot-design module and then use the tag.
`Example import`

```
import { CollectionView } from 'react-native-carrot-design';

```

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
### Some properties or method examples:
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

  /**
   * @description: Rendered at the top of the collectionView.
   * @return: React.ReactElement | null
   */
  rendHeaderComponent = () => {
    return (<Text style={styles.listHeader}>headerComponent</Text>)
  }

  /**
   * @description: Rendered at the bottom of the collectionView.
   * @return: React.ReactElement | null
   */
  rendFooterComponent = () => {
    return (
      <Text style={styles.listFooter}>footerComponent</Text>
    )
  }

  /**
   * @description: Rendered in between each section. Render at the top and bottom of each section
   * @return: React.ReactElement | null
   */
  renderSectionSeparator = () => (
    <View style={styles.sectionSeparator} />
  )

  /**
   * @description: Rendered when the collectionView is empty.
   * @return: React.ReactElement | null
   */
  rendEmptyComponent = () => {
    return (<Text style={styles.listEmpty}>emptyComponent</Text>)
  }

  /**
   * @description: Called once when the scroll position gets within onEndReachedThreshold of the rendered content.
   * @param {info:{distanceFromEnd: number}}  
   * @return: void
   */
  onEndReached = (info) => {
    alert(`he scroll position:info==>${JSON.stringify(info)}`);
  }
  ...
  
```
## Properties

| Prop   | Default  | Type | Description | Required|
| :------------ |:---------------:| :---------------:|  :---------------:|:-----|
| headerSource | undefined | `array` | An array of objects with data for each section header |  `false `|
| dataSource | - | `array` | An array of objects with data for each section |  `true `|
| sectionStyle | ... | `ViewStyle` | The layout style of the each section |  `false `|
| itemStyle | ... | `ViewStyle` | The layout style of the each item |  `false `|
| renderItem | ... | `function:()=>React.ReactElement` | Renderer for every item in every section |  `false `|
| renderSectionHeader | ... | `function:()=>React.ReactElement or null` | Rendered at the top of each section. Sticky headers are not yet supported |  `false `|
| renderSectionFooter | ... | `function:()=>React.ReactElement or null` | Rendered at the bottom of each section |  `false `|
| renderSectionSeparator | ... | `component, function, element` | Rendered in between each section. Render at the top and bottom of each section |  `false `|
| renderSectionEmptyComponent | ... | `component, function, element` | Rendered when the section is empty |  `false `|
| renderHeaderComponent | ... | `component, function, element` | Rendered at the top of the collectionView |  `false `|
| renderFooterComponent | ... | `component, function, element` | Rendered at the bottom of the collectionView |  `false `|
| renderEmptyComponent | ... | `component, function, element` | Rendered when the collectionView is empty |  `false `|
| renderEmptyComponent | ... | `component, function, element` | Rendered when the collectionView is empty |  `false `|
| stickySectionHeadersEnabled | false | `bool` | Makes the sections headers sticky,Only enabled by default on iOS because that is the platform standard there |  `false `|
| initialNumToRender | ... | `number` | How many items to render in the initial batch |  `false `|
| onEndReached | ... | `function ` | Called once when the scroll position gets within onEndReachedThreshold of the rendered content:((info: { distanceFromEnd: number }) => void) |  `false `|
| onEndReachedThreshold | ... | `number` | How far from the end (in units of visible length of the list) the bottom edge of the list must be from the end of the content to trigger the onEndReached callback |  `false `|
| inverted | false | `bool` | Reverses the direction of scroll. Uses scale transforms of -1. |  `false `|


## Instance Methods

| Method  | Params  | Description |
| :------------ |:---------------:| :---------------:|
| scrollToLocation | params: SectionListScrollParams | Scrolls to the item at the specified sectionIndex and itemIndex (within the section) positioned in the viewable area  |
| recordInteraction | - | Tells the list an interaction has occured, which should trigger viewability calculations |
| flashScrollIndicators | - | Displays the scroll indicators momentarily |