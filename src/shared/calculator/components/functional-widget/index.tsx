import React from "react";
import { Widget } from "shared/components/widget";
import { FunctionalWrapper } from "shared/calculator/components/functional-widget/styled";
import { Button } from "shared/components/button";
import { useDispatch } from "react-redux";
import {
	enableOperationPressed,
	Operations,
	setOperation,
} from "shared/calculator/redux/calculator.slice";
import { CalculatorWidgets } from "constants/calculatorTypes";

export interface FunctionalWidgetProps {
	onDoubleClick?: (value: CalculatorWidgets) => void;
	isEditMode?: boolean;
	inCanvas?: boolean;
	isActive?: boolean;
}

export const FunctionalWidget = ({
	onDoubleClick,
	isEditMode,
	isActive,
}: FunctionalWidgetProps) => {
	const operationsName = ["/", "x", "-", "+"];
	const operationsValue = [
		Operations.divide,
		Operations.multiply,
		Operations.subtract,
		Operations.add,
	];

	const dispatch = useDispatch();
	const handleOnClick = (value: Operations) => {
		dispatch(enableOperationPressed());
		dispatch(setOperation(value));
	};

	return (
		<Widget
			type={CalculatorWidgets.functions}
			onDoubleClick={onDoubleClick}
			isDraggable={!isActive}
			isActive={isActive}
			isEditMode={isEditMode}
		>
			<FunctionalWrapper>
				{operationsName.map((button, index) => (
					<Button
						key={`operation--button--${button}`}
						onClick={
							!isEditMode
								? () => handleOnClick(operationsValue[index])
								: undefined
						}
					>
						{button}
					</Button>
				))}
			</FunctionalWrapper>
		</Widget>
	);
};
