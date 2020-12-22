import{dc as e,a as r,r as i,u as o,O as t,F as s,cQ as a,dg as n,i as d,o as c,j as m,ad as l,aH as p,aI as j,aJ as u,k as f,w as b,p as x,n as g}from"./index.db24b8f1.js";import"./xlsx.a48e520c.js";import"./index.55781cbb.js";import"./index.2d955445.js";import"./Trigger.303d467b.js";import"./omit.820c82e3.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.68db0f8a.js";import"./CheckOutlined.b08be770.js";import"./index.535d4427.js";import"./colors.692cdd84.js";import"./index.82d10d75.js";import"./RightOutlined.64b48e54.js";import"./index.384e11c5.js";import"./types.65e05d4c.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.9edb8058.js";import"./_baseFor.f4e5f03f.js";import"./index.28b15714.js";import"./index.a172b251.js";import"./index.90d8041a.js";import"./index.d1c715e4.js";import"./UpOutlined.611d51a7.js";import"./LeftOutlined.89d256a7.js";import"./index.118a37e3.js";import"./index.9daecf3c.js";import"./index.44fa6ce0.js";import"./index.5c08980b.js";import"./index.30457827.js";import"./zh_CN.0242bd16.js";import{T as E}from"./TableAction.0993c5c2.js";import"./index.b02f2162.js";import"./CaretDownFilled.4688ca70.js";import"./CheckOutlined.94f308ef.js";import"./CloseOutlined.6711d54c.js";import{s as y}from"./EditTableHeaderIcon.57637ad7.js";import"./DownOutlined.3a04c85b.js";import"./FullscreenOutlined.2c746cdc.js";import"./LeftOutlined.be90356f.js";import"./functional.57d41b3d.js";import"./RedoOutlined.4517c673.js";import"./RightOutlined.15f31eda.js";import"./SettingOutlined.43ab4768.js";import"./useTimeout.8adf281f.js";import"./useDebounce.8dbcf364.js";import"./useEventListener.e8f38262.js";import"./useBreakpoint.ec70ff65.js";import"./tsxHelper.00e8ba63.js";import"./domUtils.b4ec2d0c.js";import"./index.ac876ed0.js";import"./useDescription.367ec998.js";import"./index.9c9c3bfe.js";import"./index.53d2c82a.js";import"./index.c5a5f0b0.js";import"./useForm.ca9cb1ec.js";import{u as R}from"./index.9682c7e0.js";import"./useModalContext.95ebeccd.js";import"./useFullScreen.686e2593.js";import"./uuid.40269c00.js";import"./useWindowSizeFn.2b8923c5.js";import"./useExpose.9b08d802.js";import"./index.9144270e.js";import{u as T}from"./useTable.995b457f.js";import{getColumns as C}from"./data.73d89281.js";import O from"./DetailModal.fb026467.js";var D;(D||(D={})).Error="/error";var h=r({name:"ErrorHandler",components:{DetailModal:O,BasicTable:y,TableAction:E},setup(){const r=i(),d=i([]),{t:c}=o(),[m,{setTableData:l}]=T({title:c("sys.errorLog.tableTitle"),columns:C(),actionColumn:{width:80,title:"Action",dataIndex:"action",slots:{customRender:"action"}}}),[p,{openModal:j}]=R();return t((()=>n.getErrorInfoState),(e=>{s((()=>{l(a(e))}))}),{immediate:!0}),{register:m,registerModal:p,handleDetail:function(e){r.value=e,j(!0)},fireVueError:function(){throw new Error("fire vue error!")},fireResourceError:function(){d.value.push(`${(new Date).getTime()}.png`)},fireAjaxError:async function(){await e.request({url:D.Error,method:"GET"})},imgListRef:d,rowInfoRef:r,t:c}}});const k={class:"p-4"};h.render=function(e,r,i,o,t,s){const a=d("DetailModal"),n=d("a-button"),E=d("TableAction"),y=d("BasicTable");return c(),m("div",k,[(c(!0),m(l,null,p(e.imgListRef,(e=>j((c(),m("img",{key:e,src:e},null,8,["src"])),[[u,!1]]))),128)),f(a,{info:e.rowInfoRef,onRegister:e.registerModal},null,8,["info","onRegister"]),f(y,{onRegister:e.register,class:"error-handle-table"},{toolbar:b((()=>[f(n,{onClick:e.fireVueError,type:"primary"},{default:b((()=>[x(g(e.t("sys.errorLog.fireVueError")),1)])),_:1},8,["onClick"]),f(n,{onClick:e.fireResourceError,type:"primary"},{default:b((()=>[x(g(e.t("sys.errorLog.fireResourceError")),1)])),_:1},8,["onClick"]),f(n,{onClick:e.fireAjaxError,type:"primary"},{default:b((()=>[x(g(e.t("sys.errorLog.fireAjaxError")),1)])),_:1},8,["onClick"])])),action:b((({record:r})=>[f(E,{actions:[{label:e.t("sys.errorLog.tableActionDesc"),onClick:e.handleDetail.bind(null,r)}]},null,8,["actions"])])),_:1},8,["onRegister"])])};export default h;