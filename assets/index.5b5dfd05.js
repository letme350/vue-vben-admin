import{M as e}from"./index.fe777cd7.js";import{_ as t}from"./index.8fbcdc3e.js";import{d as n,r as a,e as o,h as r,o as i,i as s,w as d,j as m,m as l}from"./index.24307e55.js";import"./index.721a3e8f.js";import"./index.431dabb1.js";import"./RightOutlined.b19e71a7.js";import"./EllipsisOutlined.e8a93345.js";import"./types.1fed049d.js";import"./isEqual.b01a20c4.js";import"./toInteger.9a5a9d5a.js";import"./DownOutlined.47b7c2c1.js";/* empty css              */import"./index.1b435b11.js";import"./usePageContext.4b2bc254.js";import"./transButton.4e6639d4.js";import"./ArrowLeftOutlined.e39c5bbd.js";import"./vendor.3b1829c7.js";var p=n({components:{MarkDown:e,PageWrapper:t},setup(){const e=a(null),t=a("\n# title\n\n# content\n");return{value:t,toggleTheme:function(){const t=o(e);if(!t)return;t.getVditor().setTheme("dark")},markDownRef:e,handleChange:function(e){t.value=e}}}});const u=l(" 黑暗主题 ");p.render=function(e,t,n,a,o,l){const p=r("a-button"),c=r("MarkDown"),f=r("PageWrapper");return i(),s(f,{title:"MarkDown组件示例"},{default:d((()=>[m(p,{onClick:e.toggleTheme,class:"mb-2",type:"primary"},{default:d((()=>[u])),_:1},8,["onClick"]),m(c,{value:e.value,onChange:e.handleChange,ref:"markDownRef"},null,8,["value","onChange"])])),_:1})};export default p;