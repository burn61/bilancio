import { useState } from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import Table from "./Table";
import Summary from "./Summary";
import Form from "./Form";
import './Home.css'
import data from "./dummyData";

function Home() {

  const [somma, setSomma] = useState(0);
  const [max, setMax] = useState(0);
  const [length, setLength] = useState(0);
  const [dataForm, setDataForm] = useState({});

  const handleSummary = (tot, max, length)=> {
    setSomma(tot);
    setMax(max);
    setLength(length);
  }

  const handleForm = (arr, id) => {
    console.log('arr=', arr)
    const index = arr.findIndex((el)=>el.id == id );
    setDataForm(arr[index]);
  }
  return (
    <MDBContainer fluid style={{ maxWidth: "95%"}}>
      <MDBRow>
        
        <MDBCol size="md-7" className="text-center">
          <MDBContainer id='mouves-table' className="mt-3 border border-danger">
            <Table data={data} summary={handleSummary} handleForm={handleForm}/>
          </MDBContainer>
        </MDBCol>

        <MDBCol size="md-5" className="text-center border border-primary">
          <MDBContainer id="edit-form" className="border border.primary mt-3">
            <Form dataForm={dataForm}/>
          </MDBContainer>
        
          <MDBContainer id='summary-window' className="border border.primary mt-3 text-start">
            <Summary somma={somma} max={max} length={length}/>
          </MDBContainer>
        </MDBCol>
    
      </MDBRow>
    </MDBContainer>
  );
}

export default Home;
