import{a as s,s as e,b3 as o,dj as i,b2 as n,i as r,o as t,j as a,k as m,w as d,p as l,n as p}from"./index.db24b8f1.js";import"./xlsx.a48e520c.js";import{D as c}from"./index.44fa6ce0.js";var u=s({name:"CurrentPermissionMode",components:{Divider:c},setup(){const s=e((()=>n.getProjectConfig.permissionMode)),{togglePermissionMode:r}=i();return{permissionMode:s,PermissionModeEnum:o,togglePermissionMode:r}}});const f={class:"mt-2"},M=l(" 当前权限模式： "),g=l(" 切换权限模式 ");u.render=function(s,e,o,i,n,c){const u=r("a-button"),P=r("Divider");return t(),a("div",f,[M,m(u,{type:"link"},{default:d((()=>[l(p(s.permissionMode===s.PermissionModeEnum.BACK?"后台权限模式":"前端角色权限模式"),1)])),_:1}),m(u,{class:"ml-4",onClick:s.togglePermissionMode,type:"primary"},{default:d((()=>[g])),_:1},8,["onClick"]),m(P)])};export default u;