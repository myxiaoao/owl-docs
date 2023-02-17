import{_ as s,o as n,c as a,e as l}from"./app.f7cf8af5.js";const A=JSON.parse('{"title":"动态加载资源","description":"","frontmatter":{"title":"动态加载资源"},"headers":[{"level":2,"title":"方法","slug":"方法","link":"#方法","children":[{"level":3,"title":"js()","slug":"js","link":"#js","children":[]},{"level":3,"title":"css()","slug":"css","link":"#css","children":[]},{"level":3,"title":"style()","slug":"style","link":"#style","children":[]},{"level":3,"title":"script()","slug":"script","link":"#script","children":[]}]}],"relativePath":"guide/views/dynamic-assets.md","lastUpdated":null}'),p={name:"guide/views/dynamic-assets.md"},o=l(`<h1 id="动态加载资源" tabindex="-1">动态加载资源 <a class="header-anchor" href="#动态加载资源" aria-hidden="true">#</a></h1><div class="warning custom-block"><p class="custom-block-title">注意</p><p>仅支持全局加载, 以下方法只能在 <code>app/admin/bootstrat.php</code> 中使用 <br> 前端会在获取配置信息时, 将这些资源加载到页面中</p></div><h2 id="方法" tabindex="-1">方法 <a class="header-anchor" href="#方法" aria-hidden="true">#</a></h2><p><code>Admin</code> 中提供了以下方法来动态加载资源：</p><h3 id="js" tabindex="-1">js() <a class="header-anchor" href="#js" aria-hidden="true">#</a></h3><p>加载 js 资源，支持单个和多个。</p><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 加载单个js</span></span>
<span class="line"><span style="color:#FFCB6B;">Admin</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">js</span><span style="color:#89DDFF;">($</span><span style="color:#A6ACCD;">js</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 加载多个js</span></span>
<span class="line"><span style="color:#FFCB6B;">Admin</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">js</span><span style="color:#89DDFF;">([$</span><span style="color:#A6ACCD;">js1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">js2</span><span style="color:#89DDFF;">]);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// eg:</span></span>
<span class="line"><span style="color:#FFCB6B;">Admin</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">js</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">https://cdn.bootcdn.net/ajax/libs/echarts/4.9.0/echarts.min.js</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#FFCB6B;">Admin</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">js</span><span style="color:#89DDFF;">([</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">https://cdn.bootcdn.net/ajax/libs/echarts/4.9.0/echarts.min.js</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">https://cdn.bootcdn.net/ajax/libs/echarts/4.9.0/extension/bmap.min.js</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">]);</span></span>
<span class="line"></span></code></pre></div><h3 id="css" tabindex="-1">css() <a class="header-anchor" href="#css" aria-hidden="true">#</a></h3><p>加载 css 资源，支持单个和多个。</p><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 加载单个css</span></span>
<span class="line"><span style="color:#FFCB6B;">Admin</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">css</span><span style="color:#89DDFF;">($</span><span style="color:#A6ACCD;">css</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 加载多个css</span></span>
<span class="line"><span style="color:#FFCB6B;">Admin</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">css</span><span style="color:#89DDFF;">([$</span><span style="color:#A6ACCD;">css1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">css2</span><span style="color:#89DDFF;">]);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// eg:</span></span>
<span class="line"><span style="color:#FFCB6B;">Admin</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">css</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">https://cdn.bootcdn.net/ajax/libs/echarts/4.9.0/echarts.min.css</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#FFCB6B;">Admin</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">css</span><span style="color:#89DDFF;">([</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">https://cdn.bootcdn.net/ajax/libs/echarts/4.9.0/echarts.min.css</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">https://cdn.bootcdn.net/ajax/libs/echarts/4.9.0/extension/bmap.min.css</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">]);</span></span>
<span class="line"></span></code></pre></div><h3 id="style" tabindex="-1">style() <a class="header-anchor" href="#style" aria-hidden="true">#</a></h3><p>加载 style，支持单个和多个。</p><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 加载单个style</span></span>
<span class="line"><span style="color:#FFCB6B;">Admin</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">style</span><span style="color:#89DDFF;">($</span><span style="color:#A6ACCD;">style</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 加载多个style</span></span>
<span class="line"><span style="color:#FFCB6B;">Admin</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">style</span><span style="color:#89DDFF;">([$</span><span style="color:#A6ACCD;">style1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">style2</span><span style="color:#89DDFF;">]);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// eg:</span></span>
<span class="line"><span style="color:#FFCB6B;">Admin</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">style</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">.box { color: red; }</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#FFCB6B;">Admin</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">style</span><span style="color:#89DDFF;">([</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">.box { color: red; }</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">.box2 { color: blue; }</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">]);</span></span>
<span class="line"></span></code></pre></div><h3 id="script" tabindex="-1">script() <a class="header-anchor" href="#script" aria-hidden="true">#</a></h3><p>加载 script，支持单个和多个。</p><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 加载单个script</span></span>
<span class="line"><span style="color:#FFCB6B;">Admin</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">script</span><span style="color:#89DDFF;">($</span><span style="color:#A6ACCD;">script</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 加载多个script</span></span>
<span class="line"><span style="color:#FFCB6B;">Admin</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">script</span><span style="color:#89DDFF;">([$</span><span style="color:#A6ACCD;">script1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">script2</span><span style="color:#89DDFF;">]);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// eg:</span></span>
<span class="line"><span style="color:#FFCB6B;">Admin</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">script</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">console.log(&quot;hello world&quot;)</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#FFCB6B;">Admin</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">script</span><span style="color:#89DDFF;">([</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">console.log(&quot;hello world&quot;)</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">console.log(&quot;hello world2&quot;)</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">]);</span></span>
<span class="line"></span></code></pre></div>`,16),e=[o];function t(c,r,F,i,D,y){return n(),a("div",null,e)}const h=s(p,[["render",t]]);export{A as __pageData,h as default};
