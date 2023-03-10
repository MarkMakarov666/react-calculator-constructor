import { ItemTypes } from "constants/drop";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IConstructorSlice {
	components: ItemTypes[];
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
		addComponent: (state, action: PayloadAction<ItemTypes>) => {
			if (
				state.components.findIndex((element) => element === action.payload) < 0
			) {
				state.components.push(action.payload);
			}
		},
		removeComponent: (state, action: PayloadAction<ItemTypes>) => {
			state.components = state.components.filter(
				(component) => component !== action.payload
			);
		},
		toggleEnable: (state, action: PayloadAction<boolean>) => {
			state.isEnable = action.payload;
		},
	},
});

export const { addComponent, removeComponent, toggleEnable } =
	constructorSlice.actions;

export default constructorSlice.reducer;
