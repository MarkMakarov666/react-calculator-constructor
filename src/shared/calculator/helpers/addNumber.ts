export const addNumber = (
	value1: number,
	value2: number,
	isInteger: boolean,
	numbersAfterDot: number
) => {
	if (!isInteger) {
		return value1 + value2 * Math.pow(10, -1 * numbersAfterDot);
	}
	return value1 * 10 + value2;
};
