import React from "react";
import { Widget } from "shared/components/widget";
import {
	DisplayWrapper,
	Result,
} from "shared/calculator/components/display-widget/styled";

export interface DisplayWidgetProps {
	value: number;
}

export const DisplayWidget = ({ value }: DisplayWidgetProps) => {
	return (
		<Widget>
			<DisplayWrapper>
				<Result>{value}</Result>
			</DisplayWrapper>
		</Widget>
	);
};
