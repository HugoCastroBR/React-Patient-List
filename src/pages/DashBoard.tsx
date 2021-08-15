import React from 'react';
import 'assets/css/App.css';
import ImageComponent from 'components/atoms/ImageComponent';
import Page from 'components/templates/Page';
import TextBlock from 'components/atoms/TextBlock';
import TableComponent from 'components/organisms/Table';
import { useEffect } from 'react';
import useStore from 'hooks/useStore';
import { getPatients,getMorePatients } from './../store/fetchActions/patients';
import { SetPatients } from 'store/actions';
import { Modal } from 'antd';


const DashBoard = () => {

  const {states, dispatch} = useStore()

  useEffect(() => {
      console.log('DashBoard');
      dispatch(getPatients())
  },[])

  useEffect(() => {
      console.log(states);
  },[states.Patients.patients])

  const data = [
    {
      "name": "John Doe",
      "gender": "M",
      "birth": "10/08/1920"
    },
    {
      "name": "Ste",
      "gender": "f",
      "birth": "12/08/1980"
    }
  ]

  return (
    <Page >
      <div className="d-flex align-items-center flex-column" >
        <div style={{ width: "76vw" }} className="d-flex flex-column">
          <div
            style={{ marginTop: "36px" }}
          >
            <TextBlock
              text="Nulla interdum viverra mi, ac blandit nunc imperdiet ac. Nunc rhoncus nunc vitae metus mollis, facilisis aliquet ligula imperdiet. Curabitur ligula massa, pharetra a quam pretium, vestibulum rutrum mi. Aenean at luctus ante. Duis est lectus, venenatis vel dui eget, tincidunt ultrices elit."
            />
          </div>
          <div style={{ marginTop: "36px" }}>
            <TableComponent
              isLoading={states.Page.isLoading}
              data={states.Patients.patients.map((patient:any) => {
                return {
                  ...patient,
                  name: patient.name.first + ' ' + patient.name.last
                }
              })}
            />
          </div>
          <button 
            className="btn btn-primary align-self-center m-4"
            onClick={() => {
              dispatch(getMorePatients())
            }}
          >
            Load More
          </button>
            
        </div>
      </div>
      <Modal
      closable
      visible={states.Page.modal}>
        <h1>
          teste
        </h1>
      </Modal>
    </Page>
  )
};

export default DashBoard;