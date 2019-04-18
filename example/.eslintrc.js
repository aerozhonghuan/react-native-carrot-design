module.exports = {
  parser:'babel-eslint',
  env: {
    browser: true,
    es6: true,
  },
  extends: 'airbnb',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },

    /* 发现配置文件中有 "root": true，它就会停止在父级目录中寻找。 */
    "root": true,

    /* 如果使用了全局变量，在这里声明，否则警告 */
    // Map from global var to bool specifying if it can be redefined
    "globals": {
      "__DEV__": true,
      "__dirname": false,
      "__fbBatchedBridgeConfig": false,
      "alert": false,
      "cancelAnimationFrame": false,
      "cancelIdleCallback": false,
      "clearImmediate": true,
      "clearInterval": false,
      "clearTimeout": false,
      "console": false,
      "document": false,
      "escape": false,
      "Event": false,
      "EventTarget": false,
      "exports": false,
      "fetch": false,
      "FormData": false,
      "global": false,
      "jest": false,
      "Map": true,
      "module": false,
      "navigator": false,
      "process": false,
      "Promise": true,
      "requestAnimationFrame": true,
      "requestIdleCallback": true,
      "require": false,
      "Set": true,
      "setImmediate": true,
      "setInterval": false,
      "setTimeout": false,
      "window": false,
      "XMLHttpRequest": false,
      "pit": false,

      // Flow global types.
      "ReactComponent": false,
      "ReactClass": false,
      "ReactElement": false,
      "ReactPropsCheckType": false,
      "ReactPropsChainableTypeChecker": false,
      "ReactPropTypes": false,
      "SyntheticEvent": false,
      "$Either": false,
      "$All": false,
      "$ArrayBufferView": false,
      "$Tuple": false,
      "$Supertype": false,
      "$Subtype": false,
      "$Shape": false,
      "$Diff": false,
      "$Keys": false,
      "$Enum": false,
      "$Exports": false,
      "$FlowIssue": false,
      "$FlowFixMe": false,
      "$FixMe": false
    },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx",] }],//在JS文件中允许存在JSX语法
    "global-require":"off",//image指定source时要用require语句
    "indent":["error",4],//缩进规则为4个空格
    "react/jsx-indent":["error",4],//缩进规则为4个空格
    "react/jsx-indent-props":["error",4],//缩进规则为4个空格
    "react/prop-types":["error",{"ignore":["tintColor","navigation"]}],
    "react/no-multi-comp":["error",{"ignoreStateless":true}],
    "react/prefer-stateless-function":["error",{"ignorePureComponents":true}],
    "max-len" : ["error", {code : 150}],
    "import/no-unresolved": [2, { ignore: ['\.img$'] }],
  },
};
