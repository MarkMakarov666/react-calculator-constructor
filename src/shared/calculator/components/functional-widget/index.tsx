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

export interface FunctionalWidgetProps {
	buttonsName: string[];
	buttonsValue: Operations[];
}

export const FunctionalWidget = ({
	buttonsName,
	buttonsValue,
}: FunctionalWidgetProps) => {
	const dispatch = useDispatch();
	const handleOnClick = (value: Operations) => {
		dispatch(setOperation(value));
		dispatch(enableOperationPressed());
	};
	return (
		<Widget>
			<FunctionalWrapper>
				{buttonsName.map((button, index) => (
					<Button
						key={`operation--button--${button}`}
						onClick={() => handleOnClick(buttonsValue[index])}
					>
						{button}
					</Button>
				))}
			</FunctionalWrapper>
		</Widget>
	);
};
