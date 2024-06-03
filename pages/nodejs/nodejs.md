<a name="bgs4e"></a>
## Buffer（缓冲器）
<a name="QGT37"></a>
### 1.概念
Buffer 是一个类似于数组的**对象**，用于表示固定长度的字节序列 Buffer 本质是一段内存空间，专门用来处理**二进制数据**。<br />![image.png](https://cdn.nlark.com/yuque/0/2023/png/22527936/1681884892716-90036351-92e0-4c1a-8e38-7705574790b9.png#averageHue=%23e8eaea&clientId=u29c119ba-f12f-4&from=paste&height=198&id=ua350788a&originHeight=198&originWidth=927&originalType=binary&ratio=1&rotation=0&showTitle=false&size=26188&status=done&style=none&taskId=ue1e48952-2618-426f-98a8-1459259e476&title=&width=927)
<a name="tybUC"></a>
### 2.特点

1.  Buffer 大小固定且无法调整 
2.  Buffer 性能较好，可以直接对计算机内存进行操作 
3.  每个元素的大小为 1 字节（byte） 

![image.png](https://cdn.nlark.com/yuque/0/2023/png/22527936/1681884952223-8c6d0bda-144e-47b1-98ef-078baaa11263.png#averageHue=%23151e2e&clientId=u29c119ba-f12f-4&from=paste&height=155&id=u0a48b03b&originHeight=155&originWidth=927&originalType=binary&ratio=1&rotation=0&showTitle=false&size=78831&status=done&style=none&taskId=u6b66b8a2-c660-48b0-9b6c-e6db9a57944&title=&width=927)
<a name="Gmtv6"></a>
### 3.使用
<a name="o2KqZ"></a>
#### 1.创建Buffer
Node.js 中创建 Buffer 的方式主要如下几种：

1. Buffer.alloc
```javascript
//创建了一个长度为 10 字节的 Buffer，相当于申请了 10 字节的内存空间，每个字节的值为 0 
let buf_1 = Buffer.alloc(10); 
// 结果为 <Buffer 00 00 00 00 00 00 00 00 00 00>
```

2. Buffer.allocUnsafe
```javascript
//创建了一个长度为 10 字节的 Buffer，buffer 中可能存在旧的数据, 可能会影响执行结果，
//所以叫 unsafe
let buf_2 = Buffer.allocUnsafe(10);
```

3. Buffer.from
```javascript
//通过字符串创建 Buffer
let buf_3 = Buffer.from('hello');
//通过数组创建 Buffer
let buf_4 = Buffer.from([105, 108, 111, 118, 101, 121, 111, 117]);
```
<a name="zkfkR"></a>
#### 2.Buffer 与字符串的转化
我们可以借助 toString 方法将 Buffer 转为字符串
```javascript
let buf_4 = Buffer.from([105, 108, 111, 118, 101, 121, 111, 117]);
console.log(buf_4.toString())
```
toString 默认是按照 utf-8 编码方式进行转换的。
<a name="gCbSD"></a>
#### 3.Buffer 的读写
```javascript
//读取
console.log(buf_3[1]);
//修改
buf_3[1]=97;
//查看字符串结果
console.log(buf_3.toString());
```
注意:

1.  如果修改的数值超过 255 ，则超过 8 位数据会被舍弃 
2.  一个 utf-8 的字符 一般 占 3 个字节 
<a name="tABYD"></a>
## fs模块
fs 全称为 file system ，称之为文件系统，是 Node.js 中的内置模块，可以对计算机中的磁盘进行操作。
<a name="Hwjva"></a>
### 1.文件写入
文件写入就是将数据保存到文件中

| 方法  | 说明 |
| --- | --- |
| writeFile | 异步写入 |
| writeFileSync | 同步写入 |
| appendFile / appendFileSync | 追加写入 |
| createWriteStream | 流式写入 |

<a name="F8u1v"></a>
#### 1.writeFile 异步写入
语法： fs.writeFile(file, data[, options], callback)<br />参数说明：

1. file 文件名
2. data 待写入的数据
3. options 选项设置（可选）
4. callback 写入回调

返回值： undefined
```javascript
// require 是 Node.js 环境中的'全局'变量，用来导入模块
const fs = require('fs');
//将 『三人行，必有我师焉。』 写入到当前文件夹下的『座右铭.txt』文件中
fs.writeFile('./座右铭.txt', '三人行，必有我师焉。', err => {
//如果写入失败，则回调函数调用时，会传入错误对象，如写入成功，会传入 null
	if(err){
		console.log(err);
		return;
	}
	console.log('写入成功')；
});
```
<a name="zoaqn"></a>
#### 2.writeFileSync 同步写入
语法: fs.writeFileSync(file, data[, options])<br />参数与 fs.writeFile 大体一致，只是没有 callback 参数<br />返回值： undefined
```javascript
try{
	fs.writeFileSync('./座右铭.txt', '三人行，必有我师焉。');
}catch(e){
	console.log(e);
}
```
Node.js 中的磁盘操作是由其他线程完成的，结果的处理有两种模式：

- 同步处理 JavaScript 主线程会等待其他线程的执行结果，然后再继续执行主线程的代码，效率较低
- 异步处理 JavaScript 主线程不会等待其他线程的执行结果，直接执行后续的主线程代码，效率较好
<a name="XXlAS"></a>
#### 3.appendFile / appendFileSync 追加写入
appendFile 作用是在文件尾部追加内容，appendFile 语法与 writeFile 语法完全相同<br />语法:<br />fs.appendFile(file, data[, options], callback)<br />fs.appendFileSync(file, data[, options])<br />返回值： 二者都为 undefined
```javascript
fs.appendFile('./座右铭.txt','择其善者而从之，其不善者而改之。', err => {
	if(err) throw err;
	console.log('追加成功')
	});
fs.appendFileSync('./座右铭.txt','\r\n温故而知新, 可以为师矣');
```
<a name="jty82"></a>
#### 4.createWriteStream 流式写入
语法： fs.createWriteStream(path[, options])<br />参数说明：<br />path 文件路径<br />options 选项配置（可选）<br />返回值： Object
```javascript
let ws = fs.createWriteStream('./观书有感.txt');
ws.write('半亩方塘一鉴开\r\n');
ws.write('天光云影共徘徊\r\n');
ws.write('问渠那得清如许\r\n');
ws.write('为有源头活水来\r\n');
ws.end();
```
程序打开一个文件是需要消耗资源的，流式写入可以减少打开关闭文件的次数。<br />流式写入方式适用于大文件写入或者频繁写入的场景, writeFile 适合于写入频率较低的场景
<a name="m2jRZ"></a>
#### 5.写入文件的场景
文件写入在计算机中是一个非常常见的操作，下面的场景都用到了文件写入

- 下载文件
- 安装软件
- 保存程序日志，如 Git
- 编辑器保存文件
- 视频录制

当需要持久化保存数据的时候，应该想到文件写入
<a name="R2pOU"></a>
### 2.文件读取
文件读取顾名思义，就是通过程序从文件中取出其中的数据

| 方法 | 说明 |
| --- | --- |
| readFile | 异步读取 |
| readFileSync | 同步读取 |
| createReadStream | 流式读取 |

<a name="nJb4w"></a>
#### 1.readFile 异步读取
语法： fs.readFile(path[, options], callback)<br />参数说明：

- path 文件路径
- options 选项配置
- callback 回调函数

返回值： undefined
```javascript
//导入 fs 模块
const fs = require('fs');
fs.readFile('./座右铭.txt', (err, data) => {
  if(err) throw err;
  console.log(data);
});
fs.readFile('./座右铭.txt', 'utf-8',(err, data) => {
  if(err) throw err;
  console.log(data);
});
```
<a name="IB8ws"></a>
#### 2.readFileSync 同步读取
语法： fs.readFileSync(path[, options])<br />参数说明：

- path 文件路径
- options 选项配置

返回值： string | Buffer
```javascript
let data = fs.readFileSync('./座右铭.txt');
let data2 = fs.readFileSync('./座右铭.txt', 'utf-8');
```
<a name="MIx6X"></a>
#### 3.createReadStream 流式读取
语法： fs.createReadStream(path[, options])<br />参数说明：

- path 文件路径
- options 选项配置（ 可选）

返回值： Object
```javascript
//创建读取流对象
let rs = fs.createReadStream('./观书有感.txt');
//每次取出 64k 数据后执行一次 data 回调
rs.on('data', data => {
  console.log(data);
  console.log(data.length);
});
//读取完毕后, 执行 end 回调
rs.on('end', () => {
	console.log('读取完成')
})
```
<a name="e0y8p"></a>
#### 4.读取文件应用场景

- 电脑开机
- 程序运行
- 编辑器打开文件
- 查看图片
- 播放视频
- 播放音乐
- Git 查看日志
- 上传文件
- 查看聊天记录
<a name="h7YGA"></a>
### 3.文件移动与重命名
在 Node.js 中，我们可以使用 rename 或 renameSync 来移动或重命名文件或文件夹<br />语法：<br />fs.rename(oldPath, newPath, callback)<br />fs.renameSync(oldPath, newPath)<br />参数说明：

- oldPath 文件当前的路径
- newPath 文件新的路径
- callback 操作后的回调
```javascript
fs.rename('./观书有感.txt', './论语/观书有感.txt', (err) =>{
	if(err) throw err;
	console.log('移动完成')
});
fs.renameSync('./座右铭.txt', './论语/我的座右铭.txt');
```
<a name="FOQYj"></a>
### 4.文件删除
在 Node.js 中，我们可以使用 unlink 或 unlinkSync 来删除文件<br />语法：<br />fs.unlink(path, callback)<br />fs.unlinkSync(path)<br />参数说明：

- path 文件路径
- callback 操作后的回调
```javascript
const fs = require('fs');
fs.unlink('./test.txt', err => {
	if(err) throw err;
	console.log('删除成功');
});
fs.unlinkSync('./test2.txt');
```
<a name="pChb5"></a>
### 5.文件夹操作
借助 Node.js 的能力，我们可以对文件夹进行创建 、读取、 删除等操作

| 方法 | 说明 |
| --- | --- |
| mkdir / mkdirSync | 创建文件夹 |
| readdir / readdirSync | 读取文件夹 |
| rmdir / rmdirSync | 删除文件夹 |

<a name="SrYYy"></a>
#### 1.mkdir 创建文件夹
在 Node.js 中，我们可以使用 mkdir 或 mkdirSync 来创建文件夹<br />语法：<br />fs.mkdir(path[, options], callback)<br />fs.mkdirSync(path[, options])<br />参数说明：

- path 文件夹路径
- options 选项配置（ 可选）
- callback 操作后的回调
```javascript
//异步创建文件夹
fs.mkdir('./page', err => {
if(err) throw err;
console.log('创建成功');
});
//递归异步创建
fs.mkdir('./1/2/3', {recursive: true}, err => {
if(err) throw err;
console.log('递归创建成功');
});
//递归同步创建文件夹
fs.mkdirSync('./x/y/z', {recursive: true});
```
<a name="nx6Oy"></a>
#### 2.readdir 读取文件夹
在 Node.js 中，我们可以使用 rmdir 或 rmdirSync 来删除文件夹<br />语法：<br />fs.rmdir(path[, options], callback)<br />fs.rmdirSync(path[, options])<br />参数说明：

- path 文件夹路径
- options 选项配置（ 可选）
- callback 操作后的回调
```javascript
//异步删除文件夹
fs.rmdir('./page', err => {
if(err) throw err;
console.log('删除成功');
});
//异步递归删除文件夹
fs.rmdir('./1', {recursive: true}, err => {
if(err) {
console.log(err);
}
console.log('递归删除')
});
//同步递归删除文件夹
fs.rmdirSync('./x', {recursive: true})
```
<a name="zEY23"></a>
### 6.查看资源状态
在 Node.js 中，我们可以使用 stat 或 statSync 来查看资源的详细信息<br />语法：<br />fs.stat(path[, options], callback)<br />fs.statSync(path[, options])<br />参数说明：

- path 文件夹路径
- options 选项配置（ 可选）
- callback 操作后的回调
```javascript
//异步获取状态
fs.stat('./data.txt', (err, data) => {
if(err) throw err;
console.log(data);
});
//同步获取状态
let data = fs.statSync('./data.txt');
```
<a name="fJ5gf"></a>
### 7.相对路径问题
fs 模块对资源进行操作时，路径的写法有两种：

- 相对路径
- ./座右铭.txt 当前目录下的座右铭.txt
- 座右铭.txt 等效于上面的写法
- ../座右铭.txt 当前目录的上一级目录中的座右铭.txt
- 绝对路径
- D:/Program Files windows 系统下的绝对路径
- /usr/bin Linux 系统下的绝对路径

相对路径中所谓的当前目录，指的是命令行的工作目录，而并非是文件的所在目录<br />所以当命令行的工作目录与文件所在目录不一致时，会出现一些 BUG
<a name="qfN12"></a>
### 8.__dirname
__dirname 与 require 类似，都是 Node.js 环境中的'全局'变量<br />__dirname 保存着当前文件所在目录的绝对路径，可以使用 __dirname 与文件名拼接成绝对路径
```javascript
let data = fs.readFileSync(__dirname + '/data.txt');
console.log(data);
```
使用 fs 模块的时候，尽量使用 __dirname 将路径转化为绝对路径，这样可以避免相对路径产生的Bug
<a name="I5wyc"></a>
## path 模块
path 模块提供了操作路径的功能

| API | 说明 |
| --- | --- |
| path.resolve | 拼接规范的绝对路径 常用 |
| path.sep | 获取操作系统的路径分隔符 |
| path.parse | 解析路径并返回对象 |
| path.basename | 获取路径的基础名称 |
| path.dirname | 获取路径的目录名 |
| path.extname | 获得路径的扩展名 |

```javascript
const path = require('path');
//获取路径分隔符
console.log(path.sep);
//拼接绝对路径
console.log(path.resolve(__dirname, 'test'));
//解析路径
let pathname = 'D:/program file/nodejs/node.exe';
console.log(path.parse(pathname));
//获取路径基础名称
console.log(path.basename(pathname))
//获取路径的目录名
console.log(path.dirname(pathname));
//获取路径的扩展名
console.log(path.extname(pathname));
```
<a name="zbqjQ"></a>
## HTTP 协议
<a name="Fvv3Z"></a>
### 1.概念
HTTP（hypertext transport protocol）协议；中文叫超文本传输协议<br />是一种基于TCP/IP的应用层通信协议<br />这个协议详细规定了浏览器和万维网服务器之间互相通信的规则。<br />协议中主要规定了两个方面的内容<br />客户端：用来向服务器发送数据，可以被称之为请求报文<br />服务端：向客户端返回数据，可以被称之为响应报文<br />报文：可以简单理解为就是一堆字符串
<a name="naqi7"></a>
### 2.请求报文的组成

- 请求行
- 请求头
- 空行
- 请求体
<a name="TuIv8"></a>
### 3.HTTP 的请求行

- 请求方法（get、post、put、delete等）
- 请求 URL（统一资源定位器）

例如： [http://www.baidu.com:80/index.html?a=100&b=200#logo](http://www.baidu.com:80/index.html?a=100&b=200#logo)

   - http： 协议（https、ftp、ssh等）
   - www.baidu.com 域名
   - 80 端口号
   - /index.html 路径
   - a=100&b=200 查询字符串
   - #logo 哈希（锚点链接）
- HTTP协议版本号
<a name="mVAAl"></a>
### 4.HTTP 请求头
格式：『头名：头值』<br />常见的请求头有：

| 请求头 | 解释 |
| --- | --- |
| Host | 主机名 |
| Connection | 连接的设置 keep-alive（保持连接）；close（关闭连接） |
| Cache-Control | 缓存控制 max-age = 0 （没有缓存） |
| Upgrade-Insecure-Requests | 将网页中的http请求转化为https请求（很少用）老网站升级 |
| User-Agent | 用户代理，客户端字符串标识，服务器可以通过这个标识来识别这个请求来自哪个客户端 ，一般在PC端和手机端的区分 |
| Accept | 设置浏览器接收的数据类型 |
| Accept-Encoding | 设置接收的压缩方式 |
| Accept-Language | 设置接收的语言 q=0.7 为喜好系数，满分为1 |
| Cookie |  |

<a name="PVFJb"></a>
### 5.HTTP 的请求体
请求体内容的格式是非常灵活的，<br />（可以是空）==> GET请求，<br />（也可以是字符串，还可以是JSON）===> POST请求<br />例如：

- 字符串：keywords=手机&price=2000
- JSON：{"keywords":"手机","price":2000}
<a name="Yh21z"></a>
### 6.响应报文的组成

- 响应行
   - HTTP/1.1：HTTP协议版本号
   - 200：响应状态码 404 Not Found 500 Internal Server Error还有一些状态码，[参考](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status)
   - OK：响应状态描述

响应状态码和响应字符串关系是一一对应的。

- 响应头
```javascript
Cache-Control:缓存控制 private 私有的，只允许客户端缓存数据
Connection 链接设置
Content-Type:text/html;charset=utf-8 设置响应体的数据类型以及字符集,响应体为html，字符集
utf-8
Content-Length:响应体的长度，单位为字节
```

- 空行
- 响应体

响应体内容的类型是非常灵活的，常见的类型有 HTML、CSS、JS、图片、JSON
<a name="mc5Gk"></a>
### 7.创建 HTTP 服务
使用 nodejs 创建 HTTP 服务
<a name="uGSlj"></a>
#### 1.操作步骤
```javascript
//1. 导入 http 模块
const http = require('http');
//2. 创建服务对象 create 创建 server 服务
// request 意为请求. 是对请求报文的封装对象, 通过 request 对象可以获得请求报文的数据
// response 意为响应. 是对响应报文的封装对象, 通过 response 对象可以设置响应报文
const server = http.createServer((request, response) => {
response.end('Hello HTTP server');
});
//3. 监听端口, 启动服务
server.listen(9000, () => {
console.log('服务已经启动, 端口 9000 监听中...');
});
```
http.createServer 里的回调函数的执行时机： 当接收到 HTTP 请求的时候，就会执行
<a name="kcK3i"></a>
#### 2.测试
浏览器请求对应端口 http://127.0.0.1:9000
<a name="hWYDF"></a>
#### 3.注意事项

1. 命令行 ctrl + c 停止服务
2. 当服务启动后，更新代码必须重启服务才能生效
3. 响应内容中文乱码的解决办法
4. 端口号被占用<br />1）关闭当前正在运行监听端口的服务 （ 使用较多）<br />2）修改其他端口号
5. HTTP 协议默认端口是 80 。HTTPS 协议的默认端口是 443, HTTP 服务开发常用端口有 3000，<br />8080，8090，9000 等<br />如果端口被其他程序占用，可以使用资源监视器找到占用端口的程序，然后使用任务管理器关闭<br />对应的程序
<a name="YBPhG"></a>
### 8.浏览器查看 HTTP 报文
![image.png](https://cdn.nlark.com/yuque/0/2023/png/22527936/1681891607118-d3f054c2-e74b-4e94-a61c-6581c4b7f75c.png#averageHue=%23ddc296&clientId=uef4be2d9-8c92-4&from=paste&height=432&id=ua6cb412c&originHeight=432&originWidth=1920&originalType=binary&ratio=1&rotation=0&showTitle=false&size=46711&status=done&style=none&taskId=u60fb8def-8b67-4701-8f5a-17ad4a61a66&title=&width=1920)1.查看请求行与请求头<br />![image.png](https://cdn.nlark.com/yuque/0/2023/png/22527936/1681891626766-fc2c13ae-ccf7-431d-98ef-3b9c4db6d3b0.png#averageHue=%2376624a&clientId=uef4be2d9-8c92-4&from=paste&height=713&id=ua124b780&originHeight=713&originWidth=1920&originalType=binary&ratio=1&rotation=0&showTitle=false&size=109036&status=done&style=none&taskId=ub74e3170-deb3-4731-a7fa-7b22c8c065b&title=&width=1920)
<a name="Mcb3N"></a>
#### 2. 查看请求体
![image.png](https://cdn.nlark.com/yuque/0/2023/png/22527936/1681891632340-c75ffb66-2efa-403e-9673-167766b165b5.png#averageHue=%23f9f9f9&clientId=uef4be2d9-8c92-4&from=paste&height=713&id=udc49e1cf&originHeight=713&originWidth=1920&originalType=binary&ratio=1&rotation=0&showTitle=false&size=62565&status=done&style=none&taskId=u93494120-8a7a-4a87-b4f2-3e9141baf2a&title=&width=1920)
<a name="Oq6de"></a>
#### 3. 查看 URL 查询字符串
![image.png](https://cdn.nlark.com/yuque/0/2023/png/22527936/1681891680636-a47efc96-c032-4a19-ae7c-d6892ea81195.png#averageHue=%23fbfbfb&clientId=uef4be2d9-8c92-4&from=paste&height=713&id=u02f17ad5&originHeight=713&originWidth=1920&originalType=binary&ratio=1&rotation=0&showTitle=false&size=63625&status=done&style=none&taskId=u15b4b21f-7c21-41f4-96d5-93bb3cf3038&title=&width=1920)
<a name="O5qr2"></a>
#### 4.查看响应行与响应头
![image.png](https://cdn.nlark.com/yuque/0/2023/png/22527936/1681891706518-8cb7c722-9258-416d-bb59-f4f9f76be026.png#averageHue=%23e6c086&clientId=uef4be2d9-8c92-4&from=paste&height=562&id=ud07ea98a&originHeight=562&originWidth=1920&originalType=binary&ratio=1&rotation=0&showTitle=false&size=67306&status=done&style=none&taskId=ubeaaec7d-086c-46fc-9fca-0ea9b9dced8&title=&width=1920)
<a name="KmyKm"></a>
#### 5.查看响应体
![image.png](https://cdn.nlark.com/yuque/0/2023/png/22527936/1681891733277-07cc146e-d2d8-48c4-a09b-687d7cd07bb5.png#averageHue=%23ecbf79&clientId=uef4be2d9-8c92-4&from=paste&height=713&id=uf8afecb6&originHeight=713&originWidth=1920&originalType=binary&ratio=1&rotation=0&showTitle=false&size=72271&status=done&style=none&taskId=uc058c8c4-3fd3-4614-a6f5-8e542e18660&title=&width=1920)
<a name="X3fmT"></a>
### 9.获取 HTTP 请求报文
想要获取请求的数据，需要通过 request 对象

| 请求方法  | request.method  |
| --- | --- |
| 请求版本 | request.httpVersion |
| 请求路径 | request.url |
| URL路径 | request('url').parse(request.url,true).pathName |
| URL查询字符串 | request('url').parse(request.url,true).query |
| 请求头 | request.headers |
| 请求体 | ```javascript
let body = ''
request.on('data', data => {
        body += data.toString()
    })
    request.on('end', () => {
        console.log(body);
    });
```
 |

注意事项: 

1. request.url只能获取路径以及查询字符串，无法获取URL中的域名以及协议的内容
2. request.headers将请求信息转化成一个对象，并将属性名都转化成了『小写』
3. 关于路径:如果访问网站的时候，只填写了IP地址或者是域名信息，此时请求的路径为『/』 4. 关于favicon.ico:这个请求是属于浏览器自动发送的请求
<a name="Fx83v"></a>
### **10.设置HTTP 请求报文**
| **作用** | **语法** |
| --- | --- |
| 设置响应状态码 | response.statusCode |
| 设置响应头信息 | response.setHeader('头名', '头值')  |
| 设置响应状态描述 | 设置响应状态描述 response.statusMessage ( 用的非常少 )  |
| 设置响应体  | response.write('xx') response.end('xxx') |

<a name="MrpA9"></a>
### 11.设置资源类型(mime类型)
媒体类型(通常称为 Multipurpose Internet Mail Extensions 或 MIME 类型 )是一种标准，用来表示文档、 文件或字节流的性质和格式。<br /> mime 类型结构: [type]/[subType]  例如: text/html text/css image/jpeg image/png application/json 
:::tips
html: 'text/html', <br />css: 'text/css', <br />js: 'text/javascript', <br />png: 'image/png', <br />jpg: 'image/jpeg', <br />gif: 'image/gif', <br />mp4: 'video/mp4', <br />mp3: 'audio/mpeg', <br />json: 'application/json' 
:::
 
```javascript
require("http").createServer((request, response) => {
    //获取请求的方法已经路径
    let { url, method } = request;
    //文件夹路径
    let rootDir = __dirname + "/public"; //拼接文件路径
    let filePath = rootDir + url; //读取文件内容 fs.readFile(filePath,(err,data)=>{
    //判断
    if (err) {
      //如果出现错误，响应404状态码 response.statusCode = 404; response.end('<h1>404 Not Found</h1>');
    } else {
      //响应文件内容
      response.end(data);
    }
  })
  .listen(80, () => {
    console.log("80端口正在启动中....");
  });

```
<a name="I9JOV"></a>
## 管理发布包
<a name="qsqrU"></a>
### 创建与发布	
我们可以将自己开发的工具包发布到 npm 服务上，方便自己和其他开发者使用，操作步骤如下:

:::tips

1. 创建文件夹，并创建文件index.js，在文件中声明函数，使用module.exports暴露 2. npm初始化工具包，package.json填写包的信息(包的名字是唯一的)
2. 注册账号 [https://www.npmjs.com/signup](https://www.npmjs.com/signup)
3. 激活账号(一定要激活账号)
4. 修改为官方的官方镜像
5. 命令行下 npm login 填写相关用户信息
6. 命令行下 npm publish 提交包
:::
<a name="a08g4"></a>
### 2.更新包
后续可以对自己发布的包进行更新，操作步骤如下

1. 更新包中的代码
2. 测试代码是否可用 
3. 修改 package.json 中的版本号
4. 发布更新  npm publish	 	 		
<a name="bm9Kw"></a>
### 3.删除包			
npm unpublish --force 
<a name="unl3R"></a>
## express 						
```javascript
const express = require("express");
const app = express();
app.get("/home", (req, res) => {
  //原生
  console.log(req.method);
  console.log(req.url);
  console.log(req.httpVersion);
  console.log(req.headers);
  //express 操作
  console.log(req.path);
  console.log(req.query);
  //获取ip
  console.log(req.ip);
  //获取请求头
  console.log(req.get("host"));
  res.end("hello world");
});
app.get('/:id.html',(req,res)=>{
    console.log(req.params.id);
    res.end("hello");
})
//设置响应
app.get("/about", (req, res) => {
  //原生
  // res.statusCode = 400;
  // res.statusMessage = "not found"
  // res.setHeader("Content-Type", "text/html;charset=utf-8");
  // res.write("hello111");
  // res.end("hello");
  //express
  //自动添加res.setHeader("Content-Type", "text/html;charset=utf-8");中文不会乱码
  res.status(500).set('aaa','bbb').end("hello");
});
app.listen(3000, () => {
  console.log("server is running");
});
```
<a name="AgKEK"></a>
###   1.express中间件						
中间件(Middleware)本质是一个回调函数<br />中间件函数 可以像路由回调一样访问 请求对象(request) ， 响应对象(response) 				   中间件的作用 就是 使用函数封装公共操作，简化代码 
:::tips
全局中间件<br />路由中间件 
:::
每一个请求 到达服务端之后 都会执行全局中间件函数 

![image.png](https://cdn.nlark.com/yuque/0/2023/png/22527936/1686120610288-e2c99671-dbec-4289-9027-c94bd82254eb.png#averageHue=%23f4f3f3&clientId=udefaf894-88fd-4&from=paste&height=906&id=uc88b44f3&originHeight=906&originWidth=1666&originalType=binary&ratio=1&rotation=0&showTitle=false&size=241199&status=done&style=none&taskId=u555df131-e77f-4bf9-8c0c-593ef6c2156&title=&width=1666)<br />声明时可以直接将匿名函数传递给 use  							
```javascript
app.use(function (request, response, next) { 
  console.log('定义第一个中间件'); 
  next(); 
})	
app.use(function (request, response, next) {
  console.log('定义第二个中间件'); 
  next(); 
})
```
<a name="lZmHY"></a>
#### 1.定义路由中间件	
```javascript
如果 只需要对某一些路由进行功能封装 ，则就需要路由中间件
app.get('/路径',`中间件函数`,(request,response)=>{ }); 
app.get('/路径',`中间件函数1`,`中间件函数2`,(request,response)=>{ });
```
<a name="k5Wnq"></a>
#### 2.静态资源中间件 			
```javascript
//引入express框架 
const express = require('express'); 
//创建服务对象 
const app = express(); 
//静态资源中间件的设置，将当前文件夹下的public目录作为网站的根目录 
app.use(express.static('./public')); 
//当然这个目录中都是一些静态资源 //如果访问的内容经常变化，还是需要设置路由 
//但是，在这里有一个问题，如果public目录下有index.html文件，单独也有index.html的路由， 
//则谁书写在前，优先执行谁 
app.get('/index.html',(request,response)=>{ 
  respsonse.send('首页');
}); 
//监听端口
app.listen(3000,()=>{ 
  console.log('3000 端口启动....'); 
});
```
>  注意事项: 
> 1. index.html 文件为默认打开的资源<br />2. 如果静态资源与路由规则同时匹配，谁先匹配谁就响应<br />3. 路由响应动态资源，静态资源中间件响应静态资源	

<a name="Oi5UC"></a>
#### 3. 获取请求体数据 body-parser	 
express 可以使用 body-parser 包处理请求体			<br />第一步：安装  
```javascript
npm i body-parser 
```
第二步：导入 body-parser 包 
```javascript
const bodyParser = require('body-parser'); 
```
第三步：获取中间件函数 
```javascript
//处理 querystring 格式的请求体 
let urlParser = bodyParser.urlencoded({extended:false})); 
//处理 JSON 格式的请求体 
let jsonParser = bodyParser.json();
```
第四步：设置路由中间件，然后使用 request.body 来获取请求体数据 
```javascript
app.post('/login', urlParser, (request,response)=>{ 
	//获取请求体数据 
	console.log(request.body); 
	//用户名 
	console.log(request.body.username); 
	//密码 
	console.log(request.body.userpass); 
	response.send('获取请求体数据'); 
}); 			
```
<a name="a40c6"></a>
## mongodb
<a name="shkd3"></a>
### 1.简介
<a name="QRjUZ"></a>
#### **1.1 Mongodb 是什么 **
MongoDB 是一个基于分布式文件存储的数据库	 				 <br />**1.2 数据库**				<br />数据库（DataBase）是按照数据结构来组织、存储和管理数据的 应用程序 <br />数据库的主要作用就是 管理数据 ，对数据进行 增（c）、删（d）、改（u）、查（r） 		 	<br />相比于纯文件管理数据，数据库管理数据有如下特点：

1. 速度更快
2. 扩展性更强
3. 安全性更强

** Mongodb**操作语法与 JavaScript 类似，容易上手，学习成本低
<a name="W7Ddt"></a>
### 2.核心概念
> Mongodb 中有三个重要概念需要掌握 
> 数据库（database） 数据库是一个数据仓库，数据库服务下可以创建很多数据库，数据库中可以存 
> 放很多集合 
> 集合（collection） 集合类似于 JS 中的数组，在集合中可以存放很多文档 
> 文档（document） 文档是数据库中的最小单位，类似于 JS 中的对象

```json
{
    "accounts": [
        {
            "id": "3-YLju5f3",
            "title": "买电脑",
            "time": "2023-02-08",
            "type": "-1",
            "account": "5500",
            "remarks": "为了上网课"
        },
        {
            "id": "3-YLju5f4",
            "title": "请女朋友吃饭",
            "time": "2023-02-08",
            "type": "-1",
            "account": "214",
            "remarks": "情人节聚餐"
        },
        {
            "id": "mRQiD4s3K",
            "title": "发工资",
            "time": "2023-02-19",
            "type": "1",
            "account": "4396",
            "remarks": "终于发工资啦!~~"
        }
    ],
    "users": [
        {
            "id": 1,
            "name": "zhangsan",
            "age": 18
        },
        {
            "id": 2,
            "name": "lisi",
            "age": 20
        },
        {
            "id": 3,
            "name": "wangwu",
            "age": 22
        }
    ]
}

```
可以通过 JSON 文件来理解 Mongodb 中的概念 

1. 一个 JSON 文件 好比是一个 数据库 ，一个 Mongodb 服务下可以有 N 个数据库 
2. JSON 文件中的 一级属性的数组值 好比是 集合 
3. 数组中的对象好比是 文档 
4. 对象中的属性有时也称之为 字段 
:::success
一般情况下 

1. 一个项目使用一个数据库 
2. 一个集合会存储同一种类型的数据 
:::
<a name="I5y4s"></a>
### 3.命令行安装
:::success
brew tap mongodb/brew<br />brew update<br />brew install mongodb-community[@6.0 ](/6.0 ) <br />启动 brew services start mongodb-community[@6.0 ](/6.0 ) <br />停止 brew services stop mongodb-community[@6.0 ](/6.0 ) 
:::
<br />![image.png](https://cdn.nlark.com/yuque/0/2023/png/22527936/1691393495559-3b1523f0-a0b1-43f3-a5da-79ca6407fd51.png#averageHue=%23282828&clientId=u4229d02e-2f87-4&from=paste&height=528&id=u3771afe1&originHeight=528&originWidth=1424&originalType=binary&ratio=1&rotation=0&showTitle=false&size=541479&status=done&style=none&taskId=ua87d0bba-e4e5-41e0-b71b-bfb45da4ca9&title=&width=1424)<br />![image.png](https://cdn.nlark.com/yuque/0/2023/png/22527936/1691393808755-f37f4a8c-59c5-4cae-b63a-879c0116247a.png#averageHue=%232e3032&clientId=u4229d02e-2f87-4&from=paste&height=63&id=JeVOd&originHeight=154&originWidth=638&originalType=binary&ratio=1&rotation=0&showTitle=false&size=27605&status=done&style=stroke&taskId=u6af5b7e8-bba5-4e2f-879e-30b807f0a5a&title=&width=263)<br />![image.png](https://cdn.nlark.com/yuque/0/2023/png/22527936/1691393792341-07f3e329-fd68-4353-a80a-985c978a4bb6.png#averageHue=%2333362a&clientId=u4229d02e-2f87-4&from=paste&height=700&id=u7b6259eb&originHeight=700&originWidth=1540&originalType=binary&ratio=1&rotation=0&showTitle=false&size=146931&status=done&style=none&taskId=ud35871f1-27dc-4a47-bd23-6f906edc122&title=&width=1540)
<a name="Golp8"></a>
### 4.命令行
:::success
显示所有的数据库 <br />show dbs<br />切换到指定的数据库，如果数据库不存在会自动创建数据库<br />use 数据库名<br />显示当前所在的数据库<br />db<br />删除当前数据库<br />use 库名<br />db.dropDatabase()<br />创建集合<br />db.createCollection('集合名称')<br />显示当前数据库中的所有集合<br />show collections<br />删除某个集合  <br />db.集合名.drop() <br />重命名集合<br />db.集合名.renameCollection('newName') <br />插入文档  <br />db.集合名.insert(文档对象); <br />查询文档<br />db.集合名.find(查询条件) ;<br />_id 是 mongodb 自动生成的唯一编号，用来唯一标识文档 <br />更新文档<br />db.集合名.update(查询条件,新的文档) <br />db.集合名.update({name:'张三'},{$set:{age:19}})<br />删除文档 <br />db.集合名.remove(查询条件)
:::
 	 <br /> 						<br /> 					<br /> 				<br /> 			<br /> 		<br /> 	 
<a name="xYU2p"></a>
### 5.Mongoose
<a name="nSHtx"></a>
#### 1.介绍
Mongoose是一个对象文档模型库
<a name="WoYEw"></a>
#### 2.作用  
方便使用代码操作 mongodb 数据库

