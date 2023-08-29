//import React from 'react'

import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';

import TableRow from './TableRow';
import './Table.css';

import data from './dummyData';

function Table() {

function linea(oper, i) {
  const {id, date, descr, euro} = oper;
  return (<TableRow id={id} date={date} descr={descr} euro={euro} kId={i+1}/>)
}

  return (
    <MDBTable id='main-table' small borderless striped>
      <MDBTableHead>
        <tr>
          <th scope='col'>#</th>
          <th scope='col'>Data</th>
          <th scope='col'>Descrizione</th>
          <th scope='col'>+/-</th>
          <th scope='col'>Importo</th>
          <th scope='col'>Azioni</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {data.map((singleLine, i) => linea(singleLine, i))}
      </MDBTableBody>
    </MDBTable>
  )
}

export default Table