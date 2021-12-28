# DHCP 协议

## 概述

DHCP： Dynamic Host Configuration Protocol ，动态主机配置协议

作用：集中管理、动态分配 IP 地址给客户端

端口号：67

使用协议：UDP

## DHCP 报文

### 报文种类

DHCP 中一共有 8 种报文：

+ DHCP  Discover 
  + 客户端以广播方式发送该报文用来发现 DHCP 服务器
  + DHCP 服务器收到该报文后发送应答报文，客户端据此知道服务器位置
+ DHCP  Offer
  + 服务器收到 Discover 报文后，会在配置的地址池中查找一个合适的 IP 地址，加上租约期限和其他信息，构造成该报文，发送给客户端
  + 该报文只是告诉客户端可以提供地址，还需要通过 ARP 检测该地址是否重复
+ DHCP  Request
  + 
+ DHCP  ACK
+ DHCP  NAK
+ DHCP  Release
+ DHCP  Decline
+ DHCP  Inform





