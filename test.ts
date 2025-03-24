// Implement a generic MyReadonly2<T, K> which takes two type argument T and K.

// K specify the set of properties of T that should set to Readonly. When K is not provided, it should make all properties readonly just like the normal Readonly<T>.

// For example

interface Todo2 {
  title: string;

  description: string;

  completed: boolean;
}
// type MyReadonly2<T, K extends keyof T = keyof T> = Readonly<T> & Omit<T, K>; 
type MyReadonly2<T,K extends keyof T =keyof T> = {
   +readonly [S in K]: T[S]
} & {
    [S in keyof T as S extends K ? never : S]:T[S]
}
type ss = MyReadonly2<Todo2>;
const todo: MyReadonly2<Todo2, "title" | "description"> = {
  title: "Hey",

  description: "foobar",

  completed: false,
};

todo.title = "Hello"; // Error: cannot reassign a readonly property

todo.description = "barFoo"; // Error: cannot reassign a readonly property

todo.completed = true; // OK



