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

export const KeypadWidget = () => {
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

	return (
		<Widget>
			<KeypadWrapper>
				<Button
					onClick={() => {
						handleOnClick(7);
					}}
				>
					7
				</Button>
				<Button onClick={() => handleOnClick(8)}>8</Button>
				<Button onClick={() => handleOnClick(9)}>9</Button>
				<Button onClick={() => handleOnClick(4)}>4</Button>
				<Button onClick={() => handleOnClick(5)}>5</Button>
				<Button onClick={() => handleOnClick(6)}>6</Button>
				<Button onClick={() => handleOnClick(1)}>1</Button>
				<Button onClick={() => handleOnClick(2)}>2</Button>
				<Button onClick={() => handleOnClick(3)}>3</Button>
				<ZeroButtonWrapper onClick={() => handleOnClick(0)}>
					<Button>0</Button>
				</ZeroButtonWrapper>
				<Button onClick={handleOnClickDot}>,</Button>
			</KeypadWrapper>
		</Widget>
	);
};
