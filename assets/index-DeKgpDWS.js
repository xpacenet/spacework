var _d=Object.defineProperty;var Gc=i=>{throw TypeError(i)};var vd=(i,e,t)=>e in i?_d(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var In=(i,e,t)=>vd(i,typeof e!="symbol"?e+"":e,t),Jo=(i,e,t)=>e.has(i)||Gc("Cannot "+t);var oe=(i,e,t)=>(Jo(i,e,"read from private field"),t?t.call(i):e.get(i)),$e=(i,e,t)=>e.has(i)?Gc("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(i):e.set(i,t),gt=(i,e,t,n)=>(Jo(i,e,"write to private field"),n?n.call(i,t):e.set(i,t),t),je=(i,e,t)=>(Jo(i,e,"access private method"),t);var Kt=(i,e,t,n)=>({set _(s){gt(i,e,s,t)},get _(){return oe(i,e,n)}});(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const fc="165",xd=0,Vc=1,yd=2,Jh=1,jh=2,kn=3,pi=0,qt=1,on=2,li=0,ws=1,Wc=2,Xc=3,Zc=4,Sd=5,Li=100,Md=101,Ed=102,wd=103,bd=104,Td=200,Ad=201,Rd=202,Cd=203,Xa=204,Za=205,Pd=206,Ld=207,Id=208,Dd=209,Nd=210,Ud=211,Od=212,Fd=213,Bd=214,zd=0,kd=1,Hd=2,Ro=3,Gd=4,Vd=5,Wd=6,Xd=7,Qh=0,Zd=1,Yd=2,hi=0,qd=1,$d=2,Kd=3,eu=4,Jd=5,jd=6,Qd=7,tu=300,Fs=301,Bs=302,Ya=303,qa=304,ko=306,$a=1e3,Di=1001,Ka=1002,an=1003,ef=1004,Xr=1005,pn=1006,jo=1007,Ni=1008,mi=1009,tf=1010,nf=1011,Co=1012,nu=1013,zs=1014,ci=1015,Ho=1016,iu=1017,su=1018,ks=1020,sf=35902,rf=1021,of=1022,An=1023,af=1024,cf=1025,bs=1026,Hs=1027,lf=1028,ru=1029,hf=1030,ou=1031,au=1033,Qo=33776,ea=33777,ta=33778,na=33779,Yc=35840,qc=35841,$c=35842,Kc=35843,Jc=36196,jc=37492,Qc=37496,el=37808,tl=37809,nl=37810,il=37811,sl=37812,rl=37813,ol=37814,al=37815,cl=37816,ll=37817,hl=37818,ul=37819,dl=37820,fl=37821,ia=36492,pl=36494,ml=36495,uf=36283,gl=36284,_l=36285,vl=36286,df=3200,ff=3201,cu=0,pf=1,oi="",wn="srgb",xi="srgb-linear",pc="display-p3",Go="display-p3-linear",Po="linear",ht="srgb",Lo="rec709",Io="p3",Hi=7680,xl=519,mf=512,gf=513,_f=514,lu=515,vf=516,xf=517,yf=518,Sf=519,Ja=35044,yl="300 es",Xn=2e3,Do=2001;class Ws{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],sa=Math.PI/180,ja=180/Math.PI;function ui(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Bt[i&255]+Bt[i>>8&255]+Bt[i>>16&255]+Bt[i>>24&255]+"-"+Bt[e&255]+Bt[e>>8&255]+"-"+Bt[e>>16&15|64]+Bt[e>>24&255]+"-"+Bt[t&63|128]+Bt[t>>8&255]+"-"+Bt[t>>16&255]+Bt[t>>24&255]+Bt[n&255]+Bt[n>>8&255]+Bt[n>>16&255]+Bt[n>>24&255]).toLowerCase()}function Ot(i,e,t){return Math.max(e,Math.min(t,i))}function Mf(i,e){return(i%e+e)%e}function ra(i,e,t){return(1-t)*i+t*e}function Tn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ct(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Me{constructor(e=0,t=0){Me.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ot(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ze{constructor(e,t,n,s,r,o,a,c,l){Ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l)}set(e,t,n,s,r,o,a,c,l){const h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],v=s[0],m=s[3],p=s[6],T=s[1],y=s[4],w=s[7],I=s[2],R=s[5],E=s[8];return r[0]=o*v+a*T+c*I,r[3]=o*m+a*y+c*R,r[6]=o*p+a*w+c*E,r[1]=l*v+h*T+u*I,r[4]=l*m+h*y+u*R,r[7]=l*p+h*w+u*E,r[2]=d*v+f*T+g*I,r[5]=d*m+f*y+g*R,r[8]=d*p+f*w+g*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,d=a*c-h*r,f=l*r-o*c,g=t*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=u*v,e[1]=(s*l-h*n)*v,e[2]=(a*n-s*o)*v,e[3]=d*v,e[4]=(h*t-s*c)*v,e[5]=(s*r-a*t)*v,e[6]=f*v,e[7]=(n*c-l*t)*v,e[8]=(o*t-n*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(oa.makeScale(e,t)),this}rotate(e){return this.premultiply(oa.makeRotation(-e)),this}translate(e,t){return this.premultiply(oa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const oa=new Ze;function hu(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function No(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ef(){const i=No("canvas");return i.style.display="block",i}const Sl={};function mc(i){i in Sl||(Sl[i]=!0,console.warn(i))}function wf(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const Ml=new Ze().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),El=new Ze().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Zr={[xi]:{transfer:Po,primaries:Lo,toReference:i=>i,fromReference:i=>i},[wn]:{transfer:ht,primaries:Lo,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Go]:{transfer:Po,primaries:Io,toReference:i=>i.applyMatrix3(El),fromReference:i=>i.applyMatrix3(Ml)},[pc]:{transfer:ht,primaries:Io,toReference:i=>i.convertSRGBToLinear().applyMatrix3(El),fromReference:i=>i.applyMatrix3(Ml).convertLinearToSRGB()}},bf=new Set([xi,Go]),st={enabled:!0,_workingColorSpace:xi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!bf.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=Zr[e].toReference,s=Zr[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Zr[i].primaries},getTransfer:function(i){return i===oi?Po:Zr[i].transfer}};function Ts(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function aa(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Gi;class Tf{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Gi===void 0&&(Gi=No("canvas")),Gi.width=e.width,Gi.height=e.height;const n=Gi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Gi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=No("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ts(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ts(t[n]/255)*255):t[n]=Ts(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Af=0;class uu{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Af++}),this.uuid=ui(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(ca(s[o].image)):r.push(ca(s[o]))}else r=ca(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function ca(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Tf.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Rf=0;class Zt extends Ws{constructor(e=Zt.DEFAULT_IMAGE,t=Zt.DEFAULT_MAPPING,n=Di,s=Di,r=pn,o=Ni,a=An,c=mi,l=Zt.DEFAULT_ANISOTROPY,h=oi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Rf++}),this.uuid=ui(),this.name="",this.source=new uu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Me(0,0),this.repeat=new Me(1,1),this.center=new Me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==tu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case $a:e.x=e.x-Math.floor(e.x);break;case Di:e.x=e.x<0?0:1;break;case Ka:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case $a:e.y=e.y-Math.floor(e.y);break;case Di:e.y=e.y<0?0:1;break;case Ka:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Zt.DEFAULT_IMAGE=null;Zt.DEFAULT_MAPPING=tu;Zt.DEFAULT_ANISOTROPY=1;class pt{constructor(e=0,t=0,n=0,s=1){pt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],g=c[9],v=c[2],m=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(l+1)/2,w=(f+1)/2,I=(p+1)/2,R=(h+d)/4,E=(u+v)/4,D=(g+m)/4;return y>w&&y>I?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=R/n,r=E/n):w>I?w<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(w),n=R/s,r=D/s):I<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(I),n=E/r,s=D/r),this.set(n,s,r,t),this}let T=Math.sqrt((m-g)*(m-g)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(T)<.001&&(T=1),this.x=(m-g)/T,this.y=(u-v)/T,this.z=(d-h)/T,this.w=Math.acos((l+f+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Cf extends Ws{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new pt(0,0,e,t),this.scissorTest=!1,this.viewport=new pt(0,0,e,t);const s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:pn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Zt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new uu(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Fi extends Cf{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class du extends Zt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=an,this.minFilter=an,this.wrapR=Di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Pf extends Zt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=an,this.minFilter=an,this.wrapR=Di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Fr{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3];const d=r[o+0],f=r[o+1],g=r[o+2],v=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=v;return}if(u!==v||c!==d||l!==f||h!==g){let m=1-a;const p=c*d+l*f+h*g+u*v,T=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const I=Math.sqrt(y),R=Math.atan2(I,p*T);m=Math.sin(m*R)/I,a=Math.sin(a*R)/I}const w=a*T;if(c=c*m+d*w,l=l*m+f*w,h=h*m+g*w,u=u*m+v*w,m===1-a){const I=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=I,l*=I,h*=I,u*=I}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+h*u+c*f-l*d,e[t+1]=c*g+h*d+l*u-a*f,e[t+2]=l*g+h*f+a*d-c*u,e[t+3]=h*g-a*u-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),d=c(n/2),f=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"YZX":this._x=d*h*u+l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u-d*f*g;break;case"XZY":this._x=d*h*u-l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ot(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,t=0,n=0){U.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(wl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(wl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*n),h=2*(a*t-r*s),u=2*(r*n-o*t);return this.x=t+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return la.copy(this).projectOnVector(e),this.sub(la)}reflect(e){return this.sub(la.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ot(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const la=new U,wl=new Fr;class Br{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(hn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(hn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=hn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,hn):hn.fromBufferAttribute(r,o),hn.applyMatrix4(e.matrixWorld),this.expandByPoint(hn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Yr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Yr.copy(n.boundingBox)),Yr.applyMatrix4(e.matrixWorld),this.union(Yr)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,hn),hn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter($s),qr.subVectors(this.max,$s),Vi.subVectors(e.a,$s),Wi.subVectors(e.b,$s),Xi.subVectors(e.c,$s),$n.subVectors(Wi,Vi),Kn.subVectors(Xi,Wi),Mi.subVectors(Vi,Xi);let t=[0,-$n.z,$n.y,0,-Kn.z,Kn.y,0,-Mi.z,Mi.y,$n.z,0,-$n.x,Kn.z,0,-Kn.x,Mi.z,0,-Mi.x,-$n.y,$n.x,0,-Kn.y,Kn.x,0,-Mi.y,Mi.x,0];return!ha(t,Vi,Wi,Xi,qr)||(t=[1,0,0,0,1,0,0,0,1],!ha(t,Vi,Wi,Xi,qr))?!1:($r.crossVectors($n,Kn),t=[$r.x,$r.y,$r.z],ha(t,Vi,Wi,Xi,qr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,hn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(hn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Dn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Dn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Dn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Dn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Dn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Dn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Dn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Dn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Dn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Dn=[new U,new U,new U,new U,new U,new U,new U,new U],hn=new U,Yr=new Br,Vi=new U,Wi=new U,Xi=new U,$n=new U,Kn=new U,Mi=new U,$s=new U,qr=new U,$r=new U,Ei=new U;function ha(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Ei.fromArray(i,r);const a=s.x*Math.abs(Ei.x)+s.y*Math.abs(Ei.y)+s.z*Math.abs(Ei.z),c=e.dot(Ei),l=t.dot(Ei),h=n.dot(Ei);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const Lf=new Br,Ks=new U,ua=new U;class gc{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Lf.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ks.subVectors(e,this.center);const t=Ks.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Ks,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ua.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ks.copy(e.center).add(ua)),this.expandByPoint(Ks.copy(e.center).sub(ua))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Nn=new U,da=new U,Kr=new U,Jn=new U,fa=new U,Jr=new U,pa=new U;class fu{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Nn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Nn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Nn.copy(this.origin).addScaledVector(this.direction,t),Nn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){da.copy(e).add(t).multiplyScalar(.5),Kr.copy(t).sub(e).normalize(),Jn.copy(this.origin).sub(da);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Kr),a=Jn.dot(this.direction),c=-Jn.dot(Kr),l=Jn.lengthSq(),h=Math.abs(1-o*o);let u,d,f,g;if(h>0)if(u=o*c-a,d=o*a-c,g=r*h,u>=0)if(d>=-g)if(d<=g){const v=1/h;u*=v,d*=v,f=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(da).addScaledVector(Kr,d),f}intersectSphere(e,t){Nn.subVectors(e.center,this.origin);const n=Nn.dot(this.direction),s=Nn.dot(Nn)-n*n,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Nn)!==null}intersectTriangle(e,t,n,s,r){fa.subVectors(t,e),Jr.subVectors(n,e),pa.crossVectors(fa,Jr);let o=this.direction.dot(pa),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Jn.subVectors(this.origin,e);const c=a*this.direction.dot(Jr.crossVectors(Jn,Jr));if(c<0)return null;const l=a*this.direction.dot(fa.cross(Jn));if(l<0||c+l>o)return null;const h=-a*Jn.dot(pa);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class dt{constructor(e,t,n,s,r,o,a,c,l,h,u,d,f,g,v,m){dt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l,h,u,d,f,g,v,m)}set(e,t,n,s,r,o,a,c,l,h,u,d,f,g,v,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new dt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/Zi.setFromMatrixColumn(e,0).length(),r=1/Zi.setFromMatrixColumn(e,1).length(),o=1/Zi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const d=o*h,f=o*u,g=a*h,v=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=f+g*l,t[5]=d-v*l,t[9]=-a*c,t[2]=v-d*l,t[6]=g+f*l,t[10]=o*c}else if(e.order==="YXZ"){const d=c*h,f=c*u,g=l*h,v=l*u;t[0]=d+v*a,t[4]=g*a-f,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-g,t[6]=v+d*a,t[10]=o*c}else if(e.order==="ZXY"){const d=c*h,f=c*u,g=l*h,v=l*u;t[0]=d-v*a,t[4]=-o*u,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*h,t[9]=v-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const d=o*h,f=o*u,g=a*h,v=a*u;t[0]=c*h,t[4]=g*l-f,t[8]=d*l+v,t[1]=c*u,t[5]=v*l+d,t[9]=f*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const d=o*c,f=o*l,g=a*c,v=a*l;t[0]=c*h,t[4]=v-d*u,t[8]=g*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=f*u+g,t[10]=d-v*u}else if(e.order==="XZY"){const d=o*c,f=o*l,g=a*c,v=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+v,t[5]=o*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=a*h,t[10]=v*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(If,e,Df)}lookAt(e,t,n){const s=this.elements;return Jt.subVectors(e,t),Jt.lengthSq()===0&&(Jt.z=1),Jt.normalize(),jn.crossVectors(n,Jt),jn.lengthSq()===0&&(Math.abs(n.z)===1?Jt.x+=1e-4:Jt.z+=1e-4,Jt.normalize(),jn.crossVectors(n,Jt)),jn.normalize(),jr.crossVectors(Jt,jn),s[0]=jn.x,s[4]=jr.x,s[8]=Jt.x,s[1]=jn.y,s[5]=jr.y,s[9]=Jt.y,s[2]=jn.z,s[6]=jr.z,s[10]=Jt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],v=n[6],m=n[10],p=n[14],T=n[3],y=n[7],w=n[11],I=n[15],R=s[0],E=s[4],D=s[8],M=s[12],x=s[1],P=s[5],Z=s[9],X=s[13],Q=s[2],ie=s[6],ne=s[10],z=s[14],V=s[3],he=s[7],O=s[11],k=s[15];return r[0]=o*R+a*x+c*Q+l*V,r[4]=o*E+a*P+c*ie+l*he,r[8]=o*D+a*Z+c*ne+l*O,r[12]=o*M+a*X+c*z+l*k,r[1]=h*R+u*x+d*Q+f*V,r[5]=h*E+u*P+d*ie+f*he,r[9]=h*D+u*Z+d*ne+f*O,r[13]=h*M+u*X+d*z+f*k,r[2]=g*R+v*x+m*Q+p*V,r[6]=g*E+v*P+m*ie+p*he,r[10]=g*D+v*Z+m*ne+p*O,r[14]=g*M+v*X+m*z+p*k,r[3]=T*R+y*x+w*Q+I*V,r[7]=T*E+y*P+w*ie+I*he,r[11]=T*D+y*Z+w*ne+I*O,r[15]=T*M+y*X+w*z+I*k,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],v=e[7],m=e[11],p=e[15];return g*(+r*c*u-s*l*u-r*a*d+n*l*d+s*a*f-n*c*f)+v*(+t*c*f-t*l*d+r*o*d-s*o*f+s*l*h-r*c*h)+m*(+t*l*u-t*a*f-r*o*u+n*o*f+r*a*h-n*l*h)+p*(-s*a*h-t*c*u+t*a*d+s*o*u-n*o*d+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],v=e[13],m=e[14],p=e[15],T=u*m*l-v*d*l+v*c*f-a*m*f-u*c*p+a*d*p,y=g*d*l-h*m*l-g*c*f+o*m*f+h*c*p-o*d*p,w=h*v*l-g*u*l+g*a*f-o*v*f-h*a*p+o*u*p,I=g*u*c-h*v*c-g*a*d+o*v*d+h*a*m-o*u*m,R=t*T+n*y+s*w+r*I;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/R;return e[0]=T*E,e[1]=(v*d*r-u*m*r-v*s*f+n*m*f+u*s*p-n*d*p)*E,e[2]=(a*m*r-v*c*r+v*s*l-n*m*l-a*s*p+n*c*p)*E,e[3]=(u*c*r-a*d*r-u*s*l+n*d*l+a*s*f-n*c*f)*E,e[4]=y*E,e[5]=(h*m*r-g*d*r+g*s*f-t*m*f-h*s*p+t*d*p)*E,e[6]=(g*c*r-o*m*r-g*s*l+t*m*l+o*s*p-t*c*p)*E,e[7]=(o*d*r-h*c*r+h*s*l-t*d*l-o*s*f+t*c*f)*E,e[8]=w*E,e[9]=(g*u*r-h*v*r-g*n*f+t*v*f+h*n*p-t*u*p)*E,e[10]=(o*v*r-g*a*r+g*n*l-t*v*l-o*n*p+t*a*p)*E,e[11]=(h*a*r-o*u*r-h*n*l+t*u*l+o*n*f-t*a*f)*E,e[12]=I*E,e[13]=(h*v*s-g*u*s+g*n*d-t*v*d-h*n*m+t*u*m)*E,e[14]=(g*a*s-o*v*s-g*n*c+t*v*c+o*n*m-t*a*m)*E,e[15]=(o*u*s-h*a*s+h*n*c-t*u*c-o*n*d+t*a*d)*E,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,u=a+a,d=r*l,f=r*h,g=r*u,v=o*h,m=o*u,p=a*u,T=c*l,y=c*h,w=c*u,I=n.x,R=n.y,E=n.z;return s[0]=(1-(v+p))*I,s[1]=(f+w)*I,s[2]=(g-y)*I,s[3]=0,s[4]=(f-w)*R,s[5]=(1-(d+p))*R,s[6]=(m+T)*R,s[7]=0,s[8]=(g+y)*E,s[9]=(m-T)*E,s[10]=(1-(d+v))*E,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=Zi.set(s[0],s[1],s[2]).length();const o=Zi.set(s[4],s[5],s[6]).length(),a=Zi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],un.copy(this);const l=1/r,h=1/o,u=1/a;return un.elements[0]*=l,un.elements[1]*=l,un.elements[2]*=l,un.elements[4]*=h,un.elements[5]*=h,un.elements[6]*=h,un.elements[8]*=u,un.elements[9]*=u,un.elements[10]*=u,t.setFromRotationMatrix(un),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=Xn){const c=this.elements,l=2*r/(t-e),h=2*r/(n-s),u=(t+e)/(t-e),d=(n+s)/(n-s);let f,g;if(a===Xn)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Do)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=Xn){const c=this.elements,l=1/(t-e),h=1/(n-s),u=1/(o-r),d=(t+e)*l,f=(n+s)*h;let g,v;if(a===Xn)g=(o+r)*u,v=-2*u;else if(a===Do)g=r*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=v,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Zi=new U,un=new dt,If=new U(0,0,0),Df=new U(1,1,1),jn=new U,jr=new U,Jt=new U,bl=new dt,Tl=new Fr;class Rn{constructor(e=0,t=0,n=0,s=Rn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Ot(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ot(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ot(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ot(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Ot(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Ot(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return bl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(bl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Tl.setFromEuler(this),this.setFromQuaternion(Tl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Rn.DEFAULT_ORDER="XYZ";class _c{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Nf=0;const Al=new U,Yi=new Fr,Un=new dt,Qr=new U,Js=new U,Uf=new U,Of=new Fr,Rl=new U(1,0,0),Cl=new U(0,1,0),Pl=new U(0,0,1),Ll={type:"added"},Ff={type:"removed"},qi={type:"childadded",child:null},ma={type:"childremoved",child:null};class Nt extends Ws{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Nf++}),this.uuid=ui(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Nt.DEFAULT_UP.clone();const e=new U,t=new Rn,n=new Fr,s=new U(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new dt},normalMatrix:{value:new Ze}}),this.matrix=new dt,this.matrixWorld=new dt,this.matrixAutoUpdate=Nt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _c,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Yi.setFromAxisAngle(e,t),this.quaternion.multiply(Yi),this}rotateOnWorldAxis(e,t){return Yi.setFromAxisAngle(e,t),this.quaternion.premultiply(Yi),this}rotateX(e){return this.rotateOnAxis(Rl,e)}rotateY(e){return this.rotateOnAxis(Cl,e)}rotateZ(e){return this.rotateOnAxis(Pl,e)}translateOnAxis(e,t){return Al.copy(e).applyQuaternion(this.quaternion),this.position.add(Al.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Rl,e)}translateY(e){return this.translateOnAxis(Cl,e)}translateZ(e){return this.translateOnAxis(Pl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Un.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Qr.copy(e):Qr.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Js.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Un.lookAt(Js,Qr,this.up):Un.lookAt(Qr,Js,this.up),this.quaternion.setFromRotationMatrix(Un),s&&(Un.extractRotation(s.matrixWorld),Yi.setFromRotationMatrix(Un),this.quaternion.premultiply(Yi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ll),qi.child=e,this.dispatchEvent(qi),qi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ff),ma.child=e,this.dispatchEvent(ma),ma.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Un.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Un.multiply(e.parent.matrixWorld)),e.applyMatrix4(Un),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ll),qi.child=e,this.dispatchEvent(qi),qi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Js,e,Uf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Js,Of,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++){const a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}Nt.DEFAULT_UP=new U(0,1,0);Nt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const dn=new U,On=new U,ga=new U,Fn=new U,$i=new U,Ki=new U,Il=new U,_a=new U,va=new U,xa=new U;class mn{constructor(e=new U,t=new U,n=new U){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),dn.subVectors(e,t),s.cross(dn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){dn.subVectors(s,t),On.subVectors(n,t),ga.subVectors(e,t);const o=dn.dot(dn),a=dn.dot(On),c=dn.dot(ga),l=On.dot(On),h=On.dot(ga),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(l*c-a*h)*d,g=(o*h-a*c)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Fn)===null?!1:Fn.x>=0&&Fn.y>=0&&Fn.x+Fn.y<=1}static getInterpolation(e,t,n,s,r,o,a,c){return this.getBarycoord(e,t,n,s,Fn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Fn.x),c.addScaledVector(o,Fn.y),c.addScaledVector(a,Fn.z),c)}static isFrontFacing(e,t,n,s){return dn.subVectors(n,t),On.subVectors(e,t),dn.cross(On).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return dn.subVectors(this.c,this.b),On.subVectors(this.a,this.b),dn.cross(On).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return mn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return mn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return mn.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return mn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return mn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let o,a;$i.subVectors(s,n),Ki.subVectors(r,n),_a.subVectors(e,n);const c=$i.dot(_a),l=Ki.dot(_a);if(c<=0&&l<=0)return t.copy(n);va.subVectors(e,s);const h=$i.dot(va),u=Ki.dot(va);if(h>=0&&u<=h)return t.copy(s);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector($i,o);xa.subVectors(e,r);const f=$i.dot(xa),g=Ki.dot(xa);if(g>=0&&f<=g)return t.copy(r);const v=f*l-c*g;if(v<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(Ki,a);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return Il.subVectors(r,s),a=(u-h)/(u-h+(f-g)),t.copy(s).addScaledVector(Il,a);const p=1/(m+v+d);return o=v*p,a=d*p,t.copy(n).addScaledVector($i,o).addScaledVector(Ki,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const pu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qn={h:0,s:0,l:0},eo={h:0,s:0,l:0};function ya(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ke{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=wn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,st.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=st.workingColorSpace){return this.r=e,this.g=t,this.b=n,st.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=st.workingColorSpace){if(e=Mf(e,1),t=Ot(t,0,1),n=Ot(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=ya(o,r,e+1/3),this.g=ya(o,r,e),this.b=ya(o,r,e-1/3)}return st.toWorkingColorSpace(this,s),this}setStyle(e,t=wn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=wn){const n=pu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ts(e.r),this.g=Ts(e.g),this.b=Ts(e.b),this}copyLinearToSRGB(e){return this.r=aa(e.r),this.g=aa(e.g),this.b=aa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=wn){return st.fromWorkingColorSpace(zt.copy(this),e),Math.round(Ot(zt.r*255,0,255))*65536+Math.round(Ot(zt.g*255,0,255))*256+Math.round(Ot(zt.b*255,0,255))}getHexString(e=wn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=st.workingColorSpace){st.fromWorkingColorSpace(zt.copy(this),t);const n=zt.r,s=zt.g,r=zt.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=st.workingColorSpace){return st.fromWorkingColorSpace(zt.copy(this),t),e.r=zt.r,e.g=zt.g,e.b=zt.b,e}getStyle(e=wn){st.fromWorkingColorSpace(zt.copy(this),e);const t=zt.r,n=zt.g,s=zt.b;return e!==wn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Qn),this.setHSL(Qn.h+e,Qn.s+t,Qn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Qn),e.getHSL(eo);const n=ra(Qn.h,eo.h,t),s=ra(Qn.s,eo.s,t),r=ra(Qn.l,eo.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const zt=new Ke;Ke.NAMES=pu;let Bf=0;class Xs extends Ws{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Bf++}),this.uuid=ui(),this.name="",this.type="Material",this.blending=ws,this.side=pi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xa,this.blendDst=Za,this.blendEquation=Li,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ke(0,0,0),this.blendAlpha=0,this.depthFunc=Ro,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=xl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Hi,this.stencilZFail=Hi,this.stencilZPass=Hi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ws&&(n.blending=this.blending),this.side!==pi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Xa&&(n.blendSrc=this.blendSrc),this.blendDst!==Za&&(n.blendDst=this.blendDst),this.blendEquation!==Li&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ro&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==xl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Hi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Hi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Hi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Vo extends Xs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rn,this.combine=Qh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Mt=new U,to=new Me;class gn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ja,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ci,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return mc("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)to.fromBufferAttribute(this,t),to.applyMatrix3(e),this.setXY(t,to.x,to.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix3(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix4(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyNormalMatrix(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.transformDirection(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Tn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ct(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Tn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Tn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Tn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Tn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array),s=ct(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array),s=ct(s,this.array),r=ct(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ja&&(e.usage=this.usage),e}}class mu extends gn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class gu extends gn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Tt extends gn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let zf=0;const tn=new dt,Sa=new Nt,Ji=new U,jt=new Br,js=new Br,Lt=new U;class ln extends Ws{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zf++}),this.uuid=ui(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(hu(e)?gu:mu)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ze().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return tn.makeRotationFromQuaternion(e),this.applyMatrix4(tn),this}rotateX(e){return tn.makeRotationX(e),this.applyMatrix4(tn),this}rotateY(e){return tn.makeRotationY(e),this.applyMatrix4(tn),this}rotateZ(e){return tn.makeRotationZ(e),this.applyMatrix4(tn),this}translate(e,t,n){return tn.makeTranslation(e,t,n),this.applyMatrix4(tn),this}scale(e,t,n){return tn.makeScale(e,t,n),this.applyMatrix4(tn),this}lookAt(e){return Sa.lookAt(e),Sa.updateMatrix(),this.applyMatrix4(Sa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ji).negate(),this.translate(Ji.x,Ji.y,Ji.z),this}setFromPoints(e){const t=[];for(let n=0,s=e.length;n<s;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Tt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Br);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];jt.setFromBufferAttribute(r),this.morphTargetsRelative?(Lt.addVectors(this.boundingBox.min,jt.min),this.boundingBox.expandByPoint(Lt),Lt.addVectors(this.boundingBox.max,jt.max),this.boundingBox.expandByPoint(Lt)):(this.boundingBox.expandByPoint(jt.min),this.boundingBox.expandByPoint(jt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new gc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){const n=this.boundingSphere.center;if(jt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];js.setFromBufferAttribute(a),this.morphTargetsRelative?(Lt.addVectors(jt.min,js.min),jt.expandByPoint(Lt),Lt.addVectors(jt.max,js.max),jt.expandByPoint(Lt)):(jt.expandByPoint(js.min),jt.expandByPoint(js.max))}jt.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Lt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Lt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Lt.fromBufferAttribute(a,l),c&&(Ji.fromBufferAttribute(e,l),Lt.add(Ji)),s=Math.max(s,n.distanceToSquared(Lt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new gn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let D=0;D<n.count;D++)a[D]=new U,c[D]=new U;const l=new U,h=new U,u=new U,d=new Me,f=new Me,g=new Me,v=new U,m=new U;function p(D,M,x){l.fromBufferAttribute(n,D),h.fromBufferAttribute(n,M),u.fromBufferAttribute(n,x),d.fromBufferAttribute(r,D),f.fromBufferAttribute(r,M),g.fromBufferAttribute(r,x),h.sub(l),u.sub(l),f.sub(d),g.sub(d);const P=1/(f.x*g.y-g.x*f.y);isFinite(P)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(P),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(P),a[D].add(v),a[M].add(v),a[x].add(v),c[D].add(m),c[M].add(m),c[x].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let D=0,M=T.length;D<M;++D){const x=T[D],P=x.start,Z=x.count;for(let X=P,Q=P+Z;X<Q;X+=3)p(e.getX(X+0),e.getX(X+1),e.getX(X+2))}const y=new U,w=new U,I=new U,R=new U;function E(D){I.fromBufferAttribute(s,D),R.copy(I);const M=a[D];y.copy(M),y.sub(I.multiplyScalar(I.dot(M))).normalize(),w.crossVectors(R,M);const P=w.dot(c[D])<0?-1:1;o.setXYZW(D,y.x,y.y,y.z,P)}for(let D=0,M=T.length;D<M;++D){const x=T[D],P=x.start,Z=x.count;for(let X=P,Q=P+Z;X<Q;X+=3)E(e.getX(X+0)),E(e.getX(X+1)),E(e.getX(X+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new gn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new U,r=new U,o=new U,a=new U,c=new U,l=new U,h=new U,u=new U;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),v=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Lt.fromBufferAttribute(e,t),Lt.normalize(),e.setXYZ(t,Lt.x,Lt.y,Lt.z)}toNonIndexed(){function e(a,c){const l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h);let f=0,g=0;for(let v=0,m=c.length;v<m;v++){a.isInterleavedBufferAttribute?f=c[v]*a.data.stride+a.offset:f=c[v]*h;for(let p=0;p<h;p++)d[g++]=l[f++]}return new gn(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ln,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=e(c,n);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){const d=l[h],f=e(d,n);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const f=l[u];h.push(f.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(t))}const r=e.morphAttributes;for(const l in r){const h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Dl=new dt,wi=new fu,no=new gc,Nl=new U,ji=new U,Qi=new U,es=new U,Ma=new U,io=new U,so=new Me,ro=new Me,oo=new Me,Ul=new U,Ol=new U,Fl=new U,ao=new U,co=new U;class be extends Nt{constructor(e=new ln,t=new Vo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){io.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],u=r[c];h!==0&&(Ma.fromBufferAttribute(u,e),o?io.addScaledVector(Ma,h):io.addScaledVector(Ma.sub(t),h))}t.add(io)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),no.copy(n.boundingSphere),no.applyMatrix4(r),wi.copy(e.ray).recast(e.near),!(no.containsPoint(wi.origin)===!1&&(wi.intersectSphere(no,Nl)===null||wi.origin.distanceToSquared(Nl)>(e.far-e.near)**2))&&(Dl.copy(r).invert(),wi.copy(e.ray).applyMatrix4(Dl),!(n.boundingBox!==null&&wi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,wi)))}_computeIntersections(e,t,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const m=d[g],p=o[m.materialIndex],T=Math.max(m.start,f.start),y=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let w=T,I=y;w<I;w+=3){const R=a.getX(w),E=a.getX(w+1),D=a.getX(w+2);s=lo(this,p,e,n,l,h,u,R,E,D),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const T=a.getX(m),y=a.getX(m+1),w=a.getX(m+2);s=lo(this,o,e,n,l,h,u,T,y,w),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const m=d[g],p=o[m.materialIndex],T=Math.max(m.start,f.start),y=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let w=T,I=y;w<I;w+=3){const R=w,E=w+1,D=w+2;s=lo(this,p,e,n,l,h,u,R,E,D),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),v=Math.min(c.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const T=m,y=m+1,w=m+2;s=lo(this,o,e,n,l,h,u,T,y,w),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function kf(i,e,t,n,s,r,o,a){let c;if(e.side===qt?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,e.side===pi,a),c===null)return null;co.copy(a),co.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(co);return l<t.near||l>t.far?null:{distance:l,point:co.clone(),object:i}}function lo(i,e,t,n,s,r,o,a,c,l){i.getVertexPosition(a,ji),i.getVertexPosition(c,Qi),i.getVertexPosition(l,es);const h=kf(i,e,t,n,ji,Qi,es,ao);if(h){s&&(so.fromBufferAttribute(s,a),ro.fromBufferAttribute(s,c),oo.fromBufferAttribute(s,l),h.uv=mn.getInterpolation(ao,ji,Qi,es,so,ro,oo,new Me)),r&&(so.fromBufferAttribute(r,a),ro.fromBufferAttribute(r,c),oo.fromBufferAttribute(r,l),h.uv1=mn.getInterpolation(ao,ji,Qi,es,so,ro,oo,new Me)),o&&(Ul.fromBufferAttribute(o,a),Ol.fromBufferAttribute(o,c),Fl.fromBufferAttribute(o,l),h.normal=mn.getInterpolation(ao,ji,Qi,es,Ul,Ol,Fl,new U),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:c,c:l,normal:new U,materialIndex:0};mn.getNormal(ji,Qi,es,u.normal),h.face=u}return h}class Ye extends ln{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Tt(l,3)),this.setAttribute("normal",new Tt(h,3)),this.setAttribute("uv",new Tt(u,2));function g(v,m,p,T,y,w,I,R,E,D,M){const x=w/E,P=I/D,Z=w/2,X=I/2,Q=R/2,ie=E+1,ne=D+1;let z=0,V=0;const he=new U;for(let O=0;O<ne;O++){const k=O*P-X;for(let se=0;se<ie;se++){const ge=se*x-Z;he[v]=ge*T,he[m]=k*y,he[p]=Q,l.push(he.x,he.y,he.z),he[v]=0,he[m]=0,he[p]=R>0?1:-1,h.push(he.x,he.y,he.z),u.push(se/E),u.push(1-O/D),z+=1}}for(let O=0;O<D;O++)for(let k=0;k<E;k++){const se=d+k+ie*O,ge=d+k+ie*(O+1),Y=d+(k+1)+ie*(O+1),le=d+(k+1)+ie*O;c.push(se,ge,le),c.push(ge,Y,le),V+=6}a.addGroup(f,V,M),f+=V,d+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ye(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Gs(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Xt(i){const e={};for(let t=0;t<i.length;t++){const n=Gs(i[t]);for(const s in n)e[s]=n[s]}return e}function Hf(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function _u(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:st.workingColorSpace}const Gf={clone:Gs,merge:Xt};var Vf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Wf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class gi extends Xs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Vf,this.fragmentShader=Wf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Gs(e.uniforms),this.uniformsGroups=Hf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class vu extends Nt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new dt,this.projectionMatrix=new dt,this.projectionMatrixInverse=new dt,this.coordinateSystem=Xn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ei=new U,Bl=new Me,zl=new Me;class Qt extends vu{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ja*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(sa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ja*2*Math.atan(Math.tan(sa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ei.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ei.x,ei.y).multiplyScalar(-e/ei.z),ei.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ei.x,ei.y).multiplyScalar(-e/ei.z)}getViewSize(e,t){return this.getViewBounds(e,Bl,zl),t.subVectors(zl,Bl)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(sa*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ts=-90,ns=1;class Xf extends Nt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Qt(ts,ns,e,t);s.layers=this.layers,this.add(s);const r=new Qt(ts,ns,e,t);r.layers=this.layers,this.add(r);const o=new Qt(ts,ns,e,t);o.layers=this.layers,this.add(o);const a=new Qt(ts,ns,e,t);a.layers=this.layers,this.add(a);const c=new Qt(ts,ns,e,t);c.layers=this.layers,this.add(c);const l=new Qt(ts,ns,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,c]=t;for(const l of t)this.remove(l);if(e===Xn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Do)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class xu extends Zt{constructor(e,t,n,s,r,o,a,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:Fs,super(e,t,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Zf extends Fi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new xu(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:pn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ye(5,5,5),r=new gi({name:"CubemapFromEquirect",uniforms:Gs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:qt,blending:li});r.uniforms.tEquirect.value=t;const o=new be(s,r),a=t.minFilter;return t.minFilter===Ni&&(t.minFilter=pn),new Xf(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}}const Ea=new U,Yf=new U,qf=new Ze;class ri{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Ea.subVectors(n,t).cross(Yf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ea),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||qf.getNormalMatrix(e),s=this.coplanarPoint(Ea).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const bi=new gc,ho=new U;class vc{constructor(e=new ri,t=new ri,n=new ri,s=new ri,r=new ri,o=new ri){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Xn){const n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],d=s[7],f=s[8],g=s[9],v=s[10],m=s[11],p=s[12],T=s[13],y=s[14],w=s[15];if(n[0].setComponents(c-r,d-l,m-f,w-p).normalize(),n[1].setComponents(c+r,d+l,m+f,w+p).normalize(),n[2].setComponents(c+o,d+h,m+g,w+T).normalize(),n[3].setComponents(c-o,d-h,m-g,w-T).normalize(),n[4].setComponents(c-a,d-u,m-v,w-y).normalize(),t===Xn)n[5].setComponents(c+a,d+u,m+v,w+y).normalize();else if(t===Do)n[5].setComponents(a,u,v,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),bi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),bi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(bi)}intersectsSprite(e){return bi.center.set(0,0,0),bi.radius=.7071067811865476,bi.applyMatrix4(e.matrixWorld),this.intersectsSphere(bi)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(ho.x=s.normal.x>0?e.max.x:e.min.x,ho.y=s.normal.y>0?e.max.y:e.min.y,ho.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ho)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function yu(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function $f(i){const e=new WeakMap;function t(a,c){const l=a.array,h=a.usage,u=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){const h=c.array,u=c._updateRange,d=c.updateRanges;if(i.bindBuffer(l,a),u.count===-1&&d.length===0&&i.bufferSubData(l,0,h),d.length!==0){for(let f=0,g=d.length;f<g;f++){const v=d[f];i.bufferSubData(l,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}c.clearUpdateRanges()}u.count!==-1&&(i.bufferSubData(l,u.offset*h.BYTES_PER_ELEMENT,h,u.offset,u.count),u.count=-1),c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}class Yn extends ln{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=e/a,d=t/c,f=[],g=[],v=[],m=[];for(let p=0;p<h;p++){const T=p*d-o;for(let y=0;y<l;y++){const w=y*u-r;g.push(w,-T,0),v.push(0,0,1),m.push(y/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let T=0;T<a;T++){const y=T+l*p,w=T+l*(p+1),I=T+1+l*(p+1),R=T+1+l*p;f.push(y,w,R),f.push(w,I,R)}this.setIndex(f),this.setAttribute("position",new Tt(g,3)),this.setAttribute("normal",new Tt(v,3)),this.setAttribute("uv",new Tt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yn(e.width,e.height,e.widthSegments,e.heightSegments)}}var Kf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Jf=`#ifdef USE_ALPHAHASH
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
#endif`,jf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Qf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ep=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,tp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,np=`#ifdef USE_AOMAP
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
#endif`,ip=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sp=`#ifdef USE_BATCHING
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
#endif`,rp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,op=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ap=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,cp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,lp=`#ifdef USE_IRIDESCENCE
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
#endif`,hp=`#ifdef USE_BUMPMAP
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
#endif`,up=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,dp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,fp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,pp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,mp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,gp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,_p=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,vp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,xp=`#define PI 3.141592653589793
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
} // validated`,yp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Sp=`vec3 transformedNormal = objectNormal;
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
#endif`,Mp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ep=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,wp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,bp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Tp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ap=`
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
}`,Rp=`#ifdef USE_ENVMAP
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
#endif`,Cp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Pp=`#ifdef USE_ENVMAP
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
#endif`,Lp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ip=`#ifdef USE_ENVMAP
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
#endif`,Dp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Np=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Up=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Op=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Fp=`#ifdef USE_GRADIENTMAP
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
}`,Bp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,kp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Hp=`uniform bool receiveShadow;
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
#endif`,Gp=`#ifdef USE_ENVMAP
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
#endif`,Vp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Wp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Xp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Zp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Yp=`PhysicalMaterial material;
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
#endif`,qp=`struct PhysicalMaterial {
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
}`,$p=`
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
#endif`,Kp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Jp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,jp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Qp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,em=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,nm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,im=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,sm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,rm=`#if defined( USE_POINTS_UV )
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
#endif`,om=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,am=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,cm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,lm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,hm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,um=`#ifdef USE_MORPHTARGETS
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
#endif`,dm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,pm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,mm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_m=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,vm=`#ifdef USE_NORMALMAP
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
#endif`,xm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ym=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Sm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Mm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Em=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,wm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,bm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Tm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Am=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Rm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Cm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Pm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Lm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Im=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Dm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Nm=`float getShadowMask() {
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
}`,Um=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Om=`#ifdef USE_SKINNING
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
#endif`,Fm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Bm=`#ifdef USE_SKINNING
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
#endif`,zm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,km=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Hm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Gm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Vm=`#ifdef USE_TRANSMISSION
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
#endif`,Wm=`#ifdef USE_TRANSMISSION
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
#endif`,Xm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ym=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const $m=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Km=`uniform sampler2D t2D;
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
}`,Jm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Qm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,eg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tg=`#include <common>
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
}`,ng=`#if DEPTH_PACKING == 3200
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
}`,ig=`#define DISTANCE
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
}`,sg=`#define DISTANCE
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
}`,rg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,og=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ag=`uniform float scale;
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
}`,cg=`uniform vec3 diffuse;
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
}`,lg=`#include <common>
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
}`,hg=`uniform vec3 diffuse;
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
}`,ug=`#define LAMBERT
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
}`,dg=`#define LAMBERT
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
}`,fg=`#define MATCAP
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
}`,pg=`#define MATCAP
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
}`,mg=`#define NORMAL
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
}`,gg=`#define NORMAL
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
}`,_g=`#define PHONG
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
}`,vg=`#define PHONG
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
}`,xg=`#define STANDARD
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
}`,yg=`#define STANDARD
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
}`,Sg=`#define TOON
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
}`,Mg=`#define TOON
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
}`,Eg=`uniform float size;
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
}`,wg=`uniform vec3 diffuse;
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
}`,bg=`#include <common>
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
}`,Tg=`uniform vec3 color;
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
}`,Ag=`uniform float rotation;
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
}`,Rg=`uniform vec3 diffuse;
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
}`,Xe={alphahash_fragment:Kf,alphahash_pars_fragment:Jf,alphamap_fragment:jf,alphamap_pars_fragment:Qf,alphatest_fragment:ep,alphatest_pars_fragment:tp,aomap_fragment:np,aomap_pars_fragment:ip,batching_pars_vertex:sp,batching_vertex:rp,begin_vertex:op,beginnormal_vertex:ap,bsdfs:cp,iridescence_fragment:lp,bumpmap_pars_fragment:hp,clipping_planes_fragment:up,clipping_planes_pars_fragment:dp,clipping_planes_pars_vertex:fp,clipping_planes_vertex:pp,color_fragment:mp,color_pars_fragment:gp,color_pars_vertex:_p,color_vertex:vp,common:xp,cube_uv_reflection_fragment:yp,defaultnormal_vertex:Sp,displacementmap_pars_vertex:Mp,displacementmap_vertex:Ep,emissivemap_fragment:wp,emissivemap_pars_fragment:bp,colorspace_fragment:Tp,colorspace_pars_fragment:Ap,envmap_fragment:Rp,envmap_common_pars_fragment:Cp,envmap_pars_fragment:Pp,envmap_pars_vertex:Lp,envmap_physical_pars_fragment:Gp,envmap_vertex:Ip,fog_vertex:Dp,fog_pars_vertex:Np,fog_fragment:Up,fog_pars_fragment:Op,gradientmap_pars_fragment:Fp,lightmap_pars_fragment:Bp,lights_lambert_fragment:zp,lights_lambert_pars_fragment:kp,lights_pars_begin:Hp,lights_toon_fragment:Vp,lights_toon_pars_fragment:Wp,lights_phong_fragment:Xp,lights_phong_pars_fragment:Zp,lights_physical_fragment:Yp,lights_physical_pars_fragment:qp,lights_fragment_begin:$p,lights_fragment_maps:Kp,lights_fragment_end:Jp,logdepthbuf_fragment:jp,logdepthbuf_pars_fragment:Qp,logdepthbuf_pars_vertex:em,logdepthbuf_vertex:tm,map_fragment:nm,map_pars_fragment:im,map_particle_fragment:sm,map_particle_pars_fragment:rm,metalnessmap_fragment:om,metalnessmap_pars_fragment:am,morphinstance_vertex:cm,morphcolor_vertex:lm,morphnormal_vertex:hm,morphtarget_pars_vertex:um,morphtarget_vertex:dm,normal_fragment_begin:fm,normal_fragment_maps:pm,normal_pars_fragment:mm,normal_pars_vertex:gm,normal_vertex:_m,normalmap_pars_fragment:vm,clearcoat_normal_fragment_begin:xm,clearcoat_normal_fragment_maps:ym,clearcoat_pars_fragment:Sm,iridescence_pars_fragment:Mm,opaque_fragment:Em,packing:wm,premultiplied_alpha_fragment:bm,project_vertex:Tm,dithering_fragment:Am,dithering_pars_fragment:Rm,roughnessmap_fragment:Cm,roughnessmap_pars_fragment:Pm,shadowmap_pars_fragment:Lm,shadowmap_pars_vertex:Im,shadowmap_vertex:Dm,shadowmask_pars_fragment:Nm,skinbase_vertex:Um,skinning_pars_vertex:Om,skinning_vertex:Fm,skinnormal_vertex:Bm,specularmap_fragment:zm,specularmap_pars_fragment:km,tonemapping_fragment:Hm,tonemapping_pars_fragment:Gm,transmission_fragment:Vm,transmission_pars_fragment:Wm,uv_pars_fragment:Xm,uv_pars_vertex:Zm,uv_vertex:Ym,worldpos_vertex:qm,background_vert:$m,background_frag:Km,backgroundCube_vert:Jm,backgroundCube_frag:jm,cube_vert:Qm,cube_frag:eg,depth_vert:tg,depth_frag:ng,distanceRGBA_vert:ig,distanceRGBA_frag:sg,equirect_vert:rg,equirect_frag:og,linedashed_vert:ag,linedashed_frag:cg,meshbasic_vert:lg,meshbasic_frag:hg,meshlambert_vert:ug,meshlambert_frag:dg,meshmatcap_vert:fg,meshmatcap_frag:pg,meshnormal_vert:mg,meshnormal_frag:gg,meshphong_vert:_g,meshphong_frag:vg,meshphysical_vert:xg,meshphysical_frag:yg,meshtoon_vert:Sg,meshtoon_frag:Mg,points_vert:Eg,points_frag:wg,shadow_vert:bg,shadow_frag:Tg,sprite_vert:Ag,sprite_frag:Rg},Se={common:{diffuse:{value:new Ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},envMapRotation:{value:new Ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new Me(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new Ke(16777215)},opacity:{value:1},center:{value:new Me(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}}},bn={basic:{uniforms:Xt([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:Xt([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new Ke(0)}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:Xt([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new Ke(0)},specular:{value:new Ke(1118481)},shininess:{value:30}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:Xt([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new Ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:Xt([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new Ke(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:Xt([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:Xt([Se.points,Se.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:Xt([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:Xt([Se.common,Se.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:Xt([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:Xt([Se.sprite,Se.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ze}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distanceRGBA:{uniforms:Xt([Se.common,Se.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distanceRGBA_vert,fragmentShader:Xe.distanceRGBA_frag},shadow:{uniforms:Xt([Se.lights,Se.fog,{color:{value:new Ke(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};bn.physical={uniforms:Xt([bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new Me(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new Ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new Me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new Ke(0)},specularColor:{value:new Ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze},anisotropyVector:{value:new Me},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ze}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};const uo={r:0,b:0,g:0},Ti=new Rn,Cg=new dt;function Pg(i,e,t,n,s,r,o){const a=new Ke(0);let c=r===!0?0:1,l,h,u=null,d=0,f=null;function g(T){let y=T.isScene===!0?T.background:null;return y&&y.isTexture&&(y=(T.backgroundBlurriness>0?t:e).get(y)),y}function v(T){let y=!1;const w=g(T);w===null?p(a,c):w&&w.isColor&&(p(w,1),y=!0);const I=i.xr.getEnvironmentBlendMode();I==="additive"?n.buffers.color.setClear(0,0,0,1,o):I==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(T,y){const w=g(y);w&&(w.isCubeTexture||w.mapping===ko)?(h===void 0&&(h=new be(new Ye(1,1,1),new gi({name:"BackgroundCubeMaterial",uniforms:Gs(bn.backgroundCube.uniforms),vertexShader:bn.backgroundCube.vertexShader,fragmentShader:bn.backgroundCube.fragmentShader,side:qt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(I,R,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Ti.copy(y.backgroundRotation),Ti.x*=-1,Ti.y*=-1,Ti.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Ti.y*=-1,Ti.z*=-1),h.material.uniforms.envMap.value=w,h.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Cg.makeRotationFromEuler(Ti)),h.material.toneMapped=st.getTransfer(w.colorSpace)!==ht,(u!==w||d!==w.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=w,d=w.version,f=i.toneMapping),h.layers.enableAll(),T.unshift(h,h.geometry,h.material,0,0,null)):w&&w.isTexture&&(l===void 0&&(l=new be(new Yn(2,2),new gi({name:"BackgroundMaterial",uniforms:Gs(bn.background.uniforms),vertexShader:bn.background.vertexShader,fragmentShader:bn.background.fragmentShader,side:pi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=w,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=st.getTransfer(w.colorSpace)!==ht,w.matrixAutoUpdate===!0&&w.updateMatrix(),l.material.uniforms.uvTransform.value.copy(w.matrix),(u!==w||d!==w.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=w,d=w.version,f=i.toneMapping),l.layers.enableAll(),T.unshift(l,l.geometry,l.material,0,0,null))}function p(T,y){T.getRGB(uo,_u(i)),n.buffers.color.setClear(uo.r,uo.g,uo.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(T,y=1){a.set(T),c=y,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(T){c=T,p(a,c)},render:v,addToRenderList:m}}function Lg(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,o=!1;function a(x,P,Z,X,Q){let ie=!1;const ne=u(X,Z,P);r!==ne&&(r=ne,l(r.object)),ie=f(x,X,Z,Q),ie&&g(x,X,Z,Q),Q!==null&&e.update(Q,i.ELEMENT_ARRAY_BUFFER),(ie||o)&&(o=!1,w(x,P,Z,X),Q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(Q).buffer))}function c(){return i.createVertexArray()}function l(x){return i.bindVertexArray(x)}function h(x){return i.deleteVertexArray(x)}function u(x,P,Z){const X=Z.wireframe===!0;let Q=n[x.id];Q===void 0&&(Q={},n[x.id]=Q);let ie=Q[P.id];ie===void 0&&(ie={},Q[P.id]=ie);let ne=ie[X];return ne===void 0&&(ne=d(c()),ie[X]=ne),ne}function d(x){const P=[],Z=[],X=[];for(let Q=0;Q<t;Q++)P[Q]=0,Z[Q]=0,X[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:Z,attributeDivisors:X,object:x,attributes:{},index:null}}function f(x,P,Z,X){const Q=r.attributes,ie=P.attributes;let ne=0;const z=Z.getAttributes();for(const V in z)if(z[V].location>=0){const O=Q[V];let k=ie[V];if(k===void 0&&(V==="instanceMatrix"&&x.instanceMatrix&&(k=x.instanceMatrix),V==="instanceColor"&&x.instanceColor&&(k=x.instanceColor)),O===void 0||O.attribute!==k||k&&O.data!==k.data)return!0;ne++}return r.attributesNum!==ne||r.index!==X}function g(x,P,Z,X){const Q={},ie=P.attributes;let ne=0;const z=Z.getAttributes();for(const V in z)if(z[V].location>=0){let O=ie[V];O===void 0&&(V==="instanceMatrix"&&x.instanceMatrix&&(O=x.instanceMatrix),V==="instanceColor"&&x.instanceColor&&(O=x.instanceColor));const k={};k.attribute=O,O&&O.data&&(k.data=O.data),Q[V]=k,ne++}r.attributes=Q,r.attributesNum=ne,r.index=X}function v(){const x=r.newAttributes;for(let P=0,Z=x.length;P<Z;P++)x[P]=0}function m(x){p(x,0)}function p(x,P){const Z=r.newAttributes,X=r.enabledAttributes,Q=r.attributeDivisors;Z[x]=1,X[x]===0&&(i.enableVertexAttribArray(x),X[x]=1),Q[x]!==P&&(i.vertexAttribDivisor(x,P),Q[x]=P)}function T(){const x=r.newAttributes,P=r.enabledAttributes;for(let Z=0,X=P.length;Z<X;Z++)P[Z]!==x[Z]&&(i.disableVertexAttribArray(Z),P[Z]=0)}function y(x,P,Z,X,Q,ie,ne){ne===!0?i.vertexAttribIPointer(x,P,Z,Q,ie):i.vertexAttribPointer(x,P,Z,X,Q,ie)}function w(x,P,Z,X){v();const Q=X.attributes,ie=Z.getAttributes(),ne=P.defaultAttributeValues;for(const z in ie){const V=ie[z];if(V.location>=0){let he=Q[z];if(he===void 0&&(z==="instanceMatrix"&&x.instanceMatrix&&(he=x.instanceMatrix),z==="instanceColor"&&x.instanceColor&&(he=x.instanceColor)),he!==void 0){const O=he.normalized,k=he.itemSize,se=e.get(he);if(se===void 0)continue;const ge=se.buffer,Y=se.type,le=se.bytesPerElement,me=Y===i.INT||Y===i.UNSIGNED_INT||he.gpuType===nu;if(he.isInterleavedBufferAttribute){const ve=he.data,Ce=ve.stride,Ne=he.offset;if(ve.isInstancedInterleavedBuffer){for(let We=0;We<V.locationSize;We++)p(V.location+We,ve.meshPerAttribute);x.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let We=0;We<V.locationSize;We++)m(V.location+We);i.bindBuffer(i.ARRAY_BUFFER,ge);for(let We=0;We<V.locationSize;We++)y(V.location+We,k/V.locationSize,Y,O,Ce*le,(Ne+k/V.locationSize*We)*le,me)}else{if(he.isInstancedBufferAttribute){for(let ve=0;ve<V.locationSize;ve++)p(V.location+ve,he.meshPerAttribute);x.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let ve=0;ve<V.locationSize;ve++)m(V.location+ve);i.bindBuffer(i.ARRAY_BUFFER,ge);for(let ve=0;ve<V.locationSize;ve++)y(V.location+ve,k/V.locationSize,Y,O,k*le,k/V.locationSize*ve*le,me)}}else if(ne!==void 0){const O=ne[z];if(O!==void 0)switch(O.length){case 2:i.vertexAttrib2fv(V.location,O);break;case 3:i.vertexAttrib3fv(V.location,O);break;case 4:i.vertexAttrib4fv(V.location,O);break;default:i.vertexAttrib1fv(V.location,O)}}}}T()}function I(){D();for(const x in n){const P=n[x];for(const Z in P){const X=P[Z];for(const Q in X)h(X[Q].object),delete X[Q];delete P[Z]}delete n[x]}}function R(x){if(n[x.id]===void 0)return;const P=n[x.id];for(const Z in P){const X=P[Z];for(const Q in X)h(X[Q].object),delete X[Q];delete P[Z]}delete n[x.id]}function E(x){for(const P in n){const Z=n[P];if(Z[x.id]===void 0)continue;const X=Z[x.id];for(const Q in X)h(X[Q].object),delete X[Q];delete Z[x.id]}}function D(){M(),o=!0,r!==s&&(r=s,l(r.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:D,resetDefaultState:M,dispose:I,releaseStatesOfGeometry:R,releaseStatesOfProgram:E,initAttributes:v,enableAttribute:m,disableUnusedAttributes:T}}function Ig(i,e,t){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),t.update(h,n,1)}function o(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),t.update(h,n,u))}function a(l,h,u){if(u===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let f=0;f<u;f++)this.render(l[f],h[f]);else{d.multiDrawArraysWEBGL(n,l,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];t.update(f,n,1)}}function c(l,h,u,d){if(u===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)o(l[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let g=0;for(let v=0;v<u;v++)g+=h[v];for(let v=0;v<d.length;v++)t.update(g,n,d[v])}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Dg(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==An&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const E=R===Ho&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==mi&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==ci&&!E)}function c(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=t.logarithmicDepthBuffer===!0,d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),v=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),p=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=f>0,I=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:f,maxTextureSize:g,maxCubemapSize:v,maxAttributes:m,maxVertexUniforms:p,maxVaryings:T,maxFragmentUniforms:y,vertexTextures:w,maxSamples:I}}function Ng(i){const e=this;let t=null,n=0,s=!1,r=!1;const o=new ri,a=new Ze,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{const T=r?0:n,y=T*4;let w=p.clippingState||null;c.value=w,w=h(g,d,y,f);for(let I=0;I!==y;++I)w[I]=t[I];p.clippingState=w,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=T}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,g){const v=u!==null?u.length:0;let m=null;if(v!==0){if(m=c.value,g!==!0||m===null){const p=f+v*4,T=d.matrixWorldInverse;a.getNormalMatrix(T),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,w=f;y!==v;++y,w+=4)o.copy(u[y]).applyMatrix4(T,a),o.normal.toArray(m,w),m[w+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function Ug(i){let e=new WeakMap;function t(o,a){return a===Ya?o.mapping=Fs:a===qa&&(o.mapping=Bs),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ya||a===qa)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Zf(c.height);return l.fromEquirectangularTexture(i,o),e.set(o,l),o.addEventListener("dispose",s),t(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Su extends vu{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const vs=4,kl=[.125,.215,.35,.446,.526,.582],Ii=20,wa=new Su,Hl=new Ke;let ba=null,Ta=0,Aa=0,Ra=!1;const Ci=(1+Math.sqrt(5))/2,is=1/Ci,Gl=[new U(-Ci,is,0),new U(Ci,is,0),new U(-is,0,Ci),new U(is,0,Ci),new U(0,Ci,-is),new U(0,Ci,is),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)];class Vl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){ba=this._renderer.getRenderTarget(),Ta=this._renderer.getActiveCubeFace(),Aa=this._renderer.getActiveMipmapLevel(),Ra=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Zl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Xl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ba,Ta,Aa),this._renderer.xr.enabled=Ra,e.scissorTest=!1,fo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Fs||e.mapping===Bs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ba=this._renderer.getRenderTarget(),Ta=this._renderer.getActiveCubeFace(),Aa=this._renderer.getActiveMipmapLevel(),Ra=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:pn,minFilter:pn,generateMipmaps:!1,type:Ho,format:An,colorSpace:xi,depthBuffer:!1},s=Wl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Wl(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Og(r)),this._blurMaterial=Fg(r,e,t)}return s}_compileMaterial(e){const t=new be(this._lodPlanes[0],e);this._renderer.compile(t,wa)}_sceneToCubeUV(e,t,n,s){const a=new Qt(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Hl),h.toneMapping=hi,h.autoClear=!1;const f=new Vo({name:"PMREM.Background",side:qt,depthWrite:!1,depthTest:!1}),g=new be(new Ye,f);let v=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,v=!0):(f.color.copy(Hl),v=!0);for(let p=0;p<6;p++){const T=p%3;T===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):T===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));const y=this._cubeSize;fo(s,T*y,p>2?y:0,y,y),h.setRenderTarget(s),v&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Fs||e.mapping===Bs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Zl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Xl());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new be(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;fo(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,wa)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Gl[(s-r-1)%Gl.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new be(this._lodPlanes[s],l),d=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Ii-1),v=r/g,m=isFinite(r)?1+Math.floor(h*v):Ii;m>Ii&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ii}`);const p=[];let T=0;for(let E=0;E<Ii;++E){const D=E/v,M=Math.exp(-D*D/2);p.push(M),E===0?T+=M:E<m&&(T+=2*M)}for(let E=0;E<p.length;E++)p[E]=p[E]/T;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-n;const w=this._sizeLods[s],I=3*w*(s>y-vs?s-y+vs:0),R=4*(this._cubeSize-w);fo(t,I,R,3*w,2*w),c.setRenderTarget(t),c.render(u,wa)}}function Og(i){const e=[],t=[],n=[];let s=i;const r=i-vs+1+kl.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let c=1/a;o>i-vs?c=kl[o-i+vs-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,v=3,m=2,p=1,T=new Float32Array(v*g*f),y=new Float32Array(m*g*f),w=new Float32Array(p*g*f);for(let R=0;R<f;R++){const E=R%3*2/3-1,D=R>2?0:-1,M=[E,D,0,E+2/3,D,0,E+2/3,D+1,0,E,D,0,E+2/3,D+1,0,E,D+1,0];T.set(M,v*g*R),y.set(d,m*g*R);const x=[R,R,R,R,R,R];w.set(x,p*g*R)}const I=new ln;I.setAttribute("position",new gn(T,v)),I.setAttribute("uv",new gn(y,m)),I.setAttribute("faceIndex",new gn(w,p)),e.push(I),s>vs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Wl(i,e,t){const n=new Fi(i,e,t);return n.texture.mapping=ko,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function fo(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Fg(i,e,t){const n=new Float32Array(Ii),s=new U(0,1,0);return new gi({name:"SphericalGaussianBlur",defines:{n:Ii,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:xc(),fragmentShader:`

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
		`,blending:li,depthTest:!1,depthWrite:!1})}function Xl(){return new gi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xc(),fragmentShader:`

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
		`,blending:li,depthTest:!1,depthWrite:!1})}function Zl(){return new gi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:li,depthTest:!1,depthWrite:!1})}function xc(){return`

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
	`}function Bg(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Ya||c===qa,h=c===Fs||c===Bs;if(l||h){let u=e.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new Vl(i)),u=l?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return l&&f&&f.height>0||h&&f&&s(f)?(t===null&&(t=new Vl(i)),u=l?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function zg(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&mc("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function kg(i,e,t,n){const s={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const v=d.morphAttributes[g];for(let m=0,p=v.length;m<p;m++)e.remove(v[m])}d.removeEventListener("dispose",o),delete s[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function c(u){const d=u.attributes;for(const g in d)e.update(d[g],i.ARRAY_BUFFER);const f=u.morphAttributes;for(const g in f){const v=f[g];for(let m=0,p=v.length;m<p;m++)e.update(v[m],i.ARRAY_BUFFER)}}function l(u){const d=[],f=u.index,g=u.attributes.position;let v=0;if(f!==null){const T=f.array;v=f.version;for(let y=0,w=T.length;y<w;y+=3){const I=T[y+0],R=T[y+1],E=T[y+2];d.push(I,R,R,E,E,I)}}else if(g!==void 0){const T=g.array;v=g.version;for(let y=0,w=T.length/3-1;y<w;y+=3){const I=y+0,R=y+1,E=y+2;d.push(I,R,R,E,E,I)}}else return;const m=new(hu(d)?gu:mu)(d,1);m.version=v;const p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function Hg(i,e,t){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,f){i.drawElements(n,f,r,d*o),t.update(f,n,1)}function l(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*o,g),t.update(f,n,g))}function h(d,f,g){if(g===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let m=0;m<g;m++)this.render(d[m]/o,f[m]);else{v.multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}}function u(d,f,g,v){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/o,f[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,v,0,g);let p=0;for(let T=0;T<g;T++)p+=f[T];for(let T=0;T<v.length;T++)t.update(p,n,v[T])}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Gg(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Vg(i,e,t){const n=new WeakMap,s=new pt;function r(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let x=function(){D.dispose(),n.delete(a),a.removeEventListener("dispose",x)};var f=x;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],T=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let w=0;g===!0&&(w=1),v===!0&&(w=2),m===!0&&(w=3);let I=a.attributes.position.count*w,R=1;I>e.maxTextureSize&&(R=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const E=new Float32Array(I*R*4*u),D=new du(E,I,R,u);D.type=ci,D.needsUpdate=!0;const M=w*4;for(let P=0;P<u;P++){const Z=p[P],X=T[P],Q=y[P],ie=I*R*4*P;for(let ne=0;ne<Z.count;ne++){const z=ne*M;g===!0&&(s.fromBufferAttribute(Z,ne),E[ie+z+0]=s.x,E[ie+z+1]=s.y,E[ie+z+2]=s.z,E[ie+z+3]=0),v===!0&&(s.fromBufferAttribute(X,ne),E[ie+z+4]=s.x,E[ie+z+5]=s.y,E[ie+z+6]=s.z,E[ie+z+7]=0),m===!0&&(s.fromBufferAttribute(Q,ne),E[ie+z+8]=s.x,E[ie+z+9]=s.y,E[ie+z+10]=s.z,E[ie+z+11]=Q.itemSize===4?s.w:1)}}d={count:u,texture:D,size:new Me(I,R)},n.set(a,d),a.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const v=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",v),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Wg(i,e,t,n){let s=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=e.get(c,h);if(s.get(u)!==l&&(e.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}class Mu extends Zt{constructor(e,t,n,s,r,o,a,c,l,h=bs){if(h!==bs&&h!==Hs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===bs&&(n=zs),n===void 0&&h===Hs&&(n=ks),super(null,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:an,this.minFilter=c!==void 0?c:an,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Eu=new Zt,wu=new Mu(1,1);wu.compareFunction=lu;const bu=new du,Tu=new Pf,Au=new xu,Yl=[],ql=[],$l=new Float32Array(16),Kl=new Float32Array(9),Jl=new Float32Array(4);function Zs(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=Yl[s];if(r===void 0&&(r=new Float32Array(s),Yl[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function At(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Rt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Wo(i,e){let t=ql[e];t===void 0&&(t=new Int32Array(e),ql[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Xg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Zg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;i.uniform2fv(this.addr,e),Rt(t,e)}}function Yg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(At(t,e))return;i.uniform3fv(this.addr,e),Rt(t,e)}}function qg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;i.uniform4fv(this.addr,e),Rt(t,e)}}function $g(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(At(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Rt(t,e)}else{if(At(t,n))return;Jl.set(n),i.uniformMatrix2fv(this.addr,!1,Jl),Rt(t,n)}}function Kg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(At(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Rt(t,e)}else{if(At(t,n))return;Kl.set(n),i.uniformMatrix3fv(this.addr,!1,Kl),Rt(t,n)}}function Jg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(At(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Rt(t,e)}else{if(At(t,n))return;$l.set(n),i.uniformMatrix4fv(this.addr,!1,$l),Rt(t,n)}}function jg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Qg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;i.uniform2iv(this.addr,e),Rt(t,e)}}function e0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(At(t,e))return;i.uniform3iv(this.addr,e),Rt(t,e)}}function t0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;i.uniform4iv(this.addr,e),Rt(t,e)}}function n0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function i0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;i.uniform2uiv(this.addr,e),Rt(t,e)}}function s0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(At(t,e))return;i.uniform3uiv(this.addr,e),Rt(t,e)}}function r0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;i.uniform4uiv(this.addr,e),Rt(t,e)}}function o0(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);const r=this.type===i.SAMPLER_2D_SHADOW?wu:Eu;t.setTexture2D(e||r,s)}function a0(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Tu,s)}function c0(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Au,s)}function l0(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||bu,s)}function h0(i){switch(i){case 5126:return Xg;case 35664:return Zg;case 35665:return Yg;case 35666:return qg;case 35674:return $g;case 35675:return Kg;case 35676:return Jg;case 5124:case 35670:return jg;case 35667:case 35671:return Qg;case 35668:case 35672:return e0;case 35669:case 35673:return t0;case 5125:return n0;case 36294:return i0;case 36295:return s0;case 36296:return r0;case 35678:case 36198:case 36298:case 36306:case 35682:return o0;case 35679:case 36299:case 36307:return a0;case 35680:case 36300:case 36308:case 36293:return c0;case 36289:case 36303:case 36311:case 36292:return l0}}function u0(i,e){i.uniform1fv(this.addr,e)}function d0(i,e){const t=Zs(e,this.size,2);i.uniform2fv(this.addr,t)}function f0(i,e){const t=Zs(e,this.size,3);i.uniform3fv(this.addr,t)}function p0(i,e){const t=Zs(e,this.size,4);i.uniform4fv(this.addr,t)}function m0(i,e){const t=Zs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function g0(i,e){const t=Zs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function _0(i,e){const t=Zs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function v0(i,e){i.uniform1iv(this.addr,e)}function x0(i,e){i.uniform2iv(this.addr,e)}function y0(i,e){i.uniform3iv(this.addr,e)}function S0(i,e){i.uniform4iv(this.addr,e)}function M0(i,e){i.uniform1uiv(this.addr,e)}function E0(i,e){i.uniform2uiv(this.addr,e)}function w0(i,e){i.uniform3uiv(this.addr,e)}function b0(i,e){i.uniform4uiv(this.addr,e)}function T0(i,e,t){const n=this.cache,s=e.length,r=Wo(t,s);At(n,r)||(i.uniform1iv(this.addr,r),Rt(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Eu,r[o])}function A0(i,e,t){const n=this.cache,s=e.length,r=Wo(t,s);At(n,r)||(i.uniform1iv(this.addr,r),Rt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Tu,r[o])}function R0(i,e,t){const n=this.cache,s=e.length,r=Wo(t,s);At(n,r)||(i.uniform1iv(this.addr,r),Rt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Au,r[o])}function C0(i,e,t){const n=this.cache,s=e.length,r=Wo(t,s);At(n,r)||(i.uniform1iv(this.addr,r),Rt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||bu,r[o])}function P0(i){switch(i){case 5126:return u0;case 35664:return d0;case 35665:return f0;case 35666:return p0;case 35674:return m0;case 35675:return g0;case 35676:return _0;case 5124:case 35670:return v0;case 35667:case 35671:return x0;case 35668:case 35672:return y0;case 35669:case 35673:return S0;case 5125:return M0;case 36294:return E0;case 36295:return w0;case 36296:return b0;case 35678:case 36198:case 36298:case 36306:case 35682:return T0;case 35679:case 36299:case 36307:return A0;case 35680:case 36300:case 36308:case 36293:return R0;case 36289:case 36303:case 36311:case 36292:return C0}}class L0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=h0(t.type)}}class I0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=P0(t.type)}}class D0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],n)}}}const Ca=/(\w+)(\])?(\[|\.)?/g;function jl(i,e){i.seq.push(e),i.map[e.id]=e}function N0(i,e,t){const n=i.name,s=n.length;for(Ca.lastIndex=0;;){const r=Ca.exec(n),o=Ca.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){jl(t,l===void 0?new L0(a,i,e):new I0(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new D0(a),jl(t,u)),t=u}}}class Eo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);N0(r,o,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function Ql(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const U0=37297;let O0=0;function F0(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function B0(i){const e=st.getPrimaries(st.workingColorSpace),t=st.getPrimaries(i);let n;switch(e===t?n="":e===Io&&t===Lo?n="LinearDisplayP3ToLinearSRGB":e===Lo&&t===Io&&(n="LinearSRGBToLinearDisplayP3"),i){case xi:case Go:return[n,"LinearTransferOETF"];case wn:case pc:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function eh(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+F0(i.getShaderSource(e),o)}else return s}function z0(i,e){const t=B0(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function k0(i,e){let t;switch(e){case qd:t="Linear";break;case $d:t="Reinhard";break;case Kd:t="OptimizedCineon";break;case eu:t="ACESFilmic";break;case jd:t="AgX";break;case Qd:t="Neutral";break;case Jd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function H0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ar).join(`
`)}function G0(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function V0(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function ar(i){return i!==""}function th(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function nh(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const W0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Qa(i){return i.replace(W0,Z0)}const X0=new Map;function Z0(i,e){let t=Xe[e];if(t===void 0){const n=X0.get(e);if(n!==void 0)t=Xe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Qa(t)}const Y0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ih(i){return i.replace(Y0,q0)}function q0(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function sh(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function $0(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Jh?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===jh?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===kn&&(e="SHADOWMAP_TYPE_VSM"),e}function K0(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Fs:case Bs:e="ENVMAP_TYPE_CUBE";break;case ko:e="ENVMAP_TYPE_CUBE_UV";break}return e}function J0(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Bs:e="ENVMAP_MODE_REFRACTION";break}return e}function j0(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Qh:e="ENVMAP_BLENDING_MULTIPLY";break;case Zd:e="ENVMAP_BLENDING_MIX";break;case Yd:e="ENVMAP_BLENDING_ADD";break}return e}function Q0(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function e_(i,e,t,n){const s=i.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=$0(t),l=K0(t),h=J0(t),u=j0(t),d=Q0(t),f=H0(t),g=G0(r),v=s.createProgram();let m,p,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ar).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ar).join(`
`),p.length>0&&(p+=`
`)):(m=[sh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ar).join(`
`),p=[sh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==hi?"#define TONE_MAPPING":"",t.toneMapping!==hi?Xe.tonemapping_pars_fragment:"",t.toneMapping!==hi?k0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,z0("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ar).join(`
`)),o=Qa(o),o=th(o,t),o=nh(o,t),a=Qa(a),a=th(a,t),a=nh(a,t),o=ih(o),a=ih(a),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===yl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===yl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=T+m+o,w=T+p+a,I=Ql(s,s.VERTEX_SHADER,y),R=Ql(s,s.FRAGMENT_SHADER,w);s.attachShader(v,I),s.attachShader(v,R),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function E(P){if(i.debug.checkShaderErrors){const Z=s.getProgramInfoLog(v).trim(),X=s.getShaderInfoLog(I).trim(),Q=s.getShaderInfoLog(R).trim();let ie=!0,ne=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(ie=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,I,R);else{const z=eh(s,I,"vertex"),V=eh(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+Z+`
`+z+`
`+V)}else Z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Z):(X===""||Q==="")&&(ne=!1);ne&&(P.diagnostics={runnable:ie,programLog:Z,vertexShader:{log:X,prefix:m},fragmentShader:{log:Q,prefix:p}})}s.deleteShader(I),s.deleteShader(R),D=new Eo(s,v),M=V0(s,v)}let D;this.getUniforms=function(){return D===void 0&&E(this),D};let M;this.getAttributes=function(){return M===void 0&&E(this),M};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=s.getProgramParameter(v,U0)),x},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=O0++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=I,this.fragmentShader=R,this}let t_=0;class n_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new i_(e),t.set(e,n)),n}}class i_{constructor(e){this.id=t_++,this.code=e,this.usedTimes=0}}function s_(i,e,t,n,s,r,o){const a=new _c,c=new n_,l=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(M){return l.add(M),M===0?"uv":`uv${M}`}function m(M,x,P,Z,X){const Q=Z.fog,ie=X.geometry,ne=M.isMeshStandardMaterial?Z.environment:null,z=(M.isMeshStandardMaterial?t:e).get(M.envMap||ne),V=z&&z.mapping===ko?z.image.height:null,he=g[M.type];M.precision!==null&&(f=s.getMaxPrecision(M.precision),f!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));const O=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,k=O!==void 0?O.length:0;let se=0;ie.morphAttributes.position!==void 0&&(se=1),ie.morphAttributes.normal!==void 0&&(se=2),ie.morphAttributes.color!==void 0&&(se=3);let ge,Y,le,me;if(he){const rt=bn[he];ge=rt.vertexShader,Y=rt.fragmentShader}else ge=M.vertexShader,Y=M.fragmentShader,c.update(M),le=c.getVertexShaderID(M),me=c.getFragmentShaderID(M);const ve=i.getRenderTarget(),Ce=X.isInstancedMesh===!0,Ne=X.isBatchedMesh===!0,We=!!M.map,F=!!M.matcap,Ve=!!z,Be=!!M.aoMap,et=!!M.lightMap,Re=!!M.bumpMap,qe=!!M.normalMap,Ge=!!M.displacementMap,ze=!!M.emissiveMap,B=!!M.metalnessMap,S=!!M.roughnessMap,_=M.anisotropy>0,A=M.clearcoat>0,N=M.dispersion>0,G=M.iridescence>0,q=M.sheen>0,J=M.transmission>0,ce=_&&!!M.anisotropyMap,fe=A&&!!M.clearcoatMap,Le=A&&!!M.clearcoatNormalMap,ue=A&&!!M.clearcoatRoughnessMap,we=G&&!!M.iridescenceMap,j=G&&!!M.iridescenceThicknessMap,re=q&&!!M.sheenColorMap,te=q&&!!M.sheenRoughnessMap,xe=!!M.specularMap,Ae=!!M.specularColorMap,Fe=!!M.specularIntensityMap,L=J&&!!M.transmissionMap,ye=J&&!!M.thicknessMap,ee=!!M.gradientMap,ae=!!M.alphaMap,de=M.alphaTest>0,Ie=!!M.alphaHash,Je=!!M.extensions;let mt=hi;M.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(mt=i.toneMapping);const Ct={shaderID:he,shaderType:M.type,shaderName:M.name,vertexShader:ge,fragmentShader:Y,defines:M.defines,customVertexShaderID:le,customFragmentShaderID:me,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:Ne,batchingColor:Ne&&X._colorsTexture!==null,instancing:Ce,instancingColor:Ce&&X.instanceColor!==null,instancingMorph:Ce&&X.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ve===null?i.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:xi,alphaToCoverage:!!M.alphaToCoverage,map:We,matcap:F,envMap:Ve,envMapMode:Ve&&z.mapping,envMapCubeUVHeight:V,aoMap:Be,lightMap:et,bumpMap:Re,normalMap:qe,displacementMap:d&&Ge,emissiveMap:ze,normalMapObjectSpace:qe&&M.normalMapType===pf,normalMapTangentSpace:qe&&M.normalMapType===cu,metalnessMap:B,roughnessMap:S,anisotropy:_,anisotropyMap:ce,clearcoat:A,clearcoatMap:fe,clearcoatNormalMap:Le,clearcoatRoughnessMap:ue,dispersion:N,iridescence:G,iridescenceMap:we,iridescenceThicknessMap:j,sheen:q,sheenColorMap:re,sheenRoughnessMap:te,specularMap:xe,specularColorMap:Ae,specularIntensityMap:Fe,transmission:J,transmissionMap:L,thicknessMap:ye,gradientMap:ee,opaque:M.transparent===!1&&M.blending===ws&&M.alphaToCoverage===!1,alphaMap:ae,alphaTest:de,alphaHash:Ie,combine:M.combine,mapUv:We&&v(M.map.channel),aoMapUv:Be&&v(M.aoMap.channel),lightMapUv:et&&v(M.lightMap.channel),bumpMapUv:Re&&v(M.bumpMap.channel),normalMapUv:qe&&v(M.normalMap.channel),displacementMapUv:Ge&&v(M.displacementMap.channel),emissiveMapUv:ze&&v(M.emissiveMap.channel),metalnessMapUv:B&&v(M.metalnessMap.channel),roughnessMapUv:S&&v(M.roughnessMap.channel),anisotropyMapUv:ce&&v(M.anisotropyMap.channel),clearcoatMapUv:fe&&v(M.clearcoatMap.channel),clearcoatNormalMapUv:Le&&v(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ue&&v(M.clearcoatRoughnessMap.channel),iridescenceMapUv:we&&v(M.iridescenceMap.channel),iridescenceThicknessMapUv:j&&v(M.iridescenceThicknessMap.channel),sheenColorMapUv:re&&v(M.sheenColorMap.channel),sheenRoughnessMapUv:te&&v(M.sheenRoughnessMap.channel),specularMapUv:xe&&v(M.specularMap.channel),specularColorMapUv:Ae&&v(M.specularColorMap.channel),specularIntensityMapUv:Fe&&v(M.specularIntensityMap.channel),transmissionMapUv:L&&v(M.transmissionMap.channel),thicknessMapUv:ye&&v(M.thicknessMap.channel),alphaMapUv:ae&&v(M.alphaMap.channel),vertexTangents:!!ie.attributes.tangent&&(qe||_),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,pointsUvs:X.isPoints===!0&&!!ie.attributes.uv&&(We||ae),fog:!!Q,useFog:M.fog===!0,fogExp2:!!Q&&Q.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:X.isSkinnedMesh===!0,morphTargets:ie.morphAttributes.position!==void 0,morphNormals:ie.morphAttributes.normal!==void 0,morphColors:ie.morphAttributes.color!==void 0,morphTargetsCount:k,morphTextureStride:se,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:mt,decodeVideoTexture:We&&M.map.isVideoTexture===!0&&st.getTransfer(M.map.colorSpace)===ht,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===on,flipSided:M.side===qt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Je&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Je&&M.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Ct.vertexUv1s=l.has(1),Ct.vertexUv2s=l.has(2),Ct.vertexUv3s=l.has(3),l.clear(),Ct}function p(M){const x=[];if(M.shaderID?x.push(M.shaderID):(x.push(M.customVertexShaderID),x.push(M.customFragmentShaderID)),M.defines!==void 0)for(const P in M.defines)x.push(P),x.push(M.defines[P]);return M.isRawShaderMaterial===!1&&(T(x,M),y(x,M),x.push(i.outputColorSpace)),x.push(M.customProgramCacheKey),x.join()}function T(M,x){M.push(x.precision),M.push(x.outputColorSpace),M.push(x.envMapMode),M.push(x.envMapCubeUVHeight),M.push(x.mapUv),M.push(x.alphaMapUv),M.push(x.lightMapUv),M.push(x.aoMapUv),M.push(x.bumpMapUv),M.push(x.normalMapUv),M.push(x.displacementMapUv),M.push(x.emissiveMapUv),M.push(x.metalnessMapUv),M.push(x.roughnessMapUv),M.push(x.anisotropyMapUv),M.push(x.clearcoatMapUv),M.push(x.clearcoatNormalMapUv),M.push(x.clearcoatRoughnessMapUv),M.push(x.iridescenceMapUv),M.push(x.iridescenceThicknessMapUv),M.push(x.sheenColorMapUv),M.push(x.sheenRoughnessMapUv),M.push(x.specularMapUv),M.push(x.specularColorMapUv),M.push(x.specularIntensityMapUv),M.push(x.transmissionMapUv),M.push(x.thicknessMapUv),M.push(x.combine),M.push(x.fogExp2),M.push(x.sizeAttenuation),M.push(x.morphTargetsCount),M.push(x.morphAttributeCount),M.push(x.numDirLights),M.push(x.numPointLights),M.push(x.numSpotLights),M.push(x.numSpotLightMaps),M.push(x.numHemiLights),M.push(x.numRectAreaLights),M.push(x.numDirLightShadows),M.push(x.numPointLightShadows),M.push(x.numSpotLightShadows),M.push(x.numSpotLightShadowsWithMaps),M.push(x.numLightProbes),M.push(x.shadowMapType),M.push(x.toneMapping),M.push(x.numClippingPlanes),M.push(x.numClipIntersection),M.push(x.depthPacking)}function y(M,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),x.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.skinning&&a.enable(4),x.morphTargets&&a.enable(5),x.morphNormals&&a.enable(6),x.morphColors&&a.enable(7),x.premultipliedAlpha&&a.enable(8),x.shadowMapEnabled&&a.enable(9),x.doubleSided&&a.enable(10),x.flipSided&&a.enable(11),x.useDepthPacking&&a.enable(12),x.dithering&&a.enable(13),x.transmission&&a.enable(14),x.sheen&&a.enable(15),x.opaque&&a.enable(16),x.pointsUvs&&a.enable(17),x.decodeVideoTexture&&a.enable(18),x.alphaToCoverage&&a.enable(19),M.push(a.mask)}function w(M){const x=g[M.type];let P;if(x){const Z=bn[x];P=Gf.clone(Z.uniforms)}else P=M.uniforms;return P}function I(M,x){let P;for(let Z=0,X=h.length;Z<X;Z++){const Q=h[Z];if(Q.cacheKey===x){P=Q,++P.usedTimes;break}}return P===void 0&&(P=new e_(i,x,M,r),h.push(P)),P}function R(M){if(--M.usedTimes===0){const x=h.indexOf(M);h[x]=h[h.length-1],h.pop(),M.destroy()}}function E(M){c.remove(M)}function D(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:w,acquireProgram:I,releaseProgram:R,releaseShaderCache:E,programs:h,dispose:D}}function r_(){let i=new WeakMap;function e(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function t(r){i.delete(r)}function n(r,o,a){i.get(r)[o]=a}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function o_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function rh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function oh(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(u,d,f,g,v,m){let p=i[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:v,group:m},i[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=v,p.group=m),e++,p}function a(u,d,f,g,v,m){const p=o(u,d,f,g,v,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):t.push(p)}function c(u,d,f,g,v,m){const p=o(u,d,f,g,v,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function l(u,d){t.length>1&&t.sort(u||o_),n.length>1&&n.sort(d||rh),s.length>1&&s.sort(d||rh)}function h(){for(let u=e,d=i.length;u<d;u++){const f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function a_(){let i=new WeakMap;function e(n,s){const r=i.get(n);let o;return r===void 0?(o=new oh,i.set(n,[o])):s>=r.length?(o=new oh,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function c_(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new Ke};break;case"SpotLight":t={position:new U,direction:new U,color:new Ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new Ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new Ke,groundColor:new Ke};break;case"RectAreaLight":t={color:new Ke,position:new U,halfWidth:new U,halfHeight:new U};break}return i[e.id]=t,t}}}function l_(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let h_=0;function u_(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function d_(i){const e=new c_,t=l_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new U);const s=new U,r=new dt,o=new dt;function a(l){let h=0,u=0,d=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let f=0,g=0,v=0,m=0,p=0,T=0,y=0,w=0,I=0,R=0,E=0;l.sort(u_);for(let M=0,x=l.length;M<x;M++){const P=l[M],Z=P.color,X=P.intensity,Q=P.distance,ie=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=Z.r*X,u+=Z.g*X,d+=Z.b*X;else if(P.isLightProbe){for(let ne=0;ne<9;ne++)n.probe[ne].addScaledVector(P.sh.coefficients[ne],X);E++}else if(P.isDirectionalLight){const ne=e.get(P);if(ne.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const z=P.shadow,V=t.get(P);V.shadowBias=z.bias,V.shadowNormalBias=z.normalBias,V.shadowRadius=z.radius,V.shadowMapSize=z.mapSize,n.directionalShadow[f]=V,n.directionalShadowMap[f]=ie,n.directionalShadowMatrix[f]=P.shadow.matrix,T++}n.directional[f]=ne,f++}else if(P.isSpotLight){const ne=e.get(P);ne.position.setFromMatrixPosition(P.matrixWorld),ne.color.copy(Z).multiplyScalar(X),ne.distance=Q,ne.coneCos=Math.cos(P.angle),ne.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),ne.decay=P.decay,n.spot[v]=ne;const z=P.shadow;if(P.map&&(n.spotLightMap[I]=P.map,I++,z.updateMatrices(P),P.castShadow&&R++),n.spotLightMatrix[v]=z.matrix,P.castShadow){const V=t.get(P);V.shadowBias=z.bias,V.shadowNormalBias=z.normalBias,V.shadowRadius=z.radius,V.shadowMapSize=z.mapSize,n.spotShadow[v]=V,n.spotShadowMap[v]=ie,w++}v++}else if(P.isRectAreaLight){const ne=e.get(P);ne.color.copy(Z).multiplyScalar(X),ne.halfWidth.set(P.width*.5,0,0),ne.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=ne,m++}else if(P.isPointLight){const ne=e.get(P);if(ne.color.copy(P.color).multiplyScalar(P.intensity),ne.distance=P.distance,ne.decay=P.decay,P.castShadow){const z=P.shadow,V=t.get(P);V.shadowBias=z.bias,V.shadowNormalBias=z.normalBias,V.shadowRadius=z.radius,V.shadowMapSize=z.mapSize,V.shadowCameraNear=z.camera.near,V.shadowCameraFar=z.camera.far,n.pointShadow[g]=V,n.pointShadowMap[g]=ie,n.pointShadowMatrix[g]=P.shadow.matrix,y++}n.point[g]=ne,g++}else if(P.isHemisphereLight){const ne=e.get(P);ne.skyColor.copy(P.color).multiplyScalar(X),ne.groundColor.copy(P.groundColor).multiplyScalar(X),n.hemi[p]=ne,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Se.LTC_FLOAT_1,n.rectAreaLTC2=Se.LTC_FLOAT_2):(n.rectAreaLTC1=Se.LTC_HALF_1,n.rectAreaLTC2=Se.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const D=n.hash;(D.directionalLength!==f||D.pointLength!==g||D.spotLength!==v||D.rectAreaLength!==m||D.hemiLength!==p||D.numDirectionalShadows!==T||D.numPointShadows!==y||D.numSpotShadows!==w||D.numSpotMaps!==I||D.numLightProbes!==E)&&(n.directional.length=f,n.spot.length=v,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=w,n.spotShadowMap.length=w,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=w+I-R,n.spotLightMap.length=I,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=E,D.directionalLength=f,D.pointLength=g,D.spotLength=v,D.rectAreaLength=m,D.hemiLength=p,D.numDirectionalShadows=T,D.numPointShadows=y,D.numSpotShadows=w,D.numSpotMaps=I,D.numLightProbes=E,n.version=h_++)}function c(l,h){let u=0,d=0,f=0,g=0,v=0;const m=h.matrixWorldInverse;for(let p=0,T=l.length;p<T;p++){const y=l[p];if(y.isDirectionalLight){const w=n.directional[u];w.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(m),u++}else if(y.isSpotLight){const w=n.spot[f];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(m),w.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(m),f++}else if(y.isRectAreaLight){const w=n.rectArea[g];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(m),o.identity(),r.copy(y.matrixWorld),r.premultiply(m),o.extractRotation(r),w.halfWidth.set(y.width*.5,0,0),w.halfHeight.set(0,y.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){const w=n.point[d];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){const w=n.hemi[v];w.direction.setFromMatrixPosition(y.matrixWorld),w.direction.transformDirection(m),v++}}}return{setup:a,setupView:c,state:n}}function ah(i){const e=new d_(i),t=[],n=[];function s(h){l.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function c(h){e.setupView(t,h)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function f_(i){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new ah(i),e.set(s,[a])):r>=o.length?(a=new ah(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class p_ extends Xs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=df,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class m_ extends Xs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const g_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,__=`uniform sampler2D shadow_pass;
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
}`;function v_(i,e,t){let n=new vc;const s=new Me,r=new Me,o=new pt,a=new p_({depthPacking:ff}),c=new m_,l={},h=t.maxTextureSize,u={[pi]:qt,[qt]:pi,[on]:on},d=new gi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Me},radius:{value:4}},vertexShader:g_,fragmentShader:__}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new ln;g.setAttribute("position",new gn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new be(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Jh;let p=this.type;this.render=function(R,E,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const M=i.getRenderTarget(),x=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),Z=i.state;Z.setBlending(li),Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);const X=p!==kn&&this.type===kn,Q=p===kn&&this.type!==kn;for(let ie=0,ne=R.length;ie<ne;ie++){const z=R[ie],V=z.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",z,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);const he=V.getFrameExtents();if(s.multiply(he),r.copy(V.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/he.x),s.x=r.x*he.x,V.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/he.y),s.y=r.y*he.y,V.mapSize.y=r.y)),V.map===null||X===!0||Q===!0){const k=this.type!==kn?{minFilter:an,magFilter:an}:{};V.map!==null&&V.map.dispose(),V.map=new Fi(s.x,s.y,k),V.map.texture.name=z.name+".shadowMap",V.camera.updateProjectionMatrix()}i.setRenderTarget(V.map),i.clear();const O=V.getViewportCount();for(let k=0;k<O;k++){const se=V.getViewport(k);o.set(r.x*se.x,r.y*se.y,r.x*se.z,r.y*se.w),Z.viewport(o),V.updateMatrices(z,k),n=V.getFrustum(),w(E,D,V.camera,z,this.type)}V.isPointLightShadow!==!0&&this.type===kn&&T(V,D),V.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(M,x,P)};function T(R,E){const D=e.update(v);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,f.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Fi(s.x,s.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(E,null,D,d,v,null),f.uniforms.shadow_pass.value=R.mapPass.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(E,null,D,f,v,null)}function y(R,E,D,M){let x=null;const P=D.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(P!==void 0)x=P;else if(x=D.isPointLight===!0?c:a,i.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const Z=x.uuid,X=E.uuid;let Q=l[Z];Q===void 0&&(Q={},l[Z]=Q);let ie=Q[X];ie===void 0&&(ie=x.clone(),Q[X]=ie,E.addEventListener("dispose",I)),x=ie}if(x.visible=E.visible,x.wireframe=E.wireframe,M===kn?x.side=E.shadowSide!==null?E.shadowSide:E.side:x.side=E.shadowSide!==null?E.shadowSide:u[E.side],x.alphaMap=E.alphaMap,x.alphaTest=E.alphaTest,x.map=E.map,x.clipShadows=E.clipShadows,x.clippingPlanes=E.clippingPlanes,x.clipIntersection=E.clipIntersection,x.displacementMap=E.displacementMap,x.displacementScale=E.displacementScale,x.displacementBias=E.displacementBias,x.wireframeLinewidth=E.wireframeLinewidth,x.linewidth=E.linewidth,D.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const Z=i.properties.get(x);Z.light=D}return x}function w(R,E,D,M,x){if(R.visible===!1)return;if(R.layers.test(E.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&x===kn)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,R.matrixWorld);const X=e.update(R),Q=R.material;if(Array.isArray(Q)){const ie=X.groups;for(let ne=0,z=ie.length;ne<z;ne++){const V=ie[ne],he=Q[V.materialIndex];if(he&&he.visible){const O=y(R,he,M,x);R.onBeforeShadow(i,R,E,D,X,O,V),i.renderBufferDirect(D,null,X,O,R,V),R.onAfterShadow(i,R,E,D,X,O,V)}}}else if(Q.visible){const ie=y(R,Q,M,x);R.onBeforeShadow(i,R,E,D,X,ie,null),i.renderBufferDirect(D,null,X,ie,R,null),R.onAfterShadow(i,R,E,D,X,ie,null)}}const Z=R.children;for(let X=0,Q=Z.length;X<Q;X++)w(Z[X],E,D,M,x)}function I(R){R.target.removeEventListener("dispose",I);for(const D in l){const M=l[D],x=R.target.uuid;x in M&&(M[x].dispose(),delete M[x])}}}function x_(i){function e(){let L=!1;const ye=new pt;let ee=null;const ae=new pt(0,0,0,0);return{setMask:function(de){ee!==de&&!L&&(i.colorMask(de,de,de,de),ee=de)},setLocked:function(de){L=de},setClear:function(de,Ie,Je,mt,Ct){Ct===!0&&(de*=mt,Ie*=mt,Je*=mt),ye.set(de,Ie,Je,mt),ae.equals(ye)===!1&&(i.clearColor(de,Ie,Je,mt),ae.copy(ye))},reset:function(){L=!1,ee=null,ae.set(-1,0,0,0)}}}function t(){let L=!1,ye=null,ee=null,ae=null;return{setTest:function(de){de?me(i.DEPTH_TEST):ve(i.DEPTH_TEST)},setMask:function(de){ye!==de&&!L&&(i.depthMask(de),ye=de)},setFunc:function(de){if(ee!==de){switch(de){case zd:i.depthFunc(i.NEVER);break;case kd:i.depthFunc(i.ALWAYS);break;case Hd:i.depthFunc(i.LESS);break;case Ro:i.depthFunc(i.LEQUAL);break;case Gd:i.depthFunc(i.EQUAL);break;case Vd:i.depthFunc(i.GEQUAL);break;case Wd:i.depthFunc(i.GREATER);break;case Xd:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ee=de}},setLocked:function(de){L=de},setClear:function(de){ae!==de&&(i.clearDepth(de),ae=de)},reset:function(){L=!1,ye=null,ee=null,ae=null}}}function n(){let L=!1,ye=null,ee=null,ae=null,de=null,Ie=null,Je=null,mt=null,Ct=null;return{setTest:function(rt){L||(rt?me(i.STENCIL_TEST):ve(i.STENCIL_TEST))},setMask:function(rt){ye!==rt&&!L&&(i.stencilMask(rt),ye=rt)},setFunc:function(rt,xn,yn){(ee!==rt||ae!==xn||de!==yn)&&(i.stencilFunc(rt,xn,yn),ee=rt,ae=xn,de=yn)},setOp:function(rt,xn,yn){(Ie!==rt||Je!==xn||mt!==yn)&&(i.stencilOp(rt,xn,yn),Ie=rt,Je=xn,mt=yn)},setLocked:function(rt){L=rt},setClear:function(rt){Ct!==rt&&(i.clearStencil(rt),Ct=rt)},reset:function(){L=!1,ye=null,ee=null,ae=null,de=null,Ie=null,Je=null,mt=null,Ct=null}}}const s=new e,r=new t,o=new n,a=new WeakMap,c=new WeakMap;let l={},h={},u=new WeakMap,d=[],f=null,g=!1,v=null,m=null,p=null,T=null,y=null,w=null,I=null,R=new Ke(0,0,0),E=0,D=!1,M=null,x=null,P=null,Z=null,X=null;const Q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ie=!1,ne=0;const z=i.getParameter(i.VERSION);z.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(z)[1]),ie=ne>=1):z.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),ie=ne>=2);let V=null,he={};const O=i.getParameter(i.SCISSOR_BOX),k=i.getParameter(i.VIEWPORT),se=new pt().fromArray(O),ge=new pt().fromArray(k);function Y(L,ye,ee,ae){const de=new Uint8Array(4),Ie=i.createTexture();i.bindTexture(L,Ie),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Je=0;Je<ee;Je++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(ye,0,i.RGBA,1,1,ae,0,i.RGBA,i.UNSIGNED_BYTE,de):i.texImage2D(ye+Je,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,de);return Ie}const le={};le[i.TEXTURE_2D]=Y(i.TEXTURE_2D,i.TEXTURE_2D,1),le[i.TEXTURE_CUBE_MAP]=Y(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),le[i.TEXTURE_2D_ARRAY]=Y(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),le[i.TEXTURE_3D]=Y(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),me(i.DEPTH_TEST),r.setFunc(Ro),Re(!1),qe(Vc),me(i.CULL_FACE),Be(li);function me(L){l[L]!==!0&&(i.enable(L),l[L]=!0)}function ve(L){l[L]!==!1&&(i.disable(L),l[L]=!1)}function Ce(L,ye){return h[L]!==ye?(i.bindFramebuffer(L,ye),h[L]=ye,L===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=ye),L===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=ye),!0):!1}function Ne(L,ye){let ee=d,ae=!1;if(L){ee=u.get(ye),ee===void 0&&(ee=[],u.set(ye,ee));const de=L.textures;if(ee.length!==de.length||ee[0]!==i.COLOR_ATTACHMENT0){for(let Ie=0,Je=de.length;Ie<Je;Ie++)ee[Ie]=i.COLOR_ATTACHMENT0+Ie;ee.length=de.length,ae=!0}}else ee[0]!==i.BACK&&(ee[0]=i.BACK,ae=!0);ae&&i.drawBuffers(ee)}function We(L){return f!==L?(i.useProgram(L),f=L,!0):!1}const F={[Li]:i.FUNC_ADD,[Md]:i.FUNC_SUBTRACT,[Ed]:i.FUNC_REVERSE_SUBTRACT};F[wd]=i.MIN,F[bd]=i.MAX;const Ve={[Td]:i.ZERO,[Ad]:i.ONE,[Rd]:i.SRC_COLOR,[Xa]:i.SRC_ALPHA,[Nd]:i.SRC_ALPHA_SATURATE,[Id]:i.DST_COLOR,[Pd]:i.DST_ALPHA,[Cd]:i.ONE_MINUS_SRC_COLOR,[Za]:i.ONE_MINUS_SRC_ALPHA,[Dd]:i.ONE_MINUS_DST_COLOR,[Ld]:i.ONE_MINUS_DST_ALPHA,[Ud]:i.CONSTANT_COLOR,[Od]:i.ONE_MINUS_CONSTANT_COLOR,[Fd]:i.CONSTANT_ALPHA,[Bd]:i.ONE_MINUS_CONSTANT_ALPHA};function Be(L,ye,ee,ae,de,Ie,Je,mt,Ct,rt){if(L===li){g===!0&&(ve(i.BLEND),g=!1);return}if(g===!1&&(me(i.BLEND),g=!0),L!==Sd){if(L!==v||rt!==D){if((m!==Li||y!==Li)&&(i.blendEquation(i.FUNC_ADD),m=Li,y=Li),rt)switch(L){case ws:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Wc:i.blendFunc(i.ONE,i.ONE);break;case Xc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Zc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case ws:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Wc:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Xc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Zc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}p=null,T=null,w=null,I=null,R.set(0,0,0),E=0,v=L,D=rt}return}de=de||ye,Ie=Ie||ee,Je=Je||ae,(ye!==m||de!==y)&&(i.blendEquationSeparate(F[ye],F[de]),m=ye,y=de),(ee!==p||ae!==T||Ie!==w||Je!==I)&&(i.blendFuncSeparate(Ve[ee],Ve[ae],Ve[Ie],Ve[Je]),p=ee,T=ae,w=Ie,I=Je),(mt.equals(R)===!1||Ct!==E)&&(i.blendColor(mt.r,mt.g,mt.b,Ct),R.copy(mt),E=Ct),v=L,D=!1}function et(L,ye){L.side===on?ve(i.CULL_FACE):me(i.CULL_FACE);let ee=L.side===qt;ye&&(ee=!ee),Re(ee),L.blending===ws&&L.transparent===!1?Be(li):Be(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),r.setFunc(L.depthFunc),r.setTest(L.depthTest),r.setMask(L.depthWrite),s.setMask(L.colorWrite);const ae=L.stencilWrite;o.setTest(ae),ae&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),ze(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?me(i.SAMPLE_ALPHA_TO_COVERAGE):ve(i.SAMPLE_ALPHA_TO_COVERAGE)}function Re(L){M!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),M=L)}function qe(L){L!==xd?(me(i.CULL_FACE),L!==x&&(L===Vc?i.cullFace(i.BACK):L===yd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ve(i.CULL_FACE),x=L}function Ge(L){L!==P&&(ie&&i.lineWidth(L),P=L)}function ze(L,ye,ee){L?(me(i.POLYGON_OFFSET_FILL),(Z!==ye||X!==ee)&&(i.polygonOffset(ye,ee),Z=ye,X=ee)):ve(i.POLYGON_OFFSET_FILL)}function B(L){L?me(i.SCISSOR_TEST):ve(i.SCISSOR_TEST)}function S(L){L===void 0&&(L=i.TEXTURE0+Q-1),V!==L&&(i.activeTexture(L),V=L)}function _(L,ye,ee){ee===void 0&&(V===null?ee=i.TEXTURE0+Q-1:ee=V);let ae=he[ee];ae===void 0&&(ae={type:void 0,texture:void 0},he[ee]=ae),(ae.type!==L||ae.texture!==ye)&&(V!==ee&&(i.activeTexture(ee),V=ee),i.bindTexture(L,ye||le[L]),ae.type=L,ae.texture=ye)}function A(){const L=he[V];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function N(){try{i.compressedTexImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function G(){try{i.compressedTexImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function q(){try{i.texSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function J(){try{i.texSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ce(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function fe(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Le(){try{i.texStorage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ue(){try{i.texStorage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function we(){try{i.texImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function j(){try{i.texImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function re(L){se.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),se.copy(L))}function te(L){ge.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),ge.copy(L))}function xe(L,ye){let ee=c.get(ye);ee===void 0&&(ee=new WeakMap,c.set(ye,ee));let ae=ee.get(L);ae===void 0&&(ae=i.getUniformBlockIndex(ye,L.name),ee.set(L,ae))}function Ae(L,ye){const ae=c.get(ye).get(L);a.get(ye)!==ae&&(i.uniformBlockBinding(ye,ae,L.__bindingPointIndex),a.set(ye,ae))}function Fe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),l={},V=null,he={},h={},u=new WeakMap,d=[],f=null,g=!1,v=null,m=null,p=null,T=null,y=null,w=null,I=null,R=new Ke(0,0,0),E=0,D=!1,M=null,x=null,P=null,Z=null,X=null,se.set(0,0,i.canvas.width,i.canvas.height),ge.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:me,disable:ve,bindFramebuffer:Ce,drawBuffers:Ne,useProgram:We,setBlending:Be,setMaterial:et,setFlipSided:Re,setCullFace:qe,setLineWidth:Ge,setPolygonOffset:ze,setScissorTest:B,activeTexture:S,bindTexture:_,unbindTexture:A,compressedTexImage2D:N,compressedTexImage3D:G,texImage2D:we,texImage3D:j,updateUBOMapping:xe,uniformBlockBinding:Ae,texStorage2D:Le,texStorage3D:ue,texSubImage2D:q,texSubImage3D:J,compressedTexSubImage2D:ce,compressedTexSubImage3D:fe,scissor:re,viewport:te,reset:Fe}}function y_(i,e,t,n,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Me,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(S,_){return f?new OffscreenCanvas(S,_):No("canvas")}function v(S,_,A){let N=1;const G=B(S);if((G.width>A||G.height>A)&&(N=A/Math.max(G.width,G.height)),N<1)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap||typeof VideoFrame<"u"&&S instanceof VideoFrame){const q=Math.floor(N*G.width),J=Math.floor(N*G.height);u===void 0&&(u=g(q,J));const ce=_?g(q,J):u;return ce.width=q,ce.height=J,ce.getContext("2d").drawImage(S,0,0,q,J),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+G.width+"x"+G.height+") to ("+q+"x"+J+")."),ce}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+G.width+"x"+G.height+")."),S;return S}function m(S){return S.generateMipmaps&&S.minFilter!==an&&S.minFilter!==pn}function p(S){i.generateMipmap(S)}function T(S,_,A,N,G=!1){if(S!==null){if(i[S]!==void 0)return i[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let q=_;if(_===i.RED&&(A===i.FLOAT&&(q=i.R32F),A===i.HALF_FLOAT&&(q=i.R16F),A===i.UNSIGNED_BYTE&&(q=i.R8)),_===i.RED_INTEGER&&(A===i.UNSIGNED_BYTE&&(q=i.R8UI),A===i.UNSIGNED_SHORT&&(q=i.R16UI),A===i.UNSIGNED_INT&&(q=i.R32UI),A===i.BYTE&&(q=i.R8I),A===i.SHORT&&(q=i.R16I),A===i.INT&&(q=i.R32I)),_===i.RG&&(A===i.FLOAT&&(q=i.RG32F),A===i.HALF_FLOAT&&(q=i.RG16F),A===i.UNSIGNED_BYTE&&(q=i.RG8)),_===i.RG_INTEGER&&(A===i.UNSIGNED_BYTE&&(q=i.RG8UI),A===i.UNSIGNED_SHORT&&(q=i.RG16UI),A===i.UNSIGNED_INT&&(q=i.RG32UI),A===i.BYTE&&(q=i.RG8I),A===i.SHORT&&(q=i.RG16I),A===i.INT&&(q=i.RG32I)),_===i.RGB&&A===i.UNSIGNED_INT_5_9_9_9_REV&&(q=i.RGB9_E5),_===i.RGBA){const J=G?Po:st.getTransfer(N);A===i.FLOAT&&(q=i.RGBA32F),A===i.HALF_FLOAT&&(q=i.RGBA16F),A===i.UNSIGNED_BYTE&&(q=J===ht?i.SRGB8_ALPHA8:i.RGBA8),A===i.UNSIGNED_SHORT_4_4_4_4&&(q=i.RGBA4),A===i.UNSIGNED_SHORT_5_5_5_1&&(q=i.RGB5_A1)}return(q===i.R16F||q===i.R32F||q===i.RG16F||q===i.RG32F||q===i.RGBA16F||q===i.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function y(S,_){let A;return S?_===null||_===zs||_===ks?A=i.DEPTH24_STENCIL8:_===ci?A=i.DEPTH32F_STENCIL8:_===Co&&(A=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===zs||_===ks?A=i.DEPTH_COMPONENT24:_===ci?A=i.DEPTH_COMPONENT32F:_===Co&&(A=i.DEPTH_COMPONENT16),A}function w(S,_){return m(S)===!0||S.isFramebufferTexture&&S.minFilter!==an&&S.minFilter!==pn?Math.log2(Math.max(_.width,_.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?_.mipmaps.length:1}function I(S){const _=S.target;_.removeEventListener("dispose",I),E(_),_.isVideoTexture&&h.delete(_)}function R(S){const _=S.target;_.removeEventListener("dispose",R),M(_)}function E(S){const _=n.get(S);if(_.__webglInit===void 0)return;const A=S.source,N=d.get(A);if(N){const G=N[_.__cacheKey];G.usedTimes--,G.usedTimes===0&&D(S),Object.keys(N).length===0&&d.delete(A)}n.remove(S)}function D(S){const _=n.get(S);i.deleteTexture(_.__webglTexture);const A=S.source,N=d.get(A);delete N[_.__cacheKey],o.memory.textures--}function M(S){const _=n.get(S);if(S.depthTexture&&S.depthTexture.dispose(),S.isWebGLCubeRenderTarget)for(let N=0;N<6;N++){if(Array.isArray(_.__webglFramebuffer[N]))for(let G=0;G<_.__webglFramebuffer[N].length;G++)i.deleteFramebuffer(_.__webglFramebuffer[N][G]);else i.deleteFramebuffer(_.__webglFramebuffer[N]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[N])}else{if(Array.isArray(_.__webglFramebuffer))for(let N=0;N<_.__webglFramebuffer.length;N++)i.deleteFramebuffer(_.__webglFramebuffer[N]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let N=0;N<_.__webglColorRenderbuffer.length;N++)_.__webglColorRenderbuffer[N]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[N]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const A=S.textures;for(let N=0,G=A.length;N<G;N++){const q=n.get(A[N]);q.__webglTexture&&(i.deleteTexture(q.__webglTexture),o.memory.textures--),n.remove(A[N])}n.remove(S)}let x=0;function P(){x=0}function Z(){const S=x;return S>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+s.maxTextures),x+=1,S}function X(S){const _=[];return _.push(S.wrapS),_.push(S.wrapT),_.push(S.wrapR||0),_.push(S.magFilter),_.push(S.minFilter),_.push(S.anisotropy),_.push(S.internalFormat),_.push(S.format),_.push(S.type),_.push(S.generateMipmaps),_.push(S.premultiplyAlpha),_.push(S.flipY),_.push(S.unpackAlignment),_.push(S.colorSpace),_.join()}function Q(S,_){const A=n.get(S);if(S.isVideoTexture&&Ge(S),S.isRenderTargetTexture===!1&&S.version>0&&A.__version!==S.version){const N=S.image;if(N===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(N.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ge(A,S,_);return}}t.bindTexture(i.TEXTURE_2D,A.__webglTexture,i.TEXTURE0+_)}function ie(S,_){const A=n.get(S);if(S.version>0&&A.__version!==S.version){ge(A,S,_);return}t.bindTexture(i.TEXTURE_2D_ARRAY,A.__webglTexture,i.TEXTURE0+_)}function ne(S,_){const A=n.get(S);if(S.version>0&&A.__version!==S.version){ge(A,S,_);return}t.bindTexture(i.TEXTURE_3D,A.__webglTexture,i.TEXTURE0+_)}function z(S,_){const A=n.get(S);if(S.version>0&&A.__version!==S.version){Y(A,S,_);return}t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+_)}const V={[$a]:i.REPEAT,[Di]:i.CLAMP_TO_EDGE,[Ka]:i.MIRRORED_REPEAT},he={[an]:i.NEAREST,[ef]:i.NEAREST_MIPMAP_NEAREST,[Xr]:i.NEAREST_MIPMAP_LINEAR,[pn]:i.LINEAR,[jo]:i.LINEAR_MIPMAP_NEAREST,[Ni]:i.LINEAR_MIPMAP_LINEAR},O={[mf]:i.NEVER,[Sf]:i.ALWAYS,[gf]:i.LESS,[lu]:i.LEQUAL,[_f]:i.EQUAL,[yf]:i.GEQUAL,[vf]:i.GREATER,[xf]:i.NOTEQUAL};function k(S,_){if(_.type===ci&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===pn||_.magFilter===jo||_.magFilter===Xr||_.magFilter===Ni||_.minFilter===pn||_.minFilter===jo||_.minFilter===Xr||_.minFilter===Ni)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(S,i.TEXTURE_WRAP_S,V[_.wrapS]),i.texParameteri(S,i.TEXTURE_WRAP_T,V[_.wrapT]),(S===i.TEXTURE_3D||S===i.TEXTURE_2D_ARRAY)&&i.texParameteri(S,i.TEXTURE_WRAP_R,V[_.wrapR]),i.texParameteri(S,i.TEXTURE_MAG_FILTER,he[_.magFilter]),i.texParameteri(S,i.TEXTURE_MIN_FILTER,he[_.minFilter]),_.compareFunction&&(i.texParameteri(S,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(S,i.TEXTURE_COMPARE_FUNC,O[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===an||_.minFilter!==Xr&&_.minFilter!==Ni||_.type===ci&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const A=e.get("EXT_texture_filter_anisotropic");i.texParameterf(S,A.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function se(S,_){let A=!1;S.__webglInit===void 0&&(S.__webglInit=!0,_.addEventListener("dispose",I));const N=_.source;let G=d.get(N);G===void 0&&(G={},d.set(N,G));const q=X(_);if(q!==S.__cacheKey){G[q]===void 0&&(G[q]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,A=!0),G[q].usedTimes++;const J=G[S.__cacheKey];J!==void 0&&(G[S.__cacheKey].usedTimes--,J.usedTimes===0&&D(_)),S.__cacheKey=q,S.__webglTexture=G[q].texture}return A}function ge(S,_,A){let N=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(N=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(N=i.TEXTURE_3D);const G=se(S,_),q=_.source;t.bindTexture(N,S.__webglTexture,i.TEXTURE0+A);const J=n.get(q);if(q.version!==J.__version||G===!0){t.activeTexture(i.TEXTURE0+A);const ce=st.getPrimaries(st.workingColorSpace),fe=_.colorSpace===oi?null:st.getPrimaries(_.colorSpace),Le=_.colorSpace===oi||ce===fe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);let ue=v(_.image,!1,s.maxTextureSize);ue=ze(_,ue);const we=r.convert(_.format,_.colorSpace),j=r.convert(_.type);let re=T(_.internalFormat,we,j,_.colorSpace,_.isVideoTexture);k(N,_);let te;const xe=_.mipmaps,Ae=_.isVideoTexture!==!0,Fe=J.__version===void 0||G===!0,L=q.dataReady,ye=w(_,ue);if(_.isDepthTexture)re=y(_.format===Hs,_.type),Fe&&(Ae?t.texStorage2D(i.TEXTURE_2D,1,re,ue.width,ue.height):t.texImage2D(i.TEXTURE_2D,0,re,ue.width,ue.height,0,we,j,null));else if(_.isDataTexture)if(xe.length>0){Ae&&Fe&&t.texStorage2D(i.TEXTURE_2D,ye,re,xe[0].width,xe[0].height);for(let ee=0,ae=xe.length;ee<ae;ee++)te=xe[ee],Ae?L&&t.texSubImage2D(i.TEXTURE_2D,ee,0,0,te.width,te.height,we,j,te.data):t.texImage2D(i.TEXTURE_2D,ee,re,te.width,te.height,0,we,j,te.data);_.generateMipmaps=!1}else Ae?(Fe&&t.texStorage2D(i.TEXTURE_2D,ye,re,ue.width,ue.height),L&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ue.width,ue.height,we,j,ue.data)):t.texImage2D(i.TEXTURE_2D,0,re,ue.width,ue.height,0,we,j,ue.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Ae&&Fe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ye,re,xe[0].width,xe[0].height,ue.depth);for(let ee=0,ae=xe.length;ee<ae;ee++)if(te=xe[ee],_.format!==An)if(we!==null)if(Ae){if(L)if(_.layerUpdates.size>0){for(const de of _.layerUpdates){const Ie=te.width*te.height;t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ee,0,0,de,te.width,te.height,1,we,te.data.slice(Ie*de,Ie*(de+1)),0,0)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ee,0,0,0,te.width,te.height,ue.depth,we,te.data,0,0)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ee,re,te.width,te.height,ue.depth,0,te.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ae?L&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ee,0,0,0,te.width,te.height,ue.depth,we,j,te.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ee,re,te.width,te.height,ue.depth,0,we,j,te.data)}else{Ae&&Fe&&t.texStorage2D(i.TEXTURE_2D,ye,re,xe[0].width,xe[0].height);for(let ee=0,ae=xe.length;ee<ae;ee++)te=xe[ee],_.format!==An?we!==null?Ae?L&&t.compressedTexSubImage2D(i.TEXTURE_2D,ee,0,0,te.width,te.height,we,te.data):t.compressedTexImage2D(i.TEXTURE_2D,ee,re,te.width,te.height,0,te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ae?L&&t.texSubImage2D(i.TEXTURE_2D,ee,0,0,te.width,te.height,we,j,te.data):t.texImage2D(i.TEXTURE_2D,ee,re,te.width,te.height,0,we,j,te.data)}else if(_.isDataArrayTexture)if(Ae){if(Fe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ye,re,ue.width,ue.height,ue.depth),L)if(_.layerUpdates.size>0){let ee;switch(j){case i.UNSIGNED_BYTE:switch(we){case i.ALPHA:ee=1;break;case i.LUMINANCE:ee=1;break;case i.LUMINANCE_ALPHA:ee=2;break;case i.RGB:ee=3;break;case i.RGBA:ee=4;break;default:throw new Error(`Unknown texel size for format ${we}.`)}break;case i.UNSIGNED_SHORT_4_4_4_4:case i.UNSIGNED_SHORT_5_5_5_1:case i.UNSIGNED_SHORT_5_6_5:ee=1;break;default:throw new Error(`Unknown texel size for type ${j}.`)}const ae=ue.width*ue.height*ee;for(const de of _.layerUpdates)t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,de,ue.width,ue.height,1,we,j,ue.data.slice(ae*de,ae*(de+1)));_.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ue.width,ue.height,ue.depth,we,j,ue.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,re,ue.width,ue.height,ue.depth,0,we,j,ue.data);else if(_.isData3DTexture)Ae?(Fe&&t.texStorage3D(i.TEXTURE_3D,ye,re,ue.width,ue.height,ue.depth),L&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ue.width,ue.height,ue.depth,we,j,ue.data)):t.texImage3D(i.TEXTURE_3D,0,re,ue.width,ue.height,ue.depth,0,we,j,ue.data);else if(_.isFramebufferTexture){if(Fe)if(Ae)t.texStorage2D(i.TEXTURE_2D,ye,re,ue.width,ue.height);else{let ee=ue.width,ae=ue.height;for(let de=0;de<ye;de++)t.texImage2D(i.TEXTURE_2D,de,re,ee,ae,0,we,j,null),ee>>=1,ae>>=1}}else if(xe.length>0){if(Ae&&Fe){const ee=B(xe[0]);t.texStorage2D(i.TEXTURE_2D,ye,re,ee.width,ee.height)}for(let ee=0,ae=xe.length;ee<ae;ee++)te=xe[ee],Ae?L&&t.texSubImage2D(i.TEXTURE_2D,ee,0,0,we,j,te):t.texImage2D(i.TEXTURE_2D,ee,re,we,j,te);_.generateMipmaps=!1}else if(Ae){if(Fe){const ee=B(ue);t.texStorage2D(i.TEXTURE_2D,ye,re,ee.width,ee.height)}L&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,we,j,ue)}else t.texImage2D(i.TEXTURE_2D,0,re,we,j,ue);m(_)&&p(N),J.__version=q.version,_.onUpdate&&_.onUpdate(_)}S.__version=_.version}function Y(S,_,A){if(_.image.length!==6)return;const N=se(S,_),G=_.source;t.bindTexture(i.TEXTURE_CUBE_MAP,S.__webglTexture,i.TEXTURE0+A);const q=n.get(G);if(G.version!==q.__version||N===!0){t.activeTexture(i.TEXTURE0+A);const J=st.getPrimaries(st.workingColorSpace),ce=_.colorSpace===oi?null:st.getPrimaries(_.colorSpace),fe=_.colorSpace===oi||J===ce?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);const Le=_.isCompressedTexture||_.image[0].isCompressedTexture,ue=_.image[0]&&_.image[0].isDataTexture,we=[];for(let ae=0;ae<6;ae++)!Le&&!ue?we[ae]=v(_.image[ae],!0,s.maxCubemapSize):we[ae]=ue?_.image[ae].image:_.image[ae],we[ae]=ze(_,we[ae]);const j=we[0],re=r.convert(_.format,_.colorSpace),te=r.convert(_.type),xe=T(_.internalFormat,re,te,_.colorSpace),Ae=_.isVideoTexture!==!0,Fe=q.__version===void 0||N===!0,L=G.dataReady;let ye=w(_,j);k(i.TEXTURE_CUBE_MAP,_);let ee;if(Le){Ae&&Fe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ye,xe,j.width,j.height);for(let ae=0;ae<6;ae++){ee=we[ae].mipmaps;for(let de=0;de<ee.length;de++){const Ie=ee[de];_.format!==An?re!==null?Ae?L&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,de,0,0,Ie.width,Ie.height,re,Ie.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,de,xe,Ie.width,Ie.height,0,Ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ae?L&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,de,0,0,Ie.width,Ie.height,re,te,Ie.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,de,xe,Ie.width,Ie.height,0,re,te,Ie.data)}}}else{if(ee=_.mipmaps,Ae&&Fe){ee.length>0&&ye++;const ae=B(we[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ye,xe,ae.width,ae.height)}for(let ae=0;ae<6;ae++)if(ue){Ae?L&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,we[ae].width,we[ae].height,re,te,we[ae].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,xe,we[ae].width,we[ae].height,0,re,te,we[ae].data);for(let de=0;de<ee.length;de++){const Je=ee[de].image[ae].image;Ae?L&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,de+1,0,0,Je.width,Je.height,re,te,Je.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,de+1,xe,Je.width,Je.height,0,re,te,Je.data)}}else{Ae?L&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,re,te,we[ae]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,xe,re,te,we[ae]);for(let de=0;de<ee.length;de++){const Ie=ee[de];Ae?L&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,de+1,0,0,re,te,Ie.image[ae]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,de+1,xe,re,te,Ie.image[ae])}}}m(_)&&p(i.TEXTURE_CUBE_MAP),q.__version=G.version,_.onUpdate&&_.onUpdate(_)}S.__version=_.version}function le(S,_,A,N,G,q){const J=r.convert(A.format,A.colorSpace),ce=r.convert(A.type),fe=T(A.internalFormat,J,ce,A.colorSpace);if(!n.get(_).__hasExternalTextures){const ue=Math.max(1,_.width>>q),we=Math.max(1,_.height>>q);G===i.TEXTURE_3D||G===i.TEXTURE_2D_ARRAY?t.texImage3D(G,q,fe,ue,we,_.depth,0,J,ce,null):t.texImage2D(G,q,fe,ue,we,0,J,ce,null)}t.bindFramebuffer(i.FRAMEBUFFER,S),qe(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,N,G,n.get(A).__webglTexture,0,Re(_)):(G===i.TEXTURE_2D||G>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&G<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,N,G,n.get(A).__webglTexture,q),t.bindFramebuffer(i.FRAMEBUFFER,null)}function me(S,_,A){if(i.bindRenderbuffer(i.RENDERBUFFER,S),_.depthBuffer){const N=_.depthTexture,G=N&&N.isDepthTexture?N.type:null,q=y(_.stencilBuffer,G),J=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=Re(_);qe(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ce,q,_.width,_.height):A?i.renderbufferStorageMultisample(i.RENDERBUFFER,ce,q,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,q,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,S)}else{const N=_.textures;for(let G=0;G<N.length;G++){const q=N[G],J=r.convert(q.format,q.colorSpace),ce=r.convert(q.type),fe=T(q.internalFormat,J,ce,q.colorSpace),Le=Re(_);A&&qe(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Le,fe,_.width,_.height):qe(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Le,fe,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,fe,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ve(S,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,S),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(_.depthTexture).__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),Q(_.depthTexture,0);const N=n.get(_.depthTexture).__webglTexture,G=Re(_);if(_.depthTexture.format===bs)qe(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,N,0,G):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,N,0);else if(_.depthTexture.format===Hs)qe(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,N,0,G):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,N,0);else throw new Error("Unknown depthTexture format")}function Ce(S){const _=n.get(S),A=S.isWebGLCubeRenderTarget===!0;if(S.depthTexture&&!_.__autoAllocateDepthBuffer){if(A)throw new Error("target.depthTexture not supported in Cube render targets");ve(_.__webglFramebuffer,S)}else if(A){_.__webglDepthbuffer=[];for(let N=0;N<6;N++)t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[N]),_.__webglDepthbuffer[N]=i.createRenderbuffer(),me(_.__webglDepthbuffer[N],S,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer=i.createRenderbuffer(),me(_.__webglDepthbuffer,S,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ne(S,_,A){const N=n.get(S);_!==void 0&&le(N.__webglFramebuffer,S,S.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),A!==void 0&&Ce(S)}function We(S){const _=S.texture,A=n.get(S),N=n.get(_);S.addEventListener("dispose",R);const G=S.textures,q=S.isWebGLCubeRenderTarget===!0,J=G.length>1;if(J||(N.__webglTexture===void 0&&(N.__webglTexture=i.createTexture()),N.__version=_.version,o.memory.textures++),q){A.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(_.mipmaps&&_.mipmaps.length>0){A.__webglFramebuffer[ce]=[];for(let fe=0;fe<_.mipmaps.length;fe++)A.__webglFramebuffer[ce][fe]=i.createFramebuffer()}else A.__webglFramebuffer[ce]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){A.__webglFramebuffer=[];for(let ce=0;ce<_.mipmaps.length;ce++)A.__webglFramebuffer[ce]=i.createFramebuffer()}else A.__webglFramebuffer=i.createFramebuffer();if(J)for(let ce=0,fe=G.length;ce<fe;ce++){const Le=n.get(G[ce]);Le.__webglTexture===void 0&&(Le.__webglTexture=i.createTexture(),o.memory.textures++)}if(S.samples>0&&qe(S)===!1){A.__webglMultisampledFramebuffer=i.createFramebuffer(),A.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,A.__webglMultisampledFramebuffer);for(let ce=0;ce<G.length;ce++){const fe=G[ce];A.__webglColorRenderbuffer[ce]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,A.__webglColorRenderbuffer[ce]);const Le=r.convert(fe.format,fe.colorSpace),ue=r.convert(fe.type),we=T(fe.internalFormat,Le,ue,fe.colorSpace,S.isXRRenderTarget===!0),j=Re(S);i.renderbufferStorageMultisample(i.RENDERBUFFER,j,we,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ce,i.RENDERBUFFER,A.__webglColorRenderbuffer[ce])}i.bindRenderbuffer(i.RENDERBUFFER,null),S.depthBuffer&&(A.__webglDepthRenderbuffer=i.createRenderbuffer(),me(A.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(q){t.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture),k(i.TEXTURE_CUBE_MAP,_);for(let ce=0;ce<6;ce++)if(_.mipmaps&&_.mipmaps.length>0)for(let fe=0;fe<_.mipmaps.length;fe++)le(A.__webglFramebuffer[ce][fe],S,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,fe);else le(A.__webglFramebuffer[ce],S,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);m(_)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(J){for(let ce=0,fe=G.length;ce<fe;ce++){const Le=G[ce],ue=n.get(Le);t.bindTexture(i.TEXTURE_2D,ue.__webglTexture),k(i.TEXTURE_2D,Le),le(A.__webglFramebuffer,S,Le,i.COLOR_ATTACHMENT0+ce,i.TEXTURE_2D,0),m(Le)&&p(i.TEXTURE_2D)}t.unbindTexture()}else{let ce=i.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(ce=S.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ce,N.__webglTexture),k(ce,_),_.mipmaps&&_.mipmaps.length>0)for(let fe=0;fe<_.mipmaps.length;fe++)le(A.__webglFramebuffer[fe],S,_,i.COLOR_ATTACHMENT0,ce,fe);else le(A.__webglFramebuffer,S,_,i.COLOR_ATTACHMENT0,ce,0);m(_)&&p(ce),t.unbindTexture()}S.depthBuffer&&Ce(S)}function F(S){const _=S.textures;for(let A=0,N=_.length;A<N;A++){const G=_[A];if(m(G)){const q=S.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,J=n.get(G).__webglTexture;t.bindTexture(q,J),p(q),t.unbindTexture()}}}const Ve=[],Be=[];function et(S){if(S.samples>0){if(qe(S)===!1){const _=S.textures,A=S.width,N=S.height;let G=i.COLOR_BUFFER_BIT;const q=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=n.get(S),ce=_.length>1;if(ce)for(let fe=0;fe<_.length;fe++)t.bindFramebuffer(i.FRAMEBUFFER,J.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,J.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,J.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,J.__webglFramebuffer);for(let fe=0;fe<_.length;fe++){if(S.resolveDepthBuffer&&(S.depthBuffer&&(G|=i.DEPTH_BUFFER_BIT),S.stencilBuffer&&S.resolveStencilBuffer&&(G|=i.STENCIL_BUFFER_BIT)),ce){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,J.__webglColorRenderbuffer[fe]);const Le=n.get(_[fe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Le,0)}i.blitFramebuffer(0,0,A,N,0,0,A,N,G,i.NEAREST),c===!0&&(Ve.length=0,Be.length=0,Ve.push(i.COLOR_ATTACHMENT0+fe),S.depthBuffer&&S.resolveDepthBuffer===!1&&(Ve.push(q),Be.push(q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Be)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ve))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ce)for(let fe=0;fe<_.length;fe++){t.bindFramebuffer(i.FRAMEBUFFER,J.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.RENDERBUFFER,J.__webglColorRenderbuffer[fe]);const Le=n.get(_[fe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,J.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.TEXTURE_2D,Le,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,J.__webglMultisampledFramebuffer)}else if(S.depthBuffer&&S.resolveDepthBuffer===!1&&c){const _=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function Re(S){return Math.min(s.maxSamples,S.samples)}function qe(S){const _=n.get(S);return S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Ge(S){const _=o.render.frame;h.get(S)!==_&&(h.set(S,_),S.update())}function ze(S,_){const A=S.colorSpace,N=S.format,G=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||A!==xi&&A!==oi&&(st.getTransfer(A)===ht?(N!==An||G!==mi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",A)),_}function B(S){return typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement?(l.width=S.naturalWidth||S.width,l.height=S.naturalHeight||S.height):typeof VideoFrame<"u"&&S instanceof VideoFrame?(l.width=S.displayWidth,l.height=S.displayHeight):(l.width=S.width,l.height=S.height),l}this.allocateTextureUnit=Z,this.resetTextureUnits=P,this.setTexture2D=Q,this.setTexture2DArray=ie,this.setTexture3D=ne,this.setTextureCube=z,this.rebindTextures=Ne,this.setupRenderTarget=We,this.updateRenderTargetMipmap=F,this.updateMultisampleRenderTarget=et,this.setupDepthRenderbuffer=Ce,this.setupFrameBufferTexture=le,this.useMultisampledRTT=qe}function S_(i,e){function t(n,s=oi){let r;const o=st.getTransfer(s);if(n===mi)return i.UNSIGNED_BYTE;if(n===iu)return i.UNSIGNED_SHORT_4_4_4_4;if(n===su)return i.UNSIGNED_SHORT_5_5_5_1;if(n===sf)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===tf)return i.BYTE;if(n===nf)return i.SHORT;if(n===Co)return i.UNSIGNED_SHORT;if(n===nu)return i.INT;if(n===zs)return i.UNSIGNED_INT;if(n===ci)return i.FLOAT;if(n===Ho)return i.HALF_FLOAT;if(n===rf)return i.ALPHA;if(n===of)return i.RGB;if(n===An)return i.RGBA;if(n===af)return i.LUMINANCE;if(n===cf)return i.LUMINANCE_ALPHA;if(n===bs)return i.DEPTH_COMPONENT;if(n===Hs)return i.DEPTH_STENCIL;if(n===lf)return i.RED;if(n===ru)return i.RED_INTEGER;if(n===hf)return i.RG;if(n===ou)return i.RG_INTEGER;if(n===au)return i.RGBA_INTEGER;if(n===Qo||n===ea||n===ta||n===na)if(o===ht)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Qo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ea)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ta)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===na)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Qo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ea)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ta)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===na)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Yc||n===qc||n===$c||n===Kc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Yc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===qc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===$c)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Kc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Jc||n===jc||n===Qc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Jc||n===jc)return o===ht?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Qc)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===el||n===tl||n===nl||n===il||n===sl||n===rl||n===ol||n===al||n===cl||n===ll||n===hl||n===ul||n===dl||n===fl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===el)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===tl)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===nl)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===il)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===sl)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===rl)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ol)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===al)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===cl)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ll)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===hl)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ul)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===dl)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===fl)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ia||n===pl||n===ml)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===ia)return o===ht?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===pl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ml)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===uf||n===gl||n===_l||n===vl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===ia)return r.COMPRESSED_RED_RGTC1_EXT;if(n===gl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===_l)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===vl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ks?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class M_ extends Qt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Zn extends Nt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const E_={type:"move"};class Pa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Zn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Zn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Zn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,n),p=this._getHandJoint(l,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(E_)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Zn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const w_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,b_=`
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

}`;class T_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new Zt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new gi({vertexShader:w_,fragmentShader:b_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new be(new Yn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}}class A_ extends Ws{constructor(e,t){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,g=null;const v=new T_,m=t.getContextAttributes();let p=null,T=null;const y=[],w=[],I=new Me;let R=null;const E=new Qt;E.layers.enable(1),E.viewport=new pt;const D=new Qt;D.layers.enable(2),D.viewport=new pt;const M=[E,D],x=new M_;x.layers.enable(1),x.layers.enable(2);let P=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let le=y[Y];return le===void 0&&(le=new Pa,y[Y]=le),le.getTargetRaySpace()},this.getControllerGrip=function(Y){let le=y[Y];return le===void 0&&(le=new Pa,y[Y]=le),le.getGripSpace()},this.getHand=function(Y){let le=y[Y];return le===void 0&&(le=new Pa,y[Y]=le),le.getHandSpace()};function X(Y){const le=w.indexOf(Y.inputSource);if(le===-1)return;const me=y[le];me!==void 0&&(me.update(Y.inputSource,Y.frame,l||o),me.dispatchEvent({type:Y.type,data:Y.inputSource}))}function Q(){s.removeEventListener("select",X),s.removeEventListener("selectstart",X),s.removeEventListener("selectend",X),s.removeEventListener("squeeze",X),s.removeEventListener("squeezestart",X),s.removeEventListener("squeezeend",X),s.removeEventListener("end",Q),s.removeEventListener("inputsourceschange",ie);for(let Y=0;Y<y.length;Y++){const le=w[Y];le!==null&&(w[Y]=null,y[Y].disconnect(le))}P=null,Z=null,v.reset(),e.setRenderTarget(p),f=null,d=null,u=null,s=null,T=null,ge.stop(),n.isPresenting=!1,e.setPixelRatio(R),e.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",X),s.addEventListener("selectstart",X),s.addEventListener("selectend",X),s.addEventListener("squeeze",X),s.addEventListener("squeezestart",X),s.addEventListener("squeezeend",X),s.addEventListener("end",Q),s.addEventListener("inputsourceschange",ie),m.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(I),s.renderState.layers===void 0){const le={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,le),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),T=new Fi(f.framebufferWidth,f.framebufferHeight,{format:An,type:mi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let le=null,me=null,ve=null;m.depth&&(ve=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,le=m.stencil?Hs:bs,me=m.stencil?ks:zs);const Ce={colorFormat:t.RGBA8,depthFormat:ve,scaleFactor:r};u=new XRWebGLBinding(s,t),d=u.createProjectionLayer(Ce),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),T=new Fi(d.textureWidth,d.textureHeight,{format:An,type:mi,depthTexture:new Mu(d.textureWidth,d.textureHeight,me,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),ge.setContext(s),ge.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function ie(Y){for(let le=0;le<Y.removed.length;le++){const me=Y.removed[le],ve=w.indexOf(me);ve>=0&&(w[ve]=null,y[ve].disconnect(me))}for(let le=0;le<Y.added.length;le++){const me=Y.added[le];let ve=w.indexOf(me);if(ve===-1){for(let Ne=0;Ne<y.length;Ne++)if(Ne>=w.length){w.push(me),ve=Ne;break}else if(w[Ne]===null){w[Ne]=me,ve=Ne;break}if(ve===-1)break}const Ce=y[ve];Ce&&Ce.connect(me)}}const ne=new U,z=new U;function V(Y,le,me){ne.setFromMatrixPosition(le.matrixWorld),z.setFromMatrixPosition(me.matrixWorld);const ve=ne.distanceTo(z),Ce=le.projectionMatrix.elements,Ne=me.projectionMatrix.elements,We=Ce[14]/(Ce[10]-1),F=Ce[14]/(Ce[10]+1),Ve=(Ce[9]+1)/Ce[5],Be=(Ce[9]-1)/Ce[5],et=(Ce[8]-1)/Ce[0],Re=(Ne[8]+1)/Ne[0],qe=We*et,Ge=We*Re,ze=ve/(-et+Re),B=ze*-et;le.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(B),Y.translateZ(ze),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert();const S=We+ze,_=F+ze,A=qe-B,N=Ge+(ve-B),G=Ve*F/_*S,q=Be*F/_*S;Y.projectionMatrix.makePerspective(A,N,G,q,S,_),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}function he(Y,le){le===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(le.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;v.texture!==null&&(Y.near=v.depthNear,Y.far=v.depthFar),x.near=D.near=E.near=Y.near,x.far=D.far=E.far=Y.far,(P!==x.near||Z!==x.far)&&(s.updateRenderState({depthNear:x.near,depthFar:x.far}),P=x.near,Z=x.far,E.near=P,E.far=Z,D.near=P,D.far=Z,E.updateProjectionMatrix(),D.updateProjectionMatrix(),Y.updateProjectionMatrix());const le=Y.parent,me=x.cameras;he(x,le);for(let ve=0;ve<me.length;ve++)he(me[ve],le);me.length===2?V(x,E,D):x.projectionMatrix.copy(E.projectionMatrix),O(Y,x,le)};function O(Y,le,me){me===null?Y.matrix.copy(le.matrixWorld):(Y.matrix.copy(me.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(le.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(le.projectionMatrix),Y.projectionMatrixInverse.copy(le.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=ja*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(Y){c=Y,d!==null&&(d.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(x)};let k=null;function se(Y,le){if(h=le.getViewerPose(l||o),g=le,h!==null){const me=h.views;f!==null&&(e.setRenderTargetFramebuffer(T,f.framebuffer),e.setRenderTarget(T));let ve=!1;me.length!==x.cameras.length&&(x.cameras.length=0,ve=!0);for(let Ne=0;Ne<me.length;Ne++){const We=me[Ne];let F=null;if(f!==null)F=f.getViewport(We);else{const Be=u.getViewSubImage(d,We);F=Be.viewport,Ne===0&&(e.setRenderTargetTextures(T,Be.colorTexture,d.ignoreDepthValues?void 0:Be.depthStencilTexture),e.setRenderTarget(T))}let Ve=M[Ne];Ve===void 0&&(Ve=new Qt,Ve.layers.enable(Ne),Ve.viewport=new pt,M[Ne]=Ve),Ve.matrix.fromArray(We.transform.matrix),Ve.matrix.decompose(Ve.position,Ve.quaternion,Ve.scale),Ve.projectionMatrix.fromArray(We.projectionMatrix),Ve.projectionMatrixInverse.copy(Ve.projectionMatrix).invert(),Ve.viewport.set(F.x,F.y,F.width,F.height),Ne===0&&(x.matrix.copy(Ve.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),ve===!0&&x.cameras.push(Ve)}const Ce=s.enabledFeatures;if(Ce&&Ce.includes("depth-sensing")){const Ne=u.getDepthInformation(me[0]);Ne&&Ne.isValid&&Ne.texture&&v.init(e,Ne,s.renderState)}}for(let me=0;me<y.length;me++){const ve=w[me],Ce=y[me];ve!==null&&Ce!==void 0&&Ce.update(ve,le,l||o)}k&&k(Y,le),le.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:le}),g=null}const ge=new yu;ge.setAnimationLoop(se),this.setAnimationLoop=function(Y){k=Y},this.dispose=function(){}}}const Ai=new Rn,R_=new dt;function C_(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,_u(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,T,y,w){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,w)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,T,y):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===qt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===qt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const T=e.get(p),y=T.envMap,w=T.envMapRotation;y&&(m.envMap.value=y,Ai.copy(w),Ai.x*=-1,Ai.y*=-1,Ai.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Ai.y*=-1,Ai.z*=-1),m.envMapRotation.value.setFromMatrix4(R_.makeRotationFromEuler(Ai)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,T,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*T,m.scale.value=y*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,T){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===qt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const T=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function P_(i,e,t,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(T,y){const w=y.program;n.uniformBlockBinding(T,w)}function l(T,y){let w=s[T.id];w===void 0&&(g(T),w=h(T),s[T.id]=w,T.addEventListener("dispose",m));const I=y.program;n.updateUBOMapping(T,I);const R=e.render.frame;r[T.id]!==R&&(d(T),r[T.id]=R)}function h(T){const y=u();T.__bindingPointIndex=y;const w=i.createBuffer(),I=T.__size,R=T.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,I,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,w),w}function u(){for(let T=0;T<a;T++)if(o.indexOf(T)===-1)return o.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(T){const y=s[T.id],w=T.uniforms,I=T.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let R=0,E=w.length;R<E;R++){const D=Array.isArray(w[R])?w[R]:[w[R]];for(let M=0,x=D.length;M<x;M++){const P=D[M];if(f(P,R,M,I)===!0){const Z=P.__offset,X=Array.isArray(P.value)?P.value:[P.value];let Q=0;for(let ie=0;ie<X.length;ie++){const ne=X[ie],z=v(ne);typeof ne=="number"||typeof ne=="boolean"?(P.__data[0]=ne,i.bufferSubData(i.UNIFORM_BUFFER,Z+Q,P.__data)):ne.isMatrix3?(P.__data[0]=ne.elements[0],P.__data[1]=ne.elements[1],P.__data[2]=ne.elements[2],P.__data[3]=0,P.__data[4]=ne.elements[3],P.__data[5]=ne.elements[4],P.__data[6]=ne.elements[5],P.__data[7]=0,P.__data[8]=ne.elements[6],P.__data[9]=ne.elements[7],P.__data[10]=ne.elements[8],P.__data[11]=0):(ne.toArray(P.__data,Q),Q+=z.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,Z,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(T,y,w,I){const R=T.value,E=y+"_"+w;if(I[E]===void 0)return typeof R=="number"||typeof R=="boolean"?I[E]=R:I[E]=R.clone(),!0;{const D=I[E];if(typeof R=="number"||typeof R=="boolean"){if(D!==R)return I[E]=R,!0}else if(D.equals(R)===!1)return D.copy(R),!0}return!1}function g(T){const y=T.uniforms;let w=0;const I=16;for(let E=0,D=y.length;E<D;E++){const M=Array.isArray(y[E])?y[E]:[y[E]];for(let x=0,P=M.length;x<P;x++){const Z=M[x],X=Array.isArray(Z.value)?Z.value:[Z.value];for(let Q=0,ie=X.length;Q<ie;Q++){const ne=X[Q],z=v(ne),V=w%I;V!==0&&I-V<z.boundary&&(w+=I-V),Z.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),Z.__offset=w,w+=z.storage}}}const R=w%I;return R>0&&(w+=I-R),T.__size=w,T.__cache={},this}function v(T){const y={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(y.boundary=4,y.storage=4):T.isVector2?(y.boundary=8,y.storage=8):T.isVector3||T.isColor?(y.boundary=16,y.storage=12):T.isVector4?(y.boundary=16,y.storage=16):T.isMatrix3?(y.boundary=48,y.storage=48):T.isMatrix4?(y.boundary=64,y.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),y}function m(T){const y=T.target;y.removeEventListener("dispose",m);const w=o.indexOf(y.__bindingPointIndex);o.splice(w,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function p(){for(const T in s)i.deleteBuffer(s[T]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}class L_{constructor(e={}){const{canvas:t=Ef(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const f=new Uint32Array(4),g=new Int32Array(4);let v=null,m=null;const p=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=wn,this.toneMapping=hi,this.toneMappingExposure=1;const y=this;let w=!1,I=0,R=0,E=null,D=-1,M=null;const x=new pt,P=new pt;let Z=null;const X=new Ke(0);let Q=0,ie=t.width,ne=t.height,z=1,V=null,he=null;const O=new pt(0,0,ie,ne),k=new pt(0,0,ie,ne);let se=!1;const ge=new vc;let Y=!1,le=!1;const me=new dt,ve=new U,Ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ne=!1;function We(){return E===null?z:1}let F=n;function Ve(b,H){return t.getContext(b,H)}try{const b={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${fc}`),t.addEventListener("webglcontextlost",ye,!1),t.addEventListener("webglcontextrestored",ee,!1),t.addEventListener("webglcontextcreationerror",ae,!1),F===null){const H="webgl2";if(F=Ve(H,b),F===null)throw Ve(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Be,et,Re,qe,Ge,ze,B,S,_,A,N,G,q,J,ce,fe,Le,ue,we,j,re,te,xe,Ae;function Fe(){Be=new zg(F),Be.init(),te=new S_(F,Be),et=new Dg(F,Be,e,te),Re=new x_(F),qe=new Gg(F),Ge=new r_,ze=new y_(F,Be,Re,Ge,et,te,qe),B=new Ug(y),S=new Bg(y),_=new $f(F),xe=new Lg(F,_),A=new kg(F,_,qe,xe),N=new Wg(F,A,_,qe),we=new Vg(F,et,ze),fe=new Ng(Ge),G=new s_(y,B,S,Be,et,xe,fe),q=new C_(y,Ge),J=new a_,ce=new f_(Be),ue=new Pg(y,B,S,Re,N,d,c),Le=new v_(y,N,et),Ae=new P_(F,qe,et,Re),j=new Ig(F,Be,qe),re=new Hg(F,Be,qe),qe.programs=G.programs,y.capabilities=et,y.extensions=Be,y.properties=Ge,y.renderLists=J,y.shadowMap=Le,y.state=Re,y.info=qe}Fe();const L=new A_(y,F);this.xr=L,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const b=Be.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Be.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(b){b!==void 0&&(z=b,this.setSize(ie,ne,!1))},this.getSize=function(b){return b.set(ie,ne)},this.setSize=function(b,H,$=!0){if(L.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ie=b,ne=H,t.width=Math.floor(b*z),t.height=Math.floor(H*z),$===!0&&(t.style.width=b+"px",t.style.height=H+"px"),this.setViewport(0,0,b,H)},this.getDrawingBufferSize=function(b){return b.set(ie*z,ne*z).floor()},this.setDrawingBufferSize=function(b,H,$){ie=b,ne=H,z=$,t.width=Math.floor(b*$),t.height=Math.floor(H*$),this.setViewport(0,0,b,H)},this.getCurrentViewport=function(b){return b.copy(x)},this.getViewport=function(b){return b.copy(O)},this.setViewport=function(b,H,$,K){b.isVector4?O.set(b.x,b.y,b.z,b.w):O.set(b,H,$,K),Re.viewport(x.copy(O).multiplyScalar(z).round())},this.getScissor=function(b){return b.copy(k)},this.setScissor=function(b,H,$,K){b.isVector4?k.set(b.x,b.y,b.z,b.w):k.set(b,H,$,K),Re.scissor(P.copy(k).multiplyScalar(z).round())},this.getScissorTest=function(){return se},this.setScissorTest=function(b){Re.setScissorTest(se=b)},this.setOpaqueSort=function(b){V=b},this.setTransparentSort=function(b){he=b},this.getClearColor=function(b){return b.copy(ue.getClearColor())},this.setClearColor=function(){ue.setClearColor.apply(ue,arguments)},this.getClearAlpha=function(){return ue.getClearAlpha()},this.setClearAlpha=function(){ue.setClearAlpha.apply(ue,arguments)},this.clear=function(b=!0,H=!0,$=!0){let K=0;if(b){let W=!1;if(E!==null){const _e=E.texture.format;W=_e===au||_e===ou||_e===ru}if(W){const _e=E.texture.type,Ee=_e===mi||_e===zs||_e===Co||_e===ks||_e===iu||_e===su,Te=ue.getClearColor(),Pe=ue.getClearAlpha(),ke=Te.r,He=Te.g,Ue=Te.b;Ee?(f[0]=ke,f[1]=He,f[2]=Ue,f[3]=Pe,F.clearBufferuiv(F.COLOR,0,f)):(g[0]=ke,g[1]=He,g[2]=Ue,g[3]=Pe,F.clearBufferiv(F.COLOR,0,g))}else K|=F.COLOR_BUFFER_BIT}H&&(K|=F.DEPTH_BUFFER_BIT),$&&(K|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ye,!1),t.removeEventListener("webglcontextrestored",ee,!1),t.removeEventListener("webglcontextcreationerror",ae,!1),J.dispose(),ce.dispose(),Ge.dispose(),B.dispose(),S.dispose(),N.dispose(),xe.dispose(),Ae.dispose(),G.dispose(),L.dispose(),L.removeEventListener("sessionstart",xn),L.removeEventListener("sessionend",yn),yi.stop()};function ye(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function ee(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const b=qe.autoReset,H=Le.enabled,$=Le.autoUpdate,K=Le.needsUpdate,W=Le.type;Fe(),qe.autoReset=b,Le.enabled=H,Le.autoUpdate=$,Le.needsUpdate=K,Le.type=W}function ae(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function de(b){const H=b.target;H.removeEventListener("dispose",de),Ie(H)}function Ie(b){Je(b),Ge.remove(b)}function Je(b){const H=Ge.get(b).programs;H!==void 0&&(H.forEach(function($){G.releaseProgram($)}),b.isShaderMaterial&&G.releaseShaderCache(b))}this.renderBufferDirect=function(b,H,$,K,W,_e){H===null&&(H=Ce);const Ee=W.isMesh&&W.matrixWorld.determinant()<0,Te=fd(b,H,$,K,W);Re.setMaterial(K,Ee);let Pe=$.index,ke=1;if(K.wireframe===!0){if(Pe=A.getWireframeAttribute($),Pe===void 0)return;ke=2}const He=$.drawRange,Ue=$.attributes.position;let tt=He.start*ke,vt=(He.start+He.count)*ke;_e!==null&&(tt=Math.max(tt,_e.start*ke),vt=Math.min(vt,(_e.start+_e.count)*ke)),Pe!==null?(tt=Math.max(tt,0),vt=Math.min(vt,Pe.count)):Ue!=null&&(tt=Math.max(tt,0),vt=Math.min(vt,Ue.count));const xt=vt-tt;if(xt<0||xt===1/0)return;xe.setup(W,K,Te,$,Pe);let $t,it=j;if(Pe!==null&&($t=_.get(Pe),it=re,it.setIndex($t)),W.isMesh)K.wireframe===!0?(Re.setLineWidth(K.wireframeLinewidth*We()),it.setMode(F.LINES)):it.setMode(F.TRIANGLES);else if(W.isLine){let De=K.linewidth;De===void 0&&(De=1),Re.setLineWidth(De*We()),W.isLineSegments?it.setMode(F.LINES):W.isLineLoop?it.setMode(F.LINE_LOOP):it.setMode(F.LINE_STRIP)}else W.isPoints?it.setMode(F.POINTS):W.isSprite&&it.setMode(F.TRIANGLES);if(W.isBatchedMesh)W._multiDrawInstances!==null?it.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances):it.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else if(W.isInstancedMesh)it.renderInstances(tt,xt,W.count);else if($.isInstancedBufferGeometry){const De=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Vt=Math.min($.instanceCount,De);it.renderInstances(tt,xt,Vt)}else it.render(tt,xt)};function mt(b,H,$){b.transparent===!0&&b.side===on&&b.forceSinglePass===!1?(b.side=qt,b.needsUpdate=!0,Vr(b,H,$),b.side=pi,b.needsUpdate=!0,Vr(b,H,$),b.side=on):Vr(b,H,$)}this.compile=function(b,H,$=null){$===null&&($=b),m=ce.get($),m.init(H),T.push(m),$.traverseVisible(function(W){W.isLight&&W.layers.test(H.layers)&&(m.pushLight(W),W.castShadow&&m.pushShadow(W))}),b!==$&&b.traverseVisible(function(W){W.isLight&&W.layers.test(H.layers)&&(m.pushLight(W),W.castShadow&&m.pushShadow(W))}),m.setupLights();const K=new Set;return b.traverse(function(W){const _e=W.material;if(_e)if(Array.isArray(_e))for(let Ee=0;Ee<_e.length;Ee++){const Te=_e[Ee];mt(Te,$,W),K.add(Te)}else mt(_e,$,W),K.add(_e)}),T.pop(),m=null,K},this.compileAsync=function(b,H,$=null){const K=this.compile(b,H,$);return new Promise(W=>{function _e(){if(K.forEach(function(Ee){Ge.get(Ee).currentProgram.isReady()&&K.delete(Ee)}),K.size===0){W(b);return}setTimeout(_e,10)}Be.get("KHR_parallel_shader_compile")!==null?_e():setTimeout(_e,10)})};let Ct=null;function rt(b){Ct&&Ct(b)}function xn(){yi.stop()}function yn(){yi.start()}const yi=new yu;yi.setAnimationLoop(rt),typeof self<"u"&&yi.setContext(self),this.setAnimationLoop=function(b){Ct=b,L.setAnimationLoop(b),b===null?yi.stop():yi.start()},L.addEventListener("sessionstart",xn),L.addEventListener("sessionend",yn),this.render=function(b,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),L.enabled===!0&&L.isPresenting===!0&&(L.cameraAutoUpdate===!0&&L.updateCamera(H),H=L.getCamera()),b.isScene===!0&&b.onBeforeRender(y,b,H,E),m=ce.get(b,T.length),m.init(H),T.push(m),me.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),ge.setFromProjectionMatrix(me),le=this.localClippingEnabled,Y=fe.init(this.clippingPlanes,le),v=J.get(b,p.length),v.init(),p.push(v),L.enabled===!0&&L.isPresenting===!0){const _e=y.xr.getDepthSensingMesh();_e!==null&&Yo(_e,H,-1/0,y.sortObjects)}Yo(b,H,0,y.sortObjects),v.finish(),y.sortObjects===!0&&v.sort(V,he),Ne=L.enabled===!1||L.isPresenting===!1||L.hasDepthSensing()===!1,Ne&&ue.addToRenderList(v,b),this.info.render.frame++,Y===!0&&fe.beginShadows();const $=m.state.shadowsArray;Le.render($,b,H),Y===!0&&fe.endShadows(),this.info.autoReset===!0&&this.info.reset();const K=v.opaque,W=v.transmissive;if(m.setupLights(),H.isArrayCamera){const _e=H.cameras;if(W.length>0)for(let Ee=0,Te=_e.length;Ee<Te;Ee++){const Pe=_e[Ee];Fc(K,W,b,Pe)}Ne&&ue.render(b);for(let Ee=0,Te=_e.length;Ee<Te;Ee++){const Pe=_e[Ee];Oc(v,b,Pe,Pe.viewport)}}else W.length>0&&Fc(K,W,b,H),Ne&&ue.render(b),Oc(v,b,H);E!==null&&(ze.updateMultisampleRenderTarget(E),ze.updateRenderTargetMipmap(E)),b.isScene===!0&&b.onAfterRender(y,b,H),xe.resetDefaultState(),D=-1,M=null,T.pop(),T.length>0?(m=T[T.length-1],Y===!0&&fe.setGlobalState(y.clippingPlanes,m.state.camera)):m=null,p.pop(),p.length>0?v=p[p.length-1]:v=null};function Yo(b,H,$,K){if(b.visible===!1)return;if(b.layers.test(H.layers)){if(b.isGroup)$=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(H);else if(b.isLight)m.pushLight(b),b.castShadow&&m.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||ge.intersectsSprite(b)){K&&ve.setFromMatrixPosition(b.matrixWorld).applyMatrix4(me);const Ee=N.update(b),Te=b.material;Te.visible&&v.push(b,Ee,Te,$,ve.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||ge.intersectsObject(b))){const Ee=N.update(b),Te=b.material;if(K&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),ve.copy(b.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),ve.copy(Ee.boundingSphere.center)),ve.applyMatrix4(b.matrixWorld).applyMatrix4(me)),Array.isArray(Te)){const Pe=Ee.groups;for(let ke=0,He=Pe.length;ke<He;ke++){const Ue=Pe[ke],tt=Te[Ue.materialIndex];tt&&tt.visible&&v.push(b,Ee,tt,$,ve.z,Ue)}}else Te.visible&&v.push(b,Ee,Te,$,ve.z,null)}}const _e=b.children;for(let Ee=0,Te=_e.length;Ee<Te;Ee++)Yo(_e[Ee],H,$,K)}function Oc(b,H,$,K){const W=b.opaque,_e=b.transmissive,Ee=b.transparent;m.setupLightsView($),Y===!0&&fe.setGlobalState(y.clippingPlanes,$),K&&Re.viewport(x.copy(K)),W.length>0&&Gr(W,H,$),_e.length>0&&Gr(_e,H,$),Ee.length>0&&Gr(Ee,H,$),Re.buffers.depth.setTest(!0),Re.buffers.depth.setMask(!0),Re.buffers.color.setMask(!0),Re.setPolygonOffset(!1)}function Fc(b,H,$,K){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[K.id]===void 0&&(m.state.transmissionRenderTarget[K.id]=new Fi(1,1,{generateMipmaps:!0,type:Be.has("EXT_color_buffer_half_float")||Be.has("EXT_color_buffer_float")?Ho:mi,minFilter:Ni,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:st.workingColorSpace}));const _e=m.state.transmissionRenderTarget[K.id],Ee=K.viewport||x;_e.setSize(Ee.z,Ee.w);const Te=y.getRenderTarget();y.setRenderTarget(_e),y.getClearColor(X),Q=y.getClearAlpha(),Q<1&&y.setClearColor(16777215,.5),Ne?ue.render($):y.clear();const Pe=y.toneMapping;y.toneMapping=hi;const ke=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),m.setupLightsView(K),Y===!0&&fe.setGlobalState(y.clippingPlanes,K),Gr(b,$,K),ze.updateMultisampleRenderTarget(_e),ze.updateRenderTargetMipmap(_e),Be.has("WEBGL_multisampled_render_to_texture")===!1){let He=!1;for(let Ue=0,tt=H.length;Ue<tt;Ue++){const vt=H[Ue],xt=vt.object,$t=vt.geometry,it=vt.material,De=vt.group;if(it.side===on&&xt.layers.test(K.layers)){const Vt=it.side;it.side=qt,it.needsUpdate=!0,Bc(xt,$,K,$t,it,De),it.side=Vt,it.needsUpdate=!0,He=!0}}He===!0&&(ze.updateMultisampleRenderTarget(_e),ze.updateRenderTargetMipmap(_e))}y.setRenderTarget(Te),y.setClearColor(X,Q),ke!==void 0&&(K.viewport=ke),y.toneMapping=Pe}function Gr(b,H,$){const K=H.isScene===!0?H.overrideMaterial:null;for(let W=0,_e=b.length;W<_e;W++){const Ee=b[W],Te=Ee.object,Pe=Ee.geometry,ke=K===null?Ee.material:K,He=Ee.group;Te.layers.test($.layers)&&Bc(Te,H,$,Pe,ke,He)}}function Bc(b,H,$,K,W,_e){b.onBeforeRender(y,H,$,K,W,_e),b.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),W.onBeforeRender(y,H,$,K,b,_e),W.transparent===!0&&W.side===on&&W.forceSinglePass===!1?(W.side=qt,W.needsUpdate=!0,y.renderBufferDirect($,H,K,W,b,_e),W.side=pi,W.needsUpdate=!0,y.renderBufferDirect($,H,K,W,b,_e),W.side=on):y.renderBufferDirect($,H,K,W,b,_e),b.onAfterRender(y,H,$,K,W,_e)}function Vr(b,H,$){H.isScene!==!0&&(H=Ce);const K=Ge.get(b),W=m.state.lights,_e=m.state.shadowsArray,Ee=W.state.version,Te=G.getParameters(b,W.state,_e,H,$),Pe=G.getProgramCacheKey(Te);let ke=K.programs;K.environment=b.isMeshStandardMaterial?H.environment:null,K.fog=H.fog,K.envMap=(b.isMeshStandardMaterial?S:B).get(b.envMap||K.environment),K.envMapRotation=K.environment!==null&&b.envMap===null?H.environmentRotation:b.envMapRotation,ke===void 0&&(b.addEventListener("dispose",de),ke=new Map,K.programs=ke);let He=ke.get(Pe);if(He!==void 0){if(K.currentProgram===He&&K.lightsStateVersion===Ee)return kc(b,Te),He}else Te.uniforms=G.getUniforms(b),b.onBuild($,Te,y),b.onBeforeCompile(Te,y),He=G.acquireProgram(Te,Pe),ke.set(Pe,He),K.uniforms=Te.uniforms;const Ue=K.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ue.clippingPlanes=fe.uniform),kc(b,Te),K.needsLights=md(b),K.lightsStateVersion=Ee,K.needsLights&&(Ue.ambientLightColor.value=W.state.ambient,Ue.lightProbe.value=W.state.probe,Ue.directionalLights.value=W.state.directional,Ue.directionalLightShadows.value=W.state.directionalShadow,Ue.spotLights.value=W.state.spot,Ue.spotLightShadows.value=W.state.spotShadow,Ue.rectAreaLights.value=W.state.rectArea,Ue.ltc_1.value=W.state.rectAreaLTC1,Ue.ltc_2.value=W.state.rectAreaLTC2,Ue.pointLights.value=W.state.point,Ue.pointLightShadows.value=W.state.pointShadow,Ue.hemisphereLights.value=W.state.hemi,Ue.directionalShadowMap.value=W.state.directionalShadowMap,Ue.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Ue.spotShadowMap.value=W.state.spotShadowMap,Ue.spotLightMatrix.value=W.state.spotLightMatrix,Ue.spotLightMap.value=W.state.spotLightMap,Ue.pointShadowMap.value=W.state.pointShadowMap,Ue.pointShadowMatrix.value=W.state.pointShadowMatrix),K.currentProgram=He,K.uniformsList=null,He}function zc(b){if(b.uniformsList===null){const H=b.currentProgram.getUniforms();b.uniformsList=Eo.seqWithValue(H.seq,b.uniforms)}return b.uniformsList}function kc(b,H){const $=Ge.get(b);$.outputColorSpace=H.outputColorSpace,$.batching=H.batching,$.batchingColor=H.batchingColor,$.instancing=H.instancing,$.instancingColor=H.instancingColor,$.instancingMorph=H.instancingMorph,$.skinning=H.skinning,$.morphTargets=H.morphTargets,$.morphNormals=H.morphNormals,$.morphColors=H.morphColors,$.morphTargetsCount=H.morphTargetsCount,$.numClippingPlanes=H.numClippingPlanes,$.numIntersection=H.numClipIntersection,$.vertexAlphas=H.vertexAlphas,$.vertexTangents=H.vertexTangents,$.toneMapping=H.toneMapping}function fd(b,H,$,K,W){H.isScene!==!0&&(H=Ce),ze.resetTextureUnits();const _e=H.fog,Ee=K.isMeshStandardMaterial?H.environment:null,Te=E===null?y.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:xi,Pe=(K.isMeshStandardMaterial?S:B).get(K.envMap||Ee),ke=K.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,He=!!$.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Ue=!!$.morphAttributes.position,tt=!!$.morphAttributes.normal,vt=!!$.morphAttributes.color;let xt=hi;K.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(xt=y.toneMapping);const $t=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,it=$t!==void 0?$t.length:0,De=Ge.get(K),Vt=m.state.lights;if(Y===!0&&(le===!0||b!==M)){const en=b===M&&K.id===D;fe.setState(K,b,en)}let ot=!1;K.version===De.__version?(De.needsLights&&De.lightsStateVersion!==Vt.state.version||De.outputColorSpace!==Te||W.isBatchedMesh&&De.batching===!1||!W.isBatchedMesh&&De.batching===!0||W.isBatchedMesh&&De.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&De.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&De.instancing===!1||!W.isInstancedMesh&&De.instancing===!0||W.isSkinnedMesh&&De.skinning===!1||!W.isSkinnedMesh&&De.skinning===!0||W.isInstancedMesh&&De.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&De.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&De.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&De.instancingMorph===!1&&W.morphTexture!==null||De.envMap!==Pe||K.fog===!0&&De.fog!==_e||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==fe.numPlanes||De.numIntersection!==fe.numIntersection)||De.vertexAlphas!==ke||De.vertexTangents!==He||De.morphTargets!==Ue||De.morphNormals!==tt||De.morphColors!==vt||De.toneMapping!==xt||De.morphTargetsCount!==it)&&(ot=!0):(ot=!0,De.__version=K.version);let Ln=De.currentProgram;ot===!0&&(Ln=Vr(K,H,W));let Wr=!1,Si=!1,qo=!1;const Pt=Ln.getUniforms(),qn=De.uniforms;if(Re.useProgram(Ln.program)&&(Wr=!0,Si=!0,qo=!0),K.id!==D&&(D=K.id,Si=!0),Wr||M!==b){Pt.setValue(F,"projectionMatrix",b.projectionMatrix),Pt.setValue(F,"viewMatrix",b.matrixWorldInverse);const en=Pt.map.cameraPosition;en!==void 0&&en.setValue(F,ve.setFromMatrixPosition(b.matrixWorld)),et.logarithmicDepthBuffer&&Pt.setValue(F,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&Pt.setValue(F,"isOrthographic",b.isOrthographicCamera===!0),M!==b&&(M=b,Si=!0,qo=!0)}if(W.isSkinnedMesh){Pt.setOptional(F,W,"bindMatrix"),Pt.setOptional(F,W,"bindMatrixInverse");const en=W.skeleton;en&&(en.boneTexture===null&&en.computeBoneTexture(),Pt.setValue(F,"boneTexture",en.boneTexture,ze))}W.isBatchedMesh&&(Pt.setOptional(F,W,"batchingTexture"),Pt.setValue(F,"batchingTexture",W._matricesTexture,ze),Pt.setOptional(F,W,"batchingColorTexture"),W._colorsTexture!==null&&Pt.setValue(F,"batchingColorTexture",W._colorsTexture,ze));const $o=$.morphAttributes;if(($o.position!==void 0||$o.normal!==void 0||$o.color!==void 0)&&we.update(W,$,Ln),(Si||De.receiveShadow!==W.receiveShadow)&&(De.receiveShadow=W.receiveShadow,Pt.setValue(F,"receiveShadow",W.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(qn.envMap.value=Pe,qn.flipEnvMap.value=Pe.isCubeTexture&&Pe.isRenderTargetTexture===!1?-1:1),K.isMeshStandardMaterial&&K.envMap===null&&H.environment!==null&&(qn.envMapIntensity.value=H.environmentIntensity),Si&&(Pt.setValue(F,"toneMappingExposure",y.toneMappingExposure),De.needsLights&&pd(qn,qo),_e&&K.fog===!0&&q.refreshFogUniforms(qn,_e),q.refreshMaterialUniforms(qn,K,z,ne,m.state.transmissionRenderTarget[b.id]),Eo.upload(F,zc(De),qn,ze)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(Eo.upload(F,zc(De),qn,ze),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&Pt.setValue(F,"center",W.center),Pt.setValue(F,"modelViewMatrix",W.modelViewMatrix),Pt.setValue(F,"normalMatrix",W.normalMatrix),Pt.setValue(F,"modelMatrix",W.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const en=K.uniformsGroups;for(let Ko=0,gd=en.length;Ko<gd;Ko++){const Hc=en[Ko];Ae.update(Hc,Ln),Ae.bind(Hc,Ln)}}return Ln}function pd(b,H){b.ambientLightColor.needsUpdate=H,b.lightProbe.needsUpdate=H,b.directionalLights.needsUpdate=H,b.directionalLightShadows.needsUpdate=H,b.pointLights.needsUpdate=H,b.pointLightShadows.needsUpdate=H,b.spotLights.needsUpdate=H,b.spotLightShadows.needsUpdate=H,b.rectAreaLights.needsUpdate=H,b.hemisphereLights.needsUpdate=H}function md(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(b,H,$){Ge.get(b.texture).__webglTexture=H,Ge.get(b.depthTexture).__webglTexture=$;const K=Ge.get(b);K.__hasExternalTextures=!0,K.__autoAllocateDepthBuffer=$===void 0,K.__autoAllocateDepthBuffer||Be.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,H){const $=Ge.get(b);$.__webglFramebuffer=H,$.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(b,H=0,$=0){E=b,I=H,R=$;let K=!0,W=null,_e=!1,Ee=!1;if(b){const Pe=Ge.get(b);Pe.__useDefaultFramebuffer!==void 0?(Re.bindFramebuffer(F.FRAMEBUFFER,null),K=!1):Pe.__webglFramebuffer===void 0?ze.setupRenderTarget(b):Pe.__hasExternalTextures&&ze.rebindTextures(b,Ge.get(b.texture).__webglTexture,Ge.get(b.depthTexture).__webglTexture);const ke=b.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(Ee=!0);const He=Ge.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(He[H])?W=He[H][$]:W=He[H],_e=!0):b.samples>0&&ze.useMultisampledRTT(b)===!1?W=Ge.get(b).__webglMultisampledFramebuffer:Array.isArray(He)?W=He[$]:W=He,x.copy(b.viewport),P.copy(b.scissor),Z=b.scissorTest}else x.copy(O).multiplyScalar(z).floor(),P.copy(k).multiplyScalar(z).floor(),Z=se;if(Re.bindFramebuffer(F.FRAMEBUFFER,W)&&K&&Re.drawBuffers(b,W),Re.viewport(x),Re.scissor(P),Re.setScissorTest(Z),_e){const Pe=Ge.get(b.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+H,Pe.__webglTexture,$)}else if(Ee){const Pe=Ge.get(b.texture),ke=H||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Pe.__webglTexture,$||0,ke)}D=-1},this.readRenderTargetPixels=function(b,H,$,K,W,_e,Ee){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=Ge.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ee!==void 0&&(Te=Te[Ee]),Te){Re.bindFramebuffer(F.FRAMEBUFFER,Te);try{const Pe=b.texture,ke=Pe.format,He=Pe.type;if(!et.textureFormatReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!et.textureTypeReadable(He)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=b.width-K&&$>=0&&$<=b.height-W&&F.readPixels(H,$,K,W,te.convert(ke),te.convert(He),_e)}finally{const Pe=E!==null?Ge.get(E).__webglFramebuffer:null;Re.bindFramebuffer(F.FRAMEBUFFER,Pe)}}},this.readRenderTargetPixelsAsync=async function(b,H,$,K,W,_e,Ee){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=Ge.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ee!==void 0&&(Te=Te[Ee]),Te){Re.bindFramebuffer(F.FRAMEBUFFER,Te);try{const Pe=b.texture,ke=Pe.format,He=Pe.type;if(!et.textureFormatReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!et.textureTypeReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(H>=0&&H<=b.width-K&&$>=0&&$<=b.height-W){const Ue=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Ue),F.bufferData(F.PIXEL_PACK_BUFFER,_e.byteLength,F.STREAM_READ),F.readPixels(H,$,K,W,te.convert(ke),te.convert(He),0),F.flush();const tt=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);await wf(F,tt,4);try{F.bindBuffer(F.PIXEL_PACK_BUFFER,Ue),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,_e)}finally{F.deleteBuffer(Ue),F.deleteSync(tt)}return _e}}finally{const Pe=E!==null?Ge.get(E).__webglFramebuffer:null;Re.bindFramebuffer(F.FRAMEBUFFER,Pe)}}},this.copyFramebufferToTexture=function(b,H=null,$=0){b.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),H=arguments[0]||null,b=arguments[1]);const K=Math.pow(2,-$),W=Math.floor(b.image.width*K),_e=Math.floor(b.image.height*K),Ee=H!==null?H.x:0,Te=H!==null?H.y:0;ze.setTexture2D(b,0),F.copyTexSubImage2D(F.TEXTURE_2D,$,0,0,Ee,Te,W,_e),Re.unbindTexture()},this.copyTextureToTexture=function(b,H,$=null,K=null,W=0){b.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),K=arguments[0]||null,b=arguments[1],H=arguments[2],W=arguments[3]||0,$=null);let _e,Ee,Te,Pe,ke,He;$!==null?(_e=$.max.x-$.min.x,Ee=$.max.y-$.min.y,Te=$.min.x,Pe=$.min.y):(_e=b.image.width,Ee=b.image.height,Te=0,Pe=0),K!==null?(ke=K.x,He=K.y):(ke=0,He=0);const Ue=te.convert(H.format),tt=te.convert(H.type);ze.setTexture2D(H,0),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,H.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,H.unpackAlignment);const vt=F.getParameter(F.UNPACK_ROW_LENGTH),xt=F.getParameter(F.UNPACK_IMAGE_HEIGHT),$t=F.getParameter(F.UNPACK_SKIP_PIXELS),it=F.getParameter(F.UNPACK_SKIP_ROWS),De=F.getParameter(F.UNPACK_SKIP_IMAGES),Vt=b.isCompressedTexture?b.mipmaps[W]:b.image;F.pixelStorei(F.UNPACK_ROW_LENGTH,Vt.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Vt.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Te),F.pixelStorei(F.UNPACK_SKIP_ROWS,Pe),b.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,W,ke,He,_e,Ee,Ue,tt,Vt.data):b.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,W,ke,He,Vt.width,Vt.height,Ue,Vt.data):F.texSubImage2D(F.TEXTURE_2D,W,ke,He,Ue,tt,Vt),F.pixelStorei(F.UNPACK_ROW_LENGTH,vt),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,xt),F.pixelStorei(F.UNPACK_SKIP_PIXELS,$t),F.pixelStorei(F.UNPACK_SKIP_ROWS,it),F.pixelStorei(F.UNPACK_SKIP_IMAGES,De),W===0&&H.generateMipmaps&&F.generateMipmap(F.TEXTURE_2D),Re.unbindTexture()},this.copyTextureToTexture3D=function(b,H,$=null,K=null,W=0){b.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),$=arguments[0]||null,K=arguments[1]||null,b=arguments[2],H=arguments[3],W=arguments[4]||0);let _e,Ee,Te,Pe,ke,He,Ue,tt,vt;const xt=b.isCompressedTexture?b.mipmaps[W]:b.image;$!==null?(_e=$.max.x-$.min.x,Ee=$.max.y-$.min.y,Te=$.max.z-$.min.z,Pe=$.min.x,ke=$.min.y,He=$.min.z):(_e=xt.width,Ee=xt.height,Te=xt.depth,Pe=0,ke=0,He=0),K!==null?(Ue=K.x,tt=K.y,vt=K.z):(Ue=0,tt=0,vt=0);const $t=te.convert(H.format),it=te.convert(H.type);let De;if(H.isData3DTexture)ze.setTexture3D(H,0),De=F.TEXTURE_3D;else if(H.isDataArrayTexture||H.isCompressedArrayTexture)ze.setTexture2DArray(H,0),De=F.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,H.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,H.unpackAlignment);const Vt=F.getParameter(F.UNPACK_ROW_LENGTH),ot=F.getParameter(F.UNPACK_IMAGE_HEIGHT),Ln=F.getParameter(F.UNPACK_SKIP_PIXELS),Wr=F.getParameter(F.UNPACK_SKIP_ROWS),Si=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,xt.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,xt.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Pe),F.pixelStorei(F.UNPACK_SKIP_ROWS,ke),F.pixelStorei(F.UNPACK_SKIP_IMAGES,He),b.isDataTexture||b.isData3DTexture?F.texSubImage3D(De,W,Ue,tt,vt,_e,Ee,Te,$t,it,xt.data):H.isCompressedArrayTexture?F.compressedTexSubImage3D(De,W,Ue,tt,vt,_e,Ee,Te,$t,xt.data):F.texSubImage3D(De,W,Ue,tt,vt,_e,Ee,Te,$t,it,xt),F.pixelStorei(F.UNPACK_ROW_LENGTH,Vt),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ot),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Ln),F.pixelStorei(F.UNPACK_SKIP_ROWS,Wr),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Si),W===0&&H.generateMipmaps&&F.generateMipmap(De),Re.unbindTexture()},this.initRenderTarget=function(b){Ge.get(b).__webglFramebuffer===void 0&&ze.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?ze.setTextureCube(b,0):b.isData3DTexture?ze.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?ze.setTexture2DArray(b,0):ze.setTexture2D(b,0),Re.unbindTexture()},this.resetState=function(){I=0,R=0,E=null,Re.reset(),xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===pc?"display-p3":"srgb",t.unpackColorSpace=st.workingColorSpace===Go?"display-p3":"srgb"}}class yc{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ke(e),this.density=t}clone(){return new yc(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class I_ extends Nt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Rn,this.environmentIntensity=1,this.environmentRotation=new Rn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class D_{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ja,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=ui()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return mc("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ui()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ui()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Wt=new U;class Uo{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix4(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.applyNormalMatrix(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.transformDirection(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Tn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ct(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Tn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Tn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Tn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Tn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array),s=ct(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array),s=ct(s,this.array),r=ct(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new gn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Uo(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Ru extends Xs{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ke(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let ss;const Qs=new U,rs=new U,os=new U,as=new Me,er=new Me,Cu=new dt,po=new U,tr=new U,mo=new U,ch=new Me,La=new Me,lh=new Me;class N_ extends Nt{constructor(e=new Ru){if(super(),this.isSprite=!0,this.type="Sprite",ss===void 0){ss=new ln;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new D_(t,5);ss.setIndex([0,1,2,0,2,3]),ss.setAttribute("position",new Uo(n,3,0,!1)),ss.setAttribute("uv",new Uo(n,2,3,!1))}this.geometry=ss,this.material=e,this.center=new Me(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),rs.setFromMatrixScale(this.matrixWorld),Cu.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),os.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&rs.multiplyScalar(-os.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const o=this.center;go(po.set(-.5,-.5,0),os,o,rs,s,r),go(tr.set(.5,-.5,0),os,o,rs,s,r),go(mo.set(.5,.5,0),os,o,rs,s,r),ch.set(0,0),La.set(1,0),lh.set(1,1);let a=e.ray.intersectTriangle(po,tr,mo,!1,Qs);if(a===null&&(go(tr.set(-.5,.5,0),os,o,rs,s,r),La.set(0,1),a=e.ray.intersectTriangle(po,mo,tr,!1,Qs),a===null))return;const c=e.ray.origin.distanceTo(Qs);c<e.near||c>e.far||t.push({distance:c,point:Qs.clone(),uv:mn.getInterpolation(Qs,po,tr,mo,ch,La,lh,new Me),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function go(i,e,t,n,s,r){as.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(er.x=r*as.x-s*as.y,er.y=s*as.x+r*as.y):er.copy(as),i.copy(e),i.x+=er.x,i.y+=er.y,i.applyMatrix4(Cu)}class Xo extends Zt{constructor(e,t,n,s,r,o,a,c,l){super(e,t,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Pn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let s=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);const h=n[s],d=n[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=t||(o.isVector2?new Me:new U);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new U,s=[],r=[],o=[],a=new U,c=new dt;for(let f=0;f<=e;f++){const g=f/e;s[f]=this.getTangentAt(g,new U)}r[0]=new U,o[0]=new U;let l=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Ot(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(Ot(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Sc extends Pn{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new Me){const n=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+e*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class U_ extends Sc{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Mc(){let i=0,e=0,t=0,n=0;function s(r,o,a,c){i=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let d=(o-r)/l-(a-r)/(l+h)+(a-o)/h,f=(a-o)/h-(c-o)/(h+u)+(c-a)/u;d*=h,f*=h,s(o,a,d,f)},calc:function(r){const o=r*r,a=o*r;return i+e*r+t*o+n*a}}}const _o=new U,Ia=new Mc,Da=new Mc,Na=new Mc;class O_ extends Pn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new U){const n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(_o.subVectors(s[0],s[1]).add(s[0]),l=_o);const u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(_o.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=_o),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(u),f),v=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),Ia.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,g,v,m),Da.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,g,v,m),Na.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,g,v,m)}else this.curveType==="catmullrom"&&(Ia.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),Da.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),Na.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(Ia.calc(c),Da.calc(c),Na.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new U().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function hh(i,e,t,n,s){const r=(n-e)*.5,o=(s-t)*.5,a=i*i,c=i*a;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*a+r*i+t}function F_(i,e){const t=1-i;return t*t*e}function B_(i,e){return 2*(1-i)*i*e}function z_(i,e){return i*i*e}function hr(i,e,t,n){return F_(i,e)+B_(i,t)+z_(i,n)}function k_(i,e){const t=1-i;return t*t*t*e}function H_(i,e){const t=1-i;return 3*t*t*i*e}function G_(i,e){return 3*(1-i)*i*i*e}function V_(i,e){return i*i*i*e}function ur(i,e,t,n,s){return k_(i,e)+H_(i,t)+G_(i,n)+V_(i,s)}class Pu extends Pn{constructor(e=new Me,t=new Me,n=new Me,s=new Me){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new Me){const n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ur(e,s.x,r.x,o.x,a.x),ur(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class W_ extends Pn{constructor(e=new U,t=new U,n=new U,s=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new U){const n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ur(e,s.x,r.x,o.x,a.x),ur(e,s.y,r.y,o.y,a.y),ur(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Lu extends Pn{constructor(e=new Me,t=new Me){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Me){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Me){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class X_ extends Pn{constructor(e=new U,t=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new U){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new U){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Iu extends Pn{constructor(e=new Me,t=new Me,n=new Me){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Me){const n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(hr(e,s.x,r.x,o.x),hr(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Z_ extends Pn{constructor(e=new U,t=new U,n=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new U){const n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(hr(e,s.x,r.x,o.x),hr(e,s.y,r.y,o.y),hr(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Du extends Pn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Me){const n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(hh(a,c.x,l.x,h.x,u.x),hh(a,c.y,l.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new Me().fromArray(s))}return this}}var uh=Object.freeze({__proto__:null,ArcCurve:U_,CatmullRomCurve3:O_,CubicBezierCurve:Pu,CubicBezierCurve3:W_,EllipseCurve:Sc,LineCurve:Lu,LineCurve3:X_,QuadraticBezierCurve:Iu,QuadraticBezierCurve3:Z_,SplineCurve:Du});class Y_ extends Pn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new uh[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(new uh[s.type]().fromJSON(s))}return this}}class q_ extends Y_{constructor(e){super(),this.type="Path",this.currentPoint=new Me,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Lu(this.currentPoint.clone(),new Me(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){const r=new Iu(this.currentPoint.clone(),new Me(e,t),new Me(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){const a=new Pu(this.currentPoint.clone(),new Me(e,t),new Me(n,s),new Me(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Du(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,s,r,o,a,c),this}absellipse(e,t,n,s,r,o,a,c){const l=new Sc(e,t,n,s,r,o,a,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Ec extends ln{constructor(e=[new Me(0,-.5),new Me(.5,0),new Me(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=Ot(s,0,Math.PI*2);const r=[],o=[],a=[],c=[],l=[],h=1/t,u=new U,d=new Me,f=new U,g=new U,v=new U;let m=0,p=0;for(let T=0;T<=e.length-1;T++)switch(T){case 0:m=e[T+1].x-e[T].x,p=e[T+1].y-e[T].y,f.x=p*1,f.y=-m,f.z=p*0,v.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case e.length-1:c.push(v.x,v.y,v.z);break;default:m=e[T+1].x-e[T].x,p=e[T+1].y-e[T].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=v.x,f.y+=v.y,f.z+=v.z,f.normalize(),c.push(f.x,f.y,f.z),v.copy(g)}for(let T=0;T<=t;T++){const y=n+T*h*s,w=Math.sin(y),I=Math.cos(y);for(let R=0;R<=e.length-1;R++){u.x=e[R].x*w,u.y=e[R].y,u.z=e[R].x*I,o.push(u.x,u.y,u.z),d.x=T/t,d.y=R/(e.length-1),a.push(d.x,d.y);const E=c[3*R+0]*w,D=c[3*R+1],M=c[3*R+0]*I;l.push(E,D,M)}}for(let T=0;T<t;T++)for(let y=0;y<e.length-1;y++){const w=y+T*e.length,I=w,R=w+e.length,E=w+e.length+1,D=w+1;r.push(I,R,D),r.push(E,D,R)}this.setIndex(r),this.setAttribute("position",new Tt(o,3)),this.setAttribute("uv",new Tt(a,2)),this.setAttribute("normal",new Tt(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ec(e.points,e.segments,e.phiStart,e.phiLength)}}class ai extends Ec{constructor(e=1,t=1,n=4,s=8){const r=new q_;r.absarc(0,-t/2,e,Math.PI*1.5,0),r.absarc(0,t/2,e,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:s}}static fromJSON(e){return new ai(e.radius,e.length,e.capSegments,e.radialSegments)}}class wc extends ln{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);const r=[],o=[],a=[],c=[],l=new U,h=new Me;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){const f=n+u/t*s;l.x=e*Math.cos(f),l.y=e*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[d]/e+1)/2,h.y=(o[d+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Tt(o,3)),this.setAttribute("normal",new Tt(a,3)),this.setAttribute("uv",new Tt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wc(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Ft extends ln{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],d=[],f=[];let g=0;const v=[],m=n/2;let p=0;T(),o===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new Tt(u,3)),this.setAttribute("normal",new Tt(d,3)),this.setAttribute("uv",new Tt(f,2));function T(){const w=new U,I=new U;let R=0;const E=(t-e)/n;for(let D=0;D<=r;D++){const M=[],x=D/r,P=x*(t-e)+e;for(let Z=0;Z<=s;Z++){const X=Z/s,Q=X*c+a,ie=Math.sin(Q),ne=Math.cos(Q);I.x=P*ie,I.y=-x*n+m,I.z=P*ne,u.push(I.x,I.y,I.z),w.set(ie,E,ne).normalize(),d.push(w.x,w.y,w.z),f.push(X,1-x),M.push(g++)}v.push(M)}for(let D=0;D<s;D++)for(let M=0;M<r;M++){const x=v[M][D],P=v[M+1][D],Z=v[M+1][D+1],X=v[M][D+1];h.push(x,P,X),h.push(P,Z,X),R+=6}l.addGroup(p,R,0),p+=R}function y(w){const I=g,R=new Me,E=new U;let D=0;const M=w===!0?e:t,x=w===!0?1:-1;for(let Z=1;Z<=s;Z++)u.push(0,m*x,0),d.push(0,x,0),f.push(.5,.5),g++;const P=g;for(let Z=0;Z<=s;Z++){const Q=Z/s*c+a,ie=Math.cos(Q),ne=Math.sin(Q);E.x=M*ne,E.y=m*x,E.z=M*ie,u.push(E.x,E.y,E.z),d.push(0,x,0),R.x=ie*.5+.5,R.y=ne*.5*x+.5,f.push(R.x,R.y),g++}for(let Z=0;Z<s;Z++){const X=I+Z,Q=P+Z;w===!0?h.push(Q,Q+1,X):h.push(Q+1,Q,X),D+=3}l.addGroup(p,D,w===!0?1:2),p+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ft(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class bc extends Ft{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new bc(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class yt extends ln{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],u=new U,d=new U,f=[],g=[],v=[],m=[];for(let p=0;p<=n;p++){const T=[],y=p/n;let w=0;p===0&&o===0?w=.5/t:p===n&&c===Math.PI&&(w=-.5/t);for(let I=0;I<=t;I++){const R=I/t;u.x=-e*Math.cos(s+R*r)*Math.sin(o+y*a),u.y=e*Math.cos(o+y*a),u.z=e*Math.sin(s+R*r)*Math.sin(o+y*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),m.push(R+w,1-y),T.push(l++)}h.push(T)}for(let p=0;p<n;p++)for(let T=0;T<t;T++){const y=h[p][T+1],w=h[p][T],I=h[p+1][T],R=h[p+1][T+1];(p!==0||o>0)&&f.push(y,w,R),(p!==n-1||c<Math.PI)&&f.push(w,I,R)}this.setIndex(f),this.setAttribute("position",new Tt(g,3)),this.setAttribute("normal",new Tt(v,3)),this.setAttribute("uv",new Tt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yt(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Oe extends Xs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=cu,this.normalScale=new Me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Zo extends Nt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ke(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class $_ extends Zo{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Nt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ke(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Ua=new dt,dh=new U,fh=new U;class Nu{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Me(512,512),this.map=null,this.mapPass=null,this.matrix=new dt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new vc,this._frameExtents=new Me(1,1),this._viewportCount=1,this._viewports=[new pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;dh.setFromMatrixPosition(e.matrixWorld),t.position.copy(dh),fh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(fh),t.updateMatrixWorld(),Ua.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ua),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ua)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const ph=new dt,nr=new U,Oa=new U;class K_ extends Nu{constructor(){super(new Qt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Me(4,2),this._viewportCount=6,this._viewports=[new pt(2,1,1,1),new pt(0,1,1,1),new pt(3,1,1,1),new pt(1,1,1,1),new pt(3,0,1,1),new pt(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),nr.setFromMatrixPosition(e.matrixWorld),n.position.copy(nr),Oa.copy(n.position),Oa.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Oa),n.updateMatrixWorld(),s.makeTranslation(-nr.x,-nr.y,-nr.z),ph.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ph)}}class Tc extends Zo{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new K_}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class J_ extends Nu{constructor(){super(new Su(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class mh extends Zo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Nt.DEFAULT_UP),this.updateMatrix(),this.target=new Nt,this.shadow=new J_}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class j_ extends Zo{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Uu{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=gh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=gh();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function gh(){return(typeof performance>"u"?Date:performance).now()}const _h=new dt;class Q_{constructor(e,t,n=0,s=1/0){this.ray=new fu(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new _c,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return _h.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(_h),this}intersectObject(e,t=!0,n=[]){return ec(e,this,n,t),n.sort(vh),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)ec(e[s],this,n,t);return n.sort(vh),n}}function vh(i,e){return i.distance-e.distance}function ec(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)ec(r[o],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:fc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=fc);const Bi=[{id:0,label:"Alex",skin:16763812,hair:2889744,outfit:1981066,accent:15857145,hairStyle:1},{id:1,label:"Jordan",skin:13010498,hair:1118481,outfit:1332013,accent:16710083,hairStyle:0},{id:2,label:"Morgan",skin:8142098,hair:656640,outfit:8917815,accent:16701354,hairStyle:2},{id:3,label:"Casey",skin:15777920,hair:8138002,outfit:1461859,accent:14742270,hairStyle:3},{id:4,label:"Riley",skin:9584654,hair:197379,outfit:10105874,accent:16775149,hairStyle:0},{id:5,label:"Sam",skin:16640216,hair:11817737,outfit:4988309,accent:15591934,hairStyle:1}],Ac=[{id:"available",label:"🟢 Available",color:58998},{id:"busy",label:"🔴 Busy",color:16729156},{id:"away",label:"🟡 Away",color:16763904},{id:"meeting",label:"🟣 In Meeting",color:11158783}],tc=Object.fromEntries(Ac.map(i=>[i.id,i.color]));function Ou(i,e=0){const t=new Zn;return zu(t,i,e),t}function Fu(i,e){i.userData.status=e;const t=i.userData.statusMesh;t&&t.material.color.setHex(tc[e]??tc.available)}function Bu(i,e,t){for(i.traverse(n=>{var s;(n.isMesh||n.isSprite)&&((s=n.geometry)==null||s.dispose(),(Array.isArray(n.material)?n.material:[n.material]).forEach(o=>{var a;(a=o==null?void 0:o.map)==null||a.dispose(),o==null||o.dispose()}))});i.children.length;)i.remove(i.children[0]);zu(i,e,t)}function zu(i,e,t){const n=Bi[t]??Bi[0],s=cs(n.skin,.75),r=cs(n.outfit,.65,.05),o=cs(n.accent,.6),a=cs(n.hair,.9),c=cs(1118481,.8),l=cs(1118481,.3),h=(w,I,R=0,E=0,D=0,M=0,x=0,P=0)=>{const Z=new be(w,I);return Z.position.set(R,E,D),Z.rotation.set(M,x,P),Z.castShadow=!0,i.add(Z),Z};h(new ai(.21,.52,4,12),r),h(new Ft(.215,.215,.055,16),c,0,.635),h(new Ye(.26,.09,.04),o,0,1.12,.208),h(new Ft(.072,.09,.14,12),s,0,1.49),h(new yt(.19,20,16),s,0,1.68),h(new yt(.048,10,8),s,-.2,1.68),h(new yt(.048,10,8),s,.2,1.68),h(new yt(.034,10,8),o,-.068,1.7,.163),h(new yt(.034,10,8),o,.068,1.7,.163),h(new yt(.021,8,6),l,-.068,1.7,.178),h(new yt(.021,8,6),l,.068,1.7,.178),ev(i,h,a,n.hairStyle),h(new yt(.105,10,8),r,-.315,1.39),h(new yt(.105,10,8),r,.315,1.39);const u=h(new ai(.065,.3,4,8),r,-.31,1.08),d=h(new ai(.065,.3,4,8),r,.31,1.08);h(new yt(.073,12,9),s,-.32,.72),h(new yt(.073,12,9),s,.32,.72);const f=h(new ai(.083,.36,4,8),r,-.13,.4),g=h(new ai(.083,.36,4,8),r,.13,.4);h(new Ye(.17,.1,.28),c,-.13,.07,.04),h(new Ye(.17,.1,.28),c,.13,.07,.04),h(new Ft(.09,.084,.08,10),c,-.13,.145),h(new Ft(.09,.084,.08,10),c,.13,.145);const v=document.createElement("canvas");v.width=256,v.height=56;const m=v.getContext("2d");m.fillStyle="rgba(0,10,30,0.78)",m.roundRect(0,0,256,56,10),m.fill(),m.fillStyle="#aaddff",m.font="bold 26px Inter, sans-serif",m.textAlign="center",m.fillText(e,128,38);const p=new N_(new Ru({map:new Xo(v),transparent:!0,depthTest:!1}));p.position.set(0,2.18,0),p.scale.set(1.5,.33,1),i.add(p);const T=tc[i.userData.status??"available"],y=new be(new yt(.065,8,6),new Vo({color:T}));y.position.set(.58,2.22,0),i.add(y),i.userData.statusMesh=y,i.userData.legL=f,i.userData.legR=g,i.userData.armL=u,i.userData.armR=d,i.userData.walkClock=i.userData.walkClock??0,i.userData.presetId=t}function ev(i,e,t,n){switch(n){case 0:e(new yt(.193,16,10,0,Math.PI*2,0,.8),t,0,1.69);break;case 1:e(new yt(.198,16,10,0,Math.PI*2,0,1.1),t,0,1.68);break;case 2:{e(new yt(.196,16,10,0,Math.PI*2,0,1.05),t,0,1.68);const s=new be(new ai(.09,.22,4,8),t);s.position.set(0,1.51,-.13),s.rotation.x=.28,s.castShadow=!0,i.add(s);break}case 3:e(new yt(.238,16,12),t,0,1.74);break;default:e(new yt(.198,16,10,0,Math.PI*2,0,1.1),t,0,1.68)}}function cs(i,e=.7,t=0){return new Oe({color:i,roughness:e,metalness:t})}function ku(i,e,t){const{legL:n,legR:s,armL:r,armR:o}=i.userData;if(!(!n||!s))if(e){i.userData.walkClock+=t*12;const a=Math.sin(i.userData.walkClock)*.42;n.rotation.x=a,s.rotation.x=-a,r&&(r.rotation.x=-a*.55),o&&(o.rotation.x=a*.55)}else{const a=Math.exp(-12*t);n.rotation.x*=a,s.rotation.x*=a,r&&(r.rotation.x*=a),o&&(o.rotation.x*=a)}}const C={minX:-22,maxX:22,minZ:-24,maxZ:12,wallH:4.5,wallT:.3,lobbyZ:4,midZ:-4,centerX:0,doorH:2.2,doorHalfW:.7,leftDoorX:-11,rightDoorX:11,mainDoorH:2.6,mainDoorHalfW:1.5},pe=C;function lt(i,e,t,n,s,r,o,a){const c=new be(new Ye(r,o,a),e);return c.position.set(t,n,s),i.add(c),c}function tv(){const i=new Oe({color:13946822,roughness:.88,metalness:.04,side:on}),e=new Oe({color:8026226,roughness:.78,metalness:.08}),t=new Oe({color:15789285,roughness:.94,metalness:0}),n=new Oe({color:15262940,roughness:.9,metalness:0}),s=new Oe({color:14209736,roughness:.18,metalness:.07}),r=new Oe({color:12090440,roughness:.82,metalness:0}),o=new Oe({color:16118766,roughness:.98,metalness:0}),a=new Oe({color:4341816,roughness:.9,metalness:0}),c=new Oe({color:10131600,roughness:.4,metalness:.6}),l=new Oe({color:11061464,roughness:.04,metalness:.08,transparent:!0,opacity:.25,side:on}),h=new Oe({color:9209984,roughness:.82,metalness:.04}),u=new Oe({color:11579576,roughness:.28,metalness:.82});return{ext:i,span:e,int:t,div:n,tile:s,wood:r,ceil:o,roof:a,frame:c,glass:l,stair:h,rail:u}}function nv(i){const e=tv(),t=pe.wallH,n=pe.wallT,s=pe.maxX-pe.minX,r=pe.maxZ-pe.minZ,o=0,a=(pe.minZ+pe.maxZ)/2,c=4,l=t*c;lt(i,e.tile,o,.04,(pe.lobbyZ+pe.maxZ)/2,s,.08,pe.maxZ-pe.lobbyZ),lt(i,e.wood,o,.04,(pe.minZ+pe.lobbyZ)/2,s,.08,pe.lobbyZ-pe.minZ),lt(i,e.ext,o,l/2,pe.minZ,s,l,n),lt(i,e.ext,pe.minX,l/2,a,n,l,r),lt(i,e.ext,pe.maxX,l/2,a,n,l,r);const h=pe.mainDoorHalfW,u=pe.mainDoorH,d=t/2;lt(i,e.ext,(pe.minX+-h)/2,d,pe.maxZ,-h-pe.minX,t,n),lt(i,e.ext,(h+pe.maxX)/2,d,pe.maxZ,pe.maxX-h,t,n),lt(i,e.ext,0,u+(t-u)/2,pe.maxZ,h*2,t-u,n),lt(i,e.ext,o,t+(l-t)/2,pe.maxZ,s,l-t,n);for(let y=1;y<c;y++){const w=t*y;lt(i,e.span,o,w+.25,pe.maxZ-.08,s+.2,.5,.14),lt(i,e.span,o,w+.25,pe.minZ+.08,s+.2,.5,.14),lt(i,e.span,pe.minX+.06,w+.25,a,.14,.5,r+.2),lt(i,e.span,pe.maxX-.06,w+.25,a,.14,.5,r+.2)}iv(i,e),sv(i,e,h);const f=n*.5,g=n/2;xh(i,e.div,pe.lobbyZ,pe.minX+f,pe.maxX-f,t,n,pe.leftDoorX,pe.doorHalfW,pe.doorH,pe.rightDoorX,pe.doorHalfW,pe.doorH),xh(i,e.div,pe.midZ,pe.minX+f,pe.maxX-f,t,n,pe.leftDoorX,pe.doorHalfW,pe.doorH,pe.rightDoorX,pe.doorHalfW,pe.doorH),yh(i,e.div,pe.centerX,pe.minZ+f,pe.midZ-g,t,n),yh(i,e.div,pe.centerX,pe.midZ+g,pe.lobbyZ-g,t,n);const v=lt(i,e.ceil,o,t+.05,a,s,.1,r);v.userData.mapHide=!0;const m=i.children.length;lt(i,e.roof,o,l+.3,a,s+1,.6,r+1),ov(i,e.ext,s,r,l);for(let y=m;y<i.children.length;y++)i.children[y].userData.mapHide=!0;rv(i,e),av(i);const p=i.children.length;cv(i,t);for(let y=p;y<i.children.length;y++)i.children[y].userData.mapHide=!0;const T=i.children.length;lv(i);for(let y=T;y<i.children.length;y++)i.children[y].userData.mapShow=!0}function iv(i,e){function r(c,l,h,u){const d=new be(new Ye(2.3600000000000003,1.7200000000000002,.08),e.frame);d.position.set(c,l,h),d.rotation.y=u,i.add(d);const f=new be(new Yn(2.2,1.6),e.glass);f.position.set(c,l,h),f.rotation.y=u,i.add(f)}const o=pe.wallH,a=[0,1,2,3].map(c=>c*o+o*.6);a.forEach(c=>{[-16,-6,8].forEach(l=>r(pe.minX,c,l,Math.PI/2))}),a.forEach(c=>{[-16,-6,8].forEach(l=>r(pe.maxX,c,l,-Math.PI/2))}),a.forEach(c=>{[-14,0,14].forEach(l=>r(l,c,pe.minZ,Math.PI))}),a.forEach((c,l)=>{l===0?(r(-14,c,pe.maxZ,0),r(14,c,pe.maxZ,0)):[-14,-6,6,14].forEach(h=>r(h,c,pe.maxZ,0))})}function sv(i,e,t,n){[-t-.4,t+.4].forEach(s=>{const r=new be(new Ft(.22,.22,pe.mainDoorH,12),e.ext);r.position.set(s,pe.mainDoorH/2,pe.maxZ+.5),i.add(r)}),lt(i,e.span,0,pe.mainDoorH+.18,pe.maxZ+.7,t*2+2.4,.35,1.8),lt(i,e.int,0,pe.mainDoorH,pe.maxZ+.7,t*2+2.2,.02,1.7)}function rv(i,e){for(let l=0;l<9;l++)lt(i,e.stair,16.5,.22*(l+.5),5.5+.28*(l+.5),3,.22,.28);for(let l=0;l<9;l+=2)lt(i,e.rail,16.5-3/2+.1,.22*l+.55,5.5+.28*l,.06,1.1,.06),lt(i,e.rail,16.5+3/2-.1,.22*l+.55,5.5+.28*l,.06,1.1,.06);lt(i,e.rail,16.5,.22*9*.5+.55,5.5+.28*9*.5,3,.06,.28*9+.1);const c=-16.5;for(let l=0;l<9;l++)lt(i,e.stair,c,.22*(l+.5),5.5+.28*(l+.5),3,.22,.28);for(let l=0;l<9;l+=2)lt(i,e.rail,c-3/2+.1,.22*l+.55,5.5+.28*l,.06,1.1,.06),lt(i,e.rail,c+3/2-.1,.22*l+.55,5.5+.28*l,.06,1.1,.06);lt(i,e.rail,c,.22*9*.5+.55,5.5+.28*9*.5,3,.06,.28*9+.1)}function xh(i,e,t,n,s,r,o,a,c,l,h,u,d){const f=r/2,g=[];let v=n;const m=[];m.push({c:a,hw:c,dh:l}),m.push({c:h,hw:u,dh:d}),m.sort((p,T)=>p.c-T.c),m.forEach(({c:p,hw:T,dh:y})=>{const w=p-T,I=p+T;w>v&&g.push({from:v,to:w,full:!0}),g.push({from:w,to:I,full:!1,dh:y}),v=I}),v<s&&g.push({from:v,to:s,full:!0}),g.forEach(({from:p,to:T,full:y,dh:w})=>{const I=T-p,R=(p+T)/2;if(y)lt(i,e,R,f,t,I,r,o);else{const E=r-w;lt(i,e,R,w+E/2,t,I,E,o)}})}function yh(i,e,t,n,s,r,o){const a=s-n;if(a<=0)return;const c=new be(new Ye(o,r,a),e);c.position.set(t,r/2,(n+s)/2),i.add(c)}function ov(i,e,t,n,s){const a=s+.275+.05,c=(pe.minZ+pe.maxZ)/2;[[0,a,pe.maxZ+.05,t+.6,.55,.28],[0,a,pe.minZ-.05,t+.6,.55,.28],[pe.minX-.05,a,c,.28,.55,n+.6],[pe.maxX+.05,a,c,.28,.55,n+.6]].forEach(([h,u,d,f,g,v])=>{const m=new be(new Ye(f,g,v),e);m.position.set(h,u,d),i.add(m)})}function av(i){[{color:12863616,x:pe.minX+.06,z1:pe.midZ,z2:pe.lobbyZ},{color:4241520,x:pe.maxX-.06,z1:pe.midZ,z2:pe.lobbyZ},{color:14712880,x:pe.minX+.06,z1:pe.minZ,z2:pe.midZ},{color:3705032,x:pe.maxX-.06,z1:pe.minZ,z2:pe.midZ},{color:8947848,x:0,z1:pe.lobbyZ,z2:pe.maxZ-1}].forEach(({color:t,x:n,z1:s,z2:r})=>{const o=new Oe({color:t,roughness:.7,metalness:0}),a=r-s,c=new be(new Ye(.06,.04,a),o);c.position.set(n,.05,(s+r)/2),i.add(c)})}function cv(i,e){const t=new Oe({color:14210510,roughness:.85,metalness:.06}),n=new Oe({color:16777215,emissive:16774632,emissiveIntensity:1.2,roughness:.7});[[-8,8],[8,8],[0,8],[-11,0],[11,0],[-14,-10],[-8,-18],[8,-18],[14,-10]].forEach(([r,o])=>{const a=new be(new Ye(1.2,.06,.65),t);a.position.set(r,e-.04,o),i.add(a);const c=new be(new Ye(1.1,.01,.55),n);c.position.set(r,e-.02,o),i.add(c)})}function lv(i){[{name:"LOBBY",color:"#cccccc",x:0,z:8,w:16,d:5},{name:"OPS",color:"#ffaa44",x:-11,z:0,w:12,d:6},{name:"FUN",color:"#44ffaa",x:11,z:0,w:12,d:6},{name:"DESIGN",color:"#ff6ba0",x:-11,z:-14,w:14,d:10},{name:"ENGINEERING",color:"#44aaff",x:11,z:-14,w:14,d:10}].forEach(({name:t,color:n,x:s,z:r,w:o,d:a})=>{const c=document.createElement("canvas");c.width=512,c.height=256;const l=c.getContext("2d");l.fillStyle=n+"18",l.fillRect(0,0,512,256),l.strokeStyle=n,l.lineWidth=10,l.strokeRect(6,6,500,244),l.fillStyle=n,l.font="bold 72px Inter, Arial, sans-serif",l.textAlign="center",l.textBaseline="middle",l.fillText(t,256,128);const h=new be(new Yn(o,a),new Vo({map:new Xo(c),transparent:!0,depthWrite:!1}));h.rotation.x=-Math.PI/2,h.position.set(s,.15,r),i.add(h)})}function hv(i){const e=C,t=new Oe({color:5934140,roughness:.96,metalness:0}),n=new be(new Yn(300,300),t);n.rotation.x=-Math.PI/2,n.position.y=-.01,n.receiveShadow=!0,i.add(n);const s=new Oe({color:12630704,roughness:.88,metalness:0}),r=new be(new Ye(5,.06,18),s);r.position.set(0,.03,19),r.receiveShadow=!0,i.add(r);const o=new be(new Ye(14,.06,8),s);o.position.set(0,.03,14.5),o.receiveShadow=!0,i.add(o);const a=new be(new Ye(e.maxX-e.minX,.06,4),s);a.position.set(0,.03,e.maxZ+2),a.receiveShadow=!0,i.add(a);const c=new Oe({color:11578272,roughness:.9,metalness:0}),l=e.maxX-e.minX,h=e.maxZ-e.minZ,u=new be(new Ye(l+.8,.22,h+.8),c);u.position.set(0,-.11,(e.minZ+e.maxZ)/2),i.add(u),[[-30,-18],[-30,5],[-30,20],[30,-18],[30,5],[30,20],[-12,26],[12,26],[-36,12],[36,12],[-28,-30],[28,-30]].forEach(([f,g])=>uv(i,f,g)),[[-4,24],[4,24],[-14,14],[14,14]].forEach(([f,g])=>dv(i,f,g)),fv(i),pv(i)}function uv(i,e,t){const n=new Oe({color:5911832,roughness:.92}),s=new Oe({color:3830312,roughness:.95}),r=new be(new Ft(.18,.26,2.2,8),n);r.position.set(e,1.1,t),r.castShadow=!0,i.add(r),[[1.8,2.5,3.4],[1.3,2,4.8],[.7,1.4,6]].forEach(([o,a,c])=>{const l=new be(new bc(o,a,9),s);l.position.set(e,c,t),l.castShadow=!0,i.add(l)})}function dv(i,e,t){const n=new Oe({color:6316128,roughness:.55,metalness:.75}),s=new Oe({color:16775384,emissive:16773296,emissiveIntensity:1.5,roughness:.4}),r=new be(new Ft(.06,.08,5,8),n);r.position.set(e,2.5,t),r.castShadow=!0,i.add(r);const o=new be(new Ye(.06,.06,.9),n);o.position.set(e,5.1,t-.4),i.add(o);const a=new be(new Ye(.45,.14,.28),s);a.position.set(e,4.95,t-.8),i.add(a);const c=new Tc(16771232,6,12);c.position.set(e,4.95,t-.8),i.add(c)}function fv(i){const e=[2250154,11149858,8947840,2245666,8947848],t=new Oe({color:1710618,roughness:.8});[[-40,-22],[-40,-16],[-40,-10],[40,-22],[40,-16],[40,-10]].forEach(([s,r],o)=>{const a=e[o%e.length],c=new Oe({color:a,roughness:.45,metalness:.3}),l=new be(new Ye(4.4,1.4,2),c);l.position.set(s,.72,r),l.castShadow=!0,i.add(l);const h=new be(new Ye(2.8,.7,1.85),c);h.position.set(s-.2,1.8,r),i.add(h),[[-1.5,-1.05],[-1.5,1.05],[1.5,-1.05],[1.5,1.05]].forEach(([u,d])=>{const f=new be(new Ft(.36,.36,.22,12),t);f.rotation.z=Math.PI/2,f.position.set(s+u,.36,r+d),i.add(f)})})}function pv(i){const e=new Oe({color:4878400,roughness:1});[[-80,-60,30,8,20],[80,-60,28,7,18],[0,-80,40,6,25],[-50,-70,35,9,22],[55,-70,32,7,20]].forEach(([t,n,s,r,o])=>{const a=new be(new Ye(s,r,o),e);a.position.set(t,r/2-2,n),i.add(a)})}const ls=C.leftDoorX,hs=C.rightDoorX,Et=C.doorHalfW,ti=C.doorH,us=.1,zr=[{id:"main-left",label:"Main Entrance",hinge:{x:-1.5,y:C.mainDoorH/2,z:C.maxZ},meshOffset:{x:C.mainDoorHalfW/2,y:0,z:0},w:C.mainDoorHalfW,h:C.mainDoorH,d:us,closedRY:0,openRY:Math.PI/2,closedAABB:{minX:-1.5,maxX:0,minZ:C.maxZ-.14,maxZ:C.maxZ+.14}},{id:"main-right",label:"Main Entrance",hinge:{x:C.mainDoorHalfW,y:C.mainDoorH/2,z:C.maxZ},meshOffset:{x:-1.5/2,y:0,z:0},w:C.mainDoorHalfW,h:C.mainDoorH,d:us,closedRY:0,openRY:-Math.PI/2,closedAABB:{minX:0,maxX:C.mainDoorHalfW,minZ:C.maxZ-.14,maxZ:C.maxZ+.14}},{id:"ops",label:"Ops Room",hinge:{x:ls-Et,y:ti/2,z:C.lobbyZ},meshOffset:{x:Et,y:0,z:0},w:Et*2,h:ti,d:us,closedRY:0,openRY:-Math.PI/2,closedAABB:{minX:ls-Et,maxX:ls+Et,minZ:C.lobbyZ-.12,maxZ:C.lobbyZ+.12}},{id:"fun",label:"Fun Room",hinge:{x:hs+Et,y:ti/2,z:C.lobbyZ},meshOffset:{x:-Et,y:0,z:0},w:Et*2,h:ti,d:us,closedRY:0,openRY:Math.PI/2,closedAABB:{minX:hs-Et,maxX:hs+Et,minZ:C.lobbyZ-.12,maxZ:C.lobbyZ+.12}},{id:"design",label:"Design Room",hinge:{x:ls-Et,y:ti/2,z:C.midZ},meshOffset:{x:Et,y:0,z:0},w:Et*2,h:ti,d:us,closedRY:0,openRY:-Math.PI/2,closedAABB:{minX:ls-Et,maxX:ls+Et,minZ:C.midZ-.12,maxZ:C.midZ+.12}},{id:"engineering",label:"Engineering Room",hinge:{x:hs+Et,y:ti/2,z:C.midZ},meshOffset:{x:-Et,y:0,z:0},w:Et*2,h:ti,d:us,closedRY:0,openRY:Math.PI/2,closedAABB:{minX:hs-Et,maxX:hs+Et,minZ:C.midZ-.12,maxZ:C.midZ+.12}}],Ys={};function mv(i){const e=new Oe({color:8016944,roughness:.72,metalness:.02,side:on}),t=new Oe({color:13937220,roughness:.28,metalness:.88}),n=new Oe({color:6176286,roughness:.8,metalness:0});return zr.forEach(s=>{const r=new Zn;r.position.set(s.hinge.x,s.hinge.y,s.hinge.z),i.add(r);const o=new be(new Ye(s.w,s.h,s.d),e);o.position.set(s.meshOffset.x,s.meshOffset.y,s.meshOffset.z),o.userData.doorId=s.id,r.add(o);const a=s.meshOffset;[-.45,.32].forEach(f=>{const g=new be(new Ye(s.w*.85,.04,s.d*1.2),n);g.position.set(a.x,a.y+f,a.z+s.d*.1),r.add(g)});const c=a.x+(a.x>=0?-s.w*.36:s.w*.36),l=new be(new yt(.05,8,6),t);l.position.set(c,a.y-.08,a.z+s.d*.65),r.add(l);const h=l.clone();h.position.z=a.z-s.d*.65,r.add(h);const u=s.id==="main-left"||s.id==="main-right",d=u?s.openRY:s.closedRY;r.rotation.y=d,Ys[s.id]={open:u,targetRY:d,currentRY:d,pivot:r}}),{update:gv,toggleDoor:Hn,getNearbyDoor:Hu,getClosedColliders:Gu}}function gv(i){Object.values(Ys).forEach(e=>{Math.abs(e.currentRY-e.targetRY)>5e-4&&(e.currentRY+=(e.targetRY-e.currentRY)*Math.min(1,i*7),e.pivot.rotation.y=e.currentRY)})}function Hn(i){const e=Ys[i],t=zr.find(n=>n.id===i);if(!(!e||!t))return e.open=!e.open,e.targetRY=e.open?t.openRY:t.closedRY,e.open}function Hu(i,e=2.8){let t=null,n=e;return zr.forEach(s=>{const r=i.x-s.hinge.x,o=i.z-s.hinge.z,a=Math.sqrt(r*r+o*o);a<n&&(n=a,t={def:s,state:Ys[s.id]})}),t}function ds(i){var e;return((e=Ys[i])==null?void 0:e.open)??!1}function Gu(){const i=[];return zr.forEach(e=>{const t=Ys[e.id];if(!t)return;Math.abs(t.currentRY-e.closedRY)<.18&&i.push(e.closedAABB)}),i}function _v(i){const e=document.getElementById("canvas"),t=new L_({canvas:e,antialias:!0});t.setSize(window.innerWidth,window.innerHeight),t.setPixelRatio(Math.min(window.devicePixelRatio,2)),t.shadowMap.enabled=!0,t.shadowMap.type=jh,t.toneMapping=eu,t.toneMappingExposure=1;const n=new I_;n.background=new Ke(9357544),n.fog=new yc(11195624,.007);const s=new Qt(80,window.innerWidth/window.innerHeight,.1,300);s.position.set(0,1.7,22),n.add(new j_(16775408,.9)),n.add(new $_(10407144,5929544,.9));const r=new mh(16774616,3.2);r.position.set(40,70,35),r.castShadow=!0,r.shadow.mapSize.set(2048,2048),r.shadow.camera.near=1,r.shadow.camera.far=120,r.shadow.camera.left=-50,r.shadow.camera.right=50,r.shadow.camera.top=50,r.shadow.camera.bottom=-50,r.shadow.radius=3,r.shadow.bias=-.001,n.add(r);const o=new mh(13164021,.6);o.position.set(-25,30,-20),n.add(o),[{pos:[-5,3.8,-14],color:16773344,intensity:25,radius:18},{pos:[5,3.8,-14],color:16773344,intensity:25,radius:18},{pos:[-11,3.8,0],color:16774376,intensity:22,radius:16},{pos:[11,3.8,0],color:16774376,intensity:22,radius:16},{pos:[0,3.8,8],color:16775412,intensity:28,radius:22}].forEach(({pos:d,color:f,intensity:g,radius:v})=>{const m=new Tc(f,g,v);m.position.set(...d),n.add(m)}),i==null||i(10,"Laying foundations…"),hv(n),i==null||i(35,"Building structure…"),nv(n),i==null||i(65,"Installing doors…");const c=mv(n);i==null||i(90,"Finishing touches…"),n.userData.doors=c,window.addEventListener("resize",()=>{s.aspect=window.innerWidth/window.innerHeight,s.updateProjectionMatrix(),t.setSize(window.innerWidth,window.innerHeight)});const l=new Uu;function h(){requestAnimationFrame(h);const d=l.getDelta();c.update(d),t.render(n,s)}h();let u=null;return i==null||i(100,"Ready!"),setTimeout(()=>{u&&u()},200),{scene:n,camera:s,renderer:t,onShipLoaded:d=>{u=d}}}const Sh=[{id:"design-screen",label:"Design Board",zone:"DESIGN",tool:"Excalidraw",url:"https://excalidraw.com",position:{x:C.minX+.12,y:2.2,z:-14},rotationY:Math.PI/2,width:4.5,height:2.8,color:16739232,emoji:"✏️"},{id:"engineering-screen",label:"Code Docs",zone:"ENGINEERING",tool:"HackMD",url:"https://hackmd.io",position:{x:C.maxX-.12,y:2.2,z:-14},rotationY:-Math.PI/2,width:4.5,height:2.8,color:4500223,emoji:"💻"},{id:"ops-screen",label:"Ops Dashboard",zone:"OPS",tool:"Grafana",url:"https://play.grafana.org",position:{x:C.minX+.12,y:2.2,z:0},rotationY:Math.PI/2,width:4,height:2.5,color:16755268,emoji:"📊"},{id:"fun-screen",label:"Vibe Zone",zone:"FUN",tool:"Spotify",url:"https://open.spotify.com/embed/playlist/37i9dQZF1DX0XUsuxWHRQd?utm_source=generator&theme=0",position:{x:C.maxX-.12,y:2.2,z:0},rotationY:-Math.PI/2,width:4,height:2.5,color:4521898,emoji:"🎵"}];function vv(i){const e=[];return Sh.forEach(t=>{const n=new Zn;n.position.set(t.position.x,t.position.y,t.position.z),n.rotation.y=t.rotationY,i.add(n);const s=.1,r=new Oe({color:1710618,roughness:.3,metalness:.85}),o=(g,v,m,p,T,y)=>{const w=new be(new Ye(p,T,y),r);w.position.set(g,v,m),n.add(w)};o(0,t.height/2+s/2,0,t.width+s*2,s,s*2),o(0,-t.height/2-s/2,0,t.width+s*2,s,s*2),o(-t.width/2-s/2,0,0,s,t.height+s*2,s*2),o(t.width/2+s/2,0,0,s,t.height+s*2,s*2);const a=new Oe({color:t.color,emissive:t.color,emissiveIntensity:2.5,roughness:.08}),c=(g,v,m,p,T,y)=>{const w=new be(new Ye(p,T,y),a);w.position.set(g,v,m),n.add(w)};c(0,t.height/2,.02,t.width,.04,.04),c(0,-t.height/2,.02,t.width,.04,.04),c(-t.width/2,0,.02,.04,t.height,.04),c(t.width/2,0,.02,.04,t.height,.04);const l=xv(t),h=new Oe({map:l,emissiveMap:l,emissive:new Ke(t.color),emissiveIntensity:.14,roughness:.1}),u=new be(new Yn(t.width,t.height),h);u.position.set(0,0,.02),u.userData.screen=t,n.add(u),e.push(u);const d=new Tc(t.color,16,8);d.position.set(0,0,.6),n.add(d);let f=Math.random()*Math.PI*2;(function g(){requestAnimationFrame(g),f+=.018,h.emissiveIntensity=.12+Math.sin(f)*.04,d.intensity=14+Math.sin(f*.65)*4})()}),{meshes:e,screens:Sh}}function xv(i){const t=Math.round(512*(i.height/i.width)),n=document.createElement("canvas");n.width=512,n.height=t;const s=n.getContext("2d"),r="#"+i.color.toString(16).padStart(6,"0");s.fillStyle="#060c18",s.fillRect(0,0,512,t),s.fillStyle="rgba(200,230,255,0.035)";for(let c=0;c<512;c+=32)for(let l=0;l<t;l+=32)s.fillRect(c,l,2,2);const o=s.createLinearGradient(0,0,512,0);o.addColorStop(0,r+"55"),o.addColorStop(1,"transparent"),s.fillStyle=o,s.fillRect(0,0,512,46),s.fillStyle=r,s.font="bold 16px Inter, monospace",s.textAlign="left",s.fillText(i.zone,14,30),s.fillStyle="rgba(255,255,255,0.38)",s.font="12px Inter, monospace",s.textAlign="right",s.fillText(i.tool,498,30),s.strokeStyle=r+"44",s.lineWidth=1,s.beginPath(),s.moveTo(0,48),s.lineTo(512,48),s.stroke();const a=Math.round(t*.27);return s.font=`${a}px sans-serif`,s.textAlign="center",s.fillText(i.emoji,512/2,t*.52),s.fillStyle="#fff",s.font=`bold ${Math.round(t*.1)}px Inter, monospace`,s.textAlign="center",s.shadowColor=r,s.shadowBlur=18,s.fillText(i.label,512/2,t*.72),s.shadowBlur=0,s.fillStyle=r+"bb",s.font=`${Math.round(t*.062)}px Inter, monospace`,s.textAlign="center",s.fillText("[ E ] or click to open",512/2,t*.88),s.strokeStyle=r+"55",s.lineWidth=2,s.beginPath(),s.moveTo(0,t-2),s.lineTo(512,t-2),s.stroke(),new Xo(n)}const vo=.38,ft=C.wallT/2+.01,xs=C.leftDoorX,ys=C.rightDoorX,ni=C.doorHalfW,Mh=C.mainDoorHalfW,Vu=[{minX:C.minX,maxX:-Mh,minZ:C.maxZ-ft,maxZ:C.maxZ+ft},{minX:Mh,maxX:C.maxX,minZ:C.maxZ-ft,maxZ:C.maxZ+ft},{minX:C.minX,maxX:C.maxX,minZ:C.minZ-ft,maxZ:C.minZ+ft},{minX:C.minX-ft,maxX:C.minX+ft,minZ:C.minZ,maxZ:C.maxZ},{minX:C.maxX-ft,maxX:C.maxX+ft,minZ:C.minZ,maxZ:C.maxZ},{minX:C.minX,maxX:xs-ni,minZ:C.lobbyZ-ft,maxZ:C.lobbyZ+ft},{minX:xs+ni,maxX:ys-ni,minZ:C.lobbyZ-ft,maxZ:C.lobbyZ+ft},{minX:ys+ni,maxX:C.maxX,minZ:C.lobbyZ-ft,maxZ:C.lobbyZ+ft},{minX:C.minX,maxX:xs-ni,minZ:C.midZ-ft,maxZ:C.midZ+ft},{minX:xs+ni,maxX:ys-ni,minZ:C.midZ-ft,maxZ:C.midZ+ft},{minX:ys+ni,maxX:C.maxX,minZ:C.midZ-ft,maxZ:C.midZ+ft},{minX:C.centerX-ft,maxX:C.centerX+ft,minZ:C.minZ,maxZ:C.lobbyZ},{minX:-80,maxX:80,minZ:68,maxZ:70},{minX:-80,maxX:80,minZ:-70,maxZ:-68},{minX:-70,maxX:-68,minZ:-70,maxZ:70},{minX:68,maxX:70,minZ:-70,maxZ:70}];let Wu=[];function yv(i){Wu=i}function Sv(i,e,t){const n=Math.max(t.minX,Math.min(i,t.maxX)),s=Math.max(t.minZ,Math.min(e,t.maxZ)),r=i-n,o=e-s,a=r*r+o*o;if(a<vo*vo&&a>1e-6){const c=Math.sqrt(a),l=vo-c;return{x:i+r/c*l,z:e+o/c*l}}return a===0?{x:i+vo,z:e}:null}function Fa(i,e){let t=e.x,n=e.z;const s=[...Vu,...Gu(),...Wu];for(let r=0;r<2;r++)for(const o of s){const a=Sv(t,n,o);a&&(t=a.x,n=a.z)}return{x:t,z:n}}function Oo(i){const e=i.x,t=i.z;if(t>C.maxZ||t<C.minZ||e<C.minX||e>C.maxX)return"OUTSIDE";if(t>C.lobbyZ)return"LOBBY";const n=e<C.centerX,s=t>C.midZ,r=t<=C.midZ;return s&&n?"OPS":s&&!n?"FUN":r&&n?"DESIGN":"ENGINEERING"}const Mv={mainDoor:{x:0,z:C.maxZ+.5},lobbyIn:{x:0,z:C.maxZ-1.5},opsEntry:{x:xs,z:C.lobbyZ-1},funEntry:{x:ys,z:C.lobbyZ-1},designEntry:{x:xs,z:C.midZ-1},engEntry:{x:ys,z:C.midZ-1}};function Ev(i,e){const t=Oo(i),n=Oo(e);if(t===n)return[{x:e.x,z:e.z}];const s={x:e.x,z:e.z},r=Mv,o={"OUTSIDE→LOBBY":[r.mainDoor,r.lobbyIn],"OUTSIDE→OPS":[r.mainDoor,r.lobbyIn,r.opsEntry],"OUTSIDE→FUN":[r.mainDoor,r.lobbyIn,r.funEntry],"OUTSIDE→DESIGN":[r.mainDoor,r.lobbyIn,r.opsEntry,r.designEntry],"OUTSIDE→ENGINEERING":[r.mainDoor,r.lobbyIn,r.funEntry,r.engEntry],"LOBBY→OPS":[r.opsEntry],"LOBBY→FUN":[r.funEntry],"LOBBY→DESIGN":[r.opsEntry,r.designEntry],"LOBBY→ENGINEERING":[r.funEntry,r.engEntry],"LOBBY→OUTSIDE":[r.mainDoor],"OPS→LOBBY":[r.opsEntry],"OPS→DESIGN":[r.designEntry],"OPS→FUN":[r.opsEntry,r.funEntry],"OPS→ENGINEERING":[r.opsEntry,r.funEntry,r.engEntry],"OPS→OUTSIDE":[r.opsEntry,r.mainDoor],"FUN→LOBBY":[r.funEntry],"FUN→ENGINEERING":[r.engEntry],"FUN→OPS":[r.funEntry,r.opsEntry],"FUN→DESIGN":[r.funEntry,r.opsEntry,r.designEntry],"FUN→OUTSIDE":[r.funEntry,r.mainDoor],"DESIGN→OPS":[r.designEntry],"DESIGN→LOBBY":[r.designEntry,r.opsEntry],"DESIGN→FUN":[r.designEntry,r.opsEntry,r.funEntry],"DESIGN→ENGINEERING":[r.designEntry,r.opsEntry,r.funEntry,r.engEntry],"DESIGN→OUTSIDE":[r.designEntry,r.opsEntry,r.mainDoor],"ENGINEERING→FUN":[r.engEntry],"ENGINEERING→LOBBY":[r.engEntry,r.funEntry],"ENGINEERING→OPS":[r.engEntry,r.funEntry,r.opsEntry],"ENGINEERING→DESIGN":[r.engEntry,r.funEntry,r.opsEntry,r.designEntry],"ENGINEERING→OUTSIDE":[r.engEntry,r.mainDoor]},a=`${t}→${n}`;return[...o[a]??[],s]}const fs=5.5,wv=5,bv=2,Tv=12,Av=1.65,Eh=60,Rv=64,Cv=57;function Pv(i,e,t){const n={};let s=Math.PI,r=0,o="flat",a=[],c=0,l=!1,h=!1,u=!1,d=.28,f=wv,g=0,v=0,m=0,p=22,T=38,y=!1;document.addEventListener("keydown",z=>{if(n[z.code]=!0,z.code==="KeyR"&&(i.position.set(0,0,22),s=Math.PI,r=0,a=[],l=!1,Lv("Respawned at Entrance")),z.code==="Tab"){z.preventDefault();const V=["flat","overview","third","first"];R(V[(V.indexOf(o)+1)%V.length])}z.code==="Escape"&&o!=="third"&&R("third")}),document.addEventListener("keyup",z=>{n[z.code]=!1}),document.addEventListener("mousemove",z=>{if(document.pointerLockElement===t){o==="first"&&(r=Math.max(-1.2,Math.min(.5,r-z.movementY*.002))),s-=z.movementX*.0025;return}if(h)if(o==="overview"){const V=T*1.534*.9/window.innerHeight;m-=z.movementX*V,p+=z.movementY*V,m=Math.max(-60,Math.min(60,m)),p=Math.max(-60,Math.min(60,p)),y=!0,(Math.abs(z.movementX)>2||Math.abs(z.movementY)>2)&&(u=!0)}else o==="third"?(s-=z.movementX*.005,d=Math.max(-.05,Math.min(1,d+z.movementY*.003)),(Math.abs(z.movementX)>2||Math.abs(z.movementY)>2)&&(u=!0)):(s-=z.movementX*.005,(Math.abs(z.movementX)>2||Math.abs(z.movementY)>2)&&(u=!0))}),t.addEventListener("mousedown",z=>{z.button===0&&(h=!0,u=!1,o==="overview"&&(t.style.cursor="grabbing"))}),document.addEventListener("mouseup",z=>{z.button===0&&(h=!1,o==="overview"&&(t.style.cursor="grab"))}),t.addEventListener("contextmenu",z=>z.preventDefault()),t.addEventListener("wheel",z=>{if(o!=="overview"&&o!=="third")return;z.preventDefault();const V=z.deltaMode===0?z.deltaY:z.deltaY*24,he=Math.pow(.997,V);if(o==="overview"){const O=T;T=Math.max(14,Math.min(60,T*he));const k=T-O,se=Math.tan(e.fov*Math.PI/180/2),ge=window.innerWidth/window.innerHeight,Y=z.clientX/window.innerWidth-.5,le=-(z.clientY/window.innerHeight-.5);m-=Y*k*2*se*ge,p+=le*k*2*se,m=Math.max(-60,Math.min(60,m)),p=Math.max(-60,Math.min(60,p)),y=!0}else f=Math.max(bv,Math.min(Tv,f*he))},{passive:!1});function w(z){a=Ev({x:i.position.x,z:i.position.z},z),c=0,l=!0,y=!1,o==="overview"&&I(z)}function I(z){const V=document.getElementById("overview-marker");if(!V)return;const he=new U(z.x,0,z.z);he.project(e),V.style.left=(he.x*.5+.5)*window.innerWidth+"px",V.style.top=(-he.y*.5+.5)*window.innerHeight+"px",V.style.display="block"}function R(z){var O;o=z;const V=document.getElementById("overview-panel");V&&(V.style.display=o==="overview"?"flex":"none");const he=document.getElementById("overview-marker");he&&o!=="overview"&&(he.style.display="none"),(o==="third"||o==="overview")&&((O=document.exitPointerLock)==null||O.call(document)),z!=="third"&&(e.fov=Eh,e.updateProjectionMatrix()),t.style.cursor=o==="overview"?"grab":"pointer",t.style.visibility=o==="flat"?"hidden":"visible",document.querySelectorAll(".vtbtn").forEach(k=>k.classList.toggle("active",k.dataset.view===o))}const E=new U,D=new U,M=new U,x=new U,P=new U,Z=new U(0,1,0);function X(z){x.copy(i.position);let V=!1;if(o==="flat"){if(M.set(0,0,0),(n.KeyW||n.ArrowUp)&&(M.z-=1),(n.KeyS||n.ArrowDown)&&(M.z+=1),(n.KeyA||n.ArrowLeft)&&(M.x-=1),(n.KeyD||n.ArrowRight)&&(M.x+=1),(n.KeyW||n.KeyS||n.KeyA||n.KeyD||n.ArrowUp||n.ArrowDown||n.ArrowLeft||n.ArrowRight)&&l&&(l=!1,a=[]),l&&a.length>0&&M.lengthSq()===0){const k=a[c],se=k.x-i.position.x,ge=k.z-i.position.z,Y=Math.sqrt(se*se+ge*ge);Y<.25?++c>=a.length&&(l=!1,a=[]):M.set(se/Y,0,ge/Y)}if(M.lengthSq()>0){M.normalize(),i.position.x+=M.x*fs*z,i.position.z+=M.z*fs*z;let se=Math.atan2(M.x,M.z)-i.rotation.y;for(;se>Math.PI;)se-=Math.PI*2;for(;se<-Math.PI;)se+=Math.PI*2;i.rotation.y+=se*Math.min(1,20*z),V=!0}const O=Fa(x,i.position);i.position.set(O.x,0,O.z),e.position.set(i.position.x,60,i.position.z),e.lookAt(i.position.x,0,i.position.z)}else if(o==="overview"){if(l){const O=1-Math.exp(-8*z);m+=(i.position.x-m)*O,p+=(i.position.z-p)*O,y=!1}else if(!y){const O=1-Math.exp(-5*z);m+=(i.position.x-m)*O,p+=(i.position.z-p)*O}P.set(m,T,p+1);const he=e.position.distanceTo(P)>22?20:8;if(e.position.lerp(P,1-Math.exp(-he*z)),e.lookAt(m,0,p),l&&a.length>0){const O=a[c],k=O.x-i.position.x,se=O.z-i.position.z,ge=Math.sqrt(k*k+se*se);ge<.25?++c>=a.length&&(l=!1,a=[]):(i.position.x+=k/ge*fs*1.4*z,i.position.z+=se/ge*fs*1.4*z,i.rotation.y=Math.atan2(k,se),V=!0)}}else if(o==="third"){const he=Q(z);V=he.isMoving;const O=Fa(x,i.position);if(i.position.set(O.x,0,O.z),V&&!h){let me=i.rotation.y-s;for(;me>Math.PI;)me-=Math.PI*2;for(;me<-Math.PI;)me+=Math.PI*2;const ve=he.fromKeys?5:3;s+=me*ve*z}const k=ie(i.position.x,i.position.z,s,f),se=k<f*.85,ge=i.position.y+1.2;g+=z*12,v+=((V?1:0)-v)*Math.min(1,8*z);const Y=Math.sin(g)*.035*v;P.set(i.position.x-Math.sin(s)*Math.cos(d)*k,ge+Math.sin(d)*k+Y,i.position.z-Math.cos(s)*Math.cos(d)*k),k<f*.92?e.position.copy(P):e.position.lerp(P,1-Math.exp(-14*z)),e.lookAt(i.position.x,ge,i.position.z);const le=se?Cv:V?Rv:Eh;e.fov+=(le-e.fov)*Math.min(1,6*z),e.updateProjectionMatrix()}else{V=Q(z).isMoving;const he=Fa(x,i.position);i.position.set(he.x,0,he.z),e.position.set(i.position.x,Av,i.position.z),e.rotation.order="YXZ",e.rotation.set(r,Math.PI+s,0)}return V}function Q(z){e.getWorldDirection(E),E.y=0,E.normalize(),D.crossVectors(E,Z).normalize(),M.set(0,0,0),(n.KeyW||n.ArrowUp)&&M.addScaledVector(E,1),(n.KeyS||n.ArrowDown)&&M.addScaledVector(E,-1),(n.KeyA||n.ArrowLeft)&&M.addScaledVector(D,-1),(n.KeyD||n.ArrowRight)&&M.addScaledVector(D,1);const V=n.KeyW||n.KeyS||n.KeyA||n.KeyD||n.ArrowUp||n.ArrowDown||n.ArrowLeft||n.ArrowRight,he=V;if(V&&l&&(l=!1,a=[]),l&&a.length>0&&M.lengthSq()===0){const O=a[c],k=O.x-i.position.x,se=O.z-i.position.z,ge=Math.sqrt(k*k+se*se);ge<.25?++c>=a.length&&(l=!1,a=[]):M.set(k/ge,0,se/ge)}if(M.lengthSq()>0){M.normalize(),i.position.x+=M.x*fs*z,i.position.z+=M.z*fs*z;let k=Math.atan2(M.x,M.z)-i.rotation.y;for(;k>Math.PI;)k-=Math.PI*2;for(;k<-Math.PI;)k+=Math.PI*2;return i.rotation.y+=k*Math.min(1,20*z),{isMoving:!0,fromKeys:he}}return{isMoving:!1,fromKeys:he}}function ie(z,V,he,O){const k=-Math.sin(he),se=-Math.cos(he);let ge=O;for(const Y of Vu){const le=ne(z,V,k,se,Y);le>.3&&le<ge&&(ge=le-.25)}return Math.max(.8,ge)}function ne(z,V,he,O,k){const se=he===0?1e10:1/he,ge=O===0?1e10:1/O,Y=(k.minX-z)*se,le=(k.maxX-z)*se,me=(k.minZ-V)*ge,ve=(k.maxZ-V)*ge,Ce=Math.max(Math.min(Y,le),Math.min(me,ve)),Ne=Math.min(Math.max(Y,le),Math.max(me,ve));return Ne<.001||Ce>Ne?1/0:Ce>.001?Ce:1/0}return R(o),{update:X,navigate:w,setMode:R,getMode:()=>o,isDragMoved:()=>u,setNavPath:z=>{a=z,c=0,l=!0}}}function Lv(i){const e=document.getElementById("hud-toast");e&&(e.textContent=i,e.classList.add("show"),clearTimeout(e._t),e._t=setTimeout(()=>e.classList.remove("show"),2e3))}function Iv(i){const e=[];return Dv(i,e),Nv(i,e),Uv(i,e),Ov(i,e),Fv(i,e),{colliders:e}}const Qe={oak:()=>new Oe({color:11565120,roughness:.82,metalness:0}),white:()=>new Oe({color:15789284,roughness:.72,metalness:0}),dark:()=>new Oe({color:3024928,roughness:.62,metalness:.08}),metal:()=>new Oe({color:9474200,roughness:.38,metalness:.8}),chair:()=>new Oe({color:2767456,roughness:.82,metalness:0}),pink:()=>new Oe({color:13656192,roughness:.72,metalness:0}),green:()=>new Oe({color:4761712,roughness:.72,metalness:0}),amber:()=>new Oe({color:15241280,roughness:.72,metalness:0}),blue:()=>new Oe({color:4227264,roughness:.72,metalness:0}),screen:()=>new Oe({color:1054752,emissive:1056832,emissiveIntensity:.6,roughness:.08}),bean:()=>new Oe({color:9453728,roughness:.92,metalness:0}),sofa:()=>new Oe({color:4878400,roughness:.88,metalness:0})};function _n(i,e,t,n,s,r,o,a,c,l=.12){const h=new be(new Ye(r,o,a),e);return h.position.set(t,n,s),i.add(h),c&&c.push({minX:t-r/2-l,maxX:t+r/2+l,minZ:s-a/2-l,maxZ:s+a/2+l}),h}function di(i,e,t,n,s,r,o){const a=o??Qe.oak(),c=.76,l=.06,h=c-l,u=.05;_n(i,a,e,c-l/2,t,n,l,s,r,.1);const d=[e-n/2+.12,e+n/2-.12],f=[t-s/2+.12,t+s/2-.12];d.forEach(g=>f.forEach(v=>{const m=new be(new Ft(u,u,h,6),Qe.metal());m.position.set(g,h/2,v),i.add(m)}))}function rn(i,e,t,n=0,s,r){const o=r??Qe.chair(),a=new Zn;a.position.set(e,0,t),a.rotation.y=n,i.add(a);const c=new be(new Ye(.5,.07,.5),o);c.position.y=.46,a.add(c);const l=new be(new Ye(.5,.52,.06),o);l.position.set(0,.75,-.22),a.add(l);const h=Qe.metal();[[-.2,-.2],[.2,-.2],[-.2,.2],[.2,.2]].forEach(([u,d])=>{const f=new be(new Ft(.03,.03,.46,5),h);f.position.set(u,.23,d),a.add(f)}),s&&s.push({minX:e-.35,maxX:e+.35,minZ:t-.35,maxZ:t+.35})}function Mn(i,e,t,n,s=0){const r=new Zn;r.position.set(e,t,n),r.rotation.y=s,i.add(r);const o=new be(new Ye(.54,.32,.04),Qe.screen());o.position.y=.22,r.add(o);const a=new be(new Ft(.015,.015,.18,5),Qe.metal());a.position.y=.07,r.add(a);const c=new be(new Ye(.22,.02,.14),Qe.metal());c.position.y=0,r.add(c)}function Cn(i,e,t){const n=new be(new Ft(.15,.1,.3,7),Qe.amber());n.position.set(e,.15,t),i.add(n);const s=new be(new yt(.3,8,6),Qe.green());s.position.set(e,.55,t),i.add(s)}function Dv(i,e){di(i,-11,-14,4.5,2,e),rn(i,-11-2.6,-14-.5,0,e),rn(i,-11-2.6,-14+.5,0,e),rn(i,-11+2.6,-14-.5,Math.PI,e),rn(i,-11+2.6,-14+.5,Math.PI,e),rn(i,-11,-14-1.2,Math.PI/2,e,Qe.pink()),rn(i,-11,-14+1.2,-Math.PI/2,e,Qe.pink());const s=new be(new Ye(5,2.4,.06),new Oe({color:16448248,roughness:.5}));s.position.set(-11,1.8,C.minZ+.1),i.add(s),_n(i,Qe.white(),C.minX+.5,1,-18,.5,2,3,e),di(i,C.minX+1.2,-12,2,.8,e),Mn(i,C.minX+1,.76,-14+1.8,Math.PI/2),Mn(i,C.minX+1,.76,-14+2.2,Math.PI/2),rn(i,C.minX+2,-12,Math.PI/2,e,Qe.pink()),Cn(i,C.minX+.5,C.midZ+.6),Cn(i,-3,C.minZ+.6)}function Nv(i,e){[-20,-16,-12,-8].forEach(r=>{di(i,C.maxX-1.4,r,1.8,.7,e,Qe.white()),Mn(i,C.maxX-1.1,.76,r-.18,-Math.PI/2),Mn(i,C.maxX-1.1,.76,r+.18,-Math.PI/2),rn(i,C.maxX-2.5,r,-Math.PI/2,e,Qe.blue())}),_n(i,Qe.dark(),7,1.1,C.minZ+.6,.8,2.2,.6,e),_n(i,Qe.dark(),8,1.1,C.minZ+.6,.8,2.2,.6,e),_n(i,Qe.dark(),9,1.1,C.minZ+.6,.8,2.2,.6,e),[-4,-3,-2].forEach(r=>{const o=new be(new Ye(.6,.02,.4),new Oe({color:65348,emissive:65348,emissiveIntensity:3}));o.position.set(11+r,1.6,C.minZ+.32),i.add(o)}),di(i,11,-13,3,.75,e),di(i,11,-15,3,.75,e),Mn(i,11-.8,.76,-13),Mn(i,11,.76,-13),Mn(i,11+.8,.76,-13),Mn(i,11-.8,.76,-15,Math.PI),Mn(i,11,.76,-15,Math.PI),Mn(i,11+.8,.76,-15,Math.PI),[-1,0,1].forEach(r=>{rn(i,11+r,-14+1.8,Math.PI,e,Qe.blue()),rn(i,11+r,-14-1.8,0,e,Qe.blue())}),Cn(i,C.maxX-.5,C.midZ+.6),Cn(i,15,C.minZ+.6)}function Uv(i,e){const s=new be(new Ft(1.4,1.4,.06,16),Qe.oak());s.position.set(-11,.74,0),i.add(s),e.push({minX:-11-1.6,maxX:-11+1.6,minZ:0-1.6,maxZ:0+1.6});for(let o=0;o<4;o++){const a=o*Math.PI/2+Math.PI/4,c=new be(new Ft(.04,.04,.74,6),Qe.metal());c.position.set(-11+Math.cos(a)*1.1,.37,0+Math.sin(a)*1.1),i.add(c)}for(let o=0;o<6;o++){const a=o/6*Math.PI*2,c=2;rn(i,-11+Math.cos(a)*c,0+Math.sin(a)*c,a+Math.PI,null,Qe.amber())}const r=new be(new Ye(3.5,2,.08),Qe.screen());r.position.set(-11,2.1,C.minX+.1),r.rotation.y=Math.PI/2,i.add(r),_n(i,Qe.white(),C.minX+.5,.45,0+2.5,.5,.9,2,e),Cn(i,C.minX+.5,C.lobbyZ-.6),Cn(i,-3,C.midZ+.5)}function Ov(i,e){_n(i,Qe.sofa(),11-2.5,.44,0+1.5,3.2,.88,1,e,.1),_n(i,Qe.sofa(),11-3.5,.44,0,1,.88,2.2,e,.1),di(i,11-1.8,0-.2,1.2,.7,e);const s=Qe.bean();for(let c=0;c<3;c++){const l=14+c*1.4,h=new be(new yt(.42,10,8),s);h.scale.y=.65,h.position.set(l,.28,0),i.add(h),e.push({minX:l-.55,maxX:l+.55,minZ:0-.55,maxZ:0+.55})}const r=new Oe({color:2228292,roughness:.6,metalness:.3});_n(i,r,C.maxX-1,1.1,0+2.5,.9,2.2,.7,e);const o=new be(new Ye(.55,.44,.04),new Oe({color:2245887,emissive:1127406,emissiveIntensity:1.5}));o.position.set(C.maxX-.72,1.6,0+2.15),i.add(o),di(i,11+1.5,0-2.5,1.6,.8,e,Qe.dark());const a=new be(new Ye(4,2.2,.08),Qe.screen());a.position.set(9,2.3,C.maxX-.1),a.rotation.y=-Math.PI/2,i.add(a),Cn(i,C.maxX-.5,C.lobbyZ-.6),Cn(i,7,C.midZ+.5)}function Fv(i,e){const t=(C.lobbyZ+C.maxZ)/2;_n(i,Qe.white(),-8,.9,t-1,3,1.8,.7,e),[6,8,10].forEach(c=>{rn(i,c,t+.5,Math.PI,e,Qe.amber())}),di(i,8,t+1.8,1.5,.6,e);const n=new be(new wc(2.2,32),new Oe({color:2245802,roughness:.4}));n.rotation.x=-Math.PI/2,n.position.set(0,.07,t),i.add(n);const s=document.createElement("canvas");s.width=512,s.height=128;const r=s.getContext("2d");r.fillStyle="#3366ff",r.font="bold 72px Inter, sans-serif",r.textAlign="center",r.fillText("SPACEWORK",256,88);const o=new be(new Yn(4,1),new Oe({map:new Xo(s),roughness:.4,transparent:!0}));o.rotation.x=-Math.PI/2,o.position.set(0,.08,t),i.add(o),Cn(i,-5,C.maxZ-1.2),Cn(i,5,C.maxZ-1.2),_n(i,Qe.metal(),0,1,C.lobbyZ+1.5,.4,2,.4,e);const a=new be(new Ye(.38,.28,.04),Qe.screen());a.position.set(0,1.9,C.lobbyZ+1.28),i.add(a)}const Bv="#0f1117",zv="rgba(34,58,28,0.95)",kv="rgba(230,225,215,0.12)",Hv=[{name:"LOBBY",x1:C.minX,x2:C.maxX,z1:C.lobbyZ,z2:C.maxZ,fill:"rgba(180,175,210,0.18)",border:"rgba(180,175,220,0.55)",label:"#ccc"},{name:"OPS",x1:C.minX,x2:C.centerX,z1:C.midZ,z2:C.lobbyZ,fill:"rgba(200,115,20,0.20)",border:"rgba(220,130,30,0.60)",label:"#fa9"},{name:"FUN",x1:C.centerX,x2:C.maxX,z1:C.midZ,z2:C.lobbyZ,fill:"rgba(20,170,90,0.20)",border:"rgba(30,200,100,0.55)",label:"#6fb"},{name:"DESIGN",x1:C.minX,x2:C.centerX,z1:C.minZ,z2:C.midZ,fill:"rgba(190,45,95,0.20)",border:"rgba(220,60,110,0.55)",label:"#f9b"},{name:"ENGINEERING",x1:C.centerX,x2:C.maxX,z1:C.minZ,z2:C.midZ,fill:"rgba(25,90,200,0.20)",border:"rgba(40,120,230,0.55)",label:"#8bf"}],sn=C.doorHalfW,nc=C.mainDoorHalfW,Ss=C.leftDoorX,Ms=C.rightDoorX,Gv=[[C.minX,C.maxZ,-nc,C.maxZ],[nc,C.maxZ,C.maxX,C.maxZ],[C.minX,C.minZ,C.maxX,C.minZ],[C.minX,C.minZ,C.minX,C.maxZ],[C.maxX,C.minZ,C.maxX,C.maxZ],[C.minX,C.lobbyZ,Ss-sn,C.lobbyZ],[Ss+sn,C.lobbyZ,Ms-sn,C.lobbyZ],[Ms+sn,C.lobbyZ,C.maxX,C.lobbyZ],[C.minX,C.midZ,Ss-sn,C.midZ],[Ss+sn,C.midZ,Ms-sn,C.midZ],[Ms+sn,C.midZ,C.maxX,C.midZ],[C.centerX,C.minZ,C.centerX,C.lobbyZ]];class Vv{constructor(e){this._nav=e,this._peers=new Map;const t=document.createElement("canvas");t.id="flat-map-canvas",Object.assign(t.style,{position:"fixed",inset:"0",width:"100%",height:"100%",zIndex:"6",display:"none",cursor:"crosshair"}),document.body.appendChild(t),this._cvs=t,this._ctx=t.getContext("2d"),this._zoom=14,this._panX=0,this._panZ=-6,this._dragging=!1,this._dragMoved=!1,this._lx=0,this._ly=0,this._ping=null,this._setupMouse(),this._setupTouch(),this._resize(),window.addEventListener("resize",()=>this._resize())}show(){this._cvs.style.display="block"}hide(){this._cvs.style.display="none"}setPeer(e,t,n,s){this._peers.set(e,{x:t,z:n,name:s})}removePeer(e){this._peers.delete(e)}update(e){const t=this._cvs.width,n=this._cvs.height,s=this._ctx;s.clearRect(0,0,t,n),this._drawBg(s,t,n),this._drawGrid(s,t,n),this._drawBuilding(s),this._drawRooms(s),this._drawWalls(s),this._drawDoors(s),this._drawPeers(s),this._drawPlayer(s,e),this._drawNavPing(s),this._drawHints(s,t,n)}_fire(e,t){const[n,s]=this._c2w(e,t);this._nav({x:n,z:s}),this._ping={cx:e,cy:t,born:performance.now()}}centreOn(e,t){this._panX=e,this._panZ=t}_w2c(e,t){const n=this._cvs.width/2+(e-this._panX)*this._zoom,s=this._cvs.height/2+(t-this._panZ)*this._zoom;return[n,s]}_c2w(e,t){const n=(e-this._cvs.width/2)/this._zoom+this._panX,s=(t-this._cvs.height/2)/this._zoom+this._panZ;return[n,s]}_wr(e){return e*this._zoom}_setupMouse(){const e=this._cvs;e.addEventListener("wheel",t=>{t.preventDefault();const n=e.getBoundingClientRect(),s=t.clientX-n.left,r=t.clientY-n.top,[o,a]=this._c2w(s,r),c=t.deltaMode===0?t.deltaY:t.deltaY*24,l=Math.pow(.997,c);this._zoom=Math.max(6,Math.min(55,this._zoom*l));const[h,u]=this._c2w(s,r);this._panX+=o-h,this._panZ+=a-u},{passive:!1}),e.addEventListener("mousedown",t=>{this._dragging=!0,this._dragMoved=!1,this._lx=t.clientX,this._ly=t.clientY,e.style.cursor="grabbing"}),document.addEventListener("mousemove",t=>{if(!this._dragging)return;const n=t.clientX-this._lx,s=t.clientY-this._ly;this._panX-=n/this._zoom,this._panZ-=s/this._zoom,this._lx=t.clientX,this._ly=t.clientY,(Math.abs(n)>4||Math.abs(s)>4)&&(this._dragMoved=!0)}),document.addEventListener("mouseup",t=>{if(!this._dragging||(this._dragging=!1,e.style.cursor="crosshair",this._dragMoved))return;const n=e.getBoundingClientRect();this._fire(t.clientX-n.left,t.clientY-n.top)})}_setupTouch(){const e=this._cvs;let t=0,n=0,s=!1,r=0;e.addEventListener("touchstart",o=>{if(o.preventDefault(),s=!1,o.touches.length===1)t=o.touches[0].clientX,n=o.touches[0].clientY,this._lx=t,this._ly=n;else if(o.touches.length===2){const a=o.touches[1].clientX-o.touches[0].clientX,c=o.touches[1].clientY-o.touches[0].clientY;r=Math.sqrt(a*a+c*c)}},{passive:!1}),e.addEventListener("touchmove",o=>{if(o.preventDefault(),o.touches.length===1){const a=o.touches[0].clientX-this._lx,c=o.touches[0].clientY-this._ly;this._panX-=a/this._zoom,this._panZ-=c/this._zoom,this._lx=o.touches[0].clientX,this._ly=o.touches[0].clientY,(Math.abs(a)>4||Math.abs(c)>4)&&(s=!0)}else if(o.touches.length===2){const a=o.touches[1].clientX-o.touches[0].clientX,c=o.touches[1].clientY-o.touches[0].clientY,l=Math.sqrt(a*a+c*c),h=l/(r||l),u=(o.touches[0].clientX+o.touches[1].clientX)/2,d=(o.touches[0].clientY+o.touches[1].clientY)/2,[f,g]=this._c2w(u,d);this._zoom=Math.max(6,Math.min(55,this._zoom*h));const[v,m]=this._c2w(u,d);this._panX+=f-v,this._panZ+=g-m,r=l,s=!0}},{passive:!1}),e.addEventListener("touchend",o=>{if(o.touches.length===0&&!s&&o.changedTouches.length===1){const a=e.getBoundingClientRect();this._fire(o.changedTouches[0].clientX-a.left,o.changedTouches[0].clientY-a.top)}},{passive:!1})}_resize(){this._cvs.width=window.innerWidth,this._cvs.height=window.innerHeight}_drawBg(e,t,n){e.fillStyle=Bv,e.fillRect(0,0,t,n)}_drawGrid(e,t,n){const s=this._zoom*4;if(s<10)return;e.strokeStyle="rgba(255,255,255,0.04)",e.lineWidth=1;const r=(t/2-this._panX*this._zoom)%s;for(let a=r;a<t;a+=s)e.beginPath(),e.moveTo(a,0),e.lineTo(a,n),e.stroke();const o=(n/2-this._panZ*this._zoom)%s;for(let a=o;a<n;a+=s)e.beginPath(),e.moveTo(0,a),e.lineTo(t,a),e.stroke()}_drawBuilding(e){const[t,n]=this._w2c(C.minX-20,C.minZ-20),[s,r]=this._w2c(C.maxX+20,C.maxZ+20);e.fillStyle=zv,e.fillRect(Math.min(t,s),Math.min(n,r),Math.abs(s-t),Math.abs(r-n));const[o,a]=this._w2c(C.minX,C.maxZ),[c,l]=this._w2c(C.maxX,C.minZ);e.fillStyle=kv,e.fillRect(Math.min(o,c),Math.min(a,l),Math.abs(c-o),Math.abs(l-a))}_drawRooms(e){Hv.forEach(t=>{const[n,s]=this._w2c(t.x1,t.z2),[r,o]=this._w2c(t.x2,t.z1),a=Math.min(n,r),c=Math.min(s,o),l=Math.abs(r-n),h=Math.abs(o-s);e.fillStyle=t.fill,e.fillRect(a,c,l,h),e.strokeStyle=t.border,e.lineWidth=1.5,e.strokeRect(a+1,c+1,l-2,h-2),l>50&&h>30&&(e.fillStyle=t.label,e.font=`bold ${Math.max(9,Math.min(13,l*.11))}px Inter, monospace`,e.textAlign="center",e.textBaseline="middle",e.shadowColor="rgba(0,0,0,0.8)",e.shadowBlur=4,e.fillText(t.name,a+l/2,c+h/2),e.shadowBlur=0)})}_drawWalls(e){e.strokeStyle="#4a4a6a",e.lineWidth=Math.max(2,this._wr(C.wallT)*.8),e.lineCap="round",Gv.forEach(([t,n,s,r])=>{const[o,a]=this._w2c(t,n),[c,l]=this._w2c(s,r);e.beginPath(),e.moveTo(o,a),e.lineTo(c,l),e.stroke()})}_drawDoors(e){const t=[{x:0,z:C.maxZ,w:nc*2},{x:Ss,z:C.lobbyZ,w:sn*2},{x:Ms,z:C.lobbyZ,w:sn*2},{x:Ss,z:C.midZ,w:sn*2},{x:Ms,z:C.midZ,w:sn*2}];e.strokeStyle="rgba(255,220,100,0.60)",e.lineWidth=Math.max(3,this._wr(C.wallT)*.9),e.lineCap="square",t.forEach(n=>{const[s,r]=this._w2c(n.x,n.z),o=this._wr(n.w/2);Math.abs(n.z-C.maxZ)<.1||Math.abs(n.z-C.lobbyZ)<.1||Math.abs(n.z-C.midZ)<.1?(e.beginPath(),e.moveTo(s-o,r),e.lineTo(s+o,r),e.stroke()):(e.beginPath(),e.moveTo(s,r-o),e.lineTo(s,r+o),e.stroke())})}_drawPeers(e){this._peers.forEach(({x:t,z:n,name:s})=>{const[r,o]=this._w2c(t,n),a=Math.max(5,this._wr(.4));e.beginPath(),e.arc(r,o,a,0,Math.PI*2),e.fillStyle="rgba(255,120,150,0.85)",e.fill(),e.strokeStyle="#ff88aa",e.lineWidth=1.5,e.stroke(),a>5&&(e.fillStyle="#fff",e.font=`bold ${Math.max(8,a*1.1)}px Inter,monospace`,e.textAlign="center",e.textBaseline="bottom",e.fillText(s,r,o-a-2))})}_drawPlayer(e,t){const[n,s]=this._w2c(t.x,t.z),r=Math.max(6,this._wr(.45)),o=performance.now()/600,a=r+Math.sin(o)*r*.35;e.beginPath(),e.arc(n,s,a,0,Math.PI*2),e.strokeStyle="rgba(0,255,255,0.25)",e.lineWidth=2,e.stroke(),e.shadowColor="#00ffff",e.shadowBlur=10,e.beginPath(),e.arc(n,s,r,0,Math.PI*2),e.fillStyle="#00e5ff",e.fill(),e.shadowBlur=0,e.fillStyle="#fff",e.font=`bold ${Math.max(9,r*1.2)}px Inter,monospace`,e.textAlign="center",e.textBaseline="bottom",e.shadowColor="#000",e.shadowBlur=3,e.fillText("YOU",n,s-r-3),e.shadowBlur=0}_drawNavPing(e){if(!this._ping)return;const t=performance.now()-this._ping.born,n=600;if(t>n){this._ping=null;return}const s=t/n,r=1-s,o=8+s*18,{cx:a,cy:c}=this._ping;e.globalAlpha=r,e.strokeStyle="#ffffff",e.lineWidth=2;const l=6;e.beginPath(),e.moveTo(a-l,c),e.lineTo(a+l,c),e.moveTo(a,c-l),e.lineTo(a,c+l),e.stroke(),e.strokeStyle="#00ffff",e.lineWidth=1.5,e.beginPath(),e.arc(a,c,o,0,Math.PI*2),e.stroke(),e.globalAlpha=1}_drawHints(e,t,n){e.fillStyle="rgba(255,255,255,0.22)",e.font="11px Inter, monospace",e.textAlign="center",e.textBaseline="bottom",e.fillText("Click to walk  ·  Scroll to zoom  ·  Drag to pan  ·  WASD to move",t/2,n-8)}}const xo=i=>"#"+i.toString(16).padStart(6,"0");class Wv{constructor(e){this._onSelect=e,this._selected=parseInt(localStorage.getItem("spaceAvatarId")??"0",10),this._el=this._build(),document.body.appendChild(this._el)}show(){this._el.classList.remove("ap-hidden"),this._sync()}hide(){this._el.classList.add("ap-hidden")}getSelected(){return this._selected}_build(){const e=document.createElement("div");return e.id="avatar-picker",e.className="ap-hidden",e.innerHTML=`
      <div class="ap-panel">
        <div class="ap-head">
          <span class="ap-title">Choose Your Avatar</span>
          <button class="ap-close" aria-label="Close">✕</button>
        </div>
        <div class="ap-grid">
          ${Bi.map(t=>this._card(t)).join("")}
        </div>
        <p class="ap-hint">Your selection is saved automatically</p>
      </div>
    `,e.querySelector(".ap-close").addEventListener("click",()=>this.hide()),e.addEventListener("click",t=>{t.target===e&&this.hide()}),e.querySelectorAll(".ap-card").forEach(t=>{t.addEventListener("click",()=>{const n=parseInt(t.dataset.id,10);this._selected=n,localStorage.setItem("spaceAvatarId",String(n)),this._sync(),this._onSelect(n)})}),e}_sync(){this._el.querySelectorAll(".ap-card").forEach(e=>e.classList.toggle("ap-active",parseInt(e.dataset.id,10)===this._selected))}_card(e){const t=xo(e.skin),n=xo(e.hair),s=xo(e.outfit),r=xo(e.accent);return`
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
    `}}const Xv=[{name:"OUTSIDE",color:"#88cc66",mapColor:"rgba(70,120,50,0.35)",border:"#66aa44",desc:"Outside the building"},{name:"LOBBY",color:"#ffffff",mapColor:"rgba(200,200,230,0.40)",border:"#aaaacc",desc:"Reception & Entrance"},{name:"OPS",color:"#ffaa44",mapColor:"rgba(200,120,20,0.40)",border:"#ffaa44",desc:"Operations & Support"},{name:"FUN",color:"#44ffaa",mapColor:"rgba(20,180,100,0.40)",border:"#44ffaa",desc:"Chill & Social"},{name:"DESIGN",color:"#ff6ba0",mapColor:"rgba(200,50,100,0.40)",border:"#ff6ba0",desc:"UI/UX & 3D Design"},{name:"ENGINEERING",color:"#44aaff",mapColor:"rgba(30,100,200,0.40)",border:"#44aaff",desc:"Development & Code"}],nt={minX:-26,maxX:26,minZ:-27,maxZ:28,W:180,H:200};let ir,fn;function Zv(i,e,t,n,s){const r=window._spaceUsername||"You",o=parseInt(localStorage.getItem("spaceAvatarId")??"0",10),a=Ou(r,o);a.position.set(0,0,22),i.add(a);const c=new Wv(E=>{Bu(a,r,E),s==null||s(E)}),l=document.getElementById("avatar-btn");l&&l.addEventListener("click",()=>c.show());const{colliders:h}=Iv(i);yv(h);const u=Pv(a,e,t.domElement),d=new Uu;let f="",g=u.getMode();const v=new Vv(E=>u.navigate(E)),m=[],p=[];i.traverse(E=>{E.userData.mapHide&&m.push(E),E.userData.mapShow&&p.push(E)}),m.forEach(E=>{E.visible=!1}),p.forEach(E=>{E.visible=!1}),v.centreOn(a.position.x,a.position.z),v.show();const T=document.getElementById("minimap");T&&(T.style.display="none");function y(E){m.forEach(M=>{M.visible=E!=="overview"&&E!=="flat"}),p.forEach(M=>{M.visible=E==="overview"}),a.visible=E!=="first",E==="flat"?(v.centreOn(a.position.x,a.position.z),v.show()):v.hide();const D=document.getElementById("minimap");D&&(D.style.display=E==="flat"?"none":"")}Yv(u);function w(){const E=Oo(a.position);E!==f&&(f=E,n==null||n(f))}function I(){const E=document.getElementById("mode-badge");if(!E)return;const D=u.getMode(),M={flat:"🎮 FLAT MAP",overview:"🗺 3D MAP",third:"👤 3RD PERSON",first:"👁 1ST PERSON"};E.textContent=M[D]??D;const x=D==="flat"||D==="overview";E.style.background=x?"rgba(255,160,0,0.2)":"rgba(0,100,255,0.2)",E.style.borderColor=x?"rgba(255,160,0,0.4)":"rgba(0,150,255,0.4)",E.style.color=x?"#ffaa00":"#4af"}function R(){requestAnimationFrame(R);const E=d.getDelta(),D=u.update(E);ku(a,D,E),w(),I();const M=u.getMode();M!==g&&(g=M,y(M)),Kv(a.position,M),M==="flat"&&v.update(a.position)}return R(),{getPosition:()=>a.position.clone(),getRotation:()=>a.rotation.clone(),navigate:E=>u.navigate(E),isDragMoved:()=>u.isDragMoved(),getMode:()=>u.getMode(),setView:E=>{u.setMode(E),y(E)},setStatus:E=>Fu(a,E),peerJoin:(E,D)=>v.setPeer(E,0,0,D),peerMove:(E,D,M,x)=>v.setPeer(E,D,M,x),peerLeave:E=>v.removePeer(E)}}function Yv(i,e){const t=document.getElementById("minimap-canvas");t&&(t.style.cursor="crosshair",t.addEventListener("click",n=>{const s=t.getBoundingClientRect(),r=(n.clientX-s.left)/s.width*nt.W,o=(n.clientY-s.top)/s.height*nt.H,a=nt.minX+r/nt.W*(nt.maxX-nt.minX),c=nt.maxZ-o/nt.H*(nt.maxZ-nt.minZ);i.navigate({x:a,z:c}),qv(r,o)}))}function qv(i,e){fn&&(fn.strokeStyle="#fff",fn.lineWidth=1.5,fn.globalAlpha=.9,fn.beginPath(),fn.arc(i,e,7,0,Math.PI*2),fn.stroke(),fn.globalAlpha=1)}function $v(){ir=document.getElementById("minimap-canvas"),ir&&(ir.width=nt.W,ir.height=nt.H,fn=ir.getContext("2d"))}function ps(i,e){const t=(i-nt.minX)/(nt.maxX-nt.minX)*nt.W,n=(nt.maxZ-e)/(nt.maxZ-nt.minZ)*nt.H;return[t,n]}function Kv(i,e){if(!fn){$v();return}const t=fn;t.clearRect(0,0,nt.W,nt.H),t.fillStyle="rgba(50,90,40,0.5)",t.fillRect(0,0,nt.W,nt.H);const[n,s]=ps(C.minX,C.maxZ),[r,o]=ps(C.maxX,C.minZ);t.fillStyle="rgba(240,235,225,0.25)",t.fillRect(n,s,r-n,o-s),[{name:"LOBBY",x1:C.minX,x2:C.maxX,z1:C.lobbyZ,z2:C.maxZ},{name:"OPS",x1:C.minX,x2:C.centerX,z1:C.midZ,z2:C.lobbyZ},{name:"FUN",x1:C.centerX,x2:C.maxX,z1:C.midZ,z2:C.lobbyZ},{name:"DESIGN",x1:C.minX,x2:C.centerX,z1:C.minZ,z2:C.midZ},{name:"ENGINEERING",x1:C.centerX,x2:C.maxX,z1:C.minZ,z2:C.midZ}].forEach(u=>{const d=Xv.find(y=>y.name===u.name);if(!d)return;const[f,g]=ps(u.x1,u.z2),[v,m]=ps(u.x2,u.z1);t.fillStyle=d.mapColor,t.fillRect(f,g,v-f,m-g),t.strokeStyle=d.border+"88",t.lineWidth=1,t.strokeRect(f+.5,g+.5,v-f-1,m-g-1),t.fillStyle=d.border,t.font="bold 7px Inter, monospace",t.textAlign="center";const p=(f+v)/2,T=g+10;t.fillText(u.name,p,T)}),[{x:0,z:C.maxZ,label:"🚪"},{x:-11,z:C.lobbyZ,label:"▶"},{x:11,z:C.lobbyZ,label:"▶"},{x:-11,z:C.midZ,label:"▶"},{x:11,z:C.midZ,label:"▶"}].forEach(({x:u,z:d,label:f})=>{const[g,v]=ps(u,d);t.fillStyle="rgba(255,255,255,0.7)",t.font="8px sans-serif",t.textAlign="center",t.fillText(f,g,v+3)}),t.strokeStyle="rgba(220,210,190,0.5)",t.lineWidth=1.5,t.strokeRect(n,s,r-n,o-s),e==="overview"&&(t.strokeStyle="rgba(255,160,0,0.7)",t.lineWidth=2,t.strokeRect(2,2,nt.W-4,nt.H-4),t.fillStyle="rgba(255,160,0,0.06)",t.fillRect(2,2,nt.W-4,nt.H-4));const[l,h]=ps(i.x,i.z);t.shadowColor="#00ffff",t.shadowBlur=8,t.fillStyle="#00ffff",t.beginPath(),t.arc(l,h,5,0,Math.PI*2),t.fill(),t.shadowBlur=0,t.fillStyle="#fff",t.font="bold 7px Inter, monospace",t.textAlign="center",t.shadowColor="#0ff",t.shadowBlur=4,t.fillText("YOU",l,h-8),t.shadowBlur=0,t.fillStyle="rgba(255,255,255,0.28)",t.font="7px Inter, monospace",t.textAlign="center",t.fillText("click map to move",nt.W/2,nt.H-4)}function Jv(){const i=document.getElementById("screen-overlay"),e=document.getElementById("screen-iframe"),t=document.getElementById("screen-overlay-close"),n=document.getElementById("screen-overlay-title"),s=document.getElementById("screen-overlay-tool"),r=document.getElementById("screen-overlay-zone");if(!i)return console.warn("[screenOverlay] #screen-overlay not found in DOM"),{openScreen:()=>{},closeScreen:()=>{},isOpen:()=>!1};t.addEventListener("click",a),i.addEventListener("click",l=>{l.target===i&&a()}),document.addEventListener("keydown",l=>{l.code==="Escape"&&i.classList.contains("visible")&&(a(),l.stopPropagation())},!0);function o(l){var h;if(n.textContent=l.label,s.textContent=l.tool,r){r.textContent=l.zone;const u={BRIDGE:"#4466ff",LAB:"#00ffcc",LOUNGE:"#aa55ff"};r.style.color=u[l.zone]||"#fff"}e.src=l.url,i.classList.add("visible"),(h=document.exitPointerLock)==null||h.call(document)}function a(){i.classList.remove("visible"),setTimeout(()=>{e.src=""},200)}function c(){return i.classList.contains("visible")}return{openScreen:o,closeScreen:a,isOpen:c}}function wh(...i){const e=i.join("\0");let t=5381;for(let n=0;n<e.length;n++)t=(Math.imul(33,t)^e.charCodeAt(n))>>>0;return t.toString(36).padStart(7,"0")}class Fo{constructor(e,t=0){this.id=wh(e,String(t)),this.seed=e,this.epoch=t,this.resonance=1}tick(){return this.epoch++,this}harmonisesWith(e,t=.51){return this.resonance>=t&&e.resonance>=t}static merge(e,t){const[n,s]=e.id<t.id?[e,t]:[t,e];return new Fo(wh(n.id,s.id),Math.max(n.epoch,s.epoch))}toString(){return`freq:${this.id}@${this.epoch}`}}class Rc{constructor(e={}){this._v=new Map(Object.entries(e))}tick(e){return this._v.set(e,(this._v.get(e)||0)+1),this}get(e){return this._v.get(e)||0}merge(e){for(const[t,n]of e._v)this._v.set(t,Math.max(this.get(t),n));return this}clone(){return new Rc(Object.fromEntries(this._v))}compare(e){const t=new Set([...this._v.keys(),...e._v.keys()]);let n=!1,s=!1;for(const r of t){const o=this.get(r),a=e.get(r);o<a&&(n=!0),o>a&&(s=!0)}return!n&&!s?"equal":n&&!s?"before":!n&&s?"after":"concurrent"}happensBefore(e){return this.compare(e)==="before"}toJSON(){return Object.fromEntries(this._v)}}class Cc{constructor(){this._entries=new Map}set(e,t,n,s){const r=this._entries.get(e);if(!r)return this._entries.set(e,{value:t,clock:n.clone(),nodeId:s}),!0;const o=n.compare(r.clock);return o==="after"||o==="concurrent"&&s>r.nodeId?(this._entries.set(e,{value:t,clock:n.clone(),nodeId:s}),!0):!1}get(e){var t;return(t=this._entries.get(e))==null?void 0:t.value}has(e){return this._entries.has(e)}keys(){return this._entries.keys()}entries(){return[...this._entries.entries()].map(([e,t])=>[e,t.value])}merge(e){for(const[t,{value:n,clock:s,nodeId:r}]of e._entries)this.set(t,n,s,r);return this}clone(){const e=new Cc;for(const[t,n]of this._entries)e._entries.set(t,{...n,clock:n.clock.clone()});return e}size(){return this._entries.size}}class bh{constructor(e){this.frequency=e,this.state=new Cc,this.clock=new Rc,this.nodes=new Set,this.createdAt=Date.now()}enter(e){this.nodes.add(e),this.clock.tick(e)}exit(e){this.nodes.delete(e)}update(e,t,n){return this.clock.tick(e),this.state.set(t,n,this.clock.clone(),e)}get(e){return this.state.get(e)}merge(e){this.state.merge(e.state),this.clock.merge(e.clock);for(const t of e.nodes)this.nodes.add(t);return this}consistency(e){return this.clock.compare(e.clock)}snapshot(){return{frequency:this.frequency.toString(),nodeCount:this.nodes.size,stateSize:this.state.size(),epoch:this.frequency.epoch,clock:this.clock.toJSON()}}}function yo(...i){const e=i.join("|");let t=5381;for(let n=0;n<e.length;n++)t=(Math.imul(33,t)^e.charCodeAt(n))>>>0;return t.toString(36)}var _t,Vn,vi,ic,sc;class jv{constructor(e,t=""){$e(this,vi);$e(this,_t,new Map);$e(this,Vn);gt(this,Vn,e),oe(this,_t).set(e,{id:e,publicKey:t,vouchedBy:null,chainDepth:0,chainHash:yo(e),votes:new Set([e]),joinedAt:Date.now()})}get rootId(){return oe(this,Vn)}vouch(e,t,n=""){if(!this.isVerified(e))throw new Error(`Voucher "${e}" is not a verified member`);if(oe(this,_t).has(t))throw new Error(`"${t}" is already in the network`);const s=oe(this,_t).get(e);return oe(this,_t).set(t,{id:t,publicKey:n,vouchedBy:e,chainDepth:s.chainDepth+1,chainHash:yo(t,s.chainHash),votes:new Set([e]),joinedAt:Date.now()}),this.getMember(t)}vote(e,t){if(!this.isVerified(e))throw new Error(`Voter "${e}" is not verified`);if(!oe(this,_t).has(t))throw new Error(`"${t}" not found`);oe(this,_t).get(t).votes.add(e)}revokeVote(e,t){var n;(n=oe(this,_t).get(t))==null||n.votes.delete(e)}remove(e){const t=[];return je(this,vi,ic).call(this,e,t),t}isVerified(e){if(e===oe(this,Vn))return!0;const t=new Set;let n=e;for(;n!==oe(this,Vn);){if(t.has(n))return!1;t.add(n);const s=oe(this,_t).get(n);if(!(s!=null&&s.vouchedBy))return!1;n=s.vouchedBy}return!0}isActive(e){if(e===oe(this,Vn))return!0;if(!this.isVerified(e))return!1;const t=oe(this,_t).get(e),n=je(this,vi,sc).call(this),s=Math.floor(n.size/2)+1;return[...t.votes].filter(o=>n.has(o)).length>=s}trustScore(e){if(!this.isVerified(e))return 0;const t=oe(this,_t).get(e),n=je(this,vi,sc).call(this);return n.size===0?0:[...t.votes].filter(r=>n.has(r)).length/n.size}depth(e){var t;return((t=oe(this,_t).get(e))==null?void 0:t.chainDepth)??-1}getMember(e){return oe(this,_t).get(e)??null}getAll(){return[...oe(this,_t).values()]}size(){return oe(this,_t).size}validateIntegrity(){for(const[e,t]of oe(this,_t)){if(e===oe(this,Vn)){if(t.chainHash!==yo(e))return!1;continue}const n=oe(this,_t).get(t.vouchedBy);if(!n)return!1;const s=yo(e,n.chainHash);if(t.chainHash!==s)return!1}return!0}}_t=new WeakMap,Vn=new WeakMap,vi=new WeakSet,ic=function(e,t){if(oe(this,_t).has(e)){t.push(e),oe(this,_t).delete(e);for(const[n,s]of oe(this,_t))s.vouchedBy===e&&je(this,vi,ic).call(this,n,t)}},sc=function(){const e=new Set;for(const t of oe(this,_t).keys())this.isVerified(t)&&e.add(t);return e};class Qv{constructor(e,t=""){this.id=e,this.publicKey=t,this.realities=new Map,this.neighbors=new Set,this.position={x:0,y:0,z:0},this.meta={}}tune(e){return e.enter(this.id),this.realities.set(e.frequency.id,e),this}detune(e){const t=this.realities.get(e);return t&&(t.exit(this.id),this.realities.delete(e)),this}bridge(e,t){return this.tune(e),this.tune(t),this}isIn(e){return this.realities.has(e)}moveTo(e,t,n,s){this.position={x:e,y:t,z:n};const r=this.realities.get(s);r&&r.update(this.id,`pos:${this.id}`,{x:e,y:t,z:n})}connect(e){this.neighbors.add(e)}disconnect(e){this.neighbors.delete(e)}}var Sr,rc;class ex{constructor(){$e(this,Sr);this.nodes=new Map,this.realities=new Map,this._msgLog=[]}createReality(e,t=0){const n=new Fo(e.id,t),s=new bh(n),r=new jv(e.id,e.publicKey);return this.realities.set(n.id,{reality:s,trust:r}),this.addNode(e),e.tune(s),{reality:s,trust:r,frequency:n}}addNode(e){this.nodes.set(e.id,e)}getNode(e){return this.nodes.get(e)??null}joinReality(e,t,n){const s=this.realities.get(t);if(!s)throw new Error(`Reality "${t}" does not exist`);const{reality:r,trust:o}=s;return o.vouch(n,e.id,e.publicKey),this.addNode(e),e.tune(r),e}route(e,t,n){if(e===t)return[e];const s=this.realities.get(n);if(!s)return null;const{trust:r}=s,o=je(this,Sr,rc).call(this,e,r),a=je(this,Sr,rc).call(this,t,r);if(!o||!a)return null;const c=new Set(o);let l;for(const d of a)if(c.has(d)){l=d;break}if(!l)return null;const h=o.slice(0,o.indexOf(l)+1),u=a.slice(0,a.indexOf(l)).reverse();return[...h,...u]}send(e,t,n,s){const r=this.route(e,t,n);if(!r)return{delivered:!1,reason:"no-route"};const o=this.realities.get(n);o&&o.reality.update(e,`msg:${Date.now()}:${e}→${t}`,s);const a={from:e,to:t,hops:r,payload:s,ts:Date.now()};return this._msgLog.push(a),{delivered:!0,hops:r.length,route:r}}gossip(e,t,n,s,r=6){const o=this.nodes.get(e),a=this.realities.get(t);if(!o||!a)return 0;const{reality:c}=a,l=new Set;let h=0;const u=(d,f)=>{if(l.has(d)||f<=0)return;l.add(d);const g=this.nodes.get(d);if(!(!g||!g.isIn(t))){c.update(d,n,s),h++;for(const v of g.neighbors)u(v,f-1)}};return u(e,r),h}propose(e,t,n,s){const r=this.realities.get(t);if(!r)return{passed:!1,reason:"unknown-reality"};const{reality:o,trust:a}=r,c=a.getAll().filter(d=>a.isVerified(d.id)),l=c.filter(d=>{const f=this.nodes.get(d.id);return f&&s(f,a)}),h=Math.floor(c.length/2)+1;return{passed:l.length>=h,motion:n,proposer:e,total:c.length,yesVotes:l.length,needed:h,voters:l.map(d=>d.id)}}mergeRealities(e,t){const n=this.realities.get(e),s=this.realities.get(t);if(!n||!s)return null;if(!n.reality.frequency.harmonisesWith(s.reality.frequency))return{merged:!1,reason:"insufficient-resonance"};const r=Fo.merge(n.reality.frequency,s.reality.frequency),o=new bh(r);o.merge(n.reality),o.merge(s.reality);const a=n.trust;try{a.vouch(n.trust.rootId,s.trust.rootId,"")}catch{}this.realities.set(r.id,{reality:o,trust:a});for(const c of this.nodes.values())(c.isIn(e)||c.isIn(t))&&(c.detune(e),c.detune(t),c.tune(o));return{merged:!0,frequency:r,reality:o}}nodesIn(e){return[...this.nodes.values()].filter(t=>t.isIn(e))}bridges(){return[...this.nodes.values()].filter(e=>e.realities.size>1)}stats(){return{totalNodes:this.nodes.size,totalRealities:this.realities.size,bridgeNodes:this.bridges().length,messageCount:this._msgLog.length}}}Sr=new WeakSet,rc=function(e,t){var o;const n=[];let s=e;const r=new Set;for(;s;){if(r.has(s))return null;r.add(s),n.push(s),s=((o=t.getMember(s))==null?void 0:o.vouchedBy)??null}return n};const gs=Object.freeze({PUBLIC:"public",INVITE:"invite",PRIVATE:"private"});function Th(){return Math.random().toString(36).slice(2,9).toUpperCase()}class tx{constructor(e,t,{targetId:n=null,ttlMs:s=864e5,maxUses:r=1}={}){this.id=`INV-${Th()}-${Th()}`,this.issuerId=e,this.frequencyId=t,this.targetId=n,this.expiresAt=Date.now()+s,this.maxUses=r,this.uses=0,this.claimedBy=[]}get expired(){return Date.now()>this.expiresAt}get exhausted(){return this.uses>=this.maxUses}get active(){return!this.expired&&!this.exhausted}isValidFor(e){return!(this.expired||this.exhausted||this.targetId&&this.targetId!==e)}claim(e){return this.isValidFor(e)?(this.uses++,this.claimedBy.push(e),!0):!1}}var Mr,Er,Ps,Oi,zo,Xu;class nx{constructor(){$e(this,zo);$e(this,Mr,new Map);$e(this,Er,new Map);$e(this,Ps,new Map);$e(this,Oi,new Map)}setNode(e,t){oe(this,Mr).set(e,t)}getNode(e){return oe(this,Mr).get(e)??gs.PUBLIC}setReality(e,t){oe(this,Er).set(e,t)}getReality(e){return oe(this,Er).get(e)??gs.PUBLIC}issueInvite(e,t,n={}){const s=new tx(e,t,n);return oe(this,Ps).set(s.id,s),s}getToken(e){return oe(this,Ps).get(e)??null}claimInvite(e,t){const n=oe(this,Ps).get(e);return n?n.expired?{success:!1,reason:"token-expired"}:n.exhausted?{success:!1,reason:"token-exhausted"}:n.isValidFor(t)?(n.claim(t),oe(this,Oi).has(t)||oe(this,Oi).set(t,new Set),oe(this,Oi).get(t).add(n.frequencyId),{success:!0,frequencyId:n.frequencyId}):{success:!1,reason:"token-not-for-you"}:{success:!1,reason:"token-not-found"}}hasGrant(e,t){var n;return((n=oe(this,Oi).get(e))==null?void 0:n.has(t))??!1}canSee(e,t,n){var r;if(e===t)return!0;const s=this.getNode(t);if(s===gs.PUBLIC||je(this,zo,Xu).call(this,e,t,n))return!0;if(s===gs.PRIVATE)return!1;for(const[o]of((r=n.getNode(t))==null?void 0:r.realities)??[])if(this.hasGrant(e,o))return!0;return!1}perceptionOf(e,t,n){return this.canSee(e,t,n)?"full":this.getNode(t)===gs.INVITE?"blurred":"hidden"}buildMapFor(e,t){const n=[],s=[],r=new Set;for(const o of t.nodes.values()){const a=this.perceptionOf(e,o.id,t);a!=="hidden"&&(r.add(o.id),n.push({id:o.id,perception:a,visibility:this.getNode(o.id),realities:[...o.realities.keys()],isBridge:o.realities.size>1,isMe:o.id===e,position:o.position}))}for(const{reality:o,trust:a}of t.realities.values())for(const c of a.getAll())c.vouchedBy&&r.has(c.id)&&r.has(c.vouchedBy)&&s.push({from:c.vouchedBy,to:c.id,type:"trust"});for(const o of t.nodes.values())for(const a of o.neighbors)r.has(o.id)&&r.has(a)&&o.id<a&&s.push({from:o.id,to:a,type:"neighbor"});return{nodes:n,edges:s}}}Mr=new WeakMap,Er=new WeakMap,Ps=new WeakMap,Oi=new WeakMap,zo=new WeakSet,Xu=function(e,t,n){const s=n.getNode(e),r=n.getNode(t);if(!s||!r)return!1;for(const[o]of s.realities){if(!r.isIn(o))continue;const a=n.realities.get(o);if(a!=null&&a.trust.isVerified(e)&&(a!=null&&a.trust.isVerified(t)))return!0}return!1};const Ah=[{fill:"rgba(30,80,200,0.09)",border:"#4466ff",glow:"#2255dd"},{fill:"rgba(0,160,120,0.09)",border:"#00ffcc",glow:"#00ccaa"},{fill:"rgba(130,20,220,0.09)",border:"#aa55ff",glow:"#8833dd"},{fill:"rgba(200,100,0,0.09)",border:"#ff9900",glow:"#dd7700"},{fill:"rgba(0,160,200,0.09)",border:"#00ccff",glow:"#00aadd"}],Bn={me:"#00ffff",public:"#4488ff",invite:"#ffaa00",private:"#666688",blurred:"#333355"};class ix{constructor(e,t,n){this.canvas=e,this.ctx=e.getContext("2d"),this.vis=t,this.myId=n,this._nodes=[],this._edges=[],this._realityGroups=new Map,this._pan={x:0,y:0},this._zoom=1,this._drag=!1,this._lastMouse={x:0,y:0},this._selected=null,this._raf=null,this._settled=0,this._onSelect=null,this._bindEvents()}load(e){const{nodes:t,edges:n}=e,s=this.canvas.width,r=this.canvas.height,o=new Map(this._nodes.map(c=>[c.id,c]));this._nodes=t.map(c=>{if(o.has(c.id))return{...o.get(c.id),...c};const l=Math.random()*Math.PI*2,h=100+Math.random()*80;return{...c,x:s/2+Math.cos(l)*h,y:r/2+Math.sin(l)*h,vx:0,vy:0}});const a=new Map(this._nodes.map(c=>[c.id,c]));this._edges=n.filter(c=>a.has(c.from)&&a.has(c.to)).map(c=>({fromNode:a.get(c.from),toNode:a.get(c.to),type:c.type})),this._realityGroups.clear(),this._nodes.forEach(c=>{var l;(l=c.realities)==null||l.forEach((h,u)=>{this._realityGroups.has(h)||this._realityGroups.set(h,{nodes:[],color:Ah[this._realityGroups.size%Ah.length]}),this._realityGroups.get(h).nodes.push(c)})}),this._settled=0,this._kickSimulation()}onSelect(e){this._onSelect=e}fitView(){if(this._nodes.length===0)return;const e=this._nodes.map(d=>d.x),t=this._nodes.map(d=>d.y),n=Math.min(...e),s=Math.max(...e),r=Math.min(...t),o=Math.max(...t),a=this.canvas.width,c=this.canvas.height,l=60,h=(a-l*2)/(s-n||1),u=(c-l*2)/(o-r||1);this._zoom=Math.min(h,u,2),this._pan.x=-((n+s)/2)*this._zoom,this._pan.y=-((r+o)/2)*this._zoom,this.render()}stop(){this._raf&&cancelAnimationFrame(this._raf)}_kickSimulation(){if(this._raf)return;const e=()=>{this._settled<250&&(this._stepForce(),this._settled++),this.render(),this._raf=requestAnimationFrame(e)};this._raf=requestAnimationFrame(e)}_stepForce(){const e=this._nodes,t=4e3,n=90,s=.025,r=.82;for(let o=0;o<e.length;o++)for(let a=o+1;a<e.length;a++){const c=e[o],l=e[a],h=l.x-c.x,u=l.y-c.y,d=h*h+u*u||1,f=Math.sqrt(d),g=t/d;c.vx-=g*h/f,c.vy-=g*u/f,l.vx+=g*h/f,l.vy+=g*u/f}for(const o of this._edges){if(o.type!=="trust")continue;const a=o.toNode.x-o.fromNode.x,c=o.toNode.y-o.fromNode.y,l=Math.sqrt(a*a+c*c)||1,h=(l-n)*s;o.fromNode.vx+=h*a/l,o.fromNode.vy+=h*c/l,o.toNode.vx-=h*a/l,o.toNode.vy-=h*c/l,o.toNode.vy+=(o.toNode.y-(o.fromNode.y+n))*-.008}for(const o of this._edges){if(o.type!=="neighbor")continue;const a=o.toNode.x-o.fromNode.x,c=o.toNode.y-o.fromNode.y,l=Math.sqrt(a*a+c*c)||1,h=(l-50)*.008;o.fromNode.vx+=h*a/l,o.fromNode.vy+=h*c/l,o.toNode.vx-=h*a/l,o.toNode.vy-=h*c/l}for(const o of e)o.x+=o.vx*r,o.y+=o.vy*r,o.vx*=r,o.vy*=r}render(){const e=this.ctx,t=this.canvas.width,n=this.canvas.height;e.clearRect(0,0,t,n),e.fillStyle="rgba(0,2,12,0.97)",e.fillRect(0,0,t,n),e.save(),e.translate(t/2+this._pan.x,n/2+this._pan.y),e.scale(this._zoom,this._zoom),this._drawRealityClusters(),this._drawEdges(),this._drawNodes(),this._selected&&this._drawSelection(this._selected),e.restore(),this._drawLegend(),this._settled<250&&this._drawSettlingIndicator()}_drawRealityClusters(){const e=this.ctx;for(const[t,{nodes:n,color:s}]of this._realityGroups){if(n.length<2)continue;const r=n.reduce((l,h)=>l+h.x,0)/n.length,o=n.reduce((l,h)=>l+h.y,0)/n.length,a=Math.max(...n.map(l=>Math.hypot(l.x-r,l.y-o)))+55,c=e.createRadialGradient(r,o,0,r,o,a);c.addColorStop(0,s.fill.replace("0.09","0.14")),c.addColorStop(.7,s.fill),c.addColorStop(1,"transparent"),e.fillStyle=c,e.beginPath(),e.arc(r,o,a,0,Math.PI*2),e.fill(),e.strokeStyle=s.border+"33",e.lineWidth=1,e.beginPath(),e.arc(r,o,a,0,Math.PI*2),e.stroke()}}_drawEdges(){const e=this.ctx;for(const t of this._edges)e.beginPath(),e.moveTo(t.fromNode.x,t.fromNode.y),e.lineTo(t.toNode.x,t.toNode.y),t.type==="trust"?(e.strokeStyle="rgba(120,180,255,0.45)",e.lineWidth=1.8,e.setLineDash([])):(e.strokeStyle="rgba(255,255,255,0.1)",e.lineWidth=.8,e.setLineDash([3,5])),e.stroke();e.setLineDash([])}_drawNodes(){var t;const e=this.ctx;for(const n of this._nodes){const s=((t=this._selected)==null?void 0:t.id)===n.id,r=n.isMe?11:n.isBridge?9:7,o=n.isMe?Bn.me:n.perception==="blurred"?Bn.blurred:Bn[n.visibility]??Bn.public;e.shadowColor=o,e.shadowBlur=s?28:n.isMe?22:12,e.fillStyle=n.perception==="blurred"?"rgba(50,50,80,0.7)":o+(n.isMe?"":"cc"),e.beginPath(),e.arc(n.x,n.y,r,0,Math.PI*2),e.fill(),e.shadowBlur=0,n.isBridge&&(e.strokeStyle="#ffcc00bb",e.lineWidth=2,e.beginPath(),e.arc(n.x,n.y,r+5,0,Math.PI*2),e.stroke()),s&&(e.strokeStyle="#ffffff88",e.lineWidth=1.5,e.beginPath(),e.arc(n.x,n.y,r+8,0,Math.PI*2),e.stroke());const a=n.perception==="blurred"?"???":n.id.length>12?n.id.slice(0,12)+"…":n.id;e.fillStyle=n.isMe?"#ffffff":"rgba(255,255,255,0.65)",e.font=`${n.isMe?"bold ":""}10px Inter, monospace`,e.textAlign="center",e.fillText(a,n.x,n.y+r+14),n.perception==="full"&&n.depth>0&&(e.fillStyle="rgba(255,255,255,0.28)",e.font="8px monospace",e.fillText(`d${n.depth}`,n.x,n.y-r-4)),n.isMe&&(e.fillStyle="#00ffff",e.font="bold 8px Inter, monospace",e.shadowColor="#00ffff",e.shadowBlur=8,e.fillText("YOU",n.x,n.y-r-4),e.shadowBlur=0)}}_drawSelection(e){}_drawLegend(){const e=this.ctx,t=[{color:Bn.me,label:"You"},{color:Bn.public,label:"Public"},{color:Bn.invite,label:"Invite-only"},{color:Bn.private,label:"Private"},{color:Bn.blurred,label:"Unknown (invite-only, not connected)"},{color:"#ffcc00",label:"Bridge node"}],n=14,s=this.canvas.height-14-t.length*18;e.fillStyle="rgba(0,5,20,0.75)",e.fillRect(n-6,s-10,280,t.length*18+16),e.strokeStyle="rgba(255,255,255,0.07)",e.lineWidth=1,e.strokeRect(n-6,s-10,280,t.length*18+16),t.forEach(({color:r,label:o},a)=>{const c=s+a*18;e.fillStyle=r,e.beginPath(),e.arc(n+6,c,5,0,Math.PI*2),e.fill(),e.fillStyle="rgba(255,255,255,0.6)",e.font="11px Inter, monospace",e.textAlign="left",e.fillText(o,n+18,c+4)})}_drawSettlingIndicator(){const e=this.ctx,t=this._settled/250,n=this.canvas.width;e.fillStyle="rgba(100,180,255,0.5)",e.fillRect(0,this.canvas.height-2,n*t,2)}_bindEvents(){const e=this.canvas;e.addEventListener("mousedown",t=>{this._drag=!0,this._lastMouse={x:t.clientX,y:t.clientY}}),e.addEventListener("mousemove",t=>{this._drag&&(this._pan.x+=t.clientX-this._lastMouse.x,this._pan.y+=t.clientY-this._lastMouse.y,this._lastMouse={x:t.clientX,y:t.clientY},this.render())}),e.addEventListener("mouseup",()=>{this._drag=!1}),e.addEventListener("mouseleave",()=>{this._drag=!1}),e.addEventListener("wheel",t=>{t.preventDefault();const n=t.deltaY>0?.88:1.14;this._zoom=Math.max(.15,Math.min(6,this._zoom*n)),this._raf||this.render()},{passive:!1}),e.addEventListener("click",t=>{var a;if(this._drag)return;const n=e.getBoundingClientRect(),s=(t.clientX-n.left-e.width/2-this._pan.x)/this._zoom,r=(t.clientY-n.top-e.height/2-this._pan.y)/this._zoom;let o=null;for(const c of this._nodes)if(Math.hypot(c.x-s,c.y-r)<14){o=c;break}this._selected=o,(a=this._onSelect)==null||a.call(this,o),this._raf||this.render()})}}function sx(i,e,t){const n=document.getElementById("network-map-overlay");if(!n)return;n.classList.add("visible");const s=document.getElementById("network-map-canvas");s.width=s.offsetWidth||800,s.height=s.offsetHeight||560;const r=e.buildMapFor(t,i),o=new ix(s,e,t);o.load(r);const a=document.getElementById("nm-node-panel");o.onSelect(h=>{var u;if(!h||h.perception==="blurred"){a.innerHTML=h?'<div class="nm-panel-blurred">🔒 Unknown node<br><small>Invite required</small></div>':"";return}a.innerHTML=`
      <div class="nm-panel-title">${h.isMe?"👤 You":"🔵 "+h.id}</div>
      <div class="nm-panel-row"><span>Visibility</span><span class="nm-badge nm-badge-${h.visibility}">${h.visibility}</span></div>
      <div class="nm-panel-row"><span>Depth</span><span>d${h.depth??0}</span></div>
      <div class="nm-panel-row"><span>Realities</span><span>${((u=h.realities)==null?void 0:u.length)??0}</span></div>
      ${h.isBridge?'<div class="nm-panel-bridge">🌉 Bridge node</div>':""}
    `});const c=document.getElementById("nm-close"),l=()=>{n.classList.remove("visible"),o.stop()};c.onclick=l,n.addEventListener("keydown",h=>{h.key==="Escape"&&l()})}const Ba=8,za=18,rx=.08;class ox{constructor(){this._ctx=null,this._stream=null,this._gains=new Map,this._muted=!1,this._active=!1,this._onStateChange=null}async start(e){if(this._active)return!0;try{this._stream=await navigator.mediaDevices.getUserMedia({audio:{echoCancellation:!0,noiseSuppression:!0,sampleRate:48e3},video:!1}),this._ctx=new AudioContext,this._active=!0;const[t]=this._stream.getAudioTracks();return e.addVoiceTrack(t,this._stream),e.onVoiceTrack((n,s,r)=>{if(n.kind!=="audio")return;const o=this._ctx.createMediaStreamSource(new MediaStream([n])),a=this._ctx.createGain();a.gain.value=0,o.connect(a),a.connect(this._ctx.destination),this._gains.set(r,{gainNode:a,sourceNode:o})}),this._notify(),!0}catch(t){return console.warn("[ProximityVoice] mic access denied or unavailable:",t.message),!1}}stop(){var e,t;(e=this._stream)==null||e.getTracks().forEach(n=>n.stop()),this._gains.forEach(({gainNode:n,sourceNode:s})=>{try{s.disconnect(),n.disconnect()}catch{}}),this._gains.clear(),(t=this._ctx)==null||t.close(),this._active=!1,this._notify()}update(e,t){!this._active||!this._ctx||t.forEach((n,s)=>{const r=this._gains.get(s);if(!r)return;const o=n.position.x-e.x,a=n.position.z-e.z,c=Math.sqrt(o*o+a*a),l=c<=Ba?1:c>=za?0:1-(c-Ba)/(za-Ba);r.gainNode.gain.setTargetAtTime(l,this._ctx.currentTime,rx)})}removePeer(e){const t=this._gains.get(e);if(t){try{t.sourceNode.disconnect(),t.gainNode.disconnect()}catch{}this._gains.delete(e)}}toggleMute(){return this.setMuted(!this._muted),this._muted}setMuted(e){var t;this._muted=e,(t=this._stream)==null||t.getAudioTracks().forEach(n=>{n.enabled=!e}),this._notify()}get active(){return this._active}get muted(){return this._muted}onStateChange(e){this._onStateChange=e}_notify(){var e;(e=this._onStateChange)==null||e.call(this,{active:this._active,muted:this._muted})}static get HEAR_FAR(){return za}}const Rh=Object.fromEntries(Ac.map(i=>[i.id,"#"+i.color.toString(16).padStart(6,"0")])),ax={OUTSIDE:"#88cc66",LOBBY:"#aaaacc",OPS:"#ffaa44",FUN:"#44ffaa",DESIGN:"#ff6ba0",ENGINEERING:"#44aaff"},cx={OUTSIDE:"Outside",LOBBY:"Lobby",OPS:"Ops",FUN:"Fun",DESIGN:"Design",ENGINEERING:"Engineering"};class lx{constructor(e){this._onNavigate=e,this._peers=new Map,this._self={username:"",presetId:0,zone:"OUTSIDE"},this._el=this._build(),document.body.appendChild(this._el),this._render()}setSelf(e,t,n,s="available"){this._self={username:e,presetId:t,zone:n||"OUTSIDE",status:s},this._render()}updateSelfStatus(e){this._self.status=e,this._render()}addPeer(e,t,n=0,s="available"){this._peers.set(e,{username:t,presetId:n,x:0,z:0,zone:"OUTSIDE",status:s}),this._render()}movePeer(e,t,n){const s=this._peers.get(e);s&&(s.x=t,s.z=n,s.zone=Oo({x:t,z:n}),this._render())}updatePeerPreset(e,t){const n=this._peers.get(e);n&&(n.presetId=t,this._render())}updatePeerStatus(e,t){const n=this._peers.get(e);n&&(n.status=t,this._render())}removePeer(e){this._peers.delete(e),this._render()}updateSelfZone(e){this._self.zone=e||"OUTSIDE",this._render()}_build(){const e=document.createElement("div");return e.id="presence-panel",e.innerHTML=`
      <div class="pp-header">
        <span class="pp-title">WHO'S HERE</span>
        <span class="pp-count" id="pp-count">1</span>
      </div>
      <div class="pp-list" id="pp-list"></div>
    `,e}_render(){const e=this._el.querySelector("#pp-list"),t=this._el.querySelector("#pp-count");if(!e)return;const n=1+this._peers.size;t.textContent=n;const s=[];s.push(this._row({username:this._self.username||"You",presetId:this._self.presetId,zone:this._self.zone,status:this._self.status,isSelf:!0}));const r=[...this._peers.entries()].sort((o,a)=>{const c=o[1].zone,l=a[1].zone;return c!==l?c.localeCompare(l):o[1].username.localeCompare(a[1].username)});r.forEach(([o,a])=>{s.push(this._row({username:a.username,presetId:a.presetId,zone:a.zone,status:a.status,isSelf:!1,onClick:()=>{var c;return(c=this._onNavigate)==null?void 0:c.call(this,{x:a.x,z:a.z})}}))}),e.innerHTML=s.join(""),e.querySelectorAll(".pp-row[data-idx]").forEach(o=>{const a=parseInt(o.dataset.idx,10),c=r[a];c&&o.addEventListener("click",()=>{var l;return(l=this._onNavigate)==null?void 0:l.call(this,{x:c[1].x,z:c[1].z})})})}_row({username:e,presetId:t,zone:n,status:s="available",isSelf:r,onClick:o}){const c="#"+(Bi[t]??Bi[0]).outfit.toString(16).padStart(6,"0"),l=Rh[s]??Rh.available,h=ax[n]??"#888",u=cx[n]??n;return`
      <div class="pp-row ${r?"pp-self":"pp-peer"}"
           ${r?"":`data-idx="${e}"`}>
        <span class="pp-dot" style="background:${c}"></span>
        <span class="pp-status-dot" style="background:${l}" title="${s}"></span>
        <span class="pp-name">${hx(e)}${r?' <span class="pp-you">(you)</span>':""}</span>
        <span class="pp-zone" style="color:${h}">${u}</span>
        ${r?"":'<span class="pp-go" title="Walk to this person">→</span>'}
      </div>
    `}}function hx(i){return i.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}const{floor:oc,random:ux,sin:dx}=Math,zi="Trystero",mr=(i,e)=>Array(i).fill(void 0).map(e),fx="0123456789AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz",kr=i=>mr(i,()=>fx[oc(ux()*62)]??"").join(""),vn=kr(20),qs=Promise.all.bind(Promise),Zu=typeof window<"u",{entries:_i,fromEntries:Yu,keys:Gt,values:As}=Object,Ut=()=>{},qu="candidate",St=i=>(i!==null&&clearTimeout(i),null),ut=i=>new Error(`${zi}: ${i}`),Pc=(i,e)=>i instanceof Error&&i.message?i.message:typeof i=="string"&&i?i:ki(i??e),Ui=(i,e)=>i instanceof Error?i:ut(Pc(i,e)),px=new TextEncoder,mx=new TextDecoder,fi=i=>px.encode(i),Rs=i=>mx.decode(i),$u=i=>i.reduce((e,t)=>e+t.toString(16).padStart(2,"0"),""),gr=(...i)=>i.join("@"),gx=(i,e)=>{const t=[...i],n=()=>{const r=dx(e++)*1e4;return r-oc(r)};let s=t.length;for(;s;){const r=oc(n()*s--),o=t[s];t[s]=t[r],t[r]=o}return t},_x=(i,e,t,n=!1)=>{var s,r;return((s=i.relayConfig)==null?void 0:s.urls)||(n?gx(e,vx(i.appId)):e).slice(0,((r=i.relayConfig)==null?void 0:r.redundancy)??t)},ki=JSON.stringify,_r=i=>{try{return JSON.parse(i)}catch{throw ut(`failed to parse JSON: ${i}`)}},vx=(i,e=Number.MAX_SAFE_INTEGER)=>i.split("").reduce((t,n)=>t+n.charCodeAt(0),0)%e,Ch=3333,ms={};let dr=null,fr=null;const xx=()=>{dr||(dr=new Promise(i=>{fr=i}).finally(()=>{fr=null,dr=null}))},yx=()=>{fr==null||fr()},Sx=(i,e)=>{const t={},n=()=>{const s=new WebSocket(i);s.onclose=()=>{if(dr){dr.then(n);return}ms[i]??(ms[i]=Ch),setTimeout(n,ms[i]),ms[i]*=2},s.onmessage=r=>e(String(r.data)),t.socket=s,t.url=s.url,t.ready=new Promise(r=>s.onopen=()=>{r(t),ms[i]=Ch}),t.send=r=>{s.readyState===1&&s.send(r)}};return n(),t},Mx=i=>{const e={},t=new WeakMap,n=r=>{const o=t.get(r);if(!o)throw ut("relay bookkeeping missing registration for relay client");return o};return{register:(r,o)=>(e[r]=o,t.set(o,r),o),keyOf:n,scoped:()=>{const r={},o=a=>r[a]??(r[a]={});return{forKey:o,forRelay:a=>o(n(a))}},getSockets:()=>Yu(_i(e).flatMap(([r,o])=>{const a=i(o);return a?[[r,a]]:[]}))}},Ex=()=>{if(Zu){const i=new AbortController;return addEventListener("online",yx,{signal:i.signal}),addEventListener("offline",xx,{signal:i.signal}),()=>i.abort()}return Ut},Lc="AES-GCM",ka={},wx=i=>btoa(String.fromCharCode.apply(null,Array.from(new Uint8Array(i)))),bx=i=>{const e=atob(i);return new Uint8Array(e.length).map((t,n)=>e.charCodeAt(n)).buffer},Ic=async(i,e)=>new Uint8Array(await crypto.subtle.digest(i,fi(e))),Vs=async i=>ka[i]??(ka[i]=Array.from(await Ic("SHA-1",i)).map(e=>e.toString(36)).join("")),Tx=async(i,e,t)=>crypto.subtle.importKey("raw",await crypto.subtle.digest({name:"SHA-256"},fi(`${i}:${e}:${t}`)),{name:Lc},!1,["encrypt","decrypt"]),Ax=async(i,e)=>$u(await Ic("SHA-256",`${zi}:${i}:${e}`)),Ku="$",Ju=",",Rx=async(i,e)=>{const t=crypto.getRandomValues(new Uint8Array(16));return t.join(Ju)+Ku+wx(await crypto.subtle.encrypt({name:Lc,iv:t},await i,fi(e)))},Cx=async(i,e)=>{const[t,n]=e.split(Ku);return Rs(await crypto.subtle.decrypt({name:Lc,iv:new Uint8Array((t==null?void 0:t.split(Ju).map(Number))??[])},await i,bx(n??"")))},Dc=57333,Px=18e4,Lx=20;var Ix=class{constructor(i){In(this,"pool",[]);In(this,"pooled",new Set);In(this,"leased",new Map);In(this,"recycling",new Set);In(this,"cleanupTimer",null);In(this,"active",!1);this.makeOffer=i}get isActive(){return this.active}warmup(){this.pool=[],this.pooled.clear(),mr(Lx,this.makeOffer).forEach(i=>this.push(i)),this.active=!0,this.cleanupTimer=setInterval(()=>{this.pool=this.pool.filter(i=>i.isDead?(this.pooled.delete(i),!1):!0)},Dc)}push(i){i.isDead||this.pooled.has(i)||this.leased.has(i)||(this.pool.push(i),this.pooled.add(i))}shift(i){const e=[];for(;e.length<i&&this.pool.length>0;){const t=this.pool.shift();if(!t)break;this.pooled.delete(t),e.push(t)}return e}claimLeased(i){const e=this.leased.get(i);e&&(St(e),this.leased.delete(i))}recycle(i){if(!(i.isDead||this.recycling.has(i))){if(i.connection.remoteDescription){i.destroy();return}if(!this.active){i.destroy();return}this.recycling.add(i),i.setHandlers({connect:Ut,close:Ut,error:Ut}),i.getOffer(!0).then(e=>{if(!e||e.type!=="offer"||i.isDead||!this.active){i.destroy();return}this.push(i)}).catch(()=>i.destroy()).finally(()=>this.recycling.delete(i))}}reclaimLeased(i){const e=this.leased.get(i);e&&(St(e),this.leased.delete(i),this.recycle(i))}lease(i){this.claimLeased(i),this.leased.set(i,setTimeout(()=>{this.leased.delete(i),this.recycle(i)},Px))}checkout(i,e,t){const n=this.shift(i),s=Math.max(0,i-n.length);s>0&&n.push(...mr(s,this.makeOffer));const r=async(o,a=!1)=>{try{const c=await t(o);return e?(this.lease(o),{peer:o,offer:c,claim:()=>this.claimLeased(o),reclaim:()=>this.reclaimLeased(o)}):{peer:o,offer:c}}catch(c){if(this.claimLeased(o),this.pooled.delete(o),o.destroy(),!a)return r(this.makeOffer(),!0);throw c}};return qs(n.map(o=>r(o)))}getOffers(i,e){return this.checkout(i,!0,e)}destroy(){this.active=!1,this.cleanupTimer&&(clearInterval(this.cleanupTimer),this.cleanupTimer=null),this.pool.forEach(i=>i.destroy()),this.pool=[],this.pooled.clear(),this.leased.forEach((i,e)=>{St(i),e.destroy()}),this.leased.clear(),this.recycling.forEach(i=>i.destroy()),this.recycling.clear()}};const Ha=ut("incorrect password for overlapping room"),Dx=(i,e,t)=>{const n=o=>Ic("SHA-256",`${o}:${i}:${e}:${t}`).then($u),s=async(o,a,c)=>{if(!i)return;if(c){const h=kr(36);await o({__trystero_pw:"challenge",c:h});const{data:u}=await a();if(!u||typeof u!="object"||u.__trystero_pw!=="response"||typeof u.h!="string")throw Ha;const d=await n(h);if(u.h!==d)throw Ha;return}const{data:l}=await a();if(!l||typeof l!="object"||l.__trystero_pw!=="challenge"||typeof l.c!="string")throw Ha;await o({__trystero_pw:"response",h:await n(l.c)})};return{run:s,compose:o=>i||o?async(a,c,l,h)=>{await s(c,l,h),await(o==null?void 0:o(a,c,l,h))}:void 0}},Nx=15e3,Ux=5e3,Ph="icegatheringstatechange",sr="offer",Ox="answer",Fx=/out of range/i,Lh=i=>i.replace(/ (\S+\.local) (\d+) typ host/g," 127.0.0.1 $2 typ host");var Ih=(i,{trickleIce:e,rtcConfig:t,rtcPolyfill:n,turnConfig:s,_test_only_mdnsHostFallbackToLoopback:r})=>{const o=new(n??RTCPeerConnection)({iceServers:Bx.concat(s??[]),...t}),a={},c=[],l=[],h=e!==!1,u=[],d=[];let f=!1,g=!1,v=null,m=null,p=!1;const T=()=>m=St(m),y=()=>{var O;p||(p=!0,T(),(O=a.close)==null||O.call(a))},w=O=>{a.signal?a.signal(O):c.push(O)},I=O=>{const k=a.signal;a.signal=se=>{k==null||k(se),O(se)},c.length>0&&c.splice(0).forEach(se=>{var ge;return(ge=a.signal)==null?void 0:ge.call(a,se)})},R=O=>r?Lh(O):O,E=O=>{if(!r||typeof O.candidate!="string")return O;const k=Lh(O.candidate);return k===O.candidate?O:{...O,candidate:k}},D=O=>{var k,se;return{type:((k=O.localDescription)==null?void 0:k.type)??sr,sdp:R(((se=O.localDescription)==null?void 0:se.sdp)??"")}},M=()=>{var k,se;const O=(k=o.remoteDescription)==null?void 0:k.sdp;return O?((se=O.match(/a=ice-ufrag:([^\s]+)/))==null?void 0:se[1])??null:null},x=()=>{var O,k;return(((k=(O=o.remoteDescription)==null?void 0:O.sdp)==null?void 0:k.match(/^m=/gm))??[]).length},P=O=>{if(!o.remoteDescription)return!1;const k=x();if(typeof O.sdpMLineIndex=="number"&&k>0&&O.sdpMLineIndex>=k)return!1;const se=M();return!(se&&O.usernameFragment&&O.usernameFragment!==se)},Z=async O=>{try{return await o.addIceCandidate(O),!0}catch(k){if(k instanceof Error&&Fx.test(k.message)&&typeof O.sdpMLineIndex=="number")return!1;throw k}},X=async()=>{if(!o.remoteDescription||u.length===0)return;const O=u.splice(0),k=[];for(const se of O){if(!P(se)){k.push(se);continue}await Z(se)||k.push(se)}k.length>0&&u.push(...k)},Q=async O=>{if(P(O)){await Z(O)||u.push(O);return}u.push(O)},ie=O=>{O.binaryType="arraybuffer",O.bufferedAmountLowThreshold=65535,O.onmessage=k=>{const se=k.data;a.data?a.data(se):l.push(se)},O.onopen=()=>{var k;return(k=a.connect)==null?void 0:k.call(a)},O.onclose=y,O.onerror=({error:k})=>{var se;return(se=a.error)==null?void 0:se.call(a,Ui(k,"data channel error"))}},ne=async O=>{let k=null;try{await Promise.race([new Promise(se=>{const ge=()=>{O.iceGatheringState==="complete"&&(O.removeEventListener(Ph,ge),se())};O.addEventListener(Ph,ge),ge()}),new Promise(se=>{k=setTimeout(se,Nx)})])}finally{St(k)}return D(O)},z=async()=>{const O=h?D(o):await ne(o);return w(O),O};i?(v=o.createDataChannel("data"),ie(v)):o.ondatachannel=({channel:O})=>{v=O,ie(O)};const V=async(O=!1)=>{var k,se;if(o.connectionState!=="closed")try{return f=!0,O&&(o.signalingState!=="stable"&&o.signalingState!=="closed"&&((k=o.localDescription)==null?void 0:k.type)===sr&&await o.setLocalDescription({type:"rollback"}),typeof o.restartIce=="function"&&o.restartIce()),await o.setLocalDescription(O?await o.createOffer({iceRestart:!0}):void 0),await z()}catch(ge){(se=a.error)==null||se.call(a,Ui(ge,"failed to create local offer"))}finally{f=!1}};o.onnegotiationneeded=async()=>V(!1),o.onicecandidate=({candidate:O})=>{if(!h||!O)return;const k=E(typeof O.toJSON=="function"?O.toJSON():{candidate:O.candidate,sdpMid:O.sdpMid,sdpMLineIndex:O.sdpMLineIndex,usernameFragment:O.usernameFragment});w({type:qu,sdp:JSON.stringify(k)})},o.onconnectionstatechange=()=>{if(o.connectionState==="connected"||o.connectionState==="connecting"){T();return}if(o.connectionState==="disconnected"){m||(m=setTimeout(()=>{m=null,o.connectionState==="disconnected"&&y()},Ux));return}(o.connectionState==="failed"||o.connectionState==="closed")&&y()},o.ontrack=O=>{var se,ge;const k=O.streams[0];if(k){if(!a.track&&!a.stream){d.push({track:O.track,stream:k});return}(se=a.track)==null||se.call(a,O.track,k),(ge=a.stream)==null||ge.call(a,k)}},o.onremovestream=O=>{var k;return(k=a.stream)==null?void 0:k.call(a,O.stream)};const he=i?new Promise(O=>I(k=>{k.type===sr&&O(k)})):Promise.resolve();return i&&queueMicrotask(()=>{var O;!f&&o.signalingState==="stable"&&!o.localDescription&&o.connectionState!=="closed"&&((O=o.onnegotiationneeded)==null||O.call(o,new Event("negotiationneeded")))}),{created:Date.now(),connection:o,get channel(){return v},get isDead(){return o.connectionState==="closed"},getOffer:async(O=!1)=>{var k;if(i)return O?V(!0):((k=o.localDescription)==null?void 0:k.type)===sr?h?D(o):ne(o):he},async signal(O){var k,se,ge;if(O.type==="candidate"){try{const Y=JSON.parse(O.sdp);Y&&typeof Y=="object"&&await Q(E(Y))}catch(Y){(k=a.error)==null||k.call(a,Ui(Y,"failed to parse remote candidate"))}return}if(!((v==null?void 0:v.readyState)==="open"&&!((se=O.sdp)!=null&&se.includes("a=rtpmap"))))try{const Y={...O,sdp:R(O.sdp)};if(O.type===sr){if(f||o.signalingState!=="stable"&&!g){if(i)return;await qs([o.setLocalDescription({type:"rollback"}),o.setRemoteDescription(Y)])}else await o.setRemoteDescription(Y);return await X(),await o.setLocalDescription(),await z()}if(O.type===Ox){g=!0;try{await o.setRemoteDescription(Y),await X()}finally{g=!1}}}catch(Y){(ge=a.error)==null||ge.call(a,Ui(Y,"failed to apply remote signal"))}},sendData:O=>v==null?void 0:v.send(O),destroy:()=>{T(),v==null||v.close(),o.close(),f=!1,g=!1,y()},setHandlers:O=>{const{signal:k,...se}=O;Object.assign(a,se),a.data&&l.length>0&&l.splice(0).forEach(ge=>{var Y;return(Y=a.data)==null?void 0:Y.call(a,ge)}),k&&I(k),(a.track||a.stream)&&d.length>0&&d.splice(0).forEach(({track:ge,stream:Y})=>{var le,me;(le=a.track)==null||le.call(a,ge,Y),(me=a.stream)==null||me.call(a,Y)})},offerPromise:he,addStream:O=>O.getTracks().forEach(k=>o.addTrack(k,O)),removeStream:O=>o.getSenders().filter(k=>k.track&&O.getTracks().includes(k.track)).forEach(k=>o.removeTrack(k)),addTrack:(O,k)=>o.addTrack(O,k),removeTrack:O=>{const k=o.getSenders().find(se=>se.track===O);k&&o.removeTrack(k)},replaceTrack:(O,k)=>{const se=o.getSenders().find(ge=>ge.track===O);if(se)return se.replaceTrack(k)}}};const Bx=[...mr(3,(i,e)=>`stun:stun${e||""}.l.google.com:19302`),"stun:stun.cloudflare.com:3478"].map(i=>({urls:i})),zx=Object.getPrototypeOf(Uint8Array),wo=32,kx=2,ju=0,cr=ju+wo,ac=cr+kx,bo=ac+1,To=bo+1,Ri=16*2**10-To,rr=255,Hx=65535,Dh="bufferedamountlow",Nh="close",Uh="error",Oh="beforeunload",Gx=1e4,Vx=1e4,ii=i=>"@_"+i,lr=new Set,Fh=()=>lr.forEach(i=>i()),Wx=i=>(lr.add(i),lr.size===1&&addEventListener(Oh,Fh),()=>{lr.delete(i),lr.size||removeEventListener(Oh,Fh)}),Xx=i=>i instanceof ArrayBuffer?new Uint8Array(i):new Uint8Array(i.buffer,i.byteOffset,i.byteLength),Zx=i=>{const e=Pc(i,"unknown error");return e.startsWith("handshake ")?e:`handshake failed: ${e}`},Yx=(i,e=Vx)=>i.readyState!=="open"||i.bufferedAmount<=i.bufferedAmountLowThreshold?Promise.resolve(i.readyState==="open"):new Promise(t=>{let n=!1,s=null;const r=c=>{n||(n=!0,i.removeEventListener(Dh,o),i.removeEventListener(Nh,a),i.removeEventListener(Uh,a),St(s),t(c))},o=()=>r(!0),a=()=>r(!1);if(i.addEventListener(Dh,o),i.addEventListener(Nh,a),i.addEventListener(Uh,a),s=setTimeout(()=>r(!1),e),i.readyState!=="open"){r(!1);return}i.bufferedAmount<=i.bufferedAmountLowThreshold&&r(!0)});var qx=(i,e,t,{onPeerHandshake:n,onHandshakeError:s,handshakeTimeoutMs:r=Gx}={})=>{const o={},a={},c={},l={},h={},u={},d={},f={},g={},v={},m=new WeakMap,p=new WeakMap,T={onPeerJoin:Ut,onPeerLeave:Ut,onPeerStream:Ut,onPeerTrack:Ut};let y=Ut;const w=(B,S,{includePending:_=!1}={})=>(B?Array.isArray(B)?B:[B]:Gt(_?o:a)).flatMap(A=>{const N=_?o[A]:a[A];return N?[Promise.resolve(S(A,N))]:(console.warn(`${zi}: no peer with id ${A} found`),[])}),I=(B,S,_,A,N,G={})=>{const q={k:S,...G,..._===void 0?{}:{m:_}};return w(B,async(J,ce)=>{await A(q,J),N(ce)})},R=B=>S=>{let _=B.get(S);return _||(_=kr(20),B.set(S,_)),_},E=R(m),D=R(p),M=B=>o[B]??null,x=(B,S,_,A)=>{var N,G,q,J;a[B]&&((G=(N=M(B))==null?void 0:N.__trysteroSetRemoteStreamByKey)==null||G.call(N,S,_),typeof _.id=="string"&&((J=(q=M(B))==null?void 0:q.__trysteroSetRemoteStreamById)==null||J.call(q,_.id,_)),T.onPeerStream(_,B,A))},P=(B,S,_,A,N)=>{var G,q,J,ce,fe,Le;a[B]&&((q=(G=M(B))==null?void 0:G.__trysteroSetRemoteTrackByKey)==null||q.call(G,S,_,A),typeof A.id=="string"&&((ce=(J=M(B))==null?void 0:J.__trysteroSetRemoteStreamById)==null||ce.call(J,A.id,A)),typeof _.id=="string"&&((Le=(fe=M(B))==null?void 0:fe.__trysteroSetRemoteTrackById)==null||Le.call(fe,_.id,_,A)),T.onPeerTrack(_,A,B,N))},Z=(B,S=ut("peer disconnected"))=>{var N;const _=c[B],A=Ui(S,"peer disconnected");_&&(St(_.handshakeTimer),_.pendingHandshakePayloads.length=0,_.handshakeWaiters.splice(0).forEach(G=>G.reject(A)),delete c[B]),delete o[B],delete a[B],delete u[B],(N=f[B])==null||N.splice(0).forEach(G=>G.reject(A)),delete f[B],delete g[B],delete v[B]},X=(B,S,_)=>{const A=o[B];if(!A||S&&A!==S)return;const N=!!a[B];Z(B,_),A.destroy(),N&&T.onPeerLeave(B),e(B)},Q=(B,S={})=>{const _=h[B];if(l[B]&&_){const J=l[B].options;if(J.sendToPending!==!!S.sendToPending||J.receiveWhilePending!==!!S.receiveWhilePending)throw ut(`action type "${B}" cannot be redefined`);return _}if(!B)throw ut("action type argument is required");const A=fi(B);if(A.byteLength>wo)throw ut(`action type string "${B}" (${A.byteLength}b) exceeds byte limit (${wo}). Hint: choose a shorter name.`);const N={sendToPending:!!S.sendToPending,receiveWhilePending:!!S.receiveWhilePending},G=new Uint8Array(wo);G.set(A);let q=0;return l[B]={onComplete:Ut,onProgress:Ut,setOnComplete:J=>{l[B].onComplete=J;const ce=d[B];ce!=null&&ce.length&&(delete d[B],ce.forEach(({payload:fe,peerId:Le,metadata:ue})=>J(fe,Le,ue)))},setOnProgress:J=>{l[B].onProgress=J},send:async(J,ce,fe,Le)=>{const ue=typeof J;if(ue==="undefined")throw ut("action data cannot be undefined");const we=ue!=="string",j=J instanceof Blob,re=j||J instanceof ArrayBuffer||J instanceof zx,te=fe!==void 0,xe=re?Xx(j?await J.arrayBuffer():J):fi(we?ki(J):J),Ae=te?fi(ki(fe)):null,Fe=Math.ceil(xe.byteLength/Ri)+(te?1:0)||1,L=mr(Fe,(ye,ee)=>{const ae=ee===Fe-1,de=!!(te&&ee===0),Ie=new Uint8Array(To+(de?(Ae==null?void 0:Ae.byteLength)??0:ae?xe.byteLength-Ri*(Fe-(te?2:1)):Ri));return Ie.set(G),Ie.set([q>>8,q&rr],cr),Ie.set([Number(ae)|Number(de)<<1|Number(re)<<2|Number(we)<<3],ac),Ie.set([Math.round((ee+1)/Fe*rr)],bo),Ie.set(te?de?Ae??new Uint8Array:xe.subarray((ee-1)*Ri,ee*Ri):xe.subarray(ee*Ri,(ee+1)*Ri),To),Ie});return q=q+1&Hx,await qs(w(ce,async(ye,ee)=>{const{channel:ae}=ee;let de=0;for(;de<Fe;){const Ie=L[de];if(!Ie||ae&&ae.bufferedAmount>ae.bufferedAmountLowThreshold&&!await Yx(ae))break;const Je=N.sendToPending?o[ye]:a[ye];if(!Je||Je!==ee)break;ee.sendData(Ie),de++;const mt=Ie[bo]??rr;Le==null||Le(mt/rr,ye,fe)}},{includePending:N.sendToPending})),[]},options:N},h[B]=[l[B].send,l[B].setOnComplete,l[B].setOnProgress]},ie=B=>Q(B),ne=(B,S)=>{var xe,Ae;const _=c[B];if(!_)return;const A=new Uint8Array(S),N=Rs(A.subarray(ju,cr)).replaceAll("\0",""),G=l[N];if(!_.isActive&&!(G!=null&&G.options.receiveWhilePending))return;const q=(A[cr]??0)<<8|(A[cr+1]??0),J=A[ac]??0,ce=A[bo]??0,fe=A.subarray(To),Le=!!(J&1),ue=!!(J&2),we=!!(J&4),j=!!(J&8);u[B]??(u[B]={}),(xe=u[B])[N]??(xe[N]={});const re=(Ae=u[B][N])[q]??(Ae[q]={chunks:[]});if(ue?re.meta=_r(Rs(fe)):re.chunks.push(fe),G==null||G.onProgress(ce/rr,B,re.meta),!Le)return;const te=new Uint8Array(re.chunks.reduce((Fe,L)=>Fe+L.byteLength,0));if(re.chunks.reduce((Fe,L)=>(te.set(L,Fe),Fe+L.byteLength),0),delete u[B][N][q],we)G?G.onComplete(te,B,re.meta):(d[N]??(d[N]=[])).push({payload:te,peerId:B,...re.meta===void 0?{}:{metadata:re.meta}});else{const Fe=Rs(te),L=j?_r(Fe):Fe;G?G.onComplete(L,B,re.meta):(d[N]??(d[N]=[])).push({payload:L,peerId:B,...re.meta===void 0?{}:{metadata:re.meta}})}},z=async()=>{await Ce(""),await new Promise(B=>setTimeout(B,99)),_i(o).forEach(([B,S])=>{S.destroy(),Z(B,ut("room left"))}),y(),t()},[V,he]=Q(ii("ping")),[O,k]=Q(ii("pong")),[se,ge]=Q(ii("signal")),[Y,le]=Q(ii("stream")),[me,ve]=Q(ii("track")),[Ce,Ne]=Q(ii("leave"),{sendToPending:!0,receiveWhilePending:!0}),[We,F]=Q(ii("hsdata"),{sendToPending:!0,receiveWhilePending:!0}),[Ve,Be]=Q(ii("hsready"),{sendToPending:!0,receiveWhilePending:!0}),et=(B,S)=>{const _=c[B];!_||S&&_.peer!==S||_.isActive||!_.didLocalHandshakePass||!_.didReceiveRemoteReady||(_.isActive=!0,a[B]=_.peer,_.handshakeTimer=St(_.handshakeTimer),T.onPeerJoin(B))},Re=(B,S,_)=>{const A=c[B];if(!A||A.peer!==S)return;const N=Zx(_);s==null||s(B,N),X(B,S,ut(N))},qe=(B,S)=>{const _=c[B];!_||_.peer!==S||_.isActive||(_.didLocalHandshakePass=!0,Ve("",B).catch(A=>Re(B,S,ut(`failed sending handshake readiness: ${Pc(A,"unknown send failure")}`))),et(B,S))},Ge=(B,S)=>{const _=c[B];if(!_||_.peer!==S)return;_.handshakeTimer=setTimeout(()=>Re(B,S,ut(`handshake timed out after ${r}ms`)),r);const A=async(q,J)=>{await We(q,B,J)},N=()=>new Promise((q,J)=>{const ce=c[B];if(!ce||ce.peer!==S){J(ut("peer disconnected during handshake"));return}const fe=ce.pendingHandshakePayloads.shift();if(fe){q(fe);return}ce.handshakeWaiters.push({resolve:q,reject:Le=>J(Le)})}),G=vn<B;Promise.resolve(n==null?void 0:n(B,A,N,G)).then(()=>qe(B,S)).catch(q=>Re(B,S,Ui(q,"handshake failed")))},ze=B=>B&&typeof B=="object"&&!Array.isArray(B)&&typeof B.k=="string"?{key:B.k,...typeof B.s=="string"?{streamId:B.s}:{},...typeof B.t=="string"?{trackId:B.t}:{},...Object.hasOwn(B,"m")?{metadata:B.m}:{}}:null;return he((B,S)=>O("",S)),k((B,S)=>{var A;const _=f[S];(A=_==null?void 0:_.shift())==null||A.resolve(),_&&!_.length&&delete f[S]}),ge((B,S)=>{var _;a[S]&&((_=o[S])==null||_.signal(B))}),le((B,S)=>{var G,q;if(!a[S])return;const _=ze(B);if(!_)return;const A=M(S),N=((G=A==null?void 0:A.__trysteroGetRemoteStreamByKey)==null?void 0:G.call(A,_.key))??(_.streamId?(q=A==null?void 0:A.__trysteroGetRemoteStreamById)==null?void 0:q.call(A,_.streamId):void 0);if(N){x(S,_.key,N,_.metadata);return}(g[S]??(g[S]=[])).push(_)}),ve((B,S)=>{var G,q;if(!a[S])return;const _=ze(B);if(!_)return;const A=M(S),N=((G=A==null?void 0:A.__trysteroGetRemoteTrackByKey)==null?void 0:G.call(A,_.key))??(_.trackId?(q=A==null?void 0:A.__trysteroGetRemoteTrackById)==null?void 0:q.call(A,_.trackId):void 0);if(N){P(S,_.key,N.track,N.stream,_.metadata);return}(v[S]??(v[S]=[])).push(_)}),Ne((B,S)=>X(S,void 0,ut("peer left room"))),F((B,S,_)=>{const A=c[S];if(!A||A.isActive)return;const N=_===void 0?{data:B}:{data:B,metadata:_},G=A.handshakeWaiters.shift();if(G){G.resolve(N);return}A.pendingHandshakePayloads.push(N)}),Be((B,S)=>{const _=c[S];!_||_.isActive||(_.didReceiveRemoteReady=!0,et(S))}),i((B,S)=>{const _=o[S];if(_){if(_===B)return;_.destroy(),Z(S,ut("peer replaced"))}o[S]=B,c[S]={peer:B,isActive:!1,didLocalHandshakePass:!1,didReceiveRemoteReady:!1,handshakeTimer:null,pendingHandshakePayloads:[],handshakeWaiters:[]},B.setHandlers({data:A=>ne(S,A),stream:A=>{var G;if(!a[S])return;const N=(G=g[S])==null?void 0:G.shift();N&&x(S,N.key,A,N.metadata)},track:(A,N)=>{var q;if(!a[S])return;const G=(q=v[S])==null?void 0:q.shift();G&&P(S,G.key,A,N,G.metadata)},signal:A=>{a[S]&&se(A,S)},close:()=>X(S,B,ut("peer disconnected")),error:A=>{console.error(`${zi} peer error:`,A),X(S,B,A)}}),Ge(S,B)}),Zu&&(y=Wx(()=>z().catch(Ut))),{makeAction:ie,leave:z,ping:async B=>{if(!a[B])throw ut(`no active peer with id ${B}`);const S=Date.now();return await new Promise((_,A)=>{const N=f[B]??(f[B]=[]),G=()=>{const J=f[B];if(!J)return;const ce=J.indexOf(q);ce>-1&&J.splice(ce,1),J.length||delete f[B]},q={resolve:()=>{G(),_()},reject:J=>{G(),A(J)}};N.push(q),V("",B).catch(J=>q.reject(Ui(J,"peer disconnected")))}),Date.now()-S},getPeers:()=>Yu(_i(a).map(([B,S])=>[B,S.connection])),addStream:(B,S,_)=>I(S,E(B),_,Y,A=>A.addStream(B),{s:B.id}),removeStream:(B,S)=>{w(S,(_,A)=>A.removeStream(B))},addTrack:(B,S,_,A)=>I(_,D(B),A,me,N=>N.addTrack(B,S),{s:S.id,t:B.id}),removeTrack:(B,S)=>{w(S,(_,A)=>A.removeTrack(B))},replaceTrack:(B,S,_,A)=>I(_,D(S),A,me,N=>N.replaceTrack(B,S),{t:B.id}),onPeerJoin:B=>{T.onPeerJoin=B,Gt(a).forEach(S=>B(S))},onPeerLeave:B=>T.onPeerLeave=B,onPeerStream:B=>T.onPeerStream=B,onPeerTrack:B=>T.onPeerTrack=B}};const Qu=1,ed=2,Bh=(i,e)=>{const t=fi(i),n=new Uint8Array(3+t.byteLength+e.byteLength);return n[0]=Qu,n[1]=t.byteLength>>>8&255,n[2]=t.byteLength&255,n.set(t,3),n.set(e,3+t.byteLength),n},$x=(i,e)=>{const t=fi(i),n=new Uint8Array(4+t.byteLength);return n[0]=ed,n[1]=Number(e),n[2]=t.byteLength>>>8&255,n[3]=t.byteLength&255,n.set(t,4),n},Kx=i=>{const e=new Uint8Array(i);if(e.byteLength<3)return null;if(e[0]===Qu){const s=(e[1]??0)<<8|(e[2]??0),r=3+s;return s<=0||e.byteLength<r?null:{type:"room",roomToken:Rs(e.subarray(3,r)),payload:e.subarray(r).slice().buffer}}if(e[0]!==ed||e.byteLength<4)return null;const t=(e[2]??0)<<8|(e[3]??0),n=4+t;return t<=0||e.byteLength<n?null:{type:"presence",roomToken:Rs(e.subarray(4,n)),isPresent:e[1]===1}},td=i=>{const{connection:e,channel:t}=i;return i.isDead||e.connectionState==="closed"||e.connectionState==="failed"||e.iceConnectionState==="closed"||e.iceConnectionState==="failed"||(t==null?void 0:t.readyState)==="closing"||(t==null?void 0:t.readyState)==="closed"},Jx=i=>{if(td(i))return"stale";const{channel:e}=i;return!e||e.readyState!=="open"?"transient":"live"};var jx=class{constructor(){In(this,"byApp",{});In(this,"roomPresenceHandlers",{})}getMap(i){var e;return(e=this.byApp)[i]??(e[i]={})}get(i,e){var t;return(t=this.byApp[i])==null?void 0:t[e]}isPeerStale(i){return td(i)}getHealth(i){return this.isPeerStale(i)?"stale":"live"}setRoomPresenceHandler(i,e){return this.roomPresenceHandlers[i]=e,()=>{this.roomPresenceHandlers[i]===e&&delete this.roomPresenceHandlers[i]}}sendRoomPresence(i,e,t){i.isClosing||i.peer.isDead||i.peer.sendData($x(e,t))}clear(i,e,{destroyPeer:t}){const n=this.byApp[i],s=n==null?void 0:n[e];if(!s||s.isClosing)return;s.idleTimer=St(s.idleTimer),s.isClosing=!0,t&&!s.peer.isDead&&s.peer.destroy();const r=As(s.bindings);s.bindings={},s.bindingsByToken={},s.controlRoomId=null,delete n[e],r.forEach(o=>{var a,c;(c=(a=o.handlers).close)==null||c.call(a),o.pendingData.length=0,o.pendingSendData.length=0,o.pendingTracks.length=0}),s.remoteStreamsByKey.clear(),s.remoteStreamsById.clear(),s.remoteTracksByKey.clear(),s.remoteTracksById.clear(),s.pendingDataByToken.clear(),s.remoteRoomTokens.clear(),Gt(n).length===0&&delete this.byApp[i]}register(i,e,t,n){const s=this.getMap(i),r=s[e];if(r){if(r.idleTimer=St(r.idleTimer),r.peer===t)return r;this.clear(i,e,{destroyPeer:!0})}const o={appId:i,peerId:e,peer:t,bindings:{},bindingsByToken:{},pendingDataByToken:new Map,remoteRoomTokens:new Set,idleTimer:null,controlRoomId:null,streamOwners:new Map,trackOwners:new Map,remoteStreamsByKey:new Map,remoteStreamsById:new Map,remoteTracksByKey:new Map,remoteTracksById:new Map,idleMs:n,isClosing:!1};return t.setHandlers({data:a=>this.dispatchData(o,a),signal:a=>this.dispatchSignal(o,a),close:()=>this.clear(i,e,{destroyPeer:!1}),error:a=>{console.error(`${zi} peer error:`,a),this.clear(i,e,{destroyPeer:!1})},track:(a,c)=>this.dispatchTrack(o,a,c)}),s[e]=o,o}bind(i,e,t,{onDetach:n}){const s=t.bindings[i];if(s)return t.idleTimer=St(t.idleTimer),{proxy:s.proxy,isNew:!1};const r={roomId:i,roomToken:null,roomTokenPromise:e,handlers:{},pendingData:[],pendingSendData:[],pendingTracks:[],detach:Ut,proxy:{}},o=()=>{t.bindings[i]&&(this.pruneRoomOwnership(t,i),delete t.bindings[i],r.roomToken&&t.bindingsByToken[r.roomToken]===r&&delete t.bindingsByToken[r.roomToken],t.controlRoomId===i&&(t.controlRoomId=Gt(t.bindings)[0]??null),n(),this.scheduleIdleTimer(t))},a={created:t.peer.created,get connection(){return t.peer.connection},get channel(){return t.peer.channel},get isDead(){return t.peer.isDead},getOffer:c=>t.peer.getOffer(c),signal:c=>t.peer.signal(c),sendData:c=>{if(!r.roomToken){r.pendingSendData.push(c);return}t.peer.sendData(Bh(r.roomToken,c))},destroy:()=>o(),setHandlers:c=>{const{signal:l,...h}=c;Object.assign(r.handlers,h),l&&(r.handlers.signal=l),this.flushBindingQueues(r)},offerPromise:t.peer.offerPromise,addStream:c=>{const l=t.streamOwners.get(c)??new Set,h=l.size===0;l.add(i),t.streamOwners.set(c,l),h&&t.peer.addStream(c)},removeStream:c=>{const l=t.streamOwners.get(c);l&&(l.delete(i),l.size===0&&(t.streamOwners.delete(c),t.peer.removeStream(c)))},addTrack:(c,l)=>{const h=t.trackOwners.get(c)??{stream:l,rooms:new Set},u=h.rooms.size===0;return h.stream=l,h.rooms.add(i),t.trackOwners.set(c,h),u?t.peer.addTrack(c,l):t.peer.connection.getSenders().find(d=>d.track===c)??t.peer.addTrack(c,l)},removeTrack:c=>{const l=t.trackOwners.get(c);l&&(l.rooms.delete(i),l.rooms.size===0&&(t.trackOwners.delete(c),t.peer.removeTrack(c)))},replaceTrack:(c,l)=>{const h=t.trackOwners.get(c);if(h){t.trackOwners.delete(c);const u=t.trackOwners.get(l)??{stream:h.stream,rooms:new Set};h.rooms.forEach(d=>u.rooms.add(d)),t.trackOwners.set(l,u)}return t.peer.replaceTrack(c,l)},__trysteroGetRemoteStreamByKey:c=>t.remoteStreamsByKey.get(c),__trysteroSetRemoteStreamByKey:(c,l)=>void t.remoteStreamsByKey.set(c,l),__trysteroGetRemoteStreamById:c=>t.remoteStreamsById.get(c),__trysteroSetRemoteStreamById:(c,l)=>void t.remoteStreamsById.set(c,l),__trysteroGetRemoteTrackByKey:c=>t.remoteTracksByKey.get(c),__trysteroSetRemoteTrackByKey:(c,l,h)=>void t.remoteTracksByKey.set(c,{track:l,stream:h}),__trysteroGetRemoteTrackById:c=>t.remoteTracksById.get(c),__trysteroSetRemoteTrackById:(c,l,h)=>void t.remoteTracksById.set(c,{track:l,stream:h})};return r.proxy=a,r.detach=o,t.bindings[i]=r,t.controlRoomId??(t.controlRoomId=i),t.idleTimer=St(t.idleTimer),e.then(c=>{if(t.isClosing||t.bindings[i]!==r)return;r.roomToken=c,t.bindingsByToken[c]=r;const l=t.pendingDataByToken.get(c);l!=null&&l.length&&(r.pendingData.push(...l),t.pendingDataByToken.delete(c)),r.pendingSendData.splice(0).forEach(h=>t.peer.sendData(Bh(c,h))),this.flushBindingQueues(r)}),{proxy:a,isNew:!0}}pruneRoomOwnership(i,e){i.streamOwners.forEach((t,n)=>{t.delete(e),t.size===0&&(i.streamOwners.delete(n),i.peer.removeStream(n))}),i.trackOwners.forEach((t,n)=>{t.rooms.delete(e),t.rooms.size===0&&(i.trackOwners.delete(n),i.peer.removeTrack(n))})}scheduleIdleTimer(i){i.isClosing||Gt(i.bindings).length>0||(i.idleTimer=St(i.idleTimer),i.idleTimer=setTimeout(()=>{var t;const e=(t=this.byApp[i.appId])==null?void 0:t[i.peerId];!e||Gt(e.bindings).length>0||this.clear(i.appId,i.peerId,{destroyPeer:!0})},i.idleMs))}getSignalBinding(i){if(i.controlRoomId){const t=i.bindings[i.controlRoomId];if(t!=null&&t.handlers.signal)return t}const e=As(i.bindings).find(t=>!!t.handlers.signal);return e?(i.controlRoomId=e.roomId,e):null}flushBindingQueues(i){const{handlers:e}=i;e.data&&i.pendingData.length>0&&i.pendingData.splice(0).forEach(t=>{var n;return(n=e.data)==null?void 0:n.call(e,t)}),(e.track||e.stream)&&i.pendingTracks.length&&i.pendingTracks.splice(0).forEach(({track:t,stream:n})=>{var s,r;(s=e.track)==null||s.call(e,t,n),(r=e.stream)==null||r.call(e,n)})}dispatchData(i,e){var s,r;const t=Kx(e);if(!t)return;if(t.type==="presence"){t.isPresent?i.remoteRoomTokens.add(t.roomToken):i.remoteRoomTokens.delete(t.roomToken),(r=(s=this.roomPresenceHandlers)[i.appId])==null||r.call(s,i.peerId,t.roomToken,t.isPresent);return}const n=i.bindingsByToken[t.roomToken];if(!n){const o=i.pendingDataByToken.get(t.roomToken)??[];o.push(t.payload),i.pendingDataByToken.set(t.roomToken,o);return}n.handlers.data?n.handlers.data(t.payload):n.pendingData.push(t.payload)}dispatchSignal(i,e){var t,n,s;(s=(t=this.getSignalBinding(i))==null?void 0:(n=t.handlers).signal)==null||s.call(n,e)}dispatchTrack(i,e,t){As(i.bindings).forEach(n=>{var s,r,o,a;if(n.handlers.track||n.handlers.stream){(r=(s=n.handlers).track)==null||r.call(s,e,t),(a=(o=n.handlers).stream)==null||a.call(o,t);return}n.pendingTracks.push({track:e,stream:t})})}};const Qx=23333,ey=12,ty=7533,ny=23333,cc="__legacy__",Bo="offer-placeholder",nd=(i,e,t,n,s,r)=>{i.toCipher(e).then(o=>{i.isLeaving()||!r()||n(t,ki(s(o.sdp)))})},iy=()=>({status:"idle",offerPeer:null,offerId:null,offerSdp:null,offerInitPromise:null,offerAnswered:!1,offerRelays:[],offerSignalRelays:[],offerSignalBacklog:[],offerRelayTimers:[],offerExpiryTimer:null,connectedPeer:null,connectedPeerUnhealthySinceMs:null,answeringExpiryTimer:null,answeringPeer:null,pendingCandidates:{}}),vr=(i,e)=>i[e]??(i[e]=iy()),cn=i=>{i.connectedPeer?i.status="connected":i.answeringPeer?i.status="answering":i.offerPeer||i.offerRelays.some(Boolean)?i.status="offering":i.status="idle"},Ao=(i,e)=>{i.answeringPeer===e&&(i.answeringExpiryTimer=St(i.answeringExpiryTimer),i.answeringPeer=null,cn(i))},lc=(i,e,t)=>{i.connectedPeer&&(i.connectedPeer.isDead||i.connectedPeer.destroy(),i.connectedPeer=null,i.connectedPeerUnhealthySinceMs=null,cn(i))},Nc=(i,e)=>{i.offerRelayTimers[e]=St(i.offerRelayTimers[e]),i.offerRelays[e]&&(i.offerRelays[e]=void 0,cn(i))},zh=(i,e)=>{(i==null?void 0:i.offerRelays[e])===Bo&&Nc(i,e)},sy=i=>{if(i.isDead||i.connection.connectionState==="closed")return!0;try{return!!i.connection.remoteDescription}catch{return!0}},xr=(i,e)=>{const t=i.offerAnswered;i.offerExpiryTimer=St(i.offerExpiryTimer),i.offerInitPromise=null,i.offerRelays.forEach((n,s)=>Nc(i,s)),i.offerRelays=[],i.offerSignalRelays=[],i.offerRelayTimers=[],i.offerSignalBacklog=[],i.offerPeer&&i.offerPeer!==i.connectedPeer&&(t||sy(i.offerPeer)?i.offerPeer.isDead||i.offerPeer.destroy():e.recycle(i.offerPeer)),i.offerPeer=null,i.offerId=null,i.offerSdp=null,i.offerAnswered=!1,cn(i)},ry=(i,e,t,n)=>{St(e.answeringExpiryTimer),e.answeringExpiryTimer=setTimeout(()=>{const s=i.peerStates[t];!s||s.connectedPeer||s.answeringPeer!==n||(n.destroy(),Ao(s,n))},ny)},oy=async(i,e,t)=>{const n=t?[t,cc]:[cc];for(const s of n){const r=i.pendingCandidates[s];if(r!=null&&r.length){delete i.pendingCandidates[s];for(const o of r)await e.signal(o)}}},id=(i,e,t,n=Dc)=>{St(e.offerExpiryTimer);const s=e.offerId;e.offerExpiryTimer=setTimeout(()=>{const r=i.peerStates[t];!r||r.connectedPeer||r.offerId!==s||xr(r,i.offerPool)},n)},ay=(i,e,t,n)=>e.offerPeer&&e.offerId&&e.offerSdp?Promise.resolve({peer:e.offerPeer,offer:e.offerSdp,offerId:e.offerId}):(e.offerInitPromise||(e.offerInitPromise=(async()=>{const s=(await i.offerPool.checkout(1,!1,i.encryptOffer))[0];if(!s)throw ut("failed to allocate offer peer");const{peer:r,offer:o}=s;e.offerPeer=r,e.offerId=kr(ey),e.offerSdp=o,e.offerAnswered=!1,e.offerSignalBacklog=[],cn(e);const a=()=>{e.offerPeer===r&&!e.connectedPeer&&xr(e,i.offerPool),i.disconnectPeer(r,t)};return r.setHandlers({connect:()=>i.connectPeer(r,t,n),signal:c=>{e.offerPeer===r&&(e.offerSignalBacklog.push(c),e.offerSignalRelays.forEach(l=>l==null?void 0:l(c)))},close:a,error:a}),id(i,e,t),{peer:r,offer:o,offerId:e.offerId}})().finally(()=>e.offerInitPromise=null)),e.offerInitPromise),cy=async(i,e,t,n,s)=>{if(n){i.attachSharedPeerToRoom(t,n);return}const r=i.peerStates[t];if(!r||r.connectedPeer||r.answeringPeer||r.offerAnswered){zh(r,e);return}if(r.offerRelays[e]!==Bo)return;const[o,a]=await qs([Vs(gr(i.rootTopicPlaintext,t)),ay(i,r,t,e)]);if(i.isLeaving())return;if(r.connectedPeer||r.answeringPeer||r.offerAnswered||r.offerRelays[e]!==Bo){zh(r,e);return}r.offerRelayTimers[e]=St(r.offerRelayTimers[e]),r.offerRelays[e]=!0,cn(r),r.offerRelayTimers[e]=setTimeout(()=>dy(i,t,e),(i.announceIntervals[e]??i.announceIntervalMs)*.9);let c=!1;r.offerSignalRelays[e]=l=>{c&&(i.isLeaving()||r.connectedPeer||r.offerPeer!==a.peer||r.offerId!==a.offerId||l.type!=="candidate"||nd(i,l,o,s,h=>({peerId:vn,offerId:a.offerId,candidate:h}),()=>!r.connectedPeer&&r.offerPeer===a.peer&&r.offerId===a.offerId))},s(o,ki({peerId:vn,offerId:a.offerId,offer:a.offer})),c=!0,r.offerSignalBacklog.forEach(l=>{var h,u;return(u=(h=r.offerSignalRelays)[e])==null?void 0:u.call(h,l)})},ly=async(i,e,t,n,s,r,o)=>{var f;const a=vr(i.peerStates,t);if(a.answeringPeer||a.offerAnswered)return;const c=!!(a.offerPeer||a.offerRelays.some(Boolean));if((c||r)&&vn<t)return;c&&xr(a,i.offerPool);const l=i.initPeer(!1,i.config);a.answeringPeer=l,ry(i,a,t,l),cn(a);const h=()=>{Ao(a,l),i.disconnectPeer(l,t)};l.setHandlers({connect:()=>i.connectPeer(l,t,e),close:h,error:h});let u;try{u=await i.toPlain({type:"offer",sdp:n})}catch{Ao(a,l),(f=i.onJoinError)==null||f.call(i,{error:"incorrect room password when decrypting offer",appId:i.appId,peerId:t,roomId:i.roomId});return}if(l.isDead){Ao(a,l);return}const d=await Vs(gr(i.rootTopicPlaintext,t));i.isLeaving()||(l.setHandlers({signal:g=>{i.isLeaving()||a.answeringPeer!==l||l.isDead||g.type!=="answer"&&g.type!=="candidate"||nd(i,g,d,o,v=>{const m={peerId:vn};return g.type==="answer"?m.answer=v:m.candidate=v,s&&(m.offerId=s),m},()=>a.answeringPeer===l&&!l.isDead)}}),await l.signal(u),await oy(a,l,s))},hy=async(i,e,t,n,s)=>{var u;let r;try{r=await i.toPlain({type:qu,sdp:t})}catch{return}const o=vr(i.peerStates,e),a=n&&(o!=null&&o.offerPeer)&&o.offerId===n?o.offerPeer:null,c=(o==null?void 0:o.answeringPeer)??null,l=!n&&(o!=null&&o.offerPeer)?o.offerPeer:null,h=s&&!s.isDead?s:a??c??l;if(!h||h.isDead){const d=n??cc;((u=o.pendingCandidates)[d]??(u[d]=[])).push(r);return}h.signal(r)},uy=async(i,e,t,n,s,r)=>{var a;let o;try{o=await i.toPlain({type:"answer",sdp:n})}catch{(a=i.onJoinError)==null||a.call(i,{error:"incorrect room password when decrypting answer",appId:i.appId,peerId:t,roomId:i.roomId});return}if(r)i.offerPool.claimLeased(r),r.setHandlers({connect:()=>i.connectPeer(r,t,e),close:()=>i.disconnectPeer(r,t)}),r.signal(o);else{const c=i.peerStates[t];if(!c||!c.offerPeer||c.offerAnswered||s&&c.offerId&&s!==c.offerId||c.offerPeer.isDead)return;c.offerAnswered=!0,id(i,c,t,Qx),c.offerPeer.signal(o)}},dy=(i,e,t)=>{const n=i.peerStates[e];!n||n.connectedPeer||n.offerRelays[t]&&Nc(n,t)},fy=i=>e=>async(t,n,s)=>{if(i.isLeaving())return;const r=typeof n=="string"?_r(n):n,o=typeof r.peerId=="string"?r.peerId:"",a=r.offer,c=r.answer,l=r.candidate,h=r.offerId,u=r.peer,d=r.hasOutgoingOffer===!0;if(o===vn)return;const f=i.peerStates[o],g=f==null?void 0:f.connectedPeer;if(g&&f){const y=Jx(g);if(y==="live"){f.connectedPeerUnhealthySinceMs=null;return}if(y==="stale")lc(f);else{const w=Date.now(),I=f.connectedPeerUnhealthySinceMs??w;if(f.connectedPeerUnhealthySinceMs=I,w-I<ty)return;lc(f)}}let v=i.sharedPeers.get(i.appId,o);v&&i.sharedPeers.getHealth(v.peer)==="stale"&&(i.sharedPeers.clear(i.appId,o,{destroyPeer:!0}),v=void 0);const m=!!(o&&!a&&!c&&!l),[p,T]=await qs([i.rootTopicP,i.selfTopicP]);if(!i.isLeaving()&&!(t!==p&&t!==T)){if(m&&!v){const y=vr(i.peerStates,o),w=vn<o;if(y.answeringPeer||y.connectedPeer||y.offerAnswered)return;if(!w&&!y.offerPeer){const I=await Vs(gr(i.rootTopicPlaintext,o));!i.isLeaving()&&!y.connectedPeer&&s(I,ki({peerId:vn}));return}if(y.offerRelays[e])return;y.offerRelays[e]=Bo,cn(y)}if(v&&(a||c||l)){if(v.bindings[i.roomId])return;i.attachSharedPeerToRoom(o,v);return}if(m)return cy(i,e,o,v,s);if(a)return ly(i,e,o,a,h,d,s);if(l)return hy(i,o,l,h,u);if(c)return uy(i,e,o,c,h,u)}},Ga=5333,py=[233,533,1333],my=123333;var gy=({init:i,subscribe:e,announce:t})=>{const n={},s={},r={},o={},a=new jx,c=()=>As(n).some(w=>Gt(w).length>0),l=w=>s[w]??(s[w]={}),h=w=>r[w]??(r[w]={}),u=(w,I,R)=>{a.getHealth(w.peer)==="live"&&a.sendRoomPresence(w,I,R)},d=(w,I)=>{_i(s[w]??{}).forEach(([R,E])=>{const{roomToken:D,roomTokenPromise:M}=E;if(D){u(I,D,!0);return}M.then(x=>{var P;((P=s[w])==null?void 0:P[R])===E&&E.roomToken===x&&(a.get(w,I.peerId)!==I||I.isClosing||u(I,x,!0))})})},f=(w,I,R)=>As(a.getMap(w)).forEach(E=>u(E,I,R)),g=w=>{o[w]||(o[w]=a.setRoomPresenceHandler(w,(I,R,E)=>{var x,P,Z;if(!E)return;const D=a.get(w,I),M=(x=r[w])==null?void 0:x[R];!D||!M||(Z=(P=s[w])==null?void 0:P[M])==null||Z.attachSharedPeerToRoom(I,D)}))},v=w=>{var I;n[w]&&Gt(n[w]).length>0||((I=o[w])==null||I.call(o),delete o[w],delete s[w],delete r[w])};let m=!1,p=[],T=null,y=Ut;return(w,I,R)=>{var S,_;if(!w)throw ut("requires a config map as the first argument");if(R&&typeof R!="object")throw ut("third argument must be a callbacks object");const{appId:E}=w,D=R==null?void 0:R.onJoinError,M=R==null?void 0:R.onPeerHandshake,x=R==null?void 0:R.handshakeTimeoutMs;if(!E)throw ut("config map is missing appId field");if(!I)throw ut("roomId argument required");if(x!==void 0&&(!Number.isFinite(x)||x<=0))throw ut("handshakeTimeoutMs must be a positive number");if((S=n[E])!=null&&S[I])return n[E][I];g(E);const P=gr(zi,E,I),Z=Vs(P),X=Vs(gr(P,vn)),Q=Tx(w.password??"",E,I),ie=Ax(E,I),ne=w._test_only_sharedPeerIdleMs??my;let z=!1;const V=A=>async N=>({type:N.type,sdp:await A(Q,N.sdp)}),he=V(Cx),O=V(Rx),k=a.getMap(E),se=()=>Ih(!0,w);T||(T=new Ix(se));const ge=T,Y=async A=>{const N=await A.getOffer(Date.now()-A.created>Dc);if(!N||N.type!=="offer")throw ut("failed to get offer for peer");return(await O(N)).sdp},le=(A,N)=>{const G=vr(Ce.peerStates,A);G.answeringExpiryTimer=St(G.answeringExpiryTimer),G.answeringPeer=null;const{proxy:q,isNew:J}=a.bind(I,ie,N,{onDetach:()=>{const ce=Ce.peerStates[A];(ce==null?void 0:ce.connectedPeer)===N.peer&&(ce.connectedPeer=null,ce.connectedPeerUnhealthySinceMs=null,cn(ce))}});G.connectedPeer=N.peer,G.connectedPeerUnhealthySinceMs=null,cn(G),J&&Be(q,A),xr(G,ge)},Ce={appId:E,roomId:I,config:w,peerStates:{},rootTopicPlaintext:P,rootTopicP:Z,selfTopicP:X,toPlain:he,toCipher:O,isLeaving:()=>z,onJoinError:D,sharedPeers:a,offerPool:ge,encryptOffer:Y,initPeer:Ih,connectPeer:(A,N,G)=>{if(z){A.destroy();return}const q=vr(Ce.peerStates,N);if(q.connectedPeer){const fe=k[N];if(fe&&q.connectedPeer===fe.peer&&fe.bindings[I])return;q.connectedPeer!==A&&!A.isDead&&A.destroy();return}let J=k[N];if(J&&a.getHealth(J.peer)==="stale"&&(a.clear(E,N,{destroyPeer:!0}),J=void 0),J&&J.peer!==A){A.isDead||A.destroy(),le(N,J);return}const ce=!J;J||(J=a.register(E,N,A,ne)),le(N,J),ce&&d(E,J)},disconnectPeer:(A,N)=>{if(z)return;const G=Ce.peerStates[N];(G==null?void 0:G.connectedPeer)===A&&lc(G)},attachSharedPeerToRoom:le,announceIntervals:[],announceIntervalMs:Ga},Ne=fy(Ce);if(!m){const A=i(w);ge.warmup(),p=(Array.isArray(A)?A:[A]).map(N=>Promise.resolve(N)),m=!0,y=(_=w.relayConfig)!=null&&_.manualReconnection?Ut:Ex()}Ce.announceIntervals=p.map(()=>Ga);const We=p.map(()=>0),F=[],Ve=p.map(async(A,N)=>e(await A,await Z,await X,Ne(N),G=>ge.getOffers(G,Y)));qs([Z,X]).then(([A,N])=>{if(z)return;const G=async(q,J)=>{if(z)return;const ce=await t(q,A,N);if(z)return;typeof ce=="number"&&(Ce.announceIntervals[J]=ce);const fe=We[J]??0;We[J]=fe+1;const Le=Ce.announceIntervals[J]??Ga,ue=py[fe];F[J]=setTimeout(()=>{G(q,J)},typeof ue=="number"?Math.min(Le,ue):Le)};Ve.forEach(async(q,J)=>{if(await q,z)return;const ce=await p[J];ce&&!z&&G(ce,J)})});let Be=Ut;const{compose:et}=Dx(w.password??"",E,I),Re=et(M),qe={...Re?{onPeerHandshake:Re}:{},...x===void 0?{}:{handshakeTimeoutMs:x},onHandshakeError:(A,N)=>D==null?void 0:D({error:N.replace(/^handshake failed: /,""),appId:E,peerId:A,roomId:I})};n[E]??(n[E]={});const Ge=l(E),ze=qx(A=>Be=A,A=>{if(z)return;const N=Ce.peerStates[A];N!=null&&N.connectedPeer&&(N.connectedPeer=null,cn(N))},()=>{var N,G;z=!0,Be=Ut;const A=(N=s[E])==null?void 0:N[I];A!=null&&A.roomToken&&(f(E,A.roomToken,!1),(G=r[E])==null||delete G[A.roomToken],r[E]&&!Gt(r[E]).length&&delete r[E]),s[E]&&(delete s[E][I],Gt(s[E]).length||delete s[E]),_i(Ce.peerStates).forEach(([q,J])=>{if(J.answeringExpiryTimer=St(J.answeringExpiryTimer),J.connectedPeer&&!J.connectedPeer.isDead){const ce=k[q];(!ce||ce.peer!==J.connectedPeer)&&J.connectedPeer.destroy()}J.answeringPeer&&!J.answeringPeer.isDead&&J.answeringPeer.destroy(),xr(J,ge),J.connectedPeer=null,J.answeringPeer=null,cn(J)}),n[E]&&(delete n[E][I],Gt(n[E]).length===0&&delete n[E]),F.forEach(St),Ve.forEach(async q=>{(await q)()}),!c()&&(m=!1,ge.destroy(),T=null,y(),v(E))},qe),B={roomToken:null,roomTokenPromise:ie,attachSharedPeerToRoom:le};return Ge[I]=B,ie.then(A=>{var N;z||((N=s[E])==null?void 0:N[I])!==B||(B.roomToken=A,h(E)[A]=I,As(k).forEach(G=>{G.remoteRoomTokens.has(A)&&le(G.peerId,G)}),f(E,A,!0))}),n[E][I]=ze}};const Hr=Mx(i=>i.socket),Va={},sd={},kh=Hr.scoped(),Wa=Hr.scoped(),_y=Hr.scoped(),or={},So={},Hh=Hr.scoped(),Cs={},_s={},En={},vy="announce",rd=20,od=3,Gh=1e4,xy=2e4,yy=12e4,Vh=4e3,Sy=3,My=async i=>{if(Va[i])return Va[i];const e=(await Vs(i)).slice(0,rd);return Va[i]=e,sd[e]=i,e},Wh=async(i,e,t)=>i.send(ki({action:vy,info_hash:await My(e),peer_id:vn,...t})),Xh=(i,e,t=!1)=>console.warn(`${zi}: torrent tracker ${t?"failure":"warning"} from ${i} - ${e}`),yr=i=>Cs[i]??(Cs[i]={}),Uc=i=>{delete Cs[i],delete _s[i]},Ey=(i,e)=>{var s;const t=Cs[i],n=t==null?void 0:t[e];if(n)return delete t[e],(s=n.claim)==null||s.call(n),!Gt(t).length&&!En[i]&&Uc(i),n},ad=(i,e)=>{var s;const t=Cs[i],n=t==null?void 0:t[e];n&&(delete t[e],(s=n.reclaim)==null||s.call(n),!Gt(t).length&&!En[i]&&Uc(i))},Zh=i=>{Gt(yr(i)).forEach(e=>ad(i,e)),Uc(i)},wy=i=>{const e=Date.now();_i(yr(i)).forEach(([t,n])=>{e-n.createdAt>yy&&ad(i,t)})},by=async(i,e)=>{for(;_s[i];)await _s[i];const t=(async()=>{wy(i);const n=yr(i),s=Gt(n).length,r=Math.max(0,od-s);r>0&&(await e(r)).forEach(o=>{n[kr(rd)]={...o,createdAt:Date.now()}})})().finally(()=>{_s[i]===t&&delete _s[i]});return _s[i]=t,await t,yr(i)},Ty=gy({init:i=>_x(i,Ry,Sy).map(e=>{const t=Hr.register(e,Sx(e,n=>{var l,h;const s=_r(n),r=s["failure reason"],o=s["warning message"],{interval:a}=s,c=s.info_hash?sd[s.info_hash]:void 0;if(r){Xh(t.url,r,!0);return}if(o&&Xh(t.url,o),a&&a*1e3>(or[t.url]??Gh)&&c&&Wa.forKey(e)[c]){const u=Math.min(a*1e3,xy),d=kh.forKey(e),f=Wa.forKey(e);d[c]&&clearInterval(d[c]),or[t.url]=u;const g=f[c];g&&(d[c]=setInterval(()=>{g()},u))}if((s.offer||s.answer)&&c&&s.offer_id){if(s.peer_id===vn)return;const u=`${c}:${s.offer?"offer":"answer"}:${s.offer_id}:${s.peer_id??""}`,d=Date.now(),f=So[u];if(typeof f=="number"&&d-f<Vh)return;So[u]=d,_i(So).forEach(([g,v])=>{d-v>Vh*6&&delete So[g]}),(h=(l=Hh.forKey(e))[c])==null||h.call(l,s)}}));return t.ready}),subscribe:(i,e,t,n,s)=>{const r=Hh.forRelay(i),o=Wa.forRelay(i),a=kh.forRelay(i),c=_y.forRelay(i),l=Symbol(e);c[e]=l,En[e]=(En[e]??0)+1;const h=d=>{if(d.offer&&d.peer_id&&d.offer_id)n(e,{offer:d.offer.sdp,peerId:d.peer_id,hasOutgoingOffer:Gt(yr(e)).length>0},(f,g)=>void Wh(i,e,{answer:{type:"answer",sdp:_r(g).answer},offer_id:d.offer_id,to_peer_id:d.peer_id}));else if(d.answer&&d.offer_id&&d.peer_id){const f=Ey(e,d.offer_id);f&&n(e,{answer:d.answer.sdp,peerId:d.peer_id,peer:f.peer},()=>{})}};r[e]=h;const u=async()=>{c[e]===l&&Wh(i,e,{numwant:od,offers:_i(await by(e,s)).map(([d,{offer:f}])=>({offer_id:d,offer:{type:"offer",sdp:f}}))})};return or[i.url]=Gh,o[e]=u,a[e]=setInterval(u,or[i.url]),u(),()=>{if(En[e]=Math.max(0,(En[e]??1)-1),En[e]||delete En[e],c[e]!==l){En[e]||Zh(e);return}const d=a[e];d&&(clearInterval(d),delete a[e]),r[e]===h&&delete r[e],o[e]===u&&delete o[e],delete c[e],En[e]||Zh(e)}},announce:i=>or[i.url]}),Ay=(i,e,t)=>Ty({...i,trickleIce:i.trickleIce??!1},e,t),Ry=["tracker.webtorrent.dev","tracker.openwebtorrent.com","tracker.btorrent.xyz","tracker.files.fm:7073/announce"].map(i=>"wss://"+i),hc="sw_id_v1",uc=i=>Array.from(i).map(e=>e.toString(16).padStart(2,"0")).join(""),Yh=i=>{const e=i.replace(/-/g,"+").replace(/_/g,"/"),t=atob(e);return Uint8Array.from(t,n=>n.charCodeAt(0))};class qh{constructor(e,t,n,s){this.peerId=e,this.displayName=t,this.isNew=s,this._priv=n}get shortId(){return this.peerId.slice(-8)}setName(e){this.displayName=e,cd()}async sign(e){const t=new TextEncoder().encode(e),n=await crypto.subtle.sign({name:"Ed25519"},this._priv,t);return uc(new Uint8Array(n))}}let Gn=null,pr=null;function cd(){if(!(!Gn||!pr))try{localStorage.setItem(hc,JSON.stringify({privJwk:pr,displayName:Gn.displayName}))}catch{}}async function Cy(){if(Gn)return Gn;const i=localStorage.getItem(hc);if(i)try{const{privJwk:n,displayName:s}=JSON.parse(i),r=await crypto.subtle.importKey("jwk",n,{name:"Ed25519"},!1,["sign"]),o=uc(Yh(n.x));return pr=n,Gn=new qh(o,s||"",r,!1),Gn}catch{localStorage.removeItem(hc)}const e=await crypto.subtle.generateKey({name:"Ed25519"},!0,["sign","verify"]);pr=await crypto.subtle.exportKey("jwk",e.privateKey);const t=uc(Yh(pr.x));return Gn=new qh(t,"",e.privateKey,!0),cd(),Gn}function ld(){return Gn}const Py="spacework-v1";function Ly(){return`sw-1-${window.location.hash.slice(1).trim().toLowerCase().replace(/[^a-z0-9-]/g,"-").replace(/-{2,}/g,"-").slice(0,40)||"main"}`}function Iy(){return window.location.hash.slice(1).trim()||"main"}function Dy(i){const e=i.trim().toLowerCase().replace(/[^a-z0-9-]/g,"-").replace(/-{2,}/g,"-")||"main";window.location.hash=e}var kt,Ls,Is,Ds,Wn,Ns,wr,br,Tr,Ar,Rr,Us,Cr,Pr,Lr,Ir,Dr,wt,Pi,si,dc;class Ny{constructor(e,t=0,n="available"){$e(this,wt);$e(this,kt,null);$e(this,Ls,"");$e(this,Is,0);$e(this,Ds,"available");$e(this,Wn,{});$e(this,Ns,null);$e(this,wr,null);$e(this,br,null);$e(this,Tr,null);$e(this,Ar,null);$e(this,Rr,null);$e(this,Us,null);$e(this,Cr,null);$e(this,Pr,null);$e(this,Lr,null);$e(this,Ir,null);$e(this,Dr,null);gt(this,Ls,e),gt(this,Is,t),gt(this,Ds,n)}async start(){const e=Ly();gt(this,kt,Ay({appId:Py},e)),[Kt(this,Ns)._,Kt(this,wr)._]=oe(this,kt).makeAction("intro"),[Kt(this,br)._,Kt(this,Tr)._]=oe(this,kt).makeAction("move"),[Kt(this,Ar)._,Kt(this,Rr)._]=oe(this,kt).makeAction("chat"),[Kt(this,Us)._,Kt(this,Cr)._]=oe(this,kt).makeAction("bye"),[Kt(this,Pr)._,Kt(this,Lr)._]=oe(this,kt).makeAction("avatar"),[Kt(this,Ir)._,Kt(this,Dr)._]=oe(this,kt).makeAction("status"),oe(this,kt).onPeerJoin(t=>{oe(this,Ns).call(this,je(this,wt,dc).call(this),t)}),oe(this,kt).onPeerLeave(t=>{je(this,wt,si).call(this,"PEER_LEAVE",{from:t})}),oe(this,wr).call(this,({identityId:t,username:n,presetId:s=0,status:r="available"},o)=>{const a=t;je(this,wt,si).call(this,"HELLO",{from:a,username:n,presetId:s,status:r}),oe(this,Ns).call(this,je(this,wt,dc).call(this),o)}),oe(this,Lr).call(this,({identityId:t,presetId:n},s)=>{je(this,wt,si).call(this,"AVATAR_CHANGE",{from:t,presetId:n})}),oe(this,Dr).call(this,({identityId:t,status:n},s)=>{je(this,wt,si).call(this,"STATUS_CHANGE",{from:t,status:n})}),oe(this,Tr).call(this,({identityId:t,pos:n},s)=>{je(this,wt,si).call(this,"MOVE",{from:t,pos:n})}),oe(this,Rr).call(this,({identityId:t,username:n,text:s,ts:r},o)=>{je(this,wt,si).call(this,"CHAT",{from:t,username:n,text:s,ts:r})}),oe(this,Cr).call(this,({identityId:t},n)=>{je(this,wt,si).call(this,"PEER_LEAVE",{from:t})})}stop(){var e;oe(this,Us)&&oe(this,Us).call(this,{identityId:je(this,wt,Pi).call(this)}),(e=oe(this,kt))==null||e.leave(),gt(this,kt,null)}addVoiceTrack(e,t){var n;(n=oe(this,kt))==null||n.addTrack(e,t)}onVoiceTrack(e){var t;(t=oe(this,kt))==null||t.onTrack((n,s,r)=>e(n,s,r))}move(e,t,n,s=0){var r;(r=oe(this,br))==null||r.call(this,{identityId:je(this,wt,Pi).call(this),pos:{x:e,y:t,z:n,ry:s}})}chat(e){var t;(t=oe(this,Ar))==null||t.call(this,{identityId:je(this,wt,Pi).call(this),username:oe(this,Ls),text:e,ts:Date.now()})}setAvatar(e){var t;gt(this,Is,e),(t=oe(this,Pr))==null||t.call(this,{identityId:je(this,wt,Pi).call(this),presetId:e})}setStatus(e){var t;gt(this,Ds,e),(t=oe(this,Ir))==null||t.call(this,{identityId:je(this,wt,Pi).call(this),status:e})}on(e,t){return oe(this,Wn)[e]||(oe(this,Wn)[e]=[]),oe(this,Wn)[e].push(t),()=>{oe(this,Wn)[e]=oe(this,Wn)[e].filter(n=>n!==t)}}}kt=new WeakMap,Ls=new WeakMap,Is=new WeakMap,Ds=new WeakMap,Wn=new WeakMap,Ns=new WeakMap,wr=new WeakMap,br=new WeakMap,Tr=new WeakMap,Ar=new WeakMap,Rr=new WeakMap,Us=new WeakMap,Cr=new WeakMap,Pr=new WeakMap,Lr=new WeakMap,Ir=new WeakMap,Dr=new WeakMap,wt=new WeakSet,Pi=function(){var e;return((e=ld())==null?void 0:e.peerId)??"unknown"},si=function(e,t){var n;(n=oe(this,Wn)[e])==null||n.forEach(s=>s(t))},dc=function(){return{identityId:je(this,wt,Pi).call(this),username:oe(this,Ls),presetId:oe(this,Is),status:oe(this,Ds)}};var bt,nn,Os,Nr,Ur,Or,Ht,hd,ud,Sn;class Uy extends EventTarget{constructor(){super(...arguments);$e(this,Ht);$e(this,bt,null);$e(this,nn,new Map);$e(this,Os,!1);$e(this,Nr,"");$e(this,Ur,0);$e(this,Or,"available")}get id(){var t;return((t=ld())==null?void 0:t.peerId)??""}get peers(){return[...oe(this,nn).values()]}get peerCount(){return oe(this,nn).size}async start(t,n=0,s="available"){oe(this,Os)||(gt(this,Os,!0),gt(this,Nr,t),gt(this,Ur,n),gt(this,Or,s),gt(this,bt,new Ny(t,n,s)),oe(this,bt).on("HELLO",({from:r,username:o,presetId:a=0,status:c="available"})=>{oe(this,nn).has(r)||je(this,Ht,hd).call(this,r,o,a,c)}),oe(this,bt).on("PEER_LEAVE",({from:r})=>je(this,Ht,ud).call(this,r)),oe(this,bt).on("MOVE",({from:r,pos:o})=>{je(this,Ht,Sn).call(this,"peer:move",{peerId:r,pos:o})}),oe(this,bt).on("AVATAR_CHANGE",({from:r,presetId:o})=>{je(this,Ht,Sn).call(this,"peer:avatar",{peerId:r,presetId:o})}),oe(this,bt).on("STATUS_CHANGE",({from:r,status:o})=>{je(this,Ht,Sn).call(this,"peer:status",{peerId:r,status:o})}),oe(this,bt).on("CHAT",({from:r,username:o,text:a,ts:c})=>{je(this,Ht,Sn).call(this,"chat",{from:r,username:o,text:a,ts:c})}),await oe(this,bt).start())}stop(){var t;(t=oe(this,bt))==null||t.stop(),gt(this,bt,null),oe(this,nn).clear(),gt(this,Os,!1)}move(t,n,s,r=0){var o;(o=oe(this,bt))==null||o.move(t,n,s,r)}setAvatar(t){var n;gt(this,Ur,t),(n=oe(this,bt))==null||n.setAvatar(t)}setStatus(t){var n;gt(this,Or,t),(n=oe(this,bt))==null||n.setStatus(t)}sendChat(t){var s;if(!t.trim())return;const n=Date.now();je(this,Ht,Sn).call(this,"chat",{from:this.id,username:oe(this,Nr),text:t,ts:n}),(s=oe(this,bt))==null||s.chat(t)}addVoiceTrack(t,n){var s;(s=oe(this,bt))==null||s.addVoiceTrack(t,n)}onVoiceTrack(t){var n;(n=oe(this,bt))==null||n.onVoiceTrack(t)}}bt=new WeakMap,nn=new WeakMap,Os=new WeakMap,Nr=new WeakMap,Ur=new WeakMap,Or=new WeakMap,Ht=new WeakSet,hd=function(t,n,s,r){oe(this,nn).set(t,{peerId:t,username:n,presetId:s,status:r}),je(this,Ht,Sn).call(this,"peer:join",{peerId:t,username:n,presetId:s,status:r}),je(this,Ht,Sn).call(this,"status",{peerCount:oe(this,nn).size})},ud=function(t){oe(this,nn).has(t)&&(oe(this,nn).delete(t),je(this,Ht,Sn).call(this,"peer:leave",{peerId:t}),je(this,Ht,Sn).call(this,"status",{peerCount:oe(this,nn).size}))},Sn=function(t,n){this.dispatchEvent(new CustomEvent(t,{detail:n}))};const It=new Uy,zn=Object.freeze({OCEAN:"ocean",COAST:"coast",DESERT:"desert",PLAINS:"plains",FOREST:"forest",MOUNTAIN:"mountain",ARCTIC:"arctic",JUNGLE:"jungle",TUNDRA:"tundra"});function Mo(i){let e=5381;for(let t=0;t<i.length;t++)e=Math.imul(e,33)^i.charCodeAt(t);return(e>>>0).toString(16).padStart(8,"0")}function dd(i,e,t,n){const s=JSON.stringify({parentHash:i,authorId:e,changes:t,timestamp:n});let r=Mo(s),o=Mo(r+s.slice(0,32)),a=Mo(o+s.slice(-32)),c=Mo(a+e);return r+o+a+c}class Es{constructor(e,t,n,s="",r=Date.now()){this.parentHash=e,this.authorId=t,this.changes=Object.freeze([...n]),this.message=s,this.timestamp=r,this.hash=dd(e,t,n,r)}buildRevert(e,t=Date.now()){const n=this.changes.map(s=>({cellId:s.cellId,key:s.key,oldValue:s.newValue,newValue:s.oldValue}));return new Es(this.hash,e,n,`revert: ${this.message||this.hash.slice(0,8)}`,t)}toJSON(){return{hash:this.hash,parentHash:this.parentHash,authorId:this.authorId,message:this.message,timestamp:this.timestamp,changes:this.changes}}}const Oy="universe",Fy="genesis: the universe begins";var Dt,Yt;class By{constructor(){$e(this,Dt,new Map);$e(this,Yt,null);this._genesis()}_genesis(){const e=new Es(null,Oy,[],Fy,0);oe(this,Dt).set(e.hash,e),gt(this,Yt,e.hash)}get head(){return oe(this,Yt)}get length(){return oe(this,Dt).size}getCommit(e){return oe(this,Dt).get(e)??null}headCommit(){return oe(this,Dt).get(oe(this,Yt))}log(e=1/0){const t=[];let n=oe(this,Yt);for(;n&&t.length<e;){const s=oe(this,Dt).get(n);if(!s)break;t.push(s),n=s.parentHash}return t}stateAt(e){const t=[];let n=e;for(;n;){const r=oe(this,Dt).get(n);if(!r)break;t.unshift(r),n=r.parentHash}const s=new Map;for(const r of t)for(const{cellId:o,key:a,newValue:c}of r.changes)s.set(`${o}:${a}`,c);return s}currentState(){return this.stateAt(oe(this,Yt))}diff(e,t){const n=this.stateAt(e),s=this.stateAt(t),r=[],o=new Set([...n.keys(),...s.keys()]);for(const a of o){const c=n.get(a)??null,l=s.get(a)??null;if(c!==l){const[h,u]=a.split(":");r.push({cellId:h,key:u,before:c,after:l})}}return r}commit(e,t,n=""){if(!Array.isArray(t)||t.length===0)throw new Error("commit requires at least one change");for(const r of t)if(!r.cellId||!r.key)throw new Error("each change must have cellId and key");const s=new Es(oe(this,Yt),e,t,n);return oe(this,Dt).set(s.hash,s),gt(this,Yt,s.hash),s}revert(e,t){const n=oe(this,Dt).get(e);if(!n)throw new Error(`commit ${e} not found`);if(n.changes.length===0)throw new Error("cannot revert empty commit");n.buildRevert(t);const s=new Es(oe(this,Yt),t,[...n.changes].map(r=>({cellId:r.cellId,key:r.key,oldValue:r.newValue,newValue:r.oldValue})),`revert: ${n.message||n.hash.slice(0,8)}`);return oe(this,Dt).set(s.hash,s),gt(this,Yt,s.hash),s}applyExternal(e){if(oe(this,Dt).has(e.hash))return oe(this,Dt).get(e.hash);if(e.parentHash&&!oe(this,Dt).has(e.parentHash))throw new Error(`missing parent ${e.parentHash} — cannot apply ${e.hash}`);const t=new Es(e.parentHash,e.authorId,e.changes,e.message,e.timestamp);return oe(this,Dt).set(e.hash,t),e.parentHash===oe(this,Yt)&&gt(this,Yt,e.hash),t}verify(){for(const e of oe(this,Dt).values()){if(dd(e.parentHash,e.authorId,e.changes,e.timestamp)!==e.hash)return{valid:!1,broken:e.hash};if(e.parentHash&&!oe(this,Dt).has(e.parentHash))return{valid:!1,broken:e.hash,reason:"missing-parent"}}return{valid:!0}}}Dt=new WeakMap,Yt=new WeakMap;const at=Object.freeze({SOLAR:"solar",WIND:"wind",HYDRO:"hydro",MINERAL:"mineral",RARE_EARTH:"rare_earth",BIOLOGICAL:"biological",FISHERY:"fishery",GEOTHERMAL:"geothermal"});zn.OCEAN+"",at.FISHERY+"",at.WIND+"",zn.COAST+"",at.FISHERY+"",at.WIND+"",at.SOLAR+"",zn.DESERT+"",at.SOLAR+"",at.RARE_EARTH+"",at.MINERAL+"",zn.PLAINS+"",at.WIND+"",at.MINERAL+"",at.BIOLOGICAL+"",at.SOLAR+"",zn.FOREST+"",at.BIOLOGICAL+"",at.HYDRO+"",at.WIND+"",zn.MOUNTAIN+"",at.MINERAL+"",at.RARE_EARTH+"",at.GEOTHERMAL+"",at.WIND+"",at.HYDRO+"",zn.ARCTIC+"",at.MINERAL+"",at.WIND+"",zn.JUNGLE+"",at.BIOLOGICAL+"",at.HYDRO+"",at.SOLAR+"",zn.TUNDRA+"",at.MINERAL+"",at.GEOTHERMAL+"",at.WIND+"";(async()=>{const i=await Cy(),e=new By;window._worldHistory=e;function t({peerCount:g}={}){document.querySelectorAll(".ipfs-dot").forEach(v=>{v.className="ipfs-dot green"}),document.querySelectorAll("#ipfs-label").forEach(v=>{v.textContent=`P2P · ${i.shortId}`}),g!==void 0&&document.querySelectorAll("#ipfs-peers").forEach(v=>{v.textContent=g>0?`${g} peer${g!==1?"s":""}`:""})}t({peerCount:0}),It.addEventListener("status",g=>t(g.detail)),It.addEventListener("commit",g=>{try{e.applyExternal(g.detail.commit)}catch{}});const n=document.getElementById("lobby"),s=document.getElementById("loading"),r=document.getElementById("load-fill"),o=document.getElementById("load-text"),a=document.getElementById("hud"),c=document.getElementById("click-to-start"),l=document.getElementById("enter-btn"),h=document.getElementById("username"),u=document.getElementById("room-name");!i.isNew&&i.displayName&&(h.value=i.displayName),u&&(u.value=Iy());const d=document.getElementById("id-fingerprint");d&&(d.textContent=i.isNew?"New identity generated":`Identity · ${i.shortId}`),function(){const v=document.getElementById("lobby-avatar-grid");if(!v)return;const m=parseInt(localStorage.getItem("spaceAvatarId")??"0",10),p=T=>"#"+T.toString(16).padStart(6,"0");Bi.forEach(T=>{const y=p(T.skin),w=p(T.hair),I=p(T.outfit),R=p(T.accent),E=document.createElement("div");E.className="lav-chip"+(T.id===m?" lav-active":""),E.dataset.id=String(T.id),E.title=T.label,E.innerHTML=`<svg viewBox="0 0 60 82" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="30" cy="16" rx="17" ry="14" fill="${w}"/>
        <circle cx="30" cy="22" r="13" fill="${y}"/>
        <ellipse cx="17.5" cy="22" rx="3.5" ry="4.5" fill="${y}"/>
        <ellipse cx="42.5" cy="22" rx="3.5" ry="4.5" fill="${y}"/>
        <circle cx="25" cy="21" r="2.8" fill="${R}"/><circle cx="35" cy="21" r="2.8" fill="${R}"/>
        <circle cx="25" cy="21" r="1.6" fill="#111"/><circle cx="35" cy="21" r="1.6" fill="#111"/>
        <rect x="26.5" y="34" width="7" height="5" rx="2" fill="${y}"/>
        <rect x="14" y="39" width="32" height="24" rx="6" fill="${I}"/>
        <rect x="22" y="44" width="16" height="5" rx="2" fill="${R}" opacity="0.75"/>
        <rect x="5" y="40" width="10" height="20" rx="5" fill="${I}"/>
        <rect x="45" y="40" width="10" height="20" rx="5" fill="${I}"/>
        <rect x="16" y="62" width="11" height="14" rx="4" fill="${I}"/>
        <rect x="33" y="62" width="11" height="14" rx="4" fill="${I}"/>
      </svg>`,E.addEventListener("click",()=>{v.querySelectorAll(".lav-chip").forEach(D=>D.classList.remove("lav-active")),E.classList.add("lav-active"),localStorage.setItem("spaceAvatarId",String(T.id))}),v.appendChild(E)})}(),h==null||h.addEventListener("keydown",g=>{g.key==="Enter"&&f()}),u==null||u.addEventListener("keydown",g=>{g.key==="Enter"&&f()}),l==null||l.addEventListener("click",f);function f(){const g=h.value.trim();if(!g){h.focus(),h.style.borderColor="#f55";return}h.style.borderColor="",i.setName(g),u!=null&&u.value.trim()&&Dy(u.value.trim()),window._spaceUsername=g,n.style.display="none",s.classList.add("visible");const{scene:v,camera:m,renderer:p,onShipLoaded:T}=_v((y,w)=>{r.style.width=y+"%",o.textContent=w});T(()=>{var we;s.classList.remove("visible"),a.classList.add("visible"),c.classList.remove("hidden");const{meshes:y,screens:w}=vv(v),{openScreen:I,isOpen:R}=Jv(),E=parseInt(localStorage.getItem("spaceAvatarId")??"0",10),D=new lx(j=>x==null?void 0:x.navigate(j)),M=document.getElementById("presence-panel");M&&M.classList.add("pp-visible"),D.setSelf(g,E,"OUTSIDE","available");const x=Zv(v,m,p,j=>{ky(j),D.updateSelfZone(j)},j=>{It.setAvatar(j),D.setSelf(g,j,D._self.zone,P)});let P="available";const Z=document.getElementById("status-btn"),X=document.getElementById("status-menu");Z&&X&&(Ac.forEach(j=>{const re="#"+j.color.toString(16).padStart(6,"0"),te=document.createElement("div");te.className="sm-opt"+(j.id===P?" sm-active":""),te.dataset.status=j.id,te.innerHTML=`<span class="sm-dot" style="background:${re};box-shadow:0 0 4px ${re}40"></span>${j.label}`,te.addEventListener("click",xe=>{xe.stopPropagation(),P=j.id,Z.innerHTML=`<span class="sm-dot" style="background:${re};box-shadow:0 0 4px ${re}40;display:inline-block;vertical-align:middle;width:8px;height:8px;border-radius:50%;margin-right:5px"></span>${j.label.replace(/^\S+\s/,"")}`,x.setStatus(j.id),D.updateSelfStatus(j.id),It.setStatus(j.id),X.querySelectorAll(".sm-opt").forEach(Ae=>Ae.classList.toggle("sm-active",Ae.dataset.status===j.id)),X.classList.remove("sm-open")}),X.appendChild(te)}),Z.addEventListener("click",j=>{j.stopPropagation(),X.classList.toggle("sm-open")}),document.addEventListener("click",()=>X.classList.remove("sm-open"))),document.querySelectorAll(".vtbtn").forEach(j=>{j.addEventListener("click",re=>{re.stopPropagation(),ie(),x.setView(j.dataset.view),j.dataset.view==="first"&&document.pointerLockElement!==p.domElement&&p.domElement.requestPointerLock()})});let Q=!1;function ie(){Q||(Q=!0,c.classList.add("hidden"))}document.addEventListener("pointerlockchange",()=>{document.pointerLockElement===p.domElement&&ie()}),c.addEventListener("click",ie);const ne=new Set(["KeyW","KeyA","KeyS","KeyD"]),z=new Set([...ne,"ArrowUp","ArrowDown","ArrowLeft","ArrowRight"]);document.addEventListener("keydown",j=>{z.has(j.code)&&(ie(),ne.has(j.code)&&x.getMode()==="first"&&document.pointerLockElement!==p.domElement&&p.domElement.requestPointerLock())});const V=new Q_,he=new Me,O=new ri(new U(0,1,0),0),k=new U;p.domElement.addEventListener("click",j=>{if(R()||document.pointerLockElement===p.domElement||x.isDragMoved())return;ie(),he.x=j.clientX/window.innerWidth*2-1,he.y=-(j.clientY/window.innerHeight)*2+1,V.setFromCamera(he,m);const re=V.intersectObjects(y);if(re.length>0){I(re[0].object.userData.screen);return}V.ray.intersectPlane(O,k)&&x.navigate({x:Math.max(-65,Math.min(65,k.x)),z:Math.max(-65,Math.min(65,k.z))})});const se=new Map,ge=new Map;It.addEventListener("peer:join",j=>{const{peerId:re,username:te,presetId:xe}=j.detail;if(ge.set(re,te),se.has(re))return;const Ae=xe??zy(re),Fe=Ou(te,Ae);v.add(Fe),se.set(re,Fe),$h(a,se.size+1),D.addPeer(re,te,Ae),x.peerJoin(re,te)}),It.addEventListener("peer:move",j=>{const{peerId:re,pos:te}=j.detail,xe=se.get(re);if(D.movePeer(re,te.x,te.z),xe){const Ae=xe.position.clone();if(xe.position.lerp(new U(te.x,te.y??0,te.z),.6),te.ry!==void 0){let Fe=te.ry-xe.rotation.y;for(;Fe>Math.PI;)Fe-=Math.PI*2;for(;Fe<-Math.PI;)Fe+=Math.PI*2;xe.rotation.y+=Fe*.25}Ae.distanceTo(xe.position)>.008&&(xe.userData.isMoving=!0,clearTimeout(xe.userData._stopTimer),xe.userData._stopTimer=setTimeout(()=>{xe.userData.isMoving=!1},180))}x.peerMove(re,te.x,te.z,ge.get(re)??re.slice(-4))}),It.addEventListener("peer:leave",j=>{const re=se.get(j.detail.peerId);re&&(v.remove(re),se.delete(j.detail.peerId),$h(a,se.size+1)),le.removePeer(j.detail.peerId),D.removePeer(j.detail.peerId),x.peerLeave(j.detail.peerId),ge.delete(j.detail.peerId)}),It.addEventListener("peer:avatar",j=>{const{peerId:re,presetId:te}=j.detail,xe=se.get(re),Ae=ge.get(re)??re.slice(-4);xe&&Bu(xe,Ae,te),D.updatePeerPreset(re,te)}),It.addEventListener("peer:status",j=>{const{peerId:re,status:te}=j.detail,xe=se.get(re);xe&&Fu(xe,te),D.updatePeerStatus(re,te)});let Y=performance.now();(function j(){requestAnimationFrame(j);const re=performance.now(),te=Math.min((re-Y)/1e3,.1);Y=re,se.forEach(xe=>ku(xe,xe.userData.isMoving??!1,te))})(),It.start(g,E,P),window._sync=It;const le=new ox,me=document.getElementById("voice-btn"),ve=({active:j,muted:re}={})=>{me&&(j?re?(me.textContent="🔇 Muted",me.className="hud-side-btn voice-muted"):(me.textContent="🎙 Live",me.className="hud-side-btn voice-active"):(me.textContent="🎙 Voice",me.className="hud-side-btn"))};le.onStateChange(ve),ve({active:!1,muted:!1}),me&&me.addEventListener("click",async j=>{if(j.stopPropagation(),le.active)le.toggleMute();else if(me.textContent="⏳ Connecting…",!await le.start(It)){me.textContent="🚫 No mic";return}}),setInterval(()=>{const j=x.getPosition(),re=x.getRotation();It.move(j.x,j.y,j.z,re.y),le.update(j,se)},50);const Ce=document.getElementById("chat-toggle"),Ne=document.getElementById("chat-panel"),We=document.getElementById("chat-close"),F=document.getElementById("chat-input"),Ve=document.getElementById("chat-send"),Be=document.getElementById("chat-messages"),et=document.getElementById("chat-badge");let Re=0;function qe(){Ne.classList.add("open"),Ce.classList.add("open"),Re=0,et.textContent="",et.classList.remove("visible"),F.focus()}function Ge(){Ne.classList.remove("open"),Ce.classList.remove("open")}Ce.addEventListener("click",j=>{j.stopPropagation(),Ne.classList.contains("open")?Ge():qe()}),We.addEventListener("click",j=>{j.stopPropagation(),Ge()});function ze(){const j=F.value.trim();j&&(It.sendChat(j),F.value="")}Ve.addEventListener("click",j=>{j.stopPropagation(),ze()}),F.addEventListener("keydown",j=>{j.key==="Enter"&&ze()}),Ne.addEventListener("click",j=>j.stopPropagation());function B({from:j,username:re,text:te,ts:xe}){const Ae=j===It.id,Fe=new Date(xe).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),L=document.createElement("div");L.className="chat-msg",L.innerHTML=`
          <div class="chat-msg-meta">
            <span class="chat-msg-name${Ae?" self":""}">${re}</span>
            <span class="chat-msg-time">${Fe}</span>
          </div>
          <div class="chat-msg-body">${te.replace(/</g,"&lt;")}</div>
        `,Be.appendChild(L),Be.scrollTop=Be.scrollHeight,!Ne.classList.contains("open")&&!Ae&&(Re++,et.textContent=Re>9?"9+":Re,et.classList.add("visible"))}function S(j){const re=document.createElement("div");re.className="chat-system",re.textContent=j,Be.appendChild(re),Be.scrollTop=Be.scrollHeight}const _=new Map;It.addEventListener("chat",j=>B(j.detail)),It.addEventListener("peer:join",j=>{_.set(j.detail.peerId,j.detail.username),S(`${j.detail.username} joined`)}),It.addEventListener("peer:leave",j=>{const re=_.get(j.detail.peerId)??"Someone";_.delete(j.detail.peerId),S(`${re} left`)});const A=new ex,N=new nx,G=new Qv(g);A.createReality(G),N.setNode(g,gs.PUBLIC),(we=document.getElementById("nm-open-btn"))==null||we.addEventListener("click",j=>{j.stopPropagation(),sx(A,N,g)});const q=document.getElementById("screen-hint"),J=document.getElementById("screen-hint-name");let ce=null,fe=null;document.addEventListener("keydown",j=>{if(j.code==="KeyE"&&ce&&!R()&&I(ce),j.code==="KeyF"&&fe){const re=fe.def.id,te=re==="main-left"||re==="main-right",xe=Hn(te?"main-left":re);te&&Hn("main-right"),Le(fe.def.label,xe)}});function Le(j,re){let te=document.getElementById("door-action-hint");te||(te=document.createElement("div"),te.id="door-action-hint",te.style.cssText=`
            position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);
            background:rgba(0,0,0,0.7);border:1px solid rgba(255,255,255,0.2);
            padding:10px 22px;border-radius:20px;font-size:0.9rem;color:#fff;
            pointer-events:none;z-index:13;opacity:0;transition:opacity 0.2s;
          `,document.body.appendChild(te)),te.textContent=`${j} ${re?"opened":"closed"}`,te.style.opacity="1",clearTimeout(te._t),te._t=setTimeout(()=>{te.style.opacity="0"},1500)}const ue=new Set;setInterval(()=>{var Fe;if(R())return;const j=x.getPosition();let re=null,te=4;w.forEach(L=>{const ye=j.x-L.position.x,ee=j.z-L.position.z,ae=Math.sqrt(ye*ye+ee*ee);ae<te&&(te=ae,re=L)}),ce=re,q&&(q.style.display=re?"flex":"none",re&&J&&(J.textContent=re.label)),zr.forEach(L=>{const ye=j.x-L.hinge.x,ee=j.z-L.hinge.z,ae=Math.sqrt(ye*ye+ee*ee),de=L.id;ae<2.2&&!ds(de)?(Hn(de),ue.add(de),de==="main-left"&&(ds("main-right")||Hn("main-right"),ue.add("main-right")),de==="main-right"&&(ds("main-left")||Hn("main-left"),ue.add("main-left"))):ae>3.5&&ue.has(de)&&ds(de)&&(Hn(de),ue.delete(de),de==="main-left"&&(ds("main-right")&&Hn("main-right"),ue.delete("main-right")),de==="main-right"&&(ds("main-left")&&Hn("main-left"),ue.delete("main-left")))});const xe=Hu(j,2.8);fe=xe;const Ae=document.getElementById("door-proximity-hint");if(Ae)if(xe&&!re){const L=(Fe=xe.state)!=null&&Fe.open?"Close":"Open";Ae.style.display="flex",Ae.querySelector("#door-hint-name").textContent=`${L} ${xe.def.label}`}else Ae.style.display="none"},150)})}})();function zy(i){let e=0;for(let t=0;t<i.length;t++)e=e*31+i.charCodeAt(t)|0;return Math.abs(e)%Bi.length}function $h(i,e){var n;const t=(n=i==null?void 0:i.querySelector)==null?void 0:n.call(i,"#online-count");t&&(t.textContent=`● ${e} aboard`)}const Kh={OUTSIDE:{color:"#88cc66",desc:"Outside the building"},LOBBY:{color:"#ffffff",desc:"Reception & Entrance"},OPS:{color:"#ffaa44",desc:"Operations & Technical Support"},FUN:{color:"#44ffaa",desc:"Chill, Social & Games"},DESIGN:{color:"#ff6ba0",desc:"UI/UX, Design & 3D"},ENGINEERING:{color:"#44aaff",desc:"Development & Engineering"},"":{color:"#ffffff",desc:""}};function ky(i){const e=document.getElementById("zone-name"),t=document.getElementById("zone-desc"),n=Kh[i]||Kh[""];e&&(e.textContent=i,e.style.color=n.color),t&&(t.textContent=n.desc),document.querySelectorAll(".map-zone").forEach(s=>{s.classList.toggle("active",s.dataset.zone===i)})}
