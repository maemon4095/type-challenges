declare function Currying<F extends Function>(fn: F): Curryed<F>;

type Curryed<F> =
    F extends (...args: infer A) => infer R
    ? A["length"] extends 0 | 1
      ? F
      : A extends [infer H, ...infer AR]
        ? (arg: H) => Curryed<(...args: AR) => R>
        : never
    : never