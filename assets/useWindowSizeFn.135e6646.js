import{bu as e,bY as n,bZ as t}from"./index.ca0293b2.js";function i(i,s=150,r){let o=()=>{i()};const[a,d]=e(o,s,r);o=a;const m=()=>{r&&r.immediate&&o(),window.addEventListener("resize",o)},b=()=>{window.removeEventListener("resize",o),d()};return n((()=>{m()})),t((()=>{b()})),[m,b]}export{i as u};
