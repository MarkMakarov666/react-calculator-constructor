import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { addNumber } from "shared/calculator/helpers/addNumber";

export enum Operations {
	add = "add",
	subtract = "subtract",
	multiply = "multiply",
	divide = "divide",
}

export interface ICalculatorSlice {
	displayValue: number;
	cacheValue: number;
	isIntegerDisplay: boolean;
	isIntegerCache: boolean;
	numbersAfterDotDisplay: number;
	numbersAfterDotCache: number;
	operation: Operations;
	isOperationPressed: boolean;
	isKeypadPressed: boolean;
	isHaveResult: boolean;
	isCacheCleared: boolean;
}

const initialState: ICalculatorSlice = {
	displayValue: 0,
	cacheValue: 0,
	isIntegerDisplay: true,
	isIntegerCache: true,
	numbersAfterDotDisplay: 1,
	numbersAfterDotCache: 1,
	operation: Operations.add,
	isOperationPressed: false,
	isKeypadPressed: false,
	isHaveResult: false,
	isCacheCleared: false,
};

export const calculatorSlice = createSlice({
	name: "calculator",
	initialState,
	reducers: {
		addDisplay: (state, action: PayloadAction<number>) => {
			if (state.isHaveResult && !state.isOperationPressed) {
				state.displayValue = 0;
				state.isHaveResult = false;
			}
			state.displayValue = addNumber(
				state.displayValue,
				action.payload,
				state.isIntegerDisplay,
				state.numbersAfterDotDisplay
			);
			if (!state.isIntegerDisplay) {
				if (state.numbersAfterDotDisplay < 100) {
					state.numbersAfterDotDisplay += 1;
				}
			}
		},
		addCache: (state, action: PayloadAction<number>) => {
			if (
				!state.isCacheCleared &&
				state.isOperationPressed &&
				state.isKeypadPressed
			) {
				state.cacheValue = 0;
				state.numbersAfterDotCache = 0;
				state.isIntegerCache = true;
				state.isCacheCleared = true;
			}

			state.cacheValue = addNumber(
				state.cacheValue,
				action.payload,
				state.isIntegerCache,
				state.numbersAfterDotCache
			);
			if (!state.isIntegerCache) {
				if (state.numbersAfterDotCache < 100) {
					state.numbersAfterDotCache += 1;
				}
			}
		},
		addDotDisplay: (state) => {
			state.isIntegerDisplay = false;
		},
		addDotCache: (state) => {
			state.isIntegerCache = false;
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
			state.displayValue = action.payload;
			state.isOperationPressed = false;
			state.isKeypadPressed = false;
			state.isHaveResult = true;
			state.isCacheCleared = false;
		},
		setDefault: (state) => {
			state.displayValue = 0;
			state.cacheValue = 0;
			state.isIntegerDisplay = true;
			state.isIntegerCache = true;
			state.numbersAfterDotDisplay = 1;
			state.numbersAfterDotCache = 1;
			state.operation = Operations.add;
			state.isOperationPressed = false;
			state.isKeypadPressed = false;
			state.isHaveResult = false;
			state.isCacheCleared = false;
		},
	},
});

export const {
	setOperation,
	enableKeypadPressed,
	enableOperationPressed,
	addDotCache,
	addCache,
	addDisplay,
	addDotDisplay,
	findResult,
	setDefault,
} = calculatorSlice.actions;
export default calculatorSlice.reducer;
