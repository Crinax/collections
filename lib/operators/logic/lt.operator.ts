import { comparison } from "./comparison.operator";

export const lt = (n: number) => comparison<number>((el) => el < n);
