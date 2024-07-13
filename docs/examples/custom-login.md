---
nav: 开发示例
title: 自定义登录页
---

1. 在页面右上角的 [主题配置] 中, 将登录页模板切换为 `Amis`

2. 自行实现 `\App\Admin\Controllers\AuthController` 中的 `loginPage()`

3. 覆盖 `login` 路由

```php
$router->get('/login', ['你的控制器', '你的loginPage']);
```
