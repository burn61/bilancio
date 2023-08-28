//import React from 'react'

import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';

import TableRow from './TableRow';
import './Table.css';

function Table() {
  return (
    <MDBTable id='main-table' small borderless striped>
      <MDBTableHead>
        <tr>
          <th scope='col'>#</th>
          <th scope='col'>Data</th>
          <th scope='col'>Descrizione</th>
          <th scope='col'>+/-</th>
          <th scope='col'>Importo</th>
          <th scope='col'>Importo</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        <TableRow id='1' date='01/01/2023' descr='Movimento di prova' amount='-1345'/>
{/*         <tr>
          <th scope='row'>1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope='row'>2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope='row'>3</th>
          <td> Larry the Bird</td>
          <td> Larry the Bird</td>
          <td> Larry the Bird</td>
          <td>@twitter</td>
        </tr> */}
      </MDBTableBody>
    </MDBTable>
  )
}

export default Table