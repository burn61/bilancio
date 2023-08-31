
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";

import Table from "./Table";
import data from "./dummyData";


function Home() {
  
  return (
    <MDBContainer fluid style={{ maxWidth: "95%" }}>
      <MDBRow>
        <MDBCol size="md-7" className="text-center border border-primary">
          <MDBContainer className="mt-3">
            <Table data={data}/>
          </MDBContainer>
        </MDBCol>
        <MDBCol size="md-5" className="text-center border border-primary">
          <MDBContainer className="border border.primary mt-3">
            <div>operazioni</div>
          </MDBContainer>
          <MDBContainer className="border border.primary mt-3">
            <div>operazioni</div>
          </MDBContainer>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Home;
