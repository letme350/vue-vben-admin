import{d as e,aK as s,h as i,o as r,i as t,j as a,w as l,k as n,aL as o,aM as m}from"./index.13aefb6f.js";import{I as p}from"./index.cd79f189.js";import"./vendor.3b1829c7.js";import"./LeftOutlined.547a5ef5.js";import"./RightOutlined.6352f3be.js";var u=e({name:"TableImage",components:{Image:p,PreviewGroup:p.PreviewGroup},props:{imgList:{type:Array,default:null},size:{type:Number,default:40}},setup(){const{prefixCls:e}=s("basic-table-img");return{prefixCls:e}}});u.render=function(e,s,p,u,f,d){const c=i("Image"),g=i("PreviewGroup");return e.imgList&&e.imgList.length?(r(),t("div",{key:0,class:e.prefixCls},[a(g,null,{default:l((()=>[(r(!0),t(o,null,m(e.imgList,(s=>(r(),t(c,{key:s,width:e.size,src:s},null,8,["width","src"])))),128))])),_:1})],2)):n("",!0)};export default u;