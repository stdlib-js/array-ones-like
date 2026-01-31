"use strict";var u=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var i=u(function(g,t){"use strict";var n=require("@stdlib/array-dtype"),l=require("@stdlib/array-full"),s=require("@stdlib/complex-float64-ctor"),o=require("@stdlib/complex-float32-ctor"),m=require("@stdlib/string-format"),v=new s(1,0),p=new o(1,0);function f(e){var r,a;if(r=n(e),r===null)throw new TypeError(m("invalid argument. First argument must be either an array, typed array, or complex typed array. Value: `%s`.",e));return arguments.length>1&&(r=arguments[1]),r==="complex128"?a=v:r==="complex64"?a=p:a=1,l(e.length,a,r)}t.exports=f});var y=i();module.exports=y;
/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
//# sourceMappingURL=index.js.map
