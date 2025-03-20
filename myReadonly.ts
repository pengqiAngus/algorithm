// For example:
interface Todo {
  title: string;

  description: string;

  completed: boolean;
}
type myReadonly<T> = {
  readonly [K in keyof T]: T[k];
};
type myReadonly2<T, K extends keyof T> = {
  readonly [M in K]: T[M];
};
type myReadonly3<T, K extends keyof T> = {
  readonly [M in keyof Omit<T, K>]: T[M];
};
type myReadonly4<T, K extends keyof T = keyof T> = {
  readonly [P in K]: T[P];
} & {
  [M in keyof T as M extends K ? never : M]: T[M];
};
type a = myReadonly<Todo>;
type b = myReadonly2<Todo, "completed">;
type c = myReadonly3<Todo, "completed">;
type d = myReadonly4<Todo, "completed">;
