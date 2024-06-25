type MyReadonly2<T, K extends keyof T = never> =  keyof T extends Exclude<keyof T, K> 
? { readonly [key in keyof T]: T[key] }
: Pick<T, Exclude<keyof T, K>> & { readonly [key in K]: T[key] }
