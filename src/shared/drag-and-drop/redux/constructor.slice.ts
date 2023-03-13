import { CalculatorWidgets } from "constants/calculatorTypes";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IConstructorSlice {
	components: CalculatorWidgets[];
	isEnable: boolean;
}

const initialState: IConstructorSlice = {
	components: [],
	isEnable: true,
};

export const constructorSlice = createSlice({
	name: "constructor/slice",
	initialState,
	reducers: {
		addComponent: (state, action: PayloadAction<CalculatorWidgets>) => {
			if (
				state.components.findIndex((element) => element === action.payload) < 0
			) {
				state.components.push(action.payload);
			}
		},
		removeComponent: (state, action: PayloadAction<CalculatorWidgets>) => {
			state.components = state.components.filter(
				(component) => component !== action.payload
			);
		},
		toggleEnable: (state, action: PayloadAction<boolean>) => {
			state.isEnable = action.payload;
		},
		setComponents: (state, action: PayloadAction<CalculatorWidgets[]>) => {
			state.components = action.payload;
		},
	},
});

export const { addComponent, removeComponent, toggleEnable, setComponents } =
	constructorSlice.actions;

export default constructorSlice.reducer;
