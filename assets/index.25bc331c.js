import{d as e,r as a,cp as s,cq as t,h as i,o,i as r,j as n,bs as l,a3 as d,b8 as c,bw as p,m}from"./index.24307e55.js";import{a as u}from"./index.0fd23b0f.js";import{_ as b}from"./index.8fbcdc3e.js";import{F as v,S as j,a as S,b as f,c as x,d as T,e as R,f as X,g as h,h as Y,i as g,E,j as _}from"./index.540b99ab.js";import"./vendor.3b1829c7.js";import"./SearchOutlined.757a7c18.js";import"./CheckOutlined.1ccef882.js";import"./DownOutlined.47b7c2c1.js";import"./index.721a3e8f.js";import"./index.431dabb1.js";import"./RightOutlined.b19e71a7.js";import"./EllipsisOutlined.e8a93345.js";import"./types.1fed049d.js";import"./isEqual.b01a20c4.js";import"./toInteger.9a5a9d5a.js";/* empty css              */import"./index.1b435b11.js";import"./usePageContext.4b2bc254.js";import"./transButton.4e6639d4.js";import"./ArrowLeftOutlined.e39c5bbd.js";import"./domUtils.96c05842.js";import"./_stringToArray.d9435ec6.js";const w=["Fade","Scale","SlideY","ScrollY","SlideYReverse","ScrollYReverse","SlideX","ScrollX","SlideXReverse","ScrollXReverse","ScaleRotate","ExpandX","Expand"].map((e=>({label:e,value:e,key:e})));var y=e({components:{Select:u,PageWrapper:b,FadeTransition:v,ScaleTransition:j,SlideYTransition:S,ScrollYTransition:f,SlideYReverseTransition:x,ScrollYReverseTransition:T,SlideXTransition:R,ScrollXTransition:X,SlideXReverseTransition:h,ScrollXReverseTransition:Y,ScaleRotateTransition:g,ExpandXTransition:E,ExpandTransition:_},setup(){const e=a("Fade"),s=a(!0);return{options:w,value:e,start:function(){s.value=!1,setTimeout((()=>{s.value=!0}),300)},show:s}}});const O=p("data-v-51fb1392");s("data-v-51fb1392");const k={class:"flex"},C=m(" start "),F={class:"box"};t();const P=O(((e,a,s,t,p,m)=>{const u=i("Select"),b=i("a-button"),v=i("PageWrapper");return o(),r(v,{title:"动画组件示例"},{default:O((()=>[n("div",k,[n(u,{options:e.options,value:e.value,"onUpdate:value":a[1]||(a[1]=a=>e.value=a),placeholder:"选择动画",style:{width:"150px"}},null,8,["options","value"]),n(b,{type:"primary",class:"ml-4",onClick:e.start},{default:O((()=>[C])),_:1},8,["onClick"])]),(o(),r(l(`${e.value}Transition`),null,{default:O((()=>[d(n("div",F,null,512),[[c,e.show]])])),_:1}))])),_:1})}));y.render=P,y.__scopeId="data-v-51fb1392";export default y;