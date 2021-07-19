# 循环控制

## for 循环

**语法格式：**

```bash
for var in item1 item2 ... itemN
do
    command1
    command2
    ...
    commandN
done
```

例：

```bash
for loop in 1 2 3 4 5
do
    echo "The value is: $loop"
done

--------------------------
结果：
The value is: 1
The value is: 2
The value is: 3
The value is: 4
The value is: 5
```

```bash
#!/bin/bash

for str in This is a string
do
    echo $str
done

-----------------------------
结果：
This
is
a
string
```

## while 循环

**语法格式：**

```
while condition
do
    command
done
```

例：

```bash
#!/bin/bash
int=1
while(( $int<=5 ))
do
    echo $int
    let "int++"
done

-------------------------------------
结果：
1
2
3
4
5
```

**注意：**

上述例子中使用了 Bash let 命令，在变量计算中不需要加上 $ 进行引用

**无限循环：**

```bash
while :
do
    command
done
或
while true
do
    command
done
或
for (( ; ; ))
```

