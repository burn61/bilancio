import { useState, useEffect, useContext } from "react";
import { MDBInput, MDBRadio, MDBBtn, MDBRow, MDBCol } from "mdb-react-ui-kit";
import objectIsEmpty from "./objectIsEmpty";

import { contextData } from "./Home";

function Form(props) {

  const data = useContext(contextData);

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
      const [day, month, year] = date.split('-');
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
    // rimuove caratteri speciali come "$" e "." etc... tranne ,
    return str.replace(re, "")
  }

  function matchPattern(input) {
    return /^\d*\,?\d?\d?$/.test(input)
  }
  
  const handleAmount = (e) => {
    const x = filterNum(e.target.value);
    const field = e.target.name;
    if (!matchPattern(x)) {
      e.target.value = setDataForm({...dataForm, [field]: e.target.value.slice(0, -1)});
      return
    }
    if (x.includes(",")) {
      setDataForm({...dataForm, [field]: e.target.value})
      
    } else {e.target.value = setDataForm({...dataForm, [field]: (+x).toLocaleString("it-IT")})}
  };

  function localStringToNumber(stringx) {
    stringx = stringx.replace(/\./g, "");
    stringx = stringx.replace(/\,/g, ".");
    console.log(stringx)
  }

  const handleCancel = (e) =>{
    setDataForm({
      descr: '',
      amount: '',
      sign: '',
      date: '',
      id: 0
    })
  }

  const handleChange = (e) => {
    setDataForm({...dataForm, [e.target.name]: e.target.value})
  }

  const handleEnter = (e) =>{
    console.log(e);
    if (!dataForm.id) {
      const arr = ['descr', 'amount', 'sign', 'date']
      console.log(emptyData(dataForm, arr))
      //dataForm.id = Math.max(...data.map(el=>el.id))+1;
    }
  }

  const handleChangeSign = (e) => {
    if (e.target.value == '+') {
      setDataForm({...dataForm, sign: '-'})
    } else if (e.target.value == '-') {
      setDataForm({...dataForm, sign: '+'})
    }
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
            onChange={(e)=>handleChangeSign(e)}
            inline
          />
          <MDBRadio
            name="sign"
            id="Spesa"
            checked={dataForm.sign=='-' ? true : false}
            label="Spesa"
            value={dataForm.sign || ''}
            onChange={(e)=>handleChangeSign(e)}
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
          <MDBBtn rounded className="mx-2" color="secondary" size='sm' onClick={(e)=>handleEnter(e)}>
            Invio
          </MDBBtn>
        </p>
      </MDBRow>
    </>
  );
}

export default Form;
