import{d as e,aK as t,u as i,K as d,h as s,o as n,i as a,j as o,l as r,a7 as l,bw as p}from"./index.726a1292.js";import{S as m}from"./index.571c6d75.js";import{b as c}from"./index.1b4923f7.js";import"./vendor.3b1829c7.js";import"./index.d77fefba.js";import"./index.b50e15c5.js";import"./index.56ebafcd.js";import"./index.56a51e6f.js";import"./index.f4bd2380.js";import"./domUtils.88771570.js";import"./_stringToArray.d899db8d.js";import"./RightOutlined.97d13c0b.js";/* empty css              */import"./useTimeout.621e6290.js";import"./useScrollTo.367edc72.js";import"./animation.7e1378fc.js";import"./ArrowLeftOutlined.d3517891.js";import"./isEqual.aa473c94.js";import"./useHeaderSetting.2dfd9da9.js";import"./SettingOutlined.1a5751e2.js";var f=e({name:"SwitchItem",components:{Switch:m},props:{event:{type:Number,default:()=>{}},disabled:{type:Boolean},title:{type:String},def:{type:Boolean}},setup(e){const{prefixCls:s}=t("setting-switch-item"),{t:n}=i();return{prefixCls:s,t:n,handleChange:function(t){e.event&&c(e.event,t)},getBindValue:d((()=>e.def?{checked:e.def}:{}))}}});const u=p("data-v-3a858942")(((e,t,i,d,p,m)=>{const c=s("Switch");return n(),a("div",{class:e.prefixCls},[o("span",null,r(e.title),1),o(c,l(e.getBindValue,{onChange:e.handleChange,disabled:e.disabled,checkedChildren:e.t("layout.setting.on"),unCheckedChildren:e.t("layout.setting.off")}),null,16,["onChange","disabled","checkedChildren","unCheckedChildren"])],2)}));f.render=u,f.__scopeId="data-v-3a858942";export default f;
