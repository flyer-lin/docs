## 如何处理并发操作？

减少HTTP请求，减少css，js，image等组件的请求数（例如设置地图图片请求）
添加异步请求（ajax的异步请求等）
启用浏览器缓存和文件压缩
CDN加速（通过中心平台的负载均衡、内容分发、调度等功能模块，使用户就近获取所需内容，降低网络拥塞，提高用户访问响应速度和命中率）

建立独立的图片服务器

[https://blog.csdn.net/weixin_43044707/article/details/89162523](https://blog.csdn.net/weixin_43044707/article/details/89162523)

## ajax和axios有什么区别？什么是promise对象？

本质上都是对XMLHttpRequest异步对象的封装.
Jquery的ajax是通过回调函数的形式获取数据的,而axios是通过Promise对象来获取数据的,而这也是axios最大的优点.

promise对象优化了异步编程的写法,使代码变得更有条理,一定程度上避免了回调地狱这个天坑。

### axios的优点

[https://zhuanlan.zhihu.com/p/355511031](https://zhuanlan.zhihu.com/p/355511031)

```git
从浏览器中创建 XMLHttpRequests
从 node.js 创建 http 请求
支持 Promise API
拦截请求和响应
转换请求数据和响应数据
取消请求
自动转换 JSON 数据
客户端支持防御 XSRF
```

## HTTP和TCP的区别和联系

TCP是传输协议，HTTP是应用协议。

HTTP承载在TCP之上。

HTTP是打电话说的语言TCP是电话线。

[https://mp.weixin.qq.com/s/TMe5QsBL6t6YPt_vLHNZ6w](https://mp.weixin.qq.com/s/TMe5QsBL6t6YPt_vLHNZ6w)

## 生产者与消费者模型

[https://www.jianshu.com/p/f53fb95b5820](https://www.jianshu.com/p/f53fb95b5820)

生产者和消费者问题是线程模型中的经典问题：生产者和消费者在同一时间段内共用同一个存储空间，生产者往存储空间中添加产品，消费者从存储空间中取走产品，当存储空间为空时，消费者阻塞，当存储空间满时，生产者阻塞。

![](https://upload-images.jianshu.io/upload_images/2728175-8093bd376d0c022d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/745/format/webp#id=nP3wH&originHeight=150&originWidth=745&originalType=binary&ratio=1&status=done&style=none)

三种角色：生产者、消费者、仓库，储存空间就是仓库

两种关系：生产者与生产者之间是互斥关系，消费者与消费者之间是互斥关系，生产者与消费者之间是同步与互斥关系。

一个交易场所：仓库（这里我们用阻塞队列来表示），解耦–生产者。消费者之间不直接通信，降低了耦合度。

支持并发，支持忙闲不均。

## TCP三次握手和四次挥手

[https://baijiahao.baidu.com/s?id=1654225744653405133&wfr=spider&for=pc](https://baijiahao.baidu.com/s?id=1654225744653405133&wfr=spider&for=pc)

### **”三次握手”的详解**

所谓的三次握手即TCP连接的建立。这个连接必须是一方主动打开，另一方被动打开的。以下为客户端主动发起连接的图解：

![](https://pics1.baidu.com/feed/d8f9d72a6059252d20d93b0a6645fb3e59b5b9d2.jpeg?token=c86d4509157378798ebbccbe843486d1&s=9746F8123F5754CA48D574DA0300D0B2#id=TPrCa&originHeight=337&originWidth=522&originalType=binary&ratio=1&status=done&style=none)

握手之前主动打开连接的客户端结束CLOSED阶段，被动打开的服务器端也结束CLOSED阶段，并进入LISTEN阶段。随后开始“三次握手”：

（1）首先客户端向服务器端发送一段TCP报文，其中：标记位为SYN，表示“请求建立新连接”;序号为Seq=X（X一般为1）；随后客户端进入SYN-SENT阶段。

（2）服务器端接收到来自客户端的TCP报文之后，结束LISTEN阶段。并返回一段TCP报文，其中：标志位为SYN和ACK，表示“确认客户端的报文Seq序号有效，服务器能正常接收客户端发送的数据，并同意创建新连接”（即告诉客户端，服务器收到了你的数据）；序号为Seq=y；确认号为Ack=x+1，表示收到客户端的序号Seq并将其值加1作为自己确认号Ack的值；随后服务器端进入SYN-RCVD阶段。

（3）客户端接收到来自服务器端的确认收到数据的TCP报文之后，明确了从客户端到服务器的数据传输是正常的，结束SYN-SENT阶段。并返回最后一段TCP报文。其中：标志位为ACK，表示“确认收到服务器端同意连接的信号”（即告诉服务器，我知道你收到我发的数据了）；序号为Seq=x+1，表示收到服务器端的确认号Ack，并将其值作为自己的序号值；确认号为Ack=y+1，表示收到服务器端序号Seq，并将其值加1作为自己的确认号Ack的值；随后客户端进入ESTABLISHED阶段。服务器收到来自客户端的“确认收到服务器数据”的TCP报文之后，明确了从服务器到客户端的数据传输是正常的。结束SYN-SENT阶段，进入ESTABLISHED阶段。在客户端与服务器端传输的TCP报文中，双方的确认号Ack和序号Seq的值，都是在彼此Ack和Seq值的基础上进行计算的，这样做保证了TCP报文传输的连贯性。一旦出现某一方发出的TCP报文丢失，便无法继续"握手"，以此确保了"三次握手"的顺利完成。

此后客户端和服务器端进行正常的数据传输。这就是“三次握手”的过程。

#### **为什么要进行第三次握手？**

为了防止服务器端开启一些无用的连接增加服务器开销以及防止已失效的连接请求报文段突然又传送到了服务端，因而产生错误。

### **“四次挥手”的详解**

所谓的四次挥手即TCP连接的释放(解除)。连接的释放必须是一方主动释放，另一方被动释放。以下为客户端主动发起释放连接的图解：

![](https://pics5.baidu.com/feed/48540923dd54564e5260495ce0006487d0584fb6.jpeg?token=c3a743af38e25ff66deb6a07891be58e&s=C584FC1A71CFF4EE1A75A45203007073#id=azSyJ&originHeight=454&originWidth=553&originalType=binary&ratio=1&status=done&style=none)

挥手之前主动释放连接的客户端结束ESTABLISHED阶段。随后开始“四次挥手”：

（1）首先客户端想要释放连接，向服务器端发送一段TCP报文，其中：标记位为FIN，表示“请求释放连接“；序号为Seq=U；随后客户端进入FIN-WAIT-1阶段，即半关闭阶段。并且停止在客户端到服务器端方向上发送数据，但是客户端仍然能接收从服务器端传输过来的数据。注意：这里不发送的是正常连接时传输的数据(非确认报文)，而不是一切数据，所以客户端仍然能发送ACK确认报文。

（2）服务器端接收到从客户端发出的TCP报文之后，确认了客户端想要释放连接，随后服务器端结束ESTABLISHED阶段，进入CLOSE-WAIT阶段（半关闭状态）并返回一段TCP报文，其中：标记位为ACK，表示“接收到客户端发送的释放连接的请求”；序号为Seq=V；确认号为Ack=U+1，表示是在收到客户端报文的基础上，将其序号Seq值加1作为本段报文确认号Ack的值；随后服务器端开始准备释放服务器端到客户端方向上的连接。客户端收到从服务器端发出的TCP报文之后，确认了服务器收到了客户端发出的释放连接请求，随后客户端结束FIN-WAIT-1阶段，进入FIN-WAIT-2阶段前"两次挥手"既让服务器端知道了客户端想要释放连接，也让客户端知道了服务器端了解了自己想要释放连接的请求。于是，可以确认关闭客户端到服务器端方向上的连接了

（3）服务器端自从发出ACK确认报文之后，经过CLOSED-WAIT阶段，做好了释放服务器端到客户端方向上的连接准备，再次向客户端发出一段TCP报文，其中：标记位为FIN，ACK，表示“已经准备好释放连接了”。注意：这里的ACK并不是确认收到服务器端报文的确认报文。序号为Seq=W；确认号为Ack=U+1；表示是在收到客户端报文的基础上，将其序号Seq值加1作为本段报文确认号Ack的值。随后服务器端结束CLOSE-WAIT阶段，进入LAST-ACK阶段。并且停止在服务器端到客户端的方向上发送数据，但是服务器端仍然能够接收从客户端传输过来的数据。

（4）客户端收到从服务器端发出的TCP报文，确认了服务器端已做好释放连接的准备，结束FIN-WAIT-2阶段，进入TIME-WAIT阶段，并向服务器端发送一段报文，其中：标记位为ACK，表示“接收到服务器准备好释放连接的信号”。序号为Seq=U+1；表示是在收到了服务器端报文的基础上，将其确认号Ack值作为本段报文序号的值。确认号为Ack=W+1；表示是在收到了服务器端报文的基础上，将其序号Seq值作为本段报文确认号的值。随后客户端开始在TIME-WAIT阶段等待2MSL服务器端收到从客户端发出的TCP报文之后结束LAST-ACK阶段，进入CLOSED阶段。由此正式确认关闭服务器端到客户端方向上的连接。

客户端等待完2MSL之后，结束TIME-WAIT阶段，进入CLOSED阶段，由此完成“四次挥手”。后“两次挥手”既让客户端知道了服务器端准备好释放连接了，也让服务器端知道了客户端了解了自己准备好释放连接了。于是，可以确认关闭服务器端到客户端方向上的连接了，由此完成“四次挥手”。与“三次挥手”一样，在客户端与服务器端传输的TCP报文中，双方的确认号Ack和序号Seq的值，都是在彼此Ack和Seq值的基础上进行计算的，这样做保证了TCP报文传输的连贯性，一旦出现某一方发出的TCP报文丢失，便无法继续"挥手"，以此确保了"四次挥手"的顺利完成。

## 为什么视频可以用UDP

[https://blog.csdn.net/Ysunflower/article/details/87655348](https://blog.csdn.net/Ysunflower/article/details/87655348)

UDP是一个无状态的传输协议，所以它在传递数据时非常快。效率高，当对网络通讯质量要求不高的时候，要求网络通讯速度能尽量的快，不可靠性，当传输数据画面丢包很少时，基本不受影响。

## 线程和进程的区别

[https://www.zhihu.com/question/25532384](https://www.zhihu.com/question/25532384)

**进程是资源分配的最小单位，线程是CPU调度的最小单位**

做个简单的比喻：进程=火车，线程=车厢

- 线程在进程下行进（单纯的车厢无法运行）
- 一个进程可以包含多个线程（一辆火车可以有多个车厢）**多线程**
- 不同进程间数据很难共享（一辆火车上的乘客很难换到另外一辆火车，比如站点换乘）
- 同一进程下不同线程间数据很易共享（A车厢换到B车厢很容易）
- 进程要比线程消耗更多的计算机资源（采用多列火车相比多个车厢更耗资源）
- 进程间不会相互影响，一个线程挂掉将导致整个进程挂掉（一列火车不会影响到另外一列火车，但是如果一列火车上中间的一节车厢着火了，将影响到所有车厢）
- 进程可以拓展到多机，进程最多适合多核（不同火车可以开在多个轨道上，同一火车的车厢不能在行进的不同的轨道上）
- 进程使用的内存地址可以上锁，即一个线程使用某些共享内存时，其他线程必须等它结束，才能使用这一块内存。（比如火车上的洗手间）－"互斥锁"
- 进程使用的内存地址可以限定使用量（比如火车上的餐厅，最多只允许多少人进入，如果满了需要在门口等，等有人出来了才能进去）－“信号量”

## 箭头函数和普通函数的区别

[https://www.jianshu.com/p/231a6f58e00b](https://www.jianshu.com/p/231a6f58e00b)

箭头函数本身没有prototype。所以箭头函数本身没有this。

箭头函数的this永远指向其上下文，改变不了其this的指向。

普通函数的this指向调用它的那个对象。

箭头函数相当于一个匿名函数 不能作为构造函数 不能new。

箭头函数不能换行。

## JavaScript中的this、

[https://www.runoob.com/js/js-this.html](https://www.runoob.com/js/js-this.html)

this 表示当前对象的一个引用

- 在方法中，this 表示该方法所属的对象。
- 如果单独使用，this 表示全局对象。
- 在函数中，this 表示全局对象。
- 在函数中，在严格模式下，this 是未定义的(undefined)。
- 在事件中，this 表示接收事件的元素。
- 类似 call() 和 apply() 方法可以将 this 引用到任何对象。

## VUE组件间通信的方式

[https://juejin.cn/post/6877101934600273934](https://juejin.cn/post/6877101934600273934)

1.在父组件中，通过 Prop 向子组件传递数据

	在子组件中，通过触发(`emit`)一个自定义事件，然后在父组件中使用 `v-on` 进行监听

2.vuex通过Mutation，Action

3.我们可以将全局状态挂载到 Vue 根实例上，this.$root调用根实例上的属性和方法。

4.依赖注入，provide / inject

- `provide` 选项允许我们指定我们想要提供给后代组件的数据/方法
- 然后在任何后代组件里，我们都可以使用 `inject` 选项来接收指定的我们想要添加在这个实例上的 property

5.Event Bus 又叫“全局事件总线”，是一个简易的全局状态管理器。

6.Vue.observable(object)

## http和https的区别

[https://www.cnblogs.com/wqhwe/p/5407468.html](https://www.cnblogs.com/wqhwe/p/5407468.html)

## CSS选择器有哪些，权重

元素选择器，标签选择器，类名选择器，属性选择器，id选择器，通配符选择器，

权重：id选择器，class选择器，标签选择器，通配符选择器

## sass和less差不多

Sass 的变量必须是 $ 开始，然后变量名和值使用冒号隔开，跟 CSS 的属性一致：

```
$mainColor: #0982c1;
$siteWidth: 1024px;
$borderStyle: dotted;
 
body {
  color: $mainColor;
  border: 1px $borderStyle $mainColor;
  max-width: $siteWidth;
}
```

而 Less 的变量名使用 @ 符号开始：

```
@mainColor: #0982c1;
@siteWidth: 1024px;
@borderStyle: dotted;
 
body {
  color: @mainColor;
  border: 1px @borderStyle @mainColor;
  max-width: @siteWidth;
}
```

## 伪类选择器

[https://segmentfault.com/q/1010000016790914](https://segmentfault.com/q/1010000016790914)

（1）**静态伪类**：只能用于**超链接**的样式。如下：

- `:link` 超链接点击之前
- `:visited` 链接被访问过之后

PS：以上两种样式，只能用于超链接。

（2）**动态伪类**：针对**所有标签**都适用的样式。如下：

-  `:hover` “悬停”：鼠标放到标签上的时候 
-  `:active` “激活”： 鼠标点击标签，但是不松手时。 
-  `:focus` 是某个标签获得焦点时的样式（比如某个输入框获得焦点） 

## 让一个元素垂直居中

[https://blog.csdn.net/NewFishCoder/article/details/53727131](https://blog.csdn.net/NewFishCoder/article/details/53727131)

- 行内元素line-height设置为父元素的高度
- 行内元素vertical middle
- top 50再向上移动元素一半的高度
- margin auto 这个方法非常神奇
- 加50高度的空div
- 单元格属性 table-cell

## promise的方法有哪些？

[https://blog.csdn.net/qq_43653724/article/details/106864760](https://blog.csdn.net/qq_43653724/article/details/106864760)

.all方法可以处理多个异步任务，只有多个任务同时成功，才能返回他的回调方法，有一个错误就调用catch方法捕获他。

.race方法跟all相反谁先执行完，谁就开始回调,其他的就不执行了

## js数据类型

**基本数据类型**：字符串（String）、数字(Number)、布尔(Boolean)、对空（Null）、未定义（Undefined）、Symbol。

**引用数据类型**：对象(Object)、数组(Array)、函数(Function)。

## js如何检测一个变量是什么类型？

1.typeof（）
优点：简单，直接输出结果；
缺点：检测出的类型太少，不能检测出object的具体类型
2.Object.prototype.toString.call()
优点：能检测所有类型；
缺点：ie6下undefined，null都是object
4.construtor()
优点：除了undefined和null，其它类型的变量都可以使用
缺点：属性可能被修改，会导致结果不正确，不能跨Iframe。

## ES6新增const  let var

let
⽤法：声明⼀个变量

	特点：
		只在声明的代码块内有效

		在同⼀作⽤域内不允许重复声明

		没有变量提升

		暂时性死区

const

	用法：声明一个只读的变量(可理解为常量)

	特点：同let命令

注意事项：

	变量声明的同时必须立即赋值

	如声明的是简单类型的数据，变量的值不可改变

实质：保证变量指向的内存地址所保存的数据不允许改动。

简单类型如字符串、数字和布尔值，值就保存在变量指向的内存地址。而复杂类型的数据如对象、数组和函	数，变量指向的内存地址，实际上是保存了指向实际数据的指针。所以const 只能保证指针是固定的，至于指针指向的数据结构变不变就无法控制了，所以使用const 声明复杂类型对象时要慎重。

### **什么是变量提升**？

JavaScript 中，函数及变量的声明都将被提升到函数的最顶部。
JavaScript 中，变量可以在使用后声明，也就是变量可以先使用再声明。

## 解构赋值的用途

[https://blog.csdn.net/Wang1996332/article/details/103133524](https://blog.csdn.net/Wang1996332/article/details/103133524)

交换变量的值，

从函数返回多个值，

解构赋值可以方便地将一组参数与变量名对应起来，

提取json对象数据，

将剩余数组赋值给一个变量，

注意：剩余元素必须是数组的最后一个元素，否则会抛出 SyntaxError 错误

## http请求有哪些类型？

[https://blog.csdn.net/qiuhaifeng_csu/article/details/40347911](https://blog.csdn.net/qiuhaifeng_csu/article/details/40347911)

get post delete put

get请求数据 post提交数据 delete删除数据 put上传数据

### 跨域如何解决？

1.通过jsonp 因为它的原理就是通过script标签里面的src标签 通过request请求他的get请求是没有跨域的

2.通过proxy代理，手动封装axios方式，用自己的请求地址前缀替代如果匹配成功就直接自动代理，把代理的路径写进去开启代理，把代理的前缀用空格代替 通过vueconfig.js来配置代理通过devServer 先配置host地址以及端口号然后在配置proxy 只要是请求路径含有所需要的代理的地址自动代理到target然后通过changeOrigin开启代理
通过pathRewrite重新写路径把路径重新写回

## vue里的data为啥是函数

Object是引用数据类型，如果不用function返回，每个组件的data都是内存的同一个地址，一个数据改变了其他也改变了；

因此每个实例可以维护一份被返回对象的独立拷贝。

## vue响应原理 数据双向绑定

在生成vue实例时，为对传入的data进行遍历，使用`Object.defineProperty`把这些属性转为`getter/setter`.

`Object.defineProperty` 是 ES5 中一个无法 shim 的特性，这也就是 Vue 不支持 IE8 以及更低版本浏览器的原因。

shim可以将新的API引入到旧的环境中，而且仅靠就环境中已有的手段实现。

文章中说的意思就是，Object.defineProperty这个特性是无法使用低级浏览器中的方法来实现的，所以Vue不支持IE8以及更低版本的浏览器。

es5-shim可以让一些低级的浏览器支持最新的ecmascript5的一些特性。支持浏览器或node.js，

## 对js原型链的理解

[https://www.cnblogs.com/tg666/p/12059205.html](https://www.cnblogs.com/tg666/p/12059205.html)

先构造函数创建对象 person，每个函数都有一个 prototype 属性

![](https://img2018.cnblogs.com/i-beta/1313930/201912/1313930-20191217103144777-1248876822.webp#id=NUPRs&originHeight=177&originWidth=556&originalType=binary&ratio=1&status=done&style=none)

```
js对象有一个属性叫 proto ,这个属性会指向该对象的原型
person.__proto__ === Person.prototype
```

![](https://img2018.cnblogs.com/i-beta/1313930/201912/1313930-20191218111807232-1787208990.webp#id=fFQXy&originHeight=265&originWidth=567&originalType=binary&ratio=1&status=done&style=none)

每一个原型都有一个 **constructor** 属性指向关联的构造函数，实例原型指向构造函数

```
Person === Person.prototype.constructor
```

![](https://img2018.cnblogs.com/i-beta/1313930/201912/1313930-20191218113558977-2145295039.webp#id=KbHoz&originHeight=245&originWidth=518&originalType=binary&ratio=1&status=done&style=none)

```
Object.getPrototypeOf(person) === Person.prototype
```

从 person 对象中找不到 name 属性就会从 person 的原型也就是 Person.proto ，也就是 Person.prototype中查找，找不到就到Person.prototype.proto也就是Object.prototype查找![](https://img2018.cnblogs.com/i-beta/1313930/201912/1313930-20191218115513173-440070455.webp#id=fpHBX&originHeight=497&originWidth=604&originalType=binary&ratio=1&status=done&style=none)

### HTML新特性

[https://www.cnblogs.com/gaosirs/p/10756524.html](https://www.cnblogs.com/gaosirs/p/10756524.html)

1.语义化标签

2.增强型表单（表单输入类型（search，tel，email），表单属性（placehoder,required））

3.音频和视频

4.canvas绘图，SVG绘图，地理定位（window.navigator.geolocation）

5.localStorage：没有时间限制，session Storage：当用户关闭浏览器窗口时，session自动销毁

6.（Web Socket）浏览器通过 JavaScript 向服务器发出建立 WebSocket 连接的请求，连接建立以后，客户端和服务器端就可以通过 TCP 连接直接交换数据。

当你获取 Web Socket 连接后，你可以通过 send() 方法来向服务器发送数据，并通过 onmessage 事件来接收服务器返回的数据。

## input元素的种类

email url number range date pickers search color

要使一个元素可以拖动，需要设置 draggable 属性为 true

label只有两个属性for（规定 label 绑定到哪个表单元素）和form（规定 label 字段所属的一个或多个表单）

caption是表格的标题

行内元素不可以设置宽高，但是可以设置   左右padding、左右margin

不可继承：display，margin，border，padding，background，height，width，position

preload 属性规定是否在页面加载后载入视频

发送请求时send在open前面

## 手写bind

```javascript
function bindThis(f, oTarget) {
    let args = Array.prototype.slice.call(arguments, 2);
    return function(){
        return f.apply(oTarget, Array.prototype.slice.call(arguments).concat(args));
    }
}
```

```javascript
function bindThis(f, oTarget) {
    return function(...args){//返回一个函数--封装；。。。arg用于将数据都接收到数组args中
        oTarget.f=f;//利用对象的方法中的this指向对象原理，将f中的this指向对象
        return oTarget.f(...args);//函数的最终结果返回函数指向结果。。args将参数展开传入
    }

}
```

## 从输入URL到网页呈现的过程

[https://blog.csdn.net/qq_32657025/article/details/79672419](https://blog.csdn.net/qq_32657025/article/details/79672419)

#### 1.域名解析

通过网址找到对应主机的IP这个过程叫DNS解析：

1.本地域名服务器查询IP，

2.本地域名服务器向根域名服务器发送请求，

3.本地域名服务器名向（.com）顶级域名服务器发送请求,

4.本地域名服务器向（baidu.com）域名服务器发送请求。

#### 2.TCP链接

HTTP协议是使用TCP协议作为其传输层协议的，在拿到服务器的IP地址后，浏览器客户端会与服务器建立TCP连接。该过程包括三次握手

1.建立连接时，客户端向服务端发送请求报文,

2.服务器收到请求报文后，如同意连接，则向客户端发送确认报文,

3.客户端收到服务器的确认后，再次向服务器给出确认报文，完成连接。

注：三次握手主要是为了防止已经失效的请求报文字段发送给服务器，浪费资源

#### 3.浏览器发送HTTP请求

浏览器构建http请求报文，并通过TCP协议传送到服务器的指定端口

1.请求行：指定http请求的方法、url、http协议版本等

2.请求头：描述浏览器的GET, PUT等请求时，通常需要向服务器传递数据。这些数据就储存在请求正文中

#### 4.服务器处理HTTP请求

状态码，响应头，响应正文。

**5.浏览器页面渲染**

**6.断开TCP请求**

### JS数组API

[https://blog.csdn.net/snsHL9db69ccu1aIKl9r/article/details/114810724](https://blog.csdn.net/snsHL9db69ccu1aIKl9r/article/details/114810724)

### Session和Cookie的区别？

cookie 是放在客户的浏览器上面的（不安全） 单个只有4K

session 是放到服务器上面的

### 32位和64位操作系统的区别

64位处理器理论比32位处理器效率高一倍 64位的数据宽度64位一次处理8位32位的数据宽度32位一次处理4位

32支持的最大4gb 64理论支持无限（取决于内存条）

64位的系统理论支持64位和32位的软件，而32位系统不能

64位系统体积比32位大

### Webpack构建流程（原理）

1.初始化参数:解析webpack配置参数，合并shell传入和webpack.config.js文件配置的参数，形成最后的配置结果。

2.开始编译:上一步得到的参数初始化compiler对象，注册所有配置的插件，插件监听webpack构建生命周期的事件节点，做出相应的反应，执行对象的 run 方法开始执行编译

3.确定入口:从配置的entry入口，开始解析文件构建AST语法树，找出依赖，递归下去。

4.编译模块:递归中根据文件类型和loader配置，调用所有配置的loader对文件进行转换，再找出该模块依赖的模块，再递归本步骤直到所有入口依赖的文件都经过了本步骤的处理。

5.完成模块编译输出:递归完事后，得到每个文件结果，包含每个模块以及他们之间的依赖关系，根据entry配置生成代码块chunk。

6.输出完成:输出所有的chunk到文件系统。

```javascript
webpack --config config/webpack.config.js//编译指令
```

### webpack 多模块引用 版本冲突怎么解决

卸载不适合的版本

### Promise常用的API

[https://www.cnblogs.com/Alisa-k/p/12672870.html](https://www.cnblogs.com/Alisa-k/p/12672870.html)

#### 实例方法

.then方法 得到异步任务的正确结果

.catch方法 获取异常信息

.finally方法 成功失败都会执行

#### 对象方法

Promise.all()方法，并发处理多个异步任务，所有任务都执行成功才能得到结果。

Promise.race()方法，并发处理多个异步任务，只要有一个任务完成就能得到结果。

### 前端seo优化

1.减少HTTP请求 合理设置HTTP缓存（合并css，js模块）

2.使用浏览器缓存（静态文件留在本地）

3.启用压缩（减少通信传输的数据量）

4.懒加载（当用户往下滚动页面时才请求需要的外部资源）

5.CSS放在页面最上部，javascript放在页面最下面

6.异步请求 Callback（就是将一些行为样式提取出来，慢慢的加载信息的内容

7.多用局部变量缓存全局变量

8.CDN加速

9.nginx反向代理

#### git常用命令source tree

git init初始化

git status 获取git状态

git branch -v 查看分支

git branch 创建分支

git clone 克隆代码

git reset 版本穿越

git add . 增加到占存区

git commit 提交信息

git checkout 切换分支

git pull 拉取代码-f强制

git rebase 合并冲突

git push 推送代码-f强制

### 前端基本的数据结构

[https://blog.csdn.net/weixin_39755186/article/details/80863717](https://blog.csdn.net/weixin_39755186/article/details/80863717)

集合:结构中的数据元素除了同属于一种类型外，别无其它关系。(无逻辑关系)
线性结构 :数据元素之间一对一的关系(线性表)
树形结构 :数据元素之间一对多的关系(非线性)
图状结构或网状结构: 结构中的数据元素之间存在多对多的关系(非线性)

#### 插入排序

```javascript
function insertionSort(arr) {
    var len = arr.length;
    var preIndex, current;
    for (var i = 1; i < len; i++) {
        preIndex = i - 1;
        current = arr[i];
        while(preIndex >= 0 && arr[preIndex] > current) {
            arr[preIndex+1] = arr[preIndex];
            preIndex--;
        }
        arr[preIndex+1] = current;
    }
    return arr;
}
```

#### 选择排序法

```javascript
function selectionSort(arr) {
    var len = arr.length;
    var minIndex, temp;
    for (var i = 0; i < len - 1; i++) {
        minIndex = i;
        for (var j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIndex]) {     // 寻找最小的数
                minIndex = j;                 // 将最小数的索引保存
            }
        }
        temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
    return arr;
}
```

#### 冒泡排序法

```javascript
function bubbleSort(arr) {
    var len = arr.length;
    for (var i = 0; i < len - 1; i++) {
        for (var j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j+1]) {        // 相邻元素两两对比
                var temp = arr[j+1];        // 元素交换
                arr[j+1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
```

#### 快速排序法

[http://www.ruanyifeng.com/blog/2011/04/quicksort_in_javascript.html](http://www.ruanyifeng.com/blog/2011/04/quicksort_in_javascript.html)

```javascript
function quickSort(arr) {
  if (arr.length <= 1) {
    return arr
  }
  var pivotIndex = Math.floor(arr.length / 2)
  var pivot = arr.splice(pivotIndex, 1)[0]
  var left = []
  var right = []
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  return quickSort(left).concat([pivot], quickSort(right))
}
```

### CDN加速

[https://blog.csdn.net/xiangzhihong8/article/details/83147542](https://blog.csdn.net/xiangzhihong8/article/details/83147542)

用户在自己的浏览器中输入要访问的网站的域名，浏览器向本地DNS请求对该域名的解析，本地DNS将请求发到网站的主DNS，主DNS根据一系列的策略确定当时最适当的CDN节点，并将解析的结果（IP地址）发给用户，用户向给定的CDN节点请求相应网站的内容。

CDN网络是在用户和服务器之间增加Cache层，主要是通过接管DNS实现，将用户的请求引导到Cache上获得源服务器的数据，从而降低网络的访问的速度。

### call() 和 apply() 的相关介绍和应用场景

[https://blog.csdn.net/Chorer/article/details/105462369](https://blog.csdn.net/Chorer/article/details/105462369)

call() 和 apply() 一经调用则立即执行函数，而 bind() 则只是完成了函数的 this 绑定。因为函数不会立刻执行，所以适合在事件绑定函数中使用 bind() ，这样既完成了绑定，也确保了仅当事件触发时才执行函数。

对象本身没有该方法所以需要调用对象原型身上的方法

核心是 `apply()` 可用于展开数组，即我们前面说过的将参数数组转化为参数列表。
例如我们要求一个数组的最大值，虽然 Math 对象有 `max()` 方法，但该方法只接受参数列表。那么这时候，我们可以通过 `apply()` 去调用该方法，从而展开数组

```javascript
var arr = [2,3,1,5,4];  
Math.max.apply(null,arr);*// 5*
```

### set和map的区别

[https://www.cnblogs.com/jjgw/p/11561169.html](https://www.cnblogs.com/jjgw/p/11561169.html)

Set它类似于数组，但是成员的值都是唯一的，没有重复的值。

```javascript
const items = new Set([1, 2, 3, 4, 5, 5, 5, 5]);
items.size // 5
add()：添加某个值，返回set本身
delete()：删除某个值，返回一个布尔值，判断删除是否成功
has()：返回一个布尔值，表示该值是否为set成员
clear()：清除所有成员，没有返回值
keys()：返回键名的遍历器
values()：返回键值的遍历器
entries()：返回键值对的遍历器
forEach()：使用回调函数遍历每个成员
```

es6中的map很大程度上和set相似，但是map是以键值对的形式存储数据的

map转为数组最方便的方法，就是使用扩展运算符...

```
strMapObj Map转对象
```

```javascript
set(key,value)：设置键名key对应的键值value,然后返回整个map结构，如果key已经有值，则键值会被更新，否则就新生成该键
get(key)：读取key对应的键值，如果找不到key,则返回undefined
has(key)：返回一个布尔值，表示某个键是否在当前map对象中
delete(key)：删除某个key,返回true,如果删除失败，返回false
clear()：清除所有成员，没有返回值
keys()：返回键名的遍历器
values()：返回键值的遍历器
entries()：返回键值对的遍历器
forEach()：遍历map的所有成员
```

### 设置元素水平垂直居中

[https://blog.csdn.net/weixin_42561383/article/details/98779461](https://blog.csdn.net/weixin_42561383/article/details/98779461)

通过在父元素中设置`text-align: center;`，让子元素水平居中，然后通过`line-height`属性让子元素进行垂直居中。

父元素设置相对定位`position: relative;`，子元素通过`postition:absolute;`进行绝对定位，然后用百分比设置`top`和`left`，再用`margin-left`和`margin-top`消除子元素宽高的一半偏移量。

可以使用 CSS3 的 `transform` 代替 `margin` ：

`transform` 中 `translate` 偏移的百分比是相对于自身大小的。

子元素设置相对定位`position: relative;`，然后使用`margin: 0 auto;`实现水平居中，然后用百分比设置`top`，使用`margin-top`或者`transform: translateY(-50%);`消除子元素的一半偏移量实现垂直居中。

父元素使用弹性布局`display: flex;`，然后通过设置属性`align-items: center;`和`justify-content: center;`实现子元素的垂直水平居中。

### 父组件传递方法给子组件怎么传

[https://segmentfault.com/a/1190000010507616](https://segmentfault.com/a/1190000010507616)

父组件调用子组件，通过绑定callback属性，将方法传给子组件：

子组件通过props获取父组件传过来的callback方法：

#### 通过 data

```javascript
callback:function(responseData) {
        this.$store.commit('resetListData', responseData);
      }
```

### vue导航守卫钩子

[https://jianshu.com/p/ddcb7ba28c5e](https://jianshu.com/p/ddcb7ba28c5e)

1：全局钩子： beforeEach、 afterEach、beforeResolve

2：单个路由里面的钩子：  beforeEnter

3:组件路由：beforeRouteEnter、 beforeRouteUpdate、 beforeRouteLeave

![](https://upload-images.jianshu.io/upload_images/14942208-ce6e88dc632eedf7.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/633/format/webp#id=sXuK1&originHeight=336&originWidth=633&originalType=binary&ratio=1&status=done&style=none)

### WebSocket心跳检测和重连机制

[https://my.oschina.net/zhangcq/blog/3130398](https://my.oschina.net/zhangcq/blog/3130398)

#### 为什么会进行心跳检测

简单地说是为了证明客户端和服务器还活着。websocket 在使用过程中，如果遭遇网络问题等，这个时候服务端没有触发`onclose`事件，这样会产生多余的连接，并且服务端会继续发送消息给客户端，造成数据丢失。因此需要一种机制来检测客户端和服务端是否处于正常连接的状态，心跳检测和重连机制就产生了。

#### 如何进行心跳检测和重连

**思路是**：

1. 每隔一段指定的时间（计时器），向服务器发送一个数据，服务器收到数据后再发送给客户端，正常情况下客户端通过`onmessage`事件是能监听到服务器返回的数据的，说明请求正常。
2. 如果再这个指定时间内，客户端没有收到服务器端返回的响应消息，就判定连接断开了，使用`websocket.close`关闭连接。
3. 这个关闭连接的动作可以通过`onclose`事件监听到，因此在 onclose 事件内，我们可以调用`reconnect`事件进行重连操作。

### redux 实现原理

[https://segmentfault.com/a/1190000019849834](https://segmentfault.com/a/1190000019849834)

store.getState();//获取整个状态树
store.dispatch();//改变状态，改变state的唯一方法
store.subscribe();//订阅一个函数，每当state改变时，都会去调用这个函数

#### react-redux做了什么

```
react-redux`给我们提供了一个`Provider`组件，我们可以把这个组件写在最外层，这样被`Provider`包裹的所有组件都可以通过`props`来获取`state，而Provider组件只接受一个属性，那就是store
```

讲讲快排，时间复杂度？是一直是nlogn吗？如果是最坏情况的话等价于哪个[排序](https://www.nowcoder.com/jump/super-jump/word?word=%E6%8E%92%E5%BA%8F)？

快排最优nlogn 最差等于冒泡

### 堆排序

[https://www.cnblogs.com/chengxiao/p/6129630.html](https://www.cnblogs.com/chengxiao/p/6129630.html)

```javascript
/**
 * 对数组中的前n项整理成堆
 * @param array
 * @param n
 */
function refreshHeap(array, n){
    if(array.length<n)n = array.length;
 
    //array[n/2-1]表示的是最后一个有子节点的节点
    for(let i=Math.floor(n/2)-1;i>=0;i--){
        //对于有子节点的节点i，2*i+1表示的是其第一个子节点，即左子节点
        //这个while是判断当前节点与其子节点是否需要调整
        while(2*i+1<n){
            let j = 2*i+1;
            //如果节点j不是其父节点的唯一子节点，也就是说如果存在右子节点
            if(j+1<n){
                //如果右子节点大于左子节点，则使j指向右边（总之要找到最大的子接点）
                if(array[j]<a[j+1]){
                    j++;
                }
            }
            //如果最大子节点大于其父节点，则交换
            if(a[i]<a[j]){
                let tmp = a[i];
                a[i] = a[j];
                a[j] = tmp;
                //交换之后整个堆被破坏，需要重新调整，故令i=j
                //这个调整表示的是从j节点开始判断堆是否需要调整
                //比如交换j、i节点后，结果j的子节点又大于j了，那么就需要重新调整
                i = j;
            }else{
                break;
            }
        }
    }
    return array;
}
 
function HeapSort(array, n){
    if(array.length<n)n = array.length;
    while(n>0){
        //刷新堆之后，将array[0]（最大值）与最后一个子节点交换
        //然后重新刷新堆(不包括最后那些排好序的节点了)
        refreshHeap(array, n--);
        let tmp = array[n];
        array[n] = array[0];
        array[0] = tmp;
    }
    return array;
}
 
var a = [16,7,3,20,17,8];
HeapSort(a,a.length);
console.log(a);
```

### HTTPS加密

![](https://upload-images.jianshu.io/upload_images/16749538-3ae48d5925636dc1.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1000/format/webp#id=iQWJo&originHeight=750&originWidth=1000&originalType=binary&ratio=1&status=done&style=none)

### react 和vue区别

[https://zhuanlan.zhihu.com/p/265001149](https://zhuanlan.zhihu.com/p/265001149)

### 谈谈你对 nodejs 的理解

[https://blog.csdn.net/weixin_43900414/article/details/96455958](https://blog.csdn.net/weixin_43900414/article/details/96455958)

| 模块 | 作用 |
| --- | --- |
| http | 开启一个Web服务，给浏览器提供服务 |
| url | 给浏览器发送请求用，还可以传递参数(GET) |
| querystring | 处理浏览器通过GET/POST发送来的参数 |
| path | 查找文件的路径 |
| fs | 在服务器端读取文件用的 |


#### splice和slice你能说说有啥用和区别吗？

[https://www.cnblogs.com/whkl-m/p/13330771.html](https://www.cnblogs.com/whkl-m/p/13330771.html)

- slice(start,end) 从哪到哪开始删
- splice(start,end,index1,index2) 从什么位置开始，删几个？删了后插入什么新元素？

#### Vue有“声明式、响应式的数据绑定”、“组件化的开发”和“Virtual DOM”三大优点

### vue2.0要引入虚拟dom

虚拟DOM就是用js来模拟DOM结构，把DOM的变化操作放在js层来做，尽量减少对DOM的操作，操作js比操作DOM的速度快许多

### Vue响应式原理

[https://zhuanlan.zhihu.com/p/88648401](https://zhuanlan.zhihu.com/p/88648401)

**在改变数据的时候，视图会跟着更新**利用了**Object.defineProperty**的方法里面的setter 与getter方法的**观察者模式**来实现

#### 什么是观察者模式？它分为**注册环节跟发布环节**。

比如我去买芝士蛋糕，但是店家还没有做出来。这时候我又不想在店外面傻傻等，我就需要隔一段时间来回来问问蛋糕做好没，对于我来说是很麻烦的事情，说不定我就懒得买了。

店家肯定想要做生意，不想流失我这个吃货客户。于是，在蛋糕没有做好的这段时间，有客户来，他们就让客户把自己的电话留下，这就是观察者模式中的**注册环节**。然后蛋糕做好之后，一次性通知所有记录了的客户，这就是观察者的**发布环节**。

#### 原理

**1、第一步：**组件初始化的时候，先给每一个Data属性都注册getter，setter，然后再new 一个自己的Watcher对象，此时watcher会立即调用组件的render函数去生成虚拟DOM。在调用render的时候，就会需要用到data的属性值，此时会触发getter函数，将当前的Watcher函数注册进sub里。

**2、第二步：**当data属性发生改变之后，就会遍历sub里所有的watcher对象，通知它们去重新渲染组件。

### VUE生命周期

[https://segmentfault.com/a/1190000008010666](https://segmentfault.com/a/1190000008010666)

`beforecreated`：el 和 data 并未初始化
`created`:完成了 data 数据的初始化，el没有
`beforeMount`：完成了 el 和 data 初始化
`mounted` ：完成挂载

另外在标红处，我们能发现el还是 {{message}}，这里就是应用的 `Virtual DOM`（虚拟Dom）技术，先把坑占住了。到后面`mounted`挂载的时候再把值渲染进去。

![](https://segmentfault.com/img/bVHMfj?w=588&h=475#id=F7e9e&originalType=binary&ratio=1&status=done&style=none)

![](https://segmentfault.com/img/bVHMfY?w=584&h=609/view#id=q8vXG&originalType=binary&ratio=1&status=done&style=none)

用例

`beforecreate` : 举个栗子：可以在这加个loading事件
`created` ：在这结束loading，还做一些初始化，实现函数自执行
`mounted` ： 在这发起后端请求，拿回数据，配合路由钩子做一些事情
`beforeDestroy`： 你确认删除XX吗？ destroyed ：当前组件已被删除，清空相关内容

#### 观察者模式和发布订阅有啥区别呢?

[https://www.jianshu.com/p/594f018b68e7](https://www.jianshu.com/p/594f018b68e7)

![](https://upload-images.jianshu.io/upload_images/5262488-291da39f66dbc28a.png?imageMogr2/auto-orient/strip%7CimageView2/2/format/webp#id=lXSIs&originHeight=888&originWidth=1478&originalType=binary&ratio=1&status=done&style=none)

从图中可以看出，观察者模式中观察者和目标直接进行交互，而发布订阅模式中统一由调度中心进行处理，订阅者和发布者互不干扰。这样一方面实现了解耦，还有就是可以实现更细粒度的一些控制。比如发布者发布了很多消息，但是不想所有的订阅者都接收到，就可以在调度中心做一些处理，类似于权限控制之类的。还可以做一些节流操作。

HTTP缓存

[https://www.jianshu.com/p/227cee9c8d15](https://www.jianshu.com/p/227cee9c8d15)

http缓存指的是: 当客户端向服务器请求资源时，会先抵达浏览器缓存，如果浏览器有“要请求资源”的副本，就可以直接从浏览器缓存中提取而不是从原始服务器中提取这个资源。

常见的http缓存只能缓存get请求响应的资源，对于其他类型的响应则无能为力，所以后续说的请求缓存都是指GET请求。

http缓存都是从第二次请求开始的。第一次请求资源时，服务器返回资源，并在respone header头中回传资源的缓存参数；第二次请求时，浏览器判断这些请求参数，命中强缓存就直接200，否则就把请求参数加到request header头中传给服务器，看是否命中协商缓存，命中则返回304，否则服务器会返回新的资源。

Pragma和Cache-control共存时，Pragma的优先级是比Cache-Control高的。
#### 手写new方法
[https://juejin.cn/post/6844903937405878280](https://juejin.cn/post/6844903937405878280)
new做了什么？

1. 创建一个新的对象
2. 继承父类原型上的方法.
3. 添加父类的属性到新的对象上并初始化. 保存方法的执行结果.
4. 如果执行结果有返回值并且是一个对象, 返回执行的结果, 否则, 返回新创建的对象。
```javascript
function Person(firstname, lastname) {
  (this.firstName = firstname), (this.lastname = lastname);
}

Person.prototype.getFullName = function () {
  return `${this.firstName},${this.lastName}`;
};

const f = new Person("lin", "guo");
console.log(f);

function _new(obj, ...rest) {
    //基于obj原型创建一个新的对象
  const Obj = Object.create(obj.prototype);
  // 添加属性到新创建的Obj上, 并获取obj函数执行的结果.
  const result = obj.apply(Obj, rest);
  //如果执行结果有返回值并且是一个对象, 返回执行的结果,否则返回新创建的对象
  return typeof result === "object" ? result : Obj;
}
const n = _new(Person, "lin", "guo");
console.log(n);
```
#### redux的原理
[https://www.jianshu.com/p/e984206553c2](https://www.jianshu.com/p/e984206553c2)
在React中数据在组件中是单向流动的，数据通过一个方向父组件流入子组件（通过props），redux就是为了解决非父子组件state里面数据问题
Redux是将整个应用状态存储到一个地方上称为**store**,里面保存着一个状态树**store tree**,组件可以派发(dispatch)行为(action)给store,而不是直接通知其他组件，组件内部通过订阅**store**中的状态**state**来刷新自己的视图
#### TS的优点
支持ES6react适合大项目
TS支持类型检测，告诉你哪里写错了，语法提示，提示你是什么类型
支持修改文件名字然后自动进行导入
接口，泛型，类，枚举
#### Hooks
[https://www.jianshu.com/p/89f2cf94a7c2](https://www.jianshu.com/p/89f2cf94a7c2)

- Hooks必须写在函数的最外层，不能在循环语句、条件判断、子函数中调用；
- 只能在React的函数式组件、自定义Hooks中调用Hooks，不能在其他JavaScript函数中调用。
#### [Vue中computed和wa](https://www.cnblogs.com/jiajialove/p/11327945.html)[tch的区别](https://www.cnblogs.com/jiajialove/p/11327945.html)
[https://www.cnblogs.com/jiajialove/p/11327945.html](https://www.cnblogs.com/jiajialove/p/11327945.html)
computed是计算属性支持缓存，只有当依赖数据发生改变的时候才会重新计算不支持异步处理，
watch监听属性不支持缓存，数据变，直接会触发相应的操作，支持异步处理，
immediate：组件加载立即触发回调函数执行，
deep: 深度监听
#### vue组件间通信
[https://blog.csdn.net/qq_37288477/article/details/86630428](https://blog.csdn.net/qq_37288477/article/details/86630428)
父向子通信props 子向父通信$emit
