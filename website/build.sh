#!/usr/bin

reactPath='./node_modules/react/dist/*'
reactDomPath='./node_modules/react-dom/dist/*'
iscrollPath='./node_modules/iscroll/build/*'
distPath='./dist/*'
libPath='./website/example/lib'
examplePath='./website/example'

# 复制依赖包
cp -r $reactPath $libPath
cp -r $reactDomPath $libPath
cp -r $iscrollPath $libPath
cp -r $distPath $examplePath

# 打包组件 demo
webpack --progress --colors --config website/webpack.config.website.js

