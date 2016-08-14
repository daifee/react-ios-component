#!/usr/bin

reactPath='./node_modules/react/dist/*'
reactDomPath='./node_modules/react-dom/dist/*'
iscrollPath='./node_modules/iscroll/build/*'
distPath='./dist/*'
libPath='./website/lib'
examplePath='./website/example'

# 复制依赖包
cp $reactPath $libPath
cp $reactDomPath $libPath
cp $iscrollPath $libPath
cp $distPath $example

# 打包组件 demo
webpack --progress --colors --config website/webpack.config.website.js

