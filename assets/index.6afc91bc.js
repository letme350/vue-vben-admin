import{_ as e}from"./index.747dc0f6.js";import{d as t,g as o,h as i,o as s,i as r,bw as n,j as p}from"./index.ca0293b2.js";import{_ as a}from"./index.57f729b0.js";import{u as l}from"./useForm.65972378.js";import"./index.8aafcec1.js";import"./responsiveObserve.c545f1cc.js";import"./index.8931e3d6.js";import"./vendor.3b1829c7.js";import"./findIndex.a959c21e.js";import"./isEqual.6bad97d6.js";import"./_baseProperty.74f89655.js";import"./toInteger.34722792.js";import"./index.7df2bb45.js";import"./index.23bcb373.js";import"./SearchOutlined.d9cc3823.js";import"./CheckOutlined.a0c62bc8.js";import"./DownOutlined.6480d9be.js";import"./index.a24eb58c.js";import"./index.30ae9ad5.js";import"./UpOutlined.0ef8cad0.js";import"./index.f630c8e6.js";import"./EyeOutlined.ba199c78.js";import"./index.4340cfa4.js";import"./colors.d5f042e5.js";import"./RightOutlined.1201c967.js";import"./RedoOutlined.7ed439dc.js";import"./index.b48f5073.js";import"./EllipsisOutlined.70395492.js";import"./types.efa91daf.js";import"./Tree.be2474a1.js";import"./util.9205dd12.js";import"./useAttrs.93b544a4.js";import"./index.95c10fda.js";import"./index.0f0c99ff.js";import"./uuid.e47b941f.js";import"./index.0ab3a9b2.js";import"./DeleteOutlined.ce2f632a.js";import"./index.58d8ddc3.js";import"./useTimeout.429405d0.js";import"./useWindowSizeFn.135e6646.js";import"./index.db20b6ca.js";import"./index.1cb29158.js";import"./domUtils.3f0b517b.js";import"./_stringToArray.2e032d51.js";import"./useScrollTo.44e3ca92.js";import"./animation.6cb888e9.js";import"./FullscreenOutlined.ec7aae97.js";import"./index.2a3d155c.js";import"./index.19813759.js";import"./index.5231c462.js";import"./LeftOutlined.d1c037c6.js";import"./download.a4df27cf.js";import"./index.20bde6cf.js";import"./index.9ccf032c.js";import"./usePageContext.6304a3c5.js";import"./transButton.bf1a4a67.js";import"./ArrowLeftOutlined.8dd51bf7.js";const d=[{field:"title",component:"Input",label:"标题",componentProps:{placeholder:"给目标起个名字"},required:!0},{field:"time",component:"RangePicker",label:"起止日期",required:!0},{field:"target",component:"InputTextArea",label:"目标描述",componentProps:{placeholder:"请输入你的阶段性工作目标",rows:4},required:!0},{field:"metrics",component:"InputTextArea",label:"衡量标准",componentProps:{placeholder:"请输入衡量标准",rows:4},required:!0},{field:"client",component:"Input",label:"客户",helpMessage:"目标的服务对象",subLabel:"( 选填 )",componentProps:{placeholder:"请描述你服务的客户，内部客户直接 @姓名／工号"}},{field:"inviteer",component:"Input",label:"邀评人",subLabel:"( 选填 )",componentProps:{placeholder:"请直接 @姓名／工号，最多可邀请 5 人"}},{field:"weights",component:"InputNumber",label:"权重",subLabel:"( 选填 )",componentProps:{formatter:e=>e?`${e}%`:"",parser:e=>e.replace("%",""),placeholder:"请输入"}},{field:"disclosure",component:"RadioGroup",label:"目标公开",itemProps:{extra:"客户、邀评人默认被分享"},componentProps:{options:[{label:"公开",value:"1"},{label:"部分公开",value:"2"},{label:"不公开",value:"3"}]}},{field:"disclosurer",component:"Select",label:" ",show:({model:e})=>"2"===e.disclosure,componentProps:{placeholder:"公开给",mode:"multiple",options:[{label:"同事1",value:"1"},{label:"同事2",value:"2"},{label:"同事3",value:"3"}]}}];var c=t({components:{BasicForm:e,PageWrapper:a},setup(){const{createMessage:e}=o(),[t,{validate:i,setProps:s}]=l({labelCol:{span:7},wrapperCol:{span:10},schemas:d,actionColOptions:{offset:8},submitButtonOptions:{text:"提交"},submitFunc:async function(){try{await i(),s({submitButtonOptions:{loading:!0}}),setTimeout((()=>{s({submitButtonOptions:{loading:!1}}),e.success("提交成功！")}),2e3)}catch(t){}}});return{register:t}}});const m=n("data-v-5cbaa0f1"),u=m(((e,t,o,n,a,l)=>{const d=i("BasicForm"),c=i("PageWrapper");return s(),r(c,{title:"基础表单",contentBackground:"",content:" 表单页用于向用户收集或验证信息，基础表单常见于数据项较少的表单场景。",contentClass:"p-4"},{default:m((()=>[p(d,{onRegister:e.register},null,8,["onRegister"])])),_:1})}));c.render=u,c.__scopeId="data-v-5cbaa0f1";export default c;
