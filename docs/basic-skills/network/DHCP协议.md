# DHCP 协议

## 概述

DHCP： Dynamic Host Configuration Protocol ，动态主机配置协议

作用：集中管理、动态分配 IP 地址给客户端

端口号：67(服务器)、68(客户端)

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
  + 未获得 IP 地址的客户端在收到的 Offer 报文中，通常选择第一个应答报文的服务器为自己的目标服务器，随后发送一个广播的 Request 请求报文，告知服务器希望获得的 IP 地址
  + 已获得 IP 地址的客户端在租约期过 50% 时，重新发送 Request 请求延续租约， 如果没有收到 ACK 报文，在租期达到 87.5% 时，会再次发送广播的 Request 请求报文以请求续延租约 
+ DHCP  ACK
  + 
+ DHCP  NAK
+ DHCP  Release
+ DHCP  Decline
+ DHCP  Inform





