import{_ as e}from"./index.6783de98.js";import{getBasicColumns as i,getBasicData as t}from"./tableData.252346e9.js";import{d as o,r,h as s,o as d,i as a,j as n,w as p,m as l,l as m}from"./index.726a1292.js";import"./index.d1ee17e2.js";import"./SearchOutlined.47e6a5d6.js";import"./CheckOutlined.004492c1.js";import"./DownOutlined.f011354d.js";import"./index.b092357d.js";import"./index.c87fd8d1.js";import"./index.2ebd2525.js";import"./responsiveObserve.c545f1cc.js";import"./vendor.3b1829c7.js";import"./findIndex.6b15e138.js";import"./isEqual.aa473c94.js";import"./get.47cb6864.js";import"./_baseProperty.74f89655.js";import"./toInteger.410aca8d.js";import"./index.64f011cb.js";import"./index.6d83b64c.js";import"./EyeOutlined.c0aabb58.js";import"./index.95f3772a.js";import"./index.57c2cc27.js";import"./UpOutlined.f9435ac9.js";import"./index.571c6d75.js";import"./RightOutlined.97d13c0b.js";import"./RedoOutlined.31b7b26c.js";import"./index.fc8abf96.js";import"./EllipsisOutlined.f451d7d8.js";import"./types.96074ade.js";import"./Tree.23ca4528.js";import"./util.fcd2ca24.js";/* empty css              */import"./uuid.9631d95f.js";import"./index.bdd4f54c.js";import"./DeleteOutlined.f78597ae.js";import"./index.e9b59711.js";import"./index.594319ed.js";import"./useTimeout.621e6290.js";import"./useWindowSizeFn.7fb21022.js";import"./index.56a51e6f.js";import"./index.f4bd2380.js";import"./domUtils.88771570.js";import"./_stringToArray.d899db8d.js";import"./useScrollTo.367edc72.js";import"./animation.7e1378fc.js";import"./FullscreenOutlined.0d377604.js";import"./index.d77fefba.js";import"./index.40081bc3.js";import"./index.0c4a85ff.js";import"./LeftOutlined.49f96845.js";import"./download.d746980c.js";import"./index.444678b1.js";import"./DoubleLeftOutlined.f70f5aad.js";import"./DoubleRightOutlined.f50077d1.js";import"./zh_CN.8094f4d6.js";import"./scrollTo.c1e0f75f.js";import"./transButton.b72fffa2.js";import"./CaretDownFilled.e4fcaf1e.js";import"./clickOutside.3a5750b9.js";import"./useSortable.285d8e50.js";import"./SettingOutlined.1a5751e2.js";import"./useExpose.49d6193b.js";import"./useForm.ac48f24c.js";var c=o({components:{BasicTable:e},setup(){const e=r(!1),o=r(!1),s=r(!0),d=r(!0),a=r(!1);return{columns:i(),data:t(),canResize:e,loading:o,striped:s,border:d,toggleStriped:function(){s.value=!s.value},toggleCanResize:function(){e.value=!e.value},toggleLoading:function(){o.value=!0,setTimeout((()=>{o.value=!1,a.value={pageSize:20}}),3e3)},toggleBorder:function(){d.value=!d.value},pagination:a}}});const j={class:"p-4"},u=l(" 开启loading ");c.render=function(e,i,t,o,r,c){const f=s("a-button"),b=s("BasicTable");return d(),a("div",j,[n(b,{title:"基础示例",titleHelpMessage:"温馨提醒",columns:e.columns,dataSource:e.data,canResize:e.canResize,loading:e.loading,striped:e.striped,bordered:e.border,showTableSetting:"",pagination:e.pagination},{toolbar:p((()=>[n(f,{type:"primary",onClick:e.toggleCanResize},{default:p((()=>[l(m(e.canResize?"取消自适应":"自适应高度"),1)])),_:1},8,["onClick"]),n(f,{type:"primary",onClick:e.toggleBorder},{default:p((()=>[l(m(e.border?"隐藏边框":"显示边框"),1)])),_:1},8,["onClick"]),n(f,{type:"primary",onClick:e.toggleLoading},{default:p((()=>[u])),_:1},8,["onClick"]),n(f,{type:"primary",onClick:e.toggleStriped},{default:p((()=>[l(m(e.striped?"隐藏斑马纹":"显示斑马纹"),1)])),_:1},8,["onClick"])])),_:1},8,["columns","dataSource","canResize","loading","striped","bordered","pagination"])])};export default c;
