// spreadするとas constしたように推論できるっぽい
declare function PromiseAll<T extends any[]>(values: [...T]): PromiseAll<T>

// 配列もMapped Typeでよし
type PromiseAll<T> = Promise<{ [key in keyof T]: Awaited<T[key]> }>;