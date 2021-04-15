# 装饰器

```pyt
def a():
	print("Tom is sing")	
f = a
f()
```

上述中是将函数对象赋值给一个变量，再通过变量调用该函数

```pyt
print(a.__name__)
print(f.__name__)  
print(id(a))
print(id(f))

输出结果：
a
a
19788248
19788248
```

由上可见，f 变量指向的就是 a 这个函数。





