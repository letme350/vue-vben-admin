import{d as e,cf as a,r as t,a0 as n,K as s,x as r,e as i,h as o,o as l,i as d,j as m,bw as p}from"./index.726a1292.js";import{g as c}from"./domUtils.88771570.js";import{u as f}from"./useWindowSizeFn.7fb21022.js";import"./vendor.3b1829c7.js";import"./_stringToArray.d899db8d.js";var u=e({name:"IFrame",components:{Spin:a},props:{frameSrc:{type:String,default:""}},setup(){const e=t(!1),a=t(50),o=t(window.innerHeight),l=t(null);function d(){const e=i(l);if(!e)return;let{top:t}=c(e);t+=20,a.value=t,o.value=window.innerHeight-t;const n=document.documentElement.clientHeight-t;e.style.height=`${n}px`}function m(){e.value=!1,d()}return f(d,150,{immediate:!0}),n((()=>{e.value=!0,r((()=>{const e=i(l);e&&(e.attachEvent?e.attachEvent("onload",(()=>{m()})):e.onload=()=>{m()})}))})),{getWrapStyle:s((()=>({height:`${i(o)}px`}))),loading:e,frameRef:l}}});const g=p("data-v-e11edb42"),v=g(((e,a,t,n,s,r)=>{const i=o("Spin");return l(),d("div",{class:"iframe-page",style:e.getWrapStyle},[m(i,{spinning:e.loading,size:"large",style:e.getWrapStyle},{default:g((()=>[m("iframe",{src:e.frameSrc,class:"iframe-page__main",ref:"frameRef"},null,8,["src"])])),_:1},8,["spinning","style"])],4)}));u.render=v,u.__scopeId="data-v-e11edb42";export default u;
