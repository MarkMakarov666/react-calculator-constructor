import React from "react";
import { Widget } from "shared/components/widget";
import {
	KeypadWrapper,
	ZeroButtonWrapper,
} from "shared/calculator/components/keypad-widget/styled";
import { Button } from "shared/components/button";
import { useAppSelector } from "redux/hooks";
import { useDispatch } from "react-redux";
import {
	addDotDisplay,
	addDotCache,
	addDisplay,
	addCache,
	enableKeypadPressed,
} from "shared/calculator/redux/calculator.slice";
import { CalculatorWidgets } from "constants/calculatorTypes";

export interface KeypadWidgetProps {
	onDoubleClick?: (value: CalculatorWidgets) => void;
	isEditMode?: boolean;
	inCanvas?: boolean;
	isActive?: boolean;
}

export const KeypadWidget = ({
	onDoubleClick,
	isEditMode,
	inCanvas,
	isActive,
}: KeypadWidgetProps) => {
	const { isKeypadPressed, isOperationPressed } = useAppSelector(
		(state) => state.calculator
	);
	const dispatch = useDispatch();

	const handleOnClick = (value: number) => {
		if (isOperationPressed) {
			if (!isKeypadPressed) {
				dispatch(enableKeypadPressed());
			}
			dispatch(addCache(value));
		} else {
			dispatch(addDisplay(value));
		}
	};
	const handleOnClickDot = () => {
		if (isOperationPressed) {
			if (!isKeypadPressed) {
				dispatch(enableKeypadPressed());
			}
			dispatch(addDotCache());
		} else {
			dispatch(addDotDisplay());
		}
	};
	const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3];
	return (
		<Widget
			type={CalculatorWidgets.keypad}
			onDoubleClick={onDoubleClick}
			isDraggable={!inCanvas}
			isActive={isActive}
		>
			<KeypadWrapper>
				{numbers.map((number) => (
					<Button
						key={`keypad--button${number}`}
						onClick={!isEditMode ? () => handleOnClick(number) : undefined}
					>
						{number}
					</Button>
				))}
				<ZeroButtonWrapper
					onClick={!isEditMode ? () => handleOnClick(0) : undefined}
				>
					<Button>0</Button>
				</ZeroButtonWrapper>
				<Button onClick={!isEditMode ? handleOnClickDot : undefined}>,</Button>
			</KeypadWrapper>
		</Widget>
	);
};
