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

// Intersection example
var x = { foo: 'hoge', bar: { baz: 1 }, bazz: { bazz: 1 } };
var foo: X & Y = x;

var x = { foo: 'hoge', bar: { baz: 1 }, bazz: { bazzz: 1 } };
var foo: X & Y = x; // Flow will error here.

 // 12:   bazz: {
             // ^ property `bazz`. Property not found in
 // 21: var x = { foo: 'hoge', bar: { baz: 1 }, bazz: { bazzz: 1 } };
                                                   // ^^^^^^^^^^^^ object literal
