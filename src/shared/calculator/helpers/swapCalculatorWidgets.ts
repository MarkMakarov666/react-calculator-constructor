import { CalculatorWidgets } from "constants/calculatorTypes";

export const swapCalculatorWidgets = (
	widgets: CalculatorWidgets[],
	dropWidget: CalculatorWidgets,
	dragWidget: CalculatorWidgets
) => {
	const findDropWidget = widgets.findIndex((widget) => widget === dropWidget);
	const findDragWidget = widgets.findIndex((widget) => widget === dragWidget);
	if (findDropWidget > 0) {
		if (findDragWidget > 0) {
			return widgets.map((widget) => {
				if (widget === dragWidget) {
					return dropWidget;
				}
				if (widget === dropWidget) {
					return dragWidget;
				}
				return widget;
			});
		} else {
			return [
				...widgets.slice(0, findDropWidget + 1),
				dragWidget,
				...widgets.slice(findDropWidget + 1),
			];
		}
	}
	return widgets;
};
