#React-Ios-Component

一套根据 ios9 的风格，使用 React 对进行封装以便可以重用的组件

sketch : [ios9-uikit](https://github.com/philipamour/ios9-uikit)

### 安装
```
npm install --save react-ios-component
```

`react-ios-component` 依赖一下 `npm` 包 :
* [React](https://www.npmjs.com/package/react)
* [ReactDOM](https://www.npmjs.com/package/react-dom)
* [ReactCSSTransitionGroup](https://www.npmjs.com/package/react-addons-css-transition-group)
* [IScroll](https://www.npmjs.com/package/iscroll)

### Examples
完整的组件例子可以访问 [react-ios-component examples](http://maiwenan.github.io/react-ios-component/website/demos/)，下面是一个简单的例子 :

```
import {
  InlineDatePicker,
  DatePicker
} from 'react-ios-component'

// 內联日期选择组件的用法
ReactDom.render(<InlineDatePicker 
  maxDate={new Date('2020-10-10')}
  minDate={new Date('1970-01-01')}
  selectedDate={new Date()}
  onChange={(selectedDate) => {
    console.log('你选择的日期为 : ', selectedDate);
  }}
/>, document.getElementById('app-container'));

// 日期选择组件 API 调用用法
DatePicker.show({
  maxDate: new Date('2020-10-10'),
  minDate: new Date('1970-01-01'),
  selectedDate: new Date(),
  onConfirm: selectedDate => {
    console.log('你选择的日期为 : ', selectedDate);
  }
});
```

更多组件的详细用法可以参考文档 : [react-ios-component 文档](http://maiwenan.github.io/react-ios-component/doc/)

### 开发

```
git clone https://github.com/maiwenan/react-ios-component
cd react-ios-component
npm install
npm start
```