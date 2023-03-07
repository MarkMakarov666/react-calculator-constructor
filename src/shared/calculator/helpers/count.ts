import { Operations } from "shared/calculator/redux/calculator.slice";

export const count = (
	value1: number,
	value2: number,
	operation: Operations
) => {
	switch (operation) {
		case Operations.add:
			return value1 + value2;
		case Operations.subtract:
			return value1 - value2;
		case Operations.multiply:
			return value1 * value2;
		case Operations.divide:
			return value1 / value2;
	}
};
