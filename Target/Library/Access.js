import i from"./Decrypt.js";import t from"./Uint8ArrayFromObject.js";import{Buffer as c}from"node:buffer";var f=async(e,a,o,m)=>{try{const{Vector:r,Data:p}=await o.get(a,{type:"json"});return JSON.parse(c.from(await i(await t(p),e??"",await t(r))).toString())[m]}catch{}};export{f as default};
