import{Buffer as c}from"node:buffer";import a from"./Uint8ArrayFromObject.js";import i from"./decrypt.js";var f=async(e,o,n,r)=>{try{const{iv:t,data:m}=await n.get(o,{type:"json"});return JSON.parse(c.from(await i(await a(m),e??"",await a(t))).toString())[r]}catch{return{error:`Cannot access: ${r}`}}};export{f as default};
