import { useState } from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";

import Table from "./Table";
import Summary from "./Summary";

import data from "./dummyData";

function Home() {

  const [somma, setSomma] = useState(0);
  const [max, setMax] = useState(0);

  const handleSummary = (tot, max)=> {
    setSomma(tot);
    setMax(max);
  }

  return (
    <MDBContainer fluid style={{ maxWidth: "95%", maxHeight: "90%" }}>
      <MDBRow>
        <MDBCol size="md-7" className="text-center border border-primary">
          <MDBContainer className="mt-3">
            <Table data={data} summary={handleSummary}/>
          </MDBContainer>
        </MDBCol>
        <MDBCol size="md-5" className="text-center border border-primary">
          <MDBContainer className="border border.primary mt-3">
            <div>operazioni</div>
          </MDBContainer>
          <MDBContainer className="border border.primary mt-3">
            <Summary somma={somma} max={max}/>
          </MDBContainer>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Home;
