### 这里是项目说明
#### 本项目是UI组件库react-native-carrot-design的演示项目。
#### 一、运行

1.本地进入example目录执行npm install
2.执行连接命令：react-native link
3.运行：本机需安装Xcode 或 Android Studio环境
  1）、iOS
      模拟器：react-native run-ios 可以使用--simulator参数，在其后加上要使用的设备名称来指定要模拟的设备类型（目前最新版应用默认为"iPhoneX"），比如：react-native run-ios --simulator "iPhone 7s"。（终端中运行xcrun simctl list devices来查看具体可用的设备名称）
      真机：直接用Xcode进行运行
  2）、Android
      模拟器：react-native run-android（前提已开启模拟器）
      真机：react-native run-android（前提已usb链接真机）

#### 二、目录介绍：

     src是主要工作目录：
        1）、compontents（公共组件）
        2）、screens（页面、页面私有组件）单个子组件如有多个js文件需创建子文件夹
        3）、style（全局样式）
        4）、utils（工具-公共方法）
        5）、assets是资源文件夹：
            1）、images 图片
