---
nav: 指南
group: 
    title: 基础
    order: 1
title: 安装
order: 1
---

## 环境

- PHP >= `8.0`
- Laravel `9.*`

<br>

## 开始安装

### 安装 `laravel`

首先需要安装`laravel`框架，如已安装可以跳过此步骤。如果您是第一次使用`laravel`，请务必先阅读 [文档](https://learnku.com/docs/laravel/9.x/installation/12200) ！

```bash
composer create-project --prefer-dist laravel/laravel 项目名称 9.*
# 或
composer create-project --prefer-dist laravel/laravel 项目名称
```

安装完`laravel`之后需要修改`.env`文件，设置数据库连接设置正确

```
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=owl_admin
DB_USERNAME=root
DB_PASSWORD=
```

如果有需要的话，在此时可以在`config/app.php`设置中文

`locale` 如下设置

```
'locale' => 'zh_CN',
```

:::warning{title=注意}
如果你使用的是 laravel 11 的话 <br>
还需要执行 `php artisan install:api`
:::

### 安装 `owl-admin`

```bash
cd {项目名称}

composer require slowlyo/owl-admin
```

然后运行下面的命令来发布资源：

```bash
php artisan admin:publish
```

在该命令会生成配置文件`config/admin.php`，可以在里面修改安装的地址、数据库连接、以及表名，建议都是用默认配置不修改。

然后运行下面的命令完成安装：

```bash
php artisan admin:install
```

:::info{title=Tips}
执行这一步命令可能会报以下错误`Specified key was too long ... 767 bytes` <br>
如果出现这个报错，请在`app/Providers/AppServiceProvider.php`文件的`boot`
方法中加上代码`\Schema::defaultStringLength(191);`<br>
然后删除掉数据库中的所有数据表，再重新运行一遍`php artisan admin:install`命令即可。
:::

<br>

上述步骤操作完成之后就可以配置 web 服务了，注意需要把 web 目录也就是运行目录指向 public 目录

如果用的是 nginx，还需要在配置中加上伪静态配置

```
location / {
    try_files $uri $uri/ /index.php?$query_string;
}
```

<br>

另外注意文件权限设置 `755`, 否则可能报错

启动服务后，在浏览器打开 `http://localhost/admin`，使用用户名 `admin` 和密码 `admin`登陆。

## 目录结构

<Tree>
    <ul>
        <li> 
            app
            <ul>
                <li>
                    Admin
                    <small>admin 应用目录</small>
                    <ul>
                        <li>
                            Controllers <small>admin 控制器目录</small>
                            <ul>
                                <li>
                                    AuthController.php
                                    <small>可以在这个控制器中重写登录等逻辑</small>
                                </li>
                                <li>
                                    HomeController.php
                                    <small>默认的后台控制台控制器</small>
                                </li>
                                <li>
                                    SettingController.php
                                    <small>一个演示的控制器</small>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>
                    bootstrap.php
                    <small>admin 启动时会加载这个文件</small>
                </li>
                <li>
                    routes.php
                    <small>admin 常规路由文件</small>
                </li>
            </ul>
        </li>
        <li> 
            config
            <ul>
                <li>
                    admin.php
                    <small>框架配置文件</small>
                </li>
            </ul>
        </li>
        <li> 
            public
            <ul>
                <li>
                    admin-assets
                    <small>框架静态资源文件目录</small>
                    <ul></ul>
                </li>
            </ul>
        </li>
    </ul>
</Tree>
