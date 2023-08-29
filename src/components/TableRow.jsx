import { MDBIcon } from 'mdb-react-ui-kit';
import { useState } from 'react';

function TableRow(props) {
  const { id, date, descr, amount } = props;
  const sign = +amount>0 ? '+' : '-';

  const [colorIconPen, setColorIconPen] = useState('text-black')
  const [colorIconTrash, setColorIconTrash] = useState('text-black')

  function swapColor(clr) {
    return clr == 'text-black' ? 'text-danger' : 'text-black'
  }

  const colorizeIcon = (e) => {
    const id = e.target.id;
    switch (id) {
      case 'pen':
        setColorIconPen(swapColor(colorIconPen))
        break;
      case 'trash':
        setColorIconTrash(swapColor(colorIconTrash))
        break;
    }
  }

  const handleClick = (e) => {
    console.log(e);
  }

  return (
    <tr>
      <th scope="row">{id}</th>
      <td>{date}</td>
      <td>{descr}</td>
      <td>{sign}</td>
      <td>{amount}</td>
      <td>
        <MDBIcon 
          fas icon="pen" 
          id='pen' 
          className={colorIconPen +' mx-2'} 
          onMouseEnter={colorizeIcon} 
          onMouseLeave={colorizeIcon}
          onClick={handleClick}/>
        <MDBIcon 
          far icon="trash-alt" 
          id='trash' 
          className={colorIconTrash +' mx-2'} 
          onMouseEnter={colorizeIcon} 
          onMouseLeave={colorizeIcon}
          onClick={handleClick}/>
      </td>
    </tr>
  );
}

export default TableRow;
