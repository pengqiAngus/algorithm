// Implement the built-in ReturnType generic without using it.

// For example

// 用 infer 推断函数返回类型

const fn = (v: boolean) => {
  if (v) return 1;
  else return 2;
};


type MyReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : never; 
type a = MyReturnType<typeof fn>; // should be &quot;1 | 2&quot;