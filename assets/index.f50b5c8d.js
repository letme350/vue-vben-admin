import{b_ as t,r as e,cG as i,e as n,d as s,a0 as a,o as r,i as o,b0 as c,bX as d,h as l,j as u,l as p,bw as m}from"./index.726a1292.js";import{_ as f}from"./index.4b3faacc.js";import"./vendor.3b1829c7.js";import"./index.41b8ad5e.js";import"./index.fc8abf96.js";import"./RightOutlined.97d13c0b.js";import"./EllipsisOutlined.f451d7d8.js";import"./types.96074ade.js";import"./isEqual.aa473c94.js";import"./toInteger.410aca8d.js";import"./DownOutlined.f011354d.js";/* empty css              */import"./index.151c2907.js";import"./usePageContext.212455a7.js";import"./transButton.b72fffa2.js";import"./ArrowLeftOutlined.d3517891.js";var j=s({name:"ClickOutSide",emits:["mounted","clickOutside"],setup(s,{emit:r}){const o=e(null);return function(s,a,r="click"){if(t)return;const o=e(!1);function c(t){if("touchend"===t.type&&(o.value=!0),"click"===t.type&&n(o))return;const e=s.value;e&&t.target&&!e.contains(t.target)&&a(t)}i({el:document,name:"touchend",listener:c,options:!0}),i({el:document,name:r,listener:c,options:!0})}(o,(()=>{r("clickOutside")})),a((()=>{r("mounted")})),{wrap:o}}});const k={ref:"wrap"};j.render=function(t,e,i,n,s,a){return r(),o("div",k,[c(t.$slots,"default")],512)},d(j);var C=s({components:{ClickOutSide:j,PageWrapper:f},setup(){const t=e("Click");return{innerClick:function(){t.value="Click Inner"},handleClickOutside:function(){t.value="Click Out Side"},text:t}}});const O=m("data-v-7a637453"),b=O(((t,e,i,n,s,a)=>{const c=l("ClickOutSide"),d=l("PageWrapper");return r(),o(d,{title:"点内外部触发事件"},{default:O((()=>[u(c,{onClickOutside:t.handleClickOutside,class:"flex justify-center"},{default:O((()=>[u("div",{onClick:e[1]||(e[1]=(...e)=>t.innerClick&&t.innerClick(...e)),class:"demo-box"},p(t.text),1)])),_:1},8,["onClickOutside"])])),_:1})}));C.render=b,C.__scopeId="data-v-7a637453";export default C;
