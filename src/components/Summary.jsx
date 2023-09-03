import { MDBBadge, MDBRow, MDBCol } from "mdb-react-ui-kit";

function Summary(props) {
  const { somma, max, length } = props;
  return (
    <>
    <MDBRow>
      <MDBCol className='md-4 text-center d-flex flex-column'>Movimenti<MDBBadge>{length}</MDBBadge></MDBCol>
      <MDBCol className='md-4 text-center d-flex flex-column'>Totale<MDBBadge>{(+somma).toLocaleString('it-IT')}</MDBBadge></MDBCol>
      <MDBCol className='md-4 text-center d-flex flex-column'>Massimo<MDBBadge>{(+max).toLocaleString('it-IT')}</MDBBadge></MDBCol>
    </MDBRow>

    </>
  );
}

export default Summary;
