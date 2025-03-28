// Implement a generic TupleToUnion<T> which covers the values of a tuple to its values union.
// For example
type Arr2 = ["1", "2", "3"];
type TupleToUnion2<T extends any[]> = T[number];
type Test2 = TupleToUnion2<Arr2>; // expected to be '1' | '2' | '3'
