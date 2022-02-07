// eslint-disable-next-line @typescript-eslint/no-explicit-any

// Это сложное (если не супер сложное) задание
// Задача состоит в том что написать калькулято для натуральных чисел, но только на типах!
// Ниже приведена заготовка
// Хочется поддержки сложения и вычитания, если хочется еще челленджа, то деление и умножение
// Из-за ограничений глубины вычислений поддержать все натуральные числа не получится, это нормально

export type FIXME<L extends number, T extends any[] = []> = T extends { length: L } ? T : FIXME<L, [...T, any]>;
type Length<T extends any[]> = T extends { length: infer L } ? L : never;

type Add<A extends number, B extends number> = Length<[...FIXME<A>, ...FIXME<B>]>;
type Subtract<A extends number, B extends number> = FIXME<A> extends [...(infer U), ...FIXME<B>] ? Length<U> : never;

type TwoPlusFourTest = Add<2, 4>
type OnePlusOneTest = Add<1, 1>;
type TwoMinusOneTest = Subtract<2, 1>;
type FiveMinusThreeTest = Subtract<5, 3>;
