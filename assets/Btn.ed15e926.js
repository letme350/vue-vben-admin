import{d as e,f as s,dx as t,$ as a,dy as o,cp as r,cq as l,h as u,bA as n,o as i,i as m,bw as d,j as c,l as p,m as f,k as E,H as R}from"./index.ca0293b2.js";import{D as S}from"./index.2a3d155c.js";import{A as _}from"./index.0f0c99ff.js";import x from"./CurrentPermissionMode.8e88f054.js";import{_ as j}from"./index.f5278459.js";import{_ as y}from"./index.57f729b0.js";import"./vendor.3b1829c7.js";import"./index.20bde6cf.js";import"./index.b48f5073.js";import"./RightOutlined.1201c967.js";import"./EllipsisOutlined.70395492.js";import"./types.efa91daf.js";import"./isEqual.6bad97d6.js";import"./toInteger.34722792.js";import"./DownOutlined.6480d9be.js";import"./index.95c10fda.js";import"./index.9ccf032c.js";import"./usePageContext.6304a3c5.js";import"./transButton.bf1a4a67.js";import"./ArrowLeftOutlined.8dd51bf7.js";var P=e({components:{Alert:_,PageWrapper:y,CurrentPermissionMode:x,Divider:S,Authority:j},setup(){const{changeRole:e,hasPermission:r}=o();return{userStore:s,RoleEnum:t,isSuper:a((()=>s.getRoleListState.includes(t.SUPER))),isTest:a((()=>s.getRoleListState.includes(t.TEST))),changeRole:e,hasPermission:r}}});const T=d("data-v-069ee5d2");r("data-v-069ee5d2");const g=f(" 当前角色: "),h={class:"mt-4"},v=f(" 权限切换(请先切换权限模式为前端角色权限模式): "),b=f("组件方式判断权限(有需要可以自行全局注册)"),U=f("拥有super角色权限可见"),k=f("拥有test角色权限可见"),A=f("拥有[test,super]角色权限可见"),C=f("函数方式方式判断权限(适用于函数内部过滤)"),w=f(" 拥有super角色权限可见 "),D=f(" 拥有test角色权限可见 "),L=f(" 拥有[test,super]角色权限可见 "),O=f("指令方式方式判断权限(该方式不能动态修改权限.)"),M=f(" 拥有super角色权限可见 "),q=f(" 拥有test角色权限可见 "),B=f(" 拥有[test,super]角色权限可见 ");l();const I=T(((e,s,t,a,o,r)=>{const l=u("CurrentPermissionMode"),d=u("Alert"),S=u("a-button"),_=u("a-button-group"),x=u("Divider"),j=u("Authority"),y=u("PageWrapper"),P=n("auth");return i(),m(y,{title:"前端权限按钮示例",contentBackground:"",contentClass:"p-4",content:"由于刷新的时候会请求用户信息接口，会根据接口重置角色信息，所以刷新后界面会恢复原样，如果不需要，可以注释 src/layout/default/index内的获取用户信息接口"},{default:T((()=>[c(l),c("p",null,[g,c("a",null,p(e.userStore.getRoleListState),1)]),c(d,{class:"mt-4",type:"info",message:"点击后请查看按钮变化","show-icon":""}),c("div",h,[v,c(_,null,{default:T((()=>[c(S,{onClick:s[1]||(s[1]=s=>e.changeRole(e.RoleEnum.SUPER)),type:e.isSuper?"primary":"default"},{default:T((()=>[f(p(e.RoleEnum.SUPER),1)])),_:1},8,["type"]),c(S,{onClick:s[2]||(s[2]=s=>e.changeRole(e.RoleEnum.TEST)),type:e.isTest?"primary":"default"},{default:T((()=>[f(p(e.RoleEnum.TEST),1)])),_:1},8,["type"])])),_:1})]),c(x,null,{default:T((()=>[b])),_:1}),c(j,{value:e.RoleEnum.SUPER},{default:T((()=>[c(S,{type:"primary",class:"mx-4"},{default:T((()=>[U])),_:1})])),_:1},8,["value"]),c(j,{value:e.RoleEnum.TEST},{default:T((()=>[c(S,{color:"success",class:"mx-4"},{default:T((()=>[k])),_:1})])),_:1},8,["value"]),c(j,{value:[e.RoleEnum.TEST,e.RoleEnum.SUPER]},{default:T((()=>[c(S,{color:"error",class:"mx-4"},{default:T((()=>[A])),_:1})])),_:1},8,["value"]),c(x,null,{default:T((()=>[C])),_:1}),e.hasPermission(e.RoleEnum.SUPER)?(i(),m(S,{key:0,type:"primary",class:"mx-4"},{default:T((()=>[w])),_:1})):E("",!0),e.hasPermission(e.RoleEnum.TEST)?(i(),m(S,{key:1,color:"success",class:"mx-4"},{default:T((()=>[D])),_:1})):E("",!0),e.hasPermission([e.RoleEnum.TEST,e.RoleEnum.SUPER])?(i(),m(S,{key:2,color:"error",class:"mx-4"},{default:T((()=>[L])),_:1})):E("",!0),c(x,null,{default:T((()=>[O])),_:1}),R(c(S,{type:"primary",class:"mx-4"},{default:T((()=>[M])),_:1},512),[[P,e.RoleEnum.SUPER]]),R(c(S,{color:"success",class:"mx-4"},{default:T((()=>[q])),_:1},512),[[P,e.RoleEnum.TEST]]),R(c(S,{color:"error",class:"mx-4"},{default:T((()=>[B])),_:1},512),[[P,[e.RoleEnum.TEST,e.RoleEnum.SUPER]]])])),_:1})}));P.render=I,P.__scopeId="data-v-069ee5d2";export default P;
