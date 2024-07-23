---
title: HTML 编码规范
categories:
  - 编码规范
tags:
  - 编码规范
author:
  name: xu.zhengyou@byd.com
  link: https://github.com/dancingOfcode/web-fe-lint
---

# HTML 编码规范

## 1. 文档

### 1.1. 文档类型

- 1.1.1.【强制】使用 HTML5 DOCTYPE。

  在 `HTML` 文档的开头使用 `<!DOCTYPE html>` 来声明文档的 `HTML` 版本。

  ```html
  <!-- bad - 非 HTML 5 DOCTYPE -->
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html></html>

  <!-- good -->
  <!DOCTYPE html>
  <html></html>
  ```