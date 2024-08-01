# web-fe-lint

前端编码规范工程化

## :mountain: 能力支持

### 1. 全面的前端生态

支持前端全部生态，无需关注环境，支持直接使用

### 2. 完善的规范配件

支持对全部前端配置实现一键接入、一键扫描、一键修复、一键升级

## :star: 设计目的

随着前端技术的发展，前端项目正在变得越来越复杂。`JavaScript` 作为一门弱类型解释性编程语言，其灵活多变的语法极大的提高了前端开发效率，但同时也存在一系列问题。在大型项目开发过程中，代码维护所占用的时间比重往往大于新功能的开发。因此编写符合团队编码规范的代码是至关重要的。 一致性的代码规范可以增强团队开发协作效率、提高代码质量、减轻项目维护的负担。但是每个人的代码编写喜好不同，代码风格也有所差异，若要一个团队内所有的成员都能发挥最大程度的价值，一个具有普适性的标准是必不可少的。

目前行业现状，很多团队的基础建设都只是简单地知晓其中一部分规范工具的使用，但却没有一套完整的工程化产出来助力研发同学实现规范落地。因此，如果我们能够产出一套完整化的前端编码规范工具，将有利于提高项目的编码质量，减少项目维护成本，这也是设计此规范的初衷！

## :bulb: 为什要前端工程化

通过本套规范，您将了解到：

1. 现有前端前沿的研发流程下，我们可以通过哪些工具提升项目的编码规范，并提供配套工具的最佳实践，包括但不限于`eslint`、`stylelint`、`commitlint`、`markdownlint`、`husky`等；
2. 如何对新项目添加规范：支持一键接入新增项目，通过结合`gitpre-commit`钩子，对提交文件进行编码规范的扫描；同时通过`husky`的`commit-msg`钩子，对本次代码提交`message`的格式进行扫描。

## :couch_and_lamp: 配套工具

我们引入了多个业界流行的 `Linter` 作为规范文档的配套工具，并根据规范内容定制了对应的规则包，它们包括：

| 规范                                                              | Lint 工具                                                      | NPM 包                                                                                 |
| ----------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| JavaScript 编码规范 <br/> TypeScript 编码规范 <br/> Node 编码规范 | [ESLint](https://eslint.org/)                                  | [eslint-config-fd](https://www.npmjs.com/package/eslint-config-fd)             |
| CSS 编码规范                                                      | [stylelint](https://stylelint.io/)                             | [web-fe-stylelint](https://www.npmjs.com/package/web-fe-stylelint)       |
| Git 规范                                                          | [commitlint](https://commitlint.js.org/#/)                     | [web-fe-commitlint](https://www.npmjs.com/package/web-fe-commitlint)     |
| 文档规范                                                          | [markdownlint](https://github.com/DavidAnson/markdownlint)     | [web-fe-markdownlint](https://www.npmjs.com/package/web-fe-markdownlint) |
| Eslint 插件                                                       | [ESlint Plugin](https://eslint.org/docs/latest/extend/plugins) | [eslint-plugin-fe](https://www.npmjs.com/package/eslint-plugin-fe)             |

[web-fe-lint](https://www.npmjs.com/package/web-fe-lint) 收敛屏蔽了上述依赖和配置细节，提供简单的 `CLI` 和 `Node.js API`，让项目能够一键接入、一键扫描、一键修复、一键升级，并为项目配置 git commit 卡口，降低项目接入规范的成本。

您可以使用[web-fe-lint](https://www.npmjs.com/package/web-fe-lint) 方便地为项目接入全部规范。

## 其他

## 测试`markdown config`

全局安装`markdownlint-cli`

```bash
npm i -g markdownlint-cli
pnpm run lint
```

### 生成`CHANGELOG`

参考[conventional-changelog-cli](https://www.npmjs.com/package/conventional-changelog-cli)，全局安装`conventional-changelog-cli`：

```bash
npm install -g conventional-changelog-cli
pnpm run changelog
```

## :email: 联系

- **游戏**: <xu.zhengyou@byd.com>
- **WEB前端规范** <https://dancingOfcode.github.io/web-fe-lint/>
- **GitHub**: <https://github.com/dancingOfcode/web-fe-lint>

</br>
