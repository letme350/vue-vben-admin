import{j as e,a7 as t,a8 as i,d as n,b1 as o,u as s,r,bQ as a,h as d,o as l,i as c,w as p,l as m}from"./index.13aefb6f.js";/* empty css              */import{D as u,M as f}from"./index.f32a4577.js";import{u as j}from"./index.49e351fd.js";import"./index.67d4aa0f.js";import"./vendor.3b1829c7.js";import"./RightOutlined.6352f3be.js";import"./EllipsisOutlined.9a8cdd6b.js";import"./types.b30def48.js";import"./isEqual.10a7398e.js";import"./toInteger.03d4fa11.js";import"./index.b8869e26.js";import"./index.283c70c2.js";import"./responsiveObserve.c545f1cc.js";import"./findIndex.b157ece4.js";import"./_baseProperty.74f89655.js";import"./index.67caae9f.js";import"./index.c4a5d02a.js";import"./SearchOutlined.e439a87c.js";import"./EyeOutlined.5c1c4d2a.js";import"./index.8bcb6041.js";import"./CheckOutlined.ee7dbd66.js";import"./DownOutlined.fce9d8c3.js";import"./index.d9581c88.js";import"./colors.d2161316.js";import"./index.8ea7d227.js";import"./UpOutlined.8a010a74.js";import"./index.4492f9ad.js";import"./RedoOutlined.7cc244ed.js";import"./Tree.3116bedb.js";import"./util.3aff73a5.js";import"./useAttrs.95d4f09d.js";import"./uuid.cf3286f7.js";import"./index.27e8a081.js";import"./DeleteOutlined.a704a3ca.js";import"./index.d57d5cc5.js";import"./index.0ff48f30.js";import"./useTimeout.e3e2a7dc.js";import"./useWindowSizeFn.00dd0980.js";import"./index.527ce582.js";import"./index.7726fdfd.js";import"./domUtils.9ad9e2d5.js";import"./_stringToArray.7cbaaf1a.js";import"./useScrollTo.6e2b4a93.js";import"./animation.3a6b162f.js";import"./FullscreenOutlined.d0e0a14c.js";import"./index.84b4f59b.js";import"./index.cd79f189.js";import"./LeftOutlined.547a5ef5.js";import"./download.72bbbc17.js";var b={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M840 836H184c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h656c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8zm0-724H184c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h656c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8zM610.8 378c6 0 9.4-7 5.7-11.7L515.7 238.7a7.14 7.14 0 00-11.3 0L403.6 366.3a7.23 7.23 0 005.7 11.7H476v268h-62.8c-6 0-9.4 7-5.7 11.7l100.8 127.5c2.9 3.7 8.5 3.7 11.3 0l100.8-127.5c3.7-4.7.4-11.7-5.7-11.7H548V378h62.8z"}}]},name:"column-height",theme:"outlined"};function g(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var y=function(n,o){var s=function(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?Object(arguments[t]):{},n=Object.keys(i);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(i).filter((function(e){return Object.getOwnPropertyDescriptor(i,e).enumerable})))),n.forEach((function(t){g(e,t,i[t])}))}return e}({},n,o.attrs);return e(i,t(s,{icon:b}),null)};y.displayName="ColumnHeightOutlined",y.inheritAttrs=!1;var O=n({name:"SizeSetting",components:{ColumnHeightOutlined:y,Tooltip:o,Dropdown:u,Menu:f,MenuItem:f.Item},setup(){const e=j(),{t:t}=s(),i=r([e.getSize()]);return{handleTitleClick:function({key:t}){i.value=[t],e.setProps({size:t})},selectedKeysRef:i,getPopupContainer:a,t:t}}});O.render=function(t,i,n,o,s,r){const a=d("ColumnHeightOutlined"),u=d("MenuItem"),f=d("Menu"),j=d("Dropdown"),b=d("Tooltip");return l(),c(b,{placement:"top"},{title:p((()=>[e("span",null,m(t.t("component.table.settingDens")),1)])),default:p((()=>[e(j,{placement:"bottomCenter",trigger:["click"],getPopupContainer:t.getPopupContainer},{overlay:p((()=>[e(f,{onClick:t.handleTitleClick,selectable:"",selectedKeys:t.selectedKeysRef,"onUpdate:selectedKeys":i[1]||(i[1]=e=>t.selectedKeysRef=e)},{default:p((()=>[e(u,{key:"default"},{default:p((()=>[e("span",null,m(t.t("component.table.settingDensDefault")),1)])),_:1}),e(u,{key:"middle"},{default:p((()=>[e("span",null,m(t.t("component.table.settingDensMiddle")),1)])),_:1}),e(u,{key:"small"},{default:p((()=>[e("span",null,m(t.t("component.table.settingDensSmall")),1)])),_:1})])),_:1},8,["onClick","selectedKeys"])])),default:p((()=>[e(a)])),_:1},8,["getPopupContainer"])])),_:1})};export default O;