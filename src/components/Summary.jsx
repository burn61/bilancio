import { MDBBadge } from "mdb-react-ui-kit";

function Summary(props) {
  const { somma, max } = props;
  return (
    <>
      <div>Totale: {somma}</div>
      <div>Massimo: {max}</div>
    </>
  );
}

export default Summary;
