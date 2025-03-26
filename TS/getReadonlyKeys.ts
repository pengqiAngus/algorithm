// Implement a generic GetReadonlyKeys<T> that returns a union of the readonly keys of an Object.

// For example

interface Todo {
  readonly title: string;

  readonly description: string;

  completed: boolean;
}

type GetReadonlyKeys<T> = {
  [K in keyof T]-?: Equal<Pick<T, K>, Readonly<Pick<T, K>>> extends true
    ? K
    : never;
}[keyof T];

type Equal<T, K> = (<X>() => X extends K ? 1 : 2) extends <X>() => X extends T
  ? 1
  : 2
  ? true
  : false;

type Keys = GetReadonlyKeys<Todo>; // expected to be "title" | "description"
