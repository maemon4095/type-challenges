type Last<T extends any[]> = T extends [...heads: any, infer X] ? X : never
