
import './BoxError.css';
import isEmpty from './isEmpty';

function BoxError(props) {

  const {msg} = props;  
  const classErrorFeedback = (isEmpty(msg) ? 'no-error' : 'error');

  return (
    <div className={classErrorFeedback}>
        {msg}
    </div>
  )
}

export default BoxError;