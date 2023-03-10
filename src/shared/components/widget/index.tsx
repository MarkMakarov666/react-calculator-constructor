import React from "react";
import { WidgetWrapper } from "shared/components/widget/styled";
import { useDrag } from "react-dnd";
import { ItemTypes } from "constants/drop";

export interface WidgetProps {
	children: React.ReactNode;
	type: ItemTypes;
	onDoubleClick?: (arg0: any) => void;
	isDraggable?: boolean;
}

export const Widget = ({
	children,
	type,
	onDoubleClick,
	isDraggable,
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
			ref={isDraggable ? drag : null}
			isDragging={isDragging}
			onDoubleClick={onDoubleClick}
		>
			{children}
		</WidgetWrapper>
	);
};
