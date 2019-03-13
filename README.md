
# react-native-carrot-design
This is the React Native custom UI components library, It's components for android and iOS.

## Getting started

`$ npm install react-native-carrot-design --save`

### Mostly automatic installation

`$ react-native link react-native-carrot-design`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-carrot-design` and add `RNCarrotDesign.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNCarrotDesign.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.aero.design.RNCarrotDesignPackage;` to the imports at the top of the file
  - Add `new RNCarrotDesignPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-carrot-design'
  	project(':react-native-carrot-design').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-carrot-design/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-carrot-design')
  	```


## Usage
```javascript
import RNCarrotDesign from 'react-native-carrot-design';

// TODO: What to do with the module?
RNCarrotDesign;
```
  
