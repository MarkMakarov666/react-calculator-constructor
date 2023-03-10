import React from "react";
import { Widget } from "shared/components/widget";
import {
	DisplayWrapper,
	Result,
} from "shared/calculator/components/display-widget/styled";
import { ItemTypes } from "constants/drop";

export interface DisplayWidgetProps {
	value: number;
	numbersAfterDot: number;
	isInteger: boolean;
	onDoubleClick?: (value: ItemTypes) => void;
	inContainer?: boolean;
}

export const DisplayWidget = ({
	value,
	numbersAfterDot,
	isInteger,
	onDoubleClick,
	inContainer,
}: DisplayWidgetProps) => {
	const result = isInteger
		? value
		: value.toFixed(numbersAfterDot - 1).replace(".", ",");
	const isSafeNum = !Number.isNaN(value);
	const notNumberMessage = "Не определено";
	const valueLength = isSafeNum
		? value.toString().length
		: notNumberMessage.length;
	return (
		<Widget
			type={ItemTypes.display}
			isDraggable={!inContainer}
			onDoubleClick={onDoubleClick}
		>
			<DisplayWrapper>
				<Result length={valueLength}>
					{isSafeNum ? result : notNumberMessage}
				</Result>
			</DisplayWrapper>
		</Widget>
	);
};
