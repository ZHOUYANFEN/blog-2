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

