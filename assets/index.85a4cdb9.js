import{M as e}from"./index.30b4a461.js";import{_ as t}from"./index.4b3faacc.js";import{d as n,r as a,e as o,h as r,o as i,i as s,w as d,j as m,m as l}from"./index.726a1292.js";import"./index.41b8ad5e.js";import"./index.fc8abf96.js";import"./RightOutlined.97d13c0b.js";import"./EllipsisOutlined.f451d7d8.js";import"./types.96074ade.js";import"./isEqual.aa473c94.js";import"./toInteger.410aca8d.js";import"./DownOutlined.f011354d.js";/* empty css              */import"./index.151c2907.js";import"./usePageContext.212455a7.js";import"./transButton.b72fffa2.js";import"./ArrowLeftOutlined.d3517891.js";import"./vendor.3b1829c7.js";var p=n({components:{MarkDown:e,PageWrapper:t},setup(){const e=a(null),t=a("\n# title\n\n# content\n");return{value:t,toggleTheme:function(){const t=o(e);if(!t)return;t.getVditor().setTheme("dark")},markDownRef:e,handleChange:function(e){t.value=e}}}});const u=l(" 黑暗主题 ");p.render=function(e,t,n,a,o,l){const p=r("a-button"),f=r("MarkDown"),c=r("PageWrapper");return i(),s(c,{title:"MarkDown组件示例"},{default:d((()=>[m(p,{onClick:e.toggleTheme,class:"mb-2",type:"primary"},{default:d((()=>[u])),_:1},8,["onClick"]),m(f,{value:e.value,onChange:e.handleChange,ref:"markDownRef"},null,8,["value","onChange"])])),_:1})};export default p;
