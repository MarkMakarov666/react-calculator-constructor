import React, { useEffect } from "react";
import { CalculatorWrapper } from "shared/calculator/styled";
import { DisplayWidget } from "shared/calculator/components/display-widget";
import { FunctionalWidget } from "shared/calculator/components/functional-widget";
import { KeypadWidget } from "shared/calculator/components/keypad-widget";
import { ResultWidget } from "shared/calculator/components/result-widget";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { ItemTypes } from "constants/drop";
import { removeComponent } from "shared/constructor/redux/constructor.slice";
import { setDefault } from "shared/calculator/redux/calculator.slice";
import { findCalculatorElement } from "shared/calculator/helpers/findCalculatorElement";

export interface ValueObject {
	value: number;
	isInteger: boolean;
	numbersAfterDot: number;
}

export interface CalculatorProps {
	components?: ItemTypes[];
	isEditMode?: boolean;
}

export const Calculator = ({ components, isEditMode }: CalculatorProps) => {
	const dispatch = useAppDispatch();
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

	const doubleClickHandler = (value: ItemTypes) => {
		dispatch(removeComponent(value));
	};

	useEffect(() => {
		if (isEditMode) {
			dispatch(setDefault());
		}
	}, [isEditMode]);

	return (
		<CalculatorWrapper>
			{!components && (
				<CalculatorWrapper style={{ opacity: isEditMode ? 1 : 0 }}>
					<DisplayWidget
						value={value.value}
						numbersAfterDot={value.numbersAfterDot}
						isInteger={value.isInteger}
					/>
					<FunctionalWidget isEditMode={isEditMode} />
					<KeypadWidget isEditMode={isEditMode} />
					<ResultWidget />
				</CalculatorWrapper>
			)}
			{components?.map((item) => {
				switch (item) {
					case ItemTypes.display:
						return (
							<DisplayWidget
								value={value.value}
								numbersAfterDot={value.numbersAfterDot}
								isInteger={value.isInteger}
								key={"display-widget"}
								onDoubleClick={
									isEditMode ? () => doubleClickHandler(item) : undefined
								}
								inContainer={findCalculatorElement(
									ItemTypes.display,
									components
								)}
							/>
						);
					case ItemTypes.keypad:
						return (
							<KeypadWidget
								key={"keypad-widget"}
								onDoubleClick={
									isEditMode ? () => doubleClickHandler(item) : undefined
								}
								isEditMode={isEditMode}
								inContainer={findCalculatorElement(
									ItemTypes.keypad,
									components
								)}
							/>
						);
					case ItemTypes.result:
						return (
							<ResultWidget
								key={"result-widget"}
								onDoubleClick={
									isEditMode ? () => doubleClickHandler(item) : undefined
								}
								inContainer={findCalculatorElement(
									ItemTypes.result,
									components
								)}
							/>
						);
					case ItemTypes.functions:
						return (
							<FunctionalWidget
								key={"functions-widget"}
								onDoubleClick={
									isEditMode ? () => doubleClickHandler(item) : undefined
								}
								isEditMode={isEditMode}
								inContainer={findCalculatorElement(
									ItemTypes.functions,
									components
								)}
							/>
						);
				}
			})}
		</CalculatorWrapper>
	);
};
