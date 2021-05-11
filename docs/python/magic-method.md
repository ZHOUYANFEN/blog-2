# Python 常用魔术方法

介绍一些 Python 常用的魔术方法，如 ```__init__```、```__new__``` 等。

##  ```__init__```

这是一个实例函数，主要是用来构建对象属性的，当对象创建的时候，就会自动调用这个函数，如果有属性时，会给对象赋予相应的属性

```python
#__init__函数
class A:
    def __init__(self, name):  # 实例方法
        print('开始给对象赋予属性了')
        self.name = name
a = A("hello")
print(a.name)
--------------------------------------------
开始给对象赋予属性了
hello
```

##  `__new__`

这是个类方法，用来创建对象，创建对象的时候最先调用的方法，通常会用来做单例模式和对象创建计数，*args，**kwargs 是用来接收和传递创建对象时的参数

```python
class A:
    def __init__(self, name, age):  # 实例方法
        print('开始给对象赋予属性了')
        self.name = name
        self.age = age

    def __new__(cls, *args, **kwargs): # 类方法
        print('开始新建对象了')
        print('我是参数args', args)
        print('我是参数kwargs', kwargs)
        return object.__new__(cls)
        # 必须要有返回值 返回创建出来的实例

a = A('小明', 2)
print(a.name,a.age)
-------------------------------------------------
开始新建对象了
我是参数args ('小明', 2)
我是参数kwargs {}
开始给对象赋予属性了
小明 2
--------------------------------------------------------

class A:
    def __init__(self, name, age=1):  # 实例方法
        print('开始给对象赋予属性了')
        self.name = name
        self.age = age

    def __new__(cls, *args, **kwargs): # 类方法
        print('开始新建对象了')
        print('我是参数args', args)
        print('我是参数kwargs', kwargs)
        return object.__new__(cls)
        # 必须要有返回值 返回创建出来的实例


a = A('小明', age=2)
print(a.name,a.age)
-------------------------------------------------
开始新建对象了
我是参数args ('小明',)
我是参数kwargs {'age': 2}
开始给对象赋予属性了
小明 2
```

由上面的例子可以看出，此函数会在```__init__```函数之前调用，返回一个实例对象

