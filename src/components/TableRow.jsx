function TableRow(props) {
  const { id, date, descr, amount } = props;
  const sign = +amount>0 ? '+' : '-';
  return (
    <tr>
      <th scope="row">{id}</th>
      <td>{date}</td>
      <td>{descr}</td>
      <td>{sign}</td>
      <td>{amount}</td>
    </tr>
  );
}

export default TableRow;
