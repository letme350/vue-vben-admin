import{d as e,h as i,o as t,i as r,bw as o,j as s}from"./index.13aefb6f.js";import{D as d}from"./index.84b4f59b.js";import{D as a}from"./index.d891546c.js";import{_ as m}from"./index.456a3dd4.js";import{_ as n}from"./index.28ae351f.js";import{refundSchema as p,refundData as c,personSchema as j,personData as f,refundTableData as l,refundTableSchema as u,refundTimeTableSchema as b,refundTimeTableData as x}from"./data.f958270f.js";import{u as g}from"./useTable.c7976c79.js";import"./vendor.3b1829c7.js";import"./index.b4e2ad8e.js";import"./responsiveObserve.c545f1cc.js";import"./index.527ce582.js";import"./index.7726fdfd.js";import"./domUtils.9ad9e2d5.js";import"./_stringToArray.7cbaaf1a.js";import"./RightOutlined.6352f3be.js";/* empty css              */import"./useTimeout.e3e2a7dc.js";import"./useScrollTo.6e2b4a93.js";import"./animation.3a6b162f.js";import"./index.8bcb6041.js";import"./SearchOutlined.e439a87c.js";import"./CheckOutlined.ee7dbd66.js";import"./DownOutlined.fce9d8c3.js";import"./index.49e351fd.js";import"./index.b8869e26.js";import"./index.283c70c2.js";import"./findIndex.b157ece4.js";import"./isEqual.10a7398e.js";import"./_baseProperty.74f89655.js";import"./toInteger.03d4fa11.js";import"./index.67caae9f.js";import"./index.c4a5d02a.js";import"./EyeOutlined.5c1c4d2a.js";import"./index.d9581c88.js";import"./colors.d2161316.js";import"./index.8ea7d227.js";import"./UpOutlined.8a010a74.js";import"./index.4492f9ad.js";import"./RedoOutlined.7cc244ed.js";import"./index.f32a4577.js";import"./EllipsisOutlined.9a8cdd6b.js";import"./types.b30def48.js";import"./Tree.3116bedb.js";import"./util.3aff73a5.js";import"./useAttrs.95d4f09d.js";import"./uuid.cf3286f7.js";import"./index.27e8a081.js";import"./DeleteOutlined.a704a3ca.js";import"./index.d57d5cc5.js";import"./index.0ff48f30.js";import"./useWindowSizeFn.00dd0980.js";import"./FullscreenOutlined.d0e0a14c.js";import"./index.67d4aa0f.js";import"./index.cd79f189.js";import"./LeftOutlined.547a5ef5.js";import"./download.72bbbc17.js";import"./index.cc60a3a6.js";import"./DoubleLeftOutlined.e7cdc27f.js";import"./DoubleRightOutlined.ed42d62a.js";import"./zh_CN.8094f4d6.js";import"./scrollTo.c1e0f75f.js";import"./transButton.02b1ac87.js";import"./CaretDownFilled.a4d697f1.js";import"./clickOutside.3127988f.js";import"./useSortable.a0307153.js";import"./SettingOutlined.ac368ccb.js";import"./useExpose.f80b9bbf.js";import"./useForm.fee172c9.js";import"./index.d1f698f3.js";import"./index.f3e0521d.js";import"./usePageContext.fb1fd52f.js";import"./ArrowLeftOutlined.745a5650.js";import"./index.bbabefed.js";import"./isNumeric.2bec345d.js";var h=e({components:{Description:a,BasicTable:m,PageWrapper:n,[d.name]:d},setup(){const[e]=g({title:"退货商品",dataSource:l,columns:u,pagination:!1,showIndexColumn:!1,scroll:{y:300},showSummary:!0,summaryFunc:function(e){let i=0,t=0;return e.forEach((e=>{i+=e.t5,t+=e.t6})),[{t1:"总计",t5:i,t6:t}]}}),[i]=g({title:"退货进度",columns:b,pagination:!1,dataSource:x,showIndexColumn:!1,scroll:{y:300}});return{registerRefundTable:e,registerTimeTable:i,refundSchema:p,refundData:c,personSchema:j,personData:f}}});const O=o("data-v-ada482fc"),T=O(((e,o,d,a,m,n)=>{const p=i("Description"),c=i("a-divider"),j=i("BasicTable"),f=i("PageWrapper");return t(),r(f,{title:"基础详情页",contentBackground:""},{default:O((()=>[s(p,{size:"middle",title:"退款申请",bordered:!1,column:3,data:e.refundData,schema:e.refundSchema},null,8,["data","schema"]),s(c),s(p,{size:"middle",title:"用户信息",bordered:!1,column:3,data:e.personData,schema:e.personSchema},null,8,["data","schema"]),s(c),s(j,{onRegister:e.registerRefundTable},null,8,["onRegister"]),s(c),s(j,{onRegister:e.registerTimeTable},null,8,["onRegister"])])),_:1})}));h.render=T,h.__scopeId="data-v-ada482fc";export default h;