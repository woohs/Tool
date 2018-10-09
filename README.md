## 项目介绍 
一款模拟HTTP请求的接口测试工具，支持各种类型参数，自动格式化JSON

[演示地址](https://woohs.github.io/Tool/)

## 更新日志

### HTTP接口测试工具 V0.1.1
本次更新以下内容：
1. 增加跨域请求选择
2. 增加json格式请求
3. 参数支持字符串、数组、json对象
4. 请求返回json数据自动格式化
5. 取消服务器实现跨域方式，目前使用不需要启动服务器。

### HTTP接口测试工具 V0.1.0
目前功能：
1. 发送（get/post）请求
2. 添加删除请求参数
3. 支持跨域请求（php实现）

页面需要开启web服务器运行，建议使用php自带服务器。
命令如下：
> php -S 0.0.0.0:8001

然后再游览器中输入地址：http://127.0.0.1:8001/test_tool/time.html

即可打开页面

> 建议打开控制台console查看返回的格式化数据
建议打开控制台network查看http请求的hearders信息



###  时间戳转换工具 V0.1.0
目前功能
1. 实时更新当前时间戳
2. 时间戳转换日期
3. 日期转换时间戳
