import { MDBBadge, MDBRow, MDBCol } from "mdb-react-ui-kit";

function Summary(props) {
  const { somma, max, length } = props;
  return (
    <>
    <MDBRow>
      <MDBCol className='md-4'>Movimenti: <MDBBadge>{length}</MDBBadge></MDBCol>
      <MDBCol className='md-4'>Totale: <MDBBadge>{(+somma).toLocaleString('it-IT')}</MDBBadge></MDBCol>
      <MDBCol className='md-4'>Massimo: <MDBBadge>{(+max).toLocaleString('it-IT')}</MDBBadge></MDBCol>
    </MDBRow>
    </>
  );
}

export default Summary;
