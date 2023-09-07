import { useState } from "react";
import { MDBInput, MDBRadio, MDBBtn, MDBRow, MDBCol } from "mdb-react-ui-kit";
import objectIsEmpty from "./objectIsEmpty";

function Form(props) {

  const {euro} = props;
  const [descr, setDescr] = useState(props.descr);
  const [amount, setAmount] = useState(euro ? Math.abs(+euro).toLocaleString('it-IT') : '');
  const [sign, setSign] = useState((euro)=>{
    if (euro) return (+euro>0 ? '+' : '-');
    return '' 
  });
  const [date, setDate] = useState('');

  const {dataForm} = props;
  
  if (descr) { // Ci sono dati per il form
    if (!/\d{4}-\d{2}-\d{2}/.test(date)) {
      const day = dataForm.date.slice(0, 2);
      const month = dataForm.date.slice(3, 5);
      const year = dataForm.date.slice(6,10);
      setDate(`${year}-${month}-${day}`)
    }
    console.log('dataForm=', descr, amount, sign, date)
  } 

  function filterNum(str) {
    const re =
      /\$|@|#|~|`|\%|\*|\^|\&|\(|\)|\+|\=|\[|\-|\_|\]|\[|\}|\{|\;|\:|\'|\"|\<|\>|\?|\||\\|\!|\$|\./g;
    // rimuove caratteri speciali come "$" e "," etc...
    return str.replace(re, "")
  }

  function matchPattern(input) {
    return /^\d*\,?\d?\d?$/.test(input)
  }
  
  const handleAmount = (e) => {
    const x = filterNum(e.target.value);
    if (!matchPattern(x)) {
      e.target.value = setAmount(e.target.value.slice(0, -1));
      return
    }
    if (x.includes(",")) {
      return
    }
    e.target.value = setAmount((+x).toLocaleString("it-IT"));
  };

  function localStringToNumber(stringx) {
    stringx = stringx.replace(/\./g, "");
    stringx = stringx.replace(/\,/g, ".");
    console.log(stringx)
  }

  const handleCancel = (e) =>{
    //setDataForm(emptyForm)
  }
  

  return (
    <>
      <MDBRow>
        <MDBCol>
          <MDBInput 
            id="date-mov" 
            label="Data" 
            type="date"
            value={date}
            onClick={(e)=>setDate(e.target.value)} 

          />
        </MDBCol>
        <MDBCol>
          <MDBInput
            id="descr"
            label="Descrizione movimento"
            type="text"
            value={descr}
            onClick={(e)=>setDescr(e.target.value)}
          />
        </MDBCol>
      </MDBRow>

      <MDBRow>
        <MDBCol>
          <MDBRadio
            name="RadioSign"
            id="Entrata"
            defaultChecked={true ? sign=='+' : false}
            label="Entrata"
            checked={(e)=>{e.target.value}}
            inline
          />
          <MDBRadio
            name="RadioSign"
            id="Spesa"
            defaultChecked={true ? sign=='-' : false}
            label="Spesa"
            checked={(e)=>{e.target.value}}
            inline
          />
        </MDBCol>
        <MDBCol>
          <MDBInput
            id="amount"
            label="Importo"
            type="text"
            onChange={(e) => handleAmount(e)}
            value={amount}
          />
        </MDBCol>
      </MDBRow>
      <MDBRow className='justify-content-end mx-2'>
        <p className="w-auto p-3">
          <MDBBtn rounded className="mx-2" color="secondary" size='sm' onClick={(e)=>handleCancel(e)}>
            Annulla
          </MDBBtn>
        </p>
        <p className="w-auto p-3">
          <MDBBtn rounded className="mx-2" color="secondary" size='sm' onClick={(e)=>console.log("Cliccato")}>
            Invio
          </MDBBtn>
        </p>
      </MDBRow>
    </>
  );
}

export default Form;
