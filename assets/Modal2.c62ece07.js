import{_ as s,a as e}from"./index.594319ed.js";import{d as o,h as t,o as i,i as r,w as a,j as l,a7 as d,m as n}from"./index.726a1292.js";import"./useTimeout.621e6290.js";import"./useWindowSizeFn.7fb21022.js";import"./index.56a51e6f.js";import"./index.f4bd2380.js";import"./domUtils.88771570.js";import"./_stringToArray.d899db8d.js";import"./RightOutlined.97d13c0b.js";/* empty css              */import"./useScrollTo.367edc72.js";import"./animation.7e1378fc.js";import"./FullscreenOutlined.0d377604.js";import"./isEqual.aa473c94.js";import"./vendor.3b1829c7.js";var p=o({components:{BasicModal:s},setup(){const[s,{closeModal:o,setModalProps:t}]=e();return{register:s,closeModal:o,setModalProps:()=>{t({title:"Modal New Title"})}}}});const m=n(" 从内部关闭弹窗 "),c=n(" 从内部修改title ");p.render=function(s,e,o,n,p,u){const j=t("a-button"),f=t("BasicModal");return i(),r(f,d(s.$attrs,{onRegister:s.register,title:"Modal Title",helpMessage:["提示1","提示2"]}),{default:a((()=>[l(j,{type:"primary",onClick:s.closeModal,class:"mr-2"},{default:a((()=>[m])),_:1},8,["onClick"]),l(j,{type:"primary",onClick:s.setModalProps},{default:a((()=>[c])),_:1},8,["onClick"])])),_:1},16,["onRegister"])};export default p;
