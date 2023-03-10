import React from "react";
import {
	ConstructorActionText,
	ConstructorDetails,
	ConstructorWrapper,
	IconWrapper,
	TextDescription,
	WrapperHover,
} from "shared/constructor/styled";
import { ItemTypes } from "constants/drop";
import { useDrop } from "react-dnd";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { addComponent } from "shared/constructor/redux/constructor.slice";
import { Icon, IconName } from "shared/components/icon";

export interface ConstructorProps {
	children?: React.ReactNode;
	isEditMode?: boolean;
}

export const Constructor = ({ children }: ConstructorProps) => {
	const dispath = useAppDispatch();
	const { components } = useAppSelector((state) => state.dragAndDrop);
	const handleOnDrop = (item: ItemTypes) => {
		dispath(addComponent(item));
	};
	const [{ isOver, canDrop }, drop] = useDrop(() => ({
		accept: [
			ItemTypes.display,
			ItemTypes.functions,
			ItemTypes.keypad,
			ItemTypes.result,
		],
		drop: (item, monitor) => {
			const type = monitor.getItemType();
			handleOnDrop(type as ItemTypes);
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
