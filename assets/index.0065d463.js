import{b_ as e,r as t,cE as i,e as n,d as s,a0 as a,o as r,i as o,b0 as c,bX as d,h as l,j as u,l as p,bw as f}from"./index.13aefb6f.js";import{_ as m}from"./index.28ae351f.js";import"./vendor.3b1829c7.js";import"./index.d1f698f3.js";import"./index.f32a4577.js";import"./RightOutlined.6352f3be.js";import"./EllipsisOutlined.9a8cdd6b.js";import"./types.b30def48.js";import"./isEqual.10a7398e.js";import"./toInteger.03d4fa11.js";import"./DownOutlined.fce9d8c3.js";/* empty css              */import"./index.f3e0521d.js";import"./usePageContext.fb1fd52f.js";import"./transButton.02b1ac87.js";import"./ArrowLeftOutlined.745a5650.js";var j=s({name:"ClickOutSide",emits:["mounted","clickOutside"],setup(s,{emit:r}){const o=t(null);return function(s,a,r="click"){if(e)return;const o=t(!1);function c(e){if("touchend"===e.type&&(o.value=!0),"click"===e.type&&n(o))return;const t=s.value;t&&e.target&&!t.contains(e.target)&&a(e)}i({el:document,name:"touchend",listener:c,options:!0}),i({el:document,name:r,listener:c,options:!0})}(o,(()=>{r("clickOutside")})),a((()=>{r("mounted")})),{wrap:o}}});const k={ref:"wrap"};j.render=function(e,t,i,n,s,a){return r(),o("div",k,[c(e.$slots,"default")],512)},d(j);var C=s({components:{ClickOutSide:j,PageWrapper:m},setup(){const e=t("Click");return{innerClick:function(){e.value="Click Inner"},handleClickOutside:function(){e.value="Click Out Side"},text:e}}});const O=f("data-v-7a637453"),b=O(((e,t,i,n,s,a)=>{const c=l("ClickOutSide"),d=l("PageWrapper");return r(),o(d,{title:"点内外部触发事件"},{default:O((()=>[u(c,{onClickOutside:e.handleClickOutside,class:"flex justify-center"},{default:O((()=>[u("div",{onClick:t[1]||(t[1]=(...t)=>e.innerClick&&e.innerClick(...t)),class:"demo-box"},p(e.text),1)])),_:1},8,["onClickOutside"])])),_:1})}));C.render=b,C.__scopeId="data-v-7a637453";export default C;