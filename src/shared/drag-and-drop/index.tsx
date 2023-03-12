import React, { cloneElement } from "react";
import { OuterCanvasWrapper, Wrapper } from "shared/drag-and-drop/styled";
import { Canvas } from "shared/drag-and-drop/components/canvas";
import { CalculatorWidgets } from "constants/calculatorTypes";
import { Sidebar } from "shared/drag-and-drop/components/sidebar";
import { useAppDispatch } from "redux/hooks";
import { toggleEnable } from "shared/drag-and-drop/redux/constructor.slice";
import { Tabs } from "shared/components/tabs";

export interface DragAndDropProps {
	widgetsInCanvas: CalculatorWidgets[];
	isEditMode?: boolean;
	children: React.ReactElement;
	accept: CalculatorWidgets[];
}

export const DragAndDrop = ({
	children,
	isEditMode,
	accept,
	widgetsInCanvas,
}: DragAndDropProps) => {
	const dispatch = useAppDispatch();
	const tabsOnClick = (value: boolean) => {
		dispatch(toggleEnable(value));
	};

	return (
		<Wrapper>
			<Sidebar>{cloneElement(children, { inCanvas: widgetsInCanvas })}</Sidebar>
			<OuterCanvasWrapper>
				<Tabs onClick={tabsOnClick} />
				<Canvas isEditMode={isEditMode} accept={accept}>
					{cloneElement(children, { components: widgetsInCanvas })}
				</Canvas>
			</OuterCanvasWrapper>
		</Wrapper>
	);
};
