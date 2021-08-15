
import { createSlice, current } from "@reduxjs/toolkit";
import { patientData, TableData } from 'types';

export const PatientsSlice = createSlice({
	name: "PatientsSlice",
	initialState: {
    patients: [] as TableData[],
	},
	reducers: {
    SET_PATIENTS(state,{payload}:{payload:patientData[]}){

      const valuesWithId = payload.map((item,id) => {return({...item,id})})
      state.patients = valuesWithId
      
    },
    ADD_PATIENTS(state,{payload}:{payload:patientData[]}){
      const allValues = [...state.patients, ...payload]
      const valuesWithId = allValues.map((item,id) => {return({...item,id})})
      state.patients = valuesWithId
    },
    EDIT_PATIENT(state,{payload}:{payload:TableData}){
      const newValue = current(state).patients.find((e) => e.id === payload.id)
      
      if(newValue){
        newValue.name = payload.name
        newValue.birth = payload.birth
        newValue.gender = payload.gender

        const newStates = current(state).patients.map(e => {
          if(e.id === payload.id){
            return newValue
          }else{
            return e
          }
        })
        
        state.patients = newStates
      }
      
    }
	},
});