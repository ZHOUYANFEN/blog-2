# Python 继承

继承就是类与类之间的一种关系，是一种子类与父类的关系。Python 中有单继承和多继承 2 种继承方式。

## 单继承

子类继承于一个类，子类会继承该父类中的方法

```python
class Animal:
    def run(self):
        print('Animal is running')


class Dog(Animal):
    pass

dog = Dog()
dog.run()
----------输出结果--------------
Animal is running
```

如果 dog 想输出 'dog is running' ，可以重构父类中的方法dog is running

```python
class Animal:
    def run(self):
        print('Animal is running')


class Dog(Animal):
    def run(self):
        print('dog is running')

dog = Dog()
dog.run()
----------输出结果--------------
dog is running
```

单继承中，可以调用父类的构造函数，使用 super 隐式调用，super 指的就是该类的父类

```py
class Base(object):
    def __init__(self,name):
        print('Create Base')
        self.name = name
        print(name)

class A(Base):
    def __init__(self,name):
        # Base.__init__(self)
        # super(A, self).__init__()
        super().__init__(name)
        print('Create A')

print(A("zhang").name)

```

## 多继承

