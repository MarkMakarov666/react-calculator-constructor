import React from "react";
import {
	ConstructorActionText,
	ConstructorDetails,
	ConstructorWrapper,
	IconWrapper,
	TextDescription,
	WrapperHover,
} from "shared/drag-and-drop/components/canvas/styled";
import { CalculatorWidgets } from "constants/calculatorTypes";
import { useDrop } from "react-dnd";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { addComponent } from "shared/drag-and-drop/redux/constructor.slice";
import { Icon, IconName } from "shared/components/icon";

export interface CanvasProps {
	children?: React.ReactNode;
	isEditMode?: boolean;
	handleOnDrop?: () => void;
	componentsInCanvas?: CalculatorWidgets[];
	accept: CalculatorWidgets[];
}

export const Canvas = ({ children, accept }: CanvasProps) => {
	const dispatch = useAppDispatch();
	const { components } = useAppSelector((state) => state.dragAndDrop);
	const handleOnDrop = (item: CalculatorWidgets) => {
		dispatch(addComponent(item));
	};

	const [{ isOver, canDrop }, drop] = useDrop(() => ({
		accept: accept,
		drop: (item, monitor) => {
			const type = monitor.getItemType();
			handleOnDrop(type as CalculatorWidgets);
		},
		collect: (monitor) => ({
			isOver: monitor.isOver(),
			canDrop: monitor.canDrop(),
		}),
	}));

	const haveComponents = !!components.length;

	return (
		<ConstructorWrapper
			ref={drop}
			isOver={isOver}
			haveComponents={haveComponents}
		>
			{children}
			{!haveComponents && !isOver && canDrop && (
				<WrapperHover haveComponents={haveComponents} />
			)}
			{isOver && (
				<IconWrapper>
					<Icon name={IconName.borderLine} />
				</IconWrapper>
			)}
			{!haveComponents && (
				<ConstructorDetails>
					<Icon name={IconName.imageIcon} />
					<ConstructorActionText>Перетащите сюда</ConstructorActionText>
					<TextDescription>любой элемент из левой панели</TextDescription>
				</ConstructorDetails>
			)}
		</ConstructorWrapper>
	);
};
