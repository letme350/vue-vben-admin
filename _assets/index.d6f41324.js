import{a as o,i as e,o as i,j as s,k as r,w as t,p as n}from"./index.e622111d.js";import"./xlsx.a48e520c.js";import"./index.158b65b7.js";import"./Trigger.bf7f3a72.js";import"./omit.fd7b21c8.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.6318737e.js";import"./CheckOutlined.187bc1d1.js";import"./index.caa0d6dc.js";import{A as a}from"./index.5a632863.js";import"./colors.346e189f.js";import"./RightOutlined.f0169d6f.js";import"./_stringToArray.943e7f6c.js";import"./domUtils.fffd3e40.js";import"./index.dc4111a7.js";import"./index.a172b251.js";import"./index.b6070937.js";import"./index.6ab39c74.js";import"./UpOutlined.bb04ec26.js";import"./index.317398e2.js";import"./index.d4063b66.js";import"./index.12af9319.js";import"./index.180cf33d.js";import"./index.d1df10b7.js";import"./index.35d539fd.js";import"./CloseOutlined.3b0881b7.js";import"./FullscreenOutlined.4ae67d7b.js";import"./LoadingOutlined.2e17b41f.js";import"./RightOutlined.7bff01db.js";import"./useTimeout.06b16bcc.js";import"./tsxHelper.43604373.js";import"./index.e25a806a.js";import"./animation.755a04b8.js";import"./useScrollTo.132bb25e.js";import"./useAttrs.f2161018.js";import"./index.5c7fcd9f.js";import{a as d}from"./index.86609f4c.js";import"./useWindowSizeFn.84aec3d2.js";import"./useForm.9d445dc3.js";import l from"./Modal1.eb1ccf51.js";import p from"./Modal2.0e1bdbab.js";import m from"./Modal3.0628368e.js";import c from"./Modal4.0f535e9d.js";var j=o({components:{Alert:a,Modal1:l,Modal2:p,Modal3:m,Modal4:c},setup(){const[o,{openModal:e,setModalProps:i}]=d(),[s,{openModal:r}]=d(),[t,{openModal:n}]=d(),[a,{openModal:l}]=d();return{register1:o,openModal1:e,register2:s,openModal2:r,register3:t,openModal3:n,register4:a,openModal4:l,send:function(){l(!0,{data:"content",info:"Info"})},openModalLoading:function(){e(),i({loading:!0}),setTimeout((()=>{i({loading:!1})}),2e3)}}}});const f={class:"px-10 py-4"},u=n("打开弹窗 默认可以拖动/全屏"),g=n("打开弹窗"),b=n("打开弹窗"),M=n("打开弹窗并传递数据");j.render=function(o,n,a,d,l,p){const m=e("Alert"),c=e("a-button"),j=e("Modal1"),x=e("Modal2"),y=e("Modal3"),R=e("Modal4");return i(),s("div",f,[r(m,{message:"使用 useModal 进行弹窗操作，默认可以拖动，可以通过 draggable\n    参数进行控制是否可以拖动/全屏","show-icon":""}),r(c,{type:"primary",class:"my-4",onClick:o.openModalLoading},{default:t((()=>[u])),_:1},8,["onClick"]),r(m,{message:"内外同时同时显示隐藏","show-icon":""}),r(c,{type:"primary",class:"my-4",onClick:o.openModal2},{default:t((()=>[g])),_:1},8,["onClick"]),r(m,{message:"自适应高度","show-icon":""}),r(c,{type:"primary",class:"my-4",onClick:o.openModal3},{default:t((()=>[b])),_:1},8,["onClick"]),r(m,{message:"内外数据交互,外部通过 transferModalData 发送，内部通过 receiveDrawerDataRef 接收。该数据具有响应式","show-icon":""}),r(c,{type:"primary",class:"my-4",onClick:o.send},{default:t((()=>[M])),_:1},8,["onClick"]),r(j,{onRegister:o.register1},null,8,["onRegister"]),r(x,{onRegister:o.register2},null,8,["onRegister"]),r(y,{onRegister:o.register3},null,8,["onRegister"]),r(R,{onRegister:o.register4},null,8,["onRegister"])])};export default j;