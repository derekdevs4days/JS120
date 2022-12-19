/*
What will the following code log to the console?
Explain why it logs that value.
Try to answer without running the code.
*/
let qux = { foo: 1 };
let baz = Object.create(qux);
console.log(baz.foo + qux.foo);

/*
2
Naturally, qux.foo returns 1 since qux has a foo property with that value. However, baz doesn't have its "own" copy of the foo property. Thus, JavaScript searches the prototype chain for a foo property and finds the property in qux. Thus, baz.foo is also 1, and the sum of the two values is 2.

*/