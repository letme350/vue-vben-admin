import{_ as e}from"./index.6783de98.js";import{d as t,h as i,o,i as n,j as d,w as s,m as r}from"./index.726a1292.js";import{g as a}from"./index.b092357d.js";import{u as l}from"./useTable.31807f43.js";import"./index.d1ee17e2.js";import"./SearchOutlined.47e6a5d6.js";import"./CheckOutlined.004492c1.js";import"./DownOutlined.f011354d.js";import"./index.c87fd8d1.js";import"./index.2ebd2525.js";import"./responsiveObserve.c545f1cc.js";import"./vendor.3b1829c7.js";import"./findIndex.6b15e138.js";import"./isEqual.aa473c94.js";import"./get.47cb6864.js";import"./_baseProperty.74f89655.js";import"./toInteger.410aca8d.js";import"./index.fc8abf96.js";import"./RightOutlined.97d13c0b.js";import"./EllipsisOutlined.f451d7d8.js";import"./types.96074ade.js";import"./index.444678b1.js";import"./LeftOutlined.49f96845.js";import"./DoubleLeftOutlined.f70f5aad.js";import"./DoubleRightOutlined.f50077d1.js";import"./zh_CN.8094f4d6.js";import"./uuid.9631d95f.js";import"./index.bdd4f54c.js";import"./util.fcd2ca24.js";import"./DeleteOutlined.f78597ae.js";import"./EyeOutlined.c0aabb58.js";import"./index.40081bc3.js";/* empty css              */import"./scrollTo.c1e0f75f.js";import"./transButton.b72fffa2.js";import"./CaretDownFilled.e4fcaf1e.js";import"./clickOutside.3a5750b9.js";import"./domUtils.88771570.js";import"./_stringToArray.d899db8d.js";import"./index.6d83b64c.js";import"./index.57c2cc27.js";import"./UpOutlined.f9435ac9.js";import"./index.571c6d75.js";import"./useSortable.285d8e50.js";import"./useTimeout.621e6290.js";import"./useWindowSizeFn.7fb21022.js";import"./index.594319ed.js";import"./index.56a51e6f.js";import"./index.f4bd2380.js";import"./useScrollTo.367edc72.js";import"./animation.7e1378fc.js";import"./FullscreenOutlined.0d377604.js";import"./index.d77fefba.js";import"./SettingOutlined.1a5751e2.js";import"./useExpose.49d6193b.js";import"./useForm.ac48f24c.js";import"./index.64f011cb.js";import"./index.95f3772a.js";import"./RedoOutlined.31b7b26c.js";import"./Tree.23ca4528.js";import"./index.e9b59711.js";import"./index.0c4a85ff.js";import"./download.d746980c.js";const m=[{title:"成员姓名",dataIndex:"name",editRow:!0},{title:"工号",dataIndex:"no",editRow:!0},{title:"所属部门",dataIndex:"dept",editRow:!0}],c=[{name:"John Brown",no:"00001",dept:"New York No. 1 Lake Park"},{name:"John Brown2",no:"00002",dept:"New York No. 2 Lake Park"},{name:"John Brown3",no:"00003",dept:"New York No. 3Lake Park"}];var p=t({components:{BasicTable:e,TableAction:a},setup(){const[e,{getDataSource:t}]=l({columns:m,showIndexColumn:!1,dataSource:c,actionColumn:{width:160,title:"操作",dataIndex:"action",slots:{customRender:"action"}},pagination:!1});function i(e){var t;null==(t=e.onEdit)||t.call(e,!0)}function o(e){var i;if(null==(i=e.onEdit)||i.call(e,!1),e.isNew){const i=t(),o=i.findIndex((t=>t.key===e.key));i.splice(o,1)}}function n(e){var t;null==(t=e.onEdit)||t.call(e,!1,!0)}return{registerTable:e,handleEdit:i,createActions:function(e,t){return e.editable?[{label:"保存",onClick:n.bind(null,e,t)},{label:"取消",popConfirm:{title:"是否取消编辑",confirm:o.bind(null,e,t)}}]:[{label:"编辑",onClick:i.bind(null,e)},{label:"删除"}]},handleAdd:function(){const e=t(),i={name:"",no:"",dept:"",editable:!0,isNew:!0,key:`${Date.now()}`};e.push(i)},getDataSource:t}}});const j=r(" 新增成员 ");p.render=function(e,t,r,a,l,m){const c=i("TableAction"),p=i("BasicTable"),u=i("a-button");return o(),n("div",null,[d(p,{onRegister:e.registerTable},{action:s((({record:t,column:i})=>[d(c,{actions:e.createActions(t,i)},null,8,["actions"])])),_:1},8,["onRegister"]),d(u,{block:"",class:"mt-5",type:"dashed",onClick:e.handleAdd},{default:s((()=>[j])),_:1},8,["onClick"])])};export default p;
