/*
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

import Complex128Array = require( '@stdlib/array-complex128' );
import Complex64Array = require( '@stdlib/array-complex64' );
import onesLike = require( './index' );


// TESTS //

// The function returns an array or typed array...
{
	onesLike( [ 0, 0 ] ); // $ExpectType number[]
	onesLike( new Float64Array( [ 0, 0 ] ) ); // $ExpectType Float64Array
	onesLike( new Float32Array( [ 0, 0 ] ) ); // $ExpectType Float32Array
	onesLike( new Complex128Array( [ 0, 0 ] ) ); // $ExpectType Complex128Array
	onesLike( new Complex64Array( [ 0, 0 ] ) ); // $ExpectType Complex64Array
	onesLike( new Int32Array( [ 0, 0 ] ) ); // $ExpectType Int32Array
	onesLike( new Int16Array( [ 0, 0 ] ) ); // $ExpectType Int16Array
	onesLike( new Int8Array( [ 0, 0 ] ) ); // $ExpectType Int8Array
	onesLike( new Uint32Array( [ 0, 0 ] ) ); // $ExpectType Uint32Array
	onesLike( new Uint16Array( [ 0, 0 ] ) ); // $ExpectType Uint16Array
	onesLike( new Uint8Array( [ 0, 0 ] ) ); // $ExpectType Uint8Array
	onesLike( new Uint8ClampedArray( [ 0, 0 ] ) ); // $ExpectType Uint8ClampedArray
	onesLike( [ 'a', 'b', 'c' ] ); // $ExpectType number[]

	onesLike( [ 0, 0 ], 'float64' ); // $ExpectType Float64Array
	onesLike( [ 0, 0 ], 'float32' ); // $ExpectType Float32Array
	onesLike( [ 0, 0 ], 'complex128' ); // $ExpectType Complex128Array
	onesLike( [ 0, 0 ], 'complex64' ); // $ExpectType Complex64Array
	onesLike( [ 0, 0 ], 'int32' ); // $ExpectType Int32Array
	onesLike( [ 0, 0 ], 'int16' ); // $ExpectType Int16Array
	onesLike( [ 0, 0 ], 'int8' ); // $ExpectType Int8Array
	onesLike( [ 0, 0 ], 'uint32' ); // $ExpectType Uint32Array
	onesLike( [ 0, 0 ], 'uint16' ); // $ExpectType Uint16Array
	onesLike( [ 0, 0 ], 'uint8' ); // $ExpectType Uint8Array
	onesLike( [ 0, 0 ], 'uint8c' ); // $ExpectType Uint8ClampedArray
	onesLike( [ 0, 0 ], 'generic' ); // $ExpectType number[]
	onesLike( new Int32Array( [ 0, 0 ] ), 'generic' ); // $ExpectType number[]
	onesLike( [ 'a', 'b', 'c' ], 'generic' ); // $ExpectType number[]
	onesLike( [ 'a', 'b', 'c' ], 'float64' ); // $ExpectType Float64Array
}

// The compiler throws an error if the function is not provided an array or typed array for the first argument...
{
	onesLike( '5' ); // $ExpectError
	onesLike( 5 ); // $ExpectError
	onesLike( false ); // $ExpectError
	onesLike( true ); // $ExpectError
	onesLike( null ); // $ExpectError
	onesLike( undefined ); // $ExpectError
	onesLike( {} ); // $ExpectError
	onesLike( ( x: number ): number => x ); // $ExpectError

	onesLike( '5', 'float32' ); // $ExpectError
	onesLike( 5, 'float32' ); // $ExpectError
	onesLike( false, 'float32' ); // $ExpectError
	onesLike( true, 'float32' ); // $ExpectError
	onesLike( null, 'float32' ); // $ExpectError
	onesLike( undefined, 'float32' ); // $ExpectError
	onesLike( {}, 'float32' ); // $ExpectError
	onesLike( ( x: number ): number => x, 'float32' ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is an unrecognized/unsupported data type...
{
	onesLike( [ 0, 0 ], '10' ); // $ExpectError
	onesLike( [ 0, 0 ], 10 ); // $ExpectError
	onesLike( [ 0, 0 ], false ); // $ExpectError
	onesLike( [ 0, 0 ], true ); // $ExpectError
	onesLike( [ 0, 0 ], null ); // $ExpectError
	onesLike( [ 0, 0 ], [] ); // $ExpectError
	onesLike( [ 0, 0 ], {} ); // $ExpectError
	onesLike( [ 0, 0 ], ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	onesLike( [ 0, 0 ], 'float64', 1 ); // $ExpectError
}
