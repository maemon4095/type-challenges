type First<T extends any[]> = T extends [infer X, ...rest: any] ? X : never
