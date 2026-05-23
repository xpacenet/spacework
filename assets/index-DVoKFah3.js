var bf=Object.defineProperty;var ml=i=>{throw TypeError(i)};var Tf=(i,e,t)=>e in i?bf(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var Kt=(i,e,t)=>Tf(i,typeof e!="symbol"?e+"":e,t),ga=(i,e,t)=>e.has(i)||ml("Cannot "+t);var oe=(i,e,t)=>(ga(i,e,"read from private field"),t?t.call(i):e.get(i)),Je=(i,e,t)=>e.has(i)?ml("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(i):e.set(i,t),vt=(i,e,t,n)=>(ga(i,e,"write to private field"),n?n.call(i,t):e.set(i,t),t),tt=(i,e,t)=>(ga(i,e,"access private method"),t);var en=(i,e,t,n)=>({set _(s){vt(i,e,s,t)},get _(){return oe(i,e,n)}});(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Fc="165",Af=0,gl=1,Rf=2,Iu=1,Du=2,Yn=3,Ei=0,jt=1,rn=2,_i=0,Os=1,_l=2,vl=3,xl=4,Cf=5,Hi=100,Pf=101,Lf=102,If=103,Df=104,Nf=200,Uf=201,Of=202,Ff=203,hc=204,uc=205,Bf=206,zf=207,kf=208,Hf=209,Gf=210,Vf=211,Wf=212,Xf=213,Zf=214,Yf=0,qf=1,$f=2,Go=3,Kf=4,Jf=5,jf=6,Qf=7,Nu=0,ep=1,tp=2,vi=0,np=1,ip=2,sp=3,Uu=4,rp=5,op=6,ap=7,Ou=300,qs=301,$s=302,dc=303,fc=304,ia=306,pc=1e3,Wi=1001,mc=1002,dn=1003,cp=1004,ro=1005,xn=1006,_a=1007,Xi=1008,wi=1009,lp=1010,hp=1011,Vo=1012,Fu=1013,Ks=1014,gi=1015,sa=1016,Bu=1017,zu=1018,Js=1020,up=35902,dp=1021,fp=1022,In=1023,pp=1024,mp=1025,Fs=1026,js=1027,gp=1028,ku=1029,_p=1030,Hu=1031,Gu=1033,va=33776,xa=33777,ya=33778,Sa=33779,yl=35840,Sl=35841,Ml=35842,El=35843,wl=36196,bl=37492,Tl=37496,Al=37808,Rl=37809,Cl=37810,Pl=37811,Ll=37812,Il=37813,Dl=37814,Nl=37815,Ul=37816,Ol=37817,Fl=37818,Bl=37819,zl=37820,kl=37821,Ma=36492,Hl=36494,Gl=36495,vp=36283,Vl=36284,Wl=36285,Xl=36286,xp=3200,yp=3201,Vu=0,Sp=1,fi="",Cn="srgb",Ri="srgb-linear",Bc="display-p3",ra="display-p3-linear",Wo="linear",dt="srgb",Xo="rec709",Zo="p3",es=7680,Zl=519,Mp=512,Ep=513,wp=514,Wu=515,bp=516,Tp=517,Ap=518,Rp=519,gc=35044,Yl="300 es",jn=2e3,Yo=2001;class nr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Ht=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ea=Math.PI/180,_c=180/Math.PI;function xi(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ht[i&255]+Ht[i>>8&255]+Ht[i>>16&255]+Ht[i>>24&255]+"-"+Ht[e&255]+Ht[e>>8&255]+"-"+Ht[e>>16&15|64]+Ht[e>>24&255]+"-"+Ht[t&63|128]+Ht[t>>8&255]+"-"+Ht[t>>16&255]+Ht[t>>24&255]+Ht[n&255]+Ht[n>>8&255]+Ht[n>>16&255]+Ht[n>>24&255]).toLowerCase()}function zt(i,e,t){return Math.max(e,Math.min(t,i))}function Cp(i,e){return(i%e+e)%e}function wa(i,e,t){return(1-t)*i+t*e}function Ln(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ht(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Se{constructor(e=0,t=0){Se.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(zt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class qe{constructor(e,t,n,s,r,o,a,c,l){qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l)}set(e,t,n,s,r,o,a,c,l){const h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],v=s[0],m=s[3],p=s[6],w=s[1],x=s[4],y=s[7],L=s[2],C=s[5],E=s[8];return r[0]=o*v+a*w+c*L,r[3]=o*m+a*x+c*C,r[6]=o*p+a*y+c*E,r[1]=l*v+h*w+u*L,r[4]=l*m+h*x+u*C,r[7]=l*p+h*y+u*E,r[2]=d*v+f*w+g*L,r[5]=d*m+f*x+g*C,r[8]=d*p+f*y+g*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,d=a*c-h*r,f=l*r-o*c,g=t*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=u*v,e[1]=(s*l-h*n)*v,e[2]=(a*n-s*o)*v,e[3]=d*v,e[4]=(h*t-s*c)*v,e[5]=(s*r-a*t)*v,e[6]=f*v,e[7]=(n*c-l*t)*v,e[8]=(o*t-n*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ba.makeScale(e,t)),this}rotate(e){return this.premultiply(ba.makeRotation(-e)),this}translate(e,t){return this.premultiply(ba.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ba=new qe;function Xu(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function qo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Pp(){const i=qo("canvas");return i.style.display="block",i}const ql={};function zc(i){i in ql||(ql[i]=!0,console.warn(i))}function Lp(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const $l=new qe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Kl=new qe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),oo={[Ri]:{transfer:Wo,primaries:Xo,toReference:i=>i,fromReference:i=>i},[Cn]:{transfer:dt,primaries:Xo,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[ra]:{transfer:Wo,primaries:Zo,toReference:i=>i.applyMatrix3(Kl),fromReference:i=>i.applyMatrix3($l)},[Bc]:{transfer:dt,primaries:Zo,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Kl),fromReference:i=>i.applyMatrix3($l).convertLinearToSRGB()}},Ip=new Set([Ri,ra]),at={enabled:!0,_workingColorSpace:Ri,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Ip.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=oo[e].toReference,s=oo[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return oo[i].primaries},getTransfer:function(i){return i===fi?Wo:oo[i].transfer}};function Bs(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ta(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ts;class Dp{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ts===void 0&&(ts=qo("canvas")),ts.width=e.width,ts.height=e.height;const n=ts.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ts}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=qo("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Bs(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Bs(t[n]/255)*255):t[n]=Bs(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Np=0;class Zu{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Np++}),this.uuid=xi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Aa(s[o].image)):r.push(Aa(s[o]))}else r=Aa(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Aa(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Dp.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Up=0;class qt extends nr{constructor(e=qt.DEFAULT_IMAGE,t=qt.DEFAULT_MAPPING,n=Wi,s=Wi,r=xn,o=Xi,a=In,c=wi,l=qt.DEFAULT_ANISOTROPY,h=fi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Up++}),this.uuid=xi(),this.name="",this.source=new Zu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Se(0,0),this.repeat=new Se(1,1),this.center=new Se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ou)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case pc:e.x=e.x-Math.floor(e.x);break;case Wi:e.x=e.x<0?0:1;break;case mc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case pc:e.y=e.y-Math.floor(e.y);break;case Wi:e.y=e.y<0?0:1;break;case mc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}qt.DEFAULT_IMAGE=null;qt.DEFAULT_MAPPING=Ou;qt.DEFAULT_ANISOTROPY=1;class _t{constructor(e=0,t=0,n=0,s=1){_t.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],g=c[9],v=c[2],m=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(l+1)/2,y=(f+1)/2,L=(p+1)/2,C=(h+d)/4,E=(u+v)/4,D=(g+m)/4;return x>y&&x>L?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=C/n,r=E/n):y>L?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=C/s,r=D/s):L<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(L),n=E/r,s=D/r),this.set(n,s,r,t),this}let w=Math.sqrt((m-g)*(m-g)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(w)<.001&&(w=1),this.x=(m-g)/w,this.y=(u-v)/w,this.z=(d-h)/w,this.w=Math.acos((l+f+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Op extends nr{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new _t(0,0,e,t),this.scissorTest=!1,this.viewport=new _t(0,0,e,t);const s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:xn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new qt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Zu(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class qi extends Op{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Yu extends qt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=dn,this.minFilter=dn,this.wrapR=Wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Fp extends qt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=dn,this.minFilter=dn,this.wrapR=Wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class jr{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3];const d=r[o+0],f=r[o+1],g=r[o+2],v=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=v;return}if(u!==v||c!==d||l!==f||h!==g){let m=1-a;const p=c*d+l*f+h*g+u*v,w=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const L=Math.sqrt(x),C=Math.atan2(L,p*w);m=Math.sin(m*C)/L,a=Math.sin(a*C)/L}const y=a*w;if(c=c*m+d*y,l=l*m+f*y,h=h*m+g*y,u=u*m+v*y,m===1-a){const L=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=L,l*=L,h*=L,u*=L}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+h*u+c*f-l*d,e[t+1]=c*g+h*d+l*u-a*f,e[t+2]=l*g+h*f+a*d-c*u,e[t+3]=h*g-a*u-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),d=c(n/2),f=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"YZX":this._x=d*h*u+l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u-d*f*g;break;case"XZY":this._x=d*h*u-l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(zt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,t=0,n=0){U.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Jl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Jl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*n),h=2*(a*t-r*s),u=2*(r*n-o*t);return this.x=t+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ra.copy(this).projectOnVector(e),this.sub(Ra)}reflect(e){return this.sub(Ra.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(zt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ra=new U,Jl=new jr;class Qr{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(mn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(mn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=mn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,mn):mn.fromBufferAttribute(r,o),mn.applyMatrix4(e.matrixWorld),this.expandByPoint(mn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ao.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ao.copy(n.boundingBox)),ao.applyMatrix4(e.matrixWorld),this.union(ao)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,mn),mn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ar),co.subVectors(this.max,ar),ns.subVectors(e.a,ar),is.subVectors(e.b,ar),ss.subVectors(e.c,ar),ni.subVectors(is,ns),ii.subVectors(ss,is),Li.subVectors(ns,ss);let t=[0,-ni.z,ni.y,0,-ii.z,ii.y,0,-Li.z,Li.y,ni.z,0,-ni.x,ii.z,0,-ii.x,Li.z,0,-Li.x,-ni.y,ni.x,0,-ii.y,ii.x,0,-Li.y,Li.x,0];return!Ca(t,ns,is,ss,co)||(t=[1,0,0,0,1,0,0,0,1],!Ca(t,ns,is,ss,co))?!1:(lo.crossVectors(ni,ii),t=[lo.x,lo.y,lo.z],Ca(t,ns,is,ss,co))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,mn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(mn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(zn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const zn=[new U,new U,new U,new U,new U,new U,new U,new U],mn=new U,ao=new Qr,ns=new U,is=new U,ss=new U,ni=new U,ii=new U,Li=new U,ar=new U,co=new U,lo=new U,Ii=new U;function Ca(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Ii.fromArray(i,r);const a=s.x*Math.abs(Ii.x)+s.y*Math.abs(Ii.y)+s.z*Math.abs(Ii.z),c=e.dot(Ii),l=t.dot(Ii),h=n.dot(Ii);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const Bp=new Qr,cr=new U,Pa=new U;class kc{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Bp.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;cr.subVectors(e,this.center);const t=cr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(cr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Pa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(cr.copy(e.center).add(Pa)),this.expandByPoint(cr.copy(e.center).sub(Pa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const kn=new U,La=new U,ho=new U,si=new U,Ia=new U,uo=new U,Da=new U;class qu{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,kn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=kn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(kn.copy(this.origin).addScaledVector(this.direction,t),kn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){La.copy(e).add(t).multiplyScalar(.5),ho.copy(t).sub(e).normalize(),si.copy(this.origin).sub(La);const r=e.distanceTo(t)*.5,o=-this.direction.dot(ho),a=si.dot(this.direction),c=-si.dot(ho),l=si.lengthSq(),h=Math.abs(1-o*o);let u,d,f,g;if(h>0)if(u=o*c-a,d=o*a-c,g=r*h,u>=0)if(d>=-g)if(d<=g){const v=1/h;u*=v,d*=v,f=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(La).addScaledVector(ho,d),f}intersectSphere(e,t){kn.subVectors(e.center,this.origin);const n=kn.dot(this.direction),s=kn.dot(kn)-n*n,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,kn)!==null}intersectTriangle(e,t,n,s,r){Ia.subVectors(t,e),uo.subVectors(n,e),Da.crossVectors(Ia,uo);let o=this.direction.dot(Da),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;si.subVectors(this.origin,e);const c=a*this.direction.dot(uo.crossVectors(si,uo));if(c<0)return null;const l=a*this.direction.dot(Ia.cross(si));if(l<0||c+l>o)return null;const h=-a*si.dot(Da);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pt{constructor(e,t,n,s,r,o,a,c,l,h,u,d,f,g,v,m){pt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l,h,u,d,f,g,v,m)}set(e,t,n,s,r,o,a,c,l,h,u,d,f,g,v,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/rs.setFromMatrixColumn(e,0).length(),r=1/rs.setFromMatrixColumn(e,1).length(),o=1/rs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const d=o*h,f=o*u,g=a*h,v=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=f+g*l,t[5]=d-v*l,t[9]=-a*c,t[2]=v-d*l,t[6]=g+f*l,t[10]=o*c}else if(e.order==="YXZ"){const d=c*h,f=c*u,g=l*h,v=l*u;t[0]=d+v*a,t[4]=g*a-f,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-g,t[6]=v+d*a,t[10]=o*c}else if(e.order==="ZXY"){const d=c*h,f=c*u,g=l*h,v=l*u;t[0]=d-v*a,t[4]=-o*u,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*h,t[9]=v-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const d=o*h,f=o*u,g=a*h,v=a*u;t[0]=c*h,t[4]=g*l-f,t[8]=d*l+v,t[1]=c*u,t[5]=v*l+d,t[9]=f*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const d=o*c,f=o*l,g=a*c,v=a*l;t[0]=c*h,t[4]=v-d*u,t[8]=g*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=f*u+g,t[10]=d-v*u}else if(e.order==="XZY"){const d=o*c,f=o*l,g=a*c,v=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+v,t[5]=o*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=a*h,t[10]=v*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(zp,e,kp)}lookAt(e,t,n){const s=this.elements;return tn.subVectors(e,t),tn.lengthSq()===0&&(tn.z=1),tn.normalize(),ri.crossVectors(n,tn),ri.lengthSq()===0&&(Math.abs(n.z)===1?tn.x+=1e-4:tn.z+=1e-4,tn.normalize(),ri.crossVectors(n,tn)),ri.normalize(),fo.crossVectors(tn,ri),s[0]=ri.x,s[4]=fo.x,s[8]=tn.x,s[1]=ri.y,s[5]=fo.y,s[9]=tn.y,s[2]=ri.z,s[6]=fo.z,s[10]=tn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],v=n[6],m=n[10],p=n[14],w=n[3],x=n[7],y=n[11],L=n[15],C=s[0],E=s[4],D=s[8],T=s[12],S=s[1],I=s[5],Z=s[9],W=s[13],Y=s[2],re=s[6],ie=s[10],ce=s[14],se=s[3],ve=s[7],G=s[11],K=s[15];return r[0]=o*C+a*S+c*Y+l*se,r[4]=o*E+a*I+c*re+l*ve,r[8]=o*D+a*Z+c*ie+l*G,r[12]=o*T+a*W+c*ce+l*K,r[1]=h*C+u*S+d*Y+f*se,r[5]=h*E+u*I+d*re+f*ve,r[9]=h*D+u*Z+d*ie+f*G,r[13]=h*T+u*W+d*ce+f*K,r[2]=g*C+v*S+m*Y+p*se,r[6]=g*E+v*I+m*re+p*ve,r[10]=g*D+v*Z+m*ie+p*G,r[14]=g*T+v*W+m*ce+p*K,r[3]=w*C+x*S+y*Y+L*se,r[7]=w*E+x*I+y*re+L*ve,r[11]=w*D+x*Z+y*ie+L*G,r[15]=w*T+x*W+y*ce+L*K,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],v=e[7],m=e[11],p=e[15];return g*(+r*c*u-s*l*u-r*a*d+n*l*d+s*a*f-n*c*f)+v*(+t*c*f-t*l*d+r*o*d-s*o*f+s*l*h-r*c*h)+m*(+t*l*u-t*a*f-r*o*u+n*o*f+r*a*h-n*l*h)+p*(-s*a*h-t*c*u+t*a*d+s*o*u-n*o*d+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],v=e[13],m=e[14],p=e[15],w=u*m*l-v*d*l+v*c*f-a*m*f-u*c*p+a*d*p,x=g*d*l-h*m*l-g*c*f+o*m*f+h*c*p-o*d*p,y=h*v*l-g*u*l+g*a*f-o*v*f-h*a*p+o*u*p,L=g*u*c-h*v*c-g*a*d+o*v*d+h*a*m-o*u*m,C=t*w+n*x+s*y+r*L;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/C;return e[0]=w*E,e[1]=(v*d*r-u*m*r-v*s*f+n*m*f+u*s*p-n*d*p)*E,e[2]=(a*m*r-v*c*r+v*s*l-n*m*l-a*s*p+n*c*p)*E,e[3]=(u*c*r-a*d*r-u*s*l+n*d*l+a*s*f-n*c*f)*E,e[4]=x*E,e[5]=(h*m*r-g*d*r+g*s*f-t*m*f-h*s*p+t*d*p)*E,e[6]=(g*c*r-o*m*r-g*s*l+t*m*l+o*s*p-t*c*p)*E,e[7]=(o*d*r-h*c*r+h*s*l-t*d*l-o*s*f+t*c*f)*E,e[8]=y*E,e[9]=(g*u*r-h*v*r-g*n*f+t*v*f+h*n*p-t*u*p)*E,e[10]=(o*v*r-g*a*r+g*n*l-t*v*l-o*n*p+t*a*p)*E,e[11]=(h*a*r-o*u*r-h*n*l+t*u*l+o*n*f-t*a*f)*E,e[12]=L*E,e[13]=(h*v*s-g*u*s+g*n*d-t*v*d-h*n*m+t*u*m)*E,e[14]=(g*a*s-o*v*s-g*n*c+t*v*c+o*n*m-t*a*m)*E,e[15]=(o*u*s-h*a*s+h*n*c-t*u*c-o*n*d+t*a*d)*E,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,u=a+a,d=r*l,f=r*h,g=r*u,v=o*h,m=o*u,p=a*u,w=c*l,x=c*h,y=c*u,L=n.x,C=n.y,E=n.z;return s[0]=(1-(v+p))*L,s[1]=(f+y)*L,s[2]=(g-x)*L,s[3]=0,s[4]=(f-y)*C,s[5]=(1-(d+p))*C,s[6]=(m+w)*C,s[7]=0,s[8]=(g+x)*E,s[9]=(m-w)*E,s[10]=(1-(d+v))*E,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=rs.set(s[0],s[1],s[2]).length();const o=rs.set(s[4],s[5],s[6]).length(),a=rs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],gn.copy(this);const l=1/r,h=1/o,u=1/a;return gn.elements[0]*=l,gn.elements[1]*=l,gn.elements[2]*=l,gn.elements[4]*=h,gn.elements[5]*=h,gn.elements[6]*=h,gn.elements[8]*=u,gn.elements[9]*=u,gn.elements[10]*=u,t.setFromRotationMatrix(gn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=jn){const c=this.elements,l=2*r/(t-e),h=2*r/(n-s),u=(t+e)/(t-e),d=(n+s)/(n-s);let f,g;if(a===jn)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Yo)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=jn){const c=this.elements,l=1/(t-e),h=1/(n-s),u=1/(o-r),d=(t+e)*l,f=(n+s)*h;let g,v;if(a===jn)g=(o+r)*u,v=-2*u;else if(a===Yo)g=r*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=v,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const rs=new U,gn=new pt,zp=new U(0,0,0),kp=new U(1,1,1),ri=new U,fo=new U,tn=new U,jl=new pt,Ql=new jr;class Nn{constructor(e=0,t=0,n=0,s=Nn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(zt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-zt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(zt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-zt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(zt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-zt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return jl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(jl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ql.setFromEuler(this),this.setFromQuaternion(Ql,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Nn.DEFAULT_ORDER="XYZ";class Hc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Hp=0;const eh=new U,os=new jr,Hn=new pt,po=new U,lr=new U,Gp=new U,Vp=new jr,th=new U(1,0,0),nh=new U(0,1,0),ih=new U(0,0,1),sh={type:"added"},Wp={type:"removed"},as={type:"childadded",child:null},Na={type:"childremoved",child:null};class Ft extends nr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Hp++}),this.uuid=xi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ft.DEFAULT_UP.clone();const e=new U,t=new Nn,n=new jr,s=new U(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new pt},normalMatrix:{value:new qe}}),this.matrix=new pt,this.matrixWorld=new pt,this.matrixAutoUpdate=Ft.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Hc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return os.setFromAxisAngle(e,t),this.quaternion.multiply(os),this}rotateOnWorldAxis(e,t){return os.setFromAxisAngle(e,t),this.quaternion.premultiply(os),this}rotateX(e){return this.rotateOnAxis(th,e)}rotateY(e){return this.rotateOnAxis(nh,e)}rotateZ(e){return this.rotateOnAxis(ih,e)}translateOnAxis(e,t){return eh.copy(e).applyQuaternion(this.quaternion),this.position.add(eh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(th,e)}translateY(e){return this.translateOnAxis(nh,e)}translateZ(e){return this.translateOnAxis(ih,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Hn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?po.copy(e):po.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),lr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Hn.lookAt(lr,po,this.up):Hn.lookAt(po,lr,this.up),this.quaternion.setFromRotationMatrix(Hn),s&&(Hn.extractRotation(s.matrixWorld),os.setFromRotationMatrix(Hn),this.quaternion.premultiply(os.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(sh),as.child=e,this.dispatchEvent(as),as.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Wp),Na.child=e,this.dispatchEvent(Na),Na.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Hn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Hn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Hn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(sh),as.child=e,this.dispatchEvent(as),as.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lr,e,Gp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lr,Vp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++){const a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}Ft.DEFAULT_UP=new U(0,1,0);Ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const _n=new U,Gn=new U,Ua=new U,Vn=new U,cs=new U,ls=new U,rh=new U,Oa=new U,Fa=new U,Ba=new U;class yn{constructor(e=new U,t=new U,n=new U){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),_n.subVectors(e,t),s.cross(_n);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){_n.subVectors(s,t),Gn.subVectors(n,t),Ua.subVectors(e,t);const o=_n.dot(_n),a=_n.dot(Gn),c=_n.dot(Ua),l=Gn.dot(Gn),h=Gn.dot(Ua),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(l*c-a*h)*d,g=(o*h-a*c)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Vn)===null?!1:Vn.x>=0&&Vn.y>=0&&Vn.x+Vn.y<=1}static getInterpolation(e,t,n,s,r,o,a,c){return this.getBarycoord(e,t,n,s,Vn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Vn.x),c.addScaledVector(o,Vn.y),c.addScaledVector(a,Vn.z),c)}static isFrontFacing(e,t,n,s){return _n.subVectors(n,t),Gn.subVectors(e,t),_n.cross(Gn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return _n.subVectors(this.c,this.b),Gn.subVectors(this.a,this.b),_n.cross(Gn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return yn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return yn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return yn.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return yn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return yn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let o,a;cs.subVectors(s,n),ls.subVectors(r,n),Oa.subVectors(e,n);const c=cs.dot(Oa),l=ls.dot(Oa);if(c<=0&&l<=0)return t.copy(n);Fa.subVectors(e,s);const h=cs.dot(Fa),u=ls.dot(Fa);if(h>=0&&u<=h)return t.copy(s);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(cs,o);Ba.subVectors(e,r);const f=cs.dot(Ba),g=ls.dot(Ba);if(g>=0&&f<=g)return t.copy(r);const v=f*l-c*g;if(v<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(ls,a);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return rh.subVectors(r,s),a=(u-h)/(u-h+(f-g)),t.copy(s).addScaledVector(rh,a);const p=1/(m+v+d);return o=v*p,a=d*p,t.copy(n).addScaledVector(cs,o).addScaledVector(ls,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const $u={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},oi={h:0,s:0,l:0},mo={h:0,s:0,l:0};function za(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class je{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Cn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,at.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=at.workingColorSpace){return this.r=e,this.g=t,this.b=n,at.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=at.workingColorSpace){if(e=Cp(e,1),t=zt(t,0,1),n=zt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=za(o,r,e+1/3),this.g=za(o,r,e),this.b=za(o,r,e-1/3)}return at.toWorkingColorSpace(this,s),this}setStyle(e,t=Cn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Cn){const n=$u[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Bs(e.r),this.g=Bs(e.g),this.b=Bs(e.b),this}copyLinearToSRGB(e){return this.r=Ta(e.r),this.g=Ta(e.g),this.b=Ta(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Cn){return at.fromWorkingColorSpace(Gt.copy(this),e),Math.round(zt(Gt.r*255,0,255))*65536+Math.round(zt(Gt.g*255,0,255))*256+Math.round(zt(Gt.b*255,0,255))}getHexString(e=Cn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=at.workingColorSpace){at.fromWorkingColorSpace(Gt.copy(this),t);const n=Gt.r,s=Gt.g,r=Gt.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=at.workingColorSpace){return at.fromWorkingColorSpace(Gt.copy(this),t),e.r=Gt.r,e.g=Gt.g,e.b=Gt.b,e}getStyle(e=Cn){at.fromWorkingColorSpace(Gt.copy(this),e);const t=Gt.r,n=Gt.g,s=Gt.b;return e!==Cn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(oi),this.setHSL(oi.h+e,oi.s+t,oi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(oi),e.getHSL(mo);const n=wa(oi.h,mo.h,t),s=wa(oi.s,mo.s,t),r=wa(oi.l,mo.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Gt=new je;je.NAMES=$u;let Xp=0;class ir extends nr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Xp++}),this.uuid=xi(),this.name="",this.type="Material",this.blending=Os,this.side=Ei,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=hc,this.blendDst=uc,this.blendEquation=Hi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new je(0,0,0),this.blendAlpha=0,this.depthFunc=Go,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Zl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=es,this.stencilZFail=es,this.stencilZPass=es,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Os&&(n.blending=this.blending),this.side!==Ei&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==hc&&(n.blendSrc=this.blendSrc),this.blendDst!==uc&&(n.blendDst=this.blendDst),this.blendEquation!==Hi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Go&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Zl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==es&&(n.stencilFail=this.stencilFail),this.stencilZFail!==es&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==es&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Tr extends ir{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Nn,this.combine=Nu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const At=new U,go=new Se;class Mn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=gc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=gi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return zc("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)go.fromBufferAttribute(this,t),go.applyMatrix3(e),this.setXY(t,go.x,go.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyMatrix3(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyMatrix4(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyNormalMatrix(e),this.setXYZ(t,At.x,At.y,At.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.transformDirection(e),this.setXYZ(t,At.x,At.y,At.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ln(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ht(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ln(t,this.array)),t}setX(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ln(t,this.array)),t}setY(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ln(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ln(t,this.array)),t}setW(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),s=ht(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),s=ht(s,this.array),r=ht(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==gc&&(e.usage=this.usage),e}}class Ku extends Mn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Ju extends Mn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class bt extends Mn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Zp=0;const cn=new pt,ka=new Ft,hs=new U,nn=new Qr,hr=new Qr,Nt=new U;class on extends nr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Zp++}),this.uuid=xi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Xu(e)?Ju:Ku)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new qe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return cn.makeRotationFromQuaternion(e),this.applyMatrix4(cn),this}rotateX(e){return cn.makeRotationX(e),this.applyMatrix4(cn),this}rotateY(e){return cn.makeRotationY(e),this.applyMatrix4(cn),this}rotateZ(e){return cn.makeRotationZ(e),this.applyMatrix4(cn),this}translate(e,t,n){return cn.makeTranslation(e,t,n),this.applyMatrix4(cn),this}scale(e,t,n){return cn.makeScale(e,t,n),this.applyMatrix4(cn),this}lookAt(e){return ka.lookAt(e),ka.updateMatrix(),this.applyMatrix4(ka.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(hs).negate(),this.translate(hs.x,hs.y,hs.z),this}setFromPoints(e){const t=[];for(let n=0,s=e.length;n<s;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new bt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];nn.setFromBufferAttribute(r),this.morphTargetsRelative?(Nt.addVectors(this.boundingBox.min,nn.min),this.boundingBox.expandByPoint(Nt),Nt.addVectors(this.boundingBox.max,nn.max),this.boundingBox.expandByPoint(Nt)):(this.boundingBox.expandByPoint(nn.min),this.boundingBox.expandByPoint(nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new kc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){const n=this.boundingSphere.center;if(nn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];hr.setFromBufferAttribute(a),this.morphTargetsRelative?(Nt.addVectors(nn.min,hr.min),nn.expandByPoint(Nt),Nt.addVectors(nn.max,hr.max),nn.expandByPoint(Nt)):(nn.expandByPoint(hr.min),nn.expandByPoint(hr.max))}nn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Nt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Nt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Nt.fromBufferAttribute(a,l),c&&(hs.fromBufferAttribute(e,l),Nt.add(hs)),s=Math.max(s,n.distanceToSquared(Nt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Mn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let D=0;D<n.count;D++)a[D]=new U,c[D]=new U;const l=new U,h=new U,u=new U,d=new Se,f=new Se,g=new Se,v=new U,m=new U;function p(D,T,S){l.fromBufferAttribute(n,D),h.fromBufferAttribute(n,T),u.fromBufferAttribute(n,S),d.fromBufferAttribute(r,D),f.fromBufferAttribute(r,T),g.fromBufferAttribute(r,S),h.sub(l),u.sub(l),f.sub(d),g.sub(d);const I=1/(f.x*g.y-g.x*f.y);isFinite(I)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(I),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(I),a[D].add(v),a[T].add(v),a[S].add(v),c[D].add(m),c[T].add(m),c[S].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let D=0,T=w.length;D<T;++D){const S=w[D],I=S.start,Z=S.count;for(let W=I,Y=I+Z;W<Y;W+=3)p(e.getX(W+0),e.getX(W+1),e.getX(W+2))}const x=new U,y=new U,L=new U,C=new U;function E(D){L.fromBufferAttribute(s,D),C.copy(L);const T=a[D];x.copy(T),x.sub(L.multiplyScalar(L.dot(T))).normalize(),y.crossVectors(C,T);const I=y.dot(c[D])<0?-1:1;o.setXYZW(D,x.x,x.y,x.z,I)}for(let D=0,T=w.length;D<T;++D){const S=w[D],I=S.start,Z=S.count;for(let W=I,Y=I+Z;W<Y;W+=3)E(e.getX(W+0)),E(e.getX(W+1)),E(e.getX(W+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Mn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new U,r=new U,o=new U,a=new U,c=new U,l=new U,h=new U,u=new U;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),v=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Nt.fromBufferAttribute(e,t),Nt.normalize(),e.setXYZ(t,Nt.x,Nt.y,Nt.z)}toNonIndexed(){function e(a,c){const l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h);let f=0,g=0;for(let v=0,m=c.length;v<m;v++){a.isInterleavedBufferAttribute?f=c[v]*a.data.stride+a.offset:f=c[v]*h;for(let p=0;p<h;p++)d[g++]=l[f++]}return new Mn(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new on,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=e(c,n);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){const d=l[h],f=e(d,n);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const f=l[u];h.push(f.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(t))}const r=e.morphAttributes;for(const l in r){const h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const oh=new pt,Di=new qu,_o=new kc,ah=new U,us=new U,ds=new U,fs=new U,Ha=new U,vo=new U,xo=new Se,yo=new Se,So=new Se,ch=new U,lh=new U,hh=new U,Mo=new U,Eo=new U;class be extends Ft{constructor(e=new on,t=new Tr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){vo.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],u=r[c];h!==0&&(Ha.fromBufferAttribute(u,e),o?vo.addScaledVector(Ha,h):vo.addScaledVector(Ha.sub(t),h))}t.add(vo)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),_o.copy(n.boundingSphere),_o.applyMatrix4(r),Di.copy(e.ray).recast(e.near),!(_o.containsPoint(Di.origin)===!1&&(Di.intersectSphere(_o,ah)===null||Di.origin.distanceToSquared(ah)>(e.far-e.near)**2))&&(oh.copy(r).invert(),Di.copy(e.ray).applyMatrix4(oh),!(n.boundingBox!==null&&Di.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Di)))}_computeIntersections(e,t,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const m=d[g],p=o[m.materialIndex],w=Math.max(m.start,f.start),x=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let y=w,L=x;y<L;y+=3){const C=a.getX(y),E=a.getX(y+1),D=a.getX(y+2);s=wo(this,p,e,n,l,h,u,C,E,D),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const w=a.getX(m),x=a.getX(m+1),y=a.getX(m+2);s=wo(this,o,e,n,l,h,u,w,x,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const m=d[g],p=o[m.materialIndex],w=Math.max(m.start,f.start),x=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let y=w,L=x;y<L;y+=3){const C=y,E=y+1,D=y+2;s=wo(this,p,e,n,l,h,u,C,E,D),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),v=Math.min(c.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const w=m,x=m+1,y=m+2;s=wo(this,o,e,n,l,h,u,w,x,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function Yp(i,e,t,n,s,r,o,a){let c;if(e.side===jt?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,e.side===Ei,a),c===null)return null;Eo.copy(a),Eo.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Eo);return l<t.near||l>t.far?null:{distance:l,point:Eo.clone(),object:i}}function wo(i,e,t,n,s,r,o,a,c,l){i.getVertexPosition(a,us),i.getVertexPosition(c,ds),i.getVertexPosition(l,fs);const h=Yp(i,e,t,n,us,ds,fs,Mo);if(h){s&&(xo.fromBufferAttribute(s,a),yo.fromBufferAttribute(s,c),So.fromBufferAttribute(s,l),h.uv=yn.getInterpolation(Mo,us,ds,fs,xo,yo,So,new Se)),r&&(xo.fromBufferAttribute(r,a),yo.fromBufferAttribute(r,c),So.fromBufferAttribute(r,l),h.uv1=yn.getInterpolation(Mo,us,ds,fs,xo,yo,So,new Se)),o&&(ch.fromBufferAttribute(o,a),lh.fromBufferAttribute(o,c),hh.fromBufferAttribute(o,l),h.normal=yn.getInterpolation(Mo,us,ds,fs,ch,lh,hh,new U),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:c,c:l,normal:new U,materialIndex:0};yn.getNormal(us,ds,fs,u.normal),h.face=u}return h}class $e extends on{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new bt(l,3)),this.setAttribute("normal",new bt(h,3)),this.setAttribute("uv",new bt(u,2));function g(v,m,p,w,x,y,L,C,E,D,T){const S=y/E,I=L/D,Z=y/2,W=L/2,Y=C/2,re=E+1,ie=D+1;let ce=0,se=0;const ve=new U;for(let G=0;G<ie;G++){const K=G*I-W;for(let z=0;z<re;z++){const le=z*S-Z;ve[v]=le*w,ve[m]=K*x,ve[p]=Y,l.push(ve.x,ve.y,ve.z),ve[v]=0,ve[m]=0,ve[p]=C>0?1:-1,h.push(ve.x,ve.y,ve.z),u.push(z/E),u.push(1-G/D),ce+=1}}for(let G=0;G<D;G++)for(let K=0;K<E;K++){const z=d+K+re*G,le=d+K+re*(G+1),F=d+(K+1)+re*(G+1),q=d+(K+1)+re*G;c.push(z,le,q),c.push(le,F,q),se+=6}a.addGroup(f,se,T),f+=se,d+=ce}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $e(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Qs(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Yt(i){const e={};for(let t=0;t<i.length;t++){const n=Qs(i[t]);for(const s in n)e[s]=n[s]}return e}function qp(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function ju(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:at.workingColorSpace}const $p={clone:Qs,merge:Yt};var Kp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Jp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class bi extends ir{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Kp,this.fragmentShader=Jp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Qs(e.uniforms),this.uniformsGroups=qp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Qu extends Ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pt,this.projectionMatrix=new pt,this.projectionMatrixInverse=new pt,this.coordinateSystem=jn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ai=new U,uh=new Se,dh=new Se;class sn extends Qu{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=_c*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ea*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return _c*2*Math.atan(Math.tan(Ea*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ai.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ai.x,ai.y).multiplyScalar(-e/ai.z),ai.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ai.x,ai.y).multiplyScalar(-e/ai.z)}getViewSize(e,t){return this.getViewBounds(e,uh,dh),t.subVectors(dh,uh)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ea*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ps=-90,ms=1;class jp extends Ft{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new sn(ps,ms,e,t);s.layers=this.layers,this.add(s);const r=new sn(ps,ms,e,t);r.layers=this.layers,this.add(r);const o=new sn(ps,ms,e,t);o.layers=this.layers,this.add(o);const a=new sn(ps,ms,e,t);a.layers=this.layers,this.add(a);const c=new sn(ps,ms,e,t);c.layers=this.layers,this.add(c);const l=new sn(ps,ms,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,c]=t;for(const l of t)this.remove(l);if(e===jn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Yo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class ed extends qt{constructor(e,t,n,s,r,o,a,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:qs,super(e,t,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Qp extends qi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new ed(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:xn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new $e(5,5,5),r=new bi({name:"CubemapFromEquirect",uniforms:Qs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:jt,blending:_i});r.uniforms.tEquirect.value=t;const o=new be(s,r),a=t.minFilter;return t.minFilter===Xi&&(t.minFilter=xn),new jp(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}}const Ga=new U,em=new U,tm=new qe;class di{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Ga.subVectors(n,t).cross(em.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ga),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||tm.getNormalMatrix(e),s=this.coplanarPoint(Ga).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ni=new kc,bo=new U;class Gc{constructor(e=new di,t=new di,n=new di,s=new di,r=new di,o=new di){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=jn){const n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],d=s[7],f=s[8],g=s[9],v=s[10],m=s[11],p=s[12],w=s[13],x=s[14],y=s[15];if(n[0].setComponents(c-r,d-l,m-f,y-p).normalize(),n[1].setComponents(c+r,d+l,m+f,y+p).normalize(),n[2].setComponents(c+o,d+h,m+g,y+w).normalize(),n[3].setComponents(c-o,d-h,m-g,y-w).normalize(),n[4].setComponents(c-a,d-u,m-v,y-x).normalize(),t===jn)n[5].setComponents(c+a,d+u,m+v,y+x).normalize();else if(t===Yo)n[5].setComponents(a,u,v,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ni.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ni.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ni)}intersectsSprite(e){return Ni.center.set(0,0,0),Ni.radius=.7071067811865476,Ni.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ni)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(bo.x=s.normal.x>0?e.max.x:e.min.x,bo.y=s.normal.y>0?e.max.y:e.min.y,bo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(bo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function td(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function nm(i){const e=new WeakMap;function t(a,c){const l=a.array,h=a.usage,u=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){const h=c.array,u=c._updateRange,d=c.updateRanges;if(i.bindBuffer(l,a),u.count===-1&&d.length===0&&i.bufferSubData(l,0,h),d.length!==0){for(let f=0,g=d.length;f<g;f++){const v=d[f];i.bufferSubData(l,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}c.clearUpdateRanges()}u.count!==-1&&(i.bufferSubData(l,u.offset*h.BYTES_PER_ELEMENT,h,u.offset,u.count),u.count=-1),c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}class ei extends on{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=e/a,d=t/c,f=[],g=[],v=[],m=[];for(let p=0;p<h;p++){const w=p*d-o;for(let x=0;x<l;x++){const y=x*u-r;g.push(y,-w,0),v.push(0,0,1),m.push(x/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let w=0;w<a;w++){const x=w+l*p,y=w+l*(p+1),L=w+1+l*(p+1),C=w+1+l*p;f.push(x,y,C),f.push(y,L,C)}this.setIndex(f),this.setAttribute("position",new bt(g,3)),this.setAttribute("normal",new bt(v,3)),this.setAttribute("uv",new bt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ei(e.width,e.height,e.widthSegments,e.heightSegments)}}var im=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,sm=`#ifdef USE_ALPHAHASH
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
#endif`,rm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,om=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,am=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,cm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,lm=`#ifdef USE_AOMAP
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
#endif`,hm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,um=`#ifdef USE_BATCHING
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
#endif`,dm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,fm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,pm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,mm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,gm=`#ifdef USE_IRIDESCENCE
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
#endif`,_m=`#ifdef USE_BUMPMAP
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
#endif`,vm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,xm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ym=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Sm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Mm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Em=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,wm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,bm=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Tm=`#define PI 3.141592653589793
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
} // validated`,Am=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Rm=`vec3 transformedNormal = objectNormal;
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
#endif`,Cm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Pm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Lm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Im=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Dm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Nm=`
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
}`,Um=`#ifdef USE_ENVMAP
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
#endif`,Om=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Fm=`#ifdef USE_ENVMAP
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
#endif`,Bm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,zm=`#ifdef USE_ENVMAP
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
#endif`,km=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Hm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Gm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Vm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Wm=`#ifdef USE_GRADIENTMAP
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
}`,Xm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Zm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ym=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,qm=`uniform bool receiveShadow;
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
#endif`,$m=`#ifdef USE_ENVMAP
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
#endif`,Km=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Jm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,jm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Qm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,eg=`PhysicalMaterial material;
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
#endif`,tg=`struct PhysicalMaterial {
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
}`,ng=`
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
#endif`,ig=`#if defined( RE_IndirectDiffuse )
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
#endif`,sg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,rg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,og=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ag=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cg=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,lg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,hg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ug=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,dg=`#if defined( USE_POINTS_UV )
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
#endif`,fg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,pg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,mg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,gg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_g=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vg=`#ifdef USE_MORPHTARGETS
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
#endif`,xg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Sg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Mg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Eg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,bg=`#ifdef USE_NORMALMAP
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
#endif`,Tg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ag=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Rg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Cg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Pg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Lg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ig=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Dg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ng=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ug=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Og=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Fg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Bg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,zg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,kg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Hg=`float getShadowMask() {
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
}`,Gg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Vg=`#ifdef USE_SKINNING
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
#endif`,Wg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Xg=`#ifdef USE_SKINNING
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
#endif`,Zg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Yg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,qg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$g=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Kg=`#ifdef USE_TRANSMISSION
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
#endif`,Jg=`#ifdef USE_TRANSMISSION
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
#endif`,jg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,e0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,t0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const n0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,i0=`uniform sampler2D t2D;
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
}`,s0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,r0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,o0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,a0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,c0=`#include <common>
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
}`,l0=`#if DEPTH_PACKING == 3200
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
}`,h0=`#define DISTANCE
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
}`,u0=`#define DISTANCE
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
}`,d0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,f0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,p0=`uniform float scale;
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
}`,m0=`uniform vec3 diffuse;
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
}`,g0=`#include <common>
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
}`,_0=`uniform vec3 diffuse;
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
}`,v0=`#define LAMBERT
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
}`,x0=`#define LAMBERT
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
}`,y0=`#define MATCAP
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
}`,S0=`#define MATCAP
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
}`,M0=`#define NORMAL
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
}`,E0=`#define NORMAL
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
}`,w0=`#define PHONG
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
}`,b0=`#define PHONG
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
}`,T0=`#define STANDARD
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
}`,A0=`#define STANDARD
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
}`,R0=`#define TOON
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
}`,C0=`#define TOON
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
}`,P0=`uniform float size;
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
}`,L0=`uniform vec3 diffuse;
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
}`,I0=`#include <common>
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
}`,D0=`uniform vec3 color;
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
}`,N0=`uniform float rotation;
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
}`,U0=`uniform vec3 diffuse;
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
}`,Ye={alphahash_fragment:im,alphahash_pars_fragment:sm,alphamap_fragment:rm,alphamap_pars_fragment:om,alphatest_fragment:am,alphatest_pars_fragment:cm,aomap_fragment:lm,aomap_pars_fragment:hm,batching_pars_vertex:um,batching_vertex:dm,begin_vertex:fm,beginnormal_vertex:pm,bsdfs:mm,iridescence_fragment:gm,bumpmap_pars_fragment:_m,clipping_planes_fragment:vm,clipping_planes_pars_fragment:xm,clipping_planes_pars_vertex:ym,clipping_planes_vertex:Sm,color_fragment:Mm,color_pars_fragment:Em,color_pars_vertex:wm,color_vertex:bm,common:Tm,cube_uv_reflection_fragment:Am,defaultnormal_vertex:Rm,displacementmap_pars_vertex:Cm,displacementmap_vertex:Pm,emissivemap_fragment:Lm,emissivemap_pars_fragment:Im,colorspace_fragment:Dm,colorspace_pars_fragment:Nm,envmap_fragment:Um,envmap_common_pars_fragment:Om,envmap_pars_fragment:Fm,envmap_pars_vertex:Bm,envmap_physical_pars_fragment:$m,envmap_vertex:zm,fog_vertex:km,fog_pars_vertex:Hm,fog_fragment:Gm,fog_pars_fragment:Vm,gradientmap_pars_fragment:Wm,lightmap_pars_fragment:Xm,lights_lambert_fragment:Zm,lights_lambert_pars_fragment:Ym,lights_pars_begin:qm,lights_toon_fragment:Km,lights_toon_pars_fragment:Jm,lights_phong_fragment:jm,lights_phong_pars_fragment:Qm,lights_physical_fragment:eg,lights_physical_pars_fragment:tg,lights_fragment_begin:ng,lights_fragment_maps:ig,lights_fragment_end:sg,logdepthbuf_fragment:rg,logdepthbuf_pars_fragment:og,logdepthbuf_pars_vertex:ag,logdepthbuf_vertex:cg,map_fragment:lg,map_pars_fragment:hg,map_particle_fragment:ug,map_particle_pars_fragment:dg,metalnessmap_fragment:fg,metalnessmap_pars_fragment:pg,morphinstance_vertex:mg,morphcolor_vertex:gg,morphnormal_vertex:_g,morphtarget_pars_vertex:vg,morphtarget_vertex:xg,normal_fragment_begin:yg,normal_fragment_maps:Sg,normal_pars_fragment:Mg,normal_pars_vertex:Eg,normal_vertex:wg,normalmap_pars_fragment:bg,clearcoat_normal_fragment_begin:Tg,clearcoat_normal_fragment_maps:Ag,clearcoat_pars_fragment:Rg,iridescence_pars_fragment:Cg,opaque_fragment:Pg,packing:Lg,premultiplied_alpha_fragment:Ig,project_vertex:Dg,dithering_fragment:Ng,dithering_pars_fragment:Ug,roughnessmap_fragment:Og,roughnessmap_pars_fragment:Fg,shadowmap_pars_fragment:Bg,shadowmap_pars_vertex:zg,shadowmap_vertex:kg,shadowmask_pars_fragment:Hg,skinbase_vertex:Gg,skinning_pars_vertex:Vg,skinning_vertex:Wg,skinnormal_vertex:Xg,specularmap_fragment:Zg,specularmap_pars_fragment:Yg,tonemapping_fragment:qg,tonemapping_pars_fragment:$g,transmission_fragment:Kg,transmission_pars_fragment:Jg,uv_pars_fragment:jg,uv_pars_vertex:Qg,uv_vertex:e0,worldpos_vertex:t0,background_vert:n0,background_frag:i0,backgroundCube_vert:s0,backgroundCube_frag:r0,cube_vert:o0,cube_frag:a0,depth_vert:c0,depth_frag:l0,distanceRGBA_vert:h0,distanceRGBA_frag:u0,equirect_vert:d0,equirect_frag:f0,linedashed_vert:p0,linedashed_frag:m0,meshbasic_vert:g0,meshbasic_frag:_0,meshlambert_vert:v0,meshlambert_frag:x0,meshmatcap_vert:y0,meshmatcap_frag:S0,meshnormal_vert:M0,meshnormal_frag:E0,meshphong_vert:w0,meshphong_frag:b0,meshphysical_vert:T0,meshphysical_frag:A0,meshtoon_vert:R0,meshtoon_frag:C0,points_vert:P0,points_frag:L0,shadow_vert:I0,shadow_frag:D0,sprite_vert:N0,sprite_frag:U0},xe={common:{diffuse:{value:new je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qe}},envmap:{envMap:{value:null},envMapRotation:{value:new qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qe},normalScale:{value:new Se(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0},uvTransform:{value:new qe}},sprite:{diffuse:{value:new je(16777215)},opacity:{value:1},center:{value:new Se(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}}},Pn={basic:{uniforms:Yt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.fog]),vertexShader:Ye.meshbasic_vert,fragmentShader:Ye.meshbasic_frag},lambert:{uniforms:Yt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new je(0)}}]),vertexShader:Ye.meshlambert_vert,fragmentShader:Ye.meshlambert_frag},phong:{uniforms:Yt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new je(0)},specular:{value:new je(1118481)},shininess:{value:30}}]),vertexShader:Ye.meshphong_vert,fragmentShader:Ye.meshphong_frag},standard:{uniforms:Yt([xe.common,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.roughnessmap,xe.metalnessmap,xe.fog,xe.lights,{emissive:{value:new je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag},toon:{uniforms:Yt([xe.common,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.gradientmap,xe.fog,xe.lights,{emissive:{value:new je(0)}}]),vertexShader:Ye.meshtoon_vert,fragmentShader:Ye.meshtoon_frag},matcap:{uniforms:Yt([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,{matcap:{value:null}}]),vertexShader:Ye.meshmatcap_vert,fragmentShader:Ye.meshmatcap_frag},points:{uniforms:Yt([xe.points,xe.fog]),vertexShader:Ye.points_vert,fragmentShader:Ye.points_frag},dashed:{uniforms:Yt([xe.common,xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ye.linedashed_vert,fragmentShader:Ye.linedashed_frag},depth:{uniforms:Yt([xe.common,xe.displacementmap]),vertexShader:Ye.depth_vert,fragmentShader:Ye.depth_frag},normal:{uniforms:Yt([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,{opacity:{value:1}}]),vertexShader:Ye.meshnormal_vert,fragmentShader:Ye.meshnormal_frag},sprite:{uniforms:Yt([xe.sprite,xe.fog]),vertexShader:Ye.sprite_vert,fragmentShader:Ye.sprite_frag},background:{uniforms:{uvTransform:{value:new qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ye.background_vert,fragmentShader:Ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qe}},vertexShader:Ye.backgroundCube_vert,fragmentShader:Ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ye.cube_vert,fragmentShader:Ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ye.equirect_vert,fragmentShader:Ye.equirect_frag},distanceRGBA:{uniforms:Yt([xe.common,xe.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ye.distanceRGBA_vert,fragmentShader:Ye.distanceRGBA_frag},shadow:{uniforms:Yt([xe.lights,xe.fog,{color:{value:new je(0)},opacity:{value:1}}]),vertexShader:Ye.shadow_vert,fragmentShader:Ye.shadow_frag}};Pn.physical={uniforms:Yt([Pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qe},clearcoatNormalScale:{value:new Se(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qe},sheen:{value:0},sheenColor:{value:new je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qe},transmissionSamplerSize:{value:new Se},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qe},attenuationDistance:{value:0},attenuationColor:{value:new je(0)},specularColor:{value:new je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qe},anisotropyVector:{value:new Se},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qe}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag};const To={r:0,b:0,g:0},Ui=new Nn,O0=new pt;function F0(i,e,t,n,s,r,o){const a=new je(0);let c=r===!0?0:1,l,h,u=null,d=0,f=null;function g(w){let x=w.isScene===!0?w.background:null;return x&&x.isTexture&&(x=(w.backgroundBlurriness>0?t:e).get(x)),x}function v(w){let x=!1;const y=g(w);y===null?p(a,c):y&&y.isColor&&(p(y,1),x=!0);const L=i.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(w,x){const y=g(x);y&&(y.isCubeTexture||y.mapping===ia)?(h===void 0&&(h=new be(new $e(1,1,1),new bi({name:"BackgroundCubeMaterial",uniforms:Qs(Pn.backgroundCube.uniforms),vertexShader:Pn.backgroundCube.vertexShader,fragmentShader:Pn.backgroundCube.fragmentShader,side:jt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,C,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Ui.copy(x.backgroundRotation),Ui.x*=-1,Ui.y*=-1,Ui.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Ui.y*=-1,Ui.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(O0.makeRotationFromEuler(Ui)),h.material.toneMapped=at.getTransfer(y.colorSpace)!==dt,(u!==y||d!==y.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=y,d=y.version,f=i.toneMapping),h.layers.enableAll(),w.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new be(new ei(2,2),new bi({name:"BackgroundMaterial",uniforms:Qs(Pn.background.uniforms),vertexShader:Pn.background.vertexShader,fragmentShader:Pn.background.fragmentShader,side:Ei,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=at.getTransfer(y.colorSpace)!==dt,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||d!==y.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=y,d=y.version,f=i.toneMapping),l.layers.enableAll(),w.unshift(l,l.geometry,l.material,0,0,null))}function p(w,x){w.getRGB(To,ju(i)),n.buffers.color.setClear(To.r,To.g,To.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(w,x=1){a.set(w),c=x,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(w){c=w,p(a,c)},render:v,addToRenderList:m}}function B0(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,o=!1;function a(S,I,Z,W,Y){let re=!1;const ie=u(W,Z,I);r!==ie&&(r=ie,l(r.object)),re=f(S,W,Z,Y),re&&g(S,W,Z,Y),Y!==null&&e.update(Y,i.ELEMENT_ARRAY_BUFFER),(re||o)&&(o=!1,y(S,I,Z,W),Y!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function c(){return i.createVertexArray()}function l(S){return i.bindVertexArray(S)}function h(S){return i.deleteVertexArray(S)}function u(S,I,Z){const W=Z.wireframe===!0;let Y=n[S.id];Y===void 0&&(Y={},n[S.id]=Y);let re=Y[I.id];re===void 0&&(re={},Y[I.id]=re);let ie=re[W];return ie===void 0&&(ie=d(c()),re[W]=ie),ie}function d(S){const I=[],Z=[],W=[];for(let Y=0;Y<t;Y++)I[Y]=0,Z[Y]=0,W[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:Z,attributeDivisors:W,object:S,attributes:{},index:null}}function f(S,I,Z,W){const Y=r.attributes,re=I.attributes;let ie=0;const ce=Z.getAttributes();for(const se in ce)if(ce[se].location>=0){const G=Y[se];let K=re[se];if(K===void 0&&(se==="instanceMatrix"&&S.instanceMatrix&&(K=S.instanceMatrix),se==="instanceColor"&&S.instanceColor&&(K=S.instanceColor)),G===void 0||G.attribute!==K||K&&G.data!==K.data)return!0;ie++}return r.attributesNum!==ie||r.index!==W}function g(S,I,Z,W){const Y={},re=I.attributes;let ie=0;const ce=Z.getAttributes();for(const se in ce)if(ce[se].location>=0){let G=re[se];G===void 0&&(se==="instanceMatrix"&&S.instanceMatrix&&(G=S.instanceMatrix),se==="instanceColor"&&S.instanceColor&&(G=S.instanceColor));const K={};K.attribute=G,G&&G.data&&(K.data=G.data),Y[se]=K,ie++}r.attributes=Y,r.attributesNum=ie,r.index=W}function v(){const S=r.newAttributes;for(let I=0,Z=S.length;I<Z;I++)S[I]=0}function m(S){p(S,0)}function p(S,I){const Z=r.newAttributes,W=r.enabledAttributes,Y=r.attributeDivisors;Z[S]=1,W[S]===0&&(i.enableVertexAttribArray(S),W[S]=1),Y[S]!==I&&(i.vertexAttribDivisor(S,I),Y[S]=I)}function w(){const S=r.newAttributes,I=r.enabledAttributes;for(let Z=0,W=I.length;Z<W;Z++)I[Z]!==S[Z]&&(i.disableVertexAttribArray(Z),I[Z]=0)}function x(S,I,Z,W,Y,re,ie){ie===!0?i.vertexAttribIPointer(S,I,Z,Y,re):i.vertexAttribPointer(S,I,Z,W,Y,re)}function y(S,I,Z,W){v();const Y=W.attributes,re=Z.getAttributes(),ie=I.defaultAttributeValues;for(const ce in re){const se=re[ce];if(se.location>=0){let ve=Y[ce];if(ve===void 0&&(ce==="instanceMatrix"&&S.instanceMatrix&&(ve=S.instanceMatrix),ce==="instanceColor"&&S.instanceColor&&(ve=S.instanceColor)),ve!==void 0){const G=ve.normalized,K=ve.itemSize,z=e.get(ve);if(z===void 0)continue;const le=z.buffer,F=z.type,q=z.bytesPerElement,ne=F===i.INT||F===i.UNSIGNED_INT||ve.gpuType===Fu;if(ve.isInterleavedBufferAttribute){const ae=ve.data,me=ae.stride,Ee=ve.offset;if(ae.isInstancedInterleavedBuffer){for(let Ne=0;Ne<se.locationSize;Ne++)p(se.location+Ne,ae.meshPerAttribute);S.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let Ne=0;Ne<se.locationSize;Ne++)m(se.location+Ne);i.bindBuffer(i.ARRAY_BUFFER,le);for(let Ne=0;Ne<se.locationSize;Ne++)x(se.location+Ne,K/se.locationSize,F,G,me*q,(Ee+K/se.locationSize*Ne)*q,ne)}else{if(ve.isInstancedBufferAttribute){for(let ae=0;ae<se.locationSize;ae++)p(se.location+ae,ve.meshPerAttribute);S.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let ae=0;ae<se.locationSize;ae++)m(se.location+ae);i.bindBuffer(i.ARRAY_BUFFER,le);for(let ae=0;ae<se.locationSize;ae++)x(se.location+ae,K/se.locationSize,F,G,K*q,K/se.locationSize*ae*q,ne)}}else if(ie!==void 0){const G=ie[ce];if(G!==void 0)switch(G.length){case 2:i.vertexAttrib2fv(se.location,G);break;case 3:i.vertexAttrib3fv(se.location,G);break;case 4:i.vertexAttrib4fv(se.location,G);break;default:i.vertexAttrib1fv(se.location,G)}}}}w()}function L(){D();for(const S in n){const I=n[S];for(const Z in I){const W=I[Z];for(const Y in W)h(W[Y].object),delete W[Y];delete I[Z]}delete n[S]}}function C(S){if(n[S.id]===void 0)return;const I=n[S.id];for(const Z in I){const W=I[Z];for(const Y in W)h(W[Y].object),delete W[Y];delete I[Z]}delete n[S.id]}function E(S){for(const I in n){const Z=n[I];if(Z[S.id]===void 0)continue;const W=Z[S.id];for(const Y in W)h(W[Y].object),delete W[Y];delete Z[S.id]}}function D(){T(),o=!0,r!==s&&(r=s,l(r.object))}function T(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:D,resetDefaultState:T,dispose:L,releaseStatesOfGeometry:C,releaseStatesOfProgram:E,initAttributes:v,enableAttribute:m,disableUnusedAttributes:w}}function z0(i,e,t){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),t.update(h,n,1)}function o(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),t.update(h,n,u))}function a(l,h,u){if(u===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let f=0;f<u;f++)this.render(l[f],h[f]);else{d.multiDrawArraysWEBGL(n,l,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];t.update(f,n,1)}}function c(l,h,u,d){if(u===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)o(l[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let g=0;for(let v=0;v<u;v++)g+=h[v];for(let v=0;v<d.length;v++)t.update(g,n,d[v])}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function k0(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(C){return!(C!==In&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const E=C===sa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==wi&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==gi&&!E)}function c(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=t.logarithmicDepthBuffer===!0,d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),v=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),p=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),y=f>0,L=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:f,maxTextureSize:g,maxCubemapSize:v,maxAttributes:m,maxVertexUniforms:p,maxVaryings:w,maxFragmentUniforms:x,vertexTextures:y,maxSamples:L}}function H0(i){const e=this;let t=null,n=0,s=!1,r=!1;const o=new di,a=new qe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{const w=r?0:n,x=w*4;let y=p.clippingState||null;c.value=y,y=h(g,d,x,f);for(let L=0;L!==x;++L)y[L]=t[L];p.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=w}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,g){const v=u!==null?u.length:0;let m=null;if(v!==0){if(m=c.value,g!==!0||m===null){const p=f+v*4,w=d.matrixWorldInverse;a.getNormalMatrix(w),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,y=f;x!==v;++x,y+=4)o.copy(u[x]).applyMatrix4(w,a),o.normal.toArray(m,y),m[y+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function G0(i){let e=new WeakMap;function t(o,a){return a===dc?o.mapping=qs:a===fc&&(o.mapping=$s),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===dc||a===fc)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Qp(c.height);return l.fromEquirectangularTexture(i,o),e.set(o,l),o.addEventListener("dispose",s),t(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class nd extends Qu{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ps=4,fh=[.125,.215,.35,.446,.526,.582],Gi=20,Va=new nd,ph=new je;let Wa=null,Xa=0,Za=0,Ya=!1;const zi=(1+Math.sqrt(5))/2,gs=1/zi,mh=[new U(-zi,gs,0),new U(zi,gs,0),new U(-gs,0,zi),new U(gs,0,zi),new U(0,zi,-gs),new U(0,zi,gs),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)];class gh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Wa=this._renderer.getRenderTarget(),Xa=this._renderer.getActiveCubeFace(),Za=this._renderer.getActiveMipmapLevel(),Ya=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=vh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Wa,Xa,Za),this._renderer.xr.enabled=Ya,e.scissorTest=!1,Ao(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===qs||e.mapping===$s?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Wa=this._renderer.getRenderTarget(),Xa=this._renderer.getActiveCubeFace(),Za=this._renderer.getActiveMipmapLevel(),Ya=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:xn,minFilter:xn,generateMipmaps:!1,type:sa,format:In,colorSpace:Ri,depthBuffer:!1},s=_h(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_h(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=V0(r)),this._blurMaterial=W0(r,e,t)}return s}_compileMaterial(e){const t=new be(this._lodPlanes[0],e);this._renderer.compile(t,Va)}_sceneToCubeUV(e,t,n,s){const a=new sn(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(ph),h.toneMapping=vi,h.autoClear=!1;const f=new Tr({name:"PMREM.Background",side:jt,depthWrite:!1,depthTest:!1}),g=new be(new $e,f);let v=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,v=!0):(f.color.copy(ph),v=!0);for(let p=0;p<6;p++){const w=p%3;w===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):w===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));const x=this._cubeSize;Ao(s,w*x,p>2?x:0,x,x),h.setRenderTarget(s),v&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===qs||e.mapping===$s;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=xh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=vh());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new be(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;Ao(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Va)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=mh[(s-r-1)%mh.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new be(this._lodPlanes[s],l),d=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Gi-1),v=r/g,m=isFinite(r)?1+Math.floor(h*v):Gi;m>Gi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Gi}`);const p=[];let w=0;for(let E=0;E<Gi;++E){const D=E/v,T=Math.exp(-D*D/2);p.push(T),E===0?w+=T:E<m&&(w+=2*T)}for(let E=0;E<p.length;E++)p[E]=p[E]/w;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-n;const y=this._sizeLods[s],L=3*y*(s>x-Ps?s-x+Ps:0),C=4*(this._cubeSize-y);Ao(t,L,C,3*y,2*y),c.setRenderTarget(t),c.render(u,Va)}}function V0(i){const e=[],t=[],n=[];let s=i;const r=i-Ps+1+fh.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let c=1/a;o>i-Ps?c=fh[o-i+Ps-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,v=3,m=2,p=1,w=new Float32Array(v*g*f),x=new Float32Array(m*g*f),y=new Float32Array(p*g*f);for(let C=0;C<f;C++){const E=C%3*2/3-1,D=C>2?0:-1,T=[E,D,0,E+2/3,D,0,E+2/3,D+1,0,E,D,0,E+2/3,D+1,0,E,D+1,0];w.set(T,v*g*C),x.set(d,m*g*C);const S=[C,C,C,C,C,C];y.set(S,p*g*C)}const L=new on;L.setAttribute("position",new Mn(w,v)),L.setAttribute("uv",new Mn(x,m)),L.setAttribute("faceIndex",new Mn(y,p)),e.push(L),s>Ps&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function _h(i,e,t){const n=new qi(i,e,t);return n.texture.mapping=ia,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ao(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function W0(i,e,t){const n=new Float32Array(Gi),s=new U(0,1,0);return new bi({name:"SphericalGaussianBlur",defines:{n:Gi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Vc(),fragmentShader:`

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
		`,blending:_i,depthTest:!1,depthWrite:!1})}function vh(){return new bi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Vc(),fragmentShader:`

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
		`,blending:_i,depthTest:!1,depthWrite:!1})}function xh(){return new bi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Vc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:_i,depthTest:!1,depthWrite:!1})}function Vc(){return`

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
	`}function X0(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===dc||c===fc,h=c===qs||c===$s;if(l||h){let u=e.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new gh(i)),u=l?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return l&&f&&f.height>0||h&&f&&s(f)?(t===null&&(t=new gh(i)),u=l?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Z0(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&zc("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Y0(i,e,t,n){const s={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const v=d.morphAttributes[g];for(let m=0,p=v.length;m<p;m++)e.remove(v[m])}d.removeEventListener("dispose",o),delete s[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function c(u){const d=u.attributes;for(const g in d)e.update(d[g],i.ARRAY_BUFFER);const f=u.morphAttributes;for(const g in f){const v=f[g];for(let m=0,p=v.length;m<p;m++)e.update(v[m],i.ARRAY_BUFFER)}}function l(u){const d=[],f=u.index,g=u.attributes.position;let v=0;if(f!==null){const w=f.array;v=f.version;for(let x=0,y=w.length;x<y;x+=3){const L=w[x+0],C=w[x+1],E=w[x+2];d.push(L,C,C,E,E,L)}}else if(g!==void 0){const w=g.array;v=g.version;for(let x=0,y=w.length/3-1;x<y;x+=3){const L=x+0,C=x+1,E=x+2;d.push(L,C,C,E,E,L)}}else return;const m=new(Xu(d)?Ju:Ku)(d,1);m.version=v;const p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function q0(i,e,t){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,f){i.drawElements(n,f,r,d*o),t.update(f,n,1)}function l(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*o,g),t.update(f,n,g))}function h(d,f,g){if(g===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let m=0;m<g;m++)this.render(d[m]/o,f[m]);else{v.multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}}function u(d,f,g,v){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/o,f[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,v,0,g);let p=0;for(let w=0;w<g;w++)p+=f[w];for(let w=0;w<v.length;w++)t.update(p,n,v[w])}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function $0(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function K0(i,e,t){const n=new WeakMap,s=new _t;function r(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let S=function(){D.dispose(),n.delete(a),a.removeEventListener("dispose",S)};var f=S;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],w=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let y=0;g===!0&&(y=1),v===!0&&(y=2),m===!0&&(y=3);let L=a.attributes.position.count*y,C=1;L>e.maxTextureSize&&(C=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const E=new Float32Array(L*C*4*u),D=new Yu(E,L,C,u);D.type=gi,D.needsUpdate=!0;const T=y*4;for(let I=0;I<u;I++){const Z=p[I],W=w[I],Y=x[I],re=L*C*4*I;for(let ie=0;ie<Z.count;ie++){const ce=ie*T;g===!0&&(s.fromBufferAttribute(Z,ie),E[re+ce+0]=s.x,E[re+ce+1]=s.y,E[re+ce+2]=s.z,E[re+ce+3]=0),v===!0&&(s.fromBufferAttribute(W,ie),E[re+ce+4]=s.x,E[re+ce+5]=s.y,E[re+ce+6]=s.z,E[re+ce+7]=0),m===!0&&(s.fromBufferAttribute(Y,ie),E[re+ce+8]=s.x,E[re+ce+9]=s.y,E[re+ce+10]=s.z,E[re+ce+11]=Y.itemSize===4?s.w:1)}}d={count:u,texture:D,size:new Se(L,C)},n.set(a,d),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const v=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",v),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function J0(i,e,t,n){let s=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=e.get(c,h);if(s.get(u)!==l&&(e.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}class id extends qt{constructor(e,t,n,s,r,o,a,c,l,h=Fs){if(h!==Fs&&h!==js)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Fs&&(n=Ks),n===void 0&&h===js&&(n=Js),super(null,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:dn,this.minFilter=c!==void 0?c:dn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const sd=new qt,rd=new id(1,1);rd.compareFunction=Wu;const od=new Yu,ad=new Fp,cd=new ed,yh=[],Sh=[],Mh=new Float32Array(16),Eh=new Float32Array(9),wh=new Float32Array(4);function sr(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=yh[s];if(r===void 0&&(r=new Float32Array(s),yh[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Lt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function It(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function oa(i,e){let t=Sh[e];t===void 0&&(t=new Int32Array(e),Sh[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function j0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Q0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;i.uniform2fv(this.addr,e),It(t,e)}}function e_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Lt(t,e))return;i.uniform3fv(this.addr,e),It(t,e)}}function t_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;i.uniform4fv(this.addr,e),It(t,e)}}function n_(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Lt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),It(t,e)}else{if(Lt(t,n))return;wh.set(n),i.uniformMatrix2fv(this.addr,!1,wh),It(t,n)}}function i_(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Lt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),It(t,e)}else{if(Lt(t,n))return;Eh.set(n),i.uniformMatrix3fv(this.addr,!1,Eh),It(t,n)}}function s_(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Lt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),It(t,e)}else{if(Lt(t,n))return;Mh.set(n),i.uniformMatrix4fv(this.addr,!1,Mh),It(t,n)}}function r_(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function o_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;i.uniform2iv(this.addr,e),It(t,e)}}function a_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Lt(t,e))return;i.uniform3iv(this.addr,e),It(t,e)}}function c_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;i.uniform4iv(this.addr,e),It(t,e)}}function l_(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function h_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;i.uniform2uiv(this.addr,e),It(t,e)}}function u_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Lt(t,e))return;i.uniform3uiv(this.addr,e),It(t,e)}}function d_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;i.uniform4uiv(this.addr,e),It(t,e)}}function f_(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);const r=this.type===i.SAMPLER_2D_SHADOW?rd:sd;t.setTexture2D(e||r,s)}function p_(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||ad,s)}function m_(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||cd,s)}function g_(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||od,s)}function __(i){switch(i){case 5126:return j0;case 35664:return Q0;case 35665:return e_;case 35666:return t_;case 35674:return n_;case 35675:return i_;case 35676:return s_;case 5124:case 35670:return r_;case 35667:case 35671:return o_;case 35668:case 35672:return a_;case 35669:case 35673:return c_;case 5125:return l_;case 36294:return h_;case 36295:return u_;case 36296:return d_;case 35678:case 36198:case 36298:case 36306:case 35682:return f_;case 35679:case 36299:case 36307:return p_;case 35680:case 36300:case 36308:case 36293:return m_;case 36289:case 36303:case 36311:case 36292:return g_}}function v_(i,e){i.uniform1fv(this.addr,e)}function x_(i,e){const t=sr(e,this.size,2);i.uniform2fv(this.addr,t)}function y_(i,e){const t=sr(e,this.size,3);i.uniform3fv(this.addr,t)}function S_(i,e){const t=sr(e,this.size,4);i.uniform4fv(this.addr,t)}function M_(i,e){const t=sr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function E_(i,e){const t=sr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function w_(i,e){const t=sr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function b_(i,e){i.uniform1iv(this.addr,e)}function T_(i,e){i.uniform2iv(this.addr,e)}function A_(i,e){i.uniform3iv(this.addr,e)}function R_(i,e){i.uniform4iv(this.addr,e)}function C_(i,e){i.uniform1uiv(this.addr,e)}function P_(i,e){i.uniform2uiv(this.addr,e)}function L_(i,e){i.uniform3uiv(this.addr,e)}function I_(i,e){i.uniform4uiv(this.addr,e)}function D_(i,e,t){const n=this.cache,s=e.length,r=oa(t,s);Lt(n,r)||(i.uniform1iv(this.addr,r),It(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||sd,r[o])}function N_(i,e,t){const n=this.cache,s=e.length,r=oa(t,s);Lt(n,r)||(i.uniform1iv(this.addr,r),It(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||ad,r[o])}function U_(i,e,t){const n=this.cache,s=e.length,r=oa(t,s);Lt(n,r)||(i.uniform1iv(this.addr,r),It(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||cd,r[o])}function O_(i,e,t){const n=this.cache,s=e.length,r=oa(t,s);Lt(n,r)||(i.uniform1iv(this.addr,r),It(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||od,r[o])}function F_(i){switch(i){case 5126:return v_;case 35664:return x_;case 35665:return y_;case 35666:return S_;case 35674:return M_;case 35675:return E_;case 35676:return w_;case 5124:case 35670:return b_;case 35667:case 35671:return T_;case 35668:case 35672:return A_;case 35669:case 35673:return R_;case 5125:return C_;case 36294:return P_;case 36295:return L_;case 36296:return I_;case 35678:case 36198:case 36298:case 36306:case 35682:return D_;case 35679:case 36299:case 36307:return N_;case 35680:case 36300:case 36308:case 36293:return U_;case 36289:case 36303:case 36311:case 36292:return O_}}class B_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=__(t.type)}}class z_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=F_(t.type)}}class k_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],n)}}}const qa=/(\w+)(\])?(\[|\.)?/g;function bh(i,e){i.seq.push(e),i.map[e.id]=e}function H_(i,e,t){const n=i.name,s=n.length;for(qa.lastIndex=0;;){const r=qa.exec(n),o=qa.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){bh(t,l===void 0?new B_(a,i,e):new z_(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new k_(a),bh(t,u)),t=u}}}class Oo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);H_(r,o,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function Th(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const G_=37297;let V_=0;function W_(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function X_(i){const e=at.getPrimaries(at.workingColorSpace),t=at.getPrimaries(i);let n;switch(e===t?n="":e===Zo&&t===Xo?n="LinearDisplayP3ToLinearSRGB":e===Xo&&t===Zo&&(n="LinearSRGBToLinearDisplayP3"),i){case Ri:case ra:return[n,"LinearTransferOETF"];case Cn:case Bc:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Ah(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+W_(i.getShaderSource(e),o)}else return s}function Z_(i,e){const t=X_(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Y_(i,e){let t;switch(e){case np:t="Linear";break;case ip:t="Reinhard";break;case sp:t="OptimizedCineon";break;case Uu:t="ACESFilmic";break;case op:t="AgX";break;case ap:t="Neutral";break;case rp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function q_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(vr).join(`
`)}function $_(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function K_(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function vr(i){return i!==""}function Rh(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ch(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const J_=/^[ \t]*#include +<([\w\d./]+)>/gm;function vc(i){return i.replace(J_,Q_)}const j_=new Map;function Q_(i,e){let t=Ye[e];if(t===void 0){const n=j_.get(e);if(n!==void 0)t=Ye[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return vc(t)}const ev=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ph(i){return i.replace(ev,tv)}function tv(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Lh(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function nv(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Iu?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Du?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Yn&&(e="SHADOWMAP_TYPE_VSM"),e}function iv(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case qs:case $s:e="ENVMAP_TYPE_CUBE";break;case ia:e="ENVMAP_TYPE_CUBE_UV";break}return e}function sv(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case $s:e="ENVMAP_MODE_REFRACTION";break}return e}function rv(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Nu:e="ENVMAP_BLENDING_MULTIPLY";break;case ep:e="ENVMAP_BLENDING_MIX";break;case tp:e="ENVMAP_BLENDING_ADD";break}return e}function ov(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function av(i,e,t,n){const s=i.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=nv(t),l=iv(t),h=sv(t),u=rv(t),d=ov(t),f=q_(t),g=$_(r),v=s.createProgram();let m,p,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(vr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(vr).join(`
`),p.length>0&&(p+=`
`)):(m=[Lh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(vr).join(`
`),p=[Lh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==vi?"#define TONE_MAPPING":"",t.toneMapping!==vi?Ye.tonemapping_pars_fragment:"",t.toneMapping!==vi?Y_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ye.colorspace_pars_fragment,Z_("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(vr).join(`
`)),o=vc(o),o=Rh(o,t),o=Ch(o,t),a=vc(a),a=Rh(a,t),a=Ch(a,t),o=Ph(o),a=Ph(a),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Yl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Yl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=w+m+o,y=w+p+a,L=Th(s,s.VERTEX_SHADER,x),C=Th(s,s.FRAGMENT_SHADER,y);s.attachShader(v,L),s.attachShader(v,C),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function E(I){if(i.debug.checkShaderErrors){const Z=s.getProgramInfoLog(v).trim(),W=s.getShaderInfoLog(L).trim(),Y=s.getShaderInfoLog(C).trim();let re=!0,ie=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(re=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,L,C);else{const ce=Ah(s,L,"vertex"),se=Ah(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+Z+`
`+ce+`
`+se)}else Z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Z):(W===""||Y==="")&&(ie=!1);ie&&(I.diagnostics={runnable:re,programLog:Z,vertexShader:{log:W,prefix:m},fragmentShader:{log:Y,prefix:p}})}s.deleteShader(L),s.deleteShader(C),D=new Oo(s,v),T=K_(s,v)}let D;this.getUniforms=function(){return D===void 0&&E(this),D};let T;this.getAttributes=function(){return T===void 0&&E(this),T};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(v,G_)),S},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=V_++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=L,this.fragmentShader=C,this}let cv=0;class lv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new hv(e),t.set(e,n)),n}}class hv{constructor(e){this.id=cv++,this.code=e,this.usedTimes=0}}function uv(i,e,t,n,s,r,o){const a=new Hc,c=new lv,l=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(T){return l.add(T),T===0?"uv":`uv${T}`}function m(T,S,I,Z,W){const Y=Z.fog,re=W.geometry,ie=T.isMeshStandardMaterial?Z.environment:null,ce=(T.isMeshStandardMaterial?t:e).get(T.envMap||ie),se=ce&&ce.mapping===ia?ce.image.height:null,ve=g[T.type];T.precision!==null&&(f=s.getMaxPrecision(T.precision),f!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",f,"instead."));const G=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,K=G!==void 0?G.length:0;let z=0;re.morphAttributes.position!==void 0&&(z=1),re.morphAttributes.normal!==void 0&&(z=2),re.morphAttributes.color!==void 0&&(z=3);let le,F,q,ne;if(ve){const et=Pn[ve];le=et.vertexShader,F=et.fragmentShader}else le=T.vertexShader,F=T.fragmentShader,c.update(T),q=c.getVertexShaderID(T),ne=c.getFragmentShaderID(T);const ae=i.getRenderTarget(),me=W.isInstancedMesh===!0,Ee=W.isBatchedMesh===!0,Ne=!!T.map,N=!!T.matcap,He=!!ce,De=!!T.aoMap,Qe=!!T.lightMap,Re=!!T.bumpMap,Ze=!!T.normalMap,We=!!T.displacementMap,Be=!!T.emissiveMap,B=!!T.metalnessMap,M=!!T.roughnessMap,_=T.anisotropy>0,R=T.clearcoat>0,O=T.dispersion>0,V=T.iridescence>0,$=T.sheen>0,te=T.transmission>0,he=_&&!!T.anisotropyMap,de=R&&!!T.clearcoatMap,Ce=R&&!!T.clearcoatNormalMap,fe=R&&!!T.clearcoatRoughnessMap,Me=V&&!!T.iridescenceMap,Xe=V&&!!T.iridescenceThicknessMap,Te=$&&!!T.sheenColorMap,ge=$&&!!T.sheenRoughnessMap,Ue=!!T.specularMap,Ge=!!T.specularColorMap,Ke=!!T.specularIntensityMap,b=te&&!!T.transmissionMap,ee=te&&!!T.thicknessMap,k=!!T.gradientMap,j=!!T.alphaMap,ue=T.alphaTest>0,ye=!!T.alphaHash,ze=!!T.extensions;let it=vi;T.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(it=i.toneMapping);const mt={shaderID:ve,shaderType:T.type,shaderName:T.name,vertexShader:le,fragmentShader:F,defines:T.defines,customVertexShaderID:q,customFragmentShaderID:ne,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:f,batching:Ee,batchingColor:Ee&&W._colorsTexture!==null,instancing:me,instancingColor:me&&W.instanceColor!==null,instancingMorph:me&&W.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ae===null?i.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:Ri,alphaToCoverage:!!T.alphaToCoverage,map:Ne,matcap:N,envMap:He,envMapMode:He&&ce.mapping,envMapCubeUVHeight:se,aoMap:De,lightMap:Qe,bumpMap:Re,normalMap:Ze,displacementMap:d&&We,emissiveMap:Be,normalMapObjectSpace:Ze&&T.normalMapType===Sp,normalMapTangentSpace:Ze&&T.normalMapType===Vu,metalnessMap:B,roughnessMap:M,anisotropy:_,anisotropyMap:he,clearcoat:R,clearcoatMap:de,clearcoatNormalMap:Ce,clearcoatRoughnessMap:fe,dispersion:O,iridescence:V,iridescenceMap:Me,iridescenceThicknessMap:Xe,sheen:$,sheenColorMap:Te,sheenRoughnessMap:ge,specularMap:Ue,specularColorMap:Ge,specularIntensityMap:Ke,transmission:te,transmissionMap:b,thicknessMap:ee,gradientMap:k,opaque:T.transparent===!1&&T.blending===Os&&T.alphaToCoverage===!1,alphaMap:j,alphaTest:ue,alphaHash:ye,combine:T.combine,mapUv:Ne&&v(T.map.channel),aoMapUv:De&&v(T.aoMap.channel),lightMapUv:Qe&&v(T.lightMap.channel),bumpMapUv:Re&&v(T.bumpMap.channel),normalMapUv:Ze&&v(T.normalMap.channel),displacementMapUv:We&&v(T.displacementMap.channel),emissiveMapUv:Be&&v(T.emissiveMap.channel),metalnessMapUv:B&&v(T.metalnessMap.channel),roughnessMapUv:M&&v(T.roughnessMap.channel),anisotropyMapUv:he&&v(T.anisotropyMap.channel),clearcoatMapUv:de&&v(T.clearcoatMap.channel),clearcoatNormalMapUv:Ce&&v(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:fe&&v(T.clearcoatRoughnessMap.channel),iridescenceMapUv:Me&&v(T.iridescenceMap.channel),iridescenceThicknessMapUv:Xe&&v(T.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&v(T.sheenColorMap.channel),sheenRoughnessMapUv:ge&&v(T.sheenRoughnessMap.channel),specularMapUv:Ue&&v(T.specularMap.channel),specularColorMapUv:Ge&&v(T.specularColorMap.channel),specularIntensityMapUv:Ke&&v(T.specularIntensityMap.channel),transmissionMapUv:b&&v(T.transmissionMap.channel),thicknessMapUv:ee&&v(T.thicknessMap.channel),alphaMapUv:j&&v(T.alphaMap.channel),vertexTangents:!!re.attributes.tangent&&(Ze||_),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!re.attributes.uv&&(Ne||j),fog:!!Y,useFog:T.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:W.isSkinnedMesh===!0,morphTargets:re.morphAttributes.position!==void 0,morphNormals:re.morphAttributes.normal!==void 0,morphColors:re.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:z,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:it,decodeVideoTexture:Ne&&T.map.isVideoTexture===!0&&at.getTransfer(T.map.colorSpace)===dt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===rn,flipSided:T.side===jt,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:ze&&T.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:ze&&T.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return mt.vertexUv1s=l.has(1),mt.vertexUv2s=l.has(2),mt.vertexUv3s=l.has(3),l.clear(),mt}function p(T){const S=[];if(T.shaderID?S.push(T.shaderID):(S.push(T.customVertexShaderID),S.push(T.customFragmentShaderID)),T.defines!==void 0)for(const I in T.defines)S.push(I),S.push(T.defines[I]);return T.isRawShaderMaterial===!1&&(w(S,T),x(S,T),S.push(i.outputColorSpace)),S.push(T.customProgramCacheKey),S.join()}function w(T,S){T.push(S.precision),T.push(S.outputColorSpace),T.push(S.envMapMode),T.push(S.envMapCubeUVHeight),T.push(S.mapUv),T.push(S.alphaMapUv),T.push(S.lightMapUv),T.push(S.aoMapUv),T.push(S.bumpMapUv),T.push(S.normalMapUv),T.push(S.displacementMapUv),T.push(S.emissiveMapUv),T.push(S.metalnessMapUv),T.push(S.roughnessMapUv),T.push(S.anisotropyMapUv),T.push(S.clearcoatMapUv),T.push(S.clearcoatNormalMapUv),T.push(S.clearcoatRoughnessMapUv),T.push(S.iridescenceMapUv),T.push(S.iridescenceThicknessMapUv),T.push(S.sheenColorMapUv),T.push(S.sheenRoughnessMapUv),T.push(S.specularMapUv),T.push(S.specularColorMapUv),T.push(S.specularIntensityMapUv),T.push(S.transmissionMapUv),T.push(S.thicknessMapUv),T.push(S.combine),T.push(S.fogExp2),T.push(S.sizeAttenuation),T.push(S.morphTargetsCount),T.push(S.morphAttributeCount),T.push(S.numDirLights),T.push(S.numPointLights),T.push(S.numSpotLights),T.push(S.numSpotLightMaps),T.push(S.numHemiLights),T.push(S.numRectAreaLights),T.push(S.numDirLightShadows),T.push(S.numPointLightShadows),T.push(S.numSpotLightShadows),T.push(S.numSpotLightShadowsWithMaps),T.push(S.numLightProbes),T.push(S.shadowMapType),T.push(S.toneMapping),T.push(S.numClippingPlanes),T.push(S.numClipIntersection),T.push(S.depthPacking)}function x(T,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),T.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.skinning&&a.enable(4),S.morphTargets&&a.enable(5),S.morphNormals&&a.enable(6),S.morphColors&&a.enable(7),S.premultipliedAlpha&&a.enable(8),S.shadowMapEnabled&&a.enable(9),S.doubleSided&&a.enable(10),S.flipSided&&a.enable(11),S.useDepthPacking&&a.enable(12),S.dithering&&a.enable(13),S.transmission&&a.enable(14),S.sheen&&a.enable(15),S.opaque&&a.enable(16),S.pointsUvs&&a.enable(17),S.decodeVideoTexture&&a.enable(18),S.alphaToCoverage&&a.enable(19),T.push(a.mask)}function y(T){const S=g[T.type];let I;if(S){const Z=Pn[S];I=$p.clone(Z.uniforms)}else I=T.uniforms;return I}function L(T,S){let I;for(let Z=0,W=h.length;Z<W;Z++){const Y=h[Z];if(Y.cacheKey===S){I=Y,++I.usedTimes;break}}return I===void 0&&(I=new av(i,S,T,r),h.push(I)),I}function C(T){if(--T.usedTimes===0){const S=h.indexOf(T);h[S]=h[h.length-1],h.pop(),T.destroy()}}function E(T){c.remove(T)}function D(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:L,releaseProgram:C,releaseShaderCache:E,programs:h,dispose:D}}function dv(){let i=new WeakMap;function e(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function t(r){i.delete(r)}function n(r,o,a){i.get(r)[o]=a}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function fv(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Ih(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Dh(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(u,d,f,g,v,m){let p=i[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:v,group:m},i[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=v,p.group=m),e++,p}function a(u,d,f,g,v,m){const p=o(u,d,f,g,v,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):t.push(p)}function c(u,d,f,g,v,m){const p=o(u,d,f,g,v,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function l(u,d){t.length>1&&t.sort(u||fv),n.length>1&&n.sort(d||Ih),s.length>1&&s.sort(d||Ih)}function h(){for(let u=e,d=i.length;u<d;u++){const f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function pv(){let i=new WeakMap;function e(n,s){const r=i.get(n);let o;return r===void 0?(o=new Dh,i.set(n,[o])):s>=r.length?(o=new Dh,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function mv(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new je};break;case"SpotLight":t={position:new U,direction:new U,color:new je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new je,groundColor:new je};break;case"RectAreaLight":t={color:new je,position:new U,halfWidth:new U,halfHeight:new U};break}return i[e.id]=t,t}}}function gv(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let _v=0;function vv(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function xv(i){const e=new mv,t=gv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new U);const s=new U,r=new pt,o=new pt;function a(l){let h=0,u=0,d=0;for(let T=0;T<9;T++)n.probe[T].set(0,0,0);let f=0,g=0,v=0,m=0,p=0,w=0,x=0,y=0,L=0,C=0,E=0;l.sort(vv);for(let T=0,S=l.length;T<S;T++){const I=l[T],Z=I.color,W=I.intensity,Y=I.distance,re=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=Z.r*W,u+=Z.g*W,d+=Z.b*W;else if(I.isLightProbe){for(let ie=0;ie<9;ie++)n.probe[ie].addScaledVector(I.sh.coefficients[ie],W);E++}else if(I.isDirectionalLight){const ie=e.get(I);if(ie.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const ce=I.shadow,se=t.get(I);se.shadowBias=ce.bias,se.shadowNormalBias=ce.normalBias,se.shadowRadius=ce.radius,se.shadowMapSize=ce.mapSize,n.directionalShadow[f]=se,n.directionalShadowMap[f]=re,n.directionalShadowMatrix[f]=I.shadow.matrix,w++}n.directional[f]=ie,f++}else if(I.isSpotLight){const ie=e.get(I);ie.position.setFromMatrixPosition(I.matrixWorld),ie.color.copy(Z).multiplyScalar(W),ie.distance=Y,ie.coneCos=Math.cos(I.angle),ie.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),ie.decay=I.decay,n.spot[v]=ie;const ce=I.shadow;if(I.map&&(n.spotLightMap[L]=I.map,L++,ce.updateMatrices(I),I.castShadow&&C++),n.spotLightMatrix[v]=ce.matrix,I.castShadow){const se=t.get(I);se.shadowBias=ce.bias,se.shadowNormalBias=ce.normalBias,se.shadowRadius=ce.radius,se.shadowMapSize=ce.mapSize,n.spotShadow[v]=se,n.spotShadowMap[v]=re,y++}v++}else if(I.isRectAreaLight){const ie=e.get(I);ie.color.copy(Z).multiplyScalar(W),ie.halfWidth.set(I.width*.5,0,0),ie.halfHeight.set(0,I.height*.5,0),n.rectArea[m]=ie,m++}else if(I.isPointLight){const ie=e.get(I);if(ie.color.copy(I.color).multiplyScalar(I.intensity),ie.distance=I.distance,ie.decay=I.decay,I.castShadow){const ce=I.shadow,se=t.get(I);se.shadowBias=ce.bias,se.shadowNormalBias=ce.normalBias,se.shadowRadius=ce.radius,se.shadowMapSize=ce.mapSize,se.shadowCameraNear=ce.camera.near,se.shadowCameraFar=ce.camera.far,n.pointShadow[g]=se,n.pointShadowMap[g]=re,n.pointShadowMatrix[g]=I.shadow.matrix,x++}n.point[g]=ie,g++}else if(I.isHemisphereLight){const ie=e.get(I);ie.skyColor.copy(I.color).multiplyScalar(W),ie.groundColor.copy(I.groundColor).multiplyScalar(W),n.hemi[p]=ie,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=xe.LTC_FLOAT_1,n.rectAreaLTC2=xe.LTC_FLOAT_2):(n.rectAreaLTC1=xe.LTC_HALF_1,n.rectAreaLTC2=xe.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const D=n.hash;(D.directionalLength!==f||D.pointLength!==g||D.spotLength!==v||D.rectAreaLength!==m||D.hemiLength!==p||D.numDirectionalShadows!==w||D.numPointShadows!==x||D.numSpotShadows!==y||D.numSpotMaps!==L||D.numLightProbes!==E)&&(n.directional.length=f,n.spot.length=v,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=y+L-C,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=E,D.directionalLength=f,D.pointLength=g,D.spotLength=v,D.rectAreaLength=m,D.hemiLength=p,D.numDirectionalShadows=w,D.numPointShadows=x,D.numSpotShadows=y,D.numSpotMaps=L,D.numLightProbes=E,n.version=_v++)}function c(l,h){let u=0,d=0,f=0,g=0,v=0;const m=h.matrixWorldInverse;for(let p=0,w=l.length;p<w;p++){const x=l[p];if(x.isDirectionalLight){const y=n.directional[u];y.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),u++}else if(x.isSpotLight){const y=n.spot[f];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),f++}else if(x.isRectAreaLight){const y=n.rectArea[g];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),o.identity(),r.copy(x.matrixWorld),r.premultiply(m),o.extractRotation(r),y.halfWidth.set(x.width*.5,0,0),y.halfHeight.set(0,x.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){const y=n.point[d];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),d++}else if(x.isHemisphereLight){const y=n.hemi[v];y.direction.setFromMatrixPosition(x.matrixWorld),y.direction.transformDirection(m),v++}}}return{setup:a,setupView:c,state:n}}function Nh(i){const e=new xv(i),t=[],n=[];function s(h){l.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function c(h){e.setupView(t,h)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function yv(i){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new Nh(i),e.set(s,[a])):r>=o.length?(a=new Nh(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class Sv extends ir{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=xp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Mv extends ir{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Ev=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,wv=`uniform sampler2D shadow_pass;
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
}`;function bv(i,e,t){let n=new Gc;const s=new Se,r=new Se,o=new _t,a=new Sv({depthPacking:yp}),c=new Mv,l={},h=t.maxTextureSize,u={[Ei]:jt,[jt]:Ei,[rn]:rn},d=new bi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Se},radius:{value:4}},vertexShader:Ev,fragmentShader:wv}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new on;g.setAttribute("position",new Mn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new be(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Iu;let p=this.type;this.render=function(C,E,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const T=i.getRenderTarget(),S=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),Z=i.state;Z.setBlending(_i),Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);const W=p!==Yn&&this.type===Yn,Y=p===Yn&&this.type!==Yn;for(let re=0,ie=C.length;re<ie;re++){const ce=C[re],se=ce.shadow;if(se===void 0){console.warn("THREE.WebGLShadowMap:",ce,"has no shadow.");continue}if(se.autoUpdate===!1&&se.needsUpdate===!1)continue;s.copy(se.mapSize);const ve=se.getFrameExtents();if(s.multiply(ve),r.copy(se.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ve.x),s.x=r.x*ve.x,se.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ve.y),s.y=r.y*ve.y,se.mapSize.y=r.y)),se.map===null||W===!0||Y===!0){const K=this.type!==Yn?{minFilter:dn,magFilter:dn}:{};se.map!==null&&se.map.dispose(),se.map=new qi(s.x,s.y,K),se.map.texture.name=ce.name+".shadowMap",se.camera.updateProjectionMatrix()}i.setRenderTarget(se.map),i.clear();const G=se.getViewportCount();for(let K=0;K<G;K++){const z=se.getViewport(K);o.set(r.x*z.x,r.y*z.y,r.x*z.z,r.y*z.w),Z.viewport(o),se.updateMatrices(ce,K),n=se.getFrustum(),y(E,D,se.camera,ce,this.type)}se.isPointLightShadow!==!0&&this.type===Yn&&w(se,D),se.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(T,S,I)};function w(C,E){const D=e.update(v);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,f.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new qi(s.x,s.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(E,null,D,d,v,null),f.uniforms.shadow_pass.value=C.mapPass.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(E,null,D,f,v,null)}function x(C,E,D,T){let S=null;const I=D.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(I!==void 0)S=I;else if(S=D.isPointLight===!0?c:a,i.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const Z=S.uuid,W=E.uuid;let Y=l[Z];Y===void 0&&(Y={},l[Z]=Y);let re=Y[W];re===void 0&&(re=S.clone(),Y[W]=re,E.addEventListener("dispose",L)),S=re}if(S.visible=E.visible,S.wireframe=E.wireframe,T===Yn?S.side=E.shadowSide!==null?E.shadowSide:E.side:S.side=E.shadowSide!==null?E.shadowSide:u[E.side],S.alphaMap=E.alphaMap,S.alphaTest=E.alphaTest,S.map=E.map,S.clipShadows=E.clipShadows,S.clippingPlanes=E.clippingPlanes,S.clipIntersection=E.clipIntersection,S.displacementMap=E.displacementMap,S.displacementScale=E.displacementScale,S.displacementBias=E.displacementBias,S.wireframeLinewidth=E.wireframeLinewidth,S.linewidth=E.linewidth,D.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const Z=i.properties.get(S);Z.light=D}return S}function y(C,E,D,T,S){if(C.visible===!1)return;if(C.layers.test(E.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&S===Yn)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,C.matrixWorld);const W=e.update(C),Y=C.material;if(Array.isArray(Y)){const re=W.groups;for(let ie=0,ce=re.length;ie<ce;ie++){const se=re[ie],ve=Y[se.materialIndex];if(ve&&ve.visible){const G=x(C,ve,T,S);C.onBeforeShadow(i,C,E,D,W,G,se),i.renderBufferDirect(D,null,W,G,C,se),C.onAfterShadow(i,C,E,D,W,G,se)}}}else if(Y.visible){const re=x(C,Y,T,S);C.onBeforeShadow(i,C,E,D,W,re,null),i.renderBufferDirect(D,null,W,re,C,null),C.onAfterShadow(i,C,E,D,W,re,null)}}const Z=C.children;for(let W=0,Y=Z.length;W<Y;W++)y(Z[W],E,D,T,S)}function L(C){C.target.removeEventListener("dispose",L);for(const D in l){const T=l[D],S=C.target.uuid;S in T&&(T[S].dispose(),delete T[S])}}}function Tv(i){function e(){let b=!1;const ee=new _t;let k=null;const j=new _t(0,0,0,0);return{setMask:function(ue){k!==ue&&!b&&(i.colorMask(ue,ue,ue,ue),k=ue)},setLocked:function(ue){b=ue},setClear:function(ue,ye,ze,it,mt){mt===!0&&(ue*=it,ye*=it,ze*=it),ee.set(ue,ye,ze,it),j.equals(ee)===!1&&(i.clearColor(ue,ye,ze,it),j.copy(ee))},reset:function(){b=!1,k=null,j.set(-1,0,0,0)}}}function t(){let b=!1,ee=null,k=null,j=null;return{setTest:function(ue){ue?ne(i.DEPTH_TEST):ae(i.DEPTH_TEST)},setMask:function(ue){ee!==ue&&!b&&(i.depthMask(ue),ee=ue)},setFunc:function(ue){if(k!==ue){switch(ue){case Yf:i.depthFunc(i.NEVER);break;case qf:i.depthFunc(i.ALWAYS);break;case $f:i.depthFunc(i.LESS);break;case Go:i.depthFunc(i.LEQUAL);break;case Kf:i.depthFunc(i.EQUAL);break;case Jf:i.depthFunc(i.GEQUAL);break;case jf:i.depthFunc(i.GREATER);break;case Qf:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}k=ue}},setLocked:function(ue){b=ue},setClear:function(ue){j!==ue&&(i.clearDepth(ue),j=ue)},reset:function(){b=!1,ee=null,k=null,j=null}}}function n(){let b=!1,ee=null,k=null,j=null,ue=null,ye=null,ze=null,it=null,mt=null;return{setTest:function(et){b||(et?ne(i.STENCIL_TEST):ae(i.STENCIL_TEST))},setMask:function(et){ee!==et&&!b&&(i.stencilMask(et),ee=et)},setFunc:function(et,yt,bn){(k!==et||j!==yt||ue!==bn)&&(i.stencilFunc(et,yt,bn),k=et,j=yt,ue=bn)},setOp:function(et,yt,bn){(ye!==et||ze!==yt||it!==bn)&&(i.stencilOp(et,yt,bn),ye=et,ze=yt,it=bn)},setLocked:function(et){b=et},setClear:function(et){mt!==et&&(i.clearStencil(et),mt=et)},reset:function(){b=!1,ee=null,k=null,j=null,ue=null,ye=null,ze=null,it=null,mt=null}}}const s=new e,r=new t,o=new n,a=new WeakMap,c=new WeakMap;let l={},h={},u=new WeakMap,d=[],f=null,g=!1,v=null,m=null,p=null,w=null,x=null,y=null,L=null,C=new je(0,0,0),E=0,D=!1,T=null,S=null,I=null,Z=null,W=null;const Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let re=!1,ie=0;const ce=i.getParameter(i.VERSION);ce.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(ce)[1]),re=ie>=1):ce.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(ce)[1]),re=ie>=2);let se=null,ve={};const G=i.getParameter(i.SCISSOR_BOX),K=i.getParameter(i.VIEWPORT),z=new _t().fromArray(G),le=new _t().fromArray(K);function F(b,ee,k,j){const ue=new Uint8Array(4),ye=i.createTexture();i.bindTexture(b,ye),i.texParameteri(b,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(b,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ze=0;ze<k;ze++)b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY?i.texImage3D(ee,0,i.RGBA,1,1,j,0,i.RGBA,i.UNSIGNED_BYTE,ue):i.texImage2D(ee+ze,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ue);return ye}const q={};q[i.TEXTURE_2D]=F(i.TEXTURE_2D,i.TEXTURE_2D,1),q[i.TEXTURE_CUBE_MAP]=F(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[i.TEXTURE_2D_ARRAY]=F(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),q[i.TEXTURE_3D]=F(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),ne(i.DEPTH_TEST),r.setFunc(Go),Re(!1),Ze(gl),ne(i.CULL_FACE),De(_i);function ne(b){l[b]!==!0&&(i.enable(b),l[b]=!0)}function ae(b){l[b]!==!1&&(i.disable(b),l[b]=!1)}function me(b,ee){return h[b]!==ee?(i.bindFramebuffer(b,ee),h[b]=ee,b===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=ee),b===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=ee),!0):!1}function Ee(b,ee){let k=d,j=!1;if(b){k=u.get(ee),k===void 0&&(k=[],u.set(ee,k));const ue=b.textures;if(k.length!==ue.length||k[0]!==i.COLOR_ATTACHMENT0){for(let ye=0,ze=ue.length;ye<ze;ye++)k[ye]=i.COLOR_ATTACHMENT0+ye;k.length=ue.length,j=!0}}else k[0]!==i.BACK&&(k[0]=i.BACK,j=!0);j&&i.drawBuffers(k)}function Ne(b){return f!==b?(i.useProgram(b),f=b,!0):!1}const N={[Hi]:i.FUNC_ADD,[Pf]:i.FUNC_SUBTRACT,[Lf]:i.FUNC_REVERSE_SUBTRACT};N[If]=i.MIN,N[Df]=i.MAX;const He={[Nf]:i.ZERO,[Uf]:i.ONE,[Of]:i.SRC_COLOR,[hc]:i.SRC_ALPHA,[Gf]:i.SRC_ALPHA_SATURATE,[kf]:i.DST_COLOR,[Bf]:i.DST_ALPHA,[Ff]:i.ONE_MINUS_SRC_COLOR,[uc]:i.ONE_MINUS_SRC_ALPHA,[Hf]:i.ONE_MINUS_DST_COLOR,[zf]:i.ONE_MINUS_DST_ALPHA,[Vf]:i.CONSTANT_COLOR,[Wf]:i.ONE_MINUS_CONSTANT_COLOR,[Xf]:i.CONSTANT_ALPHA,[Zf]:i.ONE_MINUS_CONSTANT_ALPHA};function De(b,ee,k,j,ue,ye,ze,it,mt,et){if(b===_i){g===!0&&(ae(i.BLEND),g=!1);return}if(g===!1&&(ne(i.BLEND),g=!0),b!==Cf){if(b!==v||et!==D){if((m!==Hi||x!==Hi)&&(i.blendEquation(i.FUNC_ADD),m=Hi,x=Hi),et)switch(b){case Os:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case _l:i.blendFunc(i.ONE,i.ONE);break;case vl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case xl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",b);break}else switch(b){case Os:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case _l:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case vl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case xl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",b);break}p=null,w=null,y=null,L=null,C.set(0,0,0),E=0,v=b,D=et}return}ue=ue||ee,ye=ye||k,ze=ze||j,(ee!==m||ue!==x)&&(i.blendEquationSeparate(N[ee],N[ue]),m=ee,x=ue),(k!==p||j!==w||ye!==y||ze!==L)&&(i.blendFuncSeparate(He[k],He[j],He[ye],He[ze]),p=k,w=j,y=ye,L=ze),(it.equals(C)===!1||mt!==E)&&(i.blendColor(it.r,it.g,it.b,mt),C.copy(it),E=mt),v=b,D=!1}function Qe(b,ee){b.side===rn?ae(i.CULL_FACE):ne(i.CULL_FACE);let k=b.side===jt;ee&&(k=!k),Re(k),b.blending===Os&&b.transparent===!1?De(_i):De(b.blending,b.blendEquation,b.blendSrc,b.blendDst,b.blendEquationAlpha,b.blendSrcAlpha,b.blendDstAlpha,b.blendColor,b.blendAlpha,b.premultipliedAlpha),r.setFunc(b.depthFunc),r.setTest(b.depthTest),r.setMask(b.depthWrite),s.setMask(b.colorWrite);const j=b.stencilWrite;o.setTest(j),j&&(o.setMask(b.stencilWriteMask),o.setFunc(b.stencilFunc,b.stencilRef,b.stencilFuncMask),o.setOp(b.stencilFail,b.stencilZFail,b.stencilZPass)),Be(b.polygonOffset,b.polygonOffsetFactor,b.polygonOffsetUnits),b.alphaToCoverage===!0?ne(i.SAMPLE_ALPHA_TO_COVERAGE):ae(i.SAMPLE_ALPHA_TO_COVERAGE)}function Re(b){T!==b&&(b?i.frontFace(i.CW):i.frontFace(i.CCW),T=b)}function Ze(b){b!==Af?(ne(i.CULL_FACE),b!==S&&(b===gl?i.cullFace(i.BACK):b===Rf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ae(i.CULL_FACE),S=b}function We(b){b!==I&&(re&&i.lineWidth(b),I=b)}function Be(b,ee,k){b?(ne(i.POLYGON_OFFSET_FILL),(Z!==ee||W!==k)&&(i.polygonOffset(ee,k),Z=ee,W=k)):ae(i.POLYGON_OFFSET_FILL)}function B(b){b?ne(i.SCISSOR_TEST):ae(i.SCISSOR_TEST)}function M(b){b===void 0&&(b=i.TEXTURE0+Y-1),se!==b&&(i.activeTexture(b),se=b)}function _(b,ee,k){k===void 0&&(se===null?k=i.TEXTURE0+Y-1:k=se);let j=ve[k];j===void 0&&(j={type:void 0,texture:void 0},ve[k]=j),(j.type!==b||j.texture!==ee)&&(se!==k&&(i.activeTexture(k),se=k),i.bindTexture(b,ee||q[b]),j.type=b,j.texture=ee)}function R(){const b=ve[se];b!==void 0&&b.type!==void 0&&(i.bindTexture(b.type,null),b.type=void 0,b.texture=void 0)}function O(){try{i.compressedTexImage2D.apply(i,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function V(){try{i.compressedTexImage3D.apply(i,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function $(){try{i.texSubImage2D.apply(i,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function te(){try{i.texSubImage3D.apply(i,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function he(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function de(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function Ce(){try{i.texStorage2D.apply(i,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function fe(){try{i.texStorage3D.apply(i,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function Me(){try{i.texImage2D.apply(i,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function Xe(){try{i.texImage3D.apply(i,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function Te(b){z.equals(b)===!1&&(i.scissor(b.x,b.y,b.z,b.w),z.copy(b))}function ge(b){le.equals(b)===!1&&(i.viewport(b.x,b.y,b.z,b.w),le.copy(b))}function Ue(b,ee){let k=c.get(ee);k===void 0&&(k=new WeakMap,c.set(ee,k));let j=k.get(b);j===void 0&&(j=i.getUniformBlockIndex(ee,b.name),k.set(b,j))}function Ge(b,ee){const j=c.get(ee).get(b);a.get(ee)!==j&&(i.uniformBlockBinding(ee,j,b.__bindingPointIndex),a.set(ee,j))}function Ke(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),l={},se=null,ve={},h={},u=new WeakMap,d=[],f=null,g=!1,v=null,m=null,p=null,w=null,x=null,y=null,L=null,C=new je(0,0,0),E=0,D=!1,T=null,S=null,I=null,Z=null,W=null,z.set(0,0,i.canvas.width,i.canvas.height),le.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:ne,disable:ae,bindFramebuffer:me,drawBuffers:Ee,useProgram:Ne,setBlending:De,setMaterial:Qe,setFlipSided:Re,setCullFace:Ze,setLineWidth:We,setPolygonOffset:Be,setScissorTest:B,activeTexture:M,bindTexture:_,unbindTexture:R,compressedTexImage2D:O,compressedTexImage3D:V,texImage2D:Me,texImage3D:Xe,updateUBOMapping:Ue,uniformBlockBinding:Ge,texStorage2D:Ce,texStorage3D:fe,texSubImage2D:$,texSubImage3D:te,compressedTexSubImage2D:he,compressedTexSubImage3D:de,scissor:Te,viewport:ge,reset:Ke}}function Av(i,e,t,n,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Se,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(M,_){return f?new OffscreenCanvas(M,_):qo("canvas")}function v(M,_,R){let O=1;const V=B(M);if((V.width>R||V.height>R)&&(O=R/Math.max(V.width,V.height)),O<1)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap||typeof VideoFrame<"u"&&M instanceof VideoFrame){const $=Math.floor(O*V.width),te=Math.floor(O*V.height);u===void 0&&(u=g($,te));const he=_?g($,te):u;return he.width=$,he.height=te,he.getContext("2d").drawImage(M,0,0,$,te),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+V.width+"x"+V.height+") to ("+$+"x"+te+")."),he}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+V.width+"x"+V.height+")."),M;return M}function m(M){return M.generateMipmaps&&M.minFilter!==dn&&M.minFilter!==xn}function p(M){i.generateMipmap(M)}function w(M,_,R,O,V=!1){if(M!==null){if(i[M]!==void 0)return i[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let $=_;if(_===i.RED&&(R===i.FLOAT&&($=i.R32F),R===i.HALF_FLOAT&&($=i.R16F),R===i.UNSIGNED_BYTE&&($=i.R8)),_===i.RED_INTEGER&&(R===i.UNSIGNED_BYTE&&($=i.R8UI),R===i.UNSIGNED_SHORT&&($=i.R16UI),R===i.UNSIGNED_INT&&($=i.R32UI),R===i.BYTE&&($=i.R8I),R===i.SHORT&&($=i.R16I),R===i.INT&&($=i.R32I)),_===i.RG&&(R===i.FLOAT&&($=i.RG32F),R===i.HALF_FLOAT&&($=i.RG16F),R===i.UNSIGNED_BYTE&&($=i.RG8)),_===i.RG_INTEGER&&(R===i.UNSIGNED_BYTE&&($=i.RG8UI),R===i.UNSIGNED_SHORT&&($=i.RG16UI),R===i.UNSIGNED_INT&&($=i.RG32UI),R===i.BYTE&&($=i.RG8I),R===i.SHORT&&($=i.RG16I),R===i.INT&&($=i.RG32I)),_===i.RGB&&R===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),_===i.RGBA){const te=V?Wo:at.getTransfer(O);R===i.FLOAT&&($=i.RGBA32F),R===i.HALF_FLOAT&&($=i.RGBA16F),R===i.UNSIGNED_BYTE&&($=te===dt?i.SRGB8_ALPHA8:i.RGBA8),R===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),R===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function x(M,_){let R;return M?_===null||_===Ks||_===Js?R=i.DEPTH24_STENCIL8:_===gi?R=i.DEPTH32F_STENCIL8:_===Vo&&(R=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Ks||_===Js?R=i.DEPTH_COMPONENT24:_===gi?R=i.DEPTH_COMPONENT32F:_===Vo&&(R=i.DEPTH_COMPONENT16),R}function y(M,_){return m(M)===!0||M.isFramebufferTexture&&M.minFilter!==dn&&M.minFilter!==xn?Math.log2(Math.max(_.width,_.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?_.mipmaps.length:1}function L(M){const _=M.target;_.removeEventListener("dispose",L),E(_),_.isVideoTexture&&h.delete(_)}function C(M){const _=M.target;_.removeEventListener("dispose",C),T(_)}function E(M){const _=n.get(M);if(_.__webglInit===void 0)return;const R=M.source,O=d.get(R);if(O){const V=O[_.__cacheKey];V.usedTimes--,V.usedTimes===0&&D(M),Object.keys(O).length===0&&d.delete(R)}n.remove(M)}function D(M){const _=n.get(M);i.deleteTexture(_.__webglTexture);const R=M.source,O=d.get(R);delete O[_.__cacheKey],o.memory.textures--}function T(M){const _=n.get(M);if(M.depthTexture&&M.depthTexture.dispose(),M.isWebGLCubeRenderTarget)for(let O=0;O<6;O++){if(Array.isArray(_.__webglFramebuffer[O]))for(let V=0;V<_.__webglFramebuffer[O].length;V++)i.deleteFramebuffer(_.__webglFramebuffer[O][V]);else i.deleteFramebuffer(_.__webglFramebuffer[O]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[O])}else{if(Array.isArray(_.__webglFramebuffer))for(let O=0;O<_.__webglFramebuffer.length;O++)i.deleteFramebuffer(_.__webglFramebuffer[O]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let O=0;O<_.__webglColorRenderbuffer.length;O++)_.__webglColorRenderbuffer[O]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[O]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const R=M.textures;for(let O=0,V=R.length;O<V;O++){const $=n.get(R[O]);$.__webglTexture&&(i.deleteTexture($.__webglTexture),o.memory.textures--),n.remove(R[O])}n.remove(M)}let S=0;function I(){S=0}function Z(){const M=S;return M>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+s.maxTextures),S+=1,M}function W(M){const _=[];return _.push(M.wrapS),_.push(M.wrapT),_.push(M.wrapR||0),_.push(M.magFilter),_.push(M.minFilter),_.push(M.anisotropy),_.push(M.internalFormat),_.push(M.format),_.push(M.type),_.push(M.generateMipmaps),_.push(M.premultiplyAlpha),_.push(M.flipY),_.push(M.unpackAlignment),_.push(M.colorSpace),_.join()}function Y(M,_){const R=n.get(M);if(M.isVideoTexture&&We(M),M.isRenderTargetTexture===!1&&M.version>0&&R.__version!==M.version){const O=M.image;if(O===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(O.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{le(R,M,_);return}}t.bindTexture(i.TEXTURE_2D,R.__webglTexture,i.TEXTURE0+_)}function re(M,_){const R=n.get(M);if(M.version>0&&R.__version!==M.version){le(R,M,_);return}t.bindTexture(i.TEXTURE_2D_ARRAY,R.__webglTexture,i.TEXTURE0+_)}function ie(M,_){const R=n.get(M);if(M.version>0&&R.__version!==M.version){le(R,M,_);return}t.bindTexture(i.TEXTURE_3D,R.__webglTexture,i.TEXTURE0+_)}function ce(M,_){const R=n.get(M);if(M.version>0&&R.__version!==M.version){F(R,M,_);return}t.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+_)}const se={[pc]:i.REPEAT,[Wi]:i.CLAMP_TO_EDGE,[mc]:i.MIRRORED_REPEAT},ve={[dn]:i.NEAREST,[cp]:i.NEAREST_MIPMAP_NEAREST,[ro]:i.NEAREST_MIPMAP_LINEAR,[xn]:i.LINEAR,[_a]:i.LINEAR_MIPMAP_NEAREST,[Xi]:i.LINEAR_MIPMAP_LINEAR},G={[Mp]:i.NEVER,[Rp]:i.ALWAYS,[Ep]:i.LESS,[Wu]:i.LEQUAL,[wp]:i.EQUAL,[Ap]:i.GEQUAL,[bp]:i.GREATER,[Tp]:i.NOTEQUAL};function K(M,_){if(_.type===gi&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===xn||_.magFilter===_a||_.magFilter===ro||_.magFilter===Xi||_.minFilter===xn||_.minFilter===_a||_.minFilter===ro||_.minFilter===Xi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(M,i.TEXTURE_WRAP_S,se[_.wrapS]),i.texParameteri(M,i.TEXTURE_WRAP_T,se[_.wrapT]),(M===i.TEXTURE_3D||M===i.TEXTURE_2D_ARRAY)&&i.texParameteri(M,i.TEXTURE_WRAP_R,se[_.wrapR]),i.texParameteri(M,i.TEXTURE_MAG_FILTER,ve[_.magFilter]),i.texParameteri(M,i.TEXTURE_MIN_FILTER,ve[_.minFilter]),_.compareFunction&&(i.texParameteri(M,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(M,i.TEXTURE_COMPARE_FUNC,G[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===dn||_.minFilter!==ro&&_.minFilter!==Xi||_.type===gi&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const R=e.get("EXT_texture_filter_anisotropic");i.texParameterf(M,R.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function z(M,_){let R=!1;M.__webglInit===void 0&&(M.__webglInit=!0,_.addEventListener("dispose",L));const O=_.source;let V=d.get(O);V===void 0&&(V={},d.set(O,V));const $=W(_);if($!==M.__cacheKey){V[$]===void 0&&(V[$]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,R=!0),V[$].usedTimes++;const te=V[M.__cacheKey];te!==void 0&&(V[M.__cacheKey].usedTimes--,te.usedTimes===0&&D(_)),M.__cacheKey=$,M.__webglTexture=V[$].texture}return R}function le(M,_,R){let O=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(O=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(O=i.TEXTURE_3D);const V=z(M,_),$=_.source;t.bindTexture(O,M.__webglTexture,i.TEXTURE0+R);const te=n.get($);if($.version!==te.__version||V===!0){t.activeTexture(i.TEXTURE0+R);const he=at.getPrimaries(at.workingColorSpace),de=_.colorSpace===fi?null:at.getPrimaries(_.colorSpace),Ce=_.colorSpace===fi||he===de?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);let fe=v(_.image,!1,s.maxTextureSize);fe=Be(_,fe);const Me=r.convert(_.format,_.colorSpace),Xe=r.convert(_.type);let Te=w(_.internalFormat,Me,Xe,_.colorSpace,_.isVideoTexture);K(O,_);let ge;const Ue=_.mipmaps,Ge=_.isVideoTexture!==!0,Ke=te.__version===void 0||V===!0,b=$.dataReady,ee=y(_,fe);if(_.isDepthTexture)Te=x(_.format===js,_.type),Ke&&(Ge?t.texStorage2D(i.TEXTURE_2D,1,Te,fe.width,fe.height):t.texImage2D(i.TEXTURE_2D,0,Te,fe.width,fe.height,0,Me,Xe,null));else if(_.isDataTexture)if(Ue.length>0){Ge&&Ke&&t.texStorage2D(i.TEXTURE_2D,ee,Te,Ue[0].width,Ue[0].height);for(let k=0,j=Ue.length;k<j;k++)ge=Ue[k],Ge?b&&t.texSubImage2D(i.TEXTURE_2D,k,0,0,ge.width,ge.height,Me,Xe,ge.data):t.texImage2D(i.TEXTURE_2D,k,Te,ge.width,ge.height,0,Me,Xe,ge.data);_.generateMipmaps=!1}else Ge?(Ke&&t.texStorage2D(i.TEXTURE_2D,ee,Te,fe.width,fe.height),b&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,fe.width,fe.height,Me,Xe,fe.data)):t.texImage2D(i.TEXTURE_2D,0,Te,fe.width,fe.height,0,Me,Xe,fe.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Ge&&Ke&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ee,Te,Ue[0].width,Ue[0].height,fe.depth);for(let k=0,j=Ue.length;k<j;k++)if(ge=Ue[k],_.format!==In)if(Me!==null)if(Ge){if(b)if(_.layerUpdates.size>0){for(const ue of _.layerUpdates){const ye=ge.width*ge.height;t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,k,0,0,ue,ge.width,ge.height,1,Me,ge.data.slice(ye*ue,ye*(ue+1)),0,0)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,k,0,0,0,ge.width,ge.height,fe.depth,Me,ge.data,0,0)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,k,Te,ge.width,ge.height,fe.depth,0,ge.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ge?b&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,k,0,0,0,ge.width,ge.height,fe.depth,Me,Xe,ge.data):t.texImage3D(i.TEXTURE_2D_ARRAY,k,Te,ge.width,ge.height,fe.depth,0,Me,Xe,ge.data)}else{Ge&&Ke&&t.texStorage2D(i.TEXTURE_2D,ee,Te,Ue[0].width,Ue[0].height);for(let k=0,j=Ue.length;k<j;k++)ge=Ue[k],_.format!==In?Me!==null?Ge?b&&t.compressedTexSubImage2D(i.TEXTURE_2D,k,0,0,ge.width,ge.height,Me,ge.data):t.compressedTexImage2D(i.TEXTURE_2D,k,Te,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ge?b&&t.texSubImage2D(i.TEXTURE_2D,k,0,0,ge.width,ge.height,Me,Xe,ge.data):t.texImage2D(i.TEXTURE_2D,k,Te,ge.width,ge.height,0,Me,Xe,ge.data)}else if(_.isDataArrayTexture)if(Ge){if(Ke&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ee,Te,fe.width,fe.height,fe.depth),b)if(_.layerUpdates.size>0){let k;switch(Xe){case i.UNSIGNED_BYTE:switch(Me){case i.ALPHA:k=1;break;case i.LUMINANCE:k=1;break;case i.LUMINANCE_ALPHA:k=2;break;case i.RGB:k=3;break;case i.RGBA:k=4;break;default:throw new Error(`Unknown texel size for format ${Me}.`)}break;case i.UNSIGNED_SHORT_4_4_4_4:case i.UNSIGNED_SHORT_5_5_5_1:case i.UNSIGNED_SHORT_5_6_5:k=1;break;default:throw new Error(`Unknown texel size for type ${Xe}.`)}const j=fe.width*fe.height*k;for(const ue of _.layerUpdates)t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ue,fe.width,fe.height,1,Me,Xe,fe.data.slice(j*ue,j*(ue+1)));_.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,fe.width,fe.height,fe.depth,Me,Xe,fe.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Te,fe.width,fe.height,fe.depth,0,Me,Xe,fe.data);else if(_.isData3DTexture)Ge?(Ke&&t.texStorage3D(i.TEXTURE_3D,ee,Te,fe.width,fe.height,fe.depth),b&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,fe.width,fe.height,fe.depth,Me,Xe,fe.data)):t.texImage3D(i.TEXTURE_3D,0,Te,fe.width,fe.height,fe.depth,0,Me,Xe,fe.data);else if(_.isFramebufferTexture){if(Ke)if(Ge)t.texStorage2D(i.TEXTURE_2D,ee,Te,fe.width,fe.height);else{let k=fe.width,j=fe.height;for(let ue=0;ue<ee;ue++)t.texImage2D(i.TEXTURE_2D,ue,Te,k,j,0,Me,Xe,null),k>>=1,j>>=1}}else if(Ue.length>0){if(Ge&&Ke){const k=B(Ue[0]);t.texStorage2D(i.TEXTURE_2D,ee,Te,k.width,k.height)}for(let k=0,j=Ue.length;k<j;k++)ge=Ue[k],Ge?b&&t.texSubImage2D(i.TEXTURE_2D,k,0,0,Me,Xe,ge):t.texImage2D(i.TEXTURE_2D,k,Te,Me,Xe,ge);_.generateMipmaps=!1}else if(Ge){if(Ke){const k=B(fe);t.texStorage2D(i.TEXTURE_2D,ee,Te,k.width,k.height)}b&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Me,Xe,fe)}else t.texImage2D(i.TEXTURE_2D,0,Te,Me,Xe,fe);m(_)&&p(O),te.__version=$.version,_.onUpdate&&_.onUpdate(_)}M.__version=_.version}function F(M,_,R){if(_.image.length!==6)return;const O=z(M,_),V=_.source;t.bindTexture(i.TEXTURE_CUBE_MAP,M.__webglTexture,i.TEXTURE0+R);const $=n.get(V);if(V.version!==$.__version||O===!0){t.activeTexture(i.TEXTURE0+R);const te=at.getPrimaries(at.workingColorSpace),he=_.colorSpace===fi?null:at.getPrimaries(_.colorSpace),de=_.colorSpace===fi||te===he?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);const Ce=_.isCompressedTexture||_.image[0].isCompressedTexture,fe=_.image[0]&&_.image[0].isDataTexture,Me=[];for(let j=0;j<6;j++)!Ce&&!fe?Me[j]=v(_.image[j],!0,s.maxCubemapSize):Me[j]=fe?_.image[j].image:_.image[j],Me[j]=Be(_,Me[j]);const Xe=Me[0],Te=r.convert(_.format,_.colorSpace),ge=r.convert(_.type),Ue=w(_.internalFormat,Te,ge,_.colorSpace),Ge=_.isVideoTexture!==!0,Ke=$.__version===void 0||O===!0,b=V.dataReady;let ee=y(_,Xe);K(i.TEXTURE_CUBE_MAP,_);let k;if(Ce){Ge&&Ke&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ee,Ue,Xe.width,Xe.height);for(let j=0;j<6;j++){k=Me[j].mipmaps;for(let ue=0;ue<k.length;ue++){const ye=k[ue];_.format!==In?Te!==null?Ge?b&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ue,0,0,ye.width,ye.height,Te,ye.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ue,Ue,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ge?b&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ue,0,0,ye.width,ye.height,Te,ge,ye.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ue,Ue,ye.width,ye.height,0,Te,ge,ye.data)}}}else{if(k=_.mipmaps,Ge&&Ke){k.length>0&&ee++;const j=B(Me[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ee,Ue,j.width,j.height)}for(let j=0;j<6;j++)if(fe){Ge?b&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Me[j].width,Me[j].height,Te,ge,Me[j].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Ue,Me[j].width,Me[j].height,0,Te,ge,Me[j].data);for(let ue=0;ue<k.length;ue++){const ze=k[ue].image[j].image;Ge?b&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ue+1,0,0,ze.width,ze.height,Te,ge,ze.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ue+1,Ue,ze.width,ze.height,0,Te,ge,ze.data)}}else{Ge?b&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Te,ge,Me[j]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Ue,Te,ge,Me[j]);for(let ue=0;ue<k.length;ue++){const ye=k[ue];Ge?b&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ue+1,0,0,Te,ge,ye.image[j]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ue+1,Ue,Te,ge,ye.image[j])}}}m(_)&&p(i.TEXTURE_CUBE_MAP),$.__version=V.version,_.onUpdate&&_.onUpdate(_)}M.__version=_.version}function q(M,_,R,O,V,$){const te=r.convert(R.format,R.colorSpace),he=r.convert(R.type),de=w(R.internalFormat,te,he,R.colorSpace);if(!n.get(_).__hasExternalTextures){const fe=Math.max(1,_.width>>$),Me=Math.max(1,_.height>>$);V===i.TEXTURE_3D||V===i.TEXTURE_2D_ARRAY?t.texImage3D(V,$,de,fe,Me,_.depth,0,te,he,null):t.texImage2D(V,$,de,fe,Me,0,te,he,null)}t.bindFramebuffer(i.FRAMEBUFFER,M),Ze(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,O,V,n.get(R).__webglTexture,0,Re(_)):(V===i.TEXTURE_2D||V>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&V<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,O,V,n.get(R).__webglTexture,$),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ne(M,_,R){if(i.bindRenderbuffer(i.RENDERBUFFER,M),_.depthBuffer){const O=_.depthTexture,V=O&&O.isDepthTexture?O.type:null,$=x(_.stencilBuffer,V),te=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,he=Re(_);Ze(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,he,$,_.width,_.height):R?i.renderbufferStorageMultisample(i.RENDERBUFFER,he,$,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,$,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,te,i.RENDERBUFFER,M)}else{const O=_.textures;for(let V=0;V<O.length;V++){const $=O[V],te=r.convert($.format,$.colorSpace),he=r.convert($.type),de=w($.internalFormat,te,he,$.colorSpace),Ce=Re(_);R&&Ze(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ce,de,_.width,_.height):Ze(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ce,de,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,de,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ae(M,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,M),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(_.depthTexture).__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),Y(_.depthTexture,0);const O=n.get(_.depthTexture).__webglTexture,V=Re(_);if(_.depthTexture.format===Fs)Ze(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,O,0,V):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,O,0);else if(_.depthTexture.format===js)Ze(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,O,0,V):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,O,0);else throw new Error("Unknown depthTexture format")}function me(M){const _=n.get(M),R=M.isWebGLCubeRenderTarget===!0;if(M.depthTexture&&!_.__autoAllocateDepthBuffer){if(R)throw new Error("target.depthTexture not supported in Cube render targets");ae(_.__webglFramebuffer,M)}else if(R){_.__webglDepthbuffer=[];for(let O=0;O<6;O++)t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[O]),_.__webglDepthbuffer[O]=i.createRenderbuffer(),ne(_.__webglDepthbuffer[O],M,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer=i.createRenderbuffer(),ne(_.__webglDepthbuffer,M,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ee(M,_,R){const O=n.get(M);_!==void 0&&q(O.__webglFramebuffer,M,M.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),R!==void 0&&me(M)}function Ne(M){const _=M.texture,R=n.get(M),O=n.get(_);M.addEventListener("dispose",C);const V=M.textures,$=M.isWebGLCubeRenderTarget===!0,te=V.length>1;if(te||(O.__webglTexture===void 0&&(O.__webglTexture=i.createTexture()),O.__version=_.version,o.memory.textures++),$){R.__webglFramebuffer=[];for(let he=0;he<6;he++)if(_.mipmaps&&_.mipmaps.length>0){R.__webglFramebuffer[he]=[];for(let de=0;de<_.mipmaps.length;de++)R.__webglFramebuffer[he][de]=i.createFramebuffer()}else R.__webglFramebuffer[he]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){R.__webglFramebuffer=[];for(let he=0;he<_.mipmaps.length;he++)R.__webglFramebuffer[he]=i.createFramebuffer()}else R.__webglFramebuffer=i.createFramebuffer();if(te)for(let he=0,de=V.length;he<de;he++){const Ce=n.get(V[he]);Ce.__webglTexture===void 0&&(Ce.__webglTexture=i.createTexture(),o.memory.textures++)}if(M.samples>0&&Ze(M)===!1){R.__webglMultisampledFramebuffer=i.createFramebuffer(),R.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,R.__webglMultisampledFramebuffer);for(let he=0;he<V.length;he++){const de=V[he];R.__webglColorRenderbuffer[he]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,R.__webglColorRenderbuffer[he]);const Ce=r.convert(de.format,de.colorSpace),fe=r.convert(de.type),Me=w(de.internalFormat,Ce,fe,de.colorSpace,M.isXRRenderTarget===!0),Xe=Re(M);i.renderbufferStorageMultisample(i.RENDERBUFFER,Xe,Me,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.RENDERBUFFER,R.__webglColorRenderbuffer[he])}i.bindRenderbuffer(i.RENDERBUFFER,null),M.depthBuffer&&(R.__webglDepthRenderbuffer=i.createRenderbuffer(),ne(R.__webglDepthRenderbuffer,M,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if($){t.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture),K(i.TEXTURE_CUBE_MAP,_);for(let he=0;he<6;he++)if(_.mipmaps&&_.mipmaps.length>0)for(let de=0;de<_.mipmaps.length;de++)q(R.__webglFramebuffer[he][de],M,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+he,de);else q(R.__webglFramebuffer[he],M,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);m(_)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(te){for(let he=0,de=V.length;he<de;he++){const Ce=V[he],fe=n.get(Ce);t.bindTexture(i.TEXTURE_2D,fe.__webglTexture),K(i.TEXTURE_2D,Ce),q(R.__webglFramebuffer,M,Ce,i.COLOR_ATTACHMENT0+he,i.TEXTURE_2D,0),m(Ce)&&p(i.TEXTURE_2D)}t.unbindTexture()}else{let he=i.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(he=M.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(he,O.__webglTexture),K(he,_),_.mipmaps&&_.mipmaps.length>0)for(let de=0;de<_.mipmaps.length;de++)q(R.__webglFramebuffer[de],M,_,i.COLOR_ATTACHMENT0,he,de);else q(R.__webglFramebuffer,M,_,i.COLOR_ATTACHMENT0,he,0);m(_)&&p(he),t.unbindTexture()}M.depthBuffer&&me(M)}function N(M){const _=M.textures;for(let R=0,O=_.length;R<O;R++){const V=_[R];if(m(V)){const $=M.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,te=n.get(V).__webglTexture;t.bindTexture($,te),p($),t.unbindTexture()}}}const He=[],De=[];function Qe(M){if(M.samples>0){if(Ze(M)===!1){const _=M.textures,R=M.width,O=M.height;let V=i.COLOR_BUFFER_BIT;const $=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,te=n.get(M),he=_.length>1;if(he)for(let de=0;de<_.length;de++)t.bindFramebuffer(i.FRAMEBUFFER,te.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,te.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,te.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,te.__webglFramebuffer);for(let de=0;de<_.length;de++){if(M.resolveDepthBuffer&&(M.depthBuffer&&(V|=i.DEPTH_BUFFER_BIT),M.stencilBuffer&&M.resolveStencilBuffer&&(V|=i.STENCIL_BUFFER_BIT)),he){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,te.__webglColorRenderbuffer[de]);const Ce=n.get(_[de]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ce,0)}i.blitFramebuffer(0,0,R,O,0,0,R,O,V,i.NEAREST),c===!0&&(He.length=0,De.length=0,He.push(i.COLOR_ATTACHMENT0+de),M.depthBuffer&&M.resolveDepthBuffer===!1&&(He.push($),De.push($),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,De)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,He))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),he)for(let de=0;de<_.length;de++){t.bindFramebuffer(i.FRAMEBUFFER,te.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.RENDERBUFFER,te.__webglColorRenderbuffer[de]);const Ce=n.get(_[de]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,te.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.TEXTURE_2D,Ce,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,te.__webglMultisampledFramebuffer)}else if(M.depthBuffer&&M.resolveDepthBuffer===!1&&c){const _=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function Re(M){return Math.min(s.maxSamples,M.samples)}function Ze(M){const _=n.get(M);return M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function We(M){const _=o.render.frame;h.get(M)!==_&&(h.set(M,_),M.update())}function Be(M,_){const R=M.colorSpace,O=M.format,V=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||R!==Ri&&R!==fi&&(at.getTransfer(R)===dt?(O!==In||V!==wi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",R)),_}function B(M){return typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement?(l.width=M.naturalWidth||M.width,l.height=M.naturalHeight||M.height):typeof VideoFrame<"u"&&M instanceof VideoFrame?(l.width=M.displayWidth,l.height=M.displayHeight):(l.width=M.width,l.height=M.height),l}this.allocateTextureUnit=Z,this.resetTextureUnits=I,this.setTexture2D=Y,this.setTexture2DArray=re,this.setTexture3D=ie,this.setTextureCube=ce,this.rebindTextures=Ee,this.setupRenderTarget=Ne,this.updateRenderTargetMipmap=N,this.updateMultisampleRenderTarget=Qe,this.setupDepthRenderbuffer=me,this.setupFrameBufferTexture=q,this.useMultisampledRTT=Ze}function Rv(i,e){function t(n,s=fi){let r;const o=at.getTransfer(s);if(n===wi)return i.UNSIGNED_BYTE;if(n===Bu)return i.UNSIGNED_SHORT_4_4_4_4;if(n===zu)return i.UNSIGNED_SHORT_5_5_5_1;if(n===up)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===lp)return i.BYTE;if(n===hp)return i.SHORT;if(n===Vo)return i.UNSIGNED_SHORT;if(n===Fu)return i.INT;if(n===Ks)return i.UNSIGNED_INT;if(n===gi)return i.FLOAT;if(n===sa)return i.HALF_FLOAT;if(n===dp)return i.ALPHA;if(n===fp)return i.RGB;if(n===In)return i.RGBA;if(n===pp)return i.LUMINANCE;if(n===mp)return i.LUMINANCE_ALPHA;if(n===Fs)return i.DEPTH_COMPONENT;if(n===js)return i.DEPTH_STENCIL;if(n===gp)return i.RED;if(n===ku)return i.RED_INTEGER;if(n===_p)return i.RG;if(n===Hu)return i.RG_INTEGER;if(n===Gu)return i.RGBA_INTEGER;if(n===va||n===xa||n===ya||n===Sa)if(o===dt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===va)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===xa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ya)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Sa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===va)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===xa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ya)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Sa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===yl||n===Sl||n===Ml||n===El)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===yl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Sl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ml)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===El)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===wl||n===bl||n===Tl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===wl||n===bl)return o===dt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Tl)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Al||n===Rl||n===Cl||n===Pl||n===Ll||n===Il||n===Dl||n===Nl||n===Ul||n===Ol||n===Fl||n===Bl||n===zl||n===kl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Al)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Rl)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Cl)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Pl)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ll)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Il)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Dl)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Nl)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ul)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ol)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Fl)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Bl)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===zl)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===kl)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ma||n===Hl||n===Gl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Ma)return o===dt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Hl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Gl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===vp||n===Vl||n===Wl||n===Xl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ma)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Vl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Wl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Xl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Js?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class Cv extends sn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Qn extends Ft{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Pv={type:"move"};class $a{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,n),p=this._getHandJoint(l,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Pv)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Qn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Lv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Iv=`
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

}`;class Dv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new qt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new bi({vertexShader:Lv,fragmentShader:Iv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new be(new ei(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}}class Nv extends nr{constructor(e,t){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,g=null;const v=new Dv,m=t.getContextAttributes();let p=null,w=null;const x=[],y=[],L=new Se;let C=null;const E=new sn;E.layers.enable(1),E.viewport=new _t;const D=new sn;D.layers.enable(2),D.viewport=new _t;const T=[E,D],S=new Cv;S.layers.enable(1),S.layers.enable(2);let I=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(F){let q=x[F];return q===void 0&&(q=new $a,x[F]=q),q.getTargetRaySpace()},this.getControllerGrip=function(F){let q=x[F];return q===void 0&&(q=new $a,x[F]=q),q.getGripSpace()},this.getHand=function(F){let q=x[F];return q===void 0&&(q=new $a,x[F]=q),q.getHandSpace()};function W(F){const q=y.indexOf(F.inputSource);if(q===-1)return;const ne=x[q];ne!==void 0&&(ne.update(F.inputSource,F.frame,l||o),ne.dispatchEvent({type:F.type,data:F.inputSource}))}function Y(){s.removeEventListener("select",W),s.removeEventListener("selectstart",W),s.removeEventListener("selectend",W),s.removeEventListener("squeeze",W),s.removeEventListener("squeezestart",W),s.removeEventListener("squeezeend",W),s.removeEventListener("end",Y),s.removeEventListener("inputsourceschange",re);for(let F=0;F<x.length;F++){const q=y[F];q!==null&&(y[F]=null,x[F].disconnect(q))}I=null,Z=null,v.reset(),e.setRenderTarget(p),f=null,d=null,u=null,s=null,w=null,le.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(F){r=F,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(F){a=F,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(F){l=F},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(F){if(s=F,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",W),s.addEventListener("selectstart",W),s.addEventListener("selectend",W),s.addEventListener("squeeze",W),s.addEventListener("squeezestart",W),s.addEventListener("squeezeend",W),s.addEventListener("end",Y),s.addEventListener("inputsourceschange",re),m.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(L),s.renderState.layers===void 0){const q={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,q),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),w=new qi(f.framebufferWidth,f.framebufferHeight,{format:In,type:wi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let q=null,ne=null,ae=null;m.depth&&(ae=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,q=m.stencil?js:Fs,ne=m.stencil?Js:Ks);const me={colorFormat:t.RGBA8,depthFormat:ae,scaleFactor:r};u=new XRWebGLBinding(s,t),d=u.createProjectionLayer(me),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),w=new qi(d.textureWidth,d.textureHeight,{format:In,type:wi,depthTexture:new id(d.textureWidth,d.textureHeight,ne,void 0,void 0,void 0,void 0,void 0,void 0,q),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),le.setContext(s),le.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function re(F){for(let q=0;q<F.removed.length;q++){const ne=F.removed[q],ae=y.indexOf(ne);ae>=0&&(y[ae]=null,x[ae].disconnect(ne))}for(let q=0;q<F.added.length;q++){const ne=F.added[q];let ae=y.indexOf(ne);if(ae===-1){for(let Ee=0;Ee<x.length;Ee++)if(Ee>=y.length){y.push(ne),ae=Ee;break}else if(y[Ee]===null){y[Ee]=ne,ae=Ee;break}if(ae===-1)break}const me=x[ae];me&&me.connect(ne)}}const ie=new U,ce=new U;function se(F,q,ne){ie.setFromMatrixPosition(q.matrixWorld),ce.setFromMatrixPosition(ne.matrixWorld);const ae=ie.distanceTo(ce),me=q.projectionMatrix.elements,Ee=ne.projectionMatrix.elements,Ne=me[14]/(me[10]-1),N=me[14]/(me[10]+1),He=(me[9]+1)/me[5],De=(me[9]-1)/me[5],Qe=(me[8]-1)/me[0],Re=(Ee[8]+1)/Ee[0],Ze=Ne*Qe,We=Ne*Re,Be=ae/(-Qe+Re),B=Be*-Qe;q.matrixWorld.decompose(F.position,F.quaternion,F.scale),F.translateX(B),F.translateZ(Be),F.matrixWorld.compose(F.position,F.quaternion,F.scale),F.matrixWorldInverse.copy(F.matrixWorld).invert();const M=Ne+Be,_=N+Be,R=Ze-B,O=We+(ae-B),V=He*N/_*M,$=De*N/_*M;F.projectionMatrix.makePerspective(R,O,V,$,M,_),F.projectionMatrixInverse.copy(F.projectionMatrix).invert()}function ve(F,q){q===null?F.matrixWorld.copy(F.matrix):F.matrixWorld.multiplyMatrices(q.matrixWorld,F.matrix),F.matrixWorldInverse.copy(F.matrixWorld).invert()}this.updateCamera=function(F){if(s===null)return;v.texture!==null&&(F.near=v.depthNear,F.far=v.depthFar),S.near=D.near=E.near=F.near,S.far=D.far=E.far=F.far,(I!==S.near||Z!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),I=S.near,Z=S.far,E.near=I,E.far=Z,D.near=I,D.far=Z,E.updateProjectionMatrix(),D.updateProjectionMatrix(),F.updateProjectionMatrix());const q=F.parent,ne=S.cameras;ve(S,q);for(let ae=0;ae<ne.length;ae++)ve(ne[ae],q);ne.length===2?se(S,E,D):S.projectionMatrix.copy(E.projectionMatrix),G(F,S,q)};function G(F,q,ne){ne===null?F.matrix.copy(q.matrixWorld):(F.matrix.copy(ne.matrixWorld),F.matrix.invert(),F.matrix.multiply(q.matrixWorld)),F.matrix.decompose(F.position,F.quaternion,F.scale),F.updateMatrixWorld(!0),F.projectionMatrix.copy(q.projectionMatrix),F.projectionMatrixInverse.copy(q.projectionMatrixInverse),F.isPerspectiveCamera&&(F.fov=_c*2*Math.atan(1/F.projectionMatrix.elements[5]),F.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(F){c=F,d!==null&&(d.fixedFoveation=F),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=F)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(S)};let K=null;function z(F,q){if(h=q.getViewerPose(l||o),g=q,h!==null){const ne=h.views;f!==null&&(e.setRenderTargetFramebuffer(w,f.framebuffer),e.setRenderTarget(w));let ae=!1;ne.length!==S.cameras.length&&(S.cameras.length=0,ae=!0);for(let Ee=0;Ee<ne.length;Ee++){const Ne=ne[Ee];let N=null;if(f!==null)N=f.getViewport(Ne);else{const De=u.getViewSubImage(d,Ne);N=De.viewport,Ee===0&&(e.setRenderTargetTextures(w,De.colorTexture,d.ignoreDepthValues?void 0:De.depthStencilTexture),e.setRenderTarget(w))}let He=T[Ee];He===void 0&&(He=new sn,He.layers.enable(Ee),He.viewport=new _t,T[Ee]=He),He.matrix.fromArray(Ne.transform.matrix),He.matrix.decompose(He.position,He.quaternion,He.scale),He.projectionMatrix.fromArray(Ne.projectionMatrix),He.projectionMatrixInverse.copy(He.projectionMatrix).invert(),He.viewport.set(N.x,N.y,N.width,N.height),Ee===0&&(S.matrix.copy(He.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),ae===!0&&S.cameras.push(He)}const me=s.enabledFeatures;if(me&&me.includes("depth-sensing")){const Ee=u.getDepthInformation(ne[0]);Ee&&Ee.isValid&&Ee.texture&&v.init(e,Ee,s.renderState)}}for(let ne=0;ne<x.length;ne++){const ae=y[ne],me=x[ne];ae!==null&&me!==void 0&&me.update(ae,q,l||o)}K&&K(F,q),q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:q}),g=null}const le=new td;le.setAnimationLoop(z),this.setAnimationLoop=function(F){K=F},this.dispose=function(){}}}const Oi=new Nn,Uv=new pt;function Ov(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,ju(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,w,x,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,y)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,w,x):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===jt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===jt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const w=e.get(p),x=w.envMap,y=w.envMapRotation;x&&(m.envMap.value=x,Oi.copy(y),Oi.x*=-1,Oi.y*=-1,Oi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Oi.y*=-1,Oi.z*=-1),m.envMapRotation.value.setFromMatrix4(Uv.makeRotationFromEuler(Oi)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,w,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*w,m.scale.value=x*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,w){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===jt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const w=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Fv(i,e,t,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(w,x){const y=x.program;n.uniformBlockBinding(w,y)}function l(w,x){let y=s[w.id];y===void 0&&(g(w),y=h(w),s[w.id]=y,w.addEventListener("dispose",m));const L=x.program;n.updateUBOMapping(w,L);const C=e.render.frame;r[w.id]!==C&&(d(w),r[w.id]=C)}function h(w){const x=u();w.__bindingPointIndex=x;const y=i.createBuffer(),L=w.__size,C=w.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,L,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,y),y}function u(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(w){const x=s[w.id],y=w.uniforms,L=w.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let C=0,E=y.length;C<E;C++){const D=Array.isArray(y[C])?y[C]:[y[C]];for(let T=0,S=D.length;T<S;T++){const I=D[T];if(f(I,C,T,L)===!0){const Z=I.__offset,W=Array.isArray(I.value)?I.value:[I.value];let Y=0;for(let re=0;re<W.length;re++){const ie=W[re],ce=v(ie);typeof ie=="number"||typeof ie=="boolean"?(I.__data[0]=ie,i.bufferSubData(i.UNIFORM_BUFFER,Z+Y,I.__data)):ie.isMatrix3?(I.__data[0]=ie.elements[0],I.__data[1]=ie.elements[1],I.__data[2]=ie.elements[2],I.__data[3]=0,I.__data[4]=ie.elements[3],I.__data[5]=ie.elements[4],I.__data[6]=ie.elements[5],I.__data[7]=0,I.__data[8]=ie.elements[6],I.__data[9]=ie.elements[7],I.__data[10]=ie.elements[8],I.__data[11]=0):(ie.toArray(I.__data,Y),Y+=ce.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,Z,I.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(w,x,y,L){const C=w.value,E=x+"_"+y;if(L[E]===void 0)return typeof C=="number"||typeof C=="boolean"?L[E]=C:L[E]=C.clone(),!0;{const D=L[E];if(typeof C=="number"||typeof C=="boolean"){if(D!==C)return L[E]=C,!0}else if(D.equals(C)===!1)return D.copy(C),!0}return!1}function g(w){const x=w.uniforms;let y=0;const L=16;for(let E=0,D=x.length;E<D;E++){const T=Array.isArray(x[E])?x[E]:[x[E]];for(let S=0,I=T.length;S<I;S++){const Z=T[S],W=Array.isArray(Z.value)?Z.value:[Z.value];for(let Y=0,re=W.length;Y<re;Y++){const ie=W[Y],ce=v(ie),se=y%L;se!==0&&L-se<ce.boundary&&(y+=L-se),Z.__data=new Float32Array(ce.storage/Float32Array.BYTES_PER_ELEMENT),Z.__offset=y,y+=ce.storage}}}const C=y%L;return C>0&&(y+=L-C),w.__size=y,w.__cache={},this}function v(w){const x={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(x.boundary=4,x.storage=4):w.isVector2?(x.boundary=8,x.storage=8):w.isVector3||w.isColor?(x.boundary=16,x.storage=12):w.isVector4?(x.boundary=16,x.storage=16):w.isMatrix3?(x.boundary=48,x.storage=48):w.isMatrix4?(x.boundary=64,x.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),x}function m(w){const x=w.target;x.removeEventListener("dispose",m);const y=o.indexOf(x.__bindingPointIndex);o.splice(y,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function p(){for(const w in s)i.deleteBuffer(s[w]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}class Bv{constructor(e={}){const{canvas:t=Pp(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const f=new Uint32Array(4),g=new Int32Array(4);let v=null,m=null;const p=[],w=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Cn,this.toneMapping=vi,this.toneMappingExposure=1;const x=this;let y=!1,L=0,C=0,E=null,D=-1,T=null;const S=new _t,I=new _t;let Z=null;const W=new je(0);let Y=0,re=t.width,ie=t.height,ce=1,se=null,ve=null;const G=new _t(0,0,re,ie),K=new _t(0,0,re,ie);let z=!1;const le=new Gc;let F=!1,q=!1;const ne=new pt,ae=new U,me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ee=!1;function Ne(){return E===null?ce:1}let N=n;function He(A,H){return t.getContext(A,H)}try{const A={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Fc}`),t.addEventListener("webglcontextlost",ee,!1),t.addEventListener("webglcontextrestored",k,!1),t.addEventListener("webglcontextcreationerror",j,!1),N===null){const H="webgl2";if(N=He(H,A),N===null)throw He(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let De,Qe,Re,Ze,We,Be,B,M,_,R,O,V,$,te,he,de,Ce,fe,Me,Xe,Te,ge,Ue,Ge;function Ke(){De=new Z0(N),De.init(),ge=new Rv(N,De),Qe=new k0(N,De,e,ge),Re=new Tv(N),Ze=new $0(N),We=new dv,Be=new Av(N,De,Re,We,Qe,ge,Ze),B=new G0(x),M=new X0(x),_=new nm(N),Ue=new B0(N,_),R=new Y0(N,_,Ze,Ue),O=new J0(N,R,_,Ze),Me=new K0(N,Qe,Be),de=new H0(We),V=new uv(x,B,M,De,Qe,Ue,de),$=new Ov(x,We),te=new pv,he=new yv(De),fe=new F0(x,B,M,Re,O,d,c),Ce=new bv(x,O,Qe),Ge=new Fv(N,Ze,Qe,Re),Xe=new z0(N,De,Ze),Te=new q0(N,De,Ze),Ze.programs=V.programs,x.capabilities=Qe,x.extensions=De,x.properties=We,x.renderLists=te,x.shadowMap=Ce,x.state=Re,x.info=Ze}Ke();const b=new Nv(x,N);this.xr=b,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const A=De.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=De.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return ce},this.setPixelRatio=function(A){A!==void 0&&(ce=A,this.setSize(re,ie,!1))},this.getSize=function(A){return A.set(re,ie)},this.setSize=function(A,H,J=!0){if(b.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}re=A,ie=H,t.width=Math.floor(A*ce),t.height=Math.floor(H*ce),J===!0&&(t.style.width=A+"px",t.style.height=H+"px"),this.setViewport(0,0,A,H)},this.getDrawingBufferSize=function(A){return A.set(re*ce,ie*ce).floor()},this.setDrawingBufferSize=function(A,H,J){re=A,ie=H,ce=J,t.width=Math.floor(A*J),t.height=Math.floor(H*J),this.setViewport(0,0,A,H)},this.getCurrentViewport=function(A){return A.copy(S)},this.getViewport=function(A){return A.copy(G)},this.setViewport=function(A,H,J,Q){A.isVector4?G.set(A.x,A.y,A.z,A.w):G.set(A,H,J,Q),Re.viewport(S.copy(G).multiplyScalar(ce).round())},this.getScissor=function(A){return A.copy(K)},this.setScissor=function(A,H,J,Q){A.isVector4?K.set(A.x,A.y,A.z,A.w):K.set(A,H,J,Q),Re.scissor(I.copy(K).multiplyScalar(ce).round())},this.getScissorTest=function(){return z},this.setScissorTest=function(A){Re.setScissorTest(z=A)},this.setOpaqueSort=function(A){se=A},this.setTransparentSort=function(A){ve=A},this.getClearColor=function(A){return A.copy(fe.getClearColor())},this.setClearColor=function(){fe.setClearColor.apply(fe,arguments)},this.getClearAlpha=function(){return fe.getClearAlpha()},this.setClearAlpha=function(){fe.setClearAlpha.apply(fe,arguments)},this.clear=function(A=!0,H=!0,J=!0){let Q=0;if(A){let X=!1;if(E!==null){const _e=E.texture.format;X=_e===Gu||_e===Hu||_e===ku}if(X){const _e=E.texture.type,we=_e===wi||_e===Ks||_e===Vo||_e===Js||_e===Bu||_e===zu,Ae=fe.getClearColor(),Le=fe.getClearAlpha(),ke=Ae.r,Ve=Ae.g,Oe=Ae.b;we?(f[0]=ke,f[1]=Ve,f[2]=Oe,f[3]=Le,N.clearBufferuiv(N.COLOR,0,f)):(g[0]=ke,g[1]=Ve,g[2]=Oe,g[3]=Le,N.clearBufferiv(N.COLOR,0,g))}else Q|=N.COLOR_BUFFER_BIT}H&&(Q|=N.DEPTH_BUFFER_BIT),J&&(Q|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ee,!1),t.removeEventListener("webglcontextrestored",k,!1),t.removeEventListener("webglcontextcreationerror",j,!1),te.dispose(),he.dispose(),We.dispose(),B.dispose(),M.dispose(),O.dispose(),Ue.dispose(),Ge.dispose(),V.dispose(),b.dispose(),b.removeEventListener("sessionstart",yt),b.removeEventListener("sessionend",bn),Ci.stop()};function ee(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function k(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const A=Ze.autoReset,H=Ce.enabled,J=Ce.autoUpdate,Q=Ce.needsUpdate,X=Ce.type;Ke(),Ze.autoReset=A,Ce.enabled=H,Ce.autoUpdate=J,Ce.needsUpdate=Q,Ce.type=X}function j(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ue(A){const H=A.target;H.removeEventListener("dispose",ue),ye(H)}function ye(A){ze(A),We.remove(A)}function ze(A){const H=We.get(A).programs;H!==void 0&&(H.forEach(function(J){V.releaseProgram(J)}),A.isShaderMaterial&&V.releaseShaderCache(A))}this.renderBufferDirect=function(A,H,J,Q,X,_e){H===null&&(H=me);const we=X.isMesh&&X.matrixWorld.determinant()<0,Ae=Sf(A,H,J,Q,X);Re.setMaterial(Q,we);let Le=J.index,ke=1;if(Q.wireframe===!0){if(Le=R.getWireframeAttribute(J),Le===void 0)return;ke=2}const Ve=J.drawRange,Oe=J.attributes.position;let st=Ve.start*ke,St=(Ve.start+Ve.count)*ke;_e!==null&&(st=Math.max(st,_e.start*ke),St=Math.min(St,(_e.start+_e.count)*ke)),Le!==null?(st=Math.max(st,0),St=Math.min(St,Le.count)):Oe!=null&&(st=Math.max(st,0),St=Math.min(St,Oe.count));const Mt=St-st;if(Mt<0||Mt===1/0)return;Ue.setup(X,Q,Ae,J,Le);let Qt,ot=Xe;if(Le!==null&&(Qt=_.get(Le),ot=Te,ot.setIndex(Qt)),X.isMesh)Q.wireframe===!0?(Re.setLineWidth(Q.wireframeLinewidth*Ne()),ot.setMode(N.LINES)):ot.setMode(N.TRIANGLES);else if(X.isLine){let Ie=Q.linewidth;Ie===void 0&&(Ie=1),Re.setLineWidth(Ie*Ne()),X.isLineSegments?ot.setMode(N.LINES):X.isLineLoop?ot.setMode(N.LINE_LOOP):ot.setMode(N.LINE_STRIP)}else X.isPoints?ot.setMode(N.POINTS):X.isSprite&&ot.setMode(N.TRIANGLES);if(X.isBatchedMesh)X._multiDrawInstances!==null?ot.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances):ot.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else if(X.isInstancedMesh)ot.renderInstances(st,Mt,X.count);else if(J.isInstancedBufferGeometry){const Ie=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Xt=Math.min(J.instanceCount,Ie);ot.renderInstances(st,Mt,Xt)}else ot.render(st,Mt)};function it(A,H,J){A.transparent===!0&&A.side===rn&&A.forceSinglePass===!1?(A.side=jt,A.needsUpdate=!0,io(A,H,J),A.side=Ei,A.needsUpdate=!0,io(A,H,J),A.side=rn):io(A,H,J)}this.compile=function(A,H,J=null){J===null&&(J=A),m=he.get(J),m.init(H),w.push(m),J.traverseVisible(function(X){X.isLight&&X.layers.test(H.layers)&&(m.pushLight(X),X.castShadow&&m.pushShadow(X))}),A!==J&&A.traverseVisible(function(X){X.isLight&&X.layers.test(H.layers)&&(m.pushLight(X),X.castShadow&&m.pushShadow(X))}),m.setupLights();const Q=new Set;return A.traverse(function(X){const _e=X.material;if(_e)if(Array.isArray(_e))for(let we=0;we<_e.length;we++){const Ae=_e[we];it(Ae,J,X),Q.add(Ae)}else it(_e,J,X),Q.add(_e)}),w.pop(),m=null,Q},this.compileAsync=function(A,H,J=null){const Q=this.compile(A,H,J);return new Promise(X=>{function _e(){if(Q.forEach(function(we){We.get(we).currentProgram.isReady()&&Q.delete(we)}),Q.size===0){X(A);return}setTimeout(_e,10)}De.get("KHR_parallel_shader_compile")!==null?_e():setTimeout(_e,10)})};let mt=null;function et(A){mt&&mt(A)}function yt(){Ci.stop()}function bn(){Ci.start()}const Ci=new td;Ci.setAnimationLoop(et),typeof self<"u"&&Ci.setContext(self),this.setAnimationLoop=function(A){mt=A,b.setAnimationLoop(A),A===null?Ci.stop():Ci.start()},b.addEventListener("sessionstart",yt),b.addEventListener("sessionend",bn),this.render=function(A,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),b.enabled===!0&&b.isPresenting===!0&&(b.cameraAutoUpdate===!0&&b.updateCamera(H),H=b.getCamera()),A.isScene===!0&&A.onBeforeRender(x,A,H,E),m=he.get(A,w.length),m.init(H),w.push(m),ne.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),le.setFromProjectionMatrix(ne),q=this.localClippingEnabled,F=de.init(this.clippingPlanes,q),v=te.get(A,p.length),v.init(),p.push(v),b.enabled===!0&&b.isPresenting===!0){const _e=x.xr.getDepthSensingMesh();_e!==null&&da(_e,H,-1/0,x.sortObjects)}da(A,H,0,x.sortObjects),v.finish(),x.sortObjects===!0&&v.sort(se,ve),Ee=b.enabled===!1||b.isPresenting===!1||b.hasDepthSensing()===!1,Ee&&fe.addToRenderList(v,A),this.info.render.frame++,F===!0&&de.beginShadows();const J=m.state.shadowsArray;Ce.render(J,A,H),F===!0&&de.endShadows(),this.info.autoReset===!0&&this.info.reset();const Q=v.opaque,X=v.transmissive;if(m.setupLights(),H.isArrayCamera){const _e=H.cameras;if(X.length>0)for(let we=0,Ae=_e.length;we<Ae;we++){const Le=_e[we];hl(Q,X,A,Le)}Ee&&fe.render(A);for(let we=0,Ae=_e.length;we<Ae;we++){const Le=_e[we];ll(v,A,Le,Le.viewport)}}else X.length>0&&hl(Q,X,A,H),Ee&&fe.render(A),ll(v,A,H);E!==null&&(Be.updateMultisampleRenderTarget(E),Be.updateRenderTargetMipmap(E)),A.isScene===!0&&A.onAfterRender(x,A,H),Ue.resetDefaultState(),D=-1,T=null,w.pop(),w.length>0?(m=w[w.length-1],F===!0&&de.setGlobalState(x.clippingPlanes,m.state.camera)):m=null,p.pop(),p.length>0?v=p[p.length-1]:v=null};function da(A,H,J,Q){if(A.visible===!1)return;if(A.layers.test(H.layers)){if(A.isGroup)J=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(H);else if(A.isLight)m.pushLight(A),A.castShadow&&m.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||le.intersectsSprite(A)){Q&&ae.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ne);const we=O.update(A),Ae=A.material;Ae.visible&&v.push(A,we,Ae,J,ae.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||le.intersectsObject(A))){const we=O.update(A),Ae=A.material;if(Q&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),ae.copy(A.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),ae.copy(we.boundingSphere.center)),ae.applyMatrix4(A.matrixWorld).applyMatrix4(ne)),Array.isArray(Ae)){const Le=we.groups;for(let ke=0,Ve=Le.length;ke<Ve;ke++){const Oe=Le[ke],st=Ae[Oe.materialIndex];st&&st.visible&&v.push(A,we,st,J,ae.z,Oe)}}else Ae.visible&&v.push(A,we,Ae,J,ae.z,null)}}const _e=A.children;for(let we=0,Ae=_e.length;we<Ae;we++)da(_e[we],H,J,Q)}function ll(A,H,J,Q){const X=A.opaque,_e=A.transmissive,we=A.transparent;m.setupLightsView(J),F===!0&&de.setGlobalState(x.clippingPlanes,J),Q&&Re.viewport(S.copy(Q)),X.length>0&&no(X,H,J),_e.length>0&&no(_e,H,J),we.length>0&&no(we,H,J),Re.buffers.depth.setTest(!0),Re.buffers.depth.setMask(!0),Re.buffers.color.setMask(!0),Re.setPolygonOffset(!1)}function hl(A,H,J,Q){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[Q.id]===void 0&&(m.state.transmissionRenderTarget[Q.id]=new qi(1,1,{generateMipmaps:!0,type:De.has("EXT_color_buffer_half_float")||De.has("EXT_color_buffer_float")?sa:wi,minFilter:Xi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:at.workingColorSpace}));const _e=m.state.transmissionRenderTarget[Q.id],we=Q.viewport||S;_e.setSize(we.z,we.w);const Ae=x.getRenderTarget();x.setRenderTarget(_e),x.getClearColor(W),Y=x.getClearAlpha(),Y<1&&x.setClearColor(16777215,.5),Ee?fe.render(J):x.clear();const Le=x.toneMapping;x.toneMapping=vi;const ke=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),m.setupLightsView(Q),F===!0&&de.setGlobalState(x.clippingPlanes,Q),no(A,J,Q),Be.updateMultisampleRenderTarget(_e),Be.updateRenderTargetMipmap(_e),De.has("WEBGL_multisampled_render_to_texture")===!1){let Ve=!1;for(let Oe=0,st=H.length;Oe<st;Oe++){const St=H[Oe],Mt=St.object,Qt=St.geometry,ot=St.material,Ie=St.group;if(ot.side===rn&&Mt.layers.test(Q.layers)){const Xt=ot.side;ot.side=jt,ot.needsUpdate=!0,ul(Mt,J,Q,Qt,ot,Ie),ot.side=Xt,ot.needsUpdate=!0,Ve=!0}}Ve===!0&&(Be.updateMultisampleRenderTarget(_e),Be.updateRenderTargetMipmap(_e))}x.setRenderTarget(Ae),x.setClearColor(W,Y),ke!==void 0&&(Q.viewport=ke),x.toneMapping=Le}function no(A,H,J){const Q=H.isScene===!0?H.overrideMaterial:null;for(let X=0,_e=A.length;X<_e;X++){const we=A[X],Ae=we.object,Le=we.geometry,ke=Q===null?we.material:Q,Ve=we.group;Ae.layers.test(J.layers)&&ul(Ae,H,J,Le,ke,Ve)}}function ul(A,H,J,Q,X,_e){A.onBeforeRender(x,H,J,Q,X,_e),A.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),X.onBeforeRender(x,H,J,Q,A,_e),X.transparent===!0&&X.side===rn&&X.forceSinglePass===!1?(X.side=jt,X.needsUpdate=!0,x.renderBufferDirect(J,H,Q,X,A,_e),X.side=Ei,X.needsUpdate=!0,x.renderBufferDirect(J,H,Q,X,A,_e),X.side=rn):x.renderBufferDirect(J,H,Q,X,A,_e),A.onAfterRender(x,H,J,Q,X,_e)}function io(A,H,J){H.isScene!==!0&&(H=me);const Q=We.get(A),X=m.state.lights,_e=m.state.shadowsArray,we=X.state.version,Ae=V.getParameters(A,X.state,_e,H,J),Le=V.getProgramCacheKey(Ae);let ke=Q.programs;Q.environment=A.isMeshStandardMaterial?H.environment:null,Q.fog=H.fog,Q.envMap=(A.isMeshStandardMaterial?M:B).get(A.envMap||Q.environment),Q.envMapRotation=Q.environment!==null&&A.envMap===null?H.environmentRotation:A.envMapRotation,ke===void 0&&(A.addEventListener("dispose",ue),ke=new Map,Q.programs=ke);let Ve=ke.get(Le);if(Ve!==void 0){if(Q.currentProgram===Ve&&Q.lightsStateVersion===we)return fl(A,Ae),Ve}else Ae.uniforms=V.getUniforms(A),A.onBuild(J,Ae,x),A.onBeforeCompile(Ae,x),Ve=V.acquireProgram(Ae,Le),ke.set(Le,Ve),Q.uniforms=Ae.uniforms;const Oe=Q.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Oe.clippingPlanes=de.uniform),fl(A,Ae),Q.needsLights=Ef(A),Q.lightsStateVersion=we,Q.needsLights&&(Oe.ambientLightColor.value=X.state.ambient,Oe.lightProbe.value=X.state.probe,Oe.directionalLights.value=X.state.directional,Oe.directionalLightShadows.value=X.state.directionalShadow,Oe.spotLights.value=X.state.spot,Oe.spotLightShadows.value=X.state.spotShadow,Oe.rectAreaLights.value=X.state.rectArea,Oe.ltc_1.value=X.state.rectAreaLTC1,Oe.ltc_2.value=X.state.rectAreaLTC2,Oe.pointLights.value=X.state.point,Oe.pointLightShadows.value=X.state.pointShadow,Oe.hemisphereLights.value=X.state.hemi,Oe.directionalShadowMap.value=X.state.directionalShadowMap,Oe.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Oe.spotShadowMap.value=X.state.spotShadowMap,Oe.spotLightMatrix.value=X.state.spotLightMatrix,Oe.spotLightMap.value=X.state.spotLightMap,Oe.pointShadowMap.value=X.state.pointShadowMap,Oe.pointShadowMatrix.value=X.state.pointShadowMatrix),Q.currentProgram=Ve,Q.uniformsList=null,Ve}function dl(A){if(A.uniformsList===null){const H=A.currentProgram.getUniforms();A.uniformsList=Oo.seqWithValue(H.seq,A.uniforms)}return A.uniformsList}function fl(A,H){const J=We.get(A);J.outputColorSpace=H.outputColorSpace,J.batching=H.batching,J.batchingColor=H.batchingColor,J.instancing=H.instancing,J.instancingColor=H.instancingColor,J.instancingMorph=H.instancingMorph,J.skinning=H.skinning,J.morphTargets=H.morphTargets,J.morphNormals=H.morphNormals,J.morphColors=H.morphColors,J.morphTargetsCount=H.morphTargetsCount,J.numClippingPlanes=H.numClippingPlanes,J.numIntersection=H.numClipIntersection,J.vertexAlphas=H.vertexAlphas,J.vertexTangents=H.vertexTangents,J.toneMapping=H.toneMapping}function Sf(A,H,J,Q,X){H.isScene!==!0&&(H=me),Be.resetTextureUnits();const _e=H.fog,we=Q.isMeshStandardMaterial?H.environment:null,Ae=E===null?x.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:Ri,Le=(Q.isMeshStandardMaterial?M:B).get(Q.envMap||we),ke=Q.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,Ve=!!J.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),Oe=!!J.morphAttributes.position,st=!!J.morphAttributes.normal,St=!!J.morphAttributes.color;let Mt=vi;Q.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(Mt=x.toneMapping);const Qt=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,ot=Qt!==void 0?Qt.length:0,Ie=We.get(Q),Xt=m.state.lights;if(F===!0&&(q===!0||A!==T)){const an=A===T&&Q.id===D;de.setState(Q,A,an)}let ct=!1;Q.version===Ie.__version?(Ie.needsLights&&Ie.lightsStateVersion!==Xt.state.version||Ie.outputColorSpace!==Ae||X.isBatchedMesh&&Ie.batching===!1||!X.isBatchedMesh&&Ie.batching===!0||X.isBatchedMesh&&Ie.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&Ie.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&Ie.instancing===!1||!X.isInstancedMesh&&Ie.instancing===!0||X.isSkinnedMesh&&Ie.skinning===!1||!X.isSkinnedMesh&&Ie.skinning===!0||X.isInstancedMesh&&Ie.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Ie.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Ie.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Ie.instancingMorph===!1&&X.morphTexture!==null||Ie.envMap!==Le||Q.fog===!0&&Ie.fog!==_e||Ie.numClippingPlanes!==void 0&&(Ie.numClippingPlanes!==de.numPlanes||Ie.numIntersection!==de.numIntersection)||Ie.vertexAlphas!==ke||Ie.vertexTangents!==Ve||Ie.morphTargets!==Oe||Ie.morphNormals!==st||Ie.morphColors!==St||Ie.toneMapping!==Mt||Ie.morphTargetsCount!==ot)&&(ct=!0):(ct=!0,Ie.__version=Q.version);let Bn=Ie.currentProgram;ct===!0&&(Bn=io(Q,H,X));let so=!1,Pi=!1,fa=!1;const Dt=Bn.getUniforms(),ti=Ie.uniforms;if(Re.useProgram(Bn.program)&&(so=!0,Pi=!0,fa=!0),Q.id!==D&&(D=Q.id,Pi=!0),so||T!==A){Dt.setValue(N,"projectionMatrix",A.projectionMatrix),Dt.setValue(N,"viewMatrix",A.matrixWorldInverse);const an=Dt.map.cameraPosition;an!==void 0&&an.setValue(N,ae.setFromMatrixPosition(A.matrixWorld)),Qe.logarithmicDepthBuffer&&Dt.setValue(N,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&Dt.setValue(N,"isOrthographic",A.isOrthographicCamera===!0),T!==A&&(T=A,Pi=!0,fa=!0)}if(X.isSkinnedMesh){Dt.setOptional(N,X,"bindMatrix"),Dt.setOptional(N,X,"bindMatrixInverse");const an=X.skeleton;an&&(an.boneTexture===null&&an.computeBoneTexture(),Dt.setValue(N,"boneTexture",an.boneTexture,Be))}X.isBatchedMesh&&(Dt.setOptional(N,X,"batchingTexture"),Dt.setValue(N,"batchingTexture",X._matricesTexture,Be),Dt.setOptional(N,X,"batchingColorTexture"),X._colorsTexture!==null&&Dt.setValue(N,"batchingColorTexture",X._colorsTexture,Be));const pa=J.morphAttributes;if((pa.position!==void 0||pa.normal!==void 0||pa.color!==void 0)&&Me.update(X,J,Bn),(Pi||Ie.receiveShadow!==X.receiveShadow)&&(Ie.receiveShadow=X.receiveShadow,Dt.setValue(N,"receiveShadow",X.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(ti.envMap.value=Le,ti.flipEnvMap.value=Le.isCubeTexture&&Le.isRenderTargetTexture===!1?-1:1),Q.isMeshStandardMaterial&&Q.envMap===null&&H.environment!==null&&(ti.envMapIntensity.value=H.environmentIntensity),Pi&&(Dt.setValue(N,"toneMappingExposure",x.toneMappingExposure),Ie.needsLights&&Mf(ti,fa),_e&&Q.fog===!0&&$.refreshFogUniforms(ti,_e),$.refreshMaterialUniforms(ti,Q,ce,ie,m.state.transmissionRenderTarget[A.id]),Oo.upload(N,dl(Ie),ti,Be)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(Oo.upload(N,dl(Ie),ti,Be),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&Dt.setValue(N,"center",X.center),Dt.setValue(N,"modelViewMatrix",X.modelViewMatrix),Dt.setValue(N,"normalMatrix",X.normalMatrix),Dt.setValue(N,"modelMatrix",X.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){const an=Q.uniformsGroups;for(let ma=0,wf=an.length;ma<wf;ma++){const pl=an[ma];Ge.update(pl,Bn),Ge.bind(pl,Bn)}}return Bn}function Mf(A,H){A.ambientLightColor.needsUpdate=H,A.lightProbe.needsUpdate=H,A.directionalLights.needsUpdate=H,A.directionalLightShadows.needsUpdate=H,A.pointLights.needsUpdate=H,A.pointLightShadows.needsUpdate=H,A.spotLights.needsUpdate=H,A.spotLightShadows.needsUpdate=H,A.rectAreaLights.needsUpdate=H,A.hemisphereLights.needsUpdate=H}function Ef(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(A,H,J){We.get(A.texture).__webglTexture=H,We.get(A.depthTexture).__webglTexture=J;const Q=We.get(A);Q.__hasExternalTextures=!0,Q.__autoAllocateDepthBuffer=J===void 0,Q.__autoAllocateDepthBuffer||De.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,H){const J=We.get(A);J.__webglFramebuffer=H,J.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(A,H=0,J=0){E=A,L=H,C=J;let Q=!0,X=null,_e=!1,we=!1;if(A){const Le=We.get(A);Le.__useDefaultFramebuffer!==void 0?(Re.bindFramebuffer(N.FRAMEBUFFER,null),Q=!1):Le.__webglFramebuffer===void 0?Be.setupRenderTarget(A):Le.__hasExternalTextures&&Be.rebindTextures(A,We.get(A.texture).__webglTexture,We.get(A.depthTexture).__webglTexture);const ke=A.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(we=!0);const Ve=We.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ve[H])?X=Ve[H][J]:X=Ve[H],_e=!0):A.samples>0&&Be.useMultisampledRTT(A)===!1?X=We.get(A).__webglMultisampledFramebuffer:Array.isArray(Ve)?X=Ve[J]:X=Ve,S.copy(A.viewport),I.copy(A.scissor),Z=A.scissorTest}else S.copy(G).multiplyScalar(ce).floor(),I.copy(K).multiplyScalar(ce).floor(),Z=z;if(Re.bindFramebuffer(N.FRAMEBUFFER,X)&&Q&&Re.drawBuffers(A,X),Re.viewport(S),Re.scissor(I),Re.setScissorTest(Z),_e){const Le=We.get(A.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+H,Le.__webglTexture,J)}else if(we){const Le=We.get(A.texture),ke=H||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,Le.__webglTexture,J||0,ke)}D=-1},this.readRenderTargetPixels=function(A,H,J,Q,X,_e,we){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=We.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&we!==void 0&&(Ae=Ae[we]),Ae){Re.bindFramebuffer(N.FRAMEBUFFER,Ae);try{const Le=A.texture,ke=Le.format,Ve=Le.type;if(!Qe.textureFormatReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Qe.textureTypeReadable(Ve)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=A.width-Q&&J>=0&&J<=A.height-X&&N.readPixels(H,J,Q,X,ge.convert(ke),ge.convert(Ve),_e)}finally{const Le=E!==null?We.get(E).__webglFramebuffer:null;Re.bindFramebuffer(N.FRAMEBUFFER,Le)}}},this.readRenderTargetPixelsAsync=async function(A,H,J,Q,X,_e,we){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ae=We.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&we!==void 0&&(Ae=Ae[we]),Ae){Re.bindFramebuffer(N.FRAMEBUFFER,Ae);try{const Le=A.texture,ke=Le.format,Ve=Le.type;if(!Qe.textureFormatReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Qe.textureTypeReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(H>=0&&H<=A.width-Q&&J>=0&&J<=A.height-X){const Oe=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Oe),N.bufferData(N.PIXEL_PACK_BUFFER,_e.byteLength,N.STREAM_READ),N.readPixels(H,J,Q,X,ge.convert(ke),ge.convert(Ve),0),N.flush();const st=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);await Lp(N,st,4);try{N.bindBuffer(N.PIXEL_PACK_BUFFER,Oe),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,_e)}finally{N.deleteBuffer(Oe),N.deleteSync(st)}return _e}}finally{const Le=E!==null?We.get(E).__webglFramebuffer:null;Re.bindFramebuffer(N.FRAMEBUFFER,Le)}}},this.copyFramebufferToTexture=function(A,H=null,J=0){A.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),H=arguments[0]||null,A=arguments[1]);const Q=Math.pow(2,-J),X=Math.floor(A.image.width*Q),_e=Math.floor(A.image.height*Q),we=H!==null?H.x:0,Ae=H!==null?H.y:0;Be.setTexture2D(A,0),N.copyTexSubImage2D(N.TEXTURE_2D,J,0,0,we,Ae,X,_e),Re.unbindTexture()},this.copyTextureToTexture=function(A,H,J=null,Q=null,X=0){A.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),Q=arguments[0]||null,A=arguments[1],H=arguments[2],X=arguments[3]||0,J=null);let _e,we,Ae,Le,ke,Ve;J!==null?(_e=J.max.x-J.min.x,we=J.max.y-J.min.y,Ae=J.min.x,Le=J.min.y):(_e=A.image.width,we=A.image.height,Ae=0,Le=0),Q!==null?(ke=Q.x,Ve=Q.y):(ke=0,Ve=0);const Oe=ge.convert(H.format),st=ge.convert(H.type);Be.setTexture2D(H,0),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,H.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,H.unpackAlignment);const St=N.getParameter(N.UNPACK_ROW_LENGTH),Mt=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Qt=N.getParameter(N.UNPACK_SKIP_PIXELS),ot=N.getParameter(N.UNPACK_SKIP_ROWS),Ie=N.getParameter(N.UNPACK_SKIP_IMAGES),Xt=A.isCompressedTexture?A.mipmaps[X]:A.image;N.pixelStorei(N.UNPACK_ROW_LENGTH,Xt.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Xt.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Ae),N.pixelStorei(N.UNPACK_SKIP_ROWS,Le),A.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,X,ke,Ve,_e,we,Oe,st,Xt.data):A.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,X,ke,Ve,Xt.width,Xt.height,Oe,Xt.data):N.texSubImage2D(N.TEXTURE_2D,X,ke,Ve,Oe,st,Xt),N.pixelStorei(N.UNPACK_ROW_LENGTH,St),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Mt),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Qt),N.pixelStorei(N.UNPACK_SKIP_ROWS,ot),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Ie),X===0&&H.generateMipmaps&&N.generateMipmap(N.TEXTURE_2D),Re.unbindTexture()},this.copyTextureToTexture3D=function(A,H,J=null,Q=null,X=0){A.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),J=arguments[0]||null,Q=arguments[1]||null,A=arguments[2],H=arguments[3],X=arguments[4]||0);let _e,we,Ae,Le,ke,Ve,Oe,st,St;const Mt=A.isCompressedTexture?A.mipmaps[X]:A.image;J!==null?(_e=J.max.x-J.min.x,we=J.max.y-J.min.y,Ae=J.max.z-J.min.z,Le=J.min.x,ke=J.min.y,Ve=J.min.z):(_e=Mt.width,we=Mt.height,Ae=Mt.depth,Le=0,ke=0,Ve=0),Q!==null?(Oe=Q.x,st=Q.y,St=Q.z):(Oe=0,st=0,St=0);const Qt=ge.convert(H.format),ot=ge.convert(H.type);let Ie;if(H.isData3DTexture)Be.setTexture3D(H,0),Ie=N.TEXTURE_3D;else if(H.isDataArrayTexture||H.isCompressedArrayTexture)Be.setTexture2DArray(H,0),Ie=N.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,H.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,H.unpackAlignment);const Xt=N.getParameter(N.UNPACK_ROW_LENGTH),ct=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Bn=N.getParameter(N.UNPACK_SKIP_PIXELS),so=N.getParameter(N.UNPACK_SKIP_ROWS),Pi=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,Mt.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Mt.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Le),N.pixelStorei(N.UNPACK_SKIP_ROWS,ke),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Ve),A.isDataTexture||A.isData3DTexture?N.texSubImage3D(Ie,X,Oe,st,St,_e,we,Ae,Qt,ot,Mt.data):H.isCompressedArrayTexture?N.compressedTexSubImage3D(Ie,X,Oe,st,St,_e,we,Ae,Qt,Mt.data):N.texSubImage3D(Ie,X,Oe,st,St,_e,we,Ae,Qt,ot,Mt),N.pixelStorei(N.UNPACK_ROW_LENGTH,Xt),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ct),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Bn),N.pixelStorei(N.UNPACK_SKIP_ROWS,so),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Pi),X===0&&H.generateMipmaps&&N.generateMipmap(Ie),Re.unbindTexture()},this.initRenderTarget=function(A){We.get(A).__webglFramebuffer===void 0&&Be.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?Be.setTextureCube(A,0):A.isData3DTexture?Be.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?Be.setTexture2DArray(A,0):Be.setTexture2D(A,0),Re.unbindTexture()},this.resetState=function(){L=0,C=0,E=null,Re.reset(),Ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Bc?"display-p3":"srgb",t.unpackColorSpace=at.workingColorSpace===ra?"display-p3":"srgb"}}class Wc{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new je(e),this.density=t}clone(){return new Wc(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class zv extends Ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Nn,this.environmentIntensity=1,this.environmentRotation=new Nn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class kv{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=gc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=xi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return zc("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=xi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=xi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Zt=new U;class $o{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix4(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyNormalMatrix(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.transformDirection(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Ln(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ht(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ln(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ln(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ln(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ln(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),s=ht(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),s=ht(s,this.array),r=ht(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Mn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new $o(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class ld extends ir{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new je(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let _s;const ur=new U,vs=new U,xs=new U,ys=new Se,dr=new Se,hd=new pt,Ro=new U,fr=new U,Co=new U,Uh=new Se,Ka=new Se,Oh=new Se;class Hv extends Ft{constructor(e=new ld){if(super(),this.isSprite=!0,this.type="Sprite",_s===void 0){_s=new on;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new kv(t,5);_s.setIndex([0,1,2,0,2,3]),_s.setAttribute("position",new $o(n,3,0,!1)),_s.setAttribute("uv",new $o(n,2,3,!1))}this.geometry=_s,this.material=e,this.center=new Se(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),vs.setFromMatrixScale(this.matrixWorld),hd.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),xs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&vs.multiplyScalar(-xs.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const o=this.center;Po(Ro.set(-.5,-.5,0),xs,o,vs,s,r),Po(fr.set(.5,-.5,0),xs,o,vs,s,r),Po(Co.set(.5,.5,0),xs,o,vs,s,r),Uh.set(0,0),Ka.set(1,0),Oh.set(1,1);let a=e.ray.intersectTriangle(Ro,fr,Co,!1,ur);if(a===null&&(Po(fr.set(-.5,.5,0),xs,o,vs,s,r),Ka.set(0,1),a=e.ray.intersectTriangle(Ro,Co,fr,!1,ur),a===null))return;const c=e.ray.origin.distanceTo(ur);c<e.near||c>e.far||t.push({distance:c,point:ur.clone(),uv:yn.getInterpolation(ur,Ro,fr,Co,Uh,Ka,Oh,new Se),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Po(i,e,t,n,s,r){ys.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(dr.x=r*ys.x-s*ys.y,dr.y=s*ys.x+r*ys.y):dr.copy(ys),i.copy(e),i.x+=dr.x,i.y+=dr.y,i.applyMatrix4(hd)}class aa extends qt{constructor(e,t,n,s,r,o,a,c,l){super(e,t,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Fn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let s=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);const h=n[s],d=n[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=t||(o.isVector2?new Se:new U);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new U,s=[],r=[],o=[],a=new U,c=new pt;for(let f=0;f<=e;f++){const g=f/e;s[f]=this.getTangentAt(g,new U)}r[0]=new U,o[0]=new U;let l=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(zt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(zt(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Xc extends Fn{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new Se){const n=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+e*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Gv extends Xc{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Zc(){let i=0,e=0,t=0,n=0;function s(r,o,a,c){i=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let d=(o-r)/l-(a-r)/(l+h)+(a-o)/h,f=(a-o)/h-(c-o)/(h+u)+(c-a)/u;d*=h,f*=h,s(o,a,d,f)},calc:function(r){const o=r*r,a=o*r;return i+e*r+t*o+n*a}}}const Lo=new U,Ja=new Zc,ja=new Zc,Qa=new Zc;class Vv extends Fn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new U){const n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(Lo.subVectors(s[0],s[1]).add(s[0]),l=Lo);const u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Lo.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Lo),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(u),f),v=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),Ja.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,g,v,m),ja.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,g,v,m),Qa.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,g,v,m)}else this.curveType==="catmullrom"&&(Ja.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),ja.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),Qa.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(Ja.calc(c),ja.calc(c),Qa.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new U().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Fh(i,e,t,n,s){const r=(n-e)*.5,o=(s-t)*.5,a=i*i,c=i*a;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*a+r*i+t}function Wv(i,e){const t=1-i;return t*t*e}function Xv(i,e){return 2*(1-i)*i*e}function Zv(i,e){return i*i*e}function Sr(i,e,t,n){return Wv(i,e)+Xv(i,t)+Zv(i,n)}function Yv(i,e){const t=1-i;return t*t*t*e}function qv(i,e){const t=1-i;return 3*t*t*i*e}function $v(i,e){return 3*(1-i)*i*i*e}function Kv(i,e){return i*i*i*e}function Mr(i,e,t,n,s){return Yv(i,e)+qv(i,t)+$v(i,n)+Kv(i,s)}class ud extends Fn{constructor(e=new Se,t=new Se,n=new Se,s=new Se){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new Se){const n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Mr(e,s.x,r.x,o.x,a.x),Mr(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Jv extends Fn{constructor(e=new U,t=new U,n=new U,s=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new U){const n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Mr(e,s.x,r.x,o.x,a.x),Mr(e,s.y,r.y,o.y,a.y),Mr(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class dd extends Fn{constructor(e=new Se,t=new Se){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Se){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Se){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class jv extends Fn{constructor(e=new U,t=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new U){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new U){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class fd extends Fn{constructor(e=new Se,t=new Se,n=new Se){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Se){const n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Sr(e,s.x,r.x,o.x),Sr(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Qv extends Fn{constructor(e=new U,t=new U,n=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new U){const n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Sr(e,s.x,r.x,o.x),Sr(e,s.y,r.y,o.y),Sr(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class pd extends Fn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Se){const n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(Fh(a,c.x,l.x,h.x,u.x),Fh(a,c.y,l.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new Se().fromArray(s))}return this}}var Bh=Object.freeze({__proto__:null,ArcCurve:Gv,CatmullRomCurve3:Vv,CubicBezierCurve:ud,CubicBezierCurve3:Jv,EllipseCurve:Xc,LineCurve:dd,LineCurve3:jv,QuadraticBezierCurve:fd,QuadraticBezierCurve3:Qv,SplineCurve:pd});class ex extends Fn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Bh[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(new Bh[s.type]().fromJSON(s))}return this}}class tx extends ex{constructor(e){super(),this.type="Path",this.currentPoint=new Se,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new dd(this.currentPoint.clone(),new Se(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){const r=new fd(this.currentPoint.clone(),new Se(e,t),new Se(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){const a=new ud(this.currentPoint.clone(),new Se(e,t),new Se(n,s),new Se(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new pd(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,s,r,o,a,c),this}absellipse(e,t,n,s,r,o,a,c){const l=new Xc(e,t,n,s,r,o,a,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Yc extends on{constructor(e=[new Se(0,-.5),new Se(.5,0),new Se(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=zt(s,0,Math.PI*2);const r=[],o=[],a=[],c=[],l=[],h=1/t,u=new U,d=new Se,f=new U,g=new U,v=new U;let m=0,p=0;for(let w=0;w<=e.length-1;w++)switch(w){case 0:m=e[w+1].x-e[w].x,p=e[w+1].y-e[w].y,f.x=p*1,f.y=-m,f.z=p*0,v.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case e.length-1:c.push(v.x,v.y,v.z);break;default:m=e[w+1].x-e[w].x,p=e[w+1].y-e[w].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=v.x,f.y+=v.y,f.z+=v.z,f.normalize(),c.push(f.x,f.y,f.z),v.copy(g)}for(let w=0;w<=t;w++){const x=n+w*h*s,y=Math.sin(x),L=Math.cos(x);for(let C=0;C<=e.length-1;C++){u.x=e[C].x*y,u.y=e[C].y,u.z=e[C].x*L,o.push(u.x,u.y,u.z),d.x=w/t,d.y=C/(e.length-1),a.push(d.x,d.y);const E=c[3*C+0]*y,D=c[3*C+1],T=c[3*C+0]*L;l.push(E,D,T)}}for(let w=0;w<t;w++)for(let x=0;x<e.length-1;x++){const y=x+w*e.length,L=y,C=y+e.length,E=y+e.length+1,D=y+1;r.push(L,C,D),r.push(E,D,C)}this.setIndex(r),this.setAttribute("position",new bt(o,3)),this.setAttribute("uv",new bt(a,2)),this.setAttribute("normal",new bt(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yc(e.points,e.segments,e.phiStart,e.phiLength)}}class pi extends Yc{constructor(e=1,t=1,n=4,s=8){const r=new tx;r.absarc(0,-t/2,e,Math.PI*1.5,0),r.absarc(0,t/2,e,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:s}}static fromJSON(e){return new pi(e.radius,e.length,e.capSegments,e.radialSegments)}}class qc extends on{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);const r=[],o=[],a=[],c=[],l=new U,h=new Se;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){const f=n+u/t*s;l.x=e*Math.cos(f),l.y=e*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[d]/e+1)/2,h.y=(o[d+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new bt(o,3)),this.setAttribute("normal",new bt(a,3)),this.setAttribute("uv",new bt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qc(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class kt extends on{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],d=[],f=[];let g=0;const v=[],m=n/2;let p=0;w(),o===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new bt(u,3)),this.setAttribute("normal",new bt(d,3)),this.setAttribute("uv",new bt(f,2));function w(){const y=new U,L=new U;let C=0;const E=(t-e)/n;for(let D=0;D<=r;D++){const T=[],S=D/r,I=S*(t-e)+e;for(let Z=0;Z<=s;Z++){const W=Z/s,Y=W*c+a,re=Math.sin(Y),ie=Math.cos(Y);L.x=I*re,L.y=-S*n+m,L.z=I*ie,u.push(L.x,L.y,L.z),y.set(re,E,ie).normalize(),d.push(y.x,y.y,y.z),f.push(W,1-S),T.push(g++)}v.push(T)}for(let D=0;D<s;D++)for(let T=0;T<r;T++){const S=v[T][D],I=v[T+1][D],Z=v[T+1][D+1],W=v[T][D+1];h.push(S,I,W),h.push(I,Z,W),C+=6}l.addGroup(p,C,0),p+=C}function x(y){const L=g,C=new Se,E=new U;let D=0;const T=y===!0?e:t,S=y===!0?1:-1;for(let Z=1;Z<=s;Z++)u.push(0,m*S,0),d.push(0,S,0),f.push(.5,.5),g++;const I=g;for(let Z=0;Z<=s;Z++){const Y=Z/s*c+a,re=Math.cos(Y),ie=Math.sin(Y);E.x=T*ie,E.y=m*S,E.z=T*re,u.push(E.x,E.y,E.z),d.push(0,S,0),C.x=re*.5+.5,C.y=ie*.5*S+.5,f.push(C.x,C.y),g++}for(let Z=0;Z<s;Z++){const W=L+Z,Y=I+Z;y===!0?h.push(Y,Y+1,W):h.push(Y+1,Y,W),D+=3}l.addGroup(p,D,y===!0?1:2),p+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class $c extends kt{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new $c(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Et extends on{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],u=new U,d=new U,f=[],g=[],v=[],m=[];for(let p=0;p<=n;p++){const w=[],x=p/n;let y=0;p===0&&o===0?y=.5/t:p===n&&c===Math.PI&&(y=-.5/t);for(let L=0;L<=t;L++){const C=L/t;u.x=-e*Math.cos(s+C*r)*Math.sin(o+x*a),u.y=e*Math.cos(o+x*a),u.z=e*Math.sin(s+C*r)*Math.sin(o+x*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),m.push(C+y,1-x),w.push(l++)}h.push(w)}for(let p=0;p<n;p++)for(let w=0;w<t;w++){const x=h[p][w+1],y=h[p][w],L=h[p+1][w],C=h[p+1][w+1];(p!==0||o>0)&&f.push(x,y,C),(p!==n-1||c<Math.PI)&&f.push(y,L,C)}this.setIndex(f),this.setAttribute("position",new bt(g,3)),this.setAttribute("normal",new bt(v,3)),this.setAttribute("uv",new bt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Et(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Kc extends on{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],c=[],l=[],h=new U,u=new U,d=new U;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){const v=g/s*r,m=f/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(v),u.y=(e+t*Math.cos(m))*Math.sin(v),u.z=t*Math.sin(m),a.push(u.x,u.y,u.z),h.x=e*Math.cos(v),h.y=e*Math.sin(v),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(g/s),l.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){const v=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,w=(s+1)*f+g;o.push(v,m,w),o.push(m,p,w)}this.setIndex(o),this.setAttribute("position",new bt(a,3)),this.setAttribute("normal",new bt(c,3)),this.setAttribute("uv",new bt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kc(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Fe extends ir{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new je(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vu,this.normalScale=new Se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Nn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ca extends Ft{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new je(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class nx extends ca{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.groundColor=new je(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const ec=new pt,zh=new U,kh=new U;class md{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Se(512,512),this.map=null,this.mapPass=null,this.matrix=new pt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Gc,this._frameExtents=new Se(1,1),this._viewportCount=1,this._viewports=[new _t(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;zh.setFromMatrixPosition(e.matrixWorld),t.position.copy(zh),kh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(kh),t.updateMatrixWorld(),ec.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ec),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ec)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Hh=new pt,pr=new U,tc=new U;class ix extends md{constructor(){super(new sn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Se(4,2),this._viewportCount=6,this._viewports=[new _t(2,1,1,1),new _t(0,1,1,1),new _t(3,1,1,1),new _t(1,1,1,1),new _t(3,0,1,1),new _t(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),pr.setFromMatrixPosition(e.matrixWorld),n.position.copy(pr),tc.copy(n.position),tc.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(tc),n.updateMatrixWorld(),s.makeTranslation(-pr.x,-pr.y,-pr.z),Hh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Hh)}}class Jc extends ca{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new ix}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class sx extends md{constructor(){super(new nd(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Gh extends ca{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.target=new Ft,this.shadow=new sx}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class rx extends ca{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class gd{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Vh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Vh();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Vh(){return(typeof performance>"u"?Date:performance).now()}const Wh=new pt;class ox{constructor(e,t,n=0,s=1/0){this.ray=new qu(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Hc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Wh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Wh),this}intersectObject(e,t=!0,n=[]){return xc(e,this,n,t),n.sort(Xh),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)xc(e[s],this,n,t);return n.sort(Xh),n}}function Xh(i,e){return i.distance-e.distance}function xc(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)xc(r[o],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Fc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Fc);const $i=[{id:0,label:"Alex",skin:16763812,hair:2889744,outfit:1981066,accent:15857145,hairStyle:1},{id:1,label:"Jordan",skin:13010498,hair:1118481,outfit:1332013,accent:16710083,hairStyle:0},{id:2,label:"Morgan",skin:8142098,hair:656640,outfit:8917815,accent:16701354,hairStyle:2},{id:3,label:"Casey",skin:15777920,hair:8138002,outfit:1461859,accent:14742270,hairStyle:3},{id:4,label:"Riley",skin:9584654,hair:197379,outfit:10105874,accent:16775149,hairStyle:0},{id:5,label:"Sam",skin:16640216,hair:11817737,outfit:4988309,accent:15591934,hairStyle:1}],jc=[{id:"available",label:"🟢 Available",color:58998},{id:"busy",label:"🔴 Busy",color:16729156},{id:"away",label:"🟡 Away",color:16763904},{id:"meeting",label:"🟣 In Meeting",color:11158783}],yc=Object.fromEntries(jc.map(i=>[i.id,i.color]));function _d(i,e=0){const t=new Qn;return Sd(t,i,e),t}function vd(i,e){i.userData.status=e;const t=i.userData.statusMesh;t&&t.material.color.setHex(yc[e]??yc.available)}function xd(i,e,t=0){const n=i.userData.talkRing;if(n&&(n.visible=e,e)){const s=.75+Math.sin(t*6)*.25;n.material.opacity=s,n.material.color.setHex(65416),n.material.emissive.setHex(65416),n.material.emissiveIntensity=s*1.2}}function yd(i,e,t){for(i.traverse(n=>{var s;(n.isMesh||n.isSprite)&&((s=n.geometry)==null||s.dispose(),(Array.isArray(n.material)?n.material:[n.material]).forEach(o=>{var a;(a=o==null?void 0:o.map)==null||a.dispose(),o==null||o.dispose()}))});i.children.length;)i.remove(i.children[0]);Sd(i,e,t)}function Sd(i,e,t){const n=$i[t]??$i[0],s=Ss(n.skin,.75),r=Ss(n.outfit,.65,.05),o=Ss(n.accent,.6),a=Ss(n.hair,.9),c=Ss(1118481,.8),l=Ss(1118481,.3),h=(L,C,E=0,D=0,T=0,S=0,I=0,Z=0)=>{const W=new be(L,C);return W.position.set(E,D,T),W.rotation.set(S,I,Z),W.castShadow=!0,i.add(W),W};h(new pi(.21,.52,4,12),r),h(new kt(.215,.215,.055,16),c,0,.635),h(new $e(.26,.09,.04),o,0,1.12,.208),h(new kt(.072,.09,.14,12),s,0,1.49),h(new Et(.19,20,16),s,0,1.68),h(new Et(.048,10,8),s,-.2,1.68),h(new Et(.048,10,8),s,.2,1.68),h(new Et(.034,10,8),o,-.068,1.7,.163),h(new Et(.034,10,8),o,.068,1.7,.163),h(new Et(.021,8,6),l,-.068,1.7,.178),h(new Et(.021,8,6),l,.068,1.7,.178),ax(i,h,a,n.hairStyle),h(new Et(.105,10,8),r,-.315,1.39),h(new Et(.105,10,8),r,.315,1.39);const u=h(new pi(.065,.3,4,8),r,-.31,1.08),d=h(new pi(.065,.3,4,8),r,.31,1.08);h(new Et(.073,12,9),s,-.32,.72),h(new Et(.073,12,9),s,.32,.72);const f=h(new pi(.083,.36,4,8),r,-.13,.4),g=h(new pi(.083,.36,4,8),r,.13,.4);h(new $e(.17,.1,.28),c,-.13,.07,.04),h(new $e(.17,.1,.28),c,.13,.07,.04),h(new kt(.09,.084,.08,10),c,-.13,.145),h(new kt(.09,.084,.08,10),c,.13,.145);const v=document.createElement("canvas");v.width=256,v.height=56;const m=v.getContext("2d");m.fillStyle="rgba(0,10,30,0.78)",m.roundRect(0,0,256,56,10),m.fill(),m.fillStyle="#aaddff",m.font="bold 26px Inter, sans-serif",m.textAlign="center",m.fillText(e,128,38);const p=new Hv(new ld({map:new aa(v),transparent:!0,depthTest:!1}));p.position.set(0,2.18,0),p.scale.set(1.5,.33,1),i.add(p);const w=yc[i.userData.status??"available"],x=new be(new Et(.065,8,6),new Tr({color:w}));x.position.set(.58,2.22,0),i.add(x),i.userData.statusMesh=x;const y=new be(new Kc(.38,.045,6,32),new Tr({color:65416,transparent:!0,opacity:0,emissive:new je(65416),depthWrite:!1,side:rn}));y.rotation.x=Math.PI/2,y.position.y=.01,y.visible=!1,i.add(y),i.userData.talkRing=y,i.userData.legL=f,i.userData.legR=g,i.userData.armL=u,i.userData.armR=d,i.userData.walkClock=i.userData.walkClock??0,i.userData.presetId=t}function ax(i,e,t,n){switch(n){case 0:e(new Et(.193,16,10,0,Math.PI*2,0,.8),t,0,1.69);break;case 1:e(new Et(.198,16,10,0,Math.PI*2,0,1.1),t,0,1.68);break;case 2:{e(new Et(.196,16,10,0,Math.PI*2,0,1.05),t,0,1.68);const s=new be(new pi(.09,.22,4,8),t);s.position.set(0,1.51,-.13),s.rotation.x=.28,s.castShadow=!0,i.add(s);break}case 3:e(new Et(.238,16,12),t,0,1.74);break;default:e(new Et(.198,16,10,0,Math.PI*2,0,1.1),t,0,1.68)}}function Ss(i,e=.7,t=0){return new Fe({color:i,roughness:e,metalness:t})}function Md(i,e,t){const{legL:n,legR:s,armL:r,armR:o}=i.userData;if(!(!n||!s))if(e){i.userData.walkClock+=t*12;const a=Math.sin(i.userData.walkClock)*.42;n.rotation.x=a,s.rotation.x=-a,r&&(r.rotation.x=-a*.55),o&&(o.rotation.x=a*.55)}else{const a=Math.exp(-12*t);n.rotation.x*=a,s.rotation.x*=a,r&&(r.rotation.x*=a),o&&(o.rotation.x*=a)}}const P={minX:-22,maxX:22,minZ:-24,maxZ:12,wallH:4.5,wallT:.3,lobbyZ:4,midZ:-4,centerX:0,doorH:2.2,doorHalfW:.7,leftDoorX:-11,rightDoorX:11,mainDoorH:2.6,mainDoorHalfW:1.5},pe=P;function ut(i,e,t,n,s,r,o,a){const c=new be(new $e(r,o,a),e);return c.position.set(t,n,s),i.add(c),c}function cx(){const i=new Fe({color:13946822,roughness:.88,metalness:.04,side:rn}),e=new Fe({color:8026226,roughness:.78,metalness:.08}),t=new Fe({color:15789285,roughness:.94,metalness:0}),n=new Fe({color:15262940,roughness:.9,metalness:0}),s=new Fe({color:14209736,roughness:.18,metalness:.07}),r=new Fe({color:12090440,roughness:.82,metalness:0}),o=new Fe({color:16118766,roughness:.98,metalness:0}),a=new Fe({color:4341816,roughness:.9,metalness:0}),c=new Fe({color:10131600,roughness:.4,metalness:.6}),l=new Fe({color:11061464,roughness:.04,metalness:.08,transparent:!0,opacity:.25,side:rn}),h=new Fe({color:9209984,roughness:.82,metalness:.04}),u=new Fe({color:11579576,roughness:.28,metalness:.82});return{ext:i,span:e,int:t,div:n,tile:s,wood:r,ceil:o,roof:a,frame:c,glass:l,stair:h,rail:u}}function lx(i){const e=cx(),t=pe.wallH,n=pe.wallT,s=pe.maxX-pe.minX,r=pe.maxZ-pe.minZ,o=0,a=(pe.minZ+pe.maxZ)/2,c=4,l=t*c;ut(i,e.tile,o,.04,(pe.lobbyZ+pe.maxZ)/2,s,.08,pe.maxZ-pe.lobbyZ),ut(i,e.wood,o,.04,(pe.minZ+pe.lobbyZ)/2,s,.08,pe.lobbyZ-pe.minZ),ut(i,e.ext,o,l/2,pe.minZ,s,l,n),ut(i,e.ext,pe.minX,l/2,a,n,l,r),ut(i,e.ext,pe.maxX,l/2,a,n,l,r);const h=pe.mainDoorHalfW,u=pe.mainDoorH,d=t/2;ut(i,e.ext,(pe.minX+-h)/2,d,pe.maxZ,-h-pe.minX,t,n),ut(i,e.ext,(h+pe.maxX)/2,d,pe.maxZ,pe.maxX-h,t,n),ut(i,e.ext,0,u+(t-u)/2,pe.maxZ,h*2,t-u,n),ut(i,e.ext,o,t+(l-t)/2,pe.maxZ,s,l-t,n);for(let x=1;x<c;x++){const y=t*x;ut(i,e.span,o,y+.25,pe.maxZ-.08,s+.2,.5,.14),ut(i,e.span,o,y+.25,pe.minZ+.08,s+.2,.5,.14),ut(i,e.span,pe.minX+.06,y+.25,a,.14,.5,r+.2),ut(i,e.span,pe.maxX-.06,y+.25,a,.14,.5,r+.2)}hx(i,e),ux(i,e,h);const f=n*.5,g=n/2;Zh(i,e.div,pe.lobbyZ,pe.minX+f,pe.maxX-f,t,n,pe.leftDoorX,pe.doorHalfW,pe.doorH,pe.rightDoorX,pe.doorHalfW,pe.doorH),Zh(i,e.div,pe.midZ,pe.minX+f,pe.maxX-f,t,n,pe.leftDoorX,pe.doorHalfW,pe.doorH,pe.rightDoorX,pe.doorHalfW,pe.doorH),Yh(i,e.div,pe.centerX,pe.minZ+f,pe.midZ-g,t,n),Yh(i,e.div,pe.centerX,pe.midZ+g,pe.lobbyZ-g,t,n);const v=ut(i,e.ceil,o,t+.05,a,s,.1,r);v.userData.mapHide=!0;const m=i.children.length;ut(i,e.roof,o,l+.3,a,s+1,.6,r+1),fx(i,e.ext,s,r,l);for(let x=m;x<i.children.length;x++)i.children[x].userData.mapHide=!0;dx(i,e),px(i);const p=i.children.length;mx(i,t);for(let x=p;x<i.children.length;x++)i.children[x].userData.mapHide=!0;const w=i.children.length;gx(i);for(let x=w;x<i.children.length;x++)i.children[x].userData.mapShow=!0}function hx(i,e){function r(c,l,h,u){const d=new be(new $e(2.3600000000000003,1.7200000000000002,.08),e.frame);d.position.set(c,l,h),d.rotation.y=u,i.add(d);const f=new be(new ei(2.2,1.6),e.glass);f.position.set(c,l,h),f.rotation.y=u,i.add(f)}const o=pe.wallH,a=[0,1,2,3].map(c=>c*o+o*.6);a.forEach(c=>{[-16,-6,8].forEach(l=>r(pe.minX,c,l,Math.PI/2))}),a.forEach(c=>{[-16,-6,8].forEach(l=>r(pe.maxX,c,l,-Math.PI/2))}),a.forEach(c=>{[-14,0,14].forEach(l=>r(l,c,pe.minZ,Math.PI))}),a.forEach((c,l)=>{l===0?(r(-14,c,pe.maxZ,0),r(14,c,pe.maxZ,0)):[-14,-6,6,14].forEach(h=>r(h,c,pe.maxZ,0))})}function ux(i,e,t,n){[-t-.4,t+.4].forEach(s=>{const r=new be(new kt(.22,.22,pe.mainDoorH,12),e.ext);r.position.set(s,pe.mainDoorH/2,pe.maxZ+.5),i.add(r)}),ut(i,e.span,0,pe.mainDoorH+.18,pe.maxZ+.7,t*2+2.4,.35,1.8),ut(i,e.int,0,pe.mainDoorH,pe.maxZ+.7,t*2+2.2,.02,1.7)}function dx(i,e){for(let l=0;l<9;l++)ut(i,e.stair,16.5,.22*(l+.5),5.5+.28*(l+.5),3,.22,.28);for(let l=0;l<9;l+=2)ut(i,e.rail,16.5-3/2+.1,.22*l+.55,5.5+.28*l,.06,1.1,.06),ut(i,e.rail,16.5+3/2-.1,.22*l+.55,5.5+.28*l,.06,1.1,.06);ut(i,e.rail,16.5,.22*9*.5+.55,5.5+.28*9*.5,3,.06,.28*9+.1);const c=-16.5;for(let l=0;l<9;l++)ut(i,e.stair,c,.22*(l+.5),5.5+.28*(l+.5),3,.22,.28);for(let l=0;l<9;l+=2)ut(i,e.rail,c-3/2+.1,.22*l+.55,5.5+.28*l,.06,1.1,.06),ut(i,e.rail,c+3/2-.1,.22*l+.55,5.5+.28*l,.06,1.1,.06);ut(i,e.rail,c,.22*9*.5+.55,5.5+.28*9*.5,3,.06,.28*9+.1)}function Zh(i,e,t,n,s,r,o,a,c,l,h,u,d){const f=r/2,g=[];let v=n;const m=[];m.push({c:a,hw:c,dh:l}),m.push({c:h,hw:u,dh:d}),m.sort((p,w)=>p.c-w.c),m.forEach(({c:p,hw:w,dh:x})=>{const y=p-w,L=p+w;y>v&&g.push({from:v,to:y,full:!0}),g.push({from:y,to:L,full:!1,dh:x}),v=L}),v<s&&g.push({from:v,to:s,full:!0}),g.forEach(({from:p,to:w,full:x,dh:y})=>{const L=w-p,C=(p+w)/2;if(x)ut(i,e,C,f,t,L,r,o);else{const E=r-y;ut(i,e,C,y+E/2,t,L,E,o)}})}function Yh(i,e,t,n,s,r,o){const a=s-n;if(a<=0)return;const c=new be(new $e(o,r,a),e);c.position.set(t,r/2,(n+s)/2),i.add(c)}function fx(i,e,t,n,s){const a=s+.275+.05,c=(pe.minZ+pe.maxZ)/2;[[0,a,pe.maxZ+.05,t+.6,.55,.28],[0,a,pe.minZ-.05,t+.6,.55,.28],[pe.minX-.05,a,c,.28,.55,n+.6],[pe.maxX+.05,a,c,.28,.55,n+.6]].forEach(([h,u,d,f,g,v])=>{const m=new be(new $e(f,g,v),e);m.position.set(h,u,d),i.add(m)})}function px(i){[{color:12863616,x:pe.minX+.06,z1:pe.midZ,z2:pe.lobbyZ},{color:4241520,x:pe.maxX-.06,z1:pe.midZ,z2:pe.lobbyZ},{color:14712880,x:pe.minX+.06,z1:pe.minZ,z2:pe.midZ},{color:3705032,x:pe.maxX-.06,z1:pe.minZ,z2:pe.midZ},{color:8947848,x:0,z1:pe.lobbyZ,z2:pe.maxZ-1}].forEach(({color:t,x:n,z1:s,z2:r})=>{const o=new Fe({color:t,roughness:.7,metalness:0}),a=r-s,c=new be(new $e(.06,.04,a),o);c.position.set(n,.05,(s+r)/2),i.add(c)})}function mx(i,e){const t=new Fe({color:14210510,roughness:.85,metalness:.06}),n=new Fe({color:16777215,emissive:16774632,emissiveIntensity:1.2,roughness:.7});[[-8,8],[8,8],[0,8],[-11,0],[11,0],[-14,-10],[-8,-18],[8,-18],[14,-10]].forEach(([r,o])=>{const a=new be(new $e(1.2,.06,.65),t);a.position.set(r,e-.04,o),i.add(a);const c=new be(new $e(1.1,.01,.55),n);c.position.set(r,e-.02,o),i.add(c)})}function gx(i){[{name:"LOBBY",color:"#cccccc",x:0,z:8,w:16,d:5},{name:"OPS",color:"#ffaa44",x:-11,z:0,w:12,d:6},{name:"FUN",color:"#44ffaa",x:11,z:0,w:12,d:6},{name:"DESIGN",color:"#ff6ba0",x:-11,z:-14,w:14,d:10},{name:"ENGINEERING",color:"#44aaff",x:11,z:-14,w:14,d:10}].forEach(({name:t,color:n,x:s,z:r,w:o,d:a})=>{const c=document.createElement("canvas");c.width=512,c.height=256;const l=c.getContext("2d");l.fillStyle=n+"18",l.fillRect(0,0,512,256),l.strokeStyle=n,l.lineWidth=10,l.strokeRect(6,6,500,244),l.fillStyle=n,l.font="bold 72px Inter, Arial, sans-serif",l.textAlign="center",l.textBaseline="middle",l.fillText(t,256,128);const h=new be(new ei(o,a),new Tr({map:new aa(c),transparent:!0,depthWrite:!1}));h.rotation.x=-Math.PI/2,h.position.set(s,.15,r),i.add(h)})}function _x(i){const e=P,t=new Fe({color:5934140,roughness:.96,metalness:0}),n=new be(new ei(300,300),t);n.rotation.x=-Math.PI/2,n.position.y=-.01,n.receiveShadow=!0,i.add(n);const s=new Fe({color:12630704,roughness:.88,metalness:0}),r=new be(new $e(5,.06,18),s);r.position.set(0,.03,19),r.receiveShadow=!0,i.add(r);const o=new be(new $e(14,.06,8),s);o.position.set(0,.03,14.5),o.receiveShadow=!0,i.add(o);const a=new be(new $e(e.maxX-e.minX,.06,4),s);a.position.set(0,.03,e.maxZ+2),a.receiveShadow=!0,i.add(a);const c=new Fe({color:11578272,roughness:.9,metalness:0}),l=e.maxX-e.minX,h=e.maxZ-e.minZ,u=new be(new $e(l+.8,.22,h+.8),c);u.position.set(0,-.11,(e.minZ+e.maxZ)/2),i.add(u),[[-30,-18],[-30,5],[-30,20],[30,-18],[30,5],[30,20],[-12,26],[12,26],[-36,12],[36,12],[-28,-30],[28,-30]].forEach(([f,g])=>vx(i,f,g)),[[-4,24],[4,24],[-14,14],[14,14]].forEach(([f,g])=>xx(i,f,g)),yx(i),Sx(i)}function vx(i,e,t){const n=new Fe({color:5911832,roughness:.92}),s=new Fe({color:3830312,roughness:.95}),r=new be(new kt(.18,.26,2.2,8),n);r.position.set(e,1.1,t),r.castShadow=!0,i.add(r),[[1.8,2.5,3.4],[1.3,2,4.8],[.7,1.4,6]].forEach(([o,a,c])=>{const l=new be(new $c(o,a,9),s);l.position.set(e,c,t),l.castShadow=!0,i.add(l)})}function xx(i,e,t){const n=new Fe({color:6316128,roughness:.55,metalness:.75}),s=new Fe({color:16775384,emissive:16773296,emissiveIntensity:1.5,roughness:.4}),r=new be(new kt(.06,.08,5,8),n);r.position.set(e,2.5,t),r.castShadow=!0,i.add(r);const o=new be(new $e(.06,.06,.9),n);o.position.set(e,5.1,t-.4),i.add(o);const a=new be(new $e(.45,.14,.28),s);a.position.set(e,4.95,t-.8),i.add(a);const c=new Jc(16771232,6,12);c.position.set(e,4.95,t-.8),i.add(c)}function yx(i){const e=[2250154,11149858,8947840,2245666,8947848],t=new Fe({color:1710618,roughness:.8});[[-40,-22],[-40,-16],[-40,-10],[40,-22],[40,-16],[40,-10]].forEach(([s,r],o)=>{const a=e[o%e.length],c=new Fe({color:a,roughness:.45,metalness:.3}),l=new be(new $e(4.4,1.4,2),c);l.position.set(s,.72,r),l.castShadow=!0,i.add(l);const h=new be(new $e(2.8,.7,1.85),c);h.position.set(s-.2,1.8,r),i.add(h),[[-1.5,-1.05],[-1.5,1.05],[1.5,-1.05],[1.5,1.05]].forEach(([u,d])=>{const f=new be(new kt(.36,.36,.22,12),t);f.rotation.z=Math.PI/2,f.position.set(s+u,.36,r+d),i.add(f)})})}function Sx(i){const e=new Fe({color:4878400,roughness:1});[[-80,-60,30,8,20],[80,-60,28,7,18],[0,-80,40,6,25],[-50,-70,35,9,22],[55,-70,32,7,20]].forEach(([t,n,s,r,o])=>{const a=new be(new $e(s,r,o),e);a.position.set(t,r/2-2,n),i.add(a)})}const Ms=P.leftDoorX,Es=P.rightDoorX,Rt=P.doorHalfW,ci=P.doorH,ws=.1,eo=[{id:"main-left",label:"Main Entrance",hinge:{x:-1.5,y:P.mainDoorH/2,z:P.maxZ},meshOffset:{x:P.mainDoorHalfW/2,y:0,z:0},w:P.mainDoorHalfW,h:P.mainDoorH,d:ws,closedRY:0,openRY:Math.PI/2,closedAABB:{minX:-1.5,maxX:0,minZ:P.maxZ-.14,maxZ:P.maxZ+.14}},{id:"main-right",label:"Main Entrance",hinge:{x:P.mainDoorHalfW,y:P.mainDoorH/2,z:P.maxZ},meshOffset:{x:-1.5/2,y:0,z:0},w:P.mainDoorHalfW,h:P.mainDoorH,d:ws,closedRY:0,openRY:-Math.PI/2,closedAABB:{minX:0,maxX:P.mainDoorHalfW,minZ:P.maxZ-.14,maxZ:P.maxZ+.14}},{id:"ops",label:"Ops Room",hinge:{x:Ms-Rt,y:ci/2,z:P.lobbyZ},meshOffset:{x:Rt,y:0,z:0},w:Rt*2,h:ci,d:ws,closedRY:0,openRY:-Math.PI/2,closedAABB:{minX:Ms-Rt,maxX:Ms+Rt,minZ:P.lobbyZ-.12,maxZ:P.lobbyZ+.12}},{id:"fun",label:"Fun Room",hinge:{x:Es+Rt,y:ci/2,z:P.lobbyZ},meshOffset:{x:-Rt,y:0,z:0},w:Rt*2,h:ci,d:ws,closedRY:0,openRY:Math.PI/2,closedAABB:{minX:Es-Rt,maxX:Es+Rt,minZ:P.lobbyZ-.12,maxZ:P.lobbyZ+.12}},{id:"design",label:"Design Room",hinge:{x:Ms-Rt,y:ci/2,z:P.midZ},meshOffset:{x:Rt,y:0,z:0},w:Rt*2,h:ci,d:ws,closedRY:0,openRY:-Math.PI/2,closedAABB:{minX:Ms-Rt,maxX:Ms+Rt,minZ:P.midZ-.12,maxZ:P.midZ+.12}},{id:"engineering",label:"Engineering Room",hinge:{x:Es+Rt,y:ci/2,z:P.midZ},meshOffset:{x:-Rt,y:0,z:0},w:Rt*2,h:ci,d:ws,closedRY:0,openRY:Math.PI/2,closedAABB:{minX:Es-Rt,maxX:Es+Rt,minZ:P.midZ-.12,maxZ:P.midZ+.12}}],rr={};function Mx(i){const e=new Fe({color:8016944,roughness:.72,metalness:.02,side:rn}),t=new Fe({color:13937220,roughness:.28,metalness:.88}),n=new Fe({color:6176286,roughness:.8,metalness:0});return eo.forEach(s=>{const r=new Qn;r.position.set(s.hinge.x,s.hinge.y,s.hinge.z),i.add(r);const o=new be(new $e(s.w,s.h,s.d),e);o.position.set(s.meshOffset.x,s.meshOffset.y,s.meshOffset.z),o.userData.doorId=s.id,r.add(o);const a=s.meshOffset;[-.45,.32].forEach(f=>{const g=new be(new $e(s.w*.85,.04,s.d*1.2),n);g.position.set(a.x,a.y+f,a.z+s.d*.1),r.add(g)});const c=a.x+(a.x>=0?-s.w*.36:s.w*.36),l=new be(new Et(.05,8,6),t);l.position.set(c,a.y-.08,a.z+s.d*.65),r.add(l);const h=l.clone();h.position.z=a.z-s.d*.65,r.add(h);const u=s.id==="main-left"||s.id==="main-right",d=u?s.openRY:s.closedRY;r.rotation.y=d,rr[s.id]={open:u,targetRY:d,currentRY:d,pivot:r}}),{update:Ex,toggleDoor:qn,getNearbyDoor:Ed,getClosedColliders:wd}}function Ex(i){Object.values(rr).forEach(e=>{Math.abs(e.currentRY-e.targetRY)>5e-4&&(e.currentRY+=(e.targetRY-e.currentRY)*Math.min(1,i*7),e.pivot.rotation.y=e.currentRY)})}function qn(i){const e=rr[i],t=eo.find(n=>n.id===i);if(!(!e||!t))return e.open=!e.open,e.targetRY=e.open?t.openRY:t.closedRY,e.open}function Ed(i,e=2.8){let t=null,n=e;return eo.forEach(s=>{const r=i.x-s.hinge.x,o=i.z-s.hinge.z,a=Math.sqrt(r*r+o*o);a<n&&(n=a,t={def:s,state:rr[s.id]})}),t}function bs(i){var e;return((e=rr[i])==null?void 0:e.open)??!1}function wd(){const i=[];return eo.forEach(e=>{const t=rr[e.id];if(!t)return;Math.abs(t.currentRY-e.closedRY)<.18&&i.push(e.closedAABB)}),i}function wx(i){const e=document.getElementById("canvas"),t=new Bv({canvas:e,antialias:!0});t.setSize(window.innerWidth,window.innerHeight),t.setPixelRatio(Math.min(window.devicePixelRatio,2)),t.shadowMap.enabled=!0,t.shadowMap.type=Du,t.toneMapping=Uu,t.toneMappingExposure=1;const n=new zv;n.background=new je(9357544),n.fog=new Wc(11195624,.007);const s=new sn(80,window.innerWidth/window.innerHeight,.1,300);s.position.set(0,1.7,22),n.add(new rx(16775408,.9)),n.add(new nx(10407144,5929544,.9));const r=new Gh(16774616,3.2);r.position.set(40,70,35),r.castShadow=!0,r.shadow.mapSize.set(2048,2048),r.shadow.camera.near=1,r.shadow.camera.far=120,r.shadow.camera.left=-50,r.shadow.camera.right=50,r.shadow.camera.top=50,r.shadow.camera.bottom=-50,r.shadow.radius=3,r.shadow.bias=-.001,n.add(r);const o=new Gh(13164021,.6);o.position.set(-25,30,-20),n.add(o),[{pos:[-5,3.8,-14],color:16773344,intensity:25,radius:18},{pos:[5,3.8,-14],color:16773344,intensity:25,radius:18},{pos:[-11,3.8,0],color:16774376,intensity:22,radius:16},{pos:[11,3.8,0],color:16774376,intensity:22,radius:16},{pos:[0,3.8,8],color:16775412,intensity:28,radius:22}].forEach(({pos:d,color:f,intensity:g,radius:v})=>{const m=new Jc(f,g,v);m.position.set(...d),n.add(m)}),i==null||i(10,"Laying foundations…"),_x(n),i==null||i(35,"Building structure…"),lx(n),i==null||i(65,"Installing doors…");const c=Mx(n);i==null||i(90,"Finishing touches…"),n.userData.doors=c,window.addEventListener("resize",()=>{s.aspect=window.innerWidth/window.innerHeight,s.updateProjectionMatrix(),t.setSize(window.innerWidth,window.innerHeight)});const l=new gd;function h(){requestAnimationFrame(h);const d=l.getDelta();c.update(d),t.render(n,s)}h();let u=null;return i==null||i(100,"Ready!"),setTimeout(()=>{u&&u()},200),{scene:n,camera:s,renderer:t,onShipLoaded:d=>{u=d}}}const qh=[{id:"design-screen",label:"Design Board",zone:"DESIGN",tool:"Excalidraw",url:"https://excalidraw.com",position:{x:P.minX+.12,y:2.2,z:-14},rotationY:Math.PI/2,width:4.5,height:2.8,color:16739232,emoji:"✏️"},{id:"engineering-screen",label:"Code Docs",zone:"ENGINEERING",tool:"HackMD",url:"https://hackmd.io",position:{x:P.maxX-.12,y:2.2,z:-14},rotationY:-Math.PI/2,width:4.5,height:2.8,color:4500223,emoji:"💻"},{id:"ops-screen",label:"Ops Dashboard",zone:"OPS",tool:"Grafana",url:"https://play.grafana.org",position:{x:P.minX+.12,y:2.2,z:0},rotationY:Math.PI/2,width:4,height:2.5,color:16755268,emoji:"📊"},{id:"fun-screen",label:"Vibe Zone",zone:"FUN",tool:"Spotify",url:"https://open.spotify.com/embed/playlist/37i9dQZF1DX0XUsuxWHRQd?utm_source=generator&theme=0",position:{x:P.maxX-.12,y:2.2,z:0},rotationY:-Math.PI/2,width:4,height:2.5,color:4521898,emoji:"🎵"}];function bx(i){const e=[];return qh.forEach(t=>{const n=new Qn;n.position.set(t.position.x,t.position.y,t.position.z),n.rotation.y=t.rotationY,i.add(n);const s=.1,r=new Fe({color:1710618,roughness:.3,metalness:.85}),o=(g,v,m,p,w,x)=>{const y=new be(new $e(p,w,x),r);y.position.set(g,v,m),n.add(y)};o(0,t.height/2+s/2,0,t.width+s*2,s,s*2),o(0,-t.height/2-s/2,0,t.width+s*2,s,s*2),o(-t.width/2-s/2,0,0,s,t.height+s*2,s*2),o(t.width/2+s/2,0,0,s,t.height+s*2,s*2);const a=new Fe({color:t.color,emissive:t.color,emissiveIntensity:2.5,roughness:.08}),c=(g,v,m,p,w,x)=>{const y=new be(new $e(p,w,x),a);y.position.set(g,v,m),n.add(y)};c(0,t.height/2,.02,t.width,.04,.04),c(0,-t.height/2,.02,t.width,.04,.04),c(-t.width/2,0,.02,.04,t.height,.04),c(t.width/2,0,.02,.04,t.height,.04);const l=Tx(t),h=new Fe({map:l,emissiveMap:l,emissive:new je(t.color),emissiveIntensity:.14,roughness:.1}),u=new be(new ei(t.width,t.height),h);u.position.set(0,0,.02),u.userData.screen=t,n.add(u),e.push(u);const d=new Jc(t.color,16,8);d.position.set(0,0,.6),n.add(d);let f=Math.random()*Math.PI*2;(function g(){requestAnimationFrame(g),f+=.018,h.emissiveIntensity=.12+Math.sin(f)*.04,d.intensity=14+Math.sin(f*.65)*4})()}),{meshes:e,screens:qh}}function Tx(i){const t=Math.round(512*(i.height/i.width)),n=document.createElement("canvas");n.width=512,n.height=t;const s=n.getContext("2d"),r="#"+i.color.toString(16).padStart(6,"0");s.fillStyle="#060c18",s.fillRect(0,0,512,t),s.fillStyle="rgba(200,230,255,0.035)";for(let c=0;c<512;c+=32)for(let l=0;l<t;l+=32)s.fillRect(c,l,2,2);const o=s.createLinearGradient(0,0,512,0);o.addColorStop(0,r+"55"),o.addColorStop(1,"transparent"),s.fillStyle=o,s.fillRect(0,0,512,46),s.fillStyle=r,s.font="bold 16px Inter, monospace",s.textAlign="left",s.fillText(i.zone,14,30),s.fillStyle="rgba(255,255,255,0.38)",s.font="12px Inter, monospace",s.textAlign="right",s.fillText(i.tool,498,30),s.strokeStyle=r+"44",s.lineWidth=1,s.beginPath(),s.moveTo(0,48),s.lineTo(512,48),s.stroke();const a=Math.round(t*.27);return s.font=`${a}px sans-serif`,s.textAlign="center",s.fillText(i.emoji,512/2,t*.52),s.fillStyle="#fff",s.font=`bold ${Math.round(t*.1)}px Inter, monospace`,s.textAlign="center",s.shadowColor=r,s.shadowBlur=18,s.fillText(i.label,512/2,t*.72),s.shadowBlur=0,s.fillStyle=r+"bb",s.font=`${Math.round(t*.062)}px Inter, monospace`,s.textAlign="center",s.fillText("[ E ] or click to open",512/2,t*.88),s.strokeStyle=r+"55",s.lineWidth=2,s.beginPath(),s.moveTo(0,t-2),s.lineTo(512,t-2),s.stroke(),new aa(n)}const Io=.38,gt=P.wallT/2+.01,Ls=P.leftDoorX,Is=P.rightDoorX,li=P.doorHalfW,$h=P.mainDoorHalfW,bd=[{minX:P.minX,maxX:-$h,minZ:P.maxZ-gt,maxZ:P.maxZ+gt},{minX:$h,maxX:P.maxX,minZ:P.maxZ-gt,maxZ:P.maxZ+gt},{minX:P.minX,maxX:P.maxX,minZ:P.minZ-gt,maxZ:P.minZ+gt},{minX:P.minX-gt,maxX:P.minX+gt,minZ:P.minZ,maxZ:P.maxZ},{minX:P.maxX-gt,maxX:P.maxX+gt,minZ:P.minZ,maxZ:P.maxZ},{minX:P.minX,maxX:Ls-li,minZ:P.lobbyZ-gt,maxZ:P.lobbyZ+gt},{minX:Ls+li,maxX:Is-li,minZ:P.lobbyZ-gt,maxZ:P.lobbyZ+gt},{minX:Is+li,maxX:P.maxX,minZ:P.lobbyZ-gt,maxZ:P.lobbyZ+gt},{minX:P.minX,maxX:Ls-li,minZ:P.midZ-gt,maxZ:P.midZ+gt},{minX:Ls+li,maxX:Is-li,minZ:P.midZ-gt,maxZ:P.midZ+gt},{minX:Is+li,maxX:P.maxX,minZ:P.midZ-gt,maxZ:P.midZ+gt},{minX:P.centerX-gt,maxX:P.centerX+gt,minZ:P.minZ,maxZ:P.lobbyZ},{minX:-80,maxX:80,minZ:68,maxZ:70},{minX:-80,maxX:80,minZ:-70,maxZ:-68},{minX:-70,maxX:-68,minZ:-70,maxZ:70},{minX:68,maxX:70,minZ:-70,maxZ:70}];let Td=[];function Ax(i){Td=i}function Rx(i,e,t){const n=Math.max(t.minX,Math.min(i,t.maxX)),s=Math.max(t.minZ,Math.min(e,t.maxZ)),r=i-n,o=e-s,a=r*r+o*o;if(a<Io*Io&&a>1e-6){const c=Math.sqrt(a),l=Io-c;return{x:i+r/c*l,z:e+o/c*l}}return a===0?{x:i+Io,z:e}:null}function nc(i,e){let t=e.x,n=e.z;const s=[...bd,...wd(),...Td];for(let r=0;r<2;r++)for(const o of s){const a=Rx(t,n,o);a&&(t=a.x,n=a.z)}return{x:t,z:n}}function Ko(i){const e=i.x,t=i.z;if(t>P.maxZ||t<P.minZ||e<P.minX||e>P.maxX)return"OUTSIDE";if(t>P.lobbyZ)return"LOBBY";const n=e<P.centerX,s=t>P.midZ,r=t<=P.midZ;return s&&n?"OPS":s&&!n?"FUN":r&&n?"DESIGN":"ENGINEERING"}const Cx={mainDoor:{x:0,z:P.maxZ+.5},lobbyIn:{x:0,z:P.maxZ-1.5},opsEntry:{x:Ls,z:P.lobbyZ-1},funEntry:{x:Is,z:P.lobbyZ-1},designEntry:{x:Ls,z:P.midZ-1},engEntry:{x:Is,z:P.midZ-1}};function Px(i,e){const t=Ko(i),n=Ko(e);if(t===n)return[{x:e.x,z:e.z}];const s={x:e.x,z:e.z},r=Cx,o={"OUTSIDE→LOBBY":[r.mainDoor,r.lobbyIn],"OUTSIDE→OPS":[r.mainDoor,r.lobbyIn,r.opsEntry],"OUTSIDE→FUN":[r.mainDoor,r.lobbyIn,r.funEntry],"OUTSIDE→DESIGN":[r.mainDoor,r.lobbyIn,r.opsEntry,r.designEntry],"OUTSIDE→ENGINEERING":[r.mainDoor,r.lobbyIn,r.funEntry,r.engEntry],"LOBBY→OPS":[r.opsEntry],"LOBBY→FUN":[r.funEntry],"LOBBY→DESIGN":[r.opsEntry,r.designEntry],"LOBBY→ENGINEERING":[r.funEntry,r.engEntry],"LOBBY→OUTSIDE":[r.mainDoor],"OPS→LOBBY":[r.opsEntry],"OPS→DESIGN":[r.designEntry],"OPS→FUN":[r.opsEntry,r.funEntry],"OPS→ENGINEERING":[r.opsEntry,r.funEntry,r.engEntry],"OPS→OUTSIDE":[r.opsEntry,r.mainDoor],"FUN→LOBBY":[r.funEntry],"FUN→ENGINEERING":[r.engEntry],"FUN→OPS":[r.funEntry,r.opsEntry],"FUN→DESIGN":[r.funEntry,r.opsEntry,r.designEntry],"FUN→OUTSIDE":[r.funEntry,r.mainDoor],"DESIGN→OPS":[r.designEntry],"DESIGN→LOBBY":[r.designEntry,r.opsEntry],"DESIGN→FUN":[r.designEntry,r.opsEntry,r.funEntry],"DESIGN→ENGINEERING":[r.designEntry,r.opsEntry,r.funEntry,r.engEntry],"DESIGN→OUTSIDE":[r.designEntry,r.opsEntry,r.mainDoor],"ENGINEERING→FUN":[r.engEntry],"ENGINEERING→LOBBY":[r.engEntry,r.funEntry],"ENGINEERING→OPS":[r.engEntry,r.funEntry,r.opsEntry],"ENGINEERING→DESIGN":[r.engEntry,r.funEntry,r.opsEntry,r.designEntry],"ENGINEERING→OUTSIDE":[r.engEntry,r.mainDoor]},a=`${t}→${n}`;return[...o[a]??[],s]}const Ts=5.5,Lx=5,Kh=2,Jh=12,Ix=1.65,jh=60,Dx=64,Nx=57;function Ux(i,e,t){const n={};let s=Math.PI,r=0,o="flat",a=[],c=0,l=!1,h=!1,u=!1,d=.28,f=Lx,g=0,v=0,m=0,p=22,w=38,x=!1;const y={active:!1,x:0,y:0,id:-1,ox:0,oy:0},L={active:!1,lx:0,ly:0,id:-1},C={active:!1,dist:0},E=document.getElementById("vjoy-base"),D=document.getElementById("vjoy-stick");document.addEventListener("keydown",z=>{if(n[z.code]=!0,z.code==="KeyR"&&(i.position.set(0,0,22),s=Math.PI,r=0,a=[],l=!1,Ox("Respawned at Entrance")),z.code==="Tab"){z.preventDefault();const le=["flat","overview","third","first"];I(le[(le.indexOf(o)+1)%le.length])}z.code==="Escape"&&o!=="third"&&I("third")}),document.addEventListener("keyup",z=>{n[z.code]=!1}),document.addEventListener("mousemove",z=>{if(document.pointerLockElement===t){o==="first"&&(r=Math.max(-1.2,Math.min(.5,r-z.movementY*.002))),s-=z.movementX*.0025;return}if(h)if(o==="overview"){const le=w*1.534*.9/window.innerHeight;m-=z.movementX*le,p+=z.movementY*le,m=Math.max(-60,Math.min(60,m)),p=Math.max(-60,Math.min(60,p)),x=!0,(Math.abs(z.movementX)>2||Math.abs(z.movementY)>2)&&(u=!0)}else o==="third"?(s-=z.movementX*.005,d=Math.max(-.05,Math.min(1,d+z.movementY*.003)),(Math.abs(z.movementX)>2||Math.abs(z.movementY)>2)&&(u=!0)):(s-=z.movementX*.005,(Math.abs(z.movementX)>2||Math.abs(z.movementY)>2)&&(u=!0))}),t.addEventListener("mousedown",z=>{z.button===0&&(h=!0,u=!1,o==="overview"&&(t.style.cursor="grabbing"))}),document.addEventListener("mouseup",z=>{z.button===0&&(h=!1,o==="overview"&&(t.style.cursor="grab"))}),t.addEventListener("contextmenu",z=>z.preventDefault()),t.addEventListener("wheel",z=>{if(o!=="overview"&&o!=="third")return;z.preventDefault();const le=z.deltaMode===0?z.deltaY:z.deltaY*24,F=Math.pow(.997,le);if(o==="overview"){const q=w;w=Math.max(14,Math.min(60,w*F));const ne=w-q,ae=Math.tan(e.fov*Math.PI/180/2),me=window.innerWidth/window.innerHeight,Ee=z.clientX/window.innerWidth-.5,Ne=-(z.clientY/window.innerHeight-.5);m-=Ee*ne*2*ae*me,p+=Ne*ne*2*ae,m=Math.max(-60,Math.min(60,m)),p=Math.max(-60,Math.min(60,p)),x=!0}else f=Math.max(Kh,Math.min(Jh,f*F))},{passive:!1}),t.addEventListener("touchstart",z=>{if(o!=="flat"){z.preventDefault();for(let le=0;le<z.changedTouches.length;le++){const F=z.changedTouches[le];o==="overview"?L.active||(L.active=!0,L.id=F.identifier,L.lx=F.clientX,L.ly=F.clientY,h=!0,u=!1):F.clientX<window.innerWidth*.5&&!y.active?(y.active=!0,y.id=F.identifier,y.ox=F.clientX,y.oy=F.clientY,y.x=0,y.y=0,E&&(E.style.left=F.clientX-40+"px",E.style.top=F.clientY-40+"px",E.style.display="block",D&&(D.style.transform="translate(-50%,-50%)"))):F.clientX>=window.innerWidth*.5&&!L.active&&(L.active=!0,L.id=F.identifier,L.lx=F.clientX,L.ly=F.clientY)}if(z.touches.length>=2){const le=z.touches[0],F=z.touches[1],q=F.clientX-le.clientX,ne=F.clientY-le.clientY;C.active=!0,C.dist=Math.sqrt(q*q+ne*ne)}}},{passive:!1}),t.addEventListener("touchmove",z=>{if(o!=="flat"){z.preventDefault();for(let le=0;le<z.changedTouches.length;le++){const F=z.changedTouches[le];if(F.identifier===y.id){const q=F.clientX-y.ox,ne=F.clientY-y.oy,ae=40,me=Math.sqrt(q*q+ne*ne),Ee=me>ae?ae/me:1;y.x=q*Ee/ae,y.y=ne*Ee/ae,D&&(D.style.transform=`translate(calc(-50% + ${q*Ee}px), calc(-50% + ${ne*Ee}px))`)}if(F.identifier===L.id){const q=F.clientX-L.lx,ne=F.clientY-L.ly;if(o==="overview"){const ae=w*1.534*.9/window.innerHeight;m-=q*ae,p+=ne*ae,m=Math.max(-60,Math.min(60,m)),p=Math.max(-60,Math.min(60,p)),x=!0,(Math.abs(q)>2||Math.abs(ne)>2)&&(u=!0)}else s-=q*.004,d=Math.max(-.05,Math.min(1,d+ne*.003));L.lx=F.clientX,L.ly=F.clientY}}if(C.active&&z.touches.length>=2){const le=z.touches[0],F=z.touches[1],q=F.clientX-le.clientX,ne=F.clientY-le.clientY,ae=Math.sqrt(q*q+ne*ne);if(C.dist>0){const me=C.dist/ae;o==="overview"?w=Math.max(14,Math.min(60,w*me)):o==="third"&&(f=Math.max(Kh,Math.min(Jh,f*me)))}C.dist=ae}}},{passive:!1}),t.addEventListener("touchend",z=>{if(o!=="flat"){z.preventDefault();for(let le=0;le<z.changedTouches.length;le++){const F=z.changedTouches[le];F.identifier===y.id&&(y.active=!1,y.x=0,y.y=0,y.id=-1,E&&(E.style.display="none")),F.identifier===L.id&&(L.active=!1,L.id=-1,h=!1)}z.touches.length<2&&(C.active=!1,C.dist=0)}},{passive:!1});function T(z){a=Px({x:i.position.x,z:i.position.z},z),c=0,l=!0,x=!1,o==="overview"&&S(z)}function S(z){const le=document.getElementById("overview-marker");if(!le)return;const F=new U(z.x,0,z.z);F.project(e),le.style.left=(F.x*.5+.5)*window.innerWidth+"px",le.style.top=(-F.y*.5+.5)*window.innerHeight+"px",le.style.display="block"}function I(z){var ae;o=z;const le=document.getElementById("overview-panel");le&&(le.style.display=o==="overview"?"flex":"none");const F=document.getElementById("overview-marker");F&&o!=="overview"&&(F.style.display="none"),(o==="third"||o==="overview")&&((ae=document.exitPointerLock)==null||ae.call(document)),z!=="third"&&(e.fov=jh,e.updateProjectionMatrix());const q="ontouchstart"in window||navigator.maxTouchPoints>0,ne=document.getElementById("vjoy-zone");ne&&(ne.style.display=q&&(z==="third"||z==="first")?"block":"none"),y.active=!1,y.x=0,y.y=0,E&&(E.style.display="none"),t.style.cursor=o==="overview"?"grab":"pointer",t.style.visibility=o==="flat"?"hidden":"visible",document.querySelectorAll(".vtbtn").forEach(me=>me.classList.toggle("active",me.dataset.view===o))}const Z=new U,W=new U,Y=new U,re=new U,ie=new U,ce=new U(0,1,0);function se(z){re.copy(i.position);let le=!1;if(o==="flat"){if(Y.set(0,0,0),(n.KeyW||n.ArrowUp)&&(Y.z-=1),(n.KeyS||n.ArrowDown)&&(Y.z+=1),(n.KeyA||n.ArrowLeft)&&(Y.x-=1),(n.KeyD||n.ArrowRight)&&(Y.x+=1),(n.KeyW||n.KeyS||n.KeyA||n.KeyD||n.ArrowUp||n.ArrowDown||n.ArrowLeft||n.ArrowRight)&&l&&(l=!1,a=[]),l&&a.length>0&&Y.lengthSq()===0){const ne=a[c],ae=ne.x-i.position.x,me=ne.z-i.position.z,Ee=Math.sqrt(ae*ae+me*me);Ee<.25?++c>=a.length&&(l=!1,a=[]):Y.set(ae/Ee,0,me/Ee)}if(Y.lengthSq()>0){Y.normalize(),i.position.x+=Y.x*Ts*z,i.position.z+=Y.z*Ts*z;let ae=Math.atan2(Y.x,Y.z)-i.rotation.y;for(;ae>Math.PI;)ae-=Math.PI*2;for(;ae<-Math.PI;)ae+=Math.PI*2;i.rotation.y+=ae*Math.min(1,20*z),le=!0}const q=nc(re,i.position);i.position.set(q.x,0,q.z),e.position.set(i.position.x,60,i.position.z),e.lookAt(i.position.x,0,i.position.z)}else if(o==="overview"){if(l){const q=1-Math.exp(-8*z);m+=(i.position.x-m)*q,p+=(i.position.z-p)*q,x=!1}else if(!x){const q=1-Math.exp(-5*z);m+=(i.position.x-m)*q,p+=(i.position.z-p)*q}ie.set(m,w,p+1);const F=e.position.distanceTo(ie)>22?20:8;if(e.position.lerp(ie,1-Math.exp(-F*z)),e.lookAt(m,0,p),l&&a.length>0){const q=a[c],ne=q.x-i.position.x,ae=q.z-i.position.z,me=Math.sqrt(ne*ne+ae*ae);me<.25?++c>=a.length&&(l=!1,a=[]):(i.position.x+=ne/me*Ts*1.4*z,i.position.z+=ae/me*Ts*1.4*z,i.rotation.y=Math.atan2(ne,ae),le=!0)}}else if(o==="third"){const F=ve(z);le=F.isMoving;const q=nc(re,i.position);if(i.position.set(q.x,0,q.z),le&&!h){let N=i.rotation.y-s;for(;N>Math.PI;)N-=Math.PI*2;for(;N<-Math.PI;)N+=Math.PI*2;const He=F.fromKeys?5:3;s+=N*He*z}const ne=G(i.position.x,i.position.z,s,f),ae=ne<f*.85,me=i.position.y+1.2;g+=z*12,v+=((le?1:0)-v)*Math.min(1,8*z);const Ee=Math.sin(g)*.035*v;ie.set(i.position.x-Math.sin(s)*Math.cos(d)*ne,me+Math.sin(d)*ne+Ee,i.position.z-Math.cos(s)*Math.cos(d)*ne),ne<f*.92?e.position.copy(ie):e.position.lerp(ie,1-Math.exp(-14*z)),e.lookAt(i.position.x,me,i.position.z);const Ne=ae?Nx:le?Dx:jh;e.fov+=(Ne-e.fov)*Math.min(1,6*z),e.updateProjectionMatrix()}else{le=ve(z).isMoving;const F=nc(re,i.position);i.position.set(F.x,0,F.z),e.position.set(i.position.x,Ix,i.position.z),e.rotation.order="YXZ",e.rotation.set(r,Math.PI+s,0)}return le}function ve(z){e.getWorldDirection(Z),Z.y=0,Z.normalize(),W.crossVectors(Z,ce).normalize(),Y.set(0,0,0),(n.KeyW||n.ArrowUp)&&Y.addScaledVector(Z,1),(n.KeyS||n.ArrowDown)&&Y.addScaledVector(Z,-1),(n.KeyA||n.ArrowLeft)&&Y.addScaledVector(W,-1),(n.KeyD||n.ArrowRight)&&Y.addScaledVector(W,1),y.active&&(Y.addScaledVector(Z,-y.y),Y.addScaledVector(W,y.x),l&&(l=!1,a=[]));const le=n.KeyW||n.KeyS||n.KeyA||n.KeyD||n.ArrowUp||n.ArrowDown||n.ArrowLeft||n.ArrowRight,F=le;if(le&&l&&(l=!1,a=[]),l&&a.length>0&&Y.lengthSq()===0){const q=a[c],ne=q.x-i.position.x,ae=q.z-i.position.z,me=Math.sqrt(ne*ne+ae*ae);me<.25?++c>=a.length&&(l=!1,a=[]):Y.set(ne/me,0,ae/me)}if(Y.lengthSq()>0){Y.normalize(),i.position.x+=Y.x*Ts*z,i.position.z+=Y.z*Ts*z;let ne=Math.atan2(Y.x,Y.z)-i.rotation.y;for(;ne>Math.PI;)ne-=Math.PI*2;for(;ne<-Math.PI;)ne+=Math.PI*2;return i.rotation.y+=ne*Math.min(1,20*z),{isMoving:!0,fromKeys:F}}return{isMoving:!1,fromKeys:F}}function G(z,le,F,q){const ne=-Math.sin(F),ae=-Math.cos(F);let me=q;for(const Ee of bd){const Ne=K(z,le,ne,ae,Ee);Ne>.3&&Ne<me&&(me=Ne-.25)}return Math.max(.8,me)}function K(z,le,F,q,ne){const ae=F===0?1e10:1/F,me=q===0?1e10:1/q,Ee=(ne.minX-z)*ae,Ne=(ne.maxX-z)*ae,N=(ne.minZ-le)*me,He=(ne.maxZ-le)*me,De=Math.max(Math.min(Ee,Ne),Math.min(N,He)),Qe=Math.min(Math.max(Ee,Ne),Math.max(N,He));return Qe<.001||De>Qe?1/0:De>.001?De:1/0}return I(o),{update:se,navigate:T,setMode:I,getMode:()=>o,isDragMoved:()=>u,setNavPath:z=>{a=z,c=0,l=!0}}}function Ox(i){const e=document.getElementById("hud-toast");e&&(e.textContent=i,e.classList.add("show"),clearTimeout(e._t),e._t=setTimeout(()=>e.classList.remove("show"),2e3))}function Fx(i){const e=[];return Bx(i,e),zx(i,e),kx(i,e),Hx(i,e),Gx(i,e),{colliders:e}}const nt={oak:()=>new Fe({color:11565120,roughness:.82,metalness:0}),white:()=>new Fe({color:15789284,roughness:.72,metalness:0}),dark:()=>new Fe({color:3024928,roughness:.62,metalness:.08}),metal:()=>new Fe({color:9474200,roughness:.38,metalness:.8}),chair:()=>new Fe({color:2767456,roughness:.82,metalness:0}),pink:()=>new Fe({color:13656192,roughness:.72,metalness:0}),green:()=>new Fe({color:4761712,roughness:.72,metalness:0}),amber:()=>new Fe({color:15241280,roughness:.72,metalness:0}),blue:()=>new Fe({color:4227264,roughness:.72,metalness:0}),screen:()=>new Fe({color:1054752,emissive:1056832,emissiveIntensity:.6,roughness:.08}),bean:()=>new Fe({color:9453728,roughness:.92,metalness:0}),sofa:()=>new Fe({color:4878400,roughness:.88,metalness:0})};function En(i,e,t,n,s,r,o,a,c,l=.12){const h=new be(new $e(r,o,a),e);return h.position.set(t,n,s),i.add(h),c&&c.push({minX:t-r/2-l,maxX:t+r/2+l,minZ:s-a/2-l,maxZ:s+a/2+l}),h}function yi(i,e,t,n,s,r,o){const a=o??nt.oak(),c=.76,l=.06,h=c-l,u=.05;En(i,a,e,c-l/2,t,n,l,s,r,.1);const d=[e-n/2+.12,e+n/2-.12],f=[t-s/2+.12,t+s/2-.12];d.forEach(g=>f.forEach(v=>{const m=new be(new kt(u,u,h,6),nt.metal());m.position.set(g,h/2,v),i.add(m)}))}function un(i,e,t,n=0,s,r){const o=r??nt.chair(),a=new Qn;a.position.set(e,0,t),a.rotation.y=n,i.add(a);const c=new be(new $e(.5,.07,.5),o);c.position.y=.46,a.add(c);const l=new be(new $e(.5,.52,.06),o);l.position.set(0,.75,-.22),a.add(l);const h=nt.metal();[[-.2,-.2],[.2,-.2],[-.2,.2],[.2,.2]].forEach(([u,d])=>{const f=new be(new kt(.03,.03,.46,5),h);f.position.set(u,.23,d),a.add(f)}),s&&s.push({minX:e-.35,maxX:e+.35,minZ:t-.35,maxZ:t+.35})}function An(i,e,t,n,s=0){const r=new Qn;r.position.set(e,t,n),r.rotation.y=s,i.add(r);const o=new be(new $e(.54,.32,.04),nt.screen());o.position.y=.22,r.add(o);const a=new be(new kt(.015,.015,.18,5),nt.metal());a.position.y=.07,r.add(a);const c=new be(new $e(.22,.02,.14),nt.metal());c.position.y=0,r.add(c)}function Un(i,e,t){const n=new be(new kt(.15,.1,.3,7),nt.amber());n.position.set(e,.15,t),i.add(n);const s=new be(new Et(.3,8,6),nt.green());s.position.set(e,.55,t),i.add(s)}function Bx(i,e){yi(i,-11,-14,4.5,2,e),un(i,-11-2.6,-14-.5,0,e),un(i,-11-2.6,-14+.5,0,e),un(i,-11+2.6,-14-.5,Math.PI,e),un(i,-11+2.6,-14+.5,Math.PI,e),un(i,-11,-14-1.2,Math.PI/2,e,nt.pink()),un(i,-11,-14+1.2,-Math.PI/2,e,nt.pink());const s=new be(new $e(5,2.4,.06),new Fe({color:16448248,roughness:.5}));s.position.set(-11,1.8,P.minZ+.1),i.add(s),En(i,nt.white(),P.minX+.5,1,-18,.5,2,3,e),yi(i,P.minX+1.2,-12,2,.8,e),An(i,P.minX+1,.76,-14+1.8,Math.PI/2),An(i,P.minX+1,.76,-14+2.2,Math.PI/2),un(i,P.minX+2,-12,Math.PI/2,e,nt.pink()),Un(i,P.minX+.5,P.midZ+.6),Un(i,-3,P.minZ+.6)}function zx(i,e){[-20,-16,-12,-8].forEach(r=>{yi(i,P.maxX-1.4,r,1.8,.7,e,nt.white()),An(i,P.maxX-1.1,.76,r-.18,-Math.PI/2),An(i,P.maxX-1.1,.76,r+.18,-Math.PI/2),un(i,P.maxX-2.5,r,-Math.PI/2,e,nt.blue())}),En(i,nt.dark(),7,1.1,P.minZ+.6,.8,2.2,.6,e),En(i,nt.dark(),8,1.1,P.minZ+.6,.8,2.2,.6,e),En(i,nt.dark(),9,1.1,P.minZ+.6,.8,2.2,.6,e),[-4,-3,-2].forEach(r=>{const o=new be(new $e(.6,.02,.4),new Fe({color:65348,emissive:65348,emissiveIntensity:3}));o.position.set(11+r,1.6,P.minZ+.32),i.add(o)}),yi(i,11,-13,3,.75,e),yi(i,11,-15,3,.75,e),An(i,11-.8,.76,-13),An(i,11,.76,-13),An(i,11+.8,.76,-13),An(i,11-.8,.76,-15,Math.PI),An(i,11,.76,-15,Math.PI),An(i,11+.8,.76,-15,Math.PI),[-1,0,1].forEach(r=>{un(i,11+r,-14+1.8,Math.PI,e,nt.blue()),un(i,11+r,-14-1.8,0,e,nt.blue())}),Un(i,P.maxX-.5,P.midZ+.6),Un(i,15,P.minZ+.6)}function kx(i,e){const s=new be(new kt(1.4,1.4,.06,16),nt.oak());s.position.set(-11,.74,0),i.add(s),e.push({minX:-11-1.6,maxX:-11+1.6,minZ:0-1.6,maxZ:0+1.6});for(let o=0;o<4;o++){const a=o*Math.PI/2+Math.PI/4,c=new be(new kt(.04,.04,.74,6),nt.metal());c.position.set(-11+Math.cos(a)*1.1,.37,0+Math.sin(a)*1.1),i.add(c)}for(let o=0;o<6;o++){const a=o/6*Math.PI*2,c=2;un(i,-11+Math.cos(a)*c,0+Math.sin(a)*c,a+Math.PI,null,nt.amber())}const r=new be(new $e(3.5,2,.08),nt.screen());r.position.set(-11,2.1,P.minX+.1),r.rotation.y=Math.PI/2,i.add(r),En(i,nt.white(),P.minX+.5,.45,0+2.5,.5,.9,2,e),Un(i,P.minX+.5,P.lobbyZ-.6),Un(i,-3,P.midZ+.5)}function Hx(i,e){En(i,nt.sofa(),11-2.5,.44,0+1.5,3.2,.88,1,e,.1),En(i,nt.sofa(),11-3.5,.44,0,1,.88,2.2,e,.1),yi(i,11-1.8,0-.2,1.2,.7,e);const s=nt.bean();for(let c=0;c<3;c++){const l=14+c*1.4,h=new be(new Et(.42,10,8),s);h.scale.y=.65,h.position.set(l,.28,0),i.add(h),e.push({minX:l-.55,maxX:l+.55,minZ:0-.55,maxZ:0+.55})}const r=new Fe({color:2228292,roughness:.6,metalness:.3});En(i,r,P.maxX-1,1.1,0+2.5,.9,2.2,.7,e);const o=new be(new $e(.55,.44,.04),new Fe({color:2245887,emissive:1127406,emissiveIntensity:1.5}));o.position.set(P.maxX-.72,1.6,0+2.15),i.add(o),yi(i,11+1.5,0-2.5,1.6,.8,e,nt.dark());const a=new be(new $e(4,2.2,.08),nt.screen());a.position.set(9,2.3,P.maxX-.1),a.rotation.y=-Math.PI/2,i.add(a),Un(i,P.maxX-.5,P.lobbyZ-.6),Un(i,7,P.midZ+.5)}function Gx(i,e){const t=(P.lobbyZ+P.maxZ)/2;En(i,nt.white(),-8,.9,t-1,3,1.8,.7,e),[6,8,10].forEach(c=>{un(i,c,t+.5,Math.PI,e,nt.amber())}),yi(i,8,t+1.8,1.5,.6,e);const n=new be(new qc(2.2,32),new Fe({color:2245802,roughness:.4}));n.rotation.x=-Math.PI/2,n.position.set(0,.07,t),i.add(n);const s=document.createElement("canvas");s.width=512,s.height=128;const r=s.getContext("2d");r.fillStyle="#3366ff",r.font="bold 72px Inter, sans-serif",r.textAlign="center",r.fillText("SPACEWORK",256,88);const o=new be(new ei(4,1),new Fe({map:new aa(s),roughness:.4,transparent:!0}));o.rotation.x=-Math.PI/2,o.position.set(0,.08,t),i.add(o),Un(i,-5,P.maxZ-1.2),Un(i,5,P.maxZ-1.2),En(i,nt.metal(),0,1,P.lobbyZ+1.5,.4,2,.4,e);const a=new be(new $e(.38,.28,.04),nt.screen());a.position.set(0,1.9,P.lobbyZ+1.28),i.add(a)}const Vx="#0f1117",Wx="rgba(34,58,28,0.95)",Xx="rgba(230,225,215,0.12)",Zx=[{name:"LOBBY",x1:P.minX,x2:P.maxX,z1:P.lobbyZ,z2:P.maxZ,fill:"rgba(180,175,210,0.18)",border:"rgba(180,175,220,0.55)",label:"#ccc"},{name:"OPS",x1:P.minX,x2:P.centerX,z1:P.midZ,z2:P.lobbyZ,fill:"rgba(200,115,20,0.20)",border:"rgba(220,130,30,0.60)",label:"#fa9"},{name:"FUN",x1:P.centerX,x2:P.maxX,z1:P.midZ,z2:P.lobbyZ,fill:"rgba(20,170,90,0.20)",border:"rgba(30,200,100,0.55)",label:"#6fb"},{name:"DESIGN",x1:P.minX,x2:P.centerX,z1:P.minZ,z2:P.midZ,fill:"rgba(190,45,95,0.20)",border:"rgba(220,60,110,0.55)",label:"#f9b"},{name:"ENGINEERING",x1:P.centerX,x2:P.maxX,z1:P.minZ,z2:P.midZ,fill:"rgba(25,90,200,0.20)",border:"rgba(40,120,230,0.55)",label:"#8bf"}],hn=P.doorHalfW,Sc=P.mainDoorHalfW,Ds=P.leftDoorX,Ns=P.rightDoorX,Yx=[[P.minX,P.maxZ,-Sc,P.maxZ],[Sc,P.maxZ,P.maxX,P.maxZ],[P.minX,P.minZ,P.maxX,P.minZ],[P.minX,P.minZ,P.minX,P.maxZ],[P.maxX,P.minZ,P.maxX,P.maxZ],[P.minX,P.lobbyZ,Ds-hn,P.lobbyZ],[Ds+hn,P.lobbyZ,Ns-hn,P.lobbyZ],[Ns+hn,P.lobbyZ,P.maxX,P.lobbyZ],[P.minX,P.midZ,Ds-hn,P.midZ],[Ds+hn,P.midZ,Ns-hn,P.midZ],[Ns+hn,P.midZ,P.maxX,P.midZ],[P.centerX,P.minZ,P.centerX,P.lobbyZ]];class qx{constructor(e){this._nav=e,this._peers=new Map;const t=document.createElement("canvas");t.id="flat-map-canvas",Object.assign(t.style,{position:"fixed",inset:"0",width:"100%",height:"100%",zIndex:"6",display:"none",cursor:"crosshair"}),document.body.appendChild(t),this._cvs=t,this._ctx=t.getContext("2d"),this._zoom=14,this._panX=0,this._panZ=-6,this._dragging=!1,this._dragMoved=!1,this._lx=0,this._ly=0,this._ping=null,this._setupMouse(),this._setupTouch(),this._resize(),window.addEventListener("resize",()=>this._resize())}show(){this._cvs.style.display="block"}hide(){this._cvs.style.display="none"}setPeer(e,t,n,s){this._peers.set(e,{x:t,z:n,name:s})}removePeer(e){this._peers.delete(e)}setTalking(e){this._talking=e}update(e){const t=this._cvs.width,n=this._cvs.height,s=this._ctx;s.clearRect(0,0,t,n),this._drawBg(s,t,n),this._drawGrid(s,t,n),this._drawBuilding(s),this._drawRooms(s),this._drawWalls(s),this._drawDoors(s),this._drawPeers(s),this._drawPlayer(s,e),this._drawNavPing(s),this._drawHints(s,t,n)}_fire(e,t){const[n,s]=this._c2w(e,t);this._nav({x:n,z:s}),this._ping={cx:e,cy:t,born:performance.now()}}centreOn(e,t){this._panX=e,this._panZ=t}_w2c(e,t){const n=this._cvs.width/2+(e-this._panX)*this._zoom,s=this._cvs.height/2+(t-this._panZ)*this._zoom;return[n,s]}_c2w(e,t){const n=(e-this._cvs.width/2)/this._zoom+this._panX,s=(t-this._cvs.height/2)/this._zoom+this._panZ;return[n,s]}_wr(e){return e*this._zoom}_setupMouse(){const e=this._cvs;e.addEventListener("wheel",t=>{t.preventDefault();const n=e.getBoundingClientRect(),s=t.clientX-n.left,r=t.clientY-n.top,[o,a]=this._c2w(s,r),c=t.deltaMode===0?t.deltaY:t.deltaY*24,l=Math.pow(.997,c);this._zoom=Math.max(6,Math.min(55,this._zoom*l));const[h,u]=this._c2w(s,r);this._panX+=o-h,this._panZ+=a-u},{passive:!1}),e.addEventListener("mousedown",t=>{this._dragging=!0,this._dragMoved=!1,this._lx=t.clientX,this._ly=t.clientY,e.style.cursor="grabbing"}),document.addEventListener("mousemove",t=>{if(!this._dragging)return;const n=t.clientX-this._lx,s=t.clientY-this._ly;this._panX-=n/this._zoom,this._panZ-=s/this._zoom,this._lx=t.clientX,this._ly=t.clientY,(Math.abs(n)>4||Math.abs(s)>4)&&(this._dragMoved=!0)}),document.addEventListener("mouseup",t=>{if(!this._dragging||(this._dragging=!1,e.style.cursor="crosshair",this._dragMoved))return;const n=e.getBoundingClientRect();this._fire(t.clientX-n.left,t.clientY-n.top)})}_setupTouch(){const e=this._cvs;let t=0,n=0,s=!1,r=0;e.addEventListener("touchstart",o=>{if(o.preventDefault(),s=!1,o.touches.length===1)t=o.touches[0].clientX,n=o.touches[0].clientY,this._lx=t,this._ly=n;else if(o.touches.length===2){const a=o.touches[1].clientX-o.touches[0].clientX,c=o.touches[1].clientY-o.touches[0].clientY;r=Math.sqrt(a*a+c*c)}},{passive:!1}),e.addEventListener("touchmove",o=>{if(o.preventDefault(),o.touches.length===1){const a=o.touches[0].clientX-this._lx,c=o.touches[0].clientY-this._ly;this._panX-=a/this._zoom,this._panZ-=c/this._zoom,this._lx=o.touches[0].clientX,this._ly=o.touches[0].clientY,(Math.abs(a)>4||Math.abs(c)>4)&&(s=!0)}else if(o.touches.length===2){const a=o.touches[1].clientX-o.touches[0].clientX,c=o.touches[1].clientY-o.touches[0].clientY,l=Math.sqrt(a*a+c*c),h=l/(r||l),u=(o.touches[0].clientX+o.touches[1].clientX)/2,d=(o.touches[0].clientY+o.touches[1].clientY)/2,[f,g]=this._c2w(u,d);this._zoom=Math.max(6,Math.min(55,this._zoom*h));const[v,m]=this._c2w(u,d);this._panX+=f-v,this._panZ+=g-m,r=l,s=!0}},{passive:!1}),e.addEventListener("touchend",o=>{if(o.touches.length===0&&!s&&o.changedTouches.length===1){const a=e.getBoundingClientRect();this._fire(o.changedTouches[0].clientX-a.left,o.changedTouches[0].clientY-a.top)}},{passive:!1})}_resize(){this._cvs.width=window.innerWidth,this._cvs.height=window.innerHeight}_drawBg(e,t,n){e.fillStyle=Vx,e.fillRect(0,0,t,n)}_drawGrid(e,t,n){const s=this._zoom*4;if(s<10)return;e.strokeStyle="rgba(255,255,255,0.04)",e.lineWidth=1;const r=(t/2-this._panX*this._zoom)%s;for(let a=r;a<t;a+=s)e.beginPath(),e.moveTo(a,0),e.lineTo(a,n),e.stroke();const o=(n/2-this._panZ*this._zoom)%s;for(let a=o;a<n;a+=s)e.beginPath(),e.moveTo(0,a),e.lineTo(t,a),e.stroke()}_drawBuilding(e){const[t,n]=this._w2c(P.minX-20,P.minZ-20),[s,r]=this._w2c(P.maxX+20,P.maxZ+20);e.fillStyle=Wx,e.fillRect(Math.min(t,s),Math.min(n,r),Math.abs(s-t),Math.abs(r-n));const[o,a]=this._w2c(P.minX,P.maxZ),[c,l]=this._w2c(P.maxX,P.minZ);e.fillStyle=Xx,e.fillRect(Math.min(o,c),Math.min(a,l),Math.abs(c-o),Math.abs(l-a))}_drawRooms(e){Zx.forEach(t=>{const[n,s]=this._w2c(t.x1,t.z2),[r,o]=this._w2c(t.x2,t.z1),a=Math.min(n,r),c=Math.min(s,o),l=Math.abs(r-n),h=Math.abs(o-s);e.fillStyle=t.fill,e.fillRect(a,c,l,h),e.strokeStyle=t.border,e.lineWidth=1.5,e.strokeRect(a+1,c+1,l-2,h-2),l>50&&h>30&&(e.fillStyle=t.label,e.font=`bold ${Math.max(9,Math.min(13,l*.11))}px Inter, monospace`,e.textAlign="center",e.textBaseline="middle",e.shadowColor="rgba(0,0,0,0.8)",e.shadowBlur=4,e.fillText(t.name,a+l/2,c+h/2),e.shadowBlur=0)})}_drawWalls(e){e.strokeStyle="#4a4a6a",e.lineWidth=Math.max(2,this._wr(P.wallT)*.8),e.lineCap="round",Yx.forEach(([t,n,s,r])=>{const[o,a]=this._w2c(t,n),[c,l]=this._w2c(s,r);e.beginPath(),e.moveTo(o,a),e.lineTo(c,l),e.stroke()})}_drawDoors(e){const t=[{x:0,z:P.maxZ,w:Sc*2},{x:Ds,z:P.lobbyZ,w:hn*2},{x:Ns,z:P.lobbyZ,w:hn*2},{x:Ds,z:P.midZ,w:hn*2},{x:Ns,z:P.midZ,w:hn*2}];e.strokeStyle="rgba(255,220,100,0.60)",e.lineWidth=Math.max(3,this._wr(P.wallT)*.9),e.lineCap="square",t.forEach(n=>{const[s,r]=this._w2c(n.x,n.z),o=this._wr(n.w/2);Math.abs(n.z-P.maxZ)<.1||Math.abs(n.z-P.lobbyZ)<.1||Math.abs(n.z-P.midZ)<.1?(e.beginPath(),e.moveTo(s-o,r),e.lineTo(s+o,r),e.stroke()):(e.beginPath(),e.moveTo(s,r-o),e.lineTo(s,r+o),e.stroke())})}_drawPeers(e){const t=performance.now()/1e3;this._peers.forEach(({x:n,z:s,name:r},o)=>{var u;const[a,c]=this._w2c(n,s),l=Math.max(5,this._wr(.4)),h=(u=this._talking)==null?void 0:u.has(o);if(h){const d=.5+Math.sin(t*6)*.5,f=l+4+d*4;e.beginPath(),e.arc(a,c,f,0,Math.PI*2),e.strokeStyle=`rgba(0,255,136,${.6+d*.4})`,e.lineWidth=2.5,e.shadowColor="#00ff88",e.shadowBlur=10,e.stroke(),e.shadowBlur=0}e.beginPath(),e.arc(a,c,l,0,Math.PI*2),e.fillStyle=h?"rgba(0,255,120,0.9)":"rgba(255,120,150,0.85)",e.fill(),e.strokeStyle=h?"#00ff88":"#ff88aa",e.lineWidth=1.5,e.stroke(),l>5&&(e.fillStyle="#fff",e.font=`bold ${Math.max(8,l*1.1)}px Inter,monospace`,e.textAlign="center",e.textBaseline="bottom",e.shadowColor="#000",e.shadowBlur=3,e.fillText(r,a,c-l-2),e.shadowBlur=0)})}_drawPlayer(e,t){var h;const[n,s]=this._w2c(t.x,t.z),r=Math.max(6,this._wr(.45)),o=performance.now()/600,a=r+Math.sin(o)*r*.35,c=(h=this._talking)==null?void 0:h.has("self"),l=performance.now()/1e3;if(c){const u=.5+Math.sin(l*6)*.5,d=r+5+u*5;e.beginPath(),e.arc(n,s,d,0,Math.PI*2),e.strokeStyle=`rgba(0,255,136,${.7+u*.3})`,e.lineWidth=3,e.shadowColor="#00ff88",e.shadowBlur=14,e.stroke(),e.shadowBlur=0}else e.beginPath(),e.arc(n,s,a,0,Math.PI*2),e.strokeStyle="rgba(0,255,255,0.25)",e.lineWidth=2,e.stroke();e.shadowColor=c?"#00ff88":"#00ffff",e.shadowBlur=10,e.beginPath(),e.arc(n,s,r,0,Math.PI*2),e.fillStyle=c?"#00ff88":"#00e5ff",e.fill(),e.shadowBlur=0,e.fillStyle="#fff",e.font=`bold ${Math.max(9,r*1.2)}px Inter,monospace`,e.textAlign="center",e.textBaseline="bottom",e.shadowColor="#000",e.shadowBlur=3,e.fillText("YOU",n,s-r-3),e.shadowBlur=0}_drawNavPing(e){if(!this._ping)return;const t=performance.now()-this._ping.born,n=600;if(t>n){this._ping=null;return}const s=t/n,r=1-s,o=8+s*18,{cx:a,cy:c}=this._ping;e.globalAlpha=r,e.strokeStyle="#ffffff",e.lineWidth=2;const l=6;e.beginPath(),e.moveTo(a-l,c),e.lineTo(a+l,c),e.moveTo(a,c-l),e.lineTo(a,c+l),e.stroke(),e.strokeStyle="#00ffff",e.lineWidth=1.5,e.beginPath(),e.arc(a,c,o,0,Math.PI*2),e.stroke(),e.globalAlpha=1}_drawHints(e,t,n){e.fillStyle="rgba(255,255,255,0.22)",e.font="11px Inter, monospace",e.textAlign="center",e.textBaseline="bottom",e.fillText("Click to walk  ·  Scroll to zoom  ·  Drag to pan  ·  WASD to move",t/2,n-8)}}const Do=i=>"#"+i.toString(16).padStart(6,"0");class $x{constructor(e){this._onSelect=e,this._selected=parseInt(localStorage.getItem("spaceAvatarId")??"0",10),this._el=this._build(),document.body.appendChild(this._el)}show(){this._el.classList.remove("ap-hidden"),this._sync()}hide(){this._el.classList.add("ap-hidden")}getSelected(){return this._selected}_build(){const e=document.createElement("div");return e.id="avatar-picker",e.className="ap-hidden",e.innerHTML=`
      <div class="ap-panel">
        <div class="ap-head">
          <span class="ap-title">Choose Your Avatar</span>
          <button class="ap-close" aria-label="Close">✕</button>
        </div>
        <div class="ap-grid">
          ${$i.map(t=>this._card(t)).join("")}
        </div>
        <p class="ap-hint">Your selection is saved automatically</p>
      </div>
    `,e.querySelector(".ap-close").addEventListener("click",()=>this.hide()),e.addEventListener("click",t=>{t.target===e&&this.hide()}),e.querySelectorAll(".ap-card").forEach(t=>{t.addEventListener("click",()=>{const n=parseInt(t.dataset.id,10);this._selected=n,localStorage.setItem("spaceAvatarId",String(n)),this._sync(),this._onSelect(n)})}),e}_sync(){this._el.querySelectorAll(".ap-card").forEach(e=>e.classList.toggle("ap-active",parseInt(e.dataset.id,10)===this._selected))}_card(e){const t=Do(e.skin),n=Do(e.hair),s=Do(e.outfit),r=Do(e.accent);return`
      <div class="ap-card" data-id="${e.id}" title="${e.label}">
        <div class="ap-fig">
          <svg viewBox="0 0 60 82" xmlns="http://www.w3.org/2000/svg">
            <!-- Hair base -->
            <ellipse cx="30" cy="16" rx="17" ry="14" fill="${n}"/>
            <!-- Head -->
            <circle cx="30" cy="22" r="13" fill="${t}"/>
            <!-- Ears -->
            <ellipse cx="17.5" cy="22" rx="3.5" ry="4.5" fill="${t}"/>
            <ellipse cx="42.5" cy="22" rx="3.5" ry="4.5" fill="${t}"/>
            <!-- Eye whites -->
            <circle cx="25" cy="21" r="2.8" fill="${r}"/>
            <circle cx="35" cy="21" r="2.8" fill="${r}"/>
            <!-- Pupils -->
            <circle cx="25" cy="21" r="1.6" fill="#111"/>
            <circle cx="35" cy="21" r="1.6" fill="#111"/>
            <!-- Neck -->
            <rect x="26.5" y="34" width="7" height="5" rx="2" fill="${t}"/>
            <!-- Shoulders -->
            <ellipse cx="14" cy="41" rx="7" ry="5" fill="${s}"/>
            <ellipse cx="46" cy="41" rx="7" ry="5" fill="${s}"/>
            <!-- Body -->
            <rect x="14" y="39" width="32" height="24" rx="6" fill="${s}"/>
            <!-- Chest accent -->
            <rect x="22" y="44" width="16" height="5" rx="2" fill="${r}" opacity="0.75"/>
            <!-- Belt -->
            <rect x="14" y="59" width="32" height="4" rx="2" fill="#111" opacity="0.55"/>
            <!-- Arms -->
            <rect x="5"  y="40" width="10" height="20" rx="5" fill="${s}"/>
            <rect x="45" y="40" width="10" height="20" rx="5" fill="${s}"/>
            <!-- Hands -->
            <circle cx="10" cy="62" r="5" fill="${t}"/>
            <circle cx="50" cy="62" r="5" fill="${t}"/>
            <!-- Legs -->
            <rect x="16" y="62" width="11" height="14" rx="4" fill="${s}"/>
            <rect x="33" y="62" width="11" height="14" rx="4" fill="${s}"/>
            <!-- Boots -->
            <rect x="15" y="73" width="13" height="6" rx="2" fill="#111"/>
            <rect x="32" y="73" width="13" height="6" rx="2" fill="#111"/>
          </svg>
        </div>
        <div class="ap-label">${e.label}</div>
        <div class="ap-tick">✓</div>
      </div>
    `}}const Kx=[{name:"OUTSIDE",color:"#88cc66",mapColor:"rgba(70,120,50,0.35)",border:"#66aa44",desc:"Outside the building"},{name:"LOBBY",color:"#ffffff",mapColor:"rgba(200,200,230,0.40)",border:"#aaaacc",desc:"Reception & Entrance"},{name:"OPS",color:"#ffaa44",mapColor:"rgba(200,120,20,0.40)",border:"#ffaa44",desc:"Operations & Support"},{name:"FUN",color:"#44ffaa",mapColor:"rgba(20,180,100,0.40)",border:"#44ffaa",desc:"Chill & Social"},{name:"DESIGN",color:"#ff6ba0",mapColor:"rgba(200,50,100,0.40)",border:"#ff6ba0",desc:"UI/UX & 3D Design"},{name:"ENGINEERING",color:"#44aaff",mapColor:"rgba(30,100,200,0.40)",border:"#44aaff",desc:"Development & Code"}],rt={minX:-26,maxX:26,minZ:-27,maxZ:28,W:180,H:200};let mr,vn;function Jx(i,e,t,n,s){const r=window._spaceUsername||"You",o=parseInt(localStorage.getItem("spaceAvatarId")??"0",10),a=_d(r,o);a.position.set(0,0,22),i.add(a);const c=new $x(E=>{yd(a,r,E),s==null||s(E)}),l=document.getElementById("avatar-btn");l&&l.addEventListener("click",()=>c.show());const{colliders:h}=Fx(i);Ax(h);const u=Ux(a,e,t.domElement),d=new gd;let f="",g=u.getMode();const v=new qx(E=>u.navigate(E)),m=[],p=[];i.traverse(E=>{E.userData.mapHide&&m.push(E),E.userData.mapShow&&p.push(E)}),m.forEach(E=>{E.visible=!1}),p.forEach(E=>{E.visible=!1}),v.centreOn(a.position.x,a.position.z),v.show();const w=document.getElementById("minimap");w&&(w.style.display="none");function x(E){m.forEach(T=>{T.visible=E!=="overview"&&E!=="flat"}),p.forEach(T=>{T.visible=E==="overview"}),a.visible=E!=="first",E==="flat"?(v.centreOn(a.position.x,a.position.z),v.show()):v.hide();const D=document.getElementById("minimap");D&&(D.style.display=E==="flat"?"none":"")}jx(u);function y(){const E=Ko(a.position);E!==f&&(f=E,n==null||n(f))}function L(){const E=document.getElementById("mode-badge");if(!E)return;const D=u.getMode(),T={flat:"🎮 FLAT MAP",overview:"🗺 3D MAP",third:"👤 3RD PERSON",first:"👁 1ST PERSON"};E.textContent=T[D]??D;const S=D==="flat"||D==="overview";E.style.background=S?"rgba(255,160,0,0.2)":"rgba(0,100,255,0.2)",E.style.borderColor=S?"rgba(255,160,0,0.4)":"rgba(0,150,255,0.4)",E.style.color=S?"#ffaa00":"#4af"}function C(){requestAnimationFrame(C);const E=d.getDelta(),D=u.update(E);Md(a,D,E),y(),L();const T=u.getMode();T!==g&&(g=T,x(T)),ty(a.position,T),T==="flat"&&v.update(a.position)}return C(),{getPosition:()=>a.position.clone(),getRotation:()=>a.rotation.clone(),navigate:E=>u.navigate(E),isDragMoved:()=>u.isDragMoved(),getMode:()=>u.getMode(),setView:E=>{u.setMode(E),x(E)},setStatus:E=>vd(a,E),setSelfTalking:(E,D)=>xd(a,E,D),setTalkingPeers:E=>v.setTalking(E),peerJoin:(E,D)=>v.setPeer(E,0,0,D),peerMove:(E,D,T,S)=>v.setPeer(E,D,T,S),peerLeave:E=>v.removePeer(E)}}function jx(i,e){const t=document.getElementById("minimap-canvas");t&&(t.style.cursor="crosshair",t.addEventListener("click",n=>{const s=t.getBoundingClientRect(),r=(n.clientX-s.left)/s.width*rt.W,o=(n.clientY-s.top)/s.height*rt.H,a=rt.minX+r/rt.W*(rt.maxX-rt.minX),c=rt.maxZ-o/rt.H*(rt.maxZ-rt.minZ);i.navigate({x:a,z:c}),Qx(r,o)}))}function Qx(i,e){vn&&(vn.strokeStyle="#fff",vn.lineWidth=1.5,vn.globalAlpha=.9,vn.beginPath(),vn.arc(i,e,7,0,Math.PI*2),vn.stroke(),vn.globalAlpha=1)}function ey(){mr=document.getElementById("minimap-canvas"),mr&&(mr.width=rt.W,mr.height=rt.H,vn=mr.getContext("2d"))}function As(i,e){const t=(i-rt.minX)/(rt.maxX-rt.minX)*rt.W,n=(rt.maxZ-e)/(rt.maxZ-rt.minZ)*rt.H;return[t,n]}function ty(i,e){if(!vn){ey();return}const t=vn;t.clearRect(0,0,rt.W,rt.H),t.fillStyle="rgba(50,90,40,0.5)",t.fillRect(0,0,rt.W,rt.H);const[n,s]=As(P.minX,P.maxZ),[r,o]=As(P.maxX,P.minZ);t.fillStyle="rgba(240,235,225,0.25)",t.fillRect(n,s,r-n,o-s),[{name:"LOBBY",x1:P.minX,x2:P.maxX,z1:P.lobbyZ,z2:P.maxZ},{name:"OPS",x1:P.minX,x2:P.centerX,z1:P.midZ,z2:P.lobbyZ},{name:"FUN",x1:P.centerX,x2:P.maxX,z1:P.midZ,z2:P.lobbyZ},{name:"DESIGN",x1:P.minX,x2:P.centerX,z1:P.minZ,z2:P.midZ},{name:"ENGINEERING",x1:P.centerX,x2:P.maxX,z1:P.minZ,z2:P.midZ}].forEach(u=>{const d=Kx.find(x=>x.name===u.name);if(!d)return;const[f,g]=As(u.x1,u.z2),[v,m]=As(u.x2,u.z1);t.fillStyle=d.mapColor,t.fillRect(f,g,v-f,m-g),t.strokeStyle=d.border+"88",t.lineWidth=1,t.strokeRect(f+.5,g+.5,v-f-1,m-g-1),t.fillStyle=d.border,t.font="bold 7px Inter, monospace",t.textAlign="center";const p=(f+v)/2,w=g+10;t.fillText(u.name,p,w)}),[{x:0,z:P.maxZ,label:"🚪"},{x:-11,z:P.lobbyZ,label:"▶"},{x:11,z:P.lobbyZ,label:"▶"},{x:-11,z:P.midZ,label:"▶"},{x:11,z:P.midZ,label:"▶"}].forEach(({x:u,z:d,label:f})=>{const[g,v]=As(u,d);t.fillStyle="rgba(255,255,255,0.7)",t.font="8px sans-serif",t.textAlign="center",t.fillText(f,g,v+3)}),t.strokeStyle="rgba(220,210,190,0.5)",t.lineWidth=1.5,t.strokeRect(n,s,r-n,o-s),e==="overview"&&(t.strokeStyle="rgba(255,160,0,0.7)",t.lineWidth=2,t.strokeRect(2,2,rt.W-4,rt.H-4),t.fillStyle="rgba(255,160,0,0.06)",t.fillRect(2,2,rt.W-4,rt.H-4));const[l,h]=As(i.x,i.z);t.shadowColor="#00ffff",t.shadowBlur=8,t.fillStyle="#00ffff",t.beginPath(),t.arc(l,h,5,0,Math.PI*2),t.fill(),t.shadowBlur=0,t.fillStyle="#fff",t.font="bold 7px Inter, monospace",t.textAlign="center",t.shadowColor="#0ff",t.shadowBlur=4,t.fillText("YOU",l,h-8),t.shadowBlur=0,t.fillStyle="rgba(255,255,255,0.28)",t.font="7px Inter, monospace",t.textAlign="center",t.fillText("click map to move",rt.W/2,rt.H-4)}function ny(){const i=document.getElementById("screen-overlay"),e=document.getElementById("screen-iframe"),t=document.getElementById("screen-overlay-close"),n=document.getElementById("screen-overlay-title"),s=document.getElementById("screen-overlay-tool"),r=document.getElementById("screen-overlay-zone");if(!i)return console.warn("[screenOverlay] #screen-overlay not found in DOM"),{openScreen:()=>{},closeScreen:()=>{},isOpen:()=>!1};t.addEventListener("click",a),i.addEventListener("click",l=>{l.target===i&&a()}),document.addEventListener("keydown",l=>{l.code==="Escape"&&i.classList.contains("visible")&&(a(),l.stopPropagation())},!0);function o(l){var h;if(n.textContent=l.label,s.textContent=l.tool,r){r.textContent=l.zone;const u={BRIDGE:"#4466ff",LAB:"#00ffcc",LOUNGE:"#aa55ff"};r.style.color=u[l.zone]||"#fff"}e.src=l.url,i.classList.add("visible"),(h=document.exitPointerLock)==null||h.call(document)}function a(){i.classList.remove("visible"),setTimeout(()=>{e.src=""},200)}function c(){return i.classList.contains("visible")}return{openScreen:o,closeScreen:a,isOpen:c}}function Qh(...i){const e=i.join("\0");let t=5381;for(let n=0;n<e.length;n++)t=(Math.imul(33,t)^e.charCodeAt(n))>>>0;return t.toString(36).padStart(7,"0")}class Jo{constructor(e,t=0){this.id=Qh(e,String(t)),this.seed=e,this.epoch=t,this.resonance=1}tick(){return this.epoch++,this}harmonisesWith(e,t=.51){return this.resonance>=t&&e.resonance>=t}static merge(e,t){const[n,s]=e.id<t.id?[e,t]:[t,e];return new Jo(Qh(n.id,s.id),Math.max(n.epoch,s.epoch))}toString(){return`freq:${this.id}@${this.epoch}`}}class Qc{constructor(e={}){this._v=new Map(Object.entries(e))}tick(e){return this._v.set(e,(this._v.get(e)||0)+1),this}get(e){return this._v.get(e)||0}merge(e){for(const[t,n]of e._v)this._v.set(t,Math.max(this.get(t),n));return this}clone(){return new Qc(Object.fromEntries(this._v))}compare(e){const t=new Set([...this._v.keys(),...e._v.keys()]);let n=!1,s=!1;for(const r of t){const o=this.get(r),a=e.get(r);o<a&&(n=!0),o>a&&(s=!0)}return!n&&!s?"equal":n&&!s?"before":!n&&s?"after":"concurrent"}happensBefore(e){return this.compare(e)==="before"}toJSON(){return Object.fromEntries(this._v)}}class el{constructor(){this._entries=new Map}set(e,t,n,s){const r=this._entries.get(e);if(!r)return this._entries.set(e,{value:t,clock:n.clone(),nodeId:s}),!0;const o=n.compare(r.clock);return o==="after"||o==="concurrent"&&s>r.nodeId?(this._entries.set(e,{value:t,clock:n.clone(),nodeId:s}),!0):!1}get(e){var t;return(t=this._entries.get(e))==null?void 0:t.value}has(e){return this._entries.has(e)}keys(){return this._entries.keys()}entries(){return[...this._entries.entries()].map(([e,t])=>[e,t.value])}merge(e){for(const[t,{value:n,clock:s,nodeId:r}]of e._entries)this.set(t,n,s,r);return this}clone(){const e=new el;for(const[t,n]of this._entries)e._entries.set(t,{...n,clock:n.clock.clone()});return e}size(){return this._entries.size}}class eu{constructor(e){this.frequency=e,this.state=new el,this.clock=new Qc,this.nodes=new Set,this.createdAt=Date.now()}enter(e){this.nodes.add(e),this.clock.tick(e)}exit(e){this.nodes.delete(e)}update(e,t,n){return this.clock.tick(e),this.state.set(t,n,this.clock.clone(),e)}get(e){return this.state.get(e)}merge(e){this.state.merge(e.state),this.clock.merge(e.clock);for(const t of e.nodes)this.nodes.add(t);return this}consistency(e){return this.clock.compare(e.clock)}snapshot(){return{frequency:this.frequency.toString(),nodeCount:this.nodes.size,stateSize:this.state.size(),epoch:this.frequency.epoch,clock:this.clock.toJSON()}}}function No(...i){const e=i.join("|");let t=5381;for(let n=0;n<e.length;n++)t=(Math.imul(33,t)^e.charCodeAt(n))>>>0;return t.toString(36)}var xt,Kn,Ai,Mc,Ec;class iy{constructor(e,t=""){Je(this,Ai);Je(this,xt,new Map);Je(this,Kn);vt(this,Kn,e),oe(this,xt).set(e,{id:e,publicKey:t,vouchedBy:null,chainDepth:0,chainHash:No(e),votes:new Set([e]),joinedAt:Date.now()})}get rootId(){return oe(this,Kn)}vouch(e,t,n=""){if(!this.isVerified(e))throw new Error(`Voucher "${e}" is not a verified member`);if(oe(this,xt).has(t))throw new Error(`"${t}" is already in the network`);const s=oe(this,xt).get(e);return oe(this,xt).set(t,{id:t,publicKey:n,vouchedBy:e,chainDepth:s.chainDepth+1,chainHash:No(t,s.chainHash),votes:new Set([e]),joinedAt:Date.now()}),this.getMember(t)}vote(e,t){if(!this.isVerified(e))throw new Error(`Voter "${e}" is not verified`);if(!oe(this,xt).has(t))throw new Error(`"${t}" not found`);oe(this,xt).get(t).votes.add(e)}revokeVote(e,t){var n;(n=oe(this,xt).get(t))==null||n.votes.delete(e)}remove(e){const t=[];return tt(this,Ai,Mc).call(this,e,t),t}isVerified(e){if(e===oe(this,Kn))return!0;const t=new Set;let n=e;for(;n!==oe(this,Kn);){if(t.has(n))return!1;t.add(n);const s=oe(this,xt).get(n);if(!(s!=null&&s.vouchedBy))return!1;n=s.vouchedBy}return!0}isActive(e){if(e===oe(this,Kn))return!0;if(!this.isVerified(e))return!1;const t=oe(this,xt).get(e),n=tt(this,Ai,Ec).call(this),s=Math.floor(n.size/2)+1;return[...t.votes].filter(o=>n.has(o)).length>=s}trustScore(e){if(!this.isVerified(e))return 0;const t=oe(this,xt).get(e),n=tt(this,Ai,Ec).call(this);return n.size===0?0:[...t.votes].filter(r=>n.has(r)).length/n.size}depth(e){var t;return((t=oe(this,xt).get(e))==null?void 0:t.chainDepth)??-1}getMember(e){return oe(this,xt).get(e)??null}getAll(){return[...oe(this,xt).values()]}size(){return oe(this,xt).size}validateIntegrity(){for(const[e,t]of oe(this,xt)){if(e===oe(this,Kn)){if(t.chainHash!==No(e))return!1;continue}const n=oe(this,xt).get(t.vouchedBy);if(!n)return!1;const s=No(e,n.chainHash);if(t.chainHash!==s)return!1}return!0}}xt=new WeakMap,Kn=new WeakMap,Ai=new WeakSet,Mc=function(e,t){if(oe(this,xt).has(e)){t.push(e),oe(this,xt).delete(e);for(const[n,s]of oe(this,xt))s.vouchedBy===e&&tt(this,Ai,Mc).call(this,n,t)}},Ec=function(){const e=new Set;for(const t of oe(this,xt).keys())this.isVerified(t)&&e.add(t);return e};class sy{constructor(e,t=""){this.id=e,this.publicKey=t,this.realities=new Map,this.neighbors=new Set,this.position={x:0,y:0,z:0},this.meta={}}tune(e){return e.enter(this.id),this.realities.set(e.frequency.id,e),this}detune(e){const t=this.realities.get(e);return t&&(t.exit(this.id),this.realities.delete(e)),this}bridge(e,t){return this.tune(e),this.tune(t),this}isIn(e){return this.realities.has(e)}moveTo(e,t,n,s){this.position={x:e,y:t,z:n};const r=this.realities.get(s);r&&r.update(this.id,`pos:${this.id}`,{x:e,y:t,z:n})}connect(e){this.neighbors.add(e)}disconnect(e){this.neighbors.delete(e)}}var Or,wc;class ry{constructor(){Je(this,Or);this.nodes=new Map,this.realities=new Map,this._msgLog=[]}createReality(e,t=0){const n=new Jo(e.id,t),s=new eu(n),r=new iy(e.id,e.publicKey);return this.realities.set(n.id,{reality:s,trust:r}),this.addNode(e),e.tune(s),{reality:s,trust:r,frequency:n}}addNode(e){this.nodes.set(e.id,e)}getNode(e){return this.nodes.get(e)??null}joinReality(e,t,n){const s=this.realities.get(t);if(!s)throw new Error(`Reality "${t}" does not exist`);const{reality:r,trust:o}=s;return o.vouch(n,e.id,e.publicKey),this.addNode(e),e.tune(r),e}route(e,t,n){if(e===t)return[e];const s=this.realities.get(n);if(!s)return null;const{trust:r}=s,o=tt(this,Or,wc).call(this,e,r),a=tt(this,Or,wc).call(this,t,r);if(!o||!a)return null;const c=new Set(o);let l;for(const d of a)if(c.has(d)){l=d;break}if(!l)return null;const h=o.slice(0,o.indexOf(l)+1),u=a.slice(0,a.indexOf(l)).reverse();return[...h,...u]}send(e,t,n,s){const r=this.route(e,t,n);if(!r)return{delivered:!1,reason:"no-route"};const o=this.realities.get(n);o&&o.reality.update(e,`msg:${Date.now()}:${e}→${t}`,s);const a={from:e,to:t,hops:r,payload:s,ts:Date.now()};return this._msgLog.push(a),{delivered:!0,hops:r.length,route:r}}gossip(e,t,n,s,r=6){const o=this.nodes.get(e),a=this.realities.get(t);if(!o||!a)return 0;const{reality:c}=a,l=new Set;let h=0;const u=(d,f)=>{if(l.has(d)||f<=0)return;l.add(d);const g=this.nodes.get(d);if(!(!g||!g.isIn(t))){c.update(d,n,s),h++;for(const v of g.neighbors)u(v,f-1)}};return u(e,r),h}propose(e,t,n,s){const r=this.realities.get(t);if(!r)return{passed:!1,reason:"unknown-reality"};const{reality:o,trust:a}=r,c=a.getAll().filter(d=>a.isVerified(d.id)),l=c.filter(d=>{const f=this.nodes.get(d.id);return f&&s(f,a)}),h=Math.floor(c.length/2)+1;return{passed:l.length>=h,motion:n,proposer:e,total:c.length,yesVotes:l.length,needed:h,voters:l.map(d=>d.id)}}mergeRealities(e,t){const n=this.realities.get(e),s=this.realities.get(t);if(!n||!s)return null;if(!n.reality.frequency.harmonisesWith(s.reality.frequency))return{merged:!1,reason:"insufficient-resonance"};const r=Jo.merge(n.reality.frequency,s.reality.frequency),o=new eu(r);o.merge(n.reality),o.merge(s.reality);const a=n.trust;try{a.vouch(n.trust.rootId,s.trust.rootId,"")}catch{}this.realities.set(r.id,{reality:o,trust:a});for(const c of this.nodes.values())(c.isIn(e)||c.isIn(t))&&(c.detune(e),c.detune(t),c.tune(o));return{merged:!0,frequency:r,reality:o}}nodesIn(e){return[...this.nodes.values()].filter(t=>t.isIn(e))}bridges(){return[...this.nodes.values()].filter(e=>e.realities.size>1)}stats(){return{totalNodes:this.nodes.size,totalRealities:this.realities.size,bridgeNodes:this.bridges().length,messageCount:this._msgLog.length}}}Or=new WeakSet,wc=function(e,t){var o;const n=[];let s=e;const r=new Set;for(;s;){if(r.has(s))return null;r.add(s),n.push(s),s=((o=t.getMember(s))==null?void 0:o.vouchedBy)??null}return n};const Cs=Object.freeze({PUBLIC:"public",INVITE:"invite",PRIVATE:"private"});function tu(){return Math.random().toString(36).slice(2,9).toUpperCase()}class oy{constructor(e,t,{targetId:n=null,ttlMs:s=864e5,maxUses:r=1}={}){this.id=`INV-${tu()}-${tu()}`,this.issuerId=e,this.frequencyId=t,this.targetId=n,this.expiresAt=Date.now()+s,this.maxUses=r,this.uses=0,this.claimedBy=[]}get expired(){return Date.now()>this.expiresAt}get exhausted(){return this.uses>=this.maxUses}get active(){return!this.expired&&!this.exhausted}isValidFor(e){return!(this.expired||this.exhausted||this.targetId&&this.targetId!==e)}claim(e){return this.isValidFor(e)?(this.uses++,this.claimedBy.push(e),!0):!1}}var Fr,Br,Hs,Yi,na,Ad;class ay{constructor(){Je(this,na);Je(this,Fr,new Map);Je(this,Br,new Map);Je(this,Hs,new Map);Je(this,Yi,new Map)}setNode(e,t){oe(this,Fr).set(e,t)}getNode(e){return oe(this,Fr).get(e)??Cs.PUBLIC}setReality(e,t){oe(this,Br).set(e,t)}getReality(e){return oe(this,Br).get(e)??Cs.PUBLIC}issueInvite(e,t,n={}){const s=new oy(e,t,n);return oe(this,Hs).set(s.id,s),s}getToken(e){return oe(this,Hs).get(e)??null}claimInvite(e,t){const n=oe(this,Hs).get(e);return n?n.expired?{success:!1,reason:"token-expired"}:n.exhausted?{success:!1,reason:"token-exhausted"}:n.isValidFor(t)?(n.claim(t),oe(this,Yi).has(t)||oe(this,Yi).set(t,new Set),oe(this,Yi).get(t).add(n.frequencyId),{success:!0,frequencyId:n.frequencyId}):{success:!1,reason:"token-not-for-you"}:{success:!1,reason:"token-not-found"}}hasGrant(e,t){var n;return((n=oe(this,Yi).get(e))==null?void 0:n.has(t))??!1}canSee(e,t,n){var r;if(e===t)return!0;const s=this.getNode(t);if(s===Cs.PUBLIC||tt(this,na,Ad).call(this,e,t,n))return!0;if(s===Cs.PRIVATE)return!1;for(const[o]of((r=n.getNode(t))==null?void 0:r.realities)??[])if(this.hasGrant(e,o))return!0;return!1}perceptionOf(e,t,n){return this.canSee(e,t,n)?"full":this.getNode(t)===Cs.INVITE?"blurred":"hidden"}buildMapFor(e,t){const n=[],s=[],r=new Set;for(const o of t.nodes.values()){const a=this.perceptionOf(e,o.id,t);a!=="hidden"&&(r.add(o.id),n.push({id:o.id,perception:a,visibility:this.getNode(o.id),realities:[...o.realities.keys()],isBridge:o.realities.size>1,isMe:o.id===e,position:o.position}))}for(const{reality:o,trust:a}of t.realities.values())for(const c of a.getAll())c.vouchedBy&&r.has(c.id)&&r.has(c.vouchedBy)&&s.push({from:c.vouchedBy,to:c.id,type:"trust"});for(const o of t.nodes.values())for(const a of o.neighbors)r.has(o.id)&&r.has(a)&&o.id<a&&s.push({from:o.id,to:a,type:"neighbor"});return{nodes:n,edges:s}}}Fr=new WeakMap,Br=new WeakMap,Hs=new WeakMap,Yi=new WeakMap,na=new WeakSet,Ad=function(e,t,n){const s=n.getNode(e),r=n.getNode(t);if(!s||!r)return!1;for(const[o]of s.realities){if(!r.isIn(o))continue;const a=n.realities.get(o);if(a!=null&&a.trust.isVerified(e)&&(a!=null&&a.trust.isVerified(t)))return!0}return!1};const nu=[{fill:"rgba(30,80,200,0.09)",border:"#4466ff",glow:"#2255dd"},{fill:"rgba(0,160,120,0.09)",border:"#00ffcc",glow:"#00ccaa"},{fill:"rgba(130,20,220,0.09)",border:"#aa55ff",glow:"#8833dd"},{fill:"rgba(200,100,0,0.09)",border:"#ff9900",glow:"#dd7700"},{fill:"rgba(0,160,200,0.09)",border:"#00ccff",glow:"#00aadd"}],Wn={me:"#00ffff",public:"#4488ff",invite:"#ffaa00",private:"#666688",blurred:"#333355"};class cy{constructor(e,t,n){this.canvas=e,this.ctx=e.getContext("2d"),this.vis=t,this.myId=n,this._nodes=[],this._edges=[],this._realityGroups=new Map,this._pan={x:0,y:0},this._zoom=1,this._drag=!1,this._lastMouse={x:0,y:0},this._selected=null,this._raf=null,this._settled=0,this._onSelect=null,this._bindEvents()}load(e){const{nodes:t,edges:n}=e,s=this.canvas.width,r=this.canvas.height,o=new Map(this._nodes.map(c=>[c.id,c]));this._nodes=t.map(c=>{if(o.has(c.id))return{...o.get(c.id),...c};const l=Math.random()*Math.PI*2,h=100+Math.random()*80;return{...c,x:s/2+Math.cos(l)*h,y:r/2+Math.sin(l)*h,vx:0,vy:0}});const a=new Map(this._nodes.map(c=>[c.id,c]));this._edges=n.filter(c=>a.has(c.from)&&a.has(c.to)).map(c=>({fromNode:a.get(c.from),toNode:a.get(c.to),type:c.type})),this._realityGroups.clear(),this._nodes.forEach(c=>{var l;(l=c.realities)==null||l.forEach((h,u)=>{this._realityGroups.has(h)||this._realityGroups.set(h,{nodes:[],color:nu[this._realityGroups.size%nu.length]}),this._realityGroups.get(h).nodes.push(c)})}),this._settled=0,this._kickSimulation()}onSelect(e){this._onSelect=e}fitView(){if(this._nodes.length===0)return;const e=this._nodes.map(d=>d.x),t=this._nodes.map(d=>d.y),n=Math.min(...e),s=Math.max(...e),r=Math.min(...t),o=Math.max(...t),a=this.canvas.width,c=this.canvas.height,l=60,h=(a-l*2)/(s-n||1),u=(c-l*2)/(o-r||1);this._zoom=Math.min(h,u,2),this._pan.x=-((n+s)/2)*this._zoom,this._pan.y=-((r+o)/2)*this._zoom,this.render()}stop(){this._raf&&cancelAnimationFrame(this._raf)}_kickSimulation(){if(this._raf)return;const e=()=>{this._settled<250&&(this._stepForce(),this._settled++),this.render(),this._raf=requestAnimationFrame(e)};this._raf=requestAnimationFrame(e)}_stepForce(){const e=this._nodes,t=4e3,n=90,s=.025,r=.82;for(let o=0;o<e.length;o++)for(let a=o+1;a<e.length;a++){const c=e[o],l=e[a],h=l.x-c.x,u=l.y-c.y,d=h*h+u*u||1,f=Math.sqrt(d),g=t/d;c.vx-=g*h/f,c.vy-=g*u/f,l.vx+=g*h/f,l.vy+=g*u/f}for(const o of this._edges){if(o.type!=="trust")continue;const a=o.toNode.x-o.fromNode.x,c=o.toNode.y-o.fromNode.y,l=Math.sqrt(a*a+c*c)||1,h=(l-n)*s;o.fromNode.vx+=h*a/l,o.fromNode.vy+=h*c/l,o.toNode.vx-=h*a/l,o.toNode.vy-=h*c/l,o.toNode.vy+=(o.toNode.y-(o.fromNode.y+n))*-.008}for(const o of this._edges){if(o.type!=="neighbor")continue;const a=o.toNode.x-o.fromNode.x,c=o.toNode.y-o.fromNode.y,l=Math.sqrt(a*a+c*c)||1,h=(l-50)*.008;o.fromNode.vx+=h*a/l,o.fromNode.vy+=h*c/l,o.toNode.vx-=h*a/l,o.toNode.vy-=h*c/l}for(const o of e)o.x+=o.vx*r,o.y+=o.vy*r,o.vx*=r,o.vy*=r}render(){const e=this.ctx,t=this.canvas.width,n=this.canvas.height;e.clearRect(0,0,t,n),e.fillStyle="rgba(0,2,12,0.97)",e.fillRect(0,0,t,n),e.save(),e.translate(t/2+this._pan.x,n/2+this._pan.y),e.scale(this._zoom,this._zoom),this._drawRealityClusters(),this._drawEdges(),this._drawNodes(),this._selected&&this._drawSelection(this._selected),e.restore(),this._drawLegend(),this._settled<250&&this._drawSettlingIndicator()}_drawRealityClusters(){const e=this.ctx;for(const[t,{nodes:n,color:s}]of this._realityGroups){if(n.length<2)continue;const r=n.reduce((l,h)=>l+h.x,0)/n.length,o=n.reduce((l,h)=>l+h.y,0)/n.length,a=Math.max(...n.map(l=>Math.hypot(l.x-r,l.y-o)))+55,c=e.createRadialGradient(r,o,0,r,o,a);c.addColorStop(0,s.fill.replace("0.09","0.14")),c.addColorStop(.7,s.fill),c.addColorStop(1,"transparent"),e.fillStyle=c,e.beginPath(),e.arc(r,o,a,0,Math.PI*2),e.fill(),e.strokeStyle=s.border+"33",e.lineWidth=1,e.beginPath(),e.arc(r,o,a,0,Math.PI*2),e.stroke()}}_drawEdges(){const e=this.ctx;for(const t of this._edges)e.beginPath(),e.moveTo(t.fromNode.x,t.fromNode.y),e.lineTo(t.toNode.x,t.toNode.y),t.type==="trust"?(e.strokeStyle="rgba(120,180,255,0.45)",e.lineWidth=1.8,e.setLineDash([])):(e.strokeStyle="rgba(255,255,255,0.1)",e.lineWidth=.8,e.setLineDash([3,5])),e.stroke();e.setLineDash([])}_drawNodes(){var t;const e=this.ctx;for(const n of this._nodes){const s=((t=this._selected)==null?void 0:t.id)===n.id,r=n.isMe?11:n.isBridge?9:7,o=n.isMe?Wn.me:n.perception==="blurred"?Wn.blurred:Wn[n.visibility]??Wn.public;e.shadowColor=o,e.shadowBlur=s?28:n.isMe?22:12,e.fillStyle=n.perception==="blurred"?"rgba(50,50,80,0.7)":o+(n.isMe?"":"cc"),e.beginPath(),e.arc(n.x,n.y,r,0,Math.PI*2),e.fill(),e.shadowBlur=0,n.isBridge&&(e.strokeStyle="#ffcc00bb",e.lineWidth=2,e.beginPath(),e.arc(n.x,n.y,r+5,0,Math.PI*2),e.stroke()),s&&(e.strokeStyle="#ffffff88",e.lineWidth=1.5,e.beginPath(),e.arc(n.x,n.y,r+8,0,Math.PI*2),e.stroke());const a=n.perception==="blurred"?"???":n.id.length>12?n.id.slice(0,12)+"…":n.id;e.fillStyle=n.isMe?"#ffffff":"rgba(255,255,255,0.65)",e.font=`${n.isMe?"bold ":""}10px Inter, monospace`,e.textAlign="center",e.fillText(a,n.x,n.y+r+14),n.perception==="full"&&n.depth>0&&(e.fillStyle="rgba(255,255,255,0.28)",e.font="8px monospace",e.fillText(`d${n.depth}`,n.x,n.y-r-4)),n.isMe&&(e.fillStyle="#00ffff",e.font="bold 8px Inter, monospace",e.shadowColor="#00ffff",e.shadowBlur=8,e.fillText("YOU",n.x,n.y-r-4),e.shadowBlur=0)}}_drawSelection(e){}_drawLegend(){const e=this.ctx,t=[{color:Wn.me,label:"You"},{color:Wn.public,label:"Public"},{color:Wn.invite,label:"Invite-only"},{color:Wn.private,label:"Private"},{color:Wn.blurred,label:"Unknown (invite-only, not connected)"},{color:"#ffcc00",label:"Bridge node"}],n=14,s=this.canvas.height-14-t.length*18;e.fillStyle="rgba(0,5,20,0.75)",e.fillRect(n-6,s-10,280,t.length*18+16),e.strokeStyle="rgba(255,255,255,0.07)",e.lineWidth=1,e.strokeRect(n-6,s-10,280,t.length*18+16),t.forEach(({color:r,label:o},a)=>{const c=s+a*18;e.fillStyle=r,e.beginPath(),e.arc(n+6,c,5,0,Math.PI*2),e.fill(),e.fillStyle="rgba(255,255,255,0.6)",e.font="11px Inter, monospace",e.textAlign="left",e.fillText(o,n+18,c+4)})}_drawSettlingIndicator(){const e=this.ctx,t=this._settled/250,n=this.canvas.width;e.fillStyle="rgba(100,180,255,0.5)",e.fillRect(0,this.canvas.height-2,n*t,2)}_bindEvents(){const e=this.canvas;e.addEventListener("mousedown",t=>{this._drag=!0,this._lastMouse={x:t.clientX,y:t.clientY}}),e.addEventListener("mousemove",t=>{this._drag&&(this._pan.x+=t.clientX-this._lastMouse.x,this._pan.y+=t.clientY-this._lastMouse.y,this._lastMouse={x:t.clientX,y:t.clientY},this.render())}),e.addEventListener("mouseup",()=>{this._drag=!1}),e.addEventListener("mouseleave",()=>{this._drag=!1}),e.addEventListener("wheel",t=>{t.preventDefault();const n=t.deltaY>0?.88:1.14;this._zoom=Math.max(.15,Math.min(6,this._zoom*n)),this._raf||this.render()},{passive:!1}),e.addEventListener("click",t=>{var a;if(this._drag)return;const n=e.getBoundingClientRect(),s=(t.clientX-n.left-e.width/2-this._pan.x)/this._zoom,r=(t.clientY-n.top-e.height/2-this._pan.y)/this._zoom;let o=null;for(const c of this._nodes)if(Math.hypot(c.x-s,c.y-r)<14){o=c;break}this._selected=o,(a=this._onSelect)==null||a.call(this,o),this._raf||this.render()})}}function iu(i,e,t){const n=document.getElementById("network-map-overlay");if(!n)return;n.classList.add("visible");const s=document.getElementById("network-map-canvas");s.width=s.offsetWidth||800,s.height=s.offsetHeight||560;const r=e.buildMapFor(t,i),o=new cy(s,e,t);o.load(r);const a=document.getElementById("nm-node-panel");o.onSelect(h=>{var u;if(!h||h.perception==="blurred"){a.innerHTML=h?'<div class="nm-panel-blurred">🔒 Unknown node<br><small>Invite required</small></div>':"";return}a.innerHTML=`
      <div class="nm-panel-title">${h.isMe?"👤 You":"🔵 "+h.id}</div>
      <div class="nm-panel-row"><span>Visibility</span><span class="nm-badge nm-badge-${h.visibility}">${h.visibility}</span></div>
      <div class="nm-panel-row"><span>Depth</span><span>d${h.depth??0}</span></div>
      <div class="nm-panel-row"><span>Realities</span><span>${((u=h.realities)==null?void 0:u.length)??0}</span></div>
      ${h.isBridge?'<div class="nm-panel-bridge">🌉 Bridge node</div>':""}
    `});const c=document.getElementById("nm-close"),l=()=>{n.classList.remove("visible"),o.stop()};c.onclick=l,n.addEventListener("keydown",h=>{h.key==="Escape"&&l()})}const ic=8,sc=18,ly=.08,su=12;class hy{constructor(){this._ctx=null,this._stream=null,this._gains=new Map,this._talking=new Set,this._selfAnalyser=null,this._selfBuf=null,this._muted=!1,this._active=!1,this._onStateChange=null,this._onTalkChange=null,this._syncRef=null}async start(e){if(this._active)return!0;this._syncRef=e;try{this._stream=await navigator.mediaDevices.getUserMedia({audio:{echoCancellation:!0,noiseSuppression:!0,sampleRate:48e3},video:!1}),this._ctx=new AudioContext,this._active=!0,this._selfAnalyser=this._ctx.createAnalyser(),this._selfAnalyser.fftSize=256,this._selfBuf=new Uint8Array(this._selfAnalyser.frequencyBinCount),this._ctx.createMediaStreamSource(this._stream).connect(this._selfAnalyser);const[n]=this._stream.getAudioTracks();return e.addVoiceTrack(n,this._stream),e.onVoiceTrack((s,r,o,a)=>{s.kind==="audio"&&this._addPeerTrack(o,s,a)}),this._notify(),!0}catch(t){return console.warn("[ProximityVoice] mic access denied or unavailable:",t.message),!1}}_addPeerTrack(e,t,n){const s=this._ctx.createMediaStreamSource(new MediaStream([t])),r=this._ctx.createGain(),o=this._ctx.createAnalyser();o.fftSize=256,r.gain.value=0,s.connect(o),s.connect(r),r.connect(this._ctx.destination),this._gains.set(e,{gainNode:r,sourceNode:s,analyser:o,buf:new Uint8Array(o.frequencyBinCount),wirePeerId:n??e})}stop(){var e,t;(e=this._stream)==null||e.getTracks().forEach(n=>n.stop()),this._gains.forEach(({gainNode:n,sourceNode:s})=>{try{s.disconnect(),n.disconnect()}catch{}}),this._gains.clear(),this._talking.clear(),(t=this._ctx)==null||t.close(),this._active=!1,this._syncRef=null,this._notify(),this._notifyTalk()}update(e,t){if(!this._active||!this._ctx)return;this._syncRef&&this._gains.forEach((r,o)=>{if(o.length!==64){const a=this._syncRef.wireToIdentityId(o);a&&a!==o&&(this._gains.set(a,r),this._gains.delete(o))}});const n=new Set(this._talking);this._selfAnalyser&&!this._muted?(this._selfAnalyser.getByteFrequencyData(this._selfBuf),this._selfBuf.reduce((o,a)=>o+a,0)/this._selfBuf.length>su?this._talking.add("self"):this._talking.delete("self")):this._talking.delete("self"),t.forEach((r,o)=>{const a=this._gains.get(o);if(!a)return;const c=r.position.x-e.x,l=r.position.z-e.z,h=Math.sqrt(c*c+l*l),u=h<=ic?1:h>=sc?0:1-(h-ic)/(sc-ic);a.gainNode.gain.setTargetAtTime(u,this._ctx.currentTime,ly),a.analyser.getByteFrequencyData(a.buf),a.buf.reduce((f,g)=>f+g,0)/a.buf.length>su?this._talking.add(o):this._talking.delete(o)});let s=n.size!==this._talking.size;if(!s){for(const r of this._talking)if(!n.has(r)){s=!0;break}}s&&this._notifyTalk()}removePeer(e){const t=this._gains.get(e);if(t){try{t.sourceNode.disconnect(),t.gainNode.disconnect()}catch{}this._gains.delete(e)}this._talking.delete(e)}toggleMute(){return this.setMuted(!this._muted),this._muted}setMuted(e){var t;this._muted=e,(t=this._stream)==null||t.getAudioTracks().forEach(n=>{n.enabled=!e}),this._notify()}get active(){return this._active}get muted(){return this._muted}isTalking(e){return this._talking.has(e)}get talkingPeers(){return this._talking}onStateChange(e){this._onStateChange=e}onTalkChange(e){this._onTalkChange=e}_notify(){var e;(e=this._onStateChange)==null||e.call(this,{active:this._active,muted:this._muted})}_notifyTalk(){var e;(e=this._onTalkChange)==null||e.call(this,this._talking)}static get HEAR_FAR(){return sc}}const ru=Object.fromEntries(jc.map(i=>[i.id,"#"+i.color.toString(16).padStart(6,"0")])),uy={OUTSIDE:"#88cc66",LOBBY:"#aaaacc",OPS:"#ffaa44",FUN:"#44ffaa",DESIGN:"#ff6ba0",ENGINEERING:"#44aaff"},dy={OUTSIDE:"Outside",LOBBY:"Lobby",OPS:"Ops",FUN:"Fun",DESIGN:"Design",ENGINEERING:"Engineering"};class fy{constructor(e){this._onNavigate=e,this._peers=new Map,this._self={username:"",presetId:0,zone:"OUTSIDE"},this._el=this._build(),document.body.appendChild(this._el),this._render()}setSelf(e,t,n,s="available"){this._self={username:e,presetId:t,zone:n||"OUTSIDE",status:s},this._render()}updateSelfStatus(e){this._self.status=e,this._render()}addPeer(e,t,n=0,s="available"){this._peers.set(e,{username:t,presetId:n,x:0,z:0,zone:"OUTSIDE",status:s}),this._render()}movePeer(e,t,n){const s=this._peers.get(e);s&&(s.x=t,s.z=n,s.zone=Ko({x:t,z:n}),this._render())}updatePeerPreset(e,t){const n=this._peers.get(e);n&&(n.presetId=t,this._render())}updatePeerStatus(e,t){const n=this._peers.get(e);n&&(n.status=t,this._render())}removePeer(e){this._peers.delete(e),this._render()}updateSelfZone(e){this._self.zone=e||"OUTSIDE",this._render()}_build(){const e=document.createElement("div");return e.id="presence-panel",e.innerHTML=`
      <div class="pp-header">
        <span class="pp-title">WHO'S HERE</span>
        <span class="pp-count" id="pp-count">1</span>
      </div>
      <div class="pp-list" id="pp-list"></div>
    `,e}_render(){const e=this._el.querySelector("#pp-list"),t=this._el.querySelector("#pp-count");if(!e)return;const n=1+this._peers.size;t.textContent=n;const s=[];s.push(this._row({username:this._self.username||"You",presetId:this._self.presetId,zone:this._self.zone,status:this._self.status,isSelf:!0}));const r=[...this._peers.entries()].sort((o,a)=>{const c=o[1].zone,l=a[1].zone;return c!==l?c.localeCompare(l):o[1].username.localeCompare(a[1].username)});r.forEach(([o,a])=>{s.push(this._row({username:a.username,presetId:a.presetId,zone:a.zone,status:a.status,isSelf:!1,onClick:()=>{var c;return(c=this._onNavigate)==null?void 0:c.call(this,{x:a.x,z:a.z})}}))}),e.innerHTML=s.join(""),e.querySelectorAll(".pp-row[data-idx]").forEach(o=>{const a=parseInt(o.dataset.idx,10),c=r[a];c&&o.addEventListener("click",()=>{var l;return(l=this._onNavigate)==null?void 0:l.call(this,{x:c[1].x,z:c[1].z})})})}_row({username:e,presetId:t,zone:n,status:s="available",isSelf:r,onClick:o}){const c="#"+($i[t]??$i[0]).outfit.toString(16).padStart(6,"0"),l=ru[s]??ru.available,h=uy[n]??"#888",u=dy[n]??n;return`
      <div class="pp-row ${r?"pp-self":"pp-peer"}"
           ${r?"":`data-idx="${e}"`}>
        <span class="pp-dot" style="background:${c}"></span>
        <span class="pp-status-dot" style="background:${l}" title="${s}"></span>
        <span class="pp-name">${py(e)}${r?' <span class="pp-you">(you)</span>':""}</span>
        <span class="pp-zone" style="color:${h}">${u}</span>
        ${r?"":'<span class="pp-go" title="Walk to this person">→</span>'}
      </div>
    `}}function py(i){return i.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}/*! noble-secp256k1 - MIT License (c) 2019 Paul Miller (paulmillr.com) */const Rd=Object.freeze({p:0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2fn,n:0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141n,h:1n,a:0n,b:7n,Gx:0x79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798n,Gy:0x483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8n}),{p:Si,n:to,Gx:my,Gy:gy,b:Cd}=Rd,$t=32,Ar=64,bc={publicKey:$t+1,publicKeyUncompressed:Ar+1,seed:$t+$t/2},Tt=(i="",e=Error)=>{const t=new e(i),{captureStackTrace:n}=Error;throw typeof n=="function"&&n(t,Tt),t},_y=i=>i instanceof Uint8Array||ArrayBuffer.isView(i)&&i.constructor.name==="Uint8Array"&&i.BYTES_PER_ELEMENT===1,pn=(i,e,t="")=>{const n=_y(i),s=i==null?void 0:i.length,r=e!==void 0;if(!n||r&&s!==e){const o=t&&`"${t}" `,a=r?` of length ${e}`:"",c=n?`length=${s}`:`type=${typeof i}`,l=o+"expected Uint8Array"+a+", got "+c;return n?Tt(l,RangeError):Tt(l,TypeError)}return i},Rr=i=>new Uint8Array(i),Pd=(i,e)=>i.toString(16).padStart(e,"0"),Ld=i=>{let e="";for(const t of pn(i))e+=Pd(t,2);return e},Xn={_0:48,_9:57,A:65,F:70,a:97,f:102},ou=i=>i>=Xn._0&&i<=Xn._9?i-Xn._0:i>=Xn.A&&i<=Xn.F?i-(Xn.A-10):i>=Xn.a&&i<=Xn.f?i-(Xn.a-10):void 0,Id=i=>{const e="hex invalid";if(typeof i!="string")return Tt(e);const t=i.length,n=t/2;if(t%2)return Tt(e);const s=Rr(n);for(let r=0,o=0;r<n;r++,o+=2){const a=ou(i.charCodeAt(o)),c=ou(i.charCodeAt(o+1));if(a===void 0||c===void 0)return Tt(e);s[r]=a*16+c}return s},au=()=>{var i;return((i=globalThis==null?void 0:globalThis.crypto)==null?void 0:i.subtle)??Tt("crypto.subtle must be defined, consider polyfill")},er=(...i)=>{let e=0;for(const s of i)e+=pn(s).length;const t=Rr(e);let n=0;for(const s of i)t.set(s,n),n+=s.length;return t},tl=(i=$t)=>(globalThis==null?void 0:globalThis.crypto).getRandomValues(Rr(i)),Tc=BigInt,Ki=(i,e,t,n="bad number: out of range")=>typeof i!="bigint"?Tt(n,TypeError):e<=i&&i<t?i:Tt(n,RangeError),Pe=(i,e=Si)=>{const t=i%e;return t>=0n?t:e+t},la=i=>Pe(i,to),vy=(i,e)=>{(i===0n||e<=0n)&&Tt("no inverse n="+i+" mod="+e);let t=Pe(i,e),n=e,s=0n,r=1n;for(;t!==0n;){const o=n/t,a=n%t,c=s-r*o;n=t,t=a,s=r,r=c}return n===1n?Pe(s,e):Tt("no inverse")},Dd=i=>{const e=wy[i];return typeof e!="function"&&Tt("hashes."+i+" not set"),e},cu=(i,e,t)=>pn(Dd(i)(e,t),$t,"digest"),lu=(i,e,t)=>Promise.resolve(Dd(i)(e,t)).then(n=>pn(n,$t,"digest")),rc=i=>i instanceof Ti?i:Tt("Point expected"),Nd=i=>Pe(Pe(i*i)*i+Cd),hu=i=>Ki(i,0n,Si),Fo=i=>Ki(i,1n,Si),xy=i=>Ki(i,1n,to),ha=i=>!(i&1n),Ud=i=>Uint8Array.of(i),yy=i=>Ud(ha(i)?2:3),Od=i=>{const e=Nd(Fo(i));let t=1n;for(let n=e,s=(Si+1n)/4n;s>0n;s>>=1n)s&1n&&(t=t*n%Si),n=n*n%Si;return Pe(t*t)!==e&&Tt("sqrt invalid"),ha(t)?t:Pe(-t)},Rn=class Rn{constructor(e,t,n){Kt(this,"X");Kt(this,"Y");Kt(this,"Z");this.X=hu(e),this.Y=Fo(t),this.Z=hu(n),Object.freeze(this)}static CURVE(){return Rd}static fromAffine(e){const{x:t,y:n}=e;return t===0n&&n===0n?Vi:new Rn(t,n,1n)}static fromBytes(e){pn(e);const{publicKey:t,publicKeyUncompressed:n}=bc;let s;const r=e.length,o=e[0],a=e.subarray(1),c=jo(a,0,$t);if(r===t&&(o===2||o===3)){let l=Od(c);o===3&&(l=Pe(-l)),s=new Rn(c,l,1n)}return r===n&&o===4&&(s=new Rn(c,jo(a,$t,Ar),1n)),s?s.assertValidity():Tt("bad point: not on curve")}static fromHex(e){return Rn.fromBytes(Id(e))}get x(){return this.toAffine().x}get y(){return this.toAffine().y}equals(e){const{X:t,Y:n,Z:s}=this,{X:r,Y:o,Z:a}=rc(e),c=Pe(t*a),l=Pe(r*s),h=Pe(n*a),u=Pe(o*s);return c===l&&h===u}is0(){return this.equals(Vi)}negate(){return new Rn(this.X,Pe(-this.Y),this.Z)}double(){return this.add(this)}add(e){const{X:t,Y:n,Z:s}=this,{X:r,Y:o,Z:a}=rc(e),c=0n,l=Cd;let h=0n,u=0n,d=0n;const f=Pe(l*3n);let g=Pe(t*r),v=Pe(n*o),m=Pe(s*a),p=Pe(t+n),w=Pe(r+o);p=Pe(p*w),w=Pe(g+v),p=Pe(p-w),w=Pe(t+s);let x=Pe(r+a);return w=Pe(w*x),x=Pe(g+m),w=Pe(w-x),x=Pe(n+s),h=Pe(o+a),x=Pe(x*h),h=Pe(v+m),x=Pe(x-h),d=Pe(c*w),h=Pe(f*m),d=Pe(h+d),h=Pe(v-d),d=Pe(v+d),u=Pe(h*d),v=Pe(g+g),v=Pe(v+g),m=Pe(c*m),w=Pe(f*w),v=Pe(v+m),m=Pe(g-m),m=Pe(c*m),w=Pe(w+m),g=Pe(v*w),u=Pe(u+g),g=Pe(x*w),h=Pe(p*h),h=Pe(h-g),g=Pe(p*v),d=Pe(x*d),d=Pe(d+g),new Rn(h,u,d)}subtract(e){return this.add(rc(e).negate())}multiply(e,t=!0){if(!t&&e===0n)return Vi;if(xy(e),e===1n)return this;if(this.equals(Ji))return Dy(e).p;let n=Vi,s=Ji;for(let r=this;e>0n;r=r.double(),e>>=1n)e&1n?n=n.add(r):t&&(s=s.add(r));return n}multiplyUnsafe(e){return this.multiply(e,!1)}toAffine(){const{X:e,Y:t,Z:n}=this;if(this.equals(Vi))return{x:0n,y:0n};if(n===1n)return{x:e,y:t};const s=vy(n,Si);return Pe(n*s)!==1n&&Tt("inverse invalid"),{x:Pe(e*s),y:Pe(t*s)}}assertValidity(){const{x:e,y:t}=this.toAffine();return Fo(e),Fo(t),Pe(t*t)===Nd(e)?this:Tt("bad point: not on curve")}toBytes(e=!0){const{x:t,y:n}=this.assertValidity().toAffine(),s=On(t);return e?er(yy(n),s):er(Ud(4),s,On(n))}toHex(e){return Ld(this.toBytes(e))}};Kt(Rn,"BASE"),Kt(Rn,"ZERO");let Ti=Rn;const Ji=new Ti(my,gy,1n),Vi=new Ti(0n,1n,0n);Ti.BASE=Ji;Ti.ZERO=Vi;const Sy=(i,e,t)=>Ji.multiply(e,!1).add(i.multiply(t,!1)).assertValidity(),Qi=i=>Tc("0x"+(Ld(i)||"0")),jo=(i,e,t)=>Qi(i.subarray(e,t)),My=2n**256n,On=i=>Id(Pd(Ki(i,0n,My),Ar)),Ey=i=>{const e=Qi(pn(i,$t,"secret key"));return Ki(e,1n,to,"invalid secret key: outside of range")},uu="SHA-256",wy={hmacSha256Async:async(i,e)=>{const t=au(),n="HMAC",s=await t.importKey("raw",i,{name:n,hash:{name:uu}},!1,["sign"]);return Rr(await t.sign(n,s,e))},hmacSha256:void 0,sha256Async:async i=>Rr(await au().digest(uu,i)),sha256:void 0},by=i=>{if(i=i===void 0?tl(bc.seed):i,pn(i),i.length<bc.seed||i.length>1024)return Tt("expected 48-1024b",RangeError);const e=Pe(Qi(i),to-1n);return On(e+1n)},Ty=i=>e=>{const t=by(e);return{secretKey:t,publicKey:i(t)}},Fd=i=>Uint8Array.from("BIP0340/"+i,e=>e.charCodeAt(0)),Bd="aux",zd="nonce",kd="challenge",Ac=(i,...e)=>{const t=cu("sha256",Fd(i));return cu("sha256",er(t,t,...e))},Rc=(i,...e)=>lu("sha256Async",Fd(i)).then(t=>lu("sha256Async",er(t,t,...e))),nl=i=>{const e=Ey(i),t=Ji.multiply(e),{x:n,y:s}=t.assertValidity().toAffine(),r=ha(s)?e:la(-e),o=On(n);return{d:r,px:o}},il=i=>la(Qi(i)),Hd=(...i)=>il(Ac(kd,...i)),Gd=async(...i)=>il(await Rc(kd,...i)),Vd=i=>nl(i).px,Ay=Ty(Vd),Wd=(i,e,t)=>{const{px:n,d:s}=nl(e);return{m:pn(i),px:n,d:s,a:pn(t,$t)}},Xd=i=>{const e=il(i);e===0n&&Tt("sign failed: k is zero");const{px:t,d:n}=nl(On(e));return{rx:t,k:n}},Zd=(i,e,t,n)=>er(e,On(la(i+t*n))),Yd="invalid signature produced",Ry=(i,e,t=tl($t))=>{const{m:n,px:s,d:r,a:o}=Wd(i,e,t),a=Ac(Bd,o),c=On(r^Qi(a)),l=Ac(zd,c,s,n),{rx:h,k:u}=Xd(l),d=Hd(h,s,n),f=Zd(u,h,d,r);return $d(f,n,s)||Tt(Yd),f},Cy=async(i,e,t=tl($t))=>{const{m:n,px:s,d:r,a:o}=Wd(i,e,t),a=await Rc(Bd,o),c=On(r^Qi(a)),l=await Rc(zd,c,s,n),{rx:h,k:u}=Xd(l),d=await Gd(h,s,n),f=Zd(u,h,d,r);return await Kd(f,n,s)||Tt(Yd),f},Py=(i,e)=>i instanceof Promise?i.then(e):e(i),qd=(i,e,t,n)=>{const s=pn(i,Ar,"signature"),r=pn(e,void 0,"message"),o=pn(t,$t,"publicKey");try{const a=Qi(o),c=Od(a),l=new Ti(a,c,1n).assertValidity(),h=On(l.toAffine().x),u=jo(s,0,$t);Ki(u,1n,Si);const d=jo(s,$t,Ar);Ki(d,1n,to);const f=er(On(u),h,r);return Py(n(f),g=>{const{x:v,y:m}=Sy(l,d,la(-g)).toAffine();return!(!ha(m)||v!==u)})}catch{return!1}},$d=(i,e,t)=>qd(i,e,t,Hd),Kd=async(i,e,t)=>qd(i,e,t,Gd),Jd=Object.freeze({keygen:Ay,getPublicKey:Vd,sign:Ry,verify:$d,signAsync:Cy,verifyAsync:Kd}),Qo=8,Ly=256,jd=Math.ceil(Ly/Qo)+1,Cc=2**(Qo-1),Iy=()=>{const i=[];let e=Ji,t=e;for(let n=0;n<jd;n++){t=e,i.push(t);for(let s=1;s<Cc;s++)t=t.add(e),i.push(t);e=t.double()}return i};let du;const fu=(i,e)=>{const t=e.negate();return i?t:e},Dy=i=>{const e=du||(du=Iy());let t=Vi,n=Ji;const s=2**Qo,r=s,o=Tc(s-1),a=Tc(Qo);for(let c=0;c<jd;c++){let l=Number(i&o);i>>=a,l>Cc&&(l-=r,i+=1n);const h=c*Cc,u=h,d=h+Math.abs(l)-1,f=c%2!==0,g=l<0;l===0?n=n.add(fu(f,e[u])):t=t.add(fu(g,e[d]))}return i!==0n&&Tt("invalid wnaf"),{p:t,f:n}},{floor:Pc,random:Ny,sin:Uy}=Math,ji="Trystero",Cr=(i,e)=>Array(i).fill(void 0).map(e),Oy="0123456789AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz",tr=i=>Cr(i,()=>Oy[Pc(Ny()*62)]??"").join(""),Dn=tr(20),or=Promise.all.bind(Promise),Qd=typeof window<"u",{entries:Pr,fromEntries:ef,keys:Sn,values:zs}=Object,Bt=()=>{},tf="candidate",wt=i=>(i!==null&&clearTimeout(i),null),ft=i=>new Error(`${ji}: ${i}`),sl=(i,e)=>i instanceof Error&&i.message?i.message:typeof i=="string"&&i?i:wn(i??e),Zi=(i,e)=>i instanceof Error?i:ft(sl(i,e)),Fy=new TextEncoder,By=new TextDecoder,Mi=i=>Fy.encode(i),ks=i=>By.decode(i),Lr=i=>i.reduce((e,t)=>e+t.toString(16).padStart(2,"0"),""),Ir=(...i)=>i.join("@"),zy=(i,e)=>{const t=[...i],n=()=>{const r=Uy(e++)*1e4;return r-Pc(r)};let s=t.length;for(;s;){const r=Pc(n()*s--),o=t[s];t[s]=t[r],t[r]=o}return t},ky=(i,e,t,n=!1)=>{var s,r;return((s=i.relayConfig)==null?void 0:s.urls)||(n?zy(e,nf(i.appId)):e).slice(0,((r=i.relayConfig)==null?void 0:r.redundancy)??t)},wn=JSON.stringify,ea=i=>{try{return JSON.parse(i)}catch{throw ft(`failed to parse JSON: ${i}`)}},nf=(i,e=Number.MAX_SAFE_INTEGER)=>i.split("").reduce((t,n)=>t+n.charCodeAt(0),0)%e,pu=3333,Rs={};let Er=null,wr=null;const Hy=()=>{Er||(Er=new Promise(i=>{wr=i}).finally(()=>{wr=null,Er=null}))},Gy=()=>{wr==null||wr()},Vy=(i,e)=>{const t={},n=()=>{const s=new WebSocket(i);s.onclose=()=>{if(Er){Er.then(n);return}Rs[i]??(Rs[i]=pu),setTimeout(n,Rs[i]),Rs[i]*=2},s.onmessage=r=>e(String(r.data)),t.socket=s,t.url=s.url,t.ready=new Promise(r=>s.onopen=()=>{r(t),Rs[i]=pu}),t.send=r=>{s.readyState===1&&s.send(r)}};return n(),t},Wy=i=>{const e={},t=new WeakMap,n=r=>{const o=t.get(r);if(!o)throw ft("relay bookkeeping missing registration for relay client");return o};return{register:(r,o)=>(e[r]=o,t.set(o,r),o),keyOf:n,scoped:()=>{const r={},o=a=>r[a]??(r[a]={});return{forKey:o,forRelay:a=>o(n(a))}},getSockets:()=>ef(Pr(e).flatMap(([r,o])=>{const a=i(o);return a?[[r,a]]:[]}))}},Xy=()=>{if(Qd){const i=new AbortController;return addEventListener("online",Gy,{signal:i.signal}),addEventListener("offline",Hy,{signal:i.signal}),()=>i.abort()}return Bt},rl="AES-GCM",oc={},Zy=i=>btoa(String.fromCharCode.apply(null,Array.from(new Uint8Array(i)))),Yy=i=>{const e=atob(i);return new Uint8Array(e.length).map((t,n)=>e.charCodeAt(n)).buffer},ua=async(i,e)=>new Uint8Array(await crypto.subtle.digest(i,Mi(e))),Dr=async i=>oc[i]??(oc[i]=Array.from(await ua("SHA-1",i)).map(e=>e.toString(36)).join("")),qy=async(i,e,t)=>crypto.subtle.importKey("raw",await crypto.subtle.digest({name:"SHA-256"},Mi(`${i}:${e}:${t}`)),{name:rl},!1,["encrypt","decrypt"]),$y=async(i,e)=>Lr(await ua("SHA-256",`${ji}:${i}:${e}`)),sf="$",rf=",",Ky=async(i,e)=>{const t=crypto.getRandomValues(new Uint8Array(16));return t.join(rf)+sf+Zy(await crypto.subtle.encrypt({name:rl,iv:t},await i,Mi(e)))},Jy=async(i,e)=>{const[t,n]=e.split(sf);return ks(await crypto.subtle.decrypt({name:rl,iv:new Uint8Array((t==null?void 0:t.split(rf).map(Number))??[])},await i,Yy(n??"")))},ol=57333,jy=18e4,Qy=20;var eS=class{constructor(i){Kt(this,"pool",[]);Kt(this,"pooled",new Set);Kt(this,"leased",new Map);Kt(this,"recycling",new Set);Kt(this,"cleanupTimer",null);Kt(this,"active",!1);this.makeOffer=i}get isActive(){return this.active}warmup(){this.pool=[],this.pooled.clear(),Cr(Qy,this.makeOffer).forEach(i=>this.push(i)),this.active=!0,this.cleanupTimer=setInterval(()=>{this.pool=this.pool.filter(i=>i.isDead?(this.pooled.delete(i),!1):!0)},ol)}push(i){i.isDead||this.pooled.has(i)||this.leased.has(i)||(this.pool.push(i),this.pooled.add(i))}shift(i){const e=[];for(;e.length<i&&this.pool.length>0;){const t=this.pool.shift();if(!t)break;this.pooled.delete(t),e.push(t)}return e}claimLeased(i){const e=this.leased.get(i);e&&(wt(e),this.leased.delete(i))}recycle(i){if(!(i.isDead||this.recycling.has(i))){if(i.connection.remoteDescription){i.destroy();return}if(!this.active){i.destroy();return}this.recycling.add(i),i.setHandlers({connect:Bt,close:Bt,error:Bt}),i.getOffer(!0).then(e=>{if(!e||e.type!=="offer"||i.isDead||!this.active){i.destroy();return}this.push(i)}).catch(()=>i.destroy()).finally(()=>this.recycling.delete(i))}}reclaimLeased(i){const e=this.leased.get(i);e&&(wt(e),this.leased.delete(i),this.recycle(i))}lease(i){this.claimLeased(i),this.leased.set(i,setTimeout(()=>{this.leased.delete(i),this.recycle(i)},jy))}checkout(i,e,t){const n=this.shift(i),s=Math.max(0,i-n.length);s>0&&n.push(...Cr(s,this.makeOffer));const r=async(o,a=!1)=>{try{const c=await t(o);return e?(this.lease(o),{peer:o,offer:c,claim:()=>this.claimLeased(o),reclaim:()=>this.reclaimLeased(o)}):{peer:o,offer:c}}catch(c){if(this.claimLeased(o),this.pooled.delete(o),o.destroy(),!a)return r(this.makeOffer(),!0);throw c}};return or(n.map(o=>r(o)))}getOffers(i,e){return this.checkout(i,!0,e)}destroy(){this.active=!1,this.cleanupTimer&&(clearInterval(this.cleanupTimer),this.cleanupTimer=null),this.pool.forEach(i=>i.destroy()),this.pool=[],this.pooled.clear(),this.leased.forEach((i,e)=>{wt(i),e.destroy()}),this.leased.clear(),this.recycling.forEach(i=>i.destroy()),this.recycling.clear()}};const ac=ft("incorrect password for overlapping room"),tS=(i,e,t)=>{const n=o=>ua("SHA-256",`${o}:${i}:${e}:${t}`).then(Lr),s=async(o,a,c)=>{if(!i)return;if(c){const h=tr(36);await o({__trystero_pw:"challenge",c:h});const{data:u}=await a();if(!u||typeof u!="object"||u.__trystero_pw!=="response"||typeof u.h!="string")throw ac;const d=await n(h);if(u.h!==d)throw ac;return}const{data:l}=await a();if(!l||typeof l!="object"||l.__trystero_pw!=="challenge"||typeof l.c!="string")throw ac;await o({__trystero_pw:"response",h:await n(l.c)})};return{run:s,compose:o=>i||o?async(a,c,l,h)=>{await s(c,l,h),await(o==null?void 0:o(a,c,l,h))}:void 0}},nS=15e3,iS=5e3,mu="icegatheringstatechange",gr="offer",sS="answer",rS=/out of range/i,gu=i=>i.replace(/ (\S+\.local) (\d+) typ host/g," 127.0.0.1 $2 typ host");var _u=(i,{trickleIce:e,rtcConfig:t,rtcPolyfill:n,turnConfig:s,_test_only_mdnsHostFallbackToLoopback:r})=>{const o=new(n??RTCPeerConnection)({iceServers:oS.concat(s??[]),...t}),a={},c=[],l=[],h=e!==!1,u=[],d=[];let f=!1,g=!1,v=null,m=null,p=!1;const w=()=>m=wt(m),x=()=>{var G;p||(p=!0,w(),(G=a.close)==null||G.call(a))},y=G=>{a.signal?a.signal(G):c.push(G)},L=G=>{const K=a.signal;a.signal=z=>{K==null||K(z),G(z)},c.length>0&&c.splice(0).forEach(z=>{var le;return(le=a.signal)==null?void 0:le.call(a,z)})},C=G=>r?gu(G):G,E=G=>{if(!r||typeof G.candidate!="string")return G;const K=gu(G.candidate);return K===G.candidate?G:{...G,candidate:K}},D=G=>{var K,z;return{type:((K=G.localDescription)==null?void 0:K.type)??gr,sdp:C(((z=G.localDescription)==null?void 0:z.sdp)??"")}},T=()=>{var K,z;const G=(K=o.remoteDescription)==null?void 0:K.sdp;return G?((z=G.match(/a=ice-ufrag:([^\s]+)/))==null?void 0:z[1])??null:null},S=()=>{var G,K;return(((K=(G=o.remoteDescription)==null?void 0:G.sdp)==null?void 0:K.match(/^m=/gm))??[]).length},I=G=>{if(!o.remoteDescription)return!1;const K=S();if(typeof G.sdpMLineIndex=="number"&&K>0&&G.sdpMLineIndex>=K)return!1;const z=T();return!(z&&G.usernameFragment&&G.usernameFragment!==z)},Z=async G=>{try{return await o.addIceCandidate(G),!0}catch(K){if(K instanceof Error&&rS.test(K.message)&&typeof G.sdpMLineIndex=="number")return!1;throw K}},W=async()=>{if(!o.remoteDescription||u.length===0)return;const G=u.splice(0),K=[];for(const z of G){if(!I(z)){K.push(z);continue}await Z(z)||K.push(z)}K.length>0&&u.push(...K)},Y=async G=>{if(I(G)){await Z(G)||u.push(G);return}u.push(G)},re=G=>{G.binaryType="arraybuffer",G.bufferedAmountLowThreshold=65535,G.onmessage=K=>{const z=K.data;a.data?a.data(z):l.push(z)},G.onopen=()=>{var K;return(K=a.connect)==null?void 0:K.call(a)},G.onclose=x,G.onerror=({error:K})=>{var z;return(z=a.error)==null?void 0:z.call(a,Zi(K,"data channel error"))}},ie=async G=>{let K=null;try{await Promise.race([new Promise(z=>{const le=()=>{G.iceGatheringState==="complete"&&(G.removeEventListener(mu,le),z())};G.addEventListener(mu,le),le()}),new Promise(z=>{K=setTimeout(z,nS)})])}finally{wt(K)}return D(G)},ce=async()=>{const G=h?D(o):await ie(o);return y(G),G};i?(v=o.createDataChannel("data"),re(v)):o.ondatachannel=({channel:G})=>{v=G,re(G)};const se=async(G=!1)=>{var K,z;if(o.connectionState!=="closed")try{return f=!0,G&&(o.signalingState!=="stable"&&o.signalingState!=="closed"&&((K=o.localDescription)==null?void 0:K.type)===gr&&await o.setLocalDescription({type:"rollback"}),typeof o.restartIce=="function"&&o.restartIce()),await o.setLocalDescription(G?await o.createOffer({iceRestart:!0}):void 0),await ce()}catch(le){(z=a.error)==null||z.call(a,Zi(le,"failed to create local offer"))}finally{f=!1}};o.onnegotiationneeded=async()=>se(!1),o.onicecandidate=({candidate:G})=>{if(!h||!G)return;const K=E(typeof G.toJSON=="function"?G.toJSON():{candidate:G.candidate,sdpMid:G.sdpMid,sdpMLineIndex:G.sdpMLineIndex,usernameFragment:G.usernameFragment});y({type:tf,sdp:JSON.stringify(K)})},o.onconnectionstatechange=()=>{if(o.connectionState==="connected"||o.connectionState==="connecting"){w();return}if(o.connectionState==="disconnected"){m||(m=setTimeout(()=>{m=null,o.connectionState==="disconnected"&&x()},iS));return}(o.connectionState==="failed"||o.connectionState==="closed")&&x()},o.ontrack=G=>{var z,le;const K=G.streams[0];if(K){if(!a.track&&!a.stream){d.push({track:G.track,stream:K});return}(z=a.track)==null||z.call(a,G.track,K),(le=a.stream)==null||le.call(a,K)}},o.onremovestream=G=>{var K;return(K=a.stream)==null?void 0:K.call(a,G.stream)};const ve=i?new Promise(G=>L(K=>{K.type===gr&&G(K)})):Promise.resolve();return i&&queueMicrotask(()=>{var G;!f&&o.signalingState==="stable"&&!o.localDescription&&o.connectionState!=="closed"&&((G=o.onnegotiationneeded)==null||G.call(o,new Event("negotiationneeded")))}),{created:Date.now(),connection:o,get channel(){return v},get isDead(){return o.connectionState==="closed"},getOffer:async(G=!1)=>{var K;if(i)return G?se(!0):((K=o.localDescription)==null?void 0:K.type)===gr?h?D(o):ie(o):ve},async signal(G){var K,z,le;if(G.type==="candidate"){try{const F=JSON.parse(G.sdp);F&&typeof F=="object"&&await Y(E(F))}catch(F){(K=a.error)==null||K.call(a,Zi(F,"failed to parse remote candidate"))}return}if(!((v==null?void 0:v.readyState)==="open"&&!((z=G.sdp)!=null&&z.includes("a=rtpmap"))))try{const F={...G,sdp:C(G.sdp)};if(G.type===gr){if(f||o.signalingState!=="stable"&&!g){if(i)return;await or([o.setLocalDescription({type:"rollback"}),o.setRemoteDescription(F)])}else await o.setRemoteDescription(F);return await W(),await o.setLocalDescription(),await ce()}if(G.type===sS){g=!0;try{await o.setRemoteDescription(F),await W()}finally{g=!1}}}catch(F){(le=a.error)==null||le.call(a,Zi(F,"failed to apply remote signal"))}},sendData:G=>v==null?void 0:v.send(G),destroy:()=>{w(),v==null||v.close(),o.close(),f=!1,g=!1,x()},setHandlers:G=>{const{signal:K,...z}=G;Object.assign(a,z),a.data&&l.length>0&&l.splice(0).forEach(le=>{var F;return(F=a.data)==null?void 0:F.call(a,le)}),K&&L(K),(a.track||a.stream)&&d.length>0&&d.splice(0).forEach(({track:le,stream:F})=>{var q,ne;(q=a.track)==null||q.call(a,le,F),(ne=a.stream)==null||ne.call(a,F)})},offerPromise:ve,addStream:G=>G.getTracks().forEach(K=>o.addTrack(K,G)),removeStream:G=>o.getSenders().filter(K=>K.track&&G.getTracks().includes(K.track)).forEach(K=>o.removeTrack(K)),addTrack:(G,K)=>o.addTrack(G,K),removeTrack:G=>{const K=o.getSenders().find(z=>z.track===G);K&&o.removeTrack(K)},replaceTrack:(G,K)=>{const z=o.getSenders().find(le=>le.track===G);if(z)return z.replaceTrack(K)}}};const oS=[...Cr(3,(i,e)=>`stun:stun${e||""}.l.google.com:19302`),"stun:stun.cloudflare.com:3478"].map(i=>({urls:i})),aS=Object.getPrototypeOf(Uint8Array),Bo=32,cS=2,of=0,xr=of+Bo,Lc=xr+cS,zo=Lc+1,ko=zo+1,Fi=16*2**10-ko,_r=255,lS=65535,vu="bufferedamountlow",xu="close",yu="error",Su="beforeunload",hS=1e4,uS=1e4,hi=i=>"@_"+i,yr=new Set,Mu=()=>yr.forEach(i=>i()),dS=i=>(yr.add(i),yr.size===1&&addEventListener(Su,Mu),()=>{yr.delete(i),yr.size||removeEventListener(Su,Mu)}),fS=i=>i instanceof ArrayBuffer?new Uint8Array(i):new Uint8Array(i.buffer,i.byteOffset,i.byteLength),pS=i=>{const e=sl(i,"unknown error");return e.startsWith("handshake ")?e:`handshake failed: ${e}`},mS=(i,e=uS)=>i.readyState!=="open"||i.bufferedAmount<=i.bufferedAmountLowThreshold?Promise.resolve(i.readyState==="open"):new Promise(t=>{let n=!1,s=null;const r=c=>{n||(n=!0,i.removeEventListener(vu,o),i.removeEventListener(xu,a),i.removeEventListener(yu,a),wt(s),t(c))},o=()=>r(!0),a=()=>r(!1);if(i.addEventListener(vu,o),i.addEventListener(xu,a),i.addEventListener(yu,a),s=setTimeout(()=>r(!1),e),i.readyState!=="open"){r(!1);return}i.bufferedAmount<=i.bufferedAmountLowThreshold&&r(!0)});var gS=(i,e,t,{onPeerHandshake:n,onHandshakeError:s,handshakeTimeoutMs:r=hS}={})=>{const o={},a={},c={},l={},h={},u={},d={},f={},g={},v={},m=new WeakMap,p=new WeakMap,w={onPeerJoin:Bt,onPeerLeave:Bt,onPeerStream:Bt,onPeerTrack:Bt};let x=Bt;const y=(B,M,{includePending:_=!1}={})=>(B?Array.isArray(B)?B:[B]:Sn(_?o:a)).flatMap(R=>{const O=_?o[R]:a[R];return O?[Promise.resolve(M(R,O))]:(console.warn(`${ji}: no peer with id ${R} found`),[])}),L=(B,M,_,R,O,V={})=>{const $={k:M,...V,..._===void 0?{}:{m:_}};return y(B,async(te,he)=>{await R($,te),O(he)})},C=B=>M=>{let _=B.get(M);return _||(_=tr(20),B.set(M,_)),_},E=C(m),D=C(p),T=B=>o[B]??null,S=(B,M,_,R)=>{var O,V,$,te;a[B]&&((V=(O=T(B))==null?void 0:O.__trysteroSetRemoteStreamByKey)==null||V.call(O,M,_),typeof _.id=="string"&&((te=($=T(B))==null?void 0:$.__trysteroSetRemoteStreamById)==null||te.call($,_.id,_)),w.onPeerStream(_,B,R))},I=(B,M,_,R,O)=>{var V,$,te,he,de,Ce;a[B]&&(($=(V=T(B))==null?void 0:V.__trysteroSetRemoteTrackByKey)==null||$.call(V,M,_,R),typeof R.id=="string"&&((he=(te=T(B))==null?void 0:te.__trysteroSetRemoteStreamById)==null||he.call(te,R.id,R)),typeof _.id=="string"&&((Ce=(de=T(B))==null?void 0:de.__trysteroSetRemoteTrackById)==null||Ce.call(de,_.id,_,R)),w.onPeerTrack(_,R,B,O))},Z=(B,M=ft("peer disconnected"))=>{var O;const _=c[B],R=Zi(M,"peer disconnected");_&&(wt(_.handshakeTimer),_.pendingHandshakePayloads.length=0,_.handshakeWaiters.splice(0).forEach(V=>V.reject(R)),delete c[B]),delete o[B],delete a[B],delete u[B],(O=f[B])==null||O.splice(0).forEach(V=>V.reject(R)),delete f[B],delete g[B],delete v[B]},W=(B,M,_)=>{const R=o[B];if(!R||M&&R!==M)return;const O=!!a[B];Z(B,_),R.destroy(),O&&w.onPeerLeave(B),e(B)},Y=(B,M={})=>{const _=h[B];if(l[B]&&_){const te=l[B].options;if(te.sendToPending!==!!M.sendToPending||te.receiveWhilePending!==!!M.receiveWhilePending)throw ft(`action type "${B}" cannot be redefined`);return _}if(!B)throw ft("action type argument is required");const R=Mi(B);if(R.byteLength>Bo)throw ft(`action type string "${B}" (${R.byteLength}b) exceeds byte limit (${Bo}). Hint: choose a shorter name.`);const O={sendToPending:!!M.sendToPending,receiveWhilePending:!!M.receiveWhilePending},V=new Uint8Array(Bo);V.set(R);let $=0;return l[B]={onComplete:Bt,onProgress:Bt,setOnComplete:te=>{l[B].onComplete=te;const he=d[B];he!=null&&he.length&&(delete d[B],he.forEach(({payload:de,peerId:Ce,metadata:fe})=>te(de,Ce,fe)))},setOnProgress:te=>{l[B].onProgress=te},send:async(te,he,de,Ce)=>{const fe=typeof te;if(fe==="undefined")throw ft("action data cannot be undefined");const Me=fe!=="string",Xe=te instanceof Blob,Te=Xe||te instanceof ArrayBuffer||te instanceof aS,ge=de!==void 0,Ue=Te?fS(Xe?await te.arrayBuffer():te):Mi(Me?wn(te):te),Ge=ge?Mi(wn(de)):null,Ke=Math.ceil(Ue.byteLength/Fi)+(ge?1:0)||1,b=Cr(Ke,(ee,k)=>{const j=k===Ke-1,ue=!!(ge&&k===0),ye=new Uint8Array(ko+(ue?(Ge==null?void 0:Ge.byteLength)??0:j?Ue.byteLength-Fi*(Ke-(ge?2:1)):Fi));return ye.set(V),ye.set([$>>8,$&_r],xr),ye.set([Number(j)|Number(ue)<<1|Number(Te)<<2|Number(Me)<<3],Lc),ye.set([Math.round((k+1)/Ke*_r)],zo),ye.set(ge?ue?Ge??new Uint8Array:Ue.subarray((k-1)*Fi,k*Fi):Ue.subarray(k*Fi,(k+1)*Fi),ko),ye});return $=$+1&lS,await or(y(he,async(ee,k)=>{const{channel:j}=k;let ue=0;for(;ue<Ke;){const ye=b[ue];if(!ye||j&&j.bufferedAmount>j.bufferedAmountLowThreshold&&!await mS(j))break;const ze=O.sendToPending?o[ee]:a[ee];if(!ze||ze!==k)break;k.sendData(ye),ue++;const it=ye[zo]??_r;Ce==null||Ce(it/_r,ee,de)}},{includePending:O.sendToPending})),[]},options:O},h[B]=[l[B].send,l[B].setOnComplete,l[B].setOnProgress]},re=B=>Y(B),ie=(B,M)=>{var Ue,Ge;const _=c[B];if(!_)return;const R=new Uint8Array(M),O=ks(R.subarray(of,xr)).replaceAll("\0",""),V=l[O];if(!_.isActive&&!(V!=null&&V.options.receiveWhilePending))return;const $=(R[xr]??0)<<8|(R[xr+1]??0),te=R[Lc]??0,he=R[zo]??0,de=R.subarray(ko),Ce=!!(te&1),fe=!!(te&2),Me=!!(te&4),Xe=!!(te&8);u[B]??(u[B]={}),(Ue=u[B])[O]??(Ue[O]={});const Te=(Ge=u[B][O])[$]??(Ge[$]={chunks:[]});if(fe?Te.meta=ea(ks(de)):Te.chunks.push(de),V==null||V.onProgress(he/_r,B,Te.meta),!Ce)return;const ge=new Uint8Array(Te.chunks.reduce((Ke,b)=>Ke+b.byteLength,0));if(Te.chunks.reduce((Ke,b)=>(ge.set(b,Ke),Ke+b.byteLength),0),delete u[B][O][$],Me)V?V.onComplete(ge,B,Te.meta):(d[O]??(d[O]=[])).push({payload:ge,peerId:B,...Te.meta===void 0?{}:{metadata:Te.meta}});else{const Ke=ks(ge),b=Xe?ea(Ke):Ke;V?V.onComplete(b,B,Te.meta):(d[O]??(d[O]=[])).push({payload:b,peerId:B,...Te.meta===void 0?{}:{metadata:Te.meta}})}},ce=async()=>{await me(""),await new Promise(B=>setTimeout(B,99)),Pr(o).forEach(([B,M])=>{M.destroy(),Z(B,ft("room left"))}),x(),t()},[se,ve]=Y(hi("ping")),[G,K]=Y(hi("pong")),[z,le]=Y(hi("signal")),[F,q]=Y(hi("stream")),[ne,ae]=Y(hi("track")),[me,Ee]=Y(hi("leave"),{sendToPending:!0,receiveWhilePending:!0}),[Ne,N]=Y(hi("hsdata"),{sendToPending:!0,receiveWhilePending:!0}),[He,De]=Y(hi("hsready"),{sendToPending:!0,receiveWhilePending:!0}),Qe=(B,M)=>{const _=c[B];!_||M&&_.peer!==M||_.isActive||!_.didLocalHandshakePass||!_.didReceiveRemoteReady||(_.isActive=!0,a[B]=_.peer,_.handshakeTimer=wt(_.handshakeTimer),w.onPeerJoin(B))},Re=(B,M,_)=>{const R=c[B];if(!R||R.peer!==M)return;const O=pS(_);s==null||s(B,O),W(B,M,ft(O))},Ze=(B,M)=>{const _=c[B];!_||_.peer!==M||_.isActive||(_.didLocalHandshakePass=!0,He("",B).catch(R=>Re(B,M,ft(`failed sending handshake readiness: ${sl(R,"unknown send failure")}`))),Qe(B,M))},We=(B,M)=>{const _=c[B];if(!_||_.peer!==M)return;_.handshakeTimer=setTimeout(()=>Re(B,M,ft(`handshake timed out after ${r}ms`)),r);const R=async($,te)=>{await Ne($,B,te)},O=()=>new Promise(($,te)=>{const he=c[B];if(!he||he.peer!==M){te(ft("peer disconnected during handshake"));return}const de=he.pendingHandshakePayloads.shift();if(de){$(de);return}he.handshakeWaiters.push({resolve:$,reject:Ce=>te(Ce)})}),V=Dn<B;Promise.resolve(n==null?void 0:n(B,R,O,V)).then(()=>Ze(B,M)).catch($=>Re(B,M,Zi($,"handshake failed")))},Be=B=>B&&typeof B=="object"&&!Array.isArray(B)&&typeof B.k=="string"?{key:B.k,...typeof B.s=="string"?{streamId:B.s}:{},...typeof B.t=="string"?{trackId:B.t}:{},...Object.hasOwn(B,"m")?{metadata:B.m}:{}}:null;return ve((B,M)=>G("",M)),K((B,M)=>{var R;const _=f[M];(R=_==null?void 0:_.shift())==null||R.resolve(),_&&!_.length&&delete f[M]}),le((B,M)=>{var _;a[M]&&((_=o[M])==null||_.signal(B))}),q((B,M)=>{var V,$;if(!a[M])return;const _=Be(B);if(!_)return;const R=T(M),O=((V=R==null?void 0:R.__trysteroGetRemoteStreamByKey)==null?void 0:V.call(R,_.key))??(_.streamId?($=R==null?void 0:R.__trysteroGetRemoteStreamById)==null?void 0:$.call(R,_.streamId):void 0);if(O){S(M,_.key,O,_.metadata);return}(g[M]??(g[M]=[])).push(_)}),ae((B,M)=>{var V,$;if(!a[M])return;const _=Be(B);if(!_)return;const R=T(M),O=((V=R==null?void 0:R.__trysteroGetRemoteTrackByKey)==null?void 0:V.call(R,_.key))??(_.trackId?($=R==null?void 0:R.__trysteroGetRemoteTrackById)==null?void 0:$.call(R,_.trackId):void 0);if(O){I(M,_.key,O.track,O.stream,_.metadata);return}(v[M]??(v[M]=[])).push(_)}),Ee((B,M)=>W(M,void 0,ft("peer left room"))),N((B,M,_)=>{const R=c[M];if(!R||R.isActive)return;const O=_===void 0?{data:B}:{data:B,metadata:_},V=R.handshakeWaiters.shift();if(V){V.resolve(O);return}R.pendingHandshakePayloads.push(O)}),De((B,M)=>{const _=c[M];!_||_.isActive||(_.didReceiveRemoteReady=!0,Qe(M))}),i((B,M)=>{const _=o[M];if(_){if(_===B)return;_.destroy(),Z(M,ft("peer replaced"))}o[M]=B,c[M]={peer:B,isActive:!1,didLocalHandshakePass:!1,didReceiveRemoteReady:!1,handshakeTimer:null,pendingHandshakePayloads:[],handshakeWaiters:[]},B.setHandlers({data:R=>ie(M,R),stream:R=>{var V;if(!a[M])return;const O=(V=g[M])==null?void 0:V.shift();O&&S(M,O.key,R,O.metadata)},track:(R,O)=>{var $;if(!a[M])return;const V=($=v[M])==null?void 0:$.shift();V&&I(M,V.key,R,O,V.metadata)},signal:R=>{a[M]&&z(R,M)},close:()=>W(M,B,ft("peer disconnected")),error:R=>{console.error(`${ji} peer error:`,R),W(M,B,R)}}),We(M,B)}),Qd&&(x=dS(()=>ce().catch(Bt))),{makeAction:re,leave:ce,ping:async B=>{if(!a[B])throw ft(`no active peer with id ${B}`);const M=Date.now();return await new Promise((_,R)=>{const O=f[B]??(f[B]=[]),V=()=>{const te=f[B];if(!te)return;const he=te.indexOf($);he>-1&&te.splice(he,1),te.length||delete f[B]},$={resolve:()=>{V(),_()},reject:te=>{V(),R(te)}};O.push($),se("",B).catch(te=>$.reject(Zi(te,"peer disconnected")))}),Date.now()-M},getPeers:()=>ef(Pr(a).map(([B,M])=>[B,M.connection])),addStream:(B,M,_)=>L(M,E(B),_,F,R=>R.addStream(B),{s:B.id}),removeStream:(B,M)=>{y(M,(_,R)=>R.removeStream(B))},addTrack:(B,M,_,R)=>L(_,D(B),R,ne,O=>O.addTrack(B,M),{s:M.id,t:B.id}),removeTrack:(B,M)=>{y(M,(_,R)=>R.removeTrack(B))},replaceTrack:(B,M,_,R)=>L(_,D(M),R,ne,O=>O.replaceTrack(B,M),{t:B.id}),onPeerJoin:B=>{w.onPeerJoin=B,Sn(a).forEach(M=>B(M))},onPeerLeave:B=>w.onPeerLeave=B,onPeerStream:B=>w.onPeerStream=B,onPeerTrack:B=>w.onPeerTrack=B}};const af=1,cf=2,Eu=(i,e)=>{const t=Mi(i),n=new Uint8Array(3+t.byteLength+e.byteLength);return n[0]=af,n[1]=t.byteLength>>>8&255,n[2]=t.byteLength&255,n.set(t,3),n.set(e,3+t.byteLength),n},_S=(i,e)=>{const t=Mi(i),n=new Uint8Array(4+t.byteLength);return n[0]=cf,n[1]=Number(e),n[2]=t.byteLength>>>8&255,n[3]=t.byteLength&255,n.set(t,4),n},vS=i=>{const e=new Uint8Array(i);if(e.byteLength<3)return null;if(e[0]===af){const s=(e[1]??0)<<8|(e[2]??0),r=3+s;return s<=0||e.byteLength<r?null:{type:"room",roomToken:ks(e.subarray(3,r)),payload:e.subarray(r).slice().buffer}}if(e[0]!==cf||e.byteLength<4)return null;const t=(e[2]??0)<<8|(e[3]??0),n=4+t;return t<=0||e.byteLength<n?null:{type:"presence",roomToken:ks(e.subarray(4,n)),isPresent:e[1]===1}},lf=i=>{const{connection:e,channel:t}=i;return i.isDead||e.connectionState==="closed"||e.connectionState==="failed"||e.iceConnectionState==="closed"||e.iceConnectionState==="failed"||(t==null?void 0:t.readyState)==="closing"||(t==null?void 0:t.readyState)==="closed"},xS=i=>{if(lf(i))return"stale";const{channel:e}=i;return!e||e.readyState!=="open"?"transient":"live"};var yS=class{constructor(){Kt(this,"byApp",{});Kt(this,"roomPresenceHandlers",{})}getMap(i){var e;return(e=this.byApp)[i]??(e[i]={})}get(i,e){var t;return(t=this.byApp[i])==null?void 0:t[e]}isPeerStale(i){return lf(i)}getHealth(i){return this.isPeerStale(i)?"stale":"live"}setRoomPresenceHandler(i,e){return this.roomPresenceHandlers[i]=e,()=>{this.roomPresenceHandlers[i]===e&&delete this.roomPresenceHandlers[i]}}sendRoomPresence(i,e,t){i.isClosing||i.peer.isDead||i.peer.sendData(_S(e,t))}clear(i,e,{destroyPeer:t}){const n=this.byApp[i],s=n==null?void 0:n[e];if(!s||s.isClosing)return;s.idleTimer=wt(s.idleTimer),s.isClosing=!0,t&&!s.peer.isDead&&s.peer.destroy();const r=zs(s.bindings);s.bindings={},s.bindingsByToken={},s.controlRoomId=null,delete n[e],r.forEach(o=>{var a,c;(c=(a=o.handlers).close)==null||c.call(a),o.pendingData.length=0,o.pendingSendData.length=0,o.pendingTracks.length=0}),s.remoteStreamsByKey.clear(),s.remoteStreamsById.clear(),s.remoteTracksByKey.clear(),s.remoteTracksById.clear(),s.pendingDataByToken.clear(),s.remoteRoomTokens.clear(),Sn(n).length===0&&delete this.byApp[i]}register(i,e,t,n){const s=this.getMap(i),r=s[e];if(r){if(r.idleTimer=wt(r.idleTimer),r.peer===t)return r;this.clear(i,e,{destroyPeer:!0})}const o={appId:i,peerId:e,peer:t,bindings:{},bindingsByToken:{},pendingDataByToken:new Map,remoteRoomTokens:new Set,idleTimer:null,controlRoomId:null,streamOwners:new Map,trackOwners:new Map,remoteStreamsByKey:new Map,remoteStreamsById:new Map,remoteTracksByKey:new Map,remoteTracksById:new Map,idleMs:n,isClosing:!1};return t.setHandlers({data:a=>this.dispatchData(o,a),signal:a=>this.dispatchSignal(o,a),close:()=>this.clear(i,e,{destroyPeer:!1}),error:a=>{console.error(`${ji} peer error:`,a),this.clear(i,e,{destroyPeer:!1})},track:(a,c)=>this.dispatchTrack(o,a,c)}),s[e]=o,o}bind(i,e,t,{onDetach:n}){const s=t.bindings[i];if(s)return t.idleTimer=wt(t.idleTimer),{proxy:s.proxy,isNew:!1};const r={roomId:i,roomToken:null,roomTokenPromise:e,handlers:{},pendingData:[],pendingSendData:[],pendingTracks:[],detach:Bt,proxy:{}},o=()=>{t.bindings[i]&&(this.pruneRoomOwnership(t,i),delete t.bindings[i],r.roomToken&&t.bindingsByToken[r.roomToken]===r&&delete t.bindingsByToken[r.roomToken],t.controlRoomId===i&&(t.controlRoomId=Sn(t.bindings)[0]??null),n(),this.scheduleIdleTimer(t))},a={created:t.peer.created,get connection(){return t.peer.connection},get channel(){return t.peer.channel},get isDead(){return t.peer.isDead},getOffer:c=>t.peer.getOffer(c),signal:c=>t.peer.signal(c),sendData:c=>{if(!r.roomToken){r.pendingSendData.push(c);return}t.peer.sendData(Eu(r.roomToken,c))},destroy:()=>o(),setHandlers:c=>{const{signal:l,...h}=c;Object.assign(r.handlers,h),l&&(r.handlers.signal=l),this.flushBindingQueues(r)},offerPromise:t.peer.offerPromise,addStream:c=>{const l=t.streamOwners.get(c)??new Set,h=l.size===0;l.add(i),t.streamOwners.set(c,l),h&&t.peer.addStream(c)},removeStream:c=>{const l=t.streamOwners.get(c);l&&(l.delete(i),l.size===0&&(t.streamOwners.delete(c),t.peer.removeStream(c)))},addTrack:(c,l)=>{const h=t.trackOwners.get(c)??{stream:l,rooms:new Set},u=h.rooms.size===0;return h.stream=l,h.rooms.add(i),t.trackOwners.set(c,h),u?t.peer.addTrack(c,l):t.peer.connection.getSenders().find(d=>d.track===c)??t.peer.addTrack(c,l)},removeTrack:c=>{const l=t.trackOwners.get(c);l&&(l.rooms.delete(i),l.rooms.size===0&&(t.trackOwners.delete(c),t.peer.removeTrack(c)))},replaceTrack:(c,l)=>{const h=t.trackOwners.get(c);if(h){t.trackOwners.delete(c);const u=t.trackOwners.get(l)??{stream:h.stream,rooms:new Set};h.rooms.forEach(d=>u.rooms.add(d)),t.trackOwners.set(l,u)}return t.peer.replaceTrack(c,l)},__trysteroGetRemoteStreamByKey:c=>t.remoteStreamsByKey.get(c),__trysteroSetRemoteStreamByKey:(c,l)=>void t.remoteStreamsByKey.set(c,l),__trysteroGetRemoteStreamById:c=>t.remoteStreamsById.get(c),__trysteroSetRemoteStreamById:(c,l)=>void t.remoteStreamsById.set(c,l),__trysteroGetRemoteTrackByKey:c=>t.remoteTracksByKey.get(c),__trysteroSetRemoteTrackByKey:(c,l,h)=>void t.remoteTracksByKey.set(c,{track:l,stream:h}),__trysteroGetRemoteTrackById:c=>t.remoteTracksById.get(c),__trysteroSetRemoteTrackById:(c,l,h)=>void t.remoteTracksById.set(c,{track:l,stream:h})};return r.proxy=a,r.detach=o,t.bindings[i]=r,t.controlRoomId??(t.controlRoomId=i),t.idleTimer=wt(t.idleTimer),e.then(c=>{if(t.isClosing||t.bindings[i]!==r)return;r.roomToken=c,t.bindingsByToken[c]=r;const l=t.pendingDataByToken.get(c);l!=null&&l.length&&(r.pendingData.push(...l),t.pendingDataByToken.delete(c)),r.pendingSendData.splice(0).forEach(h=>t.peer.sendData(Eu(c,h))),this.flushBindingQueues(r)}),{proxy:a,isNew:!0}}pruneRoomOwnership(i,e){i.streamOwners.forEach((t,n)=>{t.delete(e),t.size===0&&(i.streamOwners.delete(n),i.peer.removeStream(n))}),i.trackOwners.forEach((t,n)=>{t.rooms.delete(e),t.rooms.size===0&&(i.trackOwners.delete(n),i.peer.removeTrack(n))})}scheduleIdleTimer(i){i.isClosing||Sn(i.bindings).length>0||(i.idleTimer=wt(i.idleTimer),i.idleTimer=setTimeout(()=>{var t;const e=(t=this.byApp[i.appId])==null?void 0:t[i.peerId];!e||Sn(e.bindings).length>0||this.clear(i.appId,i.peerId,{destroyPeer:!0})},i.idleMs))}getSignalBinding(i){if(i.controlRoomId){const t=i.bindings[i.controlRoomId];if(t!=null&&t.handlers.signal)return t}const e=zs(i.bindings).find(t=>!!t.handlers.signal);return e?(i.controlRoomId=e.roomId,e):null}flushBindingQueues(i){const{handlers:e}=i;e.data&&i.pendingData.length>0&&i.pendingData.splice(0).forEach(t=>{var n;return(n=e.data)==null?void 0:n.call(e,t)}),(e.track||e.stream)&&i.pendingTracks.length&&i.pendingTracks.splice(0).forEach(({track:t,stream:n})=>{var s,r;(s=e.track)==null||s.call(e,t,n),(r=e.stream)==null||r.call(e,n)})}dispatchData(i,e){var s,r;const t=vS(e);if(!t)return;if(t.type==="presence"){t.isPresent?i.remoteRoomTokens.add(t.roomToken):i.remoteRoomTokens.delete(t.roomToken),(r=(s=this.roomPresenceHandlers)[i.appId])==null||r.call(s,i.peerId,t.roomToken,t.isPresent);return}const n=i.bindingsByToken[t.roomToken];if(!n){const o=i.pendingDataByToken.get(t.roomToken)??[];o.push(t.payload),i.pendingDataByToken.set(t.roomToken,o);return}n.handlers.data?n.handlers.data(t.payload):n.pendingData.push(t.payload)}dispatchSignal(i,e){var t,n,s;(s=(t=this.getSignalBinding(i))==null?void 0:(n=t.handlers).signal)==null||s.call(n,e)}dispatchTrack(i,e,t){zs(i.bindings).forEach(n=>{var s,r,o,a;if(n.handlers.track||n.handlers.stream){(r=(s=n.handlers).track)==null||r.call(s,e,t),(a=(o=n.handlers).stream)==null||a.call(o,t);return}n.pendingTracks.push({track:e,stream:t})})}};const SS=23333,MS=12,ES=7533,wS=23333,Ic="__legacy__",ta="offer-placeholder",hf=(i,e,t,n,s,r)=>{i.toCipher(e).then(o=>{i.isLeaving()||!r()||n(t,wn(s(o.sdp)))})},bS=()=>({status:"idle",offerPeer:null,offerId:null,offerSdp:null,offerInitPromise:null,offerAnswered:!1,offerRelays:[],offerSignalRelays:[],offerSignalBacklog:[],offerRelayTimers:[],offerExpiryTimer:null,connectedPeer:null,connectedPeerUnhealthySinceMs:null,answeringExpiryTimer:null,answeringPeer:null,pendingCandidates:{}}),Nr=(i,e)=>i[e]??(i[e]=bS()),fn=i=>{i.connectedPeer?i.status="connected":i.answeringPeer?i.status="answering":i.offerPeer||i.offerRelays.some(Boolean)?i.status="offering":i.status="idle"},Ho=(i,e)=>{i.answeringPeer===e&&(i.answeringExpiryTimer=wt(i.answeringExpiryTimer),i.answeringPeer=null,fn(i))},Dc=(i,e,t)=>{i.connectedPeer&&(i.connectedPeer.isDead||i.connectedPeer.destroy(),i.connectedPeer=null,i.connectedPeerUnhealthySinceMs=null,fn(i))},al=(i,e)=>{i.offerRelayTimers[e]=wt(i.offerRelayTimers[e]),i.offerRelays[e]&&(i.offerRelays[e]=void 0,fn(i))},wu=(i,e)=>{(i==null?void 0:i.offerRelays[e])===ta&&al(i,e)},TS=i=>{if(i.isDead||i.connection.connectionState==="closed")return!0;try{return!!i.connection.remoteDescription}catch{return!0}},Ur=(i,e)=>{const t=i.offerAnswered;i.offerExpiryTimer=wt(i.offerExpiryTimer),i.offerInitPromise=null,i.offerRelays.forEach((n,s)=>al(i,s)),i.offerRelays=[],i.offerSignalRelays=[],i.offerRelayTimers=[],i.offerSignalBacklog=[],i.offerPeer&&i.offerPeer!==i.connectedPeer&&(t||TS(i.offerPeer)?i.offerPeer.isDead||i.offerPeer.destroy():e.recycle(i.offerPeer)),i.offerPeer=null,i.offerId=null,i.offerSdp=null,i.offerAnswered=!1,fn(i)},AS=(i,e,t,n)=>{wt(e.answeringExpiryTimer),e.answeringExpiryTimer=setTimeout(()=>{const s=i.peerStates[t];!s||s.connectedPeer||s.answeringPeer!==n||(n.destroy(),Ho(s,n))},wS)},RS=async(i,e,t)=>{const n=t?[t,Ic]:[Ic];for(const s of n){const r=i.pendingCandidates[s];if(r!=null&&r.length){delete i.pendingCandidates[s];for(const o of r)await e.signal(o)}}},uf=(i,e,t,n=ol)=>{wt(e.offerExpiryTimer);const s=e.offerId;e.offerExpiryTimer=setTimeout(()=>{const r=i.peerStates[t];!r||r.connectedPeer||r.offerId!==s||Ur(r,i.offerPool)},n)},CS=(i,e,t,n)=>e.offerPeer&&e.offerId&&e.offerSdp?Promise.resolve({peer:e.offerPeer,offer:e.offerSdp,offerId:e.offerId}):(e.offerInitPromise||(e.offerInitPromise=(async()=>{const s=(await i.offerPool.checkout(1,!1,i.encryptOffer))[0];if(!s)throw ft("failed to allocate offer peer");const{peer:r,offer:o}=s;e.offerPeer=r,e.offerId=tr(MS),e.offerSdp=o,e.offerAnswered=!1,e.offerSignalBacklog=[],fn(e);const a=()=>{e.offerPeer===r&&!e.connectedPeer&&Ur(e,i.offerPool),i.disconnectPeer(r,t)};return r.setHandlers({connect:()=>i.connectPeer(r,t,n),signal:c=>{e.offerPeer===r&&(e.offerSignalBacklog.push(c),e.offerSignalRelays.forEach(l=>l==null?void 0:l(c)))},close:a,error:a}),uf(i,e,t),{peer:r,offer:o,offerId:e.offerId}})().finally(()=>e.offerInitPromise=null)),e.offerInitPromise),PS=async(i,e,t,n,s)=>{if(n){i.attachSharedPeerToRoom(t,n);return}const r=i.peerStates[t];if(!r||r.connectedPeer||r.answeringPeer||r.offerAnswered){wu(r,e);return}if(r.offerRelays[e]!==ta)return;const[o,a]=await or([Dr(Ir(i.rootTopicPlaintext,t)),CS(i,r,t,e)]);if(i.isLeaving())return;if(r.connectedPeer||r.answeringPeer||r.offerAnswered||r.offerRelays[e]!==ta){wu(r,e);return}r.offerRelayTimers[e]=wt(r.offerRelayTimers[e]),r.offerRelays[e]=!0,fn(r),r.offerRelayTimers[e]=setTimeout(()=>NS(i,t,e),(i.announceIntervals[e]??i.announceIntervalMs)*.9);let c=!1;r.offerSignalRelays[e]=l=>{c&&(i.isLeaving()||r.connectedPeer||r.offerPeer!==a.peer||r.offerId!==a.offerId||l.type!=="candidate"||hf(i,l,o,s,h=>({peerId:Dn,offerId:a.offerId,candidate:h}),()=>!r.connectedPeer&&r.offerPeer===a.peer&&r.offerId===a.offerId))},s(o,wn({peerId:Dn,offerId:a.offerId,offer:a.offer})),c=!0,r.offerSignalBacklog.forEach(l=>{var h,u;return(u=(h=r.offerSignalRelays)[e])==null?void 0:u.call(h,l)})},LS=async(i,e,t,n,s,r,o)=>{var f;const a=Nr(i.peerStates,t);if(a.answeringPeer||a.offerAnswered)return;const c=!!(a.offerPeer||a.offerRelays.some(Boolean));if((c||r)&&Dn<t)return;c&&Ur(a,i.offerPool);const l=i.initPeer(!1,i.config);a.answeringPeer=l,AS(i,a,t,l),fn(a);const h=()=>{Ho(a,l),i.disconnectPeer(l,t)};l.setHandlers({connect:()=>i.connectPeer(l,t,e),close:h,error:h});let u;try{u=await i.toPlain({type:"offer",sdp:n})}catch{Ho(a,l),(f=i.onJoinError)==null||f.call(i,{error:"incorrect room password when decrypting offer",appId:i.appId,peerId:t,roomId:i.roomId});return}if(l.isDead){Ho(a,l);return}const d=await Dr(Ir(i.rootTopicPlaintext,t));i.isLeaving()||(l.setHandlers({signal:g=>{i.isLeaving()||a.answeringPeer!==l||l.isDead||g.type!=="answer"&&g.type!=="candidate"||hf(i,g,d,o,v=>{const m={peerId:Dn};return g.type==="answer"?m.answer=v:m.candidate=v,s&&(m.offerId=s),m},()=>a.answeringPeer===l&&!l.isDead)}}),await l.signal(u),await RS(a,l,s))},IS=async(i,e,t,n,s)=>{var u;let r;try{r=await i.toPlain({type:tf,sdp:t})}catch{return}const o=Nr(i.peerStates,e),a=n&&(o!=null&&o.offerPeer)&&o.offerId===n?o.offerPeer:null,c=(o==null?void 0:o.answeringPeer)??null,l=!n&&(o!=null&&o.offerPeer)?o.offerPeer:null,h=s&&!s.isDead?s:a??c??l;if(!h||h.isDead){const d=n??Ic;((u=o.pendingCandidates)[d]??(u[d]=[])).push(r);return}h.signal(r)},DS=async(i,e,t,n,s,r)=>{var a;let o;try{o=await i.toPlain({type:"answer",sdp:n})}catch{(a=i.onJoinError)==null||a.call(i,{error:"incorrect room password when decrypting answer",appId:i.appId,peerId:t,roomId:i.roomId});return}if(r)i.offerPool.claimLeased(r),r.setHandlers({connect:()=>i.connectPeer(r,t,e),close:()=>i.disconnectPeer(r,t)}),r.signal(o);else{const c=i.peerStates[t];if(!c||!c.offerPeer||c.offerAnswered||s&&c.offerId&&s!==c.offerId||c.offerPeer.isDead)return;c.offerAnswered=!0,uf(i,c,t,SS),c.offerPeer.signal(o)}},NS=(i,e,t)=>{const n=i.peerStates[e];!n||n.connectedPeer||n.offerRelays[t]&&al(n,t)},US=i=>e=>async(t,n,s)=>{if(i.isLeaving())return;const r=typeof n=="string"?ea(n):n,o=typeof r.peerId=="string"?r.peerId:"",a=r.offer,c=r.answer,l=r.candidate,h=r.offerId,u=r.peer,d=r.hasOutgoingOffer===!0;if(o===Dn)return;const f=i.peerStates[o],g=f==null?void 0:f.connectedPeer;if(g&&f){const x=xS(g);if(x==="live"){f.connectedPeerUnhealthySinceMs=null;return}if(x==="stale")Dc(f);else{const y=Date.now(),L=f.connectedPeerUnhealthySinceMs??y;if(f.connectedPeerUnhealthySinceMs=L,y-L<ES)return;Dc(f)}}let v=i.sharedPeers.get(i.appId,o);v&&i.sharedPeers.getHealth(v.peer)==="stale"&&(i.sharedPeers.clear(i.appId,o,{destroyPeer:!0}),v=void 0);const m=!!(o&&!a&&!c&&!l),[p,w]=await or([i.rootTopicP,i.selfTopicP]);if(!i.isLeaving()&&!(t!==p&&t!==w)){if(m&&!v){const x=Nr(i.peerStates,o),y=Dn<o;if(x.answeringPeer||x.connectedPeer||x.offerAnswered)return;if(!y&&!x.offerPeer){const L=await Dr(Ir(i.rootTopicPlaintext,o));!i.isLeaving()&&!x.connectedPeer&&s(L,wn({peerId:Dn}));return}if(x.offerRelays[e])return;x.offerRelays[e]=ta,fn(x)}if(v&&(a||c||l)){if(v.bindings[i.roomId])return;i.attachSharedPeerToRoom(o,v);return}if(m)return PS(i,e,o,v,s);if(a)return LS(i,e,o,a,h,d,s);if(l)return IS(i,o,l,h,u);if(c)return DS(i,e,o,c,h,u)}},cc=5333,OS=[233,533,1333],FS=123333;var BS=({init:i,subscribe:e,announce:t})=>{const n={},s={},r={},o={},a=new yS,c=()=>zs(n).some(y=>Sn(y).length>0),l=y=>s[y]??(s[y]={}),h=y=>r[y]??(r[y]={}),u=(y,L,C)=>{a.getHealth(y.peer)==="live"&&a.sendRoomPresence(y,L,C)},d=(y,L)=>{Pr(s[y]??{}).forEach(([C,E])=>{const{roomToken:D,roomTokenPromise:T}=E;if(D){u(L,D,!0);return}T.then(S=>{var I;((I=s[y])==null?void 0:I[C])===E&&E.roomToken===S&&(a.get(y,L.peerId)!==L||L.isClosing||u(L,S,!0))})})},f=(y,L,C)=>zs(a.getMap(y)).forEach(E=>u(E,L,C)),g=y=>{o[y]||(o[y]=a.setRoomPresenceHandler(y,(L,C,E)=>{var S,I,Z;if(!E)return;const D=a.get(y,L),T=(S=r[y])==null?void 0:S[C];!D||!T||(Z=(I=s[y])==null?void 0:I[T])==null||Z.attachSharedPeerToRoom(L,D)}))},v=y=>{var L;n[y]&&Sn(n[y]).length>0||((L=o[y])==null||L.call(o),delete o[y],delete s[y],delete r[y])};let m=!1,p=[],w=null,x=Bt;return(y,L,C)=>{var M,_;if(!y)throw ft("requires a config map as the first argument");if(C&&typeof C!="object")throw ft("third argument must be a callbacks object");const{appId:E}=y,D=C==null?void 0:C.onJoinError,T=C==null?void 0:C.onPeerHandshake,S=C==null?void 0:C.handshakeTimeoutMs;if(!E)throw ft("config map is missing appId field");if(!L)throw ft("roomId argument required");if(S!==void 0&&(!Number.isFinite(S)||S<=0))throw ft("handshakeTimeoutMs must be a positive number");if((M=n[E])!=null&&M[L])return n[E][L];g(E);const I=Ir(ji,E,L),Z=Dr(I),W=Dr(Ir(I,Dn)),Y=qy(y.password??"",E,L),re=$y(E,L),ie=y._test_only_sharedPeerIdleMs??FS;let ce=!1;const se=R=>async O=>({type:O.type,sdp:await R(Y,O.sdp)}),ve=se(Jy),G=se(Ky),K=a.getMap(E),z=()=>_u(!0,y);w||(w=new eS(z));const le=w,F=async R=>{const O=await R.getOffer(Date.now()-R.created>ol);if(!O||O.type!=="offer")throw ft("failed to get offer for peer");return(await G(O)).sdp},q=(R,O)=>{const V=Nr(me.peerStates,R);V.answeringExpiryTimer=wt(V.answeringExpiryTimer),V.answeringPeer=null;const{proxy:$,isNew:te}=a.bind(L,re,O,{onDetach:()=>{const he=me.peerStates[R];(he==null?void 0:he.connectedPeer)===O.peer&&(he.connectedPeer=null,he.connectedPeerUnhealthySinceMs=null,fn(he))}});V.connectedPeer=O.peer,V.connectedPeerUnhealthySinceMs=null,fn(V),te&&De($,R),Ur(V,le)},me={appId:E,roomId:L,config:y,peerStates:{},rootTopicPlaintext:I,rootTopicP:Z,selfTopicP:W,toPlain:ve,toCipher:G,isLeaving:()=>ce,onJoinError:D,sharedPeers:a,offerPool:le,encryptOffer:F,initPeer:_u,connectPeer:(R,O,V)=>{if(ce){R.destroy();return}const $=Nr(me.peerStates,O);if($.connectedPeer){const de=K[O];if(de&&$.connectedPeer===de.peer&&de.bindings[L])return;$.connectedPeer!==R&&!R.isDead&&R.destroy();return}let te=K[O];if(te&&a.getHealth(te.peer)==="stale"&&(a.clear(E,O,{destroyPeer:!0}),te=void 0),te&&te.peer!==R){R.isDead||R.destroy(),q(O,te);return}const he=!te;te||(te=a.register(E,O,R,ie)),q(O,te),he&&d(E,te)},disconnectPeer:(R,O)=>{if(ce)return;const V=me.peerStates[O];(V==null?void 0:V.connectedPeer)===R&&Dc(V)},attachSharedPeerToRoom:q,announceIntervals:[],announceIntervalMs:cc},Ee=US(me);if(!m){const R=i(y);le.warmup(),p=(Array.isArray(R)?R:[R]).map(O=>Promise.resolve(O)),m=!0,x=(_=y.relayConfig)!=null&&_.manualReconnection?Bt:Xy()}me.announceIntervals=p.map(()=>cc);const Ne=p.map(()=>0),N=[],He=p.map(async(R,O)=>e(await R,await Z,await W,Ee(O),V=>le.getOffers(V,F)));or([Z,W]).then(([R,O])=>{if(ce)return;const V=async($,te)=>{if(ce)return;const he=await t($,R,O);if(ce)return;typeof he=="number"&&(me.announceIntervals[te]=he);const de=Ne[te]??0;Ne[te]=de+1;const Ce=me.announceIntervals[te]??cc,fe=OS[de];N[te]=setTimeout(()=>{V($,te)},typeof fe=="number"?Math.min(Ce,fe):Ce)};He.forEach(async($,te)=>{if(await $,ce)return;const he=await p[te];he&&!ce&&V(he,te)})});let De=Bt;const{compose:Qe}=tS(y.password??"",E,L),Re=Qe(T),Ze={...Re?{onPeerHandshake:Re}:{},...S===void 0?{}:{handshakeTimeoutMs:S},onHandshakeError:(R,O)=>D==null?void 0:D({error:O.replace(/^handshake failed: /,""),appId:E,peerId:R,roomId:L})};n[E]??(n[E]={});const We=l(E),Be=gS(R=>De=R,R=>{if(ce)return;const O=me.peerStates[R];O!=null&&O.connectedPeer&&(O.connectedPeer=null,fn(O))},()=>{var O,V;ce=!0,De=Bt;const R=(O=s[E])==null?void 0:O[L];R!=null&&R.roomToken&&(f(E,R.roomToken,!1),(V=r[E])==null||delete V[R.roomToken],r[E]&&!Sn(r[E]).length&&delete r[E]),s[E]&&(delete s[E][L],Sn(s[E]).length||delete s[E]),Pr(me.peerStates).forEach(([$,te])=>{if(te.answeringExpiryTimer=wt(te.answeringExpiryTimer),te.connectedPeer&&!te.connectedPeer.isDead){const he=K[$];(!he||he.peer!==te.connectedPeer)&&te.connectedPeer.destroy()}te.answeringPeer&&!te.answeringPeer.isDead&&te.answeringPeer.destroy(),Ur(te,le),te.connectedPeer=null,te.answeringPeer=null,fn(te)}),n[E]&&(delete n[E][L],Sn(n[E]).length===0&&delete n[E]),N.forEach(wt),He.forEach(async $=>{(await $)()}),!c()&&(m=!1,le.destroy(),w=null,x(),v(E))},Ze),B={roomToken:null,roomTokenPromise:re,attachSharedPeerToRoom:q};return We[L]=B,re.then(R=>{var O;ce||((O=s[E])==null?void 0:O[L])!==B||(B.roomToken=R,h(E)[R]=L,zs(K).forEach(V=>{V.remoteRoomTokens.has(R)&&q(V.peerId,V)}),f(E,R,!0))}),n[E][L]=Be}};const zS=Wy(i=>i.socket),kS=5,df="x",ff="EVENT",{secretKey:HS,publicKey:GS}=Jd.keygen(),VS=Lr(GS),cl={},Bi={},lc={},pf=()=>Math.floor(Date.now()/1e3),mf=i=>lc[i]??(lc[i]=nf(i,1e4)+2e4),bu=async(i,e)=>{const t={kind:mf(i),tags:[[df,i]],created_at:pf(),content:e,pubkey:VS},n=await ua("SHA-256",wn([0,t.pubkey,t.created_at,t.kind,t.tags,t.content]));return wn([ff,{...t,id:Lr(n),sig:Lr(await Jd.signAsync(n,HS))}])},Tu=(i,e)=>(cl[i]=e,wn(["REQ",i,{kinds:[mf(e)],since:pf(),["#"+df]:[e]}])),Au=i=>(delete cl[i],wn(["CLOSE",i])),WS=BS({init:i=>ky(i,XS,kS,!0).map(e=>{const t=zS.register(e,Vy(e,n=>{var c;const[s,r,o,a]=ea(n);if(s!==ff){const l=`${ji}: relay failure from ${t.url} - `;s==="NOTICE"?console.warn(l+r):s==="OK"&&!o&&console.warn(l+a);return}o&&typeof o=="object"&&"content"in o&&((c=Bi[r])==null||c.call(Bi,cl[r]??"",String(o.content)))}));return t.ready}),subscribe:(i,e,t,n)=>{const s=tr(64),r=tr(64);return Bi[s]=Bi[r]=(o,a)=>{n(o,a,async(c,l)=>{i.send(await bu(c,l))})},i.send(Tu(s,e)),i.send(Tu(r,t)),()=>{i.send(Au(s)),i.send(Au(r)),delete Bi[s],delete Bi[r]}},announce:async(i,e)=>i.send(await bu(e,wn({peerId:Dn})))}),XS=["basspistol.org","bucket.coracle.social","chorus.almostmachines.dev","chorus.pjv.me","communities.nos.social","ftp.halifax.rwth-aachen.de/nostr","hol.is","hornetstorage.net/relay","inbox.mycelium.social","koru.bitcointxoko.org","librerelay.aaroniumii.com","nos.lol","nostr-01.uid.ovh","nostr-01.yakihonne.com","nostr-03.dorafactory.org","nostr-relay.corb.net","nostr.data.haus","nostr.islandarea.net","nostr.sathoarder.com","nostr.self-determined.de","nostr.tegila.com.br","nostr.vulpem.com","payments.u4er.net/nostr","purplerelay.com","relay-can.zombi.cloudrodion.com","relay-rpi.edufeed.org","relay.agorist.space","relay.angor.io","relay.artio.inf.unibe.ch","relay.binaryrobot.com","relay.damus.io","relay.froth.zone","relay.libernet.app","relay.lnau.net","relay.mostr.pub","relay.mostro.network","relay.nostr.place","relay.nostrdice.com","relay.notoshi.win","relay.orangepill.ovh","relay.sigit.io","relay02.lnfi.network","relay2.angor.io","schnorr.me","slick.mjex.me","social.amanah.eblessing.co","staging.yabu.me","strfry.openhoofd.nl","strfry.shock.network","talon.quest","testing.gathr.gives","testnet-relay.samt.st","top.testrelay.top","x.kojira.io","yabu.me/v2"].map(i=>"wss://"+i),Nc="sw_id_v1",Uc=i=>Array.from(i).map(e=>e.toString(16).padStart(2,"0")).join(""),Ru=i=>{const e=i.replace(/-/g,"+").replace(/_/g,"/"),t=atob(e);return Uint8Array.from(t,n=>n.charCodeAt(0))};class Cu{constructor(e,t,n,s){this.peerId=e,this.displayName=t,this.isNew=s,this._priv=n}get shortId(){return this.peerId.slice(-8)}setName(e){this.displayName=e,gf()}async sign(e){const t=new TextEncoder().encode(e),n=await crypto.subtle.sign({name:"Ed25519"},this._priv,t);return Uc(new Uint8Array(n))}}let $n=null,br=null;function gf(){if(!(!$n||!br))try{localStorage.setItem(Nc,JSON.stringify({privJwk:br,displayName:$n.displayName}))}catch{}}async function ZS(){if($n)return $n;const i=localStorage.getItem(Nc);if(i)try{const{privJwk:n,displayName:s}=JSON.parse(i),r=await crypto.subtle.importKey("jwk",n,{name:"Ed25519"},!1,["sign"]),o=Uc(Ru(n.x));return br=n,$n=new Cu(o,s||"",r,!1),$n}catch{localStorage.removeItem(Nc)}const e=await crypto.subtle.generateKey({name:"Ed25519"},!0,["sign","verify"]);br=await crypto.subtle.exportKey("jwk",e.privateKey);const t=Uc(Ru(br.x));return $n=new Cu(t,"",e.privateKey,!0),gf(),$n}function _f(){return $n}const YS="spacework-v1";function qS(){return`sw-1-${decodeURIComponent(window.location.hash.slice(1)).trim().toLowerCase().replace(/[^a-z0-9-]/g,"-").replace(/-{2,}/g,"-").slice(0,40)||"main"}`}function $S(){return window.location.hash.slice(1).trim()||"main"}function KS(i){const e=i.trim().toLowerCase().replace(/[^a-z0-9-]/g,"-").replace(/-{2,}/g,"-")||"main";window.location.hash=e}var Vt,Gs,Vs,Ws,Jn,mi,Xs,zr,kr,Hr,Gr,Vr,Zs,Wr,Xr,Zr,Yr,qr,Pt,ki,ui,Oc;class JS{constructor(e,t=0,n="available"){Je(this,Pt);Je(this,Vt,null);Je(this,Gs,"");Je(this,Vs,0);Je(this,Ws,"available");Je(this,Jn,{});Je(this,mi,new Map);Je(this,Xs,null);Je(this,zr,null);Je(this,kr,null);Je(this,Hr,null);Je(this,Gr,null);Je(this,Vr,null);Je(this,Zs,null);Je(this,Wr,null);Je(this,Xr,null);Je(this,Zr,null);Je(this,Yr,null);Je(this,qr,null);vt(this,Gs,e),vt(this,Vs,t),vt(this,Ws,n)}async start(){const e=qS();console.log(`[SpaceWork] joining P2P room: ${e}`),vt(this,Vt,WS({appId:YS},e)),[en(this,Xs)._,en(this,zr)._]=oe(this,Vt).makeAction("intro"),[en(this,kr)._,en(this,Hr)._]=oe(this,Vt).makeAction("move"),[en(this,Gr)._,en(this,Vr)._]=oe(this,Vt).makeAction("chat"),[en(this,Zs)._,en(this,Wr)._]=oe(this,Vt).makeAction("bye"),[en(this,Xr)._,en(this,Zr)._]=oe(this,Vt).makeAction("avatar"),[en(this,Yr)._,en(this,qr)._]=oe(this,Vt).makeAction("status"),oe(this,Vt).onPeerJoin(t=>{console.log(`[SpaceWork] peer connected (wire): ${t}`),oe(this,Xs).call(this,tt(this,Pt,Oc).call(this),t)}),oe(this,Vt).onPeerLeave(t=>{const n=oe(this,mi).get(t)??t;console.log(`[SpaceWork] peer disconnected: ${n.slice(-8)}`),oe(this,mi).delete(t),tt(this,Pt,ui).call(this,"PEER_LEAVE",{from:n})}),oe(this,zr).call(this,({identityId:t,username:n,presetId:s=0,status:r="available"},o)=>{const a=t;console.log(`[SpaceWork] intro received from ${n} (${t.slice(-8)})`),oe(this,mi).set(o,t),tt(this,Pt,ui).call(this,"HELLO",{from:a,username:n,presetId:s,status:r}),oe(this,Xs).call(this,tt(this,Pt,Oc).call(this),o)}),oe(this,Zr).call(this,({identityId:t,presetId:n},s)=>{tt(this,Pt,ui).call(this,"AVATAR_CHANGE",{from:t,presetId:n})}),oe(this,qr).call(this,({identityId:t,status:n},s)=>{tt(this,Pt,ui).call(this,"STATUS_CHANGE",{from:t,status:n})}),oe(this,Hr).call(this,({identityId:t,pos:n},s)=>{tt(this,Pt,ui).call(this,"MOVE",{from:t,pos:n})}),oe(this,Vr).call(this,({identityId:t,username:n,text:s,ts:r},o)=>{tt(this,Pt,ui).call(this,"CHAT",{from:t,username:n,text:s,ts:r})}),oe(this,Wr).call(this,({identityId:t},n)=>{tt(this,Pt,ui).call(this,"PEER_LEAVE",{from:t})})}stop(){var e;oe(this,Zs)&&oe(this,Zs).call(this,{identityId:tt(this,Pt,ki).call(this)}),(e=oe(this,Vt))==null||e.leave(),vt(this,Vt,null)}addVoiceTrack(e,t){var n;(n=oe(this,Vt))==null||n.addTrack(e,t)}onVoiceTrack(e){var t;(t=oe(this,Vt))==null||t.onTrack((n,s,r)=>{const o=oe(this,mi).get(r)??r;e(n,s,o,r)})}wireToIdentityId(e){return oe(this,mi).get(e)}move(e,t,n,s=0){var r;(r=oe(this,kr))==null||r.call(this,{identityId:tt(this,Pt,ki).call(this),pos:{x:e,y:t,z:n,ry:s}})}chat(e){var t;(t=oe(this,Gr))==null||t.call(this,{identityId:tt(this,Pt,ki).call(this),username:oe(this,Gs),text:e,ts:Date.now()})}setAvatar(e){var t;vt(this,Vs,e),(t=oe(this,Xr))==null||t.call(this,{identityId:tt(this,Pt,ki).call(this),presetId:e})}setStatus(e){var t;vt(this,Ws,e),(t=oe(this,Yr))==null||t.call(this,{identityId:tt(this,Pt,ki).call(this),status:e})}on(e,t){return oe(this,Jn)[e]||(oe(this,Jn)[e]=[]),oe(this,Jn)[e].push(t),()=>{oe(this,Jn)[e]=oe(this,Jn)[e].filter(n=>n!==t)}}}Vt=new WeakMap,Gs=new WeakMap,Vs=new WeakMap,Ws=new WeakMap,Jn=new WeakMap,mi=new WeakMap,Xs=new WeakMap,zr=new WeakMap,kr=new WeakMap,Hr=new WeakMap,Gr=new WeakMap,Vr=new WeakMap,Zs=new WeakMap,Wr=new WeakMap,Xr=new WeakMap,Zr=new WeakMap,Yr=new WeakMap,qr=new WeakMap,Pt=new WeakSet,ki=function(){var e;return((e=_f())==null?void 0:e.peerId)??"unknown"},ui=function(e,t){var n;(n=oe(this,Jn)[e])==null||n.forEach(s=>s(t))},Oc=function(){return{identityId:tt(this,Pt,ki).call(this),username:oe(this,Gs),presetId:oe(this,Vs),status:oe(this,Ws)}};var Ct,ln,Ys,$r,Kr,Jr,Wt,vf,xf,Tn;class jS extends EventTarget{constructor(){super(...arguments);Je(this,Wt);Je(this,Ct,null);Je(this,ln,new Map);Je(this,Ys,!1);Je(this,$r,"");Je(this,Kr,0);Je(this,Jr,"available")}get id(){var t;return((t=_f())==null?void 0:t.peerId)??""}get peers(){return[...oe(this,ln).values()]}get peerCount(){return oe(this,ln).size}async start(t,n=0,s="available"){oe(this,Ys)||(vt(this,Ys,!0),vt(this,$r,t),vt(this,Kr,n),vt(this,Jr,s),vt(this,Ct,new JS(t,n,s)),oe(this,Ct).on("HELLO",({from:r,username:o,presetId:a=0,status:c="available"})=>{oe(this,ln).has(r)||tt(this,Wt,vf).call(this,r,o,a,c)}),oe(this,Ct).on("PEER_LEAVE",({from:r})=>tt(this,Wt,xf).call(this,r)),oe(this,Ct).on("MOVE",({from:r,pos:o})=>{tt(this,Wt,Tn).call(this,"peer:move",{peerId:r,pos:o})}),oe(this,Ct).on("AVATAR_CHANGE",({from:r,presetId:o})=>{tt(this,Wt,Tn).call(this,"peer:avatar",{peerId:r,presetId:o})}),oe(this,Ct).on("STATUS_CHANGE",({from:r,status:o})=>{tt(this,Wt,Tn).call(this,"peer:status",{peerId:r,status:o})}),oe(this,Ct).on("CHAT",({from:r,username:o,text:a,ts:c})=>{tt(this,Wt,Tn).call(this,"chat",{from:r,username:o,text:a,ts:c})}),await oe(this,Ct).start())}stop(){var t;(t=oe(this,Ct))==null||t.stop(),vt(this,Ct,null),oe(this,ln).clear(),vt(this,Ys,!1)}move(t,n,s,r=0){var o;(o=oe(this,Ct))==null||o.move(t,n,s,r)}setAvatar(t){var n;vt(this,Kr,t),(n=oe(this,Ct))==null||n.setAvatar(t)}setStatus(t){var n;vt(this,Jr,t),(n=oe(this,Ct))==null||n.setStatus(t)}sendChat(t){var s;if(!t.trim())return;const n=Date.now();tt(this,Wt,Tn).call(this,"chat",{from:this.id,username:oe(this,$r),text:t,ts:n}),(s=oe(this,Ct))==null||s.chat(t)}addVoiceTrack(t,n){var s;(s=oe(this,Ct))==null||s.addVoiceTrack(t,n)}onVoiceTrack(t){var n;(n=oe(this,Ct))==null||n.onVoiceTrack(t)}wireToIdentityId(t){var n;return(n=oe(this,Ct))==null?void 0:n.wireToIdentityId(t)}}Ct=new WeakMap,ln=new WeakMap,Ys=new WeakMap,$r=new WeakMap,Kr=new WeakMap,Jr=new WeakMap,Wt=new WeakSet,vf=function(t,n,s,r){oe(this,ln).set(t,{peerId:t,username:n,presetId:s,status:r}),tt(this,Wt,Tn).call(this,"peer:join",{peerId:t,username:n,presetId:s,status:r}),tt(this,Wt,Tn).call(this,"status",{peerCount:oe(this,ln).size})},xf=function(t){oe(this,ln).has(t)&&(oe(this,ln).delete(t),tt(this,Wt,Tn).call(this,"peer:leave",{peerId:t}),tt(this,Wt,Tn).call(this,"status",{peerCount:oe(this,ln).size}))},Tn=function(t,n){this.dispatchEvent(new CustomEvent(t,{detail:n}))};const Ut=new jS,Zn=Object.freeze({OCEAN:"ocean",COAST:"coast",DESERT:"desert",PLAINS:"plains",FOREST:"forest",MOUNTAIN:"mountain",ARCTIC:"arctic",JUNGLE:"jungle",TUNDRA:"tundra"});function Uo(i){let e=5381;for(let t=0;t<i.length;t++)e=Math.imul(e,33)^i.charCodeAt(t);return(e>>>0).toString(16).padStart(8,"0")}function yf(i,e,t,n){const s=JSON.stringify({parentHash:i,authorId:e,changes:t,timestamp:n});let r=Uo(s),o=Uo(r+s.slice(0,32)),a=Uo(o+s.slice(-32)),c=Uo(a+e);return r+o+a+c}class Us{constructor(e,t,n,s="",r=Date.now()){this.parentHash=e,this.authorId=t,this.changes=Object.freeze([...n]),this.message=s,this.timestamp=r,this.hash=yf(e,t,n,r)}buildRevert(e,t=Date.now()){const n=this.changes.map(s=>({cellId:s.cellId,key:s.key,oldValue:s.newValue,newValue:s.oldValue}));return new Us(this.hash,e,n,`revert: ${this.message||this.hash.slice(0,8)}`,t)}toJSON(){return{hash:this.hash,parentHash:this.parentHash,authorId:this.authorId,message:this.message,timestamp:this.timestamp,changes:this.changes}}}const QS="universe",eM="genesis: the universe begins";var Ot,Jt;class tM{constructor(){Je(this,Ot,new Map);Je(this,Jt,null);this._genesis()}_genesis(){const e=new Us(null,QS,[],eM,0);oe(this,Ot).set(e.hash,e),vt(this,Jt,e.hash)}get head(){return oe(this,Jt)}get length(){return oe(this,Ot).size}getCommit(e){return oe(this,Ot).get(e)??null}headCommit(){return oe(this,Ot).get(oe(this,Jt))}log(e=1/0){const t=[];let n=oe(this,Jt);for(;n&&t.length<e;){const s=oe(this,Ot).get(n);if(!s)break;t.push(s),n=s.parentHash}return t}stateAt(e){const t=[];let n=e;for(;n;){const r=oe(this,Ot).get(n);if(!r)break;t.unshift(r),n=r.parentHash}const s=new Map;for(const r of t)for(const{cellId:o,key:a,newValue:c}of r.changes)s.set(`${o}:${a}`,c);return s}currentState(){return this.stateAt(oe(this,Jt))}diff(e,t){const n=this.stateAt(e),s=this.stateAt(t),r=[],o=new Set([...n.keys(),...s.keys()]);for(const a of o){const c=n.get(a)??null,l=s.get(a)??null;if(c!==l){const[h,u]=a.split(":");r.push({cellId:h,key:u,before:c,after:l})}}return r}commit(e,t,n=""){if(!Array.isArray(t)||t.length===0)throw new Error("commit requires at least one change");for(const r of t)if(!r.cellId||!r.key)throw new Error("each change must have cellId and key");const s=new Us(oe(this,Jt),e,t,n);return oe(this,Ot).set(s.hash,s),vt(this,Jt,s.hash),s}revert(e,t){const n=oe(this,Ot).get(e);if(!n)throw new Error(`commit ${e} not found`);if(n.changes.length===0)throw new Error("cannot revert empty commit");n.buildRevert(t);const s=new Us(oe(this,Jt),t,[...n.changes].map(r=>({cellId:r.cellId,key:r.key,oldValue:r.newValue,newValue:r.oldValue})),`revert: ${n.message||n.hash.slice(0,8)}`);return oe(this,Ot).set(s.hash,s),vt(this,Jt,s.hash),s}applyExternal(e){if(oe(this,Ot).has(e.hash))return oe(this,Ot).get(e.hash);if(e.parentHash&&!oe(this,Ot).has(e.parentHash))throw new Error(`missing parent ${e.parentHash} — cannot apply ${e.hash}`);const t=new Us(e.parentHash,e.authorId,e.changes,e.message,e.timestamp);return oe(this,Ot).set(e.hash,t),e.parentHash===oe(this,Jt)&&vt(this,Jt,e.hash),t}verify(){for(const e of oe(this,Ot).values()){if(yf(e.parentHash,e.authorId,e.changes,e.timestamp)!==e.hash)return{valid:!1,broken:e.hash};if(e.parentHash&&!oe(this,Ot).has(e.parentHash))return{valid:!1,broken:e.hash,reason:"missing-parent"}}return{valid:!0}}}Ot=new WeakMap,Jt=new WeakMap;const lt=Object.freeze({SOLAR:"solar",WIND:"wind",HYDRO:"hydro",MINERAL:"mineral",RARE_EARTH:"rare_earth",BIOLOGICAL:"biological",FISHERY:"fishery",GEOTHERMAL:"geothermal"});Zn.OCEAN+"",lt.FISHERY+"",lt.WIND+"",Zn.COAST+"",lt.FISHERY+"",lt.WIND+"",lt.SOLAR+"",Zn.DESERT+"",lt.SOLAR+"",lt.RARE_EARTH+"",lt.MINERAL+"",Zn.PLAINS+"",lt.WIND+"",lt.MINERAL+"",lt.BIOLOGICAL+"",lt.SOLAR+"",Zn.FOREST+"",lt.BIOLOGICAL+"",lt.HYDRO+"",lt.WIND+"",Zn.MOUNTAIN+"",lt.MINERAL+"",lt.RARE_EARTH+"",lt.GEOTHERMAL+"",lt.WIND+"",lt.HYDRO+"",Zn.ARCTIC+"",lt.MINERAL+"",lt.WIND+"",Zn.JUNGLE+"",lt.BIOLOGICAL+"",lt.HYDRO+"",lt.SOLAR+"",Zn.TUNDRA+"",lt.MINERAL+"",lt.GEOTHERMAL+"",lt.WIND+"";(async()=>{const i=await ZS(),e=new tM;window._worldHistory=e;function t({peerCount:g}={}){document.querySelectorAll(".ipfs-dot").forEach(v=>{v.className="ipfs-dot green"}),document.querySelectorAll("#ipfs-label").forEach(v=>{v.textContent=`P2P · ${i.shortId}`}),g!==void 0&&document.querySelectorAll("#ipfs-peers").forEach(v=>{v.textContent=g>0?`${g} peer${g!==1?"s":""}`:""})}t({peerCount:0}),Ut.addEventListener("status",g=>t(g.detail)),Ut.addEventListener("commit",g=>{try{e.applyExternal(g.detail.commit)}catch{}});const n=document.getElementById("lobby"),s=document.getElementById("loading"),r=document.getElementById("load-fill"),o=document.getElementById("load-text"),a=document.getElementById("hud"),c=document.getElementById("click-to-start"),l=document.getElementById("enter-btn"),h=document.getElementById("username"),u=document.getElementById("room-name");!i.isNew&&i.displayName&&(h.value=i.displayName),u&&(u.value=$S());const d=document.getElementById("id-fingerprint");d&&(d.textContent=i.isNew?"New identity generated":`Identity · ${i.shortId}`),function(){const v=document.getElementById("lobby-avatar-grid");if(!v)return;const m=parseInt(localStorage.getItem("spaceAvatarId")??"0",10),p=w=>"#"+w.toString(16).padStart(6,"0");$i.forEach(w=>{const x=p(w.skin),y=p(w.hair),L=p(w.outfit),C=p(w.accent),E=document.createElement("div");E.className="lav-chip"+(w.id===m?" lav-active":""),E.dataset.id=String(w.id),E.title=w.label,E.innerHTML=`<svg viewBox="0 0 60 82" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="30" cy="16" rx="17" ry="14" fill="${y}"/>
        <circle cx="30" cy="22" r="13" fill="${x}"/>
        <ellipse cx="17.5" cy="22" rx="3.5" ry="4.5" fill="${x}"/>
        <ellipse cx="42.5" cy="22" rx="3.5" ry="4.5" fill="${x}"/>
        <circle cx="25" cy="21" r="2.8" fill="${C}"/><circle cx="35" cy="21" r="2.8" fill="${C}"/>
        <circle cx="25" cy="21" r="1.6" fill="#111"/><circle cx="35" cy="21" r="1.6" fill="#111"/>
        <rect x="26.5" y="34" width="7" height="5" rx="2" fill="${x}"/>
        <rect x="14" y="39" width="32" height="24" rx="6" fill="${L}"/>
        <rect x="22" y="44" width="16" height="5" rx="2" fill="${C}" opacity="0.75"/>
        <rect x="5" y="40" width="10" height="20" rx="5" fill="${L}"/>
        <rect x="45" y="40" width="10" height="20" rx="5" fill="${L}"/>
        <rect x="16" y="62" width="11" height="14" rx="4" fill="${L}"/>
        <rect x="33" y="62" width="11" height="14" rx="4" fill="${L}"/>
      </svg>`,E.addEventListener("click",()=>{v.querySelectorAll(".lav-chip").forEach(D=>D.classList.remove("lav-active")),E.classList.add("lav-active"),localStorage.setItem("spaceAvatarId",String(w.id))}),v.appendChild(E)})}(),h==null||h.addEventListener("keydown",g=>{g.key==="Enter"&&f()}),u==null||u.addEventListener("keydown",g=>{g.key==="Enter"&&f()}),l==null||l.addEventListener("click",f);function f(){const g=h.value.trim();if(!g){h.focus(),h.style.borderColor="#f55";return}h.style.borderColor="",i.setName(g),u!=null&&u.value.trim()&&KS(u.value.trim()),window._spaceUsername=g,n.style.display="none",s.classList.add("visible");const{scene:v,camera:m,renderer:p,onShipLoaded:w}=wx((x,y)=>{r.style.width=x+"%",o.textContent=y});w(()=>{var Xe,Te,ge,Ue,Ge,Ke;s.classList.remove("visible"),a.classList.add("visible"),c.classList.remove("hidden");const{meshes:x,screens:y}=bx(v),{openScreen:L,isOpen:C}=ny(),E=parseInt(localStorage.getItem("spaceAvatarId")??"0",10),D=new fy(b=>S==null?void 0:S.navigate(b)),T=document.getElementById("presence-panel");T&&T.classList.add("pp-visible"),D.setSelf(g,E,"OUTSIDE","available");const S=Jx(v,m,p,b=>{iM(b),D.updateSelfZone(b)},b=>{Ut.setAvatar(b),D.setSelf(g,b,D._self.zone,I)});let I="available";const Z=document.getElementById("status-btn"),W=document.getElementById("status-menu");Z&&W&&(jc.forEach(b=>{const ee="#"+b.color.toString(16).padStart(6,"0"),k=document.createElement("div");k.className="sm-opt"+(b.id===I?" sm-active":""),k.dataset.status=b.id,k.innerHTML=`<span class="sm-dot" style="background:${ee};box-shadow:0 0 4px ${ee}40"></span>${b.label}`,k.addEventListener("click",j=>{j.stopPropagation(),I=b.id,Z.innerHTML=`<span class="sm-dot" style="background:${ee};box-shadow:0 0 4px ${ee}40;display:inline-block;vertical-align:middle;width:8px;height:8px;border-radius:50%;margin-right:5px"></span>${b.label.replace(/^\S+\s/,"")}`,S.setStatus(b.id),D.updateSelfStatus(b.id),Ut.setStatus(b.id),W.querySelectorAll(".sm-opt").forEach(ue=>ue.classList.toggle("sm-active",ue.dataset.status===b.id)),W.classList.remove("sm-open")}),W.appendChild(k)}),Z.addEventListener("click",b=>{b.stopPropagation(),W.classList.toggle("sm-open")}),document.addEventListener("click",()=>W.classList.remove("sm-open"))),document.querySelectorAll(".vtbtn").forEach(b=>{b.addEventListener("click",ee=>{ee.stopPropagation(),re(),S.setView(b.dataset.view),b.dataset.view==="first"&&document.pointerLockElement!==p.domElement&&p.domElement.requestPointerLock()})});let Y=!1;function re(){Y||(Y=!0,c.classList.add("hidden"))}document.addEventListener("pointerlockchange",()=>{document.pointerLockElement===p.domElement&&re()}),c.addEventListener("click",re);const ie=new Set(["KeyW","KeyA","KeyS","KeyD"]),ce=new Set([...ie,"ArrowUp","ArrowDown","ArrowLeft","ArrowRight"]);document.addEventListener("keydown",b=>{ce.has(b.code)&&(re(),ie.has(b.code)&&S.getMode()==="first"&&document.pointerLockElement!==p.domElement&&p.domElement.requestPointerLock())});const se=new ox,ve=new Se,G=new di(new U(0,1,0),0),K=new U;p.domElement.addEventListener("click",b=>{if(C()||document.pointerLockElement===p.domElement||S.isDragMoved())return;re(),ve.x=b.clientX/window.innerWidth*2-1,ve.y=-(b.clientY/window.innerHeight)*2+1,se.setFromCamera(ve,m);const ee=se.intersectObjects(x);if(ee.length>0){L(ee[0].object.userData.screen);return}se.ray.intersectPlane(G,K)&&S.navigate({x:Math.max(-65,Math.min(65,K.x)),z:Math.max(-65,Math.min(65,K.z))})});const z=new Map,le=new Map;Ut.addEventListener("peer:join",b=>{const{peerId:ee,username:k,presetId:j}=b.detail;if(le.set(ee,k),z.has(ee))return;const ue=j??nM(ee),ye=_d(k,ue);v.add(ye),z.set(ee,ye),Pu(a,z.size+1),D.addPeer(ee,k,ue),S.peerJoin(ee,k)}),Ut.addEventListener("peer:move",b=>{const{peerId:ee,pos:k}=b.detail,j=z.get(ee);if(D.movePeer(ee,k.x,k.z),j){const ue=j.position.clone();if(j.position.lerp(new U(k.x,k.y??0,k.z),.6),k.ry!==void 0){let ye=k.ry-j.rotation.y;for(;ye>Math.PI;)ye-=Math.PI*2;for(;ye<-Math.PI;)ye+=Math.PI*2;j.rotation.y+=ye*.25}ue.distanceTo(j.position)>.008&&(j.userData.isMoving=!0,clearTimeout(j.userData._stopTimer),j.userData._stopTimer=setTimeout(()=>{j.userData.isMoving=!1},180))}S.peerMove(ee,k.x,k.z,le.get(ee)??ee.slice(-4))}),Ut.addEventListener("peer:leave",b=>{const ee=z.get(b.detail.peerId);ee&&(v.remove(ee),z.delete(b.detail.peerId),Pu(a,z.size+1)),q.removePeer(b.detail.peerId),D.removePeer(b.detail.peerId),S.peerLeave(b.detail.peerId),le.delete(b.detail.peerId)}),Ut.addEventListener("peer:avatar",b=>{const{peerId:ee,presetId:k}=b.detail,j=z.get(ee),ue=le.get(ee)??ee.slice(-4);j&&yd(j,ue,k),D.updatePeerPreset(ee,k)}),Ut.addEventListener("peer:status",b=>{const{peerId:ee,status:k}=b.detail,j=z.get(ee);j&&vd(j,k),D.updatePeerStatus(ee,k)});let F=performance.now();(function b(){requestAnimationFrame(b);const ee=performance.now(),k=Math.min((ee-F)/1e3,.1);F=ee;const j=ee/1e3;z.forEach((ue,ye)=>{Md(ue,ue.userData.isMoving??!1,k),xd(ue,q.isTalking(ye),j)}),S.setSelfTalking(q.isTalking("self"),j)})(),Ut.start(g,E,I),window._sync=Ut;const q=new hy,ne=document.getElementById("voice-btn"),ae=({active:b,muted:ee}={})=>{ne&&(b?ee?(ne.textContent="🔇 Muted",ne.className="hud-side-btn voice-muted"):(ne.textContent="🎙 Live",ne.className="hud-side-btn voice-active"):(ne.textContent="🎙 Voice",ne.className="hud-side-btn"))};q.onStateChange(ae),ae({active:!1,muted:!1}),q.onTalkChange(b=>{S.setTalkingPeers(b)}),ne&&ne.addEventListener("click",async b=>{if(b.stopPropagation(),q.active)q.toggleMute();else if(ne.textContent="⏳ Connecting…",!await q.start(Ut)){ne.textContent="🚫 No mic";return}}),setInterval(()=>{const b=S.getPosition(),ee=S.getRotation();Ut.move(b.x,b.y,b.z,ee.y),q.update(b,z)},50);const me=document.getElementById("chat-toggle"),Ee=document.getElementById("chat-panel"),Ne=document.getElementById("chat-close"),N=document.getElementById("chat-input"),He=document.getElementById("chat-send"),De=document.getElementById("chat-messages"),Qe=document.getElementById("chat-badge");let Re=0;const Ze=document.getElementById("mb-chat-badge");function We(){var b;Ee.classList.add("open"),me.classList.add("open"),(b=document.getElementById("mb-chat-btn"))==null||b.classList.add("mb-active"),Re=0,Qe.textContent="",Qe.classList.remove("visible"),Ze&&(Ze.textContent="",Ze.classList.remove("visible")),N.focus()}function Be(){var b;Ee.classList.remove("open"),me.classList.remove("open"),(b=document.getElementById("mb-chat-btn"))==null||b.classList.remove("mb-active")}me.addEventListener("click",b=>{b.stopPropagation(),Ee.classList.contains("open")?Be():We()}),Ne.addEventListener("click",b=>{b.stopPropagation(),Be()}),(Xe=document.getElementById("mb-chat-btn"))==null||Xe.addEventListener("click",b=>{b.stopPropagation(),Ee.classList.contains("open")?Be():We()});function B(){const b=N.value.trim();b&&(Ut.sendChat(b),N.value="")}He.addEventListener("click",b=>{b.stopPropagation(),B()}),N.addEventListener("keydown",b=>{b.key==="Enter"&&B()}),Ee.addEventListener("click",b=>b.stopPropagation());function M({from:b,username:ee,text:k,ts:j}){const ue=b===Ut.id,ye=new Date(j).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),ze=document.createElement("div");if(ze.className="chat-msg",ze.innerHTML=`
          <div class="chat-msg-meta">
            <span class="chat-msg-name${ue?" self":""}">${ee}</span>
            <span class="chat-msg-time">${ye}</span>
          </div>
          <div class="chat-msg-body">${k.replace(/</g,"&lt;")}</div>
        `,De.appendChild(ze),De.scrollTop=De.scrollHeight,!Ee.classList.contains("open")&&!ue){Re++;const it=Re>9?"9+":String(Re);Qe.textContent=it,Qe.classList.add("visible"),Ze&&(Ze.textContent=it,Ze.classList.add("visible"))}}function _(b){const ee=document.createElement("div");ee.className="chat-system",ee.textContent=b,De.appendChild(ee),De.scrollTop=De.scrollHeight}const R=new Map;Ut.addEventListener("chat",b=>M(b.detail)),Ut.addEventListener("peer:join",b=>{R.set(b.detail.peerId,b.detail.username),_(`${b.detail.username} joined`)}),Ut.addEventListener("peer:leave",b=>{const ee=R.get(b.detail.peerId)??"Someone";R.delete(b.detail.peerId),_(`${ee} left`)});const O=new ry,V=new ay,$=new sy(g);O.createReality($),V.setNode(g,Cs.PUBLIC),(Te=document.getElementById("nm-open-btn"))==null||Te.addEventListener("click",b=>{b.stopPropagation(),iu(O,V,g)}),(ge=document.getElementById("mb-avatar-btn"))==null||ge.addEventListener("click",()=>{var b;return(b=document.getElementById("avatar-btn"))==null?void 0:b.click()}),(Ue=document.getElementById("mb-nm-btn"))==null||Ue.addEventListener("click",b=>{b.stopPropagation(),iu(O,V,g)}),(Ge=document.getElementById("mb-voice-btn"))==null||Ge.addEventListener("click",b=>{b.stopPropagation(),ne==null||ne.click()}),(Ke=document.getElementById("mb-status-btn"))==null||Ke.addEventListener("click",b=>{b.stopPropagation(),Z==null||Z.click()}),q.onStateChange(({active:b,muted:ee}={})=>{const k=document.getElementById("mb-voice-btn");k&&(b?ee?(k.innerHTML="🔇",k.className="mb-btn mb-voice-active",k.style.color="#ff6b6b"):(k.innerHTML="🎙",k.className="mb-btn mb-voice-active",k.style.color=""):(k.innerHTML="🎙",k.className="mb-btn"))});const te=document.getElementById("screen-hint"),he=document.getElementById("screen-hint-name");let de=null,Ce=null;document.addEventListener("keydown",b=>{if(b.code==="KeyE"&&de&&!C()&&L(de),b.code==="KeyF"&&Ce){const ee=Ce.def.id,k=ee==="main-left"||ee==="main-right",j=qn(k?"main-left":ee);k&&qn("main-right"),fe(Ce.def.label,j)}});function fe(b,ee){let k=document.getElementById("door-action-hint");k||(k=document.createElement("div"),k.id="door-action-hint",k.style.cssText=`
            position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);
            background:rgba(0,0,0,0.7);border:1px solid rgba(255,255,255,0.2);
            padding:10px 22px;border-radius:20px;font-size:0.9rem;color:#fff;
            pointer-events:none;z-index:13;opacity:0;transition:opacity 0.2s;
          `,document.body.appendChild(k)),k.textContent=`${b} ${ee?"opened":"closed"}`,k.style.opacity="1",clearTimeout(k._t),k._t=setTimeout(()=>{k.style.opacity="0"},1500)}const Me=new Set;setInterval(()=>{var ye;if(C())return;const b=S.getPosition();let ee=null,k=4;y.forEach(ze=>{const it=b.x-ze.position.x,mt=b.z-ze.position.z,et=Math.sqrt(it*it+mt*mt);et<k&&(k=et,ee=ze)}),de=ee,te&&(te.style.display=ee?"flex":"none",ee&&he&&(he.textContent=ee.label)),eo.forEach(ze=>{const it=b.x-ze.hinge.x,mt=b.z-ze.hinge.z,et=Math.sqrt(it*it+mt*mt),yt=ze.id;et<2.2&&!bs(yt)?(qn(yt),Me.add(yt),yt==="main-left"&&(bs("main-right")||qn("main-right"),Me.add("main-right")),yt==="main-right"&&(bs("main-left")||qn("main-left"),Me.add("main-left"))):et>3.5&&Me.has(yt)&&bs(yt)&&(qn(yt),Me.delete(yt),yt==="main-left"&&(bs("main-right")&&qn("main-right"),Me.delete("main-right")),yt==="main-right"&&(bs("main-left")&&qn("main-left"),Me.delete("main-left")))});const j=Ed(b,2.8);Ce=j;const ue=document.getElementById("door-proximity-hint");if(ue)if(j&&!ee){const ze=(ye=j.state)!=null&&ye.open?"Close":"Open";ue.style.display="flex",ue.querySelector("#door-hint-name").textContent=`${ze} ${j.def.label}`}else ue.style.display="none"},150)})}})();function nM(i){let e=0;for(let t=0;t<i.length;t++)e=e*31+i.charCodeAt(t)|0;return Math.abs(e)%$i.length}function Pu(i,e){var n;const t=(n=i==null?void 0:i.querySelector)==null?void 0:n.call(i,"#online-count");t&&(t.textContent=`● ${e} aboard`)}const Lu={OUTSIDE:{color:"#88cc66",desc:"Outside the building"},LOBBY:{color:"#ffffff",desc:"Reception & Entrance"},OPS:{color:"#ffaa44",desc:"Operations & Technical Support"},FUN:{color:"#44ffaa",desc:"Chill, Social & Games"},DESIGN:{color:"#ff6ba0",desc:"UI/UX, Design & 3D"},ENGINEERING:{color:"#44aaff",desc:"Development & Engineering"},"":{color:"#ffffff",desc:""}};function iM(i){const e=document.getElementById("zone-name"),t=document.getElementById("zone-desc"),n=Lu[i]||Lu[""];e&&(e.textContent=i,e.style.color=n.color),t&&(t.textContent=n.desc),document.querySelectorAll(".map-zone").forEach(s=>{s.classList.toggle("active",s.dataset.zone===i)})}
