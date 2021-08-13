# selenium 等待方式

**无法定位元素问题原因：**

+ 页面中有 frame
+ 元素未加载渲染

**解决方式：**增加等待时间

### 常见等待方式：

#### 1. 强制等待

使用 sleep() 的方式，不论元素是否加载完成，在程序执行到时，必须等待

```python
from selenium import webdriver
from time import sleep

driver = webdriver.Firefox()
driver.get('https://huilansame.github.io')

sleep(3)  # 强制等待3秒再执行下一步

print driver.current_url
driver.quit()

```

**缺点：**影响执行速度

#### 2. 隐性等待

使用  implicitly_wait(xx)  

**定义：**在规定的时间内网页加载完成，则执行下一步，否则要等待设置的最长时间，才会执行下一步

```python
from selenium import webdriver

driver = webdriver.Firefox()
driver.implicitly_wait(30)  # 隐性等待，最长等30秒
driver.get('https://huilansame.github.io')

print driver.current_url
driver.quit()
```

**优点：**隐性等待对整个 driver 周期都起作用，只需设置一次即可

**缺点：**一直等待整个页面全部加载完成，包括 js 、css 代码，才会执行下一步

#### 3. 隐性等待



