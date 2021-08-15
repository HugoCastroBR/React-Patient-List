import api from "services/api"
import { SetPatients,AddPatients,SetLoading } from 'store/actions';



export const getPatients = (amount=10) => {
  return (dispatch:(F:any) => void) => {
    dispatch(SetLoading(true))
    api.get(`api/?results=${amount}`).then(res => {
      console.log(res)
      dispatch(SetPatients(res.data.results))
      dispatch(SetLoading(false))
    })
  }
}

export const getMorePatients = (amount=10) => {
  return (dispatch:(F:any) => void) => {
    dispatch(SetLoading(true))
    api.get(`api/?results=${amount}`).then(res => {
      console.log(res)
      dispatch(AddPatients(res.data.results))
      dispatch(SetLoading(false))
    })
  }
}


