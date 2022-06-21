import { comparison } from "./comparison.operator";

export const ge = (n: number) => comparison<number>((element) => element >= n);