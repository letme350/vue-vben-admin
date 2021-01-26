import{_ as e}from"./index.79f246d7.js";import{getBasicColumns as t,getBasicShortColumns as i}from"./tableData.7aa0192c.js";import{d as o,g as s,h as n,o as a,i as l,j as c,w as r,m as d}from"./index.ca0293b2.js";import{d as m}from"./table.8cdb6ed0.js";import{u as p}from"./useTable.36e156d8.js";import"./index.23bcb373.js";import"./SearchOutlined.d9cc3823.js";import"./CheckOutlined.a0c62bc8.js";import"./DownOutlined.6480d9be.js";import"./index.747dc0f6.js";import"./index.8aafcec1.js";import"./responsiveObserve.c545f1cc.js";import"./index.8931e3d6.js";import"./vendor.3b1829c7.js";import"./findIndex.a959c21e.js";import"./isEqual.6bad97d6.js";import"./_baseProperty.74f89655.js";import"./toInteger.34722792.js";import"./index.7df2bb45.js";import"./index.a24eb58c.js";import"./index.30ae9ad5.js";import"./UpOutlined.0ef8cad0.js";import"./index.f630c8e6.js";import"./EyeOutlined.ba199c78.js";import"./index.4340cfa4.js";import"./colors.d5f042e5.js";import"./RightOutlined.1201c967.js";import"./RedoOutlined.7ed439dc.js";import"./index.b48f5073.js";import"./EllipsisOutlined.70395492.js";import"./types.efa91daf.js";import"./Tree.be2474a1.js";import"./util.9205dd12.js";import"./useAttrs.93b544a4.js";import"./index.95c10fda.js";import"./index.0f0c99ff.js";import"./uuid.e47b941f.js";import"./index.0ab3a9b2.js";import"./DeleteOutlined.ce2f632a.js";import"./index.58d8ddc3.js";import"./useTimeout.429405d0.js";import"./useWindowSizeFn.135e6646.js";import"./index.db20b6ca.js";import"./index.1cb29158.js";import"./domUtils.3f0b517b.js";import"./_stringToArray.2e032d51.js";import"./useScrollTo.44e3ca92.js";import"./animation.6cb888e9.js";import"./FullscreenOutlined.ec7aae97.js";import"./index.2a3d155c.js";import"./index.19813759.js";import"./index.5231c462.js";import"./LeftOutlined.d1c037c6.js";import"./download.a4df27cf.js";import"./index.f1948b4f.js";import"./DoubleLeftOutlined.f7f11796.js";import"./DoubleRightOutlined.b183b394.js";import"./zh_CN.8094f4d6.js";import"./scrollTo.c1e0f75f.js";import"./transButton.bf1a4a67.js";import"./CaretDownFilled.d4286751.js";import"./clickOutside.f1ee885f.js";import"./useSortable.fcbfb6fb.js";import"./SettingOutlined.e10f612a.js";import"./useExpose.8730c60f.js";import"./useForm.65972378.js";var f=o({components:{BasicTable:e},setup(){const{createMessage:e}=s(),[o,{setLoading:n,setColumns:a,getColumns:l,getDataSource:c,reload:r,getPaginationRef:d,setPagination:f,getSelectRows:u,getSelectRowKeys:j,setSelectedRowKeys:b,clearSelectedRowKeys:g}]=p({canResize:!0,title:"useTable示例",titleHelpMessage:"使用useTable调用表格内方法",api:m,columns:t(),rowKey:"id",showTableSetting:!0,rowSelection:{type:"checkbox"}});return{registerTable:o,changeLoading:function(){n(!0),setTimeout((()=>{n(!1)}),1e3)},changeColumns:function(){a(i())},reloadTable:function(){a(t()),r({page:1})},getColumn:function(){e.info("请在控制台查看！")},getTableData:function(){e.info("请在控制台查看！")},getPagination:function(){e.info("请在控制台查看！")},setPaginationInfo:function(){f({current:2}),r()},getSelectRowList:function(){e.info("请在控制台查看！")},getSelectRowKeyList:function(){e.info("请在控制台查看！")},setSelectedRowKeyList:function(){b(["0","1","2"])},clearSelect:function(){g()}}}});const u={class:"p-4"},j={class:"mb-4"},b=d("还原"),g=d("开启loading"),C=d("更改Columns"),x=d("获取Columns"),k=d("获取表格数据"),S=d("跳转到第2页"),w={class:"mb-4"},T=d("获取选中行"),R=d("获取选中行Key"),O=d("设置选中行"),_=d("清空选中行"),y=d("获取分页信息");f.render=function(e,t,i,o,s,d){const m=n("a-button"),p=n("BasicTable");return a(),l("div",u,[c("div",j,[c(m,{class:"mr-2",onClick:e.reloadTable},{default:r((()=>[b])),_:1},8,["onClick"]),c(m,{class:"mr-2",onClick:e.changeLoading},{default:r((()=>[g])),_:1},8,["onClick"]),c(m,{class:"mr-2",onClick:e.changeColumns},{default:r((()=>[C])),_:1},8,["onClick"]),c(m,{class:"mr-2",onClick:e.getColumn},{default:r((()=>[x])),_:1},8,["onClick"]),c(m,{class:"mr-2",onClick:e.getTableData},{default:r((()=>[k])),_:1},8,["onClick"]),c(m,{class:"mr-2",onClick:e.setPaginationInfo},{default:r((()=>[S])),_:1},8,["onClick"])]),c("div",w,[c(m,{class:"mr-2",onClick:e.getSelectRowList},{default:r((()=>[T])),_:1},8,["onClick"]),c(m,{class:"mr-2",onClick:e.getSelectRowKeyList},{default:r((()=>[R])),_:1},8,["onClick"]),c(m,{class:"mr-2",onClick:e.setSelectedRowKeyList},{default:r((()=>[O])),_:1},8,["onClick"]),c(m,{class:"mr-2",onClick:e.clearSelect},{default:r((()=>[_])),_:1},8,["onClick"]),c(m,{class:"mr-2",onClick:e.getPagination},{default:r((()=>[y])),_:1},8,["onClick"])]),c(p,{onRegister:e.registerTable},null,8,["onRegister"])])};export default f;
