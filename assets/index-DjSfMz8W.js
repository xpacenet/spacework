var cl=i=>{throw TypeError(i)};var Io=(i,t,e)=>t.has(i)||cl("Cannot "+e);var D=(i,t,e)=>(Io(i,t,"read from private field"),e?e.call(i):t.get(i)),It=(i,t,e)=>t.has(i)?cl("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(i):t.set(i,e),Ht=(i,t,e,n)=>(Io(i,t,"write to private field"),n?n.call(i,e):t.set(i,e),e),Ot=(i,t,e)=>(Io(i,t,"access private method"),e);var hl=(i,t,e,n)=>({set _(s){Ht(i,t,s,e)},get _(){return D(i,t,n)}});(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Wa="165",fu=0,ul=1,pu=2,rh=1,oh=2,Xn=3,_i=0,Qe=1,an=2,fi=0,Cs=1,dl=2,fl=3,pl=4,mu=5,Ii=100,gu=101,_u=102,vu=103,xu=104,yu=200,Mu=201,Su=202,Eu=203,Sa=204,Ea=205,wu=206,bu=207,Tu=208,Au=209,Ru=210,Cu=211,Pu=212,Lu=213,Iu=214,Du=0,Nu=1,Uu=2,ho=3,Ou=4,Fu=5,Bu=6,zu=7,ah=0,ku=1,Hu=2,pi=0,Gu=1,Vu=2,Wu=3,lh=4,Xu=5,Zu=6,Yu=7,ch=300,ks=301,Hs=302,wa=303,ba=304,Eo=306,Ta=1e3,Ni=1001,Aa=1002,pn=1003,qu=1004,Ir=1005,Sn=1006,Do=1007,Ui=1008,vi=1009,$u=1010,Ku=1011,uo=1012,hh=1013,Gs=1014,di=1015,wo=1016,uh=1017,dh=1018,Vs=1020,Ju=35902,ju=1021,Qu=1022,Dn=1023,td=1024,ed=1025,Ps=1026,Ws=1027,nd=1028,fh=1029,id=1030,ph=1031,mh=1033,No=33776,Uo=33777,Oo=33778,Fo=33779,ml=35840,gl=35841,_l=35842,vl=35843,xl=36196,yl=37492,Ml=37496,Sl=37808,El=37809,wl=37810,bl=37811,Tl=37812,Al=37813,Rl=37814,Cl=37815,Pl=37816,Ll=37817,Il=37818,Dl=37819,Nl=37820,Ul=37821,Bo=36492,Ol=36494,Fl=36495,sd=36283,Bl=36284,zl=36285,kl=36286,rd=3200,od=3201,gh=0,ad=1,hi="",Pn="srgb",Si="srgb-linear",Xa="display-p3",bo="display-p3-linear",fo="linear",xe="srgb",po="rec709",mo="p3",qi=7680,Hl=519,ld=512,cd=513,hd=514,_h=515,ud=516,dd=517,fd=518,pd=519,Ra=35044,Gl="300 es",Jn=2e3,go=2001;class Ys{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const We=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],zo=Math.PI/180,Ca=180/Math.PI;function mi(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(We[i&255]+We[i>>8&255]+We[i>>16&255]+We[i>>24&255]+"-"+We[t&255]+We[t>>8&255]+"-"+We[t>>16&15|64]+We[t>>24&255]+"-"+We[e&63|128]+We[e>>8&255]+"-"+We[e>>16&255]+We[e>>24&255]+We[n&255]+We[n>>8&255]+We[n>>16&255]+We[n>>24&255]).toLowerCase()}function Ge(i,t,e){return Math.max(t,Math.min(e,i))}function md(i,t){return(i%t+t)%t}function ko(i,t,e){return(1-e)*i+e*t}function In(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function fe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class _t{constructor(t=0,e=0){_t.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ge(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Kt{constructor(t,e,n,s,r,o,a,l,c){Kt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],_=s[0],m=s[3],p=s[6],S=s[1],v=s[4],w=s[7],N=s[2],T=s[5],b=s[8];return r[0]=o*_+a*S+l*N,r[3]=o*m+a*v+l*T,r[6]=o*p+a*w+l*b,r[1]=c*_+h*S+u*N,r[4]=c*m+h*v+u*T,r[7]=c*p+h*w+u*b,r[2]=d*_+f*S+g*N,r[5]=d*m+f*v+g*T,r[8]=d*p+f*w+g*b,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,g=e*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(s*c-h*n)*_,t[2]=(a*n-s*o)*_,t[3]=d*_,t[4]=(h*e-s*l)*_,t[5]=(s*r-a*e)*_,t[6]=f*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Ho.makeScale(t,e)),this}rotate(t){return this.premultiply(Ho.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ho.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ho=new Kt;function vh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function _o(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function gd(){const i=_o("canvas");return i.style.display="block",i}const Vl={};function Za(i){i in Vl||(Vl[i]=!0,console.warn(i))}function _d(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const Wl=new Kt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Xl=new Kt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Dr={[Si]:{transfer:fo,primaries:po,toReference:i=>i,fromReference:i=>i},[Pn]:{transfer:xe,primaries:po,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[bo]:{transfer:fo,primaries:mo,toReference:i=>i.applyMatrix3(Xl),fromReference:i=>i.applyMatrix3(Wl)},[Xa]:{transfer:xe,primaries:mo,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Xl),fromReference:i=>i.applyMatrix3(Wl).convertLinearToSRGB()}},vd=new Set([Si,bo]),ce={enabled:!0,_workingColorSpace:Si,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!vd.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=Dr[t].toReference,s=Dr[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return Dr[i].primaries},getTransfer:function(i){return i===hi?fo:Dr[i].transfer}};function Ls(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Go(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let $i;class xd{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{$i===void 0&&($i=_o("canvas")),$i.width=t.width,$i.height=t.height;const n=$i.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=$i}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=_o("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ls(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ls(e[n]/255)*255):e[n]=Ls(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let yd=0;class xh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:yd++}),this.uuid=mi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Vo(s[o].image)):r.push(Vo(s[o]))}else r=Vo(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Vo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?xd.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Md=0;class Ke extends Ys{constructor(t=Ke.DEFAULT_IMAGE,e=Ke.DEFAULT_MAPPING,n=Ni,s=Ni,r=Sn,o=Ui,a=Dn,l=vi,c=Ke.DEFAULT_ANISOTROPY,h=hi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Md++}),this.uuid=mi(),this.name="",this.source=new xh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new _t(0,0),this.repeat=new _t(1,1),this.center=new _t(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ch)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ta:t.x=t.x-Math.floor(t.x);break;case Ni:t.x=t.x<0?0:1;break;case Aa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ta:t.y=t.y-Math.floor(t.y);break;case Ni:t.y=t.y<0?0:1;break;case Aa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ke.DEFAULT_IMAGE=null;Ke.DEFAULT_MAPPING=ch;Ke.DEFAULT_ANISOTROPY=1;class Ee{constructor(t=0,e=0,n=0,s=1){Ee.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(c+1)/2,w=(f+1)/2,N=(p+1)/2,T=(h+d)/4,b=(u+_)/4,O=(g+m)/4;return v>w&&v>N?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=T/n,r=b/n):w>N?w<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(w),n=T/s,r=O/s):N<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(N),n=b/r,s=O/r),this.set(n,s,r,e),this}let S=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(u-_)/S,this.z=(d-h)/S,this.w=Math.acos((c+f+p-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Sd extends Ys{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ee(0,0,t,e),this.scissorTest=!1,this.viewport=new Ee(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Sn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Ke(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new xh(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xi extends Sd{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class yh extends Ke{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=pn,this.minFilter=pn,this.wrapR=Ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ed extends Ke{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=pn,this.minFilter=pn,this.wrapR=Ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Rr{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3];const d=r[o+0],f=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=_;return}if(u!==_||l!==d||c!==f||h!==g){let m=1-a;const p=l*d+c*f+h*g+u*_,S=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){const N=Math.sqrt(v),T=Math.atan2(N,p*S);m=Math.sin(m*T)/N,a=Math.sin(a*T)/N}const w=a*S;if(l=l*m+d*w,c=c*m+f*w,h=h*m+g*w,u=u*m+_*w,m===1-a){const N=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=N,c*=N,h*=N,u*=N}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+h*u+l*f-c*d,t[e+1]=l*g+h*d+c*u-a*f,t[e+2]=c*g+h*f+a*d-l*u,t[e+3]=h*g-a*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),d=l(n/2),f=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ge(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(t=0,e=0,n=0){P.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Zl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Zl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Wo.copy(this).projectOnVector(t),this.sub(Wo)}reflect(t){return this.sub(Wo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ge(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Wo=new P,Zl=new Rr;class Cr{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(mn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(mn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=mn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,mn):mn.fromBufferAttribute(r,o),mn.applyMatrix4(t.matrixWorld),this.expandByPoint(mn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Nr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Nr.copy(n.boundingBox)),Nr.applyMatrix4(t.matrixWorld),this.union(Nr)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,mn),mn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(js),Ur.subVectors(this.max,js),Ki.subVectors(t.a,js),Ji.subVectors(t.b,js),ji.subVectors(t.c,js),ei.subVectors(Ji,Ki),ni.subVectors(ji,Ji),bi.subVectors(Ki,ji);let e=[0,-ei.z,ei.y,0,-ni.z,ni.y,0,-bi.z,bi.y,ei.z,0,-ei.x,ni.z,0,-ni.x,bi.z,0,-bi.x,-ei.y,ei.x,0,-ni.y,ni.x,0,-bi.y,bi.x,0];return!Xo(e,Ki,Ji,ji,Ur)||(e=[1,0,0,0,1,0,0,0,1],!Xo(e,Ki,Ji,ji,Ur))?!1:(Or.crossVectors(ei,ni),e=[Or.x,Or.y,Or.z],Xo(e,Ki,Ji,ji,Ur))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,mn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(mn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Bn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Bn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Bn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Bn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Bn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Bn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Bn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Bn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Bn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Bn=[new P,new P,new P,new P,new P,new P,new P,new P],mn=new P,Nr=new Cr,Ki=new P,Ji=new P,ji=new P,ei=new P,ni=new P,bi=new P,js=new P,Ur=new P,Or=new P,Ti=new P;function Xo(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Ti.fromArray(i,r);const a=s.x*Math.abs(Ti.x)+s.y*Math.abs(Ti.y)+s.z*Math.abs(Ti.z),l=t.dot(Ti),c=e.dot(Ti),h=n.dot(Ti);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const wd=new Cr,Qs=new P,Zo=new P;class Ya{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):wd.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Qs.subVectors(t,this.center);const e=Qs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Qs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Zo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Qs.copy(t.center).add(Zo)),this.expandByPoint(Qs.copy(t.center).sub(Zo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const zn=new P,Yo=new P,Fr=new P,ii=new P,qo=new P,Br=new P,$o=new P;class Mh{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,zn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=zn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(zn.copy(this.origin).addScaledVector(this.direction,e),zn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Yo.copy(t).add(e).multiplyScalar(.5),Fr.copy(e).sub(t).normalize(),ii.copy(this.origin).sub(Yo);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Fr),a=ii.dot(this.direction),l=-ii.dot(Fr),c=ii.lengthSq(),h=Math.abs(1-o*o);let u,d,f,g;if(h>0)if(u=o*l-a,d=o*a-l,g=r*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Yo).addScaledVector(Fr,d),f}intersectSphere(t,e){zn.subVectors(t.center,this.origin);const n=zn.dot(this.direction),s=zn.dot(zn)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,zn)!==null}intersectTriangle(t,e,n,s,r){qo.subVectors(e,t),Br.subVectors(n,t),$o.crossVectors(qo,Br);let o=this.direction.dot($o),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ii.subVectors(this.origin,t);const l=a*this.direction.dot(Br.crossVectors(ii,Br));if(l<0)return null;const c=a*this.direction.dot(qo.cross(ii));if(c<0||l+c>o)return null;const h=-a*ii.dot($o);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ye{constructor(t,e,n,s,r,o,a,l,c,h,u,d,f,g,_,m){ye.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,u,d,f,g,_,m)}set(t,e,n,s,r,o,a,l,c,h,u,d,f,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ye().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Qi.setFromMatrixColumn(t,0).length(),r=1/Qi.setFromMatrixColumn(t,1).length(),o=1/Qi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=o*h,f=o*u,g=a*h,_=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+g*c,e[5]=d-_*c,e[9]=-a*l,e[2]=_-d*c,e[6]=g+f*c,e[10]=o*l}else if(t.order==="YXZ"){const d=l*h,f=l*u,g=c*h,_=c*u;e[0]=d+_*a,e[4]=g*a-f,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-g,e[6]=_+d*a,e[10]=o*l}else if(t.order==="ZXY"){const d=l*h,f=l*u,g=c*h,_=c*u;e[0]=d-_*a,e[4]=-o*u,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*h,e[9]=_-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const d=o*h,f=o*u,g=a*h,_=a*u;e[0]=l*h,e[4]=g*c-f,e[8]=d*c+_,e[1]=l*u,e[5]=_*c+d,e[9]=f*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const d=o*l,f=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=_-d*u,e[8]=g*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*u+g,e[10]=d-_*u}else if(t.order==="XZY"){const d=o*l,f=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+_,e[5]=o*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=a*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(bd,t,Td)}lookAt(t,e,n){const s=this.elements;return sn.subVectors(t,e),sn.lengthSq()===0&&(sn.z=1),sn.normalize(),si.crossVectors(n,sn),si.lengthSq()===0&&(Math.abs(n.z)===1?sn.x+=1e-4:sn.z+=1e-4,sn.normalize(),si.crossVectors(n,sn)),si.normalize(),zr.crossVectors(sn,si),s[0]=si.x,s[4]=zr.x,s[8]=sn.x,s[1]=si.y,s[5]=zr.y,s[9]=sn.y,s[2]=si.z,s[6]=zr.z,s[10]=sn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],S=n[3],v=n[7],w=n[11],N=n[15],T=s[0],b=s[4],O=s[8],E=s[12],y=s[1],C=s[5],k=s[9],H=s[13],z=s[2],j=s[6],Y=s[10],et=s[14],J=s[3],mt=s[7],yt=s[11],Tt=s[15];return r[0]=o*T+a*y+l*z+c*J,r[4]=o*b+a*C+l*j+c*mt,r[8]=o*O+a*k+l*Y+c*yt,r[12]=o*E+a*H+l*et+c*Tt,r[1]=h*T+u*y+d*z+f*J,r[5]=h*b+u*C+d*j+f*mt,r[9]=h*O+u*k+d*Y+f*yt,r[13]=h*E+u*H+d*et+f*Tt,r[2]=g*T+_*y+m*z+p*J,r[6]=g*b+_*C+m*j+p*mt,r[10]=g*O+_*k+m*Y+p*yt,r[14]=g*E+_*H+m*et+p*Tt,r[3]=S*T+v*y+w*z+N*J,r[7]=S*b+v*C+w*j+N*mt,r[11]=S*O+v*k+w*Y+N*yt,r[15]=S*E+v*H+w*et+N*Tt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+r*l*u-s*c*u-r*a*d+n*c*d+s*a*f-n*l*f)+_*(+e*l*f-e*c*d+r*o*d-s*o*f+s*c*h-r*l*h)+m*(+e*c*u-e*a*f-r*o*u+n*o*f+r*a*h-n*c*h)+p*(-s*a*h-e*l*u+e*a*d+s*o*u-n*o*d+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],_=t[13],m=t[14],p=t[15],S=u*m*c-_*d*c+_*l*f-a*m*f-u*l*p+a*d*p,v=g*d*c-h*m*c-g*l*f+o*m*f+h*l*p-o*d*p,w=h*_*c-g*u*c+g*a*f-o*_*f-h*a*p+o*u*p,N=g*u*l-h*_*l-g*a*d+o*_*d+h*a*m-o*u*m,T=e*S+n*v+s*w+r*N;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/T;return t[0]=S*b,t[1]=(_*d*r-u*m*r-_*s*f+n*m*f+u*s*p-n*d*p)*b,t[2]=(a*m*r-_*l*r+_*s*c-n*m*c-a*s*p+n*l*p)*b,t[3]=(u*l*r-a*d*r-u*s*c+n*d*c+a*s*f-n*l*f)*b,t[4]=v*b,t[5]=(h*m*r-g*d*r+g*s*f-e*m*f-h*s*p+e*d*p)*b,t[6]=(g*l*r-o*m*r-g*s*c+e*m*c+o*s*p-e*l*p)*b,t[7]=(o*d*r-h*l*r+h*s*c-e*d*c-o*s*f+e*l*f)*b,t[8]=w*b,t[9]=(g*u*r-h*_*r-g*n*f+e*_*f+h*n*p-e*u*p)*b,t[10]=(o*_*r-g*a*r+g*n*c-e*_*c-o*n*p+e*a*p)*b,t[11]=(h*a*r-o*u*r-h*n*c+e*u*c+o*n*f-e*a*f)*b,t[12]=N*b,t[13]=(h*_*s-g*u*s+g*n*d-e*_*d-h*n*m+e*u*m)*b,t[14]=(g*a*s-o*_*s-g*n*l+e*_*l+o*n*m-e*a*m)*b,t[15]=(o*u*s-h*a*s+h*n*l-e*u*l-o*n*d+e*a*d)*b,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,g=r*u,_=o*h,m=o*u,p=a*u,S=l*c,v=l*h,w=l*u,N=n.x,T=n.y,b=n.z;return s[0]=(1-(_+p))*N,s[1]=(f+w)*N,s[2]=(g-v)*N,s[3]=0,s[4]=(f-w)*T,s[5]=(1-(d+p))*T,s[6]=(m+S)*T,s[7]=0,s[8]=(g+v)*b,s[9]=(m-S)*b,s[10]=(1-(d+_))*b,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Qi.set(s[0],s[1],s[2]).length();const o=Qi.set(s[4],s[5],s[6]).length(),a=Qi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],gn.copy(this);const c=1/r,h=1/o,u=1/a;return gn.elements[0]*=c,gn.elements[1]*=c,gn.elements[2]*=c,gn.elements[4]*=h,gn.elements[5]*=h,gn.elements[6]*=h,gn.elements[8]*=u,gn.elements[9]*=u,gn.elements[10]*=u,e.setFromRotationMatrix(gn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Jn){const l=this.elements,c=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s);let f,g;if(a===Jn)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===go)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Jn){const l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(o-r),d=(e+t)*c,f=(n+s)*h;let g,_;if(a===Jn)g=(o+r)*u,_=-2*u;else if(a===go)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Qi=new P,gn=new ye,bd=new P(0,0,0),Td=new P(1,1,1),si=new P,zr=new P,sn=new P,Yl=new ye,ql=new Rr;class Nn{constructor(t=0,e=0,n=0,s=Nn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Ge(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ge(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ge(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ge(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ge(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Ge(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Yl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Yl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ql.setFromEuler(this),this.setFromQuaternion(ql,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Nn.DEFAULT_ORDER="XYZ";class qa{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Ad=0;const $l=new P,ts=new Rr,kn=new ye,kr=new P,tr=new P,Rd=new P,Cd=new Rr,Kl=new P(1,0,0),Jl=new P(0,1,0),jl=new P(0,0,1),Ql={type:"added"},Pd={type:"removed"},es={type:"childadded",child:null},Ko={type:"childremoved",child:null};class ze extends Ys{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ad++}),this.uuid=mi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ze.DEFAULT_UP.clone();const t=new P,e=new Nn,n=new Rr,s=new P(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ye},normalMatrix:{value:new Kt}}),this.matrix=new ye,this.matrixWorld=new ye,this.matrixAutoUpdate=ze.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ze.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new qa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ts.setFromAxisAngle(t,e),this.quaternion.multiply(ts),this}rotateOnWorldAxis(t,e){return ts.setFromAxisAngle(t,e),this.quaternion.premultiply(ts),this}rotateX(t){return this.rotateOnAxis(Kl,t)}rotateY(t){return this.rotateOnAxis(Jl,t)}rotateZ(t){return this.rotateOnAxis(jl,t)}translateOnAxis(t,e){return $l.copy(t).applyQuaternion(this.quaternion),this.position.add($l.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Kl,t)}translateY(t){return this.translateOnAxis(Jl,t)}translateZ(t){return this.translateOnAxis(jl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(kn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?kr.copy(t):kr.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),tr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?kn.lookAt(tr,kr,this.up):kn.lookAt(kr,tr,this.up),this.quaternion.setFromRotationMatrix(kn),s&&(kn.extractRotation(s.matrixWorld),ts.setFromRotationMatrix(kn),this.quaternion.premultiply(ts.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ql),es.child=t,this.dispatchEvent(es),es.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Pd),Ko.child=t,this.dispatchEvent(Ko),Ko.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),kn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),kn.multiply(t.parent.matrixWorld)),t.applyMatrix4(kn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ql),es.child=t,this.dispatchEvent(es),es.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(tr,t,Rd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(tr,Cd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++){const r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++){const a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}ze.DEFAULT_UP=new P(0,1,0);ze.DEFAULT_MATRIX_AUTO_UPDATE=!0;ze.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const _n=new P,Hn=new P,Jo=new P,Gn=new P,ns=new P,is=new P,tc=new P,jo=new P,Qo=new P,ta=new P;class En{constructor(t=new P,e=new P,n=new P){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),_n.subVectors(t,e),s.cross(_n);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){_n.subVectors(s,e),Hn.subVectors(n,e),Jo.subVectors(t,e);const o=_n.dot(_n),a=_n.dot(Hn),l=_n.dot(Jo),c=Hn.dot(Hn),h=Hn.dot(Jo),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(c*l-a*h)*d,g=(o*h-a*l)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Gn)===null?!1:Gn.x>=0&&Gn.y>=0&&Gn.x+Gn.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,Gn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Gn.x),l.addScaledVector(o,Gn.y),l.addScaledVector(a,Gn.z),l)}static isFrontFacing(t,e,n,s){return _n.subVectors(n,e),Hn.subVectors(t,e),_n.cross(Hn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return _n.subVectors(this.c,this.b),Hn.subVectors(this.a,this.b),_n.cross(Hn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return En.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return En.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return En.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return En.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return En.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;ns.subVectors(s,n),is.subVectors(r,n),jo.subVectors(t,n);const l=ns.dot(jo),c=is.dot(jo);if(l<=0&&c<=0)return e.copy(n);Qo.subVectors(t,s);const h=ns.dot(Qo),u=is.dot(Qo);if(h>=0&&u<=h)return e.copy(s);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(ns,o);ta.subVectors(t,r);const f=ns.dot(ta),g=is.dot(ta);if(g>=0&&f<=g)return e.copy(r);const _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(is,a);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return tc.subVectors(r,s),a=(u-h)/(u-h+(f-g)),e.copy(s).addScaledVector(tc,a);const p=1/(m+_+d);return o=_*p,a=d*p,e.copy(n).addScaledVector(ns,o).addScaledVector(is,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Sh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ri={h:0,s:0,l:0},Hr={h:0,s:0,l:0};function ea(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Qt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Pn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ce.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=ce.workingColorSpace){return this.r=t,this.g=e,this.b=n,ce.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=ce.workingColorSpace){if(t=md(t,1),e=Ge(e,0,1),n=Ge(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=ea(o,r,t+1/3),this.g=ea(o,r,t),this.b=ea(o,r,t-1/3)}return ce.toWorkingColorSpace(this,s),this}setStyle(t,e=Pn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Pn){const n=Sh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ls(t.r),this.g=Ls(t.g),this.b=Ls(t.b),this}copyLinearToSRGB(t){return this.r=Go(t.r),this.g=Go(t.g),this.b=Go(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Pn){return ce.fromWorkingColorSpace(Xe.copy(this),t),Math.round(Ge(Xe.r*255,0,255))*65536+Math.round(Ge(Xe.g*255,0,255))*256+Math.round(Ge(Xe.b*255,0,255))}getHexString(t=Pn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ce.workingColorSpace){ce.fromWorkingColorSpace(Xe.copy(this),e);const n=Xe.r,s=Xe.g,r=Xe.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ce.workingColorSpace){return ce.fromWorkingColorSpace(Xe.copy(this),e),t.r=Xe.r,t.g=Xe.g,t.b=Xe.b,t}getStyle(t=Pn){ce.fromWorkingColorSpace(Xe.copy(this),t);const e=Xe.r,n=Xe.g,s=Xe.b;return t!==Pn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ri),this.setHSL(ri.h+t,ri.s+e,ri.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ri),t.getHSL(Hr);const n=ko(ri.h,Hr.h,e),s=ko(ri.s,Hr.s,e),r=ko(ri.l,Hr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Xe=new Qt;Qt.NAMES=Sh;let Ld=0;class qs extends Ys{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ld++}),this.uuid=mi(),this.name="",this.type="Material",this.blending=Cs,this.side=_i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Sa,this.blendDst=Ea,this.blendEquation=Ii,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qt(0,0,0),this.blendAlpha=0,this.depthFunc=ho,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Hl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qi,this.stencilZFail=qi,this.stencilZPass=qi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Cs&&(n.blending=this.blending),this.side!==_i&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Sa&&(n.blendSrc=this.blendSrc),this.blendDst!==Ea&&(n.blendDst=this.blendDst),this.blendEquation!==Ii&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ho&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Hl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==qi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==qi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==qi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class ur extends qs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Nn,this.combine=ah,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Le=new P,Gr=new _t;class wn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ra,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=di,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return Za("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Gr.fromBufferAttribute(this,e),Gr.applyMatrix3(t),this.setXY(e,Gr.x,Gr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix3(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix4(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyNormalMatrix(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.transformDirection(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=In(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=fe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=In(e,this.array)),e}setX(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=In(e,this.array)),e}setY(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=In(e,this.array)),e}setZ(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=In(e,this.array)),e}setW(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array),s=fe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array),s=fe(s,this.array),r=fe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ra&&(t.usage=this.usage),t}}class Eh extends wn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class wh extends wn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Ce extends wn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Id=0;const hn=new ye,na=new ze,ss=new P,rn=new Cr,er=new Cr,Fe=new P;class ln extends Ys{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Id++}),this.uuid=mi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(vh(t)?wh:Eh)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Kt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return hn.makeRotationFromQuaternion(t),this.applyMatrix4(hn),this}rotateX(t){return hn.makeRotationX(t),this.applyMatrix4(hn),this}rotateY(t){return hn.makeRotationY(t),this.applyMatrix4(hn),this}rotateZ(t){return hn.makeRotationZ(t),this.applyMatrix4(hn),this}translate(t,e,n){return hn.makeTranslation(t,e,n),this.applyMatrix4(hn),this}scale(t,e,n){return hn.makeScale(t,e,n),this.applyMatrix4(hn),this}lookAt(t){return na.lookAt(t),na.updateMatrix(),this.applyMatrix4(na.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ss).negate(),this.translate(ss.x,ss.y,ss.z),this}setFromPoints(t){const e=[];for(let n=0,s=t.length;n<s;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Ce(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Cr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];rn.setFromBufferAttribute(r),this.morphTargetsRelative?(Fe.addVectors(this.boundingBox.min,rn.min),this.boundingBox.expandByPoint(Fe),Fe.addVectors(this.boundingBox.max,rn.max),this.boundingBox.expandByPoint(Fe)):(this.boundingBox.expandByPoint(rn.min),this.boundingBox.expandByPoint(rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ya);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){const n=this.boundingSphere.center;if(rn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];er.setFromBufferAttribute(a),this.morphTargetsRelative?(Fe.addVectors(rn.min,er.min),rn.expandByPoint(Fe),Fe.addVectors(rn.max,er.max),rn.expandByPoint(Fe)):(rn.expandByPoint(er.min),rn.expandByPoint(er.max))}rn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Fe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Fe));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Fe.fromBufferAttribute(a,c),l&&(ss.fromBufferAttribute(t,c),Fe.add(ss)),s=Math.max(s,n.distanceToSquared(Fe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new wn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let O=0;O<n.count;O++)a[O]=new P,l[O]=new P;const c=new P,h=new P,u=new P,d=new _t,f=new _t,g=new _t,_=new P,m=new P;function p(O,E,y){c.fromBufferAttribute(n,O),h.fromBufferAttribute(n,E),u.fromBufferAttribute(n,y),d.fromBufferAttribute(r,O),f.fromBufferAttribute(r,E),g.fromBufferAttribute(r,y),h.sub(c),u.sub(c),f.sub(d),g.sub(d);const C=1/(f.x*g.y-g.x*f.y);isFinite(C)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(C),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(C),a[O].add(_),a[E].add(_),a[y].add(_),l[O].add(m),l[E].add(m),l[y].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let O=0,E=S.length;O<E;++O){const y=S[O],C=y.start,k=y.count;for(let H=C,z=C+k;H<z;H+=3)p(t.getX(H+0),t.getX(H+1),t.getX(H+2))}const v=new P,w=new P,N=new P,T=new P;function b(O){N.fromBufferAttribute(s,O),T.copy(N);const E=a[O];v.copy(E),v.sub(N.multiplyScalar(N.dot(E))).normalize(),w.crossVectors(T,E);const C=w.dot(l[O])<0?-1:1;o.setXYZW(O,v.x,v.y,v.z,C)}for(let O=0,E=S.length;O<E;++O){const y=S[O],C=y.start,k=y.count;for(let H=C,z=C+k;H<z;H+=3)b(t.getX(H+0)),b(t.getX(H+1)),b(t.getX(H+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new wn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new P,r=new P,o=new P,a=new P,l=new P,c=new P,h=new P,u=new P;if(t)for(let d=0,f=t.count;d<f;d+=3){const g=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Fe.fromBufferAttribute(t,e),Fe.normalize(),t.setXYZ(e,Fe.x,Fe.y,Fe.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let f=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new wn(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ln,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ec=new ye,Ai=new Mh,Vr=new Ya,nc=new P,rs=new P,os=new P,as=new P,ia=new P,Wr=new P,Xr=new _t,Zr=new _t,Yr=new _t,ic=new P,sc=new P,rc=new P,qr=new P,$r=new P;class St extends ze{constructor(t=new ln,e=new ur){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){Wr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(ia.fromBufferAttribute(u,t),o?Wr.addScaledVector(ia,h):Wr.addScaledVector(ia.sub(e),h))}e.add(Wr)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Vr.copy(n.boundingSphere),Vr.applyMatrix4(r),Ai.copy(t.ray).recast(t.near),!(Vr.containsPoint(Ai.origin)===!1&&(Ai.intersectSphere(Vr,nc)===null||Ai.origin.distanceToSquared(nc)>(t.far-t.near)**2))&&(ec.copy(r).invert(),Ai.copy(t.ray).applyMatrix4(ec),!(n.boundingBox!==null&&Ai.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ai)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],S=Math.max(m.start,f.start),v=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let w=S,N=v;w<N;w+=3){const T=a.getX(w),b=a.getX(w+1),O=a.getX(w+2);s=Kr(this,p,t,n,c,h,u,T,b,O),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const S=a.getX(m),v=a.getX(m+1),w=a.getX(m+2);s=Kr(this,o,t,n,c,h,u,S,v,w),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],S=Math.max(m.start,f.start),v=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let w=S,N=v;w<N;w+=3){const T=w,b=w+1,O=w+2;s=Kr(this,p,t,n,c,h,u,T,b,O),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const S=m,v=m+1,w=m+2;s=Kr(this,o,t,n,c,h,u,S,v,w),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Dd(i,t,e,n,s,r,o,a){let l;if(t.side===Qe?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===_i,a),l===null)return null;$r.copy(a),$r.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo($r);return c<e.near||c>e.far?null:{distance:c,point:$r.clone(),object:i}}function Kr(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,rs),i.getVertexPosition(l,os),i.getVertexPosition(c,as);const h=Dd(i,t,e,n,rs,os,as,qr);if(h){s&&(Xr.fromBufferAttribute(s,a),Zr.fromBufferAttribute(s,l),Yr.fromBufferAttribute(s,c),h.uv=En.getInterpolation(qr,rs,os,as,Xr,Zr,Yr,new _t)),r&&(Xr.fromBufferAttribute(r,a),Zr.fromBufferAttribute(r,l),Yr.fromBufferAttribute(r,c),h.uv1=En.getInterpolation(qr,rs,os,as,Xr,Zr,Yr,new _t)),o&&(ic.fromBufferAttribute(o,a),sc.fromBufferAttribute(o,l),rc.fromBufferAttribute(o,c),h.normal=En.getInterpolation(qr,rs,os,as,ic,sc,rc,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new P,materialIndex:0};En.getNormal(rs,os,as,u.normal),h.face=u}return h}class jt extends ln{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Ce(c,3)),this.setAttribute("normal",new Ce(h,3)),this.setAttribute("uv",new Ce(u,2));function g(_,m,p,S,v,w,N,T,b,O,E){const y=w/b,C=N/O,k=w/2,H=N/2,z=T/2,j=b+1,Y=O+1;let et=0,J=0;const mt=new P;for(let yt=0;yt<Y;yt++){const Tt=yt*C-H;for(let q=0;q<j;q++){const lt=q*y-k;mt[_]=lt*S,mt[m]=Tt*v,mt[p]=z,c.push(mt.x,mt.y,mt.z),mt[_]=0,mt[m]=0,mt[p]=T>0?1:-1,h.push(mt.x,mt.y,mt.z),u.push(q/b),u.push(1-yt/O),et+=1}}for(let yt=0;yt<O;yt++)for(let Tt=0;Tt<b;Tt++){const q=d+Tt+j*yt,lt=d+Tt+j*(yt+1),F=d+(Tt+1)+j*(yt+1),Z=d+(Tt+1)+j*yt;l.push(q,lt,Z),l.push(lt,F,Z),J+=6}a.addGroup(f,J,E),f+=J,d+=et}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new jt(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Xs(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function $e(i){const t={};for(let e=0;e<i.length;e++){const n=Xs(i[e]);for(const s in n)t[s]=n[s]}return t}function Nd(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function bh(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ce.workingColorSpace}const Ud={clone:Xs,merge:$e};var Od=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Fd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class xi extends qs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Od,this.fragmentShader=Fd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Xs(t.uniforms),this.uniformsGroups=Nd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Th extends ze{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ye,this.projectionMatrix=new ye,this.projectionMatrixInverse=new ye,this.coordinateSystem=Jn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const oi=new P,oc=new _t,ac=new _t;class on extends Th{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ca*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(zo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ca*2*Math.atan(Math.tan(zo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){oi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(oi.x,oi.y).multiplyScalar(-t/oi.z),oi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(oi.x,oi.y).multiplyScalar(-t/oi.z)}getViewSize(t,e){return this.getViewBounds(t,oc,ac),e.subVectors(ac,oc)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(zo*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ls=-90,cs=1;class Bd extends ze{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new on(ls,cs,t,e);s.layers=this.layers,this.add(s);const r=new on(ls,cs,t,e);r.layers=this.layers,this.add(r);const o=new on(ls,cs,t,e);o.layers=this.layers,this.add(o);const a=new on(ls,cs,t,e);a.layers=this.layers,this.add(a);const l=new on(ls,cs,t,e);l.layers=this.layers,this.add(l);const c=new on(ls,cs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===Jn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===go)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Ah extends Ke{constructor(t,e,n,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:ks,super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class zd extends Xi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Ah(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Sn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new jt(5,5,5),r=new xi({name:"CubemapFromEquirect",uniforms:Xs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Qe,blending:fi});r.uniforms.tEquirect.value=e;const o=new St(s,r),a=e.minFilter;return e.minFilter===Ui&&(e.minFilter=Sn),new Bd(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const sa=new P,kd=new P,Hd=new Kt;class ci{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=sa.subVectors(n,e).cross(kd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(sa),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Hd.getNormalMatrix(t),s=this.coplanarPoint(sa).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ri=new Ya,Jr=new P;class $a{constructor(t=new ci,e=new ci,n=new ci,s=new ci,r=new ci,o=new ci){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Jn){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],f=s[8],g=s[9],_=s[10],m=s[11],p=s[12],S=s[13],v=s[14],w=s[15];if(n[0].setComponents(l-r,d-c,m-f,w-p).normalize(),n[1].setComponents(l+r,d+c,m+f,w+p).normalize(),n[2].setComponents(l+o,d+h,m+g,w+S).normalize(),n[3].setComponents(l-o,d-h,m-g,w-S).normalize(),n[4].setComponents(l-a,d-u,m-_,w-v).normalize(),e===Jn)n[5].setComponents(l+a,d+u,m+_,w+v).normalize();else if(e===go)n[5].setComponents(a,u,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ri.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ri.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ri)}intersectsSprite(t){return Ri.center.set(0,0,0),Ri.radius=.7071067811865476,Ri.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ri)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Jr.x=s.normal.x>0?t.max.x:t.min.x,Jr.y=s.normal.y>0?t.max.y:t.min.y,Jr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Jr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Rh(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Gd(i){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l._updateRange,d=l.updateRanges;if(i.bindBuffer(c,a),u.count===-1&&d.length===0&&i.bufferSubData(c,0,h),d.length!==0){for(let f=0,g=d.length;f<g;f++){const _=d[f];i.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}u.count!==-1&&(i.bufferSubData(c,u.offset*h.BYTES_PER_ELEMENT,h,u.offset,u.count),u.count=-1),l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class Qn extends ln{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=t/a,d=e/l,f=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const S=p*d-o;for(let v=0;v<c;v++){const w=v*u-r;g.push(w,-S,0),_.push(0,0,1),m.push(v/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let S=0;S<a;S++){const v=S+c*p,w=S+c*(p+1),N=S+1+c*(p+1),T=S+1+c*p;f.push(v,w,T),f.push(w,N,T)}this.setIndex(f),this.setAttribute("position",new Ce(g,3)),this.setAttribute("normal",new Ce(_,3)),this.setAttribute("uv",new Ce(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qn(t.width,t.height,t.widthSegments,t.heightSegments)}}var Vd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Wd=`#ifdef USE_ALPHAHASH
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
#endif`,Xd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Zd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Yd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,qd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$d=`#ifdef USE_AOMAP
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
#endif`,Kd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Jd=`#ifdef USE_BATCHING
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
#endif`,jd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Qd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,tf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ef=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,nf=`#ifdef USE_IRIDESCENCE
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
#endif`,sf=`#ifdef USE_BUMPMAP
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
#endif`,rf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,of=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,af=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,lf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,hf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,uf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,df=`#if defined( USE_COLOR_ALPHA )
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
#endif`,ff=`#define PI 3.141592653589793
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
} // validated`,pf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,mf=`vec3 transformedNormal = objectNormal;
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
#endif`,gf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_f=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,xf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,yf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Mf=`
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
}`,Sf=`#ifdef USE_ENVMAP
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
#endif`,Ef=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,wf=`#ifdef USE_ENVMAP
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
#endif`,bf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Tf=`#ifdef USE_ENVMAP
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
#endif`,Af=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Rf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Cf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Pf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Lf=`#ifdef USE_GRADIENTMAP
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
}`,If=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Df=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Nf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Uf=`uniform bool receiveShadow;
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
#endif`,Of=`#ifdef USE_ENVMAP
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
#endif`,Ff=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Bf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,zf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,kf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Hf=`PhysicalMaterial material;
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
#endif`,Gf=`struct PhysicalMaterial {
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
}`,Vf=`
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
#endif`,Wf=`#if defined( RE_IndirectDiffuse )
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
#endif`,Xf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Zf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Yf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$f=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Kf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Jf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,jf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Qf=`#if defined( USE_POINTS_UV )
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
#endif`,tp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ep=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,np=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ip=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,sp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rp=`#ifdef USE_MORPHTARGETS
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
#endif`,op=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ap=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,lp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,cp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,up=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,dp=`#ifdef USE_NORMALMAP
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
#endif`,fp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,pp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,mp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,gp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_p=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,xp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,yp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Mp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Sp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ep=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,wp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,bp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Tp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ap=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Rp=`float getShadowMask() {
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
}`,Cp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Pp=`#ifdef USE_SKINNING
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
#endif`,Lp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ip=`#ifdef USE_SKINNING
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
#endif`,Dp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Np=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Up=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Op=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Fp=`#ifdef USE_TRANSMISSION
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
#endif`,Bp=`#ifdef USE_TRANSMISSION
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
#endif`,zp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Vp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Wp=`uniform sampler2D t2D;
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
}`,Xp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Yp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$p=`#include <common>
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
}`,Kp=`#if DEPTH_PACKING == 3200
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
}`,Jp=`#define DISTANCE
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
}`,jp=`#define DISTANCE
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
}`,Qp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,tm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,em=`uniform float scale;
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
}`,nm=`uniform vec3 diffuse;
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
}`,im=`#include <common>
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
}`,sm=`uniform vec3 diffuse;
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
}`,rm=`#define LAMBERT
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
}`,om=`#define LAMBERT
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
}`,am=`#define MATCAP
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
}`,lm=`#define MATCAP
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
}`,cm=`#define NORMAL
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
}`,hm=`#define NORMAL
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
}`,um=`#define PHONG
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
}`,dm=`#define PHONG
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
}`,fm=`#define STANDARD
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
}`,pm=`#define STANDARD
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
}`,mm=`#define TOON
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
}`,gm=`#define TOON
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
}`,_m=`uniform float size;
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
}`,vm=`uniform vec3 diffuse;
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
}`,xm=`#include <common>
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
}`,ym=`uniform vec3 color;
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
}`,Mm=`uniform float rotation;
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
}`,Sm=`uniform vec3 diffuse;
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
}`,$t={alphahash_fragment:Vd,alphahash_pars_fragment:Wd,alphamap_fragment:Xd,alphamap_pars_fragment:Zd,alphatest_fragment:Yd,alphatest_pars_fragment:qd,aomap_fragment:$d,aomap_pars_fragment:Kd,batching_pars_vertex:Jd,batching_vertex:jd,begin_vertex:Qd,beginnormal_vertex:tf,bsdfs:ef,iridescence_fragment:nf,bumpmap_pars_fragment:sf,clipping_planes_fragment:rf,clipping_planes_pars_fragment:of,clipping_planes_pars_vertex:af,clipping_planes_vertex:lf,color_fragment:cf,color_pars_fragment:hf,color_pars_vertex:uf,color_vertex:df,common:ff,cube_uv_reflection_fragment:pf,defaultnormal_vertex:mf,displacementmap_pars_vertex:gf,displacementmap_vertex:_f,emissivemap_fragment:vf,emissivemap_pars_fragment:xf,colorspace_fragment:yf,colorspace_pars_fragment:Mf,envmap_fragment:Sf,envmap_common_pars_fragment:Ef,envmap_pars_fragment:wf,envmap_pars_vertex:bf,envmap_physical_pars_fragment:Of,envmap_vertex:Tf,fog_vertex:Af,fog_pars_vertex:Rf,fog_fragment:Cf,fog_pars_fragment:Pf,gradientmap_pars_fragment:Lf,lightmap_pars_fragment:If,lights_lambert_fragment:Df,lights_lambert_pars_fragment:Nf,lights_pars_begin:Uf,lights_toon_fragment:Ff,lights_toon_pars_fragment:Bf,lights_phong_fragment:zf,lights_phong_pars_fragment:kf,lights_physical_fragment:Hf,lights_physical_pars_fragment:Gf,lights_fragment_begin:Vf,lights_fragment_maps:Wf,lights_fragment_end:Xf,logdepthbuf_fragment:Zf,logdepthbuf_pars_fragment:Yf,logdepthbuf_pars_vertex:qf,logdepthbuf_vertex:$f,map_fragment:Kf,map_pars_fragment:Jf,map_particle_fragment:jf,map_particle_pars_fragment:Qf,metalnessmap_fragment:tp,metalnessmap_pars_fragment:ep,morphinstance_vertex:np,morphcolor_vertex:ip,morphnormal_vertex:sp,morphtarget_pars_vertex:rp,morphtarget_vertex:op,normal_fragment_begin:ap,normal_fragment_maps:lp,normal_pars_fragment:cp,normal_pars_vertex:hp,normal_vertex:up,normalmap_pars_fragment:dp,clearcoat_normal_fragment_begin:fp,clearcoat_normal_fragment_maps:pp,clearcoat_pars_fragment:mp,iridescence_pars_fragment:gp,opaque_fragment:_p,packing:vp,premultiplied_alpha_fragment:xp,project_vertex:yp,dithering_fragment:Mp,dithering_pars_fragment:Sp,roughnessmap_fragment:Ep,roughnessmap_pars_fragment:wp,shadowmap_pars_fragment:bp,shadowmap_pars_vertex:Tp,shadowmap_vertex:Ap,shadowmask_pars_fragment:Rp,skinbase_vertex:Cp,skinning_pars_vertex:Pp,skinning_vertex:Lp,skinnormal_vertex:Ip,specularmap_fragment:Dp,specularmap_pars_fragment:Np,tonemapping_fragment:Up,tonemapping_pars_fragment:Op,transmission_fragment:Fp,transmission_pars_fragment:Bp,uv_pars_fragment:zp,uv_pars_vertex:kp,uv_vertex:Hp,worldpos_vertex:Gp,background_vert:Vp,background_frag:Wp,backgroundCube_vert:Xp,backgroundCube_frag:Zp,cube_vert:Yp,cube_frag:qp,depth_vert:$p,depth_frag:Kp,distanceRGBA_vert:Jp,distanceRGBA_frag:jp,equirect_vert:Qp,equirect_frag:tm,linedashed_vert:em,linedashed_frag:nm,meshbasic_vert:im,meshbasic_frag:sm,meshlambert_vert:rm,meshlambert_frag:om,meshmatcap_vert:am,meshmatcap_frag:lm,meshnormal_vert:cm,meshnormal_frag:hm,meshphong_vert:um,meshphong_frag:dm,meshphysical_vert:fm,meshphysical_frag:pm,meshtoon_vert:mm,meshtoon_frag:gm,points_vert:_m,points_frag:vm,shadow_vert:xm,shadow_frag:ym,sprite_vert:Mm,sprite_frag:Sm},ft={common:{diffuse:{value:new Qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Kt}},envmap:{envMap:{value:null},envMapRotation:{value:new Kt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Kt},normalScale:{value:new _t(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0},uvTransform:{value:new Kt}},sprite:{diffuse:{value:new Qt(16777215)},opacity:{value:1},center:{value:new _t(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}}},Ln={basic:{uniforms:$e([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.fog]),vertexShader:$t.meshbasic_vert,fragmentShader:$t.meshbasic_frag},lambert:{uniforms:$e([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new Qt(0)}}]),vertexShader:$t.meshlambert_vert,fragmentShader:$t.meshlambert_frag},phong:{uniforms:$e([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new Qt(0)},specular:{value:new Qt(1118481)},shininess:{value:30}}]),vertexShader:$t.meshphong_vert,fragmentShader:$t.meshphong_frag},standard:{uniforms:$e([ft.common,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.roughnessmap,ft.metalnessmap,ft.fog,ft.lights,{emissive:{value:new Qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag},toon:{uniforms:$e([ft.common,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.gradientmap,ft.fog,ft.lights,{emissive:{value:new Qt(0)}}]),vertexShader:$t.meshtoon_vert,fragmentShader:$t.meshtoon_frag},matcap:{uniforms:$e([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,{matcap:{value:null}}]),vertexShader:$t.meshmatcap_vert,fragmentShader:$t.meshmatcap_frag},points:{uniforms:$e([ft.points,ft.fog]),vertexShader:$t.points_vert,fragmentShader:$t.points_frag},dashed:{uniforms:$e([ft.common,ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$t.linedashed_vert,fragmentShader:$t.linedashed_frag},depth:{uniforms:$e([ft.common,ft.displacementmap]),vertexShader:$t.depth_vert,fragmentShader:$t.depth_frag},normal:{uniforms:$e([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,{opacity:{value:1}}]),vertexShader:$t.meshnormal_vert,fragmentShader:$t.meshnormal_frag},sprite:{uniforms:$e([ft.sprite,ft.fog]),vertexShader:$t.sprite_vert,fragmentShader:$t.sprite_frag},background:{uniforms:{uvTransform:{value:new Kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$t.background_vert,fragmentShader:$t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Kt}},vertexShader:$t.backgroundCube_vert,fragmentShader:$t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$t.cube_vert,fragmentShader:$t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$t.equirect_vert,fragmentShader:$t.equirect_frag},distanceRGBA:{uniforms:$e([ft.common,ft.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$t.distanceRGBA_vert,fragmentShader:$t.distanceRGBA_frag},shadow:{uniforms:$e([ft.lights,ft.fog,{color:{value:new Qt(0)},opacity:{value:1}}]),vertexShader:$t.shadow_vert,fragmentShader:$t.shadow_frag}};Ln.physical={uniforms:$e([Ln.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Kt},clearcoatNormalScale:{value:new _t(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Kt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Kt},sheen:{value:0},sheenColor:{value:new Qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Kt},transmissionSamplerSize:{value:new _t},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Kt},attenuationDistance:{value:0},attenuationColor:{value:new Qt(0)},specularColor:{value:new Qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Kt},anisotropyVector:{value:new _t},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Kt}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag};const jr={r:0,b:0,g:0},Ci=new Nn,Em=new ye;function wm(i,t,e,n,s,r,o){const a=new Qt(0);let l=r===!0?0:1,c,h,u=null,d=0,f=null;function g(S){let v=S.isScene===!0?S.background:null;return v&&v.isTexture&&(v=(S.backgroundBlurriness>0?e:t).get(v)),v}function _(S){let v=!1;const w=g(S);w===null?p(a,l):w&&w.isColor&&(p(w,1),v=!0);const N=i.xr.getEnvironmentBlendMode();N==="additive"?n.buffers.color.setClear(0,0,0,1,o):N==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(S,v){const w=g(v);w&&(w.isCubeTexture||w.mapping===Eo)?(h===void 0&&(h=new St(new jt(1,1,1),new xi({name:"BackgroundCubeMaterial",uniforms:Xs(Ln.backgroundCube.uniforms),vertexShader:Ln.backgroundCube.vertexShader,fragmentShader:Ln.backgroundCube.fragmentShader,side:Qe,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(N,T,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Ci.copy(v.backgroundRotation),Ci.x*=-1,Ci.y*=-1,Ci.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Ci.y*=-1,Ci.z*=-1),h.material.uniforms.envMap.value=w,h.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Em.makeRotationFromEuler(Ci)),h.material.toneMapped=ce.getTransfer(w.colorSpace)!==xe,(u!==w||d!==w.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=w,d=w.version,f=i.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new St(new Qn(2,2),new xi({name:"BackgroundMaterial",uniforms:Xs(Ln.background.uniforms),vertexShader:Ln.background.vertexShader,fragmentShader:Ln.background.fragmentShader,side:_i,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=w,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=ce.getTransfer(w.colorSpace)!==xe,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(u!==w||d!==w.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=w,d=w.version,f=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function p(S,v){S.getRGB(jr,bh(i)),n.buffers.color.setClear(jr.r,jr.g,jr.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(S,v=1){a.set(S),l=v,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,p(a,l)},render:_,addToRenderList:m}}function bm(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,o=!1;function a(y,C,k,H,z){let j=!1;const Y=u(H,k,C);r!==Y&&(r=Y,c(r.object)),j=f(y,H,k,z),j&&g(y,H,k,z),z!==null&&t.update(z,i.ELEMENT_ARRAY_BUFFER),(j||o)&&(o=!1,w(y,C,k,H),z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function l(){return i.createVertexArray()}function c(y){return i.bindVertexArray(y)}function h(y){return i.deleteVertexArray(y)}function u(y,C,k){const H=k.wireframe===!0;let z=n[y.id];z===void 0&&(z={},n[y.id]=z);let j=z[C.id];j===void 0&&(j={},z[C.id]=j);let Y=j[H];return Y===void 0&&(Y=d(l()),j[H]=Y),Y}function d(y){const C=[],k=[],H=[];for(let z=0;z<e;z++)C[z]=0,k[z]=0,H[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:k,attributeDivisors:H,object:y,attributes:{},index:null}}function f(y,C,k,H){const z=r.attributes,j=C.attributes;let Y=0;const et=k.getAttributes();for(const J in et)if(et[J].location>=0){const yt=z[J];let Tt=j[J];if(Tt===void 0&&(J==="instanceMatrix"&&y.instanceMatrix&&(Tt=y.instanceMatrix),J==="instanceColor"&&y.instanceColor&&(Tt=y.instanceColor)),yt===void 0||yt.attribute!==Tt||Tt&&yt.data!==Tt.data)return!0;Y++}return r.attributesNum!==Y||r.index!==H}function g(y,C,k,H){const z={},j=C.attributes;let Y=0;const et=k.getAttributes();for(const J in et)if(et[J].location>=0){let yt=j[J];yt===void 0&&(J==="instanceMatrix"&&y.instanceMatrix&&(yt=y.instanceMatrix),J==="instanceColor"&&y.instanceColor&&(yt=y.instanceColor));const Tt={};Tt.attribute=yt,yt&&yt.data&&(Tt.data=yt.data),z[J]=Tt,Y++}r.attributes=z,r.attributesNum=Y,r.index=H}function _(){const y=r.newAttributes;for(let C=0,k=y.length;C<k;C++)y[C]=0}function m(y){p(y,0)}function p(y,C){const k=r.newAttributes,H=r.enabledAttributes,z=r.attributeDivisors;k[y]=1,H[y]===0&&(i.enableVertexAttribArray(y),H[y]=1),z[y]!==C&&(i.vertexAttribDivisor(y,C),z[y]=C)}function S(){const y=r.newAttributes,C=r.enabledAttributes;for(let k=0,H=C.length;k<H;k++)C[k]!==y[k]&&(i.disableVertexAttribArray(k),C[k]=0)}function v(y,C,k,H,z,j,Y){Y===!0?i.vertexAttribIPointer(y,C,k,z,j):i.vertexAttribPointer(y,C,k,H,z,j)}function w(y,C,k,H){_();const z=H.attributes,j=k.getAttributes(),Y=C.defaultAttributeValues;for(const et in j){const J=j[et];if(J.location>=0){let mt=z[et];if(mt===void 0&&(et==="instanceMatrix"&&y.instanceMatrix&&(mt=y.instanceMatrix),et==="instanceColor"&&y.instanceColor&&(mt=y.instanceColor)),mt!==void 0){const yt=mt.normalized,Tt=mt.itemSize,q=t.get(mt);if(q===void 0)continue;const lt=q.buffer,F=q.type,Z=q.bytesPerElement,K=F===i.INT||F===i.UNSIGNED_INT||mt.gpuType===hh;if(mt.isInterleavedBufferAttribute){const $=mt.data,ct=$.stride,wt=mt.offset;if($.isInstancedInterleavedBuffer){for(let Bt=0;Bt<J.locationSize;Bt++)p(J.location+Bt,$.meshPerAttribute);y.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let Bt=0;Bt<J.locationSize;Bt++)m(J.location+Bt);i.bindBuffer(i.ARRAY_BUFFER,lt);for(let Bt=0;Bt<J.locationSize;Bt++)v(J.location+Bt,Tt/J.locationSize,F,yt,ct*Z,(wt+Tt/J.locationSize*Bt)*Z,K)}else{if(mt.isInstancedBufferAttribute){for(let $=0;$<J.locationSize;$++)p(J.location+$,mt.meshPerAttribute);y.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=mt.meshPerAttribute*mt.count)}else for(let $=0;$<J.locationSize;$++)m(J.location+$);i.bindBuffer(i.ARRAY_BUFFER,lt);for(let $=0;$<J.locationSize;$++)v(J.location+$,Tt/J.locationSize,F,yt,Tt*Z,Tt/J.locationSize*$*Z,K)}}else if(Y!==void 0){const yt=Y[et];if(yt!==void 0)switch(yt.length){case 2:i.vertexAttrib2fv(J.location,yt);break;case 3:i.vertexAttrib3fv(J.location,yt);break;case 4:i.vertexAttrib4fv(J.location,yt);break;default:i.vertexAttrib1fv(J.location,yt)}}}}S()}function N(){O();for(const y in n){const C=n[y];for(const k in C){const H=C[k];for(const z in H)h(H[z].object),delete H[z];delete C[k]}delete n[y]}}function T(y){if(n[y.id]===void 0)return;const C=n[y.id];for(const k in C){const H=C[k];for(const z in H)h(H[z].object),delete H[z];delete C[k]}delete n[y.id]}function b(y){for(const C in n){const k=n[C];if(k[y.id]===void 0)continue;const H=k[y.id];for(const z in H)h(H[z].object),delete H[z];delete k[y.id]}}function O(){E(),o=!0,r!==s&&(r=s,c(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:O,resetDefaultState:E,dispose:N,releaseStatesOfGeometry:T,releaseStatesOfProgram:b,initAttributes:_,enableAttribute:m,disableUnusedAttributes:S}}function Tm(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function a(c,h,u){if(u===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let f=0;f<u;f++)this.render(c[f],h[f]);else{d.multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];e.update(f,n,1)}}function l(c,h,u,d){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)o(c[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_];for(let _=0;_<d.length;_++)e.update(g,n,d[_])}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Am(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(T){return!(T!==Dn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const b=T===wo&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==vi&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==di&&!b)}function l(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),p=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=f>0,N=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:f,maxTextureSize:g,maxCubemapSize:_,maxAttributes:m,maxVertexUniforms:p,maxVaryings:S,maxFragmentUniforms:v,vertexTextures:w,maxSamples:N}}function Rm(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new ci,a=new Kt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{const S=r?0:n,v=S*4;let w=p.clippingState||null;l.value=w,w=h(g,d,v,f);for(let N=0;N!==v;++N)w[N]=e[N];p.clippingState=w,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=f+_*4,S=d.matrixWorldInverse;a.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let v=0,w=f;v!==_;++v,w+=4)o.copy(u[v]).applyMatrix4(S,a),o.normal.toArray(m,w),m[w+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function Cm(i){let t=new WeakMap;function e(o,a){return a===wa?o.mapping=ks:a===ba&&(o.mapping=Hs),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===wa||a===ba)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new zd(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Ch extends Th{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Es=4,lc=[.125,.215,.35,.446,.526,.582],Di=20,ra=new Ch,cc=new Qt;let oa=null,aa=0,la=0,ca=!1;const Li=(1+Math.sqrt(5))/2,hs=1/Li,hc=[new P(-Li,hs,0),new P(Li,hs,0),new P(-hs,0,Li),new P(hs,0,Li),new P(0,Li,-hs),new P(0,Li,hs),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)];class uc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){oa=this._renderer.getRenderTarget(),aa=this._renderer.getActiveCubeFace(),la=this._renderer.getActiveMipmapLevel(),ca=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=pc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(oa,aa,la),this._renderer.xr.enabled=ca,t.scissorTest=!1,Qr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ks||t.mapping===Hs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),oa=this._renderer.getRenderTarget(),aa=this._renderer.getActiveCubeFace(),la=this._renderer.getActiveMipmapLevel(),ca=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Sn,minFilter:Sn,generateMipmaps:!1,type:wo,format:Dn,colorSpace:Si,depthBuffer:!1},s=dc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=dc(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Pm(r)),this._blurMaterial=Lm(r,t,e)}return s}_compileMaterial(t){const e=new St(this._lodPlanes[0],t);this._renderer.compile(e,ra)}_sceneToCubeUV(t,e,n,s){const a=new on(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(cc),h.toneMapping=pi,h.autoClear=!1;const f=new ur({name:"PMREM.Background",side:Qe,depthWrite:!1,depthTest:!1}),g=new St(new jt,f);let _=!1;const m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,_=!0):(f.color.copy(cc),_=!0);for(let p=0;p<6;p++){const S=p%3;S===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):S===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const v=this._cubeSize;Qr(s,S*v,p>2?v:0,v,v),h.setRenderTarget(s),_&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===ks||t.mapping===Hs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=pc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fc());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new St(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;Qr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,ra)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=hc[(s-r-1)%hc.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new St(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Di-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):Di;m>Di&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Di}`);const p=[];let S=0;for(let b=0;b<Di;++b){const O=b/_,E=Math.exp(-O*O/2);p.push(E),b===0?S+=E:b<m&&(S+=2*E)}for(let b=0;b<p.length;b++)p[b]=p[b]/S;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:v}=this;d.dTheta.value=g,d.mipInt.value=v-n;const w=this._sizeLods[s],N=3*w*(s>v-Es?s-v+Es:0),T=4*(this._cubeSize-w);Qr(e,N,T,3*w,2*w),l.setRenderTarget(e),l.render(u,ra)}}function Pm(i){const t=[],e=[],n=[];let s=i;const r=i-Es+1+lc.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>i-Es?l=lc[o-i+Es-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,_=3,m=2,p=1,S=new Float32Array(_*g*f),v=new Float32Array(m*g*f),w=new Float32Array(p*g*f);for(let T=0;T<f;T++){const b=T%3*2/3-1,O=T>2?0:-1,E=[b,O,0,b+2/3,O,0,b+2/3,O+1,0,b,O,0,b+2/3,O+1,0,b,O+1,0];S.set(E,_*g*T),v.set(d,m*g*T);const y=[T,T,T,T,T,T];w.set(y,p*g*T)}const N=new ln;N.setAttribute("position",new wn(S,_)),N.setAttribute("uv",new wn(v,m)),N.setAttribute("faceIndex",new wn(w,p)),t.push(N),s>Es&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function dc(i,t,e){const n=new Xi(i,t,e);return n.texture.mapping=Eo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Qr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Lm(i,t,e){const n=new Float32Array(Di),s=new P(0,1,0);return new xi({name:"SphericalGaussianBlur",defines:{n:Di,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ka(),fragmentShader:`

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
		`,blending:fi,depthTest:!1,depthWrite:!1})}function fc(){return new xi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ka(),fragmentShader:`

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
		`,blending:fi,depthTest:!1,depthWrite:!1})}function pc(){return new xi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ka(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:fi,depthTest:!1,depthWrite:!1})}function Ka(){return`

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
	`}function Im(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===wa||l===ba,h=l===ks||l===Hs;if(c||h){let u=t.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new uc(i)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return c&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new uc(i)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Dm(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Za("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Nm(i,t,e,n){const s={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)t.remove(_[m])}d.removeEventListener("dispose",o),delete s[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const g in d)t.update(d[g],i.ARRAY_BUFFER);const f=u.morphAttributes;for(const g in f){const _=f[g];for(let m=0,p=_.length;m<p;m++)t.update(_[m],i.ARRAY_BUFFER)}}function c(u){const d=[],f=u.index,g=u.attributes.position;let _=0;if(f!==null){const S=f.array;_=f.version;for(let v=0,w=S.length;v<w;v+=3){const N=S[v+0],T=S[v+1],b=S[v+2];d.push(N,T,T,b,b,N)}}else if(g!==void 0){const S=g.array;_=g.version;for(let v=0,w=S.length/3-1;v<w;v+=3){const N=v+0,T=v+1,b=v+2;d.push(N,T,T,b,b,N)}}else return;const m=new(vh(d)?wh:Eh)(d,1);m.version=_;const p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Um(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){i.drawElements(n,f,r,d*o),e.update(f,n,1)}function c(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*o,g),e.update(f,n,g))}function h(d,f,g){if(g===0)return;const _=t.get("WEBGL_multi_draw");if(_===null)for(let m=0;m<g;m++)this.render(d[m]/o,f[m]);else{_.multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}}function u(d,f,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/o,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,_,0,g);let p=0;for(let S=0;S<g;S++)p+=f[S];for(let S=0;S<_.length;S++)e.update(p,n,_[S])}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Om(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Fm(i,t,e){const n=new WeakMap,s=new Ee;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let y=function(){O.dispose(),n.delete(a),a.removeEventListener("dispose",y)};var f=y;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],S=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let w=0;g===!0&&(w=1),_===!0&&(w=2),m===!0&&(w=3);let N=a.attributes.position.count*w,T=1;N>t.maxTextureSize&&(T=Math.ceil(N/t.maxTextureSize),N=t.maxTextureSize);const b=new Float32Array(N*T*4*u),O=new yh(b,N,T,u);O.type=di,O.needsUpdate=!0;const E=w*4;for(let C=0;C<u;C++){const k=p[C],H=S[C],z=v[C],j=N*T*4*C;for(let Y=0;Y<k.count;Y++){const et=Y*E;g===!0&&(s.fromBufferAttribute(k,Y),b[j+et+0]=s.x,b[j+et+1]=s.y,b[j+et+2]=s.z,b[j+et+3]=0),_===!0&&(s.fromBufferAttribute(H,Y),b[j+et+4]=s.x,b[j+et+5]=s.y,b[j+et+6]=s.z,b[j+et+7]=0),m===!0&&(s.fromBufferAttribute(z,Y),b[j+et+8]=s.x,b[j+et+9]=s.y,b[j+et+10]=s.z,b[j+et+11]=z.itemSize===4?s.w:1)}}d={count:u,texture:O,size:new _t(N,T)},n.set(a,d),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Bm(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}class Ph extends Ke{constructor(t,e,n,s,r,o,a,l,c,h=Ps){if(h!==Ps&&h!==Ws)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ps&&(n=Gs),n===void 0&&h===Ws&&(n=Vs),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:pn,this.minFilter=l!==void 0?l:pn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Lh=new Ke,Ih=new Ph(1,1);Ih.compareFunction=_h;const Dh=new yh,Nh=new Ed,Uh=new Ah,mc=[],gc=[],_c=new Float32Array(16),vc=new Float32Array(9),xc=new Float32Array(4);function $s(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=mc[s];if(r===void 0&&(r=new Float32Array(s),mc[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Ne(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ue(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function To(i,t){let e=gc[t];e===void 0&&(e=new Int32Array(t),gc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function zm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function km(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;i.uniform2fv(this.addr,t),Ue(e,t)}}function Hm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ne(e,t))return;i.uniform3fv(this.addr,t),Ue(e,t)}}function Gm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;i.uniform4fv(this.addr,t),Ue(e,t)}}function Vm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ne(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ue(e,t)}else{if(Ne(e,n))return;xc.set(n),i.uniformMatrix2fv(this.addr,!1,xc),Ue(e,n)}}function Wm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ne(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ue(e,t)}else{if(Ne(e,n))return;vc.set(n),i.uniformMatrix3fv(this.addr,!1,vc),Ue(e,n)}}function Xm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ne(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ue(e,t)}else{if(Ne(e,n))return;_c.set(n),i.uniformMatrix4fv(this.addr,!1,_c),Ue(e,n)}}function Zm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Ym(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;i.uniform2iv(this.addr,t),Ue(e,t)}}function qm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ne(e,t))return;i.uniform3iv(this.addr,t),Ue(e,t)}}function $m(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;i.uniform4iv(this.addr,t),Ue(e,t)}}function Km(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Jm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;i.uniform2uiv(this.addr,t),Ue(e,t)}}function jm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ne(e,t))return;i.uniform3uiv(this.addr,t),Ue(e,t)}}function Qm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;i.uniform4uiv(this.addr,t),Ue(e,t)}}function t0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);const r=this.type===i.SAMPLER_2D_SHADOW?Ih:Lh;e.setTexture2D(t||r,s)}function e0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Nh,s)}function n0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Uh,s)}function i0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Dh,s)}function s0(i){switch(i){case 5126:return zm;case 35664:return km;case 35665:return Hm;case 35666:return Gm;case 35674:return Vm;case 35675:return Wm;case 35676:return Xm;case 5124:case 35670:return Zm;case 35667:case 35671:return Ym;case 35668:case 35672:return qm;case 35669:case 35673:return $m;case 5125:return Km;case 36294:return Jm;case 36295:return jm;case 36296:return Qm;case 35678:case 36198:case 36298:case 36306:case 35682:return t0;case 35679:case 36299:case 36307:return e0;case 35680:case 36300:case 36308:case 36293:return n0;case 36289:case 36303:case 36311:case 36292:return i0}}function r0(i,t){i.uniform1fv(this.addr,t)}function o0(i,t){const e=$s(t,this.size,2);i.uniform2fv(this.addr,e)}function a0(i,t){const e=$s(t,this.size,3);i.uniform3fv(this.addr,e)}function l0(i,t){const e=$s(t,this.size,4);i.uniform4fv(this.addr,e)}function c0(i,t){const e=$s(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function h0(i,t){const e=$s(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function u0(i,t){const e=$s(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function d0(i,t){i.uniform1iv(this.addr,t)}function f0(i,t){i.uniform2iv(this.addr,t)}function p0(i,t){i.uniform3iv(this.addr,t)}function m0(i,t){i.uniform4iv(this.addr,t)}function g0(i,t){i.uniform1uiv(this.addr,t)}function _0(i,t){i.uniform2uiv(this.addr,t)}function v0(i,t){i.uniform3uiv(this.addr,t)}function x0(i,t){i.uniform4uiv(this.addr,t)}function y0(i,t,e){const n=this.cache,s=t.length,r=To(e,s);Ne(n,r)||(i.uniform1iv(this.addr,r),Ue(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Lh,r[o])}function M0(i,t,e){const n=this.cache,s=t.length,r=To(e,s);Ne(n,r)||(i.uniform1iv(this.addr,r),Ue(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Nh,r[o])}function S0(i,t,e){const n=this.cache,s=t.length,r=To(e,s);Ne(n,r)||(i.uniform1iv(this.addr,r),Ue(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Uh,r[o])}function E0(i,t,e){const n=this.cache,s=t.length,r=To(e,s);Ne(n,r)||(i.uniform1iv(this.addr,r),Ue(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Dh,r[o])}function w0(i){switch(i){case 5126:return r0;case 35664:return o0;case 35665:return a0;case 35666:return l0;case 35674:return c0;case 35675:return h0;case 35676:return u0;case 5124:case 35670:return d0;case 35667:case 35671:return f0;case 35668:case 35672:return p0;case 35669:case 35673:return m0;case 5125:return g0;case 36294:return _0;case 36295:return v0;case 36296:return x0;case 35678:case 36198:case 36298:case 36306:case 35682:return y0;case 35679:case 36299:case 36307:return M0;case 35680:case 36300:case 36308:case 36293:return S0;case 36289:case 36303:case 36311:case 36292:return E0}}class b0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=s0(e.type)}}class T0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=w0(e.type)}}class A0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const ha=/(\w+)(\])?(\[|\.)?/g;function yc(i,t){i.seq.push(t),i.map[t.id]=t}function R0(i,t,e){const n=i.name,s=n.length;for(ha.lastIndex=0;;){const r=ha.exec(n),o=ha.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){yc(e,c===void 0?new b0(a,i,t):new T0(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new A0(a),yc(e,u)),e=u}}}class lo{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);R0(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function Mc(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const C0=37297;let P0=0;function L0(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function I0(i){const t=ce.getPrimaries(ce.workingColorSpace),e=ce.getPrimaries(i);let n;switch(t===e?n="":t===mo&&e===po?n="LinearDisplayP3ToLinearSRGB":t===po&&e===mo&&(n="LinearSRGBToLinearDisplayP3"),i){case Si:case bo:return[n,"LinearTransferOETF"];case Pn:case Xa:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Sc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+L0(i.getShaderSource(t),o)}else return s}function D0(i,t){const e=I0(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function N0(i,t){let e;switch(t){case Gu:e="Linear";break;case Vu:e="Reinhard";break;case Wu:e="OptimizedCineon";break;case lh:e="ACESFilmic";break;case Zu:e="AgX";break;case Yu:e="Neutral";break;case Xu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function U0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ar).join(`
`)}function O0(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function F0(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function ar(i){return i!==""}function Ec(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function wc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const B0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Pa(i){return i.replace(B0,k0)}const z0=new Map;function k0(i,t){let e=$t[t];if(e===void 0){const n=z0.get(t);if(n!==void 0)e=$t[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Pa(e)}const H0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function bc(i){return i.replace(H0,G0)}function G0(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Tc(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function V0(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===rh?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===oh?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Xn&&(t="SHADOWMAP_TYPE_VSM"),t}function W0(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ks:case Hs:t="ENVMAP_TYPE_CUBE";break;case Eo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function X0(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Hs:t="ENVMAP_MODE_REFRACTION";break}return t}function Z0(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ah:t="ENVMAP_BLENDING_MULTIPLY";break;case ku:t="ENVMAP_BLENDING_MIX";break;case Hu:t="ENVMAP_BLENDING_ADD";break}return t}function Y0(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function q0(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=V0(e),c=W0(e),h=X0(e),u=Z0(e),d=Y0(e),f=U0(e),g=O0(r),_=s.createProgram();let m,p,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ar).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ar).join(`
`),p.length>0&&(p+=`
`)):(m=[Tc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ar).join(`
`),p=[Tc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==pi?"#define TONE_MAPPING":"",e.toneMapping!==pi?$t.tonemapping_pars_fragment:"",e.toneMapping!==pi?N0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",$t.colorspace_pars_fragment,D0("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ar).join(`
`)),o=Pa(o),o=Ec(o,e),o=wc(o,e),a=Pa(a),a=Ec(a,e),a=wc(a,e),o=bc(o),a=bc(a),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Gl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Gl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const v=S+m+o,w=S+p+a,N=Mc(s,s.VERTEX_SHADER,v),T=Mc(s,s.FRAGMENT_SHADER,w);s.attachShader(_,N),s.attachShader(_,T),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function b(C){if(i.debug.checkShaderErrors){const k=s.getProgramInfoLog(_).trim(),H=s.getShaderInfoLog(N).trim(),z=s.getShaderInfoLog(T).trim();let j=!0,Y=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(j=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,N,T);else{const et=Sc(s,N,"vertex"),J=Sc(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+k+`
`+et+`
`+J)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(H===""||z==="")&&(Y=!1);Y&&(C.diagnostics={runnable:j,programLog:k,vertexShader:{log:H,prefix:m},fragmentShader:{log:z,prefix:p}})}s.deleteShader(N),s.deleteShader(T),O=new lo(s,_),E=F0(s,_)}let O;this.getUniforms=function(){return O===void 0&&b(this),O};let E;this.getAttributes=function(){return E===void 0&&b(this),E};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(_,C0)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=P0++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=N,this.fragmentShader=T,this}let $0=0;class K0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new J0(t),e.set(t,n)),n}}class J0{constructor(t){this.id=$0++,this.code=t,this.usedTimes=0}}function j0(i,t,e,n,s,r,o){const a=new qa,l=new K0,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(E){return c.add(E),E===0?"uv":`uv${E}`}function m(E,y,C,k,H){const z=k.fog,j=H.geometry,Y=E.isMeshStandardMaterial?k.environment:null,et=(E.isMeshStandardMaterial?e:t).get(E.envMap||Y),J=et&&et.mapping===Eo?et.image.height:null,mt=g[E.type];E.precision!==null&&(f=s.getMaxPrecision(E.precision),f!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",f,"instead."));const yt=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Tt=yt!==void 0?yt.length:0;let q=0;j.morphAttributes.position!==void 0&&(q=1),j.morphAttributes.normal!==void 0&&(q=2),j.morphAttributes.color!==void 0&&(q=3);let lt,F,Z,K;if(mt){const ie=Ln[mt];lt=ie.vertexShader,F=ie.fragmentShader}else lt=E.vertexShader,F=E.fragmentShader,l.update(E),Z=l.getVertexShaderID(E),K=l.getFragmentShaderID(E);const $=i.getRenderTarget(),ct=H.isInstancedMesh===!0,wt=H.isBatchedMesh===!0,Bt=!!E.map,L=!!E.matcap,Zt=!!et,Gt=!!E.aoMap,he=!!E.lightMap,Ct=!!E.bumpMap,te=!!E.normalMap,Xt=!!E.displacementMap,Wt=!!E.emissiveMap,me=!!E.metalnessMap,R=!!E.roughnessMap,x=E.anisotropy>0,W=E.clearcoat>0,nt=E.dispersion>0,st=E.iridescence>0,it=E.sheen>0,Rt=E.transmission>0,ut=x&&!!E.anisotropyMap,dt=W&&!!E.clearcoatMap,Yt=W&&!!E.clearcoatNormalMap,rt=W&&!!E.clearcoatRoughnessMap,Et=st&&!!E.iridescenceMap,Jt=st&&!!E.iridescenceThicknessMap,Dt=it&&!!E.sheenColorMap,gt=it&&!!E.sheenRoughnessMap,Pt=!!E.specularMap,zt=!!E.specularColorMap,ge=!!E.specularIntensityMap,I=Rt&&!!E.transmissionMap,vt=Rt&&!!E.thicknessMap,Q=!!E.gradientMap,tt=!!E.alphaMap,at=E.alphaTest>0,Nt=!!E.alphaHash,ne=!!E.extensions;let ae=pi;E.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(ae=i.toneMapping);const Pe={shaderID:mt,shaderType:E.type,shaderName:E.name,vertexShader:lt,fragmentShader:F,defines:E.defines,customVertexShaderID:Z,customFragmentShaderID:K,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:f,batching:wt,batchingColor:wt&&H._colorsTexture!==null,instancing:ct,instancingColor:ct&&H.instanceColor!==null,instancingMorph:ct&&H.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:$===null?i.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:Si,alphaToCoverage:!!E.alphaToCoverage,map:Bt,matcap:L,envMap:Zt,envMapMode:Zt&&et.mapping,envMapCubeUVHeight:J,aoMap:Gt,lightMap:he,bumpMap:Ct,normalMap:te,displacementMap:d&&Xt,emissiveMap:Wt,normalMapObjectSpace:te&&E.normalMapType===ad,normalMapTangentSpace:te&&E.normalMapType===gh,metalnessMap:me,roughnessMap:R,anisotropy:x,anisotropyMap:ut,clearcoat:W,clearcoatMap:dt,clearcoatNormalMap:Yt,clearcoatRoughnessMap:rt,dispersion:nt,iridescence:st,iridescenceMap:Et,iridescenceThicknessMap:Jt,sheen:it,sheenColorMap:Dt,sheenRoughnessMap:gt,specularMap:Pt,specularColorMap:zt,specularIntensityMap:ge,transmission:Rt,transmissionMap:I,thicknessMap:vt,gradientMap:Q,opaque:E.transparent===!1&&E.blending===Cs&&E.alphaToCoverage===!1,alphaMap:tt,alphaTest:at,alphaHash:Nt,combine:E.combine,mapUv:Bt&&_(E.map.channel),aoMapUv:Gt&&_(E.aoMap.channel),lightMapUv:he&&_(E.lightMap.channel),bumpMapUv:Ct&&_(E.bumpMap.channel),normalMapUv:te&&_(E.normalMap.channel),displacementMapUv:Xt&&_(E.displacementMap.channel),emissiveMapUv:Wt&&_(E.emissiveMap.channel),metalnessMapUv:me&&_(E.metalnessMap.channel),roughnessMapUv:R&&_(E.roughnessMap.channel),anisotropyMapUv:ut&&_(E.anisotropyMap.channel),clearcoatMapUv:dt&&_(E.clearcoatMap.channel),clearcoatNormalMapUv:Yt&&_(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:rt&&_(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Et&&_(E.iridescenceMap.channel),iridescenceThicknessMapUv:Jt&&_(E.iridescenceThicknessMap.channel),sheenColorMapUv:Dt&&_(E.sheenColorMap.channel),sheenRoughnessMapUv:gt&&_(E.sheenRoughnessMap.channel),specularMapUv:Pt&&_(E.specularMap.channel),specularColorMapUv:zt&&_(E.specularColorMap.channel),specularIntensityMapUv:ge&&_(E.specularIntensityMap.channel),transmissionMapUv:I&&_(E.transmissionMap.channel),thicknessMapUv:vt&&_(E.thicknessMap.channel),alphaMapUv:tt&&_(E.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(te||x),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!j.attributes.uv&&(Bt||tt),fog:!!z,useFog:E.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:H.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:Tt,morphTextureStride:q,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:ae,decodeVideoTexture:Bt&&E.map.isVideoTexture===!0&&ce.getTransfer(E.map.colorSpace)===xe,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===an,flipSided:E.side===Qe,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:ne&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:ne&&E.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Pe.vertexUv1s=c.has(1),Pe.vertexUv2s=c.has(2),Pe.vertexUv3s=c.has(3),c.clear(),Pe}function p(E){const y=[];if(E.shaderID?y.push(E.shaderID):(y.push(E.customVertexShaderID),y.push(E.customFragmentShaderID)),E.defines!==void 0)for(const C in E.defines)y.push(C),y.push(E.defines[C]);return E.isRawShaderMaterial===!1&&(S(y,E),v(y,E),y.push(i.outputColorSpace)),y.push(E.customProgramCacheKey),y.join()}function S(E,y){E.push(y.precision),E.push(y.outputColorSpace),E.push(y.envMapMode),E.push(y.envMapCubeUVHeight),E.push(y.mapUv),E.push(y.alphaMapUv),E.push(y.lightMapUv),E.push(y.aoMapUv),E.push(y.bumpMapUv),E.push(y.normalMapUv),E.push(y.displacementMapUv),E.push(y.emissiveMapUv),E.push(y.metalnessMapUv),E.push(y.roughnessMapUv),E.push(y.anisotropyMapUv),E.push(y.clearcoatMapUv),E.push(y.clearcoatNormalMapUv),E.push(y.clearcoatRoughnessMapUv),E.push(y.iridescenceMapUv),E.push(y.iridescenceThicknessMapUv),E.push(y.sheenColorMapUv),E.push(y.sheenRoughnessMapUv),E.push(y.specularMapUv),E.push(y.specularColorMapUv),E.push(y.specularIntensityMapUv),E.push(y.transmissionMapUv),E.push(y.thicknessMapUv),E.push(y.combine),E.push(y.fogExp2),E.push(y.sizeAttenuation),E.push(y.morphTargetsCount),E.push(y.morphAttributeCount),E.push(y.numDirLights),E.push(y.numPointLights),E.push(y.numSpotLights),E.push(y.numSpotLightMaps),E.push(y.numHemiLights),E.push(y.numRectAreaLights),E.push(y.numDirLightShadows),E.push(y.numPointLightShadows),E.push(y.numSpotLightShadows),E.push(y.numSpotLightShadowsWithMaps),E.push(y.numLightProbes),E.push(y.shadowMapType),E.push(y.toneMapping),E.push(y.numClippingPlanes),E.push(y.numClipIntersection),E.push(y.depthPacking)}function v(E,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),E.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.skinning&&a.enable(4),y.morphTargets&&a.enable(5),y.morphNormals&&a.enable(6),y.morphColors&&a.enable(7),y.premultipliedAlpha&&a.enable(8),y.shadowMapEnabled&&a.enable(9),y.doubleSided&&a.enable(10),y.flipSided&&a.enable(11),y.useDepthPacking&&a.enable(12),y.dithering&&a.enable(13),y.transmission&&a.enable(14),y.sheen&&a.enable(15),y.opaque&&a.enable(16),y.pointsUvs&&a.enable(17),y.decodeVideoTexture&&a.enable(18),y.alphaToCoverage&&a.enable(19),E.push(a.mask)}function w(E){const y=g[E.type];let C;if(y){const k=Ln[y];C=Ud.clone(k.uniforms)}else C=E.uniforms;return C}function N(E,y){let C;for(let k=0,H=h.length;k<H;k++){const z=h[k];if(z.cacheKey===y){C=z,++C.usedTimes;break}}return C===void 0&&(C=new q0(i,y,E,r),h.push(C)),C}function T(E){if(--E.usedTimes===0){const y=h.indexOf(E);h[y]=h[h.length-1],h.pop(),E.destroy()}}function b(E){l.remove(E)}function O(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:w,acquireProgram:N,releaseProgram:T,releaseShaderCache:b,programs:h,dispose:O}}function Q0(){let i=new WeakMap;function t(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function e(r){i.delete(r)}function n(r,o,a){i.get(r)[o]=a}function s(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:s}}function tg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Ac(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Rc(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,d,f,g,_,m){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},i[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),t++,p}function a(u,d,f,g,_,m){const p=o(u,d,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function l(u,d,f,g,_,m){const p=o(u,d,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function c(u,d){e.length>1&&e.sort(u||tg),n.length>1&&n.sort(d||Ac),s.length>1&&s.sort(d||Ac)}function h(){for(let u=t,d=i.length;u<d;u++){const f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function eg(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new Rc,i.set(n,[o])):s>=r.length?(o=new Rc,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function ng(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new P,color:new Qt};break;case"SpotLight":e={position:new P,direction:new P,color:new Qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new Qt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new Qt,groundColor:new Qt};break;case"RectAreaLight":e={color:new Qt,position:new P,halfWidth:new P,halfHeight:new P};break}return i[t.id]=e,e}}}function ig(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let sg=0;function rg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function og(i){const t=new ng,e=ig(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);const s=new P,r=new ye,o=new ye;function a(c){let h=0,u=0,d=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,S=0,v=0,w=0,N=0,T=0,b=0;c.sort(rg);for(let E=0,y=c.length;E<y;E++){const C=c[E],k=C.color,H=C.intensity,z=C.distance,j=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=k.r*H,u+=k.g*H,d+=k.b*H;else if(C.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(C.sh.coefficients[Y],H);b++}else if(C.isDirectionalLight){const Y=t.get(C);if(Y.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const et=C.shadow,J=e.get(C);J.shadowBias=et.bias,J.shadowNormalBias=et.normalBias,J.shadowRadius=et.radius,J.shadowMapSize=et.mapSize,n.directionalShadow[f]=J,n.directionalShadowMap[f]=j,n.directionalShadowMatrix[f]=C.shadow.matrix,S++}n.directional[f]=Y,f++}else if(C.isSpotLight){const Y=t.get(C);Y.position.setFromMatrixPosition(C.matrixWorld),Y.color.copy(k).multiplyScalar(H),Y.distance=z,Y.coneCos=Math.cos(C.angle),Y.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),Y.decay=C.decay,n.spot[_]=Y;const et=C.shadow;if(C.map&&(n.spotLightMap[N]=C.map,N++,et.updateMatrices(C),C.castShadow&&T++),n.spotLightMatrix[_]=et.matrix,C.castShadow){const J=e.get(C);J.shadowBias=et.bias,J.shadowNormalBias=et.normalBias,J.shadowRadius=et.radius,J.shadowMapSize=et.mapSize,n.spotShadow[_]=J,n.spotShadowMap[_]=j,w++}_++}else if(C.isRectAreaLight){const Y=t.get(C);Y.color.copy(k).multiplyScalar(H),Y.halfWidth.set(C.width*.5,0,0),Y.halfHeight.set(0,C.height*.5,0),n.rectArea[m]=Y,m++}else if(C.isPointLight){const Y=t.get(C);if(Y.color.copy(C.color).multiplyScalar(C.intensity),Y.distance=C.distance,Y.decay=C.decay,C.castShadow){const et=C.shadow,J=e.get(C);J.shadowBias=et.bias,J.shadowNormalBias=et.normalBias,J.shadowRadius=et.radius,J.shadowMapSize=et.mapSize,J.shadowCameraNear=et.camera.near,J.shadowCameraFar=et.camera.far,n.pointShadow[g]=J,n.pointShadowMap[g]=j,n.pointShadowMatrix[g]=C.shadow.matrix,v++}n.point[g]=Y,g++}else if(C.isHemisphereLight){const Y=t.get(C);Y.skyColor.copy(C.color).multiplyScalar(H),Y.groundColor.copy(C.groundColor).multiplyScalar(H),n.hemi[p]=Y,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ft.LTC_FLOAT_1,n.rectAreaLTC2=ft.LTC_FLOAT_2):(n.rectAreaLTC1=ft.LTC_HALF_1,n.rectAreaLTC2=ft.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const O=n.hash;(O.directionalLength!==f||O.pointLength!==g||O.spotLength!==_||O.rectAreaLength!==m||O.hemiLength!==p||O.numDirectionalShadows!==S||O.numPointShadows!==v||O.numSpotShadows!==w||O.numSpotMaps!==N||O.numLightProbes!==b)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=w,n.spotShadowMap.length=w,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=w+N-T,n.spotLightMap.length=N,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=b,O.directionalLength=f,O.pointLength=g,O.spotLength=_,O.rectAreaLength=m,O.hemiLength=p,O.numDirectionalShadows=S,O.numPointShadows=v,O.numSpotShadows=w,O.numSpotMaps=N,O.numLightProbes=b,n.version=sg++)}function l(c,h){let u=0,d=0,f=0,g=0,_=0;const m=h.matrixWorldInverse;for(let p=0,S=c.length;p<S;p++){const v=c[p];if(v.isDirectionalLight){const w=n.directional[u];w.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(m),u++}else if(v.isSpotLight){const w=n.spot[f];w.position.setFromMatrixPosition(v.matrixWorld),w.position.applyMatrix4(m),w.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(m),f++}else if(v.isRectAreaLight){const w=n.rectArea[g];w.position.setFromMatrixPosition(v.matrixWorld),w.position.applyMatrix4(m),o.identity(),r.copy(v.matrixWorld),r.premultiply(m),o.extractRotation(r),w.halfWidth.set(v.width*.5,0,0),w.halfHeight.set(0,v.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),g++}else if(v.isPointLight){const w=n.point[d];w.position.setFromMatrixPosition(v.matrixWorld),w.position.applyMatrix4(m),d++}else if(v.isHemisphereLight){const w=n.hemi[_];w.direction.setFromMatrixPosition(v.matrixWorld),w.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function Cc(i){const t=new og(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function ag(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new Cc(i),t.set(s,[a])):r>=o.length?(a=new Cc(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class lg extends qs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=rd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class cg extends qs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const hg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ug=`uniform sampler2D shadow_pass;
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
}`;function dg(i,t,e){let n=new $a;const s=new _t,r=new _t,o=new Ee,a=new lg({depthPacking:od}),l=new cg,c={},h=e.maxTextureSize,u={[_i]:Qe,[Qe]:_i,[an]:an},d=new xi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new _t},radius:{value:4}},vertexShader:hg,fragmentShader:ug}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new ln;g.setAttribute("position",new wn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new St(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=rh;let p=this.type;this.render=function(T,b,O){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const E=i.getRenderTarget(),y=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),k=i.state;k.setBlending(fi),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const H=p!==Xn&&this.type===Xn,z=p===Xn&&this.type!==Xn;for(let j=0,Y=T.length;j<Y;j++){const et=T[j],J=et.shadow;if(J===void 0){console.warn("THREE.WebGLShadowMap:",et,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;s.copy(J.mapSize);const mt=J.getFrameExtents();if(s.multiply(mt),r.copy(J.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/mt.x),s.x=r.x*mt.x,J.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/mt.y),s.y=r.y*mt.y,J.mapSize.y=r.y)),J.map===null||H===!0||z===!0){const Tt=this.type!==Xn?{minFilter:pn,magFilter:pn}:{};J.map!==null&&J.map.dispose(),J.map=new Xi(s.x,s.y,Tt),J.map.texture.name=et.name+".shadowMap",J.camera.updateProjectionMatrix()}i.setRenderTarget(J.map),i.clear();const yt=J.getViewportCount();for(let Tt=0;Tt<yt;Tt++){const q=J.getViewport(Tt);o.set(r.x*q.x,r.y*q.y,r.x*q.z,r.y*q.w),k.viewport(o),J.updateMatrices(et,Tt),n=J.getFrustum(),w(b,O,J.camera,et,this.type)}J.isPointLightShadow!==!0&&this.type===Xn&&S(J,O),J.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(E,y,C)};function S(T,b){const O=t.update(_);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Xi(s.x,s.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(b,null,O,d,_,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(b,null,O,f,_,null)}function v(T,b,O,E){let y=null;const C=O.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(C!==void 0)y=C;else if(y=O.isPointLight===!0?l:a,i.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const k=y.uuid,H=b.uuid;let z=c[k];z===void 0&&(z={},c[k]=z);let j=z[H];j===void 0&&(j=y.clone(),z[H]=j,b.addEventListener("dispose",N)),y=j}if(y.visible=b.visible,y.wireframe=b.wireframe,E===Xn?y.side=b.shadowSide!==null?b.shadowSide:b.side:y.side=b.shadowSide!==null?b.shadowSide:u[b.side],y.alphaMap=b.alphaMap,y.alphaTest=b.alphaTest,y.map=b.map,y.clipShadows=b.clipShadows,y.clippingPlanes=b.clippingPlanes,y.clipIntersection=b.clipIntersection,y.displacementMap=b.displacementMap,y.displacementScale=b.displacementScale,y.displacementBias=b.displacementBias,y.wireframeLinewidth=b.wireframeLinewidth,y.linewidth=b.linewidth,O.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const k=i.properties.get(y);k.light=O}return y}function w(T,b,O,E,y){if(T.visible===!1)return;if(T.layers.test(b.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&y===Xn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,T.matrixWorld);const H=t.update(T),z=T.material;if(Array.isArray(z)){const j=H.groups;for(let Y=0,et=j.length;Y<et;Y++){const J=j[Y],mt=z[J.materialIndex];if(mt&&mt.visible){const yt=v(T,mt,E,y);T.onBeforeShadow(i,T,b,O,H,yt,J),i.renderBufferDirect(O,null,H,yt,T,J),T.onAfterShadow(i,T,b,O,H,yt,J)}}}else if(z.visible){const j=v(T,z,E,y);T.onBeforeShadow(i,T,b,O,H,j,null),i.renderBufferDirect(O,null,H,j,T,null),T.onAfterShadow(i,T,b,O,H,j,null)}}const k=T.children;for(let H=0,z=k.length;H<z;H++)w(k[H],b,O,E,y)}function N(T){T.target.removeEventListener("dispose",N);for(const O in c){const E=c[O],y=T.target.uuid;y in E&&(E[y].dispose(),delete E[y])}}}function fg(i){function t(){let I=!1;const vt=new Ee;let Q=null;const tt=new Ee(0,0,0,0);return{setMask:function(at){Q!==at&&!I&&(i.colorMask(at,at,at,at),Q=at)},setLocked:function(at){I=at},setClear:function(at,Nt,ne,ae,Pe){Pe===!0&&(at*=ae,Nt*=ae,ne*=ae),vt.set(at,Nt,ne,ae),tt.equals(vt)===!1&&(i.clearColor(at,Nt,ne,ae),tt.copy(vt))},reset:function(){I=!1,Q=null,tt.set(-1,0,0,0)}}}function e(){let I=!1,vt=null,Q=null,tt=null;return{setTest:function(at){at?K(i.DEPTH_TEST):$(i.DEPTH_TEST)},setMask:function(at){vt!==at&&!I&&(i.depthMask(at),vt=at)},setFunc:function(at){if(Q!==at){switch(at){case Du:i.depthFunc(i.NEVER);break;case Nu:i.depthFunc(i.ALWAYS);break;case Uu:i.depthFunc(i.LESS);break;case ho:i.depthFunc(i.LEQUAL);break;case Ou:i.depthFunc(i.EQUAL);break;case Fu:i.depthFunc(i.GEQUAL);break;case Bu:i.depthFunc(i.GREATER);break;case zu:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Q=at}},setLocked:function(at){I=at},setClear:function(at){tt!==at&&(i.clearDepth(at),tt=at)},reset:function(){I=!1,vt=null,Q=null,tt=null}}}function n(){let I=!1,vt=null,Q=null,tt=null,at=null,Nt=null,ne=null,ae=null,Pe=null;return{setTest:function(ie){I||(ie?K(i.STENCIL_TEST):$(i.STENCIL_TEST))},setMask:function(ie){vt!==ie&&!I&&(i.stencilMask(ie),vt=ie)},setFunc:function(ie,tn,en){(Q!==ie||tt!==tn||at!==en)&&(i.stencilFunc(ie,tn,en),Q=ie,tt=tn,at=en)},setOp:function(ie,tn,en){(Nt!==ie||ne!==tn||ae!==en)&&(i.stencilOp(ie,tn,en),Nt=ie,ne=tn,ae=en)},setLocked:function(ie){I=ie},setClear:function(ie){Pe!==ie&&(i.clearStencil(ie),Pe=ie)},reset:function(){I=!1,vt=null,Q=null,tt=null,at=null,Nt=null,ne=null,ae=null,Pe=null}}}const s=new t,r=new e,o=new n,a=new WeakMap,l=new WeakMap;let c={},h={},u=new WeakMap,d=[],f=null,g=!1,_=null,m=null,p=null,S=null,v=null,w=null,N=null,T=new Qt(0,0,0),b=0,O=!1,E=null,y=null,C=null,k=null,H=null;const z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,Y=0;const et=i.getParameter(i.VERSION);et.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(et)[1]),j=Y>=1):et.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(et)[1]),j=Y>=2);let J=null,mt={};const yt=i.getParameter(i.SCISSOR_BOX),Tt=i.getParameter(i.VIEWPORT),q=new Ee().fromArray(yt),lt=new Ee().fromArray(Tt);function F(I,vt,Q,tt){const at=new Uint8Array(4),Nt=i.createTexture();i.bindTexture(I,Nt),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ne=0;ne<Q;ne++)I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?i.texImage3D(vt,0,i.RGBA,1,1,tt,0,i.RGBA,i.UNSIGNED_BYTE,at):i.texImage2D(vt+ne,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,at);return Nt}const Z={};Z[i.TEXTURE_2D]=F(i.TEXTURE_2D,i.TEXTURE_2D,1),Z[i.TEXTURE_CUBE_MAP]=F(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[i.TEXTURE_2D_ARRAY]=F(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Z[i.TEXTURE_3D]=F(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),K(i.DEPTH_TEST),r.setFunc(ho),Ct(!1),te(ul),K(i.CULL_FACE),Gt(fi);function K(I){c[I]!==!0&&(i.enable(I),c[I]=!0)}function $(I){c[I]!==!1&&(i.disable(I),c[I]=!1)}function ct(I,vt){return h[I]!==vt?(i.bindFramebuffer(I,vt),h[I]=vt,I===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=vt),I===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=vt),!0):!1}function wt(I,vt){let Q=d,tt=!1;if(I){Q=u.get(vt),Q===void 0&&(Q=[],u.set(vt,Q));const at=I.textures;if(Q.length!==at.length||Q[0]!==i.COLOR_ATTACHMENT0){for(let Nt=0,ne=at.length;Nt<ne;Nt++)Q[Nt]=i.COLOR_ATTACHMENT0+Nt;Q.length=at.length,tt=!0}}else Q[0]!==i.BACK&&(Q[0]=i.BACK,tt=!0);tt&&i.drawBuffers(Q)}function Bt(I){return f!==I?(i.useProgram(I),f=I,!0):!1}const L={[Ii]:i.FUNC_ADD,[gu]:i.FUNC_SUBTRACT,[_u]:i.FUNC_REVERSE_SUBTRACT};L[vu]=i.MIN,L[xu]=i.MAX;const Zt={[yu]:i.ZERO,[Mu]:i.ONE,[Su]:i.SRC_COLOR,[Sa]:i.SRC_ALPHA,[Ru]:i.SRC_ALPHA_SATURATE,[Tu]:i.DST_COLOR,[wu]:i.DST_ALPHA,[Eu]:i.ONE_MINUS_SRC_COLOR,[Ea]:i.ONE_MINUS_SRC_ALPHA,[Au]:i.ONE_MINUS_DST_COLOR,[bu]:i.ONE_MINUS_DST_ALPHA,[Cu]:i.CONSTANT_COLOR,[Pu]:i.ONE_MINUS_CONSTANT_COLOR,[Lu]:i.CONSTANT_ALPHA,[Iu]:i.ONE_MINUS_CONSTANT_ALPHA};function Gt(I,vt,Q,tt,at,Nt,ne,ae,Pe,ie){if(I===fi){g===!0&&($(i.BLEND),g=!1);return}if(g===!1&&(K(i.BLEND),g=!0),I!==mu){if(I!==_||ie!==O){if((m!==Ii||v!==Ii)&&(i.blendEquation(i.FUNC_ADD),m=Ii,v=Ii),ie)switch(I){case Cs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case dl:i.blendFunc(i.ONE,i.ONE);break;case fl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case pl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Cs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case dl:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case fl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case pl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}p=null,S=null,w=null,N=null,T.set(0,0,0),b=0,_=I,O=ie}return}at=at||vt,Nt=Nt||Q,ne=ne||tt,(vt!==m||at!==v)&&(i.blendEquationSeparate(L[vt],L[at]),m=vt,v=at),(Q!==p||tt!==S||Nt!==w||ne!==N)&&(i.blendFuncSeparate(Zt[Q],Zt[tt],Zt[Nt],Zt[ne]),p=Q,S=tt,w=Nt,N=ne),(ae.equals(T)===!1||Pe!==b)&&(i.blendColor(ae.r,ae.g,ae.b,Pe),T.copy(ae),b=Pe),_=I,O=!1}function he(I,vt){I.side===an?$(i.CULL_FACE):K(i.CULL_FACE);let Q=I.side===Qe;vt&&(Q=!Q),Ct(Q),I.blending===Cs&&I.transparent===!1?Gt(fi):Gt(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),r.setFunc(I.depthFunc),r.setTest(I.depthTest),r.setMask(I.depthWrite),s.setMask(I.colorWrite);const tt=I.stencilWrite;o.setTest(tt),tt&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Wt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?K(i.SAMPLE_ALPHA_TO_COVERAGE):$(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ct(I){E!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),E=I)}function te(I){I!==fu?(K(i.CULL_FACE),I!==y&&(I===ul?i.cullFace(i.BACK):I===pu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):$(i.CULL_FACE),y=I}function Xt(I){I!==C&&(j&&i.lineWidth(I),C=I)}function Wt(I,vt,Q){I?(K(i.POLYGON_OFFSET_FILL),(k!==vt||H!==Q)&&(i.polygonOffset(vt,Q),k=vt,H=Q)):$(i.POLYGON_OFFSET_FILL)}function me(I){I?K(i.SCISSOR_TEST):$(i.SCISSOR_TEST)}function R(I){I===void 0&&(I=i.TEXTURE0+z-1),J!==I&&(i.activeTexture(I),J=I)}function x(I,vt,Q){Q===void 0&&(J===null?Q=i.TEXTURE0+z-1:Q=J);let tt=mt[Q];tt===void 0&&(tt={type:void 0,texture:void 0},mt[Q]=tt),(tt.type!==I||tt.texture!==vt)&&(J!==Q&&(i.activeTexture(Q),J=Q),i.bindTexture(I,vt||Z[I]),tt.type=I,tt.texture=vt)}function W(){const I=mt[J];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function nt(){try{i.compressedTexImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function st(){try{i.compressedTexImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function it(){try{i.texSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Rt(){try{i.texSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ut(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function dt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Yt(){try{i.texStorage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function rt(){try{i.texStorage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Et(){try{i.texImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Jt(){try{i.texImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Dt(I){q.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),q.copy(I))}function gt(I){lt.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),lt.copy(I))}function Pt(I,vt){let Q=l.get(vt);Q===void 0&&(Q=new WeakMap,l.set(vt,Q));let tt=Q.get(I);tt===void 0&&(tt=i.getUniformBlockIndex(vt,I.name),Q.set(I,tt))}function zt(I,vt){const tt=l.get(vt).get(I);a.get(vt)!==tt&&(i.uniformBlockBinding(vt,tt,I.__bindingPointIndex),a.set(vt,tt))}function ge(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},J=null,mt={},h={},u=new WeakMap,d=[],f=null,g=!1,_=null,m=null,p=null,S=null,v=null,w=null,N=null,T=new Qt(0,0,0),b=0,O=!1,E=null,y=null,C=null,k=null,H=null,q.set(0,0,i.canvas.width,i.canvas.height),lt.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:K,disable:$,bindFramebuffer:ct,drawBuffers:wt,useProgram:Bt,setBlending:Gt,setMaterial:he,setFlipSided:Ct,setCullFace:te,setLineWidth:Xt,setPolygonOffset:Wt,setScissorTest:me,activeTexture:R,bindTexture:x,unbindTexture:W,compressedTexImage2D:nt,compressedTexImage3D:st,texImage2D:Et,texImage3D:Jt,updateUBOMapping:Pt,uniformBlockBinding:zt,texStorage2D:Yt,texStorage3D:rt,texSubImage2D:it,texSubImage3D:Rt,compressedTexSubImage2D:ut,compressedTexSubImage3D:dt,scissor:Dt,viewport:gt,reset:ge}}function pg(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new _t,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,x){return f?new OffscreenCanvas(R,x):_o("canvas")}function _(R,x,W){let nt=1;const st=me(R);if((st.width>W||st.height>W)&&(nt=W/Math.max(st.width,st.height)),nt<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const it=Math.floor(nt*st.width),Rt=Math.floor(nt*st.height);u===void 0&&(u=g(it,Rt));const ut=x?g(it,Rt):u;return ut.width=it,ut.height=Rt,ut.getContext("2d").drawImage(R,0,0,it,Rt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+st.width+"x"+st.height+") to ("+it+"x"+Rt+")."),ut}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+st.width+"x"+st.height+")."),R;return R}function m(R){return R.generateMipmaps&&R.minFilter!==pn&&R.minFilter!==Sn}function p(R){i.generateMipmap(R)}function S(R,x,W,nt,st=!1){if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let it=x;if(x===i.RED&&(W===i.FLOAT&&(it=i.R32F),W===i.HALF_FLOAT&&(it=i.R16F),W===i.UNSIGNED_BYTE&&(it=i.R8)),x===i.RED_INTEGER&&(W===i.UNSIGNED_BYTE&&(it=i.R8UI),W===i.UNSIGNED_SHORT&&(it=i.R16UI),W===i.UNSIGNED_INT&&(it=i.R32UI),W===i.BYTE&&(it=i.R8I),W===i.SHORT&&(it=i.R16I),W===i.INT&&(it=i.R32I)),x===i.RG&&(W===i.FLOAT&&(it=i.RG32F),W===i.HALF_FLOAT&&(it=i.RG16F),W===i.UNSIGNED_BYTE&&(it=i.RG8)),x===i.RG_INTEGER&&(W===i.UNSIGNED_BYTE&&(it=i.RG8UI),W===i.UNSIGNED_SHORT&&(it=i.RG16UI),W===i.UNSIGNED_INT&&(it=i.RG32UI),W===i.BYTE&&(it=i.RG8I),W===i.SHORT&&(it=i.RG16I),W===i.INT&&(it=i.RG32I)),x===i.RGB&&W===i.UNSIGNED_INT_5_9_9_9_REV&&(it=i.RGB9_E5),x===i.RGBA){const Rt=st?fo:ce.getTransfer(nt);W===i.FLOAT&&(it=i.RGBA32F),W===i.HALF_FLOAT&&(it=i.RGBA16F),W===i.UNSIGNED_BYTE&&(it=Rt===xe?i.SRGB8_ALPHA8:i.RGBA8),W===i.UNSIGNED_SHORT_4_4_4_4&&(it=i.RGBA4),W===i.UNSIGNED_SHORT_5_5_5_1&&(it=i.RGB5_A1)}return(it===i.R16F||it===i.R32F||it===i.RG16F||it===i.RG32F||it===i.RGBA16F||it===i.RGBA32F)&&t.get("EXT_color_buffer_float"),it}function v(R,x){let W;return R?x===null||x===Gs||x===Vs?W=i.DEPTH24_STENCIL8:x===di?W=i.DEPTH32F_STENCIL8:x===uo&&(W=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Gs||x===Vs?W=i.DEPTH_COMPONENT24:x===di?W=i.DEPTH_COMPONENT32F:x===uo&&(W=i.DEPTH_COMPONENT16),W}function w(R,x){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==pn&&R.minFilter!==Sn?Math.log2(Math.max(x.width,x.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?x.mipmaps.length:1}function N(R){const x=R.target;x.removeEventListener("dispose",N),b(x),x.isVideoTexture&&h.delete(x)}function T(R){const x=R.target;x.removeEventListener("dispose",T),E(x)}function b(R){const x=n.get(R);if(x.__webglInit===void 0)return;const W=R.source,nt=d.get(W);if(nt){const st=nt[x.__cacheKey];st.usedTimes--,st.usedTimes===0&&O(R),Object.keys(nt).length===0&&d.delete(W)}n.remove(R)}function O(R){const x=n.get(R);i.deleteTexture(x.__webglTexture);const W=R.source,nt=d.get(W);delete nt[x.__cacheKey],o.memory.textures--}function E(R){const x=n.get(R);if(R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let nt=0;nt<6;nt++){if(Array.isArray(x.__webglFramebuffer[nt]))for(let st=0;st<x.__webglFramebuffer[nt].length;st++)i.deleteFramebuffer(x.__webglFramebuffer[nt][st]);else i.deleteFramebuffer(x.__webglFramebuffer[nt]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[nt])}else{if(Array.isArray(x.__webglFramebuffer))for(let nt=0;nt<x.__webglFramebuffer.length;nt++)i.deleteFramebuffer(x.__webglFramebuffer[nt]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let nt=0;nt<x.__webglColorRenderbuffer.length;nt++)x.__webglColorRenderbuffer[nt]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[nt]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const W=R.textures;for(let nt=0,st=W.length;nt<st;nt++){const it=n.get(W[nt]);it.__webglTexture&&(i.deleteTexture(it.__webglTexture),o.memory.textures--),n.remove(W[nt])}n.remove(R)}let y=0;function C(){y=0}function k(){const R=y;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),y+=1,R}function H(R){const x=[];return x.push(R.wrapS),x.push(R.wrapT),x.push(R.wrapR||0),x.push(R.magFilter),x.push(R.minFilter),x.push(R.anisotropy),x.push(R.internalFormat),x.push(R.format),x.push(R.type),x.push(R.generateMipmaps),x.push(R.premultiplyAlpha),x.push(R.flipY),x.push(R.unpackAlignment),x.push(R.colorSpace),x.join()}function z(R,x){const W=n.get(R);if(R.isVideoTexture&&Xt(R),R.isRenderTargetTexture===!1&&R.version>0&&W.__version!==R.version){const nt=R.image;if(nt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(nt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{lt(W,R,x);return}}e.bindTexture(i.TEXTURE_2D,W.__webglTexture,i.TEXTURE0+x)}function j(R,x){const W=n.get(R);if(R.version>0&&W.__version!==R.version){lt(W,R,x);return}e.bindTexture(i.TEXTURE_2D_ARRAY,W.__webglTexture,i.TEXTURE0+x)}function Y(R,x){const W=n.get(R);if(R.version>0&&W.__version!==R.version){lt(W,R,x);return}e.bindTexture(i.TEXTURE_3D,W.__webglTexture,i.TEXTURE0+x)}function et(R,x){const W=n.get(R);if(R.version>0&&W.__version!==R.version){F(W,R,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture,i.TEXTURE0+x)}const J={[Ta]:i.REPEAT,[Ni]:i.CLAMP_TO_EDGE,[Aa]:i.MIRRORED_REPEAT},mt={[pn]:i.NEAREST,[qu]:i.NEAREST_MIPMAP_NEAREST,[Ir]:i.NEAREST_MIPMAP_LINEAR,[Sn]:i.LINEAR,[Do]:i.LINEAR_MIPMAP_NEAREST,[Ui]:i.LINEAR_MIPMAP_LINEAR},yt={[ld]:i.NEVER,[pd]:i.ALWAYS,[cd]:i.LESS,[_h]:i.LEQUAL,[hd]:i.EQUAL,[fd]:i.GEQUAL,[ud]:i.GREATER,[dd]:i.NOTEQUAL};function Tt(R,x){if(x.type===di&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===Sn||x.magFilter===Do||x.magFilter===Ir||x.magFilter===Ui||x.minFilter===Sn||x.minFilter===Do||x.minFilter===Ir||x.minFilter===Ui)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,J[x.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,J[x.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,J[x.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,mt[x.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,mt[x.minFilter]),x.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,yt[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===pn||x.minFilter!==Ir&&x.minFilter!==Ui||x.type===di&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const W=t.get("EXT_texture_filter_anisotropic");i.texParameterf(R,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function q(R,x){let W=!1;R.__webglInit===void 0&&(R.__webglInit=!0,x.addEventListener("dispose",N));const nt=x.source;let st=d.get(nt);st===void 0&&(st={},d.set(nt,st));const it=H(x);if(it!==R.__cacheKey){st[it]===void 0&&(st[it]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,W=!0),st[it].usedTimes++;const Rt=st[R.__cacheKey];Rt!==void 0&&(st[R.__cacheKey].usedTimes--,Rt.usedTimes===0&&O(x)),R.__cacheKey=it,R.__webglTexture=st[it].texture}return W}function lt(R,x,W){let nt=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(nt=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(nt=i.TEXTURE_3D);const st=q(R,x),it=x.source;e.bindTexture(nt,R.__webglTexture,i.TEXTURE0+W);const Rt=n.get(it);if(it.version!==Rt.__version||st===!0){e.activeTexture(i.TEXTURE0+W);const ut=ce.getPrimaries(ce.workingColorSpace),dt=x.colorSpace===hi?null:ce.getPrimaries(x.colorSpace),Yt=x.colorSpace===hi||ut===dt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Yt);let rt=_(x.image,!1,s.maxTextureSize);rt=Wt(x,rt);const Et=r.convert(x.format,x.colorSpace),Jt=r.convert(x.type);let Dt=S(x.internalFormat,Et,Jt,x.colorSpace,x.isVideoTexture);Tt(nt,x);let gt;const Pt=x.mipmaps,zt=x.isVideoTexture!==!0,ge=Rt.__version===void 0||st===!0,I=it.dataReady,vt=w(x,rt);if(x.isDepthTexture)Dt=v(x.format===Ws,x.type),ge&&(zt?e.texStorage2D(i.TEXTURE_2D,1,Dt,rt.width,rt.height):e.texImage2D(i.TEXTURE_2D,0,Dt,rt.width,rt.height,0,Et,Jt,null));else if(x.isDataTexture)if(Pt.length>0){zt&&ge&&e.texStorage2D(i.TEXTURE_2D,vt,Dt,Pt[0].width,Pt[0].height);for(let Q=0,tt=Pt.length;Q<tt;Q++)gt=Pt[Q],zt?I&&e.texSubImage2D(i.TEXTURE_2D,Q,0,0,gt.width,gt.height,Et,Jt,gt.data):e.texImage2D(i.TEXTURE_2D,Q,Dt,gt.width,gt.height,0,Et,Jt,gt.data);x.generateMipmaps=!1}else zt?(ge&&e.texStorage2D(i.TEXTURE_2D,vt,Dt,rt.width,rt.height),I&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,rt.width,rt.height,Et,Jt,rt.data)):e.texImage2D(i.TEXTURE_2D,0,Dt,rt.width,rt.height,0,Et,Jt,rt.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){zt&&ge&&e.texStorage3D(i.TEXTURE_2D_ARRAY,vt,Dt,Pt[0].width,Pt[0].height,rt.depth);for(let Q=0,tt=Pt.length;Q<tt;Q++)if(gt=Pt[Q],x.format!==Dn)if(Et!==null)if(zt){if(I)if(x.layerUpdates.size>0){for(const at of x.layerUpdates){const Nt=gt.width*gt.height;e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,at,gt.width,gt.height,1,Et,gt.data.slice(Nt*at,Nt*(at+1)),0,0)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,gt.width,gt.height,rt.depth,Et,gt.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Q,Dt,gt.width,gt.height,rt.depth,0,gt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else zt?I&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,gt.width,gt.height,rt.depth,Et,Jt,gt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Q,Dt,gt.width,gt.height,rt.depth,0,Et,Jt,gt.data)}else{zt&&ge&&e.texStorage2D(i.TEXTURE_2D,vt,Dt,Pt[0].width,Pt[0].height);for(let Q=0,tt=Pt.length;Q<tt;Q++)gt=Pt[Q],x.format!==Dn?Et!==null?zt?I&&e.compressedTexSubImage2D(i.TEXTURE_2D,Q,0,0,gt.width,gt.height,Et,gt.data):e.compressedTexImage2D(i.TEXTURE_2D,Q,Dt,gt.width,gt.height,0,gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):zt?I&&e.texSubImage2D(i.TEXTURE_2D,Q,0,0,gt.width,gt.height,Et,Jt,gt.data):e.texImage2D(i.TEXTURE_2D,Q,Dt,gt.width,gt.height,0,Et,Jt,gt.data)}else if(x.isDataArrayTexture)if(zt){if(ge&&e.texStorage3D(i.TEXTURE_2D_ARRAY,vt,Dt,rt.width,rt.height,rt.depth),I)if(x.layerUpdates.size>0){let Q;switch(Jt){case i.UNSIGNED_BYTE:switch(Et){case i.ALPHA:Q=1;break;case i.LUMINANCE:Q=1;break;case i.LUMINANCE_ALPHA:Q=2;break;case i.RGB:Q=3;break;case i.RGBA:Q=4;break;default:throw new Error(`Unknown texel size for format ${Et}.`)}break;case i.UNSIGNED_SHORT_4_4_4_4:case i.UNSIGNED_SHORT_5_5_5_1:case i.UNSIGNED_SHORT_5_6_5:Q=1;break;default:throw new Error(`Unknown texel size for type ${Jt}.`)}const tt=rt.width*rt.height*Q;for(const at of x.layerUpdates)e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,at,rt.width,rt.height,1,Et,Jt,rt.data.slice(tt*at,tt*(at+1)));x.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,Et,Jt,rt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Dt,rt.width,rt.height,rt.depth,0,Et,Jt,rt.data);else if(x.isData3DTexture)zt?(ge&&e.texStorage3D(i.TEXTURE_3D,vt,Dt,rt.width,rt.height,rt.depth),I&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,Et,Jt,rt.data)):e.texImage3D(i.TEXTURE_3D,0,Dt,rt.width,rt.height,rt.depth,0,Et,Jt,rt.data);else if(x.isFramebufferTexture){if(ge)if(zt)e.texStorage2D(i.TEXTURE_2D,vt,Dt,rt.width,rt.height);else{let Q=rt.width,tt=rt.height;for(let at=0;at<vt;at++)e.texImage2D(i.TEXTURE_2D,at,Dt,Q,tt,0,Et,Jt,null),Q>>=1,tt>>=1}}else if(Pt.length>0){if(zt&&ge){const Q=me(Pt[0]);e.texStorage2D(i.TEXTURE_2D,vt,Dt,Q.width,Q.height)}for(let Q=0,tt=Pt.length;Q<tt;Q++)gt=Pt[Q],zt?I&&e.texSubImage2D(i.TEXTURE_2D,Q,0,0,Et,Jt,gt):e.texImage2D(i.TEXTURE_2D,Q,Dt,Et,Jt,gt);x.generateMipmaps=!1}else if(zt){if(ge){const Q=me(rt);e.texStorage2D(i.TEXTURE_2D,vt,Dt,Q.width,Q.height)}I&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Et,Jt,rt)}else e.texImage2D(i.TEXTURE_2D,0,Dt,Et,Jt,rt);m(x)&&p(nt),Rt.__version=it.version,x.onUpdate&&x.onUpdate(x)}R.__version=x.version}function F(R,x,W){if(x.image.length!==6)return;const nt=q(R,x),st=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+W);const it=n.get(st);if(st.version!==it.__version||nt===!0){e.activeTexture(i.TEXTURE0+W);const Rt=ce.getPrimaries(ce.workingColorSpace),ut=x.colorSpace===hi?null:ce.getPrimaries(x.colorSpace),dt=x.colorSpace===hi||Rt===ut?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,dt);const Yt=x.isCompressedTexture||x.image[0].isCompressedTexture,rt=x.image[0]&&x.image[0].isDataTexture,Et=[];for(let tt=0;tt<6;tt++)!Yt&&!rt?Et[tt]=_(x.image[tt],!0,s.maxCubemapSize):Et[tt]=rt?x.image[tt].image:x.image[tt],Et[tt]=Wt(x,Et[tt]);const Jt=Et[0],Dt=r.convert(x.format,x.colorSpace),gt=r.convert(x.type),Pt=S(x.internalFormat,Dt,gt,x.colorSpace),zt=x.isVideoTexture!==!0,ge=it.__version===void 0||nt===!0,I=st.dataReady;let vt=w(x,Jt);Tt(i.TEXTURE_CUBE_MAP,x);let Q;if(Yt){zt&&ge&&e.texStorage2D(i.TEXTURE_CUBE_MAP,vt,Pt,Jt.width,Jt.height);for(let tt=0;tt<6;tt++){Q=Et[tt].mipmaps;for(let at=0;at<Q.length;at++){const Nt=Q[at];x.format!==Dn?Dt!==null?zt?I&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,at,0,0,Nt.width,Nt.height,Dt,Nt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,at,Pt,Nt.width,Nt.height,0,Nt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):zt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,at,0,0,Nt.width,Nt.height,Dt,gt,Nt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,at,Pt,Nt.width,Nt.height,0,Dt,gt,Nt.data)}}}else{if(Q=x.mipmaps,zt&&ge){Q.length>0&&vt++;const tt=me(Et[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,vt,Pt,tt.width,tt.height)}for(let tt=0;tt<6;tt++)if(rt){zt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,Et[tt].width,Et[tt].height,Dt,gt,Et[tt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,Pt,Et[tt].width,Et[tt].height,0,Dt,gt,Et[tt].data);for(let at=0;at<Q.length;at++){const ne=Q[at].image[tt].image;zt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,at+1,0,0,ne.width,ne.height,Dt,gt,ne.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,at+1,Pt,ne.width,ne.height,0,Dt,gt,ne.data)}}else{zt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,Dt,gt,Et[tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,Pt,Dt,gt,Et[tt]);for(let at=0;at<Q.length;at++){const Nt=Q[at];zt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,at+1,0,0,Dt,gt,Nt.image[tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,at+1,Pt,Dt,gt,Nt.image[tt])}}}m(x)&&p(i.TEXTURE_CUBE_MAP),it.__version=st.version,x.onUpdate&&x.onUpdate(x)}R.__version=x.version}function Z(R,x,W,nt,st,it){const Rt=r.convert(W.format,W.colorSpace),ut=r.convert(W.type),dt=S(W.internalFormat,Rt,ut,W.colorSpace);if(!n.get(x).__hasExternalTextures){const rt=Math.max(1,x.width>>it),Et=Math.max(1,x.height>>it);st===i.TEXTURE_3D||st===i.TEXTURE_2D_ARRAY?e.texImage3D(st,it,dt,rt,Et,x.depth,0,Rt,ut,null):e.texImage2D(st,it,dt,rt,Et,0,Rt,ut,null)}e.bindFramebuffer(i.FRAMEBUFFER,R),te(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,nt,st,n.get(W).__webglTexture,0,Ct(x)):(st===i.TEXTURE_2D||st>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&st<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,nt,st,n.get(W).__webglTexture,it),e.bindFramebuffer(i.FRAMEBUFFER,null)}function K(R,x,W){if(i.bindRenderbuffer(i.RENDERBUFFER,R),x.depthBuffer){const nt=x.depthTexture,st=nt&&nt.isDepthTexture?nt.type:null,it=v(x.stencilBuffer,st),Rt=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ut=Ct(x);te(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ut,it,x.width,x.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,ut,it,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,it,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Rt,i.RENDERBUFFER,R)}else{const nt=x.textures;for(let st=0;st<nt.length;st++){const it=nt[st],Rt=r.convert(it.format,it.colorSpace),ut=r.convert(it.type),dt=S(it.internalFormat,Rt,ut,it.colorSpace),Yt=Ct(x);W&&te(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Yt,dt,x.width,x.height):te(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Yt,dt,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,dt,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function $(R,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,R),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),z(x.depthTexture,0);const nt=n.get(x.depthTexture).__webglTexture,st=Ct(x);if(x.depthTexture.format===Ps)te(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,nt,0,st):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,nt,0);else if(x.depthTexture.format===Ws)te(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,nt,0,st):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,nt,0);else throw new Error("Unknown depthTexture format")}function ct(R){const x=n.get(R),W=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!x.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");$(x.__webglFramebuffer,R)}else if(W){x.__webglDepthbuffer=[];for(let nt=0;nt<6;nt++)e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[nt]),x.__webglDepthbuffer[nt]=i.createRenderbuffer(),K(x.__webglDepthbuffer[nt],R,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer=i.createRenderbuffer(),K(x.__webglDepthbuffer,R,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function wt(R,x,W){const nt=n.get(R);x!==void 0&&Z(nt.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),W!==void 0&&ct(R)}function Bt(R){const x=R.texture,W=n.get(R),nt=n.get(x);R.addEventListener("dispose",T);const st=R.textures,it=R.isWebGLCubeRenderTarget===!0,Rt=st.length>1;if(Rt||(nt.__webglTexture===void 0&&(nt.__webglTexture=i.createTexture()),nt.__version=x.version,o.memory.textures++),it){W.__webglFramebuffer=[];for(let ut=0;ut<6;ut++)if(x.mipmaps&&x.mipmaps.length>0){W.__webglFramebuffer[ut]=[];for(let dt=0;dt<x.mipmaps.length;dt++)W.__webglFramebuffer[ut][dt]=i.createFramebuffer()}else W.__webglFramebuffer[ut]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){W.__webglFramebuffer=[];for(let ut=0;ut<x.mipmaps.length;ut++)W.__webglFramebuffer[ut]=i.createFramebuffer()}else W.__webglFramebuffer=i.createFramebuffer();if(Rt)for(let ut=0,dt=st.length;ut<dt;ut++){const Yt=n.get(st[ut]);Yt.__webglTexture===void 0&&(Yt.__webglTexture=i.createTexture(),o.memory.textures++)}if(R.samples>0&&te(R)===!1){W.__webglMultisampledFramebuffer=i.createFramebuffer(),W.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let ut=0;ut<st.length;ut++){const dt=st[ut];W.__webglColorRenderbuffer[ut]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,W.__webglColorRenderbuffer[ut]);const Yt=r.convert(dt.format,dt.colorSpace),rt=r.convert(dt.type),Et=S(dt.internalFormat,Yt,rt,dt.colorSpace,R.isXRRenderTarget===!0),Jt=Ct(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,Jt,Et,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,W.__webglColorRenderbuffer[ut])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(W.__webglDepthRenderbuffer=i.createRenderbuffer(),K(W.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(it){e.bindTexture(i.TEXTURE_CUBE_MAP,nt.__webglTexture),Tt(i.TEXTURE_CUBE_MAP,x);for(let ut=0;ut<6;ut++)if(x.mipmaps&&x.mipmaps.length>0)for(let dt=0;dt<x.mipmaps.length;dt++)Z(W.__webglFramebuffer[ut][dt],R,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,dt);else Z(W.__webglFramebuffer[ut],R,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0);m(x)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Rt){for(let ut=0,dt=st.length;ut<dt;ut++){const Yt=st[ut],rt=n.get(Yt);e.bindTexture(i.TEXTURE_2D,rt.__webglTexture),Tt(i.TEXTURE_2D,Yt),Z(W.__webglFramebuffer,R,Yt,i.COLOR_ATTACHMENT0+ut,i.TEXTURE_2D,0),m(Yt)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let ut=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ut=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ut,nt.__webglTexture),Tt(ut,x),x.mipmaps&&x.mipmaps.length>0)for(let dt=0;dt<x.mipmaps.length;dt++)Z(W.__webglFramebuffer[dt],R,x,i.COLOR_ATTACHMENT0,ut,dt);else Z(W.__webglFramebuffer,R,x,i.COLOR_ATTACHMENT0,ut,0);m(x)&&p(ut),e.unbindTexture()}R.depthBuffer&&ct(R)}function L(R){const x=R.textures;for(let W=0,nt=x.length;W<nt;W++){const st=x[W];if(m(st)){const it=R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Rt=n.get(st).__webglTexture;e.bindTexture(it,Rt),p(it),e.unbindTexture()}}}const Zt=[],Gt=[];function he(R){if(R.samples>0){if(te(R)===!1){const x=R.textures,W=R.width,nt=R.height;let st=i.COLOR_BUFFER_BIT;const it=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Rt=n.get(R),ut=x.length>1;if(ut)for(let dt=0;dt<x.length;dt++)e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Rt.__webglFramebuffer);for(let dt=0;dt<x.length;dt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(st|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(st|=i.STENCIL_BUFFER_BIT)),ut){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Rt.__webglColorRenderbuffer[dt]);const Yt=n.get(x[dt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Yt,0)}i.blitFramebuffer(0,0,W,nt,0,0,W,nt,st,i.NEAREST),l===!0&&(Zt.length=0,Gt.length=0,Zt.push(i.COLOR_ATTACHMENT0+dt),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Zt.push(it),Gt.push(it),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Gt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Zt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ut)for(let dt=0;dt<x.length;dt++){e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.RENDERBUFFER,Rt.__webglColorRenderbuffer[dt]);const Yt=n.get(x[dt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.TEXTURE_2D,Yt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Rt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const x=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function Ct(R){return Math.min(s.maxSamples,R.samples)}function te(R){const x=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Xt(R){const x=o.render.frame;h.get(R)!==x&&(h.set(R,x),R.update())}function Wt(R,x){const W=R.colorSpace,nt=R.format,st=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||W!==Si&&W!==hi&&(ce.getTransfer(W)===xe?(nt!==Dn||st!==vi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),x}function me(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=C,this.setTexture2D=z,this.setTexture2DArray=j,this.setTexture3D=Y,this.setTextureCube=et,this.rebindTextures=wt,this.setupRenderTarget=Bt,this.updateRenderTargetMipmap=L,this.updateMultisampleRenderTarget=he,this.setupDepthRenderbuffer=ct,this.setupFrameBufferTexture=Z,this.useMultisampledRTT=te}function mg(i,t){function e(n,s=hi){let r;const o=ce.getTransfer(s);if(n===vi)return i.UNSIGNED_BYTE;if(n===uh)return i.UNSIGNED_SHORT_4_4_4_4;if(n===dh)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ju)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===$u)return i.BYTE;if(n===Ku)return i.SHORT;if(n===uo)return i.UNSIGNED_SHORT;if(n===hh)return i.INT;if(n===Gs)return i.UNSIGNED_INT;if(n===di)return i.FLOAT;if(n===wo)return i.HALF_FLOAT;if(n===ju)return i.ALPHA;if(n===Qu)return i.RGB;if(n===Dn)return i.RGBA;if(n===td)return i.LUMINANCE;if(n===ed)return i.LUMINANCE_ALPHA;if(n===Ps)return i.DEPTH_COMPONENT;if(n===Ws)return i.DEPTH_STENCIL;if(n===nd)return i.RED;if(n===fh)return i.RED_INTEGER;if(n===id)return i.RG;if(n===ph)return i.RG_INTEGER;if(n===mh)return i.RGBA_INTEGER;if(n===No||n===Uo||n===Oo||n===Fo)if(o===xe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===No)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Uo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Oo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Fo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===No)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Uo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Oo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Fo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ml||n===gl||n===_l||n===vl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ml)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===gl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===_l)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===vl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===xl||n===yl||n===Ml)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===xl||n===yl)return o===xe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ml)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Sl||n===El||n===wl||n===bl||n===Tl||n===Al||n===Rl||n===Cl||n===Pl||n===Ll||n===Il||n===Dl||n===Nl||n===Ul)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Sl)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===El)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===wl)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===bl)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Tl)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Al)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Rl)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Cl)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Pl)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ll)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Il)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Dl)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Nl)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ul)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Bo||n===Ol||n===Fl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Bo)return o===xe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ol)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Fl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===sd||n===Bl||n===zl||n===kl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Bo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Bl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===zl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===kl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Vs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class gg extends on{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class jn extends ze{constructor(){super(),this.isGroup=!0,this.type="Group"}}const _g={type:"move"};class ua{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new jn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new jn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new jn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(_g)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new jn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const vg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,xg=`
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

}`;class yg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Ke,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new xi({vertexShader:vg,fragmentShader:xg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new St(new Qn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}}class Mg extends Ys{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null;const _=new yg,m=e.getContextAttributes();let p=null,S=null;const v=[],w=[],N=new _t;let T=null;const b=new on;b.layers.enable(1),b.viewport=new Ee;const O=new on;O.layers.enable(2),O.viewport=new Ee;const E=[b,O],y=new gg;y.layers.enable(1),y.layers.enable(2);let C=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(F){let Z=v[F];return Z===void 0&&(Z=new ua,v[F]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(F){let Z=v[F];return Z===void 0&&(Z=new ua,v[F]=Z),Z.getGripSpace()},this.getHand=function(F){let Z=v[F];return Z===void 0&&(Z=new ua,v[F]=Z),Z.getHandSpace()};function H(F){const Z=w.indexOf(F.inputSource);if(Z===-1)return;const K=v[Z];K!==void 0&&(K.update(F.inputSource,F.frame,c||o),K.dispatchEvent({type:F.type,data:F.inputSource}))}function z(){s.removeEventListener("select",H),s.removeEventListener("selectstart",H),s.removeEventListener("selectend",H),s.removeEventListener("squeeze",H),s.removeEventListener("squeezestart",H),s.removeEventListener("squeezeend",H),s.removeEventListener("end",z),s.removeEventListener("inputsourceschange",j);for(let F=0;F<v.length;F++){const Z=w[F];Z!==null&&(w[F]=null,v[F].disconnect(Z))}C=null,k=null,_.reset(),t.setRenderTarget(p),f=null,d=null,u=null,s=null,S=null,lt.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(N.width,N.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(F){r=F,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(F){a=F,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(F){c=F},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(F){if(s=F,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",H),s.addEventListener("selectstart",H),s.addEventListener("selectend",H),s.addEventListener("squeeze",H),s.addEventListener("squeezestart",H),s.addEventListener("squeezeend",H),s.addEventListener("end",z),s.addEventListener("inputsourceschange",j),m.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(N),s.renderState.layers===void 0){const Z={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,Z),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),S=new Xi(f.framebufferWidth,f.framebufferHeight,{format:Dn,type:vi,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let Z=null,K=null,$=null;m.depth&&($=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Z=m.stencil?Ws:Ps,K=m.stencil?Vs:Gs);const ct={colorFormat:e.RGBA8,depthFormat:$,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(ct),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),S=new Xi(d.textureWidth,d.textureHeight,{format:Dn,type:vi,depthTexture:new Ph(d.textureWidth,d.textureHeight,K,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),lt.setContext(s),lt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function j(F){for(let Z=0;Z<F.removed.length;Z++){const K=F.removed[Z],$=w.indexOf(K);$>=0&&(w[$]=null,v[$].disconnect(K))}for(let Z=0;Z<F.added.length;Z++){const K=F.added[Z];let $=w.indexOf(K);if($===-1){for(let wt=0;wt<v.length;wt++)if(wt>=w.length){w.push(K),$=wt;break}else if(w[wt]===null){w[wt]=K,$=wt;break}if($===-1)break}const ct=v[$];ct&&ct.connect(K)}}const Y=new P,et=new P;function J(F,Z,K){Y.setFromMatrixPosition(Z.matrixWorld),et.setFromMatrixPosition(K.matrixWorld);const $=Y.distanceTo(et),ct=Z.projectionMatrix.elements,wt=K.projectionMatrix.elements,Bt=ct[14]/(ct[10]-1),L=ct[14]/(ct[10]+1),Zt=(ct[9]+1)/ct[5],Gt=(ct[9]-1)/ct[5],he=(ct[8]-1)/ct[0],Ct=(wt[8]+1)/wt[0],te=Bt*he,Xt=Bt*Ct,Wt=$/(-he+Ct),me=Wt*-he;Z.matrixWorld.decompose(F.position,F.quaternion,F.scale),F.translateX(me),F.translateZ(Wt),F.matrixWorld.compose(F.position,F.quaternion,F.scale),F.matrixWorldInverse.copy(F.matrixWorld).invert();const R=Bt+Wt,x=L+Wt,W=te-me,nt=Xt+($-me),st=Zt*L/x*R,it=Gt*L/x*R;F.projectionMatrix.makePerspective(W,nt,st,it,R,x),F.projectionMatrixInverse.copy(F.projectionMatrix).invert()}function mt(F,Z){Z===null?F.matrixWorld.copy(F.matrix):F.matrixWorld.multiplyMatrices(Z.matrixWorld,F.matrix),F.matrixWorldInverse.copy(F.matrixWorld).invert()}this.updateCamera=function(F){if(s===null)return;_.texture!==null&&(F.near=_.depthNear,F.far=_.depthFar),y.near=O.near=b.near=F.near,y.far=O.far=b.far=F.far,(C!==y.near||k!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),C=y.near,k=y.far,b.near=C,b.far=k,O.near=C,O.far=k,b.updateProjectionMatrix(),O.updateProjectionMatrix(),F.updateProjectionMatrix());const Z=F.parent,K=y.cameras;mt(y,Z);for(let $=0;$<K.length;$++)mt(K[$],Z);K.length===2?J(y,b,O):y.projectionMatrix.copy(b.projectionMatrix),yt(F,y,Z)};function yt(F,Z,K){K===null?F.matrix.copy(Z.matrixWorld):(F.matrix.copy(K.matrixWorld),F.matrix.invert(),F.matrix.multiply(Z.matrixWorld)),F.matrix.decompose(F.position,F.quaternion,F.scale),F.updateMatrixWorld(!0),F.projectionMatrix.copy(Z.projectionMatrix),F.projectionMatrixInverse.copy(Z.projectionMatrixInverse),F.isPerspectiveCamera&&(F.fov=Ca*2*Math.atan(1/F.projectionMatrix.elements[5]),F.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(F){l=F,d!==null&&(d.fixedFoveation=F),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=F)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(y)};let Tt=null;function q(F,Z){if(h=Z.getViewerPose(c||o),g=Z,h!==null){const K=h.views;f!==null&&(t.setRenderTargetFramebuffer(S,f.framebuffer),t.setRenderTarget(S));let $=!1;K.length!==y.cameras.length&&(y.cameras.length=0,$=!0);for(let wt=0;wt<K.length;wt++){const Bt=K[wt];let L=null;if(f!==null)L=f.getViewport(Bt);else{const Gt=u.getViewSubImage(d,Bt);L=Gt.viewport,wt===0&&(t.setRenderTargetTextures(S,Gt.colorTexture,d.ignoreDepthValues?void 0:Gt.depthStencilTexture),t.setRenderTarget(S))}let Zt=E[wt];Zt===void 0&&(Zt=new on,Zt.layers.enable(wt),Zt.viewport=new Ee,E[wt]=Zt),Zt.matrix.fromArray(Bt.transform.matrix),Zt.matrix.decompose(Zt.position,Zt.quaternion,Zt.scale),Zt.projectionMatrix.fromArray(Bt.projectionMatrix),Zt.projectionMatrixInverse.copy(Zt.projectionMatrix).invert(),Zt.viewport.set(L.x,L.y,L.width,L.height),wt===0&&(y.matrix.copy(Zt.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),$===!0&&y.cameras.push(Zt)}const ct=s.enabledFeatures;if(ct&&ct.includes("depth-sensing")){const wt=u.getDepthInformation(K[0]);wt&&wt.isValid&&wt.texture&&_.init(t,wt,s.renderState)}}for(let K=0;K<v.length;K++){const $=w[K],ct=v[K];$!==null&&ct!==void 0&&ct.update($,Z,c||o)}Tt&&Tt(F,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),g=null}const lt=new Rh;lt.setAnimationLoop(q),this.setAnimationLoop=function(F){Tt=F},this.dispose=function(){}}}const Pi=new Nn,Sg=new ye;function Eg(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,bh(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,S,v,w){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,w)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,S,v):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Qe&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Qe&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const S=t.get(p),v=S.envMap,w=S.envMapRotation;v&&(m.envMap.value=v,Pi.copy(w),Pi.x*=-1,Pi.y*=-1,Pi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Pi.y*=-1,Pi.z*=-1),m.envMapRotation.value.setFromMatrix4(Sg.makeRotationFromEuler(Pi)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,S,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=v*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Qe&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const S=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function wg(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,v){const w=v.program;n.uniformBlockBinding(S,w)}function c(S,v){let w=s[S.id];w===void 0&&(g(S),w=h(S),s[S.id]=w,S.addEventListener("dispose",m));const N=v.program;n.updateUBOMapping(S,N);const T=t.render.frame;r[S.id]!==T&&(d(S),r[S.id]=T)}function h(S){const v=u();S.__bindingPointIndex=v;const w=i.createBuffer(),N=S.__size,T=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,N,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,w),w}function u(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){const v=s[S.id],w=S.uniforms,N=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let T=0,b=w.length;T<b;T++){const O=Array.isArray(w[T])?w[T]:[w[T]];for(let E=0,y=O.length;E<y;E++){const C=O[E];if(f(C,T,E,N)===!0){const k=C.__offset,H=Array.isArray(C.value)?C.value:[C.value];let z=0;for(let j=0;j<H.length;j++){const Y=H[j],et=_(Y);typeof Y=="number"||typeof Y=="boolean"?(C.__data[0]=Y,i.bufferSubData(i.UNIFORM_BUFFER,k+z,C.__data)):Y.isMatrix3?(C.__data[0]=Y.elements[0],C.__data[1]=Y.elements[1],C.__data[2]=Y.elements[2],C.__data[3]=0,C.__data[4]=Y.elements[3],C.__data[5]=Y.elements[4],C.__data[6]=Y.elements[5],C.__data[7]=0,C.__data[8]=Y.elements[6],C.__data[9]=Y.elements[7],C.__data[10]=Y.elements[8],C.__data[11]=0):(Y.toArray(C.__data,z),z+=et.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,k,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(S,v,w,N){const T=S.value,b=v+"_"+w;if(N[b]===void 0)return typeof T=="number"||typeof T=="boolean"?N[b]=T:N[b]=T.clone(),!0;{const O=N[b];if(typeof T=="number"||typeof T=="boolean"){if(O!==T)return N[b]=T,!0}else if(O.equals(T)===!1)return O.copy(T),!0}return!1}function g(S){const v=S.uniforms;let w=0;const N=16;for(let b=0,O=v.length;b<O;b++){const E=Array.isArray(v[b])?v[b]:[v[b]];for(let y=0,C=E.length;y<C;y++){const k=E[y],H=Array.isArray(k.value)?k.value:[k.value];for(let z=0,j=H.length;z<j;z++){const Y=H[z],et=_(Y),J=w%N;J!==0&&N-J<et.boundary&&(w+=N-J),k.__data=new Float32Array(et.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=w,w+=et.storage}}}const T=w%N;return T>0&&(w+=N-T),S.__size=w,S.__cache={},this}function _(S){const v={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(v.boundary=4,v.storage=4):S.isVector2?(v.boundary=8,v.storage=8):S.isVector3||S.isColor?(v.boundary=16,v.storage=12):S.isVector4?(v.boundary=16,v.storage=16):S.isMatrix3?(v.boundary=48,v.storage=48):S.isMatrix4?(v.boundary=64,v.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),v}function m(S){const v=S.target;v.removeEventListener("dispose",m);const w=o.indexOf(v.__bindingPointIndex);o.splice(w,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function p(){for(const S in s)i.deleteBuffer(s[S]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}class bg{constructor(t={}){const{canvas:e=gd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const f=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const p=[],S=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Pn,this.toneMapping=pi,this.toneMappingExposure=1;const v=this;let w=!1,N=0,T=0,b=null,O=-1,E=null;const y=new Ee,C=new Ee;let k=null;const H=new Qt(0);let z=0,j=e.width,Y=e.height,et=1,J=null,mt=null;const yt=new Ee(0,0,j,Y),Tt=new Ee(0,0,j,Y);let q=!1;const lt=new $a;let F=!1,Z=!1;const K=new ye,$=new P,ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let wt=!1;function Bt(){return b===null?et:1}let L=n;function Zt(M,U){return e.getContext(M,U)}try{const M={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Wa}`),e.addEventListener("webglcontextlost",vt,!1),e.addEventListener("webglcontextrestored",Q,!1),e.addEventListener("webglcontextcreationerror",tt,!1),L===null){const U="webgl2";if(L=Zt(U,M),L===null)throw Zt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Gt,he,Ct,te,Xt,Wt,me,R,x,W,nt,st,it,Rt,ut,dt,Yt,rt,Et,Jt,Dt,gt,Pt,zt;function ge(){Gt=new Dm(L),Gt.init(),gt=new mg(L,Gt),he=new Am(L,Gt,t,gt),Ct=new fg(L),te=new Om(L),Xt=new Q0,Wt=new pg(L,Gt,Ct,Xt,he,gt,te),me=new Cm(v),R=new Im(v),x=new Gd(L),Pt=new bm(L,x),W=new Nm(L,x,te,Pt),nt=new Bm(L,W,x,te),Et=new Fm(L,he,Wt),dt=new Rm(Xt),st=new j0(v,me,R,Gt,he,Pt,dt),it=new Eg(v,Xt),Rt=new eg,ut=new ag(Gt),rt=new wm(v,me,R,Ct,nt,d,l),Yt=new dg(v,nt,he),zt=new wg(L,te,he,Ct),Jt=new Tm(L,Gt,te),Dt=new Um(L,Gt,te),te.programs=st.programs,v.capabilities=he,v.extensions=Gt,v.properties=Xt,v.renderLists=Rt,v.shadowMap=Yt,v.state=Ct,v.info=te}ge();const I=new Mg(v,L);this.xr=I,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const M=Gt.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Gt.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return et},this.setPixelRatio=function(M){M!==void 0&&(et=M,this.setSize(j,Y,!1))},this.getSize=function(M){return M.set(j,Y)},this.setSize=function(M,U,G=!0){if(I.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=M,Y=U,e.width=Math.floor(M*et),e.height=Math.floor(U*et),G===!0&&(e.style.width=M+"px",e.style.height=U+"px"),this.setViewport(0,0,M,U)},this.getDrawingBufferSize=function(M){return M.set(j*et,Y*et).floor()},this.setDrawingBufferSize=function(M,U,G){j=M,Y=U,et=G,e.width=Math.floor(M*G),e.height=Math.floor(U*G),this.setViewport(0,0,M,U)},this.getCurrentViewport=function(M){return M.copy(y)},this.getViewport=function(M){return M.copy(yt)},this.setViewport=function(M,U,G,V){M.isVector4?yt.set(M.x,M.y,M.z,M.w):yt.set(M,U,G,V),Ct.viewport(y.copy(yt).multiplyScalar(et).round())},this.getScissor=function(M){return M.copy(Tt)},this.setScissor=function(M,U,G,V){M.isVector4?Tt.set(M.x,M.y,M.z,M.w):Tt.set(M,U,G,V),Ct.scissor(C.copy(Tt).multiplyScalar(et).round())},this.getScissorTest=function(){return q},this.setScissorTest=function(M){Ct.setScissorTest(q=M)},this.setOpaqueSort=function(M){J=M},this.setTransparentSort=function(M){mt=M},this.getClearColor=function(M){return M.copy(rt.getClearColor())},this.setClearColor=function(){rt.setClearColor.apply(rt,arguments)},this.getClearAlpha=function(){return rt.getClearAlpha()},this.setClearAlpha=function(){rt.setClearAlpha.apply(rt,arguments)},this.clear=function(M=!0,U=!0,G=!0){let V=0;if(M){let B=!1;if(b!==null){const ht=b.texture.format;B=ht===mh||ht===ph||ht===fh}if(B){const ht=b.texture.type,xt=ht===vi||ht===Gs||ht===uo||ht===Vs||ht===uh||ht===dh,bt=rt.getClearColor(),At=rt.getClearAlpha(),kt=bt.r,Vt=bt.g,Ut=bt.b;xt?(f[0]=kt,f[1]=Vt,f[2]=Ut,f[3]=At,L.clearBufferuiv(L.COLOR,0,f)):(g[0]=kt,g[1]=Vt,g[2]=Ut,g[3]=At,L.clearBufferiv(L.COLOR,0,g))}else V|=L.COLOR_BUFFER_BIT}U&&(V|=L.DEPTH_BUFFER_BIT),G&&(V|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",vt,!1),e.removeEventListener("webglcontextrestored",Q,!1),e.removeEventListener("webglcontextcreationerror",tt,!1),Rt.dispose(),ut.dispose(),Xt.dispose(),me.dispose(),R.dispose(),nt.dispose(),Pt.dispose(),zt.dispose(),st.dispose(),I.dispose(),I.removeEventListener("sessionstart",tn),I.removeEventListener("sessionend",en),Tn.stop()};function vt(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function Q(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const M=te.autoReset,U=Yt.enabled,G=Yt.autoUpdate,V=Yt.needsUpdate,B=Yt.type;ge(),te.autoReset=M,Yt.enabled=U,Yt.autoUpdate=G,Yt.needsUpdate=V,Yt.type=B}function tt(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function at(M){const U=M.target;U.removeEventListener("dispose",at),Nt(U)}function Nt(M){ne(M),Xt.remove(M)}function ne(M){const U=Xt.get(M).programs;U!==void 0&&(U.forEach(function(G){st.releaseProgram(G)}),M.isShaderMaterial&&st.releaseShaderCache(M))}this.renderBufferDirect=function(M,U,G,V,B,ht){U===null&&(U=ct);const xt=B.isMesh&&B.matrixWorld.determinant()<0,bt=Ze(M,U,G,V,B);Ct.setMaterial(V,xt);let At=G.index,kt=1;if(V.wireframe===!0){if(At=W.getWireframeAttribute(G),At===void 0)return;kt=2}const Vt=G.drawRange,Ut=G.attributes.position;let re=Vt.start*kt,Te=(Vt.start+Vt.count)*kt;ht!==null&&(re=Math.max(re,ht.start*kt),Te=Math.min(Te,(ht.start+ht.count)*kt)),At!==null?(re=Math.max(re,0),Te=Math.min(Te,At.count)):Ut!=null&&(re=Math.max(re,0),Te=Math.min(Te,Ut.count));const Ae=Te-re;if(Ae<0||Ae===1/0)return;Pt.setup(B,V,bt,G,At);let nn,le=Jt;if(At!==null&&(nn=x.get(At),le=Dt,le.setIndex(nn)),B.isMesh)V.wireframe===!0?(Ct.setLineWidth(V.wireframeLinewidth*Bt()),le.setMode(L.LINES)):le.setMode(L.TRIANGLES);else if(B.isLine){let Lt=V.linewidth;Lt===void 0&&(Lt=1),Ct.setLineWidth(Lt*Bt()),B.isLineSegments?le.setMode(L.LINES):B.isLineLoop?le.setMode(L.LINE_LOOP):le.setMode(L.LINE_STRIP)}else B.isPoints?le.setMode(L.POINTS):B.isSprite&&le.setMode(L.TRIANGLES);if(B.isBatchedMesh)B._multiDrawInstances!==null?le.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances):le.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else if(B.isInstancedMesh)le.renderInstances(re,Ae,B.count);else if(G.isInstancedBufferGeometry){const Lt=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Ye=Math.min(G.instanceCount,Lt);le.renderInstances(re,Ae,Ye)}else le.render(re,Ae)};function ae(M,U,G){M.transparent===!0&&M.side===an&&M.forceSinglePass===!1?(M.side=Qe,M.needsUpdate=!0,qt(M,U,G),M.side=_i,M.needsUpdate=!0,qt(M,U,G),M.side=an):qt(M,U,G)}this.compile=function(M,U,G=null){G===null&&(G=M),m=ut.get(G),m.init(U),S.push(m),G.traverseVisible(function(B){B.isLight&&B.layers.test(U.layers)&&(m.pushLight(B),B.castShadow&&m.pushShadow(B))}),M!==G&&M.traverseVisible(function(B){B.isLight&&B.layers.test(U.layers)&&(m.pushLight(B),B.castShadow&&m.pushShadow(B))}),m.setupLights();const V=new Set;return M.traverse(function(B){const ht=B.material;if(ht)if(Array.isArray(ht))for(let xt=0;xt<ht.length;xt++){const bt=ht[xt];ae(bt,G,B),V.add(bt)}else ae(ht,G,B),V.add(ht)}),S.pop(),m=null,V},this.compileAsync=function(M,U,G=null){const V=this.compile(M,U,G);return new Promise(B=>{function ht(){if(V.forEach(function(xt){Xt.get(xt).currentProgram.isReady()&&V.delete(xt)}),V.size===0){B(M);return}setTimeout(ht,10)}Gt.get("KHR_parallel_shader_compile")!==null?ht():setTimeout(ht,10)})};let Pe=null;function ie(M){Pe&&Pe(M)}function tn(){Tn.stop()}function en(){Tn.start()}const Tn=new Rh;Tn.setAnimationLoop(ie),typeof self<"u"&&Tn.setContext(self),this.setAnimationLoop=function(M){Pe=M,I.setAnimationLoop(M),M===null?Tn.stop():Tn.start()},I.addEventListener("sessionstart",tn),I.addEventListener("sessionend",en),this.render=function(M,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),I.enabled===!0&&I.isPresenting===!0&&(I.cameraAutoUpdate===!0&&I.updateCamera(U),U=I.getCamera()),M.isScene===!0&&M.onBeforeRender(v,M,U,b),m=ut.get(M,S.length),m.init(U),S.push(m),K.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),lt.setFromProjectionMatrix(K),Z=this.localClippingEnabled,F=dt.init(this.clippingPlanes,Z),_=Rt.get(M,p.length),_.init(),p.push(_),I.enabled===!0&&I.isPresenting===!0){const ht=v.xr.getDepthSensingMesh();ht!==null&&Yi(ht,U,-1/0,v.sortObjects)}Yi(M,U,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(J,mt),wt=I.enabled===!1||I.isPresenting===!1||I.hasDepthSensing()===!1,wt&&rt.addToRenderList(_,M),this.info.render.frame++,F===!0&&dt.beginShadows();const G=m.state.shadowsArray;Yt.render(G,M,U),F===!0&&dt.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=_.opaque,B=_.transmissive;if(m.setupLights(),U.isArrayCamera){const ht=U.cameras;if(B.length>0)for(let xt=0,bt=ht.length;xt<bt;xt++){const At=ht[xt];X(V,B,M,At)}wt&&rt.render(M);for(let xt=0,bt=ht.length;xt<bt;xt++){const At=ht[xt];Js(_,M,At,At.viewport)}}else B.length>0&&X(V,B,M,U),wt&&rt.render(M),Js(_,M,U);b!==null&&(Wt.updateMultisampleRenderTarget(b),Wt.updateRenderTargetMipmap(b)),M.isScene===!0&&M.onAfterRender(v,M,U),Pt.resetDefaultState(),O=-1,E=null,S.pop(),S.length>0?(m=S[S.length-1],F===!0&&dt.setGlobalState(v.clippingPlanes,m.state.camera)):m=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function Yi(M,U,G,V){if(M.visible===!1)return;if(M.layers.test(U.layers)){if(M.isGroup)G=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(U);else if(M.isLight)m.pushLight(M),M.castShadow&&m.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||lt.intersectsSprite(M)){V&&$.setFromMatrixPosition(M.matrixWorld).applyMatrix4(K);const xt=nt.update(M),bt=M.material;bt.visible&&_.push(M,xt,bt,G,$.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||lt.intersectsObject(M))){const xt=nt.update(M),bt=M.material;if(V&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),$.copy(M.boundingSphere.center)):(xt.boundingSphere===null&&xt.computeBoundingSphere(),$.copy(xt.boundingSphere.center)),$.applyMatrix4(M.matrixWorld).applyMatrix4(K)),Array.isArray(bt)){const At=xt.groups;for(let kt=0,Vt=At.length;kt<Vt;kt++){const Ut=At[kt],re=bt[Ut.materialIndex];re&&re.visible&&_.push(M,xt,re,G,$.z,Ut)}}else bt.visible&&_.push(M,xt,bt,G,$.z,null)}}const ht=M.children;for(let xt=0,bt=ht.length;xt<bt;xt++)Yi(ht[xt],U,G,V)}function Js(M,U,G,V){const B=M.opaque,ht=M.transmissive,xt=M.transparent;m.setupLightsView(G),F===!0&&dt.setGlobalState(v.clippingPlanes,G),V&&Ct.viewport(y.copy(V)),B.length>0&&pt(B,U,G),ht.length>0&&pt(ht,U,G),xt.length>0&&pt(xt,U,G),Ct.buffers.depth.setTest(!0),Ct.buffers.depth.setMask(!0),Ct.buffers.color.setMask(!0),Ct.setPolygonOffset(!1)}function X(M,U,G,V){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[V.id]===void 0&&(m.state.transmissionRenderTarget[V.id]=new Xi(1,1,{generateMipmaps:!0,type:Gt.has("EXT_color_buffer_half_float")||Gt.has("EXT_color_buffer_float")?wo:vi,minFilter:Ui,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ce.workingColorSpace}));const ht=m.state.transmissionRenderTarget[V.id],xt=V.viewport||y;ht.setSize(xt.z,xt.w);const bt=v.getRenderTarget();v.setRenderTarget(ht),v.getClearColor(H),z=v.getClearAlpha(),z<1&&v.setClearColor(16777215,.5),wt?rt.render(G):v.clear();const At=v.toneMapping;v.toneMapping=pi;const kt=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),m.setupLightsView(V),F===!0&&dt.setGlobalState(v.clippingPlanes,V),pt(M,G,V),Wt.updateMultisampleRenderTarget(ht),Wt.updateRenderTargetMipmap(ht),Gt.has("WEBGL_multisampled_render_to_texture")===!1){let Vt=!1;for(let Ut=0,re=U.length;Ut<re;Ut++){const Te=U[Ut],Ae=Te.object,nn=Te.geometry,le=Te.material,Lt=Te.group;if(le.side===an&&Ae.layers.test(V.layers)){const Ye=le.side;le.side=Qe,le.needsUpdate=!0,Mt(Ae,G,V,nn,le,Lt),le.side=Ye,le.needsUpdate=!0,Vt=!0}}Vt===!0&&(Wt.updateMultisampleRenderTarget(ht),Wt.updateRenderTargetMipmap(ht))}v.setRenderTarget(bt),v.setClearColor(H,z),kt!==void 0&&(V.viewport=kt),v.toneMapping=At}function pt(M,U,G){const V=U.isScene===!0?U.overrideMaterial:null;for(let B=0,ht=M.length;B<ht;B++){const xt=M[B],bt=xt.object,At=xt.geometry,kt=V===null?xt.material:V,Vt=xt.group;bt.layers.test(G.layers)&&Mt(bt,U,G,At,kt,Vt)}}function Mt(M,U,G,V,B,ht){M.onBeforeRender(v,U,G,V,B,ht),M.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),B.onBeforeRender(v,U,G,V,M,ht),B.transparent===!0&&B.side===an&&B.forceSinglePass===!1?(B.side=Qe,B.needsUpdate=!0,v.renderBufferDirect(G,U,V,B,M,ht),B.side=_i,B.needsUpdate=!0,v.renderBufferDirect(G,U,V,B,M,ht),B.side=an):v.renderBufferDirect(G,U,V,B,M,ht),M.onAfterRender(v,U,G,V,B,ht)}function qt(M,U,G){U.isScene!==!0&&(U=ct);const V=Xt.get(M),B=m.state.lights,ht=m.state.shadowsArray,xt=B.state.version,bt=st.getParameters(M,B.state,ht,U,G),At=st.getProgramCacheKey(bt);let kt=V.programs;V.environment=M.isMeshStandardMaterial?U.environment:null,V.fog=U.fog,V.envMap=(M.isMeshStandardMaterial?R:me).get(M.envMap||V.environment),V.envMapRotation=V.environment!==null&&M.envMap===null?U.environmentRotation:M.envMapRotation,kt===void 0&&(M.addEventListener("dispose",at),kt=new Map,V.programs=kt);let Vt=kt.get(At);if(Vt!==void 0){if(V.currentProgram===Vt&&V.lightsStateVersion===xt)return ke(M,bt),Vt}else bt.uniforms=st.getUniforms(M),M.onBuild(G,bt,v),M.onBeforeCompile(bt,v),Vt=st.acquireProgram(bt,At),kt.set(At,Vt),V.uniforms=bt.uniforms;const Ut=V.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Ut.clippingPlanes=dt.uniform),ke(M,bt),V.needsLights=Ei(M),V.lightsStateVersion=xt,V.needsLights&&(Ut.ambientLightColor.value=B.state.ambient,Ut.lightProbe.value=B.state.probe,Ut.directionalLights.value=B.state.directional,Ut.directionalLightShadows.value=B.state.directionalShadow,Ut.spotLights.value=B.state.spot,Ut.spotLightShadows.value=B.state.spotShadow,Ut.rectAreaLights.value=B.state.rectArea,Ut.ltc_1.value=B.state.rectAreaLTC1,Ut.ltc_2.value=B.state.rectAreaLTC2,Ut.pointLights.value=B.state.point,Ut.pointLightShadows.value=B.state.pointShadow,Ut.hemisphereLights.value=B.state.hemi,Ut.directionalShadowMap.value=B.state.directionalShadowMap,Ut.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Ut.spotShadowMap.value=B.state.spotShadowMap,Ut.spotLightMatrix.value=B.state.spotLightMatrix,Ut.spotLightMap.value=B.state.spotLightMap,Ut.pointShadowMap.value=B.state.pointShadowMap,Ut.pointShadowMatrix.value=B.state.pointShadowMatrix),V.currentProgram=Vt,V.uniformsList=null,Vt}function _e(M){if(M.uniformsList===null){const U=M.currentProgram.getUniforms();M.uniformsList=lo.seqWithValue(U.seq,M.uniforms)}return M.uniformsList}function ke(M,U){const G=Xt.get(M);G.outputColorSpace=U.outputColorSpace,G.batching=U.batching,G.batchingColor=U.batchingColor,G.instancing=U.instancing,G.instancingColor=U.instancingColor,G.instancingMorph=U.instancingMorph,G.skinning=U.skinning,G.morphTargets=U.morphTargets,G.morphNormals=U.morphNormals,G.morphColors=U.morphColors,G.morphTargetsCount=U.morphTargetsCount,G.numClippingPlanes=U.numClippingPlanes,G.numIntersection=U.numClipIntersection,G.vertexAlphas=U.vertexAlphas,G.vertexTangents=U.vertexTangents,G.toneMapping=U.toneMapping}function Ze(M,U,G,V,B){U.isScene!==!0&&(U=ct),Wt.resetTextureUnits();const ht=U.fog,xt=V.isMeshStandardMaterial?U.environment:null,bt=b===null?v.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:Si,At=(V.isMeshStandardMaterial?R:me).get(V.envMap||xt),kt=V.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Vt=!!G.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Ut=!!G.morphAttributes.position,re=!!G.morphAttributes.normal,Te=!!G.morphAttributes.color;let Ae=pi;V.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(Ae=v.toneMapping);const nn=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,le=nn!==void 0?nn.length:0,Lt=Xt.get(V),Ye=m.state.lights;if(F===!0&&(Z===!0||M!==E)){const cn=M===E&&V.id===O;dt.setState(V,M,cn)}let ue=!1;V.version===Lt.__version?(Lt.needsLights&&Lt.lightsStateVersion!==Ye.state.version||Lt.outputColorSpace!==bt||B.isBatchedMesh&&Lt.batching===!1||!B.isBatchedMesh&&Lt.batching===!0||B.isBatchedMesh&&Lt.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Lt.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Lt.instancing===!1||!B.isInstancedMesh&&Lt.instancing===!0||B.isSkinnedMesh&&Lt.skinning===!1||!B.isSkinnedMesh&&Lt.skinning===!0||B.isInstancedMesh&&Lt.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Lt.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Lt.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Lt.instancingMorph===!1&&B.morphTexture!==null||Lt.envMap!==At||V.fog===!0&&Lt.fog!==ht||Lt.numClippingPlanes!==void 0&&(Lt.numClippingPlanes!==dt.numPlanes||Lt.numIntersection!==dt.numIntersection)||Lt.vertexAlphas!==kt||Lt.vertexTangents!==Vt||Lt.morphTargets!==Ut||Lt.morphNormals!==re||Lt.morphColors!==Te||Lt.toneMapping!==Ae||Lt.morphTargetsCount!==le)&&(ue=!0):(ue=!0,Lt.__version=V.version);let Fn=Lt.currentProgram;ue===!0&&(Fn=qt(V,U,B));let Lr=!1,wi=!1,Co=!1;const Oe=Fn.getUniforms(),ti=Lt.uniforms;if(Ct.useProgram(Fn.program)&&(Lr=!0,wi=!0,Co=!0),V.id!==O&&(O=V.id,wi=!0),Lr||E!==M){Oe.setValue(L,"projectionMatrix",M.projectionMatrix),Oe.setValue(L,"viewMatrix",M.matrixWorldInverse);const cn=Oe.map.cameraPosition;cn!==void 0&&cn.setValue(L,$.setFromMatrixPosition(M.matrixWorld)),he.logarithmicDepthBuffer&&Oe.setValue(L,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&Oe.setValue(L,"isOrthographic",M.isOrthographicCamera===!0),E!==M&&(E=M,wi=!0,Co=!0)}if(B.isSkinnedMesh){Oe.setOptional(L,B,"bindMatrix"),Oe.setOptional(L,B,"bindMatrixInverse");const cn=B.skeleton;cn&&(cn.boneTexture===null&&cn.computeBoneTexture(),Oe.setValue(L,"boneTexture",cn.boneTexture,Wt))}B.isBatchedMesh&&(Oe.setOptional(L,B,"batchingTexture"),Oe.setValue(L,"batchingTexture",B._matricesTexture,Wt),Oe.setOptional(L,B,"batchingColorTexture"),B._colorsTexture!==null&&Oe.setValue(L,"batchingColorTexture",B._colorsTexture,Wt));const Po=G.morphAttributes;if((Po.position!==void 0||Po.normal!==void 0||Po.color!==void 0)&&Et.update(B,G,Fn),(wi||Lt.receiveShadow!==B.receiveShadow)&&(Lt.receiveShadow=B.receiveShadow,Oe.setValue(L,"receiveShadow",B.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(ti.envMap.value=At,ti.flipEnvMap.value=At.isCubeTexture&&At.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&U.environment!==null&&(ti.envMapIntensity.value=U.environmentIntensity),wi&&(Oe.setValue(L,"toneMappingExposure",v.toneMappingExposure),Lt.needsLights&&An(ti,Co),ht&&V.fog===!0&&it.refreshFogUniforms(ti,ht),it.refreshMaterialUniforms(ti,V,et,Y,m.state.transmissionRenderTarget[M.id]),lo.upload(L,_e(Lt),ti,Wt)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(lo.upload(L,_e(Lt),ti,Wt),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&Oe.setValue(L,"center",B.center),Oe.setValue(L,"modelViewMatrix",B.modelViewMatrix),Oe.setValue(L,"normalMatrix",B.normalMatrix),Oe.setValue(L,"modelMatrix",B.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const cn=V.uniformsGroups;for(let Lo=0,du=cn.length;Lo<du;Lo++){const ll=cn[Lo];zt.update(ll,Fn),zt.bind(ll,Fn)}}return Fn}function An(M,U){M.ambientLightColor.needsUpdate=U,M.lightProbe.needsUpdate=U,M.directionalLights.needsUpdate=U,M.directionalLightShadows.needsUpdate=U,M.pointLights.needsUpdate=U,M.pointLightShadows.needsUpdate=U,M.spotLights.needsUpdate=U,M.spotLightShadows.needsUpdate=U,M.rectAreaLights.needsUpdate=U,M.hemisphereLights.needsUpdate=U}function Ei(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(M,U,G){Xt.get(M.texture).__webglTexture=U,Xt.get(M.depthTexture).__webglTexture=G;const V=Xt.get(M);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=G===void 0,V.__autoAllocateDepthBuffer||Gt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(M,U){const G=Xt.get(M);G.__webglFramebuffer=U,G.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(M,U=0,G=0){b=M,N=U,T=G;let V=!0,B=null,ht=!1,xt=!1;if(M){const At=Xt.get(M);At.__useDefaultFramebuffer!==void 0?(Ct.bindFramebuffer(L.FRAMEBUFFER,null),V=!1):At.__webglFramebuffer===void 0?Wt.setupRenderTarget(M):At.__hasExternalTextures&&Wt.rebindTextures(M,Xt.get(M.texture).__webglTexture,Xt.get(M.depthTexture).__webglTexture);const kt=M.texture;(kt.isData3DTexture||kt.isDataArrayTexture||kt.isCompressedArrayTexture)&&(xt=!0);const Vt=Xt.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Vt[U])?B=Vt[U][G]:B=Vt[U],ht=!0):M.samples>0&&Wt.useMultisampledRTT(M)===!1?B=Xt.get(M).__webglMultisampledFramebuffer:Array.isArray(Vt)?B=Vt[G]:B=Vt,y.copy(M.viewport),C.copy(M.scissor),k=M.scissorTest}else y.copy(yt).multiplyScalar(et).floor(),C.copy(Tt).multiplyScalar(et).floor(),k=q;if(Ct.bindFramebuffer(L.FRAMEBUFFER,B)&&V&&Ct.drawBuffers(M,B),Ct.viewport(y),Ct.scissor(C),Ct.setScissorTest(k),ht){const At=Xt.get(M.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+U,At.__webglTexture,G)}else if(xt){const At=Xt.get(M.texture),kt=U||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,At.__webglTexture,G||0,kt)}O=-1},this.readRenderTargetPixels=function(M,U,G,V,B,ht,xt){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let bt=Xt.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&xt!==void 0&&(bt=bt[xt]),bt){Ct.bindFramebuffer(L.FRAMEBUFFER,bt);try{const At=M.texture,kt=At.format,Vt=At.type;if(!he.textureFormatReadable(kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!he.textureTypeReadable(Vt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=M.width-V&&G>=0&&G<=M.height-B&&L.readPixels(U,G,V,B,gt.convert(kt),gt.convert(Vt),ht)}finally{const At=b!==null?Xt.get(b).__webglFramebuffer:null;Ct.bindFramebuffer(L.FRAMEBUFFER,At)}}},this.readRenderTargetPixelsAsync=async function(M,U,G,V,B,ht,xt){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let bt=Xt.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&xt!==void 0&&(bt=bt[xt]),bt){Ct.bindFramebuffer(L.FRAMEBUFFER,bt);try{const At=M.texture,kt=At.format,Vt=At.type;if(!he.textureFormatReadable(kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!he.textureTypeReadable(Vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=M.width-V&&G>=0&&G<=M.height-B){const Ut=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Ut),L.bufferData(L.PIXEL_PACK_BUFFER,ht.byteLength,L.STREAM_READ),L.readPixels(U,G,V,B,gt.convert(kt),gt.convert(Vt),0),L.flush();const re=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);await _d(L,re,4);try{L.bindBuffer(L.PIXEL_PACK_BUFFER,Ut),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,ht)}finally{L.deleteBuffer(Ut),L.deleteSync(re)}return ht}}finally{const At=b!==null?Xt.get(b).__webglFramebuffer:null;Ct.bindFramebuffer(L.FRAMEBUFFER,At)}}},this.copyFramebufferToTexture=function(M,U=null,G=0){M.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,M=arguments[1]);const V=Math.pow(2,-G),B=Math.floor(M.image.width*V),ht=Math.floor(M.image.height*V),xt=U!==null?U.x:0,bt=U!==null?U.y:0;Wt.setTexture2D(M,0),L.copyTexSubImage2D(L.TEXTURE_2D,G,0,0,xt,bt,B,ht),Ct.unbindTexture()},this.copyTextureToTexture=function(M,U,G=null,V=null,B=0){M.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,M=arguments[1],U=arguments[2],B=arguments[3]||0,G=null);let ht,xt,bt,At,kt,Vt;G!==null?(ht=G.max.x-G.min.x,xt=G.max.y-G.min.y,bt=G.min.x,At=G.min.y):(ht=M.image.width,xt=M.image.height,bt=0,At=0),V!==null?(kt=V.x,Vt=V.y):(kt=0,Vt=0);const Ut=gt.convert(U.format),re=gt.convert(U.type);Wt.setTexture2D(U,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,U.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,U.unpackAlignment);const Te=L.getParameter(L.UNPACK_ROW_LENGTH),Ae=L.getParameter(L.UNPACK_IMAGE_HEIGHT),nn=L.getParameter(L.UNPACK_SKIP_PIXELS),le=L.getParameter(L.UNPACK_SKIP_ROWS),Lt=L.getParameter(L.UNPACK_SKIP_IMAGES),Ye=M.isCompressedTexture?M.mipmaps[B]:M.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,Ye.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Ye.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,bt),L.pixelStorei(L.UNPACK_SKIP_ROWS,At),M.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,B,kt,Vt,ht,xt,Ut,re,Ye.data):M.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,B,kt,Vt,Ye.width,Ye.height,Ut,Ye.data):L.texSubImage2D(L.TEXTURE_2D,B,kt,Vt,Ut,re,Ye),L.pixelStorei(L.UNPACK_ROW_LENGTH,Te),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Ae),L.pixelStorei(L.UNPACK_SKIP_PIXELS,nn),L.pixelStorei(L.UNPACK_SKIP_ROWS,le),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Lt),B===0&&U.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),Ct.unbindTexture()},this.copyTextureToTexture3D=function(M,U,G=null,V=null,B=0){M.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,V=arguments[1]||null,M=arguments[2],U=arguments[3],B=arguments[4]||0);let ht,xt,bt,At,kt,Vt,Ut,re,Te;const Ae=M.isCompressedTexture?M.mipmaps[B]:M.image;G!==null?(ht=G.max.x-G.min.x,xt=G.max.y-G.min.y,bt=G.max.z-G.min.z,At=G.min.x,kt=G.min.y,Vt=G.min.z):(ht=Ae.width,xt=Ae.height,bt=Ae.depth,At=0,kt=0,Vt=0),V!==null?(Ut=V.x,re=V.y,Te=V.z):(Ut=0,re=0,Te=0);const nn=gt.convert(U.format),le=gt.convert(U.type);let Lt;if(U.isData3DTexture)Wt.setTexture3D(U,0),Lt=L.TEXTURE_3D;else if(U.isDataArrayTexture||U.isCompressedArrayTexture)Wt.setTexture2DArray(U,0),Lt=L.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,U.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,U.unpackAlignment);const Ye=L.getParameter(L.UNPACK_ROW_LENGTH),ue=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Fn=L.getParameter(L.UNPACK_SKIP_PIXELS),Lr=L.getParameter(L.UNPACK_SKIP_ROWS),wi=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,Ae.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Ae.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,At),L.pixelStorei(L.UNPACK_SKIP_ROWS,kt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Vt),M.isDataTexture||M.isData3DTexture?L.texSubImage3D(Lt,B,Ut,re,Te,ht,xt,bt,nn,le,Ae.data):U.isCompressedArrayTexture?L.compressedTexSubImage3D(Lt,B,Ut,re,Te,ht,xt,bt,nn,Ae.data):L.texSubImage3D(Lt,B,Ut,re,Te,ht,xt,bt,nn,le,Ae),L.pixelStorei(L.UNPACK_ROW_LENGTH,Ye),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ue),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Fn),L.pixelStorei(L.UNPACK_SKIP_ROWS,Lr),L.pixelStorei(L.UNPACK_SKIP_IMAGES,wi),B===0&&U.generateMipmaps&&L.generateMipmap(Lt),Ct.unbindTexture()},this.initRenderTarget=function(M){Xt.get(M).__webglFramebuffer===void 0&&Wt.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?Wt.setTextureCube(M,0):M.isData3DTexture?Wt.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?Wt.setTexture2DArray(M,0):Wt.setTexture2D(M,0),Ct.unbindTexture()},this.resetState=function(){N=0,T=0,b=null,Ct.reset(),Pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Xa?"display-p3":"srgb",e.unpackColorSpace=ce.workingColorSpace===bo?"display-p3":"srgb"}}class Ja{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Qt(t),this.density=e}clone(){return new Ja(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Tg extends ze{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Nn,this.environmentIntensity=1,this.environmentRotation=new Nn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Ag{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Ra,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=mi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return Za("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=mi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=mi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const qe=new P;class vo{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.applyMatrix4(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.applyNormalMatrix(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.transformDirection(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=In(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=fe(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=fe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=fe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=fe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=fe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=In(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=In(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=In(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=In(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array),s=fe(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array),s=fe(s,this.array),r=fe(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new wn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new vo(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Oh extends qs{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Qt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let us;const nr=new P,ds=new P,fs=new P,ps=new _t,ir=new _t,Fh=new ye,to=new P,sr=new P,eo=new P,Pc=new _t,da=new _t,Lc=new _t;class Rg extends ze{constructor(t=new Oh){if(super(),this.isSprite=!0,this.type="Sprite",us===void 0){us=new ln;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Ag(e,5);us.setIndex([0,1,2,0,2,3]),us.setAttribute("position",new vo(n,3,0,!1)),us.setAttribute("uv",new vo(n,2,3,!1))}this.geometry=us,this.material=t,this.center=new _t(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ds.setFromMatrixScale(this.matrixWorld),Fh.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),fs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ds.multiplyScalar(-fs.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const o=this.center;no(to.set(-.5,-.5,0),fs,o,ds,s,r),no(sr.set(.5,-.5,0),fs,o,ds,s,r),no(eo.set(.5,.5,0),fs,o,ds,s,r),Pc.set(0,0),da.set(1,0),Lc.set(1,1);let a=t.ray.intersectTriangle(to,sr,eo,!1,nr);if(a===null&&(no(sr.set(-.5,.5,0),fs,o,ds,s,r),da.set(0,1),a=t.ray.intersectTriangle(to,eo,sr,!1,nr),a===null))return;const l=t.ray.origin.distanceTo(nr);l<t.near||l>t.far||e.push({distance:l,point:nr.clone(),uv:En.getInterpolation(nr,to,sr,eo,Pc,da,Lc,new _t),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function no(i,t,e,n,s,r){ps.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(ir.x=r*ps.x-s*ps.y,ir.y=s*ps.x+r*ps.y):ir.copy(ps),i.copy(t),i.x+=ir.x,i.y+=ir.y,i.applyMatrix4(Fh)}class Ao extends Ke{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class On{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);const h=n[s],d=n[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new _t:new P);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new P,s=[],r=[],o=[],a=new P,l=new ye;for(let f=0;f<=t;f++){const g=f/t;s[f]=this.getTangentAt(g,new P)}r[0]=new P,o[0]=new P;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Ge(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(Ge(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class ja extends On{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new _t){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Cg extends ja{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Qa(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,f*=h,s(o,a,d,f)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const io=new P,fa=new Qa,pa=new Qa,ma=new Qa;class Pg extends On{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new P){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(io.subVectors(s[0],s[1]).add(s[0]),c=io);const u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(io.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=io),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),fa.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,_,m),pa.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,_,m),ma.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(fa.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),pa.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),ma.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(fa.calc(l),pa.calc(l),ma.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new P().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Ic(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function Lg(i,t){const e=1-i;return e*e*t}function Ig(i,t){return 2*(1-i)*i*t}function Dg(i,t){return i*i*t}function lr(i,t,e,n){return Lg(i,t)+Ig(i,e)+Dg(i,n)}function Ng(i,t){const e=1-i;return e*e*e*t}function Ug(i,t){const e=1-i;return 3*e*e*i*t}function Og(i,t){return 3*(1-i)*i*i*t}function Fg(i,t){return i*i*i*t}function cr(i,t,e,n,s){return Ng(i,t)+Ug(i,e)+Og(i,n)+Fg(i,s)}class Bh extends On{constructor(t=new _t,e=new _t,n=new _t,s=new _t){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new _t){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(cr(t,s.x,r.x,o.x,a.x),cr(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Bg extends On{constructor(t=new P,e=new P,n=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new P){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(cr(t,s.x,r.x,o.x,a.x),cr(t,s.y,r.y,o.y,a.y),cr(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class zh extends On{constructor(t=new _t,e=new _t){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new _t){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new _t){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class zg extends On{constructor(t=new P,e=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new P){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new P){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class kh extends On{constructor(t=new _t,e=new _t,n=new _t){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new _t){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(lr(t,s.x,r.x,o.x),lr(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class kg extends On{constructor(t=new P,e=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new P){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(lr(t,s.x,r.x,o.x),lr(t,s.y,r.y,o.y),lr(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Hh extends On{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new _t){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(Ic(a,l.x,c.x,h.x,u.x),Ic(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new _t().fromArray(s))}return this}}var Dc=Object.freeze({__proto__:null,ArcCurve:Cg,CatmullRomCurve3:Pg,CubicBezierCurve:Bh,CubicBezierCurve3:Bg,EllipseCurve:ja,LineCurve:zh,LineCurve3:zg,QuadraticBezierCurve:kh,QuadraticBezierCurve3:kg,SplineCurve:Hh});class Hg extends On{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Dc[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new Dc[s.type]().fromJSON(s))}return this}}class Gg extends Hg{constructor(t){super(),this.type="Path",this.currentPoint=new _t,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new zh(this.currentPoint.clone(),new _t(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new kh(this.currentPoint.clone(),new _t(t,e),new _t(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){const a=new Bh(this.currentPoint.clone(),new _t(t,e),new _t(n,s),new _t(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Hh(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){const c=new ja(t,e,n,s,r,o,a,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class tl extends ln{constructor(t=[new _t(0,-.5),new _t(.5,0),new _t(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Ge(s,0,Math.PI*2);const r=[],o=[],a=[],l=[],c=[],h=1/e,u=new P,d=new _t,f=new P,g=new P,_=new P;let m=0,p=0;for(let S=0;S<=t.length-1;S++)switch(S){case 0:m=t[S+1].x-t[S].x,p=t[S+1].y-t[S].y,f.x=p*1,f.y=-m,f.z=p*0,_.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(_.x,_.y,_.z);break;default:m=t[S+1].x-t[S].x,p=t[S+1].y-t[S].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),l.push(f.x,f.y,f.z),_.copy(g)}for(let S=0;S<=e;S++){const v=n+S*h*s,w=Math.sin(v),N=Math.cos(v);for(let T=0;T<=t.length-1;T++){u.x=t[T].x*w,u.y=t[T].y,u.z=t[T].x*N,o.push(u.x,u.y,u.z),d.x=S/e,d.y=T/(t.length-1),a.push(d.x,d.y);const b=l[3*T+0]*w,O=l[3*T+1],E=l[3*T+0]*N;c.push(b,O,E)}}for(let S=0;S<e;S++)for(let v=0;v<t.length-1;v++){const w=v+S*t.length,N=w,T=w+t.length,b=w+t.length+1,O=w+1;r.push(N,T,O),r.push(b,O,T)}this.setIndex(r),this.setAttribute("position",new Ce(o,3)),this.setAttribute("uv",new Ce(a,2)),this.setAttribute("normal",new Ce(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new tl(t.points,t.segments,t.phiStart,t.phiLength)}}class ui extends tl{constructor(t=1,e=1,n=4,s=8){const r=new Gg;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new ui(t.radius,t.length,t.capSegments,t.radialSegments)}}class el extends ln{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],l=[],c=new P,h=new _t;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const f=n+u/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Ce(o,3)),this.setAttribute("normal",new Ce(a,3)),this.setAttribute("uv",new Ce(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new el(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Ve extends ln{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],d=[],f=[];let g=0;const _=[],m=n/2;let p=0;S(),o===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new Ce(u,3)),this.setAttribute("normal",new Ce(d,3)),this.setAttribute("uv",new Ce(f,2));function S(){const w=new P,N=new P;let T=0;const b=(e-t)/n;for(let O=0;O<=r;O++){const E=[],y=O/r,C=y*(e-t)+t;for(let k=0;k<=s;k++){const H=k/s,z=H*l+a,j=Math.sin(z),Y=Math.cos(z);N.x=C*j,N.y=-y*n+m,N.z=C*Y,u.push(N.x,N.y,N.z),w.set(j,b,Y).normalize(),d.push(w.x,w.y,w.z),f.push(H,1-y),E.push(g++)}_.push(E)}for(let O=0;O<s;O++)for(let E=0;E<r;E++){const y=_[E][O],C=_[E+1][O],k=_[E+1][O+1],H=_[E][O+1];h.push(y,C,H),h.push(C,k,H),T+=6}c.addGroup(p,T,0),p+=T}function v(w){const N=g,T=new _t,b=new P;let O=0;const E=w===!0?t:e,y=w===!0?1:-1;for(let k=1;k<=s;k++)u.push(0,m*y,0),d.push(0,y,0),f.push(.5,.5),g++;const C=g;for(let k=0;k<=s;k++){const z=k/s*l+a,j=Math.cos(z),Y=Math.sin(z);b.x=E*Y,b.y=m*y,b.z=E*j,u.push(b.x,b.y,b.z),d.push(0,y,0),T.x=j*.5+.5,T.y=Y*.5*y+.5,f.push(T.x,T.y),g++}for(let k=0;k<s;k++){const H=N+k,z=C+k;w===!0?h.push(z,z+1,H):h.push(z+1,z,H),O+=3}c.addGroup(p,O,w===!0?1:2),p+=O}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ve(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class nl extends Ve{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new nl(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Re extends ln{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new P,d=new P,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const S=[],v=p/n;let w=0;p===0&&o===0?w=.5/e:p===n&&l===Math.PI&&(w=-.5/e);for(let N=0;N<=e;N++){const T=N/e;u.x=-t*Math.cos(s+T*r)*Math.sin(o+v*a),u.y=t*Math.cos(o+v*a),u.z=t*Math.sin(s+T*r)*Math.sin(o+v*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(T+w,1-v),S.push(c++)}h.push(S)}for(let p=0;p<n;p++)for(let S=0;S<e;S++){const v=h[p][S+1],w=h[p][S],N=h[p+1][S],T=h[p+1][S+1];(p!==0||o>0)&&f.push(v,w,T),(p!==n-1||l<Math.PI)&&f.push(w,N,T)}this.setIndex(f),this.setAttribute("position",new Ce(g,3)),this.setAttribute("normal",new Ce(_,3)),this.setAttribute("uv",new Ce(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Re(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class il extends ln{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],l=[],c=[],h=new P,u=new P,d=new P;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){const _=g/s*r,m=f/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(_),u.y=(t+e*Math.cos(m))*Math.sin(_),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/s),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){const _=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,S=(s+1)*f+g;o.push(_,m,S),o.push(m,p,S)}this.setIndex(o),this.setAttribute("position",new Ce(a,3)),this.setAttribute("normal",new Ce(l,3)),this.setAttribute("uv",new Ce(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new il(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Ft extends qs{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Qt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gh,this.normalScale=new _t(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Nn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Ro extends ze{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Qt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}class Vg extends Ro{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ze.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Qt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const ga=new ye,Nc=new P,Uc=new P;class Gh{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new _t(512,512),this.map=null,this.mapPass=null,this.matrix=new ye,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new $a,this._frameExtents=new _t(1,1),this._viewportCount=1,this._viewports=[new Ee(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Nc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Nc),Uc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Uc),e.updateMatrixWorld(),ga.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ga),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ga)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Oc=new ye,rr=new P,_a=new P;class Wg extends Gh{constructor(){super(new on(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new _t(4,2),this._viewportCount=6,this._viewports=[new Ee(2,1,1,1),new Ee(0,1,1,1),new Ee(3,1,1,1),new Ee(1,1,1,1),new Ee(3,0,1,1),new Ee(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),rr.setFromMatrixPosition(t.matrixWorld),n.position.copy(rr),_a.copy(n.position),_a.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(_a),n.updateMatrixWorld(),s.makeTranslation(-rr.x,-rr.y,-rr.z),Oc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Oc)}}class sl extends Ro{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Wg}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Xg extends Gh{constructor(){super(new Ch(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Fc extends Ro{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ze.DEFAULT_UP),this.updateMatrix(),this.target=new ze,this.shadow=new Xg}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Zg extends Ro{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Vh{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Bc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Bc();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Bc(){return(typeof performance>"u"?Date:performance).now()}const zc=new ye;class Yg{constructor(t,e,n=0,s=1/0){this.ray=new Mh(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new qa,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return zc.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(zc),this}intersectObject(t,e=!0,n=[]){return La(t,this,n,e),n.sort(kc),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)La(t[s],this,n,e);return n.sort(kc),n}}function kc(i,t){return i.distance-t.distance}function La(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)La(r[o],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Wa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Wa);const Zi=[{id:0,label:"Alex",skin:16763812,hair:2889744,outfit:1981066,accent:15857145,hairStyle:1},{id:1,label:"Jordan",skin:13010498,hair:1118481,outfit:1332013,accent:16710083,hairStyle:0},{id:2,label:"Morgan",skin:8142098,hair:656640,outfit:8917815,accent:16701354,hairStyle:2},{id:3,label:"Casey",skin:15777920,hair:8138002,outfit:1461859,accent:14742270,hairStyle:3},{id:4,label:"Riley",skin:9584654,hair:197379,outfit:10105874,accent:16775149,hairStyle:0},{id:5,label:"Sam",skin:16640216,hair:11817737,outfit:4988309,accent:15591934,hairStyle:1}],rl=[{id:"available",label:"🟢 Available",color:58998},{id:"busy",label:"🔴 Busy",color:16729156},{id:"away",label:"🟡 Away",color:16763904},{id:"meeting",label:"🟣 In Meeting",color:11158783}],Ia=Object.fromEntries(rl.map(i=>[i.id,i.color]));function Wh(i,t=0){const e=new jn;return qh(e,i,t),e}function Xh(i,t){i.userData.status=t;const e=i.userData.statusMesh;e&&e.material.color.setHex(Ia[t]??Ia.available)}function Zh(i,t,e=0){var s;const n=i.userData.talkRing;if(n&&(n.visible=t,t)){const r=.75+Math.sin(e*6)*.25;n.material.opacity=r,n.material.color.setHex(65416),(s=n.material.emissive)==null||s.setHex(65416),n.material.emissiveIntensity=r*1.2}}function Yh(i,t,e){for(i.traverse(n=>{var s;(n.isMesh||n.isSprite)&&((s=n.geometry)==null||s.dispose(),(Array.isArray(n.material)?n.material:[n.material]).forEach(o=>{var a;(a=o==null?void 0:o.map)==null||a.dispose(),o==null||o.dispose()}))});i.children.length;)i.remove(i.children[0]);qh(i,t,e)}function qh(i,t,e){const n=Zi[e]??Zi[0],s=ms(n.skin,.75),r=ms(n.outfit,.65,.05),o=ms(n.accent,.6),a=ms(n.hair,.9),l=ms(1118481,.8),c=ms(1118481,.3),h=(N,T,b=0,O=0,E=0,y=0,C=0,k=0)=>{const H=new St(N,T);return H.position.set(b,O,E),H.rotation.set(y,C,k),H.castShadow=!0,i.add(H),H};h(new ui(.21,.52,4,12),r),h(new Ve(.215,.215,.055,16),l,0,.635),h(new jt(.26,.09,.04),o,0,1.12,.208),h(new Ve(.072,.09,.14,12),s,0,1.49),h(new Re(.19,20,16),s,0,1.68),h(new Re(.048,10,8),s,-.2,1.68),h(new Re(.048,10,8),s,.2,1.68),h(new Re(.034,10,8),o,-.068,1.7,.163),h(new Re(.034,10,8),o,.068,1.7,.163),h(new Re(.021,8,6),c,-.068,1.7,.178),h(new Re(.021,8,6),c,.068,1.7,.178),qg(i,h,a,n.hairStyle),h(new Re(.105,10,8),r,-.315,1.39),h(new Re(.105,10,8),r,.315,1.39);const u=h(new ui(.065,.3,4,8),r,-.31,1.08),d=h(new ui(.065,.3,4,8),r,.31,1.08);h(new Re(.073,12,9),s,-.32,.72),h(new Re(.073,12,9),s,.32,.72);const f=h(new ui(.083,.36,4,8),r,-.13,.4),g=h(new ui(.083,.36,4,8),r,.13,.4);h(new jt(.17,.1,.28),l,-.13,.07,.04),h(new jt(.17,.1,.28),l,.13,.07,.04),h(new Ve(.09,.084,.08,10),l,-.13,.145),h(new Ve(.09,.084,.08,10),l,.13,.145);const _=document.createElement("canvas");_.width=256,_.height=56;const m=_.getContext("2d");m.fillStyle="rgba(0,10,30,0.78)",m.roundRect(0,0,256,56,10),m.fill(),m.fillStyle="#aaddff",m.font="bold 26px Inter, sans-serif",m.textAlign="center",m.fillText(t,128,38);const p=new Rg(new Oh({map:new Ao(_),transparent:!0,depthTest:!1}));p.position.set(0,2.18,0),p.scale.set(1.5,.33,1),i.add(p);const S=Ia[i.userData.status??"available"],v=new St(new Re(.065,8,6),new ur({color:S}));v.position.set(.58,2.22,0),i.add(v),i.userData.statusMesh=v;const w=new St(new il(.38,.055,8,32),new ur({color:65416,transparent:!0,opacity:0,depthWrite:!1,depthTest:!1,side:an}));w.rotation.x=Math.PI/2,w.position.y=.06,w.renderOrder=999,w.visible=!1,i.add(w),i.userData.talkRing=w,i.userData.legL=f,i.userData.legR=g,i.userData.armL=u,i.userData.armR=d,i.userData.walkClock=i.userData.walkClock??0,i.userData.presetId=e}function qg(i,t,e,n){switch(n){case 0:t(new Re(.193,16,10,0,Math.PI*2,0,.8),e,0,1.69);break;case 1:t(new Re(.198,16,10,0,Math.PI*2,0,1.1),e,0,1.68);break;case 2:{t(new Re(.196,16,10,0,Math.PI*2,0,1.05),e,0,1.68);const s=new St(new ui(.09,.22,4,8),e);s.position.set(0,1.51,-.13),s.rotation.x=.28,s.castShadow=!0,i.add(s);break}case 3:t(new Re(.238,16,12),e,0,1.74);break;default:t(new Re(.198,16,10,0,Math.PI*2,0,1.1),e,0,1.68)}}function ms(i,t=.7,e=0){return new Ft({color:i,roughness:t,metalness:e})}function $h(i,t,e){const{legL:n,legR:s,armL:r,armR:o}=i.userData;if(!(!n||!s))if(t){i.userData.walkClock+=e*12;const a=Math.sin(i.userData.walkClock)*.42;n.rotation.x=a,s.rotation.x=-a,r&&(r.rotation.x=-a*.55),o&&(o.rotation.x=a*.55)}else{const a=Math.exp(-12*e);n.rotation.x*=a,s.rotation.x*=a,r&&(r.rotation.x*=a),o&&(o.rotation.x*=a)}}const A={minX:-22,maxX:22,minZ:-24,maxZ:12,wallH:4.5,wallT:.3,lobbyZ:4,midZ:-4,centerX:0,doorH:2.2,doorHalfW:.7,leftDoorX:-11,rightDoorX:11,mainDoorH:2.6,mainDoorHalfW:1.5},ot=A;function pe(i,t,e,n,s,r,o,a){const l=new St(new jt(r,o,a),t);return l.position.set(e,n,s),i.add(l),l}function $g(){const i=new Ft({color:13946822,roughness:.88,metalness:.04,side:an}),t=new Ft({color:8026226,roughness:.78,metalness:.08}),e=new Ft({color:15789285,roughness:.94,metalness:0}),n=new Ft({color:15262940,roughness:.9,metalness:0}),s=new Ft({color:14209736,roughness:.18,metalness:.07}),r=new Ft({color:12090440,roughness:.82,metalness:0}),o=new Ft({color:16118766,roughness:.98,metalness:0}),a=new Ft({color:4341816,roughness:.9,metalness:0}),l=new Ft({color:10131600,roughness:.4,metalness:.6}),c=new Ft({color:11061464,roughness:.04,metalness:.08,transparent:!0,opacity:.25,side:an}),h=new Ft({color:9209984,roughness:.82,metalness:.04}),u=new Ft({color:11579576,roughness:.28,metalness:.82});return{ext:i,span:t,int:e,div:n,tile:s,wood:r,ceil:o,roof:a,frame:l,glass:c,stair:h,rail:u}}function Kg(i){const t=$g(),e=ot.wallH,n=ot.wallT,s=ot.maxX-ot.minX,r=ot.maxZ-ot.minZ,o=0,a=(ot.minZ+ot.maxZ)/2,l=4,c=e*l;pe(i,t.tile,o,.04,(ot.lobbyZ+ot.maxZ)/2,s,.08,ot.maxZ-ot.lobbyZ),pe(i,t.wood,o,.04,(ot.minZ+ot.lobbyZ)/2,s,.08,ot.lobbyZ-ot.minZ),pe(i,t.ext,o,c/2,ot.minZ,s,c,n),pe(i,t.ext,ot.minX,c/2,a,n,c,r),pe(i,t.ext,ot.maxX,c/2,a,n,c,r);const h=ot.mainDoorHalfW,u=ot.mainDoorH,d=e/2;pe(i,t.ext,(ot.minX+-h)/2,d,ot.maxZ,-h-ot.minX,e,n),pe(i,t.ext,(h+ot.maxX)/2,d,ot.maxZ,ot.maxX-h,e,n),pe(i,t.ext,0,u+(e-u)/2,ot.maxZ,h*2,e-u,n),pe(i,t.ext,o,e+(c-e)/2,ot.maxZ,s,c-e,n);for(let v=1;v<l;v++){const w=e*v;pe(i,t.span,o,w+.25,ot.maxZ-.08,s+.2,.5,.14),pe(i,t.span,o,w+.25,ot.minZ+.08,s+.2,.5,.14),pe(i,t.span,ot.minX+.06,w+.25,a,.14,.5,r+.2),pe(i,t.span,ot.maxX-.06,w+.25,a,.14,.5,r+.2)}Jg(i,t),jg(i,t,h);const f=n*.5,g=n/2;Hc(i,t.div,ot.lobbyZ,ot.minX+f,ot.maxX-f,e,n,ot.leftDoorX,ot.doorHalfW,ot.doorH,ot.rightDoorX,ot.doorHalfW,ot.doorH),Hc(i,t.div,ot.midZ,ot.minX+f,ot.maxX-f,e,n,ot.leftDoorX,ot.doorHalfW,ot.doorH,ot.rightDoorX,ot.doorHalfW,ot.doorH),Gc(i,t.div,ot.centerX,ot.minZ+f,ot.midZ-g,e,n),Gc(i,t.div,ot.centerX,ot.midZ+g,ot.lobbyZ-g,e,n);const _=pe(i,t.ceil,o,e+.05,a,s,.1,r);_.userData.mapHide=!0;const m=i.children.length;pe(i,t.roof,o,c+.3,a,s+1,.6,r+1),t_(i,t.ext,s,r,c);for(let v=m;v<i.children.length;v++)i.children[v].userData.mapHide=!0;Qg(i,t),e_(i);const p=i.children.length;n_(i,e);for(let v=p;v<i.children.length;v++)i.children[v].userData.mapHide=!0;const S=i.children.length;i_(i);for(let v=S;v<i.children.length;v++)i.children[v].userData.mapShow=!0}function Jg(i,t){function r(l,c,h,u){const d=new St(new jt(2.3600000000000003,1.7200000000000002,.08),t.frame);d.position.set(l,c,h),d.rotation.y=u,i.add(d);const f=new St(new Qn(2.2,1.6),t.glass);f.position.set(l,c,h),f.rotation.y=u,i.add(f)}const o=ot.wallH,a=[0,1,2,3].map(l=>l*o+o*.6);a.forEach(l=>{[-16,-6,8].forEach(c=>r(ot.minX,l,c,Math.PI/2))}),a.forEach(l=>{[-16,-6,8].forEach(c=>r(ot.maxX,l,c,-Math.PI/2))}),a.forEach(l=>{[-14,0,14].forEach(c=>r(c,l,ot.minZ,Math.PI))}),a.forEach((l,c)=>{c===0?(r(-14,l,ot.maxZ,0),r(14,l,ot.maxZ,0)):[-14,-6,6,14].forEach(h=>r(h,l,ot.maxZ,0))})}function jg(i,t,e,n){[-e-.4,e+.4].forEach(s=>{const r=new St(new Ve(.22,.22,ot.mainDoorH,12),t.ext);r.position.set(s,ot.mainDoorH/2,ot.maxZ+.5),i.add(r)}),pe(i,t.span,0,ot.mainDoorH+.18,ot.maxZ+.7,e*2+2.4,.35,1.8),pe(i,t.int,0,ot.mainDoorH,ot.maxZ+.7,e*2+2.2,.02,1.7)}function Qg(i,t){for(let c=0;c<9;c++)pe(i,t.stair,16.5,.22*(c+.5),5.5+.28*(c+.5),3,.22,.28);for(let c=0;c<9;c+=2)pe(i,t.rail,16.5-3/2+.1,.22*c+.55,5.5+.28*c,.06,1.1,.06),pe(i,t.rail,16.5+3/2-.1,.22*c+.55,5.5+.28*c,.06,1.1,.06);pe(i,t.rail,16.5,.22*9*.5+.55,5.5+.28*9*.5,3,.06,.28*9+.1);const l=-16.5;for(let c=0;c<9;c++)pe(i,t.stair,l,.22*(c+.5),5.5+.28*(c+.5),3,.22,.28);for(let c=0;c<9;c+=2)pe(i,t.rail,l-3/2+.1,.22*c+.55,5.5+.28*c,.06,1.1,.06),pe(i,t.rail,l+3/2-.1,.22*c+.55,5.5+.28*c,.06,1.1,.06);pe(i,t.rail,l,.22*9*.5+.55,5.5+.28*9*.5,3,.06,.28*9+.1)}function Hc(i,t,e,n,s,r,o,a,l,c,h,u,d){const f=r/2,g=[];let _=n;const m=[];m.push({c:a,hw:l,dh:c}),m.push({c:h,hw:u,dh:d}),m.sort((p,S)=>p.c-S.c),m.forEach(({c:p,hw:S,dh:v})=>{const w=p-S,N=p+S;w>_&&g.push({from:_,to:w,full:!0}),g.push({from:w,to:N,full:!1,dh:v}),_=N}),_<s&&g.push({from:_,to:s,full:!0}),g.forEach(({from:p,to:S,full:v,dh:w})=>{const N=S-p,T=(p+S)/2;if(v)pe(i,t,T,f,e,N,r,o);else{const b=r-w;pe(i,t,T,w+b/2,e,N,b,o)}})}function Gc(i,t,e,n,s,r,o){const a=s-n;if(a<=0)return;const l=new St(new jt(o,r,a),t);l.position.set(e,r/2,(n+s)/2),i.add(l)}function t_(i,t,e,n,s){const a=s+.275+.05,l=(ot.minZ+ot.maxZ)/2;[[0,a,ot.maxZ+.05,e+.6,.55,.28],[0,a,ot.minZ-.05,e+.6,.55,.28],[ot.minX-.05,a,l,.28,.55,n+.6],[ot.maxX+.05,a,l,.28,.55,n+.6]].forEach(([h,u,d,f,g,_])=>{const m=new St(new jt(f,g,_),t);m.position.set(h,u,d),i.add(m)})}function e_(i){[{color:12863616,x:ot.minX+.06,z1:ot.midZ,z2:ot.lobbyZ},{color:4241520,x:ot.maxX-.06,z1:ot.midZ,z2:ot.lobbyZ},{color:14712880,x:ot.minX+.06,z1:ot.minZ,z2:ot.midZ},{color:3705032,x:ot.maxX-.06,z1:ot.minZ,z2:ot.midZ},{color:8947848,x:0,z1:ot.lobbyZ,z2:ot.maxZ-1}].forEach(({color:e,x:n,z1:s,z2:r})=>{const o=new Ft({color:e,roughness:.7,metalness:0}),a=r-s,l=new St(new jt(.06,.04,a),o);l.position.set(n,.05,(s+r)/2),i.add(l)})}function n_(i,t){const e=new Ft({color:14210510,roughness:.85,metalness:.06}),n=new Ft({color:16777215,emissive:16774632,emissiveIntensity:1.2,roughness:.7});[[-8,8],[8,8],[0,8],[-11,0],[11,0],[-14,-10],[-8,-18],[8,-18],[14,-10]].forEach(([r,o])=>{const a=new St(new jt(1.2,.06,.65),e);a.position.set(r,t-.04,o),i.add(a);const l=new St(new jt(1.1,.01,.55),n);l.position.set(r,t-.02,o),i.add(l)})}function i_(i){[{name:"LOBBY",color:"#cccccc",x:0,z:8,w:16,d:5},{name:"OPS",color:"#ffaa44",x:-11,z:0,w:12,d:6},{name:"FUN",color:"#44ffaa",x:11,z:0,w:12,d:6},{name:"DESIGN",color:"#ff6ba0",x:-11,z:-14,w:14,d:10},{name:"ENGINEERING",color:"#44aaff",x:11,z:-14,w:14,d:10}].forEach(({name:e,color:n,x:s,z:r,w:o,d:a})=>{const l=document.createElement("canvas");l.width=512,l.height=256;const c=l.getContext("2d");c.fillStyle=n+"18",c.fillRect(0,0,512,256),c.strokeStyle=n,c.lineWidth=10,c.strokeRect(6,6,500,244),c.fillStyle=n,c.font="bold 72px Inter, Arial, sans-serif",c.textAlign="center",c.textBaseline="middle",c.fillText(e,256,128);const h=new St(new Qn(o,a),new ur({map:new Ao(l),transparent:!0,depthWrite:!1}));h.rotation.x=-Math.PI/2,h.position.set(s,.15,r),i.add(h)})}function s_(i){const t=A,e=new Ft({color:5934140,roughness:.96,metalness:0}),n=new St(new Qn(300,300),e);n.rotation.x=-Math.PI/2,n.position.y=-.01,n.receiveShadow=!0,i.add(n);const s=new Ft({color:12630704,roughness:.88,metalness:0}),r=new St(new jt(5,.06,18),s);r.position.set(0,.03,19),r.receiveShadow=!0,i.add(r);const o=new St(new jt(14,.06,8),s);o.position.set(0,.03,14.5),o.receiveShadow=!0,i.add(o);const a=new St(new jt(t.maxX-t.minX,.06,4),s);a.position.set(0,.03,t.maxZ+2),a.receiveShadow=!0,i.add(a);const l=new Ft({color:11578272,roughness:.9,metalness:0}),c=t.maxX-t.minX,h=t.maxZ-t.minZ,u=new St(new jt(c+.8,.22,h+.8),l);u.position.set(0,-.11,(t.minZ+t.maxZ)/2),i.add(u),[[-30,-18],[-30,5],[-30,20],[30,-18],[30,5],[30,20],[-12,26],[12,26],[-36,12],[36,12],[-28,-30],[28,-30]].forEach(([f,g])=>r_(i,f,g)),[[-4,24],[4,24],[-14,14],[14,14]].forEach(([f,g])=>o_(i,f,g)),a_(i),l_(i)}function r_(i,t,e){const n=new Ft({color:5911832,roughness:.92}),s=new Ft({color:3830312,roughness:.95}),r=new St(new Ve(.18,.26,2.2,8),n);r.position.set(t,1.1,e),r.castShadow=!0,i.add(r),[[1.8,2.5,3.4],[1.3,2,4.8],[.7,1.4,6]].forEach(([o,a,l])=>{const c=new St(new nl(o,a,9),s);c.position.set(t,l,e),c.castShadow=!0,i.add(c)})}function o_(i,t,e){const n=new Ft({color:6316128,roughness:.55,metalness:.75}),s=new Ft({color:16775384,emissive:16773296,emissiveIntensity:1.5,roughness:.4}),r=new St(new Ve(.06,.08,5,8),n);r.position.set(t,2.5,e),r.castShadow=!0,i.add(r);const o=new St(new jt(.06,.06,.9),n);o.position.set(t,5.1,e-.4),i.add(o);const a=new St(new jt(.45,.14,.28),s);a.position.set(t,4.95,e-.8),i.add(a);const l=new sl(16771232,6,12);l.position.set(t,4.95,e-.8),i.add(l)}function a_(i){const t=[2250154,11149858,8947840,2245666,8947848],e=new Ft({color:1710618,roughness:.8});[[-40,-22],[-40,-16],[-40,-10],[40,-22],[40,-16],[40,-10]].forEach(([s,r],o)=>{const a=t[o%t.length],l=new Ft({color:a,roughness:.45,metalness:.3}),c=new St(new jt(4.4,1.4,2),l);c.position.set(s,.72,r),c.castShadow=!0,i.add(c);const h=new St(new jt(2.8,.7,1.85),l);h.position.set(s-.2,1.8,r),i.add(h),[[-1.5,-1.05],[-1.5,1.05],[1.5,-1.05],[1.5,1.05]].forEach(([u,d])=>{const f=new St(new Ve(.36,.36,.22,12),e);f.rotation.z=Math.PI/2,f.position.set(s+u,.36,r+d),i.add(f)})})}function l_(i){const t=new Ft({color:4878400,roughness:1});[[-80,-60,30,8,20],[80,-60,28,7,18],[0,-80,40,6,25],[-50,-70,35,9,22],[55,-70,32,7,20]].forEach(([e,n,s,r,o])=>{const a=new St(new jt(s,r,o),t);a.position.set(e,r/2-2,n),i.add(a)})}const gs=A.leftDoorX,_s=A.rightDoorX,Ie=A.doorHalfW,ai=A.doorH,vs=.1,Pr=[{id:"main-left",label:"Main Entrance",hinge:{x:-1.5,y:A.mainDoorH/2,z:A.maxZ},meshOffset:{x:A.mainDoorHalfW/2,y:0,z:0},w:A.mainDoorHalfW,h:A.mainDoorH,d:vs,closedRY:0,openRY:Math.PI/2,closedAABB:{minX:-1.5,maxX:0,minZ:A.maxZ-.14,maxZ:A.maxZ+.14}},{id:"main-right",label:"Main Entrance",hinge:{x:A.mainDoorHalfW,y:A.mainDoorH/2,z:A.maxZ},meshOffset:{x:-1.5/2,y:0,z:0},w:A.mainDoorHalfW,h:A.mainDoorH,d:vs,closedRY:0,openRY:-Math.PI/2,closedAABB:{minX:0,maxX:A.mainDoorHalfW,minZ:A.maxZ-.14,maxZ:A.maxZ+.14}},{id:"ops",label:"Ops Room",hinge:{x:gs-Ie,y:ai/2,z:A.lobbyZ},meshOffset:{x:Ie,y:0,z:0},w:Ie*2,h:ai,d:vs,closedRY:0,openRY:-Math.PI/2,closedAABB:{minX:gs-Ie,maxX:gs+Ie,minZ:A.lobbyZ-.12,maxZ:A.lobbyZ+.12}},{id:"fun",label:"Fun Room",hinge:{x:_s+Ie,y:ai/2,z:A.lobbyZ},meshOffset:{x:-Ie,y:0,z:0},w:Ie*2,h:ai,d:vs,closedRY:0,openRY:Math.PI/2,closedAABB:{minX:_s-Ie,maxX:_s+Ie,minZ:A.lobbyZ-.12,maxZ:A.lobbyZ+.12}},{id:"design",label:"Design Room",hinge:{x:gs-Ie,y:ai/2,z:A.midZ},meshOffset:{x:Ie,y:0,z:0},w:Ie*2,h:ai,d:vs,closedRY:0,openRY:-Math.PI/2,closedAABB:{minX:gs-Ie,maxX:gs+Ie,minZ:A.midZ-.12,maxZ:A.midZ+.12}},{id:"engineering",label:"Engineering Room",hinge:{x:_s+Ie,y:ai/2,z:A.midZ},meshOffset:{x:-Ie,y:0,z:0},w:Ie*2,h:ai,d:vs,closedRY:0,openRY:Math.PI/2,closedAABB:{minX:_s-Ie,maxX:_s+Ie,minZ:A.midZ-.12,maxZ:A.midZ+.12}}],Ks={};function c_(i){const t=new Ft({color:8016944,roughness:.72,metalness:.02,side:an}),e=new Ft({color:13937220,roughness:.28,metalness:.88}),n=new Ft({color:6176286,roughness:.8,metalness:0});return Pr.forEach(s=>{const r=new jn;r.position.set(s.hinge.x,s.hinge.y,s.hinge.z),i.add(r);const o=new St(new jt(s.w,s.h,s.d),t);o.position.set(s.meshOffset.x,s.meshOffset.y,s.meshOffset.z),o.userData.doorId=s.id,r.add(o);const a=s.meshOffset;[-.45,.32].forEach(f=>{const g=new St(new jt(s.w*.85,.04,s.d*1.2),n);g.position.set(a.x,a.y+f,a.z+s.d*.1),r.add(g)});const l=a.x+(a.x>=0?-s.w*.36:s.w*.36),c=new St(new Re(.05,8,6),e);c.position.set(l,a.y-.08,a.z+s.d*.65),r.add(c);const h=c.clone();h.position.z=a.z-s.d*.65,r.add(h);const u=s.id==="main-left"||s.id==="main-right",d=u?s.openRY:s.closedRY;r.rotation.y=d,Ks[s.id]={open:u,targetRY:d,currentRY:d,pivot:r}}),{update:h_,toggleDoor:Zn,getNearbyDoor:Kh,getClosedColliders:Jh}}function h_(i){Object.values(Ks).forEach(t=>{Math.abs(t.currentRY-t.targetRY)>5e-4&&(t.currentRY+=(t.targetRY-t.currentRY)*Math.min(1,i*7),t.pivot.rotation.y=t.currentRY)})}function Zn(i){const t=Ks[i],e=Pr.find(n=>n.id===i);if(!(!t||!e))return t.open=!t.open,t.targetRY=t.open?e.openRY:e.closedRY,t.open}function Kh(i,t=2.8){let e=null,n=t;return Pr.forEach(s=>{const r=i.x-s.hinge.x,o=i.z-s.hinge.z,a=Math.sqrt(r*r+o*o);a<n&&(n=a,e={def:s,state:Ks[s.id]})}),e}function xs(i){var t;return((t=Ks[i])==null?void 0:t.open)??!1}function Jh(){const i=[];return Pr.forEach(t=>{const e=Ks[t.id];if(!e)return;Math.abs(e.currentRY-t.closedRY)<.18&&i.push(t.closedAABB)}),i}function u_(i){const t=document.getElementById("canvas"),e=new bg({canvas:t,antialias:!0});e.setSize(window.innerWidth,window.innerHeight),e.setPixelRatio(Math.min(window.devicePixelRatio,2)),e.shadowMap.enabled=!0,e.shadowMap.type=oh,e.toneMapping=lh,e.toneMappingExposure=1;const n=new Tg;n.background=new Qt(9357544),n.fog=new Ja(11195624,.007);const s=new on(80,window.innerWidth/window.innerHeight,.1,300);s.position.set(0,1.7,22),n.add(new Zg(16775408,.9)),n.add(new Vg(10407144,5929544,.9));const r=new Fc(16774616,3.2);r.position.set(40,70,35),r.castShadow=!0,r.shadow.mapSize.set(2048,2048),r.shadow.camera.near=1,r.shadow.camera.far=120,r.shadow.camera.left=-50,r.shadow.camera.right=50,r.shadow.camera.top=50,r.shadow.camera.bottom=-50,r.shadow.radius=3,r.shadow.bias=-.001,n.add(r);const o=new Fc(13164021,.6);o.position.set(-25,30,-20),n.add(o),[{pos:[-5,3.8,-14],color:16773344,intensity:25,radius:18},{pos:[5,3.8,-14],color:16773344,intensity:25,radius:18},{pos:[-11,3.8,0],color:16774376,intensity:22,radius:16},{pos:[11,3.8,0],color:16774376,intensity:22,radius:16},{pos:[0,3.8,8],color:16775412,intensity:28,radius:22}].forEach(({pos:d,color:f,intensity:g,radius:_})=>{const m=new sl(f,g,_);m.position.set(...d),n.add(m)}),i==null||i(10,"Laying foundations…"),s_(n),i==null||i(35,"Building structure…"),Kg(n),i==null||i(65,"Installing doors…");const l=c_(n);i==null||i(90,"Finishing touches…"),n.userData.doors=l,window.addEventListener("resize",()=>{s.aspect=window.innerWidth/window.innerHeight,s.updateProjectionMatrix(),e.setSize(window.innerWidth,window.innerHeight)});const c=new Vh;function h(){requestAnimationFrame(h);const d=c.getDelta();l.update(d),e.render(n,s)}h();let u=null;return i==null||i(100,"Ready!"),setTimeout(()=>{u&&u()},200),{scene:n,camera:s,renderer:e,onShipLoaded:d=>{u=d}}}const Vc=[{id:"design-screen",label:"Design Board",zone:"DESIGN",tool:"Excalidraw",url:"https://excalidraw.com",position:{x:A.minX+.12,y:2.2,z:-14},rotationY:Math.PI/2,width:4.5,height:2.8,color:16739232,emoji:"✏️"},{id:"engineering-screen",label:"Code Docs",zone:"ENGINEERING",tool:"HackMD",url:"https://hackmd.io",position:{x:A.maxX-.12,y:2.2,z:-14},rotationY:-Math.PI/2,width:4.5,height:2.8,color:4500223,emoji:"💻"},{id:"ops-screen",label:"Ops Dashboard",zone:"OPS",tool:"Grafana",url:"https://play.grafana.org",position:{x:A.minX+.12,y:2.2,z:0},rotationY:Math.PI/2,width:4,height:2.5,color:16755268,emoji:"📊"},{id:"fun-screen",label:"Vibe Zone",zone:"FUN",tool:"Spotify",url:"https://open.spotify.com/embed/playlist/37i9dQZF1DX0XUsuxWHRQd?utm_source=generator&theme=0",position:{x:A.maxX-.12,y:2.2,z:0},rotationY:-Math.PI/2,width:4,height:2.5,color:4521898,emoji:"🎵"}];function d_(i){const t=[];return Vc.forEach(e=>{const n=new jn;n.position.set(e.position.x,e.position.y,e.position.z),n.rotation.y=e.rotationY,i.add(n);const s=.1,r=new Ft({color:1710618,roughness:.3,metalness:.85}),o=(g,_,m,p,S,v)=>{const w=new St(new jt(p,S,v),r);w.position.set(g,_,m),n.add(w)};o(0,e.height/2+s/2,0,e.width+s*2,s,s*2),o(0,-e.height/2-s/2,0,e.width+s*2,s,s*2),o(-e.width/2-s/2,0,0,s,e.height+s*2,s*2),o(e.width/2+s/2,0,0,s,e.height+s*2,s*2);const a=new Ft({color:e.color,emissive:e.color,emissiveIntensity:2.5,roughness:.08}),l=(g,_,m,p,S,v)=>{const w=new St(new jt(p,S,v),a);w.position.set(g,_,m),n.add(w)};l(0,e.height/2,.02,e.width,.04,.04),l(0,-e.height/2,.02,e.width,.04,.04),l(-e.width/2,0,.02,.04,e.height,.04),l(e.width/2,0,.02,.04,e.height,.04);const c=f_(e),h=new Ft({map:c,emissiveMap:c,emissive:new Qt(e.color),emissiveIntensity:.14,roughness:.1}),u=new St(new Qn(e.width,e.height),h);u.position.set(0,0,.02),u.userData.screen=e,n.add(u),t.push(u);const d=new sl(e.color,16,8);d.position.set(0,0,.6),n.add(d);let f=Math.random()*Math.PI*2;(function g(){requestAnimationFrame(g),f+=.018,h.emissiveIntensity=.12+Math.sin(f)*.04,d.intensity=14+Math.sin(f*.65)*4})()}),{meshes:t,screens:Vc}}function f_(i){const e=Math.round(512*(i.height/i.width)),n=document.createElement("canvas");n.width=512,n.height=e;const s=n.getContext("2d"),r="#"+i.color.toString(16).padStart(6,"0");s.fillStyle="#060c18",s.fillRect(0,0,512,e),s.fillStyle="rgba(200,230,255,0.035)";for(let l=0;l<512;l+=32)for(let c=0;c<e;c+=32)s.fillRect(l,c,2,2);const o=s.createLinearGradient(0,0,512,0);o.addColorStop(0,r+"55"),o.addColorStop(1,"transparent"),s.fillStyle=o,s.fillRect(0,0,512,46),s.fillStyle=r,s.font="bold 16px Inter, monospace",s.textAlign="left",s.fillText(i.zone,14,30),s.fillStyle="rgba(255,255,255,0.38)",s.font="12px Inter, monospace",s.textAlign="right",s.fillText(i.tool,498,30),s.strokeStyle=r+"44",s.lineWidth=1,s.beginPath(),s.moveTo(0,48),s.lineTo(512,48),s.stroke();const a=Math.round(e*.27);return s.font=`${a}px sans-serif`,s.textAlign="center",s.fillText(i.emoji,512/2,e*.52),s.fillStyle="#fff",s.font=`bold ${Math.round(e*.1)}px Inter, monospace`,s.textAlign="center",s.shadowColor=r,s.shadowBlur=18,s.fillText(i.label,512/2,e*.72),s.shadowBlur=0,s.fillStyle=r+"bb",s.font=`${Math.round(e*.062)}px Inter, monospace`,s.textAlign="center",s.fillText("[ E ] or click to open",512/2,e*.88),s.strokeStyle=r+"55",s.lineWidth=2,s.beginPath(),s.moveTo(0,e-2),s.lineTo(512,e-2),s.stroke(),new Ao(n)}const so=.38,Me=A.wallT/2+.01,ws=A.leftDoorX,bs=A.rightDoorX,li=A.doorHalfW,Wc=A.mainDoorHalfW,jh=[{minX:A.minX,maxX:-Wc,minZ:A.maxZ-Me,maxZ:A.maxZ+Me},{minX:Wc,maxX:A.maxX,minZ:A.maxZ-Me,maxZ:A.maxZ+Me},{minX:A.minX,maxX:A.maxX,minZ:A.minZ-Me,maxZ:A.minZ+Me},{minX:A.minX-Me,maxX:A.minX+Me,minZ:A.minZ,maxZ:A.maxZ},{minX:A.maxX-Me,maxX:A.maxX+Me,minZ:A.minZ,maxZ:A.maxZ},{minX:A.minX,maxX:ws-li,minZ:A.lobbyZ-Me,maxZ:A.lobbyZ+Me},{minX:ws+li,maxX:bs-li,minZ:A.lobbyZ-Me,maxZ:A.lobbyZ+Me},{minX:bs+li,maxX:A.maxX,minZ:A.lobbyZ-Me,maxZ:A.lobbyZ+Me},{minX:A.minX,maxX:ws-li,minZ:A.midZ-Me,maxZ:A.midZ+Me},{minX:ws+li,maxX:bs-li,minZ:A.midZ-Me,maxZ:A.midZ+Me},{minX:bs+li,maxX:A.maxX,minZ:A.midZ-Me,maxZ:A.midZ+Me},{minX:A.centerX-Me,maxX:A.centerX+Me,minZ:A.minZ,maxZ:A.lobbyZ},{minX:-80,maxX:80,minZ:68,maxZ:70},{minX:-80,maxX:80,minZ:-70,maxZ:-68},{minX:-70,maxX:-68,minZ:-70,maxZ:70},{minX:68,maxX:70,minZ:-70,maxZ:70}];let Qh=[];function p_(i){Qh=i}function m_(i,t,e){const n=Math.max(e.minX,Math.min(i,e.maxX)),s=Math.max(e.minZ,Math.min(t,e.maxZ)),r=i-n,o=t-s,a=r*r+o*o;if(a<so*so&&a>1e-6){const l=Math.sqrt(a),c=so-l;return{x:i+r/l*c,z:t+o/l*c}}return a===0?{x:i+so,z:t}:null}function va(i,t){let e=t.x,n=t.z;const s=[...jh,...Jh(),...Qh];for(let r=0;r<2;r++)for(const o of s){const a=m_(e,n,o);a&&(e=a.x,n=a.z)}return{x:e,z:n}}function xo(i){const t=i.x,e=i.z;if(e>A.maxZ||e<A.minZ||t<A.minX||t>A.maxX)return"OUTSIDE";if(e>A.lobbyZ)return"LOBBY";const n=t<A.centerX,s=e>A.midZ,r=e<=A.midZ;return s&&n?"OPS":s&&!n?"FUN":r&&n?"DESIGN":"ENGINEERING"}const g_={mainDoor:{x:0,z:A.maxZ+.5},lobbyIn:{x:0,z:A.maxZ-1.5},opsEntry:{x:ws,z:A.lobbyZ-1},funEntry:{x:bs,z:A.lobbyZ-1},designEntry:{x:ws,z:A.midZ-1},engEntry:{x:bs,z:A.midZ-1}};function __(i,t){const e=xo(i),n=xo(t);if(e===n)return[{x:t.x,z:t.z}];const s={x:t.x,z:t.z},r=g_,o={"OUTSIDE→LOBBY":[r.mainDoor,r.lobbyIn],"OUTSIDE→OPS":[r.mainDoor,r.lobbyIn,r.opsEntry],"OUTSIDE→FUN":[r.mainDoor,r.lobbyIn,r.funEntry],"OUTSIDE→DESIGN":[r.mainDoor,r.lobbyIn,r.opsEntry,r.designEntry],"OUTSIDE→ENGINEERING":[r.mainDoor,r.lobbyIn,r.funEntry,r.engEntry],"LOBBY→OPS":[r.opsEntry],"LOBBY→FUN":[r.funEntry],"LOBBY→DESIGN":[r.opsEntry,r.designEntry],"LOBBY→ENGINEERING":[r.funEntry,r.engEntry],"LOBBY→OUTSIDE":[r.mainDoor],"OPS→LOBBY":[r.opsEntry],"OPS→DESIGN":[r.designEntry],"OPS→FUN":[r.opsEntry,r.funEntry],"OPS→ENGINEERING":[r.opsEntry,r.funEntry,r.engEntry],"OPS→OUTSIDE":[r.opsEntry,r.mainDoor],"FUN→LOBBY":[r.funEntry],"FUN→ENGINEERING":[r.engEntry],"FUN→OPS":[r.funEntry,r.opsEntry],"FUN→DESIGN":[r.funEntry,r.opsEntry,r.designEntry],"FUN→OUTSIDE":[r.funEntry,r.mainDoor],"DESIGN→OPS":[r.designEntry],"DESIGN→LOBBY":[r.designEntry,r.opsEntry],"DESIGN→FUN":[r.designEntry,r.opsEntry,r.funEntry],"DESIGN→ENGINEERING":[r.designEntry,r.opsEntry,r.funEntry,r.engEntry],"DESIGN→OUTSIDE":[r.designEntry,r.opsEntry,r.mainDoor],"ENGINEERING→FUN":[r.engEntry],"ENGINEERING→LOBBY":[r.engEntry,r.funEntry],"ENGINEERING→OPS":[r.engEntry,r.funEntry,r.opsEntry],"ENGINEERING→DESIGN":[r.engEntry,r.funEntry,r.opsEntry,r.designEntry],"ENGINEERING→OUTSIDE":[r.engEntry,r.mainDoor]},a=`${e}→${n}`;return[...o[a]??[],s]}const ys=5.5,v_=5,Xc=2,Zc=12,x_=1.65,Yc=60,y_=64,M_=57;function S_(i,t,e){const n={};let s=Math.PI,r=0,o="flat",a=[],l=0,c=!1,h=!1,u=!1,d=.28,f=v_,g=0,_=0,m=0,p=22,S=38,v=!1;const w={active:!1,x:0,y:0,id:-1,ox:0,oy:0},N={active:!1,lx:0,ly:0,id:-1},T={active:!1,dist:0},b=document.getElementById("vjoy-base"),O=document.getElementById("vjoy-stick");document.addEventListener("keydown",q=>{if(n[q.code]=!0,q.code==="KeyR"&&(i.position.set(0,0,22),s=Math.PI,r=0,a=[],c=!1,E_("Respawned at Entrance")),q.code==="Tab"){q.preventDefault();const lt=["flat","overview","third","first"];C(lt[(lt.indexOf(o)+1)%lt.length])}q.code==="Escape"&&o!=="third"&&C("third")}),document.addEventListener("keyup",q=>{n[q.code]=!1}),document.addEventListener("mousemove",q=>{if(document.pointerLockElement===e){o==="first"&&(r=Math.max(-1.2,Math.min(.5,r-q.movementY*.002))),s-=q.movementX*.0025;return}if(h)if(o==="overview"){const lt=S*1.534*.9/window.innerHeight;m-=q.movementX*lt,p+=q.movementY*lt,m=Math.max(-60,Math.min(60,m)),p=Math.max(-60,Math.min(60,p)),v=!0,(Math.abs(q.movementX)>2||Math.abs(q.movementY)>2)&&(u=!0)}else o==="third"?(s-=q.movementX*.005,d=Math.max(-.05,Math.min(1,d+q.movementY*.003)),(Math.abs(q.movementX)>2||Math.abs(q.movementY)>2)&&(u=!0)):(s-=q.movementX*.005,(Math.abs(q.movementX)>2||Math.abs(q.movementY)>2)&&(u=!0))}),e.addEventListener("mousedown",q=>{q.button===0&&(h=!0,u=!1,o==="overview"&&(e.style.cursor="grabbing"))}),document.addEventListener("mouseup",q=>{q.button===0&&(h=!1,o==="overview"&&(e.style.cursor="grab"))}),e.addEventListener("contextmenu",q=>q.preventDefault()),e.addEventListener("wheel",q=>{if(o!=="overview"&&o!=="third")return;q.preventDefault();const lt=q.deltaMode===0?q.deltaY:q.deltaY*24,F=Math.pow(.997,lt);if(o==="overview"){const Z=S;S=Math.max(14,Math.min(60,S*F));const K=S-Z,$=Math.tan(t.fov*Math.PI/180/2),ct=window.innerWidth/window.innerHeight,wt=q.clientX/window.innerWidth-.5,Bt=-(q.clientY/window.innerHeight-.5);m-=wt*K*2*$*ct,p+=Bt*K*2*$,m=Math.max(-60,Math.min(60,m)),p=Math.max(-60,Math.min(60,p)),v=!0}else f=Math.max(Xc,Math.min(Zc,f*F))},{passive:!1}),e.addEventListener("touchstart",q=>{if(o!=="flat"){q.preventDefault();for(let lt=0;lt<q.changedTouches.length;lt++){const F=q.changedTouches[lt];o==="overview"?N.active||(N.active=!0,N.id=F.identifier,N.lx=F.clientX,N.ly=F.clientY,h=!0,u=!1):F.clientX<window.innerWidth*.5&&!w.active?(w.active=!0,w.id=F.identifier,w.ox=F.clientX,w.oy=F.clientY,w.x=0,w.y=0,b&&(b.style.left=F.clientX-40+"px",b.style.top=F.clientY-40+"px",b.style.display="block",O&&(O.style.transform="translate(-50%,-50%)"))):F.clientX>=window.innerWidth*.5&&!N.active&&(N.active=!0,N.id=F.identifier,N.lx=F.clientX,N.ly=F.clientY)}if(q.touches.length>=2){const lt=q.touches[0],F=q.touches[1],Z=F.clientX-lt.clientX,K=F.clientY-lt.clientY;T.active=!0,T.dist=Math.sqrt(Z*Z+K*K)}}},{passive:!1}),e.addEventListener("touchmove",q=>{if(o!=="flat"){q.preventDefault();for(let lt=0;lt<q.changedTouches.length;lt++){const F=q.changedTouches[lt];if(F.identifier===w.id){const Z=F.clientX-w.ox,K=F.clientY-w.oy,$=40,ct=Math.sqrt(Z*Z+K*K),wt=ct>$?$/ct:1;w.x=Z*wt/$,w.y=K*wt/$,O&&(O.style.transform=`translate(calc(-50% + ${Z*wt}px), calc(-50% + ${K*wt}px))`)}if(F.identifier===N.id){const Z=F.clientX-N.lx,K=F.clientY-N.ly;if(o==="overview"){const $=S*1.534*.9/window.innerHeight;m-=Z*$,p+=K*$,m=Math.max(-60,Math.min(60,m)),p=Math.max(-60,Math.min(60,p)),v=!0,(Math.abs(Z)>2||Math.abs(K)>2)&&(u=!0)}else s-=Z*.004,d=Math.max(-.05,Math.min(1,d+K*.003));N.lx=F.clientX,N.ly=F.clientY}}if(T.active&&q.touches.length>=2){const lt=q.touches[0],F=q.touches[1],Z=F.clientX-lt.clientX,K=F.clientY-lt.clientY,$=Math.sqrt(Z*Z+K*K);if(T.dist>0){const ct=T.dist/$;o==="overview"?S=Math.max(14,Math.min(60,S*ct)):o==="third"&&(f=Math.max(Xc,Math.min(Zc,f*ct)))}T.dist=$}}},{passive:!1}),e.addEventListener("touchend",q=>{if(o!=="flat"){q.preventDefault();for(let lt=0;lt<q.changedTouches.length;lt++){const F=q.changedTouches[lt];F.identifier===w.id&&(w.active=!1,w.x=0,w.y=0,w.id=-1,b&&(b.style.display="none")),F.identifier===N.id&&(N.active=!1,N.id=-1,h=!1)}q.touches.length<2&&(T.active=!1,T.dist=0)}},{passive:!1});function E(q){a=__({x:i.position.x,z:i.position.z},q),l=0,c=!0,v=!1,o==="overview"&&y(q)}function y(q){const lt=document.getElementById("overview-marker");if(!lt)return;const F=new P(q.x,0,q.z);F.project(t),lt.style.left=(F.x*.5+.5)*window.innerWidth+"px",lt.style.top=(-F.y*.5+.5)*window.innerHeight+"px",lt.style.display="block"}function C(q){var $;o=q;const lt=document.getElementById("overview-panel");lt&&(lt.style.display=o==="overview"?"flex":"none");const F=document.getElementById("overview-marker");F&&o!=="overview"&&(F.style.display="none"),(o==="third"||o==="overview")&&(($=document.exitPointerLock)==null||$.call(document)),q!=="third"&&(t.fov=Yc,t.updateProjectionMatrix());const Z="ontouchstart"in window||navigator.maxTouchPoints>0,K=document.getElementById("vjoy-zone");K&&(K.style.display=Z&&(q==="third"||q==="first")?"block":"none"),w.active=!1,w.x=0,w.y=0,b&&(b.style.display="none"),e.style.cursor=o==="overview"?"grab":"pointer",e.style.visibility=o==="flat"?"hidden":"visible",document.querySelectorAll(".vtbtn").forEach(ct=>ct.classList.toggle("active",ct.dataset.view===o))}const k=new P,H=new P,z=new P,j=new P,Y=new P,et=new P(0,1,0);function J(q){j.copy(i.position);let lt=!1;if(o==="flat"){if(z.set(0,0,0),(n.KeyW||n.ArrowUp)&&(z.z-=1),(n.KeyS||n.ArrowDown)&&(z.z+=1),(n.KeyA||n.ArrowLeft)&&(z.x-=1),(n.KeyD||n.ArrowRight)&&(z.x+=1),(n.KeyW||n.KeyS||n.KeyA||n.KeyD||n.ArrowUp||n.ArrowDown||n.ArrowLeft||n.ArrowRight)&&c&&(c=!1,a=[]),c&&a.length>0&&z.lengthSq()===0){const K=a[l],$=K.x-i.position.x,ct=K.z-i.position.z,wt=Math.sqrt($*$+ct*ct);wt<.25?++l>=a.length&&(c=!1,a=[]):z.set($/wt,0,ct/wt)}if(z.lengthSq()>0){z.normalize(),i.position.x+=z.x*ys*q,i.position.z+=z.z*ys*q;let $=Math.atan2(z.x,z.z)-i.rotation.y;for(;$>Math.PI;)$-=Math.PI*2;for(;$<-Math.PI;)$+=Math.PI*2;i.rotation.y+=$*Math.min(1,20*q),lt=!0}const Z=va(j,i.position);i.position.set(Z.x,0,Z.z),t.position.set(i.position.x,60,i.position.z),t.lookAt(i.position.x,0,i.position.z)}else if(o==="overview"){if(c){const Z=1-Math.exp(-8*q);m+=(i.position.x-m)*Z,p+=(i.position.z-p)*Z,v=!1}else if(!v){const Z=1-Math.exp(-5*q);m+=(i.position.x-m)*Z,p+=(i.position.z-p)*Z}Y.set(m,S,p+1);const F=t.position.distanceTo(Y)>22?20:8;if(t.position.lerp(Y,1-Math.exp(-F*q)),t.lookAt(m,0,p),c&&a.length>0){const Z=a[l],K=Z.x-i.position.x,$=Z.z-i.position.z,ct=Math.sqrt(K*K+$*$);ct<.25?++l>=a.length&&(c=!1,a=[]):(i.position.x+=K/ct*ys*1.4*q,i.position.z+=$/ct*ys*1.4*q,i.rotation.y=Math.atan2(K,$),lt=!0)}}else if(o==="third"){const F=mt(q);lt=F.isMoving;const Z=va(j,i.position);if(i.position.set(Z.x,0,Z.z),lt&&!h){let L=i.rotation.y-s;for(;L>Math.PI;)L-=Math.PI*2;for(;L<-Math.PI;)L+=Math.PI*2;const Zt=F.fromKeys?5:3;s+=L*Zt*q}const K=yt(i.position.x,i.position.z,s,f),$=K<f*.85,ct=i.position.y+1.2;g+=q*12,_+=((lt?1:0)-_)*Math.min(1,8*q);const wt=Math.sin(g)*.035*_;Y.set(i.position.x-Math.sin(s)*Math.cos(d)*K,ct+Math.sin(d)*K+wt,i.position.z-Math.cos(s)*Math.cos(d)*K),K<f*.92?t.position.copy(Y):t.position.lerp(Y,1-Math.exp(-14*q)),t.lookAt(i.position.x,ct,i.position.z);const Bt=$?M_:lt?y_:Yc;t.fov+=(Bt-t.fov)*Math.min(1,6*q),t.updateProjectionMatrix()}else{lt=mt(q).isMoving;const F=va(j,i.position);i.position.set(F.x,0,F.z),t.position.set(i.position.x,x_,i.position.z),t.rotation.order="YXZ",t.rotation.set(r,Math.PI+s,0)}return lt}function mt(q){t.getWorldDirection(k),k.y=0,k.normalize(),H.crossVectors(k,et).normalize(),z.set(0,0,0),(n.KeyW||n.ArrowUp)&&z.addScaledVector(k,1),(n.KeyS||n.ArrowDown)&&z.addScaledVector(k,-1),(n.KeyA||n.ArrowLeft)&&z.addScaledVector(H,-1),(n.KeyD||n.ArrowRight)&&z.addScaledVector(H,1),w.active&&(z.addScaledVector(k,-w.y),z.addScaledVector(H,w.x),c&&(c=!1,a=[]));const lt=n.KeyW||n.KeyS||n.KeyA||n.KeyD||n.ArrowUp||n.ArrowDown||n.ArrowLeft||n.ArrowRight,F=lt;if(lt&&c&&(c=!1,a=[]),c&&a.length>0&&z.lengthSq()===0){const Z=a[l],K=Z.x-i.position.x,$=Z.z-i.position.z,ct=Math.sqrt(K*K+$*$);ct<.25?++l>=a.length&&(c=!1,a=[]):z.set(K/ct,0,$/ct)}if(z.lengthSq()>0){z.normalize(),i.position.x+=z.x*ys*q,i.position.z+=z.z*ys*q;let K=Math.atan2(z.x,z.z)-i.rotation.y;for(;K>Math.PI;)K-=Math.PI*2;for(;K<-Math.PI;)K+=Math.PI*2;return i.rotation.y+=K*Math.min(1,20*q),{isMoving:!0,fromKeys:F}}return{isMoving:!1,fromKeys:F}}function yt(q,lt,F,Z){const K=-Math.sin(F),$=-Math.cos(F);let ct=Z;for(const wt of jh){const Bt=Tt(q,lt,K,$,wt);Bt>.3&&Bt<ct&&(ct=Bt-.25)}return Math.max(.8,ct)}function Tt(q,lt,F,Z,K){const $=F===0?1e10:1/F,ct=Z===0?1e10:1/Z,wt=(K.minX-q)*$,Bt=(K.maxX-q)*$,L=(K.minZ-lt)*ct,Zt=(K.maxZ-lt)*ct,Gt=Math.max(Math.min(wt,Bt),Math.min(L,Zt)),he=Math.min(Math.max(wt,Bt),Math.max(L,Zt));return he<.001||Gt>he?1/0:Gt>.001?Gt:1/0}return C(o),{update:J,navigate:E,setMode:C,getMode:()=>o,isDragMoved:()=>u,setNavPath:q=>{a=q,l=0,c=!0}}}function E_(i){const t=document.getElementById("hud-toast");t&&(t.textContent=i,t.classList.add("show"),clearTimeout(t._t),t._t=setTimeout(()=>t.classList.remove("show"),2e3))}function w_(i){const t=[];return b_(i,t),T_(i,t),A_(i,t),R_(i,t),C_(i,t),{colliders:t}}const ee={oak:()=>new Ft({color:11565120,roughness:.82,metalness:0}),white:()=>new Ft({color:15789284,roughness:.72,metalness:0}),dark:()=>new Ft({color:3024928,roughness:.62,metalness:.08}),metal:()=>new Ft({color:9474200,roughness:.38,metalness:.8}),chair:()=>new Ft({color:2767456,roughness:.82,metalness:0}),pink:()=>new Ft({color:13656192,roughness:.72,metalness:0}),green:()=>new Ft({color:4761712,roughness:.72,metalness:0}),amber:()=>new Ft({color:15241280,roughness:.72,metalness:0}),blue:()=>new Ft({color:4227264,roughness:.72,metalness:0}),screen:()=>new Ft({color:1054752,emissive:1056832,emissiveIntensity:.6,roughness:.08}),bean:()=>new Ft({color:9453728,roughness:.92,metalness:0}),sofa:()=>new Ft({color:4878400,roughness:.88,metalness:0})};function bn(i,t,e,n,s,r,o,a,l,c=.12){const h=new St(new jt(r,o,a),t);return h.position.set(e,n,s),i.add(h),l&&l.push({minX:e-r/2-c,maxX:e+r/2+c,minZ:s-a/2-c,maxZ:s+a/2+c}),h}function gi(i,t,e,n,s,r,o){const a=o??ee.oak(),l=.76,c=.06,h=l-c,u=.05;bn(i,a,t,l-c/2,e,n,c,s,r,.1);const d=[t-n/2+.12,t+n/2-.12],f=[e-s/2+.12,e+s/2-.12];d.forEach(g=>f.forEach(_=>{const m=new St(new Ve(u,u,h,6),ee.metal());m.position.set(g,h/2,_),i.add(m)}))}function fn(i,t,e,n=0,s,r){const o=r??ee.chair(),a=new jn;a.position.set(t,0,e),a.rotation.y=n,i.add(a);const l=new St(new jt(.5,.07,.5),o);l.position.y=.46,a.add(l);const c=new St(new jt(.5,.52,.06),o);c.position.set(0,.75,-.22),a.add(c);const h=ee.metal();[[-.2,-.2],[.2,-.2],[-.2,.2],[.2,.2]].forEach(([u,d])=>{const f=new St(new Ve(.03,.03,.46,5),h);f.position.set(u,.23,d),a.add(f)}),s&&s.push({minX:t-.35,maxX:t+.35,minZ:e-.35,maxZ:e+.35})}function Cn(i,t,e,n,s=0){const r=new jn;r.position.set(t,e,n),r.rotation.y=s,i.add(r);const o=new St(new jt(.54,.32,.04),ee.screen());o.position.y=.22,r.add(o);const a=new St(new Ve(.015,.015,.18,5),ee.metal());a.position.y=.07,r.add(a);const l=new St(new jt(.22,.02,.14),ee.metal());l.position.y=0,r.add(l)}function Un(i,t,e){const n=new St(new Ve(.15,.1,.3,7),ee.amber());n.position.set(t,.15,e),i.add(n);const s=new St(new Re(.3,8,6),ee.green());s.position.set(t,.55,e),i.add(s)}function b_(i,t){gi(i,-11,-14,4.5,2,t),fn(i,-11-2.6,-14-.5,0,t),fn(i,-11-2.6,-14+.5,0,t),fn(i,-11+2.6,-14-.5,Math.PI,t),fn(i,-11+2.6,-14+.5,Math.PI,t),fn(i,-11,-14-1.2,Math.PI/2,t,ee.pink()),fn(i,-11,-14+1.2,-Math.PI/2,t,ee.pink());const s=new St(new jt(5,2.4,.06),new Ft({color:16448248,roughness:.5}));s.position.set(-11,1.8,A.minZ+.1),i.add(s),bn(i,ee.white(),A.minX+.5,1,-18,.5,2,3,t),gi(i,A.minX+1.2,-12,2,.8,t),Cn(i,A.minX+1,.76,-14+1.8,Math.PI/2),Cn(i,A.minX+1,.76,-14+2.2,Math.PI/2),fn(i,A.minX+2,-12,Math.PI/2,t,ee.pink()),Un(i,A.minX+.5,A.midZ+.6),Un(i,-3,A.minZ+.6)}function T_(i,t){[-20,-16,-12,-8].forEach(r=>{gi(i,A.maxX-1.4,r,1.8,.7,t,ee.white()),Cn(i,A.maxX-1.1,.76,r-.18,-Math.PI/2),Cn(i,A.maxX-1.1,.76,r+.18,-Math.PI/2),fn(i,A.maxX-2.5,r,-Math.PI/2,t,ee.blue())}),bn(i,ee.dark(),7,1.1,A.minZ+.6,.8,2.2,.6,t),bn(i,ee.dark(),8,1.1,A.minZ+.6,.8,2.2,.6,t),bn(i,ee.dark(),9,1.1,A.minZ+.6,.8,2.2,.6,t),[-4,-3,-2].forEach(r=>{const o=new St(new jt(.6,.02,.4),new Ft({color:65348,emissive:65348,emissiveIntensity:3}));o.position.set(11+r,1.6,A.minZ+.32),i.add(o)}),gi(i,11,-13,3,.75,t),gi(i,11,-15,3,.75,t),Cn(i,11-.8,.76,-13),Cn(i,11,.76,-13),Cn(i,11+.8,.76,-13),Cn(i,11-.8,.76,-15,Math.PI),Cn(i,11,.76,-15,Math.PI),Cn(i,11+.8,.76,-15,Math.PI),[-1,0,1].forEach(r=>{fn(i,11+r,-14+1.8,Math.PI,t,ee.blue()),fn(i,11+r,-14-1.8,0,t,ee.blue())}),Un(i,A.maxX-.5,A.midZ+.6),Un(i,15,A.minZ+.6)}function A_(i,t){const s=new St(new Ve(1.4,1.4,.06,16),ee.oak());s.position.set(-11,.74,0),i.add(s),t.push({minX:-11-1.6,maxX:-11+1.6,minZ:0-1.6,maxZ:0+1.6});for(let o=0;o<4;o++){const a=o*Math.PI/2+Math.PI/4,l=new St(new Ve(.04,.04,.74,6),ee.metal());l.position.set(-11+Math.cos(a)*1.1,.37,0+Math.sin(a)*1.1),i.add(l)}for(let o=0;o<6;o++){const a=o/6*Math.PI*2,l=2;fn(i,-11+Math.cos(a)*l,0+Math.sin(a)*l,a+Math.PI,null,ee.amber())}const r=new St(new jt(3.5,2,.08),ee.screen());r.position.set(-11,2.1,A.minX+.1),r.rotation.y=Math.PI/2,i.add(r),bn(i,ee.white(),A.minX+.5,.45,0+2.5,.5,.9,2,t),Un(i,A.minX+.5,A.lobbyZ-.6),Un(i,-3,A.midZ+.5)}function R_(i,t){bn(i,ee.sofa(),11-2.5,.44,0+1.5,3.2,.88,1,t,.1),bn(i,ee.sofa(),11-3.5,.44,0,1,.88,2.2,t,.1),gi(i,11-1.8,0-.2,1.2,.7,t);const s=ee.bean();for(let l=0;l<3;l++){const c=14+l*1.4,h=new St(new Re(.42,10,8),s);h.scale.y=.65,h.position.set(c,.28,0),i.add(h),t.push({minX:c-.55,maxX:c+.55,minZ:0-.55,maxZ:0+.55})}const r=new Ft({color:2228292,roughness:.6,metalness:.3});bn(i,r,A.maxX-1,1.1,0+2.5,.9,2.2,.7,t);const o=new St(new jt(.55,.44,.04),new Ft({color:2245887,emissive:1127406,emissiveIntensity:1.5}));o.position.set(A.maxX-.72,1.6,0+2.15),i.add(o),gi(i,11+1.5,0-2.5,1.6,.8,t,ee.dark());const a=new St(new jt(4,2.2,.08),ee.screen());a.position.set(9,2.3,A.maxX-.1),a.rotation.y=-Math.PI/2,i.add(a),Un(i,A.maxX-.5,A.lobbyZ-.6),Un(i,7,A.midZ+.5)}function C_(i,t){const e=(A.lobbyZ+A.maxZ)/2;bn(i,ee.white(),-8,.9,e-1,3,1.8,.7,t),[6,8,10].forEach(l=>{fn(i,l,e+.5,Math.PI,t,ee.amber())}),gi(i,8,e+1.8,1.5,.6,t);const n=new St(new el(2.2,32),new Ft({color:2245802,roughness:.4}));n.rotation.x=-Math.PI/2,n.position.set(0,.07,e),i.add(n);const s=document.createElement("canvas");s.width=512,s.height=128;const r=s.getContext("2d");r.fillStyle="#3366ff",r.font="bold 72px Inter, sans-serif",r.textAlign="center",r.fillText("SPACEWORK",256,88);const o=new St(new Qn(4,1),new Ft({map:new Ao(s),roughness:.4,transparent:!0}));o.rotation.x=-Math.PI/2,o.position.set(0,.08,e),i.add(o),Un(i,-5,A.maxZ-1.2),Un(i,5,A.maxZ-1.2),bn(i,ee.metal(),0,1,A.lobbyZ+1.5,.4,2,.4,t);const a=new St(new jt(.38,.28,.04),ee.screen());a.position.set(0,1.9,A.lobbyZ+1.28),i.add(a)}const P_="#0f1117",L_="rgba(34,58,28,0.95)",I_="rgba(230,225,215,0.12)",D_=[{name:"LOBBY",x1:A.minX,x2:A.maxX,z1:A.lobbyZ,z2:A.maxZ,fill:"rgba(180,175,210,0.18)",border:"rgba(180,175,220,0.55)",label:"#ccc"},{name:"OPS",x1:A.minX,x2:A.centerX,z1:A.midZ,z2:A.lobbyZ,fill:"rgba(200,115,20,0.20)",border:"rgba(220,130,30,0.60)",label:"#fa9"},{name:"FUN",x1:A.centerX,x2:A.maxX,z1:A.midZ,z2:A.lobbyZ,fill:"rgba(20,170,90,0.20)",border:"rgba(30,200,100,0.55)",label:"#6fb"},{name:"DESIGN",x1:A.minX,x2:A.centerX,z1:A.minZ,z2:A.midZ,fill:"rgba(190,45,95,0.20)",border:"rgba(220,60,110,0.55)",label:"#f9b"},{name:"ENGINEERING",x1:A.centerX,x2:A.maxX,z1:A.minZ,z2:A.midZ,fill:"rgba(25,90,200,0.20)",border:"rgba(40,120,230,0.55)",label:"#8bf"}],dn=A.doorHalfW,Da=A.mainDoorHalfW,Ts=A.leftDoorX,As=A.rightDoorX,N_=[[A.minX,A.maxZ,-Da,A.maxZ],[Da,A.maxZ,A.maxX,A.maxZ],[A.minX,A.minZ,A.maxX,A.minZ],[A.minX,A.minZ,A.minX,A.maxZ],[A.maxX,A.minZ,A.maxX,A.maxZ],[A.minX,A.lobbyZ,Ts-dn,A.lobbyZ],[Ts+dn,A.lobbyZ,As-dn,A.lobbyZ],[As+dn,A.lobbyZ,A.maxX,A.lobbyZ],[A.minX,A.midZ,Ts-dn,A.midZ],[Ts+dn,A.midZ,As-dn,A.midZ],[As+dn,A.midZ,A.maxX,A.midZ],[A.centerX,A.minZ,A.centerX,A.lobbyZ]];class U_{constructor(t){this._nav=t,this._peers=new Map;const e=document.createElement("canvas");e.id="flat-map-canvas",Object.assign(e.style,{position:"fixed",inset:"0",width:"100%",height:"100%",zIndex:"6",display:"none",cursor:"crosshair"}),document.body.appendChild(e),this._cvs=e,this._ctx=e.getContext("2d"),this._zoom=14,this._panX=0,this._panZ=-6,this._dragging=!1,this._dragMoved=!1,this._lx=0,this._ly=0,this._ping=null,this._setupMouse(),this._setupTouch(),this._resize(),window.addEventListener("resize",()=>this._resize())}show(){this._cvs.style.display="block"}hide(){this._cvs.style.display="none"}setPeer(t,e,n,s){this._peers.set(t,{x:e,z:n,name:s})}removePeer(t){this._peers.delete(t)}setTalking(t){this._talking=t}update(t){const e=this._cvs.width,n=this._cvs.height,s=this._ctx;s.clearRect(0,0,e,n),this._drawBg(s,e,n),this._drawGrid(s,e,n),this._drawBuilding(s),this._drawRooms(s),this._drawWalls(s),this._drawDoors(s),this._drawPeers(s),this._drawPlayer(s,t),this._drawNavPing(s),this._drawHints(s,e,n)}_fire(t,e){const[n,s]=this._c2w(t,e);this._nav({x:n,z:s}),this._ping={cx:t,cy:e,born:performance.now()}}centreOn(t,e){this._panX=t,this._panZ=e}_w2c(t,e){const n=this._cvs.width/2+(t-this._panX)*this._zoom,s=this._cvs.height/2+(e-this._panZ)*this._zoom;return[n,s]}_c2w(t,e){const n=(t-this._cvs.width/2)/this._zoom+this._panX,s=(e-this._cvs.height/2)/this._zoom+this._panZ;return[n,s]}_wr(t){return t*this._zoom}_setupMouse(){const t=this._cvs;t.addEventListener("wheel",e=>{e.preventDefault();const n=t.getBoundingClientRect(),s=e.clientX-n.left,r=e.clientY-n.top,[o,a]=this._c2w(s,r),l=e.deltaMode===0?e.deltaY:e.deltaY*24,c=Math.pow(.997,l);this._zoom=Math.max(6,Math.min(55,this._zoom*c));const[h,u]=this._c2w(s,r);this._panX+=o-h,this._panZ+=a-u},{passive:!1}),t.addEventListener("mousedown",e=>{this._dragging=!0,this._dragMoved=!1,this._lx=e.clientX,this._ly=e.clientY,t.style.cursor="grabbing"}),document.addEventListener("mousemove",e=>{if(!this._dragging)return;const n=e.clientX-this._lx,s=e.clientY-this._ly;this._panX-=n/this._zoom,this._panZ-=s/this._zoom,this._lx=e.clientX,this._ly=e.clientY,(Math.abs(n)>4||Math.abs(s)>4)&&(this._dragMoved=!0)}),document.addEventListener("mouseup",e=>{if(!this._dragging||(this._dragging=!1,t.style.cursor="crosshair",this._dragMoved))return;const n=t.getBoundingClientRect();this._fire(e.clientX-n.left,e.clientY-n.top)})}_setupTouch(){const t=this._cvs;let e=0,n=0,s=!1,r=0;t.addEventListener("touchstart",o=>{if(o.preventDefault(),s=!1,o.touches.length===1)e=o.touches[0].clientX,n=o.touches[0].clientY,this._lx=e,this._ly=n;else if(o.touches.length===2){const a=o.touches[1].clientX-o.touches[0].clientX,l=o.touches[1].clientY-o.touches[0].clientY;r=Math.sqrt(a*a+l*l)}},{passive:!1}),t.addEventListener("touchmove",o=>{if(o.preventDefault(),o.touches.length===1){const a=o.touches[0].clientX-this._lx,l=o.touches[0].clientY-this._ly;this._panX-=a/this._zoom,this._panZ-=l/this._zoom,this._lx=o.touches[0].clientX,this._ly=o.touches[0].clientY,(Math.abs(a)>4||Math.abs(l)>4)&&(s=!0)}else if(o.touches.length===2){const a=o.touches[1].clientX-o.touches[0].clientX,l=o.touches[1].clientY-o.touches[0].clientY,c=Math.sqrt(a*a+l*l),h=c/(r||c),u=(o.touches[0].clientX+o.touches[1].clientX)/2,d=(o.touches[0].clientY+o.touches[1].clientY)/2,[f,g]=this._c2w(u,d);this._zoom=Math.max(6,Math.min(55,this._zoom*h));const[_,m]=this._c2w(u,d);this._panX+=f-_,this._panZ+=g-m,r=c,s=!0}},{passive:!1}),t.addEventListener("touchend",o=>{if(o.touches.length===0&&!s&&o.changedTouches.length===1){const a=t.getBoundingClientRect();this._fire(o.changedTouches[0].clientX-a.left,o.changedTouches[0].clientY-a.top)}},{passive:!1})}_resize(){this._cvs.width=window.innerWidth,this._cvs.height=window.innerHeight}_drawBg(t,e,n){t.fillStyle=P_,t.fillRect(0,0,e,n)}_drawGrid(t,e,n){const s=this._zoom*4;if(s<10)return;t.strokeStyle="rgba(255,255,255,0.04)",t.lineWidth=1;const r=(e/2-this._panX*this._zoom)%s;for(let a=r;a<e;a+=s)t.beginPath(),t.moveTo(a,0),t.lineTo(a,n),t.stroke();const o=(n/2-this._panZ*this._zoom)%s;for(let a=o;a<n;a+=s)t.beginPath(),t.moveTo(0,a),t.lineTo(e,a),t.stroke()}_drawBuilding(t){const[e,n]=this._w2c(A.minX-20,A.minZ-20),[s,r]=this._w2c(A.maxX+20,A.maxZ+20);t.fillStyle=L_,t.fillRect(Math.min(e,s),Math.min(n,r),Math.abs(s-e),Math.abs(r-n));const[o,a]=this._w2c(A.minX,A.maxZ),[l,c]=this._w2c(A.maxX,A.minZ);t.fillStyle=I_,t.fillRect(Math.min(o,l),Math.min(a,c),Math.abs(l-o),Math.abs(c-a))}_drawRooms(t){D_.forEach(e=>{const[n,s]=this._w2c(e.x1,e.z2),[r,o]=this._w2c(e.x2,e.z1),a=Math.min(n,r),l=Math.min(s,o),c=Math.abs(r-n),h=Math.abs(o-s);t.fillStyle=e.fill,t.fillRect(a,l,c,h),t.strokeStyle=e.border,t.lineWidth=1.5,t.strokeRect(a+1,l+1,c-2,h-2),c>50&&h>30&&(t.fillStyle=e.label,t.font=`bold ${Math.max(9,Math.min(13,c*.11))}px Inter, monospace`,t.textAlign="center",t.textBaseline="middle",t.shadowColor="rgba(0,0,0,0.8)",t.shadowBlur=4,t.fillText(e.name,a+c/2,l+h/2),t.shadowBlur=0)})}_drawWalls(t){t.strokeStyle="#4a4a6a",t.lineWidth=Math.max(2,this._wr(A.wallT)*.8),t.lineCap="round",N_.forEach(([e,n,s,r])=>{const[o,a]=this._w2c(e,n),[l,c]=this._w2c(s,r);t.beginPath(),t.moveTo(o,a),t.lineTo(l,c),t.stroke()})}_drawDoors(t){const e=[{x:0,z:A.maxZ,w:Da*2},{x:Ts,z:A.lobbyZ,w:dn*2},{x:As,z:A.lobbyZ,w:dn*2},{x:Ts,z:A.midZ,w:dn*2},{x:As,z:A.midZ,w:dn*2}];t.strokeStyle="rgba(255,220,100,0.60)",t.lineWidth=Math.max(3,this._wr(A.wallT)*.9),t.lineCap="square",e.forEach(n=>{const[s,r]=this._w2c(n.x,n.z),o=this._wr(n.w/2);Math.abs(n.z-A.maxZ)<.1||Math.abs(n.z-A.lobbyZ)<.1||Math.abs(n.z-A.midZ)<.1?(t.beginPath(),t.moveTo(s-o,r),t.lineTo(s+o,r),t.stroke()):(t.beginPath(),t.moveTo(s,r-o),t.lineTo(s,r+o),t.stroke())})}_drawPeers(t){const e=performance.now()/1e3;this._peers.forEach(({x:n,z:s,name:r},o)=>{var u;const[a,l]=this._w2c(n,s),c=Math.max(5,this._wr(.4)),h=(u=this._talking)==null?void 0:u.has(o);if(h){const d=.5+Math.sin(e*6)*.5,f=c+4+d*4;t.beginPath(),t.arc(a,l,f,0,Math.PI*2),t.strokeStyle=`rgba(0,255,136,${.6+d*.4})`,t.lineWidth=2.5,t.shadowColor="#00ff88",t.shadowBlur=10,t.stroke(),t.shadowBlur=0}t.beginPath(),t.arc(a,l,c,0,Math.PI*2),t.fillStyle=h?"rgba(0,255,120,0.9)":"rgba(255,120,150,0.85)",t.fill(),t.strokeStyle=h?"#00ff88":"#ff88aa",t.lineWidth=1.5,t.stroke(),c>5&&(t.fillStyle="#fff",t.font=`bold ${Math.max(8,c*1.1)}px Inter,monospace`,t.textAlign="center",t.textBaseline="bottom",t.shadowColor="#000",t.shadowBlur=3,t.fillText(r,a,l-c-2),t.shadowBlur=0)})}_drawPlayer(t,e){var h;const[n,s]=this._w2c(e.x,e.z),r=Math.max(6,this._wr(.45)),o=performance.now()/600,a=r+Math.sin(o)*r*.35,l=(h=this._talking)==null?void 0:h.has("self"),c=performance.now()/1e3;if(l){const u=.5+Math.sin(c*6)*.5,d=r+5+u*5;t.beginPath(),t.arc(n,s,d,0,Math.PI*2),t.strokeStyle=`rgba(0,255,136,${.7+u*.3})`,t.lineWidth=3,t.shadowColor="#00ff88",t.shadowBlur=14,t.stroke(),t.shadowBlur=0}else t.beginPath(),t.arc(n,s,a,0,Math.PI*2),t.strokeStyle="rgba(0,255,255,0.25)",t.lineWidth=2,t.stroke();t.shadowColor=l?"#00ff88":"#00ffff",t.shadowBlur=10,t.beginPath(),t.arc(n,s,r,0,Math.PI*2),t.fillStyle=l?"#00ff88":"#00e5ff",t.fill(),t.shadowBlur=0,t.fillStyle="#fff",t.font=`bold ${Math.max(9,r*1.2)}px Inter,monospace`,t.textAlign="center",t.textBaseline="bottom",t.shadowColor="#000",t.shadowBlur=3,t.fillText("YOU",n,s-r-3),t.shadowBlur=0}_drawNavPing(t){if(!this._ping)return;const e=performance.now()-this._ping.born,n=600;if(e>n){this._ping=null;return}const s=e/n,r=1-s,o=8+s*18,{cx:a,cy:l}=this._ping;t.globalAlpha=r,t.strokeStyle="#ffffff",t.lineWidth=2;const c=6;t.beginPath(),t.moveTo(a-c,l),t.lineTo(a+c,l),t.moveTo(a,l-c),t.lineTo(a,l+c),t.stroke(),t.strokeStyle="#00ffff",t.lineWidth=1.5,t.beginPath(),t.arc(a,l,o,0,Math.PI*2),t.stroke(),t.globalAlpha=1}_drawHints(t,e,n){t.fillStyle="rgba(255,255,255,0.22)",t.font="11px Inter, monospace",t.textAlign="center",t.textBaseline="bottom",t.fillText("Click to walk  ·  Scroll to zoom  ·  Drag to pan  ·  WASD to move",e/2,n-8)}}const ro=i=>"#"+i.toString(16).padStart(6,"0");class O_{constructor(t){this._onSelect=t,this._selected=parseInt(localStorage.getItem("spaceAvatarId")??"0",10),this._el=this._build(),document.body.appendChild(this._el)}show(){this._el.classList.remove("ap-hidden"),this._sync()}hide(){this._el.classList.add("ap-hidden")}getSelected(){return this._selected}_build(){const t=document.createElement("div");return t.id="avatar-picker",t.className="ap-hidden",t.innerHTML=`
      <div class="ap-panel">
        <div class="ap-head">
          <span class="ap-title">Choose Your Avatar</span>
          <button class="ap-close" aria-label="Close">✕</button>
        </div>
        <div class="ap-grid">
          ${Zi.map(e=>this._card(e)).join("")}
        </div>
        <p class="ap-hint">Your selection is saved automatically</p>
      </div>
    `,t.querySelector(".ap-close").addEventListener("click",()=>this.hide()),t.addEventListener("click",e=>{e.target===t&&this.hide()}),t.querySelectorAll(".ap-card").forEach(e=>{e.addEventListener("click",()=>{const n=parseInt(e.dataset.id,10);this._selected=n,localStorage.setItem("spaceAvatarId",String(n)),this._sync(),this._onSelect(n)})}),t}_sync(){this._el.querySelectorAll(".ap-card").forEach(t=>t.classList.toggle("ap-active",parseInt(t.dataset.id,10)===this._selected))}_card(t){const e=ro(t.skin),n=ro(t.hair),s=ro(t.outfit),r=ro(t.accent);return`
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
    `}}const F_=[{name:"OUTSIDE",color:"#88cc66",mapColor:"rgba(70,120,50,0.35)",border:"#66aa44",desc:"Outside the building"},{name:"LOBBY",color:"#ffffff",mapColor:"rgba(200,200,230,0.40)",border:"#aaaacc",desc:"Reception & Entrance"},{name:"OPS",color:"#ffaa44",mapColor:"rgba(200,120,20,0.40)",border:"#ffaa44",desc:"Operations & Support"},{name:"FUN",color:"#44ffaa",mapColor:"rgba(20,180,100,0.40)",border:"#44ffaa",desc:"Chill & Social"},{name:"DESIGN",color:"#ff6ba0",mapColor:"rgba(200,50,100,0.40)",border:"#ff6ba0",desc:"UI/UX & 3D Design"},{name:"ENGINEERING",color:"#44aaff",mapColor:"rgba(30,100,200,0.40)",border:"#44aaff",desc:"Development & Code"}],oe={minX:-26,maxX:26,minZ:-27,maxZ:28,W:180,H:200};let or,yn;function B_(i,t,e,n,s){const r=window._spaceUsername||"You",o=parseInt(localStorage.getItem("spaceAvatarId")??"0",10),a=Wh(r,o);a.position.set(0,0,22),i.add(a);const l=new O_(b=>{Yh(a,r,b),s==null||s(b)}),c=document.getElementById("avatar-btn");c&&c.addEventListener("click",()=>l.show());const{colliders:h}=w_(i);p_(h);const u=S_(a,t,e.domElement),d=new Vh;let f="",g=u.getMode();const _=new U_(b=>u.navigate(b)),m=[],p=[];i.traverse(b=>{b.userData.mapHide&&m.push(b),b.userData.mapShow&&p.push(b)}),m.forEach(b=>{b.visible=!1}),p.forEach(b=>{b.visible=!1}),_.centreOn(a.position.x,a.position.z),_.show();const S=document.getElementById("minimap");S&&(S.style.display="none");function v(b){m.forEach(E=>{E.visible=b!=="overview"&&b!=="flat"}),p.forEach(E=>{E.visible=b==="overview"}),a.visible=b!=="first",b==="flat"?(_.centreOn(a.position.x,a.position.z),_.show()):_.hide();const O=document.getElementById("minimap");O&&(O.style.display=b==="flat"?"none":"")}z_(u);function w(){const b=xo(a.position);b!==f&&(f=b,n==null||n(f))}function N(){const b=document.getElementById("mode-badge");if(!b)return;const O=u.getMode(),E={flat:"🎮 FLAT MAP",overview:"🗺 3D MAP",third:"👤 3RD PERSON",first:"👁 1ST PERSON"};b.textContent=E[O]??O;const y=O==="flat"||O==="overview";b.style.background=y?"rgba(255,160,0,0.2)":"rgba(0,100,255,0.2)",b.style.borderColor=y?"rgba(255,160,0,0.4)":"rgba(0,150,255,0.4)",b.style.color=y?"#ffaa00":"#4af"}function T(){requestAnimationFrame(T);const b=d.getDelta(),O=u.update(b);$h(a,O,b),w(),N();const E=u.getMode();E!==g&&(g=E,v(E)),G_(a.position,E),E==="flat"&&_.update(a.position)}return T(),{getPosition:()=>a.position.clone(),getRotation:()=>a.rotation.clone(),navigate:b=>u.navigate(b),isDragMoved:()=>u.isDragMoved(),getMode:()=>u.getMode(),setView:b=>{u.setMode(b),v(b)},setStatus:b=>Xh(a,b),setSelfTalking:(b,O)=>Zh(a,b,O),setTalkingPeers:b=>_.setTalking(b),peerJoin:(b,O)=>_.setPeer(b,0,0,O),peerMove:(b,O,E,y)=>_.setPeer(b,O,E,y),peerLeave:b=>_.removePeer(b)}}function z_(i,t){const e=document.getElementById("minimap-canvas");e&&(e.style.cursor="crosshair",e.addEventListener("click",n=>{const s=e.getBoundingClientRect(),r=(n.clientX-s.left)/s.width*oe.W,o=(n.clientY-s.top)/s.height*oe.H,a=oe.minX+r/oe.W*(oe.maxX-oe.minX),l=oe.maxZ-o/oe.H*(oe.maxZ-oe.minZ);i.navigate({x:a,z:l}),k_(r,o)}))}function k_(i,t){yn&&(yn.strokeStyle="#fff",yn.lineWidth=1.5,yn.globalAlpha=.9,yn.beginPath(),yn.arc(i,t,7,0,Math.PI*2),yn.stroke(),yn.globalAlpha=1)}function H_(){or=document.getElementById("minimap-canvas"),or&&(or.width=oe.W,or.height=oe.H,yn=or.getContext("2d"))}function Ms(i,t){const e=(i-oe.minX)/(oe.maxX-oe.minX)*oe.W,n=(oe.maxZ-t)/(oe.maxZ-oe.minZ)*oe.H;return[e,n]}function G_(i,t){if(!yn){H_();return}const e=yn;e.clearRect(0,0,oe.W,oe.H),e.fillStyle="rgba(50,90,40,0.5)",e.fillRect(0,0,oe.W,oe.H);const[n,s]=Ms(A.minX,A.maxZ),[r,o]=Ms(A.maxX,A.minZ);e.fillStyle="rgba(240,235,225,0.25)",e.fillRect(n,s,r-n,o-s),[{name:"LOBBY",x1:A.minX,x2:A.maxX,z1:A.lobbyZ,z2:A.maxZ},{name:"OPS",x1:A.minX,x2:A.centerX,z1:A.midZ,z2:A.lobbyZ},{name:"FUN",x1:A.centerX,x2:A.maxX,z1:A.midZ,z2:A.lobbyZ},{name:"DESIGN",x1:A.minX,x2:A.centerX,z1:A.minZ,z2:A.midZ},{name:"ENGINEERING",x1:A.centerX,x2:A.maxX,z1:A.minZ,z2:A.midZ}].forEach(u=>{const d=F_.find(v=>v.name===u.name);if(!d)return;const[f,g]=Ms(u.x1,u.z2),[_,m]=Ms(u.x2,u.z1);e.fillStyle=d.mapColor,e.fillRect(f,g,_-f,m-g),e.strokeStyle=d.border+"88",e.lineWidth=1,e.strokeRect(f+.5,g+.5,_-f-1,m-g-1),e.fillStyle=d.border,e.font="bold 7px Inter, monospace",e.textAlign="center";const p=(f+_)/2,S=g+10;e.fillText(u.name,p,S)}),[{x:0,z:A.maxZ,label:"🚪"},{x:-11,z:A.lobbyZ,label:"▶"},{x:11,z:A.lobbyZ,label:"▶"},{x:-11,z:A.midZ,label:"▶"},{x:11,z:A.midZ,label:"▶"}].forEach(({x:u,z:d,label:f})=>{const[g,_]=Ms(u,d);e.fillStyle="rgba(255,255,255,0.7)",e.font="8px sans-serif",e.textAlign="center",e.fillText(f,g,_+3)}),e.strokeStyle="rgba(220,210,190,0.5)",e.lineWidth=1.5,e.strokeRect(n,s,r-n,o-s),t==="overview"&&(e.strokeStyle="rgba(255,160,0,0.7)",e.lineWidth=2,e.strokeRect(2,2,oe.W-4,oe.H-4),e.fillStyle="rgba(255,160,0,0.06)",e.fillRect(2,2,oe.W-4,oe.H-4));const[c,h]=Ms(i.x,i.z);e.shadowColor="#00ffff",e.shadowBlur=8,e.fillStyle="#00ffff",e.beginPath(),e.arc(c,h,5,0,Math.PI*2),e.fill(),e.shadowBlur=0,e.fillStyle="#fff",e.font="bold 7px Inter, monospace",e.textAlign="center",e.shadowColor="#0ff",e.shadowBlur=4,e.fillText("YOU",c,h-8),e.shadowBlur=0,e.fillStyle="rgba(255,255,255,0.28)",e.font="7px Inter, monospace",e.textAlign="center",e.fillText("click map to move",oe.W/2,oe.H-4)}function V_(){const i=document.getElementById("screen-overlay"),t=document.getElementById("screen-iframe"),e=document.getElementById("screen-overlay-close"),n=document.getElementById("screen-overlay-title"),s=document.getElementById("screen-overlay-tool"),r=document.getElementById("screen-overlay-zone");if(!i)return console.warn("[screenOverlay] #screen-overlay not found in DOM"),{openScreen:()=>{},closeScreen:()=>{},isOpen:()=>!1};e.addEventListener("click",a),i.addEventListener("click",c=>{c.target===i&&a()}),document.addEventListener("keydown",c=>{c.code==="Escape"&&i.classList.contains("visible")&&(a(),c.stopPropagation())},!0);function o(c){var h;if(n.textContent=c.label,s.textContent=c.tool,r){r.textContent=c.zone;const u={BRIDGE:"#4466ff",LAB:"#00ffcc",LOUNGE:"#aa55ff"};r.style.color=u[c.zone]||"#fff"}t.src=c.url,i.classList.add("visible"),(h=document.exitPointerLock)==null||h.call(document)}function a(){i.classList.remove("visible"),setTimeout(()=>{t.src=""},200)}function l(){return i.classList.contains("visible")}return{openScreen:o,closeScreen:a,isOpen:l}}function qc(...i){const t=i.join("\0");let e=5381;for(let n=0;n<t.length;n++)e=(Math.imul(33,e)^t.charCodeAt(n))>>>0;return e.toString(36).padStart(7,"0")}class yo{constructor(t,e=0){this.id=qc(t,String(e)),this.seed=t,this.epoch=e,this.resonance=1}tick(){return this.epoch++,this}harmonisesWith(t,e=.51){return this.resonance>=e&&t.resonance>=e}static merge(t,e){const[n,s]=t.id<e.id?[t,e]:[e,t];return new yo(qc(n.id,s.id),Math.max(n.epoch,s.epoch))}toString(){return`freq:${this.id}@${this.epoch}`}}class ol{constructor(t={}){this._v=new Map(Object.entries(t))}tick(t){return this._v.set(t,(this._v.get(t)||0)+1),this}get(t){return this._v.get(t)||0}merge(t){for(const[e,n]of t._v)this._v.set(e,Math.max(this.get(e),n));return this}clone(){return new ol(Object.fromEntries(this._v))}compare(t){const e=new Set([...this._v.keys(),...t._v.keys()]);let n=!1,s=!1;for(const r of e){const o=this.get(r),a=t.get(r);o<a&&(n=!0),o>a&&(s=!0)}return!n&&!s?"equal":n&&!s?"before":!n&&s?"after":"concurrent"}happensBefore(t){return this.compare(t)==="before"}toJSON(){return Object.fromEntries(this._v)}}class al{constructor(){this._entries=new Map}set(t,e,n,s){const r=this._entries.get(t);if(!r)return this._entries.set(t,{value:e,clock:n.clone(),nodeId:s}),!0;const o=n.compare(r.clock);return o==="after"||o==="concurrent"&&s>r.nodeId?(this._entries.set(t,{value:e,clock:n.clone(),nodeId:s}),!0):!1}get(t){var e;return(e=this._entries.get(t))==null?void 0:e.value}has(t){return this._entries.has(t)}keys(){return this._entries.keys()}entries(){return[...this._entries.entries()].map(([t,e])=>[t,e.value])}merge(t){for(const[e,{value:n,clock:s,nodeId:r}]of t._entries)this.set(e,n,s,r);return this}clone(){const t=new al;for(const[e,n]of this._entries)t._entries.set(e,{...n,clock:n.clock.clone()});return t}size(){return this._entries.size}}class $c{constructor(t){this.frequency=t,this.state=new al,this.clock=new ol,this.nodes=new Set,this.createdAt=Date.now()}enter(t){this.nodes.add(t),this.clock.tick(t)}exit(t){this.nodes.delete(t)}update(t,e,n){return this.clock.tick(t),this.state.set(e,n,this.clock.clone(),t)}get(t){return this.state.get(t)}merge(t){this.state.merge(t.state),this.clock.merge(t.clock);for(const e of t.nodes)this.nodes.add(e);return this}consistency(t){return this.clock.compare(t.clock)}snapshot(){return{frequency:this.frequency.toString(),nodeCount:this.nodes.size,stateSize:this.state.size(),epoch:this.frequency.epoch,clock:this.clock.toJSON()}}}function oo(...i){const t=i.join("|");let e=5381;for(let n=0;n<t.length;n++)e=(Math.imul(33,e)^t.charCodeAt(n))>>>0;return e.toString(36)}var be,qn,yi,Na,Ua;class W_{constructor(t,e=""){It(this,yi);It(this,be,new Map);It(this,qn);Ht(this,qn,t),D(this,be).set(t,{id:t,publicKey:e,vouchedBy:null,chainDepth:0,chainHash:oo(t),votes:new Set([t]),joinedAt:Date.now()})}get rootId(){return D(this,qn)}vouch(t,e,n=""){if(!this.isVerified(t))throw new Error(`Voucher "${t}" is not a verified member`);if(D(this,be).has(e))throw new Error(`"${e}" is already in the network`);const s=D(this,be).get(t);return D(this,be).set(e,{id:e,publicKey:n,vouchedBy:t,chainDepth:s.chainDepth+1,chainHash:oo(e,s.chainHash),votes:new Set([t]),joinedAt:Date.now()}),this.getMember(e)}vote(t,e){if(!this.isVerified(t))throw new Error(`Voter "${t}" is not verified`);if(!D(this,be).has(e))throw new Error(`"${e}" not found`);D(this,be).get(e).votes.add(t)}revokeVote(t,e){var n;(n=D(this,be).get(e))==null||n.votes.delete(t)}remove(t){const e=[];return Ot(this,yi,Na).call(this,t,e),e}isVerified(t){if(t===D(this,qn))return!0;const e=new Set;let n=t;for(;n!==D(this,qn);){if(e.has(n))return!1;e.add(n);const s=D(this,be).get(n);if(!(s!=null&&s.vouchedBy))return!1;n=s.vouchedBy}return!0}isActive(t){if(t===D(this,qn))return!0;if(!this.isVerified(t))return!1;const e=D(this,be).get(t),n=Ot(this,yi,Ua).call(this),s=Math.floor(n.size/2)+1;return[...e.votes].filter(o=>n.has(o)).length>=s}trustScore(t){if(!this.isVerified(t))return 0;const e=D(this,be).get(t),n=Ot(this,yi,Ua).call(this);return n.size===0?0:[...e.votes].filter(r=>n.has(r)).length/n.size}depth(t){var e;return((e=D(this,be).get(t))==null?void 0:e.chainDepth)??-1}getMember(t){return D(this,be).get(t)??null}getAll(){return[...D(this,be).values()]}size(){return D(this,be).size}validateIntegrity(){for(const[t,e]of D(this,be)){if(t===D(this,qn)){if(e.chainHash!==oo(t))return!1;continue}const n=D(this,be).get(e.vouchedBy);if(!n)return!1;const s=oo(t,n.chainHash);if(e.chainHash!==s)return!1}return!0}}be=new WeakMap,qn=new WeakMap,yi=new WeakSet,Na=function(t,e){if(D(this,be).has(t)){e.push(t),D(this,be).delete(t);for(const[n,s]of D(this,be))s.vouchedBy===t&&Ot(this,yi,Na).call(this,n,e)}},Ua=function(){const t=new Set;for(const e of D(this,be).keys())this.isVerified(e)&&t.add(e);return t};class X_{constructor(t,e=""){this.id=t,this.publicKey=e,this.realities=new Map,this.neighbors=new Set,this.position={x:0,y:0,z:0},this.meta={}}tune(t){return t.enter(this.id),this.realities.set(t.frequency.id,t),this}detune(t){const e=this.realities.get(t);return e&&(e.exit(this.id),this.realities.delete(t)),this}bridge(t,e){return this.tune(t),this.tune(e),this}isIn(t){return this.realities.has(t)}moveTo(t,e,n,s){this.position={x:t,y:e,z:n};const r=this.realities.get(s);r&&r.update(this.id,`pos:${this.id}`,{x:t,y:e,z:n})}connect(t){this.neighbors.add(t)}disconnect(t){this.neighbors.delete(t)}}var dr,Oa;class Z_{constructor(){It(this,dr);this.nodes=new Map,this.realities=new Map,this._msgLog=[]}createReality(t,e=0){const n=new yo(t.id,e),s=new $c(n),r=new W_(t.id,t.publicKey);return this.realities.set(n.id,{reality:s,trust:r}),this.addNode(t),t.tune(s),{reality:s,trust:r,frequency:n}}addNode(t){this.nodes.set(t.id,t)}getNode(t){return this.nodes.get(t)??null}joinReality(t,e,n){const s=this.realities.get(e);if(!s)throw new Error(`Reality "${e}" does not exist`);const{reality:r,trust:o}=s;return o.vouch(n,t.id,t.publicKey),this.addNode(t),t.tune(r),t}route(t,e,n){if(t===e)return[t];const s=this.realities.get(n);if(!s)return null;const{trust:r}=s,o=Ot(this,dr,Oa).call(this,t,r),a=Ot(this,dr,Oa).call(this,e,r);if(!o||!a)return null;const l=new Set(o);let c;for(const d of a)if(l.has(d)){c=d;break}if(!c)return null;const h=o.slice(0,o.indexOf(c)+1),u=a.slice(0,a.indexOf(c)).reverse();return[...h,...u]}send(t,e,n,s){const r=this.route(t,e,n);if(!r)return{delivered:!1,reason:"no-route"};const o=this.realities.get(n);o&&o.reality.update(t,`msg:${Date.now()}:${t}→${e}`,s);const a={from:t,to:e,hops:r,payload:s,ts:Date.now()};return this._msgLog.push(a),{delivered:!0,hops:r.length,route:r}}gossip(t,e,n,s,r=6){const o=this.nodes.get(t),a=this.realities.get(e);if(!o||!a)return 0;const{reality:l}=a,c=new Set;let h=0;const u=(d,f)=>{if(c.has(d)||f<=0)return;c.add(d);const g=this.nodes.get(d);if(!(!g||!g.isIn(e))){l.update(d,n,s),h++;for(const _ of g.neighbors)u(_,f-1)}};return u(t,r),h}propose(t,e,n,s){const r=this.realities.get(e);if(!r)return{passed:!1,reason:"unknown-reality"};const{reality:o,trust:a}=r,l=a.getAll().filter(d=>a.isVerified(d.id)),c=l.filter(d=>{const f=this.nodes.get(d.id);return f&&s(f,a)}),h=Math.floor(l.length/2)+1;return{passed:c.length>=h,motion:n,proposer:t,total:l.length,yesVotes:c.length,needed:h,voters:c.map(d=>d.id)}}mergeRealities(t,e){const n=this.realities.get(t),s=this.realities.get(e);if(!n||!s)return null;if(!n.reality.frequency.harmonisesWith(s.reality.frequency))return{merged:!1,reason:"insufficient-resonance"};const r=yo.merge(n.reality.frequency,s.reality.frequency),o=new $c(r);o.merge(n.reality),o.merge(s.reality);const a=n.trust;try{a.vouch(n.trust.rootId,s.trust.rootId,"")}catch{}this.realities.set(r.id,{reality:o,trust:a});for(const l of this.nodes.values())(l.isIn(t)||l.isIn(e))&&(l.detune(t),l.detune(e),l.tune(o));return{merged:!0,frequency:r,reality:o}}nodesIn(t){return[...this.nodes.values()].filter(e=>e.isIn(t))}bridges(){return[...this.nodes.values()].filter(t=>t.realities.size>1)}stats(){return{totalNodes:this.nodes.size,totalRealities:this.realities.size,bridgeNodes:this.bridges().length,messageCount:this._msgLog.length}}}dr=new WeakSet,Oa=function(t,e){var o;const n=[];let s=t;const r=new Set;for(;s;){if(r.has(s))return null;r.add(s),n.push(s),s=((o=e.getMember(s))==null?void 0:o.vouchedBy)??null}return n};const Ss=Object.freeze({PUBLIC:"public",INVITE:"invite",PRIVATE:"private"});function Kc(){return Math.random().toString(36).slice(2,9).toUpperCase()}class Y_{constructor(t,e,{targetId:n=null,ttlMs:s=864e5,maxUses:r=1}={}){this.id=`INV-${Kc()}-${Kc()}`,this.issuerId=t,this.frequencyId=e,this.targetId=n,this.expiresAt=Date.now()+s,this.maxUses=r,this.uses=0,this.claimedBy=[]}get expired(){return Date.now()>this.expiresAt}get exhausted(){return this.uses>=this.maxUses}get active(){return!this.expired&&!this.exhausted}isValidFor(t){return!(this.expired||this.exhausted||this.targetId&&this.targetId!==t)}claim(t){return this.isValidFor(t)?(this.uses++,this.claimedBy.push(t),!0):!1}}var fr,pr,Is,Oi,Mo,tu;class q_{constructor(){It(this,Mo);It(this,fr,new Map);It(this,pr,new Map);It(this,Is,new Map);It(this,Oi,new Map)}setNode(t,e){D(this,fr).set(t,e)}getNode(t){return D(this,fr).get(t)??Ss.PUBLIC}setReality(t,e){D(this,pr).set(t,e)}getReality(t){return D(this,pr).get(t)??Ss.PUBLIC}issueInvite(t,e,n={}){const s=new Y_(t,e,n);return D(this,Is).set(s.id,s),s}getToken(t){return D(this,Is).get(t)??null}claimInvite(t,e){const n=D(this,Is).get(t);return n?n.expired?{success:!1,reason:"token-expired"}:n.exhausted?{success:!1,reason:"token-exhausted"}:n.isValidFor(e)?(n.claim(e),D(this,Oi).has(e)||D(this,Oi).set(e,new Set),D(this,Oi).get(e).add(n.frequencyId),{success:!0,frequencyId:n.frequencyId}):{success:!1,reason:"token-not-for-you"}:{success:!1,reason:"token-not-found"}}hasGrant(t,e){var n;return((n=D(this,Oi).get(t))==null?void 0:n.has(e))??!1}canSee(t,e,n){var r;if(t===e)return!0;const s=this.getNode(e);if(s===Ss.PUBLIC||Ot(this,Mo,tu).call(this,t,e,n))return!0;if(s===Ss.PRIVATE)return!1;for(const[o]of((r=n.getNode(e))==null?void 0:r.realities)??[])if(this.hasGrant(t,o))return!0;return!1}perceptionOf(t,e,n){return this.canSee(t,e,n)?"full":this.getNode(e)===Ss.INVITE?"blurred":"hidden"}buildMapFor(t,e){const n=[],s=[],r=new Set;for(const o of e.nodes.values()){const a=this.perceptionOf(t,o.id,e);a!=="hidden"&&(r.add(o.id),n.push({id:o.id,perception:a,visibility:this.getNode(o.id),realities:[...o.realities.keys()],isBridge:o.realities.size>1,isMe:o.id===t,position:o.position}))}for(const{reality:o,trust:a}of e.realities.values())for(const l of a.getAll())l.vouchedBy&&r.has(l.id)&&r.has(l.vouchedBy)&&s.push({from:l.vouchedBy,to:l.id,type:"trust"});for(const o of e.nodes.values())for(const a of o.neighbors)r.has(o.id)&&r.has(a)&&o.id<a&&s.push({from:o.id,to:a,type:"neighbor"});return{nodes:n,edges:s}}}fr=new WeakMap,pr=new WeakMap,Is=new WeakMap,Oi=new WeakMap,Mo=new WeakSet,tu=function(t,e,n){const s=n.getNode(t),r=n.getNode(e);if(!s||!r)return!1;for(const[o]of s.realities){if(!r.isIn(o))continue;const a=n.realities.get(o);if(a!=null&&a.trust.isVerified(t)&&(a!=null&&a.trust.isVerified(e)))return!0}return!1};const Jc=[{fill:"rgba(30,80,200,0.09)",border:"#4466ff",glow:"#2255dd"},{fill:"rgba(0,160,120,0.09)",border:"#00ffcc",glow:"#00ccaa"},{fill:"rgba(130,20,220,0.09)",border:"#aa55ff",glow:"#8833dd"},{fill:"rgba(200,100,0,0.09)",border:"#ff9900",glow:"#dd7700"},{fill:"rgba(0,160,200,0.09)",border:"#00ccff",glow:"#00aadd"}],Vn={me:"#00ffff",public:"#4488ff",invite:"#ffaa00",private:"#666688",blurred:"#333355"};class $_{constructor(t,e,n){this.canvas=t,this.ctx=t.getContext("2d"),this.vis=e,this.myId=n,this._nodes=[],this._edges=[],this._realityGroups=new Map,this._pan={x:0,y:0},this._zoom=1,this._drag=!1,this._lastMouse={x:0,y:0},this._selected=null,this._raf=null,this._settled=0,this._onSelect=null,this._bindEvents()}load(t){const{nodes:e,edges:n}=t,s=this.canvas.width,r=this.canvas.height,o=new Map(this._nodes.map(l=>[l.id,l]));this._nodes=e.map(l=>{if(o.has(l.id))return{...o.get(l.id),...l};const c=Math.random()*Math.PI*2,h=100+Math.random()*80;return{...l,x:s/2+Math.cos(c)*h,y:r/2+Math.sin(c)*h,vx:0,vy:0}});const a=new Map(this._nodes.map(l=>[l.id,l]));this._edges=n.filter(l=>a.has(l.from)&&a.has(l.to)).map(l=>({fromNode:a.get(l.from),toNode:a.get(l.to),type:l.type})),this._realityGroups.clear(),this._nodes.forEach(l=>{var c;(c=l.realities)==null||c.forEach((h,u)=>{this._realityGroups.has(h)||this._realityGroups.set(h,{nodes:[],color:Jc[this._realityGroups.size%Jc.length]}),this._realityGroups.get(h).nodes.push(l)})}),this._settled=0,this._kickSimulation()}onSelect(t){this._onSelect=t}fitView(){if(this._nodes.length===0)return;const t=this._nodes.map(d=>d.x),e=this._nodes.map(d=>d.y),n=Math.min(...t),s=Math.max(...t),r=Math.min(...e),o=Math.max(...e),a=this.canvas.width,l=this.canvas.height,c=60,h=(a-c*2)/(s-n||1),u=(l-c*2)/(o-r||1);this._zoom=Math.min(h,u,2),this._pan.x=-((n+s)/2)*this._zoom,this._pan.y=-((r+o)/2)*this._zoom,this.render()}stop(){this._raf&&cancelAnimationFrame(this._raf)}_kickSimulation(){if(this._raf)return;const t=()=>{this._settled<250&&(this._stepForce(),this._settled++),this.render(),this._raf=requestAnimationFrame(t)};this._raf=requestAnimationFrame(t)}_stepForce(){const t=this._nodes,e=4e3,n=90,s=.025,r=.82;for(let o=0;o<t.length;o++)for(let a=o+1;a<t.length;a++){const l=t[o],c=t[a],h=c.x-l.x,u=c.y-l.y,d=h*h+u*u||1,f=Math.sqrt(d),g=e/d;l.vx-=g*h/f,l.vy-=g*u/f,c.vx+=g*h/f,c.vy+=g*u/f}for(const o of this._edges){if(o.type!=="trust")continue;const a=o.toNode.x-o.fromNode.x,l=o.toNode.y-o.fromNode.y,c=Math.sqrt(a*a+l*l)||1,h=(c-n)*s;o.fromNode.vx+=h*a/c,o.fromNode.vy+=h*l/c,o.toNode.vx-=h*a/c,o.toNode.vy-=h*l/c,o.toNode.vy+=(o.toNode.y-(o.fromNode.y+n))*-.008}for(const o of this._edges){if(o.type!=="neighbor")continue;const a=o.toNode.x-o.fromNode.x,l=o.toNode.y-o.fromNode.y,c=Math.sqrt(a*a+l*l)||1,h=(c-50)*.008;o.fromNode.vx+=h*a/c,o.fromNode.vy+=h*l/c,o.toNode.vx-=h*a/c,o.toNode.vy-=h*l/c}for(const o of t)o.x+=o.vx*r,o.y+=o.vy*r,o.vx*=r,o.vy*=r}render(){const t=this.ctx,e=this.canvas.width,n=this.canvas.height;t.clearRect(0,0,e,n),t.fillStyle="rgba(0,2,12,0.97)",t.fillRect(0,0,e,n),t.save(),t.translate(e/2+this._pan.x,n/2+this._pan.y),t.scale(this._zoom,this._zoom),this._drawRealityClusters(),this._drawEdges(),this._drawNodes(),this._selected&&this._drawSelection(this._selected),t.restore(),this._drawLegend(),this._settled<250&&this._drawSettlingIndicator()}_drawRealityClusters(){const t=this.ctx;for(const[e,{nodes:n,color:s}]of this._realityGroups){if(n.length<2)continue;const r=n.reduce((c,h)=>c+h.x,0)/n.length,o=n.reduce((c,h)=>c+h.y,0)/n.length,a=Math.max(...n.map(c=>Math.hypot(c.x-r,c.y-o)))+55,l=t.createRadialGradient(r,o,0,r,o,a);l.addColorStop(0,s.fill.replace("0.09","0.14")),l.addColorStop(.7,s.fill),l.addColorStop(1,"transparent"),t.fillStyle=l,t.beginPath(),t.arc(r,o,a,0,Math.PI*2),t.fill(),t.strokeStyle=s.border+"33",t.lineWidth=1,t.beginPath(),t.arc(r,o,a,0,Math.PI*2),t.stroke()}}_drawEdges(){const t=this.ctx;for(const e of this._edges)t.beginPath(),t.moveTo(e.fromNode.x,e.fromNode.y),t.lineTo(e.toNode.x,e.toNode.y),e.type==="trust"?(t.strokeStyle="rgba(120,180,255,0.45)",t.lineWidth=1.8,t.setLineDash([])):(t.strokeStyle="rgba(255,255,255,0.1)",t.lineWidth=.8,t.setLineDash([3,5])),t.stroke();t.setLineDash([])}_drawNodes(){var e;const t=this.ctx;for(const n of this._nodes){const s=((e=this._selected)==null?void 0:e.id)===n.id,r=n.isMe?11:n.isBridge?9:7,o=n.isMe?Vn.me:n.perception==="blurred"?Vn.blurred:Vn[n.visibility]??Vn.public;t.shadowColor=o,t.shadowBlur=s?28:n.isMe?22:12,t.fillStyle=n.perception==="blurred"?"rgba(50,50,80,0.7)":o+(n.isMe?"":"cc"),t.beginPath(),t.arc(n.x,n.y,r,0,Math.PI*2),t.fill(),t.shadowBlur=0,n.isBridge&&(t.strokeStyle="#ffcc00bb",t.lineWidth=2,t.beginPath(),t.arc(n.x,n.y,r+5,0,Math.PI*2),t.stroke()),s&&(t.strokeStyle="#ffffff88",t.lineWidth=1.5,t.beginPath(),t.arc(n.x,n.y,r+8,0,Math.PI*2),t.stroke());const a=n.perception==="blurred"?"???":n.id.length>12?n.id.slice(0,12)+"…":n.id;t.fillStyle=n.isMe?"#ffffff":"rgba(255,255,255,0.65)",t.font=`${n.isMe?"bold ":""}10px Inter, monospace`,t.textAlign="center",t.fillText(a,n.x,n.y+r+14),n.perception==="full"&&n.depth>0&&(t.fillStyle="rgba(255,255,255,0.28)",t.font="8px monospace",t.fillText(`d${n.depth}`,n.x,n.y-r-4)),n.isMe&&(t.fillStyle="#00ffff",t.font="bold 8px Inter, monospace",t.shadowColor="#00ffff",t.shadowBlur=8,t.fillText("YOU",n.x,n.y-r-4),t.shadowBlur=0)}}_drawSelection(t){}_drawLegend(){const t=this.ctx,e=[{color:Vn.me,label:"You"},{color:Vn.public,label:"Public"},{color:Vn.invite,label:"Invite-only"},{color:Vn.private,label:"Private"},{color:Vn.blurred,label:"Unknown (invite-only, not connected)"},{color:"#ffcc00",label:"Bridge node"}],n=14,s=this.canvas.height-14-e.length*18;t.fillStyle="rgba(0,5,20,0.75)",t.fillRect(n-6,s-10,280,e.length*18+16),t.strokeStyle="rgba(255,255,255,0.07)",t.lineWidth=1,t.strokeRect(n-6,s-10,280,e.length*18+16),e.forEach(({color:r,label:o},a)=>{const l=s+a*18;t.fillStyle=r,t.beginPath(),t.arc(n+6,l,5,0,Math.PI*2),t.fill(),t.fillStyle="rgba(255,255,255,0.6)",t.font="11px Inter, monospace",t.textAlign="left",t.fillText(o,n+18,l+4)})}_drawSettlingIndicator(){const t=this.ctx,e=this._settled/250,n=this.canvas.width;t.fillStyle="rgba(100,180,255,0.5)",t.fillRect(0,this.canvas.height-2,n*e,2)}_bindEvents(){const t=this.canvas;t.addEventListener("mousedown",e=>{this._drag=!0,this._lastMouse={x:e.clientX,y:e.clientY}}),t.addEventListener("mousemove",e=>{this._drag&&(this._pan.x+=e.clientX-this._lastMouse.x,this._pan.y+=e.clientY-this._lastMouse.y,this._lastMouse={x:e.clientX,y:e.clientY},this.render())}),t.addEventListener("mouseup",()=>{this._drag=!1}),t.addEventListener("mouseleave",()=>{this._drag=!1}),t.addEventListener("wheel",e=>{e.preventDefault();const n=e.deltaY>0?.88:1.14;this._zoom=Math.max(.15,Math.min(6,this._zoom*n)),this._raf||this.render()},{passive:!1}),t.addEventListener("click",e=>{var a;if(this._drag)return;const n=t.getBoundingClientRect(),s=(e.clientX-n.left-t.width/2-this._pan.x)/this._zoom,r=(e.clientY-n.top-t.height/2-this._pan.y)/this._zoom;let o=null;for(const l of this._nodes)if(Math.hypot(l.x-s,l.y-r)<14){o=l;break}this._selected=o,(a=this._onSelect)==null||a.call(this,o),this._raf||this.render()})}}function jc(i,t,e){const n=document.getElementById("network-map-overlay");if(!n)return;n.classList.add("visible");const s=document.getElementById("network-map-canvas");s.width=s.offsetWidth||800,s.height=s.offsetHeight||560;const r=t.buildMapFor(e,i),o=new $_(s,t,e);o.load(r);const a=document.getElementById("nm-node-panel");o.onSelect(h=>{var u;if(!h||h.perception==="blurred"){a.innerHTML=h?'<div class="nm-panel-blurred">🔒 Unknown node<br><small>Invite required</small></div>':"";return}a.innerHTML=`
      <div class="nm-panel-title">${h.isMe?"👤 You":"🔵 "+h.id}</div>
      <div class="nm-panel-row"><span>Visibility</span><span class="nm-badge nm-badge-${h.visibility}">${h.visibility}</span></div>
      <div class="nm-panel-row"><span>Depth</span><span>d${h.depth??0}</span></div>
      <div class="nm-panel-row"><span>Realities</span><span>${((u=h.realities)==null?void 0:u.length)??0}</span></div>
      ${h.isBridge?'<div class="nm-panel-bridge">🌉 Bridge node</div>':""}
    `});const l=document.getElementById("nm-close"),c=()=>{n.classList.remove("visible"),o.stop()};l.onclick=c,n.addEventListener("keydown",h=>{h.key==="Escape"&&c()})}const xa=20,ya=50,K_=.08,Qc=12;class J_{constructor(){this._ctx=null,this._stream=null,this._gains=new Map,this._talking=new Set,this._selfAnalyser=null,this._selfBuf=null,this._muted=!1,this._active=!1,this._onStateChange=null,this._onTalkChange=null,this._onSelfTalkChange=null,this._syncRef=null}async start(t){if(this._active)return!0;this._syncRef=t;try{const e=new Promise((r,o)=>setTimeout(()=>o(new Error("mic permission timed out")),15e3));this._stream=await Promise.race([navigator.mediaDevices.getUserMedia({audio:{echoCancellation:!0,noiseSuppression:!0,sampleRate:48e3},video:!1}),e]),this._ctx=new AudioContext,this._ctx.state==="suspended"&&await this._ctx.resume(),this._active=!0,this._selfAnalyser=this._ctx.createAnalyser(),this._selfAnalyser.fftSize=256,this._selfBuf=new Uint8Array(this._selfAnalyser.frequencyBinCount),this._ctx.createMediaStreamSource(this._stream).connect(this._selfAnalyser);const[s]=this._stream.getAudioTracks();return t.addVoiceTrack(s,this._stream),t.onVoiceTrack((r,o,a,l)=>{r.kind==="audio"&&this._addPeerTrack(a,r,l)}),this._notify(),!0}catch(e){return console.warn("[ProximityVoice] mic access denied or unavailable:",e.message),!1}}_addPeerTrack(t,e,n){var a;((a=this._ctx)==null?void 0:a.state)==="suspended"&&this._ctx.resume().catch(()=>{});const s=this._ctx.createMediaStreamSource(new MediaStream([e])),r=this._ctx.createGain(),o=this._ctx.createAnalyser();o.fftSize=256,r.gain.value=0,s.connect(o),s.connect(r),r.connect(this._ctx.destination),this._gains.set(t,{gainNode:r,sourceNode:s,analyser:o,buf:new Uint8Array(o.frequencyBinCount),wirePeerId:n??t})}stop(){var t,e;(t=this._stream)==null||t.getTracks().forEach(n=>n.stop()),this._gains.forEach(({gainNode:n,sourceNode:s})=>{try{s.disconnect(),n.disconnect()}catch{}}),this._gains.clear(),this._talking.clear(),(e=this._ctx)==null||e.close(),this._active=!1,this._syncRef=null,this._notify(),this._notifyTalk()}update(t,e){var a;if(!this._active||!this._ctx)return;this._syncRef&&this._gains.forEach((l,c)=>{const h=this._syncRef.wireToIdentityId(c);h&&h!==c&&(this._gains.set(h,l),this._gains.delete(c))});const n=new Set(this._talking),s=n.has("self");this._selfAnalyser&&!this._muted?(this._selfAnalyser.getByteFrequencyData(this._selfBuf),this._selfBuf.reduce((c,h)=>c+h,0)/this._selfBuf.length>Qc?this._talking.add("self"):this._talking.delete("self")):this._talking.delete("self");const r=this._talking.has("self");r!==s&&((a=this._onSelfTalkChange)==null||a.call(this,r)),e.forEach((l,c)=>{const h=this._gains.get(c);if(!h)return;const u=l.position.x-t.x,d=l.position.z-t.z,f=Math.sqrt(u*u+d*d),g=f<=xa?1:f>=ya?0:1-(f-xa)/(ya-xa);h.gainNode.gain.setTargetAtTime(g,this._ctx.currentTime,K_),h.analyser.getByteFrequencyData(h.buf),h.buf.reduce((m,p)=>m+p,0)/h.buf.length>Qc?this._talking.add(c):this._talking.delete(c)});let o=n.size!==this._talking.size;if(!o){for(const l of this._talking)if(!n.has(l)){o=!0;break}}o&&this._notifyTalk()}removePeer(t){const e=this._gains.get(t);if(e){try{e.sourceNode.disconnect(),e.gainNode.disconnect()}catch{}this._gains.delete(t)}this._talking.delete(t)}toggleMute(){return this.setMuted(!this._muted),this._muted}setMuted(t){var e;this._muted=t,(e=this._stream)==null||e.getAudioTracks().forEach(n=>{n.enabled=!t}),this._notify()}get active(){return this._active}get muted(){return this._muted}isTalking(t){return this._talking.has(t)}get talkingPeers(){return this._talking}onStateChange(t){this._onStateChange=t}onTalkChange(t){this._onTalkChange=t}onSelfTalkChange(t){this._onSelfTalkChange=t}_notify(){var t;(t=this._onStateChange)==null||t.call(this,{active:this._active,muted:this._muted})}_notifyTalk(){var t;(t=this._onTalkChange)==null||t.call(this,this._talking)}static get HEAR_FAR(){return ya}}const th=Object.fromEntries(rl.map(i=>[i.id,"#"+i.color.toString(16).padStart(6,"0")])),j_={OUTSIDE:"#88cc66",LOBBY:"#aaaacc",OPS:"#ffaa44",FUN:"#44ffaa",DESIGN:"#ff6ba0",ENGINEERING:"#44aaff"},Q_={OUTSIDE:"Outside",LOBBY:"Lobby",OPS:"Ops",FUN:"Fun",DESIGN:"Design",ENGINEERING:"Engineering"};class tv{constructor(t){this._onNavigate=t,this._peers=new Map,this._self={username:"",presetId:0,zone:"OUTSIDE"},this._el=this._build(),document.body.appendChild(this._el),this._render()}setSelf(t,e,n,s="available"){this._self={username:t,presetId:e,zone:n||"OUTSIDE",status:s},this._render()}updateSelfStatus(t){this._self.status=t,this._render()}addPeer(t,e,n=0,s="available"){this._peers.set(t,{username:e,presetId:n,x:0,z:0,zone:"OUTSIDE",status:s}),this._render()}movePeer(t,e,n){const s=this._peers.get(t);s&&(s.x=e,s.z=n,s.zone=xo({x:e,z:n}),this._render())}updatePeerPreset(t,e){const n=this._peers.get(t);n&&(n.presetId=e,this._render())}updatePeerStatus(t,e){const n=this._peers.get(t);n&&(n.status=e,this._render())}removePeer(t){this._peers.delete(t),this._render()}updateSelfZone(t){this._self.zone=t||"OUTSIDE",this._render()}_build(){const t=document.createElement("div");return t.id="presence-panel",t.innerHTML=`
      <div class="pp-header">
        <span class="pp-title">WHO'S HERE</span>
        <span class="pp-count" id="pp-count">1</span>
      </div>
      <div class="pp-list" id="pp-list"></div>
    `,t}_render(){const t=this._el.querySelector("#pp-list"),e=this._el.querySelector("#pp-count");if(!t)return;const n=1+this._peers.size;e.textContent=n;const s=[];s.push(this._row({username:this._self.username||"You",presetId:this._self.presetId,zone:this._self.zone,status:this._self.status,isSelf:!0}));const r=[...this._peers.entries()].sort((o,a)=>{const l=o[1].zone,c=a[1].zone;return l!==c?l.localeCompare(c):o[1].username.localeCompare(a[1].username)});r.forEach(([o,a])=>{s.push(this._row({username:a.username,presetId:a.presetId,zone:a.zone,status:a.status,isSelf:!1,onClick:()=>{var l;return(l=this._onNavigate)==null?void 0:l.call(this,{x:a.x,z:a.z})}}))}),t.innerHTML=s.join(""),t.querySelectorAll(".pp-row[data-idx]").forEach(o=>{const a=parseInt(o.dataset.idx,10),l=r[a];l&&o.addEventListener("click",()=>{var c;return(c=this._onNavigate)==null?void 0:c.call(this,{x:l[1].x,z:l[1].z})})})}_row({username:t,presetId:e,zone:n,status:s="available",isSelf:r,onClick:o}){const l="#"+(Zi[e]??Zi[0]).outfit.toString(16).padStart(6,"0"),c=th[s]??th.available,h=j_[n]??"#888",u=Q_[n]??n;return`
      <div class="pp-row ${r?"pp-self":"pp-peer"}"
           ${r?"":`data-idx="${t}"`}>
        <span class="pp-dot" style="background:${l}"></span>
        <span class="pp-status-dot" style="background:${c}" title="${s}"></span>
        <span class="pp-name">${ev(t)}${r?' <span class="pp-you">(you)</span>':""}</span>
        <span class="pp-zone" style="color:${h}">${u}</span>
        ${r?"":'<span class="pp-go" title="Walk to this person">→</span>'}
      </div>
    `}}function ev(i){return i.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}const Fa="sw_id_v1",Ba=i=>Array.from(i).map(t=>t.toString(16).padStart(2,"0")).join(""),eh=i=>{const t=i.replace(/-/g,"+").replace(/_/g,"/"),e=atob(t);return Uint8Array.from(e,n=>n.charCodeAt(0))};class nh{constructor(t,e,n,s){this.peerId=t,this.displayName=e,this.isNew=s,this._priv=n}get shortId(){return this.peerId.slice(-8)}setName(t){this.displayName=t,eu()}async sign(t){const e=new TextEncoder().encode(t),n=await crypto.subtle.sign({name:"Ed25519"},this._priv,e);return Ba(new Uint8Array(n))}}let Yn=null,hr=null;function eu(){if(!(!Yn||!hr))try{localStorage.setItem(Fa,JSON.stringify({privJwk:hr,displayName:Yn.displayName}))}catch{}}async function nv(){if(Yn)return Yn;const i=localStorage.getItem(Fa);if(i)try{const{privJwk:n,displayName:s}=JSON.parse(i),r=await crypto.subtle.importKey("jwk",n,{name:"Ed25519"},!1,["sign"]),o=Ba(eh(n.x));return hr=n,Yn=new nh(o,s||"",r,!1),Yn}catch{localStorage.removeItem(Fa)}const t=await crypto.subtle.generateKey({name:"Ed25519"},!0,["sign","verify"]);hr=await crypto.subtle.exportKey("jwk",t.privateKey);const e=Ba(eh(hr.x));return Yn=new nh(e,"",t.privateKey,!0),eu(),Yn}function nu(){return Yn}const za="xn_",iu="xn_known_peers";async function iv(i){const t=new TextEncoder().encode(i),e=await crypto.subtle.digest("SHA-256",t);return Array.from(new Uint8Array(e)).map(n=>n.toString(16).padStart(2,"0")).join("")}async function co(i,t=""){return iv(i.toLowerCase().trim()+":"+t.trim())}function sv(i){return btoa(i).replace(/\+/g,"-").replace(/\//g,"_").replace(/=/g,"")}function rv(i){const t=i.length%4,e=t?i+"=".repeat(4-t):i;return atob(e.replace(/-/g,"+").replace(/_/g,"/"))}async function ov({roomId:i,lockCode:t="",node:e}={}){if(!(i!=null&&i.trim()))throw new Error("roomId is required");const n=await co(i,t),s=cv(n),r={r:i.trim(),h:n};e&&(r.n=e),s.length&&(r.p=s.slice(0,8));const o=sv(JSON.stringify(r));return{link:`${window.location.origin+window.location.pathname}#${za}${o}`,roomHash:n}}async function av(){const i=window.location.hash.slice(1);if(i.startsWith(za))try{const e=JSON.parse(rv(i.slice(za.length))),n=e.r||"main",s=e.h||await co(n);return{type:"link",roomId:n,roomHash:s,node:e.n||null,peers:e.p||[]}}catch{console.warn("[roomLink] failed to decode link — falling back to main")}if(i){const e=i.trim().toLowerCase(),n=await co(e);return{type:"plain",roomId:e,roomHash:n,node:null,peers:[]}}return{type:"default",roomId:"main",roomHash:await co("main"),node:null,peers:[]}}function su(){try{return JSON.parse(localStorage.getItem(iu)||"{}")}catch{return{}}}function lv(i){try{localStorage.setItem(iu,JSON.stringify(i))}catch{}}function cv(i){return su()[i]||[]}function hv(i,t){const e=su(),n=e[i]||[];n.includes(t)||(n.unshift(t),n.length>20&&(n.length=20),e[i]=n,lv(e))}function uv(i){const t=i.trim().toLowerCase().replace(/[^a-z0-9-]/g,"-").replace(/-{2,}/g,"-").replace(/^-+|-+$/g,"")||"main";window.location.hash=t}const Ma={};function ru(i){if(i)return i;const t=new URLSearchParams(window.location.search).get("node");if(t)return t;if(!(Ma!=null&&Ma.VITE_XPACENODE_URL))return"ws://localhost:4002"}function dv(){const i=window.location.hash.slice(1).trim();return!i||i.startsWith("xn_")?"main":i}function fv(i){uv(i)}const pv=[{urls:"stun:stun.l.google.com:19302"},{urls:"stun:stun1.l.google.com:19302"},{urls:"turn:openrelay.metered.ca:80",username:"openrelayproject",credential:"openrelayproject"},{urls:"turn:openrelay.metered.ca:80?transport=tcp",username:"openrelayproject",credential:"openrelayproject"}];var Fi,mr,Bi,zi,Ds,gr,_r,Zs,ou,au;class mv{constructor(){It(this,Zs);It(this,Fi,null);It(this,mr,"");It(this,Bi,new Map);It(this,zi,!1);It(this,Ds,!1);It(this,gr,[]);It(this,_r,0)}async connect(t){return Ht(this,mr,t),new Promise((e,n)=>{const s=new WebSocket(t);Ht(this,Fi,s);const r=setTimeout(()=>n(new Error("xpacenode connect timeout")),1e4);s.onopen=()=>{clearTimeout(r),Ht(this,zi,!0),Ht(this,_r,0),D(this,gr).splice(0).forEach(a=>s.send(a)),e()},s.onmessage=({data:o})=>{try{const a=JSON.parse(o);Ot(this,Zs,ou).call(this,a)}catch{}},s.onerror=o=>{clearTimeout(r),n(o)},s.onclose=()=>{Ht(this,zi,!1),Ot(this,Zs,au).call(this)}})}send(t){var n;const e=JSON.stringify(t);D(this,zi)&&((n=D(this,Fi))==null?void 0:n.readyState)===WebSocket.OPEN?D(this,Fi).send(e):D(this,gr).push(e)}on(t,e){D(this,Bi).has(t)||D(this,Bi).set(t,[]),D(this,Bi).get(t).push(e)}close(){var t;Ht(this,Ds,!0),Ht(this,zi,!1),(t=D(this,Fi))==null||t.close()}}Fi=new WeakMap,mr=new WeakMap,Bi=new WeakMap,zi=new WeakMap,Ds=new WeakMap,gr=new WeakMap,_r=new WeakMap,Zs=new WeakSet,ou=function(t){const e=D(this,Bi).get(t.t);e==null||e.forEach(n=>n(t))},au=function(){if(D(this,Ds))return;const t=Math.min(1e3*2**hl(this,_r)._++,3e4);console.warn(`[xpacenode] disconnected — reconnecting in ${t}ms`),setTimeout(()=>{D(this,Ds)||this.connect(D(this,mr)).catch(()=>{})},t)};var ve,$n,Ns,ki,Us,vr,xr,yr,Os,Mr,Mi,ka,Ha;class gv extends EventTarget{constructor(e){super();It(this,Mi);It(this,ve);It(this,$n,null);It(this,Ns,!1);It(this,ki,!1);It(this,Us,!1);It(this,vr,null);It(this,xr,null);It(this,yr,[]);It(this,Os,!1);It(this,Mr,async()=>{if(!D(this,ki)&&D(this,ve).signalingState==="stable")try{Ht(this,ki,!0),await D(this,ve).setLocalDescription(),this.dispatchEvent(new CustomEvent("signal",{detail:{type:"offer",sdp:D(this,ve).localDescription.sdp}}))}catch(e){console.warn("[RTCPeer] negotiate error",e)}finally{Ht(this,ki,!1)}});Ht(this,Ns,e),Ht(this,ve,new RTCPeerConnection({iceServers:pv})),e||(Ht(this,$n,D(this,ve).createDataChannel("sw",{ordered:!0})),Ot(this,Mi,ka).call(this,D(this,$n))),D(this,ve).ondatachannel=({channel:n})=>{Ht(this,$n,n),Ot(this,Mi,ka).call(this,n)},D(this,ve).onicecandidate=({candidate:n})=>{n&&this.dispatchEvent(new CustomEvent("signal",{detail:{type:"ice",candidate:n.toJSON()}}))},D(this,ve).onnegotiationneeded=D(this,Mr),D(this,ve).ontrack=({track:n,streams:s})=>{var o;const r=s[0]??new MediaStream([n]);(o=D(this,xr))==null||o.call(this,n,r)},D(this,ve).onconnectionstatechange=()=>{D(this,ve).connectionState==="failed"&&this.dispatchEvent(new CustomEvent("failed"))}}async handleSignal({type:e,sdp:n,candidate:s}){try{if(e==="offer"){const r=D(this,ve).signalingState==="have-local-offer",o=D(this,ki)||r;if(Ht(this,Us,!D(this,Ns)&&o),D(this,Us))return;await D(this,ve).setRemoteDescription({type:"offer",sdp:n}),Ht(this,Os,!0),await D(this,ve).setLocalDescription(),this.dispatchEvent(new CustomEvent("signal",{detail:{type:"answer",sdp:D(this,ve).localDescription.sdp}})),await Ot(this,Mi,Ha).call(this),D(this,Ns)&&r&&setTimeout(D(this,Mr),200)}else if(e==="answer")D(this,ve).signalingState==="have-local-offer"&&(await D(this,ve).setRemoteDescription({type:"answer",sdp:n}),Ht(this,Os,!0),await Ot(this,Mi,Ha).call(this));else if(e==="ice")if(!D(this,Os))D(this,yr).push(s);else try{await D(this,ve).addIceCandidate(s)}catch(r){D(this,Us)||console.warn("[RTCPeer] addIceCandidate",r)}}catch(r){console.warn("[RTCPeer] handleSignal",e,r)}}send(e){var n;((n=D(this,$n))==null?void 0:n.readyState)==="open"&&D(this,$n).send(JSON.stringify(e))}addTrack(e,n){try{D(this,ve).addTrack(e,n)}catch{}}onMessage(e){Ht(this,vr,e)}onTrack(e){Ht(this,xr,e)}get pc(){return D(this,ve)}get connected(){var e;return((e=D(this,$n))==null?void 0:e.readyState)==="open"}close(){try{D(this,ve).close()}catch{}}}ve=new WeakMap,$n=new WeakMap,Ns=new WeakMap,ki=new WeakMap,Us=new WeakMap,vr=new WeakMap,xr=new WeakMap,yr=new WeakMap,Os=new WeakMap,Mr=new WeakMap,Mi=new WeakSet,ka=function(e){e.onopen=()=>this.dispatchEvent(new CustomEvent("open")),e.onclose=()=>this.dispatchEvent(new CustomEvent("close")),e.onmessage=({data:n})=>{var s;try{(s=D(this,vr))==null||s.call(this,JSON.parse(n))}catch{}}},Ha=async function(){const e=D(this,yr).splice(0);for(const n of e)try{await D(this,ve).addIceCandidate(n)}catch{}};var Je,De,Kn,Hi,Gi,Vi,Mn,Fs,Wi,So,Bs,Sr,Er,wr,se,Ga,Va,lu,vn,Rn;class _v{constructor(t,e=0,n="available"){It(this,se);It(this,Je,null);It(this,De,new Map);It(this,Kn,{});It(this,Hi,"");It(this,Gi,0);It(this,Vi,"available");It(this,Mn,"");It(this,Fs,"main");It(this,Wi,"");It(this,So,[]);It(this,Bs,null);It(this,Sr,[]);It(this,Er,[]);It(this,wr,null);Ht(this,Hi,t),Ht(this,Gi,e),Ht(this,Vi,n)}async start(){const t=await av();Ht(this,Mn,t.roomHash),Ht(this,Fs,t.roomId),Ht(this,So,t.peers??[]),Ht(this,Je,new mv),Ht(this,Wi,ru(t.node)),console.log(`[RemoteSync] room:"${D(this,Fs)}" hash:${D(this,Mn).slice(0,12)}… node:${D(this,Wi)}`),await D(this,Je).connect(D(this,Wi)),D(this,Je).on("peer_join",async e=>{const{peerId:n,username:s="",presetId:r=0,status:o="available"}=e;if(n!==Ot(this,se,vn).call(this)&&(Ot(this,se,Rn).call(this,"HELLO",{from:n,username:s,presetId:r,status:o}),!D(this,De).has(n))){const a=Ot(this,se,vn).call(this)<n;await Ot(this,se,Ga).call(this,n,a)}}),D(this,Je).on("peer_leave",e=>{Ot(this,se,Va).call(this,e.peerId)}),D(this,Je).on("signal",async e=>{var r;const{from:n,payload:s}=e;if(!(!n||!s)){if(!D(this,De).has(n)){const o=Ot(this,se,vn).call(this)<n;await Ot(this,se,Ga).call(this,n,o)}await((r=D(this,De).get(n))==null?void 0:r.peer.handleSignal(s))}}),D(this,Je).send({t:"hello",roomId:D(this,Mn),peerId:Ot(this,se,vn).call(this),username:D(this,Hi),presetId:D(this,Gi),status:D(this,Vi)}),Ht(this,wr,setInterval(()=>{D(this,Je).send({t:"hb",roomId:D(this,Mn)})},3e4))}stop(){var t,e;clearInterval(D(this,wr)),(t=D(this,Je))==null||t.send({t:"leave",roomId:D(this,Mn)}),(e=D(this,Je))==null||e.close();for(const{peer:n}of D(this,De).values())n.close();D(this,De).clear(),Ht(this,Je,null)}move(t,e,n,s=0){const r={type:"move",identityId:Ot(this,se,vn).call(this),pos:{x:t,y:e,z:n,ry:s}};for(const{peer:o}of D(this,De).values())o.send(r)}chat(t){const e={type:"chat",identityId:Ot(this,se,vn).call(this),username:D(this,Hi),text:t,ts:Date.now()};for(const{peer:n}of D(this,De).values())n.send(e)}setAvatar(t){Ht(this,Gi,t);const e={type:"avatar",identityId:Ot(this,se,vn).call(this),presetId:t};for(const{peer:n}of D(this,De).values())n.send(e)}setStatus(t){Ht(this,Vi,t);const e={type:"status",identityId:Ot(this,se,vn).call(this),status:t};for(const{peer:n}of D(this,De).values())n.send(e)}broadcastTalking(t){const e={type:"talking",identityId:Ot(this,se,vn).call(this),talking:!!t};for(const{peer:n}of D(this,De).values())n.send(e)}addVoiceTrack(t,e){D(this,Er).push({track:t,stream:e});for(const{peer:n}of D(this,De).values())n.addTrack(t,e)}onVoiceTrack(t){Ht(this,Bs,t);const e=D(this,Sr).splice(0);for(const{track:n,stream:s,identityId:r,nostrPubkey:o}of e)n.readyState!=="ended"&&t(n,s,r,o);for(const[n,{peer:s}]of D(this,De))for(const r of s.pc.getReceivers()){const o=r.track;!o||o.kind!=="audio"||o.readyState==="ended"||t(o,new MediaStream([o]),n,n)}}wireToIdentityId(t){return t}get roomName(){return D(this,Fs)}get roomHash(){return D(this,Mn)}get nodeUrl(){return D(this,Wi)}getPeers(){const t={};for(const[e,{peer:n}]of D(this,De))t[e]=n.pc;return t}on(t,e){return D(this,Kn)[t]||(D(this,Kn)[t]=[]),D(this,Kn)[t].push(e),()=>{D(this,Kn)[t]=D(this,Kn)[t].filter(n=>n!==e)}}}Je=new WeakMap,De=new WeakMap,Kn=new WeakMap,Hi=new WeakMap,Gi=new WeakMap,Vi=new WeakMap,Mn=new WeakMap,Fs=new WeakMap,Wi=new WeakMap,So=new WeakMap,Bs=new WeakMap,Sr=new WeakMap,Er=new WeakMap,wr=new WeakMap,se=new WeakSet,Ga=async function(t,e){const n=new gv(e);D(this,De).set(t,{identityId:t,peer:n}),n.addEventListener("signal",({detail:s})=>{var r;(r=D(this,Je))==null||r.send({t:"signal",roomId:D(this,Mn),to:t,payload:s})}),n.onMessage(s=>Ot(this,se,lu).call(this,s,t)),n.onTrack((s,r)=>{D(this,Bs)?D(this,Bs).call(this,s,r,t,t):D(this,Sr).push({track:s,stream:r,identityId:t,nostrPubkey:t})}),n.addEventListener("open",()=>{n.send({type:"intro",identityId:Ot(this,se,vn).call(this),username:D(this,Hi),presetId:D(this,Gi),status:D(this,Vi)}),hv(D(this,Mn),t)}),n.addEventListener("failed",()=>Ot(this,se,Va).call(this,t));for(const{track:s,stream:r}of D(this,Er))n.addTrack(s,r);return n},Va=function(t){const e=D(this,De).get(t);e&&(e.peer.close(),D(this,De).delete(t),Ot(this,se,Rn).call(this,"PEER_LEAVE",{from:t}))},lu=function(t,e){const n=t.identityId??e;switch(t.type){case"intro":Ot(this,se,Rn).call(this,"HELLO",{from:n,username:t.username,presetId:t.presetId??0,status:t.status??"available"});break;case"move":Ot(this,se,Rn).call(this,"MOVE",{from:n,pos:t.pos});break;case"chat":Ot(this,se,Rn).call(this,"CHAT",{from:n,username:t.username,text:t.text,ts:t.ts});break;case"avatar":Ot(this,se,Rn).call(this,"AVATAR_CHANGE",{from:n,presetId:t.presetId});break;case"status":Ot(this,se,Rn).call(this,"STATUS_CHANGE",{from:n,status:t.status});break;case"talking":Ot(this,se,Rn).call(this,"PEER_TALKING",{from:n,talking:!!t.talking});break;case"bye":Ot(this,se,Rn).call(this,"PEER_LEAVE",{from:n});break}},vn=function(){var t;return((t=nu())==null?void 0:t.peerId)??"unknown"},Rn=function(t,e){var n;(n=D(this,Kn)[t])==null||n.forEach(s=>s(e))};async function vv(i){const e=ru().replace(/^ws(s?):\/\//,"http$1://").replace(/:4002$/,":3000");let n=!1;const s=9e4,r=new Map,o=async()=>{if(!n)try{const h=await(await fetch(`${e}/rooms`,{signal:AbortSignal.timeout(5e3)})).json(),u=Date.now();for(const d of h.rooms??[])r.set(d.roomId,{count:d.count,usernames:d.usernames??[],lastSeen:u});for(const[d,f]of r)u-f.lastSeen>s&&r.delete(d);a()}catch{}},a=()=>{const c=[...r.entries()].map(([h,u])=>({roomId:h,roomName:h,count:u.count})).sort((h,u)=>u.count-h.count);i(c)};await o();const l=setInterval(o,3e4);return()=>{n=!0,clearInterval(l)}}var Se,un,zs,br,Tr,Ar,He,cu,hu,xn;class xv extends EventTarget{constructor(){super(...arguments);It(this,He);It(this,Se,null);It(this,un,new Map);It(this,zs,!1);It(this,br,"");It(this,Tr,0);It(this,Ar,"available")}get id(){var e;return((e=nu())==null?void 0:e.peerId)??""}get peers(){return[...D(this,un).values()]}get peerCount(){return D(this,un).size}get roomName(){var e;return((e=D(this,Se))==null?void 0:e.roomName)??"main"}get nodeUrl(){var e;return((e=D(this,Se))==null?void 0:e.nodeUrl)??null}async start(e,n=0,s="available"){D(this,zs)||(Ht(this,zs,!0),Ht(this,br,e),Ht(this,Tr,n),Ht(this,Ar,s),Ht(this,Se,new _v(e,n,s)),D(this,Se).on("HELLO",({from:r,username:o,presetId:a=0,status:l="available"})=>{D(this,un).has(r)||Ot(this,He,cu).call(this,r,o,a,l)}),D(this,Se).on("PEER_LEAVE",({from:r})=>Ot(this,He,hu).call(this,r)),D(this,Se).on("MOVE",({from:r,pos:o})=>{Ot(this,He,xn).call(this,"peer:move",{peerId:r,pos:o})}),D(this,Se).on("AVATAR_CHANGE",({from:r,presetId:o})=>{Ot(this,He,xn).call(this,"peer:avatar",{peerId:r,presetId:o})}),D(this,Se).on("STATUS_CHANGE",({from:r,status:o})=>{Ot(this,He,xn).call(this,"peer:status",{peerId:r,status:o})}),D(this,Se).on("PEER_TALKING",({from:r,talking:o})=>{Ot(this,He,xn).call(this,"peer:talking",{peerId:r,talking:o})}),D(this,Se).on("CHAT",({from:r,username:o,text:a,ts:l})=>{Ot(this,He,xn).call(this,"chat",{from:r,username:o,text:a,ts:l})}),await D(this,Se).start())}stop(){var e;(e=D(this,Se))==null||e.stop(),Ht(this,Se,null),D(this,un).clear(),Ht(this,zs,!1)}move(e,n,s,r=0){var o;(o=D(this,Se))==null||o.move(e,n,s,r)}setAvatar(e){var n;Ht(this,Tr,e),(n=D(this,Se))==null||n.setAvatar(e)}setStatus(e){var n;Ht(this,Ar,e),(n=D(this,Se))==null||n.setStatus(e)}sendChat(e){var s;if(!e.trim())return;const n=Date.now();Ot(this,He,xn).call(this,"chat",{from:this.id,username:D(this,br),text:e,ts:n}),(s=D(this,Se))==null||s.chat(e)}addVoiceTrack(e,n){var s;(s=D(this,Se))==null||s.addVoiceTrack(e,n)}onVoiceTrack(e){var n;(n=D(this,Se))==null||n.onVoiceTrack(e)}wireToIdentityId(e){var n;return(n=D(this,Se))==null?void 0:n.wireToIdentityId(e)}broadcastTalking(e){var n;(n=D(this,Se))==null||n.broadcastTalking(e)}}Se=new WeakMap,un=new WeakMap,zs=new WeakMap,br=new WeakMap,Tr=new WeakMap,Ar=new WeakMap,He=new WeakSet,cu=function(e,n,s,r){D(this,un).set(e,{peerId:e,username:n,presetId:s,status:r}),Ot(this,He,xn).call(this,"peer:join",{peerId:e,username:n,presetId:s,status:r}),Ot(this,He,xn).call(this,"status",{peerCount:D(this,un).size})},hu=function(e){D(this,un).has(e)&&(D(this,un).delete(e),Ot(this,He,xn).call(this,"peer:leave",{peerId:e}),Ot(this,He,xn).call(this,"status",{peerCount:D(this,un).size}))},xn=function(e,n){this.dispatchEvent(new CustomEvent(e,{detail:n}))};const we=new xv,Wn=Object.freeze({OCEAN:"ocean",COAST:"coast",DESERT:"desert",PLAINS:"plains",FOREST:"forest",MOUNTAIN:"mountain",ARCTIC:"arctic",JUNGLE:"jungle",TUNDRA:"tundra"});function ao(i){let t=5381;for(let e=0;e<i.length;e++)t=Math.imul(t,33)^i.charCodeAt(e);return(t>>>0).toString(16).padStart(8,"0")}function uu(i,t,e,n){const s=JSON.stringify({parentHash:i,authorId:t,changes:e,timestamp:n});let r=ao(s),o=ao(r+s.slice(0,32)),a=ao(o+s.slice(-32)),l=ao(a+t);return r+o+a+l}class Rs{constructor(t,e,n,s="",r=Date.now()){this.parentHash=t,this.authorId=e,this.changes=Object.freeze([...n]),this.message=s,this.timestamp=r,this.hash=uu(t,e,n,r)}buildRevert(t,e=Date.now()){const n=this.changes.map(s=>({cellId:s.cellId,key:s.key,oldValue:s.newValue,newValue:s.oldValue}));return new Rs(this.hash,t,n,`revert: ${this.message||this.hash.slice(0,8)}`,e)}toJSON(){return{hash:this.hash,parentHash:this.parentHash,authorId:this.authorId,message:this.message,timestamp:this.timestamp,changes:this.changes}}}const yv="universe",Mv="genesis: the universe begins";var Be,je;class Sv{constructor(){It(this,Be,new Map);It(this,je,null);this._genesis()}_genesis(){const t=new Rs(null,yv,[],Mv,0);D(this,Be).set(t.hash,t),Ht(this,je,t.hash)}get head(){return D(this,je)}get length(){return D(this,Be).size}getCommit(t){return D(this,Be).get(t)??null}headCommit(){return D(this,Be).get(D(this,je))}log(t=1/0){const e=[];let n=D(this,je);for(;n&&e.length<t;){const s=D(this,Be).get(n);if(!s)break;e.push(s),n=s.parentHash}return e}stateAt(t){const e=[];let n=t;for(;n;){const r=D(this,Be).get(n);if(!r)break;e.unshift(r),n=r.parentHash}const s=new Map;for(const r of e)for(const{cellId:o,key:a,newValue:l}of r.changes)s.set(`${o}:${a}`,l);return s}currentState(){return this.stateAt(D(this,je))}diff(t,e){const n=this.stateAt(t),s=this.stateAt(e),r=[],o=new Set([...n.keys(),...s.keys()]);for(const a of o){const l=n.get(a)??null,c=s.get(a)??null;if(l!==c){const[h,u]=a.split(":");r.push({cellId:h,key:u,before:l,after:c})}}return r}commit(t,e,n=""){if(!Array.isArray(e)||e.length===0)throw new Error("commit requires at least one change");for(const r of e)if(!r.cellId||!r.key)throw new Error("each change must have cellId and key");const s=new Rs(D(this,je),t,e,n);return D(this,Be).set(s.hash,s),Ht(this,je,s.hash),s}revert(t,e){const n=D(this,Be).get(t);if(!n)throw new Error(`commit ${t} not found`);if(n.changes.length===0)throw new Error("cannot revert empty commit");n.buildRevert(e);const s=new Rs(D(this,je),e,[...n.changes].map(r=>({cellId:r.cellId,key:r.key,oldValue:r.newValue,newValue:r.oldValue})),`revert: ${n.message||n.hash.slice(0,8)}`);return D(this,Be).set(s.hash,s),Ht(this,je,s.hash),s}applyExternal(t){if(D(this,Be).has(t.hash))return D(this,Be).get(t.hash);if(t.parentHash&&!D(this,Be).has(t.parentHash))throw new Error(`missing parent ${t.parentHash} — cannot apply ${t.hash}`);const e=new Rs(t.parentHash,t.authorId,t.changes,t.message,t.timestamp);return D(this,Be).set(t.hash,e),t.parentHash===D(this,je)&&Ht(this,je,t.hash),e}verify(){for(const t of D(this,Be).values()){if(uu(t.parentHash,t.authorId,t.changes,t.timestamp)!==t.hash)return{valid:!1,broken:t.hash};if(t.parentHash&&!D(this,Be).has(t.parentHash))return{valid:!1,broken:t.hash,reason:"missing-parent"}}return{valid:!0}}}Be=new WeakMap,je=new WeakMap;const de=Object.freeze({SOLAR:"solar",WIND:"wind",HYDRO:"hydro",MINERAL:"mineral",RARE_EARTH:"rare_earth",BIOLOGICAL:"biological",FISHERY:"fishery",GEOTHERMAL:"geothermal"});Wn.OCEAN+"",de.FISHERY+"",de.WIND+"",Wn.COAST+"",de.FISHERY+"",de.WIND+"",de.SOLAR+"",Wn.DESERT+"",de.SOLAR+"",de.RARE_EARTH+"",de.MINERAL+"",Wn.PLAINS+"",de.WIND+"",de.MINERAL+"",de.BIOLOGICAL+"",de.SOLAR+"",Wn.FOREST+"",de.BIOLOGICAL+"",de.HYDRO+"",de.WIND+"",Wn.MOUNTAIN+"",de.MINERAL+"",de.RARE_EARTH+"",de.GEOTHERMAL+"",de.WIND+"",de.HYDRO+"",Wn.ARCTIC+"",de.MINERAL+"",de.WIND+"",Wn.JUNGLE+"",de.BIOLOGICAL+"",de.HYDRO+"",de.SOLAR+"",Wn.TUNDRA+"",de.MINERAL+"",de.GEOTHERMAL+"",de.WIND+"";(async()=>{const i=await nv(),t=new Sv;window._worldHistory=t;let e=!1;function n({peerCount:S}={}){document.querySelectorAll(".ipfs-dot").forEach(v=>{v.className="ipfs-dot green"}),document.querySelectorAll("#ipfs-label").forEach(v=>{v.textContent=`P2P · ${i.shortId}`}),S!==void 0&&document.querySelectorAll("#ipfs-peers").forEach(v=>{S>0?(v.textContent=`${S} peer${S!==1?"s":""}`,v.style.color="rgba(120,255,160,0.7)"):e?(v.textContent="· searching…",v.style.color="rgba(255,200,80,0.7)"):v.textContent=""})}n({peerCount:0}),we.addEventListener("status",S=>n(S.detail)),we.addEventListener("commit",S=>{try{t.applyExternal(S.detail.commit)}catch{}});const s=document.getElementById("lobby"),r=document.getElementById("loading"),o=document.getElementById("load-fill"),a=document.getElementById("load-text"),l=document.getElementById("hud"),c=document.getElementById("click-to-start"),h=document.getElementById("enter-btn"),u=document.getElementById("username"),d=document.getElementById("room-name");!i.isNew&&i.displayName&&(u.value=i.displayName),d&&(d.value=dv());const f=document.getElementById("id-fingerprint");f&&(f.textContent=i.isNew?"New identity generated":`Identity · ${i.shortId}`),function(){const v=document.getElementById("lobby-avatar-grid");if(!v)return;const w=parseInt(localStorage.getItem("spaceAvatarId")??"0",10),N=T=>"#"+T.toString(16).padStart(6,"0");Zi.forEach(T=>{const b=N(T.skin),O=N(T.hair),E=N(T.outfit),y=N(T.accent),C=document.createElement("div");C.className="lav-chip"+(T.id===w?" lav-active":""),C.dataset.id=String(T.id),C.title=T.label,C.innerHTML=`<svg viewBox="0 0 60 82" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="30" cy="16" rx="17" ry="14" fill="${O}"/>
        <circle cx="30" cy="22" r="13" fill="${b}"/>
        <ellipse cx="17.5" cy="22" rx="3.5" ry="4.5" fill="${b}"/>
        <ellipse cx="42.5" cy="22" rx="3.5" ry="4.5" fill="${b}"/>
        <circle cx="25" cy="21" r="2.8" fill="${y}"/><circle cx="35" cy="21" r="2.8" fill="${y}"/>
        <circle cx="25" cy="21" r="1.6" fill="#111"/><circle cx="35" cy="21" r="1.6" fill="#111"/>
        <rect x="26.5" y="34" width="7" height="5" rx="2" fill="${b}"/>
        <rect x="14" y="39" width="32" height="24" rx="6" fill="${E}"/>
        <rect x="22" y="44" width="16" height="5" rx="2" fill="${y}" opacity="0.75"/>
        <rect x="5" y="40" width="10" height="20" rx="5" fill="${E}"/>
        <rect x="45" y="40" width="10" height="20" rx="5" fill="${E}"/>
        <rect x="16" y="62" width="11" height="14" rx="4" fill="${E}"/>
        <rect x="33" y="62" width="11" height="14" rx="4" fill="${E}"/>
      </svg>`,C.addEventListener("click",()=>{v.querySelectorAll(".lav-chip").forEach(k=>k.classList.remove("lav-active")),C.classList.add("lav-active"),localStorage.setItem("spaceAvatarId",String(T.id))}),v.appendChild(C)})}();let g=null;const _=document.getElementById("active-rooms"),m=document.getElementById("active-rooms-list");vv(S=>{if(!(!_||!m)){if(S.length===0){_.style.display="none";return}_.style.display="block",m.innerHTML=S.slice(0,5).map(v=>{const w=v.roomName==="main"?"main (public)":v.roomName,N=`${v.count} ${v.count===1?"person":"people"}`;return`<button class="lobby-room-chip" data-room="${v.roomName}">
        <span class="room-chip-dot"></span>
        <span class="room-chip-name">${w}</span>
        <span class="room-chip-count">${N}</span>
      </button>`}).join(""),m.querySelectorAll(".lobby-room-chip").forEach(v=>{v.addEventListener("click",()=>{d&&(d.value=v.dataset.room)})})}}).then(S=>{g=S}),u==null||u.addEventListener("keydown",S=>{S.key==="Enter"&&p()}),d==null||d.addEventListener("keydown",S=>{S.key==="Enter"&&p()}),h==null||h.addEventListener("click",p);function p(){const S=u.value.trim();if(!S){u.focus(),u.style.borderColor="#f55";return}u.style.borderColor="",i.setName(S),d!=null&&d.value.trim()&&fv(d.value.trim()),g==null||g(),g=null,window._spaceUsername=S,s.style.display="none",r.classList.add("visible");const{scene:v,camera:w,renderer:N,onShipLoaded:T}=u_((b,O)=>{o.style.width=b+"%",a.textContent=O});T(()=>{var Pe,ie,tn,en,Tn,Yi,Js;r.classList.remove("visible"),l.classList.add("visible"),c.classList.remove("hidden");const{meshes:b,screens:O}=d_(v),{openScreen:E,isOpen:y}=V_(),C=parseInt(localStorage.getItem("spaceAvatarId")??"0",10),k=new tv(X=>z==null?void 0:z.navigate(X)),H=document.getElementById("presence-panel");H&&H.classList.add("pp-visible"),k.setSelf(S,C,"OUTSIDE","available");const z=B_(v,w,N,X=>{wv(X),k.updateSelfZone(X)},X=>{we.setAvatar(X),k.setSelf(S,X,k._self.zone,j)});let j="available";const Y=document.getElementById("status-btn"),et=document.getElementById("status-menu");Y&&et&&(rl.forEach(X=>{const pt="#"+X.color.toString(16).padStart(6,"0"),Mt=document.createElement("div");Mt.className="sm-opt"+(X.id===j?" sm-active":""),Mt.dataset.status=X.id,Mt.innerHTML=`<span class="sm-dot" style="background:${pt};box-shadow:0 0 4px ${pt}40"></span>${X.label}`,Mt.addEventListener("click",qt=>{qt.stopPropagation(),j=X.id,Y.innerHTML=`<span class="sm-dot" style="background:${pt};box-shadow:0 0 4px ${pt}40;display:inline-block;vertical-align:middle;width:8px;height:8px;border-radius:50%;margin-right:5px"></span>${X.label.replace(/^\S+\s/,"")}`,z.setStatus(X.id),k.updateSelfStatus(X.id),we.setStatus(X.id),et.querySelectorAll(".sm-opt").forEach(_e=>_e.classList.toggle("sm-active",_e.dataset.status===X.id)),et.classList.remove("sm-open")}),et.appendChild(Mt)}),Y.addEventListener("click",X=>{X.stopPropagation(),et.classList.toggle("sm-open")}),document.addEventListener("click",()=>et.classList.remove("sm-open"))),document.querySelectorAll(".vtbtn").forEach(X=>{X.addEventListener("click",pt=>{pt.stopPropagation(),mt(),z.setView(X.dataset.view),X.dataset.view==="first"&&document.pointerLockElement!==N.domElement&&N.domElement.requestPointerLock()})});let J=!1;function mt(){J||(J=!0,c.classList.add("hidden"))}document.addEventListener("pointerlockchange",()=>{document.pointerLockElement===N.domElement&&mt()}),c.addEventListener("click",mt);const yt=new Set(["KeyW","KeyA","KeyS","KeyD"]),Tt=new Set([...yt,"ArrowUp","ArrowDown","ArrowLeft","ArrowRight"]);document.addEventListener("keydown",X=>{Tt.has(X.code)&&(mt(),yt.has(X.code)&&z.getMode()==="first"&&document.pointerLockElement!==N.domElement&&N.domElement.requestPointerLock())});const q=new Yg,lt=new _t,F=new ci(new P(0,1,0),0),Z=new P;N.domElement.addEventListener("click",X=>{if(y()||document.pointerLockElement===N.domElement||z.isDragMoved())return;mt(),lt.x=X.clientX/window.innerWidth*2-1,lt.y=-(X.clientY/window.innerHeight)*2+1,q.setFromCamera(lt,w);const pt=q.intersectObjects(b);if(pt.length>0){E(pt[0].object.userData.screen);return}q.ray.intersectPlane(F,Z)&&z.navigate({x:Math.max(-65,Math.min(65,Z.x)),z:Math.max(-65,Math.min(65,Z.z))})});const K=new J_,$=document.getElementById("voice-btn"),ct=new Map,wt=new Map;we.addEventListener("peer:join",X=>{const{peerId:pt,username:Mt,presetId:qt}=X.detail;if(wt.set(pt,Mt),ct.has(pt))return;const _e=qt??Ev(pt),ke=Wh(Mt,_e);v.add(ke),ct.set(pt,ke),ih(l,ct.size+1),k.addPeer(pt,Mt,_e),z.peerJoin(pt,Mt)}),we.addEventListener("peer:move",X=>{const{peerId:pt,pos:Mt}=X.detail,qt=ct.get(pt);if(k.movePeer(pt,Mt.x,Mt.z),qt){const _e=qt.position.clone();if(qt.position.lerp(new P(Mt.x,Mt.y??0,Mt.z),.6),Mt.ry!==void 0){let ke=Mt.ry-qt.rotation.y;for(;ke>Math.PI;)ke-=Math.PI*2;for(;ke<-Math.PI;)ke+=Math.PI*2;qt.rotation.y+=ke*.25}_e.distanceTo(qt.position)>.008&&(qt.userData.isMoving=!0,clearTimeout(qt.userData._stopTimer),qt.userData._stopTimer=setTimeout(()=>{qt.userData.isMoving=!1},180))}z.peerMove(pt,Mt.x,Mt.z,wt.get(pt)??pt.slice(-4))}),we.addEventListener("peer:leave",X=>{const pt=ct.get(X.detail.peerId);pt&&(v.remove(pt),ct.delete(X.detail.peerId),ih(l,ct.size+1)),K.removePeer(X.detail.peerId),k.removePeer(X.detail.peerId),z.peerLeave(X.detail.peerId),wt.delete(X.detail.peerId)}),we.addEventListener("peer:avatar",X=>{const{peerId:pt,presetId:Mt}=X.detail,qt=ct.get(pt),_e=wt.get(pt)??pt.slice(-4);qt&&Yh(qt,_e,Mt),k.updatePeerPreset(pt,Mt)}),we.addEventListener("peer:status",X=>{const{peerId:pt,status:Mt}=X.detail,qt=ct.get(pt);qt&&Xh(qt,Mt),k.updatePeerStatus(pt,Mt)}),we.addEventListener("peer:talking",X=>{const{peerId:pt,talking:Mt}=X.detail,qt=ct.get(pt);qt&&(qt.userData._isTalking=Mt)});let Bt=performance.now();(function X(){requestAnimationFrame(X);const pt=performance.now(),Mt=Math.min((pt-Bt)/1e3,.1);Bt=pt;const qt=pt/1e3;ct.forEach((_e,ke)=>{$h(_e,_e.userData.isMoving??!1,Mt),Zh(_e,_e.userData._isTalking??!1,qt)}),z.setSelfTalking(K.isTalking("self"),qt)})(),we.start(S,C,j),e=!0,n({peerCount:0}),window._sync=we,window._voice=K;const L=({active:X,muted:pt}={})=>{$&&(X?pt?($.textContent="🔇 Muted",$.className="hud-side-btn voice-muted"):($.textContent="🎙 Live",$.className="hud-side-btn voice-active"):($.textContent="🎙 Voice",$.className="hud-side-btn"))};if(K.onStateChange(L),L({active:!1,muted:!1}),K.onTalkChange(X=>{z.setTalkingPeers(X)}),K.onSelfTalkChange(X=>{we.broadcastTalking(X)}),$){let X=!1;$.addEventListener("click",async pt=>{if(pt.stopPropagation(),K.active){K.toggleMute();return}if(X)return;X=!0,$.textContent="⏳ Connecting…";const Mt=await K.start(we);if(X=!1,!Mt){$.textContent="🚫 No mic",$.className="hud-side-btn";return}L({active:K.active,muted:K.muted})})}setInterval(()=>{const X=z.getPosition(),pt=z.getRotation();we.move(X.x,X.y,X.z,pt.y),K.update(X,ct)},50);const Zt=document.getElementById("chat-toggle"),Gt=document.getElementById("chat-panel"),he=document.getElementById("chat-close"),Ct=document.getElementById("chat-input"),te=document.getElementById("chat-send"),Xt=document.getElementById("chat-messages"),Wt=document.getElementById("chat-badge");let me=0;const R=document.getElementById("mb-chat-badge");function x(){var X;Gt.classList.add("open"),Zt.classList.add("open"),(X=document.getElementById("mb-chat-btn"))==null||X.classList.add("mb-active"),me=0,Wt.textContent="",Wt.classList.remove("visible"),R&&(R.textContent="",R.classList.remove("visible")),Ct.focus()}function W(){var X;Gt.classList.remove("open"),Zt.classList.remove("open"),(X=document.getElementById("mb-chat-btn"))==null||X.classList.remove("mb-active")}Zt.addEventListener("click",X=>{X.stopPropagation(),Gt.classList.contains("open")?W():x()}),he.addEventListener("click",X=>{X.stopPropagation(),W()}),(Pe=document.getElementById("mb-chat-btn"))==null||Pe.addEventListener("click",X=>{X.stopPropagation(),Gt.classList.contains("open")?W():x()});function nt(){const X=Ct.value.trim();X&&(we.sendChat(X),Ct.value="")}te.addEventListener("click",X=>{X.stopPropagation(),nt()}),Ct.addEventListener("keydown",X=>{X.key==="Enter"&&nt()}),Gt.addEventListener("click",X=>X.stopPropagation());function st({from:X,username:pt,text:Mt,ts:qt}){const _e=X===we.id,ke=new Date(qt).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),Ze=document.createElement("div");if(Ze.className="chat-msg",Ze.innerHTML=`
          <div class="chat-msg-meta">
            <span class="chat-msg-name${_e?" self":""}">${pt}</span>
            <span class="chat-msg-time">${ke}</span>
          </div>
          <div class="chat-msg-body">${Mt.replace(/</g,"&lt;")}</div>
        `,Xt.appendChild(Ze),Xt.scrollTop=Xt.scrollHeight,!Gt.classList.contains("open")&&!_e){me++;const An=me>9?"9+":String(me);Wt.textContent=An,Wt.classList.add("visible"),R&&(R.textContent=An,R.classList.add("visible"))}}function it(X){const pt=document.createElement("div");pt.className="chat-system",pt.textContent=X,Xt.appendChild(pt),Xt.scrollTop=Xt.scrollHeight}const Rt=new Map;we.addEventListener("chat",X=>st(X.detail)),we.addEventListener("peer:join",X=>{Rt.set(X.detail.peerId,X.detail.username),it(`${X.detail.username} joined`)}),we.addEventListener("peer:leave",X=>{const pt=Rt.get(X.detail.peerId)??"Someone";Rt.delete(X.detail.peerId),it(`${pt} left`)});const ut=new Z_,dt=new q_,Yt=new X_(S);ut.createReality(Yt),dt.setNode(S,Ss.PUBLIC),(ie=document.getElementById("nm-open-btn"))==null||ie.addEventListener("click",X=>{X.stopPropagation(),jc(ut,dt,S)});const rt=document.getElementById("invite-modal"),Et=document.getElementById("invite-lock-input"),Jt=document.getElementById("invite-link-box"),Dt=document.getElementById("invite-link-text"),gt=document.getElementById("invite-room-name"),Pt=document.getElementById("invite-generate-btn"),zt=document.getElementById("invite-copy-btn"),ge=document.getElementById("invite-close-btn");let I="";const vt=()=>{gt.textContent=`Room: ${we.roomName}`,Et.value="",Jt.style.display="none",zt.style.display="none",Pt.style.display="",Pt.textContent="Generate link",rt.style.display="flex",setTimeout(()=>Et.focus(),50)};(tn=document.getElementById("invite-btn"))==null||tn.addEventListener("click",X=>{X.stopPropagation(),vt()}),ge==null||ge.addEventListener("click",()=>{rt.style.display="none"}),rt==null||rt.addEventListener("click",X=>{X.target===rt&&(rt.style.display="none")}),Pt==null||Pt.addEventListener("click",async()=>{Pt.textContent="Generating…",Pt.disabled=!0;try{const{link:X}=await ov({roomId:we.roomName,lockCode:Et.value.trim(),node:we.nodeUrl??void 0});I=X,Dt.textContent=X,Jt.style.display="block",zt.style.display="",Pt.style.display="none",navigator.clipboard.writeText(X).catch(()=>{})}catch(X){console.error("[invite] link generation failed",X),Pt.textContent="Generate link"}finally{Pt.disabled=!1}}),zt==null||zt.addEventListener("click",async()=>{try{await navigator.clipboard.writeText(I);const X=zt.textContent;zt.textContent="✅ Copied!",setTimeout(()=>{zt.textContent=X},2e3)}catch{prompt("Copy this link:",I)}}),Dt==null||Dt.addEventListener("click",()=>zt==null?void 0:zt.click()),Et==null||Et.addEventListener("keydown",X=>{X.key==="Enter"&&(Pt==null||Pt.click())}),(en=document.getElementById("mb-avatar-btn"))==null||en.addEventListener("click",()=>{var X;return(X=document.getElementById("avatar-btn"))==null?void 0:X.click()}),(Tn=document.getElementById("mb-nm-btn"))==null||Tn.addEventListener("click",X=>{X.stopPropagation(),jc(ut,dt,S)}),(Yi=document.getElementById("mb-voice-btn"))==null||Yi.addEventListener("click",X=>{X.stopPropagation(),$==null||$.click()}),(Js=document.getElementById("mb-status-btn"))==null||Js.addEventListener("click",X=>{X.stopPropagation(),Y==null||Y.click()}),K.onStateChange(({active:X,muted:pt}={})=>{const Mt=document.getElementById("mb-voice-btn");Mt&&(X?pt?(Mt.innerHTML="🔇",Mt.className="mb-btn mb-voice-active",Mt.style.color="#ff6b6b"):(Mt.innerHTML="🎙",Mt.className="mb-btn mb-voice-active",Mt.style.color=""):(Mt.innerHTML="🎙",Mt.className="mb-btn"))});const Q=document.getElementById("screen-hint"),tt=document.getElementById("screen-hint-name");let at=null,Nt=null;document.addEventListener("keydown",X=>{if(X.code==="KeyE"&&at&&!y()&&E(at),X.code==="KeyF"&&Nt){const pt=Nt.def.id,Mt=pt==="main-left"||pt==="main-right",qt=Zn(Mt?"main-left":pt);Mt&&Zn("main-right"),ne(Nt.def.label,qt)}});function ne(X,pt){let Mt=document.getElementById("door-action-hint");Mt||(Mt=document.createElement("div"),Mt.id="door-action-hint",Mt.style.cssText=`
            position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);
            background:rgba(0,0,0,0.7);border:1px solid rgba(255,255,255,0.2);
            padding:10px 22px;border-radius:20px;font-size:0.9rem;color:#fff;
            pointer-events:none;z-index:13;opacity:0;transition:opacity 0.2s;
          `,document.body.appendChild(Mt)),Mt.textContent=`${X} ${pt?"opened":"closed"}`,Mt.style.opacity="1",clearTimeout(Mt._t),Mt._t=setTimeout(()=>{Mt.style.opacity="0"},1500)}const ae=new Set;setInterval(()=>{var ke;if(y())return;const X=z.getPosition();let pt=null,Mt=4;O.forEach(Ze=>{const An=X.x-Ze.position.x,Ei=X.z-Ze.position.z,M=Math.sqrt(An*An+Ei*Ei);M<Mt&&(Mt=M,pt=Ze)}),at=pt,Q&&(Q.style.display=pt?"flex":"none",pt&&tt&&(tt.textContent=pt.label)),Pr.forEach(Ze=>{const An=X.x-Ze.hinge.x,Ei=X.z-Ze.hinge.z,M=Math.sqrt(An*An+Ei*Ei),U=Ze.id;M<2.2&&!xs(U)?(Zn(U),ae.add(U),U==="main-left"&&(xs("main-right")||Zn("main-right"),ae.add("main-right")),U==="main-right"&&(xs("main-left")||Zn("main-left"),ae.add("main-left"))):M>3.5&&ae.has(U)&&xs(U)&&(Zn(U),ae.delete(U),U==="main-left"&&(xs("main-right")&&Zn("main-right"),ae.delete("main-right")),U==="main-right"&&(xs("main-left")&&Zn("main-left"),ae.delete("main-left")))});const qt=Kh(X,2.8);Nt=qt;const _e=document.getElementById("door-proximity-hint");if(_e)if(qt&&!pt){const Ze=(ke=qt.state)!=null&&ke.open?"Close":"Open";_e.style.display="flex",_e.querySelector("#door-hint-name").textContent=`${Ze} ${qt.def.label}`}else _e.style.display="none"},150)})}})();function Ev(i){let t=0;for(let e=0;e<i.length;e++)t=t*31+i.charCodeAt(e)|0;return Math.abs(t)%Zi.length}function ih(i,t){var n;const e=(n=i==null?void 0:i.querySelector)==null?void 0:n.call(i,"#online-count");e&&(e.textContent=`● ${t} aboard`)}const sh={OUTSIDE:{color:"#88cc66",desc:"Outside the building"},LOBBY:{color:"#ffffff",desc:"Reception & Entrance"},OPS:{color:"#ffaa44",desc:"Operations & Technical Support"},FUN:{color:"#44ffaa",desc:"Chill, Social & Games"},DESIGN:{color:"#ff6ba0",desc:"UI/UX, Design & 3D"},ENGINEERING:{color:"#44aaff",desc:"Development & Engineering"},"":{color:"#ffffff",desc:""}};function wv(i){const t=document.getElementById("zone-name"),e=document.getElementById("zone-desc"),n=sh[i]||sh[""];t&&(t.textContent=i,t.style.color=n.color),e&&(e.textContent=n.desc),document.querySelectorAll(".map-zone").forEach(s=>{s.classList.toggle("active",s.dataset.zone===i)})}
