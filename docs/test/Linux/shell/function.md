# Shell 函数

**函数格式：**

```bash
[ function ] funname [()]

{

    action;

    [return int;]

}
```

说明：

+  可以带 function fun() 定义，也可以直接 fun() 定义,不带任何参数
+  return 值返回，如果不加，将以最后一条命令运行结果，作为返回值  

例：

```bash
#!/bin/bash

funWithReturn(){
    echo "这个函数会对输入的两个数字进行相加运算..."
    echo "输入第一个数字: "
    read aNum
    echo "输入第二个数字: "
    read anotherNum
    echo "两个数字分别为 $aNum 和 $anotherNum !"
    return $(($aNum+$anotherNum))
}
funWithReturn
echo "输入的两个数字之和为 $? !"

------------------------------------
结果：
这个函数会对输入的两个数字进行相加运算...
输入第一个数字: 
1
输入第二个数字: 
2
两个数字分别为 1 和 2 !
输入的两个数字之和为 3 !
```

**注意：**

+  函数返回值通过 $? 获取
+ 所有函数在使用前必须定义

## 函数参数

**获取方式：**