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
	const isNotNumber = Number.isNaN(value) || !Number.isFinite(value);

	const notNumberMessage = "Не определено";
	const valueLength = isNotNumber
		? notNumberMessage.length
		: value.toString().length;
	return (
		<Widget
			type={ItemTypes.display}
			isDraggable={!inContainer}
			onDoubleClick={onDoubleClick}
		>
			<DisplayWrapper>
				<Result length={valueLength}>
					{!isNotNumber ? result : notNumberMessage}
				</Result>
			</DisplayWrapper>
		</Widget>
	);
};
