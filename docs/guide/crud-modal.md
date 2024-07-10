---
nav: 指南
group: CRUD
title: 弹窗操作
order: 8
---

可通过以下方式调整 `新增` `修改` `详情` 的交互逻辑:

```php
public function list(): Page
{
    $crud = $this->baseCRUD()
        ->headerToolbar([
            // 第一个参数为 true / 'dialog', 则启用弹窗模式
            // 第一个参数为 'drawer', 则启用抽屉模式
            // 第二个参数为弹窗大小: sm, md, lg
            $this->createButton(true, 'lg'),
            // 这里是其他按钮, 批量删除等
            ...$this->baseHeaderToolBar(),
        ])
        ->columns([
            // ...
            // 第一个参数为 true / 'dialog', 则启用弹窗模式
            // 第一个参数为 'drawer', 则启用抽屉模式
            // 第二个参数为弹窗大小: sm, md, lg
            $this->rowActions(true, 'lg'),
        ]);

    return $this->baseList($crud);
}
```
