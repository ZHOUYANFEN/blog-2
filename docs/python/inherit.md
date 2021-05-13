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

如果父类