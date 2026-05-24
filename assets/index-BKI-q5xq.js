var Xd=Object.defineProperty;var jc=i=>{throw TypeError(i)};var Zd=(i,t,e)=>t in i?Xd(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var Jt=(i,t,e)=>Zd(i,typeof t!="symbol"?t+"":t,e),ea=(i,t,e)=>t.has(i)||jc("Cannot "+e);var I=(i,t,e)=>(ea(i,t,"read from private field"),e?e.call(i):t.get(i)),Ft=(i,t,e)=>t.has(i)?jc("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(i):t.set(i,e),Yt=(i,t,e,n)=>(ea(i,t,"write to private field"),n?n.call(i,e):t.set(i,e),e),Dt=(i,t,e)=>(ea(i,t,"access private method"),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const wc="165",Yd=0,Qc=1,qd=2,ou=1,au=2,Zn=3,Ri=0,Qe=1,on=2,wi=0,Os=1,tl=2,el=3,nl=4,$d=5,Gi=100,Kd=101,Jd=102,jd=103,Qd=104,tf=200,ef=201,nf=202,sf=203,qa=204,$a=205,rf=206,of=207,af=208,cf=209,lf=210,hf=211,uf=212,df=213,ff=214,pf=0,mf=1,gf=2,bo=3,_f=4,vf=5,xf=6,yf=7,cu=0,Mf=1,Sf=2,bi=0,Ef=1,wf=2,bf=3,lu=4,Tf=5,Af=6,Rf=7,hu=300,$s=301,Ks=302,Ka=303,Ja=304,Ho=306,ja=1e3,Xi=1001,Qa=1002,pn=1003,Cf=1004,Vr=1005,Mn=1006,na=1007,Zi=1008,Ci=1009,Pf=1010,Lf=1011,To=1012,uu=1013,Js=1014,Ei=1015,Go=1016,du=1017,fu=1018,js=1020,If=35902,Df=1021,Nf=1022,In=1023,Uf=1024,Of=1025,Fs=1026,Qs=1027,Ff=1028,pu=1029,Bf=1030,mu=1031,gu=1033,ia=33776,sa=33777,ra=33778,oa=33779,il=35840,sl=35841,rl=35842,ol=35843,al=36196,cl=37492,ll=37496,hl=37808,ul=37809,dl=37810,fl=37811,pl=37812,ml=37813,gl=37814,_l=37815,vl=37816,xl=37817,yl=37818,Ml=37819,Sl=37820,El=37821,aa=36492,wl=36494,bl=36495,zf=36283,Tl=36284,Al=36285,Rl=36286,kf=3200,Hf=3201,_u=0,Gf=1,vi="",Rn="srgb",Di="srgb-linear",bc="display-p3",Vo="display-p3-linear",Ao="linear",ge="srgb",Ro="rec709",Co="p3",es=7680,Cl=519,Vf=512,Wf=513,Xf=514,vu=515,Zf=516,Yf=517,qf=518,$f=519,tc=35044,Pl="300 es",ei=2e3,Po=2001;class nr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Ge=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ca=Math.PI/180,ec=180/Math.PI;function Ti(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ge[i&255]+Ge[i>>8&255]+Ge[i>>16&255]+Ge[i>>24&255]+"-"+Ge[t&255]+Ge[t>>8&255]+"-"+Ge[t>>16&15|64]+Ge[t>>24&255]+"-"+Ge[e&63|128]+Ge[e>>8&255]+"-"+Ge[e>>16&255]+Ge[e>>24&255]+Ge[n&255]+Ge[n>>8&255]+Ge[n>>16&255]+Ge[n>>24&255]).toLowerCase()}function ze(i,t,e){return Math.max(t,Math.min(e,i))}function Kf(i,t){return(i%t+t)%t}function la(i,t,e){return(1-e)*i+e*t}function Ln(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ue(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Mt{constructor(t=0,e=0){Mt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ze(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Kt{constructor(t,e,n,s,r,o,a,c,l){Kt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],_=s[0],m=s[3],p=s[6],M=s[1],v=s[4],w=s[7],U=s[2],T=s[5],b=s[8];return r[0]=o*_+a*M+c*U,r[3]=o*m+a*v+c*T,r[6]=o*p+a*w+c*b,r[1]=l*_+h*M+u*U,r[4]=l*m+h*v+u*T,r[7]=l*p+h*w+u*b,r[2]=d*_+f*M+g*U,r[5]=d*m+f*v+g*T,r[8]=d*p+f*w+g*b,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,d=a*c-h*r,f=l*r-o*c,g=e*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(s*l-h*n)*_,t[2]=(a*n-s*o)*_,t[3]=d*_,t[4]=(h*e-s*c)*_,t[5]=(s*r-a*e)*_,t[6]=f*_,t[7]=(n*c-l*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(ha.makeScale(t,e)),this}rotate(t){return this.premultiply(ha.makeRotation(-t)),this}translate(t,e){return this.premultiply(ha.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ha=new Kt;function xu(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Lo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Jf(){const i=Lo("canvas");return i.style.display="block",i}const Ll={};function Tc(i){i in Ll||(Ll[i]=!0,console.warn(i))}function jf(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const Il=new Kt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Dl=new Kt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Wr={[Di]:{transfer:Ao,primaries:Ro,toReference:i=>i,fromReference:i=>i},[Rn]:{transfer:ge,primaries:Ro,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Vo]:{transfer:Ao,primaries:Co,toReference:i=>i.applyMatrix3(Dl),fromReference:i=>i.applyMatrix3(Il)},[bc]:{transfer:ge,primaries:Co,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Dl),fromReference:i=>i.applyMatrix3(Il).convertLinearToSRGB()}},Qf=new Set([Di,Vo]),ae={enabled:!0,_workingColorSpace:Di,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Qf.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=Wr[t].toReference,s=Wr[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return Wr[i].primaries},getTransfer:function(i){return i===vi?Ao:Wr[i].transfer}};function Bs(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ua(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ns;class tp{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ns===void 0&&(ns=Lo("canvas")),ns.width=t.width,ns.height=t.height;const n=ns.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ns}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Lo("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Bs(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Bs(e[n]/255)*255):e[n]=Bs(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let ep=0;class yu{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ep++}),this.uuid=Ti(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(da(s[o].image)):r.push(da(s[o]))}else r=da(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function da(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?tp.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let np=0;class Ke extends nr{constructor(t=Ke.DEFAULT_IMAGE,e=Ke.DEFAULT_MAPPING,n=Xi,s=Xi,r=Mn,o=Zi,a=In,c=Ci,l=Ke.DEFAULT_ANISOTROPY,h=vi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:np++}),this.uuid=Ti(),this.name="",this.source=new yu(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Mt(0,0),this.repeat=new Mt(1,1),this.center=new Mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==hu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ja:t.x=t.x-Math.floor(t.x);break;case Xi:t.x=t.x<0?0:1;break;case Qa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ja:t.y=t.y-Math.floor(t.y);break;case Xi:t.y=t.y<0?0:1;break;case Qa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ke.DEFAULT_IMAGE=null;Ke.DEFAULT_MAPPING=hu;Ke.DEFAULT_ANISOTROPY=1;class Me{constructor(t=0,e=0,n=0,s=1){Me.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(l+1)/2,w=(f+1)/2,U=(p+1)/2,T=(h+d)/4,b=(u+_)/4,F=(g+m)/4;return v>w&&v>U?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=T/n,r=b/n):w>U?w<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(w),n=T/s,r=F/s):U<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(U),n=b/r,s=F/r),this.set(n,s,r,e),this}let M=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(u-_)/M,this.z=(d-h)/M,this.w=Math.acos((l+f+p-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ip extends nr{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Me(0,0,t,e),this.scissorTest=!1,this.viewport=new Me(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Mn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Ke(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new yu(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Qi extends ip{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Mu extends Ke{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=pn,this.minFilter=pn,this.wrapR=Xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class sp extends Ke{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=pn,this.minFilter=pn,this.wrapR=Xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Fr{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3];const d=r[o+0],f=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=_;return}if(u!==_||c!==d||l!==f||h!==g){let m=1-a;const p=c*d+l*f+h*g+u*_,M=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){const U=Math.sqrt(v),T=Math.atan2(U,p*M);m=Math.sin(m*T)/U,a=Math.sin(a*T)/U}const w=a*M;if(c=c*m+d*w,l=l*m+f*w,h=h*m+g*w,u=u*m+_*w,m===1-a){const U=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=U,l*=U,h*=U,u*=U}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+h*u+c*f-l*d,t[e+1]=c*g+h*d+l*u-a*f,t[e+2]=l*g+h*f+a*d-c*u,t[e+3]=h*g-a*u-c*d-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),d=c(n/2),f=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"YZX":this._x=d*h*u+l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u-d*f*g;break;case"XZY":this._x=d*h*u-l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ze(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(t=0,e=0,n=0){D.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Nl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Nl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return fa.copy(this).projectOnVector(t),this.sub(fa)}reflect(t){return this.sub(fa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ze(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const fa=new D,Nl=new Fr;class Br{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(gn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(gn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=gn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,gn):gn.fromBufferAttribute(r,o),gn.applyMatrix4(t.matrixWorld),this.expandByPoint(gn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Xr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Xr.copy(n.boundingBox)),Xr.applyMatrix4(t.matrixWorld),this.union(Xr)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,gn),gn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(cr),Zr.subVectors(this.max,cr),is.subVectors(t.a,cr),ss.subVectors(t.b,cr),rs.subVectors(t.c,cr),oi.subVectors(ss,is),ai.subVectors(rs,ss),Ui.subVectors(is,rs);let e=[0,-oi.z,oi.y,0,-ai.z,ai.y,0,-Ui.z,Ui.y,oi.z,0,-oi.x,ai.z,0,-ai.x,Ui.z,0,-Ui.x,-oi.y,oi.x,0,-ai.y,ai.x,0,-Ui.y,Ui.x,0];return!pa(e,is,ss,rs,Zr)||(e=[1,0,0,0,1,0,0,0,1],!pa(e,is,ss,rs,Zr))?!1:(Yr.crossVectors(oi,ai),e=[Yr.x,Yr.y,Yr.z],pa(e,is,ss,rs,Zr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,gn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(gn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Bn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Bn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Bn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Bn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Bn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Bn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Bn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Bn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Bn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Bn=[new D,new D,new D,new D,new D,new D,new D,new D],gn=new D,Xr=new Br,is=new D,ss=new D,rs=new D,oi=new D,ai=new D,Ui=new D,cr=new D,Zr=new D,Yr=new D,Oi=new D;function pa(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Oi.fromArray(i,r);const a=s.x*Math.abs(Oi.x)+s.y*Math.abs(Oi.y)+s.z*Math.abs(Oi.z),c=t.dot(Oi),l=e.dot(Oi),h=n.dot(Oi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const rp=new Br,lr=new D,ma=new D;class Ac{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):rp.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;lr.subVectors(t,this.center);const e=lr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(lr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ma.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(lr.copy(t.center).add(ma)),this.expandByPoint(lr.copy(t.center).sub(ma))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const zn=new D,ga=new D,qr=new D,ci=new D,_a=new D,$r=new D,va=new D;class Su{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,zn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=zn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(zn.copy(this.origin).addScaledVector(this.direction,e),zn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){ga.copy(t).add(e).multiplyScalar(.5),qr.copy(e).sub(t).normalize(),ci.copy(this.origin).sub(ga);const r=t.distanceTo(e)*.5,o=-this.direction.dot(qr),a=ci.dot(this.direction),c=-ci.dot(qr),l=ci.lengthSq(),h=Math.abs(1-o*o);let u,d,f,g;if(h>0)if(u=o*c-a,d=o*a-c,g=r*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,f=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(ga).addScaledVector(qr,d),f}intersectSphere(t,e){zn.subVectors(t.center,this.origin);const n=zn.dot(this.direction),s=zn.dot(zn)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,zn)!==null}intersectTriangle(t,e,n,s,r){_a.subVectors(e,t),$r.subVectors(n,t),va.crossVectors(_a,$r);let o=this.direction.dot(va),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ci.subVectors(this.origin,t);const c=a*this.direction.dot($r.crossVectors(ci,$r));if(c<0)return null;const l=a*this.direction.dot(_a.cross(ci));if(l<0||c+l>o)return null;const h=-a*ci.dot(va);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class _e{constructor(t,e,n,s,r,o,a,c,l,h,u,d,f,g,_,m){_e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,h,u,d,f,g,_,m)}set(t,e,n,s,r,o,a,c,l,h,u,d,f,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new _e().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/os.setFromMatrixColumn(t,0).length(),r=1/os.setFromMatrixColumn(t,1).length(),o=1/os.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=o*h,f=o*u,g=a*h,_=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=f+g*l,e[5]=d-_*l,e[9]=-a*c,e[2]=_-d*l,e[6]=g+f*l,e[10]=o*c}else if(t.order==="YXZ"){const d=c*h,f=c*u,g=l*h,_=l*u;e[0]=d+_*a,e[4]=g*a-f,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-g,e[6]=_+d*a,e[10]=o*c}else if(t.order==="ZXY"){const d=c*h,f=c*u,g=l*h,_=l*u;e[0]=d-_*a,e[4]=-o*u,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*h,e[9]=_-d*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const d=o*h,f=o*u,g=a*h,_=a*u;e[0]=c*h,e[4]=g*l-f,e[8]=d*l+_,e[1]=c*u,e[5]=_*l+d,e[9]=f*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const d=o*c,f=o*l,g=a*c,_=a*l;e[0]=c*h,e[4]=_-d*u,e[8]=g*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=f*u+g,e[10]=d-_*u}else if(t.order==="XZY"){const d=o*c,f=o*l,g=a*c,_=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+_,e[5]=o*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=a*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(op,t,ap)}lookAt(t,e,n){const s=this.elements;return en.subVectors(t,e),en.lengthSq()===0&&(en.z=1),en.normalize(),li.crossVectors(n,en),li.lengthSq()===0&&(Math.abs(n.z)===1?en.x+=1e-4:en.z+=1e-4,en.normalize(),li.crossVectors(n,en)),li.normalize(),Kr.crossVectors(en,li),s[0]=li.x,s[4]=Kr.x,s[8]=en.x,s[1]=li.y,s[5]=Kr.y,s[9]=en.y,s[2]=li.z,s[6]=Kr.z,s[10]=en.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],M=n[3],v=n[7],w=n[11],U=n[15],T=s[0],b=s[4],F=s[8],E=s[12],x=s[1],C=s[5],k=s[9],P=s[13],L=s[2],V=s[6],H=s[10],Q=s[14],Y=s[3],it=s[7],nt=s[11],ct=s[15];return r[0]=o*T+a*x+c*L+l*Y,r[4]=o*b+a*C+c*V+l*it,r[8]=o*F+a*k+c*H+l*nt,r[12]=o*E+a*P+c*Q+l*ct,r[1]=h*T+u*x+d*L+f*Y,r[5]=h*b+u*C+d*V+f*it,r[9]=h*F+u*k+d*H+f*nt,r[13]=h*E+u*P+d*Q+f*ct,r[2]=g*T+_*x+m*L+p*Y,r[6]=g*b+_*C+m*V+p*it,r[10]=g*F+_*k+m*H+p*nt,r[14]=g*E+_*P+m*Q+p*ct,r[3]=M*T+v*x+w*L+U*Y,r[7]=M*b+v*C+w*V+U*it,r[11]=M*F+v*k+w*H+U*nt,r[15]=M*E+v*P+w*Q+U*ct,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+r*c*u-s*l*u-r*a*d+n*l*d+s*a*f-n*c*f)+_*(+e*c*f-e*l*d+r*o*d-s*o*f+s*l*h-r*c*h)+m*(+e*l*u-e*a*f-r*o*u+n*o*f+r*a*h-n*l*h)+p*(-s*a*h-e*c*u+e*a*d+s*o*u-n*o*d+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],_=t[13],m=t[14],p=t[15],M=u*m*l-_*d*l+_*c*f-a*m*f-u*c*p+a*d*p,v=g*d*l-h*m*l-g*c*f+o*m*f+h*c*p-o*d*p,w=h*_*l-g*u*l+g*a*f-o*_*f-h*a*p+o*u*p,U=g*u*c-h*_*c-g*a*d+o*_*d+h*a*m-o*u*m,T=e*M+n*v+s*w+r*U;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/T;return t[0]=M*b,t[1]=(_*d*r-u*m*r-_*s*f+n*m*f+u*s*p-n*d*p)*b,t[2]=(a*m*r-_*c*r+_*s*l-n*m*l-a*s*p+n*c*p)*b,t[3]=(u*c*r-a*d*r-u*s*l+n*d*l+a*s*f-n*c*f)*b,t[4]=v*b,t[5]=(h*m*r-g*d*r+g*s*f-e*m*f-h*s*p+e*d*p)*b,t[6]=(g*c*r-o*m*r-g*s*l+e*m*l+o*s*p-e*c*p)*b,t[7]=(o*d*r-h*c*r+h*s*l-e*d*l-o*s*f+e*c*f)*b,t[8]=w*b,t[9]=(g*u*r-h*_*r-g*n*f+e*_*f+h*n*p-e*u*p)*b,t[10]=(o*_*r-g*a*r+g*n*l-e*_*l-o*n*p+e*a*p)*b,t[11]=(h*a*r-o*u*r-h*n*l+e*u*l+o*n*f-e*a*f)*b,t[12]=U*b,t[13]=(h*_*s-g*u*s+g*n*d-e*_*d-h*n*m+e*u*m)*b,t[14]=(g*a*s-o*_*s-g*n*c+e*_*c+o*n*m-e*a*m)*b,t[15]=(o*u*s-h*a*s+h*n*c-e*u*c-o*n*d+e*a*d)*b,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,u=a+a,d=r*l,f=r*h,g=r*u,_=o*h,m=o*u,p=a*u,M=c*l,v=c*h,w=c*u,U=n.x,T=n.y,b=n.z;return s[0]=(1-(_+p))*U,s[1]=(f+w)*U,s[2]=(g-v)*U,s[3]=0,s[4]=(f-w)*T,s[5]=(1-(d+p))*T,s[6]=(m+M)*T,s[7]=0,s[8]=(g+v)*b,s[9]=(m-M)*b,s[10]=(1-(d+_))*b,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=os.set(s[0],s[1],s[2]).length();const o=os.set(s[4],s[5],s[6]).length(),a=os.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],_n.copy(this);const l=1/r,h=1/o,u=1/a;return _n.elements[0]*=l,_n.elements[1]*=l,_n.elements[2]*=l,_n.elements[4]*=h,_n.elements[5]*=h,_n.elements[6]*=h,_n.elements[8]*=u,_n.elements[9]*=u,_n.elements[10]*=u,e.setFromRotationMatrix(_n),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=ei){const c=this.elements,l=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s);let f,g;if(a===ei)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Po)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=ei){const c=this.elements,l=1/(e-t),h=1/(n-s),u=1/(o-r),d=(e+t)*l,f=(n+s)*h;let g,_;if(a===ei)g=(o+r)*u,_=-2*u;else if(a===Po)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const os=new D,_n=new _e,op=new D(0,0,0),ap=new D(1,1,1),li=new D,Kr=new D,en=new D,Ul=new _e,Ol=new Fr;class Dn{constructor(t=0,e=0,n=0,s=Dn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ze(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(ze(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-ze(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(ze(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ul.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ul,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ol.setFromEuler(this),this.setFromQuaternion(Ol,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Dn.DEFAULT_ORDER="XYZ";class Rc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let cp=0;const Fl=new D,as=new Fr,kn=new _e,Jr=new D,hr=new D,lp=new D,hp=new Fr,Bl=new D(1,0,0),zl=new D(0,1,0),kl=new D(0,0,1),Hl={type:"added"},up={type:"removed"},cs={type:"childadded",child:null},xa={type:"childremoved",child:null};class Be extends nr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:cp++}),this.uuid=Ti(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Be.DEFAULT_UP.clone();const t=new D,e=new Dn,n=new Fr,s=new D(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new _e},normalMatrix:{value:new Kt}}),this.matrix=new _e,this.matrixWorld=new _e,this.matrixAutoUpdate=Be.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Rc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return as.setFromAxisAngle(t,e),this.quaternion.multiply(as),this}rotateOnWorldAxis(t,e){return as.setFromAxisAngle(t,e),this.quaternion.premultiply(as),this}rotateX(t){return this.rotateOnAxis(Bl,t)}rotateY(t){return this.rotateOnAxis(zl,t)}rotateZ(t){return this.rotateOnAxis(kl,t)}translateOnAxis(t,e){return Fl.copy(t).applyQuaternion(this.quaternion),this.position.add(Fl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Bl,t)}translateY(t){return this.translateOnAxis(zl,t)}translateZ(t){return this.translateOnAxis(kl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(kn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Jr.copy(t):Jr.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),hr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?kn.lookAt(hr,Jr,this.up):kn.lookAt(Jr,hr,this.up),this.quaternion.setFromRotationMatrix(kn),s&&(kn.extractRotation(s.matrixWorld),as.setFromRotationMatrix(kn),this.quaternion.premultiply(as.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Hl),cs.child=t,this.dispatchEvent(cs),cs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(up),xa.child=t,this.dispatchEvent(xa),xa.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),kn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),kn.multiply(t.parent.matrixWorld)),t.applyMatrix4(kn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Hl),cs.child=t,this.dispatchEvent(cs),cs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hr,t,lp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hr,hp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++){const r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++){const a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Be.DEFAULT_UP=new D(0,1,0);Be.DEFAULT_MATRIX_AUTO_UPDATE=!0;Be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const vn=new D,Hn=new D,ya=new D,Gn=new D,ls=new D,hs=new D,Gl=new D,Ma=new D,Sa=new D,Ea=new D;class Sn{constructor(t=new D,e=new D,n=new D){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),vn.subVectors(t,e),s.cross(vn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){vn.subVectors(s,e),Hn.subVectors(n,e),ya.subVectors(t,e);const o=vn.dot(vn),a=vn.dot(Hn),c=vn.dot(ya),l=Hn.dot(Hn),h=Hn.dot(ya),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(l*c-a*h)*d,g=(o*h-a*c)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Gn)===null?!1:Gn.x>=0&&Gn.y>=0&&Gn.x+Gn.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,Gn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Gn.x),c.addScaledVector(o,Gn.y),c.addScaledVector(a,Gn.z),c)}static isFrontFacing(t,e,n,s){return vn.subVectors(n,e),Hn.subVectors(t,e),vn.cross(Hn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return vn.subVectors(this.c,this.b),Hn.subVectors(this.a,this.b),vn.cross(Hn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Sn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Sn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return Sn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Sn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Sn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;ls.subVectors(s,n),hs.subVectors(r,n),Ma.subVectors(t,n);const c=ls.dot(Ma),l=hs.dot(Ma);if(c<=0&&l<=0)return e.copy(n);Sa.subVectors(t,s);const h=ls.dot(Sa),u=hs.dot(Sa);if(h>=0&&u<=h)return e.copy(s);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(ls,o);Ea.subVectors(t,r);const f=ls.dot(Ea),g=hs.dot(Ea);if(g>=0&&f<=g)return e.copy(r);const _=f*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(hs,a);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return Gl.subVectors(r,s),a=(u-h)/(u-h+(f-g)),e.copy(s).addScaledVector(Gl,a);const p=1/(m+_+d);return o=_*p,a=d*p,e.copy(n).addScaledVector(ls,o).addScaledVector(hs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Eu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hi={h:0,s:0,l:0},jr={h:0,s:0,l:0};function wa(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class ee{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Rn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ae.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=ae.workingColorSpace){return this.r=t,this.g=e,this.b=n,ae.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=ae.workingColorSpace){if(t=Kf(t,1),e=ze(e,0,1),n=ze(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=wa(o,r,t+1/3),this.g=wa(o,r,t),this.b=wa(o,r,t-1/3)}return ae.toWorkingColorSpace(this,s),this}setStyle(t,e=Rn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Rn){const n=Eu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Bs(t.r),this.g=Bs(t.g),this.b=Bs(t.b),this}copyLinearToSRGB(t){return this.r=ua(t.r),this.g=ua(t.g),this.b=ua(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Rn){return ae.fromWorkingColorSpace(Ve.copy(this),t),Math.round(ze(Ve.r*255,0,255))*65536+Math.round(ze(Ve.g*255,0,255))*256+Math.round(ze(Ve.b*255,0,255))}getHexString(t=Rn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ae.workingColorSpace){ae.fromWorkingColorSpace(Ve.copy(this),e);const n=Ve.r,s=Ve.g,r=Ve.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=ae.workingColorSpace){return ae.fromWorkingColorSpace(Ve.copy(this),e),t.r=Ve.r,t.g=Ve.g,t.b=Ve.b,t}getStyle(t=Rn){ae.fromWorkingColorSpace(Ve.copy(this),t);const e=Ve.r,n=Ve.g,s=Ve.b;return t!==Rn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(hi),this.setHSL(hi.h+t,hi.s+e,hi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(hi),t.getHSL(jr);const n=la(hi.h,jr.h,e),s=la(hi.s,jr.s,e),r=la(hi.l,jr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ve=new ee;ee.NAMES=Eu;let dp=0;class ir extends nr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:dp++}),this.uuid=Ti(),this.name="",this.type="Material",this.blending=Os,this.side=Ri,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qa,this.blendDst=$a,this.blendEquation=Gi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ee(0,0,0),this.blendAlpha=0,this.depthFunc=bo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Cl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=es,this.stencilZFail=es,this.stencilZPass=es,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Os&&(n.blending=this.blending),this.side!==Ri&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==qa&&(n.blendSrc=this.blendSrc),this.blendDst!==$a&&(n.blendDst=this.blendDst),this.blendEquation!==Gi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==bo&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Cl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==es&&(n.stencilFail=this.stencilFail),this.stencilZFail!==es&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==es&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Sr extends ir{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ee(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Dn,this.combine=cu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ae=new D,Qr=new Mt;class En{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=tc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ei,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return Tc("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Qr.fromBufferAttribute(this,e),Qr.applyMatrix3(t),this.setXY(e,Qr.x,Qr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyMatrix3(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyMatrix4(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyNormalMatrix(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.transformDirection(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ln(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ue(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ln(e,this.array)),e}setX(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ln(e,this.array)),e}setY(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ln(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ln(e,this.array)),e}setW(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array),s=ue(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array),s=ue(s,this.array),r=ue(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==tc&&(t.usage=this.usage),t}}class wu extends En{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class bu extends En{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Te extends En{constructor(t,e,n){super(new Float32Array(t),e,n)}}let fp=0;const ln=new _e,ba=new Be,us=new D,nn=new Br,ur=new Br,Ne=new D;class an extends nr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fp++}),this.uuid=Ti(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(xu(t)?bu:wu)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Kt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ln.makeRotationFromQuaternion(t),this.applyMatrix4(ln),this}rotateX(t){return ln.makeRotationX(t),this.applyMatrix4(ln),this}rotateY(t){return ln.makeRotationY(t),this.applyMatrix4(ln),this}rotateZ(t){return ln.makeRotationZ(t),this.applyMatrix4(ln),this}translate(t,e,n){return ln.makeTranslation(t,e,n),this.applyMatrix4(ln),this}scale(t,e,n){return ln.makeScale(t,e,n),this.applyMatrix4(ln),this}lookAt(t){return ba.lookAt(t),ba.updateMatrix(),this.applyMatrix4(ba.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(us).negate(),this.translate(us.x,us.y,us.z),this}setFromPoints(t){const e=[];for(let n=0,s=t.length;n<s;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Te(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Br);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];nn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ne.addVectors(this.boundingBox.min,nn.min),this.boundingBox.expandByPoint(Ne),Ne.addVectors(this.boundingBox.max,nn.max),this.boundingBox.expandByPoint(Ne)):(this.boundingBox.expandByPoint(nn.min),this.boundingBox.expandByPoint(nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ac);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){const n=this.boundingSphere.center;if(nn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];ur.setFromBufferAttribute(a),this.morphTargetsRelative?(Ne.addVectors(nn.min,ur.min),nn.expandByPoint(Ne),Ne.addVectors(nn.max,ur.max),nn.expandByPoint(Ne)):(nn.expandByPoint(ur.min),nn.expandByPoint(ur.max))}nn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Ne.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ne));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Ne.fromBufferAttribute(a,l),c&&(us.fromBufferAttribute(t,l),Ne.add(us)),s=Math.max(s,n.distanceToSquared(Ne))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new En(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let F=0;F<n.count;F++)a[F]=new D,c[F]=new D;const l=new D,h=new D,u=new D,d=new Mt,f=new Mt,g=new Mt,_=new D,m=new D;function p(F,E,x){l.fromBufferAttribute(n,F),h.fromBufferAttribute(n,E),u.fromBufferAttribute(n,x),d.fromBufferAttribute(r,F),f.fromBufferAttribute(r,E),g.fromBufferAttribute(r,x),h.sub(l),u.sub(l),f.sub(d),g.sub(d);const C=1/(f.x*g.y-g.x*f.y);isFinite(C)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(C),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(C),a[F].add(_),a[E].add(_),a[x].add(_),c[F].add(m),c[E].add(m),c[x].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let F=0,E=M.length;F<E;++F){const x=M[F],C=x.start,k=x.count;for(let P=C,L=C+k;P<L;P+=3)p(t.getX(P+0),t.getX(P+1),t.getX(P+2))}const v=new D,w=new D,U=new D,T=new D;function b(F){U.fromBufferAttribute(s,F),T.copy(U);const E=a[F];v.copy(E),v.sub(U.multiplyScalar(U.dot(E))).normalize(),w.crossVectors(T,E);const C=w.dot(c[F])<0?-1:1;o.setXYZW(F,v.x,v.y,v.z,C)}for(let F=0,E=M.length;F<E;++F){const x=M[F],C=x.start,k=x.count;for(let P=C,L=C+k;P<L;P+=3)b(t.getX(P+0)),b(t.getX(P+1)),b(t.getX(P+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new En(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new D,r=new D,o=new D,a=new D,c=new D,l=new D,h=new D,u=new D;if(t)for(let d=0,f=t.count;d<f;d+=3){const g=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ne.fromBufferAttribute(t,e),Ne.normalize(),t.setXYZ(e,Ne.x,Ne.y,Ne.z)}toNonIndexed(){function t(a,c){const l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h);let f=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?f=c[_]*a.data.stride+a.offset:f=c[_]*h;for(let p=0;p<h;p++)d[g++]=l[f++]}return new En(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new an,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,n);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){const d=l[h],f=t(d,n);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const f=l[u];h.push(f.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Vl=new _e,Fi=new Su,to=new Ac,Wl=new D,ds=new D,fs=new D,ps=new D,Ta=new D,eo=new D,no=new Mt,io=new Mt,so=new Mt,Xl=new D,Zl=new D,Yl=new D,ro=new D,oo=new D;class wt extends Be{constructor(t=new an,e=new Sr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){eo.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],u=r[c];h!==0&&(Ta.fromBufferAttribute(u,t),o?eo.addScaledVector(Ta,h):eo.addScaledVector(Ta.sub(e),h))}e.add(eo)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),to.copy(n.boundingSphere),to.applyMatrix4(r),Fi.copy(t.ray).recast(t.near),!(to.containsPoint(Fi.origin)===!1&&(Fi.intersectSphere(to,Wl)===null||Fi.origin.distanceToSquared(Wl)>(t.far-t.near)**2))&&(Vl.copy(r).invert(),Fi.copy(t.ray).applyMatrix4(Vl),!(n.boundingBox!==null&&Fi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Fi)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],M=Math.max(m.start,f.start),v=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let w=M,U=v;w<U;w+=3){const T=a.getX(w),b=a.getX(w+1),F=a.getX(w+2);s=ao(this,p,t,n,l,h,u,T,b,F),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const M=a.getX(m),v=a.getX(m+1),w=a.getX(m+2);s=ao(this,o,t,n,l,h,u,M,v,w),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],M=Math.max(m.start,f.start),v=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let w=M,U=v;w<U;w+=3){const T=w,b=w+1,F=w+2;s=ao(this,p,t,n,l,h,u,T,b,F),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const M=m,v=m+1,w=m+2;s=ao(this,o,t,n,l,h,u,M,v,w),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function pp(i,t,e,n,s,r,o,a){let c;if(t.side===Qe?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===Ri,a),c===null)return null;oo.copy(a),oo.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(oo);return l<e.near||l>e.far?null:{distance:l,point:oo.clone(),object:i}}function ao(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,ds),i.getVertexPosition(c,fs),i.getVertexPosition(l,ps);const h=pp(i,t,e,n,ds,fs,ps,ro);if(h){s&&(no.fromBufferAttribute(s,a),io.fromBufferAttribute(s,c),so.fromBufferAttribute(s,l),h.uv=Sn.getInterpolation(ro,ds,fs,ps,no,io,so,new Mt)),r&&(no.fromBufferAttribute(r,a),io.fromBufferAttribute(r,c),so.fromBufferAttribute(r,l),h.uv1=Sn.getInterpolation(ro,ds,fs,ps,no,io,so,new Mt)),o&&(Xl.fromBufferAttribute(o,a),Zl.fromBufferAttribute(o,c),Yl.fromBufferAttribute(o,l),h.normal=Sn.getInterpolation(ro,ds,fs,ps,Xl,Zl,Yl,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:c,c:l,normal:new D,materialIndex:0};Sn.getNormal(ds,fs,ps,u.normal),h.face=u}return h}class Qt extends an{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Te(l,3)),this.setAttribute("normal",new Te(h,3)),this.setAttribute("uv",new Te(u,2));function g(_,m,p,M,v,w,U,T,b,F,E){const x=w/b,C=U/F,k=w/2,P=U/2,L=T/2,V=b+1,H=F+1;let Q=0,Y=0;const it=new D;for(let nt=0;nt<H;nt++){const ct=nt*C-P;for(let W=0;W<V;W++){const ot=W*x-k;it[_]=ot*M,it[m]=ct*v,it[p]=L,l.push(it.x,it.y,it.z),it[_]=0,it[m]=0,it[p]=T>0?1:-1,h.push(it.x,it.y,it.z),u.push(W/b),u.push(1-nt/F),Q+=1}}for(let nt=0;nt<F;nt++)for(let ct=0;ct<b;ct++){const W=d+ct+V*nt,ot=d+ct+V*(nt+1),B=d+(ct+1)+V*(nt+1),Z=d+(ct+1)+V*nt;c.push(W,ot,Z),c.push(ot,B,Z),Y+=6}a.addGroup(f,Y,E),f+=Y,d+=Q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qt(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function tr(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function $e(i){const t={};for(let e=0;e<i.length;e++){const n=tr(i[e]);for(const s in n)t[s]=n[s]}return t}function mp(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Tu(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ae.workingColorSpace}const gp={clone:tr,merge:$e};var _p=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Pi extends ir{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_p,this.fragmentShader=vp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=tr(t.uniforms),this.uniformsGroups=mp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Au extends Be{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _e,this.projectionMatrix=new _e,this.projectionMatrixInverse=new _e,this.coordinateSystem=ei}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ui=new D,ql=new Mt,$l=new Mt;class rn extends Au{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ec*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ca*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ec*2*Math.atan(Math.tan(ca*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ui.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ui.x,ui.y).multiplyScalar(-t/ui.z),ui.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ui.x,ui.y).multiplyScalar(-t/ui.z)}getViewSize(t,e){return this.getViewBounds(t,ql,$l),e.subVectors($l,ql)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ca*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ms=-90,gs=1;class xp extends Be{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new rn(ms,gs,t,e);s.layers=this.layers,this.add(s);const r=new rn(ms,gs,t,e);r.layers=this.layers,this.add(r);const o=new rn(ms,gs,t,e);o.layers=this.layers,this.add(o);const a=new rn(ms,gs,t,e);a.layers=this.layers,this.add(a);const c=new rn(ms,gs,t,e);c.layers=this.layers,this.add(c);const l=new rn(ms,gs,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===ei)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Po)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Ru extends Ke{constructor(t,e,n,s,r,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:$s,super(t,e,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class yp extends Qi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Ru(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Mn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Qt(5,5,5),r=new Pi({name:"CubemapFromEquirect",uniforms:tr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Qe,blending:wi});r.uniforms.tEquirect.value=e;const o=new wt(s,r),a=e.minFilter;return e.minFilter===Zi&&(e.minFilter=Mn),new xp(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const Aa=new D,Mp=new D,Sp=new Kt;class _i{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Aa.subVectors(n,e).cross(Mp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Aa),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Sp.getNormalMatrix(t),s=this.coplanarPoint(Aa).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Bi=new Ac,co=new D;class Cc{constructor(t=new _i,e=new _i,n=new _i,s=new _i,r=new _i,o=new _i){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ei){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],d=s[7],f=s[8],g=s[9],_=s[10],m=s[11],p=s[12],M=s[13],v=s[14],w=s[15];if(n[0].setComponents(c-r,d-l,m-f,w-p).normalize(),n[1].setComponents(c+r,d+l,m+f,w+p).normalize(),n[2].setComponents(c+o,d+h,m+g,w+M).normalize(),n[3].setComponents(c-o,d-h,m-g,w-M).normalize(),n[4].setComponents(c-a,d-u,m-_,w-v).normalize(),e===ei)n[5].setComponents(c+a,d+u,m+_,w+v).normalize();else if(e===Po)n[5].setComponents(a,u,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Bi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Bi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Bi)}intersectsSprite(t){return Bi.center.set(0,0,0),Bi.radius=.7071067811865476,Bi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Bi)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(co.x=s.normal.x>0?t.max.x:t.min.x,co.y=s.normal.y>0?t.max.y:t.min.y,co.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(co)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Cu(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Ep(i){const t=new WeakMap;function e(a,c){const l=a.array,h=a.usage,u=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){const h=c.array,u=c._updateRange,d=c.updateRanges;if(i.bindBuffer(l,a),u.count===-1&&d.length===0&&i.bufferSubData(l,0,h),d.length!==0){for(let f=0,g=d.length;f<g;f++){const _=d[f];i.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}u.count!==-1&&(i.bufferSubData(l,u.offset*h.BYTES_PER_ELEMENT,h,u.offset,u.count),u.count=-1),c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}class ii extends an{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=t/a,d=e/c,f=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const M=p*d-o;for(let v=0;v<l;v++){const w=v*u-r;g.push(w,-M,0),_.push(0,0,1),m.push(v/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let M=0;M<a;M++){const v=M+l*p,w=M+l*(p+1),U=M+1+l*(p+1),T=M+1+l*p;f.push(v,w,T),f.push(w,U,T)}this.setIndex(f),this.setAttribute("position",new Te(g,3)),this.setAttribute("normal",new Te(_,3)),this.setAttribute("uv",new Te(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ii(t.width,t.height,t.widthSegments,t.heightSegments)}}var wp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,bp=`#ifdef USE_ALPHAHASH
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
#endif`,Tp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ap=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Rp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Cp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Pp=`#ifdef USE_AOMAP
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
#endif`,Lp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ip=`#ifdef USE_BATCHING
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
#endif`,Dp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Np=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Up=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Op=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Fp=`#ifdef USE_IRIDESCENCE
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
#endif`,Bp=`#ifdef USE_BUMPMAP
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
#endif`,zp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,kp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Hp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Gp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Vp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Wp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Xp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Zp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Yp=`#define PI 3.141592653589793
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
} // validated`,qp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,$p=`vec3 transformedNormal = objectNormal;
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
#endif`,Kp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Jp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,jp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Qp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,tm="gl_FragColor = linearToOutputTexel( gl_FragColor );",em=`
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
}`,nm=`#ifdef USE_ENVMAP
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
#endif`,im=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,sm=`#ifdef USE_ENVMAP
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
#endif`,rm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,om=`#ifdef USE_ENVMAP
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
#endif`,am=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,cm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,lm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,hm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,um=`#ifdef USE_GRADIENTMAP
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
}`,dm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,fm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,pm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,mm=`uniform bool receiveShadow;
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
#endif`,gm=`#ifdef USE_ENVMAP
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
#endif`,_m=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,vm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,xm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ym=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Mm=`PhysicalMaterial material;
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
#endif`,Sm=`struct PhysicalMaterial {
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
}`,Em=`
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
#endif`,wm=`#if defined( RE_IndirectDiffuse )
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
#endif`,bm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Tm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Am=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Pm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Lm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Im=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Dm=`#if defined( USE_POINTS_UV )
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
#endif`,Nm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Um=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Om=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Fm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Bm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zm=`#ifdef USE_MORPHTARGETS
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
#endif`,km=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Gm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Vm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Zm=`#ifdef USE_NORMALMAP
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
#endif`,Ym=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,qm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$m=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Km=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Jm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,jm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Qm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,t0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,e0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,n0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,i0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,s0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,r0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,o0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,a0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,c0=`float getShadowMask() {
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
}`,l0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,h0=`#ifdef USE_SKINNING
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
#endif`,u0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,d0=`#ifdef USE_SKINNING
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
#endif`,f0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,p0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,m0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,g0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,_0=`#ifdef USE_TRANSMISSION
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
#endif`,v0=`#ifdef USE_TRANSMISSION
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
#endif`,x0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,y0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,M0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,S0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const E0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,w0=`uniform sampler2D t2D;
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
}`,b0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,T0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,A0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,R0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,C0=`#include <common>
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
}`,P0=`#if DEPTH_PACKING == 3200
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
}`,L0=`#define DISTANCE
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
}`,I0=`#define DISTANCE
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
}`,D0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,N0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,U0=`uniform float scale;
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
}`,O0=`uniform vec3 diffuse;
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
}`,F0=`#include <common>
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
}`,B0=`uniform vec3 diffuse;
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
}`,z0=`#define LAMBERT
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
}`,k0=`#define LAMBERT
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
}`,H0=`#define MATCAP
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
}`,G0=`#define MATCAP
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
}`,V0=`#define NORMAL
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
}`,W0=`#define NORMAL
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
}`,X0=`#define PHONG
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
}`,Z0=`#define PHONG
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
}`,Y0=`#define STANDARD
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
}`,q0=`#define STANDARD
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
}`,$0=`#define TOON
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
}`,K0=`#define TOON
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
}`,J0=`uniform float size;
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
}`,j0=`uniform vec3 diffuse;
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
}`,Q0=`#include <common>
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
}`,tg=`uniform vec3 color;
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
}`,eg=`uniform float rotation;
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
}`,ng=`uniform vec3 diffuse;
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
}`,$t={alphahash_fragment:wp,alphahash_pars_fragment:bp,alphamap_fragment:Tp,alphamap_pars_fragment:Ap,alphatest_fragment:Rp,alphatest_pars_fragment:Cp,aomap_fragment:Pp,aomap_pars_fragment:Lp,batching_pars_vertex:Ip,batching_vertex:Dp,begin_vertex:Np,beginnormal_vertex:Up,bsdfs:Op,iridescence_fragment:Fp,bumpmap_pars_fragment:Bp,clipping_planes_fragment:zp,clipping_planes_pars_fragment:kp,clipping_planes_pars_vertex:Hp,clipping_planes_vertex:Gp,color_fragment:Vp,color_pars_fragment:Wp,color_pars_vertex:Xp,color_vertex:Zp,common:Yp,cube_uv_reflection_fragment:qp,defaultnormal_vertex:$p,displacementmap_pars_vertex:Kp,displacementmap_vertex:Jp,emissivemap_fragment:jp,emissivemap_pars_fragment:Qp,colorspace_fragment:tm,colorspace_pars_fragment:em,envmap_fragment:nm,envmap_common_pars_fragment:im,envmap_pars_fragment:sm,envmap_pars_vertex:rm,envmap_physical_pars_fragment:gm,envmap_vertex:om,fog_vertex:am,fog_pars_vertex:cm,fog_fragment:lm,fog_pars_fragment:hm,gradientmap_pars_fragment:um,lightmap_pars_fragment:dm,lights_lambert_fragment:fm,lights_lambert_pars_fragment:pm,lights_pars_begin:mm,lights_toon_fragment:_m,lights_toon_pars_fragment:vm,lights_phong_fragment:xm,lights_phong_pars_fragment:ym,lights_physical_fragment:Mm,lights_physical_pars_fragment:Sm,lights_fragment_begin:Em,lights_fragment_maps:wm,lights_fragment_end:bm,logdepthbuf_fragment:Tm,logdepthbuf_pars_fragment:Am,logdepthbuf_pars_vertex:Rm,logdepthbuf_vertex:Cm,map_fragment:Pm,map_pars_fragment:Lm,map_particle_fragment:Im,map_particle_pars_fragment:Dm,metalnessmap_fragment:Nm,metalnessmap_pars_fragment:Um,morphinstance_vertex:Om,morphcolor_vertex:Fm,morphnormal_vertex:Bm,morphtarget_pars_vertex:zm,morphtarget_vertex:km,normal_fragment_begin:Hm,normal_fragment_maps:Gm,normal_pars_fragment:Vm,normal_pars_vertex:Wm,normal_vertex:Xm,normalmap_pars_fragment:Zm,clearcoat_normal_fragment_begin:Ym,clearcoat_normal_fragment_maps:qm,clearcoat_pars_fragment:$m,iridescence_pars_fragment:Km,opaque_fragment:Jm,packing:jm,premultiplied_alpha_fragment:Qm,project_vertex:t0,dithering_fragment:e0,dithering_pars_fragment:n0,roughnessmap_fragment:i0,roughnessmap_pars_fragment:s0,shadowmap_pars_fragment:r0,shadowmap_pars_vertex:o0,shadowmap_vertex:a0,shadowmask_pars_fragment:c0,skinbase_vertex:l0,skinning_pars_vertex:h0,skinning_vertex:u0,skinnormal_vertex:d0,specularmap_fragment:f0,specularmap_pars_fragment:p0,tonemapping_fragment:m0,tonemapping_pars_fragment:g0,transmission_fragment:_0,transmission_pars_fragment:v0,uv_pars_fragment:x0,uv_pars_vertex:y0,uv_vertex:M0,worldpos_vertex:S0,background_vert:E0,background_frag:w0,backgroundCube_vert:b0,backgroundCube_frag:T0,cube_vert:A0,cube_frag:R0,depth_vert:C0,depth_frag:P0,distanceRGBA_vert:L0,distanceRGBA_frag:I0,equirect_vert:D0,equirect_frag:N0,linedashed_vert:U0,linedashed_frag:O0,meshbasic_vert:F0,meshbasic_frag:B0,meshlambert_vert:z0,meshlambert_frag:k0,meshmatcap_vert:H0,meshmatcap_frag:G0,meshnormal_vert:V0,meshnormal_frag:W0,meshphong_vert:X0,meshphong_frag:Z0,meshphysical_vert:Y0,meshphysical_frag:q0,meshtoon_vert:$0,meshtoon_frag:K0,points_vert:J0,points_frag:j0,shadow_vert:Q0,shadow_frag:tg,sprite_vert:eg,sprite_frag:ng},xt={common:{diffuse:{value:new ee(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Kt}},envmap:{envMap:{value:null},envMapRotation:{value:new Kt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Kt},normalScale:{value:new Mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ee(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ee(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0},uvTransform:{value:new Kt}},sprite:{diffuse:{value:new ee(16777215)},opacity:{value:1},center:{value:new Mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}}},Pn={basic:{uniforms:$e([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.fog]),vertexShader:$t.meshbasic_vert,fragmentShader:$t.meshbasic_frag},lambert:{uniforms:$e([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new ee(0)}}]),vertexShader:$t.meshlambert_vert,fragmentShader:$t.meshlambert_frag},phong:{uniforms:$e([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new ee(0)},specular:{value:new ee(1118481)},shininess:{value:30}}]),vertexShader:$t.meshphong_vert,fragmentShader:$t.meshphong_frag},standard:{uniforms:$e([xt.common,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.roughnessmap,xt.metalnessmap,xt.fog,xt.lights,{emissive:{value:new ee(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag},toon:{uniforms:$e([xt.common,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.gradientmap,xt.fog,xt.lights,{emissive:{value:new ee(0)}}]),vertexShader:$t.meshtoon_vert,fragmentShader:$t.meshtoon_frag},matcap:{uniforms:$e([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,{matcap:{value:null}}]),vertexShader:$t.meshmatcap_vert,fragmentShader:$t.meshmatcap_frag},points:{uniforms:$e([xt.points,xt.fog]),vertexShader:$t.points_vert,fragmentShader:$t.points_frag},dashed:{uniforms:$e([xt.common,xt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$t.linedashed_vert,fragmentShader:$t.linedashed_frag},depth:{uniforms:$e([xt.common,xt.displacementmap]),vertexShader:$t.depth_vert,fragmentShader:$t.depth_frag},normal:{uniforms:$e([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,{opacity:{value:1}}]),vertexShader:$t.meshnormal_vert,fragmentShader:$t.meshnormal_frag},sprite:{uniforms:$e([xt.sprite,xt.fog]),vertexShader:$t.sprite_vert,fragmentShader:$t.sprite_frag},background:{uniforms:{uvTransform:{value:new Kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$t.background_vert,fragmentShader:$t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Kt}},vertexShader:$t.backgroundCube_vert,fragmentShader:$t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$t.cube_vert,fragmentShader:$t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$t.equirect_vert,fragmentShader:$t.equirect_frag},distanceRGBA:{uniforms:$e([xt.common,xt.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$t.distanceRGBA_vert,fragmentShader:$t.distanceRGBA_frag},shadow:{uniforms:$e([xt.lights,xt.fog,{color:{value:new ee(0)},opacity:{value:1}}]),vertexShader:$t.shadow_vert,fragmentShader:$t.shadow_frag}};Pn.physical={uniforms:$e([Pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Kt},clearcoatNormalScale:{value:new Mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Kt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Kt},sheen:{value:0},sheenColor:{value:new ee(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Kt},transmissionSamplerSize:{value:new Mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Kt},attenuationDistance:{value:0},attenuationColor:{value:new ee(0)},specularColor:{value:new ee(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Kt},anisotropyVector:{value:new Mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Kt}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag};const lo={r:0,b:0,g:0},zi=new Dn,ig=new _e;function sg(i,t,e,n,s,r,o){const a=new ee(0);let c=r===!0?0:1,l,h,u=null,d=0,f=null;function g(M){let v=M.isScene===!0?M.background:null;return v&&v.isTexture&&(v=(M.backgroundBlurriness>0?e:t).get(v)),v}function _(M){let v=!1;const w=g(M);w===null?p(a,c):w&&w.isColor&&(p(w,1),v=!0);const U=i.xr.getEnvironmentBlendMode();U==="additive"?n.buffers.color.setClear(0,0,0,1,o):U==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(M,v){const w=g(v);w&&(w.isCubeTexture||w.mapping===Ho)?(h===void 0&&(h=new wt(new Qt(1,1,1),new Pi({name:"BackgroundCubeMaterial",uniforms:tr(Pn.backgroundCube.uniforms),vertexShader:Pn.backgroundCube.vertexShader,fragmentShader:Pn.backgroundCube.fragmentShader,side:Qe,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(U,T,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),zi.copy(v.backgroundRotation),zi.x*=-1,zi.y*=-1,zi.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(zi.y*=-1,zi.z*=-1),h.material.uniforms.envMap.value=w,h.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(ig.makeRotationFromEuler(zi)),h.material.toneMapped=ae.getTransfer(w.colorSpace)!==ge,(u!==w||d!==w.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=w,d=w.version,f=i.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):w&&w.isTexture&&(l===void 0&&(l=new wt(new ii(2,2),new Pi({name:"BackgroundMaterial",uniforms:tr(Pn.background.uniforms),vertexShader:Pn.background.vertexShader,fragmentShader:Pn.background.fragmentShader,side:Ri,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=w,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=ae.getTransfer(w.colorSpace)!==ge,w.matrixAutoUpdate===!0&&w.updateMatrix(),l.material.uniforms.uvTransform.value.copy(w.matrix),(u!==w||d!==w.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=w,d=w.version,f=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function p(M,v){M.getRGB(lo,Tu(i)),n.buffers.color.setClear(lo.r,lo.g,lo.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(M,v=1){a.set(M),c=v,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(M){c=M,p(a,c)},render:_,addToRenderList:m}}function rg(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,o=!1;function a(x,C,k,P,L){let V=!1;const H=u(P,k,C);r!==H&&(r=H,l(r.object)),V=f(x,P,k,L),V&&g(x,P,k,L),L!==null&&t.update(L,i.ELEMENT_ARRAY_BUFFER),(V||o)&&(o=!1,w(x,C,k,P),L!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(L).buffer))}function c(){return i.createVertexArray()}function l(x){return i.bindVertexArray(x)}function h(x){return i.deleteVertexArray(x)}function u(x,C,k){const P=k.wireframe===!0;let L=n[x.id];L===void 0&&(L={},n[x.id]=L);let V=L[C.id];V===void 0&&(V={},L[C.id]=V);let H=V[P];return H===void 0&&(H=d(c()),V[P]=H),H}function d(x){const C=[],k=[],P=[];for(let L=0;L<e;L++)C[L]=0,k[L]=0,P[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:k,attributeDivisors:P,object:x,attributes:{},index:null}}function f(x,C,k,P){const L=r.attributes,V=C.attributes;let H=0;const Q=k.getAttributes();for(const Y in Q)if(Q[Y].location>=0){const nt=L[Y];let ct=V[Y];if(ct===void 0&&(Y==="instanceMatrix"&&x.instanceMatrix&&(ct=x.instanceMatrix),Y==="instanceColor"&&x.instanceColor&&(ct=x.instanceColor)),nt===void 0||nt.attribute!==ct||ct&&nt.data!==ct.data)return!0;H++}return r.attributesNum!==H||r.index!==P}function g(x,C,k,P){const L={},V=C.attributes;let H=0;const Q=k.getAttributes();for(const Y in Q)if(Q[Y].location>=0){let nt=V[Y];nt===void 0&&(Y==="instanceMatrix"&&x.instanceMatrix&&(nt=x.instanceMatrix),Y==="instanceColor"&&x.instanceColor&&(nt=x.instanceColor));const ct={};ct.attribute=nt,nt&&nt.data&&(ct.data=nt.data),L[Y]=ct,H++}r.attributes=L,r.attributesNum=H,r.index=P}function _(){const x=r.newAttributes;for(let C=0,k=x.length;C<k;C++)x[C]=0}function m(x){p(x,0)}function p(x,C){const k=r.newAttributes,P=r.enabledAttributes,L=r.attributeDivisors;k[x]=1,P[x]===0&&(i.enableVertexAttribArray(x),P[x]=1),L[x]!==C&&(i.vertexAttribDivisor(x,C),L[x]=C)}function M(){const x=r.newAttributes,C=r.enabledAttributes;for(let k=0,P=C.length;k<P;k++)C[k]!==x[k]&&(i.disableVertexAttribArray(k),C[k]=0)}function v(x,C,k,P,L,V,H){H===!0?i.vertexAttribIPointer(x,C,k,L,V):i.vertexAttribPointer(x,C,k,P,L,V)}function w(x,C,k,P){_();const L=P.attributes,V=k.getAttributes(),H=C.defaultAttributeValues;for(const Q in V){const Y=V[Q];if(Y.location>=0){let it=L[Q];if(it===void 0&&(Q==="instanceMatrix"&&x.instanceMatrix&&(it=x.instanceMatrix),Q==="instanceColor"&&x.instanceColor&&(it=x.instanceColor)),it!==void 0){const nt=it.normalized,ct=it.itemSize,W=t.get(it);if(W===void 0)continue;const ot=W.buffer,B=W.type,Z=W.bytesPerElement,J=B===i.INT||B===i.UNSIGNED_INT||it.gpuType===uu;if(it.isInterleavedBufferAttribute){const $=it.data,ut=$.stride,gt=it.offset;if($.isInstancedInterleavedBuffer){for(let At=0;At<Y.locationSize;At++)p(Y.location+At,$.meshPerAttribute);x.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let At=0;At<Y.locationSize;At++)m(Y.location+At);i.bindBuffer(i.ARRAY_BUFFER,ot);for(let At=0;At<Y.locationSize;At++)v(Y.location+At,ct/Y.locationSize,B,nt,ut*Z,(gt+ct/Y.locationSize*At)*Z,J)}else{if(it.isInstancedBufferAttribute){for(let $=0;$<Y.locationSize;$++)p(Y.location+$,it.meshPerAttribute);x.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let $=0;$<Y.locationSize;$++)m(Y.location+$);i.bindBuffer(i.ARRAY_BUFFER,ot);for(let $=0;$<Y.locationSize;$++)v(Y.location+$,ct/Y.locationSize,B,nt,ct*Z,ct/Y.locationSize*$*Z,J)}}else if(H!==void 0){const nt=H[Q];if(nt!==void 0)switch(nt.length){case 2:i.vertexAttrib2fv(Y.location,nt);break;case 3:i.vertexAttrib3fv(Y.location,nt);break;case 4:i.vertexAttrib4fv(Y.location,nt);break;default:i.vertexAttrib1fv(Y.location,nt)}}}}M()}function U(){F();for(const x in n){const C=n[x];for(const k in C){const P=C[k];for(const L in P)h(P[L].object),delete P[L];delete C[k]}delete n[x]}}function T(x){if(n[x.id]===void 0)return;const C=n[x.id];for(const k in C){const P=C[k];for(const L in P)h(P[L].object),delete P[L];delete C[k]}delete n[x.id]}function b(x){for(const C in n){const k=n[C];if(k[x.id]===void 0)continue;const P=k[x.id];for(const L in P)h(P[L].object),delete P[L];delete k[x.id]}}function F(){E(),o=!0,r!==s&&(r=s,l(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:F,resetDefaultState:E,dispose:U,releaseStatesOfGeometry:T,releaseStatesOfProgram:b,initAttributes:_,enableAttribute:m,disableUnusedAttributes:M}}function og(i,t,e){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function o(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function a(l,h,u){if(u===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let f=0;f<u;f++)this.render(l[f],h[f]);else{d.multiDrawArraysWEBGL(n,l,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];e.update(f,n,1)}}function c(l,h,u,d){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)o(l[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_];for(let _=0;_<d.length;_++)e.update(g,n,d[_])}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function ag(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(T){return!(T!==In&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const b=T===Go&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==Ci&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Ei&&!b)}function c(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=e.logarithmicDepthBuffer===!0,d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),p=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=f>0,U=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:f,maxTextureSize:g,maxCubemapSize:_,maxAttributes:m,maxVertexUniforms:p,maxVaryings:M,maxFragmentUniforms:v,vertexTextures:w,maxSamples:U}}function cg(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new _i,a=new Kt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{const M=r?0:n,v=M*4;let w=p.clippingState||null;c.value=w,w=h(g,d,v,f);for(let U=0;U!==v;++U)w[U]=e[U];p.clippingState=w,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const p=f+_*4,M=d.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let v=0,w=f;v!==_;++v,w+=4)o.copy(u[v]).applyMatrix4(M,a),o.normal.toArray(m,w),m[w+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function lg(i){let t=new WeakMap;function e(o,a){return a===Ka?o.mapping=$s:a===Ja&&(o.mapping=Ks),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ka||a===Ja)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new yp(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Pu extends Au{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Ps=4,Kl=[.125,.215,.35,.446,.526,.582],Vi=20,Ra=new Pu,Jl=new ee;let Ca=null,Pa=0,La=0,Ia=!1;const Hi=(1+Math.sqrt(5))/2,_s=1/Hi,jl=[new D(-Hi,_s,0),new D(Hi,_s,0),new D(-_s,0,Hi),new D(_s,0,Hi),new D(0,Hi,-_s),new D(0,Hi,_s),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)];class Ql{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Ca=this._renderer.getRenderTarget(),Pa=this._renderer.getActiveCubeFace(),La=this._renderer.getActiveMipmapLevel(),Ia=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=nh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=eh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ca,Pa,La),this._renderer.xr.enabled=Ia,t.scissorTest=!1,ho(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===$s||t.mapping===Ks?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ca=this._renderer.getRenderTarget(),Pa=this._renderer.getActiveCubeFace(),La=this._renderer.getActiveMipmapLevel(),Ia=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Mn,minFilter:Mn,generateMipmaps:!1,type:Go,format:In,colorSpace:Di,depthBuffer:!1},s=th(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=th(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=hg(r)),this._blurMaterial=ug(r,t,e)}return s}_compileMaterial(t){const e=new wt(this._lodPlanes[0],t);this._renderer.compile(e,Ra)}_sceneToCubeUV(t,e,n,s){const a=new rn(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Jl),h.toneMapping=bi,h.autoClear=!1;const f=new Sr({name:"PMREM.Background",side:Qe,depthWrite:!1,depthTest:!1}),g=new wt(new Qt,f);let _=!1;const m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,_=!0):(f.color.copy(Jl),_=!0);for(let p=0;p<6;p++){const M=p%3;M===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):M===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));const v=this._cubeSize;ho(s,M*v,p>2?v:0,v,v),h.setRenderTarget(s),_&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===$s||t.mapping===Ks;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=nh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=eh());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new wt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;ho(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,Ra)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=jl[(s-r-1)%jl.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new wt(this._lodPlanes[s],l),d=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Vi-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):Vi;m>Vi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Vi}`);const p=[];let M=0;for(let b=0;b<Vi;++b){const F=b/_,E=Math.exp(-F*F/2);p.push(E),b===0?M+=E:b<m&&(M+=2*E)}for(let b=0;b<p.length;b++)p[b]=p[b]/M;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:v}=this;d.dTheta.value=g,d.mipInt.value=v-n;const w=this._sizeLods[s],U=3*w*(s>v-Ps?s-v+Ps:0),T=4*(this._cubeSize-w);ho(e,U,T,3*w,2*w),c.setRenderTarget(e),c.render(u,Ra)}}function hg(i){const t=[],e=[],n=[];let s=i;const r=i-Ps+1+Kl.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let c=1/a;o>i-Ps?c=Kl[o-i+Ps-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,_=3,m=2,p=1,M=new Float32Array(_*g*f),v=new Float32Array(m*g*f),w=new Float32Array(p*g*f);for(let T=0;T<f;T++){const b=T%3*2/3-1,F=T>2?0:-1,E=[b,F,0,b+2/3,F,0,b+2/3,F+1,0,b,F,0,b+2/3,F+1,0,b,F+1,0];M.set(E,_*g*T),v.set(d,m*g*T);const x=[T,T,T,T,T,T];w.set(x,p*g*T)}const U=new an;U.setAttribute("position",new En(M,_)),U.setAttribute("uv",new En(v,m)),U.setAttribute("faceIndex",new En(w,p)),t.push(U),s>Ps&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function th(i,t,e){const n=new Qi(i,t,e);return n.texture.mapping=Ho,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ho(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function ug(i,t,e){const n=new Float32Array(Vi),s=new D(0,1,0);return new Pi({name:"SphericalGaussianBlur",defines:{n:Vi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Pc(),fragmentShader:`

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
		`,blending:wi,depthTest:!1,depthWrite:!1})}function eh(){return new Pi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Pc(),fragmentShader:`

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
		`,blending:wi,depthTest:!1,depthWrite:!1})}function nh(){return new Pi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Pc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:wi,depthTest:!1,depthWrite:!1})}function Pc(){return`

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
	`}function dg(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Ka||c===Ja,h=c===$s||c===Ks;if(l||h){let u=t.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Ql(i)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return l&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new Ql(i)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function fg(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Tc("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function pg(i,t,e,n){const s={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)t.remove(_[m])}d.removeEventListener("dispose",o),delete s[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function c(u){const d=u.attributes;for(const g in d)t.update(d[g],i.ARRAY_BUFFER);const f=u.morphAttributes;for(const g in f){const _=f[g];for(let m=0,p=_.length;m<p;m++)t.update(_[m],i.ARRAY_BUFFER)}}function l(u){const d=[],f=u.index,g=u.attributes.position;let _=0;if(f!==null){const M=f.array;_=f.version;for(let v=0,w=M.length;v<w;v+=3){const U=M[v+0],T=M[v+1],b=M[v+2];d.push(U,T,T,b,b,U)}}else if(g!==void 0){const M=g.array;_=g.version;for(let v=0,w=M.length/3-1;v<w;v+=3){const U=v+0,T=v+1,b=v+2;d.push(U,T,T,b,b,U)}}else return;const m=new(xu(d)?bu:wu)(d,1);m.version=_;const p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function mg(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,f){i.drawElements(n,f,r,d*o),e.update(f,n,1)}function l(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*o,g),e.update(f,n,g))}function h(d,f,g){if(g===0)return;const _=t.get("WEBGL_multi_draw");if(_===null)for(let m=0;m<g;m++)this.render(d[m]/o,f[m]);else{_.multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}}function u(d,f,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/o,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,_,0,g);let p=0;for(let M=0;M<g;M++)p+=f[M];for(let M=0;M<_.length;M++)e.update(p,n,_[M])}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function gg(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function _g(i,t,e){const n=new WeakMap,s=new Me;function r(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let x=function(){F.dispose(),n.delete(a),a.removeEventListener("dispose",x)};var f=x;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],M=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let w=0;g===!0&&(w=1),_===!0&&(w=2),m===!0&&(w=3);let U=a.attributes.position.count*w,T=1;U>t.maxTextureSize&&(T=Math.ceil(U/t.maxTextureSize),U=t.maxTextureSize);const b=new Float32Array(U*T*4*u),F=new Mu(b,U,T,u);F.type=Ei,F.needsUpdate=!0;const E=w*4;for(let C=0;C<u;C++){const k=p[C],P=M[C],L=v[C],V=U*T*4*C;for(let H=0;H<k.count;H++){const Q=H*E;g===!0&&(s.fromBufferAttribute(k,H),b[V+Q+0]=s.x,b[V+Q+1]=s.y,b[V+Q+2]=s.z,b[V+Q+3]=0),_===!0&&(s.fromBufferAttribute(P,H),b[V+Q+4]=s.x,b[V+Q+5]=s.y,b[V+Q+6]=s.z,b[V+Q+7]=0),m===!0&&(s.fromBufferAttribute(L,H),b[V+Q+8]=s.x,b[V+Q+9]=s.y,b[V+Q+10]=s.z,b[V+Q+11]=L.itemSize===4?s.w:1)}}d={count:u,texture:F,size:new Mt(U,T)},n.set(a,d),a.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const _=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function vg(i,t,e,n){let s=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}class Lu extends Ke{constructor(t,e,n,s,r,o,a,c,l,h=Fs){if(h!==Fs&&h!==Qs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Fs&&(n=Js),n===void 0&&h===Qs&&(n=js),super(null,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:pn,this.minFilter=c!==void 0?c:pn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Iu=new Ke,Du=new Lu(1,1);Du.compareFunction=vu;const Nu=new Mu,Uu=new sp,Ou=new Ru,ih=[],sh=[],rh=new Float32Array(16),oh=new Float32Array(9),ah=new Float32Array(4);function sr(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=ih[s];if(r===void 0&&(r=new Float32Array(s),ih[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Le(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ie(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Wo(i,t){let e=sh[t];e===void 0&&(e=new Int32Array(t),sh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function xg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function yg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;i.uniform2fv(this.addr,t),Ie(e,t)}}function Mg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Le(e,t))return;i.uniform3fv(this.addr,t),Ie(e,t)}}function Sg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;i.uniform4fv(this.addr,t),Ie(e,t)}}function Eg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Le(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ie(e,t)}else{if(Le(e,n))return;ah.set(n),i.uniformMatrix2fv(this.addr,!1,ah),Ie(e,n)}}function wg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Le(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ie(e,t)}else{if(Le(e,n))return;oh.set(n),i.uniformMatrix3fv(this.addr,!1,oh),Ie(e,n)}}function bg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Le(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ie(e,t)}else{if(Le(e,n))return;rh.set(n),i.uniformMatrix4fv(this.addr,!1,rh),Ie(e,n)}}function Tg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Ag(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;i.uniform2iv(this.addr,t),Ie(e,t)}}function Rg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Le(e,t))return;i.uniform3iv(this.addr,t),Ie(e,t)}}function Cg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;i.uniform4iv(this.addr,t),Ie(e,t)}}function Pg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Lg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;i.uniform2uiv(this.addr,t),Ie(e,t)}}function Ig(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Le(e,t))return;i.uniform3uiv(this.addr,t),Ie(e,t)}}function Dg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;i.uniform4uiv(this.addr,t),Ie(e,t)}}function Ng(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);const r=this.type===i.SAMPLER_2D_SHADOW?Du:Iu;e.setTexture2D(t||r,s)}function Ug(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Uu,s)}function Og(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Ou,s)}function Fg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Nu,s)}function Bg(i){switch(i){case 5126:return xg;case 35664:return yg;case 35665:return Mg;case 35666:return Sg;case 35674:return Eg;case 35675:return wg;case 35676:return bg;case 5124:case 35670:return Tg;case 35667:case 35671:return Ag;case 35668:case 35672:return Rg;case 35669:case 35673:return Cg;case 5125:return Pg;case 36294:return Lg;case 36295:return Ig;case 36296:return Dg;case 35678:case 36198:case 36298:case 36306:case 35682:return Ng;case 35679:case 36299:case 36307:return Ug;case 35680:case 36300:case 36308:case 36293:return Og;case 36289:case 36303:case 36311:case 36292:return Fg}}function zg(i,t){i.uniform1fv(this.addr,t)}function kg(i,t){const e=sr(t,this.size,2);i.uniform2fv(this.addr,e)}function Hg(i,t){const e=sr(t,this.size,3);i.uniform3fv(this.addr,e)}function Gg(i,t){const e=sr(t,this.size,4);i.uniform4fv(this.addr,e)}function Vg(i,t){const e=sr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Wg(i,t){const e=sr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Xg(i,t){const e=sr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Zg(i,t){i.uniform1iv(this.addr,t)}function Yg(i,t){i.uniform2iv(this.addr,t)}function qg(i,t){i.uniform3iv(this.addr,t)}function $g(i,t){i.uniform4iv(this.addr,t)}function Kg(i,t){i.uniform1uiv(this.addr,t)}function Jg(i,t){i.uniform2uiv(this.addr,t)}function jg(i,t){i.uniform3uiv(this.addr,t)}function Qg(i,t){i.uniform4uiv(this.addr,t)}function t_(i,t,e){const n=this.cache,s=t.length,r=Wo(e,s);Le(n,r)||(i.uniform1iv(this.addr,r),Ie(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Iu,r[o])}function e_(i,t,e){const n=this.cache,s=t.length,r=Wo(e,s);Le(n,r)||(i.uniform1iv(this.addr,r),Ie(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Uu,r[o])}function n_(i,t,e){const n=this.cache,s=t.length,r=Wo(e,s);Le(n,r)||(i.uniform1iv(this.addr,r),Ie(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Ou,r[o])}function i_(i,t,e){const n=this.cache,s=t.length,r=Wo(e,s);Le(n,r)||(i.uniform1iv(this.addr,r),Ie(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Nu,r[o])}function s_(i){switch(i){case 5126:return zg;case 35664:return kg;case 35665:return Hg;case 35666:return Gg;case 35674:return Vg;case 35675:return Wg;case 35676:return Xg;case 5124:case 35670:return Zg;case 35667:case 35671:return Yg;case 35668:case 35672:return qg;case 35669:case 35673:return $g;case 5125:return Kg;case 36294:return Jg;case 36295:return jg;case 36296:return Qg;case 35678:case 36198:case 36298:case 36306:case 35682:return t_;case 35679:case 36299:case 36307:return e_;case 35680:case 36300:case 36308:case 36293:return n_;case 36289:case 36303:case 36311:case 36292:return i_}}class r_{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Bg(e.type)}}class o_{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=s_(e.type)}}class a_{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const Da=/(\w+)(\])?(\[|\.)?/g;function ch(i,t){i.seq.push(t),i.map[t.id]=t}function c_(i,t,e){const n=i.name,s=n.length;for(Da.lastIndex=0;;){const r=Da.exec(n),o=Da.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){ch(e,l===void 0?new r_(a,i,t):new o_(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new a_(a),ch(e,u)),e=u}}}class Eo{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);c_(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function lh(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const l_=37297;let h_=0;function u_(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function d_(i){const t=ae.getPrimaries(ae.workingColorSpace),e=ae.getPrimaries(i);let n;switch(t===e?n="":t===Co&&e===Ro?n="LinearDisplayP3ToLinearSRGB":t===Ro&&e===Co&&(n="LinearSRGBToLinearDisplayP3"),i){case Di:case Vo:return[n,"LinearTransferOETF"];case Rn:case bc:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function hh(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+u_(i.getShaderSource(t),o)}else return s}function f_(i,t){const e=d_(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function p_(i,t){let e;switch(t){case Ef:e="Linear";break;case wf:e="Reinhard";break;case bf:e="OptimizedCineon";break;case lu:e="ACESFilmic";break;case Af:e="AgX";break;case Rf:e="Neutral";break;case Tf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function m_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(_r).join(`
`)}function g_(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function __(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function _r(i){return i!==""}function uh(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function dh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const v_=/^[ \t]*#include +<([\w\d./]+)>/gm;function nc(i){return i.replace(v_,y_)}const x_=new Map;function y_(i,t){let e=$t[t];if(e===void 0){const n=x_.get(t);if(n!==void 0)e=$t[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return nc(e)}const M_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fh(i){return i.replace(M_,S_)}function S_(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ph(i){let t=`precision ${i.precision} float;
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
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function E_(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===ou?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===au?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Zn&&(t="SHADOWMAP_TYPE_VSM"),t}function w_(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case $s:case Ks:t="ENVMAP_TYPE_CUBE";break;case Ho:t="ENVMAP_TYPE_CUBE_UV";break}return t}function b_(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ks:t="ENVMAP_MODE_REFRACTION";break}return t}function T_(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case cu:t="ENVMAP_BLENDING_MULTIPLY";break;case Mf:t="ENVMAP_BLENDING_MIX";break;case Sf:t="ENVMAP_BLENDING_ADD";break}return t}function A_(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function R_(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=E_(e),l=w_(e),h=b_(e),u=T_(e),d=A_(e),f=m_(e),g=g_(r),_=s.createProgram();let m,p,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(_r).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(_r).join(`
`),p.length>0&&(p+=`
`)):(m=[ph(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(_r).join(`
`),p=[ph(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==bi?"#define TONE_MAPPING":"",e.toneMapping!==bi?$t.tonemapping_pars_fragment:"",e.toneMapping!==bi?p_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",$t.colorspace_pars_fragment,f_("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(_r).join(`
`)),o=nc(o),o=uh(o,e),o=dh(o,e),a=nc(a),a=uh(a,e),a=dh(a,e),o=fh(o),a=fh(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Pl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Pl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const v=M+m+o,w=M+p+a,U=lh(s,s.VERTEX_SHADER,v),T=lh(s,s.FRAGMENT_SHADER,w);s.attachShader(_,U),s.attachShader(_,T),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function b(C){if(i.debug.checkShaderErrors){const k=s.getProgramInfoLog(_).trim(),P=s.getShaderInfoLog(U).trim(),L=s.getShaderInfoLog(T).trim();let V=!0,H=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(V=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,U,T);else{const Q=hh(s,U,"vertex"),Y=hh(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+k+`
`+Q+`
`+Y)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(P===""||L==="")&&(H=!1);H&&(C.diagnostics={runnable:V,programLog:k,vertexShader:{log:P,prefix:m},fragmentShader:{log:L,prefix:p}})}s.deleteShader(U),s.deleteShader(T),F=new Eo(s,_),E=__(s,_)}let F;this.getUniforms=function(){return F===void 0&&b(this),F};let E;this.getAttributes=function(){return E===void 0&&b(this),E};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=s.getProgramParameter(_,l_)),x},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=h_++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=U,this.fragmentShader=T,this}let C_=0;class P_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new L_(t),e.set(t,n)),n}}class L_{constructor(t){this.id=C_++,this.code=t,this.usedTimes=0}}function I_(i,t,e,n,s,r,o){const a=new Rc,c=new P_,l=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(E){return l.add(E),E===0?"uv":`uv${E}`}function m(E,x,C,k,P){const L=k.fog,V=P.geometry,H=E.isMeshStandardMaterial?k.environment:null,Q=(E.isMeshStandardMaterial?e:t).get(E.envMap||H),Y=Q&&Q.mapping===Ho?Q.image.height:null,it=g[E.type];E.precision!==null&&(f=s.getMaxPrecision(E.precision),f!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",f,"instead."));const nt=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,ct=nt!==void 0?nt.length:0;let W=0;V.morphAttributes.position!==void 0&&(W=1),V.morphAttributes.normal!==void 0&&(W=2),V.morphAttributes.color!==void 0&&(W=3);let ot,B,Z,J;if(it){const Ut=Pn[it];ot=Ut.vertexShader,B=Ut.fragmentShader}else ot=E.vertexShader,B=E.fragmentShader,c.update(E),Z=c.getVertexShaderID(E),J=c.getFragmentShaderID(E);const $=i.getRenderTarget(),ut=P.isInstancedMesh===!0,gt=P.isBatchedMesh===!0,At=!!E.map,N=!!E.matcap,Xt=!!Q,Ht=!!E.aoMap,ce=!!E.lightMap,Pt=!!E.bumpMap,ne=!!E.normalMap,Wt=!!E.displacementMap,Vt=!!E.emissiveMap,pe=!!E.metalnessMap,R=!!E.roughnessMap,y=E.anisotropy>0,j=E.clearcoat>0,st=E.dispersion>0,lt=E.iridescence>0,at=E.sheen>0,Ct=E.transmission>0,_t=y&&!!E.anisotropyMap,vt=j&&!!E.clearcoatMap,Zt=j&&!!E.clearcoatNormalMap,dt=j&&!!E.clearcoatRoughnessMap,Tt=lt&&!!E.iridescenceMap,qt=lt&&!!E.iridescenceThicknessMap,Nt=at&&!!E.sheenColorMap,yt=at&&!!E.sheenRoughnessMap,zt=!!E.specularMap,te=!!E.specularColorMap,ve=!!E.specularIntensityMap,O=Ct&&!!E.transmissionMap,St=Ct&&!!E.thicknessMap,tt=!!E.gradientMap,et=!!E.alphaMap,ft=E.alphaTest>0,G=!!E.alphaHash,rt=!!E.extensions;let pt=bi;E.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(pt=i.toneMapping);const Lt={shaderID:it,shaderType:E.type,shaderName:E.name,vertexShader:ot,fragmentShader:B,defines:E.defines,customVertexShaderID:Z,customFragmentShaderID:J,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:f,batching:gt,batchingColor:gt&&P._colorsTexture!==null,instancing:ut,instancingColor:ut&&P.instanceColor!==null,instancingMorph:ut&&P.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:$===null?i.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:Di,alphaToCoverage:!!E.alphaToCoverage,map:At,matcap:N,envMap:Xt,envMapMode:Xt&&Q.mapping,envMapCubeUVHeight:Y,aoMap:Ht,lightMap:ce,bumpMap:Pt,normalMap:ne,displacementMap:d&&Wt,emissiveMap:Vt,normalMapObjectSpace:ne&&E.normalMapType===Gf,normalMapTangentSpace:ne&&E.normalMapType===_u,metalnessMap:pe,roughnessMap:R,anisotropy:y,anisotropyMap:_t,clearcoat:j,clearcoatMap:vt,clearcoatNormalMap:Zt,clearcoatRoughnessMap:dt,dispersion:st,iridescence:lt,iridescenceMap:Tt,iridescenceThicknessMap:qt,sheen:at,sheenColorMap:Nt,sheenRoughnessMap:yt,specularMap:zt,specularColorMap:te,specularIntensityMap:ve,transmission:Ct,transmissionMap:O,thicknessMap:St,gradientMap:tt,opaque:E.transparent===!1&&E.blending===Os&&E.alphaToCoverage===!1,alphaMap:et,alphaTest:ft,alphaHash:G,combine:E.combine,mapUv:At&&_(E.map.channel),aoMapUv:Ht&&_(E.aoMap.channel),lightMapUv:ce&&_(E.lightMap.channel),bumpMapUv:Pt&&_(E.bumpMap.channel),normalMapUv:ne&&_(E.normalMap.channel),displacementMapUv:Wt&&_(E.displacementMap.channel),emissiveMapUv:Vt&&_(E.emissiveMap.channel),metalnessMapUv:pe&&_(E.metalnessMap.channel),roughnessMapUv:R&&_(E.roughnessMap.channel),anisotropyMapUv:_t&&_(E.anisotropyMap.channel),clearcoatMapUv:vt&&_(E.clearcoatMap.channel),clearcoatNormalMapUv:Zt&&_(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:dt&&_(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Tt&&_(E.iridescenceMap.channel),iridescenceThicknessMapUv:qt&&_(E.iridescenceThicknessMap.channel),sheenColorMapUv:Nt&&_(E.sheenColorMap.channel),sheenRoughnessMapUv:yt&&_(E.sheenRoughnessMap.channel),specularMapUv:zt&&_(E.specularMap.channel),specularColorMapUv:te&&_(E.specularColorMap.channel),specularIntensityMapUv:ve&&_(E.specularIntensityMap.channel),transmissionMapUv:O&&_(E.transmissionMap.channel),thicknessMapUv:St&&_(E.thicknessMap.channel),alphaMapUv:et&&_(E.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(ne||y),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!V.attributes.uv&&(At||et),fog:!!L,useFog:E.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:P.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:ct,morphTextureStride:W,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:pt,decodeVideoTexture:At&&E.map.isVideoTexture===!0&&ae.getTransfer(E.map.colorSpace)===ge,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===on,flipSided:E.side===Qe,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:rt&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:rt&&E.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Lt.vertexUv1s=l.has(1),Lt.vertexUv2s=l.has(2),Lt.vertexUv3s=l.has(3),l.clear(),Lt}function p(E){const x=[];if(E.shaderID?x.push(E.shaderID):(x.push(E.customVertexShaderID),x.push(E.customFragmentShaderID)),E.defines!==void 0)for(const C in E.defines)x.push(C),x.push(E.defines[C]);return E.isRawShaderMaterial===!1&&(M(x,E),v(x,E),x.push(i.outputColorSpace)),x.push(E.customProgramCacheKey),x.join()}function M(E,x){E.push(x.precision),E.push(x.outputColorSpace),E.push(x.envMapMode),E.push(x.envMapCubeUVHeight),E.push(x.mapUv),E.push(x.alphaMapUv),E.push(x.lightMapUv),E.push(x.aoMapUv),E.push(x.bumpMapUv),E.push(x.normalMapUv),E.push(x.displacementMapUv),E.push(x.emissiveMapUv),E.push(x.metalnessMapUv),E.push(x.roughnessMapUv),E.push(x.anisotropyMapUv),E.push(x.clearcoatMapUv),E.push(x.clearcoatNormalMapUv),E.push(x.clearcoatRoughnessMapUv),E.push(x.iridescenceMapUv),E.push(x.iridescenceThicknessMapUv),E.push(x.sheenColorMapUv),E.push(x.sheenRoughnessMapUv),E.push(x.specularMapUv),E.push(x.specularColorMapUv),E.push(x.specularIntensityMapUv),E.push(x.transmissionMapUv),E.push(x.thicknessMapUv),E.push(x.combine),E.push(x.fogExp2),E.push(x.sizeAttenuation),E.push(x.morphTargetsCount),E.push(x.morphAttributeCount),E.push(x.numDirLights),E.push(x.numPointLights),E.push(x.numSpotLights),E.push(x.numSpotLightMaps),E.push(x.numHemiLights),E.push(x.numRectAreaLights),E.push(x.numDirLightShadows),E.push(x.numPointLightShadows),E.push(x.numSpotLightShadows),E.push(x.numSpotLightShadowsWithMaps),E.push(x.numLightProbes),E.push(x.shadowMapType),E.push(x.toneMapping),E.push(x.numClippingPlanes),E.push(x.numClipIntersection),E.push(x.depthPacking)}function v(E,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),x.batchingColor&&a.enable(21),E.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.skinning&&a.enable(4),x.morphTargets&&a.enable(5),x.morphNormals&&a.enable(6),x.morphColors&&a.enable(7),x.premultipliedAlpha&&a.enable(8),x.shadowMapEnabled&&a.enable(9),x.doubleSided&&a.enable(10),x.flipSided&&a.enable(11),x.useDepthPacking&&a.enable(12),x.dithering&&a.enable(13),x.transmission&&a.enable(14),x.sheen&&a.enable(15),x.opaque&&a.enable(16),x.pointsUvs&&a.enable(17),x.decodeVideoTexture&&a.enable(18),x.alphaToCoverage&&a.enable(19),E.push(a.mask)}function w(E){const x=g[E.type];let C;if(x){const k=Pn[x];C=gp.clone(k.uniforms)}else C=E.uniforms;return C}function U(E,x){let C;for(let k=0,P=h.length;k<P;k++){const L=h[k];if(L.cacheKey===x){C=L,++C.usedTimes;break}}return C===void 0&&(C=new R_(i,x,E,r),h.push(C)),C}function T(E){if(--E.usedTimes===0){const x=h.indexOf(E);h[x]=h[h.length-1],h.pop(),E.destroy()}}function b(E){c.remove(E)}function F(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:w,acquireProgram:U,releaseProgram:T,releaseShaderCache:b,programs:h,dispose:F}}function D_(){let i=new WeakMap;function t(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function e(r){i.delete(r)}function n(r,o,a){i.get(r)[o]=a}function s(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:s}}function N_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function mh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function gh(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,d,f,g,_,m){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},i[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),t++,p}function a(u,d,f,g,_,m){const p=o(u,d,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function c(u,d,f,g,_,m){const p=o(u,d,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function l(u,d){e.length>1&&e.sort(u||N_),n.length>1&&n.sort(d||mh),s.length>1&&s.sort(d||mh)}function h(){for(let u=t,d=i.length;u<d;u++){const f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function U_(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new gh,i.set(n,[o])):s>=r.length?(o=new gh,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function O_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new D,color:new ee};break;case"SpotLight":e={position:new D,direction:new D,color:new ee,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new ee,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new ee,groundColor:new ee};break;case"RectAreaLight":e={color:new ee,position:new D,halfWidth:new D,halfHeight:new D};break}return i[t.id]=e,e}}}function F_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let B_=0;function z_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function k_(i){const t=new O_,e=F_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new D);const s=new D,r=new _e,o=new _e;function a(l){let h=0,u=0,d=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,M=0,v=0,w=0,U=0,T=0,b=0;l.sort(z_);for(let E=0,x=l.length;E<x;E++){const C=l[E],k=C.color,P=C.intensity,L=C.distance,V=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=k.r*P,u+=k.g*P,d+=k.b*P;else if(C.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(C.sh.coefficients[H],P);b++}else if(C.isDirectionalLight){const H=t.get(C);if(H.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const Q=C.shadow,Y=e.get(C);Y.shadowBias=Q.bias,Y.shadowNormalBias=Q.normalBias,Y.shadowRadius=Q.radius,Y.shadowMapSize=Q.mapSize,n.directionalShadow[f]=Y,n.directionalShadowMap[f]=V,n.directionalShadowMatrix[f]=C.shadow.matrix,M++}n.directional[f]=H,f++}else if(C.isSpotLight){const H=t.get(C);H.position.setFromMatrixPosition(C.matrixWorld),H.color.copy(k).multiplyScalar(P),H.distance=L,H.coneCos=Math.cos(C.angle),H.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),H.decay=C.decay,n.spot[_]=H;const Q=C.shadow;if(C.map&&(n.spotLightMap[U]=C.map,U++,Q.updateMatrices(C),C.castShadow&&T++),n.spotLightMatrix[_]=Q.matrix,C.castShadow){const Y=e.get(C);Y.shadowBias=Q.bias,Y.shadowNormalBias=Q.normalBias,Y.shadowRadius=Q.radius,Y.shadowMapSize=Q.mapSize,n.spotShadow[_]=Y,n.spotShadowMap[_]=V,w++}_++}else if(C.isRectAreaLight){const H=t.get(C);H.color.copy(k).multiplyScalar(P),H.halfWidth.set(C.width*.5,0,0),H.halfHeight.set(0,C.height*.5,0),n.rectArea[m]=H,m++}else if(C.isPointLight){const H=t.get(C);if(H.color.copy(C.color).multiplyScalar(C.intensity),H.distance=C.distance,H.decay=C.decay,C.castShadow){const Q=C.shadow,Y=e.get(C);Y.shadowBias=Q.bias,Y.shadowNormalBias=Q.normalBias,Y.shadowRadius=Q.radius,Y.shadowMapSize=Q.mapSize,Y.shadowCameraNear=Q.camera.near,Y.shadowCameraFar=Q.camera.far,n.pointShadow[g]=Y,n.pointShadowMap[g]=V,n.pointShadowMatrix[g]=C.shadow.matrix,v++}n.point[g]=H,g++}else if(C.isHemisphereLight){const H=t.get(C);H.skyColor.copy(C.color).multiplyScalar(P),H.groundColor.copy(C.groundColor).multiplyScalar(P),n.hemi[p]=H,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=xt.LTC_FLOAT_1,n.rectAreaLTC2=xt.LTC_FLOAT_2):(n.rectAreaLTC1=xt.LTC_HALF_1,n.rectAreaLTC2=xt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const F=n.hash;(F.directionalLength!==f||F.pointLength!==g||F.spotLength!==_||F.rectAreaLength!==m||F.hemiLength!==p||F.numDirectionalShadows!==M||F.numPointShadows!==v||F.numSpotShadows!==w||F.numSpotMaps!==U||F.numLightProbes!==b)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=w,n.spotShadowMap.length=w,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=w+U-T,n.spotLightMap.length=U,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=b,F.directionalLength=f,F.pointLength=g,F.spotLength=_,F.rectAreaLength=m,F.hemiLength=p,F.numDirectionalShadows=M,F.numPointShadows=v,F.numSpotShadows=w,F.numSpotMaps=U,F.numLightProbes=b,n.version=B_++)}function c(l,h){let u=0,d=0,f=0,g=0,_=0;const m=h.matrixWorldInverse;for(let p=0,M=l.length;p<M;p++){const v=l[p];if(v.isDirectionalLight){const w=n.directional[u];w.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(m),u++}else if(v.isSpotLight){const w=n.spot[f];w.position.setFromMatrixPosition(v.matrixWorld),w.position.applyMatrix4(m),w.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(m),f++}else if(v.isRectAreaLight){const w=n.rectArea[g];w.position.setFromMatrixPosition(v.matrixWorld),w.position.applyMatrix4(m),o.identity(),r.copy(v.matrixWorld),r.premultiply(m),o.extractRotation(r),w.halfWidth.set(v.width*.5,0,0),w.halfHeight.set(0,v.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),g++}else if(v.isPointLight){const w=n.point[d];w.position.setFromMatrixPosition(v.matrixWorld),w.position.applyMatrix4(m),d++}else if(v.isHemisphereLight){const w=n.hemi[_];w.direction.setFromMatrixPosition(v.matrixWorld),w.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:n}}function _h(i){const t=new k_(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function H_(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new _h(i),t.set(s,[a])):r>=o.length?(a=new _h(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class G_ extends ir{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=kf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class V_ extends ir{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const W_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,X_=`uniform sampler2D shadow_pass;
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
}`;function Z_(i,t,e){let n=new Cc;const s=new Mt,r=new Mt,o=new Me,a=new G_({depthPacking:Hf}),c=new V_,l={},h=e.maxTextureSize,u={[Ri]:Qe,[Qe]:Ri,[on]:on},d=new Pi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Mt},radius:{value:4}},vertexShader:W_,fragmentShader:X_}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new an;g.setAttribute("position",new En(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new wt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ou;let p=this.type;this.render=function(T,b,F){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const E=i.getRenderTarget(),x=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),k=i.state;k.setBlending(wi),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const P=p!==Zn&&this.type===Zn,L=p===Zn&&this.type!==Zn;for(let V=0,H=T.length;V<H;V++){const Q=T[V],Y=Q.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;s.copy(Y.mapSize);const it=Y.getFrameExtents();if(s.multiply(it),r.copy(Y.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/it.x),s.x=r.x*it.x,Y.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/it.y),s.y=r.y*it.y,Y.mapSize.y=r.y)),Y.map===null||P===!0||L===!0){const ct=this.type!==Zn?{minFilter:pn,magFilter:pn}:{};Y.map!==null&&Y.map.dispose(),Y.map=new Qi(s.x,s.y,ct),Y.map.texture.name=Q.name+".shadowMap",Y.camera.updateProjectionMatrix()}i.setRenderTarget(Y.map),i.clear();const nt=Y.getViewportCount();for(let ct=0;ct<nt;ct++){const W=Y.getViewport(ct);o.set(r.x*W.x,r.y*W.y,r.x*W.z,r.y*W.w),k.viewport(o),Y.updateMatrices(Q,ct),n=Y.getFrustum(),w(b,F,Y.camera,Q,this.type)}Y.isPointLightShadow!==!0&&this.type===Zn&&M(Y,F),Y.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(E,x,C)};function M(T,b){const F=t.update(_);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Qi(s.x,s.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(b,null,F,d,_,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(b,null,F,f,_,null)}function v(T,b,F,E){let x=null;const C=F.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(C!==void 0)x=C;else if(x=F.isPointLight===!0?c:a,i.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const k=x.uuid,P=b.uuid;let L=l[k];L===void 0&&(L={},l[k]=L);let V=L[P];V===void 0&&(V=x.clone(),L[P]=V,b.addEventListener("dispose",U)),x=V}if(x.visible=b.visible,x.wireframe=b.wireframe,E===Zn?x.side=b.shadowSide!==null?b.shadowSide:b.side:x.side=b.shadowSide!==null?b.shadowSide:u[b.side],x.alphaMap=b.alphaMap,x.alphaTest=b.alphaTest,x.map=b.map,x.clipShadows=b.clipShadows,x.clippingPlanes=b.clippingPlanes,x.clipIntersection=b.clipIntersection,x.displacementMap=b.displacementMap,x.displacementScale=b.displacementScale,x.displacementBias=b.displacementBias,x.wireframeLinewidth=b.wireframeLinewidth,x.linewidth=b.linewidth,F.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const k=i.properties.get(x);k.light=F}return x}function w(T,b,F,E,x){if(T.visible===!1)return;if(T.layers.test(b.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&x===Zn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,T.matrixWorld);const P=t.update(T),L=T.material;if(Array.isArray(L)){const V=P.groups;for(let H=0,Q=V.length;H<Q;H++){const Y=V[H],it=L[Y.materialIndex];if(it&&it.visible){const nt=v(T,it,E,x);T.onBeforeShadow(i,T,b,F,P,nt,Y),i.renderBufferDirect(F,null,P,nt,T,Y),T.onAfterShadow(i,T,b,F,P,nt,Y)}}}else if(L.visible){const V=v(T,L,E,x);T.onBeforeShadow(i,T,b,F,P,V,null),i.renderBufferDirect(F,null,P,V,T,null),T.onAfterShadow(i,T,b,F,P,V,null)}}const k=T.children;for(let P=0,L=k.length;P<L;P++)w(k[P],b,F,E,x)}function U(T){T.target.removeEventListener("dispose",U);for(const F in l){const E=l[F],x=T.target.uuid;x in E&&(E[x].dispose(),delete E[x])}}}function Y_(i){function t(){let O=!1;const St=new Me;let tt=null;const et=new Me(0,0,0,0);return{setMask:function(ft){tt!==ft&&!O&&(i.colorMask(ft,ft,ft,ft),tt=ft)},setLocked:function(ft){O=ft},setClear:function(ft,G,rt,pt,Lt){Lt===!0&&(ft*=pt,G*=pt,rt*=pt),St.set(ft,G,rt,pt),et.equals(St)===!1&&(i.clearColor(ft,G,rt,pt),et.copy(St))},reset:function(){O=!1,tt=null,et.set(-1,0,0,0)}}}function e(){let O=!1,St=null,tt=null,et=null;return{setTest:function(ft){ft?J(i.DEPTH_TEST):$(i.DEPTH_TEST)},setMask:function(ft){St!==ft&&!O&&(i.depthMask(ft),St=ft)},setFunc:function(ft){if(tt!==ft){switch(ft){case pf:i.depthFunc(i.NEVER);break;case mf:i.depthFunc(i.ALWAYS);break;case gf:i.depthFunc(i.LESS);break;case bo:i.depthFunc(i.LEQUAL);break;case _f:i.depthFunc(i.EQUAL);break;case vf:i.depthFunc(i.GEQUAL);break;case xf:i.depthFunc(i.GREATER);break;case yf:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}tt=ft}},setLocked:function(ft){O=ft},setClear:function(ft){et!==ft&&(i.clearDepth(ft),et=ft)},reset:function(){O=!1,St=null,tt=null,et=null}}}function n(){let O=!1,St=null,tt=null,et=null,ft=null,G=null,rt=null,pt=null,Lt=null;return{setTest:function(Ut){O||(Ut?J(i.STENCIL_TEST):$(i.STENCIL_TEST))},setMask:function(Ut){St!==Ut&&!O&&(i.stencilMask(Ut),St=Ut)},setFunc:function(Ut,fe,xe){(tt!==Ut||et!==fe||ft!==xe)&&(i.stencilFunc(Ut,fe,xe),tt=Ut,et=fe,ft=xe)},setOp:function(Ut,fe,xe){(G!==Ut||rt!==fe||pt!==xe)&&(i.stencilOp(Ut,fe,xe),G=Ut,rt=fe,pt=xe)},setLocked:function(Ut){O=Ut},setClear:function(Ut){Lt!==Ut&&(i.clearStencil(Ut),Lt=Ut)},reset:function(){O=!1,St=null,tt=null,et=null,ft=null,G=null,rt=null,pt=null,Lt=null}}}const s=new t,r=new e,o=new n,a=new WeakMap,c=new WeakMap;let l={},h={},u=new WeakMap,d=[],f=null,g=!1,_=null,m=null,p=null,M=null,v=null,w=null,U=null,T=new ee(0,0,0),b=0,F=!1,E=null,x=null,C=null,k=null,P=null;const L=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,H=0;const Q=i.getParameter(i.VERSION);Q.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(Q)[1]),V=H>=1):Q.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),V=H>=2);let Y=null,it={};const nt=i.getParameter(i.SCISSOR_BOX),ct=i.getParameter(i.VIEWPORT),W=new Me().fromArray(nt),ot=new Me().fromArray(ct);function B(O,St,tt,et){const ft=new Uint8Array(4),G=i.createTexture();i.bindTexture(O,G),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let rt=0;rt<tt;rt++)O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY?i.texImage3D(St,0,i.RGBA,1,1,et,0,i.RGBA,i.UNSIGNED_BYTE,ft):i.texImage2D(St+rt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ft);return G}const Z={};Z[i.TEXTURE_2D]=B(i.TEXTURE_2D,i.TEXTURE_2D,1),Z[i.TEXTURE_CUBE_MAP]=B(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[i.TEXTURE_2D_ARRAY]=B(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Z[i.TEXTURE_3D]=B(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),J(i.DEPTH_TEST),r.setFunc(bo),Pt(!1),ne(Qc),J(i.CULL_FACE),Ht(wi);function J(O){l[O]!==!0&&(i.enable(O),l[O]=!0)}function $(O){l[O]!==!1&&(i.disable(O),l[O]=!1)}function ut(O,St){return h[O]!==St?(i.bindFramebuffer(O,St),h[O]=St,O===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=St),O===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=St),!0):!1}function gt(O,St){let tt=d,et=!1;if(O){tt=u.get(St),tt===void 0&&(tt=[],u.set(St,tt));const ft=O.textures;if(tt.length!==ft.length||tt[0]!==i.COLOR_ATTACHMENT0){for(let G=0,rt=ft.length;G<rt;G++)tt[G]=i.COLOR_ATTACHMENT0+G;tt.length=ft.length,et=!0}}else tt[0]!==i.BACK&&(tt[0]=i.BACK,et=!0);et&&i.drawBuffers(tt)}function At(O){return f!==O?(i.useProgram(O),f=O,!0):!1}const N={[Gi]:i.FUNC_ADD,[Kd]:i.FUNC_SUBTRACT,[Jd]:i.FUNC_REVERSE_SUBTRACT};N[jd]=i.MIN,N[Qd]=i.MAX;const Xt={[tf]:i.ZERO,[ef]:i.ONE,[nf]:i.SRC_COLOR,[qa]:i.SRC_ALPHA,[lf]:i.SRC_ALPHA_SATURATE,[af]:i.DST_COLOR,[rf]:i.DST_ALPHA,[sf]:i.ONE_MINUS_SRC_COLOR,[$a]:i.ONE_MINUS_SRC_ALPHA,[cf]:i.ONE_MINUS_DST_COLOR,[of]:i.ONE_MINUS_DST_ALPHA,[hf]:i.CONSTANT_COLOR,[uf]:i.ONE_MINUS_CONSTANT_COLOR,[df]:i.CONSTANT_ALPHA,[ff]:i.ONE_MINUS_CONSTANT_ALPHA};function Ht(O,St,tt,et,ft,G,rt,pt,Lt,Ut){if(O===wi){g===!0&&($(i.BLEND),g=!1);return}if(g===!1&&(J(i.BLEND),g=!0),O!==$d){if(O!==_||Ut!==F){if((m!==Gi||v!==Gi)&&(i.blendEquation(i.FUNC_ADD),m=Gi,v=Gi),Ut)switch(O){case Os:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case tl:i.blendFunc(i.ONE,i.ONE);break;case el:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case nl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Os:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case tl:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case el:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case nl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}p=null,M=null,w=null,U=null,T.set(0,0,0),b=0,_=O,F=Ut}return}ft=ft||St,G=G||tt,rt=rt||et,(St!==m||ft!==v)&&(i.blendEquationSeparate(N[St],N[ft]),m=St,v=ft),(tt!==p||et!==M||G!==w||rt!==U)&&(i.blendFuncSeparate(Xt[tt],Xt[et],Xt[G],Xt[rt]),p=tt,M=et,w=G,U=rt),(pt.equals(T)===!1||Lt!==b)&&(i.blendColor(pt.r,pt.g,pt.b,Lt),T.copy(pt),b=Lt),_=O,F=!1}function ce(O,St){O.side===on?$(i.CULL_FACE):J(i.CULL_FACE);let tt=O.side===Qe;St&&(tt=!tt),Pt(tt),O.blending===Os&&O.transparent===!1?Ht(wi):Ht(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),r.setFunc(O.depthFunc),r.setTest(O.depthTest),r.setMask(O.depthWrite),s.setMask(O.colorWrite);const et=O.stencilWrite;o.setTest(et),et&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Vt(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?J(i.SAMPLE_ALPHA_TO_COVERAGE):$(i.SAMPLE_ALPHA_TO_COVERAGE)}function Pt(O){E!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),E=O)}function ne(O){O!==Yd?(J(i.CULL_FACE),O!==x&&(O===Qc?i.cullFace(i.BACK):O===qd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):$(i.CULL_FACE),x=O}function Wt(O){O!==C&&(V&&i.lineWidth(O),C=O)}function Vt(O,St,tt){O?(J(i.POLYGON_OFFSET_FILL),(k!==St||P!==tt)&&(i.polygonOffset(St,tt),k=St,P=tt)):$(i.POLYGON_OFFSET_FILL)}function pe(O){O?J(i.SCISSOR_TEST):$(i.SCISSOR_TEST)}function R(O){O===void 0&&(O=i.TEXTURE0+L-1),Y!==O&&(i.activeTexture(O),Y=O)}function y(O,St,tt){tt===void 0&&(Y===null?tt=i.TEXTURE0+L-1:tt=Y);let et=it[tt];et===void 0&&(et={type:void 0,texture:void 0},it[tt]=et),(et.type!==O||et.texture!==St)&&(Y!==tt&&(i.activeTexture(tt),Y=tt),i.bindTexture(O,St||Z[O]),et.type=O,et.texture=St)}function j(){const O=it[Y];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function st(){try{i.compressedTexImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function lt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function at(){try{i.texSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ct(){try{i.texSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function _t(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function vt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Zt(){try{i.texStorage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function dt(){try{i.texStorage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Tt(){try{i.texImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function qt(){try{i.texImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Nt(O){W.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),W.copy(O))}function yt(O){ot.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),ot.copy(O))}function zt(O,St){let tt=c.get(St);tt===void 0&&(tt=new WeakMap,c.set(St,tt));let et=tt.get(O);et===void 0&&(et=i.getUniformBlockIndex(St,O.name),tt.set(O,et))}function te(O,St){const et=c.get(St).get(O);a.get(St)!==et&&(i.uniformBlockBinding(St,et,O.__bindingPointIndex),a.set(St,et))}function ve(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),l={},Y=null,it={},h={},u=new WeakMap,d=[],f=null,g=!1,_=null,m=null,p=null,M=null,v=null,w=null,U=null,T=new ee(0,0,0),b=0,F=!1,E=null,x=null,C=null,k=null,P=null,W.set(0,0,i.canvas.width,i.canvas.height),ot.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:J,disable:$,bindFramebuffer:ut,drawBuffers:gt,useProgram:At,setBlending:Ht,setMaterial:ce,setFlipSided:Pt,setCullFace:ne,setLineWidth:Wt,setPolygonOffset:Vt,setScissorTest:pe,activeTexture:R,bindTexture:y,unbindTexture:j,compressedTexImage2D:st,compressedTexImage3D:lt,texImage2D:Tt,texImage3D:qt,updateUBOMapping:zt,uniformBlockBinding:te,texStorage2D:Zt,texStorage3D:dt,texSubImage2D:at,texSubImage3D:Ct,compressedTexSubImage2D:_t,compressedTexSubImage3D:vt,scissor:Nt,viewport:yt,reset:ve}}function q_(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Mt,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,y){return f?new OffscreenCanvas(R,y):Lo("canvas")}function _(R,y,j){let st=1;const lt=pe(R);if((lt.width>j||lt.height>j)&&(st=j/Math.max(lt.width,lt.height)),st<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const at=Math.floor(st*lt.width),Ct=Math.floor(st*lt.height);u===void 0&&(u=g(at,Ct));const _t=y?g(at,Ct):u;return _t.width=at,_t.height=Ct,_t.getContext("2d").drawImage(R,0,0,at,Ct),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+lt.width+"x"+lt.height+") to ("+at+"x"+Ct+")."),_t}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+lt.width+"x"+lt.height+")."),R;return R}function m(R){return R.generateMipmaps&&R.minFilter!==pn&&R.minFilter!==Mn}function p(R){i.generateMipmap(R)}function M(R,y,j,st,lt=!1){if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let at=y;if(y===i.RED&&(j===i.FLOAT&&(at=i.R32F),j===i.HALF_FLOAT&&(at=i.R16F),j===i.UNSIGNED_BYTE&&(at=i.R8)),y===i.RED_INTEGER&&(j===i.UNSIGNED_BYTE&&(at=i.R8UI),j===i.UNSIGNED_SHORT&&(at=i.R16UI),j===i.UNSIGNED_INT&&(at=i.R32UI),j===i.BYTE&&(at=i.R8I),j===i.SHORT&&(at=i.R16I),j===i.INT&&(at=i.R32I)),y===i.RG&&(j===i.FLOAT&&(at=i.RG32F),j===i.HALF_FLOAT&&(at=i.RG16F),j===i.UNSIGNED_BYTE&&(at=i.RG8)),y===i.RG_INTEGER&&(j===i.UNSIGNED_BYTE&&(at=i.RG8UI),j===i.UNSIGNED_SHORT&&(at=i.RG16UI),j===i.UNSIGNED_INT&&(at=i.RG32UI),j===i.BYTE&&(at=i.RG8I),j===i.SHORT&&(at=i.RG16I),j===i.INT&&(at=i.RG32I)),y===i.RGB&&j===i.UNSIGNED_INT_5_9_9_9_REV&&(at=i.RGB9_E5),y===i.RGBA){const Ct=lt?Ao:ae.getTransfer(st);j===i.FLOAT&&(at=i.RGBA32F),j===i.HALF_FLOAT&&(at=i.RGBA16F),j===i.UNSIGNED_BYTE&&(at=Ct===ge?i.SRGB8_ALPHA8:i.RGBA8),j===i.UNSIGNED_SHORT_4_4_4_4&&(at=i.RGBA4),j===i.UNSIGNED_SHORT_5_5_5_1&&(at=i.RGB5_A1)}return(at===i.R16F||at===i.R32F||at===i.RG16F||at===i.RG32F||at===i.RGBA16F||at===i.RGBA32F)&&t.get("EXT_color_buffer_float"),at}function v(R,y){let j;return R?y===null||y===Js||y===js?j=i.DEPTH24_STENCIL8:y===Ei?j=i.DEPTH32F_STENCIL8:y===To&&(j=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Js||y===js?j=i.DEPTH_COMPONENT24:y===Ei?j=i.DEPTH_COMPONENT32F:y===To&&(j=i.DEPTH_COMPONENT16),j}function w(R,y){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==pn&&R.minFilter!==Mn?Math.log2(Math.max(y.width,y.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?y.mipmaps.length:1}function U(R){const y=R.target;y.removeEventListener("dispose",U),b(y),y.isVideoTexture&&h.delete(y)}function T(R){const y=R.target;y.removeEventListener("dispose",T),E(y)}function b(R){const y=n.get(R);if(y.__webglInit===void 0)return;const j=R.source,st=d.get(j);if(st){const lt=st[y.__cacheKey];lt.usedTimes--,lt.usedTimes===0&&F(R),Object.keys(st).length===0&&d.delete(j)}n.remove(R)}function F(R){const y=n.get(R);i.deleteTexture(y.__webglTexture);const j=R.source,st=d.get(j);delete st[y.__cacheKey],o.memory.textures--}function E(R){const y=n.get(R);if(R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let st=0;st<6;st++){if(Array.isArray(y.__webglFramebuffer[st]))for(let lt=0;lt<y.__webglFramebuffer[st].length;lt++)i.deleteFramebuffer(y.__webglFramebuffer[st][lt]);else i.deleteFramebuffer(y.__webglFramebuffer[st]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[st])}else{if(Array.isArray(y.__webglFramebuffer))for(let st=0;st<y.__webglFramebuffer.length;st++)i.deleteFramebuffer(y.__webglFramebuffer[st]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let st=0;st<y.__webglColorRenderbuffer.length;st++)y.__webglColorRenderbuffer[st]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[st]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const j=R.textures;for(let st=0,lt=j.length;st<lt;st++){const at=n.get(j[st]);at.__webglTexture&&(i.deleteTexture(at.__webglTexture),o.memory.textures--),n.remove(j[st])}n.remove(R)}let x=0;function C(){x=0}function k(){const R=x;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),x+=1,R}function P(R){const y=[];return y.push(R.wrapS),y.push(R.wrapT),y.push(R.wrapR||0),y.push(R.magFilter),y.push(R.minFilter),y.push(R.anisotropy),y.push(R.internalFormat),y.push(R.format),y.push(R.type),y.push(R.generateMipmaps),y.push(R.premultiplyAlpha),y.push(R.flipY),y.push(R.unpackAlignment),y.push(R.colorSpace),y.join()}function L(R,y){const j=n.get(R);if(R.isVideoTexture&&Wt(R),R.isRenderTargetTexture===!1&&R.version>0&&j.__version!==R.version){const st=R.image;if(st===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(st.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ot(j,R,y);return}}e.bindTexture(i.TEXTURE_2D,j.__webglTexture,i.TEXTURE0+y)}function V(R,y){const j=n.get(R);if(R.version>0&&j.__version!==R.version){ot(j,R,y);return}e.bindTexture(i.TEXTURE_2D_ARRAY,j.__webglTexture,i.TEXTURE0+y)}function H(R,y){const j=n.get(R);if(R.version>0&&j.__version!==R.version){ot(j,R,y);return}e.bindTexture(i.TEXTURE_3D,j.__webglTexture,i.TEXTURE0+y)}function Q(R,y){const j=n.get(R);if(R.version>0&&j.__version!==R.version){B(j,R,y);return}e.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture,i.TEXTURE0+y)}const Y={[ja]:i.REPEAT,[Xi]:i.CLAMP_TO_EDGE,[Qa]:i.MIRRORED_REPEAT},it={[pn]:i.NEAREST,[Cf]:i.NEAREST_MIPMAP_NEAREST,[Vr]:i.NEAREST_MIPMAP_LINEAR,[Mn]:i.LINEAR,[na]:i.LINEAR_MIPMAP_NEAREST,[Zi]:i.LINEAR_MIPMAP_LINEAR},nt={[Vf]:i.NEVER,[$f]:i.ALWAYS,[Wf]:i.LESS,[vu]:i.LEQUAL,[Xf]:i.EQUAL,[qf]:i.GEQUAL,[Zf]:i.GREATER,[Yf]:i.NOTEQUAL};function ct(R,y){if(y.type===Ei&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===Mn||y.magFilter===na||y.magFilter===Vr||y.magFilter===Zi||y.minFilter===Mn||y.minFilter===na||y.minFilter===Vr||y.minFilter===Zi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,Y[y.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,Y[y.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,Y[y.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,it[y.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,it[y.minFilter]),y.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,nt[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===pn||y.minFilter!==Vr&&y.minFilter!==Zi||y.type===Ei&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const j=t.get("EXT_texture_filter_anisotropic");i.texParameterf(R,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function W(R,y){let j=!1;R.__webglInit===void 0&&(R.__webglInit=!0,y.addEventListener("dispose",U));const st=y.source;let lt=d.get(st);lt===void 0&&(lt={},d.set(st,lt));const at=P(y);if(at!==R.__cacheKey){lt[at]===void 0&&(lt[at]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,j=!0),lt[at].usedTimes++;const Ct=lt[R.__cacheKey];Ct!==void 0&&(lt[R.__cacheKey].usedTimes--,Ct.usedTimes===0&&F(y)),R.__cacheKey=at,R.__webglTexture=lt[at].texture}return j}function ot(R,y,j){let st=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(st=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(st=i.TEXTURE_3D);const lt=W(R,y),at=y.source;e.bindTexture(st,R.__webglTexture,i.TEXTURE0+j);const Ct=n.get(at);if(at.version!==Ct.__version||lt===!0){e.activeTexture(i.TEXTURE0+j);const _t=ae.getPrimaries(ae.workingColorSpace),vt=y.colorSpace===vi?null:ae.getPrimaries(y.colorSpace),Zt=y.colorSpace===vi||_t===vt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Zt);let dt=_(y.image,!1,s.maxTextureSize);dt=Vt(y,dt);const Tt=r.convert(y.format,y.colorSpace),qt=r.convert(y.type);let Nt=M(y.internalFormat,Tt,qt,y.colorSpace,y.isVideoTexture);ct(st,y);let yt;const zt=y.mipmaps,te=y.isVideoTexture!==!0,ve=Ct.__version===void 0||lt===!0,O=at.dataReady,St=w(y,dt);if(y.isDepthTexture)Nt=v(y.format===Qs,y.type),ve&&(te?e.texStorage2D(i.TEXTURE_2D,1,Nt,dt.width,dt.height):e.texImage2D(i.TEXTURE_2D,0,Nt,dt.width,dt.height,0,Tt,qt,null));else if(y.isDataTexture)if(zt.length>0){te&&ve&&e.texStorage2D(i.TEXTURE_2D,St,Nt,zt[0].width,zt[0].height);for(let tt=0,et=zt.length;tt<et;tt++)yt=zt[tt],te?O&&e.texSubImage2D(i.TEXTURE_2D,tt,0,0,yt.width,yt.height,Tt,qt,yt.data):e.texImage2D(i.TEXTURE_2D,tt,Nt,yt.width,yt.height,0,Tt,qt,yt.data);y.generateMipmaps=!1}else te?(ve&&e.texStorage2D(i.TEXTURE_2D,St,Nt,dt.width,dt.height),O&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,dt.width,dt.height,Tt,qt,dt.data)):e.texImage2D(i.TEXTURE_2D,0,Nt,dt.width,dt.height,0,Tt,qt,dt.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){te&&ve&&e.texStorage3D(i.TEXTURE_2D_ARRAY,St,Nt,zt[0].width,zt[0].height,dt.depth);for(let tt=0,et=zt.length;tt<et;tt++)if(yt=zt[tt],y.format!==In)if(Tt!==null)if(te){if(O)if(y.layerUpdates.size>0){for(const ft of y.layerUpdates){const G=yt.width*yt.height;e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,tt,0,0,ft,yt.width,yt.height,1,Tt,yt.data.slice(G*ft,G*(ft+1)),0,0)}y.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,tt,0,0,0,yt.width,yt.height,dt.depth,Tt,yt.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,tt,Nt,yt.width,yt.height,dt.depth,0,yt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else te?O&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,tt,0,0,0,yt.width,yt.height,dt.depth,Tt,qt,yt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,tt,Nt,yt.width,yt.height,dt.depth,0,Tt,qt,yt.data)}else{te&&ve&&e.texStorage2D(i.TEXTURE_2D,St,Nt,zt[0].width,zt[0].height);for(let tt=0,et=zt.length;tt<et;tt++)yt=zt[tt],y.format!==In?Tt!==null?te?O&&e.compressedTexSubImage2D(i.TEXTURE_2D,tt,0,0,yt.width,yt.height,Tt,yt.data):e.compressedTexImage2D(i.TEXTURE_2D,tt,Nt,yt.width,yt.height,0,yt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):te?O&&e.texSubImage2D(i.TEXTURE_2D,tt,0,0,yt.width,yt.height,Tt,qt,yt.data):e.texImage2D(i.TEXTURE_2D,tt,Nt,yt.width,yt.height,0,Tt,qt,yt.data)}else if(y.isDataArrayTexture)if(te){if(ve&&e.texStorage3D(i.TEXTURE_2D_ARRAY,St,Nt,dt.width,dt.height,dt.depth),O)if(y.layerUpdates.size>0){let tt;switch(qt){case i.UNSIGNED_BYTE:switch(Tt){case i.ALPHA:tt=1;break;case i.LUMINANCE:tt=1;break;case i.LUMINANCE_ALPHA:tt=2;break;case i.RGB:tt=3;break;case i.RGBA:tt=4;break;default:throw new Error(`Unknown texel size for format ${Tt}.`)}break;case i.UNSIGNED_SHORT_4_4_4_4:case i.UNSIGNED_SHORT_5_5_5_1:case i.UNSIGNED_SHORT_5_6_5:tt=1;break;default:throw new Error(`Unknown texel size for type ${qt}.`)}const et=dt.width*dt.height*tt;for(const ft of y.layerUpdates)e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ft,dt.width,dt.height,1,Tt,qt,dt.data.slice(et*ft,et*(ft+1)));y.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,dt.width,dt.height,dt.depth,Tt,qt,dt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Nt,dt.width,dt.height,dt.depth,0,Tt,qt,dt.data);else if(y.isData3DTexture)te?(ve&&e.texStorage3D(i.TEXTURE_3D,St,Nt,dt.width,dt.height,dt.depth),O&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,dt.width,dt.height,dt.depth,Tt,qt,dt.data)):e.texImage3D(i.TEXTURE_3D,0,Nt,dt.width,dt.height,dt.depth,0,Tt,qt,dt.data);else if(y.isFramebufferTexture){if(ve)if(te)e.texStorage2D(i.TEXTURE_2D,St,Nt,dt.width,dt.height);else{let tt=dt.width,et=dt.height;for(let ft=0;ft<St;ft++)e.texImage2D(i.TEXTURE_2D,ft,Nt,tt,et,0,Tt,qt,null),tt>>=1,et>>=1}}else if(zt.length>0){if(te&&ve){const tt=pe(zt[0]);e.texStorage2D(i.TEXTURE_2D,St,Nt,tt.width,tt.height)}for(let tt=0,et=zt.length;tt<et;tt++)yt=zt[tt],te?O&&e.texSubImage2D(i.TEXTURE_2D,tt,0,0,Tt,qt,yt):e.texImage2D(i.TEXTURE_2D,tt,Nt,Tt,qt,yt);y.generateMipmaps=!1}else if(te){if(ve){const tt=pe(dt);e.texStorage2D(i.TEXTURE_2D,St,Nt,tt.width,tt.height)}O&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Tt,qt,dt)}else e.texImage2D(i.TEXTURE_2D,0,Nt,Tt,qt,dt);m(y)&&p(st),Ct.__version=at.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function B(R,y,j){if(y.image.length!==6)return;const st=W(R,y),lt=y.source;e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+j);const at=n.get(lt);if(lt.version!==at.__version||st===!0){e.activeTexture(i.TEXTURE0+j);const Ct=ae.getPrimaries(ae.workingColorSpace),_t=y.colorSpace===vi?null:ae.getPrimaries(y.colorSpace),vt=y.colorSpace===vi||Ct===_t?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt);const Zt=y.isCompressedTexture||y.image[0].isCompressedTexture,dt=y.image[0]&&y.image[0].isDataTexture,Tt=[];for(let et=0;et<6;et++)!Zt&&!dt?Tt[et]=_(y.image[et],!0,s.maxCubemapSize):Tt[et]=dt?y.image[et].image:y.image[et],Tt[et]=Vt(y,Tt[et]);const qt=Tt[0],Nt=r.convert(y.format,y.colorSpace),yt=r.convert(y.type),zt=M(y.internalFormat,Nt,yt,y.colorSpace),te=y.isVideoTexture!==!0,ve=at.__version===void 0||st===!0,O=lt.dataReady;let St=w(y,qt);ct(i.TEXTURE_CUBE_MAP,y);let tt;if(Zt){te&&ve&&e.texStorage2D(i.TEXTURE_CUBE_MAP,St,zt,qt.width,qt.height);for(let et=0;et<6;et++){tt=Tt[et].mipmaps;for(let ft=0;ft<tt.length;ft++){const G=tt[ft];y.format!==In?Nt!==null?te?O&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,ft,0,0,G.width,G.height,Nt,G.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,ft,zt,G.width,G.height,0,G.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):te?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,ft,0,0,G.width,G.height,Nt,yt,G.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,ft,zt,G.width,G.height,0,Nt,yt,G.data)}}}else{if(tt=y.mipmaps,te&&ve){tt.length>0&&St++;const et=pe(Tt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,St,zt,et.width,et.height)}for(let et=0;et<6;et++)if(dt){te?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,Tt[et].width,Tt[et].height,Nt,yt,Tt[et].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,zt,Tt[et].width,Tt[et].height,0,Nt,yt,Tt[et].data);for(let ft=0;ft<tt.length;ft++){const rt=tt[ft].image[et].image;te?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,ft+1,0,0,rt.width,rt.height,Nt,yt,rt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,ft+1,zt,rt.width,rt.height,0,Nt,yt,rt.data)}}else{te?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,Nt,yt,Tt[et]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,zt,Nt,yt,Tt[et]);for(let ft=0;ft<tt.length;ft++){const G=tt[ft];te?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,ft+1,0,0,Nt,yt,G.image[et]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,ft+1,zt,Nt,yt,G.image[et])}}}m(y)&&p(i.TEXTURE_CUBE_MAP),at.__version=lt.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function Z(R,y,j,st,lt,at){const Ct=r.convert(j.format,j.colorSpace),_t=r.convert(j.type),vt=M(j.internalFormat,Ct,_t,j.colorSpace);if(!n.get(y).__hasExternalTextures){const dt=Math.max(1,y.width>>at),Tt=Math.max(1,y.height>>at);lt===i.TEXTURE_3D||lt===i.TEXTURE_2D_ARRAY?e.texImage3D(lt,at,vt,dt,Tt,y.depth,0,Ct,_t,null):e.texImage2D(lt,at,vt,dt,Tt,0,Ct,_t,null)}e.bindFramebuffer(i.FRAMEBUFFER,R),ne(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,st,lt,n.get(j).__webglTexture,0,Pt(y)):(lt===i.TEXTURE_2D||lt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&lt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,st,lt,n.get(j).__webglTexture,at),e.bindFramebuffer(i.FRAMEBUFFER,null)}function J(R,y,j){if(i.bindRenderbuffer(i.RENDERBUFFER,R),y.depthBuffer){const st=y.depthTexture,lt=st&&st.isDepthTexture?st.type:null,at=v(y.stencilBuffer,lt),Ct=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_t=Pt(y);ne(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,_t,at,y.width,y.height):j?i.renderbufferStorageMultisample(i.RENDERBUFFER,_t,at,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,at,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ct,i.RENDERBUFFER,R)}else{const st=y.textures;for(let lt=0;lt<st.length;lt++){const at=st[lt],Ct=r.convert(at.format,at.colorSpace),_t=r.convert(at.type),vt=M(at.internalFormat,Ct,_t,at.colorSpace),Zt=Pt(y);j&&ne(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Zt,vt,y.width,y.height):ne(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Zt,vt,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,vt,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function $(R,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,R),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),L(y.depthTexture,0);const st=n.get(y.depthTexture).__webglTexture,lt=Pt(y);if(y.depthTexture.format===Fs)ne(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,st,0,lt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,st,0);else if(y.depthTexture.format===Qs)ne(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,st,0,lt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,st,0);else throw new Error("Unknown depthTexture format")}function ut(R){const y=n.get(R),j=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!y.__autoAllocateDepthBuffer){if(j)throw new Error("target.depthTexture not supported in Cube render targets");$(y.__webglFramebuffer,R)}else if(j){y.__webglDepthbuffer=[];for(let st=0;st<6;st++)e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[st]),y.__webglDepthbuffer[st]=i.createRenderbuffer(),J(y.__webglDepthbuffer[st],R,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer=i.createRenderbuffer(),J(y.__webglDepthbuffer,R,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function gt(R,y,j){const st=n.get(R);y!==void 0&&Z(st.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),j!==void 0&&ut(R)}function At(R){const y=R.texture,j=n.get(R),st=n.get(y);R.addEventListener("dispose",T);const lt=R.textures,at=R.isWebGLCubeRenderTarget===!0,Ct=lt.length>1;if(Ct||(st.__webglTexture===void 0&&(st.__webglTexture=i.createTexture()),st.__version=y.version,o.memory.textures++),at){j.__webglFramebuffer=[];for(let _t=0;_t<6;_t++)if(y.mipmaps&&y.mipmaps.length>0){j.__webglFramebuffer[_t]=[];for(let vt=0;vt<y.mipmaps.length;vt++)j.__webglFramebuffer[_t][vt]=i.createFramebuffer()}else j.__webglFramebuffer[_t]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){j.__webglFramebuffer=[];for(let _t=0;_t<y.mipmaps.length;_t++)j.__webglFramebuffer[_t]=i.createFramebuffer()}else j.__webglFramebuffer=i.createFramebuffer();if(Ct)for(let _t=0,vt=lt.length;_t<vt;_t++){const Zt=n.get(lt[_t]);Zt.__webglTexture===void 0&&(Zt.__webglTexture=i.createTexture(),o.memory.textures++)}if(R.samples>0&&ne(R)===!1){j.__webglMultisampledFramebuffer=i.createFramebuffer(),j.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let _t=0;_t<lt.length;_t++){const vt=lt[_t];j.__webglColorRenderbuffer[_t]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,j.__webglColorRenderbuffer[_t]);const Zt=r.convert(vt.format,vt.colorSpace),dt=r.convert(vt.type),Tt=M(vt.internalFormat,Zt,dt,vt.colorSpace,R.isXRRenderTarget===!0),qt=Pt(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,qt,Tt,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.RENDERBUFFER,j.__webglColorRenderbuffer[_t])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(j.__webglDepthRenderbuffer=i.createRenderbuffer(),J(j.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(at){e.bindTexture(i.TEXTURE_CUBE_MAP,st.__webglTexture),ct(i.TEXTURE_CUBE_MAP,y);for(let _t=0;_t<6;_t++)if(y.mipmaps&&y.mipmaps.length>0)for(let vt=0;vt<y.mipmaps.length;vt++)Z(j.__webglFramebuffer[_t][vt],R,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,vt);else Z(j.__webglFramebuffer[_t],R,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0);m(y)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ct){for(let _t=0,vt=lt.length;_t<vt;_t++){const Zt=lt[_t],dt=n.get(Zt);e.bindTexture(i.TEXTURE_2D,dt.__webglTexture),ct(i.TEXTURE_2D,Zt),Z(j.__webglFramebuffer,R,Zt,i.COLOR_ATTACHMENT0+_t,i.TEXTURE_2D,0),m(Zt)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let _t=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(_t=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(_t,st.__webglTexture),ct(_t,y),y.mipmaps&&y.mipmaps.length>0)for(let vt=0;vt<y.mipmaps.length;vt++)Z(j.__webglFramebuffer[vt],R,y,i.COLOR_ATTACHMENT0,_t,vt);else Z(j.__webglFramebuffer,R,y,i.COLOR_ATTACHMENT0,_t,0);m(y)&&p(_t),e.unbindTexture()}R.depthBuffer&&ut(R)}function N(R){const y=R.textures;for(let j=0,st=y.length;j<st;j++){const lt=y[j];if(m(lt)){const at=R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Ct=n.get(lt).__webglTexture;e.bindTexture(at,Ct),p(at),e.unbindTexture()}}}const Xt=[],Ht=[];function ce(R){if(R.samples>0){if(ne(R)===!1){const y=R.textures,j=R.width,st=R.height;let lt=i.COLOR_BUFFER_BIT;const at=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ct=n.get(R),_t=y.length>1;if(_t)for(let vt=0;vt<y.length;vt++)e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ct.__webglFramebuffer);for(let vt=0;vt<y.length;vt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(lt|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(lt|=i.STENCIL_BUFFER_BIT)),_t){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ct.__webglColorRenderbuffer[vt]);const Zt=n.get(y[vt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Zt,0)}i.blitFramebuffer(0,0,j,st,0,0,j,st,lt,i.NEAREST),c===!0&&(Xt.length=0,Ht.length=0,Xt.push(i.COLOR_ATTACHMENT0+vt),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Xt.push(at),Ht.push(at),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ht)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Xt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),_t)for(let vt=0;vt<y.length;vt++){e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.RENDERBUFFER,Ct.__webglColorRenderbuffer[vt]);const Zt=n.get(y[vt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.TEXTURE_2D,Zt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&c){const y=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function Pt(R){return Math.min(s.maxSamples,R.samples)}function ne(R){const y=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Wt(R){const y=o.render.frame;h.get(R)!==y&&(h.set(R,y),R.update())}function Vt(R,y){const j=R.colorSpace,st=R.format,lt=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||j!==Di&&j!==vi&&(ae.getTransfer(j)===ge?(st!==In||lt!==Ci)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",j)),y}function pe(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(l.width=R.naturalWidth||R.width,l.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(l.width=R.displayWidth,l.height=R.displayHeight):(l.width=R.width,l.height=R.height),l}this.allocateTextureUnit=k,this.resetTextureUnits=C,this.setTexture2D=L,this.setTexture2DArray=V,this.setTexture3D=H,this.setTextureCube=Q,this.rebindTextures=gt,this.setupRenderTarget=At,this.updateRenderTargetMipmap=N,this.updateMultisampleRenderTarget=ce,this.setupDepthRenderbuffer=ut,this.setupFrameBufferTexture=Z,this.useMultisampledRTT=ne}function $_(i,t){function e(n,s=vi){let r;const o=ae.getTransfer(s);if(n===Ci)return i.UNSIGNED_BYTE;if(n===du)return i.UNSIGNED_SHORT_4_4_4_4;if(n===fu)return i.UNSIGNED_SHORT_5_5_5_1;if(n===If)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Pf)return i.BYTE;if(n===Lf)return i.SHORT;if(n===To)return i.UNSIGNED_SHORT;if(n===uu)return i.INT;if(n===Js)return i.UNSIGNED_INT;if(n===Ei)return i.FLOAT;if(n===Go)return i.HALF_FLOAT;if(n===Df)return i.ALPHA;if(n===Nf)return i.RGB;if(n===In)return i.RGBA;if(n===Uf)return i.LUMINANCE;if(n===Of)return i.LUMINANCE_ALPHA;if(n===Fs)return i.DEPTH_COMPONENT;if(n===Qs)return i.DEPTH_STENCIL;if(n===Ff)return i.RED;if(n===pu)return i.RED_INTEGER;if(n===Bf)return i.RG;if(n===mu)return i.RG_INTEGER;if(n===gu)return i.RGBA_INTEGER;if(n===ia||n===sa||n===ra||n===oa)if(o===ge)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ia)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===sa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ra)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===oa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ia)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===sa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ra)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===oa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===il||n===sl||n===rl||n===ol)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===il)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===sl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===rl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ol)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===al||n===cl||n===ll)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===al||n===cl)return o===ge?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ll)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===hl||n===ul||n===dl||n===fl||n===pl||n===ml||n===gl||n===_l||n===vl||n===xl||n===yl||n===Ml||n===Sl||n===El)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===hl)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ul)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===dl)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===fl)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===pl)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ml)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===gl)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===_l)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===vl)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===xl)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===yl)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ml)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Sl)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===El)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===aa||n===wl||n===bl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===aa)return o===ge?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===wl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===bl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===zf||n===Tl||n===Al||n===Rl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===aa)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Tl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Al)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Rl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===js?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class K_ extends rn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class ni extends Be{constructor(){super(),this.isGroup=!0,this.type="Group"}}const J_={type:"move"};class Na{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ni,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ni,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ni,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(J_)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new ni;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const j_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Q_=`
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

}`;class tv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Ke,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Pi({vertexShader:j_,fragmentShader:Q_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new wt(new ii(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}}class ev extends nr{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,g=null;const _=new tv,m=e.getContextAttributes();let p=null,M=null;const v=[],w=[],U=new Mt;let T=null;const b=new rn;b.layers.enable(1),b.viewport=new Me;const F=new rn;F.layers.enable(2),F.viewport=new Me;const E=[b,F],x=new K_;x.layers.enable(1),x.layers.enable(2);let C=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let Z=v[B];return Z===void 0&&(Z=new Na,v[B]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(B){let Z=v[B];return Z===void 0&&(Z=new Na,v[B]=Z),Z.getGripSpace()},this.getHand=function(B){let Z=v[B];return Z===void 0&&(Z=new Na,v[B]=Z),Z.getHandSpace()};function P(B){const Z=w.indexOf(B.inputSource);if(Z===-1)return;const J=v[Z];J!==void 0&&(J.update(B.inputSource,B.frame,l||o),J.dispatchEvent({type:B.type,data:B.inputSource}))}function L(){s.removeEventListener("select",P),s.removeEventListener("selectstart",P),s.removeEventListener("selectend",P),s.removeEventListener("squeeze",P),s.removeEventListener("squeezestart",P),s.removeEventListener("squeezeend",P),s.removeEventListener("end",L),s.removeEventListener("inputsourceschange",V);for(let B=0;B<v.length;B++){const Z=w[B];Z!==null&&(w[B]=null,v[B].disconnect(Z))}C=null,k=null,_.reset(),t.setRenderTarget(p),f=null,d=null,u=null,s=null,M=null,ot.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(U.width,U.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){r=B,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){a=B,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(B){l=B},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(B){if(s=B,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",P),s.addEventListener("selectstart",P),s.addEventListener("selectend",P),s.addEventListener("squeeze",P),s.addEventListener("squeezestart",P),s.addEventListener("squeezeend",P),s.addEventListener("end",L),s.addEventListener("inputsourceschange",V),m.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(U),s.renderState.layers===void 0){const Z={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,Z),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new Qi(f.framebufferWidth,f.framebufferHeight,{format:In,type:Ci,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let Z=null,J=null,$=null;m.depth&&($=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Z=m.stencil?Qs:Fs,J=m.stencil?js:Js);const ut={colorFormat:e.RGBA8,depthFormat:$,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(ut),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),M=new Qi(d.textureWidth,d.textureHeight,{format:In,type:Ci,depthTexture:new Lu(d.textureWidth,d.textureHeight,J,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),ot.setContext(s),ot.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function V(B){for(let Z=0;Z<B.removed.length;Z++){const J=B.removed[Z],$=w.indexOf(J);$>=0&&(w[$]=null,v[$].disconnect(J))}for(let Z=0;Z<B.added.length;Z++){const J=B.added[Z];let $=w.indexOf(J);if($===-1){for(let gt=0;gt<v.length;gt++)if(gt>=w.length){w.push(J),$=gt;break}else if(w[gt]===null){w[gt]=J,$=gt;break}if($===-1)break}const ut=v[$];ut&&ut.connect(J)}}const H=new D,Q=new D;function Y(B,Z,J){H.setFromMatrixPosition(Z.matrixWorld),Q.setFromMatrixPosition(J.matrixWorld);const $=H.distanceTo(Q),ut=Z.projectionMatrix.elements,gt=J.projectionMatrix.elements,At=ut[14]/(ut[10]-1),N=ut[14]/(ut[10]+1),Xt=(ut[9]+1)/ut[5],Ht=(ut[9]-1)/ut[5],ce=(ut[8]-1)/ut[0],Pt=(gt[8]+1)/gt[0],ne=At*ce,Wt=At*Pt,Vt=$/(-ce+Pt),pe=Vt*-ce;Z.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(pe),B.translateZ(Vt),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert();const R=At+Vt,y=N+Vt,j=ne-pe,st=Wt+($-pe),lt=Xt*N/y*R,at=Ht*N/y*R;B.projectionMatrix.makePerspective(j,st,lt,at,R,y),B.projectionMatrixInverse.copy(B.projectionMatrix).invert()}function it(B,Z){Z===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(Z.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(s===null)return;_.texture!==null&&(B.near=_.depthNear,B.far=_.depthFar),x.near=F.near=b.near=B.near,x.far=F.far=b.far=B.far,(C!==x.near||k!==x.far)&&(s.updateRenderState({depthNear:x.near,depthFar:x.far}),C=x.near,k=x.far,b.near=C,b.far=k,F.near=C,F.far=k,b.updateProjectionMatrix(),F.updateProjectionMatrix(),B.updateProjectionMatrix());const Z=B.parent,J=x.cameras;it(x,Z);for(let $=0;$<J.length;$++)it(J[$],Z);J.length===2?Y(x,b,F):x.projectionMatrix.copy(b.projectionMatrix),nt(B,x,Z)};function nt(B,Z,J){J===null?B.matrix.copy(Z.matrixWorld):(B.matrix.copy(J.matrixWorld),B.matrix.invert(),B.matrix.multiply(Z.matrixWorld)),B.matrix.decompose(B.position,B.quaternion,B.scale),B.updateMatrixWorld(!0),B.projectionMatrix.copy(Z.projectionMatrix),B.projectionMatrixInverse.copy(Z.projectionMatrixInverse),B.isPerspectiveCamera&&(B.fov=ec*2*Math.atan(1/B.projectionMatrix.elements[5]),B.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(B){c=B,d!==null&&(d.fixedFoveation=B),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=B)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(x)};let ct=null;function W(B,Z){if(h=Z.getViewerPose(l||o),g=Z,h!==null){const J=h.views;f!==null&&(t.setRenderTargetFramebuffer(M,f.framebuffer),t.setRenderTarget(M));let $=!1;J.length!==x.cameras.length&&(x.cameras.length=0,$=!0);for(let gt=0;gt<J.length;gt++){const At=J[gt];let N=null;if(f!==null)N=f.getViewport(At);else{const Ht=u.getViewSubImage(d,At);N=Ht.viewport,gt===0&&(t.setRenderTargetTextures(M,Ht.colorTexture,d.ignoreDepthValues?void 0:Ht.depthStencilTexture),t.setRenderTarget(M))}let Xt=E[gt];Xt===void 0&&(Xt=new rn,Xt.layers.enable(gt),Xt.viewport=new Me,E[gt]=Xt),Xt.matrix.fromArray(At.transform.matrix),Xt.matrix.decompose(Xt.position,Xt.quaternion,Xt.scale),Xt.projectionMatrix.fromArray(At.projectionMatrix),Xt.projectionMatrixInverse.copy(Xt.projectionMatrix).invert(),Xt.viewport.set(N.x,N.y,N.width,N.height),gt===0&&(x.matrix.copy(Xt.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),$===!0&&x.cameras.push(Xt)}const ut=s.enabledFeatures;if(ut&&ut.includes("depth-sensing")){const gt=u.getDepthInformation(J[0]);gt&&gt.isValid&&gt.texture&&_.init(t,gt,s.renderState)}}for(let J=0;J<v.length;J++){const $=w[J],ut=v[J];$!==null&&ut!==void 0&&ut.update($,Z,l||o)}ct&&ct(B,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),g=null}const ot=new Cu;ot.setAnimationLoop(W),this.setAnimationLoop=function(B){ct=B},this.dispose=function(){}}}const ki=new Dn,nv=new _e;function iv(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Tu(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,M,v,w){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,w)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,M,v):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Qe&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Qe&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const M=t.get(p),v=M.envMap,w=M.envMapRotation;v&&(m.envMap.value=v,ki.copy(w),ki.x*=-1,ki.y*=-1,ki.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(ki.y*=-1,ki.z*=-1),m.envMapRotation.value.setFromMatrix4(nv.makeRotationFromEuler(ki)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,M,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=v*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Qe&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const M=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function sv(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,v){const w=v.program;n.uniformBlockBinding(M,w)}function l(M,v){let w=s[M.id];w===void 0&&(g(M),w=h(M),s[M.id]=w,M.addEventListener("dispose",m));const U=v.program;n.updateUBOMapping(M,U);const T=t.render.frame;r[M.id]!==T&&(d(M),r[M.id]=T)}function h(M){const v=u();M.__bindingPointIndex=v;const w=i.createBuffer(),U=M.__size,T=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,U,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,w),w}function u(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){const v=s[M.id],w=M.uniforms,U=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let T=0,b=w.length;T<b;T++){const F=Array.isArray(w[T])?w[T]:[w[T]];for(let E=0,x=F.length;E<x;E++){const C=F[E];if(f(C,T,E,U)===!0){const k=C.__offset,P=Array.isArray(C.value)?C.value:[C.value];let L=0;for(let V=0;V<P.length;V++){const H=P[V],Q=_(H);typeof H=="number"||typeof H=="boolean"?(C.__data[0]=H,i.bufferSubData(i.UNIFORM_BUFFER,k+L,C.__data)):H.isMatrix3?(C.__data[0]=H.elements[0],C.__data[1]=H.elements[1],C.__data[2]=H.elements[2],C.__data[3]=0,C.__data[4]=H.elements[3],C.__data[5]=H.elements[4],C.__data[6]=H.elements[5],C.__data[7]=0,C.__data[8]=H.elements[6],C.__data[9]=H.elements[7],C.__data[10]=H.elements[8],C.__data[11]=0):(H.toArray(C.__data,L),L+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,k,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(M,v,w,U){const T=M.value,b=v+"_"+w;if(U[b]===void 0)return typeof T=="number"||typeof T=="boolean"?U[b]=T:U[b]=T.clone(),!0;{const F=U[b];if(typeof T=="number"||typeof T=="boolean"){if(F!==T)return U[b]=T,!0}else if(F.equals(T)===!1)return F.copy(T),!0}return!1}function g(M){const v=M.uniforms;let w=0;const U=16;for(let b=0,F=v.length;b<F;b++){const E=Array.isArray(v[b])?v[b]:[v[b]];for(let x=0,C=E.length;x<C;x++){const k=E[x],P=Array.isArray(k.value)?k.value:[k.value];for(let L=0,V=P.length;L<V;L++){const H=P[L],Q=_(H),Y=w%U;Y!==0&&U-Y<Q.boundary&&(w+=U-Y),k.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=w,w+=Q.storage}}}const T=w%U;return T>0&&(w+=U-T),M.__size=w,M.__cache={},this}function _(M){const v={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(v.boundary=4,v.storage=4):M.isVector2?(v.boundary=8,v.storage=8):M.isVector3||M.isColor?(v.boundary=16,v.storage=12):M.isVector4?(v.boundary=16,v.storage=16):M.isMatrix3?(v.boundary=48,v.storage=48):M.isMatrix4?(v.boundary=64,v.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),v}function m(M){const v=M.target;v.removeEventListener("dispose",m);const w=o.indexOf(v.__bindingPointIndex);o.splice(w,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function p(){for(const M in s)i.deleteBuffer(s[M]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}class rv{constructor(t={}){const{canvas:e=Jf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const f=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const p=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Rn,this.toneMapping=bi,this.toneMappingExposure=1;const v=this;let w=!1,U=0,T=0,b=null,F=-1,E=null;const x=new Me,C=new Me;let k=null;const P=new ee(0);let L=0,V=e.width,H=e.height,Q=1,Y=null,it=null;const nt=new Me(0,0,V,H),ct=new Me(0,0,V,H);let W=!1;const ot=new Cc;let B=!1,Z=!1;const J=new _e,$=new D,ut={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let gt=!1;function At(){return b===null?Q:1}let N=n;function Xt(S,z){return e.getContext(S,z)}try{const S={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${wc}`),e.addEventListener("webglcontextlost",St,!1),e.addEventListener("webglcontextrestored",tt,!1),e.addEventListener("webglcontextcreationerror",et,!1),N===null){const z="webgl2";if(N=Xt(z,S),N===null)throw Xt(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let Ht,ce,Pt,ne,Wt,Vt,pe,R,y,j,st,lt,at,Ct,_t,vt,Zt,dt,Tt,qt,Nt,yt,zt,te;function ve(){Ht=new fg(N),Ht.init(),yt=new $_(N,Ht),ce=new ag(N,Ht,t,yt),Pt=new Y_(N),ne=new gg(N),Wt=new D_,Vt=new q_(N,Ht,Pt,Wt,ce,yt,ne),pe=new lg(v),R=new dg(v),y=new Ep(N),zt=new rg(N,y),j=new pg(N,y,ne,zt),st=new vg(N,j,y,ne),Tt=new _g(N,ce,Vt),vt=new cg(Wt),lt=new I_(v,pe,R,Ht,ce,zt,vt),at=new iv(v,Wt),Ct=new U_,_t=new H_(Ht),dt=new sg(v,pe,R,Pt,st,d,c),Zt=new Z_(v,st,ce),te=new sv(N,ne,ce,Pt),qt=new og(N,Ht,ne),Nt=new mg(N,Ht,ne),ne.programs=lt.programs,v.capabilities=ce,v.extensions=Ht,v.properties=Wt,v.renderLists=Ct,v.shadowMap=Zt,v.state=Pt,v.info=ne}ve();const O=new ev(v,N);this.xr=O,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const S=Ht.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=Ht.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(S){S!==void 0&&(Q=S,this.setSize(V,H,!1))},this.getSize=function(S){return S.set(V,H)},this.setSize=function(S,z,q=!0){if(O.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=S,H=z,e.width=Math.floor(S*Q),e.height=Math.floor(z*Q),q===!0&&(e.style.width=S+"px",e.style.height=z+"px"),this.setViewport(0,0,S,z)},this.getDrawingBufferSize=function(S){return S.set(V*Q,H*Q).floor()},this.setDrawingBufferSize=function(S,z,q){V=S,H=z,Q=q,e.width=Math.floor(S*q),e.height=Math.floor(z*q),this.setViewport(0,0,S,z)},this.getCurrentViewport=function(S){return S.copy(x)},this.getViewport=function(S){return S.copy(nt)},this.setViewport=function(S,z,q,K){S.isVector4?nt.set(S.x,S.y,S.z,S.w):nt.set(S,z,q,K),Pt.viewport(x.copy(nt).multiplyScalar(Q).round())},this.getScissor=function(S){return S.copy(ct)},this.setScissor=function(S,z,q,K){S.isVector4?ct.set(S.x,S.y,S.z,S.w):ct.set(S,z,q,K),Pt.scissor(C.copy(ct).multiplyScalar(Q).round())},this.getScissorTest=function(){return W},this.setScissorTest=function(S){Pt.setScissorTest(W=S)},this.setOpaqueSort=function(S){Y=S},this.setTransparentSort=function(S){it=S},this.getClearColor=function(S){return S.copy(dt.getClearColor())},this.setClearColor=function(){dt.setClearColor.apply(dt,arguments)},this.getClearAlpha=function(){return dt.getClearAlpha()},this.setClearAlpha=function(){dt.setClearAlpha.apply(dt,arguments)},this.clear=function(S=!0,z=!0,q=!0){let K=0;if(S){let X=!1;if(b!==null){const mt=b.texture.format;X=mt===gu||mt===mu||mt===pu}if(X){const mt=b.texture.type,Et=mt===Ci||mt===Js||mt===To||mt===js||mt===du||mt===fu,bt=dt.getClearColor(),Rt=dt.getClearAlpha(),kt=bt.r,Gt=bt.g,Ot=bt.b;Et?(f[0]=kt,f[1]=Gt,f[2]=Ot,f[3]=Rt,N.clearBufferuiv(N.COLOR,0,f)):(g[0]=kt,g[1]=Gt,g[2]=Ot,g[3]=Rt,N.clearBufferiv(N.COLOR,0,g))}else K|=N.COLOR_BUFFER_BIT}z&&(K|=N.DEPTH_BUFFER_BIT),q&&(K|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",St,!1),e.removeEventListener("webglcontextrestored",tt,!1),e.removeEventListener("webglcontextcreationerror",et,!1),Ct.dispose(),_t.dispose(),Wt.dispose(),pe.dispose(),R.dispose(),st.dispose(),zt.dispose(),te.dispose(),lt.dispose(),O.dispose(),O.removeEventListener("sessionstart",fe),O.removeEventListener("sessionend",xe),He.stop()};function St(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function tt(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const S=ne.autoReset,z=Zt.enabled,q=Zt.autoUpdate,K=Zt.needsUpdate,X=Zt.type;ve(),ne.autoReset=S,Zt.enabled=z,Zt.autoUpdate=q,Zt.needsUpdate=K,Zt.type=X}function et(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function ft(S){const z=S.target;z.removeEventListener("dispose",ft),G(z)}function G(S){rt(S),Wt.remove(S)}function rt(S){const z=Wt.get(S).programs;z!==void 0&&(z.forEach(function(q){lt.releaseProgram(q)}),S.isShaderMaterial&&lt.releaseShaderCache(S))}this.renderBufferDirect=function(S,z,q,K,X,mt){z===null&&(z=ut);const Et=X.isMesh&&X.matrixWorld.determinant()<0,bt=Hd(S,z,q,K,X);Pt.setMaterial(K,Et);let Rt=q.index,kt=1;if(K.wireframe===!0){if(Rt=j.getWireframeAttribute(q),Rt===void 0)return;kt=2}const Gt=q.drawRange,Ot=q.attributes.position;let se=Gt.start*kt,Ee=(Gt.start+Gt.count)*kt;mt!==null&&(se=Math.max(se,mt.start*kt),Ee=Math.min(Ee,(mt.start+mt.count)*kt)),Rt!==null?(se=Math.max(se,0),Ee=Math.min(Ee,Rt.count)):Ot!=null&&(se=Math.max(se,0),Ee=Math.min(Ee,Ot.count));const we=Ee-se;if(we<0||we===1/0)return;zt.setup(X,K,bt,q,Rt);let tn,oe=qt;if(Rt!==null&&(tn=y.get(Rt),oe=Nt,oe.setIndex(tn)),X.isMesh)K.wireframe===!0?(Pt.setLineWidth(K.wireframeLinewidth*At()),oe.setMode(N.LINES)):oe.setMode(N.TRIANGLES);else if(X.isLine){let It=K.linewidth;It===void 0&&(It=1),Pt.setLineWidth(It*At()),X.isLineSegments?oe.setMode(N.LINES):X.isLineLoop?oe.setMode(N.LINE_LOOP):oe.setMode(N.LINE_STRIP)}else X.isPoints?oe.setMode(N.POINTS):X.isSprite&&oe.setMode(N.TRIANGLES);if(X.isBatchedMesh)X._multiDrawInstances!==null?oe.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances):oe.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else if(X.isInstancedMesh)oe.renderInstances(se,we,X.count);else if(q.isInstancedBufferGeometry){const It=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Ye=Math.min(q.instanceCount,It);oe.renderInstances(se,we,Ye)}else oe.render(se,we)};function pt(S,z,q){S.transparent===!0&&S.side===on&&S.forceSinglePass===!1?(S.side=Qe,S.needsUpdate=!0,Hr(S,z,q),S.side=Ri,S.needsUpdate=!0,Hr(S,z,q),S.side=on):Hr(S,z,q)}this.compile=function(S,z,q=null){q===null&&(q=S),m=_t.get(q),m.init(z),M.push(m),q.traverseVisible(function(X){X.isLight&&X.layers.test(z.layers)&&(m.pushLight(X),X.castShadow&&m.pushShadow(X))}),S!==q&&S.traverseVisible(function(X){X.isLight&&X.layers.test(z.layers)&&(m.pushLight(X),X.castShadow&&m.pushShadow(X))}),m.setupLights();const K=new Set;return S.traverse(function(X){const mt=X.material;if(mt)if(Array.isArray(mt))for(let Et=0;Et<mt.length;Et++){const bt=mt[Et];pt(bt,q,X),K.add(bt)}else pt(mt,q,X),K.add(mt)}),M.pop(),m=null,K},this.compileAsync=function(S,z,q=null){const K=this.compile(S,z,q);return new Promise(X=>{function mt(){if(K.forEach(function(Et){Wt.get(Et).currentProgram.isReady()&&K.delete(Et)}),K.size===0){X(S);return}setTimeout(mt,10)}Ht.get("KHR_parallel_shader_compile")!==null?mt():setTimeout(mt,10)})};let Lt=null;function Ut(S){Lt&&Lt(S)}function fe(){He.stop()}function xe(){He.start()}const He=new Cu;He.setAnimationLoop(Ut),typeof self<"u"&&He.setContext(self),this.setAnimationLoop=function(S){Lt=S,O.setAnimationLoop(S),S===null?He.stop():He.start()},O.addEventListener("sessionstart",fe),O.addEventListener("sessionend",xe),this.render=function(S,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),O.enabled===!0&&O.isPresenting===!0&&(O.cameraAutoUpdate===!0&&O.updateCamera(z),z=O.getCamera()),S.isScene===!0&&S.onBeforeRender(v,S,z,b),m=_t.get(S,M.length),m.init(z),M.push(m),J.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),ot.setFromProjectionMatrix(J),Z=this.localClippingEnabled,B=vt.init(this.clippingPlanes,Z),_=Ct.get(S,p.length),_.init(),p.push(_),O.enabled===!0&&O.isPresenting===!0){const mt=v.xr.getDepthSensingMesh();mt!==null&&On(mt,z,-1/0,v.sortObjects)}On(S,z,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(Y,it),gt=O.enabled===!1||O.isPresenting===!1||O.hasDepthSensing()===!1,gt&&dt.addToRenderList(_,S),this.info.render.frame++,B===!0&&vt.beginShadows();const q=m.state.shadowsArray;Zt.render(q,S,z),B===!0&&vt.endShadows(),this.info.autoReset===!0&&this.info.reset();const K=_.opaque,X=_.transmissive;if(m.setupLights(),z.isArrayCamera){const mt=z.cameras;if(X.length>0)for(let Et=0,bt=mt.length;Et<bt;Et++){const Rt=mt[Et];Je(K,X,S,Rt)}gt&&dt.render(S);for(let Et=0,bt=mt.length;Et<bt;Et++){const Rt=mt[Et];si(_,S,Rt,Rt.viewport)}}else X.length>0&&Je(K,X,S,z),gt&&dt.render(S),si(_,S,z);b!==null&&(Vt.updateMultisampleRenderTarget(b),Vt.updateRenderTargetMipmap(b)),S.isScene===!0&&S.onAfterRender(v,S,z),zt.resetDefaultState(),F=-1,E=null,M.pop(),M.length>0?(m=M[M.length-1],B===!0&&vt.setGlobalState(v.clippingPlanes,m.state.camera)):m=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function On(S,z,q,K){if(S.visible===!1)return;if(S.layers.test(z.layers)){if(S.isGroup)q=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(z);else if(S.isLight)m.pushLight(S),S.castShadow&&m.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||ot.intersectsSprite(S)){K&&$.setFromMatrixPosition(S.matrixWorld).applyMatrix4(J);const Et=st.update(S),bt=S.material;bt.visible&&_.push(S,Et,bt,q,$.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||ot.intersectsObject(S))){const Et=st.update(S),bt=S.material;if(K&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),$.copy(S.boundingSphere.center)):(Et.boundingSphere===null&&Et.computeBoundingSphere(),$.copy(Et.boundingSphere.center)),$.applyMatrix4(S.matrixWorld).applyMatrix4(J)),Array.isArray(bt)){const Rt=Et.groups;for(let kt=0,Gt=Rt.length;kt<Gt;kt++){const Ot=Rt[kt],se=bt[Ot.materialIndex];se&&se.visible&&_.push(S,Et,se,q,$.z,Ot)}}else bt.visible&&_.push(S,Et,bt,q,$.z,null)}}const mt=S.children;for(let Et=0,bt=mt.length;Et<bt;Et++)On(mt[Et],z,q,K)}function si(S,z,q,K){const X=S.opaque,mt=S.transmissive,Et=S.transparent;m.setupLightsView(q),B===!0&&vt.setGlobalState(v.clippingPlanes,q),K&&Pt.viewport(x.copy(K)),X.length>0&&kr(X,z,q),mt.length>0&&kr(mt,z,q),Et.length>0&&kr(Et,z,q),Pt.buffers.depth.setTest(!0),Pt.buffers.depth.setMask(!0),Pt.buffers.color.setMask(!0),Pt.setPolygonOffset(!1)}function Je(S,z,q,K){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[K.id]===void 0&&(m.state.transmissionRenderTarget[K.id]=new Qi(1,1,{generateMipmaps:!0,type:Ht.has("EXT_color_buffer_half_float")||Ht.has("EXT_color_buffer_float")?Go:Ci,minFilter:Zi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ae.workingColorSpace}));const mt=m.state.transmissionRenderTarget[K.id],Et=K.viewport||x;mt.setSize(Et.z,Et.w);const bt=v.getRenderTarget();v.setRenderTarget(mt),v.getClearColor(P),L=v.getClearAlpha(),L<1&&v.setClearColor(16777215,.5),gt?dt.render(q):v.clear();const Rt=v.toneMapping;v.toneMapping=bi;const kt=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),m.setupLightsView(K),B===!0&&vt.setGlobalState(v.clippingPlanes,K),kr(S,q,K),Vt.updateMultisampleRenderTarget(mt),Vt.updateRenderTargetMipmap(mt),Ht.has("WEBGL_multisampled_render_to_texture")===!1){let Gt=!1;for(let Ot=0,se=z.length;Ot<se;Ot++){const Ee=z[Ot],we=Ee.object,tn=Ee.geometry,oe=Ee.material,It=Ee.group;if(oe.side===on&&we.layers.test(K.layers)){const Ye=oe.side;oe.side=Qe,oe.needsUpdate=!0,qc(we,q,K,tn,oe,It),oe.side=Ye,oe.needsUpdate=!0,Gt=!0}}Gt===!0&&(Vt.updateMultisampleRenderTarget(mt),Vt.updateRenderTargetMipmap(mt))}v.setRenderTarget(bt),v.setClearColor(P,L),kt!==void 0&&(K.viewport=kt),v.toneMapping=Rt}function kr(S,z,q){const K=z.isScene===!0?z.overrideMaterial:null;for(let X=0,mt=S.length;X<mt;X++){const Et=S[X],bt=Et.object,Rt=Et.geometry,kt=K===null?Et.material:K,Gt=Et.group;bt.layers.test(q.layers)&&qc(bt,z,q,Rt,kt,Gt)}}function qc(S,z,q,K,X,mt){S.onBeforeRender(v,z,q,K,X,mt),S.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),X.onBeforeRender(v,z,q,K,S,mt),X.transparent===!0&&X.side===on&&X.forceSinglePass===!1?(X.side=Qe,X.needsUpdate=!0,v.renderBufferDirect(q,z,K,X,S,mt),X.side=Ri,X.needsUpdate=!0,v.renderBufferDirect(q,z,K,X,S,mt),X.side=on):v.renderBufferDirect(q,z,K,X,S,mt),S.onAfterRender(v,z,q,K,X,mt)}function Hr(S,z,q){z.isScene!==!0&&(z=ut);const K=Wt.get(S),X=m.state.lights,mt=m.state.shadowsArray,Et=X.state.version,bt=lt.getParameters(S,X.state,mt,z,q),Rt=lt.getProgramCacheKey(bt);let kt=K.programs;K.environment=S.isMeshStandardMaterial?z.environment:null,K.fog=z.fog,K.envMap=(S.isMeshStandardMaterial?R:pe).get(S.envMap||K.environment),K.envMapRotation=K.environment!==null&&S.envMap===null?z.environmentRotation:S.envMapRotation,kt===void 0&&(S.addEventListener("dispose",ft),kt=new Map,K.programs=kt);let Gt=kt.get(Rt);if(Gt!==void 0){if(K.currentProgram===Gt&&K.lightsStateVersion===Et)return Kc(S,bt),Gt}else bt.uniforms=lt.getUniforms(S),S.onBuild(q,bt,v),S.onBeforeCompile(bt,v),Gt=lt.acquireProgram(bt,Rt),kt.set(Rt,Gt),K.uniforms=bt.uniforms;const Ot=K.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Ot.clippingPlanes=vt.uniform),Kc(S,bt),K.needsLights=Vd(S),K.lightsStateVersion=Et,K.needsLights&&(Ot.ambientLightColor.value=X.state.ambient,Ot.lightProbe.value=X.state.probe,Ot.directionalLights.value=X.state.directional,Ot.directionalLightShadows.value=X.state.directionalShadow,Ot.spotLights.value=X.state.spot,Ot.spotLightShadows.value=X.state.spotShadow,Ot.rectAreaLights.value=X.state.rectArea,Ot.ltc_1.value=X.state.rectAreaLTC1,Ot.ltc_2.value=X.state.rectAreaLTC2,Ot.pointLights.value=X.state.point,Ot.pointLightShadows.value=X.state.pointShadow,Ot.hemisphereLights.value=X.state.hemi,Ot.directionalShadowMap.value=X.state.directionalShadowMap,Ot.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Ot.spotShadowMap.value=X.state.spotShadowMap,Ot.spotLightMatrix.value=X.state.spotLightMatrix,Ot.spotLightMap.value=X.state.spotLightMap,Ot.pointShadowMap.value=X.state.pointShadowMap,Ot.pointShadowMatrix.value=X.state.pointShadowMatrix),K.currentProgram=Gt,K.uniformsList=null,Gt}function $c(S){if(S.uniformsList===null){const z=S.currentProgram.getUniforms();S.uniformsList=Eo.seqWithValue(z.seq,S.uniforms)}return S.uniformsList}function Kc(S,z){const q=Wt.get(S);q.outputColorSpace=z.outputColorSpace,q.batching=z.batching,q.batchingColor=z.batchingColor,q.instancing=z.instancing,q.instancingColor=z.instancingColor,q.instancingMorph=z.instancingMorph,q.skinning=z.skinning,q.morphTargets=z.morphTargets,q.morphNormals=z.morphNormals,q.morphColors=z.morphColors,q.morphTargetsCount=z.morphTargetsCount,q.numClippingPlanes=z.numClippingPlanes,q.numIntersection=z.numClipIntersection,q.vertexAlphas=z.vertexAlphas,q.vertexTangents=z.vertexTangents,q.toneMapping=z.toneMapping}function Hd(S,z,q,K,X){z.isScene!==!0&&(z=ut),Vt.resetTextureUnits();const mt=z.fog,Et=K.isMeshStandardMaterial?z.environment:null,bt=b===null?v.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:Di,Rt=(K.isMeshStandardMaterial?R:pe).get(K.envMap||Et),kt=K.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Gt=!!q.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Ot=!!q.morphAttributes.position,se=!!q.morphAttributes.normal,Ee=!!q.morphAttributes.color;let we=bi;K.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(we=v.toneMapping);const tn=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,oe=tn!==void 0?tn.length:0,It=Wt.get(K),Ye=m.state.lights;if(B===!0&&(Z===!0||S!==E)){const cn=S===E&&K.id===F;vt.setState(K,S,cn)}let le=!1;K.version===It.__version?(It.needsLights&&It.lightsStateVersion!==Ye.state.version||It.outputColorSpace!==bt||X.isBatchedMesh&&It.batching===!1||!X.isBatchedMesh&&It.batching===!0||X.isBatchedMesh&&It.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&It.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&It.instancing===!1||!X.isInstancedMesh&&It.instancing===!0||X.isSkinnedMesh&&It.skinning===!1||!X.isSkinnedMesh&&It.skinning===!0||X.isInstancedMesh&&It.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&It.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&It.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&It.instancingMorph===!1&&X.morphTexture!==null||It.envMap!==Rt||K.fog===!0&&It.fog!==mt||It.numClippingPlanes!==void 0&&(It.numClippingPlanes!==vt.numPlanes||It.numIntersection!==vt.numIntersection)||It.vertexAlphas!==kt||It.vertexTangents!==Gt||It.morphTargets!==Ot||It.morphNormals!==se||It.morphColors!==Ee||It.toneMapping!==we||It.morphTargetsCount!==oe)&&(le=!0):(le=!0,It.__version=K.version);let Fn=It.currentProgram;le===!0&&(Fn=Hr(K,z,X));let Gr=!1,Ni=!1,jo=!1;const De=Fn.getUniforms(),ri=It.uniforms;if(Pt.useProgram(Fn.program)&&(Gr=!0,Ni=!0,jo=!0),K.id!==F&&(F=K.id,Ni=!0),Gr||E!==S){De.setValue(N,"projectionMatrix",S.projectionMatrix),De.setValue(N,"viewMatrix",S.matrixWorldInverse);const cn=De.map.cameraPosition;cn!==void 0&&cn.setValue(N,$.setFromMatrixPosition(S.matrixWorld)),ce.logarithmicDepthBuffer&&De.setValue(N,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&De.setValue(N,"isOrthographic",S.isOrthographicCamera===!0),E!==S&&(E=S,Ni=!0,jo=!0)}if(X.isSkinnedMesh){De.setOptional(N,X,"bindMatrix"),De.setOptional(N,X,"bindMatrixInverse");const cn=X.skeleton;cn&&(cn.boneTexture===null&&cn.computeBoneTexture(),De.setValue(N,"boneTexture",cn.boneTexture,Vt))}X.isBatchedMesh&&(De.setOptional(N,X,"batchingTexture"),De.setValue(N,"batchingTexture",X._matricesTexture,Vt),De.setOptional(N,X,"batchingColorTexture"),X._colorsTexture!==null&&De.setValue(N,"batchingColorTexture",X._colorsTexture,Vt));const Qo=q.morphAttributes;if((Qo.position!==void 0||Qo.normal!==void 0||Qo.color!==void 0)&&Tt.update(X,q,Fn),(Ni||It.receiveShadow!==X.receiveShadow)&&(It.receiveShadow=X.receiveShadow,De.setValue(N,"receiveShadow",X.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(ri.envMap.value=Rt,ri.flipEnvMap.value=Rt.isCubeTexture&&Rt.isRenderTargetTexture===!1?-1:1),K.isMeshStandardMaterial&&K.envMap===null&&z.environment!==null&&(ri.envMapIntensity.value=z.environmentIntensity),Ni&&(De.setValue(N,"toneMappingExposure",v.toneMappingExposure),It.needsLights&&Gd(ri,jo),mt&&K.fog===!0&&at.refreshFogUniforms(ri,mt),at.refreshMaterialUniforms(ri,K,Q,H,m.state.transmissionRenderTarget[S.id]),Eo.upload(N,$c(It),ri,Vt)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(Eo.upload(N,$c(It),ri,Vt),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&De.setValue(N,"center",X.center),De.setValue(N,"modelViewMatrix",X.modelViewMatrix),De.setValue(N,"normalMatrix",X.normalMatrix),De.setValue(N,"modelMatrix",X.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const cn=K.uniformsGroups;for(let ta=0,Wd=cn.length;ta<Wd;ta++){const Jc=cn[ta];te.update(Jc,Fn),te.bind(Jc,Fn)}}return Fn}function Gd(S,z){S.ambientLightColor.needsUpdate=z,S.lightProbe.needsUpdate=z,S.directionalLights.needsUpdate=z,S.directionalLightShadows.needsUpdate=z,S.pointLights.needsUpdate=z,S.pointLightShadows.needsUpdate=z,S.spotLights.needsUpdate=z,S.spotLightShadows.needsUpdate=z,S.rectAreaLights.needsUpdate=z,S.hemisphereLights.needsUpdate=z}function Vd(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(S,z,q){Wt.get(S.texture).__webglTexture=z,Wt.get(S.depthTexture).__webglTexture=q;const K=Wt.get(S);K.__hasExternalTextures=!0,K.__autoAllocateDepthBuffer=q===void 0,K.__autoAllocateDepthBuffer||Ht.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,z){const q=Wt.get(S);q.__webglFramebuffer=z,q.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(S,z=0,q=0){b=S,U=z,T=q;let K=!0,X=null,mt=!1,Et=!1;if(S){const Rt=Wt.get(S);Rt.__useDefaultFramebuffer!==void 0?(Pt.bindFramebuffer(N.FRAMEBUFFER,null),K=!1):Rt.__webglFramebuffer===void 0?Vt.setupRenderTarget(S):Rt.__hasExternalTextures&&Vt.rebindTextures(S,Wt.get(S.texture).__webglTexture,Wt.get(S.depthTexture).__webglTexture);const kt=S.texture;(kt.isData3DTexture||kt.isDataArrayTexture||kt.isCompressedArrayTexture)&&(Et=!0);const Gt=Wt.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Gt[z])?X=Gt[z][q]:X=Gt[z],mt=!0):S.samples>0&&Vt.useMultisampledRTT(S)===!1?X=Wt.get(S).__webglMultisampledFramebuffer:Array.isArray(Gt)?X=Gt[q]:X=Gt,x.copy(S.viewport),C.copy(S.scissor),k=S.scissorTest}else x.copy(nt).multiplyScalar(Q).floor(),C.copy(ct).multiplyScalar(Q).floor(),k=W;if(Pt.bindFramebuffer(N.FRAMEBUFFER,X)&&K&&Pt.drawBuffers(S,X),Pt.viewport(x),Pt.scissor(C),Pt.setScissorTest(k),mt){const Rt=Wt.get(S.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+z,Rt.__webglTexture,q)}else if(Et){const Rt=Wt.get(S.texture),kt=z||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,Rt.__webglTexture,q||0,kt)}F=-1},this.readRenderTargetPixels=function(S,z,q,K,X,mt,Et){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let bt=Wt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Et!==void 0&&(bt=bt[Et]),bt){Pt.bindFramebuffer(N.FRAMEBUFFER,bt);try{const Rt=S.texture,kt=Rt.format,Gt=Rt.type;if(!ce.textureFormatReadable(kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ce.textureTypeReadable(Gt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=S.width-K&&q>=0&&q<=S.height-X&&N.readPixels(z,q,K,X,yt.convert(kt),yt.convert(Gt),mt)}finally{const Rt=b!==null?Wt.get(b).__webglFramebuffer:null;Pt.bindFramebuffer(N.FRAMEBUFFER,Rt)}}},this.readRenderTargetPixelsAsync=async function(S,z,q,K,X,mt,Et){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let bt=Wt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Et!==void 0&&(bt=bt[Et]),bt){Pt.bindFramebuffer(N.FRAMEBUFFER,bt);try{const Rt=S.texture,kt=Rt.format,Gt=Rt.type;if(!ce.textureFormatReadable(kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ce.textureTypeReadable(Gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(z>=0&&z<=S.width-K&&q>=0&&q<=S.height-X){const Ot=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Ot),N.bufferData(N.PIXEL_PACK_BUFFER,mt.byteLength,N.STREAM_READ),N.readPixels(z,q,K,X,yt.convert(kt),yt.convert(Gt),0),N.flush();const se=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);await jf(N,se,4);try{N.bindBuffer(N.PIXEL_PACK_BUFFER,Ot),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,mt)}finally{N.deleteBuffer(Ot),N.deleteSync(se)}return mt}}finally{const Rt=b!==null?Wt.get(b).__webglFramebuffer:null;Pt.bindFramebuffer(N.FRAMEBUFFER,Rt)}}},this.copyFramebufferToTexture=function(S,z=null,q=0){S.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),z=arguments[0]||null,S=arguments[1]);const K=Math.pow(2,-q),X=Math.floor(S.image.width*K),mt=Math.floor(S.image.height*K),Et=z!==null?z.x:0,bt=z!==null?z.y:0;Vt.setTexture2D(S,0),N.copyTexSubImage2D(N.TEXTURE_2D,q,0,0,Et,bt,X,mt),Pt.unbindTexture()},this.copyTextureToTexture=function(S,z,q=null,K=null,X=0){S.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),K=arguments[0]||null,S=arguments[1],z=arguments[2],X=arguments[3]||0,q=null);let mt,Et,bt,Rt,kt,Gt;q!==null?(mt=q.max.x-q.min.x,Et=q.max.y-q.min.y,bt=q.min.x,Rt=q.min.y):(mt=S.image.width,Et=S.image.height,bt=0,Rt=0),K!==null?(kt=K.x,Gt=K.y):(kt=0,Gt=0);const Ot=yt.convert(z.format),se=yt.convert(z.type);Vt.setTexture2D(z,0),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,z.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,z.unpackAlignment);const Ee=N.getParameter(N.UNPACK_ROW_LENGTH),we=N.getParameter(N.UNPACK_IMAGE_HEIGHT),tn=N.getParameter(N.UNPACK_SKIP_PIXELS),oe=N.getParameter(N.UNPACK_SKIP_ROWS),It=N.getParameter(N.UNPACK_SKIP_IMAGES),Ye=S.isCompressedTexture?S.mipmaps[X]:S.image;N.pixelStorei(N.UNPACK_ROW_LENGTH,Ye.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Ye.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,bt),N.pixelStorei(N.UNPACK_SKIP_ROWS,Rt),S.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,X,kt,Gt,mt,Et,Ot,se,Ye.data):S.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,X,kt,Gt,Ye.width,Ye.height,Ot,Ye.data):N.texSubImage2D(N.TEXTURE_2D,X,kt,Gt,Ot,se,Ye),N.pixelStorei(N.UNPACK_ROW_LENGTH,Ee),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,we),N.pixelStorei(N.UNPACK_SKIP_PIXELS,tn),N.pixelStorei(N.UNPACK_SKIP_ROWS,oe),N.pixelStorei(N.UNPACK_SKIP_IMAGES,It),X===0&&z.generateMipmaps&&N.generateMipmap(N.TEXTURE_2D),Pt.unbindTexture()},this.copyTextureToTexture3D=function(S,z,q=null,K=null,X=0){S.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),q=arguments[0]||null,K=arguments[1]||null,S=arguments[2],z=arguments[3],X=arguments[4]||0);let mt,Et,bt,Rt,kt,Gt,Ot,se,Ee;const we=S.isCompressedTexture?S.mipmaps[X]:S.image;q!==null?(mt=q.max.x-q.min.x,Et=q.max.y-q.min.y,bt=q.max.z-q.min.z,Rt=q.min.x,kt=q.min.y,Gt=q.min.z):(mt=we.width,Et=we.height,bt=we.depth,Rt=0,kt=0,Gt=0),K!==null?(Ot=K.x,se=K.y,Ee=K.z):(Ot=0,se=0,Ee=0);const tn=yt.convert(z.format),oe=yt.convert(z.type);let It;if(z.isData3DTexture)Vt.setTexture3D(z,0),It=N.TEXTURE_3D;else if(z.isDataArrayTexture||z.isCompressedArrayTexture)Vt.setTexture2DArray(z,0),It=N.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,z.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,z.unpackAlignment);const Ye=N.getParameter(N.UNPACK_ROW_LENGTH),le=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Fn=N.getParameter(N.UNPACK_SKIP_PIXELS),Gr=N.getParameter(N.UNPACK_SKIP_ROWS),Ni=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,we.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,we.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Rt),N.pixelStorei(N.UNPACK_SKIP_ROWS,kt),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Gt),S.isDataTexture||S.isData3DTexture?N.texSubImage3D(It,X,Ot,se,Ee,mt,Et,bt,tn,oe,we.data):z.isCompressedArrayTexture?N.compressedTexSubImage3D(It,X,Ot,se,Ee,mt,Et,bt,tn,we.data):N.texSubImage3D(It,X,Ot,se,Ee,mt,Et,bt,tn,oe,we),N.pixelStorei(N.UNPACK_ROW_LENGTH,Ye),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,le),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Fn),N.pixelStorei(N.UNPACK_SKIP_ROWS,Gr),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Ni),X===0&&z.generateMipmaps&&N.generateMipmap(It),Pt.unbindTexture()},this.initRenderTarget=function(S){Wt.get(S).__webglFramebuffer===void 0&&Vt.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?Vt.setTextureCube(S,0):S.isData3DTexture?Vt.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?Vt.setTexture2DArray(S,0):Vt.setTexture2D(S,0),Pt.unbindTexture()},this.resetState=function(){U=0,T=0,b=null,Pt.reset(),zt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ei}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===bc?"display-p3":"srgb",e.unpackColorSpace=ae.workingColorSpace===Vo?"display-p3":"srgb"}}class Lc{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new ee(t),this.density=e}clone(){return new Lc(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class ov extends Be{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Dn,this.environmentIntensity=1,this.environmentRotation=new Dn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class av{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=tc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Ti()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return Tc("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ti()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ti()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const qe=new D;class Io{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.applyMatrix4(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.applyNormalMatrix(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.transformDirection(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Ln(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ue(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Ln(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Ln(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Ln(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Ln(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array),s=ue(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array),s=ue(s,this.array),r=ue(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new En(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Io(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Fu extends ir{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ee(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let vs;const dr=new D,xs=new D,ys=new D,Ms=new Mt,fr=new Mt,Bu=new _e,uo=new D,pr=new D,fo=new D,vh=new Mt,Ua=new Mt,xh=new Mt;class cv extends Be{constructor(t=new Fu){if(super(),this.isSprite=!0,this.type="Sprite",vs===void 0){vs=new an;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new av(e,5);vs.setIndex([0,1,2,0,2,3]),vs.setAttribute("position",new Io(n,3,0,!1)),vs.setAttribute("uv",new Io(n,2,3,!1))}this.geometry=vs,this.material=t,this.center=new Mt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),xs.setFromMatrixScale(this.matrixWorld),Bu.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ys.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&xs.multiplyScalar(-ys.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const o=this.center;po(uo.set(-.5,-.5,0),ys,o,xs,s,r),po(pr.set(.5,-.5,0),ys,o,xs,s,r),po(fo.set(.5,.5,0),ys,o,xs,s,r),vh.set(0,0),Ua.set(1,0),xh.set(1,1);let a=t.ray.intersectTriangle(uo,pr,fo,!1,dr);if(a===null&&(po(pr.set(-.5,.5,0),ys,o,xs,s,r),Ua.set(0,1),a=t.ray.intersectTriangle(uo,fo,pr,!1,dr),a===null))return;const c=t.ray.origin.distanceTo(dr);c<t.near||c>t.far||e.push({distance:c,point:dr.clone(),uv:Sn.getInterpolation(dr,uo,pr,fo,vh,Ua,xh,new Mt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function po(i,t,e,n,s,r){Ms.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(fr.x=r*Ms.x-s*Ms.y,fr.y=s*Ms.x+r*Ms.y):fr.copy(Ms),i.copy(t),i.x+=fr.x,i.y+=fr.y,i.applyMatrix4(Bu)}class Xo extends Ke{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Un{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);const h=n[s],d=n[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new Mt:new D);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new D,s=[],r=[],o=[],a=new D,c=new _e;for(let f=0;f<=t;f++){const g=f/t;s[f]=this.getTangentAt(g,new D)}r[0]=new D,o[0]=new D;let l=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(ze(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(ze(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Ic extends Un{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new Mt){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class lv extends Ic{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Dc(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let d=(o-r)/l-(a-r)/(l+h)+(a-o)/h,f=(a-o)/h-(c-o)/(h+u)+(c-a)/u;d*=h,f*=h,s(o,a,d,f)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const mo=new D,Oa=new Dc,Fa=new Dc,Ba=new Dc;class hv extends Un{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new D){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(mo.subVectors(s[0],s[1]).add(s[0]),l=mo);const u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(mo.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=mo),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Oa.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,g,_,m),Fa.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,g,_,m),Ba.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(Oa.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),Fa.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),Ba.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(Oa.calc(c),Fa.calc(c),Ba.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new D().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function yh(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function uv(i,t){const e=1-i;return e*e*t}function dv(i,t){return 2*(1-i)*i*t}function fv(i,t){return i*i*t}function xr(i,t,e,n){return uv(i,t)+dv(i,e)+fv(i,n)}function pv(i,t){const e=1-i;return e*e*e*t}function mv(i,t){const e=1-i;return 3*e*e*i*t}function gv(i,t){return 3*(1-i)*i*i*t}function _v(i,t){return i*i*i*t}function yr(i,t,e,n,s){return pv(i,t)+mv(i,e)+gv(i,n)+_v(i,s)}class zu extends Un{constructor(t=new Mt,e=new Mt,n=new Mt,s=new Mt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new Mt){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(yr(t,s.x,r.x,o.x,a.x),yr(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class vv extends Un{constructor(t=new D,e=new D,n=new D,s=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new D){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(yr(t,s.x,r.x,o.x,a.x),yr(t,s.y,r.y,o.y,a.y),yr(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class ku extends Un{constructor(t=new Mt,e=new Mt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Mt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Mt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class xv extends Un{constructor(t=new D,e=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new D){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new D){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Hu extends Un{constructor(t=new Mt,e=new Mt,n=new Mt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Mt){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(xr(t,s.x,r.x,o.x),xr(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class yv extends Un{constructor(t=new D,e=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new D){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(xr(t,s.x,r.x,o.x),xr(t,s.y,r.y,o.y),xr(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Gu extends Un{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Mt){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(yh(a,c.x,l.x,h.x,u.x),yh(a,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new Mt().fromArray(s))}return this}}var Mh=Object.freeze({__proto__:null,ArcCurve:lv,CatmullRomCurve3:hv,CubicBezierCurve:zu,CubicBezierCurve3:vv,EllipseCurve:Ic,LineCurve:ku,LineCurve3:xv,QuadraticBezierCurve:Hu,QuadraticBezierCurve3:yv,SplineCurve:Gu});class Mv extends Un{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Mh[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new Mh[s.type]().fromJSON(s))}return this}}class Sv extends Mv{constructor(t){super(),this.type="Path",this.currentPoint=new Mt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new ku(this.currentPoint.clone(),new Mt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new Hu(this.currentPoint.clone(),new Mt(t,e),new Mt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){const a=new zu(this.currentPoint.clone(),new Mt(t,e),new Mt(n,s),new Mt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Gu(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,s,r,o,a,c),this}absellipse(t,e,n,s,r,o,a,c){const l=new Ic(t,e,n,s,r,o,a,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Nc extends an{constructor(t=[new Mt(0,-.5),new Mt(.5,0),new Mt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=ze(s,0,Math.PI*2);const r=[],o=[],a=[],c=[],l=[],h=1/e,u=new D,d=new Mt,f=new D,g=new D,_=new D;let m=0,p=0;for(let M=0;M<=t.length-1;M++)switch(M){case 0:m=t[M+1].x-t[M].x,p=t[M+1].y-t[M].y,f.x=p*1,f.y=-m,f.z=p*0,_.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case t.length-1:c.push(_.x,_.y,_.z);break;default:m=t[M+1].x-t[M].x,p=t[M+1].y-t[M].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),c.push(f.x,f.y,f.z),_.copy(g)}for(let M=0;M<=e;M++){const v=n+M*h*s,w=Math.sin(v),U=Math.cos(v);for(let T=0;T<=t.length-1;T++){u.x=t[T].x*w,u.y=t[T].y,u.z=t[T].x*U,o.push(u.x,u.y,u.z),d.x=M/e,d.y=T/(t.length-1),a.push(d.x,d.y);const b=c[3*T+0]*w,F=c[3*T+1],E=c[3*T+0]*U;l.push(b,F,E)}}for(let M=0;M<e;M++)for(let v=0;v<t.length-1;v++){const w=v+M*t.length,U=w,T=w+t.length,b=w+t.length+1,F=w+1;r.push(U,T,F),r.push(b,F,T)}this.setIndex(r),this.setAttribute("position",new Te(o,3)),this.setAttribute("uv",new Te(a,2)),this.setAttribute("normal",new Te(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Nc(t.points,t.segments,t.phiStart,t.phiLength)}}class xi extends Nc{constructor(t=1,e=1,n=4,s=8){const r=new Sv;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new xi(t.radius,t.length,t.capSegments,t.radialSegments)}}class Uc extends an{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],c=[],l=new D,h=new Mt;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const f=n+u/e*s;l.x=t*Math.cos(f),l.y=t*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Te(o,3)),this.setAttribute("normal",new Te(a,3)),this.setAttribute("uv",new Te(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Uc(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class ke extends an{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],d=[],f=[];let g=0;const _=[],m=n/2;let p=0;M(),o===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new Te(u,3)),this.setAttribute("normal",new Te(d,3)),this.setAttribute("uv",new Te(f,2));function M(){const w=new D,U=new D;let T=0;const b=(e-t)/n;for(let F=0;F<=r;F++){const E=[],x=F/r,C=x*(e-t)+t;for(let k=0;k<=s;k++){const P=k/s,L=P*c+a,V=Math.sin(L),H=Math.cos(L);U.x=C*V,U.y=-x*n+m,U.z=C*H,u.push(U.x,U.y,U.z),w.set(V,b,H).normalize(),d.push(w.x,w.y,w.z),f.push(P,1-x),E.push(g++)}_.push(E)}for(let F=0;F<s;F++)for(let E=0;E<r;E++){const x=_[E][F],C=_[E+1][F],k=_[E+1][F+1],P=_[E][F+1];h.push(x,C,P),h.push(C,k,P),T+=6}l.addGroup(p,T,0),p+=T}function v(w){const U=g,T=new Mt,b=new D;let F=0;const E=w===!0?t:e,x=w===!0?1:-1;for(let k=1;k<=s;k++)u.push(0,m*x,0),d.push(0,x,0),f.push(.5,.5),g++;const C=g;for(let k=0;k<=s;k++){const L=k/s*c+a,V=Math.cos(L),H=Math.sin(L);b.x=E*H,b.y=m*x,b.z=E*V,u.push(b.x,b.y,b.z),d.push(0,x,0),T.x=V*.5+.5,T.y=H*.5*x+.5,f.push(T.x,T.y),g++}for(let k=0;k<s;k++){const P=U+k,L=C+k;w===!0?h.push(L,L+1,P):h.push(L+1,L,P),F+=3}l.addGroup(p,F,w===!0?1:2),p+=F}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ke(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Oc extends ke{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new Oc(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class be extends an{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],u=new D,d=new D,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const M=[],v=p/n;let w=0;p===0&&o===0?w=.5/e:p===n&&c===Math.PI&&(w=-.5/e);for(let U=0;U<=e;U++){const T=U/e;u.x=-t*Math.cos(s+T*r)*Math.sin(o+v*a),u.y=t*Math.cos(o+v*a),u.z=t*Math.sin(s+T*r)*Math.sin(o+v*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(T+w,1-v),M.push(l++)}h.push(M)}for(let p=0;p<n;p++)for(let M=0;M<e;M++){const v=h[p][M+1],w=h[p][M],U=h[p+1][M],T=h[p+1][M+1];(p!==0||o>0)&&f.push(v,w,T),(p!==n-1||c<Math.PI)&&f.push(w,U,T)}this.setIndex(f),this.setAttribute("position",new Te(g,3)),this.setAttribute("normal",new Te(_,3)),this.setAttribute("uv",new Te(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new be(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Fc extends an{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],c=[],l=[],h=new D,u=new D,d=new D;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){const _=g/s*r,m=f/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(_),u.y=(t+e*Math.cos(m))*Math.sin(_),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(g/s),l.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){const _=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,M=(s+1)*f+g;o.push(_,m,M),o.push(m,p,M)}this.setIndex(o),this.setAttribute("position",new Te(a,3)),this.setAttribute("normal",new Te(c,3)),this.setAttribute("uv",new Te(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fc(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Bt extends ir{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ee(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_u,this.normalScale=new Mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Dn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Zo extends Be{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ee(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}class Ev extends Zo{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Be.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ee(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const za=new _e,Sh=new D,Eh=new D;class Vu{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Mt(512,512),this.map=null,this.mapPass=null,this.matrix=new _e,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Cc,this._frameExtents=new Mt(1,1),this._viewportCount=1,this._viewports=[new Me(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Sh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Sh),Eh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Eh),e.updateMatrixWorld(),za.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(za),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(za)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const wh=new _e,mr=new D,ka=new D;class wv extends Vu{constructor(){super(new rn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Mt(4,2),this._viewportCount=6,this._viewports=[new Me(2,1,1,1),new Me(0,1,1,1),new Me(3,1,1,1),new Me(1,1,1,1),new Me(3,0,1,1),new Me(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),mr.setFromMatrixPosition(t.matrixWorld),n.position.copy(mr),ka.copy(n.position),ka.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(ka),n.updateMatrixWorld(),s.makeTranslation(-mr.x,-mr.y,-mr.z),wh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wh)}}class Bc extends Zo{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new wv}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class bv extends Vu{constructor(){super(new Pu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class bh extends Zo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Be.DEFAULT_UP),this.updateMatrix(),this.target=new Be,this.shadow=new bv}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Tv extends Zo{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Wu{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Th(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Th();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Th(){return(typeof performance>"u"?Date:performance).now()}const Ah=new _e;class Av{constructor(t,e,n=0,s=1/0){this.ray=new Su(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Rc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Ah.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ah),this}intersectObject(t,e=!0,n=[]){return ic(t,this,n,e),n.sort(Rh),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)ic(t[s],this,n,e);return n.sort(Rh),n}}function Rh(i,t){return i.distance-t.distance}function ic(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)ic(r[o],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wc);const ts=[{id:0,label:"Alex",skin:16763812,hair:2889744,outfit:1981066,accent:15857145,hairStyle:1},{id:1,label:"Jordan",skin:13010498,hair:1118481,outfit:1332013,accent:16710083,hairStyle:0},{id:2,label:"Morgan",skin:8142098,hair:656640,outfit:8917815,accent:16701354,hairStyle:2},{id:3,label:"Casey",skin:15777920,hair:8138002,outfit:1461859,accent:14742270,hairStyle:3},{id:4,label:"Riley",skin:9584654,hair:197379,outfit:10105874,accent:16775149,hairStyle:0},{id:5,label:"Sam",skin:16640216,hair:11817737,outfit:4988309,accent:15591934,hairStyle:1}],zc=[{id:"available",label:"🟢 Available",color:58998},{id:"busy",label:"🔴 Busy",color:16729156},{id:"away",label:"🟡 Away",color:16763904},{id:"meeting",label:"🟣 In Meeting",color:11158783}],sc=Object.fromEntries(zc.map(i=>[i.id,i.color]));function Xu(i,t=0){const e=new ni;return $u(e,i,t),e}function Zu(i,t){i.userData.status=t;const e=i.userData.statusMesh;e&&e.material.color.setHex(sc[t]??sc.available)}function Yu(i,t,e=0){var s;const n=i.userData.talkRing;if(n&&(n.visible=t,t)){const r=.75+Math.sin(e*6)*.25;n.material.opacity=r,n.material.color.setHex(65416),(s=n.material.emissive)==null||s.setHex(65416),n.material.emissiveIntensity=r*1.2}}function qu(i,t,e){for(i.traverse(n=>{var s;(n.isMesh||n.isSprite)&&((s=n.geometry)==null||s.dispose(),(Array.isArray(n.material)?n.material:[n.material]).forEach(o=>{var a;(a=o==null?void 0:o.map)==null||a.dispose(),o==null||o.dispose()}))});i.children.length;)i.remove(i.children[0]);$u(i,t,e)}function $u(i,t,e){const n=ts[e]??ts[0],s=Ss(n.skin,.75),r=Ss(n.outfit,.65,.05),o=Ss(n.accent,.6),a=Ss(n.hair,.9),c=Ss(1118481,.8),l=Ss(1118481,.3),h=(U,T,b=0,F=0,E=0,x=0,C=0,k=0)=>{const P=new wt(U,T);return P.position.set(b,F,E),P.rotation.set(x,C,k),P.castShadow=!0,i.add(P),P};h(new xi(.21,.52,4,12),r),h(new ke(.215,.215,.055,16),c,0,.635),h(new Qt(.26,.09,.04),o,0,1.12,.208),h(new ke(.072,.09,.14,12),s,0,1.49),h(new be(.19,20,16),s,0,1.68),h(new be(.048,10,8),s,-.2,1.68),h(new be(.048,10,8),s,.2,1.68),h(new be(.034,10,8),o,-.068,1.7,.163),h(new be(.034,10,8),o,.068,1.7,.163),h(new be(.021,8,6),l,-.068,1.7,.178),h(new be(.021,8,6),l,.068,1.7,.178),Rv(i,h,a,n.hairStyle),h(new be(.105,10,8),r,-.315,1.39),h(new be(.105,10,8),r,.315,1.39);const u=h(new xi(.065,.3,4,8),r,-.31,1.08),d=h(new xi(.065,.3,4,8),r,.31,1.08);h(new be(.073,12,9),s,-.32,.72),h(new be(.073,12,9),s,.32,.72);const f=h(new xi(.083,.36,4,8),r,-.13,.4),g=h(new xi(.083,.36,4,8),r,.13,.4);h(new Qt(.17,.1,.28),c,-.13,.07,.04),h(new Qt(.17,.1,.28),c,.13,.07,.04),h(new ke(.09,.084,.08,10),c,-.13,.145),h(new ke(.09,.084,.08,10),c,.13,.145);const _=document.createElement("canvas");_.width=256,_.height=56;const m=_.getContext("2d");m.fillStyle="rgba(0,10,30,0.78)",m.roundRect(0,0,256,56,10),m.fill(),m.fillStyle="#aaddff",m.font="bold 26px Inter, sans-serif",m.textAlign="center",m.fillText(t,128,38);const p=new cv(new Fu({map:new Xo(_),transparent:!0,depthTest:!1}));p.position.set(0,2.18,0),p.scale.set(1.5,.33,1),i.add(p);const M=sc[i.userData.status??"available"],v=new wt(new be(.065,8,6),new Sr({color:M}));v.position.set(.58,2.22,0),i.add(v),i.userData.statusMesh=v;const w=new wt(new Fc(.38,.045,6,32),new Sr({color:65416,transparent:!0,opacity:0,emissive:new ee(65416),depthWrite:!1,side:on}));w.rotation.x=Math.PI/2,w.position.y=.01,w.visible=!1,i.add(w),i.userData.talkRing=w,i.userData.legL=f,i.userData.legR=g,i.userData.armL=u,i.userData.armR=d,i.userData.walkClock=i.userData.walkClock??0,i.userData.presetId=e}function Rv(i,t,e,n){switch(n){case 0:t(new be(.193,16,10,0,Math.PI*2,0,.8),e,0,1.69);break;case 1:t(new be(.198,16,10,0,Math.PI*2,0,1.1),e,0,1.68);break;case 2:{t(new be(.196,16,10,0,Math.PI*2,0,1.05),e,0,1.68);const s=new wt(new xi(.09,.22,4,8),e);s.position.set(0,1.51,-.13),s.rotation.x=.28,s.castShadow=!0,i.add(s);break}case 3:t(new be(.238,16,12),e,0,1.74);break;default:t(new be(.198,16,10,0,Math.PI*2,0,1.1),e,0,1.68)}}function Ss(i,t=.7,e=0){return new Bt({color:i,roughness:t,metalness:e})}function Ku(i,t,e){const{legL:n,legR:s,armL:r,armR:o}=i.userData;if(!(!n||!s))if(t){i.userData.walkClock+=e*12;const a=Math.sin(i.userData.walkClock)*.42;n.rotation.x=a,s.rotation.x=-a,r&&(r.rotation.x=-a*.55),o&&(o.rotation.x=a*.55)}else{const a=Math.exp(-12*e);n.rotation.x*=a,s.rotation.x*=a,r&&(r.rotation.x*=a),o&&(o.rotation.x*=a)}}const A={minX:-22,maxX:22,minZ:-24,maxZ:12,wallH:4.5,wallT:.3,lobbyZ:4,midZ:-4,centerX:0,doorH:2.2,doorHalfW:.7,leftDoorX:-11,rightDoorX:11,mainDoorH:2.6,mainDoorHalfW:1.5},ht=A;function de(i,t,e,n,s,r,o,a){const c=new wt(new Qt(r,o,a),t);return c.position.set(e,n,s),i.add(c),c}function Cv(){const i=new Bt({color:13946822,roughness:.88,metalness:.04,side:on}),t=new Bt({color:8026226,roughness:.78,metalness:.08}),e=new Bt({color:15789285,roughness:.94,metalness:0}),n=new Bt({color:15262940,roughness:.9,metalness:0}),s=new Bt({color:14209736,roughness:.18,metalness:.07}),r=new Bt({color:12090440,roughness:.82,metalness:0}),o=new Bt({color:16118766,roughness:.98,metalness:0}),a=new Bt({color:4341816,roughness:.9,metalness:0}),c=new Bt({color:10131600,roughness:.4,metalness:.6}),l=new Bt({color:11061464,roughness:.04,metalness:.08,transparent:!0,opacity:.25,side:on}),h=new Bt({color:9209984,roughness:.82,metalness:.04}),u=new Bt({color:11579576,roughness:.28,metalness:.82});return{ext:i,span:t,int:e,div:n,tile:s,wood:r,ceil:o,roof:a,frame:c,glass:l,stair:h,rail:u}}function Pv(i){const t=Cv(),e=ht.wallH,n=ht.wallT,s=ht.maxX-ht.minX,r=ht.maxZ-ht.minZ,o=0,a=(ht.minZ+ht.maxZ)/2,c=4,l=e*c;de(i,t.tile,o,.04,(ht.lobbyZ+ht.maxZ)/2,s,.08,ht.maxZ-ht.lobbyZ),de(i,t.wood,o,.04,(ht.minZ+ht.lobbyZ)/2,s,.08,ht.lobbyZ-ht.minZ),de(i,t.ext,o,l/2,ht.minZ,s,l,n),de(i,t.ext,ht.minX,l/2,a,n,l,r),de(i,t.ext,ht.maxX,l/2,a,n,l,r);const h=ht.mainDoorHalfW,u=ht.mainDoorH,d=e/2;de(i,t.ext,(ht.minX+-h)/2,d,ht.maxZ,-h-ht.minX,e,n),de(i,t.ext,(h+ht.maxX)/2,d,ht.maxZ,ht.maxX-h,e,n),de(i,t.ext,0,u+(e-u)/2,ht.maxZ,h*2,e-u,n),de(i,t.ext,o,e+(l-e)/2,ht.maxZ,s,l-e,n);for(let v=1;v<c;v++){const w=e*v;de(i,t.span,o,w+.25,ht.maxZ-.08,s+.2,.5,.14),de(i,t.span,o,w+.25,ht.minZ+.08,s+.2,.5,.14),de(i,t.span,ht.minX+.06,w+.25,a,.14,.5,r+.2),de(i,t.span,ht.maxX-.06,w+.25,a,.14,.5,r+.2)}Lv(i,t),Iv(i,t,h);const f=n*.5,g=n/2;Ch(i,t.div,ht.lobbyZ,ht.minX+f,ht.maxX-f,e,n,ht.leftDoorX,ht.doorHalfW,ht.doorH,ht.rightDoorX,ht.doorHalfW,ht.doorH),Ch(i,t.div,ht.midZ,ht.minX+f,ht.maxX-f,e,n,ht.leftDoorX,ht.doorHalfW,ht.doorH,ht.rightDoorX,ht.doorHalfW,ht.doorH),Ph(i,t.div,ht.centerX,ht.minZ+f,ht.midZ-g,e,n),Ph(i,t.div,ht.centerX,ht.midZ+g,ht.lobbyZ-g,e,n);const _=de(i,t.ceil,o,e+.05,a,s,.1,r);_.userData.mapHide=!0;const m=i.children.length;de(i,t.roof,o,l+.3,a,s+1,.6,r+1),Nv(i,t.ext,s,r,l);for(let v=m;v<i.children.length;v++)i.children[v].userData.mapHide=!0;Dv(i,t),Uv(i);const p=i.children.length;Ov(i,e);for(let v=p;v<i.children.length;v++)i.children[v].userData.mapHide=!0;const M=i.children.length;Fv(i);for(let v=M;v<i.children.length;v++)i.children[v].userData.mapShow=!0}function Lv(i,t){function r(c,l,h,u){const d=new wt(new Qt(2.3600000000000003,1.7200000000000002,.08),t.frame);d.position.set(c,l,h),d.rotation.y=u,i.add(d);const f=new wt(new ii(2.2,1.6),t.glass);f.position.set(c,l,h),f.rotation.y=u,i.add(f)}const o=ht.wallH,a=[0,1,2,3].map(c=>c*o+o*.6);a.forEach(c=>{[-16,-6,8].forEach(l=>r(ht.minX,c,l,Math.PI/2))}),a.forEach(c=>{[-16,-6,8].forEach(l=>r(ht.maxX,c,l,-Math.PI/2))}),a.forEach(c=>{[-14,0,14].forEach(l=>r(l,c,ht.minZ,Math.PI))}),a.forEach((c,l)=>{l===0?(r(-14,c,ht.maxZ,0),r(14,c,ht.maxZ,0)):[-14,-6,6,14].forEach(h=>r(h,c,ht.maxZ,0))})}function Iv(i,t,e,n){[-e-.4,e+.4].forEach(s=>{const r=new wt(new ke(.22,.22,ht.mainDoorH,12),t.ext);r.position.set(s,ht.mainDoorH/2,ht.maxZ+.5),i.add(r)}),de(i,t.span,0,ht.mainDoorH+.18,ht.maxZ+.7,e*2+2.4,.35,1.8),de(i,t.int,0,ht.mainDoorH,ht.maxZ+.7,e*2+2.2,.02,1.7)}function Dv(i,t){for(let l=0;l<9;l++)de(i,t.stair,16.5,.22*(l+.5),5.5+.28*(l+.5),3,.22,.28);for(let l=0;l<9;l+=2)de(i,t.rail,16.5-3/2+.1,.22*l+.55,5.5+.28*l,.06,1.1,.06),de(i,t.rail,16.5+3/2-.1,.22*l+.55,5.5+.28*l,.06,1.1,.06);de(i,t.rail,16.5,.22*9*.5+.55,5.5+.28*9*.5,3,.06,.28*9+.1);const c=-16.5;for(let l=0;l<9;l++)de(i,t.stair,c,.22*(l+.5),5.5+.28*(l+.5),3,.22,.28);for(let l=0;l<9;l+=2)de(i,t.rail,c-3/2+.1,.22*l+.55,5.5+.28*l,.06,1.1,.06),de(i,t.rail,c+3/2-.1,.22*l+.55,5.5+.28*l,.06,1.1,.06);de(i,t.rail,c,.22*9*.5+.55,5.5+.28*9*.5,3,.06,.28*9+.1)}function Ch(i,t,e,n,s,r,o,a,c,l,h,u,d){const f=r/2,g=[];let _=n;const m=[];m.push({c:a,hw:c,dh:l}),m.push({c:h,hw:u,dh:d}),m.sort((p,M)=>p.c-M.c),m.forEach(({c:p,hw:M,dh:v})=>{const w=p-M,U=p+M;w>_&&g.push({from:_,to:w,full:!0}),g.push({from:w,to:U,full:!1,dh:v}),_=U}),_<s&&g.push({from:_,to:s,full:!0}),g.forEach(({from:p,to:M,full:v,dh:w})=>{const U=M-p,T=(p+M)/2;if(v)de(i,t,T,f,e,U,r,o);else{const b=r-w;de(i,t,T,w+b/2,e,U,b,o)}})}function Ph(i,t,e,n,s,r,o){const a=s-n;if(a<=0)return;const c=new wt(new Qt(o,r,a),t);c.position.set(e,r/2,(n+s)/2),i.add(c)}function Nv(i,t,e,n,s){const a=s+.275+.05,c=(ht.minZ+ht.maxZ)/2;[[0,a,ht.maxZ+.05,e+.6,.55,.28],[0,a,ht.minZ-.05,e+.6,.55,.28],[ht.minX-.05,a,c,.28,.55,n+.6],[ht.maxX+.05,a,c,.28,.55,n+.6]].forEach(([h,u,d,f,g,_])=>{const m=new wt(new Qt(f,g,_),t);m.position.set(h,u,d),i.add(m)})}function Uv(i){[{color:12863616,x:ht.minX+.06,z1:ht.midZ,z2:ht.lobbyZ},{color:4241520,x:ht.maxX-.06,z1:ht.midZ,z2:ht.lobbyZ},{color:14712880,x:ht.minX+.06,z1:ht.minZ,z2:ht.midZ},{color:3705032,x:ht.maxX-.06,z1:ht.minZ,z2:ht.midZ},{color:8947848,x:0,z1:ht.lobbyZ,z2:ht.maxZ-1}].forEach(({color:e,x:n,z1:s,z2:r})=>{const o=new Bt({color:e,roughness:.7,metalness:0}),a=r-s,c=new wt(new Qt(.06,.04,a),o);c.position.set(n,.05,(s+r)/2),i.add(c)})}function Ov(i,t){const e=new Bt({color:14210510,roughness:.85,metalness:.06}),n=new Bt({color:16777215,emissive:16774632,emissiveIntensity:1.2,roughness:.7});[[-8,8],[8,8],[0,8],[-11,0],[11,0],[-14,-10],[-8,-18],[8,-18],[14,-10]].forEach(([r,o])=>{const a=new wt(new Qt(1.2,.06,.65),e);a.position.set(r,t-.04,o),i.add(a);const c=new wt(new Qt(1.1,.01,.55),n);c.position.set(r,t-.02,o),i.add(c)})}function Fv(i){[{name:"LOBBY",color:"#cccccc",x:0,z:8,w:16,d:5},{name:"OPS",color:"#ffaa44",x:-11,z:0,w:12,d:6},{name:"FUN",color:"#44ffaa",x:11,z:0,w:12,d:6},{name:"DESIGN",color:"#ff6ba0",x:-11,z:-14,w:14,d:10},{name:"ENGINEERING",color:"#44aaff",x:11,z:-14,w:14,d:10}].forEach(({name:e,color:n,x:s,z:r,w:o,d:a})=>{const c=document.createElement("canvas");c.width=512,c.height=256;const l=c.getContext("2d");l.fillStyle=n+"18",l.fillRect(0,0,512,256),l.strokeStyle=n,l.lineWidth=10,l.strokeRect(6,6,500,244),l.fillStyle=n,l.font="bold 72px Inter, Arial, sans-serif",l.textAlign="center",l.textBaseline="middle",l.fillText(e,256,128);const h=new wt(new ii(o,a),new Sr({map:new Xo(c),transparent:!0,depthWrite:!1}));h.rotation.x=-Math.PI/2,h.position.set(s,.15,r),i.add(h)})}function Bv(i){const t=A,e=new Bt({color:5934140,roughness:.96,metalness:0}),n=new wt(new ii(300,300),e);n.rotation.x=-Math.PI/2,n.position.y=-.01,n.receiveShadow=!0,i.add(n);const s=new Bt({color:12630704,roughness:.88,metalness:0}),r=new wt(new Qt(5,.06,18),s);r.position.set(0,.03,19),r.receiveShadow=!0,i.add(r);const o=new wt(new Qt(14,.06,8),s);o.position.set(0,.03,14.5),o.receiveShadow=!0,i.add(o);const a=new wt(new Qt(t.maxX-t.minX,.06,4),s);a.position.set(0,.03,t.maxZ+2),a.receiveShadow=!0,i.add(a);const c=new Bt({color:11578272,roughness:.9,metalness:0}),l=t.maxX-t.minX,h=t.maxZ-t.minZ,u=new wt(new Qt(l+.8,.22,h+.8),c);u.position.set(0,-.11,(t.minZ+t.maxZ)/2),i.add(u),[[-30,-18],[-30,5],[-30,20],[30,-18],[30,5],[30,20],[-12,26],[12,26],[-36,12],[36,12],[-28,-30],[28,-30]].forEach(([f,g])=>zv(i,f,g)),[[-4,24],[4,24],[-14,14],[14,14]].forEach(([f,g])=>kv(i,f,g)),Hv(i),Gv(i)}function zv(i,t,e){const n=new Bt({color:5911832,roughness:.92}),s=new Bt({color:3830312,roughness:.95}),r=new wt(new ke(.18,.26,2.2,8),n);r.position.set(t,1.1,e),r.castShadow=!0,i.add(r),[[1.8,2.5,3.4],[1.3,2,4.8],[.7,1.4,6]].forEach(([o,a,c])=>{const l=new wt(new Oc(o,a,9),s);l.position.set(t,c,e),l.castShadow=!0,i.add(l)})}function kv(i,t,e){const n=new Bt({color:6316128,roughness:.55,metalness:.75}),s=new Bt({color:16775384,emissive:16773296,emissiveIntensity:1.5,roughness:.4}),r=new wt(new ke(.06,.08,5,8),n);r.position.set(t,2.5,e),r.castShadow=!0,i.add(r);const o=new wt(new Qt(.06,.06,.9),n);o.position.set(t,5.1,e-.4),i.add(o);const a=new wt(new Qt(.45,.14,.28),s);a.position.set(t,4.95,e-.8),i.add(a);const c=new Bc(16771232,6,12);c.position.set(t,4.95,e-.8),i.add(c)}function Hv(i){const t=[2250154,11149858,8947840,2245666,8947848],e=new Bt({color:1710618,roughness:.8});[[-40,-22],[-40,-16],[-40,-10],[40,-22],[40,-16],[40,-10]].forEach(([s,r],o)=>{const a=t[o%t.length],c=new Bt({color:a,roughness:.45,metalness:.3}),l=new wt(new Qt(4.4,1.4,2),c);l.position.set(s,.72,r),l.castShadow=!0,i.add(l);const h=new wt(new Qt(2.8,.7,1.85),c);h.position.set(s-.2,1.8,r),i.add(h),[[-1.5,-1.05],[-1.5,1.05],[1.5,-1.05],[1.5,1.05]].forEach(([u,d])=>{const f=new wt(new ke(.36,.36,.22,12),e);f.rotation.z=Math.PI/2,f.position.set(s+u,.36,r+d),i.add(f)})})}function Gv(i){const t=new Bt({color:4878400,roughness:1});[[-80,-60,30,8,20],[80,-60,28,7,18],[0,-80,40,6,25],[-50,-70,35,9,22],[55,-70,32,7,20]].forEach(([e,n,s,r,o])=>{const a=new wt(new Qt(s,r,o),t);a.position.set(e,r/2-2,n),i.add(a)})}const Es=A.leftDoorX,ws=A.rightDoorX,Re=A.doorHalfW,di=A.doorH,bs=.1,zr=[{id:"main-left",label:"Main Entrance",hinge:{x:-1.5,y:A.mainDoorH/2,z:A.maxZ},meshOffset:{x:A.mainDoorHalfW/2,y:0,z:0},w:A.mainDoorHalfW,h:A.mainDoorH,d:bs,closedRY:0,openRY:Math.PI/2,closedAABB:{minX:-1.5,maxX:0,minZ:A.maxZ-.14,maxZ:A.maxZ+.14}},{id:"main-right",label:"Main Entrance",hinge:{x:A.mainDoorHalfW,y:A.mainDoorH/2,z:A.maxZ},meshOffset:{x:-1.5/2,y:0,z:0},w:A.mainDoorHalfW,h:A.mainDoorH,d:bs,closedRY:0,openRY:-Math.PI/2,closedAABB:{minX:0,maxX:A.mainDoorHalfW,minZ:A.maxZ-.14,maxZ:A.maxZ+.14}},{id:"ops",label:"Ops Room",hinge:{x:Es-Re,y:di/2,z:A.lobbyZ},meshOffset:{x:Re,y:0,z:0},w:Re*2,h:di,d:bs,closedRY:0,openRY:-Math.PI/2,closedAABB:{minX:Es-Re,maxX:Es+Re,minZ:A.lobbyZ-.12,maxZ:A.lobbyZ+.12}},{id:"fun",label:"Fun Room",hinge:{x:ws+Re,y:di/2,z:A.lobbyZ},meshOffset:{x:-Re,y:0,z:0},w:Re*2,h:di,d:bs,closedRY:0,openRY:Math.PI/2,closedAABB:{minX:ws-Re,maxX:ws+Re,minZ:A.lobbyZ-.12,maxZ:A.lobbyZ+.12}},{id:"design",label:"Design Room",hinge:{x:Es-Re,y:di/2,z:A.midZ},meshOffset:{x:Re,y:0,z:0},w:Re*2,h:di,d:bs,closedRY:0,openRY:-Math.PI/2,closedAABB:{minX:Es-Re,maxX:Es+Re,minZ:A.midZ-.12,maxZ:A.midZ+.12}},{id:"engineering",label:"Engineering Room",hinge:{x:ws+Re,y:di/2,z:A.midZ},meshOffset:{x:-Re,y:0,z:0},w:Re*2,h:di,d:bs,closedRY:0,openRY:Math.PI/2,closedAABB:{minX:ws-Re,maxX:ws+Re,minZ:A.midZ-.12,maxZ:A.midZ+.12}}],rr={};function Vv(i){const t=new Bt({color:8016944,roughness:.72,metalness:.02,side:on}),e=new Bt({color:13937220,roughness:.28,metalness:.88}),n=new Bt({color:6176286,roughness:.8,metalness:0});return zr.forEach(s=>{const r=new ni;r.position.set(s.hinge.x,s.hinge.y,s.hinge.z),i.add(r);const o=new wt(new Qt(s.w,s.h,s.d),t);o.position.set(s.meshOffset.x,s.meshOffset.y,s.meshOffset.z),o.userData.doorId=s.id,r.add(o);const a=s.meshOffset;[-.45,.32].forEach(f=>{const g=new wt(new Qt(s.w*.85,.04,s.d*1.2),n);g.position.set(a.x,a.y+f,a.z+s.d*.1),r.add(g)});const c=a.x+(a.x>=0?-s.w*.36:s.w*.36),l=new wt(new be(.05,8,6),e);l.position.set(c,a.y-.08,a.z+s.d*.65),r.add(l);const h=l.clone();h.position.z=a.z-s.d*.65,r.add(h);const u=s.id==="main-left"||s.id==="main-right",d=u?s.openRY:s.closedRY;r.rotation.y=d,rr[s.id]={open:u,targetRY:d,currentRY:d,pivot:r}}),{update:Wv,toggleDoor:Yn,getNearbyDoor:Ju,getClosedColliders:ju}}function Wv(i){Object.values(rr).forEach(t=>{Math.abs(t.currentRY-t.targetRY)>5e-4&&(t.currentRY+=(t.targetRY-t.currentRY)*Math.min(1,i*7),t.pivot.rotation.y=t.currentRY)})}function Yn(i){const t=rr[i],e=zr.find(n=>n.id===i);if(!(!t||!e))return t.open=!t.open,t.targetRY=t.open?e.openRY:e.closedRY,t.open}function Ju(i,t=2.8){let e=null,n=t;return zr.forEach(s=>{const r=i.x-s.hinge.x,o=i.z-s.hinge.z,a=Math.sqrt(r*r+o*o);a<n&&(n=a,e={def:s,state:rr[s.id]})}),e}function Ts(i){var t;return((t=rr[i])==null?void 0:t.open)??!1}function ju(){const i=[];return zr.forEach(t=>{const e=rr[t.id];if(!e)return;Math.abs(e.currentRY-t.closedRY)<.18&&i.push(t.closedAABB)}),i}function Xv(i){const t=document.getElementById("canvas"),e=new rv({canvas:t,antialias:!0});e.setSize(window.innerWidth,window.innerHeight),e.setPixelRatio(Math.min(window.devicePixelRatio,2)),e.shadowMap.enabled=!0,e.shadowMap.type=au,e.toneMapping=lu,e.toneMappingExposure=1;const n=new ov;n.background=new ee(9357544),n.fog=new Lc(11195624,.007);const s=new rn(80,window.innerWidth/window.innerHeight,.1,300);s.position.set(0,1.7,22),n.add(new Tv(16775408,.9)),n.add(new Ev(10407144,5929544,.9));const r=new bh(16774616,3.2);r.position.set(40,70,35),r.castShadow=!0,r.shadow.mapSize.set(2048,2048),r.shadow.camera.near=1,r.shadow.camera.far=120,r.shadow.camera.left=-50,r.shadow.camera.right=50,r.shadow.camera.top=50,r.shadow.camera.bottom=-50,r.shadow.radius=3,r.shadow.bias=-.001,n.add(r);const o=new bh(13164021,.6);o.position.set(-25,30,-20),n.add(o),[{pos:[-5,3.8,-14],color:16773344,intensity:25,radius:18},{pos:[5,3.8,-14],color:16773344,intensity:25,radius:18},{pos:[-11,3.8,0],color:16774376,intensity:22,radius:16},{pos:[11,3.8,0],color:16774376,intensity:22,radius:16},{pos:[0,3.8,8],color:16775412,intensity:28,radius:22}].forEach(({pos:d,color:f,intensity:g,radius:_})=>{const m=new Bc(f,g,_);m.position.set(...d),n.add(m)}),i==null||i(10,"Laying foundations…"),Bv(n),i==null||i(35,"Building structure…"),Pv(n),i==null||i(65,"Installing doors…");const c=Vv(n);i==null||i(90,"Finishing touches…"),n.userData.doors=c,window.addEventListener("resize",()=>{s.aspect=window.innerWidth/window.innerHeight,s.updateProjectionMatrix(),e.setSize(window.innerWidth,window.innerHeight)});const l=new Wu;function h(){requestAnimationFrame(h);const d=l.getDelta();c.update(d),e.render(n,s)}h();let u=null;return i==null||i(100,"Ready!"),setTimeout(()=>{u&&u()},200),{scene:n,camera:s,renderer:e,onShipLoaded:d=>{u=d}}}const Lh=[{id:"design-screen",label:"Design Board",zone:"DESIGN",tool:"Excalidraw",url:"https://excalidraw.com",position:{x:A.minX+.12,y:2.2,z:-14},rotationY:Math.PI/2,width:4.5,height:2.8,color:16739232,emoji:"✏️"},{id:"engineering-screen",label:"Code Docs",zone:"ENGINEERING",tool:"HackMD",url:"https://hackmd.io",position:{x:A.maxX-.12,y:2.2,z:-14},rotationY:-Math.PI/2,width:4.5,height:2.8,color:4500223,emoji:"💻"},{id:"ops-screen",label:"Ops Dashboard",zone:"OPS",tool:"Grafana",url:"https://play.grafana.org",position:{x:A.minX+.12,y:2.2,z:0},rotationY:Math.PI/2,width:4,height:2.5,color:16755268,emoji:"📊"},{id:"fun-screen",label:"Vibe Zone",zone:"FUN",tool:"Spotify",url:"https://open.spotify.com/embed/playlist/37i9dQZF1DX0XUsuxWHRQd?utm_source=generator&theme=0",position:{x:A.maxX-.12,y:2.2,z:0},rotationY:-Math.PI/2,width:4,height:2.5,color:4521898,emoji:"🎵"}];function Zv(i){const t=[];return Lh.forEach(e=>{const n=new ni;n.position.set(e.position.x,e.position.y,e.position.z),n.rotation.y=e.rotationY,i.add(n);const s=.1,r=new Bt({color:1710618,roughness:.3,metalness:.85}),o=(g,_,m,p,M,v)=>{const w=new wt(new Qt(p,M,v),r);w.position.set(g,_,m),n.add(w)};o(0,e.height/2+s/2,0,e.width+s*2,s,s*2),o(0,-e.height/2-s/2,0,e.width+s*2,s,s*2),o(-e.width/2-s/2,0,0,s,e.height+s*2,s*2),o(e.width/2+s/2,0,0,s,e.height+s*2,s*2);const a=new Bt({color:e.color,emissive:e.color,emissiveIntensity:2.5,roughness:.08}),c=(g,_,m,p,M,v)=>{const w=new wt(new Qt(p,M,v),a);w.position.set(g,_,m),n.add(w)};c(0,e.height/2,.02,e.width,.04,.04),c(0,-e.height/2,.02,e.width,.04,.04),c(-e.width/2,0,.02,.04,e.height,.04),c(e.width/2,0,.02,.04,e.height,.04);const l=Yv(e),h=new Bt({map:l,emissiveMap:l,emissive:new ee(e.color),emissiveIntensity:.14,roughness:.1}),u=new wt(new ii(e.width,e.height),h);u.position.set(0,0,.02),u.userData.screen=e,n.add(u),t.push(u);const d=new Bc(e.color,16,8);d.position.set(0,0,.6),n.add(d);let f=Math.random()*Math.PI*2;(function g(){requestAnimationFrame(g),f+=.018,h.emissiveIntensity=.12+Math.sin(f)*.04,d.intensity=14+Math.sin(f*.65)*4})()}),{meshes:t,screens:Lh}}function Yv(i){const e=Math.round(512*(i.height/i.width)),n=document.createElement("canvas");n.width=512,n.height=e;const s=n.getContext("2d"),r="#"+i.color.toString(16).padStart(6,"0");s.fillStyle="#060c18",s.fillRect(0,0,512,e),s.fillStyle="rgba(200,230,255,0.035)";for(let c=0;c<512;c+=32)for(let l=0;l<e;l+=32)s.fillRect(c,l,2,2);const o=s.createLinearGradient(0,0,512,0);o.addColorStop(0,r+"55"),o.addColorStop(1,"transparent"),s.fillStyle=o,s.fillRect(0,0,512,46),s.fillStyle=r,s.font="bold 16px Inter, monospace",s.textAlign="left",s.fillText(i.zone,14,30),s.fillStyle="rgba(255,255,255,0.38)",s.font="12px Inter, monospace",s.textAlign="right",s.fillText(i.tool,498,30),s.strokeStyle=r+"44",s.lineWidth=1,s.beginPath(),s.moveTo(0,48),s.lineTo(512,48),s.stroke();const a=Math.round(e*.27);return s.font=`${a}px sans-serif`,s.textAlign="center",s.fillText(i.emoji,512/2,e*.52),s.fillStyle="#fff",s.font=`bold ${Math.round(e*.1)}px Inter, monospace`,s.textAlign="center",s.shadowColor=r,s.shadowBlur=18,s.fillText(i.label,512/2,e*.72),s.shadowBlur=0,s.fillStyle=r+"bb",s.font=`${Math.round(e*.062)}px Inter, monospace`,s.textAlign="center",s.fillText("[ E ] or click to open",512/2,e*.88),s.strokeStyle=r+"55",s.lineWidth=2,s.beginPath(),s.moveTo(0,e-2),s.lineTo(512,e-2),s.stroke(),new Xo(n)}const go=.38,ye=A.wallT/2+.01,Ls=A.leftDoorX,Is=A.rightDoorX,fi=A.doorHalfW,Ih=A.mainDoorHalfW,Qu=[{minX:A.minX,maxX:-Ih,minZ:A.maxZ-ye,maxZ:A.maxZ+ye},{minX:Ih,maxX:A.maxX,minZ:A.maxZ-ye,maxZ:A.maxZ+ye},{minX:A.minX,maxX:A.maxX,minZ:A.minZ-ye,maxZ:A.minZ+ye},{minX:A.minX-ye,maxX:A.minX+ye,minZ:A.minZ,maxZ:A.maxZ},{minX:A.maxX-ye,maxX:A.maxX+ye,minZ:A.minZ,maxZ:A.maxZ},{minX:A.minX,maxX:Ls-fi,minZ:A.lobbyZ-ye,maxZ:A.lobbyZ+ye},{minX:Ls+fi,maxX:Is-fi,minZ:A.lobbyZ-ye,maxZ:A.lobbyZ+ye},{minX:Is+fi,maxX:A.maxX,minZ:A.lobbyZ-ye,maxZ:A.lobbyZ+ye},{minX:A.minX,maxX:Ls-fi,minZ:A.midZ-ye,maxZ:A.midZ+ye},{minX:Ls+fi,maxX:Is-fi,minZ:A.midZ-ye,maxZ:A.midZ+ye},{minX:Is+fi,maxX:A.maxX,minZ:A.midZ-ye,maxZ:A.midZ+ye},{minX:A.centerX-ye,maxX:A.centerX+ye,minZ:A.minZ,maxZ:A.lobbyZ},{minX:-80,maxX:80,minZ:68,maxZ:70},{minX:-80,maxX:80,minZ:-70,maxZ:-68},{minX:-70,maxX:-68,minZ:-70,maxZ:70},{minX:68,maxX:70,minZ:-70,maxZ:70}];let td=[];function qv(i){td=i}function $v(i,t,e){const n=Math.max(e.minX,Math.min(i,e.maxX)),s=Math.max(e.minZ,Math.min(t,e.maxZ)),r=i-n,o=t-s,a=r*r+o*o;if(a<go*go&&a>1e-6){const c=Math.sqrt(a),l=go-c;return{x:i+r/c*l,z:t+o/c*l}}return a===0?{x:i+go,z:t}:null}function Ha(i,t){let e=t.x,n=t.z;const s=[...Qu,...ju(),...td];for(let r=0;r<2;r++)for(const o of s){const a=$v(e,n,o);a&&(e=a.x,n=a.z)}return{x:e,z:n}}function Do(i){const t=i.x,e=i.z;if(e>A.maxZ||e<A.minZ||t<A.minX||t>A.maxX)return"OUTSIDE";if(e>A.lobbyZ)return"LOBBY";const n=t<A.centerX,s=e>A.midZ,r=e<=A.midZ;return s&&n?"OPS":s&&!n?"FUN":r&&n?"DESIGN":"ENGINEERING"}const Kv={mainDoor:{x:0,z:A.maxZ+.5},lobbyIn:{x:0,z:A.maxZ-1.5},opsEntry:{x:Ls,z:A.lobbyZ-1},funEntry:{x:Is,z:A.lobbyZ-1},designEntry:{x:Ls,z:A.midZ-1},engEntry:{x:Is,z:A.midZ-1}};function Jv(i,t){const e=Do(i),n=Do(t);if(e===n)return[{x:t.x,z:t.z}];const s={x:t.x,z:t.z},r=Kv,o={"OUTSIDE→LOBBY":[r.mainDoor,r.lobbyIn],"OUTSIDE→OPS":[r.mainDoor,r.lobbyIn,r.opsEntry],"OUTSIDE→FUN":[r.mainDoor,r.lobbyIn,r.funEntry],"OUTSIDE→DESIGN":[r.mainDoor,r.lobbyIn,r.opsEntry,r.designEntry],"OUTSIDE→ENGINEERING":[r.mainDoor,r.lobbyIn,r.funEntry,r.engEntry],"LOBBY→OPS":[r.opsEntry],"LOBBY→FUN":[r.funEntry],"LOBBY→DESIGN":[r.opsEntry,r.designEntry],"LOBBY→ENGINEERING":[r.funEntry,r.engEntry],"LOBBY→OUTSIDE":[r.mainDoor],"OPS→LOBBY":[r.opsEntry],"OPS→DESIGN":[r.designEntry],"OPS→FUN":[r.opsEntry,r.funEntry],"OPS→ENGINEERING":[r.opsEntry,r.funEntry,r.engEntry],"OPS→OUTSIDE":[r.opsEntry,r.mainDoor],"FUN→LOBBY":[r.funEntry],"FUN→ENGINEERING":[r.engEntry],"FUN→OPS":[r.funEntry,r.opsEntry],"FUN→DESIGN":[r.funEntry,r.opsEntry,r.designEntry],"FUN→OUTSIDE":[r.funEntry,r.mainDoor],"DESIGN→OPS":[r.designEntry],"DESIGN→LOBBY":[r.designEntry,r.opsEntry],"DESIGN→FUN":[r.designEntry,r.opsEntry,r.funEntry],"DESIGN→ENGINEERING":[r.designEntry,r.opsEntry,r.funEntry,r.engEntry],"DESIGN→OUTSIDE":[r.designEntry,r.opsEntry,r.mainDoor],"ENGINEERING→FUN":[r.engEntry],"ENGINEERING→LOBBY":[r.engEntry,r.funEntry],"ENGINEERING→OPS":[r.engEntry,r.funEntry,r.opsEntry],"ENGINEERING→DESIGN":[r.engEntry,r.funEntry,r.opsEntry,r.designEntry],"ENGINEERING→OUTSIDE":[r.engEntry,r.mainDoor]},a=`${e}→${n}`;return[...o[a]??[],s]}const As=5.5,jv=5,Dh=2,Nh=12,Qv=1.65,Uh=60,tx=64,ex=57;function nx(i,t,e){const n={};let s=Math.PI,r=0,o="flat",a=[],c=0,l=!1,h=!1,u=!1,d=.28,f=jv,g=0,_=0,m=0,p=22,M=38,v=!1;const w={active:!1,x:0,y:0,id:-1,ox:0,oy:0},U={active:!1,lx:0,ly:0,id:-1},T={active:!1,dist:0},b=document.getElementById("vjoy-base"),F=document.getElementById("vjoy-stick");document.addEventListener("keydown",W=>{if(n[W.code]=!0,W.code==="KeyR"&&(i.position.set(0,0,22),s=Math.PI,r=0,a=[],l=!1,ix("Respawned at Entrance")),W.code==="Tab"){W.preventDefault();const ot=["flat","overview","third","first"];C(ot[(ot.indexOf(o)+1)%ot.length])}W.code==="Escape"&&o!=="third"&&C("third")}),document.addEventListener("keyup",W=>{n[W.code]=!1}),document.addEventListener("mousemove",W=>{if(document.pointerLockElement===e){o==="first"&&(r=Math.max(-1.2,Math.min(.5,r-W.movementY*.002))),s-=W.movementX*.0025;return}if(h)if(o==="overview"){const ot=M*1.534*.9/window.innerHeight;m-=W.movementX*ot,p+=W.movementY*ot,m=Math.max(-60,Math.min(60,m)),p=Math.max(-60,Math.min(60,p)),v=!0,(Math.abs(W.movementX)>2||Math.abs(W.movementY)>2)&&(u=!0)}else o==="third"?(s-=W.movementX*.005,d=Math.max(-.05,Math.min(1,d+W.movementY*.003)),(Math.abs(W.movementX)>2||Math.abs(W.movementY)>2)&&(u=!0)):(s-=W.movementX*.005,(Math.abs(W.movementX)>2||Math.abs(W.movementY)>2)&&(u=!0))}),e.addEventListener("mousedown",W=>{W.button===0&&(h=!0,u=!1,o==="overview"&&(e.style.cursor="grabbing"))}),document.addEventListener("mouseup",W=>{W.button===0&&(h=!1,o==="overview"&&(e.style.cursor="grab"))}),e.addEventListener("contextmenu",W=>W.preventDefault()),e.addEventListener("wheel",W=>{if(o!=="overview"&&o!=="third")return;W.preventDefault();const ot=W.deltaMode===0?W.deltaY:W.deltaY*24,B=Math.pow(.997,ot);if(o==="overview"){const Z=M;M=Math.max(14,Math.min(60,M*B));const J=M-Z,$=Math.tan(t.fov*Math.PI/180/2),ut=window.innerWidth/window.innerHeight,gt=W.clientX/window.innerWidth-.5,At=-(W.clientY/window.innerHeight-.5);m-=gt*J*2*$*ut,p+=At*J*2*$,m=Math.max(-60,Math.min(60,m)),p=Math.max(-60,Math.min(60,p)),v=!0}else f=Math.max(Dh,Math.min(Nh,f*B))},{passive:!1}),e.addEventListener("touchstart",W=>{if(o!=="flat"){W.preventDefault();for(let ot=0;ot<W.changedTouches.length;ot++){const B=W.changedTouches[ot];o==="overview"?U.active||(U.active=!0,U.id=B.identifier,U.lx=B.clientX,U.ly=B.clientY,h=!0,u=!1):B.clientX<window.innerWidth*.5&&!w.active?(w.active=!0,w.id=B.identifier,w.ox=B.clientX,w.oy=B.clientY,w.x=0,w.y=0,b&&(b.style.left=B.clientX-40+"px",b.style.top=B.clientY-40+"px",b.style.display="block",F&&(F.style.transform="translate(-50%,-50%)"))):B.clientX>=window.innerWidth*.5&&!U.active&&(U.active=!0,U.id=B.identifier,U.lx=B.clientX,U.ly=B.clientY)}if(W.touches.length>=2){const ot=W.touches[0],B=W.touches[1],Z=B.clientX-ot.clientX,J=B.clientY-ot.clientY;T.active=!0,T.dist=Math.sqrt(Z*Z+J*J)}}},{passive:!1}),e.addEventListener("touchmove",W=>{if(o!=="flat"){W.preventDefault();for(let ot=0;ot<W.changedTouches.length;ot++){const B=W.changedTouches[ot];if(B.identifier===w.id){const Z=B.clientX-w.ox,J=B.clientY-w.oy,$=40,ut=Math.sqrt(Z*Z+J*J),gt=ut>$?$/ut:1;w.x=Z*gt/$,w.y=J*gt/$,F&&(F.style.transform=`translate(calc(-50% + ${Z*gt}px), calc(-50% + ${J*gt}px))`)}if(B.identifier===U.id){const Z=B.clientX-U.lx,J=B.clientY-U.ly;if(o==="overview"){const $=M*1.534*.9/window.innerHeight;m-=Z*$,p+=J*$,m=Math.max(-60,Math.min(60,m)),p=Math.max(-60,Math.min(60,p)),v=!0,(Math.abs(Z)>2||Math.abs(J)>2)&&(u=!0)}else s-=Z*.004,d=Math.max(-.05,Math.min(1,d+J*.003));U.lx=B.clientX,U.ly=B.clientY}}if(T.active&&W.touches.length>=2){const ot=W.touches[0],B=W.touches[1],Z=B.clientX-ot.clientX,J=B.clientY-ot.clientY,$=Math.sqrt(Z*Z+J*J);if(T.dist>0){const ut=T.dist/$;o==="overview"?M=Math.max(14,Math.min(60,M*ut)):o==="third"&&(f=Math.max(Dh,Math.min(Nh,f*ut)))}T.dist=$}}},{passive:!1}),e.addEventListener("touchend",W=>{if(o!=="flat"){W.preventDefault();for(let ot=0;ot<W.changedTouches.length;ot++){const B=W.changedTouches[ot];B.identifier===w.id&&(w.active=!1,w.x=0,w.y=0,w.id=-1,b&&(b.style.display="none")),B.identifier===U.id&&(U.active=!1,U.id=-1,h=!1)}W.touches.length<2&&(T.active=!1,T.dist=0)}},{passive:!1});function E(W){a=Jv({x:i.position.x,z:i.position.z},W),c=0,l=!0,v=!1,o==="overview"&&x(W)}function x(W){const ot=document.getElementById("overview-marker");if(!ot)return;const B=new D(W.x,0,W.z);B.project(t),ot.style.left=(B.x*.5+.5)*window.innerWidth+"px",ot.style.top=(-B.y*.5+.5)*window.innerHeight+"px",ot.style.display="block"}function C(W){var $;o=W;const ot=document.getElementById("overview-panel");ot&&(ot.style.display=o==="overview"?"flex":"none");const B=document.getElementById("overview-marker");B&&o!=="overview"&&(B.style.display="none"),(o==="third"||o==="overview")&&(($=document.exitPointerLock)==null||$.call(document)),W!=="third"&&(t.fov=Uh,t.updateProjectionMatrix());const Z="ontouchstart"in window||navigator.maxTouchPoints>0,J=document.getElementById("vjoy-zone");J&&(J.style.display=Z&&(W==="third"||W==="first")?"block":"none"),w.active=!1,w.x=0,w.y=0,b&&(b.style.display="none"),e.style.cursor=o==="overview"?"grab":"pointer",e.style.visibility=o==="flat"?"hidden":"visible",document.querySelectorAll(".vtbtn").forEach(ut=>ut.classList.toggle("active",ut.dataset.view===o))}const k=new D,P=new D,L=new D,V=new D,H=new D,Q=new D(0,1,0);function Y(W){V.copy(i.position);let ot=!1;if(o==="flat"){if(L.set(0,0,0),(n.KeyW||n.ArrowUp)&&(L.z-=1),(n.KeyS||n.ArrowDown)&&(L.z+=1),(n.KeyA||n.ArrowLeft)&&(L.x-=1),(n.KeyD||n.ArrowRight)&&(L.x+=1),(n.KeyW||n.KeyS||n.KeyA||n.KeyD||n.ArrowUp||n.ArrowDown||n.ArrowLeft||n.ArrowRight)&&l&&(l=!1,a=[]),l&&a.length>0&&L.lengthSq()===0){const J=a[c],$=J.x-i.position.x,ut=J.z-i.position.z,gt=Math.sqrt($*$+ut*ut);gt<.25?++c>=a.length&&(l=!1,a=[]):L.set($/gt,0,ut/gt)}if(L.lengthSq()>0){L.normalize(),i.position.x+=L.x*As*W,i.position.z+=L.z*As*W;let $=Math.atan2(L.x,L.z)-i.rotation.y;for(;$>Math.PI;)$-=Math.PI*2;for(;$<-Math.PI;)$+=Math.PI*2;i.rotation.y+=$*Math.min(1,20*W),ot=!0}const Z=Ha(V,i.position);i.position.set(Z.x,0,Z.z),t.position.set(i.position.x,60,i.position.z),t.lookAt(i.position.x,0,i.position.z)}else if(o==="overview"){if(l){const Z=1-Math.exp(-8*W);m+=(i.position.x-m)*Z,p+=(i.position.z-p)*Z,v=!1}else if(!v){const Z=1-Math.exp(-5*W);m+=(i.position.x-m)*Z,p+=(i.position.z-p)*Z}H.set(m,M,p+1);const B=t.position.distanceTo(H)>22?20:8;if(t.position.lerp(H,1-Math.exp(-B*W)),t.lookAt(m,0,p),l&&a.length>0){const Z=a[c],J=Z.x-i.position.x,$=Z.z-i.position.z,ut=Math.sqrt(J*J+$*$);ut<.25?++c>=a.length&&(l=!1,a=[]):(i.position.x+=J/ut*As*1.4*W,i.position.z+=$/ut*As*1.4*W,i.rotation.y=Math.atan2(J,$),ot=!0)}}else if(o==="third"){const B=it(W);ot=B.isMoving;const Z=Ha(V,i.position);if(i.position.set(Z.x,0,Z.z),ot&&!h){let N=i.rotation.y-s;for(;N>Math.PI;)N-=Math.PI*2;for(;N<-Math.PI;)N+=Math.PI*2;const Xt=B.fromKeys?5:3;s+=N*Xt*W}const J=nt(i.position.x,i.position.z,s,f),$=J<f*.85,ut=i.position.y+1.2;g+=W*12,_+=((ot?1:0)-_)*Math.min(1,8*W);const gt=Math.sin(g)*.035*_;H.set(i.position.x-Math.sin(s)*Math.cos(d)*J,ut+Math.sin(d)*J+gt,i.position.z-Math.cos(s)*Math.cos(d)*J),J<f*.92?t.position.copy(H):t.position.lerp(H,1-Math.exp(-14*W)),t.lookAt(i.position.x,ut,i.position.z);const At=$?ex:ot?tx:Uh;t.fov+=(At-t.fov)*Math.min(1,6*W),t.updateProjectionMatrix()}else{ot=it(W).isMoving;const B=Ha(V,i.position);i.position.set(B.x,0,B.z),t.position.set(i.position.x,Qv,i.position.z),t.rotation.order="YXZ",t.rotation.set(r,Math.PI+s,0)}return ot}function it(W){t.getWorldDirection(k),k.y=0,k.normalize(),P.crossVectors(k,Q).normalize(),L.set(0,0,0),(n.KeyW||n.ArrowUp)&&L.addScaledVector(k,1),(n.KeyS||n.ArrowDown)&&L.addScaledVector(k,-1),(n.KeyA||n.ArrowLeft)&&L.addScaledVector(P,-1),(n.KeyD||n.ArrowRight)&&L.addScaledVector(P,1),w.active&&(L.addScaledVector(k,-w.y),L.addScaledVector(P,w.x),l&&(l=!1,a=[]));const ot=n.KeyW||n.KeyS||n.KeyA||n.KeyD||n.ArrowUp||n.ArrowDown||n.ArrowLeft||n.ArrowRight,B=ot;if(ot&&l&&(l=!1,a=[]),l&&a.length>0&&L.lengthSq()===0){const Z=a[c],J=Z.x-i.position.x,$=Z.z-i.position.z,ut=Math.sqrt(J*J+$*$);ut<.25?++c>=a.length&&(l=!1,a=[]):L.set(J/ut,0,$/ut)}if(L.lengthSq()>0){L.normalize(),i.position.x+=L.x*As*W,i.position.z+=L.z*As*W;let J=Math.atan2(L.x,L.z)-i.rotation.y;for(;J>Math.PI;)J-=Math.PI*2;for(;J<-Math.PI;)J+=Math.PI*2;return i.rotation.y+=J*Math.min(1,20*W),{isMoving:!0,fromKeys:B}}return{isMoving:!1,fromKeys:B}}function nt(W,ot,B,Z){const J=-Math.sin(B),$=-Math.cos(B);let ut=Z;for(const gt of Qu){const At=ct(W,ot,J,$,gt);At>.3&&At<ut&&(ut=At-.25)}return Math.max(.8,ut)}function ct(W,ot,B,Z,J){const $=B===0?1e10:1/B,ut=Z===0?1e10:1/Z,gt=(J.minX-W)*$,At=(J.maxX-W)*$,N=(J.minZ-ot)*ut,Xt=(J.maxZ-ot)*ut,Ht=Math.max(Math.min(gt,At),Math.min(N,Xt)),ce=Math.min(Math.max(gt,At),Math.max(N,Xt));return ce<.001||Ht>ce?1/0:Ht>.001?Ht:1/0}return C(o),{update:Y,navigate:E,setMode:C,getMode:()=>o,isDragMoved:()=>u,setNavPath:W=>{a=W,c=0,l=!0}}}function ix(i){const t=document.getElementById("hud-toast");t&&(t.textContent=i,t.classList.add("show"),clearTimeout(t._t),t._t=setTimeout(()=>t.classList.remove("show"),2e3))}function sx(i){const t=[];return rx(i,t),ox(i,t),ax(i,t),cx(i,t),lx(i,t),{colliders:t}}const ie={oak:()=>new Bt({color:11565120,roughness:.82,metalness:0}),white:()=>new Bt({color:15789284,roughness:.72,metalness:0}),dark:()=>new Bt({color:3024928,roughness:.62,metalness:.08}),metal:()=>new Bt({color:9474200,roughness:.38,metalness:.8}),chair:()=>new Bt({color:2767456,roughness:.82,metalness:0}),pink:()=>new Bt({color:13656192,roughness:.72,metalness:0}),green:()=>new Bt({color:4761712,roughness:.72,metalness:0}),amber:()=>new Bt({color:15241280,roughness:.72,metalness:0}),blue:()=>new Bt({color:4227264,roughness:.72,metalness:0}),screen:()=>new Bt({color:1054752,emissive:1056832,emissiveIntensity:.6,roughness:.08}),bean:()=>new Bt({color:9453728,roughness:.92,metalness:0}),sofa:()=>new Bt({color:4878400,roughness:.88,metalness:0})};function wn(i,t,e,n,s,r,o,a,c,l=.12){const h=new wt(new Qt(r,o,a),t);return h.position.set(e,n,s),i.add(h),c&&c.push({minX:e-r/2-l,maxX:e+r/2+l,minZ:s-a/2-l,maxZ:s+a/2+l}),h}function Ai(i,t,e,n,s,r,o){const a=o??ie.oak(),c=.76,l=.06,h=c-l,u=.05;wn(i,a,t,c-l/2,e,n,l,s,r,.1);const d=[t-n/2+.12,t+n/2-.12],f=[e-s/2+.12,e+s/2-.12];d.forEach(g=>f.forEach(_=>{const m=new wt(new ke(u,u,h,6),ie.metal());m.position.set(g,h/2,_),i.add(m)}))}function fn(i,t,e,n=0,s,r){const o=r??ie.chair(),a=new ni;a.position.set(t,0,e),a.rotation.y=n,i.add(a);const c=new wt(new Qt(.5,.07,.5),o);c.position.y=.46,a.add(c);const l=new wt(new Qt(.5,.52,.06),o);l.position.set(0,.75,-.22),a.add(l);const h=ie.metal();[[-.2,-.2],[.2,-.2],[-.2,.2],[.2,.2]].forEach(([u,d])=>{const f=new wt(new ke(.03,.03,.46,5),h);f.position.set(u,.23,d),a.add(f)}),s&&s.push({minX:t-.35,maxX:t+.35,minZ:e-.35,maxZ:e+.35})}function An(i,t,e,n,s=0){const r=new ni;r.position.set(t,e,n),r.rotation.y=s,i.add(r);const o=new wt(new Qt(.54,.32,.04),ie.screen());o.position.y=.22,r.add(o);const a=new wt(new ke(.015,.015,.18,5),ie.metal());a.position.y=.07,r.add(a);const c=new wt(new Qt(.22,.02,.14),ie.metal());c.position.y=0,r.add(c)}function Nn(i,t,e){const n=new wt(new ke(.15,.1,.3,7),ie.amber());n.position.set(t,.15,e),i.add(n);const s=new wt(new be(.3,8,6),ie.green());s.position.set(t,.55,e),i.add(s)}function rx(i,t){Ai(i,-11,-14,4.5,2,t),fn(i,-11-2.6,-14-.5,0,t),fn(i,-11-2.6,-14+.5,0,t),fn(i,-11+2.6,-14-.5,Math.PI,t),fn(i,-11+2.6,-14+.5,Math.PI,t),fn(i,-11,-14-1.2,Math.PI/2,t,ie.pink()),fn(i,-11,-14+1.2,-Math.PI/2,t,ie.pink());const s=new wt(new Qt(5,2.4,.06),new Bt({color:16448248,roughness:.5}));s.position.set(-11,1.8,A.minZ+.1),i.add(s),wn(i,ie.white(),A.minX+.5,1,-18,.5,2,3,t),Ai(i,A.minX+1.2,-12,2,.8,t),An(i,A.minX+1,.76,-14+1.8,Math.PI/2),An(i,A.minX+1,.76,-14+2.2,Math.PI/2),fn(i,A.minX+2,-12,Math.PI/2,t,ie.pink()),Nn(i,A.minX+.5,A.midZ+.6),Nn(i,-3,A.minZ+.6)}function ox(i,t){[-20,-16,-12,-8].forEach(r=>{Ai(i,A.maxX-1.4,r,1.8,.7,t,ie.white()),An(i,A.maxX-1.1,.76,r-.18,-Math.PI/2),An(i,A.maxX-1.1,.76,r+.18,-Math.PI/2),fn(i,A.maxX-2.5,r,-Math.PI/2,t,ie.blue())}),wn(i,ie.dark(),7,1.1,A.minZ+.6,.8,2.2,.6,t),wn(i,ie.dark(),8,1.1,A.minZ+.6,.8,2.2,.6,t),wn(i,ie.dark(),9,1.1,A.minZ+.6,.8,2.2,.6,t),[-4,-3,-2].forEach(r=>{const o=new wt(new Qt(.6,.02,.4),new Bt({color:65348,emissive:65348,emissiveIntensity:3}));o.position.set(11+r,1.6,A.minZ+.32),i.add(o)}),Ai(i,11,-13,3,.75,t),Ai(i,11,-15,3,.75,t),An(i,11-.8,.76,-13),An(i,11,.76,-13),An(i,11+.8,.76,-13),An(i,11-.8,.76,-15,Math.PI),An(i,11,.76,-15,Math.PI),An(i,11+.8,.76,-15,Math.PI),[-1,0,1].forEach(r=>{fn(i,11+r,-14+1.8,Math.PI,t,ie.blue()),fn(i,11+r,-14-1.8,0,t,ie.blue())}),Nn(i,A.maxX-.5,A.midZ+.6),Nn(i,15,A.minZ+.6)}function ax(i,t){const s=new wt(new ke(1.4,1.4,.06,16),ie.oak());s.position.set(-11,.74,0),i.add(s),t.push({minX:-11-1.6,maxX:-11+1.6,minZ:0-1.6,maxZ:0+1.6});for(let o=0;o<4;o++){const a=o*Math.PI/2+Math.PI/4,c=new wt(new ke(.04,.04,.74,6),ie.metal());c.position.set(-11+Math.cos(a)*1.1,.37,0+Math.sin(a)*1.1),i.add(c)}for(let o=0;o<6;o++){const a=o/6*Math.PI*2,c=2;fn(i,-11+Math.cos(a)*c,0+Math.sin(a)*c,a+Math.PI,null,ie.amber())}const r=new wt(new Qt(3.5,2,.08),ie.screen());r.position.set(-11,2.1,A.minX+.1),r.rotation.y=Math.PI/2,i.add(r),wn(i,ie.white(),A.minX+.5,.45,0+2.5,.5,.9,2,t),Nn(i,A.minX+.5,A.lobbyZ-.6),Nn(i,-3,A.midZ+.5)}function cx(i,t){wn(i,ie.sofa(),11-2.5,.44,0+1.5,3.2,.88,1,t,.1),wn(i,ie.sofa(),11-3.5,.44,0,1,.88,2.2,t,.1),Ai(i,11-1.8,0-.2,1.2,.7,t);const s=ie.bean();for(let c=0;c<3;c++){const l=14+c*1.4,h=new wt(new be(.42,10,8),s);h.scale.y=.65,h.position.set(l,.28,0),i.add(h),t.push({minX:l-.55,maxX:l+.55,minZ:0-.55,maxZ:0+.55})}const r=new Bt({color:2228292,roughness:.6,metalness:.3});wn(i,r,A.maxX-1,1.1,0+2.5,.9,2.2,.7,t);const o=new wt(new Qt(.55,.44,.04),new Bt({color:2245887,emissive:1127406,emissiveIntensity:1.5}));o.position.set(A.maxX-.72,1.6,0+2.15),i.add(o),Ai(i,11+1.5,0-2.5,1.6,.8,t,ie.dark());const a=new wt(new Qt(4,2.2,.08),ie.screen());a.position.set(9,2.3,A.maxX-.1),a.rotation.y=-Math.PI/2,i.add(a),Nn(i,A.maxX-.5,A.lobbyZ-.6),Nn(i,7,A.midZ+.5)}function lx(i,t){const e=(A.lobbyZ+A.maxZ)/2;wn(i,ie.white(),-8,.9,e-1,3,1.8,.7,t),[6,8,10].forEach(c=>{fn(i,c,e+.5,Math.PI,t,ie.amber())}),Ai(i,8,e+1.8,1.5,.6,t);const n=new wt(new Uc(2.2,32),new Bt({color:2245802,roughness:.4}));n.rotation.x=-Math.PI/2,n.position.set(0,.07,e),i.add(n);const s=document.createElement("canvas");s.width=512,s.height=128;const r=s.getContext("2d");r.fillStyle="#3366ff",r.font="bold 72px Inter, sans-serif",r.textAlign="center",r.fillText("SPACEWORK",256,88);const o=new wt(new ii(4,1),new Bt({map:new Xo(s),roughness:.4,transparent:!0}));o.rotation.x=-Math.PI/2,o.position.set(0,.08,e),i.add(o),Nn(i,-5,A.maxZ-1.2),Nn(i,5,A.maxZ-1.2),wn(i,ie.metal(),0,1,A.lobbyZ+1.5,.4,2,.4,t);const a=new wt(new Qt(.38,.28,.04),ie.screen());a.position.set(0,1.9,A.lobbyZ+1.28),i.add(a)}const hx="#0f1117",ux="rgba(34,58,28,0.95)",dx="rgba(230,225,215,0.12)",fx=[{name:"LOBBY",x1:A.minX,x2:A.maxX,z1:A.lobbyZ,z2:A.maxZ,fill:"rgba(180,175,210,0.18)",border:"rgba(180,175,220,0.55)",label:"#ccc"},{name:"OPS",x1:A.minX,x2:A.centerX,z1:A.midZ,z2:A.lobbyZ,fill:"rgba(200,115,20,0.20)",border:"rgba(220,130,30,0.60)",label:"#fa9"},{name:"FUN",x1:A.centerX,x2:A.maxX,z1:A.midZ,z2:A.lobbyZ,fill:"rgba(20,170,90,0.20)",border:"rgba(30,200,100,0.55)",label:"#6fb"},{name:"DESIGN",x1:A.minX,x2:A.centerX,z1:A.minZ,z2:A.midZ,fill:"rgba(190,45,95,0.20)",border:"rgba(220,60,110,0.55)",label:"#f9b"},{name:"ENGINEERING",x1:A.centerX,x2:A.maxX,z1:A.minZ,z2:A.midZ,fill:"rgba(25,90,200,0.20)",border:"rgba(40,120,230,0.55)",label:"#8bf"}],dn=A.doorHalfW,rc=A.mainDoorHalfW,Ds=A.leftDoorX,Ns=A.rightDoorX,px=[[A.minX,A.maxZ,-rc,A.maxZ],[rc,A.maxZ,A.maxX,A.maxZ],[A.minX,A.minZ,A.maxX,A.minZ],[A.minX,A.minZ,A.minX,A.maxZ],[A.maxX,A.minZ,A.maxX,A.maxZ],[A.minX,A.lobbyZ,Ds-dn,A.lobbyZ],[Ds+dn,A.lobbyZ,Ns-dn,A.lobbyZ],[Ns+dn,A.lobbyZ,A.maxX,A.lobbyZ],[A.minX,A.midZ,Ds-dn,A.midZ],[Ds+dn,A.midZ,Ns-dn,A.midZ],[Ns+dn,A.midZ,A.maxX,A.midZ],[A.centerX,A.minZ,A.centerX,A.lobbyZ]];class mx{constructor(t){this._nav=t,this._peers=new Map;const e=document.createElement("canvas");e.id="flat-map-canvas",Object.assign(e.style,{position:"fixed",inset:"0",width:"100%",height:"100%",zIndex:"6",display:"none",cursor:"crosshair"}),document.body.appendChild(e),this._cvs=e,this._ctx=e.getContext("2d"),this._zoom=14,this._panX=0,this._panZ=-6,this._dragging=!1,this._dragMoved=!1,this._lx=0,this._ly=0,this._ping=null,this._setupMouse(),this._setupTouch(),this._resize(),window.addEventListener("resize",()=>this._resize())}show(){this._cvs.style.display="block"}hide(){this._cvs.style.display="none"}setPeer(t,e,n,s){this._peers.set(t,{x:e,z:n,name:s})}removePeer(t){this._peers.delete(t)}setTalking(t){this._talking=t}update(t){const e=this._cvs.width,n=this._cvs.height,s=this._ctx;s.clearRect(0,0,e,n),this._drawBg(s,e,n),this._drawGrid(s,e,n),this._drawBuilding(s),this._drawRooms(s),this._drawWalls(s),this._drawDoors(s),this._drawPeers(s),this._drawPlayer(s,t),this._drawNavPing(s),this._drawHints(s,e,n)}_fire(t,e){const[n,s]=this._c2w(t,e);this._nav({x:n,z:s}),this._ping={cx:t,cy:e,born:performance.now()}}centreOn(t,e){this._panX=t,this._panZ=e}_w2c(t,e){const n=this._cvs.width/2+(t-this._panX)*this._zoom,s=this._cvs.height/2+(e-this._panZ)*this._zoom;return[n,s]}_c2w(t,e){const n=(t-this._cvs.width/2)/this._zoom+this._panX,s=(e-this._cvs.height/2)/this._zoom+this._panZ;return[n,s]}_wr(t){return t*this._zoom}_setupMouse(){const t=this._cvs;t.addEventListener("wheel",e=>{e.preventDefault();const n=t.getBoundingClientRect(),s=e.clientX-n.left,r=e.clientY-n.top,[o,a]=this._c2w(s,r),c=e.deltaMode===0?e.deltaY:e.deltaY*24,l=Math.pow(.997,c);this._zoom=Math.max(6,Math.min(55,this._zoom*l));const[h,u]=this._c2w(s,r);this._panX+=o-h,this._panZ+=a-u},{passive:!1}),t.addEventListener("mousedown",e=>{this._dragging=!0,this._dragMoved=!1,this._lx=e.clientX,this._ly=e.clientY,t.style.cursor="grabbing"}),document.addEventListener("mousemove",e=>{if(!this._dragging)return;const n=e.clientX-this._lx,s=e.clientY-this._ly;this._panX-=n/this._zoom,this._panZ-=s/this._zoom,this._lx=e.clientX,this._ly=e.clientY,(Math.abs(n)>4||Math.abs(s)>4)&&(this._dragMoved=!0)}),document.addEventListener("mouseup",e=>{if(!this._dragging||(this._dragging=!1,t.style.cursor="crosshair",this._dragMoved))return;const n=t.getBoundingClientRect();this._fire(e.clientX-n.left,e.clientY-n.top)})}_setupTouch(){const t=this._cvs;let e=0,n=0,s=!1,r=0;t.addEventListener("touchstart",o=>{if(o.preventDefault(),s=!1,o.touches.length===1)e=o.touches[0].clientX,n=o.touches[0].clientY,this._lx=e,this._ly=n;else if(o.touches.length===2){const a=o.touches[1].clientX-o.touches[0].clientX,c=o.touches[1].clientY-o.touches[0].clientY;r=Math.sqrt(a*a+c*c)}},{passive:!1}),t.addEventListener("touchmove",o=>{if(o.preventDefault(),o.touches.length===1){const a=o.touches[0].clientX-this._lx,c=o.touches[0].clientY-this._ly;this._panX-=a/this._zoom,this._panZ-=c/this._zoom,this._lx=o.touches[0].clientX,this._ly=o.touches[0].clientY,(Math.abs(a)>4||Math.abs(c)>4)&&(s=!0)}else if(o.touches.length===2){const a=o.touches[1].clientX-o.touches[0].clientX,c=o.touches[1].clientY-o.touches[0].clientY,l=Math.sqrt(a*a+c*c),h=l/(r||l),u=(o.touches[0].clientX+o.touches[1].clientX)/2,d=(o.touches[0].clientY+o.touches[1].clientY)/2,[f,g]=this._c2w(u,d);this._zoom=Math.max(6,Math.min(55,this._zoom*h));const[_,m]=this._c2w(u,d);this._panX+=f-_,this._panZ+=g-m,r=l,s=!0}},{passive:!1}),t.addEventListener("touchend",o=>{if(o.touches.length===0&&!s&&o.changedTouches.length===1){const a=t.getBoundingClientRect();this._fire(o.changedTouches[0].clientX-a.left,o.changedTouches[0].clientY-a.top)}},{passive:!1})}_resize(){this._cvs.width=window.innerWidth,this._cvs.height=window.innerHeight}_drawBg(t,e,n){t.fillStyle=hx,t.fillRect(0,0,e,n)}_drawGrid(t,e,n){const s=this._zoom*4;if(s<10)return;t.strokeStyle="rgba(255,255,255,0.04)",t.lineWidth=1;const r=(e/2-this._panX*this._zoom)%s;for(let a=r;a<e;a+=s)t.beginPath(),t.moveTo(a,0),t.lineTo(a,n),t.stroke();const o=(n/2-this._panZ*this._zoom)%s;for(let a=o;a<n;a+=s)t.beginPath(),t.moveTo(0,a),t.lineTo(e,a),t.stroke()}_drawBuilding(t){const[e,n]=this._w2c(A.minX-20,A.minZ-20),[s,r]=this._w2c(A.maxX+20,A.maxZ+20);t.fillStyle=ux,t.fillRect(Math.min(e,s),Math.min(n,r),Math.abs(s-e),Math.abs(r-n));const[o,a]=this._w2c(A.minX,A.maxZ),[c,l]=this._w2c(A.maxX,A.minZ);t.fillStyle=dx,t.fillRect(Math.min(o,c),Math.min(a,l),Math.abs(c-o),Math.abs(l-a))}_drawRooms(t){fx.forEach(e=>{const[n,s]=this._w2c(e.x1,e.z2),[r,o]=this._w2c(e.x2,e.z1),a=Math.min(n,r),c=Math.min(s,o),l=Math.abs(r-n),h=Math.abs(o-s);t.fillStyle=e.fill,t.fillRect(a,c,l,h),t.strokeStyle=e.border,t.lineWidth=1.5,t.strokeRect(a+1,c+1,l-2,h-2),l>50&&h>30&&(t.fillStyle=e.label,t.font=`bold ${Math.max(9,Math.min(13,l*.11))}px Inter, monospace`,t.textAlign="center",t.textBaseline="middle",t.shadowColor="rgba(0,0,0,0.8)",t.shadowBlur=4,t.fillText(e.name,a+l/2,c+h/2),t.shadowBlur=0)})}_drawWalls(t){t.strokeStyle="#4a4a6a",t.lineWidth=Math.max(2,this._wr(A.wallT)*.8),t.lineCap="round",px.forEach(([e,n,s,r])=>{const[o,a]=this._w2c(e,n),[c,l]=this._w2c(s,r);t.beginPath(),t.moveTo(o,a),t.lineTo(c,l),t.stroke()})}_drawDoors(t){const e=[{x:0,z:A.maxZ,w:rc*2},{x:Ds,z:A.lobbyZ,w:dn*2},{x:Ns,z:A.lobbyZ,w:dn*2},{x:Ds,z:A.midZ,w:dn*2},{x:Ns,z:A.midZ,w:dn*2}];t.strokeStyle="rgba(255,220,100,0.60)",t.lineWidth=Math.max(3,this._wr(A.wallT)*.9),t.lineCap="square",e.forEach(n=>{const[s,r]=this._w2c(n.x,n.z),o=this._wr(n.w/2);Math.abs(n.z-A.maxZ)<.1||Math.abs(n.z-A.lobbyZ)<.1||Math.abs(n.z-A.midZ)<.1?(t.beginPath(),t.moveTo(s-o,r),t.lineTo(s+o,r),t.stroke()):(t.beginPath(),t.moveTo(s,r-o),t.lineTo(s,r+o),t.stroke())})}_drawPeers(t){const e=performance.now()/1e3;this._peers.forEach(({x:n,z:s,name:r},o)=>{var u;const[a,c]=this._w2c(n,s),l=Math.max(5,this._wr(.4)),h=(u=this._talking)==null?void 0:u.has(o);if(h){const d=.5+Math.sin(e*6)*.5,f=l+4+d*4;t.beginPath(),t.arc(a,c,f,0,Math.PI*2),t.strokeStyle=`rgba(0,255,136,${.6+d*.4})`,t.lineWidth=2.5,t.shadowColor="#00ff88",t.shadowBlur=10,t.stroke(),t.shadowBlur=0}t.beginPath(),t.arc(a,c,l,0,Math.PI*2),t.fillStyle=h?"rgba(0,255,120,0.9)":"rgba(255,120,150,0.85)",t.fill(),t.strokeStyle=h?"#00ff88":"#ff88aa",t.lineWidth=1.5,t.stroke(),l>5&&(t.fillStyle="#fff",t.font=`bold ${Math.max(8,l*1.1)}px Inter,monospace`,t.textAlign="center",t.textBaseline="bottom",t.shadowColor="#000",t.shadowBlur=3,t.fillText(r,a,c-l-2),t.shadowBlur=0)})}_drawPlayer(t,e){var h;const[n,s]=this._w2c(e.x,e.z),r=Math.max(6,this._wr(.45)),o=performance.now()/600,a=r+Math.sin(o)*r*.35,c=(h=this._talking)==null?void 0:h.has("self"),l=performance.now()/1e3;if(c){const u=.5+Math.sin(l*6)*.5,d=r+5+u*5;t.beginPath(),t.arc(n,s,d,0,Math.PI*2),t.strokeStyle=`rgba(0,255,136,${.7+u*.3})`,t.lineWidth=3,t.shadowColor="#00ff88",t.shadowBlur=14,t.stroke(),t.shadowBlur=0}else t.beginPath(),t.arc(n,s,a,0,Math.PI*2),t.strokeStyle="rgba(0,255,255,0.25)",t.lineWidth=2,t.stroke();t.shadowColor=c?"#00ff88":"#00ffff",t.shadowBlur=10,t.beginPath(),t.arc(n,s,r,0,Math.PI*2),t.fillStyle=c?"#00ff88":"#00e5ff",t.fill(),t.shadowBlur=0,t.fillStyle="#fff",t.font=`bold ${Math.max(9,r*1.2)}px Inter,monospace`,t.textAlign="center",t.textBaseline="bottom",t.shadowColor="#000",t.shadowBlur=3,t.fillText("YOU",n,s-r-3),t.shadowBlur=0}_drawNavPing(t){if(!this._ping)return;const e=performance.now()-this._ping.born,n=600;if(e>n){this._ping=null;return}const s=e/n,r=1-s,o=8+s*18,{cx:a,cy:c}=this._ping;t.globalAlpha=r,t.strokeStyle="#ffffff",t.lineWidth=2;const l=6;t.beginPath(),t.moveTo(a-l,c),t.lineTo(a+l,c),t.moveTo(a,c-l),t.lineTo(a,c+l),t.stroke(),t.strokeStyle="#00ffff",t.lineWidth=1.5,t.beginPath(),t.arc(a,c,o,0,Math.PI*2),t.stroke(),t.globalAlpha=1}_drawHints(t,e,n){t.fillStyle="rgba(255,255,255,0.22)",t.font="11px Inter, monospace",t.textAlign="center",t.textBaseline="bottom",t.fillText("Click to walk  ·  Scroll to zoom  ·  Drag to pan  ·  WASD to move",e/2,n-8)}}const _o=i=>"#"+i.toString(16).padStart(6,"0");class gx{constructor(t){this._onSelect=t,this._selected=parseInt(localStorage.getItem("spaceAvatarId")??"0",10),this._el=this._build(),document.body.appendChild(this._el)}show(){this._el.classList.remove("ap-hidden"),this._sync()}hide(){this._el.classList.add("ap-hidden")}getSelected(){return this._selected}_build(){const t=document.createElement("div");return t.id="avatar-picker",t.className="ap-hidden",t.innerHTML=`
      <div class="ap-panel">
        <div class="ap-head">
          <span class="ap-title">Choose Your Avatar</span>
          <button class="ap-close" aria-label="Close">✕</button>
        </div>
        <div class="ap-grid">
          ${ts.map(e=>this._card(e)).join("")}
        </div>
        <p class="ap-hint">Your selection is saved automatically</p>
      </div>
    `,t.querySelector(".ap-close").addEventListener("click",()=>this.hide()),t.addEventListener("click",e=>{e.target===t&&this.hide()}),t.querySelectorAll(".ap-card").forEach(e=>{e.addEventListener("click",()=>{const n=parseInt(e.dataset.id,10);this._selected=n,localStorage.setItem("spaceAvatarId",String(n)),this._sync(),this._onSelect(n)})}),t}_sync(){this._el.querySelectorAll(".ap-card").forEach(t=>t.classList.toggle("ap-active",parseInt(t.dataset.id,10)===this._selected))}_card(t){const e=_o(t.skin),n=_o(t.hair),s=_o(t.outfit),r=_o(t.accent);return`
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
            <circle cx="10" cy="62" r="5" fill="${e}"/>
            <circle cx="50" cy="62" r="5" fill="${e}"/>
            <!-- Legs -->
            <rect x="16" y="62" width="11" height="14" rx="4" fill="${s}"/>
            <rect x="33" y="62" width="11" height="14" rx="4" fill="${s}"/>
            <!-- Boots -->
            <rect x="15" y="73" width="13" height="6" rx="2" fill="#111"/>
            <rect x="32" y="73" width="13" height="6" rx="2" fill="#111"/>
          </svg>
        </div>
        <div class="ap-label">${t.label}</div>
        <div class="ap-tick">✓</div>
      </div>
    `}}const _x=[{name:"OUTSIDE",color:"#88cc66",mapColor:"rgba(70,120,50,0.35)",border:"#66aa44",desc:"Outside the building"},{name:"LOBBY",color:"#ffffff",mapColor:"rgba(200,200,230,0.40)",border:"#aaaacc",desc:"Reception & Entrance"},{name:"OPS",color:"#ffaa44",mapColor:"rgba(200,120,20,0.40)",border:"#ffaa44",desc:"Operations & Support"},{name:"FUN",color:"#44ffaa",mapColor:"rgba(20,180,100,0.40)",border:"#44ffaa",desc:"Chill & Social"},{name:"DESIGN",color:"#ff6ba0",mapColor:"rgba(200,50,100,0.40)",border:"#ff6ba0",desc:"UI/UX & 3D Design"},{name:"ENGINEERING",color:"#44aaff",mapColor:"rgba(30,100,200,0.40)",border:"#44aaff",desc:"Development & Code"}],re={minX:-26,maxX:26,minZ:-27,maxZ:28,W:180,H:200};let gr,xn;function vx(i,t,e,n,s){const r=window._spaceUsername||"You",o=parseInt(localStorage.getItem("spaceAvatarId")??"0",10),a=Xu(r,o);a.position.set(0,0,22),i.add(a);const c=new gx(b=>{qu(a,r,b),s==null||s(b)}),l=document.getElementById("avatar-btn");l&&l.addEventListener("click",()=>c.show());const{colliders:h}=sx(i);qv(h);const u=nx(a,t,e.domElement),d=new Wu;let f="",g=u.getMode();const _=new mx(b=>u.navigate(b)),m=[],p=[];i.traverse(b=>{b.userData.mapHide&&m.push(b),b.userData.mapShow&&p.push(b)}),m.forEach(b=>{b.visible=!1}),p.forEach(b=>{b.visible=!1}),_.centreOn(a.position.x,a.position.z),_.show();const M=document.getElementById("minimap");M&&(M.style.display="none");function v(b){m.forEach(E=>{E.visible=b!=="overview"&&b!=="flat"}),p.forEach(E=>{E.visible=b==="overview"}),a.visible=b!=="first",b==="flat"?(_.centreOn(a.position.x,a.position.z),_.show()):_.hide();const F=document.getElementById("minimap");F&&(F.style.display=b==="flat"?"none":"")}xx(u);function w(){const b=Do(a.position);b!==f&&(f=b,n==null||n(f))}function U(){const b=document.getElementById("mode-badge");if(!b)return;const F=u.getMode(),E={flat:"🎮 FLAT MAP",overview:"🗺 3D MAP",third:"👤 3RD PERSON",first:"👁 1ST PERSON"};b.textContent=E[F]??F;const x=F==="flat"||F==="overview";b.style.background=x?"rgba(255,160,0,0.2)":"rgba(0,100,255,0.2)",b.style.borderColor=x?"rgba(255,160,0,0.4)":"rgba(0,150,255,0.4)",b.style.color=x?"#ffaa00":"#4af"}function T(){requestAnimationFrame(T);const b=d.getDelta(),F=u.update(b);Ku(a,F,b),w(),U();const E=u.getMode();E!==g&&(g=E,v(E)),Sx(a.position,E),E==="flat"&&_.update(a.position)}return T(),{getPosition:()=>a.position.clone(),getRotation:()=>a.rotation.clone(),navigate:b=>u.navigate(b),isDragMoved:()=>u.isDragMoved(),getMode:()=>u.getMode(),setView:b=>{u.setMode(b),v(b)},setStatus:b=>Zu(a,b),setSelfTalking:(b,F)=>Yu(a,b,F),setTalkingPeers:b=>_.setTalking(b),peerJoin:(b,F)=>_.setPeer(b,0,0,F),peerMove:(b,F,E,x)=>_.setPeer(b,F,E,x),peerLeave:b=>_.removePeer(b)}}function xx(i,t){const e=document.getElementById("minimap-canvas");e&&(e.style.cursor="crosshair",e.addEventListener("click",n=>{const s=e.getBoundingClientRect(),r=(n.clientX-s.left)/s.width*re.W,o=(n.clientY-s.top)/s.height*re.H,a=re.minX+r/re.W*(re.maxX-re.minX),c=re.maxZ-o/re.H*(re.maxZ-re.minZ);i.navigate({x:a,z:c}),yx(r,o)}))}function yx(i,t){xn&&(xn.strokeStyle="#fff",xn.lineWidth=1.5,xn.globalAlpha=.9,xn.beginPath(),xn.arc(i,t,7,0,Math.PI*2),xn.stroke(),xn.globalAlpha=1)}function Mx(){gr=document.getElementById("minimap-canvas"),gr&&(gr.width=re.W,gr.height=re.H,xn=gr.getContext("2d"))}function Rs(i,t){const e=(i-re.minX)/(re.maxX-re.minX)*re.W,n=(re.maxZ-t)/(re.maxZ-re.minZ)*re.H;return[e,n]}function Sx(i,t){if(!xn){Mx();return}const e=xn;e.clearRect(0,0,re.W,re.H),e.fillStyle="rgba(50,90,40,0.5)",e.fillRect(0,0,re.W,re.H);const[n,s]=Rs(A.minX,A.maxZ),[r,o]=Rs(A.maxX,A.minZ);e.fillStyle="rgba(240,235,225,0.25)",e.fillRect(n,s,r-n,o-s),[{name:"LOBBY",x1:A.minX,x2:A.maxX,z1:A.lobbyZ,z2:A.maxZ},{name:"OPS",x1:A.minX,x2:A.centerX,z1:A.midZ,z2:A.lobbyZ},{name:"FUN",x1:A.centerX,x2:A.maxX,z1:A.midZ,z2:A.lobbyZ},{name:"DESIGN",x1:A.minX,x2:A.centerX,z1:A.minZ,z2:A.midZ},{name:"ENGINEERING",x1:A.centerX,x2:A.maxX,z1:A.minZ,z2:A.midZ}].forEach(u=>{const d=_x.find(v=>v.name===u.name);if(!d)return;const[f,g]=Rs(u.x1,u.z2),[_,m]=Rs(u.x2,u.z1);e.fillStyle=d.mapColor,e.fillRect(f,g,_-f,m-g),e.strokeStyle=d.border+"88",e.lineWidth=1,e.strokeRect(f+.5,g+.5,_-f-1,m-g-1),e.fillStyle=d.border,e.font="bold 7px Inter, monospace",e.textAlign="center";const p=(f+_)/2,M=g+10;e.fillText(u.name,p,M)}),[{x:0,z:A.maxZ,label:"🚪"},{x:-11,z:A.lobbyZ,label:"▶"},{x:11,z:A.lobbyZ,label:"▶"},{x:-11,z:A.midZ,label:"▶"},{x:11,z:A.midZ,label:"▶"}].forEach(({x:u,z:d,label:f})=>{const[g,_]=Rs(u,d);e.fillStyle="rgba(255,255,255,0.7)",e.font="8px sans-serif",e.textAlign="center",e.fillText(f,g,_+3)}),e.strokeStyle="rgba(220,210,190,0.5)",e.lineWidth=1.5,e.strokeRect(n,s,r-n,o-s),t==="overview"&&(e.strokeStyle="rgba(255,160,0,0.7)",e.lineWidth=2,e.strokeRect(2,2,re.W-4,re.H-4),e.fillStyle="rgba(255,160,0,0.06)",e.fillRect(2,2,re.W-4,re.H-4));const[l,h]=Rs(i.x,i.z);e.shadowColor="#00ffff",e.shadowBlur=8,e.fillStyle="#00ffff",e.beginPath(),e.arc(l,h,5,0,Math.PI*2),e.fill(),e.shadowBlur=0,e.fillStyle="#fff",e.font="bold 7px Inter, monospace",e.textAlign="center",e.shadowColor="#0ff",e.shadowBlur=4,e.fillText("YOU",l,h-8),e.shadowBlur=0,e.fillStyle="rgba(255,255,255,0.28)",e.font="7px Inter, monospace",e.textAlign="center",e.fillText("click map to move",re.W/2,re.H-4)}function Ex(){const i=document.getElementById("screen-overlay"),t=document.getElementById("screen-iframe"),e=document.getElementById("screen-overlay-close"),n=document.getElementById("screen-overlay-title"),s=document.getElementById("screen-overlay-tool"),r=document.getElementById("screen-overlay-zone");if(!i)return console.warn("[screenOverlay] #screen-overlay not found in DOM"),{openScreen:()=>{},closeScreen:()=>{},isOpen:()=>!1};e.addEventListener("click",a),i.addEventListener("click",l=>{l.target===i&&a()}),document.addEventListener("keydown",l=>{l.code==="Escape"&&i.classList.contains("visible")&&(a(),l.stopPropagation())},!0);function o(l){var h;if(n.textContent=l.label,s.textContent=l.tool,r){r.textContent=l.zone;const u={BRIDGE:"#4466ff",LAB:"#00ffcc",LOUNGE:"#aa55ff"};r.style.color=u[l.zone]||"#fff"}t.src=l.url,i.classList.add("visible"),(h=document.exitPointerLock)==null||h.call(document)}function a(){i.classList.remove("visible"),setTimeout(()=>{t.src=""},200)}function c(){return i.classList.contains("visible")}return{openScreen:o,closeScreen:a,isOpen:c}}function Oh(...i){const t=i.join("\0");let e=5381;for(let n=0;n<t.length;n++)e=(Math.imul(33,e)^t.charCodeAt(n))>>>0;return e.toString(36).padStart(7,"0")}class No{constructor(t,e=0){this.id=Oh(t,String(e)),this.seed=t,this.epoch=e,this.resonance=1}tick(){return this.epoch++,this}harmonisesWith(t,e=.51){return this.resonance>=e&&t.resonance>=e}static merge(t,e){const[n,s]=t.id<e.id?[t,e]:[e,t];return new No(Oh(n.id,s.id),Math.max(n.epoch,s.epoch))}toString(){return`freq:${this.id}@${this.epoch}`}}class kc{constructor(t={}){this._v=new Map(Object.entries(t))}tick(t){return this._v.set(t,(this._v.get(t)||0)+1),this}get(t){return this._v.get(t)||0}merge(t){for(const[e,n]of t._v)this._v.set(e,Math.max(this.get(e),n));return this}clone(){return new kc(Object.fromEntries(this._v))}compare(t){const e=new Set([...this._v.keys(),...t._v.keys()]);let n=!1,s=!1;for(const r of e){const o=this.get(r),a=t.get(r);o<a&&(n=!0),o>a&&(s=!0)}return!n&&!s?"equal":n&&!s?"before":!n&&s?"after":"concurrent"}happensBefore(t){return this.compare(t)==="before"}toJSON(){return Object.fromEntries(this._v)}}class Hc{constructor(){this._entries=new Map}set(t,e,n,s){const r=this._entries.get(t);if(!r)return this._entries.set(t,{value:e,clock:n.clone(),nodeId:s}),!0;const o=n.compare(r.clock);return o==="after"||o==="concurrent"&&s>r.nodeId?(this._entries.set(t,{value:e,clock:n.clone(),nodeId:s}),!0):!1}get(t){var e;return(e=this._entries.get(t))==null?void 0:e.value}has(t){return this._entries.has(t)}keys(){return this._entries.keys()}entries(){return[...this._entries.entries()].map(([t,e])=>[t,e.value])}merge(t){for(const[e,{value:n,clock:s,nodeId:r}]of t._entries)this.set(e,n,s,r);return this}clone(){const t=new Hc;for(const[e,n]of this._entries)t._entries.set(e,{...n,clock:n.clock.clone()});return t}size(){return this._entries.size}}class Fh{constructor(t){this.frequency=t,this.state=new Hc,this.clock=new kc,this.nodes=new Set,this.createdAt=Date.now()}enter(t){this.nodes.add(t),this.clock.tick(t)}exit(t){this.nodes.delete(t)}update(t,e,n){return this.clock.tick(t),this.state.set(e,n,this.clock.clone(),t)}get(t){return this.state.get(t)}merge(t){this.state.merge(t.state),this.clock.merge(t.clock);for(const e of t.nodes)this.nodes.add(e);return this}consistency(t){return this.clock.compare(t.clock)}snapshot(){return{frequency:this.frequency.toString(),nodeCount:this.nodes.size,stateSize:this.state.size(),epoch:this.frequency.epoch,clock:this.clock.toJSON()}}}function vo(...i){const t=i.join("|");let e=5381;for(let n=0;n<t.length;n++)e=(Math.imul(33,e)^t.charCodeAt(n))>>>0;return e.toString(36)}var Se,Jn,Li,oc,ac;class wx{constructor(t,e=""){Ft(this,Li);Ft(this,Se,new Map);Ft(this,Jn);Yt(this,Jn,t),I(this,Se).set(t,{id:t,publicKey:e,vouchedBy:null,chainDepth:0,chainHash:vo(t),votes:new Set([t]),joinedAt:Date.now()})}get rootId(){return I(this,Jn)}vouch(t,e,n=""){if(!this.isVerified(t))throw new Error(`Voucher "${t}" is not a verified member`);if(I(this,Se).has(e))throw new Error(`"${e}" is already in the network`);const s=I(this,Se).get(t);return I(this,Se).set(e,{id:e,publicKey:n,vouchedBy:t,chainDepth:s.chainDepth+1,chainHash:vo(e,s.chainHash),votes:new Set([t]),joinedAt:Date.now()}),this.getMember(e)}vote(t,e){if(!this.isVerified(t))throw new Error(`Voter "${t}" is not verified`);if(!I(this,Se).has(e))throw new Error(`"${e}" not found`);I(this,Se).get(e).votes.add(t)}revokeVote(t,e){var n;(n=I(this,Se).get(e))==null||n.votes.delete(t)}remove(t){const e=[];return Dt(this,Li,oc).call(this,t,e),e}isVerified(t){if(t===I(this,Jn))return!0;const e=new Set;let n=t;for(;n!==I(this,Jn);){if(e.has(n))return!1;e.add(n);const s=I(this,Se).get(n);if(!(s!=null&&s.vouchedBy))return!1;n=s.vouchedBy}return!0}isActive(t){if(t===I(this,Jn))return!0;if(!this.isVerified(t))return!1;const e=I(this,Se).get(t),n=Dt(this,Li,ac).call(this),s=Math.floor(n.size/2)+1;return[...e.votes].filter(o=>n.has(o)).length>=s}trustScore(t){if(!this.isVerified(t))return 0;const e=I(this,Se).get(t),n=Dt(this,Li,ac).call(this);return n.size===0?0:[...e.votes].filter(r=>n.has(r)).length/n.size}depth(t){var e;return((e=I(this,Se).get(t))==null?void 0:e.chainDepth)??-1}getMember(t){return I(this,Se).get(t)??null}getAll(){return[...I(this,Se).values()]}size(){return I(this,Se).size}validateIntegrity(){for(const[t,e]of I(this,Se)){if(t===I(this,Jn)){if(e.chainHash!==vo(t))return!1;continue}const n=I(this,Se).get(e.vouchedBy);if(!n)return!1;const s=vo(t,n.chainHash);if(e.chainHash!==s)return!1}return!0}}Se=new WeakMap,Jn=new WeakMap,Li=new WeakSet,oc=function(t,e){if(I(this,Se).has(t)){e.push(t),I(this,Se).delete(t);for(const[n,s]of I(this,Se))s.vouchedBy===t&&Dt(this,Li,oc).call(this,n,e)}},ac=function(){const t=new Set;for(const e of I(this,Se).keys())this.isVerified(e)&&t.add(e);return t};class bx{constructor(t,e=""){this.id=t,this.publicKey=e,this.realities=new Map,this.neighbors=new Set,this.position={x:0,y:0,z:0},this.meta={}}tune(t){return t.enter(this.id),this.realities.set(t.frequency.id,t),this}detune(t){const e=this.realities.get(t);return e&&(e.exit(this.id),this.realities.delete(t)),this}bridge(t,e){return this.tune(t),this.tune(e),this}isIn(t){return this.realities.has(t)}moveTo(t,e,n,s){this.position={x:t,y:e,z:n};const r=this.realities.get(s);r&&r.update(this.id,`pos:${this.id}`,{x:t,y:e,z:n})}connect(t){this.neighbors.add(t)}disconnect(t){this.neighbors.delete(t)}}var Er,cc;class Tx{constructor(){Ft(this,Er);this.nodes=new Map,this.realities=new Map,this._msgLog=[]}createReality(t,e=0){const n=new No(t.id,e),s=new Fh(n),r=new wx(t.id,t.publicKey);return this.realities.set(n.id,{reality:s,trust:r}),this.addNode(t),t.tune(s),{reality:s,trust:r,frequency:n}}addNode(t){this.nodes.set(t.id,t)}getNode(t){return this.nodes.get(t)??null}joinReality(t,e,n){const s=this.realities.get(e);if(!s)throw new Error(`Reality "${e}" does not exist`);const{reality:r,trust:o}=s;return o.vouch(n,t.id,t.publicKey),this.addNode(t),t.tune(r),t}route(t,e,n){if(t===e)return[t];const s=this.realities.get(n);if(!s)return null;const{trust:r}=s,o=Dt(this,Er,cc).call(this,t,r),a=Dt(this,Er,cc).call(this,e,r);if(!o||!a)return null;const c=new Set(o);let l;for(const d of a)if(c.has(d)){l=d;break}if(!l)return null;const h=o.slice(0,o.indexOf(l)+1),u=a.slice(0,a.indexOf(l)).reverse();return[...h,...u]}send(t,e,n,s){const r=this.route(t,e,n);if(!r)return{delivered:!1,reason:"no-route"};const o=this.realities.get(n);o&&o.reality.update(t,`msg:${Date.now()}:${t}→${e}`,s);const a={from:t,to:e,hops:r,payload:s,ts:Date.now()};return this._msgLog.push(a),{delivered:!0,hops:r.length,route:r}}gossip(t,e,n,s,r=6){const o=this.nodes.get(t),a=this.realities.get(e);if(!o||!a)return 0;const{reality:c}=a,l=new Set;let h=0;const u=(d,f)=>{if(l.has(d)||f<=0)return;l.add(d);const g=this.nodes.get(d);if(!(!g||!g.isIn(e))){c.update(d,n,s),h++;for(const _ of g.neighbors)u(_,f-1)}};return u(t,r),h}propose(t,e,n,s){const r=this.realities.get(e);if(!r)return{passed:!1,reason:"unknown-reality"};const{reality:o,trust:a}=r,c=a.getAll().filter(d=>a.isVerified(d.id)),l=c.filter(d=>{const f=this.nodes.get(d.id);return f&&s(f,a)}),h=Math.floor(c.length/2)+1;return{passed:l.length>=h,motion:n,proposer:t,total:c.length,yesVotes:l.length,needed:h,voters:l.map(d=>d.id)}}mergeRealities(t,e){const n=this.realities.get(t),s=this.realities.get(e);if(!n||!s)return null;if(!n.reality.frequency.harmonisesWith(s.reality.frequency))return{merged:!1,reason:"insufficient-resonance"};const r=No.merge(n.reality.frequency,s.reality.frequency),o=new Fh(r);o.merge(n.reality),o.merge(s.reality);const a=n.trust;try{a.vouch(n.trust.rootId,s.trust.rootId,"")}catch{}this.realities.set(r.id,{reality:o,trust:a});for(const c of this.nodes.values())(c.isIn(t)||c.isIn(e))&&(c.detune(t),c.detune(e),c.tune(o));return{merged:!0,frequency:r,reality:o}}nodesIn(t){return[...this.nodes.values()].filter(e=>e.isIn(t))}bridges(){return[...this.nodes.values()].filter(t=>t.realities.size>1)}stats(){return{totalNodes:this.nodes.size,totalRealities:this.realities.size,bridgeNodes:this.bridges().length,messageCount:this._msgLog.length}}}Er=new WeakSet,cc=function(t,e){var o;const n=[];let s=t;const r=new Set;for(;s;){if(r.has(s))return null;r.add(s),n.push(s),s=((o=e.getMember(s))==null?void 0:o.vouchedBy)??null}return n};const Cs=Object.freeze({PUBLIC:"public",INVITE:"invite",PRIVATE:"private"});function Bh(){return Math.random().toString(36).slice(2,9).toUpperCase()}class Ax{constructor(t,e,{targetId:n=null,ttlMs:s=864e5,maxUses:r=1}={}){this.id=`INV-${Bh()}-${Bh()}`,this.issuerId=t,this.frequencyId=e,this.targetId=n,this.expiresAt=Date.now()+s,this.maxUses=r,this.uses=0,this.claimedBy=[]}get expired(){return Date.now()>this.expiresAt}get exhausted(){return this.uses>=this.maxUses}get active(){return!this.expired&&!this.exhausted}isValidFor(t){return!(this.expired||this.exhausted||this.targetId&&this.targetId!==t)}claim(t){return this.isValidFor(t)?(this.uses++,this.claimedBy.push(t),!0):!1}}var wr,br,ks,$i,ko,ed;class Rx{constructor(){Ft(this,ko);Ft(this,wr,new Map);Ft(this,br,new Map);Ft(this,ks,new Map);Ft(this,$i,new Map)}setNode(t,e){I(this,wr).set(t,e)}getNode(t){return I(this,wr).get(t)??Cs.PUBLIC}setReality(t,e){I(this,br).set(t,e)}getReality(t){return I(this,br).get(t)??Cs.PUBLIC}issueInvite(t,e,n={}){const s=new Ax(t,e,n);return I(this,ks).set(s.id,s),s}getToken(t){return I(this,ks).get(t)??null}claimInvite(t,e){const n=I(this,ks).get(t);return n?n.expired?{success:!1,reason:"token-expired"}:n.exhausted?{success:!1,reason:"token-exhausted"}:n.isValidFor(e)?(n.claim(e),I(this,$i).has(e)||I(this,$i).set(e,new Set),I(this,$i).get(e).add(n.frequencyId),{success:!0,frequencyId:n.frequencyId}):{success:!1,reason:"token-not-for-you"}:{success:!1,reason:"token-not-found"}}hasGrant(t,e){var n;return((n=I(this,$i).get(t))==null?void 0:n.has(e))??!1}canSee(t,e,n){var r;if(t===e)return!0;const s=this.getNode(e);if(s===Cs.PUBLIC||Dt(this,ko,ed).call(this,t,e,n))return!0;if(s===Cs.PRIVATE)return!1;for(const[o]of((r=n.getNode(e))==null?void 0:r.realities)??[])if(this.hasGrant(t,o))return!0;return!1}perceptionOf(t,e,n){return this.canSee(t,e,n)?"full":this.getNode(e)===Cs.INVITE?"blurred":"hidden"}buildMapFor(t,e){const n=[],s=[],r=new Set;for(const o of e.nodes.values()){const a=this.perceptionOf(t,o.id,e);a!=="hidden"&&(r.add(o.id),n.push({id:o.id,perception:a,visibility:this.getNode(o.id),realities:[...o.realities.keys()],isBridge:o.realities.size>1,isMe:o.id===t,position:o.position}))}for(const{reality:o,trust:a}of e.realities.values())for(const c of a.getAll())c.vouchedBy&&r.has(c.id)&&r.has(c.vouchedBy)&&s.push({from:c.vouchedBy,to:c.id,type:"trust"});for(const o of e.nodes.values())for(const a of o.neighbors)r.has(o.id)&&r.has(a)&&o.id<a&&s.push({from:o.id,to:a,type:"neighbor"});return{nodes:n,edges:s}}}wr=new WeakMap,br=new WeakMap,ks=new WeakMap,$i=new WeakMap,ko=new WeakSet,ed=function(t,e,n){const s=n.getNode(t),r=n.getNode(e);if(!s||!r)return!1;for(const[o]of s.realities){if(!r.isIn(o))continue;const a=n.realities.get(o);if(a!=null&&a.trust.isVerified(t)&&(a!=null&&a.trust.isVerified(e)))return!0}return!1};const zh=[{fill:"rgba(30,80,200,0.09)",border:"#4466ff",glow:"#2255dd"},{fill:"rgba(0,160,120,0.09)",border:"#00ffcc",glow:"#00ccaa"},{fill:"rgba(130,20,220,0.09)",border:"#aa55ff",glow:"#8833dd"},{fill:"rgba(200,100,0,0.09)",border:"#ff9900",glow:"#dd7700"},{fill:"rgba(0,160,200,0.09)",border:"#00ccff",glow:"#00aadd"}],Vn={me:"#00ffff",public:"#4488ff",invite:"#ffaa00",private:"#666688",blurred:"#333355"};class Cx{constructor(t,e,n){this.canvas=t,this.ctx=t.getContext("2d"),this.vis=e,this.myId=n,this._nodes=[],this._edges=[],this._realityGroups=new Map,this._pan={x:0,y:0},this._zoom=1,this._drag=!1,this._lastMouse={x:0,y:0},this._selected=null,this._raf=null,this._settled=0,this._onSelect=null,this._bindEvents()}load(t){const{nodes:e,edges:n}=t,s=this.canvas.width,r=this.canvas.height,o=new Map(this._nodes.map(c=>[c.id,c]));this._nodes=e.map(c=>{if(o.has(c.id))return{...o.get(c.id),...c};const l=Math.random()*Math.PI*2,h=100+Math.random()*80;return{...c,x:s/2+Math.cos(l)*h,y:r/2+Math.sin(l)*h,vx:0,vy:0}});const a=new Map(this._nodes.map(c=>[c.id,c]));this._edges=n.filter(c=>a.has(c.from)&&a.has(c.to)).map(c=>({fromNode:a.get(c.from),toNode:a.get(c.to),type:c.type})),this._realityGroups.clear(),this._nodes.forEach(c=>{var l;(l=c.realities)==null||l.forEach((h,u)=>{this._realityGroups.has(h)||this._realityGroups.set(h,{nodes:[],color:zh[this._realityGroups.size%zh.length]}),this._realityGroups.get(h).nodes.push(c)})}),this._settled=0,this._kickSimulation()}onSelect(t){this._onSelect=t}fitView(){if(this._nodes.length===0)return;const t=this._nodes.map(d=>d.x),e=this._nodes.map(d=>d.y),n=Math.min(...t),s=Math.max(...t),r=Math.min(...e),o=Math.max(...e),a=this.canvas.width,c=this.canvas.height,l=60,h=(a-l*2)/(s-n||1),u=(c-l*2)/(o-r||1);this._zoom=Math.min(h,u,2),this._pan.x=-((n+s)/2)*this._zoom,this._pan.y=-((r+o)/2)*this._zoom,this.render()}stop(){this._raf&&cancelAnimationFrame(this._raf)}_kickSimulation(){if(this._raf)return;const t=()=>{this._settled<250&&(this._stepForce(),this._settled++),this.render(),this._raf=requestAnimationFrame(t)};this._raf=requestAnimationFrame(t)}_stepForce(){const t=this._nodes,e=4e3,n=90,s=.025,r=.82;for(let o=0;o<t.length;o++)for(let a=o+1;a<t.length;a++){const c=t[o],l=t[a],h=l.x-c.x,u=l.y-c.y,d=h*h+u*u||1,f=Math.sqrt(d),g=e/d;c.vx-=g*h/f,c.vy-=g*u/f,l.vx+=g*h/f,l.vy+=g*u/f}for(const o of this._edges){if(o.type!=="trust")continue;const a=o.toNode.x-o.fromNode.x,c=o.toNode.y-o.fromNode.y,l=Math.sqrt(a*a+c*c)||1,h=(l-n)*s;o.fromNode.vx+=h*a/l,o.fromNode.vy+=h*c/l,o.toNode.vx-=h*a/l,o.toNode.vy-=h*c/l,o.toNode.vy+=(o.toNode.y-(o.fromNode.y+n))*-.008}for(const o of this._edges){if(o.type!=="neighbor")continue;const a=o.toNode.x-o.fromNode.x,c=o.toNode.y-o.fromNode.y,l=Math.sqrt(a*a+c*c)||1,h=(l-50)*.008;o.fromNode.vx+=h*a/l,o.fromNode.vy+=h*c/l,o.toNode.vx-=h*a/l,o.toNode.vy-=h*c/l}for(const o of t)o.x+=o.vx*r,o.y+=o.vy*r,o.vx*=r,o.vy*=r}render(){const t=this.ctx,e=this.canvas.width,n=this.canvas.height;t.clearRect(0,0,e,n),t.fillStyle="rgba(0,2,12,0.97)",t.fillRect(0,0,e,n),t.save(),t.translate(e/2+this._pan.x,n/2+this._pan.y),t.scale(this._zoom,this._zoom),this._drawRealityClusters(),this._drawEdges(),this._drawNodes(),this._selected&&this._drawSelection(this._selected),t.restore(),this._drawLegend(),this._settled<250&&this._drawSettlingIndicator()}_drawRealityClusters(){const t=this.ctx;for(const[e,{nodes:n,color:s}]of this._realityGroups){if(n.length<2)continue;const r=n.reduce((l,h)=>l+h.x,0)/n.length,o=n.reduce((l,h)=>l+h.y,0)/n.length,a=Math.max(...n.map(l=>Math.hypot(l.x-r,l.y-o)))+55,c=t.createRadialGradient(r,o,0,r,o,a);c.addColorStop(0,s.fill.replace("0.09","0.14")),c.addColorStop(.7,s.fill),c.addColorStop(1,"transparent"),t.fillStyle=c,t.beginPath(),t.arc(r,o,a,0,Math.PI*2),t.fill(),t.strokeStyle=s.border+"33",t.lineWidth=1,t.beginPath(),t.arc(r,o,a,0,Math.PI*2),t.stroke()}}_drawEdges(){const t=this.ctx;for(const e of this._edges)t.beginPath(),t.moveTo(e.fromNode.x,e.fromNode.y),t.lineTo(e.toNode.x,e.toNode.y),e.type==="trust"?(t.strokeStyle="rgba(120,180,255,0.45)",t.lineWidth=1.8,t.setLineDash([])):(t.strokeStyle="rgba(255,255,255,0.1)",t.lineWidth=.8,t.setLineDash([3,5])),t.stroke();t.setLineDash([])}_drawNodes(){var e;const t=this.ctx;for(const n of this._nodes){const s=((e=this._selected)==null?void 0:e.id)===n.id,r=n.isMe?11:n.isBridge?9:7,o=n.isMe?Vn.me:n.perception==="blurred"?Vn.blurred:Vn[n.visibility]??Vn.public;t.shadowColor=o,t.shadowBlur=s?28:n.isMe?22:12,t.fillStyle=n.perception==="blurred"?"rgba(50,50,80,0.7)":o+(n.isMe?"":"cc"),t.beginPath(),t.arc(n.x,n.y,r,0,Math.PI*2),t.fill(),t.shadowBlur=0,n.isBridge&&(t.strokeStyle="#ffcc00bb",t.lineWidth=2,t.beginPath(),t.arc(n.x,n.y,r+5,0,Math.PI*2),t.stroke()),s&&(t.strokeStyle="#ffffff88",t.lineWidth=1.5,t.beginPath(),t.arc(n.x,n.y,r+8,0,Math.PI*2),t.stroke());const a=n.perception==="blurred"?"???":n.id.length>12?n.id.slice(0,12)+"…":n.id;t.fillStyle=n.isMe?"#ffffff":"rgba(255,255,255,0.65)",t.font=`${n.isMe?"bold ":""}10px Inter, monospace`,t.textAlign="center",t.fillText(a,n.x,n.y+r+14),n.perception==="full"&&n.depth>0&&(t.fillStyle="rgba(255,255,255,0.28)",t.font="8px monospace",t.fillText(`d${n.depth}`,n.x,n.y-r-4)),n.isMe&&(t.fillStyle="#00ffff",t.font="bold 8px Inter, monospace",t.shadowColor="#00ffff",t.shadowBlur=8,t.fillText("YOU",n.x,n.y-r-4),t.shadowBlur=0)}}_drawSelection(t){}_drawLegend(){const t=this.ctx,e=[{color:Vn.me,label:"You"},{color:Vn.public,label:"Public"},{color:Vn.invite,label:"Invite-only"},{color:Vn.private,label:"Private"},{color:Vn.blurred,label:"Unknown (invite-only, not connected)"},{color:"#ffcc00",label:"Bridge node"}],n=14,s=this.canvas.height-14-e.length*18;t.fillStyle="rgba(0,5,20,0.75)",t.fillRect(n-6,s-10,280,e.length*18+16),t.strokeStyle="rgba(255,255,255,0.07)",t.lineWidth=1,t.strokeRect(n-6,s-10,280,e.length*18+16),e.forEach(({color:r,label:o},a)=>{const c=s+a*18;t.fillStyle=r,t.beginPath(),t.arc(n+6,c,5,0,Math.PI*2),t.fill(),t.fillStyle="rgba(255,255,255,0.6)",t.font="11px Inter, monospace",t.textAlign="left",t.fillText(o,n+18,c+4)})}_drawSettlingIndicator(){const t=this.ctx,e=this._settled/250,n=this.canvas.width;t.fillStyle="rgba(100,180,255,0.5)",t.fillRect(0,this.canvas.height-2,n*e,2)}_bindEvents(){const t=this.canvas;t.addEventListener("mousedown",e=>{this._drag=!0,this._lastMouse={x:e.clientX,y:e.clientY}}),t.addEventListener("mousemove",e=>{this._drag&&(this._pan.x+=e.clientX-this._lastMouse.x,this._pan.y+=e.clientY-this._lastMouse.y,this._lastMouse={x:e.clientX,y:e.clientY},this.render())}),t.addEventListener("mouseup",()=>{this._drag=!1}),t.addEventListener("mouseleave",()=>{this._drag=!1}),t.addEventListener("wheel",e=>{e.preventDefault();const n=e.deltaY>0?.88:1.14;this._zoom=Math.max(.15,Math.min(6,this._zoom*n)),this._raf||this.render()},{passive:!1}),t.addEventListener("click",e=>{var a;if(this._drag)return;const n=t.getBoundingClientRect(),s=(e.clientX-n.left-t.width/2-this._pan.x)/this._zoom,r=(e.clientY-n.top-t.height/2-this._pan.y)/this._zoom;let o=null;for(const c of this._nodes)if(Math.hypot(c.x-s,c.y-r)<14){o=c;break}this._selected=o,(a=this._onSelect)==null||a.call(this,o),this._raf||this.render()})}}function kh(i,t,e){const n=document.getElementById("network-map-overlay");if(!n)return;n.classList.add("visible");const s=document.getElementById("network-map-canvas");s.width=s.offsetWidth||800,s.height=s.offsetHeight||560;const r=t.buildMapFor(e,i),o=new Cx(s,t,e);o.load(r);const a=document.getElementById("nm-node-panel");o.onSelect(h=>{var u;if(!h||h.perception==="blurred"){a.innerHTML=h?'<div class="nm-panel-blurred">🔒 Unknown node<br><small>Invite required</small></div>':"";return}a.innerHTML=`
      <div class="nm-panel-title">${h.isMe?"👤 You":"🔵 "+h.id}</div>
      <div class="nm-panel-row"><span>Visibility</span><span class="nm-badge nm-badge-${h.visibility}">${h.visibility}</span></div>
      <div class="nm-panel-row"><span>Depth</span><span>d${h.depth??0}</span></div>
      <div class="nm-panel-row"><span>Realities</span><span>${((u=h.realities)==null?void 0:u.length)??0}</span></div>
      ${h.isBridge?'<div class="nm-panel-bridge">🌉 Bridge node</div>':""}
    `});const c=document.getElementById("nm-close"),l=()=>{n.classList.remove("visible"),o.stop()};c.onclick=l,n.addEventListener("keydown",h=>{h.key==="Escape"&&l()})}const Ga=20,Va=50,Px=.08,Hh=12;class Lx{constructor(){this._ctx=null,this._stream=null,this._gains=new Map,this._talking=new Set,this._selfAnalyser=null,this._selfBuf=null,this._muted=!1,this._active=!1,this._onStateChange=null,this._onTalkChange=null,this._syncRef=null}async start(t){if(this._active)return!0;this._syncRef=t;try{const e=new Promise((r,o)=>setTimeout(()=>o(new Error("mic permission timed out")),15e3));this._stream=await Promise.race([navigator.mediaDevices.getUserMedia({audio:{echoCancellation:!0,noiseSuppression:!0,sampleRate:48e3},video:!1}),e]),this._ctx=new AudioContext,this._ctx.state==="suspended"&&await this._ctx.resume(),this._active=!0,this._selfAnalyser=this._ctx.createAnalyser(),this._selfAnalyser.fftSize=256,this._selfBuf=new Uint8Array(this._selfAnalyser.frequencyBinCount),this._ctx.createMediaStreamSource(this._stream).connect(this._selfAnalyser);const[s]=this._stream.getAudioTracks();return t.addVoiceTrack(s,this._stream),t.onVoiceTrack((r,o,a,c)=>{r.kind==="audio"&&this._addPeerTrack(a,r,c)}),this._notify(),!0}catch(e){return console.warn("[ProximityVoice] mic access denied or unavailable:",e.message),!1}}_addPeerTrack(t,e,n){const s=this._ctx.createMediaStreamSource(new MediaStream([e])),r=this._ctx.createGain(),o=this._ctx.createAnalyser();o.fftSize=256,r.gain.value=0,s.connect(o),s.connect(r),r.connect(this._ctx.destination),this._gains.set(t,{gainNode:r,sourceNode:s,analyser:o,buf:new Uint8Array(o.frequencyBinCount),wirePeerId:n??t})}stop(){var t,e;(t=this._stream)==null||t.getTracks().forEach(n=>n.stop()),this._gains.forEach(({gainNode:n,sourceNode:s})=>{try{s.disconnect(),n.disconnect()}catch{}}),this._gains.clear(),this._talking.clear(),(e=this._ctx)==null||e.close(),this._active=!1,this._syncRef=null,this._notify(),this._notifyTalk()}update(t,e){if(!this._active||!this._ctx)return;this._syncRef&&this._gains.forEach((r,o)=>{const a=this._syncRef.wireToIdentityId(o);a&&a!==o&&(this._gains.set(a,r),this._gains.delete(o))});const n=new Set(this._talking);this._selfAnalyser&&!this._muted?(this._selfAnalyser.getByteFrequencyData(this._selfBuf),this._selfBuf.reduce((o,a)=>o+a,0)/this._selfBuf.length>Hh?this._talking.add("self"):this._talking.delete("self")):this._talking.delete("self"),e.forEach((r,o)=>{const a=this._gains.get(o);if(!a)return;const c=r.position.x-t.x,l=r.position.z-t.z,h=Math.sqrt(c*c+l*l),u=h<=Ga?1:h>=Va?0:1-(h-Ga)/(Va-Ga);a.gainNode.gain.setTargetAtTime(u,this._ctx.currentTime,Px),a.analyser.getByteFrequencyData(a.buf),a.buf.reduce((f,g)=>f+g,0)/a.buf.length>Hh?this._talking.add(o):this._talking.delete(o)});let s=n.size!==this._talking.size;if(!s){for(const r of this._talking)if(!n.has(r)){s=!0;break}}s&&this._notifyTalk()}removePeer(t){const e=this._gains.get(t);if(e){try{e.sourceNode.disconnect(),e.gainNode.disconnect()}catch{}this._gains.delete(t)}this._talking.delete(t)}toggleMute(){return this.setMuted(!this._muted),this._muted}setMuted(t){var e;this._muted=t,(e=this._stream)==null||e.getAudioTracks().forEach(n=>{n.enabled=!t}),this._notify()}get active(){return this._active}get muted(){return this._muted}isTalking(t){return this._talking.has(t)}get talkingPeers(){return this._talking}onStateChange(t){this._onStateChange=t}onTalkChange(t){this._onTalkChange=t}_notify(){var t;(t=this._onStateChange)==null||t.call(this,{active:this._active,muted:this._muted})}_notifyTalk(){var t;(t=this._onTalkChange)==null||t.call(this,this._talking)}static get HEAR_FAR(){return Va}}const Gh=Object.fromEntries(zc.map(i=>[i.id,"#"+i.color.toString(16).padStart(6,"0")])),Ix={OUTSIDE:"#88cc66",LOBBY:"#aaaacc",OPS:"#ffaa44",FUN:"#44ffaa",DESIGN:"#ff6ba0",ENGINEERING:"#44aaff"},Dx={OUTSIDE:"Outside",LOBBY:"Lobby",OPS:"Ops",FUN:"Fun",DESIGN:"Design",ENGINEERING:"Engineering"};class Nx{constructor(t){this._onNavigate=t,this._peers=new Map,this._self={username:"",presetId:0,zone:"OUTSIDE"},this._el=this._build(),document.body.appendChild(this._el),this._render()}setSelf(t,e,n,s="available"){this._self={username:t,presetId:e,zone:n||"OUTSIDE",status:s},this._render()}updateSelfStatus(t){this._self.status=t,this._render()}addPeer(t,e,n=0,s="available"){this._peers.set(t,{username:e,presetId:n,x:0,z:0,zone:"OUTSIDE",status:s}),this._render()}movePeer(t,e,n){const s=this._peers.get(t);s&&(s.x=e,s.z=n,s.zone=Do({x:e,z:n}),this._render())}updatePeerPreset(t,e){const n=this._peers.get(t);n&&(n.presetId=e,this._render())}updatePeerStatus(t,e){const n=this._peers.get(t);n&&(n.status=e,this._render())}removePeer(t){this._peers.delete(t),this._render()}updateSelfZone(t){this._self.zone=t||"OUTSIDE",this._render()}_build(){const t=document.createElement("div");return t.id="presence-panel",t.innerHTML=`
      <div class="pp-header">
        <span class="pp-title">WHO'S HERE</span>
        <span class="pp-count" id="pp-count">1</span>
      </div>
      <div class="pp-list" id="pp-list"></div>
    `,t}_render(){const t=this._el.querySelector("#pp-list"),e=this._el.querySelector("#pp-count");if(!t)return;const n=1+this._peers.size;e.textContent=n;const s=[];s.push(this._row({username:this._self.username||"You",presetId:this._self.presetId,zone:this._self.zone,status:this._self.status,isSelf:!0}));const r=[...this._peers.entries()].sort((o,a)=>{const c=o[1].zone,l=a[1].zone;return c!==l?c.localeCompare(l):o[1].username.localeCompare(a[1].username)});r.forEach(([o,a])=>{s.push(this._row({username:a.username,presetId:a.presetId,zone:a.zone,status:a.status,isSelf:!1,onClick:()=>{var c;return(c=this._onNavigate)==null?void 0:c.call(this,{x:a.x,z:a.z})}}))}),t.innerHTML=s.join(""),t.querySelectorAll(".pp-row[data-idx]").forEach(o=>{const a=parseInt(o.dataset.idx,10),c=r[a];c&&o.addEventListener("click",()=>{var l;return(l=this._onNavigate)==null?void 0:l.call(this,{x:c[1].x,z:c[1].z})})})}_row({username:t,presetId:e,zone:n,status:s="available",isSelf:r,onClick:o}){const c="#"+(ts[e]??ts[0]).outfit.toString(16).padStart(6,"0"),l=Gh[s]??Gh.available,h=Ix[n]??"#888",u=Dx[n]??n;return`
      <div class="pp-row ${r?"pp-self":"pp-peer"}"
           ${r?"":`data-idx="${t}"`}>
        <span class="pp-dot" style="background:${c}"></span>
        <span class="pp-status-dot" style="background:${l}" title="${s}"></span>
        <span class="pp-name">${Ux(t)}${r?' <span class="pp-you">(you)</span>':""}</span>
        <span class="pp-zone" style="color:${h}">${u}</span>
        ${r?"":'<span class="pp-go" title="Walk to this person">→</span>'}
      </div>
    `}}function Ux(i){return i.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Ox(i){return i instanceof Uint8Array||ArrayBuffer.isView(i)&&i.constructor.name==="Uint8Array"&&"BYTES_PER_ELEMENT"in i&&i.BYTES_PER_ELEMENT===1}function Gc(i,t=""){if(typeof i!="number"){const e=t&&`"${t}" `;throw new TypeError(`${e}expected number, got ${typeof i}`)}if(!Number.isSafeInteger(i)||i<0){const e=t&&`"${t}" `;throw new RangeError(`${e}expected integer >= 0, got ${i}`)}}function or(i,t,e=""){const n=Ox(i),s=i==null?void 0:i.length,r=t!==void 0;if(!n||r&&s!==t){const o=e&&`"${e}" `,a=r?` of length ${t}`:"",c=n?`length=${s}`:`type=${typeof i}`,l=o+"expected Uint8Array"+a+", got "+c;throw n?new RangeError(l):new TypeError(l)}return i}function Vh(i,t=!0){if(i.destroyed)throw new Error("Hash instance has been destroyed");if(t&&i.finished)throw new Error("Hash#digest() has already been called")}function Fx(i,t){or(i,void 0,"digestInto() output");const e=t.outputLen;if(i.length<e)throw new RangeError('"digestInto() output" expected to be of length >='+e)}function lc(...i){for(let t=0;t<i.length;t++)i[t].fill(0)}function Wa(i){return new DataView(i.buffer,i.byteOffset,i.byteLength)}function bn(i,t){return i<<32-t|i>>>t}const nd=typeof Uint8Array.from([]).toHex=="function"&&typeof Uint8Array.fromHex=="function",Bx=Array.from({length:256},(i,t)=>t.toString(16).padStart(2,"0"));function Vc(i){if(or(i),nd)return i.toHex();let t="";for(let e=0;e<i.length;e++)t+=Bx[i[e]];return t}const Wn={_0:48,_9:57,A:65,F:70,a:97,f:102};function Wh(i){if(i>=Wn._0&&i<=Wn._9)return i-Wn._0;if(i>=Wn.A&&i<=Wn.F)return i-(Wn.A-10);if(i>=Wn.a&&i<=Wn.f)return i-(Wn.a-10)}function id(i){if(typeof i!="string")throw new TypeError("hex string expected, got "+typeof i);if(nd)try{return Uint8Array.fromHex(i)}catch(s){throw s instanceof SyntaxError?new RangeError(s.message):s}const t=i.length,e=t/2;if(t%2)throw new RangeError("hex string expected, got unpadded hex of length "+t);const n=new Uint8Array(e);for(let s=0,r=0;s<e;s++,r+=2){const o=Wh(i.charCodeAt(r)),a=Wh(i.charCodeAt(r+1));if(o===void 0||a===void 0){const c=i[r]+i[r+1];throw new RangeError('hex string expected, got non-hex character "'+c+'" at index '+r)}n[s]=o*16+a}return n}function zx(...i){let t=0;for(let n=0;n<i.length;n++){const s=i[n];or(s),t+=s.length}const e=new Uint8Array(t);for(let n=0,s=0;n<i.length;n++){const r=i[n];e.set(r,s),s+=r.length}return e}function kx(i,t={}){const e=(s,r)=>i(r).update(s).digest(),n=i(void 0);return e.outputLen=n.outputLen,e.blockLen=n.blockLen,e.canXOF=n.canXOF,e.create=s=>i(s),Object.assign(e,t),Object.freeze(e)}function sd(i=32){Gc(i,"bytesLength");const t=typeof globalThis=="object"?globalThis.crypto:null;if(typeof(t==null?void 0:t.getRandomValues)!="function")throw new Error("crypto.getRandomValues must be defined");if(i>65536)throw new RangeError(`"bytesLength" expected <= 65536, got ${i}`);return t.getRandomValues(new Uint8Array(i))}const Hx=i=>({oid:Uint8Array.from([6,9,96,134,72,1,101,3,4,2,i])});function Gx(i,t,e){return i&t^~i&e}function Vx(i,t,e){return i&t^i&e^t&e}class Wx{constructor(t,e,n,s){Jt(this,"blockLen");Jt(this,"outputLen");Jt(this,"canXOF",!1);Jt(this,"padOffset");Jt(this,"isLE");Jt(this,"buffer");Jt(this,"view");Jt(this,"finished",!1);Jt(this,"length",0);Jt(this,"pos",0);Jt(this,"destroyed",!1);this.blockLen=t,this.outputLen=e,this.padOffset=n,this.isLE=s,this.buffer=new Uint8Array(t),this.view=Wa(this.buffer)}update(t){Vh(this),or(t);const{view:e,buffer:n,blockLen:s}=this,r=t.length;for(let o=0;o<r;){const a=Math.min(s-this.pos,r-o);if(a===s){const c=Wa(t);for(;s<=r-o;o+=s)this.process(c,o);continue}n.set(t.subarray(o,o+a),this.pos),this.pos+=a,o+=a,this.pos===s&&(this.process(e,0),this.pos=0)}return this.length+=t.length,this.roundClean(),this}digestInto(t){Vh(this),Fx(t,this),this.finished=!0;const{buffer:e,view:n,blockLen:s,isLE:r}=this;let{pos:o}=this;e[o++]=128,lc(this.buffer.subarray(o)),this.padOffset>s-o&&(this.process(n,0),o=0);for(let u=o;u<s;u++)e[u]=0;n.setBigUint64(s-8,BigInt(this.length*8),r),this.process(n,0);const a=Wa(t),c=this.outputLen;if(c%4)throw new Error("_sha2: outputLen must be aligned to 32bit");const l=c/4,h=this.get();if(l>h.length)throw new Error("_sha2: outputLen bigger than state");for(let u=0;u<l;u++)a.setUint32(4*u,h[u],r)}digest(){const{buffer:t,outputLen:e}=this;this.digestInto(t);const n=t.slice(0,e);return this.destroy(),n}_cloneInto(t){t||(t=new this.constructor),t.set(...this.get());const{blockLen:e,buffer:n,length:s,finished:r,destroyed:o,pos:a}=this;return t.destroyed=o,t.finished=r,t.length=s,t.pos=a,s%e&&t.buffer.set(n),t}clone(){return this._cloneInto()}}const pi=Uint32Array.from([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]),Xx=Uint32Array.from([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),mi=new Uint32Array(64);class Zx extends Wx{constructor(t){super(64,t,8,!1)}get(){const{A:t,B:e,C:n,D:s,E:r,F:o,G:a,H:c}=this;return[t,e,n,s,r,o,a,c]}set(t,e,n,s,r,o,a,c){this.A=t|0,this.B=e|0,this.C=n|0,this.D=s|0,this.E=r|0,this.F=o|0,this.G=a|0,this.H=c|0}process(t,e){for(let u=0;u<16;u++,e+=4)mi[u]=t.getUint32(e,!1);for(let u=16;u<64;u++){const d=mi[u-15],f=mi[u-2],g=bn(d,7)^bn(d,18)^d>>>3,_=bn(f,17)^bn(f,19)^f>>>10;mi[u]=_+mi[u-7]+g+mi[u-16]|0}let{A:n,B:s,C:r,D:o,E:a,F:c,G:l,H:h}=this;for(let u=0;u<64;u++){const d=bn(a,6)^bn(a,11)^bn(a,25),f=h+d+Gx(a,c,l)+Xx[u]+mi[u]|0,_=(bn(n,2)^bn(n,13)^bn(n,22))+Vx(n,s,r)|0;h=l,l=c,c=a,a=o+f|0,o=r,r=s,s=n,n=f+_|0}n=n+this.A|0,s=s+this.B|0,r=r+this.C|0,o=o+this.D|0,a=a+this.E|0,c=c+this.F|0,l=l+this.G|0,h=h+this.H|0,this.set(n,s,r,o,a,c,l,h)}roundClean(){lc(mi)}destroy(){this.destroyed=!0,this.set(0,0,0,0,0,0,0,0),lc(this.buffer)}}class Yx extends Zx{constructor(){super(32);Jt(this,"A",pi[0]|0);Jt(this,"B",pi[1]|0);Jt(this,"C",pi[2]|0);Jt(this,"D",pi[3]|0);Jt(this,"E",pi[4]|0);Jt(this,"F",pi[5]|0);Jt(this,"G",pi[6]|0);Jt(this,"H",pi[7]|0)}}const Xh=kx(()=>new Yx,Hx(1));/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const mn=(i,t,e)=>or(i,t,e),rd=Gc,qx=Vc,Uo=(...i)=>zx(...i),$x=i=>id(i),Oo=BigInt(0),hc=BigInt(1);function uc(i,t=""){if(typeof i!="boolean"){const e=t&&`"${t}" `;throw new TypeError(e+"expected boolean, got type="+typeof i)}return i}function Wc(i){if(typeof i=="bigint"){if(!wo(i))throw new RangeError("positive bigint expected, got "+i)}else rd(i);return i}function dc(i,t=""){if(typeof i!="number"){const e=t&&`"${t}" `;throw new TypeError(e+"expected number, got type="+typeof i)}if(!Number.isSafeInteger(i)){const e=t&&`"${t}" `;throw new RangeError(e+"expected safe integer, got "+i)}}function xo(i){const t=Wc(i).toString(16);return t.length&1?"0"+t:t}function od(i){if(typeof i!="string")throw new TypeError("hex string expected, got "+typeof i);return i===""?Oo:BigInt("0x"+i)}function Yo(i){return od(Vc(i))}function ad(i){return od(Vc(Kx(or(i)).reverse()))}function Xc(i,t){if(Gc(t),t===0)throw new RangeError("zero length");i=Wc(i);const e=i.toString(16);if(e.length>t*2)throw new RangeError("number too large");return id(e.padStart(t*2,"0"))}function cd(i,t){return Xc(i,t).reverse()}function Kx(i){return Uint8Array.from(mn(i))}function Jx(i){if(typeof i!="string")throw new TypeError("ascii string expected, got "+typeof i);return Uint8Array.from(i,(t,e)=>{const n=t.charCodeAt(0);if(t.length!==1||n>127)throw new RangeError(`string contains non-ASCII character "${i[e]}" with code ${n} at position ${e}`);return n})}const wo=i=>typeof i=="bigint"&&Oo<=i;function jx(i,t,e){return wo(i)&&wo(t)&&wo(e)&&t<=i&&i<e}function Qx(i,t,e,n){if(!jx(t,e,n))throw new RangeError("expected valid "+i+": "+e+" <= n < "+n+", got "+t)}function Zc(i){if(i<Oo)throw new Error("expected non-negative bigint, got "+i);let t;for(t=0;i>Oo;i>>=hc,t+=1);return t}const ld=i=>(hc<<BigInt(i))-hc;function hd(i,t={},e={}){if(Object.prototype.toString.call(i)!=="[object Object]")throw new TypeError("expected valid options object");function n(r,o,a){if(!a&&o!=="function"&&!Object.hasOwn(i,r))throw new TypeError(`param "${r}" is invalid: expected own property`);const c=i[r];if(a&&c===void 0)return;const l=typeof c;if(l!==o||c===null)throw new TypeError(`param "${r}" is invalid: expected ${o}, got ${l}`)}const s=(r,o)=>Object.entries(r).forEach(([a,c])=>n(a,c,o));s(t,!1),s(e,!0)}/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const Ze=BigInt(0),Pe=BigInt(1),Yi=BigInt(2),ud=BigInt(3),dd=BigInt(4),fd=BigInt(5),ty=BigInt(7),pd=BigInt(8),ey=BigInt(9),md=BigInt(16);function yn(i,t){if(t<=Ze)throw new Error("mod: expected positive modulus, got "+t);const e=i%t;return e>=Ze?e:t+e}function hn(i,t,e){if(t<Ze)throw new Error("pow2: expected non-negative exponent, got "+t);let n=i;for(;t-- >Ze;)n*=n,n%=e;return n}function Zh(i,t){if(i===Ze)throw new Error("invert: expected non-zero number");if(t<=Ze)throw new Error("invert: expected positive modulus, got "+t);let e=yn(i,t),n=t,s=Ze,r=Pe;for(;e!==Ze;){const a=n/e,c=n-e*a,l=s-r*a;n=e,e=c,s=r,r=l}if(n!==Pe)throw new Error("invert: does not exist");return yn(s,t)}function Yc(i,t,e){const n=i;if(!n.eql(n.sqr(t),e))throw new Error("Cannot find square root")}function gd(i,t){const e=i,n=(e.ORDER+Pe)/dd,s=e.pow(t,n);return Yc(e,s,t),s}function ny(i,t){const e=i,n=(e.ORDER-fd)/pd,s=e.mul(t,Yi),r=e.pow(s,n),o=e.mul(t,r),a=e.mul(e.mul(o,Yi),r),c=e.mul(o,e.sub(a,e.ONE));return Yc(e,c,t),c}function iy(i){const t=qo(i),e=_d(i),n=e(t,t.neg(t.ONE)),s=e(t,n),r=e(t,t.neg(n)),o=(i+ty)/md;return(a,c)=>{const l=a;let h=l.pow(c,o),u=l.mul(h,n);const d=l.mul(h,s),f=l.mul(h,r),g=l.eql(l.sqr(u),c),_=l.eql(l.sqr(d),c);h=l.cmov(h,u,g),u=l.cmov(f,d,_);const m=l.eql(l.sqr(u),c),p=l.cmov(h,u,m);return Yc(l,p,c),p}}function _d(i){if(i<ud)throw new Error("sqrt is not defined for small field");let t=i-Pe,e=0;for(;t%Yi===Ze;)t/=Yi,e++;let n=Yi;const s=qo(i);for(;Yh(s,n)===1;)if(n++>1e3)throw new Error("Cannot find square root: probably non-prime P");if(e===1)return gd;let r=s.pow(n,t);const o=(t+Pe)/Yi;return function(c,l){const h=c;if(h.is0(l))return l;if(Yh(h,l)!==1)throw new Error("Cannot find square root");let u=e,d=h.mul(h.ONE,r),f=h.pow(l,t),g=h.pow(l,o);for(;!h.eql(f,h.ONE);){if(h.is0(f))return h.ZERO;let _=1,m=h.sqr(f);for(;!h.eql(m,h.ONE);)if(_++,m=h.sqr(m),_===u)throw new Error("Cannot find square root");const p=Pe<<BigInt(u-_-1),M=h.pow(d,p);u=_,d=h.sqr(M),f=h.mul(f,d),g=h.mul(g,M)}return g}}function sy(i){return i%dd===ud?gd:i%pd===fd?ny:i%md===ey?iy(i):_d(i)}const ry=["create","isValid","is0","neg","inv","sqrt","sqr","eql","add","sub","mul","pow","div","addN","subN","mulN","sqrN"];function oy(i){const t={ORDER:"bigint",BYTES:"number",BITS:"number"},e=ry.reduce((n,s)=>(n[s]="function",n),t);if(hd(i,e),dc(i.BYTES,"BYTES"),dc(i.BITS,"BITS"),i.BYTES<1||i.BITS<1)throw new Error("invalid field: expected BYTES/BITS > 0");if(i.ORDER<=Pe)throw new Error("invalid field: expected ORDER > 1, got "+i.ORDER);return i}function ay(i,t,e){const n=i;if(e<Ze)throw new Error("invalid exponent, negatives unsupported");if(e===Ze)return n.ONE;if(e===Pe)return t;let s=n.ONE,r=t;for(;e>Ze;)e&Pe&&(s=n.mul(s,r)),r=n.sqr(r),e>>=Pe;return s}function vd(i,t,e=!1){const n=i,s=new Array(t.length).fill(e?n.ZERO:void 0),r=t.reduce((a,c,l)=>n.is0(c)?a:(s[l]=a,n.mul(a,c)),n.ONE),o=n.inv(r);return t.reduceRight((a,c,l)=>n.is0(c)?a:(s[l]=n.mul(a,s[l]),n.mul(a,c)),o),s}function Yh(i,t){const e=i,n=(e.ORDER-Pe)/Yi,s=e.pow(t,n),r=e.eql(s,e.ONE),o=e.eql(s,e.ZERO),a=e.eql(s,e.neg(e.ONE));if(!r&&!o&&!a)throw new Error("invalid Legendre symbol result");return r?1:o?0:-1}function cy(i,t){if(t!==void 0&&rd(t),i<=Ze)throw new Error("invalid n length: expected positive n, got "+i);if(t!==void 0&&t<1)throw new Error("invalid n length: expected positive bit length, got "+t);const e=Zc(i);if(t!==void 0&&t<e)throw new Error(`invalid n length: expected bit length (${e}) >= n.length (${t})`);const n=t!==void 0?t:e,s=Math.ceil(n/8);return{nBitLength:n,nByteLength:s}}const qh=new WeakMap;class xd{constructor(t,e={}){Jt(this,"ORDER");Jt(this,"BITS");Jt(this,"BYTES");Jt(this,"isLE");Jt(this,"ZERO",Ze);Jt(this,"ONE",Pe);Jt(this,"_lengths");Jt(this,"_mod");if(t<=Pe)throw new Error("invalid field: expected ORDER > 1, got "+t);let n;this.isLE=!1,e!=null&&typeof e=="object"&&(typeof e.BITS=="number"&&(n=e.BITS),typeof e.sqrt=="function"&&Object.defineProperty(this,"sqrt",{value:e.sqrt,enumerable:!0}),typeof e.isLE=="boolean"&&(this.isLE=e.isLE),e.allowedLengths&&(this._lengths=Object.freeze(e.allowedLengths.slice())),typeof e.modFromBytes=="boolean"&&(this._mod=e.modFromBytes));const{nBitLength:s,nByteLength:r}=cy(t,n);if(r>2048)throw new Error("invalid field: expected ORDER of <= 2048 bytes");this.ORDER=t,this.BITS=s,this.BYTES=r,Object.freeze(this)}create(t){return yn(t,this.ORDER)}isValid(t){if(typeof t!="bigint")throw new TypeError("invalid field element: expected bigint, got "+typeof t);return Ze<=t&&t<this.ORDER}is0(t){return t===Ze}isValidNot0(t){return!this.is0(t)&&this.isValid(t)}isOdd(t){return(t&Pe)===Pe}neg(t){return yn(-t,this.ORDER)}eql(t,e){return t===e}sqr(t){return yn(t*t,this.ORDER)}add(t,e){return yn(t+e,this.ORDER)}sub(t,e){return yn(t-e,this.ORDER)}mul(t,e){return yn(t*e,this.ORDER)}pow(t,e){return ay(this,t,e)}div(t,e){return yn(t*Zh(e,this.ORDER),this.ORDER)}sqrN(t){return t*t}addN(t,e){return t+e}subN(t,e){return t-e}mulN(t,e){return t*e}inv(t){return Zh(t,this.ORDER)}sqrt(t){let e=qh.get(this);return e||qh.set(this,e=sy(this.ORDER)),e(this,t)}toBytes(t){return this.isLE?cd(t,this.BYTES):Xc(t,this.BYTES)}fromBytes(t,e=!1){mn(t);const{_lengths:n,BYTES:s,isLE:r,ORDER:o,_mod:a}=this;if(n){if(t.length<1||!n.includes(t.length)||t.length>s)throw new Error("Field.fromBytes: expected "+n+" bytes, got "+t.length);const l=new Uint8Array(s);l.set(t,r?0:l.length-t.length),t=l}if(t.length!==s)throw new Error("Field.fromBytes: expected "+s+" bytes, got "+t.length);let c=r?ad(t):Yo(t);if(a&&(c=yn(c,o)),!e&&!this.isValid(c))throw new Error("invalid field element: outside of range 0..ORDER");return c}invertBatch(t){return vd(this,t)}cmov(t,e,n){return uc(n,"condition"),n?e:t}}Object.freeze(xd.prototype);function qo(i,t={}){return new xd(i,t)}function yd(i){if(typeof i!="bigint")throw new Error("field order must be bigint");if(i<=Pe)throw new Error("field order must be greater than 1");const t=Zc(i-Pe);return Math.ceil(t/8)}function ly(i){const t=yd(i);return t+Math.ceil(t/2)}function hy(i,t,e=!1){mn(i);const n=i.length,s=yd(t),r=Math.max(ly(t),16);if(n<r||n>1024)throw new Error("expected "+r+"-1024 bytes of input, got "+n);const o=e?ad(i):Yo(i),a=yn(o,t-Pe)+Pe;return e?cd(a,s):Xc(a,s)}/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const er=BigInt(0),qi=BigInt(1);function Fo(i,t){const e=t.negate();return i?e:t}function $h(i,t){const e=vd(i.Fp,t.map(n=>n.Z));return t.map((n,s)=>i.fromAffine(n.toAffine(e[s])))}function Md(i,t){if(!Number.isSafeInteger(i)||i<=0||i>t)throw new Error("invalid window size, expected [1.."+t+"], got W="+i)}function Xa(i,t){Md(i,t);const e=Math.ceil(t/i)+1,n=2**(i-1),s=2**i,r=ld(i),o=BigInt(i);return{windows:e,windowSize:n,mask:r,maxNumber:s,shiftBy:o}}function Kh(i,t,e){const{windowSize:n,mask:s,maxNumber:r,shiftBy:o}=e;let a=Number(i&s),c=i>>o;a>n&&(a-=r,c+=qi);const l=t*n,h=l+Math.abs(a)-1,u=a===0,d=a<0,f=t%2!==0;return{nextN:c,offset:h,isZero:u,isNeg:d,isNegF:f,offsetF:l}}const Za=new WeakMap,Sd=new WeakMap;function Ya(i){return Sd.get(i)||1}function Jh(i){if(i!==er)throw new Error("invalid wNAF")}class uy{constructor(t,e){Jt(this,"BASE");Jt(this,"ZERO");Jt(this,"Fn");Jt(this,"bits");this.BASE=t.BASE,this.ZERO=t.ZERO,this.Fn=t.Fn,this.bits=e}_unsafeLadder(t,e,n=this.ZERO){let s=t;for(;e>er;)e&qi&&(n=n.add(s)),s=s.double(),e>>=qi;return n}precomputeWindow(t,e){const{windows:n,windowSize:s}=Xa(e,this.bits),r=[];let o=t,a=o;for(let c=0;c<n;c++){a=o,r.push(a);for(let l=1;l<s;l++)a=a.add(o),r.push(a);o=a.double()}return r}wNAF(t,e,n){if(!this.Fn.isValid(n))throw new Error("invalid scalar");let s=this.ZERO,r=this.BASE;const o=Xa(t,this.bits);for(let a=0;a<o.windows;a++){const{nextN:c,offset:l,isZero:h,isNeg:u,isNegF:d,offsetF:f}=Kh(n,a,o);n=c,h?r=r.add(Fo(d,e[f])):s=s.add(Fo(u,e[l]))}return Jh(n),{p:s,f:r}}wNAFUnsafe(t,e,n,s=this.ZERO){const r=Xa(t,this.bits);for(let o=0;o<r.windows&&n!==er;o++){const{nextN:a,offset:c,isZero:l,isNeg:h}=Kh(n,o,r);if(n=a,!l){const u=e[c];s=s.add(h?u.negate():u)}}return Jh(n),s}getPrecomputes(t,e,n){let s=Za.get(e);return s||(s=this.precomputeWindow(e,t),t!==1&&(typeof n=="function"&&(s=n(s)),Za.set(e,s))),s}cached(t,e,n){const s=Ya(t);return this.wNAF(s,this.getPrecomputes(s,t,n),e)}unsafe(t,e,n,s){const r=Ya(t);return r===1?this._unsafeLadder(t,e,s):this.wNAFUnsafe(r,this.getPrecomputes(r,t,n),e,s)}createCache(t,e){Md(e,this.bits),Sd.set(t,e),Za.delete(t)}hasCache(t){return Ya(t)!==1}}function dy(i,t,e,n){let s=t,r=i.ZERO,o=i.ZERO;for(;e>er||n>er;)e&qi&&(r=r.add(s)),n&qi&&(o=o.add(s)),s=s.double(),e>>=qi,n>>=qi;return{p1:r,p2:o}}function jh(i,t,e){if(t){if(t.ORDER!==i)throw new Error("Field.ORDER must match order: Fp == p, Fn == n");return oy(t),t}else return qo(i,{isLE:e})}function fy(i,t,e={},n){if(n===void 0&&(n=i==="edwards"),!t||typeof t!="object")throw new Error(`expected valid ${i} CURVE object`);for(const c of["p","n","h"]){const l=t[c];if(!(typeof l=="bigint"&&l>er))throw new Error(`CURVE.${c} must be positive bigint`)}const s=jh(t.p,e.Fp,n),r=jh(t.n,e.Fn,n),a=["Gx","Gy","a","b"];for(const c of a)if(!s.isValid(t[c]))throw new Error(`CURVE.${c} must be valid field element of CURVE.Fp`);return t=Object.freeze(Object.assign({},t)),{CURVE:t,Fp:s,Fn:r}}function py(i,t){return function(n){const s=i(n);return{secretKey:s,publicKey:t(s)}}}/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const Qh=(i,t)=>(i+(i>=0?t:-t)/_y)/t;function my(i,t,e){Qx("scalar",i,Wi,e);const[[n,s],[r,o]]=t,a=Qh(o*i,e),c=Qh(-s*i,e);let l=i-a*n-c*r,h=-a*s-c*o;const u=l<Wi,d=h<Wi;u&&(l=-l),d&&(h=-h);const f=ld(Math.ceil(Zc(e)/2))+vr;if(l<Wi||l>=f||h<Wi||h>=f)throw new Error("splitScalar (endomorphism): failed for k");return{k1neg:u,k1:l,k2neg:d,k2:h}}class gy extends Error{constructor(t=""){super(t)}}const $n={Err:gy,_tlv:{encode:(i,t)=>{const{Err:e}=$n;if(dc(i,"tag"),i<0||i>255)throw new e("tlv.encode: wrong tag");if(typeof t!="string")throw new TypeError('"data" expected string, got type='+typeof t);if(t.length&1)throw new e("tlv.encode: unpadded data");const n=t.length/2,s=xo(n);if(s.length/2&128)throw new e("tlv.encode: long form length too big");const r=n>127?xo(s.length/2|128):"";return xo(i)+r+s+t},decode(i,t){const{Err:e}=$n;t=mn(t,void 0,"DER data");let n=0;if(i<0||i>255)throw new e("tlv.encode: wrong tag");if(t.length<2||t[n++]!==i)throw new e("tlv.decode: wrong tlv");const s=t[n++],r=!!(s&128);let o=0;if(!r)o=s;else{const c=s&127;if(!c)throw new e("tlv.decode(long): indefinite length not supported");if(c>4)throw new e("tlv.decode(long): byte length is too big");const l=t.subarray(n,n+c);if(l.length!==c)throw new e("tlv.decode: length bytes not complete");if(l[0]===0)throw new e("tlv.decode(long): zero leftmost byte");for(const h of l)o=o<<8|h;if(n+=c,o<128)throw new e("tlv.decode(long): not minimal encoding")}const a=t.subarray(n,n+o);if(a.length!==o)throw new e("tlv.decode: wrong value length");return{v:a,l:t.subarray(n+o)}}},_int:{encode(i){const{Err:t}=$n;if(Wc(i),i<Wi)throw new t("integer: negative integers are not allowed");let e=xo(i);if(Number.parseInt(e[0],16)&8&&(e="00"+e),e.length&1)throw new t("unexpected DER parsing assertion: unpadded hex");return e},decode(i){const{Err:t}=$n;if(i.length<1)throw new t("invalid signature integer: empty");if(i[0]&128)throw new t("invalid signature integer: negative");if(i.length>1&&i[0]===0&&!(i[1]&128))throw new t("invalid signature integer: unnecessary leading zero");return Yo(i)}},toSig(i){const{Err:t,_int:e,_tlv:n}=$n,s=mn(i,void 0,"signature"),{v:r,l:o}=n.decode(48,s);if(o.length)throw new t("invalid signature: left bytes after parsing");const{v:a,l:c}=n.decode(2,r),{v:l,l:h}=n.decode(2,c);if(h.length)throw new t("invalid signature: left bytes after parsing");return{r:e.decode(a),s:e.decode(l)}},hexFromSig(i){const{_tlv:t,_int:e}=$n,n=t.encode(2,e.encode(i.r)),s=t.encode(2,e.encode(i.s)),r=n+s;return t.encode(48,r)}};Object.freeze($n._tlv);Object.freeze($n._int);Object.freeze($n);const Wi=BigInt(0),vr=BigInt(1),_y=BigInt(2),yo=BigInt(3),vy=BigInt(4);function xy(i,t={}){const e=fy("weierstrass",i,t),n=e.Fp,s=e.Fn;let r=e.CURVE;const{h:o,n:a}=r;hd(t,{},{allowInfinityPoint:"boolean",clearCofactor:"function",isTorsionFree:"function",fromBytes:"function",toBytes:"function",endo:"object"});const{endo:c,allowInfinityPoint:l}=t;if(c&&(!n.is0(r.a)||typeof c.beta!="bigint"||!Array.isArray(c.basises)))throw new Error('invalid endo: expected "beta": bigint and "basises": array');const h=My(n,s);function u(){if(!n.isOdd)throw new Error("compression is not supported: Field does not have .isOdd()")}function d(k,P,L){if(l&&P.is0())return Uint8Array.of(0);const{x:V,y:H}=P.toAffine(),Q=n.toBytes(V);if(uc(L,"isCompressed"),L){u();const Y=!n.isOdd(H);return Uo(yy(Y),Q)}else return Uo(Uint8Array.of(4),Q,n.toBytes(H))}function f(k){mn(k,void 0,"Point");const{publicKey:P,publicKeyUncompressed:L}=h,V=k.length,H=k[0],Q=k.subarray(1);if(l&&V===1&&H===0)return{x:n.ZERO,y:n.ZERO};if(V===P&&(H===2||H===3)){const Y=n.fromBytes(Q);if(!n.isValid(Y))throw new Error("bad point: is not on curve, wrong x");const it=m(Y);let nt;try{nt=n.sqrt(it)}catch(ot){const B=ot instanceof Error?": "+ot.message:"";throw new Error("bad point: is not on curve, sqrt error"+B)}u();const ct=n.isOdd(nt);return(H&1)===1!==ct&&(nt=n.neg(nt)),{x:Y,y:nt}}else if(V===L&&H===4){const Y=n.BYTES,it=n.fromBytes(Q.subarray(0,Y)),nt=n.fromBytes(Q.subarray(Y,Y*2));if(!p(it,nt))throw new Error("bad point: is not on curve");return{x:it,y:nt}}else throw new Error(`bad point: got length ${V}, expected compressed=${P} or uncompressed=${L}`)}const g=t.toBytes===void 0?d:t.toBytes,_=t.fromBytes===void 0?f:t.fromBytes;function m(k){const P=n.sqr(k),L=n.mul(P,k);return n.add(n.add(L,n.mul(k,r.a)),r.b)}function p(k,P){const L=n.sqr(P),V=m(k);return n.eql(L,V)}if(!p(r.Gx,r.Gy))throw new Error("bad curve params: generator point");const M=n.mul(n.pow(r.a,yo),vy),v=n.mul(n.sqr(r.b),BigInt(27));if(n.is0(n.add(M,v)))throw new Error("bad curve params: a or b");function w(k,P,L=!1){if(!n.isValid(P)||L&&n.is0(P))throw new Error(`bad point coordinate ${k}`);return P}function U(k){if(!(k instanceof F))throw new Error("Weierstrass Point expected")}function T(k){if(!c||!c.basises)throw new Error("no endo");return my(k,c.basises,s.ORDER)}function b(k,P,L,V,H){return L=new F(n.mul(L.X,k),L.Y,L.Z),P=Fo(V,P),L=Fo(H,L),P.add(L)}const C=class C{constructor(P,L,V){Jt(this,"X");Jt(this,"Y");Jt(this,"Z");this.X=w("x",P),this.Y=w("y",L,!0),this.Z=w("z",V),Object.freeze(this)}static CURVE(){return r}static fromAffine(P){const{x:L,y:V}=P||{};if(!P||!n.isValid(L)||!n.isValid(V))throw new Error("invalid affine point");if(P instanceof C)throw new Error("projective point not allowed");return n.is0(L)&&n.is0(V)?C.ZERO:new C(L,V,n.ONE)}static fromBytes(P){const L=C.fromAffine(_(mn(P,void 0,"point")));return L.assertValidity(),L}static fromHex(P){return C.fromBytes($x(P))}get x(){return this.toAffine().x}get y(){return this.toAffine().y}precompute(P=8,L=!0){return x.createCache(this,P),L||this.multiply(yo),this}assertValidity(){const P=this;if(P.is0()){if(t.allowInfinityPoint&&n.is0(P.X)&&n.eql(P.Y,n.ONE)&&n.is0(P.Z))return;throw new Error("bad point: ZERO")}const{x:L,y:V}=P.toAffine();if(!n.isValid(L)||!n.isValid(V))throw new Error("bad point: x or y not field elements");if(!p(L,V))throw new Error("bad point: equation left != right");if(!P.isTorsionFree())throw new Error("bad point: not in prime-order subgroup")}hasEvenY(){const{y:P}=this.toAffine();if(!n.isOdd)throw new Error("Field doesn't support isOdd");return!n.isOdd(P)}equals(P){U(P);const{X:L,Y:V,Z:H}=this,{X:Q,Y,Z:it}=P,nt=n.eql(n.mul(L,it),n.mul(Q,H)),ct=n.eql(n.mul(V,it),n.mul(Y,H));return nt&&ct}negate(){return new C(this.X,n.neg(this.Y),this.Z)}double(){const{a:P,b:L}=r,V=n.mul(L,yo),{X:H,Y:Q,Z:Y}=this;let it=n.ZERO,nt=n.ZERO,ct=n.ZERO,W=n.mul(H,H),ot=n.mul(Q,Q),B=n.mul(Y,Y),Z=n.mul(H,Q);return Z=n.add(Z,Z),ct=n.mul(H,Y),ct=n.add(ct,ct),it=n.mul(P,ct),nt=n.mul(V,B),nt=n.add(it,nt),it=n.sub(ot,nt),nt=n.add(ot,nt),nt=n.mul(it,nt),it=n.mul(Z,it),ct=n.mul(V,ct),B=n.mul(P,B),Z=n.sub(W,B),Z=n.mul(P,Z),Z=n.add(Z,ct),ct=n.add(W,W),W=n.add(ct,W),W=n.add(W,B),W=n.mul(W,Z),nt=n.add(nt,W),B=n.mul(Q,Y),B=n.add(B,B),W=n.mul(B,Z),it=n.sub(it,W),ct=n.mul(B,ot),ct=n.add(ct,ct),ct=n.add(ct,ct),new C(it,nt,ct)}add(P){U(P);const{X:L,Y:V,Z:H}=this,{X:Q,Y,Z:it}=P;let nt=n.ZERO,ct=n.ZERO,W=n.ZERO;const ot=r.a,B=n.mul(r.b,yo);let Z=n.mul(L,Q),J=n.mul(V,Y),$=n.mul(H,it),ut=n.add(L,V),gt=n.add(Q,Y);ut=n.mul(ut,gt),gt=n.add(Z,J),ut=n.sub(ut,gt),gt=n.add(L,H);let At=n.add(Q,it);return gt=n.mul(gt,At),At=n.add(Z,$),gt=n.sub(gt,At),At=n.add(V,H),nt=n.add(Y,it),At=n.mul(At,nt),nt=n.add(J,$),At=n.sub(At,nt),W=n.mul(ot,gt),nt=n.mul(B,$),W=n.add(nt,W),nt=n.sub(J,W),W=n.add(J,W),ct=n.mul(nt,W),J=n.add(Z,Z),J=n.add(J,Z),$=n.mul(ot,$),gt=n.mul(B,gt),J=n.add(J,$),$=n.sub(Z,$),$=n.mul(ot,$),gt=n.add(gt,$),Z=n.mul(J,gt),ct=n.add(ct,Z),Z=n.mul(At,gt),nt=n.mul(ut,nt),nt=n.sub(nt,Z),Z=n.mul(ut,J),W=n.mul(At,W),W=n.add(W,Z),new C(nt,ct,W)}subtract(P){return U(P),this.add(P.negate())}is0(){return this.equals(C.ZERO)}multiply(P){const{endo:L}=t;if(!s.isValidNot0(P))throw new RangeError("invalid scalar: out of range");let V,H;const Q=Y=>x.cached(this,Y,it=>$h(C,it));if(L){const{k1neg:Y,k1:it,k2neg:nt,k2:ct}=T(P),{p:W,f:ot}=Q(it),{p:B,f:Z}=Q(ct);H=ot.add(Z),V=b(L.beta,W,B,Y,nt)}else{const{p:Y,f:it}=Q(P);V=Y,H=it}return $h(C,[V,H])[0]}multiplyUnsafe(P){const{endo:L}=t,V=this,H=P;if(!s.isValid(H))throw new RangeError("invalid scalar: out of range");if(H===Wi||V.is0())return C.ZERO;if(H===vr)return V;if(x.hasCache(this))return this.multiply(H);if(L){const{k1neg:Q,k1:Y,k2neg:it,k2:nt}=T(H),{p1:ct,p2:W}=dy(C,V,Y,nt);return b(L.beta,ct,W,Q,it)}else return x.unsafe(V,H)}toAffine(P){const L=this;let V=P;const{X:H,Y:Q,Z:Y}=L;if(n.eql(Y,n.ONE))return{x:H,y:Q};const it=L.is0();V==null&&(V=it?n.ONE:n.inv(Y));const nt=n.mul(H,V),ct=n.mul(Q,V),W=n.mul(Y,V);if(it)return{x:n.ZERO,y:n.ZERO};if(!n.eql(W,n.ONE))throw new Error("invZ was invalid");return{x:nt,y:ct}}isTorsionFree(){const{isTorsionFree:P}=t;return o===vr?!0:P?P(C,this):x.unsafe(this,a).is0()}clearCofactor(){const{clearCofactor:P}=t;return o===vr?this:P?P(C,this):this.multiplyUnsafe(o)}isSmallOrder(){return o===vr?this.is0():this.clearCofactor().is0()}toBytes(P=!0){return uc(P,"isCompressed"),this.assertValidity(),g(C,this,P)}toHex(P=!0){return qx(this.toBytes(P))}toString(){return`<Point ${this.is0()?"ZERO":this.toHex()}>`}};Jt(C,"BASE",new C(r.Gx,r.Gy,n.ONE)),Jt(C,"ZERO",new C(n.ZERO,n.ONE,n.ZERO)),Jt(C,"Fp",n),Jt(C,"Fn",s);let F=C;const E=s.BITS,x=new uy(F,t.endo?Math.ceil(E/2):E);return E>=8&&F.BASE.precompute(8),Object.freeze(F.prototype),Object.freeze(F),F}function yy(i){return Uint8Array.of(i?2:3)}function My(i,t){return{secretKey:t.BYTES,publicKey:1+i.BYTES,publicKeyUncompressed:1+2*i.BYTES,publicKeyHasPrefix:!0,signature:2*t.BYTES}}/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const $o={p:BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"),n:BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"),h:BigInt(1),a:BigInt(0),b:BigInt(7),Gx:BigInt("0x79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798"),Gy:BigInt("0x483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8")},Sy={beta:BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),basises:[[BigInt("0x3086d221a7d46bcde86c90e49284eb15"),-BigInt("0xe4437ed6010e88286f547fa90abfe4c3")],[BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"),BigInt("0x3086d221a7d46bcde86c90e49284eb15")]]},Ey=BigInt(0),fc=BigInt(2);function wy(i){const t=$o.p,e=BigInt(3),n=BigInt(6),s=BigInt(11),r=BigInt(22),o=BigInt(23),a=BigInt(44),c=BigInt(88),l=i*i*i%t,h=l*l*i%t,u=hn(h,e,t)*h%t,d=hn(u,e,t)*h%t,f=hn(d,fc,t)*l%t,g=hn(f,s,t)*f%t,_=hn(g,r,t)*g%t,m=hn(_,a,t)*_%t,p=hn(m,c,t)*m%t,M=hn(p,a,t)*_%t,v=hn(M,e,t)*h%t,w=hn(v,o,t)*g%t,U=hn(w,n,t)*l%t,T=hn(U,fc,t);if(!Bo.eql(Bo.sqr(T),i))throw new Error("Cannot find square root");return T}const Bo=qo($o.p,{sqrt:wy}),ar=xy($o,{Fp:Bo,endo:Sy}),tu={};function zo(i,...t){let e=tu[i];if(e===void 0){const n=Xh(Jx(i));e=Uo(n,n),tu[i]=e}return Xh(Uo(e,...t))}const Ko=i=>i.toBytes(!0).slice(1),Jo=i=>i%fc===Ey;function Ed(i){const{Fn:t,BASE:e}=ar,n=t.fromBytes(i),s=e.multiply(n);return{scalar:Jo(s.y)?n:t.neg(n),bytes:Ko(s)}}function wd(i){const t=Bo;if(!t.isValidNot0(i))throw new Error("invalid x: Fail if x ≥ p");const e=t.create(i*i),n=t.create(e*i+BigInt(7));let s=t.sqrt(n);Jo(s)||(s=t.neg(s));const r=ar.fromAffine({x:i,y:s});return r.assertValidity(),r}const zs=Yo;function bd(...i){return ar.Fn.create(zs(zo("BIP0340/challenge",...i)))}function eu(i){return Ed(i).bytes}function by(i,t,e=sd(32)){const{Fn:n,BASE:s}=ar,r=mn(i,void 0,"message"),{bytes:o,scalar:a}=Ed(t),c=mn(e,32,"auxRand"),l=n.toBytes(a^zs(zo("BIP0340/aux",c))),h=zo("BIP0340/nonce",l,o,r),u=n.create(zs(h));if(u===0n)throw new Error("sign failed: k is zero");const d=s.multiply(u),f=Jo(d.y)?u:n.neg(u),g=Ko(d),_=bd(g,o,r),m=new Uint8Array(64);if(m.set(g,0),m.set(n.toBytes(n.create(f+_*a)),32),!Td(m,r,o))throw new Error("sign: Invalid signature produced");return m}function Td(i,t,e){const{Fp:n,Fn:s,BASE:r}=ar,o=mn(i,64,"signature"),a=mn(t,void 0,"message"),c=mn(e,32,"publicKey");try{const l=wd(zs(c)),h=zs(o.subarray(0,32));if(!n.isValidNot0(h))return!1;const u=zs(o.subarray(32,64));if(!s.isValidNot0(u))return!1;const d=bd(s.toBytes(h),Ko(l),a),f=r.multiplyUnsafe(u).add(l.multiplyUnsafe(s.neg(d))),{x:g,y:_}=f.toAffine();return!(f.is0()||!Jo(_)||g!==h)}catch{return!1}}const Ad=(()=>{const e=n=>(n=n===void 0?sd(48):n,hy(n,$o.n));return Object.freeze({keygen:py(e,eu),getPublicKey:eu,sign:by,verify:Td,Point:ar,utils:Object.freeze({randomSecretKey:e,taggedHash:zo,lift_x:wd,pointToBytes:Ko}),lengths:Object.freeze({secretKey:32,publicKey:32,publicKeyHasPrefix:!1,signature:32*2,seed:48})})})(),pc="sw_id_v1",mc=i=>Array.from(i).map(t=>t.toString(16).padStart(2,"0")).join(""),nu=i=>{const t=i.replace(/-/g,"+").replace(/_/g,"/"),e=atob(t);return Uint8Array.from(e,n=>n.charCodeAt(0))};class iu{constructor(t,e,n,s){this.peerId=t,this.displayName=e,this.isNew=s,this._priv=n}get shortId(){return this.peerId.slice(-8)}setName(t){this.displayName=t,Rd()}async sign(t){const e=new TextEncoder().encode(t),n=await crypto.subtle.sign({name:"Ed25519"},this._priv,e);return mc(new Uint8Array(n))}}let Kn=null,Mr=null;function Rd(){if(!(!Kn||!Mr))try{localStorage.setItem(pc,JSON.stringify({privJwk:Mr,displayName:Kn.displayName}))}catch{}}async function Ty(){if(Kn)return Kn;const i=localStorage.getItem(pc);if(i)try{const{privJwk:n,displayName:s}=JSON.parse(i),r=await crypto.subtle.importKey("jwk",n,{name:"Ed25519"},!1,["sign"]),o=mc(nu(n.x));return Mr=n,Kn=new iu(o,s||"",r,!1),Kn}catch{localStorage.removeItem(pc)}const t=await crypto.subtle.generateKey({name:"Ed25519"},!0,["sign","verify"]);Mr=await crypto.subtle.exportKey("jwk",t.privateKey);const e=mc(nu(Mr.x));return Kn=new iu(e,"",t.privateKey,!0),Rd(),Kn}function Cd(){return Kn}const Pd=["wss://relay.primal.net","wss://nos.lol","wss://relay.snort.social","wss://relay.damus.io"],Ay=[{urls:"stun:stun.l.google.com:19302"},{urls:"stun:stun1.l.google.com:19302"},{urls:"turn:openrelay.metered.ca:80",username:"openrelayproject",credential:"openrelayproject"},{urls:"turn:openrelay.metered.ca:80?transport=tcp",username:"openrelayproject",credential:"openrelayproject"}];function Ry(){return`sw-2-${window.location.hash.slice(1).trim().toLowerCase().replace(/[^a-z0-9-]/g,"-").replace(/-{2,}/g,"-").slice(0,40)||"main"}`}function Ld(){return window.location.hash.slice(1).trim()||"main"}function Cy(i){const t=i.trim().toLowerCase().replace(/[^a-z0-9-]/g,"-").replace(/-{2,}/g,"-")||"main";window.location.hash=t}const gc=i=>Array.from(i).map(t=>t.toString(16).padStart(2,"0")).join(""),Py=i=>new Uint8Array(i.match(/.{2}/g).map(t=>parseInt(t,16)));function Id(){const i=crypto.getRandomValues(new Uint8Array(32)),t=gc(Ad.getPublicKey(i));return{privkey:i,pubkey:t}}async function Mo(i,t,e,n){const s={pubkey:t,created_at:Math.floor(Date.now()/1e3),kind:20001,tags:e,content:typeof n=="string"?n:JSON.stringify(n)},r=new TextEncoder().encode(JSON.stringify([0,s.pubkey,s.created_at,s.kind,s.tags,s.content])),o=await crypto.subtle.digest("SHA-256",r);return s.id=gc(new Uint8Array(o)),s.sig=gc(await Ad.sign(Py(s.id),i)),s}var jn,Tr,yi,Hs,Ar,_c;class Dd{constructor(){Ft(this,Ar);Ft(this,jn,[]);Ft(this,Tr,new Set);Ft(this,yi,new Map);Ft(this,Hs,!1)}connect(t){return new Promise(e=>{let n=!1;for(const s of t){const r={url:s,ws:null,ready:!1,retries:0};I(this,jn).push(r),Dt(this,Ar,_c).call(this,r,()=>{n||(n=!0,e())})}setTimeout(()=>{n||(n=!0,e())},1e4)})}subscribe(t,e,n){I(this,yi).set(t,{filter:e,cb:n});const s=JSON.stringify(["REQ",t,e]);for(const r of I(this,jn))r.ready&&r.ws.send(s)}unsubscribe(t){I(this,yi).delete(t);const e=JSON.stringify(["CLOSE",t]);for(const n of I(this,jn))n.ready&&n.ws.send(e)}publish(t){const e=JSON.stringify(["EVENT",t]);let n=0;for(const s of I(this,jn))s.ready&&(s.ws.send(e),n++);return n>0}close(){var t;Yt(this,Hs,!0);for(const e of I(this,jn))try{(t=e.ws)==null||t.close()}catch{}Yt(this,jn,[]),I(this,yi).clear()}}jn=new WeakMap,Tr=new WeakMap,yi=new WeakMap,Hs=new WeakMap,Ar=new WeakSet,_c=function(t,e){if(I(this,Hs))return;const n=new WebSocket(t.url);t.ws=n,n.addEventListener("open",()=>{t.ready=!0,t.retries=0,e==null||e(),e=null;for(const[s,{filter:r}]of I(this,yi))n.send(JSON.stringify(["REQ",s,r]))}),n.addEventListener("message",({data:s})=>{var r;try{const o=JSON.parse(s);if(o[0]!=="EVENT")return;const a=o[2];if(!(a!=null&&a.id)||I(this,Tr).has(a.id))return;I(this,Tr).add(a.id),(r=I(this,yi).get(o[1]))==null||r.cb(a)}catch{}}),n.addEventListener("close",()=>{if(t.ready=!1,I(this,Hs))return;const s=Math.min(2e3*2**t.retries++,3e4);setTimeout(()=>Dt(this,Ar,_c).call(this,t,null),s)}),n.addEventListener("error",()=>{})};var me,Qn,Gs,Ki,Vs,Rr,Cr,Pr,Ws,Lr,Ii,vc,xc;class Ly extends EventTarget{constructor(e){super();Ft(this,Ii);Ft(this,me);Ft(this,Qn,null);Ft(this,Gs,!1);Ft(this,Ki,!1);Ft(this,Vs,!1);Ft(this,Rr,null);Ft(this,Cr,null);Ft(this,Pr,[]);Ft(this,Ws,!1);Ft(this,Lr,async()=>{if(!I(this,Ki)&&I(this,me).signalingState==="stable")try{Yt(this,Ki,!0),await I(this,me).setLocalDescription(),this.dispatchEvent(new CustomEvent("signal",{detail:{type:"offer",sdp:I(this,me).localDescription.sdp}}))}catch(e){console.warn("[RTCPeer] negotiate error",e)}finally{Yt(this,Ki,!1)}});Yt(this,Gs,e),Yt(this,me,new RTCPeerConnection({iceServers:Ay})),e||(Yt(this,Qn,I(this,me).createDataChannel("sw",{ordered:!0})),Dt(this,Ii,vc).call(this,I(this,Qn))),I(this,me).ondatachannel=({channel:n})=>{Yt(this,Qn,n),Dt(this,Ii,vc).call(this,n)},I(this,me).onicecandidate=({candidate:n})=>{n&&this.dispatchEvent(new CustomEvent("signal",{detail:{type:"ice",candidate:n.toJSON()}}))},I(this,me).onnegotiationneeded=I(this,Lr),I(this,me).ontrack=({track:n,streams:s})=>{var o;const r=s[0]??new MediaStream([n]);(o=I(this,Cr))==null||o.call(this,n,r)},I(this,me).onconnectionstatechange=()=>{I(this,me).connectionState==="failed"&&this.dispatchEvent(new CustomEvent("failed"))}}async handleSignal({type:e,sdp:n,candidate:s}){try{if(e==="offer"){const r=I(this,me).signalingState==="have-local-offer",o=I(this,Ki)||r;if(Yt(this,Vs,!I(this,Gs)&&o),I(this,Vs))return;await I(this,me).setRemoteDescription({type:"offer",sdp:n}),Yt(this,Ws,!0),await I(this,me).setLocalDescription(),this.dispatchEvent(new CustomEvent("signal",{detail:{type:"answer",sdp:I(this,me).localDescription.sdp}})),await Dt(this,Ii,xc).call(this),I(this,Gs)&&r&&setTimeout(I(this,Lr),200)}else if(e==="answer")I(this,me).signalingState==="have-local-offer"&&(await I(this,me).setRemoteDescription({type:"answer",sdp:n}),Yt(this,Ws,!0),await Dt(this,Ii,xc).call(this));else if(e==="ice")if(!I(this,Ws))I(this,Pr).push(s);else try{await I(this,me).addIceCandidate(s)}catch(r){I(this,Vs)||console.warn("[RTCPeer] addIceCandidate",r)}}catch(r){console.warn("[RTCPeer] handleSignal",e,r)}}send(e){var n;((n=I(this,Qn))==null?void 0:n.readyState)==="open"&&I(this,Qn).send(JSON.stringify(e))}addTrack(e,n){try{I(this,me).addTrack(e,n)}catch{}}onMessage(e){Yt(this,Rr,e)}onTrack(e){Yt(this,Cr,e)}get pc(){return I(this,me)}get connected(){var e;return((e=I(this,Qn))==null?void 0:e.readyState)==="open"}close(){try{I(this,me).close()}catch{}}}me=new WeakMap,Qn=new WeakMap,Gs=new WeakMap,Ki=new WeakMap,Vs=new WeakMap,Rr=new WeakMap,Cr=new WeakMap,Pr=new WeakMap,Ws=new WeakMap,Lr=new WeakMap,Ii=new WeakSet,vc=function(e){e.onopen=()=>this.dispatchEvent(new CustomEvent("open")),e.onclose=()=>this.dispatchEvent(new CustomEvent("close")),e.onmessage=({data:n})=>{var s;try{(s=I(this,Rr))==null||s.call(this,JSON.parse(n))}catch{}}},xc=async function(){const e=I(this,Pr).splice(0);for(const n of e)try{await I(this,me).addIceCandidate(n)}catch{}};var We,sn,Oe,Mi,Xs,ti,Si,Ji,ji,Cn,Zs,Ir,Dr,Ys,jt,Nd,Ud,yc,Mc,Od,Sc,Ec,Fd,gi,qn;class Iy{constructor(t,e=0,n="available"){Ft(this,jt);Ft(this,We,null);Ft(this,sn,null);Ft(this,Oe,new Map);Ft(this,Mi,new Map);Ft(this,Xs,new Map);Ft(this,ti,{});Ft(this,Si,"");Ft(this,Ji,0);Ft(this,ji,"available");Ft(this,Cn,"");Ft(this,Zs,null);Ft(this,Ir,[]);Ft(this,Dr,0);Ft(this,Ys,null);Yt(this,Si,t),Yt(this,Ji,e),Yt(this,ji,n)}async start(){Yt(this,We,Id()),Yt(this,Cn,Ry()),Yt(this,sn,new Dd),await I(this,sn).connect(Pd),I(this,sn).subscribe("room-presence",{kinds:[20001],"#r":[I(this,Cn)],"#t":["hello","bye"]},t=>Dt(this,jt,Nd).call(this,t)),I(this,sn).subscribe("room-signals",{kinds:[20001],"#r":[I(this,Cn)],"#p":[I(this,We).pubkey]},t=>Dt(this,jt,Ud).call(this,t)),await Dt(this,jt,Sc).call(this),await Dt(this,jt,Ec).call(this),Yt(this,Ys,setInterval(()=>Dt(this,jt,Ec).call(this),3e4))}stop(){var t;clearInterval(I(this,Ys)),Yt(this,Ys,null),Dt(this,jt,Fd).call(this),(t=I(this,sn))==null||t.close();for(const{peer:e}of I(this,Oe).values())e.close();I(this,Oe).clear(),I(this,Mi).clear(),I(this,Xs).clear(),Yt(this,sn,null)}move(t,e,n,s=0){const r={type:"move",identityId:Dt(this,jt,gi).call(this),pos:{x:t,y:e,z:n,ry:s}};for(const{peer:o}of I(this,Oe).values())o.send(r)}chat(t){const e={type:"chat",identityId:Dt(this,jt,gi).call(this),username:I(this,Si),text:t,ts:Date.now()};for(const{peer:n}of I(this,Oe).values())n.send(e)}setAvatar(t){Yt(this,Ji,t);const e={type:"avatar",identityId:Dt(this,jt,gi).call(this),presetId:t};for(const{peer:n}of I(this,Oe).values())n.send(e)}setStatus(t){Yt(this,ji,t);const e={type:"status",identityId:Dt(this,jt,gi).call(this),status:t};for(const{peer:n}of I(this,Oe).values())n.send(e)}addVoiceTrack(t,e){I(this,Ir).push({track:t,stream:e});for(const{peer:n}of I(this,Oe).values())n.addTrack(t,e)}onVoiceTrack(t){Yt(this,Zs,t);for(const[e,{identityId:n,peer:s}]of I(this,Oe))for(const r of s.pc.getReceivers()){const o=r.track;!o||o.kind!=="audio"||o.readyState==="ended"||t(o,new MediaStream([o]),n,e)}}wireToIdentityId(t){return I(this,Mi).get(t)??t}getPeers(){const t={};for(const[e,{peer:n}]of I(this,Oe))t[e]=n.pc;return t}on(t,e){return I(this,ti)[t]||(I(this,ti)[t]=[]),I(this,ti)[t].push(e),()=>{I(this,ti)[t]=I(this,ti)[t].filter(n=>n!==e)}}}We=new WeakMap,sn=new WeakMap,Oe=new WeakMap,Mi=new WeakMap,Xs=new WeakMap,ti=new WeakMap,Si=new WeakMap,Ji=new WeakMap,ji=new WeakMap,Cn=new WeakMap,Zs=new WeakMap,Ir=new WeakMap,Dr=new WeakMap,Ys=new WeakMap,jt=new WeakSet,Nd=async function(t){var r;const e=t.pubkey;if(e===I(this,We).pubkey)return;const n=(r=t.tags.find(o=>o[0]==="t"))==null?void 0:r[1],s=(()=>{try{return JSON.parse(t.content)}catch{return{}}})();if(n==="hello"){const{identityId:o,username:a="",presetId:c=0,status:l="available"}=s;if(I(this,Mi).set(e,o),I(this,Xs).set(o,e),Dt(this,jt,qn).call(this,"HELLO",{from:o,username:a,presetId:c,status:l}),!I(this,Oe).has(e)){const u=I(this,We).pubkey<e;await Dt(this,jt,yc).call(this,e,o,u)}const h=Date.now();h-I(this,Dr)>2e3&&(Yt(this,Dr,h),await Dt(this,jt,Sc).call(this))}if(n==="bye"){const{identityId:o}=s;Dt(this,jt,Mc).call(this,e,o)}},Ud=async function(t){var s;const e=t.pubkey,n=(()=>{try{return JSON.parse(t.content)}catch{return null}})();if(n){if(!I(this,Oe).has(e)){const r=I(this,Mi).get(e)??e,o=I(this,We).pubkey<e;await Dt(this,jt,yc).call(this,e,r,o)}await((s=I(this,Oe).get(e))==null?void 0:s.peer.handleSignal(n))}},yc=async function(t,e,n){const s=new Ly(n);I(this,Oe).set(t,{identityId:e,peer:s}),s.addEventListener("signal",async({detail:r})=>{var a;const o=await Mo(I(this,We).privkey,I(this,We).pubkey,[["r",I(this,Cn)],["p",t]],r);(a=I(this,sn))==null||a.publish(o)}),s.onMessage(r=>Dt(this,jt,Od).call(this,r,e)),s.onTrack((r,o)=>{I(this,Zs)&&I(this,Zs).call(this,r,o,e,t)}),s.addEventListener("open",()=>{s.send({type:"intro",identityId:Dt(this,jt,gi).call(this),username:I(this,Si),presetId:I(this,Ji),status:I(this,ji)})}),s.addEventListener("failed",()=>Dt(this,jt,Mc).call(this,t,e));for(const{track:r,stream:o}of I(this,Ir))s.addTrack(r,o);return s},Mc=function(t,e){const n=I(this,Oe).get(t);n&&(n.peer.close(),I(this,Oe).delete(t),I(this,Mi).delete(t),I(this,Xs).delete(e??n.identityId),Dt(this,jt,qn).call(this,"PEER_LEAVE",{from:e??n.identityId}))},Od=function(t,e){const n=t.identityId??e;switch(t.type){case"intro":Dt(this,jt,qn).call(this,"HELLO",{from:n,username:t.username,presetId:t.presetId??0,status:t.status??"available"});break;case"move":Dt(this,jt,qn).call(this,"MOVE",{from:n,pos:t.pos});break;case"chat":Dt(this,jt,qn).call(this,"CHAT",{from:n,username:t.username,text:t.text,ts:t.ts});break;case"avatar":Dt(this,jt,qn).call(this,"AVATAR_CHANGE",{from:n,presetId:t.presetId});break;case"status":Dt(this,jt,qn).call(this,"STATUS_CHANGE",{from:n,status:t.status});break;case"bye":Dt(this,jt,qn).call(this,"PEER_LEAVE",{from:n});break}},Sc=async function(){var e;const t=await Mo(I(this,We).privkey,I(this,We).pubkey,[["r",I(this,Cn)],["t","hello"]],{identityId:Dt(this,jt,gi).call(this),username:I(this,Si),presetId:I(this,Ji),status:I(this,ji)});(e=I(this,sn))==null||e.publish(t)},Ec=async function(){var e;const t=await Mo(I(this,We).privkey,I(this,We).pubkey,[["r","sw-2-_discover"],["t","heartbeat"]],{roomId:I(this,Cn),roomName:Ld(),username:I(this,Si)});(e=I(this,sn))==null||e.publish(t)},Fd=async function(){var e;const t=await Mo(I(this,We).privkey,I(this,We).pubkey,[["r",I(this,Cn)],["t","bye"]],{identityId:Dt(this,jt,gi).call(this)});(e=I(this,sn))==null||e.publish(t)},gi=function(){var t;return((t=Cd())==null?void 0:t.peerId)??"unknown"},qn=function(t,e){var n;(n=I(this,ti)[t])==null||n.forEach(s=>s(e))};async function Dy(i){Id();const t=new Dd;await t.connect(Pd);const e=new Map,n=9e4,s=()=>{const o=Date.now(),a=[];for(const[c,l]of e){if(o-l.lastSeen>n){e.delete(c);continue}a.push({roomId:c,roomName:l.roomName,count:l.usernames.size})}a.sort((c,l)=>l.count-c.count),i(a)};t.subscribe("discover",{kinds:[20001],"#r":["sw-2-_discover"],"#t":["heartbeat"],since:Math.floor(Date.now()/1e3)-90},o=>{if(!(Date.now()/1e3-o.created_at>90)){try{const{roomId:a,roomName:c,username:l}=JSON.parse(o.content);if(!a)return;const h=e.get(a)??{roomName:c||a,usernames:new Set};h.roomName=c||h.roomName,h.usernames.add(l||"anon"),h.lastSeen=Date.now(),e.set(a,h)}catch{}s()}});const r=setInterval(s,3e4);return()=>{clearInterval(r),t.close()}}var Ce,un,qs,Nr,Ur,Or,Xe,Bd,zd,Tn;class Ny extends EventTarget{constructor(){super(...arguments);Ft(this,Xe);Ft(this,Ce,null);Ft(this,un,new Map);Ft(this,qs,!1);Ft(this,Nr,"");Ft(this,Ur,0);Ft(this,Or,"available")}get id(){var e;return((e=Cd())==null?void 0:e.peerId)??""}get peers(){return[...I(this,un).values()]}get peerCount(){return I(this,un).size}async start(e,n=0,s="available"){I(this,qs)||(Yt(this,qs,!0),Yt(this,Nr,e),Yt(this,Ur,n),Yt(this,Or,s),Yt(this,Ce,new Iy(e,n,s)),I(this,Ce).on("HELLO",({from:r,username:o,presetId:a=0,status:c="available"})=>{I(this,un).has(r)||Dt(this,Xe,Bd).call(this,r,o,a,c)}),I(this,Ce).on("PEER_LEAVE",({from:r})=>Dt(this,Xe,zd).call(this,r)),I(this,Ce).on("MOVE",({from:r,pos:o})=>{Dt(this,Xe,Tn).call(this,"peer:move",{peerId:r,pos:o})}),I(this,Ce).on("AVATAR_CHANGE",({from:r,presetId:o})=>{Dt(this,Xe,Tn).call(this,"peer:avatar",{peerId:r,presetId:o})}),I(this,Ce).on("STATUS_CHANGE",({from:r,status:o})=>{Dt(this,Xe,Tn).call(this,"peer:status",{peerId:r,status:o})}),I(this,Ce).on("CHAT",({from:r,username:o,text:a,ts:c})=>{Dt(this,Xe,Tn).call(this,"chat",{from:r,username:o,text:a,ts:c})}),await I(this,Ce).start())}stop(){var e;(e=I(this,Ce))==null||e.stop(),Yt(this,Ce,null),I(this,un).clear(),Yt(this,qs,!1)}move(e,n,s,r=0){var o;(o=I(this,Ce))==null||o.move(e,n,s,r)}setAvatar(e){var n;Yt(this,Ur,e),(n=I(this,Ce))==null||n.setAvatar(e)}setStatus(e){var n;Yt(this,Or,e),(n=I(this,Ce))==null||n.setStatus(e)}sendChat(e){var s;if(!e.trim())return;const n=Date.now();Dt(this,Xe,Tn).call(this,"chat",{from:this.id,username:I(this,Nr),text:e,ts:n}),(s=I(this,Ce))==null||s.chat(e)}addVoiceTrack(e,n){var s;(s=I(this,Ce))==null||s.addVoiceTrack(e,n)}onVoiceTrack(e){var n;(n=I(this,Ce))==null||n.onVoiceTrack(e)}wireToIdentityId(e){var n;return(n=I(this,Ce))==null?void 0:n.wireToIdentityId(e)}}Ce=new WeakMap,un=new WeakMap,qs=new WeakMap,Nr=new WeakMap,Ur=new WeakMap,Or=new WeakMap,Xe=new WeakSet,Bd=function(e,n,s,r){I(this,un).set(e,{peerId:e,username:n,presetId:s,status:r}),Dt(this,Xe,Tn).call(this,"peer:join",{peerId:e,username:n,presetId:s,status:r}),Dt(this,Xe,Tn).call(this,"status",{peerCount:I(this,un).size})},zd=function(e){I(this,un).has(e)&&(I(this,un).delete(e),Dt(this,Xe,Tn).call(this,"peer:leave",{peerId:e}),Dt(this,Xe,Tn).call(this,"status",{peerCount:I(this,un).size}))},Tn=function(e,n){this.dispatchEvent(new CustomEvent(e,{detail:n}))};const Ue=new Ny,Xn=Object.freeze({OCEAN:"ocean",COAST:"coast",DESERT:"desert",PLAINS:"plains",FOREST:"forest",MOUNTAIN:"mountain",ARCTIC:"arctic",JUNGLE:"jungle",TUNDRA:"tundra"});function So(i){let t=5381;for(let e=0;e<i.length;e++)t=Math.imul(t,33)^i.charCodeAt(e);return(t>>>0).toString(16).padStart(8,"0")}function kd(i,t,e,n){const s=JSON.stringify({parentHash:i,authorId:t,changes:e,timestamp:n});let r=So(s),o=So(r+s.slice(0,32)),a=So(o+s.slice(-32)),c=So(a+t);return r+o+a+c}class Us{constructor(t,e,n,s="",r=Date.now()){this.parentHash=t,this.authorId=e,this.changes=Object.freeze([...n]),this.message=s,this.timestamp=r,this.hash=kd(t,e,n,r)}buildRevert(t,e=Date.now()){const n=this.changes.map(s=>({cellId:s.cellId,key:s.key,oldValue:s.newValue,newValue:s.oldValue}));return new Us(this.hash,t,n,`revert: ${this.message||this.hash.slice(0,8)}`,e)}toJSON(){return{hash:this.hash,parentHash:this.parentHash,authorId:this.authorId,message:this.message,timestamp:this.timestamp,changes:this.changes}}}const Uy="universe",Oy="genesis: the universe begins";var Fe,je;class Fy{constructor(){Ft(this,Fe,new Map);Ft(this,je,null);this._genesis()}_genesis(){const t=new Us(null,Uy,[],Oy,0);I(this,Fe).set(t.hash,t),Yt(this,je,t.hash)}get head(){return I(this,je)}get length(){return I(this,Fe).size}getCommit(t){return I(this,Fe).get(t)??null}headCommit(){return I(this,Fe).get(I(this,je))}log(t=1/0){const e=[];let n=I(this,je);for(;n&&e.length<t;){const s=I(this,Fe).get(n);if(!s)break;e.push(s),n=s.parentHash}return e}stateAt(t){const e=[];let n=t;for(;n;){const r=I(this,Fe).get(n);if(!r)break;e.unshift(r),n=r.parentHash}const s=new Map;for(const r of e)for(const{cellId:o,key:a,newValue:c}of r.changes)s.set(`${o}:${a}`,c);return s}currentState(){return this.stateAt(I(this,je))}diff(t,e){const n=this.stateAt(t),s=this.stateAt(e),r=[],o=new Set([...n.keys(),...s.keys()]);for(const a of o){const c=n.get(a)??null,l=s.get(a)??null;if(c!==l){const[h,u]=a.split(":");r.push({cellId:h,key:u,before:c,after:l})}}return r}commit(t,e,n=""){if(!Array.isArray(e)||e.length===0)throw new Error("commit requires at least one change");for(const r of e)if(!r.cellId||!r.key)throw new Error("each change must have cellId and key");const s=new Us(I(this,je),t,e,n);return I(this,Fe).set(s.hash,s),Yt(this,je,s.hash),s}revert(t,e){const n=I(this,Fe).get(t);if(!n)throw new Error(`commit ${t} not found`);if(n.changes.length===0)throw new Error("cannot revert empty commit");n.buildRevert(e);const s=new Us(I(this,je),e,[...n.changes].map(r=>({cellId:r.cellId,key:r.key,oldValue:r.newValue,newValue:r.oldValue})),`revert: ${n.message||n.hash.slice(0,8)}`);return I(this,Fe).set(s.hash,s),Yt(this,je,s.hash),s}applyExternal(t){if(I(this,Fe).has(t.hash))return I(this,Fe).get(t.hash);if(t.parentHash&&!I(this,Fe).has(t.parentHash))throw new Error(`missing parent ${t.parentHash} — cannot apply ${t.hash}`);const e=new Us(t.parentHash,t.authorId,t.changes,t.message,t.timestamp);return I(this,Fe).set(t.hash,e),t.parentHash===I(this,je)&&Yt(this,je,t.hash),e}verify(){for(const t of I(this,Fe).values()){if(kd(t.parentHash,t.authorId,t.changes,t.timestamp)!==t.hash)return{valid:!1,broken:t.hash};if(t.parentHash&&!I(this,Fe).has(t.parentHash))return{valid:!1,broken:t.hash,reason:"missing-parent"}}return{valid:!0}}}Fe=new WeakMap,je=new WeakMap;const he=Object.freeze({SOLAR:"solar",WIND:"wind",HYDRO:"hydro",MINERAL:"mineral",RARE_EARTH:"rare_earth",BIOLOGICAL:"biological",FISHERY:"fishery",GEOTHERMAL:"geothermal"});Xn.OCEAN+"",he.FISHERY+"",he.WIND+"",Xn.COAST+"",he.FISHERY+"",he.WIND+"",he.SOLAR+"",Xn.DESERT+"",he.SOLAR+"",he.RARE_EARTH+"",he.MINERAL+"",Xn.PLAINS+"",he.WIND+"",he.MINERAL+"",he.BIOLOGICAL+"",he.SOLAR+"",Xn.FOREST+"",he.BIOLOGICAL+"",he.HYDRO+"",he.WIND+"",Xn.MOUNTAIN+"",he.MINERAL+"",he.RARE_EARTH+"",he.GEOTHERMAL+"",he.WIND+"",he.HYDRO+"",Xn.ARCTIC+"",he.MINERAL+"",he.WIND+"",Xn.JUNGLE+"",he.BIOLOGICAL+"",he.HYDRO+"",he.SOLAR+"",Xn.TUNDRA+"",he.MINERAL+"",he.GEOTHERMAL+"",he.WIND+"";(async()=>{const i=await Ty(),t=new Fy;window._worldHistory=t;let e=!1;function n({peerCount:M}={}){document.querySelectorAll(".ipfs-dot").forEach(v=>{v.className="ipfs-dot green"}),document.querySelectorAll("#ipfs-label").forEach(v=>{v.textContent=`P2P · ${i.shortId}`}),M!==void 0&&document.querySelectorAll("#ipfs-peers").forEach(v=>{M>0?(v.textContent=`${M} peer${M!==1?"s":""}`,v.style.color="rgba(120,255,160,0.7)"):e?(v.textContent="· searching…",v.style.color="rgba(255,200,80,0.7)"):v.textContent=""})}n({peerCount:0}),Ue.addEventListener("status",M=>n(M.detail)),Ue.addEventListener("commit",M=>{try{t.applyExternal(M.detail.commit)}catch{}});const s=document.getElementById("lobby"),r=document.getElementById("loading"),o=document.getElementById("load-fill"),a=document.getElementById("load-text"),c=document.getElementById("hud"),l=document.getElementById("click-to-start"),h=document.getElementById("enter-btn"),u=document.getElementById("username"),d=document.getElementById("room-name");!i.isNew&&i.displayName&&(u.value=i.displayName),d&&(d.value=Ld());const f=document.getElementById("id-fingerprint");f&&(f.textContent=i.isNew?"New identity generated":`Identity · ${i.shortId}`),function(){const v=document.getElementById("lobby-avatar-grid");if(!v)return;const w=parseInt(localStorage.getItem("spaceAvatarId")??"0",10),U=T=>"#"+T.toString(16).padStart(6,"0");ts.forEach(T=>{const b=U(T.skin),F=U(T.hair),E=U(T.outfit),x=U(T.accent),C=document.createElement("div");C.className="lav-chip"+(T.id===w?" lav-active":""),C.dataset.id=String(T.id),C.title=T.label,C.innerHTML=`<svg viewBox="0 0 60 82" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="30" cy="16" rx="17" ry="14" fill="${F}"/>
        <circle cx="30" cy="22" r="13" fill="${b}"/>
        <ellipse cx="17.5" cy="22" rx="3.5" ry="4.5" fill="${b}"/>
        <ellipse cx="42.5" cy="22" rx="3.5" ry="4.5" fill="${b}"/>
        <circle cx="25" cy="21" r="2.8" fill="${x}"/><circle cx="35" cy="21" r="2.8" fill="${x}"/>
        <circle cx="25" cy="21" r="1.6" fill="#111"/><circle cx="35" cy="21" r="1.6" fill="#111"/>
        <rect x="26.5" y="34" width="7" height="5" rx="2" fill="${b}"/>
        <rect x="14" y="39" width="32" height="24" rx="6" fill="${E}"/>
        <rect x="22" y="44" width="16" height="5" rx="2" fill="${x}" opacity="0.75"/>
        <rect x="5" y="40" width="10" height="20" rx="5" fill="${E}"/>
        <rect x="45" y="40" width="10" height="20" rx="5" fill="${E}"/>
        <rect x="16" y="62" width="11" height="14" rx="4" fill="${E}"/>
        <rect x="33" y="62" width="11" height="14" rx="4" fill="${E}"/>
      </svg>`,C.addEventListener("click",()=>{v.querySelectorAll(".lav-chip").forEach(k=>k.classList.remove("lav-active")),C.classList.add("lav-active"),localStorage.setItem("spaceAvatarId",String(T.id))}),v.appendChild(C)})}();let g=null;const _=document.getElementById("active-rooms"),m=document.getElementById("active-rooms-list");Dy(M=>{if(!(!_||!m)){if(M.length===0){_.style.display="none";return}_.style.display="block",m.innerHTML=M.slice(0,5).map(v=>{const w=v.roomName==="main"?"main (public)":v.roomName,U=`${v.count} ${v.count===1?"person":"people"}`;return`<button class="lobby-room-chip" data-room="${v.roomName}">
        <span class="room-chip-dot"></span>
        <span class="room-chip-name">${w}</span>
        <span class="room-chip-count">${U}</span>
      </button>`}).join(""),m.querySelectorAll(".lobby-room-chip").forEach(v=>{v.addEventListener("click",()=>{d&&(d.value=v.dataset.room)})})}}).then(M=>{g=M}),u==null||u.addEventListener("keydown",M=>{M.key==="Enter"&&p()}),d==null||d.addEventListener("keydown",M=>{M.key==="Enter"&&p()}),h==null||h.addEventListener("click",p);function p(){const M=u.value.trim();if(!M){u.focus(),u.style.borderColor="#f55";return}u.style.borderColor="",i.setName(M),d!=null&&d.value.trim()&&Cy(d.value.trim()),g==null||g(),g=null,window._spaceUsername=M,s.style.display="none",r.classList.add("visible");const{scene:v,camera:w,renderer:U,onShipLoaded:T}=Xv((b,F)=>{o.style.width=b+"%",a.textContent=F});T(()=>{var te,ve,O,St,tt,et,ft;r.classList.remove("visible"),c.classList.add("visible"),l.classList.remove("hidden");const{meshes:b,screens:F}=Zv(v),{openScreen:E,isOpen:x}=Ex(),C=parseInt(localStorage.getItem("spaceAvatarId")??"0",10),k=new Nx(G=>L==null?void 0:L.navigate(G)),P=document.getElementById("presence-panel");P&&P.classList.add("pp-visible"),k.setSelf(M,C,"OUTSIDE","available");const L=vx(v,w,U,G=>{zy(G),k.updateSelfZone(G)},G=>{Ue.setAvatar(G),k.setSelf(M,G,k._self.zone,V)});let V="available";const H=document.getElementById("status-btn"),Q=document.getElementById("status-menu");H&&Q&&(zc.forEach(G=>{const rt="#"+G.color.toString(16).padStart(6,"0"),pt=document.createElement("div");pt.className="sm-opt"+(G.id===V?" sm-active":""),pt.dataset.status=G.id,pt.innerHTML=`<span class="sm-dot" style="background:${rt};box-shadow:0 0 4px ${rt}40"></span>${G.label}`,pt.addEventListener("click",Lt=>{Lt.stopPropagation(),V=G.id,H.innerHTML=`<span class="sm-dot" style="background:${rt};box-shadow:0 0 4px ${rt}40;display:inline-block;vertical-align:middle;width:8px;height:8px;border-radius:50%;margin-right:5px"></span>${G.label.replace(/^\S+\s/,"")}`,L.setStatus(G.id),k.updateSelfStatus(G.id),Ue.setStatus(G.id),Q.querySelectorAll(".sm-opt").forEach(Ut=>Ut.classList.toggle("sm-active",Ut.dataset.status===G.id)),Q.classList.remove("sm-open")}),Q.appendChild(pt)}),H.addEventListener("click",G=>{G.stopPropagation(),Q.classList.toggle("sm-open")}),document.addEventListener("click",()=>Q.classList.remove("sm-open"))),document.querySelectorAll(".vtbtn").forEach(G=>{G.addEventListener("click",rt=>{rt.stopPropagation(),it(),L.setView(G.dataset.view),G.dataset.view==="first"&&document.pointerLockElement!==U.domElement&&U.domElement.requestPointerLock()})});let Y=!1;function it(){Y||(Y=!0,l.classList.add("hidden"))}document.addEventListener("pointerlockchange",()=>{document.pointerLockElement===U.domElement&&it()}),l.addEventListener("click",it);const nt=new Set(["KeyW","KeyA","KeyS","KeyD"]),ct=new Set([...nt,"ArrowUp","ArrowDown","ArrowLeft","ArrowRight"]);document.addEventListener("keydown",G=>{ct.has(G.code)&&(it(),nt.has(G.code)&&L.getMode()==="first"&&document.pointerLockElement!==U.domElement&&U.domElement.requestPointerLock())});const W=new Av,ot=new Mt,B=new _i(new D(0,1,0),0),Z=new D;U.domElement.addEventListener("click",G=>{if(x()||document.pointerLockElement===U.domElement||L.isDragMoved())return;it(),ot.x=G.clientX/window.innerWidth*2-1,ot.y=-(G.clientY/window.innerHeight)*2+1,W.setFromCamera(ot,w);const rt=W.intersectObjects(b);if(rt.length>0){E(rt[0].object.userData.screen);return}W.ray.intersectPlane(B,Z)&&L.navigate({x:Math.max(-65,Math.min(65,Z.x)),z:Math.max(-65,Math.min(65,Z.z))})});const J=new Lx,$=document.getElementById("voice-btn"),ut=new Map,gt=new Map;Ue.addEventListener("peer:join",G=>{const{peerId:rt,username:pt,presetId:Lt}=G.detail;if(gt.set(rt,pt),ut.has(rt))return;const Ut=Lt??By(rt),fe=Xu(pt,Ut);v.add(fe),ut.set(rt,fe),su(c,ut.size+1),k.addPeer(rt,pt,Ut),L.peerJoin(rt,pt)}),Ue.addEventListener("peer:move",G=>{const{peerId:rt,pos:pt}=G.detail,Lt=ut.get(rt);if(k.movePeer(rt,pt.x,pt.z),Lt){const Ut=Lt.position.clone();if(Lt.position.lerp(new D(pt.x,pt.y??0,pt.z),.6),pt.ry!==void 0){let fe=pt.ry-Lt.rotation.y;for(;fe>Math.PI;)fe-=Math.PI*2;for(;fe<-Math.PI;)fe+=Math.PI*2;Lt.rotation.y+=fe*.25}Ut.distanceTo(Lt.position)>.008&&(Lt.userData.isMoving=!0,clearTimeout(Lt.userData._stopTimer),Lt.userData._stopTimer=setTimeout(()=>{Lt.userData.isMoving=!1},180))}L.peerMove(rt,pt.x,pt.z,gt.get(rt)??rt.slice(-4))}),Ue.addEventListener("peer:leave",G=>{const rt=ut.get(G.detail.peerId);rt&&(v.remove(rt),ut.delete(G.detail.peerId),su(c,ut.size+1)),J.removePeer(G.detail.peerId),k.removePeer(G.detail.peerId),L.peerLeave(G.detail.peerId),gt.delete(G.detail.peerId)}),Ue.addEventListener("peer:avatar",G=>{const{peerId:rt,presetId:pt}=G.detail,Lt=ut.get(rt),Ut=gt.get(rt)??rt.slice(-4);Lt&&qu(Lt,Ut,pt),k.updatePeerPreset(rt,pt)}),Ue.addEventListener("peer:status",G=>{const{peerId:rt,status:pt}=G.detail,Lt=ut.get(rt);Lt&&Zu(Lt,pt),k.updatePeerStatus(rt,pt)});let At=performance.now();(function G(){requestAnimationFrame(G);const rt=performance.now(),pt=Math.min((rt-At)/1e3,.1);At=rt;const Lt=rt/1e3;ut.forEach((Ut,fe)=>{Ku(Ut,Ut.userData.isMoving??!1,pt),Yu(Ut,J.isTalking(fe),Lt)}),L.setSelfTalking(J.isTalking("self"),Lt)})(),Ue.start(M,C,V),e=!0,n({peerCount:0}),window._sync=Ue,window._voice=J;const N=({active:G,muted:rt}={})=>{$&&(G?rt?($.textContent="🔇 Muted",$.className="hud-side-btn voice-muted"):($.textContent="🎙 Live",$.className="hud-side-btn voice-active"):($.textContent="🎙 Voice",$.className="hud-side-btn"))};if(J.onStateChange(N),N({active:!1,muted:!1}),J.onTalkChange(G=>{L.setTalkingPeers(G)}),$){let G=!1;$.addEventListener("click",async rt=>{if(rt.stopPropagation(),J.active){J.toggleMute();return}if(G)return;G=!0,$.textContent="⏳ Connecting…";const pt=await J.start(Ue);if(G=!1,!pt){$.textContent="🚫 No mic",$.className="hud-side-btn";return}N({active:J.active,muted:J.muted})})}setInterval(()=>{const G=L.getPosition(),rt=L.getRotation();Ue.move(G.x,G.y,G.z,rt.y),J.update(G,ut)},50);const Xt=document.getElementById("chat-toggle"),Ht=document.getElementById("chat-panel"),ce=document.getElementById("chat-close"),Pt=document.getElementById("chat-input"),ne=document.getElementById("chat-send"),Wt=document.getElementById("chat-messages"),Vt=document.getElementById("chat-badge");let pe=0;const R=document.getElementById("mb-chat-badge");function y(){var G;Ht.classList.add("open"),Xt.classList.add("open"),(G=document.getElementById("mb-chat-btn"))==null||G.classList.add("mb-active"),pe=0,Vt.textContent="",Vt.classList.remove("visible"),R&&(R.textContent="",R.classList.remove("visible")),Pt.focus()}function j(){var G;Ht.classList.remove("open"),Xt.classList.remove("open"),(G=document.getElementById("mb-chat-btn"))==null||G.classList.remove("mb-active")}Xt.addEventListener("click",G=>{G.stopPropagation(),Ht.classList.contains("open")?j():y()}),ce.addEventListener("click",G=>{G.stopPropagation(),j()}),(te=document.getElementById("mb-chat-btn"))==null||te.addEventListener("click",G=>{G.stopPropagation(),Ht.classList.contains("open")?j():y()});function st(){const G=Pt.value.trim();G&&(Ue.sendChat(G),Pt.value="")}ne.addEventListener("click",G=>{G.stopPropagation(),st()}),Pt.addEventListener("keydown",G=>{G.key==="Enter"&&st()}),Ht.addEventListener("click",G=>G.stopPropagation());function lt({from:G,username:rt,text:pt,ts:Lt}){const Ut=G===Ue.id,fe=new Date(Lt).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),xe=document.createElement("div");if(xe.className="chat-msg",xe.innerHTML=`
          <div class="chat-msg-meta">
            <span class="chat-msg-name${Ut?" self":""}">${rt}</span>
            <span class="chat-msg-time">${fe}</span>
          </div>
          <div class="chat-msg-body">${pt.replace(/</g,"&lt;")}</div>
        `,Wt.appendChild(xe),Wt.scrollTop=Wt.scrollHeight,!Ht.classList.contains("open")&&!Ut){pe++;const He=pe>9?"9+":String(pe);Vt.textContent=He,Vt.classList.add("visible"),R&&(R.textContent=He,R.classList.add("visible"))}}function at(G){const rt=document.createElement("div");rt.className="chat-system",rt.textContent=G,Wt.appendChild(rt),Wt.scrollTop=Wt.scrollHeight}const Ct=new Map;Ue.addEventListener("chat",G=>lt(G.detail)),Ue.addEventListener("peer:join",G=>{Ct.set(G.detail.peerId,G.detail.username),at(`${G.detail.username} joined`)}),Ue.addEventListener("peer:leave",G=>{const rt=Ct.get(G.detail.peerId)??"Someone";Ct.delete(G.detail.peerId),at(`${rt} left`)});const _t=new Tx,vt=new Rx,Zt=new bx(M);_t.createReality(Zt),vt.setNode(M,Cs.PUBLIC),(ve=document.getElementById("nm-open-btn"))==null||ve.addEventListener("click",G=>{G.stopPropagation(),kh(_t,vt,M)}),(O=document.getElementById("invite-btn"))==null||O.addEventListener("click",G=>{G.stopPropagation();const rt=window.location.href;navigator.clipboard.writeText(rt).then(()=>{const pt=document.getElementById("invite-btn"),Lt=pt.textContent;pt.textContent="✅ Copied!",setTimeout(()=>{pt.textContent=Lt},2e3)}).catch(()=>{prompt("Copy this link to invite someone:",rt)})}),(St=document.getElementById("mb-avatar-btn"))==null||St.addEventListener("click",()=>{var G;return(G=document.getElementById("avatar-btn"))==null?void 0:G.click()}),(tt=document.getElementById("mb-nm-btn"))==null||tt.addEventListener("click",G=>{G.stopPropagation(),kh(_t,vt,M)}),(et=document.getElementById("mb-voice-btn"))==null||et.addEventListener("click",G=>{G.stopPropagation(),$==null||$.click()}),(ft=document.getElementById("mb-status-btn"))==null||ft.addEventListener("click",G=>{G.stopPropagation(),H==null||H.click()}),J.onStateChange(({active:G,muted:rt}={})=>{const pt=document.getElementById("mb-voice-btn");pt&&(G?rt?(pt.innerHTML="🔇",pt.className="mb-btn mb-voice-active",pt.style.color="#ff6b6b"):(pt.innerHTML="🎙",pt.className="mb-btn mb-voice-active",pt.style.color=""):(pt.innerHTML="🎙",pt.className="mb-btn"))});const dt=document.getElementById("screen-hint"),Tt=document.getElementById("screen-hint-name");let qt=null,Nt=null;document.addEventListener("keydown",G=>{if(G.code==="KeyE"&&qt&&!x()&&E(qt),G.code==="KeyF"&&Nt){const rt=Nt.def.id,pt=rt==="main-left"||rt==="main-right",Lt=Yn(pt?"main-left":rt);pt&&Yn("main-right"),yt(Nt.def.label,Lt)}});function yt(G,rt){let pt=document.getElementById("door-action-hint");pt||(pt=document.createElement("div"),pt.id="door-action-hint",pt.style.cssText=`
            position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);
            background:rgba(0,0,0,0.7);border:1px solid rgba(255,255,255,0.2);
            padding:10px 22px;border-radius:20px;font-size:0.9rem;color:#fff;
            pointer-events:none;z-index:13;opacity:0;transition:opacity 0.2s;
          `,document.body.appendChild(pt)),pt.textContent=`${G} ${rt?"opened":"closed"}`,pt.style.opacity="1",clearTimeout(pt._t),pt._t=setTimeout(()=>{pt.style.opacity="0"},1500)}const zt=new Set;setInterval(()=>{var fe;if(x())return;const G=L.getPosition();let rt=null,pt=4;F.forEach(xe=>{const He=G.x-xe.position.x,On=G.z-xe.position.z,si=Math.sqrt(He*He+On*On);si<pt&&(pt=si,rt=xe)}),qt=rt,dt&&(dt.style.display=rt?"flex":"none",rt&&Tt&&(Tt.textContent=rt.label)),zr.forEach(xe=>{const He=G.x-xe.hinge.x,On=G.z-xe.hinge.z,si=Math.sqrt(He*He+On*On),Je=xe.id;si<2.2&&!Ts(Je)?(Yn(Je),zt.add(Je),Je==="main-left"&&(Ts("main-right")||Yn("main-right"),zt.add("main-right")),Je==="main-right"&&(Ts("main-left")||Yn("main-left"),zt.add("main-left"))):si>3.5&&zt.has(Je)&&Ts(Je)&&(Yn(Je),zt.delete(Je),Je==="main-left"&&(Ts("main-right")&&Yn("main-right"),zt.delete("main-right")),Je==="main-right"&&(Ts("main-left")&&Yn("main-left"),zt.delete("main-left")))});const Lt=Ju(G,2.8);Nt=Lt;const Ut=document.getElementById("door-proximity-hint");if(Ut)if(Lt&&!rt){const xe=(fe=Lt.state)!=null&&fe.open?"Close":"Open";Ut.style.display="flex",Ut.querySelector("#door-hint-name").textContent=`${xe} ${Lt.def.label}`}else Ut.style.display="none"},150)})}})();function By(i){let t=0;for(let e=0;e<i.length;e++)t=t*31+i.charCodeAt(e)|0;return Math.abs(t)%ts.length}function su(i,t){var n;const e=(n=i==null?void 0:i.querySelector)==null?void 0:n.call(i,"#online-count");e&&(e.textContent=`● ${t} aboard`)}const ru={OUTSIDE:{color:"#88cc66",desc:"Outside the building"},LOBBY:{color:"#ffffff",desc:"Reception & Entrance"},OPS:{color:"#ffaa44",desc:"Operations & Technical Support"},FUN:{color:"#44ffaa",desc:"Chill, Social & Games"},DESIGN:{color:"#ff6ba0",desc:"UI/UX, Design & 3D"},ENGINEERING:{color:"#44aaff",desc:"Development & Engineering"},"":{color:"#ffffff",desc:""}};function zy(i){const t=document.getElementById("zone-name"),e=document.getElementById("zone-desc"),n=ru[i]||ru[""];t&&(t.textContent=i,t.style.color=n.color),e&&(e.textContent=n.desc),document.querySelectorAll(".map-zone").forEach(s=>{s.classList.toggle("active",s.dataset.zone===i)})}
