(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[678],{1189:function(e){"use strict";e.exports=JSON.parse('{"layout":"fixed","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/759c8591cbe7cc3ec841bc1289bbb492/d24ee/profile-kh.jpg","srcSet":"/static/759c8591cbe7cc3ec841bc1289bbb492/d24ee/profile-kh.jpg 50w,\\n/static/759c8591cbe7cc3ec841bc1289bbb492/64618/profile-kh.jpg 100w","sizes":"50px"},"sources":[{"srcSet":"/static/759c8591cbe7cc3ec841bc1289bbb492/d4bf4/profile-kh.avif 50w,\\n/static/759c8591cbe7cc3ec841bc1289bbb492/ee81f/profile-kh.avif 100w","type":"image/avif","sizes":"50px"},{"srcSet":"/static/759c8591cbe7cc3ec841bc1289bbb492/3faea/profile-kh.webp 50w,\\n/static/759c8591cbe7cc3ec841bc1289bbb492/6a679/profile-kh.webp 100w","type":"image/webp","sizes":"50px"}]},"width":50,"height":50}')},9535:function(e,t,l){"use strict";var c=l(7294),a=l(5444),i=l(9285);t.Z=function(){var e,t=null===(e=(0,a.useStaticQuery)("3274528899").site.siteMetadata)||void 0===e?void 0:e.author;return c.createElement("div",{className:"bio"},c.createElement(i.S,{className:"bio-avatar",layout:"fixed",formats:["AUTO","WEBP","AVIF"],src:"../images/profile-kh.jpg",width:50,height:50,quality:95,alt:"Profile picture",__imageData:l(1189)}),(null==t?void 0:t.name)&&c.createElement("p",null,"안녕하세요! ",c.createElement("strong",null,t.name)," ",(null==t?void 0:t.summary)||null," ",c.createElement("a",{href:"https://github.com/khjeon5328"},"깃허브 주소입니다.")))}},7704:function(e,t,l){"use strict";l.r(t);var c=l(7294),a=l(5444),i=l(9535),r=l(7198),n=l(3751);t.default=function(e){var t,l=e.data,s=e.location,o=(null===(t=l.site.siteMetadata)||void 0===t?void 0:t.title)||"Title",b=l.allMarkdownRemark.nodes;return 0===b.length?c.createElement(r.Z,{location:s,title:o},c.createElement(n.Z,{title:"All posts"}),c.createElement(i.Z,null),c.createElement("p",null,'No blog posts found. Add markdown posts to "content/blog" (or the directory you specified for the "gatsby-source-filesystem" plugin in gatsby-config.js).')):c.createElement(r.Z,{location:s,title:o},c.createElement(n.Z,{title:"All posts"}),c.createElement(i.Z,null),c.createElement("ol",{style:{listStyle:"none"}},b.map((function(e){var t=e.frontmatter.title||e.fields.slug;return c.createElement("li",{key:e.fields.slug},c.createElement("article",{className:"post-list-item",itemScope:!0,itemType:"http://schema.org/Article"},c.createElement("header",null,c.createElement("h2",null,c.createElement(a.Link,{to:e.fields.slug,itemProp:"url"},c.createElement("span",{itemProp:"headline"},t))),c.createElement("small",null,e.frontmatter.date)),c.createElement("section",null,c.createElement("p",{dangerouslySetInnerHTML:{__html:e.frontmatter.description||e.excerpt},itemProp:"description"}))))}))))}}}]);
//# sourceMappingURL=component---src-pages-index-js-5b6386436ee8e391fba5.js.map