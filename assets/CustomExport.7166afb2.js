import{_ as e}from"./index.456a3dd4.js";import{E as t}from"./index.3dac9856.js";import{c as i,d as o,j as s}from"./data.89b0c28d.js";import{b as r}from"./index.0ff48f30.js";import{_ as d}from"./index.28ae351f.js";import{d as a,h as p,o as n,i as m,w as c,j,m as f}from"./index.13aefb6f.js";import"./index.8bcb6041.js";import"./SearchOutlined.e439a87c.js";import"./CheckOutlined.ee7dbd66.js";import"./DownOutlined.fce9d8c3.js";import"./index.49e351fd.js";import"./index.b8869e26.js";import"./index.283c70c2.js";import"./responsiveObserve.c545f1cc.js";import"./vendor.3b1829c7.js";import"./findIndex.b157ece4.js";import"./isEqual.10a7398e.js";import"./_baseProperty.74f89655.js";import"./toInteger.03d4fa11.js";import"./index.67caae9f.js";import"./index.c4a5d02a.js";import"./EyeOutlined.5c1c4d2a.js";import"./index.d9581c88.js";import"./colors.d2161316.js";import"./index.8ea7d227.js";import"./UpOutlined.8a010a74.js";import"./index.4492f9ad.js";import"./RightOutlined.6352f3be.js";import"./RedoOutlined.7cc244ed.js";import"./index.f32a4577.js";import"./EllipsisOutlined.9a8cdd6b.js";import"./types.b30def48.js";import"./Tree.3116bedb.js";import"./util.3aff73a5.js";import"./useAttrs.95d4f09d.js";/* empty css              */import"./uuid.cf3286f7.js";import"./index.27e8a081.js";import"./DeleteOutlined.a704a3ca.js";import"./index.d57d5cc5.js";import"./index.84b4f59b.js";import"./index.67d4aa0f.js";import"./index.527ce582.js";import"./index.7726fdfd.js";import"./domUtils.9ad9e2d5.js";import"./_stringToArray.7cbaaf1a.js";import"./useTimeout.e3e2a7dc.js";import"./useScrollTo.6e2b4a93.js";import"./animation.3a6b162f.js";import"./index.cd79f189.js";import"./LeftOutlined.547a5ef5.js";import"./download.72bbbc17.js";import"./index.cc60a3a6.js";import"./DoubleLeftOutlined.e7cdc27f.js";import"./DoubleRightOutlined.ed42d62a.js";import"./zh_CN.8094f4d6.js";import"./scrollTo.c1e0f75f.js";import"./transButton.02b1ac87.js";import"./CaretDownFilled.a4d697f1.js";import"./clickOutside.3127988f.js";import"./useSortable.a0307153.js";import"./useWindowSizeFn.00dd0980.js";import"./SettingOutlined.ac368ccb.js";import"./useExpose.f80b9bbf.js";import"./useForm.fee172c9.js";import"./FullscreenOutlined.d0e0a14c.js";import"./index.d1f698f3.js";import"./index.f3e0521d.js";import"./usePageContext.fb1fd52f.js";import"./ArrowLeftOutlined.745a5650.js";var l=a({components:{BasicTable:e,ExpExcelModel:t,PageWrapper:d},setup(){const[e,{openModal:t}]=r();return{defaultHeader:function({filename:e,bookType:t}){s({data:o,filename:e,write2excelOpts:{bookType:t}})},columns:i,data:o,register:e,openModal:t}}});const u=f(" 导出 ");l.render=function(e,t,i,o,s,r){const d=p("a-button"),a=p("BasicTable"),f=p("ExpExcelModel"),l=p("PageWrapper");return n(),m(l,{title:"导出示例",content:"可以选择导出格式"},{default:c((()=>[j(a,{title:"基础表格",columns:e.columns,dataSource:e.data},{toolbar:c((()=>[j(d,{onClick:e.openModal},{default:c((()=>[u])),_:1},8,["onClick"])])),_:1},8,["columns","dataSource"]),j(f,{onRegister:e.register,onSuccess:e.defaultHeader},null,8,["onRegister","onSuccess"])])),_:1})};export default l;