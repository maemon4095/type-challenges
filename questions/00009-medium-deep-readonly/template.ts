type DeepReadonly<T> =
    T extends (...args: infer A) => infer R
    ? (...args: DeepReadonly<A>) => DeepReadonly<R> 
    : { readonly [key in keyof T]: DeepReadonly<T[key]> }
