import{_ as e,a as i}from"./index.0ff48f30.js";import{_ as o}from"./index.49e351fd.js";import{d as t,r as s,h as r,o as d,i as a,w as n,j as m,a7 as p}from"./index.13aefb6f.js";import{u as l}from"./useForm.fee172c9.js";import"./useTimeout.e3e2a7dc.js";import"./useAttrs.95d4f09d.js";import"./useWindowSizeFn.00dd0980.js";import"./index.527ce582.js";import"./index.7726fdfd.js";import"./domUtils.9ad9e2d5.js";import"./_stringToArray.7cbaaf1a.js";import"./RightOutlined.6352f3be.js";/* empty css              */import"./useScrollTo.6e2b4a93.js";import"./animation.3a6b162f.js";import"./FullscreenOutlined.d0e0a14c.js";import"./isEqual.10a7398e.js";import"./index.b8869e26.js";import"./index.283c70c2.js";import"./responsiveObserve.c545f1cc.js";import"./vendor.3b1829c7.js";import"./findIndex.b157ece4.js";import"./_baseProperty.74f89655.js";import"./toInteger.03d4fa11.js";import"./index.67caae9f.js";import"./index.c4a5d02a.js";import"./SearchOutlined.e439a87c.js";import"./EyeOutlined.5c1c4d2a.js";import"./index.8bcb6041.js";import"./CheckOutlined.ee7dbd66.js";import"./DownOutlined.fce9d8c3.js";import"./index.d9581c88.js";import"./colors.d2161316.js";import"./index.8ea7d227.js";import"./UpOutlined.8a010a74.js";import"./index.4492f9ad.js";import"./RedoOutlined.7cc244ed.js";import"./index.f32a4577.js";import"./EllipsisOutlined.9a8cdd6b.js";import"./types.b30def48.js";import"./Tree.3116bedb.js";import"./util.3aff73a5.js";import"./uuid.cf3286f7.js";import"./index.27e8a081.js";import"./DeleteOutlined.a704a3ca.js";import"./index.d57d5cc5.js";import"./index.84b4f59b.js";import"./index.67d4aa0f.js";import"./index.cd79f189.js";import"./LeftOutlined.547a5ef5.js";import"./download.72bbbc17.js";const c=[{field:"field1",component:"Input",label:"字段1",colProps:{span:12},defaultValue:"111"},{field:"field2",component:"Input",label:"字段2",colProps:{span:12}}];var j=t({components:{BasicModal:e,BasicForm:o},setup(){const e=s({}),[o,{}]=l({labelWidth:120,schemas:c,showActionButtonGroup:!1,actionColOptions:{span:24}}),[t]=i((i=>{e.value={field2:i.data,field1:i.info}}));return{register:t,schemas:c,registerForm:o,model:e}}});j.render=function(e,i,o,t,s,l){const c=r("BasicForm"),j=r("BasicModal");return d(),a(j,p(e.$attrs,{onRegister:e.register,title:"Modal Title"}),{default:n((()=>[m(c,{onRegister:e.registerForm,model:e.model},null,8,["onRegister","model"])])),_:1},16,["onRegister"])};export default j;