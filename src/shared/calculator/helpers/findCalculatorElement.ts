import { ItemTypes } from "constants/drop";

export const findCalculatorElement = (
	element: ItemTypes,
	array: ItemTypes[]
) => {
	return array.findIndex((item) => item === element) !== -1;
};
