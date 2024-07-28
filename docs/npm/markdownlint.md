---
title: web-fe-markdownlint
author:
  name: xu.zhengyou
  link: https://github.com/dancingOfcode/web-fe-lint
---

# web-fe-markdownlint

:::tip
MD文档 规范
:::

支持配套的 [markdownlint 可共享配置](https://www.npmjs.com/package/markdownlint#optionsconfig)。

## 安装

需要先行安装 [markdownlint](https://www.npmjs.com/package/markdownlint)：

```bash
npm install web-fe-markdownlint markdownlint --save-dev
```

## 使用

在 `.markdownlint.json` 中继承本包:

```json
{
  "extends": "web-fe-markdownlint"
}
```
