# baiduselenium中xpath定位方式

了解了 xpath 的一些语法后，可以在 selenium 中使用 xpath 来定位一些元素

## 常用的一些定位方式：

### 1.通过元素属性定位

**语法：**//tag[@attr=attr]

栗子：以定位百度输入框为例：

![baidu](../images/baidu.jpg)

```
xpath 路径：//input[@id='kw']
```

### 2.使用逻辑运算符

**语法：**//tag[@attr1=attr1 and @attr2=attr2]  

这个是逻辑与 (and)，逻辑或 (or)s 是也同样的

![baidu](../images/baidu.jpg)

```
xpath 路径：//input[@id='kw' and @class='s_ipt']
```

### 3.通过文本定位

#### 3.1. text()

//tag[text()=xx],这里用百度首页里面的"hao123"链接举例子

//a[text()='hao123']



![img](https:////upload-images.jianshu.io/upload_images/6747408-4961d85b7ff6ea1e.png?imageMogr2/auto-orient/strip|imageView2/2/w/1039/format/webp)

定位"hao123"

**3.2 contains() 包含定位**

//tag[contains(text(),xx)] ，//tag[contains(@attr,xx)]，前面一个是文本，后面一个是包含属性前面都讲了直接@属性定位，这里就不讲了

//a[contains(text(),'hao')] 这里同样是定位"hao123"这个链接，当然你也可以写全

![img](https:////upload-images.jianshu.io/upload_images/6747408-bd1c6a61daff772d.png?imageMogr2/auto-orient/strip|imageView2/2/w/1024/format/webp)

包含文本定位



![img](https:////upload-images.jianshu.io/upload_images/6747408-7afed65dde4957b4.png?imageMogr2/auto-orient/strip|imageView2/2/w/967/format/webp)

包含属性定位

### 4.position()=n 位置定位

//tag[@attr=attr][position()=n] 这里还是定位"hao123" 。//a[@class='mnav'][position()=2]  n表示第几个元素，n从1开始



![img](https:////upload-images.jianshu.io/upload_images/6747408-e4fb957659ab50f1.png?imageMogr2/auto-orient/strip|imageView2/2/w/1022/format/webp)

定位"hao123"

### 5. last()-n

n=0或者不写last()默认倒数第一个，n=1倒数第二，以此类推 



![img](https:////upload-images.jianshu.io/upload_images/6747408-6cb89d7acb776051.png?imageMogr2/auto-orient/strip|imageView2/2/w/979/format/webp)

定位"hao123"

### 6.following-sibling 选取当前节点之后的所有同级节点

这里定位"hao123"这个a标签的父级元素(div)的同级的第一个div



![img](https:////upload-images.jianshu.io/upload_images/6747408-6c92925ea6df12b1.png?imageMogr2/auto-orient/strip|imageView2/2/w/959/format/webp)

### 7.preceding-sibling 选取当前节点之前的所有同级节点

7和6相反的，6是同级往下走，7是同级往上走的



![img](https:////upload-images.jianshu.io/upload_images/6747408-7746dfcd3672a608.png?imageMogr2/auto-orient/strip|imageView2/2/w/1030/format/webp)



6和7定位不怎么用，但是在selenium定位元素的时候还用到过，大家了解知道有这么个东西就好了