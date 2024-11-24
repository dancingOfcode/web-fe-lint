import{_ as n,c as s,o as a,a as e}from"./app-DpnVg6Lz.js";const l={},i=e(`<h1 id="文档-规范" tabindex="-1"><a class="header-anchor" href="#文档-规范"><span>文档 规范</span></a></h1><h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言"><span>前言</span></a></h2><p>在撰写文档的时候如果能遵循一点良好的规范，将能<strong>提升所有人的阅读体验</strong>。</p><p>在此，文档的含义非常广泛，可以指代任何供人类阅读的文本材料。包括但不限于：<code>Readme</code>、<code>Changelog</code>、代码注释、上手指南、<code>Issue</code> 说明和<code>PPT</code> 分享等。</p><h2 id="_1-空格" tabindex="-1"><a class="header-anchor" href="#_1-空格"><span>1. 空格</span></a></h2><ul><li><p>1.1.【强制】中英文之间需要增加空格</p><div class="language-markdown line-numbers-mode" data-highlighter="prismjs" data-ext="md" data-title="md"><pre><code><span class="line"><span class="token comment">&lt;!-- bad --&gt;</span></span>
<span class="line"></span>
<span class="line">HTML定义网页的结构与内容，CSS定义其格式与样式，而JavaScript则为网页增加可交互性，创作功能丰富的Web应用。</span>
<span class="line"></span>
<span class="line"><span class="token comment">&lt;!-- good --&gt;</span></span>
<span class="line"></span>
<span class="line">HTML 定义网页的结构与内容，CSS 定义其格式与样式，而 JavaScript 则为网页增加可交互性，创作功能丰富的 Web 应用。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>1.2.【强制】中英文与数字之间需要增加空格</p><div class="language-markdown line-numbers-mode" data-highlighter="prismjs" data-ext="md" data-title="md"><pre><code><span class="line"><span class="token comment">&lt;!-- bad --&gt;</span></span>
<span class="line"></span>
<span class="line">截至2012年，所有的现代浏览器都完整的支持 ECMAScript5.1，旧版本的浏览器至少支持 ECMAScript3 标准。</span>
<span class="line"></span>
<span class="line"><span class="token comment">&lt;!-- good --&gt;</span></span>
<span class="line"></span>
<span class="line">截至 2012 年，所有的现代浏览器都完整的支持 ECMAScript 5.1，旧版本的浏览器至少支持 ECMAScript 3 标准。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>1.3.【强制】全角标点与其他字符之间不加空格</p><div class="language-markdown line-numbers-mode" data-highlighter="prismjs" data-ext="md" data-title="md"><pre><code><span class="line"><span class="token comment">&lt;!-- bad --&gt;</span></span>
<span class="line"></span>
<span class="line">不像 UDP， HTTP 是一个不会静默丢失消息的协议。</span>
<span class="line"></span>
<span class="line"><span class="token comment">&lt;!-- good --&gt;</span></span>
<span class="line"></span>
<span class="line">不像 UDP，HTTP 是一个不会静默丢失消息的协议。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>1.4.【强制】半角标点与其他字符之间需要增加空格</p><div class="language-markdown line-numbers-mode" data-highlighter="prismjs" data-ext="md" data-title="md"><pre><code><span class="line"><span class="token comment">&lt;!-- bad --&gt;</span></span>
<span class="line"></span>
<span class="line">Cookie 主要用于以下三个方面：</span>
<span class="line"></span>
<span class="line">1.会话状态管理（如用户登录状态、购物车、游戏分数或其它需要记录的信息） 2.个性化设置（如用户自定义设置、主题等） 3.浏览器行为跟踪（如跟踪分析用户行为等）</span>
<span class="line"></span>
<span class="line"><span class="token comment">&lt;!-- good --&gt;</span></span>
<span class="line"></span>
<span class="line">Cookie 主要用于以下三个方面：</span>
<span class="line"></span>
<span class="line"><span class="token list punctuation">1.</span> 会话状态管理（如用户登录状态、购物车、游戏分数或其它需要记录的信息）</span>
<span class="line"><span class="token list punctuation">2.</span> 个性化设置（如用户自定义设置、主题等）</span>
<span class="line"><span class="token list punctuation">3.</span> 浏览器行为跟踪（如跟踪分析用户行为等）</span>
<span class="line"></span>
<span class="line"><span class="token comment">&lt;!-- bad --&gt;</span></span>
<span class="line"></span>
<span class="line">我+你=世界。</span>
<span class="line"></span>
<span class="line"><span class="token comment">&lt;!-- good --&gt;</span></span>
<span class="line"></span>
<span class="line">我 + 你 = 世界。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>1.5.【推荐】链接文字前后不需要增加空格</p><div class="language-markdown line-numbers-mode" data-highlighter="prismjs" data-ext="md" data-title="md"><pre><code><span class="line"><span class="token comment">&lt;!-- bad --&gt;</span></span>
<span class="line"></span>
<span class="line"><span class="token url">[<span class="token content">了解更多</span>](<span class="token url">https://developer.mozilla.org/zh-CN/docs/Web</span>)</span> 开发技术相关知识。</span>
<span class="line"></span>
<span class="line"><span class="token comment">&lt;!-- good --&gt;</span></span>
<span class="line"></span>
<span class="line"><span class="token url">[<span class="token content">了解更多</span>](<span class="token url">https://developer.mozilla.org/zh-CN/docs/Web</span>)</span>开发技术相关知识。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="_2-标点符号" tabindex="-1"><a class="header-anchor" href="#_2-标点符号"><span>2. 标点符号</span></a></h2><ul><li><p>2.1.【推荐】正确使用引号</p><p>中文句子内夹用英文句子时，该英文句子用中文双引号标示，保留英文句子内部的英文标点符号，句末使用中文标点。</p><div class="language-markdown line-numbers-mode" data-highlighter="prismjs" data-ext="md" data-title="md"><pre><code><span class="line"><span class="token comment">&lt;!-- bad - 英文句子不建议使用英文引号标示 --&gt;</span></span>
<span class="line"></span>
<span class="line">他写的是 &quot;Hello, world!&quot;。</span>
<span class="line"></span>
<span class="line"><span class="token comment">&lt;!-- bad - 英文句子不建议使用中文单引号标示 --&gt;</span></span>
<span class="line"></span>
<span class="line">他写的是‘Hello, world!’。</span>
<span class="line"></span>
<span class="line"><span class="token comment">&lt;!-- bad - 英文句子内部的标点符号建议保留英文标点符号 --&gt;</span></span>
<span class="line"></span>
<span class="line">他写的是“Hello，world！”。</span>
<span class="line"></span>
<span class="line"><span class="token comment">&lt;!-- good --&gt;</span></span>
<span class="line"></span>
<span class="line">他写的是“Hello, world!”。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>2.2.【推荐】正确使用省略号</p><p>中文省略号的形式为“……”（中文输入法下 SHIFT + 6），6 个居中小圆点；英文省略号的形式为“...”，3 个齐线小圆点。</p><p>夹用英文的中文句子里，英文内部的省略使用英文省略号；中文内部的省略使用中文省略号。</p><div class="language-markdown line-numbers-mode" data-highlighter="prismjs" data-ext="md" data-title="md"><pre><code><span class="line"><span class="token comment">&lt;!-- bad --&gt;</span></span>
<span class="line"></span>
<span class="line">省略号是 3 个小圆点...</span>
<span class="line">省略号是 6 个齐线小圆点......</span>
<span class="line">省略号是 6 个句号。。。。。。</span>
<span class="line"></span>
<span class="line"><span class="token comment">&lt;!-- good --&gt;</span></span>
<span class="line"></span>
<span class="line">省略号是 6 个居中小圆点，占两个全角空格……</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>2.3.【推荐】正确使用破折号</p><p>中文破折号的形式为“——”，长度相当于两个汉字的长度。</p><div class="language-markdown line-numbers-mode" data-highlighter="prismjs" data-ext="md" data-title="md"><pre><code><span class="line"><span class="token comment">&lt;!-- bad - 破折号不推荐使用两个中横线 --&gt;</span></span>
<span class="line"></span>
<span class="line">第三方框架和库--用来快速构建网站和应用。</span>
<span class="line"></span>
<span class="line"><span class="token comment">&lt;!-- good --&gt;</span></span>
<span class="line"></span>
<span class="line">第三方框架和库——用来快速构建网站和应用。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="_3-全角和半角" tabindex="-1"><a class="header-anchor" href="#_3-全角和半角"><span>3. 全角和半角</span></a></h2><ul><li><p>3.1.【强制】中文标点符号使用全角</p><div class="language-markdown line-numbers-mode" data-highlighter="prismjs" data-ext="md" data-title="md"><pre><code><span class="line"><span class="token comment">&lt;!-- bad - 中文句子冒号未使用全角 --&gt;</span></span>
<span class="line"></span>
<span class="line">前端框架: React、Vue、Angular。</span>
<span class="line"></span>
<span class="line"><span class="token comment">&lt;!-- bad - 中文句子内夹用并列的英文单词时使未使用顿号分隔 --&gt;</span></span>
<span class="line"></span>
<span class="line">前端框架：React, Vue, Angular。</span>
<span class="line"></span>
<span class="line"><span class="token comment">&lt;!-- good --&gt;</span></span>
<span class="line"></span>
<span class="line">前端框架：React、Vue、Angular。</span>
<span class="line"></span>
<span class="line"><span class="token comment">&lt;!-- bad - 中文句子括号未使用全角 --&gt;</span></span>
<span class="line"></span>
<span class="line">至少熟悉一门非前端的语言(如 Java、PHP、C、C++、Python、Ruby)，并有实践经验！</span>
<span class="line"></span>
<span class="line"><span class="token comment">&lt;!-- good --&gt;</span></span>
<span class="line"></span>
<span class="line">至少熟悉一门非前端的语言（如 Java、PHP、C、C++、Python、Ruby），并有实践经验！</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>3.2.【强制】英文和数字使用半角</p><div class="language-markdown line-numbers-mode" data-highlighter="prismjs" data-ext="md" data-title="md"><pre><code><span class="line"><span class="token comment">&lt;!-- bad - 英文和数字不应该使用全角 --&gt;</span></span>
<span class="line"></span>
<span class="line">该版本正式名称为 ＥＣＭＡＳｃｒｉｐｔ ２０１５，但通常被称为 ＥＣＭＡＳｃｒｉｐｔ ６ 或者 ＥＳ６。</span>
<span class="line"></span>
<span class="line"><span class="token comment">&lt;!-- good --&gt;</span></span>
<span class="line"></span>
<span class="line">该版本正式名称为 ECMAScript 2015，但通常被称为 ECMAScript 6 或者 ES6。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>3.3.【强制】完整的英文整句和特殊名词使用半角标点</p><div class="language-markdown line-numbers-mode" data-highlighter="prismjs" data-ext="md" data-title="md"><pre><code><span class="line"><span class="token comment">&lt;!-- bad --&gt;</span></span>
<span class="line"></span>
<span class="line">乔布斯那句话是怎么说的？「Stay hungry，stay foolish。」</span>
<span class="line">推荐你阅读《Hackers＆Painters：Big Ideas from the Computer Age》，非常的有趣。</span>
<span class="line"></span>
<span class="line"><span class="token comment">&lt;!-- good --&gt;</span></span>
<span class="line"></span>
<span class="line">乔布斯那句话是怎么说的？「Stay hungry, stay foolish.」</span>
<span class="line">推荐你阅读《Hackers &amp; Painters: Big Ideas from the Computer Age》，非常的有趣。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="_4-名词" tabindex="-1"><a class="header-anchor" href="#_4-名词"><span>4. 名词</span></a></h2><ul><li><p>4.1.【强制】正确地拼写英文专有词汇</p><div class="language-markdown line-numbers-mode" data-highlighter="prismjs" data-ext="md" data-title="md"><pre><code><span class="line"><span class="token comment">&lt;!-- bad --&gt;</span></span>
<span class="line"></span>
<span class="line">我们需要一位熟悉 Js、h5，至少理解一种框架（如 vue、react、angular 等）。</span>
<span class="line"></span>
<span class="line"><span class="token comment">&lt;!-- good --&gt;</span></span>
<span class="line"></span>
<span class="line">我们需要一位熟悉 JavaScript、HTML5，至少理解一种框架（如 React、Angular、Vue 等）的前端开发者。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="附录" tabindex="-1"><a class="header-anchor" href="#附录"><span>附录</span></a></h2><p>前端常用专有名词：</p><div class="language-markdown line-numbers-mode" data-highlighter="prismjs" data-ext="md" data-title="md"><pre><code><span class="line">HTML, CSS, JavaScript/JS, AJAX, JSON, DOM, BOM, Less, HTTP, HTTPS, WebSocket, ECMAScript, ECMAScript 2015, ECMAScript 6, ES6, ES2015</span>
<span class="line">jQuery, jQuery UI, jQuery Mobile, YUI, Zepto, Dojo</span>
<span class="line">React, React Native, Bootstrap, RequireJS, Sea.js, AngularJS, Backbone.js</span>
<span class="line">Gulp, Grunt, webpack, Yeoman, npm, spm, Babel</span>
<span class="line">Mocha, Jasmine, Should.js</span>
<span class="line">PHP, Java, Node.js</span>
<span class="line">MySQL, MongoDB, Redis</span>
<span class="line">Apache, Nginx</span>
<span class="line">GitHub, GitLab, GitCafe</span>
<span class="line">Chrome, Firefox, Safari, Internet Explore/IE, IE 7, Opera, UC</span>
<span class="line">Android, iOS, Windows, OS X, Ubuntu, Linux, Debian</span>
<span class="line">PC, Mobile, H5</span>
<span class="line">MacBook, MacBook Pro, MacBook Air, iMac, Mac Pro, Mac mini</span>
<span class="line">iPad Air, iPad Air 2, iPad mini, iPhone, iPhone 6s, iPhone 6s Plus, Apple Watch</span>
<span class="line">FPS, UI, URL, URI, URLs, URIs</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料"><span>参考资料</span></a></h2><ul><li><a href="https://github.com/sparanoid/chinese-copywriting-guidelines" target="_blank" rel="noopener noreferrer">《中文文案排版指北》</a></li><li><a href="http://www.moe.gov.cn/ewebeditor/uploadfile/2015/01/13/20150113091548267.pdf" target="_blank" rel="noopener noreferrer">《标点符号用法》</a></li><li><a href="http://www.moe.gov.cn/ewebeditor/uploadfile/2015/01/13/20150113092346124.pdf" target="_blank" rel="noopener noreferrer">夹用英文的中文文本的标点符号用法（草案）</a></li><li><a href="https://www.w3.org/TR/clreq/" target="_blank" rel="noopener noreferrer">《中文排版需求》</a></li></ul>`,17),d=[i];function p(c,r){return a(),s("div",null,d)}const v=n(l,[["render",p],["__file","doc.html.vue"]]),m=JSON.parse('{"path":"/engineering/doc.html","title":"文档规范","lang":"zh-en","frontmatter":{"title":"文档规范","author":{"name":"xu.zhengyou","link":"https://github.com/dancingOfcode/web-fe-lint"}},"headers":[{"level":2,"title":"前言","slug":"前言","link":"#前言","children":[]},{"level":2,"title":"1. 空格","slug":"_1-空格","link":"#_1-空格","children":[]},{"level":2,"title":"2. 标点符号","slug":"_2-标点符号","link":"#_2-标点符号","children":[]},{"level":2,"title":"3. 全角和半角","slug":"_3-全角和半角","link":"#_3-全角和半角","children":[]},{"level":2,"title":"4. 名词","slug":"_4-名词","link":"#_4-名词","children":[]},{"level":2,"title":"附录","slug":"附录","link":"#附录","children":[]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"git":{},"filePathRelative":"engineering/doc.md"}');export{v as comp,m as data};
