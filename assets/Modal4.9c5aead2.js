import{_ as e,a as i}from"./index.594319ed.js";import{_ as t}from"./index.b092357d.js";import{d as o,r as s,h as r,o as d,i as n,w as m,j as p,a7 as a}from"./index.726a1292.js";import{u as l}from"./useForm.ac48f24c.js";import"./useTimeout.621e6290.js";import"./useWindowSizeFn.7fb21022.js";import"./index.56a51e6f.js";import"./index.f4bd2380.js";import"./domUtils.88771570.js";import"./_stringToArray.d899db8d.js";import"./RightOutlined.97d13c0b.js";/* empty css              */import"./useScrollTo.367edc72.js";import"./animation.7e1378fc.js";import"./FullscreenOutlined.0d377604.js";import"./isEqual.aa473c94.js";import"./index.c87fd8d1.js";import"./index.2ebd2525.js";import"./responsiveObserve.c545f1cc.js";import"./vendor.3b1829c7.js";import"./findIndex.6b15e138.js";import"./get.47cb6864.js";import"./_baseProperty.74f89655.js";import"./toInteger.410aca8d.js";import"./index.64f011cb.js";import"./index.6d83b64c.js";import"./SearchOutlined.47e6a5d6.js";import"./EyeOutlined.c0aabb58.js";import"./index.d1ee17e2.js";import"./CheckOutlined.004492c1.js";import"./DownOutlined.f011354d.js";import"./index.95f3772a.js";import"./index.57c2cc27.js";import"./UpOutlined.f9435ac9.js";import"./index.571c6d75.js";import"./RedoOutlined.31b7b26c.js";import"./index.fc8abf96.js";import"./EllipsisOutlined.f451d7d8.js";import"./types.96074ade.js";import"./Tree.23ca4528.js";import"./util.fcd2ca24.js";import"./uuid.9631d95f.js";import"./index.bdd4f54c.js";import"./DeleteOutlined.f78597ae.js";import"./index.e9b59711.js";import"./index.d77fefba.js";import"./index.40081bc3.js";import"./index.0c4a85ff.js";import"./LeftOutlined.49f96845.js";import"./download.d746980c.js";const c=[{field:"field1",component:"Input",label:"字段1",colProps:{span:12},defaultValue:"111"},{field:"field2",component:"Input",label:"字段2",colProps:{span:12}}];var j=o({components:{BasicModal:e,BasicForm:t},setup(){const e=s({}),[t,{}]=l({labelWidth:120,schemas:c,showActionButtonGroup:!1,actionColOptions:{span:24}}),[o]=i((i=>{e.value={field2:i.data,field1:i.info}}));return{register:o,schemas:c,registerForm:t,model:e}}});j.render=function(e,i,t,o,s,l){const c=r("BasicForm"),j=r("BasicModal");return d(),n(j,a(e.$attrs,{onRegister:e.register,title:"Modal Title"}),{default:m((()=>[p(c,{onRegister:e.registerForm,model:e.model},null,8,["onRegister","model"])])),_:1},16,["onRegister"])};export default j;
