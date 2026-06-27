"use strict";var l=function(a,e){return function(){try{return e||a((e={exports:{}}).exports,e),e.exports}catch(r){throw e=0,r}}};var s=l(function(x,o){"use strict";var v=require("@stdlib/array-base-assert-contains").factory,m=require("@stdlib/array-dtype"),p=require("@stdlib/array-full"),f=require("@stdlib/complex-float64-ctor"),g=require("@stdlib/complex-float32-ctor"),y=require("@stdlib/array-dtypes"),n=require("@stdlib/array-base-join"),t=require("@stdlib/string-format"),d=new f(1,0),c=new g(1,0),i=y("numeric_and_generic"),u=v(i);function w(a){var e,r;if(e=m(a),e===null)throw new TypeError(t("invalid argument. First argument must be either an array, typed array, or complex typed array. Value: `%s`.",a));if(arguments.length>1){if(e=arguments[1],!u(e))throw new TypeError(t('invalid argument. Second argument must be one of the following: "%s". Value: `%s`.',n(i,'", "'),e))}else if(!u(e))throw new TypeError(t('invalid argument. First argument must have one of the following data types: "%s". Value: `%s`.',n(i,'", "'),e));return e==="complex128"?r=d:e==="complex64"?r=c:r=1,p(a.length,r,e)}o.exports=w});var h=s();module.exports=h;
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
