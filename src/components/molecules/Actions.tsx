import Clickable from 'components/atoms/Clickable';
import React from 'react';
import { XCircle, Edit } from 'react-feather';

const Actions = ({ id }: { id: number }) => {
  return (
    <div className="d-flex justify-content-center">

      <div style={{ marginLeft: "5px", marginRight: "5px" }}>
        <Clickable
          onClick={(e) => {
            console.log(e, id);
          }}
        >
          <Edit size="20px" color="green" />
        </Clickable>
      </div>

      <div style={{ marginLeft: "5px", marginRight: "5px" }}>
        <Clickable
          onClick={(e) => {
            console.log(e, id);
          }}
        >
          <XCircle size="20px" color="red" />
        </Clickable>
      </div>



    </div>
  )

}

export default Actions;