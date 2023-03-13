import React from "react";
import { Widget } from "shared/components/widget";
import {
	DisplayWrapper,
	Result,
} from "shared/calculator/components/display-widget/styled";
import { CalculatorWidgets } from "constants/calculatorTypes";

export interface DisplayWidgetProps {
	value: number;
	numbersAfterDot: number;
	isInteger: boolean;
	onDoubleClick?: (value: CalculatorWidgets) => void;
	inCanvas?: boolean;
	isActive?: boolean;
	isEditMode?: boolean;
}

export const DisplayWidget = ({
	value,
	numbersAfterDot,
	isInteger,
	onDoubleClick,
	inCanvas,
	isActive,
	isEditMode,
}: DisplayWidgetProps) => {
	const toFixedNumbers = numbersAfterDot - 1 < 0 ? 0 : numbersAfterDot - 1;
	const result = isInteger
		? value
		: value.toFixed(toFixedNumbers).replace(".", ",");
	const isNotNumber = Number.isNaN(value) || !Number.isFinite(value);

	const notNumberMessage = "Не определено";
	const valueLength = isNotNumber
		? notNumberMessage.length
		: value.toString().length;
	return (
		<Widget
			type={CalculatorWidgets.display}
			isDraggable={!inCanvas}
			onDoubleClick={onDoubleClick}
			isActive={isActive}
			isEditMode={isEditMode}
		>
			<DisplayWrapper>
				<Result length={valueLength}>
					{!isNotNumber ? result : notNumberMessage}
				</Result>
			</DisplayWrapper>
		</Widget>
	);
};
