import * as React from 'react';
import { useTheme } from 'styled-components';
import useStore from 'hooks/useStore';


interface TableData {
  name: string;
  gender: string;
  birth: string;
}


const Table = ({ data }: { data: TableData[] }) => {


  const { states } = useStore();


  return (
    <div className="d-flex justify-content-center">
      <table className="table table-hover">
        <thead className={`table-${states.Page.theme}`}>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Gender</th>
            <th scope="col">Birth</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map(person => {
              return (
                <React.Fragment key={person.name}>
                  <tr >
                    <td>{person.name}</td>
                    <td>{person.gender}</td>
                    <td>{person.birth}</td>
                    <td>options</td>
                  </tr>
                </React.Fragment>
              )
            })
          }
        </tbody>
      </table>
    </div>
  );

}

export default Table;