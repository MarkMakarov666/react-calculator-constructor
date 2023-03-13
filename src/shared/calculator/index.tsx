import React, { useEffect } from "react";
import { CalculatorWrapper } from "shared/calculator/styled";
import { DisplayWidget } from "shared/calculator/components/display-widget";
import { FunctionalWidget } from "shared/calculator/components/functional-widget";
import { KeypadWidget } from "shared/calculator/components/keypad-widget";
import { ResultWidget } from "shared/calculator/components/result-widget";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { CalculatorWidgets } from "constants/calculatorTypes";
import { removeComponent } from "shared/drag-and-drop/redux/constructor.slice";
import { setDefault } from "shared/calculator/redux/calculator.slice";
import { findCalculatorElement } from "shared/calculator/helpers/findCalculatorElement";

export interface ValueObject {
	value: number;
	isInteger: boolean;
	numbersAfterDot: number;
}

export interface CalculatorProps {
	components?: CalculatorWidgets[];
	inCanvas?: CalculatorWidgets[];
	isEditMode?: boolean;
}

export const Calculator = ({
	components,
	isEditMode,
	inCanvas,
}: CalculatorProps) => {
	const dispatch = useAppDispatch();
	const {
		displayValue,
		cacheValue,
		isOperationPressed,
		isKeypadPressed,
		isIntegerDisplay,
		isIntegerCache,
		numbersAfterDotDisplay,
		numbersAfterDotCache,
	} = useAppSelector((state) => state.calculator);

	const copyDisplay: ValueObject = {
		value: displayValue,
		isInteger: isIntegerDisplay,
		numbersAfterDot: numbersAfterDotDisplay,
	};

	const copyCache: ValueObject = {
		value: cacheValue,
		isInteger: isIntegerCache,
		numbersAfterDot: numbersAfterDotCache,
	};

	const value = isOperationPressed
		? isKeypadPressed
			? copyCache
			: copyDisplay
		: copyDisplay;

	const doubleClickHandler = (value: CalculatorWidgets) => {
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
						isActive={
							inCanvas &&
							findCalculatorElement(CalculatorWidgets.display, inCanvas)
						}
					/>
					<FunctionalWidget
						isEditMode={isEditMode}
						isActive={
							inCanvas &&
							findCalculatorElement(CalculatorWidgets.functions, inCanvas)
						}
					/>
					<KeypadWidget
						isEditMode={isEditMode}
						isActive={
							inCanvas &&
							findCalculatorElement(CalculatorWidgets.keypad, inCanvas)
						}
					/>
					<ResultWidget
						isActive={
							inCanvas &&
							findCalculatorElement(CalculatorWidgets.result, inCanvas)
						}
					/>
				</CalculatorWrapper>
			)}
			{components?.map((item) => {
				switch (item) {
					case CalculatorWidgets.display:
						return (
							<DisplayWidget
								value={value.value}
								numbersAfterDot={value.numbersAfterDot}
								isInteger={value.isInteger}
								key={"display-widget"}
								onDoubleClick={
									isEditMode ? () => doubleClickHandler(item) : undefined
								}
								inCanvas={findCalculatorElement(
									CalculatorWidgets.display,
									components
								)}
							/>
						);
					case CalculatorWidgets.keypad:
						return (
							<KeypadWidget
								key={"keypad-widget"}
								onDoubleClick={
									isEditMode ? () => doubleClickHandler(item) : undefined
								}
								isEditMode={isEditMode}
								inCanvas={findCalculatorElement(
									CalculatorWidgets.keypad,
									components
								)}
							/>
						);
					case CalculatorWidgets.result:
						return (
							<ResultWidget
								key={"result-widget"}
								onDoubleClick={
									isEditMode ? () => doubleClickHandler(item) : undefined
								}
								inCanvas={findCalculatorElement(
									CalculatorWidgets.result,
									components
								)}
							/>
						);
					case CalculatorWidgets.functions:
						return (
							<FunctionalWidget
								key={"functions-widget"}
								onDoubleClick={
									isEditMode ? () => doubleClickHandler(item) : undefined
								}
								isEditMode={isEditMode}
								inCanvas={findCalculatorElement(
									CalculatorWidgets.functions,
									components
								)}
							/>
						);
				}
			})}
		</CalculatorWrapper>
	);
};
