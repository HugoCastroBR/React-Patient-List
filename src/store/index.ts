import { configureStore } from "@reduxjs/toolkit"
import { PageSlice } from "store/reducers/page";
import { PatientsSlice } from "store/reducers/patients";


const store = configureStore({
  reducer:{
    Page: PageSlice.reducer,
    Patients: PatientsSlice.reducer
  }
})

export default store;
export type RootState = ReturnType<typeof store.getState>

export const PageActions = PageSlice.actions
export const PatientsActions = PatientsSlice.actions