import { useState } from 'react';
import { MDBIcon } from 'mdb-react-ui-kit';

function TableRow(props) {
  const { singleLine:{id, date, descr, euro}, counter, handleClick } = props;
  const sign = +euro > 0 ? '+' : '-';
  
  const amount = Math.abs(+euro).toLocaleString('it-IT')
  
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
  
  return (
    <tr>
      <th scope="row">{counter}</th>
      <td>{date}</td>
      <td>{descr}</td>
      <td>{sign}</td>
      <td className={sign == '-' ? 'text-danger' : ''}>
        {amount}
      </td>
      <td>
        <MDBIcon 
          fas icon="pen" 
          id='pen' 
          className={colorIconPen +' mx-2'} 
          onMouseEnter={colorizeIcon} 
          onMouseLeave={colorizeIcon}
          onClick={(e)=> handleClick(e, id
          )}/>
        <MDBIcon 
          far icon="trash-alt" 
          id='trash' 
          className={colorIconTrash +' mx-2'} 
          onMouseEnter={colorizeIcon} 
          onMouseLeave={colorizeIcon}
          onClick={(e)=> handleClick(e, id)}/>
      </td>
    </tr>
  );
}

export default TableRow;
