import{_ as e}from"./index.6783de98.js";import{E as i}from"./index.7ccf4802.js";import{c as t,d as o,j as s}from"./data.768785a5.js";import{b as r}from"./index.594319ed.js";import{_ as d}from"./index.4b3faacc.js";import{d as a,h as n,o as p,i as m,w as j,j as c,m as l}from"./index.726a1292.js";import"./index.d1ee17e2.js";import"./SearchOutlined.47e6a5d6.js";import"./CheckOutlined.004492c1.js";import"./DownOutlined.f011354d.js";import"./index.b092357d.js";import"./index.c87fd8d1.js";import"./index.2ebd2525.js";import"./responsiveObserve.c545f1cc.js";import"./vendor.3b1829c7.js";import"./findIndex.6b15e138.js";import"./isEqual.aa473c94.js";import"./get.47cb6864.js";import"./_baseProperty.74f89655.js";import"./toInteger.410aca8d.js";import"./index.64f011cb.js";import"./index.6d83b64c.js";import"./EyeOutlined.c0aabb58.js";import"./index.95f3772a.js";import"./index.57c2cc27.js";import"./UpOutlined.f9435ac9.js";import"./index.571c6d75.js";import"./RightOutlined.97d13c0b.js";import"./RedoOutlined.31b7b26c.js";import"./index.fc8abf96.js";import"./EllipsisOutlined.f451d7d8.js";import"./types.96074ade.js";import"./Tree.23ca4528.js";import"./util.fcd2ca24.js";/* empty css              */import"./uuid.9631d95f.js";import"./index.bdd4f54c.js";import"./DeleteOutlined.f78597ae.js";import"./index.e9b59711.js";import"./index.d77fefba.js";import"./index.40081bc3.js";import"./index.56a51e6f.js";import"./index.f4bd2380.js";import"./domUtils.88771570.js";import"./_stringToArray.d899db8d.js";import"./useTimeout.621e6290.js";import"./useScrollTo.367edc72.js";import"./animation.7e1378fc.js";import"./index.0c4a85ff.js";import"./LeftOutlined.49f96845.js";import"./download.d746980c.js";import"./index.444678b1.js";import"./DoubleLeftOutlined.f70f5aad.js";import"./DoubleRightOutlined.f50077d1.js";import"./zh_CN.8094f4d6.js";import"./scrollTo.c1e0f75f.js";import"./transButton.b72fffa2.js";import"./CaretDownFilled.e4fcaf1e.js";import"./clickOutside.3a5750b9.js";import"./useSortable.285d8e50.js";import"./useWindowSizeFn.7fb21022.js";import"./SettingOutlined.1a5751e2.js";import"./useExpose.49d6193b.js";import"./useForm.ac48f24c.js";import"./FullscreenOutlined.0d377604.js";import"./index.41b8ad5e.js";import"./index.151c2907.js";import"./usePageContext.212455a7.js";import"./ArrowLeftOutlined.d3517891.js";var f=a({components:{BasicTable:e,ExpExcelModel:i,PageWrapper:d},setup(){const[e,{openModal:i}]=r();return{defaultHeader:function({filename:e,bookType:i}){s({data:o,filename:e,write2excelOpts:{bookType:i}})},columns:t,data:o,register:e,openModal:i}}});const u=l(" 导出 ");f.render=function(e,i,t,o,s,r){const d=n("a-button"),a=n("BasicTable"),l=n("ExpExcelModel"),f=n("PageWrapper");return p(),m(f,{title:"导出示例",content:"可以选择导出格式"},{default:j((()=>[c(a,{title:"基础表格",columns:e.columns,dataSource:e.data},{toolbar:j((()=>[c(d,{onClick:e.openModal},{default:j((()=>[u])),_:1},8,["onClick"])])),_:1},8,["columns","dataSource"]),c(l,{onRegister:e.register,onSuccess:e.defaultHeader},null,8,["onRegister","onSuccess"])])),_:1})};export default f;
