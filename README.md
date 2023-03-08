# 天天基金网 API

天天基金网 Node.js API service

# TODO

天天基金网数据的结构和命名太过混乱，导致返回结果不易读。计划在接口写完之后在做命名规范和结构调整。

- [ ] 接口持续更新
- [ ] 提高字段可读性
- [X] 文档完善
- [X] 测试用例
- [X] docker 部署
- [X] vercel 示例

# 使用指南

阅读文档 👇

> [https://kouchao.github.io/TiantianFundApi/](https://kouchao.github.io/TiantianFundApi/)

# 开发指南

## 安装

```
pnpm i
```

## 启动

```
pnpm start
```

## 测试

```
pnpm test
```

## 路由注册方式

- 参考 `module/*.js`
- 参考 `routes/index.js`


### 测试服务

- http://fund.hust.cloud/fundNetList


其他数据参考

- https://www.ricequant.com/doc/rqdata/python/fund-mod.html#fund-instruments-%E8%8E%B7%E5%8F%96%E5%9F%BA%E9%87%91%E5%9F%BA%E7%A1%80%E4%BF%A1%E6%81%AF



CICD参考 

- https://juejin.cn/post/6844903767117299719
- 解决 docker in docker 问题， https://docs.gitlab.com/ee/ci/docker/using_docker_build.html#use-docker-socket-binding
  > 核心是配置  **volumes**=**[**"/var/run/docker.sock:/var/run/docker.sock"**,**"/cache"**]**
  >
