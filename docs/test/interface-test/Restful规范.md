# Restful 规范

## 概述

Rest：

+ Representational State Transfer 的简称
+ 代表的是一种软件架构风格，基于 HTTP、URL、XML、JSON等标准和协议，支持轻量级、跨平台、跨语言的架构设计

作用：通过一套统一的接口为所有 web 相关提供服务，实现前后端分离

## Rest 设计原则

### 规范原则：

+ 每一个 URL 代表一种资源
+ 同一种资源有多种表现形式(xml/json)
+ 所以操作都是无状态的
+ 规范统一接口
+ 返回一致的数据格式
+ 可缓存(客户端可以缓存响应的内容)

#### 理解为什么所有的操作需要无状态：

+ 基于 C/S 架构的 http 请求本身是无状态的，向客户端发的每一次请求都必须带有充分的信息能够让服务器识别
+ 请求信息一般包含在 url 的查询参数或 header 中，服务端能够根据请求参数，不需要报错客户端的状态，直接将数据返回

**无状态的优点**：

可以大大提高服务器的健壮性和扩展性

#### 理解规范统一的接口：

**Rest 接口约束定义**：

+ 资源识别

  通过 url 表示要操作的资源

+ 请求动作

  通过请求动作(htttp method)标识要执行的操作

+ 响应信息

  通过返回的状态码标识这次请求的执行结果

举个例子：

对数据进行增删改查，设计接口

**未使用 Rest 规范前**：

需要设计 4 个接口，XXX/api/add、XXX/api/delete、XXX/api/query、XXX/api/update，难维护

**使用 Rest 规范**：

只需要设计一个接口 XXX/api，使用不同的请求方式 GET、POST 、DELETE、PUT，维护方便

#### 理解返回一致的数据格式：

服务端返回的数据可以是 XML 或 json 或直接返回状态码

**返回 json 数据**：

```
返回错误的数据格式：
{
    "code": 401,
    "status": "error",
    "message": '用户没有权限',
    "data": null
}
正确的数据格式可以如下：
{
    "code": 200,
    "status": "success",
    "data": [{
        "userName": "tugenhua",
        "age": 31
    }]
}
```


## url 及参数设计规范

### url 设计规范
+ url 末尾不需要出现斜杠/ 
+ 在 url 中使用 / 是表达层级关系的
+ 在 url 中可以使用连接符 - 来提升可读性
+ 在 url 中不允许出现下划线 _
+ 在 url 中尽量使用小写字符
+ 在 url 中不允许出现文件扩展名、
+ 在 url 中使用复数形式

**接口设计对比**：

```
未使用规范前，接口形式不固定：
http://xxx.com/api/getallUsers; // GET请求方式，获取所有的用户信息
http://xxx.com/api/getuser/1;   // GET请求方式，获取标识为1的用户信息
http://xxx.com/api/user/delete/1 // GET、POST 删除标识为1的用户信息
http://xxx.com/api/updateUser/1  // POST请求方式 更新标识为1的用户信息
http://xxx.com/api/User/add      // POST请求方式，添加新的用户

使用规范后：
http://xxx.com/api/users;     // GET请求方式 获取所有用户信息
http://xxx.com/api/users/1;   // GET请求方式 获取标识为1的用户信息
http://xxx.com/api/users/1;   // DELETE请求方式 删除标识为1的用户信息
http://xxx.com/api/users/1;   // PATCH请求方式，更新标识为1的用户部分信息
http://xxx.com/api/users;     // POST请求方式 添加新的用户
```
### HTTP 请求规范
+ GET (SELECT): 查询；从服务器取出资源
+ POST(CREATE): 新增; 在服务器上新建一个资源
+ PUT(UPDATE): 更新; 在服务器上更新资源(客户端提供改变后的完整资源)
+ PATCH(UPDATE): 更新；在服务器上更新部分资源(客户端提供改变的属性)
+ DELETE(DELETE): 删除; 从服务器上删除资源

### 参数命名规范

推荐采用下划线方式：

```
http://xxx.com/api/today_login // 获取今天登录的用户。
http://xxx.com/api/today_login&sort=login_desc // 获取今天登录的用户、登录时间降序排序。
```

## HTTP状态码相关的

### 状态码范围

+ 1xx: 信息，请求收到了，继续处理
+ 2xx: 代表成功. 行为被成功地接收、理解及采纳
  + 200 OK [GET]: 服务器端成功返回用户请求的数据
  + 201 CREATED [POST/PUT/PATCH]: 用户新建或修改数据成功
  + 202 Accepted: 表示一个请求已经进入后台排队(一般是异步任务)
  + 204 NO CONTENT -[DELETE]: 用户删除数据成功
+ 3xx: 重定向
+ 4xx: 客户端错误，请求包含语法错误或请求无法实现
  + 400：Bad Request - [POST/PUT/PATCH]: 用户发出的请求有错误，服务器不理解客户端的请求，未做任何处理
  + 401: Unauthorized 表示用户没有权限(令牌、用户名、密码错误)
  + 403：Forbidden: 表示用户得到授权了，但是访问被禁止了, 也可以理解为不具有访问资源的权限
  + 404：Not Found: 所请求的资源不存在，或不可用
  + 405：Method Not Allowed: 用户已经通过了身份验证, 但是所用的 HTTP 方法不在它的权限之内
  + 406：Not Acceptable: 用户的请求的格式不可得(比如用户请求的是 JSON 格式，但是只有XML 格式)
  + 410：Gone - [GET]: 用户请求的资源被转移或被删除，且不会再得到的
  + 415: Unsupported Media Type: 客户端要求的返回格式不支持，比如，API 只能返回 JSON 格式，但是客户端要求返回 XML 格式
  + 422：Unprocessable Entity: 客户端上传的附件无法处理，导致请求失败
  + 429：Too Many Requests: 客户端的请求次数超过限额
+ 5xx: 服务器端错误
  + 500：INTERNAL SERVER ERROR 服务器发生错误
  + 502：网关错误
  + 503: Service Unavailable 服务器端当前无法处理请求
  + 504：网关超时

## 返回统一数据格式
包含的字段：
+ code：http 响应状态码
+ status：比如  success(code 在 200-299 之间) 、fail(code 在 500-599 之间)、error(code 在400-499 之间)
+ data：请求成功时返回的数据信息，当 status 为 fail 或 error 时，包含错误原因或异常信息
