import { defineUserConfig } from "vuepress";
import { searchPlugin } from "@vuepress/plugin-search";
import { viteBundler } from "@vuepress/bundler-vite";
import { defaultTheme } from "@vuepress/theme-default";

export default defineUserConfig({
  lang: "zh-en",
  base: "/web-fe-lint/",
  title: "前端规范",
  description: "web前端规范",
  head: [["link", { rel: "icon", href: "./images/favicon.png" }]],
  bundler: viteBundler(),
  theme: defaultTheme({
    logo: "/images/feLogo.jpg",
    lastUpdated: false, // 更新时间
    contributors: false, // 贡献者
    // header菜单配置
    navbar: [
      {
        text: "首页",
        link: "/index.md",
      },
      {
        text: "编码规范",
        children: [
          { text: "HTML 编码规范", link: "/coding/html.md" },
          { text: "CSS 编码规范", link: "/coding/css.md" },
          { text: "JavaScript 编码规范", link: "/coding/javascript.md" },
          { text: "Typescript 编码规范", link: "/coding/typescript.md" },
          { text: "Node 编码规范", link: "/coding/node.md" },
        ],
      },
      {
        text: "工程规范",
        children: [
          { text: "Git 规范", link: "/engineering/git.md" },
          { text: "文档规范", link: "/engineering/doc.md" },
          { text: "CHANGELOG 规范", link: "/engineering/changelog.md" },
        ],
      },
      {
        text: "NPM包",
        children: [
          { text: "web-fe-eslint", link: "/npm/eslint.md" },
          { text: "web-fe-stylelint", link: "/npm/stylelint.md" },
          { text: "web-fe-commitlint", link: "/npm/commitlint.md" },
          { text: "web-fe-markdownlint", link: "/npm/markdownlint.md" },
          { text: "eslint-plugin-fe", link: "/npm/eslint-plugin-fe.md" },
        ],
      },
      {
        text: "脚手架",
        children: [{ text: "web-fe-lint", link: "/cli/web-fe-lint.md" }],
      },
    ],
    // 侧边栏配置
    sidebar: {
      "/coding/": [
        {
          text: "编码规范",
          children: [
            {
              text: "HTML 编码规范",
              link: "/coding/html.md",
            },
            {
              text: "CSS 编码规范",
              link: "/coding/css.md",
            },
            {
              text: "JavaScript 编码规范",
              link: "/coding/javascript.md",
            },
            {
              text: "Typescript 编码规范",
              link: "/coding/typescript.md",
            },
            {
              text: "Node 编码规范",
              link: "/coding/node.md",
            },
          ],
        },
      ],
      "/engineering/": [
        {
          text: "工程规范",
          children: [
            {
              text: "Git 规范",
              link: "/engineering/git.md",
            },
            {
              text: "文档规范",
              link: "/engineering/doc.md",
            },
            {
              text: "CHANGELOG 规范",
              link: "/engineering/changelog.md",
            },
          ],
        },
      ],
      "/npm/": [
        {
          text: "NPM包",
          children: [
            { text: "web-fe-eslint", link: "/npm/eslint.md" },
            { text: "web-fe-stylelint", link: "/npm/stylelint.md" },
            { text: "web-fe-commitlint", link: "/npm/commitlint.md" },
            {
              text: "web-fe-markdownlint",
              link: "/npm/markdownlint.md",
            },
            { text: "eslint-plugin-fe", link: "/npm/eslint-plugin-fe.md" },
          ],
        },
      ],
      "/cli/": [
        {
          text: "脚手架",
          children: [{ text: "web-fe-lint", link: "/cli/web-fe-lint.md" }],
        },
      ],
    },
  }),
  plugins: [
    searchPlugin({
      locales: {
        "/": {
          placeholder: "搜索文档",
        },
      },
    }),
  ],
});
