import React from "react";
import { Calculator } from "shared/calculator";
import { PageWrapper } from "pages/main-page/styled";
import { useAppSelector } from "redux/hooks";
import { DragAndDrop } from "shared/drag-and-drop";
import { CalculatorWidgets } from "constants/calculatorTypes";

export const MainPage = () => {
	const { components, isEnable } = useAppSelector((state) => state.dragAndDrop);
	return (
		<PageWrapper>
			<DragAndDrop
				widgetsInCanvas={components}
				acceptTypes={[
					CalculatorWidgets.display,
					CalculatorWidgets.functions,
					CalculatorWidgets.keypad,
					CalculatorWidgets.result,
				]}
				isEditMode={isEnable}
			>
				<Calculator isEditMode={isEnable} />
			</DragAndDrop>
		</PageWrapper>
	);
};
