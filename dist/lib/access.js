import{Buffer as i}from"node:buffer";import c from"./Decrypt.js";import t from"./Uint8ArrayFromObject.js";var f=async(e,a,o,m)=>{try{const{iv:r,data:p}=await o.get(a,{type:"json"});return JSON.parse(i.from(await c(await t(p),e??"",await t(r))).toString())[m]}catch{}};export{f as default};
