var a=async(t,e,r)=>new Uint8Array(await crypto.subtle.decrypt({name:"AES-GCM",iv:r,tagLength:128},await crypto.subtle.importKey("jwk",{kty:"oct",k:e,alg:"A256GCM",ext:!0},{name:"AES-GCM"},!1,["encrypt","decrypt"]),t));export { a as default };

