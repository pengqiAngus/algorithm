// Implement a generic DeepReadonly<T> which make every parameter of an object - and its sub-objects recursively - readonly.

// You can assume that we are only dealing with Objects in this challenge. Arrays, Functions, Classes and so on do not need to be taken into consideration. However, you can still challenge yourself by covering as many different cases as possible.

// For example:

type X = {
  x: {
    a: 1;

    b: "hi";
  };
  y: "hey";
  z: string[];
  v: ()=>void;
};

type Expected = {
  readonly x: {
    readonly a: 1;

    readonly b: "hi";
  };

  readonly y: "hey";
};

type DeepReadonly<T> = {
  readonly [K in keyof T]: T extends Array<infer U>? ReadonlyArray<DeepReadonly<U>>
    : T[K] extends Function
    ? T[K]
    : T[K] extends Object
    ? DeepReadonly<T[K]>
    : T[K];
};

type Todo = DeepReadonly<X>; // should be same as `Expected`

const a: Todo = {
  x: {
    a: 1,

    b: "hi",
  },
  y: "hey",
  z: [],
  v: () => {},
};
