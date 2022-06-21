import { ContainsLength } from "../../common/types/contains-length.type";

export const length = <T extends ContainsLength>(element: T) => element.length;