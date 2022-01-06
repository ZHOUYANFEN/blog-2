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



