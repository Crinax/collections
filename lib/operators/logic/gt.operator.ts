import { comparison } from "./comparison.operator";

export const gt = (n: number) => comparison<number>((element) => element > n);
