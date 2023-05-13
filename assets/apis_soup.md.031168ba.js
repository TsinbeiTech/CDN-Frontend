import{_ as s,c as a,o as n,a as l}from"./app.5690ab14.js";const C=JSON.parse('{"title":"Bad Soup \u6BD2\u9E21\u6C64 API","description":"","frontmatter":{},"headers":[{"level":2,"title":"1/ \u4F7F\u7528\u65B9\u5F0F","slug":"_1-\u4F7F\u7528\u65B9\u5F0F","link":"#_1-\u4F7F\u7528\u65B9\u5F0F","children":[]},{"level":2,"title":"2/ Effect","slug":"_2-effect","link":"#_2-effect","children":[]},{"level":2,"title":"3/ More","slug":"_3-more","link":"#_3-more","children":[]}],"relativePath":"apis/soup.md","lastUpdated":null}'),p={name:"apis/soup.md"},o=l(`<h1 id="bad-soup-\u6BD2\u9E21\u6C64-api" tabindex="-1">Bad Soup \u6BD2\u9E21\u6C64 API <a class="header-anchor" href="#bad-soup-\u6BD2\u9E21\u6C64-api" aria-hidden="true">#</a></h1><p>\u5C06\u8FD9\u7897\u6BD2\u9E21\u6C64\u5F15\u7528\u81F3\u60A8\u7684\u7F51\u7AD9\uFF0C\u65F6\u65F6\u523B\u523B\u4F53\u73B0\u60A8\u7684\u7CBE\u795E\u3002</p><h2 id="_1-\u4F7F\u7528\u65B9\u5F0F" tabindex="-1">1/ \u4F7F\u7528\u65B9\u5F0F <a class="header-anchor" href="#_1-\u4F7F\u7528\u65B9\u5F0F" aria-hidden="true">#</a></h2><p>\u5C06\u4EE5\u4E0B\u4EE3\u7801\u5F15\u7528\u81EA\u60A8\u7F51\u9875\u4E2D\u5373\u53EF</p><div class="language-html"><button class="copy"></button><span class="lang">html</span><pre><code><span class="line"><span style="color:#676E95;">&lt;!-- Body --&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">id</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">badsoup</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\u6709\u4EBA\u4E00\u7B11\u5C31\u5F88\u597D\u770B\uFF0C\u4F60\u662F\u4E00\u770B\u5C31\u633A\u597D\u7B11\u3002</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">&lt;!-- Footer --&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> xhr </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">XMLHttpRequest</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  xhr</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">open</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">get</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">https://www.7ed.net/soup/api</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  xhr</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">onreadystatechange</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">xhr</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">readyState</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">4</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">data</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">JSON</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">parse</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">xhr</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">responseText</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">badsoup</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getElementById</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">badsoup</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">badsoup</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">innerText</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">data</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">badsoup</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  xhr</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">send</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">\u63D0\u793A</p><p>\u672C\u670D\u52A1\u6258\u7BA1\u4E8E Vercel\uFF0C\u76EE\u524D\u5927\u9646\u5230 Vercel \u7684\u8DEF\u7531\u95F4\u6B47\u6027\u4E0D\u53EF\u7528\uFF0C\u53EF\u4F7F\u7528\u6258\u7BA1\u4E8E Deno \u4F7F\u7528 Google Cloud \u7EBF\u8DEF\u7684 <code>api.7ed.net/soup/api</code> \u4EE3\u66FF\u3002</p></div><h2 id="_2-effect" tabindex="-1">2/ Effect <a class="header-anchor" href="#_2-effect" aria-hidden="true">#</a></h2><blockquote><p>\u5C31\u7B97\u4F60\u5145\u7535\u4E24\u5C0F\u65F6\uFF0C\u4E5F\u4E0D\u4F1A\u6709\u4EBA\u548C\u4F60\u901A\u8BDD\u4E94\u5206\u949F\u3002</p></blockquote><h2 id="_3-more" tabindex="-1">3/ More <a class="header-anchor" href="#_3-more" aria-hidden="true">#</a></h2><div class="info custom-block"><p class="custom-block-title">\u{1F609}</p><p>7ED \u8FD8\u63D0\u4F9B\u66F4\u591A\u9759\u6001\u8D44\u6E90\u52A0\u901F\u670D\u52A1\uFF0C\u524D\u5F80 <a href="/">\u9996\u9875</a> \u67E5\u770B\uFF0C \u5728\u4F7F\u7528\u8FC7\u7A0B\u4E2D\u51FA\u73B0\u4EFB\u4F55\u95EE\u9898\u5747\u53EF\u81F3 <a href="https://github.com/7ednet/yard/discussions" target="_blank" rel="noreferrer">\u540E\u82B1\u56ED</a> \u8FDB\u884C\u53CD\u9988\u3002</p></div>`,10),e=[o];function t(c,r,F,D,y,i){return n(),a("div",null,e)}const d=s(p,[["render",t]]);export{C as __pageData,d as default};
