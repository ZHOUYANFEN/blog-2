# Docker 网络

## 网络类型

![网络模式](./images/网络模式.jpg)

+ Bridge (默认模式)

  host 与容器中的服务通过 bridge 连接

  容器有自己的 IP 地址

+ Host

  host 与服务器中的服务直接连接

  容器与 host 在同一局域网类

+ None

  无网络模式

## 端口映射

在 Bridge 模式下，需要使用到端口映射，运行镜像时，默认使用的时 Bridge 模式

以访问 Nginx 为例：

+ 将 host 中的 8080 端口映射到 nginx 容器中的 80 端口

  ```
  docker run -d -p 8080:80 hub.c.163.com/library/nginx
  ```

+  查看 8080 端口，端口处于 listen 状态

  ```
  [root@simlove003 ~]# netstat -na|grep 8080
  tcp        0      0 0.0.0.0:8080            0.0.0.0:*               LISTEN     
  tcp6       0      0 :::8080                 :::*                    LISTEN  
  ```

+ 访问 host:8080

  ![访问nginx](./images/访问nginx.jpg)





