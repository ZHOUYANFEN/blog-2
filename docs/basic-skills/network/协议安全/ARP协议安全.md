# ARP 欺骗

前提：了解什么是 ARP，可以参考 [ARP协议](../ARP协议)

**注意**：ARP 欺骗是内网(局域网)的一种攻击手段

## 什么是 ARP 欺骗

### 正常数据传输：

![arp](../images/arpqp.png)

client1 与 client2 通信的过程：

**第一步**:

client1 检测到要通信的地址是同一网段的，会发出消息“谁是 192.168.1.3”

**第二步**：

交换机端口收到消息后，会将该消息在全局域网类进行关播，并将 client1 连接的端口与 MAC 写入MAC 地址表中

**第三步**：

+ client2 接收到消息后，会回复 client1 “我是 192.168.1.3，MAC 地址是 10-e9-53-15-8b-4c”
+ client2 会将 client1 的IP 与 MAC 写入 ARP 缓存表中
+ 交换机收到该消息后，会将 client2 连接的端口与 MAC 写入 MAC 地址表中
+ client1 会将 client2 的IP 与 MAC 写入 ARP 缓存表中

**第四步**:

client1 将数据发送给 client2时，交换机会进行相应端口转发

**重点**：

+ ARP 缓存表有失效时间
+ client1 的缓存未失效时，不会重新发送消息查询 client2 的 MAC 地址

### “被欺骗”的数据传输





