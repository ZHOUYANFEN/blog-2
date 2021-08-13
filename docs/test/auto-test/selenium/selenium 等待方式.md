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