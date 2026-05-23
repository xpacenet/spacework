var zd=Object.defineProperty;var Kc=i=>{throw TypeError(i)};var kd=(i,t,e)=>t in i?zd(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var Yt=(i,t,e)=>kd(i,typeof t!="symbol"?t+"":t,e),Jo=(i,t,e)=>t.has(i)||Kc("Cannot "+e);var O=(i,t,e)=>(Jo(i,t,"read from private field"),e?e.call(i):t.get(i)),Dt=(i,t,e)=>t.has(i)?Kc("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(i):t.set(i,e),qt=(i,t,e,n)=>(Jo(i,t,"write to private field"),n?n.call(i,e):t.set(i,e),e),Lt=(i,t,e)=>(Jo(i,t,"access private method"),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const yc="165",Hd=0,Jc=1,Gd=2,su=1,ru=2,Gn=3,Ei=0,Je=1,nn=2,xi=0,Ds=1,jc=2,Qc=3,tl=4,Vd=5,Bi=100,Wd=101,Xd=102,Zd=103,Yd=104,qd=200,$d=201,Kd=202,Jd=203,Xa=204,Za=205,jd=206,Qd=207,tf=208,ef=209,nf=210,sf=211,rf=212,of=213,af=214,cf=0,lf=1,hf=2,yo=3,uf=4,df=5,ff=6,pf=7,ou=0,mf=1,gf=2,yi=0,_f=1,vf=2,xf=3,au=4,yf=5,Mf=6,Sf=7,cu=300,Xs=301,Zs=302,Ya=303,qa=304,Oo=306,$a=1e3,Hi=1001,Ka=1002,dn=1003,Ef=1004,zr=1005,xn=1006,jo=1007,Gi=1008,wi=1009,wf=1010,bf=1011,Mo=1012,lu=1013,Ys=1014,vi=1015,Fo=1016,hu=1017,uu=1018,qs=1020,Tf=35902,Af=1021,Rf=1022,Cn=1023,Cf=1024,Pf=1025,Ns=1026,$s=1027,Lf=1028,du=1029,If=1030,fu=1031,pu=1033,Qo=33776,ta=33777,ea=33778,na=33779,el=35840,nl=35841,il=35842,sl=35843,rl=36196,ol=37492,al=37496,cl=37808,ll=37809,hl=37810,ul=37811,dl=37812,fl=37813,pl=37814,ml=37815,gl=37816,_l=37817,vl=37818,xl=37819,yl=37820,Ml=37821,ia=36492,Sl=36494,El=36495,Df=36283,wl=36284,bl=36285,Tl=36286,Nf=3200,Uf=3201,mu=0,Of=1,pi="",Tn="srgb",Ri="srgb-linear",Mc="display-p3",Bo="display-p3-linear",So="linear",pe="srgb",Eo="rec709",wo="p3",ji=7680,Al=519,Ff=512,Bf=513,zf=514,gu=515,kf=516,Hf=517,Gf=518,Vf=519,Ja=35044,Rl="300 es",jn=2e3,bo=2001;class js{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const He=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],sa=Math.PI/180,ja=180/Math.PI;function Mi(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(He[i&255]+He[i>>8&255]+He[i>>16&255]+He[i>>24&255]+"-"+He[t&255]+He[t>>8&255]+"-"+He[t>>16&15|64]+He[t>>24&255]+"-"+He[e&63|128]+He[e>>8&255]+"-"+He[e>>16&255]+He[e>>24&255]+He[n&255]+He[n>>8&255]+He[n>>16&255]+He[n>>24&255]).toLowerCase()}function Be(i,t,e){return Math.max(t,Math.min(e,i))}function Wf(i,t){return(i%t+t)%t}function ra(i,t,e){return(1-e)*i+e*t}function Rn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function he(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class xt{constructor(t=0,e=0){xt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Be(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Zt{constructor(t,e,n,s,r,o,a,c,l){Zt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],_=s[0],p=s[3],m=s[6],w=s[1],v=s[4],E=s[7],B=s[2],T=s[5],b=s[8];return r[0]=o*_+a*w+c*B,r[3]=o*p+a*v+c*T,r[6]=o*m+a*E+c*b,r[1]=l*_+h*w+u*B,r[4]=l*p+h*v+u*T,r[7]=l*m+h*E+u*b,r[2]=d*_+f*w+g*B,r[5]=d*p+f*v+g*T,r[8]=d*m+f*E+g*b,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,d=a*c-h*r,f=l*r-o*c,g=e*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(s*l-h*n)*_,t[2]=(a*n-s*o)*_,t[3]=d*_,t[4]=(h*e-s*c)*_,t[5]=(s*r-a*e)*_,t[6]=f*_,t[7]=(n*c-l*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(oa.makeScale(t,e)),this}rotate(t){return this.premultiply(oa.makeRotation(-t)),this}translate(t,e){return this.premultiply(oa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const oa=new Zt;function _u(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function To(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Xf(){const i=To("canvas");return i.style.display="block",i}const Cl={};function Sc(i){i in Cl||(Cl[i]=!0,console.warn(i))}function Zf(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const Pl=new Zt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ll=new Zt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),kr={[Ri]:{transfer:So,primaries:Eo,toReference:i=>i,fromReference:i=>i},[Tn]:{transfer:pe,primaries:Eo,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Bo]:{transfer:So,primaries:wo,toReference:i=>i.applyMatrix3(Ll),fromReference:i=>i.applyMatrix3(Pl)},[Mc]:{transfer:pe,primaries:wo,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Ll),fromReference:i=>i.applyMatrix3(Pl).convertLinearToSRGB()}},Yf=new Set([Ri,Bo]),ae={enabled:!0,_workingColorSpace:Ri,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Yf.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=kr[t].toReference,s=kr[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return kr[i].primaries},getTransfer:function(i){return i===pi?So:kr[i].transfer}};function Us(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function aa(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Qi;class qf{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Qi===void 0&&(Qi=To("canvas")),Qi.width=t.width,Qi.height=t.height;const n=Qi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Qi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=To("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Us(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Us(e[n]/255)*255):e[n]=Us(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let $f=0;class vu{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:$f++}),this.uuid=Mi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(ca(s[o].image)):r.push(ca(s[o]))}else r=ca(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function ca(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?qf.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Kf=0;class qe extends js{constructor(t=qe.DEFAULT_IMAGE,e=qe.DEFAULT_MAPPING,n=Hi,s=Hi,r=xn,o=Gi,a=Cn,c=wi,l=qe.DEFAULT_ANISOTROPY,h=pi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Kf++}),this.uuid=Mi(),this.name="",this.source=new vu(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new xt(0,0),this.repeat=new xt(1,1),this.center=new xt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==cu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case $a:t.x=t.x-Math.floor(t.x);break;case Hi:t.x=t.x<0?0:1;break;case Ka:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case $a:t.y=t.y-Math.floor(t.y);break;case Hi:t.y=t.y<0?0:1;break;case Ka:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}qe.DEFAULT_IMAGE=null;qe.DEFAULT_MAPPING=cu;qe.DEFAULT_ANISOTROPY=1;class xe{constructor(t=0,e=0,n=0,s=1){xe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],g=c[9],_=c[2],p=c[6],m=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+p)<.1&&Math.abs(l+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(l+1)/2,E=(f+1)/2,B=(m+1)/2,T=(h+d)/4,b=(u+_)/4,D=(g+p)/4;return v>E&&v>B?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=T/n,r=b/n):E>B?E<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),n=T/s,r=D/s):B<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(B),n=b/r,s=D/r),this.set(n,s,r,e),this}let w=Math.sqrt((p-g)*(p-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(w)<.001&&(w=1),this.x=(p-g)/w,this.y=(u-_)/w,this.z=(d-h)/w,this.w=Math.acos((l+f+m-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Jf extends js{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new xe(0,0,t,e),this.scissorTest=!1,this.viewport=new xe(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:xn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new qe(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new vu(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ki extends Jf{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class xu extends qe{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=dn,this.minFilter=dn,this.wrapR=Hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class jf extends qe{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=dn,this.minFilter=dn,this.wrapR=Hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Dr{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3];const d=r[o+0],f=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=_;return}if(u!==_||c!==d||l!==f||h!==g){let p=1-a;const m=c*d+l*f+h*g+u*_,w=m>=0?1:-1,v=1-m*m;if(v>Number.EPSILON){const B=Math.sqrt(v),T=Math.atan2(B,m*w);p=Math.sin(p*T)/B,a=Math.sin(a*T)/B}const E=a*w;if(c=c*p+d*E,l=l*p+f*E,h=h*p+g*E,u=u*p+_*E,p===1-a){const B=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=B,l*=B,h*=B,u*=B}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+h*u+c*f-l*d,t[e+1]=c*g+h*d+l*u-a*f,t[e+2]=l*g+h*f+a*d-c*u,t[e+3]=h*g-a*u-c*d-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),d=c(n/2),f=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"YZX":this._x=d*h*u+l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u-d*f*g;break;case"XZY":this._x=d*h*u-l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Be(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(t=0,e=0,n=0){I.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Il.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Il.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return la.copy(this).projectOnVector(t),this.sub(la)}reflect(t){return this.sub(la.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Be(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const la=new I,Il=new Dr;class Nr{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(pn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(pn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=pn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,pn):pn.fromBufferAttribute(r,o),pn.applyMatrix4(t.matrixWorld),this.expandByPoint(pn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Hr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Hr.copy(n.boundingBox)),Hr.applyMatrix4(t.matrixWorld),this.union(Hr)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,pn),pn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(sr),Gr.subVectors(this.max,sr),ts.subVectors(t.a,sr),es.subVectors(t.b,sr),ns.subVectors(t.c,sr),ni.subVectors(es,ts),ii.subVectors(ns,es),Li.subVectors(ts,ns);let e=[0,-ni.z,ni.y,0,-ii.z,ii.y,0,-Li.z,Li.y,ni.z,0,-ni.x,ii.z,0,-ii.x,Li.z,0,-Li.x,-ni.y,ni.x,0,-ii.y,ii.x,0,-Li.y,Li.x,0];return!ha(e,ts,es,ns,Gr)||(e=[1,0,0,0,1,0,0,0,1],!ha(e,ts,es,ns,Gr))?!1:(Vr.crossVectors(ni,ii),e=[Vr.x,Vr.y,Vr.z],ha(e,ts,es,ns,Gr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,pn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(pn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Nn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Nn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Nn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Nn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Nn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Nn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Nn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Nn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Nn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Nn=[new I,new I,new I,new I,new I,new I,new I,new I],pn=new I,Hr=new Nr,ts=new I,es=new I,ns=new I,ni=new I,ii=new I,Li=new I,sr=new I,Gr=new I,Vr=new I,Ii=new I;function ha(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Ii.fromArray(i,r);const a=s.x*Math.abs(Ii.x)+s.y*Math.abs(Ii.y)+s.z*Math.abs(Ii.z),c=t.dot(Ii),l=e.dot(Ii),h=n.dot(Ii);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const Qf=new Nr,rr=new I,ua=new I;class Ec{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Qf.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;rr.subVectors(t,this.center);const e=rr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(rr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ua.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(rr.copy(t.center).add(ua)),this.expandByPoint(rr.copy(t.center).sub(ua))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Un=new I,da=new I,Wr=new I,si=new I,fa=new I,Xr=new I,pa=new I;class yu{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Un)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Un.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Un.copy(this.origin).addScaledVector(this.direction,e),Un.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){da.copy(t).add(e).multiplyScalar(.5),Wr.copy(e).sub(t).normalize(),si.copy(this.origin).sub(da);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Wr),a=si.dot(this.direction),c=-si.dot(Wr),l=si.lengthSq(),h=Math.abs(1-o*o);let u,d,f,g;if(h>0)if(u=o*c-a,d=o*a-c,g=r*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,f=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(da).addScaledVector(Wr,d),f}intersectSphere(t,e){Un.subVectors(t.center,this.origin);const n=Un.dot(this.direction),s=Un.dot(Un)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Un)!==null}intersectTriangle(t,e,n,s,r){fa.subVectors(e,t),Xr.subVectors(n,t),pa.crossVectors(fa,Xr);let o=this.direction.dot(pa),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;si.subVectors(this.origin,t);const c=a*this.direction.dot(Xr.crossVectors(si,Xr));if(c<0)return null;const l=a*this.direction.dot(fa.cross(si));if(l<0||c+l>o)return null;const h=-a*si.dot(pa);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class me{constructor(t,e,n,s,r,o,a,c,l,h,u,d,f,g,_,p){me.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,h,u,d,f,g,_,p)}set(t,e,n,s,r,o,a,c,l,h,u,d,f,g,_,p){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=c,m[2]=l,m[6]=h,m[10]=u,m[14]=d,m[3]=f,m[7]=g,m[11]=_,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new me().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/is.setFromMatrixColumn(t,0).length(),r=1/is.setFromMatrixColumn(t,1).length(),o=1/is.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=o*h,f=o*u,g=a*h,_=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=f+g*l,e[5]=d-_*l,e[9]=-a*c,e[2]=_-d*l,e[6]=g+f*l,e[10]=o*c}else if(t.order==="YXZ"){const d=c*h,f=c*u,g=l*h,_=l*u;e[0]=d+_*a,e[4]=g*a-f,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-g,e[6]=_+d*a,e[10]=o*c}else if(t.order==="ZXY"){const d=c*h,f=c*u,g=l*h,_=l*u;e[0]=d-_*a,e[4]=-o*u,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*h,e[9]=_-d*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const d=o*h,f=o*u,g=a*h,_=a*u;e[0]=c*h,e[4]=g*l-f,e[8]=d*l+_,e[1]=c*u,e[5]=_*l+d,e[9]=f*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const d=o*c,f=o*l,g=a*c,_=a*l;e[0]=c*h,e[4]=_-d*u,e[8]=g*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=f*u+g,e[10]=d-_*u}else if(t.order==="XZY"){const d=o*c,f=o*l,g=a*c,_=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+_,e[5]=o*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=a*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(tp,t,ep)}lookAt(t,e,n){const s=this.elements;return Qe.subVectors(t,e),Qe.lengthSq()===0&&(Qe.z=1),Qe.normalize(),ri.crossVectors(n,Qe),ri.lengthSq()===0&&(Math.abs(n.z)===1?Qe.x+=1e-4:Qe.z+=1e-4,Qe.normalize(),ri.crossVectors(n,Qe)),ri.normalize(),Zr.crossVectors(Qe,ri),s[0]=ri.x,s[4]=Zr.x,s[8]=Qe.x,s[1]=ri.y,s[5]=Zr.y,s[9]=Qe.y,s[2]=ri.z,s[6]=Zr.z,s[10]=Qe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],_=n[6],p=n[10],m=n[14],w=n[3],v=n[7],E=n[11],B=n[15],T=s[0],b=s[4],D=s[8],S=s[12],x=s[1],A=s[5],W=s[9],P=s[13],U=s[2],q=s[6],V=s[10],tt=s[14],$=s[3],rt=s[7],it=s[11],lt=s[15];return r[0]=o*T+a*x+c*U+l*$,r[4]=o*b+a*A+c*q+l*rt,r[8]=o*D+a*W+c*V+l*it,r[12]=o*S+a*P+c*tt+l*lt,r[1]=h*T+u*x+d*U+f*$,r[5]=h*b+u*A+d*q+f*rt,r[9]=h*D+u*W+d*V+f*it,r[13]=h*S+u*P+d*tt+f*lt,r[2]=g*T+_*x+p*U+m*$,r[6]=g*b+_*A+p*q+m*rt,r[10]=g*D+_*W+p*V+m*it,r[14]=g*S+_*P+p*tt+m*lt,r[3]=w*T+v*x+E*U+B*$,r[7]=w*b+v*A+E*q+B*rt,r[11]=w*D+v*W+E*V+B*it,r[15]=w*S+v*P+E*tt+B*lt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],_=t[7],p=t[11],m=t[15];return g*(+r*c*u-s*l*u-r*a*d+n*l*d+s*a*f-n*c*f)+_*(+e*c*f-e*l*d+r*o*d-s*o*f+s*l*h-r*c*h)+p*(+e*l*u-e*a*f-r*o*u+n*o*f+r*a*h-n*l*h)+m*(-s*a*h-e*c*u+e*a*d+s*o*u-n*o*d+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],_=t[13],p=t[14],m=t[15],w=u*p*l-_*d*l+_*c*f-a*p*f-u*c*m+a*d*m,v=g*d*l-h*p*l-g*c*f+o*p*f+h*c*m-o*d*m,E=h*_*l-g*u*l+g*a*f-o*_*f-h*a*m+o*u*m,B=g*u*c-h*_*c-g*a*d+o*_*d+h*a*p-o*u*p,T=e*w+n*v+s*E+r*B;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/T;return t[0]=w*b,t[1]=(_*d*r-u*p*r-_*s*f+n*p*f+u*s*m-n*d*m)*b,t[2]=(a*p*r-_*c*r+_*s*l-n*p*l-a*s*m+n*c*m)*b,t[3]=(u*c*r-a*d*r-u*s*l+n*d*l+a*s*f-n*c*f)*b,t[4]=v*b,t[5]=(h*p*r-g*d*r+g*s*f-e*p*f-h*s*m+e*d*m)*b,t[6]=(g*c*r-o*p*r-g*s*l+e*p*l+o*s*m-e*c*m)*b,t[7]=(o*d*r-h*c*r+h*s*l-e*d*l-o*s*f+e*c*f)*b,t[8]=E*b,t[9]=(g*u*r-h*_*r-g*n*f+e*_*f+h*n*m-e*u*m)*b,t[10]=(o*_*r-g*a*r+g*n*l-e*_*l-o*n*m+e*a*m)*b,t[11]=(h*a*r-o*u*r-h*n*l+e*u*l+o*n*f-e*a*f)*b,t[12]=B*b,t[13]=(h*_*s-g*u*s+g*n*d-e*_*d-h*n*p+e*u*p)*b,t[14]=(g*a*s-o*_*s-g*n*c+e*_*c+o*n*p-e*a*p)*b,t[15]=(o*u*s-h*a*s+h*n*c-e*u*c-o*n*d+e*a*d)*b,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,u=a+a,d=r*l,f=r*h,g=r*u,_=o*h,p=o*u,m=a*u,w=c*l,v=c*h,E=c*u,B=n.x,T=n.y,b=n.z;return s[0]=(1-(_+m))*B,s[1]=(f+E)*B,s[2]=(g-v)*B,s[3]=0,s[4]=(f-E)*T,s[5]=(1-(d+m))*T,s[6]=(p+w)*T,s[7]=0,s[8]=(g+v)*b,s[9]=(p-w)*b,s[10]=(1-(d+_))*b,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=is.set(s[0],s[1],s[2]).length();const o=is.set(s[4],s[5],s[6]).length(),a=is.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],mn.copy(this);const l=1/r,h=1/o,u=1/a;return mn.elements[0]*=l,mn.elements[1]*=l,mn.elements[2]*=l,mn.elements[4]*=h,mn.elements[5]*=h,mn.elements[6]*=h,mn.elements[8]*=u,mn.elements[9]*=u,mn.elements[10]*=u,e.setFromRotationMatrix(mn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=jn){const c=this.elements,l=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s);let f,g;if(a===jn)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===bo)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=jn){const c=this.elements,l=1/(e-t),h=1/(n-s),u=1/(o-r),d=(e+t)*l,f=(n+s)*h;let g,_;if(a===jn)g=(o+r)*u,_=-2*u;else if(a===bo)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const is=new I,mn=new me,tp=new I(0,0,0),ep=new I(1,1,1),ri=new I,Zr=new I,Qe=new I,Dl=new me,Nl=new Dr;class Pn{constructor(t=0,e=0,n=0,s=Pn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Be(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Be(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Be(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Be(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Be(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Be(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Dl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Dl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Nl.setFromEuler(this),this.setFromQuaternion(Nl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Pn.DEFAULT_ORDER="XYZ";class wc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let np=0;const Ul=new I,ss=new Dr,On=new me,Yr=new I,or=new I,ip=new I,sp=new Dr,Ol=new I(1,0,0),Fl=new I(0,1,0),Bl=new I(0,0,1),zl={type:"added"},rp={type:"removed"},rs={type:"childadded",child:null},ma={type:"childremoved",child:null};class Fe extends js{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:np++}),this.uuid=Mi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Fe.DEFAULT_UP.clone();const t=new I,e=new Pn,n=new Dr,s=new I(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new me},normalMatrix:{value:new Zt}}),this.matrix=new me,this.matrixWorld=new me,this.matrixAutoUpdate=Fe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new wc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ss.setFromAxisAngle(t,e),this.quaternion.multiply(ss),this}rotateOnWorldAxis(t,e){return ss.setFromAxisAngle(t,e),this.quaternion.premultiply(ss),this}rotateX(t){return this.rotateOnAxis(Ol,t)}rotateY(t){return this.rotateOnAxis(Fl,t)}rotateZ(t){return this.rotateOnAxis(Bl,t)}translateOnAxis(t,e){return Ul.copy(t).applyQuaternion(this.quaternion),this.position.add(Ul.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ol,t)}translateY(t){return this.translateOnAxis(Fl,t)}translateZ(t){return this.translateOnAxis(Bl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(On.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Yr.copy(t):Yr.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),or.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?On.lookAt(or,Yr,this.up):On.lookAt(Yr,or,this.up),this.quaternion.setFromRotationMatrix(On),s&&(On.extractRotation(s.matrixWorld),ss.setFromRotationMatrix(On),this.quaternion.premultiply(ss.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(zl),rs.child=t,this.dispatchEvent(rs),rs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(rp),ma.child=t,this.dispatchEvent(ma),ma.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),On.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),On.multiply(t.parent.matrixWorld)),t.applyMatrix4(On),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(zl),rs.child=t,this.dispatchEvent(rs),rs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(or,t,ip),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(or,sp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++){const r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++){const a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Fe.DEFAULT_UP=new I(0,1,0);Fe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const gn=new I,Fn=new I,ga=new I,Bn=new I,os=new I,as=new I,kl=new I,_a=new I,va=new I,xa=new I;class yn{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),gn.subVectors(t,e),s.cross(gn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){gn.subVectors(s,e),Fn.subVectors(n,e),ga.subVectors(t,e);const o=gn.dot(gn),a=gn.dot(Fn),c=gn.dot(ga),l=Fn.dot(Fn),h=Fn.dot(ga),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(l*c-a*h)*d,g=(o*h-a*c)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Bn)===null?!1:Bn.x>=0&&Bn.y>=0&&Bn.x+Bn.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,Bn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Bn.x),c.addScaledVector(o,Bn.y),c.addScaledVector(a,Bn.z),c)}static isFrontFacing(t,e,n,s){return gn.subVectors(n,e),Fn.subVectors(t,e),gn.cross(Fn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return gn.subVectors(this.c,this.b),Fn.subVectors(this.a,this.b),gn.cross(Fn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return yn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return yn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return yn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return yn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return yn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;os.subVectors(s,n),as.subVectors(r,n),_a.subVectors(t,n);const c=os.dot(_a),l=as.dot(_a);if(c<=0&&l<=0)return e.copy(n);va.subVectors(t,s);const h=os.dot(va),u=as.dot(va);if(h>=0&&u<=h)return e.copy(s);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(os,o);xa.subVectors(t,r);const f=os.dot(xa),g=as.dot(xa);if(g>=0&&f<=g)return e.copy(r);const _=f*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(as,a);const p=h*g-f*u;if(p<=0&&u-h>=0&&f-g>=0)return kl.subVectors(r,s),a=(u-h)/(u-h+(f-g)),e.copy(s).addScaledVector(kl,a);const m=1/(p+_+d);return o=_*m,a=d*m,e.copy(n).addScaledVector(os,o).addScaledVector(as,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Mu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},oi={h:0,s:0,l:0},qr={h:0,s:0,l:0};function ya(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class jt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Tn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ae.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=ae.workingColorSpace){return this.r=t,this.g=e,this.b=n,ae.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=ae.workingColorSpace){if(t=Wf(t,1),e=Be(e,0,1),n=Be(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=ya(o,r,t+1/3),this.g=ya(o,r,t),this.b=ya(o,r,t-1/3)}return ae.toWorkingColorSpace(this,s),this}setStyle(t,e=Tn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Tn){const n=Mu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Us(t.r),this.g=Us(t.g),this.b=Us(t.b),this}copyLinearToSRGB(t){return this.r=aa(t.r),this.g=aa(t.g),this.b=aa(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Tn){return ae.fromWorkingColorSpace(Ge.copy(this),t),Math.round(Be(Ge.r*255,0,255))*65536+Math.round(Be(Ge.g*255,0,255))*256+Math.round(Be(Ge.b*255,0,255))}getHexString(t=Tn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ae.workingColorSpace){ae.fromWorkingColorSpace(Ge.copy(this),e);const n=Ge.r,s=Ge.g,r=Ge.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=ae.workingColorSpace){return ae.fromWorkingColorSpace(Ge.copy(this),e),t.r=Ge.r,t.g=Ge.g,t.b=Ge.b,t}getStyle(t=Tn){ae.fromWorkingColorSpace(Ge.copy(this),t);const e=Ge.r,n=Ge.g,s=Ge.b;return t!==Tn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(oi),this.setHSL(oi.h+t,oi.s+e,oi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(oi),t.getHSL(qr);const n=ra(oi.h,qr.h,e),s=ra(oi.s,qr.s,e),r=ra(oi.l,qr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ge=new jt;jt.NAMES=Mu;let op=0;class Qs extends js{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:op++}),this.uuid=Mi(),this.name="",this.type="Material",this.blending=Ds,this.side=Ei,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xa,this.blendDst=Za,this.blendEquation=Bi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new jt(0,0,0),this.blendAlpha=0,this.depthFunc=yo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Al,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ji,this.stencilZFail=ji,this.stencilZPass=ji,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ds&&(n.blending=this.blending),this.side!==Ei&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Xa&&(n.blendSrc=this.blendSrc),this.blendDst!==Za&&(n.blendDst=this.blendDst),this.blendEquation!==Bi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==yo&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Al&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ji&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ji&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ji&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class vr extends Qs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pn,this.combine=ou,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Te=new I,$r=new xt;class Mn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ja,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=vi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return Sc("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)$r.fromBufferAttribute(this,e),$r.applyMatrix3(t),this.setXY(e,$r.x,$r.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyMatrix3(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyMatrix4(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyNormalMatrix(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.transformDirection(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Rn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=he(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Rn(e,this.array)),e}setX(t,e){return this.normalized&&(e=he(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Rn(e,this.array)),e}setY(t,e){return this.normalized&&(e=he(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Rn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=he(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Rn(e,this.array)),e}setW(t,e){return this.normalized&&(e=he(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=he(e,this.array),n=he(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=he(e,this.array),n=he(n,this.array),s=he(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=he(e,this.array),n=he(n,this.array),s=he(s,this.array),r=he(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ja&&(t.usage=this.usage),t}}class Su extends Mn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Eu extends Mn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class be extends Mn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let ap=0;const on=new me,Ma=new Fe,cs=new I,tn=new Nr,ar=new Nr,De=new I;class sn extends js{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ap++}),this.uuid=Mi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(_u(t)?Eu:Su)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Zt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return on.makeRotationFromQuaternion(t),this.applyMatrix4(on),this}rotateX(t){return on.makeRotationX(t),this.applyMatrix4(on),this}rotateY(t){return on.makeRotationY(t),this.applyMatrix4(on),this}rotateZ(t){return on.makeRotationZ(t),this.applyMatrix4(on),this}translate(t,e,n){return on.makeTranslation(t,e,n),this.applyMatrix4(on),this}scale(t,e,n){return on.makeScale(t,e,n),this.applyMatrix4(on),this}lookAt(t){return Ma.lookAt(t),Ma.updateMatrix(),this.applyMatrix4(Ma.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(cs).negate(),this.translate(cs.x,cs.y,cs.z),this}setFromPoints(t){const e=[];for(let n=0,s=t.length;n<s;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new be(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Nr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];tn.setFromBufferAttribute(r),this.morphTargetsRelative?(De.addVectors(this.boundingBox.min,tn.min),this.boundingBox.expandByPoint(De),De.addVectors(this.boundingBox.max,tn.max),this.boundingBox.expandByPoint(De)):(this.boundingBox.expandByPoint(tn.min),this.boundingBox.expandByPoint(tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ec);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){const n=this.boundingSphere.center;if(tn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];ar.setFromBufferAttribute(a),this.morphTargetsRelative?(De.addVectors(tn.min,ar.min),tn.expandByPoint(De),De.addVectors(tn.max,ar.max),tn.expandByPoint(De)):(tn.expandByPoint(ar.min),tn.expandByPoint(ar.max))}tn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)De.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(De));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)De.fromBufferAttribute(a,l),c&&(cs.fromBufferAttribute(t,l),De.add(cs)),s=Math.max(s,n.distanceToSquared(De))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Mn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let D=0;D<n.count;D++)a[D]=new I,c[D]=new I;const l=new I,h=new I,u=new I,d=new xt,f=new xt,g=new xt,_=new I,p=new I;function m(D,S,x){l.fromBufferAttribute(n,D),h.fromBufferAttribute(n,S),u.fromBufferAttribute(n,x),d.fromBufferAttribute(r,D),f.fromBufferAttribute(r,S),g.fromBufferAttribute(r,x),h.sub(l),u.sub(l),f.sub(d),g.sub(d);const A=1/(f.x*g.y-g.x*f.y);isFinite(A)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(A),p.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(A),a[D].add(_),a[S].add(_),a[x].add(_),c[D].add(p),c[S].add(p),c[x].add(p))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let D=0,S=w.length;D<S;++D){const x=w[D],A=x.start,W=x.count;for(let P=A,U=A+W;P<U;P+=3)m(t.getX(P+0),t.getX(P+1),t.getX(P+2))}const v=new I,E=new I,B=new I,T=new I;function b(D){B.fromBufferAttribute(s,D),T.copy(B);const S=a[D];v.copy(S),v.sub(B.multiplyScalar(B.dot(S))).normalize(),E.crossVectors(T,S);const A=E.dot(c[D])<0?-1:1;o.setXYZW(D,v.x,v.y,v.z,A)}for(let D=0,S=w.length;D<S;++D){const x=w[D],A=x.start,W=x.count;for(let P=A,U=A+W;P<U;P+=3)b(t.getX(P+0)),b(t.getX(P+1)),b(t.getX(P+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Mn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new I,r=new I,o=new I,a=new I,c=new I,l=new I,h=new I,u=new I;if(t)for(let d=0,f=t.count;d<f;d+=3){const g=t.getX(d+0),_=t.getX(d+1),p=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,p),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,p),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)De.fromBufferAttribute(t,e),De.normalize(),t.setXYZ(e,De.x,De.y,De.z)}toNonIndexed(){function t(a,c){const l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h);let f=0,g=0;for(let _=0,p=c.length;_<p;_++){a.isInterleavedBufferAttribute?f=c[_]*a.data.stride+a.offset:f=c[_]*h;for(let m=0;m<h;m++)d[g++]=l[f++]}return new Mn(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new sn,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,n);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){const d=l[h],f=t(d,n);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const f=l[u];h.push(f.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Hl=new me,Di=new yu,Kr=new Ec,Gl=new I,ls=new I,hs=new I,us=new I,Sa=new I,Jr=new I,jr=new xt,Qr=new xt,to=new xt,Vl=new I,Wl=new I,Xl=new I,eo=new I,no=new I;class St extends Fe{constructor(t=new sn,e=new vr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){Jr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],u=r[c];h!==0&&(Sa.fromBufferAttribute(u,t),o?Jr.addScaledVector(Sa,h):Jr.addScaledVector(Sa.sub(e),h))}e.add(Jr)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Kr.copy(n.boundingSphere),Kr.applyMatrix4(r),Di.copy(t.ray).recast(t.near),!(Kr.containsPoint(Di.origin)===!1&&(Di.intersectSphere(Kr,Gl)===null||Di.origin.distanceToSquared(Gl)>(t.far-t.near)**2))&&(Hl.copy(r).invert(),Di.copy(t.ray).applyMatrix4(Hl),!(n.boundingBox!==null&&Di.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Di)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const p=d[g],m=o[p.materialIndex],w=Math.max(p.start,f.start),v=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let E=w,B=v;E<B;E+=3){const T=a.getX(E),b=a.getX(E+1),D=a.getX(E+2);s=io(this,m,t,n,l,h,u,T,b,D),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let p=g,m=_;p<m;p+=3){const w=a.getX(p),v=a.getX(p+1),E=a.getX(p+2);s=io(this,o,t,n,l,h,u,w,v,E),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const p=d[g],m=o[p.materialIndex],w=Math.max(p.start,f.start),v=Math.min(c.count,Math.min(p.start+p.count,f.start+f.count));for(let E=w,B=v;E<B;E+=3){const T=E,b=E+1,D=E+2;s=io(this,m,t,n,l,h,u,T,b,D),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let p=g,m=_;p<m;p+=3){const w=p,v=p+1,E=p+2;s=io(this,o,t,n,l,h,u,w,v,E),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}}function cp(i,t,e,n,s,r,o,a){let c;if(t.side===Je?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===Ei,a),c===null)return null;no.copy(a),no.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(no);return l<e.near||l>e.far?null:{distance:l,point:no.clone(),object:i}}function io(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,ls),i.getVertexPosition(c,hs),i.getVertexPosition(l,us);const h=cp(i,t,e,n,ls,hs,us,eo);if(h){s&&(jr.fromBufferAttribute(s,a),Qr.fromBufferAttribute(s,c),to.fromBufferAttribute(s,l),h.uv=yn.getInterpolation(eo,ls,hs,us,jr,Qr,to,new xt)),r&&(jr.fromBufferAttribute(r,a),Qr.fromBufferAttribute(r,c),to.fromBufferAttribute(r,l),h.uv1=yn.getInterpolation(eo,ls,hs,us,jr,Qr,to,new xt)),o&&(Vl.fromBufferAttribute(o,a),Wl.fromBufferAttribute(o,c),Xl.fromBufferAttribute(o,l),h.normal=yn.getInterpolation(eo,ls,hs,us,Vl,Wl,Xl,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:c,c:l,normal:new I,materialIndex:0};yn.getNormal(ls,hs,us,u.normal),h.face=u}return h}class $t extends sn{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new be(l,3)),this.setAttribute("normal",new be(h,3)),this.setAttribute("uv",new be(u,2));function g(_,p,m,w,v,E,B,T,b,D,S){const x=E/b,A=B/D,W=E/2,P=B/2,U=T/2,q=b+1,V=D+1;let tt=0,$=0;const rt=new I;for(let it=0;it<V;it++){const lt=it*A-P;for(let Z=0;Z<q;Z++){const st=Z*x-W;rt[_]=st*w,rt[p]=lt*v,rt[m]=U,l.push(rt.x,rt.y,rt.z),rt[_]=0,rt[p]=0,rt[m]=T>0?1:-1,h.push(rt.x,rt.y,rt.z),u.push(Z/b),u.push(1-it/D),tt+=1}}for(let it=0;it<D;it++)for(let lt=0;lt<b;lt++){const Z=d+lt+q*it,st=d+lt+q*(it+1),L=d+(lt+1)+q*(it+1),G=d+(lt+1)+q*it;c.push(Z,st,G),c.push(st,L,G),$+=6}a.addGroup(f,$,S),f+=$,d+=tt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $t(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ks(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ye(i){const t={};for(let e=0;e<i.length;e++){const n=Ks(i[e]);for(const s in n)t[s]=n[s]}return t}function lp(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function wu(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ae.workingColorSpace}const hp={clone:Ks,merge:Ye};var up=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,dp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class bi extends Qs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=up,this.fragmentShader=dp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ks(t.uniforms),this.uniformsGroups=lp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class bu extends Fe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new me,this.projectionMatrix=new me,this.projectionMatrixInverse=new me,this.coordinateSystem=jn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ai=new I,Zl=new xt,Yl=new xt;class en extends bu{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ja*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(sa*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ja*2*Math.atan(Math.tan(sa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ai.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ai.x,ai.y).multiplyScalar(-t/ai.z),ai.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ai.x,ai.y).multiplyScalar(-t/ai.z)}getViewSize(t,e){return this.getViewBounds(t,Zl,Yl),e.subVectors(Yl,Zl)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(sa*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ds=-90,fs=1;class fp extends Fe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new en(ds,fs,t,e);s.layers=this.layers,this.add(s);const r=new en(ds,fs,t,e);r.layers=this.layers,this.add(r);const o=new en(ds,fs,t,e);o.layers=this.layers,this.add(o);const a=new en(ds,fs,t,e);a.layers=this.layers,this.add(a);const c=new en(ds,fs,t,e);c.layers=this.layers,this.add(c);const l=new en(ds,fs,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===jn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===bo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Tu extends qe{constructor(t,e,n,s,r,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:Xs,super(t,e,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class pp extends Ki{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Tu(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:xn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new $t(5,5,5),r=new bi({name:"CubemapFromEquirect",uniforms:Ks(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Je,blending:xi});r.uniforms.tEquirect.value=e;const o=new St(s,r),a=e.minFilter;return e.minFilter===Gi&&(e.minFilter=xn),new fp(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const Ea=new I,mp=new I,gp=new Zt;class fi{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Ea.subVectors(n,e).cross(mp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Ea),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||gp.getNormalMatrix(t),s=this.coplanarPoint(Ea).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ni=new Ec,so=new I;class bc{constructor(t=new fi,e=new fi,n=new fi,s=new fi,r=new fi,o=new fi){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=jn){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],d=s[7],f=s[8],g=s[9],_=s[10],p=s[11],m=s[12],w=s[13],v=s[14],E=s[15];if(n[0].setComponents(c-r,d-l,p-f,E-m).normalize(),n[1].setComponents(c+r,d+l,p+f,E+m).normalize(),n[2].setComponents(c+o,d+h,p+g,E+w).normalize(),n[3].setComponents(c-o,d-h,p-g,E-w).normalize(),n[4].setComponents(c-a,d-u,p-_,E-v).normalize(),e===jn)n[5].setComponents(c+a,d+u,p+_,E+v).normalize();else if(e===bo)n[5].setComponents(a,u,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ni.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ni.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ni)}intersectsSprite(t){return Ni.center.set(0,0,0),Ni.radius=.7071067811865476,Ni.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ni)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(so.x=s.normal.x>0?t.max.x:t.min.x,so.y=s.normal.y>0?t.max.y:t.min.y,so.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(so)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Au(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function _p(i){const t=new WeakMap;function e(a,c){const l=a.array,h=a.usage,u=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){const h=c.array,u=c._updateRange,d=c.updateRanges;if(i.bindBuffer(l,a),u.count===-1&&d.length===0&&i.bufferSubData(l,0,h),d.length!==0){for(let f=0,g=d.length;f<g;f++){const _=d[f];i.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}u.count!==-1&&(i.bufferSubData(l,u.offset*h.BYTES_PER_ELEMENT,h,u.offset,u.count),u.count=-1),c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}class ti extends sn{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=t/a,d=e/c,f=[],g=[],_=[],p=[];for(let m=0;m<h;m++){const w=m*d-o;for(let v=0;v<l;v++){const E=v*u-r;g.push(E,-w,0),_.push(0,0,1),p.push(v/a),p.push(1-m/c)}}for(let m=0;m<c;m++)for(let w=0;w<a;w++){const v=w+l*m,E=w+l*(m+1),B=w+1+l*(m+1),T=w+1+l*m;f.push(v,E,T),f.push(E,B,T)}this.setIndex(f),this.setAttribute("position",new be(g,3)),this.setAttribute("normal",new be(_,3)),this.setAttribute("uv",new be(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ti(t.width,t.height,t.widthSegments,t.heightSegments)}}var vp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,xp=`#ifdef USE_ALPHAHASH
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
#endif`,yp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Mp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Sp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ep=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,wp=`#ifdef USE_AOMAP
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
#endif`,bp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Tp=`#ifdef USE_BATCHING
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
#endif`,Ap=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Rp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Cp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Pp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Lp=`#ifdef USE_IRIDESCENCE
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
#endif`,Ip=`#ifdef USE_BUMPMAP
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
#endif`,Dp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Np=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Up=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Op=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Fp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Bp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,zp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,kp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Hp=`#define PI 3.141592653589793
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
} // validated`,Gp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Vp=`vec3 transformedNormal = objectNormal;
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
#endif`,Wp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Xp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Zp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Yp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,qp="gl_FragColor = linearToOutputTexel( gl_FragColor );",$p=`
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
}`,Kp=`#ifdef USE_ENVMAP
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
#endif`,Jp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,jp=`#ifdef USE_ENVMAP
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
#endif`,Qp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,tm=`#ifdef USE_ENVMAP
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
#endif`,em=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,nm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,im=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,sm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,rm=`#ifdef USE_GRADIENTMAP
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
}`,om=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,am=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,cm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lm=`uniform bool receiveShadow;
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
#endif`,hm=`#ifdef USE_ENVMAP
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
#endif`,um=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,dm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,fm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,pm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,mm=`PhysicalMaterial material;
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
#endif`,gm=`struct PhysicalMaterial {
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
}`,_m=`
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
#endif`,vm=`#if defined( RE_IndirectDiffuse )
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
#endif`,xm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ym=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Mm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Em=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,wm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,bm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Tm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Am=`#if defined( USE_POINTS_UV )
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
#endif`,Rm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Cm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Pm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Lm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Im=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Dm=`#ifdef USE_MORPHTARGETS
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
#endif`,Nm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Um=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Om=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Fm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,km=`#ifdef USE_NORMALMAP
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
#endif`,Hm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Gm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Vm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Wm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Xm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Zm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ym=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,qm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$m=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Km=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Jm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,jm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Qm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,t0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,e0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,n0=`float getShadowMask() {
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
}`,i0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,s0=`#ifdef USE_SKINNING
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
#endif`,r0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,o0=`#ifdef USE_SKINNING
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
#endif`,a0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,c0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,l0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,h0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,u0=`#ifdef USE_TRANSMISSION
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
#endif`,d0=`#ifdef USE_TRANSMISSION
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
#endif`,f0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,p0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,m0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,g0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const _0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,v0=`uniform sampler2D t2D;
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
}`,x0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,y0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,M0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,S0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,E0=`#include <common>
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
}`,w0=`#if DEPTH_PACKING == 3200
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
}`,b0=`#define DISTANCE
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
}`,T0=`#define DISTANCE
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
}`,A0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,R0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,C0=`uniform float scale;
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
}`,P0=`uniform vec3 diffuse;
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
}`,L0=`#include <common>
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
}`,I0=`uniform vec3 diffuse;
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
}`,D0=`#define LAMBERT
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
}`,N0=`#define LAMBERT
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
}`,U0=`#define MATCAP
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
}`,O0=`#define MATCAP
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
}`,F0=`#define NORMAL
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
}`,B0=`#define NORMAL
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
}`,z0=`#define PHONG
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
}`,k0=`#define PHONG
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
}`,H0=`#define STANDARD
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
}`,G0=`#define STANDARD
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
}`,V0=`#define TOON
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
}`,W0=`#define TOON
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
}`,X0=`uniform float size;
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
}`,Z0=`uniform vec3 diffuse;
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
}`,Y0=`#include <common>
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
}`,q0=`uniform vec3 color;
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
}`,$0=`uniform float rotation;
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
}`,K0=`uniform vec3 diffuse;
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
}`,Xt={alphahash_fragment:vp,alphahash_pars_fragment:xp,alphamap_fragment:yp,alphamap_pars_fragment:Mp,alphatest_fragment:Sp,alphatest_pars_fragment:Ep,aomap_fragment:wp,aomap_pars_fragment:bp,batching_pars_vertex:Tp,batching_vertex:Ap,begin_vertex:Rp,beginnormal_vertex:Cp,bsdfs:Pp,iridescence_fragment:Lp,bumpmap_pars_fragment:Ip,clipping_planes_fragment:Dp,clipping_planes_pars_fragment:Np,clipping_planes_pars_vertex:Up,clipping_planes_vertex:Op,color_fragment:Fp,color_pars_fragment:Bp,color_pars_vertex:zp,color_vertex:kp,common:Hp,cube_uv_reflection_fragment:Gp,defaultnormal_vertex:Vp,displacementmap_pars_vertex:Wp,displacementmap_vertex:Xp,emissivemap_fragment:Zp,emissivemap_pars_fragment:Yp,colorspace_fragment:qp,colorspace_pars_fragment:$p,envmap_fragment:Kp,envmap_common_pars_fragment:Jp,envmap_pars_fragment:jp,envmap_pars_vertex:Qp,envmap_physical_pars_fragment:hm,envmap_vertex:tm,fog_vertex:em,fog_pars_vertex:nm,fog_fragment:im,fog_pars_fragment:sm,gradientmap_pars_fragment:rm,lightmap_pars_fragment:om,lights_lambert_fragment:am,lights_lambert_pars_fragment:cm,lights_pars_begin:lm,lights_toon_fragment:um,lights_toon_pars_fragment:dm,lights_phong_fragment:fm,lights_phong_pars_fragment:pm,lights_physical_fragment:mm,lights_physical_pars_fragment:gm,lights_fragment_begin:_m,lights_fragment_maps:vm,lights_fragment_end:xm,logdepthbuf_fragment:ym,logdepthbuf_pars_fragment:Mm,logdepthbuf_pars_vertex:Sm,logdepthbuf_vertex:Em,map_fragment:wm,map_pars_fragment:bm,map_particle_fragment:Tm,map_particle_pars_fragment:Am,metalnessmap_fragment:Rm,metalnessmap_pars_fragment:Cm,morphinstance_vertex:Pm,morphcolor_vertex:Lm,morphnormal_vertex:Im,morphtarget_pars_vertex:Dm,morphtarget_vertex:Nm,normal_fragment_begin:Um,normal_fragment_maps:Om,normal_pars_fragment:Fm,normal_pars_vertex:Bm,normal_vertex:zm,normalmap_pars_fragment:km,clearcoat_normal_fragment_begin:Hm,clearcoat_normal_fragment_maps:Gm,clearcoat_pars_fragment:Vm,iridescence_pars_fragment:Wm,opaque_fragment:Xm,packing:Zm,premultiplied_alpha_fragment:Ym,project_vertex:qm,dithering_fragment:$m,dithering_pars_fragment:Km,roughnessmap_fragment:Jm,roughnessmap_pars_fragment:jm,shadowmap_pars_fragment:Qm,shadowmap_pars_vertex:t0,shadowmap_vertex:e0,shadowmask_pars_fragment:n0,skinbase_vertex:i0,skinning_pars_vertex:s0,skinning_vertex:r0,skinnormal_vertex:o0,specularmap_fragment:a0,specularmap_pars_fragment:c0,tonemapping_fragment:l0,tonemapping_pars_fragment:h0,transmission_fragment:u0,transmission_pars_fragment:d0,uv_pars_fragment:f0,uv_pars_vertex:p0,uv_vertex:m0,worldpos_vertex:g0,background_vert:_0,background_frag:v0,backgroundCube_vert:x0,backgroundCube_frag:y0,cube_vert:M0,cube_frag:S0,depth_vert:E0,depth_frag:w0,distanceRGBA_vert:b0,distanceRGBA_frag:T0,equirect_vert:A0,equirect_frag:R0,linedashed_vert:C0,linedashed_frag:P0,meshbasic_vert:L0,meshbasic_frag:I0,meshlambert_vert:D0,meshlambert_frag:N0,meshmatcap_vert:U0,meshmatcap_frag:O0,meshnormal_vert:F0,meshnormal_frag:B0,meshphong_vert:z0,meshphong_frag:k0,meshphysical_vert:H0,meshphysical_frag:G0,meshtoon_vert:V0,meshtoon_frag:W0,points_vert:X0,points_frag:Z0,shadow_vert:Y0,shadow_frag:q0,sprite_vert:$0,sprite_frag:K0},_t={common:{diffuse:{value:new jt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Zt}},envmap:{envMap:{value:null},envMapRotation:{value:new Zt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Zt},normalScale:{value:new xt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new jt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new jt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0},uvTransform:{value:new Zt}},sprite:{diffuse:{value:new jt(16777215)},opacity:{value:1},center:{value:new xt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}}},An={basic:{uniforms:Ye([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.fog]),vertexShader:Xt.meshbasic_vert,fragmentShader:Xt.meshbasic_frag},lambert:{uniforms:Ye([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new jt(0)}}]),vertexShader:Xt.meshlambert_vert,fragmentShader:Xt.meshlambert_frag},phong:{uniforms:Ye([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new jt(0)},specular:{value:new jt(1118481)},shininess:{value:30}}]),vertexShader:Xt.meshphong_vert,fragmentShader:Xt.meshphong_frag},standard:{uniforms:Ye([_t.common,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.roughnessmap,_t.metalnessmap,_t.fog,_t.lights,{emissive:{value:new jt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag},toon:{uniforms:Ye([_t.common,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.gradientmap,_t.fog,_t.lights,{emissive:{value:new jt(0)}}]),vertexShader:Xt.meshtoon_vert,fragmentShader:Xt.meshtoon_frag},matcap:{uniforms:Ye([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,{matcap:{value:null}}]),vertexShader:Xt.meshmatcap_vert,fragmentShader:Xt.meshmatcap_frag},points:{uniforms:Ye([_t.points,_t.fog]),vertexShader:Xt.points_vert,fragmentShader:Xt.points_frag},dashed:{uniforms:Ye([_t.common,_t.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xt.linedashed_vert,fragmentShader:Xt.linedashed_frag},depth:{uniforms:Ye([_t.common,_t.displacementmap]),vertexShader:Xt.depth_vert,fragmentShader:Xt.depth_frag},normal:{uniforms:Ye([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,{opacity:{value:1}}]),vertexShader:Xt.meshnormal_vert,fragmentShader:Xt.meshnormal_frag},sprite:{uniforms:Ye([_t.sprite,_t.fog]),vertexShader:Xt.sprite_vert,fragmentShader:Xt.sprite_frag},background:{uniforms:{uvTransform:{value:new Zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xt.background_vert,fragmentShader:Xt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Zt}},vertexShader:Xt.backgroundCube_vert,fragmentShader:Xt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xt.cube_vert,fragmentShader:Xt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xt.equirect_vert,fragmentShader:Xt.equirect_frag},distanceRGBA:{uniforms:Ye([_t.common,_t.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xt.distanceRGBA_vert,fragmentShader:Xt.distanceRGBA_frag},shadow:{uniforms:Ye([_t.lights,_t.fog,{color:{value:new jt(0)},opacity:{value:1}}]),vertexShader:Xt.shadow_vert,fragmentShader:Xt.shadow_frag}};An.physical={uniforms:Ye([An.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Zt},clearcoatNormalScale:{value:new xt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Zt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Zt},sheen:{value:0},sheenColor:{value:new jt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Zt},transmissionSamplerSize:{value:new xt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Zt},attenuationDistance:{value:0},attenuationColor:{value:new jt(0)},specularColor:{value:new jt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Zt},anisotropyVector:{value:new xt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Zt}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag};const ro={r:0,b:0,g:0},Ui=new Pn,J0=new me;function j0(i,t,e,n,s,r,o){const a=new jt(0);let c=r===!0?0:1,l,h,u=null,d=0,f=null;function g(w){let v=w.isScene===!0?w.background:null;return v&&v.isTexture&&(v=(w.backgroundBlurriness>0?e:t).get(v)),v}function _(w){let v=!1;const E=g(w);E===null?m(a,c):E&&E.isColor&&(m(E,1),v=!0);const B=i.xr.getEnvironmentBlendMode();B==="additive"?n.buffers.color.setClear(0,0,0,1,o):B==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(w,v){const E=g(v);E&&(E.isCubeTexture||E.mapping===Oo)?(h===void 0&&(h=new St(new $t(1,1,1),new bi({name:"BackgroundCubeMaterial",uniforms:Ks(An.backgroundCube.uniforms),vertexShader:An.backgroundCube.vertexShader,fragmentShader:An.backgroundCube.fragmentShader,side:Je,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(B,T,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Ui.copy(v.backgroundRotation),Ui.x*=-1,Ui.y*=-1,Ui.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Ui.y*=-1,Ui.z*=-1),h.material.uniforms.envMap.value=E,h.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(J0.makeRotationFromEuler(Ui)),h.material.toneMapped=ae.getTransfer(E.colorSpace)!==pe,(u!==E||d!==E.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=E,d=E.version,f=i.toneMapping),h.layers.enableAll(),w.unshift(h,h.geometry,h.material,0,0,null)):E&&E.isTexture&&(l===void 0&&(l=new St(new ti(2,2),new bi({name:"BackgroundMaterial",uniforms:Ks(An.background.uniforms),vertexShader:An.background.vertexShader,fragmentShader:An.background.fragmentShader,side:Ei,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=E,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=ae.getTransfer(E.colorSpace)!==pe,E.matrixAutoUpdate===!0&&E.updateMatrix(),l.material.uniforms.uvTransform.value.copy(E.matrix),(u!==E||d!==E.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=E,d=E.version,f=i.toneMapping),l.layers.enableAll(),w.unshift(l,l.geometry,l.material,0,0,null))}function m(w,v){w.getRGB(ro,wu(i)),n.buffers.color.setClear(ro.r,ro.g,ro.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(w,v=1){a.set(w),c=v,m(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(w){c=w,m(a,c)},render:_,addToRenderList:p}}function Q0(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,o=!1;function a(x,A,W,P,U){let q=!1;const V=u(P,W,A);r!==V&&(r=V,l(r.object)),q=f(x,P,W,U),q&&g(x,P,W,U),U!==null&&t.update(U,i.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,E(x,A,W,P),U!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(U).buffer))}function c(){return i.createVertexArray()}function l(x){return i.bindVertexArray(x)}function h(x){return i.deleteVertexArray(x)}function u(x,A,W){const P=W.wireframe===!0;let U=n[x.id];U===void 0&&(U={},n[x.id]=U);let q=U[A.id];q===void 0&&(q={},U[A.id]=q);let V=q[P];return V===void 0&&(V=d(c()),q[P]=V),V}function d(x){const A=[],W=[],P=[];for(let U=0;U<e;U++)A[U]=0,W[U]=0,P[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:W,attributeDivisors:P,object:x,attributes:{},index:null}}function f(x,A,W,P){const U=r.attributes,q=A.attributes;let V=0;const tt=W.getAttributes();for(const $ in tt)if(tt[$].location>=0){const it=U[$];let lt=q[$];if(lt===void 0&&($==="instanceMatrix"&&x.instanceMatrix&&(lt=x.instanceMatrix),$==="instanceColor"&&x.instanceColor&&(lt=x.instanceColor)),it===void 0||it.attribute!==lt||lt&&it.data!==lt.data)return!0;V++}return r.attributesNum!==V||r.index!==P}function g(x,A,W,P){const U={},q=A.attributes;let V=0;const tt=W.getAttributes();for(const $ in tt)if(tt[$].location>=0){let it=q[$];it===void 0&&($==="instanceMatrix"&&x.instanceMatrix&&(it=x.instanceMatrix),$==="instanceColor"&&x.instanceColor&&(it=x.instanceColor));const lt={};lt.attribute=it,it&&it.data&&(lt.data=it.data),U[$]=lt,V++}r.attributes=U,r.attributesNum=V,r.index=P}function _(){const x=r.newAttributes;for(let A=0,W=x.length;A<W;A++)x[A]=0}function p(x){m(x,0)}function m(x,A){const W=r.newAttributes,P=r.enabledAttributes,U=r.attributeDivisors;W[x]=1,P[x]===0&&(i.enableVertexAttribArray(x),P[x]=1),U[x]!==A&&(i.vertexAttribDivisor(x,A),U[x]=A)}function w(){const x=r.newAttributes,A=r.enabledAttributes;for(let W=0,P=A.length;W<P;W++)A[W]!==x[W]&&(i.disableVertexAttribArray(W),A[W]=0)}function v(x,A,W,P,U,q,V){V===!0?i.vertexAttribIPointer(x,A,W,U,q):i.vertexAttribPointer(x,A,W,P,U,q)}function E(x,A,W,P){_();const U=P.attributes,q=W.getAttributes(),V=A.defaultAttributeValues;for(const tt in q){const $=q[tt];if($.location>=0){let rt=U[tt];if(rt===void 0&&(tt==="instanceMatrix"&&x.instanceMatrix&&(rt=x.instanceMatrix),tt==="instanceColor"&&x.instanceColor&&(rt=x.instanceColor)),rt!==void 0){const it=rt.normalized,lt=rt.itemSize,Z=t.get(rt);if(Z===void 0)continue;const st=Z.buffer,L=Z.type,G=Z.bytesPerElement,Q=L===i.INT||L===i.UNSIGNED_INT||rt.gpuType===lu;if(rt.isInterleavedBufferAttribute){const et=rt.data,ft=et.stride,pt=rt.offset;if(et.isInstancedInterleavedBuffer){for(let Et=0;Et<$.locationSize;Et++)m($.location+Et,et.meshPerAttribute);x.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let Et=0;Et<$.locationSize;Et++)p($.location+Et);i.bindBuffer(i.ARRAY_BUFFER,st);for(let Et=0;Et<$.locationSize;Et++)v($.location+Et,lt/$.locationSize,L,it,ft*G,(pt+lt/$.locationSize*Et)*G,Q)}else{if(rt.isInstancedBufferAttribute){for(let et=0;et<$.locationSize;et++)m($.location+et,rt.meshPerAttribute);x.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let et=0;et<$.locationSize;et++)p($.location+et);i.bindBuffer(i.ARRAY_BUFFER,st);for(let et=0;et<$.locationSize;et++)v($.location+et,lt/$.locationSize,L,it,lt*G,lt/$.locationSize*et*G,Q)}}else if(V!==void 0){const it=V[tt];if(it!==void 0)switch(it.length){case 2:i.vertexAttrib2fv($.location,it);break;case 3:i.vertexAttrib3fv($.location,it);break;case 4:i.vertexAttrib4fv($.location,it);break;default:i.vertexAttrib1fv($.location,it)}}}}w()}function B(){D();for(const x in n){const A=n[x];for(const W in A){const P=A[W];for(const U in P)h(P[U].object),delete P[U];delete A[W]}delete n[x]}}function T(x){if(n[x.id]===void 0)return;const A=n[x.id];for(const W in A){const P=A[W];for(const U in P)h(P[U].object),delete P[U];delete A[W]}delete n[x.id]}function b(x){for(const A in n){const W=n[A];if(W[x.id]===void 0)continue;const P=W[x.id];for(const U in P)h(P[U].object),delete P[U];delete W[x.id]}}function D(){S(),o=!0,r!==s&&(r=s,l(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:D,resetDefaultState:S,dispose:B,releaseStatesOfGeometry:T,releaseStatesOfProgram:b,initAttributes:_,enableAttribute:p,disableUnusedAttributes:w}}function tg(i,t,e){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function o(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function a(l,h,u){if(u===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let f=0;f<u;f++)this.render(l[f],h[f]);else{d.multiDrawArraysWEBGL(n,l,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];e.update(f,n,1)}}function c(l,h,u,d){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)o(l[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_];for(let _=0;_<d.length;_++)e.update(g,n,d[_])}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function eg(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(T){return!(T!==Cn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const b=T===Fo&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==wi&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==vi&&!b)}function c(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=e.logarithmicDepthBuffer===!0,d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=f>0,B=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:f,maxTextureSize:g,maxCubemapSize:_,maxAttributes:p,maxVertexUniforms:m,maxVaryings:w,maxFragmentUniforms:v,vertexTextures:E,maxSamples:B}}function ng(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new fi,a=new Zt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,_=u.clipIntersection,p=u.clipShadows,m=i.get(u);if(!s||g===null||g.length===0||r&&!p)r?h(null):l();else{const w=r?0:n,v=w*4;let E=m.clippingState||null;c.value=E,E=h(g,d,v,f);for(let B=0;B!==v;++B)E[B]=e[B];m.clippingState=E,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=w}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,g){const _=u!==null?u.length:0;let p=null;if(_!==0){if(p=c.value,g!==!0||p===null){const m=f+_*4,w=d.matrixWorldInverse;a.getNormalMatrix(w),(p===null||p.length<m)&&(p=new Float32Array(m));for(let v=0,E=f;v!==_;++v,E+=4)o.copy(u[v]).applyMatrix4(w,a),o.normal.toArray(p,E),p[E+3]=o.constant}c.value=p,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}function ig(i){let t=new WeakMap;function e(o,a){return a===Ya?o.mapping=Xs:a===qa&&(o.mapping=Zs),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ya||a===qa)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new pp(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Ru extends bu{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const As=4,ql=[.125,.215,.35,.446,.526,.582],zi=20,wa=new Ru,$l=new jt;let ba=null,Ta=0,Aa=0,Ra=!1;const Fi=(1+Math.sqrt(5))/2,ps=1/Fi,Kl=[new I(-Fi,ps,0),new I(Fi,ps,0),new I(-ps,0,Fi),new I(ps,0,Fi),new I(0,Fi,-ps),new I(0,Fi,ps),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)];class Jl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){ba=this._renderer.getRenderTarget(),Ta=this._renderer.getActiveCubeFace(),Aa=this._renderer.getActiveMipmapLevel(),Ra=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=th(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ql(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ba,Ta,Aa),this._renderer.xr.enabled=Ra,t.scissorTest=!1,oo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Xs||t.mapping===Zs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ba=this._renderer.getRenderTarget(),Ta=this._renderer.getActiveCubeFace(),Aa=this._renderer.getActiveMipmapLevel(),Ra=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:xn,minFilter:xn,generateMipmaps:!1,type:Fo,format:Cn,colorSpace:Ri,depthBuffer:!1},s=jl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=jl(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=sg(r)),this._blurMaterial=rg(r,t,e)}return s}_compileMaterial(t){const e=new St(this._lodPlanes[0],t);this._renderer.compile(e,wa)}_sceneToCubeUV(t,e,n,s){const a=new en(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor($l),h.toneMapping=yi,h.autoClear=!1;const f=new vr({name:"PMREM.Background",side:Je,depthWrite:!1,depthTest:!1}),g=new St(new $t,f);let _=!1;const p=t.background;p?p.isColor&&(f.color.copy(p),t.background=null,_=!0):(f.color.copy($l),_=!0);for(let m=0;m<6;m++){const w=m%3;w===0?(a.up.set(0,c[m],0),a.lookAt(l[m],0,0)):w===1?(a.up.set(0,0,c[m]),a.lookAt(0,l[m],0)):(a.up.set(0,c[m],0),a.lookAt(0,0,l[m]));const v=this._cubeSize;oo(s,w*v,m>2?v:0,v,v),h.setRenderTarget(s),_&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Xs||t.mapping===Zs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=th()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ql());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new St(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;oo(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,wa)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Kl[(s-r-1)%Kl.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new St(this._lodPlanes[s],l),d=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*zi-1),_=r/g,p=isFinite(r)?1+Math.floor(h*_):zi;p>zi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${zi}`);const m=[];let w=0;for(let b=0;b<zi;++b){const D=b/_,S=Math.exp(-D*D/2);m.push(S),b===0?w+=S:b<p&&(w+=2*S)}for(let b=0;b<m.length;b++)m[b]=m[b]/w;d.envMap.value=t.texture,d.samples.value=p,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:v}=this;d.dTheta.value=g,d.mipInt.value=v-n;const E=this._sizeLods[s],B=3*E*(s>v-As?s-v+As:0),T=4*(this._cubeSize-E);oo(e,B,T,3*E,2*E),c.setRenderTarget(e),c.render(u,wa)}}function sg(i){const t=[],e=[],n=[];let s=i;const r=i-As+1+ql.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let c=1/a;o>i-As?c=ql[o-i+As-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,_=3,p=2,m=1,w=new Float32Array(_*g*f),v=new Float32Array(p*g*f),E=new Float32Array(m*g*f);for(let T=0;T<f;T++){const b=T%3*2/3-1,D=T>2?0:-1,S=[b,D,0,b+2/3,D,0,b+2/3,D+1,0,b,D,0,b+2/3,D+1,0,b,D+1,0];w.set(S,_*g*T),v.set(d,p*g*T);const x=[T,T,T,T,T,T];E.set(x,m*g*T)}const B=new sn;B.setAttribute("position",new Mn(w,_)),B.setAttribute("uv",new Mn(v,p)),B.setAttribute("faceIndex",new Mn(E,m)),t.push(B),s>As&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function jl(i,t,e){const n=new Ki(i,t,e);return n.texture.mapping=Oo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function oo(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function rg(i,t,e){const n=new Float32Array(zi),s=new I(0,1,0);return new bi({name:"SphericalGaussianBlur",defines:{n:zi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Tc(),fragmentShader:`

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
		`,blending:xi,depthTest:!1,depthWrite:!1})}function Ql(){return new bi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Tc(),fragmentShader:`

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
		`,blending:xi,depthTest:!1,depthWrite:!1})}function th(){return new bi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Tc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:xi,depthTest:!1,depthWrite:!1})}function Tc(){return`

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
	`}function og(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Ya||c===qa,h=c===Xs||c===Zs;if(l||h){let u=t.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Jl(i)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return l&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new Jl(i)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function ag(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Sc("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function cg(i,t,e,n){const s={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let p=0,m=_.length;p<m;p++)t.remove(_[p])}d.removeEventListener("dispose",o),delete s[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function c(u){const d=u.attributes;for(const g in d)t.update(d[g],i.ARRAY_BUFFER);const f=u.morphAttributes;for(const g in f){const _=f[g];for(let p=0,m=_.length;p<m;p++)t.update(_[p],i.ARRAY_BUFFER)}}function l(u){const d=[],f=u.index,g=u.attributes.position;let _=0;if(f!==null){const w=f.array;_=f.version;for(let v=0,E=w.length;v<E;v+=3){const B=w[v+0],T=w[v+1],b=w[v+2];d.push(B,T,T,b,b,B)}}else if(g!==void 0){const w=g.array;_=g.version;for(let v=0,E=w.length/3-1;v<E;v+=3){const B=v+0,T=v+1,b=v+2;d.push(B,T,T,b,b,B)}}else return;const p=new(_u(d)?Eu:Su)(d,1);p.version=_;const m=r.get(u);m&&t.remove(m),r.set(u,p)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function lg(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,f){i.drawElements(n,f,r,d*o),e.update(f,n,1)}function l(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*o,g),e.update(f,n,g))}function h(d,f,g){if(g===0)return;const _=t.get("WEBGL_multi_draw");if(_===null)for(let p=0;p<g;p++)this.render(d[p]/o,f[p]);else{_.multiDrawElementsWEBGL(n,f,0,r,d,0,g);let p=0;for(let m=0;m<g;m++)p+=f[m];e.update(p,n,1)}}function u(d,f,g,_){if(g===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<d.length;m++)l(d[m]/o,f[m],_[m]);else{p.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,_,0,g);let m=0;for(let w=0;w<g;w++)m+=f[w];for(let w=0;w<_.length;w++)e.update(m,n,_[w])}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function hg(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function ug(i,t,e){const n=new WeakMap,s=new xe;function r(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let x=function(){D.dispose(),n.delete(a),a.removeEventListener("dispose",x)};var f=x;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],w=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let E=0;g===!0&&(E=1),_===!0&&(E=2),p===!0&&(E=3);let B=a.attributes.position.count*E,T=1;B>t.maxTextureSize&&(T=Math.ceil(B/t.maxTextureSize),B=t.maxTextureSize);const b=new Float32Array(B*T*4*u),D=new xu(b,B,T,u);D.type=vi,D.needsUpdate=!0;const S=E*4;for(let A=0;A<u;A++){const W=m[A],P=w[A],U=v[A],q=B*T*4*A;for(let V=0;V<W.count;V++){const tt=V*S;g===!0&&(s.fromBufferAttribute(W,V),b[q+tt+0]=s.x,b[q+tt+1]=s.y,b[q+tt+2]=s.z,b[q+tt+3]=0),_===!0&&(s.fromBufferAttribute(P,V),b[q+tt+4]=s.x,b[q+tt+5]=s.y,b[q+tt+6]=s.z,b[q+tt+7]=0),p===!0&&(s.fromBufferAttribute(U,V),b[q+tt+8]=s.x,b[q+tt+9]=s.y,b[q+tt+10]=s.z,b[q+tt+11]=U.itemSize===4?s.w:1)}}d={count:u,texture:D,size:new xt(B,T)},n.set(a,d),a.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let g=0;for(let p=0;p<l.length;p++)g+=l[p];const _=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function dg(i,t,e,n){let s=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}class Cu extends qe{constructor(t,e,n,s,r,o,a,c,l,h=Ns){if(h!==Ns&&h!==$s)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ns&&(n=Ys),n===void 0&&h===$s&&(n=qs),super(null,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:dn,this.minFilter=c!==void 0?c:dn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Pu=new qe,Lu=new Cu(1,1);Lu.compareFunction=gu;const Iu=new xu,Du=new jf,Nu=new Tu,eh=[],nh=[],ih=new Float32Array(16),sh=new Float32Array(9),rh=new Float32Array(4);function tr(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=eh[s];if(r===void 0&&(r=new Float32Array(s),eh[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Pe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Le(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function zo(i,t){let e=nh[t];e===void 0&&(e=new Int32Array(t),nh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function fg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function pg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pe(e,t))return;i.uniform2fv(this.addr,t),Le(e,t)}}function mg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Pe(e,t))return;i.uniform3fv(this.addr,t),Le(e,t)}}function gg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pe(e,t))return;i.uniform4fv(this.addr,t),Le(e,t)}}function _g(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Pe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Le(e,t)}else{if(Pe(e,n))return;rh.set(n),i.uniformMatrix2fv(this.addr,!1,rh),Le(e,n)}}function vg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Pe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Le(e,t)}else{if(Pe(e,n))return;sh.set(n),i.uniformMatrix3fv(this.addr,!1,sh),Le(e,n)}}function xg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Pe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Le(e,t)}else{if(Pe(e,n))return;ih.set(n),i.uniformMatrix4fv(this.addr,!1,ih),Le(e,n)}}function yg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Mg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pe(e,t))return;i.uniform2iv(this.addr,t),Le(e,t)}}function Sg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Pe(e,t))return;i.uniform3iv(this.addr,t),Le(e,t)}}function Eg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pe(e,t))return;i.uniform4iv(this.addr,t),Le(e,t)}}function wg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function bg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pe(e,t))return;i.uniform2uiv(this.addr,t),Le(e,t)}}function Tg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Pe(e,t))return;i.uniform3uiv(this.addr,t),Le(e,t)}}function Ag(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pe(e,t))return;i.uniform4uiv(this.addr,t),Le(e,t)}}function Rg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);const r=this.type===i.SAMPLER_2D_SHADOW?Lu:Pu;e.setTexture2D(t||r,s)}function Cg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Du,s)}function Pg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Nu,s)}function Lg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Iu,s)}function Ig(i){switch(i){case 5126:return fg;case 35664:return pg;case 35665:return mg;case 35666:return gg;case 35674:return _g;case 35675:return vg;case 35676:return xg;case 5124:case 35670:return yg;case 35667:case 35671:return Mg;case 35668:case 35672:return Sg;case 35669:case 35673:return Eg;case 5125:return wg;case 36294:return bg;case 36295:return Tg;case 36296:return Ag;case 35678:case 36198:case 36298:case 36306:case 35682:return Rg;case 35679:case 36299:case 36307:return Cg;case 35680:case 36300:case 36308:case 36293:return Pg;case 36289:case 36303:case 36311:case 36292:return Lg}}function Dg(i,t){i.uniform1fv(this.addr,t)}function Ng(i,t){const e=tr(t,this.size,2);i.uniform2fv(this.addr,e)}function Ug(i,t){const e=tr(t,this.size,3);i.uniform3fv(this.addr,e)}function Og(i,t){const e=tr(t,this.size,4);i.uniform4fv(this.addr,e)}function Fg(i,t){const e=tr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Bg(i,t){const e=tr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function zg(i,t){const e=tr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function kg(i,t){i.uniform1iv(this.addr,t)}function Hg(i,t){i.uniform2iv(this.addr,t)}function Gg(i,t){i.uniform3iv(this.addr,t)}function Vg(i,t){i.uniform4iv(this.addr,t)}function Wg(i,t){i.uniform1uiv(this.addr,t)}function Xg(i,t){i.uniform2uiv(this.addr,t)}function Zg(i,t){i.uniform3uiv(this.addr,t)}function Yg(i,t){i.uniform4uiv(this.addr,t)}function qg(i,t,e){const n=this.cache,s=t.length,r=zo(e,s);Pe(n,r)||(i.uniform1iv(this.addr,r),Le(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Pu,r[o])}function $g(i,t,e){const n=this.cache,s=t.length,r=zo(e,s);Pe(n,r)||(i.uniform1iv(this.addr,r),Le(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Du,r[o])}function Kg(i,t,e){const n=this.cache,s=t.length,r=zo(e,s);Pe(n,r)||(i.uniform1iv(this.addr,r),Le(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Nu,r[o])}function Jg(i,t,e){const n=this.cache,s=t.length,r=zo(e,s);Pe(n,r)||(i.uniform1iv(this.addr,r),Le(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Iu,r[o])}function jg(i){switch(i){case 5126:return Dg;case 35664:return Ng;case 35665:return Ug;case 35666:return Og;case 35674:return Fg;case 35675:return Bg;case 35676:return zg;case 5124:case 35670:return kg;case 35667:case 35671:return Hg;case 35668:case 35672:return Gg;case 35669:case 35673:return Vg;case 5125:return Wg;case 36294:return Xg;case 36295:return Zg;case 36296:return Yg;case 35678:case 36198:case 36298:case 36306:case 35682:return qg;case 35679:case 36299:case 36307:return $g;case 35680:case 36300:case 36308:case 36293:return Kg;case 36289:case 36303:case 36311:case 36292:return Jg}}class Qg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Ig(e.type)}}class t_{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=jg(e.type)}}class e_{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const Ca=/(\w+)(\])?(\[|\.)?/g;function oh(i,t){i.seq.push(t),i.map[t.id]=t}function n_(i,t,e){const n=i.name,s=n.length;for(Ca.lastIndex=0;;){const r=Ca.exec(n),o=Ca.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){oh(e,l===void 0?new Qg(a,i,t):new t_(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new e_(a),oh(e,u)),e=u}}}class vo{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);n_(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function ah(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const i_=37297;let s_=0;function r_(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function o_(i){const t=ae.getPrimaries(ae.workingColorSpace),e=ae.getPrimaries(i);let n;switch(t===e?n="":t===wo&&e===Eo?n="LinearDisplayP3ToLinearSRGB":t===Eo&&e===wo&&(n="LinearSRGBToLinearDisplayP3"),i){case Ri:case Bo:return[n,"LinearTransferOETF"];case Tn:case Mc:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function ch(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+r_(i.getShaderSource(t),o)}else return s}function a_(i,t){const e=o_(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function c_(i,t){let e;switch(t){case _f:e="Linear";break;case vf:e="Reinhard";break;case xf:e="OptimizedCineon";break;case au:e="ACESFilmic";break;case Mf:e="AgX";break;case Sf:e="Neutral";break;case yf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function l_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(fr).join(`
`)}function h_(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function u_(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function fr(i){return i!==""}function lh(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function hh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const d_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Qa(i){return i.replace(d_,p_)}const f_=new Map;function p_(i,t){let e=Xt[t];if(e===void 0){const n=f_.get(t);if(n!==void 0)e=Xt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Qa(e)}const m_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function uh(i){return i.replace(m_,g_)}function g_(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function dh(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function __(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===su?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===ru?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Gn&&(t="SHADOWMAP_TYPE_VSM"),t}function v_(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Xs:case Zs:t="ENVMAP_TYPE_CUBE";break;case Oo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function x_(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Zs:t="ENVMAP_MODE_REFRACTION";break}return t}function y_(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ou:t="ENVMAP_BLENDING_MULTIPLY";break;case mf:t="ENVMAP_BLENDING_MIX";break;case gf:t="ENVMAP_BLENDING_ADD";break}return t}function M_(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function S_(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=__(e),l=v_(e),h=x_(e),u=y_(e),d=M_(e),f=l_(e),g=h_(r),_=s.createProgram();let p,m,w=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(fr).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(fr).join(`
`),m.length>0&&(m+=`
`)):(p=[dh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fr).join(`
`),m=[dh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==yi?"#define TONE_MAPPING":"",e.toneMapping!==yi?Xt.tonemapping_pars_fragment:"",e.toneMapping!==yi?c_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Xt.colorspace_pars_fragment,a_("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(fr).join(`
`)),o=Qa(o),o=lh(o,e),o=hh(o,e),a=Qa(a),a=lh(a,e),a=hh(a,e),o=uh(o),a=uh(a),e.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===Rl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Rl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const v=w+p+o,E=w+m+a,B=ah(s,s.VERTEX_SHADER,v),T=ah(s,s.FRAGMENT_SHADER,E);s.attachShader(_,B),s.attachShader(_,T),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function b(A){if(i.debug.checkShaderErrors){const W=s.getProgramInfoLog(_).trim(),P=s.getShaderInfoLog(B).trim(),U=s.getShaderInfoLog(T).trim();let q=!0,V=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,B,T);else{const tt=ch(s,B,"vertex"),$=ch(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+W+`
`+tt+`
`+$)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(P===""||U==="")&&(V=!1);V&&(A.diagnostics={runnable:q,programLog:W,vertexShader:{log:P,prefix:p},fragmentShader:{log:U,prefix:m}})}s.deleteShader(B),s.deleteShader(T),D=new vo(s,_),S=u_(s,_)}let D;this.getUniforms=function(){return D===void 0&&b(this),D};let S;this.getAttributes=function(){return S===void 0&&b(this),S};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=s.getProgramParameter(_,i_)),x},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=s_++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=B,this.fragmentShader=T,this}let E_=0;class w_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new b_(t),e.set(t,n)),n}}class b_{constructor(t){this.id=E_++,this.code=t,this.usedTimes=0}}function T_(i,t,e,n,s,r,o){const a=new wc,c=new w_,l=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return l.add(S),S===0?"uv":`uv${S}`}function p(S,x,A,W,P){const U=W.fog,q=P.geometry,V=S.isMeshStandardMaterial?W.environment:null,tt=(S.isMeshStandardMaterial?e:t).get(S.envMap||V),$=tt&&tt.mapping===Oo?tt.image.height:null,rt=g[S.type];S.precision!==null&&(f=s.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));const it=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,lt=it!==void 0?it.length:0;let Z=0;q.morphAttributes.position!==void 0&&(Z=1),q.morphAttributes.normal!==void 0&&(Z=2),q.morphAttributes.color!==void 0&&(Z=3);let st,L,G,Q;if(rt){const ee=An[rt];st=ee.vertexShader,L=ee.fragmentShader}else st=S.vertexShader,L=S.fragmentShader,c.update(S),G=c.getVertexShaderID(S),Q=c.getFragmentShaderID(S);const et=i.getRenderTarget(),ft=P.isInstancedMesh===!0,pt=P.isBatchedMesh===!0,Et=!!S.map,N=!!S.matcap,Bt=!!tt,Wt=!!S.aoMap,ie=!!S.lightMap,At=!!S.bumpMap,Jt=!!S.normalMap,zt=!!S.displacementMap,Ht=!!S.emissiveMap,ge=!!S.metalnessMap,C=!!S.roughnessMap,y=S.anisotropy>0,j=S.clearcoat>0,ot=S.dispersion>0,at=S.iridescence>0,ct=S.sheen>0,Rt=S.transmission>0,mt=y&&!!S.anisotropyMap,gt=j&&!!S.clearcoatMap,Gt=j&&!!S.clearcoatNormalMap,ut=j&&!!S.clearcoatRoughnessMap,bt=at&&!!S.iridescenceMap,kt=at&&!!S.iridescenceThicknessMap,Nt=ct&&!!S.sheenColorMap,vt=ct&&!!S.sheenRoughnessMap,Vt=!!S.specularMap,Kt=!!S.specularColorMap,_e=!!S.specularIntensityMap,F=Rt&&!!S.transmissionMap,z=Rt&&!!S.thicknessMap,k=!!S.gradientMap,X=!!S.alphaMap,nt=S.alphaTest>0,Mt=!!S.alphaHash,Ut=!!S.extensions;let te=yi;S.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(te=i.toneMapping);const ue={shaderID:rt,shaderType:S.type,shaderName:S.name,vertexShader:st,fragmentShader:L,defines:S.defines,customVertexShaderID:G,customFragmentShaderID:Q,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:pt,batchingColor:pt&&P._colorsTexture!==null,instancing:ft,instancingColor:ft&&P.instanceColor!==null,instancingMorph:ft&&P.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:et===null?i.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:Ri,alphaToCoverage:!!S.alphaToCoverage,map:Et,matcap:N,envMap:Bt,envMapMode:Bt&&tt.mapping,envMapCubeUVHeight:$,aoMap:Wt,lightMap:ie,bumpMap:At,normalMap:Jt,displacementMap:d&&zt,emissiveMap:Ht,normalMapObjectSpace:Jt&&S.normalMapType===Of,normalMapTangentSpace:Jt&&S.normalMapType===mu,metalnessMap:ge,roughnessMap:C,anisotropy:y,anisotropyMap:mt,clearcoat:j,clearcoatMap:gt,clearcoatNormalMap:Gt,clearcoatRoughnessMap:ut,dispersion:ot,iridescence:at,iridescenceMap:bt,iridescenceThicknessMap:kt,sheen:ct,sheenColorMap:Nt,sheenRoughnessMap:vt,specularMap:Vt,specularColorMap:Kt,specularIntensityMap:_e,transmission:Rt,transmissionMap:F,thicknessMap:z,gradientMap:k,opaque:S.transparent===!1&&S.blending===Ds&&S.alphaToCoverage===!1,alphaMap:X,alphaTest:nt,alphaHash:Mt,combine:S.combine,mapUv:Et&&_(S.map.channel),aoMapUv:Wt&&_(S.aoMap.channel),lightMapUv:ie&&_(S.lightMap.channel),bumpMapUv:At&&_(S.bumpMap.channel),normalMapUv:Jt&&_(S.normalMap.channel),displacementMapUv:zt&&_(S.displacementMap.channel),emissiveMapUv:Ht&&_(S.emissiveMap.channel),metalnessMapUv:ge&&_(S.metalnessMap.channel),roughnessMapUv:C&&_(S.roughnessMap.channel),anisotropyMapUv:mt&&_(S.anisotropyMap.channel),clearcoatMapUv:gt&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:Gt&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ut&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:bt&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:kt&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:Nt&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:vt&&_(S.sheenRoughnessMap.channel),specularMapUv:Vt&&_(S.specularMap.channel),specularColorMapUv:Kt&&_(S.specularColorMap.channel),specularIntensityMapUv:_e&&_(S.specularIntensityMap.channel),transmissionMapUv:F&&_(S.transmissionMap.channel),thicknessMapUv:z&&_(S.thicknessMap.channel),alphaMapUv:X&&_(S.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(Jt||y),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!q.attributes.uv&&(Et||X),fog:!!U,useFog:S.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:P.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:lt,morphTextureStride:Z,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&A.length>0,shadowMapType:i.shadowMap.type,toneMapping:te,decodeVideoTexture:Et&&S.map.isVideoTexture===!0&&ae.getTransfer(S.map.colorSpace)===pe,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===nn,flipSided:S.side===Je,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Ut&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Ut&&S.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return ue.vertexUv1s=l.has(1),ue.vertexUv2s=l.has(2),ue.vertexUv3s=l.has(3),l.clear(),ue}function m(S){const x=[];if(S.shaderID?x.push(S.shaderID):(x.push(S.customVertexShaderID),x.push(S.customFragmentShaderID)),S.defines!==void 0)for(const A in S.defines)x.push(A),x.push(S.defines[A]);return S.isRawShaderMaterial===!1&&(w(x,S),v(x,S),x.push(i.outputColorSpace)),x.push(S.customProgramCacheKey),x.join()}function w(S,x){S.push(x.precision),S.push(x.outputColorSpace),S.push(x.envMapMode),S.push(x.envMapCubeUVHeight),S.push(x.mapUv),S.push(x.alphaMapUv),S.push(x.lightMapUv),S.push(x.aoMapUv),S.push(x.bumpMapUv),S.push(x.normalMapUv),S.push(x.displacementMapUv),S.push(x.emissiveMapUv),S.push(x.metalnessMapUv),S.push(x.roughnessMapUv),S.push(x.anisotropyMapUv),S.push(x.clearcoatMapUv),S.push(x.clearcoatNormalMapUv),S.push(x.clearcoatRoughnessMapUv),S.push(x.iridescenceMapUv),S.push(x.iridescenceThicknessMapUv),S.push(x.sheenColorMapUv),S.push(x.sheenRoughnessMapUv),S.push(x.specularMapUv),S.push(x.specularColorMapUv),S.push(x.specularIntensityMapUv),S.push(x.transmissionMapUv),S.push(x.thicknessMapUv),S.push(x.combine),S.push(x.fogExp2),S.push(x.sizeAttenuation),S.push(x.morphTargetsCount),S.push(x.morphAttributeCount),S.push(x.numDirLights),S.push(x.numPointLights),S.push(x.numSpotLights),S.push(x.numSpotLightMaps),S.push(x.numHemiLights),S.push(x.numRectAreaLights),S.push(x.numDirLightShadows),S.push(x.numPointLightShadows),S.push(x.numSpotLightShadows),S.push(x.numSpotLightShadowsWithMaps),S.push(x.numLightProbes),S.push(x.shadowMapType),S.push(x.toneMapping),S.push(x.numClippingPlanes),S.push(x.numClipIntersection),S.push(x.depthPacking)}function v(S,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),x.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.skinning&&a.enable(4),x.morphTargets&&a.enable(5),x.morphNormals&&a.enable(6),x.morphColors&&a.enable(7),x.premultipliedAlpha&&a.enable(8),x.shadowMapEnabled&&a.enable(9),x.doubleSided&&a.enable(10),x.flipSided&&a.enable(11),x.useDepthPacking&&a.enable(12),x.dithering&&a.enable(13),x.transmission&&a.enable(14),x.sheen&&a.enable(15),x.opaque&&a.enable(16),x.pointsUvs&&a.enable(17),x.decodeVideoTexture&&a.enable(18),x.alphaToCoverage&&a.enable(19),S.push(a.mask)}function E(S){const x=g[S.type];let A;if(x){const W=An[x];A=hp.clone(W.uniforms)}else A=S.uniforms;return A}function B(S,x){let A;for(let W=0,P=h.length;W<P;W++){const U=h[W];if(U.cacheKey===x){A=U,++A.usedTimes;break}}return A===void 0&&(A=new S_(i,x,S,r),h.push(A)),A}function T(S){if(--S.usedTimes===0){const x=h.indexOf(S);h[x]=h[h.length-1],h.pop(),S.destroy()}}function b(S){c.remove(S)}function D(){c.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:E,acquireProgram:B,releaseProgram:T,releaseShaderCache:b,programs:h,dispose:D}}function A_(){let i=new WeakMap;function t(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function e(r){i.delete(r)}function n(r,o,a){i.get(r)[o]=a}function s(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:s}}function R_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function fh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function ph(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,d,f,g,_,p){let m=i[t];return m===void 0?(m={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:_,group:p},i[t]=m):(m.id=u.id,m.object=u,m.geometry=d,m.material=f,m.groupOrder=g,m.renderOrder=u.renderOrder,m.z=_,m.group=p),t++,m}function a(u,d,f,g,_,p){const m=o(u,d,f,g,_,p);f.transmission>0?n.push(m):f.transparent===!0?s.push(m):e.push(m)}function c(u,d,f,g,_,p){const m=o(u,d,f,g,_,p);f.transmission>0?n.unshift(m):f.transparent===!0?s.unshift(m):e.unshift(m)}function l(u,d){e.length>1&&e.sort(u||R_),n.length>1&&n.sort(d||fh),s.length>1&&s.sort(d||fh)}function h(){for(let u=t,d=i.length;u<d;u++){const f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function C_(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new ph,i.set(n,[o])):s>=r.length?(o=new ph,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function P_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new jt};break;case"SpotLight":e={position:new I,direction:new I,color:new jt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new jt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new jt,groundColor:new jt};break;case"RectAreaLight":e={color:new jt,position:new I,halfWidth:new I,halfHeight:new I};break}return i[t.id]=e,e}}}function L_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let I_=0;function D_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function N_(i){const t=new P_,e=L_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new I);const s=new I,r=new me,o=new me;function a(l){let h=0,u=0,d=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let f=0,g=0,_=0,p=0,m=0,w=0,v=0,E=0,B=0,T=0,b=0;l.sort(D_);for(let S=0,x=l.length;S<x;S++){const A=l[S],W=A.color,P=A.intensity,U=A.distance,q=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)h+=W.r*P,u+=W.g*P,d+=W.b*P;else if(A.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(A.sh.coefficients[V],P);b++}else if(A.isDirectionalLight){const V=t.get(A);if(V.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){const tt=A.shadow,$=e.get(A);$.shadowBias=tt.bias,$.shadowNormalBias=tt.normalBias,$.shadowRadius=tt.radius,$.shadowMapSize=tt.mapSize,n.directionalShadow[f]=$,n.directionalShadowMap[f]=q,n.directionalShadowMatrix[f]=A.shadow.matrix,w++}n.directional[f]=V,f++}else if(A.isSpotLight){const V=t.get(A);V.position.setFromMatrixPosition(A.matrixWorld),V.color.copy(W).multiplyScalar(P),V.distance=U,V.coneCos=Math.cos(A.angle),V.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),V.decay=A.decay,n.spot[_]=V;const tt=A.shadow;if(A.map&&(n.spotLightMap[B]=A.map,B++,tt.updateMatrices(A),A.castShadow&&T++),n.spotLightMatrix[_]=tt.matrix,A.castShadow){const $=e.get(A);$.shadowBias=tt.bias,$.shadowNormalBias=tt.normalBias,$.shadowRadius=tt.radius,$.shadowMapSize=tt.mapSize,n.spotShadow[_]=$,n.spotShadowMap[_]=q,E++}_++}else if(A.isRectAreaLight){const V=t.get(A);V.color.copy(W).multiplyScalar(P),V.halfWidth.set(A.width*.5,0,0),V.halfHeight.set(0,A.height*.5,0),n.rectArea[p]=V,p++}else if(A.isPointLight){const V=t.get(A);if(V.color.copy(A.color).multiplyScalar(A.intensity),V.distance=A.distance,V.decay=A.decay,A.castShadow){const tt=A.shadow,$=e.get(A);$.shadowBias=tt.bias,$.shadowNormalBias=tt.normalBias,$.shadowRadius=tt.radius,$.shadowMapSize=tt.mapSize,$.shadowCameraNear=tt.camera.near,$.shadowCameraFar=tt.camera.far,n.pointShadow[g]=$,n.pointShadowMap[g]=q,n.pointShadowMatrix[g]=A.shadow.matrix,v++}n.point[g]=V,g++}else if(A.isHemisphereLight){const V=t.get(A);V.skyColor.copy(A.color).multiplyScalar(P),V.groundColor.copy(A.groundColor).multiplyScalar(P),n.hemi[m]=V,m++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=_t.LTC_FLOAT_1,n.rectAreaLTC2=_t.LTC_FLOAT_2):(n.rectAreaLTC1=_t.LTC_HALF_1,n.rectAreaLTC2=_t.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const D=n.hash;(D.directionalLength!==f||D.pointLength!==g||D.spotLength!==_||D.rectAreaLength!==p||D.hemiLength!==m||D.numDirectionalShadows!==w||D.numPointShadows!==v||D.numSpotShadows!==E||D.numSpotMaps!==B||D.numLightProbes!==b)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=p,n.point.length=g,n.hemi.length=m,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=E,n.spotShadowMap.length=E,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=E+B-T,n.spotLightMap.length=B,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=b,D.directionalLength=f,D.pointLength=g,D.spotLength=_,D.rectAreaLength=p,D.hemiLength=m,D.numDirectionalShadows=w,D.numPointShadows=v,D.numSpotShadows=E,D.numSpotMaps=B,D.numLightProbes=b,n.version=I_++)}function c(l,h){let u=0,d=0,f=0,g=0,_=0;const p=h.matrixWorldInverse;for(let m=0,w=l.length;m<w;m++){const v=l[m];if(v.isDirectionalLight){const E=n.directional[u];E.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(p),u++}else if(v.isSpotLight){const E=n.spot[f];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(p),E.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(p),f++}else if(v.isRectAreaLight){const E=n.rectArea[g];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(p),o.identity(),r.copy(v.matrixWorld),r.premultiply(p),o.extractRotation(r),E.halfWidth.set(v.width*.5,0,0),E.halfHeight.set(0,v.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),g++}else if(v.isPointLight){const E=n.point[d];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(p),d++}else if(v.isHemisphereLight){const E=n.hemi[_];E.direction.setFromMatrixPosition(v.matrixWorld),E.direction.transformDirection(p),_++}}}return{setup:a,setupView:c,state:n}}function mh(i){const t=new N_(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function U_(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new mh(i),t.set(s,[a])):r>=o.length?(a=new mh(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class O_ extends Qs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Nf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class F_ extends Qs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const B_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,z_=`uniform sampler2D shadow_pass;
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
}`;function k_(i,t,e){let n=new bc;const s=new xt,r=new xt,o=new xe,a=new O_({depthPacking:Uf}),c=new F_,l={},h=e.maxTextureSize,u={[Ei]:Je,[Je]:Ei,[nn]:nn},d=new bi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new xt},radius:{value:4}},vertexShader:B_,fragmentShader:z_}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new sn;g.setAttribute("position",new Mn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new St(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=su;let m=this.type;this.render=function(T,b,D){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;const S=i.getRenderTarget(),x=i.getActiveCubeFace(),A=i.getActiveMipmapLevel(),W=i.state;W.setBlending(xi),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const P=m!==Gn&&this.type===Gn,U=m===Gn&&this.type!==Gn;for(let q=0,V=T.length;q<V;q++){const tt=T[q],$=tt.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",tt,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;s.copy($.mapSize);const rt=$.getFrameExtents();if(s.multiply(rt),r.copy($.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/rt.x),s.x=r.x*rt.x,$.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/rt.y),s.y=r.y*rt.y,$.mapSize.y=r.y)),$.map===null||P===!0||U===!0){const lt=this.type!==Gn?{minFilter:dn,magFilter:dn}:{};$.map!==null&&$.map.dispose(),$.map=new Ki(s.x,s.y,lt),$.map.texture.name=tt.name+".shadowMap",$.camera.updateProjectionMatrix()}i.setRenderTarget($.map),i.clear();const it=$.getViewportCount();for(let lt=0;lt<it;lt++){const Z=$.getViewport(lt);o.set(r.x*Z.x,r.y*Z.y,r.x*Z.z,r.y*Z.w),W.viewport(o),$.updateMatrices(tt,lt),n=$.getFrustum(),E(b,D,$.camera,tt,this.type)}$.isPointLightShadow!==!0&&this.type===Gn&&w($,D),$.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(S,x,A)};function w(T,b){const D=t.update(_);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Ki(s.x,s.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(b,null,D,d,_,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(b,null,D,f,_,null)}function v(T,b,D,S){let x=null;const A=D.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(A!==void 0)x=A;else if(x=D.isPointLight===!0?c:a,i.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const W=x.uuid,P=b.uuid;let U=l[W];U===void 0&&(U={},l[W]=U);let q=U[P];q===void 0&&(q=x.clone(),U[P]=q,b.addEventListener("dispose",B)),x=q}if(x.visible=b.visible,x.wireframe=b.wireframe,S===Gn?x.side=b.shadowSide!==null?b.shadowSide:b.side:x.side=b.shadowSide!==null?b.shadowSide:u[b.side],x.alphaMap=b.alphaMap,x.alphaTest=b.alphaTest,x.map=b.map,x.clipShadows=b.clipShadows,x.clippingPlanes=b.clippingPlanes,x.clipIntersection=b.clipIntersection,x.displacementMap=b.displacementMap,x.displacementScale=b.displacementScale,x.displacementBias=b.displacementBias,x.wireframeLinewidth=b.wireframeLinewidth,x.linewidth=b.linewidth,D.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const W=i.properties.get(x);W.light=D}return x}function E(T,b,D,S,x){if(T.visible===!1)return;if(T.layers.test(b.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&x===Gn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,T.matrixWorld);const P=t.update(T),U=T.material;if(Array.isArray(U)){const q=P.groups;for(let V=0,tt=q.length;V<tt;V++){const $=q[V],rt=U[$.materialIndex];if(rt&&rt.visible){const it=v(T,rt,S,x);T.onBeforeShadow(i,T,b,D,P,it,$),i.renderBufferDirect(D,null,P,it,T,$),T.onAfterShadow(i,T,b,D,P,it,$)}}}else if(U.visible){const q=v(T,U,S,x);T.onBeforeShadow(i,T,b,D,P,q,null),i.renderBufferDirect(D,null,P,q,T,null),T.onAfterShadow(i,T,b,D,P,q,null)}}const W=T.children;for(let P=0,U=W.length;P<U;P++)E(W[P],b,D,S,x)}function B(T){T.target.removeEventListener("dispose",B);for(const D in l){const S=l[D],x=T.target.uuid;x in S&&(S[x].dispose(),delete S[x])}}}function H_(i){function t(){let F=!1;const z=new xe;let k=null;const X=new xe(0,0,0,0);return{setMask:function(nt){k!==nt&&!F&&(i.colorMask(nt,nt,nt,nt),k=nt)},setLocked:function(nt){F=nt},setClear:function(nt,Mt,Ut,te,ue){ue===!0&&(nt*=te,Mt*=te,Ut*=te),z.set(nt,Mt,Ut,te),X.equals(z)===!1&&(i.clearColor(nt,Mt,Ut,te),X.copy(z))},reset:function(){F=!1,k=null,X.set(-1,0,0,0)}}}function e(){let F=!1,z=null,k=null,X=null;return{setTest:function(nt){nt?Q(i.DEPTH_TEST):et(i.DEPTH_TEST)},setMask:function(nt){z!==nt&&!F&&(i.depthMask(nt),z=nt)},setFunc:function(nt){if(k!==nt){switch(nt){case cf:i.depthFunc(i.NEVER);break;case lf:i.depthFunc(i.ALWAYS);break;case hf:i.depthFunc(i.LESS);break;case yo:i.depthFunc(i.LEQUAL);break;case uf:i.depthFunc(i.EQUAL);break;case df:i.depthFunc(i.GEQUAL);break;case ff:i.depthFunc(i.GREATER);break;case pf:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}k=nt}},setLocked:function(nt){F=nt},setClear:function(nt){X!==nt&&(i.clearDepth(nt),X=nt)},reset:function(){F=!1,z=null,k=null,X=null}}}function n(){let F=!1,z=null,k=null,X=null,nt=null,Mt=null,Ut=null,te=null,ue=null;return{setTest:function(ee){F||(ee?Q(i.STENCIL_TEST):et(i.STENCIL_TEST))},setMask:function(ee){z!==ee&&!F&&(i.stencilMask(ee),z=ee)},setFunc:function(ee,ke,Me){(k!==ee||X!==ke||nt!==Me)&&(i.stencilFunc(ee,ke,Me),k=ee,X=ke,nt=Me)},setOp:function(ee,ke,Me){(Mt!==ee||Ut!==ke||te!==Me)&&(i.stencilOp(ee,ke,Me),Mt=ee,Ut=ke,te=Me)},setLocked:function(ee){F=ee},setClear:function(ee){ue!==ee&&(i.clearStencil(ee),ue=ee)},reset:function(){F=!1,z=null,k=null,X=null,nt=null,Mt=null,Ut=null,te=null,ue=null}}}const s=new t,r=new e,o=new n,a=new WeakMap,c=new WeakMap;let l={},h={},u=new WeakMap,d=[],f=null,g=!1,_=null,p=null,m=null,w=null,v=null,E=null,B=null,T=new jt(0,0,0),b=0,D=!1,S=null,x=null,A=null,W=null,P=null;const U=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,V=0;const tt=i.getParameter(i.VERSION);tt.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(tt)[1]),q=V>=1):tt.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(tt)[1]),q=V>=2);let $=null,rt={};const it=i.getParameter(i.SCISSOR_BOX),lt=i.getParameter(i.VIEWPORT),Z=new xe().fromArray(it),st=new xe().fromArray(lt);function L(F,z,k,X){const nt=new Uint8Array(4),Mt=i.createTexture();i.bindTexture(F,Mt),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ut=0;Ut<k;Ut++)F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY?i.texImage3D(z,0,i.RGBA,1,1,X,0,i.RGBA,i.UNSIGNED_BYTE,nt):i.texImage2D(z+Ut,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,nt);return Mt}const G={};G[i.TEXTURE_2D]=L(i.TEXTURE_2D,i.TEXTURE_2D,1),G[i.TEXTURE_CUBE_MAP]=L(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),G[i.TEXTURE_2D_ARRAY]=L(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),G[i.TEXTURE_3D]=L(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),Q(i.DEPTH_TEST),r.setFunc(yo),At(!1),Jt(Jc),Q(i.CULL_FACE),Wt(xi);function Q(F){l[F]!==!0&&(i.enable(F),l[F]=!0)}function et(F){l[F]!==!1&&(i.disable(F),l[F]=!1)}function ft(F,z){return h[F]!==z?(i.bindFramebuffer(F,z),h[F]=z,F===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=z),F===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=z),!0):!1}function pt(F,z){let k=d,X=!1;if(F){k=u.get(z),k===void 0&&(k=[],u.set(z,k));const nt=F.textures;if(k.length!==nt.length||k[0]!==i.COLOR_ATTACHMENT0){for(let Mt=0,Ut=nt.length;Mt<Ut;Mt++)k[Mt]=i.COLOR_ATTACHMENT0+Mt;k.length=nt.length,X=!0}}else k[0]!==i.BACK&&(k[0]=i.BACK,X=!0);X&&i.drawBuffers(k)}function Et(F){return f!==F?(i.useProgram(F),f=F,!0):!1}const N={[Bi]:i.FUNC_ADD,[Wd]:i.FUNC_SUBTRACT,[Xd]:i.FUNC_REVERSE_SUBTRACT};N[Zd]=i.MIN,N[Yd]=i.MAX;const Bt={[qd]:i.ZERO,[$d]:i.ONE,[Kd]:i.SRC_COLOR,[Xa]:i.SRC_ALPHA,[nf]:i.SRC_ALPHA_SATURATE,[tf]:i.DST_COLOR,[jd]:i.DST_ALPHA,[Jd]:i.ONE_MINUS_SRC_COLOR,[Za]:i.ONE_MINUS_SRC_ALPHA,[ef]:i.ONE_MINUS_DST_COLOR,[Qd]:i.ONE_MINUS_DST_ALPHA,[sf]:i.CONSTANT_COLOR,[rf]:i.ONE_MINUS_CONSTANT_COLOR,[of]:i.CONSTANT_ALPHA,[af]:i.ONE_MINUS_CONSTANT_ALPHA};function Wt(F,z,k,X,nt,Mt,Ut,te,ue,ee){if(F===xi){g===!0&&(et(i.BLEND),g=!1);return}if(g===!1&&(Q(i.BLEND),g=!0),F!==Vd){if(F!==_||ee!==D){if((p!==Bi||v!==Bi)&&(i.blendEquation(i.FUNC_ADD),p=Bi,v=Bi),ee)switch(F){case Ds:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case jc:i.blendFunc(i.ONE,i.ONE);break;case Qc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case tl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case Ds:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case jc:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Qc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case tl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}m=null,w=null,E=null,B=null,T.set(0,0,0),b=0,_=F,D=ee}return}nt=nt||z,Mt=Mt||k,Ut=Ut||X,(z!==p||nt!==v)&&(i.blendEquationSeparate(N[z],N[nt]),p=z,v=nt),(k!==m||X!==w||Mt!==E||Ut!==B)&&(i.blendFuncSeparate(Bt[k],Bt[X],Bt[Mt],Bt[Ut]),m=k,w=X,E=Mt,B=Ut),(te.equals(T)===!1||ue!==b)&&(i.blendColor(te.r,te.g,te.b,ue),T.copy(te),b=ue),_=F,D=!1}function ie(F,z){F.side===nn?et(i.CULL_FACE):Q(i.CULL_FACE);let k=F.side===Je;z&&(k=!k),At(k),F.blending===Ds&&F.transparent===!1?Wt(xi):Wt(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),r.setFunc(F.depthFunc),r.setTest(F.depthTest),r.setMask(F.depthWrite),s.setMask(F.colorWrite);const X=F.stencilWrite;o.setTest(X),X&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Ht(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?Q(i.SAMPLE_ALPHA_TO_COVERAGE):et(i.SAMPLE_ALPHA_TO_COVERAGE)}function At(F){S!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),S=F)}function Jt(F){F!==Hd?(Q(i.CULL_FACE),F!==x&&(F===Jc?i.cullFace(i.BACK):F===Gd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):et(i.CULL_FACE),x=F}function zt(F){F!==A&&(q&&i.lineWidth(F),A=F)}function Ht(F,z,k){F?(Q(i.POLYGON_OFFSET_FILL),(W!==z||P!==k)&&(i.polygonOffset(z,k),W=z,P=k)):et(i.POLYGON_OFFSET_FILL)}function ge(F){F?Q(i.SCISSOR_TEST):et(i.SCISSOR_TEST)}function C(F){F===void 0&&(F=i.TEXTURE0+U-1),$!==F&&(i.activeTexture(F),$=F)}function y(F,z,k){k===void 0&&($===null?k=i.TEXTURE0+U-1:k=$);let X=rt[k];X===void 0&&(X={type:void 0,texture:void 0},rt[k]=X),(X.type!==F||X.texture!==z)&&($!==k&&(i.activeTexture(k),$=k),i.bindTexture(F,z||G[F]),X.type=F,X.texture=z)}function j(){const F=rt[$];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function ot(){try{i.compressedTexImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function at(){try{i.compressedTexImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ct(){try{i.texSubImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Rt(){try{i.texSubImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function mt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function gt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Gt(){try{i.texStorage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ut(){try{i.texStorage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function bt(){try{i.texImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function kt(){try{i.texImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Nt(F){Z.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),Z.copy(F))}function vt(F){st.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),st.copy(F))}function Vt(F,z){let k=c.get(z);k===void 0&&(k=new WeakMap,c.set(z,k));let X=k.get(F);X===void 0&&(X=i.getUniformBlockIndex(z,F.name),k.set(F,X))}function Kt(F,z){const X=c.get(z).get(F);a.get(z)!==X&&(i.uniformBlockBinding(z,X,F.__bindingPointIndex),a.set(z,X))}function _e(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),l={},$=null,rt={},h={},u=new WeakMap,d=[],f=null,g=!1,_=null,p=null,m=null,w=null,v=null,E=null,B=null,T=new jt(0,0,0),b=0,D=!1,S=null,x=null,A=null,W=null,P=null,Z.set(0,0,i.canvas.width,i.canvas.height),st.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:Q,disable:et,bindFramebuffer:ft,drawBuffers:pt,useProgram:Et,setBlending:Wt,setMaterial:ie,setFlipSided:At,setCullFace:Jt,setLineWidth:zt,setPolygonOffset:Ht,setScissorTest:ge,activeTexture:C,bindTexture:y,unbindTexture:j,compressedTexImage2D:ot,compressedTexImage3D:at,texImage2D:bt,texImage3D:kt,updateUBOMapping:Vt,uniformBlockBinding:Kt,texStorage2D:Gt,texStorage3D:ut,texSubImage2D:ct,texSubImage3D:Rt,compressedTexSubImage2D:mt,compressedTexSubImage3D:gt,scissor:Nt,viewport:vt,reset:_e}}function G_(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new xt,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,y){return f?new OffscreenCanvas(C,y):To("canvas")}function _(C,y,j){let ot=1;const at=ge(C);if((at.width>j||at.height>j)&&(ot=j/Math.max(at.width,at.height)),ot<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const ct=Math.floor(ot*at.width),Rt=Math.floor(ot*at.height);u===void 0&&(u=g(ct,Rt));const mt=y?g(ct,Rt):u;return mt.width=ct,mt.height=Rt,mt.getContext("2d").drawImage(C,0,0,ct,Rt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+at.width+"x"+at.height+") to ("+ct+"x"+Rt+")."),mt}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+at.width+"x"+at.height+")."),C;return C}function p(C){return C.generateMipmaps&&C.minFilter!==dn&&C.minFilter!==xn}function m(C){i.generateMipmap(C)}function w(C,y,j,ot,at=!1){if(C!==null){if(i[C]!==void 0)return i[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ct=y;if(y===i.RED&&(j===i.FLOAT&&(ct=i.R32F),j===i.HALF_FLOAT&&(ct=i.R16F),j===i.UNSIGNED_BYTE&&(ct=i.R8)),y===i.RED_INTEGER&&(j===i.UNSIGNED_BYTE&&(ct=i.R8UI),j===i.UNSIGNED_SHORT&&(ct=i.R16UI),j===i.UNSIGNED_INT&&(ct=i.R32UI),j===i.BYTE&&(ct=i.R8I),j===i.SHORT&&(ct=i.R16I),j===i.INT&&(ct=i.R32I)),y===i.RG&&(j===i.FLOAT&&(ct=i.RG32F),j===i.HALF_FLOAT&&(ct=i.RG16F),j===i.UNSIGNED_BYTE&&(ct=i.RG8)),y===i.RG_INTEGER&&(j===i.UNSIGNED_BYTE&&(ct=i.RG8UI),j===i.UNSIGNED_SHORT&&(ct=i.RG16UI),j===i.UNSIGNED_INT&&(ct=i.RG32UI),j===i.BYTE&&(ct=i.RG8I),j===i.SHORT&&(ct=i.RG16I),j===i.INT&&(ct=i.RG32I)),y===i.RGB&&j===i.UNSIGNED_INT_5_9_9_9_REV&&(ct=i.RGB9_E5),y===i.RGBA){const Rt=at?So:ae.getTransfer(ot);j===i.FLOAT&&(ct=i.RGBA32F),j===i.HALF_FLOAT&&(ct=i.RGBA16F),j===i.UNSIGNED_BYTE&&(ct=Rt===pe?i.SRGB8_ALPHA8:i.RGBA8),j===i.UNSIGNED_SHORT_4_4_4_4&&(ct=i.RGBA4),j===i.UNSIGNED_SHORT_5_5_5_1&&(ct=i.RGB5_A1)}return(ct===i.R16F||ct===i.R32F||ct===i.RG16F||ct===i.RG32F||ct===i.RGBA16F||ct===i.RGBA32F)&&t.get("EXT_color_buffer_float"),ct}function v(C,y){let j;return C?y===null||y===Ys||y===qs?j=i.DEPTH24_STENCIL8:y===vi?j=i.DEPTH32F_STENCIL8:y===Mo&&(j=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Ys||y===qs?j=i.DEPTH_COMPONENT24:y===vi?j=i.DEPTH_COMPONENT32F:y===Mo&&(j=i.DEPTH_COMPONENT16),j}function E(C,y){return p(C)===!0||C.isFramebufferTexture&&C.minFilter!==dn&&C.minFilter!==xn?Math.log2(Math.max(y.width,y.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?y.mipmaps.length:1}function B(C){const y=C.target;y.removeEventListener("dispose",B),b(y),y.isVideoTexture&&h.delete(y)}function T(C){const y=C.target;y.removeEventListener("dispose",T),S(y)}function b(C){const y=n.get(C);if(y.__webglInit===void 0)return;const j=C.source,ot=d.get(j);if(ot){const at=ot[y.__cacheKey];at.usedTimes--,at.usedTimes===0&&D(C),Object.keys(ot).length===0&&d.delete(j)}n.remove(C)}function D(C){const y=n.get(C);i.deleteTexture(y.__webglTexture);const j=C.source,ot=d.get(j);delete ot[y.__cacheKey],o.memory.textures--}function S(C){const y=n.get(C);if(C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let ot=0;ot<6;ot++){if(Array.isArray(y.__webglFramebuffer[ot]))for(let at=0;at<y.__webglFramebuffer[ot].length;at++)i.deleteFramebuffer(y.__webglFramebuffer[ot][at]);else i.deleteFramebuffer(y.__webglFramebuffer[ot]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[ot])}else{if(Array.isArray(y.__webglFramebuffer))for(let ot=0;ot<y.__webglFramebuffer.length;ot++)i.deleteFramebuffer(y.__webglFramebuffer[ot]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let ot=0;ot<y.__webglColorRenderbuffer.length;ot++)y.__webglColorRenderbuffer[ot]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[ot]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const j=C.textures;for(let ot=0,at=j.length;ot<at;ot++){const ct=n.get(j[ot]);ct.__webglTexture&&(i.deleteTexture(ct.__webglTexture),o.memory.textures--),n.remove(j[ot])}n.remove(C)}let x=0;function A(){x=0}function W(){const C=x;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),x+=1,C}function P(C){const y=[];return y.push(C.wrapS),y.push(C.wrapT),y.push(C.wrapR||0),y.push(C.magFilter),y.push(C.minFilter),y.push(C.anisotropy),y.push(C.internalFormat),y.push(C.format),y.push(C.type),y.push(C.generateMipmaps),y.push(C.premultiplyAlpha),y.push(C.flipY),y.push(C.unpackAlignment),y.push(C.colorSpace),y.join()}function U(C,y){const j=n.get(C);if(C.isVideoTexture&&zt(C),C.isRenderTargetTexture===!1&&C.version>0&&j.__version!==C.version){const ot=C.image;if(ot===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ot.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{st(j,C,y);return}}e.bindTexture(i.TEXTURE_2D,j.__webglTexture,i.TEXTURE0+y)}function q(C,y){const j=n.get(C);if(C.version>0&&j.__version!==C.version){st(j,C,y);return}e.bindTexture(i.TEXTURE_2D_ARRAY,j.__webglTexture,i.TEXTURE0+y)}function V(C,y){const j=n.get(C);if(C.version>0&&j.__version!==C.version){st(j,C,y);return}e.bindTexture(i.TEXTURE_3D,j.__webglTexture,i.TEXTURE0+y)}function tt(C,y){const j=n.get(C);if(C.version>0&&j.__version!==C.version){L(j,C,y);return}e.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture,i.TEXTURE0+y)}const $={[$a]:i.REPEAT,[Hi]:i.CLAMP_TO_EDGE,[Ka]:i.MIRRORED_REPEAT},rt={[dn]:i.NEAREST,[Ef]:i.NEAREST_MIPMAP_NEAREST,[zr]:i.NEAREST_MIPMAP_LINEAR,[xn]:i.LINEAR,[jo]:i.LINEAR_MIPMAP_NEAREST,[Gi]:i.LINEAR_MIPMAP_LINEAR},it={[Ff]:i.NEVER,[Vf]:i.ALWAYS,[Bf]:i.LESS,[gu]:i.LEQUAL,[zf]:i.EQUAL,[Gf]:i.GEQUAL,[kf]:i.GREATER,[Hf]:i.NOTEQUAL};function lt(C,y){if(y.type===vi&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===xn||y.magFilter===jo||y.magFilter===zr||y.magFilter===Gi||y.minFilter===xn||y.minFilter===jo||y.minFilter===zr||y.minFilter===Gi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,$[y.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,$[y.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,$[y.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,rt[y.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,rt[y.minFilter]),y.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,it[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===dn||y.minFilter!==zr&&y.minFilter!==Gi||y.type===vi&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const j=t.get("EXT_texture_filter_anisotropic");i.texParameterf(C,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function Z(C,y){let j=!1;C.__webglInit===void 0&&(C.__webglInit=!0,y.addEventListener("dispose",B));const ot=y.source;let at=d.get(ot);at===void 0&&(at={},d.set(ot,at));const ct=P(y);if(ct!==C.__cacheKey){at[ct]===void 0&&(at[ct]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,j=!0),at[ct].usedTimes++;const Rt=at[C.__cacheKey];Rt!==void 0&&(at[C.__cacheKey].usedTimes--,Rt.usedTimes===0&&D(y)),C.__cacheKey=ct,C.__webglTexture=at[ct].texture}return j}function st(C,y,j){let ot=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(ot=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(ot=i.TEXTURE_3D);const at=Z(C,y),ct=y.source;e.bindTexture(ot,C.__webglTexture,i.TEXTURE0+j);const Rt=n.get(ct);if(ct.version!==Rt.__version||at===!0){e.activeTexture(i.TEXTURE0+j);const mt=ae.getPrimaries(ae.workingColorSpace),gt=y.colorSpace===pi?null:ae.getPrimaries(y.colorSpace),Gt=y.colorSpace===pi||mt===gt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Gt);let ut=_(y.image,!1,s.maxTextureSize);ut=Ht(y,ut);const bt=r.convert(y.format,y.colorSpace),kt=r.convert(y.type);let Nt=w(y.internalFormat,bt,kt,y.colorSpace,y.isVideoTexture);lt(ot,y);let vt;const Vt=y.mipmaps,Kt=y.isVideoTexture!==!0,_e=Rt.__version===void 0||at===!0,F=ct.dataReady,z=E(y,ut);if(y.isDepthTexture)Nt=v(y.format===$s,y.type),_e&&(Kt?e.texStorage2D(i.TEXTURE_2D,1,Nt,ut.width,ut.height):e.texImage2D(i.TEXTURE_2D,0,Nt,ut.width,ut.height,0,bt,kt,null));else if(y.isDataTexture)if(Vt.length>0){Kt&&_e&&e.texStorage2D(i.TEXTURE_2D,z,Nt,Vt[0].width,Vt[0].height);for(let k=0,X=Vt.length;k<X;k++)vt=Vt[k],Kt?F&&e.texSubImage2D(i.TEXTURE_2D,k,0,0,vt.width,vt.height,bt,kt,vt.data):e.texImage2D(i.TEXTURE_2D,k,Nt,vt.width,vt.height,0,bt,kt,vt.data);y.generateMipmaps=!1}else Kt?(_e&&e.texStorage2D(i.TEXTURE_2D,z,Nt,ut.width,ut.height),F&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ut.width,ut.height,bt,kt,ut.data)):e.texImage2D(i.TEXTURE_2D,0,Nt,ut.width,ut.height,0,bt,kt,ut.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Kt&&_e&&e.texStorage3D(i.TEXTURE_2D_ARRAY,z,Nt,Vt[0].width,Vt[0].height,ut.depth);for(let k=0,X=Vt.length;k<X;k++)if(vt=Vt[k],y.format!==Cn)if(bt!==null)if(Kt){if(F)if(y.layerUpdates.size>0){for(const nt of y.layerUpdates){const Mt=vt.width*vt.height;e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,k,0,0,nt,vt.width,vt.height,1,bt,vt.data.slice(Mt*nt,Mt*(nt+1)),0,0)}y.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,k,0,0,0,vt.width,vt.height,ut.depth,bt,vt.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,k,Nt,vt.width,vt.height,ut.depth,0,vt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Kt?F&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,k,0,0,0,vt.width,vt.height,ut.depth,bt,kt,vt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,k,Nt,vt.width,vt.height,ut.depth,0,bt,kt,vt.data)}else{Kt&&_e&&e.texStorage2D(i.TEXTURE_2D,z,Nt,Vt[0].width,Vt[0].height);for(let k=0,X=Vt.length;k<X;k++)vt=Vt[k],y.format!==Cn?bt!==null?Kt?F&&e.compressedTexSubImage2D(i.TEXTURE_2D,k,0,0,vt.width,vt.height,bt,vt.data):e.compressedTexImage2D(i.TEXTURE_2D,k,Nt,vt.width,vt.height,0,vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Kt?F&&e.texSubImage2D(i.TEXTURE_2D,k,0,0,vt.width,vt.height,bt,kt,vt.data):e.texImage2D(i.TEXTURE_2D,k,Nt,vt.width,vt.height,0,bt,kt,vt.data)}else if(y.isDataArrayTexture)if(Kt){if(_e&&e.texStorage3D(i.TEXTURE_2D_ARRAY,z,Nt,ut.width,ut.height,ut.depth),F)if(y.layerUpdates.size>0){let k;switch(kt){case i.UNSIGNED_BYTE:switch(bt){case i.ALPHA:k=1;break;case i.LUMINANCE:k=1;break;case i.LUMINANCE_ALPHA:k=2;break;case i.RGB:k=3;break;case i.RGBA:k=4;break;default:throw new Error(`Unknown texel size for format ${bt}.`)}break;case i.UNSIGNED_SHORT_4_4_4_4:case i.UNSIGNED_SHORT_5_5_5_1:case i.UNSIGNED_SHORT_5_6_5:k=1;break;default:throw new Error(`Unknown texel size for type ${kt}.`)}const X=ut.width*ut.height*k;for(const nt of y.layerUpdates)e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,nt,ut.width,ut.height,1,bt,kt,ut.data.slice(X*nt,X*(nt+1)));y.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ut.width,ut.height,ut.depth,bt,kt,ut.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Nt,ut.width,ut.height,ut.depth,0,bt,kt,ut.data);else if(y.isData3DTexture)Kt?(_e&&e.texStorage3D(i.TEXTURE_3D,z,Nt,ut.width,ut.height,ut.depth),F&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ut.width,ut.height,ut.depth,bt,kt,ut.data)):e.texImage3D(i.TEXTURE_3D,0,Nt,ut.width,ut.height,ut.depth,0,bt,kt,ut.data);else if(y.isFramebufferTexture){if(_e)if(Kt)e.texStorage2D(i.TEXTURE_2D,z,Nt,ut.width,ut.height);else{let k=ut.width,X=ut.height;for(let nt=0;nt<z;nt++)e.texImage2D(i.TEXTURE_2D,nt,Nt,k,X,0,bt,kt,null),k>>=1,X>>=1}}else if(Vt.length>0){if(Kt&&_e){const k=ge(Vt[0]);e.texStorage2D(i.TEXTURE_2D,z,Nt,k.width,k.height)}for(let k=0,X=Vt.length;k<X;k++)vt=Vt[k],Kt?F&&e.texSubImage2D(i.TEXTURE_2D,k,0,0,bt,kt,vt):e.texImage2D(i.TEXTURE_2D,k,Nt,bt,kt,vt);y.generateMipmaps=!1}else if(Kt){if(_e){const k=ge(ut);e.texStorage2D(i.TEXTURE_2D,z,Nt,k.width,k.height)}F&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,bt,kt,ut)}else e.texImage2D(i.TEXTURE_2D,0,Nt,bt,kt,ut);p(y)&&m(ot),Rt.__version=ct.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function L(C,y,j){if(y.image.length!==6)return;const ot=Z(C,y),at=y.source;e.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+j);const ct=n.get(at);if(at.version!==ct.__version||ot===!0){e.activeTexture(i.TEXTURE0+j);const Rt=ae.getPrimaries(ae.workingColorSpace),mt=y.colorSpace===pi?null:ae.getPrimaries(y.colorSpace),gt=y.colorSpace===pi||Rt===mt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,gt);const Gt=y.isCompressedTexture||y.image[0].isCompressedTexture,ut=y.image[0]&&y.image[0].isDataTexture,bt=[];for(let X=0;X<6;X++)!Gt&&!ut?bt[X]=_(y.image[X],!0,s.maxCubemapSize):bt[X]=ut?y.image[X].image:y.image[X],bt[X]=Ht(y,bt[X]);const kt=bt[0],Nt=r.convert(y.format,y.colorSpace),vt=r.convert(y.type),Vt=w(y.internalFormat,Nt,vt,y.colorSpace),Kt=y.isVideoTexture!==!0,_e=ct.__version===void 0||ot===!0,F=at.dataReady;let z=E(y,kt);lt(i.TEXTURE_CUBE_MAP,y);let k;if(Gt){Kt&&_e&&e.texStorage2D(i.TEXTURE_CUBE_MAP,z,Vt,kt.width,kt.height);for(let X=0;X<6;X++){k=bt[X].mipmaps;for(let nt=0;nt<k.length;nt++){const Mt=k[nt];y.format!==Cn?Nt!==null?Kt?F&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,nt,0,0,Mt.width,Mt.height,Nt,Mt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,nt,Vt,Mt.width,Mt.height,0,Mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Kt?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,nt,0,0,Mt.width,Mt.height,Nt,vt,Mt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,nt,Vt,Mt.width,Mt.height,0,Nt,vt,Mt.data)}}}else{if(k=y.mipmaps,Kt&&_e){k.length>0&&z++;const X=ge(bt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,z,Vt,X.width,X.height)}for(let X=0;X<6;X++)if(ut){Kt?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,bt[X].width,bt[X].height,Nt,vt,bt[X].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,Vt,bt[X].width,bt[X].height,0,Nt,vt,bt[X].data);for(let nt=0;nt<k.length;nt++){const Ut=k[nt].image[X].image;Kt?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,nt+1,0,0,Ut.width,Ut.height,Nt,vt,Ut.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,nt+1,Vt,Ut.width,Ut.height,0,Nt,vt,Ut.data)}}else{Kt?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,Nt,vt,bt[X]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,Vt,Nt,vt,bt[X]);for(let nt=0;nt<k.length;nt++){const Mt=k[nt];Kt?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,nt+1,0,0,Nt,vt,Mt.image[X]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,nt+1,Vt,Nt,vt,Mt.image[X])}}}p(y)&&m(i.TEXTURE_CUBE_MAP),ct.__version=at.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function G(C,y,j,ot,at,ct){const Rt=r.convert(j.format,j.colorSpace),mt=r.convert(j.type),gt=w(j.internalFormat,Rt,mt,j.colorSpace);if(!n.get(y).__hasExternalTextures){const ut=Math.max(1,y.width>>ct),bt=Math.max(1,y.height>>ct);at===i.TEXTURE_3D||at===i.TEXTURE_2D_ARRAY?e.texImage3D(at,ct,gt,ut,bt,y.depth,0,Rt,mt,null):e.texImage2D(at,ct,gt,ut,bt,0,Rt,mt,null)}e.bindFramebuffer(i.FRAMEBUFFER,C),Jt(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ot,at,n.get(j).__webglTexture,0,At(y)):(at===i.TEXTURE_2D||at>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&at<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ot,at,n.get(j).__webglTexture,ct),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Q(C,y,j){if(i.bindRenderbuffer(i.RENDERBUFFER,C),y.depthBuffer){const ot=y.depthTexture,at=ot&&ot.isDepthTexture?ot.type:null,ct=v(y.stencilBuffer,at),Rt=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,mt=At(y);Jt(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,mt,ct,y.width,y.height):j?i.renderbufferStorageMultisample(i.RENDERBUFFER,mt,ct,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,ct,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Rt,i.RENDERBUFFER,C)}else{const ot=y.textures;for(let at=0;at<ot.length;at++){const ct=ot[at],Rt=r.convert(ct.format,ct.colorSpace),mt=r.convert(ct.type),gt=w(ct.internalFormat,Rt,mt,ct.colorSpace),Gt=At(y);j&&Jt(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Gt,gt,y.width,y.height):Jt(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Gt,gt,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,gt,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function et(C,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,C),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),U(y.depthTexture,0);const ot=n.get(y.depthTexture).__webglTexture,at=At(y);if(y.depthTexture.format===Ns)Jt(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ot,0,at):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ot,0);else if(y.depthTexture.format===$s)Jt(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ot,0,at):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ot,0);else throw new Error("Unknown depthTexture format")}function ft(C){const y=n.get(C),j=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!y.__autoAllocateDepthBuffer){if(j)throw new Error("target.depthTexture not supported in Cube render targets");et(y.__webglFramebuffer,C)}else if(j){y.__webglDepthbuffer=[];for(let ot=0;ot<6;ot++)e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[ot]),y.__webglDepthbuffer[ot]=i.createRenderbuffer(),Q(y.__webglDepthbuffer[ot],C,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer=i.createRenderbuffer(),Q(y.__webglDepthbuffer,C,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function pt(C,y,j){const ot=n.get(C);y!==void 0&&G(ot.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),j!==void 0&&ft(C)}function Et(C){const y=C.texture,j=n.get(C),ot=n.get(y);C.addEventListener("dispose",T);const at=C.textures,ct=C.isWebGLCubeRenderTarget===!0,Rt=at.length>1;if(Rt||(ot.__webglTexture===void 0&&(ot.__webglTexture=i.createTexture()),ot.__version=y.version,o.memory.textures++),ct){j.__webglFramebuffer=[];for(let mt=0;mt<6;mt++)if(y.mipmaps&&y.mipmaps.length>0){j.__webglFramebuffer[mt]=[];for(let gt=0;gt<y.mipmaps.length;gt++)j.__webglFramebuffer[mt][gt]=i.createFramebuffer()}else j.__webglFramebuffer[mt]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){j.__webglFramebuffer=[];for(let mt=0;mt<y.mipmaps.length;mt++)j.__webglFramebuffer[mt]=i.createFramebuffer()}else j.__webglFramebuffer=i.createFramebuffer();if(Rt)for(let mt=0,gt=at.length;mt<gt;mt++){const Gt=n.get(at[mt]);Gt.__webglTexture===void 0&&(Gt.__webglTexture=i.createTexture(),o.memory.textures++)}if(C.samples>0&&Jt(C)===!1){j.__webglMultisampledFramebuffer=i.createFramebuffer(),j.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let mt=0;mt<at.length;mt++){const gt=at[mt];j.__webglColorRenderbuffer[mt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,j.__webglColorRenderbuffer[mt]);const Gt=r.convert(gt.format,gt.colorSpace),ut=r.convert(gt.type),bt=w(gt.internalFormat,Gt,ut,gt.colorSpace,C.isXRRenderTarget===!0),kt=At(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,kt,bt,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.RENDERBUFFER,j.__webglColorRenderbuffer[mt])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(j.__webglDepthRenderbuffer=i.createRenderbuffer(),Q(j.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ct){e.bindTexture(i.TEXTURE_CUBE_MAP,ot.__webglTexture),lt(i.TEXTURE_CUBE_MAP,y);for(let mt=0;mt<6;mt++)if(y.mipmaps&&y.mipmaps.length>0)for(let gt=0;gt<y.mipmaps.length;gt++)G(j.__webglFramebuffer[mt][gt],C,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,gt);else G(j.__webglFramebuffer[mt],C,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0);p(y)&&m(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Rt){for(let mt=0,gt=at.length;mt<gt;mt++){const Gt=at[mt],ut=n.get(Gt);e.bindTexture(i.TEXTURE_2D,ut.__webglTexture),lt(i.TEXTURE_2D,Gt),G(j.__webglFramebuffer,C,Gt,i.COLOR_ATTACHMENT0+mt,i.TEXTURE_2D,0),p(Gt)&&m(i.TEXTURE_2D)}e.unbindTexture()}else{let mt=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(mt=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(mt,ot.__webglTexture),lt(mt,y),y.mipmaps&&y.mipmaps.length>0)for(let gt=0;gt<y.mipmaps.length;gt++)G(j.__webglFramebuffer[gt],C,y,i.COLOR_ATTACHMENT0,mt,gt);else G(j.__webglFramebuffer,C,y,i.COLOR_ATTACHMENT0,mt,0);p(y)&&m(mt),e.unbindTexture()}C.depthBuffer&&ft(C)}function N(C){const y=C.textures;for(let j=0,ot=y.length;j<ot;j++){const at=y[j];if(p(at)){const ct=C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Rt=n.get(at).__webglTexture;e.bindTexture(ct,Rt),m(ct),e.unbindTexture()}}}const Bt=[],Wt=[];function ie(C){if(C.samples>0){if(Jt(C)===!1){const y=C.textures,j=C.width,ot=C.height;let at=i.COLOR_BUFFER_BIT;const ct=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Rt=n.get(C),mt=y.length>1;if(mt)for(let gt=0;gt<y.length;gt++)e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Rt.__webglFramebuffer);for(let gt=0;gt<y.length;gt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(at|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(at|=i.STENCIL_BUFFER_BIT)),mt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Rt.__webglColorRenderbuffer[gt]);const Gt=n.get(y[gt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Gt,0)}i.blitFramebuffer(0,0,j,ot,0,0,j,ot,at,i.NEAREST),c===!0&&(Bt.length=0,Wt.length=0,Bt.push(i.COLOR_ATTACHMENT0+gt),C.depthBuffer&&C.resolveDepthBuffer===!1&&(Bt.push(ct),Wt.push(ct),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Wt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Bt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),mt)for(let gt=0;gt<y.length;gt++){e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.RENDERBUFFER,Rt.__webglColorRenderbuffer[gt]);const Gt=n.get(y[gt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.TEXTURE_2D,Gt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Rt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&c){const y=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function At(C){return Math.min(s.maxSamples,C.samples)}function Jt(C){const y=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function zt(C){const y=o.render.frame;h.get(C)!==y&&(h.set(C,y),C.update())}function Ht(C,y){const j=C.colorSpace,ot=C.format,at=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||j!==Ri&&j!==pi&&(ae.getTransfer(j)===pe?(ot!==Cn||at!==wi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",j)),y}function ge(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(l.width=C.naturalWidth||C.width,l.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(l.width=C.displayWidth,l.height=C.displayHeight):(l.width=C.width,l.height=C.height),l}this.allocateTextureUnit=W,this.resetTextureUnits=A,this.setTexture2D=U,this.setTexture2DArray=q,this.setTexture3D=V,this.setTextureCube=tt,this.rebindTextures=pt,this.setupRenderTarget=Et,this.updateRenderTargetMipmap=N,this.updateMultisampleRenderTarget=ie,this.setupDepthRenderbuffer=ft,this.setupFrameBufferTexture=G,this.useMultisampledRTT=Jt}function V_(i,t){function e(n,s=pi){let r;const o=ae.getTransfer(s);if(n===wi)return i.UNSIGNED_BYTE;if(n===hu)return i.UNSIGNED_SHORT_4_4_4_4;if(n===uu)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Tf)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===wf)return i.BYTE;if(n===bf)return i.SHORT;if(n===Mo)return i.UNSIGNED_SHORT;if(n===lu)return i.INT;if(n===Ys)return i.UNSIGNED_INT;if(n===vi)return i.FLOAT;if(n===Fo)return i.HALF_FLOAT;if(n===Af)return i.ALPHA;if(n===Rf)return i.RGB;if(n===Cn)return i.RGBA;if(n===Cf)return i.LUMINANCE;if(n===Pf)return i.LUMINANCE_ALPHA;if(n===Ns)return i.DEPTH_COMPONENT;if(n===$s)return i.DEPTH_STENCIL;if(n===Lf)return i.RED;if(n===du)return i.RED_INTEGER;if(n===If)return i.RG;if(n===fu)return i.RG_INTEGER;if(n===pu)return i.RGBA_INTEGER;if(n===Qo||n===ta||n===ea||n===na)if(o===pe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Qo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ta)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ea)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===na)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Qo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ta)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ea)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===na)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===el||n===nl||n===il||n===sl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===el)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===nl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===il)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===sl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===rl||n===ol||n===al)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===rl||n===ol)return o===pe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===al)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===cl||n===ll||n===hl||n===ul||n===dl||n===fl||n===pl||n===ml||n===gl||n===_l||n===vl||n===xl||n===yl||n===Ml)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===cl)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ll)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===hl)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ul)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===dl)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===fl)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===pl)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ml)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===gl)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===_l)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===vl)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===xl)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===yl)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ml)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ia||n===Sl||n===El)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===ia)return o===pe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Sl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===El)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Df||n===wl||n===bl||n===Tl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===ia)return r.COMPRESSED_RED_RGTC1_EXT;if(n===wl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===bl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Tl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===qs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class W_ extends en{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Qn extends Fe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const X_={type:"move"};class Pa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const _ of t.hand.values()){const p=e.getJointPose(_,n),m=this._getHandJoint(l,_);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(X_)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Qn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Z_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Y_=`
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

}`;class q_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new qe,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new bi({vertexShader:Z_,fragmentShader:Y_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new St(new ti(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}}class $_ extends js{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,g=null;const _=new q_,p=e.getContextAttributes();let m=null,w=null;const v=[],E=[],B=new xt;let T=null;const b=new en;b.layers.enable(1),b.viewport=new xe;const D=new en;D.layers.enable(2),D.viewport=new xe;const S=[b,D],x=new W_;x.layers.enable(1),x.layers.enable(2);let A=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(L){let G=v[L];return G===void 0&&(G=new Pa,v[L]=G),G.getTargetRaySpace()},this.getControllerGrip=function(L){let G=v[L];return G===void 0&&(G=new Pa,v[L]=G),G.getGripSpace()},this.getHand=function(L){let G=v[L];return G===void 0&&(G=new Pa,v[L]=G),G.getHandSpace()};function P(L){const G=E.indexOf(L.inputSource);if(G===-1)return;const Q=v[G];Q!==void 0&&(Q.update(L.inputSource,L.frame,l||o),Q.dispatchEvent({type:L.type,data:L.inputSource}))}function U(){s.removeEventListener("select",P),s.removeEventListener("selectstart",P),s.removeEventListener("selectend",P),s.removeEventListener("squeeze",P),s.removeEventListener("squeezestart",P),s.removeEventListener("squeezeend",P),s.removeEventListener("end",U),s.removeEventListener("inputsourceschange",q);for(let L=0;L<v.length;L++){const G=E[L];G!==null&&(E[L]=null,v[L].disconnect(G))}A=null,W=null,_.reset(),t.setRenderTarget(m),f=null,d=null,u=null,s=null,w=null,st.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(B.width,B.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(L){r=L,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(L){a=L,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(L){l=L},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(L){if(s=L,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",P),s.addEventListener("selectstart",P),s.addEventListener("selectend",P),s.addEventListener("squeeze",P),s.addEventListener("squeezestart",P),s.addEventListener("squeezeend",P),s.addEventListener("end",U),s.addEventListener("inputsourceschange",q),p.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(B),s.renderState.layers===void 0){const G={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,G),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),w=new Ki(f.framebufferWidth,f.framebufferHeight,{format:Cn,type:wi,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let G=null,Q=null,et=null;p.depth&&(et=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,G=p.stencil?$s:Ns,Q=p.stencil?qs:Ys);const ft={colorFormat:e.RGBA8,depthFormat:et,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(ft),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),w=new Ki(d.textureWidth,d.textureHeight,{format:Cn,type:wi,depthTexture:new Cu(d.textureWidth,d.textureHeight,Q,void 0,void 0,void 0,void 0,void 0,void 0,G),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),st.setContext(s),st.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function q(L){for(let G=0;G<L.removed.length;G++){const Q=L.removed[G],et=E.indexOf(Q);et>=0&&(E[et]=null,v[et].disconnect(Q))}for(let G=0;G<L.added.length;G++){const Q=L.added[G];let et=E.indexOf(Q);if(et===-1){for(let pt=0;pt<v.length;pt++)if(pt>=E.length){E.push(Q),et=pt;break}else if(E[pt]===null){E[pt]=Q,et=pt;break}if(et===-1)break}const ft=v[et];ft&&ft.connect(Q)}}const V=new I,tt=new I;function $(L,G,Q){V.setFromMatrixPosition(G.matrixWorld),tt.setFromMatrixPosition(Q.matrixWorld);const et=V.distanceTo(tt),ft=G.projectionMatrix.elements,pt=Q.projectionMatrix.elements,Et=ft[14]/(ft[10]-1),N=ft[14]/(ft[10]+1),Bt=(ft[9]+1)/ft[5],Wt=(ft[9]-1)/ft[5],ie=(ft[8]-1)/ft[0],At=(pt[8]+1)/pt[0],Jt=Et*ie,zt=Et*At,Ht=et/(-ie+At),ge=Ht*-ie;G.matrixWorld.decompose(L.position,L.quaternion,L.scale),L.translateX(ge),L.translateZ(Ht),L.matrixWorld.compose(L.position,L.quaternion,L.scale),L.matrixWorldInverse.copy(L.matrixWorld).invert();const C=Et+Ht,y=N+Ht,j=Jt-ge,ot=zt+(et-ge),at=Bt*N/y*C,ct=Wt*N/y*C;L.projectionMatrix.makePerspective(j,ot,at,ct,C,y),L.projectionMatrixInverse.copy(L.projectionMatrix).invert()}function rt(L,G){G===null?L.matrixWorld.copy(L.matrix):L.matrixWorld.multiplyMatrices(G.matrixWorld,L.matrix),L.matrixWorldInverse.copy(L.matrixWorld).invert()}this.updateCamera=function(L){if(s===null)return;_.texture!==null&&(L.near=_.depthNear,L.far=_.depthFar),x.near=D.near=b.near=L.near,x.far=D.far=b.far=L.far,(A!==x.near||W!==x.far)&&(s.updateRenderState({depthNear:x.near,depthFar:x.far}),A=x.near,W=x.far,b.near=A,b.far=W,D.near=A,D.far=W,b.updateProjectionMatrix(),D.updateProjectionMatrix(),L.updateProjectionMatrix());const G=L.parent,Q=x.cameras;rt(x,G);for(let et=0;et<Q.length;et++)rt(Q[et],G);Q.length===2?$(x,b,D):x.projectionMatrix.copy(b.projectionMatrix),it(L,x,G)};function it(L,G,Q){Q===null?L.matrix.copy(G.matrixWorld):(L.matrix.copy(Q.matrixWorld),L.matrix.invert(),L.matrix.multiply(G.matrixWorld)),L.matrix.decompose(L.position,L.quaternion,L.scale),L.updateMatrixWorld(!0),L.projectionMatrix.copy(G.projectionMatrix),L.projectionMatrixInverse.copy(G.projectionMatrixInverse),L.isPerspectiveCamera&&(L.fov=ja*2*Math.atan(1/L.projectionMatrix.elements[5]),L.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(L){c=L,d!==null&&(d.fixedFoveation=L),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=L)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(x)};let lt=null;function Z(L,G){if(h=G.getViewerPose(l||o),g=G,h!==null){const Q=h.views;f!==null&&(t.setRenderTargetFramebuffer(w,f.framebuffer),t.setRenderTarget(w));let et=!1;Q.length!==x.cameras.length&&(x.cameras.length=0,et=!0);for(let pt=0;pt<Q.length;pt++){const Et=Q[pt];let N=null;if(f!==null)N=f.getViewport(Et);else{const Wt=u.getViewSubImage(d,Et);N=Wt.viewport,pt===0&&(t.setRenderTargetTextures(w,Wt.colorTexture,d.ignoreDepthValues?void 0:Wt.depthStencilTexture),t.setRenderTarget(w))}let Bt=S[pt];Bt===void 0&&(Bt=new en,Bt.layers.enable(pt),Bt.viewport=new xe,S[pt]=Bt),Bt.matrix.fromArray(Et.transform.matrix),Bt.matrix.decompose(Bt.position,Bt.quaternion,Bt.scale),Bt.projectionMatrix.fromArray(Et.projectionMatrix),Bt.projectionMatrixInverse.copy(Bt.projectionMatrix).invert(),Bt.viewport.set(N.x,N.y,N.width,N.height),pt===0&&(x.matrix.copy(Bt.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),et===!0&&x.cameras.push(Bt)}const ft=s.enabledFeatures;if(ft&&ft.includes("depth-sensing")){const pt=u.getDepthInformation(Q[0]);pt&&pt.isValid&&pt.texture&&_.init(t,pt,s.renderState)}}for(let Q=0;Q<v.length;Q++){const et=E[Q],ft=v[Q];et!==null&&ft!==void 0&&ft.update(et,G,l||o)}lt&&lt(L,G),G.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:G}),g=null}const st=new Au;st.setAnimationLoop(Z),this.setAnimationLoop=function(L){lt=L},this.dispose=function(){}}}const Oi=new Pn,K_=new me;function J_(i,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,wu(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,w,v,E){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),u(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m)):m.isMeshStandardMaterial?(r(p,m),d(p,m),m.isMeshPhysicalMaterial&&f(p,m,E)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),_(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?c(p,m,w,v):m.isSpriteMaterial?l(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Je&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Je&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const w=t.get(m),v=w.envMap,E=w.envMapRotation;v&&(p.envMap.value=v,Oi.copy(E),Oi.x*=-1,Oi.y*=-1,Oi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Oi.y*=-1,Oi.z*=-1),p.envMapRotation.value.setFromMatrix4(K_.makeRotationFromEuler(Oi)),p.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function c(p,m,w,v){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*w,p.scale.value=v*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function l(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,w){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Je&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=w.texture,p.transmissionSamplerSize.value.set(w.width,w.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function _(p,m){const w=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(w.matrixWorld),p.nearDistance.value=w.shadow.camera.near,p.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function j_(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(w,v){const E=v.program;n.uniformBlockBinding(w,E)}function l(w,v){let E=s[w.id];E===void 0&&(g(w),E=h(w),s[w.id]=E,w.addEventListener("dispose",p));const B=v.program;n.updateUBOMapping(w,B);const T=t.render.frame;r[w.id]!==T&&(d(w),r[w.id]=T)}function h(w){const v=u();w.__bindingPointIndex=v;const E=i.createBuffer(),B=w.__size,T=w.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,B,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,E),E}function u(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(w){const v=s[w.id],E=w.uniforms,B=w.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let T=0,b=E.length;T<b;T++){const D=Array.isArray(E[T])?E[T]:[E[T]];for(let S=0,x=D.length;S<x;S++){const A=D[S];if(f(A,T,S,B)===!0){const W=A.__offset,P=Array.isArray(A.value)?A.value:[A.value];let U=0;for(let q=0;q<P.length;q++){const V=P[q],tt=_(V);typeof V=="number"||typeof V=="boolean"?(A.__data[0]=V,i.bufferSubData(i.UNIFORM_BUFFER,W+U,A.__data)):V.isMatrix3?(A.__data[0]=V.elements[0],A.__data[1]=V.elements[1],A.__data[2]=V.elements[2],A.__data[3]=0,A.__data[4]=V.elements[3],A.__data[5]=V.elements[4],A.__data[6]=V.elements[5],A.__data[7]=0,A.__data[8]=V.elements[6],A.__data[9]=V.elements[7],A.__data[10]=V.elements[8],A.__data[11]=0):(V.toArray(A.__data,U),U+=tt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,W,A.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(w,v,E,B){const T=w.value,b=v+"_"+E;if(B[b]===void 0)return typeof T=="number"||typeof T=="boolean"?B[b]=T:B[b]=T.clone(),!0;{const D=B[b];if(typeof T=="number"||typeof T=="boolean"){if(D!==T)return B[b]=T,!0}else if(D.equals(T)===!1)return D.copy(T),!0}return!1}function g(w){const v=w.uniforms;let E=0;const B=16;for(let b=0,D=v.length;b<D;b++){const S=Array.isArray(v[b])?v[b]:[v[b]];for(let x=0,A=S.length;x<A;x++){const W=S[x],P=Array.isArray(W.value)?W.value:[W.value];for(let U=0,q=P.length;U<q;U++){const V=P[U],tt=_(V),$=E%B;$!==0&&B-$<tt.boundary&&(E+=B-$),W.__data=new Float32Array(tt.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=E,E+=tt.storage}}}const T=E%B;return T>0&&(E+=B-T),w.__size=E,w.__cache={},this}function _(w){const v={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(v.boundary=4,v.storage=4):w.isVector2?(v.boundary=8,v.storage=8):w.isVector3||w.isColor?(v.boundary=16,v.storage=12):w.isVector4?(v.boundary=16,v.storage=16):w.isMatrix3?(v.boundary=48,v.storage=48):w.isMatrix4?(v.boundary=64,v.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),v}function p(w){const v=w.target;v.removeEventListener("dispose",p);const E=o.indexOf(v.__bindingPointIndex);o.splice(E,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function m(){for(const w in s)i.deleteBuffer(s[w]);o=[],s={},r={}}return{bind:c,update:l,dispose:m}}class Q_{constructor(t={}){const{canvas:e=Xf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const f=new Uint32Array(4),g=new Int32Array(4);let _=null,p=null;const m=[],w=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Tn,this.toneMapping=yi,this.toneMappingExposure=1;const v=this;let E=!1,B=0,T=0,b=null,D=-1,S=null;const x=new xe,A=new xe;let W=null;const P=new jt(0);let U=0,q=e.width,V=e.height,tt=1,$=null,rt=null;const it=new xe(0,0,q,V),lt=new xe(0,0,q,V);let Z=!1;const st=new bc;let L=!1,G=!1;const Q=new me,et=new I,ft={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let pt=!1;function Et(){return b===null?tt:1}let N=n;function Bt(M,H){return e.getContext(M,H)}try{const M={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${yc}`),e.addEventListener("webglcontextlost",z,!1),e.addEventListener("webglcontextrestored",k,!1),e.addEventListener("webglcontextcreationerror",X,!1),N===null){const H="webgl2";if(N=Bt(H,M),N===null)throw Bt(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Wt,ie,At,Jt,zt,Ht,ge,C,y,j,ot,at,ct,Rt,mt,gt,Gt,ut,bt,kt,Nt,vt,Vt,Kt;function _e(){Wt=new ag(N),Wt.init(),vt=new V_(N,Wt),ie=new eg(N,Wt,t,vt),At=new H_(N),Jt=new hg(N),zt=new A_,Ht=new G_(N,Wt,At,zt,ie,vt,Jt),ge=new ig(v),C=new og(v),y=new _p(N),Vt=new Q0(N,y),j=new cg(N,y,Jt,Vt),ot=new dg(N,j,y,Jt),bt=new ug(N,ie,Ht),gt=new ng(zt),at=new T_(v,ge,C,Wt,ie,Vt,gt),ct=new J_(v,zt),Rt=new C_,mt=new U_(Wt),ut=new j0(v,ge,C,At,ot,d,c),Gt=new k_(v,ot,ie),Kt=new j_(N,Jt,ie,At),kt=new tg(N,Wt,Jt),Nt=new lg(N,Wt,Jt),Jt.programs=at.programs,v.capabilities=ie,v.extensions=Wt,v.properties=zt,v.renderLists=Rt,v.shadowMap=Gt,v.state=At,v.info=Jt}_e();const F=new $_(v,N);this.xr=F,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const M=Wt.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Wt.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return tt},this.setPixelRatio=function(M){M!==void 0&&(tt=M,this.setSize(q,V,!1))},this.getSize=function(M){return M.set(q,V)},this.setSize=function(M,H,K=!0){if(F.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=M,V=H,e.width=Math.floor(M*tt),e.height=Math.floor(H*tt),K===!0&&(e.style.width=M+"px",e.style.height=H+"px"),this.setViewport(0,0,M,H)},this.getDrawingBufferSize=function(M){return M.set(q*tt,V*tt).floor()},this.setDrawingBufferSize=function(M,H,K){q=M,V=H,tt=K,e.width=Math.floor(M*K),e.height=Math.floor(H*K),this.setViewport(0,0,M,H)},this.getCurrentViewport=function(M){return M.copy(x)},this.getViewport=function(M){return M.copy(it)},this.setViewport=function(M,H,K,J){M.isVector4?it.set(M.x,M.y,M.z,M.w):it.set(M,H,K,J),At.viewport(x.copy(it).multiplyScalar(tt).round())},this.getScissor=function(M){return M.copy(lt)},this.setScissor=function(M,H,K,J){M.isVector4?lt.set(M.x,M.y,M.z,M.w):lt.set(M,H,K,J),At.scissor(A.copy(lt).multiplyScalar(tt).round())},this.getScissorTest=function(){return Z},this.setScissorTest=function(M){At.setScissorTest(Z=M)},this.setOpaqueSort=function(M){$=M},this.setTransparentSort=function(M){rt=M},this.getClearColor=function(M){return M.copy(ut.getClearColor())},this.setClearColor=function(){ut.setClearColor.apply(ut,arguments)},this.getClearAlpha=function(){return ut.getClearAlpha()},this.setClearAlpha=function(){ut.setClearAlpha.apply(ut,arguments)},this.clear=function(M=!0,H=!0,K=!0){let J=0;if(M){let Y=!1;if(b!==null){const dt=b.texture.format;Y=dt===pu||dt===fu||dt===du}if(Y){const dt=b.texture.type,yt=dt===wi||dt===Ys||dt===Mo||dt===qs||dt===hu||dt===uu,wt=ut.getClearColor(),Tt=ut.getClearAlpha(),Ot=wt.r,Ft=wt.g,Pt=wt.b;yt?(f[0]=Ot,f[1]=Ft,f[2]=Pt,f[3]=Tt,N.clearBufferuiv(N.COLOR,0,f)):(g[0]=Ot,g[1]=Ft,g[2]=Pt,g[3]=Tt,N.clearBufferiv(N.COLOR,0,g))}else J|=N.COLOR_BUFFER_BIT}H&&(J|=N.DEPTH_BUFFER_BIT),K&&(J|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",z,!1),e.removeEventListener("webglcontextrestored",k,!1),e.removeEventListener("webglcontextcreationerror",X,!1),Rt.dispose(),mt.dispose(),zt.dispose(),ge.dispose(),C.dispose(),ot.dispose(),Vt.dispose(),Kt.dispose(),at.dispose(),F.dispose(),F.removeEventListener("sessionstart",ke),F.removeEventListener("sessionend",Me),Ci.stop()};function z(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function k(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const M=Jt.autoReset,H=Gt.enabled,K=Gt.autoUpdate,J=Gt.needsUpdate,Y=Gt.type;_e(),Jt.autoReset=M,Gt.enabled=H,Gt.autoUpdate=K,Gt.needsUpdate=J,Gt.type=Y}function X(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function nt(M){const H=M.target;H.removeEventListener("dispose",nt),Mt(H)}function Mt(M){Ut(M),zt.remove(M)}function Ut(M){const H=zt.get(M).programs;H!==void 0&&(H.forEach(function(K){at.releaseProgram(K)}),M.isShaderMaterial&&at.releaseShaderCache(M))}this.renderBufferDirect=function(M,H,K,J,Y,dt){H===null&&(H=ft);const yt=Y.isMesh&&Y.matrixWorld.determinant()<0,wt=Ud(M,H,K,J,Y);At.setMaterial(J,yt);let Tt=K.index,Ot=1;if(J.wireframe===!0){if(Tt=j.getWireframeAttribute(K),Tt===void 0)return;Ot=2}const Ft=K.drawRange,Pt=K.attributes.position;let se=Ft.start*Ot,Se=(Ft.start+Ft.count)*Ot;dt!==null&&(se=Math.max(se,dt.start*Ot),Se=Math.min(Se,(dt.start+dt.count)*Ot)),Tt!==null?(se=Math.max(se,0),Se=Math.min(Se,Tt.count)):Pt!=null&&(se=Math.max(se,0),Se=Math.min(Se,Pt.count));const Ee=Se-se;if(Ee<0||Ee===1/0)return;Vt.setup(Y,J,wt,K,Tt);let je,oe=kt;if(Tt!==null&&(je=y.get(Tt),oe=Nt,oe.setIndex(je)),Y.isMesh)J.wireframe===!0?(At.setLineWidth(J.wireframeLinewidth*Et()),oe.setMode(N.LINES)):oe.setMode(N.TRIANGLES);else if(Y.isLine){let Ct=J.linewidth;Ct===void 0&&(Ct=1),At.setLineWidth(Ct*Et()),Y.isLineSegments?oe.setMode(N.LINES):Y.isLineLoop?oe.setMode(N.LINE_LOOP):oe.setMode(N.LINE_STRIP)}else Y.isPoints?oe.setMode(N.POINTS):Y.isSprite&&oe.setMode(N.TRIANGLES);if(Y.isBatchedMesh)Y._multiDrawInstances!==null?oe.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances):oe.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else if(Y.isInstancedMesh)oe.renderInstances(se,Ee,Y.count);else if(K.isInstancedBufferGeometry){const Ct=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Xe=Math.min(K.instanceCount,Ct);oe.renderInstances(se,Ee,Xe)}else oe.render(se,Ee)};function te(M,H,K){M.transparent===!0&&M.side===nn&&M.forceSinglePass===!1?(M.side=Je,M.needsUpdate=!0,Fr(M,H,K),M.side=Ei,M.needsUpdate=!0,Fr(M,H,K),M.side=nn):Fr(M,H,K)}this.compile=function(M,H,K=null){K===null&&(K=M),p=mt.get(K),p.init(H),w.push(p),K.traverseVisible(function(Y){Y.isLight&&Y.layers.test(H.layers)&&(p.pushLight(Y),Y.castShadow&&p.pushShadow(Y))}),M!==K&&M.traverseVisible(function(Y){Y.isLight&&Y.layers.test(H.layers)&&(p.pushLight(Y),Y.castShadow&&p.pushShadow(Y))}),p.setupLights();const J=new Set;return M.traverse(function(Y){const dt=Y.material;if(dt)if(Array.isArray(dt))for(let yt=0;yt<dt.length;yt++){const wt=dt[yt];te(wt,K,Y),J.add(wt)}else te(dt,K,Y),J.add(dt)}),w.pop(),p=null,J},this.compileAsync=function(M,H,K=null){const J=this.compile(M,H,K);return new Promise(Y=>{function dt(){if(J.forEach(function(yt){zt.get(yt).currentProgram.isReady()&&J.delete(yt)}),J.size===0){Y(M);return}setTimeout(dt,10)}Wt.get("KHR_parallel_shader_compile")!==null?dt():setTimeout(dt,10)})};let ue=null;function ee(M){ue&&ue(M)}function ke(){Ci.stop()}function Me(){Ci.start()}const Ci=new Au;Ci.setAnimationLoop(ee),typeof self<"u"&&Ci.setContext(self),this.setAnimationLoop=function(M){ue=M,F.setAnimationLoop(M),M===null?Ci.stop():Ci.start()},F.addEventListener("sessionstart",ke),F.addEventListener("sessionend",Me),this.render=function(M,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),F.enabled===!0&&F.isPresenting===!0&&(F.cameraAutoUpdate===!0&&F.updateCamera(H),H=F.getCamera()),M.isScene===!0&&M.onBeforeRender(v,M,H,b),p=mt.get(M,w.length),p.init(H),w.push(p),Q.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),st.setFromProjectionMatrix(Q),G=this.localClippingEnabled,L=gt.init(this.clippingPlanes,G),_=Rt.get(M,m.length),_.init(),m.push(_),F.enabled===!0&&F.isPresenting===!0){const dt=v.xr.getDepthSensingMesh();dt!==null&&Yo(dt,H,-1/0,v.sortObjects)}Yo(M,H,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort($,rt),pt=F.enabled===!1||F.isPresenting===!1||F.hasDepthSensing()===!1,pt&&ut.addToRenderList(_,M),this.info.render.frame++,L===!0&&gt.beginShadows();const K=p.state.shadowsArray;Gt.render(K,M,H),L===!0&&gt.endShadows(),this.info.autoReset===!0&&this.info.reset();const J=_.opaque,Y=_.transmissive;if(p.setupLights(),H.isArrayCamera){const dt=H.cameras;if(Y.length>0)for(let yt=0,wt=dt.length;yt<wt;yt++){const Tt=dt[yt];Xc(J,Y,M,Tt)}pt&&ut.render(M);for(let yt=0,wt=dt.length;yt<wt;yt++){const Tt=dt[yt];Wc(_,M,Tt,Tt.viewport)}}else Y.length>0&&Xc(J,Y,M,H),pt&&ut.render(M),Wc(_,M,H);b!==null&&(Ht.updateMultisampleRenderTarget(b),Ht.updateRenderTargetMipmap(b)),M.isScene===!0&&M.onAfterRender(v,M,H),Vt.resetDefaultState(),D=-1,S=null,w.pop(),w.length>0?(p=w[w.length-1],L===!0&&gt.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,m.pop(),m.length>0?_=m[m.length-1]:_=null};function Yo(M,H,K,J){if(M.visible===!1)return;if(M.layers.test(H.layers)){if(M.isGroup)K=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(H);else if(M.isLight)p.pushLight(M),M.castShadow&&p.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||st.intersectsSprite(M)){J&&et.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Q);const yt=ot.update(M),wt=M.material;wt.visible&&_.push(M,yt,wt,K,et.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||st.intersectsObject(M))){const yt=ot.update(M),wt=M.material;if(J&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),et.copy(M.boundingSphere.center)):(yt.boundingSphere===null&&yt.computeBoundingSphere(),et.copy(yt.boundingSphere.center)),et.applyMatrix4(M.matrixWorld).applyMatrix4(Q)),Array.isArray(wt)){const Tt=yt.groups;for(let Ot=0,Ft=Tt.length;Ot<Ft;Ot++){const Pt=Tt[Ot],se=wt[Pt.materialIndex];se&&se.visible&&_.push(M,yt,se,K,et.z,Pt)}}else wt.visible&&_.push(M,yt,wt,K,et.z,null)}}const dt=M.children;for(let yt=0,wt=dt.length;yt<wt;yt++)Yo(dt[yt],H,K,J)}function Wc(M,H,K,J){const Y=M.opaque,dt=M.transmissive,yt=M.transparent;p.setupLightsView(K),L===!0&&gt.setGlobalState(v.clippingPlanes,K),J&&At.viewport(x.copy(J)),Y.length>0&&Or(Y,H,K),dt.length>0&&Or(dt,H,K),yt.length>0&&Or(yt,H,K),At.buffers.depth.setTest(!0),At.buffers.depth.setMask(!0),At.buffers.color.setMask(!0),At.setPolygonOffset(!1)}function Xc(M,H,K,J){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[J.id]===void 0&&(p.state.transmissionRenderTarget[J.id]=new Ki(1,1,{generateMipmaps:!0,type:Wt.has("EXT_color_buffer_half_float")||Wt.has("EXT_color_buffer_float")?Fo:wi,minFilter:Gi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ae.workingColorSpace}));const dt=p.state.transmissionRenderTarget[J.id],yt=J.viewport||x;dt.setSize(yt.z,yt.w);const wt=v.getRenderTarget();v.setRenderTarget(dt),v.getClearColor(P),U=v.getClearAlpha(),U<1&&v.setClearColor(16777215,.5),pt?ut.render(K):v.clear();const Tt=v.toneMapping;v.toneMapping=yi;const Ot=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),p.setupLightsView(J),L===!0&&gt.setGlobalState(v.clippingPlanes,J),Or(M,K,J),Ht.updateMultisampleRenderTarget(dt),Ht.updateRenderTargetMipmap(dt),Wt.has("WEBGL_multisampled_render_to_texture")===!1){let Ft=!1;for(let Pt=0,se=H.length;Pt<se;Pt++){const Se=H[Pt],Ee=Se.object,je=Se.geometry,oe=Se.material,Ct=Se.group;if(oe.side===nn&&Ee.layers.test(J.layers)){const Xe=oe.side;oe.side=Je,oe.needsUpdate=!0,Zc(Ee,K,J,je,oe,Ct),oe.side=Xe,oe.needsUpdate=!0,Ft=!0}}Ft===!0&&(Ht.updateMultisampleRenderTarget(dt),Ht.updateRenderTargetMipmap(dt))}v.setRenderTarget(wt),v.setClearColor(P,U),Ot!==void 0&&(J.viewport=Ot),v.toneMapping=Tt}function Or(M,H,K){const J=H.isScene===!0?H.overrideMaterial:null;for(let Y=0,dt=M.length;Y<dt;Y++){const yt=M[Y],wt=yt.object,Tt=yt.geometry,Ot=J===null?yt.material:J,Ft=yt.group;wt.layers.test(K.layers)&&Zc(wt,H,K,Tt,Ot,Ft)}}function Zc(M,H,K,J,Y,dt){M.onBeforeRender(v,H,K,J,Y,dt),M.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),Y.onBeforeRender(v,H,K,J,M,dt),Y.transparent===!0&&Y.side===nn&&Y.forceSinglePass===!1?(Y.side=Je,Y.needsUpdate=!0,v.renderBufferDirect(K,H,J,Y,M,dt),Y.side=Ei,Y.needsUpdate=!0,v.renderBufferDirect(K,H,J,Y,M,dt),Y.side=nn):v.renderBufferDirect(K,H,J,Y,M,dt),M.onAfterRender(v,H,K,J,Y,dt)}function Fr(M,H,K){H.isScene!==!0&&(H=ft);const J=zt.get(M),Y=p.state.lights,dt=p.state.shadowsArray,yt=Y.state.version,wt=at.getParameters(M,Y.state,dt,H,K),Tt=at.getProgramCacheKey(wt);let Ot=J.programs;J.environment=M.isMeshStandardMaterial?H.environment:null,J.fog=H.fog,J.envMap=(M.isMeshStandardMaterial?C:ge).get(M.envMap||J.environment),J.envMapRotation=J.environment!==null&&M.envMap===null?H.environmentRotation:M.envMapRotation,Ot===void 0&&(M.addEventListener("dispose",nt),Ot=new Map,J.programs=Ot);let Ft=Ot.get(Tt);if(Ft!==void 0){if(J.currentProgram===Ft&&J.lightsStateVersion===yt)return qc(M,wt),Ft}else wt.uniforms=at.getUniforms(M),M.onBuild(K,wt,v),M.onBeforeCompile(wt,v),Ft=at.acquireProgram(wt,Tt),Ot.set(Tt,Ft),J.uniforms=wt.uniforms;const Pt=J.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Pt.clippingPlanes=gt.uniform),qc(M,wt),J.needsLights=Fd(M),J.lightsStateVersion=yt,J.needsLights&&(Pt.ambientLightColor.value=Y.state.ambient,Pt.lightProbe.value=Y.state.probe,Pt.directionalLights.value=Y.state.directional,Pt.directionalLightShadows.value=Y.state.directionalShadow,Pt.spotLights.value=Y.state.spot,Pt.spotLightShadows.value=Y.state.spotShadow,Pt.rectAreaLights.value=Y.state.rectArea,Pt.ltc_1.value=Y.state.rectAreaLTC1,Pt.ltc_2.value=Y.state.rectAreaLTC2,Pt.pointLights.value=Y.state.point,Pt.pointLightShadows.value=Y.state.pointShadow,Pt.hemisphereLights.value=Y.state.hemi,Pt.directionalShadowMap.value=Y.state.directionalShadowMap,Pt.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Pt.spotShadowMap.value=Y.state.spotShadowMap,Pt.spotLightMatrix.value=Y.state.spotLightMatrix,Pt.spotLightMap.value=Y.state.spotLightMap,Pt.pointShadowMap.value=Y.state.pointShadowMap,Pt.pointShadowMatrix.value=Y.state.pointShadowMatrix),J.currentProgram=Ft,J.uniformsList=null,Ft}function Yc(M){if(M.uniformsList===null){const H=M.currentProgram.getUniforms();M.uniformsList=vo.seqWithValue(H.seq,M.uniforms)}return M.uniformsList}function qc(M,H){const K=zt.get(M);K.outputColorSpace=H.outputColorSpace,K.batching=H.batching,K.batchingColor=H.batchingColor,K.instancing=H.instancing,K.instancingColor=H.instancingColor,K.instancingMorph=H.instancingMorph,K.skinning=H.skinning,K.morphTargets=H.morphTargets,K.morphNormals=H.morphNormals,K.morphColors=H.morphColors,K.morphTargetsCount=H.morphTargetsCount,K.numClippingPlanes=H.numClippingPlanes,K.numIntersection=H.numClipIntersection,K.vertexAlphas=H.vertexAlphas,K.vertexTangents=H.vertexTangents,K.toneMapping=H.toneMapping}function Ud(M,H,K,J,Y){H.isScene!==!0&&(H=ft),Ht.resetTextureUnits();const dt=H.fog,yt=J.isMeshStandardMaterial?H.environment:null,wt=b===null?v.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:Ri,Tt=(J.isMeshStandardMaterial?C:ge).get(J.envMap||yt),Ot=J.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Ft=!!K.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Pt=!!K.morphAttributes.position,se=!!K.morphAttributes.normal,Se=!!K.morphAttributes.color;let Ee=yi;J.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(Ee=v.toneMapping);const je=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,oe=je!==void 0?je.length:0,Ct=zt.get(J),Xe=p.state.lights;if(L===!0&&(G===!0||M!==S)){const rn=M===S&&J.id===D;gt.setState(J,M,rn)}let ce=!1;J.version===Ct.__version?(Ct.needsLights&&Ct.lightsStateVersion!==Xe.state.version||Ct.outputColorSpace!==wt||Y.isBatchedMesh&&Ct.batching===!1||!Y.isBatchedMesh&&Ct.batching===!0||Y.isBatchedMesh&&Ct.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&Ct.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&Ct.instancing===!1||!Y.isInstancedMesh&&Ct.instancing===!0||Y.isSkinnedMesh&&Ct.skinning===!1||!Y.isSkinnedMesh&&Ct.skinning===!0||Y.isInstancedMesh&&Ct.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Ct.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Ct.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Ct.instancingMorph===!1&&Y.morphTexture!==null||Ct.envMap!==Tt||J.fog===!0&&Ct.fog!==dt||Ct.numClippingPlanes!==void 0&&(Ct.numClippingPlanes!==gt.numPlanes||Ct.numIntersection!==gt.numIntersection)||Ct.vertexAlphas!==Ot||Ct.vertexTangents!==Ft||Ct.morphTargets!==Pt||Ct.morphNormals!==se||Ct.morphColors!==Se||Ct.toneMapping!==Ee||Ct.morphTargetsCount!==oe)&&(ce=!0):(ce=!0,Ct.__version=J.version);let Dn=Ct.currentProgram;ce===!0&&(Dn=Fr(J,H,Y));let Br=!1,Pi=!1,qo=!1;const Ie=Dn.getUniforms(),ei=Ct.uniforms;if(At.useProgram(Dn.program)&&(Br=!0,Pi=!0,qo=!0),J.id!==D&&(D=J.id,Pi=!0),Br||S!==M){Ie.setValue(N,"projectionMatrix",M.projectionMatrix),Ie.setValue(N,"viewMatrix",M.matrixWorldInverse);const rn=Ie.map.cameraPosition;rn!==void 0&&rn.setValue(N,et.setFromMatrixPosition(M.matrixWorld)),ie.logarithmicDepthBuffer&&Ie.setValue(N,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&Ie.setValue(N,"isOrthographic",M.isOrthographicCamera===!0),S!==M&&(S=M,Pi=!0,qo=!0)}if(Y.isSkinnedMesh){Ie.setOptional(N,Y,"bindMatrix"),Ie.setOptional(N,Y,"bindMatrixInverse");const rn=Y.skeleton;rn&&(rn.boneTexture===null&&rn.computeBoneTexture(),Ie.setValue(N,"boneTexture",rn.boneTexture,Ht))}Y.isBatchedMesh&&(Ie.setOptional(N,Y,"batchingTexture"),Ie.setValue(N,"batchingTexture",Y._matricesTexture,Ht),Ie.setOptional(N,Y,"batchingColorTexture"),Y._colorsTexture!==null&&Ie.setValue(N,"batchingColorTexture",Y._colorsTexture,Ht));const $o=K.morphAttributes;if(($o.position!==void 0||$o.normal!==void 0||$o.color!==void 0)&&bt.update(Y,K,Dn),(Pi||Ct.receiveShadow!==Y.receiveShadow)&&(Ct.receiveShadow=Y.receiveShadow,Ie.setValue(N,"receiveShadow",Y.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(ei.envMap.value=Tt,ei.flipEnvMap.value=Tt.isCubeTexture&&Tt.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&H.environment!==null&&(ei.envMapIntensity.value=H.environmentIntensity),Pi&&(Ie.setValue(N,"toneMappingExposure",v.toneMappingExposure),Ct.needsLights&&Od(ei,qo),dt&&J.fog===!0&&ct.refreshFogUniforms(ei,dt),ct.refreshMaterialUniforms(ei,J,tt,V,p.state.transmissionRenderTarget[M.id]),vo.upload(N,Yc(Ct),ei,Ht)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(vo.upload(N,Yc(Ct),ei,Ht),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&Ie.setValue(N,"center",Y.center),Ie.setValue(N,"modelViewMatrix",Y.modelViewMatrix),Ie.setValue(N,"normalMatrix",Y.normalMatrix),Ie.setValue(N,"modelMatrix",Y.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const rn=J.uniformsGroups;for(let Ko=0,Bd=rn.length;Ko<Bd;Ko++){const $c=rn[Ko];Kt.update($c,Dn),Kt.bind($c,Dn)}}return Dn}function Od(M,H){M.ambientLightColor.needsUpdate=H,M.lightProbe.needsUpdate=H,M.directionalLights.needsUpdate=H,M.directionalLightShadows.needsUpdate=H,M.pointLights.needsUpdate=H,M.pointLightShadows.needsUpdate=H,M.spotLights.needsUpdate=H,M.spotLightShadows.needsUpdate=H,M.rectAreaLights.needsUpdate=H,M.hemisphereLights.needsUpdate=H}function Fd(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(M,H,K){zt.get(M.texture).__webglTexture=H,zt.get(M.depthTexture).__webglTexture=K;const J=zt.get(M);J.__hasExternalTextures=!0,J.__autoAllocateDepthBuffer=K===void 0,J.__autoAllocateDepthBuffer||Wt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),J.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(M,H){const K=zt.get(M);K.__webglFramebuffer=H,K.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(M,H=0,K=0){b=M,B=H,T=K;let J=!0,Y=null,dt=!1,yt=!1;if(M){const Tt=zt.get(M);Tt.__useDefaultFramebuffer!==void 0?(At.bindFramebuffer(N.FRAMEBUFFER,null),J=!1):Tt.__webglFramebuffer===void 0?Ht.setupRenderTarget(M):Tt.__hasExternalTextures&&Ht.rebindTextures(M,zt.get(M.texture).__webglTexture,zt.get(M.depthTexture).__webglTexture);const Ot=M.texture;(Ot.isData3DTexture||Ot.isDataArrayTexture||Ot.isCompressedArrayTexture)&&(yt=!0);const Ft=zt.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ft[H])?Y=Ft[H][K]:Y=Ft[H],dt=!0):M.samples>0&&Ht.useMultisampledRTT(M)===!1?Y=zt.get(M).__webglMultisampledFramebuffer:Array.isArray(Ft)?Y=Ft[K]:Y=Ft,x.copy(M.viewport),A.copy(M.scissor),W=M.scissorTest}else x.copy(it).multiplyScalar(tt).floor(),A.copy(lt).multiplyScalar(tt).floor(),W=Z;if(At.bindFramebuffer(N.FRAMEBUFFER,Y)&&J&&At.drawBuffers(M,Y),At.viewport(x),At.scissor(A),At.setScissorTest(W),dt){const Tt=zt.get(M.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+H,Tt.__webglTexture,K)}else if(yt){const Tt=zt.get(M.texture),Ot=H||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,Tt.__webglTexture,K||0,Ot)}D=-1},this.readRenderTargetPixels=function(M,H,K,J,Y,dt,yt){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let wt=zt.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&yt!==void 0&&(wt=wt[yt]),wt){At.bindFramebuffer(N.FRAMEBUFFER,wt);try{const Tt=M.texture,Ot=Tt.format,Ft=Tt.type;if(!ie.textureFormatReadable(Ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ie.textureTypeReadable(Ft)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=M.width-J&&K>=0&&K<=M.height-Y&&N.readPixels(H,K,J,Y,vt.convert(Ot),vt.convert(Ft),dt)}finally{const Tt=b!==null?zt.get(b).__webglFramebuffer:null;At.bindFramebuffer(N.FRAMEBUFFER,Tt)}}},this.readRenderTargetPixelsAsync=async function(M,H,K,J,Y,dt,yt){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let wt=zt.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&yt!==void 0&&(wt=wt[yt]),wt){At.bindFramebuffer(N.FRAMEBUFFER,wt);try{const Tt=M.texture,Ot=Tt.format,Ft=Tt.type;if(!ie.textureFormatReadable(Ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ie.textureTypeReadable(Ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(H>=0&&H<=M.width-J&&K>=0&&K<=M.height-Y){const Pt=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Pt),N.bufferData(N.PIXEL_PACK_BUFFER,dt.byteLength,N.STREAM_READ),N.readPixels(H,K,J,Y,vt.convert(Ot),vt.convert(Ft),0),N.flush();const se=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);await Zf(N,se,4);try{N.bindBuffer(N.PIXEL_PACK_BUFFER,Pt),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,dt)}finally{N.deleteBuffer(Pt),N.deleteSync(se)}return dt}}finally{const Tt=b!==null?zt.get(b).__webglFramebuffer:null;At.bindFramebuffer(N.FRAMEBUFFER,Tt)}}},this.copyFramebufferToTexture=function(M,H=null,K=0){M.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),H=arguments[0]||null,M=arguments[1]);const J=Math.pow(2,-K),Y=Math.floor(M.image.width*J),dt=Math.floor(M.image.height*J),yt=H!==null?H.x:0,wt=H!==null?H.y:0;Ht.setTexture2D(M,0),N.copyTexSubImage2D(N.TEXTURE_2D,K,0,0,yt,wt,Y,dt),At.unbindTexture()},this.copyTextureToTexture=function(M,H,K=null,J=null,Y=0){M.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),J=arguments[0]||null,M=arguments[1],H=arguments[2],Y=arguments[3]||0,K=null);let dt,yt,wt,Tt,Ot,Ft;K!==null?(dt=K.max.x-K.min.x,yt=K.max.y-K.min.y,wt=K.min.x,Tt=K.min.y):(dt=M.image.width,yt=M.image.height,wt=0,Tt=0),J!==null?(Ot=J.x,Ft=J.y):(Ot=0,Ft=0);const Pt=vt.convert(H.format),se=vt.convert(H.type);Ht.setTexture2D(H,0),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,H.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,H.unpackAlignment);const Se=N.getParameter(N.UNPACK_ROW_LENGTH),Ee=N.getParameter(N.UNPACK_IMAGE_HEIGHT),je=N.getParameter(N.UNPACK_SKIP_PIXELS),oe=N.getParameter(N.UNPACK_SKIP_ROWS),Ct=N.getParameter(N.UNPACK_SKIP_IMAGES),Xe=M.isCompressedTexture?M.mipmaps[Y]:M.image;N.pixelStorei(N.UNPACK_ROW_LENGTH,Xe.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Xe.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,wt),N.pixelStorei(N.UNPACK_SKIP_ROWS,Tt),M.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,Y,Ot,Ft,dt,yt,Pt,se,Xe.data):M.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,Y,Ot,Ft,Xe.width,Xe.height,Pt,Xe.data):N.texSubImage2D(N.TEXTURE_2D,Y,Ot,Ft,Pt,se,Xe),N.pixelStorei(N.UNPACK_ROW_LENGTH,Se),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Ee),N.pixelStorei(N.UNPACK_SKIP_PIXELS,je),N.pixelStorei(N.UNPACK_SKIP_ROWS,oe),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Ct),Y===0&&H.generateMipmaps&&N.generateMipmap(N.TEXTURE_2D),At.unbindTexture()},this.copyTextureToTexture3D=function(M,H,K=null,J=null,Y=0){M.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),K=arguments[0]||null,J=arguments[1]||null,M=arguments[2],H=arguments[3],Y=arguments[4]||0);let dt,yt,wt,Tt,Ot,Ft,Pt,se,Se;const Ee=M.isCompressedTexture?M.mipmaps[Y]:M.image;K!==null?(dt=K.max.x-K.min.x,yt=K.max.y-K.min.y,wt=K.max.z-K.min.z,Tt=K.min.x,Ot=K.min.y,Ft=K.min.z):(dt=Ee.width,yt=Ee.height,wt=Ee.depth,Tt=0,Ot=0,Ft=0),J!==null?(Pt=J.x,se=J.y,Se=J.z):(Pt=0,se=0,Se=0);const je=vt.convert(H.format),oe=vt.convert(H.type);let Ct;if(H.isData3DTexture)Ht.setTexture3D(H,0),Ct=N.TEXTURE_3D;else if(H.isDataArrayTexture||H.isCompressedArrayTexture)Ht.setTexture2DArray(H,0),Ct=N.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,H.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,H.unpackAlignment);const Xe=N.getParameter(N.UNPACK_ROW_LENGTH),ce=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Dn=N.getParameter(N.UNPACK_SKIP_PIXELS),Br=N.getParameter(N.UNPACK_SKIP_ROWS),Pi=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,Ee.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Ee.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Tt),N.pixelStorei(N.UNPACK_SKIP_ROWS,Ot),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Ft),M.isDataTexture||M.isData3DTexture?N.texSubImage3D(Ct,Y,Pt,se,Se,dt,yt,wt,je,oe,Ee.data):H.isCompressedArrayTexture?N.compressedTexSubImage3D(Ct,Y,Pt,se,Se,dt,yt,wt,je,Ee.data):N.texSubImage3D(Ct,Y,Pt,se,Se,dt,yt,wt,je,oe,Ee),N.pixelStorei(N.UNPACK_ROW_LENGTH,Xe),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ce),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Dn),N.pixelStorei(N.UNPACK_SKIP_ROWS,Br),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Pi),Y===0&&H.generateMipmaps&&N.generateMipmap(Ct),At.unbindTexture()},this.initRenderTarget=function(M){zt.get(M).__webglFramebuffer===void 0&&Ht.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?Ht.setTextureCube(M,0):M.isData3DTexture?Ht.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?Ht.setTexture2DArray(M,0):Ht.setTexture2D(M,0),At.unbindTexture()},this.resetState=function(){B=0,T=0,b=null,At.reset(),Vt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Mc?"display-p3":"srgb",e.unpackColorSpace=ae.workingColorSpace===Bo?"display-p3":"srgb"}}class Ac{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new jt(t),this.density=e}clone(){return new Ac(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class tv extends Fe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Pn,this.environmentIntensity=1,this.environmentRotation=new Pn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class ev{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Ja,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Mi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return Sc("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Mi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Mi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ze=new I;class Ao{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ze.fromBufferAttribute(this,e),Ze.applyMatrix4(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ze.fromBufferAttribute(this,e),Ze.applyNormalMatrix(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ze.fromBufferAttribute(this,e),Ze.transformDirection(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Rn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=he(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=he(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=he(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=he(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=he(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Rn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Rn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Rn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Rn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=he(e,this.array),n=he(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=he(e,this.array),n=he(n,this.array),s=he(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=he(e,this.array),n=he(n,this.array),s=he(s,this.array),r=he(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Mn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Ao(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Uu extends Qs{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new jt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let ms;const cr=new I,gs=new I,_s=new I,vs=new xt,lr=new xt,Ou=new me,ao=new I,hr=new I,co=new I,gh=new xt,La=new xt,_h=new xt;class nv extends Fe{constructor(t=new Uu){if(super(),this.isSprite=!0,this.type="Sprite",ms===void 0){ms=new sn;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new ev(e,5);ms.setIndex([0,1,2,0,2,3]),ms.setAttribute("position",new Ao(n,3,0,!1)),ms.setAttribute("uv",new Ao(n,2,3,!1))}this.geometry=ms,this.material=t,this.center=new xt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),gs.setFromMatrixScale(this.matrixWorld),Ou.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),_s.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&gs.multiplyScalar(-_s.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const o=this.center;lo(ao.set(-.5,-.5,0),_s,o,gs,s,r),lo(hr.set(.5,-.5,0),_s,o,gs,s,r),lo(co.set(.5,.5,0),_s,o,gs,s,r),gh.set(0,0),La.set(1,0),_h.set(1,1);let a=t.ray.intersectTriangle(ao,hr,co,!1,cr);if(a===null&&(lo(hr.set(-.5,.5,0),_s,o,gs,s,r),La.set(0,1),a=t.ray.intersectTriangle(ao,co,hr,!1,cr),a===null))return;const c=t.ray.origin.distanceTo(cr);c<t.near||c>t.far||e.push({distance:c,point:cr.clone(),uv:yn.getInterpolation(cr,ao,hr,co,gh,La,_h,new xt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function lo(i,t,e,n,s,r){vs.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(lr.x=r*vs.x-s*vs.y,lr.y=s*vs.x+r*vs.y):lr.copy(vs),i.copy(t),i.x+=lr.x,i.y+=lr.y,i.applyMatrix4(Ou)}class ko extends qe{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class In{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);const h=n[s],d=n[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new xt:new I);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new I,s=[],r=[],o=[],a=new I,c=new me;for(let f=0;f<=t;f++){const g=f/t;s[f]=this.getTangentAt(g,new I)}r[0]=new I,o[0]=new I;let l=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Be(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(Be(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Rc extends In{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new xt){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class iv extends Rc{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Cc(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let d=(o-r)/l-(a-r)/(l+h)+(a-o)/h,f=(a-o)/h-(c-o)/(h+u)+(c-a)/u;d*=h,f*=h,s(o,a,d,f)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const ho=new I,Ia=new Cc,Da=new Cc,Na=new Cc;class sv extends In{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new I){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(ho.subVectors(s[0],s[1]).add(s[0]),l=ho);const u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(ho.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=ho),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(d),f),p=Math.pow(d.distanceToSquared(h),f);_<1e-4&&(_=1),g<1e-4&&(g=_),p<1e-4&&(p=_),Ia.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,g,_,p),Da.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,g,_,p),Na.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,g,_,p)}else this.curveType==="catmullrom"&&(Ia.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),Da.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),Na.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(Ia.calc(c),Da.calc(c),Na.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new I().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function vh(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function rv(i,t){const e=1-i;return e*e*t}function ov(i,t){return 2*(1-i)*i*t}function av(i,t){return i*i*t}function mr(i,t,e,n){return rv(i,t)+ov(i,e)+av(i,n)}function cv(i,t){const e=1-i;return e*e*e*t}function lv(i,t){const e=1-i;return 3*e*e*i*t}function hv(i,t){return 3*(1-i)*i*i*t}function uv(i,t){return i*i*i*t}function gr(i,t,e,n,s){return cv(i,t)+lv(i,e)+hv(i,n)+uv(i,s)}class Fu extends In{constructor(t=new xt,e=new xt,n=new xt,s=new xt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new xt){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(gr(t,s.x,r.x,o.x,a.x),gr(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class dv extends In{constructor(t=new I,e=new I,n=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new I){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(gr(t,s.x,r.x,o.x,a.x),gr(t,s.y,r.y,o.y,a.y),gr(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Bu extends In{constructor(t=new xt,e=new xt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new xt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new xt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class fv extends In{constructor(t=new I,e=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new I){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new I){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class zu extends In{constructor(t=new xt,e=new xt,n=new xt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new xt){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(mr(t,s.x,r.x,o.x),mr(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class pv extends In{constructor(t=new I,e=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new I){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(mr(t,s.x,r.x,o.x),mr(t,s.y,r.y,o.y),mr(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ku extends In{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new xt){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(vh(a,c.x,l.x,h.x,u.x),vh(a,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new xt().fromArray(s))}return this}}var xh=Object.freeze({__proto__:null,ArcCurve:iv,CatmullRomCurve3:sv,CubicBezierCurve:Fu,CubicBezierCurve3:dv,EllipseCurve:Rc,LineCurve:Bu,LineCurve3:fv,QuadraticBezierCurve:zu,QuadraticBezierCurve3:pv,SplineCurve:ku});class mv extends In{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new xh[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new xh[s.type]().fromJSON(s))}return this}}class gv extends mv{constructor(t){super(),this.type="Path",this.currentPoint=new xt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Bu(this.currentPoint.clone(),new xt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new zu(this.currentPoint.clone(),new xt(t,e),new xt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){const a=new Fu(this.currentPoint.clone(),new xt(t,e),new xt(n,s),new xt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new ku(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,s,r,o,a,c),this}absellipse(t,e,n,s,r,o,a,c){const l=new Rc(t,e,n,s,r,o,a,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Pc extends sn{constructor(t=[new xt(0,-.5),new xt(.5,0),new xt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Be(s,0,Math.PI*2);const r=[],o=[],a=[],c=[],l=[],h=1/e,u=new I,d=new xt,f=new I,g=new I,_=new I;let p=0,m=0;for(let w=0;w<=t.length-1;w++)switch(w){case 0:p=t[w+1].x-t[w].x,m=t[w+1].y-t[w].y,f.x=m*1,f.y=-p,f.z=m*0,_.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case t.length-1:c.push(_.x,_.y,_.z);break;default:p=t[w+1].x-t[w].x,m=t[w+1].y-t[w].y,f.x=m*1,f.y=-p,f.z=m*0,g.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),c.push(f.x,f.y,f.z),_.copy(g)}for(let w=0;w<=e;w++){const v=n+w*h*s,E=Math.sin(v),B=Math.cos(v);for(let T=0;T<=t.length-1;T++){u.x=t[T].x*E,u.y=t[T].y,u.z=t[T].x*B,o.push(u.x,u.y,u.z),d.x=w/e,d.y=T/(t.length-1),a.push(d.x,d.y);const b=c[3*T+0]*E,D=c[3*T+1],S=c[3*T+0]*B;l.push(b,D,S)}}for(let w=0;w<e;w++)for(let v=0;v<t.length-1;v++){const E=v+w*t.length,B=E,T=E+t.length,b=E+t.length+1,D=E+1;r.push(B,T,D),r.push(b,D,T)}this.setIndex(r),this.setAttribute("position",new be(o,3)),this.setAttribute("uv",new be(a,2)),this.setAttribute("normal",new be(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pc(t.points,t.segments,t.phiStart,t.phiLength)}}class mi extends Pc{constructor(t=1,e=1,n=4,s=8){const r=new gv;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new mi(t.radius,t.length,t.capSegments,t.radialSegments)}}class Lc extends sn{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],c=[],l=new I,h=new xt;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const f=n+u/e*s;l.x=t*Math.cos(f),l.y=t*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new be(o,3)),this.setAttribute("normal",new be(a,3)),this.setAttribute("uv",new be(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Lc(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class ze extends sn{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],d=[],f=[];let g=0;const _=[],p=n/2;let m=0;w(),o===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new be(u,3)),this.setAttribute("normal",new be(d,3)),this.setAttribute("uv",new be(f,2));function w(){const E=new I,B=new I;let T=0;const b=(e-t)/n;for(let D=0;D<=r;D++){const S=[],x=D/r,A=x*(e-t)+t;for(let W=0;W<=s;W++){const P=W/s,U=P*c+a,q=Math.sin(U),V=Math.cos(U);B.x=A*q,B.y=-x*n+p,B.z=A*V,u.push(B.x,B.y,B.z),E.set(q,b,V).normalize(),d.push(E.x,E.y,E.z),f.push(P,1-x),S.push(g++)}_.push(S)}for(let D=0;D<s;D++)for(let S=0;S<r;S++){const x=_[S][D],A=_[S+1][D],W=_[S+1][D+1],P=_[S][D+1];h.push(x,A,P),h.push(A,W,P),T+=6}l.addGroup(m,T,0),m+=T}function v(E){const B=g,T=new xt,b=new I;let D=0;const S=E===!0?t:e,x=E===!0?1:-1;for(let W=1;W<=s;W++)u.push(0,p*x,0),d.push(0,x,0),f.push(.5,.5),g++;const A=g;for(let W=0;W<=s;W++){const U=W/s*c+a,q=Math.cos(U),V=Math.sin(U);b.x=S*V,b.y=p*x,b.z=S*q,u.push(b.x,b.y,b.z),d.push(0,x,0),T.x=q*.5+.5,T.y=V*.5*x+.5,f.push(T.x,T.y),g++}for(let W=0;W<s;W++){const P=B+W,U=A+W;E===!0?h.push(U,U+1,P):h.push(U+1,U,P),D+=3}l.addGroup(m,D,E===!0?1:2),m+=D}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ze(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ic extends ze{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new Ic(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class we extends sn{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],u=new I,d=new I,f=[],g=[],_=[],p=[];for(let m=0;m<=n;m++){const w=[],v=m/n;let E=0;m===0&&o===0?E=.5/e:m===n&&c===Math.PI&&(E=-.5/e);for(let B=0;B<=e;B++){const T=B/e;u.x=-t*Math.cos(s+T*r)*Math.sin(o+v*a),u.y=t*Math.cos(o+v*a),u.z=t*Math.sin(s+T*r)*Math.sin(o+v*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),p.push(T+E,1-v),w.push(l++)}h.push(w)}for(let m=0;m<n;m++)for(let w=0;w<e;w++){const v=h[m][w+1],E=h[m][w],B=h[m+1][w],T=h[m+1][w+1];(m!==0||o>0)&&f.push(v,E,T),(m!==n-1||c<Math.PI)&&f.push(E,B,T)}this.setIndex(f),this.setAttribute("position",new be(g,3)),this.setAttribute("normal",new be(_,3)),this.setAttribute("uv",new be(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new we(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Dc extends sn{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],c=[],l=[],h=new I,u=new I,d=new I;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){const _=g/s*r,p=f/n*Math.PI*2;u.x=(t+e*Math.cos(p))*Math.cos(_),u.y=(t+e*Math.cos(p))*Math.sin(_),u.z=e*Math.sin(p),a.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(g/s),l.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){const _=(s+1)*f+g-1,p=(s+1)*(f-1)+g-1,m=(s+1)*(f-1)+g,w=(s+1)*f+g;o.push(_,p,w),o.push(p,m,w)}this.setIndex(o),this.setAttribute("position",new be(a,3)),this.setAttribute("normal",new be(c,3)),this.setAttribute("uv",new be(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Dc(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class It extends Qs{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new jt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new jt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=mu,this.normalScale=new xt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Ho extends Fe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new jt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}class _v extends Ho{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Fe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new jt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Ua=new me,yh=new I,Mh=new I;class Hu{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new xt(512,512),this.map=null,this.mapPass=null,this.matrix=new me,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new bc,this._frameExtents=new xt(1,1),this._viewportCount=1,this._viewports=[new xe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;yh.setFromMatrixPosition(t.matrixWorld),e.position.copy(yh),Mh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Mh),e.updateMatrixWorld(),Ua.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ua),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ua)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Sh=new me,ur=new I,Oa=new I;class vv extends Hu{constructor(){super(new en(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new xt(4,2),this._viewportCount=6,this._viewports=[new xe(2,1,1,1),new xe(0,1,1,1),new xe(3,1,1,1),new xe(1,1,1,1),new xe(3,0,1,1),new xe(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),ur.setFromMatrixPosition(t.matrixWorld),n.position.copy(ur),Oa.copy(n.position),Oa.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Oa),n.updateMatrixWorld(),s.makeTranslation(-ur.x,-ur.y,-ur.z),Sh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Sh)}}class Nc extends Ho{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new vv}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class xv extends Hu{constructor(){super(new Ru(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Eh extends Ho{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Fe.DEFAULT_UP),this.updateMatrix(),this.target=new Fe,this.shadow=new xv}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class yv extends Ho{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Gu{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=wh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=wh();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function wh(){return(typeof performance>"u"?Date:performance).now()}const bh=new me;class Mv{constructor(t,e,n=0,s=1/0){this.ray=new yu(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new wc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return bh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(bh),this}intersectObject(t,e=!0,n=[]){return tc(t,this,n,e),n.sort(Th),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)tc(t[s],this,n,e);return n.sort(Th),n}}function Th(i,t){return i.distance-t.distance}function tc(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)tc(r[o],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:yc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=yc);const Ji=[{id:0,label:"Alex",skin:16763812,hair:2889744,outfit:1981066,accent:15857145,hairStyle:1},{id:1,label:"Jordan",skin:13010498,hair:1118481,outfit:1332013,accent:16710083,hairStyle:0},{id:2,label:"Morgan",skin:8142098,hair:656640,outfit:8917815,accent:16701354,hairStyle:2},{id:3,label:"Casey",skin:15777920,hair:8138002,outfit:1461859,accent:14742270,hairStyle:3},{id:4,label:"Riley",skin:9584654,hair:197379,outfit:10105874,accent:16775149,hairStyle:0},{id:5,label:"Sam",skin:16640216,hair:11817737,outfit:4988309,accent:15591934,hairStyle:1}],Uc=[{id:"available",label:"🟢 Available",color:58998},{id:"busy",label:"🔴 Busy",color:16729156},{id:"away",label:"🟡 Away",color:16763904},{id:"meeting",label:"🟣 In Meeting",color:11158783}],ec=Object.fromEntries(Uc.map(i=>[i.id,i.color]));function Vu(i,t=0){const e=new Qn;return Yu(e,i,t),e}function Wu(i,t){i.userData.status=t;const e=i.userData.statusMesh;e&&e.material.color.setHex(ec[t]??ec.available)}function Xu(i,t,e=0){var s;const n=i.userData.talkRing;if(n&&(n.visible=t,t)){const r=.75+Math.sin(e*6)*.25;n.material.opacity=r,n.material.color.setHex(65416),(s=n.material.emissive)==null||s.setHex(65416),n.material.emissiveIntensity=r*1.2}}function Zu(i,t,e){for(i.traverse(n=>{var s;(n.isMesh||n.isSprite)&&((s=n.geometry)==null||s.dispose(),(Array.isArray(n.material)?n.material:[n.material]).forEach(o=>{var a;(a=o==null?void 0:o.map)==null||a.dispose(),o==null||o.dispose()}))});i.children.length;)i.remove(i.children[0]);Yu(i,t,e)}function Yu(i,t,e){const n=Ji[e]??Ji[0],s=xs(n.skin,.75),r=xs(n.outfit,.65,.05),o=xs(n.accent,.6),a=xs(n.hair,.9),c=xs(1118481,.8),l=xs(1118481,.3),h=(B,T,b=0,D=0,S=0,x=0,A=0,W=0)=>{const P=new St(B,T);return P.position.set(b,D,S),P.rotation.set(x,A,W),P.castShadow=!0,i.add(P),P};h(new mi(.21,.52,4,12),r),h(new ze(.215,.215,.055,16),c,0,.635),h(new $t(.26,.09,.04),o,0,1.12,.208),h(new ze(.072,.09,.14,12),s,0,1.49),h(new we(.19,20,16),s,0,1.68),h(new we(.048,10,8),s,-.2,1.68),h(new we(.048,10,8),s,.2,1.68),h(new we(.034,10,8),o,-.068,1.7,.163),h(new we(.034,10,8),o,.068,1.7,.163),h(new we(.021,8,6),l,-.068,1.7,.178),h(new we(.021,8,6),l,.068,1.7,.178),Sv(i,h,a,n.hairStyle),h(new we(.105,10,8),r,-.315,1.39),h(new we(.105,10,8),r,.315,1.39);const u=h(new mi(.065,.3,4,8),r,-.31,1.08),d=h(new mi(.065,.3,4,8),r,.31,1.08);h(new we(.073,12,9),s,-.32,.72),h(new we(.073,12,9),s,.32,.72);const f=h(new mi(.083,.36,4,8),r,-.13,.4),g=h(new mi(.083,.36,4,8),r,.13,.4);h(new $t(.17,.1,.28),c,-.13,.07,.04),h(new $t(.17,.1,.28),c,.13,.07,.04),h(new ze(.09,.084,.08,10),c,-.13,.145),h(new ze(.09,.084,.08,10),c,.13,.145);const _=document.createElement("canvas");_.width=256,_.height=56;const p=_.getContext("2d");p.fillStyle="rgba(0,10,30,0.78)",p.roundRect(0,0,256,56,10),p.fill(),p.fillStyle="#aaddff",p.font="bold 26px Inter, sans-serif",p.textAlign="center",p.fillText(t,128,38);const m=new nv(new Uu({map:new ko(_),transparent:!0,depthTest:!1}));m.position.set(0,2.18,0),m.scale.set(1.5,.33,1),i.add(m);const w=ec[i.userData.status??"available"],v=new St(new we(.065,8,6),new vr({color:w}));v.position.set(.58,2.22,0),i.add(v),i.userData.statusMesh=v;const E=new St(new Dc(.38,.045,6,32),new vr({color:65416,transparent:!0,opacity:0,emissive:new jt(65416),depthWrite:!1,side:nn}));E.rotation.x=Math.PI/2,E.position.y=.01,E.visible=!1,i.add(E),i.userData.talkRing=E,i.userData.legL=f,i.userData.legR=g,i.userData.armL=u,i.userData.armR=d,i.userData.walkClock=i.userData.walkClock??0,i.userData.presetId=e}function Sv(i,t,e,n){switch(n){case 0:t(new we(.193,16,10,0,Math.PI*2,0,.8),e,0,1.69);break;case 1:t(new we(.198,16,10,0,Math.PI*2,0,1.1),e,0,1.68);break;case 2:{t(new we(.196,16,10,0,Math.PI*2,0,1.05),e,0,1.68);const s=new St(new mi(.09,.22,4,8),e);s.position.set(0,1.51,-.13),s.rotation.x=.28,s.castShadow=!0,i.add(s);break}case 3:t(new we(.238,16,12),e,0,1.74);break;default:t(new we(.198,16,10,0,Math.PI*2,0,1.1),e,0,1.68)}}function xs(i,t=.7,e=0){return new It({color:i,roughness:t,metalness:e})}function qu(i,t,e){const{legL:n,legR:s,armL:r,armR:o}=i.userData;if(!(!n||!s))if(t){i.userData.walkClock+=e*12;const a=Math.sin(i.userData.walkClock)*.42;n.rotation.x=a,s.rotation.x=-a,r&&(r.rotation.x=-a*.55),o&&(o.rotation.x=a*.55)}else{const a=Math.exp(-12*e);n.rotation.x*=a,s.rotation.x*=a,r&&(r.rotation.x*=a),o&&(o.rotation.x*=a)}}const R={minX:-22,maxX:22,minZ:-24,maxZ:12,wallH:4.5,wallT:.3,lobbyZ:4,midZ:-4,centerX:0,doorH:2.2,doorHalfW:.7,leftDoorX:-11,rightDoorX:11,mainDoorH:2.6,mainDoorHalfW:1.5},ht=R;function de(i,t,e,n,s,r,o,a){const c=new St(new $t(r,o,a),t);return c.position.set(e,n,s),i.add(c),c}function Ev(){const i=new It({color:13946822,roughness:.88,metalness:.04,side:nn}),t=new It({color:8026226,roughness:.78,metalness:.08}),e=new It({color:15789285,roughness:.94,metalness:0}),n=new It({color:15262940,roughness:.9,metalness:0}),s=new It({color:14209736,roughness:.18,metalness:.07}),r=new It({color:12090440,roughness:.82,metalness:0}),o=new It({color:16118766,roughness:.98,metalness:0}),a=new It({color:4341816,roughness:.9,metalness:0}),c=new It({color:10131600,roughness:.4,metalness:.6}),l=new It({color:11061464,roughness:.04,metalness:.08,transparent:!0,opacity:.25,side:nn}),h=new It({color:9209984,roughness:.82,metalness:.04}),u=new It({color:11579576,roughness:.28,metalness:.82});return{ext:i,span:t,int:e,div:n,tile:s,wood:r,ceil:o,roof:a,frame:c,glass:l,stair:h,rail:u}}function wv(i){const t=Ev(),e=ht.wallH,n=ht.wallT,s=ht.maxX-ht.minX,r=ht.maxZ-ht.minZ,o=0,a=(ht.minZ+ht.maxZ)/2,c=4,l=e*c;de(i,t.tile,o,.04,(ht.lobbyZ+ht.maxZ)/2,s,.08,ht.maxZ-ht.lobbyZ),de(i,t.wood,o,.04,(ht.minZ+ht.lobbyZ)/2,s,.08,ht.lobbyZ-ht.minZ),de(i,t.ext,o,l/2,ht.minZ,s,l,n),de(i,t.ext,ht.minX,l/2,a,n,l,r),de(i,t.ext,ht.maxX,l/2,a,n,l,r);const h=ht.mainDoorHalfW,u=ht.mainDoorH,d=e/2;de(i,t.ext,(ht.minX+-h)/2,d,ht.maxZ,-h-ht.minX,e,n),de(i,t.ext,(h+ht.maxX)/2,d,ht.maxZ,ht.maxX-h,e,n),de(i,t.ext,0,u+(e-u)/2,ht.maxZ,h*2,e-u,n),de(i,t.ext,o,e+(l-e)/2,ht.maxZ,s,l-e,n);for(let v=1;v<c;v++){const E=e*v;de(i,t.span,o,E+.25,ht.maxZ-.08,s+.2,.5,.14),de(i,t.span,o,E+.25,ht.minZ+.08,s+.2,.5,.14),de(i,t.span,ht.minX+.06,E+.25,a,.14,.5,r+.2),de(i,t.span,ht.maxX-.06,E+.25,a,.14,.5,r+.2)}bv(i,t),Tv(i,t,h);const f=n*.5,g=n/2;Ah(i,t.div,ht.lobbyZ,ht.minX+f,ht.maxX-f,e,n,ht.leftDoorX,ht.doorHalfW,ht.doorH,ht.rightDoorX,ht.doorHalfW,ht.doorH),Ah(i,t.div,ht.midZ,ht.minX+f,ht.maxX-f,e,n,ht.leftDoorX,ht.doorHalfW,ht.doorH,ht.rightDoorX,ht.doorHalfW,ht.doorH),Rh(i,t.div,ht.centerX,ht.minZ+f,ht.midZ-g,e,n),Rh(i,t.div,ht.centerX,ht.midZ+g,ht.lobbyZ-g,e,n);const _=de(i,t.ceil,o,e+.05,a,s,.1,r);_.userData.mapHide=!0;const p=i.children.length;de(i,t.roof,o,l+.3,a,s+1,.6,r+1),Rv(i,t.ext,s,r,l);for(let v=p;v<i.children.length;v++)i.children[v].userData.mapHide=!0;Av(i,t),Cv(i);const m=i.children.length;Pv(i,e);for(let v=m;v<i.children.length;v++)i.children[v].userData.mapHide=!0;const w=i.children.length;Lv(i);for(let v=w;v<i.children.length;v++)i.children[v].userData.mapShow=!0}function bv(i,t){function r(c,l,h,u){const d=new St(new $t(2.3600000000000003,1.7200000000000002,.08),t.frame);d.position.set(c,l,h),d.rotation.y=u,i.add(d);const f=new St(new ti(2.2,1.6),t.glass);f.position.set(c,l,h),f.rotation.y=u,i.add(f)}const o=ht.wallH,a=[0,1,2,3].map(c=>c*o+o*.6);a.forEach(c=>{[-16,-6,8].forEach(l=>r(ht.minX,c,l,Math.PI/2))}),a.forEach(c=>{[-16,-6,8].forEach(l=>r(ht.maxX,c,l,-Math.PI/2))}),a.forEach(c=>{[-14,0,14].forEach(l=>r(l,c,ht.minZ,Math.PI))}),a.forEach((c,l)=>{l===0?(r(-14,c,ht.maxZ,0),r(14,c,ht.maxZ,0)):[-14,-6,6,14].forEach(h=>r(h,c,ht.maxZ,0))})}function Tv(i,t,e,n){[-e-.4,e+.4].forEach(s=>{const r=new St(new ze(.22,.22,ht.mainDoorH,12),t.ext);r.position.set(s,ht.mainDoorH/2,ht.maxZ+.5),i.add(r)}),de(i,t.span,0,ht.mainDoorH+.18,ht.maxZ+.7,e*2+2.4,.35,1.8),de(i,t.int,0,ht.mainDoorH,ht.maxZ+.7,e*2+2.2,.02,1.7)}function Av(i,t){for(let l=0;l<9;l++)de(i,t.stair,16.5,.22*(l+.5),5.5+.28*(l+.5),3,.22,.28);for(let l=0;l<9;l+=2)de(i,t.rail,16.5-3/2+.1,.22*l+.55,5.5+.28*l,.06,1.1,.06),de(i,t.rail,16.5+3/2-.1,.22*l+.55,5.5+.28*l,.06,1.1,.06);de(i,t.rail,16.5,.22*9*.5+.55,5.5+.28*9*.5,3,.06,.28*9+.1);const c=-16.5;for(let l=0;l<9;l++)de(i,t.stair,c,.22*(l+.5),5.5+.28*(l+.5),3,.22,.28);for(let l=0;l<9;l+=2)de(i,t.rail,c-3/2+.1,.22*l+.55,5.5+.28*l,.06,1.1,.06),de(i,t.rail,c+3/2-.1,.22*l+.55,5.5+.28*l,.06,1.1,.06);de(i,t.rail,c,.22*9*.5+.55,5.5+.28*9*.5,3,.06,.28*9+.1)}function Ah(i,t,e,n,s,r,o,a,c,l,h,u,d){const f=r/2,g=[];let _=n;const p=[];p.push({c:a,hw:c,dh:l}),p.push({c:h,hw:u,dh:d}),p.sort((m,w)=>m.c-w.c),p.forEach(({c:m,hw:w,dh:v})=>{const E=m-w,B=m+w;E>_&&g.push({from:_,to:E,full:!0}),g.push({from:E,to:B,full:!1,dh:v}),_=B}),_<s&&g.push({from:_,to:s,full:!0}),g.forEach(({from:m,to:w,full:v,dh:E})=>{const B=w-m,T=(m+w)/2;if(v)de(i,t,T,f,e,B,r,o);else{const b=r-E;de(i,t,T,E+b/2,e,B,b,o)}})}function Rh(i,t,e,n,s,r,o){const a=s-n;if(a<=0)return;const c=new St(new $t(o,r,a),t);c.position.set(e,r/2,(n+s)/2),i.add(c)}function Rv(i,t,e,n,s){const a=s+.275+.05,c=(ht.minZ+ht.maxZ)/2;[[0,a,ht.maxZ+.05,e+.6,.55,.28],[0,a,ht.minZ-.05,e+.6,.55,.28],[ht.minX-.05,a,c,.28,.55,n+.6],[ht.maxX+.05,a,c,.28,.55,n+.6]].forEach(([h,u,d,f,g,_])=>{const p=new St(new $t(f,g,_),t);p.position.set(h,u,d),i.add(p)})}function Cv(i){[{color:12863616,x:ht.minX+.06,z1:ht.midZ,z2:ht.lobbyZ},{color:4241520,x:ht.maxX-.06,z1:ht.midZ,z2:ht.lobbyZ},{color:14712880,x:ht.minX+.06,z1:ht.minZ,z2:ht.midZ},{color:3705032,x:ht.maxX-.06,z1:ht.minZ,z2:ht.midZ},{color:8947848,x:0,z1:ht.lobbyZ,z2:ht.maxZ-1}].forEach(({color:e,x:n,z1:s,z2:r})=>{const o=new It({color:e,roughness:.7,metalness:0}),a=r-s,c=new St(new $t(.06,.04,a),o);c.position.set(n,.05,(s+r)/2),i.add(c)})}function Pv(i,t){const e=new It({color:14210510,roughness:.85,metalness:.06}),n=new It({color:16777215,emissive:16774632,emissiveIntensity:1.2,roughness:.7});[[-8,8],[8,8],[0,8],[-11,0],[11,0],[-14,-10],[-8,-18],[8,-18],[14,-10]].forEach(([r,o])=>{const a=new St(new $t(1.2,.06,.65),e);a.position.set(r,t-.04,o),i.add(a);const c=new St(new $t(1.1,.01,.55),n);c.position.set(r,t-.02,o),i.add(c)})}function Lv(i){[{name:"LOBBY",color:"#cccccc",x:0,z:8,w:16,d:5},{name:"OPS",color:"#ffaa44",x:-11,z:0,w:12,d:6},{name:"FUN",color:"#44ffaa",x:11,z:0,w:12,d:6},{name:"DESIGN",color:"#ff6ba0",x:-11,z:-14,w:14,d:10},{name:"ENGINEERING",color:"#44aaff",x:11,z:-14,w:14,d:10}].forEach(({name:e,color:n,x:s,z:r,w:o,d:a})=>{const c=document.createElement("canvas");c.width=512,c.height=256;const l=c.getContext("2d");l.fillStyle=n+"18",l.fillRect(0,0,512,256),l.strokeStyle=n,l.lineWidth=10,l.strokeRect(6,6,500,244),l.fillStyle=n,l.font="bold 72px Inter, Arial, sans-serif",l.textAlign="center",l.textBaseline="middle",l.fillText(e,256,128);const h=new St(new ti(o,a),new vr({map:new ko(c),transparent:!0,depthWrite:!1}));h.rotation.x=-Math.PI/2,h.position.set(s,.15,r),i.add(h)})}function Iv(i){const t=R,e=new It({color:5934140,roughness:.96,metalness:0}),n=new St(new ti(300,300),e);n.rotation.x=-Math.PI/2,n.position.y=-.01,n.receiveShadow=!0,i.add(n);const s=new It({color:12630704,roughness:.88,metalness:0}),r=new St(new $t(5,.06,18),s);r.position.set(0,.03,19),r.receiveShadow=!0,i.add(r);const o=new St(new $t(14,.06,8),s);o.position.set(0,.03,14.5),o.receiveShadow=!0,i.add(o);const a=new St(new $t(t.maxX-t.minX,.06,4),s);a.position.set(0,.03,t.maxZ+2),a.receiveShadow=!0,i.add(a);const c=new It({color:11578272,roughness:.9,metalness:0}),l=t.maxX-t.minX,h=t.maxZ-t.minZ,u=new St(new $t(l+.8,.22,h+.8),c);u.position.set(0,-.11,(t.minZ+t.maxZ)/2),i.add(u),[[-30,-18],[-30,5],[-30,20],[30,-18],[30,5],[30,20],[-12,26],[12,26],[-36,12],[36,12],[-28,-30],[28,-30]].forEach(([f,g])=>Dv(i,f,g)),[[-4,24],[4,24],[-14,14],[14,14]].forEach(([f,g])=>Nv(i,f,g)),Uv(i),Ov(i)}function Dv(i,t,e){const n=new It({color:5911832,roughness:.92}),s=new It({color:3830312,roughness:.95}),r=new St(new ze(.18,.26,2.2,8),n);r.position.set(t,1.1,e),r.castShadow=!0,i.add(r),[[1.8,2.5,3.4],[1.3,2,4.8],[.7,1.4,6]].forEach(([o,a,c])=>{const l=new St(new Ic(o,a,9),s);l.position.set(t,c,e),l.castShadow=!0,i.add(l)})}function Nv(i,t,e){const n=new It({color:6316128,roughness:.55,metalness:.75}),s=new It({color:16775384,emissive:16773296,emissiveIntensity:1.5,roughness:.4}),r=new St(new ze(.06,.08,5,8),n);r.position.set(t,2.5,e),r.castShadow=!0,i.add(r);const o=new St(new $t(.06,.06,.9),n);o.position.set(t,5.1,e-.4),i.add(o);const a=new St(new $t(.45,.14,.28),s);a.position.set(t,4.95,e-.8),i.add(a);const c=new Nc(16771232,6,12);c.position.set(t,4.95,e-.8),i.add(c)}function Uv(i){const t=[2250154,11149858,8947840,2245666,8947848],e=new It({color:1710618,roughness:.8});[[-40,-22],[-40,-16],[-40,-10],[40,-22],[40,-16],[40,-10]].forEach(([s,r],o)=>{const a=t[o%t.length],c=new It({color:a,roughness:.45,metalness:.3}),l=new St(new $t(4.4,1.4,2),c);l.position.set(s,.72,r),l.castShadow=!0,i.add(l);const h=new St(new $t(2.8,.7,1.85),c);h.position.set(s-.2,1.8,r),i.add(h),[[-1.5,-1.05],[-1.5,1.05],[1.5,-1.05],[1.5,1.05]].forEach(([u,d])=>{const f=new St(new ze(.36,.36,.22,12),e);f.rotation.z=Math.PI/2,f.position.set(s+u,.36,r+d),i.add(f)})})}function Ov(i){const t=new It({color:4878400,roughness:1});[[-80,-60,30,8,20],[80,-60,28,7,18],[0,-80,40,6,25],[-50,-70,35,9,22],[55,-70,32,7,20]].forEach(([e,n,s,r,o])=>{const a=new St(new $t(s,r,o),t);a.position.set(e,r/2-2,n),i.add(a)})}const ys=R.leftDoorX,Ms=R.rightDoorX,Ae=R.doorHalfW,ci=R.doorH,Ss=.1,Ur=[{id:"main-left",label:"Main Entrance",hinge:{x:-1.5,y:R.mainDoorH/2,z:R.maxZ},meshOffset:{x:R.mainDoorHalfW/2,y:0,z:0},w:R.mainDoorHalfW,h:R.mainDoorH,d:Ss,closedRY:0,openRY:Math.PI/2,closedAABB:{minX:-1.5,maxX:0,minZ:R.maxZ-.14,maxZ:R.maxZ+.14}},{id:"main-right",label:"Main Entrance",hinge:{x:R.mainDoorHalfW,y:R.mainDoorH/2,z:R.maxZ},meshOffset:{x:-1.5/2,y:0,z:0},w:R.mainDoorHalfW,h:R.mainDoorH,d:Ss,closedRY:0,openRY:-Math.PI/2,closedAABB:{minX:0,maxX:R.mainDoorHalfW,minZ:R.maxZ-.14,maxZ:R.maxZ+.14}},{id:"ops",label:"Ops Room",hinge:{x:ys-Ae,y:ci/2,z:R.lobbyZ},meshOffset:{x:Ae,y:0,z:0},w:Ae*2,h:ci,d:Ss,closedRY:0,openRY:-Math.PI/2,closedAABB:{minX:ys-Ae,maxX:ys+Ae,minZ:R.lobbyZ-.12,maxZ:R.lobbyZ+.12}},{id:"fun",label:"Fun Room",hinge:{x:Ms+Ae,y:ci/2,z:R.lobbyZ},meshOffset:{x:-Ae,y:0,z:0},w:Ae*2,h:ci,d:Ss,closedRY:0,openRY:Math.PI/2,closedAABB:{minX:Ms-Ae,maxX:Ms+Ae,minZ:R.lobbyZ-.12,maxZ:R.lobbyZ+.12}},{id:"design",label:"Design Room",hinge:{x:ys-Ae,y:ci/2,z:R.midZ},meshOffset:{x:Ae,y:0,z:0},w:Ae*2,h:ci,d:Ss,closedRY:0,openRY:-Math.PI/2,closedAABB:{minX:ys-Ae,maxX:ys+Ae,minZ:R.midZ-.12,maxZ:R.midZ+.12}},{id:"engineering",label:"Engineering Room",hinge:{x:Ms+Ae,y:ci/2,z:R.midZ},meshOffset:{x:-Ae,y:0,z:0},w:Ae*2,h:ci,d:Ss,closedRY:0,openRY:Math.PI/2,closedAABB:{minX:Ms-Ae,maxX:Ms+Ae,minZ:R.midZ-.12,maxZ:R.midZ+.12}}],er={};function Fv(i){const t=new It({color:8016944,roughness:.72,metalness:.02,side:nn}),e=new It({color:13937220,roughness:.28,metalness:.88}),n=new It({color:6176286,roughness:.8,metalness:0});return Ur.forEach(s=>{const r=new Qn;r.position.set(s.hinge.x,s.hinge.y,s.hinge.z),i.add(r);const o=new St(new $t(s.w,s.h,s.d),t);o.position.set(s.meshOffset.x,s.meshOffset.y,s.meshOffset.z),o.userData.doorId=s.id,r.add(o);const a=s.meshOffset;[-.45,.32].forEach(f=>{const g=new St(new $t(s.w*.85,.04,s.d*1.2),n);g.position.set(a.x,a.y+f,a.z+s.d*.1),r.add(g)});const c=a.x+(a.x>=0?-s.w*.36:s.w*.36),l=new St(new we(.05,8,6),e);l.position.set(c,a.y-.08,a.z+s.d*.65),r.add(l);const h=l.clone();h.position.z=a.z-s.d*.65,r.add(h);const u=s.id==="main-left"||s.id==="main-right",d=u?s.openRY:s.closedRY;r.rotation.y=d,er[s.id]={open:u,targetRY:d,currentRY:d,pivot:r}}),{update:Bv,toggleDoor:Vn,getNearbyDoor:$u,getClosedColliders:Ku}}function Bv(i){Object.values(er).forEach(t=>{Math.abs(t.currentRY-t.targetRY)>5e-4&&(t.currentRY+=(t.targetRY-t.currentRY)*Math.min(1,i*7),t.pivot.rotation.y=t.currentRY)})}function Vn(i){const t=er[i],e=Ur.find(n=>n.id===i);if(!(!t||!e))return t.open=!t.open,t.targetRY=t.open?e.openRY:e.closedRY,t.open}function $u(i,t=2.8){let e=null,n=t;return Ur.forEach(s=>{const r=i.x-s.hinge.x,o=i.z-s.hinge.z,a=Math.sqrt(r*r+o*o);a<n&&(n=a,e={def:s,state:er[s.id]})}),e}function Es(i){var t;return((t=er[i])==null?void 0:t.open)??!1}function Ku(){const i=[];return Ur.forEach(t=>{const e=er[t.id];if(!e)return;Math.abs(e.currentRY-t.closedRY)<.18&&i.push(t.closedAABB)}),i}function zv(i){const t=document.getElementById("canvas"),e=new Q_({canvas:t,antialias:!0});e.setSize(window.innerWidth,window.innerHeight),e.setPixelRatio(Math.min(window.devicePixelRatio,2)),e.shadowMap.enabled=!0,e.shadowMap.type=ru,e.toneMapping=au,e.toneMappingExposure=1;const n=new tv;n.background=new jt(9357544),n.fog=new Ac(11195624,.007);const s=new en(80,window.innerWidth/window.innerHeight,.1,300);s.position.set(0,1.7,22),n.add(new yv(16775408,.9)),n.add(new _v(10407144,5929544,.9));const r=new Eh(16774616,3.2);r.position.set(40,70,35),r.castShadow=!0,r.shadow.mapSize.set(2048,2048),r.shadow.camera.near=1,r.shadow.camera.far=120,r.shadow.camera.left=-50,r.shadow.camera.right=50,r.shadow.camera.top=50,r.shadow.camera.bottom=-50,r.shadow.radius=3,r.shadow.bias=-.001,n.add(r);const o=new Eh(13164021,.6);o.position.set(-25,30,-20),n.add(o),[{pos:[-5,3.8,-14],color:16773344,intensity:25,radius:18},{pos:[5,3.8,-14],color:16773344,intensity:25,radius:18},{pos:[-11,3.8,0],color:16774376,intensity:22,radius:16},{pos:[11,3.8,0],color:16774376,intensity:22,radius:16},{pos:[0,3.8,8],color:16775412,intensity:28,radius:22}].forEach(({pos:d,color:f,intensity:g,radius:_})=>{const p=new Nc(f,g,_);p.position.set(...d),n.add(p)}),i==null||i(10,"Laying foundations…"),Iv(n),i==null||i(35,"Building structure…"),wv(n),i==null||i(65,"Installing doors…");const c=Fv(n);i==null||i(90,"Finishing touches…"),n.userData.doors=c,window.addEventListener("resize",()=>{s.aspect=window.innerWidth/window.innerHeight,s.updateProjectionMatrix(),e.setSize(window.innerWidth,window.innerHeight)});const l=new Gu;function h(){requestAnimationFrame(h);const d=l.getDelta();c.update(d),e.render(n,s)}h();let u=null;return i==null||i(100,"Ready!"),setTimeout(()=>{u&&u()},200),{scene:n,camera:s,renderer:e,onShipLoaded:d=>{u=d}}}const Ch=[{id:"design-screen",label:"Design Board",zone:"DESIGN",tool:"Excalidraw",url:"https://excalidraw.com",position:{x:R.minX+.12,y:2.2,z:-14},rotationY:Math.PI/2,width:4.5,height:2.8,color:16739232,emoji:"✏️"},{id:"engineering-screen",label:"Code Docs",zone:"ENGINEERING",tool:"HackMD",url:"https://hackmd.io",position:{x:R.maxX-.12,y:2.2,z:-14},rotationY:-Math.PI/2,width:4.5,height:2.8,color:4500223,emoji:"💻"},{id:"ops-screen",label:"Ops Dashboard",zone:"OPS",tool:"Grafana",url:"https://play.grafana.org",position:{x:R.minX+.12,y:2.2,z:0},rotationY:Math.PI/2,width:4,height:2.5,color:16755268,emoji:"📊"},{id:"fun-screen",label:"Vibe Zone",zone:"FUN",tool:"Spotify",url:"https://open.spotify.com/embed/playlist/37i9dQZF1DX0XUsuxWHRQd?utm_source=generator&theme=0",position:{x:R.maxX-.12,y:2.2,z:0},rotationY:-Math.PI/2,width:4,height:2.5,color:4521898,emoji:"🎵"}];function kv(i){const t=[];return Ch.forEach(e=>{const n=new Qn;n.position.set(e.position.x,e.position.y,e.position.z),n.rotation.y=e.rotationY,i.add(n);const s=.1,r=new It({color:1710618,roughness:.3,metalness:.85}),o=(g,_,p,m,w,v)=>{const E=new St(new $t(m,w,v),r);E.position.set(g,_,p),n.add(E)};o(0,e.height/2+s/2,0,e.width+s*2,s,s*2),o(0,-e.height/2-s/2,0,e.width+s*2,s,s*2),o(-e.width/2-s/2,0,0,s,e.height+s*2,s*2),o(e.width/2+s/2,0,0,s,e.height+s*2,s*2);const a=new It({color:e.color,emissive:e.color,emissiveIntensity:2.5,roughness:.08}),c=(g,_,p,m,w,v)=>{const E=new St(new $t(m,w,v),a);E.position.set(g,_,p),n.add(E)};c(0,e.height/2,.02,e.width,.04,.04),c(0,-e.height/2,.02,e.width,.04,.04),c(-e.width/2,0,.02,.04,e.height,.04),c(e.width/2,0,.02,.04,e.height,.04);const l=Hv(e),h=new It({map:l,emissiveMap:l,emissive:new jt(e.color),emissiveIntensity:.14,roughness:.1}),u=new St(new ti(e.width,e.height),h);u.position.set(0,0,.02),u.userData.screen=e,n.add(u),t.push(u);const d=new Nc(e.color,16,8);d.position.set(0,0,.6),n.add(d);let f=Math.random()*Math.PI*2;(function g(){requestAnimationFrame(g),f+=.018,h.emissiveIntensity=.12+Math.sin(f)*.04,d.intensity=14+Math.sin(f*.65)*4})()}),{meshes:t,screens:Ch}}function Hv(i){const e=Math.round(512*(i.height/i.width)),n=document.createElement("canvas");n.width=512,n.height=e;const s=n.getContext("2d"),r="#"+i.color.toString(16).padStart(6,"0");s.fillStyle="#060c18",s.fillRect(0,0,512,e),s.fillStyle="rgba(200,230,255,0.035)";for(let c=0;c<512;c+=32)for(let l=0;l<e;l+=32)s.fillRect(c,l,2,2);const o=s.createLinearGradient(0,0,512,0);o.addColorStop(0,r+"55"),o.addColorStop(1,"transparent"),s.fillStyle=o,s.fillRect(0,0,512,46),s.fillStyle=r,s.font="bold 16px Inter, monospace",s.textAlign="left",s.fillText(i.zone,14,30),s.fillStyle="rgba(255,255,255,0.38)",s.font="12px Inter, monospace",s.textAlign="right",s.fillText(i.tool,498,30),s.strokeStyle=r+"44",s.lineWidth=1,s.beginPath(),s.moveTo(0,48),s.lineTo(512,48),s.stroke();const a=Math.round(e*.27);return s.font=`${a}px sans-serif`,s.textAlign="center",s.fillText(i.emoji,512/2,e*.52),s.fillStyle="#fff",s.font=`bold ${Math.round(e*.1)}px Inter, monospace`,s.textAlign="center",s.shadowColor=r,s.shadowBlur=18,s.fillText(i.label,512/2,e*.72),s.shadowBlur=0,s.fillStyle=r+"bb",s.font=`${Math.round(e*.062)}px Inter, monospace`,s.textAlign="center",s.fillText("[ E ] or click to open",512/2,e*.88),s.strokeStyle=r+"55",s.lineWidth=2,s.beginPath(),s.moveTo(0,e-2),s.lineTo(512,e-2),s.stroke(),new ko(n)}const uo=.38,ve=R.wallT/2+.01,Rs=R.leftDoorX,Cs=R.rightDoorX,li=R.doorHalfW,Ph=R.mainDoorHalfW,Ju=[{minX:R.minX,maxX:-Ph,minZ:R.maxZ-ve,maxZ:R.maxZ+ve},{minX:Ph,maxX:R.maxX,minZ:R.maxZ-ve,maxZ:R.maxZ+ve},{minX:R.minX,maxX:R.maxX,minZ:R.minZ-ve,maxZ:R.minZ+ve},{minX:R.minX-ve,maxX:R.minX+ve,minZ:R.minZ,maxZ:R.maxZ},{minX:R.maxX-ve,maxX:R.maxX+ve,minZ:R.minZ,maxZ:R.maxZ},{minX:R.minX,maxX:Rs-li,minZ:R.lobbyZ-ve,maxZ:R.lobbyZ+ve},{minX:Rs+li,maxX:Cs-li,minZ:R.lobbyZ-ve,maxZ:R.lobbyZ+ve},{minX:Cs+li,maxX:R.maxX,minZ:R.lobbyZ-ve,maxZ:R.lobbyZ+ve},{minX:R.minX,maxX:Rs-li,minZ:R.midZ-ve,maxZ:R.midZ+ve},{minX:Rs+li,maxX:Cs-li,minZ:R.midZ-ve,maxZ:R.midZ+ve},{minX:Cs+li,maxX:R.maxX,minZ:R.midZ-ve,maxZ:R.midZ+ve},{minX:R.centerX-ve,maxX:R.centerX+ve,minZ:R.minZ,maxZ:R.lobbyZ},{minX:-80,maxX:80,minZ:68,maxZ:70},{minX:-80,maxX:80,minZ:-70,maxZ:-68},{minX:-70,maxX:-68,minZ:-70,maxZ:70},{minX:68,maxX:70,minZ:-70,maxZ:70}];let ju=[];function Gv(i){ju=i}function Vv(i,t,e){const n=Math.max(e.minX,Math.min(i,e.maxX)),s=Math.max(e.minZ,Math.min(t,e.maxZ)),r=i-n,o=t-s,a=r*r+o*o;if(a<uo*uo&&a>1e-6){const c=Math.sqrt(a),l=uo-c;return{x:i+r/c*l,z:t+o/c*l}}return a===0?{x:i+uo,z:t}:null}function Fa(i,t){let e=t.x,n=t.z;const s=[...Ju,...Ku(),...ju];for(let r=0;r<2;r++)for(const o of s){const a=Vv(e,n,o);a&&(e=a.x,n=a.z)}return{x:e,z:n}}function Ro(i){const t=i.x,e=i.z;if(e>R.maxZ||e<R.minZ||t<R.minX||t>R.maxX)return"OUTSIDE";if(e>R.lobbyZ)return"LOBBY";const n=t<R.centerX,s=e>R.midZ,r=e<=R.midZ;return s&&n?"OPS":s&&!n?"FUN":r&&n?"DESIGN":"ENGINEERING"}const Wv={mainDoor:{x:0,z:R.maxZ+.5},lobbyIn:{x:0,z:R.maxZ-1.5},opsEntry:{x:Rs,z:R.lobbyZ-1},funEntry:{x:Cs,z:R.lobbyZ-1},designEntry:{x:Rs,z:R.midZ-1},engEntry:{x:Cs,z:R.midZ-1}};function Xv(i,t){const e=Ro(i),n=Ro(t);if(e===n)return[{x:t.x,z:t.z}];const s={x:t.x,z:t.z},r=Wv,o={"OUTSIDE→LOBBY":[r.mainDoor,r.lobbyIn],"OUTSIDE→OPS":[r.mainDoor,r.lobbyIn,r.opsEntry],"OUTSIDE→FUN":[r.mainDoor,r.lobbyIn,r.funEntry],"OUTSIDE→DESIGN":[r.mainDoor,r.lobbyIn,r.opsEntry,r.designEntry],"OUTSIDE→ENGINEERING":[r.mainDoor,r.lobbyIn,r.funEntry,r.engEntry],"LOBBY→OPS":[r.opsEntry],"LOBBY→FUN":[r.funEntry],"LOBBY→DESIGN":[r.opsEntry,r.designEntry],"LOBBY→ENGINEERING":[r.funEntry,r.engEntry],"LOBBY→OUTSIDE":[r.mainDoor],"OPS→LOBBY":[r.opsEntry],"OPS→DESIGN":[r.designEntry],"OPS→FUN":[r.opsEntry,r.funEntry],"OPS→ENGINEERING":[r.opsEntry,r.funEntry,r.engEntry],"OPS→OUTSIDE":[r.opsEntry,r.mainDoor],"FUN→LOBBY":[r.funEntry],"FUN→ENGINEERING":[r.engEntry],"FUN→OPS":[r.funEntry,r.opsEntry],"FUN→DESIGN":[r.funEntry,r.opsEntry,r.designEntry],"FUN→OUTSIDE":[r.funEntry,r.mainDoor],"DESIGN→OPS":[r.designEntry],"DESIGN→LOBBY":[r.designEntry,r.opsEntry],"DESIGN→FUN":[r.designEntry,r.opsEntry,r.funEntry],"DESIGN→ENGINEERING":[r.designEntry,r.opsEntry,r.funEntry,r.engEntry],"DESIGN→OUTSIDE":[r.designEntry,r.opsEntry,r.mainDoor],"ENGINEERING→FUN":[r.engEntry],"ENGINEERING→LOBBY":[r.engEntry,r.funEntry],"ENGINEERING→OPS":[r.engEntry,r.funEntry,r.opsEntry],"ENGINEERING→DESIGN":[r.engEntry,r.funEntry,r.opsEntry,r.designEntry],"ENGINEERING→OUTSIDE":[r.engEntry,r.mainDoor]},a=`${e}→${n}`;return[...o[a]??[],s]}const ws=5.5,Zv=5,Lh=2,Ih=12,Yv=1.65,Dh=60,qv=64,$v=57;function Kv(i,t,e){const n={};let s=Math.PI,r=0,o="flat",a=[],c=0,l=!1,h=!1,u=!1,d=.28,f=Zv,g=0,_=0,p=0,m=22,w=38,v=!1;const E={active:!1,x:0,y:0,id:-1,ox:0,oy:0},B={active:!1,lx:0,ly:0,id:-1},T={active:!1,dist:0},b=document.getElementById("vjoy-base"),D=document.getElementById("vjoy-stick");document.addEventListener("keydown",Z=>{if(n[Z.code]=!0,Z.code==="KeyR"&&(i.position.set(0,0,22),s=Math.PI,r=0,a=[],l=!1,Jv("Respawned at Entrance")),Z.code==="Tab"){Z.preventDefault();const st=["flat","overview","third","first"];A(st[(st.indexOf(o)+1)%st.length])}Z.code==="Escape"&&o!=="third"&&A("third")}),document.addEventListener("keyup",Z=>{n[Z.code]=!1}),document.addEventListener("mousemove",Z=>{if(document.pointerLockElement===e){o==="first"&&(r=Math.max(-1.2,Math.min(.5,r-Z.movementY*.002))),s-=Z.movementX*.0025;return}if(h)if(o==="overview"){const st=w*1.534*.9/window.innerHeight;p-=Z.movementX*st,m+=Z.movementY*st,p=Math.max(-60,Math.min(60,p)),m=Math.max(-60,Math.min(60,m)),v=!0,(Math.abs(Z.movementX)>2||Math.abs(Z.movementY)>2)&&(u=!0)}else o==="third"?(s-=Z.movementX*.005,d=Math.max(-.05,Math.min(1,d+Z.movementY*.003)),(Math.abs(Z.movementX)>2||Math.abs(Z.movementY)>2)&&(u=!0)):(s-=Z.movementX*.005,(Math.abs(Z.movementX)>2||Math.abs(Z.movementY)>2)&&(u=!0))}),e.addEventListener("mousedown",Z=>{Z.button===0&&(h=!0,u=!1,o==="overview"&&(e.style.cursor="grabbing"))}),document.addEventListener("mouseup",Z=>{Z.button===0&&(h=!1,o==="overview"&&(e.style.cursor="grab"))}),e.addEventListener("contextmenu",Z=>Z.preventDefault()),e.addEventListener("wheel",Z=>{if(o!=="overview"&&o!=="third")return;Z.preventDefault();const st=Z.deltaMode===0?Z.deltaY:Z.deltaY*24,L=Math.pow(.997,st);if(o==="overview"){const G=w;w=Math.max(14,Math.min(60,w*L));const Q=w-G,et=Math.tan(t.fov*Math.PI/180/2),ft=window.innerWidth/window.innerHeight,pt=Z.clientX/window.innerWidth-.5,Et=-(Z.clientY/window.innerHeight-.5);p-=pt*Q*2*et*ft,m+=Et*Q*2*et,p=Math.max(-60,Math.min(60,p)),m=Math.max(-60,Math.min(60,m)),v=!0}else f=Math.max(Lh,Math.min(Ih,f*L))},{passive:!1}),e.addEventListener("touchstart",Z=>{if(o!=="flat"){Z.preventDefault();for(let st=0;st<Z.changedTouches.length;st++){const L=Z.changedTouches[st];o==="overview"?B.active||(B.active=!0,B.id=L.identifier,B.lx=L.clientX,B.ly=L.clientY,h=!0,u=!1):L.clientX<window.innerWidth*.5&&!E.active?(E.active=!0,E.id=L.identifier,E.ox=L.clientX,E.oy=L.clientY,E.x=0,E.y=0,b&&(b.style.left=L.clientX-40+"px",b.style.top=L.clientY-40+"px",b.style.display="block",D&&(D.style.transform="translate(-50%,-50%)"))):L.clientX>=window.innerWidth*.5&&!B.active&&(B.active=!0,B.id=L.identifier,B.lx=L.clientX,B.ly=L.clientY)}if(Z.touches.length>=2){const st=Z.touches[0],L=Z.touches[1],G=L.clientX-st.clientX,Q=L.clientY-st.clientY;T.active=!0,T.dist=Math.sqrt(G*G+Q*Q)}}},{passive:!1}),e.addEventListener("touchmove",Z=>{if(o!=="flat"){Z.preventDefault();for(let st=0;st<Z.changedTouches.length;st++){const L=Z.changedTouches[st];if(L.identifier===E.id){const G=L.clientX-E.ox,Q=L.clientY-E.oy,et=40,ft=Math.sqrt(G*G+Q*Q),pt=ft>et?et/ft:1;E.x=G*pt/et,E.y=Q*pt/et,D&&(D.style.transform=`translate(calc(-50% + ${G*pt}px), calc(-50% + ${Q*pt}px))`)}if(L.identifier===B.id){const G=L.clientX-B.lx,Q=L.clientY-B.ly;if(o==="overview"){const et=w*1.534*.9/window.innerHeight;p-=G*et,m+=Q*et,p=Math.max(-60,Math.min(60,p)),m=Math.max(-60,Math.min(60,m)),v=!0,(Math.abs(G)>2||Math.abs(Q)>2)&&(u=!0)}else s-=G*.004,d=Math.max(-.05,Math.min(1,d+Q*.003));B.lx=L.clientX,B.ly=L.clientY}}if(T.active&&Z.touches.length>=2){const st=Z.touches[0],L=Z.touches[1],G=L.clientX-st.clientX,Q=L.clientY-st.clientY,et=Math.sqrt(G*G+Q*Q);if(T.dist>0){const ft=T.dist/et;o==="overview"?w=Math.max(14,Math.min(60,w*ft)):o==="third"&&(f=Math.max(Lh,Math.min(Ih,f*ft)))}T.dist=et}}},{passive:!1}),e.addEventListener("touchend",Z=>{if(o!=="flat"){Z.preventDefault();for(let st=0;st<Z.changedTouches.length;st++){const L=Z.changedTouches[st];L.identifier===E.id&&(E.active=!1,E.x=0,E.y=0,E.id=-1,b&&(b.style.display="none")),L.identifier===B.id&&(B.active=!1,B.id=-1,h=!1)}Z.touches.length<2&&(T.active=!1,T.dist=0)}},{passive:!1});function S(Z){a=Xv({x:i.position.x,z:i.position.z},Z),c=0,l=!0,v=!1,o==="overview"&&x(Z)}function x(Z){const st=document.getElementById("overview-marker");if(!st)return;const L=new I(Z.x,0,Z.z);L.project(t),st.style.left=(L.x*.5+.5)*window.innerWidth+"px",st.style.top=(-L.y*.5+.5)*window.innerHeight+"px",st.style.display="block"}function A(Z){var et;o=Z;const st=document.getElementById("overview-panel");st&&(st.style.display=o==="overview"?"flex":"none");const L=document.getElementById("overview-marker");L&&o!=="overview"&&(L.style.display="none"),(o==="third"||o==="overview")&&((et=document.exitPointerLock)==null||et.call(document)),Z!=="third"&&(t.fov=Dh,t.updateProjectionMatrix());const G="ontouchstart"in window||navigator.maxTouchPoints>0,Q=document.getElementById("vjoy-zone");Q&&(Q.style.display=G&&(Z==="third"||Z==="first")?"block":"none"),E.active=!1,E.x=0,E.y=0,b&&(b.style.display="none"),e.style.cursor=o==="overview"?"grab":"pointer",e.style.visibility=o==="flat"?"hidden":"visible",document.querySelectorAll(".vtbtn").forEach(ft=>ft.classList.toggle("active",ft.dataset.view===o))}const W=new I,P=new I,U=new I,q=new I,V=new I,tt=new I(0,1,0);function $(Z){q.copy(i.position);let st=!1;if(o==="flat"){if(U.set(0,0,0),(n.KeyW||n.ArrowUp)&&(U.z-=1),(n.KeyS||n.ArrowDown)&&(U.z+=1),(n.KeyA||n.ArrowLeft)&&(U.x-=1),(n.KeyD||n.ArrowRight)&&(U.x+=1),(n.KeyW||n.KeyS||n.KeyA||n.KeyD||n.ArrowUp||n.ArrowDown||n.ArrowLeft||n.ArrowRight)&&l&&(l=!1,a=[]),l&&a.length>0&&U.lengthSq()===0){const Q=a[c],et=Q.x-i.position.x,ft=Q.z-i.position.z,pt=Math.sqrt(et*et+ft*ft);pt<.25?++c>=a.length&&(l=!1,a=[]):U.set(et/pt,0,ft/pt)}if(U.lengthSq()>0){U.normalize(),i.position.x+=U.x*ws*Z,i.position.z+=U.z*ws*Z;let et=Math.atan2(U.x,U.z)-i.rotation.y;for(;et>Math.PI;)et-=Math.PI*2;for(;et<-Math.PI;)et+=Math.PI*2;i.rotation.y+=et*Math.min(1,20*Z),st=!0}const G=Fa(q,i.position);i.position.set(G.x,0,G.z),t.position.set(i.position.x,60,i.position.z),t.lookAt(i.position.x,0,i.position.z)}else if(o==="overview"){if(l){const G=1-Math.exp(-8*Z);p+=(i.position.x-p)*G,m+=(i.position.z-m)*G,v=!1}else if(!v){const G=1-Math.exp(-5*Z);p+=(i.position.x-p)*G,m+=(i.position.z-m)*G}V.set(p,w,m+1);const L=t.position.distanceTo(V)>22?20:8;if(t.position.lerp(V,1-Math.exp(-L*Z)),t.lookAt(p,0,m),l&&a.length>0){const G=a[c],Q=G.x-i.position.x,et=G.z-i.position.z,ft=Math.sqrt(Q*Q+et*et);ft<.25?++c>=a.length&&(l=!1,a=[]):(i.position.x+=Q/ft*ws*1.4*Z,i.position.z+=et/ft*ws*1.4*Z,i.rotation.y=Math.atan2(Q,et),st=!0)}}else if(o==="third"){const L=rt(Z);st=L.isMoving;const G=Fa(q,i.position);if(i.position.set(G.x,0,G.z),st&&!h){let N=i.rotation.y-s;for(;N>Math.PI;)N-=Math.PI*2;for(;N<-Math.PI;)N+=Math.PI*2;const Bt=L.fromKeys?5:3;s+=N*Bt*Z}const Q=it(i.position.x,i.position.z,s,f),et=Q<f*.85,ft=i.position.y+1.2;g+=Z*12,_+=((st?1:0)-_)*Math.min(1,8*Z);const pt=Math.sin(g)*.035*_;V.set(i.position.x-Math.sin(s)*Math.cos(d)*Q,ft+Math.sin(d)*Q+pt,i.position.z-Math.cos(s)*Math.cos(d)*Q),Q<f*.92?t.position.copy(V):t.position.lerp(V,1-Math.exp(-14*Z)),t.lookAt(i.position.x,ft,i.position.z);const Et=et?$v:st?qv:Dh;t.fov+=(Et-t.fov)*Math.min(1,6*Z),t.updateProjectionMatrix()}else{st=rt(Z).isMoving;const L=Fa(q,i.position);i.position.set(L.x,0,L.z),t.position.set(i.position.x,Yv,i.position.z),t.rotation.order="YXZ",t.rotation.set(r,Math.PI+s,0)}return st}function rt(Z){t.getWorldDirection(W),W.y=0,W.normalize(),P.crossVectors(W,tt).normalize(),U.set(0,0,0),(n.KeyW||n.ArrowUp)&&U.addScaledVector(W,1),(n.KeyS||n.ArrowDown)&&U.addScaledVector(W,-1),(n.KeyA||n.ArrowLeft)&&U.addScaledVector(P,-1),(n.KeyD||n.ArrowRight)&&U.addScaledVector(P,1),E.active&&(U.addScaledVector(W,-E.y),U.addScaledVector(P,E.x),l&&(l=!1,a=[]));const st=n.KeyW||n.KeyS||n.KeyA||n.KeyD||n.ArrowUp||n.ArrowDown||n.ArrowLeft||n.ArrowRight,L=st;if(st&&l&&(l=!1,a=[]),l&&a.length>0&&U.lengthSq()===0){const G=a[c],Q=G.x-i.position.x,et=G.z-i.position.z,ft=Math.sqrt(Q*Q+et*et);ft<.25?++c>=a.length&&(l=!1,a=[]):U.set(Q/ft,0,et/ft)}if(U.lengthSq()>0){U.normalize(),i.position.x+=U.x*ws*Z,i.position.z+=U.z*ws*Z;let Q=Math.atan2(U.x,U.z)-i.rotation.y;for(;Q>Math.PI;)Q-=Math.PI*2;for(;Q<-Math.PI;)Q+=Math.PI*2;return i.rotation.y+=Q*Math.min(1,20*Z),{isMoving:!0,fromKeys:L}}return{isMoving:!1,fromKeys:L}}function it(Z,st,L,G){const Q=-Math.sin(L),et=-Math.cos(L);let ft=G;for(const pt of Ju){const Et=lt(Z,st,Q,et,pt);Et>.3&&Et<ft&&(ft=Et-.25)}return Math.max(.8,ft)}function lt(Z,st,L,G,Q){const et=L===0?1e10:1/L,ft=G===0?1e10:1/G,pt=(Q.minX-Z)*et,Et=(Q.maxX-Z)*et,N=(Q.minZ-st)*ft,Bt=(Q.maxZ-st)*ft,Wt=Math.max(Math.min(pt,Et),Math.min(N,Bt)),ie=Math.min(Math.max(pt,Et),Math.max(N,Bt));return ie<.001||Wt>ie?1/0:Wt>.001?Wt:1/0}return A(o),{update:$,navigate:S,setMode:A,getMode:()=>o,isDragMoved:()=>u,setNavPath:Z=>{a=Z,c=0,l=!0}}}function Jv(i){const t=document.getElementById("hud-toast");t&&(t.textContent=i,t.classList.add("show"),clearTimeout(t._t),t._t=setTimeout(()=>t.classList.remove("show"),2e3))}function jv(i){const t=[];return Qv(i,t),tx(i,t),ex(i,t),nx(i,t),ix(i,t),{colliders:t}}const ne={oak:()=>new It({color:11565120,roughness:.82,metalness:0}),white:()=>new It({color:15789284,roughness:.72,metalness:0}),dark:()=>new It({color:3024928,roughness:.62,metalness:.08}),metal:()=>new It({color:9474200,roughness:.38,metalness:.8}),chair:()=>new It({color:2767456,roughness:.82,metalness:0}),pink:()=>new It({color:13656192,roughness:.72,metalness:0}),green:()=>new It({color:4761712,roughness:.72,metalness:0}),amber:()=>new It({color:15241280,roughness:.72,metalness:0}),blue:()=>new It({color:4227264,roughness:.72,metalness:0}),screen:()=>new It({color:1054752,emissive:1056832,emissiveIntensity:.6,roughness:.08}),bean:()=>new It({color:9453728,roughness:.92,metalness:0}),sofa:()=>new It({color:4878400,roughness:.88,metalness:0})};function Sn(i,t,e,n,s,r,o,a,c,l=.12){const h=new St(new $t(r,o,a),t);return h.position.set(e,n,s),i.add(h),c&&c.push({minX:e-r/2-l,maxX:e+r/2+l,minZ:s-a/2-l,maxZ:s+a/2+l}),h}function Si(i,t,e,n,s,r,o){const a=o??ne.oak(),c=.76,l=.06,h=c-l,u=.05;Sn(i,a,t,c-l/2,e,n,l,s,r,.1);const d=[t-n/2+.12,t+n/2-.12],f=[e-s/2+.12,e+s/2-.12];d.forEach(g=>f.forEach(_=>{const p=new St(new ze(u,u,h,6),ne.metal());p.position.set(g,h/2,_),i.add(p)}))}function un(i,t,e,n=0,s,r){const o=r??ne.chair(),a=new Qn;a.position.set(t,0,e),a.rotation.y=n,i.add(a);const c=new St(new $t(.5,.07,.5),o);c.position.y=.46,a.add(c);const l=new St(new $t(.5,.52,.06),o);l.position.set(0,.75,-.22),a.add(l);const h=ne.metal();[[-.2,-.2],[.2,-.2],[-.2,.2],[.2,.2]].forEach(([u,d])=>{const f=new St(new ze(.03,.03,.46,5),h);f.position.set(u,.23,d),a.add(f)}),s&&s.push({minX:t-.35,maxX:t+.35,minZ:e-.35,maxZ:e+.35})}function bn(i,t,e,n,s=0){const r=new Qn;r.position.set(t,e,n),r.rotation.y=s,i.add(r);const o=new St(new $t(.54,.32,.04),ne.screen());o.position.y=.22,r.add(o);const a=new St(new ze(.015,.015,.18,5),ne.metal());a.position.y=.07,r.add(a);const c=new St(new $t(.22,.02,.14),ne.metal());c.position.y=0,r.add(c)}function Ln(i,t,e){const n=new St(new ze(.15,.1,.3,7),ne.amber());n.position.set(t,.15,e),i.add(n);const s=new St(new we(.3,8,6),ne.green());s.position.set(t,.55,e),i.add(s)}function Qv(i,t){Si(i,-11,-14,4.5,2,t),un(i,-11-2.6,-14-.5,0,t),un(i,-11-2.6,-14+.5,0,t),un(i,-11+2.6,-14-.5,Math.PI,t),un(i,-11+2.6,-14+.5,Math.PI,t),un(i,-11,-14-1.2,Math.PI/2,t,ne.pink()),un(i,-11,-14+1.2,-Math.PI/2,t,ne.pink());const s=new St(new $t(5,2.4,.06),new It({color:16448248,roughness:.5}));s.position.set(-11,1.8,R.minZ+.1),i.add(s),Sn(i,ne.white(),R.minX+.5,1,-18,.5,2,3,t),Si(i,R.minX+1.2,-12,2,.8,t),bn(i,R.minX+1,.76,-14+1.8,Math.PI/2),bn(i,R.minX+1,.76,-14+2.2,Math.PI/2),un(i,R.minX+2,-12,Math.PI/2,t,ne.pink()),Ln(i,R.minX+.5,R.midZ+.6),Ln(i,-3,R.minZ+.6)}function tx(i,t){[-20,-16,-12,-8].forEach(r=>{Si(i,R.maxX-1.4,r,1.8,.7,t,ne.white()),bn(i,R.maxX-1.1,.76,r-.18,-Math.PI/2),bn(i,R.maxX-1.1,.76,r+.18,-Math.PI/2),un(i,R.maxX-2.5,r,-Math.PI/2,t,ne.blue())}),Sn(i,ne.dark(),7,1.1,R.minZ+.6,.8,2.2,.6,t),Sn(i,ne.dark(),8,1.1,R.minZ+.6,.8,2.2,.6,t),Sn(i,ne.dark(),9,1.1,R.minZ+.6,.8,2.2,.6,t),[-4,-3,-2].forEach(r=>{const o=new St(new $t(.6,.02,.4),new It({color:65348,emissive:65348,emissiveIntensity:3}));o.position.set(11+r,1.6,R.minZ+.32),i.add(o)}),Si(i,11,-13,3,.75,t),Si(i,11,-15,3,.75,t),bn(i,11-.8,.76,-13),bn(i,11,.76,-13),bn(i,11+.8,.76,-13),bn(i,11-.8,.76,-15,Math.PI),bn(i,11,.76,-15,Math.PI),bn(i,11+.8,.76,-15,Math.PI),[-1,0,1].forEach(r=>{un(i,11+r,-14+1.8,Math.PI,t,ne.blue()),un(i,11+r,-14-1.8,0,t,ne.blue())}),Ln(i,R.maxX-.5,R.midZ+.6),Ln(i,15,R.minZ+.6)}function ex(i,t){const s=new St(new ze(1.4,1.4,.06,16),ne.oak());s.position.set(-11,.74,0),i.add(s),t.push({minX:-11-1.6,maxX:-11+1.6,minZ:0-1.6,maxZ:0+1.6});for(let o=0;o<4;o++){const a=o*Math.PI/2+Math.PI/4,c=new St(new ze(.04,.04,.74,6),ne.metal());c.position.set(-11+Math.cos(a)*1.1,.37,0+Math.sin(a)*1.1),i.add(c)}for(let o=0;o<6;o++){const a=o/6*Math.PI*2,c=2;un(i,-11+Math.cos(a)*c,0+Math.sin(a)*c,a+Math.PI,null,ne.amber())}const r=new St(new $t(3.5,2,.08),ne.screen());r.position.set(-11,2.1,R.minX+.1),r.rotation.y=Math.PI/2,i.add(r),Sn(i,ne.white(),R.minX+.5,.45,0+2.5,.5,.9,2,t),Ln(i,R.minX+.5,R.lobbyZ-.6),Ln(i,-3,R.midZ+.5)}function nx(i,t){Sn(i,ne.sofa(),11-2.5,.44,0+1.5,3.2,.88,1,t,.1),Sn(i,ne.sofa(),11-3.5,.44,0,1,.88,2.2,t,.1),Si(i,11-1.8,0-.2,1.2,.7,t);const s=ne.bean();for(let c=0;c<3;c++){const l=14+c*1.4,h=new St(new we(.42,10,8),s);h.scale.y=.65,h.position.set(l,.28,0),i.add(h),t.push({minX:l-.55,maxX:l+.55,minZ:0-.55,maxZ:0+.55})}const r=new It({color:2228292,roughness:.6,metalness:.3});Sn(i,r,R.maxX-1,1.1,0+2.5,.9,2.2,.7,t);const o=new St(new $t(.55,.44,.04),new It({color:2245887,emissive:1127406,emissiveIntensity:1.5}));o.position.set(R.maxX-.72,1.6,0+2.15),i.add(o),Si(i,11+1.5,0-2.5,1.6,.8,t,ne.dark());const a=new St(new $t(4,2.2,.08),ne.screen());a.position.set(9,2.3,R.maxX-.1),a.rotation.y=-Math.PI/2,i.add(a),Ln(i,R.maxX-.5,R.lobbyZ-.6),Ln(i,7,R.midZ+.5)}function ix(i,t){const e=(R.lobbyZ+R.maxZ)/2;Sn(i,ne.white(),-8,.9,e-1,3,1.8,.7,t),[6,8,10].forEach(c=>{un(i,c,e+.5,Math.PI,t,ne.amber())}),Si(i,8,e+1.8,1.5,.6,t);const n=new St(new Lc(2.2,32),new It({color:2245802,roughness:.4}));n.rotation.x=-Math.PI/2,n.position.set(0,.07,e),i.add(n);const s=document.createElement("canvas");s.width=512,s.height=128;const r=s.getContext("2d");r.fillStyle="#3366ff",r.font="bold 72px Inter, sans-serif",r.textAlign="center",r.fillText("SPACEWORK",256,88);const o=new St(new ti(4,1),new It({map:new ko(s),roughness:.4,transparent:!0}));o.rotation.x=-Math.PI/2,o.position.set(0,.08,e),i.add(o),Ln(i,-5,R.maxZ-1.2),Ln(i,5,R.maxZ-1.2),Sn(i,ne.metal(),0,1,R.lobbyZ+1.5,.4,2,.4,t);const a=new St(new $t(.38,.28,.04),ne.screen());a.position.set(0,1.9,R.lobbyZ+1.28),i.add(a)}const sx="#0f1117",rx="rgba(34,58,28,0.95)",ox="rgba(230,225,215,0.12)",ax=[{name:"LOBBY",x1:R.minX,x2:R.maxX,z1:R.lobbyZ,z2:R.maxZ,fill:"rgba(180,175,210,0.18)",border:"rgba(180,175,220,0.55)",label:"#ccc"},{name:"OPS",x1:R.minX,x2:R.centerX,z1:R.midZ,z2:R.lobbyZ,fill:"rgba(200,115,20,0.20)",border:"rgba(220,130,30,0.60)",label:"#fa9"},{name:"FUN",x1:R.centerX,x2:R.maxX,z1:R.midZ,z2:R.lobbyZ,fill:"rgba(20,170,90,0.20)",border:"rgba(30,200,100,0.55)",label:"#6fb"},{name:"DESIGN",x1:R.minX,x2:R.centerX,z1:R.minZ,z2:R.midZ,fill:"rgba(190,45,95,0.20)",border:"rgba(220,60,110,0.55)",label:"#f9b"},{name:"ENGINEERING",x1:R.centerX,x2:R.maxX,z1:R.minZ,z2:R.midZ,fill:"rgba(25,90,200,0.20)",border:"rgba(40,120,230,0.55)",label:"#8bf"}],hn=R.doorHalfW,nc=R.mainDoorHalfW,Ps=R.leftDoorX,Ls=R.rightDoorX,cx=[[R.minX,R.maxZ,-nc,R.maxZ],[nc,R.maxZ,R.maxX,R.maxZ],[R.minX,R.minZ,R.maxX,R.minZ],[R.minX,R.minZ,R.minX,R.maxZ],[R.maxX,R.minZ,R.maxX,R.maxZ],[R.minX,R.lobbyZ,Ps-hn,R.lobbyZ],[Ps+hn,R.lobbyZ,Ls-hn,R.lobbyZ],[Ls+hn,R.lobbyZ,R.maxX,R.lobbyZ],[R.minX,R.midZ,Ps-hn,R.midZ],[Ps+hn,R.midZ,Ls-hn,R.midZ],[Ls+hn,R.midZ,R.maxX,R.midZ],[R.centerX,R.minZ,R.centerX,R.lobbyZ]];class lx{constructor(t){this._nav=t,this._peers=new Map;const e=document.createElement("canvas");e.id="flat-map-canvas",Object.assign(e.style,{position:"fixed",inset:"0",width:"100%",height:"100%",zIndex:"6",display:"none",cursor:"crosshair"}),document.body.appendChild(e),this._cvs=e,this._ctx=e.getContext("2d"),this._zoom=14,this._panX=0,this._panZ=-6,this._dragging=!1,this._dragMoved=!1,this._lx=0,this._ly=0,this._ping=null,this._setupMouse(),this._setupTouch(),this._resize(),window.addEventListener("resize",()=>this._resize())}show(){this._cvs.style.display="block"}hide(){this._cvs.style.display="none"}setPeer(t,e,n,s){this._peers.set(t,{x:e,z:n,name:s})}removePeer(t){this._peers.delete(t)}setTalking(t){this._talking=t}update(t){const e=this._cvs.width,n=this._cvs.height,s=this._ctx;s.clearRect(0,0,e,n),this._drawBg(s,e,n),this._drawGrid(s,e,n),this._drawBuilding(s),this._drawRooms(s),this._drawWalls(s),this._drawDoors(s),this._drawPeers(s),this._drawPlayer(s,t),this._drawNavPing(s),this._drawHints(s,e,n)}_fire(t,e){const[n,s]=this._c2w(t,e);this._nav({x:n,z:s}),this._ping={cx:t,cy:e,born:performance.now()}}centreOn(t,e){this._panX=t,this._panZ=e}_w2c(t,e){const n=this._cvs.width/2+(t-this._panX)*this._zoom,s=this._cvs.height/2+(e-this._panZ)*this._zoom;return[n,s]}_c2w(t,e){const n=(t-this._cvs.width/2)/this._zoom+this._panX,s=(e-this._cvs.height/2)/this._zoom+this._panZ;return[n,s]}_wr(t){return t*this._zoom}_setupMouse(){const t=this._cvs;t.addEventListener("wheel",e=>{e.preventDefault();const n=t.getBoundingClientRect(),s=e.clientX-n.left,r=e.clientY-n.top,[o,a]=this._c2w(s,r),c=e.deltaMode===0?e.deltaY:e.deltaY*24,l=Math.pow(.997,c);this._zoom=Math.max(6,Math.min(55,this._zoom*l));const[h,u]=this._c2w(s,r);this._panX+=o-h,this._panZ+=a-u},{passive:!1}),t.addEventListener("mousedown",e=>{this._dragging=!0,this._dragMoved=!1,this._lx=e.clientX,this._ly=e.clientY,t.style.cursor="grabbing"}),document.addEventListener("mousemove",e=>{if(!this._dragging)return;const n=e.clientX-this._lx,s=e.clientY-this._ly;this._panX-=n/this._zoom,this._panZ-=s/this._zoom,this._lx=e.clientX,this._ly=e.clientY,(Math.abs(n)>4||Math.abs(s)>4)&&(this._dragMoved=!0)}),document.addEventListener("mouseup",e=>{if(!this._dragging||(this._dragging=!1,t.style.cursor="crosshair",this._dragMoved))return;const n=t.getBoundingClientRect();this._fire(e.clientX-n.left,e.clientY-n.top)})}_setupTouch(){const t=this._cvs;let e=0,n=0,s=!1,r=0;t.addEventListener("touchstart",o=>{if(o.preventDefault(),s=!1,o.touches.length===1)e=o.touches[0].clientX,n=o.touches[0].clientY,this._lx=e,this._ly=n;else if(o.touches.length===2){const a=o.touches[1].clientX-o.touches[0].clientX,c=o.touches[1].clientY-o.touches[0].clientY;r=Math.sqrt(a*a+c*c)}},{passive:!1}),t.addEventListener("touchmove",o=>{if(o.preventDefault(),o.touches.length===1){const a=o.touches[0].clientX-this._lx,c=o.touches[0].clientY-this._ly;this._panX-=a/this._zoom,this._panZ-=c/this._zoom,this._lx=o.touches[0].clientX,this._ly=o.touches[0].clientY,(Math.abs(a)>4||Math.abs(c)>4)&&(s=!0)}else if(o.touches.length===2){const a=o.touches[1].clientX-o.touches[0].clientX,c=o.touches[1].clientY-o.touches[0].clientY,l=Math.sqrt(a*a+c*c),h=l/(r||l),u=(o.touches[0].clientX+o.touches[1].clientX)/2,d=(o.touches[0].clientY+o.touches[1].clientY)/2,[f,g]=this._c2w(u,d);this._zoom=Math.max(6,Math.min(55,this._zoom*h));const[_,p]=this._c2w(u,d);this._panX+=f-_,this._panZ+=g-p,r=l,s=!0}},{passive:!1}),t.addEventListener("touchend",o=>{if(o.touches.length===0&&!s&&o.changedTouches.length===1){const a=t.getBoundingClientRect();this._fire(o.changedTouches[0].clientX-a.left,o.changedTouches[0].clientY-a.top)}},{passive:!1})}_resize(){this._cvs.width=window.innerWidth,this._cvs.height=window.innerHeight}_drawBg(t,e,n){t.fillStyle=sx,t.fillRect(0,0,e,n)}_drawGrid(t,e,n){const s=this._zoom*4;if(s<10)return;t.strokeStyle="rgba(255,255,255,0.04)",t.lineWidth=1;const r=(e/2-this._panX*this._zoom)%s;for(let a=r;a<e;a+=s)t.beginPath(),t.moveTo(a,0),t.lineTo(a,n),t.stroke();const o=(n/2-this._panZ*this._zoom)%s;for(let a=o;a<n;a+=s)t.beginPath(),t.moveTo(0,a),t.lineTo(e,a),t.stroke()}_drawBuilding(t){const[e,n]=this._w2c(R.minX-20,R.minZ-20),[s,r]=this._w2c(R.maxX+20,R.maxZ+20);t.fillStyle=rx,t.fillRect(Math.min(e,s),Math.min(n,r),Math.abs(s-e),Math.abs(r-n));const[o,a]=this._w2c(R.minX,R.maxZ),[c,l]=this._w2c(R.maxX,R.minZ);t.fillStyle=ox,t.fillRect(Math.min(o,c),Math.min(a,l),Math.abs(c-o),Math.abs(l-a))}_drawRooms(t){ax.forEach(e=>{const[n,s]=this._w2c(e.x1,e.z2),[r,o]=this._w2c(e.x2,e.z1),a=Math.min(n,r),c=Math.min(s,o),l=Math.abs(r-n),h=Math.abs(o-s);t.fillStyle=e.fill,t.fillRect(a,c,l,h),t.strokeStyle=e.border,t.lineWidth=1.5,t.strokeRect(a+1,c+1,l-2,h-2),l>50&&h>30&&(t.fillStyle=e.label,t.font=`bold ${Math.max(9,Math.min(13,l*.11))}px Inter, monospace`,t.textAlign="center",t.textBaseline="middle",t.shadowColor="rgba(0,0,0,0.8)",t.shadowBlur=4,t.fillText(e.name,a+l/2,c+h/2),t.shadowBlur=0)})}_drawWalls(t){t.strokeStyle="#4a4a6a",t.lineWidth=Math.max(2,this._wr(R.wallT)*.8),t.lineCap="round",cx.forEach(([e,n,s,r])=>{const[o,a]=this._w2c(e,n),[c,l]=this._w2c(s,r);t.beginPath(),t.moveTo(o,a),t.lineTo(c,l),t.stroke()})}_drawDoors(t){const e=[{x:0,z:R.maxZ,w:nc*2},{x:Ps,z:R.lobbyZ,w:hn*2},{x:Ls,z:R.lobbyZ,w:hn*2},{x:Ps,z:R.midZ,w:hn*2},{x:Ls,z:R.midZ,w:hn*2}];t.strokeStyle="rgba(255,220,100,0.60)",t.lineWidth=Math.max(3,this._wr(R.wallT)*.9),t.lineCap="square",e.forEach(n=>{const[s,r]=this._w2c(n.x,n.z),o=this._wr(n.w/2);Math.abs(n.z-R.maxZ)<.1||Math.abs(n.z-R.lobbyZ)<.1||Math.abs(n.z-R.midZ)<.1?(t.beginPath(),t.moveTo(s-o,r),t.lineTo(s+o,r),t.stroke()):(t.beginPath(),t.moveTo(s,r-o),t.lineTo(s,r+o),t.stroke())})}_drawPeers(t){const e=performance.now()/1e3;this._peers.forEach(({x:n,z:s,name:r},o)=>{var u;const[a,c]=this._w2c(n,s),l=Math.max(5,this._wr(.4)),h=(u=this._talking)==null?void 0:u.has(o);if(h){const d=.5+Math.sin(e*6)*.5,f=l+4+d*4;t.beginPath(),t.arc(a,c,f,0,Math.PI*2),t.strokeStyle=`rgba(0,255,136,${.6+d*.4})`,t.lineWidth=2.5,t.shadowColor="#00ff88",t.shadowBlur=10,t.stroke(),t.shadowBlur=0}t.beginPath(),t.arc(a,c,l,0,Math.PI*2),t.fillStyle=h?"rgba(0,255,120,0.9)":"rgba(255,120,150,0.85)",t.fill(),t.strokeStyle=h?"#00ff88":"#ff88aa",t.lineWidth=1.5,t.stroke(),l>5&&(t.fillStyle="#fff",t.font=`bold ${Math.max(8,l*1.1)}px Inter,monospace`,t.textAlign="center",t.textBaseline="bottom",t.shadowColor="#000",t.shadowBlur=3,t.fillText(r,a,c-l-2),t.shadowBlur=0)})}_drawPlayer(t,e){var h;const[n,s]=this._w2c(e.x,e.z),r=Math.max(6,this._wr(.45)),o=performance.now()/600,a=r+Math.sin(o)*r*.35,c=(h=this._talking)==null?void 0:h.has("self"),l=performance.now()/1e3;if(c){const u=.5+Math.sin(l*6)*.5,d=r+5+u*5;t.beginPath(),t.arc(n,s,d,0,Math.PI*2),t.strokeStyle=`rgba(0,255,136,${.7+u*.3})`,t.lineWidth=3,t.shadowColor="#00ff88",t.shadowBlur=14,t.stroke(),t.shadowBlur=0}else t.beginPath(),t.arc(n,s,a,0,Math.PI*2),t.strokeStyle="rgba(0,255,255,0.25)",t.lineWidth=2,t.stroke();t.shadowColor=c?"#00ff88":"#00ffff",t.shadowBlur=10,t.beginPath(),t.arc(n,s,r,0,Math.PI*2),t.fillStyle=c?"#00ff88":"#00e5ff",t.fill(),t.shadowBlur=0,t.fillStyle="#fff",t.font=`bold ${Math.max(9,r*1.2)}px Inter,monospace`,t.textAlign="center",t.textBaseline="bottom",t.shadowColor="#000",t.shadowBlur=3,t.fillText("YOU",n,s-r-3),t.shadowBlur=0}_drawNavPing(t){if(!this._ping)return;const e=performance.now()-this._ping.born,n=600;if(e>n){this._ping=null;return}const s=e/n,r=1-s,o=8+s*18,{cx:a,cy:c}=this._ping;t.globalAlpha=r,t.strokeStyle="#ffffff",t.lineWidth=2;const l=6;t.beginPath(),t.moveTo(a-l,c),t.lineTo(a+l,c),t.moveTo(a,c-l),t.lineTo(a,c+l),t.stroke(),t.strokeStyle="#00ffff",t.lineWidth=1.5,t.beginPath(),t.arc(a,c,o,0,Math.PI*2),t.stroke(),t.globalAlpha=1}_drawHints(t,e,n){t.fillStyle="rgba(255,255,255,0.22)",t.font="11px Inter, monospace",t.textAlign="center",t.textBaseline="bottom",t.fillText("Click to walk  ·  Scroll to zoom  ·  Drag to pan  ·  WASD to move",e/2,n-8)}}const fo=i=>"#"+i.toString(16).padStart(6,"0");class hx{constructor(t){this._onSelect=t,this._selected=parseInt(localStorage.getItem("spaceAvatarId")??"0",10),this._el=this._build(),document.body.appendChild(this._el)}show(){this._el.classList.remove("ap-hidden"),this._sync()}hide(){this._el.classList.add("ap-hidden")}getSelected(){return this._selected}_build(){const t=document.createElement("div");return t.id="avatar-picker",t.className="ap-hidden",t.innerHTML=`
      <div class="ap-panel">
        <div class="ap-head">
          <span class="ap-title">Choose Your Avatar</span>
          <button class="ap-close" aria-label="Close">✕</button>
        </div>
        <div class="ap-grid">
          ${Ji.map(e=>this._card(e)).join("")}
        </div>
        <p class="ap-hint">Your selection is saved automatically</p>
      </div>
    `,t.querySelector(".ap-close").addEventListener("click",()=>this.hide()),t.addEventListener("click",e=>{e.target===t&&this.hide()}),t.querySelectorAll(".ap-card").forEach(e=>{e.addEventListener("click",()=>{const n=parseInt(e.dataset.id,10);this._selected=n,localStorage.setItem("spaceAvatarId",String(n)),this._sync(),this._onSelect(n)})}),t}_sync(){this._el.querySelectorAll(".ap-card").forEach(t=>t.classList.toggle("ap-active",parseInt(t.dataset.id,10)===this._selected))}_card(t){const e=fo(t.skin),n=fo(t.hair),s=fo(t.outfit),r=fo(t.accent);return`
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
    `}}const ux=[{name:"OUTSIDE",color:"#88cc66",mapColor:"rgba(70,120,50,0.35)",border:"#66aa44",desc:"Outside the building"},{name:"LOBBY",color:"#ffffff",mapColor:"rgba(200,200,230,0.40)",border:"#aaaacc",desc:"Reception & Entrance"},{name:"OPS",color:"#ffaa44",mapColor:"rgba(200,120,20,0.40)",border:"#ffaa44",desc:"Operations & Support"},{name:"FUN",color:"#44ffaa",mapColor:"rgba(20,180,100,0.40)",border:"#44ffaa",desc:"Chill & Social"},{name:"DESIGN",color:"#ff6ba0",mapColor:"rgba(200,50,100,0.40)",border:"#ff6ba0",desc:"UI/UX & 3D Design"},{name:"ENGINEERING",color:"#44aaff",mapColor:"rgba(30,100,200,0.40)",border:"#44aaff",desc:"Development & Code"}],re={minX:-26,maxX:26,minZ:-27,maxZ:28,W:180,H:200};let dr,_n;function dx(i,t,e,n,s){const r=window._spaceUsername||"You",o=parseInt(localStorage.getItem("spaceAvatarId")??"0",10),a=Vu(r,o);a.position.set(0,0,22),i.add(a);const c=new hx(b=>{Zu(a,r,b),s==null||s(b)}),l=document.getElementById("avatar-btn");l&&l.addEventListener("click",()=>c.show());const{colliders:h}=jv(i);Gv(h);const u=Kv(a,t,e.domElement),d=new Gu;let f="",g=u.getMode();const _=new lx(b=>u.navigate(b)),p=[],m=[];i.traverse(b=>{b.userData.mapHide&&p.push(b),b.userData.mapShow&&m.push(b)}),p.forEach(b=>{b.visible=!1}),m.forEach(b=>{b.visible=!1}),_.centreOn(a.position.x,a.position.z),_.show();const w=document.getElementById("minimap");w&&(w.style.display="none");function v(b){p.forEach(S=>{S.visible=b!=="overview"&&b!=="flat"}),m.forEach(S=>{S.visible=b==="overview"}),a.visible=b!=="first",b==="flat"?(_.centreOn(a.position.x,a.position.z),_.show()):_.hide();const D=document.getElementById("minimap");D&&(D.style.display=b==="flat"?"none":"")}fx(u);function E(){const b=Ro(a.position);b!==f&&(f=b,n==null||n(f))}function B(){const b=document.getElementById("mode-badge");if(!b)return;const D=u.getMode(),S={flat:"🎮 FLAT MAP",overview:"🗺 3D MAP",third:"👤 3RD PERSON",first:"👁 1ST PERSON"};b.textContent=S[D]??D;const x=D==="flat"||D==="overview";b.style.background=x?"rgba(255,160,0,0.2)":"rgba(0,100,255,0.2)",b.style.borderColor=x?"rgba(255,160,0,0.4)":"rgba(0,150,255,0.4)",b.style.color=x?"#ffaa00":"#4af"}function T(){requestAnimationFrame(T);const b=d.getDelta(),D=u.update(b);qu(a,D,b),E(),B();const S=u.getMode();S!==g&&(g=S,v(S)),gx(a.position,S),S==="flat"&&_.update(a.position)}return T(),{getPosition:()=>a.position.clone(),getRotation:()=>a.rotation.clone(),navigate:b=>u.navigate(b),isDragMoved:()=>u.isDragMoved(),getMode:()=>u.getMode(),setView:b=>{u.setMode(b),v(b)},setStatus:b=>Wu(a,b),setSelfTalking:(b,D)=>Xu(a,b,D),setTalkingPeers:b=>_.setTalking(b),peerJoin:(b,D)=>_.setPeer(b,0,0,D),peerMove:(b,D,S,x)=>_.setPeer(b,D,S,x),peerLeave:b=>_.removePeer(b)}}function fx(i,t){const e=document.getElementById("minimap-canvas");e&&(e.style.cursor="crosshair",e.addEventListener("click",n=>{const s=e.getBoundingClientRect(),r=(n.clientX-s.left)/s.width*re.W,o=(n.clientY-s.top)/s.height*re.H,a=re.minX+r/re.W*(re.maxX-re.minX),c=re.maxZ-o/re.H*(re.maxZ-re.minZ);i.navigate({x:a,z:c}),px(r,o)}))}function px(i,t){_n&&(_n.strokeStyle="#fff",_n.lineWidth=1.5,_n.globalAlpha=.9,_n.beginPath(),_n.arc(i,t,7,0,Math.PI*2),_n.stroke(),_n.globalAlpha=1)}function mx(){dr=document.getElementById("minimap-canvas"),dr&&(dr.width=re.W,dr.height=re.H,_n=dr.getContext("2d"))}function bs(i,t){const e=(i-re.minX)/(re.maxX-re.minX)*re.W,n=(re.maxZ-t)/(re.maxZ-re.minZ)*re.H;return[e,n]}function gx(i,t){if(!_n){mx();return}const e=_n;e.clearRect(0,0,re.W,re.H),e.fillStyle="rgba(50,90,40,0.5)",e.fillRect(0,0,re.W,re.H);const[n,s]=bs(R.minX,R.maxZ),[r,o]=bs(R.maxX,R.minZ);e.fillStyle="rgba(240,235,225,0.25)",e.fillRect(n,s,r-n,o-s),[{name:"LOBBY",x1:R.minX,x2:R.maxX,z1:R.lobbyZ,z2:R.maxZ},{name:"OPS",x1:R.minX,x2:R.centerX,z1:R.midZ,z2:R.lobbyZ},{name:"FUN",x1:R.centerX,x2:R.maxX,z1:R.midZ,z2:R.lobbyZ},{name:"DESIGN",x1:R.minX,x2:R.centerX,z1:R.minZ,z2:R.midZ},{name:"ENGINEERING",x1:R.centerX,x2:R.maxX,z1:R.minZ,z2:R.midZ}].forEach(u=>{const d=ux.find(v=>v.name===u.name);if(!d)return;const[f,g]=bs(u.x1,u.z2),[_,p]=bs(u.x2,u.z1);e.fillStyle=d.mapColor,e.fillRect(f,g,_-f,p-g),e.strokeStyle=d.border+"88",e.lineWidth=1,e.strokeRect(f+.5,g+.5,_-f-1,p-g-1),e.fillStyle=d.border,e.font="bold 7px Inter, monospace",e.textAlign="center";const m=(f+_)/2,w=g+10;e.fillText(u.name,m,w)}),[{x:0,z:R.maxZ,label:"🚪"},{x:-11,z:R.lobbyZ,label:"▶"},{x:11,z:R.lobbyZ,label:"▶"},{x:-11,z:R.midZ,label:"▶"},{x:11,z:R.midZ,label:"▶"}].forEach(({x:u,z:d,label:f})=>{const[g,_]=bs(u,d);e.fillStyle="rgba(255,255,255,0.7)",e.font="8px sans-serif",e.textAlign="center",e.fillText(f,g,_+3)}),e.strokeStyle="rgba(220,210,190,0.5)",e.lineWidth=1.5,e.strokeRect(n,s,r-n,o-s),t==="overview"&&(e.strokeStyle="rgba(255,160,0,0.7)",e.lineWidth=2,e.strokeRect(2,2,re.W-4,re.H-4),e.fillStyle="rgba(255,160,0,0.06)",e.fillRect(2,2,re.W-4,re.H-4));const[l,h]=bs(i.x,i.z);e.shadowColor="#00ffff",e.shadowBlur=8,e.fillStyle="#00ffff",e.beginPath(),e.arc(l,h,5,0,Math.PI*2),e.fill(),e.shadowBlur=0,e.fillStyle="#fff",e.font="bold 7px Inter, monospace",e.textAlign="center",e.shadowColor="#0ff",e.shadowBlur=4,e.fillText("YOU",l,h-8),e.shadowBlur=0,e.fillStyle="rgba(255,255,255,0.28)",e.font="7px Inter, monospace",e.textAlign="center",e.fillText("click map to move",re.W/2,re.H-4)}function _x(){const i=document.getElementById("screen-overlay"),t=document.getElementById("screen-iframe"),e=document.getElementById("screen-overlay-close"),n=document.getElementById("screen-overlay-title"),s=document.getElementById("screen-overlay-tool"),r=document.getElementById("screen-overlay-zone");if(!i)return console.warn("[screenOverlay] #screen-overlay not found in DOM"),{openScreen:()=>{},closeScreen:()=>{},isOpen:()=>!1};e.addEventListener("click",a),i.addEventListener("click",l=>{l.target===i&&a()}),document.addEventListener("keydown",l=>{l.code==="Escape"&&i.classList.contains("visible")&&(a(),l.stopPropagation())},!0);function o(l){var h;if(n.textContent=l.label,s.textContent=l.tool,r){r.textContent=l.zone;const u={BRIDGE:"#4466ff",LAB:"#00ffcc",LOUNGE:"#aa55ff"};r.style.color=u[l.zone]||"#fff"}t.src=l.url,i.classList.add("visible"),(h=document.exitPointerLock)==null||h.call(document)}function a(){i.classList.remove("visible"),setTimeout(()=>{t.src=""},200)}function c(){return i.classList.contains("visible")}return{openScreen:o,closeScreen:a,isOpen:c}}function Nh(...i){const t=i.join("\0");let e=5381;for(let n=0;n<t.length;n++)e=(Math.imul(33,e)^t.charCodeAt(n))>>>0;return e.toString(36).padStart(7,"0")}class Co{constructor(t,e=0){this.id=Nh(t,String(e)),this.seed=t,this.epoch=e,this.resonance=1}tick(){return this.epoch++,this}harmonisesWith(t,e=.51){return this.resonance>=e&&t.resonance>=e}static merge(t,e){const[n,s]=t.id<e.id?[t,e]:[e,t];return new Co(Nh(n.id,s.id),Math.max(n.epoch,s.epoch))}toString(){return`freq:${this.id}@${this.epoch}`}}class Oc{constructor(t={}){this._v=new Map(Object.entries(t))}tick(t){return this._v.set(t,(this._v.get(t)||0)+1),this}get(t){return this._v.get(t)||0}merge(t){for(const[e,n]of t._v)this._v.set(e,Math.max(this.get(e),n));return this}clone(){return new Oc(Object.fromEntries(this._v))}compare(t){const e=new Set([...this._v.keys(),...t._v.keys()]);let n=!1,s=!1;for(const r of e){const o=this.get(r),a=t.get(r);o<a&&(n=!0),o>a&&(s=!0)}return!n&&!s?"equal":n&&!s?"before":!n&&s?"after":"concurrent"}happensBefore(t){return this.compare(t)==="before"}toJSON(){return Object.fromEntries(this._v)}}class Fc{constructor(){this._entries=new Map}set(t,e,n,s){const r=this._entries.get(t);if(!r)return this._entries.set(t,{value:e,clock:n.clone(),nodeId:s}),!0;const o=n.compare(r.clock);return o==="after"||o==="concurrent"&&s>r.nodeId?(this._entries.set(t,{value:e,clock:n.clone(),nodeId:s}),!0):!1}get(t){var e;return(e=this._entries.get(t))==null?void 0:e.value}has(t){return this._entries.has(t)}keys(){return this._entries.keys()}entries(){return[...this._entries.entries()].map(([t,e])=>[t,e.value])}merge(t){for(const[e,{value:n,clock:s,nodeId:r}]of t._entries)this.set(e,n,s,r);return this}clone(){const t=new Fc;for(const[e,n]of this._entries)t._entries.set(e,{...n,clock:n.clock.clone()});return t}size(){return this._entries.size}}class Uh{constructor(t){this.frequency=t,this.state=new Fc,this.clock=new Oc,this.nodes=new Set,this.createdAt=Date.now()}enter(t){this.nodes.add(t),this.clock.tick(t)}exit(t){this.nodes.delete(t)}update(t,e,n){return this.clock.tick(t),this.state.set(e,n,this.clock.clone(),t)}get(t){return this.state.get(t)}merge(t){this.state.merge(t.state),this.clock.merge(t.clock);for(const e of t.nodes)this.nodes.add(e);return this}consistency(t){return this.clock.compare(t.clock)}snapshot(){return{frequency:this.frequency.toString(),nodeCount:this.nodes.size,stateSize:this.state.size(),epoch:this.frequency.epoch,clock:this.clock.toJSON()}}}function po(...i){const t=i.join("|");let e=5381;for(let n=0;n<t.length;n++)e=(Math.imul(33,e)^t.charCodeAt(n))>>>0;return e.toString(36)}var ye,Yn,Ti,ic,sc;class vx{constructor(t,e=""){Dt(this,Ti);Dt(this,ye,new Map);Dt(this,Yn);qt(this,Yn,t),O(this,ye).set(t,{id:t,publicKey:e,vouchedBy:null,chainDepth:0,chainHash:po(t),votes:new Set([t]),joinedAt:Date.now()})}get rootId(){return O(this,Yn)}vouch(t,e,n=""){if(!this.isVerified(t))throw new Error(`Voucher "${t}" is not a verified member`);if(O(this,ye).has(e))throw new Error(`"${e}" is already in the network`);const s=O(this,ye).get(t);return O(this,ye).set(e,{id:e,publicKey:n,vouchedBy:t,chainDepth:s.chainDepth+1,chainHash:po(e,s.chainHash),votes:new Set([t]),joinedAt:Date.now()}),this.getMember(e)}vote(t,e){if(!this.isVerified(t))throw new Error(`Voter "${t}" is not verified`);if(!O(this,ye).has(e))throw new Error(`"${e}" not found`);O(this,ye).get(e).votes.add(t)}revokeVote(t,e){var n;(n=O(this,ye).get(e))==null||n.votes.delete(t)}remove(t){const e=[];return Lt(this,Ti,ic).call(this,t,e),e}isVerified(t){if(t===O(this,Yn))return!0;const e=new Set;let n=t;for(;n!==O(this,Yn);){if(e.has(n))return!1;e.add(n);const s=O(this,ye).get(n);if(!(s!=null&&s.vouchedBy))return!1;n=s.vouchedBy}return!0}isActive(t){if(t===O(this,Yn))return!0;if(!this.isVerified(t))return!1;const e=O(this,ye).get(t),n=Lt(this,Ti,sc).call(this),s=Math.floor(n.size/2)+1;return[...e.votes].filter(o=>n.has(o)).length>=s}trustScore(t){if(!this.isVerified(t))return 0;const e=O(this,ye).get(t),n=Lt(this,Ti,sc).call(this);return n.size===0?0:[...e.votes].filter(r=>n.has(r)).length/n.size}depth(t){var e;return((e=O(this,ye).get(t))==null?void 0:e.chainDepth)??-1}getMember(t){return O(this,ye).get(t)??null}getAll(){return[...O(this,ye).values()]}size(){return O(this,ye).size}validateIntegrity(){for(const[t,e]of O(this,ye)){if(t===O(this,Yn)){if(e.chainHash!==po(t))return!1;continue}const n=O(this,ye).get(e.vouchedBy);if(!n)return!1;const s=po(t,n.chainHash);if(e.chainHash!==s)return!1}return!0}}ye=new WeakMap,Yn=new WeakMap,Ti=new WeakSet,ic=function(t,e){if(O(this,ye).has(t)){e.push(t),O(this,ye).delete(t);for(const[n,s]of O(this,ye))s.vouchedBy===t&&Lt(this,Ti,ic).call(this,n,e)}},sc=function(){const t=new Set;for(const e of O(this,ye).keys())this.isVerified(e)&&t.add(e);return t};class xx{constructor(t,e=""){this.id=t,this.publicKey=e,this.realities=new Map,this.neighbors=new Set,this.position={x:0,y:0,z:0},this.meta={}}tune(t){return t.enter(this.id),this.realities.set(t.frequency.id,t),this}detune(t){const e=this.realities.get(t);return e&&(e.exit(this.id),this.realities.delete(t)),this}bridge(t,e){return this.tune(t),this.tune(e),this}isIn(t){return this.realities.has(t)}moveTo(t,e,n,s){this.position={x:t,y:e,z:n};const r=this.realities.get(s);r&&r.update(this.id,`pos:${this.id}`,{x:t,y:e,z:n})}connect(t){this.neighbors.add(t)}disconnect(t){this.neighbors.delete(t)}}var xr,rc;class yx{constructor(){Dt(this,xr);this.nodes=new Map,this.realities=new Map,this._msgLog=[]}createReality(t,e=0){const n=new Co(t.id,e),s=new Uh(n),r=new vx(t.id,t.publicKey);return this.realities.set(n.id,{reality:s,trust:r}),this.addNode(t),t.tune(s),{reality:s,trust:r,frequency:n}}addNode(t){this.nodes.set(t.id,t)}getNode(t){return this.nodes.get(t)??null}joinReality(t,e,n){const s=this.realities.get(e);if(!s)throw new Error(`Reality "${e}" does not exist`);const{reality:r,trust:o}=s;return o.vouch(n,t.id,t.publicKey),this.addNode(t),t.tune(r),t}route(t,e,n){if(t===e)return[t];const s=this.realities.get(n);if(!s)return null;const{trust:r}=s,o=Lt(this,xr,rc).call(this,t,r),a=Lt(this,xr,rc).call(this,e,r);if(!o||!a)return null;const c=new Set(o);let l;for(const d of a)if(c.has(d)){l=d;break}if(!l)return null;const h=o.slice(0,o.indexOf(l)+1),u=a.slice(0,a.indexOf(l)).reverse();return[...h,...u]}send(t,e,n,s){const r=this.route(t,e,n);if(!r)return{delivered:!1,reason:"no-route"};const o=this.realities.get(n);o&&o.reality.update(t,`msg:${Date.now()}:${t}→${e}`,s);const a={from:t,to:e,hops:r,payload:s,ts:Date.now()};return this._msgLog.push(a),{delivered:!0,hops:r.length,route:r}}gossip(t,e,n,s,r=6){const o=this.nodes.get(t),a=this.realities.get(e);if(!o||!a)return 0;const{reality:c}=a,l=new Set;let h=0;const u=(d,f)=>{if(l.has(d)||f<=0)return;l.add(d);const g=this.nodes.get(d);if(!(!g||!g.isIn(e))){c.update(d,n,s),h++;for(const _ of g.neighbors)u(_,f-1)}};return u(t,r),h}propose(t,e,n,s){const r=this.realities.get(e);if(!r)return{passed:!1,reason:"unknown-reality"};const{reality:o,trust:a}=r,c=a.getAll().filter(d=>a.isVerified(d.id)),l=c.filter(d=>{const f=this.nodes.get(d.id);return f&&s(f,a)}),h=Math.floor(c.length/2)+1;return{passed:l.length>=h,motion:n,proposer:t,total:c.length,yesVotes:l.length,needed:h,voters:l.map(d=>d.id)}}mergeRealities(t,e){const n=this.realities.get(t),s=this.realities.get(e);if(!n||!s)return null;if(!n.reality.frequency.harmonisesWith(s.reality.frequency))return{merged:!1,reason:"insufficient-resonance"};const r=Co.merge(n.reality.frequency,s.reality.frequency),o=new Uh(r);o.merge(n.reality),o.merge(s.reality);const a=n.trust;try{a.vouch(n.trust.rootId,s.trust.rootId,"")}catch{}this.realities.set(r.id,{reality:o,trust:a});for(const c of this.nodes.values())(c.isIn(t)||c.isIn(e))&&(c.detune(t),c.detune(e),c.tune(o));return{merged:!0,frequency:r,reality:o}}nodesIn(t){return[...this.nodes.values()].filter(e=>e.isIn(t))}bridges(){return[...this.nodes.values()].filter(t=>t.realities.size>1)}stats(){return{totalNodes:this.nodes.size,totalRealities:this.realities.size,bridgeNodes:this.bridges().length,messageCount:this._msgLog.length}}}xr=new WeakSet,rc=function(t,e){var o;const n=[];let s=t;const r=new Set;for(;s;){if(r.has(s))return null;r.add(s),n.push(s),s=((o=e.getMember(s))==null?void 0:o.vouchedBy)??null}return n};const Ts=Object.freeze({PUBLIC:"public",INVITE:"invite",PRIVATE:"private"});function Oh(){return Math.random().toString(36).slice(2,9).toUpperCase()}class Mx{constructor(t,e,{targetId:n=null,ttlMs:s=864e5,maxUses:r=1}={}){this.id=`INV-${Oh()}-${Oh()}`,this.issuerId=t,this.frequencyId=e,this.targetId=n,this.expiresAt=Date.now()+s,this.maxUses=r,this.uses=0,this.claimedBy=[]}get expired(){return Date.now()>this.expiresAt}get exhausted(){return this.uses>=this.maxUses}get active(){return!this.expired&&!this.exhausted}isValidFor(t){return!(this.expired||this.exhausted||this.targetId&&this.targetId!==t)}claim(t){return this.isValidFor(t)?(this.uses++,this.claimedBy.push(t),!0):!1}}var yr,Mr,Fs,Xi,Uo,Qu;class Sx{constructor(){Dt(this,Uo);Dt(this,yr,new Map);Dt(this,Mr,new Map);Dt(this,Fs,new Map);Dt(this,Xi,new Map)}setNode(t,e){O(this,yr).set(t,e)}getNode(t){return O(this,yr).get(t)??Ts.PUBLIC}setReality(t,e){O(this,Mr).set(t,e)}getReality(t){return O(this,Mr).get(t)??Ts.PUBLIC}issueInvite(t,e,n={}){const s=new Mx(t,e,n);return O(this,Fs).set(s.id,s),s}getToken(t){return O(this,Fs).get(t)??null}claimInvite(t,e){const n=O(this,Fs).get(t);return n?n.expired?{success:!1,reason:"token-expired"}:n.exhausted?{success:!1,reason:"token-exhausted"}:n.isValidFor(e)?(n.claim(e),O(this,Xi).has(e)||O(this,Xi).set(e,new Set),O(this,Xi).get(e).add(n.frequencyId),{success:!0,frequencyId:n.frequencyId}):{success:!1,reason:"token-not-for-you"}:{success:!1,reason:"token-not-found"}}hasGrant(t,e){var n;return((n=O(this,Xi).get(t))==null?void 0:n.has(e))??!1}canSee(t,e,n){var r;if(t===e)return!0;const s=this.getNode(e);if(s===Ts.PUBLIC||Lt(this,Uo,Qu).call(this,t,e,n))return!0;if(s===Ts.PRIVATE)return!1;for(const[o]of((r=n.getNode(e))==null?void 0:r.realities)??[])if(this.hasGrant(t,o))return!0;return!1}perceptionOf(t,e,n){return this.canSee(t,e,n)?"full":this.getNode(e)===Ts.INVITE?"blurred":"hidden"}buildMapFor(t,e){const n=[],s=[],r=new Set;for(const o of e.nodes.values()){const a=this.perceptionOf(t,o.id,e);a!=="hidden"&&(r.add(o.id),n.push({id:o.id,perception:a,visibility:this.getNode(o.id),realities:[...o.realities.keys()],isBridge:o.realities.size>1,isMe:o.id===t,position:o.position}))}for(const{reality:o,trust:a}of e.realities.values())for(const c of a.getAll())c.vouchedBy&&r.has(c.id)&&r.has(c.vouchedBy)&&s.push({from:c.vouchedBy,to:c.id,type:"trust"});for(const o of e.nodes.values())for(const a of o.neighbors)r.has(o.id)&&r.has(a)&&o.id<a&&s.push({from:o.id,to:a,type:"neighbor"});return{nodes:n,edges:s}}}yr=new WeakMap,Mr=new WeakMap,Fs=new WeakMap,Xi=new WeakMap,Uo=new WeakSet,Qu=function(t,e,n){const s=n.getNode(t),r=n.getNode(e);if(!s||!r)return!1;for(const[o]of s.realities){if(!r.isIn(o))continue;const a=n.realities.get(o);if(a!=null&&a.trust.isVerified(t)&&(a!=null&&a.trust.isVerified(e)))return!0}return!1};const Fh=[{fill:"rgba(30,80,200,0.09)",border:"#4466ff",glow:"#2255dd"},{fill:"rgba(0,160,120,0.09)",border:"#00ffcc",glow:"#00ccaa"},{fill:"rgba(130,20,220,0.09)",border:"#aa55ff",glow:"#8833dd"},{fill:"rgba(200,100,0,0.09)",border:"#ff9900",glow:"#dd7700"},{fill:"rgba(0,160,200,0.09)",border:"#00ccff",glow:"#00aadd"}],zn={me:"#00ffff",public:"#4488ff",invite:"#ffaa00",private:"#666688",blurred:"#333355"};class Ex{constructor(t,e,n){this.canvas=t,this.ctx=t.getContext("2d"),this.vis=e,this.myId=n,this._nodes=[],this._edges=[],this._realityGroups=new Map,this._pan={x:0,y:0},this._zoom=1,this._drag=!1,this._lastMouse={x:0,y:0},this._selected=null,this._raf=null,this._settled=0,this._onSelect=null,this._bindEvents()}load(t){const{nodes:e,edges:n}=t,s=this.canvas.width,r=this.canvas.height,o=new Map(this._nodes.map(c=>[c.id,c]));this._nodes=e.map(c=>{if(o.has(c.id))return{...o.get(c.id),...c};const l=Math.random()*Math.PI*2,h=100+Math.random()*80;return{...c,x:s/2+Math.cos(l)*h,y:r/2+Math.sin(l)*h,vx:0,vy:0}});const a=new Map(this._nodes.map(c=>[c.id,c]));this._edges=n.filter(c=>a.has(c.from)&&a.has(c.to)).map(c=>({fromNode:a.get(c.from),toNode:a.get(c.to),type:c.type})),this._realityGroups.clear(),this._nodes.forEach(c=>{var l;(l=c.realities)==null||l.forEach((h,u)=>{this._realityGroups.has(h)||this._realityGroups.set(h,{nodes:[],color:Fh[this._realityGroups.size%Fh.length]}),this._realityGroups.get(h).nodes.push(c)})}),this._settled=0,this._kickSimulation()}onSelect(t){this._onSelect=t}fitView(){if(this._nodes.length===0)return;const t=this._nodes.map(d=>d.x),e=this._nodes.map(d=>d.y),n=Math.min(...t),s=Math.max(...t),r=Math.min(...e),o=Math.max(...e),a=this.canvas.width,c=this.canvas.height,l=60,h=(a-l*2)/(s-n||1),u=(c-l*2)/(o-r||1);this._zoom=Math.min(h,u,2),this._pan.x=-((n+s)/2)*this._zoom,this._pan.y=-((r+o)/2)*this._zoom,this.render()}stop(){this._raf&&cancelAnimationFrame(this._raf)}_kickSimulation(){if(this._raf)return;const t=()=>{this._settled<250&&(this._stepForce(),this._settled++),this.render(),this._raf=requestAnimationFrame(t)};this._raf=requestAnimationFrame(t)}_stepForce(){const t=this._nodes,e=4e3,n=90,s=.025,r=.82;for(let o=0;o<t.length;o++)for(let a=o+1;a<t.length;a++){const c=t[o],l=t[a],h=l.x-c.x,u=l.y-c.y,d=h*h+u*u||1,f=Math.sqrt(d),g=e/d;c.vx-=g*h/f,c.vy-=g*u/f,l.vx+=g*h/f,l.vy+=g*u/f}for(const o of this._edges){if(o.type!=="trust")continue;const a=o.toNode.x-o.fromNode.x,c=o.toNode.y-o.fromNode.y,l=Math.sqrt(a*a+c*c)||1,h=(l-n)*s;o.fromNode.vx+=h*a/l,o.fromNode.vy+=h*c/l,o.toNode.vx-=h*a/l,o.toNode.vy-=h*c/l,o.toNode.vy+=(o.toNode.y-(o.fromNode.y+n))*-.008}for(const o of this._edges){if(o.type!=="neighbor")continue;const a=o.toNode.x-o.fromNode.x,c=o.toNode.y-o.fromNode.y,l=Math.sqrt(a*a+c*c)||1,h=(l-50)*.008;o.fromNode.vx+=h*a/l,o.fromNode.vy+=h*c/l,o.toNode.vx-=h*a/l,o.toNode.vy-=h*c/l}for(const o of t)o.x+=o.vx*r,o.y+=o.vy*r,o.vx*=r,o.vy*=r}render(){const t=this.ctx,e=this.canvas.width,n=this.canvas.height;t.clearRect(0,0,e,n),t.fillStyle="rgba(0,2,12,0.97)",t.fillRect(0,0,e,n),t.save(),t.translate(e/2+this._pan.x,n/2+this._pan.y),t.scale(this._zoom,this._zoom),this._drawRealityClusters(),this._drawEdges(),this._drawNodes(),this._selected&&this._drawSelection(this._selected),t.restore(),this._drawLegend(),this._settled<250&&this._drawSettlingIndicator()}_drawRealityClusters(){const t=this.ctx;for(const[e,{nodes:n,color:s}]of this._realityGroups){if(n.length<2)continue;const r=n.reduce((l,h)=>l+h.x,0)/n.length,o=n.reduce((l,h)=>l+h.y,0)/n.length,a=Math.max(...n.map(l=>Math.hypot(l.x-r,l.y-o)))+55,c=t.createRadialGradient(r,o,0,r,o,a);c.addColorStop(0,s.fill.replace("0.09","0.14")),c.addColorStop(.7,s.fill),c.addColorStop(1,"transparent"),t.fillStyle=c,t.beginPath(),t.arc(r,o,a,0,Math.PI*2),t.fill(),t.strokeStyle=s.border+"33",t.lineWidth=1,t.beginPath(),t.arc(r,o,a,0,Math.PI*2),t.stroke()}}_drawEdges(){const t=this.ctx;for(const e of this._edges)t.beginPath(),t.moveTo(e.fromNode.x,e.fromNode.y),t.lineTo(e.toNode.x,e.toNode.y),e.type==="trust"?(t.strokeStyle="rgba(120,180,255,0.45)",t.lineWidth=1.8,t.setLineDash([])):(t.strokeStyle="rgba(255,255,255,0.1)",t.lineWidth=.8,t.setLineDash([3,5])),t.stroke();t.setLineDash([])}_drawNodes(){var e;const t=this.ctx;for(const n of this._nodes){const s=((e=this._selected)==null?void 0:e.id)===n.id,r=n.isMe?11:n.isBridge?9:7,o=n.isMe?zn.me:n.perception==="blurred"?zn.blurred:zn[n.visibility]??zn.public;t.shadowColor=o,t.shadowBlur=s?28:n.isMe?22:12,t.fillStyle=n.perception==="blurred"?"rgba(50,50,80,0.7)":o+(n.isMe?"":"cc"),t.beginPath(),t.arc(n.x,n.y,r,0,Math.PI*2),t.fill(),t.shadowBlur=0,n.isBridge&&(t.strokeStyle="#ffcc00bb",t.lineWidth=2,t.beginPath(),t.arc(n.x,n.y,r+5,0,Math.PI*2),t.stroke()),s&&(t.strokeStyle="#ffffff88",t.lineWidth=1.5,t.beginPath(),t.arc(n.x,n.y,r+8,0,Math.PI*2),t.stroke());const a=n.perception==="blurred"?"???":n.id.length>12?n.id.slice(0,12)+"…":n.id;t.fillStyle=n.isMe?"#ffffff":"rgba(255,255,255,0.65)",t.font=`${n.isMe?"bold ":""}10px Inter, monospace`,t.textAlign="center",t.fillText(a,n.x,n.y+r+14),n.perception==="full"&&n.depth>0&&(t.fillStyle="rgba(255,255,255,0.28)",t.font="8px monospace",t.fillText(`d${n.depth}`,n.x,n.y-r-4)),n.isMe&&(t.fillStyle="#00ffff",t.font="bold 8px Inter, monospace",t.shadowColor="#00ffff",t.shadowBlur=8,t.fillText("YOU",n.x,n.y-r-4),t.shadowBlur=0)}}_drawSelection(t){}_drawLegend(){const t=this.ctx,e=[{color:zn.me,label:"You"},{color:zn.public,label:"Public"},{color:zn.invite,label:"Invite-only"},{color:zn.private,label:"Private"},{color:zn.blurred,label:"Unknown (invite-only, not connected)"},{color:"#ffcc00",label:"Bridge node"}],n=14,s=this.canvas.height-14-e.length*18;t.fillStyle="rgba(0,5,20,0.75)",t.fillRect(n-6,s-10,280,e.length*18+16),t.strokeStyle="rgba(255,255,255,0.07)",t.lineWidth=1,t.strokeRect(n-6,s-10,280,e.length*18+16),e.forEach(({color:r,label:o},a)=>{const c=s+a*18;t.fillStyle=r,t.beginPath(),t.arc(n+6,c,5,0,Math.PI*2),t.fill(),t.fillStyle="rgba(255,255,255,0.6)",t.font="11px Inter, monospace",t.textAlign="left",t.fillText(o,n+18,c+4)})}_drawSettlingIndicator(){const t=this.ctx,e=this._settled/250,n=this.canvas.width;t.fillStyle="rgba(100,180,255,0.5)",t.fillRect(0,this.canvas.height-2,n*e,2)}_bindEvents(){const t=this.canvas;t.addEventListener("mousedown",e=>{this._drag=!0,this._lastMouse={x:e.clientX,y:e.clientY}}),t.addEventListener("mousemove",e=>{this._drag&&(this._pan.x+=e.clientX-this._lastMouse.x,this._pan.y+=e.clientY-this._lastMouse.y,this._lastMouse={x:e.clientX,y:e.clientY},this.render())}),t.addEventListener("mouseup",()=>{this._drag=!1}),t.addEventListener("mouseleave",()=>{this._drag=!1}),t.addEventListener("wheel",e=>{e.preventDefault();const n=e.deltaY>0?.88:1.14;this._zoom=Math.max(.15,Math.min(6,this._zoom*n)),this._raf||this.render()},{passive:!1}),t.addEventListener("click",e=>{var a;if(this._drag)return;const n=t.getBoundingClientRect(),s=(e.clientX-n.left-t.width/2-this._pan.x)/this._zoom,r=(e.clientY-n.top-t.height/2-this._pan.y)/this._zoom;let o=null;for(const c of this._nodes)if(Math.hypot(c.x-s,c.y-r)<14){o=c;break}this._selected=o,(a=this._onSelect)==null||a.call(this,o),this._raf||this.render()})}}function Bh(i,t,e){const n=document.getElementById("network-map-overlay");if(!n)return;n.classList.add("visible");const s=document.getElementById("network-map-canvas");s.width=s.offsetWidth||800,s.height=s.offsetHeight||560;const r=t.buildMapFor(e,i),o=new Ex(s,t,e);o.load(r);const a=document.getElementById("nm-node-panel");o.onSelect(h=>{var u;if(!h||h.perception==="blurred"){a.innerHTML=h?'<div class="nm-panel-blurred">🔒 Unknown node<br><small>Invite required</small></div>':"";return}a.innerHTML=`
      <div class="nm-panel-title">${h.isMe?"👤 You":"🔵 "+h.id}</div>
      <div class="nm-panel-row"><span>Visibility</span><span class="nm-badge nm-badge-${h.visibility}">${h.visibility}</span></div>
      <div class="nm-panel-row"><span>Depth</span><span>d${h.depth??0}</span></div>
      <div class="nm-panel-row"><span>Realities</span><span>${((u=h.realities)==null?void 0:u.length)??0}</span></div>
      ${h.isBridge?'<div class="nm-panel-bridge">🌉 Bridge node</div>':""}
    `});const c=document.getElementById("nm-close"),l=()=>{n.classList.remove("visible"),o.stop()};c.onclick=l,n.addEventListener("keydown",h=>{h.key==="Escape"&&l()})}const Ba=8,za=18,wx=.08,zh=12;class bx{constructor(){this._ctx=null,this._stream=null,this._gains=new Map,this._talking=new Set,this._selfAnalyser=null,this._selfBuf=null,this._muted=!1,this._active=!1,this._onStateChange=null,this._onTalkChange=null,this._syncRef=null}async start(t){if(this._active)return!0;this._syncRef=t;try{const e=new Promise((r,o)=>setTimeout(()=>o(new Error("mic permission timed out")),15e3));this._stream=await Promise.race([navigator.mediaDevices.getUserMedia({audio:{echoCancellation:!0,noiseSuppression:!0,sampleRate:48e3},video:!1}),e]),this._ctx=new AudioContext,this._ctx.state==="suspended"&&await this._ctx.resume(),this._active=!0,this._selfAnalyser=this._ctx.createAnalyser(),this._selfAnalyser.fftSize=256,this._selfBuf=new Uint8Array(this._selfAnalyser.frequencyBinCount),this._ctx.createMediaStreamSource(this._stream).connect(this._selfAnalyser);const[s]=this._stream.getAudioTracks();return t.addVoiceTrack(s,this._stream),t.onVoiceTrack((r,o,a,c)=>{r.kind==="audio"&&this._addPeerTrack(a,r,c)}),this._notify(),!0}catch(e){return console.warn("[ProximityVoice] mic access denied or unavailable:",e.message),!1}}_addPeerTrack(t,e,n){const s=this._ctx.createMediaStreamSource(new MediaStream([e])),r=this._ctx.createGain(),o=this._ctx.createAnalyser();o.fftSize=256,r.gain.value=0,s.connect(o),s.connect(r),r.connect(this._ctx.destination),this._gains.set(t,{gainNode:r,sourceNode:s,analyser:o,buf:new Uint8Array(o.frequencyBinCount),wirePeerId:n??t})}stop(){var t,e;(t=this._stream)==null||t.getTracks().forEach(n=>n.stop()),this._gains.forEach(({gainNode:n,sourceNode:s})=>{try{s.disconnect(),n.disconnect()}catch{}}),this._gains.clear(),this._talking.clear(),(e=this._ctx)==null||e.close(),this._active=!1,this._syncRef=null,this._notify(),this._notifyTalk()}update(t,e){if(!this._active||!this._ctx)return;this._syncRef&&this._gains.forEach((r,o)=>{if(o.length!==64){const a=this._syncRef.wireToIdentityId(o);a&&a!==o&&(this._gains.set(a,r),this._gains.delete(o))}});const n=new Set(this._talking);this._selfAnalyser&&!this._muted?(this._selfAnalyser.getByteFrequencyData(this._selfBuf),this._selfBuf.reduce((o,a)=>o+a,0)/this._selfBuf.length>zh?this._talking.add("self"):this._talking.delete("self")):this._talking.delete("self"),e.forEach((r,o)=>{const a=this._gains.get(o);if(!a)return;const c=r.position.x-t.x,l=r.position.z-t.z,h=Math.sqrt(c*c+l*l),u=h<=Ba?1:h>=za?0:1-(h-Ba)/(za-Ba);a.gainNode.gain.setTargetAtTime(u,this._ctx.currentTime,wx),a.analyser.getByteFrequencyData(a.buf),a.buf.reduce((f,g)=>f+g,0)/a.buf.length>zh?this._talking.add(o):this._talking.delete(o)});let s=n.size!==this._talking.size;if(!s){for(const r of this._talking)if(!n.has(r)){s=!0;break}}s&&this._notifyTalk()}removePeer(t){const e=this._gains.get(t);if(e){try{e.sourceNode.disconnect(),e.gainNode.disconnect()}catch{}this._gains.delete(t)}this._talking.delete(t)}toggleMute(){return this.setMuted(!this._muted),this._muted}setMuted(t){var e;this._muted=t,(e=this._stream)==null||e.getAudioTracks().forEach(n=>{n.enabled=!t}),this._notify()}get active(){return this._active}get muted(){return this._muted}isTalking(t){return this._talking.has(t)}get talkingPeers(){return this._talking}onStateChange(t){this._onStateChange=t}onTalkChange(t){this._onTalkChange=t}_notify(){var t;(t=this._onStateChange)==null||t.call(this,{active:this._active,muted:this._muted})}_notifyTalk(){var t;(t=this._onTalkChange)==null||t.call(this,this._talking)}static get HEAR_FAR(){return za}}const kh=Object.fromEntries(Uc.map(i=>[i.id,"#"+i.color.toString(16).padStart(6,"0")])),Tx={OUTSIDE:"#88cc66",LOBBY:"#aaaacc",OPS:"#ffaa44",FUN:"#44ffaa",DESIGN:"#ff6ba0",ENGINEERING:"#44aaff"},Ax={OUTSIDE:"Outside",LOBBY:"Lobby",OPS:"Ops",FUN:"Fun",DESIGN:"Design",ENGINEERING:"Engineering"};class Rx{constructor(t){this._onNavigate=t,this._peers=new Map,this._self={username:"",presetId:0,zone:"OUTSIDE"},this._el=this._build(),document.body.appendChild(this._el),this._render()}setSelf(t,e,n,s="available"){this._self={username:t,presetId:e,zone:n||"OUTSIDE",status:s},this._render()}updateSelfStatus(t){this._self.status=t,this._render()}addPeer(t,e,n=0,s="available"){this._peers.set(t,{username:e,presetId:n,x:0,z:0,zone:"OUTSIDE",status:s}),this._render()}movePeer(t,e,n){const s=this._peers.get(t);s&&(s.x=e,s.z=n,s.zone=Ro({x:e,z:n}),this._render())}updatePeerPreset(t,e){const n=this._peers.get(t);n&&(n.presetId=e,this._render())}updatePeerStatus(t,e){const n=this._peers.get(t);n&&(n.status=e,this._render())}removePeer(t){this._peers.delete(t),this._render()}updateSelfZone(t){this._self.zone=t||"OUTSIDE",this._render()}_build(){const t=document.createElement("div");return t.id="presence-panel",t.innerHTML=`
      <div class="pp-header">
        <span class="pp-title">WHO'S HERE</span>
        <span class="pp-count" id="pp-count">1</span>
      </div>
      <div class="pp-list" id="pp-list"></div>
    `,t}_render(){const t=this._el.querySelector("#pp-list"),e=this._el.querySelector("#pp-count");if(!t)return;const n=1+this._peers.size;e.textContent=n;const s=[];s.push(this._row({username:this._self.username||"You",presetId:this._self.presetId,zone:this._self.zone,status:this._self.status,isSelf:!0}));const r=[...this._peers.entries()].sort((o,a)=>{const c=o[1].zone,l=a[1].zone;return c!==l?c.localeCompare(l):o[1].username.localeCompare(a[1].username)});r.forEach(([o,a])=>{s.push(this._row({username:a.username,presetId:a.presetId,zone:a.zone,status:a.status,isSelf:!1,onClick:()=>{var c;return(c=this._onNavigate)==null?void 0:c.call(this,{x:a.x,z:a.z})}}))}),t.innerHTML=s.join(""),t.querySelectorAll(".pp-row[data-idx]").forEach(o=>{const a=parseInt(o.dataset.idx,10),c=r[a];c&&o.addEventListener("click",()=>{var l;return(l=this._onNavigate)==null?void 0:l.call(this,{x:c[1].x,z:c[1].z})})})}_row({username:t,presetId:e,zone:n,status:s="available",isSelf:r,onClick:o}){const c="#"+(Ji[e]??Ji[0]).outfit.toString(16).padStart(6,"0"),l=kh[s]??kh.available,h=Tx[n]??"#888",u=Ax[n]??n;return`
      <div class="pp-row ${r?"pp-self":"pp-peer"}"
           ${r?"":`data-idx="${t}"`}>
        <span class="pp-dot" style="background:${c}"></span>
        <span class="pp-status-dot" style="background:${l}" title="${s}"></span>
        <span class="pp-name">${Cx(t)}${r?' <span class="pp-you">(you)</span>':""}</span>
        <span class="pp-zone" style="color:${h}">${u}</span>
        ${r?"":'<span class="pp-go" title="Walk to this person">→</span>'}
      </div>
    `}}function Cx(i){return i.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Px(i){return i instanceof Uint8Array||ArrayBuffer.isView(i)&&i.constructor.name==="Uint8Array"&&"BYTES_PER_ELEMENT"in i&&i.BYTES_PER_ELEMENT===1}function Bc(i,t=""){if(typeof i!="number"){const e=t&&`"${t}" `;throw new TypeError(`${e}expected number, got ${typeof i}`)}if(!Number.isSafeInteger(i)||i<0){const e=t&&`"${t}" `;throw new RangeError(`${e}expected integer >= 0, got ${i}`)}}function nr(i,t,e=""){const n=Px(i),s=i==null?void 0:i.length,r=t!==void 0;if(!n||r&&s!==t){const o=e&&`"${e}" `,a=r?` of length ${t}`:"",c=n?`length=${s}`:`type=${typeof i}`,l=o+"expected Uint8Array"+a+", got "+c;throw n?new RangeError(l):new TypeError(l)}return i}function Hh(i,t=!0){if(i.destroyed)throw new Error("Hash instance has been destroyed");if(t&&i.finished)throw new Error("Hash#digest() has already been called")}function Lx(i,t){nr(i,void 0,"digestInto() output");const e=t.outputLen;if(i.length<e)throw new RangeError('"digestInto() output" expected to be of length >='+e)}function oc(...i){for(let t=0;t<i.length;t++)i[t].fill(0)}function ka(i){return new DataView(i.buffer,i.byteOffset,i.byteLength)}function En(i,t){return i<<32-t|i>>>t}const td=typeof Uint8Array.from([]).toHex=="function"&&typeof Uint8Array.fromHex=="function",Ix=Array.from({length:256},(i,t)=>t.toString(16).padStart(2,"0"));function zc(i){if(nr(i),td)return i.toHex();let t="";for(let e=0;e<i.length;e++)t+=Ix[i[e]];return t}const kn={_0:48,_9:57,A:65,F:70,a:97,f:102};function Gh(i){if(i>=kn._0&&i<=kn._9)return i-kn._0;if(i>=kn.A&&i<=kn.F)return i-(kn.A-10);if(i>=kn.a&&i<=kn.f)return i-(kn.a-10)}function ed(i){if(typeof i!="string")throw new TypeError("hex string expected, got "+typeof i);if(td)try{return Uint8Array.fromHex(i)}catch(s){throw s instanceof SyntaxError?new RangeError(s.message):s}const t=i.length,e=t/2;if(t%2)throw new RangeError("hex string expected, got unpadded hex of length "+t);const n=new Uint8Array(e);for(let s=0,r=0;s<e;s++,r+=2){const o=Gh(i.charCodeAt(r)),a=Gh(i.charCodeAt(r+1));if(o===void 0||a===void 0){const c=i[r]+i[r+1];throw new RangeError('hex string expected, got non-hex character "'+c+'" at index '+r)}n[s]=o*16+a}return n}function Dx(...i){let t=0;for(let n=0;n<i.length;n++){const s=i[n];nr(s),t+=s.length}const e=new Uint8Array(t);for(let n=0,s=0;n<i.length;n++){const r=i[n];e.set(r,s),s+=r.length}return e}function Nx(i,t={}){const e=(s,r)=>i(r).update(s).digest(),n=i(void 0);return e.outputLen=n.outputLen,e.blockLen=n.blockLen,e.canXOF=n.canXOF,e.create=s=>i(s),Object.assign(e,t),Object.freeze(e)}function nd(i=32){Bc(i,"bytesLength");const t=typeof globalThis=="object"?globalThis.crypto:null;if(typeof(t==null?void 0:t.getRandomValues)!="function")throw new Error("crypto.getRandomValues must be defined");if(i>65536)throw new RangeError(`"bytesLength" expected <= 65536, got ${i}`);return t.getRandomValues(new Uint8Array(i))}const Ux=i=>({oid:Uint8Array.from([6,9,96,134,72,1,101,3,4,2,i])});function Ox(i,t,e){return i&t^~i&e}function Fx(i,t,e){return i&t^i&e^t&e}class Bx{constructor(t,e,n,s){Yt(this,"blockLen");Yt(this,"outputLen");Yt(this,"canXOF",!1);Yt(this,"padOffset");Yt(this,"isLE");Yt(this,"buffer");Yt(this,"view");Yt(this,"finished",!1);Yt(this,"length",0);Yt(this,"pos",0);Yt(this,"destroyed",!1);this.blockLen=t,this.outputLen=e,this.padOffset=n,this.isLE=s,this.buffer=new Uint8Array(t),this.view=ka(this.buffer)}update(t){Hh(this),nr(t);const{view:e,buffer:n,blockLen:s}=this,r=t.length;for(let o=0;o<r;){const a=Math.min(s-this.pos,r-o);if(a===s){const c=ka(t);for(;s<=r-o;o+=s)this.process(c,o);continue}n.set(t.subarray(o,o+a),this.pos),this.pos+=a,o+=a,this.pos===s&&(this.process(e,0),this.pos=0)}return this.length+=t.length,this.roundClean(),this}digestInto(t){Hh(this),Lx(t,this),this.finished=!0;const{buffer:e,view:n,blockLen:s,isLE:r}=this;let{pos:o}=this;e[o++]=128,oc(this.buffer.subarray(o)),this.padOffset>s-o&&(this.process(n,0),o=0);for(let u=o;u<s;u++)e[u]=0;n.setBigUint64(s-8,BigInt(this.length*8),r),this.process(n,0);const a=ka(t),c=this.outputLen;if(c%4)throw new Error("_sha2: outputLen must be aligned to 32bit");const l=c/4,h=this.get();if(l>h.length)throw new Error("_sha2: outputLen bigger than state");for(let u=0;u<l;u++)a.setUint32(4*u,h[u],r)}digest(){const{buffer:t,outputLen:e}=this;this.digestInto(t);const n=t.slice(0,e);return this.destroy(),n}_cloneInto(t){t||(t=new this.constructor),t.set(...this.get());const{blockLen:e,buffer:n,length:s,finished:r,destroyed:o,pos:a}=this;return t.destroyed=o,t.finished=r,t.length=s,t.pos=a,s%e&&t.buffer.set(n),t}clone(){return this._cloneInto()}}const hi=Uint32Array.from([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]),zx=Uint32Array.from([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),ui=new Uint32Array(64);class kx extends Bx{constructor(t){super(64,t,8,!1)}get(){const{A:t,B:e,C:n,D:s,E:r,F:o,G:a,H:c}=this;return[t,e,n,s,r,o,a,c]}set(t,e,n,s,r,o,a,c){this.A=t|0,this.B=e|0,this.C=n|0,this.D=s|0,this.E=r|0,this.F=o|0,this.G=a|0,this.H=c|0}process(t,e){for(let u=0;u<16;u++,e+=4)ui[u]=t.getUint32(e,!1);for(let u=16;u<64;u++){const d=ui[u-15],f=ui[u-2],g=En(d,7)^En(d,18)^d>>>3,_=En(f,17)^En(f,19)^f>>>10;ui[u]=_+ui[u-7]+g+ui[u-16]|0}let{A:n,B:s,C:r,D:o,E:a,F:c,G:l,H:h}=this;for(let u=0;u<64;u++){const d=En(a,6)^En(a,11)^En(a,25),f=h+d+Ox(a,c,l)+zx[u]+ui[u]|0,_=(En(n,2)^En(n,13)^En(n,22))+Fx(n,s,r)|0;h=l,l=c,c=a,a=o+f|0,o=r,r=s,s=n,n=f+_|0}n=n+this.A|0,s=s+this.B|0,r=r+this.C|0,o=o+this.D|0,a=a+this.E|0,c=c+this.F|0,l=l+this.G|0,h=h+this.H|0,this.set(n,s,r,o,a,c,l,h)}roundClean(){oc(ui)}destroy(){this.destroyed=!0,this.set(0,0,0,0,0,0,0,0),oc(this.buffer)}}class Hx extends kx{constructor(){super(32);Yt(this,"A",hi[0]|0);Yt(this,"B",hi[1]|0);Yt(this,"C",hi[2]|0);Yt(this,"D",hi[3]|0);Yt(this,"E",hi[4]|0);Yt(this,"F",hi[5]|0);Yt(this,"G",hi[6]|0);Yt(this,"H",hi[7]|0)}}const Vh=Nx(()=>new Hx,Ux(1));/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const fn=(i,t,e)=>nr(i,t,e),id=Bc,Gx=zc,Po=(...i)=>Dx(...i),Vx=i=>ed(i),Lo=BigInt(0),ac=BigInt(1);function cc(i,t=""){if(typeof i!="boolean"){const e=t&&`"${t}" `;throw new TypeError(e+"expected boolean, got type="+typeof i)}return i}function kc(i){if(typeof i=="bigint"){if(!xo(i))throw new RangeError("positive bigint expected, got "+i)}else id(i);return i}function lc(i,t=""){if(typeof i!="number"){const e=t&&`"${t}" `;throw new TypeError(e+"expected number, got type="+typeof i)}if(!Number.isSafeInteger(i)){const e=t&&`"${t}" `;throw new RangeError(e+"expected safe integer, got "+i)}}function mo(i){const t=kc(i).toString(16);return t.length&1?"0"+t:t}function sd(i){if(typeof i!="string")throw new TypeError("hex string expected, got "+typeof i);return i===""?Lo:BigInt("0x"+i)}function Go(i){return sd(zc(i))}function rd(i){return sd(zc(Wx(nr(i)).reverse()))}function Hc(i,t){if(Bc(t),t===0)throw new RangeError("zero length");i=kc(i);const e=i.toString(16);if(e.length>t*2)throw new RangeError("number too large");return ed(e.padStart(t*2,"0"))}function od(i,t){return Hc(i,t).reverse()}function Wx(i){return Uint8Array.from(fn(i))}function Xx(i){if(typeof i!="string")throw new TypeError("ascii string expected, got "+typeof i);return Uint8Array.from(i,(t,e)=>{const n=t.charCodeAt(0);if(t.length!==1||n>127)throw new RangeError(`string contains non-ASCII character "${i[e]}" with code ${n} at position ${e}`);return n})}const xo=i=>typeof i=="bigint"&&Lo<=i;function Zx(i,t,e){return xo(i)&&xo(t)&&xo(e)&&t<=i&&i<e}function Yx(i,t,e,n){if(!Zx(t,e,n))throw new RangeError("expected valid "+i+": "+e+" <= n < "+n+", got "+t)}function Gc(i){if(i<Lo)throw new Error("expected non-negative bigint, got "+i);let t;for(t=0;i>Lo;i>>=ac,t+=1);return t}const ad=i=>(ac<<BigInt(i))-ac;function cd(i,t={},e={}){if(Object.prototype.toString.call(i)!=="[object Object]")throw new TypeError("expected valid options object");function n(r,o,a){if(!a&&o!=="function"&&!Object.hasOwn(i,r))throw new TypeError(`param "${r}" is invalid: expected own property`);const c=i[r];if(a&&c===void 0)return;const l=typeof c;if(l!==o||c===null)throw new TypeError(`param "${r}" is invalid: expected ${o}, got ${l}`)}const s=(r,o)=>Object.entries(r).forEach(([a,c])=>n(a,c,o));s(t,!1),s(e,!0)}/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const We=BigInt(0),Ce=BigInt(1),Vi=BigInt(2),ld=BigInt(3),hd=BigInt(4),ud=BigInt(5),qx=BigInt(7),dd=BigInt(8),$x=BigInt(9),fd=BigInt(16);function vn(i,t){if(t<=We)throw new Error("mod: expected positive modulus, got "+t);const e=i%t;return e>=We?e:t+e}function an(i,t,e){if(t<We)throw new Error("pow2: expected non-negative exponent, got "+t);let n=i;for(;t-- >We;)n*=n,n%=e;return n}function Wh(i,t){if(i===We)throw new Error("invert: expected non-zero number");if(t<=We)throw new Error("invert: expected positive modulus, got "+t);let e=vn(i,t),n=t,s=We,r=Ce;for(;e!==We;){const a=n/e,c=n-e*a,l=s-r*a;n=e,e=c,s=r,r=l}if(n!==Ce)throw new Error("invert: does not exist");return vn(s,t)}function Vc(i,t,e){const n=i;if(!n.eql(n.sqr(t),e))throw new Error("Cannot find square root")}function pd(i,t){const e=i,n=(e.ORDER+Ce)/hd,s=e.pow(t,n);return Vc(e,s,t),s}function Kx(i,t){const e=i,n=(e.ORDER-ud)/dd,s=e.mul(t,Vi),r=e.pow(s,n),o=e.mul(t,r),a=e.mul(e.mul(o,Vi),r),c=e.mul(o,e.sub(a,e.ONE));return Vc(e,c,t),c}function Jx(i){const t=Vo(i),e=md(i),n=e(t,t.neg(t.ONE)),s=e(t,n),r=e(t,t.neg(n)),o=(i+qx)/fd;return(a,c)=>{const l=a;let h=l.pow(c,o),u=l.mul(h,n);const d=l.mul(h,s),f=l.mul(h,r),g=l.eql(l.sqr(u),c),_=l.eql(l.sqr(d),c);h=l.cmov(h,u,g),u=l.cmov(f,d,_);const p=l.eql(l.sqr(u),c),m=l.cmov(h,u,p);return Vc(l,m,c),m}}function md(i){if(i<ld)throw new Error("sqrt is not defined for small field");let t=i-Ce,e=0;for(;t%Vi===We;)t/=Vi,e++;let n=Vi;const s=Vo(i);for(;Xh(s,n)===1;)if(n++>1e3)throw new Error("Cannot find square root: probably non-prime P");if(e===1)return pd;let r=s.pow(n,t);const o=(t+Ce)/Vi;return function(c,l){const h=c;if(h.is0(l))return l;if(Xh(h,l)!==1)throw new Error("Cannot find square root");let u=e,d=h.mul(h.ONE,r),f=h.pow(l,t),g=h.pow(l,o);for(;!h.eql(f,h.ONE);){if(h.is0(f))return h.ZERO;let _=1,p=h.sqr(f);for(;!h.eql(p,h.ONE);)if(_++,p=h.sqr(p),_===u)throw new Error("Cannot find square root");const m=Ce<<BigInt(u-_-1),w=h.pow(d,m);u=_,d=h.sqr(w),f=h.mul(f,d),g=h.mul(g,w)}return g}}function jx(i){return i%hd===ld?pd:i%dd===ud?Kx:i%fd===$x?Jx(i):md(i)}const Qx=["create","isValid","is0","neg","inv","sqrt","sqr","eql","add","sub","mul","pow","div","addN","subN","mulN","sqrN"];function ty(i){const t={ORDER:"bigint",BYTES:"number",BITS:"number"},e=Qx.reduce((n,s)=>(n[s]="function",n),t);if(cd(i,e),lc(i.BYTES,"BYTES"),lc(i.BITS,"BITS"),i.BYTES<1||i.BITS<1)throw new Error("invalid field: expected BYTES/BITS > 0");if(i.ORDER<=Ce)throw new Error("invalid field: expected ORDER > 1, got "+i.ORDER);return i}function ey(i,t,e){const n=i;if(e<We)throw new Error("invalid exponent, negatives unsupported");if(e===We)return n.ONE;if(e===Ce)return t;let s=n.ONE,r=t;for(;e>We;)e&Ce&&(s=n.mul(s,r)),r=n.sqr(r),e>>=Ce;return s}function gd(i,t,e=!1){const n=i,s=new Array(t.length).fill(e?n.ZERO:void 0),r=t.reduce((a,c,l)=>n.is0(c)?a:(s[l]=a,n.mul(a,c)),n.ONE),o=n.inv(r);return t.reduceRight((a,c,l)=>n.is0(c)?a:(s[l]=n.mul(a,s[l]),n.mul(a,c)),o),s}function Xh(i,t){const e=i,n=(e.ORDER-Ce)/Vi,s=e.pow(t,n),r=e.eql(s,e.ONE),o=e.eql(s,e.ZERO),a=e.eql(s,e.neg(e.ONE));if(!r&&!o&&!a)throw new Error("invalid Legendre symbol result");return r?1:o?0:-1}function ny(i,t){if(t!==void 0&&id(t),i<=We)throw new Error("invalid n length: expected positive n, got "+i);if(t!==void 0&&t<1)throw new Error("invalid n length: expected positive bit length, got "+t);const e=Gc(i);if(t!==void 0&&t<e)throw new Error(`invalid n length: expected bit length (${e}) >= n.length (${t})`);const n=t!==void 0?t:e,s=Math.ceil(n/8);return{nBitLength:n,nByteLength:s}}const Zh=new WeakMap;class _d{constructor(t,e={}){Yt(this,"ORDER");Yt(this,"BITS");Yt(this,"BYTES");Yt(this,"isLE");Yt(this,"ZERO",We);Yt(this,"ONE",Ce);Yt(this,"_lengths");Yt(this,"_mod");if(t<=Ce)throw new Error("invalid field: expected ORDER > 1, got "+t);let n;this.isLE=!1,e!=null&&typeof e=="object"&&(typeof e.BITS=="number"&&(n=e.BITS),typeof e.sqrt=="function"&&Object.defineProperty(this,"sqrt",{value:e.sqrt,enumerable:!0}),typeof e.isLE=="boolean"&&(this.isLE=e.isLE),e.allowedLengths&&(this._lengths=Object.freeze(e.allowedLengths.slice())),typeof e.modFromBytes=="boolean"&&(this._mod=e.modFromBytes));const{nBitLength:s,nByteLength:r}=ny(t,n);if(r>2048)throw new Error("invalid field: expected ORDER of <= 2048 bytes");this.ORDER=t,this.BITS=s,this.BYTES=r,Object.freeze(this)}create(t){return vn(t,this.ORDER)}isValid(t){if(typeof t!="bigint")throw new TypeError("invalid field element: expected bigint, got "+typeof t);return We<=t&&t<this.ORDER}is0(t){return t===We}isValidNot0(t){return!this.is0(t)&&this.isValid(t)}isOdd(t){return(t&Ce)===Ce}neg(t){return vn(-t,this.ORDER)}eql(t,e){return t===e}sqr(t){return vn(t*t,this.ORDER)}add(t,e){return vn(t+e,this.ORDER)}sub(t,e){return vn(t-e,this.ORDER)}mul(t,e){return vn(t*e,this.ORDER)}pow(t,e){return ey(this,t,e)}div(t,e){return vn(t*Wh(e,this.ORDER),this.ORDER)}sqrN(t){return t*t}addN(t,e){return t+e}subN(t,e){return t-e}mulN(t,e){return t*e}inv(t){return Wh(t,this.ORDER)}sqrt(t){let e=Zh.get(this);return e||Zh.set(this,e=jx(this.ORDER)),e(this,t)}toBytes(t){return this.isLE?od(t,this.BYTES):Hc(t,this.BYTES)}fromBytes(t,e=!1){fn(t);const{_lengths:n,BYTES:s,isLE:r,ORDER:o,_mod:a}=this;if(n){if(t.length<1||!n.includes(t.length)||t.length>s)throw new Error("Field.fromBytes: expected "+n+" bytes, got "+t.length);const l=new Uint8Array(s);l.set(t,r?0:l.length-t.length),t=l}if(t.length!==s)throw new Error("Field.fromBytes: expected "+s+" bytes, got "+t.length);let c=r?rd(t):Go(t);if(a&&(c=vn(c,o)),!e&&!this.isValid(c))throw new Error("invalid field element: outside of range 0..ORDER");return c}invertBatch(t){return gd(this,t)}cmov(t,e,n){return cc(n,"condition"),n?e:t}}Object.freeze(_d.prototype);function Vo(i,t={}){return new _d(i,t)}function vd(i){if(typeof i!="bigint")throw new Error("field order must be bigint");if(i<=Ce)throw new Error("field order must be greater than 1");const t=Gc(i-Ce);return Math.ceil(t/8)}function iy(i){const t=vd(i);return t+Math.ceil(t/2)}function sy(i,t,e=!1){fn(i);const n=i.length,s=vd(t),r=Math.max(iy(t),16);if(n<r||n>1024)throw new Error("expected "+r+"-1024 bytes of input, got "+n);const o=e?rd(i):Go(i),a=vn(o,t-Ce)+Ce;return e?od(a,s):Hc(a,s)}/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const Js=BigInt(0),Wi=BigInt(1);function Io(i,t){const e=t.negate();return i?e:t}function Yh(i,t){const e=gd(i.Fp,t.map(n=>n.Z));return t.map((n,s)=>i.fromAffine(n.toAffine(e[s])))}function xd(i,t){if(!Number.isSafeInteger(i)||i<=0||i>t)throw new Error("invalid window size, expected [1.."+t+"], got W="+i)}function Ha(i,t){xd(i,t);const e=Math.ceil(t/i)+1,n=2**(i-1),s=2**i,r=ad(i),o=BigInt(i);return{windows:e,windowSize:n,mask:r,maxNumber:s,shiftBy:o}}function qh(i,t,e){const{windowSize:n,mask:s,maxNumber:r,shiftBy:o}=e;let a=Number(i&s),c=i>>o;a>n&&(a-=r,c+=Wi);const l=t*n,h=l+Math.abs(a)-1,u=a===0,d=a<0,f=t%2!==0;return{nextN:c,offset:h,isZero:u,isNeg:d,isNegF:f,offsetF:l}}const Ga=new WeakMap,yd=new WeakMap;function Va(i){return yd.get(i)||1}function $h(i){if(i!==Js)throw new Error("invalid wNAF")}class ry{constructor(t,e){Yt(this,"BASE");Yt(this,"ZERO");Yt(this,"Fn");Yt(this,"bits");this.BASE=t.BASE,this.ZERO=t.ZERO,this.Fn=t.Fn,this.bits=e}_unsafeLadder(t,e,n=this.ZERO){let s=t;for(;e>Js;)e&Wi&&(n=n.add(s)),s=s.double(),e>>=Wi;return n}precomputeWindow(t,e){const{windows:n,windowSize:s}=Ha(e,this.bits),r=[];let o=t,a=o;for(let c=0;c<n;c++){a=o,r.push(a);for(let l=1;l<s;l++)a=a.add(o),r.push(a);o=a.double()}return r}wNAF(t,e,n){if(!this.Fn.isValid(n))throw new Error("invalid scalar");let s=this.ZERO,r=this.BASE;const o=Ha(t,this.bits);for(let a=0;a<o.windows;a++){const{nextN:c,offset:l,isZero:h,isNeg:u,isNegF:d,offsetF:f}=qh(n,a,o);n=c,h?r=r.add(Io(d,e[f])):s=s.add(Io(u,e[l]))}return $h(n),{p:s,f:r}}wNAFUnsafe(t,e,n,s=this.ZERO){const r=Ha(t,this.bits);for(let o=0;o<r.windows&&n!==Js;o++){const{nextN:a,offset:c,isZero:l,isNeg:h}=qh(n,o,r);if(n=a,!l){const u=e[c];s=s.add(h?u.negate():u)}}return $h(n),s}getPrecomputes(t,e,n){let s=Ga.get(e);return s||(s=this.precomputeWindow(e,t),t!==1&&(typeof n=="function"&&(s=n(s)),Ga.set(e,s))),s}cached(t,e,n){const s=Va(t);return this.wNAF(s,this.getPrecomputes(s,t,n),e)}unsafe(t,e,n,s){const r=Va(t);return r===1?this._unsafeLadder(t,e,s):this.wNAFUnsafe(r,this.getPrecomputes(r,t,n),e,s)}createCache(t,e){xd(e,this.bits),yd.set(t,e),Ga.delete(t)}hasCache(t){return Va(t)!==1}}function oy(i,t,e,n){let s=t,r=i.ZERO,o=i.ZERO;for(;e>Js||n>Js;)e&Wi&&(r=r.add(s)),n&Wi&&(o=o.add(s)),s=s.double(),e>>=Wi,n>>=Wi;return{p1:r,p2:o}}function Kh(i,t,e){if(t){if(t.ORDER!==i)throw new Error("Field.ORDER must match order: Fp == p, Fn == n");return ty(t),t}else return Vo(i,{isLE:e})}function ay(i,t,e={},n){if(n===void 0&&(n=i==="edwards"),!t||typeof t!="object")throw new Error(`expected valid ${i} CURVE object`);for(const c of["p","n","h"]){const l=t[c];if(!(typeof l=="bigint"&&l>Js))throw new Error(`CURVE.${c} must be positive bigint`)}const s=Kh(t.p,e.Fp,n),r=Kh(t.n,e.Fn,n),a=["Gx","Gy","a","b"];for(const c of a)if(!s.isValid(t[c]))throw new Error(`CURVE.${c} must be valid field element of CURVE.Fp`);return t=Object.freeze(Object.assign({},t)),{CURVE:t,Fp:s,Fn:r}}function cy(i,t){return function(n){const s=i(n);return{secretKey:s,publicKey:t(s)}}}/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const Jh=(i,t)=>(i+(i>=0?t:-t)/uy)/t;function ly(i,t,e){Yx("scalar",i,ki,e);const[[n,s],[r,o]]=t,a=Jh(o*i,e),c=Jh(-s*i,e);let l=i-a*n-c*r,h=-a*s-c*o;const u=l<ki,d=h<ki;u&&(l=-l),d&&(h=-h);const f=ad(Math.ceil(Gc(e)/2))+pr;if(l<ki||l>=f||h<ki||h>=f)throw new Error("splitScalar (endomorphism): failed for k");return{k1neg:u,k1:l,k2neg:d,k2:h}}class hy extends Error{constructor(t=""){super(t)}}const Xn={Err:hy,_tlv:{encode:(i,t)=>{const{Err:e}=Xn;if(lc(i,"tag"),i<0||i>255)throw new e("tlv.encode: wrong tag");if(typeof t!="string")throw new TypeError('"data" expected string, got type='+typeof t);if(t.length&1)throw new e("tlv.encode: unpadded data");const n=t.length/2,s=mo(n);if(s.length/2&128)throw new e("tlv.encode: long form length too big");const r=n>127?mo(s.length/2|128):"";return mo(i)+r+s+t},decode(i,t){const{Err:e}=Xn;t=fn(t,void 0,"DER data");let n=0;if(i<0||i>255)throw new e("tlv.encode: wrong tag");if(t.length<2||t[n++]!==i)throw new e("tlv.decode: wrong tlv");const s=t[n++],r=!!(s&128);let o=0;if(!r)o=s;else{const c=s&127;if(!c)throw new e("tlv.decode(long): indefinite length not supported");if(c>4)throw new e("tlv.decode(long): byte length is too big");const l=t.subarray(n,n+c);if(l.length!==c)throw new e("tlv.decode: length bytes not complete");if(l[0]===0)throw new e("tlv.decode(long): zero leftmost byte");for(const h of l)o=o<<8|h;if(n+=c,o<128)throw new e("tlv.decode(long): not minimal encoding")}const a=t.subarray(n,n+o);if(a.length!==o)throw new e("tlv.decode: wrong value length");return{v:a,l:t.subarray(n+o)}}},_int:{encode(i){const{Err:t}=Xn;if(kc(i),i<ki)throw new t("integer: negative integers are not allowed");let e=mo(i);if(Number.parseInt(e[0],16)&8&&(e="00"+e),e.length&1)throw new t("unexpected DER parsing assertion: unpadded hex");return e},decode(i){const{Err:t}=Xn;if(i.length<1)throw new t("invalid signature integer: empty");if(i[0]&128)throw new t("invalid signature integer: negative");if(i.length>1&&i[0]===0&&!(i[1]&128))throw new t("invalid signature integer: unnecessary leading zero");return Go(i)}},toSig(i){const{Err:t,_int:e,_tlv:n}=Xn,s=fn(i,void 0,"signature"),{v:r,l:o}=n.decode(48,s);if(o.length)throw new t("invalid signature: left bytes after parsing");const{v:a,l:c}=n.decode(2,r),{v:l,l:h}=n.decode(2,c);if(h.length)throw new t("invalid signature: left bytes after parsing");return{r:e.decode(a),s:e.decode(l)}},hexFromSig(i){const{_tlv:t,_int:e}=Xn,n=t.encode(2,e.encode(i.r)),s=t.encode(2,e.encode(i.s)),r=n+s;return t.encode(48,r)}};Object.freeze(Xn._tlv);Object.freeze(Xn._int);Object.freeze(Xn);const ki=BigInt(0),pr=BigInt(1),uy=BigInt(2),go=BigInt(3),dy=BigInt(4);function fy(i,t={}){const e=ay("weierstrass",i,t),n=e.Fp,s=e.Fn;let r=e.CURVE;const{h:o,n:a}=r;cd(t,{},{allowInfinityPoint:"boolean",clearCofactor:"function",isTorsionFree:"function",fromBytes:"function",toBytes:"function",endo:"object"});const{endo:c,allowInfinityPoint:l}=t;if(c&&(!n.is0(r.a)||typeof c.beta!="bigint"||!Array.isArray(c.basises)))throw new Error('invalid endo: expected "beta": bigint and "basises": array');const h=my(n,s);function u(){if(!n.isOdd)throw new Error("compression is not supported: Field does not have .isOdd()")}function d(W,P,U){if(l&&P.is0())return Uint8Array.of(0);const{x:q,y:V}=P.toAffine(),tt=n.toBytes(q);if(cc(U,"isCompressed"),U){u();const $=!n.isOdd(V);return Po(py($),tt)}else return Po(Uint8Array.of(4),tt,n.toBytes(V))}function f(W){fn(W,void 0,"Point");const{publicKey:P,publicKeyUncompressed:U}=h,q=W.length,V=W[0],tt=W.subarray(1);if(l&&q===1&&V===0)return{x:n.ZERO,y:n.ZERO};if(q===P&&(V===2||V===3)){const $=n.fromBytes(tt);if(!n.isValid($))throw new Error("bad point: is not on curve, wrong x");const rt=p($);let it;try{it=n.sqrt(rt)}catch(st){const L=st instanceof Error?": "+st.message:"";throw new Error("bad point: is not on curve, sqrt error"+L)}u();const lt=n.isOdd(it);return(V&1)===1!==lt&&(it=n.neg(it)),{x:$,y:it}}else if(q===U&&V===4){const $=n.BYTES,rt=n.fromBytes(tt.subarray(0,$)),it=n.fromBytes(tt.subarray($,$*2));if(!m(rt,it))throw new Error("bad point: is not on curve");return{x:rt,y:it}}else throw new Error(`bad point: got length ${q}, expected compressed=${P} or uncompressed=${U}`)}const g=t.toBytes===void 0?d:t.toBytes,_=t.fromBytes===void 0?f:t.fromBytes;function p(W){const P=n.sqr(W),U=n.mul(P,W);return n.add(n.add(U,n.mul(W,r.a)),r.b)}function m(W,P){const U=n.sqr(P),q=p(W);return n.eql(U,q)}if(!m(r.Gx,r.Gy))throw new Error("bad curve params: generator point");const w=n.mul(n.pow(r.a,go),dy),v=n.mul(n.sqr(r.b),BigInt(27));if(n.is0(n.add(w,v)))throw new Error("bad curve params: a or b");function E(W,P,U=!1){if(!n.isValid(P)||U&&n.is0(P))throw new Error(`bad point coordinate ${W}`);return P}function B(W){if(!(W instanceof D))throw new Error("Weierstrass Point expected")}function T(W){if(!c||!c.basises)throw new Error("no endo");return ly(W,c.basises,s.ORDER)}function b(W,P,U,q,V){return U=new D(n.mul(U.X,W),U.Y,U.Z),P=Io(q,P),U=Io(V,U),P.add(U)}const A=class A{constructor(P,U,q){Yt(this,"X");Yt(this,"Y");Yt(this,"Z");this.X=E("x",P),this.Y=E("y",U,!0),this.Z=E("z",q),Object.freeze(this)}static CURVE(){return r}static fromAffine(P){const{x:U,y:q}=P||{};if(!P||!n.isValid(U)||!n.isValid(q))throw new Error("invalid affine point");if(P instanceof A)throw new Error("projective point not allowed");return n.is0(U)&&n.is0(q)?A.ZERO:new A(U,q,n.ONE)}static fromBytes(P){const U=A.fromAffine(_(fn(P,void 0,"point")));return U.assertValidity(),U}static fromHex(P){return A.fromBytes(Vx(P))}get x(){return this.toAffine().x}get y(){return this.toAffine().y}precompute(P=8,U=!0){return x.createCache(this,P),U||this.multiply(go),this}assertValidity(){const P=this;if(P.is0()){if(t.allowInfinityPoint&&n.is0(P.X)&&n.eql(P.Y,n.ONE)&&n.is0(P.Z))return;throw new Error("bad point: ZERO")}const{x:U,y:q}=P.toAffine();if(!n.isValid(U)||!n.isValid(q))throw new Error("bad point: x or y not field elements");if(!m(U,q))throw new Error("bad point: equation left != right");if(!P.isTorsionFree())throw new Error("bad point: not in prime-order subgroup")}hasEvenY(){const{y:P}=this.toAffine();if(!n.isOdd)throw new Error("Field doesn't support isOdd");return!n.isOdd(P)}equals(P){B(P);const{X:U,Y:q,Z:V}=this,{X:tt,Y:$,Z:rt}=P,it=n.eql(n.mul(U,rt),n.mul(tt,V)),lt=n.eql(n.mul(q,rt),n.mul($,V));return it&&lt}negate(){return new A(this.X,n.neg(this.Y),this.Z)}double(){const{a:P,b:U}=r,q=n.mul(U,go),{X:V,Y:tt,Z:$}=this;let rt=n.ZERO,it=n.ZERO,lt=n.ZERO,Z=n.mul(V,V),st=n.mul(tt,tt),L=n.mul($,$),G=n.mul(V,tt);return G=n.add(G,G),lt=n.mul(V,$),lt=n.add(lt,lt),rt=n.mul(P,lt),it=n.mul(q,L),it=n.add(rt,it),rt=n.sub(st,it),it=n.add(st,it),it=n.mul(rt,it),rt=n.mul(G,rt),lt=n.mul(q,lt),L=n.mul(P,L),G=n.sub(Z,L),G=n.mul(P,G),G=n.add(G,lt),lt=n.add(Z,Z),Z=n.add(lt,Z),Z=n.add(Z,L),Z=n.mul(Z,G),it=n.add(it,Z),L=n.mul(tt,$),L=n.add(L,L),Z=n.mul(L,G),rt=n.sub(rt,Z),lt=n.mul(L,st),lt=n.add(lt,lt),lt=n.add(lt,lt),new A(rt,it,lt)}add(P){B(P);const{X:U,Y:q,Z:V}=this,{X:tt,Y:$,Z:rt}=P;let it=n.ZERO,lt=n.ZERO,Z=n.ZERO;const st=r.a,L=n.mul(r.b,go);let G=n.mul(U,tt),Q=n.mul(q,$),et=n.mul(V,rt),ft=n.add(U,q),pt=n.add(tt,$);ft=n.mul(ft,pt),pt=n.add(G,Q),ft=n.sub(ft,pt),pt=n.add(U,V);let Et=n.add(tt,rt);return pt=n.mul(pt,Et),Et=n.add(G,et),pt=n.sub(pt,Et),Et=n.add(q,V),it=n.add($,rt),Et=n.mul(Et,it),it=n.add(Q,et),Et=n.sub(Et,it),Z=n.mul(st,pt),it=n.mul(L,et),Z=n.add(it,Z),it=n.sub(Q,Z),Z=n.add(Q,Z),lt=n.mul(it,Z),Q=n.add(G,G),Q=n.add(Q,G),et=n.mul(st,et),pt=n.mul(L,pt),Q=n.add(Q,et),et=n.sub(G,et),et=n.mul(st,et),pt=n.add(pt,et),G=n.mul(Q,pt),lt=n.add(lt,G),G=n.mul(Et,pt),it=n.mul(ft,it),it=n.sub(it,G),G=n.mul(ft,Q),Z=n.mul(Et,Z),Z=n.add(Z,G),new A(it,lt,Z)}subtract(P){return B(P),this.add(P.negate())}is0(){return this.equals(A.ZERO)}multiply(P){const{endo:U}=t;if(!s.isValidNot0(P))throw new RangeError("invalid scalar: out of range");let q,V;const tt=$=>x.cached(this,$,rt=>Yh(A,rt));if(U){const{k1neg:$,k1:rt,k2neg:it,k2:lt}=T(P),{p:Z,f:st}=tt(rt),{p:L,f:G}=tt(lt);V=st.add(G),q=b(U.beta,Z,L,$,it)}else{const{p:$,f:rt}=tt(P);q=$,V=rt}return Yh(A,[q,V])[0]}multiplyUnsafe(P){const{endo:U}=t,q=this,V=P;if(!s.isValid(V))throw new RangeError("invalid scalar: out of range");if(V===ki||q.is0())return A.ZERO;if(V===pr)return q;if(x.hasCache(this))return this.multiply(V);if(U){const{k1neg:tt,k1:$,k2neg:rt,k2:it}=T(V),{p1:lt,p2:Z}=oy(A,q,$,it);return b(U.beta,lt,Z,tt,rt)}else return x.unsafe(q,V)}toAffine(P){const U=this;let q=P;const{X:V,Y:tt,Z:$}=U;if(n.eql($,n.ONE))return{x:V,y:tt};const rt=U.is0();q==null&&(q=rt?n.ONE:n.inv($));const it=n.mul(V,q),lt=n.mul(tt,q),Z=n.mul($,q);if(rt)return{x:n.ZERO,y:n.ZERO};if(!n.eql(Z,n.ONE))throw new Error("invZ was invalid");return{x:it,y:lt}}isTorsionFree(){const{isTorsionFree:P}=t;return o===pr?!0:P?P(A,this):x.unsafe(this,a).is0()}clearCofactor(){const{clearCofactor:P}=t;return o===pr?this:P?P(A,this):this.multiplyUnsafe(o)}isSmallOrder(){return o===pr?this.is0():this.clearCofactor().is0()}toBytes(P=!0){return cc(P,"isCompressed"),this.assertValidity(),g(A,this,P)}toHex(P=!0){return Gx(this.toBytes(P))}toString(){return`<Point ${this.is0()?"ZERO":this.toHex()}>`}};Yt(A,"BASE",new A(r.Gx,r.Gy,n.ONE)),Yt(A,"ZERO",new A(n.ZERO,n.ONE,n.ZERO)),Yt(A,"Fp",n),Yt(A,"Fn",s);let D=A;const S=s.BITS,x=new ry(D,t.endo?Math.ceil(S/2):S);return S>=8&&D.BASE.precompute(8),Object.freeze(D.prototype),Object.freeze(D),D}function py(i){return Uint8Array.of(i?2:3)}function my(i,t){return{secretKey:t.BYTES,publicKey:1+i.BYTES,publicKeyUncompressed:1+2*i.BYTES,publicKeyHasPrefix:!0,signature:2*t.BYTES}}/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const Wo={p:BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"),n:BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"),h:BigInt(1),a:BigInt(0),b:BigInt(7),Gx:BigInt("0x79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798"),Gy:BigInt("0x483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8")},gy={beta:BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),basises:[[BigInt("0x3086d221a7d46bcde86c90e49284eb15"),-BigInt("0xe4437ed6010e88286f547fa90abfe4c3")],[BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"),BigInt("0x3086d221a7d46bcde86c90e49284eb15")]]},_y=BigInt(0),hc=BigInt(2);function vy(i){const t=Wo.p,e=BigInt(3),n=BigInt(6),s=BigInt(11),r=BigInt(22),o=BigInt(23),a=BigInt(44),c=BigInt(88),l=i*i*i%t,h=l*l*i%t,u=an(h,e,t)*h%t,d=an(u,e,t)*h%t,f=an(d,hc,t)*l%t,g=an(f,s,t)*f%t,_=an(g,r,t)*g%t,p=an(_,a,t)*_%t,m=an(p,c,t)*p%t,w=an(m,a,t)*_%t,v=an(w,e,t)*h%t,E=an(v,o,t)*g%t,B=an(E,n,t)*l%t,T=an(B,hc,t);if(!Do.eql(Do.sqr(T),i))throw new Error("Cannot find square root");return T}const Do=Vo(Wo.p,{sqrt:vy}),ir=fy(Wo,{Fp:Do,endo:gy}),jh={};function No(i,...t){let e=jh[i];if(e===void 0){const n=Vh(Xx(i));e=Po(n,n),jh[i]=e}return Vh(Po(e,...t))}const Xo=i=>i.toBytes(!0).slice(1),Zo=i=>i%hc===_y;function Md(i){const{Fn:t,BASE:e}=ir,n=t.fromBytes(i),s=e.multiply(n);return{scalar:Zo(s.y)?n:t.neg(n),bytes:Xo(s)}}function Sd(i){const t=Do;if(!t.isValidNot0(i))throw new Error("invalid x: Fail if x ≥ p");const e=t.create(i*i),n=t.create(e*i+BigInt(7));let s=t.sqrt(n);Zo(s)||(s=t.neg(s));const r=ir.fromAffine({x:i,y:s});return r.assertValidity(),r}const Os=Go;function Ed(...i){return ir.Fn.create(Os(No("BIP0340/challenge",...i)))}function Qh(i){return Md(i).bytes}function xy(i,t,e=nd(32)){const{Fn:n,BASE:s}=ir,r=fn(i,void 0,"message"),{bytes:o,scalar:a}=Md(t),c=fn(e,32,"auxRand"),l=n.toBytes(a^Os(No("BIP0340/aux",c))),h=No("BIP0340/nonce",l,o,r),u=n.create(Os(h));if(u===0n)throw new Error("sign failed: k is zero");const d=s.multiply(u),f=Zo(d.y)?u:n.neg(u),g=Xo(d),_=Ed(g,o,r),p=new Uint8Array(64);if(p.set(g,0),p.set(n.toBytes(n.create(f+_*a)),32),!wd(p,r,o))throw new Error("sign: Invalid signature produced");return p}function wd(i,t,e){const{Fp:n,Fn:s,BASE:r}=ir,o=fn(i,64,"signature"),a=fn(t,void 0,"message"),c=fn(e,32,"publicKey");try{const l=Sd(Os(c)),h=Os(o.subarray(0,32));if(!n.isValidNot0(h))return!1;const u=Os(o.subarray(32,64));if(!s.isValidNot0(u))return!1;const d=Ed(s.toBytes(h),Xo(l),a),f=r.multiplyUnsafe(u).add(l.multiplyUnsafe(s.neg(d))),{x:g,y:_}=f.toAffine();return!(f.is0()||!Zo(_)||g!==h)}catch{return!1}}const bd=(()=>{const e=n=>(n=n===void 0?nd(48):n,sy(n,Wo.n));return Object.freeze({keygen:cy(e,Qh),getPublicKey:Qh,sign:xy,verify:wd,Point:ir,utils:Object.freeze({randomSecretKey:e,taggedHash:No,lift_x:Sd,pointToBytes:Xo}),lengths:Object.freeze({secretKey:32,publicKey:32,publicKeyHasPrefix:!1,signature:32*2,seed:48})})})(),uc="sw_id_v1",dc=i=>Array.from(i).map(t=>t.toString(16).padStart(2,"0")).join(""),tu=i=>{const t=i.replace(/-/g,"+").replace(/_/g,"/"),e=atob(t);return Uint8Array.from(e,n=>n.charCodeAt(0))};class eu{constructor(t,e,n,s){this.peerId=t,this.displayName=e,this.isNew=s,this._priv=n}get shortId(){return this.peerId.slice(-8)}setName(t){this.displayName=t,Td()}async sign(t){const e=new TextEncoder().encode(t),n=await crypto.subtle.sign({name:"Ed25519"},this._priv,e);return dc(new Uint8Array(n))}}let Zn=null,_r=null;function Td(){if(!(!Zn||!_r))try{localStorage.setItem(uc,JSON.stringify({privJwk:_r,displayName:Zn.displayName}))}catch{}}async function yy(){if(Zn)return Zn;const i=localStorage.getItem(uc);if(i)try{const{privJwk:n,displayName:s}=JSON.parse(i),r=await crypto.subtle.importKey("jwk",n,{name:"Ed25519"},!1,["sign"]),o=dc(tu(n.x));return _r=n,Zn=new eu(o,s||"",r,!1),Zn}catch{localStorage.removeItem(uc)}const t=await crypto.subtle.generateKey({name:"Ed25519"},!0,["sign","verify"]);_r=await crypto.subtle.exportKey("jwk",t.privateKey);const e=dc(tu(_r.x));return Zn=new eu(e,"",t.privateKey,!0),Td(),Zn}function Ad(){return Zn}const My=["wss://relay.primal.net","wss://nos.lol","wss://relay.snort.social","wss://relay.damus.io"],Sy=[{urls:"stun:stun.l.google.com:19302"},{urls:"stun:stun1.l.google.com:19302"},{urls:"turn:openrelay.metered.ca:80",username:"openrelayproject",credential:"openrelayproject"},{urls:"turn:openrelay.metered.ca:80?transport=tcp",username:"openrelayproject",credential:"openrelayproject"}];function Ey(){return`sw-2-${window.location.hash.slice(1).trim().toLowerCase().replace(/[^a-z0-9-]/g,"-").replace(/-{2,}/g,"-").slice(0,40)||"main"}`}function wy(){return window.location.hash.slice(1).trim()||"main"}function by(i){const t=i.trim().toLowerCase().replace(/[^a-z0-9-]/g,"-").replace(/-{2,}/g,"-")||"main";window.location.hash=t}const fc=i=>Array.from(i).map(t=>t.toString(16).padStart(2,"0")).join(""),Ty=i=>new Uint8Array(i.match(/.{2}/g).map(t=>parseInt(t,16)));function Ay(){const i=crypto.getRandomValues(new Uint8Array(32)),t=fc(bd.getPublicKey(i));return{privkey:i,pubkey:t}}async function Wa(i,t,e,n){const s={pubkey:t,created_at:Math.floor(Date.now()/1e3),kind:20001,tags:e,content:typeof n=="string"?n:JSON.stringify(n)},r=new TextEncoder().encode(JSON.stringify([0,s.pubkey,s.created_at,s.kind,s.tags,s.content])),o=await crypto.subtle.digest("SHA-256",r);return s.id=fc(new Uint8Array(o)),s.sig=fc(await bd.sign(Ty(s.id),i)),s}var qn,Sr,gi,Bs,Er,pc;class Ry{constructor(){Dt(this,Er);Dt(this,qn,[]);Dt(this,Sr,new Set);Dt(this,gi,new Map);Dt(this,Bs,!1)}connect(t){return new Promise(e=>{let n=!1;for(const s of t){const r={url:s,ws:null,ready:!1,retries:0};O(this,qn).push(r),Lt(this,Er,pc).call(this,r,()=>{n||(n=!0,e())})}setTimeout(()=>{n||(n=!0,e())},1e4)})}subscribe(t,e,n){O(this,gi).set(t,{filter:e,cb:n});const s=JSON.stringify(["REQ",t,e]);for(const r of O(this,qn))r.ready&&r.ws.send(s)}unsubscribe(t){O(this,gi).delete(t);const e=JSON.stringify(["CLOSE",t]);for(const n of O(this,qn))n.ready&&n.ws.send(e)}publish(t){const e=JSON.stringify(["EVENT",t]);let n=0;for(const s of O(this,qn))s.ready&&(s.ws.send(e),n++);return n>0}close(){var t;qt(this,Bs,!0);for(const e of O(this,qn))try{(t=e.ws)==null||t.close()}catch{}qt(this,qn,[]),O(this,gi).clear()}}qn=new WeakMap,Sr=new WeakMap,gi=new WeakMap,Bs=new WeakMap,Er=new WeakSet,pc=function(t,e){if(O(this,Bs))return;const n=new WebSocket(t.url);t.ws=n,n.addEventListener("open",()=>{t.ready=!0,t.retries=0,e==null||e(),e=null;for(const[s,{filter:r}]of O(this,gi))n.send(JSON.stringify(["REQ",s,r]))}),n.addEventListener("message",({data:s})=>{var r;try{const o=JSON.parse(s);if(o[0]!=="EVENT")return;const a=o[2];if(!(a!=null&&a.id)||O(this,Sr).has(a.id))return;O(this,Sr).add(a.id),(r=O(this,gi).get(o[1]))==null||r.cb(a)}catch{}}),n.addEventListener("close",()=>{if(t.ready=!1,O(this,Bs))return;const s=Math.min(2e3*2**t.retries++,3e4);setTimeout(()=>Lt(this,Er,pc).call(this,t,null),s)}),n.addEventListener("error",()=>{})};var fe,$n,zs,Zi,ks,wr,br,Tr,Hs,Ar,Ai,mc,gc;class Cy extends EventTarget{constructor(e){super();Dt(this,Ai);Dt(this,fe);Dt(this,$n,null);Dt(this,zs,!1);Dt(this,Zi,!1);Dt(this,ks,!1);Dt(this,wr,null);Dt(this,br,null);Dt(this,Tr,[]);Dt(this,Hs,!1);Dt(this,Ar,async()=>{if(!O(this,Zi)&&O(this,fe).signalingState==="stable")try{qt(this,Zi,!0),await O(this,fe).setLocalDescription(),this.dispatchEvent(new CustomEvent("signal",{detail:{type:"offer",sdp:O(this,fe).localDescription.sdp}}))}catch(e){console.warn("[RTCPeer] negotiate error",e)}finally{qt(this,Zi,!1)}});qt(this,zs,e),qt(this,fe,new RTCPeerConnection({iceServers:Sy})),e||(qt(this,$n,O(this,fe).createDataChannel("sw",{ordered:!0})),Lt(this,Ai,mc).call(this,O(this,$n))),O(this,fe).ondatachannel=({channel:n})=>{qt(this,$n,n),Lt(this,Ai,mc).call(this,n)},O(this,fe).onicecandidate=({candidate:n})=>{n&&this.dispatchEvent(new CustomEvent("signal",{detail:{type:"ice",candidate:n.toJSON()}}))},O(this,fe).onnegotiationneeded=O(this,Ar),O(this,fe).ontrack=({track:n,streams:s})=>{var o;const r=s[0]??new MediaStream([n]);(o=O(this,br))==null||o.call(this,n,r)},O(this,fe).onconnectionstatechange=()=>{O(this,fe).connectionState==="failed"&&this.dispatchEvent(new CustomEvent("failed"))}}async handleSignal({type:e,sdp:n,candidate:s}){try{if(e==="offer"){const r=O(this,fe).signalingState==="have-local-offer",o=O(this,Zi)||r;if(qt(this,ks,!O(this,zs)&&o),O(this,ks))return;await O(this,fe).setRemoteDescription({type:"offer",sdp:n}),qt(this,Hs,!0),await O(this,fe).setLocalDescription(),this.dispatchEvent(new CustomEvent("signal",{detail:{type:"answer",sdp:O(this,fe).localDescription.sdp}})),await Lt(this,Ai,gc).call(this),O(this,zs)&&r&&setTimeout(O(this,Ar),200)}else if(e==="answer")O(this,fe).signalingState==="have-local-offer"&&(await O(this,fe).setRemoteDescription({type:"answer",sdp:n}),qt(this,Hs,!0),await Lt(this,Ai,gc).call(this));else if(e==="ice")if(!O(this,Hs))O(this,Tr).push(s);else try{await O(this,fe).addIceCandidate(s)}catch(r){O(this,ks)||console.warn("[RTCPeer] addIceCandidate",r)}}catch(r){console.warn("[RTCPeer] handleSignal",e,r)}}send(e){var n;((n=O(this,$n))==null?void 0:n.readyState)==="open"&&O(this,$n).send(JSON.stringify(e))}addTrack(e,n){try{O(this,fe).addTrack(e,n)}catch{}}onMessage(e){qt(this,wr,e)}onTrack(e){qt(this,br,e)}get pc(){return O(this,fe)}get connected(){var e;return((e=O(this,$n))==null?void 0:e.readyState)==="open"}close(){try{O(this,fe).close()}catch{}}}fe=new WeakMap,$n=new WeakMap,zs=new WeakMap,Zi=new WeakMap,ks=new WeakMap,wr=new WeakMap,br=new WeakMap,Tr=new WeakMap,Hs=new WeakMap,Ar=new WeakMap,Ai=new WeakSet,mc=function(e){e.onopen=()=>this.dispatchEvent(new CustomEvent("open")),e.onclose=()=>this.dispatchEvent(new CustomEvent("close")),e.onmessage=({data:n})=>{var s;try{(s=O(this,wr))==null||s.call(this,JSON.parse(n))}catch{}}},gc=async function(){const e=O(this,Tr).splice(0);for(const n of e)try{await O(this,fe).addIceCandidate(n)}catch{}};var $e,cn,Ue,_i,Gs,Kn,Yi,qi,$i,Jn,Vs,Rr,Cr,Qt,Rd,Cd,_c,vc,Pd,xc,Ld,di,Wn;class Py{constructor(t,e=0,n="available"){Dt(this,Qt);Dt(this,$e,null);Dt(this,cn,null);Dt(this,Ue,new Map);Dt(this,_i,new Map);Dt(this,Gs,new Map);Dt(this,Kn,{});Dt(this,Yi,"");Dt(this,qi,0);Dt(this,$i,"available");Dt(this,Jn,"");Dt(this,Vs,null);Dt(this,Rr,[]);Dt(this,Cr,0);qt(this,Yi,t),qt(this,qi,e),qt(this,$i,n)}async start(){qt(this,$e,Ay()),qt(this,Jn,Ey()),qt(this,cn,new Ry),await O(this,cn).connect(My),O(this,cn).subscribe("room-presence",{kinds:[20001],"#r":[O(this,Jn)],"#t":["hello","bye"]},t=>Lt(this,Qt,Rd).call(this,t)),O(this,cn).subscribe("room-signals",{kinds:[20001],"#r":[O(this,Jn)],"#p":[O(this,$e).pubkey]},t=>Lt(this,Qt,Cd).call(this,t)),await Lt(this,Qt,xc).call(this)}stop(){var t;Lt(this,Qt,Ld).call(this),(t=O(this,cn))==null||t.close();for(const{peer:e}of O(this,Ue).values())e.close();O(this,Ue).clear(),O(this,_i).clear(),O(this,Gs).clear(),qt(this,cn,null)}move(t,e,n,s=0){const r={type:"move",identityId:Lt(this,Qt,di).call(this),pos:{x:t,y:e,z:n,ry:s}};for(const{peer:o}of O(this,Ue).values())o.send(r)}chat(t){const e={type:"chat",identityId:Lt(this,Qt,di).call(this),username:O(this,Yi),text:t,ts:Date.now()};for(const{peer:n}of O(this,Ue).values())n.send(e)}setAvatar(t){qt(this,qi,t);const e={type:"avatar",identityId:Lt(this,Qt,di).call(this),presetId:t};for(const{peer:n}of O(this,Ue).values())n.send(e)}setStatus(t){qt(this,$i,t);const e={type:"status",identityId:Lt(this,Qt,di).call(this),status:t};for(const{peer:n}of O(this,Ue).values())n.send(e)}addVoiceTrack(t,e){O(this,Rr).push({track:t,stream:e});for(const{peer:n}of O(this,Ue).values())n.addTrack(t,e)}onVoiceTrack(t){qt(this,Vs,t);for(const[e,{identityId:n,peer:s}]of O(this,Ue))for(const r of s.pc.getReceivers()){const o=r.track;!o||o.kind!=="audio"||o.readyState==="ended"||t(o,new MediaStream([o]),n,e)}}wireToIdentityId(t){return O(this,_i).get(t)??t}getPeers(){const t={};for(const[e,{peer:n}]of O(this,Ue))t[e]=n.pc;return t}on(t,e){return O(this,Kn)[t]||(O(this,Kn)[t]=[]),O(this,Kn)[t].push(e),()=>{O(this,Kn)[t]=O(this,Kn)[t].filter(n=>n!==e)}}}$e=new WeakMap,cn=new WeakMap,Ue=new WeakMap,_i=new WeakMap,Gs=new WeakMap,Kn=new WeakMap,Yi=new WeakMap,qi=new WeakMap,$i=new WeakMap,Jn=new WeakMap,Vs=new WeakMap,Rr=new WeakMap,Cr=new WeakMap,Qt=new WeakSet,Rd=async function(t){var r;const e=t.pubkey;if(e===O(this,$e).pubkey)return;const n=(r=t.tags.find(o=>o[0]==="t"))==null?void 0:r[1],s=(()=>{try{return JSON.parse(t.content)}catch{return{}}})();if(n==="hello"){const{identityId:o,username:a="",presetId:c=0,status:l="available"}=s;if(O(this,_i).set(e,o),O(this,Gs).set(o,e),Lt(this,Qt,Wn).call(this,"HELLO",{from:o,username:a,presetId:c,status:l}),!O(this,Ue).has(e)){const u=O(this,$e).pubkey<e;await Lt(this,Qt,_c).call(this,e,o,u)}const h=Date.now();h-O(this,Cr)>2e3&&(qt(this,Cr,h),await Lt(this,Qt,xc).call(this))}if(n==="bye"){const{identityId:o}=s;Lt(this,Qt,vc).call(this,e,o)}},Cd=async function(t){var s;const e=t.pubkey,n=(()=>{try{return JSON.parse(t.content)}catch{return null}})();if(n){if(!O(this,Ue).has(e)){const r=O(this,_i).get(e)??e,o=O(this,$e).pubkey<e;await Lt(this,Qt,_c).call(this,e,r,o)}await((s=O(this,Ue).get(e))==null?void 0:s.peer.handleSignal(n))}},_c=async function(t,e,n){const s=new Cy(n);O(this,Ue).set(t,{identityId:e,peer:s}),s.addEventListener("signal",async({detail:r})=>{var a;const o=await Wa(O(this,$e).privkey,O(this,$e).pubkey,[["r",O(this,Jn)],["p",t]],r);(a=O(this,cn))==null||a.publish(o)}),s.onMessage(r=>Lt(this,Qt,Pd).call(this,r,e)),s.onTrack((r,o)=>{O(this,Vs)&&O(this,Vs).call(this,r,o,e,t)}),s.addEventListener("open",()=>{s.send({type:"intro",identityId:Lt(this,Qt,di).call(this),username:O(this,Yi),presetId:O(this,qi),status:O(this,$i)})}),s.addEventListener("failed",()=>Lt(this,Qt,vc).call(this,t,e));for(const{track:r,stream:o}of O(this,Rr))s.addTrack(r,o);return s},vc=function(t,e){const n=O(this,Ue).get(t);n&&(n.peer.close(),O(this,Ue).delete(t),O(this,_i).delete(t),O(this,Gs).delete(e??n.identityId),Lt(this,Qt,Wn).call(this,"PEER_LEAVE",{from:e??n.identityId}))},Pd=function(t,e){const n=t.identityId??e;switch(t.type){case"intro":Lt(this,Qt,Wn).call(this,"HELLO",{from:n,username:t.username,presetId:t.presetId??0,status:t.status??"available"});break;case"move":Lt(this,Qt,Wn).call(this,"MOVE",{from:n,pos:t.pos});break;case"chat":Lt(this,Qt,Wn).call(this,"CHAT",{from:n,username:t.username,text:t.text,ts:t.ts});break;case"avatar":Lt(this,Qt,Wn).call(this,"AVATAR_CHANGE",{from:n,presetId:t.presetId});break;case"status":Lt(this,Qt,Wn).call(this,"STATUS_CHANGE",{from:n,status:t.status});break;case"bye":Lt(this,Qt,Wn).call(this,"PEER_LEAVE",{from:n});break}},xc=async function(){var e;const t=await Wa(O(this,$e).privkey,O(this,$e).pubkey,[["r",O(this,Jn)],["t","hello"]],{identityId:Lt(this,Qt,di).call(this),username:O(this,Yi),presetId:O(this,qi),status:O(this,$i)});(e=O(this,cn))==null||e.publish(t)},Ld=async function(){var e;const t=await Wa(O(this,$e).privkey,O(this,$e).pubkey,[["r",O(this,Jn)],["t","bye"]],{identityId:Lt(this,Qt,di).call(this)});(e=O(this,cn))==null||e.publish(t)},di=function(){var t;return((t=Ad())==null?void 0:t.peerId)??"unknown"},Wn=function(t,e){var n;(n=O(this,Kn)[t])==null||n.forEach(s=>s(e))};var Re,ln,Ws,Pr,Lr,Ir,Ve,Id,Dd,wn;class Ly extends EventTarget{constructor(){super(...arguments);Dt(this,Ve);Dt(this,Re,null);Dt(this,ln,new Map);Dt(this,Ws,!1);Dt(this,Pr,"");Dt(this,Lr,0);Dt(this,Ir,"available")}get id(){var e;return((e=Ad())==null?void 0:e.peerId)??""}get peers(){return[...O(this,ln).values()]}get peerCount(){return O(this,ln).size}async start(e,n=0,s="available"){O(this,Ws)||(qt(this,Ws,!0),qt(this,Pr,e),qt(this,Lr,n),qt(this,Ir,s),qt(this,Re,new Py(e,n,s)),O(this,Re).on("HELLO",({from:r,username:o,presetId:a=0,status:c="available"})=>{O(this,ln).has(r)||Lt(this,Ve,Id).call(this,r,o,a,c)}),O(this,Re).on("PEER_LEAVE",({from:r})=>Lt(this,Ve,Dd).call(this,r)),O(this,Re).on("MOVE",({from:r,pos:o})=>{Lt(this,Ve,wn).call(this,"peer:move",{peerId:r,pos:o})}),O(this,Re).on("AVATAR_CHANGE",({from:r,presetId:o})=>{Lt(this,Ve,wn).call(this,"peer:avatar",{peerId:r,presetId:o})}),O(this,Re).on("STATUS_CHANGE",({from:r,status:o})=>{Lt(this,Ve,wn).call(this,"peer:status",{peerId:r,status:o})}),O(this,Re).on("CHAT",({from:r,username:o,text:a,ts:c})=>{Lt(this,Ve,wn).call(this,"chat",{from:r,username:o,text:a,ts:c})}),await O(this,Re).start())}stop(){var e;(e=O(this,Re))==null||e.stop(),qt(this,Re,null),O(this,ln).clear(),qt(this,Ws,!1)}move(e,n,s,r=0){var o;(o=O(this,Re))==null||o.move(e,n,s,r)}setAvatar(e){var n;qt(this,Lr,e),(n=O(this,Re))==null||n.setAvatar(e)}setStatus(e){var n;qt(this,Ir,e),(n=O(this,Re))==null||n.setStatus(e)}sendChat(e){var s;if(!e.trim())return;const n=Date.now();Lt(this,Ve,wn).call(this,"chat",{from:this.id,username:O(this,Pr),text:e,ts:n}),(s=O(this,Re))==null||s.chat(e)}addVoiceTrack(e,n){var s;(s=O(this,Re))==null||s.addVoiceTrack(e,n)}onVoiceTrack(e){var n;(n=O(this,Re))==null||n.onVoiceTrack(e)}wireToIdentityId(e){var n;return(n=O(this,Re))==null?void 0:n.wireToIdentityId(e)}}Re=new WeakMap,ln=new WeakMap,Ws=new WeakMap,Pr=new WeakMap,Lr=new WeakMap,Ir=new WeakMap,Ve=new WeakSet,Id=function(e,n,s,r){O(this,ln).set(e,{peerId:e,username:n,presetId:s,status:r}),Lt(this,Ve,wn).call(this,"peer:join",{peerId:e,username:n,presetId:s,status:r}),Lt(this,Ve,wn).call(this,"status",{peerCount:O(this,ln).size})},Dd=function(e){O(this,ln).has(e)&&(O(this,ln).delete(e),Lt(this,Ve,wn).call(this,"peer:leave",{peerId:e}),Lt(this,Ve,wn).call(this,"status",{peerCount:O(this,ln).size}))},wn=function(e,n){this.dispatchEvent(new CustomEvent(e,{detail:n}))};const Ne=new Ly,Hn=Object.freeze({OCEAN:"ocean",COAST:"coast",DESERT:"desert",PLAINS:"plains",FOREST:"forest",MOUNTAIN:"mountain",ARCTIC:"arctic",JUNGLE:"jungle",TUNDRA:"tundra"});function _o(i){let t=5381;for(let e=0;e<i.length;e++)t=Math.imul(t,33)^i.charCodeAt(e);return(t>>>0).toString(16).padStart(8,"0")}function Nd(i,t,e,n){const s=JSON.stringify({parentHash:i,authorId:t,changes:e,timestamp:n});let r=_o(s),o=_o(r+s.slice(0,32)),a=_o(o+s.slice(-32)),c=_o(a+t);return r+o+a+c}class Is{constructor(t,e,n,s="",r=Date.now()){this.parentHash=t,this.authorId=e,this.changes=Object.freeze([...n]),this.message=s,this.timestamp=r,this.hash=Nd(t,e,n,r)}buildRevert(t,e=Date.now()){const n=this.changes.map(s=>({cellId:s.cellId,key:s.key,oldValue:s.newValue,newValue:s.oldValue}));return new Is(this.hash,t,n,`revert: ${this.message||this.hash.slice(0,8)}`,e)}toJSON(){return{hash:this.hash,parentHash:this.parentHash,authorId:this.authorId,message:this.message,timestamp:this.timestamp,changes:this.changes}}}const Iy="universe",Dy="genesis: the universe begins";var Oe,Ke;class Ny{constructor(){Dt(this,Oe,new Map);Dt(this,Ke,null);this._genesis()}_genesis(){const t=new Is(null,Iy,[],Dy,0);O(this,Oe).set(t.hash,t),qt(this,Ke,t.hash)}get head(){return O(this,Ke)}get length(){return O(this,Oe).size}getCommit(t){return O(this,Oe).get(t)??null}headCommit(){return O(this,Oe).get(O(this,Ke))}log(t=1/0){const e=[];let n=O(this,Ke);for(;n&&e.length<t;){const s=O(this,Oe).get(n);if(!s)break;e.push(s),n=s.parentHash}return e}stateAt(t){const e=[];let n=t;for(;n;){const r=O(this,Oe).get(n);if(!r)break;e.unshift(r),n=r.parentHash}const s=new Map;for(const r of e)for(const{cellId:o,key:a,newValue:c}of r.changes)s.set(`${o}:${a}`,c);return s}currentState(){return this.stateAt(O(this,Ke))}diff(t,e){const n=this.stateAt(t),s=this.stateAt(e),r=[],o=new Set([...n.keys(),...s.keys()]);for(const a of o){const c=n.get(a)??null,l=s.get(a)??null;if(c!==l){const[h,u]=a.split(":");r.push({cellId:h,key:u,before:c,after:l})}}return r}commit(t,e,n=""){if(!Array.isArray(e)||e.length===0)throw new Error("commit requires at least one change");for(const r of e)if(!r.cellId||!r.key)throw new Error("each change must have cellId and key");const s=new Is(O(this,Ke),t,e,n);return O(this,Oe).set(s.hash,s),qt(this,Ke,s.hash),s}revert(t,e){const n=O(this,Oe).get(t);if(!n)throw new Error(`commit ${t} not found`);if(n.changes.length===0)throw new Error("cannot revert empty commit");n.buildRevert(e);const s=new Is(O(this,Ke),e,[...n.changes].map(r=>({cellId:r.cellId,key:r.key,oldValue:r.newValue,newValue:r.oldValue})),`revert: ${n.message||n.hash.slice(0,8)}`);return O(this,Oe).set(s.hash,s),qt(this,Ke,s.hash),s}applyExternal(t){if(O(this,Oe).has(t.hash))return O(this,Oe).get(t.hash);if(t.parentHash&&!O(this,Oe).has(t.parentHash))throw new Error(`missing parent ${t.parentHash} — cannot apply ${t.hash}`);const e=new Is(t.parentHash,t.authorId,t.changes,t.message,t.timestamp);return O(this,Oe).set(t.hash,e),t.parentHash===O(this,Ke)&&qt(this,Ke,t.hash),e}verify(){for(const t of O(this,Oe).values()){if(Nd(t.parentHash,t.authorId,t.changes,t.timestamp)!==t.hash)return{valid:!1,broken:t.hash};if(t.parentHash&&!O(this,Oe).has(t.parentHash))return{valid:!1,broken:t.hash,reason:"missing-parent"}}return{valid:!0}}}Oe=new WeakMap,Ke=new WeakMap;const le=Object.freeze({SOLAR:"solar",WIND:"wind",HYDRO:"hydro",MINERAL:"mineral",RARE_EARTH:"rare_earth",BIOLOGICAL:"biological",FISHERY:"fishery",GEOTHERMAL:"geothermal"});Hn.OCEAN+"",le.FISHERY+"",le.WIND+"",Hn.COAST+"",le.FISHERY+"",le.WIND+"",le.SOLAR+"",Hn.DESERT+"",le.SOLAR+"",le.RARE_EARTH+"",le.MINERAL+"",Hn.PLAINS+"",le.WIND+"",le.MINERAL+"",le.BIOLOGICAL+"",le.SOLAR+"",Hn.FOREST+"",le.BIOLOGICAL+"",le.HYDRO+"",le.WIND+"",Hn.MOUNTAIN+"",le.MINERAL+"",le.RARE_EARTH+"",le.GEOTHERMAL+"",le.WIND+"",le.HYDRO+"",Hn.ARCTIC+"",le.MINERAL+"",le.WIND+"",Hn.JUNGLE+"",le.BIOLOGICAL+"",le.HYDRO+"",le.SOLAR+"",Hn.TUNDRA+"",le.MINERAL+"",le.GEOTHERMAL+"",le.WIND+"";(async()=>{const i=await yy(),t=new Ny;window._worldHistory=t;let e=!1;function n({peerCount:_}={}){document.querySelectorAll(".ipfs-dot").forEach(p=>{p.className="ipfs-dot green"}),document.querySelectorAll("#ipfs-label").forEach(p=>{p.textContent=`P2P · ${i.shortId}`}),_!==void 0&&document.querySelectorAll("#ipfs-peers").forEach(p=>{_>0?(p.textContent=`${_} peer${_!==1?"s":""}`,p.style.color="rgba(120,255,160,0.7)"):e?(p.textContent="· searching…",p.style.color="rgba(255,200,80,0.7)"):p.textContent=""})}n({peerCount:0}),Ne.addEventListener("status",_=>n(_.detail)),Ne.addEventListener("commit",_=>{try{t.applyExternal(_.detail.commit)}catch{}});const s=document.getElementById("lobby"),r=document.getElementById("loading"),o=document.getElementById("load-fill"),a=document.getElementById("load-text"),c=document.getElementById("hud"),l=document.getElementById("click-to-start"),h=document.getElementById("enter-btn"),u=document.getElementById("username"),d=document.getElementById("room-name");!i.isNew&&i.displayName&&(u.value=i.displayName),d&&(d.value=wy());const f=document.getElementById("id-fingerprint");f&&(f.textContent=i.isNew?"New identity generated":`Identity · ${i.shortId}`),function(){const p=document.getElementById("lobby-avatar-grid");if(!p)return;const m=parseInt(localStorage.getItem("spaceAvatarId")??"0",10),w=v=>"#"+v.toString(16).padStart(6,"0");Ji.forEach(v=>{const E=w(v.skin),B=w(v.hair),T=w(v.outfit),b=w(v.accent),D=document.createElement("div");D.className="lav-chip"+(v.id===m?" lav-active":""),D.dataset.id=String(v.id),D.title=v.label,D.innerHTML=`<svg viewBox="0 0 60 82" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="30" cy="16" rx="17" ry="14" fill="${B}"/>
        <circle cx="30" cy="22" r="13" fill="${E}"/>
        <ellipse cx="17.5" cy="22" rx="3.5" ry="4.5" fill="${E}"/>
        <ellipse cx="42.5" cy="22" rx="3.5" ry="4.5" fill="${E}"/>
        <circle cx="25" cy="21" r="2.8" fill="${b}"/><circle cx="35" cy="21" r="2.8" fill="${b}"/>
        <circle cx="25" cy="21" r="1.6" fill="#111"/><circle cx="35" cy="21" r="1.6" fill="#111"/>
        <rect x="26.5" y="34" width="7" height="5" rx="2" fill="${E}"/>
        <rect x="14" y="39" width="32" height="24" rx="6" fill="${T}"/>
        <rect x="22" y="44" width="16" height="5" rx="2" fill="${b}" opacity="0.75"/>
        <rect x="5" y="40" width="10" height="20" rx="5" fill="${T}"/>
        <rect x="45" y="40" width="10" height="20" rx="5" fill="${T}"/>
        <rect x="16" y="62" width="11" height="14" rx="4" fill="${T}"/>
        <rect x="33" y="62" width="11" height="14" rx="4" fill="${T}"/>
      </svg>`,D.addEventListener("click",()=>{p.querySelectorAll(".lav-chip").forEach(S=>S.classList.remove("lav-active")),D.classList.add("lav-active"),localStorage.setItem("spaceAvatarId",String(v.id))}),p.appendChild(D)})}(),u==null||u.addEventListener("keydown",_=>{_.key==="Enter"&&g()}),d==null||d.addEventListener("keydown",_=>{_.key==="Enter"&&g()}),h==null||h.addEventListener("click",g);function g(){const _=u.value.trim();if(!_){u.focus(),u.style.borderColor="#f55";return}u.style.borderColor="",i.setName(_),d!=null&&d.value.trim()&&by(d.value.trim()),window._spaceUsername=_,s.style.display="none",r.classList.add("visible");const{scene:p,camera:m,renderer:w,onShipLoaded:v}=zv((E,B)=>{o.style.width=E+"%",a.textContent=B});v(()=>{var Nt,vt,Vt,Kt,_e,F;r.classList.remove("visible"),c.classList.add("visible"),l.classList.remove("hidden");const{meshes:E,screens:B}=kv(p),{openScreen:T,isOpen:b}=_x(),D=parseInt(localStorage.getItem("spaceAvatarId")??"0",10),S=new Rx(z=>A==null?void 0:A.navigate(z)),x=document.getElementById("presence-panel");x&&x.classList.add("pp-visible"),S.setSelf(_,D,"OUTSIDE","available");const A=dx(p,m,w,z=>{Oy(z),S.updateSelfZone(z)},z=>{Ne.setAvatar(z),S.setSelf(_,z,S._self.zone,W)});let W="available";const P=document.getElementById("status-btn"),U=document.getElementById("status-menu");P&&U&&(Uc.forEach(z=>{const k="#"+z.color.toString(16).padStart(6,"0"),X=document.createElement("div");X.className="sm-opt"+(z.id===W?" sm-active":""),X.dataset.status=z.id,X.innerHTML=`<span class="sm-dot" style="background:${k};box-shadow:0 0 4px ${k}40"></span>${z.label}`,X.addEventListener("click",nt=>{nt.stopPropagation(),W=z.id,P.innerHTML=`<span class="sm-dot" style="background:${k};box-shadow:0 0 4px ${k}40;display:inline-block;vertical-align:middle;width:8px;height:8px;border-radius:50%;margin-right:5px"></span>${z.label.replace(/^\S+\s/,"")}`,A.setStatus(z.id),S.updateSelfStatus(z.id),Ne.setStatus(z.id),U.querySelectorAll(".sm-opt").forEach(Mt=>Mt.classList.toggle("sm-active",Mt.dataset.status===z.id)),U.classList.remove("sm-open")}),U.appendChild(X)}),P.addEventListener("click",z=>{z.stopPropagation(),U.classList.toggle("sm-open")}),document.addEventListener("click",()=>U.classList.remove("sm-open"))),document.querySelectorAll(".vtbtn").forEach(z=>{z.addEventListener("click",k=>{k.stopPropagation(),V(),A.setView(z.dataset.view),z.dataset.view==="first"&&document.pointerLockElement!==w.domElement&&w.domElement.requestPointerLock()})});let q=!1;function V(){q||(q=!0,l.classList.add("hidden"))}document.addEventListener("pointerlockchange",()=>{document.pointerLockElement===w.domElement&&V()}),l.addEventListener("click",V);const tt=new Set(["KeyW","KeyA","KeyS","KeyD"]),$=new Set([...tt,"ArrowUp","ArrowDown","ArrowLeft","ArrowRight"]);document.addEventListener("keydown",z=>{$.has(z.code)&&(V(),tt.has(z.code)&&A.getMode()==="first"&&document.pointerLockElement!==w.domElement&&w.domElement.requestPointerLock())});const rt=new Mv,it=new xt,lt=new fi(new I(0,1,0),0),Z=new I;w.domElement.addEventListener("click",z=>{if(b()||document.pointerLockElement===w.domElement||A.isDragMoved())return;V(),it.x=z.clientX/window.innerWidth*2-1,it.y=-(z.clientY/window.innerHeight)*2+1,rt.setFromCamera(it,m);const k=rt.intersectObjects(E);if(k.length>0){T(k[0].object.userData.screen);return}rt.ray.intersectPlane(lt,Z)&&A.navigate({x:Math.max(-65,Math.min(65,Z.x)),z:Math.max(-65,Math.min(65,Z.z))})});const st=new bx,L=document.getElementById("voice-btn"),G=new Map,Q=new Map;Ne.addEventListener("peer:join",z=>{const{peerId:k,username:X,presetId:nt}=z.detail;if(Q.set(k,X),G.has(k))return;const Mt=nt??Uy(k),Ut=Vu(X,Mt);p.add(Ut),G.set(k,Ut),nu(c,G.size+1),S.addPeer(k,X,Mt),A.peerJoin(k,X)}),Ne.addEventListener("peer:move",z=>{const{peerId:k,pos:X}=z.detail,nt=G.get(k);if(S.movePeer(k,X.x,X.z),nt){const Mt=nt.position.clone();if(nt.position.lerp(new I(X.x,X.y??0,X.z),.6),X.ry!==void 0){let Ut=X.ry-nt.rotation.y;for(;Ut>Math.PI;)Ut-=Math.PI*2;for(;Ut<-Math.PI;)Ut+=Math.PI*2;nt.rotation.y+=Ut*.25}Mt.distanceTo(nt.position)>.008&&(nt.userData.isMoving=!0,clearTimeout(nt.userData._stopTimer),nt.userData._stopTimer=setTimeout(()=>{nt.userData.isMoving=!1},180))}A.peerMove(k,X.x,X.z,Q.get(k)??k.slice(-4))}),Ne.addEventListener("peer:leave",z=>{const k=G.get(z.detail.peerId);k&&(p.remove(k),G.delete(z.detail.peerId),nu(c,G.size+1)),st.removePeer(z.detail.peerId),S.removePeer(z.detail.peerId),A.peerLeave(z.detail.peerId),Q.delete(z.detail.peerId)}),Ne.addEventListener("peer:avatar",z=>{const{peerId:k,presetId:X}=z.detail,nt=G.get(k),Mt=Q.get(k)??k.slice(-4);nt&&Zu(nt,Mt,X),S.updatePeerPreset(k,X)}),Ne.addEventListener("peer:status",z=>{const{peerId:k,status:X}=z.detail,nt=G.get(k);nt&&Wu(nt,X),S.updatePeerStatus(k,X)});let et=performance.now();(function z(){requestAnimationFrame(z);const k=performance.now(),X=Math.min((k-et)/1e3,.1);et=k;const nt=k/1e3;G.forEach((Mt,Ut)=>{qu(Mt,Mt.userData.isMoving??!1,X),Xu(Mt,st.isTalking(Ut),nt)}),A.setSelfTalking(st.isTalking("self"),nt)})(),Ne.start(_,D,W),e=!0,n({peerCount:0}),window._sync=Ne,window._voice=st;const ft=({active:z,muted:k}={})=>{L&&(z?k?(L.textContent="🔇 Muted",L.className="hud-side-btn voice-muted"):(L.textContent="🎙 Live",L.className="hud-side-btn voice-active"):(L.textContent="🎙 Voice",L.className="hud-side-btn"))};if(st.onStateChange(ft),ft({active:!1,muted:!1}),st.onTalkChange(z=>{A.setTalkingPeers(z)}),L){let z=!1;L.addEventListener("click",async k=>{if(k.stopPropagation(),st.active){st.toggleMute();return}if(z)return;z=!0,L.textContent="⏳ Connecting…";const X=await st.start(Ne);if(z=!1,!X){L.textContent="🚫 No mic",L.className="hud-side-btn";return}ft({active:st.active,muted:st.muted})})}setInterval(()=>{const z=A.getPosition(),k=A.getRotation();Ne.move(z.x,z.y,z.z,k.y),st.update(z,G)},50);const pt=document.getElementById("chat-toggle"),Et=document.getElementById("chat-panel"),N=document.getElementById("chat-close"),Bt=document.getElementById("chat-input"),Wt=document.getElementById("chat-send"),ie=document.getElementById("chat-messages"),At=document.getElementById("chat-badge");let Jt=0;const zt=document.getElementById("mb-chat-badge");function Ht(){var z;Et.classList.add("open"),pt.classList.add("open"),(z=document.getElementById("mb-chat-btn"))==null||z.classList.add("mb-active"),Jt=0,At.textContent="",At.classList.remove("visible"),zt&&(zt.textContent="",zt.classList.remove("visible")),Bt.focus()}function ge(){var z;Et.classList.remove("open"),pt.classList.remove("open"),(z=document.getElementById("mb-chat-btn"))==null||z.classList.remove("mb-active")}pt.addEventListener("click",z=>{z.stopPropagation(),Et.classList.contains("open")?ge():Ht()}),N.addEventListener("click",z=>{z.stopPropagation(),ge()}),(Nt=document.getElementById("mb-chat-btn"))==null||Nt.addEventListener("click",z=>{z.stopPropagation(),Et.classList.contains("open")?ge():Ht()});function C(){const z=Bt.value.trim();z&&(Ne.sendChat(z),Bt.value="")}Wt.addEventListener("click",z=>{z.stopPropagation(),C()}),Bt.addEventListener("keydown",z=>{z.key==="Enter"&&C()}),Et.addEventListener("click",z=>z.stopPropagation());function y({from:z,username:k,text:X,ts:nt}){const Mt=z===Ne.id,Ut=new Date(nt).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),te=document.createElement("div");if(te.className="chat-msg",te.innerHTML=`
          <div class="chat-msg-meta">
            <span class="chat-msg-name${Mt?" self":""}">${k}</span>
            <span class="chat-msg-time">${Ut}</span>
          </div>
          <div class="chat-msg-body">${X.replace(/</g,"&lt;")}</div>
        `,ie.appendChild(te),ie.scrollTop=ie.scrollHeight,!Et.classList.contains("open")&&!Mt){Jt++;const ue=Jt>9?"9+":String(Jt);At.textContent=ue,At.classList.add("visible"),zt&&(zt.textContent=ue,zt.classList.add("visible"))}}function j(z){const k=document.createElement("div");k.className="chat-system",k.textContent=z,ie.appendChild(k),ie.scrollTop=ie.scrollHeight}const ot=new Map;Ne.addEventListener("chat",z=>y(z.detail)),Ne.addEventListener("peer:join",z=>{ot.set(z.detail.peerId,z.detail.username),j(`${z.detail.username} joined`)}),Ne.addEventListener("peer:leave",z=>{const k=ot.get(z.detail.peerId)??"Someone";ot.delete(z.detail.peerId),j(`${k} left`)});const at=new yx,ct=new Sx,Rt=new xx(_);at.createReality(Rt),ct.setNode(_,Ts.PUBLIC),(vt=document.getElementById("nm-open-btn"))==null||vt.addEventListener("click",z=>{z.stopPropagation(),Bh(at,ct,_)}),(Vt=document.getElementById("mb-avatar-btn"))==null||Vt.addEventListener("click",()=>{var z;return(z=document.getElementById("avatar-btn"))==null?void 0:z.click()}),(Kt=document.getElementById("mb-nm-btn"))==null||Kt.addEventListener("click",z=>{z.stopPropagation(),Bh(at,ct,_)}),(_e=document.getElementById("mb-voice-btn"))==null||_e.addEventListener("click",z=>{z.stopPropagation(),L==null||L.click()}),(F=document.getElementById("mb-status-btn"))==null||F.addEventListener("click",z=>{z.stopPropagation(),P==null||P.click()}),st.onStateChange(({active:z,muted:k}={})=>{const X=document.getElementById("mb-voice-btn");X&&(z?k?(X.innerHTML="🔇",X.className="mb-btn mb-voice-active",X.style.color="#ff6b6b"):(X.innerHTML="🎙",X.className="mb-btn mb-voice-active",X.style.color=""):(X.innerHTML="🎙",X.className="mb-btn"))});const mt=document.getElementById("screen-hint"),gt=document.getElementById("screen-hint-name");let Gt=null,ut=null;document.addEventListener("keydown",z=>{if(z.code==="KeyE"&&Gt&&!b()&&T(Gt),z.code==="KeyF"&&ut){const k=ut.def.id,X=k==="main-left"||k==="main-right",nt=Vn(X?"main-left":k);X&&Vn("main-right"),bt(ut.def.label,nt)}});function bt(z,k){let X=document.getElementById("door-action-hint");X||(X=document.createElement("div"),X.id="door-action-hint",X.style.cssText=`
            position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);
            background:rgba(0,0,0,0.7);border:1px solid rgba(255,255,255,0.2);
            padding:10px 22px;border-radius:20px;font-size:0.9rem;color:#fff;
            pointer-events:none;z-index:13;opacity:0;transition:opacity 0.2s;
          `,document.body.appendChild(X)),X.textContent=`${z} ${k?"opened":"closed"}`,X.style.opacity="1",clearTimeout(X._t),X._t=setTimeout(()=>{X.style.opacity="0"},1500)}const kt=new Set;setInterval(()=>{var Ut;if(b())return;const z=A.getPosition();let k=null,X=4;B.forEach(te=>{const ue=z.x-te.position.x,ee=z.z-te.position.z,ke=Math.sqrt(ue*ue+ee*ee);ke<X&&(X=ke,k=te)}),Gt=k,mt&&(mt.style.display=k?"flex":"none",k&&gt&&(gt.textContent=k.label)),Ur.forEach(te=>{const ue=z.x-te.hinge.x,ee=z.z-te.hinge.z,ke=Math.sqrt(ue*ue+ee*ee),Me=te.id;ke<2.2&&!Es(Me)?(Vn(Me),kt.add(Me),Me==="main-left"&&(Es("main-right")||Vn("main-right"),kt.add("main-right")),Me==="main-right"&&(Es("main-left")||Vn("main-left"),kt.add("main-left"))):ke>3.5&&kt.has(Me)&&Es(Me)&&(Vn(Me),kt.delete(Me),Me==="main-left"&&(Es("main-right")&&Vn("main-right"),kt.delete("main-right")),Me==="main-right"&&(Es("main-left")&&Vn("main-left"),kt.delete("main-left")))});const nt=$u(z,2.8);ut=nt;const Mt=document.getElementById("door-proximity-hint");if(Mt)if(nt&&!k){const te=(Ut=nt.state)!=null&&Ut.open?"Close":"Open";Mt.style.display="flex",Mt.querySelector("#door-hint-name").textContent=`${te} ${nt.def.label}`}else Mt.style.display="none"},150)})}})();function Uy(i){let t=0;for(let e=0;e<i.length;e++)t=t*31+i.charCodeAt(e)|0;return Math.abs(t)%Ji.length}function nu(i,t){var n;const e=(n=i==null?void 0:i.querySelector)==null?void 0:n.call(i,"#online-count");e&&(e.textContent=`● ${t} aboard`)}const iu={OUTSIDE:{color:"#88cc66",desc:"Outside the building"},LOBBY:{color:"#ffffff",desc:"Reception & Entrance"},OPS:{color:"#ffaa44",desc:"Operations & Technical Support"},FUN:{color:"#44ffaa",desc:"Chill, Social & Games"},DESIGN:{color:"#ff6ba0",desc:"UI/UX, Design & 3D"},ENGINEERING:{color:"#44aaff",desc:"Development & Engineering"},"":{color:"#ffffff",desc:""}};function Oy(i){const t=document.getElementById("zone-name"),e=document.getElementById("zone-desc"),n=iu[i]||iu[""];t&&(t.textContent=i,t.style.color=n.color),e&&(e.textContent=n.desc),document.querySelectorAll(".map-zone").forEach(s=>{s.classList.toggle("active",s.dataset.zone===i)})}
