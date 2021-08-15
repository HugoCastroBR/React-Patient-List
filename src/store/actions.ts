import { PageActions, PatientsActions } from 'store/index';
import { patientData } from './../types';




export const SetLoading = (value: boolean) => {
  return PageActions.SET_LOADING(value)
}

export const SetTheme = (value: "dark" | "light") => {
  return PageActions.SET_THEME(value)
}

export const SetPatients = (value:patientData[]) => {
  return PatientsActions.SET_PATIENTS(value)
}

export const AddPatients = (value: []) => {
  return PatientsActions.ADD_PATIENTS(value)
}