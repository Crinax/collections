import { comparison } from "./comparison.operator";

export const eq = <T>(value: T) => comparison((el) => el === value);
