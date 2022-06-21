import { comparison } from "./comparison.operator";

export const le = (n: number) => comparison<number>((element) => element <= n);