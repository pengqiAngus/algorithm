// 今天2个题 1个练练元组length 大家之前疑惑的问题。第二个再加深下infer的玩法）

// Implement a generic Pop<T> that takes an Array T and returns an Array without it's last element.

// For example

type arr1 = ["a", "b", "c", "d"];

type arr2 = [3, 2, 1];
type Pop<T> = T extends [...infer Rest, infer Last] ? Rest : never;

type re1 = Pop<arr1>; // expected to be ['a', 'b', 'c']

type re2 = Pop<arr2>; // expected to be [3, 2]

// Extra: Similarly, can you implement Shift, Push and Unshift as well?

// ----分割线---

// For given a tuple, you need create a generic Length, pick the length of the tuple

// For example:

type Length<T extends readonly any[]> = T extends { length: infer L }
  ? L
  : never;

type tesla = ["tesla", "model 3", "model X", "model Y"];

type spaceX = [
  "FALCON 9",
  "FALCON HEAVY",
  "DRAGON",
  "STARSHIP",
  "HUMAN SPACEFLIGHT"
];

type teslaLength = Length<tesla>; // expected 4

type spaceXLength = Length<spaceX>; // expected 5
