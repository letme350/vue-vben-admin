import{d as s,aJ as a,cp as t,cq as e,h as i,o as l,i as o,bw as n,j as r,aL as p,aM as d,k as c,l as m,m as f}from"./index.13aefb6f.js";import{L as u}from"./index.7ab06558.js";import"./index.8bcb6041.js";import"./index.cc60a3a6.js";import"./index.283c70c2.js";import{P as j}from"./index.27e8a081.js";import{R as x,C as _}from"./index.67caae9f.js";import{cardList as v}from"./data.a96915dc.js";import{_ as b}from"./index.28ae351f.js";import"./vendor.3b1829c7.js";import"./SearchOutlined.e439a87c.js";import"./CheckOutlined.ee7dbd66.js";import"./DownOutlined.fce9d8c3.js";import"./LeftOutlined.547a5ef5.js";import"./RightOutlined.6352f3be.js";import"./DoubleLeftOutlined.e7cdc27f.js";import"./DoubleRightOutlined.ed42d62a.js";import"./zh_CN.8094f4d6.js";import"./responsiveObserve.c545f1cc.js";import"./types.b30def48.js";import"./index.d1f698f3.js";import"./index.f32a4577.js";import"./EllipsisOutlined.9a8cdd6b.js";import"./isEqual.10a7398e.js";import"./toInteger.03d4fa11.js";/* empty css              */import"./index.f3e0521d.js";import"./usePageContext.fb1fd52f.js";import"./transButton.02b1ac87.js";import"./ArrowLeftOutlined.745a5650.js";var g=s({components:{Icon:a,Progress:j,PageWrapper:b,[u.name]:u,[u.Item.name]:u.Item,AListItemMeta:u.Item.Meta,[x.name]:x,[_.name]:_},setup:()=>({prefixCls:"list-basic",list:v,pagination:{show:!0,pageSize:3}})});const C=n("data-v-314ba016");t("data-v-314ba016");const O=r("div",null,"我的待办",-1),h=r("p",null,"8个任务",-1),I=r("div",null,"本周任务平均处理时间",-1),w=r("p",null,"32分钟",-1),L=r("div",null,"本周完成任务数",-1),P=r("p",null,"24个任务",-1),k={key:0,class:"extra"},$={class:"description"},y={class:"info"},D=r("span",null,"Owner",-1),M=r("span",null,"开始时间",-1),R={class:"progress"};e();const q=C(((s,a,t,e,n,u)=>{const j=i("a-col"),x=i("a-row"),_=i("Icon"),v=i("Progress"),b=i("a-list-item-meta"),g=i("a-list-item"),q=i("a-list"),z=i("PageWrapper");return l(),o(z,{class:s.prefixCls,title:"标准列表"},{default:C((()=>[r("div",{class:`${s.prefixCls}__top`},[r(x,{gutter:12},{default:C((()=>[r(j,{span:8,class:`${s.prefixCls}__top-col`},{default:C((()=>[O,h])),_:1},8,["class"]),r(j,{span:8,class:`${s.prefixCls}__top-col`},{default:C((()=>[I,w])),_:1},8,["class"]),r(j,{span:8,class:`${s.prefixCls}__top-col`},{default:C((()=>[L,P])),_:1},8,["class"])])),_:1})],2),r("div",{class:`${s.prefixCls}__content`},[r(q,{pagination:s.pagination},{default:C((()=>[(l(!0),o(p,null,d(s.list,(s=>(l(),o(g,{key:s.id,class:"list"},{default:C((()=>[r(b,null,{avatar:C((()=>[s.icon?(l(),o(_,{key:0,class:"icon",icon:s.icon,color:s.color},null,8,["icon","color"])):c("",!0)])),title:C((()=>[r("span",null,m(s.title),1),s.extra?(l(),o("div",k,m(s.extra),1)):c("",!0)])),description:C((()=>[r("div",$,m(s.description),1),r("div",y,[r("div",null,[D,f(m(s.author),1)]),r("div",null,[M,f(m(s.datetime),1)])]),r("div",R,[r(v,{percent:s.percent,status:"active"},null,8,["percent"])])])),_:2},1024)])),_:2},1024)))),128))])),_:1},8,["pagination"])],2)])),_:1},8,["class"])}));g.render=q,g.__scopeId="data-v-314ba016";export default g;