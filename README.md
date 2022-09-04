# nest-learning

#### 介绍
以后使用nest作为主服务进行流程的操作,尽量不改变,定下来了

新建本地分支: `git checkout -b brand_name`

推送分支到远程:` git push --set-upstream origin brand_name`

合并代码直接用的`sourceTree`

### juejin-nest-learning

使用

```
 nest <command> [options]
```

command如下(|后表示简写)

```
new|n

generate|g

build 

start

info|i 

add
```

`generate`是用来创建`Generate a Nest element.`用人话说就是: 生成nest相关模块,比如`controller,middleware,service`等,具体的后面项目操作可以实践



创建项目

```
nest new gateway
```

目录结构

```
src
 ├── app.controller.spec.ts //测试文件,基本不用
 ├── app.controller.ts //常见功能是用来处理http请求以及调用service层的处理方法
 ├── app.module.ts //根模块用于处理其他类的引用与共享
 ├── app.service.ts //封装通用的业务逻辑、与数据层的交互（例如数据库）、其他额外的一些三方请求
 └── main.ts //主文件入口
test //测试目录,删除,现阶段用不到
nest-cli.json //nest配置文件
... //其他文件基本不用动
```

更改`nest-cli.json`文件,`generate`文件的时候不创建`.spec.ts`文件

```
 "generateOptions": {
    "spec": false
  }
```

创建一个controller模块,存放于`user`文件夹下

```
nest g co user
```

`generate`命令后可跟配置项如下

![](https://cdn.jsdelivr.net/gh/ztao0916/image@main/img/20220904183758.png)



