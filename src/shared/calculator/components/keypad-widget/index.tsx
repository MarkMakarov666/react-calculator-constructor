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
	addDotValue1,
	addDotValue2,
	addValue1,
	addValue2,
	enableKeypadPressed,
} from "shared/calculator/redux/calculator.slice";
import { ItemTypes } from "constants/drop";

export interface KeypadWidgetProps {
	onDoubleClick?: (value: ItemTypes) => void;
	isEditMode?: boolean;
	inContainer?: boolean;
}

export const KeypadWidget = ({
	onDoubleClick,
	isEditMode,
	inContainer,
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
			dispatch(addValue2(value));
		} else {
			dispatch(addValue1(value));
		}
	};
	const handleOnClickDot = () => {
		if (isOperationPressed) {
			if (!isKeypadPressed) {
				dispatch(enableKeypadPressed());
			}
			dispatch(addDotValue2());
		} else {
			dispatch(addDotValue1());
		}
	};
	const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3];
	return (
		<Widget
			type={ItemTypes.keypad}
			onDoubleClick={onDoubleClick}
			isDraggable={!inContainer}
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
