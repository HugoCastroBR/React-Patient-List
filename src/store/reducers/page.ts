
import { createSlice } from "@reduxjs/toolkit";

export const PageSlice = createSlice({
	name: "PageSlice",
	initialState: {
		isLoading: false,
		theme: "light",
	},
	reducers: {
    SET_LOADING(state,{payload}:{payload:boolean}){
      state.isLoading = payload
    },
		SET_THEME(state,{payload}:{payload:"dark" | "light"}){
			state.theme = payload
		}
	},
});