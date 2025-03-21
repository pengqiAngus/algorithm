// Implement the built-in Pick<T, K> generic without using it.

// Constructs a type by picking the set of properties K from T

// For example:
interface Todo {
  title: string;

  description: string;

  completed: boolean;
}

type MyPick<T, K extends keyof T> = {
  [key in K]: T[key];
};

type TodoPick = MyPick<Todo, "title" | "completed">;

const todo: TodoPick = {
  title: "Clean room",
  completed: false,
};

type test<T> = {
  [k in keyof T]: T[k];
};

type test2 = test<Todo>;

const test2: test2 = {};
