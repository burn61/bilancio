import { useState, useEffect, useContext } from "react";
import { MDBInput, MDBRadio, MDBBtn, MDBRow, MDBCol } from "mdb-react-ui-kit";

import isEmpty from "./isEmpty";
import { contextData } from "./Home";
import BoxError from './BoxError';
import './Form.css'

function Form(props) {

  const data = useContext(contextData);

  const {dataForm:{descr, euro, date, id}} = props;
  const [dataForm, setDataForm] = useState({});

  const classInputError = 'not-valid';
  const [errorData, setErrorData] = useState({});

  useEffect(()=>{ // è stato richiesto l'edit id un movimento
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

  const handleChange = (e) => {
    console.log(e)
    setDataForm({...dataForm, [e.target.name]: e.target.value})
    // dopo change resetta l'errore

    setErrorData({...errorData, [e.target.name]:''} )
  }

  const handleOnBlurDate = (e) => {
    if (!/\d{4}[-\d\d]{2}/.test(dataForm.date)) {
      setDataForm({...dataForm, date: null})
      setErrorData({...errorData, date: "Data errata"} )
    }
  }

  const handleReset = (e) =>{
    setDataForm({
      descr: '',
      amount: '',
      sign: '',
      date: '',
      id: 0
    });

    setErrorData({
      dateMov: ''
    })
  }

  const handleSubmit = (event) =>{
    console.log('check=',event.target.checkValidity());
    if (!event.target.checkValidity()) {
      event.target.reportValidity();
      console.log(event.target.className += " was-validated");
      event.preventDefault();
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
    
      <MDBRow className="pt-3">
        <MDBCol>
            <MDBInput 
              className={isEmpty(errorData.date) ? '' : classInputError}
              id="date-mov" 
              label="Data" 
              type="date"
              name='date'
              value={dataForm.date || ''}
              onChange={(e)=>handleChange(e)}
              onBlur={e => handleOnBlurDate(e)}
            />
          <BoxError msg={errorData.date}/>

        </MDBCol>
        <MDBCol>
          <MDBInput
            className=''
            id="descr"
            label="Descrizione movimento"
            type="text"
            name='descr'
            value={dataForm.descr || ''}
            onChange={(e)=>handleChange(e)}
            required
          />
        </MDBCol>
      </MDBRow>

      <MDBRow className="pt-3">
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
          <MDBBtn type="reset" rounded className="mx-2" color="secondary" size='sm' onClick={(e)=>handleReset(e)}>
            Reset
          </MDBBtn>
        </p>
        <p className="w-auto p-3">
          <MDBBtn type="submit" rounded className="mx-2" color="secondary" size='sm' onClick={(e)=>handleSubmit(e)}>
            Invio
          </MDBBtn>
        </p>
      </MDBRow>
    </>
  );
}

export default Form;
