# Docker 命令

## 常用命令

+ 查看 本机镜像

  docker images [option] [repository[:tag]]

  option: 一些参数，可选

  repository：镜像名，可选

  tag：具体镜像的版本，可选

+ 拉取镜像

  docker pull [options] name[: tag] :

  option: 拉取版本时的一些参数，可选

  tag：具体镜像的版本，可选

  没有指定tag时，默认拉取最新的镜像

+ 运行镜像

  docker run [option] image[:tag] [command] [arg...]

  option：运行时的一些参数，可选

  tag：运行镜像的版本，可选

  command：镜像运行时执行的命令，可选

  arg：命令的一些参数，可选

  例：后台运行

  docker run -d XXX

+ 查看运行的容器

  docker ps

+ 进入容器内部

  docker exec [option] container command [arg....]

  option: 一些参数，可使用 help 查看

  container：容器名

  comman：执行的命令

  arg：命令的一些参数

+ 停止 docker 容器

  docker stop 容器名
  
+ 构建镜像

  docker build [option] .

  .：表示当前目录

  option：参数可选

  例：docker build -t jpress:latest . 

  给自己构建的镜像取名为 jpress，tag 为 latest

## 应用

以安装 Nginx 为例

+ 拉取 Nginx 镜像

  从国内的镜像网站上拉取 Nginx 的镜像

  ```
  docker pull hub.c.163.com/library/nginx:latest
  ```

+ 运行镜像

  + 前台运行镜像

    ```
    docker run hub.c.163.com/library/nginx
    docker ps 查看镜像进程
    ```

  + 后台运行镜像

    使用参数 -d ，可使用 docker run --help 进行命令查看

    ```
    docker run -d hub.c.163.com/library/nginx
    docker ps 查看镜像进程
    ```

+ 进入容器内部查看

  ```
  docker exec -it 9c bash
  ```

  











