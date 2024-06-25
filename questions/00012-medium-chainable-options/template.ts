type Chainable<T extends object = {}> = {
  option<K extends string, V>(key: OptionOf<K, T>, value: V): Chainable<Omit<T, K> & { [k in K]: V }>
  get(): T
}

type OptionOf<K, T>  = K extends  keyof T ? never: K 