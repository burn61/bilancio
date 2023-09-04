//import { useState } from "react";
import { MDBInput, MDBRadio, MDBBtn, MDBRow, MDBCol } from "mdb-react-ui-kit";

function Form(props) {

  const dataForm = {id: 0, date: '', descr: '', amount: '', sign: ''}
  
  if (props) {
    dataForm.id = props.id;
    dataForm.date = props.date;
    dataForm.descr = props.descr;
    dataForm.sign = props.euro < 0 ? '-' : '+'
    dataForm.amount = Math.abs(+props.euro).toLocaleString('it-IT')
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
      e.target.value = e.target.value.slice(0, -1);
      return
    }
    if (x.includes(",")) {
      return
    }
    e.target.value = (+x).toLocaleString("it-IT");
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
            defaultValue={dataForm.date} 
          />
        </MDBCol>
        <MDBCol>
          <MDBInput
            id="descr"
            label="Descrizione movimento"
            type="text"
            defaultValue={null || dataForm.descr}
          />
        </MDBCol>
      </MDBRow>

      <MDBRow>
        <MDBCol>
          <MDBRadio
            name="RadioSign"
            id="Entrata"
            defaultChecked={true ? dataForm.euro>0 : false}
            label="Entrata"
            inline
          />
          <MDBRadio
            name="RadioSign"
            id="Spesa"
            defaultChecked={true ? dataForm.euro<0 : false}
            label="Spesa"
            inline
          />
        </MDBCol>
        <MDBCol>
          <MDBInput
            id="amount"
            label="Importo"
            type="text"
            onChange={(e) => handleAmount(e)}
            defaultValue={dataForm.euro!='' ? dataForm.euro : ''}
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
