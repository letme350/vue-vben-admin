import{d as e,h as s,o as i,i as t,j as o,w as r,l as a}from"./index.c9b191ae.js";import"./index.62221c24.js";import"./_stringToArray.f9d23805.js";import"./domUtils.43bacb00.js";import"./index.e9cfd29c.js";import"./index.b4918bad.js";import"./index.34b4eaee.js";import"./CheckOutlined.6db140fd.js";import"./index.27cba524.js";import{_ as d}from"./index.b9d582f5.js";import"./FullscreenOutlined.499766bf.js";import"./RightOutlined.ce1a9cb6.js";import"./SettingOutlined.3ccdf103.js";import"./useTimeout.306ef350.js";import"./index.ad8055f7.js";import"./animation.f174d9e2.js";import"./useScrollTo.ed4075e5.js";import"./useAttrs.dd653939.js";import"./useWindowSizeFn.68f6ef4b.js";import"./index.e80c819c.js";import"./uuid.a6cec785.js";import"./download.e374d1b4.js";import"./useForm.d744eed5.js";import"./clickOutside.5c695aaa.js";import"./useSortable.7fd64a7b.js";import"./useExpose.1aedd396.js";import{u as m}from"./useTable.4f530c5e.js";import{getBasicColumns as n}from"./tableData.7aa0192c.js";import{d as p}from"./table.4954d269.js";var c=e({components:{BasicTable:d},setup(){const[e]=m({title:"可展开表格",api:p,titleHelpMessage:"不能与scroll共用",columns:n(),rowKey:"id",canResize:!1});return{registerTable:e}}});const j={class:"p-4"};c.render=function(e,d,m,n,p,c){const l=s("BasicTable");return i(),t("div",j,[o(l,{onRegister:e.registerTable},{expandedRowRender:r((({record:e})=>[o("span",null,"No: "+a(e.no),1)])),_:1},8,["onRegister"])])};export default c;