import { CalculatorWidgets } from "constants/calculatorTypes";

export const findCalculatorElement = (
	element: CalculatorWidgets,
	array: CalculatorWidgets[]
) => {
	return array.findIndex((item) => item === element) !== -1;
};
