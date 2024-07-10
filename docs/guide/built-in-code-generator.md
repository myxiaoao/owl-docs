---
nav: 指南
group: 内置功能
title: 代码生成器
order: 1
---

> 当 `config/amdin.php` 中的 `show_development_tools` 设置项为 `true` 时, 你会在后台菜单中看到它.

## 使用

1. 填上你的表名
2. 填上你的功能名
3. 勾上你需要的功能或需要生成的文件
4. 配置你的字段
5. 点击提交

如果不出意外, 你应该会看到一个 `success` 的提示框, 提示内容如下

- model 文件路径
- migration 文件路径
- controller 文件路径
- service 文件路径
- migrate 执行结果

<br>

## 路由生成逻辑

通过代码生成器生成的功能, 路由将会由框架进行管理

系统会读取代码生成器的记录, 生成路由文件 `/routes/admin.php`

- ❗__每次生成新的功能, 系统都会自动更新该路由文件__
- 可以使用 `admin:gen-route` 命令手动更新路由文件

### 手动处理路由

1. 在生成代码时, 关闭 `生成路由&菜单` 选项开关
2. 手动在 `app/Admin/routes.php` 中添加对应路由
3. 手动添加对应菜单
