(self.webpackChunkgatsby_theme_paste_starter=self.webpackChunkgatsby_theme_paste_starter||[]).push([[236],{7228:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n},e.exports.__esModule=!0,e.exports.default=e.exports},3646:function(e,t,r){var n=r(7228);e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.__esModule=!0,e.exports.default=e.exports},9100:function(e,t,r){var n=r(9489),o=r(7067);function u(t,r,a){return o()?(e.exports=u=Reflect.construct,e.exports.__esModule=!0,e.exports.default=e.exports):(e.exports=u=function(e,t,r){var o=[null];o.push.apply(o,t);var u=new(Function.bind.apply(e,o));return r&&n(u,r.prototype),u},e.exports.__esModule=!0,e.exports.default=e.exports),u.apply(null,arguments)}e.exports=u,e.exports.__esModule=!0,e.exports.default=e.exports},9713:function(e){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.__esModule=!0,e.exports.default=e.exports},7067:function(e){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}},e.exports.__esModule=!0,e.exports.default=e.exports},6860:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},319:function(e,t,r){var n=r(3646),o=r(6860),u=r(379),a=r(8206);e.exports=function(e){return n(e)||o(e)||u(e)||a()},e.exports.__esModule=!0,e.exports.default=e.exports},379:function(e,t,r){var n=r(7228);e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports},3487:function(e,t,r){"use strict";r.r(t);var n=r(7294),o=r(5444),u=r(6725),a=r(6125),c=r(4983),s=r(7404),p=r(563),l=r(4216);t.default=function(e){var t=e.pageContext.page,r={Link:o.rU},i=(0,a.d)(t.frontmatter.image);return n.createElement(p.Z,null,n.createElement(l.Z,{title:t.frontmatter.title,description:t.excerpt}),n.createElement(s.X,{variant:"heading10",as:"h1"},t.frontmatter.title),n.createElement(a.G,{image:i,alt:t.frontmatter.title}),n.createElement(c.MDXProvider,{components:r},n.createElement(u.MDXRenderer,{frontmatter:t.frontmatter},t.body)))}},6725:function(e,t,r){var n=r(3395);e.exports={MDXRenderer:n}},3395:function(e,t,r){var n=r(9100),o=r(319),u=r(9713),a=r(7316),c=["scope","children"];function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var l=r(7294),i=r(4983).mdx,f=r(9480).useMDXScope;e.exports=function(e){var t=e.scope,r=e.children,u=a(e,c),s=f(t),x=l.useMemo((function(){if(!r)return null;var e=p({React:l,mdx:i},s),t=Object.keys(e),u=t.map((function(t){return e[t]}));return n(Function,["_fn"].concat(o(t),[""+r])).apply(void 0,[{}].concat(o(u)))}),[r,t]);return l.createElement(x,p({},u))}}}]);
//# sourceMappingURL=component---node-modules-gatsby-theme-paste-src-templates-page-tsx-a86b226a70c381aeca4d.js.map