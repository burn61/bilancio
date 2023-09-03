import { MDBInput, MDBRadio, MDBRow, MDBCol } from "mdb-react-ui-kit";

function Form() {
  function filterNum(str) {
    const re =
      /\$|@|#|~|`|\%|\*|\^|\&|\(|\)|\+|\=|\[|\-|\_|\]|\[|\}|\{|\;|\:|\'|\"|\<|\>|\?|\||\\|\!|\$|\./g;
    // rimuove caratteri speciali come "$" e "," etc...
    return str.replace(re, "")
  }

  function matchPattern(input) {
    return /^\d*\,?\d*$/.test(input)
  }
  
  const handleAmount = (e) => {
    let x = filterNum(e.target.value);
    if (!matchPattern(x)) {
      e.target.value = e.target.value.slice(0, -1);
      return //e.target.value
    }
    if (x.includes(",")) {
      return
    }
    e.target.value = (+x).toLocaleString("it-IT");
  };

  return (
    <>
      <MDBRow>
        <MDBCol>
          <MDBInput id="date-mov" label="Data" type="date" />
        </MDBCol>
        <MDBCol>
          <MDBInput
            id="descr"
            label="Descrizione movimento"
            type="text"
            onChange={(e) => console.log(e)}
          />
        </MDBCol>
      </MDBRow>

      <MDBRow>
        <MDBCol>
          <MDBRadio
            name="RadioPlus"
            id="Entrata"
            value="option1"
            label="Entrata"
            inline
          />
          <MDBRadio
            name="RadioMinus"
            id="Spesa"
            value="option2"
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
          />
        </MDBCol>
      </MDBRow>
    </>
  );
}

export default Form;
