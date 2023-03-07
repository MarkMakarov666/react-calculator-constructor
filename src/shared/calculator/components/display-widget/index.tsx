import React from "react";
import { Widget } from "shared/components/widget";
import {
	DisplayWrapper,
	Result,
} from "shared/calculator/components/display-widget/styled";

export interface DisplayWidgetProps {
	value: number;
	numbersAfterDot: number;
	isInteger: boolean;
}

export const DisplayWidget = ({
	value,
	numbersAfterDot,
	isInteger,
}: DisplayWidgetProps) => {
	return (
		<Widget>
			<DisplayWrapper>
				<Result>
					{isInteger
						? value
						: value.toFixed(numbersAfterDot - 1).replace(".", ",")}
				</Result>
			</DisplayWrapper>
		</Widget>
	);
};
