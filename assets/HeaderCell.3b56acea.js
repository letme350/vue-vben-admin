import{d as e,aV as l,aW as t,aK as s,$ as a,h as r,o as n,i,w as o,l as d,k as p,aL as u,m as c}from"./index.ca0293b2.js";import"./vendor.3b1829c7.js";var m=e({name:"TableHeaderCell",components:{EditTableHeaderCell:l((()=>t((()=>import("./index.79f246d7.js").then((function(e){return e.E}))),["/assets/index.79f246d7.js","/assets/index.cdca3ec8.css","/assets/index.ca0293b2.js","/assets/index.4e23aa17.css","/assets/vendor.3b1829c7.js","/assets/vendor.4a5fa02d.css","/assets/index.23bcb373.js","/assets/index.1ba2f6be.css","/assets/SearchOutlined.d9cc3823.js","/assets/CheckOutlined.a0c62bc8.js","/assets/DownOutlined.6480d9be.js","/assets/index.747dc0f6.js","/assets/index.897ebc3a.css","/assets/index.8aafcec1.js","/assets/index.0edc9df2.css","/assets/responsiveObserve.c545f1cc.js","/assets/index.8931e3d6.js","/assets/index.bdc9bb0d.css","/assets/findIndex.a959c21e.js","/assets/isEqual.6bad97d6.js","/assets/_baseProperty.74f89655.js","/assets/toInteger.34722792.js","/assets/index.7df2bb45.js","/assets/index.a24eb58c.js","/assets/index.58401fe3.css","/assets/index.30ae9ad5.js","/assets/index.3f6059fa.css","/assets/UpOutlined.0ef8cad0.js","/assets/index.f630c8e6.js","/assets/index.771b84bb.css","/assets/EyeOutlined.ba199c78.js","/assets/index.4340cfa4.js","/assets/index.c7b34b4b.css","/assets/colors.d5f042e5.js","/assets/RightOutlined.1201c967.js","/assets/RedoOutlined.7ed439dc.js","/assets/index.b48f5073.js","/assets/index.45c1fb22.css","/assets/EllipsisOutlined.70395492.js","/assets/types.efa91daf.js","/assets/Tree.be2474a1.js","/assets/util.9205dd12.js","/assets/useAttrs.93b544a4.js","/assets/index.95c10fda.js","/assets/index.20066e29.css","/assets/index.0f0c99ff.js","/assets/index.17a17641.css","/assets/uuid.e47b941f.js","/assets/uuid.1d685bc0.css","/assets/index.0ab3a9b2.js","/assets/index.3b27b556.css","/assets/DeleteOutlined.ce2f632a.js","/assets/index.58d8ddc3.js","/assets/index.4d45b084.css","/assets/useTimeout.429405d0.js","/assets/useWindowSizeFn.135e6646.js","/assets/index.db20b6ca.js","/assets/index.14d351de.css","/assets/index.1cb29158.js","/assets/index.121e7eba.css","/assets/domUtils.3f0b517b.js","/assets/_stringToArray.2e032d51.js","/assets/useScrollTo.44e3ca92.js","/assets/animation.6cb888e9.js","/assets/FullscreenOutlined.ec7aae97.js","/assets/index.2a3d155c.js","/assets/index.2b38113f.css","/assets/index.19813759.js","/assets/index.5231c462.js","/assets/index.5e8b94d8.css","/assets/LeftOutlined.d1c037c6.js","/assets/download.a4df27cf.js","/assets/index.f1948b4f.js","/assets/index.c5255485.css","/assets/DoubleLeftOutlined.f7f11796.js","/assets/DoubleRightOutlined.b183b394.js","/assets/zh_CN.8094f4d6.js","/assets/scrollTo.c1e0f75f.js","/assets/transButton.bf1a4a67.js","/assets/CaretDownFilled.d4286751.js","/assets/clickOutside.f1ee885f.js","/assets/useSortable.fcbfb6fb.js","/assets/SettingOutlined.e10f612a.js","/assets/useExpose.8730c60f.js","/assets/useForm.65972378.js"]))),BasicHelp:l((()=>t((()=>import("./BasicHelp.1548e54d.js")),["/assets/BasicHelp.1548e54d.js","/assets/index.db20b6ca.js","/assets/index.14d351de.css","/assets/index.ca0293b2.js","/assets/index.4e23aa17.css","/assets/vendor.3b1829c7.js","/assets/vendor.4a5fa02d.css","/assets/index.1cb29158.js","/assets/index.121e7eba.css","/assets/domUtils.3f0b517b.js","/assets/_stringToArray.2e032d51.js","/assets/RightOutlined.1201c967.js","/assets/index.95c10fda.js","/assets/index.20066e29.css","/assets/useTimeout.429405d0.js","/assets/useScrollTo.44e3ca92.js","/assets/animation.6cb888e9.js"])))},props:{column:{type:Object,default:{}}},setup(e){const{prefixCls:l}=s("basic-table-header-cell");return{prefixCls:l,getIsEdit:a((()=>{var l;return!!(null==(l=e.column)?void 0:l.edit)})),getTitle:a((()=>{var l;return null==(l=e.column)?void 0:l.customTitle})),getHelpMessage:a((()=>{var l;return null==(l=e.column)?void 0:l.helpMessage}))}}});const _={key:1};m.render=function(e,l,t,s,a,m){const g=r("EditTableHeaderCell"),f=r("BasicHelp");return n(),i(u,null,[e.getIsEdit?(n(),i(g,{key:0},{default:o((()=>[c(d(e.getTitle),1)])),_:1})):(n(),i("span",_,d(e.getTitle),1)),e.getHelpMessage?(n(),i(f,{key:2,text:e.getHelpMessage,class:`${e.prefixCls}__help`},null,8,["text","class"])):p("",!0)],64)};export default m;
