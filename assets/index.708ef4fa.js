import{d as e,f as t,dx as s,$ as a,dy as o,cp as r,cq as n,h as i,o as d,i as l,bw as p,j as u,l as m,m as c}from"./index.ca0293b2.js";import{A as f}from"./index.0f0c99ff.js";import j from"./CurrentPermissionMode.8e88f054.js";import{_ as R}from"./index.57f729b0.js";import"./vendor.3b1829c7.js";import"./index.2a3d155c.js";import"./index.20bde6cf.js";import"./index.b48f5073.js";import"./RightOutlined.1201c967.js";import"./EllipsisOutlined.70395492.js";import"./types.efa91daf.js";import"./isEqual.6bad97d6.js";import"./toInteger.34722792.js";import"./DownOutlined.6480d9be.js";import"./index.95c10fda.js";import"./index.9ccf032c.js";import"./usePageContext.6304a3c5.js";import"./transButton.bf1a4a67.js";import"./ArrowLeftOutlined.8dd51bf7.js";var g=e({components:{Alert:f,CurrentPermissionMode:j,PageWrapper:R},setup(){const{changeRole:e}=o();return{userStore:t,RoleEnum:s,isSuper:a((()=>t.getRoleListState.includes(s.SUPER))),isTest:a((()=>t.getRoleListState.includes(s.TEST))),changeRole:e}}});const E=p("data-v-9a73aaae");r("data-v-9a73aaae");const S=c(" 当前角色: "),b={class:"mt-4"},x=c(" 权限切换(请先切换权限模式为前端角色权限模式): ");n();const y=E(((e,t,s,a,o,r)=>{const n=i("CurrentPermissionMode"),p=i("Alert"),f=i("a-button"),j=i("a-button-group"),R=i("PageWrapper");return d(),l(R,{title:"前端权限示例",contentBackground:"",contentClass:"p-4",content:"由于刷新的时候会请求用户信息接口，会根据接口重置角色信息，所以刷新后界面会恢复原样，如果不需要，可以注释 src/layout/default/index内的获取用户信息接口"},{default:E((()=>[u(n),u("p",null,[S,u("a",null,m(e.userStore.getRoleListState),1)]),u(p,{class:"mt-4",type:"info",message:"点击后请查看左侧菜单变化","show-icon":""}),u("div",b,[x,u(j,null,{default:E((()=>[u(f,{onClick:t[1]||(t[1]=t=>e.changeRole(e.RoleEnum.SUPER)),type:e.isSuper?"primary":"default"},{default:E((()=>[c(m(e.RoleEnum.SUPER),1)])),_:1},8,["type"]),u(f,{onClick:t[2]||(t[2]=t=>e.changeRole(e.RoleEnum.TEST)),type:e.isTest?"primary":"default"},{default:E((()=>[c(m(e.RoleEnum.TEST),1)])),_:1},8,["type"])])),_:1})])])),_:1})}));g.render=y,g.__scopeId="data-v-9a73aaae";export default g;
