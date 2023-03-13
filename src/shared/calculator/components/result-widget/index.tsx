import React from "react";
import { Widget } from "shared/components/widget";
import { Button } from "shared/components/button";
import { ResultWrapper } from "shared/calculator/components/result-widget/styled";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { count } from "shared/calculator/helpers/count";
import { findResult } from "shared/calculator/redux/calculator.slice";
import { CalculatorWidgets } from "constants/calculatorTypes";

export interface ResultWidgetProps {
	onDoubleClick?: (value: CalculatorWidgets) => void;
	inCanvas?: boolean;
	isActive?: boolean;
}

export const ResultWidget = ({
	onDoubleClick,
	inCanvas,
	isActive,
}: ResultWidgetProps) => {
	const { operation, displayValue, cacheValue } = useAppSelector(
		(state) => state.calculator
	);
	const dispatch = useAppDispatch();
	const handleOnClick = () => {
		dispatch(findResult(count(displayValue, cacheValue, operation)));
	};

	return (
		<Widget
			type={CalculatorWidgets.result}
			onDoubleClick={onDoubleClick}
			isDraggable={!inCanvas}
			isActive={isActive}
		>
			<ResultWrapper>
				<Button onClick={handleOnClick}>=</Button>
			</ResultWrapper>
		</Widget>
	);
};
