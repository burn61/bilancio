import { useState, useEffect } from "react";
import { MDBInput, MDBRadio, MDBBtn, MDBRow, MDBCol } from "mdb-react-ui-kit";
import objectIsEmpty from "./objectIsEmpty";

function Form(props) {
  
  const {dataForm:{descr, euro, date, id}} = props;
  const [dataForm, setDataForm] = useState({
    descr: descr,
    amount: '',
    sign: '',
    date: '',
    id: 0
  })
  useEffect(()=>{
    if (date && !/\d{4}-\d{2}-\d{2}/.test(date)) {
      const day = date.slice(0, 2);
      const month = date.slice(3, 5);
      const year = date.slice(6,10);
      setDataForm(
        {
          descr: descr,
          amount: (euro ? Math.abs(+euro).toLocaleString('it-IT') : ''),
          sign: +euro > 0 ? '+' : '-',
          date: `${year}-${month}-${day}`
        }
      )
      }
  }, [descr])

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
      e.target.value = setDataForm({...dataForm, [e.target.name]: e.target.value.slice(0, -1)});
      return
    }
    if (x.includes(",")) {
      setDataForm({...dataForm, [e.target.name]: e.target.value})
      return
    }
    e.target.value = setDataForm({...dataForm, [e.target.name]: (+x).toLocaleString("it-IT")});
  };

  function localStringToNumber(stringx) {
    stringx = stringx.replace(/\./g, "");
    stringx = stringx.replace(/\,/g, ".");
    console.log(stringx)
  }

  const handleCancel = (e) =>{
    // qui funzione per svuotare il form
  }

  const handleChange = (e) => {
    setDataForm({...dataForm, [e.target.name]: e.target.value})
  }
  
  return (
    <>
      <MDBRow>
        <MDBCol>
          <MDBInput 
            id="date-mov" 
            label="Data" 
            type="date"
            name='date'
            value={dataForm.date || ''}
            onChange={(e)=>handleChange(e)} 

          />
        </MDBCol>
        <MDBCol>
          <MDBInput
            id="descr"
            label="Descrizione movimento"
            type="text"
            name='descr'
            value={dataForm.descr || ''}
            onChange={(e)=>handleChange(e)}
          />
        </MDBCol>
      </MDBRow>

      <MDBRow>
        <MDBCol>
          <MDBRadio
            name="sign"
            id="Entrata"
            checked={dataForm.sign=='+' ? true : false}
            label="Entrata"
            value={dataForm.sign || ''}
            onChange={(e)=>handleChange(e)}
            inline
          />
          <MDBRadio
            name="sign"
            id="Spesa"
            checked={dataForm.sign=='-' ? true : false}
            label="Spesa"
            value={dataForm.sign || ''}
            onChange={(e)=>handleChange(e)}
            inline
          />
        </MDBCol>
        <MDBCol>
          <MDBInput
            id="amount"
            label="Importo"
            type="text"
            name='amount'
            onChange={(e) => handleAmount(e)}
            value={dataForm.amount || ''}
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
