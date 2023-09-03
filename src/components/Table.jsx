import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";
import { useState, useEffect } from "react";

import TableRow from "./TableRow";
import "./Table.css";

import deleteArrayItemById from "./deleteArrayItemById";

function Table(props) {
  const [data, setData] = useState(props.data);
  const { summary } = props;

  const arrMax = (arr, key) => {
    const arrMx = Math.max(...arr.map(el => +el[key]));

  }

  const arrStat = (arr, key) => {
    const tot = (
      arr
      .map(el => el[key])
      .reduce((accumulator, current) => current+accumulator, 0)
    )
    const max = Math.max(...arr.map(el => +el[key]));
    const length = arr.length
    summary(tot, max, length);
  }

  useEffect(()=>{
    (data) && (arrStat(data, 'euro'));
  }, [data]);

  function rowData(singleLine, i) {
    const { id, date, descr, euro } = singleLine;

    const handleClick = (e, id) => {
      const button = e.target.id;
      switch (button) {
        case 'pen':
          console.log('pen', id);
          break;
        case 'trash':
          setData(deleteArrayItemById(data, id))
          break;
      }
    }
    return (
      <TableRow
        key={i}
        id={id}
        date={date}
        descr={descr}
        euro={euro}
        counter={i + 1}
        handleClick={handleClick}
      />
    );
  }

  return (
    <MDBTable id="main-table" small borderless striped>
      <MDBTableHead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Data</th>
          <th scope="col">Descrizione</th>
          <th scope="col">+/-</th>
          <th scope="col">Importo</th>
          <th scope="col">Azioni</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {data.map((singleLine, i) => rowData(singleLine, i))}
      </MDBTableBody>
    </MDBTable>
  );
}

export default Table;
