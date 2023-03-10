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
import { ItemTypes } from "constants/drop";

export interface FunctionalWidgetProps {
	onDoubleClick?: (value: ItemTypes) => void;
	isEditMode?: boolean;
	inContainer?: boolean;
}

export const FunctionalWidget = ({
	onDoubleClick,
	isEditMode,
	inContainer,
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
			type={ItemTypes.functions}
			onDoubleClick={onDoubleClick}
			isDraggable={!inContainer}
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
