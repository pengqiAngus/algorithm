type typeComputed<T> = T extends (...args: any[]) => infer P ? P : never;
declare function SimpleVue<D, C, M>(options: {
  data: (this: void) => D;
  computed: C & ThisType<{ [K in keyof C]: typeComputed<C[K]> }>;
  methods: M & ThisType<{ [K in keyof C]: typeComputed<C[K]> & M }>;
}): D & { [K in keyof C]: typeComputed<C[K]> } & M;

const instance = SimpleVue({
  data() {
    return {
      firstname: "Type",
      lastname: "Challenges",
      amount: 10,
    };
  },
  computed: {
    fullname() {
      return this.firstname + " " + this.lastname; // ✅ 正确访问 data 属性
    },
  },
  methods: {
    hi() {
      alert(this.fullname.toLowerCase()); // ✅ 访问计算属性
      this.anotherMethod(); // ✅ 调用其他方法
    },
    anotherMethod() {
      return this.amount * 2; // ✅ 访问 data 属性
    },
  },
});
