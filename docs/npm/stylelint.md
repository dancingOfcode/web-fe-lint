---
title: web-fe-stylelint
author:
  name: xu.zhengyou
  link: https://github.com/dancingOfcode/web-fe-lint
---

# web-fe-stylelint

:::tip
CSS 规范
:::

支持配套的 [stylelint 可共享配置](https://stylelint.io/user-guide/configure)。

## 安装

需要先行安装 [stylelint](https://www.npmjs.com/package/stylelint) 和 [stylelint-scss](https://www.npmjs.com/package/stylelint-scss)：

```bash
npm install web-fe-stylelint stylelint stylelint-scss --save-dev
```

## 使用

在 `.stylelintrc` 中继承本包:

```json
{
  "extends": "web-fe-stylelint"
}
```
