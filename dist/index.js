"use strict";var u=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var i=u(function(g,t){
var n=require('@stdlib/array-dtype/dist'),l=require('@stdlib/array-full/dist'),s=require('@stdlib/complex-float64/dist'),o=require('@stdlib/complex-float32/dist'),m=require('@stdlib/error-tools-fmtprodmsg/dist'),v=new s(1,0),p=new o(1,0);function f(e){var r,a;if(r=n(e),r===null)throw new TypeError(m('01B2f',e));return arguments.length>1&&(r=arguments[1]),r==="complex128"?a=v:r==="complex64"?a=p:a=1,l(e.length,a,r)}t.exports=f
});var y=i();module.exports=y;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
