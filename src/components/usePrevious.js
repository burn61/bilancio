// memorizza il valore precedente di una variabile
// https://blog.logrocket.com/accessing-previous-props-state-react-hooks/

import { useEffect, useRef } from "react";

function usePrevious(value) {
    const ref = useRef();
    console.log('val=', value);
    useEffect(() => {
      ref.current = value; //assign the value of ref to the argument
    },[value]); //this code will run when the value of 'value' changes
    return ref.current; //in the end, return the current ref value.
  }
  export default usePrevious;

/* 
        Uso del custom hook

function Counter() {
  const [count, setCount] = useState(0);
  // 👇 look here
  const prevCount = usePrevious(count)

  return <h1> Now: {count}, before: {prevCount} </h1>;
}

*/
