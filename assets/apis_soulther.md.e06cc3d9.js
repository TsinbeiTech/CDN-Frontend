import{_ as s,c as a,o as l,a as n}from"./app.96a3e627.js";const d=JSON.parse('{"title":"苏哲 API","description":"","frontmatter":{"title":"苏哲 API"},"headers":[{"level":2,"title":"1/ 使用方式","slug":"_1-使用方式","link":"#_1-使用方式","children":[]},{"level":2,"title":"2/ 效果","slug":"_2-效果","link":"#_2-效果","children":[]},{"level":2,"title":"3/ Demo","slug":"_3-demo","link":"#_3-demo","children":[]},{"level":2,"title":"4/ 提交","slug":"_4-提交","link":"#_4-提交","children":[]}],"relativePath":"apis/soulther.md","lastUpdated":null}'),o={name:"apis/soulther.md"},p=n(`<h1 id="soulther-苏哲" tabindex="-1">Soulther 苏哲 <a class="header-anchor" href="#soulther-苏哲" aria-hidden="true">#</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><ul><li>本服务初衷仅供个人使用，若引用本服务的站点出现“站长认为无法容忍”的情况会被放入访问黑名单。</li><li>本域名旗下服务为免费公益服务和 CDN 域名，所有内容均由用户自行上传，如有违反版权、涉及暴力色情恐怖等图片，请及时联系下方邮箱。</li><li>FOR ABUSE ISSUES RELATED TO THIS DOMAIN, PLEASE EMAIL YOUR COMPLAINT WITH ANY RELEVANT LOGS TO ADMIN [AT] TSINBEI [DOT] COM.</li></ul></div><p><code>Soulther</code> 是 <code>Soul Soother 的缩写</code>，也就是<code>灵魂抚慰者</code>，中文译名苏哲，收录语录近4000条，并且持续更新！</p><h2 id="_1-使用方式" tabindex="-1">1/ 使用方式 <a class="header-anchor" href="#_1-使用方式" aria-hidden="true">#</a></h2><p>选择适当的位置放置<code>&lt;p&gt;</code>标签，可修改默认内容；在<code>&lt;body&gt;</code>结束前放置<code>&lt;script&gt;</code>，即可显示一句充满力量的话！</p><p>示例：</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">&lt;!-- Body --&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">soulther</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">不管风吹浪打，胜似闲庭信步。</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">&lt;!-- Footer --&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> xhr </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">XMLHttpRequest</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  xhr</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">open</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">get</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">https://api.tsinbei.com/soulther/?code=json</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  xhr</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">onreadystatechange</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">xhr</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">readyState</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">4</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">data</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">JSON</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">parse</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">xhr</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">responseText</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">soulther</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getElementsByClassName</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">soulther</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)[</span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">soulther</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">innerText</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">data</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">msg</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  xhr</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">send</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><p>简便方式：指定参数为<code>?code=js</code>：</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">&lt;!-- Body --&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">soulther</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">不管风吹浪打，胜似闲庭信步。</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">&lt;!-- Footer --&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://api.tsinbei.com/soulther/?code=js</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="_2-效果" tabindex="-1">2/ 效果 <a class="header-anchor" href="#_2-效果" aria-hidden="true">#</a></h2><div class="info custom-block"><p class="custom-block-title">INFO</p><p>放弃幻想，准备斗争。</p></div><h2 id="_3-demo" tabindex="-1">3/ Demo <a class="header-anchor" href="#_3-demo" aria-hidden="true">#</a></h2><p>使用 XHR：<a href="https://api.tsinbei.com/soulther/demo/json.html" target="_blank" rel="noreferrer">Soulther Demo</a></p><p>引用 JS：<a href="https://api.tsinbei.com/soulther/demo/js.html" target="_blank" rel="noreferrer">Soulther Demo</a></p><h2 id="_4-提交" tabindex="-1">4/ 提交 <a class="header-anchor" href="#_4-提交" aria-hidden="true">#</a></h2><div class="info custom-block"><p class="custom-block-title">贡献语录😉</p><p>清北API 还支持 提交语录，只需要 Fork 仓库，修改文件，然后提交 PR 。</p></div>`,16),e=[p];function t(c,r,F,D,y,i){return l(),a("div",null,e)}const C=s(o,[["render",t]]);export{d as __pageData,C as default};
