let e=document.createElement("style");e.innerHTML=".demo[data-v-1de7c5b2]{background:#fff}",document.head.appendChild(e);import{a as t,g as s,dx as a,I as o,dy as n,d6 as d,d7 as r,i as l,o as i,j as u,k as c,n as m,p,bp as f}from"./index.e622111d.js";import"./xlsx.a48e520c.js";import{A as R}from"./index.5a632863.js";import"./index.c64fc185.js";import S from"./CurrentPermissionMode.9766d123.js";var g=t({components:{Alert:R,CurrentPermissionMode:S},setup(){const{changeRole:e}=n();return{userStore:s,RoleEnum:a,isSuper:o((()=>s.getRoleListState.includes(a.SUPER))),isTest:o((()=>s.getRoleListState.includes(a.TEST))),changeRole:e}}});const E=f("data-v-1de7c5b2");d("data-v-1de7c5b2");const y={class:"p-4 m-4 demo"},T=p(" 当前角色: "),b={class:"mt-4"},h=p(" 权限切换(请先切换权限模式为前端角色权限模式): ");r();const x=E(((e,t,s,a,o,n)=>{const d=l("Alert"),r=l("CurrentPermissionMode"),f=l("a-button"),R=l("a-button-group");return i(),u("div",y,[c(d,{message:"由于刷新的时候会请求用户信息接口，会根据接口重置角色信息，所以刷新后界面会恢复原样，如果不需要，可以注释 src/layout/default/index内的获取用户信息接口","show-icon":""}),c(r),c("p",null,[T,c("a",null,m(e.userStore.getRoleListState),1)]),c(d,{class:"mt-4",type:"info",message:"点击后请查看左侧菜单变化","show-icon":""}),c("div",b,[h,c(R,null,{default:E((()=>[c(f,{onClick:t[1]||(t[1]=t=>e.changeRole(e.RoleEnum.SUPER)),type:e.isSuper?"primary":"default"},{default:E((()=>[p(m(e.RoleEnum.SUPER),1)])),_:1},8,["type"]),c(f,{onClick:t[2]||(t[2]=t=>e.changeRole(e.RoleEnum.TEST)),type:e.isTest?"primary":"default"},{default:E((()=>[p(m(e.RoleEnum.TEST),1)])),_:1},8,["type"])])),_:1})])])}));g.render=x,g.__scopeId="data-v-1de7c5b2";export default g;