// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/array-dtype@v0.1.0-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/array-full@v0.1.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/complex-float64@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/complex-float32@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.1.1-esm/index.mjs";var l=new s(1,0),n=new r(1,0);function o(s){var r,o;if(null===(r=t(s)))throw new TypeError(m("01B2f,Mm",s));return arguments.length>1&&(r=arguments[1]),o="complex128"===r?l:"complex64"===r?n:1,e(s.length,o,r)}export{o as default};
//# sourceMappingURL=index.mjs.map
