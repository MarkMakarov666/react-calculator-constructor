import React from "react";
import { CalculatorWrapper } from "shared/calculator/styled";
import { DisplayWidget } from "shared/calculator/components/display-widget";
import { FunctionalWidget } from "shared/calculator/components/functional-widget";
import { KeypadWidget } from "shared/calculator/components/keypad-widget";

export const Calculator = () => {
	return (
		<CalculatorWrapper>
			<DisplayWidget value={0} />
			<FunctionalWidget />
			<KeypadWidget />
		</CalculatorWrapper>
	);
};
