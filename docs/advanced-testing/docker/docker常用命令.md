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