import{d as t,cp as e,cq as i,h as s,o,i as r,j as a,bw as d,m as n}from"./index.ca0293b2.js";import{D as m}from"./index.02e5c7bd.js";import{D as p}from"./index.2a3d155c.js";import{A as c}from"./index.0f0c99ff.js";import{_ as j}from"./index.747dc0f6.js";import{step2Schemas as l}from"./data.2505cb7f.js";import{u}from"./useForm.65972378.js";import"./vendor.3b1829c7.js";import"./responsiveObserve.c545f1cc.js";import"./index.8aafcec1.js";import"./index.8931e3d6.js";import"./findIndex.a959c21e.js";import"./isEqual.6bad97d6.js";import"./_baseProperty.74f89655.js";import"./toInteger.34722792.js";import"./index.7df2bb45.js";import"./index.23bcb373.js";import"./SearchOutlined.d9cc3823.js";import"./CheckOutlined.a0c62bc8.js";import"./DownOutlined.6480d9be.js";import"./index.a24eb58c.js";import"./index.30ae9ad5.js";import"./UpOutlined.0ef8cad0.js";import"./index.f630c8e6.js";import"./EyeOutlined.ba199c78.js";import"./index.4340cfa4.js";import"./colors.d5f042e5.js";import"./RightOutlined.1201c967.js";import"./RedoOutlined.7ed439dc.js";import"./index.b48f5073.js";import"./EllipsisOutlined.70395492.js";import"./types.efa91daf.js";import"./Tree.be2474a1.js";import"./util.9205dd12.js";import"./useAttrs.93b544a4.js";import"./index.95c10fda.js";import"./uuid.e47b941f.js";import"./index.0ab3a9b2.js";import"./DeleteOutlined.ce2f632a.js";import"./index.58d8ddc3.js";import"./useTimeout.429405d0.js";import"./useWindowSizeFn.135e6646.js";import"./index.db20b6ca.js";import"./index.1cb29158.js";import"./domUtils.3f0b517b.js";import"./_stringToArray.2e032d51.js";import"./useScrollTo.44e3ca92.js";import"./animation.6cb888e9.js";import"./FullscreenOutlined.ec7aae97.js";import"./index.19813759.js";import"./index.5231c462.js";import"./LeftOutlined.d1c037c6.js";import"./download.a4df27cf.js";var f=t({components:{BasicForm:j,[c.name]:c,[p.name]:p,[m.name]:m,[m.Item.name]:m.Item},emits:["next","prev"],setup(t,{emit:e}){const[i,{validate:s,setProps:o}]=u({labelWidth:80,schemas:l,actionColOptions:{span:14},resetButtonOptions:{text:"上一步"},submitButtonOptions:{text:"提交"},resetFunc:async function(){e("prev")},submitFunc:async function(){try{const t=await s();o({submitButtonOptions:{loading:!0}}),setTimeout((()=>{o({submitButtonOptions:{loading:!1}}),e("next",t)}),1500)}catch(t){}}});return{register:i}}});const b=d("data-v-01481d2f");e("data-v-01481d2f");const x={class:"step2"},O=n(" ant-design@alipay.com "),v=n(" test@example.com "),g=n(" Vben "),_=n(" 500元 ");i();const h=b(((t,e,i,d,n,m)=>{const p=s("a-alert"),c=s("a-descriptions-item"),j=s("a-descriptions"),l=s("a-divider"),u=s("BasicForm");return o(),r("div",x,[a(p,{message:"确认转账后，资金将直接打入对方账户，无法退回。","show-icon":""}),a(j,{column:1,class:"mt-5"},{default:b((()=>[a(c,{label:"付款账户"},{default:b((()=>[O])),_:1}),a(c,{label:"收款账户"},{default:b((()=>[v])),_:1}),a(c,{label:"收款人姓名"},{default:b((()=>[g])),_:1}),a(c,{label:"转账金额"},{default:b((()=>[_])),_:1})])),_:1}),a(l),a(u,{onRegister:t.register},null,8,["onRegister"])])}));f.render=h,f.__scopeId="data-v-01481d2f";export default f;
