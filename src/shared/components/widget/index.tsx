import React from "react";
import { WidgetWrapper } from "shared/components/widget/styled";
import { useDrag } from "react-dnd";
import { CalculatorWidgets } from "constants/calculatorTypes";
import { swapCalculatorWidgets } from "shared/calculator/helpers/swapCalculatorWidgets";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { setComponents } from "shared/drag-and-drop/redux/constructor.slice";

export interface WidgetProps {
	children: React.ReactNode;
	type: CalculatorWidgets;
	onDoubleClick?: (arg0: any) => void;
	isDraggable?: boolean;
	isActive?: boolean;
	isEditMode?: boolean;
}

export const Widget = ({
	children,
	type,
	onDoubleClick,
	isDraggable,
	isActive,
	isEditMode,
}: WidgetProps) => {
	const { components } = useAppSelector((state) => state.dragAndDrop);
	const dispatch = useAppDispatch();
	const [{ isDragging, dragItem }, drag] = useDrag({
		item: {
			type: type,
		},
		type: type,
		collect: (monitor) => ({
			isDragging: monitor.isDragging(),
			dragItem: monitor.getItem()?.type,
		}),
	});
	const handleOnDrop = (
		e: React.DragEvent<HTMLDivElement>,
		dropItem: CalculatorWidgets
	) => {
		e.preventDefault();
		dispatch(
			setComponents(swapCalculatorWidgets(components, dropItem, dragItem))
		);
	};
	return (
		<WidgetWrapper
			ref={isDraggable && !isActive && isEditMode ? drag : null}
			isDragging={isDragging}
			onDoubleClick={onDoubleClick}
			isActive={isActive}
			onDrop={isDraggable ? (e) => handleOnDrop(e, type) : undefined}
		>
			{children}
		</WidgetWrapper>
	);
};
