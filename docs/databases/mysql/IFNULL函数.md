# IFNULL 函数

用法：用于判断第一个表达式是否为 NULL ,如果为 NULL 则返回第二个参数的值

语法：

```
IFNULL(expression, alt_value)
```

参数说明：

| 参数       | 描述                                      |
| ---------- | ----------------------------------------- |
| expression | 必须，要测试的值                          |
| alt_value  | 必须，expression 表达式为 NULL 时返回的值 |

举个栗子：

获取并返回 `Employee` 表中第二高的薪水 。如果不存在第二高的薪水，查询应该返回 `null` 。

Employee 表：
+----+--------+
| id | salary |
+----+--------+
| 1  | 100    |
+----+--------+

语句：

```
select ifnull((select distinct salary  as SecondHighestSalary from Employee limit 1,1), null);

结果：
```

