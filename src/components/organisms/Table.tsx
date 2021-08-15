import * as React from 'react';
import { Table } from 'antd';
import Actions from 'components/molecules/Actions';
import { TableData } from 'types';




const TableComponent = ({data,isLoading=false}: { data: TableData[],isLoading?:boolean }) => {
  return(
    <Table
      pagination={false}
      rowKey="name" 
      loading={isLoading}
      columns = {
        [
          {
            title: 'Id',
            dataIndex: 'id',
            key: 'id',
            sorter: (a, b) => a.id - b.id,
            width: '6%',
          },
          {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            sorter: (a, b) => a.name.localeCompare(b.name)
          },
          {
            title: 'Gender',
            dataIndex: 'gender',
            key: 'gender',
            sorter: (a, b) => a.gender.localeCompare(b.gender)
          },
          {
            title: 'Birth Date',
            dataIndex: 'birth',
            key: 'birth',
            sorter: (a, b) => Number(new Date(a.birth)) - Number(new Date(b.birth))
          },
          {
            title: 'Actions',
            key: 'actions',
            dataIndex: 'actions',
            width: '10%',
          }
        ]
      }
      dataSource={data.map((e,id) => {
        return {
          ...e,
          gender: `${e.gender.toLowerCase() === "male" ? "Male" : "Female"}`,
          actions: <Actions id={Number(id)} key={`${id}-${e.gender}`}/>,
        }
      })}
    />
  )
}

export default TableComponent;