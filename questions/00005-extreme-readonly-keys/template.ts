type GetReadonlyKeys<T> ={
    [P in keyof T]-?: Eq<{ [Q in P]: T[P] }, { -readonly [Q in P]: T[P] }> extends true ? never : P
}[keyof T];

// ジェネリック関数にすることで共変性チェックとして可変性をチェックできる？
// https://stackoverflow.com/questions/49579094/typescript-conditional-types-filter-out-readonly-properties-pick-only-requir
type Eq<X, Y> =
    (<T>() => T extends X ? 1 : 2) extends (<T>() => T extends Y ? 1 : 2) ? true : false;
  