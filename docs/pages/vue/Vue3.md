`Vue 3` 出来之后，很多人有如下想法，“又要学新东西啦”、“我学不动了”等等。

但是事物总有它的两面性，前端知识更新的很快，利好勤奋好学的同学。计算机行业的迭代速度很快，前端在计算机领域里，算是前浪被拍在沙滩上比较快的。

我很羡慕还在学校的同学，因为现在的大学生，信息的获取量比我当年在大学的时候大得多，我希望你们能珍惜这样的机会，好好的学习新知识，希望你们进入社会不要被毒打。

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/37b2035d0433458ea842d4acb85ceb65~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp)

学习一门新的技术，我认为最好的方式就是通过 Demo 去制造使用场景，通览一遍 API，需要做到什么程度呢？

大概就是什么场景用什么 API 都能了如于心，再大白话一点就是可以将之前用 `Vue2.x` 写的代码，用 `Vue 3` 无差别重构一遍。

## 构建 Vue3.0 的三种方式

就目前而言，构建 `Vue 3` 的项目有三种方式。

#### **1、命令行工具 (CLI)**

对于 `Vue 3`，你应该使用 `npm` 上可用的 Vue CLI v4.5 作为 `@vue/cli@next`。要升级，你应该需要全局重新安装最新版本的 `@vue/cli`：

```bash
yarn global add @vue/cli@next
# OR
npm install -g @vue/cli@next
复制代码
```

#### **2、Vite**

`Vite` 是一个 web 开发构建工具，由于其原生 ES 模块导入方法，它允许快速提供代码。

通过在终端中运行以下命令，可以使用 Vite 快速设置 Vue 项目。

使用 npm：

```bash
npm init vite-app <project-name>
cd <project-name>
npm install
npm run dev
复制代码
```

#### **3、Webpack**

很早的时候，Vue-CLI 还没支持 `Vue 3` 项目的创建，Vue 团队制作了一个 Webpack 的项目配置放在 [Github](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fvuejs%2Fvue-next-webpack-preview)，可以直接克隆下来使用。

```bash
git clone https://github.com/vuejs/vue-next-webpack-preview.git demov3
cd demov3
npm install
npm run dev
复制代码
```

> 不推荐使用这种方式，现在都有上面两种了～～

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a51140cf573c45d8a2219a7b28b9bd20~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp)

（以前看星星看月亮的时候叫人家“小甜甜”，现在新人胜旧人，叫人家“牛夫人”）

## 代码实践

我们选择比较新鲜的 Vite 去构建项目，要玩就玩最潮的。我的本地 Node 版本是 `v12.6.0`，尽量保持一致。

#### **构建项目**

```bash
npm init vite-app todo-v3
cd todo-v3
npm install // 建议使用淘宝镜像 cnpm install
npm run dev
复制代码
```

![img](https:////p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/84911389d6ef4105a88c72c106a7b84d~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp)

启动之后如下所示，代表成功了：

![img](https:////p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5df2cd29585d4e4eb4545b151266d832~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp)

#### **入口页面**

首先映入眼帘的是 `main.js` 的变化：

```javascript
// Vue 3.0
import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

createApp(App).mount('#app')
复制代码
// Vue 2.x
import Vue from 'vue'
import App from './App.vue'

new Vue({
  render: h => h(App)
}).$mount('#app')
复制代码
```

第一段代码是 `Vue 3` 的创建 Vue 实例形式，通过 `createApp` 的形式，你别说，和 `React` 真的挺像的😄。

第二段是 `Vue 2.x` 的创建 Vue 实例形式，通过 new 的形式创建。

#### 添加路由 Vue-Router

截止目前，`vue-router-next` 更新到了 `v4.0.0-beta.12` 版本。

![img](https:////p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0f039a94da144b1f85fd8d82fcb1e148~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp)

你如果用 `cnpm install vue-router` 安装路由，是会下载到 `vue-router 3.x` 的版本，我们需要使用：

```bash
cnpm install vue-router@next -S
复制代码
```

![img](https:////p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/073498a7ac2749a3a2f810a206aef252~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp)

安装完毕之后，我们开始配置项目路由，在 `src` 目录下新建 `rourer` 文件夹，在文件夹下新建 `index.js` 文件，添加如下内容：

```javascript
import {createRouter, createWebHashHistory} from 'vue-router'

export default createRouter({
  history: createWebHashHistory(),
  routes: []
})
复制代码
```

Vue 2.x 的路由模式通过 mode 选项为 history 或 hash 去控制。

而在 Vue 3 中，通过 `createRouter` 创建路由实例，history 属性作为控制路由模式的参数，`createWebHashHistory` 方法返回的是 hash 模式，`createWebHistory` 返回的是 history 模式，本项目采用 hash 模式。

同样，我们需要在 `mian.js` 中引入 `router` 实例：

```javascript
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'

createApp(App).use(router).mount('#app')
复制代码
```

#### 添加全局状态 Vuex

`vuex` 更新到了 `v4.0.0-beta.4` 版本，所以我们需要用如下指令安装：

```bash
cnpm i vuex@next -S
复制代码
```

接下来在 `src` 目录下创建 `store` 文件夹，再新建 `index.js` 文件，添加代码如下：

```javascript
// Vue 3
import { createStore } from 'vuex'

export default createStore({
  state() {
    return {
      author: "十三",
    };
  },
});
复制代码
```

对比 Vue 2.x 写法：

```javascript
// Vue 2.x
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations,
  actions,
  modules: {}
})
复制代码
```

同样是使用新的写法，通过 `vuex` 内部抛出的 `createStore` 方法，创建一个 `Vuex` 实例。

接下来我们将它引入到 `main.js` 中：

```javascript
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './index.css'

// 链式调用
createApp(App).use(router).use(store).mount('#app')
复制代码
```

#### **引入 Antd for Vue3 版本组件库**

[Antdv2.x](https://link.juejin.cn?target=https%3A%2F%2F2x.antdv.com%2Fdocs%2Fvue%2Fgetting-started-cn%2F)是唐金州老师（杭州校宝在线）研发的新一代适配 Vue 3.0 的组件库，我们来尝尝鲜，这边我们通过如下命令后下载：

```bash
cnpm i --save ant-design-vue@next -S
复制代码
```

在 `mian.js` 内引入 `ant-design-vue` 组件如下所示：

```javascript
import { createApp } from 'vue'
import Antd from 'ant-design-vue';
import App from './App.vue'
import router from './router'
import store from './store'
import 'ant-design-vue/dist/antd.css';
import './index.css'

// 本教程采用的是全局引入组件库

createApp(App).use(router).use(store).use(Antd).mount('#app')
复制代码
```

测试一下是否成功，顺便解释一下 Vue 3 如何声明变量，以及如何通过方法改变变量，代码如下：

```html
<template>
  <a-button @click="add" type="primary">
    点我加{{ count }}
  </a-button>
  <a-button @click="add2('a')" type="primary">
    点我加a{{ state.a }}
  </a-button>
  <a-button @click="add2('b')" type="primary">
    点我加b{{ state.b }}
  </a-button>
</template>

<script>
import { ref, reactive } from 'vue'
export default {
  setup() {
    const count = ref(0)
    const state = reactive({
      a: 0,
      b: 0,
    })
    const add = () => {
      count.value += 1
    }
    const add2 = (type) => {
      state[type] += 1
    }
    return {
      state,
      count,
      add,
      add2
    }
  }
}
</script>
复制代码
```

如上述代码所示，Vue 3 新增的 `setup` 方法，颠覆了之前传统的 `options` 属性方式，我们可以将业务逻辑都写在 `setup` 方法中。

我们有两种声明变量的形式：

- ref：它用于声明简单的基础类型变量，如单个数字、boolean、字符串等等。
- reactive：它用于对象引用类型的复杂变量。

所有声明好的变量和方法，如果想在 `template` 模板里使用的话，必须在 `setup` 方法里 `return`，否则无法调用。记住返回什么就是声明，如返回 `count`，模板中就用 `{{ count }}`，返回 `state`，模板中就使用 `{{ state.a }}` 。效果如下所示：

![img](https:////p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ccabd7cf6cc14a918e5350139f17cd4c~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp)

## 待办事项 TODO

首先我们新建 `views` 文件夹用于放置页面组件，在 `views` 内新建 `todo.vue` 文件，如下所示：

```html
<template>
  <div id="components-layout-demo-basic">
    <a-layout>
      <a-layout-header>待办事项</a-layout-header>
      <a-layout-content>内容</a-layout-content>
    </a-layout>
  </div>
</template>

<script>
import { ref, reactive } from 'vue'
export default {
  setup() {

  }
}
</script>

<style scoped>
  #components-layout-demo-basic {
    min-height: 100vh;
    max-width: 40%;
    margin: 0 auto;
    background-color: #ededed;
  }
  #components-layout-demo-basic .ant-layout-header,
  #components-layout-demo-basic .ant-layout-footer {
    background: #7dbcea;
    text-align: center;
    color: #fff;
  }
</style>
复制代码
```

引入 `antd-v` 的布局组件，再给一些基础样式。

然后前往 `App.vue` 和 `router/index.js` 做如下改动：

```html
// App.vue
<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: 'App'
}
</script>
复制代码
import {createRouter, createWebHashHistory} from 'vue-router'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/todo',
      component: () => import('../views/todo.vue')
    }
  ]
})
复制代码
```

最后页面出现如下所示，代表配置成功：

![img](https:////p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/439612ff920541878c33757362d97c84~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp)

添加新增待办事项输入框：

```html
<template>
  <div id="components-layout-demo-basic">
    <a-layout>
      <a-layout-header>待办事项</a-layout-header>
      <a-layout-content>
        <a-input-search
          v-model:value="todo"
          placeholder="请输入要代办的事项"
          size="large"
          @search="addTodo"
        >
          <template v-slot:enterButton>
            <a-button>新增</a-button>
          </template>
        </a-input-search>
      </a-layout-content>
    </a-layout>
  </div>
</template>
<script>
import { ref, reactive } from 'vue'
import { ref, reactive } from 'vue'
export default {
  setup() {
    const todo = ref('')

    const addTodo = (value) => {
      console.log(value)
    }
    return {
      todo,
      onSearch
    }
  }
}
</script>
复制代码
```

如下图所示：

![img](https:////p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e90c6c08b11e483cb7ad6472468f6e5b~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp)

添加“待办事项”和“已办事项”模板，代码如下：

```html
<template>
  <div id="components-layout-demo-basic">
    <a-layout>
      <a-layout-header>待办事项</a-layout-header>
      <a-layout-content>
        <a-input-search
          v-model:value="todo"
          placeholder="请输入要代办的事项"
          size="large"
          @search="addTodo"
        >
          <template v-slot:enterButton>
            <a-button>新增</a-button>
          </template>
        </a-input-search>
        <h2 class="title">待办事项</h2>
        <a-card title="标题">
          <template v-slot:extra>
            <a-switch />
          </template>
          内通
        </a-card>
        <h2 class="title">已办事项</h2>
        <a-card title="标题">
          <template v-slot:extra>
            <a-switch />
          </template>
          内通
        </a-card>
      </a-layout-content>
    </a-layout>
  </div>
</template>

<script>
import { ref, reactive } from 'vue'
export default {
  setup() {
    const todo = ref('')

    const addTodo = (value) => {
      console.log(value)
    }
    return {
      todo,
      onSearch
    }
  }
}
</script>

<style scoped>
  #components-layout-demo-basic {
    min-height: 100vh;
    max-width: 40%;
    margin: 0 auto;
    background-color: #ededed;
  }
  #components-layout-demo-basic .ant-layout-header,
  #components-layout-demo-basic .ant-layout-footer {
    background: #7dbcea;
    color: #fff;
    text-align: center;
  }
  .title {
    margin: 0;
    padding: 10px;
  }
</style>
复制代码
```

效果如下：

![img](https:////p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/034bae0317e84e108e32bdfb26344eb2~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp)

接下来我们来添加代办的相应逻辑：

```html
<template>
  <div id="components-layout-demo-basic">
    <a-layout>
      <a-layout-header>待办事项</a-layout-header>
      <a-layout-content>
        <a-input-search
          v-model:value="todo"
          placeholder="请输入要代办的事项"
          size="large"
          @search="addTodo"
        >
          <template v-slot:enterButton>
            <a-button>新增</a-button>
          </template>
        </a-input-search>
        <h2 class="title">待办事项</h2>
        <a-card :title="`${index + 1}、${item.time}`" v-for="(item, index) in todos" :key="item.id">
          <template v-slot:extra>
            <a-switch v-model:checked="item.done" @change="handleCheck(item, true)" />
          </template>
          {{ item.content }}
        </a-card>
        <h2 class="title">已办事项</h2>
        <a-card :title="`${index + 1}、${item.time}`" v-for="(item, index) in dones" :key="item.id">
          <template v-slot:extra>
            <a-switch v-model:checked="item.done" @change="handleCheck(item, false)" />
          </template>
          内通
        </a-card>
      </a-layout-content>
    </a-layout>
  </div>
</template>

<script>
import { ref, reactive, computed } from 'vue'
export default {
  setup() {
    const todo = ref('')
    const time = `${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDate()}`

    const state = reactive({
      todoList: [
        {
          id: 1,
          done: false,
          time: time,
          content: '前往老八食堂，共进午餐'
        },
        {
          id: 2,
          done: false,
          time: time,
          content: '和giao哥合唱一曲'
        },
        {
          id: 3,
          done: false,
          time: time,
          content: '做点阳间的需求'
        }
      ]
    })
    // 添加待办事项
    const addTodo = (value) => {
      if(!value) {
        message.error('请输入待办事项')
        return
      }
      state.todoList.push({
        content: value,
        id: Date.now(),
        time: time,
        done: false
      })
      todo.value = ''
    }
    // 通过计算属性，计算出生成的代办事项列表
    const todos = computed(() => {
      return state.todoList.filter(item => !item.done)
    })
    // 通过计算属性，计算出生成的已办列表
    const dones = computed(() => {
      return state.todoList.filter(item => item.done)
    })
    // 修改状态方法
    const handleCheck = (item ,status) => {
      item.done = status
    }

    return {
      todo,
      addTodo,
      state,
      todos,
      dones,
      handleCheck
    }
  }
}
</script>

<style scoped>
  #components-layout-demo-basic {
    min-height: 100vh;
    max-width: 40%;
    margin: 0 auto;
    background-color: #ededed;
  }
  #components-layout-demo-basic .ant-layout-header,
  #components-layout-demo-basic .ant-layout-footer {
    background: #7dbcea;
    color: #fff;
    text-align: center;
  }
  .title {
    margin: 0;
    padding: 10px;
  }
</style>
复制代码
```

在 `setup` 内使用 `computed` 方法，接收一个回调函数，回调函数内的变量都会被监听，比如上述 `state.todoList` 已经被监听了，我们在 `handleCheck` 方法内修改待办事项的状态，也会被 `computed` 监听，所以就会刷新 `template` 模板，效果如下：

![img](https:////p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/edc2d9b38f3249019f73a7b917f34f24~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp)

## 总结

Vue 3.0 还有很多值得我们探索的知识，上述内容只是简单的教大家如何入门搭建一个项目，并且如何通过新的 API 去结合组件库进行实践，后续我也会继续整理其他的实践技巧，源代码已经开源到 GitHub [vue3-examples](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fnewbee-ltd%2Fvue3-examples)仓库中，仓库地址：[github.com/newbee-ltd/…](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fnewbee-ltd%2Fvue3-examples)，此仓库将不定期更新各种 Vue3.0 相关的知识及各种整合 Demo 及 Vue3 使用小技巧，大家可以关注一下，有什么建议也欢迎大家给我留言。

[![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7bea8153e8aa416394832f467b292b1e~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp)](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fnewbee-ltd%2Fvue3-examples)


作者：程序员十三
链接：https://juejin.cn/post/6882393804310052871
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。