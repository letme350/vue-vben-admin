import{d as e,bB as t,h as s,o,i as r,w as a,j as i,m as l}from"./index.13aefb6f.js";import{I as n}from"./index.c4a5d02a.js";import{a as c}from"./index.527ce582.js";import{_ as d}from"./index.28ae351f.js";import"./vendor.3b1829c7.js";import"./SearchOutlined.e439a87c.js";import"./EyeOutlined.5c1c4d2a.js";import"./index.7726fdfd.js";import"./domUtils.9ad9e2d5.js";import"./_stringToArray.7cbaaf1a.js";import"./RightOutlined.6352f3be.js";/* empty css              */import"./useTimeout.e3e2a7dc.js";import"./useScrollTo.6e2b4a93.js";import"./animation.3a6b162f.js";import"./index.d1f698f3.js";import"./index.f32a4577.js";import"./EllipsisOutlined.9a8cdd6b.js";import"./types.b30def48.js";import"./isEqual.10a7398e.js";import"./toInteger.03d4fa11.js";import"./DownOutlined.fce9d8c3.js";import"./index.f3e0521d.js";import"./usePageContext.fb1fd52f.js";import"./transButton.02b1ac87.js";import"./ArrowLeftOutlined.745a5650.js";var m=e({name:"TabsDemo",components:{CollapseContainer:c,PageWrapper:d,[n.name]:n},setup(){const{closeAll:e,closeLeft:s,closeRight:o,closeOther:r,closeCurrent:a,refreshPage:i}=t();return{closeAll:e,closeLeft:s,closeRight:o,closeOther:r,closeCurrent:a,refreshPage:i}}});const f=l(" 关闭所有 "),p=l(" 关闭左侧 "),u=l(" 关闭右侧 "),j=l(" 关闭其他 "),C=l(" 关闭当前 "),b=l(" 刷新当前 ");m.render=function(e,t,l,n,c,d){const m=s("a-input"),h=s("CollapseContainer"),g=s("a-button"),k=s("PageWrapper");return o(),r(k,{title:"标签页操作示例"},{default:a((()=>[i(h,{title:"在下面输入框输入文本,切换后回来内容会保存"},{default:a((()=>[i(m,{placeholder:"请输入"})])),_:1}),i(h,{class:"mt-4",title:"标签页操作"},{default:a((()=>[i(g,{class:"mr-2",onClick:e.closeAll},{default:a((()=>[f])),_:1},8,["onClick"]),i(g,{class:"mr-2",onClick:e.closeLeft},{default:a((()=>[p])),_:1},8,["onClick"]),i(g,{class:"mr-2",onClick:e.closeRight},{default:a((()=>[u])),_:1},8,["onClick"]),i(g,{class:"mr-2",onClick:e.closeOther},{default:a((()=>[j])),_:1},8,["onClick"]),i(g,{class:"mr-2",onClick:e.closeCurrent},{default:a((()=>[C])),_:1},8,["onClick"]),i(g,{class:"mr-2",onClick:e.refreshPage},{default:a((()=>[b])),_:1},8,["onClick"])])),_:1})])),_:1})};export default m;