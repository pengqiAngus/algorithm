// TypeScript 4.0 is recommended in this challenge
// Currying is the technique of converting a function that takes multiple arguments into a sequence of functions that each take a single argument.
// For example:

const add = (a: number, b: number) => a + b;
const three = add(1, 2);
function Currying<F extends (...args: any[]) => {}>(
  fn: F
): Fn<Parameters<F>, ReturnType<F>>;
function Currying(fn) {
  return function Curreied(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    } else {
      return (...newArgs) => {
        Curreied.apply(this, args.concat(newArgs));
      };
    }
  };
}
// 多个参数需要递归返回函数等再次调用，一个参数说明需要执行函数返回最终结果了
type Fn<Args, R> = Args extends [infer First]
  ? (P: First) => R
  : Args extends [any: infer First, ...rest: infer Rest]
  ? (p: First) => Fn<Rest, R>
  : never;
const curriedAdd = Currying(add);
const five = curriedAdd(2)(3);

// The function passed to Currying may have multiple arguments, you need to correctly type it.
// In this challenge, the curried function only accept one argument at a time. Once all the argument is assigned, it should return its result.
