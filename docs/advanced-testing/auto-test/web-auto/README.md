# Web 自动化测试

## Selenium 原理

### Selenium 1.0 原理

**核心**： Selenium RC （ Remote Control ）

 **Selenium RC 利用的原理**   ： JavaScript 代码可以很方便地获取页面上的任何元素并执行各种操作 

**同源政策** ： 只有来自**相同域名、端口和协议**的 JavaScript 代码才能被浏览器执行 

**Selenium RC 组成** ：

![RC](./images/RC.jpg)

**Selenium RC Server** ：

+  Selenium Core ：被注入到浏览器页面中的 JavaScript 函数集合，用来实现界面元素的识别和操作 
+  Http Proxy ： 作为代理服务器修改JavaScript的源，以达到“欺骗”被测站点的目的 
+  Launcher ： 用来在启动测试浏览器时完成 Selenium Core 的注入和浏览器代理的设置 

**Client Libraries**： 是测试用例代码向 Selenium RC Server 发送 Http 请求的接口，支持多种语言