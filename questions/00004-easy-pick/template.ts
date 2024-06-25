type MyPick<T, K extends keyof T> = {
    [key in (keyof T) & K]: T[key]
}
