import { CalculatorWidgets } from "constants/calculatorTypes";

export const sortCalculatorWidgets = (widgets: CalculatorWidgets[]) => {
	const findDisplay = widgets.findIndex(
		(widget) => widget === CalculatorWidgets.display
	);
	if (findDisplay > 0) {
		return [
			widgets[findDisplay],
			...widgets.slice(0, findDisplay),
			...widgets.slice(findDisplay + 1, widgets.length),
		];
	}
	return widgets;
};
