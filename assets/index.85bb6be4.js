import{d as e,aF as s,aK as t,$ as i,bR as r,h as a,o,i as p,j as n,w as m,b0 as d,aL as l,aM as c,T as u,bx as f}from"./index.ca0293b2.js";import{I as g}from"./index.5231c462.js";import{_ as j}from"./index.57f729b0.js";import"./vendor.3b1829c7.js";import"./LeftOutlined.d1c037c6.js";import"./RightOutlined.1201c967.js";import"./index.20bde6cf.js";import"./index.b48f5073.js";import"./EllipsisOutlined.70395492.js";import"./types.efa91daf.js";import"./isEqual.6bad97d6.js";import"./toInteger.34722792.js";import"./DownOutlined.6480d9be.js";import"./index.95c10fda.js";import"./index.9ccf032c.js";import"./usePageContext.6304a3c5.js";import"./transButton.bf1a4a67.js";import"./ArrowLeftOutlined.8dd51bf7.js";var b=e({name:"ImagePreview",components:{Image:g,PreviewGroup:g.PreviewGroup},props:{functional:s.bool,imageList:{type:Array}},setup(e){const{prefixCls:s}=t("image-preview");return{prefixCls:s,getImageList:i((()=>{const{imageList:s}=e;return s?s.map((e=>r(e)?{src:e,placeholder:!1}:e)):[]}))}}});b.render=function(e,s,t,i,r,g){const j=a("Image"),b=a("PreviewGroup");return o(),p("div",{class:e.prefixCls},[n(b,null,{default:m((()=>[!e.imageList||e.$slots.default?d(e.$slots,"default",{key:0}):(o(!0),p(l,{key:1},c(e.getImageList,(e=>(o(),p(j,u({key:e.src},e),f({_:2},[e.placeholder?{name:"placeholder",fn:m((()=>[n(j,u(e,{src:e.placeholder,preview:!1}),null,16,["src"])]))}:void 0]),1040)))),128))])),_:1})],2)};const v=["https://picsum.photos/id/66/346/216","https://picsum.photos/id/67/346/216","https://picsum.photos/id/68/346/216"];var x=e({components:{PageWrapper:j,ImagePreview:b},setup:()=>({imgList:v})});x.render=function(e,s,t,i,r,d){const l=a("ImagePreview"),c=a("PageWrapper");return o(),p(c,{title:"图片预览示例"},{default:m((()=>[n(l,{imageList:e.imgList},null,8,["imageList"])])),_:1})};export default x;
