!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define(["react"],t):"object"==typeof exports?exports.index=t(require("react")):e.index=t(e.React)}(this,function(e){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=1)}([function(t,n){t.exports=e},function(e,t,n){"use strict";var r={get ListView(){return n(2)},get Grid(){return n(3)},get Icon(){return n(4)},get Text(){return n(5)},get NavBar(){return n(6)},get Tabbar(){return n(7)},get TabItem(){return n(8)},get View(){return n(9)},get WhiteSpace(){return n(10)}};e.exports=r},function(e,t,n){"use strict";var r=n(0),o=function(e){return e&&e.__esModule?e:{default:e}}(r),u=function(){return o.default.createElement("div",null,"ListView")};e.exports=u},function(e,t,n){"use strict";var r=n(0),o=function(e){return e&&e.__esModule?e:{default:e}}(r),u=function(){return o.default.createElement("div",null,"Grid")};e.exports=u},function(e,t,n){"use strict";function r(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}var o=n(0),u=function(e){return e&&e.__esModule?e:{default:e}}(o),c=function(e){r(e,[]);return u.default.createElement("div",{style:container},"Icon")};e.exports=c},function(e,t,n){"use strict";function r(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}var o=n(0),u=function(e){return e&&e.__esModule?e:{default:e}}(o),c=function(e){var t=r(e,[]),n=(t.children,t.style);t.onPress;return u.default.createElement("p",{style:n},"Text")};e.exports=c},function(e,t,n){"use strict";function r(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}var o=n(0),u=function(e){return e&&e.__esModule?e:{default:e}}(o),c=function(e){var t=r(e,[]),n=t.title,o=t.height,c=void 0===o?60:o,i=t.color,l=void 0===i?"#fff":i,f=t.backgroundColor,a=void 0===f?"#ff9900":f,d={display:"flex",justifyContent:"center",alignItems:"center",height:c,backgroundColor:a},s={color:l};return u.default.createElement("div",{style:d},u.default.createElement("div",{style:s},n))};e.exports=c},function(e,t,n){"use strict";function r(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}var o=n(0),u=function(e){return e&&e.__esModule?e:{default:e}}(o),c=function(e){var t=r(e,[]),n=t.children,o=t.tabBarBackgroundColor,c=void 0===o?"#fff":o,i=t.component,l=(t.style,i),f={flex:1,display:"flex",flexDirection:"column",backgroundColor:"#f3f3f0"},a={margin:0,padding:0,height:60,listStyleType:"none",display:"flex",flexDirection:"row",backgroundColor:c};return u.default.createElement("div",{style:f},u.default.createElement(l,null),u.default.createElement("div",{style:a},n))};e.exports=c},function(e,t,n){"use strict";function r(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}var o=n(0),u=function(e){return e&&e.__esModule?e:{default:e}}(o),c=function(e){var t=r(e,[]),n=t.id,o=t.title,c=t.icon,i=t.tabStyles,l=void 0===i?"tabItem":i,f=t.iconStyles,a=void 0===f?"tabImg":f,d=t.titleStyles,s=(t.color,t.onClick),p={tabItem:{display:"flex",flex:1,flexDirection:"column",justifyContent:"center",alignItems:"center"},tabImg:{width:24,height:24,backgroundSize:"24 24"},tabActiveItem:{color:"#fb664c"},tabUnActiveItem:{color:" #d3d3d3"}};return u.default.createElement("div",{style:p[l],onClick:function(){return s(n)}},u.default.createElement("img",{src:c,style:p[a],alt:""}),u.default.createElement("div",{style:p[d]},o))};e.exports=c},function(e,t,n){"use strict";function r(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}var o=n(0),u=function(e){return e&&e.__esModule?e:{default:e}}(o),c=function(e){r(e,[]);return u.default.createElement("div",null,"view")};e.exports=c},function(e,t,n){"use strict";function r(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}var o=n(0),u=function(e){return e&&e.__esModule?e:{default:e}}(o),c=function(e){var t=r(e,[]),n=t.height,o=void 0===n?1:n,c=t.backgroundColor,i=void 0===c?"#fff":c,l={height:o,backgroundColor:i};return u.default.createElement("div",{style:l})};e.exports=c}])});