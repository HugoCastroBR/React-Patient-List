import React from 'react';
import 'assets/css/App.css';
import ImageComponent from 'components/atoms/ImageComponent';
import Page from 'components/templates/Page';
import Table from 'components/organisms/Table';
import TextBlock from './../components/atoms/TextBlock';

const DashBoard = () => {

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
        <div style={{ width: "76vw" }}>
          <div
            style={{ marginTop: "36px" }}
          >
            <TextBlock
              text="Nulla interdum viverra mi, ac blandit nunc imperdiet ac. Nunc rhoncus nunc vitae metus mollis, facilisis aliquet ligula imperdiet. Curabitur ligula massa, pharetra a quam pretium, vestibulum rutrum mi. Aenean at luctus ante. Duis est lectus, venenatis vel dui eget, tincidunt ultrices elit."
            />
          </div>
          <div style={{ marginTop: "36px" }}>
            <Table
              data={data}
            />
          </div>
        </div>
      </div>
    </Page>
  )
};

export default DashBoard;