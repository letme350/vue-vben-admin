import{d as e,aK as t,h as i,o as s,i as r,aL as o,aM as n,j as a}from"./index.ca0293b2.js";import{b as d}from"./index.79075586.js";import{C as p}from"./CheckOutlined.a0c62bc8.js";import"./vendor.3b1829c7.js";import"./index.2a3d155c.js";import"./index.18e98de8.js";import"./index.b5960532.js";import"./index.db20b6ca.js";import"./index.1cb29158.js";import"./domUtils.3f0b517b.js";import"./_stringToArray.2e032d51.js";import"./RightOutlined.1201c967.js";import"./index.95c10fda.js";import"./useTimeout.429405d0.js";import"./useScrollTo.44e3ca92.js";import"./animation.6cb888e9.js";import"./ArrowLeftOutlined.8dd51bf7.js";import"./useAttrs.93b544a4.js";import"./isEqual.6bad97d6.js";import"./useHeaderSetting.c0748418.js";import"./SettingOutlined.e10f612a.js";var m=e({name:"ThemePicker",components:{CheckOutlined:p},props:{colorList:{type:Array,defualt:[]},event:{type:Number,default:()=>{}},def:{type:String}},setup(e){const{prefixCls:i}=t("setting-theme-picker");return{prefixCls:i,handleClick:function(t){e.event&&d(e.event,t)}}}});m.render=function(e,t,d,p,m,c){const l=i("CheckOutlined");return s(),r("div",{class:e.prefixCls},[(s(!0),r(o,null,n(e.colorList||[],(t=>(s(),r("span",{key:t,onClick:i=>e.handleClick(t),class:[`${e.prefixCls}__item`,{[`${e.prefixCls}__item--active`]:e.def===t}],style:{background:t}},[a(l)],14,["onClick"])))),128))],2)};export default m;
