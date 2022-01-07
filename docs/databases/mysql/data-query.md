# 数据查询

## 单表查询

**语句表达式：**

```
select select_expr[,select_expr查询表达式]

[from tbl_name

[where 条件]

[group by {col_name|position} [asc|desc],....分组]

[having 条件 对分组结果二次筛选]

[order by {col_name|position} [asc|desc],......排序]

[limit 限制显示条数]

]
```

栗子：

+ 普通查询

```
select * from activity where id = 19;
```

+ 限制返回数量

```
select * from activity where type = "addBuy" limit 2;
```

+ 分组

```
select type,count(*) from activity group by type;
结果：
addBuy	15
RESTRITED	10
```

+ 排序

```
select user_id,SUM(value) from nplus_integral_change_record group by user_id order by SUM(value) desc; 
```

+ 筛选

```
select user_id,SUM(value) from integral_change_record group by user_id having SUM(value) < 200; 
结果：所有积分数小于 200 的筛选出来
```

## 多表查询

### 内连接

**语句表达式**：

```
SELECT column_name(s)
FROM table1
INNER JOIN table2
ON table1.column_name=table2.column_name;
或
SELECT column_name(s)
FROM table1
JOIN table2
ON table1.column_name=table2.column_name;
```

栗子：

```
SELECT Websites.name, access_log.count, access_log.date
FROM Websites
INNER JOIN access_log
ON Websites.id=access_log.site_id
ORDER BY access_log.count;

结果：如果 Websites 表中的行在 access_log 中没有匹配，则不会返回数据
```

**注意**： 

+ INNER JOIN 关键字在表中存在至少一个匹配时返回行 
+ 返回的数据是前一个表中在后一个表中有匹配的值

### 外连接

#### 左外连接

**语句表达式**：

```
SELECT column_name(s)
FROM table1
LEFT JOIN table2
ON table1.column_name=table2.column_name;
或
SELECT column_name(s)
FROM table1
LEFT OUTER JOIN table2
ON table1.column_name=table2.column_name;
```

栗子：

```
SELECT Websites.name, access_log.count, access_log.date
FROM Websites
LEFT JOIN access_log
ON Websites.id=access_log.site_id
ORDER BY access_log.count DESC;

结果：返回左表（Websites）所有的行，即使右表（access_log）中没有匹配
```

**注意**： 

+  LEFT JOIN 关键字从左表返回所有的行，即使右表中没有匹配  
+ 没有匹配的返回 NULL 

#### 右外连接

**语句表达式**：

```
SELECT column_name(s)
FROM table1
RIGHT JOIN table2
ON table1.column_name=table2.column_name;
或
SELECT column_name(s)
FROM table1
RIGHT OUTER JOIN table2
ON table1.column_name=table2.column_name;
```

栗子：

```
SELECT Websites.name, access_log.count, access_log.date
FROM Websites
RIGHT JOIN access_log
ON Websites.id=access_log.site_id
ORDER BY access_log.count DESC;

结果：返回右表（access_log）所有的行，即使左表（Websites）中没有匹配
```

**注意**： 

+  RIGHT JOIN 关键字从右表返回所有的行，即使左表中没有匹配  
+ 没有匹配的返回 NULL 

## 联合查询



