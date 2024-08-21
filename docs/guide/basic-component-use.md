---
nav: 指南
group: 基础
title: 组件使用
order: 7
---

## 创建页面

```php
$page = \Slowlyo\SlowAdmin\Renderers\Page::make();

return $this->response()->success($page);
```
<br>

## 给页面设置标题

```php
// ...
$page->title('我是标题');
// ...
```
<br>

## 在页面上放个按钮

```php
// ...
$page->body(
    \Slowlyo\SlowAdmin\Renderers\Button::make()->label('我是按钮')->level('primary');
);
// ...
```
<br>

## 按钮前面再放个输入框

```php
// ...
$page->body([
	Slowlyo\SlowAdmin\Renderers\Form\InputText::make()->name('username')->label('姓名'),
	// button
]);
```

> 在你熟悉了 `amis` 之后, 你会发现原来用后端代码构建页面这么简单<br> 你可以在 `owl  admin` 中找到几乎所有的 `amis` 组件

<br>

## 没找到你想要的组件?

```php
\Slowlyo\SlowAdmin\Renderers\Component::make()->setType('page')->title('我是标题');
// 或者
amis('page')->title('我是标题');

// 等效于
\Slowlyo\SlowAdmin\Renderers\Page::make()->title('我是标题');

// 或者你可以直接写个数组 (有点丑, 而且不方便维护~ 不推荐)
// [
// 	'type'=>'page',
// 	'title'=>'我是标题',
// 	'body'=>'content'
// ]
```

<br>

:::info{title=TIP}
你可以放心的在每一个继承了 `Slowlyo\SlowAdmin\Renderers` 类的组件类后面调用方法 <br>
方法名对应了 `amis` 组件的属性名, 参数对应了 `amis` 属性的值 <br>
在组件的基类中使用了 `__call()` 方法来实现自动添加属性 <br>
即使方法不存在, 或者该组件没有这个属性, 你的代码也不会报错, 只是效果出不来罢了~
:::


<br>

## 组件鉴权

### 原理

- 每个组件都可使用 `permission` 方法, 传入对应权限的 `slug` 
- 在将页面结构响应给前端前, 会将没有权限的组件置为空数组, 从而实现 (没有权限就不渲染组件) 的效果

<br>

### 示例

```php
// 当前用户不是超级管理员并且没有 user.index 权限时, 按钮将不会显示
amis()->Action()->label('我是按钮')->permission('user.index');
```
