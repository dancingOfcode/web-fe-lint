/*
 * @Date: 2024-07-22 23:12:17
 * @Author: dancingOfcode zhengyou007@163.com
 * @LastEditors: dancingOfcode zhengyou007@163.com
 * @LastEditTime: 2024-07-22 23:58:23
 * @Description: 这是默认设置
 */

import { viteBundler } from "@vuepress/bundler-vite";
import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress";

export default defineUserConfig({
  lang: "zh-CN",
  base: "/web-fe-lint/",
  title: "你好， VuePress ！",
  description: "这是我的第一个 VuePress 站点",
  bundler: viteBundler(),
  theme: defaultTheme({
    logo: "/images/feLogo.jpg",
    heroImage: "/images/feLogo.jpg",
    // 在这里进行配置
    navbar: [
      // NavbarItem
      {
        text: "首页",
        link: "/",
      },
      {
        text: "网络",
        link: "/network/",
      },
      {
        text: "设计模式",
        link: "/designPatterns/",
      },
    ],
    // 侧边栏对象
    // 不同子路径下的页面会使用不同的侧边栏
    sidebar: {
      "/network/": [
        {
          text: "网络",
          children: [
            {
              text: "一张图帮你看懂，在浏览器输入网址回车后，都发生了什么？",
              link: "/network/一张图帮你看懂，在浏览器输入网址回车后，都发生了什么？.md",
            },
            {
              text: "在Jekyll中创建一个新的列表页面",
              link: "/network/在Jekyll中创建一个新的列表页面.md",
            },
          ],
        },
      ],
      "/designPatterns/": [
        {
          text: "设计模式",
          collapsible: true,
          children: [
            {
              text: "单例模式--我的机器人女友",
              link: "/designPatterns/单例模式--我的机器人女友.md",
            },
          ],
        },
      ],
    },
  }),
});
