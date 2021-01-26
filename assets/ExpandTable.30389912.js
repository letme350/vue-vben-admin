import{_ as e}from"./index.79f246d7.js";import{getBasicColumns as i}from"./tableData.7aa0192c.js";import{d as t}from"./table.8cdb6ed0.js";import{d as s,h as o,o as r,i as d,j as p,w as m,l as n}from"./index.ca0293b2.js";import{u as a}from"./useTable.36e156d8.js";import"./index.23bcb373.js";import"./SearchOutlined.d9cc3823.js";import"./CheckOutlined.a0c62bc8.js";import"./DownOutlined.6480d9be.js";import"./index.747dc0f6.js";import"./index.8aafcec1.js";import"./responsiveObserve.c545f1cc.js";import"./index.8931e3d6.js";import"./vendor.3b1829c7.js";import"./findIndex.a959c21e.js";import"./isEqual.6bad97d6.js";import"./_baseProperty.74f89655.js";import"./toInteger.34722792.js";import"./index.7df2bb45.js";import"./index.a24eb58c.js";import"./index.30ae9ad5.js";import"./UpOutlined.0ef8cad0.js";import"./index.f630c8e6.js";import"./EyeOutlined.ba199c78.js";import"./index.4340cfa4.js";import"./colors.d5f042e5.js";import"./RightOutlined.1201c967.js";import"./RedoOutlined.7ed439dc.js";import"./index.b48f5073.js";import"./EllipsisOutlined.70395492.js";import"./types.efa91daf.js";import"./Tree.be2474a1.js";import"./util.9205dd12.js";import"./useAttrs.93b544a4.js";import"./index.95c10fda.js";import"./index.0f0c99ff.js";import"./uuid.e47b941f.js";import"./index.0ab3a9b2.js";import"./DeleteOutlined.ce2f632a.js";import"./index.58d8ddc3.js";import"./useTimeout.429405d0.js";import"./useWindowSizeFn.135e6646.js";import"./index.db20b6ca.js";import"./index.1cb29158.js";import"./domUtils.3f0b517b.js";import"./_stringToArray.2e032d51.js";import"./useScrollTo.44e3ca92.js";import"./animation.6cb888e9.js";import"./FullscreenOutlined.ec7aae97.js";import"./index.2a3d155c.js";import"./index.19813759.js";import"./index.5231c462.js";import"./LeftOutlined.d1c037c6.js";import"./download.a4df27cf.js";import"./index.f1948b4f.js";import"./DoubleLeftOutlined.f7f11796.js";import"./DoubleRightOutlined.b183b394.js";import"./zh_CN.8094f4d6.js";import"./scrollTo.c1e0f75f.js";import"./transButton.bf1a4a67.js";import"./CaretDownFilled.d4286751.js";import"./clickOutside.f1ee885f.js";import"./useSortable.fcbfb6fb.js";import"./SettingOutlined.e10f612a.js";import"./useExpose.8730c60f.js";import"./useForm.65972378.js";var j=s({components:{BasicTable:e},setup(){const[e]=a({title:"可展开表格",api:t,titleHelpMessage:"不能与scroll共用",columns:i(),rowKey:"id",canResize:!1});return{registerTable:e}}});const c={class:"p-4"};j.render=function(e,i,t,s,a,j){const l=o("BasicTable");return r(),d("div",c,[p(l,{onRegister:e.registerTable},{expandedRowRender:m((({record:e})=>[p("span",null,"No: "+n(e.no),1)])),_:1},8,["onRegister"])])};export default j;
