// @flow

type X = {
  foo: string,
  bar: {
    baz: number
  }
}

type Y = {
  foo: string,
  bazz: {
    bazz: number
  }
}

// Union example
var x = { foo: 'hoge', bar: { baz: 1 } };
var foo: X | Y = x; // No error

var x = { foo: 'hoge', bazz: { bazz: 1 } };
var foo: X | Y = x; // No error

var x = { foo: 'hoge', bar: { baz: 1 }, hoge: { hoge: 'a' } };
var foo: X | Y = x; // No error :(

var x = { foo: 'hoge', hoge: { bazz: 1 } };
var foo: X | Y = x; // Flow will error here

 // 28: var foo: X | Y = x; // Flow will error here
                      // ^ object literal. This type is incompatible with
 // 19: var foo: X | Y = x; // No error
              // ^^^^^ union: X | Y
  // Member 1:
   // 19: var foo: X | Y = x; // No error
                // ^ X
  // Error:
   // 19: var foo: X | Y = x; // No error
                // ^ property `bar`. Property not found in
   // 28: var foo: X | Y = x; // Flow will error here
                        // ^ object literal
  // Member 2:
   // 19: var foo: X | Y = x; // No error
                    // ^ Y
  // Error:
   // 19: var foo: X | Y = x; // No error
                    // ^ property `bazz`. Property not found in
   // 28: var foo: X | Y = x; // Flow will error here
                        // ^ object literal
