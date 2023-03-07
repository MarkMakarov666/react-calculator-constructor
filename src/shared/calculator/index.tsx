import React from "react";
import { CalculatorWrapper } from "shared/calculator/styled";
import { DisplayWidget } from "shared/calculator/components/display-widget";
import { FunctionalWidget } from "shared/calculator/components/functional-widget";
import { KeypadWidget } from "shared/calculator/components/keypad-widget";
import { ResultWidget } from "shared/calculator/components/result-widget";
import { useAppSelector } from "redux/hooks";
import { Operations } from "shared/calculator/redux/calculator.slice";

export interface ValueObject {
	value: number;
	isInteger: boolean;
	numbersAfterDot: number;
}

export const Calculator = () => {
	const {
		value1,
		value2,
		isOperationPressed,
		isKeypadPressed,
		isIntegerValue1,
		isIntegerValue2,
		numbersAfterDotValue1,
		numbersAfterDotValue2,
	} = useAppSelector((state) => state.calculator);
	const operationsName = ["/", "x", "-", "+"];
	const operationsValue = [
		Operations.divide,
		Operations.multiply,
		Operations.subtract,
		Operations.add,
	];

	const copyValue1: ValueObject = {
		value: value1,
		isInteger: isIntegerValue1,
		numbersAfterDot: numbersAfterDotValue1,
	};
	const copyValue2: ValueObject = {
		value: value2,
		isInteger: isIntegerValue2,
		numbersAfterDot: numbersAfterDotValue2,
	};
	const value = isOperationPressed
		? isKeypadPressed
			? copyValue2
			: copyValue1
		: copyValue1;

	return (
		<CalculatorWrapper>
			<DisplayWidget
				value={value.value}
				numbersAfterDot={value.numbersAfterDot}
				isInteger={value.isInteger}
			/>
			<FunctionalWidget
				buttonsName={operationsName}
				buttonsValue={operationsValue}
			/>
			<KeypadWidget />
			<ResultWidget />
		</CalculatorWrapper>
	);
};
