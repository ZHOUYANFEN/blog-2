# PEP8

### 与空白有关的建议

在Python中，空白（whitespace）在语法上相当重要

1. 用空格（space）表示缩进，而不要用制表符（tab）
2. 和语法相关的每一层缩进都用 4 个空格表示
3. 每行不超过 79 个字符
4. 对于占据多行的长表达式来说，除了首行之外的其余各行都应该在通常的缩进级别之上再加 4 个空格
5. 在同一份文件中，函数与类之间用 2 个空行隔开
6. 在同一个类中，方法与方法之间用 1 个空行隔开
7. 使用字典时，键与冒号之间不加空格，写在同一行的冒号和值之间应该加 1 个空格
8. 给变量赋值时，赋值符号的左边和右边各加 1 个空格，并且只加一个空格就好
9. 给变量的类型做注解（annotation）时，不要把变量名和冒号隔开，但在类型信息前应该有一个空格

这个其实不用硬背，用 pycharm 的同学应该都知道，代码格式化会自动完成这些事

 

### 与命名有关的建议

#### 函数、变量及属性

- 用小写字母来拼写，各单词之间用下划线相连
- lowercase_underscore

 

#### 受保护的实例属性

- 用一个下划线开头
- _leading_underscore

 

#### 私有的实例属性

- 用两个下划线开头 
- __double_leading_underscore

 

#### 类（包括异常）命名

- 每个单词的首字母均大写
- CapitalizedWord

 

#### 模块级别的常量

- 所有字母都大写，各单词之间用下划线相连
- ALL_CAPS

 

#### 类中的实例方法

应该把第一个参数命名为 self，用来表示该对象本身

 

#### 类方法

第一个参数，应该命名为 cls，用来表示这个类本身

 

### 与表达式和语句有关的建议

#### 采用行内否定

- 把否定词直接写在要否定的内容前面，而不要放在整个表达式的前面
- 例如应该写  if a is not b ，而不是 if not a is b 

 

#### 不要通过长度判断容器或序列是不是空的

- 例如不要通过 if len(somelist) == 0 判断 somelist 是否为 [] 或 '' 等空值
- 而是应该采用 if not somelist 这样的写法来判断，因为 Python 会把空值自动评估为 False

 

#### 不要通过长度判断容器或序列里面有没有内容

- 比如要判断 somelist 是否为 [1] 或 'hi' 这样非空的值），也不应该通过长度来判断
- 而是应该采用 if somelist ，因为 Python 会把非空的值自动判定为 True

 

#### 不要把 if 语句、for 循环、while 循环及 except 复合语句挤在一行

- 应该把这些语句分成多行来写，这样更加清晰
- 如果表达式一行写不下，可以用括号将其括起来，而且要适当地添加换行与缩进以便于阅读

 

#### 多行的表达式

应该用括号括起来，而不要用\

```
# 错误示范 folder["interfaces"] = db.query(Interface). \    filter(folder_id == Interface.folder_id,           Interface.is_delete == 0). \    all() # 正确示范 folder["interfaces"] = (    db.query(Interface)    .filter(folder_id == Interface.folder_id, Interface.is_delete == 0)    .all() )
```

 

### 与 import 有关的建议

- import 语句（含  from x import y ）总是应该放在文件开头
- 引入模块时，总是应该使用绝对名称，而不应该根据当前模块路径来使用相对名称
- 例如，要引入 bar 包中的 foo 模块，应该完整地写出 from bar import foo ，即便当前路径为 bar 包里，也不应该简写为 import foo 
- 如果一定要用相对名称来编写 import 语句，那就应该明确地写成 from . import foo 

 

#### 文件中的 import 语句应该按顺序划分成三个部分

1. 首先引入标准库里的模块
2. 然后引入第三方模块
3. 最后引入自己的模块

属于同一个部分的 import 语句按字母顺序排列

 

#### 提醒

不想自己手动来保证 import 的顺序是符合规范的，可以借助 isort 这个工具来自动完成哦！

https://www.cnblogs.com/poloyy/p/15549542.html

 

### Pylint

- 是 Python 源码静态分析工具
- 它可以自动检查受测代码是否符合PEP 8风格指南，而且还能找出Python程序里的许多种常见错误
- 感兴趣可以自行百度学习，这里不展开讲解了