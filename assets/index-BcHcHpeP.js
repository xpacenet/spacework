var cc=s=>{throw TypeError(s)};var Ma=(s,t,e)=>t.has(s)||cc("Cannot "+e);var b=(s,t,e)=>(Ma(s,t,"read from private field"),e?e.call(s):t.get(s)),at=(s,t,e)=>t.has(s)?cc("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(s):t.set(s,e),ft=(s,t,e,n)=>(Ma(s,t,"write to private field"),n?n.call(s,e):t.set(s,e),e),lt=(s,t,e)=>(Ma(s,t,"access private method"),e);var us=(s,t,e,n)=>({set _(i){ft(s,t,i,e)},get _(){return b(s,t,n)}});import{j as vd}from"./trystero-zRWdb5Z0.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();const xd="modulepreload",yd=function(s,t){return new URL(s,t).href},hc={},hl=function(t,e,n){let i=Promise.resolve();if(e&&e.length>0){const o=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),l=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));i=Promise.allSettled(e.map(c=>{if(c=yd(c,n),c in hc)return;hc[c]=!0;const h=c.endsWith(".css"),u=h?'[rel="stylesheet"]':"";if(!!n)for(let g=o.length-1;g>=0;g--){const _=o[g];if(_.href===c&&(!h||_.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${u}`))return;const f=document.createElement("link");if(f.rel=h?"stylesheet":xd,h||(f.as="script"),f.crossOrigin="",f.href=c,l&&f.setAttribute("nonce",l),document.head.appendChild(f),h)return new Promise((g,_)=>{f.addEventListener("load",g),f.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${c}`)))})}))}function r(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return i.then(o=>{for(const a of o||[])a.status==="rejected"&&r(a.reason);return t().catch(r)})};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const kl="165",Md=0,uc=1,Sd=2,au=1,lu=2,ei=3,Di=0,an=1,pn=2,Ci=0,Ys=1,dc=2,fc=3,pc=4,Ed=5,qi=100,wd=101,bd=102,Td=103,Ad=104,Rd=200,Cd=201,Pd=202,Ld=203,ul=204,dl=205,Id=206,Dd=207,Nd=208,Ud=209,Od=210,Fd=211,Bd=212,zd=213,kd=214,Hd=0,Gd=1,Vd=2,Jo=3,Wd=4,Xd=5,Zd=6,Yd=7,cu=0,qd=1,$d=2,Pi=0,Kd=1,Jd=2,jd=3,hu=4,Qd=5,tf=6,ef=7,uu=300,ur=301,dr=302,fl=303,pl=304,da=306,ml=1e3,Ki=1001,gl=1002,En=1003,nf=1004,yo=1005,Ln=1006,Sa=1007,Ji=1008,Ni=1009,sf=1010,rf=1011,jo=1012,du=1013,fr=1014,Ri=1015,fa=1016,fu=1017,pu=1018,pr=1020,of=35902,af=1021,lf=1022,Gn=1023,cf=1024,hf=1025,qs=1026,mr=1027,uf=1028,mu=1029,df=1030,gu=1031,_u=1033,Ea=33776,wa=33777,ba=33778,Ta=33779,mc=35840,gc=35841,_c=35842,vc=35843,xc=36196,yc=37492,Mc=37496,Sc=37808,Ec=37809,wc=37810,bc=37811,Tc=37812,Ac=37813,Rc=37814,Cc=37815,Pc=37816,Lc=37817,Ic=37818,Dc=37819,Nc=37820,Uc=37821,Aa=36492,Oc=36494,Fc=36495,ff=36283,Bc=36284,zc=36285,kc=36286,pf=3200,mf=3201,vu=0,gf=1,wi="",Bn="srgb",zi="srgb-linear",Hl="display-p3",pa="display-p3-linear",Qo="linear",Se="srgb",ta="rec709",ea="p3",ds=7680,Hc=519,_f=512,vf=513,xf=514,xu=515,yf=516,Mf=517,Sf=518,Ef=519,_l=35044,Gc="300 es",ui=2e3,na=2001;class vr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}}const Ke=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ra=Math.PI/180,vl=180/Math.PI;function Li(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ke[s&255]+Ke[s>>8&255]+Ke[s>>16&255]+Ke[s>>24&255]+"-"+Ke[t&255]+Ke[t>>8&255]+"-"+Ke[t>>16&15|64]+Ke[t>>24&255]+"-"+Ke[e&63|128]+Ke[e>>8&255]+"-"+Ke[e>>16&255]+Ke[e>>24&255]+Ke[n&255]+Ke[n>>8&255]+Ke[n>>16&255]+Ke[n>>24&255]).toLowerCase()}function qe(s,t,e){return Math.max(t,Math.min(e,s))}function wf(s,t){return(s%t+t)%t}function Ca(s,t,e){return(1-e)*s+e*t}function Hn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function me(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class yt{constructor(t=0,e=0){yt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(qe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class $t{constructor(t,e,n,i,r,o,a,l,c){$t.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c)}set(t,e,n,i,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],_=i[0],m=i[3],p=i[6],E=i[1],v=i[4],M=i[7],U=i[2],A=i[5],T=i[8];return r[0]=o*_+a*E+l*U,r[3]=o*m+a*v+l*A,r[6]=o*p+a*M+l*T,r[1]=c*_+h*E+u*U,r[4]=c*m+h*v+u*A,r[7]=c*p+h*M+u*T,r[2]=d*_+f*E+g*U,r[5]=d*m+f*v+g*A,r[8]=d*p+f*M+g*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,g=e*u+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(i*c-h*n)*_,t[2]=(a*n-i*o)*_,t[3]=d*_,t[4]=(h*e-i*l)*_,t[5]=(i*r-a*e)*_,t[6]=f*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Pa.makeScale(t,e)),this}rotate(t){return this.premultiply(Pa.makeRotation(-t)),this}translate(t,e){return this.premultiply(Pa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Pa=new $t;function yu(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function ia(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function bf(){const s=ia("canvas");return s.style.display="block",s}const Vc={};function Gl(s){s in Vc||(Vc[s]=!0,console.warn(s))}function Tf(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const Wc=new $t().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Xc=new $t().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Mo={[zi]:{transfer:Qo,primaries:ta,toReference:s=>s,fromReference:s=>s},[Bn]:{transfer:Se,primaries:ta,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[pa]:{transfer:Qo,primaries:ea,toReference:s=>s.applyMatrix3(Xc),fromReference:s=>s.applyMatrix3(Wc)},[Hl]:{transfer:Se,primaries:ea,toReference:s=>s.convertSRGBToLinear().applyMatrix3(Xc),fromReference:s=>s.applyMatrix3(Wc).convertLinearToSRGB()}},Af=new Set([zi,pa]),ue={enabled:!0,_workingColorSpace:zi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Af.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,t,e){if(this.enabled===!1||t===e||!t||!e)return s;const n=Mo[t].toReference,i=Mo[e].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,t){return this.convert(s,this._workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this._workingColorSpace)},getPrimaries:function(s){return Mo[s].primaries},getTransfer:function(s){return s===wi?Qo:Mo[s].transfer}};function $s(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function La(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let fs;class Rf{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{fs===void 0&&(fs=ia("canvas")),fs.width=t.width,fs.height=t.height;const n=fs.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=fs}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ia("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=$s(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor($s(e[n]/255)*255):e[n]=$s(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Cf=0;class Mu{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Cf++}),this.uuid=Li(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Ia(i[o].image)):r.push(Ia(i[o]))}else r=Ia(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function Ia(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Rf.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Pf=0;class nn extends vr{constructor(t=nn.DEFAULT_IMAGE,e=nn.DEFAULT_MAPPING,n=Ki,i=Ki,r=Ln,o=Ji,a=Gn,l=Ni,c=nn.DEFAULT_ANISOTROPY,h=wi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Pf++}),this.uuid=Li(),this.name="",this.source=new Mu(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new yt(0,0),this.repeat=new yt(1,1),this.center=new yt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $t,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==uu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ml:t.x=t.x-Math.floor(t.x);break;case Ki:t.x=t.x<0?0:1;break;case gl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ml:t.y=t.y-Math.floor(t.y);break;case Ki:t.y=t.y<0?0:1;break;case gl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}nn.DEFAULT_IMAGE=null;nn.DEFAULT_MAPPING=uu;nn.DEFAULT_ANISOTROPY=1;class Te{constructor(t=0,e=0,n=0,i=1){Te.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(c+1)/2,M=(f+1)/2,U=(p+1)/2,A=(h+d)/4,T=(u+_)/4,O=(g+m)/4;return v>M&&v>U?v<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(v),i=A/n,r=T/n):M>U?M<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(M),n=A/i,r=O/i):U<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(U),n=T/r,i=O/r),this.set(n,i,r,e),this}let E=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(u-_)/E,this.z=(d-h)/E,this.w=Math.acos((c+f+p-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Lf extends vr{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Te(0,0,t,e),this.scissorTest=!1,this.viewport=new Te(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ln,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new nn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Mu(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ls extends Lf{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Su extends nn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=En,this.minFilter=En,this.wrapR=Ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class If extends nn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=En,this.minFilter=En,this.wrapR=Ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class go{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const d=r[o+0],f=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=_;return}if(u!==_||l!==d||c!==f||h!==g){let m=1-a;const p=l*d+c*f+h*g+u*_,E=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){const U=Math.sqrt(v),A=Math.atan2(U,p*E);m=Math.sin(m*A)/U,a=Math.sin(a*A)/U}const M=a*E;if(l=l*m+d*M,c=c*m+f*M,h=h*m+g*M,u=u*m+_*M,m===1-a){const U=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=U,c*=U,h*=U,u*=U}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,o){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+h*u+l*f-c*d,t[e+1]=l*g+h*d+c*u-a*f,t[e+2]=c*g+h*f+a*d-l*u,t[e+3]=h*g-a*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(r/2),d=l(n/2),f=l(i/2),g=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-i)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+c)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(r-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-i)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(qe(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(t=0,e=0,n=0){L.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Zc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Zc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-r*i),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=i+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Da.copy(this).projectOnVector(t),this.sub(Da)}reflect(t){return this.sub(Da.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(qe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Da=new L,Zc=new go;class _o{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(wn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(wn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=wn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,wn):wn.fromBufferAttribute(r,o),wn.applyMatrix4(t.matrixWorld),this.expandByPoint(wn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),So.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),So.copy(n.boundingBox)),So.applyMatrix4(t.matrixWorld),this.union(So)}const i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,wn),wn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(wr),Eo.subVectors(this.max,wr),ps.subVectors(t.a,wr),ms.subVectors(t.b,wr),gs.subVectors(t.c,wr),mi.subVectors(ms,ps),gi.subVectors(gs,ms),Hi.subVectors(ps,gs);let e=[0,-mi.z,mi.y,0,-gi.z,gi.y,0,-Hi.z,Hi.y,mi.z,0,-mi.x,gi.z,0,-gi.x,Hi.z,0,-Hi.x,-mi.y,mi.x,0,-gi.y,gi.x,0,-Hi.y,Hi.x,0];return!Na(e,ps,ms,gs,Eo)||(e=[1,0,0,0,1,0,0,0,1],!Na(e,ps,ms,gs,Eo))?!1:(wo.crossVectors(mi,gi),e=[wo.x,wo.y,wo.z],Na(e,ps,ms,gs,Eo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,wn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(wn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(qn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const qn=[new L,new L,new L,new L,new L,new L,new L,new L],wn=new L,So=new _o,ps=new L,ms=new L,gs=new L,mi=new L,gi=new L,Hi=new L,wr=new L,Eo=new L,wo=new L,Gi=new L;function Na(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Gi.fromArray(s,r);const a=i.x*Math.abs(Gi.x)+i.y*Math.abs(Gi.y)+i.z*Math.abs(Gi.z),l=t.dot(Gi),c=e.dot(Gi),h=n.dot(Gi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Df=new _o,br=new L,Ua=new L;class Vl{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Df.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;br.subVectors(t,this.center);const e=br.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(br,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ua.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(br.copy(t.center).add(Ua)),this.expandByPoint(br.copy(t.center).sub(Ua))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const $n=new L,Oa=new L,bo=new L,_i=new L,Fa=new L,To=new L,Ba=new L;class Eu{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,$n)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=$n.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):($n.copy(this.origin).addScaledVector(this.direction,e),$n.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Oa.copy(t).add(e).multiplyScalar(.5),bo.copy(e).sub(t).normalize(),_i.copy(this.origin).sub(Oa);const r=t.distanceTo(e)*.5,o=-this.direction.dot(bo),a=_i.dot(this.direction),l=-_i.dot(bo),c=_i.lengthSq(),h=Math.abs(1-o*o);let u,d,f,g;if(h>0)if(u=o*l-a,d=o*a-l,g=r*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Oa).addScaledVector(bo,d),f}intersectSphere(t,e){$n.subVectors(t.center,this.origin);const n=$n.dot(this.direction),i=$n.dot($n)-n*n,r=t.radius*t.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,$n)!==null}intersectTriangle(t,e,n,i,r){Fa.subVectors(e,t),To.subVectors(n,t),Ba.crossVectors(Fa,To);let o=this.direction.dot(Ba),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;_i.subVectors(this.origin,t);const l=a*this.direction.dot(To.crossVectors(_i,To));if(l<0)return null;const c=a*this.direction.dot(Fa.cross(_i));if(c<0||l+c>o)return null;const h=-a*_i.dot(Ba);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ee{constructor(t,e,n,i,r,o,a,l,c,h,u,d,f,g,_,m){Ee.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c,h,u,d,f,g,_,m)}set(t,e,n,i,r,o,a,l,c,h,u,d,f,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ee().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/_s.setFromMatrixColumn(t,0).length(),r=1/_s.setFromMatrixColumn(t,1).length(),o=1/_s.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=o*h,f=o*u,g=a*h,_=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+g*c,e[5]=d-_*c,e[9]=-a*l,e[2]=_-d*c,e[6]=g+f*c,e[10]=o*l}else if(t.order==="YXZ"){const d=l*h,f=l*u,g=c*h,_=c*u;e[0]=d+_*a,e[4]=g*a-f,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-g,e[6]=_+d*a,e[10]=o*l}else if(t.order==="ZXY"){const d=l*h,f=l*u,g=c*h,_=c*u;e[0]=d-_*a,e[4]=-o*u,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*h,e[9]=_-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const d=o*h,f=o*u,g=a*h,_=a*u;e[0]=l*h,e[4]=g*c-f,e[8]=d*c+_,e[1]=l*u,e[5]=_*c+d,e[9]=f*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const d=o*l,f=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=_-d*u,e[8]=g*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*u+g,e[10]=d-_*u}else if(t.order==="XZY"){const d=o*l,f=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+_,e[5]=o*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=a*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Nf,t,Uf)}lookAt(t,e,n){const i=this.elements;return un.subVectors(t,e),un.lengthSq()===0&&(un.z=1),un.normalize(),vi.crossVectors(n,un),vi.lengthSq()===0&&(Math.abs(n.z)===1?un.x+=1e-4:un.z+=1e-4,un.normalize(),vi.crossVectors(n,un)),vi.normalize(),Ao.crossVectors(un,vi),i[0]=vi.x,i[4]=Ao.x,i[8]=un.x,i[1]=vi.y,i[5]=Ao.y,i[9]=un.y,i[2]=vi.z,i[6]=Ao.z,i[10]=un.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],E=n[3],v=n[7],M=n[11],U=n[15],A=i[0],T=i[4],O=i[8],w=i[12],x=i[1],P=i[5],D=i[9],F=i[13],B=i[2],j=i[6],V=i[10],et=i[14],J=i[3],_t=i[7],wt=i[11],Ct=i[15];return r[0]=o*A+a*x+l*B+c*J,r[4]=o*T+a*P+l*j+c*_t,r[8]=o*O+a*D+l*V+c*wt,r[12]=o*w+a*F+l*et+c*Ct,r[1]=h*A+u*x+d*B+f*J,r[5]=h*T+u*P+d*j+f*_t,r[9]=h*O+u*D+d*V+f*wt,r[13]=h*w+u*F+d*et+f*Ct,r[2]=g*A+_*x+m*B+p*J,r[6]=g*T+_*P+m*j+p*_t,r[10]=g*O+_*D+m*V+p*wt,r[14]=g*w+_*F+m*et+p*Ct,r[3]=E*A+v*x+M*B+U*J,r[7]=E*T+v*P+M*j+U*_t,r[11]=E*O+v*D+M*V+U*wt,r[15]=E*w+v*F+M*et+U*Ct,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+r*l*u-i*c*u-r*a*d+n*c*d+i*a*f-n*l*f)+_*(+e*l*f-e*c*d+r*o*d-i*o*f+i*c*h-r*l*h)+m*(+e*c*u-e*a*f-r*o*u+n*o*f+r*a*h-n*c*h)+p*(-i*a*h-e*l*u+e*a*d+i*o*u-n*o*d+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],_=t[13],m=t[14],p=t[15],E=u*m*c-_*d*c+_*l*f-a*m*f-u*l*p+a*d*p,v=g*d*c-h*m*c-g*l*f+o*m*f+h*l*p-o*d*p,M=h*_*c-g*u*c+g*a*f-o*_*f-h*a*p+o*u*p,U=g*u*l-h*_*l-g*a*d+o*_*d+h*a*m-o*u*m,A=e*E+n*v+i*M+r*U;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/A;return t[0]=E*T,t[1]=(_*d*r-u*m*r-_*i*f+n*m*f+u*i*p-n*d*p)*T,t[2]=(a*m*r-_*l*r+_*i*c-n*m*c-a*i*p+n*l*p)*T,t[3]=(u*l*r-a*d*r-u*i*c+n*d*c+a*i*f-n*l*f)*T,t[4]=v*T,t[5]=(h*m*r-g*d*r+g*i*f-e*m*f-h*i*p+e*d*p)*T,t[6]=(g*l*r-o*m*r-g*i*c+e*m*c+o*i*p-e*l*p)*T,t[7]=(o*d*r-h*l*r+h*i*c-e*d*c-o*i*f+e*l*f)*T,t[8]=M*T,t[9]=(g*u*r-h*_*r-g*n*f+e*_*f+h*n*p-e*u*p)*T,t[10]=(o*_*r-g*a*r+g*n*c-e*_*c-o*n*p+e*a*p)*T,t[11]=(h*a*r-o*u*r-h*n*c+e*u*c+o*n*f-e*a*f)*T,t[12]=U*T,t[13]=(h*_*i-g*u*i+g*n*d-e*_*d-h*n*m+e*u*m)*T,t[14]=(g*a*i-o*_*i-g*n*l+e*_*l+o*n*m-e*a*m)*T,t[15]=(o*u*i-h*a*i+h*n*l-e*u*l-o*n*d+e*a*d)*T,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,g=r*u,_=o*h,m=o*u,p=a*u,E=l*c,v=l*h,M=l*u,U=n.x,A=n.y,T=n.z;return i[0]=(1-(_+p))*U,i[1]=(f+M)*U,i[2]=(g-v)*U,i[3]=0,i[4]=(f-M)*A,i[5]=(1-(d+p))*A,i[6]=(m+E)*A,i[7]=0,i[8]=(g+v)*T,i[9]=(m-E)*T,i[10]=(1-(d+_))*T,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=_s.set(i[0],i[1],i[2]).length();const o=_s.set(i[4],i[5],i[6]).length(),a=_s.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],bn.copy(this);const c=1/r,h=1/o,u=1/a;return bn.elements[0]*=c,bn.elements[1]*=c,bn.elements[2]*=c,bn.elements[4]*=h,bn.elements[5]*=h,bn.elements[6]*=h,bn.elements[8]*=u,bn.elements[9]*=u,bn.elements[10]*=u,e.setFromRotationMatrix(bn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,i,r,o,a=ui){const l=this.elements,c=2*r/(e-t),h=2*r/(n-i),u=(e+t)/(e-t),d=(n+i)/(n-i);let f,g;if(a===ui)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===na)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=ui){const l=this.elements,c=1/(e-t),h=1/(n-i),u=1/(o-r),d=(e+t)*c,f=(n+i)*h;let g,_;if(a===ui)g=(o+r)*u,_=-2*u;else if(a===na)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const _s=new L,bn=new Ee,Nf=new L(0,0,0),Uf=new L(1,1,1),vi=new L,Ao=new L,un=new L,Yc=new Ee,qc=new go;class Wn{constructor(t=0,e=0,n=0,i=Wn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-qe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(qe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-qe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Yc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Yc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return qc.setFromEuler(this),this.setFromQuaternion(qc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Wn.DEFAULT_ORDER="XYZ";class Wl{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Of=0;const $c=new L,vs=new go,Kn=new Ee,Ro=new L,Tr=new L,Ff=new L,Bf=new go,Kc=new L(1,0,0),Jc=new L(0,1,0),jc=new L(0,0,1),Qc={type:"added"},zf={type:"removed"},xs={type:"childadded",child:null},za={type:"childremoved",child:null};class Xe extends vr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Of++}),this.uuid=Li(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Xe.DEFAULT_UP.clone();const t=new L,e=new Wn,n=new go,i=new L(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ee},normalMatrix:{value:new $t}}),this.matrix=new Ee,this.matrixWorld=new Ee,this.matrixAutoUpdate=Xe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Wl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return vs.setFromAxisAngle(t,e),this.quaternion.multiply(vs),this}rotateOnWorldAxis(t,e){return vs.setFromAxisAngle(t,e),this.quaternion.premultiply(vs),this}rotateX(t){return this.rotateOnAxis(Kc,t)}rotateY(t){return this.rotateOnAxis(Jc,t)}rotateZ(t){return this.rotateOnAxis(jc,t)}translateOnAxis(t,e){return $c.copy(t).applyQuaternion(this.quaternion),this.position.add($c.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Kc,t)}translateY(t){return this.translateOnAxis(Jc,t)}translateZ(t){return this.translateOnAxis(jc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Kn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ro.copy(t):Ro.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Tr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Kn.lookAt(Tr,Ro,this.up):Kn.lookAt(Ro,Tr,this.up),this.quaternion.setFromRotationMatrix(Kn),i&&(Kn.extractRotation(i.matrixWorld),vs.setFromRotationMatrix(Kn),this.quaternion.premultiply(vs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Qc),xs.child=t,this.dispatchEvent(xs),xs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(zf),za.child=t,this.dispatchEvent(za),za.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Kn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Kn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Kn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Qc),xs.child=t,this.dispatchEvent(xs),xs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Tr,t,Ff),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Tr,Bf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++){const a=i[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}Xe.DEFAULT_UP=new L(0,1,0);Xe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Tn=new L,Jn=new L,ka=new L,jn=new L,ys=new L,Ms=new L,th=new L,Ha=new L,Ga=new L,Va=new L;class In{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Tn.subVectors(t,e),i.cross(Tn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){Tn.subVectors(i,e),Jn.subVectors(n,e),ka.subVectors(t,e);const o=Tn.dot(Tn),a=Tn.dot(Jn),l=Tn.dot(ka),c=Jn.dot(Jn),h=Jn.dot(ka),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(c*l-a*h)*d,g=(o*h-a*l)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,jn)===null?!1:jn.x>=0&&jn.y>=0&&jn.x+jn.y<=1}static getInterpolation(t,e,n,i,r,o,a,l){return this.getBarycoord(t,e,n,i,jn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,jn.x),l.addScaledVector(o,jn.y),l.addScaledVector(a,jn.z),l)}static isFrontFacing(t,e,n,i){return Tn.subVectors(n,e),Jn.subVectors(t,e),Tn.cross(Jn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Tn.subVectors(this.c,this.b),Jn.subVectors(this.a,this.b),Tn.cross(Jn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return In.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return In.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return In.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return In.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return In.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let o,a;ys.subVectors(i,n),Ms.subVectors(r,n),Ha.subVectors(t,n);const l=ys.dot(Ha),c=Ms.dot(Ha);if(l<=0&&c<=0)return e.copy(n);Ga.subVectors(t,i);const h=ys.dot(Ga),u=Ms.dot(Ga);if(h>=0&&u<=h)return e.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(ys,o);Va.subVectors(t,r);const f=ys.dot(Va),g=Ms.dot(Va);if(g>=0&&f<=g)return e.copy(r);const _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(Ms,a);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return th.subVectors(r,i),a=(u-h)/(u-h+(f-g)),e.copy(i).addScaledVector(th,a);const p=1/(m+_+d);return o=_*p,a=d*p,e.copy(n).addScaledVector(ys,o).addScaledVector(Ms,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const wu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xi={h:0,s:0,l:0},Co={h:0,s:0,l:0};function Wa(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class te{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Bn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ue.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=ue.workingColorSpace){return this.r=t,this.g=e,this.b=n,ue.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=ue.workingColorSpace){if(t=wf(t,1),e=qe(e,0,1),n=qe(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Wa(o,r,t+1/3),this.g=Wa(o,r,t),this.b=Wa(o,r,t-1/3)}return ue.toWorkingColorSpace(this,i),this}setStyle(t,e=Bn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Bn){const n=wu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=$s(t.r),this.g=$s(t.g),this.b=$s(t.b),this}copyLinearToSRGB(t){return this.r=La(t.r),this.g=La(t.g),this.b=La(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Bn){return ue.fromWorkingColorSpace(Je.copy(this),t),Math.round(qe(Je.r*255,0,255))*65536+Math.round(qe(Je.g*255,0,255))*256+Math.round(qe(Je.b*255,0,255))}getHexString(t=Bn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ue.workingColorSpace){ue.fromWorkingColorSpace(Je.copy(this),e);const n=Je.r,i=Je.g,r=Je.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ue.workingColorSpace){return ue.fromWorkingColorSpace(Je.copy(this),e),t.r=Je.r,t.g=Je.g,t.b=Je.b,t}getStyle(t=Bn){ue.fromWorkingColorSpace(Je.copy(this),t);const e=Je.r,n=Je.g,i=Je.b;return t!==Bn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(xi),this.setHSL(xi.h+t,xi.s+e,xi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(xi),t.getHSL(Co);const n=Ca(xi.h,Co.h,e),i=Ca(xi.s,Co.s,e),r=Ca(xi.l,Co.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Je=new te;te.NAMES=wu;let kf=0;class xr extends vr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:kf++}),this.uuid=Li(),this.name="",this.type="Material",this.blending=Ys,this.side=Di,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ul,this.blendDst=dl,this.blendEquation=qi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new te(0,0,0),this.blendAlpha=0,this.depthFunc=Jo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Hc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ds,this.stencilZFail=ds,this.stencilZPass=ds,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ys&&(n.blending=this.blending),this.side!==Di&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ul&&(n.blendSrc=this.blendSrc),this.blendDst!==dl&&(n.blendDst=this.blendDst),this.blendEquation!==qi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Jo&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Hc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ds&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ds&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ds&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class kr extends xr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wn,this.combine=cu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Oe=new L,Po=new yt;class Dn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=_l,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ri,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return Gl("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Po.fromBufferAttribute(this,e),Po.applyMatrix3(t),this.setXY(e,Po.x,Po.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.applyMatrix3(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.applyMatrix4(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.applyNormalMatrix(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.transformDirection(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Hn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=me(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Hn(e,this.array)),e}setX(t,e){return this.normalized&&(e=me(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Hn(e,this.array)),e}setY(t,e){return this.normalized&&(e=me(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Hn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=me(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Hn(e,this.array)),e}setW(t,e){return this.normalized&&(e=me(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=me(e,this.array),n=me(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=me(e,this.array),n=me(n,this.array),i=me(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=me(e,this.array),n=me(n,this.array),i=me(i,this.array),r=me(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==_l&&(t.usage=this.usage),t}}class bu extends Dn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Tu extends Dn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Ie extends Dn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Hf=0;const _n=new Ee,Xa=new Xe,Ss=new L,dn=new _o,Ar=new _o,Ve=new L;class mn extends vr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Hf++}),this.uuid=Li(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(yu(t)?Tu:bu)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new $t().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return _n.makeRotationFromQuaternion(t),this.applyMatrix4(_n),this}rotateX(t){return _n.makeRotationX(t),this.applyMatrix4(_n),this}rotateY(t){return _n.makeRotationY(t),this.applyMatrix4(_n),this}rotateZ(t){return _n.makeRotationZ(t),this.applyMatrix4(_n),this}translate(t,e,n){return _n.makeTranslation(t,e,n),this.applyMatrix4(_n),this}scale(t,e,n){return _n.makeScale(t,e,n),this.applyMatrix4(_n),this}lookAt(t){return Xa.lookAt(t),Xa.updateMatrix(),this.applyMatrix4(Xa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ss).negate(),this.translate(Ss.x,Ss.y,Ss.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Ie(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _o);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];dn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ve.addVectors(this.boundingBox.min,dn.min),this.boundingBox.expandByPoint(Ve),Ve.addVectors(this.boundingBox.max,dn.max),this.boundingBox.expandByPoint(Ve)):(this.boundingBox.expandByPoint(dn.min),this.boundingBox.expandByPoint(dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vl);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){const n=this.boundingSphere.center;if(dn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Ar.setFromBufferAttribute(a),this.morphTargetsRelative?(Ve.addVectors(dn.min,Ar.min),dn.expandByPoint(Ve),Ve.addVectors(dn.max,Ar.max),dn.expandByPoint(Ve)):(dn.expandByPoint(Ar.min),dn.expandByPoint(Ar.max))}dn.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)Ve.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Ve));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Ve.fromBufferAttribute(a,c),l&&(Ss.fromBufferAttribute(t,c),Ve.add(Ss)),i=Math.max(i,n.distanceToSquared(Ve))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Dn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let O=0;O<n.count;O++)a[O]=new L,l[O]=new L;const c=new L,h=new L,u=new L,d=new yt,f=new yt,g=new yt,_=new L,m=new L;function p(O,w,x){c.fromBufferAttribute(n,O),h.fromBufferAttribute(n,w),u.fromBufferAttribute(n,x),d.fromBufferAttribute(r,O),f.fromBufferAttribute(r,w),g.fromBufferAttribute(r,x),h.sub(c),u.sub(c),f.sub(d),g.sub(d);const P=1/(f.x*g.y-g.x*f.y);isFinite(P)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(P),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(P),a[O].add(_),a[w].add(_),a[x].add(_),l[O].add(m),l[w].add(m),l[x].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let O=0,w=E.length;O<w;++O){const x=E[O],P=x.start,D=x.count;for(let F=P,B=P+D;F<B;F+=3)p(t.getX(F+0),t.getX(F+1),t.getX(F+2))}const v=new L,M=new L,U=new L,A=new L;function T(O){U.fromBufferAttribute(i,O),A.copy(U);const w=a[O];v.copy(w),v.sub(U.multiplyScalar(U.dot(w))).normalize(),M.crossVectors(A,w);const P=M.dot(l[O])<0?-1:1;o.setXYZW(O,v.x,v.y,v.z,P)}for(let O=0,w=E.length;O<w;++O){const x=E[O],P=x.start,D=x.count;for(let F=P,B=P+D;F<B;F+=3)T(t.getX(F+0)),T(t.getX(F+1)),T(t.getX(F+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Dn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new L,r=new L,o=new L,a=new L,l=new L,c=new L,h=new L,u=new L;if(t)for(let d=0,f=t.count;d<f;d+=3){const g=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)i.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ve.fromBufferAttribute(t,e),Ve.normalize(),t.setXYZ(e,Ve.x,Ve.y,Ve.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let f=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new Dn(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new mn,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const eh=new Ee,Vi=new Eu,Lo=new Vl,nh=new L,Es=new L,ws=new L,bs=new L,Za=new L,Io=new L,Do=new yt,No=new yt,Uo=new yt,ih=new L,sh=new L,rh=new L,Oo=new L,Fo=new L;class bt extends Xe{constructor(t=new mn,e=new kr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(r&&a){Io.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(Za.fromBufferAttribute(u,t),o?Io.addScaledVector(Za,h):Io.addScaledVector(Za.sub(e),h))}e.add(Io)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Lo.copy(n.boundingSphere),Lo.applyMatrix4(r),Vi.copy(t.ray).recast(t.near),!(Lo.containsPoint(Vi.origin)===!1&&(Vi.intersectSphere(Lo,nh)===null||Vi.origin.distanceToSquared(nh)>(t.far-t.near)**2))&&(eh.copy(r).invert(),Vi.copy(t.ray).applyMatrix4(eh),!(n.boundingBox!==null&&Vi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Vi)))}_computeIntersections(t,e,n){let i;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],E=Math.max(m.start,f.start),v=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let M=E,U=v;M<U;M+=3){const A=a.getX(M),T=a.getX(M+1),O=a.getX(M+2);i=Bo(this,p,t,n,c,h,u,A,T,O),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const E=a.getX(m),v=a.getX(m+1),M=a.getX(m+2);i=Bo(this,o,t,n,c,h,u,E,v,M),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],E=Math.max(m.start,f.start),v=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let M=E,U=v;M<U;M+=3){const A=M,T=M+1,O=M+2;i=Bo(this,p,t,n,c,h,u,A,T,O),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const E=m,v=m+1,M=m+2;i=Bo(this,o,t,n,c,h,u,E,v,M),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function Gf(s,t,e,n,i,r,o,a){let l;if(t.side===an?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,t.side===Di,a),l===null)return null;Fo.copy(a),Fo.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(Fo);return c<e.near||c>e.far?null:{distance:c,point:Fo.clone(),object:s}}function Bo(s,t,e,n,i,r,o,a,l,c){s.getVertexPosition(a,Es),s.getVertexPosition(l,ws),s.getVertexPosition(c,bs);const h=Gf(s,t,e,n,Es,ws,bs,Oo);if(h){i&&(Do.fromBufferAttribute(i,a),No.fromBufferAttribute(i,l),Uo.fromBufferAttribute(i,c),h.uv=In.getInterpolation(Oo,Es,ws,bs,Do,No,Uo,new yt)),r&&(Do.fromBufferAttribute(r,a),No.fromBufferAttribute(r,l),Uo.fromBufferAttribute(r,c),h.uv1=In.getInterpolation(Oo,Es,ws,bs,Do,No,Uo,new yt)),o&&(ih.fromBufferAttribute(o,a),sh.fromBufferAttribute(o,l),rh.fromBufferAttribute(o,c),h.normal=In.getInterpolation(Oo,Es,ws,bs,ih,sh,rh,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new L,materialIndex:0};In.getNormal(Es,ws,bs,u.normal),h.face=u}return h}class Jt extends mn{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Ie(c,3)),this.setAttribute("normal",new Ie(h,3)),this.setAttribute("uv",new Ie(u,2));function g(_,m,p,E,v,M,U,A,T,O,w){const x=M/T,P=U/O,D=M/2,F=U/2,B=A/2,j=T+1,V=O+1;let et=0,J=0;const _t=new L;for(let wt=0;wt<V;wt++){const Ct=wt*P-F;for(let q=0;q<j;q++){const ht=q*x-D;_t[_]=ht*E,_t[m]=Ct*v,_t[p]=B,c.push(_t.x,_t.y,_t.z),_t[_]=0,_t[m]=0,_t[p]=A>0?1:-1,h.push(_t.x,_t.y,_t.z),u.push(q/T),u.push(1-wt/O),et+=1}}for(let wt=0;wt<O;wt++)for(let Ct=0;Ct<T;Ct++){const q=d+Ct+j*wt,ht=d+Ct+j*(wt+1),k=d+(Ct+1)+j*(wt+1),Y=d+(Ct+1)+j*wt;l.push(q,ht,Y),l.push(ht,k,Y),J+=6}a.addGroup(f,J,w),f+=J,d+=et}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Jt(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function gr(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function en(s){const t={};for(let e=0;e<s.length;e++){const n=gr(s[e]);for(const i in n)t[i]=n[i]}return t}function Vf(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Au(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ue.workingColorSpace}const Wf={clone:gr,merge:en};var Xf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Zf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ui extends xr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Xf,this.fragmentShader=Zf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=gr(t.uniforms),this.uniformsGroups=Vf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Ru extends Xe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ee,this.projectionMatrix=new Ee,this.projectionMatrixInverse=new Ee,this.coordinateSystem=ui}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const yi=new L,oh=new yt,ah=new yt;class fn extends Ru{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=vl*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ra*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return vl*2*Math.atan(Math.tan(Ra*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){yi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(yi.x,yi.y).multiplyScalar(-t/yi.z),yi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(yi.x,yi.y).multiplyScalar(-t/yi.z)}getViewSize(t,e){return this.getViewBounds(t,oh,ah),e.subVectors(ah,oh)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ra*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ts=-90,As=1;class Yf extends Xe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new fn(Ts,As,t,e);i.layers=this.layers,this.add(i);const r=new fn(Ts,As,t,e);r.layers=this.layers,this.add(r);const o=new fn(Ts,As,t,e);o.layers=this.layers,this.add(o);const a=new fn(Ts,As,t,e);a.layers=this.layers,this.add(a);const l=new fn(Ts,As,t,e);l.layers=this.layers,this.add(l);const c=new fn(Ts,As,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===ui)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===na)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Cu extends nn{constructor(t,e,n,i,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:ur,super(t,e,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class qf extends ls{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Cu(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ln}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Jt(5,5,5),r=new Ui({name:"CubemapFromEquirect",uniforms:gr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:an,blending:Ci});r.uniforms.tEquirect.value=e;const o=new bt(i,r),a=e.minFilter;return e.minFilter===Ji&&(e.minFilter=Ln),new Yf(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}}const Ya=new L,$f=new L,Kf=new $t;class Ei{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Ya.subVectors(n,e).cross($f.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Ya),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Kf.getNormalMatrix(t),i=this.coplanarPoint(Ya).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Wi=new Vl,zo=new L;class Xl{constructor(t=new Ei,e=new Ei,n=new Ei,i=new Ei,r=new Ei,o=new Ei){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ui){const n=this.planes,i=t.elements,r=i[0],o=i[1],a=i[2],l=i[3],c=i[4],h=i[5],u=i[6],d=i[7],f=i[8],g=i[9],_=i[10],m=i[11],p=i[12],E=i[13],v=i[14],M=i[15];if(n[0].setComponents(l-r,d-c,m-f,M-p).normalize(),n[1].setComponents(l+r,d+c,m+f,M+p).normalize(),n[2].setComponents(l+o,d+h,m+g,M+E).normalize(),n[3].setComponents(l-o,d-h,m-g,M-E).normalize(),n[4].setComponents(l-a,d-u,m-_,M-v).normalize(),e===ui)n[5].setComponents(l+a,d+u,m+_,M+v).normalize();else if(e===na)n[5].setComponents(a,u,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Wi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Wi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Wi)}intersectsSprite(t){return Wi.center.set(0,0,0),Wi.radius=.7071067811865476,Wi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Wi)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(zo.x=i.normal.x>0?t.max.x:t.min.x,zo.y=i.normal.y>0?t.max.y:t.min.y,zo.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(zo)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Pu(){let s=null,t=!1,e=null,n=null;function i(r,o){e(r,o),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Jf(s){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,u=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l._updateRange,d=l.updateRanges;if(s.bindBuffer(c,a),u.count===-1&&d.length===0&&s.bufferSubData(c,0,h),d.length!==0){for(let f=0,g=d.length;f<g;f++){const _=d[f];s.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}u.count!==-1&&(s.bufferSubData(c,u.offset*h.BYTES_PER_ELEMENT,h,u.offset,u.count),u.count=-1),l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(s.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}class fi extends mn{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=t/a,d=e/l,f=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const E=p*d-o;for(let v=0;v<c;v++){const M=v*u-r;g.push(M,-E,0),_.push(0,0,1),m.push(v/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let E=0;E<a;E++){const v=E+c*p,M=E+c*(p+1),U=E+1+c*(p+1),A=E+1+c*p;f.push(v,M,A),f.push(M,U,A)}this.setIndex(f),this.setAttribute("position",new Ie(g,3)),this.setAttribute("normal",new Ie(_,3)),this.setAttribute("uv",new Ie(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fi(t.width,t.height,t.widthSegments,t.heightSegments)}}var jf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Qf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,tp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ep=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,np=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ip=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,sp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,rp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,op=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,ap=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,lp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,cp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,hp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,up=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,dp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,fp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,pp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,mp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,gp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_p=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,vp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,xp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,yp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( batchId );
	vColor.xyz *= batchingColor.xyz;
#endif`,Mp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Sp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Ep=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,wp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,bp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Tp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ap=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Rp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Cp=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Pp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Lp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ip=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Dp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Np=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Up=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Op=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Fp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Bp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,kp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Hp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Gp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Vp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Wp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Xp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Zp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Yp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,qp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$p=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Kp=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Jp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,jp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Qp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,tm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,em=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,im=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,sm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,rm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,om=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,am=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,um=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,dm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fm=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,pm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,gm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,_m=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ym=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Mm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Sm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Em=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,wm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,bm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Tm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Am=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Rm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Cm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Pm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Lm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Im=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Dm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,Nm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Um=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Om=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Fm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Bm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,zm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,km=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Hm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Gm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Vm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Wm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Xm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Zm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Ym=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,qm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,$m=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Km=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Jm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,jm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,t0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,e0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,n0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,i0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,s0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,r0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,o0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,a0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,l0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,c0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,h0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,u0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,d0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,f0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,p0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,m0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,g0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,v0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,x0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,y0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,M0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,S0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,E0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,w0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,b0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,T0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,A0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,R0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,C0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,P0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,qt={alphahash_fragment:jf,alphahash_pars_fragment:Qf,alphamap_fragment:tp,alphamap_pars_fragment:ep,alphatest_fragment:np,alphatest_pars_fragment:ip,aomap_fragment:sp,aomap_pars_fragment:rp,batching_pars_vertex:op,batching_vertex:ap,begin_vertex:lp,beginnormal_vertex:cp,bsdfs:hp,iridescence_fragment:up,bumpmap_pars_fragment:dp,clipping_planes_fragment:fp,clipping_planes_pars_fragment:pp,clipping_planes_pars_vertex:mp,clipping_planes_vertex:gp,color_fragment:_p,color_pars_fragment:vp,color_pars_vertex:xp,color_vertex:yp,common:Mp,cube_uv_reflection_fragment:Sp,defaultnormal_vertex:Ep,displacementmap_pars_vertex:wp,displacementmap_vertex:bp,emissivemap_fragment:Tp,emissivemap_pars_fragment:Ap,colorspace_fragment:Rp,colorspace_pars_fragment:Cp,envmap_fragment:Pp,envmap_common_pars_fragment:Lp,envmap_pars_fragment:Ip,envmap_pars_vertex:Dp,envmap_physical_pars_fragment:Wp,envmap_vertex:Np,fog_vertex:Up,fog_pars_vertex:Op,fog_fragment:Fp,fog_pars_fragment:Bp,gradientmap_pars_fragment:zp,lightmap_pars_fragment:kp,lights_lambert_fragment:Hp,lights_lambert_pars_fragment:Gp,lights_pars_begin:Vp,lights_toon_fragment:Xp,lights_toon_pars_fragment:Zp,lights_phong_fragment:Yp,lights_phong_pars_fragment:qp,lights_physical_fragment:$p,lights_physical_pars_fragment:Kp,lights_fragment_begin:Jp,lights_fragment_maps:jp,lights_fragment_end:Qp,logdepthbuf_fragment:tm,logdepthbuf_pars_fragment:em,logdepthbuf_pars_vertex:nm,logdepthbuf_vertex:im,map_fragment:sm,map_pars_fragment:rm,map_particle_fragment:om,map_particle_pars_fragment:am,metalnessmap_fragment:lm,metalnessmap_pars_fragment:cm,morphinstance_vertex:hm,morphcolor_vertex:um,morphnormal_vertex:dm,morphtarget_pars_vertex:fm,morphtarget_vertex:pm,normal_fragment_begin:mm,normal_fragment_maps:gm,normal_pars_fragment:_m,normal_pars_vertex:vm,normal_vertex:xm,normalmap_pars_fragment:ym,clearcoat_normal_fragment_begin:Mm,clearcoat_normal_fragment_maps:Sm,clearcoat_pars_fragment:Em,iridescence_pars_fragment:wm,opaque_fragment:bm,packing:Tm,premultiplied_alpha_fragment:Am,project_vertex:Rm,dithering_fragment:Cm,dithering_pars_fragment:Pm,roughnessmap_fragment:Lm,roughnessmap_pars_fragment:Im,shadowmap_pars_fragment:Dm,shadowmap_pars_vertex:Nm,shadowmap_vertex:Um,shadowmask_pars_fragment:Om,skinbase_vertex:Fm,skinning_pars_vertex:Bm,skinning_vertex:zm,skinnormal_vertex:km,specularmap_fragment:Hm,specularmap_pars_fragment:Gm,tonemapping_fragment:Vm,tonemapping_pars_fragment:Wm,transmission_fragment:Xm,transmission_pars_fragment:Zm,uv_pars_fragment:Ym,uv_pars_vertex:qm,uv_vertex:$m,worldpos_vertex:Km,background_vert:Jm,background_frag:jm,backgroundCube_vert:Qm,backgroundCube_frag:t0,cube_vert:e0,cube_frag:n0,depth_vert:i0,depth_frag:s0,distanceRGBA_vert:r0,distanceRGBA_frag:o0,equirect_vert:a0,equirect_frag:l0,linedashed_vert:c0,linedashed_frag:h0,meshbasic_vert:u0,meshbasic_frag:d0,meshlambert_vert:f0,meshlambert_frag:p0,meshmatcap_vert:m0,meshmatcap_frag:g0,meshnormal_vert:_0,meshnormal_frag:v0,meshphong_vert:x0,meshphong_frag:y0,meshphysical_vert:M0,meshphysical_frag:S0,meshtoon_vert:E0,meshtoon_frag:w0,points_vert:b0,points_frag:T0,shadow_vert:A0,shadow_frag:R0,sprite_vert:C0,sprite_frag:P0},gt={common:{diffuse:{value:new te(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $t}},envmap:{envMap:{value:null},envMapRotation:{value:new $t},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $t},normalScale:{value:new yt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new te(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new te(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0},uvTransform:{value:new $t}},sprite:{diffuse:{value:new te(16777215)},opacity:{value:1},center:{value:new yt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}}},kn={basic:{uniforms:en([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.fog]),vertexShader:qt.meshbasic_vert,fragmentShader:qt.meshbasic_frag},lambert:{uniforms:en([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new te(0)}}]),vertexShader:qt.meshlambert_vert,fragmentShader:qt.meshlambert_frag},phong:{uniforms:en([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new te(0)},specular:{value:new te(1118481)},shininess:{value:30}}]),vertexShader:qt.meshphong_vert,fragmentShader:qt.meshphong_frag},standard:{uniforms:en([gt.common,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.roughnessmap,gt.metalnessmap,gt.fog,gt.lights,{emissive:{value:new te(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag},toon:{uniforms:en([gt.common,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.gradientmap,gt.fog,gt.lights,{emissive:{value:new te(0)}}]),vertexShader:qt.meshtoon_vert,fragmentShader:qt.meshtoon_frag},matcap:{uniforms:en([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,{matcap:{value:null}}]),vertexShader:qt.meshmatcap_vert,fragmentShader:qt.meshmatcap_frag},points:{uniforms:en([gt.points,gt.fog]),vertexShader:qt.points_vert,fragmentShader:qt.points_frag},dashed:{uniforms:en([gt.common,gt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qt.linedashed_vert,fragmentShader:qt.linedashed_frag},depth:{uniforms:en([gt.common,gt.displacementmap]),vertexShader:qt.depth_vert,fragmentShader:qt.depth_frag},normal:{uniforms:en([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,{opacity:{value:1}}]),vertexShader:qt.meshnormal_vert,fragmentShader:qt.meshnormal_frag},sprite:{uniforms:en([gt.sprite,gt.fog]),vertexShader:qt.sprite_vert,fragmentShader:qt.sprite_frag},background:{uniforms:{uvTransform:{value:new $t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qt.background_vert,fragmentShader:qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $t}},vertexShader:qt.backgroundCube_vert,fragmentShader:qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qt.cube_vert,fragmentShader:qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qt.equirect_vert,fragmentShader:qt.equirect_frag},distanceRGBA:{uniforms:en([gt.common,gt.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qt.distanceRGBA_vert,fragmentShader:qt.distanceRGBA_frag},shadow:{uniforms:en([gt.lights,gt.fog,{color:{value:new te(0)},opacity:{value:1}}]),vertexShader:qt.shadow_vert,fragmentShader:qt.shadow_frag}};kn.physical={uniforms:en([kn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $t},clearcoatNormalScale:{value:new yt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $t},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $t},sheen:{value:0},sheenColor:{value:new te(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $t},transmissionSamplerSize:{value:new yt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $t},attenuationDistance:{value:0},attenuationColor:{value:new te(0)},specularColor:{value:new te(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $t},anisotropyVector:{value:new yt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $t}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag};const ko={r:0,b:0,g:0},Xi=new Wn,L0=new Ee;function I0(s,t,e,n,i,r,o){const a=new te(0);let l=r===!0?0:1,c,h,u=null,d=0,f=null;function g(E){let v=E.isScene===!0?E.background:null;return v&&v.isTexture&&(v=(E.backgroundBlurriness>0?e:t).get(v)),v}function _(E){let v=!1;const M=g(E);M===null?p(a,l):M&&M.isColor&&(p(M,1),v=!0);const U=s.xr.getEnvironmentBlendMode();U==="additive"?n.buffers.color.setClear(0,0,0,1,o):U==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(E,v){const M=g(v);M&&(M.isCubeTexture||M.mapping===da)?(h===void 0&&(h=new bt(new Jt(1,1,1),new Ui({name:"BackgroundCubeMaterial",uniforms:gr(kn.backgroundCube.uniforms),vertexShader:kn.backgroundCube.vertexShader,fragmentShader:kn.backgroundCube.fragmentShader,side:an,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(U,A,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Xi.copy(v.backgroundRotation),Xi.x*=-1,Xi.y*=-1,Xi.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Xi.y*=-1,Xi.z*=-1),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(L0.makeRotationFromEuler(Xi)),h.material.toneMapped=ue.getTransfer(M.colorSpace)!==Se,(u!==M||d!==M.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,u=M,d=M.version,f=s.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new bt(new fi(2,2),new Ui({name:"BackgroundMaterial",uniforms:gr(kn.background.uniforms),vertexShader:kn.background.vertexShader,fragmentShader:kn.background.fragmentShader,side:Di,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=ue.getTransfer(M.colorSpace)!==Se,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||d!==M.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,u=M,d=M.version,f=s.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function p(E,v){E.getRGB(ko,Au(s)),n.buffers.color.setClear(ko.r,ko.g,ko.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(E,v=1){a.set(E),l=v,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,p(a,l)},render:_,addToRenderList:m}}function D0(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null);let r=i,o=!1;function a(x,P,D,F,B){let j=!1;const V=u(F,D,P);r!==V&&(r=V,c(r.object)),j=f(x,F,D,B),j&&g(x,F,D,B),B!==null&&t.update(B,s.ELEMENT_ARRAY_BUFFER),(j||o)&&(o=!1,M(x,P,D,F),B!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function l(){return s.createVertexArray()}function c(x){return s.bindVertexArray(x)}function h(x){return s.deleteVertexArray(x)}function u(x,P,D){const F=D.wireframe===!0;let B=n[x.id];B===void 0&&(B={},n[x.id]=B);let j=B[P.id];j===void 0&&(j={},B[P.id]=j);let V=j[F];return V===void 0&&(V=d(l()),j[F]=V),V}function d(x){const P=[],D=[],F=[];for(let B=0;B<e;B++)P[B]=0,D[B]=0,F[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:D,attributeDivisors:F,object:x,attributes:{},index:null}}function f(x,P,D,F){const B=r.attributes,j=P.attributes;let V=0;const et=D.getAttributes();for(const J in et)if(et[J].location>=0){const wt=B[J];let Ct=j[J];if(Ct===void 0&&(J==="instanceMatrix"&&x.instanceMatrix&&(Ct=x.instanceMatrix),J==="instanceColor"&&x.instanceColor&&(Ct=x.instanceColor)),wt===void 0||wt.attribute!==Ct||Ct&&wt.data!==Ct.data)return!0;V++}return r.attributesNum!==V||r.index!==F}function g(x,P,D,F){const B={},j=P.attributes;let V=0;const et=D.getAttributes();for(const J in et)if(et[J].location>=0){let wt=j[J];wt===void 0&&(J==="instanceMatrix"&&x.instanceMatrix&&(wt=x.instanceMatrix),J==="instanceColor"&&x.instanceColor&&(wt=x.instanceColor));const Ct={};Ct.attribute=wt,wt&&wt.data&&(Ct.data=wt.data),B[J]=Ct,V++}r.attributes=B,r.attributesNum=V,r.index=F}function _(){const x=r.newAttributes;for(let P=0,D=x.length;P<D;P++)x[P]=0}function m(x){p(x,0)}function p(x,P){const D=r.newAttributes,F=r.enabledAttributes,B=r.attributeDivisors;D[x]=1,F[x]===0&&(s.enableVertexAttribArray(x),F[x]=1),B[x]!==P&&(s.vertexAttribDivisor(x,P),B[x]=P)}function E(){const x=r.newAttributes,P=r.enabledAttributes;for(let D=0,F=P.length;D<F;D++)P[D]!==x[D]&&(s.disableVertexAttribArray(D),P[D]=0)}function v(x,P,D,F,B,j,V){V===!0?s.vertexAttribIPointer(x,P,D,B,j):s.vertexAttribPointer(x,P,D,F,B,j)}function M(x,P,D,F){_();const B=F.attributes,j=D.getAttributes(),V=P.defaultAttributeValues;for(const et in j){const J=j[et];if(J.location>=0){let _t=B[et];if(_t===void 0&&(et==="instanceMatrix"&&x.instanceMatrix&&(_t=x.instanceMatrix),et==="instanceColor"&&x.instanceColor&&(_t=x.instanceColor)),_t!==void 0){const wt=_t.normalized,Ct=_t.itemSize,q=t.get(_t);if(q===void 0)continue;const ht=q.buffer,k=q.type,Y=q.bytesPerElement,K=k===s.INT||k===s.UNSIGNED_INT||_t.gpuType===du;if(_t.isInterleavedBufferAttribute){const $=_t.data,ut=$.stride,At=_t.offset;if($.isInstancedInterleavedBuffer){for(let zt=0;zt<J.locationSize;zt++)p(J.location+zt,$.meshPerAttribute);x.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let zt=0;zt<J.locationSize;zt++)m(J.location+zt);s.bindBuffer(s.ARRAY_BUFFER,ht);for(let zt=0;zt<J.locationSize;zt++)v(J.location+zt,Ct/J.locationSize,k,wt,ut*Y,(At+Ct/J.locationSize*zt)*Y,K)}else{if(_t.isInstancedBufferAttribute){for(let $=0;$<J.locationSize;$++)p(J.location+$,_t.meshPerAttribute);x.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=_t.meshPerAttribute*_t.count)}else for(let $=0;$<J.locationSize;$++)m(J.location+$);s.bindBuffer(s.ARRAY_BUFFER,ht);for(let $=0;$<J.locationSize;$++)v(J.location+$,Ct/J.locationSize,k,wt,Ct*Y,Ct/J.locationSize*$*Y,K)}}else if(V!==void 0){const wt=V[et];if(wt!==void 0)switch(wt.length){case 2:s.vertexAttrib2fv(J.location,wt);break;case 3:s.vertexAttrib3fv(J.location,wt);break;case 4:s.vertexAttrib4fv(J.location,wt);break;default:s.vertexAttrib1fv(J.location,wt)}}}}E()}function U(){O();for(const x in n){const P=n[x];for(const D in P){const F=P[D];for(const B in F)h(F[B].object),delete F[B];delete P[D]}delete n[x]}}function A(x){if(n[x.id]===void 0)return;const P=n[x.id];for(const D in P){const F=P[D];for(const B in F)h(F[B].object),delete F[B];delete P[D]}delete n[x.id]}function T(x){for(const P in n){const D=n[P];if(D[x.id]===void 0)continue;const F=D[x.id];for(const B in F)h(F[B].object),delete F[B];delete D[x.id]}}function O(){w(),o=!0,r!==i&&(r=i,c(r.object))}function w(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:O,resetDefaultState:w,dispose:U,releaseStatesOfGeometry:A,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:m,disableUnusedAttributes:E}}function N0(s,t,e){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,u){u!==0&&(s.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function a(c,h,u){if(u===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let f=0;f<u;f++)this.render(c[f],h[f]);else{d.multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];e.update(f,n,1)}}function l(c,h,u,d){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)o(c[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_];for(let _=0;_<d.length;_++)e.update(g,n,d[_])}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function U0(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(A){return!(A!==Gn&&n.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const T=A===fa&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==Ni&&n.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Ri&&!T)}function l(A){if(A==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),f=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_TEXTURE_SIZE),_=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),p=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),E=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),M=f>0,U=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:f,maxTextureSize:g,maxCubemapSize:_,maxAttributes:m,maxVertexUniforms:p,maxVaryings:E,maxFragmentUniforms:v,vertexTextures:M,maxSamples:U}}function O0(s){const t=this;let e=null,n=0,i=!1,r=!1;const o=new Ei,a=new $t,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=s.get(u);if(!i||g===null||g.length===0||r&&!m)r?h(null):c();else{const E=r?0:n,v=E*4;let M=p.clippingState||null;l.value=M,M=h(g,d,v,f);for(let U=0;U!==v;++U)M[U]=e[U];p.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=f+_*4,E=d.matrixWorldInverse;a.getNormalMatrix(E),(m===null||m.length<p)&&(m=new Float32Array(p));for(let v=0,M=f;v!==_;++v,M+=4)o.copy(u[v]).applyMatrix4(E,a),o.normal.toArray(m,M),m[M+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function F0(s){let t=new WeakMap;function e(o,a){return a===fl?o.mapping=ur:a===pl&&(o.mapping=dr),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===fl||a===pl)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new qf(l.height);return c.fromEquirectangularTexture(s,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Lu extends Ru{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Hs=4,lh=[.125,.215,.35,.446,.526,.582],$i=20,qa=new Lu,ch=new te;let $a=null,Ka=0,Ja=0,ja=!1;const Yi=(1+Math.sqrt(5))/2,Rs=1/Yi,hh=[new L(-Yi,Rs,0),new L(Yi,Rs,0),new L(-Rs,0,Yi),new L(Rs,0,Yi),new L(0,Yi,-Rs),new L(0,Yi,Rs),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)];class uh{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){$a=this._renderer.getRenderTarget(),Ka=this._renderer.getActiveCubeFace(),Ja=this._renderer.getActiveMipmapLevel(),ja=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ph(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget($a,Ka,Ja),this._renderer.xr.enabled=ja,t.scissorTest=!1,Ho(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ur||t.mapping===dr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),$a=this._renderer.getRenderTarget(),Ka=this._renderer.getActiveCubeFace(),Ja=this._renderer.getActiveMipmapLevel(),ja=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ln,minFilter:Ln,generateMipmaps:!1,type:fa,format:Gn,colorSpace:zi,depthBuffer:!1},i=dh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=dh(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=B0(r)),this._blurMaterial=z0(r,t,e)}return i}_compileMaterial(t){const e=new bt(this._lodPlanes[0],t);this._renderer.compile(e,qa)}_sceneToCubeUV(t,e,n,i){const a=new fn(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(ch),h.toneMapping=Pi,h.autoClear=!1;const f=new kr({name:"PMREM.Background",side:an,depthWrite:!1,depthTest:!1}),g=new bt(new Jt,f);let _=!1;const m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,_=!0):(f.color.copy(ch),_=!0);for(let p=0;p<6;p++){const E=p%3;E===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):E===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const v=this._cubeSize;Ho(i,E*v,p>2?v:0,v,v),h.setRenderTarget(i),_&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===ur||t.mapping===dr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=ph()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fh());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new bt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;Ho(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,qa)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=hh[(i-r-1)%hh.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",r),this._halfBlur(o,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new bt(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*$i-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):$i;m>$i&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${$i}`);const p=[];let E=0;for(let T=0;T<$i;++T){const O=T/_,w=Math.exp(-O*O/2);p.push(w),T===0?E+=w:T<m&&(E+=2*w)}for(let T=0;T<p.length;T++)p[T]=p[T]/E;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:v}=this;d.dTheta.value=g,d.mipInt.value=v-n;const M=this._sizeLods[i],U=3*M*(i>v-Hs?i-v+Hs:0),A=4*(this._cubeSize-M);Ho(e,U,A,3*M,2*M),l.setRenderTarget(e),l.render(u,qa)}}function B0(s){const t=[],e=[],n=[];let i=s;const r=s-Hs+1+lh.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);e.push(a);let l=1/a;o>s-Hs?l=lh[o-s+Hs-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,_=3,m=2,p=1,E=new Float32Array(_*g*f),v=new Float32Array(m*g*f),M=new Float32Array(p*g*f);for(let A=0;A<f;A++){const T=A%3*2/3-1,O=A>2?0:-1,w=[T,O,0,T+2/3,O,0,T+2/3,O+1,0,T,O,0,T+2/3,O+1,0,T,O+1,0];E.set(w,_*g*A),v.set(d,m*g*A);const x=[A,A,A,A,A,A];M.set(x,p*g*A)}const U=new mn;U.setAttribute("position",new Dn(E,_)),U.setAttribute("uv",new Dn(v,m)),U.setAttribute("faceIndex",new Dn(M,p)),t.push(U),i>Hs&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function dh(s,t,e){const n=new ls(s,t,e);return n.texture.mapping=da,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ho(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function z0(s,t,e){const n=new Float32Array($i),i=new L(0,1,0);return new Ui({name:"SphericalGaussianBlur",defines:{n:$i,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Zl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function fh(){return new Ui({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Zl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function ph(){return new Ui({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Zl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function Zl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function k0(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===fl||l===pl,h=l===ur||l===dr;if(c||h){let u=t.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new uh(s)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return c&&f&&f.height>0||h&&f&&i(f)?(e===null&&(e=new uh(s)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function i(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function H0(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&Gl("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function G0(s,t,e,n){const i={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)t.remove(_[m])}d.removeEventListener("dispose",o),delete i[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const g in d)t.update(d[g],s.ARRAY_BUFFER);const f=u.morphAttributes;for(const g in f){const _=f[g];for(let m=0,p=_.length;m<p;m++)t.update(_[m],s.ARRAY_BUFFER)}}function c(u){const d=[],f=u.index,g=u.attributes.position;let _=0;if(f!==null){const E=f.array;_=f.version;for(let v=0,M=E.length;v<M;v+=3){const U=E[v+0],A=E[v+1],T=E[v+2];d.push(U,A,A,T,T,U)}}else if(g!==void 0){const E=g.array;_=g.version;for(let v=0,M=E.length/3-1;v<M;v+=3){const U=v+0,A=v+1,T=v+2;d.push(U,A,A,T,T,U)}}else return;const m=new(yu(d)?Tu:bu)(d,1);m.version=_;const p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function V0(s,t,e){let n;function i(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){s.drawElements(n,f,r,d*o),e.update(f,n,1)}function c(d,f,g){g!==0&&(s.drawElementsInstanced(n,f,r,d*o,g),e.update(f,n,g))}function h(d,f,g){if(g===0)return;const _=t.get("WEBGL_multi_draw");if(_===null)for(let m=0;m<g;m++)this.render(d[m]/o,f[m]);else{_.multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}}function u(d,f,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/o,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,_,0,g);let p=0;for(let E=0;E<g;E++)p+=f[E];for(let E=0;E<_.length;E++)e.update(p,n,_[E])}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function W0(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function X0(s,t,e){const n=new WeakMap,i=new Te;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let w=function(){T.dispose(),n.delete(a),a.removeEventListener("dispose",w)};d!==void 0&&d.texture.dispose();const f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],E=a.morphAttributes.color||[];let v=0;f===!0&&(v=1),g===!0&&(v=2),_===!0&&(v=3);let M=a.attributes.position.count*v,U=1;M>t.maxTextureSize&&(U=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);const A=new Float32Array(M*U*4*u),T=new Su(A,M,U,u);T.type=Ri,T.needsUpdate=!0;const O=v*4;for(let x=0;x<u;x++){const P=m[x],D=p[x],F=E[x],B=M*U*4*x;for(let j=0;j<P.count;j++){const V=j*O;f===!0&&(i.fromBufferAttribute(P,j),A[B+V+0]=i.x,A[B+V+1]=i.y,A[B+V+2]=i.z,A[B+V+3]=0),g===!0&&(i.fromBufferAttribute(D,j),A[B+V+4]=i.x,A[B+V+5]=i.y,A[B+V+6]=i.z,A[B+V+7]=0),_===!0&&(i.fromBufferAttribute(F,j),A[B+V+8]=i.x,A[B+V+9]=i.y,A[B+V+10]=i.z,A[B+V+11]=F.itemSize===4?i.w:1)}}d={count:u,texture:T,size:new yt(M,U)},n.set(a,d),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];const g=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(s,"morphTargetBaseInfluence",g),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function Z0(s,t,e,n){let i=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}class Iu extends nn{constructor(t,e,n,i,r,o,a,l,c,h=qs){if(h!==qs&&h!==mr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===qs&&(n=fr),n===void 0&&h===mr&&(n=pr),super(null,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:En,this.minFilter=l!==void 0?l:En,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Du=new nn,Nu=new Iu(1,1);Nu.compareFunction=xu;const Uu=new Su,Ou=new If,Fu=new Cu,mh=[],gh=[],_h=new Float32Array(16),vh=new Float32Array(9),xh=new Float32Array(4);function yr(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=mh[i];if(r===void 0&&(r=new Float32Array(i),mh[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function ze(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function ke(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function ma(s,t){let e=gh[t];e===void 0&&(e=new Int32Array(t),gh[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function Y0(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function q0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;s.uniform2fv(this.addr,t),ke(e,t)}}function $0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ze(e,t))return;s.uniform3fv(this.addr,t),ke(e,t)}}function K0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;s.uniform4fv(this.addr,t),ke(e,t)}}function J0(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(ze(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),ke(e,t)}else{if(ze(e,n))return;xh.set(n),s.uniformMatrix2fv(this.addr,!1,xh),ke(e,n)}}function j0(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(ze(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),ke(e,t)}else{if(ze(e,n))return;vh.set(n),s.uniformMatrix3fv(this.addr,!1,vh),ke(e,n)}}function Q0(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(ze(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),ke(e,t)}else{if(ze(e,n))return;_h.set(n),s.uniformMatrix4fv(this.addr,!1,_h),ke(e,n)}}function tg(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function eg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;s.uniform2iv(this.addr,t),ke(e,t)}}function ng(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ze(e,t))return;s.uniform3iv(this.addr,t),ke(e,t)}}function ig(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;s.uniform4iv(this.addr,t),ke(e,t)}}function sg(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function rg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;s.uniform2uiv(this.addr,t),ke(e,t)}}function og(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ze(e,t))return;s.uniform3uiv(this.addr,t),ke(e,t)}}function ag(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;s.uniform4uiv(this.addr,t),ke(e,t)}}function lg(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);const r=this.type===s.SAMPLER_2D_SHADOW?Nu:Du;e.setTexture2D(t||r,i)}function cg(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Ou,i)}function hg(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Fu,i)}function ug(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Uu,i)}function dg(s){switch(s){case 5126:return Y0;case 35664:return q0;case 35665:return $0;case 35666:return K0;case 35674:return J0;case 35675:return j0;case 35676:return Q0;case 5124:case 35670:return tg;case 35667:case 35671:return eg;case 35668:case 35672:return ng;case 35669:case 35673:return ig;case 5125:return sg;case 36294:return rg;case 36295:return og;case 36296:return ag;case 35678:case 36198:case 36298:case 36306:case 35682:return lg;case 35679:case 36299:case 36307:return cg;case 35680:case 36300:case 36308:case 36293:return hg;case 36289:case 36303:case 36311:case 36292:return ug}}function fg(s,t){s.uniform1fv(this.addr,t)}function pg(s,t){const e=yr(t,this.size,2);s.uniform2fv(this.addr,e)}function mg(s,t){const e=yr(t,this.size,3);s.uniform3fv(this.addr,e)}function gg(s,t){const e=yr(t,this.size,4);s.uniform4fv(this.addr,e)}function _g(s,t){const e=yr(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function vg(s,t){const e=yr(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function xg(s,t){const e=yr(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function yg(s,t){s.uniform1iv(this.addr,t)}function Mg(s,t){s.uniform2iv(this.addr,t)}function Sg(s,t){s.uniform3iv(this.addr,t)}function Eg(s,t){s.uniform4iv(this.addr,t)}function wg(s,t){s.uniform1uiv(this.addr,t)}function bg(s,t){s.uniform2uiv(this.addr,t)}function Tg(s,t){s.uniform3uiv(this.addr,t)}function Ag(s,t){s.uniform4uiv(this.addr,t)}function Rg(s,t,e){const n=this.cache,i=t.length,r=ma(e,i);ze(n,r)||(s.uniform1iv(this.addr,r),ke(n,r));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||Du,r[o])}function Cg(s,t,e){const n=this.cache,i=t.length,r=ma(e,i);ze(n,r)||(s.uniform1iv(this.addr,r),ke(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||Ou,r[o])}function Pg(s,t,e){const n=this.cache,i=t.length,r=ma(e,i);ze(n,r)||(s.uniform1iv(this.addr,r),ke(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||Fu,r[o])}function Lg(s,t,e){const n=this.cache,i=t.length,r=ma(e,i);ze(n,r)||(s.uniform1iv(this.addr,r),ke(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||Uu,r[o])}function Ig(s){switch(s){case 5126:return fg;case 35664:return pg;case 35665:return mg;case 35666:return gg;case 35674:return _g;case 35675:return vg;case 35676:return xg;case 5124:case 35670:return yg;case 35667:case 35671:return Mg;case 35668:case 35672:return Sg;case 35669:case 35673:return Eg;case 5125:return wg;case 36294:return bg;case 36295:return Tg;case 36296:return Ag;case 35678:case 36198:case 36298:case 36306:case 35682:return Rg;case 35679:case 36299:case 36307:return Cg;case 35680:case 36300:case 36308:case 36293:return Pg;case 36289:case 36303:case 36311:case 36292:return Lg}}class Dg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=dg(e.type)}}class Ng{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Ig(e.type)}}class Ug{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(t,e[a.id],n)}}}const Qa=/(\w+)(\])?(\[|\.)?/g;function yh(s,t){s.seq.push(t),s.map[t.id]=t}function Og(s,t,e){const n=s.name,i=n.length;for(Qa.lastIndex=0;;){const r=Qa.exec(n),o=Qa.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){yh(e,c===void 0?new Dg(a,s,t):new Ng(a,s,t));break}else{let u=e.map[a];u===void 0&&(u=new Ug(a),yh(e,u)),e=u}}}class Ko{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),o=t.getUniformLocation(e,r.name);Og(r,o,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function Mh(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const Fg=37297;let Bg=0;function zg(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function kg(s){const t=ue.getPrimaries(ue.workingColorSpace),e=ue.getPrimaries(s);let n;switch(t===e?n="":t===ea&&e===ta?n="LinearDisplayP3ToLinearSRGB":t===ta&&e===ea&&(n="LinearSRGBToLinearDisplayP3"),s){case zi:case pa:return[n,"LinearTransferOETF"];case Bn:case Hl:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function Sh(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+zg(s.getShaderSource(t),o)}else return i}function Hg(s,t){const e=kg(t);return`vec4 ${s}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Gg(s,t){let e;switch(t){case Kd:e="Linear";break;case Jd:e="Reinhard";break;case jd:e="OptimizedCineon";break;case hu:e="ACESFilmic";break;case tf:e="AgX";break;case ef:e="Neutral";break;case Qd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Vg(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Nr).join(`
`)}function Wg(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Xg(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function Nr(s){return s!==""}function Eh(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function wh(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Zg=/^[ \t]*#include +<([\w\d./]+)>/gm;function xl(s){return s.replace(Zg,qg)}const Yg=new Map;function qg(s,t){let e=qt[t];if(e===void 0){const n=Yg.get(t);if(n!==void 0)e=qt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return xl(e)}const $g=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function bh(s){return s.replace($g,Kg)}function Kg(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Th(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Jg(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===au?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===lu?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===ei&&(t="SHADOWMAP_TYPE_VSM"),t}function jg(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case ur:case dr:t="ENVMAP_TYPE_CUBE";break;case da:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Qg(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case dr:t="ENVMAP_MODE_REFRACTION";break}return t}function t_(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case cu:t="ENVMAP_BLENDING_MULTIPLY";break;case qd:t="ENVMAP_BLENDING_MIX";break;case $d:t="ENVMAP_BLENDING_ADD";break}return t}function e_(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function n_(s,t,e,n){const i=s.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=Jg(e),c=jg(e),h=Qg(e),u=t_(e),d=e_(e),f=Vg(e),g=Wg(r),_=i.createProgram();let m,p,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Nr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Nr).join(`
`),p.length>0&&(p+=`
`)):(m=[Th(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Nr).join(`
`),p=[Th(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Pi?"#define TONE_MAPPING":"",e.toneMapping!==Pi?qt.tonemapping_pars_fragment:"",e.toneMapping!==Pi?Gg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",qt.colorspace_pars_fragment,Hg("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Nr).join(`
`)),o=xl(o),o=Eh(o,e),o=wh(o,e),a=xl(a),a=Eh(a,e),a=wh(a,e),o=bh(o),a=bh(a),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Gc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Gc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const v=E+m+o,M=E+p+a,U=Mh(i,i.VERTEX_SHADER,v),A=Mh(i,i.FRAGMENT_SHADER,M);i.attachShader(_,U),i.attachShader(_,A),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function T(P){if(s.debug.checkShaderErrors){const D=i.getProgramInfoLog(_).trim(),F=i.getShaderInfoLog(U).trim(),B=i.getShaderInfoLog(A).trim();let j=!0,V=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(j=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,U,A);else{const et=Sh(i,U,"vertex"),J=Sh(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+D+`
`+et+`
`+J)}else D!==""?console.warn("THREE.WebGLProgram: Program Info Log:",D):(F===""||B==="")&&(V=!1);V&&(P.diagnostics={runnable:j,programLog:D,vertexShader:{log:F,prefix:m},fragmentShader:{log:B,prefix:p}})}i.deleteShader(U),i.deleteShader(A),O=new Ko(i,_),w=Xg(i,_)}let O;this.getUniforms=function(){return O===void 0&&T(this),O};let w;this.getAttributes=function(){return w===void 0&&T(this),w};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=i.getProgramParameter(_,Fg)),x},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Bg++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=U,this.fragmentShader=A,this}let i_=0;class s_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new r_(t),e.set(t,n)),n}}class r_{constructor(t){this.id=i_++,this.code=t,this.usedTimes=0}}function o_(s,t,e,n,i,r,o){const a=new Wl,l=new s_,c=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(w){return c.add(w),w===0?"uv":`uv${w}`}function m(w,x,P,D,F){const B=D.fog,j=F.geometry,V=w.isMeshStandardMaterial?D.environment:null,et=(w.isMeshStandardMaterial?e:t).get(w.envMap||V),J=et&&et.mapping===da?et.image.height:null,_t=g[w.type];w.precision!==null&&(f=i.getMaxPrecision(w.precision),f!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",f,"instead."));const wt=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Ct=wt!==void 0?wt.length:0;let q=0;j.morphAttributes.position!==void 0&&(q=1),j.morphAttributes.normal!==void 0&&(q=2),j.morphAttributes.color!==void 0&&(q=3);let ht,k,Y,K;if(_t){const se=kn[_t];ht=se.vertexShader,k=se.fragmentShader}else ht=w.vertexShader,k=w.fragmentShader,l.update(w),Y=l.getVertexShaderID(w),K=l.getFragmentShaderID(w);const $=s.getRenderTarget(),ut=F.isInstancedMesh===!0,At=F.isBatchedMesh===!0,zt=!!w.map,I=!!w.matcap,Zt=!!et,Gt=!!w.aoMap,de=!!w.lightMap,It=!!w.bumpMap,ee=!!w.normalMap,Xt=!!w.displacementMap,Wt=!!w.emissiveMap,_e=!!w.metalnessMap,C=!!w.roughnessMap,y=w.anisotropy>0,Z=w.clearcoat>0,nt=w.dispersion>0,st=w.iridescence>0,it=w.sheen>0,Lt=w.transmission>0,pt=y&&!!w.anisotropyMap,mt=Z&&!!w.clearcoatMap,Yt=Z&&!!w.clearcoatNormalMap,rt=Z&&!!w.clearcoatRoughnessMap,Tt=st&&!!w.iridescenceMap,Kt=st&&!!w.iridescenceThicknessMap,Ut=it&&!!w.sheenColorMap,vt=it&&!!w.sheenRoughnessMap,Dt=!!w.specularMap,kt=!!w.specularColorMap,ve=!!w.specularIntensityMap,N=Lt&&!!w.transmissionMap,Mt=Lt&&!!w.thicknessMap,Q=!!w.gradientMap,tt=!!w.alphaMap,ct=w.alphaTest>0,Ot=!!w.alphaHash,ie=!!w.extensions;let ae=Pi;w.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(ae=s.toneMapping);const De={shaderID:_t,shaderType:w.type,shaderName:w.name,vertexShader:ht,fragmentShader:k,defines:w.defines,customVertexShaderID:Y,customFragmentShaderID:K,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:f,batching:At,batchingColor:At&&F._colorsTexture!==null,instancing:ut,instancingColor:ut&&F.instanceColor!==null,instancingMorph:ut&&F.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:$===null?s.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:zi,alphaToCoverage:!!w.alphaToCoverage,map:zt,matcap:I,envMap:Zt,envMapMode:Zt&&et.mapping,envMapCubeUVHeight:J,aoMap:Gt,lightMap:de,bumpMap:It,normalMap:ee,displacementMap:d&&Xt,emissiveMap:Wt,normalMapObjectSpace:ee&&w.normalMapType===gf,normalMapTangentSpace:ee&&w.normalMapType===vu,metalnessMap:_e,roughnessMap:C,anisotropy:y,anisotropyMap:pt,clearcoat:Z,clearcoatMap:mt,clearcoatNormalMap:Yt,clearcoatRoughnessMap:rt,dispersion:nt,iridescence:st,iridescenceMap:Tt,iridescenceThicknessMap:Kt,sheen:it,sheenColorMap:Ut,sheenRoughnessMap:vt,specularMap:Dt,specularColorMap:kt,specularIntensityMap:ve,transmission:Lt,transmissionMap:N,thicknessMap:Mt,gradientMap:Q,opaque:w.transparent===!1&&w.blending===Ys&&w.alphaToCoverage===!1,alphaMap:tt,alphaTest:ct,alphaHash:Ot,combine:w.combine,mapUv:zt&&_(w.map.channel),aoMapUv:Gt&&_(w.aoMap.channel),lightMapUv:de&&_(w.lightMap.channel),bumpMapUv:It&&_(w.bumpMap.channel),normalMapUv:ee&&_(w.normalMap.channel),displacementMapUv:Xt&&_(w.displacementMap.channel),emissiveMapUv:Wt&&_(w.emissiveMap.channel),metalnessMapUv:_e&&_(w.metalnessMap.channel),roughnessMapUv:C&&_(w.roughnessMap.channel),anisotropyMapUv:pt&&_(w.anisotropyMap.channel),clearcoatMapUv:mt&&_(w.clearcoatMap.channel),clearcoatNormalMapUv:Yt&&_(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:rt&&_(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Tt&&_(w.iridescenceMap.channel),iridescenceThicknessMapUv:Kt&&_(w.iridescenceThicknessMap.channel),sheenColorMapUv:Ut&&_(w.sheenColorMap.channel),sheenRoughnessMapUv:vt&&_(w.sheenRoughnessMap.channel),specularMapUv:Dt&&_(w.specularMap.channel),specularColorMapUv:kt&&_(w.specularColorMap.channel),specularIntensityMapUv:ve&&_(w.specularIntensityMap.channel),transmissionMapUv:N&&_(w.transmissionMap.channel),thicknessMapUv:Mt&&_(w.thicknessMap.channel),alphaMapUv:tt&&_(w.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(ee||y),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!j.attributes.uv&&(zt||tt),fog:!!B,useFog:w.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:F.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:Ct,morphTextureStride:q,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:s.shadowMap.enabled&&P.length>0,shadowMapType:s.shadowMap.type,toneMapping:ae,decodeVideoTexture:zt&&w.map.isVideoTexture===!0&&ue.getTransfer(w.map.colorSpace)===Se,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===pn,flipSided:w.side===an,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:ie&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:ie&&w.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return De.vertexUv1s=c.has(1),De.vertexUv2s=c.has(2),De.vertexUv3s=c.has(3),c.clear(),De}function p(w){const x=[];if(w.shaderID?x.push(w.shaderID):(x.push(w.customVertexShaderID),x.push(w.customFragmentShaderID)),w.defines!==void 0)for(const P in w.defines)x.push(P),x.push(w.defines[P]);return w.isRawShaderMaterial===!1&&(E(x,w),v(x,w),x.push(s.outputColorSpace)),x.push(w.customProgramCacheKey),x.join()}function E(w,x){w.push(x.precision),w.push(x.outputColorSpace),w.push(x.envMapMode),w.push(x.envMapCubeUVHeight),w.push(x.mapUv),w.push(x.alphaMapUv),w.push(x.lightMapUv),w.push(x.aoMapUv),w.push(x.bumpMapUv),w.push(x.normalMapUv),w.push(x.displacementMapUv),w.push(x.emissiveMapUv),w.push(x.metalnessMapUv),w.push(x.roughnessMapUv),w.push(x.anisotropyMapUv),w.push(x.clearcoatMapUv),w.push(x.clearcoatNormalMapUv),w.push(x.clearcoatRoughnessMapUv),w.push(x.iridescenceMapUv),w.push(x.iridescenceThicknessMapUv),w.push(x.sheenColorMapUv),w.push(x.sheenRoughnessMapUv),w.push(x.specularMapUv),w.push(x.specularColorMapUv),w.push(x.specularIntensityMapUv),w.push(x.transmissionMapUv),w.push(x.thicknessMapUv),w.push(x.combine),w.push(x.fogExp2),w.push(x.sizeAttenuation),w.push(x.morphTargetsCount),w.push(x.morphAttributeCount),w.push(x.numDirLights),w.push(x.numPointLights),w.push(x.numSpotLights),w.push(x.numSpotLightMaps),w.push(x.numHemiLights),w.push(x.numRectAreaLights),w.push(x.numDirLightShadows),w.push(x.numPointLightShadows),w.push(x.numSpotLightShadows),w.push(x.numSpotLightShadowsWithMaps),w.push(x.numLightProbes),w.push(x.shadowMapType),w.push(x.toneMapping),w.push(x.numClippingPlanes),w.push(x.numClipIntersection),w.push(x.depthPacking)}function v(w,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),x.batchingColor&&a.enable(21),w.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.skinning&&a.enable(4),x.morphTargets&&a.enable(5),x.morphNormals&&a.enable(6),x.morphColors&&a.enable(7),x.premultipliedAlpha&&a.enable(8),x.shadowMapEnabled&&a.enable(9),x.doubleSided&&a.enable(10),x.flipSided&&a.enable(11),x.useDepthPacking&&a.enable(12),x.dithering&&a.enable(13),x.transmission&&a.enable(14),x.sheen&&a.enable(15),x.opaque&&a.enable(16),x.pointsUvs&&a.enable(17),x.decodeVideoTexture&&a.enable(18),x.alphaToCoverage&&a.enable(19),w.push(a.mask)}function M(w){const x=g[w.type];let P;if(x){const D=kn[x];P=Wf.clone(D.uniforms)}else P=w.uniforms;return P}function U(w,x){let P;for(let D=0,F=h.length;D<F;D++){const B=h[D];if(B.cacheKey===x){P=B,++P.usedTimes;break}}return P===void 0&&(P=new n_(s,x,w,r),h.push(P)),P}function A(w){if(--w.usedTimes===0){const x=h.indexOf(w);h[x]=h[h.length-1],h.pop(),w.destroy()}}function T(w){l.remove(w)}function O(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:M,acquireProgram:U,releaseProgram:A,releaseShaderCache:T,programs:h,dispose:O}}function a_(){let s=new WeakMap;function t(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function e(r){s.delete(r)}function n(r,o,a){s.get(r)[o]=a}function i(){s=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function l_(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Ah(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Rh(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(u,d,f,g,_,m){let p=s[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},s[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),t++,p}function a(u,d,f,g,_,m){const p=o(u,d,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):e.push(p)}function l(u,d,f,g,_,m){const p=o(u,d,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):e.unshift(p)}function c(u,d){e.length>1&&e.sort(u||l_),n.length>1&&n.sort(d||Ah),i.length>1&&i.sort(d||Ah)}function h(){for(let u=t,d=s.length;u<d;u++){const f=s[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:h,sort:c}}function c_(){let s=new WeakMap;function t(n,i){const r=s.get(n);let o;return r===void 0?(o=new Rh,s.set(n,[o])):i>=r.length?(o=new Rh,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function h_(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new te};break;case"SpotLight":e={position:new L,direction:new L,color:new te,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new te,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new te,groundColor:new te};break;case"RectAreaLight":e={color:new te,position:new L,halfWidth:new L,halfHeight:new L};break}return s[t.id]=e,e}}}function u_(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let d_=0;function f_(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function p_(s){const t=new h_,e=u_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new L);const i=new L,r=new Ee,o=new Ee;function a(c){let h=0,u=0,d=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,E=0,v=0,M=0,U=0,A=0,T=0;c.sort(f_);for(let w=0,x=c.length;w<x;w++){const P=c[w],D=P.color,F=P.intensity,B=P.distance,j=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=D.r*F,u+=D.g*F,d+=D.b*F;else if(P.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(P.sh.coefficients[V],F);T++}else if(P.isDirectionalLight){const V=t.get(P);if(V.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const et=P.shadow,J=e.get(P);J.shadowBias=et.bias,J.shadowNormalBias=et.normalBias,J.shadowRadius=et.radius,J.shadowMapSize=et.mapSize,n.directionalShadow[f]=J,n.directionalShadowMap[f]=j,n.directionalShadowMatrix[f]=P.shadow.matrix,E++}n.directional[f]=V,f++}else if(P.isSpotLight){const V=t.get(P);V.position.setFromMatrixPosition(P.matrixWorld),V.color.copy(D).multiplyScalar(F),V.distance=B,V.coneCos=Math.cos(P.angle),V.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),V.decay=P.decay,n.spot[_]=V;const et=P.shadow;if(P.map&&(n.spotLightMap[U]=P.map,U++,et.updateMatrices(P),P.castShadow&&A++),n.spotLightMatrix[_]=et.matrix,P.castShadow){const J=e.get(P);J.shadowBias=et.bias,J.shadowNormalBias=et.normalBias,J.shadowRadius=et.radius,J.shadowMapSize=et.mapSize,n.spotShadow[_]=J,n.spotShadowMap[_]=j,M++}_++}else if(P.isRectAreaLight){const V=t.get(P);V.color.copy(D).multiplyScalar(F),V.halfWidth.set(P.width*.5,0,0),V.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=V,m++}else if(P.isPointLight){const V=t.get(P);if(V.color.copy(P.color).multiplyScalar(P.intensity),V.distance=P.distance,V.decay=P.decay,P.castShadow){const et=P.shadow,J=e.get(P);J.shadowBias=et.bias,J.shadowNormalBias=et.normalBias,J.shadowRadius=et.radius,J.shadowMapSize=et.mapSize,J.shadowCameraNear=et.camera.near,J.shadowCameraFar=et.camera.far,n.pointShadow[g]=J,n.pointShadowMap[g]=j,n.pointShadowMatrix[g]=P.shadow.matrix,v++}n.point[g]=V,g++}else if(P.isHemisphereLight){const V=t.get(P);V.skyColor.copy(P.color).multiplyScalar(F),V.groundColor.copy(P.groundColor).multiplyScalar(F),n.hemi[p]=V,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=gt.LTC_FLOAT_1,n.rectAreaLTC2=gt.LTC_FLOAT_2):(n.rectAreaLTC1=gt.LTC_HALF_1,n.rectAreaLTC2=gt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const O=n.hash;(O.directionalLength!==f||O.pointLength!==g||O.spotLength!==_||O.rectAreaLength!==m||O.hemiLength!==p||O.numDirectionalShadows!==E||O.numPointShadows!==v||O.numSpotShadows!==M||O.numSpotMaps!==U||O.numLightProbes!==T)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=M+U-A,n.spotLightMap.length=U,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=T,O.directionalLength=f,O.pointLength=g,O.spotLength=_,O.rectAreaLength=m,O.hemiLength=p,O.numDirectionalShadows=E,O.numPointShadows=v,O.numSpotShadows=M,O.numSpotMaps=U,O.numLightProbes=T,n.version=d_++)}function l(c,h){let u=0,d=0,f=0,g=0,_=0;const m=h.matrixWorldInverse;for(let p=0,E=c.length;p<E;p++){const v=c[p];if(v.isDirectionalLight){const M=n.directional[u];M.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(m),u++}else if(v.isSpotLight){const M=n.spot[f];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(m),f++}else if(v.isRectAreaLight){const M=n.rectArea[g];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(m),o.identity(),r.copy(v.matrixWorld),r.premultiply(m),o.extractRotation(r),M.halfWidth.set(v.width*.5,0,0),M.halfHeight.set(0,v.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),g++}else if(v.isPointLight){const M=n.point[d];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(m),d++}else if(v.isHemisphereLight){const M=n.hemi[_];M.direction.setFromMatrixPosition(v.matrixWorld),M.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function Ch(s){const t=new p_(s),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function m_(s){let t=new WeakMap;function e(i,r=0){const o=t.get(i);let a;return o===void 0?(a=new Ch(s),t.set(i,[a])):r>=o.length?(a=new Ch(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class g_ extends xr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=pf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class __ extends xr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const v_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,x_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function y_(s,t,e){let n=new Xl;const i=new yt,r=new yt,o=new Te,a=new g_({depthPacking:mf}),l=new __,c={},h=e.maxTextureSize,u={[Di]:an,[an]:Di,[pn]:pn},d=new Ui({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new yt},radius:{value:4}},vertexShader:v_,fragmentShader:x_}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new mn;g.setAttribute("position",new Dn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new bt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=au;let p=this.type;this.render=function(A,T,O){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const w=s.getRenderTarget(),x=s.getActiveCubeFace(),P=s.getActiveMipmapLevel(),D=s.state;D.setBlending(Ci),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const F=p!==ei&&this.type===ei,B=p===ei&&this.type!==ei;for(let j=0,V=A.length;j<V;j++){const et=A[j],J=et.shadow;if(J===void 0){console.warn("THREE.WebGLShadowMap:",et,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;i.copy(J.mapSize);const _t=J.getFrameExtents();if(i.multiply(_t),r.copy(J.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/_t.x),i.x=r.x*_t.x,J.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/_t.y),i.y=r.y*_t.y,J.mapSize.y=r.y)),J.map===null||F===!0||B===!0){const Ct=this.type!==ei?{minFilter:En,magFilter:En}:{};J.map!==null&&J.map.dispose(),J.map=new ls(i.x,i.y,Ct),J.map.texture.name=et.name+".shadowMap",J.camera.updateProjectionMatrix()}s.setRenderTarget(J.map),s.clear();const wt=J.getViewportCount();for(let Ct=0;Ct<wt;Ct++){const q=J.getViewport(Ct);o.set(r.x*q.x,r.y*q.y,r.x*q.z,r.y*q.w),D.viewport(o),J.updateMatrices(et,Ct),n=J.getFrustum(),M(T,O,J.camera,et,this.type)}J.isPointLightShadow!==!0&&this.type===ei&&E(J,O),J.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(w,x,P)};function E(A,T){const O=t.update(_);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new ls(i.x,i.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,s.setRenderTarget(A.mapPass),s.clear(),s.renderBufferDirect(T,null,O,d,_,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,s.setRenderTarget(A.map),s.clear(),s.renderBufferDirect(T,null,O,f,_,null)}function v(A,T,O,w){let x=null;const P=O.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(P!==void 0)x=P;else if(x=O.isPointLight===!0?l:a,s.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const D=x.uuid,F=T.uuid;let B=c[D];B===void 0&&(B={},c[D]=B);let j=B[F];j===void 0&&(j=x.clone(),B[F]=j,T.addEventListener("dispose",U)),x=j}if(x.visible=T.visible,x.wireframe=T.wireframe,w===ei?x.side=T.shadowSide!==null?T.shadowSide:T.side:x.side=T.shadowSide!==null?T.shadowSide:u[T.side],x.alphaMap=T.alphaMap,x.alphaTest=T.alphaTest,x.map=T.map,x.clipShadows=T.clipShadows,x.clippingPlanes=T.clippingPlanes,x.clipIntersection=T.clipIntersection,x.displacementMap=T.displacementMap,x.displacementScale=T.displacementScale,x.displacementBias=T.displacementBias,x.wireframeLinewidth=T.wireframeLinewidth,x.linewidth=T.linewidth,O.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const D=s.properties.get(x);D.light=O}return x}function M(A,T,O,w,x){if(A.visible===!1)return;if(A.layers.test(T.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&x===ei)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,A.matrixWorld);const F=t.update(A),B=A.material;if(Array.isArray(B)){const j=F.groups;for(let V=0,et=j.length;V<et;V++){const J=j[V],_t=B[J.materialIndex];if(_t&&_t.visible){const wt=v(A,_t,w,x);A.onBeforeShadow(s,A,T,O,F,wt,J),s.renderBufferDirect(O,null,F,wt,A,J),A.onAfterShadow(s,A,T,O,F,wt,J)}}}else if(B.visible){const j=v(A,B,w,x);A.onBeforeShadow(s,A,T,O,F,j,null),s.renderBufferDirect(O,null,F,j,A,null),A.onAfterShadow(s,A,T,O,F,j,null)}}const D=A.children;for(let F=0,B=D.length;F<B;F++)M(D[F],T,O,w,x)}function U(A){A.target.removeEventListener("dispose",U);for(const O in c){const w=c[O],x=A.target.uuid;x in w&&(w[x].dispose(),delete w[x])}}}function M_(s){function t(){let N=!1;const Mt=new Te;let Q=null;const tt=new Te(0,0,0,0);return{setMask:function(ct){Q!==ct&&!N&&(s.colorMask(ct,ct,ct,ct),Q=ct)},setLocked:function(ct){N=ct},setClear:function(ct,Ot,ie,ae,De){De===!0&&(ct*=ae,Ot*=ae,ie*=ae),Mt.set(ct,Ot,ie,ae),tt.equals(Mt)===!1&&(s.clearColor(ct,Ot,ie,ae),tt.copy(Mt))},reset:function(){N=!1,Q=null,tt.set(-1,0,0,0)}}}function e(){let N=!1,Mt=null,Q=null,tt=null;return{setTest:function(ct){ct?K(s.DEPTH_TEST):$(s.DEPTH_TEST)},setMask:function(ct){Mt!==ct&&!N&&(s.depthMask(ct),Mt=ct)},setFunc:function(ct){if(Q!==ct){switch(ct){case Hd:s.depthFunc(s.NEVER);break;case Gd:s.depthFunc(s.ALWAYS);break;case Vd:s.depthFunc(s.LESS);break;case Jo:s.depthFunc(s.LEQUAL);break;case Wd:s.depthFunc(s.EQUAL);break;case Xd:s.depthFunc(s.GEQUAL);break;case Zd:s.depthFunc(s.GREATER);break;case Yd:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Q=ct}},setLocked:function(ct){N=ct},setClear:function(ct){tt!==ct&&(s.clearDepth(ct),tt=ct)},reset:function(){N=!1,Mt=null,Q=null,tt=null}}}function n(){let N=!1,Mt=null,Q=null,tt=null,ct=null,Ot=null,ie=null,ae=null,De=null;return{setTest:function(se){N||(se?K(s.STENCIL_TEST):$(s.STENCIL_TEST))},setMask:function(se){Mt!==se&&!N&&(s.stencilMask(se),Mt=se)},setFunc:function(se,ln,cn){(Q!==se||tt!==ln||ct!==cn)&&(s.stencilFunc(se,ln,cn),Q=se,tt=ln,ct=cn)},setOp:function(se,ln,cn){(Ot!==se||ie!==ln||ae!==cn)&&(s.stencilOp(se,ln,cn),Ot=se,ie=ln,ae=cn)},setLocked:function(se){N=se},setClear:function(se){De!==se&&(s.clearStencil(se),De=se)},reset:function(){N=!1,Mt=null,Q=null,tt=null,ct=null,Ot=null,ie=null,ae=null,De=null}}}const i=new t,r=new e,o=new n,a=new WeakMap,l=new WeakMap;let c={},h={},u=new WeakMap,d=[],f=null,g=!1,_=null,m=null,p=null,E=null,v=null,M=null,U=null,A=new te(0,0,0),T=0,O=!1,w=null,x=null,P=null,D=null,F=null;const B=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,V=0;const et=s.getParameter(s.VERSION);et.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(et)[1]),j=V>=1):et.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(et)[1]),j=V>=2);let J=null,_t={};const wt=s.getParameter(s.SCISSOR_BOX),Ct=s.getParameter(s.VIEWPORT),q=new Te().fromArray(wt),ht=new Te().fromArray(Ct);function k(N,Mt,Q,tt){const ct=new Uint8Array(4),Ot=s.createTexture();s.bindTexture(N,Ot),s.texParameteri(N,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(N,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ie=0;ie<Q;ie++)N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY?s.texImage3D(Mt,0,s.RGBA,1,1,tt,0,s.RGBA,s.UNSIGNED_BYTE,ct):s.texImage2D(Mt+ie,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ct);return Ot}const Y={};Y[s.TEXTURE_2D]=k(s.TEXTURE_2D,s.TEXTURE_2D,1),Y[s.TEXTURE_CUBE_MAP]=k(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[s.TEXTURE_2D_ARRAY]=k(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Y[s.TEXTURE_3D]=k(s.TEXTURE_3D,s.TEXTURE_3D,1,1),i.setClear(0,0,0,1),r.setClear(1),o.setClear(0),K(s.DEPTH_TEST),r.setFunc(Jo),It(!1),ee(uc),K(s.CULL_FACE),Gt(Ci);function K(N){c[N]!==!0&&(s.enable(N),c[N]=!0)}function $(N){c[N]!==!1&&(s.disable(N),c[N]=!1)}function ut(N,Mt){return h[N]!==Mt?(s.bindFramebuffer(N,Mt),h[N]=Mt,N===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=Mt),N===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=Mt),!0):!1}function At(N,Mt){let Q=d,tt=!1;if(N){Q=u.get(Mt),Q===void 0&&(Q=[],u.set(Mt,Q));const ct=N.textures;if(Q.length!==ct.length||Q[0]!==s.COLOR_ATTACHMENT0){for(let Ot=0,ie=ct.length;Ot<ie;Ot++)Q[Ot]=s.COLOR_ATTACHMENT0+Ot;Q.length=ct.length,tt=!0}}else Q[0]!==s.BACK&&(Q[0]=s.BACK,tt=!0);tt&&s.drawBuffers(Q)}function zt(N){return f!==N?(s.useProgram(N),f=N,!0):!1}const I={[qi]:s.FUNC_ADD,[wd]:s.FUNC_SUBTRACT,[bd]:s.FUNC_REVERSE_SUBTRACT};I[Td]=s.MIN,I[Ad]=s.MAX;const Zt={[Rd]:s.ZERO,[Cd]:s.ONE,[Pd]:s.SRC_COLOR,[ul]:s.SRC_ALPHA,[Od]:s.SRC_ALPHA_SATURATE,[Nd]:s.DST_COLOR,[Id]:s.DST_ALPHA,[Ld]:s.ONE_MINUS_SRC_COLOR,[dl]:s.ONE_MINUS_SRC_ALPHA,[Ud]:s.ONE_MINUS_DST_COLOR,[Dd]:s.ONE_MINUS_DST_ALPHA,[Fd]:s.CONSTANT_COLOR,[Bd]:s.ONE_MINUS_CONSTANT_COLOR,[zd]:s.CONSTANT_ALPHA,[kd]:s.ONE_MINUS_CONSTANT_ALPHA};function Gt(N,Mt,Q,tt,ct,Ot,ie,ae,De,se){if(N===Ci){g===!0&&($(s.BLEND),g=!1);return}if(g===!1&&(K(s.BLEND),g=!0),N!==Ed){if(N!==_||se!==O){if((m!==qi||v!==qi)&&(s.blendEquation(s.FUNC_ADD),m=qi,v=qi),se)switch(N){case Ys:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case dc:s.blendFunc(s.ONE,s.ONE);break;case fc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case pc:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Ys:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case dc:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case fc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case pc:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}p=null,E=null,M=null,U=null,A.set(0,0,0),T=0,_=N,O=se}return}ct=ct||Mt,Ot=Ot||Q,ie=ie||tt,(Mt!==m||ct!==v)&&(s.blendEquationSeparate(I[Mt],I[ct]),m=Mt,v=ct),(Q!==p||tt!==E||Ot!==M||ie!==U)&&(s.blendFuncSeparate(Zt[Q],Zt[tt],Zt[Ot],Zt[ie]),p=Q,E=tt,M=Ot,U=ie),(ae.equals(A)===!1||De!==T)&&(s.blendColor(ae.r,ae.g,ae.b,De),A.copy(ae),T=De),_=N,O=!1}function de(N,Mt){N.side===pn?$(s.CULL_FACE):K(s.CULL_FACE);let Q=N.side===an;Mt&&(Q=!Q),It(Q),N.blending===Ys&&N.transparent===!1?Gt(Ci):Gt(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),r.setFunc(N.depthFunc),r.setTest(N.depthTest),r.setMask(N.depthWrite),i.setMask(N.colorWrite);const tt=N.stencilWrite;o.setTest(tt),tt&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Wt(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?K(s.SAMPLE_ALPHA_TO_COVERAGE):$(s.SAMPLE_ALPHA_TO_COVERAGE)}function It(N){w!==N&&(N?s.frontFace(s.CW):s.frontFace(s.CCW),w=N)}function ee(N){N!==Md?(K(s.CULL_FACE),N!==x&&(N===uc?s.cullFace(s.BACK):N===Sd?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):$(s.CULL_FACE),x=N}function Xt(N){N!==P&&(j&&s.lineWidth(N),P=N)}function Wt(N,Mt,Q){N?(K(s.POLYGON_OFFSET_FILL),(D!==Mt||F!==Q)&&(s.polygonOffset(Mt,Q),D=Mt,F=Q)):$(s.POLYGON_OFFSET_FILL)}function _e(N){N?K(s.SCISSOR_TEST):$(s.SCISSOR_TEST)}function C(N){N===void 0&&(N=s.TEXTURE0+B-1),J!==N&&(s.activeTexture(N),J=N)}function y(N,Mt,Q){Q===void 0&&(J===null?Q=s.TEXTURE0+B-1:Q=J);let tt=_t[Q];tt===void 0&&(tt={type:void 0,texture:void 0},_t[Q]=tt),(tt.type!==N||tt.texture!==Mt)&&(J!==Q&&(s.activeTexture(Q),J=Q),s.bindTexture(N,Mt||Y[N]),tt.type=N,tt.texture=Mt)}function Z(){const N=_t[J];N!==void 0&&N.type!==void 0&&(s.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function nt(){try{s.compressedTexImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function st(){try{s.compressedTexImage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function it(){try{s.texSubImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Lt(){try{s.texSubImage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function pt(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function mt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Yt(){try{s.texStorage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function rt(){try{s.texStorage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Tt(){try{s.texImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Kt(){try{s.texImage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ut(N){q.equals(N)===!1&&(s.scissor(N.x,N.y,N.z,N.w),q.copy(N))}function vt(N){ht.equals(N)===!1&&(s.viewport(N.x,N.y,N.z,N.w),ht.copy(N))}function Dt(N,Mt){let Q=l.get(Mt);Q===void 0&&(Q=new WeakMap,l.set(Mt,Q));let tt=Q.get(N);tt===void 0&&(tt=s.getUniformBlockIndex(Mt,N.name),Q.set(N,tt))}function kt(N,Mt){const tt=l.get(Mt).get(N);a.get(Mt)!==tt&&(s.uniformBlockBinding(Mt,tt,N.__bindingPointIndex),a.set(Mt,tt))}function ve(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),c={},J=null,_t={},h={},u=new WeakMap,d=[],f=null,g=!1,_=null,m=null,p=null,E=null,v=null,M=null,U=null,A=new te(0,0,0),T=0,O=!1,w=null,x=null,P=null,D=null,F=null,q.set(0,0,s.canvas.width,s.canvas.height),ht.set(0,0,s.canvas.width,s.canvas.height),i.reset(),r.reset(),o.reset()}return{buffers:{color:i,depth:r,stencil:o},enable:K,disable:$,bindFramebuffer:ut,drawBuffers:At,useProgram:zt,setBlending:Gt,setMaterial:de,setFlipSided:It,setCullFace:ee,setLineWidth:Xt,setPolygonOffset:Wt,setScissorTest:_e,activeTexture:C,bindTexture:y,unbindTexture:Z,compressedTexImage2D:nt,compressedTexImage3D:st,texImage2D:Tt,texImage3D:Kt,updateUBOMapping:Dt,uniformBlockBinding:kt,texStorage2D:Yt,texStorage3D:rt,texSubImage2D:it,texSubImage3D:Lt,compressedTexSubImage2D:pt,compressedTexSubImage3D:mt,scissor:Ut,viewport:vt,reset:ve}}function S_(s,t,e,n,i,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new yt,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,y){return f?new OffscreenCanvas(C,y):ia("canvas")}function _(C,y,Z){let nt=1;const st=_e(C);if((st.width>Z||st.height>Z)&&(nt=Z/Math.max(st.width,st.height)),nt<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const it=Math.floor(nt*st.width),Lt=Math.floor(nt*st.height);u===void 0&&(u=g(it,Lt));const pt=y?g(it,Lt):u;return pt.width=it,pt.height=Lt,pt.getContext("2d").drawImage(C,0,0,it,Lt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+st.width+"x"+st.height+") to ("+it+"x"+Lt+")."),pt}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+st.width+"x"+st.height+")."),C;return C}function m(C){return C.generateMipmaps&&C.minFilter!==En&&C.minFilter!==Ln}function p(C){s.generateMipmap(C)}function E(C,y,Z,nt,st=!1){if(C!==null){if(s[C]!==void 0)return s[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let it=y;if(y===s.RED&&(Z===s.FLOAT&&(it=s.R32F),Z===s.HALF_FLOAT&&(it=s.R16F),Z===s.UNSIGNED_BYTE&&(it=s.R8)),y===s.RED_INTEGER&&(Z===s.UNSIGNED_BYTE&&(it=s.R8UI),Z===s.UNSIGNED_SHORT&&(it=s.R16UI),Z===s.UNSIGNED_INT&&(it=s.R32UI),Z===s.BYTE&&(it=s.R8I),Z===s.SHORT&&(it=s.R16I),Z===s.INT&&(it=s.R32I)),y===s.RG&&(Z===s.FLOAT&&(it=s.RG32F),Z===s.HALF_FLOAT&&(it=s.RG16F),Z===s.UNSIGNED_BYTE&&(it=s.RG8)),y===s.RG_INTEGER&&(Z===s.UNSIGNED_BYTE&&(it=s.RG8UI),Z===s.UNSIGNED_SHORT&&(it=s.RG16UI),Z===s.UNSIGNED_INT&&(it=s.RG32UI),Z===s.BYTE&&(it=s.RG8I),Z===s.SHORT&&(it=s.RG16I),Z===s.INT&&(it=s.RG32I)),y===s.RGB&&Z===s.UNSIGNED_INT_5_9_9_9_REV&&(it=s.RGB9_E5),y===s.RGBA){const Lt=st?Qo:ue.getTransfer(nt);Z===s.FLOAT&&(it=s.RGBA32F),Z===s.HALF_FLOAT&&(it=s.RGBA16F),Z===s.UNSIGNED_BYTE&&(it=Lt===Se?s.SRGB8_ALPHA8:s.RGBA8),Z===s.UNSIGNED_SHORT_4_4_4_4&&(it=s.RGBA4),Z===s.UNSIGNED_SHORT_5_5_5_1&&(it=s.RGB5_A1)}return(it===s.R16F||it===s.R32F||it===s.RG16F||it===s.RG32F||it===s.RGBA16F||it===s.RGBA32F)&&t.get("EXT_color_buffer_float"),it}function v(C,y){let Z;return C?y===null||y===fr||y===pr?Z=s.DEPTH24_STENCIL8:y===Ri?Z=s.DEPTH32F_STENCIL8:y===jo&&(Z=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===fr||y===pr?Z=s.DEPTH_COMPONENT24:y===Ri?Z=s.DEPTH_COMPONENT32F:y===jo&&(Z=s.DEPTH_COMPONENT16),Z}function M(C,y){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==En&&C.minFilter!==Ln?Math.log2(Math.max(y.width,y.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?y.mipmaps.length:1}function U(C){const y=C.target;y.removeEventListener("dispose",U),T(y),y.isVideoTexture&&h.delete(y)}function A(C){const y=C.target;y.removeEventListener("dispose",A),w(y)}function T(C){const y=n.get(C);if(y.__webglInit===void 0)return;const Z=C.source,nt=d.get(Z);if(nt){const st=nt[y.__cacheKey];st.usedTimes--,st.usedTimes===0&&O(C),Object.keys(nt).length===0&&d.delete(Z)}n.remove(C)}function O(C){const y=n.get(C);s.deleteTexture(y.__webglTexture);const Z=C.source,nt=d.get(Z);delete nt[y.__cacheKey],o.memory.textures--}function w(C){const y=n.get(C);if(C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let nt=0;nt<6;nt++){if(Array.isArray(y.__webglFramebuffer[nt]))for(let st=0;st<y.__webglFramebuffer[nt].length;st++)s.deleteFramebuffer(y.__webglFramebuffer[nt][st]);else s.deleteFramebuffer(y.__webglFramebuffer[nt]);y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer[nt])}else{if(Array.isArray(y.__webglFramebuffer))for(let nt=0;nt<y.__webglFramebuffer.length;nt++)s.deleteFramebuffer(y.__webglFramebuffer[nt]);else s.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&s.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let nt=0;nt<y.__webglColorRenderbuffer.length;nt++)y.__webglColorRenderbuffer[nt]&&s.deleteRenderbuffer(y.__webglColorRenderbuffer[nt]);y.__webglDepthRenderbuffer&&s.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const Z=C.textures;for(let nt=0,st=Z.length;nt<st;nt++){const it=n.get(Z[nt]);it.__webglTexture&&(s.deleteTexture(it.__webglTexture),o.memory.textures--),n.remove(Z[nt])}n.remove(C)}let x=0;function P(){x=0}function D(){const C=x;return C>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),x+=1,C}function F(C){const y=[];return y.push(C.wrapS),y.push(C.wrapT),y.push(C.wrapR||0),y.push(C.magFilter),y.push(C.minFilter),y.push(C.anisotropy),y.push(C.internalFormat),y.push(C.format),y.push(C.type),y.push(C.generateMipmaps),y.push(C.premultiplyAlpha),y.push(C.flipY),y.push(C.unpackAlignment),y.push(C.colorSpace),y.join()}function B(C,y){const Z=n.get(C);if(C.isVideoTexture&&Xt(C),C.isRenderTargetTexture===!1&&C.version>0&&Z.__version!==C.version){const nt=C.image;if(nt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(nt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ht(Z,C,y);return}}e.bindTexture(s.TEXTURE_2D,Z.__webglTexture,s.TEXTURE0+y)}function j(C,y){const Z=n.get(C);if(C.version>0&&Z.__version!==C.version){ht(Z,C,y);return}e.bindTexture(s.TEXTURE_2D_ARRAY,Z.__webglTexture,s.TEXTURE0+y)}function V(C,y){const Z=n.get(C);if(C.version>0&&Z.__version!==C.version){ht(Z,C,y);return}e.bindTexture(s.TEXTURE_3D,Z.__webglTexture,s.TEXTURE0+y)}function et(C,y){const Z=n.get(C);if(C.version>0&&Z.__version!==C.version){k(Z,C,y);return}e.bindTexture(s.TEXTURE_CUBE_MAP,Z.__webglTexture,s.TEXTURE0+y)}const J={[ml]:s.REPEAT,[Ki]:s.CLAMP_TO_EDGE,[gl]:s.MIRRORED_REPEAT},_t={[En]:s.NEAREST,[nf]:s.NEAREST_MIPMAP_NEAREST,[yo]:s.NEAREST_MIPMAP_LINEAR,[Ln]:s.LINEAR,[Sa]:s.LINEAR_MIPMAP_NEAREST,[Ji]:s.LINEAR_MIPMAP_LINEAR},wt={[_f]:s.NEVER,[Ef]:s.ALWAYS,[vf]:s.LESS,[xu]:s.LEQUAL,[xf]:s.EQUAL,[Sf]:s.GEQUAL,[yf]:s.GREATER,[Mf]:s.NOTEQUAL};function Ct(C,y){if(y.type===Ri&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===Ln||y.magFilter===Sa||y.magFilter===yo||y.magFilter===Ji||y.minFilter===Ln||y.minFilter===Sa||y.minFilter===yo||y.minFilter===Ji)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(C,s.TEXTURE_WRAP_S,J[y.wrapS]),s.texParameteri(C,s.TEXTURE_WRAP_T,J[y.wrapT]),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,J[y.wrapR]),s.texParameteri(C,s.TEXTURE_MAG_FILTER,_t[y.magFilter]),s.texParameteri(C,s.TEXTURE_MIN_FILTER,_t[y.minFilter]),y.compareFunction&&(s.texParameteri(C,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(C,s.TEXTURE_COMPARE_FUNC,wt[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===En||y.minFilter!==yo&&y.minFilter!==Ji||y.type===Ri&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const Z=t.get("EXT_texture_filter_anisotropic");s.texParameterf(C,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,i.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function q(C,y){let Z=!1;C.__webglInit===void 0&&(C.__webglInit=!0,y.addEventListener("dispose",U));const nt=y.source;let st=d.get(nt);st===void 0&&(st={},d.set(nt,st));const it=F(y);if(it!==C.__cacheKey){st[it]===void 0&&(st[it]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,Z=!0),st[it].usedTimes++;const Lt=st[C.__cacheKey];Lt!==void 0&&(st[C.__cacheKey].usedTimes--,Lt.usedTimes===0&&O(y)),C.__cacheKey=it,C.__webglTexture=st[it].texture}return Z}function ht(C,y,Z){let nt=s.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(nt=s.TEXTURE_2D_ARRAY),y.isData3DTexture&&(nt=s.TEXTURE_3D);const st=q(C,y),it=y.source;e.bindTexture(nt,C.__webglTexture,s.TEXTURE0+Z);const Lt=n.get(it);if(it.version!==Lt.__version||st===!0){e.activeTexture(s.TEXTURE0+Z);const pt=ue.getPrimaries(ue.workingColorSpace),mt=y.colorSpace===wi?null:ue.getPrimaries(y.colorSpace),Yt=y.colorSpace===wi||pt===mt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Yt);let rt=_(y.image,!1,i.maxTextureSize);rt=Wt(y,rt);const Tt=r.convert(y.format,y.colorSpace),Kt=r.convert(y.type);let Ut=E(y.internalFormat,Tt,Kt,y.colorSpace,y.isVideoTexture);Ct(nt,y);let vt;const Dt=y.mipmaps,kt=y.isVideoTexture!==!0,ve=Lt.__version===void 0||st===!0,N=it.dataReady,Mt=M(y,rt);if(y.isDepthTexture)Ut=v(y.format===mr,y.type),ve&&(kt?e.texStorage2D(s.TEXTURE_2D,1,Ut,rt.width,rt.height):e.texImage2D(s.TEXTURE_2D,0,Ut,rt.width,rt.height,0,Tt,Kt,null));else if(y.isDataTexture)if(Dt.length>0){kt&&ve&&e.texStorage2D(s.TEXTURE_2D,Mt,Ut,Dt[0].width,Dt[0].height);for(let Q=0,tt=Dt.length;Q<tt;Q++)vt=Dt[Q],kt?N&&e.texSubImage2D(s.TEXTURE_2D,Q,0,0,vt.width,vt.height,Tt,Kt,vt.data):e.texImage2D(s.TEXTURE_2D,Q,Ut,vt.width,vt.height,0,Tt,Kt,vt.data);y.generateMipmaps=!1}else kt?(ve&&e.texStorage2D(s.TEXTURE_2D,Mt,Ut,rt.width,rt.height),N&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,rt.width,rt.height,Tt,Kt,rt.data)):e.texImage2D(s.TEXTURE_2D,0,Ut,rt.width,rt.height,0,Tt,Kt,rt.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){kt&&ve&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Mt,Ut,Dt[0].width,Dt[0].height,rt.depth);for(let Q=0,tt=Dt.length;Q<tt;Q++)if(vt=Dt[Q],y.format!==Gn)if(Tt!==null)if(kt){if(N)if(y.layerUpdates.size>0){for(const ct of y.layerUpdates){const Ot=vt.width*vt.height;e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Q,0,0,ct,vt.width,vt.height,1,Tt,vt.data.slice(Ot*ct,Ot*(ct+1)),0,0)}y.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Q,0,0,0,vt.width,vt.height,rt.depth,Tt,vt.data,0,0)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Q,Ut,vt.width,vt.height,rt.depth,0,vt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else kt?N&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,Q,0,0,0,vt.width,vt.height,rt.depth,Tt,Kt,vt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,Q,Ut,vt.width,vt.height,rt.depth,0,Tt,Kt,vt.data)}else{kt&&ve&&e.texStorage2D(s.TEXTURE_2D,Mt,Ut,Dt[0].width,Dt[0].height);for(let Q=0,tt=Dt.length;Q<tt;Q++)vt=Dt[Q],y.format!==Gn?Tt!==null?kt?N&&e.compressedTexSubImage2D(s.TEXTURE_2D,Q,0,0,vt.width,vt.height,Tt,vt.data):e.compressedTexImage2D(s.TEXTURE_2D,Q,Ut,vt.width,vt.height,0,vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):kt?N&&e.texSubImage2D(s.TEXTURE_2D,Q,0,0,vt.width,vt.height,Tt,Kt,vt.data):e.texImage2D(s.TEXTURE_2D,Q,Ut,vt.width,vt.height,0,Tt,Kt,vt.data)}else if(y.isDataArrayTexture)if(kt){if(ve&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Mt,Ut,rt.width,rt.height,rt.depth),N)if(y.layerUpdates.size>0){let Q;switch(Kt){case s.UNSIGNED_BYTE:switch(Tt){case s.ALPHA:Q=1;break;case s.LUMINANCE:Q=1;break;case s.LUMINANCE_ALPHA:Q=2;break;case s.RGB:Q=3;break;case s.RGBA:Q=4;break;default:throw new Error(`Unknown texel size for format ${Tt}.`)}break;case s.UNSIGNED_SHORT_4_4_4_4:case s.UNSIGNED_SHORT_5_5_5_1:case s.UNSIGNED_SHORT_5_6_5:Q=1;break;default:throw new Error(`Unknown texel size for type ${Kt}.`)}const tt=rt.width*rt.height*Q;for(const ct of y.layerUpdates)e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,ct,rt.width,rt.height,1,Tt,Kt,rt.data.slice(tt*ct,tt*(ct+1)));y.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,Tt,Kt,rt.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Ut,rt.width,rt.height,rt.depth,0,Tt,Kt,rt.data);else if(y.isData3DTexture)kt?(ve&&e.texStorage3D(s.TEXTURE_3D,Mt,Ut,rt.width,rt.height,rt.depth),N&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,Tt,Kt,rt.data)):e.texImage3D(s.TEXTURE_3D,0,Ut,rt.width,rt.height,rt.depth,0,Tt,Kt,rt.data);else if(y.isFramebufferTexture){if(ve)if(kt)e.texStorage2D(s.TEXTURE_2D,Mt,Ut,rt.width,rt.height);else{let Q=rt.width,tt=rt.height;for(let ct=0;ct<Mt;ct++)e.texImage2D(s.TEXTURE_2D,ct,Ut,Q,tt,0,Tt,Kt,null),Q>>=1,tt>>=1}}else if(Dt.length>0){if(kt&&ve){const Q=_e(Dt[0]);e.texStorage2D(s.TEXTURE_2D,Mt,Ut,Q.width,Q.height)}for(let Q=0,tt=Dt.length;Q<tt;Q++)vt=Dt[Q],kt?N&&e.texSubImage2D(s.TEXTURE_2D,Q,0,0,Tt,Kt,vt):e.texImage2D(s.TEXTURE_2D,Q,Ut,Tt,Kt,vt);y.generateMipmaps=!1}else if(kt){if(ve){const Q=_e(rt);e.texStorage2D(s.TEXTURE_2D,Mt,Ut,Q.width,Q.height)}N&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,Tt,Kt,rt)}else e.texImage2D(s.TEXTURE_2D,0,Ut,Tt,Kt,rt);m(y)&&p(nt),Lt.__version=it.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function k(C,y,Z){if(y.image.length!==6)return;const nt=q(C,y),st=y.source;e.bindTexture(s.TEXTURE_CUBE_MAP,C.__webglTexture,s.TEXTURE0+Z);const it=n.get(st);if(st.version!==it.__version||nt===!0){e.activeTexture(s.TEXTURE0+Z);const Lt=ue.getPrimaries(ue.workingColorSpace),pt=y.colorSpace===wi?null:ue.getPrimaries(y.colorSpace),mt=y.colorSpace===wi||Lt===pt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,mt);const Yt=y.isCompressedTexture||y.image[0].isCompressedTexture,rt=y.image[0]&&y.image[0].isDataTexture,Tt=[];for(let tt=0;tt<6;tt++)!Yt&&!rt?Tt[tt]=_(y.image[tt],!0,i.maxCubemapSize):Tt[tt]=rt?y.image[tt].image:y.image[tt],Tt[tt]=Wt(y,Tt[tt]);const Kt=Tt[0],Ut=r.convert(y.format,y.colorSpace),vt=r.convert(y.type),Dt=E(y.internalFormat,Ut,vt,y.colorSpace),kt=y.isVideoTexture!==!0,ve=it.__version===void 0||nt===!0,N=st.dataReady;let Mt=M(y,Kt);Ct(s.TEXTURE_CUBE_MAP,y);let Q;if(Yt){kt&&ve&&e.texStorage2D(s.TEXTURE_CUBE_MAP,Mt,Dt,Kt.width,Kt.height);for(let tt=0;tt<6;tt++){Q=Tt[tt].mipmaps;for(let ct=0;ct<Q.length;ct++){const Ot=Q[ct];y.format!==Gn?Ut!==null?kt?N&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,ct,0,0,Ot.width,Ot.height,Ut,Ot.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,ct,Dt,Ot.width,Ot.height,0,Ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):kt?N&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,ct,0,0,Ot.width,Ot.height,Ut,vt,Ot.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,ct,Dt,Ot.width,Ot.height,0,Ut,vt,Ot.data)}}}else{if(Q=y.mipmaps,kt&&ve){Q.length>0&&Mt++;const tt=_e(Tt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,Mt,Dt,tt.width,tt.height)}for(let tt=0;tt<6;tt++)if(rt){kt?N&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,Tt[tt].width,Tt[tt].height,Ut,vt,Tt[tt].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,Dt,Tt[tt].width,Tt[tt].height,0,Ut,vt,Tt[tt].data);for(let ct=0;ct<Q.length;ct++){const ie=Q[ct].image[tt].image;kt?N&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,ct+1,0,0,ie.width,ie.height,Ut,vt,ie.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,ct+1,Dt,ie.width,ie.height,0,Ut,vt,ie.data)}}else{kt?N&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,Ut,vt,Tt[tt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,Dt,Ut,vt,Tt[tt]);for(let ct=0;ct<Q.length;ct++){const Ot=Q[ct];kt?N&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,ct+1,0,0,Ut,vt,Ot.image[tt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,ct+1,Dt,Ut,vt,Ot.image[tt])}}}m(y)&&p(s.TEXTURE_CUBE_MAP),it.__version=st.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function Y(C,y,Z,nt,st,it){const Lt=r.convert(Z.format,Z.colorSpace),pt=r.convert(Z.type),mt=E(Z.internalFormat,Lt,pt,Z.colorSpace);if(!n.get(y).__hasExternalTextures){const rt=Math.max(1,y.width>>it),Tt=Math.max(1,y.height>>it);st===s.TEXTURE_3D||st===s.TEXTURE_2D_ARRAY?e.texImage3D(st,it,mt,rt,Tt,y.depth,0,Lt,pt,null):e.texImage2D(st,it,mt,rt,Tt,0,Lt,pt,null)}e.bindFramebuffer(s.FRAMEBUFFER,C),ee(y)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,nt,st,n.get(Z).__webglTexture,0,It(y)):(st===s.TEXTURE_2D||st>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&st<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,nt,st,n.get(Z).__webglTexture,it),e.bindFramebuffer(s.FRAMEBUFFER,null)}function K(C,y,Z){if(s.bindRenderbuffer(s.RENDERBUFFER,C),y.depthBuffer){const nt=y.depthTexture,st=nt&&nt.isDepthTexture?nt.type:null,it=v(y.stencilBuffer,st),Lt=y.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,pt=It(y);ee(y)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,pt,it,y.width,y.height):Z?s.renderbufferStorageMultisample(s.RENDERBUFFER,pt,it,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,it,y.width,y.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Lt,s.RENDERBUFFER,C)}else{const nt=y.textures;for(let st=0;st<nt.length;st++){const it=nt[st],Lt=r.convert(it.format,it.colorSpace),pt=r.convert(it.type),mt=E(it.internalFormat,Lt,pt,it.colorSpace),Yt=It(y);Z&&ee(y)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Yt,mt,y.width,y.height):ee(y)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Yt,mt,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,mt,y.width,y.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function $(C,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,C),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),B(y.depthTexture,0);const nt=n.get(y.depthTexture).__webglTexture,st=It(y);if(y.depthTexture.format===qs)ee(y)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,nt,0,st):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,nt,0);else if(y.depthTexture.format===mr)ee(y)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,nt,0,st):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,nt,0);else throw new Error("Unknown depthTexture format")}function ut(C){const y=n.get(C),Z=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!y.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");$(y.__webglFramebuffer,C)}else if(Z){y.__webglDepthbuffer=[];for(let nt=0;nt<6;nt++)e.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[nt]),y.__webglDepthbuffer[nt]=s.createRenderbuffer(),K(y.__webglDepthbuffer[nt],C,!1)}else e.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer=s.createRenderbuffer(),K(y.__webglDepthbuffer,C,!1);e.bindFramebuffer(s.FRAMEBUFFER,null)}function At(C,y,Z){const nt=n.get(C);y!==void 0&&Y(nt.__webglFramebuffer,C,C.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),Z!==void 0&&ut(C)}function zt(C){const y=C.texture,Z=n.get(C),nt=n.get(y);C.addEventListener("dispose",A);const st=C.textures,it=C.isWebGLCubeRenderTarget===!0,Lt=st.length>1;if(Lt||(nt.__webglTexture===void 0&&(nt.__webglTexture=s.createTexture()),nt.__version=y.version,o.memory.textures++),it){Z.__webglFramebuffer=[];for(let pt=0;pt<6;pt++)if(y.mipmaps&&y.mipmaps.length>0){Z.__webglFramebuffer[pt]=[];for(let mt=0;mt<y.mipmaps.length;mt++)Z.__webglFramebuffer[pt][mt]=s.createFramebuffer()}else Z.__webglFramebuffer[pt]=s.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){Z.__webglFramebuffer=[];for(let pt=0;pt<y.mipmaps.length;pt++)Z.__webglFramebuffer[pt]=s.createFramebuffer()}else Z.__webglFramebuffer=s.createFramebuffer();if(Lt)for(let pt=0,mt=st.length;pt<mt;pt++){const Yt=n.get(st[pt]);Yt.__webglTexture===void 0&&(Yt.__webglTexture=s.createTexture(),o.memory.textures++)}if(C.samples>0&&ee(C)===!1){Z.__webglMultisampledFramebuffer=s.createFramebuffer(),Z.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let pt=0;pt<st.length;pt++){const mt=st[pt];Z.__webglColorRenderbuffer[pt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,Z.__webglColorRenderbuffer[pt]);const Yt=r.convert(mt.format,mt.colorSpace),rt=r.convert(mt.type),Tt=E(mt.internalFormat,Yt,rt,mt.colorSpace,C.isXRRenderTarget===!0),Kt=It(C);s.renderbufferStorageMultisample(s.RENDERBUFFER,Kt,Tt,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+pt,s.RENDERBUFFER,Z.__webglColorRenderbuffer[pt])}s.bindRenderbuffer(s.RENDERBUFFER,null),C.depthBuffer&&(Z.__webglDepthRenderbuffer=s.createRenderbuffer(),K(Z.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(it){e.bindTexture(s.TEXTURE_CUBE_MAP,nt.__webglTexture),Ct(s.TEXTURE_CUBE_MAP,y);for(let pt=0;pt<6;pt++)if(y.mipmaps&&y.mipmaps.length>0)for(let mt=0;mt<y.mipmaps.length;mt++)Y(Z.__webglFramebuffer[pt][mt],C,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,mt);else Y(Z.__webglFramebuffer[pt],C,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0);m(y)&&p(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Lt){for(let pt=0,mt=st.length;pt<mt;pt++){const Yt=st[pt],rt=n.get(Yt);e.bindTexture(s.TEXTURE_2D,rt.__webglTexture),Ct(s.TEXTURE_2D,Yt),Y(Z.__webglFramebuffer,C,Yt,s.COLOR_ATTACHMENT0+pt,s.TEXTURE_2D,0),m(Yt)&&p(s.TEXTURE_2D)}e.unbindTexture()}else{let pt=s.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(pt=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(pt,nt.__webglTexture),Ct(pt,y),y.mipmaps&&y.mipmaps.length>0)for(let mt=0;mt<y.mipmaps.length;mt++)Y(Z.__webglFramebuffer[mt],C,y,s.COLOR_ATTACHMENT0,pt,mt);else Y(Z.__webglFramebuffer,C,y,s.COLOR_ATTACHMENT0,pt,0);m(y)&&p(pt),e.unbindTexture()}C.depthBuffer&&ut(C)}function I(C){const y=C.textures;for(let Z=0,nt=y.length;Z<nt;Z++){const st=y[Z];if(m(st)){const it=C.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,Lt=n.get(st).__webglTexture;e.bindTexture(it,Lt),p(it),e.unbindTexture()}}}const Zt=[],Gt=[];function de(C){if(C.samples>0){if(ee(C)===!1){const y=C.textures,Z=C.width,nt=C.height;let st=s.COLOR_BUFFER_BIT;const it=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Lt=n.get(C),pt=y.length>1;if(pt)for(let mt=0;mt<y.length;mt++)e.bindFramebuffer(s.FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+mt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,Lt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+mt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Lt.__webglFramebuffer);for(let mt=0;mt<y.length;mt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(st|=s.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(st|=s.STENCIL_BUFFER_BIT)),pt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Lt.__webglColorRenderbuffer[mt]);const Yt=n.get(y[mt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Yt,0)}s.blitFramebuffer(0,0,Z,nt,0,0,Z,nt,st,s.NEAREST),l===!0&&(Zt.length=0,Gt.length=0,Zt.push(s.COLOR_ATTACHMENT0+mt),C.depthBuffer&&C.resolveDepthBuffer===!1&&(Zt.push(it),Gt.push(it),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Gt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Zt))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),pt)for(let mt=0;mt<y.length;mt++){e.bindFramebuffer(s.FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+mt,s.RENDERBUFFER,Lt.__webglColorRenderbuffer[mt]);const Yt=n.get(y[mt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,Lt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+mt,s.TEXTURE_2D,Yt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Lt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const y=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[y])}}}function It(C){return Math.min(i.maxSamples,C.samples)}function ee(C){const y=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Xt(C){const y=o.render.frame;h.get(C)!==y&&(h.set(C,y),C.update())}function Wt(C,y){const Z=C.colorSpace,nt=C.format,st=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||Z!==zi&&Z!==wi&&(ue.getTransfer(Z)===Se?(nt!==Gn||st!==Ni)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Z)),y}function _e(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=D,this.resetTextureUnits=P,this.setTexture2D=B,this.setTexture2DArray=j,this.setTexture3D=V,this.setTextureCube=et,this.rebindTextures=At,this.setupRenderTarget=zt,this.updateRenderTargetMipmap=I,this.updateMultisampleRenderTarget=de,this.setupDepthRenderbuffer=ut,this.setupFrameBufferTexture=Y,this.useMultisampledRTT=ee}function E_(s,t){function e(n,i=wi){let r;const o=ue.getTransfer(i);if(n===Ni)return s.UNSIGNED_BYTE;if(n===fu)return s.UNSIGNED_SHORT_4_4_4_4;if(n===pu)return s.UNSIGNED_SHORT_5_5_5_1;if(n===of)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===sf)return s.BYTE;if(n===rf)return s.SHORT;if(n===jo)return s.UNSIGNED_SHORT;if(n===du)return s.INT;if(n===fr)return s.UNSIGNED_INT;if(n===Ri)return s.FLOAT;if(n===fa)return s.HALF_FLOAT;if(n===af)return s.ALPHA;if(n===lf)return s.RGB;if(n===Gn)return s.RGBA;if(n===cf)return s.LUMINANCE;if(n===hf)return s.LUMINANCE_ALPHA;if(n===qs)return s.DEPTH_COMPONENT;if(n===mr)return s.DEPTH_STENCIL;if(n===uf)return s.RED;if(n===mu)return s.RED_INTEGER;if(n===df)return s.RG;if(n===gu)return s.RG_INTEGER;if(n===_u)return s.RGBA_INTEGER;if(n===Ea||n===wa||n===ba||n===Ta)if(o===Se)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ea)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===wa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ba)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ta)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ea)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===wa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ba)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ta)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===mc||n===gc||n===_c||n===vc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===mc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===gc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===_c)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===vc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===xc||n===yc||n===Mc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===xc||n===yc)return o===Se?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Mc)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Sc||n===Ec||n===wc||n===bc||n===Tc||n===Ac||n===Rc||n===Cc||n===Pc||n===Lc||n===Ic||n===Dc||n===Nc||n===Uc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Sc)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ec)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===wc)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===bc)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Tc)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ac)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Rc)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Cc)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Pc)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Lc)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ic)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Dc)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Nc)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Uc)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Aa||n===Oc||n===Fc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Aa)return o===Se?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Oc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Fc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ff||n===Bc||n===zc||n===kc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Aa)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Bc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===zc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===kc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===pr?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}class w_ extends fn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class di extends Xe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const b_={type:"move"};class tl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new di,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new di,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new di,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(b_)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new di;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const T_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,A_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class R_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new nn,r=t.properties.get(i);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Ui({vertexShader:T_,fragmentShader:A_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new bt(new fi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}}class C_ extends vr{constructor(t,e){super();const n=this;let i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null;const _=new R_,m=e.getContextAttributes();let p=null,E=null;const v=[],M=[],U=new yt;let A=null;const T=new fn;T.layers.enable(1),T.viewport=new Te;const O=new fn;O.layers.enable(2),O.viewport=new Te;const w=[T,O],x=new w_;x.layers.enable(1),x.layers.enable(2);let P=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let Y=v[k];return Y===void 0&&(Y=new tl,v[k]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(k){let Y=v[k];return Y===void 0&&(Y=new tl,v[k]=Y),Y.getGripSpace()},this.getHand=function(k){let Y=v[k];return Y===void 0&&(Y=new tl,v[k]=Y),Y.getHandSpace()};function F(k){const Y=M.indexOf(k.inputSource);if(Y===-1)return;const K=v[Y];K!==void 0&&(K.update(k.inputSource,k.frame,c||o),K.dispatchEvent({type:k.type,data:k.inputSource}))}function B(){i.removeEventListener("select",F),i.removeEventListener("selectstart",F),i.removeEventListener("selectend",F),i.removeEventListener("squeeze",F),i.removeEventListener("squeezestart",F),i.removeEventListener("squeezeend",F),i.removeEventListener("end",B),i.removeEventListener("inputsourceschange",j);for(let k=0;k<v.length;k++){const Y=M[k];Y!==null&&(M[k]=null,v[k].disconnect(Y))}P=null,D=null,_.reset(),t.setRenderTarget(p),f=null,d=null,u=null,i=null,E=null,ht.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(U.width,U.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){r=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){a=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(k){c=k},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(k){if(i=k,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",F),i.addEventListener("selectstart",F),i.addEventListener("selectend",F),i.addEventListener("squeeze",F),i.addEventListener("squeezestart",F),i.addEventListener("squeezeend",F),i.addEventListener("end",B),i.addEventListener("inputsourceschange",j),m.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(U),i.renderState.layers===void 0){const Y={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,e,Y),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),E=new ls(f.framebufferWidth,f.framebufferHeight,{format:Gn,type:Ni,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let Y=null,K=null,$=null;m.depth&&($=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Y=m.stencil?mr:qs,K=m.stencil?pr:fr);const ut={colorFormat:e.RGBA8,depthFormat:$,scaleFactor:r};u=new XRWebGLBinding(i,e),d=u.createProjectionLayer(ut),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),E=new ls(d.textureWidth,d.textureHeight,{format:Gn,type:Ni,depthTexture:new Iu(d.textureWidth,d.textureHeight,K,void 0,void 0,void 0,void 0,void 0,void 0,Y),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),ht.setContext(i),ht.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function j(k){for(let Y=0;Y<k.removed.length;Y++){const K=k.removed[Y],$=M.indexOf(K);$>=0&&(M[$]=null,v[$].disconnect(K))}for(let Y=0;Y<k.added.length;Y++){const K=k.added[Y];let $=M.indexOf(K);if($===-1){for(let At=0;At<v.length;At++)if(At>=M.length){M.push(K),$=At;break}else if(M[At]===null){M[At]=K,$=At;break}if($===-1)break}const ut=v[$];ut&&ut.connect(K)}}const V=new L,et=new L;function J(k,Y,K){V.setFromMatrixPosition(Y.matrixWorld),et.setFromMatrixPosition(K.matrixWorld);const $=V.distanceTo(et),ut=Y.projectionMatrix.elements,At=K.projectionMatrix.elements,zt=ut[14]/(ut[10]-1),I=ut[14]/(ut[10]+1),Zt=(ut[9]+1)/ut[5],Gt=(ut[9]-1)/ut[5],de=(ut[8]-1)/ut[0],It=(At[8]+1)/At[0],ee=zt*de,Xt=zt*It,Wt=$/(-de+It),_e=Wt*-de;Y.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(_e),k.translateZ(Wt),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert();const C=zt+Wt,y=I+Wt,Z=ee-_e,nt=Xt+($-_e),st=Zt*I/y*C,it=Gt*I/y*C;k.projectionMatrix.makePerspective(Z,nt,st,it,C,y),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}function _t(k,Y){Y===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(Y.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(i===null)return;_.texture!==null&&(k.near=_.depthNear,k.far=_.depthFar),x.near=O.near=T.near=k.near,x.far=O.far=T.far=k.far,(P!==x.near||D!==x.far)&&(i.updateRenderState({depthNear:x.near,depthFar:x.far}),P=x.near,D=x.far,T.near=P,T.far=D,O.near=P,O.far=D,T.updateProjectionMatrix(),O.updateProjectionMatrix(),k.updateProjectionMatrix());const Y=k.parent,K=x.cameras;_t(x,Y);for(let $=0;$<K.length;$++)_t(K[$],Y);K.length===2?J(x,T,O):x.projectionMatrix.copy(T.projectionMatrix),wt(k,x,Y)};function wt(k,Y,K){K===null?k.matrix.copy(Y.matrixWorld):(k.matrix.copy(K.matrixWorld),k.matrix.invert(),k.matrix.multiply(Y.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy(Y.projectionMatrix),k.projectionMatrixInverse.copy(Y.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=vl*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(k){l=k,d!==null&&(d.fixedFoveation=k),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=k)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(x)};let Ct=null;function q(k,Y){if(h=Y.getViewerPose(c||o),g=Y,h!==null){const K=h.views;f!==null&&(t.setRenderTargetFramebuffer(E,f.framebuffer),t.setRenderTarget(E));let $=!1;K.length!==x.cameras.length&&(x.cameras.length=0,$=!0);for(let At=0;At<K.length;At++){const zt=K[At];let I=null;if(f!==null)I=f.getViewport(zt);else{const Gt=u.getViewSubImage(d,zt);I=Gt.viewport,At===0&&(t.setRenderTargetTextures(E,Gt.colorTexture,d.ignoreDepthValues?void 0:Gt.depthStencilTexture),t.setRenderTarget(E))}let Zt=w[At];Zt===void 0&&(Zt=new fn,Zt.layers.enable(At),Zt.viewport=new Te,w[At]=Zt),Zt.matrix.fromArray(zt.transform.matrix),Zt.matrix.decompose(Zt.position,Zt.quaternion,Zt.scale),Zt.projectionMatrix.fromArray(zt.projectionMatrix),Zt.projectionMatrixInverse.copy(Zt.projectionMatrix).invert(),Zt.viewport.set(I.x,I.y,I.width,I.height),At===0&&(x.matrix.copy(Zt.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),$===!0&&x.cameras.push(Zt)}const ut=i.enabledFeatures;if(ut&&ut.includes("depth-sensing")){const At=u.getDepthInformation(K[0]);At&&At.isValid&&At.texture&&_.init(t,At,i.renderState)}}for(let K=0;K<v.length;K++){const $=M[K],ut=v[K];$!==null&&ut!==void 0&&ut.update($,Y,c||o)}Ct&&Ct(k,Y),Y.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Y}),g=null}const ht=new Pu;ht.setAnimationLoop(q),this.setAnimationLoop=function(k){Ct=k},this.dispose=function(){}}}const Zi=new Wn,P_=new Ee;function L_(s,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Au(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,E,v,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,M)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,E,v):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===an&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===an&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const E=t.get(p),v=E.envMap,M=E.envMapRotation;v&&(m.envMap.value=v,Zi.copy(M),Zi.x*=-1,Zi.y*=-1,Zi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Zi.y*=-1,Zi.z*=-1),m.envMapRotation.value.setFromMatrix4(P_.makeRotationFromEuler(Zi)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,E,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*E,m.scale.value=v*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,E){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===an&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const E=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function I_(s,t,e,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,v){const M=v.program;n.uniformBlockBinding(E,M)}function c(E,v){let M=i[E.id];M===void 0&&(g(E),M=h(E),i[E.id]=M,E.addEventListener("dispose",m));const U=v.program;n.updateUBOMapping(E,U);const A=t.render.frame;r[E.id]!==A&&(d(E),r[E.id]=A)}function h(E){const v=u();E.__bindingPointIndex=v;const M=s.createBuffer(),U=E.__size,A=E.usage;return s.bindBuffer(s.UNIFORM_BUFFER,M),s.bufferData(s.UNIFORM_BUFFER,U,A),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,v,M),M}function u(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(E){const v=i[E.id],M=E.uniforms,U=E.__cache;s.bindBuffer(s.UNIFORM_BUFFER,v);for(let A=0,T=M.length;A<T;A++){const O=Array.isArray(M[A])?M[A]:[M[A]];for(let w=0,x=O.length;w<x;w++){const P=O[w];if(f(P,A,w,U)===!0){const D=P.__offset,F=Array.isArray(P.value)?P.value:[P.value];let B=0;for(let j=0;j<F.length;j++){const V=F[j],et=_(V);typeof V=="number"||typeof V=="boolean"?(P.__data[0]=V,s.bufferSubData(s.UNIFORM_BUFFER,D+B,P.__data)):V.isMatrix3?(P.__data[0]=V.elements[0],P.__data[1]=V.elements[1],P.__data[2]=V.elements[2],P.__data[3]=0,P.__data[4]=V.elements[3],P.__data[5]=V.elements[4],P.__data[6]=V.elements[5],P.__data[7]=0,P.__data[8]=V.elements[6],P.__data[9]=V.elements[7],P.__data[10]=V.elements[8],P.__data[11]=0):(V.toArray(P.__data,B),B+=et.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,D,P.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(E,v,M,U){const A=E.value,T=v+"_"+M;if(U[T]===void 0)return typeof A=="number"||typeof A=="boolean"?U[T]=A:U[T]=A.clone(),!0;{const O=U[T];if(typeof A=="number"||typeof A=="boolean"){if(O!==A)return U[T]=A,!0}else if(O.equals(A)===!1)return O.copy(A),!0}return!1}function g(E){const v=E.uniforms;let M=0;const U=16;for(let T=0,O=v.length;T<O;T++){const w=Array.isArray(v[T])?v[T]:[v[T]];for(let x=0,P=w.length;x<P;x++){const D=w[x],F=Array.isArray(D.value)?D.value:[D.value];for(let B=0,j=F.length;B<j;B++){const V=F[B],et=_(V),J=M%U;J!==0&&U-J<et.boundary&&(M+=U-J),D.__data=new Float32Array(et.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=M,M+=et.storage}}}const A=M%U;return A>0&&(M+=U-A),E.__size=M,E.__cache={},this}function _(E){const v={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(v.boundary=4,v.storage=4):E.isVector2?(v.boundary=8,v.storage=8):E.isVector3||E.isColor?(v.boundary=16,v.storage=12):E.isVector4?(v.boundary=16,v.storage=16):E.isMatrix3?(v.boundary=48,v.storage=48):E.isMatrix4?(v.boundary=64,v.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),v}function m(E){const v=E.target;v.removeEventListener("dispose",m);const M=o.indexOf(v.__bindingPointIndex);o.splice(M,1),s.deleteBuffer(i[v.id]),delete i[v.id],delete r[v.id]}function p(){for(const E in i)s.deleteBuffer(i[E]);o=[],i={},r={}}return{bind:l,update:c,dispose:p}}class D_{constructor(t={}){const{canvas:e=bf(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const f=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const p=[],E=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Bn,this.toneMapping=Pi,this.toneMappingExposure=1;const v=this;let M=!1,U=0,A=0,T=null,O=-1,w=null;const x=new Te,P=new Te;let D=null;const F=new te(0);let B=0,j=e.width,V=e.height,et=1,J=null,_t=null;const wt=new Te(0,0,j,V),Ct=new Te(0,0,j,V);let q=!1;const ht=new Xl;let k=!1,Y=!1;const K=new Ee,$=new L,ut={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let At=!1;function zt(){return T===null?et:1}let I=n;function Zt(S,z){return e.getContext(S,z)}try{const S={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${kl}`),e.addEventListener("webglcontextlost",Mt,!1),e.addEventListener("webglcontextrestored",Q,!1),e.addEventListener("webglcontextcreationerror",tt,!1),I===null){const z="webgl2";if(I=Zt(z,S),I===null)throw Zt(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let Gt,de,It,ee,Xt,Wt,_e,C,y,Z,nt,st,it,Lt,pt,mt,Yt,rt,Tt,Kt,Ut,vt,Dt,kt;function ve(){Gt=new H0(I),Gt.init(),vt=new E_(I,Gt),de=new U0(I,Gt,t,vt),It=new M_(I),ee=new W0(I),Xt=new a_,Wt=new S_(I,Gt,It,Xt,de,vt,ee),_e=new F0(v),C=new k0(v),y=new Jf(I),Dt=new D0(I,y),Z=new G0(I,y,ee,Dt),nt=new Z0(I,Z,y,ee),Tt=new X0(I,de,Wt),mt=new O0(Xt),st=new o_(v,_e,C,Gt,de,Dt,mt),it=new L_(v,Xt),Lt=new c_,pt=new m_(Gt),rt=new I0(v,_e,C,It,nt,d,l),Yt=new y_(v,nt,de),kt=new I_(I,ee,de,It),Kt=new N0(I,Gt,ee),Ut=new V0(I,Gt,ee),ee.programs=st.programs,v.capabilities=de,v.extensions=Gt,v.properties=Xt,v.renderLists=Lt,v.shadowMap=Yt,v.state=It,v.info=ee}ve();const N=new C_(v,I);this.xr=N,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const S=Gt.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=Gt.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return et},this.setPixelRatio=function(S){S!==void 0&&(et=S,this.setSize(j,V,!1))},this.getSize=function(S){return S.set(j,V)},this.setSize=function(S,z,G=!0){if(N.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=S,V=z,e.width=Math.floor(S*et),e.height=Math.floor(z*et),G===!0&&(e.style.width=S+"px",e.style.height=z+"px"),this.setViewport(0,0,S,z)},this.getDrawingBufferSize=function(S){return S.set(j*et,V*et).floor()},this.setDrawingBufferSize=function(S,z,G){j=S,V=z,et=G,e.width=Math.floor(S*G),e.height=Math.floor(z*G),this.setViewport(0,0,S,z)},this.getCurrentViewport=function(S){return S.copy(x)},this.getViewport=function(S){return S.copy(wt)},this.setViewport=function(S,z,G,W){S.isVector4?wt.set(S.x,S.y,S.z,S.w):wt.set(S,z,G,W),It.viewport(x.copy(wt).multiplyScalar(et).round())},this.getScissor=function(S){return S.copy(Ct)},this.setScissor=function(S,z,G,W){S.isVector4?Ct.set(S.x,S.y,S.z,S.w):Ct.set(S,z,G,W),It.scissor(P.copy(Ct).multiplyScalar(et).round())},this.getScissorTest=function(){return q},this.setScissorTest=function(S){It.setScissorTest(q=S)},this.setOpaqueSort=function(S){J=S},this.setTransparentSort=function(S){_t=S},this.getClearColor=function(S){return S.copy(rt.getClearColor())},this.setClearColor=function(){rt.setClearColor.apply(rt,arguments)},this.getClearAlpha=function(){return rt.getClearAlpha()},this.setClearAlpha=function(){rt.setClearAlpha.apply(rt,arguments)},this.clear=function(S=!0,z=!0,G=!0){let W=0;if(S){let H=!1;if(T!==null){const dt=T.texture.format;H=dt===_u||dt===gu||dt===mu}if(H){const dt=T.texture.type,St=dt===Ni||dt===fr||dt===jo||dt===pr||dt===fu||dt===pu,Rt=rt.getClearColor(),Pt=rt.getClearAlpha(),Ht=Rt.r,Vt=Rt.g,Ft=Rt.b;St?(f[0]=Ht,f[1]=Vt,f[2]=Ft,f[3]=Pt,I.clearBufferuiv(I.COLOR,0,f)):(g[0]=Ht,g[1]=Vt,g[2]=Ft,g[3]=Pt,I.clearBufferiv(I.COLOR,0,g))}else W|=I.COLOR_BUFFER_BIT}z&&(W|=I.DEPTH_BUFFER_BIT),G&&(W|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Mt,!1),e.removeEventListener("webglcontextrestored",Q,!1),e.removeEventListener("webglcontextcreationerror",tt,!1),Lt.dispose(),pt.dispose(),Xt.dispose(),_e.dispose(),C.dispose(),nt.dispose(),Dt.dispose(),kt.dispose(),st.dispose(),N.dispose(),N.removeEventListener("sessionstart",ln),N.removeEventListener("sessionend",cn),Un.stop()};function Mt(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function Q(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const S=ee.autoReset,z=Yt.enabled,G=Yt.autoUpdate,W=Yt.needsUpdate,H=Yt.type;ve(),ee.autoReset=S,Yt.enabled=z,Yt.autoUpdate=G,Yt.needsUpdate=W,Yt.type=H}function tt(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function ct(S){const z=S.target;z.removeEventListener("dispose",ct),Ot(z)}function Ot(S){ie(S),Xt.remove(S)}function ie(S){const z=Xt.get(S).programs;z!==void 0&&(z.forEach(function(G){st.releaseProgram(G)}),S.isShaderMaterial&&st.releaseShaderCache(S))}this.renderBufferDirect=function(S,z,G,W,H,dt){z===null&&(z=ut);const St=H.isMesh&&H.matrixWorld.determinant()<0,Rt=He(S,z,G,W,H);It.setMaterial(W,St);let Pt=G.index,Ht=1;if(W.wireframe===!0){if(Pt=Z.getWireframeAttribute(G),Pt===void 0)return;Ht=2}const Vt=G.drawRange,Ft=G.attributes.position;let re=Vt.start*Ht,Re=(Vt.start+Vt.count)*Ht;dt!==null&&(re=Math.max(re,dt.start*Ht),Re=Math.min(Re,(dt.start+dt.count)*Ht)),Pt!==null?(re=Math.max(re,0),Re=Math.min(Re,Pt.count)):Ft!=null&&(re=Math.max(re,0),Re=Math.min(Re,Ft.count));const Ce=Re-re;if(Ce<0||Ce===1/0)return;Dt.setup(H,W,Rt,G,Pt);let hn,le=Kt;if(Pt!==null&&(hn=y.get(Pt),le=Ut,le.setIndex(hn)),H.isMesh)W.wireframe===!0?(It.setLineWidth(W.wireframeLinewidth*zt()),le.setMode(I.LINES)):le.setMode(I.TRIANGLES);else if(H.isLine){let Nt=W.linewidth;Nt===void 0&&(Nt=1),It.setLineWidth(Nt*zt()),H.isLineSegments?le.setMode(I.LINES):H.isLineLoop?le.setMode(I.LINE_LOOP):le.setMode(I.LINE_STRIP)}else H.isPoints?le.setMode(I.POINTS):H.isSprite&&le.setMode(I.TRIANGLES);if(H.isBatchedMesh)H._multiDrawInstances!==null?le.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances):le.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else if(H.isInstancedMesh)le.renderInstances(re,Ce,H.count);else if(G.isInstancedBufferGeometry){const Nt=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,je=Math.min(G.instanceCount,Nt);le.renderInstances(re,Ce,je)}else le.render(re,Ce)};function ae(S,z,G){S.transparent===!0&&S.side===pn&&S.forceSinglePass===!1?(S.side=an,S.needsUpdate=!0,Et(S,z,G),S.side=Di,S.needsUpdate=!0,Et(S,z,G),S.side=pn):Et(S,z,G)}this.compile=function(S,z,G=null){G===null&&(G=S),m=pt.get(G),m.init(z),E.push(m),G.traverseVisible(function(H){H.isLight&&H.layers.test(z.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),S!==G&&S.traverseVisible(function(H){H.isLight&&H.layers.test(z.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),m.setupLights();const W=new Set;return S.traverse(function(H){const dt=H.material;if(dt)if(Array.isArray(dt))for(let St=0;St<dt.length;St++){const Rt=dt[St];ae(Rt,G,H),W.add(Rt)}else ae(dt,G,H),W.add(dt)}),E.pop(),m=null,W},this.compileAsync=function(S,z,G=null){const W=this.compile(S,z,G);return new Promise(H=>{function dt(){if(W.forEach(function(St){Xt.get(St).currentProgram.isReady()&&W.delete(St)}),W.size===0){H(S);return}setTimeout(dt,10)}Gt.get("KHR_parallel_shader_compile")!==null?dt():setTimeout(dt,10)})};let De=null;function se(S){De&&De(S)}function ln(){Un.stop()}function cn(){Un.start()}const Un=new Pu;Un.setAnimationLoop(se),typeof self<"u"&&Un.setContext(self),this.setAnimationLoop=function(S){De=S,N.setAnimationLoop(S),S===null?Un.stop():Un.start()},N.addEventListener("sessionstart",ln),N.addEventListener("sessionend",cn),this.render=function(S,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),N.enabled===!0&&N.isPresenting===!0&&(N.cameraAutoUpdate===!0&&N.updateCamera(z),z=N.getCamera()),S.isScene===!0&&S.onBeforeRender(v,S,z,T),m=pt.get(S,E.length),m.init(z),E.push(m),K.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),ht.setFromProjectionMatrix(K),Y=this.localClippingEnabled,k=mt.init(this.clippingPlanes,Y),_=Lt.get(S,p.length),_.init(),p.push(_),N.enabled===!0&&N.isPresenting===!0){const dt=v.xr.getDepthSensingMesh();dt!==null&&hs(dt,z,-1/0,v.sortObjects)}hs(S,z,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(J,_t),At=N.enabled===!1||N.isPresenting===!1||N.hasDepthSensing()===!1,At&&rt.addToRenderList(_,S),this.info.render.frame++,k===!0&&mt.beginShadows();const G=m.state.shadowsArray;Yt.render(G,S,z),k===!0&&mt.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=_.opaque,H=_.transmissive;if(m.setupLights(),z.isArrayCamera){const dt=z.cameras;if(H.length>0)for(let St=0,Rt=dt.length;St<Rt;St++){const Pt=dt[St];Er(W,H,S,Pt)}At&&rt.render(S);for(let St=0,Rt=dt.length;St<Rt;St++){const Pt=dt[St];Sr(_,S,Pt,Pt.viewport)}}else H.length>0&&Er(W,H,S,z),At&&rt.render(S),Sr(_,S,z);T!==null&&(Wt.updateMultisampleRenderTarget(T),Wt.updateRenderTargetMipmap(T)),S.isScene===!0&&S.onAfterRender(v,S,z),Dt.resetDefaultState(),O=-1,w=null,E.pop(),E.length>0?(m=E[E.length-1],k===!0&&mt.setGlobalState(v.clippingPlanes,m.state.camera)):m=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function hs(S,z,G,W){if(S.visible===!1)return;if(S.layers.test(z.layers)){if(S.isGroup)G=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(z);else if(S.isLight)m.pushLight(S),S.castShadow&&m.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||ht.intersectsSprite(S)){W&&$.setFromMatrixPosition(S.matrixWorld).applyMatrix4(K);const St=nt.update(S),Rt=S.material;Rt.visible&&_.push(S,St,Rt,G,$.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||ht.intersectsObject(S))){const St=nt.update(S),Rt=S.material;if(W&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),$.copy(S.boundingSphere.center)):(St.boundingSphere===null&&St.computeBoundingSphere(),$.copy(St.boundingSphere.center)),$.applyMatrix4(S.matrixWorld).applyMatrix4(K)),Array.isArray(Rt)){const Pt=St.groups;for(let Ht=0,Vt=Pt.length;Ht<Vt;Ht++){const Ft=Pt[Ht],re=Rt[Ft.materialIndex];re&&re.visible&&_.push(S,St,re,G,$.z,Ft)}}else Rt.visible&&_.push(S,St,Rt,G,$.z,null)}}const dt=S.children;for(let St=0,Rt=dt.length;St<Rt;St++)hs(dt[St],z,G,W)}function Sr(S,z,G,W){const H=S.opaque,dt=S.transmissive,St=S.transparent;m.setupLightsView(G),k===!0&&mt.setGlobalState(v.clippingPlanes,G),W&&It.viewport(x.copy(W)),H.length>0&&X(H,z,G),dt.length>0&&X(dt,z,G),St.length>0&&X(St,z,G),It.buffers.depth.setTest(!0),It.buffers.depth.setMask(!0),It.buffers.color.setMask(!0),It.setPolygonOffset(!1)}function Er(S,z,G,W){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[W.id]===void 0&&(m.state.transmissionRenderTarget[W.id]=new ls(1,1,{generateMipmaps:!0,type:Gt.has("EXT_color_buffer_half_float")||Gt.has("EXT_color_buffer_float")?fa:Ni,minFilter:Ji,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ue.workingColorSpace}));const dt=m.state.transmissionRenderTarget[W.id],St=W.viewport||x;dt.setSize(St.z,St.w);const Rt=v.getRenderTarget();v.setRenderTarget(dt),v.getClearColor(F),B=v.getClearAlpha(),B<1&&v.setClearColor(16777215,.5),At?rt.render(G):v.clear();const Pt=v.toneMapping;v.toneMapping=Pi;const Ht=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),m.setupLightsView(W),k===!0&&mt.setGlobalState(v.clippingPlanes,W),X(S,G,W),Wt.updateMultisampleRenderTarget(dt),Wt.updateRenderTargetMipmap(dt),Gt.has("WEBGL_multisampled_render_to_texture")===!1){let Vt=!1;for(let Ft=0,re=z.length;Ft<re;Ft++){const Re=z[Ft],Ce=Re.object,hn=Re.geometry,le=Re.material,Nt=Re.group;if(le.side===pn&&Ce.layers.test(W.layers)){const je=le.side;le.side=an,le.needsUpdate=!0,xt(Ce,G,W,hn,le,Nt),le.side=je,le.needsUpdate=!0,Vt=!0}}Vt===!0&&(Wt.updateMultisampleRenderTarget(dt),Wt.updateRenderTargetMipmap(dt))}v.setRenderTarget(Rt),v.setClearColor(F,B),Ht!==void 0&&(W.viewport=Ht),v.toneMapping=Pt}function X(S,z,G){const W=z.isScene===!0?z.overrideMaterial:null;for(let H=0,dt=S.length;H<dt;H++){const St=S[H],Rt=St.object,Pt=St.geometry,Ht=W===null?St.material:W,Vt=St.group;Rt.layers.test(G.layers)&&xt(Rt,z,G,Pt,Ht,Vt)}}function xt(S,z,G,W,H,dt){S.onBeforeRender(v,z,G,W,H,dt),S.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),H.onBeforeRender(v,z,G,W,S,dt),H.transparent===!0&&H.side===pn&&H.forceSinglePass===!1?(H.side=an,H.needsUpdate=!0,v.renderBufferDirect(G,z,W,H,S,dt),H.side=Di,H.needsUpdate=!0,v.renderBufferDirect(G,z,W,H,S,dt),H.side=pn):v.renderBufferDirect(G,z,W,H,S,dt),S.onAfterRender(v,z,G,W,H,dt)}function Et(S,z,G){z.isScene!==!0&&(z=ut);const W=Xt.get(S),H=m.state.lights,dt=m.state.shadowsArray,St=H.state.version,Rt=st.getParameters(S,H.state,dt,z,G),Pt=st.getProgramCacheKey(Rt);let Ht=W.programs;W.environment=S.isMeshStandardMaterial?z.environment:null,W.fog=z.fog,W.envMap=(S.isMeshStandardMaterial?C:_e).get(S.envMap||W.environment),W.envMapRotation=W.environment!==null&&S.envMap===null?z.environmentRotation:S.envMapRotation,Ht===void 0&&(S.addEventListener("dispose",ct),Ht=new Map,W.programs=Ht);let Vt=Ht.get(Pt);if(Vt!==void 0){if(W.currentProgram===Vt&&W.lightsStateVersion===St)return xe(S,Rt),Vt}else Rt.uniforms=st.getUniforms(S),S.onBuild(G,Rt,v),S.onBeforeCompile(Rt,v),Vt=st.acquireProgram(Rt,Pt),Ht.set(Pt,Vt),W.uniforms=Rt.uniforms;const Ft=W.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Ft.clippingPlanes=mt.uniform),xe(S,Rt),W.needsLights=On(S),W.lightsStateVersion=St,W.needsLights&&(Ft.ambientLightColor.value=H.state.ambient,Ft.lightProbe.value=H.state.probe,Ft.directionalLights.value=H.state.directional,Ft.directionalLightShadows.value=H.state.directionalShadow,Ft.spotLights.value=H.state.spot,Ft.spotLightShadows.value=H.state.spotShadow,Ft.rectAreaLights.value=H.state.rectArea,Ft.ltc_1.value=H.state.rectAreaLTC1,Ft.ltc_2.value=H.state.rectAreaLTC2,Ft.pointLights.value=H.state.point,Ft.pointLightShadows.value=H.state.pointShadow,Ft.hemisphereLights.value=H.state.hemi,Ft.directionalShadowMap.value=H.state.directionalShadowMap,Ft.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Ft.spotShadowMap.value=H.state.spotShadowMap,Ft.spotLightMatrix.value=H.state.spotLightMatrix,Ft.spotLightMap.value=H.state.spotLightMap,Ft.pointShadowMap.value=H.state.pointShadowMap,Ft.pointShadowMatrix.value=H.state.pointShadowMatrix),W.currentProgram=Vt,W.uniformsList=null,Vt}function jt(S){if(S.uniformsList===null){const z=S.currentProgram.getUniforms();S.uniformsList=Ko.seqWithValue(z.seq,S.uniforms)}return S.uniformsList}function xe(S,z){const G=Xt.get(S);G.outputColorSpace=z.outputColorSpace,G.batching=z.batching,G.batchingColor=z.batchingColor,G.instancing=z.instancing,G.instancingColor=z.instancingColor,G.instancingMorph=z.instancingMorph,G.skinning=z.skinning,G.morphTargets=z.morphTargets,G.morphNormals=z.morphNormals,G.morphColors=z.morphColors,G.morphTargetsCount=z.morphTargetsCount,G.numClippingPlanes=z.numClippingPlanes,G.numIntersection=z.numClipIntersection,G.vertexAlphas=z.vertexAlphas,G.vertexTangents=z.vertexTangents,G.toneMapping=z.toneMapping}function He(S,z,G,W,H){z.isScene!==!0&&(z=ut),Wt.resetTextureUnits();const dt=z.fog,St=W.isMeshStandardMaterial?z.environment:null,Rt=T===null?v.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:zi,Pt=(W.isMeshStandardMaterial?C:_e).get(W.envMap||St),Ht=W.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Vt=!!G.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Ft=!!G.morphAttributes.position,re=!!G.morphAttributes.normal,Re=!!G.morphAttributes.color;let Ce=Pi;W.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(Ce=v.toneMapping);const hn=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,le=hn!==void 0?hn.length:0,Nt=Xt.get(W),je=m.state.lights;if(k===!0&&(Y===!0||S!==w)){const gn=S===w&&W.id===O;mt.setState(W,S,gn)}let fe=!1;W.version===Nt.__version?(Nt.needsLights&&Nt.lightsStateVersion!==je.state.version||Nt.outputColorSpace!==Rt||H.isBatchedMesh&&Nt.batching===!1||!H.isBatchedMesh&&Nt.batching===!0||H.isBatchedMesh&&Nt.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Nt.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Nt.instancing===!1||!H.isInstancedMesh&&Nt.instancing===!0||H.isSkinnedMesh&&Nt.skinning===!1||!H.isSkinnedMesh&&Nt.skinning===!0||H.isInstancedMesh&&Nt.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Nt.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Nt.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Nt.instancingMorph===!1&&H.morphTexture!==null||Nt.envMap!==Pt||W.fog===!0&&Nt.fog!==dt||Nt.numClippingPlanes!==void 0&&(Nt.numClippingPlanes!==mt.numPlanes||Nt.numIntersection!==mt.numIntersection)||Nt.vertexAlphas!==Ht||Nt.vertexTangents!==Vt||Nt.morphTargets!==Ft||Nt.morphNormals!==re||Nt.morphColors!==Re||Nt.toneMapping!==Ce||Nt.morphTargetsCount!==le)&&(fe=!0):(fe=!0,Nt.__version=W.version);let Yn=Nt.currentProgram;fe===!0&&(Yn=Et(W,z,H));let xo=!1,ki=!1,va=!1;const Ge=Yn.getUniforms(),pi=Nt.uniforms;if(It.useProgram(Yn.program)&&(xo=!0,ki=!0,va=!0),W.id!==O&&(O=W.id,ki=!0),xo||w!==S){Ge.setValue(I,"projectionMatrix",S.projectionMatrix),Ge.setValue(I,"viewMatrix",S.matrixWorldInverse);const gn=Ge.map.cameraPosition;gn!==void 0&&gn.setValue(I,$.setFromMatrixPosition(S.matrixWorld)),de.logarithmicDepthBuffer&&Ge.setValue(I,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&Ge.setValue(I,"isOrthographic",S.isOrthographicCamera===!0),w!==S&&(w=S,ki=!0,va=!0)}if(H.isSkinnedMesh){Ge.setOptional(I,H,"bindMatrix"),Ge.setOptional(I,H,"bindMatrixInverse");const gn=H.skeleton;gn&&(gn.boneTexture===null&&gn.computeBoneTexture(),Ge.setValue(I,"boneTexture",gn.boneTexture,Wt))}H.isBatchedMesh&&(Ge.setOptional(I,H,"batchingTexture"),Ge.setValue(I,"batchingTexture",H._matricesTexture,Wt),Ge.setOptional(I,H,"batchingColorTexture"),H._colorsTexture!==null&&Ge.setValue(I,"batchingColorTexture",H._colorsTexture,Wt));const xa=G.morphAttributes;if((xa.position!==void 0||xa.normal!==void 0||xa.color!==void 0)&&Tt.update(H,G,Yn),(ki||Nt.receiveShadow!==H.receiveShadow)&&(Nt.receiveShadow=H.receiveShadow,Ge.setValue(I,"receiveShadow",H.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(pi.envMap.value=Pt,pi.flipEnvMap.value=Pt.isCubeTexture&&Pt.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&z.environment!==null&&(pi.envMapIntensity.value=z.environmentIntensity),ki&&(Ge.setValue(I,"toneMappingExposure",v.toneMappingExposure),Nt.needsLights&&we(pi,va),dt&&W.fog===!0&&it.refreshFogUniforms(pi,dt),it.refreshMaterialUniforms(pi,W,et,V,m.state.transmissionRenderTarget[S.id]),Ko.upload(I,jt(Nt),pi,Wt)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Ko.upload(I,jt(Nt),pi,Wt),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&Ge.setValue(I,"center",H.center),Ge.setValue(I,"modelViewMatrix",H.modelViewMatrix),Ge.setValue(I,"normalMatrix",H.normalMatrix),Ge.setValue(I,"modelMatrix",H.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const gn=W.uniformsGroups;for(let ya=0,_d=gn.length;ya<_d;ya++){const lc=gn[ya];kt.update(lc,Yn),kt.bind(lc,Yn)}}return Yn}function we(S,z){S.ambientLightColor.needsUpdate=z,S.lightProbe.needsUpdate=z,S.directionalLights.needsUpdate=z,S.directionalLightShadows.needsUpdate=z,S.pointLights.needsUpdate=z,S.pointLightShadows.needsUpdate=z,S.spotLights.needsUpdate=z,S.spotLightShadows.needsUpdate=z,S.rectAreaLights.needsUpdate=z,S.hemisphereLights.needsUpdate=z}function On(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(S,z,G){Xt.get(S.texture).__webglTexture=z,Xt.get(S.depthTexture).__webglTexture=G;const W=Xt.get(S);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=G===void 0,W.__autoAllocateDepthBuffer||Gt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,z){const G=Xt.get(S);G.__webglFramebuffer=z,G.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(S,z=0,G=0){T=S,U=z,A=G;let W=!0,H=null,dt=!1,St=!1;if(S){const Pt=Xt.get(S);Pt.__useDefaultFramebuffer!==void 0?(It.bindFramebuffer(I.FRAMEBUFFER,null),W=!1):Pt.__webglFramebuffer===void 0?Wt.setupRenderTarget(S):Pt.__hasExternalTextures&&Wt.rebindTextures(S,Xt.get(S.texture).__webglTexture,Xt.get(S.depthTexture).__webglTexture);const Ht=S.texture;(Ht.isData3DTexture||Ht.isDataArrayTexture||Ht.isCompressedArrayTexture)&&(St=!0);const Vt=Xt.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Vt[z])?H=Vt[z][G]:H=Vt[z],dt=!0):S.samples>0&&Wt.useMultisampledRTT(S)===!1?H=Xt.get(S).__webglMultisampledFramebuffer:Array.isArray(Vt)?H=Vt[G]:H=Vt,x.copy(S.viewport),P.copy(S.scissor),D=S.scissorTest}else x.copy(wt).multiplyScalar(et).floor(),P.copy(Ct).multiplyScalar(et).floor(),D=q;if(It.bindFramebuffer(I.FRAMEBUFFER,H)&&W&&It.drawBuffers(S,H),It.viewport(x),It.scissor(P),It.setScissorTest(D),dt){const Pt=Xt.get(S.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+z,Pt.__webglTexture,G)}else if(St){const Pt=Xt.get(S.texture),Ht=z||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Pt.__webglTexture,G||0,Ht)}O=-1},this.readRenderTargetPixels=function(S,z,G,W,H,dt,St){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Rt=Xt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&St!==void 0&&(Rt=Rt[St]),Rt){It.bindFramebuffer(I.FRAMEBUFFER,Rt);try{const Pt=S.texture,Ht=Pt.format,Vt=Pt.type;if(!de.textureFormatReadable(Ht)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!de.textureTypeReadable(Vt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=S.width-W&&G>=0&&G<=S.height-H&&I.readPixels(z,G,W,H,vt.convert(Ht),vt.convert(Vt),dt)}finally{const Pt=T!==null?Xt.get(T).__webglFramebuffer:null;It.bindFramebuffer(I.FRAMEBUFFER,Pt)}}},this.readRenderTargetPixelsAsync=async function(S,z,G,W,H,dt,St){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Rt=Xt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&St!==void 0&&(Rt=Rt[St]),Rt){It.bindFramebuffer(I.FRAMEBUFFER,Rt);try{const Pt=S.texture,Ht=Pt.format,Vt=Pt.type;if(!de.textureFormatReadable(Ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!de.textureTypeReadable(Vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(z>=0&&z<=S.width-W&&G>=0&&G<=S.height-H){const Ft=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Ft),I.bufferData(I.PIXEL_PACK_BUFFER,dt.byteLength,I.STREAM_READ),I.readPixels(z,G,W,H,vt.convert(Ht),vt.convert(Vt),0),I.flush();const re=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);await Tf(I,re,4);try{I.bindBuffer(I.PIXEL_PACK_BUFFER,Ft),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,dt)}finally{I.deleteBuffer(Ft),I.deleteSync(re)}return dt}}finally{const Pt=T!==null?Xt.get(T).__webglFramebuffer:null;It.bindFramebuffer(I.FRAMEBUFFER,Pt)}}},this.copyFramebufferToTexture=function(S,z=null,G=0){S.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),z=arguments[0]||null,S=arguments[1]);const W=Math.pow(2,-G),H=Math.floor(S.image.width*W),dt=Math.floor(S.image.height*W),St=z!==null?z.x:0,Rt=z!==null?z.y:0;Wt.setTexture2D(S,0),I.copyTexSubImage2D(I.TEXTURE_2D,G,0,0,St,Rt,H,dt),It.unbindTexture()},this.copyTextureToTexture=function(S,z,G=null,W=null,H=0){S.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,S=arguments[1],z=arguments[2],H=arguments[3]||0,G=null);let dt,St,Rt,Pt,Ht,Vt;G!==null?(dt=G.max.x-G.min.x,St=G.max.y-G.min.y,Rt=G.min.x,Pt=G.min.y):(dt=S.image.width,St=S.image.height,Rt=0,Pt=0),W!==null?(Ht=W.x,Vt=W.y):(Ht=0,Vt=0);const Ft=vt.convert(z.format),re=vt.convert(z.type);Wt.setTexture2D(z,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,z.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,z.unpackAlignment);const Re=I.getParameter(I.UNPACK_ROW_LENGTH),Ce=I.getParameter(I.UNPACK_IMAGE_HEIGHT),hn=I.getParameter(I.UNPACK_SKIP_PIXELS),le=I.getParameter(I.UNPACK_SKIP_ROWS),Nt=I.getParameter(I.UNPACK_SKIP_IMAGES),je=S.isCompressedTexture?S.mipmaps[H]:S.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,je.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,je.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Rt),I.pixelStorei(I.UNPACK_SKIP_ROWS,Pt),S.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,H,Ht,Vt,dt,St,Ft,re,je.data):S.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,H,Ht,Vt,je.width,je.height,Ft,je.data):I.texSubImage2D(I.TEXTURE_2D,H,Ht,Vt,Ft,re,je),I.pixelStorei(I.UNPACK_ROW_LENGTH,Re),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Ce),I.pixelStorei(I.UNPACK_SKIP_PIXELS,hn),I.pixelStorei(I.UNPACK_SKIP_ROWS,le),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Nt),H===0&&z.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),It.unbindTexture()},this.copyTextureToTexture3D=function(S,z,G=null,W=null,H=0){S.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,W=arguments[1]||null,S=arguments[2],z=arguments[3],H=arguments[4]||0);let dt,St,Rt,Pt,Ht,Vt,Ft,re,Re;const Ce=S.isCompressedTexture?S.mipmaps[H]:S.image;G!==null?(dt=G.max.x-G.min.x,St=G.max.y-G.min.y,Rt=G.max.z-G.min.z,Pt=G.min.x,Ht=G.min.y,Vt=G.min.z):(dt=Ce.width,St=Ce.height,Rt=Ce.depth,Pt=0,Ht=0,Vt=0),W!==null?(Ft=W.x,re=W.y,Re=W.z):(Ft=0,re=0,Re=0);const hn=vt.convert(z.format),le=vt.convert(z.type);let Nt;if(z.isData3DTexture)Wt.setTexture3D(z,0),Nt=I.TEXTURE_3D;else if(z.isDataArrayTexture||z.isCompressedArrayTexture)Wt.setTexture2DArray(z,0),Nt=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,z.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,z.unpackAlignment);const je=I.getParameter(I.UNPACK_ROW_LENGTH),fe=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Yn=I.getParameter(I.UNPACK_SKIP_PIXELS),xo=I.getParameter(I.UNPACK_SKIP_ROWS),ki=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,Ce.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Ce.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Pt),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ht),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Vt),S.isDataTexture||S.isData3DTexture?I.texSubImage3D(Nt,H,Ft,re,Re,dt,St,Rt,hn,le,Ce.data):z.isCompressedArrayTexture?I.compressedTexSubImage3D(Nt,H,Ft,re,Re,dt,St,Rt,hn,Ce.data):I.texSubImage3D(Nt,H,Ft,re,Re,dt,St,Rt,hn,le,Ce),I.pixelStorei(I.UNPACK_ROW_LENGTH,je),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,fe),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Yn),I.pixelStorei(I.UNPACK_SKIP_ROWS,xo),I.pixelStorei(I.UNPACK_SKIP_IMAGES,ki),H===0&&z.generateMipmaps&&I.generateMipmap(Nt),It.unbindTexture()},this.initRenderTarget=function(S){Xt.get(S).__webglFramebuffer===void 0&&Wt.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?Wt.setTextureCube(S,0):S.isData3DTexture?Wt.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?Wt.setTexture2DArray(S,0):Wt.setTexture2D(S,0),It.unbindTexture()},this.resetState=function(){U=0,A=0,T=null,It.reset(),Dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ui}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Hl?"display-p3":"srgb",e.unpackColorSpace=ue.workingColorSpace===pa?"display-p3":"srgb"}}class Yl{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new te(t),this.density=e}clone(){return new Yl(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class N_ extends Xe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Wn,this.environmentIntensity=1,this.environmentRotation=new Wn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class U_{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=_l,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Li()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return Gl("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Li()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Li()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Qe=new L;class sa{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Qe.fromBufferAttribute(this,e),Qe.applyMatrix4(t),this.setXYZ(e,Qe.x,Qe.y,Qe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Qe.fromBufferAttribute(this,e),Qe.applyNormalMatrix(t),this.setXYZ(e,Qe.x,Qe.y,Qe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Qe.fromBufferAttribute(this,e),Qe.transformDirection(t),this.setXYZ(e,Qe.x,Qe.y,Qe.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Hn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=me(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=me(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=me(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=me(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=me(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Hn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Hn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Hn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Hn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=me(e,this.array),n=me(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=me(e,this.array),n=me(n,this.array),i=me(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=me(e,this.array),n=me(n,this.array),i=me(i,this.array),r=me(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new Dn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new sa(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Bu extends xr{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new te(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Cs;const Rr=new L,Ps=new L,Ls=new L,Is=new yt,Cr=new yt,zu=new Ee,Go=new L,Pr=new L,Vo=new L,Ph=new yt,el=new yt,Lh=new yt;class O_ extends Xe{constructor(t=new Bu){if(super(),this.isSprite=!0,this.type="Sprite",Cs===void 0){Cs=new mn;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new U_(e,5);Cs.setIndex([0,1,2,0,2,3]),Cs.setAttribute("position",new sa(n,3,0,!1)),Cs.setAttribute("uv",new sa(n,2,3,!1))}this.geometry=Cs,this.material=t,this.center=new yt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ps.setFromMatrixScale(this.matrixWorld),zu.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ls.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ps.multiplyScalar(-Ls.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const o=this.center;Wo(Go.set(-.5,-.5,0),Ls,o,Ps,i,r),Wo(Pr.set(.5,-.5,0),Ls,o,Ps,i,r),Wo(Vo.set(.5,.5,0),Ls,o,Ps,i,r),Ph.set(0,0),el.set(1,0),Lh.set(1,1);let a=t.ray.intersectTriangle(Go,Pr,Vo,!1,Rr);if(a===null&&(Wo(Pr.set(-.5,.5,0),Ls,o,Ps,i,r),el.set(0,1),a=t.ray.intersectTriangle(Go,Vo,Pr,!1,Rr),a===null))return;const l=t.ray.origin.distanceTo(Rr);l<t.near||l>t.far||e.push({distance:l,point:Rr.clone(),uv:In.getInterpolation(Rr,Go,Pr,Vo,Ph,el,Lh,new yt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Wo(s,t,e,n,i,r){Is.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?(Cr.x=r*Is.x-i*Is.y,Cr.y=i*Is.x+r*Is.y):Cr.copy(Is),s.copy(t),s.x+=Cr.x,s.y+=Cr.y,s.applyMatrix4(zu)}class ga extends nn{constructor(t,e,n,i,r,o,a,l,c){super(t,e,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Zn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);const h=n[i],d=n[i+1]-h,f=(o-h)/d;return(i+f)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),a=this.getPoint(r),l=e||(o.isVector2?new yt:new L);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new L,i=[],r=[],o=[],a=new L,l=new Ee;for(let f=0;f<=t;f++){const g=f/t;i[f]=this.getTangentAt(g,new L)}r[0]=new L,o[0]=new L;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(qe(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(i[f],r[f])}if(e===!0){let f=Math.acos(qe(r[0].dot(r[t]),-1,1));f/=t,i[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(i[g],f*g)),o[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class ql extends Zn{constructor(t=0,e=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new yt){const n=e,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class F_ extends ql{constructor(t,e,n,i,r,o){super(t,e,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function $l(){let s=0,t=0,e=0,n=0;function i(r,o,a,l){s=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,f*=h,i(o,a,d,f)},calc:function(r){const o=r*r,a=o*r;return s+t*r+e*o+n*a}}}const Xo=new L,nl=new $l,il=new $l,sl=new $l;class B_ extends Zn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new L){const n=e,i=this.points,r=i.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%r]:(Xo.subVectors(i[0],i[1]).add(i[0]),c=Xo);const u=i[a%r],d=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(Xo.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Xo),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),nl.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,_,m),il.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,_,m),sl.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(nl.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),il.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),sl.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(nl.calc(l),il.calc(l),sl.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new L().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Ih(s,t,e,n,i){const r=(n-t)*.5,o=(i-e)*.5,a=s*s,l=s*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*s+e}function z_(s,t){const e=1-s;return e*e*t}function k_(s,t){return 2*(1-s)*s*t}function H_(s,t){return s*s*t}function Or(s,t,e,n){return z_(s,t)+k_(s,e)+H_(s,n)}function G_(s,t){const e=1-s;return e*e*e*t}function V_(s,t){const e=1-s;return 3*e*e*s*t}function W_(s,t){return 3*(1-s)*s*s*t}function X_(s,t){return s*s*s*t}function Fr(s,t,e,n,i){return G_(s,t)+V_(s,e)+W_(s,n)+X_(s,i)}class ku extends Zn{constructor(t=new yt,e=new yt,n=new yt,i=new yt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new yt){const n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Fr(t,i.x,r.x,o.x,a.x),Fr(t,i.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Z_ extends Zn{constructor(t=new L,e=new L,n=new L,i=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new L){const n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Fr(t,i.x,r.x,o.x,a.x),Fr(t,i.y,r.y,o.y,a.y),Fr(t,i.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Hu extends Zn{constructor(t=new yt,e=new yt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new yt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new yt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Y_ extends Zn{constructor(t=new L,e=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new L){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new L){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Gu extends Zn{constructor(t=new yt,e=new yt,n=new yt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new yt){const n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(Or(t,i.x,r.x,o.x),Or(t,i.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class q_ extends Zn{constructor(t=new L,e=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new L){const n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(Or(t,i.x,r.x,o.x),Or(t,i.y,r.y,o.y),Or(t,i.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Vu extends Zn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new yt){const n=e,i=this.points,r=(i.length-1)*t,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(Ih(a,l.x,c.x,h.x,u.x),Ih(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new yt().fromArray(i))}return this}}var Dh=Object.freeze({__proto__:null,ArcCurve:F_,CatmullRomCurve3:B_,CubicBezierCurve:ku,CubicBezierCurve3:Z_,EllipseCurve:ql,LineCurve:Hu,LineCurve3:Y_,QuadraticBezierCurve:Gu,QuadraticBezierCurve3:q_,SplineCurve:Vu});class $_ extends Zn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Dh[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const o=i[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const o=r[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new Dh[i.type]().fromJSON(i))}return this}}class K_ extends $_{constructor(t){super(),this.type="Path",this.currentPoint=new yt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Hu(this.currentPoint.clone(),new yt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const r=new Gu(this.currentPoint.clone(),new yt(t,e),new yt(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,o){const a=new ku(this.currentPoint.clone(),new yt(t,e),new yt(n,i),new yt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Vu(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,i,r,o),this}absarc(t,e,n,i,r,o){return this.absellipse(t,e,n,n,i,r,o),this}ellipse(t,e,n,i,r,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,r,o,a,l),this}absellipse(t,e,n,i,r,o,a,l){const c=new ql(t,e,n,i,r,o,a,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Kl extends mn{constructor(t=[new yt(0,-.5),new yt(.5,0),new yt(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=qe(i,0,Math.PI*2);const r=[],o=[],a=[],l=[],c=[],h=1/e,u=new L,d=new yt,f=new L,g=new L,_=new L;let m=0,p=0;for(let E=0;E<=t.length-1;E++)switch(E){case 0:m=t[E+1].x-t[E].x,p=t[E+1].y-t[E].y,f.x=p*1,f.y=-m,f.z=p*0,_.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(_.x,_.y,_.z);break;default:m=t[E+1].x-t[E].x,p=t[E+1].y-t[E].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),l.push(f.x,f.y,f.z),_.copy(g)}for(let E=0;E<=e;E++){const v=n+E*h*i,M=Math.sin(v),U=Math.cos(v);for(let A=0;A<=t.length-1;A++){u.x=t[A].x*M,u.y=t[A].y,u.z=t[A].x*U,o.push(u.x,u.y,u.z),d.x=E/e,d.y=A/(t.length-1),a.push(d.x,d.y);const T=l[3*A+0]*M,O=l[3*A+1],w=l[3*A+0]*U;c.push(T,O,w)}}for(let E=0;E<e;E++)for(let v=0;v<t.length-1;v++){const M=v+E*t.length,U=M,A=M+t.length,T=M+t.length+1,O=M+1;r.push(U,A,O),r.push(T,O,A)}this.setIndex(r),this.setAttribute("position",new Ie(o,3)),this.setAttribute("uv",new Ie(a,2)),this.setAttribute("normal",new Ie(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Kl(t.points,t.segments,t.phiStart,t.phiLength)}}class bi extends Kl{constructor(t=1,e=1,n=4,i=8){const r=new K_;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:i}}static fromJSON(t){return new bi(t.radius,t.length,t.capSegments,t.radialSegments)}}class Jl extends mn{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const r=[],o=[],a=[],l=[],c=new L,h=new yt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const f=n+u/e*i;c.x=t*Math.cos(f),c.y=t*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Ie(o,3)),this.setAttribute("normal",new Ie(a,3)),this.setAttribute("uv",new Ie(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Jl(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class $e extends mn{constructor(t=1,e=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const h=[],u=[],d=[],f=[];let g=0;const _=[],m=n/2;let p=0;E(),o===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new Ie(u,3)),this.setAttribute("normal",new Ie(d,3)),this.setAttribute("uv",new Ie(f,2));function E(){const M=new L,U=new L;let A=0;const T=(e-t)/n;for(let O=0;O<=r;O++){const w=[],x=O/r,P=x*(e-t)+t;for(let D=0;D<=i;D++){const F=D/i,B=F*l+a,j=Math.sin(B),V=Math.cos(B);U.x=P*j,U.y=-x*n+m,U.z=P*V,u.push(U.x,U.y,U.z),M.set(j,T,V).normalize(),d.push(M.x,M.y,M.z),f.push(F,1-x),w.push(g++)}_.push(w)}for(let O=0;O<i;O++)for(let w=0;w<r;w++){const x=_[w][O],P=_[w+1][O],D=_[w+1][O+1],F=_[w][O+1];h.push(x,P,F),h.push(P,D,F),A+=6}c.addGroup(p,A,0),p+=A}function v(M){const U=g,A=new yt,T=new L;let O=0;const w=M===!0?t:e,x=M===!0?1:-1;for(let D=1;D<=i;D++)u.push(0,m*x,0),d.push(0,x,0),f.push(.5,.5),g++;const P=g;for(let D=0;D<=i;D++){const B=D/i*l+a,j=Math.cos(B),V=Math.sin(B);T.x=w*V,T.y=m*x,T.z=w*j,u.push(T.x,T.y,T.z),d.push(0,x,0),A.x=j*.5+.5,A.y=V*.5*x+.5,f.push(A.x,A.y),g++}for(let D=0;D<i;D++){const F=U+D,B=P+D;M===!0?h.push(B,B+1,F):h.push(B+1,B,F),O+=3}c.addGroup(p,O,M===!0?1:2),p+=O}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class jl extends $e{constructor(t=1,e=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new jl(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Pe extends mn{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new L,d=new L,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const E=[],v=p/n;let M=0;p===0&&o===0?M=.5/e:p===n&&l===Math.PI&&(M=-.5/e);for(let U=0;U<=e;U++){const A=U/e;u.x=-t*Math.cos(i+A*r)*Math.sin(o+v*a),u.y=t*Math.cos(o+v*a),u.z=t*Math.sin(i+A*r)*Math.sin(o+v*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(A+M,1-v),E.push(c++)}h.push(E)}for(let p=0;p<n;p++)for(let E=0;E<e;E++){const v=h[p][E+1],M=h[p][E],U=h[p+1][E],A=h[p+1][E+1];(p!==0||o>0)&&f.push(v,M,A),(p!==n-1||l<Math.PI)&&f.push(M,U,A)}this.setIndex(f),this.setAttribute("position",new Ie(g,3)),this.setAttribute("normal",new Ie(_,3)),this.setAttribute("uv",new Ie(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pe(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Ql extends mn{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],l=[],c=[],h=new L,u=new L,d=new L;for(let f=0;f<=n;f++)for(let g=0;g<=i;g++){const _=g/i*r,m=f/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(_),u.y=(t+e*Math.cos(m))*Math.sin(_),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/i),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=i;g++){const _=(i+1)*f+g-1,m=(i+1)*(f-1)+g-1,p=(i+1)*(f-1)+g,E=(i+1)*f+g;o.push(_,m,E),o.push(m,p,E)}this.setIndex(o),this.setAttribute("position",new Ie(a,3)),this.setAttribute("normal",new Ie(l,3)),this.setAttribute("uv",new Ie(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ql(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Bt extends xr{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new te(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vu,this.normalScale=new yt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class _a extends Xe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new te(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}class J_ extends _a{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Xe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new te(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const rl=new Ee,Nh=new L,Uh=new L;class Wu{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new yt(512,512),this.map=null,this.mapPass=null,this.matrix=new Ee,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Xl,this._frameExtents=new yt(1,1),this._viewportCount=1,this._viewports=[new Te(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Nh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Nh),Uh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Uh),e.updateMatrixWorld(),rl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(rl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(rl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Oh=new Ee,Lr=new L,ol=new L;class j_ extends Wu{constructor(){super(new fn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new yt(4,2),this._viewportCount=6,this._viewports=[new Te(2,1,1,1),new Te(0,1,1,1),new Te(3,1,1,1),new Te(1,1,1,1),new Te(3,0,1,1),new Te(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Lr.setFromMatrixPosition(t.matrixWorld),n.position.copy(Lr),ol.copy(n.position),ol.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(ol),n.updateMatrixWorld(),i.makeTranslation(-Lr.x,-Lr.y,-Lr.z),Oh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Oh)}}class tc extends _a{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new j_}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Q_ extends Wu{constructor(){super(new Lu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Fh extends _a{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Xe.DEFAULT_UP),this.updateMatrix(),this.target=new Xe,this.shadow=new Q_}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class tv extends _a{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Xu{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Bh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Bh();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Bh(){return(typeof performance>"u"?Date:performance).now()}const zh=new Ee;class ev{constructor(t,e,n=0,i=1/0){this.ray=new Eu(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new Wl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return zh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(zh),this}intersectObject(t,e=!0,n=[]){return yl(t,this,n,e),n.sort(kh),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)yl(t[i],this,n,e);return n.sort(kh),n}}function kh(s,t){return s.distance-t.distance}function yl(s,t,e,n){let i=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let o=0,a=r.length;o<a;o++)yl(r[o],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:kl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=kl);const cs=[{id:0,label:"Alex",skin:16763812,hair:2889744,outfit:1981066,accent:15857145,hairStyle:1},{id:1,label:"Jordan",skin:13010498,hair:1118481,outfit:1332013,accent:16710083,hairStyle:0},{id:2,label:"Morgan",skin:8142098,hair:656640,outfit:8917815,accent:16701354,hairStyle:2},{id:3,label:"Casey",skin:15777920,hair:8138002,outfit:1461859,accent:14742270,hairStyle:3},{id:4,label:"Riley",skin:9584654,hair:197379,outfit:10105874,accent:16775149,hairStyle:0},{id:5,label:"Sam",skin:16640216,hair:11817737,outfit:4988309,accent:15591934,hairStyle:1}],ec=[{id:"available",label:"🟢 Available",color:58998},{id:"busy",label:"🔴 Busy",color:16729156},{id:"away",label:"🟡 Away",color:16763904},{id:"meeting",label:"🟣 In Meeting",color:11158783}],Ml=Object.fromEntries(ec.map(s=>[s.id,s.color]));function Zu(s,t=0){const e=new di;return Ku(e,s,t),e}function Yu(s,t){s.userData.status=t;const e=s.userData.statusMesh;e&&e.material.color.setHex(Ml[t]??Ml.available)}function qu(s,t,e=0){var i;const n=s.userData.talkRing;if(n&&(n.visible=t,t)){const r=.75+Math.sin(e*6)*.25;n.material.opacity=r,n.material.color.setHex(65416),(i=n.material.emissive)==null||i.setHex(65416),n.material.emissiveIntensity=r*1.2}}function $u(s,t,e){for(s.traverse(n=>{var i;(n.isMesh||n.isSprite)&&((i=n.geometry)==null||i.dispose(),(Array.isArray(n.material)?n.material:[n.material]).forEach(o=>{var a;(a=o==null?void 0:o.map)==null||a.dispose(),o==null||o.dispose()}))});s.children.length;)s.remove(s.children[0]);Ku(s,t,e)}function Ku(s,t,e){const n=cs[e]??cs[0],i=Ds(n.skin,.75),r=Ds(n.outfit,.65,.05),o=Ds(n.accent,.6),a=Ds(n.hair,.9),l=Ds(1118481,.8),c=Ds(1118481,.3),h=(U,A,T=0,O=0,w=0,x=0,P=0,D=0)=>{const F=new bt(U,A);return F.position.set(T,O,w),F.rotation.set(x,P,D),F.castShadow=!0,s.add(F),F};h(new bi(.21,.52,4,12),r),h(new $e(.215,.215,.055,16),l,0,.635),h(new Jt(.26,.09,.04),o,0,1.12,.208),h(new $e(.072,.09,.14,12),i,0,1.49),h(new Pe(.19,20,16),i,0,1.68),h(new Pe(.048,10,8),i,-.2,1.68),h(new Pe(.048,10,8),i,.2,1.68),h(new Pe(.034,10,8),o,-.068,1.7,.163),h(new Pe(.034,10,8),o,.068,1.7,.163),h(new Pe(.021,8,6),c,-.068,1.7,.178),h(new Pe(.021,8,6),c,.068,1.7,.178),nv(s,h,a,n.hairStyle),h(new Pe(.105,10,8),r,-.315,1.39),h(new Pe(.105,10,8),r,.315,1.39);const u=h(new bi(.065,.3,4,8),r,-.31,1.08),d=h(new bi(.065,.3,4,8),r,.31,1.08);h(new Pe(.073,12,9),i,-.32,.72),h(new Pe(.073,12,9),i,.32,.72);const f=h(new bi(.083,.36,4,8),r,-.13,.4),g=h(new bi(.083,.36,4,8),r,.13,.4);h(new Jt(.17,.1,.28),l,-.13,.07,.04),h(new Jt(.17,.1,.28),l,.13,.07,.04),h(new $e(.09,.084,.08,10),l,-.13,.145),h(new $e(.09,.084,.08,10),l,.13,.145);const _=document.createElement("canvas");_.width=256,_.height=56;const m=_.getContext("2d");m.fillStyle="rgba(0,10,30,0.78)",m.roundRect(0,0,256,56,10),m.fill(),m.fillStyle="#aaddff",m.font="bold 26px Inter, sans-serif",m.textAlign="center",m.fillText(t,128,38);const p=new O_(new Bu({map:new ga(_),transparent:!0,depthTest:!1}));p.position.set(0,2.18,0),p.scale.set(1.5,.33,1),s.add(p);const E=Ml[s.userData.status??"available"],v=new bt(new Pe(.065,8,6),new kr({color:E}));v.position.set(.58,2.22,0),s.add(v),s.userData.statusMesh=v;const M=new bt(new Ql(.38,.055,8,32),new kr({color:65416,transparent:!0,opacity:0,depthWrite:!1,depthTest:!1,side:pn}));M.rotation.x=Math.PI/2,M.position.y=.06,M.renderOrder=999,M.visible=!1,s.add(M),s.userData.talkRing=M,s.userData.legL=f,s.userData.legR=g,s.userData.armL=u,s.userData.armR=d,s.userData.walkClock=s.userData.walkClock??0,s.userData.presetId=e}function nv(s,t,e,n){switch(n){case 0:t(new Pe(.193,16,10,0,Math.PI*2,0,.8),e,0,1.69);break;case 1:t(new Pe(.198,16,10,0,Math.PI*2,0,1.1),e,0,1.68);break;case 2:{t(new Pe(.196,16,10,0,Math.PI*2,0,1.05),e,0,1.68);const i=new bt(new bi(.09,.22,4,8),e);i.position.set(0,1.51,-.13),i.rotation.x=.28,i.castShadow=!0,s.add(i);break}case 3:t(new Pe(.238,16,12),e,0,1.74);break;default:t(new Pe(.198,16,10,0,Math.PI*2,0,1.1),e,0,1.68)}}function Ds(s,t=.7,e=0){return new Bt({color:s,roughness:t,metalness:e})}function Ju(s,t,e){const{legL:n,legR:i,armL:r,armR:o}=s.userData;if(!(!n||!i))if(t){s.userData.walkClock+=e*12;const a=Math.sin(s.userData.walkClock)*.42;n.rotation.x=a,i.rotation.x=-a,r&&(r.rotation.x=-a*.55),o&&(o.rotation.x=a*.55)}else{const a=Math.exp(-12*e);n.rotation.x*=a,i.rotation.x*=a,r&&(r.rotation.x*=a),o&&(o.rotation.x*=a)}}const R={minX:-22,maxX:22,minZ:-24,maxZ:12,wallH:4.5,wallT:.3,lobbyZ:4,midZ:-4,centerX:0,doorH:2.2,doorHalfW:.7,leftDoorX:-11,rightDoorX:11,mainDoorH:2.6,mainDoorHalfW:1.5},ot=R;function ge(s,t,e,n,i,r,o,a){const l=new bt(new Jt(r,o,a),t);return l.position.set(e,n,i),s.add(l),l}function iv(){const s=new Bt({color:13946822,roughness:.88,metalness:.04,side:pn}),t=new Bt({color:8026226,roughness:.78,metalness:.08}),e=new Bt({color:15789285,roughness:.94,metalness:0}),n=new Bt({color:15262940,roughness:.9,metalness:0}),i=new Bt({color:14209736,roughness:.18,metalness:.07}),r=new Bt({color:12090440,roughness:.82,metalness:0}),o=new Bt({color:16118766,roughness:.98,metalness:0}),a=new Bt({color:4341816,roughness:.9,metalness:0}),l=new Bt({color:10131600,roughness:.4,metalness:.6}),c=new Bt({color:11061464,roughness:.04,metalness:.08,transparent:!0,opacity:.25,side:pn}),h=new Bt({color:9209984,roughness:.82,metalness:.04}),u=new Bt({color:11579576,roughness:.28,metalness:.82});return{ext:s,span:t,int:e,div:n,tile:i,wood:r,ceil:o,roof:a,frame:l,glass:c,stair:h,rail:u}}function sv(s){const t=iv(),e=ot.wallH,n=ot.wallT,i=ot.maxX-ot.minX,r=ot.maxZ-ot.minZ,o=0,a=(ot.minZ+ot.maxZ)/2,l=4,c=e*l;ge(s,t.tile,o,.04,(ot.lobbyZ+ot.maxZ)/2,i,.08,ot.maxZ-ot.lobbyZ),ge(s,t.wood,o,.04,(ot.minZ+ot.lobbyZ)/2,i,.08,ot.lobbyZ-ot.minZ),ge(s,t.ext,o,c/2,ot.minZ,i,c,n),ge(s,t.ext,ot.minX,c/2,a,n,c,r),ge(s,t.ext,ot.maxX,c/2,a,n,c,r);const h=ot.mainDoorHalfW,u=ot.mainDoorH,d=e/2;ge(s,t.ext,(ot.minX+-h)/2,d,ot.maxZ,-h-ot.minX,e,n),ge(s,t.ext,(h+ot.maxX)/2,d,ot.maxZ,ot.maxX-h,e,n),ge(s,t.ext,0,u+(e-u)/2,ot.maxZ,h*2,e-u,n),ge(s,t.ext,o,e+(c-e)/2,ot.maxZ,i,c-e,n);for(let v=1;v<l;v++){const M=e*v;ge(s,t.span,o,M+.25,ot.maxZ-.08,i+.2,.5,.14),ge(s,t.span,o,M+.25,ot.minZ+.08,i+.2,.5,.14),ge(s,t.span,ot.minX+.06,M+.25,a,.14,.5,r+.2),ge(s,t.span,ot.maxX-.06,M+.25,a,.14,.5,r+.2)}rv(s,t),ov(s,t,h);const f=n*.5,g=n/2;Hh(s,t.div,ot.lobbyZ,ot.minX+f,ot.maxX-f,e,n,ot.leftDoorX,ot.doorHalfW,ot.doorH,ot.rightDoorX,ot.doorHalfW,ot.doorH),Hh(s,t.div,ot.midZ,ot.minX+f,ot.maxX-f,e,n,ot.leftDoorX,ot.doorHalfW,ot.doorH,ot.rightDoorX,ot.doorHalfW,ot.doorH),Gh(s,t.div,ot.centerX,ot.minZ+f,ot.midZ-g,e,n),Gh(s,t.div,ot.centerX,ot.midZ+g,ot.lobbyZ-g,e,n);const _=ge(s,t.ceil,o,e+.05,a,i,.1,r);_.userData.mapHide=!0;const m=s.children.length;ge(s,t.roof,o,c+.3,a,i+1,.6,r+1),lv(s,t.ext,i,r,c);for(let v=m;v<s.children.length;v++)s.children[v].userData.mapHide=!0;av(s,t),cv(s);const p=s.children.length;hv(s,e);for(let v=p;v<s.children.length;v++)s.children[v].userData.mapHide=!0;const E=s.children.length;uv(s);for(let v=E;v<s.children.length;v++)s.children[v].userData.mapShow=!0}function rv(s,t){function r(l,c,h,u){const d=new bt(new Jt(2.3600000000000003,1.7200000000000002,.08),t.frame);d.position.set(l,c,h),d.rotation.y=u,s.add(d);const f=new bt(new fi(2.2,1.6),t.glass);f.position.set(l,c,h),f.rotation.y=u,s.add(f)}const o=ot.wallH,a=[0,1,2,3].map(l=>l*o+o*.6);a.forEach(l=>{[-16,-6,8].forEach(c=>r(ot.minX,l,c,Math.PI/2))}),a.forEach(l=>{[-16,-6,8].forEach(c=>r(ot.maxX,l,c,-Math.PI/2))}),a.forEach(l=>{[-14,0,14].forEach(c=>r(c,l,ot.minZ,Math.PI))}),a.forEach((l,c)=>{c===0?(r(-14,l,ot.maxZ,0),r(14,l,ot.maxZ,0)):[-14,-6,6,14].forEach(h=>r(h,l,ot.maxZ,0))})}function ov(s,t,e,n){[-e-.4,e+.4].forEach(i=>{const r=new bt(new $e(.22,.22,ot.mainDoorH,12),t.ext);r.position.set(i,ot.mainDoorH/2,ot.maxZ+.5),s.add(r)}),ge(s,t.span,0,ot.mainDoorH+.18,ot.maxZ+.7,e*2+2.4,.35,1.8),ge(s,t.int,0,ot.mainDoorH,ot.maxZ+.7,e*2+2.2,.02,1.7)}function av(s,t){for(let c=0;c<9;c++)ge(s,t.stair,16.5,.22*(c+.5),5.5+.28*(c+.5),3,.22,.28);for(let c=0;c<9;c+=2)ge(s,t.rail,16.5-3/2+.1,.22*c+.55,5.5+.28*c,.06,1.1,.06),ge(s,t.rail,16.5+3/2-.1,.22*c+.55,5.5+.28*c,.06,1.1,.06);ge(s,t.rail,16.5,.22*9*.5+.55,5.5+.28*9*.5,3,.06,.28*9+.1);const l=-16.5;for(let c=0;c<9;c++)ge(s,t.stair,l,.22*(c+.5),5.5+.28*(c+.5),3,.22,.28);for(let c=0;c<9;c+=2)ge(s,t.rail,l-3/2+.1,.22*c+.55,5.5+.28*c,.06,1.1,.06),ge(s,t.rail,l+3/2-.1,.22*c+.55,5.5+.28*c,.06,1.1,.06);ge(s,t.rail,l,.22*9*.5+.55,5.5+.28*9*.5,3,.06,.28*9+.1)}function Hh(s,t,e,n,i,r,o,a,l,c,h,u,d){const f=r/2,g=[];let _=n;const m=[];m.push({c:a,hw:l,dh:c}),m.push({c:h,hw:u,dh:d}),m.sort((p,E)=>p.c-E.c),m.forEach(({c:p,hw:E,dh:v})=>{const M=p-E,U=p+E;M>_&&g.push({from:_,to:M,full:!0}),g.push({from:M,to:U,full:!1,dh:v}),_=U}),_<i&&g.push({from:_,to:i,full:!0}),g.forEach(({from:p,to:E,full:v,dh:M})=>{const U=E-p,A=(p+E)/2;if(v)ge(s,t,A,f,e,U,r,o);else{const T=r-M;ge(s,t,A,M+T/2,e,U,T,o)}})}function Gh(s,t,e,n,i,r,o){const a=i-n;if(a<=0)return;const l=new bt(new Jt(o,r,a),t);l.position.set(e,r/2,(n+i)/2),s.add(l)}function lv(s,t,e,n,i){const a=i+.275+.05,l=(ot.minZ+ot.maxZ)/2;[[0,a,ot.maxZ+.05,e+.6,.55,.28],[0,a,ot.minZ-.05,e+.6,.55,.28],[ot.minX-.05,a,l,.28,.55,n+.6],[ot.maxX+.05,a,l,.28,.55,n+.6]].forEach(([h,u,d,f,g,_])=>{const m=new bt(new Jt(f,g,_),t);m.position.set(h,u,d),s.add(m)})}function cv(s){[{color:12863616,x:ot.minX+.06,z1:ot.midZ,z2:ot.lobbyZ},{color:4241520,x:ot.maxX-.06,z1:ot.midZ,z2:ot.lobbyZ},{color:14712880,x:ot.minX+.06,z1:ot.minZ,z2:ot.midZ},{color:3705032,x:ot.maxX-.06,z1:ot.minZ,z2:ot.midZ},{color:8947848,x:0,z1:ot.lobbyZ,z2:ot.maxZ-1}].forEach(({color:e,x:n,z1:i,z2:r})=>{const o=new Bt({color:e,roughness:.7,metalness:0}),a=r-i,l=new bt(new Jt(.06,.04,a),o);l.position.set(n,.05,(i+r)/2),s.add(l)})}function hv(s,t){const e=new Bt({color:14210510,roughness:.85,metalness:.06}),n=new Bt({color:16777215,emissive:16774632,emissiveIntensity:1.2,roughness:.7});[[-8,8],[8,8],[0,8],[-11,0],[11,0],[-14,-10],[-8,-18],[8,-18],[14,-10]].forEach(([r,o])=>{const a=new bt(new Jt(1.2,.06,.65),e);a.position.set(r,t-.04,o),s.add(a);const l=new bt(new Jt(1.1,.01,.55),n);l.position.set(r,t-.02,o),s.add(l)})}function uv(s){[{name:"LOBBY",color:"#cccccc",x:0,z:8,w:16,d:5},{name:"OPS",color:"#ffaa44",x:-11,z:0,w:12,d:6},{name:"FUN",color:"#44ffaa",x:11,z:0,w:12,d:6},{name:"DESIGN",color:"#ff6ba0",x:-11,z:-14,w:14,d:10},{name:"ENGINEERING",color:"#44aaff",x:11,z:-14,w:14,d:10}].forEach(({name:e,color:n,x:i,z:r,w:o,d:a})=>{const l=document.createElement("canvas");l.width=512,l.height=256;const c=l.getContext("2d");c.fillStyle=n+"18",c.fillRect(0,0,512,256),c.strokeStyle=n,c.lineWidth=10,c.strokeRect(6,6,500,244),c.fillStyle=n,c.font="bold 72px Inter, Arial, sans-serif",c.textAlign="center",c.textBaseline="middle",c.fillText(e,256,128);const h=new bt(new fi(o,a),new kr({map:new ga(l),transparent:!0,depthWrite:!1}));h.rotation.x=-Math.PI/2,h.position.set(i,.15,r),s.add(h)})}function dv(s){const t=R,e=new Bt({color:5934140,roughness:.96,metalness:0}),n=new bt(new fi(300,300),e);n.rotation.x=-Math.PI/2,n.position.y=-.01,n.receiveShadow=!0,s.add(n);const i=new Bt({color:12630704,roughness:.88,metalness:0}),r=new bt(new Jt(5,.06,18),i);r.position.set(0,.03,19),r.receiveShadow=!0,s.add(r);const o=new bt(new Jt(14,.06,8),i);o.position.set(0,.03,14.5),o.receiveShadow=!0,s.add(o);const a=new bt(new Jt(t.maxX-t.minX,.06,4),i);a.position.set(0,.03,t.maxZ+2),a.receiveShadow=!0,s.add(a);const l=new Bt({color:11578272,roughness:.9,metalness:0}),c=t.maxX-t.minX,h=t.maxZ-t.minZ,u=new bt(new Jt(c+.8,.22,h+.8),l);u.position.set(0,-.11,(t.minZ+t.maxZ)/2),s.add(u),[[-30,-18],[-30,5],[-30,20],[30,-18],[30,5],[30,20],[-12,26],[12,26],[-36,12],[36,12],[-28,-30],[28,-30]].forEach(([f,g])=>fv(s,f,g)),[[-4,24],[4,24],[-14,14],[14,14]].forEach(([f,g])=>pv(s,f,g)),mv(s),gv(s)}function fv(s,t,e){const n=new Bt({color:5911832,roughness:.92}),i=new Bt({color:3830312,roughness:.95}),r=new bt(new $e(.18,.26,2.2,8),n);r.position.set(t,1.1,e),r.castShadow=!0,s.add(r),[[1.8,2.5,3.4],[1.3,2,4.8],[.7,1.4,6]].forEach(([o,a,l])=>{const c=new bt(new jl(o,a,9),i);c.position.set(t,l,e),c.castShadow=!0,s.add(c)})}function pv(s,t,e){const n=new Bt({color:6316128,roughness:.55,metalness:.75}),i=new Bt({color:16775384,emissive:16773296,emissiveIntensity:1.5,roughness:.4}),r=new bt(new $e(.06,.08,5,8),n);r.position.set(t,2.5,e),r.castShadow=!0,s.add(r);const o=new bt(new Jt(.06,.06,.9),n);o.position.set(t,5.1,e-.4),s.add(o);const a=new bt(new Jt(.45,.14,.28),i);a.position.set(t,4.95,e-.8),s.add(a);const l=new tc(16771232,6,12);l.position.set(t,4.95,e-.8),s.add(l)}function mv(s){const t=[2250154,11149858,8947840,2245666,8947848],e=new Bt({color:1710618,roughness:.8});[[-40,-22],[-40,-16],[-40,-10],[40,-22],[40,-16],[40,-10]].forEach(([i,r],o)=>{const a=t[o%t.length],l=new Bt({color:a,roughness:.45,metalness:.3}),c=new bt(new Jt(4.4,1.4,2),l);c.position.set(i,.72,r),c.castShadow=!0,s.add(c);const h=new bt(new Jt(2.8,.7,1.85),l);h.position.set(i-.2,1.8,r),s.add(h),[[-1.5,-1.05],[-1.5,1.05],[1.5,-1.05],[1.5,1.05]].forEach(([u,d])=>{const f=new bt(new $e(.36,.36,.22,12),e);f.rotation.z=Math.PI/2,f.position.set(i+u,.36,r+d),s.add(f)})})}function gv(s){const t=new Bt({color:4878400,roughness:1});[[-80,-60,30,8,20],[80,-60,28,7,18],[0,-80,40,6,25],[-50,-70,35,9,22],[55,-70,32,7,20]].forEach(([e,n,i,r,o])=>{const a=new bt(new Jt(i,r,o),t);a.position.set(e,r/2-2,n),s.add(a)})}const Ns=R.leftDoorX,Us=R.rightDoorX,Fe=R.doorHalfW,Mi=R.doorH,Os=.1,vo=[{id:"main-left",label:"Main Entrance",hinge:{x:-1.5,y:R.mainDoorH/2,z:R.maxZ},meshOffset:{x:R.mainDoorHalfW/2,y:0,z:0},w:R.mainDoorHalfW,h:R.mainDoorH,d:Os,closedRY:0,openRY:Math.PI/2,closedAABB:{minX:-1.5,maxX:0,minZ:R.maxZ-.14,maxZ:R.maxZ+.14}},{id:"main-right",label:"Main Entrance",hinge:{x:R.mainDoorHalfW,y:R.mainDoorH/2,z:R.maxZ},meshOffset:{x:-1.5/2,y:0,z:0},w:R.mainDoorHalfW,h:R.mainDoorH,d:Os,closedRY:0,openRY:-Math.PI/2,closedAABB:{minX:0,maxX:R.mainDoorHalfW,minZ:R.maxZ-.14,maxZ:R.maxZ+.14}},{id:"ops",label:"Ops Room",hinge:{x:Ns-Fe,y:Mi/2,z:R.lobbyZ},meshOffset:{x:Fe,y:0,z:0},w:Fe*2,h:Mi,d:Os,closedRY:0,openRY:-Math.PI/2,closedAABB:{minX:Ns-Fe,maxX:Ns+Fe,minZ:R.lobbyZ-.12,maxZ:R.lobbyZ+.12}},{id:"fun",label:"Fun Room",hinge:{x:Us+Fe,y:Mi/2,z:R.lobbyZ},meshOffset:{x:-Fe,y:0,z:0},w:Fe*2,h:Mi,d:Os,closedRY:0,openRY:Math.PI/2,closedAABB:{minX:Us-Fe,maxX:Us+Fe,minZ:R.lobbyZ-.12,maxZ:R.lobbyZ+.12}},{id:"design",label:"Design Room",hinge:{x:Ns-Fe,y:Mi/2,z:R.midZ},meshOffset:{x:Fe,y:0,z:0},w:Fe*2,h:Mi,d:Os,closedRY:0,openRY:-Math.PI/2,closedAABB:{minX:Ns-Fe,maxX:Ns+Fe,minZ:R.midZ-.12,maxZ:R.midZ+.12}},{id:"engineering",label:"Engineering Room",hinge:{x:Us+Fe,y:Mi/2,z:R.midZ},meshOffset:{x:-Fe,y:0,z:0},w:Fe*2,h:Mi,d:Os,closedRY:0,openRY:Math.PI/2,closedAABB:{minX:Us-Fe,maxX:Us+Fe,minZ:R.midZ-.12,maxZ:R.midZ+.12}}],Mr={};function _v(s){const t=new Bt({color:8016944,roughness:.72,metalness:.02,side:pn}),e=new Bt({color:13937220,roughness:.28,metalness:.88}),n=new Bt({color:6176286,roughness:.8,metalness:0});return vo.forEach(i=>{const r=new di;r.position.set(i.hinge.x,i.hinge.y,i.hinge.z),s.add(r);const o=new bt(new Jt(i.w,i.h,i.d),t);o.position.set(i.meshOffset.x,i.meshOffset.y,i.meshOffset.z),o.userData.doorId=i.id,r.add(o);const a=i.meshOffset;[-.45,.32].forEach(f=>{const g=new bt(new Jt(i.w*.85,.04,i.d*1.2),n);g.position.set(a.x,a.y+f,a.z+i.d*.1),r.add(g)});const l=a.x+(a.x>=0?-i.w*.36:i.w*.36),c=new bt(new Pe(.05,8,6),e);c.position.set(l,a.y-.08,a.z+i.d*.65),r.add(c);const h=c.clone();h.position.z=a.z-i.d*.65,r.add(h);const u=i.id==="main-left"||i.id==="main-right",d=u?i.openRY:i.closedRY;r.rotation.y=d,Mr[i.id]={open:u,targetRY:d,currentRY:d,pivot:r}}),{update:vv,toggleDoor:ni,getNearbyDoor:ju,getClosedColliders:Qu}}function vv(s){Object.values(Mr).forEach(t=>{Math.abs(t.currentRY-t.targetRY)>5e-4&&(t.currentRY+=(t.targetRY-t.currentRY)*Math.min(1,s*7),t.pivot.rotation.y=t.currentRY)})}function ni(s){const t=Mr[s],e=vo.find(n=>n.id===s);if(!(!t||!e))return t.open=!t.open,t.targetRY=t.open?e.openRY:e.closedRY,t.open}function ju(s,t=2.8){let e=null,n=t;return vo.forEach(i=>{const r=s.x-i.hinge.x,o=s.z-i.hinge.z,a=Math.sqrt(r*r+o*o);a<n&&(n=a,e={def:i,state:Mr[i.id]})}),e}function Fs(s){var t;return((t=Mr[s])==null?void 0:t.open)??!1}function Qu(){const s=[];return vo.forEach(t=>{const e=Mr[t.id];if(!e)return;Math.abs(e.currentRY-t.closedRY)<.18&&s.push(t.closedAABB)}),s}function xv(s){const t=document.getElementById("canvas"),e=new D_({canvas:t,antialias:!0});e.setSize(window.innerWidth,window.innerHeight),e.setPixelRatio(Math.min(window.devicePixelRatio,2)),e.shadowMap.enabled=!0,e.shadowMap.type=lu,e.toneMapping=hu,e.toneMappingExposure=1;const n=new N_;n.background=new te(9357544),n.fog=new Yl(11195624,.007);const i=new fn(80,window.innerWidth/window.innerHeight,.1,300);i.position.set(0,1.7,22),n.add(new tv(16775408,.9)),n.add(new J_(10407144,5929544,.9));const r=new Fh(16774616,3.2);r.position.set(40,70,35),r.castShadow=!0,r.shadow.mapSize.set(2048,2048),r.shadow.camera.near=1,r.shadow.camera.far=120,r.shadow.camera.left=-50,r.shadow.camera.right=50,r.shadow.camera.top=50,r.shadow.camera.bottom=-50,r.shadow.radius=3,r.shadow.bias=-.001,n.add(r);const o=new Fh(13164021,.6);o.position.set(-25,30,-20),n.add(o),[{pos:[-5,3.8,-14],color:16773344,intensity:25,radius:18},{pos:[5,3.8,-14],color:16773344,intensity:25,radius:18},{pos:[-11,3.8,0],color:16774376,intensity:22,radius:16},{pos:[11,3.8,0],color:16774376,intensity:22,radius:16},{pos:[0,3.8,8],color:16775412,intensity:28,radius:22}].forEach(({pos:d,color:f,intensity:g,radius:_})=>{const m=new tc(f,g,_);m.position.set(...d),n.add(m)}),s==null||s(10,"Laying foundations…"),dv(n),s==null||s(35,"Building structure…"),sv(n),s==null||s(65,"Installing doors…");const l=_v(n);s==null||s(90,"Finishing touches…"),n.userData.doors=l,window.addEventListener("resize",()=>{i.aspect=window.innerWidth/window.innerHeight,i.updateProjectionMatrix(),e.setSize(window.innerWidth,window.innerHeight)});const c=new Xu;function h(){requestAnimationFrame(h);const d=c.getDelta();l.update(d),e.render(n,i)}h();let u=null;return s==null||s(100,"Ready!"),setTimeout(()=>{u&&u()},200),{scene:n,camera:i,renderer:e,onShipLoaded:d=>{u=d}}}const Vh=[{id:"design-screen",label:"Design Board",zone:"DESIGN",tool:"Excalidraw",url:"https://excalidraw.com",position:{x:R.minX+.12,y:2.2,z:-14},rotationY:Math.PI/2,width:4.5,height:2.8,color:16739232,emoji:"✏️"},{id:"engineering-screen",label:"Code Docs",zone:"ENGINEERING",tool:"HackMD",url:"https://hackmd.io",position:{x:R.maxX-.12,y:2.2,z:-14},rotationY:-Math.PI/2,width:4.5,height:2.8,color:4500223,emoji:"💻"},{id:"ops-screen",label:"Ops Dashboard",zone:"OPS",tool:"Grafana",url:"https://play.grafana.org",position:{x:R.minX+.12,y:2.2,z:0},rotationY:Math.PI/2,width:4,height:2.5,color:16755268,emoji:"📊"},{id:"fun-screen",label:"Vibe Zone",zone:"FUN",tool:"Spotify",url:"https://open.spotify.com/embed/playlist/37i9dQZF1DX0XUsuxWHRQd?utm_source=generator&theme=0",position:{x:R.maxX-.12,y:2.2,z:0},rotationY:-Math.PI/2,width:4,height:2.5,color:4521898,emoji:"🎵"}];function yv(s){const t=[];return Vh.forEach(e=>{const n=new di;n.position.set(e.position.x,e.position.y,e.position.z),n.rotation.y=e.rotationY,s.add(n);const i=.1,r=new Bt({color:1710618,roughness:.3,metalness:.85}),o=(g,_,m,p,E,v)=>{const M=new bt(new Jt(p,E,v),r);M.position.set(g,_,m),n.add(M)};o(0,e.height/2+i/2,0,e.width+i*2,i,i*2),o(0,-e.height/2-i/2,0,e.width+i*2,i,i*2),o(-e.width/2-i/2,0,0,i,e.height+i*2,i*2),o(e.width/2+i/2,0,0,i,e.height+i*2,i*2);const a=new Bt({color:e.color,emissive:e.color,emissiveIntensity:2.5,roughness:.08}),l=(g,_,m,p,E,v)=>{const M=new bt(new Jt(p,E,v),a);M.position.set(g,_,m),n.add(M)};l(0,e.height/2,.02,e.width,.04,.04),l(0,-e.height/2,.02,e.width,.04,.04),l(-e.width/2,0,.02,.04,e.height,.04),l(e.width/2,0,.02,.04,e.height,.04);const c=Mv(e),h=new Bt({map:c,emissiveMap:c,emissive:new te(e.color),emissiveIntensity:.14,roughness:.1}),u=new bt(new fi(e.width,e.height),h);u.position.set(0,0,.02),u.userData.screen=e,n.add(u),t.push(u);const d=new tc(e.color,16,8);d.position.set(0,0,.6),n.add(d);let f=Math.random()*Math.PI*2;(function g(){requestAnimationFrame(g),f+=.018,h.emissiveIntensity=.12+Math.sin(f)*.04,d.intensity=14+Math.sin(f*.65)*4})()}),{meshes:t,screens:Vh}}function Mv(s){const e=Math.round(512*(s.height/s.width)),n=document.createElement("canvas");n.width=512,n.height=e;const i=n.getContext("2d"),r="#"+s.color.toString(16).padStart(6,"0");i.fillStyle="#060c18",i.fillRect(0,0,512,e),i.fillStyle="rgba(200,230,255,0.035)";for(let l=0;l<512;l+=32)for(let c=0;c<e;c+=32)i.fillRect(l,c,2,2);const o=i.createLinearGradient(0,0,512,0);o.addColorStop(0,r+"55"),o.addColorStop(1,"transparent"),i.fillStyle=o,i.fillRect(0,0,512,46),i.fillStyle=r,i.font="bold 16px Inter, monospace",i.textAlign="left",i.fillText(s.zone,14,30),i.fillStyle="rgba(255,255,255,0.38)",i.font="12px Inter, monospace",i.textAlign="right",i.fillText(s.tool,498,30),i.strokeStyle=r+"44",i.lineWidth=1,i.beginPath(),i.moveTo(0,48),i.lineTo(512,48),i.stroke();const a=Math.round(e*.27);return i.font=`${a}px sans-serif`,i.textAlign="center",i.fillText(s.emoji,512/2,e*.52),i.fillStyle="#fff",i.font=`bold ${Math.round(e*.1)}px Inter, monospace`,i.textAlign="center",i.shadowColor=r,i.shadowBlur=18,i.fillText(s.label,512/2,e*.72),i.shadowBlur=0,i.fillStyle=r+"bb",i.font=`${Math.round(e*.062)}px Inter, monospace`,i.textAlign="center",i.fillText("[ E ] or click to open",512/2,e*.88),i.strokeStyle=r+"55",i.lineWidth=2,i.beginPath(),i.moveTo(0,e-2),i.lineTo(512,e-2),i.stroke(),new ga(n)}const Zo=.38,be=R.wallT/2+.01,Gs=R.leftDoorX,Vs=R.rightDoorX,Si=R.doorHalfW,Wh=R.mainDoorHalfW,td=[{minX:R.minX,maxX:-Wh,minZ:R.maxZ-be,maxZ:R.maxZ+be},{minX:Wh,maxX:R.maxX,minZ:R.maxZ-be,maxZ:R.maxZ+be},{minX:R.minX,maxX:R.maxX,minZ:R.minZ-be,maxZ:R.minZ+be},{minX:R.minX-be,maxX:R.minX+be,minZ:R.minZ,maxZ:R.maxZ},{minX:R.maxX-be,maxX:R.maxX+be,minZ:R.minZ,maxZ:R.maxZ},{minX:R.minX,maxX:Gs-Si,minZ:R.lobbyZ-be,maxZ:R.lobbyZ+be},{minX:Gs+Si,maxX:Vs-Si,minZ:R.lobbyZ-be,maxZ:R.lobbyZ+be},{minX:Vs+Si,maxX:R.maxX,minZ:R.lobbyZ-be,maxZ:R.lobbyZ+be},{minX:R.minX,maxX:Gs-Si,minZ:R.midZ-be,maxZ:R.midZ+be},{minX:Gs+Si,maxX:Vs-Si,minZ:R.midZ-be,maxZ:R.midZ+be},{minX:Vs+Si,maxX:R.maxX,minZ:R.midZ-be,maxZ:R.midZ+be},{minX:R.centerX-be,maxX:R.centerX+be,minZ:R.minZ,maxZ:R.lobbyZ},{minX:-80,maxX:80,minZ:68,maxZ:70},{minX:-80,maxX:80,minZ:-70,maxZ:-68},{minX:-70,maxX:-68,minZ:-70,maxZ:70},{minX:68,maxX:70,minZ:-70,maxZ:70}];let ed=[];function Sv(s){ed=s}function Ev(s,t,e){const n=Math.max(e.minX,Math.min(s,e.maxX)),i=Math.max(e.minZ,Math.min(t,e.maxZ)),r=s-n,o=t-i,a=r*r+o*o;if(a<Zo*Zo&&a>1e-6){const l=Math.sqrt(a),c=Zo-l;return{x:s+r/l*c,z:t+o/l*c}}return a===0?{x:s+Zo,z:t}:null}function al(s,t){let e=t.x,n=t.z;const i=[...td,...Qu(),...ed];for(let r=0;r<2;r++)for(const o of i){const a=Ev(e,n,o);a&&(e=a.x,n=a.z)}return{x:e,z:n}}function ra(s){const t=s.x,e=s.z;if(e>R.maxZ||e<R.minZ||t<R.minX||t>R.maxX)return"OUTSIDE";if(e>R.lobbyZ)return"LOBBY";const n=t<R.centerX,i=e>R.midZ,r=e<=R.midZ;return i&&n?"OPS":i&&!n?"FUN":r&&n?"DESIGN":"ENGINEERING"}const wv={mainDoor:{x:0,z:R.maxZ+.5},lobbyIn:{x:0,z:R.maxZ-1.5},opsEntry:{x:Gs,z:R.lobbyZ-1},funEntry:{x:Vs,z:R.lobbyZ-1},designEntry:{x:Gs,z:R.midZ-1},engEntry:{x:Vs,z:R.midZ-1}};function bv(s,t){const e=ra(s),n=ra(t);if(e===n)return[{x:t.x,z:t.z}];const i={x:t.x,z:t.z},r=wv,o={"OUTSIDE→LOBBY":[r.mainDoor,r.lobbyIn],"OUTSIDE→OPS":[r.mainDoor,r.lobbyIn,r.opsEntry],"OUTSIDE→FUN":[r.mainDoor,r.lobbyIn,r.funEntry],"OUTSIDE→DESIGN":[r.mainDoor,r.lobbyIn,r.opsEntry,r.designEntry],"OUTSIDE→ENGINEERING":[r.mainDoor,r.lobbyIn,r.funEntry,r.engEntry],"LOBBY→OPS":[r.opsEntry],"LOBBY→FUN":[r.funEntry],"LOBBY→DESIGN":[r.opsEntry,r.designEntry],"LOBBY→ENGINEERING":[r.funEntry,r.engEntry],"LOBBY→OUTSIDE":[r.mainDoor],"OPS→LOBBY":[r.opsEntry],"OPS→DESIGN":[r.designEntry],"OPS→FUN":[r.opsEntry,r.funEntry],"OPS→ENGINEERING":[r.opsEntry,r.funEntry,r.engEntry],"OPS→OUTSIDE":[r.opsEntry,r.mainDoor],"FUN→LOBBY":[r.funEntry],"FUN→ENGINEERING":[r.engEntry],"FUN→OPS":[r.funEntry,r.opsEntry],"FUN→DESIGN":[r.funEntry,r.opsEntry,r.designEntry],"FUN→OUTSIDE":[r.funEntry,r.mainDoor],"DESIGN→OPS":[r.designEntry],"DESIGN→LOBBY":[r.designEntry,r.opsEntry],"DESIGN→FUN":[r.designEntry,r.opsEntry,r.funEntry],"DESIGN→ENGINEERING":[r.designEntry,r.opsEntry,r.funEntry,r.engEntry],"DESIGN→OUTSIDE":[r.designEntry,r.opsEntry,r.mainDoor],"ENGINEERING→FUN":[r.engEntry],"ENGINEERING→LOBBY":[r.engEntry,r.funEntry],"ENGINEERING→OPS":[r.engEntry,r.funEntry,r.opsEntry],"ENGINEERING→DESIGN":[r.engEntry,r.funEntry,r.opsEntry,r.designEntry],"ENGINEERING→OUTSIDE":[r.engEntry,r.mainDoor]},a=`${e}→${n}`;return[...o[a]??[],i]}const Bs=5.5,Tv=5,Xh=2,Zh=12,Av=1.65,Yh=60,Rv=64,Cv=57;function Pv(s,t,e){const n={};let i=Math.PI,r=0,o="flat",a=[],l=0,c=!1,h=!1,u=!1,d=.28,f=Tv,g=0,_=0,m=0,p=22,E=38,v=!1;const M={active:!1,x:0,y:0,id:-1,ox:0,oy:0},U={active:!1,lx:0,ly:0,id:-1},A={active:!1,dist:0},T=document.getElementById("vjoy-base"),O=document.getElementById("vjoy-stick");document.addEventListener("keydown",q=>{if(n[q.code]=!0,q.code==="KeyR"&&(s.position.set(0,0,22),i=Math.PI,r=0,a=[],c=!1,Lv("Respawned at Entrance")),q.code==="Tab"){q.preventDefault();const ht=["flat","overview","third","first"];P(ht[(ht.indexOf(o)+1)%ht.length])}q.code==="Escape"&&o!=="third"&&P("third")}),document.addEventListener("keyup",q=>{n[q.code]=!1}),document.addEventListener("mousemove",q=>{if(document.pointerLockElement===e){o==="first"&&(r=Math.max(-1.2,Math.min(.5,r-q.movementY*.002))),i-=q.movementX*.0025;return}if(h)if(o==="overview"){const ht=E*1.534*.9/window.innerHeight;m-=q.movementX*ht,p+=q.movementY*ht,m=Math.max(-60,Math.min(60,m)),p=Math.max(-60,Math.min(60,p)),v=!0,(Math.abs(q.movementX)>2||Math.abs(q.movementY)>2)&&(u=!0)}else o==="third"?(i-=q.movementX*.005,d=Math.max(-.05,Math.min(1,d+q.movementY*.003)),(Math.abs(q.movementX)>2||Math.abs(q.movementY)>2)&&(u=!0)):(i-=q.movementX*.005,(Math.abs(q.movementX)>2||Math.abs(q.movementY)>2)&&(u=!0))}),e.addEventListener("mousedown",q=>{q.button===0&&(h=!0,u=!1,o==="overview"&&(e.style.cursor="grabbing"))}),document.addEventListener("mouseup",q=>{q.button===0&&(h=!1,o==="overview"&&(e.style.cursor="grab"))}),e.addEventListener("contextmenu",q=>q.preventDefault()),e.addEventListener("wheel",q=>{if(o!=="overview"&&o!=="third")return;q.preventDefault();const ht=q.deltaMode===0?q.deltaY:q.deltaY*24,k=Math.pow(.997,ht);if(o==="overview"){const Y=E;E=Math.max(14,Math.min(60,E*k));const K=E-Y,$=Math.tan(t.fov*Math.PI/180/2),ut=window.innerWidth/window.innerHeight,At=q.clientX/window.innerWidth-.5,zt=-(q.clientY/window.innerHeight-.5);m-=At*K*2*$*ut,p+=zt*K*2*$,m=Math.max(-60,Math.min(60,m)),p=Math.max(-60,Math.min(60,p)),v=!0}else f=Math.max(Xh,Math.min(Zh,f*k))},{passive:!1}),e.addEventListener("touchstart",q=>{if(o!=="flat"){q.preventDefault();for(let ht=0;ht<q.changedTouches.length;ht++){const k=q.changedTouches[ht];o==="overview"?U.active||(U.active=!0,U.id=k.identifier,U.lx=k.clientX,U.ly=k.clientY,h=!0,u=!1):k.clientX<window.innerWidth*.5&&!M.active?(M.active=!0,M.id=k.identifier,M.ox=k.clientX,M.oy=k.clientY,M.x=0,M.y=0,T&&(T.style.left=k.clientX-40+"px",T.style.top=k.clientY-40+"px",T.style.display="block",O&&(O.style.transform="translate(-50%,-50%)"))):k.clientX>=window.innerWidth*.5&&!U.active&&(U.active=!0,U.id=k.identifier,U.lx=k.clientX,U.ly=k.clientY)}if(q.touches.length>=2){const ht=q.touches[0],k=q.touches[1],Y=k.clientX-ht.clientX,K=k.clientY-ht.clientY;A.active=!0,A.dist=Math.sqrt(Y*Y+K*K)}}},{passive:!1}),e.addEventListener("touchmove",q=>{if(o!=="flat"){q.preventDefault();for(let ht=0;ht<q.changedTouches.length;ht++){const k=q.changedTouches[ht];if(k.identifier===M.id){const Y=k.clientX-M.ox,K=k.clientY-M.oy,$=40,ut=Math.sqrt(Y*Y+K*K),At=ut>$?$/ut:1;M.x=Y*At/$,M.y=K*At/$,O&&(O.style.transform=`translate(calc(-50% + ${Y*At}px), calc(-50% + ${K*At}px))`)}if(k.identifier===U.id){const Y=k.clientX-U.lx,K=k.clientY-U.ly;if(o==="overview"){const $=E*1.534*.9/window.innerHeight;m-=Y*$,p+=K*$,m=Math.max(-60,Math.min(60,m)),p=Math.max(-60,Math.min(60,p)),v=!0,(Math.abs(Y)>2||Math.abs(K)>2)&&(u=!0)}else i-=Y*.004,d=Math.max(-.05,Math.min(1,d+K*.003));U.lx=k.clientX,U.ly=k.clientY}}if(A.active&&q.touches.length>=2){const ht=q.touches[0],k=q.touches[1],Y=k.clientX-ht.clientX,K=k.clientY-ht.clientY,$=Math.sqrt(Y*Y+K*K);if(A.dist>0){const ut=A.dist/$;o==="overview"?E=Math.max(14,Math.min(60,E*ut)):o==="third"&&(f=Math.max(Xh,Math.min(Zh,f*ut)))}A.dist=$}}},{passive:!1}),e.addEventListener("touchend",q=>{if(o!=="flat"){q.preventDefault();for(let ht=0;ht<q.changedTouches.length;ht++){const k=q.changedTouches[ht];k.identifier===M.id&&(M.active=!1,M.x=0,M.y=0,M.id=-1,T&&(T.style.display="none")),k.identifier===U.id&&(U.active=!1,U.id=-1,h=!1)}q.touches.length<2&&(A.active=!1,A.dist=0)}},{passive:!1});function w(q){a=bv({x:s.position.x,z:s.position.z},q),l=0,c=!0,v=!1,o==="overview"&&x(q)}function x(q){const ht=document.getElementById("overview-marker");if(!ht)return;const k=new L(q.x,0,q.z);k.project(t),ht.style.left=(k.x*.5+.5)*window.innerWidth+"px",ht.style.top=(-k.y*.5+.5)*window.innerHeight+"px",ht.style.display="block"}function P(q){var $;o=q;const ht=document.getElementById("overview-panel");ht&&(ht.style.display=o==="overview"?"flex":"none");const k=document.getElementById("overview-marker");k&&o!=="overview"&&(k.style.display="none"),(o==="third"||o==="overview")&&(($=document.exitPointerLock)==null||$.call(document)),q!=="third"&&(t.fov=Yh,t.updateProjectionMatrix());const Y="ontouchstart"in window||navigator.maxTouchPoints>0,K=document.getElementById("vjoy-zone");K&&(K.style.display=Y&&(q==="third"||q==="first")?"block":"none"),M.active=!1,M.x=0,M.y=0,T&&(T.style.display="none"),e.style.cursor=o==="overview"?"grab":"pointer",e.style.visibility=o==="flat"?"hidden":"visible",document.querySelectorAll(".vtbtn").forEach(ut=>ut.classList.toggle("active",ut.dataset.view===o))}const D=new L,F=new L,B=new L,j=new L,V=new L,et=new L(0,1,0);function J(q){j.copy(s.position);let ht=!1;if(o==="flat"){if(B.set(0,0,0),(n.KeyW||n.ArrowUp)&&(B.z-=1),(n.KeyS||n.ArrowDown)&&(B.z+=1),(n.KeyA||n.ArrowLeft)&&(B.x-=1),(n.KeyD||n.ArrowRight)&&(B.x+=1),(n.KeyW||n.KeyS||n.KeyA||n.KeyD||n.ArrowUp||n.ArrowDown||n.ArrowLeft||n.ArrowRight)&&c&&(c=!1,a=[]),c&&a.length>0&&B.lengthSq()===0){const K=a[l],$=K.x-s.position.x,ut=K.z-s.position.z,At=Math.sqrt($*$+ut*ut);At<.25?++l>=a.length&&(c=!1,a=[]):B.set($/At,0,ut/At)}if(B.lengthSq()>0){B.normalize(),s.position.x+=B.x*Bs*q,s.position.z+=B.z*Bs*q;let $=Math.atan2(B.x,B.z)-s.rotation.y;for(;$>Math.PI;)$-=Math.PI*2;for(;$<-Math.PI;)$+=Math.PI*2;s.rotation.y+=$*Math.min(1,20*q),ht=!0}const Y=al(j,s.position);s.position.set(Y.x,0,Y.z),t.position.set(s.position.x,60,s.position.z),t.lookAt(s.position.x,0,s.position.z)}else if(o==="overview"){if(c){const Y=1-Math.exp(-8*q);m+=(s.position.x-m)*Y,p+=(s.position.z-p)*Y,v=!1}else if(!v){const Y=1-Math.exp(-5*q);m+=(s.position.x-m)*Y,p+=(s.position.z-p)*Y}V.set(m,E,p+1);const k=t.position.distanceTo(V)>22?20:8;if(t.position.lerp(V,1-Math.exp(-k*q)),t.lookAt(m,0,p),c&&a.length>0){const Y=a[l],K=Y.x-s.position.x,$=Y.z-s.position.z,ut=Math.sqrt(K*K+$*$);ut<.25?++l>=a.length&&(c=!1,a=[]):(s.position.x+=K/ut*Bs*1.4*q,s.position.z+=$/ut*Bs*1.4*q,s.rotation.y=Math.atan2(K,$),ht=!0)}}else if(o==="third"){const k=_t(q);ht=k.isMoving;const Y=al(j,s.position);if(s.position.set(Y.x,0,Y.z),ht&&!h){let I=s.rotation.y-i;for(;I>Math.PI;)I-=Math.PI*2;for(;I<-Math.PI;)I+=Math.PI*2;const Zt=k.fromKeys?5:3;i+=I*Zt*q}const K=wt(s.position.x,s.position.z,i,f),$=K<f*.85,ut=s.position.y+1.2;g+=q*12,_+=((ht?1:0)-_)*Math.min(1,8*q);const At=Math.sin(g)*.035*_;V.set(s.position.x-Math.sin(i)*Math.cos(d)*K,ut+Math.sin(d)*K+At,s.position.z-Math.cos(i)*Math.cos(d)*K),K<f*.92?t.position.copy(V):t.position.lerp(V,1-Math.exp(-14*q)),t.lookAt(s.position.x,ut,s.position.z);const zt=$?Cv:ht?Rv:Yh;t.fov+=(zt-t.fov)*Math.min(1,6*q),t.updateProjectionMatrix()}else{ht=_t(q).isMoving;const k=al(j,s.position);s.position.set(k.x,0,k.z),t.position.set(s.position.x,Av,s.position.z),t.rotation.order="YXZ",t.rotation.set(r,Math.PI+i,0)}return ht}function _t(q){t.getWorldDirection(D),D.y=0,D.normalize(),F.crossVectors(D,et).normalize(),B.set(0,0,0),(n.KeyW||n.ArrowUp)&&B.addScaledVector(D,1),(n.KeyS||n.ArrowDown)&&B.addScaledVector(D,-1),(n.KeyA||n.ArrowLeft)&&B.addScaledVector(F,-1),(n.KeyD||n.ArrowRight)&&B.addScaledVector(F,1),M.active&&(B.addScaledVector(D,-M.y),B.addScaledVector(F,M.x),c&&(c=!1,a=[]));const ht=n.KeyW||n.KeyS||n.KeyA||n.KeyD||n.ArrowUp||n.ArrowDown||n.ArrowLeft||n.ArrowRight,k=ht;if(ht&&c&&(c=!1,a=[]),c&&a.length>0&&B.lengthSq()===0){const Y=a[l],K=Y.x-s.position.x,$=Y.z-s.position.z,ut=Math.sqrt(K*K+$*$);ut<.25?++l>=a.length&&(c=!1,a=[]):B.set(K/ut,0,$/ut)}if(B.lengthSq()>0){B.normalize(),s.position.x+=B.x*Bs*q,s.position.z+=B.z*Bs*q;let K=Math.atan2(B.x,B.z)-s.rotation.y;for(;K>Math.PI;)K-=Math.PI*2;for(;K<-Math.PI;)K+=Math.PI*2;return s.rotation.y+=K*Math.min(1,20*q),{isMoving:!0,fromKeys:k}}return{isMoving:!1,fromKeys:k}}function wt(q,ht,k,Y){const K=-Math.sin(k),$=-Math.cos(k);let ut=Y;for(const At of td){const zt=Ct(q,ht,K,$,At);zt>.3&&zt<ut&&(ut=zt-.25)}return Math.max(.8,ut)}function Ct(q,ht,k,Y,K){const $=k===0?1e10:1/k,ut=Y===0?1e10:1/Y,At=(K.minX-q)*$,zt=(K.maxX-q)*$,I=(K.minZ-ht)*ut,Zt=(K.maxZ-ht)*ut,Gt=Math.max(Math.min(At,zt),Math.min(I,Zt)),de=Math.min(Math.max(At,zt),Math.max(I,Zt));return de<.001||Gt>de?1/0:Gt>.001?Gt:1/0}return P(o),{update:J,navigate:w,setMode:P,getMode:()=>o,isDragMoved:()=>u,setNavPath:q=>{a=q,l=0,c=!0}}}function Lv(s){const t=document.getElementById("hud-toast");t&&(t.textContent=s,t.classList.add("show"),clearTimeout(t._t),t._t=setTimeout(()=>t.classList.remove("show"),2e3))}function Iv(s){const t=[];return Dv(s,t),Nv(s,t),Uv(s,t),Ov(s,t),Fv(s,t),{colliders:t}}const ne={oak:()=>new Bt({color:11565120,roughness:.82,metalness:0}),white:()=>new Bt({color:15789284,roughness:.72,metalness:0}),dark:()=>new Bt({color:3024928,roughness:.62,metalness:.08}),metal:()=>new Bt({color:9474200,roughness:.38,metalness:.8}),chair:()=>new Bt({color:2767456,roughness:.82,metalness:0}),pink:()=>new Bt({color:13656192,roughness:.72,metalness:0}),green:()=>new Bt({color:4761712,roughness:.72,metalness:0}),amber:()=>new Bt({color:15241280,roughness:.72,metalness:0}),blue:()=>new Bt({color:4227264,roughness:.72,metalness:0}),screen:()=>new Bt({color:1054752,emissive:1056832,emissiveIntensity:.6,roughness:.08}),bean:()=>new Bt({color:9453728,roughness:.92,metalness:0}),sofa:()=>new Bt({color:4878400,roughness:.88,metalness:0})};function Nn(s,t,e,n,i,r,o,a,l,c=.12){const h=new bt(new Jt(r,o,a),t);return h.position.set(e,n,i),s.add(h),l&&l.push({minX:e-r/2-c,maxX:e+r/2+c,minZ:i-a/2-c,maxZ:i+a/2+c}),h}function Ii(s,t,e,n,i,r,o){const a=o??ne.oak(),l=.76,c=.06,h=l-c,u=.05;Nn(s,a,t,l-c/2,e,n,c,i,r,.1);const d=[t-n/2+.12,t+n/2-.12],f=[e-i/2+.12,e+i/2-.12];d.forEach(g=>f.forEach(_=>{const m=new bt(new $e(u,u,h,6),ne.metal());m.position.set(g,h/2,_),s.add(m)}))}function Sn(s,t,e,n=0,i,r){const o=r??ne.chair(),a=new di;a.position.set(t,0,e),a.rotation.y=n,s.add(a);const l=new bt(new Jt(.5,.07,.5),o);l.position.y=.46,a.add(l);const c=new bt(new Jt(.5,.52,.06),o);c.position.set(0,.75,-.22),a.add(c);const h=ne.metal();[[-.2,-.2],[.2,-.2],[-.2,.2],[.2,.2]].forEach(([u,d])=>{const f=new bt(new $e(.03,.03,.46,5),h);f.position.set(u,.23,d),a.add(f)}),i&&i.push({minX:t-.35,maxX:t+.35,minZ:e-.35,maxZ:e+.35})}function Fn(s,t,e,n,i=0){const r=new di;r.position.set(t,e,n),r.rotation.y=i,s.add(r);const o=new bt(new Jt(.54,.32,.04),ne.screen());o.position.y=.22,r.add(o);const a=new bt(new $e(.015,.015,.18,5),ne.metal());a.position.y=.07,r.add(a);const l=new bt(new Jt(.22,.02,.14),ne.metal());l.position.y=0,r.add(l)}function Xn(s,t,e){const n=new bt(new $e(.15,.1,.3,7),ne.amber());n.position.set(t,.15,e),s.add(n);const i=new bt(new Pe(.3,8,6),ne.green());i.position.set(t,.55,e),s.add(i)}function Dv(s,t){Ii(s,-11,-14,4.5,2,t),Sn(s,-11-2.6,-14-.5,0,t),Sn(s,-11-2.6,-14+.5,0,t),Sn(s,-11+2.6,-14-.5,Math.PI,t),Sn(s,-11+2.6,-14+.5,Math.PI,t),Sn(s,-11,-14-1.2,Math.PI/2,t,ne.pink()),Sn(s,-11,-14+1.2,-Math.PI/2,t,ne.pink());const i=new bt(new Jt(5,2.4,.06),new Bt({color:16448248,roughness:.5}));i.position.set(-11,1.8,R.minZ+.1),s.add(i),Nn(s,ne.white(),R.minX+.5,1,-18,.5,2,3,t),Ii(s,R.minX+1.2,-12,2,.8,t),Fn(s,R.minX+1,.76,-14+1.8,Math.PI/2),Fn(s,R.minX+1,.76,-14+2.2,Math.PI/2),Sn(s,R.minX+2,-12,Math.PI/2,t,ne.pink()),Xn(s,R.minX+.5,R.midZ+.6),Xn(s,-3,R.minZ+.6)}function Nv(s,t){[-20,-16,-12,-8].forEach(r=>{Ii(s,R.maxX-1.4,r,1.8,.7,t,ne.white()),Fn(s,R.maxX-1.1,.76,r-.18,-Math.PI/2),Fn(s,R.maxX-1.1,.76,r+.18,-Math.PI/2),Sn(s,R.maxX-2.5,r,-Math.PI/2,t,ne.blue())}),Nn(s,ne.dark(),7,1.1,R.minZ+.6,.8,2.2,.6,t),Nn(s,ne.dark(),8,1.1,R.minZ+.6,.8,2.2,.6,t),Nn(s,ne.dark(),9,1.1,R.minZ+.6,.8,2.2,.6,t),[-4,-3,-2].forEach(r=>{const o=new bt(new Jt(.6,.02,.4),new Bt({color:65348,emissive:65348,emissiveIntensity:3}));o.position.set(11+r,1.6,R.minZ+.32),s.add(o)}),Ii(s,11,-13,3,.75,t),Ii(s,11,-15,3,.75,t),Fn(s,11-.8,.76,-13),Fn(s,11,.76,-13),Fn(s,11+.8,.76,-13),Fn(s,11-.8,.76,-15,Math.PI),Fn(s,11,.76,-15,Math.PI),Fn(s,11+.8,.76,-15,Math.PI),[-1,0,1].forEach(r=>{Sn(s,11+r,-14+1.8,Math.PI,t,ne.blue()),Sn(s,11+r,-14-1.8,0,t,ne.blue())}),Xn(s,R.maxX-.5,R.midZ+.6),Xn(s,15,R.minZ+.6)}function Uv(s,t){const i=new bt(new $e(1.4,1.4,.06,16),ne.oak());i.position.set(-11,.74,0),s.add(i),t.push({minX:-11-1.6,maxX:-11+1.6,minZ:0-1.6,maxZ:0+1.6});for(let o=0;o<4;o++){const a=o*Math.PI/2+Math.PI/4,l=new bt(new $e(.04,.04,.74,6),ne.metal());l.position.set(-11+Math.cos(a)*1.1,.37,0+Math.sin(a)*1.1),s.add(l)}for(let o=0;o<6;o++){const a=o/6*Math.PI*2,l=2;Sn(s,-11+Math.cos(a)*l,0+Math.sin(a)*l,a+Math.PI,null,ne.amber())}const r=new bt(new Jt(3.5,2,.08),ne.screen());r.position.set(-11,2.1,R.minX+.1),r.rotation.y=Math.PI/2,s.add(r),Nn(s,ne.white(),R.minX+.5,.45,0+2.5,.5,.9,2,t),Xn(s,R.minX+.5,R.lobbyZ-.6),Xn(s,-3,R.midZ+.5)}function Ov(s,t){Nn(s,ne.sofa(),11-2.5,.44,0+1.5,3.2,.88,1,t,.1),Nn(s,ne.sofa(),11-3.5,.44,0,1,.88,2.2,t,.1),Ii(s,11-1.8,0-.2,1.2,.7,t);const i=ne.bean();for(let l=0;l<3;l++){const c=14+l*1.4,h=new bt(new Pe(.42,10,8),i);h.scale.y=.65,h.position.set(c,.28,0),s.add(h),t.push({minX:c-.55,maxX:c+.55,minZ:0-.55,maxZ:0+.55})}const r=new Bt({color:2228292,roughness:.6,metalness:.3});Nn(s,r,R.maxX-1,1.1,0+2.5,.9,2.2,.7,t);const o=new bt(new Jt(.55,.44,.04),new Bt({color:2245887,emissive:1127406,emissiveIntensity:1.5}));o.position.set(R.maxX-.72,1.6,0+2.15),s.add(o),Ii(s,11+1.5,0-2.5,1.6,.8,t,ne.dark());const a=new bt(new Jt(4,2.2,.08),ne.screen());a.position.set(9,2.3,R.maxX-.1),a.rotation.y=-Math.PI/2,s.add(a),Xn(s,R.maxX-.5,R.lobbyZ-.6),Xn(s,7,R.midZ+.5)}function Fv(s,t){const e=(R.lobbyZ+R.maxZ)/2;Nn(s,ne.white(),-8,.9,e-1,3,1.8,.7,t),[6,8,10].forEach(l=>{Sn(s,l,e+.5,Math.PI,t,ne.amber())}),Ii(s,8,e+1.8,1.5,.6,t);const n=new bt(new Jl(2.2,32),new Bt({color:2245802,roughness:.4}));n.rotation.x=-Math.PI/2,n.position.set(0,.07,e),s.add(n);const i=document.createElement("canvas");i.width=512,i.height=128;const r=i.getContext("2d");r.fillStyle="#3366ff",r.font="bold 72px Inter, sans-serif",r.textAlign="center",r.fillText("SPACEWORK",256,88);const o=new bt(new fi(4,1),new Bt({map:new ga(i),roughness:.4,transparent:!0}));o.rotation.x=-Math.PI/2,o.position.set(0,.08,e),s.add(o),Xn(s,-5,R.maxZ-1.2),Xn(s,5,R.maxZ-1.2),Nn(s,ne.metal(),0,1,R.lobbyZ+1.5,.4,2,.4,t);const a=new bt(new Jt(.38,.28,.04),ne.screen());a.position.set(0,1.9,R.lobbyZ+1.28),s.add(a)}const Bv="#0f1117",zv="rgba(34,58,28,0.95)",kv="rgba(230,225,215,0.12)",Hv=[{name:"LOBBY",x1:R.minX,x2:R.maxX,z1:R.lobbyZ,z2:R.maxZ,fill:"rgba(180,175,210,0.18)",border:"rgba(180,175,220,0.55)",label:"#ccc"},{name:"OPS",x1:R.minX,x2:R.centerX,z1:R.midZ,z2:R.lobbyZ,fill:"rgba(200,115,20,0.20)",border:"rgba(220,130,30,0.60)",label:"#fa9"},{name:"FUN",x1:R.centerX,x2:R.maxX,z1:R.midZ,z2:R.lobbyZ,fill:"rgba(20,170,90,0.20)",border:"rgba(30,200,100,0.55)",label:"#6fb"},{name:"DESIGN",x1:R.minX,x2:R.centerX,z1:R.minZ,z2:R.midZ,fill:"rgba(190,45,95,0.20)",border:"rgba(220,60,110,0.55)",label:"#f9b"},{name:"ENGINEERING",x1:R.centerX,x2:R.maxX,z1:R.minZ,z2:R.midZ,fill:"rgba(25,90,200,0.20)",border:"rgba(40,120,230,0.55)",label:"#8bf"}],Mn=R.doorHalfW,Sl=R.mainDoorHalfW,Ws=R.leftDoorX,Xs=R.rightDoorX,Gv=[[R.minX,R.maxZ,-Sl,R.maxZ],[Sl,R.maxZ,R.maxX,R.maxZ],[R.minX,R.minZ,R.maxX,R.minZ],[R.minX,R.minZ,R.minX,R.maxZ],[R.maxX,R.minZ,R.maxX,R.maxZ],[R.minX,R.lobbyZ,Ws-Mn,R.lobbyZ],[Ws+Mn,R.lobbyZ,Xs-Mn,R.lobbyZ],[Xs+Mn,R.lobbyZ,R.maxX,R.lobbyZ],[R.minX,R.midZ,Ws-Mn,R.midZ],[Ws+Mn,R.midZ,Xs-Mn,R.midZ],[Xs+Mn,R.midZ,R.maxX,R.midZ],[R.centerX,R.minZ,R.centerX,R.lobbyZ]];class Vv{constructor(t){this._nav=t,this._peers=new Map;const e=document.createElement("canvas");e.id="flat-map-canvas",Object.assign(e.style,{position:"fixed",inset:"0",width:"100%",height:"100%",zIndex:"6",display:"none",cursor:"crosshair"}),document.body.appendChild(e),this._cvs=e,this._ctx=e.getContext("2d"),this._zoom=14,this._panX=0,this._panZ=-6,this._dragging=!1,this._dragMoved=!1,this._lx=0,this._ly=0,this._ping=null,this._setupMouse(),this._setupTouch(),this._resize(),window.addEventListener("resize",()=>this._resize())}show(){this._cvs.style.display="block"}hide(){this._cvs.style.display="none"}setPeer(t,e,n,i){this._peers.set(t,{x:e,z:n,name:i})}removePeer(t){this._peers.delete(t)}setTalking(t){this._talking=t}update(t){const e=this._cvs.width,n=this._cvs.height,i=this._ctx;i.clearRect(0,0,e,n),this._drawBg(i,e,n),this._drawGrid(i,e,n),this._drawBuilding(i),this._drawRooms(i),this._drawWalls(i),this._drawDoors(i),this._drawPeers(i),this._drawPlayer(i,t),this._drawNavPing(i),this._drawHints(i,e,n)}_fire(t,e){const[n,i]=this._c2w(t,e);this._nav({x:n,z:i}),this._ping={cx:t,cy:e,born:performance.now()}}centreOn(t,e){this._panX=t,this._panZ=e}_w2c(t,e){const n=this._cvs.width/2+(t-this._panX)*this._zoom,i=this._cvs.height/2+(e-this._panZ)*this._zoom;return[n,i]}_c2w(t,e){const n=(t-this._cvs.width/2)/this._zoom+this._panX,i=(e-this._cvs.height/2)/this._zoom+this._panZ;return[n,i]}_wr(t){return t*this._zoom}_setupMouse(){const t=this._cvs;t.addEventListener("wheel",e=>{e.preventDefault();const n=t.getBoundingClientRect(),i=e.clientX-n.left,r=e.clientY-n.top,[o,a]=this._c2w(i,r),l=e.deltaMode===0?e.deltaY:e.deltaY*24,c=Math.pow(.997,l);this._zoom=Math.max(6,Math.min(55,this._zoom*c));const[h,u]=this._c2w(i,r);this._panX+=o-h,this._panZ+=a-u},{passive:!1}),t.addEventListener("mousedown",e=>{this._dragging=!0,this._dragMoved=!1,this._lx=e.clientX,this._ly=e.clientY,t.style.cursor="grabbing"}),document.addEventListener("mousemove",e=>{if(!this._dragging)return;const n=e.clientX-this._lx,i=e.clientY-this._ly;this._panX-=n/this._zoom,this._panZ-=i/this._zoom,this._lx=e.clientX,this._ly=e.clientY,(Math.abs(n)>4||Math.abs(i)>4)&&(this._dragMoved=!0)}),document.addEventListener("mouseup",e=>{if(!this._dragging||(this._dragging=!1,t.style.cursor="crosshair",this._dragMoved))return;const n=t.getBoundingClientRect();this._fire(e.clientX-n.left,e.clientY-n.top)})}_setupTouch(){const t=this._cvs;let e=0,n=0,i=!1,r=0;t.addEventListener("touchstart",o=>{if(o.preventDefault(),i=!1,o.touches.length===1)e=o.touches[0].clientX,n=o.touches[0].clientY,this._lx=e,this._ly=n;else if(o.touches.length===2){const a=o.touches[1].clientX-o.touches[0].clientX,l=o.touches[1].clientY-o.touches[0].clientY;r=Math.sqrt(a*a+l*l)}},{passive:!1}),t.addEventListener("touchmove",o=>{if(o.preventDefault(),o.touches.length===1){const a=o.touches[0].clientX-this._lx,l=o.touches[0].clientY-this._ly;this._panX-=a/this._zoom,this._panZ-=l/this._zoom,this._lx=o.touches[0].clientX,this._ly=o.touches[0].clientY,(Math.abs(a)>4||Math.abs(l)>4)&&(i=!0)}else if(o.touches.length===2){const a=o.touches[1].clientX-o.touches[0].clientX,l=o.touches[1].clientY-o.touches[0].clientY,c=Math.sqrt(a*a+l*l),h=c/(r||c),u=(o.touches[0].clientX+o.touches[1].clientX)/2,d=(o.touches[0].clientY+o.touches[1].clientY)/2,[f,g]=this._c2w(u,d);this._zoom=Math.max(6,Math.min(55,this._zoom*h));const[_,m]=this._c2w(u,d);this._panX+=f-_,this._panZ+=g-m,r=c,i=!0}},{passive:!1}),t.addEventListener("touchend",o=>{if(o.touches.length===0&&!i&&o.changedTouches.length===1){const a=t.getBoundingClientRect();this._fire(o.changedTouches[0].clientX-a.left,o.changedTouches[0].clientY-a.top)}},{passive:!1})}_resize(){this._cvs.width=window.innerWidth,this._cvs.height=window.innerHeight}_drawBg(t,e,n){t.fillStyle=Bv,t.fillRect(0,0,e,n)}_drawGrid(t,e,n){const i=this._zoom*4;if(i<10)return;t.strokeStyle="rgba(255,255,255,0.04)",t.lineWidth=1;const r=(e/2-this._panX*this._zoom)%i;for(let a=r;a<e;a+=i)t.beginPath(),t.moveTo(a,0),t.lineTo(a,n),t.stroke();const o=(n/2-this._panZ*this._zoom)%i;for(let a=o;a<n;a+=i)t.beginPath(),t.moveTo(0,a),t.lineTo(e,a),t.stroke()}_drawBuilding(t){const[e,n]=this._w2c(R.minX-20,R.minZ-20),[i,r]=this._w2c(R.maxX+20,R.maxZ+20);t.fillStyle=zv,t.fillRect(Math.min(e,i),Math.min(n,r),Math.abs(i-e),Math.abs(r-n));const[o,a]=this._w2c(R.minX,R.maxZ),[l,c]=this._w2c(R.maxX,R.minZ);t.fillStyle=kv,t.fillRect(Math.min(o,l),Math.min(a,c),Math.abs(l-o),Math.abs(c-a))}_drawRooms(t){Hv.forEach(e=>{const[n,i]=this._w2c(e.x1,e.z2),[r,o]=this._w2c(e.x2,e.z1),a=Math.min(n,r),l=Math.min(i,o),c=Math.abs(r-n),h=Math.abs(o-i);t.fillStyle=e.fill,t.fillRect(a,l,c,h),t.strokeStyle=e.border,t.lineWidth=1.5,t.strokeRect(a+1,l+1,c-2,h-2),c>50&&h>30&&(t.fillStyle=e.label,t.font=`bold ${Math.max(9,Math.min(13,c*.11))}px Inter, monospace`,t.textAlign="center",t.textBaseline="middle",t.shadowColor="rgba(0,0,0,0.8)",t.shadowBlur=4,t.fillText(e.name,a+c/2,l+h/2),t.shadowBlur=0)})}_drawWalls(t){t.strokeStyle="#4a4a6a",t.lineWidth=Math.max(2,this._wr(R.wallT)*.8),t.lineCap="round",Gv.forEach(([e,n,i,r])=>{const[o,a]=this._w2c(e,n),[l,c]=this._w2c(i,r);t.beginPath(),t.moveTo(o,a),t.lineTo(l,c),t.stroke()})}_drawDoors(t){const e=[{x:0,z:R.maxZ,w:Sl*2},{x:Ws,z:R.lobbyZ,w:Mn*2},{x:Xs,z:R.lobbyZ,w:Mn*2},{x:Ws,z:R.midZ,w:Mn*2},{x:Xs,z:R.midZ,w:Mn*2}];t.strokeStyle="rgba(255,220,100,0.60)",t.lineWidth=Math.max(3,this._wr(R.wallT)*.9),t.lineCap="square",e.forEach(n=>{const[i,r]=this._w2c(n.x,n.z),o=this._wr(n.w/2);Math.abs(n.z-R.maxZ)<.1||Math.abs(n.z-R.lobbyZ)<.1||Math.abs(n.z-R.midZ)<.1?(t.beginPath(),t.moveTo(i-o,r),t.lineTo(i+o,r),t.stroke()):(t.beginPath(),t.moveTo(i,r-o),t.lineTo(i,r+o),t.stroke())})}_drawPeers(t){const e=performance.now()/1e3;this._peers.forEach(({x:n,z:i,name:r},o)=>{var u;const[a,l]=this._w2c(n,i),c=Math.max(5,this._wr(.4)),h=(u=this._talking)==null?void 0:u.has(o);if(h){const d=.5+Math.sin(e*6)*.5,f=c+4+d*4;t.beginPath(),t.arc(a,l,f,0,Math.PI*2),t.strokeStyle=`rgba(0,255,136,${.6+d*.4})`,t.lineWidth=2.5,t.shadowColor="#00ff88",t.shadowBlur=10,t.stroke(),t.shadowBlur=0}t.beginPath(),t.arc(a,l,c,0,Math.PI*2),t.fillStyle=h?"rgba(0,255,120,0.9)":"rgba(255,120,150,0.85)",t.fill(),t.strokeStyle=h?"#00ff88":"#ff88aa",t.lineWidth=1.5,t.stroke(),c>5&&(t.fillStyle="#fff",t.font=`bold ${Math.max(8,c*1.1)}px Inter,monospace`,t.textAlign="center",t.textBaseline="bottom",t.shadowColor="#000",t.shadowBlur=3,t.fillText(r,a,l-c-2),t.shadowBlur=0)})}_drawPlayer(t,e){var h;const[n,i]=this._w2c(e.x,e.z),r=Math.max(6,this._wr(.45)),o=performance.now()/600,a=r+Math.sin(o)*r*.35,l=(h=this._talking)==null?void 0:h.has("self"),c=performance.now()/1e3;if(l){const u=.5+Math.sin(c*6)*.5,d=r+5+u*5;t.beginPath(),t.arc(n,i,d,0,Math.PI*2),t.strokeStyle=`rgba(0,255,136,${.7+u*.3})`,t.lineWidth=3,t.shadowColor="#00ff88",t.shadowBlur=14,t.stroke(),t.shadowBlur=0}else t.beginPath(),t.arc(n,i,a,0,Math.PI*2),t.strokeStyle="rgba(0,255,255,0.25)",t.lineWidth=2,t.stroke();t.shadowColor=l?"#00ff88":"#00ffff",t.shadowBlur=10,t.beginPath(),t.arc(n,i,r,0,Math.PI*2),t.fillStyle=l?"#00ff88":"#00e5ff",t.fill(),t.shadowBlur=0,t.fillStyle="#fff",t.font=`bold ${Math.max(9,r*1.2)}px Inter,monospace`,t.textAlign="center",t.textBaseline="bottom",t.shadowColor="#000",t.shadowBlur=3,t.fillText("YOU",n,i-r-3),t.shadowBlur=0}_drawNavPing(t){if(!this._ping)return;const e=performance.now()-this._ping.born,n=600;if(e>n){this._ping=null;return}const i=e/n,r=1-i,o=8+i*18,{cx:a,cy:l}=this._ping;t.globalAlpha=r,t.strokeStyle="#ffffff",t.lineWidth=2;const c=6;t.beginPath(),t.moveTo(a-c,l),t.lineTo(a+c,l),t.moveTo(a,l-c),t.lineTo(a,l+c),t.stroke(),t.strokeStyle="#00ffff",t.lineWidth=1.5,t.beginPath(),t.arc(a,l,o,0,Math.PI*2),t.stroke(),t.globalAlpha=1}_drawHints(t,e,n){t.fillStyle="rgba(255,255,255,0.22)",t.font="11px Inter, monospace",t.textAlign="center",t.textBaseline="bottom",t.fillText("Click to walk  ·  Scroll to zoom  ·  Drag to pan  ·  WASD to move",e/2,n-8)}}const Yo=s=>"#"+s.toString(16).padStart(6,"0");class Wv{constructor(t){this._onSelect=t,this._selected=parseInt(localStorage.getItem("spaceAvatarId")??"0",10),this._el=this._build(),document.body.appendChild(this._el)}show(){this._el.classList.remove("ap-hidden"),this._sync()}hide(){this._el.classList.add("ap-hidden")}getSelected(){return this._selected}_build(){const t=document.createElement("div");return t.id="avatar-picker",t.className="ap-hidden",t.innerHTML=`
      <div class="ap-panel">
        <div class="ap-head">
          <span class="ap-title">Choose Your Avatar</span>
          <button class="ap-close" aria-label="Close">✕</button>
        </div>
        <div class="ap-grid">
          ${cs.map(e=>this._card(e)).join("")}
        </div>
        <p class="ap-hint">Your selection is saved automatically</p>
      </div>
    `,t.querySelector(".ap-close").addEventListener("click",()=>this.hide()),t.addEventListener("click",e=>{e.target===t&&this.hide()}),t.querySelectorAll(".ap-card").forEach(e=>{e.addEventListener("click",()=>{const n=parseInt(e.dataset.id,10);this._selected=n,localStorage.setItem("spaceAvatarId",String(n)),this._sync(),this._onSelect(n)})}),t}_sync(){this._el.querySelectorAll(".ap-card").forEach(t=>t.classList.toggle("ap-active",parseInt(t.dataset.id,10)===this._selected))}_card(t){const e=Yo(t.skin),n=Yo(t.hair),i=Yo(t.outfit),r=Yo(t.accent);return`
      <div class="ap-card" data-id="${t.id}" title="${t.label}">
        <div class="ap-fig">
          <svg viewBox="0 0 60 82" xmlns="http://www.w3.org/2000/svg">
            <!-- Hair base -->
            <ellipse cx="30" cy="16" rx="17" ry="14" fill="${n}"/>
            <!-- Head -->
            <circle cx="30" cy="22" r="13" fill="${e}"/>
            <!-- Ears -->
            <ellipse cx="17.5" cy="22" rx="3.5" ry="4.5" fill="${e}"/>
            <ellipse cx="42.5" cy="22" rx="3.5" ry="4.5" fill="${e}"/>
            <!-- Eye whites -->
            <circle cx="25" cy="21" r="2.8" fill="${r}"/>
            <circle cx="35" cy="21" r="2.8" fill="${r}"/>
            <!-- Pupils -->
            <circle cx="25" cy="21" r="1.6" fill="#111"/>
            <circle cx="35" cy="21" r="1.6" fill="#111"/>
            <!-- Neck -->
            <rect x="26.5" y="34" width="7" height="5" rx="2" fill="${e}"/>
            <!-- Shoulders -->
            <ellipse cx="14" cy="41" rx="7" ry="5" fill="${i}"/>
            <ellipse cx="46" cy="41" rx="7" ry="5" fill="${i}"/>
            <!-- Body -->
            <rect x="14" y="39" width="32" height="24" rx="6" fill="${i}"/>
            <!-- Chest accent -->
            <rect x="22" y="44" width="16" height="5" rx="2" fill="${r}" opacity="0.75"/>
            <!-- Belt -->
            <rect x="14" y="59" width="32" height="4" rx="2" fill="#111" opacity="0.55"/>
            <!-- Arms -->
            <rect x="5"  y="40" width="10" height="20" rx="5" fill="${i}"/>
            <rect x="45" y="40" width="10" height="20" rx="5" fill="${i}"/>
            <!-- Hands -->
            <circle cx="10" cy="62" r="5" fill="${e}"/>
            <circle cx="50" cy="62" r="5" fill="${e}"/>
            <!-- Legs -->
            <rect x="16" y="62" width="11" height="14" rx="4" fill="${i}"/>
            <rect x="33" y="62" width="11" height="14" rx="4" fill="${i}"/>
            <!-- Boots -->
            <rect x="15" y="73" width="13" height="6" rx="2" fill="#111"/>
            <rect x="32" y="73" width="13" height="6" rx="2" fill="#111"/>
          </svg>
        </div>
        <div class="ap-label">${t.label}</div>
        <div class="ap-tick">✓</div>
      </div>
    `}}const Xv=[{name:"OUTSIDE",color:"#88cc66",mapColor:"rgba(70,120,50,0.35)",border:"#66aa44",desc:"Outside the building"},{name:"LOBBY",color:"#ffffff",mapColor:"rgba(200,200,230,0.40)",border:"#aaaacc",desc:"Reception & Entrance"},{name:"OPS",color:"#ffaa44",mapColor:"rgba(200,120,20,0.40)",border:"#ffaa44",desc:"Operations & Support"},{name:"FUN",color:"#44ffaa",mapColor:"rgba(20,180,100,0.40)",border:"#44ffaa",desc:"Chill & Social"},{name:"DESIGN",color:"#ff6ba0",mapColor:"rgba(200,50,100,0.40)",border:"#ff6ba0",desc:"UI/UX & 3D Design"},{name:"ENGINEERING",color:"#44aaff",mapColor:"rgba(30,100,200,0.40)",border:"#44aaff",desc:"Development & Code"}],oe={minX:-26,maxX:26,minZ:-27,maxZ:28,W:180,H:200};let Ir,Rn;function Zv(s,t,e,n,i){const r=window._spaceUsername||"You",o=parseInt(localStorage.getItem("spaceAvatarId")??"0",10),a=Zu(r,o);a.position.set(0,0,22),s.add(a);const l=new Wv(T=>{$u(a,r,T),i==null||i(T)}),c=document.getElementById("avatar-btn");c&&c.addEventListener("click",()=>l.show());const{colliders:h}=Iv(s);Sv(h);const u=Pv(a,t,e.domElement),d=new Xu;let f="",g=u.getMode();const _=new Vv(T=>u.navigate(T)),m=[],p=[];s.traverse(T=>{T.userData.mapHide&&m.push(T),T.userData.mapShow&&p.push(T)}),m.forEach(T=>{T.visible=!1}),p.forEach(T=>{T.visible=!1}),_.centreOn(a.position.x,a.position.z),_.show();const E=document.getElementById("minimap");E&&(E.style.display="none");function v(T){m.forEach(w=>{w.visible=T!=="overview"&&T!=="flat"}),p.forEach(w=>{w.visible=T==="overview"}),a.visible=T!=="first",T==="flat"?(_.centreOn(a.position.x,a.position.z),_.show()):_.hide();const O=document.getElementById("minimap");O&&(O.style.display=T==="flat"?"none":"")}Yv(u);function M(){const T=ra(a.position);T!==f&&(f=T,n==null||n(f))}function U(){const T=document.getElementById("mode-badge");if(!T)return;const O=u.getMode(),w={flat:"🎮 FLAT MAP",overview:"🗺 3D MAP",third:"👤 3RD PERSON",first:"👁 1ST PERSON"};T.textContent=w[O]??O;const x=O==="flat"||O==="overview";T.style.background=x?"rgba(255,160,0,0.2)":"rgba(0,100,255,0.2)",T.style.borderColor=x?"rgba(255,160,0,0.4)":"rgba(0,150,255,0.4)",T.style.color=x?"#ffaa00":"#4af"}function A(){requestAnimationFrame(A);const T=d.getDelta(),O=u.update(T);Ju(a,O,T),M(),U();const w=u.getMode();w!==g&&(g=w,v(w)),Kv(a.position,w),w==="flat"&&_.update(a.position)}return A(),{getPosition:()=>a.position.clone(),getRotation:()=>a.rotation.clone(),navigate:T=>u.navigate(T),isDragMoved:()=>u.isDragMoved(),getMode:()=>u.getMode(),setView:T=>{u.setMode(T),v(T)},setStatus:T=>Yu(a,T),setSelfTalking:(T,O)=>qu(a,T,O),setTalkingPeers:T=>_.setTalking(T),peerJoin:(T,O)=>_.setPeer(T,0,0,O),peerMove:(T,O,w,x)=>_.setPeer(T,O,w,x),peerLeave:T=>_.removePeer(T)}}function Yv(s,t){const e=document.getElementById("minimap-canvas");e&&(e.style.cursor="crosshair",e.addEventListener("click",n=>{const i=e.getBoundingClientRect(),r=(n.clientX-i.left)/i.width*oe.W,o=(n.clientY-i.top)/i.height*oe.H,a=oe.minX+r/oe.W*(oe.maxX-oe.minX),l=oe.maxZ-o/oe.H*(oe.maxZ-oe.minZ);s.navigate({x:a,z:l}),qv(r,o)}))}function qv(s,t){Rn&&(Rn.strokeStyle="#fff",Rn.lineWidth=1.5,Rn.globalAlpha=.9,Rn.beginPath(),Rn.arc(s,t,7,0,Math.PI*2),Rn.stroke(),Rn.globalAlpha=1)}function $v(){Ir=document.getElementById("minimap-canvas"),Ir&&(Ir.width=oe.W,Ir.height=oe.H,Rn=Ir.getContext("2d"))}function zs(s,t){const e=(s-oe.minX)/(oe.maxX-oe.minX)*oe.W,n=(oe.maxZ-t)/(oe.maxZ-oe.minZ)*oe.H;return[e,n]}function Kv(s,t){if(!Rn){$v();return}const e=Rn;e.clearRect(0,0,oe.W,oe.H),e.fillStyle="rgba(50,90,40,0.5)",e.fillRect(0,0,oe.W,oe.H);const[n,i]=zs(R.minX,R.maxZ),[r,o]=zs(R.maxX,R.minZ);e.fillStyle="rgba(240,235,225,0.25)",e.fillRect(n,i,r-n,o-i),[{name:"LOBBY",x1:R.minX,x2:R.maxX,z1:R.lobbyZ,z2:R.maxZ},{name:"OPS",x1:R.minX,x2:R.centerX,z1:R.midZ,z2:R.lobbyZ},{name:"FUN",x1:R.centerX,x2:R.maxX,z1:R.midZ,z2:R.lobbyZ},{name:"DESIGN",x1:R.minX,x2:R.centerX,z1:R.minZ,z2:R.midZ},{name:"ENGINEERING",x1:R.centerX,x2:R.maxX,z1:R.minZ,z2:R.midZ}].forEach(u=>{const d=Xv.find(v=>v.name===u.name);if(!d)return;const[f,g]=zs(u.x1,u.z2),[_,m]=zs(u.x2,u.z1);e.fillStyle=d.mapColor,e.fillRect(f,g,_-f,m-g),e.strokeStyle=d.border+"88",e.lineWidth=1,e.strokeRect(f+.5,g+.5,_-f-1,m-g-1),e.fillStyle=d.border,e.font="bold 7px Inter, monospace",e.textAlign="center";const p=(f+_)/2,E=g+10;e.fillText(u.name,p,E)}),[{x:0,z:R.maxZ,label:"🚪"},{x:-11,z:R.lobbyZ,label:"▶"},{x:11,z:R.lobbyZ,label:"▶"},{x:-11,z:R.midZ,label:"▶"},{x:11,z:R.midZ,label:"▶"}].forEach(({x:u,z:d,label:f})=>{const[g,_]=zs(u,d);e.fillStyle="rgba(255,255,255,0.7)",e.font="8px sans-serif",e.textAlign="center",e.fillText(f,g,_+3)}),e.strokeStyle="rgba(220,210,190,0.5)",e.lineWidth=1.5,e.strokeRect(n,i,r-n,o-i),t==="overview"&&(e.strokeStyle="rgba(255,160,0,0.7)",e.lineWidth=2,e.strokeRect(2,2,oe.W-4,oe.H-4),e.fillStyle="rgba(255,160,0,0.06)",e.fillRect(2,2,oe.W-4,oe.H-4));const[c,h]=zs(s.x,s.z);e.shadowColor="#00ffff",e.shadowBlur=8,e.fillStyle="#00ffff",e.beginPath(),e.arc(c,h,5,0,Math.PI*2),e.fill(),e.shadowBlur=0,e.fillStyle="#fff",e.font="bold 7px Inter, monospace",e.textAlign="center",e.shadowColor="#0ff",e.shadowBlur=4,e.fillText("YOU",c,h-8),e.shadowBlur=0,e.fillStyle="rgba(255,255,255,0.28)",e.font="7px Inter, monospace",e.textAlign="center",e.fillText("click map to move",oe.W/2,oe.H-4)}function Jv(){const s=document.getElementById("screen-overlay"),t=document.getElementById("screen-iframe"),e=document.getElementById("screen-overlay-close"),n=document.getElementById("screen-overlay-title"),i=document.getElementById("screen-overlay-tool"),r=document.getElementById("screen-overlay-zone");if(!s)return console.warn("[screenOverlay] #screen-overlay not found in DOM"),{openScreen:()=>{},closeScreen:()=>{},isOpen:()=>!1};e.addEventListener("click",a),s.addEventListener("click",c=>{c.target===s&&a()}),document.addEventListener("keydown",c=>{c.code==="Escape"&&s.classList.contains("visible")&&(a(),c.stopPropagation())},!0);function o(c){var h;if(n.textContent=c.label,i.textContent=c.tool,r){r.textContent=c.zone;const u={BRIDGE:"#4466ff",LAB:"#00ffcc",LOUNGE:"#aa55ff"};r.style.color=u[c.zone]||"#fff"}t.src=c.url,s.classList.add("visible"),(h=document.exitPointerLock)==null||h.call(document)}function a(){s.classList.remove("visible"),setTimeout(()=>{t.src=""},200)}function l(){return s.classList.contains("visible")}return{openScreen:o,closeScreen:a,isOpen:l}}function qh(...s){const t=s.join("\0");let e=5381;for(let n=0;n<t.length;n++)e=(Math.imul(33,e)^t.charCodeAt(n))>>>0;return e.toString(36).padStart(7,"0")}class oa{constructor(t,e=0){this.id=qh(t,String(e)),this.seed=t,this.epoch=e,this.resonance=1}tick(){return this.epoch++,this}harmonisesWith(t,e=.51){return this.resonance>=e&&t.resonance>=e}static merge(t,e){const[n,i]=t.id<e.id?[t,e]:[e,t];return new oa(qh(n.id,i.id),Math.max(n.epoch,i.epoch))}toString(){return`freq:${this.id}@${this.epoch}`}}class nc{constructor(t={}){this._v=new Map(Object.entries(t))}tick(t){return this._v.set(t,(this._v.get(t)||0)+1),this}get(t){return this._v.get(t)||0}merge(t){for(const[e,n]of t._v)this._v.set(e,Math.max(this.get(e),n));return this}clone(){return new nc(Object.fromEntries(this._v))}compare(t){const e=new Set([...this._v.keys(),...t._v.keys()]);let n=!1,i=!1;for(const r of e){const o=this.get(r),a=t.get(r);o<a&&(n=!0),o>a&&(i=!0)}return!n&&!i?"equal":n&&!i?"before":!n&&i?"after":"concurrent"}happensBefore(t){return this.compare(t)==="before"}toJSON(){return Object.fromEntries(this._v)}}class ic{constructor(){this._entries=new Map}set(t,e,n,i){const r=this._entries.get(t);if(!r)return this._entries.set(t,{value:e,clock:n.clone(),nodeId:i}),!0;const o=n.compare(r.clock);return o==="after"||o==="concurrent"&&i>r.nodeId?(this._entries.set(t,{value:e,clock:n.clone(),nodeId:i}),!0):!1}get(t){var e;return(e=this._entries.get(t))==null?void 0:e.value}has(t){return this._entries.has(t)}keys(){return this._entries.keys()}entries(){return[...this._entries.entries()].map(([t,e])=>[t,e.value])}merge(t){for(const[e,{value:n,clock:i,nodeId:r}]of t._entries)this.set(e,n,i,r);return this}clone(){const t=new ic;for(const[e,n]of this._entries)t._entries.set(e,{...n,clock:n.clock.clone()});return t}size(){return this._entries.size}}class $h{constructor(t){this.frequency=t,this.state=new ic,this.clock=new nc,this.nodes=new Set,this.createdAt=Date.now()}enter(t){this.nodes.add(t),this.clock.tick(t)}exit(t){this.nodes.delete(t)}update(t,e,n){return this.clock.tick(t),this.state.set(e,n,this.clock.clone(),t)}get(t){return this.state.get(t)}merge(t){this.state.merge(t.state),this.clock.merge(t.clock);for(const e of t.nodes)this.nodes.add(e);return this}consistency(t){return this.clock.compare(t.clock)}snapshot(){return{frequency:this.frequency.toString(),nodeCount:this.nodes.size,stateSize:this.state.size(),epoch:this.frequency.epoch,clock:this.clock.toJSON()}}}function qo(...s){const t=s.join("|");let e=5381;for(let n=0;n<t.length;n++)e=(Math.imul(33,e)^t.charCodeAt(n))>>>0;return e.toString(36)}var Ae,ri,Oi,El,wl;class jv{constructor(t,e=""){at(this,Oi);at(this,Ae,new Map);at(this,ri);ft(this,ri,t),b(this,Ae).set(t,{id:t,publicKey:e,vouchedBy:null,chainDepth:0,chainHash:qo(t),votes:new Set([t]),joinedAt:Date.now()})}get rootId(){return b(this,ri)}vouch(t,e,n=""){if(!this.isVerified(t))throw new Error(`Voucher "${t}" is not a verified member`);if(b(this,Ae).has(e))throw new Error(`"${e}" is already in the network`);const i=b(this,Ae).get(t);return b(this,Ae).set(e,{id:e,publicKey:n,vouchedBy:t,chainDepth:i.chainDepth+1,chainHash:qo(e,i.chainHash),votes:new Set([t]),joinedAt:Date.now()}),this.getMember(e)}vote(t,e){if(!this.isVerified(t))throw new Error(`Voter "${t}" is not verified`);if(!b(this,Ae).has(e))throw new Error(`"${e}" not found`);b(this,Ae).get(e).votes.add(t)}revokeVote(t,e){var n;(n=b(this,Ae).get(e))==null||n.votes.delete(t)}remove(t){const e=[];return lt(this,Oi,El).call(this,t,e),e}isVerified(t){if(t===b(this,ri))return!0;const e=new Set;let n=t;for(;n!==b(this,ri);){if(e.has(n))return!1;e.add(n);const i=b(this,Ae).get(n);if(!(i!=null&&i.vouchedBy))return!1;n=i.vouchedBy}return!0}isActive(t){if(t===b(this,ri))return!0;if(!this.isVerified(t))return!1;const e=b(this,Ae).get(t),n=lt(this,Oi,wl).call(this),i=Math.floor(n.size/2)+1;return[...e.votes].filter(o=>n.has(o)).length>=i}trustScore(t){if(!this.isVerified(t))return 0;const e=b(this,Ae).get(t),n=lt(this,Oi,wl).call(this);return n.size===0?0:[...e.votes].filter(r=>n.has(r)).length/n.size}depth(t){var e;return((e=b(this,Ae).get(t))==null?void 0:e.chainDepth)??-1}getMember(t){return b(this,Ae).get(t)??null}getAll(){return[...b(this,Ae).values()]}size(){return b(this,Ae).size}validateIntegrity(){for(const[t,e]of b(this,Ae)){if(t===b(this,ri)){if(e.chainHash!==qo(t))return!1;continue}const n=b(this,Ae).get(e.vouchedBy);if(!n)return!1;const i=qo(t,n.chainHash);if(e.chainHash!==i)return!1}return!0}}Ae=new WeakMap,ri=new WeakMap,Oi=new WeakSet,El=function(t,e){if(b(this,Ae).has(t)){e.push(t),b(this,Ae).delete(t);for(const[n,i]of b(this,Ae))i.vouchedBy===t&&lt(this,Oi,El).call(this,n,e)}},wl=function(){const t=new Set;for(const e of b(this,Ae).keys())this.isVerified(e)&&t.add(e);return t};class Qv{constructor(t,e=""){this.id=t,this.publicKey=e,this.realities=new Map,this.neighbors=new Set,this.position={x:0,y:0,z:0},this.meta={}}tune(t){return t.enter(this.id),this.realities.set(t.frequency.id,t),this}detune(t){const e=this.realities.get(t);return e&&(e.exit(this.id),this.realities.delete(t)),this}bridge(t,e){return this.tune(t),this.tune(e),this}isIn(t){return this.realities.has(t)}moveTo(t,e,n,i){this.position={x:t,y:e,z:n};const r=this.realities.get(i);r&&r.update(this.id,`pos:${this.id}`,{x:t,y:e,z:n})}connect(t){this.neighbors.add(t)}disconnect(t){this.neighbors.delete(t)}}var Hr,bl;class tx{constructor(){at(this,Hr);this.nodes=new Map,this.realities=new Map,this._msgLog=[]}createReality(t,e=0){const n=new oa(t.id,e),i=new $h(n),r=new jv(t.id,t.publicKey);return this.realities.set(n.id,{reality:i,trust:r}),this.addNode(t),t.tune(i),{reality:i,trust:r,frequency:n}}addNode(t){this.nodes.set(t.id,t)}getNode(t){return this.nodes.get(t)??null}joinReality(t,e,n){const i=this.realities.get(e);if(!i)throw new Error(`Reality "${e}" does not exist`);const{reality:r,trust:o}=i;return o.vouch(n,t.id,t.publicKey),this.addNode(t),t.tune(r),t}route(t,e,n){if(t===e)return[t];const i=this.realities.get(n);if(!i)return null;const{trust:r}=i,o=lt(this,Hr,bl).call(this,t,r),a=lt(this,Hr,bl).call(this,e,r);if(!o||!a)return null;const l=new Set(o);let c;for(const d of a)if(l.has(d)){c=d;break}if(!c)return null;const h=o.slice(0,o.indexOf(c)+1),u=a.slice(0,a.indexOf(c)).reverse();return[...h,...u]}send(t,e,n,i){const r=this.route(t,e,n);if(!r)return{delivered:!1,reason:"no-route"};const o=this.realities.get(n);o&&o.reality.update(t,`msg:${Date.now()}:${t}→${e}`,i);const a={from:t,to:e,hops:r,payload:i,ts:Date.now()};return this._msgLog.push(a),{delivered:!0,hops:r.length,route:r}}gossip(t,e,n,i,r=6){const o=this.nodes.get(t),a=this.realities.get(e);if(!o||!a)return 0;const{reality:l}=a,c=new Set;let h=0;const u=(d,f)=>{if(c.has(d)||f<=0)return;c.add(d);const g=this.nodes.get(d);if(!(!g||!g.isIn(e))){l.update(d,n,i),h++;for(const _ of g.neighbors)u(_,f-1)}};return u(t,r),h}propose(t,e,n,i){const r=this.realities.get(e);if(!r)return{passed:!1,reason:"unknown-reality"};const{reality:o,trust:a}=r,l=a.getAll().filter(d=>a.isVerified(d.id)),c=l.filter(d=>{const f=this.nodes.get(d.id);return f&&i(f,a)}),h=Math.floor(l.length/2)+1;return{passed:c.length>=h,motion:n,proposer:t,total:l.length,yesVotes:c.length,needed:h,voters:c.map(d=>d.id)}}mergeRealities(t,e){const n=this.realities.get(t),i=this.realities.get(e);if(!n||!i)return null;if(!n.reality.frequency.harmonisesWith(i.reality.frequency))return{merged:!1,reason:"insufficient-resonance"};const r=oa.merge(n.reality.frequency,i.reality.frequency),o=new $h(r);o.merge(n.reality),o.merge(i.reality);const a=n.trust;try{a.vouch(n.trust.rootId,i.trust.rootId,"")}catch{}this.realities.set(r.id,{reality:o,trust:a});for(const l of this.nodes.values())(l.isIn(t)||l.isIn(e))&&(l.detune(t),l.detune(e),l.tune(o));return{merged:!0,frequency:r,reality:o}}nodesIn(t){return[...this.nodes.values()].filter(e=>e.isIn(t))}bridges(){return[...this.nodes.values()].filter(t=>t.realities.size>1)}stats(){return{totalNodes:this.nodes.size,totalRealities:this.realities.size,bridgeNodes:this.bridges().length,messageCount:this._msgLog.length}}}Hr=new WeakSet,bl=function(t,e){var o;const n=[];let i=t;const r=new Set;for(;i;){if(r.has(i))return null;r.add(i),n.push(i),i=((o=e.getMember(i))==null?void 0:o.vouchedBy)??null}return n};const ks=Object.freeze({PUBLIC:"public",INVITE:"invite",PRIVATE:"private"});function Kh(){return Math.random().toString(36).slice(2,9).toUpperCase()}class ex{constructor(t,e,{targetId:n=null,ttlMs:i=864e5,maxUses:r=1}={}){this.id=`INV-${Kh()}-${Kh()}`,this.issuerId=t,this.frequencyId=e,this.targetId=n,this.expiresAt=Date.now()+i,this.maxUses=r,this.uses=0,this.claimedBy=[]}get expired(){return Date.now()>this.expiresAt}get exhausted(){return this.uses>=this.maxUses}get active(){return!this.expired&&!this.exhausted}isValidFor(t){return!(this.expired||this.exhausted||this.targetId&&this.targetId!==t)}claim(t){return this.isValidFor(t)?(this.uses++,this.claimedBy.push(t),!0):!1}}var Gr,Vr,Ks,ji,aa,nd;class nx{constructor(){at(this,aa);at(this,Gr,new Map);at(this,Vr,new Map);at(this,Ks,new Map);at(this,ji,new Map)}setNode(t,e){b(this,Gr).set(t,e)}getNode(t){return b(this,Gr).get(t)??ks.PUBLIC}setReality(t,e){b(this,Vr).set(t,e)}getReality(t){return b(this,Vr).get(t)??ks.PUBLIC}issueInvite(t,e,n={}){const i=new ex(t,e,n);return b(this,Ks).set(i.id,i),i}getToken(t){return b(this,Ks).get(t)??null}claimInvite(t,e){const n=b(this,Ks).get(t);return n?n.expired?{success:!1,reason:"token-expired"}:n.exhausted?{success:!1,reason:"token-exhausted"}:n.isValidFor(e)?(n.claim(e),b(this,ji).has(e)||b(this,ji).set(e,new Set),b(this,ji).get(e).add(n.frequencyId),{success:!0,frequencyId:n.frequencyId}):{success:!1,reason:"token-not-for-you"}:{success:!1,reason:"token-not-found"}}hasGrant(t,e){var n;return((n=b(this,ji).get(t))==null?void 0:n.has(e))??!1}canSee(t,e,n){var r;if(t===e)return!0;const i=this.getNode(e);if(i===ks.PUBLIC||lt(this,aa,nd).call(this,t,e,n))return!0;if(i===ks.PRIVATE)return!1;for(const[o]of((r=n.getNode(e))==null?void 0:r.realities)??[])if(this.hasGrant(t,o))return!0;return!1}perceptionOf(t,e,n){return this.canSee(t,e,n)?"full":this.getNode(e)===ks.INVITE?"blurred":"hidden"}buildMapFor(t,e){const n=[],i=[],r=new Set;for(const o of e.nodes.values()){const a=this.perceptionOf(t,o.id,e);a!=="hidden"&&(r.add(o.id),n.push({id:o.id,perception:a,visibility:this.getNode(o.id),realities:[...o.realities.keys()],isBridge:o.realities.size>1,isMe:o.id===t,position:o.position}))}for(const{reality:o,trust:a}of e.realities.values())for(const l of a.getAll())l.vouchedBy&&r.has(l.id)&&r.has(l.vouchedBy)&&i.push({from:l.vouchedBy,to:l.id,type:"trust"});for(const o of e.nodes.values())for(const a of o.neighbors)r.has(o.id)&&r.has(a)&&o.id<a&&i.push({from:o.id,to:a,type:"neighbor"});return{nodes:n,edges:i}}}Gr=new WeakMap,Vr=new WeakMap,Ks=new WeakMap,ji=new WeakMap,aa=new WeakSet,nd=function(t,e,n){const i=n.getNode(t),r=n.getNode(e);if(!i||!r)return!1;for(const[o]of i.realities){if(!r.isIn(o))continue;const a=n.realities.get(o);if(a!=null&&a.trust.isVerified(t)&&(a!=null&&a.trust.isVerified(e)))return!0}return!1};const Jh=[{fill:"rgba(30,80,200,0.09)",border:"#4466ff",glow:"#2255dd"},{fill:"rgba(0,160,120,0.09)",border:"#00ffcc",glow:"#00ccaa"},{fill:"rgba(130,20,220,0.09)",border:"#aa55ff",glow:"#8833dd"},{fill:"rgba(200,100,0,0.09)",border:"#ff9900",glow:"#dd7700"},{fill:"rgba(0,160,200,0.09)",border:"#00ccff",glow:"#00aadd"}],Qn={me:"#00ffff",public:"#4488ff",invite:"#ffaa00",private:"#666688",blurred:"#333355"};class ix{constructor(t,e,n){this.canvas=t,this.ctx=t.getContext("2d"),this.vis=e,this.myId=n,this._nodes=[],this._edges=[],this._realityGroups=new Map,this._pan={x:0,y:0},this._zoom=1,this._drag=!1,this._lastMouse={x:0,y:0},this._selected=null,this._raf=null,this._settled=0,this._onSelect=null,this._bindEvents()}load(t){const{nodes:e,edges:n}=t,i=this.canvas.width,r=this.canvas.height,o=new Map(this._nodes.map(l=>[l.id,l]));this._nodes=e.map(l=>{if(o.has(l.id))return{...o.get(l.id),...l};const c=Math.random()*Math.PI*2,h=100+Math.random()*80;return{...l,x:i/2+Math.cos(c)*h,y:r/2+Math.sin(c)*h,vx:0,vy:0}});const a=new Map(this._nodes.map(l=>[l.id,l]));this._edges=n.filter(l=>a.has(l.from)&&a.has(l.to)).map(l=>({fromNode:a.get(l.from),toNode:a.get(l.to),type:l.type})),this._realityGroups.clear(),this._nodes.forEach(l=>{var c;(c=l.realities)==null||c.forEach((h,u)=>{this._realityGroups.has(h)||this._realityGroups.set(h,{nodes:[],color:Jh[this._realityGroups.size%Jh.length]}),this._realityGroups.get(h).nodes.push(l)})}),this._settled=0,this._kickSimulation()}onSelect(t){this._onSelect=t}fitView(){if(this._nodes.length===0)return;const t=this._nodes.map(d=>d.x),e=this._nodes.map(d=>d.y),n=Math.min(...t),i=Math.max(...t),r=Math.min(...e),o=Math.max(...e),a=this.canvas.width,l=this.canvas.height,c=60,h=(a-c*2)/(i-n||1),u=(l-c*2)/(o-r||1);this._zoom=Math.min(h,u,2),this._pan.x=-((n+i)/2)*this._zoom,this._pan.y=-((r+o)/2)*this._zoom,this.render()}stop(){this._raf&&cancelAnimationFrame(this._raf)}_kickSimulation(){if(this._raf)return;const t=()=>{this._settled<250&&(this._stepForce(),this._settled++),this.render(),this._raf=requestAnimationFrame(t)};this._raf=requestAnimationFrame(t)}_stepForce(){const t=this._nodes,e=4e3,n=90,i=.025,r=.82;for(let o=0;o<t.length;o++)for(let a=o+1;a<t.length;a++){const l=t[o],c=t[a],h=c.x-l.x,u=c.y-l.y,d=h*h+u*u||1,f=Math.sqrt(d),g=e/d;l.vx-=g*h/f,l.vy-=g*u/f,c.vx+=g*h/f,c.vy+=g*u/f}for(const o of this._edges){if(o.type!=="trust")continue;const a=o.toNode.x-o.fromNode.x,l=o.toNode.y-o.fromNode.y,c=Math.sqrt(a*a+l*l)||1,h=(c-n)*i;o.fromNode.vx+=h*a/c,o.fromNode.vy+=h*l/c,o.toNode.vx-=h*a/c,o.toNode.vy-=h*l/c,o.toNode.vy+=(o.toNode.y-(o.fromNode.y+n))*-.008}for(const o of this._edges){if(o.type!=="neighbor")continue;const a=o.toNode.x-o.fromNode.x,l=o.toNode.y-o.fromNode.y,c=Math.sqrt(a*a+l*l)||1,h=(c-50)*.008;o.fromNode.vx+=h*a/c,o.fromNode.vy+=h*l/c,o.toNode.vx-=h*a/c,o.toNode.vy-=h*l/c}for(const o of t)o.x+=o.vx*r,o.y+=o.vy*r,o.vx*=r,o.vy*=r}render(){const t=this.ctx,e=this.canvas.width,n=this.canvas.height;t.clearRect(0,0,e,n),t.fillStyle="rgba(0,2,12,0.97)",t.fillRect(0,0,e,n),t.save(),t.translate(e/2+this._pan.x,n/2+this._pan.y),t.scale(this._zoom,this._zoom),this._drawRealityClusters(),this._drawEdges(),this._drawNodes(),this._selected&&this._drawSelection(this._selected),t.restore(),this._drawLegend(),this._settled<250&&this._drawSettlingIndicator()}_drawRealityClusters(){const t=this.ctx;for(const[e,{nodes:n,color:i}]of this._realityGroups){if(n.length<2)continue;const r=n.reduce((c,h)=>c+h.x,0)/n.length,o=n.reduce((c,h)=>c+h.y,0)/n.length,a=Math.max(...n.map(c=>Math.hypot(c.x-r,c.y-o)))+55,l=t.createRadialGradient(r,o,0,r,o,a);l.addColorStop(0,i.fill.replace("0.09","0.14")),l.addColorStop(.7,i.fill),l.addColorStop(1,"transparent"),t.fillStyle=l,t.beginPath(),t.arc(r,o,a,0,Math.PI*2),t.fill(),t.strokeStyle=i.border+"33",t.lineWidth=1,t.beginPath(),t.arc(r,o,a,0,Math.PI*2),t.stroke()}}_drawEdges(){const t=this.ctx;for(const e of this._edges)t.beginPath(),t.moveTo(e.fromNode.x,e.fromNode.y),t.lineTo(e.toNode.x,e.toNode.y),e.type==="trust"?(t.strokeStyle="rgba(120,180,255,0.45)",t.lineWidth=1.8,t.setLineDash([])):(t.strokeStyle="rgba(255,255,255,0.1)",t.lineWidth=.8,t.setLineDash([3,5])),t.stroke();t.setLineDash([])}_drawNodes(){var e;const t=this.ctx;for(const n of this._nodes){const i=((e=this._selected)==null?void 0:e.id)===n.id,r=n.isMe?11:n.isBridge?9:7,o=n.isMe?Qn.me:n.perception==="blurred"?Qn.blurred:Qn[n.visibility]??Qn.public;t.shadowColor=o,t.shadowBlur=i?28:n.isMe?22:12,t.fillStyle=n.perception==="blurred"?"rgba(50,50,80,0.7)":o+(n.isMe?"":"cc"),t.beginPath(),t.arc(n.x,n.y,r,0,Math.PI*2),t.fill(),t.shadowBlur=0,n.isBridge&&(t.strokeStyle="#ffcc00bb",t.lineWidth=2,t.beginPath(),t.arc(n.x,n.y,r+5,0,Math.PI*2),t.stroke()),i&&(t.strokeStyle="#ffffff88",t.lineWidth=1.5,t.beginPath(),t.arc(n.x,n.y,r+8,0,Math.PI*2),t.stroke());const a=n.perception==="blurred"?"???":n.id.length>12?n.id.slice(0,12)+"…":n.id;t.fillStyle=n.isMe?"#ffffff":"rgba(255,255,255,0.65)",t.font=`${n.isMe?"bold ":""}10px Inter, monospace`,t.textAlign="center",t.fillText(a,n.x,n.y+r+14),n.perception==="full"&&n.depth>0&&(t.fillStyle="rgba(255,255,255,0.28)",t.font="8px monospace",t.fillText(`d${n.depth}`,n.x,n.y-r-4)),n.isMe&&(t.fillStyle="#00ffff",t.font="bold 8px Inter, monospace",t.shadowColor="#00ffff",t.shadowBlur=8,t.fillText("YOU",n.x,n.y-r-4),t.shadowBlur=0)}}_drawSelection(t){}_drawLegend(){const t=this.ctx,e=[{color:Qn.me,label:"You"},{color:Qn.public,label:"Public"},{color:Qn.invite,label:"Invite-only"},{color:Qn.private,label:"Private"},{color:Qn.blurred,label:"Unknown (invite-only, not connected)"},{color:"#ffcc00",label:"Bridge node"}],n=14,i=this.canvas.height-14-e.length*18;t.fillStyle="rgba(0,5,20,0.75)",t.fillRect(n-6,i-10,280,e.length*18+16),t.strokeStyle="rgba(255,255,255,0.07)",t.lineWidth=1,t.strokeRect(n-6,i-10,280,e.length*18+16),e.forEach(({color:r,label:o},a)=>{const l=i+a*18;t.fillStyle=r,t.beginPath(),t.arc(n+6,l,5,0,Math.PI*2),t.fill(),t.fillStyle="rgba(255,255,255,0.6)",t.font="11px Inter, monospace",t.textAlign="left",t.fillText(o,n+18,l+4)})}_drawSettlingIndicator(){const t=this.ctx,e=this._settled/250,n=this.canvas.width;t.fillStyle="rgba(100,180,255,0.5)",t.fillRect(0,this.canvas.height-2,n*e,2)}_bindEvents(){const t=this.canvas;t.addEventListener("mousedown",e=>{this._drag=!0,this._lastMouse={x:e.clientX,y:e.clientY}}),t.addEventListener("mousemove",e=>{this._drag&&(this._pan.x+=e.clientX-this._lastMouse.x,this._pan.y+=e.clientY-this._lastMouse.y,this._lastMouse={x:e.clientX,y:e.clientY},this.render())}),t.addEventListener("mouseup",()=>{this._drag=!1}),t.addEventListener("mouseleave",()=>{this._drag=!1}),t.addEventListener("wheel",e=>{e.preventDefault();const n=e.deltaY>0?.88:1.14;this._zoom=Math.max(.15,Math.min(6,this._zoom*n)),this._raf||this.render()},{passive:!1}),t.addEventListener("click",e=>{var a;if(this._drag)return;const n=t.getBoundingClientRect(),i=(e.clientX-n.left-t.width/2-this._pan.x)/this._zoom,r=(e.clientY-n.top-t.height/2-this._pan.y)/this._zoom;let o=null;for(const l of this._nodes)if(Math.hypot(l.x-i,l.y-r)<14){o=l;break}this._selected=o,(a=this._onSelect)==null||a.call(this,o),this._raf||this.render()})}}function jh(s,t,e){const n=document.getElementById("network-map-overlay");if(!n)return;n.classList.add("visible");const i=document.getElementById("network-map-canvas");i.width=i.offsetWidth||800,i.height=i.offsetHeight||560;const r=t.buildMapFor(e,s),o=new ix(i,t,e);o.load(r);const a=document.getElementById("nm-node-panel");o.onSelect(h=>{var u;if(!h||h.perception==="blurred"){a.innerHTML=h?'<div class="nm-panel-blurred">🔒 Unknown node<br><small>Invite required</small></div>':"";return}a.innerHTML=`
      <div class="nm-panel-title">${h.isMe?"👤 You":"🔵 "+h.id}</div>
      <div class="nm-panel-row"><span>Visibility</span><span class="nm-badge nm-badge-${h.visibility}">${h.visibility}</span></div>
      <div class="nm-panel-row"><span>Depth</span><span>d${h.depth??0}</span></div>
      <div class="nm-panel-row"><span>Realities</span><span>${((u=h.realities)==null?void 0:u.length)??0}</span></div>
      ${h.isBridge?'<div class="nm-panel-bridge">🌉 Bridge node</div>':""}
    `});const l=document.getElementById("nm-close"),c=()=>{n.classList.remove("visible"),o.stop()};l.onclick=c,n.addEventListener("keydown",h=>{h.key==="Escape"&&c()})}const ll=20,cl=50,sx=.08,Qh=12;class rx{constructor(){this._ctx=null,this._stream=null,this._gains=new Map,this._talking=new Set,this._selfAnalyser=null,this._selfBuf=null,this._muted=!1,this._active=!1,this._onStateChange=null,this._onTalkChange=null,this._onSelfTalkChange=null,this._syncRef=null}async start(t){if(this._active)return!0;this._syncRef=t;try{const e=new Promise((r,o)=>setTimeout(()=>o(new Error("mic permission timed out")),15e3));this._stream=await Promise.race([navigator.mediaDevices.getUserMedia({audio:{echoCancellation:!0,noiseSuppression:!0,sampleRate:48e3},video:!1}),e]),this._ctx=new AudioContext,this._ctx.state==="suspended"&&await this._ctx.resume(),this._active=!0,this._selfAnalyser=this._ctx.createAnalyser(),this._selfAnalyser.fftSize=256,this._selfBuf=new Uint8Array(this._selfAnalyser.frequencyBinCount),this._ctx.createMediaStreamSource(this._stream).connect(this._selfAnalyser);const[i]=this._stream.getAudioTracks();return t.addVoiceTrack(i,this._stream),t.onVoiceTrack((r,o,a,l)=>{r.kind==="audio"&&this._addPeerTrack(a,r,l)}),this._notify(),!0}catch(e){return console.warn("[ProximityVoice] mic access denied or unavailable:",e.message),!1}}_addPeerTrack(t,e,n){var a;((a=this._ctx)==null?void 0:a.state)==="suspended"&&this._ctx.resume().catch(()=>{});const i=this._ctx.createMediaStreamSource(new MediaStream([e])),r=this._ctx.createGain(),o=this._ctx.createAnalyser();o.fftSize=256,r.gain.value=0,i.connect(o),i.connect(r),r.connect(this._ctx.destination),this._gains.set(t,{gainNode:r,sourceNode:i,analyser:o,buf:new Uint8Array(o.frequencyBinCount),wirePeerId:n??t})}stop(){var t,e;(t=this._stream)==null||t.getTracks().forEach(n=>n.stop()),this._gains.forEach(({gainNode:n,sourceNode:i})=>{try{i.disconnect(),n.disconnect()}catch{}}),this._gains.clear(),this._talking.clear(),(e=this._ctx)==null||e.close(),this._active=!1,this._syncRef=null,this._notify(),this._notifyTalk()}update(t,e){var a;if(!this._active||!this._ctx)return;this._syncRef&&this._gains.forEach((l,c)=>{const h=this._syncRef.wireToIdentityId(c);h&&h!==c&&(this._gains.set(h,l),this._gains.delete(c))});const n=new Set(this._talking),i=n.has("self");this._selfAnalyser&&!this._muted?(this._selfAnalyser.getByteFrequencyData(this._selfBuf),this._selfBuf.reduce((c,h)=>c+h,0)/this._selfBuf.length>Qh?this._talking.add("self"):this._talking.delete("self")):this._talking.delete("self");const r=this._talking.has("self");r!==i&&((a=this._onSelfTalkChange)==null||a.call(this,r)),e.forEach((l,c)=>{const h=this._gains.get(c);if(!h)return;const u=l.position.x-t.x,d=l.position.z-t.z,f=Math.sqrt(u*u+d*d),g=f<=ll?1:f>=cl?0:1-(f-ll)/(cl-ll);h.gainNode.gain.setTargetAtTime(g,this._ctx.currentTime,sx),h.analyser.getByteFrequencyData(h.buf),h.buf.reduce((m,p)=>m+p,0)/h.buf.length>Qh?this._talking.add(c):this._talking.delete(c)});let o=n.size!==this._talking.size;if(!o){for(const l of this._talking)if(!n.has(l)){o=!0;break}}o&&this._notifyTalk()}removePeer(t){const e=this._gains.get(t);if(e){try{e.sourceNode.disconnect(),e.gainNode.disconnect()}catch{}this._gains.delete(t)}this._talking.delete(t)}toggleMute(){return this.setMuted(!this._muted),this._muted}setMuted(t){var e;this._muted=t,(e=this._stream)==null||e.getAudioTracks().forEach(n=>{n.enabled=!t}),this._notify()}get active(){return this._active}get muted(){return this._muted}isTalking(t){return this._talking.has(t)}get talkingPeers(){return this._talking}onStateChange(t){this._onStateChange=t}onTalkChange(t){this._onTalkChange=t}onSelfTalkChange(t){this._onSelfTalkChange=t}_notify(){var t;(t=this._onStateChange)==null||t.call(this,{active:this._active,muted:this._muted})}_notifyTalk(){var t;(t=this._onTalkChange)==null||t.call(this,this._talking)}static get HEAR_FAR(){return cl}}const tu=Object.fromEntries(ec.map(s=>[s.id,"#"+s.color.toString(16).padStart(6,"0")])),ox={OUTSIDE:"#88cc66",LOBBY:"#aaaacc",OPS:"#ffaa44",FUN:"#44ffaa",DESIGN:"#ff6ba0",ENGINEERING:"#44aaff"},ax={OUTSIDE:"Outside",LOBBY:"Lobby",OPS:"Ops",FUN:"Fun",DESIGN:"Design",ENGINEERING:"Engineering"};class lx{constructor(t){this._onNavigate=t,this._peers=new Map,this._self={username:"",presetId:0,zone:"OUTSIDE"},this._el=this._build(),document.body.appendChild(this._el),this._render()}setSelf(t,e,n,i="available"){this._self={username:t,presetId:e,zone:n||"OUTSIDE",status:i},this._render()}updateSelfStatus(t){this._self.status=t,this._render()}addPeer(t,e,n=0,i="available"){this._peers.set(t,{username:e,presetId:n,x:0,z:0,zone:"OUTSIDE",status:i}),this._render()}movePeer(t,e,n){const i=this._peers.get(t);i&&(i.x=e,i.z=n,i.zone=ra({x:e,z:n}),this._render())}updatePeerPreset(t,e){const n=this._peers.get(t);n&&(n.presetId=e,this._render())}updatePeerStatus(t,e){const n=this._peers.get(t);n&&(n.status=e,this._render())}removePeer(t){this._peers.delete(t),this._render()}updateSelfZone(t){this._self.zone=t||"OUTSIDE",this._render()}_build(){const t=document.createElement("div");return t.id="presence-panel",t.innerHTML=`
      <div class="pp-header">
        <span class="pp-title">WHO'S HERE</span>
        <span class="pp-count" id="pp-count">1</span>
      </div>
      <div class="pp-list" id="pp-list"></div>
    `,t}_render(){const t=this._el.querySelector("#pp-list"),e=this._el.querySelector("#pp-count");if(!t)return;const n=1+this._peers.size;e.textContent=n;const i=[];i.push(this._row({username:this._self.username||"You",presetId:this._self.presetId,zone:this._self.zone,status:this._self.status,isSelf:!0}));const r=[...this._peers.entries()].sort((o,a)=>{const l=o[1].zone,c=a[1].zone;return l!==c?l.localeCompare(c):o[1].username.localeCompare(a[1].username)});r.forEach(([o,a])=>{i.push(this._row({username:a.username,presetId:a.presetId,zone:a.zone,status:a.status,isSelf:!1,onClick:()=>{var l;return(l=this._onNavigate)==null?void 0:l.call(this,{x:a.x,z:a.z})}}))}),t.innerHTML=i.join(""),t.querySelectorAll(".pp-row[data-idx]").forEach(o=>{const a=parseInt(o.dataset.idx,10),l=r[a];l&&o.addEventListener("click",()=>{var c;return(c=this._onNavigate)==null?void 0:c.call(this,{x:l[1].x,z:l[1].z})})})}_row({username:t,presetId:e,zone:n,status:i="available",isSelf:r,onClick:o}){const l="#"+(cs[e]??cs[0]).outfit.toString(16).padStart(6,"0"),c=tu[i]??tu.available,h=ox[n]??"#888",u=ax[n]??n;return`
      <div class="pp-row ${r?"pp-self":"pp-peer"}"
           ${r?"":`data-idx="${t}"`}>
        <span class="pp-dot" style="background:${l}"></span>
        <span class="pp-status-dot" style="background:${c}" title="${i}"></span>
        <span class="pp-name">${cx(t)}${r?' <span class="pp-you">(you)</span>':""}</span>
        <span class="pp-zone" style="color:${h}">${u}</span>
        ${r?"":'<span class="pp-go" title="Walk to this person">→</span>'}
      </div>
    `}}function cx(s){return s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}const Tl="sw_id_v1",Al=s=>Array.from(s).map(t=>t.toString(16).padStart(2,"0")).join(""),eu=s=>{const t=s.replace(/-/g,"+").replace(/_/g,"/"),e=atob(t);return Uint8Array.from(e,n=>n.charCodeAt(0))};class nu{constructor(t,e,n,i){this.peerId=t,this.displayName=e,this.isNew=i,this._priv=n}get shortId(){return this.peerId.slice(-8)}setName(t){this.displayName=t,id()}async sign(t){const e=new TextEncoder().encode(t),n=await crypto.subtle.sign({name:"Ed25519"},this._priv,e);return Al(new Uint8Array(n))}}let si=null,Br=null;function id(){if(!(!si||!Br))try{localStorage.setItem(Tl,JSON.stringify({privJwk:Br,displayName:si.displayName}))}catch{}}async function hx(){if(si)return si;const s=localStorage.getItem(Tl);if(s)try{const{privJwk:n,displayName:i}=JSON.parse(s),r=await crypto.subtle.importKey("jwk",n,{name:"Ed25519"},!1,["sign"]),o=Al(eu(n.x));return Br=n,si=new nu(o,i||"",r,!1),si}catch{localStorage.removeItem(Tl)}const t=await crypto.subtle.generateKey({name:"Ed25519"},!0,["sign","verify"]);Br=await crypto.subtle.exportKey("jwk",t.privateKey);const e=Al(eu(Br.x));return si=new nu(e,"",t.privateKey,!0),id(),si}function sc(){return si}const Rl="xn_",sd="xn_known_peers";async function rd(s){const t=new TextEncoder().encode(s),e=await crypto.subtle.digest("SHA-256",t);return Array.from(new Uint8Array(e)).map(n=>n.toString(16).padStart(2,"0")).join("")}async function zr(s,t=""){return rd(s.toLowerCase().trim()+":"+t.trim())}function ux(s){return btoa(s).replace(/\+/g,"-").replace(/\//g,"_").replace(/=/g,"")}function dx(s){const t=s.length%4,e=t?s+"=".repeat(4-t):s;return atob(e.replace(/-/g,"+").replace(/_/g,"/"))}async function rc({roomId:s,lockCode:t="",node:e}={}){if(!(s!=null&&s.trim()))throw new Error("roomId is required");const n=await zr(s,t),i=ld(n),r={r:s.trim(),h:n};e&&(r.n=e),i.length&&(r.p=i.slice(0,8));const o=ux(JSON.stringify(r));return{link:`${window.location.origin+window.location.pathname}#${Rl}${o}`,roomHash:n}}async function od(){const s=window.location.hash.slice(1);if(s.startsWith(Rl))try{const e=JSON.parse(dx(s.slice(Rl.length))),n=e.r||"main",i=e.h||await zr(n);return{type:"link",roomId:n,roomHash:i,node:e.n||null,peers:e.p||[]}}catch{console.warn("[roomLink] failed to decode link — falling back to main")}if(s){const e=s.trim().toLowerCase(),n=await zr(e);return{type:"plain",roomId:e,roomHash:n,node:null,peers:[]}}return{type:"default",roomId:"main",roomHash:await zr("main"),node:null,peers:[]}}function oc(){try{return JSON.parse(localStorage.getItem(sd)||"{}")}catch{return{}}}function ad(s){try{localStorage.setItem(sd,JSON.stringify(s))}catch{}}function ld(s){return oc()[s]||[]}function ac(s,t){const e=oc(),n=e[s]||[];n.includes(t)||(n.unshift(t),n.length>20&&(n.length=20),e[s]=n,ad(e))}function fx(s,t){const e=oc(),n=e[s];if(!n)return;const i=n.indexOf(t);i!==-1&&(n.splice(i,1),e[s]=n,ad(e))}function cd(s){const t=s.trim().toLowerCase().replace(/[^a-z0-9-]/g,"-").replace(/-{2,}/g,"-").replace(/^-+|-+$/g,"")||"main";window.location.hash=t}const Cl=Object.freeze(Object.defineProperty({__proto__:null,createRoomLink:rc,deriveRoomHash:zr,forgetPeer:fx,getKnownPeers:ld,parseCurrentLink:od,recordPeer:ac,setRoomNameInUrl:cd,sha256hex:rd},Symbol.toStringTag,{value:"Module"}));var Qi,ts,Ti;class px extends EventTarget{constructor(){super(...arguments);at(this,Qi,[]);at(this,ts,null);at(this,Ti,!1)}push(e,n="pending",i=""){const r=`s${Date.now()}-${Math.random().toString(36).slice(2,6)}`,o={id:r,text:e,status:n,detail:i,ts:Date.now()};return b(this,Qi).push(o),this.dispatchEvent(new CustomEvent("step",{detail:{...o,action:"add"}})),r}update(e,n,i=""){const r=b(this,Qi).find(o=>o.id===e);r&&(r.status=n,i!==""&&(r.detail=i),this.dispatchEvent(new CustomEvent("step",{detail:{...r,action:"update"}})))}ok(e,n=""){this.update(e,"ok",n)}fail(e,n=""){this.update(e,"fail",n)}warn(e,n=""){this.update(e,"warn",n)}info(e,n=""){return this.push(e,"info",n)}startFirstTimer(e=12e3){ft(this,Ti,!1),clearTimeout(b(this,ts)),ft(this,ts,setTimeout(()=>{b(this,Ti)||(this.push("You're the first here — your device is the anchor","host","Share your invite link to let others find you"),this.dispatchEvent(new CustomEvent("first-in-room")))},e))}peerJoined(e){ft(this,Ti,!0),clearTimeout(b(this,ts)),this.info(`${e||"Someone"} joined`)}get steps(){return[...b(this,Qi)]}get hasHost(){return b(this,Ti)===!1}clear(){ft(this,Qi,[]),clearTimeout(b(this,ts)),ft(this,Ti,!1),this.dispatchEvent(new CustomEvent("clear"))}}Qi=new WeakMap,ts=new WeakMap,Ti=new WeakMap;const he=new px,iu=6e4,mx=20;var Ze,Cn,Vn,Pl,Ur;class gx extends EventTarget{constructor(){super(...arguments);at(this,Vn);at(this,Ze,new Map);at(this,Cn,new Map)}get hotSize(){return b(this,Ze).size}getPeer(e){return b(this,Ze).get(e)}getSnapshot(){const e={};for(const[n,i]of b(this,Ze)){const{ttlTimer:r,...o}=i;e[n]=o}return e}upsertPeer(e,n){const i=b(this,Ze).get(e),r=n.v??0,o=(i==null?void 0:i.v)??-1;if(r<=o)return!1;i!=null&&i.ttlTimer&&clearTimeout(i.ttlTimer);const a=setTimeout(()=>lt(this,Vn,Pl).call(this,e),iu),l={username:"",presetId:0,status:"available",pos:void 0,...i??{},...n,peerId:e,v:r,ttlTimer:a};return b(this,Ze).set(e,l),lt(this,Vn,Ur).call(this,"peer:updated",{peerId:e,entry:l}),!0}patchPeer(e,n){const i=b(this,Ze).get(e);i&&Object.assign(i,n)}updatePos(e,n){const i=b(this,Ze).get(e);i&&(i.pos=n)}heartbeat(e){const n=b(this,Ze).get(e);n&&(clearTimeout(n.ttlTimer),n.ttlTimer=setTimeout(()=>lt(this,Vn,Pl).call(this,e),iu))}removePeer(e){const n=b(this,Ze).get(e);n&&(clearTimeout(n.ttlTimer),b(this,Ze).delete(e),lt(this,Vn,Ur).call(this,"peer:removed",{peerId:e}))}clearHot(){for(const e of b(this,Ze).values())clearTimeout(e.ttlTimer);b(this,Ze).clear()}updateColdRoom(e,n){if(!b(this,Cn).has(e)&&b(this,Cn).size>=mx){const i=b(this,Cn).keys().next().value;b(this,Cn).delete(i)}b(this,Cn).set(e,{roomHash:e,peerCount:n,lastSeen:Date.now()}),lt(this,Vn,Ur).call(this,"cold:updated",{roomHash:e,peerCount:n})}pruneCold(e=6e5){const n=Date.now()-e;for(const[i,r]of b(this,Cn))r.lastSeen<n&&b(this,Cn).delete(i)}getColdRooms(){return[...b(this,Cn).values()]}}Ze=new WeakMap,Cn=new WeakMap,Vn=new WeakSet,Pl=function(e){b(this,Ze).has(e)&&(b(this,Ze).delete(e),lt(this,Vn,Ur).call(this,"peer:expired",{peerId:e}))},Ur=function(e,n){this.dispatchEvent(new CustomEvent(e,{detail:n}))};const Be=new gx,_x=50,vx=5;var yn,Js,Fi,Ll,Il;class xx{constructor(){at(this,Fi);at(this,yn,[]);at(this,Js,!1)}schedule(t,e=""){b(this,yn).length>=_x&&b(this,yn).shift(),b(this,yn).push({task:t,label:e}),lt(this,Fi,Ll).call(this)}get queueSize(){return b(this,yn).length}clear(){b(this,yn).length=0}}yn=new WeakMap,Js=new WeakMap,Fi=new WeakSet,Ll=function(){b(this,Js)||b(this,yn).length===0||(ft(this,Js,!0),typeof requestIdleCallback=="function"?requestIdleCallback(t=>lt(this,Fi,Il).call(this,t),{timeout:2e3}):setTimeout(()=>lt(this,Fi,Il).call(this,null),100))},Il=function(t){for(ft(this,Js,!1);b(this,yn).length>0&&!(t&&!t.didTimeout&&t.timeRemaining()<vx);){const{task:e,label:n}=b(this,yn).shift();try{e()}catch(i){console.warn(`[IdleScheduler] task "${n}" threw:`,i)}}b(this,yn).length>0&&lt(this,Fi,Ll).call(this)};const Dl=new xx;function hd(s){if(s)return s;const t=new URLSearchParams(window.location.search).get("node");return t||"wss://xpacenode.spacevilla.xyz"}function Dr(s){cd(s)}const yx=[{urls:"stun:stun.l.google.com:19302"},{urls:"stun:stun1.l.google.com:19302"},{urls:"turn:openrelay.metered.ca:80",username:"openrelayproject",credential:"openrelayproject"},{urls:"turn:openrelay.metered.ca:80?transport=tcp",username:"openrelayproject",credential:"openrelayproject"}];var es,Wr,ns,is,js,Xr,Zr,_r,ud,dd;class Mx{constructor(){at(this,_r);at(this,es,null);at(this,Wr,"");at(this,ns,new Map);at(this,is,!1);at(this,js,!1);at(this,Xr,[]);at(this,Zr,0)}async connect(t){return ft(this,Wr,t),new Promise((e,n)=>{const i=new WebSocket(t);ft(this,es,i);const r=setTimeout(()=>n(new Error("xpacenode connect timeout")),1e4);i.onopen=()=>{clearTimeout(r),ft(this,is,!0),ft(this,Zr,0),b(this,Xr).splice(0).forEach(a=>i.send(a)),e()},i.onmessage=({data:o})=>{try{const a=JSON.parse(o);lt(this,_r,ud).call(this,a)}catch{}},i.onerror=o=>{clearTimeout(r),n(o)},i.onclose=()=>{ft(this,is,!1),lt(this,_r,dd).call(this)}})}send(t){var n;const e=JSON.stringify(t);b(this,is)&&((n=b(this,es))==null?void 0:n.readyState)===WebSocket.OPEN?b(this,es).send(e):b(this,Xr).push(e)}on(t,e){b(this,ns).has(t)||b(this,ns).set(t,[]),b(this,ns).get(t).push(e)}close(){var t;ft(this,js,!0),ft(this,is,!1),(t=b(this,es))==null||t.close()}}es=new WeakMap,Wr=new WeakMap,ns=new WeakMap,is=new WeakMap,js=new WeakMap,Xr=new WeakMap,Zr=new WeakMap,_r=new WeakSet,ud=function(t){const e=b(this,ns).get(t.t);e==null||e.forEach(n=>n(t))},dd=function(){if(b(this,js))return;const t=Math.min(1e3*2**us(this,Zr)._++,3e4);console.warn(`[xpacenode] disconnected — reconnecting in ${t}ms`),setTimeout(()=>{b(this,js)||this.connect(b(this,Wr)).catch(()=>{})},t)};var ye,oi,Qs,ss,tr,Yr,qr,$r,er,Kr,Bi,Nl,Ul;class Sx extends EventTarget{constructor(e){super();at(this,Bi);at(this,ye);at(this,oi,null);at(this,Qs,!1);at(this,ss,!1);at(this,tr,!1);at(this,Yr,null);at(this,qr,null);at(this,$r,[]);at(this,er,!1);at(this,Kr,async()=>{if(!b(this,ss)&&b(this,ye).signalingState==="stable")try{ft(this,ss,!0),await b(this,ye).setLocalDescription(),this.dispatchEvent(new CustomEvent("signal",{detail:{type:"offer",sdp:b(this,ye).localDescription.sdp}}))}catch(e){console.warn("[RTCPeer] negotiate error",e)}finally{ft(this,ss,!1)}});ft(this,Qs,e),ft(this,ye,new RTCPeerConnection({iceServers:yx})),e||(ft(this,oi,b(this,ye).createDataChannel("sw",{ordered:!0})),lt(this,Bi,Nl).call(this,b(this,oi))),b(this,ye).ondatachannel=({channel:n})=>{ft(this,oi,n),lt(this,Bi,Nl).call(this,n)},b(this,ye).onicecandidate=({candidate:n})=>{n&&this.dispatchEvent(new CustomEvent("signal",{detail:{type:"ice",candidate:n.toJSON()}}))},b(this,ye).onnegotiationneeded=b(this,Kr),b(this,ye).ontrack=({track:n,streams:i})=>{var o;const r=i[0]??new MediaStream([n]);(o=b(this,qr))==null||o.call(this,n,r)},b(this,ye).onconnectionstatechange=()=>{b(this,ye).connectionState==="failed"&&this.dispatchEvent(new CustomEvent("failed"))}}async handleSignal({type:e,sdp:n,candidate:i}){try{if(e==="offer"){const r=b(this,ye).signalingState==="have-local-offer",o=b(this,ss)||r;if(ft(this,tr,!b(this,Qs)&&o),b(this,tr))return;await b(this,ye).setRemoteDescription({type:"offer",sdp:n}),ft(this,er,!0),await b(this,ye).setLocalDescription(),this.dispatchEvent(new CustomEvent("signal",{detail:{type:"answer",sdp:b(this,ye).localDescription.sdp}})),await lt(this,Bi,Ul).call(this),b(this,Qs)&&r&&setTimeout(b(this,Kr),200)}else if(e==="answer")b(this,ye).signalingState==="have-local-offer"&&(await b(this,ye).setRemoteDescription({type:"answer",sdp:n}),ft(this,er,!0),await lt(this,Bi,Ul).call(this));else if(e==="ice")if(!b(this,er))b(this,$r).push(i);else try{await b(this,ye).addIceCandidate(i)}catch(r){b(this,tr)||console.warn("[RTCPeer] addIceCandidate",r)}}catch(r){console.warn("[RTCPeer] handleSignal",e,r)}}send(e){var n;((n=b(this,oi))==null?void 0:n.readyState)==="open"&&b(this,oi).send(JSON.stringify(e))}addTrack(e,n){try{b(this,ye).addTrack(e,n)}catch{}}onMessage(e){ft(this,Yr,e)}onTrack(e){ft(this,qr,e)}get pc(){return b(this,ye)}get connected(){var e;return((e=b(this,oi))==null?void 0:e.readyState)==="open"}close(){try{b(this,ye).close()}catch{}}}ye=new WeakMap,oi=new WeakMap,Qs=new WeakMap,ss=new WeakMap,tr=new WeakMap,Yr=new WeakMap,qr=new WeakMap,$r=new WeakMap,er=new WeakMap,Kr=new WeakMap,Bi=new WeakSet,Nl=function(e){e.onopen=()=>this.dispatchEvent(new CustomEvent("open")),e.onclose=()=>this.dispatchEvent(new CustomEvent("close")),e.onmessage=({data:n})=>{var i;try{(i=b(this,Yr))==null||i.call(this,JSON.parse(n))}catch{}}},Ul=async function(){const e=b(this,$r).splice(0);for(const n of e)try{await b(this,ye).addIceCandidate(n)}catch{}};var sn,Me,ai,rs,os,as,Pn,Ai,li,ci,nr,Jr,jr,Qr,to,Qt,Ol,Fl,fd,tn,vn;class Ex{constructor(t,e=0,n="available"){at(this,Qt);at(this,sn,null);at(this,Me,new Map);at(this,ai,{});at(this,rs,"");at(this,os,0);at(this,as,"available");at(this,Pn,"");at(this,Ai,"main");at(this,li,"");at(this,ci,[]);at(this,nr,null);at(this,Jr,[]);at(this,jr,[]);at(this,Qr,null);at(this,to,0);ft(this,rs,t),ft(this,os,e),ft(this,as,n)}async start(){const t=he.push("Reading link…"),e=await od();if(ft(this,Pn,e.roomHash),ft(this,Ai,e.roomId),ft(this,ci,e.peers??[]),e.type==="link"?(he.ok(t,`Invite link decoded → room: ${b(this,Ai)}`),he.info("Room address is hashed — connection is private"),e.node&&he.info("Preferred node found in link",e.node)):e.type==="plain"?he.ok(t,`Room: ${b(this,Ai)}`):he.ok(t,"Using default room"),b(this,ci).length){const i=e.type==="link"?"invite link":"previous session";he.info(`${b(this,ci).length} known peer${b(this,ci).length>1?"s":""} from ${i}`,"Will reconnect directly if they are online")}if(ft(this,li,hd(e.node)),!b(this,li))throw he.info("No xpacenode — trying public DHT route"),Object.assign(new Error("NO_NODE"),{roomHash:b(this,Pn),roomName:b(this,Ai),linkType:e.type,knownPeers:b(this,ci)});ft(this,sn,new Mx);const n=he.push("Connecting to xpacenode…","pending",b(this,li));try{await b(this,sn).connect(b(this,li)),he.ok(n,b(this,li))}catch(i){throw he.fail(n,"xpacenode unreachable — trying public DHT route"),i}he.info("Searching for peers in room…"),he.startFirstTimer(12e3),b(this,sn).on("peer_join",async i=>{const{peerId:r,username:o="",presetId:a=0,status:l="available"}=i;if(r===lt(this,Qt,tn).call(this))return;const c=b(this,ci).includes(r);if(he.peerJoined(o||r.slice(0,10)),c&&he.info(`✓ ${o||r.slice(0,10)} — known peer (reconnected)`),lt(this,Qt,vn).call(this,"HELLO",{from:r,username:o,presetId:a,status:l}),!b(this,Me).has(r)){const h=lt(this,Qt,tn).call(this)<r;await lt(this,Qt,Ol).call(this,r,h)}}),b(this,sn).on("peer_leave",i=>{lt(this,Qt,Fl).call(this,i.peerId)}),b(this,sn).on("signal",async i=>{var a;const{from:r,payload:o}=i;if(!(!r||!o)){if(!b(this,Me).has(r)){const l=lt(this,Qt,tn).call(this)<r;await lt(this,Qt,Ol).call(this,r,l)}await((a=b(this,Me).get(r))==null?void 0:a.peer.handleSignal(o))}}),b(this,sn).send({t:"hello",roomId:b(this,Pn),peerId:lt(this,Qt,tn).call(this),username:b(this,rs),presetId:b(this,os),status:b(this,as)}),ft(this,Qr,setInterval(()=>{b(this,sn).send({t:"hb",roomId:b(this,Pn)});const i={type:"hb",identityId:lt(this,Qt,tn).call(this)};for(const{peer:r}of b(this,Me).values())r.send(i)},3e4)),Dl.schedule(()=>Be.pruneCold(),"prune-cold-rooms")}stop(){var t,e;clearInterval(b(this,Qr)),(t=b(this,sn))==null||t.send({t:"leave",roomId:b(this,Pn)}),(e=b(this,sn))==null||e.close();for(const{peer:n}of b(this,Me).values())n.close();b(this,Me).clear(),ft(this,sn,null)}move(t,e,n,i=0){const r={type:"move",identityId:lt(this,Qt,tn).call(this),pos:{x:t,y:e,z:n,ry:i}};for(const{peer:o}of b(this,Me).values())o.send(r)}chat(t){const e={type:"chat",identityId:lt(this,Qt,tn).call(this),username:b(this,rs),text:t,ts:Date.now()};for(const{peer:n}of b(this,Me).values())n.send(e)}setAvatar(t){ft(this,os,t);const e=lt(this,Qt,tn).call(this),n={type:"avatar",identityId:e,presetId:t};for(const{peer:r}of b(this,Me).values())r.send(n);const i={type:"delta",identityId:e,presetId:t,v:++us(this,to)._};for(const{peer:r}of b(this,Me).values())r.send(i)}setStatus(t){ft(this,as,t);const e=lt(this,Qt,tn).call(this),n={type:"status",identityId:e,status:t};for(const{peer:r}of b(this,Me).values())r.send(n);const i={type:"delta",identityId:e,status:t,v:++us(this,to)._};for(const{peer:r}of b(this,Me).values())r.send(i)}broadcastTalking(t){const e={type:"talking",identityId:lt(this,Qt,tn).call(this),talking:!!t};for(const{peer:n}of b(this,Me).values())n.send(e)}addVoiceTrack(t,e){b(this,jr).push({track:t,stream:e});for(const{peer:n}of b(this,Me).values())n.addTrack(t,e)}onVoiceTrack(t){ft(this,nr,t);const e=b(this,Jr).splice(0);for(const{track:n,stream:i,identityId:r,nostrPubkey:o}of e)n.readyState!=="ended"&&t(n,i,r,o);for(const[n,{peer:i}]of b(this,Me))for(const r of i.pc.getReceivers()){const o=r.track;!o||o.kind!=="audio"||o.readyState==="ended"||t(o,new MediaStream([o]),n,n)}}wireToIdentityId(t){return t}get roomName(){return b(this,Ai)}get roomHash(){return b(this,Pn)}get nodeUrl(){return b(this,li)}getPeers(){const t={};for(const[e,{peer:n}]of b(this,Me))t[e]=n.pc;return t}on(t,e){return b(this,ai)[t]||(b(this,ai)[t]=[]),b(this,ai)[t].push(e),()=>{b(this,ai)[t]=b(this,ai)[t].filter(n=>n!==e)}}}sn=new WeakMap,Me=new WeakMap,ai=new WeakMap,rs=new WeakMap,os=new WeakMap,as=new WeakMap,Pn=new WeakMap,Ai=new WeakMap,li=new WeakMap,ci=new WeakMap,nr=new WeakMap,Jr=new WeakMap,jr=new WeakMap,Qr=new WeakMap,to=new WeakMap,Qt=new WeakSet,Ol=async function(t,e){const n=new Sx(e);b(this,Me).set(t,{identityId:t,peer:n}),n.addEventListener("signal",({detail:i})=>{var r;(r=b(this,sn))==null||r.send({t:"signal",roomId:b(this,Pn),to:t,payload:i})}),n.onMessage(i=>lt(this,Qt,fd).call(this,i,t)),n.onTrack((i,r)=>{b(this,nr)?b(this,nr).call(this,i,r,t,t):b(this,Jr).push({track:i,stream:r,identityId:t,nostrPubkey:t})}),n.addEventListener("open",()=>{n.send({type:"intro",identityId:lt(this,Qt,tn).call(this),username:b(this,rs),presetId:b(this,os),status:b(this,as)}),n.send({type:"state_req",identityId:lt(this,Qt,tn).call(this)}),ac(b(this,Pn),t)}),n.addEventListener("failed",()=>lt(this,Qt,Fl).call(this,t));for(const{track:i,stream:r}of b(this,jr))n.addTrack(i,r);return n},Fl=function(t){const e=b(this,Me).get(t);e&&(e.peer.close(),b(this,Me).delete(t),lt(this,Qt,vn).call(this,"PEER_LEAVE",{from:t}))},fd=function(t,e){var i;const n=t.identityId??e;switch(t.type){case"intro":lt(this,Qt,vn).call(this,"HELLO",{from:n,username:t.username,presetId:t.presetId??0,status:t.status??"available"});break;case"move":lt(this,Qt,vn).call(this,"MOVE",{from:n,pos:t.pos});break;case"chat":lt(this,Qt,vn).call(this,"CHAT",{from:n,username:t.username,text:t.text,ts:t.ts});break;case"avatar":lt(this,Qt,vn).call(this,"AVATAR_CHANGE",{from:n,presetId:t.presetId}),Be.patchPeer(n,{presetId:t.presetId});break;case"status":lt(this,Qt,vn).call(this,"STATUS_CHANGE",{from:n,status:t.status}),Be.patchPeer(n,{status:t.status});break;case"talking":lt(this,Qt,vn).call(this,"PEER_TALKING",{from:n,talking:!!t.talking});break;case"bye":lt(this,Qt,vn).call(this,"PEER_LEAVE",{from:n});break;case"hb":Be.heartbeat(n);break;case"state_req":{const r=Be.getSnapshot(),o=(i=b(this,Me).get(e))==null?void 0:i.peer;o==null||o.send({type:"state",identityId:lt(this,Qt,tn).call(this),peers:r});break}case"state":{const r=lt(this,Qt,tn).call(this),o=t.peers??{};for(const[a,l]of Object.entries(o)){if(a===r)continue;Be.upsertPeer(a,l)&&!b(this,Me).has(a)&&lt(this,Qt,vn).call(this,"HELLO",{from:a,username:l.username??"",presetId:l.presetId??0,status:l.status??"available"})}break}case"delta":{Be.upsertPeer(n,t)&&!b(this,Me).has(n)&&lt(this,Qt,vn).call(this,"HELLO",{from:n,username:t.username??"",presetId:t.presetId??0,status:t.status??"available"});break}}},tn=function(){var t;return((t=sc())==null?void 0:t.peerId)??"unknown"},vn=function(t,e){var n;(n=b(this,ai)[t])==null||n.forEach(i=>i(e))};function wx(s){const t=new URLSearchParams(window.location.search).get("nodeApi");return t||"https://xpacenode.spacevilla.xyz"}async function bx(s){if(!hd())return s([]),()=>{};const e=wx();if(!e)return s([]),()=>{};let n=!1;const i=9e4,r=new Map,o=async()=>{if(!n)try{const h=await(await fetch(`${e}/rooms`,{signal:AbortSignal.timeout(5e3)})).json(),u=Date.now();for(const d of h.rooms??[])r.set(d.roomId,{count:d.count,usernames:d.usernames??[],lastSeen:u});for(const[d,f]of r)u-f.lastSeen>i&&r.delete(d);a()}catch{}},a=()=>{const c=[...r.entries()].map(([h,u])=>({roomId:h,roomName:h,count:u.count})).sort((h,u)=>u.count-h.count);s(c)};await o();const l=setInterval(o,3e4);return()=>{n=!0,clearInterval(l)}}const Tx=[{urls:"stun:stun.l.google.com:19302"},{urls:"stun:stun1.l.google.com:19302"},{urls:"turn:openrelay.metered.ca:80",username:"openrelayproject",credential:"openrelayproject"},{urls:"turn:openrelay.metered.ca:80?transport=tcp",username:"openrelayproject",credential:"openrelayproject"}];var Ne,hi,ir,sr,rr,or,eo,zl,zn,la,ar,no,io,so,ro,oo,ao,lo,ca,co,ha,ua,lr,ho,uo,cr,Le,ii,An;class su{constructor(t,e=0,n="available"){at(this,Le);at(this,Ne,null);at(this,hi,{});at(this,ir,"");at(this,sr,0);at(this,rr,"available");at(this,or,"");at(this,eo,"main");at(this,zl,null);at(this,zn,new Map);at(this,la,[]);at(this,ar,null);at(this,no,[]);at(this,io,null);at(this,so,null);at(this,ro,null);at(this,oo,null);at(this,ao,null);at(this,lo,null);at(this,ca,null);at(this,co,null);at(this,ha,null);at(this,ua,null);at(this,lr,null);at(this,ho,[]);at(this,uo,0);at(this,cr,null);ft(this,ir,t),ft(this,sr,e),ft(this,rr,n)}async start(t,e,n="default",i=[]){ft(this,or,t),ft(this,eo,e),ft(this,ho,i),n==="link"&&he.info("Invite link decoded — using hashed room address"),i.length&&he.info(`${i.length} known peer${i.length>1?"s":""} cached`,"Will recognise them when they appear on DHT");const r=he.push("Trying public DHT route (BitTorrent)…");ft(this,Ne,vd({appId:"xpacenet-v3",rtcConfig:{iceServers:Tx}},t));const[o,a]=b(this,Ne).makeAction("intro"),[l,c]=b(this,Ne).makeAction("move"),[h,u]=b(this,Ne).makeAction("chat"),[d,f]=b(this,Ne).makeAction("avatar"),[g,_]=b(this,Ne).makeAction("status"),[m,p]=b(this,Ne).makeAction("talking"),[E,v]=b(this,Ne).makeAction("bye"),[M,U]=b(this,Ne).makeAction("hb"),[A,T]=b(this,Ne).makeAction("stateReq"),[O,w]=b(this,Ne).makeAction("state"),[x,P]=b(this,Ne).makeAction("delta");ft(this,io,l),ft(this,so,h),ft(this,ro,d),ft(this,oo,g),ft(this,ao,m),ft(this,lo,E),ft(this,ca,o),ft(this,co,M),ft(this,ha,A),ft(this,ua,O),ft(this,lr,x),b(this,Ne).onPeerJoin(D=>{if(D===lt(this,Le,ii).call(this))return;const F=b(this,ho).includes(D);he.peerJoined(D.slice(0,10)),F&&he.info("✓ Known peer reconnected via DHT"),o({identityId:lt(this,Le,ii).call(this),username:b(this,ir),presetId:b(this,sr),status:b(this,rr)},[D]),A({identityId:lt(this,Le,ii).call(this)},[D]),b(this,zn).has(D)||(b(this,zn).set(D,{peerId:D,username:"",presetId:0,status:"available"}),ac(b(this,or),D))}),b(this,Ne).onPeerLeave(D=>{b(this,zn).delete(D),lt(this,Le,An).call(this,"PEER_LEAVE",{from:D})}),a(({identityId:D,username:F,presetId:B=0,status:j="available"},V)=>{const et=D??V;b(this,zn).set(et,{peerId:et,username:F,presetId:B,status:j}),he.info(`Connected to ${F||et.slice(0,10)}`),lt(this,Le,An).call(this,"HELLO",{from:et,username:F,presetId:B,status:j})}),c(({pos:D},F)=>lt(this,Le,An).call(this,"MOVE",{from:F,pos:D})),u((D,F)=>lt(this,Le,An).call(this,"CHAT",{from:F,username:D.username,text:D.text,ts:D.ts})),p(({talking:D},F)=>lt(this,Le,An).call(this,"PEER_TALKING",{from:F,talking:!!D})),v((D,F)=>lt(this,Le,An).call(this,"PEER_LEAVE",{from:F})),f(({presetId:D},F)=>{lt(this,Le,An).call(this,"AVATAR_CHANGE",{from:F,presetId:D}),Be.patchPeer(F,{presetId:D})}),_(({status:D},F)=>{lt(this,Le,An).call(this,"STATUS_CHANGE",{from:F,status:D}),Be.patchPeer(F,{status:D})}),U((D,F)=>{Be.heartbeat(F)}),T((D,F)=>{const B=Be.getSnapshot();O({identityId:lt(this,Le,ii).call(this),peers:B},[F])}),w(({peers:D={}},F)=>{const B=lt(this,Le,ii).call(this);for(const[j,V]of Object.entries(D)){if(j===B)continue;Be.upsertPeer(j,V)&&!b(this,zn).has(j)&&lt(this,Le,An).call(this,"HELLO",{from:j,username:V.username??"",presetId:V.presetId??0,status:V.status??"available"})}}),P((D,F)=>{Be.upsertPeer(F,D)&&!b(this,zn).has(F)&&lt(this,Le,An).call(this,"HELLO",{from:F,username:D.username??"",presetId:D.presetId??0,status:D.status??"available"})}),b(this,Ne).onPeerStream((D,F)=>{const B=D.getAudioTracks()[0];B&&(b(this,ar)?b(this,ar).call(this,B,D,F,F):b(this,no).push({track:B,stream:D,identityId:F,nostrPubkey:F}))}),ft(this,cr,setInterval(()=>{var D;(D=b(this,co))==null||D.call(this,{identityId:lt(this,Le,ii).call(this)})},3e4)),Dl.schedule(()=>Be.pruneCold(),"prune-cold-rooms"),he.ok(r,"DHT ready — searching for peers"),he.info("Searching for peers in room…"),he.startFirstTimer(15e3)}stop(){var t,e;clearInterval(b(this,cr)),ft(this,cr,null),(t=b(this,lo))==null||t.call(this),(e=b(this,Ne))==null||e.leave(),ft(this,Ne,null),b(this,zn).clear(),Dl.clear()}move(t,e,n,i=0){var r;(r=b(this,io))==null||r.call(this,{pos:{x:t,y:e,z:n,ry:i}})}chat(t){var e;(e=b(this,so))==null||e.call(this,{username:b(this,ir),text:t,ts:Date.now()})}setAvatar(t){var e,n;ft(this,sr,t),(e=b(this,ro))==null||e.call(this,{presetId:t}),(n=b(this,lr))==null||n.call(this,{identityId:lt(this,Le,ii).call(this),presetId:t,v:++us(this,uo)._})}setStatus(t){var e,n;ft(this,rr,t),(e=b(this,oo))==null||e.call(this,{status:t}),(n=b(this,lr))==null||n.call(this,{identityId:lt(this,Le,ii).call(this),status:t,v:++us(this,uo)._})}broadcastTalking(t){var e;(e=b(this,ao))==null||e.call(this,{talking:!!t})}addVoiceTrack(t,e){var n;b(this,la).push({track:t,stream:e}),(n=b(this,Ne))==null||n.addStream(e)}onVoiceTrack(t){ft(this,ar,t);const e=b(this,no).splice(0);for(const{track:n,stream:i,identityId:r,nostrPubkey:o}of e)n.readyState!=="ended"&&t(n,i,r,o)}wireToIdentityId(t){return t}getPeers(){return{}}on(t,e){return b(this,hi)[t]||(b(this,hi)[t]=[]),b(this,hi)[t].push(e),()=>{b(this,hi)[t]=b(this,hi)[t].filter(n=>n!==e)}}get roomName(){return b(this,eo)}get roomHash(){return b(this,or)}get nodeUrl(){return null}}Ne=new WeakMap,hi=new WeakMap,ir=new WeakMap,sr=new WeakMap,rr=new WeakMap,or=new WeakMap,eo=new WeakMap,zl=new WeakMap,zn=new WeakMap,la=new WeakMap,ar=new WeakMap,no=new WeakMap,io=new WeakMap,so=new WeakMap,ro=new WeakMap,oo=new WeakMap,ao=new WeakMap,lo=new WeakMap,ca=new WeakMap,co=new WeakMap,ha=new WeakMap,ua=new WeakMap,lr=new WeakMap,ho=new WeakMap,uo=new WeakMap,cr=new WeakMap,Le=new WeakSet,ii=function(){var t;return((t=sc())==null?void 0:t.peerId)??"unknown"},An=function(t,e){var n;(n=b(this,hi)[t])==null||n.forEach(i=>i(e))};var Ye,rn,hr,fo,po,mo,Ue,pd,md,Bl,xn;class Ax extends EventTarget{constructor(){super(...arguments);at(this,Ue);at(this,Ye,null);at(this,rn,new Map);at(this,hr,!1);at(this,fo,"");at(this,po,0);at(this,mo,"available")}get id(){var e;return((e=sc())==null?void 0:e.peerId)??""}get peers(){return[...b(this,rn).values()]}get peerCount(){return b(this,rn).size}get roomName(){var e;return((e=b(this,Ye))==null?void 0:e.roomName)??"main"}get nodeUrl(){var e;return((e=b(this,Ye))==null?void 0:e.nodeUrl)??null}async start(e,n=0,i="available"){if(b(this,hr))return;ft(this,hr,!0),ft(this,fo,e),ft(this,po,n),ft(this,mo,i);let r;try{r=new Ex(e,n,i),await r.start()}catch(o){if((o==null?void 0:o.message)==="NO_NODE")r=new su(e,n,i),await r.start(o.roomHash,o.roomName,o.linkType,o.knownPeers??[]);else{he.info("xpacenode unreachable — falling back to public DHT route");const{parseCurrentLink:a,getKnownPeers:l}=await hl(async()=>{const{parseCurrentLink:u,getKnownPeers:d}=await Promise.resolve().then(()=>Cl);return{parseCurrentLink:u,getKnownPeers:d}},void 0,import.meta.url),c=await a(),h=l(c.roomHash);r=new su(e,n,i),await r.start(c.roomHash,c.roomId,c.type,h)}}ft(this,Ye,r),lt(this,Ue,pd).call(this),lt(this,Ue,xn).call(this,"status",{peerCount:b(this,rn).size})}stop(){var e;(e=b(this,Ye))==null||e.stop(),ft(this,Ye,null),b(this,rn).clear(),ft(this,hr,!1),Be.clearHot()}move(e,n,i,r=0){var o;(o=b(this,Ye))==null||o.move(e,n,i,r)}setAvatar(e){var n;ft(this,po,e),(n=b(this,Ye))==null||n.setAvatar(e)}setStatus(e){var n;ft(this,mo,e),(n=b(this,Ye))==null||n.setStatus(e)}sendChat(e){var i;if(!e.trim())return;const n=Date.now();lt(this,Ue,xn).call(this,"chat",{from:this.id,username:b(this,fo),text:e,ts:n}),(i=b(this,Ye))==null||i.chat(e)}addVoiceTrack(e,n){var i;(i=b(this,Ye))==null||i.addVoiceTrack(e,n)}onVoiceTrack(e){var n;(n=b(this,Ye))==null||n.onVoiceTrack(e)}wireToIdentityId(e){var n;return(n=b(this,Ye))==null?void 0:n.wireToIdentityId(e)}broadcastTalking(e){var n;(n=b(this,Ye))==null||n.broadcastTalking(e)}}Ye=new WeakMap,rn=new WeakMap,hr=new WeakMap,fo=new WeakMap,po=new WeakMap,mo=new WeakMap,Ue=new WeakSet,pd=function(){const e=b(this,Ye);e.on("HELLO",({from:n,username:i,presetId:r=0,status:o="available"})=>{b(this,rn).has(n)||(lt(this,Ue,md).call(this,n,i,r,o),Be.upsertPeer(n,{username:i,presetId:r,status:o,v:0}))}),e.on("PEER_LEAVE",({from:n})=>{lt(this,Ue,Bl).call(this,n),Be.removePeer(n)}),e.on("MOVE",({from:n,pos:i})=>{lt(this,Ue,xn).call(this,"peer:move",{peerId:n,pos:i}),Be.updatePos(n,i)}),e.on("AVATAR_CHANGE",({from:n,presetId:i})=>{lt(this,Ue,xn).call(this,"peer:avatar",{peerId:n,presetId:i})}),e.on("STATUS_CHANGE",({from:n,status:i})=>{lt(this,Ue,xn).call(this,"peer:status",{peerId:n,status:i})}),e.on("PEER_TALKING",({from:n,talking:i})=>{lt(this,Ue,xn).call(this,"peer:talking",{peerId:n,talking:i})}),e.on("CHAT",({from:n,username:i,text:r,ts:o})=>{lt(this,Ue,xn).call(this,"chat",{from:n,username:i,text:r,ts:o})}),Be.addEventListener("peer:expired",({detail:{peerId:n}})=>{b(this,rn).has(n)&&lt(this,Ue,Bl).call(this,n)})},md=function(e,n,i,r){b(this,rn).set(e,{peerId:e,username:n,presetId:i,status:r}),lt(this,Ue,xn).call(this,"peer:join",{peerId:e,username:n,presetId:i,status:r}),lt(this,Ue,xn).call(this,"status",{peerCount:b(this,rn).size})},Bl=function(e){b(this,rn).has(e)&&(b(this,rn).delete(e),lt(this,Ue,xn).call(this,"peer:leave",{peerId:e}),lt(this,Ue,xn).call(this,"status",{peerCount:b(this,rn).size}))},xn=function(e,n){this.dispatchEvent(new CustomEvent(e,{detail:n}))};const ce=new Ax,ti=Object.freeze({OCEAN:"ocean",COAST:"coast",DESERT:"desert",PLAINS:"plains",FOREST:"forest",MOUNTAIN:"mountain",ARCTIC:"arctic",JUNGLE:"jungle",TUNDRA:"tundra"});function $o(s){let t=5381;for(let e=0;e<s.length;e++)t=Math.imul(t,33)^s.charCodeAt(e);return(t>>>0).toString(16).padStart(8,"0")}function gd(s,t,e,n){const i=JSON.stringify({parentHash:s,authorId:t,changes:e,timestamp:n});let r=$o(i),o=$o(r+i.slice(0,32)),a=$o(o+i.slice(-32)),l=$o(a+t);return r+o+a+l}class Zs{constructor(t,e,n,i="",r=Date.now()){this.parentHash=t,this.authorId=e,this.changes=Object.freeze([...n]),this.message=i,this.timestamp=r,this.hash=gd(t,e,n,r)}buildRevert(t,e=Date.now()){const n=this.changes.map(i=>({cellId:i.cellId,key:i.key,oldValue:i.newValue,newValue:i.oldValue}));return new Zs(this.hash,t,n,`revert: ${this.message||this.hash.slice(0,8)}`,e)}toJSON(){return{hash:this.hash,parentHash:this.parentHash,authorId:this.authorId,message:this.message,timestamp:this.timestamp,changes:this.changes}}}const Rx="universe",Cx="genesis: the universe begins";var We,on;class Px{constructor(){at(this,We,new Map);at(this,on,null);this._genesis()}_genesis(){const t=new Zs(null,Rx,[],Cx,0);b(this,We).set(t.hash,t),ft(this,on,t.hash)}get head(){return b(this,on)}get length(){return b(this,We).size}getCommit(t){return b(this,We).get(t)??null}headCommit(){return b(this,We).get(b(this,on))}log(t=1/0){const e=[];let n=b(this,on);for(;n&&e.length<t;){const i=b(this,We).get(n);if(!i)break;e.push(i),n=i.parentHash}return e}stateAt(t){const e=[];let n=t;for(;n;){const r=b(this,We).get(n);if(!r)break;e.unshift(r),n=r.parentHash}const i=new Map;for(const r of e)for(const{cellId:o,key:a,newValue:l}of r.changes)i.set(`${o}:${a}`,l);return i}currentState(){return this.stateAt(b(this,on))}diff(t,e){const n=this.stateAt(t),i=this.stateAt(e),r=[],o=new Set([...n.keys(),...i.keys()]);for(const a of o){const l=n.get(a)??null,c=i.get(a)??null;if(l!==c){const[h,u]=a.split(":");r.push({cellId:h,key:u,before:l,after:c})}}return r}commit(t,e,n=""){if(!Array.isArray(e)||e.length===0)throw new Error("commit requires at least one change");for(const r of e)if(!r.cellId||!r.key)throw new Error("each change must have cellId and key");const i=new Zs(b(this,on),t,e,n);return b(this,We).set(i.hash,i),ft(this,on,i.hash),i}revert(t,e){const n=b(this,We).get(t);if(!n)throw new Error(`commit ${t} not found`);if(n.changes.length===0)throw new Error("cannot revert empty commit");n.buildRevert(e);const i=new Zs(b(this,on),e,[...n.changes].map(r=>({cellId:r.cellId,key:r.key,oldValue:r.newValue,newValue:r.oldValue})),`revert: ${n.message||n.hash.slice(0,8)}`);return b(this,We).set(i.hash,i),ft(this,on,i.hash),i}applyExternal(t){if(b(this,We).has(t.hash))return b(this,We).get(t.hash);if(t.parentHash&&!b(this,We).has(t.parentHash))throw new Error(`missing parent ${t.parentHash} — cannot apply ${t.hash}`);const e=new Zs(t.parentHash,t.authorId,t.changes,t.message,t.timestamp);return b(this,We).set(t.hash,e),t.parentHash===b(this,on)&&ft(this,on,t.hash),e}verify(){for(const t of b(this,We).values()){if(gd(t.parentHash,t.authorId,t.changes,t.timestamp)!==t.hash)return{valid:!1,broken:t.hash};if(t.parentHash&&!b(this,We).has(t.parentHash))return{valid:!1,broken:t.hash,reason:"missing-parent"}}return{valid:!0}}}We=new WeakMap,on=new WeakMap;const pe=Object.freeze({SOLAR:"solar",WIND:"wind",HYDRO:"hydro",MINERAL:"mineral",RARE_EARTH:"rare_earth",BIOLOGICAL:"biological",FISHERY:"fishery",GEOTHERMAL:"geothermal"});ti.OCEAN+"",pe.FISHERY+"",pe.WIND+"",ti.COAST+"",pe.FISHERY+"",pe.WIND+"",pe.SOLAR+"",ti.DESERT+"",pe.SOLAR+"",pe.RARE_EARTH+"",pe.MINERAL+"",ti.PLAINS+"",pe.WIND+"",pe.MINERAL+"",pe.BIOLOGICAL+"",pe.SOLAR+"",ti.FOREST+"",pe.BIOLOGICAL+"",pe.HYDRO+"",pe.WIND+"",ti.MOUNTAIN+"",pe.MINERAL+"",pe.RARE_EARTH+"",pe.GEOTHERMAL+"",pe.WIND+"",pe.HYDRO+"",ti.ARCTIC+"",pe.MINERAL+"",pe.WIND+"",ti.JUNGLE+"",pe.BIOLOGICAL+"",pe.HYDRO+"",pe.SOLAR+"",ti.TUNDRA+"",pe.MINERAL+"",pe.GEOTHERMAL+"",pe.WIND+"";(()=>{var u;const s=document.getElementById("conn-log"),t=document.getElementById("conn-log-body"),e=document.getElementById("conn-log-title"),n=document.getElementById("conn-log-toggle"),i=document.getElementById("conn-log-dismiss");if(!s)return;const r={pending:"⏳",ok:"✅",fail:"❌",warn:"⚠️",info:"·",host:"🏠"},o=new Map,a=()=>s.classList.remove("hidden"),l=()=>s.classList.add("hidden");he.addEventListener("step",({detail:d})=>{if(a(),d.action==="add"){const g=document.createElement("div");g.className=`cl-step ${d.status}`,g.innerHTML=`
        <span class="cl-icon">${r[d.status]??"·"}</span>
        <div>
          <div class="cl-text">${d.text}</div>
          ${d.detail?`<div class="cl-detail">${d.detail}</div>`:""}
        </div>`,t.appendChild(g),o.set(d.id,g),t.scrollTop=t.scrollHeight}else{const g=o.get(d.id);if(!g)return;if(g.className=`cl-step ${d.status}`,g.querySelector(".cl-icon").textContent=r[d.status]??"·",d.detail){let _=g.querySelector(".cl-detail");_||(_=document.createElement("div"),_.className="cl-detail",g.querySelector(".cl-text").after(_)),_.textContent=d.detail}}const f=he.steps.at(-1);f&&(e.textContent=`⬡ ${f.text}`)}),he.addEventListener("clear",()=>{t.innerHTML="",o.clear()});let c=!1;(u=document.getElementById("conn-log-header"))==null||u.addEventListener("click",()=>{c=!c,t.classList.toggle("collapsed",c),n.textContent=c?"▼":"▲"}),i==null||i.addEventListener("click",l),he.addEventListener("first-in-room",()=>{if(e.textContent="🏠 You're the host",s.style.borderColor="rgba(255,180,50,0.35)",!document.getElementById("cl-host-share")){const f=document.createElement("button");f.id="cl-host-share",f.textContent="🔗 Copy invite link",f.style.cssText=`
        display:block; width:calc(100% - 28px); margin:4px 14px 8px;
        padding:7px; border-radius:6px; border:1px solid rgba(255,180,50,0.3);
        background:rgba(255,180,50,0.08); color:rgba(255,220,100,0.9);
        font-size:0.75rem; cursor:pointer; text-align:center;
      `,f.addEventListener("click",async()=>{try{const{link:g}=await rc({roomId:ce.roomName,node:ce.nodeUrl??void 0});await navigator.clipboard.writeText(g),f.textContent="✅ Copied!",setTimeout(()=>{f.textContent="🔗 Copy invite link"},2e3)}catch{}}),t.after(f)}});let h=null;ce.addEventListener("peer:join",()=>{var d;e.textContent="⬡ Connected",s.style.borderColor="",(d=document.getElementById("cl-host-share"))==null||d.remove(),clearTimeout(h),h=setTimeout(l,6e3)})})();(async()=>{const s=await hx(),t=new Px;window._worldHistory=t;let e=!1;function n({peerCount:E}={}){document.querySelectorAll(".ipfs-dot").forEach(M=>{M.className="ipfs-dot green"}),document.querySelectorAll(".ipfs-label").forEach(M=>{M.textContent=`P2P · ${s.shortId}`});const v=document.getElementById("ipfs-tier");if(v&&e){const M=!!ce.nodeUrl;v.textContent=M?"xpacenode":"DHT fallback (slow)",v.className=M?"tier-node":"tier-fallback",v.title=M?`Connected via ${ce.nodeUrl}`:"xpacenode was unreachable — using public BitTorrent-tracker signaling instead"}E!==void 0&&document.querySelectorAll("#ipfs-peers").forEach(M=>{E>0?(M.textContent=`${E} peer${E!==1?"s":""}`,M.style.color="rgba(120,255,160,0.7)"):e?(M.textContent="· searching…",M.style.color="rgba(255,200,80,0.7)"):M.textContent=""})}n({peerCount:0}),ce.addEventListener("status",E=>n(E.detail)),ce.addEventListener("commit",E=>{try{t.applyExternal(E.detail.commit)}catch{}});const i=document.getElementById("lobby"),r=document.getElementById("loading"),o=document.getElementById("load-fill"),a=document.getElementById("load-text"),l=document.getElementById("hud"),c=document.getElementById("click-to-start"),h=document.getElementById("enter-btn"),u=document.getElementById("username"),d=document.getElementById("room-name");!s.isNew&&s.displayName&&(u.value=s.displayName),(async()=>{const{parseCurrentLink:E}=await hl(async()=>{const{parseCurrentLink:P}=await Promise.resolve().then(()=>Cl);return{parseCurrentLink:P}},void 0,import.meta.url),v=await E(),M=document.getElementById("lobby-invited"),U=document.getElementById("lobby-invited-room"),A=document.getElementById("lobby-default"),T=document.getElementById("lobby-create-row"),O=document.getElementById("lobby-room-row"),w=document.getElementById("create-btn"),x=document.getElementById("join-named-btn");v.type==="link"?(U.textContent=v.roomId,M.style.display="block",A.style.display="none",O.style.display="none",T.style.display="none",h.style.display="block",h.textContent="Join Room →"):v.type==="plain"?(d&&(d.value=v.roomId),Dr(v.roomId),A.style.display="none",T.style.display="none",h.style.display="block",h.textContent=`Enter ${v.roomId} →`):(M.style.display="none",T.style.display="none",O.style.display="none",h.style.display="block",h.textContent="Enter main →",Dr("main")),w==null||w.addEventListener("click",async()=>{const P=u.value.trim();if(!P){u.focus(),u.style.borderColor="#f55";return}u.style.borderColor="";const D=(d==null?void 0:d.value.trim())||`room-${Math.random().toString(36).slice(2,7)}`;Dr(D);try{const{createRoomLink:F}=await hl(async()=>{const{createRoomLink:V}=await Promise.resolve().then(()=>Cl);return{createRoomLink:V}},void 0,import.meta.url),{link:B}=await F({roomId:D});if(await navigator.clipboard.writeText(B).then(()=>!0).catch(()=>!1)){const V=w.textContent;w.textContent="✅ Link copied!",w.disabled=!0,setTimeout(()=>{w.textContent=V,w.disabled=!1},1800)}else{const V=document.createElement("div");V.style.cssText=`
            width:100%;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.15);
            border-radius:8px;padding:8px 12px;font-size:0.72rem;word-break:break-all;
            color:#aac8ff;cursor:pointer;margin-top:-6px;text-align:left;
          `,V.textContent=B,V.title="Click to select all",V.addEventListener("click",()=>{const et=document.createRange();et.selectNodeContents(V);const J=window.getSelection();J.removeAllRanges(),J.addRange(et)}),w.parentElement.insertBefore(V,w.nextSibling),setTimeout(()=>V.remove(),2e4)}}catch{}p(P)}),x==null||x.addEventListener("click",()=>{const P=u.value.trim();if(!P){u.focus(),u.style.borderColor="#f55";return}u.style.borderColor="";const D=(d==null?void 0:d.value.trim())||"main";Dr(D),p(P)}),h==null||h.addEventListener("click",()=>{const P=u.value.trim();if(!P){u.focus(),u.style.borderColor="#f55";return}u.style.borderColor="",p(P)})})();const f=document.getElementById("id-fingerprint");f&&(f.textContent=s.isNew?"New identity generated":`Identity · ${s.shortId}`),function(){const v=document.getElementById("lobby-avatar-grid");if(!v)return;const M=parseInt(localStorage.getItem("spaceAvatarId")??"0",10),U=A=>"#"+A.toString(16).padStart(6,"0");cs.forEach(A=>{const T=U(A.skin),O=U(A.hair),w=U(A.outfit),x=U(A.accent),P=document.createElement("div");P.className="lav-chip"+(A.id===M?" lav-active":""),P.dataset.id=String(A.id),P.title=A.label,P.innerHTML=`<svg viewBox="0 0 60 82" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="30" cy="16" rx="17" ry="14" fill="${O}"/>
        <circle cx="30" cy="22" r="13" fill="${T}"/>
        <ellipse cx="17.5" cy="22" rx="3.5" ry="4.5" fill="${T}"/>
        <ellipse cx="42.5" cy="22" rx="3.5" ry="4.5" fill="${T}"/>
        <circle cx="25" cy="21" r="2.8" fill="${x}"/><circle cx="35" cy="21" r="2.8" fill="${x}"/>
        <circle cx="25" cy="21" r="1.6" fill="#111"/><circle cx="35" cy="21" r="1.6" fill="#111"/>
        <rect x="26.5" y="34" width="7" height="5" rx="2" fill="${T}"/>
        <rect x="14" y="39" width="32" height="24" rx="6" fill="${w}"/>
        <rect x="22" y="44" width="16" height="5" rx="2" fill="${x}" opacity="0.75"/>
        <rect x="5" y="40" width="10" height="20" rx="5" fill="${w}"/>
        <rect x="45" y="40" width="10" height="20" rx="5" fill="${w}"/>
        <rect x="16" y="62" width="11" height="14" rx="4" fill="${w}"/>
        <rect x="33" y="62" width="11" height="14" rx="4" fill="${w}"/>
      </svg>`,P.addEventListener("click",()=>{v.querySelectorAll(".lav-chip").forEach(D=>D.classList.remove("lav-active")),P.classList.add("lav-active"),localStorage.setItem("spaceAvatarId",String(A.id))}),v.appendChild(P)})}();let g=null;const _=document.getElementById("active-rooms"),m=document.getElementById("active-rooms-list");bx(E=>{if(!(!_||!m)){if(E.length===0){_.style.display="none";return}_.style.display="block",m.innerHTML=E.slice(0,5).map(v=>{const M=v.roomName==="main"?"main (public)":v.roomName,U=`${v.count} ${v.count===1?"person":"people"}`;return`<button class="lobby-room-chip" data-room="${v.roomName}">
        <span class="room-chip-dot"></span>
        <span class="room-chip-name">${M}</span>
        <span class="room-chip-count">${U}</span>
      </button>`}).join(""),m.querySelectorAll(".lobby-room-chip").forEach(v=>{v.addEventListener("click",()=>{Dr(v.dataset.room),h.textContent=`Enter ${v.dataset.room} →`})})}}).then(E=>{g=E}).catch(()=>{}),u==null||u.addEventListener("keydown",E=>{if(E.key==="Enter"){const v=u.value.trim();v&&p(v)}}),d==null||d.addEventListener("keydown",E=>{if(E.key==="Enter"){const v=u.value.trim();v&&p(v)}});function p(E){if(!E)return;s.setName(E),g==null||g(),g=null,window._spaceUsername=E,i.style.display="none",r.classList.add("visible");const{scene:v,camera:M,renderer:U,onShipLoaded:A}=xv((T,O)=>{o.style.width=T+"%",a.textContent=O});A(()=>{var De,se,ln,cn,Un,hs,Sr,Er;r.classList.remove("visible"),l.classList.add("visible"),c.classList.remove("hidden");const{meshes:T,screens:O}=yv(v),{openScreen:w,isOpen:x}=Jv(),P=parseInt(localStorage.getItem("spaceAvatarId")??"0",10),D=new lx(X=>B==null?void 0:B.navigate(X)),F=document.getElementById("presence-panel");F&&F.classList.add("pp-visible"),D.setSelf(E,P,"OUTSIDE","available");const B=Zv(v,M,U,X=>{Ix(X),D.updateSelfZone(X)},X=>{ce.setAvatar(X),D.setSelf(E,X,D._self.zone,j)});let j="available";const V=document.getElementById("status-btn"),et=document.getElementById("status-menu");V&&et&&(ec.forEach(X=>{const xt="#"+X.color.toString(16).padStart(6,"0"),Et=document.createElement("div");Et.className="sm-opt"+(X.id===j?" sm-active":""),Et.dataset.status=X.id,Et.innerHTML=`<span class="sm-dot" style="background:${xt};box-shadow:0 0 4px ${xt}40"></span>${X.label}`,Et.addEventListener("click",jt=>{jt.stopPropagation(),j=X.id,V.innerHTML=`<span class="sm-dot" style="background:${xt};box-shadow:0 0 4px ${xt}40;display:inline-block;vertical-align:middle;width:8px;height:8px;border-radius:50%;margin-right:5px"></span>${X.label.replace(/^\S+\s/,"")}`,B.setStatus(X.id),D.updateSelfStatus(X.id),ce.setStatus(X.id),et.querySelectorAll(".sm-opt").forEach(xe=>xe.classList.toggle("sm-active",xe.dataset.status===X.id)),et.classList.remove("sm-open")}),et.appendChild(Et)}),V.addEventListener("click",X=>{X.stopPropagation(),et.classList.toggle("sm-open")}),document.addEventListener("click",()=>et.classList.remove("sm-open"))),document.querySelectorAll(".vtbtn").forEach(X=>{X.addEventListener("click",xt=>{xt.stopPropagation(),_t(),B.setView(X.dataset.view),X.dataset.view==="first"&&document.pointerLockElement!==U.domElement&&U.domElement.requestPointerLock()})});let J=!1;function _t(){J||(J=!0,c.classList.add("hidden"))}document.addEventListener("pointerlockchange",()=>{document.pointerLockElement===U.domElement&&_t()}),c.addEventListener("click",_t);const wt=new Set(["KeyW","KeyA","KeyS","KeyD"]),Ct=new Set([...wt,"ArrowUp","ArrowDown","ArrowLeft","ArrowRight"]);document.addEventListener("keydown",X=>{Ct.has(X.code)&&(_t(),wt.has(X.code)&&B.getMode()==="first"&&document.pointerLockElement!==U.domElement&&U.domElement.requestPointerLock())});const q=new ev,ht=new yt,k=new Ei(new L(0,1,0),0),Y=new L;U.domElement.addEventListener("click",X=>{if(x()||document.pointerLockElement===U.domElement||B.isDragMoved())return;_t(),ht.x=X.clientX/window.innerWidth*2-1,ht.y=-(X.clientY/window.innerHeight)*2+1,q.setFromCamera(ht,M);const xt=q.intersectObjects(T);if(xt.length>0){w(xt[0].object.userData.screen);return}q.ray.intersectPlane(k,Y)&&B.navigate({x:Math.max(-65,Math.min(65,Y.x)),z:Math.max(-65,Math.min(65,Y.z))})});const K=new rx,$=document.getElementById("voice-btn"),ut=new Map,At=new Map;ce.addEventListener("peer:join",X=>{const{peerId:xt,username:Et,presetId:jt}=X.detail;if(At.set(xt,Et),ut.has(xt))return;const xe=jt??Lx(xt),He=Zu(Et,xe),we=Be.getPeer(xt);we!=null&&we.pos&&(He.position.set(we.pos.x,we.pos.y??0,we.pos.z),we.pos.ry!==void 0&&(He.rotation.y=we.pos.ry)),v.add(He),ut.set(xt,He),ru(l,ut.size+1),D.addPeer(xt,Et,xe),B.peerJoin(xt,Et)}),ce.addEventListener("peer:move",X=>{const{peerId:xt,pos:Et}=X.detail,jt=ut.get(xt);if(D.movePeer(xt,Et.x,Et.z),jt){const xe=jt.position.clone();if(jt.position.lerp(new L(Et.x,Et.y??0,Et.z),.6),Et.ry!==void 0){let He=Et.ry-jt.rotation.y;for(;He>Math.PI;)He-=Math.PI*2;for(;He<-Math.PI;)He+=Math.PI*2;jt.rotation.y+=He*.25}xe.distanceTo(jt.position)>.008&&(jt.userData.isMoving=!0,clearTimeout(jt.userData._stopTimer),jt.userData._stopTimer=setTimeout(()=>{jt.userData.isMoving=!1},180))}B.peerMove(xt,Et.x,Et.z,At.get(xt)??xt.slice(-4))}),ce.addEventListener("peer:leave",X=>{const xt=ut.get(X.detail.peerId);xt&&(v.remove(xt),ut.delete(X.detail.peerId),ru(l,ut.size+1)),K.removePeer(X.detail.peerId),D.removePeer(X.detail.peerId),B.peerLeave(X.detail.peerId),At.delete(X.detail.peerId)}),ce.addEventListener("peer:avatar",X=>{const{peerId:xt,presetId:Et}=X.detail,jt=ut.get(xt),xe=At.get(xt)??xt.slice(-4);jt&&$u(jt,xe,Et),D.updatePeerPreset(xt,Et)}),ce.addEventListener("peer:status",X=>{const{peerId:xt,status:Et}=X.detail,jt=ut.get(xt);jt&&Yu(jt,Et),D.updatePeerStatus(xt,Et)}),ce.addEventListener("peer:talking",X=>{const{peerId:xt,talking:Et}=X.detail,jt=ut.get(xt);jt&&(jt.userData._isTalking=Et)});let zt=performance.now();(function X(){requestAnimationFrame(X);const xt=performance.now(),Et=Math.min((xt-zt)/1e3,.1);zt=xt;const jt=xt/1e3;ut.forEach((xe,He)=>{Ju(xe,xe.userData.isMoving??!1,Et),qu(xe,xe.userData._isTalking??!1,jt)}),B.setSelfTalking(K.isTalking("self"),jt)})(),ce.start(E,P,j),e=!0,n({peerCount:0}),window._sync=ce,window._voice=K;const I=({active:X,muted:xt}={})=>{$&&(X?xt?($.textContent="🔇 Muted",$.className="hud-side-btn voice-muted"):($.textContent="🎙 Live",$.className="hud-side-btn voice-active"):($.textContent="🎙 Voice",$.className="hud-side-btn"))};if(K.onStateChange(I),I({active:!1,muted:!1}),K.onTalkChange(X=>{B.setTalkingPeers(X)}),K.onSelfTalkChange(X=>{ce.broadcastTalking(X)}),$){let X=!1;$.addEventListener("click",async xt=>{if(xt.stopPropagation(),K.active){K.toggleMute();return}if(X)return;X=!0,$.textContent="⏳ Connecting…";const Et=await K.start(ce);if(X=!1,!Et){$.textContent="🚫 No mic",$.className="hud-side-btn";return}I({active:K.active,muted:K.muted})})}setInterval(()=>{const X=B.getPosition(),xt=B.getRotation();ce.move(X.x,X.y,X.z,xt.y),K.update(X,ut)},50);const Zt=document.getElementById("chat-toggle"),Gt=document.getElementById("chat-panel"),de=document.getElementById("chat-close"),It=document.getElementById("chat-input"),ee=document.getElementById("chat-send"),Xt=document.getElementById("chat-messages"),Wt=document.getElementById("chat-badge");let _e=0;const C=document.getElementById("mb-chat-badge");function y(){var X;Gt.classList.add("open"),Zt.classList.add("open"),(X=document.getElementById("mb-chat-btn"))==null||X.classList.add("mb-active"),_e=0,Wt.textContent="",Wt.classList.remove("visible"),C&&(C.textContent="",C.classList.remove("visible")),It.focus()}function Z(){var X;Gt.classList.remove("open"),Zt.classList.remove("open"),(X=document.getElementById("mb-chat-btn"))==null||X.classList.remove("mb-active")}Zt.addEventListener("click",X=>{X.stopPropagation(),Gt.classList.contains("open")?Z():y()}),de.addEventListener("click",X=>{X.stopPropagation(),Z()}),(De=document.getElementById("mb-chat-btn"))==null||De.addEventListener("click",X=>{X.stopPropagation(),Gt.classList.contains("open")?Z():y()});function nt(){const X=It.value.trim();X&&(ce.sendChat(X),It.value="")}ee.addEventListener("click",X=>{X.stopPropagation(),nt()}),It.addEventListener("keydown",X=>{X.key==="Enter"&&nt()}),Gt.addEventListener("click",X=>X.stopPropagation());function st({from:X,username:xt,text:Et,ts:jt}){const xe=X===ce.id,He=new Date(jt).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),we=document.createElement("div");if(we.className="chat-msg",we.innerHTML=`
          <div class="chat-msg-meta">
            <span class="chat-msg-name${xe?" self":""}">${xt}</span>
            <span class="chat-msg-time">${He}</span>
          </div>
          <div class="chat-msg-body">${Et.replace(/</g,"&lt;")}</div>
        `,Xt.appendChild(we),Xt.scrollTop=Xt.scrollHeight,!Gt.classList.contains("open")&&!xe){_e++;const On=_e>9?"9+":String(_e);Wt.textContent=On,Wt.classList.add("visible"),C&&(C.textContent=On,C.classList.add("visible"))}}function it(X){const xt=document.createElement("div");xt.className="chat-system",xt.textContent=X,Xt.appendChild(xt),Xt.scrollTop=Xt.scrollHeight}const Lt=new Map;ce.addEventListener("chat",X=>st(X.detail)),ce.addEventListener("peer:join",X=>{Lt.set(X.detail.peerId,X.detail.username),it(`${X.detail.username} joined`)}),ce.addEventListener("peer:leave",X=>{const xt=Lt.get(X.detail.peerId)??"Someone";Lt.delete(X.detail.peerId),it(`${xt} left`)});const pt=new tx,mt=new nx,Yt=new Qv(E);pt.createReality(Yt),mt.setNode(E,ks.PUBLIC),(se=document.getElementById("nm-open-btn"))==null||se.addEventListener("click",X=>{X.stopPropagation(),jh(pt,mt,E)}),(ln=document.getElementById("leave-room-btn"))==null||ln.addEventListener("click",()=>{ce.stop(),history.replaceState(null,"",window.location.pathname+window.location.search),window.location.reload()});const rt=document.getElementById("invite-modal"),Tt=document.getElementById("invite-lock-input"),Kt=document.getElementById("invite-link-box"),Ut=document.getElementById("invite-link-text"),vt=document.getElementById("invite-room-name"),Dt=document.getElementById("invite-generate-btn"),kt=document.getElementById("invite-copy-btn"),ve=document.getElementById("invite-close-btn");let N="";const Mt=()=>{vt.textContent=`Room: ${ce.roomName}`,Tt.value="",Kt.style.display="none",kt.style.display="none",Dt.style.display="",Dt.textContent="Generate link",rt.style.display="flex",setTimeout(()=>Tt.focus(),50)};(cn=document.getElementById("invite-btn"))==null||cn.addEventListener("click",X=>{X.stopPropagation(),Mt()}),ve==null||ve.addEventListener("click",()=>{rt.style.display="none"}),rt==null||rt.addEventListener("click",X=>{X.target===rt&&(rt.style.display="none")}),Dt==null||Dt.addEventListener("click",async()=>{Dt.textContent="Generating…",Dt.disabled=!0;try{const{link:X}=await rc({roomId:ce.roomName,lockCode:Tt.value.trim(),node:ce.nodeUrl??void 0});N=X,Ut.textContent=X,Kt.style.display="block",kt.style.display="",Dt.style.display="none",navigator.clipboard.writeText(X).catch(()=>{})}catch(X){console.error("[invite] link generation failed",X),Dt.textContent="Generate link"}finally{Dt.disabled=!1}}),kt==null||kt.addEventListener("click",async()=>{try{await navigator.clipboard.writeText(N);const X=kt.textContent;kt.textContent="✅ Copied!",setTimeout(()=>{kt.textContent=X},2e3)}catch{prompt("Copy this link:",N)}}),Ut==null||Ut.addEventListener("click",()=>kt==null?void 0:kt.click()),Tt==null||Tt.addEventListener("keydown",X=>{X.key==="Enter"&&(Dt==null||Dt.click())}),(Un=document.getElementById("mb-avatar-btn"))==null||Un.addEventListener("click",()=>{var X;return(X=document.getElementById("avatar-btn"))==null?void 0:X.click()}),(hs=document.getElementById("mb-nm-btn"))==null||hs.addEventListener("click",X=>{X.stopPropagation(),jh(pt,mt,E)}),(Sr=document.getElementById("mb-voice-btn"))==null||Sr.addEventListener("click",X=>{X.stopPropagation(),$==null||$.click()}),(Er=document.getElementById("mb-status-btn"))==null||Er.addEventListener("click",X=>{X.stopPropagation(),V==null||V.click()}),K.onStateChange(({active:X,muted:xt}={})=>{const Et=document.getElementById("mb-voice-btn");Et&&(X?xt?(Et.innerHTML="🔇",Et.className="mb-btn mb-voice-active",Et.style.color="#ff6b6b"):(Et.innerHTML="🎙",Et.className="mb-btn mb-voice-active",Et.style.color=""):(Et.innerHTML="🎙",Et.className="mb-btn"))});const Q=document.getElementById("screen-hint"),tt=document.getElementById("screen-hint-name");let ct=null,Ot=null;document.addEventListener("keydown",X=>{if(X.code==="KeyE"&&ct&&!x()&&w(ct),X.code==="KeyF"&&Ot){const xt=Ot.def.id,Et=xt==="main-left"||xt==="main-right",jt=ni(Et?"main-left":xt);Et&&ni("main-right"),ie(Ot.def.label,jt)}});function ie(X,xt){let Et=document.getElementById("door-action-hint");Et||(Et=document.createElement("div"),Et.id="door-action-hint",Et.style.cssText=`
            position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);
            background:rgba(0,0,0,0.7);border:1px solid rgba(255,255,255,0.2);
            padding:10px 22px;border-radius:20px;font-size:0.9rem;color:#fff;
            pointer-events:none;z-index:13;opacity:0;transition:opacity 0.2s;
          `,document.body.appendChild(Et)),Et.textContent=`${X} ${xt?"opened":"closed"}`,Et.style.opacity="1",clearTimeout(Et._t),Et._t=setTimeout(()=>{Et.style.opacity="0"},1500)}const ae=new Set;setInterval(()=>{var He;if(x())return;const X=B.getPosition();let xt=null,Et=4;O.forEach(we=>{const On=X.x-we.position.x,S=X.z-we.position.z,z=Math.sqrt(On*On+S*S);z<Et&&(Et=z,xt=we)}),ct=xt,Q&&(Q.style.display=xt?"flex":"none",xt&&tt&&(tt.textContent=xt.label)),vo.forEach(we=>{const On=X.x-we.hinge.x,S=X.z-we.hinge.z,z=Math.sqrt(On*On+S*S),G=we.id;z<2.2&&!Fs(G)?(ni(G),ae.add(G),G==="main-left"&&(Fs("main-right")||ni("main-right"),ae.add("main-right")),G==="main-right"&&(Fs("main-left")||ni("main-left"),ae.add("main-left"))):z>3.5&&ae.has(G)&&Fs(G)&&(ni(G),ae.delete(G),G==="main-left"&&(Fs("main-right")&&ni("main-right"),ae.delete("main-right")),G==="main-right"&&(Fs("main-left")&&ni("main-left"),ae.delete("main-left")))});const jt=ju(X,2.8);Ot=jt;const xe=document.getElementById("door-proximity-hint");if(xe)if(jt&&!xt){const we=(He=jt.state)!=null&&He.open?"Close":"Open";xe.style.display="flex",xe.querySelector("#door-hint-name").textContent=`${we} ${jt.def.label}`}else xe.style.display="none"},150)})}})();function Lx(s){let t=0;for(let e=0;e<s.length;e++)t=t*31+s.charCodeAt(e)|0;return Math.abs(t)%cs.length}function ru(s,t){var n;const e=(n=s==null?void 0:s.querySelector)==null?void 0:n.call(s,"#online-count");e&&(e.textContent=`● ${t} aboard`)}const ou={OUTSIDE:{color:"#88cc66",desc:"Outside the building"},LOBBY:{color:"#ffffff",desc:"Reception & Entrance"},OPS:{color:"#ffaa44",desc:"Operations & Technical Support"},FUN:{color:"#44ffaa",desc:"Chill, Social & Games"},DESIGN:{color:"#ff6ba0",desc:"UI/UX, Design & 3D"},ENGINEERING:{color:"#44aaff",desc:"Development & Engineering"},"":{color:"#ffffff",desc:""}};function Ix(s){const t=document.getElementById("zone-name"),e=document.getElementById("zone-desc"),n=ou[s]||ou[""];t&&(t.textContent=s,t.style.color=n.color),e&&(e.textContent=n.desc),document.querySelectorAll(".map-zone").forEach(i=>{i.classList.toggle("active",i.dataset.zone===s)})}
