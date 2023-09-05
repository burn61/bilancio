import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";
import { useState, useEffect } from "react";
import TableRow from "./TableRow";
import "./Table.css";
import deleteArrayItemById from "./deleteArrayItemById";

function Table(props) {
  const [data, setData] = useState(props.data);
  const { summary, handleForm } = props; // funzioni che aggiornano il sommario e i campi del form

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

  useEffect(()=>{ // Aggiorna il componente summary
    (data) && (arrStat(data, 'euro'));
  }, [data]);


  const handleClick = (e, id) => {
    const button = e.target.id;
    switch (button) {
      case 'pen':
        handleForm(data, id);

        break;
      case 'trash':
        setData(deleteArrayItemById(data, id))
        break;
    }
  }

  function rowData(singleLine, i) {
    return (
      <TableRow
        key={i}
        singleLine={singleLine}
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
