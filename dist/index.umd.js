!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?r(exports,require("bsv-wasm"),require("buffer"),require("fs"),require("path"),require("os"),require("sigma-protocol")):"function"==typeof define&&define.amd?define(["exports","bsv-wasm","buffer","fs","path","os","sigma-protocol"],r):r((t||self).js1SatOrd={},t.bsvWasm,t.buffer,t.fs,t.path,t.os,t.sigmaProtocol)}(this,function(t,r,e,n,o,i,s){function a(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var u=/*#__PURE__*/a(n),c=/*#__PURE__*/a(o),d=/*#__PURE__*/a(i);function f(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}function l(t,r){var e="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(e)return(e=e.call(t)).next.bind(e);if(Array.isArray(t)||(e=function(t,r){if(t){if("string"==typeof t)return f(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?f(t,r):void 0}}(t))||r&&t&&"number"==typeof t.length){e&&(t=e);var n=0;return function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}const p=/(?:^|^)\s*(?:export\s+)?([\w.-]+)(?:\s*=\s*?|:\s+?)(\s*'(?:\\'|[^'])*'|\s*"(?:\\"|[^"])*"|\s*`(?:\\`|[^`])*`|[^#\r\n]+)?\s*(?:#.*)?(?:$|$)/gm;function _(t){console.log(`[dotenv@16.0.3][DEBUG] ${t}`)}const g={config:function(t){let r=c.default.resolve(process.cwd(),".env"),e="utf8";const n=Boolean(t&&t.debug),o=Boolean(t&&t.override);var i;t&&(null!=t.path&&(r="~"===(i=t.path)[0]?c.default.join(d.default.homedir(),i.slice(1)):i),null!=t.encoding&&(e=t.encoding));try{const t=g.parse(u.default.readFileSync(r,{encoding:e}));return Object.keys(t).forEach(function(r){Object.prototype.hasOwnProperty.call(process.env,r)?(!0===o&&(process.env[r]=t[r]),n&&_(!0===o?`"${r}" is already defined in \`process.env\` and WAS overwritten`:`"${r}" is already defined in \`process.env\` and was NOT overwritten`)):process.env[r]=t[r]}),{parsed:t}}catch(t){return n&&_(`Failed to load ${r} ${t.message}`),{error:t}}},parse:function(t){const r={};let e,n=t.toString();for(n=n.replace(/\r\n?/gm,"\n");null!=(e=p.exec(n));){const t=e[1];let n=e[2]||"";n=n.trim();const o=n[0];n=n.replace(/^(['"`])([\s\S]*)\1$/gm,"$2"),'"'===o&&(n=n.replace(/\\n/g,"\n"),n=n.replace(/\\r/g,"\r")),r[t]=n}return r}};var v=g.config,m=g.parse,h=g;h.config=v,h.parse=m;var y=function(t){for(var r=[],e=0,n=t.length;e<n;e++){var o=Number(t.charCodeAt(e)).toString(16);r.push(o)}return r.join("")};v();var x=function(t,n,o,i){var s="";if(void 0!==n&&void 0!==o){var a=y("ord"),u=e.Buffer.from(n,"base64").toString("hex");s="OP_0 OP_IF "+a+" OP_1 "+y(o)+" OP_0 "+u+" OP_ENDIF"}var c=t.get_locking_script().to_asm_string()+(s?" "+s:"");if(i&&null!=i&&i.app&&null!=i&&i.type){c=c+" OP_RETURN "+y("1PuQa7K62MiKCtssSLKy1kh56WWU7MtUR5")+" "+y("SET");for(var d=0,f=Object.entries(i);d<f.length;d++){var l=f[d],p=l[0],_=l[1];"cmd"!==p&&(c=c+" "+y(p)+" "+y(_))}}return r.Script.from_asm_string(c)};t.P2PKH_FULL_INPUT_SIZE=148,t.P2PKH_INPUT_SCRIPT_SIZE=107,t.P2PKH_OUTPUT_SIZE=34,t.buildInscription=x,t.buildReinscriptionTemplate=function(t,n,o,i){try{var s=new r.Transaction(1,0),a=new r.TxIn(e.Buffer.from(t.txid,"hex"),t.vout,r.Script.from_asm_string(t.script));s.add_input(a);var u=x(r.P2PKHAddress.from_string(n),null==o?void 0:o.dataB64,null==o?void 0:o.contentType,i),c=new r.TxOut(BigInt(1),u);return s.add_output(c),Promise.resolve(s)}catch(t){return Promise.reject(t)}},t.createOrdinal=function(t,n,o,i,a,u,c,d,f,p){void 0===f&&(f=[]);try{var _,g=function(e){if(!p&&_){var n=v.sign(o,r.SigHash.ALL|r.SigHash.FORKID,0,r.Script.from_asm_string(t.script),BigInt(t.satoshis));_.set_unlocking_script(r.Script.from_asm_string(n.to_hex()+" "+o.to_public_key().to_hex())),v.set_input(0,_)}return v},v=p||new r.Transaction(1,0);p||(_=new r.TxIn(e.Buffer.from(t.txid,"hex"),t.vout,r.Script.from_asm_string("")),v.add_input(_));var m=x(r.P2PKHAddress.from_string(n),u.dataB64,u.contentType,c),h=new r.TxOut(BigInt(1),m);v.add_output(h);for(var y,P=l(f);!(y=P()).done;){var S=y.value,I=new r.TxOut(S.amount,r.P2PKHAddress.from_string(S.to).get_locking_script());v.add_output(I)}for(var T,w=0n,b=v.get_noutputs(),O=l(Array(b).keys());!(T=O()).done;){var B;w+=(null==(B=v.get_output(T.value))?void 0:B.get_satoshis())||0n}var k=r.P2PKHAddress.from_string(i).get_locking_script(),A=Math.ceil(a*(v.get_size()+34+107)),H=BigInt(t.satoshis)-w-BigInt(A);if(H<0)throw new Error("Inadequate satoshis for fee");if(H>0){var j=new r.TxOut(BigInt(H),k);v.add_output(j)}var K=null==d?void 0:d.idKey,E=null==d?void 0:d.keyHost,U=function(){if(!K)return function(){if(E){var t=null==d?void 0:d.authToken,r=new s.Sigma(v);return function(e,n){try{var o=Promise.resolve(r.remoteSign(E,t)).then(function(t){v=t.signedTx})}catch(t){return n(t)}return o&&o.then?o.then(void 0,n):o}(0,function(t){throw console.log(t),new Error("Remote signing to "+E+" failed")})}}();var t=new s.Sigma(v).sign(K);v=t.signedTx}();return Promise.resolve(U&&U.then?U.then(g):g())}catch(t){return Promise.reject(t)}},t.sendOrdinal=function(t,n,o,i,s,a,u,c,d,f){void 0===f&&(f=[]);try{var p=new r.Transaction(1,0),_=new r.TxIn(e.Buffer.from(n.txid,"hex"),n.vout,r.Script.from_asm_string(""));p.add_input(_);var g,v=new r.TxIn(e.Buffer.from(t.txid,"hex"),t.vout,r.Script.from_asm_string(""));p.add_input(v);var m=r.P2PKHAddress.from_string(u);g=null!=c&&c.dataB64&&null!=c&&c.contentType?x(m,c.dataB64,c.contentType,d):m.get_locking_script();var h=new r.TxOut(BigInt(1),g);p.add_output(h);for(var y,P=l(f);!(y=P()).done;){var S=y.value,I=new r.TxOut(S.amount,r.P2PKHAddress.from_string(S.to).get_locking_script());p.add_output(I)}for(var T,w=0n,b=p.get_noutputs(),O=l(Array(b).keys());!(T=O()).done;){var B;w+=(null==(B=p.get_output(T.value))?void 0:B.get_satoshis())||0n}var k=r.P2PKHAddress.from_string(i).get_locking_script(),A=Math.ceil(s*(p.get_size()+34+214)),H=BigInt(t.satoshis)-w-BigInt(A),j=new r.TxOut(H,k);p.add_output(j);var K=p.sign(a,r.SigHash.InputOutput,0,r.Script.from_asm_string(n.script),BigInt(n.satoshis));_.set_unlocking_script(r.Script.from_asm_string(K.to_hex()+" "+a.to_public_key().to_hex())),p.set_input(0,_);var E=p.sign(o,r.SigHash.InputOutput,1,r.Script.from_asm_string(t.script),BigInt(t.satoshis));return v.set_unlocking_script(r.Script.from_asm_string(E.to_hex()+" "+o.to_public_key().to_hex())),p.set_input(1,v),Promise.resolve(p)}catch(t){return Promise.reject(t)}},t.sendUtxos=function(t,n,o,i){try{for(var s,a=new r.Transaction(1,0),u=0,c=l(t||[]);!(s=c()).done;)u+=s.value.satoshis;var d=u-i;console.log({feeSats:i,satsIn:u,satsOut:d}),a.add_output(new r.TxOut(BigInt(d),o.get_locking_script()));for(var f,p=0,_=l(t||[]);!(f=_()).done;){var g=f.value;console.log({u:g});var v=new r.TxIn(e.Buffer.from(g.txid,"hex"),g.vout,r.Script.from_asm_string(""));console.log({inx:v}),v.set_satoshis(BigInt(g.satoshis)),a.add_input(v);var m=a.sign(n,r.SigHash.InputOutputs,p,r.Script.from_asm_string(g.script),BigInt(g.satoshis));v.set_unlocking_script(r.Script.from_asm_string(m.to_hex()+" "+n.to_public_key().to_hex())),a.set_input(p,v),p++}return Promise.resolve(a)}catch(t){return Promise.reject(t)}}});
//# sourceMappingURL=index.umd.js.map
