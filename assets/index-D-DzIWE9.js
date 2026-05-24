var zl=s=>{throw TypeError(s)};var ia=(s,t,e)=>t.has(s)||zl("Cannot "+e);var A=(s,t,e)=>(ia(s,t,"read from private field"),e?e.call(s):t.get(s)),ut=(s,t,e)=>t.has(s)?zl("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(s):t.set(s,e),yt=(s,t,e,n)=>(ia(s,t,"write to private field"),n?n.call(s,e):t.set(s,e),e),Ct=(s,t,e)=>(ia(s,t,"access private method"),e);var kl=(s,t,e,n)=>({set _(i){yt(s,t,i,e)},get _(){return A(s,t,n)}});import{j as $u}from"./trystero-zRWdb5Z0.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const _l="165",Ku=0,Hl=1,Ju=2,Fh=1,Bh=2,qn=3,Ai=0,nn=1,hn=2,Ei=0,ks=1,Gl=2,Vl=3,Wl=4,ju=5,Gi=100,Qu=101,td=102,ed=103,nd=104,id=200,sd=201,rd=202,od=203,Ya=204,qa=205,ad=206,ld=207,cd=208,hd=209,ud=210,dd=211,fd=212,pd=213,md=214,gd=0,_d=1,vd=2,Uo=3,xd=4,yd=5,Md=6,Sd=7,zh=0,Ed=1,wd=2,wi=0,bd=1,Td=2,Ad=3,kh=4,Rd=5,Cd=6,Pd=7,Hh=300,er=301,nr=302,$a=303,Ka=304,qo=306,Ja=1e3,Wi=1001,ja=1002,_n=1003,Ld=1004,io=1005,bn=1006,sa=1007,Xi=1008,Ri=1009,Id=1010,Dd=1011,Oo=1012,Gh=1013,ir=1014,Si=1015,$o=1016,Vh=1017,Wh=1018,sr=1020,Nd=35902,Ud=1021,Od=1022,On=1023,Fd=1024,Bd=1025,Hs=1026,rr=1027,zd=1028,Xh=1029,kd=1030,Zh=1031,Yh=1033,ra=33776,oa=33777,aa=33778,la=33779,Xl=35840,Zl=35841,Yl=35842,ql=35843,$l=36196,Kl=37492,Jl=37496,jl=37808,Ql=37809,tc=37810,ec=37811,nc=37812,ic=37813,sc=37814,rc=37815,oc=37816,ac=37817,lc=37818,cc=37819,hc=37820,uc=37821,ca=36492,dc=36494,fc=36495,Hd=36283,pc=36284,mc=36285,gc=36286,Gd=3200,Vd=3201,qh=0,Wd=1,_i="",Dn="srgb",Ii="srgb-linear",vl="display-p3",Ko="display-p3-linear",Fo="linear",Me="srgb",Bo="rec709",zo="p3",rs=7680,_c=519,Xd=512,Zd=513,Yd=514,$h=515,qd=516,$d=517,Kd=518,Jd=519,Qa=35044,vc="300 es",si=2e3,ko=2001;class lr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}}const Ze=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ha=Math.PI/180,tl=180/Math.PI;function bi(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ze[s&255]+Ze[s>>8&255]+Ze[s>>16&255]+Ze[s>>24&255]+"-"+Ze[t&255]+Ze[t>>8&255]+"-"+Ze[t>>16&15|64]+Ze[t>>24&255]+"-"+Ze[e&63|128]+Ze[e>>8&255]+"-"+Ze[e>>16&255]+Ze[e>>24&255]+Ze[n&255]+Ze[n>>8&255]+Ze[n>>16&255]+Ze[n>>24&255]).toLowerCase()}function We(s,t,e){return Math.max(t,Math.min(e,s))}function jd(s,t){return(s%t+t)%t}function ua(s,t,e){return(1-e)*s+e*t}function Un(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function pe(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class vt{constructor(t=0,e=0){vt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(We(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Kt{constructor(t,e,n,i,r,o,a,l,c){Kt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c)}set(t,e,n,i,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],_=i[0],m=i[3],p=i[6],E=i[1],v=i[4],x=i[7],P=i[2],T=i[5],b=i[8];return r[0]=o*_+a*E+l*P,r[3]=o*m+a*v+l*T,r[6]=o*p+a*x+l*b,r[1]=c*_+h*E+u*P,r[4]=c*m+h*v+u*T,r[7]=c*p+h*x+u*b,r[2]=d*_+f*E+g*P,r[5]=d*m+f*v+g*T,r[8]=d*p+f*x+g*b,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,g=e*u+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(i*c-h*n)*_,t[2]=(a*n-i*o)*_,t[3]=d*_,t[4]=(h*e-i*l)*_,t[5]=(i*r-a*e)*_,t[6]=f*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(da.makeScale(t,e)),this}rotate(t){return this.premultiply(da.makeRotation(-t)),this}translate(t,e){return this.premultiply(da.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const da=new Kt;function Kh(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Ho(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Qd(){const s=Ho("canvas");return s.style.display="block",s}const xc={};function xl(s){s in xc||(xc[s]=!0,console.warn(s))}function tf(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const yc=new Kt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Mc=new Kt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),so={[Ii]:{transfer:Fo,primaries:Bo,toReference:s=>s,fromReference:s=>s},[Dn]:{transfer:Me,primaries:Bo,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Ko]:{transfer:Fo,primaries:zo,toReference:s=>s.applyMatrix3(Mc),fromReference:s=>s.applyMatrix3(yc)},[vl]:{transfer:Me,primaries:zo,toReference:s=>s.convertSRGBToLinear().applyMatrix3(Mc),fromReference:s=>s.applyMatrix3(yc).convertLinearToSRGB()}},ef=new Set([Ii,Ko]),he={enabled:!0,_workingColorSpace:Ii,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!ef.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,t,e){if(this.enabled===!1||t===e||!t||!e)return s;const n=so[t].toReference,i=so[e].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,t){return this.convert(s,this._workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this._workingColorSpace)},getPrimaries:function(s){return so[s].primaries},getTransfer:function(s){return s===_i?Fo:so[s].transfer}};function Gs(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function fa(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let os;class nf{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{os===void 0&&(os=Ho("canvas")),os.width=t.width,os.height=t.height;const n=os.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=os}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ho("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Gs(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Gs(e[n]/255)*255):e[n]=Gs(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let sf=0;class Jh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:sf++}),this.uuid=bi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(pa(i[o].image)):r.push(pa(i[o]))}else r=pa(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function pa(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?nf.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let rf=0;class je extends lr{constructor(t=je.DEFAULT_IMAGE,e=je.DEFAULT_MAPPING,n=Wi,i=Wi,r=bn,o=Xi,a=On,l=Ri,c=je.DEFAULT_ANISOTROPY,h=_i){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:rf++}),this.uuid=bi(),this.name="",this.source=new Jh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new vt(0,0),this.repeat=new vt(1,1),this.center=new vt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Hh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ja:t.x=t.x-Math.floor(t.x);break;case Wi:t.x=t.x<0?0:1;break;case ja:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ja:t.y=t.y-Math.floor(t.y);break;case Wi:t.y=t.y<0?0:1;break;case ja:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}je.DEFAULT_IMAGE=null;je.DEFAULT_MAPPING=Hh;je.DEFAULT_ANISOTROPY=1;class we{constructor(t=0,e=0,n=0,i=1){we.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(c+1)/2,x=(f+1)/2,P=(p+1)/2,T=(h+d)/4,b=(u+_)/4,O=(g+m)/4;return v>x&&v>P?v<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(v),i=T/n,r=b/n):x>P?x<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(x),n=T/i,r=O/i):P<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(P),n=b/r,i=O/r),this.set(n,i,r,e),this}let E=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(u-_)/E,this.z=(d-h)/E,this.w=Math.acos((c+f+p-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class of extends lr{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new we(0,0,t,e),this.scissorTest=!1,this.viewport=new we(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:bn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new je(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Jh(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ns extends of{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class jh extends je{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=_n,this.minFilter=_n,this.wrapR=Wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class af extends je{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=_n,this.minFilter=_n,this.wrapR=Wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Qr{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const d=r[o+0],f=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=_;return}if(u!==_||l!==d||c!==f||h!==g){let m=1-a;const p=l*d+c*f+h*g+u*_,E=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){const P=Math.sqrt(v),T=Math.atan2(P,p*E);m=Math.sin(m*T)/P,a=Math.sin(a*T)/P}const x=a*E;if(l=l*m+d*x,c=c*m+f*x,h=h*m+g*x,u=u*m+_*x,m===1-a){const P=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=P,c*=P,h*=P,u*=P}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,o){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+h*u+l*f-c*d,t[e+1]=l*g+h*d+c*u-a*f,t[e+2]=c*g+h*f+a*d-l*u,t[e+3]=h*g-a*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(r/2),d=l(n/2),f=l(i/2),g=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-i)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+c)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(r-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-i)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(We(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(t=0,e=0,n=0){L.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Sc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Sc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-r*i),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=i+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ma.copy(this).projectOnVector(t),this.sub(ma)}reflect(t){return this.sub(ma.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(We(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ma=new L,Sc=new Qr;class to{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(vn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(vn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=vn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,vn):vn.fromBufferAttribute(r,o),vn.applyMatrix4(t.matrixWorld),this.expandByPoint(vn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ro.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ro.copy(n.boundingBox)),ro.applyMatrix4(t.matrixWorld),this.union(ro)}const i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,vn),vn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(fr),oo.subVectors(this.max,fr),as.subVectors(t.a,fr),ls.subVectors(t.b,fr),cs.subVectors(t.c,fr),li.subVectors(ls,as),ci.subVectors(cs,ls),Ui.subVectors(as,cs);let e=[0,-li.z,li.y,0,-ci.z,ci.y,0,-Ui.z,Ui.y,li.z,0,-li.x,ci.z,0,-ci.x,Ui.z,0,-Ui.x,-li.y,li.x,0,-ci.y,ci.x,0,-Ui.y,Ui.x,0];return!ga(e,as,ls,cs,oo)||(e=[1,0,0,0,1,0,0,0,1],!ga(e,as,ls,cs,oo))?!1:(ao.crossVectors(li,ci),e=[ao.x,ao.y,ao.z],ga(e,as,ls,cs,oo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,vn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(vn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Hn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Hn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Hn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Hn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Hn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Hn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Hn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Hn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Hn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Hn=[new L,new L,new L,new L,new L,new L,new L,new L],vn=new L,ro=new to,as=new L,ls=new L,cs=new L,li=new L,ci=new L,Ui=new L,fr=new L,oo=new L,ao=new L,Oi=new L;function ga(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Oi.fromArray(s,r);const a=i.x*Math.abs(Oi.x)+i.y*Math.abs(Oi.y)+i.z*Math.abs(Oi.z),l=t.dot(Oi),c=e.dot(Oi),h=n.dot(Oi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const lf=new to,pr=new L,_a=new L;class yl{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):lf.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;pr.subVectors(t,this.center);const e=pr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(pr,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(_a.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(pr.copy(t.center).add(_a)),this.expandByPoint(pr.copy(t.center).sub(_a))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Gn=new L,va=new L,lo=new L,hi=new L,xa=new L,co=new L,ya=new L;class Qh{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Gn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Gn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Gn.copy(this.origin).addScaledVector(this.direction,e),Gn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){va.copy(t).add(e).multiplyScalar(.5),lo.copy(e).sub(t).normalize(),hi.copy(this.origin).sub(va);const r=t.distanceTo(e)*.5,o=-this.direction.dot(lo),a=hi.dot(this.direction),l=-hi.dot(lo),c=hi.lengthSq(),h=Math.abs(1-o*o);let u,d,f,g;if(h>0)if(u=o*l-a,d=o*a-l,g=r*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(va).addScaledVector(lo,d),f}intersectSphere(t,e){Gn.subVectors(t.center,this.origin);const n=Gn.dot(this.direction),i=Gn.dot(Gn)-n*n,r=t.radius*t.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Gn)!==null}intersectTriangle(t,e,n,i,r){xa.subVectors(e,t),co.subVectors(n,t),ya.crossVectors(xa,co);let o=this.direction.dot(ya),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;hi.subVectors(this.origin,t);const l=a*this.direction.dot(co.crossVectors(hi,co));if(l<0)return null;const c=a*this.direction.dot(xa.cross(hi));if(c<0||l+c>o)return null;const h=-a*hi.dot(ya);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Se{constructor(t,e,n,i,r,o,a,l,c,h,u,d,f,g,_,m){Se.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c,h,u,d,f,g,_,m)}set(t,e,n,i,r,o,a,l,c,h,u,d,f,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Se().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/hs.setFromMatrixColumn(t,0).length(),r=1/hs.setFromMatrixColumn(t,1).length(),o=1/hs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=o*h,f=o*u,g=a*h,_=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+g*c,e[5]=d-_*c,e[9]=-a*l,e[2]=_-d*c,e[6]=g+f*c,e[10]=o*l}else if(t.order==="YXZ"){const d=l*h,f=l*u,g=c*h,_=c*u;e[0]=d+_*a,e[4]=g*a-f,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-g,e[6]=_+d*a,e[10]=o*l}else if(t.order==="ZXY"){const d=l*h,f=l*u,g=c*h,_=c*u;e[0]=d-_*a,e[4]=-o*u,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*h,e[9]=_-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const d=o*h,f=o*u,g=a*h,_=a*u;e[0]=l*h,e[4]=g*c-f,e[8]=d*c+_,e[1]=l*u,e[5]=_*c+d,e[9]=f*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const d=o*l,f=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=_-d*u,e[8]=g*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*u+g,e[10]=d-_*u}else if(t.order==="XZY"){const d=o*l,f=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+_,e[5]=o*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=a*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(cf,t,hf)}lookAt(t,e,n){const i=this.elements;return an.subVectors(t,e),an.lengthSq()===0&&(an.z=1),an.normalize(),ui.crossVectors(n,an),ui.lengthSq()===0&&(Math.abs(n.z)===1?an.x+=1e-4:an.z+=1e-4,an.normalize(),ui.crossVectors(n,an)),ui.normalize(),ho.crossVectors(an,ui),i[0]=ui.x,i[4]=ho.x,i[8]=an.x,i[1]=ui.y,i[5]=ho.y,i[9]=an.y,i[2]=ui.z,i[6]=ho.z,i[10]=an.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],E=n[3],v=n[7],x=n[11],P=n[15],T=i[0],b=i[4],O=i[8],w=i[12],y=i[1],I=i[5],H=i[9],k=i[13],B=i[2],Q=i[6],Z=i[10],st=i[14],J=i[3],gt=i[7],St=i[11],Rt=i[15];return r[0]=o*T+a*y+l*B+c*J,r[4]=o*b+a*I+l*Q+c*gt,r[8]=o*O+a*H+l*Z+c*St,r[12]=o*w+a*k+l*st+c*Rt,r[1]=h*T+u*y+d*B+f*J,r[5]=h*b+u*I+d*Q+f*gt,r[9]=h*O+u*H+d*Z+f*St,r[13]=h*w+u*k+d*st+f*Rt,r[2]=g*T+_*y+m*B+p*J,r[6]=g*b+_*I+m*Q+p*gt,r[10]=g*O+_*H+m*Z+p*St,r[14]=g*w+_*k+m*st+p*Rt,r[3]=E*T+v*y+x*B+P*J,r[7]=E*b+v*I+x*Q+P*gt,r[11]=E*O+v*H+x*Z+P*St,r[15]=E*w+v*k+x*st+P*Rt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+r*l*u-i*c*u-r*a*d+n*c*d+i*a*f-n*l*f)+_*(+e*l*f-e*c*d+r*o*d-i*o*f+i*c*h-r*l*h)+m*(+e*c*u-e*a*f-r*o*u+n*o*f+r*a*h-n*c*h)+p*(-i*a*h-e*l*u+e*a*d+i*o*u-n*o*d+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],_=t[13],m=t[14],p=t[15],E=u*m*c-_*d*c+_*l*f-a*m*f-u*l*p+a*d*p,v=g*d*c-h*m*c-g*l*f+o*m*f+h*l*p-o*d*p,x=h*_*c-g*u*c+g*a*f-o*_*f-h*a*p+o*u*p,P=g*u*l-h*_*l-g*a*d+o*_*d+h*a*m-o*u*m,T=e*E+n*v+i*x+r*P;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/T;return t[0]=E*b,t[1]=(_*d*r-u*m*r-_*i*f+n*m*f+u*i*p-n*d*p)*b,t[2]=(a*m*r-_*l*r+_*i*c-n*m*c-a*i*p+n*l*p)*b,t[3]=(u*l*r-a*d*r-u*i*c+n*d*c+a*i*f-n*l*f)*b,t[4]=v*b,t[5]=(h*m*r-g*d*r+g*i*f-e*m*f-h*i*p+e*d*p)*b,t[6]=(g*l*r-o*m*r-g*i*c+e*m*c+o*i*p-e*l*p)*b,t[7]=(o*d*r-h*l*r+h*i*c-e*d*c-o*i*f+e*l*f)*b,t[8]=x*b,t[9]=(g*u*r-h*_*r-g*n*f+e*_*f+h*n*p-e*u*p)*b,t[10]=(o*_*r-g*a*r+g*n*c-e*_*c-o*n*p+e*a*p)*b,t[11]=(h*a*r-o*u*r-h*n*c+e*u*c+o*n*f-e*a*f)*b,t[12]=P*b,t[13]=(h*_*i-g*u*i+g*n*d-e*_*d-h*n*m+e*u*m)*b,t[14]=(g*a*i-o*_*i-g*n*l+e*_*l+o*n*m-e*a*m)*b,t[15]=(o*u*i-h*a*i+h*n*l-e*u*l-o*n*d+e*a*d)*b,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,g=r*u,_=o*h,m=o*u,p=a*u,E=l*c,v=l*h,x=l*u,P=n.x,T=n.y,b=n.z;return i[0]=(1-(_+p))*P,i[1]=(f+x)*P,i[2]=(g-v)*P,i[3]=0,i[4]=(f-x)*T,i[5]=(1-(d+p))*T,i[6]=(m+E)*T,i[7]=0,i[8]=(g+v)*b,i[9]=(m-E)*b,i[10]=(1-(d+_))*b,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=hs.set(i[0],i[1],i[2]).length();const o=hs.set(i[4],i[5],i[6]).length(),a=hs.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],xn.copy(this);const c=1/r,h=1/o,u=1/a;return xn.elements[0]*=c,xn.elements[1]*=c,xn.elements[2]*=c,xn.elements[4]*=h,xn.elements[5]*=h,xn.elements[6]*=h,xn.elements[8]*=u,xn.elements[9]*=u,xn.elements[10]*=u,e.setFromRotationMatrix(xn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,i,r,o,a=si){const l=this.elements,c=2*r/(e-t),h=2*r/(n-i),u=(e+t)/(e-t),d=(n+i)/(n-i);let f,g;if(a===si)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===ko)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=si){const l=this.elements,c=1/(e-t),h=1/(n-i),u=1/(o-r),d=(e+t)*c,f=(n+i)*h;let g,_;if(a===si)g=(o+r)*u,_=-2*u;else if(a===ko)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const hs=new L,xn=new Se,cf=new L(0,0,0),hf=new L(1,1,1),ui=new L,ho=new L,an=new L,Ec=new Se,wc=new Qr;class Fn{constructor(t=0,e=0,n=0,i=Fn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(We(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-We(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(We(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-We(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(We(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-We(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ec.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ec,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return wc.setFromEuler(this),this.setFromQuaternion(wc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Fn.DEFAULT_ORDER="XYZ";class Ml{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let uf=0;const bc=new L,us=new Qr,Vn=new Se,uo=new L,mr=new L,df=new L,ff=new Qr,Tc=new L(1,0,0),Ac=new L(0,1,0),Rc=new L(0,0,1),Cc={type:"added"},pf={type:"removed"},ds={type:"childadded",child:null},Ma={type:"childremoved",child:null};class ke extends lr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:uf++}),this.uuid=bi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ke.DEFAULT_UP.clone();const t=new L,e=new Fn,n=new Qr,i=new L(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Se},normalMatrix:{value:new Kt}}),this.matrix=new Se,this.matrixWorld=new Se,this.matrixAutoUpdate=ke.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ke.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ml,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return us.setFromAxisAngle(t,e),this.quaternion.multiply(us),this}rotateOnWorldAxis(t,e){return us.setFromAxisAngle(t,e),this.quaternion.premultiply(us),this}rotateX(t){return this.rotateOnAxis(Tc,t)}rotateY(t){return this.rotateOnAxis(Ac,t)}rotateZ(t){return this.rotateOnAxis(Rc,t)}translateOnAxis(t,e){return bc.copy(t).applyQuaternion(this.quaternion),this.position.add(bc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Tc,t)}translateY(t){return this.translateOnAxis(Ac,t)}translateZ(t){return this.translateOnAxis(Rc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Vn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?uo.copy(t):uo.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),mr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Vn.lookAt(mr,uo,this.up):Vn.lookAt(uo,mr,this.up),this.quaternion.setFromRotationMatrix(Vn),i&&(Vn.extractRotation(i.matrixWorld),us.setFromRotationMatrix(Vn),this.quaternion.premultiply(us.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Cc),ds.child=t,this.dispatchEvent(ds),ds.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(pf),Ma.child=t,this.dispatchEvent(Ma),Ma.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Vn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Vn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Vn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Cc),ds.child=t,this.dispatchEvent(ds),ds.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mr,t,df),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mr,ff,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++){const a=i[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}ke.DEFAULT_UP=new L(0,1,0);ke.DEFAULT_MATRIX_AUTO_UPDATE=!0;ke.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const yn=new L,Wn=new L,Sa=new L,Xn=new L,fs=new L,ps=new L,Pc=new L,Ea=new L,wa=new L,ba=new L;class Tn{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),yn.subVectors(t,e),i.cross(yn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){yn.subVectors(i,e),Wn.subVectors(n,e),Sa.subVectors(t,e);const o=yn.dot(yn),a=yn.dot(Wn),l=yn.dot(Sa),c=Wn.dot(Wn),h=Wn.dot(Sa),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(c*l-a*h)*d,g=(o*h-a*l)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Xn)===null?!1:Xn.x>=0&&Xn.y>=0&&Xn.x+Xn.y<=1}static getInterpolation(t,e,n,i,r,o,a,l){return this.getBarycoord(t,e,n,i,Xn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Xn.x),l.addScaledVector(o,Xn.y),l.addScaledVector(a,Xn.z),l)}static isFrontFacing(t,e,n,i){return yn.subVectors(n,e),Wn.subVectors(t,e),yn.cross(Wn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return yn.subVectors(this.c,this.b),Wn.subVectors(this.a,this.b),yn.cross(Wn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Tn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Tn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return Tn.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return Tn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Tn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let o,a;fs.subVectors(i,n),ps.subVectors(r,n),Ea.subVectors(t,n);const l=fs.dot(Ea),c=ps.dot(Ea);if(l<=0&&c<=0)return e.copy(n);wa.subVectors(t,i);const h=fs.dot(wa),u=ps.dot(wa);if(h>=0&&u<=h)return e.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(fs,o);ba.subVectors(t,r);const f=fs.dot(ba),g=ps.dot(ba);if(g>=0&&f<=g)return e.copy(r);const _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(ps,a);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return Pc.subVectors(r,i),a=(u-h)/(u-h+(f-g)),e.copy(i).addScaledVector(Pc,a);const p=1/(m+_+d);return o=_*p,a=d*p,e.copy(n).addScaledVector(fs,o).addScaledVector(ps,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const tu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},di={h:0,s:0,l:0},fo={h:0,s:0,l:0};function Ta(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class Qt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Dn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,he.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=he.workingColorSpace){return this.r=t,this.g=e,this.b=n,he.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=he.workingColorSpace){if(t=jd(t,1),e=We(e,0,1),n=We(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Ta(o,r,t+1/3),this.g=Ta(o,r,t),this.b=Ta(o,r,t-1/3)}return he.toWorkingColorSpace(this,i),this}setStyle(t,e=Dn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Dn){const n=tu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Gs(t.r),this.g=Gs(t.g),this.b=Gs(t.b),this}copyLinearToSRGB(t){return this.r=fa(t.r),this.g=fa(t.g),this.b=fa(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Dn){return he.fromWorkingColorSpace(Ye.copy(this),t),Math.round(We(Ye.r*255,0,255))*65536+Math.round(We(Ye.g*255,0,255))*256+Math.round(We(Ye.b*255,0,255))}getHexString(t=Dn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=he.workingColorSpace){he.fromWorkingColorSpace(Ye.copy(this),e);const n=Ye.r,i=Ye.g,r=Ye.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=he.workingColorSpace){return he.fromWorkingColorSpace(Ye.copy(this),e),t.r=Ye.r,t.g=Ye.g,t.b=Ye.b,t}getStyle(t=Dn){he.fromWorkingColorSpace(Ye.copy(this),t);const e=Ye.r,n=Ye.g,i=Ye.b;return t!==Dn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(di),this.setHSL(di.h+t,di.s+e,di.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(di),t.getHSL(fo);const n=ua(di.h,fo.h,e),i=ua(di.s,fo.s,e),r=ua(di.l,fo.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ye=new Qt;Qt.NAMES=tu;let mf=0;class cr extends lr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:mf++}),this.uuid=bi(),this.name="",this.type="Material",this.blending=ks,this.side=Ai,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ya,this.blendDst=qa,this.blendEquation=Gi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qt(0,0,0),this.blendAlpha=0,this.depthFunc=Uo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_c,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=rs,this.stencilZFail=rs,this.stencilZPass=rs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ks&&(n.blending=this.blending),this.side!==Ai&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ya&&(n.blendSrc=this.blendSrc),this.blendDst!==qa&&(n.blendDst=this.blendDst),this.blendEquation!==Gi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Uo&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==_c&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==rs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==rs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==rs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Ar extends cr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fn,this.combine=zh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Le=new L,po=new vt;class An{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Qa,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Si,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return xl("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)po.fromBufferAttribute(this,e),po.applyMatrix3(t),this.setXY(e,po.x,po.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix3(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix4(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyNormalMatrix(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.transformDirection(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Un(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=pe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Un(e,this.array)),e}setX(t,e){return this.normalized&&(e=pe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Un(e,this.array)),e}setY(t,e){return this.normalized&&(e=pe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Un(e,this.array)),e}setZ(t,e){return this.normalized&&(e=pe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Un(e,this.array)),e}setW(t,e){return this.normalized&&(e=pe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=pe(e,this.array),n=pe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=pe(e,this.array),n=pe(n,this.array),i=pe(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=pe(e,this.array),n=pe(n,this.array),i=pe(i,this.array),r=pe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Qa&&(t.usage=this.usage),t}}class eu extends An{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class nu extends An{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Ce extends An{constructor(t,e,n){super(new Float32Array(t),e,n)}}let gf=0;const fn=new Se,Aa=new ke,ms=new L,ln=new to,gr=new to,Be=new L;class un extends lr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gf++}),this.uuid=bi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Kh(t)?nu:eu)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Kt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return fn.makeRotationFromQuaternion(t),this.applyMatrix4(fn),this}rotateX(t){return fn.makeRotationX(t),this.applyMatrix4(fn),this}rotateY(t){return fn.makeRotationY(t),this.applyMatrix4(fn),this}rotateZ(t){return fn.makeRotationZ(t),this.applyMatrix4(fn),this}translate(t,e,n){return fn.makeTranslation(t,e,n),this.applyMatrix4(fn),this}scale(t,e,n){return fn.makeScale(t,e,n),this.applyMatrix4(fn),this}lookAt(t){return Aa.lookAt(t),Aa.updateMatrix(),this.applyMatrix4(Aa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ms).negate(),this.translate(ms.x,ms.y,ms.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Ce(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new to);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];ln.setFromBufferAttribute(r),this.morphTargetsRelative?(Be.addVectors(this.boundingBox.min,ln.min),this.boundingBox.expandByPoint(Be),Be.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint(Be)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yl);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){const n=this.boundingSphere.center;if(ln.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];gr.setFromBufferAttribute(a),this.morphTargetsRelative?(Be.addVectors(ln.min,gr.min),ln.expandByPoint(Be),Be.addVectors(ln.max,gr.max),ln.expandByPoint(Be)):(ln.expandByPoint(gr.min),ln.expandByPoint(gr.max))}ln.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)Be.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Be));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Be.fromBufferAttribute(a,c),l&&(ms.fromBufferAttribute(t,c),Be.add(ms)),i=Math.max(i,n.distanceToSquared(Be))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new An(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let O=0;O<n.count;O++)a[O]=new L,l[O]=new L;const c=new L,h=new L,u=new L,d=new vt,f=new vt,g=new vt,_=new L,m=new L;function p(O,w,y){c.fromBufferAttribute(n,O),h.fromBufferAttribute(n,w),u.fromBufferAttribute(n,y),d.fromBufferAttribute(r,O),f.fromBufferAttribute(r,w),g.fromBufferAttribute(r,y),h.sub(c),u.sub(c),f.sub(d),g.sub(d);const I=1/(f.x*g.y-g.x*f.y);isFinite(I)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(I),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(I),a[O].add(_),a[w].add(_),a[y].add(_),l[O].add(m),l[w].add(m),l[y].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let O=0,w=E.length;O<w;++O){const y=E[O],I=y.start,H=y.count;for(let k=I,B=I+H;k<B;k+=3)p(t.getX(k+0),t.getX(k+1),t.getX(k+2))}const v=new L,x=new L,P=new L,T=new L;function b(O){P.fromBufferAttribute(i,O),T.copy(P);const w=a[O];v.copy(w),v.sub(P.multiplyScalar(P.dot(w))).normalize(),x.crossVectors(T,w);const I=x.dot(l[O])<0?-1:1;o.setXYZW(O,v.x,v.y,v.z,I)}for(let O=0,w=E.length;O<w;++O){const y=E[O],I=y.start,H=y.count;for(let k=I,B=I+H;k<B;k+=3)b(t.getX(k+0)),b(t.getX(k+1)),b(t.getX(k+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new An(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new L,r=new L,o=new L,a=new L,l=new L,c=new L,h=new L,u=new L;if(t)for(let d=0,f=t.count;d<f;d+=3){const g=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)i.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Be.fromBufferAttribute(t,e),Be.normalize(),t.setXYZ(e,Be.x,Be.y,Be.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let f=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new An(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new un,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Lc=new Se,Fi=new Qh,mo=new yl,Ic=new L,gs=new L,_s=new L,vs=new L,Ra=new L,go=new L,_o=new vt,vo=new vt,xo=new vt,Dc=new L,Nc=new L,Uc=new L,yo=new L,Mo=new L;class wt extends ke{constructor(t=new un,e=new Ar){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(r&&a){go.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(Ra.fromBufferAttribute(u,t),o?go.addScaledVector(Ra,h):go.addScaledVector(Ra.sub(e),h))}e.add(go)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),mo.copy(n.boundingSphere),mo.applyMatrix4(r),Fi.copy(t.ray).recast(t.near),!(mo.containsPoint(Fi.origin)===!1&&(Fi.intersectSphere(mo,Ic)===null||Fi.origin.distanceToSquared(Ic)>(t.far-t.near)**2))&&(Lc.copy(r).invert(),Fi.copy(t.ray).applyMatrix4(Lc),!(n.boundingBox!==null&&Fi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Fi)))}_computeIntersections(t,e,n){let i;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],E=Math.max(m.start,f.start),v=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let x=E,P=v;x<P;x+=3){const T=a.getX(x),b=a.getX(x+1),O=a.getX(x+2);i=So(this,p,t,n,c,h,u,T,b,O),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const E=a.getX(m),v=a.getX(m+1),x=a.getX(m+2);i=So(this,o,t,n,c,h,u,E,v,x),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],E=Math.max(m.start,f.start),v=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let x=E,P=v;x<P;x+=3){const T=x,b=x+1,O=x+2;i=So(this,p,t,n,c,h,u,T,b,O),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const E=m,v=m+1,x=m+2;i=So(this,o,t,n,c,h,u,E,v,x),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function _f(s,t,e,n,i,r,o,a){let l;if(t.side===nn?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,t.side===Ai,a),l===null)return null;Mo.copy(a),Mo.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(Mo);return c<e.near||c>e.far?null:{distance:c,point:Mo.clone(),object:s}}function So(s,t,e,n,i,r,o,a,l,c){s.getVertexPosition(a,gs),s.getVertexPosition(l,_s),s.getVertexPosition(c,vs);const h=_f(s,t,e,n,gs,_s,vs,yo);if(h){i&&(_o.fromBufferAttribute(i,a),vo.fromBufferAttribute(i,l),xo.fromBufferAttribute(i,c),h.uv=Tn.getInterpolation(yo,gs,_s,vs,_o,vo,xo,new vt)),r&&(_o.fromBufferAttribute(r,a),vo.fromBufferAttribute(r,l),xo.fromBufferAttribute(r,c),h.uv1=Tn.getInterpolation(yo,gs,_s,vs,_o,vo,xo,new vt)),o&&(Dc.fromBufferAttribute(o,a),Nc.fromBufferAttribute(o,l),Uc.fromBufferAttribute(o,c),h.normal=Tn.getInterpolation(yo,gs,_s,vs,Dc,Nc,Uc,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new L,materialIndex:0};Tn.getNormal(gs,_s,vs,u.normal),h.face=u}return h}class jt extends un{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Ce(c,3)),this.setAttribute("normal",new Ce(h,3)),this.setAttribute("uv",new Ce(u,2));function g(_,m,p,E,v,x,P,T,b,O,w){const y=x/b,I=P/O,H=x/2,k=P/2,B=T/2,Q=b+1,Z=O+1;let st=0,J=0;const gt=new L;for(let St=0;St<Z;St++){const Rt=St*I-k;for(let q=0;q<Q;q++){const lt=q*y-H;gt[_]=lt*E,gt[m]=Rt*v,gt[p]=B,c.push(gt.x,gt.y,gt.z),gt[_]=0,gt[m]=0,gt[p]=T>0?1:-1,h.push(gt.x,gt.y,gt.z),u.push(q/b),u.push(1-St/O),st+=1}}for(let St=0;St<O;St++)for(let Rt=0;Rt<b;Rt++){const q=d+Rt+Q*St,lt=d+Rt+Q*(St+1),F=d+(Rt+1)+Q*(St+1),Y=d+(Rt+1)+Q*St;l.push(q,lt,Y),l.push(lt,F,Y),J+=6}a.addGroup(f,J,w),f+=J,d+=st}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new jt(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function or(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Je(s){const t={};for(let e=0;e<s.length;e++){const n=or(s[e]);for(const i in n)t[i]=n[i]}return t}function vf(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function iu(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:he.workingColorSpace}const xf={clone:or,merge:Je};var yf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Mf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ci extends cr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=yf,this.fragmentShader=Mf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=or(t.uniforms),this.uniformsGroups=vf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class su extends ke{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Se,this.projectionMatrix=new Se,this.projectionMatrixInverse=new Se,this.coordinateSystem=si}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const fi=new L,Oc=new vt,Fc=new vt;class cn extends su{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=tl*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ha*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return tl*2*Math.atan(Math.tan(ha*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){fi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(fi.x,fi.y).multiplyScalar(-t/fi.z),fi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(fi.x,fi.y).multiplyScalar(-t/fi.z)}getViewSize(t,e){return this.getViewBounds(t,Oc,Fc),e.subVectors(Fc,Oc)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ha*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const xs=-90,ys=1;class Sf extends ke{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new cn(xs,ys,t,e);i.layers=this.layers,this.add(i);const r=new cn(xs,ys,t,e);r.layers=this.layers,this.add(r);const o=new cn(xs,ys,t,e);o.layers=this.layers,this.add(o);const a=new cn(xs,ys,t,e);a.layers=this.layers,this.add(a);const l=new cn(xs,ys,t,e);l.layers=this.layers,this.add(l);const c=new cn(xs,ys,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===si)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ko)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class ru extends je{constructor(t,e,n,i,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:er,super(t,e,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Ef extends ns{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new ru(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:bn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new jt(5,5,5),r=new Ci({name:"CubemapFromEquirect",uniforms:or(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:nn,blending:Ei});r.uniforms.tEquirect.value=e;const o=new wt(i,r),a=e.minFilter;return e.minFilter===Xi&&(e.minFilter=bn),new Sf(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}}const Ca=new L,wf=new L,bf=new Kt;class gi{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Ca.subVectors(n,e).cross(wf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Ca),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||bf.getNormalMatrix(t),i=this.coplanarPoint(Ca).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Bi=new yl,Eo=new L;class Sl{constructor(t=new gi,e=new gi,n=new gi,i=new gi,r=new gi,o=new gi){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=si){const n=this.planes,i=t.elements,r=i[0],o=i[1],a=i[2],l=i[3],c=i[4],h=i[5],u=i[6],d=i[7],f=i[8],g=i[9],_=i[10],m=i[11],p=i[12],E=i[13],v=i[14],x=i[15];if(n[0].setComponents(l-r,d-c,m-f,x-p).normalize(),n[1].setComponents(l+r,d+c,m+f,x+p).normalize(),n[2].setComponents(l+o,d+h,m+g,x+E).normalize(),n[3].setComponents(l-o,d-h,m-g,x-E).normalize(),n[4].setComponents(l-a,d-u,m-_,x-v).normalize(),e===si)n[5].setComponents(l+a,d+u,m+_,x+v).normalize();else if(e===ko)n[5].setComponents(a,u,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Bi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Bi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Bi)}intersectsSprite(t){return Bi.center.set(0,0,0),Bi.radius=.7071067811865476,Bi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Bi)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Eo.x=i.normal.x>0?t.max.x:t.min.x,Eo.y=i.normal.y>0?t.max.y:t.min.y,Eo.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Eo)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ou(){let s=null,t=!1,e=null,n=null;function i(r,o){e(r,o),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Tf(s){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,u=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l._updateRange,d=l.updateRanges;if(s.bindBuffer(c,a),u.count===-1&&d.length===0&&s.bufferSubData(c,0,h),d.length!==0){for(let f=0,g=d.length;f<g;f++){const _=d[f];s.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}u.count!==-1&&(s.bufferSubData(c,u.offset*h.BYTES_PER_ELEMENT,h,u.offset,u.count),u.count=-1),l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(s.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}class oi extends un{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=t/a,d=e/l,f=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const E=p*d-o;for(let v=0;v<c;v++){const x=v*u-r;g.push(x,-E,0),_.push(0,0,1),m.push(v/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let E=0;E<a;E++){const v=E+c*p,x=E+c*(p+1),P=E+1+c*(p+1),T=E+1+c*p;f.push(v,x,T),f.push(x,P,T)}this.setIndex(f),this.setAttribute("position",new Ce(g,3)),this.setAttribute("normal",new Ce(_,3)),this.setAttribute("uv",new Ce(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new oi(t.width,t.height,t.widthSegments,t.heightSegments)}}var Af=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Rf=`#ifdef USE_ALPHAHASH
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
#endif`,Cf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Pf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Lf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,If=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Df=`#ifdef USE_AOMAP
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
#endif`,Nf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Uf=`#ifdef USE_BATCHING
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
#endif`,Of=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Ff=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Bf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,zf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,kf=`#ifdef USE_IRIDESCENCE
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
#endif`,Hf=`#ifdef USE_BUMPMAP
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
#endif`,Gf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Vf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Wf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Xf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Zf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Yf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,qf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,$f=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Kf=`#define PI 3.141592653589793
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
} // validated`,Jf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,jf=`vec3 transformedNormal = objectNormal;
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
#endif`,Qf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,tp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ep=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,np=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ip="gl_FragColor = linearToOutputTexel( gl_FragColor );",sp=`
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
}`,rp=`#ifdef USE_ENVMAP
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
#endif`,op=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ap=`#ifdef USE_ENVMAP
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
#endif`,lp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cp=`#ifdef USE_ENVMAP
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
#endif`,hp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,up=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,dp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,pp=`#ifdef USE_GRADIENTMAP
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
}`,mp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,gp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_p=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,vp=`uniform bool receiveShadow;
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
#endif`,xp=`#ifdef USE_ENVMAP
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
#endif`,yp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Mp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Sp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ep=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,wp=`PhysicalMaterial material;
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
#endif`,bp=`struct PhysicalMaterial {
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
}`,Tp=`
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
#endif`,Ap=`#if defined( RE_IndirectDiffuse )
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
#endif`,Rp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Cp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Pp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ip=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Dp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Np=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Up=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Op=`#if defined( USE_POINTS_UV )
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
#endif`,Fp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Bp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,zp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,kp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Hp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gp=`#ifdef USE_MORPHTARGETS
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
#endif`,Vp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Xp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Zp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$p=`#ifdef USE_NORMALMAP
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
#endif`,Kp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Jp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,jp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Qp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,tm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,em=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,nm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,im=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,sm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,rm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,om=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,am=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,lm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,cm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,hm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,um=`float getShadowMask() {
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
}`,dm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,fm=`#ifdef USE_SKINNING
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
#endif`,pm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,mm=`#ifdef USE_SKINNING
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
#endif`,gm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_m=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,vm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,xm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ym=`#ifdef USE_TRANSMISSION
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
#endif`,Mm=`#ifdef USE_TRANSMISSION
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
#endif`,Sm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Em=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Tm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Am=`uniform sampler2D t2D;
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
}`,Rm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Pm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Lm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Im=`#include <common>
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
}`,Dm=`#if DEPTH_PACKING == 3200
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
}`,Nm=`#define DISTANCE
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
}`,Um=`#define DISTANCE
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
}`,Om=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Fm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bm=`uniform float scale;
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
}`,zm=`uniform vec3 diffuse;
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
}`,km=`#include <common>
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
}`,Hm=`uniform vec3 diffuse;
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
}`,Gm=`#define LAMBERT
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
}`,Vm=`#define LAMBERT
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
}`,Wm=`#define MATCAP
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
}`,Xm=`#define MATCAP
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
}`,Zm=`#define NORMAL
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
}`,Ym=`#define NORMAL
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
}`,qm=`#define PHONG
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
}`,$m=`#define PHONG
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
}`,Km=`#define STANDARD
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
}`,Jm=`#define STANDARD
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
}`,jm=`#define TOON
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
}`,Qm=`#define TOON
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
}`,t0=`uniform float size;
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
}`,e0=`uniform vec3 diffuse;
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
}`,n0=`#include <common>
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
}`,i0=`uniform vec3 color;
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
}`,s0=`uniform float rotation;
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
}`,r0=`uniform vec3 diffuse;
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
}`,$t={alphahash_fragment:Af,alphahash_pars_fragment:Rf,alphamap_fragment:Cf,alphamap_pars_fragment:Pf,alphatest_fragment:Lf,alphatest_pars_fragment:If,aomap_fragment:Df,aomap_pars_fragment:Nf,batching_pars_vertex:Uf,batching_vertex:Of,begin_vertex:Ff,beginnormal_vertex:Bf,bsdfs:zf,iridescence_fragment:kf,bumpmap_pars_fragment:Hf,clipping_planes_fragment:Gf,clipping_planes_pars_fragment:Vf,clipping_planes_pars_vertex:Wf,clipping_planes_vertex:Xf,color_fragment:Zf,color_pars_fragment:Yf,color_pars_vertex:qf,color_vertex:$f,common:Kf,cube_uv_reflection_fragment:Jf,defaultnormal_vertex:jf,displacementmap_pars_vertex:Qf,displacementmap_vertex:tp,emissivemap_fragment:ep,emissivemap_pars_fragment:np,colorspace_fragment:ip,colorspace_pars_fragment:sp,envmap_fragment:rp,envmap_common_pars_fragment:op,envmap_pars_fragment:ap,envmap_pars_vertex:lp,envmap_physical_pars_fragment:xp,envmap_vertex:cp,fog_vertex:hp,fog_pars_vertex:up,fog_fragment:dp,fog_pars_fragment:fp,gradientmap_pars_fragment:pp,lightmap_pars_fragment:mp,lights_lambert_fragment:gp,lights_lambert_pars_fragment:_p,lights_pars_begin:vp,lights_toon_fragment:yp,lights_toon_pars_fragment:Mp,lights_phong_fragment:Sp,lights_phong_pars_fragment:Ep,lights_physical_fragment:wp,lights_physical_pars_fragment:bp,lights_fragment_begin:Tp,lights_fragment_maps:Ap,lights_fragment_end:Rp,logdepthbuf_fragment:Cp,logdepthbuf_pars_fragment:Pp,logdepthbuf_pars_vertex:Lp,logdepthbuf_vertex:Ip,map_fragment:Dp,map_pars_fragment:Np,map_particle_fragment:Up,map_particle_pars_fragment:Op,metalnessmap_fragment:Fp,metalnessmap_pars_fragment:Bp,morphinstance_vertex:zp,morphcolor_vertex:kp,morphnormal_vertex:Hp,morphtarget_pars_vertex:Gp,morphtarget_vertex:Vp,normal_fragment_begin:Wp,normal_fragment_maps:Xp,normal_pars_fragment:Zp,normal_pars_vertex:Yp,normal_vertex:qp,normalmap_pars_fragment:$p,clearcoat_normal_fragment_begin:Kp,clearcoat_normal_fragment_maps:Jp,clearcoat_pars_fragment:jp,iridescence_pars_fragment:Qp,opaque_fragment:tm,packing:em,premultiplied_alpha_fragment:nm,project_vertex:im,dithering_fragment:sm,dithering_pars_fragment:rm,roughnessmap_fragment:om,roughnessmap_pars_fragment:am,shadowmap_pars_fragment:lm,shadowmap_pars_vertex:cm,shadowmap_vertex:hm,shadowmask_pars_fragment:um,skinbase_vertex:dm,skinning_pars_vertex:fm,skinning_vertex:pm,skinnormal_vertex:mm,specularmap_fragment:gm,specularmap_pars_fragment:_m,tonemapping_fragment:vm,tonemapping_pars_fragment:xm,transmission_fragment:ym,transmission_pars_fragment:Mm,uv_pars_fragment:Sm,uv_pars_vertex:Em,uv_vertex:wm,worldpos_vertex:bm,background_vert:Tm,background_frag:Am,backgroundCube_vert:Rm,backgroundCube_frag:Cm,cube_vert:Pm,cube_frag:Lm,depth_vert:Im,depth_frag:Dm,distanceRGBA_vert:Nm,distanceRGBA_frag:Um,equirect_vert:Om,equirect_frag:Fm,linedashed_vert:Bm,linedashed_frag:zm,meshbasic_vert:km,meshbasic_frag:Hm,meshlambert_vert:Gm,meshlambert_frag:Vm,meshmatcap_vert:Wm,meshmatcap_frag:Xm,meshnormal_vert:Zm,meshnormal_frag:Ym,meshphong_vert:qm,meshphong_frag:$m,meshphysical_vert:Km,meshphysical_frag:Jm,meshtoon_vert:jm,meshtoon_frag:Qm,points_vert:t0,points_frag:e0,shadow_vert:n0,shadow_frag:i0,sprite_vert:s0,sprite_frag:r0},pt={common:{diffuse:{value:new Qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Kt}},envmap:{envMap:{value:null},envMapRotation:{value:new Kt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Kt},normalScale:{value:new vt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0},uvTransform:{value:new Kt}},sprite:{diffuse:{value:new Qt(16777215)},opacity:{value:1},center:{value:new vt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}}},Nn={basic:{uniforms:Je([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.fog]),vertexShader:$t.meshbasic_vert,fragmentShader:$t.meshbasic_frag},lambert:{uniforms:Je([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new Qt(0)}}]),vertexShader:$t.meshlambert_vert,fragmentShader:$t.meshlambert_frag},phong:{uniforms:Je([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new Qt(0)},specular:{value:new Qt(1118481)},shininess:{value:30}}]),vertexShader:$t.meshphong_vert,fragmentShader:$t.meshphong_frag},standard:{uniforms:Je([pt.common,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.roughnessmap,pt.metalnessmap,pt.fog,pt.lights,{emissive:{value:new Qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag},toon:{uniforms:Je([pt.common,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.gradientmap,pt.fog,pt.lights,{emissive:{value:new Qt(0)}}]),vertexShader:$t.meshtoon_vert,fragmentShader:$t.meshtoon_frag},matcap:{uniforms:Je([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,{matcap:{value:null}}]),vertexShader:$t.meshmatcap_vert,fragmentShader:$t.meshmatcap_frag},points:{uniforms:Je([pt.points,pt.fog]),vertexShader:$t.points_vert,fragmentShader:$t.points_frag},dashed:{uniforms:Je([pt.common,pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$t.linedashed_vert,fragmentShader:$t.linedashed_frag},depth:{uniforms:Je([pt.common,pt.displacementmap]),vertexShader:$t.depth_vert,fragmentShader:$t.depth_frag},normal:{uniforms:Je([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,{opacity:{value:1}}]),vertexShader:$t.meshnormal_vert,fragmentShader:$t.meshnormal_frag},sprite:{uniforms:Je([pt.sprite,pt.fog]),vertexShader:$t.sprite_vert,fragmentShader:$t.sprite_frag},background:{uniforms:{uvTransform:{value:new Kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$t.background_vert,fragmentShader:$t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Kt}},vertexShader:$t.backgroundCube_vert,fragmentShader:$t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$t.cube_vert,fragmentShader:$t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$t.equirect_vert,fragmentShader:$t.equirect_frag},distanceRGBA:{uniforms:Je([pt.common,pt.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$t.distanceRGBA_vert,fragmentShader:$t.distanceRGBA_frag},shadow:{uniforms:Je([pt.lights,pt.fog,{color:{value:new Qt(0)},opacity:{value:1}}]),vertexShader:$t.shadow_vert,fragmentShader:$t.shadow_frag}};Nn.physical={uniforms:Je([Nn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Kt},clearcoatNormalScale:{value:new vt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Kt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Kt},sheen:{value:0},sheenColor:{value:new Qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Kt},transmissionSamplerSize:{value:new vt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Kt},attenuationDistance:{value:0},attenuationColor:{value:new Qt(0)},specularColor:{value:new Qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Kt},anisotropyVector:{value:new vt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Kt}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag};const wo={r:0,b:0,g:0},zi=new Fn,o0=new Se;function a0(s,t,e,n,i,r,o){const a=new Qt(0);let l=r===!0?0:1,c,h,u=null,d=0,f=null;function g(E){let v=E.isScene===!0?E.background:null;return v&&v.isTexture&&(v=(E.backgroundBlurriness>0?e:t).get(v)),v}function _(E){let v=!1;const x=g(E);x===null?p(a,l):x&&x.isColor&&(p(x,1),v=!0);const P=s.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(E,v){const x=g(v);x&&(x.isCubeTexture||x.mapping===qo)?(h===void 0&&(h=new wt(new jt(1,1,1),new Ci({name:"BackgroundCubeMaterial",uniforms:or(Nn.backgroundCube.uniforms),vertexShader:Nn.backgroundCube.vertexShader,fragmentShader:Nn.backgroundCube.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,T,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),zi.copy(v.backgroundRotation),zi.x*=-1,zi.y*=-1,zi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(zi.y*=-1,zi.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(o0.makeRotationFromEuler(zi)),h.material.toneMapped=he.getTransfer(x.colorSpace)!==Me,(u!==x||d!==x.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,u=x,d=x.version,f=s.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new wt(new oi(2,2),new Ci({name:"BackgroundMaterial",uniforms:or(Nn.background.uniforms),vertexShader:Nn.background.vertexShader,fragmentShader:Nn.background.fragmentShader,side:Ai,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=he.getTransfer(x.colorSpace)!==Me,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,u=x,d=x.version,f=s.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function p(E,v){E.getRGB(wo,iu(s)),n.buffers.color.setClear(wo.r,wo.g,wo.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(E,v=1){a.set(E),l=v,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,p(a,l)},render:_,addToRenderList:m}}function l0(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null);let r=i,o=!1;function a(y,I,H,k,B){let Q=!1;const Z=u(k,H,I);r!==Z&&(r=Z,c(r.object)),Q=f(y,k,H,B),Q&&g(y,k,H,B),B!==null&&t.update(B,s.ELEMENT_ARRAY_BUFFER),(Q||o)&&(o=!1,x(y,I,H,k),B!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function l(){return s.createVertexArray()}function c(y){return s.bindVertexArray(y)}function h(y){return s.deleteVertexArray(y)}function u(y,I,H){const k=H.wireframe===!0;let B=n[y.id];B===void 0&&(B={},n[y.id]=B);let Q=B[I.id];Q===void 0&&(Q={},B[I.id]=Q);let Z=Q[k];return Z===void 0&&(Z=d(l()),Q[k]=Z),Z}function d(y){const I=[],H=[],k=[];for(let B=0;B<e;B++)I[B]=0,H[B]=0,k[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:H,attributeDivisors:k,object:y,attributes:{},index:null}}function f(y,I,H,k){const B=r.attributes,Q=I.attributes;let Z=0;const st=H.getAttributes();for(const J in st)if(st[J].location>=0){const St=B[J];let Rt=Q[J];if(Rt===void 0&&(J==="instanceMatrix"&&y.instanceMatrix&&(Rt=y.instanceMatrix),J==="instanceColor"&&y.instanceColor&&(Rt=y.instanceColor)),St===void 0||St.attribute!==Rt||Rt&&St.data!==Rt.data)return!0;Z++}return r.attributesNum!==Z||r.index!==k}function g(y,I,H,k){const B={},Q=I.attributes;let Z=0;const st=H.getAttributes();for(const J in st)if(st[J].location>=0){let St=Q[J];St===void 0&&(J==="instanceMatrix"&&y.instanceMatrix&&(St=y.instanceMatrix),J==="instanceColor"&&y.instanceColor&&(St=y.instanceColor));const Rt={};Rt.attribute=St,St&&St.data&&(Rt.data=St.data),B[J]=Rt,Z++}r.attributes=B,r.attributesNum=Z,r.index=k}function _(){const y=r.newAttributes;for(let I=0,H=y.length;I<H;I++)y[I]=0}function m(y){p(y,0)}function p(y,I){const H=r.newAttributes,k=r.enabledAttributes,B=r.attributeDivisors;H[y]=1,k[y]===0&&(s.enableVertexAttribArray(y),k[y]=1),B[y]!==I&&(s.vertexAttribDivisor(y,I),B[y]=I)}function E(){const y=r.newAttributes,I=r.enabledAttributes;for(let H=0,k=I.length;H<k;H++)I[H]!==y[H]&&(s.disableVertexAttribArray(H),I[H]=0)}function v(y,I,H,k,B,Q,Z){Z===!0?s.vertexAttribIPointer(y,I,H,B,Q):s.vertexAttribPointer(y,I,H,k,B,Q)}function x(y,I,H,k){_();const B=k.attributes,Q=H.getAttributes(),Z=I.defaultAttributeValues;for(const st in Q){const J=Q[st];if(J.location>=0){let gt=B[st];if(gt===void 0&&(st==="instanceMatrix"&&y.instanceMatrix&&(gt=y.instanceMatrix),st==="instanceColor"&&y.instanceColor&&(gt=y.instanceColor)),gt!==void 0){const St=gt.normalized,Rt=gt.itemSize,q=t.get(gt);if(q===void 0)continue;const lt=q.buffer,F=q.type,Y=q.bytesPerElement,K=F===s.INT||F===s.UNSIGNED_INT||gt.gpuType===Gh;if(gt.isInterleavedBufferAttribute){const $=gt.data,ct=$.stride,Tt=gt.offset;if($.isInstancedInterleavedBuffer){for(let zt=0;zt<J.locationSize;zt++)p(J.location+zt,$.meshPerAttribute);y.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let zt=0;zt<J.locationSize;zt++)m(J.location+zt);s.bindBuffer(s.ARRAY_BUFFER,lt);for(let zt=0;zt<J.locationSize;zt++)v(J.location+zt,Rt/J.locationSize,F,St,ct*Y,(Tt+Rt/J.locationSize*zt)*Y,K)}else{if(gt.isInstancedBufferAttribute){for(let $=0;$<J.locationSize;$++)p(J.location+$,gt.meshPerAttribute);y.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=gt.meshPerAttribute*gt.count)}else for(let $=0;$<J.locationSize;$++)m(J.location+$);s.bindBuffer(s.ARRAY_BUFFER,lt);for(let $=0;$<J.locationSize;$++)v(J.location+$,Rt/J.locationSize,F,St,Rt*Y,Rt/J.locationSize*$*Y,K)}}else if(Z!==void 0){const St=Z[st];if(St!==void 0)switch(St.length){case 2:s.vertexAttrib2fv(J.location,St);break;case 3:s.vertexAttrib3fv(J.location,St);break;case 4:s.vertexAttrib4fv(J.location,St);break;default:s.vertexAttrib1fv(J.location,St)}}}}E()}function P(){O();for(const y in n){const I=n[y];for(const H in I){const k=I[H];for(const B in k)h(k[B].object),delete k[B];delete I[H]}delete n[y]}}function T(y){if(n[y.id]===void 0)return;const I=n[y.id];for(const H in I){const k=I[H];for(const B in k)h(k[B].object),delete k[B];delete I[H]}delete n[y.id]}function b(y){for(const I in n){const H=n[I];if(H[y.id]===void 0)continue;const k=H[y.id];for(const B in k)h(k[B].object),delete k[B];delete H[y.id]}}function O(){w(),o=!0,r!==i&&(r=i,c(r.object))}function w(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:O,resetDefaultState:w,dispose:P,releaseStatesOfGeometry:T,releaseStatesOfProgram:b,initAttributes:_,enableAttribute:m,disableUnusedAttributes:E}}function c0(s,t,e){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,u){u!==0&&(s.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function a(c,h,u){if(u===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let f=0;f<u;f++)this.render(c[f],h[f]);else{d.multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];e.update(f,n,1)}}function l(c,h,u,d){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)o(c[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_];for(let _=0;_<d.length;_++)e.update(g,n,d[_])}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function h0(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(T){return!(T!==On&&n.convert(T)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const b=T===$o&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==Ri&&n.convert(T)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Si&&!b)}function l(T){if(T==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),f=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_TEXTURE_SIZE),_=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),p=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),E=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),x=f>0,P=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:f,maxTextureSize:g,maxCubemapSize:_,maxAttributes:m,maxVertexUniforms:p,maxVaryings:E,maxFragmentUniforms:v,vertexTextures:x,maxSamples:P}}function u0(s){const t=this;let e=null,n=0,i=!1,r=!1;const o=new gi,a=new Kt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=s.get(u);if(!i||g===null||g.length===0||r&&!m)r?h(null):c();else{const E=r?0:n,v=E*4;let x=p.clippingState||null;l.value=x,x=h(g,d,v,f);for(let P=0;P!==v;++P)x[P]=e[P];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=f+_*4,E=d.matrixWorldInverse;a.getNormalMatrix(E),(m===null||m.length<p)&&(m=new Float32Array(p));for(let v=0,x=f;v!==_;++v,x+=4)o.copy(u[v]).applyMatrix4(E,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function d0(s){let t=new WeakMap;function e(o,a){return a===$a?o.mapping=er:a===Ka&&(o.mapping=nr),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===$a||a===Ka)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Ef(l.height);return c.fromEquirectangularTexture(s,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class au extends su{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Ns=4,Bc=[.125,.215,.35,.446,.526,.582],Vi=20,Pa=new au,zc=new Qt;let La=null,Ia=0,Da=0,Na=!1;const Hi=(1+Math.sqrt(5))/2,Ms=1/Hi,kc=[new L(-Hi,Ms,0),new L(Hi,Ms,0),new L(-Ms,0,Hi),new L(Ms,0,Hi),new L(0,Hi,-Ms),new L(0,Hi,Ms),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)];class Hc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){La=this._renderer.getRenderTarget(),Ia=this._renderer.getActiveCubeFace(),Da=this._renderer.getActiveMipmapLevel(),Na=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Wc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Vc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(La,Ia,Da),this._renderer.xr.enabled=Na,t.scissorTest=!1,bo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===er||t.mapping===nr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),La=this._renderer.getRenderTarget(),Ia=this._renderer.getActiveCubeFace(),Da=this._renderer.getActiveMipmapLevel(),Na=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:bn,minFilter:bn,generateMipmaps:!1,type:$o,format:On,colorSpace:Ii,depthBuffer:!1},i=Gc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Gc(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=f0(r)),this._blurMaterial=p0(r,t,e)}return i}_compileMaterial(t){const e=new wt(this._lodPlanes[0],t);this._renderer.compile(e,Pa)}_sceneToCubeUV(t,e,n,i){const a=new cn(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(zc),h.toneMapping=wi,h.autoClear=!1;const f=new Ar({name:"PMREM.Background",side:nn,depthWrite:!1,depthTest:!1}),g=new wt(new jt,f);let _=!1;const m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,_=!0):(f.color.copy(zc),_=!0);for(let p=0;p<6;p++){const E=p%3;E===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):E===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const v=this._cubeSize;bo(i,E*v,p>2?v:0,v,v),h.setRenderTarget(i),_&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===er||t.mapping===nr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Wc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Vc());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new wt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;bo(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Pa)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=kc[(i-r-1)%kc.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",r),this._halfBlur(o,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new wt(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Vi-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):Vi;m>Vi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Vi}`);const p=[];let E=0;for(let b=0;b<Vi;++b){const O=b/_,w=Math.exp(-O*O/2);p.push(w),b===0?E+=w:b<m&&(E+=2*w)}for(let b=0;b<p.length;b++)p[b]=p[b]/E;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:v}=this;d.dTheta.value=g,d.mipInt.value=v-n;const x=this._sizeLods[i],P=3*x*(i>v-Ns?i-v+Ns:0),T=4*(this._cubeSize-x);bo(e,P,T,3*x,2*x),l.setRenderTarget(e),l.render(u,Pa)}}function f0(s){const t=[],e=[],n=[];let i=s;const r=s-Ns+1+Bc.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);e.push(a);let l=1/a;o>s-Ns?l=Bc[o-s+Ns-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,_=3,m=2,p=1,E=new Float32Array(_*g*f),v=new Float32Array(m*g*f),x=new Float32Array(p*g*f);for(let T=0;T<f;T++){const b=T%3*2/3-1,O=T>2?0:-1,w=[b,O,0,b+2/3,O,0,b+2/3,O+1,0,b,O,0,b+2/3,O+1,0,b,O+1,0];E.set(w,_*g*T),v.set(d,m*g*T);const y=[T,T,T,T,T,T];x.set(y,p*g*T)}const P=new un;P.setAttribute("position",new An(E,_)),P.setAttribute("uv",new An(v,m)),P.setAttribute("faceIndex",new An(x,p)),t.push(P),i>Ns&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Gc(s,t,e){const n=new ns(s,t,e);return n.texture.mapping=qo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function bo(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function p0(s,t,e){const n=new Float32Array(Vi),i=new L(0,1,0);return new Ci({name:"SphericalGaussianBlur",defines:{n:Vi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:El(),fragmentShader:`

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
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function Vc(){return new Ci({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:El(),fragmentShader:`

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
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function Wc(){return new Ci({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:El(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function El(){return`

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
	`}function m0(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===$a||l===Ka,h=l===er||l===nr;if(c||h){let u=t.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Hc(s)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return c&&f&&f.height>0||h&&f&&i(f)?(e===null&&(e=new Hc(s)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function i(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function g0(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&xl("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function _0(s,t,e,n){const i={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)t.remove(_[m])}d.removeEventListener("dispose",o),delete i[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const g in d)t.update(d[g],s.ARRAY_BUFFER);const f=u.morphAttributes;for(const g in f){const _=f[g];for(let m=0,p=_.length;m<p;m++)t.update(_[m],s.ARRAY_BUFFER)}}function c(u){const d=[],f=u.index,g=u.attributes.position;let _=0;if(f!==null){const E=f.array;_=f.version;for(let v=0,x=E.length;v<x;v+=3){const P=E[v+0],T=E[v+1],b=E[v+2];d.push(P,T,T,b,b,P)}}else if(g!==void 0){const E=g.array;_=g.version;for(let v=0,x=E.length/3-1;v<x;v+=3){const P=v+0,T=v+1,b=v+2;d.push(P,T,T,b,b,P)}}else return;const m=new(Kh(d)?nu:eu)(d,1);m.version=_;const p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function v0(s,t,e){let n;function i(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){s.drawElements(n,f,r,d*o),e.update(f,n,1)}function c(d,f,g){g!==0&&(s.drawElementsInstanced(n,f,r,d*o,g),e.update(f,n,g))}function h(d,f,g){if(g===0)return;const _=t.get("WEBGL_multi_draw");if(_===null)for(let m=0;m<g;m++)this.render(d[m]/o,f[m]);else{_.multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}}function u(d,f,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/o,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,_,0,g);let p=0;for(let E=0;E<g;E++)p+=f[E];for(let E=0;E<_.length;E++)e.update(p,n,_[E])}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function x0(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function y0(s,t,e){const n=new WeakMap,i=new we;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let w=function(){b.dispose(),n.delete(a),a.removeEventListener("dispose",w)};d!==void 0&&d.texture.dispose();const f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],E=a.morphAttributes.color||[];let v=0;f===!0&&(v=1),g===!0&&(v=2),_===!0&&(v=3);let x=a.attributes.position.count*v,P=1;x>t.maxTextureSize&&(P=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);const T=new Float32Array(x*P*4*u),b=new jh(T,x,P,u);b.type=Si,b.needsUpdate=!0;const O=v*4;for(let y=0;y<u;y++){const I=m[y],H=p[y],k=E[y],B=x*P*4*y;for(let Q=0;Q<I.count;Q++){const Z=Q*O;f===!0&&(i.fromBufferAttribute(I,Q),T[B+Z+0]=i.x,T[B+Z+1]=i.y,T[B+Z+2]=i.z,T[B+Z+3]=0),g===!0&&(i.fromBufferAttribute(H,Q),T[B+Z+4]=i.x,T[B+Z+5]=i.y,T[B+Z+6]=i.z,T[B+Z+7]=0),_===!0&&(i.fromBufferAttribute(k,Q),T[B+Z+8]=i.x,T[B+Z+9]=i.y,T[B+Z+10]=i.z,T[B+Z+11]=k.itemSize===4?i.w:1)}}d={count:u,texture:b,size:new vt(x,P)},n.set(a,d),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];const g=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(s,"morphTargetBaseInfluence",g),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function M0(s,t,e,n){let i=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}class lu extends je{constructor(t,e,n,i,r,o,a,l,c,h=Hs){if(h!==Hs&&h!==rr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Hs&&(n=ir),n===void 0&&h===rr&&(n=sr),super(null,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:_n,this.minFilter=l!==void 0?l:_n,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const cu=new je,hu=new lu(1,1);hu.compareFunction=$h;const uu=new jh,du=new af,fu=new ru,Xc=[],Zc=[],Yc=new Float32Array(16),qc=new Float32Array(9),$c=new Float32Array(4);function hr(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=Xc[i];if(r===void 0&&(r=new Float32Array(i),Xc[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function Ue(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Oe(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Jo(s,t){let e=Zc[t];e===void 0&&(e=new Int32Array(t),Zc[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function S0(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function E0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;s.uniform2fv(this.addr,t),Oe(e,t)}}function w0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ue(e,t))return;s.uniform3fv(this.addr,t),Oe(e,t)}}function b0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;s.uniform4fv(this.addr,t),Oe(e,t)}}function T0(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Oe(e,t)}else{if(Ue(e,n))return;$c.set(n),s.uniformMatrix2fv(this.addr,!1,$c),Oe(e,n)}}function A0(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Oe(e,t)}else{if(Ue(e,n))return;qc.set(n),s.uniformMatrix3fv(this.addr,!1,qc),Oe(e,n)}}function R0(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Oe(e,t)}else{if(Ue(e,n))return;Yc.set(n),s.uniformMatrix4fv(this.addr,!1,Yc),Oe(e,n)}}function C0(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function P0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;s.uniform2iv(this.addr,t),Oe(e,t)}}function L0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ue(e,t))return;s.uniform3iv(this.addr,t),Oe(e,t)}}function I0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;s.uniform4iv(this.addr,t),Oe(e,t)}}function D0(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function N0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;s.uniform2uiv(this.addr,t),Oe(e,t)}}function U0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ue(e,t))return;s.uniform3uiv(this.addr,t),Oe(e,t)}}function O0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;s.uniform4uiv(this.addr,t),Oe(e,t)}}function F0(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);const r=this.type===s.SAMPLER_2D_SHADOW?hu:cu;e.setTexture2D(t||r,i)}function B0(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||du,i)}function z0(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||fu,i)}function k0(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||uu,i)}function H0(s){switch(s){case 5126:return S0;case 35664:return E0;case 35665:return w0;case 35666:return b0;case 35674:return T0;case 35675:return A0;case 35676:return R0;case 5124:case 35670:return C0;case 35667:case 35671:return P0;case 35668:case 35672:return L0;case 35669:case 35673:return I0;case 5125:return D0;case 36294:return N0;case 36295:return U0;case 36296:return O0;case 35678:case 36198:case 36298:case 36306:case 35682:return F0;case 35679:case 36299:case 36307:return B0;case 35680:case 36300:case 36308:case 36293:return z0;case 36289:case 36303:case 36311:case 36292:return k0}}function G0(s,t){s.uniform1fv(this.addr,t)}function V0(s,t){const e=hr(t,this.size,2);s.uniform2fv(this.addr,e)}function W0(s,t){const e=hr(t,this.size,3);s.uniform3fv(this.addr,e)}function X0(s,t){const e=hr(t,this.size,4);s.uniform4fv(this.addr,e)}function Z0(s,t){const e=hr(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Y0(s,t){const e=hr(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function q0(s,t){const e=hr(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function $0(s,t){s.uniform1iv(this.addr,t)}function K0(s,t){s.uniform2iv(this.addr,t)}function J0(s,t){s.uniform3iv(this.addr,t)}function j0(s,t){s.uniform4iv(this.addr,t)}function Q0(s,t){s.uniform1uiv(this.addr,t)}function tg(s,t){s.uniform2uiv(this.addr,t)}function eg(s,t){s.uniform3uiv(this.addr,t)}function ng(s,t){s.uniform4uiv(this.addr,t)}function ig(s,t,e){const n=this.cache,i=t.length,r=Jo(e,i);Ue(n,r)||(s.uniform1iv(this.addr,r),Oe(n,r));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||cu,r[o])}function sg(s,t,e){const n=this.cache,i=t.length,r=Jo(e,i);Ue(n,r)||(s.uniform1iv(this.addr,r),Oe(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||du,r[o])}function rg(s,t,e){const n=this.cache,i=t.length,r=Jo(e,i);Ue(n,r)||(s.uniform1iv(this.addr,r),Oe(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||fu,r[o])}function og(s,t,e){const n=this.cache,i=t.length,r=Jo(e,i);Ue(n,r)||(s.uniform1iv(this.addr,r),Oe(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||uu,r[o])}function ag(s){switch(s){case 5126:return G0;case 35664:return V0;case 35665:return W0;case 35666:return X0;case 35674:return Z0;case 35675:return Y0;case 35676:return q0;case 5124:case 35670:return $0;case 35667:case 35671:return K0;case 35668:case 35672:return J0;case 35669:case 35673:return j0;case 5125:return Q0;case 36294:return tg;case 36295:return eg;case 36296:return ng;case 35678:case 36198:case 36298:case 36306:case 35682:return ig;case 35679:case 36299:case 36307:return sg;case 35680:case 36300:case 36308:case 36293:return rg;case 36289:case 36303:case 36311:case 36292:return og}}class lg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=H0(e.type)}}class cg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=ag(e.type)}}class hg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(t,e[a.id],n)}}}const Ua=/(\w+)(\])?(\[|\.)?/g;function Kc(s,t){s.seq.push(t),s.map[t.id]=t}function ug(s,t,e){const n=s.name,i=n.length;for(Ua.lastIndex=0;;){const r=Ua.exec(n),o=Ua.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Kc(e,c===void 0?new lg(a,s,t):new cg(a,s,t));break}else{let u=e.map[a];u===void 0&&(u=new hg(a),Kc(e,u)),e=u}}}class No{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),o=t.getUniformLocation(e,r.name);ug(r,o,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function Jc(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const dg=37297;let fg=0;function pg(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function mg(s){const t=he.getPrimaries(he.workingColorSpace),e=he.getPrimaries(s);let n;switch(t===e?n="":t===zo&&e===Bo?n="LinearDisplayP3ToLinearSRGB":t===Bo&&e===zo&&(n="LinearSRGBToLinearDisplayP3"),s){case Ii:case Ko:return[n,"LinearTransferOETF"];case Dn:case vl:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function jc(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+pg(s.getShaderSource(t),o)}else return i}function gg(s,t){const e=mg(t);return`vec4 ${s}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function _g(s,t){let e;switch(t){case bd:e="Linear";break;case Td:e="Reinhard";break;case Ad:e="OptimizedCineon";break;case kh:e="ACESFilmic";break;case Cd:e="AgX";break;case Pd:e="Neutral";break;case Rd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function vg(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Sr).join(`
`)}function xg(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function yg(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function Sr(s){return s!==""}function Qc(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function th(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Mg=/^[ \t]*#include +<([\w\d./]+)>/gm;function el(s){return s.replace(Mg,Eg)}const Sg=new Map;function Eg(s,t){let e=$t[t];if(e===void 0){const n=Sg.get(t);if(n!==void 0)e=$t[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return el(e)}const wg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function eh(s){return s.replace(wg,bg)}function bg(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function nh(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}function Tg(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Fh?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Bh?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===qn&&(t="SHADOWMAP_TYPE_VSM"),t}function Ag(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case er:case nr:t="ENVMAP_TYPE_CUBE";break;case qo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Rg(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case nr:t="ENVMAP_MODE_REFRACTION";break}return t}function Cg(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case zh:t="ENVMAP_BLENDING_MULTIPLY";break;case Ed:t="ENVMAP_BLENDING_MIX";break;case wd:t="ENVMAP_BLENDING_ADD";break}return t}function Pg(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Lg(s,t,e,n){const i=s.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=Tg(e),c=Ag(e),h=Rg(e),u=Cg(e),d=Pg(e),f=vg(e),g=xg(r),_=i.createProgram();let m,p,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Sr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Sr).join(`
`),p.length>0&&(p+=`
`)):(m=[nh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Sr).join(`
`),p=[nh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==wi?"#define TONE_MAPPING":"",e.toneMapping!==wi?$t.tonemapping_pars_fragment:"",e.toneMapping!==wi?_g("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",$t.colorspace_pars_fragment,gg("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Sr).join(`
`)),o=el(o),o=Qc(o,e),o=th(o,e),a=el(a),a=Qc(a,e),a=th(a,e),o=eh(o),a=eh(a),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===vc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===vc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const v=E+m+o,x=E+p+a,P=Jc(i,i.VERTEX_SHADER,v),T=Jc(i,i.FRAGMENT_SHADER,x);i.attachShader(_,P),i.attachShader(_,T),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function b(I){if(s.debug.checkShaderErrors){const H=i.getProgramInfoLog(_).trim(),k=i.getShaderInfoLog(P).trim(),B=i.getShaderInfoLog(T).trim();let Q=!0,Z=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(Q=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,P,T);else{const st=jc(i,P,"vertex"),J=jc(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+H+`
`+st+`
`+J)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(k===""||B==="")&&(Z=!1);Z&&(I.diagnostics={runnable:Q,programLog:H,vertexShader:{log:k,prefix:m},fragmentShader:{log:B,prefix:p}})}i.deleteShader(P),i.deleteShader(T),O=new No(i,_),w=yg(i,_)}let O;this.getUniforms=function(){return O===void 0&&b(this),O};let w;this.getAttributes=function(){return w===void 0&&b(this),w};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=i.getProgramParameter(_,dg)),y},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=fg++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=P,this.fragmentShader=T,this}let Ig=0;class Dg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Ng(t),e.set(t,n)),n}}class Ng{constructor(t){this.id=Ig++,this.code=t,this.usedTimes=0}}function Ug(s,t,e,n,i,r,o){const a=new Ml,l=new Dg,c=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(w){return c.add(w),w===0?"uv":`uv${w}`}function m(w,y,I,H,k){const B=H.fog,Q=k.geometry,Z=w.isMeshStandardMaterial?H.environment:null,st=(w.isMeshStandardMaterial?e:t).get(w.envMap||Z),J=st&&st.mapping===qo?st.image.height:null,gt=g[w.type];w.precision!==null&&(f=i.getMaxPrecision(w.precision),f!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",f,"instead."));const St=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,Rt=St!==void 0?St.length:0;let q=0;Q.morphAttributes.position!==void 0&&(q=1),Q.morphAttributes.normal!==void 0&&(q=2),Q.morphAttributes.color!==void 0&&(q=3);let lt,F,Y,K;if(gt){const ie=Nn[gt];lt=ie.vertexShader,F=ie.fragmentShader}else lt=w.vertexShader,F=w.fragmentShader,l.update(w),Y=l.getVertexShaderID(w),K=l.getFragmentShaderID(w);const $=s.getRenderTarget(),ct=k.isInstancedMesh===!0,Tt=k.isBatchedMesh===!0,zt=!!w.map,D=!!w.matcap,Zt=!!st,Gt=!!w.aoMap,ue=!!w.lightMap,It=!!w.bumpMap,te=!!w.normalMap,Xt=!!w.displacementMap,Wt=!!w.emissiveMap,_e=!!w.metalnessMap,C=!!w.roughnessMap,M=w.anisotropy>0,W=w.clearcoat>0,et=w.dispersion>0,it=w.iridescence>0,nt=w.sheen>0,Lt=w.transmission>0,dt=M&&!!w.anisotropyMap,ft=W&&!!w.clearcoatMap,Yt=W&&!!w.clearcoatNormalMap,rt=W&&!!w.clearcoatRoughnessMap,bt=it&&!!w.iridescenceMap,Jt=it&&!!w.iridescenceThicknessMap,Ut=nt&&!!w.sheenColorMap,_t=nt&&!!w.sheenRoughnessMap,Dt=!!w.specularMap,kt=!!w.specularColorMap,ve=!!w.specularIntensityMap,N=Lt&&!!w.transmissionMap,xt=Lt&&!!w.thicknessMap,j=!!w.gradientMap,tt=!!w.alphaMap,at=w.alphaTest>0,Ot=!!w.alphaHash,ne=!!w.extensions;let ae=wi;w.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(ae=s.toneMapping);const Pe={shaderID:gt,shaderType:w.type,shaderName:w.name,vertexShader:lt,fragmentShader:F,defines:w.defines,customVertexShaderID:Y,customFragmentShaderID:K,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:f,batching:Tt,batchingColor:Tt&&k._colorsTexture!==null,instancing:ct,instancingColor:ct&&k.instanceColor!==null,instancingMorph:ct&&k.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:$===null?s.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:Ii,alphaToCoverage:!!w.alphaToCoverage,map:zt,matcap:D,envMap:Zt,envMapMode:Zt&&st.mapping,envMapCubeUVHeight:J,aoMap:Gt,lightMap:ue,bumpMap:It,normalMap:te,displacementMap:d&&Xt,emissiveMap:Wt,normalMapObjectSpace:te&&w.normalMapType===Wd,normalMapTangentSpace:te&&w.normalMapType===qh,metalnessMap:_e,roughnessMap:C,anisotropy:M,anisotropyMap:dt,clearcoat:W,clearcoatMap:ft,clearcoatNormalMap:Yt,clearcoatRoughnessMap:rt,dispersion:et,iridescence:it,iridescenceMap:bt,iridescenceThicknessMap:Jt,sheen:nt,sheenColorMap:Ut,sheenRoughnessMap:_t,specularMap:Dt,specularColorMap:kt,specularIntensityMap:ve,transmission:Lt,transmissionMap:N,thicknessMap:xt,gradientMap:j,opaque:w.transparent===!1&&w.blending===ks&&w.alphaToCoverage===!1,alphaMap:tt,alphaTest:at,alphaHash:Ot,combine:w.combine,mapUv:zt&&_(w.map.channel),aoMapUv:Gt&&_(w.aoMap.channel),lightMapUv:ue&&_(w.lightMap.channel),bumpMapUv:It&&_(w.bumpMap.channel),normalMapUv:te&&_(w.normalMap.channel),displacementMapUv:Xt&&_(w.displacementMap.channel),emissiveMapUv:Wt&&_(w.emissiveMap.channel),metalnessMapUv:_e&&_(w.metalnessMap.channel),roughnessMapUv:C&&_(w.roughnessMap.channel),anisotropyMapUv:dt&&_(w.anisotropyMap.channel),clearcoatMapUv:ft&&_(w.clearcoatMap.channel),clearcoatNormalMapUv:Yt&&_(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:rt&&_(w.clearcoatRoughnessMap.channel),iridescenceMapUv:bt&&_(w.iridescenceMap.channel),iridescenceThicknessMapUv:Jt&&_(w.iridescenceThicknessMap.channel),sheenColorMapUv:Ut&&_(w.sheenColorMap.channel),sheenRoughnessMapUv:_t&&_(w.sheenRoughnessMap.channel),specularMapUv:Dt&&_(w.specularMap.channel),specularColorMapUv:kt&&_(w.specularColorMap.channel),specularIntensityMapUv:ve&&_(w.specularIntensityMap.channel),transmissionMapUv:N&&_(w.transmissionMap.channel),thicknessMapUv:xt&&_(w.thicknessMap.channel),alphaMapUv:tt&&_(w.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(te||M),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!Q.attributes.uv&&(zt||tt),fog:!!B,useFog:w.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:k.isSkinnedMesh===!0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:Rt,morphTextureStride:q,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:s.shadowMap.enabled&&I.length>0,shadowMapType:s.shadowMap.type,toneMapping:ae,decodeVideoTexture:zt&&w.map.isVideoTexture===!0&&he.getTransfer(w.map.colorSpace)===Me,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===hn,flipSided:w.side===nn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:ne&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:ne&&w.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Pe.vertexUv1s=c.has(1),Pe.vertexUv2s=c.has(2),Pe.vertexUv3s=c.has(3),c.clear(),Pe}function p(w){const y=[];if(w.shaderID?y.push(w.shaderID):(y.push(w.customVertexShaderID),y.push(w.customFragmentShaderID)),w.defines!==void 0)for(const I in w.defines)y.push(I),y.push(w.defines[I]);return w.isRawShaderMaterial===!1&&(E(y,w),v(y,w),y.push(s.outputColorSpace)),y.push(w.customProgramCacheKey),y.join()}function E(w,y){w.push(y.precision),w.push(y.outputColorSpace),w.push(y.envMapMode),w.push(y.envMapCubeUVHeight),w.push(y.mapUv),w.push(y.alphaMapUv),w.push(y.lightMapUv),w.push(y.aoMapUv),w.push(y.bumpMapUv),w.push(y.normalMapUv),w.push(y.displacementMapUv),w.push(y.emissiveMapUv),w.push(y.metalnessMapUv),w.push(y.roughnessMapUv),w.push(y.anisotropyMapUv),w.push(y.clearcoatMapUv),w.push(y.clearcoatNormalMapUv),w.push(y.clearcoatRoughnessMapUv),w.push(y.iridescenceMapUv),w.push(y.iridescenceThicknessMapUv),w.push(y.sheenColorMapUv),w.push(y.sheenRoughnessMapUv),w.push(y.specularMapUv),w.push(y.specularColorMapUv),w.push(y.specularIntensityMapUv),w.push(y.transmissionMapUv),w.push(y.thicknessMapUv),w.push(y.combine),w.push(y.fogExp2),w.push(y.sizeAttenuation),w.push(y.morphTargetsCount),w.push(y.morphAttributeCount),w.push(y.numDirLights),w.push(y.numPointLights),w.push(y.numSpotLights),w.push(y.numSpotLightMaps),w.push(y.numHemiLights),w.push(y.numRectAreaLights),w.push(y.numDirLightShadows),w.push(y.numPointLightShadows),w.push(y.numSpotLightShadows),w.push(y.numSpotLightShadowsWithMaps),w.push(y.numLightProbes),w.push(y.shadowMapType),w.push(y.toneMapping),w.push(y.numClippingPlanes),w.push(y.numClipIntersection),w.push(y.depthPacking)}function v(w,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),w.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.skinning&&a.enable(4),y.morphTargets&&a.enable(5),y.morphNormals&&a.enable(6),y.morphColors&&a.enable(7),y.premultipliedAlpha&&a.enable(8),y.shadowMapEnabled&&a.enable(9),y.doubleSided&&a.enable(10),y.flipSided&&a.enable(11),y.useDepthPacking&&a.enable(12),y.dithering&&a.enable(13),y.transmission&&a.enable(14),y.sheen&&a.enable(15),y.opaque&&a.enable(16),y.pointsUvs&&a.enable(17),y.decodeVideoTexture&&a.enable(18),y.alphaToCoverage&&a.enable(19),w.push(a.mask)}function x(w){const y=g[w.type];let I;if(y){const H=Nn[y];I=xf.clone(H.uniforms)}else I=w.uniforms;return I}function P(w,y){let I;for(let H=0,k=h.length;H<k;H++){const B=h[H];if(B.cacheKey===y){I=B,++I.usedTimes;break}}return I===void 0&&(I=new Lg(s,y,w,r),h.push(I)),I}function T(w){if(--w.usedTimes===0){const y=h.indexOf(w);h[y]=h[h.length-1],h.pop(),w.destroy()}}function b(w){l.remove(w)}function O(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:P,releaseProgram:T,releaseShaderCache:b,programs:h,dispose:O}}function Og(){let s=new WeakMap;function t(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function e(r){s.delete(r)}function n(r,o,a){s.get(r)[o]=a}function i(){s=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function Fg(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function ih(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function sh(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(u,d,f,g,_,m){let p=s[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},s[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),t++,p}function a(u,d,f,g,_,m){const p=o(u,d,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):e.push(p)}function l(u,d,f,g,_,m){const p=o(u,d,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):e.unshift(p)}function c(u,d){e.length>1&&e.sort(u||Fg),n.length>1&&n.sort(d||ih),i.length>1&&i.sort(d||ih)}function h(){for(let u=t,d=s.length;u<d;u++){const f=s[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:h,sort:c}}function Bg(){let s=new WeakMap;function t(n,i){const r=s.get(n);let o;return r===void 0?(o=new sh,s.set(n,[o])):i>=r.length?(o=new sh,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function zg(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new Qt};break;case"SpotLight":e={position:new L,direction:new L,color:new Qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new Qt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new Qt,groundColor:new Qt};break;case"RectAreaLight":e={color:new Qt,position:new L,halfWidth:new L,halfHeight:new L};break}return s[t.id]=e,e}}}function kg(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let Hg=0;function Gg(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Vg(s){const t=new zg,e=kg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new L);const i=new L,r=new Se,o=new Se;function a(c){let h=0,u=0,d=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,E=0,v=0,x=0,P=0,T=0,b=0;c.sort(Gg);for(let w=0,y=c.length;w<y;w++){const I=c[w],H=I.color,k=I.intensity,B=I.distance,Q=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=H.r*k,u+=H.g*k,d+=H.b*k;else if(I.isLightProbe){for(let Z=0;Z<9;Z++)n.probe[Z].addScaledVector(I.sh.coefficients[Z],k);b++}else if(I.isDirectionalLight){const Z=t.get(I);if(Z.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const st=I.shadow,J=e.get(I);J.shadowBias=st.bias,J.shadowNormalBias=st.normalBias,J.shadowRadius=st.radius,J.shadowMapSize=st.mapSize,n.directionalShadow[f]=J,n.directionalShadowMap[f]=Q,n.directionalShadowMatrix[f]=I.shadow.matrix,E++}n.directional[f]=Z,f++}else if(I.isSpotLight){const Z=t.get(I);Z.position.setFromMatrixPosition(I.matrixWorld),Z.color.copy(H).multiplyScalar(k),Z.distance=B,Z.coneCos=Math.cos(I.angle),Z.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),Z.decay=I.decay,n.spot[_]=Z;const st=I.shadow;if(I.map&&(n.spotLightMap[P]=I.map,P++,st.updateMatrices(I),I.castShadow&&T++),n.spotLightMatrix[_]=st.matrix,I.castShadow){const J=e.get(I);J.shadowBias=st.bias,J.shadowNormalBias=st.normalBias,J.shadowRadius=st.radius,J.shadowMapSize=st.mapSize,n.spotShadow[_]=J,n.spotShadowMap[_]=Q,x++}_++}else if(I.isRectAreaLight){const Z=t.get(I);Z.color.copy(H).multiplyScalar(k),Z.halfWidth.set(I.width*.5,0,0),Z.halfHeight.set(0,I.height*.5,0),n.rectArea[m]=Z,m++}else if(I.isPointLight){const Z=t.get(I);if(Z.color.copy(I.color).multiplyScalar(I.intensity),Z.distance=I.distance,Z.decay=I.decay,I.castShadow){const st=I.shadow,J=e.get(I);J.shadowBias=st.bias,J.shadowNormalBias=st.normalBias,J.shadowRadius=st.radius,J.shadowMapSize=st.mapSize,J.shadowCameraNear=st.camera.near,J.shadowCameraFar=st.camera.far,n.pointShadow[g]=J,n.pointShadowMap[g]=Q,n.pointShadowMatrix[g]=I.shadow.matrix,v++}n.point[g]=Z,g++}else if(I.isHemisphereLight){const Z=t.get(I);Z.skyColor.copy(I.color).multiplyScalar(k),Z.groundColor.copy(I.groundColor).multiplyScalar(k),n.hemi[p]=Z,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=pt.LTC_FLOAT_1,n.rectAreaLTC2=pt.LTC_FLOAT_2):(n.rectAreaLTC1=pt.LTC_HALF_1,n.rectAreaLTC2=pt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const O=n.hash;(O.directionalLength!==f||O.pointLength!==g||O.spotLength!==_||O.rectAreaLength!==m||O.hemiLength!==p||O.numDirectionalShadows!==E||O.numPointShadows!==v||O.numSpotShadows!==x||O.numSpotMaps!==P||O.numLightProbes!==b)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=x+P-T,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=b,O.directionalLength=f,O.pointLength=g,O.spotLength=_,O.rectAreaLength=m,O.hemiLength=p,O.numDirectionalShadows=E,O.numPointShadows=v,O.numSpotShadows=x,O.numSpotMaps=P,O.numLightProbes=b,n.version=Hg++)}function l(c,h){let u=0,d=0,f=0,g=0,_=0;const m=h.matrixWorldInverse;for(let p=0,E=c.length;p<E;p++){const v=c[p];if(v.isDirectionalLight){const x=n.directional[u];x.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),u++}else if(v.isSpotLight){const x=n.spot[f];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),f++}else if(v.isRectAreaLight){const x=n.rectArea[g];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(m),o.identity(),r.copy(v.matrixWorld),r.premultiply(m),o.extractRotation(r),x.halfWidth.set(v.width*.5,0,0),x.halfHeight.set(0,v.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(v.isPointLight){const x=n.point[d];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(m),d++}else if(v.isHemisphereLight){const x=n.hemi[_];x.direction.setFromMatrixPosition(v.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function rh(s){const t=new Vg(s),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Wg(s){let t=new WeakMap;function e(i,r=0){const o=t.get(i);let a;return o===void 0?(a=new rh(s),t.set(i,[a])):r>=o.length?(a=new rh(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class Xg extends cr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Gd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Zg extends cr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Yg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,qg=`uniform sampler2D shadow_pass;
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
}`;function $g(s,t,e){let n=new Sl;const i=new vt,r=new vt,o=new we,a=new Xg({depthPacking:Vd}),l=new Zg,c={},h=e.maxTextureSize,u={[Ai]:nn,[nn]:Ai,[hn]:hn},d=new Ci({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new vt},radius:{value:4}},vertexShader:Yg,fragmentShader:qg}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new un;g.setAttribute("position",new An(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new wt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fh;let p=this.type;this.render=function(T,b,O){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const w=s.getRenderTarget(),y=s.getActiveCubeFace(),I=s.getActiveMipmapLevel(),H=s.state;H.setBlending(Ei),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const k=p!==qn&&this.type===qn,B=p===qn&&this.type!==qn;for(let Q=0,Z=T.length;Q<Z;Q++){const st=T[Q],J=st.shadow;if(J===void 0){console.warn("THREE.WebGLShadowMap:",st,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;i.copy(J.mapSize);const gt=J.getFrameExtents();if(i.multiply(gt),r.copy(J.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/gt.x),i.x=r.x*gt.x,J.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/gt.y),i.y=r.y*gt.y,J.mapSize.y=r.y)),J.map===null||k===!0||B===!0){const Rt=this.type!==qn?{minFilter:_n,magFilter:_n}:{};J.map!==null&&J.map.dispose(),J.map=new ns(i.x,i.y,Rt),J.map.texture.name=st.name+".shadowMap",J.camera.updateProjectionMatrix()}s.setRenderTarget(J.map),s.clear();const St=J.getViewportCount();for(let Rt=0;Rt<St;Rt++){const q=J.getViewport(Rt);o.set(r.x*q.x,r.y*q.y,r.x*q.z,r.y*q.w),H.viewport(o),J.updateMatrices(st,Rt),n=J.getFrustum(),x(b,O,J.camera,st,this.type)}J.isPointLightShadow!==!0&&this.type===qn&&E(J,O),J.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(w,y,I)};function E(T,b){const O=t.update(_);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new ns(i.x,i.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,s.setRenderTarget(T.mapPass),s.clear(),s.renderBufferDirect(b,null,O,d,_,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,s.setRenderTarget(T.map),s.clear(),s.renderBufferDirect(b,null,O,f,_,null)}function v(T,b,O,w){let y=null;const I=O.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(I!==void 0)y=I;else if(y=O.isPointLight===!0?l:a,s.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const H=y.uuid,k=b.uuid;let B=c[H];B===void 0&&(B={},c[H]=B);let Q=B[k];Q===void 0&&(Q=y.clone(),B[k]=Q,b.addEventListener("dispose",P)),y=Q}if(y.visible=b.visible,y.wireframe=b.wireframe,w===qn?y.side=b.shadowSide!==null?b.shadowSide:b.side:y.side=b.shadowSide!==null?b.shadowSide:u[b.side],y.alphaMap=b.alphaMap,y.alphaTest=b.alphaTest,y.map=b.map,y.clipShadows=b.clipShadows,y.clippingPlanes=b.clippingPlanes,y.clipIntersection=b.clipIntersection,y.displacementMap=b.displacementMap,y.displacementScale=b.displacementScale,y.displacementBias=b.displacementBias,y.wireframeLinewidth=b.wireframeLinewidth,y.linewidth=b.linewidth,O.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const H=s.properties.get(y);H.light=O}return y}function x(T,b,O,w,y){if(T.visible===!1)return;if(T.layers.test(b.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&y===qn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,T.matrixWorld);const k=t.update(T),B=T.material;if(Array.isArray(B)){const Q=k.groups;for(let Z=0,st=Q.length;Z<st;Z++){const J=Q[Z],gt=B[J.materialIndex];if(gt&&gt.visible){const St=v(T,gt,w,y);T.onBeforeShadow(s,T,b,O,k,St,J),s.renderBufferDirect(O,null,k,St,T,J),T.onAfterShadow(s,T,b,O,k,St,J)}}}else if(B.visible){const Q=v(T,B,w,y);T.onBeforeShadow(s,T,b,O,k,Q,null),s.renderBufferDirect(O,null,k,Q,T,null),T.onAfterShadow(s,T,b,O,k,Q,null)}}const H=T.children;for(let k=0,B=H.length;k<B;k++)x(H[k],b,O,w,y)}function P(T){T.target.removeEventListener("dispose",P);for(const O in c){const w=c[O],y=T.target.uuid;y in w&&(w[y].dispose(),delete w[y])}}}function Kg(s){function t(){let N=!1;const xt=new we;let j=null;const tt=new we(0,0,0,0);return{setMask:function(at){j!==at&&!N&&(s.colorMask(at,at,at,at),j=at)},setLocked:function(at){N=at},setClear:function(at,Ot,ne,ae,Pe){Pe===!0&&(at*=ae,Ot*=ae,ne*=ae),xt.set(at,Ot,ne,ae),tt.equals(xt)===!1&&(s.clearColor(at,Ot,ne,ae),tt.copy(xt))},reset:function(){N=!1,j=null,tt.set(-1,0,0,0)}}}function e(){let N=!1,xt=null,j=null,tt=null;return{setTest:function(at){at?K(s.DEPTH_TEST):$(s.DEPTH_TEST)},setMask:function(at){xt!==at&&!N&&(s.depthMask(at),xt=at)},setFunc:function(at){if(j!==at){switch(at){case gd:s.depthFunc(s.NEVER);break;case _d:s.depthFunc(s.ALWAYS);break;case vd:s.depthFunc(s.LESS);break;case Uo:s.depthFunc(s.LEQUAL);break;case xd:s.depthFunc(s.EQUAL);break;case yd:s.depthFunc(s.GEQUAL);break;case Md:s.depthFunc(s.GREATER);break;case Sd:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}j=at}},setLocked:function(at){N=at},setClear:function(at){tt!==at&&(s.clearDepth(at),tt=at)},reset:function(){N=!1,xt=null,j=null,tt=null}}}function n(){let N=!1,xt=null,j=null,tt=null,at=null,Ot=null,ne=null,ae=null,Pe=null;return{setTest:function(ie){N||(ie?K(s.STENCIL_TEST):$(s.STENCIL_TEST))},setMask:function(ie){xt!==ie&&!N&&(s.stencilMask(ie),xt=ie)},setFunc:function(ie,sn,rn){(j!==ie||tt!==sn||at!==rn)&&(s.stencilFunc(ie,sn,rn),j=ie,tt=sn,at=rn)},setOp:function(ie,sn,rn){(Ot!==ie||ne!==sn||ae!==rn)&&(s.stencilOp(ie,sn,rn),Ot=ie,ne=sn,ae=rn)},setLocked:function(ie){N=ie},setClear:function(ie){Pe!==ie&&(s.clearStencil(ie),Pe=ie)},reset:function(){N=!1,xt=null,j=null,tt=null,at=null,Ot=null,ne=null,ae=null,Pe=null}}}const i=new t,r=new e,o=new n,a=new WeakMap,l=new WeakMap;let c={},h={},u=new WeakMap,d=[],f=null,g=!1,_=null,m=null,p=null,E=null,v=null,x=null,P=null,T=new Qt(0,0,0),b=0,O=!1,w=null,y=null,I=null,H=null,k=null;const B=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Q=!1,Z=0;const st=s.getParameter(s.VERSION);st.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(st)[1]),Q=Z>=1):st.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(st)[1]),Q=Z>=2);let J=null,gt={};const St=s.getParameter(s.SCISSOR_BOX),Rt=s.getParameter(s.VIEWPORT),q=new we().fromArray(St),lt=new we().fromArray(Rt);function F(N,xt,j,tt){const at=new Uint8Array(4),Ot=s.createTexture();s.bindTexture(N,Ot),s.texParameteri(N,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(N,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ne=0;ne<j;ne++)N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY?s.texImage3D(xt,0,s.RGBA,1,1,tt,0,s.RGBA,s.UNSIGNED_BYTE,at):s.texImage2D(xt+ne,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,at);return Ot}const Y={};Y[s.TEXTURE_2D]=F(s.TEXTURE_2D,s.TEXTURE_2D,1),Y[s.TEXTURE_CUBE_MAP]=F(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[s.TEXTURE_2D_ARRAY]=F(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Y[s.TEXTURE_3D]=F(s.TEXTURE_3D,s.TEXTURE_3D,1,1),i.setClear(0,0,0,1),r.setClear(1),o.setClear(0),K(s.DEPTH_TEST),r.setFunc(Uo),It(!1),te(Hl),K(s.CULL_FACE),Gt(Ei);function K(N){c[N]!==!0&&(s.enable(N),c[N]=!0)}function $(N){c[N]!==!1&&(s.disable(N),c[N]=!1)}function ct(N,xt){return h[N]!==xt?(s.bindFramebuffer(N,xt),h[N]=xt,N===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=xt),N===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=xt),!0):!1}function Tt(N,xt){let j=d,tt=!1;if(N){j=u.get(xt),j===void 0&&(j=[],u.set(xt,j));const at=N.textures;if(j.length!==at.length||j[0]!==s.COLOR_ATTACHMENT0){for(let Ot=0,ne=at.length;Ot<ne;Ot++)j[Ot]=s.COLOR_ATTACHMENT0+Ot;j.length=at.length,tt=!0}}else j[0]!==s.BACK&&(j[0]=s.BACK,tt=!0);tt&&s.drawBuffers(j)}function zt(N){return f!==N?(s.useProgram(N),f=N,!0):!1}const D={[Gi]:s.FUNC_ADD,[Qu]:s.FUNC_SUBTRACT,[td]:s.FUNC_REVERSE_SUBTRACT};D[ed]=s.MIN,D[nd]=s.MAX;const Zt={[id]:s.ZERO,[sd]:s.ONE,[rd]:s.SRC_COLOR,[Ya]:s.SRC_ALPHA,[ud]:s.SRC_ALPHA_SATURATE,[cd]:s.DST_COLOR,[ad]:s.DST_ALPHA,[od]:s.ONE_MINUS_SRC_COLOR,[qa]:s.ONE_MINUS_SRC_ALPHA,[hd]:s.ONE_MINUS_DST_COLOR,[ld]:s.ONE_MINUS_DST_ALPHA,[dd]:s.CONSTANT_COLOR,[fd]:s.ONE_MINUS_CONSTANT_COLOR,[pd]:s.CONSTANT_ALPHA,[md]:s.ONE_MINUS_CONSTANT_ALPHA};function Gt(N,xt,j,tt,at,Ot,ne,ae,Pe,ie){if(N===Ei){g===!0&&($(s.BLEND),g=!1);return}if(g===!1&&(K(s.BLEND),g=!0),N!==ju){if(N!==_||ie!==O){if((m!==Gi||v!==Gi)&&(s.blendEquation(s.FUNC_ADD),m=Gi,v=Gi),ie)switch(N){case ks:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Gl:s.blendFunc(s.ONE,s.ONE);break;case Vl:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Wl:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case ks:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Gl:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Vl:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Wl:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}p=null,E=null,x=null,P=null,T.set(0,0,0),b=0,_=N,O=ie}return}at=at||xt,Ot=Ot||j,ne=ne||tt,(xt!==m||at!==v)&&(s.blendEquationSeparate(D[xt],D[at]),m=xt,v=at),(j!==p||tt!==E||Ot!==x||ne!==P)&&(s.blendFuncSeparate(Zt[j],Zt[tt],Zt[Ot],Zt[ne]),p=j,E=tt,x=Ot,P=ne),(ae.equals(T)===!1||Pe!==b)&&(s.blendColor(ae.r,ae.g,ae.b,Pe),T.copy(ae),b=Pe),_=N,O=!1}function ue(N,xt){N.side===hn?$(s.CULL_FACE):K(s.CULL_FACE);let j=N.side===nn;xt&&(j=!j),It(j),N.blending===ks&&N.transparent===!1?Gt(Ei):Gt(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),r.setFunc(N.depthFunc),r.setTest(N.depthTest),r.setMask(N.depthWrite),i.setMask(N.colorWrite);const tt=N.stencilWrite;o.setTest(tt),tt&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Wt(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?K(s.SAMPLE_ALPHA_TO_COVERAGE):$(s.SAMPLE_ALPHA_TO_COVERAGE)}function It(N){w!==N&&(N?s.frontFace(s.CW):s.frontFace(s.CCW),w=N)}function te(N){N!==Ku?(K(s.CULL_FACE),N!==y&&(N===Hl?s.cullFace(s.BACK):N===Ju?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):$(s.CULL_FACE),y=N}function Xt(N){N!==I&&(Q&&s.lineWidth(N),I=N)}function Wt(N,xt,j){N?(K(s.POLYGON_OFFSET_FILL),(H!==xt||k!==j)&&(s.polygonOffset(xt,j),H=xt,k=j)):$(s.POLYGON_OFFSET_FILL)}function _e(N){N?K(s.SCISSOR_TEST):$(s.SCISSOR_TEST)}function C(N){N===void 0&&(N=s.TEXTURE0+B-1),J!==N&&(s.activeTexture(N),J=N)}function M(N,xt,j){j===void 0&&(J===null?j=s.TEXTURE0+B-1:j=J);let tt=gt[j];tt===void 0&&(tt={type:void 0,texture:void 0},gt[j]=tt),(tt.type!==N||tt.texture!==xt)&&(J!==j&&(s.activeTexture(j),J=j),s.bindTexture(N,xt||Y[N]),tt.type=N,tt.texture=xt)}function W(){const N=gt[J];N!==void 0&&N.type!==void 0&&(s.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function et(){try{s.compressedTexImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function it(){try{s.compressedTexImage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function nt(){try{s.texSubImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Lt(){try{s.texSubImage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function dt(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ft(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Yt(){try{s.texStorage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function rt(){try{s.texStorage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function bt(){try{s.texImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Jt(){try{s.texImage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ut(N){q.equals(N)===!1&&(s.scissor(N.x,N.y,N.z,N.w),q.copy(N))}function _t(N){lt.equals(N)===!1&&(s.viewport(N.x,N.y,N.z,N.w),lt.copy(N))}function Dt(N,xt){let j=l.get(xt);j===void 0&&(j=new WeakMap,l.set(xt,j));let tt=j.get(N);tt===void 0&&(tt=s.getUniformBlockIndex(xt,N.name),j.set(N,tt))}function kt(N,xt){const tt=l.get(xt).get(N);a.get(xt)!==tt&&(s.uniformBlockBinding(xt,tt,N.__bindingPointIndex),a.set(xt,tt))}function ve(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),c={},J=null,gt={},h={},u=new WeakMap,d=[],f=null,g=!1,_=null,m=null,p=null,E=null,v=null,x=null,P=null,T=new Qt(0,0,0),b=0,O=!1,w=null,y=null,I=null,H=null,k=null,q.set(0,0,s.canvas.width,s.canvas.height),lt.set(0,0,s.canvas.width,s.canvas.height),i.reset(),r.reset(),o.reset()}return{buffers:{color:i,depth:r,stencil:o},enable:K,disable:$,bindFramebuffer:ct,drawBuffers:Tt,useProgram:zt,setBlending:Gt,setMaterial:ue,setFlipSided:It,setCullFace:te,setLineWidth:Xt,setPolygonOffset:Wt,setScissorTest:_e,activeTexture:C,bindTexture:M,unbindTexture:W,compressedTexImage2D:et,compressedTexImage3D:it,texImage2D:bt,texImage3D:Jt,updateUBOMapping:Dt,uniformBlockBinding:kt,texStorage2D:Yt,texStorage3D:rt,texSubImage2D:nt,texSubImage3D:Lt,compressedTexSubImage2D:dt,compressedTexSubImage3D:ft,scissor:Ut,viewport:_t,reset:ve}}function Jg(s,t,e,n,i,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new vt,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,M){return f?new OffscreenCanvas(C,M):Ho("canvas")}function _(C,M,W){let et=1;const it=_e(C);if((it.width>W||it.height>W)&&(et=W/Math.max(it.width,it.height)),et<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const nt=Math.floor(et*it.width),Lt=Math.floor(et*it.height);u===void 0&&(u=g(nt,Lt));const dt=M?g(nt,Lt):u;return dt.width=nt,dt.height=Lt,dt.getContext("2d").drawImage(C,0,0,nt,Lt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+it.width+"x"+it.height+") to ("+nt+"x"+Lt+")."),dt}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+it.width+"x"+it.height+")."),C;return C}function m(C){return C.generateMipmaps&&C.minFilter!==_n&&C.minFilter!==bn}function p(C){s.generateMipmap(C)}function E(C,M,W,et,it=!1){if(C!==null){if(s[C]!==void 0)return s[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let nt=M;if(M===s.RED&&(W===s.FLOAT&&(nt=s.R32F),W===s.HALF_FLOAT&&(nt=s.R16F),W===s.UNSIGNED_BYTE&&(nt=s.R8)),M===s.RED_INTEGER&&(W===s.UNSIGNED_BYTE&&(nt=s.R8UI),W===s.UNSIGNED_SHORT&&(nt=s.R16UI),W===s.UNSIGNED_INT&&(nt=s.R32UI),W===s.BYTE&&(nt=s.R8I),W===s.SHORT&&(nt=s.R16I),W===s.INT&&(nt=s.R32I)),M===s.RG&&(W===s.FLOAT&&(nt=s.RG32F),W===s.HALF_FLOAT&&(nt=s.RG16F),W===s.UNSIGNED_BYTE&&(nt=s.RG8)),M===s.RG_INTEGER&&(W===s.UNSIGNED_BYTE&&(nt=s.RG8UI),W===s.UNSIGNED_SHORT&&(nt=s.RG16UI),W===s.UNSIGNED_INT&&(nt=s.RG32UI),W===s.BYTE&&(nt=s.RG8I),W===s.SHORT&&(nt=s.RG16I),W===s.INT&&(nt=s.RG32I)),M===s.RGB&&W===s.UNSIGNED_INT_5_9_9_9_REV&&(nt=s.RGB9_E5),M===s.RGBA){const Lt=it?Fo:he.getTransfer(et);W===s.FLOAT&&(nt=s.RGBA32F),W===s.HALF_FLOAT&&(nt=s.RGBA16F),W===s.UNSIGNED_BYTE&&(nt=Lt===Me?s.SRGB8_ALPHA8:s.RGBA8),W===s.UNSIGNED_SHORT_4_4_4_4&&(nt=s.RGBA4),W===s.UNSIGNED_SHORT_5_5_5_1&&(nt=s.RGB5_A1)}return(nt===s.R16F||nt===s.R32F||nt===s.RG16F||nt===s.RG32F||nt===s.RGBA16F||nt===s.RGBA32F)&&t.get("EXT_color_buffer_float"),nt}function v(C,M){let W;return C?M===null||M===ir||M===sr?W=s.DEPTH24_STENCIL8:M===Si?W=s.DEPTH32F_STENCIL8:M===Oo&&(W=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===ir||M===sr?W=s.DEPTH_COMPONENT24:M===Si?W=s.DEPTH_COMPONENT32F:M===Oo&&(W=s.DEPTH_COMPONENT16),W}function x(C,M){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==_n&&C.minFilter!==bn?Math.log2(Math.max(M.width,M.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?M.mipmaps.length:1}function P(C){const M=C.target;M.removeEventListener("dispose",P),b(M),M.isVideoTexture&&h.delete(M)}function T(C){const M=C.target;M.removeEventListener("dispose",T),w(M)}function b(C){const M=n.get(C);if(M.__webglInit===void 0)return;const W=C.source,et=d.get(W);if(et){const it=et[M.__cacheKey];it.usedTimes--,it.usedTimes===0&&O(C),Object.keys(et).length===0&&d.delete(W)}n.remove(C)}function O(C){const M=n.get(C);s.deleteTexture(M.__webglTexture);const W=C.source,et=d.get(W);delete et[M.__cacheKey],o.memory.textures--}function w(C){const M=n.get(C);if(C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let et=0;et<6;et++){if(Array.isArray(M.__webglFramebuffer[et]))for(let it=0;it<M.__webglFramebuffer[et].length;it++)s.deleteFramebuffer(M.__webglFramebuffer[et][it]);else s.deleteFramebuffer(M.__webglFramebuffer[et]);M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer[et])}else{if(Array.isArray(M.__webglFramebuffer))for(let et=0;et<M.__webglFramebuffer.length;et++)s.deleteFramebuffer(M.__webglFramebuffer[et]);else s.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&s.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let et=0;et<M.__webglColorRenderbuffer.length;et++)M.__webglColorRenderbuffer[et]&&s.deleteRenderbuffer(M.__webglColorRenderbuffer[et]);M.__webglDepthRenderbuffer&&s.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const W=C.textures;for(let et=0,it=W.length;et<it;et++){const nt=n.get(W[et]);nt.__webglTexture&&(s.deleteTexture(nt.__webglTexture),o.memory.textures--),n.remove(W[et])}n.remove(C)}let y=0;function I(){y=0}function H(){const C=y;return C>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),y+=1,C}function k(C){const M=[];return M.push(C.wrapS),M.push(C.wrapT),M.push(C.wrapR||0),M.push(C.magFilter),M.push(C.minFilter),M.push(C.anisotropy),M.push(C.internalFormat),M.push(C.format),M.push(C.type),M.push(C.generateMipmaps),M.push(C.premultiplyAlpha),M.push(C.flipY),M.push(C.unpackAlignment),M.push(C.colorSpace),M.join()}function B(C,M){const W=n.get(C);if(C.isVideoTexture&&Xt(C),C.isRenderTargetTexture===!1&&C.version>0&&W.__version!==C.version){const et=C.image;if(et===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(et.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{lt(W,C,M);return}}e.bindTexture(s.TEXTURE_2D,W.__webglTexture,s.TEXTURE0+M)}function Q(C,M){const W=n.get(C);if(C.version>0&&W.__version!==C.version){lt(W,C,M);return}e.bindTexture(s.TEXTURE_2D_ARRAY,W.__webglTexture,s.TEXTURE0+M)}function Z(C,M){const W=n.get(C);if(C.version>0&&W.__version!==C.version){lt(W,C,M);return}e.bindTexture(s.TEXTURE_3D,W.__webglTexture,s.TEXTURE0+M)}function st(C,M){const W=n.get(C);if(C.version>0&&W.__version!==C.version){F(W,C,M);return}e.bindTexture(s.TEXTURE_CUBE_MAP,W.__webglTexture,s.TEXTURE0+M)}const J={[Ja]:s.REPEAT,[Wi]:s.CLAMP_TO_EDGE,[ja]:s.MIRRORED_REPEAT},gt={[_n]:s.NEAREST,[Ld]:s.NEAREST_MIPMAP_NEAREST,[io]:s.NEAREST_MIPMAP_LINEAR,[bn]:s.LINEAR,[sa]:s.LINEAR_MIPMAP_NEAREST,[Xi]:s.LINEAR_MIPMAP_LINEAR},St={[Xd]:s.NEVER,[Jd]:s.ALWAYS,[Zd]:s.LESS,[$h]:s.LEQUAL,[Yd]:s.EQUAL,[Kd]:s.GEQUAL,[qd]:s.GREATER,[$d]:s.NOTEQUAL};function Rt(C,M){if(M.type===Si&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===bn||M.magFilter===sa||M.magFilter===io||M.magFilter===Xi||M.minFilter===bn||M.minFilter===sa||M.minFilter===io||M.minFilter===Xi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(C,s.TEXTURE_WRAP_S,J[M.wrapS]),s.texParameteri(C,s.TEXTURE_WRAP_T,J[M.wrapT]),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,J[M.wrapR]),s.texParameteri(C,s.TEXTURE_MAG_FILTER,gt[M.magFilter]),s.texParameteri(C,s.TEXTURE_MIN_FILTER,gt[M.minFilter]),M.compareFunction&&(s.texParameteri(C,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(C,s.TEXTURE_COMPARE_FUNC,St[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===_n||M.minFilter!==io&&M.minFilter!==Xi||M.type===Si&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const W=t.get("EXT_texture_filter_anisotropic");s.texParameterf(C,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function q(C,M){let W=!1;C.__webglInit===void 0&&(C.__webglInit=!0,M.addEventListener("dispose",P));const et=M.source;let it=d.get(et);it===void 0&&(it={},d.set(et,it));const nt=k(M);if(nt!==C.__cacheKey){it[nt]===void 0&&(it[nt]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,W=!0),it[nt].usedTimes++;const Lt=it[C.__cacheKey];Lt!==void 0&&(it[C.__cacheKey].usedTimes--,Lt.usedTimes===0&&O(M)),C.__cacheKey=nt,C.__webglTexture=it[nt].texture}return W}function lt(C,M,W){let et=s.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(et=s.TEXTURE_2D_ARRAY),M.isData3DTexture&&(et=s.TEXTURE_3D);const it=q(C,M),nt=M.source;e.bindTexture(et,C.__webglTexture,s.TEXTURE0+W);const Lt=n.get(nt);if(nt.version!==Lt.__version||it===!0){e.activeTexture(s.TEXTURE0+W);const dt=he.getPrimaries(he.workingColorSpace),ft=M.colorSpace===_i?null:he.getPrimaries(M.colorSpace),Yt=M.colorSpace===_i||dt===ft?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Yt);let rt=_(M.image,!1,i.maxTextureSize);rt=Wt(M,rt);const bt=r.convert(M.format,M.colorSpace),Jt=r.convert(M.type);let Ut=E(M.internalFormat,bt,Jt,M.colorSpace,M.isVideoTexture);Rt(et,M);let _t;const Dt=M.mipmaps,kt=M.isVideoTexture!==!0,ve=Lt.__version===void 0||it===!0,N=nt.dataReady,xt=x(M,rt);if(M.isDepthTexture)Ut=v(M.format===rr,M.type),ve&&(kt?e.texStorage2D(s.TEXTURE_2D,1,Ut,rt.width,rt.height):e.texImage2D(s.TEXTURE_2D,0,Ut,rt.width,rt.height,0,bt,Jt,null));else if(M.isDataTexture)if(Dt.length>0){kt&&ve&&e.texStorage2D(s.TEXTURE_2D,xt,Ut,Dt[0].width,Dt[0].height);for(let j=0,tt=Dt.length;j<tt;j++)_t=Dt[j],kt?N&&e.texSubImage2D(s.TEXTURE_2D,j,0,0,_t.width,_t.height,bt,Jt,_t.data):e.texImage2D(s.TEXTURE_2D,j,Ut,_t.width,_t.height,0,bt,Jt,_t.data);M.generateMipmaps=!1}else kt?(ve&&e.texStorage2D(s.TEXTURE_2D,xt,Ut,rt.width,rt.height),N&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,rt.width,rt.height,bt,Jt,rt.data)):e.texImage2D(s.TEXTURE_2D,0,Ut,rt.width,rt.height,0,bt,Jt,rt.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){kt&&ve&&e.texStorage3D(s.TEXTURE_2D_ARRAY,xt,Ut,Dt[0].width,Dt[0].height,rt.depth);for(let j=0,tt=Dt.length;j<tt;j++)if(_t=Dt[j],M.format!==On)if(bt!==null)if(kt){if(N)if(M.layerUpdates.size>0){for(const at of M.layerUpdates){const Ot=_t.width*_t.height;e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,j,0,0,at,_t.width,_t.height,1,bt,_t.data.slice(Ot*at,Ot*(at+1)),0,0)}M.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,j,0,0,0,_t.width,_t.height,rt.depth,bt,_t.data,0,0)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,j,Ut,_t.width,_t.height,rt.depth,0,_t.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else kt?N&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,j,0,0,0,_t.width,_t.height,rt.depth,bt,Jt,_t.data):e.texImage3D(s.TEXTURE_2D_ARRAY,j,Ut,_t.width,_t.height,rt.depth,0,bt,Jt,_t.data)}else{kt&&ve&&e.texStorage2D(s.TEXTURE_2D,xt,Ut,Dt[0].width,Dt[0].height);for(let j=0,tt=Dt.length;j<tt;j++)_t=Dt[j],M.format!==On?bt!==null?kt?N&&e.compressedTexSubImage2D(s.TEXTURE_2D,j,0,0,_t.width,_t.height,bt,_t.data):e.compressedTexImage2D(s.TEXTURE_2D,j,Ut,_t.width,_t.height,0,_t.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):kt?N&&e.texSubImage2D(s.TEXTURE_2D,j,0,0,_t.width,_t.height,bt,Jt,_t.data):e.texImage2D(s.TEXTURE_2D,j,Ut,_t.width,_t.height,0,bt,Jt,_t.data)}else if(M.isDataArrayTexture)if(kt){if(ve&&e.texStorage3D(s.TEXTURE_2D_ARRAY,xt,Ut,rt.width,rt.height,rt.depth),N)if(M.layerUpdates.size>0){let j;switch(Jt){case s.UNSIGNED_BYTE:switch(bt){case s.ALPHA:j=1;break;case s.LUMINANCE:j=1;break;case s.LUMINANCE_ALPHA:j=2;break;case s.RGB:j=3;break;case s.RGBA:j=4;break;default:throw new Error(`Unknown texel size for format ${bt}.`)}break;case s.UNSIGNED_SHORT_4_4_4_4:case s.UNSIGNED_SHORT_5_5_5_1:case s.UNSIGNED_SHORT_5_6_5:j=1;break;default:throw new Error(`Unknown texel size for type ${Jt}.`)}const tt=rt.width*rt.height*j;for(const at of M.layerUpdates)e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,at,rt.width,rt.height,1,bt,Jt,rt.data.slice(tt*at,tt*(at+1)));M.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,bt,Jt,rt.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Ut,rt.width,rt.height,rt.depth,0,bt,Jt,rt.data);else if(M.isData3DTexture)kt?(ve&&e.texStorage3D(s.TEXTURE_3D,xt,Ut,rt.width,rt.height,rt.depth),N&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,bt,Jt,rt.data)):e.texImage3D(s.TEXTURE_3D,0,Ut,rt.width,rt.height,rt.depth,0,bt,Jt,rt.data);else if(M.isFramebufferTexture){if(ve)if(kt)e.texStorage2D(s.TEXTURE_2D,xt,Ut,rt.width,rt.height);else{let j=rt.width,tt=rt.height;for(let at=0;at<xt;at++)e.texImage2D(s.TEXTURE_2D,at,Ut,j,tt,0,bt,Jt,null),j>>=1,tt>>=1}}else if(Dt.length>0){if(kt&&ve){const j=_e(Dt[0]);e.texStorage2D(s.TEXTURE_2D,xt,Ut,j.width,j.height)}for(let j=0,tt=Dt.length;j<tt;j++)_t=Dt[j],kt?N&&e.texSubImage2D(s.TEXTURE_2D,j,0,0,bt,Jt,_t):e.texImage2D(s.TEXTURE_2D,j,Ut,bt,Jt,_t);M.generateMipmaps=!1}else if(kt){if(ve){const j=_e(rt);e.texStorage2D(s.TEXTURE_2D,xt,Ut,j.width,j.height)}N&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,bt,Jt,rt)}else e.texImage2D(s.TEXTURE_2D,0,Ut,bt,Jt,rt);m(M)&&p(et),Lt.__version=nt.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function F(C,M,W){if(M.image.length!==6)return;const et=q(C,M),it=M.source;e.bindTexture(s.TEXTURE_CUBE_MAP,C.__webglTexture,s.TEXTURE0+W);const nt=n.get(it);if(it.version!==nt.__version||et===!0){e.activeTexture(s.TEXTURE0+W);const Lt=he.getPrimaries(he.workingColorSpace),dt=M.colorSpace===_i?null:he.getPrimaries(M.colorSpace),ft=M.colorSpace===_i||Lt===dt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft);const Yt=M.isCompressedTexture||M.image[0].isCompressedTexture,rt=M.image[0]&&M.image[0].isDataTexture,bt=[];for(let tt=0;tt<6;tt++)!Yt&&!rt?bt[tt]=_(M.image[tt],!0,i.maxCubemapSize):bt[tt]=rt?M.image[tt].image:M.image[tt],bt[tt]=Wt(M,bt[tt]);const Jt=bt[0],Ut=r.convert(M.format,M.colorSpace),_t=r.convert(M.type),Dt=E(M.internalFormat,Ut,_t,M.colorSpace),kt=M.isVideoTexture!==!0,ve=nt.__version===void 0||et===!0,N=it.dataReady;let xt=x(M,Jt);Rt(s.TEXTURE_CUBE_MAP,M);let j;if(Yt){kt&&ve&&e.texStorage2D(s.TEXTURE_CUBE_MAP,xt,Dt,Jt.width,Jt.height);for(let tt=0;tt<6;tt++){j=bt[tt].mipmaps;for(let at=0;at<j.length;at++){const Ot=j[at];M.format!==On?Ut!==null?kt?N&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,at,0,0,Ot.width,Ot.height,Ut,Ot.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,at,Dt,Ot.width,Ot.height,0,Ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):kt?N&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,at,0,0,Ot.width,Ot.height,Ut,_t,Ot.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,at,Dt,Ot.width,Ot.height,0,Ut,_t,Ot.data)}}}else{if(j=M.mipmaps,kt&&ve){j.length>0&&xt++;const tt=_e(bt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,xt,Dt,tt.width,tt.height)}for(let tt=0;tt<6;tt++)if(rt){kt?N&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,bt[tt].width,bt[tt].height,Ut,_t,bt[tt].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,Dt,bt[tt].width,bt[tt].height,0,Ut,_t,bt[tt].data);for(let at=0;at<j.length;at++){const ne=j[at].image[tt].image;kt?N&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,at+1,0,0,ne.width,ne.height,Ut,_t,ne.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,at+1,Dt,ne.width,ne.height,0,Ut,_t,ne.data)}}else{kt?N&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,Ut,_t,bt[tt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,Dt,Ut,_t,bt[tt]);for(let at=0;at<j.length;at++){const Ot=j[at];kt?N&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,at+1,0,0,Ut,_t,Ot.image[tt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,at+1,Dt,Ut,_t,Ot.image[tt])}}}m(M)&&p(s.TEXTURE_CUBE_MAP),nt.__version=it.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function Y(C,M,W,et,it,nt){const Lt=r.convert(W.format,W.colorSpace),dt=r.convert(W.type),ft=E(W.internalFormat,Lt,dt,W.colorSpace);if(!n.get(M).__hasExternalTextures){const rt=Math.max(1,M.width>>nt),bt=Math.max(1,M.height>>nt);it===s.TEXTURE_3D||it===s.TEXTURE_2D_ARRAY?e.texImage3D(it,nt,ft,rt,bt,M.depth,0,Lt,dt,null):e.texImage2D(it,nt,ft,rt,bt,0,Lt,dt,null)}e.bindFramebuffer(s.FRAMEBUFFER,C),te(M)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,et,it,n.get(W).__webglTexture,0,It(M)):(it===s.TEXTURE_2D||it>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,et,it,n.get(W).__webglTexture,nt),e.bindFramebuffer(s.FRAMEBUFFER,null)}function K(C,M,W){if(s.bindRenderbuffer(s.RENDERBUFFER,C),M.depthBuffer){const et=M.depthTexture,it=et&&et.isDepthTexture?et.type:null,nt=v(M.stencilBuffer,it),Lt=M.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,dt=It(M);te(M)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,dt,nt,M.width,M.height):W?s.renderbufferStorageMultisample(s.RENDERBUFFER,dt,nt,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,nt,M.width,M.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Lt,s.RENDERBUFFER,C)}else{const et=M.textures;for(let it=0;it<et.length;it++){const nt=et[it],Lt=r.convert(nt.format,nt.colorSpace),dt=r.convert(nt.type),ft=E(nt.internalFormat,Lt,dt,nt.colorSpace),Yt=It(M);W&&te(M)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Yt,ft,M.width,M.height):te(M)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Yt,ft,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,ft,M.width,M.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function $(C,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,C),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),B(M.depthTexture,0);const et=n.get(M.depthTexture).__webglTexture,it=It(M);if(M.depthTexture.format===Hs)te(M)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,et,0,it):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,et,0);else if(M.depthTexture.format===rr)te(M)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,et,0,it):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,et,0);else throw new Error("Unknown depthTexture format")}function ct(C){const M=n.get(C),W=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!M.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");$(M.__webglFramebuffer,C)}else if(W){M.__webglDepthbuffer=[];for(let et=0;et<6;et++)e.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[et]),M.__webglDepthbuffer[et]=s.createRenderbuffer(),K(M.__webglDepthbuffer[et],C,!1)}else e.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=s.createRenderbuffer(),K(M.__webglDepthbuffer,C,!1);e.bindFramebuffer(s.FRAMEBUFFER,null)}function Tt(C,M,W){const et=n.get(C);M!==void 0&&Y(et.__webglFramebuffer,C,C.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),W!==void 0&&ct(C)}function zt(C){const M=C.texture,W=n.get(C),et=n.get(M);C.addEventListener("dispose",T);const it=C.textures,nt=C.isWebGLCubeRenderTarget===!0,Lt=it.length>1;if(Lt||(et.__webglTexture===void 0&&(et.__webglTexture=s.createTexture()),et.__version=M.version,o.memory.textures++),nt){W.__webglFramebuffer=[];for(let dt=0;dt<6;dt++)if(M.mipmaps&&M.mipmaps.length>0){W.__webglFramebuffer[dt]=[];for(let ft=0;ft<M.mipmaps.length;ft++)W.__webglFramebuffer[dt][ft]=s.createFramebuffer()}else W.__webglFramebuffer[dt]=s.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){W.__webglFramebuffer=[];for(let dt=0;dt<M.mipmaps.length;dt++)W.__webglFramebuffer[dt]=s.createFramebuffer()}else W.__webglFramebuffer=s.createFramebuffer();if(Lt)for(let dt=0,ft=it.length;dt<ft;dt++){const Yt=n.get(it[dt]);Yt.__webglTexture===void 0&&(Yt.__webglTexture=s.createTexture(),o.memory.textures++)}if(C.samples>0&&te(C)===!1){W.__webglMultisampledFramebuffer=s.createFramebuffer(),W.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let dt=0;dt<it.length;dt++){const ft=it[dt];W.__webglColorRenderbuffer[dt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,W.__webglColorRenderbuffer[dt]);const Yt=r.convert(ft.format,ft.colorSpace),rt=r.convert(ft.type),bt=E(ft.internalFormat,Yt,rt,ft.colorSpace,C.isXRRenderTarget===!0),Jt=It(C);s.renderbufferStorageMultisample(s.RENDERBUFFER,Jt,bt,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+dt,s.RENDERBUFFER,W.__webglColorRenderbuffer[dt])}s.bindRenderbuffer(s.RENDERBUFFER,null),C.depthBuffer&&(W.__webglDepthRenderbuffer=s.createRenderbuffer(),K(W.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(nt){e.bindTexture(s.TEXTURE_CUBE_MAP,et.__webglTexture),Rt(s.TEXTURE_CUBE_MAP,M);for(let dt=0;dt<6;dt++)if(M.mipmaps&&M.mipmaps.length>0)for(let ft=0;ft<M.mipmaps.length;ft++)Y(W.__webglFramebuffer[dt][ft],C,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+dt,ft);else Y(W.__webglFramebuffer[dt],C,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0);m(M)&&p(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Lt){for(let dt=0,ft=it.length;dt<ft;dt++){const Yt=it[dt],rt=n.get(Yt);e.bindTexture(s.TEXTURE_2D,rt.__webglTexture),Rt(s.TEXTURE_2D,Yt),Y(W.__webglFramebuffer,C,Yt,s.COLOR_ATTACHMENT0+dt,s.TEXTURE_2D,0),m(Yt)&&p(s.TEXTURE_2D)}e.unbindTexture()}else{let dt=s.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(dt=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(dt,et.__webglTexture),Rt(dt,M),M.mipmaps&&M.mipmaps.length>0)for(let ft=0;ft<M.mipmaps.length;ft++)Y(W.__webglFramebuffer[ft],C,M,s.COLOR_ATTACHMENT0,dt,ft);else Y(W.__webglFramebuffer,C,M,s.COLOR_ATTACHMENT0,dt,0);m(M)&&p(dt),e.unbindTexture()}C.depthBuffer&&ct(C)}function D(C){const M=C.textures;for(let W=0,et=M.length;W<et;W++){const it=M[W];if(m(it)){const nt=C.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,Lt=n.get(it).__webglTexture;e.bindTexture(nt,Lt),p(nt),e.unbindTexture()}}}const Zt=[],Gt=[];function ue(C){if(C.samples>0){if(te(C)===!1){const M=C.textures,W=C.width,et=C.height;let it=s.COLOR_BUFFER_BIT;const nt=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Lt=n.get(C),dt=M.length>1;if(dt)for(let ft=0;ft<M.length;ft++)e.bindFramebuffer(s.FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ft,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,Lt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ft,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Lt.__webglFramebuffer);for(let ft=0;ft<M.length;ft++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(it|=s.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(it|=s.STENCIL_BUFFER_BIT)),dt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Lt.__webglColorRenderbuffer[ft]);const Yt=n.get(M[ft]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Yt,0)}s.blitFramebuffer(0,0,W,et,0,0,W,et,it,s.NEAREST),l===!0&&(Zt.length=0,Gt.length=0,Zt.push(s.COLOR_ATTACHMENT0+ft),C.depthBuffer&&C.resolveDepthBuffer===!1&&(Zt.push(nt),Gt.push(nt),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Gt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Zt))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),dt)for(let ft=0;ft<M.length;ft++){e.bindFramebuffer(s.FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ft,s.RENDERBUFFER,Lt.__webglColorRenderbuffer[ft]);const Yt=n.get(M[ft]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,Lt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ft,s.TEXTURE_2D,Yt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Lt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const M=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[M])}}}function It(C){return Math.min(i.maxSamples,C.samples)}function te(C){const M=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Xt(C){const M=o.render.frame;h.get(C)!==M&&(h.set(C,M),C.update())}function Wt(C,M){const W=C.colorSpace,et=C.format,it=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||W!==Ii&&W!==_i&&(he.getTransfer(W)===Me?(et!==On||it!==Ri)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),M}function _e(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=I,this.setTexture2D=B,this.setTexture2DArray=Q,this.setTexture3D=Z,this.setTextureCube=st,this.rebindTextures=Tt,this.setupRenderTarget=zt,this.updateRenderTargetMipmap=D,this.updateMultisampleRenderTarget=ue,this.setupDepthRenderbuffer=ct,this.setupFrameBufferTexture=Y,this.useMultisampledRTT=te}function jg(s,t){function e(n,i=_i){let r;const o=he.getTransfer(i);if(n===Ri)return s.UNSIGNED_BYTE;if(n===Vh)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Wh)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Nd)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Id)return s.BYTE;if(n===Dd)return s.SHORT;if(n===Oo)return s.UNSIGNED_SHORT;if(n===Gh)return s.INT;if(n===ir)return s.UNSIGNED_INT;if(n===Si)return s.FLOAT;if(n===$o)return s.HALF_FLOAT;if(n===Ud)return s.ALPHA;if(n===Od)return s.RGB;if(n===On)return s.RGBA;if(n===Fd)return s.LUMINANCE;if(n===Bd)return s.LUMINANCE_ALPHA;if(n===Hs)return s.DEPTH_COMPONENT;if(n===rr)return s.DEPTH_STENCIL;if(n===zd)return s.RED;if(n===Xh)return s.RED_INTEGER;if(n===kd)return s.RG;if(n===Zh)return s.RG_INTEGER;if(n===Yh)return s.RGBA_INTEGER;if(n===ra||n===oa||n===aa||n===la)if(o===Me)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ra)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===oa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===aa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===la)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ra)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===oa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===aa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===la)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Xl||n===Zl||n===Yl||n===ql)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Xl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Zl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Yl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ql)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===$l||n===Kl||n===Jl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===$l||n===Kl)return o===Me?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Jl)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===jl||n===Ql||n===tc||n===ec||n===nc||n===ic||n===sc||n===rc||n===oc||n===ac||n===lc||n===cc||n===hc||n===uc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===jl)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ql)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===tc)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ec)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===nc)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ic)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===sc)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===rc)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===oc)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ac)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===lc)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===cc)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===hc)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===uc)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ca||n===dc||n===fc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===ca)return o===Me?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===dc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===fc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Hd||n===pc||n===mc||n===gc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===ca)return r.COMPRESSED_RED_RGTC1_EXT;if(n===pc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===mc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===gc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===sr?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}class Qg extends cn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class ri extends ke{constructor(){super(),this.isGroup=!0,this.type="Group"}}const t_={type:"move"};class Oa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ri,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ri,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ri,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(t_)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new ri;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const e_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,n_=`
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

}`;class i_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new je,r=t.properties.get(i);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Ci({vertexShader:e_,fragmentShader:n_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new wt(new oi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}}class s_ extends lr{constructor(t,e){super();const n=this;let i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null;const _=new i_,m=e.getContextAttributes();let p=null,E=null;const v=[],x=[],P=new vt;let T=null;const b=new cn;b.layers.enable(1),b.viewport=new we;const O=new cn;O.layers.enable(2),O.viewport=new we;const w=[b,O],y=new Qg;y.layers.enable(1),y.layers.enable(2);let I=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(F){let Y=v[F];return Y===void 0&&(Y=new Oa,v[F]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(F){let Y=v[F];return Y===void 0&&(Y=new Oa,v[F]=Y),Y.getGripSpace()},this.getHand=function(F){let Y=v[F];return Y===void 0&&(Y=new Oa,v[F]=Y),Y.getHandSpace()};function k(F){const Y=x.indexOf(F.inputSource);if(Y===-1)return;const K=v[Y];K!==void 0&&(K.update(F.inputSource,F.frame,c||o),K.dispatchEvent({type:F.type,data:F.inputSource}))}function B(){i.removeEventListener("select",k),i.removeEventListener("selectstart",k),i.removeEventListener("selectend",k),i.removeEventListener("squeeze",k),i.removeEventListener("squeezestart",k),i.removeEventListener("squeezeend",k),i.removeEventListener("end",B),i.removeEventListener("inputsourceschange",Q);for(let F=0;F<v.length;F++){const Y=x[F];Y!==null&&(x[F]=null,v[F].disconnect(Y))}I=null,H=null,_.reset(),t.setRenderTarget(p),f=null,d=null,u=null,i=null,E=null,lt.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(F){r=F,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(F){a=F,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(F){c=F},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(F){if(i=F,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",k),i.addEventListener("selectstart",k),i.addEventListener("selectend",k),i.addEventListener("squeeze",k),i.addEventListener("squeezestart",k),i.addEventListener("squeezeend",k),i.addEventListener("end",B),i.addEventListener("inputsourceschange",Q),m.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(P),i.renderState.layers===void 0){const Y={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,e,Y),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),E=new ns(f.framebufferWidth,f.framebufferHeight,{format:On,type:Ri,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let Y=null,K=null,$=null;m.depth&&($=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Y=m.stencil?rr:Hs,K=m.stencil?sr:ir);const ct={colorFormat:e.RGBA8,depthFormat:$,scaleFactor:r};u=new XRWebGLBinding(i,e),d=u.createProjectionLayer(ct),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),E=new ns(d.textureWidth,d.textureHeight,{format:On,type:Ri,depthTexture:new lu(d.textureWidth,d.textureHeight,K,void 0,void 0,void 0,void 0,void 0,void 0,Y),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),lt.setContext(i),lt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function Q(F){for(let Y=0;Y<F.removed.length;Y++){const K=F.removed[Y],$=x.indexOf(K);$>=0&&(x[$]=null,v[$].disconnect(K))}for(let Y=0;Y<F.added.length;Y++){const K=F.added[Y];let $=x.indexOf(K);if($===-1){for(let Tt=0;Tt<v.length;Tt++)if(Tt>=x.length){x.push(K),$=Tt;break}else if(x[Tt]===null){x[Tt]=K,$=Tt;break}if($===-1)break}const ct=v[$];ct&&ct.connect(K)}}const Z=new L,st=new L;function J(F,Y,K){Z.setFromMatrixPosition(Y.matrixWorld),st.setFromMatrixPosition(K.matrixWorld);const $=Z.distanceTo(st),ct=Y.projectionMatrix.elements,Tt=K.projectionMatrix.elements,zt=ct[14]/(ct[10]-1),D=ct[14]/(ct[10]+1),Zt=(ct[9]+1)/ct[5],Gt=(ct[9]-1)/ct[5],ue=(ct[8]-1)/ct[0],It=(Tt[8]+1)/Tt[0],te=zt*ue,Xt=zt*It,Wt=$/(-ue+It),_e=Wt*-ue;Y.matrixWorld.decompose(F.position,F.quaternion,F.scale),F.translateX(_e),F.translateZ(Wt),F.matrixWorld.compose(F.position,F.quaternion,F.scale),F.matrixWorldInverse.copy(F.matrixWorld).invert();const C=zt+Wt,M=D+Wt,W=te-_e,et=Xt+($-_e),it=Zt*D/M*C,nt=Gt*D/M*C;F.projectionMatrix.makePerspective(W,et,it,nt,C,M),F.projectionMatrixInverse.copy(F.projectionMatrix).invert()}function gt(F,Y){Y===null?F.matrixWorld.copy(F.matrix):F.matrixWorld.multiplyMatrices(Y.matrixWorld,F.matrix),F.matrixWorldInverse.copy(F.matrixWorld).invert()}this.updateCamera=function(F){if(i===null)return;_.texture!==null&&(F.near=_.depthNear,F.far=_.depthFar),y.near=O.near=b.near=F.near,y.far=O.far=b.far=F.far,(I!==y.near||H!==y.far)&&(i.updateRenderState({depthNear:y.near,depthFar:y.far}),I=y.near,H=y.far,b.near=I,b.far=H,O.near=I,O.far=H,b.updateProjectionMatrix(),O.updateProjectionMatrix(),F.updateProjectionMatrix());const Y=F.parent,K=y.cameras;gt(y,Y);for(let $=0;$<K.length;$++)gt(K[$],Y);K.length===2?J(y,b,O):y.projectionMatrix.copy(b.projectionMatrix),St(F,y,Y)};function St(F,Y,K){K===null?F.matrix.copy(Y.matrixWorld):(F.matrix.copy(K.matrixWorld),F.matrix.invert(),F.matrix.multiply(Y.matrixWorld)),F.matrix.decompose(F.position,F.quaternion,F.scale),F.updateMatrixWorld(!0),F.projectionMatrix.copy(Y.projectionMatrix),F.projectionMatrixInverse.copy(Y.projectionMatrixInverse),F.isPerspectiveCamera&&(F.fov=tl*2*Math.atan(1/F.projectionMatrix.elements[5]),F.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(F){l=F,d!==null&&(d.fixedFoveation=F),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=F)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(y)};let Rt=null;function q(F,Y){if(h=Y.getViewerPose(c||o),g=Y,h!==null){const K=h.views;f!==null&&(t.setRenderTargetFramebuffer(E,f.framebuffer),t.setRenderTarget(E));let $=!1;K.length!==y.cameras.length&&(y.cameras.length=0,$=!0);for(let Tt=0;Tt<K.length;Tt++){const zt=K[Tt];let D=null;if(f!==null)D=f.getViewport(zt);else{const Gt=u.getViewSubImage(d,zt);D=Gt.viewport,Tt===0&&(t.setRenderTargetTextures(E,Gt.colorTexture,d.ignoreDepthValues?void 0:Gt.depthStencilTexture),t.setRenderTarget(E))}let Zt=w[Tt];Zt===void 0&&(Zt=new cn,Zt.layers.enable(Tt),Zt.viewport=new we,w[Tt]=Zt),Zt.matrix.fromArray(zt.transform.matrix),Zt.matrix.decompose(Zt.position,Zt.quaternion,Zt.scale),Zt.projectionMatrix.fromArray(zt.projectionMatrix),Zt.projectionMatrixInverse.copy(Zt.projectionMatrix).invert(),Zt.viewport.set(D.x,D.y,D.width,D.height),Tt===0&&(y.matrix.copy(Zt.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),$===!0&&y.cameras.push(Zt)}const ct=i.enabledFeatures;if(ct&&ct.includes("depth-sensing")){const Tt=u.getDepthInformation(K[0]);Tt&&Tt.isValid&&Tt.texture&&_.init(t,Tt,i.renderState)}}for(let K=0;K<v.length;K++){const $=x[K],ct=v[K];$!==null&&ct!==void 0&&ct.update($,Y,c||o)}Rt&&Rt(F,Y),Y.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Y}),g=null}const lt=new ou;lt.setAnimationLoop(q),this.setAnimationLoop=function(F){Rt=F},this.dispose=function(){}}}const ki=new Fn,r_=new Se;function o_(s,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,iu(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,E,v,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,E,v):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===nn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===nn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const E=t.get(p),v=E.envMap,x=E.envMapRotation;v&&(m.envMap.value=v,ki.copy(x),ki.x*=-1,ki.y*=-1,ki.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(ki.y*=-1,ki.z*=-1),m.envMapRotation.value.setFromMatrix4(r_.makeRotationFromEuler(ki)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,E,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*E,m.scale.value=v*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,E){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===nn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const E=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function a_(s,t,e,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,v){const x=v.program;n.uniformBlockBinding(E,x)}function c(E,v){let x=i[E.id];x===void 0&&(g(E),x=h(E),i[E.id]=x,E.addEventListener("dispose",m));const P=v.program;n.updateUBOMapping(E,P);const T=t.render.frame;r[E.id]!==T&&(d(E),r[E.id]=T)}function h(E){const v=u();E.__bindingPointIndex=v;const x=s.createBuffer(),P=E.__size,T=E.usage;return s.bindBuffer(s.UNIFORM_BUFFER,x),s.bufferData(s.UNIFORM_BUFFER,P,T),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,v,x),x}function u(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(E){const v=i[E.id],x=E.uniforms,P=E.__cache;s.bindBuffer(s.UNIFORM_BUFFER,v);for(let T=0,b=x.length;T<b;T++){const O=Array.isArray(x[T])?x[T]:[x[T]];for(let w=0,y=O.length;w<y;w++){const I=O[w];if(f(I,T,w,P)===!0){const H=I.__offset,k=Array.isArray(I.value)?I.value:[I.value];let B=0;for(let Q=0;Q<k.length;Q++){const Z=k[Q],st=_(Z);typeof Z=="number"||typeof Z=="boolean"?(I.__data[0]=Z,s.bufferSubData(s.UNIFORM_BUFFER,H+B,I.__data)):Z.isMatrix3?(I.__data[0]=Z.elements[0],I.__data[1]=Z.elements[1],I.__data[2]=Z.elements[2],I.__data[3]=0,I.__data[4]=Z.elements[3],I.__data[5]=Z.elements[4],I.__data[6]=Z.elements[5],I.__data[7]=0,I.__data[8]=Z.elements[6],I.__data[9]=Z.elements[7],I.__data[10]=Z.elements[8],I.__data[11]=0):(Z.toArray(I.__data,B),B+=st.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,H,I.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(E,v,x,P){const T=E.value,b=v+"_"+x;if(P[b]===void 0)return typeof T=="number"||typeof T=="boolean"?P[b]=T:P[b]=T.clone(),!0;{const O=P[b];if(typeof T=="number"||typeof T=="boolean"){if(O!==T)return P[b]=T,!0}else if(O.equals(T)===!1)return O.copy(T),!0}return!1}function g(E){const v=E.uniforms;let x=0;const P=16;for(let b=0,O=v.length;b<O;b++){const w=Array.isArray(v[b])?v[b]:[v[b]];for(let y=0,I=w.length;y<I;y++){const H=w[y],k=Array.isArray(H.value)?H.value:[H.value];for(let B=0,Q=k.length;B<Q;B++){const Z=k[B],st=_(Z),J=x%P;J!==0&&P-J<st.boundary&&(x+=P-J),H.__data=new Float32Array(st.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=x,x+=st.storage}}}const T=x%P;return T>0&&(x+=P-T),E.__size=x,E.__cache={},this}function _(E){const v={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(v.boundary=4,v.storage=4):E.isVector2?(v.boundary=8,v.storage=8):E.isVector3||E.isColor?(v.boundary=16,v.storage=12):E.isVector4?(v.boundary=16,v.storage=16):E.isMatrix3?(v.boundary=48,v.storage=48):E.isMatrix4?(v.boundary=64,v.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),v}function m(E){const v=E.target;v.removeEventListener("dispose",m);const x=o.indexOf(v.__bindingPointIndex);o.splice(x,1),s.deleteBuffer(i[v.id]),delete i[v.id],delete r[v.id]}function p(){for(const E in i)s.deleteBuffer(i[E]);o=[],i={},r={}}return{bind:l,update:c,dispose:p}}class l_{constructor(t={}){const{canvas:e=Qd(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const f=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const p=[],E=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Dn,this.toneMapping=wi,this.toneMappingExposure=1;const v=this;let x=!1,P=0,T=0,b=null,O=-1,w=null;const y=new we,I=new we;let H=null;const k=new Qt(0);let B=0,Q=e.width,Z=e.height,st=1,J=null,gt=null;const St=new we(0,0,Q,Z),Rt=new we(0,0,Q,Z);let q=!1;const lt=new Sl;let F=!1,Y=!1;const K=new Se,$=new L,ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Tt=!1;function zt(){return b===null?st:1}let D=n;function Zt(S,U){return e.getContext(S,U)}try{const S={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${_l}`),e.addEventListener("webglcontextlost",xt,!1),e.addEventListener("webglcontextrestored",j,!1),e.addEventListener("webglcontextcreationerror",tt,!1),D===null){const U="webgl2";if(D=Zt(U,S),D===null)throw Zt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let Gt,ue,It,te,Xt,Wt,_e,C,M,W,et,it,nt,Lt,dt,ft,Yt,rt,bt,Jt,Ut,_t,Dt,kt;function ve(){Gt=new g0(D),Gt.init(),_t=new jg(D,Gt),ue=new h0(D,Gt,t,_t),It=new Kg(D),te=new x0(D),Xt=new Og,Wt=new Jg(D,Gt,It,Xt,ue,_t,te),_e=new d0(v),C=new m0(v),M=new Tf(D),Dt=new l0(D,M),W=new _0(D,M,te,Dt),et=new M0(D,W,M,te),bt=new y0(D,ue,Wt),ft=new u0(Xt),it=new Ug(v,_e,C,Gt,ue,Dt,ft),nt=new o_(v,Xt),Lt=new Bg,dt=new Wg(Gt),rt=new a0(v,_e,C,It,et,d,l),Yt=new $g(v,et,ue),kt=new a_(D,te,ue,It),Jt=new c0(D,Gt,te),Ut=new v0(D,Gt,te),te.programs=it.programs,v.capabilities=ue,v.extensions=Gt,v.properties=Xt,v.renderLists=Lt,v.shadowMap=Yt,v.state=It,v.info=te}ve();const N=new s_(v,D);this.xr=N,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const S=Gt.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=Gt.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return st},this.setPixelRatio=function(S){S!==void 0&&(st=S,this.setSize(Q,Z,!1))},this.getSize=function(S){return S.set(Q,Z)},this.setSize=function(S,U,G=!0){if(N.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Q=S,Z=U,e.width=Math.floor(S*st),e.height=Math.floor(U*st),G===!0&&(e.style.width=S+"px",e.style.height=U+"px"),this.setViewport(0,0,S,U)},this.getDrawingBufferSize=function(S){return S.set(Q*st,Z*st).floor()},this.setDrawingBufferSize=function(S,U,G){Q=S,Z=U,st=G,e.width=Math.floor(S*G),e.height=Math.floor(U*G),this.setViewport(0,0,S,U)},this.getCurrentViewport=function(S){return S.copy(y)},this.getViewport=function(S){return S.copy(St)},this.setViewport=function(S,U,G,V){S.isVector4?St.set(S.x,S.y,S.z,S.w):St.set(S,U,G,V),It.viewport(y.copy(St).multiplyScalar(st).round())},this.getScissor=function(S){return S.copy(Rt)},this.setScissor=function(S,U,G,V){S.isVector4?Rt.set(S.x,S.y,S.z,S.w):Rt.set(S,U,G,V),It.scissor(I.copy(Rt).multiplyScalar(st).round())},this.getScissorTest=function(){return q},this.setScissorTest=function(S){It.setScissorTest(q=S)},this.setOpaqueSort=function(S){J=S},this.setTransparentSort=function(S){gt=S},this.getClearColor=function(S){return S.copy(rt.getClearColor())},this.setClearColor=function(){rt.setClearColor.apply(rt,arguments)},this.getClearAlpha=function(){return rt.getClearAlpha()},this.setClearAlpha=function(){rt.setClearAlpha.apply(rt,arguments)},this.clear=function(S=!0,U=!0,G=!0){let V=0;if(S){let z=!1;if(b!==null){const ht=b.texture.format;z=ht===Yh||ht===Zh||ht===Xh}if(z){const ht=b.texture.type,Mt=ht===Ri||ht===ir||ht===Oo||ht===sr||ht===Vh||ht===Wh,At=rt.getClearColor(),Pt=rt.getClearAlpha(),Ht=At.r,Vt=At.g,Ft=At.b;Mt?(f[0]=Ht,f[1]=Vt,f[2]=Ft,f[3]=Pt,D.clearBufferuiv(D.COLOR,0,f)):(g[0]=Ht,g[1]=Vt,g[2]=Ft,g[3]=Pt,D.clearBufferiv(D.COLOR,0,g))}else V|=D.COLOR_BUFFER_BIT}U&&(V|=D.DEPTH_BUFFER_BIT),G&&(V|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",xt,!1),e.removeEventListener("webglcontextrestored",j,!1),e.removeEventListener("webglcontextcreationerror",tt,!1),Lt.dispose(),dt.dispose(),Xt.dispose(),_e.dispose(),C.dispose(),et.dispose(),Dt.dispose(),kt.dispose(),it.dispose(),N.dispose(),N.removeEventListener("sessionstart",sn),N.removeEventListener("sessionend",rn),Cn.stop()};function xt(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function j(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;const S=te.autoReset,U=Yt.enabled,G=Yt.autoUpdate,V=Yt.needsUpdate,z=Yt.type;ve(),te.autoReset=S,Yt.enabled=U,Yt.autoUpdate=G,Yt.needsUpdate=V,Yt.type=z}function tt(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function at(S){const U=S.target;U.removeEventListener("dispose",at),Ot(U)}function Ot(S){ne(S),Xt.remove(S)}function ne(S){const U=Xt.get(S).programs;U!==void 0&&(U.forEach(function(G){it.releaseProgram(G)}),S.isShaderMaterial&&it.releaseShaderCache(S))}this.renderBufferDirect=function(S,U,G,V,z,ht){U===null&&(U=ct);const Mt=z.isMesh&&z.matrixWorld.determinant()<0,At=qe(S,U,G,V,z);It.setMaterial(V,Mt);let Pt=G.index,Ht=1;if(V.wireframe===!0){if(Pt=W.getWireframeAttribute(G),Pt===void 0)return;Ht=2}const Vt=G.drawRange,Ft=G.attributes.position;let re=Vt.start*Ht,Te=(Vt.start+Vt.count)*Ht;ht!==null&&(re=Math.max(re,ht.start*Ht),Te=Math.min(Te,(ht.start+ht.count)*Ht)),Pt!==null?(re=Math.max(re,0),Te=Math.min(Te,Pt.count)):Ft!=null&&(re=Math.max(re,0),Te=Math.min(Te,Ft.count));const Ae=Te-re;if(Ae<0||Ae===1/0)return;Dt.setup(z,V,At,G,Pt);let on,le=Jt;if(Pt!==null&&(on=M.get(Pt),le=Ut,le.setIndex(on)),z.isMesh)V.wireframe===!0?(It.setLineWidth(V.wireframeLinewidth*zt()),le.setMode(D.LINES)):le.setMode(D.TRIANGLES);else if(z.isLine){let Nt=V.linewidth;Nt===void 0&&(Nt=1),It.setLineWidth(Nt*zt()),z.isLineSegments?le.setMode(D.LINES):z.isLineLoop?le.setMode(D.LINE_LOOP):le.setMode(D.LINE_STRIP)}else z.isPoints?le.setMode(D.POINTS):z.isSprite&&le.setMode(D.TRIANGLES);if(z.isBatchedMesh)z._multiDrawInstances!==null?le.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances):le.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else if(z.isInstancedMesh)le.renderInstances(re,Ae,z.count);else if(G.isInstancedBufferGeometry){const Nt=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,$e=Math.min(G.instanceCount,Nt);le.renderInstances(re,Ae,$e)}else le.render(re,Ae)};function ae(S,U,G){S.transparent===!0&&S.side===hn&&S.forceSinglePass===!1?(S.side=nn,S.needsUpdate=!0,qt(S,U,G),S.side=Ai,S.needsUpdate=!0,qt(S,U,G),S.side=hn):qt(S,U,G)}this.compile=function(S,U,G=null){G===null&&(G=S),m=dt.get(G),m.init(U),E.push(m),G.traverseVisible(function(z){z.isLight&&z.layers.test(U.layers)&&(m.pushLight(z),z.castShadow&&m.pushShadow(z))}),S!==G&&S.traverseVisible(function(z){z.isLight&&z.layers.test(U.layers)&&(m.pushLight(z),z.castShadow&&m.pushShadow(z))}),m.setupLights();const V=new Set;return S.traverse(function(z){const ht=z.material;if(ht)if(Array.isArray(ht))for(let Mt=0;Mt<ht.length;Mt++){const At=ht[Mt];ae(At,G,z),V.add(At)}else ae(ht,G,z),V.add(ht)}),E.pop(),m=null,V},this.compileAsync=function(S,U,G=null){const V=this.compile(S,U,G);return new Promise(z=>{function ht(){if(V.forEach(function(Mt){Xt.get(Mt).currentProgram.isReady()&&V.delete(Mt)}),V.size===0){z(S);return}setTimeout(ht,10)}Gt.get("KHR_parallel_shader_compile")!==null?ht():setTimeout(ht,10)})};let Pe=null;function ie(S){Pe&&Pe(S)}function sn(){Cn.stop()}function rn(){Cn.start()}const Cn=new ou;Cn.setAnimationLoop(ie),typeof self<"u"&&Cn.setContext(self),this.setAnimationLoop=function(S){Pe=S,N.setAnimationLoop(S),S===null?Cn.stop():Cn.start()},N.addEventListener("sessionstart",sn),N.addEventListener("sessionend",rn),this.render=function(S,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),N.enabled===!0&&N.isPresenting===!0&&(N.cameraAutoUpdate===!0&&N.updateCamera(U),U=N.getCamera()),S.isScene===!0&&S.onBeforeRender(v,S,U,b),m=dt.get(S,E.length),m.init(U),E.push(m),K.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),lt.setFromProjectionMatrix(K),Y=this.localClippingEnabled,F=ft.init(this.clippingPlanes,Y),_=Lt.get(S,p.length),_.init(),p.push(_),N.enabled===!0&&N.isPresenting===!0){const ht=v.xr.getDepthSensingMesh();ht!==null&&ss(ht,U,-1/0,v.sortObjects)}ss(S,U,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(J,gt),Tt=N.enabled===!1||N.isPresenting===!1||N.hasDepthSensing()===!1,Tt&&rt.addToRenderList(_,S),this.info.render.frame++,F===!0&&ft.beginShadows();const G=m.state.shadowsArray;Yt.render(G,S,U),F===!0&&ft.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=_.opaque,z=_.transmissive;if(m.setupLights(),U.isArrayCamera){const ht=U.cameras;if(z.length>0)for(let Mt=0,At=ht.length;Mt<At;Mt++){const Pt=ht[Mt];X(V,z,S,Pt)}Tt&&rt.render(S);for(let Mt=0,At=ht.length;Mt<At;Mt++){const Pt=ht[Mt];dr(_,S,Pt,Pt.viewport)}}else z.length>0&&X(V,z,S,U),Tt&&rt.render(S),dr(_,S,U);b!==null&&(Wt.updateMultisampleRenderTarget(b),Wt.updateRenderTargetMipmap(b)),S.isScene===!0&&S.onAfterRender(v,S,U),Dt.resetDefaultState(),O=-1,w=null,E.pop(),E.length>0?(m=E[E.length-1],F===!0&&ft.setGlobalState(v.clippingPlanes,m.state.camera)):m=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function ss(S,U,G,V){if(S.visible===!1)return;if(S.layers.test(U.layers)){if(S.isGroup)G=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(U);else if(S.isLight)m.pushLight(S),S.castShadow&&m.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||lt.intersectsSprite(S)){V&&$.setFromMatrixPosition(S.matrixWorld).applyMatrix4(K);const Mt=et.update(S),At=S.material;At.visible&&_.push(S,Mt,At,G,$.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||lt.intersectsObject(S))){const Mt=et.update(S),At=S.material;if(V&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),$.copy(S.boundingSphere.center)):(Mt.boundingSphere===null&&Mt.computeBoundingSphere(),$.copy(Mt.boundingSphere.center)),$.applyMatrix4(S.matrixWorld).applyMatrix4(K)),Array.isArray(At)){const Pt=Mt.groups;for(let Ht=0,Vt=Pt.length;Ht<Vt;Ht++){const Ft=Pt[Ht],re=At[Ft.materialIndex];re&&re.visible&&_.push(S,Mt,re,G,$.z,Ft)}}else At.visible&&_.push(S,Mt,At,G,$.z,null)}}const ht=S.children;for(let Mt=0,At=ht.length;Mt<At;Mt++)ss(ht[Mt],U,G,V)}function dr(S,U,G,V){const z=S.opaque,ht=S.transmissive,Mt=S.transparent;m.setupLightsView(G),F===!0&&ft.setGlobalState(v.clippingPlanes,G),V&&It.viewport(y.copy(V)),z.length>0&&mt(z,U,G),ht.length>0&&mt(ht,U,G),Mt.length>0&&mt(Mt,U,G),It.buffers.depth.setTest(!0),It.buffers.depth.setMask(!0),It.buffers.color.setMask(!0),It.setPolygonOffset(!1)}function X(S,U,G,V){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[V.id]===void 0&&(m.state.transmissionRenderTarget[V.id]=new ns(1,1,{generateMipmaps:!0,type:Gt.has("EXT_color_buffer_half_float")||Gt.has("EXT_color_buffer_float")?$o:Ri,minFilter:Xi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:he.workingColorSpace}));const ht=m.state.transmissionRenderTarget[V.id],Mt=V.viewport||y;ht.setSize(Mt.z,Mt.w);const At=v.getRenderTarget();v.setRenderTarget(ht),v.getClearColor(k),B=v.getClearAlpha(),B<1&&v.setClearColor(16777215,.5),Tt?rt.render(G):v.clear();const Pt=v.toneMapping;v.toneMapping=wi;const Ht=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),m.setupLightsView(V),F===!0&&ft.setGlobalState(v.clippingPlanes,V),mt(S,G,V),Wt.updateMultisampleRenderTarget(ht),Wt.updateRenderTargetMipmap(ht),Gt.has("WEBGL_multisampled_render_to_texture")===!1){let Vt=!1;for(let Ft=0,re=U.length;Ft<re;Ft++){const Te=U[Ft],Ae=Te.object,on=Te.geometry,le=Te.material,Nt=Te.group;if(le.side===hn&&Ae.layers.test(V.layers)){const $e=le.side;le.side=nn,le.needsUpdate=!0,Et(Ae,G,V,on,le,Nt),le.side=$e,le.needsUpdate=!0,Vt=!0}}Vt===!0&&(Wt.updateMultisampleRenderTarget(ht),Wt.updateRenderTargetMipmap(ht))}v.setRenderTarget(At),v.setClearColor(k,B),Ht!==void 0&&(V.viewport=Ht),v.toneMapping=Pt}function mt(S,U,G){const V=U.isScene===!0?U.overrideMaterial:null;for(let z=0,ht=S.length;z<ht;z++){const Mt=S[z],At=Mt.object,Pt=Mt.geometry,Ht=V===null?Mt.material:V,Vt=Mt.group;At.layers.test(G.layers)&&Et(At,U,G,Pt,Ht,Vt)}}function Et(S,U,G,V,z,ht){S.onBeforeRender(v,U,G,V,z,ht),S.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),z.onBeforeRender(v,U,G,V,S,ht),z.transparent===!0&&z.side===hn&&z.forceSinglePass===!1?(z.side=nn,z.needsUpdate=!0,v.renderBufferDirect(G,U,V,z,S,ht),z.side=Ai,z.needsUpdate=!0,v.renderBufferDirect(G,U,V,z,S,ht),z.side=hn):v.renderBufferDirect(G,U,V,z,S,ht),S.onAfterRender(v,U,G,V,z,ht)}function qt(S,U,G){U.isScene!==!0&&(U=ct);const V=Xt.get(S),z=m.state.lights,ht=m.state.shadowsArray,Mt=z.state.version,At=it.getParameters(S,z.state,ht,U,G),Pt=it.getProgramCacheKey(At);let Ht=V.programs;V.environment=S.isMeshStandardMaterial?U.environment:null,V.fog=U.fog,V.envMap=(S.isMeshStandardMaterial?C:_e).get(S.envMap||V.environment),V.envMapRotation=V.environment!==null&&S.envMap===null?U.environmentRotation:S.envMapRotation,Ht===void 0&&(S.addEventListener("dispose",at),Ht=new Map,V.programs=Ht);let Vt=Ht.get(Pt);if(Vt!==void 0){if(V.currentProgram===Vt&&V.lightsStateVersion===Mt)return He(S,At),Vt}else At.uniforms=it.getUniforms(S),S.onBuild(G,At,v),S.onBeforeCompile(At,v),Vt=it.acquireProgram(At,Pt),Ht.set(Pt,Vt),V.uniforms=At.uniforms;const Ft=V.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Ft.clippingPlanes=ft.uniform),He(S,At),V.needsLights=Di(S),V.lightsStateVersion=Mt,V.needsLights&&(Ft.ambientLightColor.value=z.state.ambient,Ft.lightProbe.value=z.state.probe,Ft.directionalLights.value=z.state.directional,Ft.directionalLightShadows.value=z.state.directionalShadow,Ft.spotLights.value=z.state.spot,Ft.spotLightShadows.value=z.state.spotShadow,Ft.rectAreaLights.value=z.state.rectArea,Ft.ltc_1.value=z.state.rectAreaLTC1,Ft.ltc_2.value=z.state.rectAreaLTC2,Ft.pointLights.value=z.state.point,Ft.pointLightShadows.value=z.state.pointShadow,Ft.hemisphereLights.value=z.state.hemi,Ft.directionalShadowMap.value=z.state.directionalShadowMap,Ft.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Ft.spotShadowMap.value=z.state.spotShadowMap,Ft.spotLightMatrix.value=z.state.spotLightMatrix,Ft.spotLightMap.value=z.state.spotLightMap,Ft.pointShadowMap.value=z.state.pointShadowMap,Ft.pointShadowMatrix.value=z.state.pointShadowMatrix),V.currentProgram=Vt,V.uniformsList=null,Vt}function xe(S){if(S.uniformsList===null){const U=S.currentProgram.getUniforms();S.uniformsList=No.seqWithValue(U.seq,S.uniforms)}return S.uniformsList}function He(S,U){const G=Xt.get(S);G.outputColorSpace=U.outputColorSpace,G.batching=U.batching,G.batchingColor=U.batchingColor,G.instancing=U.instancing,G.instancingColor=U.instancingColor,G.instancingMorph=U.instancingMorph,G.skinning=U.skinning,G.morphTargets=U.morphTargets,G.morphNormals=U.morphNormals,G.morphColors=U.morphColors,G.morphTargetsCount=U.morphTargetsCount,G.numClippingPlanes=U.numClippingPlanes,G.numIntersection=U.numClipIntersection,G.vertexAlphas=U.vertexAlphas,G.vertexTangents=U.vertexTangents,G.toneMapping=U.toneMapping}function qe(S,U,G,V,z){U.isScene!==!0&&(U=ct),Wt.resetTextureUnits();const ht=U.fog,Mt=V.isMeshStandardMaterial?U.environment:null,At=b===null?v.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:Ii,Pt=(V.isMeshStandardMaterial?C:_e).get(V.envMap||Mt),Ht=V.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Vt=!!G.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Ft=!!G.morphAttributes.position,re=!!G.morphAttributes.normal,Te=!!G.morphAttributes.color;let Ae=wi;V.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(Ae=v.toneMapping);const on=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,le=on!==void 0?on.length:0,Nt=Xt.get(V),$e=m.state.lights;if(F===!0&&(Y===!0||S!==w)){const dn=S===w&&V.id===O;ft.setState(V,S,dn)}let de=!1;V.version===Nt.__version?(Nt.needsLights&&Nt.lightsStateVersion!==$e.state.version||Nt.outputColorSpace!==At||z.isBatchedMesh&&Nt.batching===!1||!z.isBatchedMesh&&Nt.batching===!0||z.isBatchedMesh&&Nt.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Nt.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Nt.instancing===!1||!z.isInstancedMesh&&Nt.instancing===!0||z.isSkinnedMesh&&Nt.skinning===!1||!z.isSkinnedMesh&&Nt.skinning===!0||z.isInstancedMesh&&Nt.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Nt.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Nt.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Nt.instancingMorph===!1&&z.morphTexture!==null||Nt.envMap!==Pt||V.fog===!0&&Nt.fog!==ht||Nt.numClippingPlanes!==void 0&&(Nt.numClippingPlanes!==ft.numPlanes||Nt.numIntersection!==ft.numIntersection)||Nt.vertexAlphas!==Ht||Nt.vertexTangents!==Vt||Nt.morphTargets!==Ft||Nt.morphNormals!==re||Nt.morphColors!==Te||Nt.toneMapping!==Ae||Nt.morphTargetsCount!==le)&&(de=!0):(de=!0,Nt.__version=V.version);let kn=Nt.currentProgram;de===!0&&(kn=qt(V,U,z));let no=!1,Ni=!1,ta=!1;const Fe=kn.getUniforms(),ai=Nt.uniforms;if(It.useProgram(kn.program)&&(no=!0,Ni=!0,ta=!0),V.id!==O&&(O=V.id,Ni=!0),no||w!==S){Fe.setValue(D,"projectionMatrix",S.projectionMatrix),Fe.setValue(D,"viewMatrix",S.matrixWorldInverse);const dn=Fe.map.cameraPosition;dn!==void 0&&dn.setValue(D,$.setFromMatrixPosition(S.matrixWorld)),ue.logarithmicDepthBuffer&&Fe.setValue(D,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&Fe.setValue(D,"isOrthographic",S.isOrthographicCamera===!0),w!==S&&(w=S,Ni=!0,ta=!0)}if(z.isSkinnedMesh){Fe.setOptional(D,z,"bindMatrix"),Fe.setOptional(D,z,"bindMatrixInverse");const dn=z.skeleton;dn&&(dn.boneTexture===null&&dn.computeBoneTexture(),Fe.setValue(D,"boneTexture",dn.boneTexture,Wt))}z.isBatchedMesh&&(Fe.setOptional(D,z,"batchingTexture"),Fe.setValue(D,"batchingTexture",z._matricesTexture,Wt),Fe.setOptional(D,z,"batchingColorTexture"),z._colorsTexture!==null&&Fe.setValue(D,"batchingColorTexture",z._colorsTexture,Wt));const ea=G.morphAttributes;if((ea.position!==void 0||ea.normal!==void 0||ea.color!==void 0)&&bt.update(z,G,kn),(Ni||Nt.receiveShadow!==z.receiveShadow)&&(Nt.receiveShadow=z.receiveShadow,Fe.setValue(D,"receiveShadow",z.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(ai.envMap.value=Pt,ai.flipEnvMap.value=Pt.isCubeTexture&&Pt.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&U.environment!==null&&(ai.envMapIntensity.value=U.environmentIntensity),Ni&&(Fe.setValue(D,"toneMappingExposure",v.toneMappingExposure),Nt.needsLights&&Pn(ai,ta),ht&&V.fog===!0&&nt.refreshFogUniforms(ai,ht),nt.refreshMaterialUniforms(ai,V,st,Z,m.state.transmissionRenderTarget[S.id]),No.upload(D,xe(Nt),ai,Wt)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(No.upload(D,xe(Nt),ai,Wt),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&Fe.setValue(D,"center",z.center),Fe.setValue(D,"modelViewMatrix",z.modelViewMatrix),Fe.setValue(D,"normalMatrix",z.normalMatrix),Fe.setValue(D,"modelMatrix",z.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const dn=V.uniformsGroups;for(let na=0,qu=dn.length;na<qu;na++){const Bl=dn[na];kt.update(Bl,kn),kt.bind(Bl,kn)}}return kn}function Pn(S,U){S.ambientLightColor.needsUpdate=U,S.lightProbe.needsUpdate=U,S.directionalLights.needsUpdate=U,S.directionalLightShadows.needsUpdate=U,S.pointLights.needsUpdate=U,S.pointLightShadows.needsUpdate=U,S.spotLights.needsUpdate=U,S.spotLightShadows.needsUpdate=U,S.rectAreaLights.needsUpdate=U,S.hemisphereLights.needsUpdate=U}function Di(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(S,U,G){Xt.get(S.texture).__webglTexture=U,Xt.get(S.depthTexture).__webglTexture=G;const V=Xt.get(S);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=G===void 0,V.__autoAllocateDepthBuffer||Gt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,U){const G=Xt.get(S);G.__webglFramebuffer=U,G.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(S,U=0,G=0){b=S,P=U,T=G;let V=!0,z=null,ht=!1,Mt=!1;if(S){const Pt=Xt.get(S);Pt.__useDefaultFramebuffer!==void 0?(It.bindFramebuffer(D.FRAMEBUFFER,null),V=!1):Pt.__webglFramebuffer===void 0?Wt.setupRenderTarget(S):Pt.__hasExternalTextures&&Wt.rebindTextures(S,Xt.get(S.texture).__webglTexture,Xt.get(S.depthTexture).__webglTexture);const Ht=S.texture;(Ht.isData3DTexture||Ht.isDataArrayTexture||Ht.isCompressedArrayTexture)&&(Mt=!0);const Vt=Xt.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Vt[U])?z=Vt[U][G]:z=Vt[U],ht=!0):S.samples>0&&Wt.useMultisampledRTT(S)===!1?z=Xt.get(S).__webglMultisampledFramebuffer:Array.isArray(Vt)?z=Vt[G]:z=Vt,y.copy(S.viewport),I.copy(S.scissor),H=S.scissorTest}else y.copy(St).multiplyScalar(st).floor(),I.copy(Rt).multiplyScalar(st).floor(),H=q;if(It.bindFramebuffer(D.FRAMEBUFFER,z)&&V&&It.drawBuffers(S,z),It.viewport(y),It.scissor(I),It.setScissorTest(H),ht){const Pt=Xt.get(S.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+U,Pt.__webglTexture,G)}else if(Mt){const Pt=Xt.get(S.texture),Ht=U||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,Pt.__webglTexture,G||0,Ht)}O=-1},this.readRenderTargetPixels=function(S,U,G,V,z,ht,Mt){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let At=Xt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Mt!==void 0&&(At=At[Mt]),At){It.bindFramebuffer(D.FRAMEBUFFER,At);try{const Pt=S.texture,Ht=Pt.format,Vt=Pt.type;if(!ue.textureFormatReadable(Ht)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ue.textureTypeReadable(Vt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=S.width-V&&G>=0&&G<=S.height-z&&D.readPixels(U,G,V,z,_t.convert(Ht),_t.convert(Vt),ht)}finally{const Pt=b!==null?Xt.get(b).__webglFramebuffer:null;It.bindFramebuffer(D.FRAMEBUFFER,Pt)}}},this.readRenderTargetPixelsAsync=async function(S,U,G,V,z,ht,Mt){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let At=Xt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Mt!==void 0&&(At=At[Mt]),At){It.bindFramebuffer(D.FRAMEBUFFER,At);try{const Pt=S.texture,Ht=Pt.format,Vt=Pt.type;if(!ue.textureFormatReadable(Ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ue.textureTypeReadable(Vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=S.width-V&&G>=0&&G<=S.height-z){const Ft=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Ft),D.bufferData(D.PIXEL_PACK_BUFFER,ht.byteLength,D.STREAM_READ),D.readPixels(U,G,V,z,_t.convert(Ht),_t.convert(Vt),0),D.flush();const re=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);await tf(D,re,4);try{D.bindBuffer(D.PIXEL_PACK_BUFFER,Ft),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ht)}finally{D.deleteBuffer(Ft),D.deleteSync(re)}return ht}}finally{const Pt=b!==null?Xt.get(b).__webglFramebuffer:null;It.bindFramebuffer(D.FRAMEBUFFER,Pt)}}},this.copyFramebufferToTexture=function(S,U=null,G=0){S.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,S=arguments[1]);const V=Math.pow(2,-G),z=Math.floor(S.image.width*V),ht=Math.floor(S.image.height*V),Mt=U!==null?U.x:0,At=U!==null?U.y:0;Wt.setTexture2D(S,0),D.copyTexSubImage2D(D.TEXTURE_2D,G,0,0,Mt,At,z,ht),It.unbindTexture()},this.copyTextureToTexture=function(S,U,G=null,V=null,z=0){S.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,S=arguments[1],U=arguments[2],z=arguments[3]||0,G=null);let ht,Mt,At,Pt,Ht,Vt;G!==null?(ht=G.max.x-G.min.x,Mt=G.max.y-G.min.y,At=G.min.x,Pt=G.min.y):(ht=S.image.width,Mt=S.image.height,At=0,Pt=0),V!==null?(Ht=V.x,Vt=V.y):(Ht=0,Vt=0);const Ft=_t.convert(U.format),re=_t.convert(U.type);Wt.setTexture2D(U,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,U.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,U.unpackAlignment);const Te=D.getParameter(D.UNPACK_ROW_LENGTH),Ae=D.getParameter(D.UNPACK_IMAGE_HEIGHT),on=D.getParameter(D.UNPACK_SKIP_PIXELS),le=D.getParameter(D.UNPACK_SKIP_ROWS),Nt=D.getParameter(D.UNPACK_SKIP_IMAGES),$e=S.isCompressedTexture?S.mipmaps[z]:S.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,$e.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,$e.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,At),D.pixelStorei(D.UNPACK_SKIP_ROWS,Pt),S.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,z,Ht,Vt,ht,Mt,Ft,re,$e.data):S.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,z,Ht,Vt,$e.width,$e.height,Ft,$e.data):D.texSubImage2D(D.TEXTURE_2D,z,Ht,Vt,Ft,re,$e),D.pixelStorei(D.UNPACK_ROW_LENGTH,Te),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Ae),D.pixelStorei(D.UNPACK_SKIP_PIXELS,on),D.pixelStorei(D.UNPACK_SKIP_ROWS,le),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Nt),z===0&&U.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),It.unbindTexture()},this.copyTextureToTexture3D=function(S,U,G=null,V=null,z=0){S.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,V=arguments[1]||null,S=arguments[2],U=arguments[3],z=arguments[4]||0);let ht,Mt,At,Pt,Ht,Vt,Ft,re,Te;const Ae=S.isCompressedTexture?S.mipmaps[z]:S.image;G!==null?(ht=G.max.x-G.min.x,Mt=G.max.y-G.min.y,At=G.max.z-G.min.z,Pt=G.min.x,Ht=G.min.y,Vt=G.min.z):(ht=Ae.width,Mt=Ae.height,At=Ae.depth,Pt=0,Ht=0,Vt=0),V!==null?(Ft=V.x,re=V.y,Te=V.z):(Ft=0,re=0,Te=0);const on=_t.convert(U.format),le=_t.convert(U.type);let Nt;if(U.isData3DTexture)Wt.setTexture3D(U,0),Nt=D.TEXTURE_3D;else if(U.isDataArrayTexture||U.isCompressedArrayTexture)Wt.setTexture2DArray(U,0),Nt=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,U.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,U.unpackAlignment);const $e=D.getParameter(D.UNPACK_ROW_LENGTH),de=D.getParameter(D.UNPACK_IMAGE_HEIGHT),kn=D.getParameter(D.UNPACK_SKIP_PIXELS),no=D.getParameter(D.UNPACK_SKIP_ROWS),Ni=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,Ae.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Ae.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Pt),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ht),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Vt),S.isDataTexture||S.isData3DTexture?D.texSubImage3D(Nt,z,Ft,re,Te,ht,Mt,At,on,le,Ae.data):U.isCompressedArrayTexture?D.compressedTexSubImage3D(Nt,z,Ft,re,Te,ht,Mt,At,on,Ae.data):D.texSubImage3D(Nt,z,Ft,re,Te,ht,Mt,At,on,le,Ae),D.pixelStorei(D.UNPACK_ROW_LENGTH,$e),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,de),D.pixelStorei(D.UNPACK_SKIP_PIXELS,kn),D.pixelStorei(D.UNPACK_SKIP_ROWS,no),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ni),z===0&&U.generateMipmaps&&D.generateMipmap(Nt),It.unbindTexture()},this.initRenderTarget=function(S){Xt.get(S).__webglFramebuffer===void 0&&Wt.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?Wt.setTextureCube(S,0):S.isData3DTexture?Wt.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?Wt.setTexture2DArray(S,0):Wt.setTexture2D(S,0),It.unbindTexture()},this.resetState=function(){P=0,T=0,b=null,It.reset(),Dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===vl?"display-p3":"srgb",e.unpackColorSpace=he.workingColorSpace===Ko?"display-p3":"srgb"}}class wl{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Qt(t),this.density=e}clone(){return new wl(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class c_ extends ke{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Fn,this.environmentIntensity=1,this.environmentRotation=new Fn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class h_{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Qa,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=bi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return xl("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=bi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=bi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ke=new L;class Go{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ke.fromBufferAttribute(this,e),Ke.applyMatrix4(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ke.fromBufferAttribute(this,e),Ke.applyNormalMatrix(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ke.fromBufferAttribute(this,e),Ke.transformDirection(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Un(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=pe(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=pe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=pe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=pe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=pe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Un(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Un(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Un(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Un(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=pe(e,this.array),n=pe(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=pe(e,this.array),n=pe(n,this.array),i=pe(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=pe(e,this.array),n=pe(n,this.array),i=pe(i,this.array),r=pe(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new An(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Go(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class pu extends cr{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Qt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Ss;const _r=new L,Es=new L,ws=new L,bs=new vt,vr=new vt,mu=new Se,To=new L,xr=new L,Ao=new L,oh=new vt,Fa=new vt,ah=new vt;class u_ extends ke{constructor(t=new pu){if(super(),this.isSprite=!0,this.type="Sprite",Ss===void 0){Ss=new un;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new h_(e,5);Ss.setIndex([0,1,2,0,2,3]),Ss.setAttribute("position",new Go(n,3,0,!1)),Ss.setAttribute("uv",new Go(n,2,3,!1))}this.geometry=Ss,this.material=t,this.center=new vt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Es.setFromMatrixScale(this.matrixWorld),mu.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ws.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Es.multiplyScalar(-ws.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const o=this.center;Ro(To.set(-.5,-.5,0),ws,o,Es,i,r),Ro(xr.set(.5,-.5,0),ws,o,Es,i,r),Ro(Ao.set(.5,.5,0),ws,o,Es,i,r),oh.set(0,0),Fa.set(1,0),ah.set(1,1);let a=t.ray.intersectTriangle(To,xr,Ao,!1,_r);if(a===null&&(Ro(xr.set(-.5,.5,0),ws,o,Es,i,r),Fa.set(0,1),a=t.ray.intersectTriangle(To,Ao,xr,!1,_r),a===null))return;const l=t.ray.origin.distanceTo(_r);l<t.near||l>t.far||e.push({distance:l,point:_r.clone(),uv:Tn.getInterpolation(_r,To,xr,Ao,oh,Fa,ah,new vt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Ro(s,t,e,n,i,r){bs.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?(vr.x=r*bs.x-i*bs.y,vr.y=i*bs.x+r*bs.y):vr.copy(bs),s.copy(t),s.x+=vr.x,s.y+=vr.y,s.applyMatrix4(mu)}class jo extends je{constructor(t,e,n,i,r,o,a,l,c){super(t,e,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class zn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);const h=n[i],d=n[i+1]-h,f=(o-h)/d;return(i+f)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),a=this.getPoint(r),l=e||(o.isVector2?new vt:new L);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new L,i=[],r=[],o=[],a=new L,l=new Se;for(let f=0;f<=t;f++){const g=f/t;i[f]=this.getTangentAt(g,new L)}r[0]=new L,o[0]=new L;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(We(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(i[f],r[f])}if(e===!0){let f=Math.acos(We(r[0].dot(r[t]),-1,1));f/=t,i[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(i[g],f*g)),o[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class bl extends zn{constructor(t=0,e=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new vt){const n=e,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class d_ extends bl{constructor(t,e,n,i,r,o){super(t,e,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Tl(){let s=0,t=0,e=0,n=0;function i(r,o,a,l){s=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,f*=h,i(o,a,d,f)},calc:function(r){const o=r*r,a=o*r;return s+t*r+e*o+n*a}}}const Co=new L,Ba=new Tl,za=new Tl,ka=new Tl;class f_ extends zn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new L){const n=e,i=this.points,r=i.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%r]:(Co.subVectors(i[0],i[1]).add(i[0]),c=Co);const u=i[a%r],d=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(Co.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Co),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Ba.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,_,m),za.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,_,m),ka.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(Ba.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),za.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),ka.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Ba.calc(l),za.calc(l),ka.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new L().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function lh(s,t,e,n,i){const r=(n-t)*.5,o=(i-e)*.5,a=s*s,l=s*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*s+e}function p_(s,t){const e=1-s;return e*e*t}function m_(s,t){return 2*(1-s)*s*t}function g_(s,t){return s*s*t}function Er(s,t,e,n){return p_(s,t)+m_(s,e)+g_(s,n)}function __(s,t){const e=1-s;return e*e*e*t}function v_(s,t){const e=1-s;return 3*e*e*s*t}function x_(s,t){return 3*(1-s)*s*s*t}function y_(s,t){return s*s*s*t}function wr(s,t,e,n,i){return __(s,t)+v_(s,e)+x_(s,n)+y_(s,i)}class gu extends zn{constructor(t=new vt,e=new vt,n=new vt,i=new vt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new vt){const n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(wr(t,i.x,r.x,o.x,a.x),wr(t,i.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class M_ extends zn{constructor(t=new L,e=new L,n=new L,i=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new L){const n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(wr(t,i.x,r.x,o.x,a.x),wr(t,i.y,r.y,o.y,a.y),wr(t,i.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class _u extends zn{constructor(t=new vt,e=new vt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new vt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new vt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class S_ extends zn{constructor(t=new L,e=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new L){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new L){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class vu extends zn{constructor(t=new vt,e=new vt,n=new vt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new vt){const n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(Er(t,i.x,r.x,o.x),Er(t,i.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class E_ extends zn{constructor(t=new L,e=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new L){const n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(Er(t,i.x,r.x,o.x),Er(t,i.y,r.y,o.y),Er(t,i.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class xu extends zn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new vt){const n=e,i=this.points,r=(i.length-1)*t,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(lh(a,l.x,c.x,h.x,u.x),lh(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new vt().fromArray(i))}return this}}var ch=Object.freeze({__proto__:null,ArcCurve:d_,CatmullRomCurve3:f_,CubicBezierCurve:gu,CubicBezierCurve3:M_,EllipseCurve:bl,LineCurve:_u,LineCurve3:S_,QuadraticBezierCurve:vu,QuadraticBezierCurve3:E_,SplineCurve:xu});class w_ extends zn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ch[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const o=i[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const o=r[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new ch[i.type]().fromJSON(i))}return this}}class b_ extends w_{constructor(t){super(),this.type="Path",this.currentPoint=new vt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new _u(this.currentPoint.clone(),new vt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const r=new vu(this.currentPoint.clone(),new vt(t,e),new vt(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,o){const a=new gu(this.currentPoint.clone(),new vt(t,e),new vt(n,i),new vt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new xu(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,i,r,o),this}absarc(t,e,n,i,r,o){return this.absellipse(t,e,n,n,i,r,o),this}ellipse(t,e,n,i,r,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,r,o,a,l),this}absellipse(t,e,n,i,r,o,a,l){const c=new bl(t,e,n,i,r,o,a,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Al extends un{constructor(t=[new vt(0,-.5),new vt(.5,0),new vt(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=We(i,0,Math.PI*2);const r=[],o=[],a=[],l=[],c=[],h=1/e,u=new L,d=new vt,f=new L,g=new L,_=new L;let m=0,p=0;for(let E=0;E<=t.length-1;E++)switch(E){case 0:m=t[E+1].x-t[E].x,p=t[E+1].y-t[E].y,f.x=p*1,f.y=-m,f.z=p*0,_.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(_.x,_.y,_.z);break;default:m=t[E+1].x-t[E].x,p=t[E+1].y-t[E].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),l.push(f.x,f.y,f.z),_.copy(g)}for(let E=0;E<=e;E++){const v=n+E*h*i,x=Math.sin(v),P=Math.cos(v);for(let T=0;T<=t.length-1;T++){u.x=t[T].x*x,u.y=t[T].y,u.z=t[T].x*P,o.push(u.x,u.y,u.z),d.x=E/e,d.y=T/(t.length-1),a.push(d.x,d.y);const b=l[3*T+0]*x,O=l[3*T+1],w=l[3*T+0]*P;c.push(b,O,w)}}for(let E=0;E<e;E++)for(let v=0;v<t.length-1;v++){const x=v+E*t.length,P=x,T=x+t.length,b=x+t.length+1,O=x+1;r.push(P,T,O),r.push(b,O,T)}this.setIndex(r),this.setAttribute("position",new Ce(o,3)),this.setAttribute("uv",new Ce(a,2)),this.setAttribute("normal",new Ce(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Al(t.points,t.segments,t.phiStart,t.phiLength)}}class vi extends Al{constructor(t=1,e=1,n=4,i=8){const r=new b_;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:i}}static fromJSON(t){return new vi(t.radius,t.length,t.capSegments,t.radialSegments)}}class Rl extends un{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const r=[],o=[],a=[],l=[],c=new L,h=new vt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const f=n+u/e*i;c.x=t*Math.cos(f),c.y=t*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Ce(o,3)),this.setAttribute("normal",new Ce(a,3)),this.setAttribute("uv",new Ce(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Rl(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Xe extends un{constructor(t=1,e=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const h=[],u=[],d=[],f=[];let g=0;const _=[],m=n/2;let p=0;E(),o===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new Ce(u,3)),this.setAttribute("normal",new Ce(d,3)),this.setAttribute("uv",new Ce(f,2));function E(){const x=new L,P=new L;let T=0;const b=(e-t)/n;for(let O=0;O<=r;O++){const w=[],y=O/r,I=y*(e-t)+t;for(let H=0;H<=i;H++){const k=H/i,B=k*l+a,Q=Math.sin(B),Z=Math.cos(B);P.x=I*Q,P.y=-y*n+m,P.z=I*Z,u.push(P.x,P.y,P.z),x.set(Q,b,Z).normalize(),d.push(x.x,x.y,x.z),f.push(k,1-y),w.push(g++)}_.push(w)}for(let O=0;O<i;O++)for(let w=0;w<r;w++){const y=_[w][O],I=_[w+1][O],H=_[w+1][O+1],k=_[w][O+1];h.push(y,I,k),h.push(I,H,k),T+=6}c.addGroup(p,T,0),p+=T}function v(x){const P=g,T=new vt,b=new L;let O=0;const w=x===!0?t:e,y=x===!0?1:-1;for(let H=1;H<=i;H++)u.push(0,m*y,0),d.push(0,y,0),f.push(.5,.5),g++;const I=g;for(let H=0;H<=i;H++){const B=H/i*l+a,Q=Math.cos(B),Z=Math.sin(B);b.x=w*Z,b.y=m*y,b.z=w*Q,u.push(b.x,b.y,b.z),d.push(0,y,0),T.x=Q*.5+.5,T.y=Z*.5*y+.5,f.push(T.x,T.y),g++}for(let H=0;H<i;H++){const k=P+H,B=I+H;x===!0?h.push(B,B+1,k):h.push(B+1,B,k),O+=3}c.addGroup(p,O,x===!0?1:2),p+=O}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xe(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Cl extends Xe{constructor(t=1,e=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new Cl(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Re extends un{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new L,d=new L,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const E=[],v=p/n;let x=0;p===0&&o===0?x=.5/e:p===n&&l===Math.PI&&(x=-.5/e);for(let P=0;P<=e;P++){const T=P/e;u.x=-t*Math.cos(i+T*r)*Math.sin(o+v*a),u.y=t*Math.cos(o+v*a),u.z=t*Math.sin(i+T*r)*Math.sin(o+v*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(T+x,1-v),E.push(c++)}h.push(E)}for(let p=0;p<n;p++)for(let E=0;E<e;E++){const v=h[p][E+1],x=h[p][E],P=h[p+1][E],T=h[p+1][E+1];(p!==0||o>0)&&f.push(v,x,T),(p!==n-1||l<Math.PI)&&f.push(x,P,T)}this.setIndex(f),this.setAttribute("position",new Ce(g,3)),this.setAttribute("normal",new Ce(_,3)),this.setAttribute("uv",new Ce(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Re(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Pl extends un{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],l=[],c=[],h=new L,u=new L,d=new L;for(let f=0;f<=n;f++)for(let g=0;g<=i;g++){const _=g/i*r,m=f/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(_),u.y=(t+e*Math.cos(m))*Math.sin(_),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/i),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=i;g++){const _=(i+1)*f+g-1,m=(i+1)*(f-1)+g-1,p=(i+1)*(f-1)+g,E=(i+1)*f+g;o.push(_,m,E),o.push(m,p,E)}this.setIndex(o),this.setAttribute("position",new Ce(a,3)),this.setAttribute("normal",new Ce(l,3)),this.setAttribute("uv",new Ce(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pl(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Bt extends cr{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Qt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qh,this.normalScale=new vt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Qo extends ke{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Qt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}class T_ extends Qo{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ke.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Qt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Ha=new Se,hh=new L,uh=new L;class yu{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new vt(512,512),this.map=null,this.mapPass=null,this.matrix=new Se,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Sl,this._frameExtents=new vt(1,1),this._viewportCount=1,this._viewports=[new we(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;hh.setFromMatrixPosition(t.matrixWorld),e.position.copy(hh),uh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(uh),e.updateMatrixWorld(),Ha.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ha),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ha)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const dh=new Se,yr=new L,Ga=new L;class A_ extends yu{constructor(){super(new cn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new vt(4,2),this._viewportCount=6,this._viewports=[new we(2,1,1,1),new we(0,1,1,1),new we(3,1,1,1),new we(1,1,1,1),new we(3,0,1,1),new we(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),yr.setFromMatrixPosition(t.matrixWorld),n.position.copy(yr),Ga.copy(n.position),Ga.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Ga),n.updateMatrixWorld(),i.makeTranslation(-yr.x,-yr.y,-yr.z),dh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(dh)}}class Ll extends Qo{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new A_}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class R_ extends yu{constructor(){super(new au(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class fh extends Qo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ke.DEFAULT_UP),this.updateMatrix(),this.target=new ke,this.shadow=new R_}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class C_ extends Qo{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Mu{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ph(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=ph();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function ph(){return(typeof performance>"u"?Date:performance).now()}const mh=new Se;class P_{constructor(t,e,n=0,i=1/0){this.ray=new Qh(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new Ml,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return mh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(mh),this}intersectObject(t,e=!0,n=[]){return nl(t,this,n,e),n.sort(gh),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)nl(t[i],this,n,e);return n.sort(gh),n}}function gh(s,t){return s.distance-t.distance}function nl(s,t,e,n){let i=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let o=0,a=r.length;o<a;o++)nl(r[o],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:_l}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=_l);const is=[{id:0,label:"Alex",skin:16763812,hair:2889744,outfit:1981066,accent:15857145,hairStyle:1},{id:1,label:"Jordan",skin:13010498,hair:1118481,outfit:1332013,accent:16710083,hairStyle:0},{id:2,label:"Morgan",skin:8142098,hair:656640,outfit:8917815,accent:16701354,hairStyle:2},{id:3,label:"Casey",skin:15777920,hair:8138002,outfit:1461859,accent:14742270,hairStyle:3},{id:4,label:"Riley",skin:9584654,hair:197379,outfit:10105874,accent:16775149,hairStyle:0},{id:5,label:"Sam",skin:16640216,hair:11817737,outfit:4988309,accent:15591934,hairStyle:1}],Il=[{id:"available",label:"🟢 Available",color:58998},{id:"busy",label:"🔴 Busy",color:16729156},{id:"away",label:"🟡 Away",color:16763904},{id:"meeting",label:"🟣 In Meeting",color:11158783}],il=Object.fromEntries(Il.map(s=>[s.id,s.color]));function Su(s,t=0){const e=new ri;return Tu(e,s,t),e}function Eu(s,t){s.userData.status=t;const e=s.userData.statusMesh;e&&e.material.color.setHex(il[t]??il.available)}function wu(s,t,e=0){var i;const n=s.userData.talkRing;if(n&&(n.visible=t,t)){const r=.75+Math.sin(e*6)*.25;n.material.opacity=r,n.material.color.setHex(65416),(i=n.material.emissive)==null||i.setHex(65416),n.material.emissiveIntensity=r*1.2}}function bu(s,t,e){for(s.traverse(n=>{var i;(n.isMesh||n.isSprite)&&((i=n.geometry)==null||i.dispose(),(Array.isArray(n.material)?n.material:[n.material]).forEach(o=>{var a;(a=o==null?void 0:o.map)==null||a.dispose(),o==null||o.dispose()}))});s.children.length;)s.remove(s.children[0]);Tu(s,t,e)}function Tu(s,t,e){const n=is[e]??is[0],i=Ts(n.skin,.75),r=Ts(n.outfit,.65,.05),o=Ts(n.accent,.6),a=Ts(n.hair,.9),l=Ts(1118481,.8),c=Ts(1118481,.3),h=(P,T,b=0,O=0,w=0,y=0,I=0,H=0)=>{const k=new wt(P,T);return k.position.set(b,O,w),k.rotation.set(y,I,H),k.castShadow=!0,s.add(k),k};h(new vi(.21,.52,4,12),r),h(new Xe(.215,.215,.055,16),l,0,.635),h(new jt(.26,.09,.04),o,0,1.12,.208),h(new Xe(.072,.09,.14,12),i,0,1.49),h(new Re(.19,20,16),i,0,1.68),h(new Re(.048,10,8),i,-.2,1.68),h(new Re(.048,10,8),i,.2,1.68),h(new Re(.034,10,8),o,-.068,1.7,.163),h(new Re(.034,10,8),o,.068,1.7,.163),h(new Re(.021,8,6),c,-.068,1.7,.178),h(new Re(.021,8,6),c,.068,1.7,.178),L_(s,h,a,n.hairStyle),h(new Re(.105,10,8),r,-.315,1.39),h(new Re(.105,10,8),r,.315,1.39);const u=h(new vi(.065,.3,4,8),r,-.31,1.08),d=h(new vi(.065,.3,4,8),r,.31,1.08);h(new Re(.073,12,9),i,-.32,.72),h(new Re(.073,12,9),i,.32,.72);const f=h(new vi(.083,.36,4,8),r,-.13,.4),g=h(new vi(.083,.36,4,8),r,.13,.4);h(new jt(.17,.1,.28),l,-.13,.07,.04),h(new jt(.17,.1,.28),l,.13,.07,.04),h(new Xe(.09,.084,.08,10),l,-.13,.145),h(new Xe(.09,.084,.08,10),l,.13,.145);const _=document.createElement("canvas");_.width=256,_.height=56;const m=_.getContext("2d");m.fillStyle="rgba(0,10,30,0.78)",m.roundRect(0,0,256,56,10),m.fill(),m.fillStyle="#aaddff",m.font="bold 26px Inter, sans-serif",m.textAlign="center",m.fillText(t,128,38);const p=new u_(new pu({map:new jo(_),transparent:!0,depthTest:!1}));p.position.set(0,2.18,0),p.scale.set(1.5,.33,1),s.add(p);const E=il[s.userData.status??"available"],v=new wt(new Re(.065,8,6),new Ar({color:E}));v.position.set(.58,2.22,0),s.add(v),s.userData.statusMesh=v;const x=new wt(new Pl(.38,.055,8,32),new Ar({color:65416,transparent:!0,opacity:0,depthWrite:!1,depthTest:!1,side:hn}));x.rotation.x=Math.PI/2,x.position.y=.06,x.renderOrder=999,x.visible=!1,s.add(x),s.userData.talkRing=x,s.userData.legL=f,s.userData.legR=g,s.userData.armL=u,s.userData.armR=d,s.userData.walkClock=s.userData.walkClock??0,s.userData.presetId=e}function L_(s,t,e,n){switch(n){case 0:t(new Re(.193,16,10,0,Math.PI*2,0,.8),e,0,1.69);break;case 1:t(new Re(.198,16,10,0,Math.PI*2,0,1.1),e,0,1.68);break;case 2:{t(new Re(.196,16,10,0,Math.PI*2,0,1.05),e,0,1.68);const i=new wt(new vi(.09,.22,4,8),e);i.position.set(0,1.51,-.13),i.rotation.x=.28,i.castShadow=!0,s.add(i);break}case 3:t(new Re(.238,16,12),e,0,1.74);break;default:t(new Re(.198,16,10,0,Math.PI*2,0,1.1),e,0,1.68)}}function Ts(s,t=.7,e=0){return new Bt({color:s,roughness:t,metalness:e})}function Au(s,t,e){const{legL:n,legR:i,armL:r,armR:o}=s.userData;if(!(!n||!i))if(t){s.userData.walkClock+=e*12;const a=Math.sin(s.userData.walkClock)*.42;n.rotation.x=a,i.rotation.x=-a,r&&(r.rotation.x=-a*.55),o&&(o.rotation.x=a*.55)}else{const a=Math.exp(-12*e);n.rotation.x*=a,i.rotation.x*=a,r&&(r.rotation.x*=a),o&&(o.rotation.x*=a)}}const R={minX:-22,maxX:22,minZ:-24,maxZ:12,wallH:4.5,wallT:.3,lobbyZ:4,midZ:-4,centerX:0,doorH:2.2,doorHalfW:.7,leftDoorX:-11,rightDoorX:11,mainDoorH:2.6,mainDoorHalfW:1.5},ot=R;function me(s,t,e,n,i,r,o,a){const l=new wt(new jt(r,o,a),t);return l.position.set(e,n,i),s.add(l),l}function I_(){const s=new Bt({color:13946822,roughness:.88,metalness:.04,side:hn}),t=new Bt({color:8026226,roughness:.78,metalness:.08}),e=new Bt({color:15789285,roughness:.94,metalness:0}),n=new Bt({color:15262940,roughness:.9,metalness:0}),i=new Bt({color:14209736,roughness:.18,metalness:.07}),r=new Bt({color:12090440,roughness:.82,metalness:0}),o=new Bt({color:16118766,roughness:.98,metalness:0}),a=new Bt({color:4341816,roughness:.9,metalness:0}),l=new Bt({color:10131600,roughness:.4,metalness:.6}),c=new Bt({color:11061464,roughness:.04,metalness:.08,transparent:!0,opacity:.25,side:hn}),h=new Bt({color:9209984,roughness:.82,metalness:.04}),u=new Bt({color:11579576,roughness:.28,metalness:.82});return{ext:s,span:t,int:e,div:n,tile:i,wood:r,ceil:o,roof:a,frame:l,glass:c,stair:h,rail:u}}function D_(s){const t=I_(),e=ot.wallH,n=ot.wallT,i=ot.maxX-ot.minX,r=ot.maxZ-ot.minZ,o=0,a=(ot.minZ+ot.maxZ)/2,l=4,c=e*l;me(s,t.tile,o,.04,(ot.lobbyZ+ot.maxZ)/2,i,.08,ot.maxZ-ot.lobbyZ),me(s,t.wood,o,.04,(ot.minZ+ot.lobbyZ)/2,i,.08,ot.lobbyZ-ot.minZ),me(s,t.ext,o,c/2,ot.minZ,i,c,n),me(s,t.ext,ot.minX,c/2,a,n,c,r),me(s,t.ext,ot.maxX,c/2,a,n,c,r);const h=ot.mainDoorHalfW,u=ot.mainDoorH,d=e/2;me(s,t.ext,(ot.minX+-h)/2,d,ot.maxZ,-h-ot.minX,e,n),me(s,t.ext,(h+ot.maxX)/2,d,ot.maxZ,ot.maxX-h,e,n),me(s,t.ext,0,u+(e-u)/2,ot.maxZ,h*2,e-u,n),me(s,t.ext,o,e+(c-e)/2,ot.maxZ,i,c-e,n);for(let v=1;v<l;v++){const x=e*v;me(s,t.span,o,x+.25,ot.maxZ-.08,i+.2,.5,.14),me(s,t.span,o,x+.25,ot.minZ+.08,i+.2,.5,.14),me(s,t.span,ot.minX+.06,x+.25,a,.14,.5,r+.2),me(s,t.span,ot.maxX-.06,x+.25,a,.14,.5,r+.2)}N_(s,t),U_(s,t,h);const f=n*.5,g=n/2;_h(s,t.div,ot.lobbyZ,ot.minX+f,ot.maxX-f,e,n,ot.leftDoorX,ot.doorHalfW,ot.doorH,ot.rightDoorX,ot.doorHalfW,ot.doorH),_h(s,t.div,ot.midZ,ot.minX+f,ot.maxX-f,e,n,ot.leftDoorX,ot.doorHalfW,ot.doorH,ot.rightDoorX,ot.doorHalfW,ot.doorH),vh(s,t.div,ot.centerX,ot.minZ+f,ot.midZ-g,e,n),vh(s,t.div,ot.centerX,ot.midZ+g,ot.lobbyZ-g,e,n);const _=me(s,t.ceil,o,e+.05,a,i,.1,r);_.userData.mapHide=!0;const m=s.children.length;me(s,t.roof,o,c+.3,a,i+1,.6,r+1),F_(s,t.ext,i,r,c);for(let v=m;v<s.children.length;v++)s.children[v].userData.mapHide=!0;O_(s,t),B_(s);const p=s.children.length;z_(s,e);for(let v=p;v<s.children.length;v++)s.children[v].userData.mapHide=!0;const E=s.children.length;k_(s);for(let v=E;v<s.children.length;v++)s.children[v].userData.mapShow=!0}function N_(s,t){function r(l,c,h,u){const d=new wt(new jt(2.3600000000000003,1.7200000000000002,.08),t.frame);d.position.set(l,c,h),d.rotation.y=u,s.add(d);const f=new wt(new oi(2.2,1.6),t.glass);f.position.set(l,c,h),f.rotation.y=u,s.add(f)}const o=ot.wallH,a=[0,1,2,3].map(l=>l*o+o*.6);a.forEach(l=>{[-16,-6,8].forEach(c=>r(ot.minX,l,c,Math.PI/2))}),a.forEach(l=>{[-16,-6,8].forEach(c=>r(ot.maxX,l,c,-Math.PI/2))}),a.forEach(l=>{[-14,0,14].forEach(c=>r(c,l,ot.minZ,Math.PI))}),a.forEach((l,c)=>{c===0?(r(-14,l,ot.maxZ,0),r(14,l,ot.maxZ,0)):[-14,-6,6,14].forEach(h=>r(h,l,ot.maxZ,0))})}function U_(s,t,e,n){[-e-.4,e+.4].forEach(i=>{const r=new wt(new Xe(.22,.22,ot.mainDoorH,12),t.ext);r.position.set(i,ot.mainDoorH/2,ot.maxZ+.5),s.add(r)}),me(s,t.span,0,ot.mainDoorH+.18,ot.maxZ+.7,e*2+2.4,.35,1.8),me(s,t.int,0,ot.mainDoorH,ot.maxZ+.7,e*2+2.2,.02,1.7)}function O_(s,t){for(let c=0;c<9;c++)me(s,t.stair,16.5,.22*(c+.5),5.5+.28*(c+.5),3,.22,.28);for(let c=0;c<9;c+=2)me(s,t.rail,16.5-3/2+.1,.22*c+.55,5.5+.28*c,.06,1.1,.06),me(s,t.rail,16.5+3/2-.1,.22*c+.55,5.5+.28*c,.06,1.1,.06);me(s,t.rail,16.5,.22*9*.5+.55,5.5+.28*9*.5,3,.06,.28*9+.1);const l=-16.5;for(let c=0;c<9;c++)me(s,t.stair,l,.22*(c+.5),5.5+.28*(c+.5),3,.22,.28);for(let c=0;c<9;c+=2)me(s,t.rail,l-3/2+.1,.22*c+.55,5.5+.28*c,.06,1.1,.06),me(s,t.rail,l+3/2-.1,.22*c+.55,5.5+.28*c,.06,1.1,.06);me(s,t.rail,l,.22*9*.5+.55,5.5+.28*9*.5,3,.06,.28*9+.1)}function _h(s,t,e,n,i,r,o,a,l,c,h,u,d){const f=r/2,g=[];let _=n;const m=[];m.push({c:a,hw:l,dh:c}),m.push({c:h,hw:u,dh:d}),m.sort((p,E)=>p.c-E.c),m.forEach(({c:p,hw:E,dh:v})=>{const x=p-E,P=p+E;x>_&&g.push({from:_,to:x,full:!0}),g.push({from:x,to:P,full:!1,dh:v}),_=P}),_<i&&g.push({from:_,to:i,full:!0}),g.forEach(({from:p,to:E,full:v,dh:x})=>{const P=E-p,T=(p+E)/2;if(v)me(s,t,T,f,e,P,r,o);else{const b=r-x;me(s,t,T,x+b/2,e,P,b,o)}})}function vh(s,t,e,n,i,r,o){const a=i-n;if(a<=0)return;const l=new wt(new jt(o,r,a),t);l.position.set(e,r/2,(n+i)/2),s.add(l)}function F_(s,t,e,n,i){const a=i+.275+.05,l=(ot.minZ+ot.maxZ)/2;[[0,a,ot.maxZ+.05,e+.6,.55,.28],[0,a,ot.minZ-.05,e+.6,.55,.28],[ot.minX-.05,a,l,.28,.55,n+.6],[ot.maxX+.05,a,l,.28,.55,n+.6]].forEach(([h,u,d,f,g,_])=>{const m=new wt(new jt(f,g,_),t);m.position.set(h,u,d),s.add(m)})}function B_(s){[{color:12863616,x:ot.minX+.06,z1:ot.midZ,z2:ot.lobbyZ},{color:4241520,x:ot.maxX-.06,z1:ot.midZ,z2:ot.lobbyZ},{color:14712880,x:ot.minX+.06,z1:ot.minZ,z2:ot.midZ},{color:3705032,x:ot.maxX-.06,z1:ot.minZ,z2:ot.midZ},{color:8947848,x:0,z1:ot.lobbyZ,z2:ot.maxZ-1}].forEach(({color:e,x:n,z1:i,z2:r})=>{const o=new Bt({color:e,roughness:.7,metalness:0}),a=r-i,l=new wt(new jt(.06,.04,a),o);l.position.set(n,.05,(i+r)/2),s.add(l)})}function z_(s,t){const e=new Bt({color:14210510,roughness:.85,metalness:.06}),n=new Bt({color:16777215,emissive:16774632,emissiveIntensity:1.2,roughness:.7});[[-8,8],[8,8],[0,8],[-11,0],[11,0],[-14,-10],[-8,-18],[8,-18],[14,-10]].forEach(([r,o])=>{const a=new wt(new jt(1.2,.06,.65),e);a.position.set(r,t-.04,o),s.add(a);const l=new wt(new jt(1.1,.01,.55),n);l.position.set(r,t-.02,o),s.add(l)})}function k_(s){[{name:"LOBBY",color:"#cccccc",x:0,z:8,w:16,d:5},{name:"OPS",color:"#ffaa44",x:-11,z:0,w:12,d:6},{name:"FUN",color:"#44ffaa",x:11,z:0,w:12,d:6},{name:"DESIGN",color:"#ff6ba0",x:-11,z:-14,w:14,d:10},{name:"ENGINEERING",color:"#44aaff",x:11,z:-14,w:14,d:10}].forEach(({name:e,color:n,x:i,z:r,w:o,d:a})=>{const l=document.createElement("canvas");l.width=512,l.height=256;const c=l.getContext("2d");c.fillStyle=n+"18",c.fillRect(0,0,512,256),c.strokeStyle=n,c.lineWidth=10,c.strokeRect(6,6,500,244),c.fillStyle=n,c.font="bold 72px Inter, Arial, sans-serif",c.textAlign="center",c.textBaseline="middle",c.fillText(e,256,128);const h=new wt(new oi(o,a),new Ar({map:new jo(l),transparent:!0,depthWrite:!1}));h.rotation.x=-Math.PI/2,h.position.set(i,.15,r),s.add(h)})}function H_(s){const t=R,e=new Bt({color:5934140,roughness:.96,metalness:0}),n=new wt(new oi(300,300),e);n.rotation.x=-Math.PI/2,n.position.y=-.01,n.receiveShadow=!0,s.add(n);const i=new Bt({color:12630704,roughness:.88,metalness:0}),r=new wt(new jt(5,.06,18),i);r.position.set(0,.03,19),r.receiveShadow=!0,s.add(r);const o=new wt(new jt(14,.06,8),i);o.position.set(0,.03,14.5),o.receiveShadow=!0,s.add(o);const a=new wt(new jt(t.maxX-t.minX,.06,4),i);a.position.set(0,.03,t.maxZ+2),a.receiveShadow=!0,s.add(a);const l=new Bt({color:11578272,roughness:.9,metalness:0}),c=t.maxX-t.minX,h=t.maxZ-t.minZ,u=new wt(new jt(c+.8,.22,h+.8),l);u.position.set(0,-.11,(t.minZ+t.maxZ)/2),s.add(u),[[-30,-18],[-30,5],[-30,20],[30,-18],[30,5],[30,20],[-12,26],[12,26],[-36,12],[36,12],[-28,-30],[28,-30]].forEach(([f,g])=>G_(s,f,g)),[[-4,24],[4,24],[-14,14],[14,14]].forEach(([f,g])=>V_(s,f,g)),W_(s),X_(s)}function G_(s,t,e){const n=new Bt({color:5911832,roughness:.92}),i=new Bt({color:3830312,roughness:.95}),r=new wt(new Xe(.18,.26,2.2,8),n);r.position.set(t,1.1,e),r.castShadow=!0,s.add(r),[[1.8,2.5,3.4],[1.3,2,4.8],[.7,1.4,6]].forEach(([o,a,l])=>{const c=new wt(new Cl(o,a,9),i);c.position.set(t,l,e),c.castShadow=!0,s.add(c)})}function V_(s,t,e){const n=new Bt({color:6316128,roughness:.55,metalness:.75}),i=new Bt({color:16775384,emissive:16773296,emissiveIntensity:1.5,roughness:.4}),r=new wt(new Xe(.06,.08,5,8),n);r.position.set(t,2.5,e),r.castShadow=!0,s.add(r);const o=new wt(new jt(.06,.06,.9),n);o.position.set(t,5.1,e-.4),s.add(o);const a=new wt(new jt(.45,.14,.28),i);a.position.set(t,4.95,e-.8),s.add(a);const l=new Ll(16771232,6,12);l.position.set(t,4.95,e-.8),s.add(l)}function W_(s){const t=[2250154,11149858,8947840,2245666,8947848],e=new Bt({color:1710618,roughness:.8});[[-40,-22],[-40,-16],[-40,-10],[40,-22],[40,-16],[40,-10]].forEach(([i,r],o)=>{const a=t[o%t.length],l=new Bt({color:a,roughness:.45,metalness:.3}),c=new wt(new jt(4.4,1.4,2),l);c.position.set(i,.72,r),c.castShadow=!0,s.add(c);const h=new wt(new jt(2.8,.7,1.85),l);h.position.set(i-.2,1.8,r),s.add(h),[[-1.5,-1.05],[-1.5,1.05],[1.5,-1.05],[1.5,1.05]].forEach(([u,d])=>{const f=new wt(new Xe(.36,.36,.22,12),e);f.rotation.z=Math.PI/2,f.position.set(i+u,.36,r+d),s.add(f)})})}function X_(s){const t=new Bt({color:4878400,roughness:1});[[-80,-60,30,8,20],[80,-60,28,7,18],[0,-80,40,6,25],[-50,-70,35,9,22],[55,-70,32,7,20]].forEach(([e,n,i,r,o])=>{const a=new wt(new jt(i,r,o),t);a.position.set(e,r/2-2,n),s.add(a)})}const As=R.leftDoorX,Rs=R.rightDoorX,Ie=R.doorHalfW,pi=R.doorH,Cs=.1,eo=[{id:"main-left",label:"Main Entrance",hinge:{x:-1.5,y:R.mainDoorH/2,z:R.maxZ},meshOffset:{x:R.mainDoorHalfW/2,y:0,z:0},w:R.mainDoorHalfW,h:R.mainDoorH,d:Cs,closedRY:0,openRY:Math.PI/2,closedAABB:{minX:-1.5,maxX:0,minZ:R.maxZ-.14,maxZ:R.maxZ+.14}},{id:"main-right",label:"Main Entrance",hinge:{x:R.mainDoorHalfW,y:R.mainDoorH/2,z:R.maxZ},meshOffset:{x:-1.5/2,y:0,z:0},w:R.mainDoorHalfW,h:R.mainDoorH,d:Cs,closedRY:0,openRY:-Math.PI/2,closedAABB:{minX:0,maxX:R.mainDoorHalfW,minZ:R.maxZ-.14,maxZ:R.maxZ+.14}},{id:"ops",label:"Ops Room",hinge:{x:As-Ie,y:pi/2,z:R.lobbyZ},meshOffset:{x:Ie,y:0,z:0},w:Ie*2,h:pi,d:Cs,closedRY:0,openRY:-Math.PI/2,closedAABB:{minX:As-Ie,maxX:As+Ie,minZ:R.lobbyZ-.12,maxZ:R.lobbyZ+.12}},{id:"fun",label:"Fun Room",hinge:{x:Rs+Ie,y:pi/2,z:R.lobbyZ},meshOffset:{x:-Ie,y:0,z:0},w:Ie*2,h:pi,d:Cs,closedRY:0,openRY:Math.PI/2,closedAABB:{minX:Rs-Ie,maxX:Rs+Ie,minZ:R.lobbyZ-.12,maxZ:R.lobbyZ+.12}},{id:"design",label:"Design Room",hinge:{x:As-Ie,y:pi/2,z:R.midZ},meshOffset:{x:Ie,y:0,z:0},w:Ie*2,h:pi,d:Cs,closedRY:0,openRY:-Math.PI/2,closedAABB:{minX:As-Ie,maxX:As+Ie,minZ:R.midZ-.12,maxZ:R.midZ+.12}},{id:"engineering",label:"Engineering Room",hinge:{x:Rs+Ie,y:pi/2,z:R.midZ},meshOffset:{x:-Ie,y:0,z:0},w:Ie*2,h:pi,d:Cs,closedRY:0,openRY:Math.PI/2,closedAABB:{minX:Rs-Ie,maxX:Rs+Ie,minZ:R.midZ-.12,maxZ:R.midZ+.12}}],ur={};function Z_(s){const t=new Bt({color:8016944,roughness:.72,metalness:.02,side:hn}),e=new Bt({color:13937220,roughness:.28,metalness:.88}),n=new Bt({color:6176286,roughness:.8,metalness:0});return eo.forEach(i=>{const r=new ri;r.position.set(i.hinge.x,i.hinge.y,i.hinge.z),s.add(r);const o=new wt(new jt(i.w,i.h,i.d),t);o.position.set(i.meshOffset.x,i.meshOffset.y,i.meshOffset.z),o.userData.doorId=i.id,r.add(o);const a=i.meshOffset;[-.45,.32].forEach(f=>{const g=new wt(new jt(i.w*.85,.04,i.d*1.2),n);g.position.set(a.x,a.y+f,a.z+i.d*.1),r.add(g)});const l=a.x+(a.x>=0?-i.w*.36:i.w*.36),c=new wt(new Re(.05,8,6),e);c.position.set(l,a.y-.08,a.z+i.d*.65),r.add(c);const h=c.clone();h.position.z=a.z-i.d*.65,r.add(h);const u=i.id==="main-left"||i.id==="main-right",d=u?i.openRY:i.closedRY;r.rotation.y=d,ur[i.id]={open:u,targetRY:d,currentRY:d,pivot:r}}),{update:Y_,toggleDoor:$n,getNearbyDoor:Ru,getClosedColliders:Cu}}function Y_(s){Object.values(ur).forEach(t=>{Math.abs(t.currentRY-t.targetRY)>5e-4&&(t.currentRY+=(t.targetRY-t.currentRY)*Math.min(1,s*7),t.pivot.rotation.y=t.currentRY)})}function $n(s){const t=ur[s],e=eo.find(n=>n.id===s);if(!(!t||!e))return t.open=!t.open,t.targetRY=t.open?e.openRY:e.closedRY,t.open}function Ru(s,t=2.8){let e=null,n=t;return eo.forEach(i=>{const r=s.x-i.hinge.x,o=s.z-i.hinge.z,a=Math.sqrt(r*r+o*o);a<n&&(n=a,e={def:i,state:ur[i.id]})}),e}function Ps(s){var t;return((t=ur[s])==null?void 0:t.open)??!1}function Cu(){const s=[];return eo.forEach(t=>{const e=ur[t.id];if(!e)return;Math.abs(e.currentRY-t.closedRY)<.18&&s.push(t.closedAABB)}),s}function q_(s){const t=document.getElementById("canvas"),e=new l_({canvas:t,antialias:!0});e.setSize(window.innerWidth,window.innerHeight),e.setPixelRatio(Math.min(window.devicePixelRatio,2)),e.shadowMap.enabled=!0,e.shadowMap.type=Bh,e.toneMapping=kh,e.toneMappingExposure=1;const n=new c_;n.background=new Qt(9357544),n.fog=new wl(11195624,.007);const i=new cn(80,window.innerWidth/window.innerHeight,.1,300);i.position.set(0,1.7,22),n.add(new C_(16775408,.9)),n.add(new T_(10407144,5929544,.9));const r=new fh(16774616,3.2);r.position.set(40,70,35),r.castShadow=!0,r.shadow.mapSize.set(2048,2048),r.shadow.camera.near=1,r.shadow.camera.far=120,r.shadow.camera.left=-50,r.shadow.camera.right=50,r.shadow.camera.top=50,r.shadow.camera.bottom=-50,r.shadow.radius=3,r.shadow.bias=-.001,n.add(r);const o=new fh(13164021,.6);o.position.set(-25,30,-20),n.add(o),[{pos:[-5,3.8,-14],color:16773344,intensity:25,radius:18},{pos:[5,3.8,-14],color:16773344,intensity:25,radius:18},{pos:[-11,3.8,0],color:16774376,intensity:22,radius:16},{pos:[11,3.8,0],color:16774376,intensity:22,radius:16},{pos:[0,3.8,8],color:16775412,intensity:28,radius:22}].forEach(({pos:d,color:f,intensity:g,radius:_})=>{const m=new Ll(f,g,_);m.position.set(...d),n.add(m)}),s==null||s(10,"Laying foundations…"),H_(n),s==null||s(35,"Building structure…"),D_(n),s==null||s(65,"Installing doors…");const l=Z_(n);s==null||s(90,"Finishing touches…"),n.userData.doors=l,window.addEventListener("resize",()=>{i.aspect=window.innerWidth/window.innerHeight,i.updateProjectionMatrix(),e.setSize(window.innerWidth,window.innerHeight)});const c=new Mu;function h(){requestAnimationFrame(h);const d=c.getDelta();l.update(d),e.render(n,i)}h();let u=null;return s==null||s(100,"Ready!"),setTimeout(()=>{u&&u()},200),{scene:n,camera:i,renderer:e,onShipLoaded:d=>{u=d}}}const xh=[{id:"design-screen",label:"Design Board",zone:"DESIGN",tool:"Excalidraw",url:"https://excalidraw.com",position:{x:R.minX+.12,y:2.2,z:-14},rotationY:Math.PI/2,width:4.5,height:2.8,color:16739232,emoji:"✏️"},{id:"engineering-screen",label:"Code Docs",zone:"ENGINEERING",tool:"HackMD",url:"https://hackmd.io",position:{x:R.maxX-.12,y:2.2,z:-14},rotationY:-Math.PI/2,width:4.5,height:2.8,color:4500223,emoji:"💻"},{id:"ops-screen",label:"Ops Dashboard",zone:"OPS",tool:"Grafana",url:"https://play.grafana.org",position:{x:R.minX+.12,y:2.2,z:0},rotationY:Math.PI/2,width:4,height:2.5,color:16755268,emoji:"📊"},{id:"fun-screen",label:"Vibe Zone",zone:"FUN",tool:"Spotify",url:"https://open.spotify.com/embed/playlist/37i9dQZF1DX0XUsuxWHRQd?utm_source=generator&theme=0",position:{x:R.maxX-.12,y:2.2,z:0},rotationY:-Math.PI/2,width:4,height:2.5,color:4521898,emoji:"🎵"}];function $_(s){const t=[];return xh.forEach(e=>{const n=new ri;n.position.set(e.position.x,e.position.y,e.position.z),n.rotation.y=e.rotationY,s.add(n);const i=.1,r=new Bt({color:1710618,roughness:.3,metalness:.85}),o=(g,_,m,p,E,v)=>{const x=new wt(new jt(p,E,v),r);x.position.set(g,_,m),n.add(x)};o(0,e.height/2+i/2,0,e.width+i*2,i,i*2),o(0,-e.height/2-i/2,0,e.width+i*2,i,i*2),o(-e.width/2-i/2,0,0,i,e.height+i*2,i*2),o(e.width/2+i/2,0,0,i,e.height+i*2,i*2);const a=new Bt({color:e.color,emissive:e.color,emissiveIntensity:2.5,roughness:.08}),l=(g,_,m,p,E,v)=>{const x=new wt(new jt(p,E,v),a);x.position.set(g,_,m),n.add(x)};l(0,e.height/2,.02,e.width,.04,.04),l(0,-e.height/2,.02,e.width,.04,.04),l(-e.width/2,0,.02,.04,e.height,.04),l(e.width/2,0,.02,.04,e.height,.04);const c=K_(e),h=new Bt({map:c,emissiveMap:c,emissive:new Qt(e.color),emissiveIntensity:.14,roughness:.1}),u=new wt(new oi(e.width,e.height),h);u.position.set(0,0,.02),u.userData.screen=e,n.add(u),t.push(u);const d=new Ll(e.color,16,8);d.position.set(0,0,.6),n.add(d);let f=Math.random()*Math.PI*2;(function g(){requestAnimationFrame(g),f+=.018,h.emissiveIntensity=.12+Math.sin(f)*.04,d.intensity=14+Math.sin(f*.65)*4})()}),{meshes:t,screens:xh}}function K_(s){const e=Math.round(512*(s.height/s.width)),n=document.createElement("canvas");n.width=512,n.height=e;const i=n.getContext("2d"),r="#"+s.color.toString(16).padStart(6,"0");i.fillStyle="#060c18",i.fillRect(0,0,512,e),i.fillStyle="rgba(200,230,255,0.035)";for(let l=0;l<512;l+=32)for(let c=0;c<e;c+=32)i.fillRect(l,c,2,2);const o=i.createLinearGradient(0,0,512,0);o.addColorStop(0,r+"55"),o.addColorStop(1,"transparent"),i.fillStyle=o,i.fillRect(0,0,512,46),i.fillStyle=r,i.font="bold 16px Inter, monospace",i.textAlign="left",i.fillText(s.zone,14,30),i.fillStyle="rgba(255,255,255,0.38)",i.font="12px Inter, monospace",i.textAlign="right",i.fillText(s.tool,498,30),i.strokeStyle=r+"44",i.lineWidth=1,i.beginPath(),i.moveTo(0,48),i.lineTo(512,48),i.stroke();const a=Math.round(e*.27);return i.font=`${a}px sans-serif`,i.textAlign="center",i.fillText(s.emoji,512/2,e*.52),i.fillStyle="#fff",i.font=`bold ${Math.round(e*.1)}px Inter, monospace`,i.textAlign="center",i.shadowColor=r,i.shadowBlur=18,i.fillText(s.label,512/2,e*.72),i.shadowBlur=0,i.fillStyle=r+"bb",i.font=`${Math.round(e*.062)}px Inter, monospace`,i.textAlign="center",i.fillText("[ E ] or click to open",512/2,e*.88),i.strokeStyle=r+"55",i.lineWidth=2,i.beginPath(),i.moveTo(0,e-2),i.lineTo(512,e-2),i.stroke(),new jo(n)}const Po=.38,Ee=R.wallT/2+.01,Us=R.leftDoorX,Os=R.rightDoorX,mi=R.doorHalfW,yh=R.mainDoorHalfW,Pu=[{minX:R.minX,maxX:-yh,minZ:R.maxZ-Ee,maxZ:R.maxZ+Ee},{minX:yh,maxX:R.maxX,minZ:R.maxZ-Ee,maxZ:R.maxZ+Ee},{minX:R.minX,maxX:R.maxX,minZ:R.minZ-Ee,maxZ:R.minZ+Ee},{minX:R.minX-Ee,maxX:R.minX+Ee,minZ:R.minZ,maxZ:R.maxZ},{minX:R.maxX-Ee,maxX:R.maxX+Ee,minZ:R.minZ,maxZ:R.maxZ},{minX:R.minX,maxX:Us-mi,minZ:R.lobbyZ-Ee,maxZ:R.lobbyZ+Ee},{minX:Us+mi,maxX:Os-mi,minZ:R.lobbyZ-Ee,maxZ:R.lobbyZ+Ee},{minX:Os+mi,maxX:R.maxX,minZ:R.lobbyZ-Ee,maxZ:R.lobbyZ+Ee},{minX:R.minX,maxX:Us-mi,minZ:R.midZ-Ee,maxZ:R.midZ+Ee},{minX:Us+mi,maxX:Os-mi,minZ:R.midZ-Ee,maxZ:R.midZ+Ee},{minX:Os+mi,maxX:R.maxX,minZ:R.midZ-Ee,maxZ:R.midZ+Ee},{minX:R.centerX-Ee,maxX:R.centerX+Ee,minZ:R.minZ,maxZ:R.lobbyZ},{minX:-80,maxX:80,minZ:68,maxZ:70},{minX:-80,maxX:80,minZ:-70,maxZ:-68},{minX:-70,maxX:-68,minZ:-70,maxZ:70},{minX:68,maxX:70,minZ:-70,maxZ:70}];let Lu=[];function J_(s){Lu=s}function j_(s,t,e){const n=Math.max(e.minX,Math.min(s,e.maxX)),i=Math.max(e.minZ,Math.min(t,e.maxZ)),r=s-n,o=t-i,a=r*r+o*o;if(a<Po*Po&&a>1e-6){const l=Math.sqrt(a),c=Po-l;return{x:s+r/l*c,z:t+o/l*c}}return a===0?{x:s+Po,z:t}:null}function Va(s,t){let e=t.x,n=t.z;const i=[...Pu,...Cu(),...Lu];for(let r=0;r<2;r++)for(const o of i){const a=j_(e,n,o);a&&(e=a.x,n=a.z)}return{x:e,z:n}}function Vo(s){const t=s.x,e=s.z;if(e>R.maxZ||e<R.minZ||t<R.minX||t>R.maxX)return"OUTSIDE";if(e>R.lobbyZ)return"LOBBY";const n=t<R.centerX,i=e>R.midZ,r=e<=R.midZ;return i&&n?"OPS":i&&!n?"FUN":r&&n?"DESIGN":"ENGINEERING"}const Q_={mainDoor:{x:0,z:R.maxZ+.5},lobbyIn:{x:0,z:R.maxZ-1.5},opsEntry:{x:Us,z:R.lobbyZ-1},funEntry:{x:Os,z:R.lobbyZ-1},designEntry:{x:Us,z:R.midZ-1},engEntry:{x:Os,z:R.midZ-1}};function tv(s,t){const e=Vo(s),n=Vo(t);if(e===n)return[{x:t.x,z:t.z}];const i={x:t.x,z:t.z},r=Q_,o={"OUTSIDE→LOBBY":[r.mainDoor,r.lobbyIn],"OUTSIDE→OPS":[r.mainDoor,r.lobbyIn,r.opsEntry],"OUTSIDE→FUN":[r.mainDoor,r.lobbyIn,r.funEntry],"OUTSIDE→DESIGN":[r.mainDoor,r.lobbyIn,r.opsEntry,r.designEntry],"OUTSIDE→ENGINEERING":[r.mainDoor,r.lobbyIn,r.funEntry,r.engEntry],"LOBBY→OPS":[r.opsEntry],"LOBBY→FUN":[r.funEntry],"LOBBY→DESIGN":[r.opsEntry,r.designEntry],"LOBBY→ENGINEERING":[r.funEntry,r.engEntry],"LOBBY→OUTSIDE":[r.mainDoor],"OPS→LOBBY":[r.opsEntry],"OPS→DESIGN":[r.designEntry],"OPS→FUN":[r.opsEntry,r.funEntry],"OPS→ENGINEERING":[r.opsEntry,r.funEntry,r.engEntry],"OPS→OUTSIDE":[r.opsEntry,r.mainDoor],"FUN→LOBBY":[r.funEntry],"FUN→ENGINEERING":[r.engEntry],"FUN→OPS":[r.funEntry,r.opsEntry],"FUN→DESIGN":[r.funEntry,r.opsEntry,r.designEntry],"FUN→OUTSIDE":[r.funEntry,r.mainDoor],"DESIGN→OPS":[r.designEntry],"DESIGN→LOBBY":[r.designEntry,r.opsEntry],"DESIGN→FUN":[r.designEntry,r.opsEntry,r.funEntry],"DESIGN→ENGINEERING":[r.designEntry,r.opsEntry,r.funEntry,r.engEntry],"DESIGN→OUTSIDE":[r.designEntry,r.opsEntry,r.mainDoor],"ENGINEERING→FUN":[r.engEntry],"ENGINEERING→LOBBY":[r.engEntry,r.funEntry],"ENGINEERING→OPS":[r.engEntry,r.funEntry,r.opsEntry],"ENGINEERING→DESIGN":[r.engEntry,r.funEntry,r.opsEntry,r.designEntry],"ENGINEERING→OUTSIDE":[r.engEntry,r.mainDoor]},a=`${e}→${n}`;return[...o[a]??[],i]}const Ls=5.5,ev=5,Mh=2,Sh=12,nv=1.65,Eh=60,iv=64,sv=57;function rv(s,t,e){const n={};let i=Math.PI,r=0,o="flat",a=[],l=0,c=!1,h=!1,u=!1,d=.28,f=ev,g=0,_=0,m=0,p=22,E=38,v=!1;const x={active:!1,x:0,y:0,id:-1,ox:0,oy:0},P={active:!1,lx:0,ly:0,id:-1},T={active:!1,dist:0},b=document.getElementById("vjoy-base"),O=document.getElementById("vjoy-stick");document.addEventListener("keydown",q=>{if(n[q.code]=!0,q.code==="KeyR"&&(s.position.set(0,0,22),i=Math.PI,r=0,a=[],c=!1,ov("Respawned at Entrance")),q.code==="Tab"){q.preventDefault();const lt=["flat","overview","third","first"];I(lt[(lt.indexOf(o)+1)%lt.length])}q.code==="Escape"&&o!=="third"&&I("third")}),document.addEventListener("keyup",q=>{n[q.code]=!1}),document.addEventListener("mousemove",q=>{if(document.pointerLockElement===e){o==="first"&&(r=Math.max(-1.2,Math.min(.5,r-q.movementY*.002))),i-=q.movementX*.0025;return}if(h)if(o==="overview"){const lt=E*1.534*.9/window.innerHeight;m-=q.movementX*lt,p+=q.movementY*lt,m=Math.max(-60,Math.min(60,m)),p=Math.max(-60,Math.min(60,p)),v=!0,(Math.abs(q.movementX)>2||Math.abs(q.movementY)>2)&&(u=!0)}else o==="third"?(i-=q.movementX*.005,d=Math.max(-.05,Math.min(1,d+q.movementY*.003)),(Math.abs(q.movementX)>2||Math.abs(q.movementY)>2)&&(u=!0)):(i-=q.movementX*.005,(Math.abs(q.movementX)>2||Math.abs(q.movementY)>2)&&(u=!0))}),e.addEventListener("mousedown",q=>{q.button===0&&(h=!0,u=!1,o==="overview"&&(e.style.cursor="grabbing"))}),document.addEventListener("mouseup",q=>{q.button===0&&(h=!1,o==="overview"&&(e.style.cursor="grab"))}),e.addEventListener("contextmenu",q=>q.preventDefault()),e.addEventListener("wheel",q=>{if(o!=="overview"&&o!=="third")return;q.preventDefault();const lt=q.deltaMode===0?q.deltaY:q.deltaY*24,F=Math.pow(.997,lt);if(o==="overview"){const Y=E;E=Math.max(14,Math.min(60,E*F));const K=E-Y,$=Math.tan(t.fov*Math.PI/180/2),ct=window.innerWidth/window.innerHeight,Tt=q.clientX/window.innerWidth-.5,zt=-(q.clientY/window.innerHeight-.5);m-=Tt*K*2*$*ct,p+=zt*K*2*$,m=Math.max(-60,Math.min(60,m)),p=Math.max(-60,Math.min(60,p)),v=!0}else f=Math.max(Mh,Math.min(Sh,f*F))},{passive:!1}),e.addEventListener("touchstart",q=>{if(o!=="flat"){q.preventDefault();for(let lt=0;lt<q.changedTouches.length;lt++){const F=q.changedTouches[lt];o==="overview"?P.active||(P.active=!0,P.id=F.identifier,P.lx=F.clientX,P.ly=F.clientY,h=!0,u=!1):F.clientX<window.innerWidth*.5&&!x.active?(x.active=!0,x.id=F.identifier,x.ox=F.clientX,x.oy=F.clientY,x.x=0,x.y=0,b&&(b.style.left=F.clientX-40+"px",b.style.top=F.clientY-40+"px",b.style.display="block",O&&(O.style.transform="translate(-50%,-50%)"))):F.clientX>=window.innerWidth*.5&&!P.active&&(P.active=!0,P.id=F.identifier,P.lx=F.clientX,P.ly=F.clientY)}if(q.touches.length>=2){const lt=q.touches[0],F=q.touches[1],Y=F.clientX-lt.clientX,K=F.clientY-lt.clientY;T.active=!0,T.dist=Math.sqrt(Y*Y+K*K)}}},{passive:!1}),e.addEventListener("touchmove",q=>{if(o!=="flat"){q.preventDefault();for(let lt=0;lt<q.changedTouches.length;lt++){const F=q.changedTouches[lt];if(F.identifier===x.id){const Y=F.clientX-x.ox,K=F.clientY-x.oy,$=40,ct=Math.sqrt(Y*Y+K*K),Tt=ct>$?$/ct:1;x.x=Y*Tt/$,x.y=K*Tt/$,O&&(O.style.transform=`translate(calc(-50% + ${Y*Tt}px), calc(-50% + ${K*Tt}px))`)}if(F.identifier===P.id){const Y=F.clientX-P.lx,K=F.clientY-P.ly;if(o==="overview"){const $=E*1.534*.9/window.innerHeight;m-=Y*$,p+=K*$,m=Math.max(-60,Math.min(60,m)),p=Math.max(-60,Math.min(60,p)),v=!0,(Math.abs(Y)>2||Math.abs(K)>2)&&(u=!0)}else i-=Y*.004,d=Math.max(-.05,Math.min(1,d+K*.003));P.lx=F.clientX,P.ly=F.clientY}}if(T.active&&q.touches.length>=2){const lt=q.touches[0],F=q.touches[1],Y=F.clientX-lt.clientX,K=F.clientY-lt.clientY,$=Math.sqrt(Y*Y+K*K);if(T.dist>0){const ct=T.dist/$;o==="overview"?E=Math.max(14,Math.min(60,E*ct)):o==="third"&&(f=Math.max(Mh,Math.min(Sh,f*ct)))}T.dist=$}}},{passive:!1}),e.addEventListener("touchend",q=>{if(o!=="flat"){q.preventDefault();for(let lt=0;lt<q.changedTouches.length;lt++){const F=q.changedTouches[lt];F.identifier===x.id&&(x.active=!1,x.x=0,x.y=0,x.id=-1,b&&(b.style.display="none")),F.identifier===P.id&&(P.active=!1,P.id=-1,h=!1)}q.touches.length<2&&(T.active=!1,T.dist=0)}},{passive:!1});function w(q){a=tv({x:s.position.x,z:s.position.z},q),l=0,c=!0,v=!1,o==="overview"&&y(q)}function y(q){const lt=document.getElementById("overview-marker");if(!lt)return;const F=new L(q.x,0,q.z);F.project(t),lt.style.left=(F.x*.5+.5)*window.innerWidth+"px",lt.style.top=(-F.y*.5+.5)*window.innerHeight+"px",lt.style.display="block"}function I(q){var $;o=q;const lt=document.getElementById("overview-panel");lt&&(lt.style.display=o==="overview"?"flex":"none");const F=document.getElementById("overview-marker");F&&o!=="overview"&&(F.style.display="none"),(o==="third"||o==="overview")&&(($=document.exitPointerLock)==null||$.call(document)),q!=="third"&&(t.fov=Eh,t.updateProjectionMatrix());const Y="ontouchstart"in window||navigator.maxTouchPoints>0,K=document.getElementById("vjoy-zone");K&&(K.style.display=Y&&(q==="third"||q==="first")?"block":"none"),x.active=!1,x.x=0,x.y=0,b&&(b.style.display="none"),e.style.cursor=o==="overview"?"grab":"pointer",e.style.visibility=o==="flat"?"hidden":"visible",document.querySelectorAll(".vtbtn").forEach(ct=>ct.classList.toggle("active",ct.dataset.view===o))}const H=new L,k=new L,B=new L,Q=new L,Z=new L,st=new L(0,1,0);function J(q){Q.copy(s.position);let lt=!1;if(o==="flat"){if(B.set(0,0,0),(n.KeyW||n.ArrowUp)&&(B.z-=1),(n.KeyS||n.ArrowDown)&&(B.z+=1),(n.KeyA||n.ArrowLeft)&&(B.x-=1),(n.KeyD||n.ArrowRight)&&(B.x+=1),(n.KeyW||n.KeyS||n.KeyA||n.KeyD||n.ArrowUp||n.ArrowDown||n.ArrowLeft||n.ArrowRight)&&c&&(c=!1,a=[]),c&&a.length>0&&B.lengthSq()===0){const K=a[l],$=K.x-s.position.x,ct=K.z-s.position.z,Tt=Math.sqrt($*$+ct*ct);Tt<.25?++l>=a.length&&(c=!1,a=[]):B.set($/Tt,0,ct/Tt)}if(B.lengthSq()>0){B.normalize(),s.position.x+=B.x*Ls*q,s.position.z+=B.z*Ls*q;let $=Math.atan2(B.x,B.z)-s.rotation.y;for(;$>Math.PI;)$-=Math.PI*2;for(;$<-Math.PI;)$+=Math.PI*2;s.rotation.y+=$*Math.min(1,20*q),lt=!0}const Y=Va(Q,s.position);s.position.set(Y.x,0,Y.z),t.position.set(s.position.x,60,s.position.z),t.lookAt(s.position.x,0,s.position.z)}else if(o==="overview"){if(c){const Y=1-Math.exp(-8*q);m+=(s.position.x-m)*Y,p+=(s.position.z-p)*Y,v=!1}else if(!v){const Y=1-Math.exp(-5*q);m+=(s.position.x-m)*Y,p+=(s.position.z-p)*Y}Z.set(m,E,p+1);const F=t.position.distanceTo(Z)>22?20:8;if(t.position.lerp(Z,1-Math.exp(-F*q)),t.lookAt(m,0,p),c&&a.length>0){const Y=a[l],K=Y.x-s.position.x,$=Y.z-s.position.z,ct=Math.sqrt(K*K+$*$);ct<.25?++l>=a.length&&(c=!1,a=[]):(s.position.x+=K/ct*Ls*1.4*q,s.position.z+=$/ct*Ls*1.4*q,s.rotation.y=Math.atan2(K,$),lt=!0)}}else if(o==="third"){const F=gt(q);lt=F.isMoving;const Y=Va(Q,s.position);if(s.position.set(Y.x,0,Y.z),lt&&!h){let D=s.rotation.y-i;for(;D>Math.PI;)D-=Math.PI*2;for(;D<-Math.PI;)D+=Math.PI*2;const Zt=F.fromKeys?5:3;i+=D*Zt*q}const K=St(s.position.x,s.position.z,i,f),$=K<f*.85,ct=s.position.y+1.2;g+=q*12,_+=((lt?1:0)-_)*Math.min(1,8*q);const Tt=Math.sin(g)*.035*_;Z.set(s.position.x-Math.sin(i)*Math.cos(d)*K,ct+Math.sin(d)*K+Tt,s.position.z-Math.cos(i)*Math.cos(d)*K),K<f*.92?t.position.copy(Z):t.position.lerp(Z,1-Math.exp(-14*q)),t.lookAt(s.position.x,ct,s.position.z);const zt=$?sv:lt?iv:Eh;t.fov+=(zt-t.fov)*Math.min(1,6*q),t.updateProjectionMatrix()}else{lt=gt(q).isMoving;const F=Va(Q,s.position);s.position.set(F.x,0,F.z),t.position.set(s.position.x,nv,s.position.z),t.rotation.order="YXZ",t.rotation.set(r,Math.PI+i,0)}return lt}function gt(q){t.getWorldDirection(H),H.y=0,H.normalize(),k.crossVectors(H,st).normalize(),B.set(0,0,0),(n.KeyW||n.ArrowUp)&&B.addScaledVector(H,1),(n.KeyS||n.ArrowDown)&&B.addScaledVector(H,-1),(n.KeyA||n.ArrowLeft)&&B.addScaledVector(k,-1),(n.KeyD||n.ArrowRight)&&B.addScaledVector(k,1),x.active&&(B.addScaledVector(H,-x.y),B.addScaledVector(k,x.x),c&&(c=!1,a=[]));const lt=n.KeyW||n.KeyS||n.KeyA||n.KeyD||n.ArrowUp||n.ArrowDown||n.ArrowLeft||n.ArrowRight,F=lt;if(lt&&c&&(c=!1,a=[]),c&&a.length>0&&B.lengthSq()===0){const Y=a[l],K=Y.x-s.position.x,$=Y.z-s.position.z,ct=Math.sqrt(K*K+$*$);ct<.25?++l>=a.length&&(c=!1,a=[]):B.set(K/ct,0,$/ct)}if(B.lengthSq()>0){B.normalize(),s.position.x+=B.x*Ls*q,s.position.z+=B.z*Ls*q;let K=Math.atan2(B.x,B.z)-s.rotation.y;for(;K>Math.PI;)K-=Math.PI*2;for(;K<-Math.PI;)K+=Math.PI*2;return s.rotation.y+=K*Math.min(1,20*q),{isMoving:!0,fromKeys:F}}return{isMoving:!1,fromKeys:F}}function St(q,lt,F,Y){const K=-Math.sin(F),$=-Math.cos(F);let ct=Y;for(const Tt of Pu){const zt=Rt(q,lt,K,$,Tt);zt>.3&&zt<ct&&(ct=zt-.25)}return Math.max(.8,ct)}function Rt(q,lt,F,Y,K){const $=F===0?1e10:1/F,ct=Y===0?1e10:1/Y,Tt=(K.minX-q)*$,zt=(K.maxX-q)*$,D=(K.minZ-lt)*ct,Zt=(K.maxZ-lt)*ct,Gt=Math.max(Math.min(Tt,zt),Math.min(D,Zt)),ue=Math.min(Math.max(Tt,zt),Math.max(D,Zt));return ue<.001||Gt>ue?1/0:Gt>.001?Gt:1/0}return I(o),{update:J,navigate:w,setMode:I,getMode:()=>o,isDragMoved:()=>u,setNavPath:q=>{a=q,l=0,c=!0}}}function ov(s){const t=document.getElementById("hud-toast");t&&(t.textContent=s,t.classList.add("show"),clearTimeout(t._t),t._t=setTimeout(()=>t.classList.remove("show"),2e3))}function av(s){const t=[];return lv(s,t),cv(s,t),hv(s,t),uv(s,t),dv(s,t),{colliders:t}}const ee={oak:()=>new Bt({color:11565120,roughness:.82,metalness:0}),white:()=>new Bt({color:15789284,roughness:.72,metalness:0}),dark:()=>new Bt({color:3024928,roughness:.62,metalness:.08}),metal:()=>new Bt({color:9474200,roughness:.38,metalness:.8}),chair:()=>new Bt({color:2767456,roughness:.82,metalness:0}),pink:()=>new Bt({color:13656192,roughness:.72,metalness:0}),green:()=>new Bt({color:4761712,roughness:.72,metalness:0}),amber:()=>new Bt({color:15241280,roughness:.72,metalness:0}),blue:()=>new Bt({color:4227264,roughness:.72,metalness:0}),screen:()=>new Bt({color:1054752,emissive:1056832,emissiveIntensity:.6,roughness:.08}),bean:()=>new Bt({color:9453728,roughness:.92,metalness:0}),sofa:()=>new Bt({color:4878400,roughness:.88,metalness:0})};function Rn(s,t,e,n,i,r,o,a,l,c=.12){const h=new wt(new jt(r,o,a),t);return h.position.set(e,n,i),s.add(h),l&&l.push({minX:e-r/2-c,maxX:e+r/2+c,minZ:i-a/2-c,maxZ:i+a/2+c}),h}function Ti(s,t,e,n,i,r,o){const a=o??ee.oak(),l=.76,c=.06,h=l-c,u=.05;Rn(s,a,t,l-c/2,e,n,c,i,r,.1);const d=[t-n/2+.12,t+n/2-.12],f=[e-i/2+.12,e+i/2-.12];d.forEach(g=>f.forEach(_=>{const m=new wt(new Xe(u,u,h,6),ee.metal());m.position.set(g,h/2,_),s.add(m)}))}function gn(s,t,e,n=0,i,r){const o=r??ee.chair(),a=new ri;a.position.set(t,0,e),a.rotation.y=n,s.add(a);const l=new wt(new jt(.5,.07,.5),o);l.position.y=.46,a.add(l);const c=new wt(new jt(.5,.52,.06),o);c.position.set(0,.75,-.22),a.add(c);const h=ee.metal();[[-.2,-.2],[.2,-.2],[-.2,.2],[.2,.2]].forEach(([u,d])=>{const f=new wt(new Xe(.03,.03,.46,5),h);f.position.set(u,.23,d),a.add(f)}),i&&i.push({minX:t-.35,maxX:t+.35,minZ:e-.35,maxZ:e+.35})}function In(s,t,e,n,i=0){const r=new ri;r.position.set(t,e,n),r.rotation.y=i,s.add(r);const o=new wt(new jt(.54,.32,.04),ee.screen());o.position.y=.22,r.add(o);const a=new wt(new Xe(.015,.015,.18,5),ee.metal());a.position.y=.07,r.add(a);const l=new wt(new jt(.22,.02,.14),ee.metal());l.position.y=0,r.add(l)}function Bn(s,t,e){const n=new wt(new Xe(.15,.1,.3,7),ee.amber());n.position.set(t,.15,e),s.add(n);const i=new wt(new Re(.3,8,6),ee.green());i.position.set(t,.55,e),s.add(i)}function lv(s,t){Ti(s,-11,-14,4.5,2,t),gn(s,-11-2.6,-14-.5,0,t),gn(s,-11-2.6,-14+.5,0,t),gn(s,-11+2.6,-14-.5,Math.PI,t),gn(s,-11+2.6,-14+.5,Math.PI,t),gn(s,-11,-14-1.2,Math.PI/2,t,ee.pink()),gn(s,-11,-14+1.2,-Math.PI/2,t,ee.pink());const i=new wt(new jt(5,2.4,.06),new Bt({color:16448248,roughness:.5}));i.position.set(-11,1.8,R.minZ+.1),s.add(i),Rn(s,ee.white(),R.minX+.5,1,-18,.5,2,3,t),Ti(s,R.minX+1.2,-12,2,.8,t),In(s,R.minX+1,.76,-14+1.8,Math.PI/2),In(s,R.minX+1,.76,-14+2.2,Math.PI/2),gn(s,R.minX+2,-12,Math.PI/2,t,ee.pink()),Bn(s,R.minX+.5,R.midZ+.6),Bn(s,-3,R.minZ+.6)}function cv(s,t){[-20,-16,-12,-8].forEach(r=>{Ti(s,R.maxX-1.4,r,1.8,.7,t,ee.white()),In(s,R.maxX-1.1,.76,r-.18,-Math.PI/2),In(s,R.maxX-1.1,.76,r+.18,-Math.PI/2),gn(s,R.maxX-2.5,r,-Math.PI/2,t,ee.blue())}),Rn(s,ee.dark(),7,1.1,R.minZ+.6,.8,2.2,.6,t),Rn(s,ee.dark(),8,1.1,R.minZ+.6,.8,2.2,.6,t),Rn(s,ee.dark(),9,1.1,R.minZ+.6,.8,2.2,.6,t),[-4,-3,-2].forEach(r=>{const o=new wt(new jt(.6,.02,.4),new Bt({color:65348,emissive:65348,emissiveIntensity:3}));o.position.set(11+r,1.6,R.minZ+.32),s.add(o)}),Ti(s,11,-13,3,.75,t),Ti(s,11,-15,3,.75,t),In(s,11-.8,.76,-13),In(s,11,.76,-13),In(s,11+.8,.76,-13),In(s,11-.8,.76,-15,Math.PI),In(s,11,.76,-15,Math.PI),In(s,11+.8,.76,-15,Math.PI),[-1,0,1].forEach(r=>{gn(s,11+r,-14+1.8,Math.PI,t,ee.blue()),gn(s,11+r,-14-1.8,0,t,ee.blue())}),Bn(s,R.maxX-.5,R.midZ+.6),Bn(s,15,R.minZ+.6)}function hv(s,t){const i=new wt(new Xe(1.4,1.4,.06,16),ee.oak());i.position.set(-11,.74,0),s.add(i),t.push({minX:-11-1.6,maxX:-11+1.6,minZ:0-1.6,maxZ:0+1.6});for(let o=0;o<4;o++){const a=o*Math.PI/2+Math.PI/4,l=new wt(new Xe(.04,.04,.74,6),ee.metal());l.position.set(-11+Math.cos(a)*1.1,.37,0+Math.sin(a)*1.1),s.add(l)}for(let o=0;o<6;o++){const a=o/6*Math.PI*2,l=2;gn(s,-11+Math.cos(a)*l,0+Math.sin(a)*l,a+Math.PI,null,ee.amber())}const r=new wt(new jt(3.5,2,.08),ee.screen());r.position.set(-11,2.1,R.minX+.1),r.rotation.y=Math.PI/2,s.add(r),Rn(s,ee.white(),R.minX+.5,.45,0+2.5,.5,.9,2,t),Bn(s,R.minX+.5,R.lobbyZ-.6),Bn(s,-3,R.midZ+.5)}function uv(s,t){Rn(s,ee.sofa(),11-2.5,.44,0+1.5,3.2,.88,1,t,.1),Rn(s,ee.sofa(),11-3.5,.44,0,1,.88,2.2,t,.1),Ti(s,11-1.8,0-.2,1.2,.7,t);const i=ee.bean();for(let l=0;l<3;l++){const c=14+l*1.4,h=new wt(new Re(.42,10,8),i);h.scale.y=.65,h.position.set(c,.28,0),s.add(h),t.push({minX:c-.55,maxX:c+.55,minZ:0-.55,maxZ:0+.55})}const r=new Bt({color:2228292,roughness:.6,metalness:.3});Rn(s,r,R.maxX-1,1.1,0+2.5,.9,2.2,.7,t);const o=new wt(new jt(.55,.44,.04),new Bt({color:2245887,emissive:1127406,emissiveIntensity:1.5}));o.position.set(R.maxX-.72,1.6,0+2.15),s.add(o),Ti(s,11+1.5,0-2.5,1.6,.8,t,ee.dark());const a=new wt(new jt(4,2.2,.08),ee.screen());a.position.set(9,2.3,R.maxX-.1),a.rotation.y=-Math.PI/2,s.add(a),Bn(s,R.maxX-.5,R.lobbyZ-.6),Bn(s,7,R.midZ+.5)}function dv(s,t){const e=(R.lobbyZ+R.maxZ)/2;Rn(s,ee.white(),-8,.9,e-1,3,1.8,.7,t),[6,8,10].forEach(l=>{gn(s,l,e+.5,Math.PI,t,ee.amber())}),Ti(s,8,e+1.8,1.5,.6,t);const n=new wt(new Rl(2.2,32),new Bt({color:2245802,roughness:.4}));n.rotation.x=-Math.PI/2,n.position.set(0,.07,e),s.add(n);const i=document.createElement("canvas");i.width=512,i.height=128;const r=i.getContext("2d");r.fillStyle="#3366ff",r.font="bold 72px Inter, sans-serif",r.textAlign="center",r.fillText("SPACEWORK",256,88);const o=new wt(new oi(4,1),new Bt({map:new jo(i),roughness:.4,transparent:!0}));o.rotation.x=-Math.PI/2,o.position.set(0,.08,e),s.add(o),Bn(s,-5,R.maxZ-1.2),Bn(s,5,R.maxZ-1.2),Rn(s,ee.metal(),0,1,R.lobbyZ+1.5,.4,2,.4,t);const a=new wt(new jt(.38,.28,.04),ee.screen());a.position.set(0,1.9,R.lobbyZ+1.28),s.add(a)}const fv="#0f1117",pv="rgba(34,58,28,0.95)",mv="rgba(230,225,215,0.12)",gv=[{name:"LOBBY",x1:R.minX,x2:R.maxX,z1:R.lobbyZ,z2:R.maxZ,fill:"rgba(180,175,210,0.18)",border:"rgba(180,175,220,0.55)",label:"#ccc"},{name:"OPS",x1:R.minX,x2:R.centerX,z1:R.midZ,z2:R.lobbyZ,fill:"rgba(200,115,20,0.20)",border:"rgba(220,130,30,0.60)",label:"#fa9"},{name:"FUN",x1:R.centerX,x2:R.maxX,z1:R.midZ,z2:R.lobbyZ,fill:"rgba(20,170,90,0.20)",border:"rgba(30,200,100,0.55)",label:"#6fb"},{name:"DESIGN",x1:R.minX,x2:R.centerX,z1:R.minZ,z2:R.midZ,fill:"rgba(190,45,95,0.20)",border:"rgba(220,60,110,0.55)",label:"#f9b"},{name:"ENGINEERING",x1:R.centerX,x2:R.maxX,z1:R.minZ,z2:R.midZ,fill:"rgba(25,90,200,0.20)",border:"rgba(40,120,230,0.55)",label:"#8bf"}],mn=R.doorHalfW,sl=R.mainDoorHalfW,Fs=R.leftDoorX,Bs=R.rightDoorX,_v=[[R.minX,R.maxZ,-sl,R.maxZ],[sl,R.maxZ,R.maxX,R.maxZ],[R.minX,R.minZ,R.maxX,R.minZ],[R.minX,R.minZ,R.minX,R.maxZ],[R.maxX,R.minZ,R.maxX,R.maxZ],[R.minX,R.lobbyZ,Fs-mn,R.lobbyZ],[Fs+mn,R.lobbyZ,Bs-mn,R.lobbyZ],[Bs+mn,R.lobbyZ,R.maxX,R.lobbyZ],[R.minX,R.midZ,Fs-mn,R.midZ],[Fs+mn,R.midZ,Bs-mn,R.midZ],[Bs+mn,R.midZ,R.maxX,R.midZ],[R.centerX,R.minZ,R.centerX,R.lobbyZ]];class vv{constructor(t){this._nav=t,this._peers=new Map;const e=document.createElement("canvas");e.id="flat-map-canvas",Object.assign(e.style,{position:"fixed",inset:"0",width:"100%",height:"100%",zIndex:"6",display:"none",cursor:"crosshair"}),document.body.appendChild(e),this._cvs=e,this._ctx=e.getContext("2d"),this._zoom=14,this._panX=0,this._panZ=-6,this._dragging=!1,this._dragMoved=!1,this._lx=0,this._ly=0,this._ping=null,this._setupMouse(),this._setupTouch(),this._resize(),window.addEventListener("resize",()=>this._resize())}show(){this._cvs.style.display="block"}hide(){this._cvs.style.display="none"}setPeer(t,e,n,i){this._peers.set(t,{x:e,z:n,name:i})}removePeer(t){this._peers.delete(t)}setTalking(t){this._talking=t}update(t){const e=this._cvs.width,n=this._cvs.height,i=this._ctx;i.clearRect(0,0,e,n),this._drawBg(i,e,n),this._drawGrid(i,e,n),this._drawBuilding(i),this._drawRooms(i),this._drawWalls(i),this._drawDoors(i),this._drawPeers(i),this._drawPlayer(i,t),this._drawNavPing(i),this._drawHints(i,e,n)}_fire(t,e){const[n,i]=this._c2w(t,e);this._nav({x:n,z:i}),this._ping={cx:t,cy:e,born:performance.now()}}centreOn(t,e){this._panX=t,this._panZ=e}_w2c(t,e){const n=this._cvs.width/2+(t-this._panX)*this._zoom,i=this._cvs.height/2+(e-this._panZ)*this._zoom;return[n,i]}_c2w(t,e){const n=(t-this._cvs.width/2)/this._zoom+this._panX,i=(e-this._cvs.height/2)/this._zoom+this._panZ;return[n,i]}_wr(t){return t*this._zoom}_setupMouse(){const t=this._cvs;t.addEventListener("wheel",e=>{e.preventDefault();const n=t.getBoundingClientRect(),i=e.clientX-n.left,r=e.clientY-n.top,[o,a]=this._c2w(i,r),l=e.deltaMode===0?e.deltaY:e.deltaY*24,c=Math.pow(.997,l);this._zoom=Math.max(6,Math.min(55,this._zoom*c));const[h,u]=this._c2w(i,r);this._panX+=o-h,this._panZ+=a-u},{passive:!1}),t.addEventListener("mousedown",e=>{this._dragging=!0,this._dragMoved=!1,this._lx=e.clientX,this._ly=e.clientY,t.style.cursor="grabbing"}),document.addEventListener("mousemove",e=>{if(!this._dragging)return;const n=e.clientX-this._lx,i=e.clientY-this._ly;this._panX-=n/this._zoom,this._panZ-=i/this._zoom,this._lx=e.clientX,this._ly=e.clientY,(Math.abs(n)>4||Math.abs(i)>4)&&(this._dragMoved=!0)}),document.addEventListener("mouseup",e=>{if(!this._dragging||(this._dragging=!1,t.style.cursor="crosshair",this._dragMoved))return;const n=t.getBoundingClientRect();this._fire(e.clientX-n.left,e.clientY-n.top)})}_setupTouch(){const t=this._cvs;let e=0,n=0,i=!1,r=0;t.addEventListener("touchstart",o=>{if(o.preventDefault(),i=!1,o.touches.length===1)e=o.touches[0].clientX,n=o.touches[0].clientY,this._lx=e,this._ly=n;else if(o.touches.length===2){const a=o.touches[1].clientX-o.touches[0].clientX,l=o.touches[1].clientY-o.touches[0].clientY;r=Math.sqrt(a*a+l*l)}},{passive:!1}),t.addEventListener("touchmove",o=>{if(o.preventDefault(),o.touches.length===1){const a=o.touches[0].clientX-this._lx,l=o.touches[0].clientY-this._ly;this._panX-=a/this._zoom,this._panZ-=l/this._zoom,this._lx=o.touches[0].clientX,this._ly=o.touches[0].clientY,(Math.abs(a)>4||Math.abs(l)>4)&&(i=!0)}else if(o.touches.length===2){const a=o.touches[1].clientX-o.touches[0].clientX,l=o.touches[1].clientY-o.touches[0].clientY,c=Math.sqrt(a*a+l*l),h=c/(r||c),u=(o.touches[0].clientX+o.touches[1].clientX)/2,d=(o.touches[0].clientY+o.touches[1].clientY)/2,[f,g]=this._c2w(u,d);this._zoom=Math.max(6,Math.min(55,this._zoom*h));const[_,m]=this._c2w(u,d);this._panX+=f-_,this._panZ+=g-m,r=c,i=!0}},{passive:!1}),t.addEventListener("touchend",o=>{if(o.touches.length===0&&!i&&o.changedTouches.length===1){const a=t.getBoundingClientRect();this._fire(o.changedTouches[0].clientX-a.left,o.changedTouches[0].clientY-a.top)}},{passive:!1})}_resize(){this._cvs.width=window.innerWidth,this._cvs.height=window.innerHeight}_drawBg(t,e,n){t.fillStyle=fv,t.fillRect(0,0,e,n)}_drawGrid(t,e,n){const i=this._zoom*4;if(i<10)return;t.strokeStyle="rgba(255,255,255,0.04)",t.lineWidth=1;const r=(e/2-this._panX*this._zoom)%i;for(let a=r;a<e;a+=i)t.beginPath(),t.moveTo(a,0),t.lineTo(a,n),t.stroke();const o=(n/2-this._panZ*this._zoom)%i;for(let a=o;a<n;a+=i)t.beginPath(),t.moveTo(0,a),t.lineTo(e,a),t.stroke()}_drawBuilding(t){const[e,n]=this._w2c(R.minX-20,R.minZ-20),[i,r]=this._w2c(R.maxX+20,R.maxZ+20);t.fillStyle=pv,t.fillRect(Math.min(e,i),Math.min(n,r),Math.abs(i-e),Math.abs(r-n));const[o,a]=this._w2c(R.minX,R.maxZ),[l,c]=this._w2c(R.maxX,R.minZ);t.fillStyle=mv,t.fillRect(Math.min(o,l),Math.min(a,c),Math.abs(l-o),Math.abs(c-a))}_drawRooms(t){gv.forEach(e=>{const[n,i]=this._w2c(e.x1,e.z2),[r,o]=this._w2c(e.x2,e.z1),a=Math.min(n,r),l=Math.min(i,o),c=Math.abs(r-n),h=Math.abs(o-i);t.fillStyle=e.fill,t.fillRect(a,l,c,h),t.strokeStyle=e.border,t.lineWidth=1.5,t.strokeRect(a+1,l+1,c-2,h-2),c>50&&h>30&&(t.fillStyle=e.label,t.font=`bold ${Math.max(9,Math.min(13,c*.11))}px Inter, monospace`,t.textAlign="center",t.textBaseline="middle",t.shadowColor="rgba(0,0,0,0.8)",t.shadowBlur=4,t.fillText(e.name,a+c/2,l+h/2),t.shadowBlur=0)})}_drawWalls(t){t.strokeStyle="#4a4a6a",t.lineWidth=Math.max(2,this._wr(R.wallT)*.8),t.lineCap="round",_v.forEach(([e,n,i,r])=>{const[o,a]=this._w2c(e,n),[l,c]=this._w2c(i,r);t.beginPath(),t.moveTo(o,a),t.lineTo(l,c),t.stroke()})}_drawDoors(t){const e=[{x:0,z:R.maxZ,w:sl*2},{x:Fs,z:R.lobbyZ,w:mn*2},{x:Bs,z:R.lobbyZ,w:mn*2},{x:Fs,z:R.midZ,w:mn*2},{x:Bs,z:R.midZ,w:mn*2}];t.strokeStyle="rgba(255,220,100,0.60)",t.lineWidth=Math.max(3,this._wr(R.wallT)*.9),t.lineCap="square",e.forEach(n=>{const[i,r]=this._w2c(n.x,n.z),o=this._wr(n.w/2);Math.abs(n.z-R.maxZ)<.1||Math.abs(n.z-R.lobbyZ)<.1||Math.abs(n.z-R.midZ)<.1?(t.beginPath(),t.moveTo(i-o,r),t.lineTo(i+o,r),t.stroke()):(t.beginPath(),t.moveTo(i,r-o),t.lineTo(i,r+o),t.stroke())})}_drawPeers(t){const e=performance.now()/1e3;this._peers.forEach(({x:n,z:i,name:r},o)=>{var u;const[a,l]=this._w2c(n,i),c=Math.max(5,this._wr(.4)),h=(u=this._talking)==null?void 0:u.has(o);if(h){const d=.5+Math.sin(e*6)*.5,f=c+4+d*4;t.beginPath(),t.arc(a,l,f,0,Math.PI*2),t.strokeStyle=`rgba(0,255,136,${.6+d*.4})`,t.lineWidth=2.5,t.shadowColor="#00ff88",t.shadowBlur=10,t.stroke(),t.shadowBlur=0}t.beginPath(),t.arc(a,l,c,0,Math.PI*2),t.fillStyle=h?"rgba(0,255,120,0.9)":"rgba(255,120,150,0.85)",t.fill(),t.strokeStyle=h?"#00ff88":"#ff88aa",t.lineWidth=1.5,t.stroke(),c>5&&(t.fillStyle="#fff",t.font=`bold ${Math.max(8,c*1.1)}px Inter,monospace`,t.textAlign="center",t.textBaseline="bottom",t.shadowColor="#000",t.shadowBlur=3,t.fillText(r,a,l-c-2),t.shadowBlur=0)})}_drawPlayer(t,e){var h;const[n,i]=this._w2c(e.x,e.z),r=Math.max(6,this._wr(.45)),o=performance.now()/600,a=r+Math.sin(o)*r*.35,l=(h=this._talking)==null?void 0:h.has("self"),c=performance.now()/1e3;if(l){const u=.5+Math.sin(c*6)*.5,d=r+5+u*5;t.beginPath(),t.arc(n,i,d,0,Math.PI*2),t.strokeStyle=`rgba(0,255,136,${.7+u*.3})`,t.lineWidth=3,t.shadowColor="#00ff88",t.shadowBlur=14,t.stroke(),t.shadowBlur=0}else t.beginPath(),t.arc(n,i,a,0,Math.PI*2),t.strokeStyle="rgba(0,255,255,0.25)",t.lineWidth=2,t.stroke();t.shadowColor=l?"#00ff88":"#00ffff",t.shadowBlur=10,t.beginPath(),t.arc(n,i,r,0,Math.PI*2),t.fillStyle=l?"#00ff88":"#00e5ff",t.fill(),t.shadowBlur=0,t.fillStyle="#fff",t.font=`bold ${Math.max(9,r*1.2)}px Inter,monospace`,t.textAlign="center",t.textBaseline="bottom",t.shadowColor="#000",t.shadowBlur=3,t.fillText("YOU",n,i-r-3),t.shadowBlur=0}_drawNavPing(t){if(!this._ping)return;const e=performance.now()-this._ping.born,n=600;if(e>n){this._ping=null;return}const i=e/n,r=1-i,o=8+i*18,{cx:a,cy:l}=this._ping;t.globalAlpha=r,t.strokeStyle="#ffffff",t.lineWidth=2;const c=6;t.beginPath(),t.moveTo(a-c,l),t.lineTo(a+c,l),t.moveTo(a,l-c),t.lineTo(a,l+c),t.stroke(),t.strokeStyle="#00ffff",t.lineWidth=1.5,t.beginPath(),t.arc(a,l,o,0,Math.PI*2),t.stroke(),t.globalAlpha=1}_drawHints(t,e,n){t.fillStyle="rgba(255,255,255,0.22)",t.font="11px Inter, monospace",t.textAlign="center",t.textBaseline="bottom",t.fillText("Click to walk  ·  Scroll to zoom  ·  Drag to pan  ·  WASD to move",e/2,n-8)}}const Lo=s=>"#"+s.toString(16).padStart(6,"0");class xv{constructor(t){this._onSelect=t,this._selected=parseInt(localStorage.getItem("spaceAvatarId")??"0",10),this._el=this._build(),document.body.appendChild(this._el)}show(){this._el.classList.remove("ap-hidden"),this._sync()}hide(){this._el.classList.add("ap-hidden")}getSelected(){return this._selected}_build(){const t=document.createElement("div");return t.id="avatar-picker",t.className="ap-hidden",t.innerHTML=`
      <div class="ap-panel">
        <div class="ap-head">
          <span class="ap-title">Choose Your Avatar</span>
          <button class="ap-close" aria-label="Close">✕</button>
        </div>
        <div class="ap-grid">
          ${is.map(e=>this._card(e)).join("")}
        </div>
        <p class="ap-hint">Your selection is saved automatically</p>
      </div>
    `,t.querySelector(".ap-close").addEventListener("click",()=>this.hide()),t.addEventListener("click",e=>{e.target===t&&this.hide()}),t.querySelectorAll(".ap-card").forEach(e=>{e.addEventListener("click",()=>{const n=parseInt(e.dataset.id,10);this._selected=n,localStorage.setItem("spaceAvatarId",String(n)),this._sync(),this._onSelect(n)})}),t}_sync(){this._el.querySelectorAll(".ap-card").forEach(t=>t.classList.toggle("ap-active",parseInt(t.dataset.id,10)===this._selected))}_card(t){const e=Lo(t.skin),n=Lo(t.hair),i=Lo(t.outfit),r=Lo(t.accent);return`
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
    `}}const yv=[{name:"OUTSIDE",color:"#88cc66",mapColor:"rgba(70,120,50,0.35)",border:"#66aa44",desc:"Outside the building"},{name:"LOBBY",color:"#ffffff",mapColor:"rgba(200,200,230,0.40)",border:"#aaaacc",desc:"Reception & Entrance"},{name:"OPS",color:"#ffaa44",mapColor:"rgba(200,120,20,0.40)",border:"#ffaa44",desc:"Operations & Support"},{name:"FUN",color:"#44ffaa",mapColor:"rgba(20,180,100,0.40)",border:"#44ffaa",desc:"Chill & Social"},{name:"DESIGN",color:"#ff6ba0",mapColor:"rgba(200,50,100,0.40)",border:"#ff6ba0",desc:"UI/UX & 3D Design"},{name:"ENGINEERING",color:"#44aaff",mapColor:"rgba(30,100,200,0.40)",border:"#44aaff",desc:"Development & Code"}],oe={minX:-26,maxX:26,minZ:-27,maxZ:28,W:180,H:200};let Mr,En;function Mv(s,t,e,n,i){const r=window._spaceUsername||"You",o=parseInt(localStorage.getItem("spaceAvatarId")??"0",10),a=Su(r,o);a.position.set(0,0,22),s.add(a);const l=new xv(b=>{bu(a,r,b),i==null||i(b)}),c=document.getElementById("avatar-btn");c&&c.addEventListener("click",()=>l.show());const{colliders:h}=av(s);J_(h);const u=rv(a,t,e.domElement),d=new Mu;let f="",g=u.getMode();const _=new vv(b=>u.navigate(b)),m=[],p=[];s.traverse(b=>{b.userData.mapHide&&m.push(b),b.userData.mapShow&&p.push(b)}),m.forEach(b=>{b.visible=!1}),p.forEach(b=>{b.visible=!1}),_.centreOn(a.position.x,a.position.z),_.show();const E=document.getElementById("minimap");E&&(E.style.display="none");function v(b){m.forEach(w=>{w.visible=b!=="overview"&&b!=="flat"}),p.forEach(w=>{w.visible=b==="overview"}),a.visible=b!=="first",b==="flat"?(_.centreOn(a.position.x,a.position.z),_.show()):_.hide();const O=document.getElementById("minimap");O&&(O.style.display=b==="flat"?"none":"")}Sv(u);function x(){const b=Vo(a.position);b!==f&&(f=b,n==null||n(f))}function P(){const b=document.getElementById("mode-badge");if(!b)return;const O=u.getMode(),w={flat:"🎮 FLAT MAP",overview:"🗺 3D MAP",third:"👤 3RD PERSON",first:"👁 1ST PERSON"};b.textContent=w[O]??O;const y=O==="flat"||O==="overview";b.style.background=y?"rgba(255,160,0,0.2)":"rgba(0,100,255,0.2)",b.style.borderColor=y?"rgba(255,160,0,0.4)":"rgba(0,150,255,0.4)",b.style.color=y?"#ffaa00":"#4af"}function T(){requestAnimationFrame(T);const b=d.getDelta(),O=u.update(b);Au(a,O,b),x(),P();const w=u.getMode();w!==g&&(g=w,v(w)),bv(a.position,w),w==="flat"&&_.update(a.position)}return T(),{getPosition:()=>a.position.clone(),getRotation:()=>a.rotation.clone(),navigate:b=>u.navigate(b),isDragMoved:()=>u.isDragMoved(),getMode:()=>u.getMode(),setView:b=>{u.setMode(b),v(b)},setStatus:b=>Eu(a,b),setSelfTalking:(b,O)=>wu(a,b,O),setTalkingPeers:b=>_.setTalking(b),peerJoin:(b,O)=>_.setPeer(b,0,0,O),peerMove:(b,O,w,y)=>_.setPeer(b,O,w,y),peerLeave:b=>_.removePeer(b)}}function Sv(s,t){const e=document.getElementById("minimap-canvas");e&&(e.style.cursor="crosshair",e.addEventListener("click",n=>{const i=e.getBoundingClientRect(),r=(n.clientX-i.left)/i.width*oe.W,o=(n.clientY-i.top)/i.height*oe.H,a=oe.minX+r/oe.W*(oe.maxX-oe.minX),l=oe.maxZ-o/oe.H*(oe.maxZ-oe.minZ);s.navigate({x:a,z:l}),Ev(r,o)}))}function Ev(s,t){En&&(En.strokeStyle="#fff",En.lineWidth=1.5,En.globalAlpha=.9,En.beginPath(),En.arc(s,t,7,0,Math.PI*2),En.stroke(),En.globalAlpha=1)}function wv(){Mr=document.getElementById("minimap-canvas"),Mr&&(Mr.width=oe.W,Mr.height=oe.H,En=Mr.getContext("2d"))}function Is(s,t){const e=(s-oe.minX)/(oe.maxX-oe.minX)*oe.W,n=(oe.maxZ-t)/(oe.maxZ-oe.minZ)*oe.H;return[e,n]}function bv(s,t){if(!En){wv();return}const e=En;e.clearRect(0,0,oe.W,oe.H),e.fillStyle="rgba(50,90,40,0.5)",e.fillRect(0,0,oe.W,oe.H);const[n,i]=Is(R.minX,R.maxZ),[r,o]=Is(R.maxX,R.minZ);e.fillStyle="rgba(240,235,225,0.25)",e.fillRect(n,i,r-n,o-i),[{name:"LOBBY",x1:R.minX,x2:R.maxX,z1:R.lobbyZ,z2:R.maxZ},{name:"OPS",x1:R.minX,x2:R.centerX,z1:R.midZ,z2:R.lobbyZ},{name:"FUN",x1:R.centerX,x2:R.maxX,z1:R.midZ,z2:R.lobbyZ},{name:"DESIGN",x1:R.minX,x2:R.centerX,z1:R.minZ,z2:R.midZ},{name:"ENGINEERING",x1:R.centerX,x2:R.maxX,z1:R.minZ,z2:R.midZ}].forEach(u=>{const d=yv.find(v=>v.name===u.name);if(!d)return;const[f,g]=Is(u.x1,u.z2),[_,m]=Is(u.x2,u.z1);e.fillStyle=d.mapColor,e.fillRect(f,g,_-f,m-g),e.strokeStyle=d.border+"88",e.lineWidth=1,e.strokeRect(f+.5,g+.5,_-f-1,m-g-1),e.fillStyle=d.border,e.font="bold 7px Inter, monospace",e.textAlign="center";const p=(f+_)/2,E=g+10;e.fillText(u.name,p,E)}),[{x:0,z:R.maxZ,label:"🚪"},{x:-11,z:R.lobbyZ,label:"▶"},{x:11,z:R.lobbyZ,label:"▶"},{x:-11,z:R.midZ,label:"▶"},{x:11,z:R.midZ,label:"▶"}].forEach(({x:u,z:d,label:f})=>{const[g,_]=Is(u,d);e.fillStyle="rgba(255,255,255,0.7)",e.font="8px sans-serif",e.textAlign="center",e.fillText(f,g,_+3)}),e.strokeStyle="rgba(220,210,190,0.5)",e.lineWidth=1.5,e.strokeRect(n,i,r-n,o-i),t==="overview"&&(e.strokeStyle="rgba(255,160,0,0.7)",e.lineWidth=2,e.strokeRect(2,2,oe.W-4,oe.H-4),e.fillStyle="rgba(255,160,0,0.06)",e.fillRect(2,2,oe.W-4,oe.H-4));const[c,h]=Is(s.x,s.z);e.shadowColor="#00ffff",e.shadowBlur=8,e.fillStyle="#00ffff",e.beginPath(),e.arc(c,h,5,0,Math.PI*2),e.fill(),e.shadowBlur=0,e.fillStyle="#fff",e.font="bold 7px Inter, monospace",e.textAlign="center",e.shadowColor="#0ff",e.shadowBlur=4,e.fillText("YOU",c,h-8),e.shadowBlur=0,e.fillStyle="rgba(255,255,255,0.28)",e.font="7px Inter, monospace",e.textAlign="center",e.fillText("click map to move",oe.W/2,oe.H-4)}function Tv(){const s=document.getElementById("screen-overlay"),t=document.getElementById("screen-iframe"),e=document.getElementById("screen-overlay-close"),n=document.getElementById("screen-overlay-title"),i=document.getElementById("screen-overlay-tool"),r=document.getElementById("screen-overlay-zone");if(!s)return console.warn("[screenOverlay] #screen-overlay not found in DOM"),{openScreen:()=>{},closeScreen:()=>{},isOpen:()=>!1};e.addEventListener("click",a),s.addEventListener("click",c=>{c.target===s&&a()}),document.addEventListener("keydown",c=>{c.code==="Escape"&&s.classList.contains("visible")&&(a(),c.stopPropagation())},!0);function o(c){var h;if(n.textContent=c.label,i.textContent=c.tool,r){r.textContent=c.zone;const u={BRIDGE:"#4466ff",LAB:"#00ffcc",LOUNGE:"#aa55ff"};r.style.color=u[c.zone]||"#fff"}t.src=c.url,s.classList.add("visible"),(h=document.exitPointerLock)==null||h.call(document)}function a(){s.classList.remove("visible"),setTimeout(()=>{t.src=""},200)}function l(){return s.classList.contains("visible")}return{openScreen:o,closeScreen:a,isOpen:l}}function wh(...s){const t=s.join("\0");let e=5381;for(let n=0;n<t.length;n++)e=(Math.imul(33,e)^t.charCodeAt(n))>>>0;return e.toString(36).padStart(7,"0")}class Wo{constructor(t,e=0){this.id=wh(t,String(e)),this.seed=t,this.epoch=e,this.resonance=1}tick(){return this.epoch++,this}harmonisesWith(t,e=.51){return this.resonance>=e&&t.resonance>=e}static merge(t,e){const[n,i]=t.id<e.id?[t,e]:[e,t];return new Wo(wh(n.id,i.id),Math.max(n.epoch,i.epoch))}toString(){return`freq:${this.id}@${this.epoch}`}}class Dl{constructor(t={}){this._v=new Map(Object.entries(t))}tick(t){return this._v.set(t,(this._v.get(t)||0)+1),this}get(t){return this._v.get(t)||0}merge(t){for(const[e,n]of t._v)this._v.set(e,Math.max(this.get(e),n));return this}clone(){return new Dl(Object.fromEntries(this._v))}compare(t){const e=new Set([...this._v.keys(),...t._v.keys()]);let n=!1,i=!1;for(const r of e){const o=this.get(r),a=t.get(r);o<a&&(n=!0),o>a&&(i=!0)}return!n&&!i?"equal":n&&!i?"before":!n&&i?"after":"concurrent"}happensBefore(t){return this.compare(t)==="before"}toJSON(){return Object.fromEntries(this._v)}}class Nl{constructor(){this._entries=new Map}set(t,e,n,i){const r=this._entries.get(t);if(!r)return this._entries.set(t,{value:e,clock:n.clone(),nodeId:i}),!0;const o=n.compare(r.clock);return o==="after"||o==="concurrent"&&i>r.nodeId?(this._entries.set(t,{value:e,clock:n.clone(),nodeId:i}),!0):!1}get(t){var e;return(e=this._entries.get(t))==null?void 0:e.value}has(t){return this._entries.has(t)}keys(){return this._entries.keys()}entries(){return[...this._entries.entries()].map(([t,e])=>[t,e.value])}merge(t){for(const[e,{value:n,clock:i,nodeId:r}]of t._entries)this.set(e,n,i,r);return this}clone(){const t=new Nl;for(const[e,n]of this._entries)t._entries.set(e,{...n,clock:n.clock.clone()});return t}size(){return this._entries.size}}class bh{constructor(t){this.frequency=t,this.state=new Nl,this.clock=new Dl,this.nodes=new Set,this.createdAt=Date.now()}enter(t){this.nodes.add(t),this.clock.tick(t)}exit(t){this.nodes.delete(t)}update(t,e,n){return this.clock.tick(t),this.state.set(e,n,this.clock.clone(),t)}get(t){return this.state.get(t)}merge(t){this.state.merge(t.state),this.clock.merge(t.clock);for(const e of t.nodes)this.nodes.add(e);return this}consistency(t){return this.clock.compare(t.clock)}snapshot(){return{frequency:this.frequency.toString(),nodeCount:this.nodes.size,stateSize:this.state.size(),epoch:this.frequency.epoch,clock:this.clock.toJSON()}}}function Io(...s){const t=s.join("|");let e=5381;for(let n=0;n<t.length;n++)e=(Math.imul(33,e)^t.charCodeAt(n))>>>0;return e.toString(36)}var be,jn,Pi,rl,ol;class Av{constructor(t,e=""){ut(this,Pi);ut(this,be,new Map);ut(this,jn);yt(this,jn,t),A(this,be).set(t,{id:t,publicKey:e,vouchedBy:null,chainDepth:0,chainHash:Io(t),votes:new Set([t]),joinedAt:Date.now()})}get rootId(){return A(this,jn)}vouch(t,e,n=""){if(!this.isVerified(t))throw new Error(`Voucher "${t}" is not a verified member`);if(A(this,be).has(e))throw new Error(`"${e}" is already in the network`);const i=A(this,be).get(t);return A(this,be).set(e,{id:e,publicKey:n,vouchedBy:t,chainDepth:i.chainDepth+1,chainHash:Io(e,i.chainHash),votes:new Set([t]),joinedAt:Date.now()}),this.getMember(e)}vote(t,e){if(!this.isVerified(t))throw new Error(`Voter "${t}" is not verified`);if(!A(this,be).has(e))throw new Error(`"${e}" not found`);A(this,be).get(e).votes.add(t)}revokeVote(t,e){var n;(n=A(this,be).get(e))==null||n.votes.delete(t)}remove(t){const e=[];return Ct(this,Pi,rl).call(this,t,e),e}isVerified(t){if(t===A(this,jn))return!0;const e=new Set;let n=t;for(;n!==A(this,jn);){if(e.has(n))return!1;e.add(n);const i=A(this,be).get(n);if(!(i!=null&&i.vouchedBy))return!1;n=i.vouchedBy}return!0}isActive(t){if(t===A(this,jn))return!0;if(!this.isVerified(t))return!1;const e=A(this,be).get(t),n=Ct(this,Pi,ol).call(this),i=Math.floor(n.size/2)+1;return[...e.votes].filter(o=>n.has(o)).length>=i}trustScore(t){if(!this.isVerified(t))return 0;const e=A(this,be).get(t),n=Ct(this,Pi,ol).call(this);return n.size===0?0:[...e.votes].filter(r=>n.has(r)).length/n.size}depth(t){var e;return((e=A(this,be).get(t))==null?void 0:e.chainDepth)??-1}getMember(t){return A(this,be).get(t)??null}getAll(){return[...A(this,be).values()]}size(){return A(this,be).size}validateIntegrity(){for(const[t,e]of A(this,be)){if(t===A(this,jn)){if(e.chainHash!==Io(t))return!1;continue}const n=A(this,be).get(e.vouchedBy);if(!n)return!1;const i=Io(t,n.chainHash);if(e.chainHash!==i)return!1}return!0}}be=new WeakMap,jn=new WeakMap,Pi=new WeakSet,rl=function(t,e){if(A(this,be).has(t)){e.push(t),A(this,be).delete(t);for(const[n,i]of A(this,be))i.vouchedBy===t&&Ct(this,Pi,rl).call(this,n,e)}},ol=function(){const t=new Set;for(const e of A(this,be).keys())this.isVerified(e)&&t.add(e);return t};class Rv{constructor(t,e=""){this.id=t,this.publicKey=e,this.realities=new Map,this.neighbors=new Set,this.position={x:0,y:0,z:0},this.meta={}}tune(t){return t.enter(this.id),this.realities.set(t.frequency.id,t),this}detune(t){const e=this.realities.get(t);return e&&(e.exit(this.id),this.realities.delete(t)),this}bridge(t,e){return this.tune(t),this.tune(e),this}isIn(t){return this.realities.has(t)}moveTo(t,e,n,i){this.position={x:t,y:e,z:n};const r=this.realities.get(i);r&&r.update(this.id,`pos:${this.id}`,{x:t,y:e,z:n})}connect(t){this.neighbors.add(t)}disconnect(t){this.neighbors.delete(t)}}var Rr,al;class Cv{constructor(){ut(this,Rr);this.nodes=new Map,this.realities=new Map,this._msgLog=[]}createReality(t,e=0){const n=new Wo(t.id,e),i=new bh(n),r=new Av(t.id,t.publicKey);return this.realities.set(n.id,{reality:i,trust:r}),this.addNode(t),t.tune(i),{reality:i,trust:r,frequency:n}}addNode(t){this.nodes.set(t.id,t)}getNode(t){return this.nodes.get(t)??null}joinReality(t,e,n){const i=this.realities.get(e);if(!i)throw new Error(`Reality "${e}" does not exist`);const{reality:r,trust:o}=i;return o.vouch(n,t.id,t.publicKey),this.addNode(t),t.tune(r),t}route(t,e,n){if(t===e)return[t];const i=this.realities.get(n);if(!i)return null;const{trust:r}=i,o=Ct(this,Rr,al).call(this,t,r),a=Ct(this,Rr,al).call(this,e,r);if(!o||!a)return null;const l=new Set(o);let c;for(const d of a)if(l.has(d)){c=d;break}if(!c)return null;const h=o.slice(0,o.indexOf(c)+1),u=a.slice(0,a.indexOf(c)).reverse();return[...h,...u]}send(t,e,n,i){const r=this.route(t,e,n);if(!r)return{delivered:!1,reason:"no-route"};const o=this.realities.get(n);o&&o.reality.update(t,`msg:${Date.now()}:${t}→${e}`,i);const a={from:t,to:e,hops:r,payload:i,ts:Date.now()};return this._msgLog.push(a),{delivered:!0,hops:r.length,route:r}}gossip(t,e,n,i,r=6){const o=this.nodes.get(t),a=this.realities.get(e);if(!o||!a)return 0;const{reality:l}=a,c=new Set;let h=0;const u=(d,f)=>{if(c.has(d)||f<=0)return;c.add(d);const g=this.nodes.get(d);if(!(!g||!g.isIn(e))){l.update(d,n,i),h++;for(const _ of g.neighbors)u(_,f-1)}};return u(t,r),h}propose(t,e,n,i){const r=this.realities.get(e);if(!r)return{passed:!1,reason:"unknown-reality"};const{reality:o,trust:a}=r,l=a.getAll().filter(d=>a.isVerified(d.id)),c=l.filter(d=>{const f=this.nodes.get(d.id);return f&&i(f,a)}),h=Math.floor(l.length/2)+1;return{passed:c.length>=h,motion:n,proposer:t,total:l.length,yesVotes:c.length,needed:h,voters:c.map(d=>d.id)}}mergeRealities(t,e){const n=this.realities.get(t),i=this.realities.get(e);if(!n||!i)return null;if(!n.reality.frequency.harmonisesWith(i.reality.frequency))return{merged:!1,reason:"insufficient-resonance"};const r=Wo.merge(n.reality.frequency,i.reality.frequency),o=new bh(r);o.merge(n.reality),o.merge(i.reality);const a=n.trust;try{a.vouch(n.trust.rootId,i.trust.rootId,"")}catch{}this.realities.set(r.id,{reality:o,trust:a});for(const l of this.nodes.values())(l.isIn(t)||l.isIn(e))&&(l.detune(t),l.detune(e),l.tune(o));return{merged:!0,frequency:r,reality:o}}nodesIn(t){return[...this.nodes.values()].filter(e=>e.isIn(t))}bridges(){return[...this.nodes.values()].filter(t=>t.realities.size>1)}stats(){return{totalNodes:this.nodes.size,totalRealities:this.realities.size,bridgeNodes:this.bridges().length,messageCount:this._msgLog.length}}}Rr=new WeakSet,al=function(t,e){var o;const n=[];let i=t;const r=new Set;for(;i;){if(r.has(i))return null;r.add(i),n.push(i),i=((o=e.getMember(i))==null?void 0:o.vouchedBy)??null}return n};const Ds=Object.freeze({PUBLIC:"public",INVITE:"invite",PRIVATE:"private"});function Th(){return Math.random().toString(36).slice(2,9).toUpperCase()}class Pv{constructor(t,e,{targetId:n=null,ttlMs:i=864e5,maxUses:r=1}={}){this.id=`INV-${Th()}-${Th()}`,this.issuerId=t,this.frequencyId=e,this.targetId=n,this.expiresAt=Date.now()+i,this.maxUses=r,this.uses=0,this.claimedBy=[]}get expired(){return Date.now()>this.expiresAt}get exhausted(){return this.uses>=this.maxUses}get active(){return!this.expired&&!this.exhausted}isValidFor(t){return!(this.expired||this.exhausted||this.targetId&&this.targetId!==t)}claim(t){return this.isValidFor(t)?(this.uses++,this.claimedBy.push(t),!0):!1}}var Cr,Pr,Vs,Zi,Xo,Iu;class Lv{constructor(){ut(this,Xo);ut(this,Cr,new Map);ut(this,Pr,new Map);ut(this,Vs,new Map);ut(this,Zi,new Map)}setNode(t,e){A(this,Cr).set(t,e)}getNode(t){return A(this,Cr).get(t)??Ds.PUBLIC}setReality(t,e){A(this,Pr).set(t,e)}getReality(t){return A(this,Pr).get(t)??Ds.PUBLIC}issueInvite(t,e,n={}){const i=new Pv(t,e,n);return A(this,Vs).set(i.id,i),i}getToken(t){return A(this,Vs).get(t)??null}claimInvite(t,e){const n=A(this,Vs).get(t);return n?n.expired?{success:!1,reason:"token-expired"}:n.exhausted?{success:!1,reason:"token-exhausted"}:n.isValidFor(e)?(n.claim(e),A(this,Zi).has(e)||A(this,Zi).set(e,new Set),A(this,Zi).get(e).add(n.frequencyId),{success:!0,frequencyId:n.frequencyId}):{success:!1,reason:"token-not-for-you"}:{success:!1,reason:"token-not-found"}}hasGrant(t,e){var n;return((n=A(this,Zi).get(t))==null?void 0:n.has(e))??!1}canSee(t,e,n){var r;if(t===e)return!0;const i=this.getNode(e);if(i===Ds.PUBLIC||Ct(this,Xo,Iu).call(this,t,e,n))return!0;if(i===Ds.PRIVATE)return!1;for(const[o]of((r=n.getNode(e))==null?void 0:r.realities)??[])if(this.hasGrant(t,o))return!0;return!1}perceptionOf(t,e,n){return this.canSee(t,e,n)?"full":this.getNode(e)===Ds.INVITE?"blurred":"hidden"}buildMapFor(t,e){const n=[],i=[],r=new Set;for(const o of e.nodes.values()){const a=this.perceptionOf(t,o.id,e);a!=="hidden"&&(r.add(o.id),n.push({id:o.id,perception:a,visibility:this.getNode(o.id),realities:[...o.realities.keys()],isBridge:o.realities.size>1,isMe:o.id===t,position:o.position}))}for(const{reality:o,trust:a}of e.realities.values())for(const l of a.getAll())l.vouchedBy&&r.has(l.id)&&r.has(l.vouchedBy)&&i.push({from:l.vouchedBy,to:l.id,type:"trust"});for(const o of e.nodes.values())for(const a of o.neighbors)r.has(o.id)&&r.has(a)&&o.id<a&&i.push({from:o.id,to:a,type:"neighbor"});return{nodes:n,edges:i}}}Cr=new WeakMap,Pr=new WeakMap,Vs=new WeakMap,Zi=new WeakMap,Xo=new WeakSet,Iu=function(t,e,n){const i=n.getNode(t),r=n.getNode(e);if(!i||!r)return!1;for(const[o]of i.realities){if(!r.isIn(o))continue;const a=n.realities.get(o);if(a!=null&&a.trust.isVerified(t)&&(a!=null&&a.trust.isVerified(e)))return!0}return!1};const Ah=[{fill:"rgba(30,80,200,0.09)",border:"#4466ff",glow:"#2255dd"},{fill:"rgba(0,160,120,0.09)",border:"#00ffcc",glow:"#00ccaa"},{fill:"rgba(130,20,220,0.09)",border:"#aa55ff",glow:"#8833dd"},{fill:"rgba(200,100,0,0.09)",border:"#ff9900",glow:"#dd7700"},{fill:"rgba(0,160,200,0.09)",border:"#00ccff",glow:"#00aadd"}],Zn={me:"#00ffff",public:"#4488ff",invite:"#ffaa00",private:"#666688",blurred:"#333355"};class Iv{constructor(t,e,n){this.canvas=t,this.ctx=t.getContext("2d"),this.vis=e,this.myId=n,this._nodes=[],this._edges=[],this._realityGroups=new Map,this._pan={x:0,y:0},this._zoom=1,this._drag=!1,this._lastMouse={x:0,y:0},this._selected=null,this._raf=null,this._settled=0,this._onSelect=null,this._bindEvents()}load(t){const{nodes:e,edges:n}=t,i=this.canvas.width,r=this.canvas.height,o=new Map(this._nodes.map(l=>[l.id,l]));this._nodes=e.map(l=>{if(o.has(l.id))return{...o.get(l.id),...l};const c=Math.random()*Math.PI*2,h=100+Math.random()*80;return{...l,x:i/2+Math.cos(c)*h,y:r/2+Math.sin(c)*h,vx:0,vy:0}});const a=new Map(this._nodes.map(l=>[l.id,l]));this._edges=n.filter(l=>a.has(l.from)&&a.has(l.to)).map(l=>({fromNode:a.get(l.from),toNode:a.get(l.to),type:l.type})),this._realityGroups.clear(),this._nodes.forEach(l=>{var c;(c=l.realities)==null||c.forEach((h,u)=>{this._realityGroups.has(h)||this._realityGroups.set(h,{nodes:[],color:Ah[this._realityGroups.size%Ah.length]}),this._realityGroups.get(h).nodes.push(l)})}),this._settled=0,this._kickSimulation()}onSelect(t){this._onSelect=t}fitView(){if(this._nodes.length===0)return;const t=this._nodes.map(d=>d.x),e=this._nodes.map(d=>d.y),n=Math.min(...t),i=Math.max(...t),r=Math.min(...e),o=Math.max(...e),a=this.canvas.width,l=this.canvas.height,c=60,h=(a-c*2)/(i-n||1),u=(l-c*2)/(o-r||1);this._zoom=Math.min(h,u,2),this._pan.x=-((n+i)/2)*this._zoom,this._pan.y=-((r+o)/2)*this._zoom,this.render()}stop(){this._raf&&cancelAnimationFrame(this._raf)}_kickSimulation(){if(this._raf)return;const t=()=>{this._settled<250&&(this._stepForce(),this._settled++),this.render(),this._raf=requestAnimationFrame(t)};this._raf=requestAnimationFrame(t)}_stepForce(){const t=this._nodes,e=4e3,n=90,i=.025,r=.82;for(let o=0;o<t.length;o++)for(let a=o+1;a<t.length;a++){const l=t[o],c=t[a],h=c.x-l.x,u=c.y-l.y,d=h*h+u*u||1,f=Math.sqrt(d),g=e/d;l.vx-=g*h/f,l.vy-=g*u/f,c.vx+=g*h/f,c.vy+=g*u/f}for(const o of this._edges){if(o.type!=="trust")continue;const a=o.toNode.x-o.fromNode.x,l=o.toNode.y-o.fromNode.y,c=Math.sqrt(a*a+l*l)||1,h=(c-n)*i;o.fromNode.vx+=h*a/c,o.fromNode.vy+=h*l/c,o.toNode.vx-=h*a/c,o.toNode.vy-=h*l/c,o.toNode.vy+=(o.toNode.y-(o.fromNode.y+n))*-.008}for(const o of this._edges){if(o.type!=="neighbor")continue;const a=o.toNode.x-o.fromNode.x,l=o.toNode.y-o.fromNode.y,c=Math.sqrt(a*a+l*l)||1,h=(c-50)*.008;o.fromNode.vx+=h*a/c,o.fromNode.vy+=h*l/c,o.toNode.vx-=h*a/c,o.toNode.vy-=h*l/c}for(const o of t)o.x+=o.vx*r,o.y+=o.vy*r,o.vx*=r,o.vy*=r}render(){const t=this.ctx,e=this.canvas.width,n=this.canvas.height;t.clearRect(0,0,e,n),t.fillStyle="rgba(0,2,12,0.97)",t.fillRect(0,0,e,n),t.save(),t.translate(e/2+this._pan.x,n/2+this._pan.y),t.scale(this._zoom,this._zoom),this._drawRealityClusters(),this._drawEdges(),this._drawNodes(),this._selected&&this._drawSelection(this._selected),t.restore(),this._drawLegend(),this._settled<250&&this._drawSettlingIndicator()}_drawRealityClusters(){const t=this.ctx;for(const[e,{nodes:n,color:i}]of this._realityGroups){if(n.length<2)continue;const r=n.reduce((c,h)=>c+h.x,0)/n.length,o=n.reduce((c,h)=>c+h.y,0)/n.length,a=Math.max(...n.map(c=>Math.hypot(c.x-r,c.y-o)))+55,l=t.createRadialGradient(r,o,0,r,o,a);l.addColorStop(0,i.fill.replace("0.09","0.14")),l.addColorStop(.7,i.fill),l.addColorStop(1,"transparent"),t.fillStyle=l,t.beginPath(),t.arc(r,o,a,0,Math.PI*2),t.fill(),t.strokeStyle=i.border+"33",t.lineWidth=1,t.beginPath(),t.arc(r,o,a,0,Math.PI*2),t.stroke()}}_drawEdges(){const t=this.ctx;for(const e of this._edges)t.beginPath(),t.moveTo(e.fromNode.x,e.fromNode.y),t.lineTo(e.toNode.x,e.toNode.y),e.type==="trust"?(t.strokeStyle="rgba(120,180,255,0.45)",t.lineWidth=1.8,t.setLineDash([])):(t.strokeStyle="rgba(255,255,255,0.1)",t.lineWidth=.8,t.setLineDash([3,5])),t.stroke();t.setLineDash([])}_drawNodes(){var e;const t=this.ctx;for(const n of this._nodes){const i=((e=this._selected)==null?void 0:e.id)===n.id,r=n.isMe?11:n.isBridge?9:7,o=n.isMe?Zn.me:n.perception==="blurred"?Zn.blurred:Zn[n.visibility]??Zn.public;t.shadowColor=o,t.shadowBlur=i?28:n.isMe?22:12,t.fillStyle=n.perception==="blurred"?"rgba(50,50,80,0.7)":o+(n.isMe?"":"cc"),t.beginPath(),t.arc(n.x,n.y,r,0,Math.PI*2),t.fill(),t.shadowBlur=0,n.isBridge&&(t.strokeStyle="#ffcc00bb",t.lineWidth=2,t.beginPath(),t.arc(n.x,n.y,r+5,0,Math.PI*2),t.stroke()),i&&(t.strokeStyle="#ffffff88",t.lineWidth=1.5,t.beginPath(),t.arc(n.x,n.y,r+8,0,Math.PI*2),t.stroke());const a=n.perception==="blurred"?"???":n.id.length>12?n.id.slice(0,12)+"…":n.id;t.fillStyle=n.isMe?"#ffffff":"rgba(255,255,255,0.65)",t.font=`${n.isMe?"bold ":""}10px Inter, monospace`,t.textAlign="center",t.fillText(a,n.x,n.y+r+14),n.perception==="full"&&n.depth>0&&(t.fillStyle="rgba(255,255,255,0.28)",t.font="8px monospace",t.fillText(`d${n.depth}`,n.x,n.y-r-4)),n.isMe&&(t.fillStyle="#00ffff",t.font="bold 8px Inter, monospace",t.shadowColor="#00ffff",t.shadowBlur=8,t.fillText("YOU",n.x,n.y-r-4),t.shadowBlur=0)}}_drawSelection(t){}_drawLegend(){const t=this.ctx,e=[{color:Zn.me,label:"You"},{color:Zn.public,label:"Public"},{color:Zn.invite,label:"Invite-only"},{color:Zn.private,label:"Private"},{color:Zn.blurred,label:"Unknown (invite-only, not connected)"},{color:"#ffcc00",label:"Bridge node"}],n=14,i=this.canvas.height-14-e.length*18;t.fillStyle="rgba(0,5,20,0.75)",t.fillRect(n-6,i-10,280,e.length*18+16),t.strokeStyle="rgba(255,255,255,0.07)",t.lineWidth=1,t.strokeRect(n-6,i-10,280,e.length*18+16),e.forEach(({color:r,label:o},a)=>{const l=i+a*18;t.fillStyle=r,t.beginPath(),t.arc(n+6,l,5,0,Math.PI*2),t.fill(),t.fillStyle="rgba(255,255,255,0.6)",t.font="11px Inter, monospace",t.textAlign="left",t.fillText(o,n+18,l+4)})}_drawSettlingIndicator(){const t=this.ctx,e=this._settled/250,n=this.canvas.width;t.fillStyle="rgba(100,180,255,0.5)",t.fillRect(0,this.canvas.height-2,n*e,2)}_bindEvents(){const t=this.canvas;t.addEventListener("mousedown",e=>{this._drag=!0,this._lastMouse={x:e.clientX,y:e.clientY}}),t.addEventListener("mousemove",e=>{this._drag&&(this._pan.x+=e.clientX-this._lastMouse.x,this._pan.y+=e.clientY-this._lastMouse.y,this._lastMouse={x:e.clientX,y:e.clientY},this.render())}),t.addEventListener("mouseup",()=>{this._drag=!1}),t.addEventListener("mouseleave",()=>{this._drag=!1}),t.addEventListener("wheel",e=>{e.preventDefault();const n=e.deltaY>0?.88:1.14;this._zoom=Math.max(.15,Math.min(6,this._zoom*n)),this._raf||this.render()},{passive:!1}),t.addEventListener("click",e=>{var a;if(this._drag)return;const n=t.getBoundingClientRect(),i=(e.clientX-n.left-t.width/2-this._pan.x)/this._zoom,r=(e.clientY-n.top-t.height/2-this._pan.y)/this._zoom;let o=null;for(const l of this._nodes)if(Math.hypot(l.x-i,l.y-r)<14){o=l;break}this._selected=o,(a=this._onSelect)==null||a.call(this,o),this._raf||this.render()})}}function Rh(s,t,e){const n=document.getElementById("network-map-overlay");if(!n)return;n.classList.add("visible");const i=document.getElementById("network-map-canvas");i.width=i.offsetWidth||800,i.height=i.offsetHeight||560;const r=t.buildMapFor(e,s),o=new Iv(i,t,e);o.load(r);const a=document.getElementById("nm-node-panel");o.onSelect(h=>{var u;if(!h||h.perception==="blurred"){a.innerHTML=h?'<div class="nm-panel-blurred">🔒 Unknown node<br><small>Invite required</small></div>':"";return}a.innerHTML=`
      <div class="nm-panel-title">${h.isMe?"👤 You":"🔵 "+h.id}</div>
      <div class="nm-panel-row"><span>Visibility</span><span class="nm-badge nm-badge-${h.visibility}">${h.visibility}</span></div>
      <div class="nm-panel-row"><span>Depth</span><span>d${h.depth??0}</span></div>
      <div class="nm-panel-row"><span>Realities</span><span>${((u=h.realities)==null?void 0:u.length)??0}</span></div>
      ${h.isBridge?'<div class="nm-panel-bridge">🌉 Bridge node</div>':""}
    `});const l=document.getElementById("nm-close"),c=()=>{n.classList.remove("visible"),o.stop()};l.onclick=c,n.addEventListener("keydown",h=>{h.key==="Escape"&&c()})}const Wa=20,Xa=50,Dv=.08,Ch=12;class Nv{constructor(){this._ctx=null,this._stream=null,this._gains=new Map,this._talking=new Set,this._selfAnalyser=null,this._selfBuf=null,this._muted=!1,this._active=!1,this._onStateChange=null,this._onTalkChange=null,this._onSelfTalkChange=null,this._syncRef=null}async start(t){if(this._active)return!0;this._syncRef=t;try{const e=new Promise((r,o)=>setTimeout(()=>o(new Error("mic permission timed out")),15e3));this._stream=await Promise.race([navigator.mediaDevices.getUserMedia({audio:{echoCancellation:!0,noiseSuppression:!0,sampleRate:48e3},video:!1}),e]),this._ctx=new AudioContext,this._ctx.state==="suspended"&&await this._ctx.resume(),this._active=!0,this._selfAnalyser=this._ctx.createAnalyser(),this._selfAnalyser.fftSize=256,this._selfBuf=new Uint8Array(this._selfAnalyser.frequencyBinCount),this._ctx.createMediaStreamSource(this._stream).connect(this._selfAnalyser);const[i]=this._stream.getAudioTracks();return t.addVoiceTrack(i,this._stream),t.onVoiceTrack((r,o,a,l)=>{r.kind==="audio"&&this._addPeerTrack(a,r,l)}),this._notify(),!0}catch(e){return console.warn("[ProximityVoice] mic access denied or unavailable:",e.message),!1}}_addPeerTrack(t,e,n){var a;((a=this._ctx)==null?void 0:a.state)==="suspended"&&this._ctx.resume().catch(()=>{});const i=this._ctx.createMediaStreamSource(new MediaStream([e])),r=this._ctx.createGain(),o=this._ctx.createAnalyser();o.fftSize=256,r.gain.value=0,i.connect(o),i.connect(r),r.connect(this._ctx.destination),this._gains.set(t,{gainNode:r,sourceNode:i,analyser:o,buf:new Uint8Array(o.frequencyBinCount),wirePeerId:n??t})}stop(){var t,e;(t=this._stream)==null||t.getTracks().forEach(n=>n.stop()),this._gains.forEach(({gainNode:n,sourceNode:i})=>{try{i.disconnect(),n.disconnect()}catch{}}),this._gains.clear(),this._talking.clear(),(e=this._ctx)==null||e.close(),this._active=!1,this._syncRef=null,this._notify(),this._notifyTalk()}update(t,e){var a;if(!this._active||!this._ctx)return;this._syncRef&&this._gains.forEach((l,c)=>{const h=this._syncRef.wireToIdentityId(c);h&&h!==c&&(this._gains.set(h,l),this._gains.delete(c))});const n=new Set(this._talking),i=n.has("self");this._selfAnalyser&&!this._muted?(this._selfAnalyser.getByteFrequencyData(this._selfBuf),this._selfBuf.reduce((c,h)=>c+h,0)/this._selfBuf.length>Ch?this._talking.add("self"):this._talking.delete("self")):this._talking.delete("self");const r=this._talking.has("self");r!==i&&((a=this._onSelfTalkChange)==null||a.call(this,r)),e.forEach((l,c)=>{const h=this._gains.get(c);if(!h)return;const u=l.position.x-t.x,d=l.position.z-t.z,f=Math.sqrt(u*u+d*d),g=f<=Wa?1:f>=Xa?0:1-(f-Wa)/(Xa-Wa);h.gainNode.gain.setTargetAtTime(g,this._ctx.currentTime,Dv),h.analyser.getByteFrequencyData(h.buf),h.buf.reduce((m,p)=>m+p,0)/h.buf.length>Ch?this._talking.add(c):this._talking.delete(c)});let o=n.size!==this._talking.size;if(!o){for(const l of this._talking)if(!n.has(l)){o=!0;break}}o&&this._notifyTalk()}removePeer(t){const e=this._gains.get(t);if(e){try{e.sourceNode.disconnect(),e.gainNode.disconnect()}catch{}this._gains.delete(t)}this._talking.delete(t)}toggleMute(){return this.setMuted(!this._muted),this._muted}setMuted(t){var e;this._muted=t,(e=this._stream)==null||e.getAudioTracks().forEach(n=>{n.enabled=!t}),this._notify()}get active(){return this._active}get muted(){return this._muted}isTalking(t){return this._talking.has(t)}get talkingPeers(){return this._talking}onStateChange(t){this._onStateChange=t}onTalkChange(t){this._onTalkChange=t}onSelfTalkChange(t){this._onSelfTalkChange=t}_notify(){var t;(t=this._onStateChange)==null||t.call(this,{active:this._active,muted:this._muted})}_notifyTalk(){var t;(t=this._onTalkChange)==null||t.call(this,this._talking)}static get HEAR_FAR(){return Xa}}const Ph=Object.fromEntries(Il.map(s=>[s.id,"#"+s.color.toString(16).padStart(6,"0")])),Uv={OUTSIDE:"#88cc66",LOBBY:"#aaaacc",OPS:"#ffaa44",FUN:"#44ffaa",DESIGN:"#ff6ba0",ENGINEERING:"#44aaff"},Ov={OUTSIDE:"Outside",LOBBY:"Lobby",OPS:"Ops",FUN:"Fun",DESIGN:"Design",ENGINEERING:"Engineering"};class Fv{constructor(t){this._onNavigate=t,this._peers=new Map,this._self={username:"",presetId:0,zone:"OUTSIDE"},this._el=this._build(),document.body.appendChild(this._el),this._render()}setSelf(t,e,n,i="available"){this._self={username:t,presetId:e,zone:n||"OUTSIDE",status:i},this._render()}updateSelfStatus(t){this._self.status=t,this._render()}addPeer(t,e,n=0,i="available"){this._peers.set(t,{username:e,presetId:n,x:0,z:0,zone:"OUTSIDE",status:i}),this._render()}movePeer(t,e,n){const i=this._peers.get(t);i&&(i.x=e,i.z=n,i.zone=Vo({x:e,z:n}),this._render())}updatePeerPreset(t,e){const n=this._peers.get(t);n&&(n.presetId=e,this._render())}updatePeerStatus(t,e){const n=this._peers.get(t);n&&(n.status=e,this._render())}removePeer(t){this._peers.delete(t),this._render()}updateSelfZone(t){this._self.zone=t||"OUTSIDE",this._render()}_build(){const t=document.createElement("div");return t.id="presence-panel",t.innerHTML=`
      <div class="pp-header">
        <span class="pp-title">WHO'S HERE</span>
        <span class="pp-count" id="pp-count">1</span>
      </div>
      <div class="pp-list" id="pp-list"></div>
    `,t}_render(){const t=this._el.querySelector("#pp-list"),e=this._el.querySelector("#pp-count");if(!t)return;const n=1+this._peers.size;e.textContent=n;const i=[];i.push(this._row({username:this._self.username||"You",presetId:this._self.presetId,zone:this._self.zone,status:this._self.status,isSelf:!0}));const r=[...this._peers.entries()].sort((o,a)=>{const l=o[1].zone,c=a[1].zone;return l!==c?l.localeCompare(c):o[1].username.localeCompare(a[1].username)});r.forEach(([o,a])=>{i.push(this._row({username:a.username,presetId:a.presetId,zone:a.zone,status:a.status,isSelf:!1,onClick:()=>{var l;return(l=this._onNavigate)==null?void 0:l.call(this,{x:a.x,z:a.z})}}))}),t.innerHTML=i.join(""),t.querySelectorAll(".pp-row[data-idx]").forEach(o=>{const a=parseInt(o.dataset.idx,10),l=r[a];l&&o.addEventListener("click",()=>{var c;return(c=this._onNavigate)==null?void 0:c.call(this,{x:l[1].x,z:l[1].z})})})}_row({username:t,presetId:e,zone:n,status:i="available",isSelf:r,onClick:o}){const l="#"+(is[e]??is[0]).outfit.toString(16).padStart(6,"0"),c=Ph[i]??Ph.available,h=Uv[n]??"#888",u=Ov[n]??n;return`
      <div class="pp-row ${r?"pp-self":"pp-peer"}"
           ${r?"":`data-idx="${t}"`}>
        <span class="pp-dot" style="background:${l}"></span>
        <span class="pp-status-dot" style="background:${c}" title="${i}"></span>
        <span class="pp-name">${Bv(t)}${r?' <span class="pp-you">(you)</span>':""}</span>
        <span class="pp-zone" style="color:${h}">${u}</span>
        ${r?"":'<span class="pp-go" title="Walk to this person">→</span>'}
      </div>
    `}}function Bv(s){return s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}const zv="modulepreload",kv=function(s,t){return new URL(s,t).href},Lh={},Hv=function(t,e,n){let i=Promise.resolve();if(e&&e.length>0){const o=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),l=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));i=Promise.allSettled(e.map(c=>{if(c=kv(c,n),c in Lh)return;Lh[c]=!0;const h=c.endsWith(".css"),u=h?'[rel="stylesheet"]':"";if(!!n)for(let g=o.length-1;g>=0;g--){const _=o[g];if(_.href===c&&(!h||_.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${u}`))return;const f=document.createElement("link");if(f.rel=h?"stylesheet":zv,h||(f.as="script"),f.crossOrigin="",f.href=c,l&&f.setAttribute("nonce",l),document.head.appendChild(f),h)return new Promise((g,_)=>{f.addEventListener("load",g),f.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${c}`)))})}))}function r(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return i.then(o=>{for(const a of o||[])a.status==="rejected"&&r(a.reason);return t().catch(r)})},ll="sw_id_v1",cl=s=>Array.from(s).map(t=>t.toString(16).padStart(2,"0")).join(""),Ih=s=>{const t=s.replace(/-/g,"+").replace(/_/g,"/"),e=atob(t);return Uint8Array.from(e,n=>n.charCodeAt(0))};class Dh{constructor(t,e,n,i){this.peerId=t,this.displayName=e,this.isNew=i,this._priv=n}get shortId(){return this.peerId.slice(-8)}setName(t){this.displayName=t,Du()}async sign(t){const e=new TextEncoder().encode(t),n=await crypto.subtle.sign({name:"Ed25519"},this._priv,e);return cl(new Uint8Array(n))}}let Jn=null,br=null;function Du(){if(!(!Jn||!br))try{localStorage.setItem(ll,JSON.stringify({privJwk:br,displayName:Jn.displayName}))}catch{}}async function Gv(){if(Jn)return Jn;const s=localStorage.getItem(ll);if(s)try{const{privJwk:n,displayName:i}=JSON.parse(s),r=await crypto.subtle.importKey("jwk",n,{name:"Ed25519"},!1,["sign"]),o=cl(Ih(n.x));return br=n,Jn=new Dh(o,i||"",r,!1),Jn}catch{localStorage.removeItem(ll)}const t=await crypto.subtle.generateKey({name:"Ed25519"},!0,["sign","verify"]);br=await crypto.subtle.exportKey("jwk",t.privateKey);const e=cl(Ih(br.x));return Jn=new Dh(e,"",t.privateKey,!0),Du(),Jn}function Ul(){return Jn}const hl="xn_",Nu="xn_known_peers";async function Uu(s){const t=new TextEncoder().encode(s),e=await crypto.subtle.digest("SHA-256",t);return Array.from(new Uint8Array(e)).map(n=>n.toString(16).padStart(2,"0")).join("")}async function Tr(s,t=""){return Uu(s.toLowerCase().trim()+":"+t.trim())}function Vv(s){return btoa(s).replace(/\+/g,"-").replace(/\//g,"_").replace(/=/g,"")}function Wv(s){const t=s.length%4,e=t?s+"=".repeat(4-t):s;return atob(e.replace(/-/g,"+").replace(/_/g,"/"))}async function Ol({roomId:s,lockCode:t="",node:e}={}){if(!(s!=null&&s.trim()))throw new Error("roomId is required");const n=await Tr(s,t),i=Bu(n),r={r:s.trim(),h:n};e&&(r.n=e),i.length&&(r.p=i.slice(0,8));const o=Vv(JSON.stringify(r));return{link:`${window.location.origin+window.location.pathname}#${hl}${o}`,roomHash:n}}async function Ou(){const s=window.location.hash.slice(1);if(s.startsWith(hl))try{const e=JSON.parse(Wv(s.slice(hl.length))),n=e.r||"main",i=e.h||await Tr(n);return{type:"link",roomId:n,roomHash:i,node:e.n||null,peers:e.p||[]}}catch{console.warn("[roomLink] failed to decode link — falling back to main")}if(s){const e=s.trim().toLowerCase(),n=await Tr(e);return{type:"plain",roomId:e,roomHash:n,node:null,peers:[]}}return{type:"default",roomId:"main",roomHash:await Tr("main"),node:null,peers:[]}}function Fu(){try{return JSON.parse(localStorage.getItem(Nu)||"{}")}catch{return{}}}function Xv(s){try{localStorage.setItem(Nu,JSON.stringify(s))}catch{}}function Bu(s){return Fu()[s]||[]}function Fl(s,t){const e=Fu(),n=e[s]||[];n.includes(t)||(n.unshift(t),n.length>20&&(n.length=20),e[s]=n,Xv(e))}function zu(s){const t=s.trim().toLowerCase().replace(/[^a-z0-9-]/g,"-").replace(/-{2,}/g,"-").replace(/^-+|-+$/g,"")||"main";window.location.hash=t}const Zv=Object.freeze(Object.defineProperty({__proto__:null,createRoomLink:Ol,deriveRoomHash:Tr,getKnownPeers:Bu,parseCurrentLink:Ou,recordPeer:Fl,setRoomNameInUrl:zu,sha256hex:Uu},Symbol.toStringTag,{value:"Module"}));var Yi,qi,xi;class Yv extends EventTarget{constructor(){super(...arguments);ut(this,Yi,[]);ut(this,qi,null);ut(this,xi,!1)}push(e,n="pending",i=""){const r=`s${Date.now()}-${Math.random().toString(36).slice(2,6)}`,o={id:r,text:e,status:n,detail:i,ts:Date.now()};return A(this,Yi).push(o),this.dispatchEvent(new CustomEvent("step",{detail:{...o,action:"add"}})),r}update(e,n,i=""){const r=A(this,Yi).find(o=>o.id===e);r&&(r.status=n,i!==""&&(r.detail=i),this.dispatchEvent(new CustomEvent("step",{detail:{...r,action:"update"}})))}ok(e,n=""){this.update(e,"ok",n)}fail(e,n=""){this.update(e,"fail",n)}warn(e,n=""){this.update(e,"warn",n)}info(e,n=""){return this.push(e,"info",n)}startFirstTimer(e=12e3){yt(this,xi,!1),clearTimeout(A(this,qi)),yt(this,qi,setTimeout(()=>{A(this,xi)||(this.push("You're the first here — your device is the anchor","host","Share your invite link to let others find you"),this.dispatchEvent(new CustomEvent("first-in-room")))},e))}peerJoined(e){yt(this,xi,!0),clearTimeout(A(this,qi)),this.info(`${e||"Someone"} joined`)}get steps(){return[...A(this,Yi)]}get hasHost(){return A(this,xi)===!1}clear(){yt(this,Yi,[]),clearTimeout(A(this,qi)),yt(this,xi,!1),this.dispatchEvent(new CustomEvent("clear"))}}Yi=new WeakMap,qi=new WeakMap,xi=new WeakMap;const ce=new Yv,Za={};function ku(s){if(s)return s;const t=new URLSearchParams(window.location.search).get("node");if(t)return t;if(!(Za!=null&&Za.VITE_XPACENODE_URL))return null}function qv(){const s=window.location.hash.slice(1).trim();return!s||s.startsWith("xn_")?"main":s}function $v(s){zu(s)}const Kv=[{urls:"stun:stun.l.google.com:19302"},{urls:"stun:stun1.l.google.com:19302"},{urls:"turn:openrelay.metered.ca:80",username:"openrelayproject",credential:"openrelayproject"},{urls:"turn:openrelay.metered.ca:80?transport=tcp",username:"openrelayproject",credential:"openrelayproject"}];var $i,Lr,Ki,Ji,Ws,Ir,Dr,ar,Hu,Gu;class Jv{constructor(){ut(this,ar);ut(this,$i,null);ut(this,Lr,"");ut(this,Ki,new Map);ut(this,Ji,!1);ut(this,Ws,!1);ut(this,Ir,[]);ut(this,Dr,0)}async connect(t){return yt(this,Lr,t),new Promise((e,n)=>{const i=new WebSocket(t);yt(this,$i,i);const r=setTimeout(()=>n(new Error("xpacenode connect timeout")),1e4);i.onopen=()=>{clearTimeout(r),yt(this,Ji,!0),yt(this,Dr,0),A(this,Ir).splice(0).forEach(a=>i.send(a)),e()},i.onmessage=({data:o})=>{try{const a=JSON.parse(o);Ct(this,ar,Hu).call(this,a)}catch{}},i.onerror=o=>{clearTimeout(r),n(o)},i.onclose=()=>{yt(this,Ji,!1),Ct(this,ar,Gu).call(this)}})}send(t){var n;const e=JSON.stringify(t);A(this,Ji)&&((n=A(this,$i))==null?void 0:n.readyState)===WebSocket.OPEN?A(this,$i).send(e):A(this,Ir).push(e)}on(t,e){A(this,Ki).has(t)||A(this,Ki).set(t,[]),A(this,Ki).get(t).push(e)}close(){var t;yt(this,Ws,!0),yt(this,Ji,!1),(t=A(this,$i))==null||t.close()}}$i=new WeakMap,Lr=new WeakMap,Ki=new WeakMap,Ji=new WeakMap,Ws=new WeakMap,Ir=new WeakMap,Dr=new WeakMap,ar=new WeakSet,Hu=function(t){const e=A(this,Ki).get(t.t);e==null||e.forEach(n=>n(t))},Gu=function(){if(A(this,Ws))return;const t=Math.min(1e3*2**kl(this,Dr)._++,3e4);console.warn(`[xpacenode] disconnected — reconnecting in ${t}ms`),setTimeout(()=>{A(this,Ws)||this.connect(A(this,Lr)).catch(()=>{})},t)};var ye,Qn,Xs,ji,Zs,Nr,Ur,Or,Ys,Fr,Li,ul,dl;class jv extends EventTarget{constructor(e){super();ut(this,Li);ut(this,ye);ut(this,Qn,null);ut(this,Xs,!1);ut(this,ji,!1);ut(this,Zs,!1);ut(this,Nr,null);ut(this,Ur,null);ut(this,Or,[]);ut(this,Ys,!1);ut(this,Fr,async()=>{if(!A(this,ji)&&A(this,ye).signalingState==="stable")try{yt(this,ji,!0),await A(this,ye).setLocalDescription(),this.dispatchEvent(new CustomEvent("signal",{detail:{type:"offer",sdp:A(this,ye).localDescription.sdp}}))}catch(e){console.warn("[RTCPeer] negotiate error",e)}finally{yt(this,ji,!1)}});yt(this,Xs,e),yt(this,ye,new RTCPeerConnection({iceServers:Kv})),e||(yt(this,Qn,A(this,ye).createDataChannel("sw",{ordered:!0})),Ct(this,Li,ul).call(this,A(this,Qn))),A(this,ye).ondatachannel=({channel:n})=>{yt(this,Qn,n),Ct(this,Li,ul).call(this,n)},A(this,ye).onicecandidate=({candidate:n})=>{n&&this.dispatchEvent(new CustomEvent("signal",{detail:{type:"ice",candidate:n.toJSON()}}))},A(this,ye).onnegotiationneeded=A(this,Fr),A(this,ye).ontrack=({track:n,streams:i})=>{var o;const r=i[0]??new MediaStream([n]);(o=A(this,Ur))==null||o.call(this,n,r)},A(this,ye).onconnectionstatechange=()=>{A(this,ye).connectionState==="failed"&&this.dispatchEvent(new CustomEvent("failed"))}}async handleSignal({type:e,sdp:n,candidate:i}){try{if(e==="offer"){const r=A(this,ye).signalingState==="have-local-offer",o=A(this,ji)||r;if(yt(this,Zs,!A(this,Xs)&&o),A(this,Zs))return;await A(this,ye).setRemoteDescription({type:"offer",sdp:n}),yt(this,Ys,!0),await A(this,ye).setLocalDescription(),this.dispatchEvent(new CustomEvent("signal",{detail:{type:"answer",sdp:A(this,ye).localDescription.sdp}})),await Ct(this,Li,dl).call(this),A(this,Xs)&&r&&setTimeout(A(this,Fr),200)}else if(e==="answer")A(this,ye).signalingState==="have-local-offer"&&(await A(this,ye).setRemoteDescription({type:"answer",sdp:n}),yt(this,Ys,!0),await Ct(this,Li,dl).call(this));else if(e==="ice")if(!A(this,Ys))A(this,Or).push(i);else try{await A(this,ye).addIceCandidate(i)}catch(r){A(this,Zs)||console.warn("[RTCPeer] addIceCandidate",r)}}catch(r){console.warn("[RTCPeer] handleSignal",e,r)}}send(e){var n;((n=A(this,Qn))==null?void 0:n.readyState)==="open"&&A(this,Qn).send(JSON.stringify(e))}addTrack(e,n){try{A(this,ye).addTrack(e,n)}catch{}}onMessage(e){yt(this,Nr,e)}onTrack(e){yt(this,Ur,e)}get pc(){return A(this,ye)}get connected(){var e;return((e=A(this,Qn))==null?void 0:e.readyState)==="open"}close(){try{A(this,ye).close()}catch{}}}ye=new WeakMap,Qn=new WeakMap,Xs=new WeakMap,ji=new WeakMap,Zs=new WeakMap,Nr=new WeakMap,Ur=new WeakMap,Or=new WeakMap,Ys=new WeakMap,Fr=new WeakMap,Li=new WeakSet,ul=function(e){e.onopen=()=>this.dispatchEvent(new CustomEvent("open")),e.onclose=()=>this.dispatchEvent(new CustomEvent("close")),e.onmessage=({data:n})=>{var i;try{(i=A(this,Nr))==null||i.call(this,JSON.parse(n))}catch{}}},dl=async function(){const e=A(this,Or).splice(0);for(const n of e)try{await A(this,ye).addIceCandidate(n)}catch{}};var Qe,De,ti,Qi,ts,es,wn,yi,ei,ni,qs,Br,zr,kr,se,fl,pl,Vu,Mn,Ln;class Qv{constructor(t,e=0,n="available"){ut(this,se);ut(this,Qe,null);ut(this,De,new Map);ut(this,ti,{});ut(this,Qi,"");ut(this,ts,0);ut(this,es,"available");ut(this,wn,"");ut(this,yi,"main");ut(this,ei,"");ut(this,ni,[]);ut(this,qs,null);ut(this,Br,[]);ut(this,zr,[]);ut(this,kr,null);yt(this,Qi,t),yt(this,ts,e),yt(this,es,n)}async start(){const t=ce.push("Reading link…"),e=await Ou();if(yt(this,wn,e.roomHash),yt(this,yi,e.roomId),yt(this,ni,e.peers??[]),e.type==="link"?(ce.ok(t,`Invite link decoded → room: ${A(this,yi)}`),ce.info("Room address is hashed — connection is private"),e.node&&ce.info("Preferred node found in link",e.node)):e.type==="plain"?ce.ok(t,`Room: ${A(this,yi)}`):ce.ok(t,"Using default room"),A(this,ni).length){const i=e.type==="link"?"invite link":"previous session";ce.info(`${A(this,ni).length} known peer${A(this,ni).length>1?"s":""} from ${i}`,"Will reconnect directly if they are online")}if(yt(this,ei,ku(e.node)),!A(this,ei))throw ce.info("No xpacenode — trying public DHT route"),Object.assign(new Error("NO_NODE"),{roomHash:A(this,wn),roomName:A(this,yi),linkType:e.type,knownPeers:A(this,ni)});yt(this,Qe,new Jv);const n=ce.push("Connecting to xpacenode…","pending",A(this,ei));try{await A(this,Qe).connect(A(this,ei)),ce.ok(n,A(this,ei))}catch(i){throw ce.fail(n,"xpacenode unreachable — trying public DHT route"),i}ce.info("Searching for peers in room…"),ce.startFirstTimer(12e3),A(this,Qe).on("peer_join",async i=>{const{peerId:r,username:o="",presetId:a=0,status:l="available"}=i;if(r===Ct(this,se,Mn).call(this))return;const c=A(this,ni).includes(r);if(ce.peerJoined(o||r.slice(0,10)),c&&ce.info(`✓ ${o||r.slice(0,10)} — known peer (reconnected)`),Ct(this,se,Ln).call(this,"HELLO",{from:r,username:o,presetId:a,status:l}),!A(this,De).has(r)){const h=Ct(this,se,Mn).call(this)<r;await Ct(this,se,fl).call(this,r,h)}}),A(this,Qe).on("peer_leave",i=>{Ct(this,se,pl).call(this,i.peerId)}),A(this,Qe).on("signal",async i=>{var a;const{from:r,payload:o}=i;if(!(!r||!o)){if(!A(this,De).has(r)){const l=Ct(this,se,Mn).call(this)<r;await Ct(this,se,fl).call(this,r,l)}await((a=A(this,De).get(r))==null?void 0:a.peer.handleSignal(o))}}),A(this,Qe).send({t:"hello",roomId:A(this,wn),peerId:Ct(this,se,Mn).call(this),username:A(this,Qi),presetId:A(this,ts),status:A(this,es)}),yt(this,kr,setInterval(()=>{A(this,Qe).send({t:"hb",roomId:A(this,wn)})},3e4))}stop(){var t,e;clearInterval(A(this,kr)),(t=A(this,Qe))==null||t.send({t:"leave",roomId:A(this,wn)}),(e=A(this,Qe))==null||e.close();for(const{peer:n}of A(this,De).values())n.close();A(this,De).clear(),yt(this,Qe,null)}move(t,e,n,i=0){const r={type:"move",identityId:Ct(this,se,Mn).call(this),pos:{x:t,y:e,z:n,ry:i}};for(const{peer:o}of A(this,De).values())o.send(r)}chat(t){const e={type:"chat",identityId:Ct(this,se,Mn).call(this),username:A(this,Qi),text:t,ts:Date.now()};for(const{peer:n}of A(this,De).values())n.send(e)}setAvatar(t){yt(this,ts,t);const e={type:"avatar",identityId:Ct(this,se,Mn).call(this),presetId:t};for(const{peer:n}of A(this,De).values())n.send(e)}setStatus(t){yt(this,es,t);const e={type:"status",identityId:Ct(this,se,Mn).call(this),status:t};for(const{peer:n}of A(this,De).values())n.send(e)}broadcastTalking(t){const e={type:"talking",identityId:Ct(this,se,Mn).call(this),talking:!!t};for(const{peer:n}of A(this,De).values())n.send(e)}addVoiceTrack(t,e){A(this,zr).push({track:t,stream:e});for(const{peer:n}of A(this,De).values())n.addTrack(t,e)}onVoiceTrack(t){yt(this,qs,t);const e=A(this,Br).splice(0);for(const{track:n,stream:i,identityId:r,nostrPubkey:o}of e)n.readyState!=="ended"&&t(n,i,r,o);for(const[n,{peer:i}]of A(this,De))for(const r of i.pc.getReceivers()){const o=r.track;!o||o.kind!=="audio"||o.readyState==="ended"||t(o,new MediaStream([o]),n,n)}}wireToIdentityId(t){return t}get roomName(){return A(this,yi)}get roomHash(){return A(this,wn)}get nodeUrl(){return A(this,ei)}getPeers(){const t={};for(const[e,{peer:n}]of A(this,De))t[e]=n.pc;return t}on(t,e){return A(this,ti)[t]||(A(this,ti)[t]=[]),A(this,ti)[t].push(e),()=>{A(this,ti)[t]=A(this,ti)[t].filter(n=>n!==e)}}}Qe=new WeakMap,De=new WeakMap,ti=new WeakMap,Qi=new WeakMap,ts=new WeakMap,es=new WeakMap,wn=new WeakMap,yi=new WeakMap,ei=new WeakMap,ni=new WeakMap,qs=new WeakMap,Br=new WeakMap,zr=new WeakMap,kr=new WeakMap,se=new WeakSet,fl=async function(t,e){const n=new jv(e);A(this,De).set(t,{identityId:t,peer:n}),n.addEventListener("signal",({detail:i})=>{var r;(r=A(this,Qe))==null||r.send({t:"signal",roomId:A(this,wn),to:t,payload:i})}),n.onMessage(i=>Ct(this,se,Vu).call(this,i,t)),n.onTrack((i,r)=>{A(this,qs)?A(this,qs).call(this,i,r,t,t):A(this,Br).push({track:i,stream:r,identityId:t,nostrPubkey:t})}),n.addEventListener("open",()=>{n.send({type:"intro",identityId:Ct(this,se,Mn).call(this),username:A(this,Qi),presetId:A(this,ts),status:A(this,es)}),Fl(A(this,wn),t)}),n.addEventListener("failed",()=>Ct(this,se,pl).call(this,t));for(const{track:i,stream:r}of A(this,zr))n.addTrack(i,r);return n},pl=function(t){const e=A(this,De).get(t);e&&(e.peer.close(),A(this,De).delete(t),Ct(this,se,Ln).call(this,"PEER_LEAVE",{from:t}))},Vu=function(t,e){const n=t.identityId??e;switch(t.type){case"intro":Ct(this,se,Ln).call(this,"HELLO",{from:n,username:t.username,presetId:t.presetId??0,status:t.status??"available"});break;case"move":Ct(this,se,Ln).call(this,"MOVE",{from:n,pos:t.pos});break;case"chat":Ct(this,se,Ln).call(this,"CHAT",{from:n,username:t.username,text:t.text,ts:t.ts});break;case"avatar":Ct(this,se,Ln).call(this,"AVATAR_CHANGE",{from:n,presetId:t.presetId});break;case"status":Ct(this,se,Ln).call(this,"STATUS_CHANGE",{from:n,status:t.status});break;case"talking":Ct(this,se,Ln).call(this,"PEER_TALKING",{from:n,talking:!!t.talking});break;case"bye":Ct(this,se,Ln).call(this,"PEER_LEAVE",{from:n});break}},Mn=function(){var t;return((t=Ul())==null?void 0:t.peerId)??"unknown"},Ln=function(t,e){var n;(n=A(this,ti)[t])==null||n.forEach(i=>i(e))};async function tx(s){const e=ku().replace(/^ws(s?):\/\//,"http$1://").replace(/:4002$/,":3000");let n=!1;const i=9e4,r=new Map,o=async()=>{if(!n)try{const h=await(await fetch(`${e}/rooms`,{signal:AbortSignal.timeout(5e3)})).json(),u=Date.now();for(const d of h.rooms??[])r.set(d.roomId,{count:d.count,usernames:d.usernames??[],lastSeen:u});for(const[d,f]of r)u-f.lastSeen>i&&r.delete(d);a()}catch{}},a=()=>{const c=[...r.entries()].map(([h,u])=>({roomId:h,roomName:h,count:u.count})).sort((h,u)=>u.count-h.count);s(c)};await o();const l=setInterval(o,3e4);return()=>{n=!0,clearInterval(l)}}const ex=[{urls:"stun:stun.l.google.com:19302"},{urls:"stun:stun1.l.google.com:19302"},{urls:"turn:openrelay.metered.ca:80",username:"openrelayproject",credential:"openrelayproject"},{urls:"turn:openrelay.metered.ca:80?transport=tcp",username:"openrelayproject",credential:"openrelayproject"}];var Ge,ii,$s,Ks,Js,js,Hr,gl,Mi,Zo,Qs,Gr,Vr,Wr,Xr,Zr,Yr,qr,Yo,$r,en,ml,Kn;class Nh{constructor(t,e=0,n="available"){ut(this,en);ut(this,Ge,null);ut(this,ii,{});ut(this,$s,"");ut(this,Ks,0);ut(this,Js,"available");ut(this,js,"");ut(this,Hr,"main");ut(this,gl,null);ut(this,Mi,new Map);ut(this,Zo,[]);ut(this,Qs,null);ut(this,Gr,[]);ut(this,Vr,null);ut(this,Wr,null);ut(this,Xr,null);ut(this,Zr,null);ut(this,Yr,null);ut(this,qr,null);ut(this,Yo,null);ut(this,$r,[]);yt(this,$s,t),yt(this,Ks,e),yt(this,Js,n)}async start(t,e,n="default",i=[]){yt(this,js,t),yt(this,Hr,e),yt(this,$r,i),n==="link"&&ce.info("Invite link decoded — using hashed room address"),i.length&&ce.info(`${i.length} known peer${i.length>1?"s":""} cached`,"Will recognise them when they appear on DHT");const r=ce.push("Trying public DHT route (BitTorrent)…");yt(this,Ge,$u({appId:"xpacenet-v3",rtcConfig:{iceServers:ex}},t));const[o,a]=A(this,Ge).makeAction("intro"),[l,c]=A(this,Ge).makeAction("move"),[h,u]=A(this,Ge).makeAction("chat"),[d,f]=A(this,Ge).makeAction("avatar"),[g,_]=A(this,Ge).makeAction("status"),[m,p]=A(this,Ge).makeAction("talking"),[E,v]=A(this,Ge).makeAction("bye");yt(this,Vr,l),yt(this,Wr,h),yt(this,Xr,d),yt(this,Zr,g),yt(this,Yr,m),yt(this,qr,E),yt(this,Yo,o),A(this,Ge).onPeerJoin(x=>{if(x===Ct(this,en,ml).call(this))return;const P=A(this,$r).includes(x);ce.peerJoined(x.slice(0,10)),P&&ce.info("✓ Known peer reconnected via DHT"),o({identityId:Ct(this,en,ml).call(this),username:A(this,$s),presetId:A(this,Ks),status:A(this,Js)},[x]),A(this,Mi).has(x)||(A(this,Mi).set(x,{peerId:x,username:"",presetId:0,status:"available"}),Fl(A(this,js),x))}),A(this,Ge).onPeerLeave(x=>{A(this,Mi).delete(x),Ct(this,en,Kn).call(this,"PEER_LEAVE",{from:x})}),a(({identityId:x,username:P,presetId:T=0,status:b="available"},O)=>{const w=x??O;A(this,Mi).set(w,{peerId:w,username:P,presetId:T,status:b}),ce.info(`Connected to ${P||w.slice(0,10)}`),Ct(this,en,Kn).call(this,"HELLO",{from:w,username:P,presetId:T,status:b})}),c(({pos:x},P)=>Ct(this,en,Kn).call(this,"MOVE",{from:P,pos:x})),u((x,P)=>Ct(this,en,Kn).call(this,"CHAT",{from:P,username:x.username,text:x.text,ts:x.ts})),f(({presetId:x},P)=>Ct(this,en,Kn).call(this,"AVATAR_CHANGE",{from:P,presetId:x})),_(({status:x},P)=>Ct(this,en,Kn).call(this,"STATUS_CHANGE",{from:P,status:x})),p(({talking:x},P)=>Ct(this,en,Kn).call(this,"PEER_TALKING",{from:P,talking:!!x})),v((x,P)=>Ct(this,en,Kn).call(this,"PEER_LEAVE",{from:P})),A(this,Ge).onPeerStream((x,P)=>{const T=x.getAudioTracks()[0];T&&(A(this,Qs)?A(this,Qs).call(this,T,x,P,P):A(this,Gr).push({track:T,stream:x,identityId:P,nostrPubkey:P}))}),ce.ok(r,"DHT ready — searching for peers"),ce.info("Searching for peers in room…"),ce.startFirstTimer(15e3)}stop(){var t,e;(t=A(this,qr))==null||t.call(this),(e=A(this,Ge))==null||e.leave(),yt(this,Ge,null),A(this,Mi).clear()}move(t,e,n,i=0){var r;(r=A(this,Vr))==null||r.call(this,{pos:{x:t,y:e,z:n,ry:i}})}chat(t){var e;(e=A(this,Wr))==null||e.call(this,{username:A(this,$s),text:t,ts:Date.now()})}setAvatar(t){var e;yt(this,Ks,t),(e=A(this,Xr))==null||e.call(this,{presetId:t})}setStatus(t){var e;yt(this,Js,t),(e=A(this,Zr))==null||e.call(this,{status:t})}broadcastTalking(t){var e;(e=A(this,Yr))==null||e.call(this,{talking:!!t})}addVoiceTrack(t,e){var n;A(this,Zo).push({track:t,stream:e}),(n=A(this,Ge))==null||n.addStream(e)}onVoiceTrack(t){yt(this,Qs,t);const e=A(this,Gr).splice(0);for(const{track:n,stream:i,identityId:r,nostrPubkey:o}of e)n.readyState!=="ended"&&t(n,i,r,o)}wireToIdentityId(t){return t}getPeers(){return{}}on(t,e){return A(this,ii)[t]||(A(this,ii)[t]=[]),A(this,ii)[t].push(e),()=>{A(this,ii)[t]=A(this,ii)[t].filter(n=>n!==e)}}get roomName(){return A(this,Hr)}get roomHash(){return A(this,js)}get nodeUrl(){return null}}Ge=new WeakMap,ii=new WeakMap,$s=new WeakMap,Ks=new WeakMap,Js=new WeakMap,js=new WeakMap,Hr=new WeakMap,gl=new WeakMap,Mi=new WeakMap,Zo=new WeakMap,Qs=new WeakMap,Gr=new WeakMap,Vr=new WeakMap,Wr=new WeakMap,Xr=new WeakMap,Zr=new WeakMap,Yr=new WeakMap,qr=new WeakMap,Yo=new WeakMap,$r=new WeakMap,en=new WeakSet,ml=function(){var t;return((t=Ul())==null?void 0:t.peerId)??"unknown"},Kn=function(t,e){var n;(n=A(this,ii)[t])==null||n.forEach(i=>i(e))};var Ve,pn,tr,Kr,Jr,jr,Ne,Wu,Xu,Zu,Sn;class nx extends EventTarget{constructor(){super(...arguments);ut(this,Ne);ut(this,Ve,null);ut(this,pn,new Map);ut(this,tr,!1);ut(this,Kr,"");ut(this,Jr,0);ut(this,jr,"available")}get id(){var e;return((e=Ul())==null?void 0:e.peerId)??""}get peers(){return[...A(this,pn).values()]}get peerCount(){return A(this,pn).size}get roomName(){var e;return((e=A(this,Ve))==null?void 0:e.roomName)??"main"}get nodeUrl(){var e;return((e=A(this,Ve))==null?void 0:e.nodeUrl)??null}async start(e,n=0,i="available"){if(A(this,tr))return;yt(this,tr,!0),yt(this,Kr,e),yt(this,Jr,n),yt(this,jr,i);let r;try{r=new Qv(e,n,i),await r.start()}catch(o){if((o==null?void 0:o.message)==="NO_NODE")r=new Nh(e,n,i),await r.start(o.roomHash,o.roomName,o.linkType,o.knownPeers??[]);else{ce.info("xpacenode unreachable — falling back to public DHT route");const{parseCurrentLink:a,getKnownPeers:l}=await Hv(async()=>{const{parseCurrentLink:u,getKnownPeers:d}=await Promise.resolve().then(()=>Zv);return{parseCurrentLink:u,getKnownPeers:d}},void 0,import.meta.url),c=await a(),h=l(c.roomHash);r=new Nh(e,n,i),await r.start(c.roomHash,c.roomId,c.type,h)}}yt(this,Ve,r),Ct(this,Ne,Wu).call(this)}stop(){var e;(e=A(this,Ve))==null||e.stop(),yt(this,Ve,null),A(this,pn).clear(),yt(this,tr,!1)}move(e,n,i,r=0){var o;(o=A(this,Ve))==null||o.move(e,n,i,r)}setAvatar(e){var n;yt(this,Jr,e),(n=A(this,Ve))==null||n.setAvatar(e)}setStatus(e){var n;yt(this,jr,e),(n=A(this,Ve))==null||n.setStatus(e)}sendChat(e){var i;if(!e.trim())return;const n=Date.now();Ct(this,Ne,Sn).call(this,"chat",{from:this.id,username:A(this,Kr),text:e,ts:n}),(i=A(this,Ve))==null||i.chat(e)}addVoiceTrack(e,n){var i;(i=A(this,Ve))==null||i.addVoiceTrack(e,n)}onVoiceTrack(e){var n;(n=A(this,Ve))==null||n.onVoiceTrack(e)}wireToIdentityId(e){var n;return(n=A(this,Ve))==null?void 0:n.wireToIdentityId(e)}broadcastTalking(e){var n;(n=A(this,Ve))==null||n.broadcastTalking(e)}}Ve=new WeakMap,pn=new WeakMap,tr=new WeakMap,Kr=new WeakMap,Jr=new WeakMap,jr=new WeakMap,Ne=new WeakSet,Wu=function(){const e=A(this,Ve);e.on("HELLO",({from:n,username:i,presetId:r=0,status:o="available"})=>{A(this,pn).has(n)||Ct(this,Ne,Xu).call(this,n,i,r,o)}),e.on("PEER_LEAVE",({from:n})=>Ct(this,Ne,Zu).call(this,n)),e.on("MOVE",({from:n,pos:i})=>{Ct(this,Ne,Sn).call(this,"peer:move",{peerId:n,pos:i})}),e.on("AVATAR_CHANGE",({from:n,presetId:i})=>{Ct(this,Ne,Sn).call(this,"peer:avatar",{peerId:n,presetId:i})}),e.on("STATUS_CHANGE",({from:n,status:i})=>{Ct(this,Ne,Sn).call(this,"peer:status",{peerId:n,status:i})}),e.on("PEER_TALKING",({from:n,talking:i})=>{Ct(this,Ne,Sn).call(this,"peer:talking",{peerId:n,talking:i})}),e.on("CHAT",({from:n,username:i,text:r,ts:o})=>{Ct(this,Ne,Sn).call(this,"chat",{from:n,username:i,text:r,ts:o})})},Xu=function(e,n,i,r){A(this,pn).set(e,{peerId:e,username:n,presetId:i,status:r}),Ct(this,Ne,Sn).call(this,"peer:join",{peerId:e,username:n,presetId:i,status:r}),Ct(this,Ne,Sn).call(this,"status",{peerCount:A(this,pn).size})},Zu=function(e){A(this,pn).has(e)&&(A(this,pn).delete(e),Ct(this,Ne,Sn).call(this,"peer:leave",{peerId:e}),Ct(this,Ne,Sn).call(this,"status",{peerCount:A(this,pn).size}))},Sn=function(e,n){this.dispatchEvent(new CustomEvent(e,{detail:n}))};const ge=new nx,Yn=Object.freeze({OCEAN:"ocean",COAST:"coast",DESERT:"desert",PLAINS:"plains",FOREST:"forest",MOUNTAIN:"mountain",ARCTIC:"arctic",JUNGLE:"jungle",TUNDRA:"tundra"});function Do(s){let t=5381;for(let e=0;e<s.length;e++)t=Math.imul(t,33)^s.charCodeAt(e);return(t>>>0).toString(16).padStart(8,"0")}function Yu(s,t,e,n){const i=JSON.stringify({parentHash:s,authorId:t,changes:e,timestamp:n});let r=Do(i),o=Do(r+i.slice(0,32)),a=Do(o+i.slice(-32)),l=Do(a+t);return r+o+a+l}class zs{constructor(t,e,n,i="",r=Date.now()){this.parentHash=t,this.authorId=e,this.changes=Object.freeze([...n]),this.message=i,this.timestamp=r,this.hash=Yu(t,e,n,r)}buildRevert(t,e=Date.now()){const n=this.changes.map(i=>({cellId:i.cellId,key:i.key,oldValue:i.newValue,newValue:i.oldValue}));return new zs(this.hash,t,n,`revert: ${this.message||this.hash.slice(0,8)}`,e)}toJSON(){return{hash:this.hash,parentHash:this.parentHash,authorId:this.authorId,message:this.message,timestamp:this.timestamp,changes:this.changes}}}const ix="universe",sx="genesis: the universe begins";var ze,tn;class rx{constructor(){ut(this,ze,new Map);ut(this,tn,null);this._genesis()}_genesis(){const t=new zs(null,ix,[],sx,0);A(this,ze).set(t.hash,t),yt(this,tn,t.hash)}get head(){return A(this,tn)}get length(){return A(this,ze).size}getCommit(t){return A(this,ze).get(t)??null}headCommit(){return A(this,ze).get(A(this,tn))}log(t=1/0){const e=[];let n=A(this,tn);for(;n&&e.length<t;){const i=A(this,ze).get(n);if(!i)break;e.push(i),n=i.parentHash}return e}stateAt(t){const e=[];let n=t;for(;n;){const r=A(this,ze).get(n);if(!r)break;e.unshift(r),n=r.parentHash}const i=new Map;for(const r of e)for(const{cellId:o,key:a,newValue:l}of r.changes)i.set(`${o}:${a}`,l);return i}currentState(){return this.stateAt(A(this,tn))}diff(t,e){const n=this.stateAt(t),i=this.stateAt(e),r=[],o=new Set([...n.keys(),...i.keys()]);for(const a of o){const l=n.get(a)??null,c=i.get(a)??null;if(l!==c){const[h,u]=a.split(":");r.push({cellId:h,key:u,before:l,after:c})}}return r}commit(t,e,n=""){if(!Array.isArray(e)||e.length===0)throw new Error("commit requires at least one change");for(const r of e)if(!r.cellId||!r.key)throw new Error("each change must have cellId and key");const i=new zs(A(this,tn),t,e,n);return A(this,ze).set(i.hash,i),yt(this,tn,i.hash),i}revert(t,e){const n=A(this,ze).get(t);if(!n)throw new Error(`commit ${t} not found`);if(n.changes.length===0)throw new Error("cannot revert empty commit");n.buildRevert(e);const i=new zs(A(this,tn),e,[...n.changes].map(r=>({cellId:r.cellId,key:r.key,oldValue:r.newValue,newValue:r.oldValue})),`revert: ${n.message||n.hash.slice(0,8)}`);return A(this,ze).set(i.hash,i),yt(this,tn,i.hash),i}applyExternal(t){if(A(this,ze).has(t.hash))return A(this,ze).get(t.hash);if(t.parentHash&&!A(this,ze).has(t.parentHash))throw new Error(`missing parent ${t.parentHash} — cannot apply ${t.hash}`);const e=new zs(t.parentHash,t.authorId,t.changes,t.message,t.timestamp);return A(this,ze).set(t.hash,e),t.parentHash===A(this,tn)&&yt(this,tn,t.hash),e}verify(){for(const t of A(this,ze).values()){if(Yu(t.parentHash,t.authorId,t.changes,t.timestamp)!==t.hash)return{valid:!1,broken:t.hash};if(t.parentHash&&!A(this,ze).has(t.parentHash))return{valid:!1,broken:t.hash,reason:"missing-parent"}}return{valid:!0}}}ze=new WeakMap,tn=new WeakMap;const fe=Object.freeze({SOLAR:"solar",WIND:"wind",HYDRO:"hydro",MINERAL:"mineral",RARE_EARTH:"rare_earth",BIOLOGICAL:"biological",FISHERY:"fishery",GEOTHERMAL:"geothermal"});Yn.OCEAN+"",fe.FISHERY+"",fe.WIND+"",Yn.COAST+"",fe.FISHERY+"",fe.WIND+"",fe.SOLAR+"",Yn.DESERT+"",fe.SOLAR+"",fe.RARE_EARTH+"",fe.MINERAL+"",Yn.PLAINS+"",fe.WIND+"",fe.MINERAL+"",fe.BIOLOGICAL+"",fe.SOLAR+"",Yn.FOREST+"",fe.BIOLOGICAL+"",fe.HYDRO+"",fe.WIND+"",Yn.MOUNTAIN+"",fe.MINERAL+"",fe.RARE_EARTH+"",fe.GEOTHERMAL+"",fe.WIND+"",fe.HYDRO+"",Yn.ARCTIC+"",fe.MINERAL+"",fe.WIND+"",Yn.JUNGLE+"",fe.BIOLOGICAL+"",fe.HYDRO+"",fe.SOLAR+"",Yn.TUNDRA+"",fe.MINERAL+"",fe.GEOTHERMAL+"",fe.WIND+"";(()=>{var h;const s=document.getElementById("conn-log"),t=document.getElementById("conn-log-body"),e=document.getElementById("conn-log-title"),n=document.getElementById("conn-log-toggle"),i=document.getElementById("conn-log-dismiss");if(!s)return;const r={pending:"⏳",ok:"✅",fail:"❌",warn:"⚠️",info:"·",host:"🏠"},o=new Map,a=()=>s.classList.remove("hidden"),l=()=>s.classList.add("hidden");ce.addEventListener("step",({detail:u})=>{if(a(),u.action==="add"){const f=document.createElement("div");f.className=`cl-step ${u.status}`,f.innerHTML=`
        <span class="cl-icon">${r[u.status]??"·"}</span>
        <div>
          <div class="cl-text">${u.text}</div>
          ${u.detail?`<div class="cl-detail">${u.detail}</div>`:""}
        </div>`,t.appendChild(f),o.set(u.id,f),t.scrollTop=t.scrollHeight}else{const f=o.get(u.id);if(!f)return;if(f.className=`cl-step ${u.status}`,f.querySelector(".cl-icon").textContent=r[u.status]??"·",u.detail){let g=f.querySelector(".cl-detail");g||(g=document.createElement("div"),g.className="cl-detail",f.querySelector(".cl-text").after(g)),g.textContent=u.detail}}const d=ce.steps.at(-1);d&&(e.textContent=`⬡ ${d.text}`)}),ce.addEventListener("clear",()=>{t.innerHTML="",o.clear()});let c=!1;(h=document.getElementById("conn-log-header"))==null||h.addEventListener("click",()=>{c=!c,t.classList.toggle("collapsed",c),n.textContent=c?"▼":"▲"}),i==null||i.addEventListener("click",l),ce.addEventListener("first-in-room",()=>{if(e.textContent="🏠 You're the host",s.style.borderColor="rgba(255,180,50,0.35)",!document.getElementById("cl-host-share")){const d=document.createElement("button");d.id="cl-host-share",d.textContent="🔗 Copy invite link",d.style.cssText=`
        display:block; width:calc(100% - 28px); margin:4px 14px 8px;
        padding:7px; border-radius:6px; border:1px solid rgba(255,180,50,0.3);
        background:rgba(255,180,50,0.08); color:rgba(255,220,100,0.9);
        font-size:0.75rem; cursor:pointer; text-align:center;
      `,d.addEventListener("click",async()=>{try{const{link:f}=await Ol({roomId:ge.roomName,node:ge.nodeUrl??void 0});await navigator.clipboard.writeText(f),d.textContent="✅ Copied!",setTimeout(()=>{d.textContent="🔗 Copy invite link"},2e3)}catch{}}),t.after(d)}}),ge.addEventListener("peer:join",()=>{var u;e.textContent="⬡ Connected",s.style.borderColor="",(u=document.getElementById("cl-host-share"))==null||u.remove(),setTimeout(l,6e3)})})();(async()=>{const s=await Gv(),t=new rx;window._worldHistory=t;let e=!1;function n({peerCount:E}={}){document.querySelectorAll(".ipfs-dot").forEach(v=>{v.className="ipfs-dot green"}),document.querySelectorAll("#ipfs-label").forEach(v=>{v.textContent=`P2P · ${s.shortId}`}),E!==void 0&&document.querySelectorAll("#ipfs-peers").forEach(v=>{E>0?(v.textContent=`${E} peer${E!==1?"s":""}`,v.style.color="rgba(120,255,160,0.7)"):e?(v.textContent="· searching…",v.style.color="rgba(255,200,80,0.7)"):v.textContent=""})}n({peerCount:0}),ge.addEventListener("status",E=>n(E.detail)),ge.addEventListener("commit",E=>{try{t.applyExternal(E.detail.commit)}catch{}});const i=document.getElementById("lobby"),r=document.getElementById("loading"),o=document.getElementById("load-fill"),a=document.getElementById("load-text"),l=document.getElementById("hud"),c=document.getElementById("click-to-start"),h=document.getElementById("enter-btn"),u=document.getElementById("username"),d=document.getElementById("room-name");!s.isNew&&s.displayName&&(u.value=s.displayName),d&&(d.value=qv());const f=document.getElementById("id-fingerprint");f&&(f.textContent=s.isNew?"New identity generated":`Identity · ${s.shortId}`),function(){const v=document.getElementById("lobby-avatar-grid");if(!v)return;const x=parseInt(localStorage.getItem("spaceAvatarId")??"0",10),P=T=>"#"+T.toString(16).padStart(6,"0");is.forEach(T=>{const b=P(T.skin),O=P(T.hair),w=P(T.outfit),y=P(T.accent),I=document.createElement("div");I.className="lav-chip"+(T.id===x?" lav-active":""),I.dataset.id=String(T.id),I.title=T.label,I.innerHTML=`<svg viewBox="0 0 60 82" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="30" cy="16" rx="17" ry="14" fill="${O}"/>
        <circle cx="30" cy="22" r="13" fill="${b}"/>
        <ellipse cx="17.5" cy="22" rx="3.5" ry="4.5" fill="${b}"/>
        <ellipse cx="42.5" cy="22" rx="3.5" ry="4.5" fill="${b}"/>
        <circle cx="25" cy="21" r="2.8" fill="${y}"/><circle cx="35" cy="21" r="2.8" fill="${y}"/>
        <circle cx="25" cy="21" r="1.6" fill="#111"/><circle cx="35" cy="21" r="1.6" fill="#111"/>
        <rect x="26.5" y="34" width="7" height="5" rx="2" fill="${b}"/>
        <rect x="14" y="39" width="32" height="24" rx="6" fill="${w}"/>
        <rect x="22" y="44" width="16" height="5" rx="2" fill="${y}" opacity="0.75"/>
        <rect x="5" y="40" width="10" height="20" rx="5" fill="${w}"/>
        <rect x="45" y="40" width="10" height="20" rx="5" fill="${w}"/>
        <rect x="16" y="62" width="11" height="14" rx="4" fill="${w}"/>
        <rect x="33" y="62" width="11" height="14" rx="4" fill="${w}"/>
      </svg>`,I.addEventListener("click",()=>{v.querySelectorAll(".lav-chip").forEach(H=>H.classList.remove("lav-active")),I.classList.add("lav-active"),localStorage.setItem("spaceAvatarId",String(T.id))}),v.appendChild(I)})}();let g=null;const _=document.getElementById("active-rooms"),m=document.getElementById("active-rooms-list");tx(E=>{if(!(!_||!m)){if(E.length===0){_.style.display="none";return}_.style.display="block",m.innerHTML=E.slice(0,5).map(v=>{const x=v.roomName==="main"?"main (public)":v.roomName,P=`${v.count} ${v.count===1?"person":"people"}`;return`<button class="lobby-room-chip" data-room="${v.roomName}">
        <span class="room-chip-dot"></span>
        <span class="room-chip-name">${x}</span>
        <span class="room-chip-count">${P}</span>
      </button>`}).join(""),m.querySelectorAll(".lobby-room-chip").forEach(v=>{v.addEventListener("click",()=>{d&&(d.value=v.dataset.room)})})}}).then(E=>{g=E}),u==null||u.addEventListener("keydown",E=>{E.key==="Enter"&&p()}),d==null||d.addEventListener("keydown",E=>{E.key==="Enter"&&p()}),h==null||h.addEventListener("click",p);function p(){const E=u.value.trim();if(!E){u.focus(),u.style.borderColor="#f55";return}u.style.borderColor="",s.setName(E),d!=null&&d.value.trim()&&$v(d.value.trim()),g==null||g(),g=null,window._spaceUsername=E,i.style.display="none",r.classList.add("visible");const{scene:v,camera:x,renderer:P,onShipLoaded:T}=q_((b,O)=>{o.style.width=b+"%",a.textContent=O});T(()=>{var Pe,ie,sn,rn,Cn,ss,dr;r.classList.remove("visible"),l.classList.add("visible"),c.classList.remove("hidden");const{meshes:b,screens:O}=$_(v),{openScreen:w,isOpen:y}=Tv(),I=parseInt(localStorage.getItem("spaceAvatarId")??"0",10),H=new Fv(X=>B==null?void 0:B.navigate(X)),k=document.getElementById("presence-panel");k&&k.classList.add("pp-visible"),H.setSelf(E,I,"OUTSIDE","available");const B=Mv(v,x,P,X=>{ax(X),H.updateSelfZone(X)},X=>{ge.setAvatar(X),H.setSelf(E,X,H._self.zone,Q)});let Q="available";const Z=document.getElementById("status-btn"),st=document.getElementById("status-menu");Z&&st&&(Il.forEach(X=>{const mt="#"+X.color.toString(16).padStart(6,"0"),Et=document.createElement("div");Et.className="sm-opt"+(X.id===Q?" sm-active":""),Et.dataset.status=X.id,Et.innerHTML=`<span class="sm-dot" style="background:${mt};box-shadow:0 0 4px ${mt}40"></span>${X.label}`,Et.addEventListener("click",qt=>{qt.stopPropagation(),Q=X.id,Z.innerHTML=`<span class="sm-dot" style="background:${mt};box-shadow:0 0 4px ${mt}40;display:inline-block;vertical-align:middle;width:8px;height:8px;border-radius:50%;margin-right:5px"></span>${X.label.replace(/^\S+\s/,"")}`,B.setStatus(X.id),H.updateSelfStatus(X.id),ge.setStatus(X.id),st.querySelectorAll(".sm-opt").forEach(xe=>xe.classList.toggle("sm-active",xe.dataset.status===X.id)),st.classList.remove("sm-open")}),st.appendChild(Et)}),Z.addEventListener("click",X=>{X.stopPropagation(),st.classList.toggle("sm-open")}),document.addEventListener("click",()=>st.classList.remove("sm-open"))),document.querySelectorAll(".vtbtn").forEach(X=>{X.addEventListener("click",mt=>{mt.stopPropagation(),gt(),B.setView(X.dataset.view),X.dataset.view==="first"&&document.pointerLockElement!==P.domElement&&P.domElement.requestPointerLock()})});let J=!1;function gt(){J||(J=!0,c.classList.add("hidden"))}document.addEventListener("pointerlockchange",()=>{document.pointerLockElement===P.domElement&&gt()}),c.addEventListener("click",gt);const St=new Set(["KeyW","KeyA","KeyS","KeyD"]),Rt=new Set([...St,"ArrowUp","ArrowDown","ArrowLeft","ArrowRight"]);document.addEventListener("keydown",X=>{Rt.has(X.code)&&(gt(),St.has(X.code)&&B.getMode()==="first"&&document.pointerLockElement!==P.domElement&&P.domElement.requestPointerLock())});const q=new P_,lt=new vt,F=new gi(new L(0,1,0),0),Y=new L;P.domElement.addEventListener("click",X=>{if(y()||document.pointerLockElement===P.domElement||B.isDragMoved())return;gt(),lt.x=X.clientX/window.innerWidth*2-1,lt.y=-(X.clientY/window.innerHeight)*2+1,q.setFromCamera(lt,x);const mt=q.intersectObjects(b);if(mt.length>0){w(mt[0].object.userData.screen);return}q.ray.intersectPlane(F,Y)&&B.navigate({x:Math.max(-65,Math.min(65,Y.x)),z:Math.max(-65,Math.min(65,Y.z))})});const K=new Nv,$=document.getElementById("voice-btn"),ct=new Map,Tt=new Map;ge.addEventListener("peer:join",X=>{const{peerId:mt,username:Et,presetId:qt}=X.detail;if(Tt.set(mt,Et),ct.has(mt))return;const xe=qt??ox(mt),He=Su(Et,xe);v.add(He),ct.set(mt,He),Uh(l,ct.size+1),H.addPeer(mt,Et,xe),B.peerJoin(mt,Et)}),ge.addEventListener("peer:move",X=>{const{peerId:mt,pos:Et}=X.detail,qt=ct.get(mt);if(H.movePeer(mt,Et.x,Et.z),qt){const xe=qt.position.clone();if(qt.position.lerp(new L(Et.x,Et.y??0,Et.z),.6),Et.ry!==void 0){let He=Et.ry-qt.rotation.y;for(;He>Math.PI;)He-=Math.PI*2;for(;He<-Math.PI;)He+=Math.PI*2;qt.rotation.y+=He*.25}xe.distanceTo(qt.position)>.008&&(qt.userData.isMoving=!0,clearTimeout(qt.userData._stopTimer),qt.userData._stopTimer=setTimeout(()=>{qt.userData.isMoving=!1},180))}B.peerMove(mt,Et.x,Et.z,Tt.get(mt)??mt.slice(-4))}),ge.addEventListener("peer:leave",X=>{const mt=ct.get(X.detail.peerId);mt&&(v.remove(mt),ct.delete(X.detail.peerId),Uh(l,ct.size+1)),K.removePeer(X.detail.peerId),H.removePeer(X.detail.peerId),B.peerLeave(X.detail.peerId),Tt.delete(X.detail.peerId)}),ge.addEventListener("peer:avatar",X=>{const{peerId:mt,presetId:Et}=X.detail,qt=ct.get(mt),xe=Tt.get(mt)??mt.slice(-4);qt&&bu(qt,xe,Et),H.updatePeerPreset(mt,Et)}),ge.addEventListener("peer:status",X=>{const{peerId:mt,status:Et}=X.detail,qt=ct.get(mt);qt&&Eu(qt,Et),H.updatePeerStatus(mt,Et)}),ge.addEventListener("peer:talking",X=>{const{peerId:mt,talking:Et}=X.detail,qt=ct.get(mt);qt&&(qt.userData._isTalking=Et)});let zt=performance.now();(function X(){requestAnimationFrame(X);const mt=performance.now(),Et=Math.min((mt-zt)/1e3,.1);zt=mt;const qt=mt/1e3;ct.forEach((xe,He)=>{Au(xe,xe.userData.isMoving??!1,Et),wu(xe,xe.userData._isTalking??!1,qt)}),B.setSelfTalking(K.isTalking("self"),qt)})(),ge.start(E,I,Q),e=!0,n({peerCount:0}),window._sync=ge,window._voice=K;const D=({active:X,muted:mt}={})=>{$&&(X?mt?($.textContent="🔇 Muted",$.className="hud-side-btn voice-muted"):($.textContent="🎙 Live",$.className="hud-side-btn voice-active"):($.textContent="🎙 Voice",$.className="hud-side-btn"))};if(K.onStateChange(D),D({active:!1,muted:!1}),K.onTalkChange(X=>{B.setTalkingPeers(X)}),K.onSelfTalkChange(X=>{ge.broadcastTalking(X)}),$){let X=!1;$.addEventListener("click",async mt=>{if(mt.stopPropagation(),K.active){K.toggleMute();return}if(X)return;X=!0,$.textContent="⏳ Connecting…";const Et=await K.start(ge);if(X=!1,!Et){$.textContent="🚫 No mic",$.className="hud-side-btn";return}D({active:K.active,muted:K.muted})})}setInterval(()=>{const X=B.getPosition(),mt=B.getRotation();ge.move(X.x,X.y,X.z,mt.y),K.update(X,ct)},50);const Zt=document.getElementById("chat-toggle"),Gt=document.getElementById("chat-panel"),ue=document.getElementById("chat-close"),It=document.getElementById("chat-input"),te=document.getElementById("chat-send"),Xt=document.getElementById("chat-messages"),Wt=document.getElementById("chat-badge");let _e=0;const C=document.getElementById("mb-chat-badge");function M(){var X;Gt.classList.add("open"),Zt.classList.add("open"),(X=document.getElementById("mb-chat-btn"))==null||X.classList.add("mb-active"),_e=0,Wt.textContent="",Wt.classList.remove("visible"),C&&(C.textContent="",C.classList.remove("visible")),It.focus()}function W(){var X;Gt.classList.remove("open"),Zt.classList.remove("open"),(X=document.getElementById("mb-chat-btn"))==null||X.classList.remove("mb-active")}Zt.addEventListener("click",X=>{X.stopPropagation(),Gt.classList.contains("open")?W():M()}),ue.addEventListener("click",X=>{X.stopPropagation(),W()}),(Pe=document.getElementById("mb-chat-btn"))==null||Pe.addEventListener("click",X=>{X.stopPropagation(),Gt.classList.contains("open")?W():M()});function et(){const X=It.value.trim();X&&(ge.sendChat(X),It.value="")}te.addEventListener("click",X=>{X.stopPropagation(),et()}),It.addEventListener("keydown",X=>{X.key==="Enter"&&et()}),Gt.addEventListener("click",X=>X.stopPropagation());function it({from:X,username:mt,text:Et,ts:qt}){const xe=X===ge.id,He=new Date(qt).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),qe=document.createElement("div");if(qe.className="chat-msg",qe.innerHTML=`
          <div class="chat-msg-meta">
            <span class="chat-msg-name${xe?" self":""}">${mt}</span>
            <span class="chat-msg-time">${He}</span>
          </div>
          <div class="chat-msg-body">${Et.replace(/</g,"&lt;")}</div>
        `,Xt.appendChild(qe),Xt.scrollTop=Xt.scrollHeight,!Gt.classList.contains("open")&&!xe){_e++;const Pn=_e>9?"9+":String(_e);Wt.textContent=Pn,Wt.classList.add("visible"),C&&(C.textContent=Pn,C.classList.add("visible"))}}function nt(X){const mt=document.createElement("div");mt.className="chat-system",mt.textContent=X,Xt.appendChild(mt),Xt.scrollTop=Xt.scrollHeight}const Lt=new Map;ge.addEventListener("chat",X=>it(X.detail)),ge.addEventListener("peer:join",X=>{Lt.set(X.detail.peerId,X.detail.username),nt(`${X.detail.username} joined`)}),ge.addEventListener("peer:leave",X=>{const mt=Lt.get(X.detail.peerId)??"Someone";Lt.delete(X.detail.peerId),nt(`${mt} left`)});const dt=new Cv,ft=new Lv,Yt=new Rv(E);dt.createReality(Yt),ft.setNode(E,Ds.PUBLIC),(ie=document.getElementById("nm-open-btn"))==null||ie.addEventListener("click",X=>{X.stopPropagation(),Rh(dt,ft,E)});const rt=document.getElementById("invite-modal"),bt=document.getElementById("invite-lock-input"),Jt=document.getElementById("invite-link-box"),Ut=document.getElementById("invite-link-text"),_t=document.getElementById("invite-room-name"),Dt=document.getElementById("invite-generate-btn"),kt=document.getElementById("invite-copy-btn"),ve=document.getElementById("invite-close-btn");let N="";const xt=()=>{_t.textContent=`Room: ${ge.roomName}`,bt.value="",Jt.style.display="none",kt.style.display="none",Dt.style.display="",Dt.textContent="Generate link",rt.style.display="flex",setTimeout(()=>bt.focus(),50)};(sn=document.getElementById("invite-btn"))==null||sn.addEventListener("click",X=>{X.stopPropagation(),xt()}),ve==null||ve.addEventListener("click",()=>{rt.style.display="none"}),rt==null||rt.addEventListener("click",X=>{X.target===rt&&(rt.style.display="none")}),Dt==null||Dt.addEventListener("click",async()=>{Dt.textContent="Generating…",Dt.disabled=!0;try{const{link:X}=await Ol({roomId:ge.roomName,lockCode:bt.value.trim(),node:ge.nodeUrl??void 0});N=X,Ut.textContent=X,Jt.style.display="block",kt.style.display="",Dt.style.display="none",navigator.clipboard.writeText(X).catch(()=>{})}catch(X){console.error("[invite] link generation failed",X),Dt.textContent="Generate link"}finally{Dt.disabled=!1}}),kt==null||kt.addEventListener("click",async()=>{try{await navigator.clipboard.writeText(N);const X=kt.textContent;kt.textContent="✅ Copied!",setTimeout(()=>{kt.textContent=X},2e3)}catch{prompt("Copy this link:",N)}}),Ut==null||Ut.addEventListener("click",()=>kt==null?void 0:kt.click()),bt==null||bt.addEventListener("keydown",X=>{X.key==="Enter"&&(Dt==null||Dt.click())}),(rn=document.getElementById("mb-avatar-btn"))==null||rn.addEventListener("click",()=>{var X;return(X=document.getElementById("avatar-btn"))==null?void 0:X.click()}),(Cn=document.getElementById("mb-nm-btn"))==null||Cn.addEventListener("click",X=>{X.stopPropagation(),Rh(dt,ft,E)}),(ss=document.getElementById("mb-voice-btn"))==null||ss.addEventListener("click",X=>{X.stopPropagation(),$==null||$.click()}),(dr=document.getElementById("mb-status-btn"))==null||dr.addEventListener("click",X=>{X.stopPropagation(),Z==null||Z.click()}),K.onStateChange(({active:X,muted:mt}={})=>{const Et=document.getElementById("mb-voice-btn");Et&&(X?mt?(Et.innerHTML="🔇",Et.className="mb-btn mb-voice-active",Et.style.color="#ff6b6b"):(Et.innerHTML="🎙",Et.className="mb-btn mb-voice-active",Et.style.color=""):(Et.innerHTML="🎙",Et.className="mb-btn"))});const j=document.getElementById("screen-hint"),tt=document.getElementById("screen-hint-name");let at=null,Ot=null;document.addEventListener("keydown",X=>{if(X.code==="KeyE"&&at&&!y()&&w(at),X.code==="KeyF"&&Ot){const mt=Ot.def.id,Et=mt==="main-left"||mt==="main-right",qt=$n(Et?"main-left":mt);Et&&$n("main-right"),ne(Ot.def.label,qt)}});function ne(X,mt){let Et=document.getElementById("door-action-hint");Et||(Et=document.createElement("div"),Et.id="door-action-hint",Et.style.cssText=`
            position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);
            background:rgba(0,0,0,0.7);border:1px solid rgba(255,255,255,0.2);
            padding:10px 22px;border-radius:20px;font-size:0.9rem;color:#fff;
            pointer-events:none;z-index:13;opacity:0;transition:opacity 0.2s;
          `,document.body.appendChild(Et)),Et.textContent=`${X} ${mt?"opened":"closed"}`,Et.style.opacity="1",clearTimeout(Et._t),Et._t=setTimeout(()=>{Et.style.opacity="0"},1500)}const ae=new Set;setInterval(()=>{var He;if(y())return;const X=B.getPosition();let mt=null,Et=4;O.forEach(qe=>{const Pn=X.x-qe.position.x,Di=X.z-qe.position.z,S=Math.sqrt(Pn*Pn+Di*Di);S<Et&&(Et=S,mt=qe)}),at=mt,j&&(j.style.display=mt?"flex":"none",mt&&tt&&(tt.textContent=mt.label)),eo.forEach(qe=>{const Pn=X.x-qe.hinge.x,Di=X.z-qe.hinge.z,S=Math.sqrt(Pn*Pn+Di*Di),U=qe.id;S<2.2&&!Ps(U)?($n(U),ae.add(U),U==="main-left"&&(Ps("main-right")||$n("main-right"),ae.add("main-right")),U==="main-right"&&(Ps("main-left")||$n("main-left"),ae.add("main-left"))):S>3.5&&ae.has(U)&&Ps(U)&&($n(U),ae.delete(U),U==="main-left"&&(Ps("main-right")&&$n("main-right"),ae.delete("main-right")),U==="main-right"&&(Ps("main-left")&&$n("main-left"),ae.delete("main-left")))});const qt=Ru(X,2.8);Ot=qt;const xe=document.getElementById("door-proximity-hint");if(xe)if(qt&&!mt){const qe=(He=qt.state)!=null&&He.open?"Close":"Open";xe.style.display="flex",xe.querySelector("#door-hint-name").textContent=`${qe} ${qt.def.label}`}else xe.style.display="none"},150)})}})();function ox(s){let t=0;for(let e=0;e<s.length;e++)t=t*31+s.charCodeAt(e)|0;return Math.abs(t)%is.length}function Uh(s,t){var n;const e=(n=s==null?void 0:s.querySelector)==null?void 0:n.call(s,"#online-count");e&&(e.textContent=`● ${t} aboard`)}const Oh={OUTSIDE:{color:"#88cc66",desc:"Outside the building"},LOBBY:{color:"#ffffff",desc:"Reception & Entrance"},OPS:{color:"#ffaa44",desc:"Operations & Technical Support"},FUN:{color:"#44ffaa",desc:"Chill, Social & Games"},DESIGN:{color:"#ff6ba0",desc:"UI/UX, Design & 3D"},ENGINEERING:{color:"#44aaff",desc:"Development & Engineering"},"":{color:"#ffffff",desc:""}};function ax(s){const t=document.getElementById("zone-name"),e=document.getElementById("zone-desc"),n=Oh[s]||Oh[""];t&&(t.textContent=s,t.style.color=n.color),e&&(e.textContent=n.desc),document.querySelectorAll(".map-zone").forEach(i=>{i.classList.toggle("active",i.dataset.zone===s)})}
