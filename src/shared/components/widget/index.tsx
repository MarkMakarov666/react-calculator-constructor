import React from "react";
import { WidgetWrapper } from "shared/components/widget/styled";
import { useDrag } from "react-dnd";
import { CalculatorWidgets } from "constants/calculatorTypes";

export interface WidgetProps {
	children: React.ReactNode;
	type: CalculatorWidgets;
	onDoubleClick?: (arg0: any) => void;
	isDraggable?: boolean;
	isActive?: boolean;
}

export const Widget = ({
	children,
	type,
	onDoubleClick,
	isDraggable,
	isActive,
}: WidgetProps) => {
	const [{ isDragging }, drag] = useDrag({
		item: {
			type: type,
		},
		type: type,
		collect: (monitor) => ({
			isDragging: monitor.isDragging(),
		}),
	});
	return (
		<WidgetWrapper
			ref={isDraggable && !isActive ? drag : null}
			isDragging={isDragging}
			onDoubleClick={onDoubleClick}
			isActive={isActive}
		>
			{children}
		</WidgetWrapper>
	);
};
