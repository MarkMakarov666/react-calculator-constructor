import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { addNumber } from "shared/calculator/helpers/addNumber";

export enum Operations {
	add = "add",
	subtract = "subtract",
	multiply = "multiply",
	divide = "divide",
}

export interface ICalculatorSlice {
	value1: number;
	value2: number;
	isIntegerValue1: boolean;
	isIntegerValue2: boolean;
	numbersAfterDotValue1: number;
	numbersAfterDotValue2: number;
	operation: Operations;
	isOperationPressed: boolean;
	isKeypadPressed: boolean;
	isHaveResult: boolean;
}

const initialState: ICalculatorSlice = {
	value1: 0,
	value2: 0,
	isIntegerValue1: true,
	isIntegerValue2: true,
	numbersAfterDotValue1: 1,
	numbersAfterDotValue2: 1,
	operation: Operations.add,
	isOperationPressed: false,
	isKeypadPressed: false,
	isHaveResult: false,
};

export const calculatorSlice = createSlice({
	name: "calculator",
	initialState,
	reducers: {
		addValue1: (state, action: PayloadAction<number>) => {
			if (state.isHaveResult && !state.isOperationPressed) {
				state.value1 = 0;
				state.isHaveResult = false;
			}
			state.value1 = addNumber(
				state.value1,
				action.payload,
				state.isIntegerValue1,
				state.numbersAfterDotValue1
			);
			if (!state.isIntegerValue1) {
				state.numbersAfterDotValue1 += 1;
			}
		},
		addValue2: (state, action: PayloadAction<number>) => {
			if (
				state.isHaveResult &&
				state.isOperationPressed &&
				state.isKeypadPressed
			) {
				state.value2 = 0;
				state.numbersAfterDotValue2 = 0;
				state.isIntegerValue2 = true;
				state.isHaveResult = false;
			}

			state.value2 = addNumber(
				state.value2,
				action.payload,
				state.isIntegerValue2,
				state.numbersAfterDotValue2
			);
			if (!state.isIntegerValue2) {
				state.numbersAfterDotValue2 += 1;
			}
		},
		addDotValue1: (state) => {
			state.isIntegerValue1 = false;
		},
		addDotValue2: (state) => {
			state.isIntegerValue2 = false;
		},
		setOperation: (state, action: PayloadAction<Operations>) => {
			state.operation = action.payload;
		},
		enableKeypadPressed: (state) => {
			state.isKeypadPressed = true;
		},
		enableOperationPressed: (state) => {
			state.isOperationPressed = true;
		},
		findResult: (state, action: PayloadAction<number>) => {
			state.value1 = action.payload;
			state.isOperationPressed = false;
			state.isKeypadPressed = false;
			state.isHaveResult = true;
		},
		setDefault: (state) => {
			state.value1 = 0;
			state.value2 = 0;
			state.isIntegerValue1 = true;
			state.isIntegerValue2 = true;
			state.numbersAfterDotValue1 = 1;
			state.numbersAfterDotValue2 = 1;
			state.operation = Operations.add;
			state.isOperationPressed = false;
			state.isKeypadPressed = false;
			state.isHaveResult = false;
		},
	},
});

export const {
	setOperation,
	enableKeypadPressed,
	enableOperationPressed,
	addDotValue2,
	addValue2,
	addValue1,
	addDotValue1,
	findResult,
	setDefault,
} = calculatorSlice.actions;
export default calculatorSlice.reducer;
