import React from "react";
import { Widget } from "shared/components/widget";
import { Button } from "shared/components/button";
import { ResultWrapper } from "shared/calculator/components/result-widget/styled";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { count } from "shared/calculator/helpers/count";
import { findResult } from "shared/calculator/redux/calculator.slice";

export const ResultWidget = () => {
	const { operation, value1, value2 } = useAppSelector(
		(state) => state.calculator
	);
	const dispatch = useAppDispatch();
	const handleOnClick = () => {
		dispatch(findResult(count(value1, value2, operation)));
	};

	return (
		<Widget>
			<ResultWrapper>
				<Button onClick={handleOnClick}>=</Button>
			</ResultWrapper>
		</Widget>
	);
};
